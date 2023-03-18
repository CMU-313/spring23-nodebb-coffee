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
const db = require('../../database');
const events = require('../../events');
const pagination = require('../../pagination');
const eventsController = module.exports;
eventsController.get = async function (req, res) {
  if (stryMutAct_9fa48("7072")) {
    {}
  } else {
    stryCov_9fa48("7072");
    const page = stryMutAct_9fa48("7075") ? parseInt(req.query.page, 10) && 1 : stryMutAct_9fa48("7074") ? false : stryMutAct_9fa48("7073") ? true : (stryCov_9fa48("7073", "7074", "7075"), parseInt(req.query.page, 10) || 1);
    const itemsPerPage = stryMutAct_9fa48("7078") ? parseInt(req.query.perPage, 10) && 20 : stryMutAct_9fa48("7077") ? false : stryMutAct_9fa48("7076") ? true : (stryCov_9fa48("7076", "7077", "7078"), parseInt(req.query.perPage, 10) || 20);
    const start = stryMutAct_9fa48("7079") ? (page - 1) / itemsPerPage : (stryCov_9fa48("7079"), (stryMutAct_9fa48("7080") ? page + 1 : (stryCov_9fa48("7080"), page - 1)) * itemsPerPage);
    const stop = stryMutAct_9fa48("7081") ? start + itemsPerPage + 1 : (stryCov_9fa48("7081"), (stryMutAct_9fa48("7082") ? start - itemsPerPage : (stryCov_9fa48("7082"), start + itemsPerPage)) - 1);

    // Limit by date
    let from = req.query.start ? stryMutAct_9fa48("7085") ? new Date(req.query.start) && undefined : stryMutAct_9fa48("7084") ? false : stryMutAct_9fa48("7083") ? true : (stryCov_9fa48("7083", "7084", "7085"), new Date(req.query.start) || undefined) : undefined;
    let to = req.query.end ? stryMutAct_9fa48("7088") ? new Date(req.query.end) && undefined : stryMutAct_9fa48("7087") ? false : stryMutAct_9fa48("7086") ? true : (stryCov_9fa48("7086", "7087", "7088"), new Date(req.query.end) || undefined) : new Date();
    from = stryMutAct_9fa48("7091") ? from || from.setHours(0, 0, 0, 0) : stryMutAct_9fa48("7090") ? false : stryMutAct_9fa48("7089") ? true : (stryCov_9fa48("7089", "7090", "7091"), from && from.setHours(0, 0, 0, 0)); // setHours returns a unix timestamp (Number, not Date)
    to = stryMutAct_9fa48("7094") ? to || to.setHours(23, 59, 59, 999) : stryMutAct_9fa48("7093") ? false : stryMutAct_9fa48("7092") ? true : (stryCov_9fa48("7092", "7093", "7094"), to && to.setHours(23, 59, 59, 999)); // setHours returns a unix timestamp (Number, not Date)

    const currentFilter = stryMutAct_9fa48("7097") ? req.query.type && '' : stryMutAct_9fa48("7096") ? false : stryMutAct_9fa48("7095") ? true : (stryCov_9fa48("7095", "7096", "7097"), req.query.type || (stryMutAct_9fa48("7098") ? "Stryker was here!" : (stryCov_9fa48("7098"), '')));
    const [eventCount, eventData, counts] = await Promise.all(stryMutAct_9fa48("7099") ? [] : (stryCov_9fa48("7099"), [db.sortedSetCount(stryMutAct_9fa48("7100") ? `` : (stryCov_9fa48("7100"), `events:time${currentFilter ? stryMutAct_9fa48("7101") ? `` : (stryCov_9fa48("7101"), `:${currentFilter}`) : stryMutAct_9fa48("7102") ? "Stryker was here!" : (stryCov_9fa48("7102"), '')}`), stryMutAct_9fa48("7105") ? from && '-inf' : stryMutAct_9fa48("7104") ? false : stryMutAct_9fa48("7103") ? true : (stryCov_9fa48("7103", "7104", "7105"), from || (stryMutAct_9fa48("7106") ? "" : (stryCov_9fa48("7106"), '-inf'))), to), events.getEvents(currentFilter, start, stop, stryMutAct_9fa48("7109") ? from && '-inf' : stryMutAct_9fa48("7108") ? false : stryMutAct_9fa48("7107") ? true : (stryCov_9fa48("7107", "7108", "7109"), from || (stryMutAct_9fa48("7110") ? "" : (stryCov_9fa48("7110"), '-inf'))), to), db.sortedSetsCard((stryMutAct_9fa48("7111") ? [] : (stryCov_9fa48("7111"), [stryMutAct_9fa48("7112") ? "Stryker was here!" : (stryCov_9fa48("7112"), '')])).concat(events.types).map(stryMutAct_9fa48("7113") ? () => undefined : (stryCov_9fa48("7113"), type => stryMutAct_9fa48("7114") ? `` : (stryCov_9fa48("7114"), `events:time${type ? stryMutAct_9fa48("7115") ? `` : (stryCov_9fa48("7115"), `:${type}`) : stryMutAct_9fa48("7116") ? "Stryker was here!" : (stryCov_9fa48("7116"), '')}`))))]));
    const types = (stryMutAct_9fa48("7117") ? [] : (stryCov_9fa48("7117"), [stryMutAct_9fa48("7118") ? "Stryker was here!" : (stryCov_9fa48("7118"), '')])).concat(events.types).map(stryMutAct_9fa48("7119") ? () => undefined : (stryCov_9fa48("7119"), (type, index) => stryMutAct_9fa48("7120") ? {} : (stryCov_9fa48("7120"), {
      value: type,
      name: stryMutAct_9fa48("7123") ? type && 'all' : stryMutAct_9fa48("7122") ? false : stryMutAct_9fa48("7121") ? true : (stryCov_9fa48("7121", "7122", "7123"), type || (stryMutAct_9fa48("7124") ? "" : (stryCov_9fa48("7124"), 'all'))),
      selected: stryMutAct_9fa48("7127") ? type !== currentFilter : stryMutAct_9fa48("7126") ? false : stryMutAct_9fa48("7125") ? true : (stryCov_9fa48("7125", "7126", "7127"), type === currentFilter),
      count: counts[index]
    })));
    const pageCount = Math.max(1, Math.ceil(stryMutAct_9fa48("7128") ? eventCount * itemsPerPage : (stryCov_9fa48("7128"), eventCount / itemsPerPage)));
    res.render(stryMutAct_9fa48("7129") ? "" : (stryCov_9fa48("7129"), 'admin/advanced/events'), stryMutAct_9fa48("7130") ? {} : (stryCov_9fa48("7130"), {
      events: eventData,
      pagination: pagination.create(page, pageCount, req.query),
      types: types,
      query: req.query
    }));
  }
};