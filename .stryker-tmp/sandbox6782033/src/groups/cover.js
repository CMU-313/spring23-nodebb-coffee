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
const path = require('path');
const nconf = require('nconf');
const db = require('../database');
const image = require('../image');
const file = require('../file');
module.exports = function (Groups) {
  if (stryMutAct_9fa48("19656")) {
    {}
  } else {
    stryCov_9fa48("19656");
    const allowedTypes = stryMutAct_9fa48("19657") ? [] : (stryCov_9fa48("19657"), [stryMutAct_9fa48("19658") ? "" : (stryCov_9fa48("19658"), 'image/png'), stryMutAct_9fa48("19659") ? "" : (stryCov_9fa48("19659"), 'image/jpeg'), stryMutAct_9fa48("19660") ? "" : (stryCov_9fa48("19660"), 'image/bmp')]);
    Groups.updateCoverPosition = async function (groupName, position) {
      if (stryMutAct_9fa48("19661")) {
        {}
      } else {
        stryCov_9fa48("19661");
        if (stryMutAct_9fa48("19664") ? false : stryMutAct_9fa48("19663") ? true : stryMutAct_9fa48("19662") ? groupName : (stryCov_9fa48("19662", "19663", "19664"), !groupName)) {
          if (stryMutAct_9fa48("19665")) {
            {}
          } else {
            stryCov_9fa48("19665");
            throw new Error(stryMutAct_9fa48("19666") ? "" : (stryCov_9fa48("19666"), '[[error:invalid-data]]'));
          }
        }
        await Groups.setGroupField(groupName, stryMutAct_9fa48("19667") ? "" : (stryCov_9fa48("19667"), 'cover:position'), position);
      }
    };
    Groups.updateCover = async function (uid, data) {
      if (stryMutAct_9fa48("19668")) {
        {}
      } else {
        stryCov_9fa48("19668");
        let tempPath = data.file ? data.file.path : stryMutAct_9fa48("19669") ? "Stryker was here!" : (stryCov_9fa48("19669"), '');
        try {
          if (stryMutAct_9fa48("19670")) {
            {}
          } else {
            stryCov_9fa48("19670");
            // Position only? That's fine
            if (stryMutAct_9fa48("19673") ? !data.imageData && !data.file || data.position : stryMutAct_9fa48("19672") ? false : stryMutAct_9fa48("19671") ? true : (stryCov_9fa48("19671", "19672", "19673"), (stryMutAct_9fa48("19675") ? !data.imageData || !data.file : stryMutAct_9fa48("19674") ? true : (stryCov_9fa48("19674", "19675"), (stryMutAct_9fa48("19676") ? data.imageData : (stryCov_9fa48("19676"), !data.imageData)) && (stryMutAct_9fa48("19677") ? data.file : (stryCov_9fa48("19677"), !data.file)))) && data.position)) {
              if (stryMutAct_9fa48("19678")) {
                {}
              } else {
                stryCov_9fa48("19678");
                return await Groups.updateCoverPosition(data.groupName, data.position);
              }
            }
            const type = data.file ? data.file.type : image.mimeFromBase64(data.imageData);
            if (stryMutAct_9fa48("19681") ? !type && !allowedTypes.includes(type) : stryMutAct_9fa48("19680") ? false : stryMutAct_9fa48("19679") ? true : (stryCov_9fa48("19679", "19680", "19681"), (stryMutAct_9fa48("19682") ? type : (stryCov_9fa48("19682"), !type)) || (stryMutAct_9fa48("19683") ? allowedTypes.includes(type) : (stryCov_9fa48("19683"), !allowedTypes.includes(type))))) {
              if (stryMutAct_9fa48("19684")) {
                {}
              } else {
                stryCov_9fa48("19684");
                throw new Error(stryMutAct_9fa48("19685") ? "" : (stryCov_9fa48("19685"), '[[error:invalid-image]]'));
              }
            }
            if (stryMutAct_9fa48("19688") ? false : stryMutAct_9fa48("19687") ? true : stryMutAct_9fa48("19686") ? tempPath : (stryCov_9fa48("19686", "19687", "19688"), !tempPath)) {
              if (stryMutAct_9fa48("19689")) {
                {}
              } else {
                stryCov_9fa48("19689");
                tempPath = await image.writeImageDataToTempFile(data.imageData);
              }
            }
            const filename = stryMutAct_9fa48("19690") ? `` : (stryCov_9fa48("19690"), `groupCover-${data.groupName}${path.extname(tempPath)}`);
            const uploadData = await image.uploadImage(filename, stryMutAct_9fa48("19691") ? "" : (stryCov_9fa48("19691"), 'files'), stryMutAct_9fa48("19692") ? {} : (stryCov_9fa48("19692"), {
              path: tempPath,
              uid: uid,
              name: stryMutAct_9fa48("19693") ? "" : (stryCov_9fa48("19693"), 'groupCover')
            }));
            const {
              url
            } = uploadData;
            await Groups.setGroupField(data.groupName, stryMutAct_9fa48("19694") ? "" : (stryCov_9fa48("19694"), 'cover:url'), url);
            await image.resizeImage(stryMutAct_9fa48("19695") ? {} : (stryCov_9fa48("19695"), {
              path: tempPath,
              width: 358
            }));
            const thumbUploadData = await image.uploadImage(stryMutAct_9fa48("19696") ? `` : (stryCov_9fa48("19696"), `groupCoverThumb-${data.groupName}${path.extname(tempPath)}`), stryMutAct_9fa48("19697") ? "" : (stryCov_9fa48("19697"), 'files'), stryMutAct_9fa48("19698") ? {} : (stryCov_9fa48("19698"), {
              path: tempPath,
              uid: uid,
              name: stryMutAct_9fa48("19699") ? "" : (stryCov_9fa48("19699"), 'groupCover')
            }));
            await Groups.setGroupField(data.groupName, stryMutAct_9fa48("19700") ? "" : (stryCov_9fa48("19700"), 'cover:thumb:url'), thumbUploadData.url);
            if (stryMutAct_9fa48("19702") ? false : stryMutAct_9fa48("19701") ? true : (stryCov_9fa48("19701", "19702"), data.position)) {
              if (stryMutAct_9fa48("19703")) {
                {}
              } else {
                stryCov_9fa48("19703");
                await Groups.updateCoverPosition(data.groupName, data.position);
              }
            }
            return stryMutAct_9fa48("19704") ? {} : (stryCov_9fa48("19704"), {
              url: url
            });
          }
        } finally {
          if (stryMutAct_9fa48("19705")) {
            {}
          } else {
            stryCov_9fa48("19705");
            file.delete(tempPath);
          }
        }
      }
    };
    Groups.removeCover = async function (data) {
      if (stryMutAct_9fa48("19706")) {
        {}
      } else {
        stryCov_9fa48("19706");
        const fields = stryMutAct_9fa48("19707") ? [] : (stryCov_9fa48("19707"), [stryMutAct_9fa48("19708") ? "" : (stryCov_9fa48("19708"), 'cover:url'), stryMutAct_9fa48("19709") ? "" : (stryCov_9fa48("19709"), 'cover:thumb:url')]);
        const values = await Groups.getGroupFields(data.groupName, fields);
        await Promise.all(fields.map(field => {
          if (stryMutAct_9fa48("19710")) {
            {}
          } else {
            stryCov_9fa48("19710");
            if (stryMutAct_9fa48("19713") ? !values[field] && !values[field].startsWith(`${nconf.get('relative_path')}/assets/uploads/files/`) : stryMutAct_9fa48("19712") ? false : stryMutAct_9fa48("19711") ? true : (stryCov_9fa48("19711", "19712", "19713"), (stryMutAct_9fa48("19714") ? values[field] : (stryCov_9fa48("19714"), !values[field])) || (stryMutAct_9fa48("19715") ? values[field].startsWith(`${nconf.get('relative_path')}/assets/uploads/files/`) : (stryCov_9fa48("19715"), !(stryMutAct_9fa48("19716") ? values[field].endsWith(`${nconf.get('relative_path')}/assets/uploads/files/`) : (stryCov_9fa48("19716"), values[field].startsWith(stryMutAct_9fa48("19717") ? `` : (stryCov_9fa48("19717"), `${nconf.get(stryMutAct_9fa48("19718") ? "" : (stryCov_9fa48("19718"), 'relative_path'))}/assets/uploads/files/`)))))))) {
              if (stryMutAct_9fa48("19719")) {
                {}
              } else {
                stryCov_9fa48("19719");
                return;
              }
            }
            const filename = values[field].split(stryMutAct_9fa48("19720") ? "" : (stryCov_9fa48("19720"), '/')).pop();
            const filePath = path.join(nconf.get(stryMutAct_9fa48("19721") ? "" : (stryCov_9fa48("19721"), 'upload_path')), stryMutAct_9fa48("19722") ? "" : (stryCov_9fa48("19722"), 'files'), filename);
            return file.delete(filePath);
          }
        }));
        await db.deleteObjectFields(stryMutAct_9fa48("19723") ? `` : (stryCov_9fa48("19723"), `group:${data.groupName}`), stryMutAct_9fa48("19724") ? [] : (stryCov_9fa48("19724"), [stryMutAct_9fa48("19725") ? "" : (stryCov_9fa48("19725"), 'cover:url'), stryMutAct_9fa48("19726") ? "" : (stryCov_9fa48("19726"), 'cover:thumb:url'), stryMutAct_9fa48("19727") ? "" : (stryCov_9fa48("19727"), 'cover:position')]));
      }
    };
  }
};