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
const ipaddr = require('ipaddr.js');
const winston = require('winston');
const _ = require('lodash');
const validator = require('validator');
const db = require('../database');
const pubsub = require('../pubsub');
const plugins = require('../plugins');
const analytics = require('../analytics');
const Blacklist = module.exports;
Blacklist._rules = {};
Blacklist.load = async function () {
  if (stryMutAct_9fa48("23219")) {
    {}
  } else {
    stryCov_9fa48("23219");
    let rules = await Blacklist.get();
    rules = Blacklist.validate(rules);
    winston.verbose(stryMutAct_9fa48("23220") ? `` : (stryCov_9fa48("23220"), `[meta/blacklist] Loading ${rules.valid.length} blacklist rule(s)${(stryMutAct_9fa48("23224") ? rules.duplicateCount <= 0 : stryMutAct_9fa48("23223") ? rules.duplicateCount >= 0 : stryMutAct_9fa48("23222") ? false : stryMutAct_9fa48("23221") ? true : (stryCov_9fa48("23221", "23222", "23223", "23224"), rules.duplicateCount > 0)) ? stryMutAct_9fa48("23225") ? `` : (stryCov_9fa48("23225"), `, ignored ${rules.duplicateCount} duplicate(s)`) : stryMutAct_9fa48("23226") ? "Stryker was here!" : (stryCov_9fa48("23226"), '')}`));
    if (stryMutAct_9fa48("23228") ? false : stryMutAct_9fa48("23227") ? true : (stryCov_9fa48("23227", "23228"), rules.invalid.length)) {
      if (stryMutAct_9fa48("23229")) {
        {}
      } else {
        stryCov_9fa48("23229");
        winston.warn(stryMutAct_9fa48("23230") ? `` : (stryCov_9fa48("23230"), `[meta/blacklist] ${rules.invalid.length} invalid blacklist rule(s) were ignored.`));
      }
    }
    Blacklist._rules = stryMutAct_9fa48("23231") ? {} : (stryCov_9fa48("23231"), {
      ipv4: rules.ipv4,
      ipv6: rules.ipv6,
      cidr: rules.cidr,
      cidr6: rules.cidr6
    });
  }
};
pubsub.on(stryMutAct_9fa48("23232") ? "" : (stryCov_9fa48("23232"), 'blacklist:reload'), Blacklist.load);
Blacklist.save = async function (rules) {
  if (stryMutAct_9fa48("23233")) {
    {}
  } else {
    stryCov_9fa48("23233");
    await db.setObject(stryMutAct_9fa48("23234") ? "" : (stryCov_9fa48("23234"), 'ip-blacklist-rules'), stryMutAct_9fa48("23235") ? {} : (stryCov_9fa48("23235"), {
      rules: rules
    }));
    await Blacklist.load();
    pubsub.publish(stryMutAct_9fa48("23236") ? "" : (stryCov_9fa48("23236"), 'blacklist:reload'));
  }
};
Blacklist.get = async function () {
  if (stryMutAct_9fa48("23237")) {
    {}
  } else {
    stryCov_9fa48("23237");
    const data = await db.getObject(stryMutAct_9fa48("23238") ? "" : (stryCov_9fa48("23238"), 'ip-blacklist-rules'));
    return stryMutAct_9fa48("23241") ? data || data.rules : stryMutAct_9fa48("23240") ? false : stryMutAct_9fa48("23239") ? true : (stryCov_9fa48("23239", "23240", "23241"), data && data.rules);
  }
};
Blacklist.test = async function (clientIp) {
  if (stryMutAct_9fa48("23242")) {
    {}
  } else {
    stryCov_9fa48("23242");
    // Some handy test addresses
    // clientIp = '2001:db8:85a3:0:0:8a2e:370:7334'; // IPv6
    // clientIp = '127.0.15.1'; // IPv4
    // clientIp = '127.0.15.1:3443'; // IPv4 with port strip port to not fail
    if (stryMutAct_9fa48("23245") ? false : stryMutAct_9fa48("23244") ? true : stryMutAct_9fa48("23243") ? clientIp : (stryCov_9fa48("23243", "23244", "23245"), !clientIp)) {
      if (stryMutAct_9fa48("23246")) {
        {}
      } else {
        stryCov_9fa48("23246");
        return;
      }
    }
    clientIp = (stryMutAct_9fa48("23249") ? clientIp.split(':').length !== 2 : stryMutAct_9fa48("23248") ? false : stryMutAct_9fa48("23247") ? true : (stryCov_9fa48("23247", "23248", "23249"), clientIp.split(stryMutAct_9fa48("23250") ? "" : (stryCov_9fa48("23250"), ':')).length === 2)) ? clientIp.split(stryMutAct_9fa48("23251") ? "" : (stryCov_9fa48("23251"), ':'))[0] : clientIp;
    let addr;
    try {
      if (stryMutAct_9fa48("23252")) {
        {}
      } else {
        stryCov_9fa48("23252");
        addr = ipaddr.parse(clientIp);
      }
    } catch (err) {
      if (stryMutAct_9fa48("23253")) {
        {}
      } else {
        stryCov_9fa48("23253");
        winston.error(stryMutAct_9fa48("23254") ? `` : (stryCov_9fa48("23254"), `[meta/blacklist] Error parsing client IP : ${clientIp}`));
        throw err;
      }
    }
    if (stryMutAct_9fa48("23257") ? !Blacklist._rules.ipv4.includes(clientIp) &&
    // not explicitly specified in ipv4 list
    !Blacklist._rules.ipv6.includes(clientIp) ||
    // not explicitly specified in ipv6 list
    !Blacklist._rules.cidr.some(subnet => {
      const cidr = ipaddr.parseCIDR(subnet);
      if (addr.kind() !== cidr[0].kind()) {
        return false;
      }
      return addr.match(cidr);
    }) // not in a blacklisted IPv4 or IPv6 cidr range
    : stryMutAct_9fa48("23256") ? false : stryMutAct_9fa48("23255") ? true : (stryCov_9fa48("23255", "23256", "23257"), (stryMutAct_9fa48("23259") ? !Blacklist._rules.ipv4.includes(clientIp) ||
    // not explicitly specified in ipv4 list
    !Blacklist._rules.ipv6.includes(clientIp) : stryMutAct_9fa48("23258") ? true : (stryCov_9fa48("23258", "23259"), (stryMutAct_9fa48("23260") ? Blacklist._rules.ipv4.includes(clientIp) : (stryCov_9fa48("23260"), !Blacklist._rules.ipv4.includes(clientIp))) && ( // not explicitly specified in ipv4 list
    stryMutAct_9fa48("23261") ? Blacklist._rules.ipv6.includes(clientIp) : (stryCov_9fa48("23261"), !Blacklist._rules.ipv6.includes(clientIp))))) && ( // not explicitly specified in ipv6 list
    stryMutAct_9fa48("23262") ? Blacklist._rules.cidr.some(subnet => {
      const cidr = ipaddr.parseCIDR(subnet);
      if (addr.kind() !== cidr[0].kind()) {
        return false;
      }
      return addr.match(cidr);
    }) : (stryCov_9fa48("23262"), !(stryMutAct_9fa48("23263") ? Blacklist._rules.cidr.every(subnet => {
      const cidr = ipaddr.parseCIDR(subnet);
      if (addr.kind() !== cidr[0].kind()) {
        return false;
      }
      return addr.match(cidr);
    }) : (stryCov_9fa48("23263"), Blacklist._rules.cidr.some(subnet => {
      if (stryMutAct_9fa48("23264")) {
        {}
      } else {
        stryCov_9fa48("23264");
        const cidr = ipaddr.parseCIDR(subnet);
        if (stryMutAct_9fa48("23267") ? addr.kind() === cidr[0].kind() : stryMutAct_9fa48("23266") ? false : stryMutAct_9fa48("23265") ? true : (stryCov_9fa48("23265", "23266", "23267"), addr.kind() !== cidr[0].kind())) {
          if (stryMutAct_9fa48("23268")) {
            {}
          } else {
            stryCov_9fa48("23268");
            return stryMutAct_9fa48("23269") ? true : (stryCov_9fa48("23269"), false);
          }
        }
        return addr.match(cidr);
      }
    })))))) // not in a blacklisted IPv4 or IPv6 cidr range
    ) {
      if (stryMutAct_9fa48("23270")) {
        {}
      } else {
        stryCov_9fa48("23270");
        try {
          if (stryMutAct_9fa48("23271")) {
            {}
          } else {
            stryCov_9fa48("23271");
            // To return test failure, pass back an error in callback
            await plugins.hooks.fire(stryMutAct_9fa48("23272") ? "" : (stryCov_9fa48("23272"), 'filter:blacklist.test'), stryMutAct_9fa48("23273") ? {} : (stryCov_9fa48("23273"), {
              ip: clientIp
            }));
          }
        } catch (err) {
          if (stryMutAct_9fa48("23274")) {
            {}
          } else {
            stryCov_9fa48("23274");
            analytics.increment(stryMutAct_9fa48("23275") ? "" : (stryCov_9fa48("23275"), 'blacklist'));
            throw err;
          }
        }
      }
    } else {
      if (stryMutAct_9fa48("23276")) {
        {}
      } else {
        stryCov_9fa48("23276");
        const err = new Error(stryMutAct_9fa48("23277") ? "" : (stryCov_9fa48("23277"), '[[error:blacklisted-ip]]'));
        err.code = stryMutAct_9fa48("23278") ? "" : (stryCov_9fa48("23278"), 'blacklisted-ip');
        analytics.increment(stryMutAct_9fa48("23279") ? "" : (stryCov_9fa48("23279"), 'blacklist'));
        throw err;
      }
    }
  }
};
Blacklist.validate = function (rules) {
  if (stryMutAct_9fa48("23280")) {
    {}
  } else {
    stryCov_9fa48("23280");
    rules = (stryMutAct_9fa48("23283") ? rules && '' : stryMutAct_9fa48("23282") ? false : stryMutAct_9fa48("23281") ? true : (stryCov_9fa48("23281", "23282", "23283"), rules || (stryMutAct_9fa48("23284") ? "Stryker was here!" : (stryCov_9fa48("23284"), '')))).split(stryMutAct_9fa48("23285") ? "" : (stryCov_9fa48("23285"), '\n'));
    const ipv4 = stryMutAct_9fa48("23286") ? ["Stryker was here"] : (stryCov_9fa48("23286"), []);
    const ipv6 = stryMutAct_9fa48("23287") ? ["Stryker was here"] : (stryCov_9fa48("23287"), []);
    const cidr = stryMutAct_9fa48("23288") ? ["Stryker was here"] : (stryCov_9fa48("23288"), []);
    const invalid = stryMutAct_9fa48("23289") ? ["Stryker was here"] : (stryCov_9fa48("23289"), []);
    let duplicateCount = 0;
    const inlineCommentMatch = stryMutAct_9fa48("23291") ? /#.$/ : stryMutAct_9fa48("23290") ? /#.*/ : (stryCov_9fa48("23290", "23291"), /#.*$/);
    const whitelist = stryMutAct_9fa48("23292") ? [] : (stryCov_9fa48("23292"), [stryMutAct_9fa48("23293") ? "" : (stryCov_9fa48("23293"), '127.0.0.1'), stryMutAct_9fa48("23294") ? "" : (stryCov_9fa48("23294"), '::1'), stryMutAct_9fa48("23295") ? "" : (stryCov_9fa48("23295"), '::ffff:0:127.0.0.1')]);

    // Filter out blank lines and lines starting with the hash character (comments)
    // Also trim inputs and remove inline comments
    rules = stryMutAct_9fa48("23296") ? rules.map(rule => {
      rule = rule.replace(inlineCommentMatch, '').trim();
      return rule.length && !rule.startsWith('#') ? rule : null;
    }) : (stryCov_9fa48("23296"), rules.map(rule => {
      if (stryMutAct_9fa48("23297")) {
        {}
      } else {
        stryCov_9fa48("23297");
        rule = stryMutAct_9fa48("23298") ? rule.replace(inlineCommentMatch, '') : (stryCov_9fa48("23298"), rule.replace(inlineCommentMatch, stryMutAct_9fa48("23299") ? "Stryker was here!" : (stryCov_9fa48("23299"), '')).trim());
        return (stryMutAct_9fa48("23302") ? rule.length || !rule.startsWith('#') : stryMutAct_9fa48("23301") ? false : stryMutAct_9fa48("23300") ? true : (stryCov_9fa48("23300", "23301", "23302"), rule.length && (stryMutAct_9fa48("23303") ? rule.startsWith('#') : (stryCov_9fa48("23303"), !(stryMutAct_9fa48("23304") ? rule.endsWith('#') : (stryCov_9fa48("23304"), rule.startsWith(stryMutAct_9fa48("23305") ? "" : (stryCov_9fa48("23305"), '#')))))))) ? rule : null;
      }
    }).filter(Boolean));

    // Filter out duplicates
    const uniqRules = _.uniq(rules);
    stryMutAct_9fa48("23306") ? duplicateCount -= rules.length - uniqRules.length : (stryCov_9fa48("23306"), duplicateCount += stryMutAct_9fa48("23307") ? rules.length + uniqRules.length : (stryCov_9fa48("23307"), rules.length - uniqRules.length));
    rules = uniqRules;

    // Filter out invalid rules
    rules = stryMutAct_9fa48("23308") ? rules : (stryCov_9fa48("23308"), rules.filter(rule => {
      if (stryMutAct_9fa48("23309")) {
        {}
      } else {
        stryCov_9fa48("23309");
        let addr;
        let isRange = stryMutAct_9fa48("23310") ? true : (stryCov_9fa48("23310"), false);
        try {
          if (stryMutAct_9fa48("23311")) {
            {}
          } else {
            stryCov_9fa48("23311");
            addr = ipaddr.parse(rule);
          }
        } catch (e) {
          // Do nothing
        }
        try {
          if (stryMutAct_9fa48("23312")) {
            {}
          } else {
            stryCov_9fa48("23312");
            addr = ipaddr.parseCIDR(rule);
            isRange = stryMutAct_9fa48("23313") ? false : (stryCov_9fa48("23313"), true);
          }
        } catch (e) {
          // Do nothing
        }
        if (stryMutAct_9fa48("23316") ? !addr && whitelist.includes(rule) : stryMutAct_9fa48("23315") ? false : stryMutAct_9fa48("23314") ? true : (stryCov_9fa48("23314", "23315", "23316"), (stryMutAct_9fa48("23317") ? addr : (stryCov_9fa48("23317"), !addr)) || whitelist.includes(rule))) {
          if (stryMutAct_9fa48("23318")) {
            {}
          } else {
            stryCov_9fa48("23318");
            invalid.push(validator.escape(rule));
            return stryMutAct_9fa48("23319") ? true : (stryCov_9fa48("23319"), false);
          }
        }
        if (stryMutAct_9fa48("23322") ? false : stryMutAct_9fa48("23321") ? true : stryMutAct_9fa48("23320") ? isRange : (stryCov_9fa48("23320", "23321", "23322"), !isRange)) {
          if (stryMutAct_9fa48("23323")) {
            {}
          } else {
            stryCov_9fa48("23323");
            if (stryMutAct_9fa48("23326") ? addr.kind() === 'ipv4' || ipaddr.IPv4.isValid(rule) : stryMutAct_9fa48("23325") ? false : stryMutAct_9fa48("23324") ? true : (stryCov_9fa48("23324", "23325", "23326"), (stryMutAct_9fa48("23328") ? addr.kind() !== 'ipv4' : stryMutAct_9fa48("23327") ? true : (stryCov_9fa48("23327", "23328"), addr.kind() === (stryMutAct_9fa48("23329") ? "" : (stryCov_9fa48("23329"), 'ipv4')))) && ipaddr.IPv4.isValid(rule))) {
              if (stryMutAct_9fa48("23330")) {
                {}
              } else {
                stryCov_9fa48("23330");
                ipv4.push(rule);
                return stryMutAct_9fa48("23331") ? false : (stryCov_9fa48("23331"), true);
              }
            }
            if (stryMutAct_9fa48("23334") ? addr.kind() === 'ipv6' || ipaddr.IPv6.isValid(rule) : stryMutAct_9fa48("23333") ? false : stryMutAct_9fa48("23332") ? true : (stryCov_9fa48("23332", "23333", "23334"), (stryMutAct_9fa48("23336") ? addr.kind() !== 'ipv6' : stryMutAct_9fa48("23335") ? true : (stryCov_9fa48("23335", "23336"), addr.kind() === (stryMutAct_9fa48("23337") ? "" : (stryCov_9fa48("23337"), 'ipv6')))) && ipaddr.IPv6.isValid(rule))) {
              if (stryMutAct_9fa48("23338")) {
                {}
              } else {
                stryCov_9fa48("23338");
                ipv6.push(rule);
                return stryMutAct_9fa48("23339") ? false : (stryCov_9fa48("23339"), true);
              }
            }
          }
        } else {
          if (stryMutAct_9fa48("23340")) {
            {}
          } else {
            stryCov_9fa48("23340");
            cidr.push(rule);
            return stryMutAct_9fa48("23341") ? false : (stryCov_9fa48("23341"), true);
          }
        }
        return stryMutAct_9fa48("23342") ? true : (stryCov_9fa48("23342"), false);
      }
    }));
    return stryMutAct_9fa48("23343") ? {} : (stryCov_9fa48("23343"), {
      numRules: stryMutAct_9fa48("23344") ? rules.length - invalid.length : (stryCov_9fa48("23344"), rules.length + invalid.length),
      ipv4: ipv4,
      ipv6: ipv6,
      cidr: cidr,
      valid: rules,
      invalid: invalid,
      duplicateCount: duplicateCount
    });
  }
};
Blacklist.addRule = async function (rule) {
  if (stryMutAct_9fa48("23345")) {
    {}
  } else {
    stryCov_9fa48("23345");
    const {
      valid
    } = Blacklist.validate(rule);
    if (stryMutAct_9fa48("23348") ? false : stryMutAct_9fa48("23347") ? true : stryMutAct_9fa48("23346") ? valid.length : (stryCov_9fa48("23346", "23347", "23348"), !valid.length)) {
      if (stryMutAct_9fa48("23349")) {
        {}
      } else {
        stryCov_9fa48("23349");
        throw new Error(stryMutAct_9fa48("23350") ? "" : (stryCov_9fa48("23350"), '[[error:invalid-rule]]'));
      }
    }
    let rules = await Blacklist.get();
    rules = stryMutAct_9fa48("23351") ? `` : (stryCov_9fa48("23351"), `${rules}\n${valid[0]}`);
    await Blacklist.save(rules);
  }
};