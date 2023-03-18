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
const winston = require('winston');
const plugins = require('../plugins');
const Meta = require('./index');
const utils = require('../utils');
const Tags = module.exports;
const url = nconf.get(stryMutAct_9fa48("24606") ? "" : (stryCov_9fa48("24606"), 'url'));
const relative_path = nconf.get(stryMutAct_9fa48("24607") ? "" : (stryCov_9fa48("24607"), 'relative_path'));
const upload_url = nconf.get(stryMutAct_9fa48("24608") ? "" : (stryCov_9fa48("24608"), 'upload_url'));
Tags.parse = async (req, data, meta, link) => {
  if (stryMutAct_9fa48("24609")) {
    {}
  } else {
    stryCov_9fa48("24609");
    // Meta tags
    const defaultTags = stryMutAct_9fa48("24610") ? [] : (stryCov_9fa48("24610"), [stryMutAct_9fa48("24611") ? {} : (stryCov_9fa48("24611"), {
      name: stryMutAct_9fa48("24612") ? "" : (stryCov_9fa48("24612"), 'viewport'),
      content: stryMutAct_9fa48("24613") ? "" : (stryCov_9fa48("24613"), 'width=device-width, initial-scale=1.0')
    }), stryMutAct_9fa48("24614") ? {} : (stryCov_9fa48("24614"), {
      name: stryMutAct_9fa48("24615") ? "" : (stryCov_9fa48("24615"), 'content-type'),
      content: stryMutAct_9fa48("24616") ? "" : (stryCov_9fa48("24616"), 'text/html; charset=UTF-8'),
      noEscape: stryMutAct_9fa48("24617") ? false : (stryCov_9fa48("24617"), true)
    }), stryMutAct_9fa48("24618") ? {} : (stryCov_9fa48("24618"), {
      name: stryMutAct_9fa48("24619") ? "" : (stryCov_9fa48("24619"), 'apple-mobile-web-app-capable'),
      content: stryMutAct_9fa48("24620") ? "" : (stryCov_9fa48("24620"), 'yes')
    }), stryMutAct_9fa48("24621") ? {} : (stryCov_9fa48("24621"), {
      name: stryMutAct_9fa48("24622") ? "" : (stryCov_9fa48("24622"), 'mobile-web-app-capable'),
      content: stryMutAct_9fa48("24623") ? "" : (stryCov_9fa48("24623"), 'yes')
    }), stryMutAct_9fa48("24624") ? {} : (stryCov_9fa48("24624"), {
      property: stryMutAct_9fa48("24625") ? "" : (stryCov_9fa48("24625"), 'og:site_name'),
      content: stryMutAct_9fa48("24628") ? Meta.config.title && 'NodeBB' : stryMutAct_9fa48("24627") ? false : stryMutAct_9fa48("24626") ? true : (stryCov_9fa48("24626", "24627", "24628"), Meta.config.title || (stryMutAct_9fa48("24629") ? "" : (stryCov_9fa48("24629"), 'NodeBB')))
    }), stryMutAct_9fa48("24630") ? {} : (stryCov_9fa48("24630"), {
      name: stryMutAct_9fa48("24631") ? "" : (stryCov_9fa48("24631"), 'msapplication-badge'),
      content: stryMutAct_9fa48("24632") ? `` : (stryCov_9fa48("24632"), `frequency=30; polling-uri=${url}/sitemap.xml`),
      noEscape: stryMutAct_9fa48("24633") ? false : (stryCov_9fa48("24633"), true)
    }), stryMutAct_9fa48("24634") ? {} : (stryCov_9fa48("24634"), {
      name: stryMutAct_9fa48("24635") ? "" : (stryCov_9fa48("24635"), 'theme-color'),
      content: stryMutAct_9fa48("24638") ? Meta.config.themeColor && '#ffffff' : stryMutAct_9fa48("24637") ? false : stryMutAct_9fa48("24636") ? true : (stryCov_9fa48("24636", "24637", "24638"), Meta.config.themeColor || (stryMutAct_9fa48("24639") ? "" : (stryCov_9fa48("24639"), '#ffffff')))
    })]);
    if (stryMutAct_9fa48("24641") ? false : stryMutAct_9fa48("24640") ? true : (stryCov_9fa48("24640", "24641"), Meta.config.keywords)) {
      if (stryMutAct_9fa48("24642")) {
        {}
      } else {
        stryCov_9fa48("24642");
        defaultTags.push(stryMutAct_9fa48("24643") ? {} : (stryCov_9fa48("24643"), {
          name: stryMutAct_9fa48("24644") ? "" : (stryCov_9fa48("24644"), 'keywords'),
          content: Meta.config.keywords
        }));
      }
    }
    if (stryMutAct_9fa48("24646") ? false : stryMutAct_9fa48("24645") ? true : (stryCov_9fa48("24645", "24646"), Meta.config[stryMutAct_9fa48("24647") ? "" : (stryCov_9fa48("24647"), 'brand:logo')])) {
      if (stryMutAct_9fa48("24648")) {
        {}
      } else {
        stryCov_9fa48("24648");
        defaultTags.push(stryMutAct_9fa48("24649") ? {} : (stryCov_9fa48("24649"), {
          name: stryMutAct_9fa48("24650") ? "" : (stryCov_9fa48("24650"), 'msapplication-square150x150logo'),
          content: Meta.config[stryMutAct_9fa48("24651") ? "" : (stryCov_9fa48("24651"), 'brand:logo')],
          noEscape: stryMutAct_9fa48("24652") ? false : (stryCov_9fa48("24652"), true)
        }));
      }
    }
    const faviconPath = stryMutAct_9fa48("24653") ? `` : (stryCov_9fa48("24653"), `${relative_path}/assets/uploads/system/favicon.ico`);
    const cacheBuster = stryMutAct_9fa48("24654") ? `` : (stryCov_9fa48("24654"), `${Meta.config[stryMutAct_9fa48("24655") ? "" : (stryCov_9fa48("24655"), 'cache-buster')] ? stryMutAct_9fa48("24656") ? `` : (stryCov_9fa48("24656"), `?${Meta.config[stryMutAct_9fa48("24657") ? "" : (stryCov_9fa48("24657"), 'cache-buster')]}`) : stryMutAct_9fa48("24658") ? "Stryker was here!" : (stryCov_9fa48("24658"), '')}`);

    // Link Tags
    const defaultLinks = stryMutAct_9fa48("24659") ? [] : (stryCov_9fa48("24659"), [stryMutAct_9fa48("24660") ? {} : (stryCov_9fa48("24660"), {
      rel: stryMutAct_9fa48("24661") ? "" : (stryCov_9fa48("24661"), 'icon'),
      type: stryMutAct_9fa48("24662") ? "" : (stryCov_9fa48("24662"), 'image/x-icon'),
      href: stryMutAct_9fa48("24663") ? `` : (stryCov_9fa48("24663"), `${faviconPath}${cacheBuster}`)
    }), stryMutAct_9fa48("24664") ? {} : (stryCov_9fa48("24664"), {
      rel: stryMutAct_9fa48("24665") ? "" : (stryCov_9fa48("24665"), 'manifest'),
      href: stryMutAct_9fa48("24666") ? `` : (stryCov_9fa48("24666"), `${relative_path}/manifest.webmanifest`),
      crossorigin: stryMutAct_9fa48("24667") ? `` : (stryCov_9fa48("24667"), `use-credentials`)
    })]);
    if (stryMutAct_9fa48("24669") ? false : stryMutAct_9fa48("24668") ? true : (stryCov_9fa48("24668", "24669"), plugins.hooks.hasListeners(stryMutAct_9fa48("24670") ? "" : (stryCov_9fa48("24670"), 'filter:search.query')))) {
      if (stryMutAct_9fa48("24671")) {
        {}
      } else {
        stryCov_9fa48("24671");
        defaultLinks.push(stryMutAct_9fa48("24672") ? {} : (stryCov_9fa48("24672"), {
          rel: stryMutAct_9fa48("24673") ? "" : (stryCov_9fa48("24673"), 'search'),
          type: stryMutAct_9fa48("24674") ? "" : (stryCov_9fa48("24674"), 'application/opensearchdescription+xml'),
          title: utils.escapeHTML(String(stryMutAct_9fa48("24677") ? (Meta.config.title || Meta.config.browserTitle) && 'NodeBB' : stryMutAct_9fa48("24676") ? false : stryMutAct_9fa48("24675") ? true : (stryCov_9fa48("24675", "24676", "24677"), (stryMutAct_9fa48("24679") ? Meta.config.title && Meta.config.browserTitle : stryMutAct_9fa48("24678") ? false : (stryCov_9fa48("24678", "24679"), Meta.config.title || Meta.config.browserTitle)) || (stryMutAct_9fa48("24680") ? "" : (stryCov_9fa48("24680"), 'NodeBB'))))),
          href: stryMutAct_9fa48("24681") ? `` : (stryCov_9fa48("24681"), `${relative_path}/osd.xml`)
        }));
      }
    }

    // Touch icons for mobile-devices
    if (stryMutAct_9fa48("24683") ? false : stryMutAct_9fa48("24682") ? true : (stryCov_9fa48("24682", "24683"), Meta.config[stryMutAct_9fa48("24684") ? "" : (stryCov_9fa48("24684"), 'brand:touchIcon')])) {
      if (stryMutAct_9fa48("24685")) {
        {}
      } else {
        stryCov_9fa48("24685");
        defaultLinks.push(stryMutAct_9fa48("24686") ? {} : (stryCov_9fa48("24686"), {
          rel: stryMutAct_9fa48("24687") ? "" : (stryCov_9fa48("24687"), 'apple-touch-icon'),
          href: stryMutAct_9fa48("24688") ? `` : (stryCov_9fa48("24688"), `${stryMutAct_9fa48("24689") ? relative_path - upload_url : (stryCov_9fa48("24689"), relative_path + upload_url)}/system/touchicon-orig.png`)
        }), stryMutAct_9fa48("24690") ? {} : (stryCov_9fa48("24690"), {
          rel: stryMutAct_9fa48("24691") ? "" : (stryCov_9fa48("24691"), 'icon'),
          sizes: stryMutAct_9fa48("24692") ? "" : (stryCov_9fa48("24692"), '36x36'),
          href: stryMutAct_9fa48("24693") ? `` : (stryCov_9fa48("24693"), `${stryMutAct_9fa48("24694") ? relative_path - upload_url : (stryCov_9fa48("24694"), relative_path + upload_url)}/system/touchicon-36.png`)
        }), stryMutAct_9fa48("24695") ? {} : (stryCov_9fa48("24695"), {
          rel: stryMutAct_9fa48("24696") ? "" : (stryCov_9fa48("24696"), 'icon'),
          sizes: stryMutAct_9fa48("24697") ? "" : (stryCov_9fa48("24697"), '48x48'),
          href: stryMutAct_9fa48("24698") ? `` : (stryCov_9fa48("24698"), `${stryMutAct_9fa48("24699") ? relative_path - upload_url : (stryCov_9fa48("24699"), relative_path + upload_url)}/system/touchicon-48.png`)
        }), stryMutAct_9fa48("24700") ? {} : (stryCov_9fa48("24700"), {
          rel: stryMutAct_9fa48("24701") ? "" : (stryCov_9fa48("24701"), 'icon'),
          sizes: stryMutAct_9fa48("24702") ? "" : (stryCov_9fa48("24702"), '72x72'),
          href: stryMutAct_9fa48("24703") ? `` : (stryCov_9fa48("24703"), `${stryMutAct_9fa48("24704") ? relative_path - upload_url : (stryCov_9fa48("24704"), relative_path + upload_url)}/system/touchicon-72.png`)
        }), stryMutAct_9fa48("24705") ? {} : (stryCov_9fa48("24705"), {
          rel: stryMutAct_9fa48("24706") ? "" : (stryCov_9fa48("24706"), 'icon'),
          sizes: stryMutAct_9fa48("24707") ? "" : (stryCov_9fa48("24707"), '96x96'),
          href: stryMutAct_9fa48("24708") ? `` : (stryCov_9fa48("24708"), `${stryMutAct_9fa48("24709") ? relative_path - upload_url : (stryCov_9fa48("24709"), relative_path + upload_url)}/system/touchicon-96.png`)
        }), stryMutAct_9fa48("24710") ? {} : (stryCov_9fa48("24710"), {
          rel: stryMutAct_9fa48("24711") ? "" : (stryCov_9fa48("24711"), 'icon'),
          sizes: stryMutAct_9fa48("24712") ? "" : (stryCov_9fa48("24712"), '144x144'),
          href: stryMutAct_9fa48("24713") ? `` : (stryCov_9fa48("24713"), `${stryMutAct_9fa48("24714") ? relative_path - upload_url : (stryCov_9fa48("24714"), relative_path + upload_url)}/system/touchicon-144.png`)
        }), stryMutAct_9fa48("24715") ? {} : (stryCov_9fa48("24715"), {
          rel: stryMutAct_9fa48("24716") ? "" : (stryCov_9fa48("24716"), 'icon'),
          sizes: stryMutAct_9fa48("24717") ? "" : (stryCov_9fa48("24717"), '192x192'),
          href: stryMutAct_9fa48("24718") ? `` : (stryCov_9fa48("24718"), `${stryMutAct_9fa48("24719") ? relative_path - upload_url : (stryCov_9fa48("24719"), relative_path + upload_url)}/system/touchicon-192.png`)
        }));
      }
    } else {
      if (stryMutAct_9fa48("24720")) {
        {}
      } else {
        stryCov_9fa48("24720");
        defaultLinks.push(stryMutAct_9fa48("24721") ? {} : (stryCov_9fa48("24721"), {
          rel: stryMutAct_9fa48("24722") ? "" : (stryCov_9fa48("24722"), 'apple-touch-icon'),
          href: stryMutAct_9fa48("24723") ? `` : (stryCov_9fa48("24723"), `${relative_path}/assets/images/touch/512.png`)
        }), stryMutAct_9fa48("24724") ? {} : (stryCov_9fa48("24724"), {
          rel: stryMutAct_9fa48("24725") ? "" : (stryCov_9fa48("24725"), 'icon'),
          sizes: stryMutAct_9fa48("24726") ? "" : (stryCov_9fa48("24726"), '36x36'),
          href: stryMutAct_9fa48("24727") ? `` : (stryCov_9fa48("24727"), `${relative_path}/assets/images/touch/36.png`)
        }), stryMutAct_9fa48("24728") ? {} : (stryCov_9fa48("24728"), {
          rel: stryMutAct_9fa48("24729") ? "" : (stryCov_9fa48("24729"), 'icon'),
          sizes: stryMutAct_9fa48("24730") ? "" : (stryCov_9fa48("24730"), '48x48'),
          href: stryMutAct_9fa48("24731") ? `` : (stryCov_9fa48("24731"), `${relative_path}/assets/images/touch/48.png`)
        }), stryMutAct_9fa48("24732") ? {} : (stryCov_9fa48("24732"), {
          rel: stryMutAct_9fa48("24733") ? "" : (stryCov_9fa48("24733"), 'icon'),
          sizes: stryMutAct_9fa48("24734") ? "" : (stryCov_9fa48("24734"), '72x72'),
          href: stryMutAct_9fa48("24735") ? `` : (stryCov_9fa48("24735"), `${relative_path}/assets/images/touch/72.png`)
        }), stryMutAct_9fa48("24736") ? {} : (stryCov_9fa48("24736"), {
          rel: stryMutAct_9fa48("24737") ? "" : (stryCov_9fa48("24737"), 'icon'),
          sizes: stryMutAct_9fa48("24738") ? "" : (stryCov_9fa48("24738"), '96x96'),
          href: stryMutAct_9fa48("24739") ? `` : (stryCov_9fa48("24739"), `${relative_path}/assets/images/touch/96.png`)
        }), stryMutAct_9fa48("24740") ? {} : (stryCov_9fa48("24740"), {
          rel: stryMutAct_9fa48("24741") ? "" : (stryCov_9fa48("24741"), 'icon'),
          sizes: stryMutAct_9fa48("24742") ? "" : (stryCov_9fa48("24742"), '144x144'),
          href: stryMutAct_9fa48("24743") ? `` : (stryCov_9fa48("24743"), `${relative_path}/assets/images/touch/144.png`)
        }), stryMutAct_9fa48("24744") ? {} : (stryCov_9fa48("24744"), {
          rel: stryMutAct_9fa48("24745") ? "" : (stryCov_9fa48("24745"), 'icon'),
          sizes: stryMutAct_9fa48("24746") ? "" : (stryCov_9fa48("24746"), '192x192'),
          href: stryMutAct_9fa48("24747") ? `` : (stryCov_9fa48("24747"), `${relative_path}/assets/images/touch/192.png`)
        }), stryMutAct_9fa48("24748") ? {} : (stryCov_9fa48("24748"), {
          rel: stryMutAct_9fa48("24749") ? "" : (stryCov_9fa48("24749"), 'icon'),
          sizes: stryMutAct_9fa48("24750") ? "" : (stryCov_9fa48("24750"), '512x512'),
          href: stryMutAct_9fa48("24751") ? `` : (stryCov_9fa48("24751"), `${relative_path}/assets/images/touch/512.png`)
        }));
      }
    }
    const results = await utils.promiseParallel(stryMutAct_9fa48("24752") ? {} : (stryCov_9fa48("24752"), {
      tags: plugins.hooks.fire(stryMutAct_9fa48("24753") ? "" : (stryCov_9fa48("24753"), 'filter:meta.getMetaTags'), stryMutAct_9fa48("24754") ? {} : (stryCov_9fa48("24754"), {
        req: req,
        data: data,
        tags: defaultTags
      })),
      links: plugins.hooks.fire(stryMutAct_9fa48("24755") ? "" : (stryCov_9fa48("24755"), 'filter:meta.getLinkTags'), stryMutAct_9fa48("24756") ? {} : (stryCov_9fa48("24756"), {
        req: req,
        data: data,
        links: defaultLinks
      }))
    }));
    meta = results.tags.tags.concat(stryMutAct_9fa48("24759") ? meta && [] : stryMutAct_9fa48("24758") ? false : stryMutAct_9fa48("24757") ? true : (stryCov_9fa48("24757", "24758", "24759"), meta || (stryMutAct_9fa48("24760") ? ["Stryker was here"] : (stryCov_9fa48("24760"), [])))).map(tag => {
      if (stryMutAct_9fa48("24761")) {
        {}
      } else {
        stryCov_9fa48("24761");
        if (stryMutAct_9fa48("24764") ? !tag && typeof tag.content !== 'string' : stryMutAct_9fa48("24763") ? false : stryMutAct_9fa48("24762") ? true : (stryCov_9fa48("24762", "24763", "24764"), (stryMutAct_9fa48("24765") ? tag : (stryCov_9fa48("24765"), !tag)) || (stryMutAct_9fa48("24767") ? typeof tag.content === 'string' : stryMutAct_9fa48("24766") ? false : (stryCov_9fa48("24766", "24767"), typeof tag.content !== (stryMutAct_9fa48("24768") ? "" : (stryCov_9fa48("24768"), 'string')))))) {
          if (stryMutAct_9fa48("24769")) {
            {}
          } else {
            stryCov_9fa48("24769");
            winston.warn(stryMutAct_9fa48("24770") ? "" : (stryCov_9fa48("24770"), 'Invalid meta tag. '), tag);
            return tag;
          }
        }
        if (stryMutAct_9fa48("24773") ? false : stryMutAct_9fa48("24772") ? true : stryMutAct_9fa48("24771") ? tag.noEscape : (stryCov_9fa48("24771", "24772", "24773"), !tag.noEscape)) {
          if (stryMutAct_9fa48("24774")) {
            {}
          } else {
            stryCov_9fa48("24774");
            const attributes = Object.keys(tag);
            attributes.forEach(attr => {
              if (stryMutAct_9fa48("24775")) {
                {}
              } else {
                stryCov_9fa48("24775");
                tag[attr] = utils.escapeHTML(String(tag[attr]));
              }
            });
          }
        }
        return tag;
      }
    });
    await addSiteOGImage(meta);
    addIfNotExists(meta, stryMutAct_9fa48("24776") ? "" : (stryCov_9fa48("24776"), 'property'), stryMutAct_9fa48("24777") ? "" : (stryCov_9fa48("24777"), 'og:title'), stryMutAct_9fa48("24780") ? Meta.config.title && 'NodeBB' : stryMutAct_9fa48("24779") ? false : stryMutAct_9fa48("24778") ? true : (stryCov_9fa48("24778", "24779", "24780"), Meta.config.title || (stryMutAct_9fa48("24781") ? "" : (stryCov_9fa48("24781"), 'NodeBB'))));
    const ogUrl = stryMutAct_9fa48("24782") ? url - (req.originalUrl !== '/' ? stripRelativePath(req.originalUrl) : '') : (stryCov_9fa48("24782"), url + ((stryMutAct_9fa48("24785") ? req.originalUrl === '/' : stryMutAct_9fa48("24784") ? false : stryMutAct_9fa48("24783") ? true : (stryCov_9fa48("24783", "24784", "24785"), req.originalUrl !== (stryMutAct_9fa48("24786") ? "" : (stryCov_9fa48("24786"), '/')))) ? stripRelativePath(req.originalUrl) : stryMutAct_9fa48("24787") ? "Stryker was here!" : (stryCov_9fa48("24787"), '')));
    addIfNotExists(meta, stryMutAct_9fa48("24788") ? "" : (stryCov_9fa48("24788"), 'property'), stryMutAct_9fa48("24789") ? "" : (stryCov_9fa48("24789"), 'og:url'), ogUrl);
    addIfNotExists(meta, stryMutAct_9fa48("24790") ? "" : (stryCov_9fa48("24790"), 'name'), stryMutAct_9fa48("24791") ? "" : (stryCov_9fa48("24791"), 'description'), Meta.config.description);
    addIfNotExists(meta, stryMutAct_9fa48("24792") ? "" : (stryCov_9fa48("24792"), 'property'), stryMutAct_9fa48("24793") ? "" : (stryCov_9fa48("24793"), 'og:description'), Meta.config.description);
    link = results.links.links.concat(stryMutAct_9fa48("24796") ? link && [] : stryMutAct_9fa48("24795") ? false : stryMutAct_9fa48("24794") ? true : (stryCov_9fa48("24794", "24795", "24796"), link || (stryMutAct_9fa48("24797") ? ["Stryker was here"] : (stryCov_9fa48("24797"), [])))).map(tag => {
      if (stryMutAct_9fa48("24798")) {
        {}
      } else {
        stryCov_9fa48("24798");
        if (stryMutAct_9fa48("24801") ? false : stryMutAct_9fa48("24800") ? true : stryMutAct_9fa48("24799") ? tag.noEscape : (stryCov_9fa48("24799", "24800", "24801"), !tag.noEscape)) {
          if (stryMutAct_9fa48("24802")) {
            {}
          } else {
            stryCov_9fa48("24802");
            const attributes = Object.keys(tag);
            attributes.forEach(attr => {
              if (stryMutAct_9fa48("24803")) {
                {}
              } else {
                stryCov_9fa48("24803");
                tag[attr] = utils.escapeHTML(String(tag[attr]));
              }
            });
          }
        }
        return tag;
      }
    });
    return stryMutAct_9fa48("24804") ? {} : (stryCov_9fa48("24804"), {
      meta,
      link
    });
  }
};
function addIfNotExists(meta, keyName, tagName, value) {
  if (stryMutAct_9fa48("24805")) {
    {}
  } else {
    stryCov_9fa48("24805");
    let exists = stryMutAct_9fa48("24806") ? true : (stryCov_9fa48("24806"), false);
    meta.forEach(tag => {
      if (stryMutAct_9fa48("24807")) {
        {}
      } else {
        stryCov_9fa48("24807");
        if (stryMutAct_9fa48("24810") ? tag[keyName] !== tagName : stryMutAct_9fa48("24809") ? false : stryMutAct_9fa48("24808") ? true : (stryCov_9fa48("24808", "24809", "24810"), tag[keyName] === tagName)) {
          if (stryMutAct_9fa48("24811")) {
            {}
          } else {
            stryCov_9fa48("24811");
            exists = stryMutAct_9fa48("24812") ? false : (stryCov_9fa48("24812"), true);
          }
        }
      }
    });
    if (stryMutAct_9fa48("24815") ? !exists || value : stryMutAct_9fa48("24814") ? false : stryMutAct_9fa48("24813") ? true : (stryCov_9fa48("24813", "24814", "24815"), (stryMutAct_9fa48("24816") ? exists : (stryCov_9fa48("24816"), !exists)) && value)) {
      if (stryMutAct_9fa48("24817")) {
        {}
      } else {
        stryCov_9fa48("24817");
        const data = stryMutAct_9fa48("24818") ? {} : (stryCov_9fa48("24818"), {
          content: utils.escapeHTML(String(value))
        });
        data[keyName] = tagName;
        meta.push(data);
      }
    }
  }
}
function stripRelativePath(url) {
  if (stryMutAct_9fa48("24819")) {
    {}
  } else {
    stryCov_9fa48("24819");
    if (stryMutAct_9fa48("24822") ? url.endsWith(relative_path) : stryMutAct_9fa48("24821") ? false : stryMutAct_9fa48("24820") ? true : (stryCov_9fa48("24820", "24821", "24822"), url.startsWith(relative_path))) {
      if (stryMutAct_9fa48("24823")) {
        {}
      } else {
        stryCov_9fa48("24823");
        return stryMutAct_9fa48("24824") ? url : (stryCov_9fa48("24824"), url.slice(relative_path.length));
      }
    }
    return url;
  }
}
async function addSiteOGImage(meta) {
  if (stryMutAct_9fa48("24825")) {
    {}
  } else {
    stryCov_9fa48("24825");
    const key = Meta.config[stryMutAct_9fa48("24826") ? "" : (stryCov_9fa48("24826"), 'og:image')] ? stryMutAct_9fa48("24827") ? "" : (stryCov_9fa48("24827"), 'og:image') : stryMutAct_9fa48("24828") ? "" : (stryCov_9fa48("24828"), 'brand:logo');
    let ogImage = stripRelativePath(stryMutAct_9fa48("24831") ? Meta.config[key] && '' : stryMutAct_9fa48("24830") ? false : stryMutAct_9fa48("24829") ? true : (stryCov_9fa48("24829", "24830", "24831"), Meta.config[key] || (stryMutAct_9fa48("24832") ? "Stryker was here!" : (stryCov_9fa48("24832"), ''))));
    if (stryMutAct_9fa48("24835") ? ogImage || !ogImage.startsWith('http') : stryMutAct_9fa48("24834") ? false : stryMutAct_9fa48("24833") ? true : (stryCov_9fa48("24833", "24834", "24835"), ogImage && (stryMutAct_9fa48("24836") ? ogImage.startsWith('http') : (stryCov_9fa48("24836"), !(stryMutAct_9fa48("24837") ? ogImage.endsWith('http') : (stryCov_9fa48("24837"), ogImage.startsWith(stryMutAct_9fa48("24838") ? "" : (stryCov_9fa48("24838"), 'http')))))))) {
      if (stryMutAct_9fa48("24839")) {
        {}
      } else {
        stryCov_9fa48("24839");
        ogImage = stryMutAct_9fa48("24840") ? url - ogImage : (stryCov_9fa48("24840"), url + ogImage);
      }
    }
    const {
      images
    } = await plugins.hooks.fire(stryMutAct_9fa48("24841") ? "" : (stryCov_9fa48("24841"), 'filter:meta.addSiteOGImage'), stryMutAct_9fa48("24842") ? {} : (stryCov_9fa48("24842"), {
      images: stryMutAct_9fa48("24843") ? [] : (stryCov_9fa48("24843"), [stryMutAct_9fa48("24844") ? {} : (stryCov_9fa48("24844"), {
        url: stryMutAct_9fa48("24847") ? ogImage && `${url}/assets/images/logo@3x.png` : stryMutAct_9fa48("24846") ? false : stryMutAct_9fa48("24845") ? true : (stryCov_9fa48("24845", "24846", "24847"), ogImage || (stryMutAct_9fa48("24848") ? `` : (stryCov_9fa48("24848"), `${url}/assets/images/logo@3x.png`))),
        width: ogImage ? Meta.config[stryMutAct_9fa48("24849") ? `` : (stryCov_9fa48("24849"), `${key}:width`)] : 963,
        height: ogImage ? Meta.config[stryMutAct_9fa48("24850") ? `` : (stryCov_9fa48("24850"), `${key}:height`)] : 225
      })])
    }));
    const properties = stryMutAct_9fa48("24851") ? [] : (stryCov_9fa48("24851"), [stryMutAct_9fa48("24852") ? "" : (stryCov_9fa48("24852"), 'url'), stryMutAct_9fa48("24853") ? "" : (stryCov_9fa48("24853"), 'secure_url'), stryMutAct_9fa48("24854") ? "" : (stryCov_9fa48("24854"), 'type'), stryMutAct_9fa48("24855") ? "" : (stryCov_9fa48("24855"), 'width'), stryMutAct_9fa48("24856") ? "" : (stryCov_9fa48("24856"), 'height'), stryMutAct_9fa48("24857") ? "" : (stryCov_9fa48("24857"), 'alt')]);
    images.forEach(image => {
      if (stryMutAct_9fa48("24858")) {
        {}
      } else {
        stryCov_9fa48("24858");
        for (const property of properties) {
          if (stryMutAct_9fa48("24859")) {
            {}
          } else {
            stryCov_9fa48("24859");
            if (stryMutAct_9fa48("24861") ? false : stryMutAct_9fa48("24860") ? true : (stryCov_9fa48("24860", "24861"), image.hasOwnProperty(property))) {
              if (stryMutAct_9fa48("24862")) {
                {}
              } else {
                stryCov_9fa48("24862");
                switch (property) {
                  case stryMutAct_9fa48("24864") ? "" : (stryCov_9fa48("24864"), 'url'):
                    if (stryMutAct_9fa48("24863")) {} else {
                      stryCov_9fa48("24863");
                      {
                        if (stryMutAct_9fa48("24865")) {
                          {}
                        } else {
                          stryCov_9fa48("24865");
                          meta.push(stryMutAct_9fa48("24866") ? {} : (stryCov_9fa48("24866"), {
                            property: stryMutAct_9fa48("24867") ? "" : (stryCov_9fa48("24867"), 'og:image'),
                            content: image.url,
                            noEscape: stryMutAct_9fa48("24868") ? false : (stryCov_9fa48("24868"), true)
                          }), stryMutAct_9fa48("24869") ? {} : (stryCov_9fa48("24869"), {
                            property: stryMutAct_9fa48("24870") ? "" : (stryCov_9fa48("24870"), 'og:image:url'),
                            content: image.url,
                            noEscape: stryMutAct_9fa48("24871") ? false : (stryCov_9fa48("24871"), true)
                          }));
                          break;
                        }
                      }
                    }
                  case stryMutAct_9fa48("24873") ? "" : (stryCov_9fa48("24873"), 'secure_url'):
                    if (stryMutAct_9fa48("24872")) {} else {
                      stryCov_9fa48("24872");
                      {
                        if (stryMutAct_9fa48("24874")) {
                          {}
                        } else {
                          stryCov_9fa48("24874");
                          meta.push(stryMutAct_9fa48("24875") ? {} : (stryCov_9fa48("24875"), {
                            property: stryMutAct_9fa48("24876") ? `` : (stryCov_9fa48("24876"), `og:${property}`),
                            content: image[property],
                            noEscape: stryMutAct_9fa48("24877") ? false : (stryCov_9fa48("24877"), true)
                          }));
                          break;
                        }
                      }
                    }
                  case stryMutAct_9fa48("24878") ? "" : (stryCov_9fa48("24878"), 'type'):
                  case stryMutAct_9fa48("24879") ? "" : (stryCov_9fa48("24879"), 'alt'):
                  case stryMutAct_9fa48("24880") ? "" : (stryCov_9fa48("24880"), 'width'):
                  case stryMutAct_9fa48("24882") ? "" : (stryCov_9fa48("24882"), 'height'):
                    if (stryMutAct_9fa48("24881")) {} else {
                      stryCov_9fa48("24881");
                      {
                        if (stryMutAct_9fa48("24883")) {
                          {}
                        } else {
                          stryCov_9fa48("24883");
                          meta.push(stryMutAct_9fa48("24884") ? {} : (stryCov_9fa48("24884"), {
                            property: stryMutAct_9fa48("24885") ? `` : (stryCov_9fa48("24885"), `og:image:${property}`),
                            content: String(image[property])
                          }));
                        }
                      }
                    }
                }
              }
            }
          }
        }
      }
    });
  }
}