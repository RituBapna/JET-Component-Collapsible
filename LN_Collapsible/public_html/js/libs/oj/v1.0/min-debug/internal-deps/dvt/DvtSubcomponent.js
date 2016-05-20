define(['./DvtToolkit'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtAttrGroups$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtAttrGroups$$, D.$DvtObj$$, "DvtAttrGroups");
D.$DvtAttrGroups$$.prototype.get = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtDiscreteAttrGroups$$ = function $$DvtDiscreteAttrGroups$$$() {
  this.$_results$ = []
};
D.$DvtObj$$.$createSubclass$(D.$DvtDiscreteAttrGroups$$, D.$DvtAttrGroups$$, "DvtDiscreteAttrGroups");
D.$DvtDiscreteAttrGroups$$.prototype.add = function $$DvtDiscreteAttrGroups$$$$add$($group$$29$$, $groupLabel$$2$$, $params$$60$$) {
  this.$_results$.push({group:$group$$29$$, $groupLabel$:$groupLabel$$2$$, $params$:$params$$60$$})
};
D.$DvtDiscreteAttrGroups$$.prototype.get = function $$DvtDiscreteAttrGroups$$$$get$($group$$30$$) {
  if(window.value === D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  for(var $i$$612$$ = 0;$i$$612$$ < this.$_results$.length;$i$$612$$++) {
    if(this.$_results$[$i$$612$$].group == $group$$30$$) {
      return this.$_results$[$i$$612$$].$params$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtContinuousAttrGroups$$ = function $$DvtContinuousAttrGroups$$$($minValue$$15$$, $maxValue$$16$$, $minLabel$$3$$, $maxLabel$$3$$, $ramp$$2$$) {
  this.$_minValue$ = $minValue$$15$$;
  this.$_maxValue$ = $maxValue$$16$$;
  this.$_minLabel$ = $minLabel$$3$$ ? $minLabel$$3$$ : this.$_minValue$;
  this.$_maxLabel$ = $maxLabel$$3$$ ? $maxLabel$$3$$ : this.$_maxValue$;
  this.$_ramp$ = $ramp$$2$$;
  this.$_range$ = this.$_maxValue$ - this.$_minValue$
};
D.$DvtObj$$.$createSubclass$(D.$DvtContinuousAttrGroups$$, D.$DvtAttrGroups$$, "DvtContinuousAttrGroups");
D.$DvtContinuousAttrGroups$$.prototype.get = function $$DvtContinuousAttrGroups$$$$get$($index$$155_ratio$$7_value$$124$$) {
  if((0,window.isNaN)($index$$155_ratio$$7_value$$124$$) || $index$$155_ratio$$7_value$$124$$ === D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $index$$155_ratio$$7_value$$124$$ = 0 < this.$_range$ ? ($index$$155_ratio$$7_value$$124$$ - this.$_minValue$) / this.$_range$ : 0.5;
  $index$$155_ratio$$7_value$$124$$ = window.Math.max(window.Math.min($index$$155_ratio$$7_value$$124$$, 1), 0);
  $index$$155_ratio$$7_value$$124$$ *= this.$_ramp$.length - 1;
  return $index$$155_ratio$$7_value$$124$$ === window.Math.round($index$$155_ratio$$7_value$$124$$) ? this.$_ramp$[$index$$155_ratio$$7_value$$124$$] : D.$DvtColorUtils$$.$interpolateColor$(this.$_ramp$[window.Math.floor($index$$155_ratio$$7_value$$124$$)], this.$_ramp$[window.Math.ceil($index$$155_ratio$$7_value$$124$$)], $index$$155_ratio$$7_value$$124$$ - window.Math.floor($index$$155_ratio$$7_value$$124$$))
};
D.$DvtContinuousAttrGroups$$.prototype.$getMinLabel$ = (0,D.$JSCompiler_get$$)("$_minLabel$");
D.$DvtLegendAttrGroupsRenderer$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtLegendAttrGroupsRenderer$$, D.$DvtObj$$, "DvtLegendAttrGroupsRenderer");
D.$DvtLegendAttrGroupsRenderer$$.$_LEGEND_MAX_HEIGHT$ = 0.4;
D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_GROUP_GAP$ = 1;
D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_WIDTH$ = 50;
D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_HEIGHT$ = 10;
D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_GAP$ = 5;
D.$DvtLegendAttrGroupsRenderer$$.$_LABEL_SIZE$ = 11;
D.$DvtLegendAttrGroupsRenderer$$.$_LABEL_COLOR$ = "#636363";
D.$DvtLegendAttrGroupsRenderer$$.$_LABEL_VALUE_COLOR$ = "#333333";
D.$DvtLegendAttrGroupsRenderer$$.$renderAttrGroups$ = function $$DvtLegendAttrGroupsRenderer$$$$renderAttrGroups$$($context$$213$$, $eventManager$$6$$, $container$$34$$, $availWidth$$6$$, $availHeight$$4$$, $attrGroups$$8$$, $styles$$15$$) {
  var $colorContainer$$1$$ = D.$JSCompiler_alias_NULL$$;
  $attrGroups$$8$$ && ($attrGroups$$8$$ instanceof D.$DvtContinuousAttrGroups$$ ? $colorContainer$$1$$ = D.$DvtLegendAttrGroupsRenderer$$.$_renderAttrGroupsContinuous$($context$$213$$, $eventManager$$6$$, $container$$34$$, $availWidth$$6$$, $attrGroups$$8$$, $styles$$15$$) : $attrGroups$$8$$ instanceof D.$DvtDiscreteAttrGroups$$ && ($colorContainer$$1$$ = D.$DvtLegendAttrGroupsRenderer$$.$_renderAttrGroupsDiscrete$($context$$213$$, $container$$34$$, $availWidth$$6$$, $availHeight$$4$$, $attrGroups$$8$$, 
  $styles$$15$$)));
  return $colorContainer$$1$$
};
D.$DvtLegendAttrGroupsRenderer$$.$_renderAttrGroupsContinuous$ = function $$DvtLegendAttrGroupsRenderer$$$$_renderAttrGroupsContinuous$$($context$$214_maxLabel$$1$$, $eventManager$$7$$, $container$$35_minLabelStr$$, $availWidth$$7$$, $attrGroups$$9_maxLabelStr$$, $maxLabelWidth$$1_minLabelWidth_styles$$16$$) {
  var $isRTL$$15$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$214_maxLabel$$1$$), $labelY$$2$$ = D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_HEIGHT$ / 2 + D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_GROUP_GAP$, $colorContainer$$2$$ = new D.$DvtContainer$$($context$$214_maxLabel$$1$$);
  $container$$35_minLabelStr$$.$addChild$($colorContainer$$2$$);
  $container$$35_minLabelStr$$ = $attrGroups$$9_maxLabelStr$$.$getMinLabel$();
  var $minLabel$$1$$ = new D.$DvtOutputText$$($context$$214_maxLabel$$1$$, $container$$35_minLabelStr$$, 0, $labelY$$2$$);
  $minLabel$$1$$.$setCSSStyle$($maxLabelWidth$$1_minLabelWidth_styles$$16$$.$labelStyle$);
  $minLabel$$1$$.$alignMiddle$();
  $colorContainer$$2$$.$addChild$($minLabel$$1$$);
  var $gradientRect$$ = new D.$DvtRect$$($context$$214_maxLabel$$1$$, 0, D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_GROUP_GAP$, D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_WIDTH$, D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_HEIGHT$), $gradientWidth_ramp$$1$$ = $isRTL$$15$$ ? $attrGroups$$9_maxLabelStr$$.$_ramp$.slice(0).slice().reverse() : $attrGroups$$9_maxLabelStr$$.$_ramp$.slice(0);
  $gradientRect$$.$setFill$(new D.$DvtLinearGradientFill$$(0, $gradientWidth_ramp$$1$$));
  $maxLabelWidth$$1_minLabelWidth_styles$$16$$.borderColor && $gradientRect$$.$setSolidStroke$($maxLabelWidth$$1_minLabelWidth_styles$$16$$.borderColor);
  $colorContainer$$2$$.$addChild$($gradientRect$$);
  $gradientWidth_ramp$$1$$ = D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_WIDTH$ + D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_GAP$;
  $attrGroups$$9_maxLabelStr$$ = $attrGroups$$9_maxLabelStr$$.$_maxLabel$;
  $context$$214_maxLabel$$1$$ = new D.$DvtOutputText$$($context$$214_maxLabel$$1$$, $attrGroups$$9_maxLabelStr$$, 0, $labelY$$2$$);
  $context$$214_maxLabel$$1$$.$setCSSStyle$($maxLabelWidth$$1_minLabelWidth_styles$$16$$.$labelStyle$);
  $context$$214_maxLabel$$1$$.$alignMiddle$();
  $colorContainer$$2$$.$addChild$($context$$214_maxLabel$$1$$);
  $isRTL$$15$$ ? ($maxLabelWidth$$1_minLabelWidth_styles$$16$$ = $context$$214_maxLabel$$1$$.$measureDimensions$().$w$ + D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_GAP$, $gradientRect$$.$setTranslateX$($maxLabelWidth$$1_minLabelWidth_styles$$16$$), $minLabel$$1$$.$setX$($maxLabelWidth$$1_minLabelWidth_styles$$16$$ + $gradientWidth_ramp$$1$$)) : ($maxLabelWidth$$1_minLabelWidth_styles$$16$$ = $minLabel$$1$$.$measureDimensions$().$w$ + D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_GAP$, 
  $gradientRect$$.$setTranslateX$($maxLabelWidth$$1_minLabelWidth_styles$$16$$), $context$$214_maxLabel$$1$$.$setX$($maxLabelWidth$$1_minLabelWidth_styles$$16$$ + $gradientWidth_ramp$$1$$));
  $eventManager$$7$$.$associate$($gradientRect$$, new D.$DvtSimpleObjPeer$$($container$$35_minLabelStr$$ + " - " + $attrGroups$$9_maxLabelStr$$));
  $colorContainer$$2$$.$getDimensions$().$w$ > $availWidth$$7$$ && ($colorContainer$$2$$.removeChild($minLabel$$1$$), $colorContainer$$2$$.removeChild($context$$214_maxLabel$$1$$), $gradientRect$$.$setTranslateX$(0));
  return $colorContainer$$2$$
};
D.$DvtLegendAttrGroupsRenderer$$.$_renderAttrGroupsDiscrete$ = function $$DvtLegendAttrGroupsRenderer$$$$_renderAttrGroupsDiscrete$$($context$$215_rect$$22$$, $container$$36_preferredDims$$, $actualDims_availWidth$$8$$, $availHeight$$6$$, $attrGroups$$10_mappings$$, $component$$14_styles$$17$$) {
  var $items$$14_legendOptions$$4$$ = [];
  $attrGroups$$10_mappings$$ = $attrGroups$$10_mappings$$.$_results$.slice(0);
  for(var $i$$392$$ = 0;$i$$392$$ < $attrGroups$$10_mappings$$.length;$i$$392$$++) {
    var $mapping$$4$$ = $attrGroups$$10_mappings$$[$i$$392$$];
    $items$$14_legendOptions$$4$$.push({text:$mapping$$4$$.$groupLabel$, color:$mapping$$4$$.$params$.color, pattern:$mapping$$4$$.$params$.pattern, borderColor:$component$$14_styles$$17$$.borderColor})
  }
  $items$$14_legendOptions$$4$$ = {sections:[{items:$items$$14_legendOptions$$4$$}], orientation:"horizontal", layout:{outerGapWidth:0, outerGapHeight:0}, textStyle:$component$$14_styles$$17$$.$labelStyle$.toString()};
  $component$$14_styles$$17$$ = (0,D.$DvtLegend$newInstance$$)($context$$215_rect$$22$$);
  $component$$14_styles$$17$$.setId(D.$JSCompiler_alias_NULL$$);
  $container$$36_preferredDims$$.$addChild$($component$$14_styles$$17$$);
  $container$$36_preferredDims$$ = $component$$14_styles$$17$$.$getPreferredSize$($items$$14_legendOptions$$4$$, $actualDims_availWidth$$8$$, $availHeight$$6$$ * D.$DvtLegendAttrGroupsRenderer$$.$_LEGEND_MAX_HEIGHT$);
  $component$$14_styles$$17$$.$render$($items$$14_legendOptions$$4$$, $actualDims_availWidth$$8$$, $container$$36_preferredDims$$.$h$);
  $actualDims_availWidth$$8$$ = $component$$14_styles$$17$$.$getDimensions$();
  $context$$215_rect$$22$$ = new D.$DvtRect$$($context$$215_rect$$22$$, 0, 0, $actualDims_availWidth$$8$$.$w$, $container$$36_preferredDims$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($context$$215_rect$$22$$);
  $component$$14_styles$$17$$.$addChildAt$($context$$215_rect$$22$$, 0);
  return $component$$14_styles$$17$$
};
D.$DvtBreadcrumbsDrillEvent$$ = function $$DvtBreadcrumbsDrillEvent$$$($id$$169$$) {
  this.Init("breadcrumbsDrill");
  this.$_id$ = $id$$169$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbsDrillEvent$$, D.$DvtBaseComponentEvent$$, "DvtBreadcrumbsDrillEvent");
D.$DvtBreadcrumbsDrillEvent$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtBreadcrumbs$$ = function $$DvtBreadcrumbs$$$($context$$415$$, $callback$$113$$, $callbackObj$$76$$, $options$$233$$) {
  this.Init($context$$415$$, $callback$$113$$, $callbackObj$$76$$, $options$$233$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbs$$, D.$DvtContainer$$, "DvtBreadcrumbs");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBreadcrumbs$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$416$$, $callback$$114$$, $callbackObj$$77$$, $options$$234$$) {
  D.$DvtBreadcrumbs$$.$superclass$.Init.call(this, $context$$416$$);
  this.$setOptions$($options$$234$$);
  this.$_eventHandler$ = new D.$DvtBreadcrumbsEventManager$$(this, $context$$416$$, $callback$$114$$, $callbackObj$$77$$);
  this.$_eventHandler$.$addListeners$(this);
  this.setId("breadcrumbs1000" + window.Math.floor(1E9 * window.Math.random()));
  this.$_curCrumbIdx$ = -1;
  this.$_crumbs$ = this.$_keyboardFocusRect$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setOptions$ = function $$JSCompiler_prototypeAlias$$$$setOptions$$($options$$235$$) {
  this.$_options$ = D.$DvtBreadcrumbsDefaults$$.$calcOptions$($options$$235$$)
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($data$$95$$, $width$$140$$) {
  this.$_data$ = $data$$95$$ ? D.$DvtJSONUtils$$.clone($data$$95$$) : this.$_data$;
  this.$removeChildren$();
  this.$_crumbs$ = D.$JSCompiler_alias_NULL$$;
  D.$DvtBreadcrumbsRenderer$$.$render$(this, this, $width$$140$$)
};
D.$JSCompiler_prototypeAlias$$.$__getOptions$ = (0,D.$JSCompiler_get$$)("$_options$");
D.$JSCompiler_prototypeAlias$$.$getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventHandler$");
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  var $prevCrumbIdx$$ = this.$_curCrumbIdx$;
  this.$_curCrumbIdx$ = -1;
  this.$_updateKeyboardFocusEffect$($prevCrumbIdx$$, this.$_curCrumbIdx$)
};
D.$JSCompiler_prototypeAlias$$.$_updateKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$_updateKeyboardFocusEffect$$($prevIdx$$, $nextIdx$$) {
  var $prevKeyboardFocusRect$$ = this.$_keyboardFocusRect$, $context$$417_nextKeyboardFocusRect$$ = D.$JSCompiler_alias_NULL$$, $matrix$$14_nextCrumbObj$$ = (0,D.$JSCompiler_StaticMethods_getCrumb$$)(this, $nextIdx$$);
  if($matrix$$14_nextCrumbObj$$) {
    var $bounds$$105_peer$$23$$ = this.$_eventHandler$.$GetLogicalObject$($matrix$$14_nextCrumbObj$$);
    $bounds$$105_peer$$23$$ && $bounds$$105_peer$$23$$.$isDrillable$ && $bounds$$105_peer$$23$$.$_bDrillable$ ? ($context$$417_nextKeyboardFocusRect$$ = this.$_context$, $bounds$$105_peer$$23$$ = $matrix$$14_nextCrumbObj$$.$getDimensions$(), $matrix$$14_nextCrumbObj$$ = $matrix$$14_nextCrumbObj$$.$getMatrix$(), this.$_keyboardFocusRect$ = $context$$417_nextKeyboardFocusRect$$ = new D.$DvtKeyboardFocusEffect$$($context$$417_nextKeyboardFocusRect$$, this, $bounds$$105_peer$$23$$, $matrix$$14_nextCrumbObj$$)) : 
    this.$_keyboardFocusRect$ = D.$JSCompiler_alias_NULL$$
  }
  $prevKeyboardFocusRect$$ && $prevKeyboardFocusRect$$.$hide$();
  $context$$417_nextKeyboardFocusRect$$ && $context$$417_nextKeyboardFocusRect$$.show()
};
D.$JSCompiler_StaticMethods_getCrumb$$ = function $$JSCompiler_StaticMethods_getCrumb$$$($JSCompiler_StaticMethods_getCrumb$self$$, $crumbIdx$$) {
  var $crumbs$$ = $JSCompiler_StaticMethods_getCrumb$self$$.$_crumbs$;
  return 0 > $crumbIdx$$ || !$crumbs$$ || $crumbIdx$$ >= $crumbs$$.length ? D.$JSCompiler_alias_NULL$$ : $crumbs$$[$crumbIdx$$]
};
D.$DvtBreadcrumbsDefaults$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbsDefaults$$, D.$DvtObj$$, "DvtBreadcrumbsDefaults");
D.$DvtBreadcrumbsDefaults$$.$VERSION_1$ = {labelStyle:"font-size: 11px; color: #003286;", disabledLabelStyle:"font-size: 11px;", $__labelGap$:2, $__labelSeparator$:"\x3e"};
D.$DvtBreadcrumbsDefaults$$.$calcOptions$ = function $$DvtBreadcrumbsDefaults$$$$calcOptions$$($userOptions$$4$$) {
  var $defaults$$3$$ = D.$DvtBreadcrumbsDefaults$$.$_getDefaults$($userOptions$$4$$);
  return $userOptions$$4$$ ? D.$DvtJSONUtils$$.$merge$($userOptions$$4$$, $defaults$$3$$) : $defaults$$3$$
};
D.$DvtBreadcrumbsDefaults$$.$_getDefaults$ = function $$DvtBreadcrumbsDefaults$$$$_getDefaults$$() {
  return D.$DvtJSONUtils$$.clone(D.$DvtBreadcrumbsDefaults$$.$VERSION_1$)
};
D.$DvtBreadcrumbsDefaults$$.$getGapSize$ = function $$DvtBreadcrumbsDefaults$$$$getGapSize$$($options$$74$$, $defaultSize$$2$$) {
  return window.Math.ceil($defaultSize$$2$$ * $options$$74$$.layout.gapRatio)
};
D.$DvtBreadcrumbsEventManager$$ = function $$DvtBreadcrumbsEventManager$$$($breadcrumbs$$5$$, $context$$219$$, $callback$$79$$, $callbackObj$$42$$) {
  this.Init($context$$219$$, $callback$$79$$, $callbackObj$$42$$);
  this.$_breadcrumbs$ = $breadcrumbs$$5$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbsEventManager$$, D.$DvtEventManager$$, "DvtBreadcrumbsEventManager");
D.$DvtBreadcrumbsEventManager$$.prototype.$OnClick$ = function $$DvtBreadcrumbsEventManager$$$$$OnClick$$($event$$328$$) {
  D.$DvtBreadcrumbsEventManager$$.$superclass$.$OnClick$.call(this, $event$$328$$);
  (0,D.$JSCompiler_StaticMethods__processBreadcrumbs$$)(this, this.$GetLogicalObject$($event$$328$$.target))
};
D.$DvtBreadcrumbsEventManager$$.prototype.$HandleTouchClickInternal$ = function $$DvtBreadcrumbsEventManager$$$$$HandleTouchClickInternal$$($event$$329$$) {
  (0,D.$JSCompiler_StaticMethods__processBreadcrumbs$$)(this, this.$GetLogicalObject$($event$$329$$.target))
};
D.$JSCompiler_StaticMethods__processBreadcrumbs$$ = function $$JSCompiler_StaticMethods__processBreadcrumbs$$$($JSCompiler_StaticMethods__processBreadcrumbs$self$$, $obj$$137$$) {
  if($obj$$137$$ && $obj$$137$$ instanceof D.$DvtBreadcrumbsPeer$$ && $obj$$137$$.$_bDrillable$) {
    var $event$$330$$ = new D.$DvtBreadcrumbsDrillEvent$$($obj$$137$$.getId());
    $JSCompiler_StaticMethods__processBreadcrumbs$self$$.$FireEvent$($event$$330$$, $JSCompiler_StaticMethods__processBreadcrumbs$self$$.$_breadcrumbs$)
  }
};
D.$DvtBreadcrumbsEventManager$$.prototype.$handleKeyboardEvent$ = function $$DvtBreadcrumbsEventManager$$$$$handleKeyboardEvent$$($event$$331$$) {
  var $eventConsumed$$4$$ = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_5014_curCrumbIdx_keyCode$$20$$ = $event$$331$$.keyCode;
  if(9 == $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_5014_curCrumbIdx_keyCode$$20$$) {
    var $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_5014_curCrumbIdx_keyCode$$20$$ = this.$_breadcrumbs$, $prevCrumbIdx$$inline_5016$$ = $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_5014_curCrumbIdx_keyCode$$20$$.$_curCrumbIdx$, $JSCompiler_inline_result$$9063_prevIndex$$inline_10393$$;
    $JSCompiler_inline_result$$9063_prevIndex$$inline_10393$$ = $prevCrumbIdx$$inline_5016$$;
    var $bForward$$inline_10394$$ = !$event$$331$$.shiftKey;
    $JSCompiler_inline_result$$9063_prevIndex$$inline_10393$$ = -1 == $JSCompiler_inline_result$$9063_prevIndex$$inline_10393$$ ? $bForward$$inline_10394$$ ? 0 : $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_5014_curCrumbIdx_keyCode$$20$$.$_data$.$items$.length - 2 : $bForward$$inline_10394$$ ? $JSCompiler_inline_result$$9063_prevIndex$$inline_10393$$ == $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_5014_curCrumbIdx_keyCode$$20$$.$_data$.$items$.length - 2 ? -1 : ++$JSCompiler_inline_result$$9063_prevIndex$$inline_10393$$ : 
    0 == $JSCompiler_inline_result$$9063_prevIndex$$inline_10393$$ ? -1 : --$JSCompiler_inline_result$$9063_prevIndex$$inline_10393$$;
    $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_5014_curCrumbIdx_keyCode$$20$$.$_curCrumbIdx$ = $JSCompiler_inline_result$$9063_prevIndex$$inline_10393$$;
    $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_5014_curCrumbIdx_keyCode$$20$$.$_updateKeyboardFocusEffect$($prevCrumbIdx$$inline_5016$$, $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_5014_curCrumbIdx_keyCode$$20$$.$_curCrumbIdx$);
    $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_5014_curCrumbIdx_keyCode$$20$$ = $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_5014_curCrumbIdx_keyCode$$20$$.$_curCrumbIdx$;
    -1 == $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_5014_curCrumbIdx_keyCode$$20$$ ? $eventConsumed$$4$$ = D.$JSCompiler_alias_FALSE$$ : this.$UpdateActiveElement$((0,D.$JSCompiler_StaticMethods_getCrumb$$)(this.$_breadcrumbs$, $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_5014_curCrumbIdx_keyCode$$20$$))
  }else {
    13 == $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_5014_curCrumbIdx_keyCode$$20$$ && (0,D.$JSCompiler_StaticMethods__processBreadcrumbs$$)(this, (0,D.$JSCompiler_StaticMethods_getCrumb$$)(this.$_breadcrumbs$, this.$_breadcrumbs$.$_curCrumbIdx$))
  }
  $eventConsumed$$4$$ && $event$$331$$.preventDefault();
  return $eventConsumed$$4$$
};
D.$DvtBreadcrumbsPeer$$ = function $$DvtBreadcrumbsPeer$$$($id$$98$$, $displayable$$26$$) {
  this.Init();
  this.$_id$ = $id$$98$$;
  this.$_bDrillable$ = D.$JSCompiler_alias_FALSE$$;
  this.$_displayable$ = $displayable$$26$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbsPeer$$, D.$DvtSimpleObjPeer$$, "DvtBreadcrumbsPeer");
D.$DvtBreadcrumbsPeer$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtBreadcrumbsPeer$$.prototype.$isDrillable$ = (0,D.$JSCompiler_get$$)("$_bDrillable$");
D.$DvtBreadcrumbsPeer$$.prototype.$setDrillable$ = (0,D.$JSCompiler_set$$)("$_bDrillable$");
D.$DvtBreadcrumbsPeer$$.prototype.$getDisplayable$ = (0,D.$JSCompiler_get$$)("$_displayable$");
D.$DvtBreadcrumbsRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbsRenderer$$, D.$DvtObj$$, "DvtBreadcrumbsRenderer");
D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$ = 3;
D.$DvtBreadcrumbsRenderer$$.$render$ = function $$DvtBreadcrumbsRenderer$$$$render$$($breadcrumbs$$1$$, $container$$37$$, $width$$78$$) {
  for(var $context$$216$$ = $breadcrumbs$$1$$.$_context$, $dataItems$$1$$ = ($breadcrumbs$$1$$.$_data$ ? $breadcrumbs$$1$$.$_data$ : {}).$items$ ? ($breadcrumbs$$1$$.$_data$ ? $breadcrumbs$$1$$.$_data$ : {}).$items$ : [], $options$$69$$ = $breadcrumbs$$1$$.$__getOptions$(), $eventManager$$9$$ = $breadcrumbs$$1$$.$getEventManager$(), $labels$$13$$ = [], $peers$$ = [], $i$$393$$ = 0;$i$$393$$ < $dataItems$$1$$.length;$i$$393$$++) {
    var $dataItem$$2_peer$$2$$ = $dataItems$$1$$[$i$$393$$];
    if($dataItem$$2_peer$$2$$) {
      var $label$$37$$ = D.$DvtBreadcrumbsRenderer$$.$_createLabel$($context$$216$$, $dataItem$$2_peer$$2$$.text ? $dataItem$$2_peer$$2$$.text : "", $options$$69$$, $i$$393$$ < $dataItems$$1$$.length - 1);
      $labels$$13$$.push($label$$37$$);
      $dataItem$$2_peer$$2$$ = new D.$DvtBreadcrumbsPeer$$($dataItem$$2_peer$$2$$.id, $label$$37$$);
      $eventManager$$9$$.$associate$($label$$37$$, $dataItem$$2_peer$$2$$);
      $peers$$.push($dataItem$$2_peer$$2$$);
      $i$$393$$ < $dataItems$$1$$.length - 1 && ($label$$37$$.setCursor("pointer"), $dataItem$$2_peer$$2$$.$setDrillable$(D.$JSCompiler_alias_TRUE$$))
    }
  }
  $breadcrumbs$$1$$.$_crumbs$ = $labels$$13$$;
  (0,D.$DvtAgent$isRightToLeft$$)($context$$216$$) ? D.$DvtBreadcrumbsRenderer$$.$_positionLabelsBidi$($breadcrumbs$$1$$, $container$$37$$, $width$$78$$, $labels$$13$$, $peers$$) : D.$DvtBreadcrumbsRenderer$$.$_positionLabels$($breadcrumbs$$1$$, $container$$37$$, $width$$78$$, $labels$$13$$, $peers$$)
};
D.$DvtBreadcrumbsRenderer$$.$_createButtonState$ = function $$DvtBreadcrumbsRenderer$$$$_createButtonState$$($context$$217_state$$65$$, $dvtText_text$$46$$, $cssStyle$$5$$) {
  $dvtText_text$$46$$ = new D.$DvtOutputText$$($context$$217_state$$65$$, $dvtText_text$$46$$, 0, 0);
  $dvtText_text$$46$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $dvtText_text$$46$$.$setCSSStyle$($cssStyle$$5$$);
  var $padTop$$ = (0,D.$JSCompiler_StaticMethods_getPadding$$)($cssStyle$$5$$, "padding-top"), $padRight$$ = (0,D.$JSCompiler_StaticMethods_getPadding$$)($cssStyle$$5$$, "padding-right"), $padBottom$$ = (0,D.$JSCompiler_StaticMethods_getPadding$$)($cssStyle$$5$$, "padding-bottom"), $padLeft$$ = (0,D.$JSCompiler_StaticMethods_getPadding$$)($cssStyle$$5$$, "padding-left"), $labelDims$$11$$ = (0,D.$DvtDisplayableUtils$getDimensionsForced$$)($context$$217_state$$65$$, $dvtText_text$$46$$);
  $context$$217_state$$65$$ = new D.$DvtRect$$($context$$217_state$$65$$, 0, 0, $labelDims$$11$$.$w$ + $padLeft$$ + $padRight$$, $labelDims$$11$$.$h$ + $padTop$$ + $padBottom$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($context$$217_state$$65$$);
  $context$$217_state$$65$$.$setCSSStyle$($cssStyle$$5$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dvtText_text$$46$$, $padLeft$$, $padTop$$);
  $context$$217_state$$65$$.$addChild$($dvtText_text$$46$$);
  return $context$$217_state$$65$$
};
D.$DvtBreadcrumbsRenderer$$.$_createLabel$ = function $$DvtBreadcrumbsRenderer$$$$_createLabel$$($context$$218_label$$38$$, $textStr$$1$$, $dwn$$6_dwnCss_options$$70$$, $bEnabled$$1_cssStyle$$6_ovr$$6_ovrCss$$) {
  if($bEnabled$$1_cssStyle$$6_ovr$$6_ovrCss$$ && ($dwn$$6_dwnCss_options$$70$$.$labelStyleOver$ || $dwn$$6_dwnCss_options$$70$$.$labelStyleDown$)) {
    var $ena$$10_enaCss$$ = new D.$DvtCSSStyle$$($dwn$$6_dwnCss_options$$70$$.$labelStyle$);
    $bEnabled$$1_cssStyle$$6_ovr$$6_ovrCss$$ = new D.$DvtCSSStyle$$($dwn$$6_dwnCss_options$$70$$.$labelStyleOver$);
    $dwn$$6_dwnCss_options$$70$$ = new D.$DvtCSSStyle$$($dwn$$6_dwnCss_options$$70$$.$labelStyleDown$);
    $ena$$10_enaCss$$ = D.$DvtBreadcrumbsRenderer$$.$_createButtonState$($context$$218_label$$38$$, $textStr$$1$$, $ena$$10_enaCss$$);
    $bEnabled$$1_cssStyle$$6_ovr$$6_ovrCss$$ = D.$DvtBreadcrumbsRenderer$$.$_createButtonState$($context$$218_label$$38$$, $textStr$$1$$, $bEnabled$$1_cssStyle$$6_ovr$$6_ovrCss$$);
    $dwn$$6_dwnCss_options$$70$$ = D.$DvtBreadcrumbsRenderer$$.$_createButtonState$($context$$218_label$$38$$, $textStr$$1$$, $dwn$$6_dwnCss_options$$70$$);
    $context$$218_label$$38$$ = new D.$DvtButton$$($context$$218_label$$38$$, $ena$$10_enaCss$$, $bEnabled$$1_cssStyle$$6_ovr$$6_ovrCss$$, $dwn$$6_dwnCss_options$$70$$);
    $context$$218_label$$38$$.$setAriaRole$("link");
    (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($context$$218_label$$38$$, "label", $textStr$$1$$)
  }else {
    $bEnabled$$1_cssStyle$$6_ovr$$6_ovrCss$$ = new D.$DvtCSSStyle$$($bEnabled$$1_cssStyle$$6_ovr$$6_ovrCss$$ ? $dwn$$6_dwnCss_options$$70$$.$labelStyle$ : $dwn$$6_dwnCss_options$$70$$.$disabledLabelStyle$), (0,D.$JSCompiler_StaticMethods_getPadding$$)($bEnabled$$1_cssStyle$$6_ovr$$6_ovrCss$$, "padding-left") || (0,D.$JSCompiler_StaticMethods_getPadding$$)($bEnabled$$1_cssStyle$$6_ovr$$6_ovrCss$$, "padding-right") || (0,D.$JSCompiler_StaticMethods_getPadding$$)($bEnabled$$1_cssStyle$$6_ovr$$6_ovrCss$$, 
    "padding-top") || (0,D.$JSCompiler_StaticMethods_getPadding$$)($bEnabled$$1_cssStyle$$6_ovr$$6_ovrCss$$, "padding-bottom") ? $context$$218_label$$38$$ = D.$DvtBreadcrumbsRenderer$$.$_createButtonState$($context$$218_label$$38$$, $textStr$$1$$, $bEnabled$$1_cssStyle$$6_ovr$$6_ovrCss$$) : ($context$$218_label$$38$$ = new D.$DvtOutputText$$($context$$218_label$$38$$, $textStr$$1$$, 0, 0), $context$$218_label$$38$$.$setCSSStyle$($bEnabled$$1_cssStyle$$6_ovr$$6_ovrCss$$))
  }
  return $context$$218_label$$38$$
};
D.$DvtBreadcrumbsRenderer$$.$_getLabelTextString$ = function $$DvtBreadcrumbsRenderer$$$$_getLabelTextString$$($label$$39_text$$47$$) {
  if($label$$39_text$$47$$ instanceof D.$DvtButton$$) {
    return $label$$39_text$$47$$ = $label$$39_text$$47$$.$upState$.$getChildAt$(0), $label$$39_text$$47$$.$getTextString$()
  }
  $label$$39_text$$47$$ instanceof D.$DvtRect$$ && ($label$$39_text$$47$$ = $label$$39_text$$47$$.$getChildAt$(0));
  return $label$$39_text$$47$$.$getTextString$()
};
D.$DvtBreadcrumbsRenderer$$.$_truncateLabels$ = function $$DvtBreadcrumbsRenderer$$$$_truncateLabels$$($label$$40$$, $maxWidth$$10$$) {
  if($label$$40$$ instanceof D.$DvtButton$$) {
    var $text$$48$$ = $label$$40$$.$upState$.$getChildAt$(0);
    D.$DvtTextUtils$$.$fitText$($text$$48$$, window.Math.max($maxWidth$$10$$ - $text$$48$$.$getTranslateX$(), 0), window.Infinity, $text$$48$$.getParent());
    $text$$48$$ = $label$$40$$.$overState$.$getChildAt$(0);
    D.$DvtTextUtils$$.$fitText$($text$$48$$, window.Math.max($maxWidth$$10$$ - $text$$48$$.$getTranslateX$(), 0), window.Infinity, $text$$48$$.getParent());
    $text$$48$$ = $label$$40$$.$downState$.$getChildAt$(0);
    D.$DvtTextUtils$$.$fitText$($text$$48$$, window.Math.max($maxWidth$$10$$ - $text$$48$$.$getTranslateX$(), 0), window.Infinity, $text$$48$$.getParent())
  }else {
    $label$$40$$ instanceof D.$DvtRect$$ ? ($text$$48$$ = $label$$40$$.$getChildAt$(0), D.$DvtTextUtils$$.$fitText$($text$$48$$, window.Math.max($maxWidth$$10$$ - $text$$48$$.$getTranslateX$(), 0), window.Infinity, $text$$48$$.getParent())) : D.$DvtTextUtils$$.$fitText$($label$$40$$, $maxWidth$$10$$, window.Infinity, $label$$40$$.getParent())
  }
};
D.$DvtBreadcrumbsRenderer$$.$_positionLabels$ = function $$DvtBreadcrumbsRenderer$$$$_positionLabels$$($breadcrumbs$$2_labelString$$, $container$$38$$, $availWidth$$9$$, $labels$$14$$, $peers$$1$$) {
  for(var $options$$71$$ = $breadcrumbs$$2_labelString$$.$__getOptions$(), $eventManager$$10$$ = $breadcrumbs$$2_labelString$$.$getEventManager$(), $arDims$$ = [], $maxHeight$$8$$ = 0, $i$$394$$ = 0;$i$$394$$ < $labels$$14$$.length;$i$$394$$++) {
    $container$$38$$.$addChild$($labels$$14$$[$i$$394$$]);
    var $dims$$33_separator$$1$$ = $labels$$14$$[$i$$394$$].$getDimensions$();
    $arDims$$[$i$$394$$] = $dims$$33_separator$$1$$;
    $maxHeight$$8$$ = window.Math.max($dims$$33_separator$$1$$.$h$, $maxHeight$$8$$);
    $container$$38$$.removeChild($labels$$14$$[$i$$394$$])
  }
  for(var $x$$127$$ = 0, $i$$394$$ = 0;$i$$394$$ < $labels$$14$$.length;$i$$394$$++) {
    $container$$38$$.$addChild$($labels$$14$$[$i$$394$$]);
    $dims$$33_separator$$1$$ = $arDims$$[$i$$394$$];
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($labels$$14$$[$i$$394$$], $x$$127$$, 0.5 * ($maxHeight$$8$$ - $dims$$33_separator$$1$$.$h$));
    if((0,D.$DvtAgent$isTouchDevice$$)()) {
      var $rect$$23_sepDims_separatorWidth$$ = new D.$DvtRect$$($container$$38$$.$_context$, -D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, -D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$33_separator$$1$$.$w$ + 2 * D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$33_separator$$1$$.$h$ + 2 * D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($rect$$23_sepDims_separatorWidth$$);
      $labels$$14$$[$i$$394$$].$addChild$($rect$$23_sepDims_separatorWidth$$);
      $i$$394$$ < $peers$$1$$.length && $eventManager$$10$$.$associate$($rect$$23_sepDims_separatorWidth$$, $peers$$1$$[$i$$394$$])
    }
    if($x$$127$$ + $dims$$33_separator$$1$$.$w$ > $availWidth$$9$$) {
      $breadcrumbs$$2_labelString$$ = D.$DvtBreadcrumbsRenderer$$.$_getLabelTextString$($labels$$14$$[$i$$394$$]);
      D.$DvtBreadcrumbsRenderer$$.$_truncateLabels$($labels$$14$$[$i$$394$$], $availWidth$$9$$ - $x$$127$$);
      $i$$394$$ < $peers$$1$$.length ? $peers$$1$$[$i$$394$$].$setTooltip$($breadcrumbs$$2_labelString$$) : $eventManager$$10$$.$associate$($labels$$14$$[$i$$394$$], new D.$DvtSimpleObjPeer$$($breadcrumbs$$2_labelString$$));
      break
    }else {
      $x$$127$$ += $dims$$33_separator$$1$$.$w$ + $options$$71$$.$__labelGap$
    }
    if($i$$394$$ < $labels$$14$$.length - 1) {
      $dims$$33_separator$$1$$ = D.$DvtBreadcrumbsRenderer$$.$_newSeparator$($breadcrumbs$$2_labelString$$);
      $container$$38$$.$addChild$($dims$$33_separator$$1$$);
      $rect$$23_sepDims_separatorWidth$$ = $dims$$33_separator$$1$$.$getDimensions$();
      (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dims$$33_separator$$1$$, $x$$127$$, 0.5 * ($maxHeight$$8$$ - $rect$$23_sepDims_separatorWidth$$.$h$));
      $rect$$23_sepDims_separatorWidth$$ = $rect$$23_sepDims_separatorWidth$$.$w$;
      if($x$$127$$ + $rect$$23_sepDims_separatorWidth$$ > $availWidth$$9$$) {
        $container$$38$$.removeChild($dims$$33_separator$$1$$);
        break
      }
      $x$$127$$ += $rect$$23_sepDims_separatorWidth$$ + $options$$71$$.$__labelGap$
    }
  }
};
D.$DvtBreadcrumbsRenderer$$.$_positionLabelsBidi$ = function $$DvtBreadcrumbsRenderer$$$$_positionLabelsBidi$$($breadcrumbs$$3_labelString$$1$$, $container$$39$$, $availWidth$$10_x$$128$$, $labels$$15$$, $peers$$2$$) {
  for(var $options$$72$$ = $breadcrumbs$$3_labelString$$1$$.$__getOptions$(), $eventManager$$11$$ = $breadcrumbs$$3_labelString$$1$$.$getEventManager$(), $i$$395$$ = 0;$i$$395$$ < $labels$$15$$.length;$i$$395$$++) {
    $container$$39$$.$addChild$($labels$$15$$[$i$$395$$]);
    var $dims$$34_separator$$2$$ = $labels$$15$$[$i$$395$$].$getDimensions$();
    if((0,D.$DvtAgent$isTouchDevice$$)()) {
      var $rect$$24_separatorWidth$$1$$ = new D.$DvtRect$$($container$$39$$.$_context$, -D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, -D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$34_separator$$2$$.$w$ + 2 * D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$34_separator$$2$$.$h$ + 2 * D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($rect$$24_separatorWidth$$1$$);
      $labels$$15$$[$i$$395$$].$addChild$($rect$$24_separatorWidth$$1$$);
      $i$$395$$ < $peers$$2$$.length && $eventManager$$11$$.$associate$($rect$$24_separatorWidth$$1$$, $peers$$2$$[$i$$395$$])
    }
    if(0 > $availWidth$$10_x$$128$$ - $dims$$34_separator$$2$$.$w$) {
      $breadcrumbs$$3_labelString$$1$$ = D.$DvtBreadcrumbsRenderer$$.$_getLabelTextString$($labels$$15$$[$i$$395$$]);
      D.$DvtBreadcrumbsRenderer$$.$_truncateLabels$($labels$$15$$[$i$$395$$], $availWidth$$10_x$$128$$);
      $labels$$15$$[$i$$395$$].$setTranslateX$(0);
      $i$$395$$ < $peers$$2$$.length ? $peers$$2$$[$i$$395$$].$setTooltip$($breadcrumbs$$3_labelString$$1$$) : $eventManager$$11$$.$associate$($labels$$15$$[$i$$395$$], new D.$DvtSimpleObjPeer$$($breadcrumbs$$3_labelString$$1$$));
      break
    }else {
      $labels$$15$$[$i$$395$$].$setTranslateX$($availWidth$$10_x$$128$$ - $dims$$34_separator$$2$$.$w$), $availWidth$$10_x$$128$$ -= $dims$$34_separator$$2$$.$w$ + $options$$72$$.$__labelGap$
    }
    if($i$$395$$ < $labels$$15$$.length - 1) {
      if($dims$$34_separator$$2$$ = D.$DvtBreadcrumbsRenderer$$.$_newSeparator$($breadcrumbs$$3_labelString$$1$$), $container$$39$$.$addChild$($dims$$34_separator$$2$$), $rect$$24_separatorWidth$$1$$ = $dims$$34_separator$$2$$.$getDimensions$().$w$, 0 > $availWidth$$10_x$$128$$ - $rect$$24_separatorWidth$$1$$) {
        $container$$39$$.removeChild($dims$$34_separator$$2$$);
        break
      }else {
        $dims$$34_separator$$2$$.$setTranslateX$($availWidth$$10_x$$128$$ - $rect$$24_separatorWidth$$1$$), $availWidth$$10_x$$128$$ -= $rect$$24_separatorWidth$$1$$ + $options$$72$$.$__labelGap$
      }
    }
  }
};
D.$DvtBreadcrumbsRenderer$$.$_newSeparator$ = function $$DvtBreadcrumbsRenderer$$$$_newSeparator$$($breadcrumbs$$4_label$$41$$) {
  var $options$$73$$ = $breadcrumbs$$4_label$$41$$.$__getOptions$();
  $breadcrumbs$$4_label$$41$$ = new D.$DvtOutputText$$($breadcrumbs$$4_label$$41$$.$_context$, $options$$73$$.$__labelSeparator$, 0, 0);
  $breadcrumbs$$4_label$$41$$.$setCSSStyle$(new D.$DvtCSSStyle$$($options$$73$$.$labelStyle$));
  return $breadcrumbs$$4_label$$41$$
};
D.$DvtPanelDrawerEvent$$ = function $$DvtPanelDrawerEvent$$$($subtype$$10$$, $activePanel$$) {
  this.Init("dvtPanelDrawerEvent");
  this.$_subtype$ = $subtype$$10$$;
  this.$_activePanel$ = $activePanel$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanelDrawerEvent$$, D.$DvtBaseComponentEvent$$, "DvtPanelDrawerEvent");
D.$DvtPanelDrawerEvent$$.prototype.$getSubType$ = (0,D.$JSCompiler_get$$)("$_subtype$");
D.$DvtPanelDrawer$$ = function $$DvtPanelDrawer$$$($context$$418$$, $callback$$115$$, $callbackObj$$78$$, $sid$$1$$) {
  this.Init($context$$418$$, $callback$$115$$, $callbackObj$$78$$, $sid$$1$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanelDrawer$$, D.$DvtContainer$$, "DvtPanelDrawer");
D.$DvtPanelDrawer$$.prototype.Init = function $$DvtPanelDrawer$$$$Init$($context$$419$$, $callback$$116$$, $callbackObj$$79$$, $sid$$2$$) {
  D.$DvtPanelDrawer$$.$superclass$.Init.call(this, $context$$419$$, D.$JSCompiler_alias_NULL$$, "panelDrawer" + $sid$$2$$);
  this.$_sid$ = $sid$$2$$;
  this.$_eventManager$ = new D.$DvtPanelDrawerEventManager$$($context$$419$$, $callback$$116$$, $callbackObj$$79$$);
  this.$_eventManager$.$addListeners$(this);
  this.$_eventManager$.$_rolloverTypes$.push(D.$DvtPanelDrawer$$);
  this.$_eventManager$.$associate$(this, this);
  this.$_callback$ = $callback$$116$$;
  this.$_callbackObj$ = $callbackObj$$79$$;
  this.$_panels$ = {};
  this.$_panelOrder$ = [];
  this.$_maxHeight$ = this.$_maxWidth$ = window.Number.MAX_VALUE;
  this.$_minWidth$ = 5;
  this.$_minHeight$ = 0;
  this.$_displayedPanelId$;
  this.$_oldDisplayedPanelId$;
  this.$_bTransition$ = this.$_bDisclosed$ = D.$JSCompiler_alias_FALSE$$;
  this.$_contentPane$;
  this.$_activeContent$;
  this.$_expandedContent$;
  this.$_expandedContentPanel$;
  this.$_contentClipPath$;
  this.$_expandedBorder$;
  this.$_expandedBorderResizable$;
  this.$_tabs$ = {};
  this.$_discloseDirection$ = "left";
  this.$_dockSide$ = "top";
  this.$_isFixed$ = D.$JSCompiler_alias_FALSE$$;
  this.$_styleMap$ = D.$JSCompiler_alias_NULL$$;
  $callbackObj$$79$$ && (this.$_styleMap$ = $callbackObj$$79$$.$getSubcomponentStyles$());
  this.$_bgAlpha$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "backgroundAlpha", 1);
  this.$_borderColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-color", "#bbc7d0");
  this.$_borderRadius$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-radius", 2));
  this.$_bgColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "background-color", "#ffffff");
  this.$_bgInactiveColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "tab-color-inactive", "#dee4e7");
  this.$_borderInactiveColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "tab-border-color-inactive", "#c1cede");
  this.$_bDeferPanelVisibility$ = D.$JSCompiler_alias_FALSE$$;
  this.$_scrollEnabled$ = D.$JSCompiler_alias_TRUE$$;
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this);
  this.$_contentPadding$ = 10
};
D.$JSCompiler_StaticMethods_addPanel$$ = function $$JSCompiler_StaticMethods_addPanel$$$($JSCompiler_StaticMethods_addPanel$self$$, $panel$$4$$, $upState$$14$$, $overState$$11$$, $downState$$11$$, $tooltip$$46$$, $id$$170$$) {
  $JSCompiler_StaticMethods_addPanel$self$$.$_panels$[$id$$170$$] = {panel:$panel$$4$$, iconUp:$upState$$14$$, iconOver:$overState$$11$$, iconDown:$downState$$11$$, tooltip:$tooltip$$46$$};
  $JSCompiler_StaticMethods_addPanel$self$$.$_panelOrder$.push($id$$170$$);
  $JSCompiler_StaticMethods_addPanel$self$$.$_minHeight$ = 15 + 42 * $JSCompiler_StaticMethods_addPanel$self$$.$_panelOrder$.length
};
D.$DvtPanelDrawer$$.prototype.$setMaxWidth$ = (0,D.$JSCompiler_set$$)("$_maxWidth$");
D.$DvtPanelDrawer$$.prototype.$getMaxContentWidth$ = function $$DvtPanelDrawer$$$$$getMaxContentWidth$$() {
  return this.$_maxWidth$ - (2 * this.$_contentPadding$ + 21)
};
D.$DvtPanelDrawer$$.prototype.$setMaxHeight$ = (0,D.$JSCompiler_set$$)("$_maxHeight$");
D.$DvtPanelDrawer$$.prototype.$getMaxContentHeight$ = function $$DvtPanelDrawer$$$$$getMaxContentHeight$$() {
  return this.$_maxHeight$ - (2 * this.$_contentPadding$ + 21)
};
D.$JSCompiler_StaticMethods_GetPanel$$ = function $$JSCompiler_StaticMethods_GetPanel$$$($JSCompiler_StaticMethods_GetPanel$self$$, $id$$171$$) {
  return $JSCompiler_StaticMethods_GetPanel$self$$.$_panels$[$id$$171$$].panel
};
D.$JSCompiler_StaticMethods_setDisplayedPanelId$$ = function $$JSCompiler_StaticMethods_setDisplayedPanelId$$$($JSCompiler_StaticMethods_setDisplayedPanelId$self$$, $id$$175$$, $bImmediate$$15$$, $onEnd$$4$$) {
  $JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$_oldDisplayedPanelId$ = $JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$_displayedPanelId$;
  $JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$_displayedPanelId$ = $id$$175$$;
  $JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$isDisclosed$() && ($JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$ChangeTabsState$(), (0,D.$JSCompiler_StaticMethods_ChangePanels$$)($JSCompiler_StaticMethods_setDisplayedPanelId$self$$, $id$$175$$, $bImmediate$$15$$, $onEnd$$4$$));
  $JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$_oldDisplayedPanelId$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_getDisplayedPanelId$$ = function $$JSCompiler_StaticMethods_getDisplayedPanelId$$$($JSCompiler_StaticMethods_getDisplayedPanelId$self$$) {
  var $panelId$$1$$ = $JSCompiler_StaticMethods_getDisplayedPanelId$self$$.$_displayedPanelId$;
  return!$panelId$$1$$ && 0 < $JSCompiler_StaticMethods_getDisplayedPanelId$self$$.$_panelOrder$.length ? $JSCompiler_StaticMethods_getDisplayedPanelId$self$$.$_panelOrder$[0] : $panelId$$1$$
};
D.$DvtPanelDrawer$$.prototype.$setDisclosed$ = function $$DvtPanelDrawer$$$$$setDisclosed$$($bDisclosed$$11_destX$$inline_7062$$, $anim$$inline_7063_anim$$inline_7069_bImmediate$$16$$, $onEnd$$5$$) {
  if(!this.$_bTransition$) {
    var $oldDisclosed$$1$$ = this.$_bDisclosed$;
    this.$_bDisclosed$ = $bDisclosed$$11_destX$$inline_7062$$;
    if($oldDisclosed$$1$$ != $bDisclosed$$11_destX$$inline_7062$$) {
      if(this.$_bTransition$ = D.$JSCompiler_alias_TRUE$$, $bDisclosed$$11_destX$$inline_7062$$) {
        var $panel$$inline_7061$$ = (0,D.$JSCompiler_StaticMethods_GetPanel$$)(this, (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)(this));
        $panel$$inline_7061$$ && this.$_bDeferPanelVisibility$ && $panel$$inline_7061$$.$setVisible$(D.$JSCompiler_alias_FALSE$$);
        (0,D.$JSCompiler_StaticMethods_DisplayPanel$$)(this, (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)(this));
        $bDisclosed$$11_destX$$inline_7062$$ = -(0.8 * this.$_expandedContent$.getWidth());
        "right" == this.$_discloseDirection$ && ($bDisclosed$$11_destX$$inline_7062$$ = -$bDisclosed$$11_destX$$inline_7062$$, this.$_expandedContent$.$setX$((0.8 - 1) * this.$_expandedContent$.getWidth()));
        if($anim$$inline_7063_anim$$inline_7069_bImmediate$$16$$) {
          this.$_contentPane$.$setTranslateX$($bDisclosed$$11_destX$$inline_7062$$), $panel$$inline_7061$$ && this.$_bDeferPanelVisibility$ && $panel$$inline_7061$$.$setVisible$(D.$JSCompiler_alias_TRUE$$), $onEnd$$5$$ && $onEnd$$5$$(), this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
        }else {
          if($anim$$inline_7063_anim$$inline_7069_bImmediate$$16$$ = new D.$DvtAnimator$$(this.$_context$, 0.25), $anim$$inline_7063_anim$$inline_7069_bImmediate$$16$$.$setEasing$(D.$DvtEasing$backOut$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$inline_7063_anim$$inline_7069_bImmediate$$16$$, "typeNumber", this.$_contentPane$, this.$_contentPane$.$getTranslateX$, this.$_contentPane$.$setTranslateX$, $bDisclosed$$11_destX$$inline_7062$$), $panel$$inline_7061$$ && this.$_bDeferPanelVisibility$ ? 
          (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_7063_anim$$inline_7069_bImmediate$$16$$, function() {
            $panel$$inline_7061$$.$setVisible$(D.$JSCompiler_alias_TRUE$$);
            $onEnd$$5$$ && $onEnd$$5$$()
          }) : $onEnd$$5$$ && (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_7063_anim$$inline_7069_bImmediate$$16$$, $onEnd$$5$$), $anim$$inline_7063_anim$$inline_7069_bImmediate$$16$$) {
            var $thisRef$$inline_7064$$ = this;
            (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_7063_anim$$inline_7069_bImmediate$$16$$, function() {
              $thisRef$$inline_7064$$.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
            });
            $anim$$inline_7063_anim$$inline_7069_bImmediate$$16$$.play()
          }
        }
        this.$ChangeTabsState$()
      }else {
        if($anim$$inline_7063_anim$$inline_7069_bImmediate$$16$$) {
          this.$_contentPane$.$setTranslateX$(0), this.$RemoveExpandedContent$(), $onEnd$$5$$ && $onEnd$$5$$(), this.$ChangeTabsState$(), this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
        }else {
          $anim$$inline_7063_anim$$inline_7069_bImmediate$$16$$ = new D.$DvtAnimator$$(this.$_context$, 0.25);
          $anim$$inline_7063_anim$$inline_7069_bImmediate$$16$$.$setEasing$(D.$DvtEasing$backIn$$);
          (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$inline_7063_anim$$inline_7069_bImmediate$$16$$, "typeNumber", this.$_contentPane$, this.$_contentPane$.$getTranslateX$, this.$_contentPane$.$setTranslateX$, 0);
          (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_7063_anim$$inline_7069_bImmediate$$16$$, this.$RemoveExpandedContent$, this);
          (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_7063_anim$$inline_7069_bImmediate$$16$$, this.$ChangeTabsState$, this);
          $onEnd$$5$$ && (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_7063_anim$$inline_7069_bImmediate$$16$$, $onEnd$$5$$);
          var $thisRef$$inline_7070$$ = this;
          (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_7063_anim$$inline_7069_bImmediate$$16$$, function() {
            $thisRef$$inline_7070$$.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
          });
          $anim$$inline_7063_anim$$inline_7069_bImmediate$$16$$.play()
        }
      }
    }
  }
};
D.$DvtPanelDrawer$$.prototype.$isDisclosed$ = (0,D.$JSCompiler_get$$)("$_bDisclosed$");
D.$DvtPanelDrawer$$.prototype.$renderComponent$ = function $$DvtPanelDrawer$$$$$renderComponent$$() {
  this.$_contentPane$ || (this.$_contentPane$ = new D.$DvtContainer$$(this.$_context$, "pd_contentPane"), this.$addChild$(this.$_contentPane$), this.$_activeContent$ = new D.$DvtContainer$$(this.$_context$, "pdcp_activeContent"), this.$_contentPane$.$addChild$(this.$_activeContent$));
  if(!this.$_isFixed$) {
    var $currX$$inline_7073$$ = -42;
    "right" == this.$_discloseDirection$ && ($currX$$inline_7073$$ = 0);
    var $currY$$inline_7074$$ = 15;
    if("top" == this.$_dockSide$) {
      for(var $i$$inline_7075$$ = 0;$i$$inline_7075$$ < this.$_panelOrder$.length;$i$$inline_7075$$++) {
        var $panelId$$inline_7076_tab$$inline_7077$$ = this.$_panelOrder$[$i$$inline_7075$$], $panelId$$inline_7076_tab$$inline_7077$$ = (0,D.$JSCompiler_StaticMethods_RenderTab$$)(this, $panelId$$inline_7076_tab$$inline_7077$$);
        (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelId$$inline_7076_tab$$inline_7077$$, $currX$$inline_7073$$, $currY$$inline_7074$$);
        $currY$$inline_7074$$ += 42
      }
    }else {
      if("bottom" == this.$_dockSide$) {
        $currY$$inline_7074$$ = -57;
        for($i$$inline_7075$$ = this.$_panelOrder$.length - 1;0 <= $i$$inline_7075$$;$i$$inline_7075$$--) {
          $panelId$$inline_7076_tab$$inline_7077$$ = this.$_panelOrder$[$i$$inline_7075$$], $panelId$$inline_7076_tab$$inline_7077$$ = (0,D.$JSCompiler_StaticMethods_RenderTab$$)(this, $panelId$$inline_7076_tab$$inline_7077$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelId$$inline_7076_tab$$inline_7077$$, $currX$$inline_7073$$, $currY$$inline_7074$$), $currY$$inline_7074$$ -= 42
        }
      }
    }
  }
};
D.$JSCompiler_StaticMethods_RenderTab$$ = function $$JSCompiler_StaticMethods_RenderTab$$$($JSCompiler_StaticMethods_RenderTab$self$$, $panelId$$3$$) {
  var $closedPath_downState$$12$$, $arPoints$$inline_7080_tab$$1$$;
  switch($JSCompiler_StaticMethods_RenderTab$self$$.$_discloseDirection$) {
    case "right":
      $arPoints$$inline_7080_tab$$1$$ = ["M", 0, 0, "L", 42 - $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 0, "A", $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 0, 0, 1, 42, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, "L", 42, 42 - $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, "A", $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 
      0, 0, 1, 42 - $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 42, "L", 0, 42];
      break;
    default:
      $arPoints$$inline_7080_tab$$1$$ = ["M", 42, 0, "L", $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 0, "A", $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 0, 0, 0, 0, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, "L", 0, 42 - $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, "A", $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 
      0, 0, 0, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 42, "L", 42, 42]
  }
  $closedPath_downState$$12$$ = $arPoints$$inline_7080_tab$$1$$;
  $arPoints$$inline_7080_tab$$1$$ = new D.$DvtPath$$($JSCompiler_StaticMethods_RenderTab$self$$.$_context$, $closedPath_downState$$12$$, "pdcp_tab_" + $panelId$$3$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($arPoints$$inline_7080_tab$$1$$);
  $arPoints$$inline_7080_tab$$1$$.setCursor("pointer");
  $JSCompiler_StaticMethods_RenderTab$self$$.$_contentPane$.$addChildAt$($arPoints$$inline_7080_tab$$1$$, 0);
  $arPoints$$inline_7080_tab$$1$$.$setSolidFill$($JSCompiler_StaticMethods_RenderTab$self$$.$_bgInactiveColor$, $JSCompiler_StaticMethods_RenderTab$self$$.$_bgAlpha$);
  $arPoints$$inline_7080_tab$$1$$.$setSolidStroke$($JSCompiler_StaticMethods_RenderTab$self$$.$_borderInactiveColor$, 1, 1);
  var $panelObj$$ = $JSCompiler_StaticMethods_RenderTab$self$$.$_panels$[$panelId$$3$$], $icon$$33_upState$$15$$ = new D.$DvtPath$$($JSCompiler_StaticMethods_RenderTab$self$$.$_context$, $closedPath_downState$$12$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($icon$$33_upState$$15$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelObj$$.iconUp, 9, 9);
  $icon$$33_upState$$15$$.$addChild$($panelObj$$.iconUp);
  var $overState$$12$$ = new D.$DvtPath$$($JSCompiler_StaticMethods_RenderTab$self$$.$_context$, $closedPath_downState$$12$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($overState$$12$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelObj$$.iconOver, 9, 9);
  $overState$$12$$.$addChild$($panelObj$$.iconOver);
  $closedPath_downState$$12$$ = new D.$DvtPath$$($JSCompiler_StaticMethods_RenderTab$self$$.$_context$, $closedPath_downState$$12$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($closedPath_downState$$12$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelObj$$.iconDown, 9, 9);
  $closedPath_downState$$12$$.$addChild$($panelObj$$.iconDown);
  $icon$$33_upState$$15$$ = new D.$DvtButton$$($JSCompiler_StaticMethods_RenderTab$self$$.$_context$, $icon$$33_upState$$15$$, $overState$$12$$, $closedPath_downState$$12$$);
  $icon$$33_upState$$15$$.$_bToggleEnabled$ = D.$JSCompiler_alias_TRUE$$;
  $icon$$33_upState$$15$$.setCursor("pointer");
  $panelObj$$.icon = $icon$$33_upState$$15$$;
  $arPoints$$inline_7080_tab$$1$$.$addChild$($icon$$33_upState$$15$$);
  $JSCompiler_StaticMethods_RenderTab$self$$.$_tabs$[$panelId$$3$$] = $arPoints$$inline_7080_tab$$1$$;
  $JSCompiler_StaticMethods_RenderTab$self$$.$_eventManager$.$associate$($arPoints$$inline_7080_tab$$1$$, {$HandleClick$:function() {
    $JSCompiler_StaticMethods_RenderTab$self$$.$_oldDisplayedPanelId$ = (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)($JSCompiler_StaticMethods_RenderTab$self$$);
    $JSCompiler_StaticMethods_RenderTab$self$$.$_displayedPanelId$ = $panelId$$3$$;
    var $closedPath_downState$$12$$ = function $$closedPath_downState$$12$$$() {
      var $panelId$$3$$ = $JSCompiler_StaticMethods_RenderTab$self$$.$_context$.$getTooltipManager$();
      $panelId$$3$$ && $panelId$$3$$.$hideTooltip$()
    };
    $JSCompiler_StaticMethods_RenderTab$self$$.$isDisclosed$() ? $JSCompiler_StaticMethods_RenderTab$self$$.$_oldDisplayedPanelId$ == $panelId$$3$$ ? $JSCompiler_StaticMethods_RenderTab$self$$.$setDisclosed$(D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, $closedPath_downState$$12$$) : ($JSCompiler_StaticMethods_RenderTab$self$$.$ChangeTabsState$(), (0,D.$JSCompiler_StaticMethods_ChangePanels$$)($JSCompiler_StaticMethods_RenderTab$self$$, $panelId$$3$$, D.$JSCompiler_alias_FALSE$$)) : ($JSCompiler_StaticMethods_RenderTab$self$$.$setDisclosed$(D.$JSCompiler_alias_TRUE$$, 
    D.$JSCompiler_alias_FALSE$$, $closedPath_downState$$12$$), $JSCompiler_StaticMethods_RenderTab$self$$.$ApplyAlphasRollover$());
    $JSCompiler_StaticMethods_RenderTab$self$$.$_oldDisplayedPanelId$ = D.$JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_RenderTab$self$$.$FireListener$(new D.$DvtPanelDrawerEvent$$($JSCompiler_StaticMethods_RenderTab$self$$.$isDisclosed$() ? "show" : "hide", $JSCompiler_StaticMethods_RenderTab$self$$.$_displayedPanelId$))
  }, $getTooltip$:function() {
    return $JSCompiler_StaticMethods_RenderTab$self$$.$_panels$[$panelId$$3$$].tooltip
  }});
  $JSCompiler_StaticMethods_RenderTab$self$$.$addAccessibilityAttributes$($arPoints$$inline_7080_tab$$1$$, $JSCompiler_StaticMethods_RenderTab$self$$.$_panels$[$panelId$$3$$].tooltip);
  return $arPoints$$inline_7080_tab$$1$$
};
D.$JSCompiler_StaticMethods_ChangePanels$$ = function $$JSCompiler_StaticMethods_ChangePanels$$$($JSCompiler_StaticMethods_ChangePanels$self$$, $panelId$$5$$, $bImmediate$$17_oldPanel$$1$$, $onEnd$$6$$) {
  var $anim$$27$$ = D.$JSCompiler_alias_NULL$$;
  $bImmediate$$17_oldPanel$$1$$ || ($anim$$27$$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods_ChangePanels$self$$.$_context$, 0.25));
  $JSCompiler_StaticMethods_ChangePanels$self$$.$_oldDisplayedPanelId$ && ($bImmediate$$17_oldPanel$$1$$ = (0,D.$JSCompiler_StaticMethods_GetPanel$$)($JSCompiler_StaticMethods_ChangePanels$self$$, $JSCompiler_StaticMethods_ChangePanels$self$$.$_oldDisplayedPanelId$)) && $JSCompiler_StaticMethods_ChangePanels$self$$.$_expandedContentPanel$.removeChild($bImmediate$$17_oldPanel$$1$$);
  (0,D.$JSCompiler_StaticMethods_DisplayPanel$$)($JSCompiler_StaticMethods_ChangePanels$self$$, $panelId$$5$$, $anim$$27$$);
  $anim$$27$$ ? ($JSCompiler_StaticMethods_ChangePanels$self$$.$ApplyAlphasRollover$(), $onEnd$$6$$ && (0,D.$DvtPlayable$appendOnEnd$$)($anim$$27$$, $onEnd$$6$$), $anim$$27$$.play()) : $onEnd$$6$$ && $onEnd$$6$$()
};
D.$DvtPanelDrawer$$.prototype.$RemoveExpandedContent$ = function $$DvtPanelDrawer$$$$$RemoveExpandedContent$$() {
  this.$_expandedContent$ && (this.$_contentClipPath$ = D.$JSCompiler_alias_NULL$$, this.$_expandedContentPanel$.$removeChildren$(), (0,D.$JSCompiler_StaticMethods_removeAllDrawEffects$$)(this.$_activeContent$), this.$_expandedContent$.$destroy$(), this.$_activeContent$.removeChild(this.$_expandedContent$), this.$_expandedBorderResizable$ = this.$_expandedBorder$ = this.$_expandedContentPanel$ = this.$_expandedContent$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_StaticMethods_DisplayPanel$$ = function $$JSCompiler_StaticMethods_DisplayPanel$$$($JSCompiler_StaticMethods_DisplayPanel$self$$, $id$$176$$, $anim$$30$$) {
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$ || ($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$ = new D.$DvtRect$$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_context$, 0, 0, 1, 1, "pdcp_expandedContent"), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_activeContent$.$addChild$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$.$setSolidFill$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_bgColor$, 
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_bgAlpha$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$ = new D.$DvtScrollableContainer$$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_context$, 0, 0, $JSCompiler_StaticMethods_DisplayPanel$self$$.$_maxWidth$ == window.Number.MAX_VALUE ? D.$JSCompiler_alias_NULL$$ : $JSCompiler_StaticMethods_DisplayPanel$self$$.$_maxWidth$ - 2 * $JSCompiler_StaticMethods_DisplayPanel$self$$.$_contentPadding$, $JSCompiler_StaticMethods_DisplayPanel$self$$.$_maxHeight$ == 
  window.Number.MAX_VALUE ? D.$JSCompiler_alias_NULL$$ : $JSCompiler_StaticMethods_DisplayPanel$self$$.$_maxHeight$ - 2 * $JSCompiler_StaticMethods_DisplayPanel$self$$.$_contentPadding$, 10, "pdcp_expandedContentPanel" + $JSCompiler_StaticMethods_DisplayPanel$self$$.$_sid$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_scrollEnabled$ || ($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$_horizScrollEnabled$ = D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$_vertScrollEnabled$ = 
  D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$setSkinName$("alta"), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$_styleMap$ = $JSCompiler_StaticMethods_DisplayPanel$self$$.$_styleMap$, $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$.$addChild$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$setTranslateX$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_contentPadding$), 
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$setTranslateY$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_contentPadding$));
  var $panel$$6$$ = (0,D.$JSCompiler_StaticMethods_GetPanel$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, $id$$176$$);
  if($panel$$6$$) {
    $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$addChild$($panel$$6$$);
    $anim$$30$$ && $JSCompiler_StaticMethods_DisplayPanel$self$$.$_bDeferPanelVisibility$ && ($panel$$6$$.$setVisible$(D.$JSCompiler_alias_FALSE$$), (0,D.$DvtPlayable$appendOnEnd$$)($anim$$30$$, function() {
      $panel$$6$$.$setVisible$(D.$JSCompiler_alias_TRUE$$)
    }));
    if($JSCompiler_StaticMethods_DisplayPanel$self$$.$_oldDisplayedPanelId$) {
      var $ecw$$inline_7100_oldPanel$$2$$ = (0,D.$JSCompiler_StaticMethods_GetPanel$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, $JSCompiler_StaticMethods_DisplayPanel$self$$.$_oldDisplayedPanelId$);
      $ecw$$inline_7100_oldPanel$$2$$ && $ecw$$inline_7100_oldPanel$$2$$.$removeEvtListener$("dvtResizeEvent", $JSCompiler_StaticMethods_DisplayPanel$self$$.$HandlePanelResize$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_DisplayPanel$self$$)
    }
    $panel$$6$$.$addEvtListener$("dvtResizeEvent", $JSCompiler_StaticMethods_DisplayPanel$self$$.$HandlePanelResize$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_DisplayPanel$self$$)
  }
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$ || ($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$ = new D.$DvtPath$$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_context$, ["M", 0, 0, "L", 1, 1], "pdcp_expandedBorder"), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorderResizable$ = new D.$DvtPath$$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_context$, ["M", 0, 0, "L", 1, 1], "pdcp_expandedBorderResizable"), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$.$addChild$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$), 
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$.$addChild$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorderResizable$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$.$setSolidStroke$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_borderColor$, 1), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$.$setFill$(D.$JSCompiler_alias_NULL$$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorderResizable$.$setSolidStroke$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_borderColor$, 
  1), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorderResizable$.$setFill$(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorderResizable$));
  var $ecw$$inline_7100_oldPanel$$2$$ = 2 * $JSCompiler_StaticMethods_DisplayPanel$self$$.$_contentPadding$, $ech$$inline_7101$$ = 2 * $JSCompiler_StaticMethods_DisplayPanel$self$$.$_contentPadding$, $xx$$inline_7102$$ = 0, $dims$$inline_7104_yy$$inline_7103$$ = 0;
  (0,D.$JSCompiler_StaticMethods_GetPanel$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, $id$$176$$) && ($dims$$inline_7104_yy$$inline_7103$$ = $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$getDimensionsWithStroke$(), $ecw$$inline_7100_oldPanel$$2$$ = (0,D.$JSCompiler_StaticMethods_GetExpandedContentWidth$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, $dims$$inline_7104_yy$$inline_7103$$.$w$), $ech$$inline_7101$$ = (0,D.$JSCompiler_StaticMethods_GetExpandedContentHeight$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, 
  $dims$$inline_7104_yy$$inline_7103$$.$h$), $xx$$inline_7102$$ = $dims$$inline_7104_yy$$inline_7103$$.x, $dims$$inline_7104_yy$$inline_7103$$ = $dims$$inline_7104_yy$$inline_7103$$.y);
  (0,D.$JSCompiler_StaticMethods__refreshPanelSize$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, $id$$176$$, $anim$$30$$, $ecw$$inline_7100_oldPanel$$2$$, $ech$$inline_7101$$, $xx$$inline_7102$$, $dims$$inline_7104_yy$$inline_7103$$)
};
D.$DvtPanelDrawer$$.prototype.$HandlePanelResize$ = function $$DvtPanelDrawer$$$$$HandlePanelResize$$($event$$554_yy$$40$$) {
  var $anim$$31$$ = new D.$DvtAnimator$$(this.$_context$, 0.25);
  this.$_expandedContentPanel$.refresh();
  var $ecw_resizeWidth$$1$$ = $event$$554_yy$$40$$.getWidth(), $ech_resizeHeight$$1$$ = $event$$554_yy$$40$$.getHeight(), $sbPadding_xx$$39$$ = this.$_expandedContentPanel$.$_sbWidth$ + 10;
  this.$_expandedContentPanel$.$_hsb$ != D.$JSCompiler_alias_NULL$$ && ($ech_resizeHeight$$1$$ += $sbPadding_xx$$39$$);
  this.$_expandedContentPanel$.$_vsb$ != D.$JSCompiler_alias_NULL$$ && ($ecw_resizeWidth$$1$$ += $sbPadding_xx$$39$$);
  $ecw_resizeWidth$$1$$ = (0,D.$JSCompiler_StaticMethods_GetExpandedContentWidth$$)(this, $ecw_resizeWidth$$1$$);
  $ech_resizeHeight$$1$$ = (0,D.$JSCompiler_StaticMethods_GetExpandedContentHeight$$)(this, $ech_resizeHeight$$1$$);
  $sbPadding_xx$$39$$ = $event$$554_yy$$40$$.$getX$() ? $event$$554_yy$$40$$.$getX$() : 0;
  $event$$554_yy$$40$$ = $event$$554_yy$$40$$.$getY$() ? $event$$554_yy$$40$$.$getY$() : 0;
  (0,D.$JSCompiler_StaticMethods__refreshPanelSize$$)(this, (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)(this), $anim$$31$$, $ecw_resizeWidth$$1$$, $ech_resizeHeight$$1$$, $sbPadding_xx$$39$$, $event$$554_yy$$40$$);
  $anim$$31$$.play()
};
D.$JSCompiler_StaticMethods__refreshPanelSize$$ = function $$JSCompiler_StaticMethods__refreshPanelSize$$$($JSCompiler_StaticMethods__refreshPanelSize$self$$, $edgeX_id$$178$$, $anim$$33$$, $ecw$$2_firstTab_lastTab$$, $ech$$2$$, $expandedContentWidth_tab$$2_xx$$41$$, $yy$$42$$) {
  var $panel$$8$$ = (0,D.$JSCompiler_StaticMethods_GetPanel$$)($JSCompiler_StaticMethods__refreshPanelSize$self$$, $edgeX_id$$178$$);
  $anim$$33$$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$33$$, "typeNumber", $panel$$8$$, $panel$$8$$.$getTranslateX$, $panel$$8$$.$setTranslateX$, -$expandedContentWidth_tab$$2_xx$$41$$) : $panel$$8$$.$setTranslateX$(-$expandedContentWidth_tab$$2_xx$$41$$);
  $anim$$33$$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$33$$, "typeNumber", $panel$$8$$, $panel$$8$$.$getTranslateY$, $panel$$8$$.$setTranslateY$, -$yy$$42$$) : $panel$$8$$.$setTranslateY$(-$yy$$42$$);
  var $clipRect$$ = new D.$DvtRectangle$$($JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPadding$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPadding$, $ecw$$2_firstTab_lastTab$$ - 2 * $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPadding$, $ech$$2$$ - 2 * $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPadding$);
  $expandedContentWidth_tab$$2_xx$$41$$ = 1.25 * $ecw$$2_firstTab_lastTab$$;
  $anim$$33$$ ? ((0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$33$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.getWidth, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setWidth$, $expandedContentWidth_tab$$2_xx$$41$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$33$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.getHeight, 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setHeight$, $ech$$2$$), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_bDeferPanelVisibility$ ? (0,D.$DvtPlayable$appendOnEnd$$)($anim$$33$$, function() {
    $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_setContentClipPath$($clipRect$$)
  }) : (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$33$$, "typeRectangle", $JSCompiler_StaticMethods__refreshPanelSize$self$$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_getContentClipPath$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_setContentClipPath$, $clipRect$$), "left" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_discloseDirection$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$33$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$, 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$.$getTranslateX$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$.$setTranslateX$, -$ecw$$2_firstTab_lastTab$$) : "right" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_discloseDirection$ && ((0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$33$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$.$getTranslateX$, 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$.$setTranslateX$, $ecw$$2_firstTab_lastTab$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$33$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$getTranslateX$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setTranslateX$, $ecw$$2_firstTab_lastTab$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$33$$, 
  "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$getTranslateX$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setTranslateX$, $ecw$$2_firstTab_lastTab$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$33$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$getTranslateX$, 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setTranslateX$, -$ecw$$2_firstTab_lastTab$$)), "bottom" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_dockSide$ && ((0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$33$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$getTranslateY$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setTranslateY$, 
  $ech$$2$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$33$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$getTranslateY$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setTranslateY$, $ech$$2$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$33$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$, 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$getTranslateY$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setTranslateY$, -$ech$$2$$))) : ($JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setWidth$($expandedContentWidth_tab$$2_xx$$41$$), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setHeight$($ech$$2$$), "right" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_discloseDirection$ && ($JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setTranslateX$(-$ecw$$2_firstTab_lastTab$$), 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setTranslateX$($ecw$$2_firstTab_lastTab$$), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setTranslateX$($ecw$$2_firstTab_lastTab$$)), "bottom" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_dockSide$ && ($JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setTranslateY$(-$ech$$2$$), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setTranslateY$($ech$$2$$), 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setTranslateY$($ech$$2$$)), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_setContentClipPath$($clipRect$$));
  $expandedContentWidth_tab$$2_xx$$41$$ = $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_tabs$[$edgeX_id$$178$$];
  var $borderPath$$;
  $edgeX_id$$178$$ = $ecw$$2_firstTab_lastTab$$;
  "right" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_discloseDirection$ && ($edgeX_id$$178$$ = -$ecw$$2_firstTab_lastTab$$);
  "top" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_dockSide$ ? $expandedContentWidth_tab$$2_xx$$41$$ ? ($borderPath$$ = ["M", 0, 0, "L", 0, $expandedContentWidth_tab$$2_xx$$41$$.$getTranslateY$(), "M", 0, $expandedContentWidth_tab$$2_xx$$41$$.$getTranslateY$() + 42], $ecw$$2_firstTab_lastTab$$ = $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_tabs$[$JSCompiler_StaticMethods__refreshPanelSize$self$$.$_panelOrder$[$JSCompiler_StaticMethods__refreshPanelSize$self$$.$_panelOrder$.length - 
  1]], $borderPath$$.push("L", 0, $ecw$$2_firstTab_lastTab$$.$getTranslateY$() + 42), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setCommands$($borderPath$$), $borderPath$$ = ["M", 0, $ecw$$2_firstTab_lastTab$$.$getTranslateY$() + 42, "L", 0, $ech$$2$$, "L", 1.25 * $edgeX_id$$178$$, $ech$$2$$]) : ($borderPath$$ = ["M", 0, 0, "L", 0, $ech$$2$$, "L", $edgeX_id$$178$$, $ech$$2$$], $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setCommands$($borderPath$$)) : 
  "bottom" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_dockSide$ && ($expandedContentWidth_tab$$2_xx$$41$$ ? ($borderPath$$ = ["M", 0, 0, "L", 0, $expandedContentWidth_tab$$2_xx$$41$$.$getTranslateY$() + 42, "M", 0, $expandedContentWidth_tab$$2_xx$$41$$.$getTranslateY$()], $ecw$$2_firstTab_lastTab$$ = $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_tabs$[$JSCompiler_StaticMethods__refreshPanelSize$self$$.$_panelOrder$[0]], $borderPath$$.push("L", 0, $ecw$$2_firstTab_lastTab$$.$getTranslateY$()), 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setCommands$($borderPath$$), $edgeX_id$$178$$ *= 1.25, $borderPath$$ = ["M", 0, $ecw$$2_firstTab_lastTab$$.$getTranslateY$(), "L", 0, -$ech$$2$$, "L", $edgeX_id$$178$$, -$ech$$2$$]) : ($borderPath$$ = ["M", 0, 0, "L", 0, -$ech$$2$$, "L", $edgeX_id$$178$$, -$ech$$2$$], $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setCommands$($borderPath$$)));
  $anim$$33$$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$33$$, "typePath", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$getCommands$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setCommands$, $borderPath$$) : $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setCommands$($borderPath$$)
};
D.$DvtPanelDrawer$$.prototype.$_setContentClipPath$ = function $$DvtPanelDrawer$$$$$_setContentClipPath$$($rect$$35$$) {
  if(this.$_expandedContentPanel$ && $rect$$35$$) {
    var $clipPath$$7$$ = new D.$DvtClipPath$$("pdcp" + this.$_sid$);
    (0,D.$JSCompiler_StaticMethods_addRect$$)($clipPath$$7$$, $rect$$35$$.x, $rect$$35$$.y, $rect$$35$$.$w$, $rect$$35$$.$h$);
    (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this.$_expandedContentPanel$, $clipPath$$7$$)
  }
  this.$_contentClipPath$ = $rect$$35$$
};
D.$DvtPanelDrawer$$.prototype.$_getContentClipPath$ = (0,D.$JSCompiler_get$$)("$_contentClipPath$");
D.$JSCompiler_StaticMethods_GetExpandedContentWidth$$ = function $$JSCompiler_StaticMethods_GetExpandedContentWidth$$$($JSCompiler_StaticMethods_GetExpandedContentWidth$self$$, $preferredWidth$$) {
  var $ww$$96$$ = $preferredWidth$$ + 2 * $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_contentPadding$;
  if(($JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_minWidth$ || 0 == $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_minWidth$) && $ww$$96$$ < $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_minWidth$) {
    $ww$$96$$ = $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_minWidth$
  }
  $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_maxWidth$ && $ww$$96$$ > $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_maxWidth$ && ($ww$$96$$ = $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_maxWidth$);
  return $ww$$96$$
};
D.$JSCompiler_StaticMethods_GetExpandedContentHeight$$ = function $$JSCompiler_StaticMethods_GetExpandedContentHeight$$$($JSCompiler_StaticMethods_GetExpandedContentHeight$self$$, $preferredHeight$$) {
  var $hh$$82$$ = $preferredHeight$$ + 2 * $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_contentPadding$;
  if(($JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_minHeight$ || 0 == $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_minHeight$) && $hh$$82$$ < $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_minHeight$) {
    $hh$$82$$ = $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_minHeight$
  }
  $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_maxHeight$ && $hh$$82$$ > $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_maxHeight$ && ($hh$$82$$ = $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_maxHeight$);
  return $hh$$82$$
};
D.$JSCompiler_StaticMethods_ApplyFillAlpha$$ = function $$JSCompiler_StaticMethods_ApplyFillAlpha$$$($JSCompiler_StaticMethods_ApplyFillAlpha$self$$, $alpha$$31$$) {
  if($JSCompiler_StaticMethods_ApplyFillAlpha$self$$.$_expandedContent$) {
    var $fill$$55$$ = $JSCompiler_StaticMethods_ApplyFillAlpha$self$$.$_expandedContent$.$getFill$().clone();
    $fill$$55$$.$setAlpha$($alpha$$31$$);
    $JSCompiler_StaticMethods_ApplyFillAlpha$self$$.$_expandedContent$.$setFill$($fill$$55$$)
  }
  for(var $panelId$$6$$ in $JSCompiler_StaticMethods_ApplyFillAlpha$self$$.$_tabs$) {
    var $tab$$3$$ = $JSCompiler_StaticMethods_ApplyFillAlpha$self$$.$_tabs$[$panelId$$6$$];
    $tab$$3$$ && ($fill$$55$$ = $tab$$3$$.$getFill$().clone(), $fill$$55$$.$setAlpha$($alpha$$31$$), $tab$$3$$.$setFill$($fill$$55$$))
  }
};
D.$JSCompiler_StaticMethods_ApplyStrokeAlpha$$ = function $$JSCompiler_StaticMethods_ApplyStrokeAlpha$$$($JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$) {
  if($JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorder$) {
    var $stroke$$85$$ = $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorder$.$getStroke$().clone();
    $stroke$$85$$.$setAlpha$(1);
    $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorder$.$setStroke$($stroke$$85$$)
  }
  $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorderResizable$ && ($stroke$$85$$ = $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorderResizable$.$getStroke$().clone(), $stroke$$85$$.$setAlpha$(1), $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorderResizable$.$setStroke$($stroke$$85$$));
  for(var $panelId$$7$$ in $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_tabs$) {
    var $tab$$4$$ = $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_tabs$[$panelId$$7$$];
    $tab$$4$$ && ($stroke$$85$$ = $tab$$4$$.$getStroke$().clone(), $stroke$$85$$.$setAlpha$(1), $tab$$4$$.$setStroke$($stroke$$85$$))
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanelDrawer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$deEmphasizeStart$ = function $$JSCompiler_prototypeAlias$$$$deEmphasizeStart$$() {
  this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  (0,D.$JSCompiler_StaticMethods_ApplyFillAlpha$$)(this, 1);
  (0,D.$JSCompiler_StaticMethods_ApplyStrokeAlpha$$)(this);
  this.$_expandedContentPanel$ && this.$_expandedContentPanel$.$setAlpha$(1);
  for(var $panelId$$8$$ in this.$_tabs$) {
    var $icon$$34$$ = this.$_panels$[$panelId$$8$$].icon;
    $icon$$34$$ && $icon$$34$$.$setAlpha$(1)
  }
};
D.$JSCompiler_prototypeAlias$$.$deEmphasizeEnd$ = function $$JSCompiler_prototypeAlias$$$$deEmphasizeEnd$$() {
  this.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$);
  (0,D.$JSCompiler_StaticMethods_ApplyFillAlpha$$)(this, this.$_bgAlpha$);
  (0,D.$JSCompiler_StaticMethods_ApplyStrokeAlpha$$)(this);
  this.$_expandedContentPanel$ && this.$_expandedContentPanel$.$setAlpha$(1);
  for(var $panelId$$9$$ in this.$_tabs$) {
    var $icon$$35$$ = this.$_panels$[$panelId$$9$$].icon;
    $icon$$35$$ && $icon$$35$$.$setAlpha$(1)
  }
  this.$HandleRollOut$(D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleRollOver$ = function $$JSCompiler_prototypeAlias$$$$HandleRollOver$$() {
  this.$ApplyAlphasRollover$()
};
D.$JSCompiler_prototypeAlias$$.$HandleRollOut$ = function $$JSCompiler_prototypeAlias$$$$HandleRollOut$$() {
  this.$_bFocus$ || this.$ApplyAlphasRollout$()
};
D.$JSCompiler_prototypeAlias$$.$ApplyAlphasRollover$ = function $$JSCompiler_prototypeAlias$$$$ApplyAlphasRollover$$() {
  (0,D.$JSCompiler_StaticMethods_ApplyFillAlpha$$)(this, 1)
};
D.$JSCompiler_prototypeAlias$$.$ApplyAlphasRollout$ = function $$JSCompiler_prototypeAlias$$$$ApplyAlphasRollout$$() {
  (0,D.$JSCompiler_StaticMethods_ApplyFillAlpha$$)(this, this.$_bgAlpha$)
};
D.$JSCompiler_prototypeAlias$$.$ChangeTabsState$ = function $$JSCompiler_prototypeAlias$$$$ChangeTabsState$$() {
  for(var $panelId$$10$$ in this.$_tabs$) {
    var $tab$$5$$ = this.$_tabs$[$panelId$$10$$];
    $tab$$5$$ && ($panelId$$10$$ == (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)(this) && this.$isDisclosed$() ? ($tab$$5$$.$setSolidFill$(this.$_bgColor$, this.$_bgAlpha$), $tab$$5$$.$setSolidStroke$(this.$_borderColor$, 1)) : ($tab$$5$$.$setSolidFill$(this.$_bgInactiveColor$, this.$_bgAlpha$), $tab$$5$$.$setSolidStroke$(this.$_borderInactiveColor$, 1)));
    var $bActivePanel$$ = this.$isDisclosed$() && $panelId$$10$$ == (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)(this), $icon$$36$$ = this.$_panels$[$panelId$$10$$].icon;
    $icon$$36$$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)($icon$$36$$, $bActivePanel$$);
    $bActivePanel$$ ? this.$_activeContent$.$addChild$($tab$$5$$) : this.$_contentPane$.$addChildAt$($tab$$5$$, 0)
  }
};
D.$JSCompiler_prototypeAlias$$.$addAccessibilityAttributes$ = function $$JSCompiler_prototypeAlias$$$$addAccessibilityAttributes$$($obj$$187$$, $desc$$12$$) {
  $obj$$187$$ && $desc$$12$$ && ($obj$$187$$.$setAriaRole$("img"), (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($obj$$187$$, "label", $desc$$12$$))
};
D.$JSCompiler_StaticMethods_setMaxContainerHeight$$ = function $$JSCompiler_StaticMethods_setMaxContainerHeight$$$($JSCompiler_StaticMethods_setMaxContainerHeight$self$$, $height$$127$$) {
  if(!$JSCompiler_StaticMethods_setMaxContainerHeight$self$$.$_maxContainerHeight$ || $JSCompiler_StaticMethods_setMaxContainerHeight$self$$.$_maxContainerHeight$ < $height$$127$$) {
    $JSCompiler_StaticMethods_setMaxContainerHeight$self$$.$_maxContainerHeight$ = $height$$127$$
  }
};
D.$DvtPanelDrawer$$.prototype.$getDimensions$ = function $$DvtPanelDrawer$$$$$getDimensions$$($dim$$42_targetCoordinateSpace$$18$$) {
  $dim$$42_targetCoordinateSpace$$18$$ = D.$DvtPanelDrawer$$.$superclass$.$getDimensions$.call(this, $dim$$42_targetCoordinateSpace$$18$$);
  $dim$$42_targetCoordinateSpace$$18$$.$w$ /= 1.25;
  return $dim$$42_targetCoordinateSpace$$18$$
};
D.$DvtPanelDrawerEventManager$$ = function $$DvtPanelDrawerEventManager$$$($context$$220$$, $callback$$80$$, $callbackObj$$43$$) {
  this.Init($context$$220$$, $callback$$80$$, $callbackObj$$43$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanelDrawerEventManager$$, D.$DvtEventManager$$, "DvtPanelDrawerEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanelDrawerEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$332$$) {
  var $obj$$138$$ = this.$GetLogicalObject$((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$332$$));
  D.$DvtPanelDrawerEventManager$$.$superclass$.$OnClick$.call(this, $event$$332$$);
  $obj$$138$$ && ($obj$$138$$.$HandleClick$ && $obj$$138$$.$HandleClick$($event$$332$$), $event$$332$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnDblClick$ = function $$JSCompiler_prototypeAlias$$$$OnDblClick$$($event$$333$$) {
  D.$DvtPanelDrawerEventManager$$.$superclass$.$OnDblClick$.call(this, $event$$333$$);
  var $obj$$139$$ = this.$GetLogicalObject$((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$333$$));
  $obj$$139$$ && ($obj$$139$$.$isDoubleClickable$ && ($obj$$139$$.$isDoubleClickable$() && $obj$$139$$.$HandleDblClick$) && $obj$$139$$.$HandleDblClick$($event$$333$$), $event$$333$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnRollOver$ = function $$JSCompiler_prototypeAlias$$$$OnRollOver$$($event$$334$$) {
  D.$DvtPanelDrawerEventManager$$.$superclass$.$OnRollOver$.call(this, $event$$334$$);
  var $obj$$140$$ = this.$GetLogicalObject$((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$334$$));
  $obj$$140$$ && $obj$$140$$.$HandleRollOver$ && $obj$$140$$.$HandleRollOver$($event$$334$$)
};
D.$JSCompiler_prototypeAlias$$.$OnRollOut$ = function $$JSCompiler_prototypeAlias$$$$OnRollOut$$($event$$335$$) {
  D.$DvtPanelDrawerEventManager$$.$superclass$.$OnRollOut$.call(this, $event$$335$$);
  var $obj$$141$$ = this.$GetLogicalObject$((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$335$$));
  $obj$$141$$ && $obj$$141$$.$HandleRollOut$ && $obj$$141$$.$HandleRollOut$($event$$335$$)
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchClick$$($event$$336$$) {
  var $obj$$142$$ = this.$GetLogicalObject$((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$336$$));
  D.$DvtPanelDrawerEventManager$$.$superclass$.$OnComponentTouchClick$.call(this, $event$$336$$);
  $obj$$142$$ && ($obj$$142$$.$HandleClick$ && $obj$$142$$.$HandleClick$($event$$336$$), $event$$336$$.stopPropagation())
};
D.$DvtAccordion$$ = function $$DvtAccordion$$$($context$$424$$, $id$$183$$, $w$$37$$, $h$$32$$, $eventManager$$35$$, $images$$26$$, $styleMap$$83$$) {
  this.Init($context$$424$$, $id$$183$$, $w$$37$$, $h$$32$$, $eventManager$$35$$, $images$$26$$, $styleMap$$83$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtAccordion$$, D.$DvtContainer$$, "DvtAccordion");
D.$DvtAccordion$$.prototype.Init = function $$DvtAccordion$$$$Init$($context$$425$$, $id$$184$$, $w$$38$$, $h$$33$$, $eventManager$$36$$, $images$$27$$, $styleMap$$84$$) {
  D.$DvtAccordion$$.$superclass$.Init.call(this, $context$$425$$, D.$JSCompiler_alias_NULL$$, $id$$184$$);
  this.$_images$ = $images$$27$$;
  this.$_styleMap$ = (new D.$DvtAccordionDefaults$$).$calcOptions$($styleMap$$84$$);
  this.$_sections$ = {};
  this.$_sectionOrder$ = [];
  this.$_maxWidth$ = $w$$38$$;
  this.$_minWidth$ = 0;
  this.$_maxHeight$ = $h$$33$$;
  this.$_bExpandMany$ = this.$_bCollapseAll$ = D.$JSCompiler_alias_FALSE$$;
  this.$_eventManager$ = $eventManager$$36$$;
  this.$_eventManager$.$addListeners$(this);
  this.$_eventManager$.$associate$(this, this)
};
D.$JSCompiler_StaticMethods_addSection$$ = function $$JSCompiler_StaticMethods_addSection$$$($JSCompiler_StaticMethods_addSection$self$$, $accordionSection_title$$13$$, $sectionContent$$1$$, $isActive$$3$$, $id$$185$$) {
  $id$$185$$ || ($id$$185$$ = "accordion_" + $accordionSection_title$$13$$.replace(/ /g, "_") + window.Math.floor(1E9 * window.Math.random()));
  $accordionSection_title$$13$$ = new D.$DvtAccordionSection$$($JSCompiler_StaticMethods_addSection$self$$.$_context$, $sectionContent$$1$$, $accordionSection_title$$13$$, $isActive$$3$$, D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_addSection$self$$, $JSCompiler_StaticMethods_addSection$self$$.$_eventManager$, $id$$185$$, $JSCompiler_StaticMethods_addSection$self$$.$_images$, $JSCompiler_StaticMethods_addSection$self$$.$_styleMap$);
  $JSCompiler_StaticMethods_addSection$self$$.$_sections$[$id$$185$$] = $accordionSection_title$$13$$;
  $JSCompiler_StaticMethods_addSection$self$$.$_sectionOrder$.push($id$$185$$);
  $JSCompiler_StaticMethods_addSection$self$$.$addChild$($accordionSection_title$$13$$)
};
D.$DvtAccordion$$.prototype.$render$ = function $$DvtAccordion$$$$$render$$() {
  for(var $maxSectionWidth$$ = (0,D.$JSCompiler_StaticMethods_getMaxSectionWidth$$)(this), $bHasActive$$ = D.$JSCompiler_alias_FALSE$$, $i$$617$$ = 0;$i$$617$$ < this.$_sectionOrder$.length;$i$$617$$++) {
    var $section$$13$$ = (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)(this, $i$$617$$);
    $section$$13$$.$render$($maxSectionWidth$$);
    $bHasActive$$ && !this.$_bExpandMany$ && $section$$13$$.setActive(D.$JSCompiler_alias_FALSE$$);
    $section$$13$$.$_isActive$ && $section$$13$$.$_isCollapsible$ && ($bHasActive$$ = D.$JSCompiler_alias_TRUE$$)
  }
  !$bHasActive$$ && (0 < this.$_sectionOrder$.length && !this.$_bCollapseAll$) && (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)(this, 0).setActive(D.$JSCompiler_alias_TRUE$$);
  (0,D.$JSCompiler_StaticMethods__drawSections$$)(this)
};
D.$DvtAccordion$$.prototype.$setMaxHeight$ = (0,D.$JSCompiler_set$$)("$_maxHeight$");
D.$DvtAccordion$$.prototype.$setMaxWidth$ = (0,D.$JSCompiler_set$$)("$_maxWidth$");
D.$DvtAccordion$$.prototype.$Update$ = function $$DvtAccordion$$$$$Update$$($activeSection_activeSectionId$$1$$) {
  $activeSection_activeSectionId$$1$$ = this.$_sections$[$activeSection_activeSectionId$$1$$];
  var $JSCompiler_temp$$333_currActiveState_i$$618_section$$inline_7133$$ = $activeSection_activeSectionId$$1$$.$_isActive$;
  if($JSCompiler_temp$$333_currActiveState_i$$618_section$$inline_7133$$) {
    if($JSCompiler_temp$$333_currActiveState_i$$618_section$$inline_7133$$) {
      if($activeSection_activeSectionId$$1$$.$_isCollapsible$) {
        if(this.$_bCollapseAll$) {
          $JSCompiler_temp$$333_currActiveState_i$$618_section$$inline_7133$$ = D.$JSCompiler_alias_TRUE$$
        }else {
          for(var $expandedSectionCounter$$inline_7134$$ = 0, $i$$inline_7135$$ = 0;$i$$inline_7135$$ < this.$_sectionOrder$.length;$i$$inline_7135$$++) {
            $JSCompiler_temp$$333_currActiveState_i$$618_section$$inline_7133$$ = (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)(this, $i$$inline_7135$$), $JSCompiler_temp$$333_currActiveState_i$$618_section$$inline_7133$$.$_isActive$ && $expandedSectionCounter$$inline_7134$$++
          }
          $JSCompiler_temp$$333_currActiveState_i$$618_section$$inline_7133$$ = 1 < $expandedSectionCounter$$inline_7134$$
        }
      }else {
        $JSCompiler_temp$$333_currActiveState_i$$618_section$$inline_7133$$ = D.$JSCompiler_alias_FALSE$$
      }
    }
    $JSCompiler_temp$$333_currActiveState_i$$618_section$$inline_7133$$ && $activeSection_activeSectionId$$1$$.setActive(D.$JSCompiler_alias_FALSE$$)
  }else {
    if(!this.$_bExpandMany$) {
      for($JSCompiler_temp$$333_currActiveState_i$$618_section$$inline_7133$$ = 0;$JSCompiler_temp$$333_currActiveState_i$$618_section$$inline_7133$$ < this.$_sectionOrder$.length;$JSCompiler_temp$$333_currActiveState_i$$618_section$$inline_7133$$++) {
        (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)(this, $JSCompiler_temp$$333_currActiveState_i$$618_section$$inline_7133$$).setActive(D.$JSCompiler_alias_FALSE$$)
      }
    }
    $activeSection_activeSectionId$$1$$.setActive(D.$JSCompiler_alias_TRUE$$)
  }
  (0,D.$JSCompiler_StaticMethods__drawSections$$)(this)
};
D.$JSCompiler_StaticMethods_getMaxSectionWidth$$ = function $$JSCompiler_StaticMethods_getMaxSectionWidth$$$($JSCompiler_StaticMethods_getMaxSectionWidth$self$$) {
  if(!$JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_maxSectionWidth$) {
    for(var $maxSectionWidth$$1$$ = 0, $paddingX$$1$$ = $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_styleMap$.paddingX, $i$$619$$ = 0;$i$$619$$ < $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_sectionOrder$.length;$i$$619$$++) {
      var $secWidth_section$$14$$ = (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)($JSCompiler_StaticMethods_getMaxSectionWidth$self$$, $i$$619$$), $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7137_dim$$44$$;
      $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7137_dim$$44$$ = $secWidth_section$$14$$;
      if(!$JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7137_dim$$44$$.$_titleDim$) {
        var $dim$$inline_7139_text$$inline_7138$$ = new D.$DvtOutputText$$($JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7137_dim$$44$$.$_context$, $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7137_dim$$44$$.$_title$);
        $dim$$inline_7139_text$$inline_7138$$.$setCSSStyle$($JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7137_dim$$44$$.$_titleStyle$);
        if($dim$$inline_7139_text$$inline_7138$$ = $dim$$inline_7139_text$$inline_7138$$.$measureDimensions$()) {
          $dim$$inline_7139_text$$inline_7138$$.$w$ = $dim$$inline_7139_text$$inline_7138$$.$w$ + $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7137_dim$$44$$.$_imageWidth$ + $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7137_dim$$44$$.$_textPadding$
        }
        $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7137_dim$$44$$.$_titleDim$ = $dim$$inline_7139_text$$inline_7138$$
      }
      $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7137_dim$$44$$ = $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7137_dim$$44$$.$_titleDim$;
      $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7137_dim$$44$$.$w$ > $maxSectionWidth$$1$$ && ($maxSectionWidth$$1$$ = $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7137_dim$$44$$.$w$);
      $secWidth_section$$14$$ = $secWidth_section$$14$$.$getContentDimensions$().$w$ + 2 * $paddingX$$1$$;
      $secWidth_section$$14$$ > $maxSectionWidth$$1$$ && ($maxSectionWidth$$1$$ = $secWidth_section$$14$$)
    }
    $maxSectionWidth$$1$$ = window.Math.min($maxSectionWidth$$1$$, $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_maxWidth$);
    $maxSectionWidth$$1$$ = window.Math.max($maxSectionWidth$$1$$, $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_minWidth$);
    $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_maxSectionWidth$ = $maxSectionWidth$$1$$
  }
  return $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_maxSectionWidth$
};
D.$JSCompiler_StaticMethods_getSectionByIndex$$ = function $$JSCompiler_StaticMethods_getSectionByIndex$$$($JSCompiler_StaticMethods_getSectionByIndex$self$$, $index$$158$$) {
  return 0 <= $index$$158$$ && $index$$158$$ < $JSCompiler_StaticMethods_getSectionByIndex$self$$.$_sectionOrder$.length ? $JSCompiler_StaticMethods_getSectionByIndex$self$$.$_sections$[$JSCompiler_StaticMethods_getSectionByIndex$self$$.$_sectionOrder$[$index$$158$$]] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__drawSections$$ = function $$JSCompiler_StaticMethods__drawSections$$$($JSCompiler_StaticMethods__drawSections$self$$) {
  for(var $currY$$15_dims$$45$$ = 0, $i$$622$$ = 0;$i$$622$$ < $JSCompiler_StaticMethods__drawSections$self$$.$_sectionOrder$.length;$i$$622$$++) {
    var $section$$17$$ = (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)($JSCompiler_StaticMethods__drawSections$self$$, $i$$622$$);
    $section$$17$$.$setTranslateY$($currY$$15_dims$$45$$);
    $section$$17$$.$_isActive$ ? ($section$$17$$.expand(), $currY$$15_dims$$45$$ += $section$$17$$.$getDimensionsWithStroke$().$h$, $currY$$15_dims$$45$$ += $JSCompiler_StaticMethods__drawSections$self$$.$_styleMap$.paddingY) : ($section$$17$$.collapse(), $currY$$15_dims$$45$$ += $JSCompiler_StaticMethods__drawSections$self$$.$_styleMap$.sectionHeader.headerHeight)
  }
  $currY$$15_dims$$45$$ = $JSCompiler_StaticMethods__drawSections$self$$.$getDimensionsWithStroke$();
  $JSCompiler_StaticMethods__drawSections$self$$.$FireListener$(new D.$DvtResizeEvent$$($currY$$15_dims$$45$$.$w$, $currY$$15_dims$$45$$.$h$, 0, 0))
};
D.$DvtAccordionSection$$ = function $$DvtAccordionSection$$$($context$$221$$, $section$$6$$, $title$$10$$, $isActive$$1$$, $isCollapsible$$, $parent$$41$$, $eventManager$$12$$, $id$$99$$, $images$$10$$, $styleMap$$39$$) {
  this.Init($context$$221$$, $section$$6$$, $title$$10$$, $isActive$$1$$, $isCollapsible$$, $parent$$41$$, $eventManager$$12$$, $id$$99$$, $images$$10$$, $styleMap$$39$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtAccordionSection$$, D.$DvtContainer$$, "DvtAccordionSection");
D.$JSCompiler_prototypeAlias$$ = D.$DvtAccordionSection$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$222$$, $section$$7$$, $title$$11$$, $isActive$$2$$, $isCollapsible$$1$$, $parent$$42$$, $eventManager$$13$$, $id$$100$$, $images$$11$$, $styleMap$$40$$) {
  D.$DvtAccordionSection$$.$superclass$.Init.call(this, $context$$222$$, D.$JSCompiler_alias_NULL$$, $id$$100$$);
  this.$_parent$ = $parent$$42$$;
  this.$_images$ = $images$$11$$;
  this.$_title$ = $title$$11$$;
  this.$_id$ = $id$$100$$;
  this.$_sectionContent$ = $section$$7$$;
  this.$_collapsedBtn$ = this.$_expandedBtn$ = D.$JSCompiler_alias_NULL$$;
  this.$_isActive$ = (this.$_isCollapsible$ = $isCollapsible$$1$$) ? $isActive$$2$$ : D.$JSCompiler_alias_TRUE$$;
  this.$_eventManager$ = $eventManager$$13$$;
  this.$_styleMap$ = $styleMap$$40$$;
  this.$_headerHeight$ = this.$_styleMap$.sectionHeader.headerHeight;
  this.$_paddingX$ = this.$_styleMap$.paddingX;
  this.$_paddingY$ = this.$_styleMap$.paddingY;
  this.$_titleStyle$ = this.$_styleMap$.sectionHeader.styleEna;
  this.$_imageWidth$ = this.$_styleMap$.sectionHeader.imageWidth;
  this.$_imageHeight$ = this.$_styleMap$.sectionHeader.imageHeight;
  this.$_textPadding$ = this.$_styleMap$.sectionHeader.textPadding
};
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getTitle$ = (0,D.$JSCompiler_get$$)("$_title$");
D.$JSCompiler_prototypeAlias$$.setActive = (0,D.$JSCompiler_set$$)("$_isActive$");
D.$JSCompiler_prototypeAlias$$.$getContentDimensions$ = function $$JSCompiler_prototypeAlias$$$$getContentDimensions$$() {
  var $dim$$19$$ = D.$JSCompiler_alias_NULL$$;
  0 > this.$getChildIndex$(this.$_sectionContent$) ? (this.$addChild$(this.$_sectionContent$), $dim$$19$$ = this.$_sectionContent$.$getDimensions$(), this.removeChild(this.$_sectionContent$)) : $dim$$19$$ = this.$_sectionContent$.$getDimensions$();
  return $dim$$19$$
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($base$$inline_5023_proxy$$inline_5022_width$$79$$) {
  var $height$$inline_5020_text$$inline_5024$$ = this.$_headerHeight$;
  if(this.$_isCollapsible$) {
    this.$_images$.$getAttr$ ? (window.ena = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 0, this.$_images$.$getAttr$("sectionExpEna"), this.$_title$, $base$$inline_5023_proxy$$inline_5022_width$$79$$, $height$$inline_5020_text$$inline_5024$$), window.ovr = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 1, this.$_images$.$getAttr$("sectionExpOvr"), this.$_title$, $base$$inline_5023_proxy$$inline_5022_width$$79$$, $height$$inline_5020_text$$inline_5024$$), window.dwn = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 
    2, this.$_images$.$getAttr$("sectionExpDwn"), this.$_title$, $base$$inline_5023_proxy$$inline_5022_width$$79$$, $height$$inline_5020_text$$inline_5024$$)) : (window.ena = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 0, this.$_images$.sectionExpEna, this.$_title$, $base$$inline_5023_proxy$$inline_5022_width$$79$$, $height$$inline_5020_text$$inline_5024$$), window.ovr = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 1, this.$_images$.sectionExpOvr, this.$_title$, $base$$inline_5023_proxy$$inline_5022_width$$79$$, 
    $height$$inline_5020_text$$inline_5024$$), window.dwn = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 2, this.$_images$.sectionExpDwn, this.$_title$, $base$$inline_5023_proxy$$inline_5022_width$$79$$, $height$$inline_5020_text$$inline_5024$$));
    this.$_expandedBtn$ = new D.$DvtButton$$(this.$_context$, window.ena, window.ovr, window.dwn);
    this.$_images$.$getAttr$ ? (window.ena = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 0, this.$_images$.$getAttr$("sectionColEna"), this.$_title$, $base$$inline_5023_proxy$$inline_5022_width$$79$$, $height$$inline_5020_text$$inline_5024$$), window.ovr = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 1, this.$_images$.$getAttr$("sectionColOvr"), this.$_title$, $base$$inline_5023_proxy$$inline_5022_width$$79$$, $height$$inline_5020_text$$inline_5024$$), window.dwn = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 
    2, this.$_images$.$getAttr$("sectionColDwn"), this.$_title$, $base$$inline_5023_proxy$$inline_5022_width$$79$$, $height$$inline_5020_text$$inline_5024$$)) : (window.ena = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 0, this.$_images$.sectionColEna, this.$_title$, $base$$inline_5023_proxy$$inline_5022_width$$79$$, $height$$inline_5020_text$$inline_5024$$), window.ovr = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 1, this.$_images$.sectionColOvr, this.$_title$, $base$$inline_5023_proxy$$inline_5022_width$$79$$, 
    $height$$inline_5020_text$$inline_5024$$), window.dwn = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 2, this.$_images$.sectionColDwn, this.$_title$, $base$$inline_5023_proxy$$inline_5022_width$$79$$, $height$$inline_5020_text$$inline_5024$$));
    this.$_collapsedBtn$ = new D.$DvtButton$$(this.$_context$, window.ena, window.ovr, window.dwn);
    var $thisRef$$inline_5021$$ = this;
    $base$$inline_5023_proxy$$inline_5022_width$$79$$ = {$HandleClick$:function $$base$$inline_5023_proxy$$inline_5022_width$$79$$$$HandleClick$$() {
      $thisRef$$inline_5021$$.$_parent$.$Update$($thisRef$$inline_5021$$.getId())
    }};
    this.$_eventManager$.$associate$(this.$_expandedBtn$, $base$$inline_5023_proxy$$inline_5022_width$$79$$);
    this.$_eventManager$.$associate$(this.$_collapsedBtn$, $base$$inline_5023_proxy$$inline_5022_width$$79$$)
  }else {
    $base$$inline_5023_proxy$$inline_5022_width$$79$$ = (0,D.$JSCompiler_StaticMethods__createButtonBase$$)(this, 3, $base$$inline_5023_proxy$$inline_5022_width$$79$$, $height$$inline_5020_text$$inline_5024$$), $height$$inline_5020_text$$inline_5024$$ = (0,D.$JSCompiler_StaticMethods__createButtonText$$)(this, this.$_title$), this.$_header$ = new D.$DvtContainer$$(this.$_context$), this.$_header$.$addChild$($base$$inline_5023_proxy$$inline_5022_width$$79$$), this.$_header$.$addChild$($height$$inline_5020_text$$inline_5024$$)
  }
  this.$_isCollapsible$ ? this.$_isActive$ ? (this.$addChildAt$(this.$_expandedBtn$, 0), this.$addChild$(this.$_sectionContent$), this.$_sectionContent$.$setTranslateX$(this.$_paddingX$), this.$_sectionContent$.$setTranslateY$(this.$_headerHeight$ + this.$_paddingY$)) : this.$addChild$(this.$_collapsedBtn$) : (this.$addChildAt$(this.$_header$, 0), this.$addChild$(this.$_sectionContent$), this.$_sectionContent$.$setTranslateX$(this.$_paddingX$), this.$_sectionContent$.$setTranslateY$(this.$_headerHeight$ + 
  this.$_paddingY$))
};
D.$JSCompiler_prototypeAlias$$.collapse = function $$JSCompiler_prototypeAlias$$$collapse$() {
  this.$_isCollapsible$ && (0 <= this.$getChildIndex$(this.$_expandedBtn$) && this.removeChild(this.$_expandedBtn$), 0 <= this.$getChildIndex$(this.$_sectionContent$) && this.removeChild(this.$_sectionContent$), this.$addChild$(this.$_collapsedBtn$), this.setActive(D.$JSCompiler_alias_FALSE$$))
};
D.$JSCompiler_prototypeAlias$$.expand = function $$JSCompiler_prototypeAlias$$$expand$() {
  0 <= this.$getChildIndex$(this.$_collapsedBtn$) && this.removeChild(this.$_collapsedBtn$);
  this.$addChild$(this.$_expandedBtn$);
  this.$addChild$(this.$_sectionContent$);
  this.$_sectionContent$.$setTranslateX$(this.$_paddingX$);
  this.$_sectionContent$.$setTranslateY$(this.$_headerHeight$ + this.$_paddingY$);
  this.setActive(D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_StaticMethods__createHeaderState$$ = function $$JSCompiler_StaticMethods__createHeaderState$$$($JSCompiler_StaticMethods__createHeaderState$self_dim$$23$$, $base$$4_state$$66$$, $image$$4_uri$$11$$, $label$$42_text$$51$$, $ww$$75$$, $hh$$61$$) {
  var $imageWidth$$ = $JSCompiler_StaticMethods__createHeaderState$self_dim$$23$$.$_imageWidth$, $imageHeight$$ = $JSCompiler_StaticMethods__createHeaderState$self_dim$$23$$.$_imageHeight$, $imageOffsetY$$ = ($JSCompiler_StaticMethods__createHeaderState$self_dim$$23$$.$_headerHeight$ - $imageHeight$$) / 2, $buttonState$$1$$ = new D.$DvtContainer$$($JSCompiler_StaticMethods__createHeaderState$self_dim$$23$$.$_context$);
  $base$$4_state$$66$$ = (0,D.$JSCompiler_StaticMethods__createButtonBase$$)($JSCompiler_StaticMethods__createHeaderState$self_dim$$23$$, $base$$4_state$$66$$, $ww$$75$$, $hh$$61$$);
  $buttonState$$1$$.$addChild$($base$$4_state$$66$$);
  ($image$$4_uri$$11$$ = $image$$4_uri$$11$$ ? new D.$DvtImage$$($JSCompiler_StaticMethods__createHeaderState$self_dim$$23$$.$_context$, $image$$4_uri$$11$$, 0, $imageOffsetY$$, $imageWidth$$, $imageHeight$$) : D.$JSCompiler_alias_NULL$$) && $buttonState$$1$$.$addChild$($image$$4_uri$$11$$);
  $label$$42_text$$51$$ = (0,D.$JSCompiler_StaticMethods__createButtonText$$)($JSCompiler_StaticMethods__createHeaderState$self_dim$$23$$, $label$$42_text$$51$$, $ww$$75$$ - $imageWidth$$ - 0, $hh$$61$$, $buttonState$$1$$);
  (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods__createHeaderState$self_dim$$23$$.$_context$) ? ($JSCompiler_StaticMethods__createHeaderState$self_dim$$23$$ = $label$$42_text$$51$$.$measureDimensions$(), $label$$42_text$$51$$.$setTranslateX$($ww$$75$$ - $JSCompiler_StaticMethods__createHeaderState$self_dim$$23$$.$w$ - $imageWidth$$), $image$$4_uri$$11$$ && $image$$4_uri$$11$$.$setTranslateX$($ww$$75$$ - $imageWidth$$)) : $label$$42_text$$51$$.$setTranslateX$($imageWidth$$);
  return $buttonState$$1$$
};
D.$JSCompiler_StaticMethods__createButtonText$$ = function $$JSCompiler_StaticMethods__createButtonText$$$($JSCompiler_StaticMethods__createButtonText$self$$, $dims$$35_label$$43$$, $ww$$76$$, $hh$$62$$, $container$$40$$) {
  var $text$$52$$ = D.$JSCompiler_alias_NULL$$;
  if($dims$$35_label$$43$$) {
    $text$$52$$ = new D.$DvtOutputText$$($JSCompiler_StaticMethods__createButtonText$self$$.$_context$, $dims$$35_label$$43$$);
    $text$$52$$.$setCSSStyle$($JSCompiler_StaticMethods__createButtonText$self$$.$_titleStyle$);
    D.$DvtTextUtils$$.$fitText$($text$$52$$, $ww$$76$$, $hh$$62$$, $container$$40$$);
    $dims$$35_label$$43$$ = $text$$52$$.$measureDimensions$();
    if(!$JSCompiler_StaticMethods__createButtonText$self$$.$_titleDim$ || $JSCompiler_StaticMethods__createButtonText$self$$.$_titleDim$.$w$ < $dims$$35_label$$43$$.$w$ || $JSCompiler_StaticMethods__createButtonText$self$$.$_titleDim$.$h$ < $dims$$35_label$$43$$.$h$) {
      $JSCompiler_StaticMethods__createButtonText$self$$.$_titleDim$ = $dims$$35_label$$43$$
    }
    $text$$52$$.$setTranslateY$(($JSCompiler_StaticMethods__createButtonText$self$$.$_headerHeight$ - $dims$$35_label$$43$$.$h$) / 2)
  }
  return $text$$52$$
};
D.$JSCompiler_StaticMethods__createButtonBase$$ = function $$JSCompiler_StaticMethods__createButtonBase$$$($JSCompiler_StaticMethods__createButtonBase$self_base$$5$$, $state$$68$$, $ww$$77$$, $hh$$63$$) {
  var $style$$25$$ = D.$JSCompiler_alias_NULL$$;
  switch($state$$68$$) {
    case 1:
      $style$$25$$ = $JSCompiler_StaticMethods__createButtonBase$self_base$$5$$.$_styleMap$.sectionHeader.styleOvr;
      break;
    case 2:
      $style$$25$$ = $JSCompiler_StaticMethods__createButtonBase$self_base$$5$$.$_styleMap$.sectionHeader.styleDwn;
      break;
    case 3:
      $style$$25$$ = $JSCompiler_StaticMethods__createButtonBase$self_base$$5$$.$_styleMap$.sectionHeader.styleDis;
      break;
    default:
      $style$$25$$ = $JSCompiler_StaticMethods__createButtonBase$self_base$$5$$.$_styleMap$.sectionHeader.styleEna
  }
  $JSCompiler_StaticMethods__createButtonBase$self_base$$5$$ = new D.$DvtRect$$($JSCompiler_StaticMethods__createButtonBase$self_base$$5$$.$_context$, 0, 0, $ww$$77$$, $hh$$63$$);
  $JSCompiler_StaticMethods__createButtonBase$self_base$$5$$.$setStroke$((0,D.$DvtAccordionSection$_getStroke$$)($style$$25$$));
  $JSCompiler_StaticMethods__createButtonBase$self_base$$5$$.$setFill$((0,D.$DvtAccordionSection$_getFill$$)($style$$25$$));
  return $JSCompiler_StaticMethods__createButtonBase$self_base$$5$$
};
D.$DvtAccordionSection$_getFill$$ = function $$DvtAccordionSection$_getFill$$$($angle$$14_gradObj$$1_style$$26$$) {
  var $arColors$$4_color$$24$$ = $angle$$14_gradObj$$1_style$$26$$.$getStyle$("background-color");
  $angle$$14_gradObj$$1_style$$26$$ = (0,D.$JSCompiler_StaticMethods_getBackgroundImage$$)($angle$$14_gradObj$$1_style$$26$$);
  var $arAlphas$$4_fill$$34$$ = D.$JSCompiler_alias_NULL$$;
  if($angle$$14_gradObj$$1_style$$26$$ && $angle$$14_gradObj$$1_style$$26$$ instanceof D.$DvtCSSGradient$$) {
    var $arColors$$4_color$$24$$ = $angle$$14_gradObj$$1_style$$26$$.$_arColors$, $arAlphas$$4_fill$$34$$ = $angle$$14_gradObj$$1_style$$26$$.$_arAlphas$, $arStops$$4$$ = $angle$$14_gradObj$$1_style$$26$$.$_arRatios$;
    $angle$$14_gradObj$$1_style$$26$$ = $angle$$14_gradObj$$1_style$$26$$.$getAngle$();
    $arAlphas$$4_fill$$34$$ = new D.$DvtLinearGradientFill$$($angle$$14_gradObj$$1_style$$26$$, $arColors$$4_color$$24$$, $arAlphas$$4_fill$$34$$, $arStops$$4$$)
  }else {
    $arColors$$4_color$$24$$ && ($arAlphas$$4_fill$$34$$ = new D.$DvtSolidFill$$($arColors$$4_color$$24$$, 1))
  }
  return $arAlphas$$4_fill$$34$$
};
D.$DvtAccordionSection$_getStroke$$ = function $$DvtAccordionSection$_getStroke$$$($color$$25_style$$27$$) {
  $color$$25_style$$27$$ = $color$$25_style$$27$$.$getStyle$("border-color");
  return new D.$DvtSolidStroke$$($color$$25_style$$27$$, 1, 1)
};
D.$DvtAccordionDefaults$$ = function $$DvtAccordionDefaults$$$() {
  this.Init({skyros:D.$DvtAccordionDefaults$VERSION_1$$, alta:D.$DvtAccordionDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtAccordionDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtAccordionDefaults");
D.$DvtAccordionDefaults$VERSION_1$$ = {skin:"alta", sectionHeader:{styleEna:new D.$DvtCSSStyle$$("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), styleOvr:new D.$DvtCSSStyle$$("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), styleDwn:new D.$DvtCSSStyle$$("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), 
styleDis:new D.$DvtCSSStyle$$("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), headerHeight:33, imageWidth:24, imageHeight:24, textPadding:5}, paddingX:0, paddingY:0};
D.$DvtAccordionDefaults$SKIN_ALTA$$ = {};
D.$DvtTrain$$ = function $$DvtTrain$$$($context$$420$$, $eventManager$$32$$, $labels$$21$$, $buttonStyles$$5$$, $id$$179$$, $isAltaSkin$$4$$) {
  this.Init($context$$420$$, $eventManager$$32$$, $labels$$21$$, $buttonStyles$$5$$, $id$$179$$, $isAltaSkin$$4$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTrain$$, D.$DvtContainer$$, "DvtTrain");
D.$DvtTrain$$.prototype.Init = function $$DvtTrain$$$$Init$($context$$421$$, $eventManager$$33$$, $labels$$22$$, $buttonStyles$$6$$, $id$$180$$, $isAltaSkin$$5$$) {
  D.$DvtTrain$$.$superclass$.Init.call(this, $context$$421$$, D.$JSCompiler_alias_NULL$$, $id$$180$$);
  this.$_tooltipManager$ = $context$$421$$.$getTooltipManager$();
  this.$_labels$ = $labels$$22$$;
  this.$_buttonStyles$ = $buttonStyles$$6$$;
  this.$_count$ = $labels$$22$$.length;
  this.$_buttons$ = (0,window.Array)(this.$_count$);
  this.$_selectedIndex$ = 0;
  this.$_isAltaSkin$ = $isAltaSkin$$5$$;
  this.$RenderSelf$($eventManager$$33$$)
};
D.$DvtTrain$$.prototype.$setSelectedIndex$ = function $$DvtTrain$$$$$setSelectedIndex$$($index$$157$$) {
  0 <= $index$$157$$ && $index$$157$$ < this.$_count$ && (0,D.$JSCompiler_StaticMethods_SelectedIndexChanged$$)(this, this.$_selectedIndex$, $index$$157$$)
};
D.$DvtTrain$$.prototype.$HandleClick$ = function $$DvtTrain$$$$$HandleClick$$($event$$557_selIndex$$3$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$557_selIndex$$3$$);
  for(var $event$$inline_7115_i$$615$$ = 0;$event$$inline_7115_i$$615$$ < this.$_buttons$.length;$event$$inline_7115_i$$615$$++) {
    var $target$$76$$ = $event$$557_selIndex$$3$$.target;
    if(this.$_buttons$[$event$$inline_7115_i$$615$$] === $target$$76$$ || this.$_buttons$[$event$$inline_7115_i$$615$$] === $target$$76$$.getParent()) {
      $event$$557_selIndex$$3$$ = this.$_selectedIndex$;
      (0,D.$JSCompiler_StaticMethods_SelectedIndexChanged$$)(this, $event$$557_selIndex$$3$$, $event$$inline_7115_i$$615$$);
      $event$$557_selIndex$$3$$ != $event$$inline_7115_i$$615$$ && ($event$$inline_7115_i$$615$$ = new D.$DvtTrainEvent$$(this.$_selectedIndex$), this.$FireListener$($event$$inline_7115_i$$615$$, D.$JSCompiler_alias_FALSE$$));
      break
    }
  }
};
D.$JSCompiler_StaticMethods_SelectedIndexChanged$$ = function $$JSCompiler_StaticMethods_SelectedIndexChanged$$$($JSCompiler_StaticMethods_SelectedIndexChanged$self$$, $button$$72_oldIndex$$2$$, $newIndex$$6$$) {
  $JSCompiler_StaticMethods_SelectedIndexChanged$self$$.$_selectedIndex$ = $newIndex$$6$$;
  if($button$$72_oldIndex$$2$$ = $JSCompiler_StaticMethods_SelectedIndexChanged$self$$.$_buttons$[$button$$72_oldIndex$$2$$]) {
    $button$$72_oldIndex$$2$$.$overState$ && $button$$72_oldIndex$$2$$.$overState$.setCursor("pointer"), $button$$72_oldIndex$$2$$.$downState$ && $button$$72_oldIndex$$2$$.$downState$.setCursor("pointer"), (0,D.$JSCompiler_StaticMethods_setToggled$$)($button$$72_oldIndex$$2$$, D.$JSCompiler_alias_FALSE$$)
  }
  if($button$$72_oldIndex$$2$$ = $JSCompiler_StaticMethods_SelectedIndexChanged$self$$.$_buttons$[$newIndex$$6$$]) {
    $button$$72_oldIndex$$2$$.$overState$ && $button$$72_oldIndex$$2$$.$overState$.setCursor("default"), $button$$72_oldIndex$$2$$.$downState$ && $button$$72_oldIndex$$2$$.$downState$.setCursor("default"), (0,D.$JSCompiler_StaticMethods_setToggled$$)($button$$72_oldIndex$$2$$, D.$JSCompiler_alias_TRUE$$)
  }
};
D.$DvtTrain$$.prototype.$RenderSelf$ = function $$DvtTrain$$$$$RenderSelf$$($eventManager$$34$$) {
  var $bBiDi$$6$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$), $buttonSize_buttonStyle$$inline_7118$$;
  if(!this.$_buttonSize$) {
    if(this.$_buttonStyles$ && ($buttonSize_buttonStyle$$inline_7118$$ = this.$_buttonStyles$[0])) {
      this.$_buttonSize$ = (0,D.$DvtCSSStyle$toNumber$$)($buttonSize_buttonStyle$$inline_7118$$.getWidth())
    }
    this.$_buttonSize$ || (this.$_buttonSize$ = 8)
  }
  $buttonSize_buttonStyle$$inline_7118$$ = this.$_buttonSize$;
  for(var $i$$616$$ = 0;$i$$616$$ < this.$_count$;$i$$616$$++) {
    var $button$$73$$, $button$$inline_7121_j$$107$$ = $button$$73$$ = this.$CreateButton$($buttonSize_buttonStyle$$inline_7118$$, $i$$616$$ == this.$_selectedIndex$, this.$_labels$[$i$$616$$]);
    $button$$inline_7121_j$$107$$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandleClick$, D.$JSCompiler_alias_FALSE$$, this);
    (0,D.$DvtAgent$isTouchDevice$$)() || $button$$inline_7121_j$$107$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandleClick$, D.$JSCompiler_alias_FALSE$$, this);
    $button$$inline_7121_j$$107$$ = $i$$616$$;
    $bBiDi$$6$$ && ($button$$inline_7121_j$$107$$ = this.$_count$ - 1 - $i$$616$$);
    $eventManager$$34$$ && $eventManager$$34$$.$associate$($button$$73$$, $button$$73$$);
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($button$$73$$, $button$$inline_7121_j$$107$$ * ($buttonSize_buttonStyle$$inline_7118$$ + 3), this.$_isAltaSkin$ ? 0 : 1);
    this.$addChild$($button$$73$$);
    this.$_buttons$[$i$$616$$] = $button$$73$$
  }
};
D.$DvtTrain$$.prototype.$CreateButtonState$ = function $$DvtTrain$$$$$CreateButtonState$$($url$$28$$, $buttonSize$$2$$) {
  return new D.$DvtImage$$(this.$_context$, $url$$28$$, 0, 0, $buttonSize$$2$$, $buttonSize$$2$$)
};
D.$JSCompiler_StaticMethods_MakeButtonState$$ = function $$JSCompiler_StaticMethods_MakeButtonState$$$($JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$419_shape$$63_shape$$inline_7130$$, $buttonSize$$3$$, $state$$88$$, $bSelected$$5$$) {
  var $bdColor$$inline_7127_style$$51_url$$29$$ = $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$419_shape$$63_shape$$inline_7130$$.$_buttonStyles$ ? $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$419_shape$$63_shape$$inline_7130$$.$_buttonStyles$[$state$$88$$] : D.$JSCompiler_alias_NULL$$;
  if($bdColor$$inline_7127_style$$51_url$$29$$ = $bdColor$$inline_7127_style$$51_url$$29$$ ? $bdColor$$inline_7127_style$$51_url$$29$$.$getStyle$("content") : D.$JSCompiler_alias_NULL$$) {
    $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$419_shape$$63_shape$$inline_7130$$ = $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$419_shape$$63_shape$$inline_7130$$.$CreateButtonState$($bdColor$$inline_7127_style$$51_url$$29$$, $buttonSize$$3$$)
  }else {
    var $buttonStyle$$inline_7126$$, $bgColor$$inline_7128$$, $offset$$inline_7129$$;
    2 == $state$$88$$ ? ($offset$$inline_7129$$ = 0, $bgColor$$inline_7128$$ = "#61bde3", $bdColor$$inline_7127_style$$51_url$$29$$ = "#0066ff", $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$419_shape$$63_shape$$inline_7130$$.$_buttonStyles$ && ($buttonStyle$$inline_7126$$ = $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$419_shape$$63_shape$$inline_7130$$.$_buttonStyles$[2])) : ($offset$$inline_7129$$ = 1, $bgColor$$inline_7128$$ = "#c0cbd5", $bdColor$$inline_7127_style$$51_url$$29$$ = 
    "#5d7891", $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$419_shape$$63_shape$$inline_7130$$.$_buttonStyles$ && ($buttonStyle$$inline_7126$$ = $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$419_shape$$63_shape$$inline_7130$$.$_buttonStyles$[0]));
    $buttonStyle$$inline_7126$$ && ($buttonStyle$$inline_7126$$.$getStyle$("border-color") && ($bdColor$$inline_7127_style$$51_url$$29$$ = $buttonStyle$$inline_7126$$.$getStyle$("border-color")), $buttonStyle$$inline_7126$$.$getStyle$("background-color") && ($bgColor$$inline_7128$$ = $buttonStyle$$inline_7126$$.$getStyle$("background-color")));
    $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$419_shape$$63_shape$$inline_7130$$ = new D.$DvtRect$$($JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$419_shape$$63_shape$$inline_7130$$.$_context$, $offset$$inline_7129$$, $offset$$inline_7129$$, $buttonSize$$3$$ - 2 * $offset$$inline_7129$$, $buttonSize$$3$$ - 2 * $offset$$inline_7129$$);
    $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$419_shape$$63_shape$$inline_7130$$.$setSolidFill$($bgColor$$inline_7128$$);
    $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$419_shape$$63_shape$$inline_7130$$.$setSolidStroke$($bdColor$$inline_7127_style$$51_url$$29$$)
  }
  $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$419_shape$$63_shape$$inline_7130$$.setCursor(0 == $state$$88$$ || $bSelected$$5$$ ? "default" : "pointer");
  return $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$419_shape$$63_shape$$inline_7130$$
};
D.$DvtTrain$$.prototype.$CreateButton$ = function $$DvtTrain$$$$$CreateButton$$($button$$76_buttonSize$$4$$, $bSelected$$6$$, $tooltip$$47$$) {
  $button$$76_buttonSize$$4$$ = new D.$DvtButton$$(this.$_context$, (0,D.$JSCompiler_StaticMethods_MakeButtonState$$)(this, $button$$76_buttonSize$$4$$, 0, $bSelected$$6$$), (0,D.$JSCompiler_StaticMethods_MakeButtonState$$)(this, $button$$76_buttonSize$$4$$, 1, $bSelected$$6$$), (0,D.$JSCompiler_StaticMethods_MakeButtonState$$)(this, $button$$76_buttonSize$$4$$, 2, $bSelected$$6$$), D.$JSCompiler_alias_NULL$$);
  $button$$76_buttonSize$$4$$.$setTooltip$($tooltip$$47$$);
  $button$$76_buttonSize$$4$$.$_bToggleEnabled$ = D.$JSCompiler_alias_TRUE$$;
  $bSelected$$6$$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)($button$$76_buttonSize$$4$$, $bSelected$$6$$);
  return $button$$76_buttonSize$$4$$
};
D.$DvtTrainEvent$$ = function $$DvtTrainEvent$$$($index$$156$$) {
  this.Init("dvtTrain");
  this.type = this.$getType$();
  this.$_index$ = $index$$156$$
};
(0,D.$goog$exportSymbol$$)("DvtTrainEvent", D.$DvtTrainEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTrainEvent$$, D.$DvtBaseComponentEvent$$, "DvtTrainEvent");
D.$DvtTrainEvent$$.TYPE = "dvtTrain";
D.$DvtTrainEvent$$.prototype.$getIndex$ = (0,D.$JSCompiler_get$$)("$_index$");
D.$DvtTrainEvent$$.prototype.getIndex = D.$DvtTrainEvent$$.prototype.$getIndex$;
D.DvtOverviewWindow = function $DvtOverviewWindow$($context$$422$$, $id$$181$$, $x$$214$$, $y$$187$$, $ww$$97$$, $hh$$83$$) {
  this.Init($context$$422$$, $id$$181$$, $x$$214$$, $y$$187$$, $ww$$97$$, $hh$$83$$)
};
D.$DvtObj$$.$createSubclass$(D.DvtOverviewWindow, D.$DvtContainer$$, "DvtOverviewWindow");
D.DvtOverviewWindow.$VIEWPORT_BG_COLOR$ = "viewport-bg-color";
D.DvtOverviewWindow.$VIEWPORT_BORDER_COLOR$ = "viewport-border-color";
D.DvtOverviewWindow.$OVERVIEW_DISCLOSED_KEY$ = "isOverviewDisclosed";
D.$JSCompiler_prototypeAlias$$ = D.DvtOverviewWindow.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$423$$, $id$$182$$, $x$$215$$, $y$$188$$, $ww$$98$$, $hh$$84$$) {
  D.DvtOverviewWindow.$superclass$.Init.call(this, $context$$423$$, D.$JSCompiler_alias_NULL$$, $id$$182$$);
  this.$_x$ = $x$$215$$;
  this.$_y$ = $y$$188$$;
  this.$_ww$ = $ww$$98$$;
  this.$_hh$ = $hh$$84$$;
  this.$_skinStyle$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$() {
  this.$_md$ = D.$JSCompiler_alias_FALSE$$;
  this.$_panEnable$ = D.$JSCompiler_alias_TRUE$$;
  this.$_overview$ && ((0,D.$DvtAgent$isTouchDevice$$)() ? (this.$_overview$.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$_mouseDown$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHMOVE$, this.$_mouseMove$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHEND$, this.$_mouseUp$, D.$JSCompiler_alias_FALSE$$, this)) : (this.$_overview$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, this.$_mouseDown$, 
  D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, this.$_mouseMove$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$_mouseUp$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$_mouseOut$, D.$JSCompiler_alias_FALSE$$, this)), (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this.$_overview$, D.$JSCompiler_alias_NULL$$));
  this.$removeChildren$();
  this.$_overview$ = this.$_viewport$ = D.$JSCompiler_alias_NULL$$;
  var $bgColor$$7_clipPath$$8$$ = new D.$DvtClipPath$$(this.getId());
  (0,D.$JSCompiler_StaticMethods_addRect$$)($bgColor$$7_clipPath$$8$$, 0, 0, this.$_ww$, this.$_hh$);
  this.$_overview$ = new D.$DvtRect$$(this.$_context$, 0, 0, this.$_ww$, this.$_hh$);
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this.$_overview$, $bgColor$$7_clipPath$$8$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_overview$);
  this.$addChild$(this.$_overview$);
  this.$_viewport$ = new D.$DvtRect$$(this.$_context$, 0, 0, 0, 0, this.getId() + ":viewport");
  $bgColor$$7_clipPath$$8$$ = this.$getSkinStyleAttr$(D.DvtOverviewWindow.$VIEWPORT_BG_COLOR$);
  this.$_viewport$.$setSolidStroke$(this.$getSkinStyleAttr$(D.DvtOverviewWindow.$VIEWPORT_BORDER_COLOR$), D.$JSCompiler_alias_NULL$$, 2);
  this.$_viewport$.$setSolidFill$($bgColor$$7_clipPath$$8$$);
  this.$_viewport$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$_overview$.$addChild$(this.$_viewport$);
  (0,D.$DvtAgent$isTouchDevice$$)() ? (this.$_overview$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$_mouseDown$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHMOVE$, this.$_mouseMove$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHEND$, this.$_mouseUp$, D.$JSCompiler_alias_FALSE$$, this)) : (this.$_overview$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, this.$_mouseDown$, D.$JSCompiler_alias_FALSE$$, 
  this), this.$_overview$.$addEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, this.$_mouseMove$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$addEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$_mouseUp$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$_mouseOut$, D.$JSCompiler_alias_FALSE$$, this))
};
D.$JSCompiler_prototypeAlias$$.$isDisclosed$ = (0,D.$JSCompiler_get$$)("$_isDisclosed$");
D.$JSCompiler_prototypeAlias$$.$setDisclosed$ = (0,D.$JSCompiler_set$$)("$_isDisclosed$");
D.$JSCompiler_prototypeAlias$$.$getContentDimensions$ = function $$JSCompiler_prototypeAlias$$$$getContentDimensions$$() {
  return new D.$DvtRectangle$$(this.$_x$, this.$_y$, this.$_ww$, this.$_hh$)
};
D.$JSCompiler_StaticMethods_setViewportDimensions$$ = function $$JSCompiler_StaticMethods_setViewportDimensions$$$($JSCompiler_StaticMethods_setViewportDimensions$self$$, $dim$$43_vx$$, $animator$$127$$) {
  var $topLeft$$5_vh$$ = (0,D.$JSCompiler_StaticMethods_TransformFromContentToViewportCoords$$)($JSCompiler_StaticMethods_setViewportDimensions$self$$, $dim$$43_vx$$.x, $dim$$43_vx$$.y, $animator$$127$$), $bottomRight$$5$$ = (0,D.$JSCompiler_StaticMethods_TransformFromContentToViewportCoords$$)($JSCompiler_StaticMethods_setViewportDimensions$self$$, $dim$$43_vx$$.x + $dim$$43_vx$$.$w$, $dim$$43_vx$$.y + $dim$$43_vx$$.$h$, $animator$$127$$);
  $dim$$43_vx$$ = $topLeft$$5_vh$$.x;
  var $vy$$ = $topLeft$$5_vh$$.y, $vw$$ = $bottomRight$$5$$.x - $topLeft$$5_vh$$.x, $topLeft$$5_vh$$ = $bottomRight$$5$$.y - $topLeft$$5_vh$$.y;
  $animator$$127$$ ? ((0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$127$$, "typeNumber", $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$getX$, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setX$, $dim$$43_vx$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$127$$, "typeNumber", $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$getY$, 
  $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setY$, $vy$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$127$$, "typeNumber", $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.getWidth, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setWidth$, $vw$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$127$$, "typeNumber", $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$, 
  $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.getHeight, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setHeight$, $topLeft$$5_vh$$)) : ($JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setX$($dim$$43_vx$$), $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setY$($vy$$), $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setWidth$($vw$$), $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setHeight$($topLeft$$5_vh$$))
};
D.$JSCompiler_StaticMethods_getViewportDimensions$$ = function $$JSCompiler_StaticMethods_getViewportDimensions$$$($JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$) {
  var $topLeft$$6$$ = (0,D.$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$)($JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$, $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$.$_viewport$.$getX$(), $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$.$_viewport$.$getY$());
  $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$ = (0,D.$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$)($JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$, $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$.$_viewport$.$getX$() + $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$.$_viewport$.getWidth(), $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$.$_viewport$.$getY$() + $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$.$_viewport$.getHeight());
  return new D.$DvtRectangle$$($topLeft$$6$$.x, $topLeft$$6$$.y, $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$.x - $topLeft$$6$$.x, $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$.y - $topLeft$$6$$.y)
};
D.$JSCompiler_prototypeAlias$$ = D.DvtOverviewWindow.prototype;
D.$JSCompiler_prototypeAlias$$.$_mouseDown$ = function $$JSCompiler_prototypeAlias$$$$_mouseDown$$($evt$$65_viewportEvent$$) {
  if(!this.$_md$ && this.$_panEnable$) {
    this.$_md$ = D.$JSCompiler_alias_TRUE$$;
    var $offset$$35$$ = this.$_getRelativePosition$($evt$$65_viewportEvent$$);
    $evt$$65_viewportEvent$$ = new D.$ViewportChangeEvent$$((0,D.$JSCompiler_StaticMethods_getViewportDimensions$$)(this), (0,D.$JSCompiler_StaticMethods__getCenteredViewportDimensions$$)(this, $offset$$35$$), $evt$$65_viewportEvent$$);
    this.$FireListener$($evt$$65_viewportEvent$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$_mouseMove$ = function $$JSCompiler_prototypeAlias$$$$_mouseMove$$($evt$$66_viewportEvent$$1$$) {
  if(this.$_md$ && this.$_panEnable$) {
    var $offset$$36$$ = this.$_getRelativePosition$($evt$$66_viewportEvent$$1$$);
    $evt$$66_viewportEvent$$1$$ = new D.$ViewportChangeEvent$$((0,D.$JSCompiler_StaticMethods_getViewportDimensions$$)(this), (0,D.$JSCompiler_StaticMethods__getCenteredViewportDimensions$$)(this, $offset$$36$$), $evt$$66_viewportEvent$$1$$);
    this.$FireListener$($evt$$66_viewportEvent$$1$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$_mouseUp$ = function $$JSCompiler_prototypeAlias$$$$_mouseUp$$() {
  this.$_md$ && this.$_panEnable$ && (this.$_md$ = D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$_mouseOut$ = function $$JSCompiler_prototypeAlias$$$$_mouseOut$$() {
  this.$_mouseUp$()
};
D.$JSCompiler_prototypeAlias$$.$_getRelativePosition$ = function $$JSCompiler_prototypeAlias$$$$_getRelativePosition$$($evt$$69_touches$$7$$) {
  var $pageX$$11$$, $pageY$$11$$;
  (0,D.$DvtAgent$isTouchDevice$$)() ? ($evt$$69_touches$$7$$ = $evt$$69_touches$$7$$.touches, 0 < $evt$$69_touches$$7$$.length && ($pageX$$11$$ = $evt$$69_touches$$7$$[0].pageX, $pageY$$11$$ = $evt$$69_touches$$7$$[0].pageY)) : ($pageX$$11$$ = $evt$$69_touches$$7$$.pageX, $pageY$$11$$ = $evt$$69_touches$$7$$.pageY);
  return(0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $pageX$$11$$, $pageY$$11$$)
};
D.$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$ = function $$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$$($JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$, $vx$$1$$, $vy$$1$$) {
  var $tx$$22$$ = 0, $ty$$22$$ = 0, $sx$$7$$ = 1, $sy$$7$$ = 1;
  $JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$.$_content$ && ($tx$$22$$ = $JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$.$_content$.$getTranslateX$(), $ty$$22$$ = $JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$.$_content$.$getTranslateY$(), $sx$$7$$ = $JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$.$_content$.$getScaleX$(), $sy$$7$$ = $JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$.$_content$.$getScaleY$());
  return new D.$DvtPoint$$(($vx$$1$$ - $tx$$22$$) / $sx$$7$$, ($vy$$1$$ - $ty$$22$$) / $sy$$7$$)
};
D.$JSCompiler_StaticMethods_TransformFromContentToViewportCoords$$ = function $$JSCompiler_StaticMethods_TransformFromContentToViewportCoords$$$($JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$, $cx$$27$$, $cy$$27$$, $animator$$128$$) {
  var $tx$$23$$ = 0, $ty$$23$$ = 0, $sx$$8$$ = 1, $sy$$8$$ = 1;
  $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$ && ($tx$$23$$ = $animator$$128$$ ? (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$128$$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getTranslateX$, D.$JSCompiler_alias_TRUE$$) : $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getTranslateX$(), $ty$$23$$ = 
  $animator$$128$$ ? (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$128$$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getTranslateY$, D.$JSCompiler_alias_TRUE$$) : $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getTranslateY$(), $sx$$8$$ = $animator$$128$$ ? (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$128$$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$, 
  $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getScaleX$, D.$JSCompiler_alias_TRUE$$) : $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getScaleX$(), $sy$$8$$ = $animator$$128$$ ? (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$128$$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getScaleY$, D.$JSCompiler_alias_TRUE$$) : 
  $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getScaleY$());
  return new D.$DvtPoint$$($cx$$27$$ * $sx$$8$$ + $tx$$23$$, $cy$$27$$ * $sy$$8$$ + $ty$$23$$)
};
D.DvtOverviewWindow.prototype.$getSkinStyle$ = (0,D.$JSCompiler_get$$)("$_skinStyle$");
D.DvtOverviewWindow.prototype.$setSkinStyle$ = (0,D.$JSCompiler_set$$)("$_skinStyle$");
D.DvtOverviewWindow.prototype.$getSkinStyleAttr$ = function $DvtOverviewWindow$$$getSkinStyleAttr$$($attr$$10$$) {
  return this.$_skinStyle$ && "undefined" != this.$_skinStyle$[$attr$$10$$] ? this.$_skinStyle$[$attr$$10$$] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__getCenteredViewportDimensions$$ = function $$JSCompiler_StaticMethods__getCenteredViewportDimensions$$$($JSCompiler_StaticMethods__getCenteredViewportDimensions$self$$, $pos$$60$$) {
  var $overviewStart_topLeft$$7$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($JSCompiler_StaticMethods__getCenteredViewportDimensions$self$$.$_overview$, new D.$DvtPoint$$(0, 0)), $bottomRight$$7_viewportDims$$ = $JSCompiler_StaticMethods__getCenteredViewportDimensions$self$$.$_viewport$.$getDimensions$(), $centeredViewportX$$ = $pos$$60$$.x - $overviewStart_topLeft$$7$$.x - $bottomRight$$7_viewportDims$$.$w$ / 2, $centeredViewportY$$ = $pos$$60$$.y - $overviewStart_topLeft$$7$$.y - $bottomRight$$7_viewportDims$$.$h$ / 
  2, $overviewStart_topLeft$$7$$ = (0,D.$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$)($JSCompiler_StaticMethods__getCenteredViewportDimensions$self$$, $centeredViewportX$$, $centeredViewportY$$), $bottomRight$$7_viewportDims$$ = (0,D.$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$)($JSCompiler_StaticMethods__getCenteredViewportDimensions$self$$, $centeredViewportX$$ + $bottomRight$$7_viewportDims$$.$w$, $centeredViewportY$$ + $bottomRight$$7_viewportDims$$.$h$);
  return new D.$DvtRectangle$$($overviewStart_topLeft$$7$$.x, $overviewStart_topLeft$$7$$.y, $bottomRight$$7_viewportDims$$.x - $overviewStart_topLeft$$7$$.x, $bottomRight$$7_viewportDims$$.y - $overviewStart_topLeft$$7$$.y)
};
D.DvtOverviewWindow.prototype.$SetViewportRectangle$ = function $DvtOverviewWindow$$$SetViewportRectangle$$($rect$$36$$) {
  this.$_viewport$.$setX$($rect$$36$$.x);
  this.$_viewport$.$setY$($rect$$36$$.y);
  this.$_viewport$.$setWidth$($rect$$36$$.$w$);
  this.$_viewport$.$setHeight$($rect$$36$$.$h$)
};
D.DvtOverviewWindow.prototype.$GetViewportRectangle$ = function $DvtOverviewWindow$$$GetViewportRectangle$$() {
  return new D.$DvtRectangle$$(this.$_viewport$.$getX$(), this.$_viewport$.$getY$(), this.$_viewport$.getWidth(), this.$_viewport$.getHeight())
};
D.DvtOverviewWindow.prototype.$getDimensions$ = function $DvtOverviewWindow$$$getDimensions$$($targetCoordinateSpace$$19$$) {
  var $bounds$$106$$ = new D.$DvtRectangle$$(0, 0, this.$_ww$, this.$_hh$);
  return!$targetCoordinateSpace$$19$$ || $targetCoordinateSpace$$19$$ === this ? $bounds$$106$$ : (0,D.$JSCompiler_StaticMethods_ConvertCoordSpaceRect$$)(this, $bounds$$106$$, $targetCoordinateSpace$$19$$)
};
D.DvtOverviewWindow.prototype.$getDimensionsWithStroke$ = function $DvtOverviewWindow$$$getDimensionsWithStroke$$($targetCoordinateSpace$$20$$) {
  return this.$getDimensions$($targetCoordinateSpace$$20$$)
};
D.$DvtSubcomponentBundle$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtSubcomponentBundle$$, D.$DvtUtilBundle$$, "DvtSubcomponentBundle");
D.$DvtSubcomponentBundle$$._defaults = {CONTROL_PANEL:"Control Panel", CONTROL_PANEL_ZOOMANDCENTER:"Zoom and Center", CONTROL_PANEL_PAN:"Pan", CONTROL_PANEL_LAYOUT:"Layout", CONTROL_PANEL_LAYOUT_VERT_TOP:"Vertical, Top Down", CONTROL_PANEL_LAYOUT_VERT_BOTTOM:"Vertical, Bottom Up", CONTROL_PANEL_LAYOUT_HORIZ_LEFT:"Horizontal, Left-to-Right", CONTROL_PANEL_LAYOUT_HORIZ_RIGHT:"Horizontal, Right-to-Left", CONTROL_PANEL_LAYOUT_RADIAL:"Radial", CONTROL_PANEL_LAYOUT_TREE:"Tree", CONTROL_PANEL_LAYOUT_CIRCLE:"Circle", 
CONTROL_PANEL_SYNC:"View", CONTROL_PANEL_ZOOMTOFIT:"Zoom to Fit", CONTROL_PANEL_ZOOMIN:"Zoom In", CONTROL_PANEL_ZOOMOUT:"Zoom Out", CONTROL_PANEL_RESET:"Reset Map", CONTROL_PANEL_DRILLUP:"Drill Up", CONTROL_PANEL_DRILLDOWN:"Drill Down", LEGEND:"Legend", OVERVIEW:"Overview", PALETTE:"Palette", SEARCH:"Search", SEARCH_TEXT:"Search", SEARCH_TEXT_ALTA:"Find", SEARCH_RESULTS:"Search Results [{0}]", SEARCH_RESULTS_ALTA:"{0} Results", SEARCH_RESULTS_CLOSE:"Close", SEARCH_RESULTS_NO_DATA:"No results to display"};
D.$DvtSubcomponentBundle$$.prototype.$GetDefaultStringForKey$ = function $$DvtSubcomponentBundle$$$$$GetDefaultStringForKey$$($key$$69$$) {
  var $defaultStr$$1$$ = D.$DvtSubcomponentBundle$$.$superclass$.$GetDefaultStringForKey$.call(this, $key$$69$$);
  return $defaultStr$$1$$ ? $defaultStr$$1$$ : D.$DvtSubcomponentBundle$$._defaults[$key$$69$$]
};
D.$DvtSubcomponentBundle$$.prototype.$GetBundlePrefix$ = (0,D.$JSCompiler_returnArg$$)("DvtSubcomponentBundle");
});