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
module.exports = function (module) {
  if (stryMutAct_9fa48("14019")) {
    {}
  } else {
    stryCov_9fa48("14019");
    module.sortedSetIntersectCard = async function (keys) {
      if (stryMutAct_9fa48("14020")) {
        {}
      } else {
        stryCov_9fa48("14020");
        if (stryMutAct_9fa48("14023") ? !Array.isArray(keys) && !keys.length : stryMutAct_9fa48("14022") ? false : stryMutAct_9fa48("14021") ? true : (stryCov_9fa48("14021", "14022", "14023"), (stryMutAct_9fa48("14024") ? Array.isArray(keys) : (stryCov_9fa48("14024"), !Array.isArray(keys))) || (stryMutAct_9fa48("14025") ? keys.length : (stryCov_9fa48("14025"), !keys.length)))) {
          if (stryMutAct_9fa48("14026")) {
            {}
          } else {
            stryCov_9fa48("14026");
            return 0;
          }
        }
        const objects = module.client.collection(stryMutAct_9fa48("14027") ? "" : (stryCov_9fa48("14027"), 'objects'));
        const counts = await countSets(keys, 50000);
        if (stryMutAct_9fa48("14030") ? counts.minCount !== 0 : stryMutAct_9fa48("14029") ? false : stryMutAct_9fa48("14028") ? true : (stryCov_9fa48("14028", "14029", "14030"), counts.minCount === 0)) {
          if (stryMutAct_9fa48("14031")) {
            {}
          } else {
            stryCov_9fa48("14031");
            return 0;
          }
        }
        let items = await objects.find(stryMutAct_9fa48("14032") ? {} : (stryCov_9fa48("14032"), {
          _key: counts.smallestSet
        }), stryMutAct_9fa48("14033") ? {} : (stryCov_9fa48("14033"), {
          projection: stryMutAct_9fa48("14034") ? {} : (stryCov_9fa48("14034"), {
            _id: 0,
            value: 1
          })
        })).batchSize(stryMutAct_9fa48("14035") ? counts.minCount - 1 : (stryCov_9fa48("14035"), counts.minCount + 1)).toArray();
        const otherSets = stryMutAct_9fa48("14036") ? keys : (stryCov_9fa48("14036"), keys.filter(stryMutAct_9fa48("14037") ? () => undefined : (stryCov_9fa48("14037"), s => stryMutAct_9fa48("14040") ? s === counts.smallestSet : stryMutAct_9fa48("14039") ? false : stryMutAct_9fa48("14038") ? true : (stryCov_9fa48("14038", "14039", "14040"), s !== counts.smallestSet))));
        for (let i = 0; stryMutAct_9fa48("14043") ? i >= otherSets.length : stryMutAct_9fa48("14042") ? i <= otherSets.length : stryMutAct_9fa48("14041") ? false : (stryCov_9fa48("14041", "14042", "14043"), i < otherSets.length); stryMutAct_9fa48("14044") ? i-- : (stryCov_9fa48("14044"), i++)) {
          if (stryMutAct_9fa48("14045")) {
            {}
          } else {
            stryCov_9fa48("14045");
            /* eslint-disable no-await-in-loop */
            const query = stryMutAct_9fa48("14046") ? {} : (stryCov_9fa48("14046"), {
              _key: otherSets[i],
              value: stryMutAct_9fa48("14047") ? {} : (stryCov_9fa48("14047"), {
                $in: items.map(stryMutAct_9fa48("14048") ? () => undefined : (stryCov_9fa48("14048"), i => i.value))
              })
            });
            if (stryMutAct_9fa48("14051") ? i !== otherSets.length - 1 : stryMutAct_9fa48("14050") ? false : stryMutAct_9fa48("14049") ? true : (stryCov_9fa48("14049", "14050", "14051"), i === (stryMutAct_9fa48("14052") ? otherSets.length + 1 : (stryCov_9fa48("14052"), otherSets.length - 1)))) {
              if (stryMutAct_9fa48("14053")) {
                {}
              } else {
                stryCov_9fa48("14053");
                return await objects.countDocuments(query);
              }
            }
            items = await objects.find(query, stryMutAct_9fa48("14054") ? {} : (stryCov_9fa48("14054"), {
              projection: stryMutAct_9fa48("14055") ? {} : (stryCov_9fa48("14055"), {
                _id: 0,
                value: 1
              })
            })).batchSize(stryMutAct_9fa48("14056") ? items.length - 1 : (stryCov_9fa48("14056"), items.length + 1)).toArray();
          }
        }
      }
    };
    async function countSets(sets, limit) {
      if (stryMutAct_9fa48("14057")) {
        {}
      } else {
        stryCov_9fa48("14057");
        const objects = module.client.collection(stryMutAct_9fa48("14058") ? "" : (stryCov_9fa48("14058"), 'objects'));
        const counts = await Promise.all(sets.map(stryMutAct_9fa48("14059") ? () => undefined : (stryCov_9fa48("14059"), s => objects.countDocuments(stryMutAct_9fa48("14060") ? {} : (stryCov_9fa48("14060"), {
          _key: s
        }), stryMutAct_9fa48("14061") ? {} : (stryCov_9fa48("14061"), {
          limit: stryMutAct_9fa48("14064") ? limit && 25000 : stryMutAct_9fa48("14063") ? false : stryMutAct_9fa48("14062") ? true : (stryCov_9fa48("14062", "14063", "14064"), limit || 25000)
        })))));
        const minCount = Math.min(...counts);
        const index = counts.indexOf(minCount);
        const smallestSet = sets[index];
        return stryMutAct_9fa48("14065") ? {} : (stryCov_9fa48("14065"), {
          minCount: minCount,
          smallestSet: smallestSet
        });
      }
    }
    module.getSortedSetIntersect = async function (params) {
      if (stryMutAct_9fa48("14066")) {
        {}
      } else {
        stryCov_9fa48("14066");
        params.sort = 1;
        return await getSortedSetRevIntersect(params);
      }
    };
    module.getSortedSetRevIntersect = async function (params) {
      if (stryMutAct_9fa48("14067")) {
        {}
      } else {
        stryCov_9fa48("14067");
        params.sort = stryMutAct_9fa48("14068") ? +1 : (stryCov_9fa48("14068"), -1);
        return await getSortedSetRevIntersect(params);
      }
    };
    async function getSortedSetRevIntersect(params) {
      if (stryMutAct_9fa48("14069")) {
        {}
      } else {
        stryCov_9fa48("14069");
        params.start = params.hasOwnProperty(stryMutAct_9fa48("14070") ? "" : (stryCov_9fa48("14070"), 'start')) ? params.start : 0;
        params.stop = params.hasOwnProperty(stryMutAct_9fa48("14071") ? "" : (stryCov_9fa48("14071"), 'stop')) ? params.stop : stryMutAct_9fa48("14072") ? +1 : (stryCov_9fa48("14072"), -1);
        params.weights = stryMutAct_9fa48("14075") ? params.weights && [] : stryMutAct_9fa48("14074") ? false : stryMutAct_9fa48("14073") ? true : (stryCov_9fa48("14073", "14074", "14075"), params.weights || (stryMutAct_9fa48("14076") ? ["Stryker was here"] : (stryCov_9fa48("14076"), [])));
        params.limit = stryMutAct_9fa48("14077") ? params.stop - params.start - 1 : (stryCov_9fa48("14077"), (stryMutAct_9fa48("14078") ? params.stop + params.start : (stryCov_9fa48("14078"), params.stop - params.start)) + 1);
        if (stryMutAct_9fa48("14082") ? params.limit > 0 : stryMutAct_9fa48("14081") ? params.limit < 0 : stryMutAct_9fa48("14080") ? false : stryMutAct_9fa48("14079") ? true : (stryCov_9fa48("14079", "14080", "14081", "14082"), params.limit <= 0)) {
          if (stryMutAct_9fa48("14083")) {
            {}
          } else {
            stryCov_9fa48("14083");
            params.limit = 0;
          }
        }
        params.counts = await countSets(params.sets);
        if (stryMutAct_9fa48("14086") ? params.counts.minCount !== 0 : stryMutAct_9fa48("14085") ? false : stryMutAct_9fa48("14084") ? true : (stryCov_9fa48("14084", "14085", "14086"), params.counts.minCount === 0)) {
          if (stryMutAct_9fa48("14087")) {
            {}
          } else {
            stryCov_9fa48("14087");
            return stryMutAct_9fa48("14088") ? ["Stryker was here"] : (stryCov_9fa48("14088"), []);
          }
        }
        const simple = stryMutAct_9fa48("14091") ? params.weights.filter(w => w === 1).length === 1 || params.limit !== 0 : stryMutAct_9fa48("14090") ? false : stryMutAct_9fa48("14089") ? true : (stryCov_9fa48("14089", "14090", "14091"), (stryMutAct_9fa48("14093") ? params.weights.filter(w => w === 1).length !== 1 : stryMutAct_9fa48("14092") ? true : (stryCov_9fa48("14092", "14093"), (stryMutAct_9fa48("14094") ? params.weights.length : (stryCov_9fa48("14094"), params.weights.filter(stryMutAct_9fa48("14095") ? () => undefined : (stryCov_9fa48("14095"), w => stryMutAct_9fa48("14098") ? w !== 1 : stryMutAct_9fa48("14097") ? false : stryMutAct_9fa48("14096") ? true : (stryCov_9fa48("14096", "14097", "14098"), w === 1))).length)) === 1)) && (stryMutAct_9fa48("14100") ? params.limit === 0 : stryMutAct_9fa48("14099") ? true : (stryCov_9fa48("14099", "14100"), params.limit !== 0)));
        if (stryMutAct_9fa48("14103") ? params.counts.minCount < 25000 || simple : stryMutAct_9fa48("14102") ? false : stryMutAct_9fa48("14101") ? true : (stryCov_9fa48("14101", "14102", "14103"), (stryMutAct_9fa48("14106") ? params.counts.minCount >= 25000 : stryMutAct_9fa48("14105") ? params.counts.minCount <= 25000 : stryMutAct_9fa48("14104") ? true : (stryCov_9fa48("14104", "14105", "14106"), params.counts.minCount < 25000)) && simple)) {
          if (stryMutAct_9fa48("14107")) {
            {}
          } else {
            stryCov_9fa48("14107");
            return await intersectSingle(params);
          }
        } else if (stryMutAct_9fa48("14109") ? false : stryMutAct_9fa48("14108") ? true : (stryCov_9fa48("14108", "14109"), simple)) {
          if (stryMutAct_9fa48("14110")) {
            {}
          } else {
            stryCov_9fa48("14110");
            return await intersectBatch(params);
          }
        }
        return await intersectAggregate(params);
      }
    }
    async function intersectSingle(params) {
      if (stryMutAct_9fa48("14111")) {
        {}
      } else {
        stryCov_9fa48("14111");
        const objects = module.client.collection(stryMutAct_9fa48("14112") ? "" : (stryCov_9fa48("14112"), 'objects'));
        const sortSet = params.sets[params.weights.indexOf(1)];
        if (stryMutAct_9fa48("14115") ? sortSet !== params.counts.smallestSet : stryMutAct_9fa48("14114") ? false : stryMutAct_9fa48("14113") ? true : (stryCov_9fa48("14113", "14114", "14115"), sortSet === params.counts.smallestSet)) {
          if (stryMutAct_9fa48("14116")) {
            {}
          } else {
            stryCov_9fa48("14116");
            return await intersectBatch(params);
          }
        }
        const cursorSmall = objects.find(stryMutAct_9fa48("14117") ? {} : (stryCov_9fa48("14117"), {
          _key: params.counts.smallestSet
        }), stryMutAct_9fa48("14118") ? {} : (stryCov_9fa48("14118"), {
          projection: stryMutAct_9fa48("14119") ? {} : (stryCov_9fa48("14119"), {
            _id: 0,
            value: 1
          })
        }));
        if (stryMutAct_9fa48("14123") ? params.counts.minCount <= 1 : stryMutAct_9fa48("14122") ? params.counts.minCount >= 1 : stryMutAct_9fa48("14121") ? false : stryMutAct_9fa48("14120") ? true : (stryCov_9fa48("14120", "14121", "14122", "14123"), params.counts.minCount > 1)) {
          if (stryMutAct_9fa48("14124")) {
            {}
          } else {
            stryCov_9fa48("14124");
            cursorSmall.batchSize(stryMutAct_9fa48("14125") ? params.counts.minCount - 1 : (stryCov_9fa48("14125"), params.counts.minCount + 1));
          }
        }
        let items = await cursorSmall.toArray();
        const project = stryMutAct_9fa48("14126") ? {} : (stryCov_9fa48("14126"), {
          _id: 0,
          value: 1
        });
        if (stryMutAct_9fa48("14128") ? false : stryMutAct_9fa48("14127") ? true : (stryCov_9fa48("14127", "14128"), params.withScores)) {
          if (stryMutAct_9fa48("14129")) {
            {}
          } else {
            stryCov_9fa48("14129");
            project.score = 1;
          }
        }
        const otherSets = stryMutAct_9fa48("14130") ? params.sets : (stryCov_9fa48("14130"), params.sets.filter(stryMutAct_9fa48("14131") ? () => undefined : (stryCov_9fa48("14131"), s => stryMutAct_9fa48("14134") ? s === params.counts.smallestSet : stryMutAct_9fa48("14133") ? false : stryMutAct_9fa48("14132") ? true : (stryCov_9fa48("14132", "14133", "14134"), s !== params.counts.smallestSet))));
        // move sortSet to the end of array
        otherSets.push(otherSets.splice(otherSets.indexOf(sortSet), 1)[0]);
        for (let i = 0; stryMutAct_9fa48("14137") ? i >= otherSets.length : stryMutAct_9fa48("14136") ? i <= otherSets.length : stryMutAct_9fa48("14135") ? false : (stryCov_9fa48("14135", "14136", "14137"), i < otherSets.length); stryMutAct_9fa48("14138") ? i-- : (stryCov_9fa48("14138"), i++)) {
          if (stryMutAct_9fa48("14139")) {
            {}
          } else {
            stryCov_9fa48("14139");
            /* eslint-disable no-await-in-loop */
            const cursor = objects.find(stryMutAct_9fa48("14140") ? {} : (stryCov_9fa48("14140"), {
              _key: otherSets[i],
              value: stryMutAct_9fa48("14141") ? {} : (stryCov_9fa48("14141"), {
                $in: items.map(stryMutAct_9fa48("14142") ? () => undefined : (stryCov_9fa48("14142"), i => i.value))
              })
            }));
            cursor.batchSize(stryMutAct_9fa48("14143") ? items.length - 1 : (stryCov_9fa48("14143"), items.length + 1));
            // at the last step sort by sortSet
            if (stryMutAct_9fa48("14146") ? i !== otherSets.length - 1 : stryMutAct_9fa48("14145") ? false : stryMutAct_9fa48("14144") ? true : (stryCov_9fa48("14144", "14145", "14146"), i === (stryMutAct_9fa48("14147") ? otherSets.length + 1 : (stryCov_9fa48("14147"), otherSets.length - 1)))) {
              if (stryMutAct_9fa48("14148")) {
                {}
              } else {
                stryCov_9fa48("14148");
                stryMutAct_9fa48("14149") ? cursor.project(project).skip(params.start).limit(params.limit) : (stryCov_9fa48("14149"), cursor.project(project).sort(stryMutAct_9fa48("14150") ? {} : (stryCov_9fa48("14150"), {
                  score: params.sort
                })).skip(params.start).limit(params.limit));
              }
            } else {
              if (stryMutAct_9fa48("14151")) {
                {}
              } else {
                stryCov_9fa48("14151");
                cursor.project(stryMutAct_9fa48("14152") ? {} : (stryCov_9fa48("14152"), {
                  _id: 0,
                  value: 1
                }));
              }
            }
            items = await cursor.toArray();
          }
        }
        if (stryMutAct_9fa48("14155") ? false : stryMutAct_9fa48("14154") ? true : stryMutAct_9fa48("14153") ? params.withScores : (stryCov_9fa48("14153", "14154", "14155"), !params.withScores)) {
          if (stryMutAct_9fa48("14156")) {
            {}
          } else {
            stryCov_9fa48("14156");
            items = items.map(stryMutAct_9fa48("14157") ? () => undefined : (stryCov_9fa48("14157"), i => i.value));
          }
        }
        return items;
      }
    }
    async function intersectBatch(params) {
      if (stryMutAct_9fa48("14158")) {
        {}
      } else {
        stryCov_9fa48("14158");
        const project = stryMutAct_9fa48("14159") ? {} : (stryCov_9fa48("14159"), {
          _id: 0,
          value: 1
        });
        if (stryMutAct_9fa48("14161") ? false : stryMutAct_9fa48("14160") ? true : (stryCov_9fa48("14160", "14161"), params.withScores)) {
          if (stryMutAct_9fa48("14162")) {
            {}
          } else {
            stryCov_9fa48("14162");
            project.score = 1;
          }
        }
        const sortSet = params.sets[params.weights.indexOf(1)];
        const batchSize = 10000;
        const cursor = await (stryMutAct_9fa48("14163") ? module.client.collection('objects').find({
          _key: sortSet
        }, {
          projection: project
        }).batchSize(batchSize) : (stryCov_9fa48("14163"), module.client.collection(stryMutAct_9fa48("14164") ? "" : (stryCov_9fa48("14164"), 'objects')).find(stryMutAct_9fa48("14165") ? {} : (stryCov_9fa48("14165"), {
          _key: sortSet
        }), stryMutAct_9fa48("14166") ? {} : (stryCov_9fa48("14166"), {
          projection: project
        })).sort(stryMutAct_9fa48("14167") ? {} : (stryCov_9fa48("14167"), {
          score: params.sort
        })).batchSize(batchSize)));
        const otherSets = stryMutAct_9fa48("14168") ? params.sets : (stryCov_9fa48("14168"), params.sets.filter(stryMutAct_9fa48("14169") ? () => undefined : (stryCov_9fa48("14169"), s => stryMutAct_9fa48("14172") ? s === sortSet : stryMutAct_9fa48("14171") ? false : stryMutAct_9fa48("14170") ? true : (stryCov_9fa48("14170", "14171", "14172"), s !== sortSet))));
        let inters = stryMutAct_9fa48("14173") ? ["Stryker was here"] : (stryCov_9fa48("14173"), []);
        let done = stryMutAct_9fa48("14174") ? true : (stryCov_9fa48("14174"), false);
        while (stryMutAct_9fa48("14176") ? false : stryMutAct_9fa48("14175") ? done : (stryCov_9fa48("14175", "14176"), !done)) {
          if (stryMutAct_9fa48("14177")) {
            {}
          } else {
            stryCov_9fa48("14177");
            /* eslint-disable no-await-in-loop */
            const items = stryMutAct_9fa48("14178") ? ["Stryker was here"] : (stryCov_9fa48("14178"), []);
            while (stryMutAct_9fa48("14181") ? items.length >= batchSize : stryMutAct_9fa48("14180") ? items.length <= batchSize : stryMutAct_9fa48("14179") ? false : (stryCov_9fa48("14179", "14180", "14181"), items.length < batchSize)) {
              if (stryMutAct_9fa48("14182")) {
                {}
              } else {
                stryCov_9fa48("14182");
                const nextItem = await cursor.next();
                if (stryMutAct_9fa48("14185") ? false : stryMutAct_9fa48("14184") ? true : stryMutAct_9fa48("14183") ? nextItem : (stryCov_9fa48("14183", "14184", "14185"), !nextItem)) {
                  if (stryMutAct_9fa48("14186")) {
                    {}
                  } else {
                    stryCov_9fa48("14186");
                    done = stryMutAct_9fa48("14187") ? false : (stryCov_9fa48("14187"), true);
                    break;
                  }
                }
                items.push(nextItem);
              }
            }
            const members = await Promise.all(otherSets.map(async s => {
              if (stryMutAct_9fa48("14188")) {
                {}
              } else {
                stryCov_9fa48("14188");
                const data = await module.client.collection(stryMutAct_9fa48("14189") ? "" : (stryCov_9fa48("14189"), 'objects')).find(stryMutAct_9fa48("14190") ? {} : (stryCov_9fa48("14190"), {
                  _key: s,
                  value: stryMutAct_9fa48("14191") ? {} : (stryCov_9fa48("14191"), {
                    $in: items.map(stryMutAct_9fa48("14192") ? () => undefined : (stryCov_9fa48("14192"), i => i.value))
                  })
                }), stryMutAct_9fa48("14193") ? {} : (stryCov_9fa48("14193"), {
                  projection: stryMutAct_9fa48("14194") ? {} : (stryCov_9fa48("14194"), {
                    _id: 0,
                    value: 1
                  })
                })).batchSize(stryMutAct_9fa48("14195") ? items.length - 1 : (stryCov_9fa48("14195"), items.length + 1)).toArray();
                return new Set(data.map(stryMutAct_9fa48("14196") ? () => undefined : (stryCov_9fa48("14196"), i => i.value)));
              }
            }));
            inters = inters.concat(stryMutAct_9fa48("14197") ? items : (stryCov_9fa48("14197"), items.filter(stryMutAct_9fa48("14198") ? () => undefined : (stryCov_9fa48("14198"), item => stryMutAct_9fa48("14199") ? members.some(arr => arr.has(item.value)) : (stryCov_9fa48("14199"), members.every(stryMutAct_9fa48("14200") ? () => undefined : (stryCov_9fa48("14200"), arr => arr.has(item.value))))))));
            if (stryMutAct_9fa48("14204") ? inters.length < params.stop : stryMutAct_9fa48("14203") ? inters.length > params.stop : stryMutAct_9fa48("14202") ? false : stryMutAct_9fa48("14201") ? true : (stryCov_9fa48("14201", "14202", "14203", "14204"), inters.length >= params.stop)) {
              if (stryMutAct_9fa48("14205")) {
                {}
              } else {
                stryCov_9fa48("14205");
                done = stryMutAct_9fa48("14206") ? false : (stryCov_9fa48("14206"), true);
                inters = stryMutAct_9fa48("14207") ? inters : (stryCov_9fa48("14207"), inters.slice(params.start, stryMutAct_9fa48("14208") ? params.stop - 1 : (stryCov_9fa48("14208"), params.stop + 1)));
              }
            }
          }
        }
        if (stryMutAct_9fa48("14211") ? false : stryMutAct_9fa48("14210") ? true : stryMutAct_9fa48("14209") ? params.withScores : (stryCov_9fa48("14209", "14210", "14211"), !params.withScores)) {
          if (stryMutAct_9fa48("14212")) {
            {}
          } else {
            stryCov_9fa48("14212");
            inters = inters.map(stryMutAct_9fa48("14213") ? () => undefined : (stryCov_9fa48("14213"), item => item.value));
          }
        }
        return inters;
      }
    }
    async function intersectAggregate(params) {
      if (stryMutAct_9fa48("14214")) {
        {}
      } else {
        stryCov_9fa48("14214");
        const aggregate = {};
        if (stryMutAct_9fa48("14216") ? false : stryMutAct_9fa48("14215") ? true : (stryCov_9fa48("14215", "14216"), params.aggregate)) {
          if (stryMutAct_9fa48("14217")) {
            {}
          } else {
            stryCov_9fa48("14217");
            aggregate[stryMutAct_9fa48("14218") ? `` : (stryCov_9fa48("14218"), `$${stryMutAct_9fa48("14219") ? params.aggregate.toUpperCase() : (stryCov_9fa48("14219"), params.aggregate.toLowerCase())}`)] = stryMutAct_9fa48("14220") ? "" : (stryCov_9fa48("14220"), '$score');
          }
        } else {
          if (stryMutAct_9fa48("14221")) {
            {}
          } else {
            stryCov_9fa48("14221");
            aggregate.$sum = stryMutAct_9fa48("14222") ? "" : (stryCov_9fa48("14222"), '$score');
          }
        }
        const pipeline = stryMutAct_9fa48("14223") ? [] : (stryCov_9fa48("14223"), [stryMutAct_9fa48("14224") ? {} : (stryCov_9fa48("14224"), {
          $match: stryMutAct_9fa48("14225") ? {} : (stryCov_9fa48("14225"), {
            _key: stryMutAct_9fa48("14226") ? {} : (stryCov_9fa48("14226"), {
              $in: params.sets
            })
          })
        })]);
        params.weights.forEach((weight, index) => {
          if (stryMutAct_9fa48("14227")) {
            {}
          } else {
            stryCov_9fa48("14227");
            if (stryMutAct_9fa48("14230") ? weight === 1 : stryMutAct_9fa48("14229") ? false : stryMutAct_9fa48("14228") ? true : (stryCov_9fa48("14228", "14229", "14230"), weight !== 1)) {
              if (stryMutAct_9fa48("14231")) {
                {}
              } else {
                stryCov_9fa48("14231");
                pipeline.push(stryMutAct_9fa48("14232") ? {} : (stryCov_9fa48("14232"), {
                  $project: stryMutAct_9fa48("14233") ? {} : (stryCov_9fa48("14233"), {
                    value: 1,
                    score: stryMutAct_9fa48("14234") ? {} : (stryCov_9fa48("14234"), {
                      $cond: stryMutAct_9fa48("14235") ? {} : (stryCov_9fa48("14235"), {
                        if: stryMutAct_9fa48("14236") ? {} : (stryCov_9fa48("14236"), {
                          $eq: stryMutAct_9fa48("14237") ? [] : (stryCov_9fa48("14237"), [stryMutAct_9fa48("14238") ? "" : (stryCov_9fa48("14238"), '$_key'), params.sets[index]])
                        }),
                        then: stryMutAct_9fa48("14239") ? {} : (stryCov_9fa48("14239"), {
                          $multiply: stryMutAct_9fa48("14240") ? [] : (stryCov_9fa48("14240"), [stryMutAct_9fa48("14241") ? "" : (stryCov_9fa48("14241"), '$score'), weight])
                        }),
                        else: stryMutAct_9fa48("14242") ? "" : (stryCov_9fa48("14242"), '$score')
                      })
                    })
                  })
                }));
              }
            }
          }
        });
        pipeline.push(stryMutAct_9fa48("14243") ? {} : (stryCov_9fa48("14243"), {
          $group: stryMutAct_9fa48("14244") ? {} : (stryCov_9fa48("14244"), {
            _id: stryMutAct_9fa48("14245") ? {} : (stryCov_9fa48("14245"), {
              value: stryMutAct_9fa48("14246") ? "" : (stryCov_9fa48("14246"), '$value')
            }),
            totalScore: aggregate,
            count: stryMutAct_9fa48("14247") ? {} : (stryCov_9fa48("14247"), {
              $sum: 1
            })
          })
        }));
        pipeline.push(stryMutAct_9fa48("14248") ? {} : (stryCov_9fa48("14248"), {
          $match: stryMutAct_9fa48("14249") ? {} : (stryCov_9fa48("14249"), {
            count: params.sets.length
          })
        }));
        pipeline.push(stryMutAct_9fa48("14250") ? {} : (stryCov_9fa48("14250"), {
          $sort: stryMutAct_9fa48("14251") ? {} : (stryCov_9fa48("14251"), {
            totalScore: params.sort
          })
        }));
        if (stryMutAct_9fa48("14253") ? false : stryMutAct_9fa48("14252") ? true : (stryCov_9fa48("14252", "14253"), params.start)) {
          if (stryMutAct_9fa48("14254")) {
            {}
          } else {
            stryCov_9fa48("14254");
            pipeline.push(stryMutAct_9fa48("14255") ? {} : (stryCov_9fa48("14255"), {
              $skip: params.start
            }));
          }
        }
        if (stryMutAct_9fa48("14259") ? params.limit <= 0 : stryMutAct_9fa48("14258") ? params.limit >= 0 : stryMutAct_9fa48("14257") ? false : stryMutAct_9fa48("14256") ? true : (stryCov_9fa48("14256", "14257", "14258", "14259"), params.limit > 0)) {
          if (stryMutAct_9fa48("14260")) {
            {}
          } else {
            stryCov_9fa48("14260");
            pipeline.push(stryMutAct_9fa48("14261") ? {} : (stryCov_9fa48("14261"), {
              $limit: params.limit
            }));
          }
        }
        const project = stryMutAct_9fa48("14262") ? {} : (stryCov_9fa48("14262"), {
          _id: 0,
          value: stryMutAct_9fa48("14263") ? "" : (stryCov_9fa48("14263"), '$_id.value')
        });
        if (stryMutAct_9fa48("14265") ? false : stryMutAct_9fa48("14264") ? true : (stryCov_9fa48("14264", "14265"), params.withScores)) {
          if (stryMutAct_9fa48("14266")) {
            {}
          } else {
            stryCov_9fa48("14266");
            project.score = stryMutAct_9fa48("14267") ? "" : (stryCov_9fa48("14267"), '$totalScore');
          }
        }
        pipeline.push(stryMutAct_9fa48("14268") ? {} : (stryCov_9fa48("14268"), {
          $project: project
        }));
        let data = await module.client.collection(stryMutAct_9fa48("14269") ? "" : (stryCov_9fa48("14269"), 'objects')).aggregate(pipeline).toArray();
        if (stryMutAct_9fa48("14272") ? false : stryMutAct_9fa48("14271") ? true : stryMutAct_9fa48("14270") ? params.withScores : (stryCov_9fa48("14270", "14271", "14272"), !params.withScores)) {
          if (stryMutAct_9fa48("14273")) {
            {}
          } else {
            stryCov_9fa48("14273");
            data = data.map(stryMutAct_9fa48("14274") ? () => undefined : (stryCov_9fa48("14274"), item => item.value));
          }
        }
        return data;
      }
    }
  }
};