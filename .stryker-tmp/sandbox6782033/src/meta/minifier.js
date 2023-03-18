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
const os = require('os');
const uglify = require('uglify-es');
const async = require('async');
const winston = require('winston');
const less = require('less');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const clean = require('postcss-clean');
const fork = require('./debugFork');
require('../file'); // for graceful-fs

const Minifier = module.exports;
const pool = stryMutAct_9fa48("24354") ? ["Stryker was here"] : (stryCov_9fa48("24354"), []);
const free = stryMutAct_9fa48("24355") ? ["Stryker was here"] : (stryCov_9fa48("24355"), []);
let maxThreads = 0;
Object.defineProperty(Minifier, stryMutAct_9fa48("24356") ? "" : (stryCov_9fa48("24356"), 'maxThreads'), stryMutAct_9fa48("24357") ? {} : (stryCov_9fa48("24357"), {
  get: function () {
    if (stryMutAct_9fa48("24358")) {
      {}
    } else {
      stryCov_9fa48("24358");
      return maxThreads;
    }
  },
  set: function (val) {
    if (stryMutAct_9fa48("24359")) {
      {}
    } else {
      stryCov_9fa48("24359");
      maxThreads = val;
      if (stryMutAct_9fa48("24362") ? false : stryMutAct_9fa48("24361") ? true : stryMutAct_9fa48("24360") ? process.env.minifier_child : (stryCov_9fa48("24360", "24361", "24362"), !process.env.minifier_child)) {
        if (stryMutAct_9fa48("24363")) {
          {}
        } else {
          stryCov_9fa48("24363");
          winston.verbose(stryMutAct_9fa48("24364") ? `` : (stryCov_9fa48("24364"), `[minifier] utilizing a maximum of ${maxThreads} additional threads`));
        }
      }
    }
  },
  configurable: stryMutAct_9fa48("24365") ? false : (stryCov_9fa48("24365"), true),
  enumerable: stryMutAct_9fa48("24366") ? false : (stryCov_9fa48("24366"), true)
}));
Minifier.maxThreads = stryMutAct_9fa48("24367") ? os.cpus().length + 1 : (stryCov_9fa48("24367"), os.cpus().length - 1);
Minifier.killAll = function () {
  if (stryMutAct_9fa48("24368")) {
    {}
  } else {
    stryCov_9fa48("24368");
    pool.forEach(child => {
      if (stryMutAct_9fa48("24369")) {
        {}
      } else {
        stryCov_9fa48("24369");
        child.kill(stryMutAct_9fa48("24370") ? "" : (stryCov_9fa48("24370"), 'SIGTERM'));
      }
    });
    pool.length = 0;
    free.length = 0;
  }
};
function getChild() {
  if (stryMutAct_9fa48("24371")) {
    {}
  } else {
    stryCov_9fa48("24371");
    if (stryMutAct_9fa48("24373") ? false : stryMutAct_9fa48("24372") ? true : (stryCov_9fa48("24372", "24373"), free.length)) {
      if (stryMutAct_9fa48("24374")) {
        {}
      } else {
        stryCov_9fa48("24374");
        return free.shift();
      }
    }
    const proc = fork(__filename, stryMutAct_9fa48("24375") ? ["Stryker was here"] : (stryCov_9fa48("24375"), []), stryMutAct_9fa48("24376") ? {} : (stryCov_9fa48("24376"), {
      cwd: __dirname,
      env: stryMutAct_9fa48("24377") ? {} : (stryCov_9fa48("24377"), {
        minifier_child: stryMutAct_9fa48("24378") ? false : (stryCov_9fa48("24378"), true)
      })
    }));
    pool.push(proc);
    return proc;
  }
}
function freeChild(proc) {
  if (stryMutAct_9fa48("24379")) {
    {}
  } else {
    stryCov_9fa48("24379");
    proc.removeAllListeners();
    free.push(proc);
  }
}
function removeChild(proc) {
  if (stryMutAct_9fa48("24380")) {
    {}
  } else {
    stryCov_9fa48("24380");
    const i = pool.indexOf(proc);
    if (stryMutAct_9fa48("24383") ? i === -1 : stryMutAct_9fa48("24382") ? false : stryMutAct_9fa48("24381") ? true : (stryCov_9fa48("24381", "24382", "24383"), i !== (stryMutAct_9fa48("24384") ? +1 : (stryCov_9fa48("24384"), -1)))) {
      if (stryMutAct_9fa48("24385")) {
        {}
      } else {
        stryCov_9fa48("24385");
        pool.splice(i, 1);
      }
    }
  }
}
function forkAction(action) {
  if (stryMutAct_9fa48("24386")) {
    {}
  } else {
    stryCov_9fa48("24386");
    return new Promise((resolve, reject) => {
      if (stryMutAct_9fa48("24387")) {
        {}
      } else {
        stryCov_9fa48("24387");
        const proc = getChild();
        proc.on(stryMutAct_9fa48("24388") ? "" : (stryCov_9fa48("24388"), 'message'), message => {
          if (stryMutAct_9fa48("24389")) {
            {}
          } else {
            stryCov_9fa48("24389");
            freeChild(proc);
            if (stryMutAct_9fa48("24392") ? message.type !== 'error' : stryMutAct_9fa48("24391") ? false : stryMutAct_9fa48("24390") ? true : (stryCov_9fa48("24390", "24391", "24392"), message.type === (stryMutAct_9fa48("24393") ? "" : (stryCov_9fa48("24393"), 'error')))) {
              if (stryMutAct_9fa48("24394")) {
                {}
              } else {
                stryCov_9fa48("24394");
                return reject(new Error(message.message));
              }
            }
            if (stryMutAct_9fa48("24397") ? message.type !== 'end' : stryMutAct_9fa48("24396") ? false : stryMutAct_9fa48("24395") ? true : (stryCov_9fa48("24395", "24396", "24397"), message.type === (stryMutAct_9fa48("24398") ? "" : (stryCov_9fa48("24398"), 'end')))) {
              if (stryMutAct_9fa48("24399")) {
                {}
              } else {
                stryCov_9fa48("24399");
                resolve(message.result);
              }
            }
          }
        });
        proc.on(stryMutAct_9fa48("24400") ? "" : (stryCov_9fa48("24400"), 'error'), err => {
          if (stryMutAct_9fa48("24401")) {
            {}
          } else {
            stryCov_9fa48("24401");
            proc.kill();
            removeChild(proc);
            reject(err);
          }
        });
        proc.send(stryMutAct_9fa48("24402") ? {} : (stryCov_9fa48("24402"), {
          type: stryMutAct_9fa48("24403") ? "" : (stryCov_9fa48("24403"), 'action'),
          action: action
        }));
      }
    });
  }
}
const actions = {};
if (stryMutAct_9fa48("24405") ? false : stryMutAct_9fa48("24404") ? true : (stryCov_9fa48("24404", "24405"), process.env.minifier_child)) {
  if (stryMutAct_9fa48("24406")) {
    {}
  } else {
    stryCov_9fa48("24406");
    process.on(stryMutAct_9fa48("24407") ? "" : (stryCov_9fa48("24407"), 'message'), async message => {
      if (stryMutAct_9fa48("24408")) {
        {}
      } else {
        stryCov_9fa48("24408");
        if (stryMutAct_9fa48("24411") ? message.type !== 'action' : stryMutAct_9fa48("24410") ? false : stryMutAct_9fa48("24409") ? true : (stryCov_9fa48("24409", "24410", "24411"), message.type === (stryMutAct_9fa48("24412") ? "" : (stryCov_9fa48("24412"), 'action')))) {
          if (stryMutAct_9fa48("24413")) {
            {}
          } else {
            stryCov_9fa48("24413");
            const {
              action
            } = message;
            if (stryMutAct_9fa48("24416") ? typeof actions[action.act] === 'function' : stryMutAct_9fa48("24415") ? false : stryMutAct_9fa48("24414") ? true : (stryCov_9fa48("24414", "24415", "24416"), typeof actions[action.act] !== (stryMutAct_9fa48("24417") ? "" : (stryCov_9fa48("24417"), 'function')))) {
              if (stryMutAct_9fa48("24418")) {
                {}
              } else {
                stryCov_9fa48("24418");
                process.send(stryMutAct_9fa48("24419") ? {} : (stryCov_9fa48("24419"), {
                  type: stryMutAct_9fa48("24420") ? "" : (stryCov_9fa48("24420"), 'error'),
                  message: stryMutAct_9fa48("24421") ? "" : (stryCov_9fa48("24421"), 'Unknown action')
                }));
                return;
              }
            }
            try {
              if (stryMutAct_9fa48("24422")) {
                {}
              } else {
                stryCov_9fa48("24422");
                const result = await actions[action.act](action);
                process.send(stryMutAct_9fa48("24423") ? {} : (stryCov_9fa48("24423"), {
                  type: stryMutAct_9fa48("24424") ? "" : (stryCov_9fa48("24424"), 'end'),
                  result: result
                }));
              }
            } catch (err) {
              if (stryMutAct_9fa48("24425")) {
                {}
              } else {
                stryCov_9fa48("24425");
                process.send(stryMutAct_9fa48("24426") ? {} : (stryCov_9fa48("24426"), {
                  type: stryMutAct_9fa48("24427") ? "" : (stryCov_9fa48("24427"), 'error'),
                  message: stryMutAct_9fa48("24430") ? (err.stack || err.message) && 'unknown error' : stryMutAct_9fa48("24429") ? false : stryMutAct_9fa48("24428") ? true : (stryCov_9fa48("24428", "24429", "24430"), (stryMutAct_9fa48("24432") ? err.stack && err.message : stryMutAct_9fa48("24431") ? false : (stryCov_9fa48("24431", "24432"), err.stack || err.message)) || (stryMutAct_9fa48("24433") ? "" : (stryCov_9fa48("24433"), 'unknown error')))
                }));
              }
            }
          }
        }
      }
    });
  }
}
async function executeAction(action, fork) {
  if (stryMutAct_9fa48("24434")) {
    {}
  } else {
    stryCov_9fa48("24434");
    if (stryMutAct_9fa48("24437") ? fork || pool.length - free.length < Minifier.maxThreads : stryMutAct_9fa48("24436") ? false : stryMutAct_9fa48("24435") ? true : (stryCov_9fa48("24435", "24436", "24437"), fork && (stryMutAct_9fa48("24440") ? pool.length - free.length >= Minifier.maxThreads : stryMutAct_9fa48("24439") ? pool.length - free.length <= Minifier.maxThreads : stryMutAct_9fa48("24438") ? true : (stryCov_9fa48("24438", "24439", "24440"), (stryMutAct_9fa48("24441") ? pool.length + free.length : (stryCov_9fa48("24441"), pool.length - free.length)) < Minifier.maxThreads)))) {
      if (stryMutAct_9fa48("24442")) {
        {}
      } else {
        stryCov_9fa48("24442");
        return await forkAction(action);
      }
    }
    if (stryMutAct_9fa48("24445") ? typeof actions[action.act] === 'function' : stryMutAct_9fa48("24444") ? false : stryMutAct_9fa48("24443") ? true : (stryCov_9fa48("24443", "24444", "24445"), typeof actions[action.act] !== (stryMutAct_9fa48("24446") ? "" : (stryCov_9fa48("24446"), 'function')))) {
      if (stryMutAct_9fa48("24447")) {
        {}
      } else {
        stryCov_9fa48("24447");
        throw new Error(stryMutAct_9fa48("24448") ? "" : (stryCov_9fa48("24448"), 'Unknown action'));
      }
    }
    return await actions[action.act](action);
  }
}
actions.concat = async function concat(data) {
  if (stryMutAct_9fa48("24449")) {
    {}
  } else {
    stryCov_9fa48("24449");
    if (stryMutAct_9fa48("24452") ? data.files || data.files.length : stryMutAct_9fa48("24451") ? false : stryMutAct_9fa48("24450") ? true : (stryCov_9fa48("24450", "24451", "24452"), data.files && data.files.length)) {
      if (stryMutAct_9fa48("24453")) {
        {}
      } else {
        stryCov_9fa48("24453");
        const files = await async.mapLimit(data.files, 1000, stryMutAct_9fa48("24454") ? () => undefined : (stryCov_9fa48("24454"), async ref => await fs.promises.readFile(ref.srcPath, stryMutAct_9fa48("24455") ? "" : (stryCov_9fa48("24455"), 'utf8'))));
        const output = files.join(stryMutAct_9fa48("24456") ? "" : (stryCov_9fa48("24456"), '\n;'));
        await fs.promises.writeFile(data.destPath, output);
      }
    }
  }
};
actions.minifyJS_batch = async function minifyJS_batch(data) {
  if (stryMutAct_9fa48("24457")) {
    {}
  } else {
    stryCov_9fa48("24457");
    await async.eachLimit(data.files, 100, async fileObj => {
      if (stryMutAct_9fa48("24458")) {
        {}
      } else {
        stryCov_9fa48("24458");
        const source = await fs.promises.readFile(fileObj.srcPath, stryMutAct_9fa48("24459") ? "" : (stryCov_9fa48("24459"), 'utf8'));
        const filesToMinify = stryMutAct_9fa48("24460") ? [] : (stryCov_9fa48("24460"), [stryMutAct_9fa48("24461") ? {} : (stryCov_9fa48("24461"), {
          srcPath: fileObj.srcPath,
          filename: fileObj.filename,
          source: source
        })]);
        await minifyAndSave(stryMutAct_9fa48("24462") ? {} : (stryCov_9fa48("24462"), {
          files: filesToMinify,
          destPath: fileObj.destPath,
          filename: fileObj.filename
        }));
      }
    });
  }
};
actions.minifyJS = async function minifyJS(data) {
  if (stryMutAct_9fa48("24463")) {
    {}
  } else {
    stryCov_9fa48("24463");
    const filesToMinify = await async.mapLimit(data.files, 1000, async fileObj => {
      if (stryMutAct_9fa48("24464")) {
        {}
      } else {
        stryCov_9fa48("24464");
        const source = await fs.promises.readFile(fileObj.srcPath, stryMutAct_9fa48("24465") ? "" : (stryCov_9fa48("24465"), 'utf8'));
        return stryMutAct_9fa48("24466") ? {} : (stryCov_9fa48("24466"), {
          srcPath: fileObj.srcPath,
          filename: fileObj.filename,
          source: source
        });
      }
    });
    await minifyAndSave(stryMutAct_9fa48("24467") ? {} : (stryCov_9fa48("24467"), {
      files: filesToMinify,
      destPath: data.destPath,
      filename: data.filename
    }));
  }
};
async function minifyAndSave(data) {
  if (stryMutAct_9fa48("24468")) {
    {}
  } else {
    stryCov_9fa48("24468");
    const scripts = {};
    data.files.forEach(ref => {
      if (stryMutAct_9fa48("24469")) {
        {}
      } else {
        stryCov_9fa48("24469");
        if (stryMutAct_9fa48("24472") ? ref && ref.filename || ref.source : stryMutAct_9fa48("24471") ? false : stryMutAct_9fa48("24470") ? true : (stryCov_9fa48("24470", "24471", "24472"), (stryMutAct_9fa48("24474") ? ref || ref.filename : stryMutAct_9fa48("24473") ? true : (stryCov_9fa48("24473", "24474"), ref && ref.filename)) && ref.source)) {
          if (stryMutAct_9fa48("24475")) {
            {}
          } else {
            stryCov_9fa48("24475");
            scripts[ref.filename] = ref.source;
          }
        }
      }
    });
    const minified = uglify.minify(scripts, stryMutAct_9fa48("24476") ? {} : (stryCov_9fa48("24476"), {
      sourceMap: stryMutAct_9fa48("24477") ? {} : (stryCov_9fa48("24477"), {
        filename: data.filename,
        url: stryMutAct_9fa48("24478") ? `` : (stryCov_9fa48("24478"), `${String(data.filename).split(stryMutAct_9fa48("24479") ? /[^/\\]/ : (stryCov_9fa48("24479"), /[/\\]/)).pop()}.map`),
        includeSources: stryMutAct_9fa48("24480") ? false : (stryCov_9fa48("24480"), true)
      }),
      compress: stryMutAct_9fa48("24481") ? true : (stryCov_9fa48("24481"), false)
    }));
    if (stryMutAct_9fa48("24483") ? false : stryMutAct_9fa48("24482") ? true : (stryCov_9fa48("24482", "24483"), minified.error)) {
      if (stryMutAct_9fa48("24484")) {
        {}
      } else {
        stryCov_9fa48("24484");
        throw new Error(stryMutAct_9fa48("24485") ? `` : (stryCov_9fa48("24485"), `Error minifying ${minified.error.filename}\n${minified.error.stack}`));
      }
    }
    await Promise.all(stryMutAct_9fa48("24486") ? [] : (stryCov_9fa48("24486"), [fs.promises.writeFile(data.destPath, minified.code), fs.promises.writeFile(stryMutAct_9fa48("24487") ? `` : (stryCov_9fa48("24487"), `${data.destPath}.map`), minified.map)]));
  }
}
Minifier.js = {};
Minifier.js.bundle = async function (data, minify, fork) {
  if (stryMutAct_9fa48("24488")) {
    {}
  } else {
    stryCov_9fa48("24488");
    return await executeAction(stryMutAct_9fa48("24489") ? {} : (stryCov_9fa48("24489"), {
      act: minify ? stryMutAct_9fa48("24490") ? "" : (stryCov_9fa48("24490"), 'minifyJS') : stryMutAct_9fa48("24491") ? "" : (stryCov_9fa48("24491"), 'concat'),
      files: data.files,
      filename: data.filename,
      destPath: data.destPath
    }), fork);
  }
};
Minifier.js.minifyBatch = async function (scripts, fork) {
  if (stryMutAct_9fa48("24492")) {
    {}
  } else {
    stryCov_9fa48("24492");
    return await executeAction(stryMutAct_9fa48("24493") ? {} : (stryCov_9fa48("24493"), {
      act: stryMutAct_9fa48("24494") ? "" : (stryCov_9fa48("24494"), 'minifyJS_batch'),
      files: scripts
    }), fork);
  }
};
actions.buildCSS = async function buildCSS(data) {
  if (stryMutAct_9fa48("24495")) {
    {}
  } else {
    stryCov_9fa48("24495");
    const lessOutput = await less.render(data.source, stryMutAct_9fa48("24496") ? {} : (stryCov_9fa48("24496"), {
      paths: data.paths,
      javascriptEnabled: stryMutAct_9fa48("24497") ? true : (stryCov_9fa48("24497"), false)
    }));
    const postcssArgs = stryMutAct_9fa48("24498") ? [] : (stryCov_9fa48("24498"), [autoprefixer]);
    if (stryMutAct_9fa48("24500") ? false : stryMutAct_9fa48("24499") ? true : (stryCov_9fa48("24499", "24500"), data.minify)) {
      if (stryMutAct_9fa48("24501")) {
        {}
      } else {
        stryCov_9fa48("24501");
        postcssArgs.push(clean(stryMutAct_9fa48("24502") ? {} : (stryCov_9fa48("24502"), {
          processImportFrom: stryMutAct_9fa48("24503") ? [] : (stryCov_9fa48("24503"), [stryMutAct_9fa48("24504") ? "" : (stryCov_9fa48("24504"), 'local')])
        })));
      }
    }
    const result = await postcss(postcssArgs).process(lessOutput.css, stryMutAct_9fa48("24505") ? {} : (stryCov_9fa48("24505"), {
      from: undefined
    }));
    return stryMutAct_9fa48("24506") ? {} : (stryCov_9fa48("24506"), {
      code: result.css
    });
  }
};
Minifier.css = {};
Minifier.css.bundle = async function (source, paths, minify, fork) {
  if (stryMutAct_9fa48("24507")) {
    {}
  } else {
    stryCov_9fa48("24507");
    return await executeAction(stryMutAct_9fa48("24508") ? {} : (stryCov_9fa48("24508"), {
      act: stryMutAct_9fa48("24509") ? "" : (stryCov_9fa48("24509"), 'buildCSS'),
      source: source,
      paths: paths,
      minify: minify
    }), fork);
  }
};
require('../promisify')(exports);