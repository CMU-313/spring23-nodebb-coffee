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
const async = require('async');
const nconf = require('nconf');
const validator = require('validator');
const db = require('../database');
const meta = require('../meta');
const emailer = require('../emailer');
const groups = require('../groups');
const translator = require('../translator');
const utils = require('../utils');
const plugins = require('../plugins');
module.exports = function (User) {
  if (stryMutAct_9fa48("47554")) {
    {}
  } else {
    stryCov_9fa48("47554");
    User.getInvites = async function (uid) {
      if (stryMutAct_9fa48("47555")) {
        {}
      } else {
        stryCov_9fa48("47555");
        const emails = await db.getSetMembers(stryMutAct_9fa48("47556") ? `` : (stryCov_9fa48("47556"), `invitation:uid:${uid}`));
        return emails.map(stryMutAct_9fa48("47557") ? () => undefined : (stryCov_9fa48("47557"), email => validator.escape(String(email))));
      }
    };
    User.getInvitesNumber = async function (uid) {
      if (stryMutAct_9fa48("47558")) {
        {}
      } else {
        stryCov_9fa48("47558");
        return await db.setCount(stryMutAct_9fa48("47559") ? `` : (stryCov_9fa48("47559"), `invitation:uid:${uid}`));
      }
    };
    User.getInvitingUsers = async function () {
      if (stryMutAct_9fa48("47560")) {
        {}
      } else {
        stryCov_9fa48("47560");
        return await db.getSetMembers(stryMutAct_9fa48("47561") ? "" : (stryCov_9fa48("47561"), 'invitation:uids'));
      }
    };
    User.getAllInvites = async function () {
      if (stryMutAct_9fa48("47562")) {
        {}
      } else {
        stryCov_9fa48("47562");
        const uids = await User.getInvitingUsers();
        const invitations = await async.map(uids, User.getInvites);
        return invitations.map(stryMutAct_9fa48("47563") ? () => undefined : (stryCov_9fa48("47563"), (invites, index) => stryMutAct_9fa48("47564") ? {} : (stryCov_9fa48("47564"), {
          uid: uids[index],
          invitations: invites
        })));
      }
    };
    User.sendInvitationEmail = async function (uid, email, groupsToJoin) {
      if (stryMutAct_9fa48("47565")) {
        {}
      } else {
        stryCov_9fa48("47565");
        if (stryMutAct_9fa48("47568") ? false : stryMutAct_9fa48("47567") ? true : stryMutAct_9fa48("47566") ? uid : (stryCov_9fa48("47566", "47567", "47568"), !uid)) {
          if (stryMutAct_9fa48("47569")) {
            {}
          } else {
            stryCov_9fa48("47569");
            throw new Error(stryMutAct_9fa48("47570") ? "" : (stryCov_9fa48("47570"), '[[error:invalid-uid]]'));
          }
        }
        const email_exists = await User.getUidByEmail(email);
        if (stryMutAct_9fa48("47572") ? false : stryMutAct_9fa48("47571") ? true : (stryCov_9fa48("47571", "47572"), email_exists)) {
          if (stryMutAct_9fa48("47573")) {
            {}
          } else {
            stryCov_9fa48("47573");
            // Silently drop the invitation if the invited email already exists locally
            return stryMutAct_9fa48("47574") ? false : (stryCov_9fa48("47574"), true);
          }
        }
        const invitation_exists = await db.exists(stryMutAct_9fa48("47575") ? `` : (stryCov_9fa48("47575"), `invitation:uid:${uid}:invited:${email}`));
        if (stryMutAct_9fa48("47577") ? false : stryMutAct_9fa48("47576") ? true : (stryCov_9fa48("47576", "47577"), invitation_exists)) {
          if (stryMutAct_9fa48("47578")) {
            {}
          } else {
            stryCov_9fa48("47578");
            throw new Error(stryMutAct_9fa48("47579") ? "" : (stryCov_9fa48("47579"), '[[error:email-invited]]'));
          }
        }
        const data = await prepareInvitation(uid, email, groupsToJoin);
        await emailer.sendToEmail(stryMutAct_9fa48("47580") ? "" : (stryCov_9fa48("47580"), 'invitation'), email, meta.config.defaultLang, data);
        plugins.hooks.fire(stryMutAct_9fa48("47581") ? "" : (stryCov_9fa48("47581"), 'action:user.invite'), stryMutAct_9fa48("47582") ? {} : (stryCov_9fa48("47582"), {
          uid,
          email,
          groupsToJoin
        }));
      }
    };
    User.verifyInvitation = async function (query) {
      if (stryMutAct_9fa48("47583")) {
        {}
      } else {
        stryCov_9fa48("47583");
        if (stryMutAct_9fa48("47586") ? false : stryMutAct_9fa48("47585") ? true : stryMutAct_9fa48("47584") ? query.token : (stryCov_9fa48("47584", "47585", "47586"), !query.token)) {
          if (stryMutAct_9fa48("47587")) {
            {}
          } else {
            stryCov_9fa48("47587");
            if (stryMutAct_9fa48("47590") ? meta.config.registrationType.endsWith('admin-') : stryMutAct_9fa48("47589") ? false : stryMutAct_9fa48("47588") ? true : (stryCov_9fa48("47588", "47589", "47590"), meta.config.registrationType.startsWith(stryMutAct_9fa48("47591") ? "" : (stryCov_9fa48("47591"), 'admin-')))) {
              if (stryMutAct_9fa48("47592")) {
                {}
              } else {
                stryCov_9fa48("47592");
                throw new Error(stryMutAct_9fa48("47593") ? "" : (stryCov_9fa48("47593"), '[[register:invite.error-admin-only]]'));
              }
            } else {
              if (stryMutAct_9fa48("47594")) {
                {}
              } else {
                stryCov_9fa48("47594");
                throw new Error(stryMutAct_9fa48("47595") ? "" : (stryCov_9fa48("47595"), '[[register:invite.error-invite-only]]'));
              }
            }
          }
        }
        const token = await db.getObjectField(stryMutAct_9fa48("47596") ? `` : (stryCov_9fa48("47596"), `invitation:token:${query.token}`), stryMutAct_9fa48("47597") ? "" : (stryCov_9fa48("47597"), 'token'));
        if (stryMutAct_9fa48("47600") ? !token && token !== query.token : stryMutAct_9fa48("47599") ? false : stryMutAct_9fa48("47598") ? true : (stryCov_9fa48("47598", "47599", "47600"), (stryMutAct_9fa48("47601") ? token : (stryCov_9fa48("47601"), !token)) || (stryMutAct_9fa48("47603") ? token === query.token : stryMutAct_9fa48("47602") ? false : (stryCov_9fa48("47602", "47603"), token !== query.token)))) {
          if (stryMutAct_9fa48("47604")) {
            {}
          } else {
            stryCov_9fa48("47604");
            throw new Error(stryMutAct_9fa48("47605") ? "" : (stryCov_9fa48("47605"), '[[register:invite.error-invalid-data]]'));
          }
        }
      }
    };
    User.confirmIfInviteEmailIsUsed = async function (token, enteredEmail, uid) {
      if (stryMutAct_9fa48("47606")) {
        {}
      } else {
        stryCov_9fa48("47606");
        if (stryMutAct_9fa48("47609") ? false : stryMutAct_9fa48("47608") ? true : stryMutAct_9fa48("47607") ? enteredEmail : (stryCov_9fa48("47607", "47608", "47609"), !enteredEmail)) {
          if (stryMutAct_9fa48("47610")) {
            {}
          } else {
            stryCov_9fa48("47610");
            return;
          }
        }
        const email = await db.getObjectField(stryMutAct_9fa48("47611") ? `` : (stryCov_9fa48("47611"), `invitation:token:${token}`), stryMutAct_9fa48("47612") ? "" : (stryCov_9fa48("47612"), 'email'));
        // "Confirm" user's email if registration completed with invited address
        if (stryMutAct_9fa48("47615") ? email || email === enteredEmail : stryMutAct_9fa48("47614") ? false : stryMutAct_9fa48("47613") ? true : (stryCov_9fa48("47613", "47614", "47615"), email && (stryMutAct_9fa48("47617") ? email !== enteredEmail : stryMutAct_9fa48("47616") ? true : (stryCov_9fa48("47616", "47617"), email === enteredEmail)))) {
          if (stryMutAct_9fa48("47618")) {
            {}
          } else {
            stryCov_9fa48("47618");
            await User.email.confirmByUid(uid);
          }
        }
      }
    };
    User.joinGroupsFromInvitation = async function (uid, token) {
      if (stryMutAct_9fa48("47619")) {
        {}
      } else {
        stryCov_9fa48("47619");
        let groupsToJoin = await db.getObjectField(stryMutAct_9fa48("47620") ? `` : (stryCov_9fa48("47620"), `invitation:token:${token}`), stryMutAct_9fa48("47621") ? "" : (stryCov_9fa48("47621"), 'groupsToJoin'));
        try {
          if (stryMutAct_9fa48("47622")) {
            {}
          } else {
            stryCov_9fa48("47622");
            groupsToJoin = JSON.parse(groupsToJoin);
          }
        } catch (e) {
          if (stryMutAct_9fa48("47623")) {
            {}
          } else {
            stryCov_9fa48("47623");
            return;
          }
        }
        if (stryMutAct_9fa48("47626") ? !groupsToJoin && groupsToJoin.length < 1 : stryMutAct_9fa48("47625") ? false : stryMutAct_9fa48("47624") ? true : (stryCov_9fa48("47624", "47625", "47626"), (stryMutAct_9fa48("47627") ? groupsToJoin : (stryCov_9fa48("47627"), !groupsToJoin)) || (stryMutAct_9fa48("47630") ? groupsToJoin.length >= 1 : stryMutAct_9fa48("47629") ? groupsToJoin.length <= 1 : stryMutAct_9fa48("47628") ? false : (stryCov_9fa48("47628", "47629", "47630"), groupsToJoin.length < 1)))) {
          if (stryMutAct_9fa48("47631")) {
            {}
          } else {
            stryCov_9fa48("47631");
            return;
          }
        }
        await groups.join(groupsToJoin, uid);
      }
    };
    User.deleteInvitation = async function (invitedBy, email) {
      if (stryMutAct_9fa48("47632")) {
        {}
      } else {
        stryCov_9fa48("47632");
        const invitedByUid = await User.getUidByUsername(invitedBy);
        if (stryMutAct_9fa48("47635") ? false : stryMutAct_9fa48("47634") ? true : stryMutAct_9fa48("47633") ? invitedByUid : (stryCov_9fa48("47633", "47634", "47635"), !invitedByUid)) {
          if (stryMutAct_9fa48("47636")) {
            {}
          } else {
            stryCov_9fa48("47636");
            throw new Error(stryMutAct_9fa48("47637") ? "" : (stryCov_9fa48("47637"), '[[error:invalid-username]]'));
          }
        }
        const token = await db.get(stryMutAct_9fa48("47638") ? `` : (stryCov_9fa48("47638"), `invitation:uid:${invitedByUid}:invited:${email}`));
        await Promise.all(stryMutAct_9fa48("47639") ? [] : (stryCov_9fa48("47639"), [deleteFromReferenceList(invitedByUid, email), db.setRemove(stryMutAct_9fa48("47640") ? `` : (stryCov_9fa48("47640"), `invitation:invited:${email}`), token), db.delete(stryMutAct_9fa48("47641") ? `` : (stryCov_9fa48("47641"), `invitation:token:${token}`))]));
      }
    };
    User.deleteInvitationKey = async function (registrationEmail, token) {
      if (stryMutAct_9fa48("47642")) {
        {}
      } else {
        stryCov_9fa48("47642");
        if (stryMutAct_9fa48("47644") ? false : stryMutAct_9fa48("47643") ? true : (stryCov_9fa48("47643", "47644"), registrationEmail)) {
          if (stryMutAct_9fa48("47645")) {
            {}
          } else {
            stryCov_9fa48("47645");
            const uids = await User.getInvitingUsers();
            await Promise.all(uids.map(stryMutAct_9fa48("47646") ? () => undefined : (stryCov_9fa48("47646"), uid => deleteFromReferenceList(uid, registrationEmail))));
            // Delete all invites to an email address if it has joined
            const tokens = await db.getSetMembers(stryMutAct_9fa48("47647") ? `` : (stryCov_9fa48("47647"), `invitation:invited:${registrationEmail}`));
            const keysToDelete = (stryMutAct_9fa48("47648") ? [] : (stryCov_9fa48("47648"), [stryMutAct_9fa48("47649") ? `` : (stryCov_9fa48("47649"), `invitation:invited:${registrationEmail}`)])).concat(tokens.map(stryMutAct_9fa48("47650") ? () => undefined : (stryCov_9fa48("47650"), token => stryMutAct_9fa48("47651") ? `` : (stryCov_9fa48("47651"), `invitation:token:${token}`))));
            await db.deleteAll(keysToDelete);
          }
        }
        if (stryMutAct_9fa48("47653") ? false : stryMutAct_9fa48("47652") ? true : (stryCov_9fa48("47652", "47653"), token)) {
          if (stryMutAct_9fa48("47654")) {
            {}
          } else {
            stryCov_9fa48("47654");
            const invite = await db.getObject(stryMutAct_9fa48("47655") ? `` : (stryCov_9fa48("47655"), `invitation:token:${token}`));
            if (stryMutAct_9fa48("47658") ? false : stryMutAct_9fa48("47657") ? true : stryMutAct_9fa48("47656") ? invite : (stryCov_9fa48("47656", "47657", "47658"), !invite)) {
              if (stryMutAct_9fa48("47659")) {
                {}
              } else {
                stryCov_9fa48("47659");
                return;
              }
            }
            await deleteFromReferenceList(invite.inviter, invite.email);
            await db.deleteAll(stryMutAct_9fa48("47660") ? [] : (stryCov_9fa48("47660"), [stryMutAct_9fa48("47661") ? `` : (stryCov_9fa48("47661"), `invitation:invited:${invite.email}`), stryMutAct_9fa48("47662") ? `` : (stryCov_9fa48("47662"), `invitation:token:${token}`)]));
          }
        }
      }
    };
    async function deleteFromReferenceList(uid, email) {
      if (stryMutAct_9fa48("47663")) {
        {}
      } else {
        stryCov_9fa48("47663");
        await Promise.all(stryMutAct_9fa48("47664") ? [] : (stryCov_9fa48("47664"), [db.setRemove(stryMutAct_9fa48("47665") ? `` : (stryCov_9fa48("47665"), `invitation:uid:${uid}`), email), db.delete(stryMutAct_9fa48("47666") ? `` : (stryCov_9fa48("47666"), `invitation:uid:${uid}:invited:${email}`))]));
        const count = await db.setCount(stryMutAct_9fa48("47667") ? `` : (stryCov_9fa48("47667"), `invitation:uid:${uid}`));
        if (stryMutAct_9fa48("47670") ? count !== 0 : stryMutAct_9fa48("47669") ? false : stryMutAct_9fa48("47668") ? true : (stryCov_9fa48("47668", "47669", "47670"), count === 0)) {
          if (stryMutAct_9fa48("47671")) {
            {}
          } else {
            stryCov_9fa48("47671");
            await db.setRemove(stryMutAct_9fa48("47672") ? "" : (stryCov_9fa48("47672"), 'invitation:uids'), uid);
          }
        }
      }
    }
    async function prepareInvitation(uid, email, groupsToJoin) {
      if (stryMutAct_9fa48("47673")) {
        {}
      } else {
        stryCov_9fa48("47673");
        const inviterExists = await User.exists(uid);
        if (stryMutAct_9fa48("47676") ? false : stryMutAct_9fa48("47675") ? true : stryMutAct_9fa48("47674") ? inviterExists : (stryCov_9fa48("47674", "47675", "47676"), !inviterExists)) {
          if (stryMutAct_9fa48("47677")) {
            {}
          } else {
            stryCov_9fa48("47677");
            throw new Error(stryMutAct_9fa48("47678") ? "" : (stryCov_9fa48("47678"), '[[error:invalid-uid]]'));
          }
        }
        const token = utils.generateUUID();
        const registerLink = stryMutAct_9fa48("47679") ? `` : (stryCov_9fa48("47679"), `${nconf.get(stryMutAct_9fa48("47680") ? "" : (stryCov_9fa48("47680"), 'url'))}/register?token=${token}`);
        const expireDays = meta.config.inviteExpiration;
        const expireIn = stryMutAct_9fa48("47681") ? expireDays / 86400000 : (stryCov_9fa48("47681"), expireDays * 86400000);
        await db.setAdd(stryMutAct_9fa48("47682") ? `` : (stryCov_9fa48("47682"), `invitation:uid:${uid}`), email);
        await db.setAdd(stryMutAct_9fa48("47683") ? "" : (stryCov_9fa48("47683"), 'invitation:uids'), uid);
        // Referencing from uid and email to token
        await db.set(stryMutAct_9fa48("47684") ? `` : (stryCov_9fa48("47684"), `invitation:uid:${uid}:invited:${email}`), token);
        // Keeping references for all invites to this email address
        await db.setAdd(stryMutAct_9fa48("47685") ? `` : (stryCov_9fa48("47685"), `invitation:invited:${email}`), token);
        await db.setObject(stryMutAct_9fa48("47686") ? `` : (stryCov_9fa48("47686"), `invitation:token:${token}`), stryMutAct_9fa48("47687") ? {} : (stryCov_9fa48("47687"), {
          email,
          token,
          groupsToJoin: JSON.stringify(groupsToJoin),
          inviter: uid
        }));
        await db.pexpireAt(stryMutAct_9fa48("47688") ? `` : (stryCov_9fa48("47688"), `invitation:token:${token}`), stryMutAct_9fa48("47689") ? Date.now() - expireIn : (stryCov_9fa48("47689"), Date.now() + expireIn));
        const username = await User.getUserField(uid, stryMutAct_9fa48("47690") ? "" : (stryCov_9fa48("47690"), 'username'));
        const title = stryMutAct_9fa48("47693") ? (meta.config.title || meta.config.browserTitle) && 'NodeBB' : stryMutAct_9fa48("47692") ? false : stryMutAct_9fa48("47691") ? true : (stryCov_9fa48("47691", "47692", "47693"), (stryMutAct_9fa48("47695") ? meta.config.title && meta.config.browserTitle : stryMutAct_9fa48("47694") ? false : (stryCov_9fa48("47694", "47695"), meta.config.title || meta.config.browserTitle)) || (stryMutAct_9fa48("47696") ? "" : (stryCov_9fa48("47696"), 'NodeBB')));
        const subject = await translator.translate(stryMutAct_9fa48("47697") ? `` : (stryCov_9fa48("47697"), `[[email:invite, ${title}]]`), meta.config.defaultLang);
        return stryMutAct_9fa48("47698") ? {} : (stryCov_9fa48("47698"), {
          ...emailer._defaultPayload,
          // Append default data to this email payload
          site_title: title,
          registerLink: registerLink,
          subject: subject,
          username: username,
          template: stryMutAct_9fa48("47699") ? "" : (stryCov_9fa48("47699"), 'invitation'),
          expireDays: expireDays
        });
      }
    }
  }
};