/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtLegend"], function($oj$$40$$, $$$$38$$) {
  $oj$$40$$.$LegendItem$ = function $$oj$$40$$$$LegendItem$$($data$$167$$) {
    this.$_data$ = $data$$167$$;
  };
  $goog$exportPath_$$("LegendItem", $oj$$40$$.$LegendItem$, $oj$$40$$);
  $oj$$40$$.$LegendItem$.prototype.getText = function $$oj$$40$$$$LegendItem$$$getText$() {
    return this.$_data$ ? this.$_data$.text : null;
  };
  $oj$$40$$.$Object$.$exportPrototypeSymbol$("LegendItem.prototype.getText", {getText:$oj$$40$$.$LegendItem$.prototype.getText});
  $oj$$40$$.$__registerWidget$("oj.ojLegend", $$$$38$$.oj.dvtBaseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{categoryFilter:null, categoryHighlight:null}, $_CreateDvtComponent$:function($context$$57$$, $callback$$107$$, $callbackObj$$10$$) {
    return DvtLegend.newInstance($context$$57$$, $callback$$107$$, $callbackObj$$10$$);
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$15$$ = this._super();
    $styleClasses$$15$$["oj-legend"] = {path:"textStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$15$$["oj-legendTitle"] = {path:"titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$15$$["oj-legendSectionTitle"] = {path:"_sectionTitleStyle", property:"CSS_TEXT_PROPERTIES"};
    return $styleClasses$$15$$;
  }, $_GetEventTypes$:function() {
    return["categoryFilter", "categoryHighlight"];
  }, $_HandleEvent$:function($event$$392$$) {
    var $filterType$$1_highlightType$$1_type$$90$$ = $event$$392$$ && $event$$392$$.getType ? $event$$392$$.getType() : null;
    $filterType$$1_highlightType$$1_type$$90$$ === DvtCategoryHideShowEvent.TYPE_HIDE || $filterType$$1_highlightType$$1_type$$90$$ === DvtCategoryHideShowEvent.TYPE_SHOW ? ($filterType$$1_highlightType$$1_type$$90$$ = $filterType$$1_highlightType$$1_type$$90$$ === DvtCategoryHideShowEvent.TYPE_HIDE ? "out" : "in", this.$_updateLegendItemVisibility$(this.options.sections, $event$$392$$.getCategory(), $filterType$$1_highlightType$$1_type$$90$$), this._trigger("categoryFilter", null, {category:$event$$392$$.getCategory(), 
    type:$filterType$$1_highlightType$$1_type$$90$$})) : $filterType$$1_highlightType$$1_type$$90$$ === DvtCategoryRolloverEvent.TYPE_OVER || $filterType$$1_highlightType$$1_type$$90$$ === DvtCategoryRolloverEvent.TYPE_OUT ? ($filterType$$1_highlightType$$1_type$$90$$ = $filterType$$1_highlightType$$1_type$$90$$ === DvtCategoryRolloverEvent.TYPE_OVER ? "on" : "off", this._trigger("categoryHighlight", null, {categories:[$event$$392$$.getCategory()], type:$filterType$$1_highlightType$$1_type$$90$$})) : 
    this._super($event$$392$$);
  }, $_updateLegendItemVisibility$:function($sections$$, $category$$3$$, $filterType$$2$$) {
    if ($sections$$) {
      for (var $i$$310$$ = 0;$i$$310$$ < $sections$$.length;$i$$310$$++) {
        if ($sections$$[$i$$310$$].items) {
          for (var $items$$ = $sections$$[$i$$310$$].items, $j$$43$$ = 0;$j$$43$$ < $items$$.length;$j$$43$$++) {
            if ($items$$[$j$$43$$].id && $items$$[$j$$43$$].id == $category$$3$$ || !$items$$[$j$$43$$].id && $items$$[$j$$43$$].text == $category$$3$$) {
              $items$$[$j$$43$$].categoryVisibility = "out" == $filterType$$2$$ ? "hidden" : "visible";
            }
          }
        } else {
          this.$_updateLegendItemVisibility$($sections$$[$i$$310$$].sections, $category$$3$$, $filterType$$2$$);
        }
      }
    }
  }, getNodeBySubId:function($locator$$31$$) {
    return this._super($locator$$31$$);
  }, getSubIdByNode:function($node$$86$$) {
    return this._super($node$$86$$);
  }, getTitle:function() {
    return this.$_component$.getAutomation().getTitle();
  }, getSection:function($subIdPath$$2$$) {
    var $auto$$20$$ = this.$_component$.getAutomation();
    return new $oj$$40$$.$LegendSection$($auto$$20$$.getSection($subIdPath$$2$$));
  }, getItem:function($subIdPath$$3$$) {
    var $auto$$21$$ = this.$_component$.getAutomation();
    return new $oj$$40$$.$LegendItem$($auto$$21$$.getItem($subIdPath$$3$$));
  }, getPreferredSize:function($width$$27$$, $height$$23$$) {
    var $dims$$ = this.$_component$.getPreferredSize(this.options, $width$$27$$, $height$$23$$);
    return{width:$dims$$.getWidth(), height:$dims$$.getHeight()};
  }});
  $oj$$40$$.$LegendSection$ = function $$oj$$40$$$$LegendSection$$($data$$168$$) {
    this.$_data$ = $data$$168$$;
  };
  $goog$exportPath_$$("LegendSection", $oj$$40$$.$LegendSection$, $oj$$40$$);
  $oj$$40$$.$LegendSection$.prototype.getTitle = function $$oj$$40$$$$LegendSection$$$getTitle$() {
    return this.$_data$ ? this.$_data$.title : null;
  };
  $oj$$40$$.$Object$.$exportPrototypeSymbol$("LegendSection.prototype.getTitle", {getTitle:$oj$$40$$.$LegendSection$.prototype.getTitle});
  $oj$$40$$.$LegendSection$.prototype.getSection = function $$oj$$40$$$$LegendSection$$$getSection$($sectionIndex$$) {
    return this.$_data$.sections ? new $oj$$40$$.$LegendSection$(this.$_data$.sections[$sectionIndex$$]) : null;
  };
  $oj$$40$$.$Object$.$exportPrototypeSymbol$("LegendSection.prototype.getSection", {getSection:$oj$$40$$.$LegendSection$.prototype.getSection});
  $oj$$40$$.$LegendSection$.prototype.getItem = function $$oj$$40$$$$LegendSection$$$getItem$($itemIndex$$1$$) {
    return this.$_data$.items ? new $oj$$40$$.$LegendItem$(this.$_data$.items[$itemIndex$$1$$]) : null;
  };
  $oj$$40$$.$Object$.$exportPrototypeSymbol$("LegendSection.prototype.getItem", {getItem:$oj$$40$$.$LegendSection$.prototype.getItem});
});
