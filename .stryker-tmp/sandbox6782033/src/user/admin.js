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
const fs = require('fs');
const path = require('path');
const winston = require('winston');
const validator = require('validator');
const {
  baseDir
} = require('../constants').paths;
const db = require('../database');
const plugins = require('../plugins');
const batch = require('../batch');
module.exports = function (User) {
  if (stryMutAct_9fa48("45056")) {
    {}
  } else {
    stryCov_9fa48("45056");
    User.logIP = async function (uid, ip) {
      if (stryMutAct_9fa48("45057")) {
        {}
      } else {
        stryCov_9fa48("45057");
        if (stryMutAct_9fa48("45060") ? false : stryMutAct_9fa48("45059") ? true : stryMutAct_9fa48("45058") ? parseInt(uid, 10) > 0 : (stryCov_9fa48("45058", "45059", "45060"), !(stryMutAct_9fa48("45064") ? parseInt(uid, 10) <= 0 : stryMutAct_9fa48("45063") ? parseInt(uid, 10) >= 0 : stryMutAct_9fa48("45062") ? false : stryMutAct_9fa48("45061") ? true : (stryCov_9fa48("45061", "45062", "45063", "45064"), parseInt(uid, 10) > 0)))) {
          if (stryMutAct_9fa48("45065")) {
            {}
          } else {
            stryCov_9fa48("45065");
            return;
          }
        }
        const now = Date.now();
        const bulk = stryMutAct_9fa48("45066") ? [] : (stryCov_9fa48("45066"), [stryMutAct_9fa48("45067") ? [] : (stryCov_9fa48("45067"), [stryMutAct_9fa48("45068") ? `` : (stryCov_9fa48("45068"), `uid:${uid}:ip`), now, stryMutAct_9fa48("45071") ? ip && 'Unknown' : stryMutAct_9fa48("45070") ? false : stryMutAct_9fa48("45069") ? true : (stryCov_9fa48("45069", "45070", "45071"), ip || (stryMutAct_9fa48("45072") ? "" : (stryCov_9fa48("45072"), 'Unknown')))])]);
        if (stryMutAct_9fa48("45074") ? false : stryMutAct_9fa48("45073") ? true : (stryCov_9fa48("45073", "45074"), ip)) {
          if (stryMutAct_9fa48("45075")) {
            {}
          } else {
            stryCov_9fa48("45075");
            bulk.push(stryMutAct_9fa48("45076") ? [] : (stryCov_9fa48("45076"), [stryMutAct_9fa48("45077") ? `` : (stryCov_9fa48("45077"), `ip:${ip}:uid`), now, uid]));
          }
        }
        await db.sortedSetAddBulk(bulk);
      }
    };
    User.getIPs = async function (uid, stop) {
      if (stryMutAct_9fa48("45078")) {
        {}
      } else {
        stryCov_9fa48("45078");
        const ips = await db.getSortedSetRevRange(stryMutAct_9fa48("45079") ? `` : (stryCov_9fa48("45079"), `uid:${uid}:ip`), 0, stop);
        return ips.map(stryMutAct_9fa48("45080") ? () => undefined : (stryCov_9fa48("45080"), ip => validator.escape(String(ip))));
      }
    };
    User.getUsersCSV = async function () {
      if (stryMutAct_9fa48("45081")) {
        {}
      } else {
        stryCov_9fa48("45081");
        winston.verbose(stryMutAct_9fa48("45082") ? "" : (stryCov_9fa48("45082"), '[user/getUsersCSV] Compiling User CSV data'));
        const data = await plugins.hooks.fire(stryMutAct_9fa48("45083") ? "" : (stryCov_9fa48("45083"), 'filter:user.csvFields'), stryMutAct_9fa48("45084") ? {} : (stryCov_9fa48("45084"), {
          fields: stryMutAct_9fa48("45085") ? [] : (stryCov_9fa48("45085"), [stryMutAct_9fa48("45086") ? "" : (stryCov_9fa48("45086"), 'uid'), stryMutAct_9fa48("45087") ? "" : (stryCov_9fa48("45087"), 'email'), stryMutAct_9fa48("45088") ? "" : (stryCov_9fa48("45088"), 'username')])
        }));
        let csvContent = stryMutAct_9fa48("45089") ? `` : (stryCov_9fa48("45089"), `${data.fields.join(stryMutAct_9fa48("45090") ? "" : (stryCov_9fa48("45090"), ','))}\n`);
        await batch.processSortedSet(stryMutAct_9fa48("45091") ? "" : (stryCov_9fa48("45091"), 'users:joindate'), async uids => {
          if (stryMutAct_9fa48("45092")) {
            {}
          } else {
            stryCov_9fa48("45092");
            const usersData = await User.getUsersFields(uids, data.fields);
            stryMutAct_9fa48("45093") ? csvContent -= usersData.reduce((memo, user) => {
              memo += `${data.fields.map(field => user[field]).join(',')}\n`;
              return memo;
            }, '') : (stryCov_9fa48("45093"), csvContent += usersData.reduce((memo, user) => {
              if (stryMutAct_9fa48("45094")) {
                {}
              } else {
                stryCov_9fa48("45094");
                memo += stryMutAct_9fa48("45095") ? `` : (stryCov_9fa48("45095"), `${data.fields.map(stryMutAct_9fa48("45096") ? () => undefined : (stryCov_9fa48("45096"), field => user[field])).join(stryMutAct_9fa48("45097") ? "" : (stryCov_9fa48("45097"), ','))}\n`);
                return memo;
              }
            }, stryMutAct_9fa48("45098") ? "Stryker was here!" : (stryCov_9fa48("45098"), '')));
          }
        }, {});
        return csvContent;
      }
    };
    User.exportUsersCSV = async function () {
      if (stryMutAct_9fa48("45099")) {
        {}
      } else {
        stryCov_9fa48("45099");
        winston.verbose(stryMutAct_9fa48("45100") ? "" : (stryCov_9fa48("45100"), '[user/exportUsersCSV] Exporting User CSV data'));
        const {
          fields,
          showIps
        } = await plugins.hooks.fire(stryMutAct_9fa48("45101") ? "" : (stryCov_9fa48("45101"), 'filter:user.csvFields'), stryMutAct_9fa48("45102") ? {} : (stryCov_9fa48("45102"), {
          fields: stryMutAct_9fa48("45103") ? [] : (stryCov_9fa48("45103"), [stryMutAct_9fa48("45104") ? "" : (stryCov_9fa48("45104"), 'email'), stryMutAct_9fa48("45105") ? "" : (stryCov_9fa48("45105"), 'username'), stryMutAct_9fa48("45106") ? "" : (stryCov_9fa48("45106"), 'uid')]),
          showIps: stryMutAct_9fa48("45107") ? false : (stryCov_9fa48("45107"), true)
        }));
        const fd = await fs.promises.open(path.join(baseDir, stryMutAct_9fa48("45108") ? "" : (stryCov_9fa48("45108"), 'build/export'), stryMutAct_9fa48("45109") ? "" : (stryCov_9fa48("45109"), 'users.csv')), stryMutAct_9fa48("45110") ? "" : (stryCov_9fa48("45110"), 'w'));
        fs.promises.appendFile(fd, stryMutAct_9fa48("45111") ? `` : (stryCov_9fa48("45111"), `${fields.join(stryMutAct_9fa48("45112") ? "" : (stryCov_9fa48("45112"), ','))}${showIps ? stryMutAct_9fa48("45113") ? "" : (stryCov_9fa48("45113"), ',ip') : stryMutAct_9fa48("45114") ? "Stryker was here!" : (stryCov_9fa48("45114"), '')}\n`));
        await batch.processSortedSet(stryMutAct_9fa48("45115") ? "" : (stryCov_9fa48("45115"), 'users:joindate'), async uids => {
          if (stryMutAct_9fa48("45116")) {
            {}
          } else {
            stryCov_9fa48("45116");
            const usersData = await User.getUsersFields(uids, stryMutAct_9fa48("45117") ? fields : (stryCov_9fa48("45117"), fields.slice()));
            let userIPs = stryMutAct_9fa48("45118") ? "Stryker was here!" : (stryCov_9fa48("45118"), '');
            let ips = stryMutAct_9fa48("45119") ? ["Stryker was here"] : (stryCov_9fa48("45119"), []);
            if (stryMutAct_9fa48("45121") ? false : stryMutAct_9fa48("45120") ? true : (stryCov_9fa48("45120", "45121"), showIps)) {
              if (stryMutAct_9fa48("45122")) {
                {}
              } else {
                stryCov_9fa48("45122");
                ips = await db.getSortedSetsMembers(uids.map(stryMutAct_9fa48("45123") ? () => undefined : (stryCov_9fa48("45123"), uid => stryMutAct_9fa48("45124") ? `` : (stryCov_9fa48("45124"), `uid:${uid}:ip`))));
              }
            }
            let line = stryMutAct_9fa48("45125") ? "Stryker was here!" : (stryCov_9fa48("45125"), '');
            usersData.forEach((user, index) => {
              if (stryMutAct_9fa48("45126")) {
                {}
              } else {
                stryCov_9fa48("45126");
                line += stryMutAct_9fa48("45127") ? `` : (stryCov_9fa48("45127"), `${fields.map(stryMutAct_9fa48("45128") ? () => undefined : (stryCov_9fa48("45128"), field => user[field])).join(stryMutAct_9fa48("45129") ? "" : (stryCov_9fa48("45129"), ','))}`);
                if (stryMutAct_9fa48("45131") ? false : stryMutAct_9fa48("45130") ? true : (stryCov_9fa48("45130", "45131"), showIps)) {
                  if (stryMutAct_9fa48("45132")) {
                    {}
                  } else {
                    stryCov_9fa48("45132");
                    userIPs = ips[index] ? ips[index].join(stryMutAct_9fa48("45133") ? "" : (stryCov_9fa48("45133"), ',')) : stryMutAct_9fa48("45134") ? "Stryker was here!" : (stryCov_9fa48("45134"), '');
                    line += stryMutAct_9fa48("45135") ? `` : (stryCov_9fa48("45135"), `,"${userIPs}"\n`);
                  }
                } else {
                  if (stryMutAct_9fa48("45136")) {
                    {}
                  } else {
                    stryCov_9fa48("45136");
                    line += stryMutAct_9fa48("45137") ? "" : (stryCov_9fa48("45137"), '\n');
                  }
                }
              }
            });
            await fs.promises.appendFile(fd, line);
          }
        }, stryMutAct_9fa48("45138") ? {} : (stryCov_9fa48("45138"), {
          batch: 5000,
          interval: 250
        }));
        await fd.close();
      }
    };
  }
};