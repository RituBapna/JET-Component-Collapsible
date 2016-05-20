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
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define("ojs/ojcore jquery ojs/ojcomponentcore promise ojs/ojmenu ojs/ojdatacollection-common ojs/ojpagingcontrol".split(" "), function($oj$$14$$, $$$$14$$) {
  $oj$$14$$.$FlattenedTreeRowSet$ = function $$oj$$14$$$$FlattenedTreeRowSet$$($data$$100$$, $options$$247$$) {
    $oj$$14$$.$FlattenedTreeRowSet$._init(this, $data$$100$$, $options$$247$$);
  };
  $goog$exportPath_$$("FlattenedTreeRowSet", $oj$$14$$.$FlattenedTreeRowSet$, $oj$$14$$);
  $oj$$14$$.$Object$.$createSubclass$($oj$$14$$.$FlattenedTreeRowSet$, $oj$$14$$.$RowSet$, "oj.FlattenedTreeRowSet");
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.Init = function $$oj$$14$$$$FlattenedTreeRowSet$$$Init$() {
    $oj$$14$$.$FlattenedTreeRowSet$.$superclass$.Init.call(this);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.Init", {Init:$oj$$14$$.$FlattenedTreeRowSet$.prototype.Init});
  $oj$$14$$.$FlattenedTreeRowSet$._init = function $$oj$$14$$$$FlattenedTreeRowSet$$_init$($rowSet$$4$$, $data$$101$$) {
    $rowSet$$4$$.$_eventHandlers$ = [];
    $rowSet$$4$$.$_startIndex$ = 0;
    $rowSet$$4$$.Init();
    $rowSet$$4$$.$_data$ = $data$$101$$;
    null == $rowSet$$4$$.$_data$.$getOption$("fetchSize") && ($rowSet$$4$$.$_data$.$getFetchSize$ = function $$rowSet$$4$$$$_data$$$getFetchSize$$() {
      return-1;
    });
    $rowSet$$4$$.$_data$.$insertRows$ = function $$rowSet$$4$$$$_data$$$insertRows$$($insertAtIndex$$2$$, $i$$183_insertAtKey$$1$$, $nodeSet$$28$$) {
      var $row$$23$$, $rowIdx$$1$$;
      for ($i$$183_insertAtKey$$1$$ = 0;$i$$183_insertAtKey$$1$$ < $nodeSet$$28$$.$getCount$();$i$$183_insertAtKey$$1$$++) {
        $rowIdx$$1$$ = $insertAtIndex$$2$$ + $i$$183_insertAtKey$$1$$, $row$$23$$ = new $oj$$14$$.$ArrayRow$($nodeSet$$28$$.getData($i$$183_insertAtKey$$1$$), {context:$nodeSet$$28$$.getMetadata($i$$183_insertAtKey$$1$$)}), $row$$23$$.index = $rowIdx$$1$$, $row$$23$$.$_updateContext$ = function($index$$146$$) {
          return function() {
            this.context = $nodeSet$$28$$.getMetadata($index$$146$$);
          };
        }($i$$183_insertAtKey$$1$$), $rowSet$$4$$.$_rows$.splice($rowIdx$$1$$, 0, $row$$23$$), $oj$$14$$.$FlattenedTreeRowSet$.$superclass$.$_handleEvent$.call($rowSet$$4$$, $oj$$14$$.$RowSet$.$EventType$.ADD, $row$$23$$);
      }
      $oj$$14$$.$FlattenedTreeRowSet$.$_realignRowIndices$(0, $rowSet$$4$$.$_rows$);
      $rowSet$$4$$.$_pageSize$ && ($rowSet$$4$$.$_updateContext$(), setTimeout(function() {
        $oj$$14$$.$FlattenedTreeRowSet$.$superclass$.$_handleEvent$.call($rowSet$$4$$, $oj$$14$$.$RowSet$.$EventType$.SYNC, {refresh:!0});
      }, 0));
    };
    $rowSet$$4$$.$_data$.$removeRows$ = function $$rowSet$$4$$$$_data$$$removeRows$$($rowKeys$$2$$) {
      var $i$$184$$, $row$$24$$, $rowIdx$$2$$;
      for ($i$$184$$ = 0;$i$$184$$ < $rowKeys$$2$$.length;$i$$184$$++) {
        $rowIdx$$2$$ = $rowKeys$$2$$[$i$$184$$].index - $i$$184$$, $row$$24$$ = new $oj$$14$$.$ArrayRow$({}, null), $row$$24$$.index = $rowIdx$$2$$, $rowSet$$4$$.$_rows$.splice($rowIdx$$2$$, 1), $oj$$14$$.$FlattenedTreeRowSet$.$superclass$.$_handleEvent$.call($rowSet$$4$$, $oj$$14$$.$RowSet$.$EventType$.REMOVE, $row$$24$$);
      }
      $oj$$14$$.$FlattenedTreeRowSet$.$_realignRowIndices$(0, $rowSet$$4$$.$_rows$);
      $rowSet$$4$$.$_pageSize$ && ($rowSet$$4$$.$_updateContext$(), setTimeout(function() {
        $oj$$14$$.$FlattenedTreeRowSet$.$superclass$.$_handleEvent$.call($rowSet$$4$$, $oj$$14$$.$RowSet$.$EventType$.SYNC, {refresh:!0});
      }, 0));
    };
  };
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.add = function $$oj$$14$$$$FlattenedTreeRowSet$$$add$() {
    $oj$$14$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.add", {add:$oj$$14$$.$FlattenedTreeRowSet$.prototype.add});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.at = function $$oj$$14$$$$FlattenedTreeRowSet$$$at$($index$$147$$) {
    return this.$_rows$[$index$$147$$];
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.at", {at:$oj$$14$$.$FlattenedTreeRowSet$.prototype.at});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.clone = function $$oj$$14$$$$FlattenedTreeRowSet$$$clone$() {
    $oj$$14$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.clone", {clone:$oj$$14$$.$FlattenedTreeRowSet$.prototype.clone});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.collapse = function $$oj$$14$$$$FlattenedTreeRowSet$$$collapse$($rowKey$$17$$) {
    this.$_data$.collapse($rowKey$$17$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.collapse", {collapse:$oj$$14$$.$FlattenedTreeRowSet$.prototype.collapse});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.expand = function $$oj$$14$$$$FlattenedTreeRowSet$$$expand$($rowKey$$18$$) {
    this.$_data$.expand($rowKey$$18$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.expand", {expand:$oj$$14$$.$FlattenedTreeRowSet$.prototype.expand});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.fetch = function $$oj$$14$$$$FlattenedTreeRowSet$$$fetch$($options$$251$$) {
    $options$$251$$ = $options$$251$$ || {};
    null != $options$$251$$.startIndex && (this.$_startIndex$ = $options$$251$$.startIndex);
    var $rangeCount$$ = Number.MAX_VALUE;
    null != $options$$251$$.pageSize && (this.$_pageSize$ = $rangeCount$$ = $options$$251$$.pageSize);
    var $startIndex$$5$$ = this.$_startIndex$;
    if (null != this.$_rows$ && null != $options$$251$$.pageSize) {
      var $endIndex$$5$$ = this.$_rows$.length - 1;
      if (this.$_startIndex$ + $options$$251$$.pageSize - 1 <= $endIndex$$5$$) {
        this.$_updateContext$();
        $options$$251$$.refresh = !0;
        this.$_endFetch$($options$$251$$, null);
        return;
      }
      this.$_startIndex$ <= $endIndex$$5$$ && ($startIndex$$5$$ = $endIndex$$5$$ + 1);
    }
    var $self$$74$$ = this;
    this.$_data$.$fetchRows$({start:$startIndex$$5$$, count:$rangeCount$$}, {success:function($nodeSet$$29$$) {
      $self$$74$$.$_handleFetchRowsSuccess$($nodeSet$$29$$);
      $options$$251$$.refresh = !0;
      $self$$74$$.$_endFetch$($options$$251$$, null);
    }.bind(this), error:function($status$$10$$) {
      $self$$74$$.$_endFetch$($options$$251$$, $status$$10$$);
    }.bind(this)});
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.fetch", {fetch:$oj$$14$$.$FlattenedTreeRowSet$.prototype.fetch});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.get = function $$oj$$14$$$$FlattenedTreeRowSet$$$get$() {
    $oj$$14$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.get", {get:$oj$$14$$.$FlattenedTreeRowSet$.prototype.get});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.hasMore = function $$oj$$14$$$$FlattenedTreeRowSet$$$hasMore$() {
    $oj$$14$$.$Assert$.$failedInAbstractFunction$();
    return!1;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.hasMore", {hasMore:$oj$$14$$.$FlattenedTreeRowSet$.prototype.hasMore});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.indexOf = function $$oj$$14$$$$FlattenedTreeRowSet$$$indexOf$() {
    $oj$$14$$.$Assert$.$failedInAbstractFunction$();
    return 0;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.indexOf", {indexOf:$oj$$14$$.$FlattenedTreeRowSet$.prototype.indexOf});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.isEmpty = function $$oj$$14$$$$FlattenedTreeRowSet$$$isEmpty$() {
    $oj$$14$$.$Assert$.$failedInAbstractFunction$();
    return!0;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.isEmpty", {isEmpty:$oj$$14$$.$FlattenedTreeRowSet$.prototype.isEmpty});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.on = function $$oj$$14$$$$FlattenedTreeRowSet$$$on$($eventType$$31$$, $eventHandler$$8$$) {
    if ("expand" == $eventType$$31$$ || "collapse" == $eventType$$31$$) {
      this.$_data$.on($eventType$$31$$, $eventHandler$$8$$);
    } else {
      $oj$$14$$.$FlattenedTreeRowSet$.$superclass$.on.call(this, $eventType$$31$$, $eventHandler$$8$$);
    }
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.on", {on:$oj$$14$$.$FlattenedTreeRowSet$.prototype.on});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.off = function $$oj$$14$$$$FlattenedTreeRowSet$$$off$($eventType$$32$$, $eventHandler$$9$$) {
    "expand" == $eventType$$32$$ || "collapse" == $eventType$$32$$ ? this.$_data$.off($eventType$$32$$, $eventHandler$$9$$) : $oj$$14$$.$FlattenedTreeRowSet$.$superclass$.off.call(this, $eventType$$32$$, $eventHandler$$9$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.off", {off:$oj$$14$$.$FlattenedTreeRowSet$.prototype.off});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.remove = function $$oj$$14$$$$FlattenedTreeRowSet$$$remove$() {
    $oj$$14$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.remove", {remove:$oj$$14$$.$FlattenedTreeRowSet$.prototype.remove});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.reset = function $$oj$$14$$$$FlattenedTreeRowSet$$$reset$() {
    $oj$$14$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.reset", {reset:$oj$$14$$.$FlattenedTreeRowSet$.prototype.reset});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.size = function $$oj$$14$$$$FlattenedTreeRowSet$$$size$() {
    if (!this.$_rows$) {
      return 0;
    }
    if (this.$_pageSize$) {
      if (this.$_rows$.length >= this.$_startIndex$ + this.$_pageSize$) {
        return this.$_startIndex$ + this.$_pageSize$;
      }
      if (this.$_rows$.length > this.$_startIndex$) {
        return this.$_rows$.length - this.$_startIndex$;
      }
    } else {
      return this.$_rows$.length;
    }
    return 0;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.size", {size:$oj$$14$$.$FlattenedTreeRowSet$.prototype.size});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.sort = function $$oj$$14$$$$FlattenedTreeRowSet$$$sort$($criteria$$7$$) {
    var $self$$75$$ = this;
    return this.$_data$.getWrappedDataSource().sort($criteria$$7$$, {success:function() {
      $self$$75$$.$_data$.refresh();
      $self$$75$$.fetch({startIndex:$self$$75$$.$_startIndex$, pageSize:$self$$75$$.$_pageSize$});
    }.bind(this), error:function() {
    }.bind(this)});
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.sort", {sort:$oj$$14$$.$FlattenedTreeRowSet$.prototype.sort});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.startIndex = function $$oj$$14$$$$FlattenedTreeRowSet$$$startIndex$() {
    return 0;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.startIndex", {startIndex:$oj$$14$$.$FlattenedTreeRowSet$.prototype.startIndex});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.totalSize = function $$oj$$14$$$$FlattenedTreeRowSet$$$totalSize$() {
    return-1;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.totalSize", {totalSize:$oj$$14$$.$FlattenedTreeRowSet$.prototype.totalSize});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.$_handleFetchRowsSuccess$ = function $$oj$$14$$$$FlattenedTreeRowSet$$$$_handleFetchRowsSuccess$$($nodeSet$$31$$) {
    this.$_currentNodeSet$ = $nodeSet$$31$$;
    this.$_rows$ || (this.$_rows$ = []);
    $oj$$14$$.$FlattenedTreeRowSet$.$_getRowArray$(this.$_currentNodeSet$, this, this.$_rows$);
  };
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.$_endFetch$ = function $$oj$$14$$$$FlattenedTreeRowSet$$$$_endFetch$$($options$$256$$, $e$$78$$) {
    $options$$256$$ = $options$$256$$ || {};
    var $success$$16$$ = $options$$256$$.success, $error$$21$$ = $options$$256$$.error;
    null != $e$$78$$ ? ($oj$$14$$.$FlattenedTreeRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$14$$.$RowSet$.$EventType$.ERROR, $e$$78$$), $error$$21$$ && $error$$21$$.call(this, $options$$256$$, $e$$78$$)) : ($oj$$14$$.$FlattenedTreeRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$14$$.$RowSet$.$EventType$.SYNC, $options$$256$$), $success$$16$$ && $success$$16$$.call(this, $options$$256$$));
  };
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.$_updateContext$ = function $$oj$$14$$$$FlattenedTreeRowSet$$$$_updateContext$$() {
    var $i$$185$$;
    for ($i$$185$$ = 0;$i$$185$$ < this.$_rows$.length;$i$$185$$++) {
      this.$_rows$[$i$$185$$].$_updateContext$ && this.$_rows$[$i$$185$$].$_updateContext$();
    }
  };
  $oj$$14$$.$FlattenedTreeRowSet$.$_getRowArray$ = function $$oj$$14$$$$FlattenedTreeRowSet$$$_getRowArray$$($nodeSet$$32$$, $rowSet$$5$$, $rows$$7$$) {
    var $endIndex$$6$$ = $nodeSet$$32$$.$getCount$() - 1, $i$$186$$;
    for ($i$$186$$ = $nodeSet$$32$$.$getStart$();$i$$186$$ <= $endIndex$$6$$;$i$$186$$++) {
      var $row$$28$$ = new $oj$$14$$.$ArrayRow$($nodeSet$$32$$.getData($i$$186$$), {context:$nodeSet$$32$$.getMetadata($i$$186$$)});
      $row$$28$$.$_updateContext$ = function($index$$148$$) {
        return function() {
          this.context = $nodeSet$$32$$.getMetadata($index$$148$$);
        };
      }($i$$186$$);
      $row$$28$$.index = $i$$186$$;
      $rows$$7$$[$i$$186$$] = $row$$28$$;
      $row$$28$$.rowSet = $rowSet$$5$$;
    }
  };
  $oj$$14$$.$FlattenedTreeRowSet$.$_realignRowIndices$ = function $$oj$$14$$$$FlattenedTreeRowSet$$$_realignRowIndices$$($start$$29$$, $rows$$8$$) {
    for (var $row$$29$$, $i$$187$$ = $start$$29$$;$i$$187$$ < $rows$$8$$.length;$i$$187$$++) {
      ($row$$29$$ = $rows$$8$$[$i$$187$$]) && ($row$$29$$.index = $i$$187$$);
    }
  };
  $oj$$14$$.$TableDataSource$ = function $$oj$$14$$$$TableDataSource$$($data$$103$$, $options$$257$$) {
    if (this.constructor == $oj$$14$$.$TableDataSource$) {
      throw Error($oj$$14$$.$TableDataSource$.$_LOGGER_MSG$.$_ERR_TABLE_DATASOURCE_INSTANTIATED_SUMMARY$ + "\n" + $oj$$14$$.$TableDataSource$.$_LOGGER_MSG$.$_ERR_TABLE_DATASOURCE_INSTANTIATED_DETAIL$);
    }
    this.data = $data$$103$$;
    this.options = $options$$257$$;
    this.$isFetching$ = !1;
    this.$_startIndex$ = 0;
    this.Init();
  };
  $goog$exportPath_$$("TableDataSource", $oj$$14$$.$TableDataSource$, $oj$$14$$);
  $oj$$14$$.$Object$.$createSubclass$($oj$$14$$.$TableDataSource$, $oj$$14$$.$DataSource$, "oj.TableDataSource");
  $oj$$14$$.$TableDataSource$.prototype.Init = function $$oj$$14$$$$TableDataSource$$$Init$() {
    $oj$$14$$.$TableDataSource$.$superclass$.Init.call(this);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.Init", {Init:$oj$$14$$.$TableDataSource$.prototype.Init});
  $oj$$14$$.$TableDataSource$.prototype.at = function $$oj$$14$$$$TableDataSource$$$at$() {
    $oj$$14$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.at", {at:$oj$$14$$.$TableDataSource$.prototype.at});
  $oj$$14$$.$TableDataSource$.prototype.fetch = function $$oj$$14$$$$TableDataSource$$$fetch$() {
    $oj$$14$$.$Assert$.$failedInAbstractFunction$();
    return $oj$$14$$.$Object$.$__getPromise$(function($resolve$$39$$, $reject$$39$$) {
      $reject$$39$$();
    });
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.fetch", {fetch:$oj$$14$$.$TableDataSource$.prototype.fetch});
  $oj$$14$$.$TableDataSource$.prototype.get = function $$oj$$14$$$$TableDataSource$$$get$() {
    $oj$$14$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.get", {get:$oj$$14$$.$TableDataSource$.prototype.get});
  $oj$$14$$.$TableDataSource$.prototype.getCapability = function $$oj$$14$$$$TableDataSource$$$getCapability$() {
    return null;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.getCapability", {getCapability:$oj$$14$$.$TableDataSource$.prototype.getCapability});
  $oj$$14$$.$TableDataSource$.prototype.hasMore = function $$oj$$14$$$$TableDataSource$$$hasMore$() {
    $oj$$14$$.$Assert$.$failedInAbstractFunction$();
    return!1;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.hasMore", {hasMore:$oj$$14$$.$TableDataSource$.prototype.hasMore});
  $oj$$14$$.$TableDataSource$.prototype.indexOf = function $$oj$$14$$$$TableDataSource$$$indexOf$() {
    $oj$$14$$.$Assert$.$failedInAbstractFunction$();
    return 0;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.indexOf", {indexOf:$oj$$14$$.$TableDataSource$.prototype.indexOf});
  $oj$$14$$.$TableDataSource$.prototype.size = function $$oj$$14$$$$TableDataSource$$$size$() {
    $oj$$14$$.$Assert$.$failedInAbstractFunction$();
    return 0;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.size", {size:$oj$$14$$.$TableDataSource$.prototype.size});
  $oj$$14$$.$TableDataSource$.prototype.sort = function $$oj$$14$$$$TableDataSource$$$sort$() {
    $oj$$14$$.$Assert$.$failedInAbstractFunction$();
    return $oj$$14$$.$Object$.$__getPromise$(function($resolve$$40$$, $reject$$40$$) {
      $reject$$40$$();
    });
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.sort", {sort:$oj$$14$$.$TableDataSource$.prototype.sort});
  $oj$$14$$.$TableDataSource$.prototype.startIndex = function $$oj$$14$$$$TableDataSource$$$startIndex$($startIndex$$7$$) {
    null != $startIndex$$7$$ && (this.$_startIndex$ = $startIndex$$7$$);
    return this.$_startIndex$;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.startIndex", {startIndex:$oj$$14$$.$TableDataSource$.prototype.startIndex});
  $oj$$14$$.$TableDataSource$.prototype.totalSize = function $$oj$$14$$$$TableDataSource$$$totalSize$() {
    $oj$$14$$.$Assert$.$failedInAbstractFunction$();
    return 0;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.totalSize", {totalSize:$oj$$14$$.$TableDataSource$.prototype.totalSize});
  $oj$$14$$.$TableDataSource$.$EventType$ = {ADD:"add", REMOVE:"remove", RESET:"reset", REFRESH:"refresh", SORT:"sort", CHANGE:"change", REQUEST:"request", SYNC:"sync", ERROR:"error"};
  $goog$exportPath_$$("TableDataSource.EventType", $oj$$14$$.$TableDataSource$.$EventType$, $oj$$14$$);
  $oj$$14$$.$TableDataSource$.$_LOGGER_MSG$ = {_ERR_TABLE_DATASOURCE_INSTANTIATED_SUMMARY:"oj.TableDataSource constructor called.", _ERR_TABLE_DATASOURCE_INSTANTIATED_DETAIL:"Please do not instantiate oj.TableDataSource. Please use one of the subclasses instead such as oj.ArrayTableDataSource or oj.CollectionTableDataSource.", _ERR_DATA_INVALID_TYPE_SUMMARY:"Invalid data type.", _ERR_DATA_INVALID_TYPE_DETAIL:"Please specify the appropriate data type."};
  $goog$exportPath_$$("TableDataSource._LOGGER_MSG", $oj$$14$$.$TableDataSource$.$_LOGGER_MSG$, $oj$$14$$);
  $oj$$14$$.$PagingTableDataSource$ = function $$oj$$14$$$$PagingTableDataSource$$($dataSource$$7$$) {
    if (!($dataSource$$7$$ instanceof $oj$$14$$.$TableDataSource$)) {
      throw Error($oj$$14$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_SUMMARY + "\n" + $oj$$14$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_DETAIL);
    }
    this.$dataSource$ = $dataSource$$7$$;
    this.$_startIndex$ = 0;
    this.Init();
  };
  $goog$exportPath_$$("PagingTableDataSource", $oj$$14$$.$PagingTableDataSource$, $oj$$14$$);
  $oj$$14$$.$Object$.$createSubclass$($oj$$14$$.$PagingTableDataSource$, $oj$$14$$.$PagingDataSource$, "oj.PagingTableDataSource");
  $oj$$14$$.$PagingTableDataSource$.prototype.Init = function $$oj$$14$$$$PagingTableDataSource$$$Init$() {
    $oj$$14$$.$PagingTableDataSource$.$superclass$.Init.call(this);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.Init", {Init:$oj$$14$$.$PagingTableDataSource$.prototype.Init});
  $oj$$14$$.$PagingTableDataSource$.prototype.getWrappedDataSource = function $$oj$$14$$$$PagingTableDataSource$$$getWrappedDataSource$() {
    return this.$dataSource$;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getWrappedDataSource", {getWrappedDataSource:$oj$$14$$.$PagingTableDataSource$.prototype.getWrappedDataSource});
  $oj$$14$$.$PagingTableDataSource$.prototype.fetch = function $$oj$$14$$$$PagingTableDataSource$$$fetch$($options$$260$$) {
    null != $options$$260$$ && (this.$_startIndex$ = $options$$260$$.startIndex, $options$$260$$.reset && (this.$_currentStartIndex$ = void 0));
    $options$$260$$.pageSize = null != $options$$260$$.pageSize ? $options$$260$$.pageSize : this.$_pageSize$;
    $options$$260$$.startIndex = this.$_startIndex$;
    var $self$$76$$ = this;
    return $oj$$14$$.$Object$.$__getPromise$(function($resolve$$41$$, $reject$$41$$) {
      $options$$260$$.success = function $$options$$260$$$success$() {
        $resolve$$41$$();
        $self$$76$$.$_fetchType$ = $options$$260$$.fetchType;
      };
      $options$$260$$.error = function $$options$$260$$$error$() {
        $reject$$41$$();
      };
      $self$$76$$.$dataSource$.fetch($options$$260$$);
    });
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.fetch", {fetch:$oj$$14$$.$PagingTableDataSource$.prototype.fetch});
  $oj$$14$$.$PagingTableDataSource$.prototype.next = function $$oj$$14$$$$PagingTableDataSource$$$next$() {
    if (-1 == this.$dataSource$.totalSize() || this.$dataSource$.totalSize() > this.$_startIndex$) {
      this.$_currentStartIndex$ = this.$_currentStartIndex$ ? this.$_currentStartIndex$ + this.$_pageSize$ : this.$_startIndex$ + this.$_pageSize$;
      this.$_currentPageSize$ += this.$_pageSize$;
      var $self$$77$$ = this;
      return this.$dataSource$.fetch({startIndex:this.$_currentStartIndex$, pageSize:this.$_pageSize$, fetchType:"next", success:function() {
        $self$$77$$.$_fetchType$ = "next";
      }});
    }
    return $oj$$14$$.$Object$.$__getPromise$(function($resolve$$42$$, $reject$$42$$) {
      $reject$$42$$();
    });
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.next", {next:$oj$$14$$.$PagingTableDataSource$.prototype.next});
  $oj$$14$$.$PagingTableDataSource$.prototype.previous = function $$oj$$14$$$$PagingTableDataSource$$$previous$() {
    if (0 != this.$_startIndex$ || -1 != this.$_startIndex$) {
      this.$_startIndex$ -= this.$_pageSize$;
      this.$_startIndex$ = 0 > this.$_startIndex$ ? 0 : this.$_startIndex$;
      this.$_currentPageSize$ -= this.$_pageSize$;
      var $self$$78$$ = this;
      return this.$dataSource$.fetch({startIndex:this.$_currentStartIndex$, pageSize:this.$_pageSize$, fetchType:"previous", success:function() {
        $self$$78$$.$_fetchType$ = "previous";
      }});
    }
    return $oj$$14$$.$Object$.$__getPromise$(function($resolve$$43$$, $reject$$43$$) {
      $reject$$43$$();
    });
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.previous", {previous:$oj$$14$$.$PagingTableDataSource$.prototype.previous});
  $oj$$14$$.$PagingTableDataSource$.prototype.setPageSize = function $$oj$$14$$$$PagingTableDataSource$$$setPageSize$($n$$21$$) {
    this.$_pageSize$ = $n$$21$$;
    this.$_currentPageSize$ = this.$_startIndex$ + $n$$21$$;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.setPageSize", {setPageSize:$oj$$14$$.$PagingTableDataSource$.prototype.setPageSize});
  $oj$$14$$.$PagingTableDataSource$.prototype.startIndex = function $$oj$$14$$$$PagingTableDataSource$$$startIndex$() {
    return this.$_startIndex$;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.startIndex", {startIndex:$oj$$14$$.$PagingTableDataSource$.prototype.startIndex});
  $oj$$14$$.$PagingTableDataSource$.prototype.at = function $$oj$$14$$$$PagingTableDataSource$$$at$($index$$150$$) {
    return this.$dataSource$.at($index$$150$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.at", {at:$oj$$14$$.$PagingTableDataSource$.prototype.at});
  $oj$$14$$.$PagingTableDataSource$.prototype.get = function $$oj$$14$$$$PagingTableDataSource$$$get$($id$$24$$) {
    return this.$dataSource$.get($id$$24$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.get", {get:$oj$$14$$.$PagingTableDataSource$.prototype.get});
  $oj$$14$$.$PagingTableDataSource$.prototype.getCapability = function $$oj$$14$$$$PagingTableDataSource$$$getCapability$($feature$$12$$) {
    return this.$dataSource$.getCapability($feature$$12$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getCapability", {getCapability:$oj$$14$$.$PagingTableDataSource$.prototype.getCapability});
  $oj$$14$$.$PagingTableDataSource$.prototype.hasMore = function $$oj$$14$$$$PagingTableDataSource$$$hasMore$() {
    return this.$dataSource$.hasMore();
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.hasMore", {hasMore:$oj$$14$$.$PagingTableDataSource$.prototype.hasMore});
  $oj$$14$$.$PagingTableDataSource$.prototype.indexOf = function $$oj$$14$$$$PagingTableDataSource$$$indexOf$($model$$48$$) {
    return this.$dataSource$.indexOf($model$$48$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.indexOf", {indexOf:$oj$$14$$.$PagingTableDataSource$.prototype.indexOf});
  $oj$$14$$.$PagingTableDataSource$.prototype.on = function $$oj$$14$$$$PagingTableDataSource$$$on$($eventType$$33$$, $eventHandler$$10$$) {
    var $self$$79$$ = this, $dataSource$$8$$ = this.$dataSource$;
    if ($eventType$$33$$ == $oj$$14$$.$TableDataSource$.$EventType$.SYNC) {
      var $ev$$1$$ = function $$ev$$1$$$($event$$120$$) {
        $self$$79$$.$_handleSyncEvent$($event$$120$$, $eventHandler$$10$$);
      };
      $dataSource$$8$$.on($eventType$$33$$, $ev$$1$$);
      return $ev$$1$$;
    }
    $dataSource$$8$$.on($eventType$$33$$, $eventHandler$$10$$);
    return $eventHandler$$10$$;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.on", {on:$oj$$14$$.$PagingTableDataSource$.prototype.on});
  $oj$$14$$.$PagingTableDataSource$.prototype.off = function $$oj$$14$$$$PagingTableDataSource$$$off$($eventType$$34$$, $eventHandler$$11$$) {
    return this.$dataSource$.off($eventType$$34$$, $eventHandler$$11$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.off", {off:$oj$$14$$.$PagingTableDataSource$.prototype.off});
  $oj$$14$$.$PagingTableDataSource$.prototype.size = function $$oj$$14$$$$PagingTableDataSource$$$size$() {
    return null != this.$_currentPageSize$ && 0 < this.$_currentPageSize$ && this.$dataSource$.size() > this.$_currentPageSize$ ? this.$_currentPageSize$ : this.$dataSource$.size();
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.size", {size:$oj$$14$$.$PagingTableDataSource$.prototype.size});
  $oj$$14$$.$PagingTableDataSource$.prototype.sort = function $$oj$$14$$$$PagingTableDataSource$$$sort$($criteria$$9$$) {
    return this.$dataSource$.sort($criteria$$9$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.sort", {sort:$oj$$14$$.$PagingTableDataSource$.prototype.sort});
  $oj$$14$$.$PagingTableDataSource$.prototype.totalSize = function $$oj$$14$$$$PagingTableDataSource$$$totalSize$() {
    return this.$dataSource$.totalSize();
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.totalSize", {totalSize:$oj$$14$$.$PagingTableDataSource$.prototype.totalSize});
  $oj$$14$$.$PagingTableDataSource$.prototype.$_handleSyncEvent$ = function $$oj$$14$$$$PagingTableDataSource$$$$_handleSyncEvent$$($event$$121$$, $eventHandler$$12$$) {
    var $self$$80$$ = this;
    setTimeout(function() {
      if ("next" == $self$$80$$.$_fetchType$ || null != $event$$121$$ && "next" == $event$$121$$.fetchType) {
        var $dataSource$$10$$ = $self$$80$$.$dataSource$, $startIndex$$8$$ = $event$$121$$.startIndex, $pageSize$$4$$ = $event$$121$$.pageSize;
        $self$$80$$.$_startIndex$ = 0;
        $self$$80$$.$_fetchType$ = null;
        var $i$$188$$;
        $startIndex$$8$$ + $pageSize$$4$$ > $dataSource$$10$$.size() && $dataSource$$10$$.size();
        for ($i$$188$$ = $startIndex$$8$$;$i$$188$$ < $startIndex$$8$$ + $pageSize$$4$$;$i$$188$$++) {
          $dataSource$$10$$.handleEvent($oj$$14$$.$RowSet$.$EventType$.ADD, $self$$80$$.$dataSource$.at($i$$188$$));
        }
      }
      $eventHandler$$12$$($event$$121$$);
    }, 0);
  };
  $oj$$14$$.$ArrayTableDataSource$ = function $$oj$$14$$$$ArrayTableDataSource$$($data$$104$$, $options$$261$$) {
    this.data = {};
    if (!($data$$104$$ instanceof Array) && "function" != typeof $data$$104$$ && "function" != typeof $data$$104$$.$subscribe$) {
      throw Error($oj$$14$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_SUMMARY + "\n" + $oj$$14$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_DETAIL);
    }
    $oj$$14$$.$ArrayTableDataSource$.$superclass$.constructor.call(this, $data$$104$$, $options$$261$$);
    this.$_rowSet$ = new $oj$$14$$.$ArrayRowSet$($data$$104$$, this.options);
    this.$_addRowSetEventListeners$();
    if (null != $options$$261$$ && ("enabled" == $options$$261$$.startFetch || null == $options$$261$$.startFetch) || null == $options$$261$$) {
      this.$_startFetchEnabled$ = !0;
    }
  };
  $goog$exportPath_$$("ArrayTableDataSource", $oj$$14$$.$ArrayTableDataSource$, $oj$$14$$);
  $oj$$14$$.$Object$.$createSubclass$($oj$$14$$.$ArrayTableDataSource$, $oj$$14$$.$TableDataSource$, "oj.ArrayTableDataSource");
  $oj$$14$$.$ArrayTableDataSource$.prototype.Init = function $$oj$$14$$$$ArrayTableDataSource$$$Init$() {
    $oj$$14$$.$ArrayTableDataSource$.$superclass$.Init.call(this);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.Init", {Init:$oj$$14$$.$ArrayTableDataSource$.prototype.Init});
  $oj$$14$$.$ArrayTableDataSource$.prototype.add = function $$oj$$14$$$$ArrayTableDataSource$$$add$($m$$22$$, $options$$262$$) {
    this.$_rowSet$.add($m$$22$$, $options$$262$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.add", {add:$oj$$14$$.$ArrayTableDataSource$.prototype.add});
  $oj$$14$$.$ArrayTableDataSource$.prototype.at = function $$oj$$14$$$$ArrayTableDataSource$$$at$($index$$151$$) {
    return this.$_rowSet$.at($index$$151$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.at", {at:$oj$$14$$.$ArrayTableDataSource$.prototype.at});
  $oj$$14$$.$ArrayTableDataSource$.prototype.fetch = function $$oj$$14$$$$ArrayTableDataSource$$$fetch$($options$$263$$) {
    $options$$263$$ = $options$$263$$ || {};
    var $self$$81$$ = this, $success$$17$$ = $options$$263$$.success, $error$$22$$ = $options$$263$$.error, $context$$40$$ = null == $options$$263$$.context ? this : $options$$263$$.context;
    if ("init" == $options$$263$$.fetchType && !this.$_startFetchEnabled$) {
      return $oj$$14$$.$Object$.$__getPromise$(function($resolve$$44$$) {
        $resolve$$44$$();
      });
    }
    null != $options$$263$$.startIndex && $oj$$14$$.$ArrayTableDataSource$.$superclass$.startIndex.call(this, $options$$263$$.startIndex);
    return $oj$$14$$.$Object$.$__getPromise$(function($resolve$$45$$, $reject$$45$$) {
      $options$$263$$.success = function $$options$$263$$$success$() {
        null != $success$$17$$ && $success$$17$$.call($context$$40$$, $self$$81$$, $options$$263$$);
        $resolve$$45$$();
      };
      $options$$263$$.error = function $$options$$263$$$error$($options$$264$$, $e$$79$$) {
        null != $error$$22$$ && $error$$22$$.call($context$$40$$, $self$$81$$, $options$$264$$, $e$$79$$);
        $reject$$45$$();
      };
      "enabled" == $options$$263$$.startFetch ? ($self$$81$$.$_rowSet$.isEmpty() || "undefined" === typeof $self$$81$$.$_rowSet$.size()) && $self$$81$$.$_rowSet$.fetch($options$$263$$) : $self$$81$$.$_rowSet$.fetch($options$$263$$);
    });
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.fetch", {fetch:$oj$$14$$.$ArrayTableDataSource$.prototype.fetch});
  $oj$$14$$.$ArrayTableDataSource$.prototype.get = function $$oj$$14$$$$ArrayTableDataSource$$$get$($id$$25$$) {
    return this.$_rowSet$.get($id$$25$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.get", {get:$oj$$14$$.$ArrayTableDataSource$.prototype.get});
  $oj$$14$$.$ArrayTableDataSource$.prototype.getCapability = function $$oj$$14$$$$ArrayTableDataSource$$$getCapability$() {
    return "full";
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.getCapability", {getCapability:$oj$$14$$.$ArrayTableDataSource$.prototype.getCapability});
  $oj$$14$$.$ArrayTableDataSource$.prototype.hasMore = function $$oj$$14$$$$ArrayTableDataSource$$$hasMore$() {
    return null != this.$_rowSet$ ? this.$_rowSet$.hasMore() : !1;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.hasMore", {hasMore:$oj$$14$$.$ArrayTableDataSource$.prototype.hasMore});
  $oj$$14$$.$ArrayTableDataSource$.prototype.indexOf = function $$oj$$14$$$$ArrayTableDataSource$$$indexOf$($row$$31$$) {
    return this.$_rowSet$.indexOf($row$$31$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.indexOf", {indexOf:$oj$$14$$.$ArrayTableDataSource$.prototype.indexOf});
  $oj$$14$$.$ArrayTableDataSource$.prototype.remove = function $$oj$$14$$$$ArrayTableDataSource$$$remove$($m$$23$$, $options$$265$$) {
    this.$_rowSet$.remove($m$$23$$, $options$$265$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.remove", {remove:$oj$$14$$.$ArrayTableDataSource$.prototype.remove});
  $oj$$14$$.$ArrayTableDataSource$.prototype.reset = function $$oj$$14$$$$ArrayTableDataSource$$$reset$($data$$106$$, $options$$266$$) {
    this.$_rowSet$.reset($data$$106$$, $options$$266$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.reset", {reset:$oj$$14$$.$ArrayTableDataSource$.prototype.reset});
  $oj$$14$$.$ArrayTableDataSource$.prototype.size = function $$oj$$14$$$$ArrayTableDataSource$$$size$() {
    return this.$_rowSet$.size();
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.size", {size:$oj$$14$$.$ArrayTableDataSource$.prototype.size});
  $oj$$14$$.$ArrayTableDataSource$.prototype.sort = function $$oj$$14$$$$ArrayTableDataSource$$$sort$($criteria$$10_direction$$7$$) {
    if (null == $criteria$$10_direction$$7$$) {
      return this.$_rowSet$.comparator = null, $oj$$14$$.$Object$.$__getPromise$(function($resolve$$46$$) {
        $resolve$$46$$();
      });
    }
    var $key$$76$$ = $criteria$$10_direction$$7$$.key;
    $criteria$$10_direction$$7$$ = $criteria$$10_direction$$7$$.direction;
    var $comparator$$13$$ = null;
    "ascending" == $criteria$$10_direction$$7$$ ? $comparator$$13$$ = function $$comparator$$13$$$($row$$32$$) {
      return $$$$14$$.isFunction($row$$32$$.get) ? $row$$32$$.get($key$$76$$) : $row$$32$$[$key$$76$$]();
    } : "descending" == $criteria$$10_direction$$7$$ && ($comparator$$13$$ = function $$comparator$$13$$$($rowA$$, $rowB$$) {
      var $a$$75$$, $b$$48$$;
      $$$$14$$.isFunction($rowA$$.get) ? ($a$$75$$ = $rowA$$.get($key$$76$$), $b$$48$$ = $rowB$$.get($key$$76$$)) : ($a$$75$$ = $rowA$$[$key$$76$$](), $b$$48$$ = $rowB$$[$key$$76$$]());
      return $a$$75$$ === $b$$48$$ ? 0 : $a$$75$$ > $b$$48$$ ? -1 : 1;
    });
    this.$_rowSet$.comparator = $comparator$$13$$;
    var $self$$82$$ = this;
    return $oj$$14$$.$Object$.$__getPromise$(function($resolve$$47$$) {
      $self$$82$$.$_rowSet$.sort();
      $resolve$$47$$();
    });
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.sort", {sort:$oj$$14$$.$ArrayTableDataSource$.prototype.sort});
  $oj$$14$$.$ArrayTableDataSource$.prototype.totalSize = function $$oj$$14$$$$ArrayTableDataSource$$$totalSize$() {
    return this.$_rowSet$.totalSize();
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.totalSize", {totalSize:$oj$$14$$.$ArrayTableDataSource$.prototype.totalSize});
  $oj$$14$$.$ArrayTableDataSource$.prototype.$_addRowSetEventListeners$ = function $$oj$$14$$$$ArrayTableDataSource$$$$_addRowSetEventListeners$$() {
    var $self$$83$$ = this;
    this.$_rowSet$.on($oj$$14$$.$RowSet$.$EventType$.ADD, function($event$$122$$) {
      $self$$83$$.$isFetching$ = !1;
      $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call($self$$83$$, $oj$$14$$.$TableDataSource$.$EventType$.ADD, $event$$122$$);
    });
    this.$_rowSet$.on($oj$$14$$.$RowSet$.$EventType$.REMOVE, function($event$$123$$) {
      $self$$83$$.$isFetching$ = !1;
      $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call($self$$83$$, $oj$$14$$.$TableDataSource$.$EventType$.REMOVE, $event$$123$$);
    });
    this.$_rowSet$.on($oj$$14$$.$RowSet$.$EventType$.REQUEST, function($event$$124$$) {
      $self$$83$$.$isFetching$ = !0;
      $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call($self$$83$$, $oj$$14$$.$TableDataSource$.$EventType$.REQUEST, $event$$124$$);
    });
    this.$_rowSet$.on($oj$$14$$.$RowSet$.$EventType$.RESET, function($event$$125$$) {
      $self$$83$$.$isFetching$ = !1;
      $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call($self$$83$$, $oj$$14$$.$TableDataSource$.$EventType$.RESET, $event$$125$$);
    });
    this.$_rowSet$.on($oj$$14$$.$RowSet$.$EventType$.SORT, function($event$$126$$) {
      $self$$83$$.$isFetching$ = !1;
      $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call($self$$83$$, $oj$$14$$.$TableDataSource$.$EventType$.SORT, $event$$126$$);
    });
    this.$_rowSet$.on($oj$$14$$.$RowSet$.$EventType$.CHANGE, function($event$$127$$) {
      $self$$83$$.$isFetching$ = !1;
      $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call($self$$83$$, $oj$$14$$.$TableDataSource$.$EventType$.CHANGE, $event$$127$$);
    });
    this.$_rowSet$.on($oj$$14$$.$RowSet$.$EventType$.SYNC, function($event$$128$$) {
      $self$$83$$.$isFetching$ = !1;
      $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call($self$$83$$, $oj$$14$$.$TableDataSource$.$EventType$.SYNC, $event$$128$$);
    });
    this.$_rowSet$.on($oj$$14$$.$RowSet$.$EventType$.ERROR, function($event$$129$$) {
      $self$$83$$.$isFetching$ = !1;
      $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call($self$$83$$, $oj$$14$$.$TableDataSource$.$EventType$.ERROR, $event$$129$$);
    });
  };
  (function() {
    $oj$$14$$.$__registerWidget$("oj.ojTable", $$$$14$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3ctable\x3e", widgetEventPrefix:"oj", options:{accessibility:null, currentRow:null, data:null, emptyText:null, horizontalGridVisible:"enabled", rowRenderer:null, selection:[], selectionMode:null, verticalGridVisible:"enabled", columns:[{renderer:null, className:null, field:null, footerClassName:null, footerRenderer:null, footerStyle:null, headerClassName:null, headerRenderer:null, headerStyle:null, 
    headerText:null, id:null, sortable:"auto", sortProperty:null, style:null}], columnsDefault:{renderer:null, className:null, field:null, footerClassName:null, footerRenderer:null, footerStyle:null, headerClassName:null, headerRenderer:null, headerStyle:null, headerText:null, sortable:"auto", sortProperty:null, style:null}, beforeCurrentRow:null, optionChange:null, translations:{}}, $_BUNDLE_KEY$:{$_MSG_FETCHING_DATA$:"msgFetchingData", $_MSG_NO_DATA$:"msgNoData", $_LABEL_SELECT_COLUMN$:"labelSelectColumn", 
    $_LABEL_SELECT_ROW$:"labelSelectRow"}, $_LOGGER_MSG$:{$_ERR_PRECURRENTROW_ERROR_SUMMARY$:"Did not change current row due to error.", $_ERR_PRECURRENTROW_ERROR_DETAIL$:"Error detail: {error}.", $_ERR_CURRENTROW_UNAVAILABLE_INDEX_SUMMARY$:"Did not change current row due to unavailable row index.", $_ERR_CURRENTROW_UNAVAILABLE_INDEX_DETAIL$:"Unavailable row index: {rowIdx}.", $_ERR_REFRESHROW_INVALID_INDEX_SUMMARY$:"Invalid row index value.", $_ERR_REFRESHROW_INVALID_INDEX_DETAIL$:"Row index: {rowIdx}.", 
    $_ERR_DATA_INVALID_TYPE_SUMMARY$:"Invalid data type.", $_ERR_DATA_INVALID_TYPE_DETAIL$:"Please specify the appropriate data type."}, $_COLUMN_HEADER_ID$:"_headerColumn", $_COLUMN_HEADER_TEXT_ID$:"_headerColumnText", $_COLUMN_HEADER_ASC_ID$:"_headerColumnAsc", $_COLUMN_HEADER_DSC_ID$:"_headerColumnDsc", $_COLUMN_HEADER_ID_PREFIX$:"_hdrCol", $_OPTION_AUTO$:"auto", $_OPTION_ENABLED$:"enabled", $_OPTION_DISABLED$:"disabled", $_OPTION_NONE$:"none", $_OPTION_SELECTION_MODES$:{$_SINGLE$:"single", $_MULTIPLE$:"multiple"}, 
    $_COLUMN_SORT_ORDER$:{$_ASCENDING$:"ascending", $_DESCENDING$:"descending"}, $_KEYBOARD_CODES$:{$_KEYBOARD_CODE_SPACEBAR$:32, $_KEYBOARD_CODE_ENTER$:13, $_KEYBOARD_CODE_UP$:38, $_KEYBOARD_CODE_DOWN$:40, $_KEYBOARD_CODE_LEFT$:37, $_KEYBOARD_CODE_RIGHT$:39, $_KEYBOARD_CODE_HOME$:36, $_KEYBOARD_CODE_END$:35, $_KEYBOARD_CODE_TAB$:9, $_KEYBOARD_CODE_ESC$:27, $_KEYBOARD_MODIFIER_SHIFT$:"shiftKey"}, getNodeBySubId:function($columnIdx_locator$$12_tableHeaderColumn$$) {
      if (null == $columnIdx_locator$$12_tableHeaderColumn$$) {
        return this.element ? this.element[0] : null;
      }
      var $rowIdx$$3_subId$$8_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ = $columnIdx_locator$$12_tableHeaderColumn$$.subId;
      if ("oj-table-cell" === $rowIdx$$3_subId$$8_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$) {
        return $rowIdx$$3_subId$$8_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ = $columnIdx_locator$$12_tableHeaderColumn$$.rowIndex, $columnIdx_locator$$12_tableHeaderColumn$$ = $columnIdx_locator$$12_tableHeaderColumn$$.columnIndex, this.$_getTableDomUtils$().$getTableBodyCell$($rowIdx$$3_subId$$8_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$, $columnIdx_locator$$12_tableHeaderColumn$$)[0];
      }
      if ("oj-table-header" === $rowIdx$$3_subId$$8_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ || "oj-table-sort-ascending" === $rowIdx$$3_subId$$8_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ || "oj-table-sort-descending" === $rowIdx$$3_subId$$8_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$) {
        if ($columnIdx_locator$$12_tableHeaderColumn$$ = $columnIdx_locator$$12_tableHeaderColumn$$.index, $columnIdx_locator$$12_tableHeaderColumn$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx_locator$$12_tableHeaderColumn$$), null != $columnIdx_locator$$12_tableHeaderColumn$$) {
          if ("oj-table-header" === $rowIdx$$3_subId$$8_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$) {
            return $columnIdx_locator$$12_tableHeaderColumn$$[0];
          }
          $rowIdx$$3_subId$$8_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ = "oj-table-sort-ascending" === $rowIdx$$3_subId$$8_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ ? $columnIdx_locator$$12_tableHeaderColumn$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$) : $columnIdx_locator$$12_tableHeaderColumn$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$);
          if (0 < $rowIdx$$3_subId$$8_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$.length) {
            return $rowIdx$$3_subId$$8_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$[0];
          }
        }
      } else {
        if ("oj-table-footer" === $rowIdx$$3_subId$$8_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ && ($columnIdx_locator$$12_tableHeaderColumn$$ = $columnIdx_locator$$12_tableHeaderColumn$$.index, $rowIdx$$3_subId$$8_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ = this.$_getTableDomUtils$().$getTableFooterCell$($columnIdx_locator$$12_tableHeaderColumn$$), null != $rowIdx$$3_subId$$8_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$)) {
          return $rowIdx$$3_subId$$8_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$[0];
        }
      }
      return null;
    }, refresh:function() {
      this._super();
      this.$_refresh$(!0);
    }, refreshRow:function($errDetail$$6_rowIdx$$4$$) {
      var $data$$107_errSummary$$6_row$$33$$ = this.$_getData$();
      if (!$data$$107_errSummary$$6_row$$33$$) {
        return!1;
      }
      if (isNaN($errDetail$$6_rowIdx$$4$$) || 0 > $errDetail$$6_rowIdx$$4$$ || $errDetail$$6_rowIdx$$4$$ > $data$$107_errSummary$$6_row$$33$$.size() - 1) {
        throw $data$$107_errSummary$$6_row$$33$$ = this.$_LOGGER_MSG$.$_ERR_REFRESHROW_INVALID_INDEX_SUMMARY$, $errDetail$$6_rowIdx$$4$$ = $oj$$14$$.$Translations$.$applyParameters$(this.$_LOGGER_MSG$.$_ERR_REFRESHROW_INVALID_INDEX_DETAIL$, {rowIdx:$errDetail$$6_rowIdx$$4$$.toString()}), new RangeError($data$$107_errSummary$$6_row$$33$$ + "\n" + $errDetail$$6_rowIdx$$4$$);
      }
      $data$$107_errSummary$$6_row$$33$$ = $data$$107_errSummary$$6_row$$33$$.at($errDetail$$6_rowIdx$$4$$);
      if (null == $data$$107_errSummary$$6_row$$33$$) {
        return!1;
      }
      try {
        $data$$107_errSummary$$6_row$$33$$ instanceof $oj$$14$$.$Row$ ? this.$_refreshTableBodyRow$($errDetail$$6_rowIdx$$4$$, $data$$107_errSummary$$6_row$$33$$) : this.$_asyncRefreshTableBodyRow$($data$$107_errSummary$$6_row$$33$$);
      } catch ($e$$80$$) {
        $oj$$14$$.$Logger$.error($e$$80$$);
      }
      return!0;
    }, _ComponentCreate:function() {
      this._super();
      this.$_draw$();
      this.$_registerCustomEvents$();
      this._on(this.$_events$);
      this.$_registerDomEventListeners$();
      this.$_registerDataSourceEventListeners$();
      var $self$$84$$ = this;
      setInterval(function() {
        null != $self$$84$$.$_selectionTimer$ && ($self$$84$$.$_setSelection$($self$$84$$.options.selection), $self$$84$$.$_selectionTimer$ = null);
      }, 100);
    }, _destroy:function() {
      this.$_getData$();
      this.$_unregisterDataSourceEventListeners$();
      this.$_getTableDomUtils$().$getTableBody$().removeAttr($oj$$14$$.Components.$_OJ_CONTAINER_ATTR$);
      this.element.children().remove("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HEADER_CLASS$);
      this.element.children().remove("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_BODY_CLASS$);
      this.element.children().remove("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_STATUS_MESSAGE_CLASS$);
      var $tableContainer$$ = this.$_getTableDomUtils$().$getTableContainer$();
      null != $tableContainer$$ && ($tableContainer$$[0].parentNode.appendChild(this.element), $tableContainer$$[0].parentNode.removeChild($tableContainer$$[0]));
      this.element.removeClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_CLASS$);
    }, $_draw$:function() {
      this.element.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_ELEMENT_CLASS$);
      this.$_getTableDomUtils$().$createInitialTable$(this.$_isTableHeaderless$(), this.$_isTableFooterless$());
      this.$_getTableDomUtils$().$styleInitialTable$();
      this.$_getTableDomUtils$().$createContextMenu$(this.$_handleContextMenuBeforeShow$.bind(this), this.$_handleContextMenuSelect$.bind(this));
      this.$_refreshTableHeader$();
      this.$_refreshTableFooter$();
      this.$_getTableDomUtils$().$refreshTableDimensions$(!0);
      this.options.disabled && this.disable();
      this.$_registerResizeListener$(this.$_getTableDomUtils$().$getTableContainer$());
    }, $_events$:{blur:function($event$$130$$) {
      var $table$$ = this.$_getTableDomUtils$().$getTable$();
      0 < $table$$.has($event$$130$$.relatedTarget).length || null != $event$$130$$.originalEvent && $event$$130$$.originalEvent.explicitOriginalTarget == $table$$[0] || (this.$_clearKeyboardKeys$(), this.$_clearFocusedHeaderColumn$(), this.$_clearFocusedRow$(), this.$_setTableNavigationMode$(!1));
    }, focus:function() {
      var $focusedRowIdx$$ = this.$_getFocusedRowIdx$(), $focusedHeaderColumnIdx$$ = this.$_getFocusedHeaderColumnIdx$();
      null == $focusedRowIdx$$ && null == $focusedHeaderColumnIdx$$ && this.$_setHeaderColumnFocus$(0, !0, !1, null);
    }, "click .oj-table-checkbox-acc-select-column":function($event$$132$$) {
      var $columnIdx$$1$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$132$$.currentTarget)), $selected$$13$$ = $$$$14$$($event$$132$$.currentTarget).is(":checked");
      $selected$$13$$ && this.$_setHeaderColumnFocus$($columnIdx$$1$$, !0, !0, null);
      this.$_setHeaderColumnSelection$($columnIdx$$1$$, $selected$$13$$, $event$$132$$.currentTarget, $event$$132$$, !0);
      $event$$132$$.stopPropagation();
    }, "click .oj-table-checkbox-acc-select-row":function($event$$133$$) {
      var $rowIdx$$5$$ = this.$_getTableDomUtils$().$getElementRowIdx$($$$$14$$($event$$133$$.currentTarget)), $selected$$14$$ = $$$$14$$($event$$133$$.currentTarget).is(":checked");
      $selected$$14$$ && this.$_setRowFocus$($rowIdx$$5$$, !0, null, $event$$133$$);
      this.$_setRowSelection$($rowIdx$$5$$, $selected$$14$$, $event$$133$$.currentTarget, $event$$133$$, !0);
      $event$$133$$.stopPropagation();
    }, keydown:function($event$$134$$) {
      if (!(null != this.$_getTableDomUtils$().$getTableFooter$() && 0 < this.$_getTableDomUtils$().$getTableFooter$().has($event$$134$$.target).length) && (this.$_addKeyboardKey$($event$$134$$.keyCode), 1 == this.$_getKeyboardKeys$().length || 2 == this.$_getKeyboardKeys$().length)) {
        if (this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_UP$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_DOWN$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_SPACEBAR$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_HOME$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_END$)) {
          $event$$134$$.preventDefault(), $event$$134$$.stopPropagation();
        }
        this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_UP$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_DOWN$) ? this.$_handleKeydownUpDown$($event$$134$$) : this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_LEFT$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_RIGHT$) ? this.$_handleKeydownLeftRight$($event$$134$$) : this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_TAB$) && this.$_handleKeydownTab$($event$$134$$);
      }
    }, keyup:function($event$$135$$) {
      if (!(null != this.$_getTableDomUtils$().$getTableFooter$() && 0 < this.$_getTableDomUtils$().$getTableFooter$().has($event$$135$$.target).length)) {
        if (1 == this.$_getKeyboardKeys$().length) {
          var $keyboardCode1$$ = this.$_getKeyboardKeys$()[0];
          $keyboardCode1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_SPACEBAR$ ? this.$_handleKeyupSpacebar$($event$$135$$) : $keyboardCode1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_ENTER$ ? this.$_handleKeyupEnter$($event$$135$$) : $keyboardCode1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_HOME$ ? this.$_handleKeyupHome$($event$$135$$) : $keyboardCode1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_END$ ? this.$_handleKeyupEnd$($event$$135$$) : $keyboardCode1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_ESC$ && 
          this.$_handleKeyupEsc$($event$$135$$);
          this.$_removeKeyboardKey$($keyboardCode1$$);
        }
        this.$_removeKeyboardKey$($event$$135$$.keyCode);
      }
    }, "mouseenter .oj-table-column-header-cell":function($columnIdx$$2_event$$136$$) {
      $columnIdx$$2_event$$136$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($columnIdx$$2_event$$136$$.currentTarget));
      this.$_showTableHeaderColumnSortLink$($columnIdx$$2_event$$136$$);
    }, "mouseleave .oj-table-column-header-cell":function($columnIdx$$3_event$$137$$) {
      $columnIdx$$3_event$$137$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($columnIdx$$3_event$$137$$.currentTarget));
      this.$_hideTableHeaderColumnSortLink$($columnIdx$$3_event$$137$$, !0);
      this.$_hideTableHeaderColumnSortLink$($columnIdx$$3_event$$137$$, !1);
    }, "mouseenter .oj-table-data-cell":function($event$$138_rowIdx$$6$$) {
      $event$$138_rowIdx$$6$$ = this.$_getTableDomUtils$().$getElementRowIdx$($$$$14$$($event$$138_rowIdx$$6$$.currentTarget));
      this.$_updateRowCellsClass$($event$$138_rowIdx$$6$$, {hover:!0});
    }, "mouseleave .oj-table-data-cell":function($event$$139_rowIdx$$7$$) {
      $event$$139_rowIdx$$7$$ = this.$_getTableDomUtils$().$getElementRowIdx$($$$$14$$($event$$139_rowIdx$$7$$.currentTarget));
      this.$_updateRowCellsClass$($event$$139_rowIdx$$7$$, {hover:!1});
    }, "click .oj-table-column-header-asc-link":function($event$$140$$) {
      this.$_checkFocus$();
      var $columnIdx$$4$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$140$$.target)), $tableHeaderColumn$$1$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$4$$);
      $tableHeaderColumn$$1$$ && ($tableHeaderColumn$$1$$.data("sorted") == this.$_COLUMN_SORT_ORDER$.$_ASCENDING$ ? this.$_handleSortTableHeaderColumn$($columnIdx$$4$$, !1) : this.$_handleSortTableHeaderColumn$($columnIdx$$4$$, !0), $event$$140$$.preventDefault(), $event$$140$$.stopPropagation());
    }, "click .oj-table-column-header-acc-asc-link":function($event$$141$$) {
      this.$_checkFocus$();
      var $columnIdx$$5$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$141$$.target));
      this.$_handleSortTableHeaderColumn$($columnIdx$$5$$, !0);
      $event$$141$$.preventDefault();
      $event$$141$$.stopPropagation();
    }, "click .oj-table-column-header-dsc-link":function($event$$142$$) {
      this.$_checkFocus$();
      var $columnIdx$$6$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$142$$.target)), $tableHeaderColumn$$2$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$6$$);
      $tableHeaderColumn$$2$$ && ($tableHeaderColumn$$2$$.data("sorted") == this.$_COLUMN_SORT_ORDER$.$_DESCENDING$ ? this.$_handleSortTableHeaderColumn$($columnIdx$$6$$, !0) : this.$_handleSortTableHeaderColumn$($columnIdx$$6$$, !1), $event$$142$$.preventDefault(), $event$$142$$.stopPropagation());
    }, "click .oj-table-column-header-acc-dsc-link":function($event$$143$$) {
      this.$_checkFocus$();
      var $columnIdx$$7$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$143$$.target));
      this.$_handleSortTableHeaderColumn$($columnIdx$$7$$, !1);
      $event$$143$$.preventDefault();
      $event$$143$$.stopPropagation();
    }, "click .oj-table-data-cell":function($event$$144$$) {
      this.$_checkFocus$();
      var $rowIdx$$8$$ = this.$_getTableDomUtils$().$getElementRowIdx$($$$$14$$($event$$144$$.currentTarget));
      this.$_setRowFocus$($rowIdx$$8$$, !0, $event$$144$$.currentTarget, $event$$144$$);
      if ($event$$144$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$]) {
        var $lastSelectedRowIdx$$ = this.$_getLastRowSelection$();
        if (null != $lastSelectedRowIdx$$) {
          if (window.getSelection().removeAllRanges(), $rowIdx$$8$$ < $lastSelectedRowIdx$$) {
            var $i$$189$$;
            for ($i$$189$$ = $rowIdx$$8$$;$i$$189$$ <= $lastSelectedRowIdx$$;$i$$189$$++) {
              this.$_setRowSelection$($i$$189$$, !0, $event$$144$$.currentTarget, $event$$144$$, !0);
            }
          } else {
            for ($i$$189$$ = $lastSelectedRowIdx$$;$i$$189$$ <= $rowIdx$$8$$;$i$$189$$++) {
              this.$_setRowSelection$($i$$189$$, !0, $event$$144$$.currentTarget, $event$$144$$, !0);
            }
          }
        }
      } else {
        $oj$$14$$.$DomUtils$.$isMetaKeyPressed$($event$$144$$) ? this.$_setRowSelection$($rowIdx$$8$$, !this.$_getRowSelection$($rowIdx$$8$$), $event$$144$$.currentTarget, $event$$144$$, !0) : 0 == this.$_getKeyboardKeys$().length && (this.$_clearSelectedRows$(), this.$_setRowSelection$($rowIdx$$8$$, !this.$_getRowSelection$($rowIdx$$8$$), $event$$144$$.currentTarget, $event$$144$$, !0));
      }
    }, "click .oj-table-column-header-cell":function($event$$145$$) {
      this.$_checkFocus$();
      var $columnIdx$$8$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$145$$.currentTarget));
      this.$_setHeaderColumnFocus$($columnIdx$$8$$, !0, !0, $event$$145$$.currentTarget);
      if ($event$$145$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$]) {
        var $lastSelectedColumnIdx$$ = this.$_getLastHeaderColumnSelection$();
        if (null != $lastSelectedColumnIdx$$) {
          if ($columnIdx$$8$$ < $lastSelectedColumnIdx$$) {
            var $i$$190$$;
            for ($i$$190$$ = $columnIdx$$8$$;$i$$190$$ <= $lastSelectedColumnIdx$$;$i$$190$$++) {
              this.$_setHeaderColumnSelection$($i$$190$$, !0, $event$$145$$.currentTarget, $event$$145$$, !0);
            }
          } else {
            for ($i$$190$$ = $lastSelectedColumnIdx$$;$i$$190$$ <= $columnIdx$$8$$;$i$$190$$++) {
              this.$_setHeaderColumnSelection$($i$$190$$, !0, $event$$145$$.currentTarget, $event$$145$$, !0);
            }
          }
        }
      } else {
        $oj$$14$$.$DomUtils$.$isMetaKeyPressed$($event$$145$$) ? this.$_setHeaderColumnSelection$($columnIdx$$8$$, !this.$_getHeaderColumnSelection$($columnIdx$$8$$), $event$$145$$.currentTarget, $event$$145$$, !0) : 0 == this.$_getKeyboardKeys$().length && (this.$_clearSelectedHeaderColumns$(), this.$_setHeaderColumnSelection$($columnIdx$$8$$, !this.$_getHeaderColumnSelection$($columnIdx$$8$$), $event$$145$$.currentTarget, $event$$145$$, !0));
      }
    }}, $_refresh$:function($immediate$$1$$) {
      this.$_clearCachedMetadata$();
      this.$_data$ != this.options.data && this.$_clearCachedDataMetadata$();
      this.$_contextMenuId$ != this.$_getTableDomUtils$().$getContextMenuId$() && this.$_getTableDomUtils$().$createContextMenu$(this.$_handleContextMenuBeforeShow$.bind(this), this.$_handleContextMenuSelect$.bind(this));
      this.$_getTableDomUtils$().$clearCachedDom$();
      if ($immediate$$1$$) {
        this.$_refreshAll$($immediate$$1$$, !0);
      } else {
        var $self$$85$$ = this;
        setTimeout(function() {
          $self$$85$$.$_refreshAll$($immediate$$1$$, !0);
        }, 0);
      }
    }, _setOption:function($key$$77$$, $value$$181$$) {
      var $existingSelection$$ = this.options.selection, $shouldRefresh$$ = this.$_isTableRefreshNeeded$($key$$77$$, $value$$181$$);
      this._superApply(arguments);
      $shouldRefresh$$ && this.$_refresh$(!1);
      "selection" == $key$$77$$ ? (this.$_clearSelectedRows$(), this.$_clearSelectedHeaderColumns$(), this.$_setSelection$($value$$181$$), this.$_fireOptionChange$("selection", $existingSelection$$, $value$$181$$, null)) : "currentRow" == $key$$77$$ && this.$_setCurrentRow$($value$$181$$, null);
    }, $_addKeyboardKey$:function($keyCode$$1$$) {
      var $foundCode_keyboardKeys$$ = !1, $found$$4_prop$$71$$;
      for ($found$$4_prop$$71$$ in this.$_KEYBOARD_CODES$) {
        this.$_KEYBOARD_CODES$.hasOwnProperty($found$$4_prop$$71$$) && this.$_KEYBOARD_CODES$[$found$$4_prop$$71$$] == $keyCode$$1$$ && ($foundCode_keyboardKeys$$ = !0);
      }
      if ($foundCode_keyboardKeys$$) {
        $foundCode_keyboardKeys$$ = this.$_getKeyboardKeys$();
        $found$$4_prop$$71$$ = !1;
        var $i$$191$$;
        for ($i$$191$$ = 0;$i$$191$$ < $foundCode_keyboardKeys$$.length;$i$$191$$++) {
          if ($foundCode_keyboardKeys$$[$i$$191$$] == $keyCode$$1$$) {
            $found$$4_prop$$71$$ = !0;
            break;
          }
        }
        $found$$4_prop$$71$$ || $foundCode_keyboardKeys$$.push($keyCode$$1$$);
      }
    }, $_addSingleTableBodyRow$:function($rowIdx$$9$$, $row$$34$$, $docFrag$$) {
      var $tableBodyRow$$ = this.$_getTableDomUtils$().$createTableBodyRow$($rowIdx$$9$$);
      this.$_getTableDomUtils$().$styleTableBodyRow$($tableBodyRow$$);
      this.$_getTableDomUtils$().$insertTableBodyRow$($rowIdx$$9$$, $tableBodyRow$$, $docFrag$$);
      $row$$34$$ instanceof $oj$$14$$.$Row$ ? this.$_refreshTableBodyRow$($rowIdx$$9$$, $row$$34$$, $tableBodyRow$$, $docFrag$$) : this.$_asyncRefreshTableBodyRow$($row$$34$$);
    }, $_asyncRefreshTableBodyRow$:function($row$$35$$) {
      var $self$$86$$ = this;
      $row$$35$$.then(function($resolvedModel$$) {
        setTimeout(function() {
          var $rowIdx$$10$$ = $resolvedModel$$.index - $self$$86$$.$_getData$().startIndex();
          $self$$86$$.$_refreshTableBodyRow$($rowIdx$$10$$, $resolvedModel$$);
          $self$$86$$.$_getTableDomUtils$().$refreshTableDimensions$();
        }, 0);
      });
    }, $_checkFocus$:function() {
      this.$_isFocused$() || this.$_getTableDomUtils$().$getTable$().focus();
    }, $_clearCachedMetadata$:function() {
      this.$_columnDefArray$ = null;
      this.$_setTableNavigationMode$(!1);
    }, $_clearCachedDataMetadata$:function() {
      null != this.$_data$ && this.$_unregisterDataSourceEventListeners$();
      this.$_data$ = null;
    }, $_clearKeyboardKeys$:function() {
      this.$_keyboardKeys$ = [];
    }, $_clearFocusedHeaderColumn$:function() {
      var $focusedHeaderColumnIdx$$1$$ = this.$_getFocusedHeaderColumnIdx$();
      null != $focusedHeaderColumnIdx$$1$$ && this.$_setHeaderColumnFocus$($focusedHeaderColumnIdx$$1$$, !1, !1, null);
      this.$_activeColumnIndex$ = -1;
    }, $_clearFocusedRow$:function() {
      var $focusedRowIdx$$1$$ = this.$_getFocusedRowIdx$();
      null != $focusedRowIdx$$1$$ && this.$_setRowFocus$($focusedRowIdx$$1$$, !1, null, null);
    }, $_clearSelectedHeaderColumns$:function() {
      var $selectedHeaderColumnIdxs$$ = this.$_getSelectedHeaderColumnIdxs$(), $i$$192$$;
      for ($i$$192$$ = 0;$i$$192$$ < $selectedHeaderColumnIdxs$$.length;$i$$192$$++) {
        this.$_setHeaderColumnSelection$($selectedHeaderColumnIdxs$$[$i$$192$$], !1, null, null, !1);
      }
    }, $_clearSelectedRows$:function() {
      var $selectedRowIdxs$$ = this.$_getSelectedRowIdxs$(), $i$$193$$;
      for ($i$$193$$ = 0;$i$$193$$ < $selectedRowIdxs$$.length;$i$$193$$++) {
        this.$_setRowSelection$($selectedRowIdxs$$[$i$$193$$], !1, null, null, !1);
      }
    }, $_clearSortedHeaderColumn$:function($columnIdx$$9$$) {
      var $sortedTableHeaderColumnIdx$$ = this.$_getSortedTableHeaderColumnIdx$();
      if (null != $sortedTableHeaderColumnIdx$$) {
        var $sortedTableHeaderColumn$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($sortedTableHeaderColumnIdx$$), $sorted$$2$$ = $sortedTableHeaderColumn$$.data("sorted");
        $sortedTableHeaderColumn$$.data("sorted", null);
        $sortedTableHeaderColumnIdx$$ != $columnIdx$$9$$ ? $sorted$$2$$ == this.$_COLUMN_SORT_ORDER$.$_ASCENDING$ ? this.$_hideTableHeaderColumnSortLink$($sortedTableHeaderColumnIdx$$, !0) : this.$_hideTableHeaderColumnSortLink$($sortedTableHeaderColumnIdx$$, !1) : ($sortedTableHeaderColumn$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$), $sortedTableHeaderColumn$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$));
      }
    }, $_executeQueuedTableBodyRowOperations$:function() {
      if (null != this.$_rowOperationQueue$) {
        var $lastOperation_lastOperationEventType$$ = this.$_rowOperationQueue$[this.$_rowOperationQueue$.length - 1];
        null != $lastOperation_lastOperationEventType$$ && ($lastOperation_lastOperationEventType$$ = $lastOperation_lastOperationEventType$$.$eventType$, $lastOperation_lastOperationEventType$$ == $oj$$14$$.$TableDataSource$.$EventType$.ADD ? this.$_executeTableBodyRowsAdd$(this.$_rowOperationQueue$) : $lastOperation_lastOperationEventType$$ == $oj$$14$$.$TableDataSource$.$EventType$.REMOVE ? this.$_executeTableBodyRowsRemove$(this.$_rowOperationQueue$) : $lastOperation_lastOperationEventType$$ == 
        $oj$$14$$.$TableDataSource$.$EventType$.CHANGE && this.$_executeTableBodyRowsChange$(this.$_rowOperationQueue$), this.$_rowOperationQueue$ = []);
      }
    }, $_executeTableBodyRowsAdd$:function($rows$$9$$) {
      var $batchAdd_j$$29_tableBody$$ = !1;
      if (1 < $rows$$9$$.length) {
        var $i$$194_tableBodyRowBefore$$, $columns$$2_isContiguous_tableBodyDocFrag$$ = !0;
        for ($i$$194_tableBodyRowBefore$$ = 0;$i$$194_tableBodyRowBefore$$ < $rows$$9$$.length;$i$$194_tableBodyRowBefore$$++) {
          if (0 != $i$$194_tableBodyRowBefore$$ && $rows$$9$$[$i$$194_tableBodyRowBefore$$ - 1].$rowIdx$ != $rows$$9$$[$i$$194_tableBodyRowBefore$$].$rowIdx$ - 1) {
            $columns$$2_isContiguous_tableBodyDocFrag$$ = !1;
            break;
          }
        }
        if ($columns$$2_isContiguous_tableBodyDocFrag$$) {
          $batchAdd_j$$29_tableBody$$ = this.$_getTableDomUtils$().$getTableBody$();
          $columns$$2_isContiguous_tableBodyDocFrag$$ = $$$$14$$(document.createDocumentFragment());
          for ($i$$194_tableBodyRowBefore$$ = 0;$i$$194_tableBodyRowBefore$$ < $rows$$9$$.length;$i$$194_tableBodyRowBefore$$++) {
            this.$_addSingleTableBodyRow$($rows$$9$$[$i$$194_tableBodyRowBefore$$].$rowIdx$, $rows$$9$$[$i$$194_tableBodyRowBefore$$].row, $columns$$2_isContiguous_tableBodyDocFrag$$);
          }
          0 == $rows$$9$$[0].$rowIdx$ ? $batchAdd_j$$29_tableBody$$.prepend($columns$$2_isContiguous_tableBodyDocFrag$$) : ($i$$194_tableBodyRowBefore$$ = this.$_getTableDomUtils$().$getTableBodyRow$($rows$$9$$[0].$rowIdx$), null != $i$$194_tableBodyRowBefore$$ ? $batchAdd_j$$29_tableBody$$[0].insertBefore($columns$$2_isContiguous_tableBodyDocFrag$$[0], $i$$194_tableBodyRowBefore$$[0]) : $batchAdd_j$$29_tableBody$$[0].insertBefore($columns$$2_isContiguous_tableBodyDocFrag$$[0], null));
          for ($i$$194_tableBodyRowBefore$$ = 0;$i$$194_tableBodyRowBefore$$ < $rows$$9$$.length;$i$$194_tableBodyRowBefore$$++) {
            for (this.$_getTableDomUtils$().$renderDelayedTableBodyRow$($rows$$9$$[$i$$194_tableBodyRowBefore$$].$rowIdx$), $columns$$2_isContiguous_tableBodyDocFrag$$ = this.$_getColumnDefs$(), $batchAdd_j$$29_tableBody$$ = 0;$batchAdd_j$$29_tableBody$$ < $columns$$2_isContiguous_tableBodyDocFrag$$.length;$batchAdd_j$$29_tableBody$$++) {
              this.$_getTableDomUtils$().$renderDelayedTableBodyCell$($rows$$9$$[$i$$194_tableBodyRowBefore$$].$rowIdx$, $batchAdd_j$$29_tableBody$$);
            }
          }
          this.$_getTableDomUtils$().$clearDelayedRenderRows$();
          this.$_getTableDomUtils$().$clearDelayedRenderCells$();
          $batchAdd_j$$29_tableBody$$ = !0;
        }
      }
      if (!$batchAdd_j$$29_tableBody$$) {
        for ($i$$194_tableBodyRowBefore$$ = 0;$i$$194_tableBodyRowBefore$$ < $rows$$9$$.length;$i$$194_tableBodyRowBefore$$++) {
          this.$_addSingleTableBodyRow$($rows$$9$$[$i$$194_tableBodyRowBefore$$].$rowIdx$, $rows$$9$$[$i$$194_tableBodyRowBefore$$].row);
        }
      }
      this.$_getTableDomUtils$().$clearCachedDomRowData$();
      this.$_getTableDomUtils$().$refreshTableDimensions$();
    }, $_executeTableBodyRowsChange$:function($rows$$10$$) {
      var $i$$195$$;
      for ($i$$195$$ = 0;$i$$195$$ < $rows$$10$$.length;$i$$195$$++) {
        $rows$$10$$[$i$$195$$].row instanceof $oj$$14$$.$Row$ ? this.$_refreshTableBodyRow$($rows$$10$$[$i$$195$$].$rowIdx$, $rows$$10$$[$i$$195$$].row) : this.$_asyncRefreshTableBodyRow$($rows$$10$$[$i$$195$$].row);
      }
      this.$_getTableDomUtils$().$refreshTableDimensions$();
    }, $_executeTableBodyRowsRemove$:function($rows$$11$$) {
      var $i$$196$$;
      for ($i$$196$$ = 0;$i$$196$$ < $rows$$11$$.length;$i$$196$$++) {
        this.$_removeTableBodyRow$($rows$$11$$[$i$$196$$].$rowIdx$);
      }
      this.$_getTableDomUtils$().$refreshTableDimensions$();
    }, $_fireOptionChange$:function($key$$78$$, $previousValue$$4$$, $value$$182$$, $event$$146$$) {
      this._trigger("optionChange", $event$$146$$, {option:$key$$78$$, previousValue:$previousValue$$4$$, value:$value$$182$$, optionMetadata:{writeback:$event$$146$$ ? "shouldWrite" : "shouldNotWrite"}});
    }, $_getColumnDefs$:function() {
      this.$_columnDefArray$ || (this.$_columnDefArray$ = this.$_getColumnMetadata$());
      return this.$_columnDefArray$;
    }, $_getColumnMetadata$:function() {
      var $columns$$3_columnsSortedArray$$ = this.options.columns, $columnsDefault_sortSupportedData$$ = this.options.columnsDefault;
      if ((0 == $columns$$3_columnsSortedArray$$.length || 1 == $columns$$3_columnsSortedArray$$.length && null == $columns$$3_columnsSortedArray$$[0].id && null == $columns$$3_columnsSortedArray$$[0].headerText && null == $columns$$3_columnsSortedArray$$[0].field) && null == $columnsDefault_sortSupportedData$$.headerText && null == $columnsDefault_sortSupportedData$$.field) {
        return[];
      }
      var $defaultedColumns$$ = [], $data$$109_i$$197$$;
      for ($data$$109_i$$197$$ = 0;$data$$109_i$$197$$ < $columns$$3_columnsSortedArray$$.length;$data$$109_i$$197$$++) {
        $defaultedColumns$$[$data$$109_i$$197$$] = $$$$14$$.extend({}, $columnsDefault_sortSupportedData$$, $columns$$3_columnsSortedArray$$[$data$$109_i$$197$$]);
      }
      $columns$$3_columnsSortedArray$$ = [];
      for ($data$$109_i$$197$$ = 0;$data$$109_i$$197$$ < $defaultedColumns$$.length;$data$$109_i$$197$$++) {
        $columns$$3_columnsSortedArray$$.push($defaultedColumns$$[$data$$109_i$$197$$]);
      }
      $data$$109_i$$197$$ = this.$_getData$();
      $columnsDefault_sortSupportedData$$ = !1;
      null != $data$$109_i$$197$$ && "full" == $data$$109_i$$197$$.getCapability("sort") && ($columnsDefault_sortSupportedData$$ = !0);
      for ($data$$109_i$$197$$ = 0;$data$$109_i$$197$$ < $defaultedColumns$$.length;$data$$109_i$$197$$++) {
        null == $columns$$3_columnsSortedArray$$[$data$$109_i$$197$$].id && ($columns$$3_columnsSortedArray$$[$data$$109_i$$197$$].id = this.$_COLUMN_HEADER_ID_PREFIX$ + $data$$109_i$$197$$), null != $columns$$3_columnsSortedArray$$[$data$$109_i$$197$$].sortable && $columns$$3_columnsSortedArray$$[$data$$109_i$$197$$].sortable != this.$_OPTION_AUTO$ || !$columnsDefault_sortSupportedData$$ || ($columns$$3_columnsSortedArray$$[$data$$109_i$$197$$].sortable = this.$_OPTION_ENABLED$);
      }
      return $columns$$3_columnsSortedArray$$;
    }, $_getColumnIdxForColumnKey$:function($columnKey$$3$$) {
      var $columns$$4$$ = this.$_getColumnDefs$();
      if (null != $columns$$4$$) {
        var $i$$198$$, $column$$9$$;
        for ($i$$198$$ = 0;$i$$198$$ < $columns$$4$$.length;$i$$198$$++) {
          if ($column$$9$$ = $columns$$4$$[$i$$198$$], $oj$$14$$.$Object$.$compareValues$($column$$9$$.id, $columnKey$$3$$)) {
            return $i$$198$$;
          }
        }
      }
      return null;
    }, $_getColumnIdxsForElementsWithStyleClass$:function($elements$$1_styleClass$$) {
      $elements$$1_styleClass$$ = this.$_getTableDomUtils$().$getTable$().find($elements$$1_styleClass$$);
      var $columnIdxs$$ = [];
      if ($elements$$1_styleClass$$ && 0 < $elements$$1_styleClass$$.length) {
        var $i$$199$$, $j$$30$$, $alreadyAdded$$, $columnIdx$$10$$;
        for ($i$$199$$ = 0;$i$$199$$ < $elements$$1_styleClass$$.length;$i$$199$$++) {
          $columnIdx$$10$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($elements$$1_styleClass$$.get($i$$199$$)));
          $alreadyAdded$$ = !1;
          for ($j$$30$$ = 0;$j$$30$$ < $columnIdxs$$.length;$j$$30$$++) {
            $columnIdxs$$[$j$$30$$] == $columnIdx$$10$$ && ($alreadyAdded$$ = !0);
          }
          $alreadyAdded$$ || $columnIdxs$$.push($columnIdx$$10$$);
        }
      }
      return $columnIdxs$$;
    }, $_getColumnKeyForColumnIdx$:function($columnIdx$$11$$) {
      var $columns$$5$$ = this.$_getColumnDefs$();
      return null != $columns$$5$$ && $columnIdx$$11$$ < $columns$$5$$.length ? $columns$$5$$[$columnIdx$$11$$].id : null;
    }, $_getColumnRenderer$:function($columnIdx$$12$$, $type$$78$$) {
      var $column$$10$$ = this.$_getColumnDefs$()[$columnIdx$$12$$];
      return "cell" == $type$$78$$ ? $column$$10$$.renderer : "footer" == $type$$78$$ ? $column$$10$$.footerRenderer : "header" == $type$$78$$ ? $column$$10$$.headerRenderer : null;
    }, $_getCurrentRow$:function() {
      return this.$_getData$() ? this.$_currentRow$ : null;
    }, $_getData$:function() {
      if (!this.$_data$ && null != this.options.data) {
        var $data$$111$$ = this.options.data;
        if ($data$$111$$ instanceof $oj$$14$$.$TableDataSource$ || $data$$111$$ instanceof $oj$$14$$.$PagingTableDataSource$) {
          this.$_data$ = $data$$111$$;
        } else {
          throw Error(this.$_LOGGER_MSG$.$_ERR_DATA_INVALID_TYPE_SUMMARY$ + "\n" + this.$_LOGGER_MSG$.$_ERR_DATA_INVALID_TYPE_DETAIL$);
        }
        this.$_registerDataSourceEventListeners$();
        if ($data$$111$$ instanceof $oj$$14$$.$TableDataSource$) {
          var $self$$87$$ = this;
          setTimeout(function() {
            0 == $self$$87$$.$_data$.size() && $self$$87$$.$_getData$().fetch({fetchType:"init"});
          }, 0);
        }
      }
      return this.$_data$;
    }, $_getFocusedHeaderColumnIdx$:function() {
      return this.$_getColumnIdxsForElementsWithStyleClass$("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CELL_CLASS$ + "." + $oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$)[0];
    }, $_getFocusedRowIdx$:function() {
      return this.$_getRowIdxsForElementsWithStyleClass$("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$ + "." + $oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$)[0];
    }, $_getHeaderColumnFocus$:function($columnIdx$$13$$) {
      return this.$_getHeaderColumnState$($columnIdx$$13$$).$focused$;
    }, $_getHeaderColumnSelection$:function($columnIdx$$14$$) {
      return this.$_getHeaderColumnState$($columnIdx$$14$$).selected;
    }, $_getColumnSelectionMode$:function() {
      return null == this.options.selectionMode ? null : this.options.selectionMode.column;
    }, $_getHeaderColumnState$:function($columnIdx$$15_headerColumn$$) {
      $columnIdx$$15_headerColumn$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$15_headerColumn$$);
      return{$focused$:$columnIdx$$15_headerColumn$$.hasClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$), selected:$columnIdx$$15_headerColumn$$.hasClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$)};
    }, $_getKeyboardKeys$:function() {
      this.$_keyboardKeys$ || (this.$_keyboardKeys$ = []);
      return this.$_keyboardKeys$.reverse();
    }, $_getLastHeaderColumnSelection$:function() {
      return null != this.$_lastSelectedColumnIdxArray$ && 0 < this.$_lastSelectedColumnIdxArray$.length ? this.$_lastSelectedColumnIdxArray$[0] : null;
    }, $_getLastRowSelection$:function() {
      return null != this.$_lastSelectedRowIdxArray$ && 0 < this.$_lastSelectedRowIdxArray$.length ? this.$_lastSelectedRowIdxArray$[0] : null;
    }, $_getJQueryElement$:function($elements$$2$$, $type$$79$$) {
      var $i$$200$$;
      for ($i$$200$$ = 0;$i$$200$$ < $$$$14$$($elements$$2$$).length;$i$$200$$++) {
        if ($$$$14$$($$$$14$$($elements$$2$$)[$i$$200$$]).is($type$$79$$)) {
          return $$$$14$$($elements$$2$$)[$i$$200$$];
        }
      }
      return null;
    }, $_getRowFocus$:function($rowIdx$$11$$) {
      return this.$_getTableDomUtils$().$getTableBodyRow$($rowIdx$$11$$).hasClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$);
    }, $_getRowHover$:function($rowIdx$$12$$) {
      return this.$_getTableDomUtils$().$getTableBodyRow$($rowIdx$$12$$).hasClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_HOVER$);
    }, $_getRowIdxForRowKey$:function($rowKey$$19$$) {
      var $data$$112$$ = this.$_getData$();
      if (null != $data$$112$$) {
        var $startIndex$$9$$ = $data$$112$$.startIndex(), $endIndex$$7$$ = $startIndex$$9$$ + $data$$112$$.size(), $i$$201$$, $row$$36$$, $rowIdx$$13$$;
        for ($i$$201$$ = $startIndex$$9$$;$i$$201$$ < $endIndex$$7$$;$i$$201$$++) {
          if ($rowIdx$$13$$ = $i$$201$$ - $startIndex$$9$$, $row$$36$$ = $data$$112$$.at($i$$201$$), null != $row$$36$$ && $row$$36$$ instanceof $oj$$14$$.$Row$ && $oj$$14$$.$Object$.$compareValues$($row$$36$$.id, $rowKey$$19$$)) {
            return $rowIdx$$13$$;
          }
        }
      }
      return null;
    }, $_getRowIdxsForElementsWithStyleClass$:function($elements$$3_styleClass$$1$$) {
      $elements$$3_styleClass$$1$$ = this.$_getTableDomUtils$().$getTable$().find($elements$$3_styleClass$$1$$);
      var $rowIdxs$$ = [];
      if ($elements$$3_styleClass$$1$$ && 0 < $elements$$3_styleClass$$1$$.length) {
        var $i$$202$$, $j$$31$$, $rowIdx$$14$$, $alreadyAdded$$1$$;
        for ($i$$202$$ = 0;$i$$202$$ < $elements$$3_styleClass$$1$$.length;$i$$202$$++) {
          $rowIdx$$14$$ = this.$_getTableDomUtils$().$getElementRowIdx$($$$$14$$($elements$$3_styleClass$$1$$.get($i$$202$$)));
          $alreadyAdded$$1$$ = !1;
          for ($j$$31$$ = 0;$j$$31$$ < $rowIdxs$$.length;$j$$31$$++) {
            $rowIdxs$$[$j$$31$$] == $rowIdx$$14$$ && ($alreadyAdded$$1$$ = !0);
          }
          $alreadyAdded$$1$$ || $rowIdxs$$.push($rowIdx$$14$$);
        }
      }
      return $rowIdxs$$;
    }, $_getRowKeyForRowIdx$:function($row$$37_rowIdx$$15$$) {
      var $data$$113$$ = this.$_getData$();
      return null != $data$$113$$ && ($row$$37_rowIdx$$15$$ = $data$$113$$.at($row$$37_rowIdx$$15$$), null != $row$$37_rowIdx$$15$$ && $row$$37_rowIdx$$15$$ instanceof $oj$$14$$.$Row$) ? $row$$37_rowIdx$$15$$.id : null;
    }, $_getRowRenderer$:function() {
      return this.options.rowRenderer;
    }, $_getRowSelection$:function($rowIdx$$16$$) {
      return this.$_getTableDomUtils$().$getTableBodyRow$($rowIdx$$16$$).hasClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$);
    }, $_getRowSelectionMode$:function() {
      return null == this.options.selectionMode ? null : this.options.selectionMode.row;
    }, $_getSelectedHeaderColumnIdxs$:function() {
      return this.$_getColumnIdxsForElementsWithStyleClass$("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CELL_CLASS$ + "." + $oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$);
    }, $_getSelectedRowIdxs$:function() {
      return this.$_getRowIdxsForElementsWithStyleClass$("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$ + "." + $oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$);
    }, $_getSelection$:function() {
      var $data$$114_startIndex$$10$$ = this.$_getData$(), $data$$114_startIndex$$10$$ = null != $data$$114_startIndex$$10$$ ? $data$$114_startIndex$$10$$.startIndex() : 0, $rangeArray_selectedRowIdxs$$1$$ = this.$_getSelectedRowIdxs$(), $rangeCount$$1_selectedColumnIdxs$$ = this.$_getSelectedHeaderColumnIdxs$(), $selectionIdxs$$ = null, $rowSelection$$ = !0;
      if (null != $rangeArray_selectedRowIdxs$$1$$ && 0 < $rangeArray_selectedRowIdxs$$1$$.length) {
        $selectionIdxs$$ = $rangeArray_selectedRowIdxs$$1$$;
      } else {
        if (null != $rangeCount$$1_selectedColumnIdxs$$ && 0 < $rangeCount$$1_selectedColumnIdxs$$.length) {
          $selectionIdxs$$ = $rangeCount$$1_selectedColumnIdxs$$, $rowSelection$$ = !1;
        } else {
          return null;
        }
      }
      var $rangeArray_selectedRowIdxs$$1$$ = [], $rangeCount$$1_selectedColumnIdxs$$ = 0, $previousIdx$$ = null, $rangeObj$$, $selectionIdx$$, $selectionKey$$, $i$$203$$;
      for ($i$$203$$ = 0;$i$$203$$ < $selectionIdxs$$.length;$i$$203$$++) {
        $selectionIdx$$ = $selectionIdxs$$[$i$$203$$] + $data$$114_startIndex$$10$$, 0 == $i$$203$$ ? ($rangeObj$$ = {startIndex:{}, endIndex:{}, startKey:{}, endKey:{}}, $rowSelection$$ ? ($rangeObj$$.startIndex.row = $selectionIdx$$, $rangeObj$$.endIndex.row = $selectionIdx$$, $selectionKey$$ = this.$_getRowKeyForRowIdx$($selectionIdx$$), $rangeObj$$.startKey.row = $selectionKey$$, $rangeObj$$.endKey.row = $selectionKey$$) : ($rangeObj$$.startIndex.column = $selectionIdx$$, $rangeObj$$.endIndex.column = 
        $selectionIdx$$, $selectionKey$$ = this.$_getColumnKeyForColumnIdx$($selectionIdx$$), $rangeObj$$.startKey.column = $selectionKey$$, $rangeObj$$.endKey.column = $selectionKey$$), $rangeArray_selectedRowIdxs$$1$$[0] = $rangeObj$$) : ($rangeObj$$ = $rangeArray_selectedRowIdxs$$1$$[$rangeCount$$1_selectedColumnIdxs$$], $rowSelection$$ ? ($rangeObj$$.endIndex.row = $selectionIdx$$, $selectionKey$$ = this.$_getRowKeyForRowIdx$($selectionIdx$$), $rangeObj$$.endKey.row = $selectionKey$$) : ($rangeObj$$.endIndex.column = 
        $selectionIdx$$, $selectionKey$$ = this.$_getColumnKeyForColumnIdx$($selectionIdx$$), $rangeObj$$.endKey.column = $selectionKey$$), $selectionIdx$$ != $previousIdx$$ + 1 && ($rowSelection$$ ? ($rangeObj$$.endIndex.row = $previousIdx$$, $selectionKey$$ = this.$_getRowKeyForRowIdx$($previousIdx$$), $rangeObj$$.endKey.row = $selectionKey$$, $rangeObj$$ = {startIndex:{}, endIndex:{}, startKey:{}, endKey:{}}, $rangeObj$$.startIndex.row = $selectionIdx$$, $rangeObj$$.endIndex.row = $selectionIdx$$, 
        $selectionKey$$ = this.$_getRowKeyForRowIdx$($selectionIdx$$), $rangeObj$$.startKey.row = $selectionKey$$, $rangeObj$$.endKey.row = $selectionKey$$) : ($rangeObj$$.endIndex.column = $previousIdx$$, $selectionKey$$ = this.$_getColumnKeyForColumnIdx$($previousIdx$$), $rangeObj$$.endKey.column = $selectionKey$$, $rangeObj$$ = {startIndex:{}, endIndex:{}, startKey:{}, endKey:{}}, $rangeObj$$.startIndex.column = $selectionIdx$$, $rangeObj$$.endIndex.column = $selectionIdx$$, $selectionKey$$ = 
        this.$_getColumnKeyForColumnIdx$($selectionIdx$$), $rangeObj$$.startKey.column = $selectionKey$$, $rangeObj$$.endKey.column = $selectionKey$$), $rangeCount$$1_selectedColumnIdxs$$++, $rangeArray_selectedRowIdxs$$1$$[$rangeCount$$1_selectedColumnIdxs$$] = $rangeObj$$)), $previousIdx$$ = $selectionIdx$$;
      }
      return $rangeArray_selectedRowIdxs$$1$$;
    }, $_getSortedTableHeaderColumnIdx$:function() {
      var $tableHeaderColumns$$ = this.$_getTableDomUtils$().$getTableHeaderColumns$(), $i$$204$$, $sorted$$3$$;
      for ($i$$204$$ = 0;$i$$204$$ < $tableHeaderColumns$$.length;$i$$204$$++) {
        if ($sorted$$3$$ = $$$$14$$($tableHeaderColumns$$[$i$$204$$]).data("sorted"), null != $sorted$$3$$) {
          return $i$$204$$;
        }
      }
      return null;
    }, $_getTabbableElements$:function($element$$57_tabbableElements$$) {
      $element$$57_tabbableElements$$ = $element$$57_tabbableElements$$.find(":tabbable");
      return null != $element$$57_tabbableElements$$ && 0 < $element$$57_tabbableElements$$.length ? $element$$57_tabbableElements$$ : null;
    }, $_getTableDomUtils$:function() {
      this.$_tableDomUtils$ || (this.$_tableDomUtils$ = new $oj$$14$$.$TableDomUtils$(this));
      return this.$_tableDomUtils$;
    }, $_getTableRowCount$:function() {
      var $rows$$12$$ = this.$_getTableDomUtils$().$getTableBodyRows$();
      return null != $rows$$12$$ ? $rows$$12$$.length : 0;
    }, $_handleContextMenuBeforeShow$:function($event$$147$$, $ui$$4$$) {
      this.$_getTableDomUtils$();
      this.$_contextMenuEvent$ = $event$$147$$.originalEvent.originalEvent;
      if (this.$_isNodeEditableOrClickable$($$$$14$$(this.$_contextMenuEvent$.target))) {
        return!1;
      }
      $ui$$4$$.openOptions.position = "keydown" === this.$_contextMenuEvent$.type ? {my:"start top", at:"start bottom", of:this.$_contextMenuEvent$.target} : {my:"start top", at:"start bottom"};
      var $columnIdx$$16_headerColumn$$1$$ = this.$_getTableDomUtils$().$getFirstAncestor$($$$$14$$(this.$_contextMenuEvent$.target), "oj-table-column-header-cell"), $columnIdx$$16_headerColumn$$1$$ = null == $columnIdx$$16_headerColumn$$1$$ ? this.$_getTableDomUtils$().$getTableHeaderColumn$(this.$_activeColumnIndex$) : $columnIdx$$16_headerColumn$$1$$, $tableBodyCell$$ = this.$_getTableDomUtils$().$getFirstAncestor$($$$$14$$(this.$_contextMenuEvent$.target), "oj-table-data-cell");
      null != $tableBodyCell$$ && ($columnIdx$$16_headerColumn$$1$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($tableBodyCell$$), $columnIdx$$16_headerColumn$$1$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$16_headerColumn$$1$$));
      if ($columnIdx$$16_headerColumn$$1$$.attr("data-oj-sortable") == this.$_OPTION_ENABLED$) {
        this.$_getTableDomUtils$().$_menuContainer$.find("[data-oj-command\x3doj-table-sortAsc]").removeClass("oj-disabled"), this.$_getTableDomUtils$().$_menuContainer$.find("[data-oj-command\x3doj-table-sortDsc]").removeClass("oj-disabled");
      } else {
        return this.$_getTableDomUtils$().$_menuContainer$.find("[data-oj-command\x3doj-table-sortAsc]").addClass("oj-disabled"), this.$_getTableDomUtils$().$_menuContainer$.find("[data-oj-command\x3doj-table-sortDsc]").addClass("oj-disabled"), !1;
      }
    }, $_handleContextMenuSelect$:function($event$$148$$, $ui$$5$$) {
      var $menuItemCommand$$ = $ui$$5$$.item.attr("data-oj-command"), $headerColumn$$2$$ = this.$_getTableDomUtils$().$getFirstAncestor$($$$$14$$(this.$_contextMenuEvent$.target), "oj-table-column-header-cell"), $tableBodyCell$$1$$ = this.$_getTableDomUtils$().$getFirstAncestor$($$$$14$$(this.$_contextMenuEvent$.target), "oj-table-data-cell"), $columnIdx$$17$$ = null;
      null != $headerColumn$$2$$ && ($columnIdx$$17$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($headerColumn$$2$$));
      null != $tableBodyCell$$1$$ && ($columnIdx$$17$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($tableBodyCell$$1$$));
      "oj-table-sortAsc" == $menuItemCommand$$ ? this.$_handleSortTableHeaderColumn$($columnIdx$$17$$, !0) : "oj-table-sortDsc" == $menuItemCommand$$ && this.$_handleSortTableHeaderColumn$($columnIdx$$17$$, !1);
    }, $_handleDataError$:function($error$$23$$) {
      this.$_hideStatusMessage$();
      $oj$$14$$.$Logger$.error($error$$23$$);
    }, $_handleDataFetchStart$:function() {
      this.$_showStatusMessage$();
      this.$_dataFetching$ = !0;
    }, $_handleDataFetchEnd$:function($event$$150$$) {
      try {
        this.$_dataFetching$ && this.$_dataSorting$ ? (this.$_dataSorting$ = this.$_dataFetching$ = !1, this.$_handleDataSort$()) : $event$$150$$.refresh && this.$_refreshAll$(!0, !0), this.$_hideStatusMessage$();
      } catch ($e$$81$$) {
        throw $e$$81$$;
      } finally {
        this.$_dataSorting$ = this.$_dataFetching$ = !1;
      }
    }, $_handleDataReset$:function() {
      this.$_hideStatusMessage$();
      this.$_refreshAll$();
      this.$_setCurrentRow$(null, null);
    }, $_handleDataRowAdd$:function($event$$152$$) {
      if ($event$$152$$ && void 0 !== $event$$152$$.index) {
        var $rowIdx$$17$$ = $event$$152$$.index, $data$$115_endIndex$$8$$ = this.$_getData$();
        this.$_hideStatusMessage$();
        var $startIndex$$11$$ = $data$$115_endIndex$$8$$.startIndex(), $data$$115_endIndex$$8$$ = $startIndex$$11$$ + $data$$115_endIndex$$8$$.size() - 1;
        null != $rowIdx$$17$$ && ($rowIdx$$17$$ < $startIndex$$11$$ || $rowIdx$$17$$ > $data$$115_endIndex$$8$$) || (0 <= $rowIdx$$17$$ && ($rowIdx$$17$$ -= $startIndex$$11$$), this.$_queueTableBodyRowOperation$($oj$$14$$.$TableDataSource$.$EventType$.ADD, $rowIdx$$17$$, $event$$152$$));
      }
    }, $_handleDataRowChange$:function($event$$153$$) {
      var $rowIdx$$18$$ = $event$$153$$.index, $data$$116_endIndex$$9$$ = this.$_getData$();
      this.$_hideStatusMessage$();
      var $startIndex$$12$$ = $data$$116_endIndex$$9$$.startIndex(), $data$$116_endIndex$$9$$ = $startIndex$$12$$ + $data$$116_endIndex$$9$$.size() - 1;
      null != $rowIdx$$18$$ && ($rowIdx$$18$$ < $startIndex$$12$$ || $rowIdx$$18$$ > $data$$116_endIndex$$9$$) || (0 <= $rowIdx$$18$$ && ($rowIdx$$18$$ -= $startIndex$$12$$), this.$_queueTableBodyRowOperation$($oj$$14$$.$TableDataSource$.$EventType$.CHANGE, $rowIdx$$18$$, $event$$153$$));
    }, $_handleDataRowRemove$:function($event$$154$$) {
      var $rowIdx$$19$$ = $event$$154$$.index, $data$$117_startIndex$$13$$ = this.$_getData$();
      this.$_hideStatusMessage$();
      $data$$117_startIndex$$13$$ = $data$$117_startIndex$$13$$.startIndex();
      this.$_queueTableBodyRowOperation$($oj$$14$$.$TableDataSource$.$EventType$.REMOVE, $rowIdx$$19$$ - $data$$117_startIndex$$13$$, $event$$154$$);
    }, $_handleDataSort$:function() {
      if (!this.$_dataFetching$) {
        this.$_hideStatusMessage$();
        this.$_refreshTableBody$();
        this.$_getTableDomUtils$().$refreshTableDimensions$(!0);
        this.$_setSelection$(null);
        var $existingSelection$$1$$ = this.options.selection;
        this.options.selection = null;
        this.$_fireOptionChange$("selection", $existingSelection$$1$$, this.options.selection, null);
        this.$_setCurrentRow$(this.options.currentRow, null);
      }
    }, $_handleKeydownLeftRight$:function($event$$156$$) {
      var $focusedHeaderColumnIdx$$2$$ = this.$_getFocusedHeaderColumnIdx$(), $columns$$7_newFocusedHeaderColumnSelection$$ = this.$_getColumnDefs$();
      if (null != $focusedHeaderColumnIdx$$2$$) {
        var $newFocusedHeaderColumnIdx$$ = $focusedHeaderColumnIdx$$2$$;
        this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_LEFT$) ? $newFocusedHeaderColumnIdx$$ = 0 < $focusedHeaderColumnIdx$$2$$ ? $focusedHeaderColumnIdx$$2$$ - 1 : $focusedHeaderColumnIdx$$2$$ : this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_RIGHT$) && ($newFocusedHeaderColumnIdx$$ = $focusedHeaderColumnIdx$$2$$ < $columns$$7_newFocusedHeaderColumnSelection$$.length - 1 ? $focusedHeaderColumnIdx$$2$$ + 1 : $focusedHeaderColumnIdx$$2$$);
        $newFocusedHeaderColumnIdx$$ != $focusedHeaderColumnIdx$$2$$ && (this.$_setHeaderColumnFocus$($newFocusedHeaderColumnIdx$$, !0, !1, null), $event$$156$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$] && ($columns$$7_newFocusedHeaderColumnSelection$$ = this.$_getHeaderColumnSelection$($newFocusedHeaderColumnIdx$$), this.$_setHeaderColumnSelection$($newFocusedHeaderColumnIdx$$, !$columns$$7_newFocusedHeaderColumnSelection$$, null, $event$$156$$, !0), $columns$$7_newFocusedHeaderColumnSelection$$ && 
        this.$_getHeaderColumnSelection$($focusedHeaderColumnIdx$$2$$) && this.$_setHeaderColumnSelection$($focusedHeaderColumnIdx$$2$$, !1, null, $event$$156$$, !0)));
      }
    }, $_handleKeydownTab$:function($event$$157$$) {
      var $tabHandled_tabbableElementsInDocument$$ = !1, $focusedRowIdx$$2_tabbableElementsInRow_tableBodyRow$$1_tableTabIndex$$ = this.$_getFocusedRowIdx$();
      if (null != $focusedRowIdx$$2_tabbableElementsInRow_tableBodyRow$$1_tableTabIndex$$ && this.$_tableNavMode$) {
        var $tabbableElementsInBody_tabbableElementsInTable_tabbableElementsInTableCount_table$$1_tableBody$$1$$ = this.$_getTableDomUtils$().$getTableBody$(), $tabbableElementsInBody_tabbableElementsInTable_tabbableElementsInTableCount_table$$1_tableBody$$1$$ = this.$_getTabbableElements$($tabbableElementsInBody_tabbableElementsInTable_tabbableElementsInTableCount_table$$1_tableBody$$1$$);
        if (null != $tabbableElementsInBody_tabbableElementsInTable_tabbableElementsInTableCount_table$$1_tableBody$$1$$) {
          var $tabHandled_tabbableElementsInDocument$$ = !0, $currentFocusElement$$ = document.activeElement, $isCurrentlyFocused$$ = !1, $i$$205$$;
          for ($i$$205$$ = 0;$i$$205$$ < $tabbableElementsInBody_tabbableElementsInTable_tabbableElementsInTableCount_table$$1_tableBody$$1$$.length;$i$$205$$++) {
            if ($currentFocusElement$$ == $tabbableElementsInBody_tabbableElementsInTable_tabbableElementsInTableCount_table$$1_tableBody$$1$$[$i$$205$$]) {
              $isCurrentlyFocused$$ = !0;
              break;
            }
          }
          if ($isCurrentlyFocused$$) {
            return;
          }
          $event$$157$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$] || ($focusedRowIdx$$2_tabbableElementsInRow_tableBodyRow$$1_tableTabIndex$$ = this.$_getTableDomUtils$().$getTableBodyRow$($focusedRowIdx$$2_tabbableElementsInRow_tableBodyRow$$1_tableTabIndex$$), $focusedRowIdx$$2_tabbableElementsInRow_tableBodyRow$$1_tableTabIndex$$ = this.$_getTabbableElements$($focusedRowIdx$$2_tabbableElementsInRow_tableBodyRow$$1_tableTabIndex$$), null != $focusedRowIdx$$2_tabbableElementsInRow_tableBodyRow$$1_tableTabIndex$$ ? 
          $$$$14$$($focusedRowIdx$$2_tabbableElementsInRow_tableBodyRow$$1_tableTabIndex$$[0]).focus() : $$$$14$$($tabbableElementsInBody_tabbableElementsInTable_tabbableElementsInTableCount_table$$1_tableBody$$1$$[0]).focus(), $event$$157$$.preventDefault(), $event$$157$$.stopPropagation());
        }
      }
      $tabHandled_tabbableElementsInDocument$$ || ($tabbableElementsInBody_tabbableElementsInTable_tabbableElementsInTableCount_table$$1_tableBody$$1$$ = this.$_getTableDomUtils$().$getTable$(), $tabHandled_tabbableElementsInDocument$$ = this.$_getTabbableElements$($$$$14$$(document)), $tabbableElementsInBody_tabbableElementsInTable_tabbableElementsInTableCount_table$$1_tableBody$$1$$ = this.$_getTabbableElements$($tabbableElementsInBody_tabbableElementsInTable_tabbableElementsInTableCount_table$$1_tableBody$$1$$), 
      $tabbableElementsInBody_tabbableElementsInTable_tabbableElementsInTableCount_table$$1_tableBody$$1$$ = null != $tabbableElementsInBody_tabbableElementsInTable_tabbableElementsInTableCount_table$$1_tableBody$$1$$ ? $tabbableElementsInBody_tabbableElementsInTable_tabbableElementsInTableCount_table$$1_tableBody$$1$$.length : 0, $focusedRowIdx$$2_tabbableElementsInRow_tableBodyRow$$1_tableTabIndex$$ = $tabHandled_tabbableElementsInDocument$$.index(this.$_getTableDomUtils$().$getTable$()), $event$$157$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$] ? 
      $$$$14$$($tabHandled_tabbableElementsInDocument$$[$focusedRowIdx$$2_tabbableElementsInRow_tableBodyRow$$1_tableTabIndex$$ - 1]).focus() : $$$$14$$($tabHandled_tabbableElementsInDocument$$[$focusedRowIdx$$2_tabbableElementsInRow_tableBodyRow$$1_tableTabIndex$$ + $tabbableElementsInBody_tabbableElementsInTable_tabbableElementsInTableCount_table$$1_tableBody$$1$$ + 1]).focus(), $event$$157$$.preventDefault(), $event$$157$$.stopPropagation());
      this.$_removeKeyboardKey$($event$$157$$.keyCode);
    }, $_handleKeydownUpDown$:function($event$$158$$) {
      var $focusedRowIdx$$3$$ = this.$_getFocusedRowIdx$(), $focusedHeaderColumnIdx$$3_newFocusedRowIdx$$ = this.$_getFocusedHeaderColumnIdx$();
      if (null != $focusedRowIdx$$3$$) {
        var $data$$118_newFocusedRowSelection$$ = this.$_getData$(), $focusedHeaderColumnIdx$$3_newFocusedRowIdx$$ = $focusedRowIdx$$3$$;
        this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_UP$) ? $focusedHeaderColumnIdx$$3_newFocusedRowIdx$$ = 0 < $focusedRowIdx$$3$$ ? $focusedRowIdx$$3$$ - 1 : $focusedRowIdx$$3$$ : this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_DOWN$) && ($focusedHeaderColumnIdx$$3_newFocusedRowIdx$$ = $focusedRowIdx$$3$$ < $data$$118_newFocusedRowSelection$$.size() - 1 ? $focusedRowIdx$$3$$ + 1 : $focusedRowIdx$$3$$);
        $focusedHeaderColumnIdx$$3_newFocusedRowIdx$$ != $focusedRowIdx$$3$$ ? (this.$_setRowFocus$($focusedHeaderColumnIdx$$3_newFocusedRowIdx$$, !0, null, $event$$158$$), $event$$158$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$] && ($data$$118_newFocusedRowSelection$$ = this.$_getRowSelection$($focusedHeaderColumnIdx$$3_newFocusedRowIdx$$), this.$_setRowSelection$($focusedHeaderColumnIdx$$3_newFocusedRowIdx$$, !$data$$118_newFocusedRowSelection$$, null, $event$$158$$, !0), $data$$118_newFocusedRowSelection$$ && 
        this.$_getRowSelection$($focusedRowIdx$$3$$) && this.$_setRowSelection$($focusedRowIdx$$3$$, !1, null, $event$$158$$, !0))) : $focusedHeaderColumnIdx$$3_newFocusedRowIdx$$ == $focusedRowIdx$$3$$ && 0 == $focusedRowIdx$$3$$ && this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_UP$) && this.$_setHeaderColumnFocus$(0, !0, !1, null);
      } else {
        null != $focusedHeaderColumnIdx$$3_newFocusedRowIdx$$ && this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_DOWN$) && this.$_setRowFocus$(0, !0, null, $event$$158$$);
      }
    }, $_handleKeyupEnd$:function() {
      var $focusedColumnIdx$$ = this.$_getFocusedHeaderColumnIdx$();
      null != $focusedColumnIdx$$ && $focusedColumnIdx$$ != this.$_getColumnDefs$().length - 1 && this.$_setHeaderColumnFocus$(this.$_getColumnDefs$().length - 1, !0, !1, null);
    }, $_handleKeyupEnter$:function() {
      var $focusedColumnIdx$$1$$ = this.$_getFocusedHeaderColumnIdx$();
      if (null != $focusedColumnIdx$$1$$ && this.$_getColumnDefs$()[$focusedColumnIdx$$1$$].sortable == this.$_OPTION_ENABLED$) {
        var $sorted$$4$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($focusedColumnIdx$$1$$).data("sorted");
        null == $sorted$$4$$ || $sorted$$4$$ == this.$_COLUMN_SORT_ORDER$.$_DESCENDING$ ? this.$_handleSortTableHeaderColumn$($focusedColumnIdx$$1$$, !0) : this.$_handleSortTableHeaderColumn$($focusedColumnIdx$$1$$, !1);
      }
    }, $_handleKeyupEsc$:function($event$$161$$) {
      $event$$161$$.preventDefault();
      $event$$161$$.stopPropagation();
      this.$_getTableDomUtils$().$getTable$().focus();
      this.$_setTableNavigationMode$(!1);
    }, $_handleKeyupHome$:function() {
      var $focusedColumnIdx$$2$$ = this.$_getFocusedHeaderColumnIdx$();
      null != $focusedColumnIdx$$2$$ && 0 != $focusedColumnIdx$$2$$ && this.$_setHeaderColumnFocus$(0, !0, !1, null);
    }, $_handleKeyupSpacebar$:function($event$$163$$) {
      var $focusedHeaderColumnIdx$$4_focusedRowIdx$$4$$ = this.$_getFocusedRowIdx$();
      null != $focusedHeaderColumnIdx$$4_focusedRowIdx$$4$$ ? this.$_setRowSelection$($focusedHeaderColumnIdx$$4_focusedRowIdx$$4$$, !this.$_getRowSelection$($focusedHeaderColumnIdx$$4_focusedRowIdx$$4$$), null, $event$$163$$, !0) : ($focusedHeaderColumnIdx$$4_focusedRowIdx$$4$$ = this.$_getFocusedHeaderColumnIdx$(), null != $focusedHeaderColumnIdx$$4_focusedRowIdx$$4$$ && (this.$_clearSelectedRows$(), this.$_setHeaderColumnSelection$($focusedHeaderColumnIdx$$4_focusedRowIdx$$4$$, !this.$_getHeaderColumnSelection$($focusedHeaderColumnIdx$$4_focusedRowIdx$$4$$), 
      null, $event$$163$$, !0)));
    }, $_handleSortTableHeaderColumn$:function($columnIdx$$18$$, $ascending$$) {
      this.$_clearSortedHeaderColumn$($columnIdx$$18$$);
      var $column$$11_headerColumnAsc_headerColumnAscLink_headerColumnDsc_headerColumnDscLink$$ = this.$_getColumnDefs$()[$columnIdx$$18$$], $sortField$$ = null == $column$$11_headerColumnAsc_headerColumnAscLink_headerColumnDsc_headerColumnDscLink$$.sortProperty ? $column$$11_headerColumnAsc_headerColumnAscLink_headerColumnDsc_headerColumnDscLink$$.field : $column$$11_headerColumnAsc_headerColumnAscLink_headerColumnDsc_headerColumnDscLink$$.sortProperty, $tableHeaderColumn$$4$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$18$$);
      this.$_invokeDataSort$($sortField$$, $ascending$$, null);
      this.$_sortColumn$ = $column$$11_headerColumnAsc_headerColumnAscLink_headerColumnDsc_headerColumnDscLink$$;
      $ascending$$ ? ($tableHeaderColumn$$4$$.data("sorted", this.$_COLUMN_SORT_ORDER$.$_ASCENDING$), $column$$11_headerColumnAsc_headerColumnAscLink_headerColumnDsc_headerColumnDscLink$$ = $tableHeaderColumn$$4$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$), $column$$11_headerColumnAsc_headerColumnAscLink_headerColumnDsc_headerColumnDscLink$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_ENABLED$), $column$$11_headerColumnAsc_headerColumnAscLink_headerColumnDsc_headerColumnDscLink$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), 
      $column$$11_headerColumnAsc_headerColumnAscLink_headerColumnDsc_headerColumnDscLink$$ = $tableHeaderColumn$$4$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_CLASS$), $column$$11_headerColumnAsc_headerColumnAscLink_headerColumnDsc_headerColumnDscLink$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), $column$$11_headerColumnAsc_headerColumnAscLink_headerColumnDsc_headerColumnDscLink$$ = $tableHeaderColumn$$4$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_CLASS$)) : 
      ($tableHeaderColumn$$4$$.data("sorted", this.$_COLUMN_SORT_ORDER$.$_DESCENDING$), $column$$11_headerColumnAsc_headerColumnAscLink_headerColumnDsc_headerColumnDscLink$$ = $tableHeaderColumn$$4$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$), $column$$11_headerColumnAsc_headerColumnAscLink_headerColumnDsc_headerColumnDscLink$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_ENABLED$), $column$$11_headerColumnAsc_headerColumnAscLink_headerColumnDsc_headerColumnDscLink$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), 
      $column$$11_headerColumnAsc_headerColumnAscLink_headerColumnDsc_headerColumnDscLink$$ = $tableHeaderColumn$$4$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_CLASS$), $column$$11_headerColumnAsc_headerColumnAscLink_headerColumnDsc_headerColumnDscLink$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), $column$$11_headerColumnAsc_headerColumnAscLink_headerColumnDsc_headerColumnDscLink$$ = $tableHeaderColumn$$4$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_CLASS$));
      $column$$11_headerColumnAsc_headerColumnAscLink_headerColumnDsc_headerColumnDscLink$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$);
      this.$_hideTableHeaderColumnSortLink$($columnIdx$$18$$, !$ascending$$);
    }, $_hideNoDataMessage$:function() {
      this.$_getTableDomUtils$().$getTableNoDataMessage$().css("display", "none");
    }, $_hideStatusMessage$:function() {
      this.$_getTableDomUtils$().$getTableStatusMessage$().css("display", "none");
    }, $_hideTableHeaderColumnSortLink$:function($columnIdx$$19$$, $ascending$$1$$) {
      if (this.$_getColumnDefs$()[$columnIdx$$19$$].sortable == this.$_OPTION_ENABLED$) {
        var $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$5$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$19$$), $sorted$$5$$ = $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$5$$.data("sorted");
        !$ascending$$1$$ || null != $sorted$$5$$ && $sorted$$5$$ != this.$_COLUMN_SORT_ORDER$.$_DESCENDING$ ? $ascending$$1$$ || null != $sorted$$5$$ && $sorted$$5$$ != this.$_COLUMN_SORT_ORDER$.$_ASCENDING$ || ($headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$5$$ = $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$5$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$), $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$5$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), 
        $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$5$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_ENABLED$), $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$5$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$)) : ($headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$5$$ = $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$5$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$), 
        $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$5$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$5$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_ENABLED$), $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$5$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$));
      }
    }, $_invokeDataSort$:function($sortField$$1$$, $ascending$$2$$) {
      var $data$$119$$ = this.$_getData$();
      if (!$data$$119$$) {
        return null;
      }
      this.$_showStatusMessage$();
      var $sortCriteria$$ = {};
      $sortCriteria$$.key = $sortField$$1$$;
      $sortCriteria$$.direction = $ascending$$2$$ ? this.$_COLUMN_SORT_ORDER$.$_ASCENDING$ : this.$_COLUMN_SORT_ORDER$.$_DESCENDING$;
      $data$$119$$.sort($sortCriteria$$);
    }, $_isColumnMetadataUpdated$:function() {
      if (null != this.$_columnDefArray$) {
        var $columnsMetadata$$ = this.$_getColumnMetadata$();
        if (this.$_columnDefArray$.length != $columnsMetadata$$.length) {
          return!0;
        }
        var $i$$206$$, $prop$$72$$;
        for ($i$$206$$ = 0;$i$$206$$ < $columnsMetadata$$.length;$i$$206$$++) {
          for ($prop$$72$$ in $columnsMetadata$$[$i$$206$$]) {
            if ($columnsMetadata$$[$i$$206$$].hasOwnProperty($prop$$72$$) && $columnsMetadata$$[$i$$206$$][$prop$$72$$] != this.$_columnDefArray$[$i$$206$$][$prop$$72$$]) {
              return!0;
            }
          }
        }
        return!1;
      }
      return!0;
    }, $_isFocused$:function() {
      var $currentFocusElement$$1$$ = $$$$14$$(document.activeElement), $table$$2$$ = this.$_getTableDomUtils$().$getTable$();
      return $table$$2$$[0] != $currentFocusElement$$1$$[0] && 0 == $table$$2$$.has($currentFocusElement$$1$$).length ? !1 : !0;
    }, $_isKeyboardKeyPressed$:function($keyCode$$2$$) {
      var $keyboardKeys$$1$$ = this.$_getKeyboardKeys$(), $i$$207$$;
      for ($i$$207$$ = 0;$i$$207$$ < $keyboardKeys$$1$$.length;$i$$207$$++) {
        if ($keyboardKeys$$1$$[$i$$207$$] == $keyCode$$2$$) {
          return!0;
        }
      }
      return!1;
    }, $_isNodeEditableOrClickable$:function($node$$26$$) {
      for (var $nodeName$$3$$, $table$$3$$ = this.$_getTableDomUtils$().$getTable$();null != $node$$26$$ && $node$$26$$[0] != $table$$3$$[0] && "TD" != ($nodeName$$3$$ = $node$$26$$.prop("nodeName")) && "TH" != $nodeName$$3$$;) {
        if (3 == $node$$26$$[0].nodeType) {
          $node$$26$$ = $node$$26$$[0].parentNode;
        } else {
          var $tabIndex$$ = $node$$26$$.attr("tabIndex");
          if (null != $tabIndex$$ && 0 <= $tabIndex$$ || $nodeName$$3$$.match(/^INPUT|SELECT|OPTION|BUTTON|^A\b|TEXTAREA/) && -1 != $tabIndex$$) {
            return!0;
          }
          $node$$26$$ = $node$$26$$.parentNode;
        }
      }
      return!1;
    }, $_isTableFooterless$:function() {
      var $columns$$8$$ = this.$_getColumnDefs$(), $i$$208$$, $footerRenderer$$;
      for ($i$$208$$ = 0;$i$$208$$ < $columns$$8$$.length;$i$$208$$++) {
        if ($footerRenderer$$ = this.$_getColumnRenderer$($i$$208$$, "footer"), null != $footerRenderer$$) {
          return!1;
        }
      }
      return!0;
    }, $_isTableHeaderless$:function() {
      var $columns$$9$$ = this.$_getColumnDefs$(), $i$$209$$;
      for ($i$$209$$ = 0;$i$$209$$ < $columns$$9$$.length;$i$$209$$++) {
        if (null != $columns$$9$$[$i$$209$$].headerText || null != $columns$$9$$[$i$$209$$].headerStyle || null != $columns$$9$$[$i$$209$$].sortable && $columns$$9$$[$i$$209$$].sortable != this.$_OPTION_NONE$ || null != $columns$$9$$[$i$$209$$].sortProperty || null != $columns$$9$$[$i$$209$$].headerRenderer) {
          return!1;
        }
      }
      return!0;
    }, $_isTableHeaderColumnsRendered$:function() {
      return!0 == this.$_renderedTableHeaderColumns$;
    }, $_isTableNavigationMode$:function() {
      return this.$_tableNavMode$;
    }, $_isTableRefreshNeeded$:function($key$$79$$, $value$$183$$) {
      var $currentOptions$$ = this.options;
      return "selection" == $key$$79$$ || $oj$$14$$.$Object$.$compareValues$($value$$183$$, $currentOptions$$[$key$$79$$]) ? !1 : !0;
    }, $_queueTableBodyRowOperation$:function($eventType$$35$$, $rowIdx$$20$$, $row$$41$$) {
      var $self$$88$$ = this;
      this.$_rowOperationQueue$ || (this.$_rowOperationQueue$ = []);
      var $executeImmediate_i$$210$$ = !1, $foundExisting_lastOperation$$1$$ = this.$_rowOperationQueue$[this.$_rowOperationQueue$.length - 1];
      null != $foundExisting_lastOperation$$1$$ && $foundExisting_lastOperation$$1$$.$eventType$ != $eventType$$35$$ && (this.$_executeQueuedTableBodyRowOperations$(), $executeImmediate_i$$210$$ = !0);
      null != this.$_queueExecutionTimer$ || $executeImmediate_i$$210$$ || (setTimeout(function() {
        $self$$88$$.$_executeQueuedTableBodyRowOperations$();
        $self$$88$$.$_queueExecutionTimer$ = null;
      }, 0), this.$_queueExecutionTimer$ = !0);
      $foundExisting_lastOperation$$1$$ = !1;
      for ($executeImmediate_i$$210$$ = 0;$executeImmediate_i$$210$$ < this.$_rowOperationQueue$.length;$executeImmediate_i$$210$$++) {
        this.$_rowOperationQueue$[$executeImmediate_i$$210$$].$eventType$ == $eventType$$35$$ && this.$_rowOperationQueue$[$executeImmediate_i$$210$$].$rowIdx$ == $rowIdx$$20$$ && this.$_rowOperationQueue$[$executeImmediate_i$$210$$].row == $row$$41$$ && (this.$_rowOperationQueue$[$executeImmediate_i$$210$$] = {$eventType$:$eventType$$35$$, $rowIdx$:$rowIdx$$20$$, row:$row$$41$$}, $foundExisting_lastOperation$$1$$ = !0);
      }
      $foundExisting_lastOperation$$1$$ || this.$_rowOperationQueue$.push({$eventType$:$eventType$$35$$, $rowIdx$:$rowIdx$$20$$, row:$row$$41$$});
    }, $_refreshAll$:function($immediate$$2$$, $executeRowOperations$$) {
      this.$_refreshTableNoDataMessage$();
      $executeRowOperations$$ && this.$_executeQueuedTableBodyRowOperations$();
      if (this.$_isColumnMetadataUpdated$() || !this.$_isTableHeaderColumnsRendered$() && !this.$_isTableHeaderless$()) {
        if (this.$_clearCachedMetadata$(), this.$_refreshTableHeader$(), null != this.$_sortColumn$) {
          var $i$$211$$, $column$$12$$, $foundColumn$$ = !1, $columns$$10$$ = this.$_getColumnDefs$();
          if (null != $columns$$10$$) {
            for ($i$$211$$ = 0;$i$$211$$ < $columns$$10$$.length;$i$$211$$++) {
              if ($column$$12$$ = $columns$$10$$[$i$$211$$], $oj$$14$$.$Object$.$compareValues$($column$$12$$, this.$_sortColumn$)) {
                $foundColumn$$ = !0;
                break;
              }
            }
            $foundColumn$$ || this.$_getData$().sort(null);
          }
        }
      }
      this.$_refreshTableFooter$();
      this.$_refreshTableBody$();
      null != this.$_getData$() && this.$_getData$().$isFetching$ && this.$_showStatusMessage$();
      this.$_getTableDomUtils$().$refreshTableDimensions$($immediate$$2$$);
    }, $_refreshTableBody$:function() {
      var $data$$120_j$$33$$ = this.$_getData$(), $columns$$11_tableBody$$2$$ = this.$_getTableDomUtils$().$getTableBody$();
      if (null != $columns$$11_tableBody$$2$$) {
        var $startIndex$$14_tableBodyRows$$ = $columns$$11_tableBody$$2$$.children(), $i$$212$$;
        for ($i$$212$$ = 0;$i$$212$$ < $startIndex$$14_tableBodyRows$$.length;$i$$212$$++) {
          this.$_removeTableBodyRow$(0);
        }
        if ($data$$120_j$$33$$ && 0 != $data$$120_j$$33$$.size() && 0 != this.$_getColumnDefs$().length) {
          this.$_hideNoDataMessage$();
          this.$_getTableDomUtils$().$clearDelayedRenderRows$();
          this.$_getTableDomUtils$().$clearDelayedRenderCells$();
          var $tableBodyDocFrag$$1$$ = $$$$14$$(document.createDocumentFragment()), $startIndex$$14_tableBodyRows$$ = $data$$120_j$$33$$.startIndex(), $endIndex$$10$$ = $startIndex$$14_tableBodyRows$$ + $data$$120_j$$33$$.size(), $row$$42$$, $rowIdx$$21$$, $tableBodyRow$$2$$;
          for ($i$$212$$ = $startIndex$$14_tableBodyRows$$;$i$$212$$ < $endIndex$$10$$;$i$$212$$++) {
            $rowIdx$$21$$ = $i$$212$$ - $startIndex$$14_tableBodyRows$$, $row$$42$$ = $data$$120_j$$33$$.at($i$$212$$), null != $row$$42$$ && ($tableBodyRow$$2$$ = this.$_getTableDomUtils$().$createTableBodyRow$($rowIdx$$21$$), this.$_getTableDomUtils$().$styleTableBodyRow$($tableBodyRow$$2$$), this.$_getTableDomUtils$().$insertTableBodyRow$($rowIdx$$21$$, $tableBodyRow$$2$$, $tableBodyDocFrag$$1$$), $row$$42$$ instanceof $oj$$14$$.$Row$ ? this.$_refreshTableBodyRow$($rowIdx$$21$$, $row$$42$$, $tableBodyRow$$2$$, 
            $tableBodyDocFrag$$1$$) : this.$_asyncRefreshTableBodyRow$($row$$42$$));
          }
          $columns$$11_tableBody$$2$$.append($tableBodyDocFrag$$1$$);
          for ($i$$212$$ = $startIndex$$14_tableBodyRows$$;$i$$212$$ < $endIndex$$10$$;$i$$212$$++) {
            for ($rowIdx$$21$$ = $i$$212$$ - $startIndex$$14_tableBodyRows$$, this.$_getTableDomUtils$().$renderDelayedTableBodyRow$($rowIdx$$21$$), $columns$$11_tableBody$$2$$ = this.$_getColumnDefs$(), $data$$120_j$$33$$ = 0;$data$$120_j$$33$$ < $columns$$11_tableBody$$2$$.length;$data$$120_j$$33$$++) {
              this.$_getTableDomUtils$().$renderDelayedTableBodyCell$($rowIdx$$21$$, $data$$120_j$$33$$);
            }
          }
          this.$_getTableDomUtils$().$clearDelayedRenderRows$();
          this.$_getTableDomUtils$().$clearDelayedRenderCells$();
        } else {
          this.$_showNoDataMessage$();
        }
      }
    }, $_refreshTableBodyRow$:function($rowIdx$$22$$, $row$$43$$, $tableBodyRow$$3$$, $docFrag$$1$$) {
      var $j$$34_rowRenderer$$ = this.$_getRowRenderer$(), $columns$$12_rowContext$$ = this.$_getColumnDefs$();
      (isNaN($rowIdx$$22$$) || 0 > $rowIdx$$22$$) && $oj$$14$$.$Logger$.error("Error: Invalid rowIdx value: " + $rowIdx$$22$$);
      this.$_hideNoDataMessage$();
      if (null == $tableBodyRow$$3$$) {
        if ($tableBodyRow$$3$$ = this.$_getTableDomUtils$().$getTableBodyRow$($rowIdx$$22$$)) {
          $tableBodyRow$$3$$.empty(), this.$_getTableDomUtils$().$createTableBodyCellAccSelect$($rowIdx$$22$$, $tableBodyRow$$3$$);
        } else {
          return;
        }
      }
      if ($j$$34_rowRenderer$$) {
        var $columns$$12_rowContext$$ = this.$_getTableDomUtils$().$getRendererContextObject$($row$$43$$, $tableBodyRow$$3$$[0]), $cellRenderer_delayedRowObj$$ = {};
        $cellRenderer_delayedRowObj$$.$rowContext$ = $columns$$12_rowContext$$;
        $cellRenderer_delayedRowObj$$.rowRenderer = $j$$34_rowRenderer$$;
        $cellRenderer_delayedRowObj$$.$tableBodyRow$ = $tableBodyRow$$3$$;
        $cellRenderer_delayedRowObj$$.row = $row$$43$$;
        this.$_getTableDomUtils$().$addDelayedRenderRow$($rowIdx$$22$$, $cellRenderer_delayedRowObj$$);
        null == $docFrag$$1$$ && (this.$_getTableDomUtils$().$renderDelayedTableBodyRow$($rowIdx$$22$$), this.$_getTableDomUtils$().$clearDelayedRenderRows$());
      } else {
        for ($j$$34_rowRenderer$$ = 0;$j$$34_rowRenderer$$ < $columns$$12_rowContext$$.length;$j$$34_rowRenderer$$++) {
          $cellRenderer_delayedRowObj$$ = this.$_getColumnRenderer$($j$$34_rowRenderer$$, "cell"), this.$_getTableDomUtils$().$setTableBodyCell$($rowIdx$$22$$, $j$$34_rowRenderer$$, $tableBodyRow$$3$$, $row$$43$$, $cellRenderer_delayedRowObj$$), null == $docFrag$$1$$ && (this.$_getTableDomUtils$().$renderDelayedTableBodyCell$($rowIdx$$22$$, $j$$34_rowRenderer$$), this.$_getTableDomUtils$().$clearDelayedRenderCells$());
        }
      }
      this.$_selectionTimer$ = !0;
    }, $_refreshTableFooter$:function() {
      var $columns$$13$$ = this.$_getColumnDefs$(), $tableFooter_tableFooterRow$$ = this.$_getTableDomUtils$().$getTableFooter$();
      if (!$tableFooter_tableFooterRow$$) {
        if (this.$_isTableFooterless$()) {
          return;
        }
        $tableFooter_tableFooterRow$$ = this.$_getTableDomUtils$().$createTableFooter$();
        this.$_getTableDomUtils$().$styleTableFooter$($tableFooter_tableFooterRow$$);
      }
      $tableFooter_tableFooterRow$$ = this.$_getTableDomUtils$().$getTableFooterRow$();
      $tableFooter_tableFooterRow$$.empty();
      if ($columns$$13$$ && 0 < $columns$$13$$.length) {
        this.$_getTableDomUtils$().$createTableFooterAccSelect$($tableFooter_tableFooterRow$$);
        var $i$$213$$, $footerCellContent_footerRenderer$$1$$, $footerCell$$;
        for ($i$$213$$ = 0;$i$$213$$ < $columns$$13$$.length;$i$$213$$++) {
          $footerCellContent_footerRenderer$$1$$ = this.$_getColumnRenderer$($i$$213$$, "footer"), $footerCell$$ = this.$_getTableDomUtils$().$createTableFooterCell$(), this.$_getTableDomUtils$().$styleTableFooterCell$($i$$213$$, $footerCell$$), this.$_getTableDomUtils$().$insertTableFooterCell$($i$$213$$, $footerCell$$), $footerCellContent_footerRenderer$$1$$ && ($footerCellContent_footerRenderer$$1$$ = $footerCellContent_footerRenderer$$1$$({footerContext:this.$_getTableDomUtils$().$getRendererContextObject$(null, 
          $footerCell$$[0]), columnIndex:$i$$213$$}), null != $footerCellContent_footerRenderer$$1$$ ? ($footerCell$$.empty(), $footerCell$$.append($footerCellContent_footerRenderer$$1$$)) : ($footerCell$$ = $$$$14$$($tableFooter_tableFooterRow$$.children(":not(." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$ + ")")[$i$$213$$]), this.$_getTableDomUtils$().$styleTableFooterCell$($i$$213$$, $footerCell$$)));
        }
      }
    }, $_refreshTableHeader$:function() {
      var $columns$$14$$ = this.$_getColumnDefs$(), $tableHeader_tableHeaderRow$$ = this.$_getTableDomUtils$().$getTableHeader$();
      if (!$tableHeader_tableHeaderRow$$) {
        if (this.$_isTableHeaderless$()) {
          return;
        }
        $tableHeader_tableHeaderRow$$ = this.$_getTableDomUtils$().$createTableHeader$();
        this.$_getTableDomUtils$().$styleTableHeader$($tableHeader_tableHeaderRow$$);
      }
      $tableHeader_tableHeaderRow$$ = this.$_getTableDomUtils$().$getTableHeaderRow$();
      $tableHeader_tableHeaderRow$$.empty();
      if ($columns$$14$$ && 0 < $columns$$14$$.length) {
        var $i$$214_tableHeaderAccSelectRowColumn$$ = this.$_getTableDomUtils$().$createTableHeaderAccSelectRowColumn$();
        $tableHeader_tableHeaderRow$$.append($i$$214_tableHeaderAccSelectRowColumn$$);
        for (var $headerColumnContent_headerRenderer$$, $headerColumn$$3$$, $i$$214_tableHeaderAccSelectRowColumn$$ = 0;$i$$214_tableHeaderAccSelectRowColumn$$ < $columns$$14$$.length;$i$$214_tableHeaderAccSelectRowColumn$$++) {
          $headerColumnContent_headerRenderer$$ = this.$_getColumnRenderer$($i$$214_tableHeaderAccSelectRowColumn$$, "header");
          $headerColumn$$3$$ = this.$_getTableDomUtils$().$createTableHeaderColumn$($i$$214_tableHeaderAccSelectRowColumn$$);
          this.$_getTableDomUtils$().$insertTableHeaderColumn$($i$$214_tableHeaderAccSelectRowColumn$$, $headerColumn$$3$$);
          var $headerColumnAsc$$1_headerColumnAscHeight$$ = $$$$14$$($headerColumn$$3$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_CLASS$)[0]), $headerColumnAscWidth$$ = $headerColumnAsc$$1_headerColumnAscHeight$$.width(), $headerColumnAsc$$1_headerColumnAscHeight$$ = $headerColumnAsc$$1_headerColumnAscHeight$$.height(), $headerColumnSortPlaceholder$$ = $$$$14$$($headerColumn$$3$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_SORT_PACEHOLDER_CLASS$)[0]);
          $headerColumnSortPlaceholder$$.css("width", $headerColumnAscWidth$$ + "px");
          $headerColumnSortPlaceholder$$.css("height", $headerColumnAsc$$1_headerColumnAscHeight$$ + "px");
          $headerColumnContent_headerRenderer$$ && ($headerColumnContent_headerRenderer$$ = $headerColumnContent_headerRenderer$$({headerContext:this.$_getTableDomUtils$().$getRendererContextObject$(null, $headerColumn$$3$$[0]), columnIndex:$i$$214_tableHeaderAccSelectRowColumn$$}), null != $headerColumnContent_headerRenderer$$ ? ($headerColumn$$3$$.empty(), $headerColumn$$3$$.append($headerColumnContent_headerRenderer$$)) : ($headerColumn$$3$$ = $$$$14$$($tableHeader_tableHeaderRow$$.children(":not(." + 
          $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_SELECT_ROW_CLASS$ + ")")[$i$$214_tableHeaderAccSelectRowColumn$$]), this.$_getTableDomUtils$().$setTableHeaderColumnAttributes$($i$$214_tableHeaderAccSelectRowColumn$$, $headerColumn$$3$$), this.$_getTableDomUtils$().$styleTableHeaderColumn$($i$$214_tableHeaderAccSelectRowColumn$$, $headerColumn$$3$$)));
          this.$_getTableDomUtils$().$createTableHeaderColumnAccSelect$($i$$214_tableHeaderAccSelectRowColumn$$, this.$_getColumnSelectionMode$());
        }
        this.$_renderedTableHeaderColumns$ = !0;
      }
    }, $_refreshTableNoDataMessage$:function() {
      var $tableNoDataMessage$$ = this.$_getTableDomUtils$().$getTableNoDataMessage$();
      null != $tableNoDataMessage$$ && ($tableNoDataMessage$$[0].parentNode.removeChild($tableNoDataMessage$$[0]), this.$_getTableDomUtils$().$createTableNoDataMessage$());
    }, $_registerCustomEvents$:function() {
      $$$$14$$.event.special.ojtablebeforecurrentrow = {handle:function $$$$$14$$$event$special$ojtablebeforecurrentrow$handle$($event$$164$$, $JSCompiler_OptimizeArgumentsArray_p1$$) {
        return $event$$164$$.handleObj.handler.apply(this, [$event$$164$$, $JSCompiler_OptimizeArgumentsArray_p1$$]);
      }};
    }, $_registerDataSourceEventListeners$:function() {
      var $data$$121$$ = this.$_getData$();
      if (null != $data$$121$$) {
        this.$_unregisterDataSourceEventListeners$();
        this.$_dataSourceEventHandlers$ = [];
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.REQUEST, eventHandler:this.$_handleDataFetchStart$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.SYNC, eventHandler:this.$_handleDataFetchEnd$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.SORT, eventHandler:this.$_handleDataSort$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.ADD, eventHandler:this.$_handleDataRowAdd$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.REMOVE, eventHandler:this.$_handleDataRowRemove$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.CHANGE, eventHandler:this.$_handleDataRowChange$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.RESET, eventHandler:this.$_handleDataReset$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.ERROR, eventHandler:this.$_handleDataError$.bind(this)});
        var $i$$215$$, $ev$$2$$;
        for ($i$$215$$ = 0;$i$$215$$ < this.$_dataSourceEventHandlers$.length;$i$$215$$++) {
          ($ev$$2$$ = $data$$121$$.on(this.$_dataSourceEventHandlers$[$i$$215$$].eventType, this.$_dataSourceEventHandlers$[$i$$215$$].eventHandler)) && (this.$_dataSourceEventHandlers$[$i$$215$$].eventHandler = $ev$$2$$);
        }
      }
    }, $_registerDomEventListeners$:function() {
      null != this.$_getTableDomUtils$().$getScroller$() && this.$_getTableDomUtils$().$getScroller$().scroll(function($event$$165_tableHeader$$1_tableHeaderRow$$1$$) {
        var $scrollLeft$$ = $$$$14$$($event$$165_tableHeader$$1_tableHeaderRow$$1$$.target).scrollLeft(), $maxScrollLeft$$ = $$$$14$$($event$$165_tableHeader$$1_tableHeaderRow$$1$$.target)[0].scrollWidth - $$$$14$$($event$$165_tableHeader$$1_tableHeaderRow$$1$$.target)[0].clientWidth;
        "rtl" === this.$_GetReadingDirection$() && ($scrollLeft$$ = $maxScrollLeft$$ - $scrollLeft$$);
        $$$$14$$($event$$165_tableHeader$$1_tableHeaderRow$$1$$.target).scrollTop();
        if ($event$$165_tableHeader$$1_tableHeaderRow$$1$$ = this.$_getTableDomUtils$().$getTableHeader$()) {
          this.$_getTableDomUtils$().$isDivScroller$() ? "rtl" === this.$_GetReadingDirection$() ? $event$$165_tableHeader$$1_tableHeaderRow$$1$$.css("right", "-" + $scrollLeft$$ + "px") : $event$$165_tableHeader$$1_tableHeaderRow$$1$$.css("left", "-" + $scrollLeft$$ + "px") : ($event$$165_tableHeader$$1_tableHeaderRow$$1$$ = this.$_getTableDomUtils$().$getTableHeaderRow$()) && ("rtl" === this.$_GetReadingDirection$() ? $event$$165_tableHeader$$1_tableHeaderRow$$1$$.css("right", "-" + $scrollLeft$$ + 
          "px") : $event$$165_tableHeader$$1_tableHeaderRow$$1$$.css("left", "-" + $scrollLeft$$ + "px"));
        }
      }.bind(this));
    }, $_registerResizeListener$:function($element$$59$$) {
      if (!this.$_isResizeListenerAdded$) {
        var $self$$90$$ = this;
        $oj$$14$$.$DomUtils$.$addResizeListener$($element$$59$$[0], function() {
          var $tableContainerHeight$$ = $self$$90$$.$_getTableDomUtils$().$getTableContainer$().outerHeight(), $tableContainerWidth$$ = $self$$90$$.$_getTableDomUtils$().$getTableContainer$().outerWidth();
          $self$$90$$.$_getTableDomUtils$().$refreshTableDimensions$(!1, $tableContainerWidth$$, $tableContainerHeight$$);
        });
        this.$_isResizeListenerAdded$ = !0;
      }
    }, $_removeKeyboardKey$:function($keyCode$$3$$) {
      var $keyboardKeys$$2$$ = this.$_getKeyboardKeys$(), $i$$216$$;
      for ($i$$216$$ = 0;$i$$216$$ < $keyboardKeys$$2$$.length;$i$$216$$++) {
        $keyboardKeys$$2$$[$i$$216$$] == $keyCode$$3$$ && $keyboardKeys$$2$$.splice($i$$216$$, 1);
      }
    }, $_removeTableBodyRow$:function($index$$152_rowIdx$$23$$) {
      var $tableBodyRows$$1$$ = this.$_getTableDomUtils$().$getTableBodyRows$(), $tableBodyRow$$4$$ = null;
      null != $tableBodyRows$$1$$ && $index$$152_rowIdx$$23$$ < $tableBodyRows$$1$$.length && 0 <= $index$$152_rowIdx$$23$$ && ($tableBodyRow$$4$$ = $$$$14$$($tableBodyRows$$1$$[$index$$152_rowIdx$$23$$]), null != $tableBodyRow$$4$$ && ($index$$152_rowIdx$$23$$ = $$$$14$$.inArray($tableBodyRow$$4$$[0], this.hoverable), -1 < $index$$152_rowIdx$$23$$ && this.hoverable.splice($index$$152_rowIdx$$23$$, 1), $tableBodyRow$$4$$[0].parentNode.removeChild($tableBodyRow$$4$$[0]), this.$_getTableDomUtils$().$clearCachedDomRowData$()));
    }, $_scrollColumnIntoViewport$:function($columnIdx$$20_scrollbarWidth$$) {
      var $tableBody$$3$$ = this.$_getTableDomUtils$().$getTableBody$(), $headerColumnRect_tableHeaderColumn$$6$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$20_scrollbarWidth$$);
      if ($headerColumnRect_tableHeaderColumn$$6$$) {
        $columnIdx$$20_scrollbarWidth$$ = this.$_getTableDomUtils$().$getScrollbarWidth$();
        var $headerColumnRect_tableHeaderColumn$$6$$ = $headerColumnRect_tableHeaderColumn$$6$$.get(0).getBoundingClientRect(), $tableBodyRect$$ = $tableBody$$3$$.get(0).getBoundingClientRect(), $scrollLeftDiff_scrolledLeft$$ = !1;
        $headerColumnRect_tableHeaderColumn$$6$$.left < $tableBodyRect$$.left && ($scrollLeftDiff_scrolledLeft$$ = $tableBodyRect$$.left - $headerColumnRect_tableHeaderColumn$$6$$.left, $tableBody$$3$$.scrollLeft($tableBody$$3$$.scrollLeft() - $scrollLeftDiff_scrolledLeft$$), $scrollLeftDiff_scrolledLeft$$ = !0);
        $headerColumnRect_tableHeaderColumn$$6$$.right > $tableBodyRect$$.right - $columnIdx$$20_scrollbarWidth$$ && !$scrollLeftDiff_scrolledLeft$$ && ($scrollLeftDiff_scrolledLeft$$ = $headerColumnRect_tableHeaderColumn$$6$$.right - $tableBodyRect$$.right + $columnIdx$$20_scrollbarWidth$$, $tableBody$$3$$.scrollLeft($tableBody$$3$$.scrollLeft() + $scrollLeftDiff_scrolledLeft$$));
      }
    }, $_scrollRowIntoViewport$:function($rowIdx$$24_scrollTopDiff_scrollbarHeight$$) {
      var $rowRect_tableBodyRow$$5$$ = this.$_getTableDomUtils$().$getTableBodyRow$($rowIdx$$24_scrollTopDiff_scrollbarHeight$$);
      $rowIdx$$24_scrollTopDiff_scrollbarHeight$$ = this.$_getTableDomUtils$().$getScrollbarHeight$();
      var $rowRect_tableBodyRow$$5$$ = $rowRect_tableBodyRow$$5$$.get(0).getBoundingClientRect(), $scrollingElement$$ = this.$_getTableDomUtils$().$getScroller$(), $scrollingElementRect$$ = $scrollingElement$$.get(0).getBoundingClientRect(), $scrolledDown$$ = !1;
      $rowRect_tableBodyRow$$5$$.bottom > $scrollingElementRect$$.bottom - $rowIdx$$24_scrollTopDiff_scrollbarHeight$$ && ($rowIdx$$24_scrollTopDiff_scrollbarHeight$$ = $rowRect_tableBodyRow$$5$$.bottom - $scrollingElementRect$$.bottom + $rowIdx$$24_scrollTopDiff_scrollbarHeight$$, $scrollingElement$$.scrollTop($scrollingElement$$.scrollTop() + $rowIdx$$24_scrollTopDiff_scrollbarHeight$$), $scrolledDown$$ = !0);
      $rowRect_tableBodyRow$$5$$.top < $scrollingElementRect$$.top && !$scrolledDown$$ && ($rowIdx$$24_scrollTopDiff_scrollbarHeight$$ = $scrollingElementRect$$.top - $rowRect_tableBodyRow$$5$$.top, $scrollingElement$$.scrollTop($scrollingElement$$.scrollTop() - $rowIdx$$24_scrollTopDiff_scrollbarHeight$$));
    }, $_setCurrentRow$:function($currentRow$$, $event$$166$$) {
      var $existingCurrentRow$$ = this.$_currentRow$;
      if (null == $currentRow$$) {
        this.$_currentRow$ = null, this.options.currentRow = null, null == $event$$166$$ && this.$_setRowFocus$(-1, !0, null, $event$$166$$), this.$_fireOptionChange$("currentRow", $existingCurrentRow$$, this.options.currentRow, $event$$166$$);
      } else {
        var $data$$122_errSummary$$8$$ = this.$_getData$(), $rowIdx$$25$$ = $currentRow$$.rowIndex, $rowKey$$20$$ = $currentRow$$.rowKey;
        null != $rowKey$$20$$ ? $rowIdx$$25$$ = this.$_getRowIdxForRowKey$($rowKey$$20$$) : $rowKey$$20$$ = this.$_getRowKeyForRowIdx$($rowIdx$$25$$);
        $currentRow$$ = {rowIndex:$rowIdx$$25$$, rowKey:$rowKey$$20$$};
        if (-1 != $rowIdx$$25$$ && (!$data$$122_errSummary$$8$$ || 0 == $data$$122_errSummary$$8$$.size() || -1 > $rowIdx$$25$$)) {
          var $data$$122_errSummary$$8$$ = this.$_LOGGER_MSG$.$_ERR_CURRENTROW_UNAVAILABLE_INDEX_SUMMARY$, $errDetail$$8$$ = $oj$$14$$.$Translations$.$applyParameters$(this.$_LOGGER_MSG$.$_ERR_CURRENTROW_UNAVAILABLE_INDEX_DETAIL$, {rowIdx:$rowIdx$$25$$});
          throw Error($data$$122_errSummary$$8$$ + "\n" + $errDetail$$8$$);
        }
        if (!$oj$$14$$.$Object$.$compareValues$(this.$_currentRow$, $currentRow$$)) {
          try {
            this._trigger("beforecurrentrow", $event$$166$$, {currentRow:{rowIndex:$rowIdx$$25$$, rowKey:$rowKey$$20$$}, previousCurrentRow:this.$_currentRow$});
          } catch ($err$$5$$) {
            $data$$122_errSummary$$8$$ = this.$_LOGGER_MSG$.$_ERR_PRECURRENTROW_ERROR_SUMMARY$, $errDetail$$8$$ = $oj$$14$$.$Translations$.$applyParameters$(this.$_LOGGER_MSG$.$_ERR_PRECURRENTROW_ERROR_DETAIL$, {error:$err$$5$$.toString()}), $oj$$14$$.$Logger$.info($data$$122_errSummary$$8$$ + "\n" + $errDetail$$8$$);
          }
          this.$_currentRow$ = {rowIndex:$rowIdx$$25$$, rowKey:$rowKey$$20$$};
          this.options.currentRow = {rowIndex:$rowIdx$$25$$, rowKey:$rowKey$$20$$};
          null == $event$$166$$ && this.$_setRowFocus$($rowIdx$$25$$, !0, null, $event$$166$$);
          this.$_fireOptionChange$("currentRow", $existingCurrentRow$$, this.options.currentRow, $event$$166$$);
        }
      }
    }, $_setHeaderColumnFocus$:function($columnIdx$$21$$, $focused$$, $clearSelectedRows$$, $element$$60$$) {
      if ($focused$$) {
        var $focusedHeaderColumnIdx$$5$$ = this.$_getFocusedHeaderColumnIdx$();
        null != $focusedHeaderColumnIdx$$5$$ && $focusedHeaderColumnIdx$$5$$ != $columnIdx$$21$$ && this.$_setHeaderColumnFocus$($focusedHeaderColumnIdx$$5$$, !1, !1, $element$$60$$);
        this.$_clearFocusedRow$();
        $clearSelectedRows$$ && this.$_clearSelectedRows$();
        this.$_scrollColumnIntoViewport$($columnIdx$$21$$);
        this.$_activeColumnIndex$ = $columnIdx$$21$$;
      }
      this.$_setHeaderColumnState$($columnIdx$$21$$, {$focused$:$focused$$}, $element$$60$$);
    }, $_setHeaderColumnSelection$:function($accSelectionColumn_columnIdx$$22$$, $selected$$15_selection$$3$$, $element$$61$$, $event$$167$$, $existingSelection$$2_updateSelection$$) {
      if (this.$_getColumnSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_SINGLE$ || this.$_getColumnSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_MULTIPLE$) {
        (isNaN($accSelectionColumn_columnIdx$$22$$) || 0 > $accSelectionColumn_columnIdx$$22$$) && $oj$$14$$.$Logger$.error("Error: Invalid column selection value: " + $accSelectionColumn_columnIdx$$22$$), this.$_getColumnSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_SINGLE$ && $selected$$15_selection$$3$$ && this.$_clearSelectedHeaderColumns$(), this.$_setHeaderColumnState$($accSelectionColumn_columnIdx$$22$$, {selected:$selected$$15_selection$$3$$}, $element$$61$$, $event$$167$$), this.$_setLastHeaderColumnSelection$($accSelectionColumn_columnIdx$$22$$, 
        $selected$$15_selection$$3$$), $accSelectionColumn_columnIdx$$22$$ = this.$_getTableDomUtils$().$getTableHeaderColumnAccSelect$($accSelectionColumn_columnIdx$$22$$), $$$$14$$($accSelectionColumn_columnIdx$$22$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_CHECKBOX_ACC_SELECT_COLUMN_CLASS$)[0]).prop("checked", $selected$$15_selection$$3$$), $existingSelection$$2_updateSelection$$ && ($selected$$15_selection$$3$$ = this.$_getSelection$(), $existingSelection$$2_updateSelection$$ = 
        this.options.selection, this.options.selection = $selected$$15_selection$$3$$, this.$_fireOptionChange$("selection", $existingSelection$$2_updateSelection$$, $selected$$15_selection$$3$$, null));
      }
    }, $_setHeaderColumnState$:function($columnIdx$$23$$, $state$$) {
      var $headerColumn$$4$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$23$$);
      if ($headerColumn$$4$$) {
        var $focused$$1$$ = $state$$.$focused$, $selected$$16$$ = $state$$.selected;
        null != $selected$$16$$ && $headerColumn$$4$$.hasClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$) != $selected$$16$$ && ($selected$$16$$ ? $headerColumn$$4$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$) : $headerColumn$$4$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$));
        null != $focused$$1$$ && ($focused$$1$$ ? ($headerColumn$$4$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$), this.$_showTableHeaderColumnSortLink$($columnIdx$$23$$)) : ($headerColumn$$4$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$), this.$_hideTableHeaderColumnSortLink$($columnIdx$$23$$, !0), this.$_hideTableHeaderColumnSortLink$($columnIdx$$23$$, !1)));
        this.$_updateHeaderColumnCellsClass$($columnIdx$$23$$);
      }
    }, $_setLastHeaderColumnSelection$:function($columnIdx$$24$$, $selected$$17$$) {
      this.$_lastSelectedColumnIdxArray$ || (this.$_lastSelectedColumnIdxArray$ = []);
      var $i$$217$$;
      for ($i$$217$$ = 0;$i$$217$$ < this.$_lastSelectedColumnIdxArray$.length;$i$$217$$++) {
        if (this.$_lastSelectedColumnIdxArray$[$i$$217$$] == $columnIdx$$24$$) {
          this.$_lastSelectedColumnIdxArray$.splice($i$$217$$, 1);
          break;
        }
      }
      $selected$$17$$ && this.$_lastSelectedColumnIdxArray$.push($columnIdx$$24$$);
    }, $_setLastRowSelection$:function($rowIdx$$26$$, $selected$$18$$) {
      this.$_lastSelectedRowIdxArray$ || (this.$_lastSelectedRowIdxArray$ = []);
      for (var $i$$218$$ = 0;$i$$218$$ < this.$_lastSelectedRowIdxArray$.length;$i$$218$$++) {
        if (this.$_lastSelectedRowIdxArray$[$i$$218$$] == $rowIdx$$26$$) {
          this.$_lastSelectedRowIdxArray$.splice($i$$218$$, 1);
          break;
        }
      }
      $selected$$18$$ && this.$_lastSelectedRowIdxArray$.push($rowIdx$$26$$);
    }, $_setRowFocus$:function($rowIdx$$27$$, $focused$$2$$, $element$$63_rowKey$$21$$, $event$$169$$) {
      if (-1 == $rowIdx$$27$$) {
        this.$_clearFocusedRow$();
      } else {
        var $tableBodyRow$$6$$ = this.$_getTableDomUtils$().$getTableBodyRow$($rowIdx$$27$$);
        if ($tableBodyRow$$6$$) {
          if ($focused$$2$$) {
            var $focusedRowIdx$$5$$ = this.$_getFocusedRowIdx$();
            null != $focusedRowIdx$$5$$ && $focusedRowIdx$$5$$ != $rowIdx$$27$$ && this.$_setRowFocus$($focusedRowIdx$$5$$, !1, $element$$63_rowKey$$21$$, null);
            $element$$63_rowKey$$21$$ = this.$_getRowKeyForRowIdx$($rowIdx$$27$$);
            this.$_setCurrentRow$({rowIndex:$rowIdx$$27$$, rowKey:$element$$63_rowKey$$21$$}, $event$$169$$);
            $tableBodyRow$$6$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$);
            this.$_scrollRowIntoViewport$($rowIdx$$27$$);
            this.$_updateRowCellsClass$($rowIdx$$27$$, {$focused$:!0, hover:!1});
            this.$_clearFocusedHeaderColumn$();
            this.$_clearSelectedHeaderColumns$();
            this.$_setTableNavigationMode$(!0);
          } else {
            $tableBodyRow$$6$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$);
          }
          this.$_updateRowCellsClass$($rowIdx$$27$$, {$focused$:$focused$$2$$});
        }
      }
    }, $_setRowSelection$:function($accSelectionCell_rowIdx$$28$$, $selected$$19_selection$$4$$, $element$$64_tableBodyRow$$7$$, $event$$170_selectionChanged$$, $existingSelection$$3_updateSelection$$1$$) {
      if (this.$_getRowSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_SINGLE$ || this.$_getRowSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_MULTIPLE$) {
        (isNaN($accSelectionCell_rowIdx$$28$$) || 0 > $accSelectionCell_rowIdx$$28$$) && $oj$$14$$.$Logger$.error("Error: Invalid row selection value: " + $accSelectionCell_rowIdx$$28$$), this.$_getRowSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_SINGLE$ && $selected$$19_selection$$4$$ && this.$_clearSelectedRows$(), $element$$64_tableBodyRow$$7$$ = this.$_getTableDomUtils$().$getTableBodyRow$($accSelectionCell_rowIdx$$28$$), $event$$170_selectionChanged$$ = !1, $element$$64_tableBodyRow$$7$$.hasClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$) != 
        $selected$$19_selection$$4$$ && ($selected$$19_selection$$4$$ ? $element$$64_tableBodyRow$$7$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$) : $element$$64_tableBodyRow$$7$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$), $event$$170_selectionChanged$$ = !0), $event$$170_selectionChanged$$ && ($selected$$19_selection$$4$$ ? this.$_updateRowCellsClass$($accSelectionCell_rowIdx$$28$$, {hover:!1, $focused$:!1, selected:!0}) : this.$_updateRowCellsClass$($accSelectionCell_rowIdx$$28$$, 
        {selected:!1})), this.$_setLastRowSelection$($accSelectionCell_rowIdx$$28$$, $selected$$19_selection$$4$$), $accSelectionCell_rowIdx$$28$$ = this.$_getTableDomUtils$().$getTableBodyCellAccSelect$($element$$64_tableBodyRow$$7$$), $$$$14$$($accSelectionCell_rowIdx$$28$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_CHECKBOX_ACC_SELECT_ROW_CLASS$)[0]).prop("checked", $selected$$19_selection$$4$$), $existingSelection$$3_updateSelection$$1$$ && ($selected$$19_selection$$4$$ = this.$_getSelection$(), 
        $existingSelection$$3_updateSelection$$1$$ = this.options.selection, this.options.selection = $selected$$19_selection$$4$$, this.$_fireOptionChange$("selection", $existingSelection$$3_updateSelection$$1$$, $selected$$19_selection$$4$$, null));
      }
    }, $_setSelection$:function($selection$$5$$) {
      if (null == $selection$$5$$) {
        this.$_clearSelectedRows$(), this.$_clearSelectedHeaderColumns$();
      } else {
        var $data$$123_startIndex$$15$$ = this.$_getData$(), $data$$123_startIndex$$15$$ = null != $data$$123_startIndex$$15$$ ? $data$$123_startIndex$$15$$.startIndex() : 0, $i$$219$$, $j$$36_rangeObj$$1$$, $startRowIdx$$, $endRowIdx$$, $startColumnIdx$$, $endColumnIdx$$;
        for ($i$$219$$ = 0;$i$$219$$ < $selection$$5$$.length;$i$$219$$++) {
          $j$$36_rangeObj$$1$$ = $selection$$5$$[$i$$219$$];
          if (null == $j$$36_rangeObj$$1$$.startKey && null == $j$$36_rangeObj$$1$$.startIndex || null == $j$$36_rangeObj$$1$$.endKey && null == $j$$36_rangeObj$$1$$.endIndex) {
            return $oj$$14$$.$Logger$.error("Error: Invalid range object in selection. Both start and end objects must be specified"), null;
          }
          null != $j$$36_rangeObj$$1$$.startKey && null != $j$$36_rangeObj$$1$$.startKey.row && ($startRowIdx$$ = this.$_getRowIdxForRowKey$($j$$36_rangeObj$$1$$.startKey.row));
          null != $j$$36_rangeObj$$1$$.endKey && null != $j$$36_rangeObj$$1$$.endKey.row && ($endRowIdx$$ = this.$_getRowIdxForRowKey$($j$$36_rangeObj$$1$$.endKey.row));
          null != $j$$36_rangeObj$$1$$.startKey && null != $j$$36_rangeObj$$1$$.startKey.column && ($startColumnIdx$$ = this.$_getColumnIdxForColumnKey$($j$$36_rangeObj$$1$$.startKey.column));
          null != $j$$36_rangeObj$$1$$.endKey && null != $j$$36_rangeObj$$1$$.endKey.column && ($endColumnIdx$$ = this.$_getColumnIdxForColumnKey$($j$$36_rangeObj$$1$$.endKey.column));
          null == $startRowIdx$$ && null != $j$$36_rangeObj$$1$$.startIndex && ($startRowIdx$$ = $j$$36_rangeObj$$1$$.startIndex.row);
          null == $endRowIdx$$ && null != $j$$36_rangeObj$$1$$.endIndex && ($endRowIdx$$ = $j$$36_rangeObj$$1$$.endIndex.row);
          null == $startColumnIdx$$ && null != $j$$36_rangeObj$$1$$.startIndex && ($startColumnIdx$$ = $j$$36_rangeObj$$1$$.startIndex.column);
          null == $endColumnIdx$$ && null != $j$$36_rangeObj$$1$$.endIndex && ($endColumnIdx$$ = $j$$36_rangeObj$$1$$.endIndex.column);
          if (null != $startRowIdx$$ && null != $endRowIdx$$ && null != $startColumnIdx$$ && null != $endColumnIdx$$) {
            return $oj$$14$$.$Logger$.error("Error: Invalid range object in selection - Can only support row or column selection. Not both"), null;
          }
          if (null != $startRowIdx$$ && null != $endRowIdx$$) {
            if ($startRowIdx$$ -= $data$$123_startIndex$$15$$, $endRowIdx$$ -= $data$$123_startIndex$$15$$, 0 <= $startRowIdx$$ && 0 <= $endRowIdx$$) {
              for ($j$$36_rangeObj$$1$$ = $startRowIdx$$;$j$$36_rangeObj$$1$$ <= $endRowIdx$$;$j$$36_rangeObj$$1$$++) {
                try {
                  this.$_setRowSelection$($j$$36_rangeObj$$1$$, !0, null, null, !1);
                } catch ($e$$82$$) {
                  $oj$$14$$.$Logger$.error("Error: " + $e$$82$$);
                }
              }
            }
          } else {
            if (null != $startColumnIdx$$ && null != $endColumnIdx$$) {
              for ($j$$36_rangeObj$$1$$ = $startColumnIdx$$;$j$$36_rangeObj$$1$$ <= $endColumnIdx$$;$j$$36_rangeObj$$1$$++) {
                try {
                  this.$_setHeaderColumnSelection$($j$$36_rangeObj$$1$$, !0, null, null, !1);
                } catch ($e$$83$$) {
                  $oj$$14$$.$Logger$.error("Error: " + $e$$83$$);
                }
              }
            } else {
              return $oj$$14$$.$Logger$.error("Error: Invalid range object in selection - \n start row: " + $startRowIdx$$ + "\nend row: " + $endRowIdx$$ + "\nstart column: " + $startColumnIdx$$ + "\nend column: " + $endColumnIdx$$), null;
            }
          }
        }
      }
    }, $_setTableNavigationMode$:function($value$$184$$) {
      this.$_tableNavMode$ = $value$$184$$;
    }, $_showNoDataMessage$:function() {
      this.$_getTableDomUtils$().$getTableNoDataMessage$().css("display", "inline");
    }, $_showStatusMessage$:function() {
      this.$_getTableDomUtils$().$getTableStatusMessage$().css("display", "inline");
    }, $_showTableHeaderColumnSortLink$:function($columnIdx$$25_tableHeaderColumn$$7$$) {
      if (this.$_getColumnDefs$()[$columnIdx$$25_tableHeaderColumn$$7$$].sortable == this.$_OPTION_ENABLED$ && ($columnIdx$$25_tableHeaderColumn$$7$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$25_tableHeaderColumn$$7$$)) && null == $columnIdx$$25_tableHeaderColumn$$7$$.data("sorted")) {
        var $headerColumnAscLink$$2$$ = $columnIdx$$25_tableHeaderColumn$$7$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$);
        $headerColumnAscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_ENABLED$);
        $headerColumnAscLink$$2$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$);
        $columnIdx$$25_tableHeaderColumn$$7$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_CLASS$).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$);
        $columnIdx$$25_tableHeaderColumn$$7$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_CLASS$).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$);
      }
    }, $_unregisterDataSourceEventListeners$:function() {
      var $data$$124$$ = this.$_getData$();
      if (null != this.$_dataSourceEventHandlers$ && null != $data$$124$$) {
        var $i$$220$$;
        for ($i$$220$$ = 0;$i$$220$$ < this.$_dataSourceEventHandlers$.length;$i$$220$$++) {
          $data$$124$$.off(this.$_dataSourceEventHandlers$[$i$$220$$].eventType, this.$_dataSourceEventHandlers$[$i$$220$$].eventHandler);
        }
      }
    }, $_updateHeaderColumnCellsClass$:function($columnIdx$$26$$) {
      var $selected$$20$$ = this.$_getHeaderColumnState$($columnIdx$$26$$).selected, $selectedRowIdxs$$2$$ = this.$_getSelectedRowIdxs$(), $data$$125$$ = this.$_getData$(), $i$$221$$, $j$$37$$, $tableBodyCell$$2$$, $rowSelected$$1$$;
      for ($i$$221$$ = 0;$i$$221$$ < $data$$125$$.size();$i$$221$$++) {
        if ($tableBodyCell$$2$$ = this.$_getTableDomUtils$().$getTableBodyCell$($i$$221$$, $columnIdx$$26$$), $selected$$20$$) {
          $$$$14$$($tableBodyCell$$2$$).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$);
        } else {
          $rowSelected$$1$$ = !1;
          for ($j$$37$$ = 0;$j$$37$$ < $selectedRowIdxs$$2$$.length;$j$$37$$++) {
            if ($i$$221$$ == $selectedRowIdxs$$2$$[$j$$37$$]) {
              $rowSelected$$1$$ = !0;
              break;
            }
          }
          $rowSelected$$1$$ || $$$$14$$($tableBodyCell$$2$$).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$);
        }
      }
    }, $_updateRowCellsClass$:function($rowIdx$$29$$, $state$$2$$) {
      var $tableBodyCells$$ = this.$_getTableDomUtils$().$getTableBodyCells$($rowIdx$$29$$), $focused$$3$$ = $state$$2$$.$focused$, $selected$$21$$ = $state$$2$$.selected, $hover$$ = $state$$2$$.hover;
      if ($tableBodyCells$$) {
        if (null != $hover$$) {
          var $i$$222$$;
          for ($i$$222$$ = 0;$i$$222$$ < $tableBodyCells$$.length;$i$$222$$++) {
            $hover$$ ? $$$$14$$($tableBodyCells$$[$i$$222$$]).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_HOVER$) : $$$$14$$($tableBodyCells$$[$i$$222$$]).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_HOVER$);
          }
        }
        if (null != $focused$$3$$) {
          for ($i$$222$$ = 0;$i$$222$$ < $tableBodyCells$$.length;$i$$222$$++) {
            $focused$$3$$ ? $$$$14$$($tableBodyCells$$[$i$$222$$]).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$) : $$$$14$$($tableBodyCells$$[$i$$222$$]).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$);
          }
        }
        if (null != $selected$$21$$) {
          for ($i$$222$$ = 0;$i$$222$$ < $tableBodyCells$$.length;$i$$222$$++) {
            $selected$$21$$ ? $$$$14$$($tableBodyCells$$[$i$$222$$]).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$) : $$$$14$$($tableBodyCells$$[$i$$222$$]).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$);
          }
        }
      }
    }});
  })();
  $oj$$14$$.$FlattenedTreeTableDataSource$ = function $$oj$$14$$$$FlattenedTreeTableDataSource$$($data$$126$$, $options$$269$$) {
    $options$$269$$ = $options$$269$$ || {};
    if (!($data$$126$$ instanceof $oj$$14$$.$FlattenedTreeDataSource$)) {
      throw Error($oj$$14$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_SUMMARY + "\n" + $oj$$14$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_DETAIL);
    }
    this.$dataSource$ = $data$$126$$;
    this.$_rowSet$ = new $oj$$14$$.$FlattenedTreeRowSet$($data$$126$$, $options$$269$$);
    this.$_addRowSetEventListeners$();
    this.Init();
    if (null != $options$$269$$ && ("enabled" == $options$$269$$.startFetch || null == $options$$269$$.startFetch) || null == $options$$269$$) {
      this.$_startFetchEnabled$ = !0;
    }
  };
  $goog$exportPath_$$("FlattenedTreeTableDataSource", $oj$$14$$.$FlattenedTreeTableDataSource$, $oj$$14$$);
  $oj$$14$$.$Object$.$createSubclass$($oj$$14$$.$FlattenedTreeTableDataSource$, $oj$$14$$.$TableDataSource$, "oj.FlattenedTreeTableDataSource");
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.Init = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$Init$() {
    $oj$$14$$.$FlattenedTreeTableDataSource$.$superclass$.Init.call(this);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.Init", {Init:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.Init});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.getCapability = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$getCapability$() {
    return "full";
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.getCapability", {getCapability:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.getCapability});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.getWrappedDataSource = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$getWrappedDataSource$() {
    return this.$dataSource$;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.getWrappedDataSource", {getWrappedDataSource:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.getWrappedDataSource});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.fetch = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$fetch$($options$$270$$) {
    $options$$270$$ = $options$$270$$ || {};
    var $self$$91$$ = this, $success$$18$$ = $options$$270$$.success, $error$$24$$ = $options$$270$$.error, $context$$41$$ = null == $options$$270$$.context ? this : $options$$270$$.context;
    return "init" != $options$$270$$.fetchType || this.$_startFetchEnabled$ ? $oj$$14$$.$Object$.$__getPromise$(function($resolve$$49$$, $reject$$49$$) {
      $options$$270$$.success = function $$options$$270$$$success$() {
        null != $success$$18$$ && $success$$18$$.call($context$$41$$, $self$$91$$, $options$$270$$);
        $resolve$$49$$();
      };
      $options$$270$$.error = function $$options$$270$$$error$($options$$271$$, $e$$84$$) {
        null != $error$$24$$ && $error$$24$$.call($context$$41$$, $self$$91$$, $options$$271$$, $e$$84$$);
        $reject$$49$$();
      };
      "enabled" == $options$$270$$.startFetch ? ($self$$91$$.$_rowSet$.isEmpty() || "undefined" === typeof $self$$91$$.$_rowSet$.size()) && $self$$91$$.$_rowSet$.fetch($options$$270$$) : $self$$91$$.$_rowSet$.fetch($options$$270$$);
    }) : $oj$$14$$.$Object$.$__getPromise$(function($resolve$$48$$) {
      $resolve$$48$$();
    });
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.fetch", {fetch:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.fetch});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.at = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$at$($index$$153$$) {
    return this.$_rowSet$.at($index$$153$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.at", {at:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.at});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.collapse = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$collapse$($rowKey$$22$$) {
    this.$_rowSet$.collapse($rowKey$$22$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.collapse", {collapse:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.collapse});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.expand = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$expand$($rowKey$$23$$) {
    this.$_rowSet$.expand($rowKey$$23$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.expand", {expand:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.expand});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.get = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$get$($id$$26$$) {
    return this.$_rowSet$.get($id$$26$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.get", {get:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.get});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.hasMore = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$hasMore$() {
    return this.$_rowSet$.hasMore();
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.hasMore", {hasMore:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.hasMore});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.indexOf = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$indexOf$($model$$49$$) {
    return this.$_rowSet$.indexOf($model$$49$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.indexOf", {indexOf:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.indexOf});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.on = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$on$($eventType$$36$$, $eventHandler$$13$$) {
    if ("expand" == $eventType$$36$$ || "collapse" == $eventType$$36$$) {
      this.$_rowSet$.on($eventType$$36$$, $eventHandler$$13$$);
    } else {
      $oj$$14$$.$FlattenedTreeTableDataSource$.$superclass$.on.call(this, $eventType$$36$$, $eventHandler$$13$$);
    }
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.on", {on:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.on});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.off = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$off$($eventType$$37$$, $eventHandler$$14$$) {
    "expand" == $eventType$$37$$ || "collapse" == $eventType$$37$$ ? this.$_rowSet$.off($eventType$$37$$, $eventHandler$$14$$) : $oj$$14$$.$FlattenedTreeTableDataSource$.$superclass$.off.call(this, $eventType$$37$$, $eventHandler$$14$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.off", {off:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.off});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.size = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$size$() {
    return this.$_rowSet$.size();
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.size", {size:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.size});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.sort = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$sort$($criteria$$11$$) {
    if (null == $criteria$$11$$) {
      return $oj$$14$$.$Object$.$__getPromise$(function($resolve$$50$$) {
        $resolve$$50$$();
      });
    }
    var $self$$92$$ = this;
    $criteria$$11$$.axis = "column";
    return $oj$$14$$.$Object$.$__getPromise$(function($resolve$$51$$) {
      $self$$92$$.$_rowSet$.sort($criteria$$11$$);
      $resolve$$51$$();
    });
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.sort", {sort:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.sort});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.startIndex = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$startIndex$() {
    return this.$_rowSet$.startIndex();
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.startIndex", {startIndex:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.startIndex});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.totalSize = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$totalSize$() {
    return this.$_rowSet$.totalSize();
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.totalSize", {totalSize:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.totalSize});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.$_addRowSetEventListeners$ = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$$_addRowSetEventListeners$$() {
    var $self$$93$$ = this;
    this.$_rowSet$.on($oj$$14$$.$RowSet$.$EventType$.ADD, function($event$$171$$) {
      $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call($self$$93$$, $oj$$14$$.$TableDataSource$.$EventType$.ADD, $event$$171$$);
    });
    this.$_rowSet$.on($oj$$14$$.$RowSet$.$EventType$.REMOVE, function($event$$172$$) {
      $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call($self$$93$$, $oj$$14$$.$TableDataSource$.$EventType$.REMOVE, $event$$172$$);
    });
    this.$_rowSet$.on($oj$$14$$.$RowSet$.$EventType$.REQUEST, function($event$$173$$) {
      $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call($self$$93$$, $oj$$14$$.$TableDataSource$.$EventType$.REQUEST, $event$$173$$);
    });
    this.$_rowSet$.on($oj$$14$$.$RowSet$.$EventType$.RESET, function($event$$174$$) {
      $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call($self$$93$$, $oj$$14$$.$TableDataSource$.$EventType$.RESET, $event$$174$$);
    });
    this.$_rowSet$.on($oj$$14$$.$RowSet$.$EventType$.SORT, function($event$$175$$) {
      $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call($self$$93$$, $oj$$14$$.$TableDataSource$.$EventType$.SORT, $event$$175$$);
    });
    this.$_rowSet$.on($oj$$14$$.$RowSet$.$EventType$.CHANGE, function($event$$176$$) {
      $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call($self$$93$$, $oj$$14$$.$TableDataSource$.$EventType$.CHANGE, $event$$176$$);
    });
    this.$_rowSet$.on($oj$$14$$.$RowSet$.$EventType$.SYNC, function($event$$177$$) {
      $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call($self$$93$$, $oj$$14$$.$TableDataSource$.$EventType$.SYNC, $event$$177$$);
    });
    this.$_rowSet$.on($oj$$14$$.$RowSet$.$EventType$.ERROR, function($event$$178$$) {
      $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call($self$$93$$, $oj$$14$$.$TableDataSource$.$EventType$.ERROR, $event$$178$$);
    });
  };
  $oj$$14$$.$TableDomUtils$ = function $$oj$$14$$$$TableDomUtils$$($component$$10$$) {
    this.$component$ = $component$$10$$;
    this.options = $component$$10$$.options;
    this.element = $component$$10$$.element;
    this.Init();
    var $self$$94$$ = this;
    setInterval(function() {
      null != $self$$94$$.$_refreshTableDimensionsTimer$ && ($self$$94$$.$_refreshTableDimensions$($self$$94$$.$_refreshTableDimensionsTimer$.width, $self$$94$$.$_refreshTableDimensionsTimer$.height), $self$$94$$.$_refreshTableDimensionsTimer$ = null);
    }, 50);
  };
  $goog$exportPath_$$("TableDomUtils", $oj$$14$$.$TableDomUtils$, $oj$$14$$);
  $oj$$14$$.$Object$.$createSubclass$($oj$$14$$.$TableDomUtils$, $oj$$14$$.$Object$, "oj.TableDomUtils");
  $oj$$14$$.$TableDomUtils$.prototype.Init = function $$oj$$14$$$$TableDomUtils$$$Init$() {
    $oj$$14$$.$TableDomUtils$.$superclass$.Init.call(this);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("TableDomUtils.prototype.Init", {Init:$oj$$14$$.$TableDomUtils$.prototype.Init});
  $oj$$14$$.$TableDomUtils$.prototype.$addDelayedRenderCell$ = function $$oj$$14$$$$TableDomUtils$$$$addDelayedRenderCell$$($rowIdx$$30$$, $columnIdx$$27$$, $delayedCellObj$$) {
    this.$_delayedRenderCells$ || (this.$_delayedRenderCells$ = []);
    var $delayedRowCells$$ = this.$_delayedRenderCells$[$rowIdx$$30$$];
    $delayedRowCells$$ || ($delayedRowCells$$ = []);
    $delayedRowCells$$[$columnIdx$$27$$] = $delayedCellObj$$;
    this.$_delayedRenderCells$[$rowIdx$$30$$] = $delayedRowCells$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$addDelayedRenderRow$ = function $$oj$$14$$$$TableDomUtils$$$$addDelayedRenderRow$$($rowIdx$$31$$, $delayedRowObj$$1$$) {
    this.$_delayedRenderRows$ || (this.$_delayedRenderRows$ = []);
    this.$_delayedRenderRows$[$rowIdx$$31$$] = $delayedRowObj$$1$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$clearCachedDom$ = function $$oj$$14$$$$TableDomUtils$$$$clearCachedDom$$() {
    this.$clearCachedDomRowData$();
    this.$_tableDimensions$ = this.$_tableElementDimensions$ = this.$_tableContainerDimensions$ = null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$clearCachedDomRowData$ = function $$oj$$14$$$$TableDomUtils$$$$clearCachedDomRowData$$() {
    this.$_cachedDomTableBodyRows$ = null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$clearDelayedRenderCells$ = function $$oj$$14$$$$TableDomUtils$$$$clearDelayedRenderCells$$() {
    if (null != this.$_delayedRenderCells$) {
      for (;0 < this.$_delayedRenderCells$.length;) {
        this.$_delayedRenderCells$.pop();
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$clearDelayedRenderRows$ = function $$oj$$14$$$$TableDomUtils$$$$clearDelayedRenderRows$$() {
    if (null != this.$_delayedRenderRows$) {
      for (;0 < this.$_delayedRenderRows$.length;) {
        this.$_delayedRenderRows$.pop();
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createContextMenu$ = function $$oj$$14$$$$TableDomUtils$$$$createContextMenu$$($handleContextMenuBeforeShow$$, $handleContextMenuSelect$$) {
    var $menuContainer$$1$$ = null, $self$$95$$ = this;
    if (null != this.options.contextMenu || null != this.$getTable$().attr("contextmenu")) {
      var $menuContainerId_sortMenu$$1$$ = this.$getContextMenuId$(), $menuContainer$$1$$ = $$$$14$$($menuContainerId_sortMenu$$1$$);
      if (null != $menuContainer$$1$$ && 0 < $menuContainer$$1$$.length) {
        var $listItems$$1$$ = $menuContainer$$1$$.find("[data-oj-command]");
        if (null != $listItems$$1$$ && 0 < $listItems$$1$$.length) {
          var $command$$7$$;
          $listItems$$1$$.each(function() {
            0 === $$$$14$$(this).children("a").length && ($command$$7$$ = $$$$14$$(this).attr("data-oj-command").split("-"), $$$$14$$(this).replaceWith($self$$95$$.$createContextMenuItem$($command$$7$$[$command$$7$$.length - 1])));
          });
          this.$_menuContainer$ = $menuContainer$$1$$;
          this.$component$.$_contextMenuId$ = $menuContainerId_sortMenu$$1$$;
          $menuContainer$$1$$.ojMenu("refresh");
          $menuContainer$$1$$.on("ojbeforeopen", $handleContextMenuBeforeShow$$);
          $menuContainer$$1$$.on("ojselect", $handleContextMenuSelect$$);
        }
      }
    } else {
      $menuContainer$$1$$ = $$$$14$$(document.createElement("ul")), $menuContainer$$1$$.css("display", "none"), $menuContainer$$1$$.attr("id", this.$getTable$().attr("id") + "contextmenu"), this.$getTableContainer$().append($menuContainer$$1$$), $menuContainerId_sortMenu$$1$$ = this.$createContextMenuItem$("sort"), $menuContainer$$1$$.append($menuContainerId_sortMenu$$1$$), $menuContainer$$1$$.ojMenu(), this.$component$._setOption("contextMenu", "#" + $menuContainer$$1$$.attr("id"));
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createContextMenuItem$ = function $$oj$$14$$$$TableDomUtils$$$$createContextMenuItem$$($command$$8$$) {
    return "sort" === $command$$8$$ ? $$$$14$$(this.$createContextMenuListItem$($command$$8$$)).append($$$$14$$("\x3cul\x3e\x3c/ul\x3e").append($$$$14$$(this.$createContextMenuListItem$("sortAsc"))).append($$$$14$$(this.$createContextMenuListItem$("sortDsc")))) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createContextMenuListItem$ = function $$oj$$14$$$$TableDomUtils$$$$createContextMenuListItem$$($command$$9$$) {
    var $contextMenuListItem$$ = $$$$14$$(document.createElement("li"));
    $contextMenuListItem$$.attr("data-oj-command", "oj-table-" + $command$$9$$);
    $contextMenuListItem$$.append(this.$createContextMenuLabel$($command$$9$$));
    return $contextMenuListItem$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createContextMenuLabel$ = function $$oj$$14$$$$TableDomUtils$$$$createContextMenuLabel$$($command$$10$$) {
    var $contextMenuLabel$$ = $$$$14$$(document.createElement("a"));
    $contextMenuLabel$$.attr("href", "#");
    var $commandString$$ = null;
    "sort" == $command$$10$$ ? $commandString$$ = this.$component$.$getTranslatedString$("labelSort") : "sortAsc" == $command$$10$$ ? $commandString$$ = this.$component$.$getTranslatedString$("labelSortAsc") : "sortDsc" == $command$$10$$ && ($commandString$$ = this.$component$.$getTranslatedString$("labelSortDsc"));
    $contextMenuLabel$$.append($commandString$$);
    return $contextMenuLabel$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createInitialTable$ = function $$oj$$14$$$$TableDomUtils$$$$createInitialTable$$($isTableHeaderless$$, $isTableFooterless$$) {
    this.$getTable$();
    this.$createTableContainer$();
    this.$isDivScroller$() && this.$createTableDivScroller$();
    $isTableHeaderless$$ || this.$createTableHeader$();
    $isTableFooterless$$ || this.$createTableFooter$();
    this.$createTableBody$();
    this.$createTableNoDataMessage$();
    this.$createTableStatusMessage$();
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableBody$ = function $$oj$$14$$$$TableDomUtils$$$$createTableBody$$() {
    var $table$$5$$ = this.$getTable$(), $tableBody$$4$$ = $$$$14$$(document.createElement("tbody"));
    $table$$5$$.append($tableBody$$4$$);
    this.$_cachedDomTableBody$ = $tableBody$$4$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableBodyCell$ = function $$oj$$14$$$$TableDomUtils$$$$createTableBodyCell$$() {
    return $$$$14$$(document.createElement("td"));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableBodyCellAccSelect$ = function $$oj$$14$$$$TableDomUtils$$$$createTableBodyCellAccSelect$$($rowIdx$$33$$, $tableBodyRow$$8$$) {
    var $accSelectionCell$$1$$ = this.$getTableBodyCellAccSelect$($tableBodyRow$$8$$), $accSelectCheckbox$$2_isTableHeaderless$$1$$ = null == this.$getTableHeader$() ? !0 : !1;
    if (null == $accSelectionCell$$1$$) {
      $accSelectionCell$$1$$ = $$$$14$$(document.createElement("td"));
      $accSelectionCell$$1$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_ACC_SELECT_CLASS$);
      $accSelectionCell$$1$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
      $accSelectCheckbox$$2_isTableHeaderless$$1$$ || $accSelectionCell$$1$$.attr("headers", $oj$$14$$.$TableDomUtils$.$_COLUMN_HEADER_ROW_SELECT_ID$);
      $accSelectCheckbox$$2_isTableHeaderless$$1$$ = $$$$14$$(document.createElement("input"));
      $accSelectCheckbox$$2_isTableHeaderless$$1$$.attr("id", "acc_sel_row" + $rowIdx$$33$$);
      $accSelectCheckbox$$2_isTableHeaderless$$1$$.attr("type", "checkbox");
      $accSelectCheckbox$$2_isTableHeaderless$$1$$.attr("tabindex", "-1");
      var $selectRowTitle$$ = this.$component$.$getTranslatedString$(this.$component$.$_BUNDLE_KEY$.$_LABEL_SELECT_ROW$);
      $accSelectCheckbox$$2_isTableHeaderless$$1$$.attr("title", $selectRowTitle$$);
      $accSelectCheckbox$$2_isTableHeaderless$$1$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_CHECKBOX_ACC_SELECT_ROW_CLASS$);
      $accSelectionCell$$1$$.append($accSelectCheckbox$$2_isTableHeaderless$$1$$);
      $tableBodyRow$$8$$.prepend($accSelectionCell$$1$$);
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableBodyRow$ = function $$oj$$14$$$$TableDomUtils$$$$createTableBodyRow$$($rowIdx$$34$$) {
    var $tableBodyRow$$9$$ = $$$$14$$(document.createElement("tr"));
    this.$createTableBodyCellAccSelect$($rowIdx$$34$$, $tableBodyRow$$9$$);
    return $tableBodyRow$$9$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableContainer$ = function $$oj$$14$$$$TableDomUtils$$$$createTableContainer$$() {
    var $tableContainer$$1$$ = $$$$14$$(document.createElement("div"));
    this.element.parent()[0].replaceChild($tableContainer$$1$$[0], this.element[0]);
    $tableContainer$$1$$.prepend(this.element);
    this.$_cachedDomTableContainer$ = $tableContainer$$1$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableFooter$ = function $$oj$$14$$$$TableDomUtils$$$$createTableFooter$$() {
    var $table$$6$$ = this.$getTable$(), $tableFooter$$1$$ = $$$$14$$(document.createElement("tfoot")), $tableBody$$5_tableFooterRow$$1_tableHeader$$2$$ = $$$$14$$(document.createElement("tr"));
    this.$createTableFooterAccSelect$($tableBody$$5_tableFooterRow$$1_tableHeader$$2$$);
    $tableFooter$$1$$.append($tableBody$$5_tableFooterRow$$1_tableHeader$$2$$);
    $tableBody$$5_tableFooterRow$$1_tableHeader$$2$$ = this.$getTableHeader$();
    null != $tableBody$$5_tableFooterRow$$1_tableHeader$$2$$ ? $tableBody$$5_tableFooterRow$$1_tableHeader$$2$$.after($tableFooter$$1$$) : ($tableBody$$5_tableFooterRow$$1_tableHeader$$2$$ = this.$getTableBody$(), null != $tableBody$$5_tableFooterRow$$1_tableHeader$$2$$ ? $tableBody$$5_tableFooterRow$$1_tableHeader$$2$$.before($tableFooter$$1$$) : $table$$6$$.append($tableFooter$$1$$));
    return $tableFooter$$1$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableFooterAccSelect$ = function $$oj$$14$$$$TableDomUtils$$$$createTableFooterAccSelect$$($tableFooterRow$$2$$) {
    var $accFooterCell$$ = $tableFooterRow$$2$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
    null != $accFooterCell$$ && 0 < $accFooterCell$$.length ? $$$$14$$($accFooterCell$$[0]) : ($accFooterCell$$ = $$$$14$$(document.createElement("td")), $accFooterCell$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$), $accFooterCell$$.attr("tabindex", "-1"), $tableFooterRow$$2$$.prepend($accFooterCell$$));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableFooterCell$ = function $$oj$$14$$$$TableDomUtils$$$$createTableFooterCell$$() {
    return $$$$14$$(document.createElement("td"));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableHeader$ = function $$oj$$14$$$$TableDomUtils$$$$createTableHeader$$() {
    var $table$$7$$ = this.$getTable$(), $tableHeader$$3$$ = $$$$14$$(document.createElement("thead")), $tableBody$$6_tableFooter$$2_tableHeaderRow$$2$$ = $$$$14$$(document.createElement("tr"));
    this.$_cachedDomTableHeaderRow$ = $tableBody$$6_tableFooter$$2_tableHeaderRow$$2$$;
    $tableHeader$$3$$.append($tableBody$$6_tableFooter$$2_tableHeaderRow$$2$$);
    $tableBody$$6_tableFooter$$2_tableHeaderRow$$2$$ = this.$getTableFooter$();
    null != $tableBody$$6_tableFooter$$2_tableHeaderRow$$2$$ ? $tableBody$$6_tableFooter$$2_tableHeaderRow$$2$$.before($tableHeader$$3$$) : ($tableBody$$6_tableFooter$$2_tableHeaderRow$$2$$ = this.$getTableBody$(), null != $tableBody$$6_tableFooter$$2_tableHeaderRow$$2$$ ? $tableBody$$6_tableFooter$$2_tableHeaderRow$$2$$.before($tableHeader$$3$$) : $table$$7$$.append($tableHeader$$3$$));
    return this.$_cachedDomTableHeader$ = $tableHeader$$3$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableHeaderAccSelectRowColumn$ = function $$oj$$14$$$$TableDomUtils$$$$createTableHeaderAccSelectRowColumn$$() {
    var $headerColumn$$5$$ = $$$$14$$(document.createElement("th"));
    $headerColumn$$5$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_SELECT_ROW_CLASS$);
    $headerColumn$$5$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
    $headerColumn$$5$$.attr("id", $oj$$14$$.$TableDomUtils$.$_COLUMN_HEADER_ROW_SELECT_ID$);
    var $selectRowTitle$$1$$ = this.$component$.$getTranslatedString$(this.$component$.$_BUNDLE_KEY$.$_LABEL_SELECT_ROW$);
    $headerColumn$$5$$.attr("title", $selectRowTitle$$1$$);
    $headerColumn$$5$$.append($selectRowTitle$$1$$);
    return $headerColumn$$5$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableHeaderColumn$ = function $$oj$$14$$$$TableDomUtils$$$$createTableHeaderColumn$$($columnIdx$$30_headerColumnDiv$$) {
    var $column$$16_headerColumnAccDscLink_headerColumnDscLink$$2$$ = this.$component$.$_getColumnDefs$()[$columnIdx$$30_headerColumnDiv$$], $headerColumnCell$$ = $$$$14$$(document.createElement("th"));
    this.$styleTableHeaderColumn$($columnIdx$$30_headerColumnDiv$$, $headerColumnCell$$);
    $columnIdx$$30_headerColumnDiv$$ = $$$$14$$(document.createElement("div"));
    $columnIdx$$30_headerColumnDiv$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CLASS$);
    $column$$16_headerColumnAccDscLink_headerColumnDscLink$$2$$.sortable == $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$ && ("rtl" === this.$component$.$_GetReadingDirection$() ? $columnIdx$$30_headerColumnDiv$$.css("padding-left", "0px") : $columnIdx$$30_headerColumnDiv$$.css("padding-right", "0px"));
    $headerColumnCell$$.append($columnIdx$$30_headerColumnDiv$$);
    $headerColumnCell$$.attr("abbr", $column$$16_headerColumnAccDscLink_headerColumnDscLink$$2$$.headerText);
    $headerColumnCell$$.attr("title", $column$$16_headerColumnAccDscLink_headerColumnDscLink$$2$$.headerText);
    this.$component$._hoverable($headerColumnCell$$);
    var $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerColumnTextDiv$$ = $$$$14$$(document.createElement("div"));
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerColumnTextDiv$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_TEXT_CLASS$);
    $columnIdx$$30_headerColumnDiv$$.append($headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerColumnTextDiv$$);
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerColumnTextDiv$$.append($column$$16_headerColumnAccDscLink_headerColumnDscLink$$2$$.headerText);
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerColumnTextDiv$$ = $$$$14$$(document.createElement("div"));
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerColumnTextDiv$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_CLASS$);
    $columnIdx$$30_headerColumnDiv$$.append($headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerColumnTextDiv$$);
    if ($column$$16_headerColumnAccDscLink_headerColumnDscLink$$2$$.sortable == $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$) {
      var $headerColumnAccAscLink_headerColumnAscLink$$3$$ = $$$$14$$(document.createElement("a"));
      $headerColumnAccAscLink_headerColumnAscLink$$3$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$);
      $headerColumnAccAscLink_headerColumnAscLink$$3$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_WIDGET_ICON_CLASS$);
      $headerColumnAccAscLink_headerColumnAscLink$$3$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_ICON_CLASS$);
      $headerColumnAccAscLink_headerColumnAscLink$$3$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$);
      $headerColumnAccAscLink_headerColumnAscLink$$3$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_CLICKABLE_ICON$);
      this.$component$._hoverable($headerColumnAccAscLink_headerColumnAscLink$$3$$);
      $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerColumnTextDiv$$.append($headerColumnAccAscLink_headerColumnAscLink$$3$$);
      $headerColumnAccAscLink_headerColumnAscLink$$3$$ = $$$$14$$(document.createElement("a"));
      $headerColumnAccAscLink_headerColumnAscLink$$3$$.attr("tabindex", "0");
      $headerColumnAccAscLink_headerColumnAscLink$$3$$.attr("href", "#");
      $headerColumnAccAscLink_headerColumnAscLink$$3$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_ASC_LINK_CLASS$);
      $headerColumnAccAscLink_headerColumnAscLink$$3$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
      $headerColumnAccAscLink_headerColumnAscLink$$3$$.append(this.$component$.$getTranslatedString$("labelSortAsc"));
      $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerColumnTextDiv$$.append($headerColumnAccAscLink_headerColumnAscLink$$3$$);
      $headerColumnCell$$.attr("data-oj-sortable", $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$);
      $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerColumnTextDiv$$ = $$$$14$$(document.createElement("div"));
      $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerColumnTextDiv$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_SORT_PACEHOLDER_CLASS$);
      $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerColumnTextDiv$$.css("display", "inline-block");
      $columnIdx$$30_headerColumnDiv$$.append($headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerColumnTextDiv$$);
    }
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerColumnTextDiv$$ = $$$$14$$(document.createElement("div"));
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerColumnTextDiv$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_CLASS$);
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerColumnTextDiv$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$);
    $columnIdx$$30_headerColumnDiv$$.append($headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerColumnTextDiv$$);
    $column$$16_headerColumnAccDscLink_headerColumnDscLink$$2$$.sortable == $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$ && ($column$$16_headerColumnAccDscLink_headerColumnDscLink$$2$$ = $$$$14$$(document.createElement("a")), $column$$16_headerColumnAccDscLink_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$), $column$$16_headerColumnAccDscLink_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_WIDGET_ICON_CLASS$), $column$$16_headerColumnAccDscLink_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_ICON_CLASS$), 
    $column$$16_headerColumnAccDscLink_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), $column$$16_headerColumnAccDscLink_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_CLICKABLE_ICON$), this.$component$._hoverable($column$$16_headerColumnAccDscLink_headerColumnDscLink$$2$$), $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerColumnTextDiv$$.append($column$$16_headerColumnAccDscLink_headerColumnDscLink$$2$$), 
    $column$$16_headerColumnAccDscLink_headerColumnDscLink$$2$$ = $$$$14$$(document.createElement("a")), $column$$16_headerColumnAccDscLink_headerColumnDscLink$$2$$.attr("tabindex", "0"), $column$$16_headerColumnAccDscLink_headerColumnDscLink$$2$$.attr("href", "#"), $column$$16_headerColumnAccDscLink_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_DSC_LINK_CLASS$), $column$$16_headerColumnAccDscLink_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$), 
    $column$$16_headerColumnAccDscLink_headerColumnDscLink$$2$$.append(this.$component$.$getTranslatedString$("labelSortDsc")), $headerColumnAscDiv_headerColumnDscDiv_headerColumnSortPlaceholderDiv_headerColumnTextDiv$$.append($column$$16_headerColumnAccDscLink_headerColumnDscLink$$2$$));
    return $headerColumnCell$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableHeaderColumnAccSelect$ = function $$oj$$14$$$$TableDomUtils$$$$createTableHeaderColumnAccSelect$$($columnIdx$$31$$, $columnSelectionMode$$2$$) {
    if ($columnSelectionMode$$2$$ == $oj$$14$$.$TableDomUtils$.$_OPTION_SELECTION_MODES$.$_SINGLE$ || $columnSelectionMode$$2$$ == $oj$$14$$.$TableDomUtils$.$_OPTION_SELECTION_MODES$.$_MULTIPLE$) {
      var $headerColumn$$6$$ = this.$getTableHeaderColumn$($columnIdx$$31$$), $accSelectionHeaderColumn$$ = this.$getTableHeaderColumnAccSelect$($columnIdx$$31$$);
      if (null == $accSelectionHeaderColumn$$) {
        $accSelectionHeaderColumn$$ = $$$$14$$(document.createElement("div"));
        $accSelectionHeaderColumn$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_SELECT_COLUMN_CLASS$);
        $accSelectionHeaderColumn$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
        var $accSelectCheckbox$$3$$ = $$$$14$$(document.createElement("input"));
        $accSelectCheckbox$$3$$.attr("id", "acc_sel_col" + $columnIdx$$31$$);
        $accSelectCheckbox$$3$$.attr("type", "checkbox");
        $accSelectCheckbox$$3$$.attr("tabindex", "-1");
        var $selectColumnTitle$$ = this.$component$.$getTranslatedString$(this.$component$.$_BUNDLE_KEY$.$_LABEL_SELECT_COLUMN$);
        $accSelectCheckbox$$3$$.attr("title", $selectColumnTitle$$);
        $accSelectCheckbox$$3$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_CHECKBOX_ACC_SELECT_COLUMN_CLASS$);
        $accSelectionHeaderColumn$$.append($accSelectCheckbox$$3$$);
        $headerColumn$$6$$.prepend($accSelectionHeaderColumn$$);
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableDivScroller$ = function $$oj$$14$$$$TableDomUtils$$$$createTableDivScroller$$() {
    var $table$$8$$ = this.$getTable$(), $tableContainer$$2$$ = this.$getTableContainer$(), $tableDivScroller$$ = $$$$14$$(document.createElement("div"));
    $tableDivScroller$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_SCROLLER_CLASS$);
    $tableContainer$$2$$[0].replaceChild($tableDivScroller$$[0], $table$$8$$[0]);
    $tableDivScroller$$.append($table$$8$$);
    this.$_cachedDomTableDivScroller$ = $tableDivScroller$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableNoDataMessage$ = function $$oj$$14$$$$TableDomUtils$$$$createTableNoDataMessage$$() {
    var $table$$9$$ = this.$getTable$(), $noDataMessage$$2$$ = $$$$14$$(document.createElement("div"));
    $noDataMessage$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_NO_DATA_MESSAGE_CLASS$);
    $noDataMessage$$2$$.css("display", "none");
    var $emptyTextMsg$$ = null, $emptyTextMsg$$ = null != this.options.emptyText ? this.options.emptyText : this.$component$.$getTranslatedString$(this.$component$.$_BUNDLE_KEY$.$_MSG_NO_DATA$);
    $noDataMessage$$2$$.append($emptyTextMsg$$);
    $table$$9$$.after($noDataMessage$$2$$);
    this.$_cachedDomTableNoDataMessage$ = $noDataMessage$$2$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableStatusMessage$ = function $$oj$$14$$$$TableDomUtils$$$$createTableStatusMessage$$() {
    var $tableContainer$$3$$ = this.$getTableContainer$(), $statusMessage$$2$$ = $$$$14$$(document.createElement("div"));
    $statusMessage$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_STATUS_MESSAGE_CLASS$);
    $statusMessage$$2$$.css("display", "none");
    $statusMessage$$2$$.append(this.$component$.$getTranslatedString$(this.$component$.$_BUNDLE_KEY$.$_MSG_FETCHING_DATA$));
    $tableContainer$$3$$.append($statusMessage$$2$$);
    this.$_cachedDomTableStatusMessage$ = $statusMessage$$2$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getContextMenuId$ = function $$oj$$14$$$$TableDomUtils$$$$getContextMenuId$$() {
    return null == this.options.contextMenu ? "#" + this.$getTable$().attr("contextmenu") : this.options.contextMenu;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getElementColumnIdx$ = function $$oj$$14$$$$TableDomUtils$$$$getElementColumnIdx$$($element$$65_tableFooterCell$$2$$) {
    var $tableBodyCell$$4_tableHeaderColumn$$8$$ = this.$getFirstAncestor$($element$$65_tableFooterCell$$2$$, $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$);
    if (null != $tableBodyCell$$4_tableHeaderColumn$$8$$) {
      return $tableBodyCell$$4_tableHeaderColumn$$8$$.parent().children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$).index($tableBodyCell$$4_tableHeaderColumn$$8$$);
    }
    $tableBodyCell$$4_tableHeaderColumn$$8$$ = this.$getFirstAncestor$($element$$65_tableFooterCell$$2$$, $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CELL_CLASS$);
    if (null != $tableBodyCell$$4_tableHeaderColumn$$8$$) {
      return $tableBodyCell$$4_tableHeaderColumn$$8$$.parent().children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CELL_CLASS$).index($tableBodyCell$$4_tableHeaderColumn$$8$$);
    }
    $element$$65_tableFooterCell$$2$$ = this.$getFirstAncestor$($element$$65_tableFooterCell$$2$$, $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$);
    return null != $element$$65_tableFooterCell$$2$$ ? $element$$65_tableFooterCell$$2$$.parent().children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$).index($element$$65_tableFooterCell$$2$$) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getElementRowIdx$ = function $$oj$$14$$$$TableDomUtils$$$$getElementRowIdx$$($element$$66$$) {
    return this.$getFirstAncestor$($element$$66$$, $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$).index();
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableContainerDimensions$ = function $$oj$$14$$$$TableDomUtils$$$$getTableContainerDimensions$$() {
    var $tableContainer$$4$$ = this.$getTableContainer$();
    $tableContainer$$4$$.attr("style", "");
    this.$styleTableContainer$($tableContainer$$4$$);
    var $i$$223_tableBorderWidth_tableWidth$$, $tableContainerChildrenDisplayStyle$$ = [];
    for ($i$$223_tableBorderWidth_tableWidth$$ = 0;$i$$223_tableBorderWidth_tableWidth$$ < $tableContainer$$4$$.children().length;$i$$223_tableBorderWidth_tableWidth$$++) {
      $tableContainerChildrenDisplayStyle$$[$i$$223_tableBorderWidth_tableWidth$$] = $$$$14$$($tableContainer$$4$$.children()[$i$$223_tableBorderWidth_tableWidth$$]).css("display").toString(), $$$$14$$($tableContainer$$4$$.children()[$i$$223_tableBorderWidth_tableWidth$$]).css("display", "none");
    }
    var $tableContainerDisplayStyle$$ = $tableContainer$$4$$.css("display").toString();
    $tableContainer$$4$$.css("display", "inline-block");
    $i$$223_tableBorderWidth_tableWidth$$ = $tableContainer$$4$$.outerWidth() - $tableContainer$$4$$.innerWidth();
    var $dimensions_tableBorderHeight_tableHeight$$ = $tableContainer$$4$$.outerHeight() - $tableContainer$$4$$.innerHeight(), $dimensions_tableBorderHeight_tableHeight$$ = $tableContainer$$4$$.outerHeight() > $dimensions_tableBorderHeight_tableHeight$$ ? $tableContainer$$4$$.outerHeight() : 0;
    $i$$223_tableBorderWidth_tableWidth$$ = $tableContainer$$4$$.outerWidth() > $i$$223_tableBorderWidth_tableWidth$$ ? $tableContainer$$4$$.outerWidth() : 0;
    $dimensions_tableBorderHeight_tableHeight$$ = {height:$dimensions_tableBorderHeight_tableHeight$$, width:$i$$223_tableBorderWidth_tableWidth$$};
    for ($i$$223_tableBorderWidth_tableWidth$$ = 0;$i$$223_tableBorderWidth_tableWidth$$ < $tableContainer$$4$$.children().length;$i$$223_tableBorderWidth_tableWidth$$++) {
      $$$$14$$($tableContainer$$4$$.children()[$i$$223_tableBorderWidth_tableWidth$$]).css("display", $tableContainerChildrenDisplayStyle$$[$i$$223_tableBorderWidth_tableWidth$$]);
    }
    $tableContainer$$4$$.css("display", $tableContainerDisplayStyle$$);
    return 0 == $tableContainer$$4$$[0].clientWidth ? null : $dimensions_tableBorderHeight_tableHeight$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableDimensions$ = function $$oj$$14$$$$TableDomUtils$$$$getTableDimensions$$() {
    var $table$$10$$ = this.$getTable$(), $i$$224$$, $tableChildrenDisplayStyle$$ = [];
    for ($i$$224$$ = 0;$i$$224$$ < $table$$10$$.children().length;$i$$224$$++) {
      $tableChildrenDisplayStyle$$[$i$$224$$] = $$$$14$$($table$$10$$.children()[$i$$224$$]).css("display").toString(), $$$$14$$($table$$10$$.children()[$i$$224$$]).css("display", "none");
    }
    $table$$10$$.removeClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_ELEMENT_CLASS$);
    $table$$10$$.css("display", "inline-block");
    var $dimensions$$1$$ = {height:$table$$10$$.height(), width:$table$$10$$.width()};
    for ($i$$224$$ = 0;$i$$224$$ < $table$$10$$.children().length;$i$$224$$++) {
      $$$$14$$($table$$10$$.children()[$i$$224$$]).css("display", $tableChildrenDisplayStyle$$[$i$$224$$]);
    }
    $table$$10$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_ELEMENT_CLASS$);
    $table$$10$$.css("display", "");
    return $dimensions$$1$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getFirstAncestor$ = function $$oj$$14$$$$TableDomUtils$$$$getFirstAncestor$$($element$$67$$, $className$$11$$) {
    var $parents$$2$$;
    if (null == $element$$67$$) {
      return null;
    }
    $element$$67$$ = $$$$14$$($element$$67$$);
    if ($element$$67$$.hasClass($className$$11$$)) {
      return $element$$67$$;
    }
    $parents$$2$$ = $element$$67$$.parents("." + $className$$11$$);
    return 0 != $parents$$2$$.length ? $parents$$2$$.eq(0) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getRendererContextObject$ = function $$oj$$14$$$$TableDomUtils$$$$getRendererContextObject$$($row$$44$$, $parentElement$$1$$) {
    var $context$$42$$ = {};
    $context$$42$$.component = this.$component$;
    var $dataSource$$11_rowContext$$1$$ = this.options.data;
    $dataSource$$11_rowContext$$1$$ instanceof $oj$$14$$.$PagingTableDataSource$ && ($dataSource$$11_rowContext$$1$$ = $dataSource$$11_rowContext$$1$$.getWrappedDataSource());
    $context$$42$$.datasource = $dataSource$$11_rowContext$$1$$;
    $context$$42$$.parentElement = $parentElement$$1$$;
    if (null != $row$$44$$) {
      $context$$42$$.status = this.$getRendererStatusObject$($row$$44$$);
      var $dataSource$$11_rowContext$$1$$ = $row$$44$$.context, $i$$225$$;
      for ($i$$225$$ in $dataSource$$11_rowContext$$1$$) {
        $dataSource$$11_rowContext$$1$$.hasOwnProperty($i$$225$$) && ($context$$42$$[$i$$225$$] = $dataSource$$11_rowContext$$1$$[$i$$225$$]);
      }
    }
    return $context$$42$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getRendererStatusObject$ = function $$oj$$14$$$$TableDomUtils$$$$getRendererStatusObject$$($row$$45$$) {
    return{rowIndex:this.options.data.indexOf($row$$45$$), rowKey:$row$$45$$.id, currentRow:$$$$14$$.extend({}, this.$component$.$_getCurrentRow$())};
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getScrollbarHeight$ = function $$oj$$14$$$$TableDomUtils$$$$getScrollbarHeight$$() {
    var $scroller$$ = this.$getScroller$();
    return 0 < $scroller$$.get(0).clientHeight ? $scroller$$.get(0).offsetHeight - $scroller$$.get(0).clientHeight : 0;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getScrollbarWidth$ = function $$oj$$14$$$$TableDomUtils$$$$getScrollbarWidth$$() {
    var $scroller$$1$$ = this.$getScroller$();
    return 0 < $scroller$$1$$.get(0).clientWidth ? $scroller$$1$$.get(0).offsetWidth - $scroller$$1$$.get(0).clientWidth : 0;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getScroller$ = function $$oj$$14$$$$TableDomUtils$$$$getScroller$$() {
    return this.$isDivScroller$() ? this.$getTableDivScroller$() : this.$getTableBody$();
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTable$ = function $$oj$$14$$$$TableDomUtils$$$$getTable$$() {
    return $$$$14$$(this.element);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBody$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBody$$() {
    if (!this.$_cachedDomTableBody$) {
      var $table$$11$$ = this.$getTable$(), $tableBody$$7$$ = null;
      $table$$11$$ && ($tableBody$$7$$ = $table$$11$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_BODY_CLASS$)) && 0 < $tableBody$$7$$.length && (this.$_cachedDomTableBody$ = $$$$14$$($tableBody$$7$$.get(0)));
    }
    return this.$_cachedDomTableBody$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBodyCell$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBodyCell$$($rowIdx$$35_tableBodyCells$$1$$, $columnIdx$$32$$, $tableBodyRow$$11$$) {
    return($rowIdx$$35_tableBodyCells$$1$$ = this.$getTableBodyCells$($rowIdx$$35_tableBodyCells$$1$$, $tableBodyRow$$11$$)) ? $rowIdx$$35_tableBodyCells$$1$$.length > $columnIdx$$32$$ ? $$$$14$$($rowIdx$$35_tableBodyCells$$1$$[$columnIdx$$32$$]) : null : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBodyCellAccSelect$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBodyCellAccSelect$$($accSelectionCell$$2_tableBodyRow$$12$$) {
    return null != $accSelectionCell$$2_tableBodyRow$$12$$ && ($accSelectionCell$$2_tableBodyRow$$12$$ = $accSelectionCell$$2_tableBodyRow$$12$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_ACC_SELECT_CLASS$), null != $accSelectionCell$$2_tableBodyRow$$12$$ && 0 < $accSelectionCell$$2_tableBodyRow$$12$$.length) ? $$$$14$$($accSelectionCell$$2_tableBodyRow$$12$$[0]) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBodyCells$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBodyCells$$($rowIdx$$36$$, $tableBodyRow$$13$$) {
    $tableBodyRow$$13$$ || ($tableBodyRow$$13$$ = this.$getTableBodyRow$($rowIdx$$36$$));
    if (!$tableBodyRow$$13$$) {
      return null;
    }
    var $tableBodyCellElements$$ = $tableBodyRow$$13$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$);
    return null != $tableBodyCellElements$$ && 0 < $tableBodyCellElements$$.length ? $tableBodyCellElements$$ : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBodyRow$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBodyRow$$($rowIdx$$37$$) {
    var $tableBodyRows$$2$$ = this.$getTableBodyRows$();
    return $tableBodyRows$$2$$ && null != $rowIdx$$37$$ ? $tableBodyRows$$2$$.length > $rowIdx$$37$$ ? $$$$14$$($tableBodyRows$$2$$[$rowIdx$$37$$]) : null : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBodyRows$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBodyRows$$() {
    if (!this.$_cachedDomTableBodyRows$) {
      var $tableBodyRowElements$$ = this.$getTableBody$().children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$);
      null != $tableBodyRowElements$$ && 0 < $tableBodyRowElements$$.length && (this.$_cachedDomTableBodyRows$ = $tableBodyRowElements$$);
    }
    return this.$_cachedDomTableBodyRows$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableContainer$ = function $$oj$$14$$$$TableDomUtils$$$$getTableContainer$$() {
    this.$_cachedDomTableContainer$ || (this.$isDivScroller$() ? this.$_cachedDomTableContainer$ = $$$$14$$(this.element.get(0).parentNode.parentNode) : this.$_cachedDomTableContainer$ = $$$$14$$(this.element.get(0).parentNode));
    return this.$_cachedDomTableContainer$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableFooter$ = function $$oj$$14$$$$TableDomUtils$$$$getTableFooter$$() {
    var $table$$12$$ = this.$getTable$(), $tableFooter$$3$$ = null;
    return $table$$12$$ && ($tableFooter$$3$$ = $table$$12$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CLASS$)) && 0 < $tableFooter$$3$$.length ? $$$$14$$($tableFooter$$3$$.get(0)) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableFooterCell$ = function $$oj$$14$$$$TableDomUtils$$$$getTableFooterCell$$($columnIdx$$33$$) {
    var $tableFooterCells_tableFooterRow$$3$$ = this.$getTableFooterRow$(), $tableFooterCells_tableFooterRow$$3$$ = $$$$14$$($tableFooterCells_tableFooterRow$$3$$).children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$);
    return $tableFooterCells_tableFooterRow$$3$$.length >= $columnIdx$$33$$ ? $$$$14$$($tableFooterCells_tableFooterRow$$3$$[$columnIdx$$33$$]) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableFooterRow$ = function $$oj$$14$$$$TableDomUtils$$$$getTableFooterRow$$() {
    if (!this.$_cachedDomTableFooterRow$) {
      var $tableFooter$$4$$ = this.$getTableFooter$();
      if (!$tableFooter$$4$$) {
        return null;
      }
      this.$_cachedDomTableFooterRow$ = $$$$14$$($tableFooter$$4$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_ROW_CLASS$).get(0));
    }
    return this.$_cachedDomTableFooterRow$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableHeader$ = function $$oj$$14$$$$TableDomUtils$$$$getTableHeader$$() {
    if (!this.$_cachedDomTableHeader$) {
      var $table$$13$$ = this.$getTable$(), $tableHeader$$4$$ = null;
      $table$$13$$ && ($tableHeader$$4$$ = $table$$13$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HEADER_CLASS$)) && 0 < $tableHeader$$4$$.length && (this.$_cachedDomTableHeader$ = $$$$14$$($tableHeader$$4$$.get(0)));
    }
    return this.$_cachedDomTableHeader$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableHeaderColumn$ = function $$oj$$14$$$$TableDomUtils$$$$getTableHeaderColumn$$($columnIdx$$34$$) {
    var $headerColumns$$ = this.$getTableHeaderColumns$();
    return $headerColumns$$ ? $headerColumns$$.length > $columnIdx$$34$$ ? $$$$14$$($headerColumns$$[$columnIdx$$34$$]) : null : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableHeaderColumnAccSelect$ = function $$oj$$14$$$$TableDomUtils$$$$getTableHeaderColumnAccSelect$$($accSelectionCell$$3_columnIdx$$35_headerColumn$$7$$) {
    $accSelectionCell$$3_columnIdx$$35_headerColumn$$7$$ = this.$getTableHeaderColumn$($accSelectionCell$$3_columnIdx$$35_headerColumn$$7$$);
    return null != $accSelectionCell$$3_columnIdx$$35_headerColumn$$7$$ && ($accSelectionCell$$3_columnIdx$$35_headerColumn$$7$$ = $accSelectionCell$$3_columnIdx$$35_headerColumn$$7$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_SELECT_COLUMN_CLASS$), null != $accSelectionCell$$3_columnIdx$$35_headerColumn$$7$$ && 0 < $accSelectionCell$$3_columnIdx$$35_headerColumn$$7$$.length) ? $$$$14$$($accSelectionCell$$3_columnIdx$$35_headerColumn$$7$$[0]) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableHeaderColumns$ = function $$oj$$14$$$$TableDomUtils$$$$getTableHeaderColumns$$() {
    var $headerColumnElements_tableHeaderRow$$3$$ = this.$getTableHeaderRow$();
    return null != $headerColumnElements_tableHeaderRow$$3$$ && ($headerColumnElements_tableHeaderRow$$3$$ = $headerColumnElements_tableHeaderRow$$3$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CELL_CLASS$), null != $headerColumnElements_tableHeaderRow$$3$$ && 0 < $headerColumnElements_tableHeaderRow$$3$$.length) ? $headerColumnElements_tableHeaderRow$$3$$ : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableHeaderRow$ = function $$oj$$14$$$$TableDomUtils$$$$getTableHeaderRow$$() {
    if (!this.$_cachedDomTableHeaderRow$) {
      var $tableHeader$$5$$ = this.$getTableHeader$();
      if (!$tableHeader$$5$$) {
        return null;
      }
      this.$_cachedDomTableHeaderRow$ = $$$$14$$($tableHeader$$5$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HEADER_ROW_CLASS$).get(0));
    }
    return this.$_cachedDomTableHeaderRow$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableDivScroller$ = function $$oj$$14$$$$TableDomUtils$$$$getTableDivScroller$$() {
    if (!this.$_cachedDomTableDivScroller$) {
      var $tableContainer$$5_tableDivScroller$$1$$ = this.$getTableContainer$();
      $tableContainer$$5_tableDivScroller$$1$$ && ($tableContainer$$5_tableDivScroller$$1$$ = $tableContainer$$5_tableDivScroller$$1$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_SCROLLER_CLASS$)) && 0 < $tableContainer$$5_tableDivScroller$$1$$.length && (this.$_cachedDomTableDivScroller$ = $$$$14$$($tableContainer$$5_tableDivScroller$$1$$.get(0)));
    }
    return this.$_cachedDomTableDivScroller$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableNoDataMessage$ = function $$oj$$14$$$$TableDomUtils$$$$getTableNoDataMessage$$() {
    if (!this.$_cachedDomTableNoDataMessage$) {
      var $noDataMessage$$3_tableContainer$$6$$ = this.$getTableContainer$();
      $noDataMessage$$3_tableContainer$$6$$ && ($noDataMessage$$3_tableContainer$$6$$ = $noDataMessage$$3_tableContainer$$6$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_NO_DATA_MESSAGE_CLASS$)) && 0 < $noDataMessage$$3_tableContainer$$6$$.length && (this.$_cachedDomTableNoDataMessage$ = $$$$14$$($noDataMessage$$3_tableContainer$$6$$.get(0)));
    }
    return this.$_cachedDomTableNoDataMessage$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableStatusMessage$ = function $$oj$$14$$$$TableDomUtils$$$$getTableStatusMessage$$() {
    if (!this.$_cachedDomTableStatusMessage$) {
      var $statusMessage$$3_tableContainer$$7$$ = this.$getTableContainer$();
      $statusMessage$$3_tableContainer$$7$$ && ($statusMessage$$3_tableContainer$$7$$ = $statusMessage$$3_tableContainer$$7$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_STATUS_MESSAGE_CLASS$)) && 0 < $statusMessage$$3_tableContainer$$7$$.length && (this.$_cachedDomTableStatusMessage$ = $$$$14$$($statusMessage$$3_tableContainer$$7$$.get(0)));
    }
    return this.$_cachedDomTableStatusMessage$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$insertTableBodyCell$ = function $$oj$$14$$$$TableDomUtils$$$$insertTableBodyCell$$($rowIdx$$38_tableBodyCells$$2$$, $accSelectionCell$$4_columnIdx$$36$$, $tableBodyCell$$5$$, $tableBodyRow$$14$$) {
    this.$setTableBodyCellAttributes$($rowIdx$$38_tableBodyCells$$2$$, $accSelectionCell$$4_columnIdx$$36$$, $tableBodyCell$$5$$);
    $rowIdx$$38_tableBodyCells$$2$$ = $$$$14$$($tableBodyRow$$14$$).children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$);
    0 == $accSelectionCell$$4_columnIdx$$36$$ ? ($accSelectionCell$$4_columnIdx$$36$$ = $tableBodyRow$$14$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_ACC_SELECT_CLASS$), null != $accSelectionCell$$4_columnIdx$$36$$ && 0 < $accSelectionCell$$4_columnIdx$$36$$.length ? $$$$14$$($accSelectionCell$$4_columnIdx$$36$$[0]).after($tableBodyCell$$5$$) : $tableBodyRow$$14$$.prepend($tableBodyCell$$5$$)) : $rowIdx$$38_tableBodyCells$$2$$.length >= $accSelectionCell$$4_columnIdx$$36$$ ? 
    $$$$14$$($rowIdx$$38_tableBodyCells$$2$$.get($accSelectionCell$$4_columnIdx$$36$$ - 1)).after($tableBodyCell$$5$$) : $$$$14$$($tableBodyRow$$14$$).append($tableBodyCell$$5$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$insertTableBodyRow$ = function $$oj$$14$$$$TableDomUtils$$$$insertTableBodyRow$$($rowIdx$$39$$, $tableBodyRow$$15$$, $docFrag$$2$$) {
    var $tableBodyRows$$3$$ = null;
    if (null == $docFrag$$2$$) {
      var $tableBody$$9$$ = this.$getTableBody$(), $tableBodyRows$$3$$ = $tableBody$$9$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$)
    } else {
      $tableBodyRows$$3$$ = $docFrag$$2$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$);
    }
    null == $docFrag$$2$$ ? 0 == $rowIdx$$39$$ ? $tableBody$$9$$.prepend($tableBodyRow$$15$$) : $tableBodyRows$$3$$.length >= $rowIdx$$39$$ ? $$$$14$$($tableBodyRows$$3$$.get($rowIdx$$39$$ - 1)).after($tableBodyRow$$15$$) : $tableBody$$9$$.append($tableBodyRow$$15$$) : $docFrag$$2$$.append($tableBodyRow$$15$$);
    this.$clearCachedDomRowData$();
  };
  $oj$$14$$.$TableDomUtils$.prototype.$insertTableFooterCell$ = function $$oj$$14$$$$TableDomUtils$$$$insertTableFooterCell$$($columnIdx$$37$$, $tableFooterCell$$3$$) {
    var $tableFooterRow$$4$$ = this.$getTableFooterRow$(), $accFooterCell$$1_tableFooterCells$$1$$ = $$$$14$$($tableFooterRow$$4$$).children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$);
    0 == $columnIdx$$37$$ ? ($accFooterCell$$1_tableFooterCells$$1$$ = $tableFooterRow$$4$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$), null != $accFooterCell$$1_tableFooterCells$$1$$ && 0 < $accFooterCell$$1_tableFooterCells$$1$$.length ? $$$$14$$($accFooterCell$$1_tableFooterCells$$1$$[0]).after($tableFooterCell$$3$$) : $tableFooterRow$$4$$.prepend($tableFooterCell$$3$$)) : $tableFooterRow$$4$$.length >= $columnIdx$$37$$ ? $$$$14$$($accFooterCell$$1_tableFooterCells$$1$$.get($columnIdx$$37$$ - 
    1)).after($tableFooterCell$$3$$) : $tableFooterRow$$4$$.append($tableFooterCell$$3$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$insertTableHeaderColumn$ = function $$oj$$14$$$$TableDomUtils$$$$insertTableHeaderColumn$$($columnIdx$$38$$, $tableHeaderColumn$$9$$) {
    var $tableHeaderRow$$4$$ = this.$getTableHeaderRow$(), $accSelectionColumn$$1_tableHeaderColumns$$1$$ = this.$getTableHeaderColumns$();
    this.$setTableHeaderColumnAttributes$($columnIdx$$38$$, $tableHeaderColumn$$9$$);
    var $oldTableHeaderColumn$$ = this.$getTableHeaderColumn$($columnIdx$$38$$);
    $oldTableHeaderColumn$$ ? $oldTableHeaderColumn$$.replaceWith($tableHeaderColumn$$9$$) : 0 == $columnIdx$$38$$ ? ($accSelectionColumn$$1_tableHeaderColumns$$1$$ = $tableHeaderRow$$4$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_SELECT_ROW_CLASS$), null != $accSelectionColumn$$1_tableHeaderColumns$$1$$ && 0 < $accSelectionColumn$$1_tableHeaderColumns$$1$$.length ? $$$$14$$($accSelectionColumn$$1_tableHeaderColumns$$1$$[0]).after($tableHeaderColumn$$9$$) : $tableHeaderRow$$4$$.prepend($tableHeaderColumn$$9$$)) : 
    $accSelectionColumn$$1_tableHeaderColumns$$1$$.length >= $columnIdx$$38$$ ? $$$$14$$($accSelectionColumn$$1_tableHeaderColumns$$1$$.get($columnIdx$$38$$ - 1)).after($tableHeaderColumn$$9$$) : $tableHeaderRow$$4$$.append($tableHeaderColumn$$9$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$isDivScroller$ = function $$oj$$14$$$$TableDomUtils$$$$isDivScroller$$() {
    return this.$_isIE$() && 10 > this.$_isIE$() ? !0 : !1;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$isTableContainerScrollable$ = function $$oj$$14$$$$TableDomUtils$$$$isTableContainerScrollable$$() {
    var $tableContainer$$8$$ = this.$getTableContainer$(), $noDataMessage$$4$$ = this.$getTableNoDataMessage$(), $statusMessage$$4$$ = this.$getTableStatusMessage$();
    if (null != $noDataMessage$$4$$) {
      var $noDataDisplay$$ = $noDataMessage$$4$$.css("display").toString();
      $noDataMessage$$4$$.css("display", "none");
    }
    if (null != $statusMessage$$4$$) {
      var $statusMessageDisplay$$ = $statusMessage$$4$$.css("display").toString();
      $statusMessage$$4$$.css("display", "none");
    }
    var $result$$23$$ = [];
    $result$$23$$[0] = 0 < this.$_tableContainerDimensions$.height && 0 < $tableContainer$$8$$[0].clientHeight && $tableContainer$$8$$[0].scrollHeight > $tableContainer$$8$$[0].clientHeight ? !0 : !1;
    $result$$23$$[1] = 0 < this.$_tableContainerDimensions$.width && 0 < $tableContainer$$8$$[0].clientWidth && $tableContainer$$8$$[0].scrollWidth > $tableContainer$$8$$[0].clientWidth ? !0 : !1;
    null != $noDataMessage$$4$$ && $noDataMessage$$4$$.css("display", $noDataDisplay$$);
    null != $statusMessage$$4$$ && $statusMessage$$4$$.css("display", $statusMessageDisplay$$);
    return $result$$23$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$refreshTableDimensions$ = function $$oj$$14$$$$TableDomUtils$$$$refreshTableDimensions$$($immediate$$3$$, $width$$21$$, $height$$17$$) {
    $immediate$$3$$ ? this.$_refreshTableDimensions$($width$$21$$, $height$$17$$) : this.$_refreshTableDimensionsTimer$ = {width:$width$$21$$, height:$height$$17$$};
  };
  $oj$$14$$.$TableDomUtils$.prototype.$renderDelayedTableBodyCell$ = function $$oj$$14$$$$TableDomUtils$$$$renderDelayedTableBodyCell$$($rowIdx$$41$$, $columnIdx$$39$$) {
    var $delayedCell_tableBodyCell$$6$$ = this.$_getDelayedRenderCell$($rowIdx$$41$$, $columnIdx$$39$$);
    if (null != $delayedCell_tableBodyCell$$6$$) {
      var $cellColumnContent$$ = $delayedCell_tableBodyCell$$6$$.$cellRenderer$({cellContext:$delayedCell_tableBodyCell$$6$$.$cellContext$, columnIndex:$columnIdx$$39$$, data:$delayedCell_tableBodyCell$$6$$.data, row:$$$$14$$.extend({}, $delayedCell_tableBodyCell$$6$$.row.attributes)});
      null != $cellColumnContent$$ ? $delayedCell_tableBodyCell$$6$$.$tableBodyCell$.append($cellColumnContent$$) : ($delayedCell_tableBodyCell$$6$$ = $$$$14$$($delayedCell_tableBodyCell$$6$$.$tableBodyRow$.children(":not(." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_ACC_SELECT_CLASS$ + ")")[$columnIdx$$39$$]), this.$setTableBodyCellAttributes$($rowIdx$$41$$, $columnIdx$$39$$, $delayedCell_tableBodyCell$$6$$), this.$styleTableBodyCell$($columnIdx$$39$$, $delayedCell_tableBodyCell$$6$$));
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$renderDelayedTableBodyRow$ = function $$oj$$14$$$$TableDomUtils$$$$renderDelayedTableBodyRow$$($rowIdx$$42$$) {
    var $delayedRow_i$$226_tableBodyRow$$17$$ = this.$_getDelayedRenderRow$($rowIdx$$42$$);
    if (null != $delayedRow_i$$226_tableBodyRow$$17$$) {
      var $rowContent_tableBody$$10_tableBodyCells$$3$$ = $delayedRow_i$$226_tableBodyRow$$17$$.rowRenderer({rowContext:$delayedRow_i$$226_tableBodyRow$$17$$.$rowContext$, row:$$$$14$$.extend({}, $delayedRow_i$$226_tableBodyRow$$17$$.row.attributes)}), $delayedRow_i$$226_tableBodyRow$$17$$ = $delayedRow_i$$226_tableBodyRow$$17$$.$tableBodyRow$;
      null != $rowContent_tableBody$$10_tableBodyCells$$3$$ ? $delayedRow_i$$226_tableBodyRow$$17$$.append($rowContent_tableBody$$10_tableBodyCells$$3$$) : ($rowContent_tableBody$$10_tableBodyCells$$3$$ = this.$getTableBody$(), $delayedRow_i$$226_tableBodyRow$$17$$ = $$$$14$$($rowContent_tableBody$$10_tableBodyCells$$3$$.children()[$rowIdx$$42$$]), this.$clearCachedDomRowData$(), this.$styleTableBodyRow$($delayedRow_i$$226_tableBodyRow$$17$$));
      this.$createTableBodyCellAccSelect$($rowIdx$$42$$, $delayedRow_i$$226_tableBodyRow$$17$$);
      $rowContent_tableBody$$10_tableBodyCells$$3$$ = $delayedRow_i$$226_tableBodyRow$$17$$.children("td");
      for ($delayedRow_i$$226_tableBodyRow$$17$$ = 1;$delayedRow_i$$226_tableBodyRow$$17$$ < $rowContent_tableBody$$10_tableBodyCells$$3$$.length;$delayedRow_i$$226_tableBodyRow$$17$$++) {
        var $tableBodyCell$$7$$ = $$$$14$$($rowContent_tableBody$$10_tableBodyCells$$3$$[$delayedRow_i$$226_tableBodyRow$$17$$]);
        this.$setTableBodyCellAttributes$($rowIdx$$42$$, $delayedRow_i$$226_tableBodyRow$$17$$ - 1, $tableBodyCell$$7$$);
        this.$styleTableBodyCell$($delayedRow_i$$226_tableBodyRow$$17$$ - 1, $tableBodyCell$$7$$);
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$setTableBodyCell$ = function $$oj$$14$$$$TableDomUtils$$$$setTableBodyCell$$($rowIdx$$43$$, $columnIdx$$40$$, $tableBodyRow$$18$$, $row$$47$$, $cellRenderer$$1$$) {
    var $cellContext$$1_column$$17$$ = this.$component$.$_getColumnDefs$()[$columnIdx$$40$$], $tableBodyCell$$8$$ = this.$getTableBodyCell$($rowIdx$$43$$, $columnIdx$$40$$, $tableBodyRow$$18$$);
    $tableBodyCell$$8$$ ? $tableBodyCell$$8$$.empty() : ($tableBodyCell$$8$$ = this.$createTableBodyCell$(), this.$styleTableBodyCell$($columnIdx$$40$$, $tableBodyCell$$8$$), this.$insertTableBodyCell$($rowIdx$$43$$, $columnIdx$$40$$, $tableBodyCell$$8$$, $tableBodyRow$$18$$));
    var $data$$127$$ = null;
    null != $cellContext$$1_column$$17$$.field && ($data$$127$$ = $row$$47$$.get($cellContext$$1_column$$17$$.field));
    if ($cellRenderer$$1$$) {
      var $cellContext$$1_column$$17$$ = this.$getRendererContextObject$($row$$47$$, $tableBodyCell$$8$$[0]), $delayedCellObj$$1$$ = {};
      $delayedCellObj$$1$$.$cellRenderer$ = $cellRenderer$$1$$;
      $delayedCellObj$$1$$.$cellContext$ = $cellContext$$1_column$$17$$;
      $delayedCellObj$$1$$.data = $data$$127$$;
      $delayedCellObj$$1$$.row = $row$$47$$;
      $delayedCellObj$$1$$.$tableBodyRow$ = $tableBodyRow$$18$$;
      $delayedCellObj$$1$$.$tableBodyCell$ = $tableBodyCell$$8$$;
      this.$addDelayedRenderCell$($rowIdx$$43$$, $columnIdx$$40$$, $delayedCellObj$$1$$);
    } else {
      $tableBodyCell$$8$$.append($data$$127$$);
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$setTableBodyCellAttributes$ = function $$oj$$14$$$$TableDomUtils$$$$setTableBodyCellAttributes$$($cellRowHeaderId_rowIdx$$44$$, $column$$18_columnIdx$$41$$, $tableBodyCell$$9$$) {
    var $accessibility_headers$$4$$ = this.options.accessibility;
    $column$$18_columnIdx$$41$$ = this.$component$.$_getColumnDefs$()[$column$$18_columnIdx$$41$$];
    var $rowHeaderColumnId$$ = null, $isTableHeaderless$$2$$ = null == this.$getTableHeader$() ? !0 : !1, $rowHeaderColumnId$$ = null != $accessibility_headers$$4$$ && null != $accessibility_headers$$4$$.rowHeader ? $accessibility_headers$$4$$.rowHeader : this.$component$.$_getColumnDefs$()[0].id;
    $cellRowHeaderId_rowIdx$$44$$ = $rowHeaderColumnId$$ + "_" + $cellRowHeaderId_rowIdx$$44$$;
    $accessibility_headers$$4$$ = $column$$18_columnIdx$$41$$.id;
    $rowHeaderColumnId$$ == $column$$18_columnIdx$$41$$.id ? ($tableBodyCell$$9$$.attr("id", $cellRowHeaderId_rowIdx$$44$$), $isTableHeaderless$$2$$ && ($accessibility_headers$$4$$ = "")) : $accessibility_headers$$4$$ = $isTableHeaderless$$2$$ ? $cellRowHeaderId_rowIdx$$44$$ : $accessibility_headers$$4$$ + " " + $cellRowHeaderId_rowIdx$$44$$;
    $tableBodyCell$$9$$.attr("headers") || $tableBodyCell$$9$$.attr("headers", $accessibility_headers$$4$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$setTableHeaderColumnAttributes$ = function $$oj$$14$$$$TableDomUtils$$$$setTableHeaderColumnAttributes$$($columnIdx$$42$$, $tableHeaderColumn$$10$$) {
    var $column$$19$$ = this.$component$.$_getColumnDefs$()[$columnIdx$$42$$];
    $tableHeaderColumn$$10$$.attr("id") || $tableHeaderColumn$$10$$.attr("id", $column$$19$$.id);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleInitialTable$ = function $$oj$$14$$$$TableDomUtils$$$$styleInitialTable$$() {
    var $table$$14$$ = this.$getTable$(), $tableContainer$$9$$ = this.$getTableContainer$(), $tableHeader$$6$$ = $table$$14$$.children("thead"), $tableHeader$$6$$ = 0 < $tableHeader$$6$$.length ? $$$$14$$($tableHeader$$6$$[0]) : null, $tableFooter$$5$$ = $table$$14$$.children("tfoot"), $tableFooter$$5$$ = 0 < $tableFooter$$5$$.length ? $$$$14$$($tableFooter$$5$$[0]) : null, $tableBody$$11$$ = $table$$14$$.children("tbody"), $tableBody$$11$$ = 0 < $tableBody$$11$$.length ? $$$$14$$($tableBody$$11$$[0]) : 
    null;
    $table$$14$$.attr("tabindex", "0");
    this.$component$._focusable($table$$14$$);
    this.$component$._focusable($tableContainer$$9$$);
    this.$styleTableHeader$($tableHeader$$6$$);
    this.$styleTableFooter$($tableFooter$$5$$);
    this.$styleTableBody$($tableBody$$11$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableBody$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableBody$$($tableBody$$12$$) {
    $tableBody$$12$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_BODY_CLASS$);
    $tableBody$$12$$.attr($oj$$14$$.Components.$_OJ_CONTAINER_ATTR$, this.$component$.widgetName);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableBodyCell$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableBodyCell$$($columnIdx$$43$$, $tableBodyCell$$10$$) {
    var $options$$273$$ = this.options, $column$$20$$ = this.$component$.$_getColumnDefs$()[$columnIdx$$43$$];
    null != $column$$20$$.style && $tableBodyCell$$10$$.attr("style") != $column$$20$$.style && $tableBodyCell$$10$$.attr("style", $column$$20$$.style);
    $tableBodyCell$$10$$.hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$) || $tableBodyCell$$10$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$);
    $options$$273$$.verticalGridVisible == $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$ && ($tableBodyCell$$10$$.hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_VGRID_LINES_CLASS$) || $tableBodyCell$$10$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_VGRID_LINES_CLASS$));
    $column$$20$$.className && ($tableBodyCell$$10$$.hasClass($column$$20$$.className) || $tableBodyCell$$10$$.addClass($column$$20$$.className));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableBodyRow$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableBodyRow$$($tableBodyRow$$20$$) {
    $tableBodyRow$$20$$.hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$) || $tableBodyRow$$20$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$);
    this.options.horizontalGridVisible == $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$ && ($tableBodyRow$$20$$.hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HGRID_LINES_CLASS$) || $tableBodyRow$$20$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HGRID_LINES_CLASS$));
    this.$component$._hoverable($tableBodyRow$$20$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableContainer$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableContainer$$($tableContainer$$10$$) {
    var $rootAttributes$$1$$ = this.options.rootAttributes;
    $tableContainer$$10$$.attr("class", "");
    var $attr$$17$$, $value$$185$$;
    for ($attr$$17$$ in $rootAttributes$$1$$) {
      $rootAttributes$$1$$.hasOwnProperty($attr$$17$$) && ($value$$185$$ = $rootAttributes$$1$$[$attr$$17$$], $tableContainer$$10$$.attr($attr$$17$$, $value$$185$$));
    }
    $tableContainer$$10$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_CLASS$);
    $tableContainer$$10$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_CONTAINER_CLASS$);
    $tableContainer$$10$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_WIDGET$);
    $tableContainer$$10$$.css("display", "block");
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableFooter$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableFooter$$($tableFooter$$6$$) {
    $tableFooter$$6$$ && ($tableFooter$$6$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CLASS$), $$$$14$$($tableFooter$$6$$.children("tr")[0]).addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_ROW_CLASS$));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableFooterCell$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableFooterCell$$($columnIdx$$44$$, $tableFooterCell$$4$$) {
    var $options$$275$$ = this.options, $lastColumn$$ = $columnIdx$$44$$ == this.$component$.$_getColumnDefs$().length - 1 ? !0 : !1, $column$$21$$ = this.$component$.$_getColumnDefs$()[$columnIdx$$44$$];
    $tableFooterCell$$4$$.attr("style", $column$$21$$.footerStyle);
    $tableFooterCell$$4$$.hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$) || $tableFooterCell$$4$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$);
    $options$$275$$.verticalGridVisible != $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$ || $lastColumn$$ || $tableFooterCell$$4$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_VGRID_LINES_CLASS$);
    $column$$21$$.footerClassName && $tableFooterCell$$4$$.addClass($column$$21$$.footerClassName);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableHeader$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableHeader$$($tableHeader$$7_tableHeaderRow$$5$$) {
    $tableHeader$$7_tableHeaderRow$$5$$ && ($tableHeader$$7_tableHeaderRow$$5$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HEADER_CLASS$), $tableHeader$$7_tableHeaderRow$$5$$.css("display", "table-header-group"), $tableHeader$$7_tableHeaderRow$$5$$ = $$$$14$$($tableHeader$$7_tableHeaderRow$$5$$.children("tr")[0]), $tableHeader$$7_tableHeaderRow$$5$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HEADER_ROW_CLASS$), $tableHeader$$7_tableHeaderRow$$5$$.css("position", "relative"));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableHeaderColumn$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableHeaderColumn$$($columnIdx$$45$$, $tableHeaderColumn$$11$$) {
    this.$component$.$_getColumnDefs$();
    var $column$$22$$ = this.$component$.$_getColumnDefs$()[$columnIdx$$45$$];
    $tableHeaderColumn$$11$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CELL_CLASS$);
    $tableHeaderColumn$$11$$.attr("style", $column$$22$$.headerStyle);
    $tableHeaderColumn$$11$$.addClass($column$$22$$.headerClassName);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_getDelayedRenderCell$ = function $$oj$$14$$$$TableDomUtils$$$$_getDelayedRenderCell$$($rowIdx$$46$$, $columnIdx$$46$$) {
    return null != this.$_delayedRenderCells$ && null != this.$_delayedRenderCells$[$rowIdx$$46$$] ? this.$_delayedRenderCells$[$rowIdx$$46$$][$columnIdx$$46$$] : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_getDelayedRenderRow$ = function $$oj$$14$$$$TableDomUtils$$$$_getDelayedRenderRow$$($rowIdx$$47$$) {
    return null != this.$_delayedRenderRows$ ? this.$_delayedRenderRows$[$rowIdx$$47$$] : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_isIE$ = function $$oj$$14$$$$TableDomUtils$$$$_isIE$$() {
    var $resultArray_userAgent$$ = navigator.userAgent;
    if ("Microsoft Internet Explorer" == navigator.appName) {
      if ($resultArray_userAgent$$ = /MSIE ([0-9]{1,}[.0-9]{0,})/.exec($resultArray_userAgent$$), null != $resultArray_userAgent$$) {
        return parseFloat($resultArray_userAgent$$[1]);
      }
    } else {
      if (0 <= $resultArray_userAgent$$.indexOf("Trident")) {
        return 11;
      }
    }
    return null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_refreshTableDimensions$ = function $$oj$$14$$$$TableDomUtils$$$$_refreshTableDimensions$$($width$$22$$, $height$$18$$) {
    var $minHeight_options$$276$$ = this.options, $scrollbarWidth$$2_table$$15_tableBodyHeight$$ = this.$getTable$(), $tableDivScroller$$2_tableHeader$$8$$ = this.$getTableHeader$(), $tableFooter$$7_totalHeight$$ = this.$getTableFooter$(), $tableBodyWidth_tableHeaderRow$$6$$ = this.$getTableHeaderRow$(), $tableContainer$$11$$ = this.$getTableContainer$(), $tableBody$$13$$ = this.$getTableBody$(), $data$$128$$ = $minHeight_options$$276$$.data;
    if (!(0 < $width$$22$$ && 0 < $height$$18$$ && !1 === this.$_tableWidthConstrained$ && !1 === this.$_tableHeightConstrained$)) {
      this.$_removeTableDimensionsStyling$();
      if (null != this.$_tableContainerDimensions$) {
        0 < $width$$22$$ && this.$_tableWidthConstrained$ && (this.$_tableDimensions$.width = $width$$22$$), 0 < $height$$18$$ && this.$_tableHeightConstrained$ && (this.$_tableDimensions$.height = $height$$18$$);
      } else {
        this.$_tableDimensions$ = {};
        this.$_tableContainerDimensions$ = this.$getTableContainerDimensions$();
        this.$_tableElementDimensions$ = this.$getTableDimensions$();
        if (null == this.$_tableContainerDimensions$) {
          var $self$$96$$ = this;
          setTimeout(function() {
            $self$$96$$.$refreshTableDimensions$(!1, null, null);
          }, 100);
          return;
        }
        this.$_tableWidthConstrained$ = this.$_tableHeightConstrained$ = !0;
        0 == this.$_tableContainerDimensions$.height && 0 == this.$_tableElementDimensions$.height ? (this.$_tableHeightConstrained$ = !1, this.$_tableDimensions$.height = 0) : 0 != this.$_tableContainerDimensions$.height ? this.$_tableDimensions$.height = this.$_tableContainerDimensions$.height : (this.$_tableDimensions$.height = this.$_tableElementDimensions$.height, $tableContainer$$11$$.css("height", this.$_tableDimensions$.height + "px"));
        0 == this.$_tableContainerDimensions$.width && 0 == this.$_tableElementDimensions$.width ? (this.$_tableWidthConstrained$ = !1, this.$_tableDimensions$.width = 0) : 0 != this.$_tableContainerDimensions$.width ? this.$_tableDimensions$.width = this.$_tableContainerDimensions$.width : (this.$_tableDimensions$.width = this.$_tableElementDimensions$.width, $tableContainer$$11$$.css("width", this.$_tableDimensions$.width + "px"));
      }
      this.$_tableBorderWidth$ || (this.$_tableBorderWidth$ = $tableContainer$$11$$.outerWidth() - $tableContainer$$11$$.innerWidth());
      this.$_tableBorderHeight$ || (this.$_tableBorderHeight$ = $tableContainer$$11$$.outerHeight() - $tableContainer$$11$$.innerHeight());
      var $captionHeight_isTableHeightScrolled$$ = this.$isTableContainerScrollable$()[0], $isTableWidthScrolled$$ = this.$isTableContainerScrollable$()[1], $isTableMinHeightSet$$ = !1, $minWidth$$ = $minHeight_options$$276$$ = 0;
      this.$isDivScroller$() ? $scrollbarWidth$$2_table$$15_tableBodyHeight$$[0].currentStyle && ($minHeight_options$$276$$ = parseInt($scrollbarWidth$$2_table$$15_tableBodyHeight$$[0].currentStyle.minHeight, 10), $minWidth$$ = parseInt($scrollbarWidth$$2_table$$15_tableBodyHeight$$[0].currentStyle.minWidth, 10)) : ($minHeight_options$$276$$ = parseInt($scrollbarWidth$$2_table$$15_tableBodyHeight$$.css("minHeight"), 10), $minWidth$$ = parseInt($scrollbarWidth$$2_table$$15_tableBodyHeight$$.css("minWidth"), 
      10));
      if (null != $tableBody$$13$$) {
        if (0 < $minHeight_options$$276$$) {
          var $isTableMinHeightSet$$ = !0, $caption_tableHeaderHeight$$ = 0;
          null != $tableDivScroller$$2_tableHeader$$8$$ && ($caption_tableHeaderHeight$$ = $tableDivScroller$$2_tableHeader$$8$$.height());
          var $tableFooterHeight$$ = 0;
          null != $tableFooter$$7_totalHeight$$ && ($tableFooterHeight$$ = $tableFooter$$7_totalHeight$$.height());
          $tableBody$$13$$.css("min-height", $minHeight_options$$276$$ - $caption_tableHeaderHeight$$ - $tableFooterHeight$$ - this.$_tableBorderHeight$ + "px");
        }
        0 < $minWidth$$ && $tableBody$$13$$.css("min-width", $minWidth$$ - this.$_tableBorderWidth$ + "px");
        $captionHeight_isTableHeightScrolled$$ || $isTableWidthScrolled$$ || this.$_tableHeightConstrained$ || this.$_tableWidthConstrained$ || $isTableMinHeightSet$$ ? !1 === this.$_setColumnWidths$() ? ($self$$96$$ = this, setTimeout(function() {
          $self$$96$$.$refreshTableDimensions$(!1, null, null);
        }, 100)) : ($scrollbarWidth$$2_table$$15_tableBodyHeight$$.css("display", "block"), $captionHeight_isTableHeightScrolled$$ = 0, $caption_tableHeaderHeight$$ = $scrollbarWidth$$2_table$$15_tableBodyHeight$$.children("caption"), null != $caption_tableHeaderHeight$$ && 0 < $caption_tableHeaderHeight$$.length && ($captionHeight_isTableHeightScrolled$$ = $$$$14$$($caption_tableHeaderHeight$$[0]).height(), $caption_tableHeaderHeight$$.css("position", "absolute"), $caption_tableHeaderHeight$$.css("top", 
        "0px"), null != $tableDivScroller$$2_tableHeader$$8$$ && $tableDivScroller$$2_tableHeader$$8$$.css("border-top", $tableContainer$$11$$.css("border-top").toString())), $caption_tableHeaderHeight$$ = 0, null != $tableDivScroller$$2_tableHeader$$8$$ ? ($tableDivScroller$$2_tableHeader$$8$$.css("position", "absolute"), $tableDivScroller$$2_tableHeader$$8$$.css("top", $captionHeight_isTableHeightScrolled$$ + "px"), $tableBodyWidth_tableHeaderRow$$6$$.css("display", "block"), $caption_tableHeaderHeight$$ = 
        $tableDivScroller$$2_tableHeader$$8$$.height(), this.$isDivScroller$() ? $tableContainer$$11$$.css("padding-top", $caption_tableHeaderHeight$$ + $captionHeight_isTableHeightScrolled$$ + "px") : $tableBody$$13$$.css("top", $caption_tableHeaderHeight$$ + $captionHeight_isTableHeightScrolled$$ + "px")) : this.$isDivScroller$() && $tableContainer$$11$$.css("padding-top", $captionHeight_isTableHeightScrolled$$ + "px"), $tableFooterHeight$$ = 0, null != $tableFooter$$7_totalHeight$$ && ($tableFooter$$7_totalHeight$$.css("position", 
        "absolute"), $tableFooter$$7_totalHeight$$.css("display", "block"), $tableFooterHeight$$ = $tableFooter$$7_totalHeight$$.height()), $tableBody$$13$$.css("display", "block"), this.$isDivScroller$() || ($tableBody$$13$$.css("position", "absolute"), $tableBody$$13$$.css("overflow-y", "auto"), this.$_tableWidthConstrained$ && $tableBody$$13$$.css("width", this.$_tableDimensions$.width - this.$_tableBorderWidth$), $scrollbarWidth$$2_table$$15_tableBodyHeight$$ = this.$_tableDimensions$.height - 
        $caption_tableHeaderHeight$$ - $tableFooterHeight$$ - $captionHeight_isTableHeightScrolled$$ - this.$_tableBorderHeight$, 0 < $scrollbarWidth$$2_table$$15_tableBodyHeight$$ && ($tableBody$$13$$.css("height", $scrollbarWidth$$2_table$$15_tableBodyHeight$$ + "px"), $tableBody$$13$$.css("min-height", $scrollbarWidth$$2_table$$15_tableBodyHeight$$ + "px")), $scrollbarWidth$$2_table$$15_tableBodyHeight$$ = this.$getScrollbarWidth$(), 0 < $scrollbarWidth$$2_table$$15_tableBodyHeight$$ && ($isTableWidthScrolled$$ = 
        !0), $isTableWidthScrolled$$ ? (null != $data$$128$$ && 0 < $data$$128$$.size() ? ($tableBody$$13$$.css("overflow-x", "auto"), null != $tableDivScroller$$2_tableHeader$$8$$ && $tableDivScroller$$2_tableHeader$$8$$.css("width", this.$_tableDimensions$.width - this.$_tableBorderWidth$)) : $tableContainer$$11$$.css("overflow-x", "auto"), null != $tableBodyWidth_tableHeaderRow$$6$$ && $tableBodyWidth_tableHeaderRow$$6$$.css("position", "relative")) : $tableBody$$13$$.css("overflow-x", "hidden")), 
        $isTableWidthScrolled$$ || (null == $data$$128$$ || 0 == $data$$128$$.size()) && null != $tableDivScroller$$2_tableHeader$$8$$ && 0 < $tableDivScroller$$2_tableHeader$$8$$.width() && $tableBody$$13$$.css("width", $tableDivScroller$$2_tableHeader$$8$$.width() + "px"), $tableBodyWidth_tableHeaderRow$$6$$ = $tableBody$$13$$.width(), null != $tableDivScroller$$2_tableHeader$$8$$ && ($scrollbarWidth$$2_table$$15_tableBodyHeight$$ = this.$getScrollbarWidth$(), 0 < $scrollbarWidth$$2_table$$15_tableBodyHeight$$ ? 
        ($tableDivScroller$$2_tableHeader$$8$$.css("overflow", "hidden"), $tableDivScroller$$2_tableHeader$$8$$.css("width", $tableBodyWidth_tableHeaderRow$$6$$ - $scrollbarWidth$$2_table$$15_tableBodyHeight$$ - this.$_tableBorderWidth$ + "px")) : $tableDivScroller$$2_tableHeader$$8$$.css("width", $tableBodyWidth_tableHeaderRow$$6$$ + "px")), this.$isDivScroller$() && ($tableDivScroller$$2_tableHeader$$8$$ = this.$getTableDivScroller$(), $tableDivScroller$$2_tableHeader$$8$$.css("overflow", "auto"), 
        this.$_tableWidthConstrained$ && $tableDivScroller$$2_tableHeader$$8$$.css("width", this.$_tableDimensions$.width), this.$_tableHeightConstrained$ && $tableDivScroller$$2_tableHeader$$8$$.css("height", this.$_tableDimensions$.height - $caption_tableHeaderHeight$$ - $tableFooterHeight$$), $tableBody$$13$$.css("float", "left"), $tableContainer$$11$$.css("overflow", "hidden")), null != $tableFooter$$7_totalHeight$$ && ($tableFooter$$7_totalHeight$$.css("bottom", "0px"), $tableFooter$$7_totalHeight$$.css("width", 
        $tableBodyWidth_tableHeaderRow$$6$$ + "px")), this.$_tableWidthConstrained$ || (this.$isDivScroller$() ? $tableContainer$$11$$.css("width", $tableBody$$13$$.width() + this.$_tableBorderWidth$ + "px") : ($tableBody$$13$$.css("display", "inline-block"), $tableContainer$$11$$.css("width", $tableBody$$13$$.width() + this.$_tableBorderWidth$ + "px"), $tableBody$$13$$.css("display", "block"))), this.$_tableHeightConstrained$ || ($tableFooter$$7_totalHeight$$ = $caption_tableHeaderHeight$$ + $tableFooterHeight$$ + 
        $captionHeight_isTableHeightScrolled$$ + $tableBody$$13$$.height() + this.$_tableBorderHeight$, $tableFooter$$7_totalHeight$$ > $minHeight_options$$276$$ && $tableContainer$$11$$.css("height", $tableFooter$$7_totalHeight$$ + "px")), this.$_removeTableBodyRowBottomBorder$(), this.$_refreshTableMessagingPosition$()) : (null != $data$$128$$ && 0 < $data$$128$$.size() ? $tableBody$$13$$.css("display", "table-row-group") : $tableBody$$13$$.css("display", "block"), $tableContainer$$11$$.css("width", 
        $tableBody$$13$$.width() + this.$_tableBorderWidth$ + "px"), this.$_refreshTableMessagingPosition$(), this.$_removeTableBodyRowBottomBorder$());
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_refreshTableMessagingPosition$ = function $$oj$$14$$$$TableDomUtils$$$$_refreshTableMessagingPosition$$() {
    var $options$$277_tableContainer$$12$$ = this.$getTableContainer$(), $tableBody$$14$$ = this.$getTableBody$(), $tableStatusMessage$$ = this.$getTableStatusMessage$(), $tableNoDataMessage$$1$$ = this.$getTableNoDataMessage$(), $isRTL$$2$$ = "rtl" === this.$component$.$_GetReadingDirection$(), $options$$277_tableContainer$$12$$ = {my:"center", at:"center", collision:"none", of:$options$$277_tableContainer$$12$$}, $options$$277_tableContainer$$12$$ = $oj$$14$$.$PositionUtils$.$normalizeHorizontalAlignment$($options$$277_tableContainer$$12$$, 
    $isRTL$$2$$);
    $tableStatusMessage$$.position($options$$277_tableContainer$$12$$);
    $options$$277_tableContainer$$12$$ = {my:"start top", at:"start top", collision:"none", of:$tableBody$$14$$};
    $options$$277_tableContainer$$12$$ = $oj$$14$$.$PositionUtils$.$normalizeHorizontalAlignment$($options$$277_tableContainer$$12$$, $isRTL$$2$$);
    $tableNoDataMessage$$1$$.position($options$$277_tableContainer$$12$$);
    $tableNoDataMessage$$1$$.css("left", "0px;");
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_removeHeaderColumnAndCellColumnWidths$ = function $$oj$$14$$$$TableDomUtils$$$$_removeHeaderColumnAndCellColumnWidths$$() {
    var $data$$129_tableBodyCell$$11$$ = this.options.data, $columns$$16$$ = this.$component$.$_getColumnDefs$(), $i$$227_tableBodyRows$$4$$, $headerColumn$$8$$;
    for ($i$$227_tableBodyRows$$4$$ = 0;$i$$227_tableBodyRows$$4$$ < $columns$$16$$.length;$i$$227_tableBodyRows$$4$$++) {
      $headerColumn$$8$$ = this.$getTableHeaderColumn$($i$$227_tableBodyRows$$4$$), null != $headerColumn$$8$$ && $headerColumn$$8$$.css("min-width", "");
    }
    if (null != $data$$129_tableBodyCell$$11$$ && 0 < $data$$129_tableBodyCell$$11$$.size() && ($i$$227_tableBodyRows$$4$$ = this.$getTableBodyRows$(), null != $i$$227_tableBodyRows$$4$$ && 0 < $i$$227_tableBodyRows$$4$$.length)) {
      for ($i$$227_tableBodyRows$$4$$ = 0;$i$$227_tableBodyRows$$4$$ < $columns$$16$$.length;$i$$227_tableBodyRows$$4$$++) {
        $data$$129_tableBodyCell$$11$$ = this.$getTableBodyCell$(0, $i$$227_tableBodyRows$$4$$, null), null != $data$$129_tableBodyCell$$11$$ && $data$$129_tableBodyCell$$11$$.css("min-width", "");
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_removeTableBodyRowBottomBorder$ = function $$oj$$14$$$$TableDomUtils$$$$_removeTableBodyRowBottomBorder$$() {
    if (this.options.horizontalGridVisible == $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$) {
      var $table$$16_tableRect$$ = this.$getTable$(), $borderBottomWidth_tableContainer$$13$$ = this.$getTableContainer$(), $lastTableBodyRow_tableBodyRows$$5$$ = this.$getTableBodyRows$();
      if (null != $lastTableBodyRow_tableBodyRows$$5$$ && 0 < $lastTableBodyRow_tableBodyRows$$5$$.length) {
        var $i$$228_lastTableBodyRowRect$$;
        for ($i$$228_lastTableBodyRowRect$$ = 0;$i$$228_lastTableBodyRowRect$$ < $lastTableBodyRow_tableBodyRows$$5$$.length;$i$$228_lastTableBodyRowRect$$++) {
          $$$$14$$($lastTableBodyRow_tableBodyRows$$5$$[$i$$228_lastTableBodyRowRect$$]).hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HGRID_LINES_CLASS$) || $$$$14$$($lastTableBodyRow_tableBodyRows$$5$$[$i$$228_lastTableBodyRowRect$$]).addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HGRID_LINES_CLASS$);
        }
        $lastTableBodyRow_tableBodyRows$$5$$ = $$$$14$$($lastTableBodyRow_tableBodyRows$$5$$[$lastTableBodyRow_tableBodyRows$$5$$.length - 1]);
        $i$$228_lastTableBodyRowRect$$ = $lastTableBodyRow_tableBodyRows$$5$$[0].getBoundingClientRect();
        $table$$16_tableRect$$ = $table$$16_tableRect$$[0].getBoundingClientRect();
        $borderBottomWidth_tableContainer$$13$$ = parseInt($lastTableBodyRow_tableBodyRows$$5$$.css("borderBottomWidth"), 10) + parseInt($borderBottomWidth_tableContainer$$13$$.css("borderBottomWidth"), 10);
        1 >= Math.abs($i$$228_lastTableBodyRowRect$$.bottom + $borderBottomWidth_tableContainer$$13$$ - $table$$16_tableRect$$.bottom) && $lastTableBodyRow_tableBodyRows$$5$$.removeClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HGRID_LINES_CLASS$);
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_removeTableDimensionsStyling$ = function $$oj$$14$$$$TableDomUtils$$$$_removeTableDimensionsStyling$$() {
    var $table$$17$$ = this.$getTable$(), $tableHeader$$9$$ = this.$getTableHeader$(), $tableHeaderRow$$7$$ = this.$getTableHeaderRow$(), $tableBody$$15$$ = this.$getTableBody$();
    null != $tableHeader$$9$$ && ($tableHeader$$9$$.attr("style", ""), $tableHeaderRow$$7$$.attr("style", ""));
    $table$$17$$.css("display", "");
    null != $tableBody$$15$$ && $tableBody$$15$$.attr("style", "");
    this.$_removeHeaderColumnAndCellColumnWidths$();
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_setColumnWidths$ = function $$oj$$14$$$$TableDomUtils$$$$_setColumnWidths$$() {
    var $data$$130_tableBodyCell$$12$$ = this.options.data, $columns$$17$$ = this.$component$.$_getColumnDefs$(), $notZeroWidth$$ = null, $columnWidths$$ = [], $columnPaddingWidths$$ = [], $i$$229_tableBodyRows$$6$$, $headerColumnCell$$1_headerColumnDiv$$1$$, $adjustedColumnWidth_footerCell$$1_headerColumnTextDivHeight_tableBodyCellPaddingWidth$$, $headerColumnTextDiv$$1$$;
    for ($i$$229_tableBodyRows$$6$$ = 0;$i$$229_tableBodyRows$$6$$ < $columns$$17$$.length;$i$$229_tableBodyRows$$6$$++) {
      $notZeroWidth$$ = !1, $headerColumnCell$$1_headerColumnDiv$$1$$ = this.$getTableHeaderColumn$($i$$229_tableBodyRows$$6$$), null != $headerColumnCell$$1_headerColumnDiv$$1$$ && (0 < $headerColumnCell$$1_headerColumnDiv$$1$$.width() && ($notZeroWidth$$ = !0), $columnWidths$$[$i$$229_tableBodyRows$$6$$] = $headerColumnCell$$1_headerColumnDiv$$1$$.width(), $columnPaddingWidths$$[$i$$229_tableBodyRows$$6$$] = parseInt($headerColumnCell$$1_headerColumnDiv$$1$$.css("padding-right"), 10) + parseInt($headerColumnCell$$1_headerColumnDiv$$1$$.css("padding-left"), 
      10), $adjustedColumnWidth_footerCell$$1_headerColumnTextDivHeight_tableBodyCellPaddingWidth$$ = null, ($headerColumnTextDiv$$1$$ = $headerColumnCell$$1_headerColumnDiv$$1$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_TEXT_CLASS$)) && 0 < $headerColumnTextDiv$$1$$.length && ($adjustedColumnWidth_footerCell$$1_headerColumnTextDivHeight_tableBodyCellPaddingWidth$$ = $headerColumnTextDiv$$1$$.get(0).clientHeight), null != $adjustedColumnWidth_footerCell$$1_headerColumnTextDivHeight_tableBodyCellPaddingWidth$$ && 
      ($headerColumnCell$$1_headerColumnDiv$$1$$ = $headerColumnCell$$1_headerColumnDiv$$1$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CLASS$), $headerColumnCell$$1_headerColumnDiv$$1$$.css("min-height", $adjustedColumnWidth_footerCell$$1_headerColumnTextDivHeight_tableBodyCellPaddingWidth$$ + "px")));
    }
    for ($i$$229_tableBodyRows$$6$$ = 0;$i$$229_tableBodyRows$$6$$ < $columns$$17$$.length;$i$$229_tableBodyRows$$6$$++) {
      $headerColumnCell$$1_headerColumnDiv$$1$$ = this.$getTableHeaderColumn$($i$$229_tableBodyRows$$6$$), null != $headerColumnCell$$1_headerColumnDiv$$1$$ && $headerColumnCell$$1_headerColumnDiv$$1$$.css("min-width", $columnWidths$$[$i$$229_tableBodyRows$$6$$] + "px"), $adjustedColumnWidth_footerCell$$1_headerColumnTextDivHeight_tableBodyCellPaddingWidth$$ = this.$getTableFooterCell$($i$$229_tableBodyRows$$6$$), null != $adjustedColumnWidth_footerCell$$1_headerColumnTextDivHeight_tableBodyCellPaddingWidth$$ && 
      $adjustedColumnWidth_footerCell$$1_headerColumnTextDivHeight_tableBodyCellPaddingWidth$$.css("min-width", $columnWidths$$[$i$$229_tableBodyRows$$6$$] + "px");
    }
    if (null != $data$$130_tableBodyCell$$12$$ && 0 < $data$$130_tableBodyCell$$12$$.size() && ($i$$229_tableBodyRows$$6$$ = this.$getTableBodyRows$(), null != $i$$229_tableBodyRows$$6$$ && 0 < $i$$229_tableBodyRows$$6$$.length)) {
      for ($i$$229_tableBodyRows$$6$$ = 0;$i$$229_tableBodyRows$$6$$ < $columns$$17$$.length;$i$$229_tableBodyRows$$6$$++) {
        $data$$130_tableBodyCell$$12$$ = this.$getTableBodyCell$(0, $i$$229_tableBodyRows$$6$$, null), null != $data$$130_tableBodyCell$$12$$ && (0 < $data$$130_tableBodyCell$$12$$.width() && ($notZeroWidth$$ = !0), $adjustedColumnWidth_footerCell$$1_headerColumnTextDivHeight_tableBodyCellPaddingWidth$$ = parseInt($data$$130_tableBodyCell$$12$$.css("padding-right"), 10) + parseInt($data$$130_tableBodyCell$$12$$.css("padding-left"), 10), $adjustedColumnWidth_footerCell$$1_headerColumnTextDivHeight_tableBodyCellPaddingWidth$$ = 
        $adjustedColumnWidth_footerCell$$1_headerColumnTextDivHeight_tableBodyCellPaddingWidth$$ > $columnPaddingWidths$$[$i$$229_tableBodyRows$$6$$] ? $columnWidths$$[$i$$229_tableBodyRows$$6$$] - $adjustedColumnWidth_footerCell$$1_headerColumnTextDivHeight_tableBodyCellPaddingWidth$$ + $columnPaddingWidths$$[$i$$229_tableBodyRows$$6$$] : $columnWidths$$[$i$$229_tableBodyRows$$6$$] + $columnPaddingWidths$$[$i$$229_tableBodyRows$$6$$] - $adjustedColumnWidth_footerCell$$1_headerColumnTextDivHeight_tableBodyCellPaddingWidth$$, 
        $data$$130_tableBodyCell$$12$$.css("min-width", $adjustedColumnWidth_footerCell$$1_headerColumnTextDivHeight_tableBodyCellPaddingWidth$$ + "px"));
      }
    }
    return $notZeroWidth$$;
  };
  $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$ = {$_CHECKBOX_ACC_SELECT_COLUMN_CLASS$:"oj-table-checkbox-acc-select-column", $_CHECKBOX_ACC_SELECT_ROW_CLASS$:"oj-table-checkbox-acc-select-row", $_TABLE_CONTAINER_CLASS$:"oj-table-container", $_TABLE_SCROLLER_CLASS$:"oj-table-scroller", $_TABLE_CLASS$:"oj-table", $_TABLE_ELEMENT_CLASS$:"oj-table-element", $_TABLE_FOOTER_CLASS$:"oj-table-footer", $_TABLE_FOOTER_ROW_CLASS$:"oj-table-footer-row", $_TABLE_HEADER_CLASS$:"oj-table-header", $_TABLE_HEADER_ROW_CLASS$:"oj-table-header-row", 
  $_COLUMN_HEADER_CELL_CLASS$:"oj-table-column-header-cell", $_COLUMN_HEADER_ACC_SELECT_COLUMN_CLASS$:"oj-table-column-header-acc-select-column", $_COLUMN_HEADER_ACC_SELECT_ROW_CLASS$:"oj-table-column-header-acc-select-row", $_COLUMN_HEADER_CLASS$:"oj-table-column-header", $_COLUMN_HEADER_TEXT_CLASS$:"oj-table-column-header-text", $_COLUMN_HEADER_ASC_CLASS$:"oj-table-column-header-asc", $_COLUMN_HEADER_DSC_CLASS$:"oj-table-column-header-dsc", $_COLUMN_HEADER_SORT_PACEHOLDER_CLASS$:"oj-table-column-header-sort-placeholder", 
  $_COLUMN_HEADER_ACC_ASC_LINK_CLASS$:"oj-table-column-header-acc-asc-link", $_COLUMN_HEADER_ACC_DSC_LINK_CLASS$:"oj-table-column-header-acc-dsc-link", $_COLUMN_HEADER_ASC_LINK_CLASS$:"oj-table-column-header-asc-link", $_COLUMN_HEADER_DSC_LINK_CLASS$:"oj-table-column-header-dsc-link", $_COLUMN_HEADER_ASC_ICON_CLASS$:"oj-table-column-header-asc-icon", $_COLUMN_HEADER_DSC_ICON_CLASS$:"oj-table-column-header-dsc-icon", $_TABLE_BODY_CLASS$:"oj-table-body", $_TABLE_DATA_ROW_CLASS$:"oj-table-body-row", 
  $_TABLE_DATA_CELL_CLASS$:"oj-table-data-cell", $_TABLE_DATA_CELL_ACC_SELECT_CLASS$:"oj-table-data-cell-acc-select", $_TABLE_VGRID_LINES_CLASS$:"oj-table-vgrid-lines", $_TABLE_HGRID_LINES_CLASS$:"oj-table-hgrid-lines", $_TABLE_FOOTER_CELL_CLASS$:"oj-table-footer-cell", $_TABLE_FOOTER_CELL_VGRID_LINES_CLASS$:"oj-table-footer-cell-vgrid-lines", $_TABLE_STATUS_MESSAGE_CLASS$:"oj-table-status-message", $_TABLE_NO_DATA_MESSAGE_CLASS$:"oj-table-no-data-message", $_WIDGET_ICON_CLASS$:"oj-component-icon", 
  $_HIDDEN_CONTENT_ACC_CLASS$:"oj-helper-hidden-accessible"};
  $oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$ = {$_WIDGET$:"oj-component", $_ACTIVE$:"oj-active", $_CLICKABLE_ICON$:"oj-clickable-icon", $_DISABLED$:"oj-disabled", $_ENABLED$:"oj-enabled", $_FOCUS$:"oj-focus", $_HOVER$:"oj-hover", $_SELECTED$:"oj-selected"};
  $oj$$14$$.$TableDomUtils$.$_COLUMN_HEADER_ROW_SELECT_ID$ = "_hdrColRowSel";
  $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$ = "enabled";
  $oj$$14$$.$TableDomUtils$.$_OPTION_DISABLED$ = "disabled";
  $oj$$14$$.$TableDomUtils$.$_OPTION_SELECTION_MODES$ = {$_SINGLE$:"single", $_MULTIPLE$:"multiple"};
});
