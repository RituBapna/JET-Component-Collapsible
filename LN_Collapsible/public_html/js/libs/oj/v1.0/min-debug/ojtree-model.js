define(["ojs/ojcore", "jquery", "ojs/ojdatacollection-common", "ojs/ojmodel"], function($oj$$30$$) {
  $oj$$30$$.$CollectionTreeDataSource$ = function $$oj$$30$$$$CollectionTreeDataSource$$($options$$305$$) {
    $options$$305$$ = $options$$305$$ || {};
    this.$rootCollection$ = $options$$305$$.root;
    this.$childCollectionCallback$ = $options$$305$$.childCollectionCallback;
    this.$parseMetadata$ = $options$$305$$.parseMetadata;
    this.$sortkey$ = null;
    this.$sortdir$ = "none";
    this.$cache$ = {};
    $oj$$30$$.$CollectionTreeDataSource$.$superclass$.constructor.call(this);
  };
  $goog$exportPath_$$("CollectionTreeDataSource", $oj$$30$$.$CollectionTreeDataSource$, $oj$$30$$);
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$parseMetadata$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$parseMetadata$$($model$$53$$) {
    return{key:$model$$53$$.idAttribute + "\x3d" + $model$$53$$.id};
  };
  $oj$$30$$.$Object$.$createSubclass$($oj$$30$$.$CollectionTreeDataSource$, $oj$$30$$.$TreeDataSource$, "oj.CollectionTreeDataSource");
  $oj$$30$$.$CollectionTreeDataSource$.prototype.Init = function $$oj$$30$$$$CollectionTreeDataSource$$$Init$() {
    $oj$$30$$.$CollectionTreeDataSource$.$superclass$.Init.call(this);
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.Init", {Init:$oj$$30$$.$CollectionTreeDataSource$.prototype.Init});
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$getChildCount$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$getChildCount$$($parent$$31$$) {
    var $childColl$$ = this.$cache$[$parent$$31$$];
    if ($childColl$$ && 0 < $childColl$$.length) {
      return $childColl$$.length;
    }
    this.$getChildCollection$($parent$$31$$, {success:function($coll$$3$$) {
      return $coll$$3$$.length;
    }});
    return-1;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getChildCount", {$getChildCount$:$oj$$30$$.$CollectionTreeDataSource$.prototype.$getChildCount$});
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$getChildCollection$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$getChildCollection$$($key$$109$$, $callbacks$$39$$) {
    this.$fetchChildren$($key$$109$$, null, {success:function($nodeSet$$33$$) {
      $callbacks$$39$$.success($nodeSet$$33$$.$collection$);
    }, error:$callbacks$$39$$.error});
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getChildCollection", {$getChildCollection$:$oj$$30$$.$CollectionTreeDataSource$.prototype.$getChildCollection$});
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$fetchChildren$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$fetchChildren$$($parent$$32$$, $range$$22$$, $callbacks$$40$$) {
    $range$$22$$ = $range$$22$$ || {};
    var $start$$31$$ = $range$$22$$.start ? $range$$22$$.start : 0, $count$$33$$ = $range$$22$$.count ? $range$$22$$.count : -1;
    if (null === $parent$$32$$) {
      this.$FetchCollection$(null, $start$$31$$, $count$$33$$, $callbacks$$40$$, null);
    } else {
      var $self$$124$$ = this;
      this.$_getModelForId$(this.$rootCollection$, $parent$$32$$, 0).then(function($collection$$32_parentModel$$) {
        $collection$$32_parentModel$$ ? ($collection$$32_parentModel$$ = $self$$124$$.$GetChildCollection$($collection$$32_parentModel$$.$model$), $self$$124$$.$FetchCollection$($collection$$32_parentModel$$, $start$$31$$, $count$$33$$, $callbacks$$40$$, $parent$$32$$)) : $callbacks$$40$$ && $callbacks$$40$$.error && $callbacks$$40$$.error($parent$$32$$);
      });
    }
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.fetchChildren", {$fetchChildren$:$oj$$30$$.$CollectionTreeDataSource$.prototype.$fetchChildren$});
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$ModelAdded$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$ModelAdded$$($event$$349_model$$54$$, $collection$$33$$, $options$$307$$) {
    var $index$$169$$ = 0;
    $options$$307$$ && $options$$307$$.at && ($index$$169$$ = $options$$307$$.at);
    $event$$349_model$$54$$ = this.$_createEvent$(this, "insert", $index$$169$$, this.$_getParentChain$($collection$$33$$), this.$_putModelInRowset$($event$$349_model$$54$$));
    this.handleEvent("insert", $event$$349_model$$54$$);
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$ModelRemoved$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$ModelRemoved$$($event$$350_model$$55$$, $collection$$34$$, $options$$308$$) {
    var $index$$170$$ = 0;
    $options$$308$$ && $options$$308$$.index && ($index$$170$$ = $options$$308$$.index);
    this.$_removeCollectionFromCache$($event$$350_model$$55$$);
    $event$$350_model$$55$$ = this.$_createEvent$(this, "delete", $index$$170$$, this.$_getParentChain$($collection$$34$$), null);
    this.handleEvent("delete", $event$$350_model$$55$$);
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$ModelUpdated$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$ModelUpdated$$($event$$351_model$$56$$) {
    var $collectionForModel$$ = this.$_getCollectionForModel$($event$$351_model$$56$$), $index$$171$$ = null, $parents$$3$$ = null;
    $collectionForModel$$ && ($index$$171$$ = $collectionForModel$$.index, $parents$$3$$ = this.$_getParentChain$($collectionForModel$$.$collection$));
    $event$$351_model$$56$$ = this.$_createEvent$(this, "update", $index$$171$$, $parents$$3$$, this.$_putModelInRowset$($event$$351_model$$56$$));
    this.handleEvent("update", $event$$351_model$$56$$);
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$CollectionRefreshed$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$CollectionRefreshed$$($collection$$35_event$$352$$) {
    $collection$$35_event$$352$$ = this.$_createEvent$(this, "refresh", null, this.$_getParentChain$($collection$$35_event$$352$$), null);
    this.handleEvent("refresh", $collection$$35_event$$352$$);
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_putModelInRowset$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_putModelInRowset$$($model$$57_rowset$$) {
    var $rows$$13$$ = [];
    $rows$$13$$.push($model$$57_rowset$$.attributes);
    var $options$$311$$ = {};
    $options$$311$$.idAttribute = $model$$57_rowset$$.idAttribute;
    $model$$57_rowset$$ = new $oj$$30$$.$ArrayRowSet$($rows$$13$$, $options$$311$$);
    $model$$57_rowset$$.fetch();
    return $model$$57_rowset$$;
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_getParentChain$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_getParentChain$$($coll$$4_collection$$36$$) {
    var $parents$$4$$ = [], $parent$$33$$ = null;
    do {
      $parent$$33$$ = this.$_getParentOfCollection$($coll$$4_collection$$36$$), null !== $parent$$33$$ && ($parent$$33$$ !== $oj$$30$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$ && $parents$$4$$.unshift($parent$$33$$), $coll$$4_collection$$36$$ = this.$_getCollectionOfKey$($parent$$33$$));
    } while (null != $parent$$33$$);
    return $parents$$4$$;
  };
  $oj$$30$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$ = "%!@ROOT%#@!";
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_getCacheKey$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_getCacheKey$$($model$$58$$) {
    var $key$$110$$ = $model$$58$$ instanceof $oj$$30$$.$Model$ ? this.$parseMetadata$($model$$58$$).key : $model$$58$$;
    return $model$$58$$ ? $key$$110$$ : $oj$$30$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$;
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$__getParentsChildCollectionFromCache$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$__getParentsChildCollectionFromCache$$($model$$59$$) {
    return this.$cache$[this.$_getCacheKey$($model$$59$$)];
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_setCollectionInCache$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_setCollectionInCache$$($model$$60$$, $collection$$37$$) {
    $collection$$37$$.on($oj$$30$$.$Events$.$EventType$.ADD, this.$ModelAdded$, this);
    $collection$$37$$.on($oj$$30$$.$Events$.$EventType$.REMOVE, this.$ModelRemoved$, this);
    $collection$$37$$.on($oj$$30$$.$Events$.$EventType$.CHANGE, this.$ModelUpdated$, this);
    $collection$$37$$.on($oj$$30$$.$Events$.$EventType$.SYNC, this.$CollectionRefreshed$, this);
    this.$cache$[this.$_getCacheKey$($model$$60$$)] = $collection$$37$$;
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_removeCollectionFromCache$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_removeCollectionFromCache$$($key$$111_model$$61$$) {
    $key$$111_model$$61$$ = this.$_getCacheKey$($key$$111_model$$61$$);
    for (var $prop$$77$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$77$$) && $prop$$77$$ === $key$$111_model$$61$$) {
        this.$cache$[$key$$111_model$$61$$].off(null, null, this);
        delete this.$cache$[$key$$111_model$$61$$];
        break;
      }
    }
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_keyInCollection$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_keyInCollection$$($key$$112$$, $collection$$38$$) {
    for (var $count$$34$$ = $collection$$38$$.length, $i$$294$$ = 0;$i$$294$$ < $count$$34$$;$i$$294$$++) {
      var $currKey$$1$$ = this.$_getCacheKey$($collection$$38$$.at($i$$294$$));
      if ($key$$112$$ === $currKey$$1$$) {
        return!0;
      }
    }
    return!1;
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_getCollectionForModel$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_getCollectionForModel$$($model$$62$$) {
    for (var $prop$$78$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$78$$)) {
        for (var $collection$$39$$ = this.$cache$[$prop$$78$$], $i$$295$$ = 0;$i$$295$$ < $collection$$39$$.length;$i$$295$$++) {
          if ($collection$$39$$.at($i$$295$$) === $model$$62$$) {
            return{index:$i$$295$$, $collection$:$collection$$39$$};
          }
        }
      }
    }
    return null;
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_getCollectionOfKey$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_getCollectionOfKey$$($key$$113$$) {
    for (var $prop$$79$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$79$$)) {
        var $collection$$40$$ = this.$cache$[$prop$$79$$];
        if (this.$_keyInCollection$($key$$113$$, $collection$$40$$)) {
          return $collection$$40$$;
        }
      }
    }
    return null;
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_getParentOfCollection$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_getParentOfCollection$$($collection$$41$$) {
    for (var $prop$$80$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$80$$) && this.$cache$[$prop$$80$$] === $collection$$41$$) {
        return $prop$$80$$;
      }
    }
    return null;
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$GetChildCollection$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$GetChildCollection$$($parentModel$$1$$) {
    var $cached$$ = !0, $collection$$42$$ = this.$__getParentsChildCollectionFromCache$($parentModel$$1$$);
    $collection$$42$$ || ($cached$$ = !1, $collection$$42$$ = this.$childCollectionCallback$(this.$rootCollection$, $parentModel$$1$$), null != $collection$$42$$ && (this.$_applySortToCollection$($collection$$42$$), this.$_setCollectionInCache$($parentModel$$1$$, $collection$$42$$)));
    return{$collection$:$collection$$42$$, $cached$:$cached$$};
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_createEvent$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_createEvent$$($source$$12$$, $operation$$5$$, $index$$172$$, $parent$$34$$, $data$$164$$) {
    return{source:$source$$12$$, operation:$operation$$5$$, index:$index$$172$$, parent:$parent$$34$$, data:$data$$164$$};
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$FetchCollection$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$FetchCollection$$($collection$$43$$, $start$$32$$, $count$$35$$, $callbacks$$41$$, $parent$$35$$) {
    var $self$$125$$ = this;
    null === $collection$$43$$ && (($collection$$43$$ = this.$__getParentsChildCollectionFromCache$(null)) ? $collection$$43$$ = {$collection$:$collection$$43$$, $cached$:!0} : ($collection$$43$$ = {$collection$:$self$$125$$.$rootCollection$, $cached$:!1}, $self$$125$$.$_setCollectionInCache$(null, this.$rootCollection$)));
    $collection$$43$$ && $self$$125$$.$_fetch$($collection$$43$$, function($coll$$5$$) {
      $callbacks$$41$$.success && $callbacks$$41$$.success($self$$125$$.$_getNodeSet$($coll$$5$$, $parent$$35$$, $start$$32$$, $count$$35$$));
    }, $callbacks$$41$$.error);
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_getNodeSet$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_getNodeSet$$($collection$$44$$, $parent$$36$$, $start$$33$$, $count$$36$$) {
    return new $oj$$30$$.$CollectionNodeSet$($parent$$36$$, $collection$$44$$, this, $start$$33$$, $count$$36$$);
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_scanForKey$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_scanForKey$$($collection$$45$$, $key$$114$$) {
    var $self$$126$$ = this;
    return $oj$$30$$.$Object$.$__getPromise$(function($resolve$$57$$) {
      function $checkNext$$($index$$173$$, $collection$$46$$, $key$$115$$) {
        $index$$173$$ < $collection$$46$$.length ? $collection$$46$$.at($index$$173$$, {deferred:!0}).then(function($model$$63$$) {
          if ($model$$63$$) {
            var $parse$$5$$ = $self$$126$$.$parseMetadata$($model$$63$$);
            if ($key$$115$$ === $parse$$5$$.key) {
              $resolve$$57$$($model$$63$$);
              return;
            }
          }
          $index$$173$$++;
          $checkNext$$($index$$173$$, $collection$$46$$, $key$$115$$);
        }) : $resolve$$57$$(null);
      }
      $checkNext$$(0, $collection$$45$$, $key$$114$$);
    });
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_getModelForId$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_getModelForId$$($collection$$47$$, $key$$116$$, $depth$$19$$) {
    var $self$$127$$ = this;
    return $oj$$30$$.$Object$.$__getPromise$(function($resolve$$58$$) {
      $self$$127$$.$_scanForKey$($collection$$47$$, $key$$116$$).then(function($model$$64$$) {
        function $getNextCollection$$($index$$174$$, $tds$$) {
          if ($index$$174$$ < $max$$7$$) {
            var $childColl$$1$$ = $tds$$.$GetChildCollection$($collection$$47$$.at($index$$174$$));
            $childColl$$1$$.$collection$ ? $tds$$.$_fetch$($childColl$$1$$, function($fetchColl$$) {
              $tds$$.$_getModelForId$($fetchColl$$, $key$$116$$, $depth$$19$$ + 1).then(function($childModel$$) {
                $childModel$$ ? $resolve$$58$$($childModel$$) : ($index$$174$$++, $getNextCollection$$($index$$174$$, $tds$$));
              });
            }, null) : ($index$$174$$++, $getNextCollection$$($index$$174$$, $tds$$));
          } else {
            $resolve$$58$$(null);
          }
        }
        if ($model$$64$$) {
          $resolve$$58$$({$model$:$model$$64$$, depth:$depth$$19$$});
        } else {
          var $max$$7$$ = $collection$$47$$.length;
          $getNextCollection$$(0, $self$$127$$);
        }
      });
    });
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_fetch$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_fetch$$($collectionCacheObj$$, $success$$21$$, $error$$27$$) {
    $collectionCacheObj$$.$cached$ ? $success$$21$$($collectionCacheObj$$.$collection$) : (this.$sortkey$ && "none" !== this.$sortkey$ && ($collectionCacheObj$$.$collection$.$comparator$ = this.$sortkey$, $collectionCacheObj$$.$collection$.$sortDirection$ = this.$sortdir$), 0 < $collectionCacheObj$$.$collection$.length ? $success$$21$$($collectionCacheObj$$.$collection$) : $collectionCacheObj$$.$collection$.fetch({success:function($fetchColl$$1$$) {
      $success$$21$$($fetchColl$$1$$);
    }, error:$error$$27$$}));
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$fetchDescendants$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$fetchDescendants$$($parent$$37$$, $callbacks$$42$$) {
    var $self$$128$$ = this;
    null === $parent$$37$$ ? this.$FetchCollection$(null, 0, -1, {success:function($nodeSet$$34$$) {
      $nodeSet$$34$$.$FetchDescendants$({success:function() {
        $callbacks$$42$$.success && $callbacks$$42$$.success($nodeSet$$34$$);
      }});
    }}, null) : this.$_getModelForId$(this.$rootCollection$, $parent$$37$$, 0).then(function($collection$$48_parentModel$$2$$) {
      $collection$$48_parentModel$$2$$ && ($collection$$48_parentModel$$2$$ = $self$$128$$.$GetChildCollection$($collection$$48_parentModel$$2$$.$model$), $self$$128$$.$FetchCollection$($collection$$48_parentModel$$2$$, 0, -1, {success:function($nodeSet$$35$$) {
        $nodeSet$$35$$.$FetchDescendants$({success:function() {
          $callbacks$$42$$.success && $callbacks$$42$$.success($nodeSet$$35$$);
        }});
      }}, $parent$$37$$));
    });
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.fetchDescendants", {$fetchDescendants$:$oj$$30$$.$CollectionTreeDataSource$.prototype.$fetchDescendants$});
  $oj$$30$$.$CollectionTreeDataSource$.prototype.sort = function $$oj$$30$$$$CollectionTreeDataSource$$$sort$($criteria$$14$$, $callbacks$$43$$) {
    var $key$$117$$ = $criteria$$14$$.key, $dir$$1$$ = $criteria$$14$$.direction, $needSort$$2$$ = !1;
    $key$$117$$ !== this.$sortkey$ && (this.$sortkey$ = $key$$117$$, $needSort$$2$$ = !0);
    $dir$$1$$ !== this.$sortdir$ && (this.$sortdir$ = $dir$$1$$, $needSort$$2$$ = !0);
    if ($needSort$$2$$) {
      "none" === this.$sortdir$ && (this.$cache$ = {});
      for (var $prop$$81$$ in this.$cache$) {
        this.$cache$.hasOwnProperty($prop$$81$$) && this.$_applySortToCollection$(this.$cache$[$prop$$81$$]);
      }
    }
    $callbacks$$43$$ && $callbacks$$43$$.success && $callbacks$$43$$.success();
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.sort", {sort:$oj$$30$$.$CollectionTreeDataSource$.prototype.sort});
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_applySortToCollection$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_applySortToCollection$$($collection$$50$$) {
    $collection$$50$$.comparator = this.$sortkey$;
    $collection$$50$$.sortDirection = "ascending" === this.$sortdir$ ? 1 : -1;
    $collection$$50$$.sort();
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$getSortCriteria$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$getSortCriteria$$() {
    return{key:this.$sortkey$, direction:this.$sortdir$};
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getSortCriteria", {$getSortCriteria$:$oj$$30$$.$CollectionTreeDataSource$.prototype.$getSortCriteria$});
  $oj$$30$$.$CollectionTreeDataSource$.prototype.move = function $$oj$$30$$$$CollectionTreeDataSource$$$move$() {
    $oj$$30$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.move", {move:$oj$$30$$.$CollectionTreeDataSource$.prototype.move});
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$moveOK$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$moveOK$$() {
    return "invalid";
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.moveOK", {$moveOK$:$oj$$30$$.$CollectionTreeDataSource$.prototype.$moveOK$});
  $oj$$30$$.$CollectionTreeDataSource$.prototype.getCapability = function $$oj$$30$$$$CollectionTreeDataSource$$$getCapability$($feature$$15$$) {
    return "sort" === $feature$$15$$ ? "default" : "move" === $feature$$15$$ ? "none" : "batchFetch" === $feature$$15$$ || "fetchDescendants" === $feature$$15$$ ? "disable" : null;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getCapability", {getCapability:$oj$$30$$.$CollectionTreeDataSource$.prototype.getCapability});
  $oj$$30$$.$CollectionNodeSet$ = function $$oj$$30$$$$CollectionNodeSet$$($parentKey$$11$$, $collection$$51$$, $treeDataSource$$2$$, $start$$34$$, $count$$37$$) {
    this.$parentKey$ = $parentKey$$11$$;
    this.$collection$ = $collection$$51$$;
    this.$childNodeSet$ = [];
    this.$treeDataSource$ = $treeDataSource$$2$$;
    this.start = $start$$34$$ < $collection$$51$$.length ? $start$$34$$ : $collection$$51$$.length - 1;
    this.count = -1 === $count$$37$$ ? $collection$$51$$.length : Math.min($collection$$51$$.length, $count$$37$$);
  };
  $goog$exportPath_$$("CollectionNodeSet", $oj$$30$$.$CollectionNodeSet$, $oj$$30$$);
  $oj$$30$$.$CollectionNodeSet$.prototype.$FetchDescendants$ = function $$oj$$30$$$$CollectionNodeSet$$$$FetchDescendants$$($callbacks$$45$$) {
    this.$_fetchDescendants$(this).then(function() {
      $callbacks$$45$$.success && $callbacks$$45$$.success();
    });
  };
  $oj$$30$$.$CollectionNodeSet$.prototype.$_fetchDescendants$ = function $$oj$$30$$$$CollectionNodeSet$$$$_fetchDescendants$$($nodeSet$$36$$) {
    return $oj$$30$$.$Object$.$__getPromise$(function($resolve$$59$$) {
      function $nextNode$$($index$$175$$) {
        $index$$175$$ < $count$$38$$ ? $nodeSet$$36$$.$FetchChildNodeSet$($index$$175$$, {success:function($childNodeSet$$1$$) {
          null !== $childNodeSet$$1$$ ? $nodeSet$$36$$.$_fetchDescendants$($childNodeSet$$1$$).then(function() {
            $nextNode$$($index$$175$$ + 1);
          }) : $nextNode$$($index$$175$$ + 1);
        }}) : $resolve$$59$$();
      }
      var $count$$38$$ = $nodeSet$$36$$.$getCount$();
      $nextNode$$(0);
    });
  };
  $oj$$30$$.$CollectionNodeSet$.prototype.$FetchChildNodeSet$ = function $$oj$$30$$$$CollectionNodeSet$$$$FetchChildNodeSet$$($index$$176$$, $callbacks$$46$$) {
    var $model$$65_parentKey$$12$$ = this.$collection$.at($index$$176$$);
    if (this.$treeDataSource$.$parseMetadata$($model$$65_parentKey$$12$$).leaf) {
      this.$childNodeSet$[$index$$176$$] = null, $callbacks$$46$$.success(null);
    } else {
      var $collection$$52$$ = this.$treeDataSource$.$GetChildCollection$($model$$65_parentKey$$12$$), $model$$65_parentKey$$12$$ = this.$treeDataSource$.$parseMetadata$($model$$65_parentKey$$12$$).key, $self$$129$$ = this;
      this.$treeDataSource$.$FetchCollection$($collection$$52$$, 0, -1, {success:function($nodeSet$$37$$) {
        $self$$129$$.$childNodeSet$[$index$$176$$] = $nodeSet$$37$$;
        $callbacks$$46$$.success($nodeSet$$37$$);
      }}, $model$$65_parentKey$$12$$);
    }
  };
  $oj$$30$$.$CollectionNodeSet$.prototype.getParent = function $$oj$$30$$$$CollectionNodeSet$$$getParent$() {
    return this.$parentKey$;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getParent", {getParent:$oj$$30$$.$CollectionNodeSet$.prototype.getParent});
  $oj$$30$$.$CollectionNodeSet$.prototype.$getStart$ = function $$oj$$30$$$$CollectionNodeSet$$$$getStart$$() {
    return this.start;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getStart", {$getStart$:$oj$$30$$.$CollectionNodeSet$.prototype.$getStart$});
  $oj$$30$$.$CollectionNodeSet$.prototype.$getCount$ = function $$oj$$30$$$$CollectionNodeSet$$$$getCount$$() {
    return this.count;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getCount", {$getCount$:$oj$$30$$.$CollectionNodeSet$.prototype.$getCount$});
  $oj$$30$$.$CollectionNodeSet$.prototype.getData = function $$oj$$30$$$$CollectionNodeSet$$$getData$($index$$177$$) {
    this.$_checkRange$($index$$177$$);
    return this.$collection$.at($index$$177$$).attributes;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getData", {getData:$oj$$30$$.$CollectionNodeSet$.prototype.getData});
  $oj$$30$$.$CollectionNodeSet$.prototype.$_checkRange$ = function $$oj$$30$$$$CollectionNodeSet$$$$_checkRange$$($index$$178$$) {
    if ($index$$178$$ < this.start || $index$$178$$ > this.start + this.count) {
      throw "Out of range";
    }
  };
  $oj$$30$$.$CollectionNodeSet$.prototype.getMetadata = function $$oj$$30$$$$CollectionNodeSet$$$getMetadata$($index$$179_model$$66_parse$$7$$) {
    this.$_checkRange$($index$$179_model$$66_parse$$7$$);
    var $metadata$$11$$ = {};
    $index$$179_model$$66_parse$$7$$ = this.$collection$.at($index$$179_model$$66_parse$$7$$);
    $index$$179_model$$66_parse$$7$$ = this.$treeDataSource$.$parseMetadata$($index$$179_model$$66_parse$$7$$);
    $metadata$$11$$.key = $index$$179_model$$66_parse$$7$$.key;
    $metadata$$11$$.leaf = $index$$179_model$$66_parse$$7$$.leaf;
    $metadata$$11$$.depth = $index$$179_model$$66_parse$$7$$.depth;
    return $metadata$$11$$;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getMetadata", {getMetadata:$oj$$30$$.$CollectionNodeSet$.prototype.getMetadata});
  $oj$$30$$.$CollectionNodeSet$.prototype.$getChildNodeSet$ = function $$oj$$30$$$$CollectionNodeSet$$$$getChildNodeSet$$($index$$180$$) {
    this.$_checkRange$($index$$180$$);
    return this.$childNodeSet$[$index$$180$$];
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getChildNodeSet", {$getChildNodeSet$:$oj$$30$$.$CollectionNodeSet$.prototype.$getChildNodeSet$});
});
