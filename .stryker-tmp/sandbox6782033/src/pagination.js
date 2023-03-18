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
const qs = require('querystring');
const _ = require('lodash');
const pagination = module.exports;
pagination.create = function (currentPage, pageCount, queryObj) {
  if (stryMutAct_9fa48("27093")) {
    {}
  } else {
    stryCov_9fa48("27093");
    if (stryMutAct_9fa48("27097") ? pageCount > 1 : stryMutAct_9fa48("27096") ? pageCount < 1 : stryMutAct_9fa48("27095") ? false : stryMutAct_9fa48("27094") ? true : (stryCov_9fa48("27094", "27095", "27096", "27097"), pageCount <= 1)) {
      if (stryMutAct_9fa48("27098")) {
        {}
      } else {
        stryCov_9fa48("27098");
        return stryMutAct_9fa48("27099") ? {} : (stryCov_9fa48("27099"), {
          prev: stryMutAct_9fa48("27100") ? {} : (stryCov_9fa48("27100"), {
            page: 1,
            active: stryMutAct_9fa48("27104") ? currentPage <= 1 : stryMutAct_9fa48("27103") ? currentPage >= 1 : stryMutAct_9fa48("27102") ? false : stryMutAct_9fa48("27101") ? true : (stryCov_9fa48("27101", "27102", "27103", "27104"), currentPage > 1)
          }),
          next: stryMutAct_9fa48("27105") ? {} : (stryCov_9fa48("27105"), {
            page: 1,
            active: stryMutAct_9fa48("27109") ? currentPage >= pageCount : stryMutAct_9fa48("27108") ? currentPage <= pageCount : stryMutAct_9fa48("27107") ? false : stryMutAct_9fa48("27106") ? true : (stryCov_9fa48("27106", "27107", "27108", "27109"), currentPage < pageCount)
          }),
          first: stryMutAct_9fa48("27110") ? {} : (stryCov_9fa48("27110"), {
            page: 1,
            active: stryMutAct_9fa48("27113") ? currentPage !== 1 : stryMutAct_9fa48("27112") ? false : stryMutAct_9fa48("27111") ? true : (stryCov_9fa48("27111", "27112", "27113"), currentPage === 1)
          }),
          last: stryMutAct_9fa48("27114") ? {} : (stryCov_9fa48("27114"), {
            page: 1,
            active: stryMutAct_9fa48("27117") ? currentPage !== pageCount : stryMutAct_9fa48("27116") ? false : stryMutAct_9fa48("27115") ? true : (stryCov_9fa48("27115", "27116", "27117"), currentPage === pageCount)
          }),
          rel: stryMutAct_9fa48("27118") ? ["Stryker was here"] : (stryCov_9fa48("27118"), []),
          pages: stryMutAct_9fa48("27119") ? ["Stryker was here"] : (stryCov_9fa48("27119"), []),
          currentPage: 1,
          pageCount: 1
        });
      }
    }
    pageCount = parseInt(pageCount, 10);
    let pagesToShow = stryMutAct_9fa48("27120") ? [] : (stryCov_9fa48("27120"), [1, 2, stryMutAct_9fa48("27121") ? pageCount + 1 : (stryCov_9fa48("27121"), pageCount - 1), pageCount]);
    currentPage = stryMutAct_9fa48("27124") ? parseInt(currentPage, 10) && 1 : stryMutAct_9fa48("27123") ? false : stryMutAct_9fa48("27122") ? true : (stryCov_9fa48("27122", "27123", "27124"), parseInt(currentPage, 10) || 1);
    const previous = Math.max(1, stryMutAct_9fa48("27125") ? currentPage + 1 : (stryCov_9fa48("27125"), currentPage - 1));
    const next = Math.min(pageCount, stryMutAct_9fa48("27126") ? currentPage - 1 : (stryCov_9fa48("27126"), currentPage + 1));
    let startPage = Math.max(1, stryMutAct_9fa48("27127") ? currentPage + 2 : (stryCov_9fa48("27127"), currentPage - 2));
    if (stryMutAct_9fa48("27131") ? startPage <= pageCount - 5 : stryMutAct_9fa48("27130") ? startPage >= pageCount - 5 : stryMutAct_9fa48("27129") ? false : stryMutAct_9fa48("27128") ? true : (stryCov_9fa48("27128", "27129", "27130", "27131"), startPage > (stryMutAct_9fa48("27132") ? pageCount + 5 : (stryCov_9fa48("27132"), pageCount - 5)))) {
      if (stryMutAct_9fa48("27133")) {
        {}
      } else {
        stryCov_9fa48("27133");
        stryMutAct_9fa48("27134") ? startPage += 2 - (pageCount - currentPage) : (stryCov_9fa48("27134"), startPage -= stryMutAct_9fa48("27135") ? 2 + (pageCount - currentPage) : (stryCov_9fa48("27135"), 2 - (stryMutAct_9fa48("27136") ? pageCount + currentPage : (stryCov_9fa48("27136"), pageCount - currentPage))));
      }
    }
    let i;
    for (i = 0; stryMutAct_9fa48("27139") ? i >= 5 : stryMutAct_9fa48("27138") ? i <= 5 : stryMutAct_9fa48("27137") ? false : (stryCov_9fa48("27137", "27138", "27139"), i < 5); stryMutAct_9fa48("27140") ? i -= 1 : (stryCov_9fa48("27140"), i += 1)) {
      if (stryMutAct_9fa48("27141")) {
        {}
      } else {
        stryCov_9fa48("27141");
        pagesToShow.push(stryMutAct_9fa48("27142") ? startPage - i : (stryCov_9fa48("27142"), startPage + i));
      }
    }
    pagesToShow = stryMutAct_9fa48("27144") ? _.uniq(pagesToShow).sort((a, b) => a - b) : stryMutAct_9fa48("27143") ? _.uniq(pagesToShow).filter(page => page > 0 && page <= pageCount) : (stryCov_9fa48("27143", "27144"), _.uniq(pagesToShow).filter(stryMutAct_9fa48("27145") ? () => undefined : (stryCov_9fa48("27145"), page => stryMutAct_9fa48("27148") ? page > 0 || page <= pageCount : stryMutAct_9fa48("27147") ? false : stryMutAct_9fa48("27146") ? true : (stryCov_9fa48("27146", "27147", "27148"), (stryMutAct_9fa48("27151") ? page <= 0 : stryMutAct_9fa48("27150") ? page >= 0 : stryMutAct_9fa48("27149") ? true : (stryCov_9fa48("27149", "27150", "27151"), page > 0)) && (stryMutAct_9fa48("27154") ? page > pageCount : stryMutAct_9fa48("27153") ? page < pageCount : stryMutAct_9fa48("27152") ? true : (stryCov_9fa48("27152", "27153", "27154"), page <= pageCount))))).sort(stryMutAct_9fa48("27155") ? () => undefined : (stryCov_9fa48("27155"), (a, b) => stryMutAct_9fa48("27156") ? a + b : (stryCov_9fa48("27156"), a - b))));
    queryObj = stryMutAct_9fa48("27157") ? {} : (stryCov_9fa48("27157"), {
      ...(stryMutAct_9fa48("27160") ? queryObj && {} : stryMutAct_9fa48("27159") ? false : stryMutAct_9fa48("27158") ? true : (stryCov_9fa48("27158", "27159", "27160"), queryObj || {}))
    });
    delete queryObj._;
    const pages = pagesToShow.map(page => {
      if (stryMutAct_9fa48("27161")) {
        {}
      } else {
        stryCov_9fa48("27161");
        queryObj.page = page;
        return stryMutAct_9fa48("27162") ? {} : (stryCov_9fa48("27162"), {
          page: page,
          active: stryMutAct_9fa48("27165") ? page !== currentPage : stryMutAct_9fa48("27164") ? false : stryMutAct_9fa48("27163") ? true : (stryCov_9fa48("27163", "27164", "27165"), page === currentPage),
          qs: qs.stringify(queryObj)
        });
      }
    });
    for (i = stryMutAct_9fa48("27166") ? pages.length + 1 : (stryCov_9fa48("27166"), pages.length - 1); stryMutAct_9fa48("27169") ? i <= 0 : stryMutAct_9fa48("27168") ? i >= 0 : stryMutAct_9fa48("27167") ? false : (stryCov_9fa48("27167", "27168", "27169"), i > 0); stryMutAct_9fa48("27170") ? i += 1 : (stryCov_9fa48("27170"), i -= 1)) {
      if (stryMutAct_9fa48("27171")) {
        {}
      } else {
        stryCov_9fa48("27171");
        if (stryMutAct_9fa48("27174") ? pages[i].page - 2 !== pages[i - 1].page : stryMutAct_9fa48("27173") ? false : stryMutAct_9fa48("27172") ? true : (stryCov_9fa48("27172", "27173", "27174"), (stryMutAct_9fa48("27175") ? pages[i].page + 2 : (stryCov_9fa48("27175"), pages[i].page - 2)) === pages[stryMutAct_9fa48("27176") ? i + 1 : (stryCov_9fa48("27176"), i - 1)].page)) {
          if (stryMutAct_9fa48("27177")) {
            {}
          } else {
            stryCov_9fa48("27177");
            pages.splice(i, 0, stryMutAct_9fa48("27178") ? {} : (stryCov_9fa48("27178"), {
              page: stryMutAct_9fa48("27179") ? pages[i].page + 1 : (stryCov_9fa48("27179"), pages[i].page - 1),
              active: stryMutAct_9fa48("27180") ? true : (stryCov_9fa48("27180"), false),
              qs: qs.stringify(queryObj)
            }));
          }
        } else if (stryMutAct_9fa48("27183") ? pages[i].page - 1 === pages[i - 1].page : stryMutAct_9fa48("27182") ? false : stryMutAct_9fa48("27181") ? true : (stryCov_9fa48("27181", "27182", "27183"), (stryMutAct_9fa48("27184") ? pages[i].page + 1 : (stryCov_9fa48("27184"), pages[i].page - 1)) !== pages[stryMutAct_9fa48("27185") ? i + 1 : (stryCov_9fa48("27185"), i - 1)].page)) {
          if (stryMutAct_9fa48("27186")) {
            {}
          } else {
            stryCov_9fa48("27186");
            pages.splice(i, 0, stryMutAct_9fa48("27187") ? {} : (stryCov_9fa48("27187"), {
              separator: stryMutAct_9fa48("27188") ? false : (stryCov_9fa48("27188"), true)
            }));
          }
        }
      }
    }
    const data = stryMutAct_9fa48("27189") ? {} : (stryCov_9fa48("27189"), {
      rel: stryMutAct_9fa48("27190") ? ["Stryker was here"] : (stryCov_9fa48("27190"), []),
      pages: pages,
      currentPage: currentPage,
      pageCount: pageCount
    });
    queryObj.page = previous;
    data.prev = stryMutAct_9fa48("27191") ? {} : (stryCov_9fa48("27191"), {
      page: previous,
      active: stryMutAct_9fa48("27195") ? currentPage <= 1 : stryMutAct_9fa48("27194") ? currentPage >= 1 : stryMutAct_9fa48("27193") ? false : stryMutAct_9fa48("27192") ? true : (stryCov_9fa48("27192", "27193", "27194", "27195"), currentPage > 1),
      qs: qs.stringify(queryObj)
    });
    queryObj.page = next;
    data.next = stryMutAct_9fa48("27196") ? {} : (stryCov_9fa48("27196"), {
      page: next,
      active: stryMutAct_9fa48("27200") ? currentPage >= pageCount : stryMutAct_9fa48("27199") ? currentPage <= pageCount : stryMutAct_9fa48("27198") ? false : stryMutAct_9fa48("27197") ? true : (stryCov_9fa48("27197", "27198", "27199", "27200"), currentPage < pageCount),
      qs: qs.stringify(queryObj)
    });
    queryObj.page = 1;
    data.first = stryMutAct_9fa48("27201") ? {} : (stryCov_9fa48("27201"), {
      page: 1,
      active: stryMutAct_9fa48("27204") ? currentPage !== 1 : stryMutAct_9fa48("27203") ? false : stryMutAct_9fa48("27202") ? true : (stryCov_9fa48("27202", "27203", "27204"), currentPage === 1),
      qs: qs.stringify(queryObj)
    });
    queryObj.page = pageCount;
    data.last = stryMutAct_9fa48("27205") ? {} : (stryCov_9fa48("27205"), {
      page: pageCount,
      active: stryMutAct_9fa48("27208") ? currentPage !== pageCount : stryMutAct_9fa48("27207") ? false : stryMutAct_9fa48("27206") ? true : (stryCov_9fa48("27206", "27207", "27208"), currentPage === pageCount),
      qs: qs.stringify(queryObj)
    });
    if (stryMutAct_9fa48("27212") ? currentPage >= pageCount : stryMutAct_9fa48("27211") ? currentPage <= pageCount : stryMutAct_9fa48("27210") ? false : stryMutAct_9fa48("27209") ? true : (stryCov_9fa48("27209", "27210", "27211", "27212"), currentPage < pageCount)) {
      if (stryMutAct_9fa48("27213")) {
        {}
      } else {
        stryCov_9fa48("27213");
        data.rel.push(stryMutAct_9fa48("27214") ? {} : (stryCov_9fa48("27214"), {
          rel: stryMutAct_9fa48("27215") ? "" : (stryCov_9fa48("27215"), 'next'),
          href: stryMutAct_9fa48("27216") ? `` : (stryCov_9fa48("27216"), `?${qs.stringify(stryMutAct_9fa48("27217") ? {} : (stryCov_9fa48("27217"), {
            ...queryObj,
            page: next
          }))}`)
        }));
      }
    }
    if (stryMutAct_9fa48("27221") ? currentPage <= 1 : stryMutAct_9fa48("27220") ? currentPage >= 1 : stryMutAct_9fa48("27219") ? false : stryMutAct_9fa48("27218") ? true : (stryCov_9fa48("27218", "27219", "27220", "27221"), currentPage > 1)) {
      if (stryMutAct_9fa48("27222")) {
        {}
      } else {
        stryCov_9fa48("27222");
        data.rel.push(stryMutAct_9fa48("27223") ? {} : (stryCov_9fa48("27223"), {
          rel: stryMutAct_9fa48("27224") ? "" : (stryCov_9fa48("27224"), 'prev'),
          href: stryMutAct_9fa48("27225") ? `` : (stryCov_9fa48("27225"), `?${qs.stringify(stryMutAct_9fa48("27226") ? {} : (stryCov_9fa48("27226"), {
            ...queryObj,
            page: previous
          }))}`)
        }));
      }
    }
    return data;
  }
};