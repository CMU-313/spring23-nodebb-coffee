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
const path = require('path');
const winston = require('winston');
const db = require('../database');
const pubsub = require('../pubsub');
const plugins = require('../plugins');
const utils = require('../utils');
const Meta = require('./index');
const cacheBuster = require('./cacheBuster');
const defaults = require('../../install/data/defaults.json');
const Configs = module.exports;
Meta.config = {};

// called after data is loaded from db
function deserialize(config) {
  if (stryMutAct_9fa48("23567")) {
    {}
  } else {
    stryCov_9fa48("23567");
    const deserialized = {};
    Object.keys(config).forEach(key => {
      if (stryMutAct_9fa48("23568")) {
        {}
      } else {
        stryCov_9fa48("23568");
        const defaultType = typeof defaults[key];
        const type = typeof config[key];
        const number = parseFloat(config[key]);
        if (stryMutAct_9fa48("23571") ? defaultType === 'string' || type === 'number' : stryMutAct_9fa48("23570") ? false : stryMutAct_9fa48("23569") ? true : (stryCov_9fa48("23569", "23570", "23571"), (stryMutAct_9fa48("23573") ? defaultType !== 'string' : stryMutAct_9fa48("23572") ? true : (stryCov_9fa48("23572", "23573"), defaultType === (stryMutAct_9fa48("23574") ? "" : (stryCov_9fa48("23574"), 'string')))) && (stryMutAct_9fa48("23576") ? type !== 'number' : stryMutAct_9fa48("23575") ? true : (stryCov_9fa48("23575", "23576"), type === (stryMutAct_9fa48("23577") ? "" : (stryCov_9fa48("23577"), 'number')))))) {
          if (stryMutAct_9fa48("23578")) {
            {}
          } else {
            stryCov_9fa48("23578");
            deserialized[key] = String(config[key]);
          }
        } else if (stryMutAct_9fa48("23581") ? defaultType === 'number' || type === 'string' : stryMutAct_9fa48("23580") ? false : stryMutAct_9fa48("23579") ? true : (stryCov_9fa48("23579", "23580", "23581"), (stryMutAct_9fa48("23583") ? defaultType !== 'number' : stryMutAct_9fa48("23582") ? true : (stryCov_9fa48("23582", "23583"), defaultType === (stryMutAct_9fa48("23584") ? "" : (stryCov_9fa48("23584"), 'number')))) && (stryMutAct_9fa48("23586") ? type !== 'string' : stryMutAct_9fa48("23585") ? true : (stryCov_9fa48("23585", "23586"), type === (stryMutAct_9fa48("23587") ? "" : (stryCov_9fa48("23587"), 'string')))))) {
          if (stryMutAct_9fa48("23588")) {
            {}
          } else {
            stryCov_9fa48("23588");
            if (stryMutAct_9fa48("23591") ? !isNaN(number) || isFinite(config[key]) : stryMutAct_9fa48("23590") ? false : stryMutAct_9fa48("23589") ? true : (stryCov_9fa48("23589", "23590", "23591"), (stryMutAct_9fa48("23592") ? isNaN(number) : (stryCov_9fa48("23592"), !isNaN(number))) && isFinite(config[key]))) {
              if (stryMutAct_9fa48("23593")) {
                {}
              } else {
                stryCov_9fa48("23593");
                deserialized[key] = number;
              }
            } else {
              if (stryMutAct_9fa48("23594")) {
                {}
              } else {
                stryCov_9fa48("23594");
                deserialized[key] = defaults[key];
              }
            }
          }
        } else if (stryMutAct_9fa48("23597") ? config[key] !== 'true' : stryMutAct_9fa48("23596") ? false : stryMutAct_9fa48("23595") ? true : (stryCov_9fa48("23595", "23596", "23597"), config[key] === (stryMutAct_9fa48("23598") ? "" : (stryCov_9fa48("23598"), 'true')))) {
          if (stryMutAct_9fa48("23599")) {
            {}
          } else {
            stryCov_9fa48("23599");
            deserialized[key] = stryMutAct_9fa48("23600") ? false : (stryCov_9fa48("23600"), true);
          }
        } else if (stryMutAct_9fa48("23603") ? config[key] !== 'false' : stryMutAct_9fa48("23602") ? false : stryMutAct_9fa48("23601") ? true : (stryCov_9fa48("23601", "23602", "23603"), config[key] === (stryMutAct_9fa48("23604") ? "" : (stryCov_9fa48("23604"), 'false')))) {
          if (stryMutAct_9fa48("23605")) {
            {}
          } else {
            stryCov_9fa48("23605");
            deserialized[key] = stryMutAct_9fa48("23606") ? true : (stryCov_9fa48("23606"), false);
          }
        } else if (stryMutAct_9fa48("23609") ? config[key] !== null : stryMutAct_9fa48("23608") ? false : stryMutAct_9fa48("23607") ? true : (stryCov_9fa48("23607", "23608", "23609"), config[key] === null)) {
          if (stryMutAct_9fa48("23610")) {
            {}
          } else {
            stryCov_9fa48("23610");
            deserialized[key] = defaults[key];
          }
        } else if (stryMutAct_9fa48("23613") ? defaultType === 'undefined' && !isNaN(number) || isFinite(config[key]) : stryMutAct_9fa48("23612") ? false : stryMutAct_9fa48("23611") ? true : (stryCov_9fa48("23611", "23612", "23613"), (stryMutAct_9fa48("23615") ? defaultType === 'undefined' || !isNaN(number) : stryMutAct_9fa48("23614") ? true : (stryCov_9fa48("23614", "23615"), (stryMutAct_9fa48("23617") ? defaultType !== 'undefined' : stryMutAct_9fa48("23616") ? true : (stryCov_9fa48("23616", "23617"), defaultType === (stryMutAct_9fa48("23618") ? "" : (stryCov_9fa48("23618"), 'undefined')))) && (stryMutAct_9fa48("23619") ? isNaN(number) : (stryCov_9fa48("23619"), !isNaN(number))))) && isFinite(config[key]))) {
          if (stryMutAct_9fa48("23620")) {
            {}
          } else {
            stryCov_9fa48("23620");
            deserialized[key] = number;
          }
        } else if (stryMutAct_9fa48("23623") ? Array.isArray(defaults[key]) || !Array.isArray(config[key]) : stryMutAct_9fa48("23622") ? false : stryMutAct_9fa48("23621") ? true : (stryCov_9fa48("23621", "23622", "23623"), Array.isArray(defaults[key]) && (stryMutAct_9fa48("23624") ? Array.isArray(config[key]) : (stryCov_9fa48("23624"), !Array.isArray(config[key]))))) {
          if (stryMutAct_9fa48("23625")) {
            {}
          } else {
            stryCov_9fa48("23625");
            try {
              if (stryMutAct_9fa48("23626")) {
                {}
              } else {
                stryCov_9fa48("23626");
                deserialized[key] = JSON.parse(stryMutAct_9fa48("23629") ? config[key] && '[]' : stryMutAct_9fa48("23628") ? false : stryMutAct_9fa48("23627") ? true : (stryCov_9fa48("23627", "23628", "23629"), config[key] || (stryMutAct_9fa48("23630") ? "" : (stryCov_9fa48("23630"), '[]'))));
              }
            } catch (err) {
              if (stryMutAct_9fa48("23631")) {
                {}
              } else {
                stryCov_9fa48("23631");
                winston.error(err.stack);
                deserialized[key] = defaults[key];
              }
            }
          }
        } else {
          if (stryMutAct_9fa48("23632")) {
            {}
          } else {
            stryCov_9fa48("23632");
            deserialized[key] = config[key];
          }
        }
      }
    });
    return deserialized;
  }
}

// called before data is saved to db
function serialize(config) {
  if (stryMutAct_9fa48("23633")) {
    {}
  } else {
    stryCov_9fa48("23633");
    const serialized = {};
    Object.keys(config).forEach(key => {
      if (stryMutAct_9fa48("23634")) {
        {}
      } else {
        stryCov_9fa48("23634");
        const defaultType = typeof defaults[key];
        const type = typeof config[key];
        const number = parseFloat(config[key]);
        if (stryMutAct_9fa48("23637") ? defaultType === 'string' || type === 'number' : stryMutAct_9fa48("23636") ? false : stryMutAct_9fa48("23635") ? true : (stryCov_9fa48("23635", "23636", "23637"), (stryMutAct_9fa48("23639") ? defaultType !== 'string' : stryMutAct_9fa48("23638") ? true : (stryCov_9fa48("23638", "23639"), defaultType === (stryMutAct_9fa48("23640") ? "" : (stryCov_9fa48("23640"), 'string')))) && (stryMutAct_9fa48("23642") ? type !== 'number' : stryMutAct_9fa48("23641") ? true : (stryCov_9fa48("23641", "23642"), type === (stryMutAct_9fa48("23643") ? "" : (stryCov_9fa48("23643"), 'number')))))) {
          if (stryMutAct_9fa48("23644")) {
            {}
          } else {
            stryCov_9fa48("23644");
            serialized[key] = String(config[key]);
          }
        } else if (stryMutAct_9fa48("23647") ? defaultType === 'number' || type === 'string' : stryMutAct_9fa48("23646") ? false : stryMutAct_9fa48("23645") ? true : (stryCov_9fa48("23645", "23646", "23647"), (stryMutAct_9fa48("23649") ? defaultType !== 'number' : stryMutAct_9fa48("23648") ? true : (stryCov_9fa48("23648", "23649"), defaultType === (stryMutAct_9fa48("23650") ? "" : (stryCov_9fa48("23650"), 'number')))) && (stryMutAct_9fa48("23652") ? type !== 'string' : stryMutAct_9fa48("23651") ? true : (stryCov_9fa48("23651", "23652"), type === (stryMutAct_9fa48("23653") ? "" : (stryCov_9fa48("23653"), 'string')))))) {
          if (stryMutAct_9fa48("23654")) {
            {}
          } else {
            stryCov_9fa48("23654");
            if (stryMutAct_9fa48("23657") ? !isNaN(number) || isFinite(config[key]) : stryMutAct_9fa48("23656") ? false : stryMutAct_9fa48("23655") ? true : (stryCov_9fa48("23655", "23656", "23657"), (stryMutAct_9fa48("23658") ? isNaN(number) : (stryCov_9fa48("23658"), !isNaN(number))) && isFinite(config[key]))) {
              if (stryMutAct_9fa48("23659")) {
                {}
              } else {
                stryCov_9fa48("23659");
                serialized[key] = number;
              }
            } else {
              if (stryMutAct_9fa48("23660")) {
                {}
              } else {
                stryCov_9fa48("23660");
                serialized[key] = defaults[key];
              }
            }
          }
        } else if (stryMutAct_9fa48("23663") ? config[key] !== null : stryMutAct_9fa48("23662") ? false : stryMutAct_9fa48("23661") ? true : (stryCov_9fa48("23661", "23662", "23663"), config[key] === null)) {
          if (stryMutAct_9fa48("23664")) {
            {}
          } else {
            stryCov_9fa48("23664");
            serialized[key] = defaults[key];
          }
        } else if (stryMutAct_9fa48("23667") ? defaultType === 'undefined' && !isNaN(number) || isFinite(config[key]) : stryMutAct_9fa48("23666") ? false : stryMutAct_9fa48("23665") ? true : (stryCov_9fa48("23665", "23666", "23667"), (stryMutAct_9fa48("23669") ? defaultType === 'undefined' || !isNaN(number) : stryMutAct_9fa48("23668") ? true : (stryCov_9fa48("23668", "23669"), (stryMutAct_9fa48("23671") ? defaultType !== 'undefined' : stryMutAct_9fa48("23670") ? true : (stryCov_9fa48("23670", "23671"), defaultType === (stryMutAct_9fa48("23672") ? "" : (stryCov_9fa48("23672"), 'undefined')))) && (stryMutAct_9fa48("23673") ? isNaN(number) : (stryCov_9fa48("23673"), !isNaN(number))))) && isFinite(config[key]))) {
          if (stryMutAct_9fa48("23674")) {
            {}
          } else {
            stryCov_9fa48("23674");
            serialized[key] = number;
          }
        } else if (stryMutAct_9fa48("23677") ? Array.isArray(defaults[key]) || Array.isArray(config[key]) : stryMutAct_9fa48("23676") ? false : stryMutAct_9fa48("23675") ? true : (stryCov_9fa48("23675", "23676", "23677"), Array.isArray(defaults[key]) && Array.isArray(config[key]))) {
          if (stryMutAct_9fa48("23678")) {
            {}
          } else {
            stryCov_9fa48("23678");
            serialized[key] = JSON.stringify(config[key]);
          }
        } else {
          if (stryMutAct_9fa48("23679")) {
            {}
          } else {
            stryCov_9fa48("23679");
            serialized[key] = config[key];
          }
        }
      }
    });
    return serialized;
  }
}
Configs.deserialize = deserialize;
Configs.serialize = serialize;
Configs.init = async function () {
  if (stryMutAct_9fa48("23680")) {
    {}
  } else {
    stryCov_9fa48("23680");
    const config = await Configs.list();
    const buster = await cacheBuster.read();
    config[stryMutAct_9fa48("23681") ? "" : (stryCov_9fa48("23681"), 'cache-buster')] = stryMutAct_9fa48("23682") ? `` : (stryCov_9fa48("23682"), `v=${stryMutAct_9fa48("23685") ? buster && Date.now() : stryMutAct_9fa48("23684") ? false : stryMutAct_9fa48("23683") ? true : (stryCov_9fa48("23683", "23684", "23685"), buster || Date.now())}`);
    Meta.config = config;
  }
};
Configs.list = async function () {
  if (stryMutAct_9fa48("23686")) {
    {}
  } else {
    stryCov_9fa48("23686");
    return await Configs.getFields(stryMutAct_9fa48("23687") ? ["Stryker was here"] : (stryCov_9fa48("23687"), []));
  }
};
Configs.get = async function (field) {
  if (stryMutAct_9fa48("23688")) {
    {}
  } else {
    stryCov_9fa48("23688");
    const values = await Configs.getFields(stryMutAct_9fa48("23689") ? [] : (stryCov_9fa48("23689"), [field]));
    return (stryMutAct_9fa48("23692") ? values.hasOwnProperty(field) || values[field] !== undefined : stryMutAct_9fa48("23691") ? false : stryMutAct_9fa48("23690") ? true : (stryCov_9fa48("23690", "23691", "23692"), values.hasOwnProperty(field) && (stryMutAct_9fa48("23694") ? values[field] === undefined : stryMutAct_9fa48("23693") ? true : (stryCov_9fa48("23693", "23694"), values[field] !== undefined)))) ? values[field] : null;
  }
};
Configs.getFields = async function (fields) {
  if (stryMutAct_9fa48("23695")) {
    {}
  } else {
    stryCov_9fa48("23695");
    let values;
    if (stryMutAct_9fa48("23697") ? false : stryMutAct_9fa48("23696") ? true : (stryCov_9fa48("23696", "23697"), fields.length)) {
      if (stryMutAct_9fa48("23698")) {
        {}
      } else {
        stryCov_9fa48("23698");
        values = await db.getObjectFields(stryMutAct_9fa48("23699") ? "" : (stryCov_9fa48("23699"), 'config'), fields);
      }
    } else {
      if (stryMutAct_9fa48("23700")) {
        {}
      } else {
        stryCov_9fa48("23700");
        values = await db.getObject(stryMutAct_9fa48("23701") ? "" : (stryCov_9fa48("23701"), 'config'));
      }
    }
    values = stryMutAct_9fa48("23702") ? {} : (stryCov_9fa48("23702"), {
      ...defaults,
      ...(values ? deserialize(values) : {})
    });
    if (stryMutAct_9fa48("23705") ? false : stryMutAct_9fa48("23704") ? true : stryMutAct_9fa48("23703") ? fields.length : (stryCov_9fa48("23703", "23704", "23705"), !fields.length)) {
      if (stryMutAct_9fa48("23706")) {
        {}
      } else {
        stryCov_9fa48("23706");
        values.version = nconf.get(stryMutAct_9fa48("23707") ? "" : (stryCov_9fa48("23707"), 'version'));
        values.registry = nconf.get(stryMutAct_9fa48("23708") ? "" : (stryCov_9fa48("23708"), 'registry'));
      }
    }
    return values;
  }
};
Configs.set = async function (field, value) {
  if (stryMutAct_9fa48("23709")) {
    {}
  } else {
    stryCov_9fa48("23709");
    if (stryMutAct_9fa48("23712") ? false : stryMutAct_9fa48("23711") ? true : stryMutAct_9fa48("23710") ? field : (stryCov_9fa48("23710", "23711", "23712"), !field)) {
      if (stryMutAct_9fa48("23713")) {
        {}
      } else {
        stryCov_9fa48("23713");
        throw new Error(stryMutAct_9fa48("23714") ? "" : (stryCov_9fa48("23714"), '[[error:invalid-data]]'));
      }
    }
    await Configs.setMultiple(stryMutAct_9fa48("23715") ? {} : (stryCov_9fa48("23715"), {
      [field]: value
    }));
  }
};
Configs.setMultiple = async function (data) {
  if (stryMutAct_9fa48("23716")) {
    {}
  } else {
    stryCov_9fa48("23716");
    await processConfig(data);
    data = serialize(data);
    await db.setObject(stryMutAct_9fa48("23717") ? "" : (stryCov_9fa48("23717"), 'config'), data);
    updateConfig(deserialize(data));
  }
};
Configs.setOnEmpty = async function (values) {
  if (stryMutAct_9fa48("23718")) {
    {}
  } else {
    stryCov_9fa48("23718");
    const data = await db.getObject(stryMutAct_9fa48("23719") ? "" : (stryCov_9fa48("23719"), 'config'));
    values = serialize(values);
    const config = stryMutAct_9fa48("23720") ? {} : (stryCov_9fa48("23720"), {
      ...values,
      ...(data ? serialize(data) : {})
    });
    await db.setObject(stryMutAct_9fa48("23721") ? "" : (stryCov_9fa48("23721"), 'config'), config);
  }
};
Configs.remove = async function (field) {
  if (stryMutAct_9fa48("23722")) {
    {}
  } else {
    stryCov_9fa48("23722");
    await db.deleteObjectField(stryMutAct_9fa48("23723") ? "" : (stryCov_9fa48("23723"), 'config'), field);
  }
};
Configs.registerHooks = () => {
  if (stryMutAct_9fa48("23724")) {
    {}
  } else {
    stryCov_9fa48("23724");
    plugins.hooks.register(stryMutAct_9fa48("23725") ? "" : (stryCov_9fa48("23725"), 'core'), stryMutAct_9fa48("23726") ? {} : (stryCov_9fa48("23726"), {
      hook: stryMutAct_9fa48("23727") ? "" : (stryCov_9fa48("23727"), 'filter:settings.set'),
      method: async ({
        plugin,
        settings,
        quiet
      }) => {
        if (stryMutAct_9fa48("23728")) {
          {}
        } else {
          stryCov_9fa48("23728");
          if (stryMutAct_9fa48("23731") ? plugin === 'core.api' || Array.isArray(settings.tokens) : stryMutAct_9fa48("23730") ? false : stryMutAct_9fa48("23729") ? true : (stryCov_9fa48("23729", "23730", "23731"), (stryMutAct_9fa48("23733") ? plugin !== 'core.api' : stryMutAct_9fa48("23732") ? true : (stryCov_9fa48("23732", "23733"), plugin === (stryMutAct_9fa48("23734") ? "" : (stryCov_9fa48("23734"), 'core.api')))) && Array.isArray(settings.tokens))) {
            if (stryMutAct_9fa48("23735")) {
              {}
            } else {
              stryCov_9fa48("23735");
              // Generate tokens if not present already
              settings.tokens.forEach(set => {
                if (stryMutAct_9fa48("23736")) {
                  {}
                } else {
                  stryCov_9fa48("23736");
                  if (stryMutAct_9fa48("23739") ? set.token !== '' : stryMutAct_9fa48("23738") ? false : stryMutAct_9fa48("23737") ? true : (stryCov_9fa48("23737", "23738", "23739"), set.token === (stryMutAct_9fa48("23740") ? "Stryker was here!" : (stryCov_9fa48("23740"), '')))) {
                    if (stryMutAct_9fa48("23741")) {
                      {}
                    } else {
                      stryCov_9fa48("23741");
                      set.token = utils.generateUUID();
                    }
                  }
                  if (stryMutAct_9fa48("23743") ? false : stryMutAct_9fa48("23742") ? true : (stryCov_9fa48("23742", "23743"), isNaN(parseInt(set.uid, 10)))) {
                    if (stryMutAct_9fa48("23744")) {
                      {}
                    } else {
                      stryCov_9fa48("23744");
                      set.uid = 0;
                    }
                  }
                }
              });
            }
          }
          return stryMutAct_9fa48("23745") ? {} : (stryCov_9fa48("23745"), {
            plugin,
            settings,
            quiet
          });
        }
      }
    }));
    plugins.hooks.register(stryMutAct_9fa48("23746") ? "" : (stryCov_9fa48("23746"), 'core'), stryMutAct_9fa48("23747") ? {} : (stryCov_9fa48("23747"), {
      hook: stryMutAct_9fa48("23748") ? "" : (stryCov_9fa48("23748"), 'filter:settings.get'),
      method: async ({
        plugin,
        values
      }) => {
        if (stryMutAct_9fa48("23749")) {
          {}
        } else {
          stryCov_9fa48("23749");
          if (stryMutAct_9fa48("23752") ? plugin === 'core.api' || Array.isArray(values.tokens) : stryMutAct_9fa48("23751") ? false : stryMutAct_9fa48("23750") ? true : (stryCov_9fa48("23750", "23751", "23752"), (stryMutAct_9fa48("23754") ? plugin !== 'core.api' : stryMutAct_9fa48("23753") ? true : (stryCov_9fa48("23753", "23754"), plugin === (stryMutAct_9fa48("23755") ? "" : (stryCov_9fa48("23755"), 'core.api')))) && Array.isArray(values.tokens))) {
            if (stryMutAct_9fa48("23756")) {
              {}
            } else {
              stryCov_9fa48("23756");
              values.tokens = values.tokens.map(tokenObj => {
                if (stryMutAct_9fa48("23757")) {
                  {}
                } else {
                  stryCov_9fa48("23757");
                  tokenObj.uid = parseInt(tokenObj.uid, 10);
                  if (stryMutAct_9fa48("23759") ? false : stryMutAct_9fa48("23758") ? true : (stryCov_9fa48("23758", "23759"), tokenObj.timestamp)) {
                    if (stryMutAct_9fa48("23760")) {
                      {}
                    } else {
                      stryCov_9fa48("23760");
                      tokenObj.timestampISO = new Date(parseInt(tokenObj.timestamp, 10)).toISOString();
                    }
                  }
                  return tokenObj;
                }
              });
            }
          }
          return stryMutAct_9fa48("23761") ? {} : (stryCov_9fa48("23761"), {
            plugin,
            values
          });
        }
      }
    }));
  }
};
Configs.cookie = stryMutAct_9fa48("23762") ? {} : (stryCov_9fa48("23762"), {
  get: () => {
    if (stryMutAct_9fa48("23763")) {
      {}
    } else {
      stryCov_9fa48("23763");
      const cookie = {};
      if (stryMutAct_9fa48("23766") ? nconf.get('cookieDomain') && Meta.config.cookieDomain : stryMutAct_9fa48("23765") ? false : stryMutAct_9fa48("23764") ? true : (stryCov_9fa48("23764", "23765", "23766"), nconf.get(stryMutAct_9fa48("23767") ? "" : (stryCov_9fa48("23767"), 'cookieDomain')) || Meta.config.cookieDomain)) {
        if (stryMutAct_9fa48("23768")) {
          {}
        } else {
          stryCov_9fa48("23768");
          cookie.domain = stryMutAct_9fa48("23771") ? nconf.get('cookieDomain') && Meta.config.cookieDomain : stryMutAct_9fa48("23770") ? false : stryMutAct_9fa48("23769") ? true : (stryCov_9fa48("23769", "23770", "23771"), nconf.get(stryMutAct_9fa48("23772") ? "" : (stryCov_9fa48("23772"), 'cookieDomain')) || Meta.config.cookieDomain);
        }
      }
      if (stryMutAct_9fa48("23774") ? false : stryMutAct_9fa48("23773") ? true : (stryCov_9fa48("23773", "23774"), nconf.get(stryMutAct_9fa48("23775") ? "" : (stryCov_9fa48("23775"), 'secure')))) {
        if (stryMutAct_9fa48("23776")) {
          {}
        } else {
          stryCov_9fa48("23776");
          cookie.secure = stryMutAct_9fa48("23777") ? false : (stryCov_9fa48("23777"), true);
        }
      }
      const relativePath = nconf.get(stryMutAct_9fa48("23778") ? "" : (stryCov_9fa48("23778"), 'relative_path'));
      if (stryMutAct_9fa48("23781") ? relativePath === '' : stryMutAct_9fa48("23780") ? false : stryMutAct_9fa48("23779") ? true : (stryCov_9fa48("23779", "23780", "23781"), relativePath !== (stryMutAct_9fa48("23782") ? "Stryker was here!" : (stryCov_9fa48("23782"), '')))) {
        if (stryMutAct_9fa48("23783")) {
          {}
        } else {
          stryCov_9fa48("23783");
          cookie.path = relativePath;
        }
      }

      // Ideally configurable from ACP, but cannot be "Strict" as then top-level access will treat it as guest.
      cookie.sameSite = stryMutAct_9fa48("23784") ? "" : (stryCov_9fa48("23784"), 'Lax');
      return cookie;
    }
  }
});
async function processConfig(data) {
  if (stryMutAct_9fa48("23785")) {
    {}
  } else {
    stryCov_9fa48("23785");
    ensureInteger(data, stryMutAct_9fa48("23786") ? "" : (stryCov_9fa48("23786"), 'maximumUsernameLength'), 1);
    ensureInteger(data, stryMutAct_9fa48("23787") ? "" : (stryCov_9fa48("23787"), 'minimumUsernameLength'), 1);
    ensureInteger(data, stryMutAct_9fa48("23788") ? "" : (stryCov_9fa48("23788"), 'minimumPasswordLength'), 1);
    ensureInteger(data, stryMutAct_9fa48("23789") ? "" : (stryCov_9fa48("23789"), 'maximumAboutMeLength'), 0);
    if (stryMutAct_9fa48("23793") ? data.minimumUsernameLength <= data.maximumUsernameLength : stryMutAct_9fa48("23792") ? data.minimumUsernameLength >= data.maximumUsernameLength : stryMutAct_9fa48("23791") ? false : stryMutAct_9fa48("23790") ? true : (stryCov_9fa48("23790", "23791", "23792", "23793"), data.minimumUsernameLength > data.maximumUsernameLength)) {
      if (stryMutAct_9fa48("23794")) {
        {}
      } else {
        stryCov_9fa48("23794");
        throw new Error(stryMutAct_9fa48("23795") ? "" : (stryCov_9fa48("23795"), '[[error:invalid-data]]'));
      }
    }
    await Promise.all(stryMutAct_9fa48("23796") ? [] : (stryCov_9fa48("23796"), [saveRenderedCss(data), getLogoSize(data)]));
  }
}
function ensureInteger(data, field, min) {
  if (stryMutAct_9fa48("23797")) {
    {}
  } else {
    stryCov_9fa48("23797");
    if (stryMutAct_9fa48("23799") ? false : stryMutAct_9fa48("23798") ? true : (stryCov_9fa48("23798", "23799"), data.hasOwnProperty(field))) {
      if (stryMutAct_9fa48("23800")) {
        {}
      } else {
        stryCov_9fa48("23800");
        data[field] = parseInt(data[field], 10);
        if (stryMutAct_9fa48("23803") ? false : stryMutAct_9fa48("23802") ? true : stryMutAct_9fa48("23801") ? data[field] >= min : (stryCov_9fa48("23801", "23802", "23803"), !(stryMutAct_9fa48("23807") ? data[field] < min : stryMutAct_9fa48("23806") ? data[field] > min : stryMutAct_9fa48("23805") ? false : stryMutAct_9fa48("23804") ? true : (stryCov_9fa48("23804", "23805", "23806", "23807"), data[field] >= min)))) {
          if (stryMutAct_9fa48("23808")) {
            {}
          } else {
            stryCov_9fa48("23808");
            throw new Error(stryMutAct_9fa48("23809") ? "" : (stryCov_9fa48("23809"), '[[error:invalid-data]]'));
          }
        }
      }
    }
  }
}
async function saveRenderedCss(data) {
  if (stryMutAct_9fa48("23810")) {
    {}
  } else {
    stryCov_9fa48("23810");
    if (stryMutAct_9fa48("23813") ? false : stryMutAct_9fa48("23812") ? true : stryMutAct_9fa48("23811") ? data.customCSS : (stryCov_9fa48("23811", "23812", "23813"), !data.customCSS)) {
      if (stryMutAct_9fa48("23814")) {
        {}
      } else {
        stryCov_9fa48("23814");
        return;
      }
    }
    const less = require('less');
    const lessObject = await less.render(data.customCSS, stryMutAct_9fa48("23815") ? {} : (stryCov_9fa48("23815"), {
      compress: stryMutAct_9fa48("23816") ? false : (stryCov_9fa48("23816"), true),
      javascriptEnabled: stryMutAct_9fa48("23817") ? true : (stryCov_9fa48("23817"), false)
    }));
    data.renderedCustomCSS = lessObject.css;
  }
}
async function getLogoSize(data) {
  if (stryMutAct_9fa48("23818")) {
    {}
  } else {
    stryCov_9fa48("23818");
    const image = require('../image');
    if (stryMutAct_9fa48("23821") ? false : stryMutAct_9fa48("23820") ? true : stryMutAct_9fa48("23819") ? data['brand:logo'] : (stryCov_9fa48("23819", "23820", "23821"), !data[stryMutAct_9fa48("23822") ? "" : (stryCov_9fa48("23822"), 'brand:logo')])) {
      if (stryMutAct_9fa48("23823")) {
        {}
      } else {
        stryCov_9fa48("23823");
        return;
      }
    }
    let size;
    try {
      if (stryMutAct_9fa48("23824")) {
        {}
      } else {
        stryCov_9fa48("23824");
        size = await image.size(path.join(nconf.get(stryMutAct_9fa48("23825") ? "" : (stryCov_9fa48("23825"), 'upload_path')), stryMutAct_9fa48("23826") ? "" : (stryCov_9fa48("23826"), 'system'), stryMutAct_9fa48("23827") ? "" : (stryCov_9fa48("23827"), 'site-logo-x50.png')));
      }
    } catch (err) {
      if (stryMutAct_9fa48("23828")) {
        {}
      } else {
        stryCov_9fa48("23828");
        if (stryMutAct_9fa48("23831") ? err.code !== 'ENOENT' : stryMutAct_9fa48("23830") ? false : stryMutAct_9fa48("23829") ? true : (stryCov_9fa48("23829", "23830", "23831"), err.code === (stryMutAct_9fa48("23832") ? "" : (stryCov_9fa48("23832"), 'ENOENT')))) {
          if (stryMutAct_9fa48("23833")) {
            {}
          } else {
            stryCov_9fa48("23833");
            // For whatever reason the x50 logo wasn't generated, gracefully error out
            winston.warn(stryMutAct_9fa48("23834") ? "" : (stryCov_9fa48("23834"), '[logo] The email-safe logo doesn\'t seem to have been created, please re-upload your site logo.'));
            size = stryMutAct_9fa48("23835") ? {} : (stryCov_9fa48("23835"), {
              height: 0,
              width: 0
            });
          }
        } else {
          if (stryMutAct_9fa48("23836")) {
            {}
          } else {
            stryCov_9fa48("23836");
            throw err;
          }
        }
      }
    }
    data[stryMutAct_9fa48("23837") ? "" : (stryCov_9fa48("23837"), 'brand:emailLogo')] = stryMutAct_9fa48("23838") ? nconf.get('url') - path.join(nconf.get('upload_url'), 'system', 'site-logo-x50.png') : (stryCov_9fa48("23838"), nconf.get(stryMutAct_9fa48("23839") ? "" : (stryCov_9fa48("23839"), 'url')) + path.join(nconf.get(stryMutAct_9fa48("23840") ? "" : (stryCov_9fa48("23840"), 'upload_url')), stryMutAct_9fa48("23841") ? "" : (stryCov_9fa48("23841"), 'system'), stryMutAct_9fa48("23842") ? "" : (stryCov_9fa48("23842"), 'site-logo-x50.png')));
    data[stryMutAct_9fa48("23843") ? "" : (stryCov_9fa48("23843"), 'brand:emailLogo:height')] = size.height;
    data[stryMutAct_9fa48("23844") ? "" : (stryCov_9fa48("23844"), 'brand:emailLogo:width')] = size.width;
  }
}
function updateConfig(config) {
  if (stryMutAct_9fa48("23845")) {
    {}
  } else {
    stryCov_9fa48("23845");
    updateLocalConfig(config);
    pubsub.publish(stryMutAct_9fa48("23846") ? "" : (stryCov_9fa48("23846"), 'config:update'), config);
  }
}
function updateLocalConfig(config) {
  if (stryMutAct_9fa48("23847")) {
    {}
  } else {
    stryCov_9fa48("23847");
    Object.assign(Meta.config, config);
  }
}
pubsub.on(stryMutAct_9fa48("23848") ? "" : (stryCov_9fa48("23848"), 'config:update'), config => {
  if (stryMutAct_9fa48("23849")) {
    {}
  } else {
    stryCov_9fa48("23849");
    if (stryMutAct_9fa48("23852") ? typeof config === 'object' || Meta.config : stryMutAct_9fa48("23851") ? false : stryMutAct_9fa48("23850") ? true : (stryCov_9fa48("23850", "23851", "23852"), (stryMutAct_9fa48("23854") ? typeof config !== 'object' : stryMutAct_9fa48("23853") ? true : (stryCov_9fa48("23853", "23854"), typeof config === (stryMutAct_9fa48("23855") ? "" : (stryCov_9fa48("23855"), 'object')))) && Meta.config)) {
      if (stryMutAct_9fa48("23856")) {
        {}
      } else {
        stryCov_9fa48("23856");
        updateLocalConfig(config);
      }
    }
  }
});