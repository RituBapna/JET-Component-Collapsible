define(['./DvtToolkit'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtLegend$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtLegend", D.$DvtLegend$$);
D.$DvtObj$$.$createSubclass$(D.$DvtLegend$$, D.$DvtBaseComponent$$, "DvtLegend");
D.$DvtLegend$newInstance$$ = function $$DvtLegend$newInstance$$$($context$$320$$, $callback$$99$$, $callbackObj$$63$$) {
  var $legend$$25$$ = new D.$DvtLegend$$;
  $legend$$25$$.Init($context$$320$$, $callback$$99$$, $callbackObj$$63$$);
  return $legend$$25$$
};
D.$DvtLegend$$.newInstance = D.$DvtLegend$newInstance$$;
D.$DvtLegend$$.getDefaults = function $$DvtLegend$$$getDefaults$($skin$$4$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtLegendDefaults$$, $skin$$4$$)
};
D.$DvtLegend$$.prototype.Init = function $$DvtLegend$$$$Init$($context$$321$$, $callback$$100$$, $callbackObj$$64$$) {
  D.$DvtLegend$$.$superclass$.Init.call(this, $context$$321$$, $callback$$100$$, $callbackObj$$64$$);
  this.setId("legend1000" + window.Math.floor(1E9 * window.Math.random()));
  this.$Defaults$ = new D.$DvtLegendDefaults$$;
  this.$_eventManager$ = new D.$DvtLegendEventManager$$(this);
  this.$_eventManager$.$addListeners$(this);
  this.$_peers$ = [];
  this.$_bounds$ = D.$JSCompiler_alias_NULL$$;
  this.$_titles$ = [];
  this.$_bundle$ = new D.$DvtUtilBundle$$
};
D.$DvtLegend$$.prototype.$__getBundle$ = (0,D.$JSCompiler_get$$)("$_bundle$");
D.$DvtLegend$$.prototype.$SetOptions$ = function $$DvtLegend$$$$$SetOptions$$($options$$224$$) {
  $options$$224$$ ? this.$Options$ = this.$Defaults$.$calcOptions$($options$$224$$) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this))
};
D.$DvtLegend$$.prototype.$getPreferredSize$ = function $$DvtLegend$$$$$getPreferredSize$$($dim$$27_options$$225$$, $maxWidth$$20$$, $maxHeight$$14$$) {
  this.$SetOptions$($dim$$27_options$$225$$);
  this.$__getOptions$().isLayout = D.$JSCompiler_alias_TRUE$$;
  $dim$$27_options$$225$$ = D.$DvtLegendRenderer$$.$render$(this, new D.$DvtRectangle$$(0, 0, $maxWidth$$20$$, $maxHeight$$14$$));
  this.$__getOptions$().isLayout = D.$JSCompiler_alias_FALSE$$;
  return $dim$$27_options$$225$$
};
D.$DvtLegend$$.prototype.getPreferredSize = D.$DvtLegend$$.prototype.$getPreferredSize$;
D.$DvtLegend$$.prototype.$render$ = function $$DvtLegend$$$$$render$$($options$$226$$, $width$$129$$, $height$$115$$) {
  this.$SetOptions$($options$$226$$);
  this.$__getOptions$().isLayout = D.$JSCompiler_alias_FALSE$$;
  this.$removeChildren$();
  this.$_peers$ = [];
  this.$_bounds$ = D.$JSCompiler_alias_NULL$$;
  this.$_titles$ = [];
  !(0,D.$DvtAgent$isTouchDevice$$)() && "none" != this.$__getOptions$().hideAndShowBehavior && (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$_eventManager$, new D.$DvtLegendKeyboardHandler$$(this.$_eventManager$, this));
  return D.$DvtLegendRenderer$$.$render$(this, new D.$DvtRectangle$$(0, 0, $width$$129$$, $height$$115$$))
};
D.$DvtLegend$$.prototype.render = D.$DvtLegend$$.prototype.$render$;
D.$DvtLegend$$.prototype.$highlight$ = function $$DvtLegend$$$$$highlight$$($categories$$9$$) {
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($categories$$9$$, this.$_peers$)
};
D.$DvtLegend$$.prototype.highlight = D.$DvtLegend$$.prototype.$highlight$;
D.$DvtLegend$$.prototype.$processEvent$ = function $$DvtLegend$$$$$processEvent$$($event$$494$$, $source$$20$$) {
  var $type$$130$$ = $event$$494$$.$getType$();
  ("categoryRollOver" == $type$$130$$ || "categoryRollOut" == $type$$130$$) && "dim" == this.$__getOptions$().hoverBehavior && (0,D.$DvtCategoryRolloverHandler$processEvent$$)($event$$494$$, this.$_peers$);
  (this == $source$$20$$ || "showPopup" == $type$$130$$ || "hidePopup" == $type$$130$$) && this.$__dispatchEvent$($event$$494$$)
};
D.$DvtLegend$$.prototype.$__getOptions$ = (0,D.$JSCompiler_get$$)("$Options$");
D.$DvtLegend$$.prototype.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventManager$");
D.$DvtLegend$$.prototype.$destroy$ = function $$DvtLegend$$$$$destroy$$() {
  this.$_eventManager$ && (this.$_eventManager$.$removeListeners$(this), this.$_eventManager$.$destroy$(), this.$_eventManager$ = D.$JSCompiler_alias_NULL$$);
  D.$DvtLegend$$.$superclass$.$destroy$.call(this)
};
D.$DvtLegend$$.prototype.destroy = D.$DvtLegend$$.prototype.$destroy$;
D.$DvtLegend$$.prototype.$__setBounds$ = (0,D.$JSCompiler_set$$)("$_bounds$");
D.$DvtLegend$$.prototype.$getAutomation$ = function $$DvtLegend$$$$$getAutomation$$() {
  return new D.$DvtLegendAutomation$$(this)
};
D.$DvtLegend$$.prototype.getAutomation = D.$DvtLegend$$.prototype.$getAutomation$;
D.$DvtLegendConstants$$ = {};
(0,D.$goog$exportSymbol$$)("DvtLegendConstants", D.$DvtLegendConstants$$);
D.$DvtObj$$.$createSubclass$(D.$DvtLegendConstants$$, D.$DvtObj$$, "DvtLegendConstants");
D.$DvtLegendConstants$$.$BACKGROUND$ = "background";
D.$DvtLegendConstants$$.BACKGROUND = D.$DvtLegendConstants$$.$BACKGROUND$;
D.$DvtLegendConstants$$.$LEGEND_ITEM$ = "legendItem";
D.$DvtLegendConstants$$.LEGEND_ITEM = D.$DvtLegendConstants$$.$LEGEND_ITEM$;
D.$DvtLegendConstants$$.$TITLE$ = "title";
D.$DvtLegendConstants$$.TITLE = D.$DvtLegendConstants$$.$TITLE$;
D.$DvtLegendAutomation$$ = function $$DvtLegendAutomation$$$($dvtComponent$$1$$) {
  this.$_legend$ = $dvtComponent$$1$$;
  this.$_options$ = this.$_legend$.$__getOptions$()
};
(0,D.$goog$exportSymbol$$)("DvtLegendAutomation", D.$DvtLegendAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtLegendAutomation$$, D.$DvtAutomation$$, "DvtLegendAutomation");
D.$DvtLegendAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtLegendAutomation$$$$$GetSubIdForDomElement$$($displayable$$7_indexList_item_logicalObj$$2$$) {
  if(($displayable$$7_indexList_item_logicalObj$$2$$ = this.$_legend$.$__getEventManager$().$GetLogicalObject$($displayable$$7_indexList_item_logicalObj$$2$$)) && $displayable$$7_indexList_item_logicalObj$$2$$ instanceof D.$DvtLegendObjPeer$$) {
    if($displayable$$7_indexList_item_logicalObj$$2$$ = $displayable$$7_indexList_item_logicalObj$$2$$.getData(), $displayable$$7_indexList_item_logicalObj$$2$$ = (0,D.$JSCompiler_StaticMethods__getIndicesFromItem$$)(this, $displayable$$7_indexList_item_logicalObj$$2$$, this.$_options$)) {
      return"section" + $displayable$$7_indexList_item_logicalObj$$2$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__getIndicesFromItem$$ = function $$JSCompiler_StaticMethods__getIndicesFromItem$$$($JSCompiler_StaticMethods__getIndicesFromItem$self_i$$143$$, $item$$1$$, $legendOptions$$) {
  if($legendOptions$$.sections && 0 < $legendOptions$$.sections.length) {
    for(var $s$$38$$ = 0;$s$$38$$ < $legendOptions$$.sections.length;$s$$38$$++) {
      if($legendOptions$$.sections[$s$$38$$] == $item$$1$$) {
        return"[" + $s$$38$$ + "]"
      }
      var $itemIndex$$ = (0,D.$JSCompiler_StaticMethods__getIndicesFromItem$$)($JSCompiler_StaticMethods__getIndicesFromItem$self_i$$143$$, $item$$1$$, $legendOptions$$.sections[$s$$38$$]);
      if($itemIndex$$) {
        return"[" + $s$$38$$ + "]" + $itemIndex$$
      }
    }
    return D.$JSCompiler_alias_NULL$$
  }
  if($legendOptions$$.items && 0 < $legendOptions$$.items.length) {
    for($JSCompiler_StaticMethods__getIndicesFromItem$self_i$$143$$ = 0;$JSCompiler_StaticMethods__getIndicesFromItem$self_i$$143$$ < $legendOptions$$.items.length;$JSCompiler_StaticMethods__getIndicesFromItem$self_i$$143$$++) {
      if($legendOptions$$.items[$JSCompiler_StaticMethods__getIndicesFromItem$self_i$$143$$] == $item$$1$$) {
        return":item[" + $JSCompiler_StaticMethods__getIndicesFromItem$self_i$$143$$ + "]"
      }
    }
    return D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_StaticMethods_getIndicesFromSeries$$ = function $$JSCompiler_StaticMethods_getIndicesFromSeries$$$($JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$144$$, $series$$, $legendOptions$$1$$) {
  if($legendOptions$$1$$.sections && 0 < $legendOptions$$1$$.sections.length) {
    for(var $s$$39$$ = 0;$s$$39$$ < $legendOptions$$1$$.sections.length;$s$$39$$++) {
      var $itemIndex$$1$$ = (0,D.$JSCompiler_StaticMethods_getIndicesFromSeries$$)($JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$144$$, $series$$, $legendOptions$$1$$.sections[$s$$39$$]);
      if($itemIndex$$1$$) {
        return"[" + $s$$39$$ + "]" + $itemIndex$$1$$
      }
    }
    return D.$JSCompiler_alias_NULL$$
  }
  if($legendOptions$$1$$.items && 0 < $legendOptions$$1$$.items.length) {
    for($JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$144$$ = 0;$JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$144$$ < $legendOptions$$1$$.items.length;$JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$144$$++) {
      if($legendOptions$$1$$.items[$JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$144$$].text == $series$$.name) {
        return":item[" + $JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$144$$ + "]"
      }
    }
    return D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_StaticMethods_getLegendItem$$ = function $$JSCompiler_StaticMethods_getLegendItem$$$($JSCompiler_StaticMethods_getLegendItem$self$$, $options$$17$$, $subId$$9$$) {
  var $index$$87_openParen$$1$$ = $subId$$9$$.indexOf("["), $closeParen$$1_nextCloseParen$$1$$ = $subId$$9$$.indexOf("]");
  if(0 <= $index$$87_openParen$$1$$ && 0 <= $closeParen$$1_nextCloseParen$$1$$) {
    var $index$$87_openParen$$1$$ = $subId$$9$$.substring($index$$87_openParen$$1$$ + 1, $closeParen$$1_nextCloseParen$$1$$), $colonIndex$$ = $subId$$9$$.indexOf(":");
    $subId$$9$$ = $subId$$9$$.substring($closeParen$$1_nextCloseParen$$1$$ + 1);
    $closeParen$$1_nextCloseParen$$1$$ = $subId$$9$$.indexOf("]");
    return 0 <= $subId$$9$$.indexOf("[") && 0 <= $closeParen$$1_nextCloseParen$$1$$ ? (0,D.$JSCompiler_StaticMethods_getLegendItem$$)($JSCompiler_StaticMethods_getLegendItem$self$$, $options$$17$$.sections[$index$$87_openParen$$1$$], $subId$$9$$) : 0 == $colonIndex$$ ? $options$$17$$.items[$index$$87_openParen$$1$$] : $options$$17$$.sections[$index$$87_openParen$$1$$]
  }
};
D.$DvtLegendAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtLegendAutomation$$$$$getDomElementForSubId$$($legendItem_subId$$10$$) {
  $legendItem_subId$$10$$ = (0,D.$JSCompiler_StaticMethods_getLegendItem$$)(this, this.$_options$, $legendItem_subId$$10$$);
  for(var $legendPeers$$ = this.$_legend$.$_peers$, $i$$145$$ = 0;$i$$145$$ < $legendPeers$$.length;$i$$145$$++) {
    var $item$$2$$ = $legendPeers$$[$i$$145$$].getData();
    if($legendItem_subId$$10$$ == $item$$2$$) {
      return $legendPeers$$[$i$$145$$].$getDisplayables$()[0].$getElem$()
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtLegendAutomation$$.prototype.getDomElementForSubId = D.$DvtLegendAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtLegendAutomation$$.prototype.$getTitle$ = function $$DvtLegendAutomation$$$$$getTitle$$() {
  return this.$_options$.title
};
D.$DvtLegendAutomation$$.prototype.getTitle = D.$DvtLegendAutomation$$.prototype.$getTitle$;
D.$DvtLegendAutomation$$.prototype.getItem = function $$DvtLegendAutomation$$$$getItem$($subIdPath$$1$$) {
  for(var $item$$3$$, $index$$88$$ = $subIdPath$$1$$.shift(), $options$$18$$ = this.$_options$;$index$$88$$ != D.$JSCompiler_alias_VOID$$;) {
    0 < $subIdPath$$1$$.length ? $options$$18$$ = $options$$18$$.sections[$index$$88$$] : $item$$3$$ = $options$$18$$.items[$index$$88$$], $index$$88$$ = $subIdPath$$1$$.shift()
  }
  return{text:$item$$3$$.text ? $item$$3$$.text : D.$JSCompiler_alias_NULL$$}
};
D.$DvtLegendAutomation$$.prototype.getItem = D.$DvtLegendAutomation$$.prototype.getItem;
D.$DvtLegendAutomation$$.prototype.$getSection$ = function $$DvtLegendAutomation$$$$$getSection$$($subIdPath$$2$$) {
  for(var $section$$, $index$$89$$ = $subIdPath$$2$$.shift(), $options$$19$$ = this.$_options$;$index$$89$$ != D.$JSCompiler_alias_VOID$$;) {
    0 < $subIdPath$$2$$.length ? $options$$19$$ = $options$$19$$.sections[$index$$89$$] : $section$$ = $options$$19$$.sections[$index$$89$$], $index$$89$$ = $subIdPath$$2$$.shift()
  }
  return{title:$section$$.title ? $section$$.title : D.$JSCompiler_alias_NULL$$, items:$section$$.items ? (0,D.$JSCompiler_StaticMethods__generateItemObjects$$)($section$$.items) : D.$JSCompiler_alias_NULL$$, sections:$section$$.sections ? (0,D.$JSCompiler_StaticMethods__generateSectionObjects$$)(this, $section$$.sections) : D.$JSCompiler_alias_NULL$$}
};
D.$DvtLegendAutomation$$.prototype.getSection = D.$DvtLegendAutomation$$.prototype.$getSection$;
D.$JSCompiler_StaticMethods__generateItemObjects$$ = function $$JSCompiler_StaticMethods__generateItemObjects$$$($items$$1$$) {
  for(var $itemDataArray$$ = [], $i$$146$$ = 0;$i$$146$$ < $items$$1$$.length;$i$$146$$++) {
    $itemDataArray$$.push({text:$items$$1$$[$i$$146$$].text})
  }
  return $itemDataArray$$
};
D.$JSCompiler_StaticMethods__generateSectionObjects$$ = function $$JSCompiler_StaticMethods__generateSectionObjects$$$($JSCompiler_StaticMethods__generateSectionObjects$self$$, $sections$$) {
  for(var $sectionDataArray$$ = [], $i$$147$$ = 0;$i$$147$$ < $sections$$.length;$i$$147$$++) {
    $sectionDataArray$$.push({title:$sections$$[$i$$147$$].title ? $sections$$[$i$$147$$].title : D.$JSCompiler_alias_NULL$$, items:$sections$$[$i$$147$$].items ? (0,D.$JSCompiler_StaticMethods__generateItemObjects$$)($sections$$[$i$$147$$].items) : D.$JSCompiler_alias_NULL$$, sections:$sections$$[$i$$147$$].sections ? (0,D.$JSCompiler_StaticMethods__generateSectionObjects$$)($JSCompiler_StaticMethods__generateSectionObjects$self$$, $sections$$[$i$$147$$].sections) : D.$JSCompiler_alias_NULL$$})
  }
  return $sectionDataArray$$
};
D.$DvtLegendDefaults$$ = function $$DvtLegendDefaults$$$() {
  this.Init({skyros:D.$DvtLegendDefaults$VERSION_1$$, alta:D.$DvtLegendDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtLegendDefaults");
D.$DvtLegendDefaults$SKIN_ALTA$$ = {skin:"alta", textStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;"), titleStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px; color: #333333;"), colors:D.$DvtCSSStyle$COLORS_ALTA$$};
D.$DvtLegendDefaults$VERSION_1$$ = {skin:"skyros", orientation:"vertical", position:D.$JSCompiler_alias_NULL$$, backgroundColor:D.$JSCompiler_alias_NULL$$, borderColor:D.$JSCompiler_alias_NULL$$, textStyle:new D.$DvtCSSStyle$$("font-size: 11px; color: #333333;"), titleStyle:new D.$DvtCSSStyle$$("font-size: 12px; color: #003d5b;"), titleHalign:"start", hideAndShowBehavior:"none", hoverBehavior:"none", scrolling:"asNeeded", halign:"center", valign:"middle", colors:D.$DvtCSSStyle$COLORS_SKYROS$$, markerShape:"square", 
lineWidth:3, layout:{gapRatio:1, outerGapWidth:3, outerGapHeight:3, titleGap:3, symbolGapWidth:5, symbolGapHeight:4, rowGap:0, columnGap:8, sectionGapHeight:6, sectionGapWidth:15}, isLayout:D.$JSCompiler_alias_FALSE$$};
D.$DvtLegendDefaults$getGapSize$$ = function $$DvtLegendDefaults$getGapSize$$$($options$$30$$, $defaultSize$$) {
  return window.Math.ceil($defaultSize$$ * $options$$30$$.layout.gapRatio)
};
D.$DvtLegendEventManager$$ = function $$DvtLegendEventManager$$$($legend$$4$$) {
  this.Init($legend$$4$$.$_context$, $legend$$4$$.$processEvent$, $legend$$4$$);
  this.$_legend$ = $legend$$4$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendEventManager$$, D.$DvtEventManager$$, "DvtLegendEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtLegendEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$FireUIEvent$ = function $$JSCompiler_prototypeAlias$$$$FireUIEvent$$($type$$61$$, $logicalObj$$3$$) {
  var $id$$inline_2257_params$$17$$ = D.$JSCompiler_alias_NULL$$;
  $logicalObj$$3$$ instanceof D.$DvtSimpleObjPeer$$ && $logicalObj$$3$$.$getParams$() != D.$JSCompiler_alias_NULL$$ ? $id$$inline_2257_params$$17$$ = $logicalObj$$3$$.$getParams$() : $logicalObj$$3$$ instanceof D.$DvtLegendObjPeer$$ && ($id$$inline_2257_params$$17$$ = $logicalObj$$3$$.getId(), $id$$inline_2257_params$$17$$ = {type:D.$DvtLegendConstants$$.$LEGEND_ITEM$, id:$id$$inline_2257_params$$17$$});
  this.$FireEvent$(new D.$DvtComponentUIEvent$$($type$$61$$, $id$$inline_2257_params$$17$$), this.$_legend$)
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$128$$) {
  D.$DvtLegendEventManager$$.$superclass$.$OnClick$.call(this, $event$$128$$);
  var $action$$7_obj$$54$$ = this.$GetLogicalObject$($event$$128$$.target);
  if($action$$7_obj$$54$$) {
    var $hideShow$$ = (0,D.$JSCompiler_StaticMethods_processHideShowEvent$$)(this, $action$$7_obj$$54$$), $action$$7_obj$$54$$ = (0,D.$JSCompiler_StaticMethods__processActionEvent$$)(this, $action$$7_obj$$54$$);
    ($hideShow$$ || $action$$7_obj$$54$$) && $event$$128$$.stopPropagation()
  }
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$129$$) {
  D.$DvtLegendEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$129$$);
  var $obj$$55$$ = this.$GetLogicalObject$($event$$129$$.target);
  $obj$$55$$ && (this.$_processRolloverEvent$($obj$$55$$, D.$JSCompiler_alias_TRUE$$) && $event$$129$$.stopPropagation(), this.$UpdateActiveElement$($obj$$55$$))
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$130$$) {
  D.$DvtLegendEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$130$$);
  var $obj$$56$$ = this.$GetLogicalObject$($event$$130$$.target);
  $obj$$56$$ && this.$_processRolloverEvent$($obj$$56$$, D.$JSCompiler_alias_FALSE$$) && $event$$130$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchClickInternal$$($evt$$21_touchEvent$$) {
  var $action$$8_obj$$57$$ = this.$GetLogicalObject$($evt$$21_touchEvent$$.target);
  if($action$$8_obj$$57$$) {
    $evt$$21_touchEvent$$ = $evt$$21_touchEvent$$.$touchEvent$;
    var $hideShow$$1$$ = (0,D.$JSCompiler_StaticMethods_processHideShowEvent$$)(this, $action$$8_obj$$57$$), $action$$8_obj$$57$$ = (0,D.$JSCompiler_StaticMethods__processActionEvent$$)(this, $action$$8_obj$$57$$);
    ($hideShow$$1$$ || $action$$8_obj$$57$$) && $evt$$21_touchEvent$$ && $evt$$21_touchEvent$$.preventDefault()
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverStartInternal$$($event$$131$$) {
  var $obj$$58$$ = this.$GetLogicalObject$($event$$131$$.target);
  this.$_processRolloverEvent$($obj$$58$$, D.$JSCompiler_alias_TRUE$$) && $event$$131$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverEndInternal$$($event$$132$$) {
  var $obj$$59$$ = this.$GetLogicalObject$($event$$132$$.target);
  this.$_processRolloverEvent$($obj$$59$$, D.$JSCompiler_alias_FALSE$$) && $event$$132$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverOverInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverOverInternal$$($event$$133$$) {
  var $obj$$60$$ = this.$GetLogicalObject$($event$$133$$.target);
  this.$_processRolloverEvent$($obj$$60$$, D.$JSCompiler_alias_TRUE$$) && $event$$133$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverOutInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverOutInternal$$($event$$134$$) {
  var $obj$$61$$ = this.$GetLogicalObject$($event$$134$$.target);
  this.$_processRolloverEvent$($obj$$61$$, D.$JSCompiler_alias_FALSE$$) && $event$$134$$.stopPropagation()
};
D.$JSCompiler_StaticMethods_processHideShowEvent$$ = function $$JSCompiler_StaticMethods_processHideShowEvent$$$($JSCompiler_StaticMethods_processHideShowEvent$self$$, $obj$$62$$) {
  if("none" == $JSCompiler_StaticMethods_processHideShowEvent$self$$.$_legend$.$__getOptions$().hideAndShowBehavior) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $categories_id$$18$$ = $obj$$62$$.$getCategories$ ? $obj$$62$$.$getCategories$() : D.$JSCompiler_alias_NULL$$;
  if(!$categories_id$$18$$ || 0 >= $categories_id$$18$$.length) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $dataItem$$ = $obj$$62$$.getData(), $visibility$$ = $dataItem$$.categoryVisibility, $displayables$$ = $obj$$62$$.$getDisplayables$(), $i$$148$$ = 0;$i$$148$$ < $displayables$$.length;$i$$148$$++) {
    var $displayable$$8$$ = $displayables$$[$i$$148$$];
    $displayable$$8$$ instanceof D.$DvtMarker$$ ? $displayable$$8$$.$setHollow$($obj$$62$$.$getColor$()) : $displayable$$8$$ instanceof D.$DvtRect$$ && $obj$$62$$.$UpdateAriaLabel$($displayable$$8$$)
  }
  $categories_id$$18$$ = $categories_id$$18$$[0];
  "hidden" == $visibility$$ ? ($dataItem$$.categoryVisibility = "visible", $JSCompiler_StaticMethods_processHideShowEvent$self$$.$FireEvent$(new D.$DvtCategoryHideShowEvent$$(D.$DvtCategoryHideShowEvent$$.$TYPE_SHOW$, $categories_id$$18$$), $JSCompiler_StaticMethods_processHideShowEvent$self$$.$_legend$)) : ($dataItem$$.categoryVisibility = "hidden", $JSCompiler_StaticMethods_processHideShowEvent$self$$.$FireEvent$(new D.$DvtCategoryHideShowEvent$$(D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$, $categories_id$$18$$), 
  $JSCompiler_StaticMethods_processHideShowEvent$self$$.$_legend$));
  return D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_StaticMethods__processActionEvent$$ = function $$JSCompiler_StaticMethods__processActionEvent$$$($JSCompiler_StaticMethods__processActionEvent$self$$, $obj$$63$$) {
  return $obj$$63$$ && $obj$$63$$.$getAction$ && $obj$$63$$.$getAction$() ? ($JSCompiler_StaticMethods__processActionEvent$self$$.$FireEvent$(new D.$DvtActionEvent$$("action", $obj$$63$$.$getAction$(), $obj$$63$$.getId()), $JSCompiler_StaticMethods__processActionEvent$self$$.$_legend$), D.$JSCompiler_alias_TRUE$$) : D.$JSCompiler_alias_FALSE$$
};
D.$DvtLegendEventManager$$.prototype.$_processRolloverEvent$ = function $$DvtLegendEventManager$$$$$_processRolloverEvent$$($obj$$64$$, $bOver$$) {
  if("none" == this.$_legend$.$__getOptions$().hoverBehavior) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $categories$$1$$ = $obj$$64$$ && $obj$$64$$.$getCategories$ ? $obj$$64$$.$getCategories$() : D.$JSCompiler_alias_NULL$$;
  if(!$categories$$1$$ || 0 >= $categories$$1$$.length) {
    return D.$JSCompiler_alias_FALSE$$
  }
  this.$FireEvent$(new D.$DvtCategoryRolloverEvent$$($bOver$$ ? "categoryRollOver" : "categoryRollOut", $categories$$1$$[0]), this.$_legend$);
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtLegendKeyboardHandler$$ = function $$DvtLegendKeyboardHandler$$$($manager$$1$$, $legend$$2$$) {
  this.Init($manager$$1$$, $legend$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtLegendKeyboardHandler");
D.$DvtLegendKeyboardHandler$$.prototype.Init = function $$DvtLegendKeyboardHandler$$$$Init$($manager$$2$$, $legend$$3$$) {
  D.$DvtLegendKeyboardHandler$$.$superclass$.Init.call(this, $manager$$2$$);
  this.$_legend$ = $legend$$3$$
};
D.$DvtLegendKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtLegendKeyboardHandler$$$$$processKeyDown$$($event$$127$$) {
  var $keyCode$$10_navigables$$ = $event$$127$$.keyCode, $currentNavigable$$ = this.$_eventManager$.$getFocus$();
  if(9 == $keyCode$$10_navigables$$) {
    if($currentNavigable$$) {
      return $event$$127$$.preventDefault(), $currentNavigable$$
    }
    $keyCode$$10_navigables$$ = this.$_legend$.$_peers$;
    if(0 < $keyCode$$10_navigables$$.length) {
      return $event$$127$$.preventDefault(), this.$getDefaultNavigable$($keyCode$$10_navigables$$)
    }
  }else {
    if(13 == $keyCode$$10_navigables$$ || 32 == $keyCode$$10_navigables$$) {
      $currentNavigable$$ && (0,D.$JSCompiler_StaticMethods_processHideShowEvent$$)(this.$_legend$.$__getEventManager$(), $currentNavigable$$)
    }else {
      return D.$DvtLegendKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$127$$)
    }
  }
};
D.$DvtLegendObjPeer$$ = function $$DvtLegendObjPeer$$$($legend$$17$$, $displayables$$1$$, $id$$19$$, $tooltip$$4$$) {
  this.Init($legend$$17$$, $displayables$$1$$, $id$$19$$, $tooltip$$4$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendObjPeer$$, D.$DvtObj$$, "DvtLegendObjPeer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtLegendObjPeer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($i$$155_legend$$18$$, $displayables$$2$$, $item$$11$$, $tooltip$$5$$) {
  this.$_legend$ = $i$$155_legend$$18$$;
  this.$_displayables$ = $displayables$$2$$;
  this.$_item$ = $item$$11$$;
  this.$_id$ = $item$$11$$.id ? $item$$11$$.id : $item$$11$$.text;
  this.$_action$ = $item$$11$$.action;
  this.$_spb$ = $item$$11$$._spb;
  this.$_tooltip$ = $tooltip$$5$$;
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  if(this.$_action$) {
    for($i$$155_legend$$18$$ = 0;$i$$155_legend$$18$$ < this.$_displayables$.length;$i$$155_legend$$18$$++) {
      this.$_displayables$[$i$$155_legend$$18$$].setCursor("pointer")
    }
  }
};
D.$JSCompiler_prototypeAlias$$.getData = (0,D.$JSCompiler_get$$)("$_item$");
D.$JSCompiler_prototypeAlias$$.$getColor$ = function $$JSCompiler_prototypeAlias$$$$getColor$$() {
  return this.$_item$.color
};
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = (0,D.$JSCompiler_get$$)("$_displayables$");
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return[this.$_id$]
};
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = (0,D.$JSCompiler_get$$)("$_tooltip$");
D.$JSCompiler_prototypeAlias$$.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = (0,D.$JSCompiler_get$$)("$_spb$");
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  if("none" != this.$_legend$.$__getOptions$().hideAndShowBehavior) {
    var $bundle$$1$$ = this.$_legend$.$__getBundle$(), $states$$1$$ = [(0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$1$$, "hidden" == this.getData().categoryVisibility ? "STATE_HIDDEN" : "STATE_VISIBLE")];
    return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.getData().text, $states$$1$$, $bundle$$1$$)
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$UpdateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$UpdateAriaLabel$$($displayable$$9$$) {
  (0,D.$DvtAgent$deferAriaCreation$$)() || (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($displayable$$9$$, "label", this.$getAriaLabel$())
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$135$$) {
  return $event$$135$$.type == D.$DvtMouseEvent$CLICK$$ ? this : (0,D.$DvtKeyboardHandler$getNextNavigable$$)(this, $event$$135$$, this.$_legend$.$_peers$)
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$1$$) {
  return this.$_displayables$[0] ? this.$_displayables$[0].$getDimensions$($targetCoordinateSpace$$1$$) : new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_displayables$[0] ? this.$_displayables$[0].$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$_displayables$[0] && this.$_displayables$[0].$setSolidStroke$((0,D.$DvtAgent$getFocusColor$$)())
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$_displayables$[0] && this.$_displayables$[0].$setStroke$(D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$DvtLegendRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendRenderer$$, D.$DvtObj$$, "DvtLegendRenderer");
D.$DvtLegendRenderer$$.$_MAX_LINE_WIDTH$ = 5;
D.$DvtLegendRenderer$$.$_MAX_LINE_WIDTH_WITH_MARKER$ = 2;
D.$DvtLegendRenderer$$.$_LINE_MARKER_SIZE_FACTOR$ = 0.6;
D.$DvtLegendRenderer$$.$_DEFAULT_SYMBOL_SIZE$ = 10;
D.$DvtLegendRenderer$$.$render$ = function $$DvtLegendRenderer$$$$render$$($legend$$5$$, $availSpace$$2$$) {
  var $i$$149_options$$20_valign$$ = $legend$$5$$.$__getOptions$(), $context$$69_titleHalign$$ = $legend$$5$$.$_context$, $halign_isScrollable$$ = "off" != $i$$149_options$$20_valign$$.scrolling;
  $i$$149_options$$20_valign$$.isLayout || D.$DvtLegendRenderer$$.$_renderBackground$($legend$$5$$, $availSpace$$2$$);
  var $gapWidth$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($i$$149_options$$20_valign$$, $i$$149_options$$20_valign$$.layout.outerGapWidth), $gapHeight$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($i$$149_options$$20_valign$$, $i$$149_options$$20_valign$$.layout.outerGapHeight);
  $availSpace$$2$$.x += $gapWidth$$;
  $availSpace$$2$$.y += $gapHeight$$;
  $availSpace$$2$$.$w$ -= 2 * $gapWidth$$;
  $availSpace$$2$$.$h$ -= 2 * $gapHeight$$;
  $legend$$5$$.$__setBounds$($availSpace$$2$$);
  if(0 >= $availSpace$$2$$.$w$ || 0 >= $availSpace$$2$$.$h$) {
    return new D.$DvtDimension$$(0, 0)
  }
  var $container$$4_titles$$ = $halign_isScrollable$$ ? new D.$DvtSimpleScrollableContainer$$($context$$69_titleHalign$$, $availSpace$$2$$) : new D.$DvtContainer$$($context$$69_titleHalign$$);
  $legend$$5$$.$addChild$($container$$4_titles$$);
  var $legendSpace_sectionsDim$$ = $availSpace$$2$$.clone(), $titleDim_totalDim$$ = D.$DvtLegendRenderer$$.$_renderTitle$($legend$$5$$, $container$$4_titles$$, $i$$149_options$$20_valign$$.title, $legendSpace_sectionsDim$$, D.$JSCompiler_alias_NULL$$);
  $legendSpace_sectionsDim$$.y += $titleDim_totalDim$$.$h$;
  $legendSpace_sectionsDim$$.$h$ -= window.Math.floor($titleDim_totalDim$$.$h$);
  $legendSpace_sectionsDim$$ = D.$DvtLegendRenderer$$.$_renderSections$($legend$$5$$, $container$$4_titles$$, $legendSpace_sectionsDim$$);
  $titleDim_totalDim$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)($titleDim_totalDim$$, $legendSpace_sectionsDim$$);
  $titleDim_totalDim$$.$h$ > $availSpace$$2$$.$h$ && ($halign_isScrollable$$ && $container$$4_titles$$.$setContentHeight$($titleDim_totalDim$$.$h$), $titleDim_totalDim$$.$h$ = $availSpace$$2$$.$h$);
  if($i$$149_options$$20_valign$$.isLayout) {
    return new D.$DvtDimension$$($titleDim_totalDim$$.$w$ + 2 * $gapWidth$$, $titleDim_totalDim$$.$h$ + 2 * $gapHeight$$)
  }
  $halign_isScrollable$$ = $i$$149_options$$20_valign$$.hAlign != D.$JSCompiler_alias_NULL$$ ? $i$$149_options$$20_valign$$.hAlign : $i$$149_options$$20_valign$$.halign;
  "center" == $halign_isScrollable$$ ? $container$$4_titles$$.$setTranslateX$($availSpace$$2$$.x - $titleDim_totalDim$$.x + ($availSpace$$2$$.$w$ - $titleDim_totalDim$$.$w$) / 2) : "end" == $halign_isScrollable$$ && ((0,D.$DvtAgent$isRightToLeft$$)($context$$69_titleHalign$$) ? $container$$4_titles$$.$setTranslateX$($availSpace$$2$$.x - $titleDim_totalDim$$.x) : $container$$4_titles$$.$setTranslateX$($availSpace$$2$$.x - $titleDim_totalDim$$.x + $availSpace$$2$$.$w$ - $titleDim_totalDim$$.$w$));
  $i$$149_options$$20_valign$$ = $i$$149_options$$20_valign$$.vAlign != D.$JSCompiler_alias_NULL$$ ? $i$$149_options$$20_valign$$.vAlign : $i$$149_options$$20_valign$$.valign;
  "middle" == $i$$149_options$$20_valign$$ ? $container$$4_titles$$.$setTranslateY$($availSpace$$2$$.y - $titleDim_totalDim$$.y + ($availSpace$$2$$.$h$ - $titleDim_totalDim$$.$h$) / 2) : "bottom" == $i$$149_options$$20_valign$$ && $container$$4_titles$$.$setTranslateY$($availSpace$$2$$.y - $titleDim_totalDim$$.y + $availSpace$$2$$.$h$ - $titleDim_totalDim$$.$h$);
  $container$$4_titles$$ = $legend$$5$$.$_titles$;
  for($i$$149_options$$20_valign$$ = 0;$i$$149_options$$20_valign$$ < $container$$4_titles$$.length;$i$$149_options$$20_valign$$++) {
    $context$$69_titleHalign$$ = $container$$4_titles$$[$i$$149_options$$20_valign$$].$getHorizAlignment$(), "left" == $context$$69_titleHalign$$ ? $container$$4_titles$$[$i$$149_options$$20_valign$$].$setX$($titleDim_totalDim$$.x) : "center" == $context$$69_titleHalign$$ ? $container$$4_titles$$[$i$$149_options$$20_valign$$].$setX$($titleDim_totalDim$$.x + $titleDim_totalDim$$.$w$ / 2) : "right" == $context$$69_titleHalign$$ && $container$$4_titles$$[$i$$149_options$$20_valign$$].$setX$($titleDim_totalDim$$.x + 
    $titleDim_totalDim$$.$w$)
  }
  return new D.$DvtDimension$$($titleDim_totalDim$$.$w$ + 2 * $gapWidth$$, $titleDim_totalDim$$.$h$ + 2 * $gapHeight$$)
};
D.$DvtLegendRenderer$$.$_renderBackground$ = function $$DvtLegendRenderer$$$$_renderBackground$$($legend$$6$$, $availSpace$$3$$) {
  var $borderColor$$13_options$$21$$ = $legend$$6$$.$__getOptions$(), $backgroundColor$$12$$ = $borderColor$$13_options$$21$$.backgroundColor, $borderColor$$13_options$$21$$ = $borderColor$$13_options$$21$$.borderColor;
  if($backgroundColor$$12$$ || $borderColor$$13_options$$21$$) {
    var $rect$$12$$ = new D.$DvtRect$$($legend$$6$$.$_context$, $availSpace$$3$$.x, $availSpace$$3$$.y, $availSpace$$3$$.$w$, $availSpace$$3$$.$h$);
    $backgroundColor$$12$$ ? $rect$$12$$.$setSolidFill$($backgroundColor$$12$$) : (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($rect$$12$$);
    $borderColor$$13_options$$21$$ && ($rect$$12$$.$setSolidStroke$($borderColor$$13_options$$21$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($rect$$12$$));
    $legend$$6$$.$__getEventManager$().$associate$($rect$$12$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {type:D.$DvtLegendConstants$$.$BACKGROUND$, id:D.$JSCompiler_alias_VOID$$}));
    $legend$$6$$.$addChild$($rect$$12$$)
  }
};
D.$DvtLegendRenderer$$.$_renderTitle$ = function $$DvtLegendRenderer$$$$_renderTitle$$($legend$$7$$, $container$$5_titleHalign$$1$$, $title$$7_titleStr$$, $availSpace$$4_titleDims$$, $section$$1$$, $isInline$$) {
  var $options$$22$$ = $legend$$7$$.$__getOptions$(), $isRTL$$1$$ = (0,D.$DvtAgent$isRightToLeft$$)($container$$5_titleHalign$$1$$.$_context$);
  if(!$title$$7_titleStr$$) {
    return new D.$DvtRectangle$$($isRTL$$1$$ ? $availSpace$$4_titleDims$$.x + $availSpace$$4_titleDims$$.$w$ : $availSpace$$4_titleDims$$.x, $availSpace$$4_titleDims$$.y, 0, 0)
  }
  $title$$7_titleStr$$ = new D.$DvtOutputText$$($container$$5_titleHalign$$1$$.$_context$, $title$$7_titleStr$$, $isRTL$$1$$ ? $availSpace$$4_titleDims$$.x + $availSpace$$4_titleDims$$.$w$ : $availSpace$$4_titleDims$$.x, $availSpace$$4_titleDims$$.y);
  var $gap$$1_titleStyle$$ = $section$$1$$ && $section$$1$$.titleStyle ? new D.$DvtCSSStyle$$($section$$1$$.titleStyle) : $options$$22$$.titleStyle;
  $title$$7_titleStr$$.$setCSSStyle$($gap$$1_titleStyle$$);
  return D.$DvtTextUtils$$.$fitText$($title$$7_titleStr$$, $availSpace$$4_titleDims$$.$w$, $availSpace$$4_titleDims$$.$h$, $container$$5_titleHalign$$1$$) ? ($legend$$7$$.$__getEventManager$().$associate$($title$$7_titleStr$$, new D.$DvtSimpleObjPeer$$($title$$7_titleStr$$.$_untruncatedTextString$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {type:D.$DvtLegendConstants$$.$TITLE$, id:D.$JSCompiler_alias_VOID$$})), $isRTL$$1$$ && $title$$7_titleStr$$.$alignRight$(), $availSpace$$4_titleDims$$ = 
  $title$$7_titleStr$$.$measureDimensions$(), $gap$$1_titleStyle$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($options$$22$$, $options$$22$$.layout.titleGap), $options$$22$$.isLayout ? $container$$5_titleHalign$$1$$.removeChild($title$$7_titleStr$$) : $isInline$$ || ($container$$5_titleHalign$$1$$ = $section$$1$$ && $section$$1$$.titleHalign ? $section$$1$$.titleHalign : $options$$22$$.titleHalign, "center" == $container$$5_titleHalign$$1$$ ? $title$$7_titleStr$$.$alignCenter$() : "end" == $container$$5_titleHalign$$1$$ && 
  ($isRTL$$1$$ ? $title$$7_titleStr$$.$alignLeft$() : $title$$7_titleStr$$.$alignRight$()), $legend$$7$$.$_titles$.push($title$$7_titleStr$$)), $availSpace$$4_titleDims$$.$h$ += $gap$$1_titleStyle$$, $availSpace$$4_titleDims$$) : new D.$DvtRectangle$$($isRTL$$1$$ ? $availSpace$$4_titleDims$$.x + $availSpace$$4_titleDims$$.$w$ : $availSpace$$4_titleDims$$.x, $availSpace$$4_titleDims$$.y, 0, 0)
};
D.$DvtLegendRenderer$$.$_renderSections$ = function $$DvtLegendRenderer$$$$_renderSections$$($legend$$8$$, $container$$6$$, $availSpace$$5$$) {
  var $options$$23$$ = $legend$$8$$.$__getOptions$();
  $options$$23$$.symbolWidth == D.$JSCompiler_alias_NULL$$ && $options$$23$$.symbolHeight == D.$JSCompiler_alias_NULL$$ ? ($options$$23$$.symbolWidth = D.$DvtLegendRenderer$$.$_DEFAULT_SYMBOL_SIZE$, $options$$23$$.symbolHeight = D.$DvtLegendRenderer$$.$_DEFAULT_SYMBOL_SIZE$) : $options$$23$$.symbolWidth == D.$JSCompiler_alias_NULL$$ ? $options$$23$$.symbolWidth = $options$$23$$.symbolHeight : $options$$23$$.symbolHeight == D.$JSCompiler_alias_NULL$$ && ($options$$23$$.symbolHeight = $options$$23$$.symbolWidth);
  var $gapHeight$$1$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($options$$23$$, $options$$23$$.layout.sectionGapHeight), $gapWidth$$1$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($options$$23$$, $options$$23$$.layout.sectionGapWidth), $rowHeight$$3$$ = D.$DvtLegendRenderer$$.$_getRowHeight$($legend$$8$$), $isHoriz$$ = "vertical" != $options$$23$$.orientation, $legendSections$$ = $options$$23$$.sections, $totalDim$$1$$ = D.$JSCompiler_alias_NULL$$, $horizAvailSpace$$ = $availSpace$$5$$.clone(), $sectionDim$$;
  for(window.i = 0;window.i < $legendSections$$.length;window.i++) {
    $isHoriz$$ ? ($sectionDim$$ = D.$DvtLegendRenderer$$.$_renderHorizontalSection$($legend$$8$$, $container$$6$$, $legendSections$$[window.i], $horizAvailSpace$$, $rowHeight$$3$$), $sectionDim$$.$w$ > $horizAvailSpace$$.$w$ ? ($horizAvailSpace$$.$w$ < $availSpace$$5$$.$w$ && ($availSpace$$5$$.y += $sectionDim$$.$h$ + $gapHeight$$1$$, $availSpace$$5$$.$h$ -= $sectionDim$$.$h$ + $gapHeight$$1$$), $sectionDim$$ = $sectionDim$$.$w$ <= $availSpace$$5$$.$w$ ? D.$DvtLegendRenderer$$.$_renderHorizontalSection$($legend$$8$$, 
    $container$$6$$, $legendSections$$[window.i], $availSpace$$5$$, $rowHeight$$3$$) : D.$DvtLegendRenderer$$.$_renderVerticalSection$($legend$$8$$, $container$$6$$, $legendSections$$[window.i], $availSpace$$5$$, $rowHeight$$3$$, D.$JSCompiler_alias_FALSE$$), $availSpace$$5$$.y += $sectionDim$$.$h$ + $gapHeight$$1$$, $availSpace$$5$$.$h$ -= $sectionDim$$.$h$ + $gapHeight$$1$$, $horizAvailSpace$$ = $availSpace$$5$$.clone()) : ($horizAvailSpace$$.$w$ -= $sectionDim$$.$w$ + $gapWidth$$1$$, (0,D.$DvtAgent$isRightToLeft$$)($legend$$8$$.$_context$) || 
    ($horizAvailSpace$$.x += $sectionDim$$.$w$ + $gapWidth$$1$$))) : ($sectionDim$$ = D.$DvtLegendRenderer$$.$_renderVerticalSection$($legend$$8$$, $container$$6$$, $legendSections$$[window.i], $availSpace$$5$$, $rowHeight$$3$$, "off" != $options$$23$$.scrolling), $availSpace$$5$$.y += $sectionDim$$.$h$ + $gapHeight$$1$$, $availSpace$$5$$.$h$ -= $sectionDim$$.$h$ + $gapHeight$$1$$), $totalDim$$1$$ = $totalDim$$1$$ ? (0,D.$JSCompiler_StaticMethods_getUnion$$)($totalDim$$1$$, $sectionDim$$) : $sectionDim$$
  }
  return $totalDim$$1$$
};
D.$DvtLegendRenderer$$.$_renderVerticalSection$ = function $$DvtLegendRenderer$$$$_renderVerticalSection$$($legend$$9$$, $container$$7$$, $section$$2$$, $availSpace$$6_textSpace$$, $rowHeight$$4$$, $isScrollable$$1_numCols$$) {
  if($section$$2$$) {
    var $currRow_options$$24$$ = $legend$$9$$.$__getOptions$(), $currCol_symbolGap$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($currRow_options$$24$$, $currRow_options$$24$$.layout.symbolGapWidth), $rowGap$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($currRow_options$$24$$, $currRow_options$$24$$.layout.rowGap), $colGap$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($currRow_options$$24$$, $currRow_options$$24$$.layout.columnGap), $isRTL$$2$$ = (0,D.$DvtAgent$isRightToLeft$$)($legend$$9$$.$_context$), $sectionSpace$$ = 
    $availSpace$$6_textSpace$$.clone();
    $isScrollable$$1_numCols$$ && ($sectionSpace$$.$h$ = window.Infinity);
    var $sectionDim$$1_titleDim$$1$$ = D.$DvtLegendRenderer$$.$_renderTitle$($legend$$9$$, $container$$7$$, $section$$2$$.title, $sectionSpace$$, $section$$2$$);
    if(!$section$$2$$.items) {
      return $sectionDim$$1_titleDim$$1$$
    }
    $sectionSpace$$.y += $sectionDim$$1_titleDim$$1$$.$h$;
    $sectionSpace$$.$h$ -= $sectionDim$$1_titleDim$$1$$.$h$;
    var $colInitY$$ = $sectionSpace$$.y, $colWidth_legendInfo$$ = D.$DvtLegendRenderer$$.$_calcColumns$($legend$$9$$, $sectionSpace$$, $rowHeight$$4$$, $section$$2$$.items, $isScrollable$$1_numCols$$);
    $isScrollable$$1_numCols$$ = $colWidth_legendInfo$$.numCols;
    var $numRows$$ = $colWidth_legendInfo$$.numRows, $colWidth_legendInfo$$ = $colWidth_legendInfo$$.width, $contentHeight_numItems$$ = $numRows$$ * ($rowHeight$$4$$ + $rowGap$$) - $rowGap$$, $contentWidth_i$$150$$ = window.Math.min($isScrollable$$1_numCols$$ * ($colWidth_legendInfo$$ + $colGap$$) - $colGap$$, $sectionSpace$$.$w$), $sectionDim$$1_titleDim$$1$$ = new D.$DvtRectangle$$($isRTL$$2$$ ? $availSpace$$6_textSpace$$.x + $availSpace$$6_textSpace$$.$w$ - window.Math.max($contentWidth_i$$150$$, 
    $sectionDim$$1_titleDim$$1$$.$w$) : $availSpace$$6_textSpace$$.x, $availSpace$$6_textSpace$$.y, window.Math.max($contentWidth_i$$150$$, $sectionDim$$1_titleDim$$1$$.$w$), $contentHeight_numItems$$ + $sectionDim$$1_titleDim$$1$$.$h$);
    if($currRow_options$$24$$.isLayout) {
      return $sectionDim$$1_titleDim$$1$$
    }
    if(0 == $numRows$$ || 0 == $isScrollable$$1_numCols$$) {
      return new D.$DvtRectangle$$($isRTL$$2$$ ? $availSpace$$6_textSpace$$.x + $availSpace$$6_textSpace$$.$w$ : $availSpace$$6_textSpace$$.x, $availSpace$$6_textSpace$$.y, 0, 0)
    }
    $availSpace$$6_textSpace$$ = $colWidth_legendInfo$$ - $currRow_options$$24$$.symbolWidth - $currCol_symbolGap$$;
    $currRow_options$$24$$ = 0;
    $currCol_symbolGap$$ = 1;
    $contentHeight_numItems$$ = $section$$2$$.items.length;
    for($contentWidth_i$$150$$ = 0;$contentWidth_i$$150$$ < $contentHeight_numItems$$;$contentWidth_i$$150$$++) {
      D.$DvtLegendRenderer$$.$_createLegendItem$($legend$$9$$, $container$$7$$, $section$$2$$.items[$contentWidth_i$$150$$], $sectionSpace$$, $availSpace$$6_textSpace$$, $rowHeight$$4$$, $contentWidth_i$$150$$), $sectionSpace$$.y += $rowHeight$$4$$ + $rowGap$$, $currRow_options$$24$$++, $currRow_options$$24$$ === $numRows$$ && $currCol_symbolGap$$ !== $isScrollable$$1_numCols$$ && ($sectionSpace$$.y = $colInitY$$, $sectionSpace$$.$w$ -= $colWidth_legendInfo$$ + $colGap$$, $isRTL$$2$$ || ($sectionSpace$$.x += 
      $colWidth_legendInfo$$ + $colGap$$), $currRow_options$$24$$ = 0, $currCol_symbolGap$$++)
    }
    return $sectionDim$$1_titleDim$$1$$
  }
};
D.$DvtLegendRenderer$$.$_renderHorizontalSection$ = function $$DvtLegendRenderer$$$$_renderHorizontalSection$$($legend$$10$$, $container$$8$$, $section$$3$$, $availSpace$$7_colWidth$$1$$, $rowHeight$$5$$) {
  if($section$$3$$) {
    var $options$$25$$ = $legend$$10$$.$__getOptions$(), $symbolWidth$$ = $options$$25$$.symbolWidth, $symbolGap$$1$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($options$$25$$, $options$$25$$.layout.symbolGapWidth), $colGap$$1$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($options$$25$$, $options$$25$$.layout.columnGap), $numItems$$1$$ = $section$$3$$.items.length, $isRTL$$3$$ = (0,D.$DvtAgent$isRightToLeft$$)($legend$$10$$.$_context$), $sectionSpace$$1$$ = $availSpace$$7_colWidth$$1$$.clone(), $sectionDim$$2_titleDim$$2$$ = 
    D.$DvtLegendRenderer$$.$_renderTitle$($legend$$10$$, $container$$8$$, $section$$3$$.title, $availSpace$$7_colWidth$$1$$, $section$$3$$, D.$JSCompiler_alias_TRUE$$);
    if($section$$3$$.items) {
      0 < $sectionDim$$2_titleDim$$2$$.$w$ && ($sectionSpace$$1$$.$w$ -= $sectionDim$$2_titleDim$$2$$.$w$ + $colGap$$1$$, $isRTL$$3$$ || ($sectionSpace$$1$$.x += $sectionDim$$2_titleDim$$2$$.$w$ + $colGap$$1$$))
    }else {
      return $sectionDim$$2_titleDim$$2$$
    }
    var $textWidths$$ = [], $totalWidth$$2$$ = $availSpace$$7_colWidth$$1$$.$w$ - $sectionSpace$$1$$.$w$, $item$$5_textWidth$$, $i$$151$$;
    for($i$$151$$ = 0;$i$$151$$ < $numItems$$1$$;$i$$151$$++) {
      $item$$5_textWidth$$ = $section$$3$$.items[$i$$151$$], $item$$5_textWidth$$ = window.Math.ceil(D.$DvtLegendRenderer$$.$_getTextWidth$($legend$$10$$, $item$$5_textWidth$$.text)), $totalWidth$$2$$ += $item$$5_textWidth$$ + $symbolWidth$$ + $symbolGap$$1$$ + $colGap$$1$$, $textWidths$$.push($item$$5_textWidth$$)
    }
    0 < $numItems$$1$$ && ($totalWidth$$2$$ -= $colGap$$1$$);
    $sectionDim$$2_titleDim$$2$$ = new D.$DvtRectangle$$($isRTL$$3$$ ? $availSpace$$7_colWidth$$1$$.x + $availSpace$$7_colWidth$$1$$.$w$ - $totalWidth$$2$$ : $availSpace$$7_colWidth$$1$$.x, $availSpace$$7_colWidth$$1$$.y, $totalWidth$$2$$, window.Math.max($rowHeight$$5$$, $sectionDim$$2_titleDim$$2$$.$h$));
    if($options$$25$$.isLayout || $totalWidth$$2$$ > $availSpace$$7_colWidth$$1$$.$w$) {
      return $sectionDim$$2_titleDim$$2$$
    }
    for($i$$151$$ = 0;$i$$151$$ < $numItems$$1$$;$i$$151$$++) {
      $item$$5_textWidth$$ = $section$$3$$.items[$i$$151$$], D.$DvtLegendRenderer$$.$_createLegendItem$($legend$$10$$, $container$$8$$, $item$$5_textWidth$$, $sectionSpace$$1$$, $textWidths$$[$i$$151$$], $rowHeight$$5$$, $i$$151$$), $availSpace$$7_colWidth$$1$$ = $textWidths$$[$i$$151$$] + $symbolWidth$$ + $symbolGap$$1$$, $sectionSpace$$1$$.$w$ -= $availSpace$$7_colWidth$$1$$ + $colGap$$1$$, $isRTL$$3$$ || ($sectionSpace$$1$$.x += $availSpace$$7_colWidth$$1$$ + $colGap$$1$$)
    }
    return $sectionDim$$2_titleDim$$2$$
  }
};
D.$DvtLegendRenderer$$.$_calcColumns$ = function $$DvtLegendRenderer$$$$_calcColumns$$($legend$$11_symbolWidth$$1$$, $availSpace$$8_colWidth$$2$$, $numRows$$1_rowHeight$$6$$, $items$$2$$, $isScrollable$$2_numCols$$1$$) {
  for(var $fullColWidth_options$$26$$ = $legend$$11_symbolWidth$$1$$.$__getOptions$(), $textWidth$$1$$ = 0, $colGap$$2_i$$152$$ = 0;$colGap$$2_i$$152$$ < $items$$2$$.length;$colGap$$2_i$$152$$++) {
    var $rowGap$$1_tempWidth$$ = D.$DvtLegendRenderer$$.$_getTextWidth$($legend$$11_symbolWidth$$1$$, $items$$2$$[$colGap$$2_i$$152$$].text);
    $rowGap$$1_tempWidth$$ > $textWidth$$1$$ && ($textWidth$$1$$ = $rowGap$$1_tempWidth$$)
  }
  $legend$$11_symbolWidth$$1$$ = $fullColWidth_options$$26$$.symbolWidth;
  $rowGap$$1_tempWidth$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($fullColWidth_options$$26$$, $fullColWidth_options$$26$$.layout.rowGap);
  $colGap$$2_i$$152$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($fullColWidth_options$$26$$, $fullColWidth_options$$26$$.layout.columnGap);
  $fullColWidth_options$$26$$ = window.Math.ceil($legend$$11_symbolWidth$$1$$ + (0,D.$DvtLegendDefaults$getGapSize$$)($fullColWidth_options$$26$$, $fullColWidth_options$$26$$.layout.symbolGapWidth) + $textWidth$$1$$);
  $isScrollable$$2_numCols$$1$$ ? ($isScrollable$$2_numCols$$1$$ = 1, $numRows$$1_rowHeight$$6$$ = $items$$2$$.length) : ($numRows$$1_rowHeight$$6$$ = window.Math.min(window.Math.floor(($availSpace$$8_colWidth$$2$$.$h$ + $rowGap$$1_tempWidth$$) / ($numRows$$1_rowHeight$$6$$ + $rowGap$$1_tempWidth$$)), $items$$2$$.length), $isScrollable$$2_numCols$$1$$ = window.Math.ceil($items$$2$$.length / $numRows$$1_rowHeight$$6$$), $numRows$$1_rowHeight$$6$$ = window.Math.ceil($items$$2$$.length / $isScrollable$$2_numCols$$1$$));
  $availSpace$$8_colWidth$$2$$ = window.Math.min($fullColWidth_options$$26$$, ($availSpace$$8_colWidth$$2$$.$w$ - $colGap$$2_i$$152$$ * ($isScrollable$$2_numCols$$1$$ - 1)) / $isScrollable$$2_numCols$$1$$);
  return $availSpace$$8_colWidth$$2$$ < $legend$$11_symbolWidth$$1$$ ? {width:0, numCols:0, numRows:0} : {width:$availSpace$$8_colWidth$$2$$, numCols:$isScrollable$$2_numCols$$1$$, numRows:$numRows$$1_rowHeight$$6$$}
};
D.$DvtLegendRenderer$$.$_getRowHeight$ = function $$DvtLegendRenderer$$$$_getRowHeight$$($legend$$12_text$$20_textHeight$$) {
  var $options$$27$$ = $legend$$12_text$$20_textHeight$$.$__getOptions$();
  $legend$$12_text$$20_textHeight$$ = new D.$DvtOutputText$$($legend$$12_text$$20_textHeight$$.$_context$, "Test");
  $legend$$12_text$$20_textHeight$$.$setCSSStyle$($options$$27$$.textStyle);
  $legend$$12_text$$20_textHeight$$.$alignMiddle$();
  $legend$$12_text$$20_textHeight$$ = D.$DvtTextUtils$$.$guessTextDimensions$($legend$$12_text$$20_textHeight$$).$h$;
  return window.Math.ceil(window.Math.max($legend$$12_text$$20_textHeight$$, $options$$27$$.symbolHeight + (0,D.$DvtLegendDefaults$getGapSize$$)($options$$27$$, $options$$27$$.layout.symbolGapHeight)))
};
D.$DvtLegendRenderer$$.$_getTextWidth$ = function $$DvtLegendRenderer$$$$_getTextWidth$$($legend$$13$$, $label$$4$$) {
  var $options$$28$$ = $legend$$13$$.$__getOptions$(), $text$$21$$ = new D.$DvtOutputText$$($legend$$13$$.$_context$, $label$$4$$);
  $text$$21$$.$setCSSStyle$($options$$28$$.textStyle);
  return $text$$21$$.$measureDimensions$().$w$
};
D.$DvtLegendRenderer$$.$_createLegendItem$ = function $$DvtLegendRenderer$$$$_createLegendItem$$($legend$$14$$, $container$$9_displayables$$inline_2262$$, $item$$7$$, $availSpace$$9_itemRect$$, $i$$inline_2267_textSpace$$1$$, $rowHeight$$7$$, $i$$153_marker$$1$$) {
  var $options$$29$$ = $legend$$14$$.$__getOptions$(), $context$$70$$ = $legend$$14$$.$_context$, $isRTL$$4$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$70$$), $symbolWidth$$2$$ = $options$$29$$.symbolWidth, $symbolGap$$3$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($options$$29$$, $options$$29$$.layout.symbolGapWidth), $colGap$$3$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($options$$29$$, $options$$29$$.layout.columnGap), $symbolX$$ = $isRTL$$4$$ ? $availSpace$$9_itemRect$$.x + $availSpace$$9_itemRect$$.$w$ - 
  $symbolWidth$$2$$ : $availSpace$$9_itemRect$$.x, $textX$$ = $isRTL$$4$$ ? $availSpace$$9_itemRect$$.x + $availSpace$$9_itemRect$$.$w$ - $symbolWidth$$2$$ - $symbolGap$$3$$ : $availSpace$$9_itemRect$$.x + $symbolWidth$$2$$ + $symbolGap$$3$$;
  $i$$153_marker$$1$$ = D.$DvtLegendRenderer$$.$_createLegendSymbol$($legend$$14$$, $symbolX$$, $availSpace$$9_itemRect$$.y, $rowHeight$$7$$, $item$$7$$, $i$$153_marker$$1$$);
  var $label$$5$$ = $item$$7$$.text, $identObj$$inline_2266_peer_text$$22$$;
  if($label$$5$$ && ($identObj$$inline_2266_peer_text$$22$$ = D.$DvtLegendRenderer$$.$_createLegendText$($container$$9_displayables$$inline_2262$$, $i$$inline_2267_textSpace$$1$$, $label$$5$$, $options$$29$$.textStyle))) {
    $identObj$$inline_2266_peer_text$$22$$.$setX$($textX$$), $identObj$$inline_2266_peer_text$$22$$.$setY$($availSpace$$9_itemRect$$.y + $rowHeight$$7$$ / 2), $isRTL$$4$$ && $identObj$$inline_2266_peer_text$$22$$.$alignRight$()
  }
  $container$$9_displayables$$inline_2262$$.$addChild$($i$$153_marker$$1$$);
  $availSpace$$9_itemRect$$ = new D.$DvtRect$$($context$$70$$, $isRTL$$4$$ ? $textX$$ - $i$$inline_2267_textSpace$$1$$ - $colGap$$3$$ / 2 : $symbolX$$ - $colGap$$3$$ / 2, $availSpace$$9_itemRect$$.y, $symbolWidth$$2$$ + $symbolGap$$3$$ + $i$$inline_2267_textSpace$$1$$ + $colGap$$3$$, $rowHeight$$7$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($availSpace$$9_itemRect$$);
  $container$$9_displayables$$inline_2262$$.$addChild$($availSpace$$9_itemRect$$);
  $container$$9_displayables$$inline_2262$$ = [$availSpace$$9_itemRect$$, $i$$153_marker$$1$$, $identObj$$inline_2266_peer_text$$22$$];
  if(!$container$$9_displayables$$inline_2262$$ || !$item$$7$$) {
    $identObj$$inline_2266_peer_text$$22$$ = D.$JSCompiler_alias_NULL$$
  }else {
    $identObj$$inline_2266_peer_text$$22$$ = new D.$DvtLegendObjPeer$$($legend$$14$$, $container$$9_displayables$$inline_2262$$, $item$$7$$, $identObj$$inline_2266_peer_text$$22$$ != D.$JSCompiler_alias_NULL$$ ? $identObj$$inline_2266_peer_text$$22$$.$_untruncatedTextString$ : D.$JSCompiler_alias_NULL$$);
    $legend$$14$$.$_peers$.push($identObj$$inline_2266_peer_text$$22$$);
    for($i$$inline_2267_textSpace$$1$$ = 0;$i$$inline_2267_textSpace$$1$$ < $container$$9_displayables$$inline_2262$$.length;$i$$inline_2267_textSpace$$1$$++) {
      $legend$$14$$.$__getEventManager$().$associate$($container$$9_displayables$$inline_2262$$[$i$$inline_2267_textSpace$$1$$], $identObj$$inline_2266_peer_text$$22$$)
    }
  }
  "hidden" == $item$$7$$.categoryVisibility && $identObj$$inline_2266_peer_text$$22$$ && $i$$153_marker$$1$$.$setHollow$($identObj$$inline_2266_peer_text$$22$$.$getColor$());
  "none" != $legend$$14$$.$__getOptions$().hideAndShowBehavior && ($availSpace$$9_itemRect$$.$setAriaRole$("img"), $identObj$$inline_2266_peer_text$$22$$.$UpdateAriaLabel$($availSpace$$9_itemRect$$))
};
D.$DvtLegendRenderer$$.$_createLegendText$ = function $$DvtLegendRenderer$$$$_createLegendText$$($container$$10$$, $textSpace$$2$$, $label$$6_text$$23$$, $style$$9$$) {
  $label$$6_text$$23$$ = new D.$DvtOutputText$$($container$$10$$.$_context$, $label$$6_text$$23$$);
  $label$$6_text$$23$$.$alignMiddle$();
  $label$$6_text$$23$$.$setCSSStyle$($style$$9$$);
  return $label$$6_text$$23$$ = D.$DvtTextUtils$$.$fitText$($label$$6_text$$23$$, $textSpace$$2$$, window.Infinity, $container$$10$$) ? $label$$6_text$$23$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtLegendRenderer$$.$_createLegendSymbol$ = function $$DvtLegendRenderer$$$$_createLegendSymbol$$($legend$$15$$, $x$$84$$, $y$$64$$, $rowHeight$$8$$, $item$$8$$, $i$$154_symbolWidth$$3$$) {
  var $legendOptions$$2_markerSize$$ = $legend$$15$$.$__getOptions$();
  $item$$8$$.markerShape || ($item$$8$$.markerShape = $legendOptions$$2_markerSize$$.markerShape);
  if(!$item$$8$$.color) {
    var $colorRamp_symbol$$2_symbolType$$ = $legendOptions$$2_markerSize$$.colors;
    $item$$8$$.color = $colorRamp_symbol$$2_symbolType$$[$i$$154_symbolWidth$$3$$ % $colorRamp_symbol$$2_symbolType$$.length]
  }
  $item$$8$$.lineWidth || ($item$$8$$.lineWidth = $legendOptions$$2_markerSize$$.lineWidth);
  $i$$154_symbolWidth$$3$$ = $legendOptions$$2_markerSize$$.symbolWidth;
  $legendOptions$$2_markerSize$$ = window.Math.min($i$$154_symbolWidth$$3$$, $legendOptions$$2_markerSize$$.symbolHeight);
  $colorRamp_symbol$$2_symbolType$$ = $item$$8$$.type != D.$JSCompiler_alias_NULL$$ ? $item$$8$$.type : $item$$8$$.symbolType;
  "line" == $colorRamp_symbol$$2_symbolType$$ ? ($item$$8$$.lineWidth = window.Math.min($item$$8$$.lineWidth, D.$DvtLegendRenderer$$.$_MAX_LINE_WIDTH$), $colorRamp_symbol$$2_symbolType$$ = D.$DvtLegendRenderer$$.$_createLine$($legend$$15$$.$_context$, $x$$84$$, $y$$64$$, $i$$154_symbolWidth$$3$$, $rowHeight$$8$$, $item$$8$$)) : "lineWithMarker" == $colorRamp_symbol$$2_symbolType$$ ? ($item$$8$$.lineWidth = window.Math.min($item$$8$$.lineWidth, D.$DvtLegendRenderer$$.$_MAX_LINE_WIDTH_WITH_MARKER$), 
  $colorRamp_symbol$$2_symbolType$$ = D.$DvtLegendRenderer$$.$_createLine$($legend$$15$$.$_context$, $x$$84$$, $y$$64$$, $i$$154_symbolWidth$$3$$, $rowHeight$$8$$, $item$$8$$), "hidden" != $item$$8$$.categoryVisibility && $colorRamp_symbol$$2_symbolType$$.$addChild$(D.$DvtLegendRenderer$$.$_createMarker$($legend$$15$$, $x$$84$$, $y$$64$$, $i$$154_symbolWidth$$3$$, $rowHeight$$8$$, $legendOptions$$2_markerSize$$ * D.$DvtLegendRenderer$$.$_LINE_MARKER_SIZE_FACTOR$, $item$$8$$))) : $colorRamp_symbol$$2_symbolType$$ = 
  D.$DvtLegendRenderer$$.$_createMarker$($legend$$15$$, $x$$84$$, $y$$64$$, $i$$154_symbolWidth$$3$$, $rowHeight$$8$$, $legendOptions$$2_markerSize$$, $item$$8$$);
  return $colorRamp_symbol$$2_symbolType$$
};
D.$DvtLegendRenderer$$.$_createMarker$ = function $$DvtLegendRenderer$$$$_createMarker$$($legend$$16_shape$$7$$, $markerX_x$$85$$, $markerY_y$$65$$, $colWidth$$3$$, $rowHeight$$9$$, $legendMarker_markerSize$$1$$, $item$$9$$) {
  var $context$$71$$ = $legend$$16_shape$$7$$.$_context$, $legendOptions$$3$$ = $legend$$16_shape$$7$$.$__getOptions$();
  $legend$$16_shape$$7$$ = $item$$9$$.markerShape;
  var $color$$8$$ = $item$$9$$.markerColor ? $item$$9$$.markerColor : $item$$9$$.color, $pattern$$1$$ = $item$$9$$.pattern;
  $markerY_y$$65$$ += ($rowHeight$$9$$ - $legendMarker_markerSize$$1$$) / 2;
  $markerX_x$$85$$ += ($colWidth$$3$$ - $legendMarker_markerSize$$1$$) / 2;
  $pattern$$1$$ ? ($legendMarker_markerSize$$1$$ = new D.$DvtMarker$$($context$$71$$, $legend$$16_shape$$7$$, $legendOptions$$3$$.skin, 0, 0, $legendMarker_markerSize$$1$$, $legendMarker_markerSize$$1$$), $legendMarker_markerSize$$1$$.$setFill$(new D.$DvtPatternFill$$($pattern$$1$$, $color$$8$$, "#FFFFFF")), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($legendMarker_markerSize$$1$$, $markerX_x$$85$$, $markerY_y$$65$$)) : ($legendMarker_markerSize$$1$$ = new D.$DvtMarker$$($context$$71$$, $legend$$16_shape$$7$$, 
  $legendOptions$$3$$.skin, $markerX_x$$85$$, $markerY_y$$65$$, $legendMarker_markerSize$$1$$, $legendMarker_markerSize$$1$$), $legendMarker_markerSize$$1$$.$setSolidFill$($color$$8$$));
  $item$$9$$.borderColor && $legendMarker_markerSize$$1$$.$setSolidStroke$($item$$9$$.borderColor, D.$JSCompiler_alias_NULL$$, $item$$9$$._borderWidth ? $item$$9$$._borderWidth : 1);
  "square" == $legend$$16_shape$$7$$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($legendMarker_markerSize$$1$$);
  return $legendMarker_markerSize$$1$$
};
D.$DvtLegendRenderer$$.$_createLine$ = function $$DvtLegendRenderer$$$$_createLine$$($context$$72_line$$5$$, $stroke$$20_x$$86$$, $lineY_y$$66$$, $colWidth$$4$$, $rowHeight$$10$$, $item$$10_style$$10$$) {
  $lineY_y$$66$$ += $rowHeight$$10$$ / 2;
  $context$$72_line$$5$$ = new D.$DvtLine$$($context$$72_line$$5$$, $stroke$$20_x$$86$$, $lineY_y$$66$$, $stroke$$20_x$$86$$ + $colWidth$$4$$, $lineY_y$$66$$);
  $stroke$$20_x$$86$$ = new D.$DvtSolidStroke$$($item$$10_style$$10$$.color, 1, $item$$10_style$$10$$.lineWidth);
  $item$$10_style$$10$$ = $item$$10_style$$10$$.lineStyle;
  "dashed" == $item$$10_style$$10$$ ? $stroke$$20_x$$86$$.$setType$((0,D.$DvtStroke$convertTypeString$$)($item$$10_style$$10$$), "4,2,4") : "dotted" == $item$$10_style$$10$$ && $stroke$$20_x$$86$$.$setType$((0,D.$DvtStroke$convertTypeString$$)($item$$10_style$$10$$), "2");
  $context$$72_line$$5$$.$setStroke$($stroke$$20_x$$86$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($context$$72_line$$5$$);
  return $context$$72_line$$5$$
};
});