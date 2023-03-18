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
const user = require('../../user');
const meta = require('../../meta');
const db = require('../../database');
const pagination = require('../../pagination');
const events = require('../../events');
const plugins = require('../../plugins');
const privileges = require('../../privileges');
const utils = require('../../utils');
const usersController = module.exports;
const userFields = stryMutAct_9fa48("7784") ? [] : (stryCov_9fa48("7784"), [stryMutAct_9fa48("7785") ? "" : (stryCov_9fa48("7785"), 'uid'), stryMutAct_9fa48("7786") ? "" : (stryCov_9fa48("7786"), 'username'), stryMutAct_9fa48("7787") ? "" : (stryCov_9fa48("7787"), 'userslug'), stryMutAct_9fa48("7788") ? "" : (stryCov_9fa48("7788"), 'email'), stryMutAct_9fa48("7789") ? "" : (stryCov_9fa48("7789"), 'postcount'), stryMutAct_9fa48("7790") ? "" : (stryCov_9fa48("7790"), 'joindate'), stryMutAct_9fa48("7791") ? "" : (stryCov_9fa48("7791"), 'banned'), stryMutAct_9fa48("7792") ? "" : (stryCov_9fa48("7792"), 'reputation'), stryMutAct_9fa48("7793") ? "" : (stryCov_9fa48("7793"), 'picture'), stryMutAct_9fa48("7794") ? "" : (stryCov_9fa48("7794"), 'flags'), stryMutAct_9fa48("7795") ? "" : (stryCov_9fa48("7795"), 'lastonline'), stryMutAct_9fa48("7796") ? "" : (stryCov_9fa48("7796"), 'email:confirmed')]);
usersController.index = async function (req, res) {
  if (stryMutAct_9fa48("7797")) {
    {}
  } else {
    stryCov_9fa48("7797");
    if (stryMutAct_9fa48("7799") ? false : stryMutAct_9fa48("7798") ? true : (stryCov_9fa48("7798", "7799"), req.query.query)) {
      if (stryMutAct_9fa48("7800")) {
        {}
      } else {
        stryCov_9fa48("7800");
        await usersController.search(req, res);
      }
    } else {
      if (stryMutAct_9fa48("7801")) {
        {}
      } else {
        stryCov_9fa48("7801");
        await getUsers(req, res);
      }
    }
  }
};
async function getUsers(req, res) {
  if (stryMutAct_9fa48("7802")) {
    {}
  } else {
    stryCov_9fa48("7802");
    const sortDirection = stryMutAct_9fa48("7805") ? req.query.sortDirection && 'desc' : stryMutAct_9fa48("7804") ? false : stryMutAct_9fa48("7803") ? true : (stryCov_9fa48("7803", "7804", "7805"), req.query.sortDirection || (stryMutAct_9fa48("7806") ? "" : (stryCov_9fa48("7806"), 'desc')));
    const reverse = stryMutAct_9fa48("7809") ? sortDirection !== 'desc' : stryMutAct_9fa48("7808") ? false : stryMutAct_9fa48("7807") ? true : (stryCov_9fa48("7807", "7808", "7809"), sortDirection === (stryMutAct_9fa48("7810") ? "" : (stryCov_9fa48("7810"), 'desc')));
    const page = stryMutAct_9fa48("7813") ? parseInt(req.query.page, 10) && 1 : stryMutAct_9fa48("7812") ? false : stryMutAct_9fa48("7811") ? true : (stryCov_9fa48("7811", "7812", "7813"), parseInt(req.query.page, 10) || 1);
    let resultsPerPage = stryMutAct_9fa48("7816") ? parseInt(req.query.resultsPerPage, 10) && 50 : stryMutAct_9fa48("7815") ? false : stryMutAct_9fa48("7814") ? true : (stryCov_9fa48("7814", "7815", "7816"), parseInt(req.query.resultsPerPage, 10) || 50);
    if (stryMutAct_9fa48("7819") ? false : stryMutAct_9fa48("7818") ? true : stryMutAct_9fa48("7817") ? [50, 100, 250, 500].includes(resultsPerPage) : (stryCov_9fa48("7817", "7818", "7819"), !(stryMutAct_9fa48("7820") ? [] : (stryCov_9fa48("7820"), [50, 100, 250, 500])).includes(resultsPerPage))) {
      if (stryMutAct_9fa48("7821")) {
        {}
      } else {
        stryCov_9fa48("7821");
        resultsPerPage = 50;
      }
    }
    let sortBy = validator.escape(stryMutAct_9fa48("7824") ? req.query.sortBy && '' : stryMutAct_9fa48("7823") ? false : stryMutAct_9fa48("7822") ? true : (stryCov_9fa48("7822", "7823", "7824"), req.query.sortBy || (stryMutAct_9fa48("7825") ? "Stryker was here!" : (stryCov_9fa48("7825"), ''))));
    const filterBy = Array.isArray(stryMutAct_9fa48("7828") ? req.query.filters && [] : stryMutAct_9fa48("7827") ? false : stryMutAct_9fa48("7826") ? true : (stryCov_9fa48("7826", "7827", "7828"), req.query.filters || (stryMutAct_9fa48("7829") ? ["Stryker was here"] : (stryCov_9fa48("7829"), [])))) ? stryMutAct_9fa48("7832") ? req.query.filters && [] : stryMutAct_9fa48("7831") ? false : stryMutAct_9fa48("7830") ? true : (stryCov_9fa48("7830", "7831", "7832"), req.query.filters || (stryMutAct_9fa48("7833") ? ["Stryker was here"] : (stryCov_9fa48("7833"), []))) : stryMutAct_9fa48("7834") ? [] : (stryCov_9fa48("7834"), [req.query.filters]);
    const start = stryMutAct_9fa48("7835") ? Math.max(0, page - 1) / resultsPerPage : (stryCov_9fa48("7835"), Math.max(0, stryMutAct_9fa48("7836") ? page + 1 : (stryCov_9fa48("7836"), page - 1)) * resultsPerPage);
    const stop = stryMutAct_9fa48("7837") ? start + resultsPerPage + 1 : (stryCov_9fa48("7837"), (stryMutAct_9fa48("7838") ? start - resultsPerPage : (stryCov_9fa48("7838"), start + resultsPerPage)) - 1);
    function buildSet() {
      if (stryMutAct_9fa48("7839")) {
        {}
      } else {
        stryCov_9fa48("7839");
        const sortToSet = stryMutAct_9fa48("7840") ? {} : (stryCov_9fa48("7840"), {
          postcount: stryMutAct_9fa48("7841") ? "" : (stryCov_9fa48("7841"), 'users:postcount'),
          reputation: stryMutAct_9fa48("7842") ? "" : (stryCov_9fa48("7842"), 'users:reputation'),
          joindate: stryMutAct_9fa48("7843") ? "" : (stryCov_9fa48("7843"), 'users:joindate'),
          lastonline: stryMutAct_9fa48("7844") ? "" : (stryCov_9fa48("7844"), 'users:online'),
          flags: stryMutAct_9fa48("7845") ? "" : (stryCov_9fa48("7845"), 'users:flags')
        });
        const set = stryMutAct_9fa48("7846") ? ["Stryker was here"] : (stryCov_9fa48("7846"), []);
        if (stryMutAct_9fa48("7848") ? false : stryMutAct_9fa48("7847") ? true : (stryCov_9fa48("7847", "7848"), sortBy)) {
          if (stryMutAct_9fa48("7849")) {
            {}
          } else {
            stryCov_9fa48("7849");
            set.push(sortToSet[sortBy]);
          }
        }
        if (stryMutAct_9fa48("7851") ? false : stryMutAct_9fa48("7850") ? true : (stryCov_9fa48("7850", "7851"), filterBy.includes(stryMutAct_9fa48("7852") ? "" : (stryCov_9fa48("7852"), 'unverified')))) {
          if (stryMutAct_9fa48("7853")) {
            {}
          } else {
            stryCov_9fa48("7853");
            set.push(stryMutAct_9fa48("7854") ? "" : (stryCov_9fa48("7854"), 'group:unverified-users:members'));
          }
        }
        if (stryMutAct_9fa48("7856") ? false : stryMutAct_9fa48("7855") ? true : (stryCov_9fa48("7855", "7856"), filterBy.includes(stryMutAct_9fa48("7857") ? "" : (stryCov_9fa48("7857"), 'verified')))) {
          if (stryMutAct_9fa48("7858")) {
            {}
          } else {
            stryCov_9fa48("7858");
            set.push(stryMutAct_9fa48("7859") ? "" : (stryCov_9fa48("7859"), 'group:verified-users:members'));
          }
        }
        if (stryMutAct_9fa48("7861") ? false : stryMutAct_9fa48("7860") ? true : (stryCov_9fa48("7860", "7861"), filterBy.includes(stryMutAct_9fa48("7862") ? "" : (stryCov_9fa48("7862"), 'banned')))) {
          if (stryMutAct_9fa48("7863")) {
            {}
          } else {
            stryCov_9fa48("7863");
            set.push(stryMutAct_9fa48("7864") ? "" : (stryCov_9fa48("7864"), 'users:banned'));
          }
        }
        if (stryMutAct_9fa48("7867") ? false : stryMutAct_9fa48("7866") ? true : stryMutAct_9fa48("7865") ? set.length : (stryCov_9fa48("7865", "7866", "7867"), !set.length)) {
          if (stryMutAct_9fa48("7868")) {
            {}
          } else {
            stryCov_9fa48("7868");
            set.push(stryMutAct_9fa48("7869") ? "" : (stryCov_9fa48("7869"), 'users:online'));
            sortBy = stryMutAct_9fa48("7870") ? "" : (stryCov_9fa48("7870"), 'lastonline');
          }
        }
        return (stryMutAct_9fa48("7874") ? set.length <= 1 : stryMutAct_9fa48("7873") ? set.length >= 1 : stryMutAct_9fa48("7872") ? false : stryMutAct_9fa48("7871") ? true : (stryCov_9fa48("7871", "7872", "7873", "7874"), set.length > 1)) ? set : set[0];
      }
    }
    async function getCount(set) {
      if (stryMutAct_9fa48("7875")) {
        {}
      } else {
        stryCov_9fa48("7875");
        if (stryMutAct_9fa48("7877") ? false : stryMutAct_9fa48("7876") ? true : (stryCov_9fa48("7876", "7877"), Array.isArray(set))) {
          if (stryMutAct_9fa48("7878")) {
            {}
          } else {
            stryCov_9fa48("7878");
            return await db.sortedSetIntersectCard(set);
          }
        }
        return await db.sortedSetCard(set);
      }
    }
    async function getUids(set) {
      if (stryMutAct_9fa48("7879")) {
        {}
      } else {
        stryCov_9fa48("7879");
        let uids = stryMutAct_9fa48("7880") ? ["Stryker was here"] : (stryCov_9fa48("7880"), []);
        if (stryMutAct_9fa48("7882") ? false : stryMutAct_9fa48("7881") ? true : (stryCov_9fa48("7881", "7882"), Array.isArray(set))) {
          if (stryMutAct_9fa48("7883")) {
            {}
          } else {
            stryCov_9fa48("7883");
            const weights = set.map(stryMutAct_9fa48("7884") ? () => undefined : (stryCov_9fa48("7884"), (s, index) => index ? 0 : 1));
            uids = await db[reverse ? stryMutAct_9fa48("7885") ? "" : (stryCov_9fa48("7885"), 'getSortedSetRevIntersect') : stryMutAct_9fa48("7886") ? "" : (stryCov_9fa48("7886"), 'getSortedSetIntersect')](stryMutAct_9fa48("7887") ? {} : (stryCov_9fa48("7887"), {
              sets: set,
              start: start,
              stop: stop,
              weights: weights
            }));
          }
        } else {
          if (stryMutAct_9fa48("7888")) {
            {}
          } else {
            stryCov_9fa48("7888");
            uids = await db[reverse ? stryMutAct_9fa48("7889") ? "" : (stryCov_9fa48("7889"), 'getSortedSetRevRange') : stryMutAct_9fa48("7890") ? "" : (stryCov_9fa48("7890"), 'getSortedSetRange')](set, start, stop);
          }
        }
        return uids;
      }
    }
    const set = buildSet();
    const uids = await getUids(set);
    const [count, users] = await Promise.all(stryMutAct_9fa48("7891") ? [] : (stryCov_9fa48("7891"), [getCount(set), loadUserInfo(req.uid, uids)]));
    await render(req, res, stryMutAct_9fa48("7892") ? {} : (stryCov_9fa48("7892"), {
      users: stryMutAct_9fa48("7893") ? users : (stryCov_9fa48("7893"), users.filter(stryMutAct_9fa48("7894") ? () => undefined : (stryCov_9fa48("7894"), user => stryMutAct_9fa48("7897") ? user || parseInt(user.uid, 10) : stryMutAct_9fa48("7896") ? false : stryMutAct_9fa48("7895") ? true : (stryCov_9fa48("7895", "7896", "7897"), user && parseInt(user.uid, 10))))),
      page: page,
      pageCount: Math.max(1, Math.ceil(stryMutAct_9fa48("7898") ? count * resultsPerPage : (stryCov_9fa48("7898"), count / resultsPerPage))),
      resultsPerPage: resultsPerPage,
      reverse: reverse,
      sortBy: sortBy
    }));
  }
}
usersController.search = async function (req, res) {
  if (stryMutAct_9fa48("7899")) {
    {}
  } else {
    stryCov_9fa48("7899");
    const sortDirection = stryMutAct_9fa48("7902") ? req.query.sortDirection && 'desc' : stryMutAct_9fa48("7901") ? false : stryMutAct_9fa48("7900") ? true : (stryCov_9fa48("7900", "7901", "7902"), req.query.sortDirection || (stryMutAct_9fa48("7903") ? "" : (stryCov_9fa48("7903"), 'desc')));
    const reverse = stryMutAct_9fa48("7906") ? sortDirection !== 'desc' : stryMutAct_9fa48("7905") ? false : stryMutAct_9fa48("7904") ? true : (stryCov_9fa48("7904", "7905", "7906"), sortDirection === (stryMutAct_9fa48("7907") ? "" : (stryCov_9fa48("7907"), 'desc')));
    const page = stryMutAct_9fa48("7910") ? parseInt(req.query.page, 10) && 1 : stryMutAct_9fa48("7909") ? false : stryMutAct_9fa48("7908") ? true : (stryCov_9fa48("7908", "7909", "7910"), parseInt(req.query.page, 10) || 1);
    let resultsPerPage = stryMutAct_9fa48("7913") ? parseInt(req.query.resultsPerPage, 10) && 50 : stryMutAct_9fa48("7912") ? false : stryMutAct_9fa48("7911") ? true : (stryCov_9fa48("7911", "7912", "7913"), parseInt(req.query.resultsPerPage, 10) || 50);
    if (stryMutAct_9fa48("7916") ? false : stryMutAct_9fa48("7915") ? true : stryMutAct_9fa48("7914") ? [50, 100, 250, 500].includes(resultsPerPage) : (stryCov_9fa48("7914", "7915", "7916"), !(stryMutAct_9fa48("7917") ? [] : (stryCov_9fa48("7917"), [50, 100, 250, 500])).includes(resultsPerPage))) {
      if (stryMutAct_9fa48("7918")) {
        {}
      } else {
        stryCov_9fa48("7918");
        resultsPerPage = 50;
      }
    }
    const searchData = await user.search(stryMutAct_9fa48("7919") ? {} : (stryCov_9fa48("7919"), {
      uid: req.uid,
      query: req.query.query,
      searchBy: req.query.searchBy,
      sortBy: req.query.sortBy,
      sortDirection: sortDirection,
      filters: req.query.filters,
      page: page,
      resultsPerPage: resultsPerPage,
      findUids: async function (query, searchBy, hardCap) {
        if (stryMutAct_9fa48("7920")) {
          {}
        } else {
          stryCov_9fa48("7920");
          if (stryMutAct_9fa48("7923") ? !query && query.length < 2 : stryMutAct_9fa48("7922") ? false : stryMutAct_9fa48("7921") ? true : (stryCov_9fa48("7921", "7922", "7923"), (stryMutAct_9fa48("7924") ? query : (stryCov_9fa48("7924"), !query)) || (stryMutAct_9fa48("7927") ? query.length >= 2 : stryMutAct_9fa48("7926") ? query.length <= 2 : stryMutAct_9fa48("7925") ? false : (stryCov_9fa48("7925", "7926", "7927"), query.length < 2)))) {
            if (stryMutAct_9fa48("7928")) {
              {}
            } else {
              stryCov_9fa48("7928");
              return stryMutAct_9fa48("7929") ? ["Stryker was here"] : (stryCov_9fa48("7929"), []);
            }
          }
          query = stryMutAct_9fa48("7930") ? String(query).toUpperCase() : (stryCov_9fa48("7930"), String(query).toLowerCase());
          if (stryMutAct_9fa48("7933") ? false : stryMutAct_9fa48("7932") ? true : stryMutAct_9fa48("7931") ? query.endsWith('*') : (stryCov_9fa48("7931", "7932", "7933"), !(stryMutAct_9fa48("7934") ? query.startsWith('*') : (stryCov_9fa48("7934"), query.endsWith(stryMutAct_9fa48("7935") ? "" : (stryCov_9fa48("7935"), '*')))))) {
            if (stryMutAct_9fa48("7936")) {
              {}
            } else {
              stryCov_9fa48("7936");
              query += stryMutAct_9fa48("7937") ? "" : (stryCov_9fa48("7937"), '*');
            }
          }
          const data = await db.getSortedSetScan(stryMutAct_9fa48("7938") ? {} : (stryCov_9fa48("7938"), {
            key: stryMutAct_9fa48("7939") ? `` : (stryCov_9fa48("7939"), `${searchBy}:sorted`),
            match: query,
            limit: stryMutAct_9fa48("7942") ? hardCap && resultsPerPage * 10 : stryMutAct_9fa48("7941") ? false : stryMutAct_9fa48("7940") ? true : (stryCov_9fa48("7940", "7941", "7942"), hardCap || (stryMutAct_9fa48("7943") ? resultsPerPage / 10 : (stryCov_9fa48("7943"), resultsPerPage * 10)))
          }));
          return data.map(stryMutAct_9fa48("7944") ? () => undefined : (stryCov_9fa48("7944"), data => data.split(stryMutAct_9fa48("7945") ? "" : (stryCov_9fa48("7945"), ':')).pop()));
        }
      }
    }));
    const uids = searchData.users.map(stryMutAct_9fa48("7946") ? () => undefined : (stryCov_9fa48("7946"), user => stryMutAct_9fa48("7949") ? user || user.uid : stryMutAct_9fa48("7948") ? false : stryMutAct_9fa48("7947") ? true : (stryCov_9fa48("7947", "7948", "7949"), user && user.uid)));
    searchData.users = await loadUserInfo(req.uid, uids);
    if (stryMutAct_9fa48("7952") ? req.query.searchBy !== 'ip' : stryMutAct_9fa48("7951") ? false : stryMutAct_9fa48("7950") ? true : (stryCov_9fa48("7950", "7951", "7952"), req.query.searchBy === (stryMutAct_9fa48("7953") ? "" : (stryCov_9fa48("7953"), 'ip')))) {
      if (stryMutAct_9fa48("7954")) {
        {}
      } else {
        stryCov_9fa48("7954");
        searchData.users.forEach(user => {
          if (stryMutAct_9fa48("7955")) {
            {}
          } else {
            stryCov_9fa48("7955");
            user.ip = user.ips.find(stryMutAct_9fa48("7956") ? () => undefined : (stryCov_9fa48("7956"), ip => ip.includes(String(req.query.query))));
          }
        });
      }
    }
    searchData.query = validator.escape(String(stryMutAct_9fa48("7959") ? req.query.query && '' : stryMutAct_9fa48("7958") ? false : stryMutAct_9fa48("7957") ? true : (stryCov_9fa48("7957", "7958", "7959"), req.query.query || (stryMutAct_9fa48("7960") ? "Stryker was here!" : (stryCov_9fa48("7960"), '')))));
    searchData.page = page;
    searchData.resultsPerPage = resultsPerPage;
    searchData.sortBy = req.query.sortBy;
    searchData.reverse = reverse;
    await render(req, res, searchData);
  }
};
async function loadUserInfo(callerUid, uids) {
  if (stryMutAct_9fa48("7961")) {
    {}
  } else {
    stryCov_9fa48("7961");
    async function getIPs() {
      if (stryMutAct_9fa48("7962")) {
        {}
      } else {
        stryCov_9fa48("7962");
        return await Promise.all(uids.map(stryMutAct_9fa48("7963") ? () => undefined : (stryCov_9fa48("7963"), uid => db.getSortedSetRevRange(stryMutAct_9fa48("7964") ? `` : (stryCov_9fa48("7964"), `uid:${uid}:ip`), 0, stryMutAct_9fa48("7965") ? +1 : (stryCov_9fa48("7965"), -1)))));
      }
    }
    const [isAdmin, userData, lastonline, ips] = await Promise.all(stryMutAct_9fa48("7966") ? [] : (stryCov_9fa48("7966"), [user.isAdministrator(uids), user.getUsersWithFields(uids, userFields, callerUid), db.sortedSetScores(stryMutAct_9fa48("7967") ? "" : (stryCov_9fa48("7967"), 'users:online'), uids), getIPs()]));
    userData.forEach((user, index) => {
      if (stryMutAct_9fa48("7968")) {
        {}
      } else {
        stryCov_9fa48("7968");
        if (stryMutAct_9fa48("7970") ? false : stryMutAct_9fa48("7969") ? true : (stryCov_9fa48("7969", "7970"), user)) {
          if (stryMutAct_9fa48("7971")) {
            {}
          } else {
            stryCov_9fa48("7971");
            user.administrator = isAdmin[index];
            user.flags = stryMutAct_9fa48("7974") ? userData[index].flags && 0 : stryMutAct_9fa48("7973") ? false : stryMutAct_9fa48("7972") ? true : (stryCov_9fa48("7972", "7973", "7974"), userData[index].flags || 0);
            const timestamp = stryMutAct_9fa48("7977") ? lastonline[index] && user.joindate : stryMutAct_9fa48("7976") ? false : stryMutAct_9fa48("7975") ? true : (stryCov_9fa48("7975", "7976", "7977"), lastonline[index] || user.joindate);
            user.lastonline = timestamp;
            user.lastonlineISO = utils.toISOString(timestamp);
            user.ips = ips[index];
            user.ip = (stryMutAct_9fa48("7980") ? ips[index] || ips[index][0] : stryMutAct_9fa48("7979") ? false : stryMutAct_9fa48("7978") ? true : (stryCov_9fa48("7978", "7979", "7980"), ips[index] && ips[index][0])) ? ips[index][0] : null;
          }
        }
      }
    });
    return userData;
  }
}
usersController.registrationQueue = async function (req, res) {
  if (stryMutAct_9fa48("7981")) {
    {}
  } else {
    stryCov_9fa48("7981");
    const page = stryMutAct_9fa48("7984") ? parseInt(req.query.page, 10) && 1 : stryMutAct_9fa48("7983") ? false : stryMutAct_9fa48("7982") ? true : (stryCov_9fa48("7982", "7983", "7984"), parseInt(req.query.page, 10) || 1);
    const itemsPerPage = 20;
    const start = stryMutAct_9fa48("7985") ? (page - 1) / 20 : (stryCov_9fa48("7985"), (stryMutAct_9fa48("7986") ? page + 1 : (stryCov_9fa48("7986"), page - 1)) * 20);
    const stop = stryMutAct_9fa48("7987") ? start + itemsPerPage + 1 : (stryCov_9fa48("7987"), (stryMutAct_9fa48("7988") ? start - itemsPerPage : (stryCov_9fa48("7988"), start + itemsPerPage)) - 1);
    const data = await utils.promiseParallel(stryMutAct_9fa48("7989") ? {} : (stryCov_9fa48("7989"), {
      registrationQueueCount: db.sortedSetCard(stryMutAct_9fa48("7990") ? "" : (stryCov_9fa48("7990"), 'registration:queue')),
      users: user.getRegistrationQueue(start, stop),
      customHeaders: plugins.hooks.fire(stryMutAct_9fa48("7991") ? "" : (stryCov_9fa48("7991"), 'filter:admin.registrationQueue.customHeaders'), stryMutAct_9fa48("7992") ? {} : (stryCov_9fa48("7992"), {
        headers: stryMutAct_9fa48("7993") ? ["Stryker was here"] : (stryCov_9fa48("7993"), [])
      })),
      invites: getInvites()
    }));
    const pageCount = Math.max(1, Math.ceil(stryMutAct_9fa48("7994") ? data.registrationQueueCount * itemsPerPage : (stryCov_9fa48("7994"), data.registrationQueueCount / itemsPerPage)));
    data.pagination = pagination.create(page, pageCount);
    data.customHeaders = data.customHeaders.headers;
    res.render(stryMutAct_9fa48("7995") ? "" : (stryCov_9fa48("7995"), 'admin/manage/registration'), data);
  }
};
async function getInvites() {
  if (stryMutAct_9fa48("7996")) {
    {}
  } else {
    stryCov_9fa48("7996");
    const invitations = await user.getAllInvites();
    const uids = invitations.map(stryMutAct_9fa48("7997") ? () => undefined : (stryCov_9fa48("7997"), invite => invite.uid));
    let usernames = await user.getUsersFields(uids, stryMutAct_9fa48("7998") ? [] : (stryCov_9fa48("7998"), [stryMutAct_9fa48("7999") ? "" : (stryCov_9fa48("7999"), 'username')]));
    usernames = usernames.map(stryMutAct_9fa48("8000") ? () => undefined : (stryCov_9fa48("8000"), user => user.username));
    invitations.forEach((invites, index) => {
      if (stryMutAct_9fa48("8001")) {
        {}
      } else {
        stryCov_9fa48("8001");
        invites.username = usernames[index];
      }
    });
    async function getUsernamesByEmails(emails) {
      if (stryMutAct_9fa48("8002")) {
        {}
      } else {
        stryCov_9fa48("8002");
        const uids = await db.sortedSetScores(stryMutAct_9fa48("8003") ? "" : (stryCov_9fa48("8003"), 'email:uid'), emails.map(stryMutAct_9fa48("8004") ? () => undefined : (stryCov_9fa48("8004"), email => stryMutAct_9fa48("8005") ? String(email).toUpperCase() : (stryCov_9fa48("8005"), String(email).toLowerCase()))));
        const usernames = await user.getUsersFields(uids, stryMutAct_9fa48("8006") ? [] : (stryCov_9fa48("8006"), [stryMutAct_9fa48("8007") ? "" : (stryCov_9fa48("8007"), 'username')]));
        return usernames.map(stryMutAct_9fa48("8008") ? () => undefined : (stryCov_9fa48("8008"), user => user.username));
      }
    }
    usernames = await Promise.all(invitations.map(stryMutAct_9fa48("8009") ? () => undefined : (stryCov_9fa48("8009"), invites => getUsernamesByEmails(invites.invitations))));
    invitations.forEach((invites, index) => {
      if (stryMutAct_9fa48("8010")) {
        {}
      } else {
        stryCov_9fa48("8010");
        invites.invitations = invites.invitations.map(stryMutAct_9fa48("8011") ? () => undefined : (stryCov_9fa48("8011"), (email, i) => stryMutAct_9fa48("8012") ? {} : (stryCov_9fa48("8012"), {
          email: email,
          username: (stryMutAct_9fa48("8015") ? usernames[index][i] !== '[[global:guest]]' : stryMutAct_9fa48("8014") ? false : stryMutAct_9fa48("8013") ? true : (stryCov_9fa48("8013", "8014", "8015"), usernames[index][i] === (stryMutAct_9fa48("8016") ? "" : (stryCov_9fa48("8016"), '[[global:guest]]')))) ? stryMutAct_9fa48("8017") ? "Stryker was here!" : (stryCov_9fa48("8017"), '') : usernames[index][i]
        })));
      }
    });
    return invitations;
  }
}
async function render(req, res, data) {
  if (stryMutAct_9fa48("8018")) {
    {}
  } else {
    stryCov_9fa48("8018");
    data.pagination = pagination.create(data.page, data.pageCount, req.query);
    const {
      registrationType
    } = meta.config;
    data.inviteOnly = stryMutAct_9fa48("8021") ? registrationType === 'invite-only' && registrationType === 'admin-invite-only' : stryMutAct_9fa48("8020") ? false : stryMutAct_9fa48("8019") ? true : (stryCov_9fa48("8019", "8020", "8021"), (stryMutAct_9fa48("8023") ? registrationType !== 'invite-only' : stryMutAct_9fa48("8022") ? false : (stryCov_9fa48("8022", "8023"), registrationType === (stryMutAct_9fa48("8024") ? "" : (stryCov_9fa48("8024"), 'invite-only')))) || (stryMutAct_9fa48("8026") ? registrationType !== 'admin-invite-only' : stryMutAct_9fa48("8025") ? false : (stryCov_9fa48("8025", "8026"), registrationType === (stryMutAct_9fa48("8027") ? "" : (stryCov_9fa48("8027"), 'admin-invite-only')))));
    data.adminInviteOnly = stryMutAct_9fa48("8030") ? registrationType !== 'admin-invite-only' : stryMutAct_9fa48("8029") ? false : stryMutAct_9fa48("8028") ? true : (stryCov_9fa48("8028", "8029", "8030"), registrationType === (stryMutAct_9fa48("8031") ? "" : (stryCov_9fa48("8031"), 'admin-invite-only')));
    data[stryMutAct_9fa48("8032") ? `` : (stryCov_9fa48("8032"), `sort_${data.sortBy}`)] = stryMutAct_9fa48("8033") ? false : (stryCov_9fa48("8033"), true);
    if (stryMutAct_9fa48("8035") ? false : stryMutAct_9fa48("8034") ? true : (stryCov_9fa48("8034", "8035"), req.query.searchBy)) {
      if (stryMutAct_9fa48("8036")) {
        {}
      } else {
        stryCov_9fa48("8036");
        data[stryMutAct_9fa48("8037") ? `` : (stryCov_9fa48("8037"), `searchBy_${validator.escape(String(req.query.searchBy))}`)] = stryMutAct_9fa48("8038") ? false : (stryCov_9fa48("8038"), true);
      }
    }
    const filterBy = Array.isArray(stryMutAct_9fa48("8041") ? req.query.filters && [] : stryMutAct_9fa48("8040") ? false : stryMutAct_9fa48("8039") ? true : (stryCov_9fa48("8039", "8040", "8041"), req.query.filters || (stryMutAct_9fa48("8042") ? ["Stryker was here"] : (stryCov_9fa48("8042"), [])))) ? stryMutAct_9fa48("8045") ? req.query.filters && [] : stryMutAct_9fa48("8044") ? false : stryMutAct_9fa48("8043") ? true : (stryCov_9fa48("8043", "8044", "8045"), req.query.filters || (stryMutAct_9fa48("8046") ? ["Stryker was here"] : (stryCov_9fa48("8046"), []))) : stryMutAct_9fa48("8047") ? [] : (stryCov_9fa48("8047"), [req.query.filters]);
    filterBy.forEach(filter => {
      if (stryMutAct_9fa48("8048")) {
        {}
      } else {
        stryCov_9fa48("8048");
        data[stryMutAct_9fa48("8049") ? `` : (stryCov_9fa48("8049"), `filterBy_${validator.escape(String(filter))}`)] = stryMutAct_9fa48("8050") ? false : (stryCov_9fa48("8050"), true);
      }
    });
    data.userCount = parseInt(await db.getObjectField(stryMutAct_9fa48("8051") ? "" : (stryCov_9fa48("8051"), 'global'), stryMutAct_9fa48("8052") ? "" : (stryCov_9fa48("8052"), 'userCount')), 10);
    if (stryMutAct_9fa48("8054") ? false : stryMutAct_9fa48("8053") ? true : (stryCov_9fa48("8053", "8054"), data.adminInviteOnly)) {
      if (stryMutAct_9fa48("8055")) {
        {}
      } else {
        stryCov_9fa48("8055");
        data.showInviteButton = await privileges.users.isAdministrator(req.uid);
      }
    } else {
      if (stryMutAct_9fa48("8056")) {
        {}
      } else {
        stryCov_9fa48("8056");
        data.showInviteButton = await privileges.users.hasInvitePrivilege(req.uid);
      }
    }
    res.render(stryMutAct_9fa48("8057") ? "" : (stryCov_9fa48("8057"), 'admin/manage/users'), data);
  }
}
usersController.getCSV = async function (req, res, next) {
  if (stryMutAct_9fa48("8058")) {
    {}
  } else {
    stryCov_9fa48("8058");
    await events.log(stryMutAct_9fa48("8059") ? {} : (stryCov_9fa48("8059"), {
      type: stryMutAct_9fa48("8060") ? "" : (stryCov_9fa48("8060"), 'getUsersCSV'),
      uid: req.uid,
      ip: req.ip
    }));
    const path = require('path');
    const {
      baseDir
    } = require('../../constants').paths;
    res.sendFile(stryMutAct_9fa48("8061") ? "" : (stryCov_9fa48("8061"), 'users.csv'), stryMutAct_9fa48("8062") ? {} : (stryCov_9fa48("8062"), {
      root: path.join(baseDir, stryMutAct_9fa48("8063") ? "" : (stryCov_9fa48("8063"), 'build/export')),
      headers: stryMutAct_9fa48("8064") ? {} : (stryCov_9fa48("8064"), {
        'Content-Type': stryMutAct_9fa48("8065") ? "" : (stryCov_9fa48("8065"), 'text/csv'),
        'Content-Disposition': stryMutAct_9fa48("8066") ? "" : (stryCov_9fa48("8066"), 'attachment; filename=users.csv')
      })
    }), err => {
      if (stryMutAct_9fa48("8067")) {
        {}
      } else {
        stryCov_9fa48("8067");
        if (stryMutAct_9fa48("8069") ? false : stryMutAct_9fa48("8068") ? true : (stryCov_9fa48("8068", "8069"), err)) {
          if (stryMutAct_9fa48("8070")) {
            {}
          } else {
            stryCov_9fa48("8070");
            if (stryMutAct_9fa48("8073") ? err.code !== 'ENOENT' : stryMutAct_9fa48("8072") ? false : stryMutAct_9fa48("8071") ? true : (stryCov_9fa48("8071", "8072", "8073"), err.code === (stryMutAct_9fa48("8074") ? "" : (stryCov_9fa48("8074"), 'ENOENT')))) {
              if (stryMutAct_9fa48("8075")) {
                {}
              } else {
                stryCov_9fa48("8075");
                res.locals.isAPI = stryMutAct_9fa48("8076") ? true : (stryCov_9fa48("8076"), false);
                return next();
              }
            }
            return next(err);
          }
        }
      }
    });
  }
};