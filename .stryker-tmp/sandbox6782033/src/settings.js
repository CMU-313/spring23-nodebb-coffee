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
const meta = require('./meta');
const pubsub = require('./pubsub');
function expandObjBy(obj1, obj2) {
  if (stryMutAct_9fa48("34322")) {
    {}
  } else {
    stryCov_9fa48("34322");
    let changed = stryMutAct_9fa48("34323") ? true : (stryCov_9fa48("34323"), false);
    if (stryMutAct_9fa48("34326") ? !obj1 && !obj2 : stryMutAct_9fa48("34325") ? false : stryMutAct_9fa48("34324") ? true : (stryCov_9fa48("34324", "34325", "34326"), (stryMutAct_9fa48("34327") ? obj1 : (stryCov_9fa48("34327"), !obj1)) || (stryMutAct_9fa48("34328") ? obj2 : (stryCov_9fa48("34328"), !obj2)))) {
      if (stryMutAct_9fa48("34329")) {
        {}
      } else {
        stryCov_9fa48("34329");
        return changed;
      }
    }
    for (const [key, val2] of Object.entries(obj2)) {
      if (stryMutAct_9fa48("34330")) {
        {}
      } else {
        stryCov_9fa48("34330");
        const val1 = obj1[key];
        const xorIsArray = stryMutAct_9fa48("34333") ? Array.isArray(val1) === Array.isArray(val2) : stryMutAct_9fa48("34332") ? false : stryMutAct_9fa48("34331") ? true : (stryCov_9fa48("34331", "34332", "34333"), Array.isArray(val1) !== Array.isArray(val2));
        if (stryMutAct_9fa48("34336") ? (xorIsArray || !obj1.hasOwnProperty(key)) && typeof val2 !== typeof val1 : stryMutAct_9fa48("34335") ? false : stryMutAct_9fa48("34334") ? true : (stryCov_9fa48("34334", "34335", "34336"), (stryMutAct_9fa48("34338") ? xorIsArray && !obj1.hasOwnProperty(key) : stryMutAct_9fa48("34337") ? false : (stryCov_9fa48("34337", "34338"), xorIsArray || (stryMutAct_9fa48("34339") ? obj1.hasOwnProperty(key) : (stryCov_9fa48("34339"), !obj1.hasOwnProperty(key))))) || (stryMutAct_9fa48("34341") ? typeof val2 === typeof val1 : stryMutAct_9fa48("34340") ? false : (stryCov_9fa48("34340", "34341"), typeof val2 !== typeof val1)))) {
          if (stryMutAct_9fa48("34342")) {
            {}
          } else {
            stryCov_9fa48("34342");
            obj1[key] = val2;
            changed = stryMutAct_9fa48("34343") ? false : (stryCov_9fa48("34343"), true);
          }
        } else if (stryMutAct_9fa48("34346") ? typeof val2 === 'object' || !Array.isArray(val2) : stryMutAct_9fa48("34345") ? false : stryMutAct_9fa48("34344") ? true : (stryCov_9fa48("34344", "34345", "34346"), (stryMutAct_9fa48("34348") ? typeof val2 !== 'object' : stryMutAct_9fa48("34347") ? true : (stryCov_9fa48("34347", "34348"), typeof val2 === (stryMutAct_9fa48("34349") ? "" : (stryCov_9fa48("34349"), 'object')))) && (stryMutAct_9fa48("34350") ? Array.isArray(val2) : (stryCov_9fa48("34350"), !Array.isArray(val2))))) {
          if (stryMutAct_9fa48("34351")) {
            {}
          } else {
            stryCov_9fa48("34351");
            if (stryMutAct_9fa48("34353") ? false : stryMutAct_9fa48("34352") ? true : (stryCov_9fa48("34352", "34353"), expandObjBy(val1, val2))) {
              if (stryMutAct_9fa48("34354")) {
                {}
              } else {
                stryCov_9fa48("34354");
                changed = stryMutAct_9fa48("34355") ? false : (stryCov_9fa48("34355"), true);
              }
            }
          }
        }
      }
    }
    return changed;
  }
}
function trim(obj1, obj2) {
  if (stryMutAct_9fa48("34356")) {
    {}
  } else {
    stryCov_9fa48("34356");
    for (const [key, val1] of Object.entries(obj1)) {
      if (stryMutAct_9fa48("34357")) {
        {}
      } else {
        stryCov_9fa48("34357");
        if (stryMutAct_9fa48("34360") ? false : stryMutAct_9fa48("34359") ? true : stryMutAct_9fa48("34358") ? obj2.hasOwnProperty(key) : (stryCov_9fa48("34358", "34359", "34360"), !obj2.hasOwnProperty(key))) {
          if (stryMutAct_9fa48("34361")) {
            {}
          } else {
            stryCov_9fa48("34361");
            delete obj1[key];
          }
        } else if (stryMutAct_9fa48("34364") ? typeof val1 === 'object' || !Array.isArray(val1) : stryMutAct_9fa48("34363") ? false : stryMutAct_9fa48("34362") ? true : (stryCov_9fa48("34362", "34363", "34364"), (stryMutAct_9fa48("34366") ? typeof val1 !== 'object' : stryMutAct_9fa48("34365") ? true : (stryCov_9fa48("34365", "34366"), typeof val1 === (stryMutAct_9fa48("34367") ? "" : (stryCov_9fa48("34367"), 'object')))) && (stryMutAct_9fa48("34368") ? Array.isArray(val1) : (stryCov_9fa48("34368"), !Array.isArray(val1))))) {
          if (stryMutAct_9fa48("34369")) {
            {}
          } else {
            stryCov_9fa48("34369");
            trim(val1, obj2[key]);
          }
        }
      }
    }
  }
}
function mergeSettings(cfg, defCfg) {
  if (stryMutAct_9fa48("34370")) {
    {}
  } else {
    stryCov_9fa48("34370");
    if (stryMutAct_9fa48("34373") ? typeof defCfg === 'object' : stryMutAct_9fa48("34372") ? false : stryMutAct_9fa48("34371") ? true : (stryCov_9fa48("34371", "34372", "34373"), typeof defCfg !== (stryMutAct_9fa48("34374") ? "" : (stryCov_9fa48("34374"), 'object')))) {
      if (stryMutAct_9fa48("34375")) {
        {}
      } else {
        stryCov_9fa48("34375");
        return;
      }
    }
    if (stryMutAct_9fa48("34378") ? typeof cfg._ === 'object' : stryMutAct_9fa48("34377") ? false : stryMutAct_9fa48("34376") ? true : (stryCov_9fa48("34376", "34377", "34378"), typeof cfg._ !== (stryMutAct_9fa48("34379") ? "" : (stryCov_9fa48("34379"), 'object')))) {
      if (stryMutAct_9fa48("34380")) {
        {}
      } else {
        stryCov_9fa48("34380");
        cfg._ = defCfg;
      }
    } else {
      if (stryMutAct_9fa48("34381")) {
        {}
      } else {
        stryCov_9fa48("34381");
        expandObjBy(cfg._, defCfg);
        trim(cfg._, defCfg);
      }
    }
  }
}

/**
 A class to manage Objects saved in {@link meta.settings} within property "_".
 Constructor, synchronizes the settings and repairs them if version differs.
 @param hash The hash to use for {@link meta.settings}.
 @param version The version of the settings, used to determine whether the saved settings may be corrupt.
 @param defCfg The default settings.
 @param callback Gets called once the Settings-object is ready.
 @param forceUpdate Whether to trigger structure-update even if the version doesn't differ from saved one.
 Should be true while plugin-development to ensure structure-changes within settings persist.
 @param reset Whether to reset the settings.
 */
function Settings(hash, version, defCfg, callback, forceUpdate, reset) {
  if (stryMutAct_9fa48("34382")) {
    {}
  } else {
    stryCov_9fa48("34382");
    this.hash = hash;
    this.version = stryMutAct_9fa48("34385") ? version && this.version : stryMutAct_9fa48("34384") ? false : stryMutAct_9fa48("34383") ? true : (stryCov_9fa48("34383", "34384", "34385"), version || this.version);
    this.defCfg = defCfg;
    const self = this;
    if (stryMutAct_9fa48("34387") ? false : stryMutAct_9fa48("34386") ? true : (stryCov_9fa48("34386", "34387"), reset)) {
      if (stryMutAct_9fa48("34388")) {
        {}
      } else {
        stryCov_9fa48("34388");
        this.reset(callback);
      }
    } else {
      if (stryMutAct_9fa48("34389")) {
        {}
      } else {
        stryCov_9fa48("34389");
        this.sync(function () {
          if (stryMutAct_9fa48("34390")) {
            {}
          } else {
            stryCov_9fa48("34390");
            this.checkStructure(callback, forceUpdate);
          }
        });
      }
    }
    pubsub.on(stryMutAct_9fa48("34391") ? `` : (stryCov_9fa48("34391"), `action:settings.set.${hash}`), data => {
      if (stryMutAct_9fa48("34392")) {
        {}
      } else {
        stryCov_9fa48("34392");
        try {
          if (stryMutAct_9fa48("34393")) {
            {}
          } else {
            stryCov_9fa48("34393");
            self.cfg._ = JSON.parse(data._);
          }
        } catch (err) {}
      }
    });
  }
}
Settings.prototype.hash = stryMutAct_9fa48("34394") ? "Stryker was here!" : (stryCov_9fa48("34394"), '');
Settings.prototype.defCfg = {};
Settings.prototype.cfg = {};
Settings.prototype.version = stryMutAct_9fa48("34395") ? "" : (stryCov_9fa48("34395"), '0.0.0');

/**
 Synchronizes the local object with the saved object (reverts changes).
 @param callback Gets called when done.
 */
Settings.prototype.sync = function (callback) {
  if (stryMutAct_9fa48("34396")) {
    {}
  } else {
    stryCov_9fa48("34396");
    const _this = this;
    meta.settings.get(this.hash, (err, settings) => {
      if (stryMutAct_9fa48("34397")) {
        {}
      } else {
        stryCov_9fa48("34397");
        try {
          if (stryMutAct_9fa48("34398")) {
            {}
          } else {
            stryCov_9fa48("34398");
            if (stryMutAct_9fa48("34400") ? false : stryMutAct_9fa48("34399") ? true : (stryCov_9fa48("34399", "34400"), settings._)) {
              if (stryMutAct_9fa48("34401")) {
                {}
              } else {
                stryCov_9fa48("34401");
                settings._ = JSON.parse(settings._);
              }
            }
          }
        } catch (_error) {}
        _this.cfg = settings;
        if (stryMutAct_9fa48("34404") ? typeof _this.cfg._ === 'object' : stryMutAct_9fa48("34403") ? false : stryMutAct_9fa48("34402") ? true : (stryCov_9fa48("34402", "34403", "34404"), typeof _this.cfg._ !== (stryMutAct_9fa48("34405") ? "" : (stryCov_9fa48("34405"), 'object')))) {
          if (stryMutAct_9fa48("34406")) {
            {}
          } else {
            stryCov_9fa48("34406");
            _this.cfg._ = _this.defCfg;
            _this.persist(callback);
          }
        } else if (stryMutAct_9fa48("34408") ? false : stryMutAct_9fa48("34407") ? true : (stryCov_9fa48("34407", "34408"), expandObjBy(_this.cfg._, _this.defCfg))) {
          if (stryMutAct_9fa48("34409")) {
            {}
          } else {
            stryCov_9fa48("34409");
            _this.persist(callback);
          }
        } else if (stryMutAct_9fa48("34412") ? typeof callback !== 'function' : stryMutAct_9fa48("34411") ? false : stryMutAct_9fa48("34410") ? true : (stryCov_9fa48("34410", "34411", "34412"), typeof callback === (stryMutAct_9fa48("34413") ? "" : (stryCov_9fa48("34413"), 'function')))) {
          if (stryMutAct_9fa48("34414")) {
            {}
          } else {
            stryCov_9fa48("34414");
            callback.apply(_this, err);
          }
        }
      }
    });
  }
};

/**
 Persists the local object.
 @param callback Gets called when done.
 */
Settings.prototype.persist = function (callback) {
  if (stryMutAct_9fa48("34415")) {
    {}
  } else {
    stryCov_9fa48("34415");
    let conf = this.cfg._;
    const _this = this;
    if (stryMutAct_9fa48("34418") ? typeof conf !== 'object' : stryMutAct_9fa48("34417") ? false : stryMutAct_9fa48("34416") ? true : (stryCov_9fa48("34416", "34417", "34418"), typeof conf === (stryMutAct_9fa48("34419") ? "" : (stryCov_9fa48("34419"), 'object')))) {
      if (stryMutAct_9fa48("34420")) {
        {}
      } else {
        stryCov_9fa48("34420");
        conf = JSON.stringify(conf);
      }
    }
    meta.settings.set(this.hash, this.createWrapper(this.cfg.v, conf), (...args) => {
      if (stryMutAct_9fa48("34421")) {
        {}
      } else {
        stryCov_9fa48("34421");
        if (stryMutAct_9fa48("34424") ? typeof callback !== 'function' : stryMutAct_9fa48("34423") ? false : stryMutAct_9fa48("34422") ? true : (stryCov_9fa48("34422", "34423", "34424"), typeof callback === (stryMutAct_9fa48("34425") ? "" : (stryCov_9fa48("34425"), 'function')))) {
          if (stryMutAct_9fa48("34426")) {
            {}
          } else {
            stryCov_9fa48("34426");
            callback.apply(_this, stryMutAct_9fa48("34429") ? args && [] : stryMutAct_9fa48("34428") ? false : stryMutAct_9fa48("34427") ? true : (stryCov_9fa48("34427", "34428", "34429"), args || (stryMutAct_9fa48("34430") ? ["Stryker was here"] : (stryCov_9fa48("34430"), []))));
          }
        }
      }
    });
    return this;
  }
};

/**
 Returns the setting of given key or default value if not set.
 @param key The key of the setting to return.
 @param def The default value, if not set global default value gets used.
 @returns Object The setting to be used.
 */
Settings.prototype.get = function (key, def) {
  if (stryMutAct_9fa48("34431")) {
    {}
  } else {
    stryCov_9fa48("34431");
    let obj = this.cfg._;
    const parts = (stryMutAct_9fa48("34434") ? key && '' : stryMutAct_9fa48("34433") ? false : stryMutAct_9fa48("34432") ? true : (stryCov_9fa48("34432", "34433", "34434"), key || (stryMutAct_9fa48("34435") ? "Stryker was here!" : (stryCov_9fa48("34435"), '')))).split(stryMutAct_9fa48("34436") ? "" : (stryCov_9fa48("34436"), '.'));
    let part;
    for (let i = 0; stryMutAct_9fa48("34439") ? i >= parts.length : stryMutAct_9fa48("34438") ? i <= parts.length : stryMutAct_9fa48("34437") ? false : (stryCov_9fa48("34437", "34438", "34439"), i < parts.length); stryMutAct_9fa48("34440") ? i -= 1 : (stryCov_9fa48("34440"), i += 1)) {
      if (stryMutAct_9fa48("34441")) {
        {}
      } else {
        stryCov_9fa48("34441");
        part = parts[i];
        if (stryMutAct_9fa48("34444") ? part || obj != null : stryMutAct_9fa48("34443") ? false : stryMutAct_9fa48("34442") ? true : (stryCov_9fa48("34442", "34443", "34444"), part && (stryMutAct_9fa48("34446") ? obj == null : stryMutAct_9fa48("34445") ? true : (stryCov_9fa48("34445", "34446"), obj != null)))) {
          if (stryMutAct_9fa48("34447")) {
            {}
          } else {
            stryCov_9fa48("34447");
            obj = obj[part];
          }
        }
      }
    }
    if (stryMutAct_9fa48("34450") ? obj !== undefined : stryMutAct_9fa48("34449") ? false : stryMutAct_9fa48("34448") ? true : (stryCov_9fa48("34448", "34449", "34450"), obj === undefined)) {
      if (stryMutAct_9fa48("34451")) {
        {}
      } else {
        stryCov_9fa48("34451");
        if (stryMutAct_9fa48("34454") ? def !== undefined : stryMutAct_9fa48("34453") ? false : stryMutAct_9fa48("34452") ? true : (stryCov_9fa48("34452", "34453", "34454"), def === undefined)) {
          if (stryMutAct_9fa48("34455")) {
            {}
          } else {
            stryCov_9fa48("34455");
            def = this.defCfg;
            for (let j = 0; stryMutAct_9fa48("34458") ? j >= parts.length : stryMutAct_9fa48("34457") ? j <= parts.length : stryMutAct_9fa48("34456") ? false : (stryCov_9fa48("34456", "34457", "34458"), j < parts.length); stryMutAct_9fa48("34459") ? j -= 1 : (stryCov_9fa48("34459"), j += 1)) {
              if (stryMutAct_9fa48("34460")) {
                {}
              } else {
                stryCov_9fa48("34460");
                part = parts[j];
                if (stryMutAct_9fa48("34463") ? part || def != null : stryMutAct_9fa48("34462") ? false : stryMutAct_9fa48("34461") ? true : (stryCov_9fa48("34461", "34462", "34463"), part && (stryMutAct_9fa48("34465") ? def == null : stryMutAct_9fa48("34464") ? true : (stryCov_9fa48("34464", "34465"), def != null)))) {
                  if (stryMutAct_9fa48("34466")) {
                    {}
                  } else {
                    stryCov_9fa48("34466");
                    def = def[part];
                  }
                }
              }
            }
          }
        }
        return def;
      }
    }
    return obj;
  }
};

/**
 Returns the settings-wrapper object.
 @returns Object The settings-wrapper.
 */
Settings.prototype.getWrapper = function () {
  if (stryMutAct_9fa48("34467")) {
    {}
  } else {
    stryCov_9fa48("34467");
    return this.cfg;
  }
};

/**
 Creates a new wrapper for the given settings with the given version.
 @returns Object The new settings-wrapper.
 */
Settings.prototype.createWrapper = function (version, settings) {
  if (stryMutAct_9fa48("34468")) {
    {}
  } else {
    stryCov_9fa48("34468");
    return stryMutAct_9fa48("34469") ? {} : (stryCov_9fa48("34469"), {
      v: version,
      _: settings
    });
  }
};

/**
 Creates a new wrapper for the default settings.
 @returns Object The new settings-wrapper.
 */
Settings.prototype.createDefaultWrapper = function () {
  if (stryMutAct_9fa48("34470")) {
    {}
  } else {
    stryCov_9fa48("34470");
    return this.createWrapper(this.version, this.defCfg);
  }
};

/**
 Sets the setting of given key to given value.
 @param key The key of the setting to set.
 @param val The value to set.
 */
Settings.prototype.set = function (key, val) {
  if (stryMutAct_9fa48("34471")) {
    {}
  } else {
    stryCov_9fa48("34471");
    let part;
    let obj;
    let parts;
    this.cfg.v = this.version;
    if (stryMutAct_9fa48("34474") ? val == null && !key : stryMutAct_9fa48("34473") ? false : stryMutAct_9fa48("34472") ? true : (stryCov_9fa48("34472", "34473", "34474"), (stryMutAct_9fa48("34476") ? val != null : stryMutAct_9fa48("34475") ? false : (stryCov_9fa48("34475", "34476"), val == null)) || (stryMutAct_9fa48("34477") ? key : (stryCov_9fa48("34477"), !key)))) {
      if (stryMutAct_9fa48("34478")) {
        {}
      } else {
        stryCov_9fa48("34478");
        this.cfg._ = stryMutAct_9fa48("34481") ? val && key : stryMutAct_9fa48("34480") ? false : stryMutAct_9fa48("34479") ? true : (stryCov_9fa48("34479", "34480", "34481"), val || key);
      }
    } else {
      if (stryMutAct_9fa48("34482")) {
        {}
      } else {
        stryCov_9fa48("34482");
        obj = this.cfg._;
        parts = key.split(stryMutAct_9fa48("34483") ? "" : (stryCov_9fa48("34483"), '.'));
        for (let i = 0, _len = stryMutAct_9fa48("34484") ? parts.length + 1 : (stryCov_9fa48("34484"), parts.length - 1); stryMutAct_9fa48("34487") ? i >= _len : stryMutAct_9fa48("34486") ? i <= _len : stryMutAct_9fa48("34485") ? false : (stryCov_9fa48("34485", "34486", "34487"), i < _len); stryMutAct_9fa48("34488") ? i -= 1 : (stryCov_9fa48("34488"), i += 1)) {
          if (stryMutAct_9fa48("34489")) {
            {}
          } else {
            stryCov_9fa48("34489");
            part = parts[i];
            if (stryMutAct_9fa48("34491") ? false : stryMutAct_9fa48("34490") ? true : (stryCov_9fa48("34490", "34491"), part)) {
              if (stryMutAct_9fa48("34492")) {
                {}
              } else {
                stryCov_9fa48("34492");
                if (stryMutAct_9fa48("34495") ? false : stryMutAct_9fa48("34494") ? true : stryMutAct_9fa48("34493") ? obj.hasOwnProperty(part) : (stryCov_9fa48("34493", "34494", "34495"), !obj.hasOwnProperty(part))) {
                  if (stryMutAct_9fa48("34496")) {
                    {}
                  } else {
                    stryCov_9fa48("34496");
                    obj[part] = {};
                  }
                }
                obj = obj[part];
              }
            }
          }
        }
        obj[parts[stryMutAct_9fa48("34497") ? parts.length + 1 : (stryCov_9fa48("34497"), parts.length - 1)]] = val;
      }
    }
    return this;
  }
};

/**
 Resets the saved settings to default settings.
 @param callback Gets called when done.
 */
Settings.prototype.reset = function (callback) {
  if (stryMutAct_9fa48("34498")) {
    {}
  } else {
    stryCov_9fa48("34498");
    this.set(this.defCfg).persist(callback);
    return this;
  }
};

/**
 If the version differs the settings get updated and persisted.
 @param callback Gets called when done.
 @param force Whether to update and persist the settings even if the versions ara equal.
 */
Settings.prototype.checkStructure = function (callback, force) {
  if (stryMutAct_9fa48("34499")) {
    {}
  } else {
    stryCov_9fa48("34499");
    if (stryMutAct_9fa48("34502") ? !force || this.cfg.v === this.version : stryMutAct_9fa48("34501") ? false : stryMutAct_9fa48("34500") ? true : (stryCov_9fa48("34500", "34501", "34502"), (stryMutAct_9fa48("34503") ? force : (stryCov_9fa48("34503"), !force)) && (stryMutAct_9fa48("34505") ? this.cfg.v !== this.version : stryMutAct_9fa48("34504") ? true : (stryCov_9fa48("34504", "34505"), this.cfg.v === this.version)))) {
      if (stryMutAct_9fa48("34506")) {
        {}
      } else {
        stryCov_9fa48("34506");
        if (stryMutAct_9fa48("34509") ? typeof callback !== 'function' : stryMutAct_9fa48("34508") ? false : stryMutAct_9fa48("34507") ? true : (stryCov_9fa48("34507", "34508", "34509"), typeof callback === (stryMutAct_9fa48("34510") ? "" : (stryCov_9fa48("34510"), 'function')))) {
          if (stryMutAct_9fa48("34511")) {
            {}
          } else {
            stryCov_9fa48("34511");
            callback();
          }
        }
      }
    } else {
      if (stryMutAct_9fa48("34512")) {
        {}
      } else {
        stryCov_9fa48("34512");
        mergeSettings(this.cfg, this.defCfg);
        this.cfg.v = this.version;
        this.persist(callback);
      }
    }
    return this;
  }
};
module.exports = Settings;