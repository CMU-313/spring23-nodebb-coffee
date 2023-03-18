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
const url = require('url');
const winston = require('winston');
const sanitize = require('sanitize-html');
const _ = require('lodash');
const meta = require('../meta');
const plugins = require('../plugins');
const translator = require('../translator');
const utils = require('../utils');
let sanitizeConfig = stryMutAct_9fa48("29302") ? {} : (stryCov_9fa48("29302"), {
  allowedTags: sanitize.defaults.allowedTags.concat(stryMutAct_9fa48("29303") ? [] : (stryCov_9fa48("29303"), [// Some safe-to-use tags to add
  stryMutAct_9fa48("29304") ? "" : (stryCov_9fa48("29304"), 'sup'), stryMutAct_9fa48("29305") ? "" : (stryCov_9fa48("29305"), 'ins'), stryMutAct_9fa48("29306") ? "" : (stryCov_9fa48("29306"), 'del'), stryMutAct_9fa48("29307") ? "" : (stryCov_9fa48("29307"), 'img'), stryMutAct_9fa48("29308") ? "" : (stryCov_9fa48("29308"), 'button'), stryMutAct_9fa48("29309") ? "" : (stryCov_9fa48("29309"), 'video'), stryMutAct_9fa48("29310") ? "" : (stryCov_9fa48("29310"), 'audio'), stryMutAct_9fa48("29311") ? "" : (stryCov_9fa48("29311"), 'iframe'), stryMutAct_9fa48("29312") ? "" : (stryCov_9fa48("29312"), 'embed') // 'sup' still necessary until https://github.com/apostrophecms/sanitize-html/pull/422 merged
  ])),
  allowedAttributes: stryMutAct_9fa48("29313") ? {} : (stryCov_9fa48("29313"), {
    ...sanitize.defaults.allowedAttributes,
    a: stryMutAct_9fa48("29314") ? [] : (stryCov_9fa48("29314"), [stryMutAct_9fa48("29315") ? "" : (stryCov_9fa48("29315"), 'href'), stryMutAct_9fa48("29316") ? "" : (stryCov_9fa48("29316"), 'name'), stryMutAct_9fa48("29317") ? "" : (stryCov_9fa48("29317"), 'hreflang'), stryMutAct_9fa48("29318") ? "" : (stryCov_9fa48("29318"), 'media'), stryMutAct_9fa48("29319") ? "" : (stryCov_9fa48("29319"), 'rel'), stryMutAct_9fa48("29320") ? "" : (stryCov_9fa48("29320"), 'target'), stryMutAct_9fa48("29321") ? "" : (stryCov_9fa48("29321"), 'type')]),
    img: stryMutAct_9fa48("29322") ? [] : (stryCov_9fa48("29322"), [stryMutAct_9fa48("29323") ? "" : (stryCov_9fa48("29323"), 'alt'), stryMutAct_9fa48("29324") ? "" : (stryCov_9fa48("29324"), 'height'), stryMutAct_9fa48("29325") ? "" : (stryCov_9fa48("29325"), 'ismap'), stryMutAct_9fa48("29326") ? "" : (stryCov_9fa48("29326"), 'src'), stryMutAct_9fa48("29327") ? "" : (stryCov_9fa48("29327"), 'usemap'), stryMutAct_9fa48("29328") ? "" : (stryCov_9fa48("29328"), 'width'), stryMutAct_9fa48("29329") ? "" : (stryCov_9fa48("29329"), 'srcset')]),
    iframe: stryMutAct_9fa48("29330") ? [] : (stryCov_9fa48("29330"), [stryMutAct_9fa48("29331") ? "" : (stryCov_9fa48("29331"), 'height'), stryMutAct_9fa48("29332") ? "" : (stryCov_9fa48("29332"), 'name'), stryMutAct_9fa48("29333") ? "" : (stryCov_9fa48("29333"), 'src'), stryMutAct_9fa48("29334") ? "" : (stryCov_9fa48("29334"), 'width')]),
    video: stryMutAct_9fa48("29335") ? [] : (stryCov_9fa48("29335"), [stryMutAct_9fa48("29336") ? "" : (stryCov_9fa48("29336"), 'autoplay'), stryMutAct_9fa48("29337") ? "" : (stryCov_9fa48("29337"), 'controls'), stryMutAct_9fa48("29338") ? "" : (stryCov_9fa48("29338"), 'height'), stryMutAct_9fa48("29339") ? "" : (stryCov_9fa48("29339"), 'loop'), stryMutAct_9fa48("29340") ? "" : (stryCov_9fa48("29340"), 'muted'), stryMutAct_9fa48("29341") ? "" : (stryCov_9fa48("29341"), 'poster'), stryMutAct_9fa48("29342") ? "" : (stryCov_9fa48("29342"), 'preload'), stryMutAct_9fa48("29343") ? "" : (stryCov_9fa48("29343"), 'src'), stryMutAct_9fa48("29344") ? "" : (stryCov_9fa48("29344"), 'width')]),
    audio: stryMutAct_9fa48("29345") ? [] : (stryCov_9fa48("29345"), [stryMutAct_9fa48("29346") ? "" : (stryCov_9fa48("29346"), 'autoplay'), stryMutAct_9fa48("29347") ? "" : (stryCov_9fa48("29347"), 'controls'), stryMutAct_9fa48("29348") ? "" : (stryCov_9fa48("29348"), 'loop'), stryMutAct_9fa48("29349") ? "" : (stryCov_9fa48("29349"), 'muted'), stryMutAct_9fa48("29350") ? "" : (stryCov_9fa48("29350"), 'preload'), stryMutAct_9fa48("29351") ? "" : (stryCov_9fa48("29351"), 'src')]),
    embed: stryMutAct_9fa48("29352") ? [] : (stryCov_9fa48("29352"), [stryMutAct_9fa48("29353") ? "" : (stryCov_9fa48("29353"), 'height'), stryMutAct_9fa48("29354") ? "" : (stryCov_9fa48("29354"), 'src'), stryMutAct_9fa48("29355") ? "" : (stryCov_9fa48("29355"), 'type'), stryMutAct_9fa48("29356") ? "" : (stryCov_9fa48("29356"), 'width')])
  }),
  globalAttributes: stryMutAct_9fa48("29357") ? [] : (stryCov_9fa48("29357"), [stryMutAct_9fa48("29358") ? "" : (stryCov_9fa48("29358"), 'accesskey'), stryMutAct_9fa48("29359") ? "" : (stryCov_9fa48("29359"), 'class'), stryMutAct_9fa48("29360") ? "" : (stryCov_9fa48("29360"), 'contenteditable'), stryMutAct_9fa48("29361") ? "" : (stryCov_9fa48("29361"), 'dir'), stryMutAct_9fa48("29362") ? "" : (stryCov_9fa48("29362"), 'draggable'), stryMutAct_9fa48("29363") ? "" : (stryCov_9fa48("29363"), 'dropzone'), stryMutAct_9fa48("29364") ? "" : (stryCov_9fa48("29364"), 'hidden'), stryMutAct_9fa48("29365") ? "" : (stryCov_9fa48("29365"), 'id'), stryMutAct_9fa48("29366") ? "" : (stryCov_9fa48("29366"), 'lang'), stryMutAct_9fa48("29367") ? "" : (stryCov_9fa48("29367"), 'spellcheck'), stryMutAct_9fa48("29368") ? "" : (stryCov_9fa48("29368"), 'style'), stryMutAct_9fa48("29369") ? "" : (stryCov_9fa48("29369"), 'tabindex'), stryMutAct_9fa48("29370") ? "" : (stryCov_9fa48("29370"), 'title'), stryMutAct_9fa48("29371") ? "" : (stryCov_9fa48("29371"), 'translate'), stryMutAct_9fa48("29372") ? "" : (stryCov_9fa48("29372"), 'aria-expanded'), stryMutAct_9fa48("29373") ? "" : (stryCov_9fa48("29373"), 'data-*')]),
  allowedClasses: stryMutAct_9fa48("29374") ? {} : (stryCov_9fa48("29374"), {
    ...sanitize.defaults.allowedClasses
  })
});
module.exports = function (Posts) {
  if (stryMutAct_9fa48("29375")) {
    {}
  } else {
    stryCov_9fa48("29375");
    Posts.urlRegex = stryMutAct_9fa48("29376") ? {} : (stryCov_9fa48("29376"), {
      regex: stryMutAct_9fa48("29378") ? /href="(["]+)"/g : stryMutAct_9fa48("29377") ? /href="([^"])"/g : (stryCov_9fa48("29377", "29378"), /href="([^"]+)"/g),
      length: 6
    });
    Posts.imgRegex = stryMutAct_9fa48("29379") ? {} : (stryCov_9fa48("29379"), {
      regex: stryMutAct_9fa48("29381") ? /src="(["]+)"/g : stryMutAct_9fa48("29380") ? /src="([^"])"/g : (stryCov_9fa48("29380", "29381"), /src="([^"]+)"/g),
      length: 5
    });
    Posts.parsePost = async function (postData) {
      if (stryMutAct_9fa48("29382")) {
        {}
      } else {
        stryCov_9fa48("29382");
        if (stryMutAct_9fa48("29385") ? false : stryMutAct_9fa48("29384") ? true : stryMutAct_9fa48("29383") ? postData : (stryCov_9fa48("29383", "29384", "29385"), !postData)) {
          if (stryMutAct_9fa48("29386")) {
            {}
          } else {
            stryCov_9fa48("29386");
            return postData;
          }
        }
        postData.content = String(stryMutAct_9fa48("29389") ? postData.content && '' : stryMutAct_9fa48("29388") ? false : stryMutAct_9fa48("29387") ? true : (stryCov_9fa48("29387", "29388", "29389"), postData.content || (stryMutAct_9fa48("29390") ? "Stryker was here!" : (stryCov_9fa48("29390"), ''))));
        const cache = require('./cache');
        const pid = String(postData.pid);
        const cachedContent = cache.get(pid);
        if (stryMutAct_9fa48("29393") ? postData.pid || cachedContent !== undefined : stryMutAct_9fa48("29392") ? false : stryMutAct_9fa48("29391") ? true : (stryCov_9fa48("29391", "29392", "29393"), postData.pid && (stryMutAct_9fa48("29395") ? cachedContent === undefined : stryMutAct_9fa48("29394") ? true : (stryCov_9fa48("29394", "29395"), cachedContent !== undefined)))) {
          if (stryMutAct_9fa48("29396")) {
            {}
          } else {
            stryCov_9fa48("29396");
            postData.content = cachedContent;
            return postData;
          }
        }
        const data = await plugins.hooks.fire(stryMutAct_9fa48("29397") ? "" : (stryCov_9fa48("29397"), 'filter:parse.post'), stryMutAct_9fa48("29398") ? {} : (stryCov_9fa48("29398"), {
          postData: postData
        }));
        data.postData.content = translator.escape(data.postData.content);
        if (stryMutAct_9fa48("29400") ? false : stryMutAct_9fa48("29399") ? true : (stryCov_9fa48("29399", "29400"), data.postData.pid)) {
          if (stryMutAct_9fa48("29401")) {
            {}
          } else {
            stryCov_9fa48("29401");
            cache.set(pid, data.postData.content);
          }
        }
        return data.postData;
      }
    };
    Posts.parseSignature = async function (userData, uid) {
      if (stryMutAct_9fa48("29402")) {
        {}
      } else {
        stryCov_9fa48("29402");
        userData.signature = sanitizeSignature(stryMutAct_9fa48("29405") ? userData.signature && '' : stryMutAct_9fa48("29404") ? false : stryMutAct_9fa48("29403") ? true : (stryCov_9fa48("29403", "29404", "29405"), userData.signature || (stryMutAct_9fa48("29406") ? "Stryker was here!" : (stryCov_9fa48("29406"), ''))));
        return await plugins.hooks.fire(stryMutAct_9fa48("29407") ? "" : (stryCov_9fa48("29407"), 'filter:parse.signature'), stryMutAct_9fa48("29408") ? {} : (stryCov_9fa48("29408"), {
          userData: userData,
          uid: uid
        }));
      }
    };
    Posts.relativeToAbsolute = function (content, regex) {
      if (stryMutAct_9fa48("29409")) {
        {}
      } else {
        stryCov_9fa48("29409");
        // Turns relative links in content to absolute urls
        if (stryMutAct_9fa48("29412") ? false : stryMutAct_9fa48("29411") ? true : stryMutAct_9fa48("29410") ? content : (stryCov_9fa48("29410", "29411", "29412"), !content)) {
          if (stryMutAct_9fa48("29413")) {
            {}
          } else {
            stryCov_9fa48("29413");
            return content;
          }
        }
        let parsed;
        let current = regex.regex.exec(content);
        let absolute;
        while (stryMutAct_9fa48("29415") ? current === null : stryMutAct_9fa48("29414") ? false : (stryCov_9fa48("29414", "29415"), current !== null)) {
          if (stryMutAct_9fa48("29416")) {
            {}
          } else {
            stryCov_9fa48("29416");
            if (stryMutAct_9fa48("29418") ? false : stryMutAct_9fa48("29417") ? true : (stryCov_9fa48("29417", "29418"), current[1])) {
              if (stryMutAct_9fa48("29419")) {
                {}
              } else {
                stryCov_9fa48("29419");
                try {
                  if (stryMutAct_9fa48("29420")) {
                    {}
                  } else {
                    stryCov_9fa48("29420");
                    parsed = url.parse(current[1]);
                    if (stryMutAct_9fa48("29423") ? false : stryMutAct_9fa48("29422") ? true : stryMutAct_9fa48("29421") ? parsed.protocol : (stryCov_9fa48("29421", "29422", "29423"), !parsed.protocol)) {
                      if (stryMutAct_9fa48("29424")) {
                        {}
                      } else {
                        stryCov_9fa48("29424");
                        if (stryMutAct_9fa48("29427") ? current[1].endsWith('/') : stryMutAct_9fa48("29426") ? false : stryMutAct_9fa48("29425") ? true : (stryCov_9fa48("29425", "29426", "29427"), current[1].startsWith(stryMutAct_9fa48("29428") ? "" : (stryCov_9fa48("29428"), '/')))) {
                          if (stryMutAct_9fa48("29429")) {
                            {}
                          } else {
                            stryCov_9fa48("29429");
                            // Internal link
                            absolute = stryMutAct_9fa48("29430") ? nconf.get('base_url') - current[1] : (stryCov_9fa48("29430"), nconf.get(stryMutAct_9fa48("29431") ? "" : (stryCov_9fa48("29431"), 'base_url')) + current[1]);
                          }
                        } else {
                          if (stryMutAct_9fa48("29432")) {
                            {}
                          } else {
                            stryCov_9fa48("29432");
                            // External link
                            absolute = stryMutAct_9fa48("29433") ? `` : (stryCov_9fa48("29433"), `//${current[1]}`);
                          }
                        }
                        content = stryMutAct_9fa48("29434") ? content.slice(0, current.index + regex.length) + absolute - content.slice(current.index + regex.length + current[1].length) : (stryCov_9fa48("29434"), (stryMutAct_9fa48("29435") ? content.slice(0, current.index + regex.length) - absolute : (stryCov_9fa48("29435"), (stryMutAct_9fa48("29436") ? content : (stryCov_9fa48("29436"), content.slice(0, stryMutAct_9fa48("29437") ? current.index - regex.length : (stryCov_9fa48("29437"), current.index + regex.length)))) + absolute)) + (stryMutAct_9fa48("29438") ? content : (stryCov_9fa48("29438"), content.slice(stryMutAct_9fa48("29439") ? current.index + regex.length - current[1].length : (stryCov_9fa48("29439"), (stryMutAct_9fa48("29440") ? current.index - regex.length : (stryCov_9fa48("29440"), current.index + regex.length)) + current[1].length)))));
                      }
                    }
                  }
                } catch (err) {
                  if (stryMutAct_9fa48("29441")) {
                    {}
                  } else {
                    stryCov_9fa48("29441");
                    winston.verbose(err.messsage);
                  }
                }
              }
            }
            current = regex.regex.exec(content);
          }
        }
        return content;
      }
    };
    Posts.sanitize = function (content) {
      if (stryMutAct_9fa48("29442")) {
        {}
      } else {
        stryCov_9fa48("29442");
        return sanitize(content, stryMutAct_9fa48("29443") ? {} : (stryCov_9fa48("29443"), {
          allowedTags: sanitizeConfig.allowedTags,
          allowedAttributes: sanitizeConfig.allowedAttributes,
          allowedClasses: sanitizeConfig.allowedClasses
        }));
      }
    };
    Posts.configureSanitize = async () => {
      if (stryMutAct_9fa48("29444")) {
        {}
      } else {
        stryCov_9fa48("29444");
        // Each allowed tags should have some common global attributes...
        sanitizeConfig.allowedTags.forEach(tag => {
          if (stryMutAct_9fa48("29445")) {
            {}
          } else {
            stryCov_9fa48("29445");
            sanitizeConfig.allowedAttributes[tag] = _.union(sanitizeConfig.allowedAttributes[tag], sanitizeConfig.globalAttributes);
          }
        });

        // Some plugins might need to adjust or whitelist their own tags...
        sanitizeConfig = await plugins.hooks.fire(stryMutAct_9fa48("29446") ? "" : (stryCov_9fa48("29446"), 'filter:sanitize.config'), sanitizeConfig);
      }
    };
    Posts.registerHooks = () => {
      if (stryMutAct_9fa48("29447")) {
        {}
      } else {
        stryCov_9fa48("29447");
        plugins.hooks.register(stryMutAct_9fa48("29448") ? "" : (stryCov_9fa48("29448"), 'core'), stryMutAct_9fa48("29449") ? {} : (stryCov_9fa48("29449"), {
          hook: stryMutAct_9fa48("29450") ? "" : (stryCov_9fa48("29450"), 'filter:parse.post'),
          method: async data => {
            if (stryMutAct_9fa48("29451")) {
              {}
            } else {
              stryCov_9fa48("29451");
              data.postData.content = Posts.sanitize(data.postData.content);
              return data;
            }
          }
        }));
        plugins.hooks.register(stryMutAct_9fa48("29452") ? "" : (stryCov_9fa48("29452"), 'core'), stryMutAct_9fa48("29453") ? {} : (stryCov_9fa48("29453"), {
          hook: stryMutAct_9fa48("29454") ? "" : (stryCov_9fa48("29454"), 'filter:parse.raw'),
          method: stryMutAct_9fa48("29455") ? () => undefined : (stryCov_9fa48("29455"), async content => Posts.sanitize(content))
        }));
        plugins.hooks.register(stryMutAct_9fa48("29456") ? "" : (stryCov_9fa48("29456"), 'core'), stryMutAct_9fa48("29457") ? {} : (stryCov_9fa48("29457"), {
          hook: stryMutAct_9fa48("29458") ? "" : (stryCov_9fa48("29458"), 'filter:parse.aboutme'),
          method: stryMutAct_9fa48("29459") ? () => undefined : (stryCov_9fa48("29459"), async content => Posts.sanitize(content))
        }));
        plugins.hooks.register(stryMutAct_9fa48("29460") ? "" : (stryCov_9fa48("29460"), 'core'), stryMutAct_9fa48("29461") ? {} : (stryCov_9fa48("29461"), {
          hook: stryMutAct_9fa48("29462") ? "" : (stryCov_9fa48("29462"), 'filter:parse.signature'),
          method: async data => {
            if (stryMutAct_9fa48("29463")) {
              {}
            } else {
              stryCov_9fa48("29463");
              data.userData.signature = Posts.sanitize(data.userData.signature);
              return data;
            }
          }
        }));
      }
    };
    function sanitizeSignature(signature) {
      if (stryMutAct_9fa48("29464")) {
        {}
      } else {
        stryCov_9fa48("29464");
        signature = translator.escape(signature);
        const tagsToStrip = stryMutAct_9fa48("29465") ? ["Stryker was here"] : (stryCov_9fa48("29465"), []);
        if (stryMutAct_9fa48("29467") ? false : stryMutAct_9fa48("29466") ? true : (stryCov_9fa48("29466", "29467"), meta.config[stryMutAct_9fa48("29468") ? "" : (stryCov_9fa48("29468"), 'signatures:disableLinks')])) {
          if (stryMutAct_9fa48("29469")) {
            {}
          } else {
            stryCov_9fa48("29469");
            tagsToStrip.push(stryMutAct_9fa48("29470") ? "" : (stryCov_9fa48("29470"), 'a'));
          }
        }
        if (stryMutAct_9fa48("29472") ? false : stryMutAct_9fa48("29471") ? true : (stryCov_9fa48("29471", "29472"), meta.config[stryMutAct_9fa48("29473") ? "" : (stryCov_9fa48("29473"), 'signatures:disableImages')])) {
          if (stryMutAct_9fa48("29474")) {
            {}
          } else {
            stryCov_9fa48("29474");
            tagsToStrip.push(stryMutAct_9fa48("29475") ? "" : (stryCov_9fa48("29475"), 'img'));
          }
        }
        return utils.stripHTMLTags(signature, tagsToStrip);
      }
    }
  }
};