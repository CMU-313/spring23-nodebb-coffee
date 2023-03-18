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
const winston = require('winston');
const categories = require('../categories');
const plugins = require('../plugins');
const slugify = require('../slugify');
const db = require('../database');
const user = require('../user');
const batch = require('../batch');
const meta = require('../meta');
const cache = require('../cache');
module.exports = function (Groups) {
  if (stryMutAct_9fa48("20909")) {
    {}
  } else {
    stryCov_9fa48("20909");
    Groups.update = async function (groupName, values) {
      if (stryMutAct_9fa48("20910")) {
        {}
      } else {
        stryCov_9fa48("20910");
        const exists = await db.exists(stryMutAct_9fa48("20911") ? `` : (stryCov_9fa48("20911"), `group:${groupName}`));
        if (stryMutAct_9fa48("20914") ? false : stryMutAct_9fa48("20913") ? true : stryMutAct_9fa48("20912") ? exists : (stryCov_9fa48("20912", "20913", "20914"), !exists)) {
          if (stryMutAct_9fa48("20915")) {
            {}
          } else {
            stryCov_9fa48("20915");
            throw new Error(stryMutAct_9fa48("20916") ? "" : (stryCov_9fa48("20916"), '[[error:no-group]]'));
          }
        }
        ({
          values
        } = await plugins.hooks.fire(stryMutAct_9fa48("20917") ? "" : (stryCov_9fa48("20917"), 'filter:group.update'), stryMutAct_9fa48("20918") ? {} : (stryCov_9fa48("20918"), {
          groupName: groupName,
          values: values
        })));

        // Cast some values as bool (if not boolean already)
        // 'true' and '1' = true, everything else false
        (stryMutAct_9fa48("20919") ? [] : (stryCov_9fa48("20919"), [stryMutAct_9fa48("20920") ? "" : (stryCov_9fa48("20920"), 'userTitleEnabled'), stryMutAct_9fa48("20921") ? "" : (stryCov_9fa48("20921"), 'private'), stryMutAct_9fa48("20922") ? "" : (stryCov_9fa48("20922"), 'hidden'), stryMutAct_9fa48("20923") ? "" : (stryCov_9fa48("20923"), 'disableJoinRequests'), stryMutAct_9fa48("20924") ? "" : (stryCov_9fa48("20924"), 'disableLeave')])).forEach(prop => {
          if (stryMutAct_9fa48("20925")) {
            {}
          } else {
            stryCov_9fa48("20925");
            if (stryMutAct_9fa48("20928") ? values.hasOwnProperty(prop) || typeof values[prop] !== 'boolean' : stryMutAct_9fa48("20927") ? false : stryMutAct_9fa48("20926") ? true : (stryCov_9fa48("20926", "20927", "20928"), values.hasOwnProperty(prop) && (stryMutAct_9fa48("20930") ? typeof values[prop] === 'boolean' : stryMutAct_9fa48("20929") ? true : (stryCov_9fa48("20929", "20930"), typeof values[prop] !== (stryMutAct_9fa48("20931") ? "" : (stryCov_9fa48("20931"), 'boolean')))))) {
              if (stryMutAct_9fa48("20932")) {
                {}
              } else {
                stryCov_9fa48("20932");
                values[prop] = stryMutAct_9fa48("20935") ? values[prop] === 'true' && parseInt(values[prop], 10) === 1 : stryMutAct_9fa48("20934") ? false : stryMutAct_9fa48("20933") ? true : (stryCov_9fa48("20933", "20934", "20935"), (stryMutAct_9fa48("20937") ? values[prop] !== 'true' : stryMutAct_9fa48("20936") ? false : (stryCov_9fa48("20936", "20937"), values[prop] === (stryMutAct_9fa48("20938") ? "" : (stryCov_9fa48("20938"), 'true')))) || (stryMutAct_9fa48("20940") ? parseInt(values[prop], 10) !== 1 : stryMutAct_9fa48("20939") ? false : (stryCov_9fa48("20939", "20940"), parseInt(values[prop], 10) === 1)));
              }
            }
          }
        });
        const payload = stryMutAct_9fa48("20941") ? {} : (stryCov_9fa48("20941"), {
          description: stryMutAct_9fa48("20944") ? values.description && '' : stryMutAct_9fa48("20943") ? false : stryMutAct_9fa48("20942") ? true : (stryCov_9fa48("20942", "20943", "20944"), values.description || (stryMutAct_9fa48("20945") ? "Stryker was here!" : (stryCov_9fa48("20945"), ''))),
          icon: stryMutAct_9fa48("20948") ? values.icon && '' : stryMutAct_9fa48("20947") ? false : stryMutAct_9fa48("20946") ? true : (stryCov_9fa48("20946", "20947", "20948"), values.icon || (stryMutAct_9fa48("20949") ? "Stryker was here!" : (stryCov_9fa48("20949"), ''))),
          labelColor: stryMutAct_9fa48("20952") ? values.labelColor && '#000000' : stryMutAct_9fa48("20951") ? false : stryMutAct_9fa48("20950") ? true : (stryCov_9fa48("20950", "20951", "20952"), values.labelColor || (stryMutAct_9fa48("20953") ? "" : (stryCov_9fa48("20953"), '#000000'))),
          textColor: stryMutAct_9fa48("20956") ? values.textColor && '#ffffff' : stryMutAct_9fa48("20955") ? false : stryMutAct_9fa48("20954") ? true : (stryCov_9fa48("20954", "20955", "20956"), values.textColor || (stryMutAct_9fa48("20957") ? "" : (stryCov_9fa48("20957"), '#ffffff')))
        });
        if (stryMutAct_9fa48("20959") ? false : stryMutAct_9fa48("20958") ? true : (stryCov_9fa48("20958", "20959"), values.hasOwnProperty(stryMutAct_9fa48("20960") ? "" : (stryCov_9fa48("20960"), 'userTitle')))) {
          if (stryMutAct_9fa48("20961")) {
            {}
          } else {
            stryCov_9fa48("20961");
            payload.userTitle = stryMutAct_9fa48("20964") ? values.userTitle && '' : stryMutAct_9fa48("20963") ? false : stryMutAct_9fa48("20962") ? true : (stryCov_9fa48("20962", "20963", "20964"), values.userTitle || (stryMutAct_9fa48("20965") ? "Stryker was here!" : (stryCov_9fa48("20965"), '')));
          }
        }
        if (stryMutAct_9fa48("20967") ? false : stryMutAct_9fa48("20966") ? true : (stryCov_9fa48("20966", "20967"), values.hasOwnProperty(stryMutAct_9fa48("20968") ? "" : (stryCov_9fa48("20968"), 'userTitleEnabled')))) {
          if (stryMutAct_9fa48("20969")) {
            {}
          } else {
            stryCov_9fa48("20969");
            payload.userTitleEnabled = values.userTitleEnabled ? stryMutAct_9fa48("20970") ? "" : (stryCov_9fa48("20970"), '1') : stryMutAct_9fa48("20971") ? "" : (stryCov_9fa48("20971"), '0');
          }
        }
        if (stryMutAct_9fa48("20973") ? false : stryMutAct_9fa48("20972") ? true : (stryCov_9fa48("20972", "20973"), values.hasOwnProperty(stryMutAct_9fa48("20974") ? "" : (stryCov_9fa48("20974"), 'hidden')))) {
          if (stryMutAct_9fa48("20975")) {
            {}
          } else {
            stryCov_9fa48("20975");
            payload.hidden = values.hidden ? stryMutAct_9fa48("20976") ? "" : (stryCov_9fa48("20976"), '1') : stryMutAct_9fa48("20977") ? "" : (stryCov_9fa48("20977"), '0');
          }
        }
        if (stryMutAct_9fa48("20979") ? false : stryMutAct_9fa48("20978") ? true : (stryCov_9fa48("20978", "20979"), values.hasOwnProperty(stryMutAct_9fa48("20980") ? "" : (stryCov_9fa48("20980"), 'private')))) {
          if (stryMutAct_9fa48("20981")) {
            {}
          } else {
            stryCov_9fa48("20981");
            payload.private = values.private ? stryMutAct_9fa48("20982") ? "" : (stryCov_9fa48("20982"), '1') : stryMutAct_9fa48("20983") ? "" : (stryCov_9fa48("20983"), '0');
          }
        }
        if (stryMutAct_9fa48("20985") ? false : stryMutAct_9fa48("20984") ? true : (stryCov_9fa48("20984", "20985"), values.hasOwnProperty(stryMutAct_9fa48("20986") ? "" : (stryCov_9fa48("20986"), 'disableJoinRequests')))) {
          if (stryMutAct_9fa48("20987")) {
            {}
          } else {
            stryCov_9fa48("20987");
            payload.disableJoinRequests = values.disableJoinRequests ? stryMutAct_9fa48("20988") ? "" : (stryCov_9fa48("20988"), '1') : stryMutAct_9fa48("20989") ? "" : (stryCov_9fa48("20989"), '0');
          }
        }
        if (stryMutAct_9fa48("20991") ? false : stryMutAct_9fa48("20990") ? true : (stryCov_9fa48("20990", "20991"), values.hasOwnProperty(stryMutAct_9fa48("20992") ? "" : (stryCov_9fa48("20992"), 'disableLeave')))) {
          if (stryMutAct_9fa48("20993")) {
            {}
          } else {
            stryCov_9fa48("20993");
            payload.disableLeave = values.disableLeave ? stryMutAct_9fa48("20994") ? "" : (stryCov_9fa48("20994"), '1') : stryMutAct_9fa48("20995") ? "" : (stryCov_9fa48("20995"), '0');
          }
        }
        if (stryMutAct_9fa48("20997") ? false : stryMutAct_9fa48("20996") ? true : (stryCov_9fa48("20996", "20997"), values.hasOwnProperty(stryMutAct_9fa48("20998") ? "" : (stryCov_9fa48("20998"), 'name')))) {
          if (stryMutAct_9fa48("20999")) {
            {}
          } else {
            stryCov_9fa48("20999");
            await checkNameChange(groupName, values.name);
          }
        }
        if (stryMutAct_9fa48("21001") ? false : stryMutAct_9fa48("21000") ? true : (stryCov_9fa48("21000", "21001"), values.hasOwnProperty(stryMutAct_9fa48("21002") ? "" : (stryCov_9fa48("21002"), 'private')))) {
          if (stryMutAct_9fa48("21003")) {
            {}
          } else {
            stryCov_9fa48("21003");
            await updatePrivacy(groupName, values.private);
          }
        }
        if (stryMutAct_9fa48("21005") ? false : stryMutAct_9fa48("21004") ? true : (stryCov_9fa48("21004", "21005"), values.hasOwnProperty(stryMutAct_9fa48("21006") ? "" : (stryCov_9fa48("21006"), 'hidden')))) {
          if (stryMutAct_9fa48("21007")) {
            {}
          } else {
            stryCov_9fa48("21007");
            await updateVisibility(groupName, values.hidden);
          }
        }
        if (stryMutAct_9fa48("21009") ? false : stryMutAct_9fa48("21008") ? true : (stryCov_9fa48("21008", "21009"), values.hasOwnProperty(stryMutAct_9fa48("21010") ? "" : (stryCov_9fa48("21010"), 'memberPostCids')))) {
          if (stryMutAct_9fa48("21011")) {
            {}
          } else {
            stryCov_9fa48("21011");
            const validCids = await categories.getCidsByPrivilege(stryMutAct_9fa48("21012") ? "" : (stryCov_9fa48("21012"), 'categories:cid'), groupName, stryMutAct_9fa48("21013") ? "" : (stryCov_9fa48("21013"), 'topics:read'));
            const cidsArray = stryMutAct_9fa48("21014") ? values.memberPostCids.split(',').map(cid => parseInt(cid.trim(), 10)) : (stryCov_9fa48("21014"), values.memberPostCids.split(stryMutAct_9fa48("21015") ? "" : (stryCov_9fa48("21015"), ',')).map(stryMutAct_9fa48("21016") ? () => undefined : (stryCov_9fa48("21016"), cid => parseInt(stryMutAct_9fa48("21017") ? cid : (stryCov_9fa48("21017"), cid.trim()), 10))).filter(Boolean));
            payload.memberPostCids = stryMutAct_9fa48("21020") ? cidsArray.filter(cid => validCids.includes(cid)).join(',') && '' : stryMutAct_9fa48("21019") ? false : stryMutAct_9fa48("21018") ? true : (stryCov_9fa48("21018", "21019", "21020"), (stryMutAct_9fa48("21021") ? cidsArray.join(',') : (stryCov_9fa48("21021"), cidsArray.filter(stryMutAct_9fa48("21022") ? () => undefined : (stryCov_9fa48("21022"), cid => validCids.includes(cid))).join(stryMutAct_9fa48("21023") ? "" : (stryCov_9fa48("21023"), ',')))) || (stryMutAct_9fa48("21024") ? "Stryker was here!" : (stryCov_9fa48("21024"), '')));
          }
        }
        await db.setObject(stryMutAct_9fa48("21025") ? `` : (stryCov_9fa48("21025"), `group:${groupName}`), payload);
        await Groups.renameGroup(groupName, values.name);
        plugins.hooks.fire(stryMutAct_9fa48("21026") ? "" : (stryCov_9fa48("21026"), 'action:group.update'), stryMutAct_9fa48("21027") ? {} : (stryCov_9fa48("21027"), {
          name: groupName,
          values: values
        }));
      }
    };
    async function updateVisibility(groupName, hidden) {
      if (stryMutAct_9fa48("21028")) {
        {}
      } else {
        stryCov_9fa48("21028");
        if (stryMutAct_9fa48("21030") ? false : stryMutAct_9fa48("21029") ? true : (stryCov_9fa48("21029", "21030"), hidden)) {
          if (stryMutAct_9fa48("21031")) {
            {}
          } else {
            stryCov_9fa48("21031");
            await db.sortedSetRemoveBulk(stryMutAct_9fa48("21032") ? [] : (stryCov_9fa48("21032"), [stryMutAct_9fa48("21033") ? [] : (stryCov_9fa48("21033"), [stryMutAct_9fa48("21034") ? "" : (stryCov_9fa48("21034"), 'groups:visible:createtime'), groupName]), stryMutAct_9fa48("21035") ? [] : (stryCov_9fa48("21035"), [stryMutAct_9fa48("21036") ? "" : (stryCov_9fa48("21036"), 'groups:visible:memberCount'), groupName]), stryMutAct_9fa48("21037") ? [] : (stryCov_9fa48("21037"), [stryMutAct_9fa48("21038") ? "" : (stryCov_9fa48("21038"), 'groups:visible:name'), stryMutAct_9fa48("21039") ? `` : (stryCov_9fa48("21039"), `${stryMutAct_9fa48("21040") ? groupName.toUpperCase() : (stryCov_9fa48("21040"), groupName.toLowerCase())}:${groupName}`)])]));
            return;
          }
        }
        const groupData = await db.getObjectFields(stryMutAct_9fa48("21041") ? `` : (stryCov_9fa48("21041"), `group:${groupName}`), stryMutAct_9fa48("21042") ? [] : (stryCov_9fa48("21042"), [stryMutAct_9fa48("21043") ? "" : (stryCov_9fa48("21043"), 'createtime'), stryMutAct_9fa48("21044") ? "" : (stryCov_9fa48("21044"), 'memberCount')]));
        await db.sortedSetAddBulk(stryMutAct_9fa48("21045") ? [] : (stryCov_9fa48("21045"), [stryMutAct_9fa48("21046") ? [] : (stryCov_9fa48("21046"), [stryMutAct_9fa48("21047") ? "" : (stryCov_9fa48("21047"), 'groups:visible:createtime'), groupData.createtime, groupName]), stryMutAct_9fa48("21048") ? [] : (stryCov_9fa48("21048"), [stryMutAct_9fa48("21049") ? "" : (stryCov_9fa48("21049"), 'groups:visible:memberCount'), groupData.memberCount, groupName]), stryMutAct_9fa48("21050") ? [] : (stryCov_9fa48("21050"), [stryMutAct_9fa48("21051") ? "" : (stryCov_9fa48("21051"), 'groups:visible:name'), 0, stryMutAct_9fa48("21052") ? `` : (stryCov_9fa48("21052"), `${stryMutAct_9fa48("21053") ? groupName.toUpperCase() : (stryCov_9fa48("21053"), groupName.toLowerCase())}:${groupName}`)])]));
      }
    }
    Groups.hide = async function (groupName) {
      if (stryMutAct_9fa48("21054")) {
        {}
      } else {
        stryCov_9fa48("21054");
        await showHide(groupName, stryMutAct_9fa48("21055") ? "" : (stryCov_9fa48("21055"), 'hidden'));
      }
    };
    Groups.show = async function (groupName) {
      if (stryMutAct_9fa48("21056")) {
        {}
      } else {
        stryCov_9fa48("21056");
        await showHide(groupName, stryMutAct_9fa48("21057") ? "" : (stryCov_9fa48("21057"), 'show'));
      }
    };
    async function showHide(groupName, hidden) {
      if (stryMutAct_9fa48("21058")) {
        {}
      } else {
        stryCov_9fa48("21058");
        hidden = stryMutAct_9fa48("21061") ? hidden !== 'hidden' : stryMutAct_9fa48("21060") ? false : stryMutAct_9fa48("21059") ? true : (stryCov_9fa48("21059", "21060", "21061"), hidden === (stryMutAct_9fa48("21062") ? "" : (stryCov_9fa48("21062"), 'hidden')));
        await Promise.all(stryMutAct_9fa48("21063") ? [] : (stryCov_9fa48("21063"), [db.setObjectField(stryMutAct_9fa48("21064") ? `` : (stryCov_9fa48("21064"), `group:${groupName}`), stryMutAct_9fa48("21065") ? "" : (stryCov_9fa48("21065"), 'hidden'), hidden ? 1 : 0), updateVisibility(groupName, hidden)]));
      }
    }
    async function updatePrivacy(groupName, isPrivate) {
      if (stryMutAct_9fa48("21066")) {
        {}
      } else {
        stryCov_9fa48("21066");
        const groupData = await Groups.getGroupFields(groupName, stryMutAct_9fa48("21067") ? [] : (stryCov_9fa48("21067"), [stryMutAct_9fa48("21068") ? "" : (stryCov_9fa48("21068"), 'private')]));
        const currentlyPrivate = stryMutAct_9fa48("21071") ? groupData.private !== 1 : stryMutAct_9fa48("21070") ? false : stryMutAct_9fa48("21069") ? true : (stryCov_9fa48("21069", "21070", "21071"), groupData.private === 1);
        if (stryMutAct_9fa48("21074") ? !currentlyPrivate && currentlyPrivate === isPrivate : stryMutAct_9fa48("21073") ? false : stryMutAct_9fa48("21072") ? true : (stryCov_9fa48("21072", "21073", "21074"), (stryMutAct_9fa48("21075") ? currentlyPrivate : (stryCov_9fa48("21075"), !currentlyPrivate)) || (stryMutAct_9fa48("21077") ? currentlyPrivate !== isPrivate : stryMutAct_9fa48("21076") ? false : (stryCov_9fa48("21076", "21077"), currentlyPrivate === isPrivate)))) {
          if (stryMutAct_9fa48("21078")) {
            {}
          } else {
            stryCov_9fa48("21078");
            return;
          }
        }
        const pendingUids = await db.getSetMembers(stryMutAct_9fa48("21079") ? `` : (stryCov_9fa48("21079"), `group:${groupName}:pending`));
        if (stryMutAct_9fa48("21082") ? false : stryMutAct_9fa48("21081") ? true : stryMutAct_9fa48("21080") ? pendingUids.length : (stryCov_9fa48("21080", "21081", "21082"), !pendingUids.length)) {
          if (stryMutAct_9fa48("21083")) {
            {}
          } else {
            stryCov_9fa48("21083");
            return;
          }
        }
        winston.verbose(stryMutAct_9fa48("21084") ? `` : (stryCov_9fa48("21084"), `[groups.update] Group is now public, automatically adding ${pendingUids.length} new members, who were pending prior.`));
        for (const uid of pendingUids) {
          if (stryMutAct_9fa48("21085")) {
            {}
          } else {
            stryCov_9fa48("21085");
            /* eslint-disable no-await-in-loop */
            await Groups.join(groupName, uid);
          }
        }
        await db.delete(stryMutAct_9fa48("21086") ? `` : (stryCov_9fa48("21086"), `group:${groupName}:pending`));
      }
    }
    async function checkNameChange(currentName, newName) {
      if (stryMutAct_9fa48("21087")) {
        {}
      } else {
        stryCov_9fa48("21087");
        if (stryMutAct_9fa48("21089") ? false : stryMutAct_9fa48("21088") ? true : (stryCov_9fa48("21088", "21089"), Groups.isPrivilegeGroup(newName))) {
          if (stryMutAct_9fa48("21090")) {
            {}
          } else {
            stryCov_9fa48("21090");
            throw new Error(stryMutAct_9fa48("21091") ? "" : (stryCov_9fa48("21091"), '[[error:invalid-group-name]]'));
          }
        }
        const currentSlug = slugify(currentName);
        const newSlug = slugify(newName);
        if (stryMutAct_9fa48("21094") ? currentName === newName && currentSlug === newSlug : stryMutAct_9fa48("21093") ? false : stryMutAct_9fa48("21092") ? true : (stryCov_9fa48("21092", "21093", "21094"), (stryMutAct_9fa48("21096") ? currentName !== newName : stryMutAct_9fa48("21095") ? false : (stryCov_9fa48("21095", "21096"), currentName === newName)) || (stryMutAct_9fa48("21098") ? currentSlug !== newSlug : stryMutAct_9fa48("21097") ? false : (stryCov_9fa48("21097", "21098"), currentSlug === newSlug)))) {
          if (stryMutAct_9fa48("21099")) {
            {}
          } else {
            stryCov_9fa48("21099");
            return;
          }
        }
        Groups.validateGroupName(newName);
        const [group, exists] = await Promise.all(stryMutAct_9fa48("21100") ? [] : (stryCov_9fa48("21100"), [Groups.getGroupData(currentName), Groups.existsBySlug(newSlug)]));
        if (stryMutAct_9fa48("21102") ? false : stryMutAct_9fa48("21101") ? true : (stryCov_9fa48("21101", "21102"), exists)) {
          if (stryMutAct_9fa48("21103")) {
            {}
          } else {
            stryCov_9fa48("21103");
            throw new Error(stryMutAct_9fa48("21104") ? "" : (stryCov_9fa48("21104"), '[[error:group-already-exists]]'));
          }
        }
        if (stryMutAct_9fa48("21107") ? false : stryMutAct_9fa48("21106") ? true : stryMutAct_9fa48("21105") ? group : (stryCov_9fa48("21105", "21106", "21107"), !group)) {
          if (stryMutAct_9fa48("21108")) {
            {}
          } else {
            stryCov_9fa48("21108");
            throw new Error(stryMutAct_9fa48("21109") ? "" : (stryCov_9fa48("21109"), '[[error:no-group]]'));
          }
        }
        if (stryMutAct_9fa48("21111") ? false : stryMutAct_9fa48("21110") ? true : (stryCov_9fa48("21110", "21111"), group.system)) {
          if (stryMutAct_9fa48("21112")) {
            {}
          } else {
            stryCov_9fa48("21112");
            throw new Error(stryMutAct_9fa48("21113") ? "" : (stryCov_9fa48("21113"), '[[error:not-allowed-to-rename-system-group]]'));
          }
        }
      }
    }
    Groups.renameGroup = async function (oldName, newName) {
      if (stryMutAct_9fa48("21114")) {
        {}
      } else {
        stryCov_9fa48("21114");
        if (stryMutAct_9fa48("21117") ? (oldName === newName || !newName) && String(newName).length === 0 : stryMutAct_9fa48("21116") ? false : stryMutAct_9fa48("21115") ? true : (stryCov_9fa48("21115", "21116", "21117"), (stryMutAct_9fa48("21119") ? oldName === newName && !newName : stryMutAct_9fa48("21118") ? false : (stryCov_9fa48("21118", "21119"), (stryMutAct_9fa48("21121") ? oldName !== newName : stryMutAct_9fa48("21120") ? false : (stryCov_9fa48("21120", "21121"), oldName === newName)) || (stryMutAct_9fa48("21122") ? newName : (stryCov_9fa48("21122"), !newName)))) || (stryMutAct_9fa48("21124") ? String(newName).length !== 0 : stryMutAct_9fa48("21123") ? false : (stryCov_9fa48("21123", "21124"), String(newName).length === 0)))) {
          if (stryMutAct_9fa48("21125")) {
            {}
          } else {
            stryCov_9fa48("21125");
            return;
          }
        }
        const group = await db.getObject(stryMutAct_9fa48("21126") ? `` : (stryCov_9fa48("21126"), `group:${oldName}`));
        if (stryMutAct_9fa48("21129") ? false : stryMutAct_9fa48("21128") ? true : stryMutAct_9fa48("21127") ? group : (stryCov_9fa48("21127", "21128", "21129"), !group)) {
          if (stryMutAct_9fa48("21130")) {
            {}
          } else {
            stryCov_9fa48("21130");
            return;
          }
        }
        const exists = await Groups.exists(newName);
        if (stryMutAct_9fa48("21132") ? false : stryMutAct_9fa48("21131") ? true : (stryCov_9fa48("21131", "21132"), exists)) {
          if (stryMutAct_9fa48("21133")) {
            {}
          } else {
            stryCov_9fa48("21133");
            throw new Error(stryMutAct_9fa48("21134") ? "" : (stryCov_9fa48("21134"), '[[error:group-already-exists]]'));
          }
        }
        await updateMemberGroupTitles(oldName, newName);
        await updateNavigationItems(oldName, newName);
        await updateWidgets(oldName, newName);
        await updateConfig(oldName, newName);
        await db.setObject(stryMutAct_9fa48("21135") ? `` : (stryCov_9fa48("21135"), `group:${oldName}`), stryMutAct_9fa48("21136") ? {} : (stryCov_9fa48("21136"), {
          name: newName,
          slug: slugify(newName)
        }));
        await db.deleteObjectField(stryMutAct_9fa48("21137") ? "" : (stryCov_9fa48("21137"), 'groupslug:groupname'), group.slug);
        await db.setObjectField(stryMutAct_9fa48("21138") ? "" : (stryCov_9fa48("21138"), 'groupslug:groupname'), slugify(newName), newName);
        const allGroups = await db.getSortedSetRange(stryMutAct_9fa48("21139") ? "" : (stryCov_9fa48("21139"), 'groups:createtime'), 0, stryMutAct_9fa48("21140") ? +1 : (stryCov_9fa48("21140"), -1));
        const keys = allGroups.map(stryMutAct_9fa48("21141") ? () => undefined : (stryCov_9fa48("21141"), group => stryMutAct_9fa48("21142") ? `` : (stryCov_9fa48("21142"), `group:${group}:members`)));
        await renameGroupsMember(keys, oldName, newName);
        cache.del(keys);
        await db.rename(stryMutAct_9fa48("21143") ? `` : (stryCov_9fa48("21143"), `group:${oldName}`), stryMutAct_9fa48("21144") ? `` : (stryCov_9fa48("21144"), `group:${newName}`));
        await db.rename(stryMutAct_9fa48("21145") ? `` : (stryCov_9fa48("21145"), `group:${oldName}:members`), stryMutAct_9fa48("21146") ? `` : (stryCov_9fa48("21146"), `group:${newName}:members`));
        await db.rename(stryMutAct_9fa48("21147") ? `` : (stryCov_9fa48("21147"), `group:${oldName}:owners`), stryMutAct_9fa48("21148") ? `` : (stryCov_9fa48("21148"), `group:${newName}:owners`));
        await db.rename(stryMutAct_9fa48("21149") ? `` : (stryCov_9fa48("21149"), `group:${oldName}:pending`), stryMutAct_9fa48("21150") ? `` : (stryCov_9fa48("21150"), `group:${newName}:pending`));
        await db.rename(stryMutAct_9fa48("21151") ? `` : (stryCov_9fa48("21151"), `group:${oldName}:invited`), stryMutAct_9fa48("21152") ? `` : (stryCov_9fa48("21152"), `group:${newName}:invited`));
        await db.rename(stryMutAct_9fa48("21153") ? `` : (stryCov_9fa48("21153"), `group:${oldName}:member:pids`), stryMutAct_9fa48("21154") ? `` : (stryCov_9fa48("21154"), `group:${newName}:member:pids`));
        await renameGroupsMember(stryMutAct_9fa48("21155") ? [] : (stryCov_9fa48("21155"), [stryMutAct_9fa48("21156") ? "" : (stryCov_9fa48("21156"), 'groups:createtime'), stryMutAct_9fa48("21157") ? "" : (stryCov_9fa48("21157"), 'groups:visible:createtime'), stryMutAct_9fa48("21158") ? "" : (stryCov_9fa48("21158"), 'groups:visible:memberCount')]), oldName, newName);
        await renameGroupsMember(stryMutAct_9fa48("21159") ? [] : (stryCov_9fa48("21159"), [stryMutAct_9fa48("21160") ? "" : (stryCov_9fa48("21160"), 'groups:visible:name')]), stryMutAct_9fa48("21161") ? `` : (stryCov_9fa48("21161"), `${stryMutAct_9fa48("21162") ? oldName.toUpperCase() : (stryCov_9fa48("21162"), oldName.toLowerCase())}:${oldName}`), stryMutAct_9fa48("21163") ? `` : (stryCov_9fa48("21163"), `${stryMutAct_9fa48("21164") ? newName.toUpperCase() : (stryCov_9fa48("21164"), newName.toLowerCase())}:${newName}`));
        plugins.hooks.fire(stryMutAct_9fa48("21165") ? "" : (stryCov_9fa48("21165"), 'action:group.rename'), stryMutAct_9fa48("21166") ? {} : (stryCov_9fa48("21166"), {
          old: oldName,
          new: newName
        }));
        Groups.cache.reset();
      }
    };
    async function updateMemberGroupTitles(oldName, newName) {
      if (stryMutAct_9fa48("21167")) {
        {}
      } else {
        stryCov_9fa48("21167");
        await batch.processSortedSet(stryMutAct_9fa48("21168") ? `` : (stryCov_9fa48("21168"), `group:${oldName}:members`), async uids => {
          if (stryMutAct_9fa48("21169")) {
            {}
          } else {
            stryCov_9fa48("21169");
            let usersData = await user.getUsersData(uids);
            usersData = stryMutAct_9fa48("21170") ? usersData : (stryCov_9fa48("21170"), usersData.filter(stryMutAct_9fa48("21171") ? () => undefined : (stryCov_9fa48("21171"), userData => stryMutAct_9fa48("21174") ? userData || userData.groupTitleArray.includes(oldName) : stryMutAct_9fa48("21173") ? false : stryMutAct_9fa48("21172") ? true : (stryCov_9fa48("21172", "21173", "21174"), userData && userData.groupTitleArray.includes(oldName)))));
            usersData.forEach(userData => {
              if (stryMutAct_9fa48("21175")) {
                {}
              } else {
                stryCov_9fa48("21175");
                userData.newTitleArray = userData.groupTitleArray.map(stryMutAct_9fa48("21176") ? () => undefined : (stryCov_9fa48("21176"), oldTitle => (stryMutAct_9fa48("21179") ? oldTitle !== oldName : stryMutAct_9fa48("21178") ? false : stryMutAct_9fa48("21177") ? true : (stryCov_9fa48("21177", "21178", "21179"), oldTitle === oldName)) ? newName : oldTitle));
              }
            });
            await Promise.all(usersData.map(stryMutAct_9fa48("21180") ? () => undefined : (stryCov_9fa48("21180"), u => user.setUserField(u.uid, stryMutAct_9fa48("21181") ? "" : (stryCov_9fa48("21181"), 'groupTitle'), JSON.stringify(u.newTitleArray)))));
          }
        }, {});
      }
    }
    async function renameGroupsMember(keys, oldName, newName) {
      if (stryMutAct_9fa48("21182")) {
        {}
      } else {
        stryCov_9fa48("21182");
        const isMembers = await db.isMemberOfSortedSets(keys, oldName);
        keys = stryMutAct_9fa48("21183") ? keys : (stryCov_9fa48("21183"), keys.filter(stryMutAct_9fa48("21184") ? () => undefined : (stryCov_9fa48("21184"), (key, index) => isMembers[index])));
        if (stryMutAct_9fa48("21187") ? false : stryMutAct_9fa48("21186") ? true : stryMutAct_9fa48("21185") ? keys.length : (stryCov_9fa48("21185", "21186", "21187"), !keys.length)) {
          if (stryMutAct_9fa48("21188")) {
            {}
          } else {
            stryCov_9fa48("21188");
            return;
          }
        }
        const scores = await db.sortedSetsScore(keys, oldName);
        await db.sortedSetsRemove(keys, oldName);
        await db.sortedSetsAdd(keys, scores, newName);
      }
    }
    async function updateNavigationItems(oldName, newName) {
      if (stryMutAct_9fa48("21189")) {
        {}
      } else {
        stryCov_9fa48("21189");
        const navigation = require('../navigation/admin');
        const navItems = await navigation.get();
        navItems.forEach(navItem => {
          if (stryMutAct_9fa48("21190")) {
            {}
          } else {
            stryCov_9fa48("21190");
            if (stryMutAct_9fa48("21193") ? navItem && Array.isArray(navItem.groups) || navItem.groups.includes(oldName) : stryMutAct_9fa48("21192") ? false : stryMutAct_9fa48("21191") ? true : (stryCov_9fa48("21191", "21192", "21193"), (stryMutAct_9fa48("21195") ? navItem || Array.isArray(navItem.groups) : stryMutAct_9fa48("21194") ? true : (stryCov_9fa48("21194", "21195"), navItem && Array.isArray(navItem.groups))) && navItem.groups.includes(oldName))) {
              if (stryMutAct_9fa48("21196")) {
                {}
              } else {
                stryCov_9fa48("21196");
                navItem.groups.splice(navItem.groups.indexOf(oldName), 1, newName);
              }
            }
          }
        });
        navigation.unescapeFields(navItems);
        await navigation.save(navItems);
      }
    }
    async function updateWidgets(oldName, newName) {
      if (stryMutAct_9fa48("21197")) {
        {}
      } else {
        stryCov_9fa48("21197");
        const admin = require('../widgets/admin');
        const widgets = require('../widgets');
        const data = await admin.get();
        data.areas.forEach(area => {
          if (stryMutAct_9fa48("21198")) {
            {}
          } else {
            stryCov_9fa48("21198");
            area.widgets = area.data;
            area.widgets.forEach(widget => {
              if (stryMutAct_9fa48("21199")) {
                {}
              } else {
                stryCov_9fa48("21199");
                if (stryMutAct_9fa48("21202") ? widget && widget.data && Array.isArray(widget.data.groups) || widget.data.groups.includes(oldName) : stryMutAct_9fa48("21201") ? false : stryMutAct_9fa48("21200") ? true : (stryCov_9fa48("21200", "21201", "21202"), (stryMutAct_9fa48("21204") ? widget && widget.data || Array.isArray(widget.data.groups) : stryMutAct_9fa48("21203") ? true : (stryCov_9fa48("21203", "21204"), (stryMutAct_9fa48("21206") ? widget || widget.data : stryMutAct_9fa48("21205") ? true : (stryCov_9fa48("21205", "21206"), widget && widget.data)) && Array.isArray(widget.data.groups))) && widget.data.groups.includes(oldName))) {
                  if (stryMutAct_9fa48("21207")) {
                    {}
                  } else {
                    stryCov_9fa48("21207");
                    widget.data.groups.splice(widget.data.groups.indexOf(oldName), 1, newName);
                  }
                }
              }
            });
          }
        });
        for (const area of data.areas) {
          if (stryMutAct_9fa48("21208")) {
            {}
          } else {
            stryCov_9fa48("21208");
            if (stryMutAct_9fa48("21210") ? false : stryMutAct_9fa48("21209") ? true : (stryCov_9fa48("21209", "21210"), area.data.length)) {
              if (stryMutAct_9fa48("21211")) {
                {}
              } else {
                stryCov_9fa48("21211");
                await widgets.setArea(area);
              }
            }
          }
        }
      }
    }
    async function updateConfig(oldName, newName) {
      if (stryMutAct_9fa48("21212")) {
        {}
      } else {
        stryCov_9fa48("21212");
        if (stryMutAct_9fa48("21214") ? false : stryMutAct_9fa48("21213") ? true : (stryCov_9fa48("21213", "21214"), meta.config.groupsExemptFromPostQueue.includes(oldName))) {
          if (stryMutAct_9fa48("21215")) {
            {}
          } else {
            stryCov_9fa48("21215");
            meta.config.groupsExemptFromPostQueue.splice(meta.config.groupsExemptFromPostQueue.indexOf(oldName), 1, newName);
            await meta.configs.set(stryMutAct_9fa48("21216") ? "" : (stryCov_9fa48("21216"), 'groupsExemptFromPostQueue'), meta.config.groupsExemptFromPostQueue);
          }
        }
        if (stryMutAct_9fa48("21218") ? false : stryMutAct_9fa48("21217") ? true : (stryCov_9fa48("21217", "21218"), meta.config.groupsExemptFromMaintenanceMode.includes(oldName))) {
          if (stryMutAct_9fa48("21219")) {
            {}
          } else {
            stryCov_9fa48("21219");
            meta.config.groupsExemptFromMaintenanceMode.splice(meta.config.groupsExemptFromMaintenanceMode.indexOf(oldName), 1, newName);
            await meta.configs.set(stryMutAct_9fa48("21220") ? "" : (stryCov_9fa48("21220"), 'groupsExemptFromMaintenanceMode'), meta.config.groupsExemptFromMaintenanceMode);
          }
        }
      }
    }
  }
};