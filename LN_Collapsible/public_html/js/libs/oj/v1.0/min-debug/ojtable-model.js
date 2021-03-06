/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojs/ojmodel", "ojs/ojdatacollection-common", "ojs/ojtable"], function($oj$$15$$, $$$$15$$) {
  $oj$$15$$.$ModelRow$ = function $$oj$$15$$$$ModelRow$$($model$$50$$, $options$$278$$) {
    $oj$$15$$.$ModelRow$._init(this, $model$$50$$, $options$$278$$, null);
  };
  $goog$exportPath_$$("ModelRow", $oj$$15$$.$ModelRow$, $oj$$15$$);
  $oj$$15$$.$Object$.$createSubclass$($oj$$15$$.$ModelRow$, $oj$$15$$.$Row$, "ModelRow.ModelRow");
  $oj$$15$$.$ModelRow$.prototype.Init = function $$oj$$15$$$$ModelRow$$$Init$() {
    $oj$$15$$.$Row$.$superclass$.Init.call(this);
  };
  $oj$$15$$.$ModelRow$.prototype.attributes = {};
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.attributes", {attributes:$oj$$15$$.$ModelRow$.prototype.attributes});
  $oj$$15$$.$ModelRow$.prototype.id = null;
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.id", {id:$oj$$15$$.$ModelRow$.prototype.id});
  $oj$$15$$.$ModelRow$.prototype.$idAttribute$ = null;
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.idAttribute", {$idAttribute$:$oj$$15$$.$ModelRow$.prototype.$idAttribute$});
  $oj$$15$$.$ModelRow$._init = function $$oj$$15$$$$ModelRow$$_init$($row$$49$$, $model$$51$$, $options$$279$$, $properties$$11$$) {
    var $prop$$73$$ = null;
    $row$$49$$.Init();
    $row$$49$$.$_model$ = $model$$51$$;
    $row$$49$$.id = $model$$51$$.id;
    $row$$49$$.$idAttribute$ = $model$$51$$.$idAttribute$;
    $row$$49$$.attributes = $model$$51$$.attributes;
    $row$$49$$.index = $model$$51$$.index;
    $options$$279$$ = $options$$279$$ || {};
    for ($prop$$73$$ in $properties$$11$$) {
      $properties$$11$$.hasOwnProperty($prop$$73$$) && ($row$$49$$[$prop$$73$$] = $properties$$11$$[$prop$$73$$]);
    }
    $row$$49$$.context = $options$$279$$.context;
  };
  $oj$$15$$.$ModelRow$.prototype.clone = function $$oj$$15$$$$ModelRow$$$clone$() {
    return this.$_model$.clone();
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.clone", {clone:$oj$$15$$.$ModelRow$.prototype.clone});
  $oj$$15$$.$ModelRow$.prototype.get = function $$oj$$15$$$$ModelRow$$$get$($property$$25$$) {
    return this.$_model$.get($property$$25$$);
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.get", {get:$oj$$15$$.$ModelRow$.prototype.get});
  $oj$$15$$.$ModelRow$.prototype.$getModel$ = function $$oj$$15$$$$ModelRow$$$$getModel$$() {
    return this.$_model$;
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.getModel", {$getModel$:$oj$$15$$.$ModelRow$.prototype.$getModel$});
  $oj$$15$$.$ModelRow$.prototype.set = function $$oj$$15$$$$ModelRow$$$set$($property$$26$$, $value$$186$$, $options$$280$$) {
    return this.$_model$.set($property$$26$$, $value$$186$$, $options$$280$$);
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.set", {set:$oj$$15$$.$ModelRow$.prototype.set});
  $oj$$15$$.$ModelRow$.prototype.keys = function $$oj$$15$$$$ModelRow$$$keys$() {
    return this.$_model$.keys();
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.keys", {keys:$oj$$15$$.$ModelRow$.prototype.keys});
  $oj$$15$$.$ModelRow$.prototype.values = function $$oj$$15$$$$ModelRow$$$values$() {
    return this.$_model$.values();
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.values", {values:$oj$$15$$.$ModelRow$.prototype.values});
  $oj$$15$$.$ModelRow$.prototype.pairs = function $$oj$$15$$$$ModelRow$$$pairs$() {
    return this.$_model$.pairs();
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.pairs", {pairs:$oj$$15$$.$ModelRow$.prototype.pairs});
  $oj$$15$$.$CollectionRowSet$ = function $$oj$$15$$$$CollectionRowSet$$($collection$$27$$, $options$$281$$) {
    $oj$$15$$.$CollectionRowSet$._init(this, $collection$$27$$, $options$$281$$, null);
  };
  $goog$exportPath_$$("CollectionRowSet", $oj$$15$$.$CollectionRowSet$, $oj$$15$$);
  $oj$$15$$.$CollectionRowSet$.prototype.$comparator$ = null;
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.comparator", {$comparator$:$oj$$15$$.$CollectionRowSet$.prototype.$comparator$});
  $oj$$15$$.$CollectionRowSet$.prototype.$sortDirection$ = null;
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.sortDirection", {$sortDirection$:$oj$$15$$.$CollectionRowSet$.prototype.$sortDirection$});
  $oj$$15$$.$CollectionRowSet$.prototype.$sortSupported$ = !0;
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.sortSupported", {$sortSupported$:$oj$$15$$.$CollectionRowSet$.prototype.$sortSupported$});
  $oj$$15$$.$Object$.$createSubclass$($oj$$15$$.$CollectionRowSet$, $oj$$15$$.$RowSet$, "CollectionRowSet.CollectionRowSet");
  $oj$$15$$.$CollectionRowSet$.prototype.Init = function $$oj$$15$$$$CollectionRowSet$$$Init$() {
    $oj$$15$$.$CollectionRowSet$.$superclass$.Init.call(this);
  };
  $oj$$15$$.$CollectionRowSet$._init = function $$oj$$15$$$$CollectionRowSet$$_init$($rowSet$$6$$, $collection$$28$$, $options$$282$$, $properties$$12$$) {
    var $prop$$74$$;
    $rowSet$$6$$.$_eventHandlers$ = [];
    $rowSet$$6$$.$_startIndex$ = 0;
    $rowSet$$6$$.Init();
    if ($properties$$12$$) {
      for ($prop$$74$$ in $properties$$12$$) {
        $properties$$12$$.hasOwnProperty($prop$$74$$) && ($rowSet$$6$$[$prop$$74$$] = $properties$$12$$[$prop$$74$$]);
      }
    }
    $rowSet$$6$$.$_collection$ = $collection$$28$$;
    $rowSet$$6$$.$_addCollectionEventListeners$();
  };
  $oj$$15$$.$CollectionRowSet$.prototype.at = function $$oj$$15$$$$CollectionRowSet$$$at$($index$$154$$, $options$$283$$) {
    var $model$$52$$ = this.$_collection$.at($index$$154$$, $options$$283$$);
    return null != $model$$52$$ ? $model$$52$$ instanceof $oj$$15$$.$Model$ ? new $oj$$15$$.$ModelRow$($model$$52$$) : $oj$$15$$.$Object$.$__getPromise$(function($resolve$$52$$) {
      $model$$52$$.then(function($resolvedModel$$1$$) {
        $resolve$$52$$(new $oj$$15$$.$ModelRow$($resolvedModel$$1$$));
      });
    }) : null;
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.at", {at:$oj$$15$$.$CollectionRowSet$.prototype.at});
  $oj$$15$$.$CollectionRowSet$.prototype.fetch = function $$oj$$15$$$$CollectionRowSet$$$fetch$($options$$284$$) {
    if (this.$_canFetch$.call(this)) {
      this.$_startFetch$.call(this);
      $options$$284$$ = $options$$284$$ || {};
      var $self$$97$$ = this, $isPaged$$ = null != $options$$284$$.startIndex ? !0 : !1;
      this.$_startIndex$ = $isPaged$$ ? $options$$284$$.startIndex : 0;
      this.$_initFetch$ = !0;
      var $pageSize$$5$$ = 0 < $options$$284$$.pageSize ? $options$$284$$.pageSize : -1;
      $options$$284$$.pageSize = $pageSize$$5$$;
      $options$$284$$.startIndex = this.$_startIndex$;
      $options$$284$$.refresh = !0;
      $isPaged$$ ? this.$_collection$.$setRangeLocal$(this.$_startIndex$, $pageSize$$5$$).then(function() {
        $self$$97$$.$_endFetch$.call($self$$97$$, $options$$284$$, null);
      }) : this.$_collection$.fetch({success:function($collection$$29$$) {
        $self$$97$$.$_collection$ = $collection$$29$$;
        $self$$97$$.$_endFetch$.call($self$$97$$, $options$$284$$, null);
      }, error:function($collection$$30$$, $e$$85$$) {
        $self$$97$$.$_collection$ = $collection$$30$$;
        $self$$97$$.$_endFetch$.call($self$$97$$, $options$$284$$, $e$$85$$);
      }});
    }
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.fetch", {fetch:$oj$$15$$.$CollectionRowSet$.prototype.fetch});
  $oj$$15$$.$CollectionRowSet$.prototype.get = function $$oj$$15$$$$CollectionRowSet$$$get$($id$$27$$, $options$$285$$) {
    return new $oj$$15$$.$ModelRow$(this.$_collection$.get($id$$27$$, $options$$285$$));
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.get", {get:$oj$$15$$.$CollectionRowSet$.prototype.get});
  $oj$$15$$.$CollectionRowSet$.prototype.getCollection = function $$oj$$15$$$$CollectionRowSet$$$getCollection$() {
    return this.$_collection$;
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.getCollection", {getCollection:$oj$$15$$.$CollectionRowSet$.prototype.getCollection});
  $oj$$15$$.$CollectionRowSet$.prototype.hasMore = function $$oj$$15$$$$CollectionRowSet$$$hasMore$() {
    return this.$_collection$.hasMore;
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.hasMore", {hasMore:$oj$$15$$.$CollectionRowSet$.prototype.hasMore});
  $oj$$15$$.$CollectionRowSet$.prototype.indexOf = function $$oj$$15$$$$CollectionRowSet$$$indexOf$($row$$50$$, $options$$286$$) {
    return this.$_collection$.indexOf($row$$50$$.$getModel$(), $options$$286$$);
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.indexOf", {indexOf:$oj$$15$$.$CollectionRowSet$.prototype.indexOf});
  $oj$$15$$.$CollectionRowSet$.prototype.isEmpty = function $$oj$$15$$$$CollectionRowSet$$$isEmpty$() {
    return this.$_collection$.isEmpty();
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.isEmpty", {isEmpty:$oj$$15$$.$CollectionRowSet$.prototype.isEmpty});
  $oj$$15$$.$CollectionRowSet$.prototype.size = function $$oj$$15$$$$CollectionRowSet$$$size$() {
    var $size$$11$$ = this.$_collection$.size();
    return this.$_initFetch$ || this.$_collection$.$isRangeLocal$(0, $size$$11$$) ? $size$$11$$ : 0;
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.size", {size:$oj$$15$$.$CollectionRowSet$.prototype.size});
  $oj$$15$$.$CollectionRowSet$.prototype.sort = function $$oj$$15$$$$CollectionRowSet$$$sort$() {
    this.comparator && (this.$_collection$.comparator = this.comparator);
    this.sortDirection && (this.$_collection$.sortDirection = "ascending" === this.sortDirection ? 1 : -1);
    return this.$_collection$.sort(null);
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.sort", {sort:$oj$$15$$.$CollectionRowSet$.prototype.sort});
  $oj$$15$$.$CollectionRowSet$.prototype.totalSize = function $$oj$$15$$$$CollectionRowSet$$$totalSize$() {
    return this.$_collection$.totalResults;
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.totalSize", {totalSize:$oj$$15$$.$CollectionRowSet$.prototype.totalSize});
  $oj$$15$$.$CollectionRowSet$.prototype.$SetComparator$ = function $$oj$$15$$$$CollectionRowSet$$$$SetComparator$$($criteria$$12_direction$$8$$) {
    if (null == $criteria$$12_direction$$8$$) {
      this.comparator = null, this.$_collection$.comparator = null;
    } else {
      var $key$$80$$ = $criteria$$12_direction$$8$$.key;
      $criteria$$12_direction$$8$$ = $criteria$$12_direction$$8$$.direction;
      var $comparator$$14$$ = null;
      this.$_collection$.$__isVirtual$() ? (this.comparator = $key$$80$$, this.sortDirection = $criteria$$12_direction$$8$$) : ("ascending" == $criteria$$12_direction$$8$$ ? $comparator$$14$$ = function $$comparator$$14$$$($row$$51$$) {
        return $$$$15$$.isFunction($row$$51$$.get) ? $row$$51$$.get($key$$80$$) : $row$$51$$[$key$$80$$]();
      } : "descending" == $criteria$$12_direction$$8$$ && ($comparator$$14$$ = function $$comparator$$14$$$($rowA$$1$$, $rowB$$1$$) {
        var $a$$76$$, $b$$49$$;
        $$$$15$$.isFunction($rowA$$1$$.get) ? ($a$$76$$ = $rowA$$1$$.get($key$$80$$), $b$$49$$ = $rowB$$1$$.get($key$$80$$)) : ($a$$76$$ = $rowA$$1$$[$key$$80$$](), $b$$49$$ = $rowB$$1$$[$key$$80$$]());
        return $a$$76$$ === $b$$49$$ ? 0 : $a$$76$$ > $b$$49$$ ? -1 : 1;
      }), this.comparator = $comparator$$14$$);
    }
  };
  $oj$$15$$.$CollectionRowSet$.prototype.$_addCollectionEventListeners$ = function $$oj$$15$$$$CollectionRowSet$$$$_addCollectionEventListeners$$() {
    var $self$$98$$ = this;
    this.$_collection$.on($oj$$15$$.$Events$.$EventType$.SYNC, function($event$$179$$) {
      $oj$$15$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call($self$$98$$, $oj$$15$$.$RowSet$.$EventType$.SYNC, $event$$179$$);
    });
    this.$_collection$.on($oj$$15$$.$Events$.$EventType$.ADD, function($event$$180$$) {
      $oj$$15$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call($self$$98$$, $oj$$15$$.$RowSet$.$EventType$.ADD, new $oj$$15$$.$ModelRow$($event$$180$$));
    });
    this.$_collection$.on($oj$$15$$.$Events$.$EventType$.REMOVE, function($event$$181$$) {
      $oj$$15$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call($self$$98$$, $oj$$15$$.$RowSet$.$EventType$.REMOVE, new $oj$$15$$.$ModelRow$($event$$181$$));
    });
    this.$_collection$.on($oj$$15$$.$Events$.$EventType$.RESET, function($event$$182$$) {
      $oj$$15$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call($self$$98$$, $oj$$15$$.$RowSet$.$EventType$.RESET, $event$$182$$);
    });
    this.$_collection$.on($oj$$15$$.$Events$.$EventType$.SORT, function($event$$183$$, $eventOpts$$1$$) {
      null != $eventOpts$$1$$ && $eventOpts$$1$$.add || $oj$$15$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call($self$$98$$, $oj$$15$$.$RowSet$.$EventType$.SORT, $event$$183$$);
    });
    this.$_collection$.on($oj$$15$$.$Events$.$EventType$.CHANGE, function($event$$184$$) {
      $oj$$15$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call($self$$98$$, $oj$$15$$.$RowSet$.$EventType$.CHANGE, new $oj$$15$$.$ModelRow$($event$$184$$));
    });
    this.$_collection$.on($oj$$15$$.$Events$.$EventType$.DESTROY, function($event$$185$$) {
      $oj$$15$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call($self$$98$$, $oj$$15$$.$RowSet$.$EventType$.REMOVE, $event$$185$$);
    });
    this.$_collection$.on($oj$$15$$.$Events$.$EventType$.REFRESH, function($event$$186$$) {
      $oj$$15$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call($self$$98$$, $oj$$15$$.$RowSet$.$EventType$.REFRESH, $event$$186$$);
    });
    this.$_collection$.on($oj$$15$$.$Events$.$EventType$.ERROR, function($event$$187$$) {
      $oj$$15$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call($self$$98$$, $oj$$15$$.$RowSet$.$EventType$.ERROR, $event$$187$$);
      $self$$98$$.$_endFetch$.call($self$$98$$, null, null);
    });
  };
  $oj$$15$$.$CollectionRowSet$.prototype.$_canFetch$ = function $$oj$$15$$$$CollectionRowSet$$$$_canFetch$$() {
    return!this.$_isFetching$;
  };
  $oj$$15$$.$CollectionRowSet$.prototype.$_startFetch$ = function $$oj$$15$$$$CollectionRowSet$$$$_startFetch$$() {
    this.$_isFetching$ = !0;
    $oj$$15$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$15$$.$RowSet$.$EventType$.REQUEST, null);
  };
  $oj$$15$$.$CollectionRowSet$.prototype.$_endFetch$ = function $$oj$$15$$$$CollectionRowSet$$$$_endFetch$$($options$$287$$, $e$$86$$) {
    $options$$287$$ = $options$$287$$ || {};
    var $success$$19$$ = $options$$287$$.success, $error$$25$$ = $options$$287$$.error;
    this.$_isFetching$ = !1;
    null != $e$$86$$ ? ($oj$$15$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$15$$.$RowSet$.$EventType$.ERROR, $e$$86$$), $error$$25$$ && $error$$25$$.call(this, $options$$287$$, $e$$86$$)) : ($oj$$15$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$15$$.$RowSet$.$EventType$.SYNC, $options$$287$$), $success$$19$$ && $success$$19$$.call(this, $options$$287$$));
  };
  $oj$$15$$.$CollectionTableDataSource$ = function $$oj$$15$$$$CollectionTableDataSource$$($data$$131$$, $options$$288$$) {
    this.data = {};
    if (!($data$$131$$ instanceof $oj$$15$$.$Collection$)) {
      throw Error($oj$$15$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_SUMMARY + "\n" + $oj$$15$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_DETAIL);
    }
    $oj$$15$$.$CollectionTableDataSource$.$superclass$.constructor.call(this, $data$$131$$, $options$$288$$);
    this.$_rowSet$ = new $oj$$15$$.$CollectionRowSet$($data$$131$$, this.options);
    this.$_addRowSetEventListeners$();
    this.Init();
    if (null != $options$$288$$ && ("enabled" == $options$$288$$.startFetch || null == $options$$288$$.startFetch) || null == $options$$288$$) {
      this.$_startFetchEnabled$ = !0;
    }
  };
  $goog$exportPath_$$("CollectionTableDataSource", $oj$$15$$.$CollectionTableDataSource$, $oj$$15$$);
  $oj$$15$$.$Object$.$createSubclass$($oj$$15$$.$CollectionTableDataSource$, $oj$$15$$.$TableDataSource$, "oj.CollectionTableDataSource");
  $oj$$15$$.$CollectionTableDataSource$.prototype.Init = function $$oj$$15$$$$CollectionTableDataSource$$$Init$() {
    $oj$$15$$.$CollectionTableDataSource$.$superclass$.Init.call(this);
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.Init", {Init:$oj$$15$$.$CollectionTableDataSource$.prototype.Init});
  $oj$$15$$.$CollectionTableDataSource$.prototype.at = function $$oj$$15$$$$CollectionTableDataSource$$$at$($index$$155$$) {
    return this.$_rowSet$.at($index$$155$$);
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.at", {at:$oj$$15$$.$CollectionTableDataSource$.prototype.at});
  $oj$$15$$.$CollectionTableDataSource$.prototype.fetch = function $$oj$$15$$$$CollectionTableDataSource$$$fetch$($options$$289$$) {
    $options$$289$$ = $options$$289$$ || {};
    var $self$$99$$ = this, $success$$20$$ = $options$$289$$.success, $error$$26$$ = $options$$289$$.error, $context$$43$$ = null == $options$$289$$.context ? this : $options$$289$$.context;
    if ("init" == $options$$289$$.fetchType && !this.$_startFetchEnabled$) {
      return $oj$$15$$.$Object$.$__getPromise$(function($resolve$$53$$) {
        $resolve$$53$$();
      });
    }
    null != $options$$289$$.startIndex && $oj$$15$$.$CollectionTableDataSource$.$superclass$.startIndex.call(this, $options$$289$$.startIndex);
    return $oj$$15$$.$Object$.$__getPromise$(function($resolve$$54$$, $reject$$54$$) {
      $options$$289$$.success = function $$options$$289$$$success$() {
        null != $success$$20$$ && $success$$20$$.call($context$$43$$, $self$$99$$, $options$$289$$);
        $resolve$$54$$();
      };
      $options$$289$$.error = function $$options$$289$$$error$($options$$290$$, $e$$87$$) {
        null != $error$$26$$ && $error$$26$$.call($context$$43$$, $self$$99$$, $options$$290$$, $e$$87$$);
        $reject$$54$$();
      };
      "enabled" == $options$$289$$.startFetch ? ($self$$99$$.$_rowSet$.isEmpty() || "undefined" === typeof $self$$99$$.$_rowSet$.size()) && $self$$99$$.$_rowSet$.fetch($options$$289$$) : $self$$99$$.$_rowSet$.fetch($options$$289$$);
    });
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.fetch", {fetch:$oj$$15$$.$CollectionTableDataSource$.prototype.fetch});
  $oj$$15$$.$CollectionTableDataSource$.prototype.get = function $$oj$$15$$$$CollectionTableDataSource$$$get$($id$$28$$) {
    return this.$_rowSet$.get($id$$28$$);
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.get", {get:$oj$$15$$.$CollectionTableDataSource$.prototype.get});
  $oj$$15$$.$CollectionTableDataSource$.prototype.hasMore = function $$oj$$15$$$$CollectionTableDataSource$$$hasMore$() {
    return null != this.$_rowSet$ ? this.$_rowSet$.hasMore() : !1;
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.hasMore", {hasMore:$oj$$15$$.$CollectionTableDataSource$.prototype.hasMore});
  $oj$$15$$.$CollectionTableDataSource$.prototype.indexOf = function $$oj$$15$$$$CollectionTableDataSource$$$indexOf$($row$$52$$) {
    return this.$_rowSet$.indexOf($row$$52$$);
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.indexOf", {indexOf:$oj$$15$$.$CollectionTableDataSource$.prototype.indexOf});
  $oj$$15$$.$CollectionTableDataSource$.prototype.size = function $$oj$$15$$$$CollectionTableDataSource$$$size$() {
    return this.$_rowSet$.size();
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.size", {size:$oj$$15$$.$CollectionTableDataSource$.prototype.size});
  $oj$$15$$.$CollectionTableDataSource$.prototype.sort = function $$oj$$15$$$$CollectionTableDataSource$$$sort$($criteria$$13$$) {
    this.$_rowSet$.$SetComparator$($criteria$$13$$);
    if (null == $criteria$$13$$) {
      return $oj$$15$$.$Object$.$__getPromise$(function($resolve$$55$$) {
        $resolve$$55$$();
      });
    }
    var $self$$100$$ = this;
    return $oj$$15$$.$Object$.$__getPromise$(function($resolve$$56$$) {
      $self$$100$$.$_rowSet$.sort();
      $resolve$$56$$();
    });
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.sort", {sort:$oj$$15$$.$CollectionTableDataSource$.prototype.sort});
  $oj$$15$$.$CollectionTableDataSource$.prototype.totalSize = function $$oj$$15$$$$CollectionTableDataSource$$$totalSize$() {
    return this.$_rowSet$.totalSize();
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.totalSize", {totalSize:$oj$$15$$.$CollectionTableDataSource$.prototype.totalSize});
  $oj$$15$$.$CollectionTableDataSource$.prototype.$_addRowSetEventListeners$ = function $$oj$$15$$$$CollectionTableDataSource$$$$_addRowSetEventListeners$$() {
    var $self$$101$$ = this;
    this.$_rowSet$.on($oj$$15$$.$RowSet$.$EventType$.ADD, function($event$$188$$) {
      $self$$101$$.$isFetching$ = !1;
      $oj$$15$$.$TableDataSource$.$superclass$.handleEvent.call($self$$101$$, $oj$$15$$.$TableDataSource$.$EventType$.ADD, $event$$188$$);
    });
    this.$_rowSet$.on($oj$$15$$.$RowSet$.$EventType$.REMOVE, function($event$$189$$) {
      $self$$101$$.$isFetching$ = !1;
      $oj$$15$$.$TableDataSource$.$superclass$.handleEvent.call($self$$101$$, $oj$$15$$.$TableDataSource$.$EventType$.REMOVE, $event$$189$$);
    });
    this.$_rowSet$.on($oj$$15$$.$RowSet$.$EventType$.REQUEST, function($event$$190$$) {
      $self$$101$$.$isFetching$ = !0;
      $oj$$15$$.$TableDataSource$.$superclass$.handleEvent.call($self$$101$$, $oj$$15$$.$TableDataSource$.$EventType$.REQUEST, $event$$190$$);
    });
    this.$_rowSet$.on($oj$$15$$.$RowSet$.$EventType$.RESET, function($event$$191$$) {
      $self$$101$$.$isFetching$ = !1;
      $oj$$15$$.$TableDataSource$.$superclass$.handleEvent.call($self$$101$$, $oj$$15$$.$TableDataSource$.$EventType$.RESET, $event$$191$$);
    });
    this.$_rowSet$.on($oj$$15$$.$RowSet$.$EventType$.REFRESH, function($event$$192$$) {
      $self$$101$$.$isFetching$ = !1;
      $oj$$15$$.$TableDataSource$.$superclass$.handleEvent.call($self$$101$$, $oj$$15$$.$TableDataSource$.$EventType$.REFRESH, $event$$192$$);
    });
    this.$_rowSet$.on($oj$$15$$.$RowSet$.$EventType$.SORT, function($event$$193$$) {
      $self$$101$$.$isFetching$ = !1;
      $oj$$15$$.$TableDataSource$.$superclass$.handleEvent.call($self$$101$$, $oj$$15$$.$TableDataSource$.$EventType$.SORT, $event$$193$$);
    });
    this.$_rowSet$.on($oj$$15$$.$RowSet$.$EventType$.CHANGE, function($event$$194$$) {
      $self$$101$$.$isFetching$ = !1;
      $oj$$15$$.$TableDataSource$.$superclass$.handleEvent.call($self$$101$$, $oj$$15$$.$TableDataSource$.$EventType$.CHANGE, $event$$194$$);
    });
    this.$_rowSet$.on($oj$$15$$.$RowSet$.$EventType$.SYNC, function($event$$195$$) {
      $self$$101$$.$isFetching$ = !1;
      $oj$$15$$.$TableDataSource$.$superclass$.handleEvent.call($self$$101$$, $oj$$15$$.$TableDataSource$.$EventType$.SYNC, $event$$195$$);
    });
    this.$_rowSet$.on($oj$$15$$.$RowSet$.$EventType$.ERROR, function($event$$196$$) {
      $self$$101$$.$isFetching$ = !1;
      $oj$$15$$.$TableDataSource$.$superclass$.handleEvent.call($self$$101$$, $oj$$15$$.$TableDataSource$.$EventType$.ERROR, $event$$196$$);
    });
  };
});
