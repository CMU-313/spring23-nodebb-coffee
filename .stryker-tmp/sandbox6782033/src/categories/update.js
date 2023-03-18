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
const db = require('../database');
const meta = require('../meta');
const utils = require('../utils');
const slugify = require('../slugify');
const translator = require('../translator');
const plugins = require('../plugins');
const cache = require('../cache');
module.exports = function (Categories) {
  if (stryMutAct_9fa48("3464")) {
    {}
  } else {
    stryCov_9fa48("3464");
    Categories.update = async function (modified) {
      if (stryMutAct_9fa48("3465")) {
        {}
      } else {
        stryCov_9fa48("3465");
        const cids = Object.keys(modified);
        await Promise.all(cids.map(stryMutAct_9fa48("3466") ? () => undefined : (stryCov_9fa48("3466"), cid => updateCategory(cid, modified[cid]))));
        return cids;
      }
    };
    async function updateCategory(cid, modifiedFields) {
      if (stryMutAct_9fa48("3467")) {
        {}
      } else {
        stryCov_9fa48("3467");
        const exists = await Categories.exists(cid);
        if (stryMutAct_9fa48("3470") ? false : stryMutAct_9fa48("3469") ? true : stryMutAct_9fa48("3468") ? exists : (stryCov_9fa48("3468", "3469", "3470"), !exists)) {
          if (stryMutAct_9fa48("3471")) {
            {}
          } else {
            stryCov_9fa48("3471");
            return;
          }
        }
        if (stryMutAct_9fa48("3473") ? false : stryMutAct_9fa48("3472") ? true : (stryCov_9fa48("3472", "3473"), modifiedFields.hasOwnProperty(stryMutAct_9fa48("3474") ? "" : (stryCov_9fa48("3474"), 'name')))) {
          if (stryMutAct_9fa48("3475")) {
            {}
          } else {
            stryCov_9fa48("3475");
            const translated = await translator.translate(modifiedFields.name);
            modifiedFields.slug = stryMutAct_9fa48("3476") ? `` : (stryCov_9fa48("3476"), `${cid}/${slugify(translated)}`);
          }
        }
        const result = await plugins.hooks.fire(stryMutAct_9fa48("3477") ? "" : (stryCov_9fa48("3477"), 'filter:category.update'), stryMutAct_9fa48("3478") ? {} : (stryCov_9fa48("3478"), {
          cid: cid,
          category: modifiedFields
        }));
        const {
          category
        } = result;
        const fields = Object.keys(category);
        // move parent to front, so its updated first
        const parentCidIndex = fields.indexOf(stryMutAct_9fa48("3479") ? "" : (stryCov_9fa48("3479"), 'parentCid'));
        if (stryMutAct_9fa48("3482") ? parentCidIndex !== -1 || fields.length > 1 : stryMutAct_9fa48("3481") ? false : stryMutAct_9fa48("3480") ? true : (stryCov_9fa48("3480", "3481", "3482"), (stryMutAct_9fa48("3484") ? parentCidIndex === -1 : stryMutAct_9fa48("3483") ? true : (stryCov_9fa48("3483", "3484"), parentCidIndex !== (stryMutAct_9fa48("3485") ? +1 : (stryCov_9fa48("3485"), -1)))) && (stryMutAct_9fa48("3488") ? fields.length <= 1 : stryMutAct_9fa48("3487") ? fields.length >= 1 : stryMutAct_9fa48("3486") ? true : (stryCov_9fa48("3486", "3487", "3488"), fields.length > 1)))) {
          if (stryMutAct_9fa48("3489")) {
            {}
          } else {
            stryCov_9fa48("3489");
            fields.splice(0, 0, fields.splice(parentCidIndex, 1)[0]);
          }
        }
        for (const key of fields) {
          if (stryMutAct_9fa48("3490")) {
            {}
          } else {
            stryCov_9fa48("3490");
            // eslint-disable-next-line no-await-in-loop
            await updateCategoryField(cid, key, category[key]);
          }
        }
        plugins.hooks.fire(stryMutAct_9fa48("3491") ? "" : (stryCov_9fa48("3491"), 'action:category.update'), stryMutAct_9fa48("3492") ? {} : (stryCov_9fa48("3492"), {
          cid: cid,
          modified: category
        }));
      }
    }
    async function updateCategoryField(cid, key, value) {
      if (stryMutAct_9fa48("3493")) {
        {}
      } else {
        stryCov_9fa48("3493");
        if (stryMutAct_9fa48("3496") ? key !== 'parentCid' : stryMutAct_9fa48("3495") ? false : stryMutAct_9fa48("3494") ? true : (stryCov_9fa48("3494", "3495", "3496"), key === (stryMutAct_9fa48("3497") ? "" : (stryCov_9fa48("3497"), 'parentCid')))) {
          if (stryMutAct_9fa48("3498")) {
            {}
          } else {
            stryCov_9fa48("3498");
            return await updateParent(cid, value);
          }
        } else if (stryMutAct_9fa48("3501") ? key !== 'tagWhitelist' : stryMutAct_9fa48("3500") ? false : stryMutAct_9fa48("3499") ? true : (stryCov_9fa48("3499", "3500", "3501"), key === (stryMutAct_9fa48("3502") ? "" : (stryCov_9fa48("3502"), 'tagWhitelist')))) {
          if (stryMutAct_9fa48("3503")) {
            {}
          } else {
            stryCov_9fa48("3503");
            return await updateTagWhitelist(cid, value);
          }
        } else if (stryMutAct_9fa48("3506") ? key !== 'name' : stryMutAct_9fa48("3505") ? false : stryMutAct_9fa48("3504") ? true : (stryCov_9fa48("3504", "3505", "3506"), key === (stryMutAct_9fa48("3507") ? "" : (stryCov_9fa48("3507"), 'name')))) {
          if (stryMutAct_9fa48("3508")) {
            {}
          } else {
            stryCov_9fa48("3508");
            return await updateName(cid, value);
          }
        } else if (stryMutAct_9fa48("3511") ? key !== 'order' : stryMutAct_9fa48("3510") ? false : stryMutAct_9fa48("3509") ? true : (stryCov_9fa48("3509", "3510", "3511"), key === (stryMutAct_9fa48("3512") ? "" : (stryCov_9fa48("3512"), 'order')))) {
          if (stryMutAct_9fa48("3513")) {
            {}
          } else {
            stryCov_9fa48("3513");
            return await updateOrder(cid, value);
          }
        }
        await db.setObjectField(stryMutAct_9fa48("3514") ? `` : (stryCov_9fa48("3514"), `category:${cid}`), key, value);
        if (stryMutAct_9fa48("3517") ? key !== 'description' : stryMutAct_9fa48("3516") ? false : stryMutAct_9fa48("3515") ? true : (stryCov_9fa48("3515", "3516", "3517"), key === (stryMutAct_9fa48("3518") ? "" : (stryCov_9fa48("3518"), 'description')))) {
          if (stryMutAct_9fa48("3519")) {
            {}
          } else {
            stryCov_9fa48("3519");
            await Categories.parseDescription(cid, value);
          }
        }
      }
    }
    async function updateParent(cid, newParent) {
      if (stryMutAct_9fa48("3520")) {
        {}
      } else {
        stryCov_9fa48("3520");
        newParent = stryMutAct_9fa48("3523") ? parseInt(newParent, 10) && 0 : stryMutAct_9fa48("3522") ? false : stryMutAct_9fa48("3521") ? true : (stryCov_9fa48("3521", "3522", "3523"), parseInt(newParent, 10) || 0);
        if (stryMutAct_9fa48("3526") ? parseInt(cid, 10) !== newParent : stryMutAct_9fa48("3525") ? false : stryMutAct_9fa48("3524") ? true : (stryCov_9fa48("3524", "3525", "3526"), parseInt(cid, 10) === newParent)) {
          if (stryMutAct_9fa48("3527")) {
            {}
          } else {
            stryCov_9fa48("3527");
            throw new Error(stryMutAct_9fa48("3528") ? "" : (stryCov_9fa48("3528"), '[[error:cant-set-self-as-parent]]'));
          }
        }
        const childrenCids = await Categories.getChildrenCids(cid);
        if (stryMutAct_9fa48("3530") ? false : stryMutAct_9fa48("3529") ? true : (stryCov_9fa48("3529", "3530"), childrenCids.includes(newParent))) {
          if (stryMutAct_9fa48("3531")) {
            {}
          } else {
            stryCov_9fa48("3531");
            throw new Error(stryMutAct_9fa48("3532") ? "" : (stryCov_9fa48("3532"), '[[error:cant-set-child-as-parent]]'));
          }
        }
        const categoryData = await Categories.getCategoryFields(cid, stryMutAct_9fa48("3533") ? [] : (stryCov_9fa48("3533"), [stryMutAct_9fa48("3534") ? "" : (stryCov_9fa48("3534"), 'parentCid'), stryMutAct_9fa48("3535") ? "" : (stryCov_9fa48("3535"), 'order')]));
        const oldParent = categoryData.parentCid;
        if (stryMutAct_9fa48("3538") ? oldParent !== newParent : stryMutAct_9fa48("3537") ? false : stryMutAct_9fa48("3536") ? true : (stryCov_9fa48("3536", "3537", "3538"), oldParent === newParent)) {
          if (stryMutAct_9fa48("3539")) {
            {}
          } else {
            stryCov_9fa48("3539");
            return;
          }
        }
        await Promise.all(stryMutAct_9fa48("3540") ? [] : (stryCov_9fa48("3540"), [db.sortedSetRemove(stryMutAct_9fa48("3541") ? `` : (stryCov_9fa48("3541"), `cid:${oldParent}:children`), cid), db.sortedSetAdd(stryMutAct_9fa48("3542") ? `` : (stryCov_9fa48("3542"), `cid:${newParent}:children`), categoryData.order, cid), db.setObjectField(stryMutAct_9fa48("3543") ? `` : (stryCov_9fa48("3543"), `category:${cid}`), stryMutAct_9fa48("3544") ? "" : (stryCov_9fa48("3544"), 'parentCid'), newParent)]));
        cache.del(stryMutAct_9fa48("3545") ? [] : (stryCov_9fa48("3545"), [stryMutAct_9fa48("3546") ? `` : (stryCov_9fa48("3546"), `cid:${oldParent}:children`), stryMutAct_9fa48("3547") ? `` : (stryCov_9fa48("3547"), `cid:${newParent}:children`), stryMutAct_9fa48("3548") ? `` : (stryCov_9fa48("3548"), `cid:${oldParent}:children:all`), stryMutAct_9fa48("3549") ? `` : (stryCov_9fa48("3549"), `cid:${newParent}:children:all`)]));
      }
    }
    async function updateTagWhitelist(cid, tags) {
      if (stryMutAct_9fa48("3550")) {
        {}
      } else {
        stryCov_9fa48("3550");
        tags = stryMutAct_9fa48("3551") ? tags.split(',').map(tag => utils.cleanUpTag(tag, meta.config.maximumTagLength)) : (stryCov_9fa48("3551"), tags.split(stryMutAct_9fa48("3552") ? "" : (stryCov_9fa48("3552"), ',')).map(stryMutAct_9fa48("3553") ? () => undefined : (stryCov_9fa48("3553"), tag => utils.cleanUpTag(tag, meta.config.maximumTagLength))).filter(Boolean));
        await db.delete(stryMutAct_9fa48("3554") ? `` : (stryCov_9fa48("3554"), `cid:${cid}:tag:whitelist`));
        const scores = tags.map(stryMutAct_9fa48("3555") ? () => undefined : (stryCov_9fa48("3555"), (tag, index) => index));
        await db.sortedSetAdd(stryMutAct_9fa48("3556") ? `` : (stryCov_9fa48("3556"), `cid:${cid}:tag:whitelist`), scores, tags);
        cache.del(stryMutAct_9fa48("3557") ? `` : (stryCov_9fa48("3557"), `cid:${cid}:tag:whitelist`));
      }
    }
    async function updateOrder(cid, order) {
      if (stryMutAct_9fa48("3558")) {
        {}
      } else {
        stryCov_9fa48("3558");
        const parentCid = await Categories.getCategoryField(cid, stryMutAct_9fa48("3559") ? "" : (stryCov_9fa48("3559"), 'parentCid'));
        await db.sortedSetsAdd(stryMutAct_9fa48("3560") ? "" : (stryCov_9fa48("3560"), 'categories:cid'), order, cid);
        const childrenCids = await db.getSortedSetRange(stryMutAct_9fa48("3561") ? `` : (stryCov_9fa48("3561"), `cid:${parentCid}:children`), 0, stryMutAct_9fa48("3562") ? +1 : (stryCov_9fa48("3562"), -1));
        const currentIndex = childrenCids.indexOf(String(cid));
        if (stryMutAct_9fa48("3565") ? currentIndex !== -1 : stryMutAct_9fa48("3564") ? false : stryMutAct_9fa48("3563") ? true : (stryCov_9fa48("3563", "3564", "3565"), currentIndex === (stryMutAct_9fa48("3566") ? +1 : (stryCov_9fa48("3566"), -1)))) {
          if (stryMutAct_9fa48("3567")) {
            {}
          } else {
            stryCov_9fa48("3567");
            throw new Error(stryMutAct_9fa48("3568") ? "" : (stryCov_9fa48("3568"), '[[error:no-category]]'));
          }
        }
        // moves cid to index order - 1 in the array
        if (stryMutAct_9fa48("3572") ? childrenCids.length <= 1 : stryMutAct_9fa48("3571") ? childrenCids.length >= 1 : stryMutAct_9fa48("3570") ? false : stryMutAct_9fa48("3569") ? true : (stryCov_9fa48("3569", "3570", "3571", "3572"), childrenCids.length > 1)) {
          if (stryMutAct_9fa48("3573")) {
            {}
          } else {
            stryCov_9fa48("3573");
            childrenCids.splice(Math.max(0, stryMutAct_9fa48("3574") ? order + 1 : (stryCov_9fa48("3574"), order - 1)), 0, childrenCids.splice(currentIndex, 1)[0]);
          }
        }

        // recalculate orders from array indices
        await db.sortedSetAdd(stryMutAct_9fa48("3575") ? `` : (stryCov_9fa48("3575"), `cid:${parentCid}:children`), childrenCids.map(stryMutAct_9fa48("3576") ? () => undefined : (stryCov_9fa48("3576"), (cid, index) => stryMutAct_9fa48("3577") ? index - 1 : (stryCov_9fa48("3577"), index + 1))), childrenCids);
        await db.setObjectBulk(childrenCids.map(stryMutAct_9fa48("3578") ? () => undefined : (stryCov_9fa48("3578"), (cid, index) => stryMutAct_9fa48("3579") ? [] : (stryCov_9fa48("3579"), [stryMutAct_9fa48("3580") ? `` : (stryCov_9fa48("3580"), `category:${cid}`), stryMutAct_9fa48("3581") ? {} : (stryCov_9fa48("3581"), {
          order: stryMutAct_9fa48("3582") ? index - 1 : (stryCov_9fa48("3582"), index + 1)
        })]))));
        cache.del(stryMutAct_9fa48("3583") ? [] : (stryCov_9fa48("3583"), [stryMutAct_9fa48("3584") ? "" : (stryCov_9fa48("3584"), 'categories:cid'), stryMutAct_9fa48("3585") ? `` : (stryCov_9fa48("3585"), `cid:${parentCid}:children`), stryMutAct_9fa48("3586") ? `` : (stryCov_9fa48("3586"), `cid:${parentCid}:children:all`)]));
      }
    }
    Categories.parseDescription = async function (cid, description) {
      if (stryMutAct_9fa48("3587")) {
        {}
      } else {
        stryCov_9fa48("3587");
        const parsedDescription = await plugins.hooks.fire(stryMutAct_9fa48("3588") ? "" : (stryCov_9fa48("3588"), 'filter:parse.raw'), description);
        await Categories.setCategoryField(cid, stryMutAct_9fa48("3589") ? "" : (stryCov_9fa48("3589"), 'descriptionParsed'), parsedDescription);
      }
    };
    async function updateName(cid, newName) {
      if (stryMutAct_9fa48("3590")) {
        {}
      } else {
        stryCov_9fa48("3590");
        const oldName = await Categories.getCategoryField(cid, stryMutAct_9fa48("3591") ? "" : (stryCov_9fa48("3591"), 'name'));
        await db.sortedSetRemove(stryMutAct_9fa48("3592") ? "" : (stryCov_9fa48("3592"), 'categories:name'), stryMutAct_9fa48("3593") ? `` : (stryCov_9fa48("3593"), `${stryMutAct_9fa48("3595") ? oldName.toLowerCase() : stryMutAct_9fa48("3594") ? oldName.slice(0, 200).toUpperCase() : (stryCov_9fa48("3594", "3595"), oldName.slice(0, 200).toLowerCase())}:${cid}`));
        await db.sortedSetAdd(stryMutAct_9fa48("3596") ? "" : (stryCov_9fa48("3596"), 'categories:name'), 0, stryMutAct_9fa48("3597") ? `` : (stryCov_9fa48("3597"), `${stryMutAct_9fa48("3599") ? newName.toLowerCase() : stryMutAct_9fa48("3598") ? newName.slice(0, 200).toUpperCase() : (stryCov_9fa48("3598", "3599"), newName.slice(0, 200).toLowerCase())}:${cid}`));
        await db.setObjectField(stryMutAct_9fa48("3600") ? `` : (stryCov_9fa48("3600"), `category:${cid}`), stryMutAct_9fa48("3601") ? "" : (stryCov_9fa48("3601"), 'name'), newName);
      }
    }
  }
};