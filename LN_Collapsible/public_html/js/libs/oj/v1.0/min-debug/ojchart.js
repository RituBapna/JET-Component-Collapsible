/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtChart"], function($oj$$29$$, $$$$29$$) {
  $oj$$29$$.$ChartAxis$ = function $$oj$$29$$$$ChartAxis$$($data$$159$$) {
    this.$_data$ = $data$$159$$;
  };
  $goog$exportPath_$$("ChartAxis", $oj$$29$$.$ChartAxis$, $oj$$29$$);
  $oj$$29$$.$ChartAxis$.prototype.getTitle = function $$oj$$29$$$$ChartAxis$$$getTitle$() {
    return this.$_data$ ? this.$_data$.title : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("ChartAxis.prototype.getTitle", {getTitle:$oj$$29$$.$ChartAxis$.prototype.getTitle});
  $oj$$29$$.$ChartAxis$.prototype.$getBounds$ = function $$oj$$29$$$$ChartAxis$$$$getBounds$$() {
    return this.$_data$ ? this.$_data$.bounds : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("ChartAxis.prototype.getBounds", {$getBounds$:$oj$$29$$.$ChartAxis$.prototype.$getBounds$});
  $oj$$29$$.$SparkChartDataItem$ = function $$oj$$29$$$$SparkChartDataItem$$($data$$160$$) {
    this.$_data$ = $data$$160$$;
  };
  $goog$exportPath_$$("SparkChartDataItem", $oj$$29$$.$SparkChartDataItem$, $oj$$29$$);
  $oj$$29$$.$SparkChartDataItem$.prototype.$getBorderColor$ = function $$oj$$29$$$$SparkChartDataItem$$$$getBorderColor$$() {
    return this.$_data$ ? this.$_data$.borderColor : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("SparkChartDataItem.prototype.getBorderColor", {$getBorderColor$:$oj$$29$$.$SparkChartDataItem$.prototype.$getBorderColor$});
  $oj$$29$$.$SparkChartDataItem$.prototype.$getColor$ = function $$oj$$29$$$$SparkChartDataItem$$$$getColor$$() {
    return this.$_data$ ? this.$_data$.color : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("SparkChartDataItem.prototype.getColor", {$getColor$:$oj$$29$$.$SparkChartDataItem$.prototype.$getColor$});
  $oj$$29$$.$SparkChartDataItem$.prototype.getDate = function $$oj$$29$$$$SparkChartDataItem$$$getDate$() {
    return this.$_data$ ? this.$_data$.date : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("SparkChartDataItem.prototype.getDate", {getDate:$oj$$29$$.$SparkChartDataItem$.prototype.getDate});
  $oj$$29$$.$SparkChartDataItem$.prototype.getFloatValue = function $$oj$$29$$$$SparkChartDataItem$$$getFloatValue$() {
    return this.$_data$ ? this.$_data$.floatValue : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("SparkChartDataItem.prototype.getFloatValue", {getFloatValue:$oj$$29$$.$SparkChartDataItem$.prototype.getFloatValue});
  $oj$$29$$.$SparkChartDataItem$.prototype.$getValue$ = function $$oj$$29$$$$SparkChartDataItem$$$$getValue$$() {
    return this.$_data$ ? this.$_data$.value : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("SparkChartDataItem.prototype.getValue", {$getValue$:$oj$$29$$.$SparkChartDataItem$.prototype.$getValue$});
  $oj$$29$$.$__registerWidget$("oj.ojChart", $$$$29$$.oj.dvtBaseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{categoryFilter:null, categoryHighlight:null, optionChange:null, selectInput:null, viewportChange:null, viewportChangeInput:null}, $_CreateDvtComponent$:function($context$$55$$, $callback$$103$$, $callbackObj$$8$$) {
    return DvtChart.newInstance($context$$55$$, $callback$$103$$, $callbackObj$$8$$);
  }, $_ProcessStyles$:function() {
    this._super();
    this.options.styleDefaults || (this.options.styleDefaults = {});
    if (!this.options.styleDefaults.colors) {
      var $handler$$48$$ = new $oj$$29$$.$ColorAttributeGroupHandler$;
      this.options.styleDefaults.colors = $handler$$48$$.$getValueRamp$();
    }
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$12$$ = this._super();
    $styleClasses$$12$$.push("oj-chart");
    return $styleClasses$$12$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$13$$ = this._super();
    $styleClasses$$13$$["oj-chart-footnote"] = {path:"footnote/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-chart-slice-label"] = {path:"styleDefaults/sliceLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-chart-subtitle"] = {path:"subtitle/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-chart-title"] = {path:"title/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-chart-xaxis-tick-label"] = {path:"xAxis/tickLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-chart-xaxis-title"] = {path:"xAxis/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-chart-yaxis-tick-label"] = {path:"yAxis/tickLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-chart-yaxis-title"] = {path:"yAxis/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-chart-y2axis-tick-label"] = {path:"y2Axis/tickLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-chart-y2axis-title"] = {path:"y2Axis/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-legend"] = {path:"legend/textStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-legend-title"] = {path:"legend/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-chart-pan-icon"] = {path:"_resources/panUp", property:"CSS_URL"};
    $styleClasses$$13$$["oj-chart-pan-icon oj-active"] = {path:"_resources/panDown", property:"CSS_URL"};
    $styleClasses$$13$$["oj-chart-select-icon"] = {path:"_resources/selectUp", property:"CSS_URL"};
    $styleClasses$$13$$["oj-chart-select-icon oj-active"] = {path:"_resources/selectDown", property:"CSS_URL"};
    $styleClasses$$13$$["oj-chart-zoom-icon"] = {path:"_resources/zoomUp", property:"CSS_URL"};
    $styleClasses$$13$$["oj-chart-zoom-icon oj-active"] = {path:"_resources/zoomDown", property:"CSS_URL"};
    return $styleClasses$$13$$;
  }, $_GetEventTypes$:function() {
    return "categoryFilter categoryHighlight optionChange selectInput viewportChange viewportChangeInput".split(" ");
  }, $_GetTranslationMap$:function() {
    var $ret$$43$$ = this._super();
    $ret$$43$$["DvtChartBundle.DEFAULT_GROUP_NAME"] = this.$_GetTranslatedResource$("labelDefaultGroupName", ["groupName"]);
    $ret$$43$$["DvtChartBundle.EMPTY_TEXT"] = this.$_GetTranslatedResource$("msgNoData");
    $ret$$43$$["DvtChartBundle.INVALID_DATA"] = this.$_GetTranslatedResource$("msgInvalidData");
    $ret$$43$$["DvtChartBundle.LABEL_SERIES"] = this.$_GetTranslatedResource$("labelSeries", ["seriesName"]);
    $ret$$43$$["DvtChartBundle.LABEL_GROUP"] = this.$_GetTranslatedResource$("labelGroup", ["groupName"]);
    $ret$$43$$["DvtChartBundle.LABEL_VALUE"] = this.$_GetTranslatedResource$("labelValue", ["value"]);
    $ret$$43$$["DvtChartBundle.LABEL_TARGET_VALUE"] = this.$_GetTranslatedResource$("labelTargetValue", ["targetValue"]);
    $ret$$43$$["DvtChartBundle.LABEL_X"] = this.$_GetTranslatedResource$("labelX", ["x"]);
    $ret$$43$$["DvtChartBundle.LABEL_Y"] = this.$_GetTranslatedResource$("labelY", ["y"]);
    $ret$$43$$["DvtChartBundle.LABEL_Z"] = this.$_GetTranslatedResource$("labelZ", ["z"]);
    $ret$$43$$["DvtChartBundle.LABEL_LOW"] = this.$_GetTranslatedResource$("labelLow", ["low"]);
    $ret$$43$$["DvtChartBundle.LABEL_HIGH"] = this.$_GetTranslatedResource$("labelHigh", ["high"]);
    $ret$$43$$["DvtChartBundle.LABEL_OTHER"] = this.$_GetTranslatedResource$("labelOther");
    $ret$$43$$["DvtChartBundle.PAN"] = this.$_GetTranslatedResource$("tooltipPan");
    $ret$$43$$["DvtChartBundle.MARQUEE_SELECT"] = this.$_GetTranslatedResource$("tooltipSelect");
    $ret$$43$$["DvtChartBundle.MARQUEE_ZOOM"] = this.$_GetTranslatedResource$("tooltipZoom");
    return $ret$$43$$;
  }, $_HandleEvent$:function($event$$348_selectPayload_viewportChangePayload$$) {
    var $highlightType_type$$87$$ = $event$$348_selectPayload_viewportChangePayload$$ && $event$$348_selectPayload_viewportChangePayload$$.getType ? $event$$348_selectPayload_viewportChangePayload$$.getType() : null;
    if ($highlightType_type$$87$$ === DvtSelectionEvent.TYPE || $highlightType_type$$87$$ === DvtSelectionEvent.TYPE_INPUT) {
      var $selection$$8_series$$ = $event$$348_selectPayload_viewportChangePayload$$.getSelection();
      if ($selection$$8_series$$) {
        for (var $filterType_selectedItems$$ = [], $i$$293$$ = 0;$i$$293$$ < $selection$$8_series$$.length;$i$$293$$++) {
          var $selectedItem$$ = {id:$selection$$8_series$$[$i$$293$$].getId(), series:$selection$$8_series$$[$i$$293$$].getSeries(), group:$selection$$8_series$$[$i$$293$$].getGroup()};
          $filterType_selectedItems$$.push($selectedItem$$);
        }
        $event$$348_selectPayload_viewportChangePayload$$ = {endGroup:$event$$348_selectPayload_viewportChangePayload$$.getEndGroup(), startGroup:$event$$348_selectPayload_viewportChangePayload$$.getStartGroup(), xMax:$event$$348_selectPayload_viewportChangePayload$$.getXMax(), xMin:$event$$348_selectPayload_viewportChangePayload$$.getXMin(), yMax:$event$$348_selectPayload_viewportChangePayload$$.getYMax(), yMin:$event$$348_selectPayload_viewportChangePayload$$.getYMin()};
        $highlightType_type$$87$$ === DvtSelectionEvent.TYPE ? this.$_UserOptionChange$("selection", $filterType_selectedItems$$, $event$$348_selectPayload_viewportChangePayload$$) : ($event$$348_selectPayload_viewportChangePayload$$.items = $filterType_selectedItems$$, this._trigger("selectInput", null, $event$$348_selectPayload_viewportChangePayload$$));
      }
    } else {
      if ($highlightType_type$$87$$ === DvtCategoryHideShowEvent.TYPE_HIDE || $highlightType_type$$87$$ === DvtCategoryHideShowEvent.TYPE_SHOW) {
        $filterType_selectedItems$$ = $highlightType_type$$87$$ === DvtCategoryHideShowEvent.TYPE_HIDE ? "out" : "in";
        $selection$$8_series$$ = this.options.series;
        for ($i$$293$$ = 0;$i$$293$$ < $selection$$8_series$$.length;$i$$293$$++) {
          $selection$$8_series$$[$i$$293$$].name == $event$$348_selectPayload_viewportChangePayload$$.getCategory() && ($selection$$8_series$$[$i$$293$$].visibility = $highlightType_type$$87$$ === DvtCategoryHideShowEvent.TYPE_HIDE ? "hidden" : "visible");
        }
        this._trigger("categoryFilter", null, {category:$event$$348_selectPayload_viewportChangePayload$$.getCategory(), type:$filterType_selectedItems$$});
      } else {
        $highlightType_type$$87$$ === DvtCategoryRolloverEvent.TYPE_OVER || $highlightType_type$$87$$ === DvtCategoryRolloverEvent.TYPE_OUT ? ($highlightType_type$$87$$ = $highlightType_type$$87$$ === DvtCategoryRolloverEvent.TYPE_OVER ? "on" : "off", this._trigger("categoryHighlight", null, {categories:[$event$$348_selectPayload_viewportChangePayload$$.getCategory()], type:$highlightType_type$$87$$})) : $highlightType_type$$87$$ === DvtChartViewportChangeEvent.TYPE || $highlightType_type$$87$$ === 
        DvtChartViewportChangeEvent.TYPE_INPUT ? ($event$$348_selectPayload_viewportChangePayload$$ = {endGroup:$event$$348_selectPayload_viewportChangePayload$$.getEndGroup(), startGroup:$event$$348_selectPayload_viewportChangePayload$$.getStartGroup(), xMax:$event$$348_selectPayload_viewportChangePayload$$.getXMax(), xMin:$event$$348_selectPayload_viewportChangePayload$$.getXMin(), yMax:$event$$348_selectPayload_viewportChangePayload$$.getYMax(), yMin:$event$$348_selectPayload_viewportChangePayload$$.getYMin()}, 
        this._trigger($highlightType_type$$87$$ === DvtChartViewportChangeEvent.TYPE ? "viewportChange" : "viewportChangeInput", null, $event$$348_selectPayload_viewportChangePayload$$)) : this._super($event$$348_selectPayload_viewportChangePayload$$);
      }
    }
  }, $_LoadResources$:function() {
    null == this.options._resources && (this.options._resources = {});
    var $resources$$1$$ = this.options._resources;
    $resources$$1$$.overviewGrippy = $oj$$29$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/chart/drag_horizontal.png");
    $resources$$1$$.panCursorDown = $oj$$29$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/chart/hand-closed.cur");
    $resources$$1$$.panCursorUp = $oj$$29$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/chart/hand-open.cur");
  }, $_SupportsOptionChangeEvent$:function($key$$108$$) {
    return "selection" == $key$$108$$;
  }, getNodeBySubId:function($locator$$23$$) {
    return this._super($locator$$23$$);
  }, getSubIdByNode:function($node$$80$$) {
    return this._super($node$$80$$);
  }, getTitle:function() {
    return this.$_component$.getAutomation().getTitle();
  }, getGroup:function($groupIndex$$) {
    return this.$_component$.getAutomation().getGroup($groupIndex$$);
  }, getSeries:function($seriesIndex$$) {
    return this.$_component$.getAutomation().getSeries($seriesIndex$$);
  }, getGroupCount:function() {
    return this.$_component$.getAutomation().getGroupCount();
  }, getSeriesCount:function() {
    return this.$_component$.getAutomation().getSeriesCount();
  }, getDataItem:function($seriesIndex$$1$$, $groupIndex$$1$$) {
    var $auto$$12$$ = this.$_component$.getAutomation();
    return new $oj$$29$$.$ChartDataItem$($auto$$12$$.getDataItem($seriesIndex$$1$$, $groupIndex$$1$$));
  }, getLegend:function() {
    var $auto$$13$$ = this.$_component$.getAutomation();
    return new $oj$$29$$.$ChartLegend$($auto$$13$$.getLegend());
  }, getPlotArea:function() {
    var $auto$$14$$ = this.$_component$.getAutomation();
    return new $oj$$29$$.$ChartPlotArea$($auto$$14$$.getPlotArea());
  }, getXAxis:function() {
    var $auto$$15$$ = this.$_component$.getAutomation();
    return new $oj$$29$$.$ChartAxis$($auto$$15$$.getXAxis());
  }, getYAxis:function() {
    var $auto$$16$$ = this.$_component$.getAutomation();
    return new $oj$$29$$.$ChartAxis$($auto$$16$$.getYAxis());
  }, getY2Axis:function() {
    var $auto$$17$$ = this.$_component$.getAutomation();
    return new $oj$$29$$.$ChartAxis$($auto$$17$$.getY2Axis());
  }});
  $oj$$29$$.$ChartPlotArea$ = function $$oj$$29$$$$ChartPlotArea$$($data$$161$$) {
    this.$_data$ = $data$$161$$;
  };
  $goog$exportPath_$$("ChartPlotArea", $oj$$29$$.$ChartPlotArea$, $oj$$29$$);
  $oj$$29$$.$ChartPlotArea$.prototype.$getBounds$ = function $$oj$$29$$$$ChartPlotArea$$$$getBounds$$() {
    return this.$_data$ ? this.$_data$.bounds : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("ChartPlotArea.prototype.getBounds", {$getBounds$:$oj$$29$$.$ChartPlotArea$.prototype.$getBounds$});
  $oj$$29$$.$ChartLegend$ = function $$oj$$29$$$$ChartLegend$$($data$$162$$) {
    this.$_data$ = $data$$162$$;
  };
  $goog$exportPath_$$("ChartLegend", $oj$$29$$.$ChartLegend$, $oj$$29$$);
  $oj$$29$$.$ChartLegend$.prototype.getTitle = function $$oj$$29$$$$ChartLegend$$$getTitle$() {
    return this.$_data$ ? this.$_data$.title : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("ChartLegend.prototype.getTitle", {getTitle:$oj$$29$$.$ChartLegend$.prototype.getTitle});
  $oj$$29$$.$ChartLegend$.prototype.$getBounds$ = function $$oj$$29$$$$ChartLegend$$$$getBounds$$() {
    return this.$_data$ ? this.$_data$.bounds : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("ChartLegend.prototype.getBounds", {$getBounds$:$oj$$29$$.$ChartLegend$.prototype.$getBounds$});
  $oj$$29$$.$__registerWidget$("oj.ojSparkChart", $$$$29$$.oj.dvtBaseComponent, {version:"1.0.0", widgetEventPrefix:"oj", $_CreateDvtComponent$:function($context$$56$$, $callback$$104$$, $callbackObj$$9$$) {
    return DvtSparkChart.newInstance($context$$56$$, $callback$$104$$, $callbackObj$$9$$);
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$14$$ = this._super();
    $styleClasses$$14$$.push("oj-sparkchart");
    return $styleClasses$$14$$;
  }, $_Render$:function() {
    this.element.attr("title") ? (this.options.shortDesc = this.element.attr("title"), this.element.data(this.element, "title", this.element.attr("title")), this.element.removeAttr("title")) : this.element.data("title") && (this.options.shortDesc = this.element.data("title"));
    this._super();
  }, getNodeBySubId:function($locator$$24$$) {
    return this._super($locator$$24$$);
  }, getSubIdByNode:function($node$$81$$) {
    return this._super($node$$81$$);
  }, getDataItem:function($itemIndex$$) {
    var $auto$$18$$ = this.$_component$.getAutomation();
    return new $oj$$29$$.$SparkChartDataItem$($auto$$18$$.getDataItem($itemIndex$$));
  }});
  $oj$$29$$.$ChartDataItem$ = function $$oj$$29$$$$ChartDataItem$$($data$$163$$) {
    this.$_data$ = $data$$163$$;
  };
  $goog$exportPath_$$("ChartDataItem", $oj$$29$$.$ChartDataItem$, $oj$$29$$);
  $oj$$29$$.$ChartDataItem$.prototype.getGroup = function $$oj$$29$$$$ChartDataItem$$$getGroup$() {
    return this.$_data$ ? this.$_data$.group : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.getGroup", {getGroup:$oj$$29$$.$ChartDataItem$.prototype.getGroup});
  $oj$$29$$.$ChartDataItem$.prototype.getSeries = function $$oj$$29$$$$ChartDataItem$$$getSeries$() {
    return this.$_data$ ? this.$_data$.series : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.getSeries", {getSeries:$oj$$29$$.$ChartDataItem$.prototype.getSeries});
  $oj$$29$$.$ChartDataItem$.prototype.$getBorderColor$ = function $$oj$$29$$$$ChartDataItem$$$$getBorderColor$$() {
    return this.$_data$ ? this.$_data$.borderColor : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.getBorderColor", {$getBorderColor$:$oj$$29$$.$ChartDataItem$.prototype.$getBorderColor$});
  $oj$$29$$.$ChartDataItem$.prototype.$getColor$ = function $$oj$$29$$$$ChartDataItem$$$$getColor$$() {
    return this.$_data$ ? this.$_data$.color : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.getColor", {$getColor$:$oj$$29$$.$ChartDataItem$.prototype.$getColor$});
  $oj$$29$$.$ChartDataItem$.prototype.$getLabel$ = function $$oj$$29$$$$ChartDataItem$$$$getLabel$$() {
    return this.$_data$ ? this.$_data$.label : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.getLabel", {$getLabel$:$oj$$29$$.$ChartDataItem$.prototype.$getLabel$});
  $oj$$29$$.$ChartDataItem$.prototype.$getValue$ = function $$oj$$29$$$$ChartDataItem$$$$getValue$$() {
    return this.$_data$ ? this.$_data$.value : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.getValue", {$getValue$:$oj$$29$$.$ChartDataItem$.prototype.$getValue$});
  $oj$$29$$.$ChartDataItem$.prototype.$getTargetValue$ = function $$oj$$29$$$$ChartDataItem$$$$getTargetValue$$() {
    return this.$_data$ ? this.$_data$.targetValue : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.getTargetValue", {$getTargetValue$:$oj$$29$$.$ChartDataItem$.prototype.$getTargetValue$});
  $oj$$29$$.$ChartDataItem$.prototype.$getTooltip$ = function $$oj$$29$$$$ChartDataItem$$$$getTooltip$$() {
    return this.$_data$ ? this.$_data$.tooltip : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.getTooltip", {$getTooltip$:$oj$$29$$.$ChartDataItem$.prototype.$getTooltip$});
  $oj$$29$$.$ChartDataItem$.prototype.$getX$ = function $$oj$$29$$$$ChartDataItem$$$$getX$$() {
    return this.$_data$ ? this.$_data$.x : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.getX", {$getX$:$oj$$29$$.$ChartDataItem$.prototype.$getX$});
  $oj$$29$$.$ChartDataItem$.prototype.$getY$ = function $$oj$$29$$$$ChartDataItem$$$$getY$$() {
    return this.$_data$ ? this.$_data$.y : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.getY", {$getY$:$oj$$29$$.$ChartDataItem$.prototype.$getY$});
  $oj$$29$$.$ChartDataItem$.prototype.$getZ$ = function $$oj$$29$$$$ChartDataItem$$$$getZ$$() {
    return this.$_data$ ? this.$_data$.z : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.getZ", {$getZ$:$oj$$29$$.$ChartDataItem$.prototype.$getZ$});
  $oj$$29$$.$ChartDataItem$.prototype.isSelected = function $$oj$$29$$$$ChartDataItem$$$isSelected$() {
    return this.$_data$ ? this.$_data$.selected : !1;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.isSelected", {isSelected:$oj$$29$$.$ChartDataItem$.prototype.isSelected});
});
