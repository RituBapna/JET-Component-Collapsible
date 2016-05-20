define(['./DvtToolkit'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtAxis$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtAxis", D.$DvtAxis$$);
D.$DvtObj$$.$createSubclass$(D.$DvtAxis$$, D.$DvtBaseComponent$$, "DvtAxis");
D.$DvtAxis$$.newInstance = function $$DvtAxis$$$newInstance$($context$$328$$, $callback$$106$$, $callbackObj$$70$$) {
  var $axis$$59$$ = new D.$DvtAxis$$;
  $axis$$59$$.Init($context$$328$$, $callback$$106$$, $callbackObj$$70$$);
  return $axis$$59$$
};
D.$DvtAxis$getDefaults$$ = function $$DvtAxis$getDefaults$$$($skin$$6$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtAxisDefaults$$, $skin$$6$$)
};
D.$DvtAxis$$.getDefaults = D.$DvtAxis$getDefaults$$;
D.$DvtAxis$$.prototype.Init = function $$DvtAxis$$$$Init$($context$$329$$, $callback$$107$$, $callbackObj$$71$$) {
  D.$DvtAxis$$.$superclass$.Init.call(this, $context$$329$$, $callback$$107$$, $callbackObj$$71$$);
  this.$Defaults$ = new D.$DvtAxisDefaults$$;
  this.$_eventHandler$ = new D.$DvtAxisEventManager$$(this);
  this.$_eventHandler$.$addListeners$(this);
  this.$_labelTruncationNeeded$ = D.$JSCompiler_alias_TRUE$$;
  this.$_bounds$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtAxis$$.prototype.$SetOptions$ = function $$DvtAxis$$$$$SetOptions$$($options$$228$$) {
  $options$$228$$ ? this.$Options$ = this.$Defaults$.$calcOptions$($options$$228$$) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this))
};
D.$DvtAxis$$.prototype.$getPreferredSize$ = function $$DvtAxis$$$$$getPreferredSize$$($dims$$41_options$$229$$, $maxWidth$$21$$, $maxHeight$$15$$) {
  this.$SetOptions$($dims$$41_options$$229$$);
  this.$__getOptions$().isLayout = D.$JSCompiler_alias_TRUE$$;
  this.$render$(D.$JSCompiler_alias_NULL$$, $maxWidth$$21$$, $maxHeight$$15$$);
  $dims$$41_options$$229$$ = this.$getDimensions$();
  this.$__getOptions$().isLayout = D.$JSCompiler_alias_FALSE$$;
  this.$removeChildren$();
  var $extraWidth_position$$29$$ = this.$__getOptions$().position;
  if("top" == $extraWidth_position$$29$$ || "bottom" == $extraWidth_position$$29$$) {
    return $dims$$41_options$$229$$.$h$ <= $maxHeight$$15$$ && (this.$_labelTruncationNeeded$ = D.$JSCompiler_alias_FALSE$$), new D.$DvtDimension$$($maxWidth$$21$$, window.Math.min($dims$$41_options$$229$$.$h$, $maxHeight$$15$$))
  }
  $extraWidth_position$$29$$ = 0 < $dims$$41_options$$229$$.$w$ ? window.Math.max(1, 0.1 * $dims$$41_options$$229$$.$w$) : 0;
  $dims$$41_options$$229$$.$w$ + $extraWidth_position$$29$$ <= $maxWidth$$21$$ && (this.$_labelTruncationNeeded$ = D.$JSCompiler_alias_FALSE$$);
  return new D.$DvtDimension$$(window.Math.min($dims$$41_options$$229$$.$w$ + $extraWidth_position$$29$$, $maxWidth$$21$$), $maxHeight$$15$$)
};
D.$DvtAxis$$.prototype.$render$ = function $$DvtAxis$$$$$render$$($options$$230$$, $width$$131$$, $height$$117$$, $x$$205$$, $y$$178$$) {
  this.$SetOptions$($options$$230$$);
  this.$Width$ = $width$$131$$;
  this.$Height$ = $height$$117$$;
  this.$removeChildren$();
  $x$$205$$ || ($x$$205$$ = 0);
  $y$$178$$ || ($y$$178$$ = 0);
  D.$DvtAxisRenderer$$.$render$(this, new D.$DvtRectangle$$($x$$205$$, $y$$178$$, $width$$131$$, $height$$117$$))
};
D.$DvtAxis$$.prototype.render = D.$DvtAxis$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtAxis$$.prototype;
D.$JSCompiler_prototypeAlias$$.$processEvent$ = function $$JSCompiler_prototypeAlias$$$$processEvent$$($event$$496$$, $source$$21$$) {
  this === $source$$21$$ && this.$__dispatchEvent$($event$$496$$)
};
D.$JSCompiler_prototypeAlias$$.$__getOptions$ = (0,D.$JSCompiler_get$$)("$Options$");
D.$JSCompiler_prototypeAlias$$.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventHandler$");
D.$JSCompiler_prototypeAlias$$.getWidth = (0,D.$JSCompiler_get$$)("$Width$");
D.$JSCompiler_prototypeAlias$$.getHeight = (0,D.$JSCompiler_get$$)("$Height$");
D.$JSCompiler_prototypeAlias$$.$destroy$ = function $$JSCompiler_prototypeAlias$$$$destroy$$() {
  this.$_eventHandler$ && (this.$_eventHandler$.$removeListeners$(this), this.$_eventHandler$.$destroy$(), this.$_eventHandler$ = D.$JSCompiler_alias_NULL$$);
  D.$DvtAxis$$.$superclass$.$destroy$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$__setBounds$ = (0,D.$JSCompiler_set$$)("$_bounds$");
D.$JSCompiler_prototypeAlias$$.$getAutomation$ = function $$JSCompiler_prototypeAlias$$$$getAutomation$$() {
  return new D.$DvtAxisAutomation$$(this)
};
D.$DvtAxis$$.prototype.getAutomation = D.$DvtAxis$$.prototype.$getAutomation$;
D.$DvtAxisConstants$$ = {};
(0,D.$goog$exportSymbol$$)("DvtAxisConstants", D.$DvtAxisConstants$$);
D.$DvtObj$$.$createSubclass$(D.$DvtAxisConstants$$, D.$DvtObj$$, "DvtAxisConstants");
D.$DvtAxisConstants$$.$TICK_LABEL$ = "tickLabel";
D.$DvtAxisConstants$$.TICK_LABEL = D.$DvtAxisConstants$$.$TICK_LABEL$;
D.$DvtAxisConstants$$.$TITLE$ = "title";
D.$DvtAxisConstants$$.TITLE = D.$DvtAxisConstants$$.$TITLE$;
D.$DvtAbstractAxisValueFormatter$$ = (0,D.$JSCompiler_set$$)("$_bundle$");
D.$DvtObj$$.$createSubclass$(D.$DvtAbstractAxisValueFormatter$$, D.$DvtObj$$, "DvtAbstractAxisValueFormatter");
D.$DvtAbstractAxisValueFormatter$$.prototype.$format$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtAxisAutomation$$ = function $$DvtAxisAutomation$$$($dvtComponent$$5$$) {
  this.$_axis$ = $dvtComponent$$5$$;
  this.$_options$ = this.$_axis$.$__getOptions$();
  this.$_axisInfo$ = this.$_axis$.$Info$
};
(0,D.$goog$exportSymbol$$)("DvtAxisAutomation", D.$DvtAxisAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtAxisAutomation$$, D.$DvtAutomation$$, "DvtAxisAutomation");
D.$DvtAxisAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtAxisAutomation$$$$$GetSubIdForDomElement$$($displayable$$24_group$$3_logicalObj$$7$$) {
  if(($displayable$$24_group$$3_logicalObj$$7$$ = this.$_axis$.$__getEventManager$().$GetLogicalObject$($displayable$$24_group$$3_logicalObj$$7$$)) && $displayable$$24_group$$3_logicalObj$$7$$ instanceof D.$DvtSimpleObjPeer$$ && this.$_options$.groups) {
    $displayable$$24_group$$3_logicalObj$$7$$ = $displayable$$24_group$$3_logicalObj$$7$$.$getParams$().id;
    for(var $g$$2$$ = 0;$g$$2$$ < this.$_options$.groups.length;$g$$2$$++) {
      if(this.$_options$.groups[$g$$2$$] == $displayable$$24_group$$3_logicalObj$$7$$) {
        return"item[" + $g$$2$$ + "]"
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtAxisAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtAxisAutomation$$$$$getDomElementForSubId$$($groupIndex_subId$$17$$) {
  if(this.$_axisInfo$ instanceof D.$DvtGroupAxisInfo$$) {
    var $openParen$$2$$ = $groupIndex_subId$$17$$.indexOf("["), $closeParen$$2$$ = $groupIndex_subId$$17$$.indexOf("]");
    if(0 < $openParen$$2$$ && 0 < $closeParen$$2$$) {
      return $groupIndex_subId$$17$$ = $groupIndex_subId$$17$$.substring($openParen$$2$$ + 1, $closeParen$$2$$), this.$_axisInfo$.$getLabels$(this.$_axis$.$_context$)[$groupIndex_subId$$17$$].$getElem$()
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtAxisAutomation$$.prototype.getDomElementForSubId = D.$DvtAxisAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtAxisDefaults$$ = function $$DvtAxisDefaults$$$() {
  this.Init({skyros:D.$DvtAxisDefaults$VERSION_1$$, alta:D.$DvtAxisDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtAxisDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtAxisDefaults");
D.$DvtAxisDefaults$SKIN_ALTA$$ = {axisLine:{lineColor:"#9E9E9E"}, majorTick:{lineColor:"rgba(196,206,215,0.4)", baselineColor:"auto"}, minorTick:{lineColor:"rgba(196,206,215,0.2)"}, tickLabel:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, titleStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px;")};
D.$DvtAxisDefaults$VERSION_1$$ = {position:D.$JSCompiler_alias_NULL$$, baselineScaling:"zero", axisLine:{lineColor:"#8A8DAC", lineWidth:1, rendered:"on"}, majorTick:{lineColor:"rgba(138,141,172,0.4)", lineWidth:1, rendered:"auto", lineStyle:"solid"}, minorTick:{lineColor:"rgba(138,141,172,0.20)", lineWidth:1, rendered:"off", lineStyle:"solid"}, tickLabel:{scaling:"auto", style:new D.$DvtCSSStyle$$("font-size: 11px; color: #333333;"), rotation:"auto", rendered:"on"}, titleStyle:new D.$DvtCSSStyle$$("font-size: 11px; color: #737373;"), 
startGroupOffset:0, endGroupOffset:0, layout:{gapRatio:1, titleGap:4}, _useBaselineColor:D.$JSCompiler_alias_FALSE$$, isLayout:D.$JSCompiler_alias_FALSE$$};
D.$DvtAxisEventManager$$ = function $$DvtAxisEventManager$$$($axis$$43$$) {
  this.Init($axis$$43$$.$_context$, $axis$$43$$.$processEvent$, $axis$$43$$);
  this.$_axis$ = $axis$$43$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtAxisEventManager$$, D.$DvtEventManager$$, "DvtAxisEventManager");
D.$DvtAxisEventManager$$.prototype.$FireUIEvent$ = function $$DvtAxisEventManager$$$$$FireUIEvent$$($type$$93$$, $logicalObj$$8$$) {
  $logicalObj$$8$$ instanceof D.$DvtSimpleObjPeer$$ && $logicalObj$$8$$.$getParams$() != D.$JSCompiler_alias_NULL$$ && this.$FireEvent$(new D.$DvtComponentUIEvent$$($type$$93$$, $logicalObj$$8$$.$getParams$()), this.$_axis$)
};
D.$DvtAxisRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtAxisRenderer$$, D.$DvtObj$$, "DvtAxisRenderer");
D.$DvtAxisRenderer$$.$_RADIAL_LABEL_GAP$ = 5;
D.$DvtAxisRenderer$$.$render$ = function $$DvtAxisRenderer$$$$render$$($axis$$37$$, $availSpace$$12$$) {
  var $options$$51$$ = $axis$$37$$.$__getOptions$(), $axisInfo$$ = (0,D.$DvtAxisInfo$newInstance$$)($axis$$37$$.$_context$, $options$$51$$, $availSpace$$12$$);
  $axis$$37$$.$Info$ = $axisInfo$$;
  "off" == $options$$51$$.rendered || (0 >= $availSpace$$12$$.$w$ || 0 >= $availSpace$$12$$.$h$) || ($axis$$37$$.$__setBounds$($availSpace$$12$$.clone()), D.$DvtAxisRenderer$$.$_renderTitle$($axis$$37$$, $axisInfo$$, $availSpace$$12$$), D.$DvtAxisRenderer$$.$_renderLabels$($axis$$37$$, $axisInfo$$, $availSpace$$12$$))
};
D.$DvtAxisRenderer$$.$_renderTitle$ = function $$DvtAxisRenderer$$$$_renderTitle$$($axis$$38_isRTL$$10$$, $axisInfo$$1_position$$9$$, $availSpace$$13$$) {
  var $gap$$3_options$$52$$ = $axis$$38_isRTL$$10$$.$__getOptions$();
  if($gap$$3_options$$52$$.title && ($axisInfo$$1_position$$9$$ = $gap$$3_options$$52$$.position, !("radial" == $axisInfo$$1_position$$9$$ || "tangential" == $axisInfo$$1_position$$9$$))) {
    $gap$$3_options$$52$$.isLayout && "bottom" == $axisInfo$$1_position$$9$$ && ($axisInfo$$1_position$$9$$ = "top");
    var $title$$9$$;
    if($title$$9$$ = "top" == $axisInfo$$1_position$$9$$ || "bottom" == $axisInfo$$1_position$$9$$ ? D.$DvtAxisRenderer$$.$_createText$($axis$$38_isRTL$$10$$.$__getEventManager$(), $axis$$38_isRTL$$10$$, $gap$$3_options$$52$$.title, $gap$$3_options$$52$$.titleStyle, $availSpace$$13$$.$w$, $availSpace$$13$$.$h$) : D.$DvtAxisRenderer$$.$_createText$($axis$$38_isRTL$$10$$.$__getEventManager$(), $axis$$38_isRTL$$10$$, $gap$$3_options$$52$$.title, $gap$$3_options$$52$$.titleStyle, $availSpace$$13$$.$h$, 
    $availSpace$$13$$.$w$)) {
      $axis$$38_isRTL$$10$$ = (0,D.$DvtAgent$isRightToLeft$$)($axis$$38_isRTL$$10$$.$_context$);
      var $titleDims$$1$$ = $title$$9$$.$measureDimensions$(), $gap$$3_options$$52$$ = window.Math.ceil($gap$$3_options$$52$$.layout.titleGap * $gap$$3_options$$52$$.layout.gapRatio);
      "top" == $axisInfo$$1_position$$9$$ ? ($title$$9$$.$setX$($availSpace$$13$$.x + $availSpace$$13$$.$w$ / 2 - $titleDims$$1$$.$w$ / 2), $title$$9$$.$setY$($availSpace$$13$$.y), $availSpace$$13$$.y += $titleDims$$1$$.$h$ + $gap$$3_options$$52$$, $availSpace$$13$$.$h$ -= $titleDims$$1$$.$h$ + $gap$$3_options$$52$$) : "bottom" == $axisInfo$$1_position$$9$$ ? ($title$$9$$.$setX$($availSpace$$13$$.x + $availSpace$$13$$.$w$ / 2 - $titleDims$$1$$.$w$ / 2), $title$$9$$.$setY$($availSpace$$13$$.y + $availSpace$$13$$.$h$ - 
      $titleDims$$1$$.$h$), $availSpace$$13$$.$h$ -= $titleDims$$1$$.$h$ + $gap$$3_options$$52$$) : "left" == $axisInfo$$1_position$$9$$ ? ($title$$9$$.$alignCenter$(), $title$$9$$.$alignMiddle$(), $title$$9$$.$setRotation$($axis$$38_isRTL$$10$$ ? window.Math.PI / 2 : 3 * window.Math.PI / 2), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($title$$9$$, $availSpace$$13$$.x + $titleDims$$1$$.$h$ / 2, $availSpace$$13$$.y + $availSpace$$13$$.$h$ / 2), $availSpace$$13$$.x += $titleDims$$1$$.$h$ + $gap$$3_options$$52$$, 
      $availSpace$$13$$.$w$ -= $titleDims$$1$$.$h$ + $gap$$3_options$$52$$) : "right" == $axisInfo$$1_position$$9$$ && ($title$$9$$.$alignCenter$(), $title$$9$$.$alignMiddle$(), $title$$9$$.$setRotation$($axis$$38_isRTL$$10$$ ? window.Math.PI / 2 : 3 * window.Math.PI / 2), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($title$$9$$, $availSpace$$13$$.x + $availSpace$$13$$.$w$ - $titleDims$$1$$.$h$ / 2, $availSpace$$13$$.y + $availSpace$$13$$.$h$ / 2), $availSpace$$13$$.$w$ -= $titleDims$$1$$.$h$ + 
      $gap$$3_options$$52$$)
    }
  }
};
D.$DvtAxisRenderer$$.$_renderLabels$ = function $$DvtAxisRenderer$$$$_renderLabels$$($axis$$39$$, $axisInfo$$2$$, $availSpace$$14$$) {
  var $options$$53_position$$10$$ = $axis$$39$$.$__getOptions$();
  "on" == $options$$53_position$$10$$.tickLabel.rendered && ($options$$53_position$$10$$ = $options$$53_position$$10$$.position, "top" == $options$$53_position$$10$$ || "bottom" == $options$$53_position$$10$$ ? D.$DvtAxisRenderer$$.$_renderLabelsHoriz$($axis$$39$$, $axisInfo$$2$$, $availSpace$$14$$) : "tangential" == $options$$53_position$$10$$ ? D.$DvtAxisRenderer$$.$_renderLabelsTangent$($axis$$39$$, $axisInfo$$2$$, $availSpace$$14$$) : D.$DvtAxisRenderer$$.$_renderLabelsVert$($axis$$39$$, $axisInfo$$2$$, 
  $availSpace$$14$$))
};
D.$DvtAxisRenderer$$.$_renderLabelsHoriz$ = function $$DvtAxisRenderer$$$$_renderLabelsHoriz$$($axis$$40$$, $axisInfo$$3_lv2Labels$$, $availSpace$$15$$) {
  for(var $labels$$3$$ = $axisInfo$$3_lv2Labels$$.$getLabels$($axis$$40$$.$_context$), $isLayout_offset$$16$$ = $axis$$40$$.$__getOptions$().isLayout, $maxLv1Height$$ = 0, $isRTL$$11$$ = (0,D.$DvtAgent$isRightToLeft$$)($axis$$40$$.$_context$), $i$$370$$ = 0;$i$$370$$ < $labels$$3$$.length;$i$$370$$++) {
    var $label$$29$$ = $labels$$3$$[$i$$370$$];
    if($label$$29$$ != D.$JSCompiler_alias_NULL$$) {
      if($axisInfo$$3_lv2Labels$$.$isLabelRotated$()) {
        !$isLayout_offset$$16$$ && $axis$$40$$.$_labelTruncationNeeded$ && ($label$$29$$ = D.$DvtTextUtils$$.$fitText$($label$$29$$, $availSpace$$15$$.$h$, $availSpace$$15$$.$w$, $axis$$40$$) ? $label$$29$$ : D.$JSCompiler_alias_NULL$$);
        if(!$label$$29$$) {
          continue
        }
        $isRTL$$11$$ ? $label$$29$$.$alignLeft$() : $label$$29$$.$alignRight$();
        $label$$29$$.$setTranslateY$($availSpace$$15$$.y)
      }else {
        if(D.$DvtTextUtils$$.$guessTextDimensions$($label$$29$$).$h$ - 1 > $availSpace$$15$$.$h$) {
          continue
        }
        $label$$29$$.$alignTop$();
        $label$$29$$.$setY$($availSpace$$15$$.y)
      }
      $axis$$40$$.$__getEventManager$().$associate$($label$$29$$, new D.$DvtSimpleObjPeer$$($label$$29$$.$_untruncatedTextString$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {type:D.$DvtAxisConstants$$.$TICK_LABEL$, id:$label$$29$$.$getTextString$()}));
      $axis$$40$$.$addChild$($label$$29$$);
      $maxLv1Height$$ = window.Math.max($maxLv1Height$$, D.$DvtTextUtils$$.$guessTextDimensions$($label$$29$$).$h$)
    }
  }
  $availSpace$$15$$.y += $maxLv1Height$$;
  $availSpace$$15$$.$h$ -= $maxLv1Height$$;
  $axisInfo$$3_lv2Labels$$ = $axisInfo$$3_lv2Labels$$.$getLabels$($axis$$40$$.$_context$, 1);
  $isLayout_offset$$16$$ = 0;
  if($axisInfo$$3_lv2Labels$$ != D.$JSCompiler_alias_NULL$$) {
    for($i$$370$$ = 0;$i$$370$$ < $axisInfo$$3_lv2Labels$$.length;$i$$370$$++) {
      $label$$29$$ = $axisInfo$$3_lv2Labels$$[$i$$370$$], $label$$29$$ != D.$JSCompiler_alias_NULL$$ && !(D.$DvtTextUtils$$.$guessTextDimensions$($label$$29$$).$h$ - 1 > $availSpace$$15$$.$h$) && ($axis$$40$$.$__getEventManager$().$associate$($label$$29$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {type:D.$DvtAxisConstants$$.$TICK_LABEL$, id:$label$$29$$.$getTextString$()})), $labels$$3$$[$i$$370$$] != D.$JSCompiler_alias_NULL$$ && 
      ($isLayout_offset$$16$$ = $labels$$3$$[$i$$370$$].$measureDimensions$().$w$ / 2), $isRTL$$11$$ ? $label$$29$$.$setX$($label$$29$$.$getX$() + $isLayout_offset$$16$$) : $label$$29$$.$setX$($label$$29$$.$getX$() - $isLayout_offset$$16$$), $label$$29$$.$alignTop$(), $label$$29$$.$setY$($availSpace$$15$$.y), $axis$$40$$.$addChild$($label$$29$$))
    }
  }
};
D.$DvtAxisRenderer$$.$_renderLabelsVert$ = function $$DvtAxisRenderer$$$$_renderLabelsVert$$($axis$$41$$, $axisInfo$$4$$, $availSpace$$16$$) {
  var $i$$371_isRTL$$12_options$$54$$ = $axis$$41$$.$__getOptions$(), $isLayout$$1$$ = $i$$371_isRTL$$12_options$$54$$.isLayout, $alwaysAlignRight_formatLabelVert$$ = $i$$371_isRTL$$12_options$$54$$._alwaysAlignRight, $position$$11$$ = $i$$371_isRTL$$12_options$$54$$.position, $i$$371_isRTL$$12_options$$54$$ = (0,D.$DvtAgent$isRightToLeft$$)($axis$$41$$.$_context$), $isAlignLeft$$ = "radial" == $position$$11$$ && $i$$371_isRTL$$12_options$$54$$ || $isLayout$$1$$ && "left" == $position$$11$$ || !$alwaysAlignRight_formatLabelVert$$ && 
  !$isLayout$$1$$ && "right" == $position$$11$$, $labelX$$1$$;
  "radial" == $position$$11$$ ? ($labelX$$1$$ = $availSpace$$16$$.x + $availSpace$$16$$.$w$ / 2, $labelX$$1$$ += D.$DvtAxisRenderer$$.$_RADIAL_LABEL_GAP$ * ($i$$371_isRTL$$12_options$$54$$ ? 1 : -1)) : $labelX$$1$$ = $isAlignLeft$$ ? $availSpace$$16$$.x : $availSpace$$16$$.x + $availSpace$$16$$.$w$;
  for(var $alwaysAlignRight_formatLabelVert$$ = function $$alwaysAlignRight_formatLabelVert$$$($i$$371_isRTL$$12_options$$54$$) {
    !$isLayout$$1$$ && $axis$$41$$.$_labelTruncationNeeded$ && ($i$$371_isRTL$$12_options$$54$$ = D.$DvtTextUtils$$.$fitText$($i$$371_isRTL$$12_options$$54$$, $availSpace$$16$$.$w$, $availSpace$$16$$.$h$, $axis$$41$$) ? $i$$371_isRTL$$12_options$$54$$ : D.$JSCompiler_alias_NULL$$);
    if($i$$371_isRTL$$12_options$$54$$) {
      $axis$$41$$.$__getEventManager$().$associate$($i$$371_isRTL$$12_options$$54$$, new D.$DvtSimpleObjPeer$$($i$$371_isRTL$$12_options$$54$$.$_untruncatedTextString$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {type:D.$DvtAxisConstants$$.$TICK_LABEL$, id:$i$$371_isRTL$$12_options$$54$$.$getTextString$()}));
      $i$$371_isRTL$$12_options$$54$$.$setX$($labelX$$1$$);
      $isAlignLeft$$ ? $i$$371_isRTL$$12_options$$54$$.$alignLeft$() : $i$$371_isRTL$$12_options$$54$$.$alignRight$();
      if("radial" == $position$$11$$) {
        var $alwaysAlignRight_formatLabelVert$$ = $i$$371_isRTL$$12_options$$54$$.$getY$();
        $i$$371_isRTL$$12_options$$54$$.$setY$($availSpace$$16$$.y + $availSpace$$16$$.$h$ / 2 - $alwaysAlignRight_formatLabelVert$$);
        var $labels$$4_lv2Labels$$1$$ = $i$$371_isRTL$$12_options$$54$$.$getDimensions$(), $label$$30$$ = 0.15 * $labels$$4_lv2Labels$$1$$.$h$, $alwaysAlignRight_formatLabelVert$$ = $alwaysAlignRight_formatLabelVert$$ + $labels$$4_lv2Labels$$1$$.$h$ / 2 > $axisInfo$$4$$.$getEndCoord$() && "circle" == $axis$$41$$.$__getOptions$().polarGridShape ? 1 : 0.3, $labels$$4_lv2Labels$$1$$ = window.DvtPathUtils.$roundedRectangle$($labels$$4_lv2Labels$$1$$.x - $label$$30$$, $labels$$4_lv2Labels$$1$$.y, $labels$$4_lv2Labels$$1$$.$w$ + 
        2 * $label$$30$$, $labels$$4_lv2Labels$$1$$.$h$, 2, 2, 2, 2), $labels$$4_lv2Labels$$1$$ = new D.$DvtPath$$($axis$$41$$.$_context$, $labels$$4_lv2Labels$$1$$);
        $labels$$4_lv2Labels$$1$$.$setSolidFill$("#FFFFFF", $alwaysAlignRight_formatLabelVert$$);
        $axis$$41$$.$addChild$($labels$$4_lv2Labels$$1$$)
      }
      $axis$$41$$.$addChild$($i$$371_isRTL$$12_options$$54$$)
    }
  }, $labels$$4_lv2Labels$$1$$ = $axisInfo$$4$$.$getLabels$($axis$$41$$.$_context$), $i$$371_isRTL$$12_options$$54$$ = 0;$i$$371_isRTL$$12_options$$54$$ < $labels$$4_lv2Labels$$1$$.length;$i$$371_isRTL$$12_options$$54$$++) {
    var $label$$30$$ = $labels$$4_lv2Labels$$1$$[$i$$371_isRTL$$12_options$$54$$];
    $label$$30$$ != D.$JSCompiler_alias_NULL$$ && $alwaysAlignRight_formatLabelVert$$($label$$30$$)
  }
  $labels$$4_lv2Labels$$1$$ = $axisInfo$$4$$.$getLabels$($axis$$41$$.$_context$, 1);
  if($labels$$4_lv2Labels$$1$$ != D.$JSCompiler_alias_NULL$$) {
    for($i$$371_isRTL$$12_options$$54$$ = 0;$i$$371_isRTL$$12_options$$54$$ < $labels$$4_lv2Labels$$1$$.length;$i$$371_isRTL$$12_options$$54$$++) {
      $label$$30$$ = $labels$$4_lv2Labels$$1$$[$i$$371_isRTL$$12_options$$54$$], $label$$30$$ != D.$JSCompiler_alias_NULL$$ && $alwaysAlignRight_formatLabelVert$$($label$$30$$)
    }
  }
};
D.$DvtAxisRenderer$$.$_renderLabelsTangent$ = function $$DvtAxisRenderer$$$$_renderLabelsTangent$$($axis$$42$$, $axisInfo$$5_labels$$5$$, $availSpace$$17$$) {
  $axisInfo$$5_labels$$5$$ = $axisInfo$$5_labels$$5$$.$getLabels$($axis$$42$$.$_context$);
  for(var $i$$372$$ = 0;$i$$372$$ < $axisInfo$$5_labels$$5$$.length;$i$$372$$++) {
    var $label$$32$$ = $axisInfo$$5_labels$$5$$[$i$$372$$];
    if($label$$32$$ != D.$JSCompiler_alias_NULL$$) {
      var $textBefore$$ = $label$$32$$.$getTextString$(), $maxWidth$$9$$ = $availSpace$$17$$.$w$ / 2 - window.Math.abs($label$$32$$.$getX$()), $maxHeight$$7$$ = $availSpace$$17$$.$h$ / 2 - window.Math.abs($label$$32$$.$getY$());
      D.$DvtTextUtils$$.$fitText$($label$$32$$, $maxWidth$$9$$, $maxHeight$$7$$, $axis$$42$$) && ($axis$$42$$.$__getEventManager$().$associate$($label$$32$$, new D.$DvtSimpleObjPeer$$($label$$32$$.$isTruncated$() ? $textBefore$$ : D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {type:D.$DvtAxisConstants$$.$TICK_LABEL$, id:$textBefore$$})), $label$$32$$.$setTranslateX$($availSpace$$17$$.x + $availSpace$$17$$.$w$ / 2), $label$$32$$.$setTranslateY$($availSpace$$17$$.y + 
      $availSpace$$17$$.$h$ / 2), $axis$$42$$.$addChild$($label$$32$$))
    }
  }
};
D.$DvtAxisRenderer$$.$_createText$ = function $$DvtAxisRenderer$$$$_createText$$($eventManager$$5$$, $container$$28$$, $text$$40_textString$$, $cssStyle$$4$$, $width$$73$$, $height$$63$$) {
  var $params$$26$$ = {type:D.$DvtAxisConstants$$.$TITLE$, id:D.$JSCompiler_alias_VOID$$};
  $text$$40_textString$$ = new D.$DvtOutputText$$($container$$28$$.$_context$, $text$$40_textString$$, 0, 0);
  $text$$40_textString$$.$setCSSStyle$($cssStyle$$4$$);
  return D.$DvtTextUtils$$.$fitText$($text$$40_textString$$, $width$$73$$, $height$$63$$, $container$$28$$) ? ($eventManager$$5$$.$associate$($text$$40_textString$$, new D.$DvtSimpleObjPeer$$($text$$40_textString$$.$_untruncatedTextString$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $params$$26$$)), $text$$40_textString$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtAxisInfo$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtAxisInfo$$, D.$DvtObj$$, "DvtAxisInfo");
D.$DvtAxisInfo$newInstance$$ = function $$DvtAxisInfo$newInstance$$$($context$$192$$, $options$$58$$, $availSpace$$20$$) {
  return $options$$58$$.timeAxisType && "disabled" != $options$$58$$.timeAxisType ? new D.$DvtTimeAxisInfo$$($context$$192$$, $options$$58$$, $availSpace$$20$$) : (0,window.isNaN)($options$$58$$.dataMin) && (0,window.isNaN)($options$$58$$.dataMax) ? new D.$DvtGroupAxisInfo$$($context$$192$$, $options$$58$$, $availSpace$$20$$) : new D.$DvtDataAxisInfo$$($context$$192$$, $options$$58$$, $availSpace$$20$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$193$$, $options$$59$$, $availSpace$$21$$) {
  this.$_context$ = $context$$193$$;
  this.$Position$ = $options$$59$$.position;
  this.$_radius$ = $options$$59$$._radius;
  "top" == this.$Position$ || "bottom" == this.$Position$ ? (this.$StartCoord$ = $availSpace$$21$$.x, this.$EndCoord$ = $availSpace$$21$$.x + $availSpace$$21$$.$w$) : "left" == this.$Position$ || "right" == this.$Position$ ? (this.$StartCoord$ = $availSpace$$21$$.y, this.$EndCoord$ = $availSpace$$21$$.y + $availSpace$$21$$.$h$) : "radial" == this.$Position$ ? (this.$StartCoord$ = 0, this.$EndCoord$ = this.$_radius$) : "tangential" == this.$Position$ && ((0,D.$DvtAgent$isRightToLeft$$)($context$$193$$) ? 
  (this.$StartCoord$ = 2 * window.Math.PI, this.$EndCoord$ = 0) : (this.$StartCoord$ = 0, this.$EndCoord$ = 2 * window.Math.PI));
  this.$MinViewportExtent$ = this.$DataMax$ = this.$DataMin$ = this.$GlobalMax$ = this.$GlobalMin$ = this.$MaxValue$ = this.$MinValue$ = D.$JSCompiler_alias_NULL$$;
  this.$EndOverflow$ = this.$StartOverflow$ = 0;
  $options$$59$$.leftBuffer == D.$JSCompiler_alias_NULL$$ && ($options$$59$$.leftBuffer = window.Infinity);
  $options$$59$$.rightBuffer == D.$JSCompiler_alias_NULL$$ && ($options$$59$$.rightBuffer = window.Infinity);
  this.$Options$ = $options$$59$$
};
D.$JSCompiler_prototypeAlias$$.$getOptions$ = (0,D.$JSCompiler_get$$)("$Options$");
D.$JSCompiler_prototypeAlias$$.$getLabels$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getAxisLine$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getMajorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMajorGridLines$$() {
  return[]
};
D.$JSCompiler_prototypeAlias$$.$getMinorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMinorGridLines$$() {
  return[]
};
D.$JSCompiler_prototypeAlias$$.$getCoordAt$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getBoundedValueAt$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getBoundedCoordAt$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getBaselineCoord$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$isLabelRotated$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$JSCompiler_prototypeAlias$$.$CreateLabel$ = function $$JSCompiler_prototypeAlias$$$$CreateLabel$$($context$$198_text$$42$$, $label$$35$$, $coord$$12$$) {
  if("tangential" == this.$Position$) {
    var $vTol$$ = 16 / 180 * window.Math.PI, $hTol$$ = 1 / 180 * window.Math.PI, $offset$$17$$ = 0.5 * (0,window.parseInt)(this.$Options$.tickLabel.style.$getStyle$("font-size")), $dist$$ = this.$_radius$ + $offset$$17$$;
    if($coord$$12$$ < $hTol$$ || $coord$$12$$ > 2 * window.Math.PI - $hTol$$) {
      $dist$$ += $offset$$17$$
    }
    $context$$198_text$$42$$ = new D.$DvtOutputText$$($context$$198_text$$42$$, $label$$35$$, window.Math.round($dist$$ * window.Math.sin($coord$$12$$)), window.Math.round(-$dist$$ * window.Math.cos($coord$$12$$)));
    $coord$$12$$ < $hTol$$ || window.Math.abs($coord$$12$$ - window.Math.PI) < $hTol$$ || $coord$$12$$ > 2 * window.Math.PI - $hTol$$ ? $context$$198_text$$42$$.$alignCenter$() : $coord$$12$$ < window.Math.PI ? $context$$198_text$$42$$.$alignLeft$() : $context$$198_text$$42$$.$alignRight$();
    window.Math.abs($coord$$12$$ - window.Math.PI / 2) < $vTol$$ || window.Math.abs($coord$$12$$ - 3 * window.Math.PI / 2) < $vTol$$ ? $context$$198_text$$42$$.$alignMiddle$() : $coord$$12$$ < window.Math.PI / 2 || $coord$$12$$ > 3 * window.Math.PI / 2 ? $context$$198_text$$42$$.$alignBottom$() : $context$$198_text$$42$$.$alignTop$()
  }else {
    $context$$198_text$$42$$ = new D.$DvtOutputText$$($context$$198_text$$42$$, $label$$35$$, $coord$$12$$, $coord$$12$$), $context$$198_text$$42$$.$alignMiddle$(), $context$$198_text$$42$$.$alignCenter$()
  }
  $context$$198_text$$42$$.$setCSSStyle$(this.$Options$.tickLabel.style);
  return $context$$198_text$$42$$
};
D.$JSCompiler_StaticMethods_CreateGridLine$$ = function $$JSCompiler_StaticMethods_CreateGridLine$$$($JSCompiler_StaticMethods_CreateGridLine$self$$, $context$$199_line$$9$$, $stroke$$55$$, $coord$$13_points$$25$$) {
  var $usePixelHinting$$ = !(0,D.$DvtAgent$isTouchDevice$$)() || 1 < (0,D.$DvtAgent$getDevicePixelRatio$$)();
  "radial" == $JSCompiler_StaticMethods_CreateGridLine$self$$.$Position$ ? ("polygon" == $JSCompiler_StaticMethods_CreateGridLine$self$$.$Options$.polarGridShape ? ($coord$$13_points$$25$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$(0, 0, $JSCompiler_StaticMethods_CreateGridLine$self$$.$Options$._numGroups, $coord$$13_points$$25$$), $context$$199_line$$9$$ = new D.$DvtPolygon$$($context$$199_line$$9$$, $coord$$13_points$$25$$)) : $context$$199_line$$9$$ = new D.$DvtCircle$$($context$$199_line$$9$$, 
  0, 0, $coord$$13_points$$25$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($context$$199_line$$9$$)) : "tangential" == $JSCompiler_StaticMethods_CreateGridLine$self$$.$Position$ ? ($context$$199_line$$9$$ = new D.$DvtLine$$($context$$199_line$$9$$, 0, 0, $JSCompiler_StaticMethods_CreateGridLine$self$$.$_radius$ * window.Math.sin($coord$$13_points$$25$$), -$JSCompiler_StaticMethods_CreateGridLine$self$$.$_radius$ * window.Math.cos($coord$$13_points$$25$$)), 0.01 > $coord$$13_points$$25$$ % 
  window.Math.PI / 2 && $usePixelHinting$$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($context$$199_line$$9$$)) : ($context$$199_line$$9$$ = new D.$DvtLine$$($context$$199_line$$9$$, $coord$$13_points$$25$$, $coord$$13_points$$25$$, $coord$$13_points$$25$$, $coord$$13_points$$25$$), $usePixelHinting$$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($context$$199_line$$9$$));
  $context$$199_line$$9$$.$setStroke$($stroke$$55$$);
  $context$$199_line$$9$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  return $context$$199_line$$9$$
};
D.$JSCompiler_StaticMethods_IsOverlapping$$ = function $$JSCompiler_StaticMethods_IsOverlapping$$$($JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$14$$, $labelDims$$6$$, $skippedLabels$$1$$) {
  if(!$labelDims$$6$$ || 0 >= $labelDims$$6$$.length) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $fontSize$$3_isVert$$3$$ = (0,window.parseInt)($JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$14$$.$Options$.tickLabel.style.$getStyle$("font-size")), $gap$$7_gapHoriz$$ = $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$14$$ instanceof D.$DvtGroupAxisInfo$$ ? 0.3 * $fontSize$$3_isVert$$3$$ : 1 * $fontSize$$3_isVert$$3$$, $gapVert_pointB1$$2$$ = $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$14$$ instanceof D.$DvtGroupAxisInfo$$ ? 0.1 * $fontSize$$3_isVert$$3$$ : 0.35 * $fontSize$$3_isVert$$3$$, 
  $gap$$7_gapHoriz$$ = ($fontSize$$3_isVert$$3$$ = "left" == $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$14$$.$Position$ || "right" == $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$14$$.$Position$ || "radial" == $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$14$$.$Position$) || $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$14$$.$isLabelRotated$() ? $gapVert_pointB1$$2$$ : $gap$$7_gapHoriz$$;
  $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$14$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$14$$.$_context$);
  for(var $pointA1$$2$$, $pointA2$$2$$, $pointB2$$2$$, $j$$62$$ = 0;$j$$62$$ < $labelDims$$6$$.length;$j$$62$$ += $skippedLabels$$1$$ + 1) {
    if($labelDims$$6$$[$j$$62$$] != D.$JSCompiler_alias_NULL$$) {
      if($pointA1$$2$$ == D.$JSCompiler_alias_NULL$$ || $pointA2$$2$$ == D.$JSCompiler_alias_NULL$$) {
        $fontSize$$3_isVert$$3$$ ? ($pointA1$$2$$ = $labelDims$$6$$[$j$$62$$].y, $pointA2$$2$$ = $labelDims$$6$$[$j$$62$$].y + $labelDims$$6$$[$j$$62$$].$h$) : ($pointA1$$2$$ = $labelDims$$6$$[$j$$62$$].x, $pointA2$$2$$ = $labelDims$$6$$[$j$$62$$].x + $labelDims$$6$$[$j$$62$$].$w$)
      }else {
        if($fontSize$$3_isVert$$3$$) {
          if($gapVert_pointB1$$2$$ = $labelDims$$6$$[$j$$62$$].y, $pointB2$$2$$ = $labelDims$$6$$[$j$$62$$].y + $labelDims$$6$$[$j$$62$$].$h$, $gapVert_pointB1$$2$$ >= $pointA1$$2$$ && $gapVert_pointB1$$2$$ - $gap$$7_gapHoriz$$ < $pointA2$$2$$ || $gapVert_pointB1$$2$$ < $pointA1$$2$$ && $pointB2$$2$$ + $gap$$7_gapHoriz$$ > $pointA1$$2$$) {
            return D.$JSCompiler_alias_TRUE$$
          }
        }else {
          if($gapVert_pointB1$$2$$ = $labelDims$$6$$[$j$$62$$].x, $pointB2$$2$$ = $labelDims$$6$$[$j$$62$$].x + $labelDims$$6$$[$j$$62$$].$w$, !$JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$14$$ && $gapVert_pointB1$$2$$ - $gap$$7_gapHoriz$$ < $pointA2$$2$$ || $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$14$$ && $pointB2$$2$$ + $gap$$7_gapHoriz$$ > $pointA1$$2$$) {
            return D.$JSCompiler_alias_TRUE$$
          }
        }
        $pointA1$$2$$ = $gapVert_pointB1$$2$$;
        $pointA2$$2$$ = $pointB2$$2$$
      }
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_SkipLabels$$ = function $$JSCompiler_StaticMethods_SkipLabels$$$($JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$, $labels$$9$$, $j$$63_labelDims$$7$$) {
  for(var $skippedLabels$$2$$ = 0, $bOverlaps$$1$$ = (0,D.$JSCompiler_StaticMethods_IsOverlapping$$)($JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$, $j$$63_labelDims$$7$$, $skippedLabels$$2$$);$bOverlaps$$1$$;) {
    $skippedLabels$$2$$++, $bOverlaps$$1$$ = (0,D.$JSCompiler_StaticMethods_IsOverlapping$$)($JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$, $j$$63_labelDims$$7$$, $skippedLabels$$2$$)
  }
  if(0 < $skippedLabels$$2$$) {
    $JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$ = [];
    for($j$$63_labelDims$$7$$ = 0;$j$$63_labelDims$$7$$ < $labels$$9$$.length;$j$$63_labelDims$$7$$ += $skippedLabels$$2$$ + 1) {
      $JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$.push($labels$$9$$[$j$$63_labelDims$$7$$])
    }
    return $JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$
  }
  return $labels$$9$$
};
D.$JSCompiler_StaticMethods_GetLabelDims$$ = function $$JSCompiler_StaticMethods_GetLabelDims$$$($labels$$10$$, $container$$31$$) {
  for(var $labelDims$$8$$ = [], $i$$378$$ = 0;$i$$378$$ < $labels$$10$$.length;$i$$378$$++) {
    var $dims$$31_text$$43$$ = $labels$$10$$[$i$$378$$];
    $dims$$31_text$$43$$ == D.$JSCompiler_alias_NULL$$ ? $labelDims$$8$$.push(D.$JSCompiler_alias_NULL$$) : ($dims$$31_text$$43$$ = $dims$$31_text$$43$$.$measureDimensions$($container$$31$$), $labelDims$$8$$.push($dims$$31_text$$43$$))
  }
  return $labelDims$$8$$
};
D.$JSCompiler_StaticMethods_GuessLabelDims$$ = function $$JSCompiler_StaticMethods_GuessLabelDims$$$($JSCompiler_StaticMethods_GuessLabelDims$self$$, $labels$$11$$, $container$$32$$, $fudgeFactor$$) {
  var $labelDims$$9$$ = [];
  "undefined" == typeof $fudgeFactor$$ && ($fudgeFactor$$ = 1);
  for(var $i$$379$$ = 0;$i$$379$$ < $labels$$11$$.length;$i$$379$$++) {
    var $dims$$32_text$$44$$ = $labels$$11$$[$i$$379$$];
    if($dims$$32_text$$44$$ == D.$JSCompiler_alias_NULL$$) {
      $labelDims$$9$$.push(D.$JSCompiler_alias_NULL$$)
    }else {
      $container$$32$$.$addChild$($dims$$32_text$$44$$);
      var $estH_estimatedSize$$ = D.$DvtTextUtils$$.$guessTextDimensions$($dims$$32_text$$44$$), $estW$$ = $estH_estimatedSize$$.$w$ * $fudgeFactor$$, $estH_estimatedSize$$ = $estH_estimatedSize$$.$h$;
      $container$$32$$.removeChild($dims$$32_text$$44$$);
      $dims$$32_text$$44$$ = $JSCompiler_StaticMethods_GuessLabelDims$self$$.$isLabelRotated$() ? new D.$DvtRectangle$$($dims$$32_text$$44$$.$getTranslateX$() - $estH_estimatedSize$$ / 2, $dims$$32_text$$44$$.$getTranslateY$() - $estW$$ / 2, $estH_estimatedSize$$, $estW$$) : new D.$DvtRectangle$$($dims$$32_text$$44$$.$getX$() - $estW$$ / 2, $dims$$32_text$$44$$.$getY$() - $estH_estimatedSize$$ / 2, $estW$$, $estH_estimatedSize$$);
      $labelDims$$9$$.push($dims$$32_text$$44$$)
    }
  }
  return $labelDims$$9$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getMajorTickCount$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$setMajorTickCount$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$getMinorTickCount$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$setMinorTickCount$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$getMajorIncrement$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getMinorIncrement$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getGlobalMin$ = (0,D.$JSCompiler_get$$)("$GlobalMin$");
D.$JSCompiler_prototypeAlias$$.$getGlobalMax$ = (0,D.$JSCompiler_get$$)("$GlobalMax$");
D.$JSCompiler_prototypeAlias$$.$getViewportMin$ = (0,D.$JSCompiler_get$$)("$MinValue$");
D.$JSCompiler_prototypeAlias$$.$getViewportMax$ = (0,D.$JSCompiler_get$$)("$MaxValue$");
D.$JSCompiler_prototypeAlias$$.$getDataMin$ = (0,D.$JSCompiler_get$$)("$DataMin$");
D.$JSCompiler_prototypeAlias$$.$getDataMax$ = (0,D.$JSCompiler_get$$)("$DataMax$");
D.$JSCompiler_prototypeAlias$$.$getMinimumExtent$ = (0,D.$JSCompiler_returnArg$$)(0);
D.$JSCompiler_prototypeAlias$$.$getEndCoord$ = (0,D.$JSCompiler_get$$)("$EndCoord$");
D.$JSCompiler_prototypeAlias$$.$getStartOverflow$ = (0,D.$JSCompiler_get$$)("$StartOverflow$");
D.$JSCompiler_prototypeAlias$$.$getEndOverflow$ = (0,D.$JSCompiler_get$$)("$EndOverflow$");
D.$DvtDataAxisInfo$$ = function $$DvtDataAxisInfo$$$($context$$200$$, $options$$60$$, $availSpace$$22$$) {
  this.Init($context$$200$$, $options$$60$$, $availSpace$$22$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDataAxisInfo$$, D.$DvtAxisInfo$$, "DvtDataAxisInfo");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDataAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$201_testVal$$inline_10377_zeroBaseline$$inline_4847$$, $continuousExtent$$inline_4848_firstDigit$$inline_10378_options$$61$$, $availSpace$$23_scaleUnit$$inline_4849$$) {
  D.$DvtDataAxisInfo$$.$superclass$.Init.call(this, $context$$201_testVal$$inline_10377_zeroBaseline$$inline_4847$$, $continuousExtent$$inline_4848_firstDigit$$inline_10378_options$$61$$, $availSpace$$23_scaleUnit$$inline_4849$$);
  "top" == this.$Position$ || "bottom" == this.$Position$ ? ("off" != $continuousExtent$$inline_4848_firstDigit$$inline_10378_options$$61$$.tickLabel.rendered && "off" != $continuousExtent$$inline_4848_firstDigit$$inline_10378_options$$61$$.rendered && (this.$StartOverflow$ = window.Math.max(10 - $continuousExtent$$inline_4848_firstDigit$$inline_10378_options$$61$$.leftBuffer, 0), this.$EndOverflow$ = window.Math.max(10 - $continuousExtent$$inline_4848_firstDigit$$inline_10378_options$$61$$.rightBuffer, 
  0)), (0,D.$DvtAgent$isRightToLeft$$)($context$$201_testVal$$inline_10377_zeroBaseline$$inline_4847$$) ? (this.$_minCoord$ = this.$EndCoord$ - this.$EndOverflow$, this.$_maxCoord$ = this.$StartCoord$ + this.$StartOverflow$) : (this.$_minCoord$ = this.$StartCoord$ + this.$StartOverflow$, this.$_maxCoord$ = this.$EndCoord$ - this.$EndOverflow$)) : "tangential" == this.$Position$ || "radial" == this.$Position$ ? (this.$_minCoord$ = this.$StartCoord$, this.$_maxCoord$ = this.$EndCoord$) : (this.$_minCoord$ = 
  this.$EndCoord$, this.$_maxCoord$ = this.$StartCoord$);
  this.$GlobalMin$ = $continuousExtent$$inline_4848_firstDigit$$inline_10378_options$$61$$.min;
  this.$GlobalMax$ = $continuousExtent$$inline_4848_firstDigit$$inline_10378_options$$61$$.max;
  this.$MinValue$ = $continuousExtent$$inline_4848_firstDigit$$inline_10378_options$$61$$.viewportMin == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMin$ : $continuousExtent$$inline_4848_firstDigit$$inline_10378_options$$61$$.viewportMin;
  this.$MaxValue$ = $continuousExtent$$inline_4848_firstDigit$$inline_10378_options$$61$$.viewportMax == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMax$ : $continuousExtent$$inline_4848_firstDigit$$inline_10378_options$$61$$.viewportMax;
  this.$_majorIncrement$ = $continuousExtent$$inline_4848_firstDigit$$inline_10378_options$$61$$.step;
  this.$_minorIncrement$ = $continuousExtent$$inline_4848_firstDigit$$inline_10378_options$$61$$.minorStep;
  this.$_minMajorIncrement$ = $continuousExtent$$inline_4848_firstDigit$$inline_10378_options$$61$$.minStep;
  this.$_converter$ = D.$JSCompiler_alias_NULL$$;
  $continuousExtent$$inline_4848_firstDigit$$inline_10378_options$$61$$.tickLabel != D.$JSCompiler_alias_NULL$$ && (this.$_converter$ = $continuousExtent$$inline_4848_firstDigit$$inline_10378_options$$61$$.tickLabel.converter);
  this.$DataMin$ = $continuousExtent$$inline_4848_firstDigit$$inline_10378_options$$61$$.dataMin;
  this.$DataMax$ = $continuousExtent$$inline_4848_firstDigit$$inline_10378_options$$61$$.dataMax;
  $context$$201_testVal$$inline_10377_zeroBaseline$$inline_4847$$ = "zero" == this.$Options$.baselineScaling;
  $continuousExtent$$inline_4848_firstDigit$$inline_10378_options$$61$$ = "on" == this.$Options$._continuousExtent;
  $context$$201_testVal$$inline_10377_zeroBaseline$$inline_4847$$ && (this.$DataMin$ = window.Math.min(0, this.$DataMin$), this.$DataMax$ = window.Math.max(0, this.$DataMax$));
  $availSpace$$23_scaleUnit$$inline_4849$$ = (0,D.$JSCompiler_StaticMethods__calcAxisScale$$)(this, this.$GlobalMin$ != D.$JSCompiler_alias_NULL$$ ? this.$GlobalMin$ : this.$DataMin$, this.$GlobalMax$ != D.$JSCompiler_alias_NULL$$ ? this.$GlobalMax$ : this.$DataMax$);
  this.$DataMin$ == this.$DataMax$ && (0 == this.$DataMin$ ? this.$DataMax$ += 5 * $availSpace$$23_scaleUnit$$inline_4849$$ : (this.$DataMin$ -= 3 * $availSpace$$23_scaleUnit$$inline_4849$$, this.$DataMax$ += 2 * $availSpace$$23_scaleUnit$$inline_4849$$));
  if(this.$GlobalMin$ == D.$JSCompiler_alias_NULL$$) {
    if($context$$201_testVal$$inline_10377_zeroBaseline$$inline_4847$$ && 0 <= this.$DataMin$) {
      this.$GlobalMin$ = 0
    }else {
      if($continuousExtent$$inline_4848_firstDigit$$inline_10378_options$$61$$) {
        this.$GlobalMin$ = this.$DataMin$ - 0.1 * (this.$DataMax$ - this.$DataMin$), 0 <= this.$DataMin$ && (this.$GlobalMin$ = window.Math.max(this.$GlobalMin$, 0))
      }else {
        if(!$context$$201_testVal$$inline_10377_zeroBaseline$$inline_4847$$ && this.$GlobalMax$ != D.$JSCompiler_alias_NULL$$) {
          for(this.$GlobalMin$ = this.$GlobalMax$;this.$GlobalMin$ > this.$DataMin$;) {
            this.$GlobalMin$ -= $availSpace$$23_scaleUnit$$inline_4849$$
          }
        }else {
          this.$GlobalMin$ = window.Math.floor(this.$DataMin$ / $availSpace$$23_scaleUnit$$inline_4849$$) * $availSpace$$23_scaleUnit$$inline_4849$$
        }
      }
    }
  }
  if(this.$GlobalMax$ == D.$JSCompiler_alias_NULL$$) {
    if($context$$201_testVal$$inline_10377_zeroBaseline$$inline_4847$$ && 0 >= this.$DataMax$) {
      this.$GlobalMax$ = 0
    }else {
      if($continuousExtent$$inline_4848_firstDigit$$inline_10378_options$$61$$) {
        this.$GlobalMax$ = this.$DataMax$ + 0.1 * (this.$DataMax$ - this.$DataMin$), 0 >= this.$DataMax$ && (this.$GlobalMax$ = window.Math.min(this.$GlobalMax$, 0))
      }else {
        if($context$$201_testVal$$inline_10377_zeroBaseline$$inline_4847$$) {
          this.$GlobalMax$ = (window.Math.floor(this.$DataMax$ / $availSpace$$23_scaleUnit$$inline_4849$$) + 1) * $availSpace$$23_scaleUnit$$inline_4849$$
        }else {
          for(this.$GlobalMax$ = this.$GlobalMin$;this.$GlobalMax$ <= this.$DataMax$;) {
            this.$GlobalMax$ += $availSpace$$23_scaleUnit$$inline_4849$$
          }
        }
      }
    }
  }
  this.$GlobalMax$ == this.$GlobalMin$ && (this.$GlobalMax$ = 100, this.$GlobalMin$ = 0, $availSpace$$23_scaleUnit$$inline_4849$$ = (this.$GlobalMax$ - this.$GlobalMin$) / 10);
  this.$MinValue$ == D.$JSCompiler_alias_NULL$$ && (this.$MinValue$ = this.$GlobalMin$);
  this.$MaxValue$ == D.$JSCompiler_alias_NULL$$ && (this.$MaxValue$ = this.$GlobalMax$);
  if(this.$MinValue$ != this.$GlobalMin$ || this.$MaxValue$ != this.$GlobalMax$) {
    $availSpace$$23_scaleUnit$$inline_4849$$ = (0,D.$JSCompiler_StaticMethods__calcAxisScale$$)(this, this.$MinValue$, this.$MaxValue$)
  }
  this.$_majorIncrement$ = this.$_majorIncrement$ ? this.$_majorIncrement$ : $availSpace$$23_scaleUnit$$inline_4849$$;
  "on" == this.$Options$.alignTickMarks && this.$Options$._majorTickCount ? (this.$_majorTickCount$ = this.$Options$._majorTickCount, this.$_majorIncrement$ = (this.$MaxValue$ - this.$getMinLabel$()) / this.$_majorTickCount$, $context$$201_testVal$$inline_10377_zeroBaseline$$inline_4847$$ = window.Math.pow(10, window.Math.ceil(window.Math.log(this.$_majorIncrement$) / window.Math.log(10) - 1)), $continuousExtent$$inline_4848_firstDigit$$inline_10378_options$$61$$ = this.$_majorIncrement$ / $context$$201_testVal$$inline_10377_zeroBaseline$$inline_4847$$, 
  $continuousExtent$$inline_4848_firstDigit$$inline_10378_options$$61$$ = 1 < $continuousExtent$$inline_4848_firstDigit$$inline_10378_options$$61$$ && 1.5 >= $continuousExtent$$inline_4848_firstDigit$$inline_10378_options$$61$$ ? 1.5 : window.Math.ceil($continuousExtent$$inline_4848_firstDigit$$inline_10378_options$$61$$), this.$_majorIncrement$ = $continuousExtent$$inline_4848_firstDigit$$inline_10378_options$$61$$ * $context$$201_testVal$$inline_10377_zeroBaseline$$inline_4847$$, this.$MaxValue$ = 
  this.$_majorIncrement$ * this.$_majorTickCount$ + this.$getMinLabel$()) : (this.$_minMajorIncrement$ != D.$JSCompiler_alias_NULL$$ && this.$_majorIncrement$ < this.$_minMajorIncrement$ && (this.$_majorIncrement$ = this.$_minMajorIncrement$), this.$_majorTickCount$ = (this.$MaxValue$ - this.$getMinLabel$()) / this.$_majorIncrement$);
  this.$_minorTickCount$ = this.$_minorIncrement$ != D.$JSCompiler_alias_NULL$$ && 2 <= this.$_majorIncrement$ / this.$_minorIncrement$ ? this.$Options$._minorTickCount ? this.$Options$._minorTickCount : this.$_majorIncrement$ / this.$_minorIncrement$ : 2;
  this.$_minorIncrement$ = this.$_majorIncrement$ / this.$_minorTickCount$
};
D.$JSCompiler_prototypeAlias$$.$getMinLabel$ = function $$JSCompiler_prototypeAlias$$$$getMinLabel$$() {
  return"zero" == this.$Options$.baselineScaling || "on" == this.$Options$._continuousExtent && this.$Options$.min == D.$JSCompiler_alias_NULL$$ ? window.Math.ceil(this.$MinValue$ / this.$_majorIncrement$) * this.$_majorIncrement$ : window.Math.ceil((this.$MinValue$ - this.$GlobalMin$) / this.$_majorIncrement$) * this.$_majorIncrement$ + this.$GlobalMin$
};
D.$JSCompiler_prototypeAlias$$.$getLabels$ = function $$JSCompiler_prototypeAlias$$$$getLabels$$($context$$202$$, $levelIdx$$3$$) {
  if($levelIdx$$3$$ && 0 < $levelIdx$$3$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $labels$$12$$ = [], $container$$33_labelDims$$10$$ = [], $container$$33_labelDims$$10$$ = $context$$202$$.$_stage$, $isTangential$$ = "tangential" == this.$Position$;
  this.$Options$.tickLabel && this.$Options$.tickLabel.scaling && (this.$_axisValueFormatter$ = new D.$DvtLinearScaleAxisValueFormatter$$(this.$MinValue$, this.$MaxValue$, this.$_majorIncrement$, this.$Options$.tickLabel.scaling, this.$Options$.tickLabel.autoPrecision ? this.$Options$.tickLabel.autoPrecision : "on"));
  for(var $i$$380$$ = 0;$i$$380$$ <= this.$_majorTickCount$;$i$$380$$++) {
    var $coord$$14_value$$89$$ = $i$$380$$ * this.$_majorIncrement$ + this.$getMinLabel$();
    if(!($isTangential$$ && $coord$$14_value$$89$$ == this.$MaxValue$)) {
      var $label$$36_text$$45$$ = this.$_formatValue$($coord$$14_value$$89$$), $coord$$14_value$$89$$ = this.$getUnboundedCoordAt$($coord$$14_value$$89$$), $label$$36_text$$45$$ = this.$CreateLabel$($context$$202$$, $label$$36_text$$45$$, $coord$$14_value$$89$$);
      $labels$$12$$.push($label$$36_text$$45$$)
    }
  }
  $isTangential$$ || ($container$$33_labelDims$$10$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($labels$$12$$, $container$$33_labelDims$$10$$), $labels$$12$$ = (0,D.$JSCompiler_StaticMethods_SkipLabels$$)(this, $labels$$12$$, $container$$33_labelDims$$10$$));
  return $labels$$12$$
};
D.$JSCompiler_prototypeAlias$$.$getAxisLine$ = function $$JSCompiler_prototypeAlias$$$$getAxisLine$$($context$$203$$) {
  var $axisLineOptions$$2_axisLineStroke$$2$$ = this.$Options$.axisLine;
  return"on" == $axisLineOptions$$2_axisLineStroke$$2$$.rendered ? ($axisLineOptions$$2_axisLineStroke$$2$$ = new D.$DvtSolidStroke$$($axisLineOptions$$2_axisLineStroke$$2$$.lineColor, 1, $axisLineOptions$$2_axisLineStroke$$2$$.lineWidth), (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$203$$, $axisLineOptions$$2_axisLineStroke$$2$$, this.$_maxCoord$)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getMajorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMajorGridLines$$($context$$204$$) {
  var $gridlines$$3$$ = [], $coord$$15_value$$90$$, $baselineColor_line$$10_lineColor$$2_stroke$$56$$, $i$$381_majorTickOptions$$2$$ = this.$Options$.majorTick;
  if("off" == $i$$381_majorTickOptions$$2$$.rendered) {
    return $gridlines$$3$$
  }
  $baselineColor_line$$10_lineColor$$2_stroke$$56$$ = $i$$381_majorTickOptions$$2$$.lineColor;
  var $majorTickStroke$$2$$ = new D.$DvtSolidStroke$$($baselineColor_line$$10_lineColor$$2_stroke$$56$$, 1, $i$$381_majorTickOptions$$2$$.lineWidth);
  $i$$381_majorTickOptions$$2$$.lineStyle && $majorTickStroke$$2$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($i$$381_majorTickOptions$$2$$.lineStyle));
  var $baselineStroke$$ = $majorTickStroke$$2$$.clone();
  "inherit" != $i$$381_majorTickOptions$$2$$.baselineColor && ($baselineColor_line$$10_lineColor$$2_stroke$$56$$ = "auto" == $i$$381_majorTickOptions$$2$$.baselineColor ? D.$DvtColorUtils$$.$getDarker$($baselineColor_line$$10_lineColor$$2_stroke$$56$$, 0.4) : $i$$381_majorTickOptions$$2$$.baselineColor, $baselineStroke$$.$setColor$($baselineColor_line$$10_lineColor$$2_stroke$$56$$));
  $baselineStroke$$.$setWidth$($i$$381_majorTickOptions$$2$$.baselineWidth != D.$JSCompiler_alias_NULL$$ ? $i$$381_majorTickOptions$$2$$.baselineWidth : $i$$381_majorTickOptions$$2$$.lineWidth);
  $baselineStroke$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($i$$381_majorTickOptions$$2$$.baselineStyle ? $i$$381_majorTickOptions$$2$$.baselineStyle : $i$$381_majorTickOptions$$2$$.lineStyle));
  for($i$$381_majorTickOptions$$2$$ = 0;$i$$381_majorTickOptions$$2$$ <= this.$_majorTickCount$;$i$$381_majorTickOptions$$2$$++) {
    $coord$$15_value$$90$$ = $i$$381_majorTickOptions$$2$$ * this.$_majorIncrement$ + this.$getMinLabel$(), "tangential" == this.$Position$ && $coord$$15_value$$90$$ == this.$MaxValue$ || ($baselineColor_line$$10_lineColor$$2_stroke$$56$$ = 0 == $coord$$15_value$$90$$ ? $baselineStroke$$ : $majorTickStroke$$2$$, $coord$$15_value$$90$$ = this.$getUnboundedCoordAt$($coord$$15_value$$90$$), $baselineColor_line$$10_lineColor$$2_stroke$$56$$ = (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$204$$, 
    $baselineColor_line$$10_lineColor$$2_stroke$$56$$, $coord$$15_value$$90$$), $gridlines$$3$$.push($baselineColor_line$$10_lineColor$$2_stroke$$56$$))
  }
  return $gridlines$$3$$
};
D.$JSCompiler_prototypeAlias$$.$getMinorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMinorGridLines$$($context$$205$$) {
  var $gridlines$$4$$ = [], $coord$$16_line$$11_minorValue$$, $i$$382_minorTickOptions$$1$$ = this.$Options$.minorTick;
  if("on" != $i$$382_minorTickOptions$$1$$.rendered) {
    return $gridlines$$4$$
  }
  var $minorTickStroke$$1$$ = new D.$DvtSolidStroke$$($i$$382_minorTickOptions$$1$$.lineColor, 1, $i$$382_minorTickOptions$$1$$.lineWidth);
  $i$$382_minorTickOptions$$1$$.lineStyle && $minorTickStroke$$1$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($i$$382_minorTickOptions$$1$$.lineStyle));
  for($i$$382_minorTickOptions$$1$$ = -1;$i$$382_minorTickOptions$$1$$ <= this.$_majorTickCount$;$i$$382_minorTickOptions$$1$$++) {
    for(var $value$$91$$ = $i$$382_minorTickOptions$$1$$ * this.$_majorIncrement$ + this.$getMinLabel$(), $j$$64$$ = 1;$j$$64$$ < this.$_minorTickCount$;$j$$64$$++) {
      $coord$$16_line$$11_minorValue$$ = $value$$91$$ + $j$$64$$ * this.$_minorIncrement$;
      if($coord$$16_line$$11_minorValue$$ > this.$MaxValue$) {
        break
      }
      $coord$$16_line$$11_minorValue$$ < this.$MinValue$ || ($coord$$16_line$$11_minorValue$$ = this.$getUnboundedCoordAt$($coord$$16_line$$11_minorValue$$), $coord$$16_line$$11_minorValue$$ = (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$205$$, $minorTickStroke$$1$$, $coord$$16_line$$11_minorValue$$), $gridlines$$4$$.push($coord$$16_line$$11_minorValue$$))
    }
  }
  return $gridlines$$4$$
};
D.$JSCompiler_prototypeAlias$$.$getCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getCoordAt$$($value$$92$$) {
  return $value$$92$$ < this.$MinValue$ || $value$$92$$ > this.$MaxValue$ ? D.$JSCompiler_alias_NULL$$ : this.$getUnboundedCoordAt$($value$$92$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedValueAt$$($coord$$18$$) {
  var $minCoord$$5$$ = window.Math.min(this.$_minCoord$, this.$_maxCoord$), $maxCoord$$5$$ = window.Math.max(this.$_minCoord$, this.$_maxCoord$);
  $coord$$18$$ < $minCoord$$5$$ ? $coord$$18$$ = $minCoord$$5$$ : $coord$$18$$ > $maxCoord$$5$$ && ($coord$$18$$ = $maxCoord$$5$$);
  return this.$getUnboundedValueAt$($coord$$18$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedCoordAt$$($value$$93$$) {
  $value$$93$$ < this.$MinValue$ ? $value$$93$$ = this.$MinValue$ : $value$$93$$ > this.$MaxValue$ && ($value$$93$$ = this.$MaxValue$);
  return this.$getUnboundedCoordAt$($value$$93$$)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedValueAt$$($coord$$19$$) {
  return this.$MinValue$ + ($coord$$19$$ - this.$_minCoord$) / (this.$_maxCoord$ - this.$_minCoord$) * (this.$MaxValue$ - this.$MinValue$)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedCoordAt$$($value$$94$$) {
  return this.$_minCoord$ + ($value$$94$$ - this.$MinValue$) / (this.$MaxValue$ - this.$MinValue$) * (this.$_maxCoord$ - this.$_minCoord$)
};
D.$JSCompiler_prototypeAlias$$.$getBaselineCoord$ = function $$JSCompiler_prototypeAlias$$$$getBaselineCoord$$() {
  var $baseline$$ = 0;
  0 > this.$MaxValue$ ? $baseline$$ = this.$MaxValue$ : 0 < this.$MinValue$ && ($baseline$$ = this.$MinValue$);
  return this.$getCoordAt$($baseline$$)
};
D.$JSCompiler_prototypeAlias$$.$_formatValue$ = function $$JSCompiler_prototypeAlias$$$$_formatValue$$($value$$95$$) {
  if(this.$_converter$ && (this.$_converter$.getAsString || this.$_converter$.format)) {
    if(this.$_axisValueFormatter$) {
      return this.$_axisValueFormatter$.$format$($value$$95$$, this.$_converter$)
    }
    if(this.$_converter$.getAsString) {
      return this.$_converter$.getAsString($value$$95$$)
    }
    if(this.$_converter$.format) {
      return this.$_converter$.format($value$$95$$)
    }
  }else {
    if(this.$_axisValueFormatter$) {
      return this.$_axisValueFormatter$.$format$($value$$95$$)
    }
    var $decimals_t$$29$$ = window.Math.log(this.$_majorIncrement$) / window.Math.log(10), $decimals_t$$29$$ = window.Math.max(window.Math.ceil(-$decimals_t$$29$$), 0);
    return $value$$95$$.toFixed($decimals_t$$29$$)
  }
};
D.$JSCompiler_StaticMethods__calcAxisScale$$ = function $$JSCompiler_StaticMethods__calcAxisScale$$$($JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$, $min$$1_t$$30_testVal$$1$$, $max$$1$$) {
  if($JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$.$_majorIncrement$) {
    return $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$.$_majorIncrement$
  }
  $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ = $max$$1$$ - $min$$1_t$$30_testVal$$1$$;
  if(0 == $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$) {
    return 0 == $min$$1_t$$30_testVal$$1$$ ? 10 : window.Math.pow(10, window.Math.floor(window.Math.log($min$$1_t$$30_testVal$$1$$) / window.Math.LN10) - 1)
  }
  $min$$1_t$$30_testVal$$1$$ = window.Math.log($JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$) / window.Math.log(10);
  $min$$1_t$$30_testVal$$1$$ = window.Math.pow(10, window.Math.ceil($min$$1_t$$30_testVal$$1$$) - 2);
  $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ = window.Math.round($JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ / $min$$1_t$$30_testVal$$1$$);
  return(10 <= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ && 14 >= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ ? 2 : 15 <= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ && 19 >= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ ? 3 : 20 <= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ && 24 >= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ ? 4 : 25 <= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ && 
  45 >= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ ? 5 : 46 <= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ && 80 >= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ ? 10 : 20) * $min$$1_t$$30_testVal$$1$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtDataAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getMajorTickCount$ = (0,D.$JSCompiler_get$$)("$_majorTickCount$");
D.$JSCompiler_prototypeAlias$$.$setMajorTickCount$ = function $$JSCompiler_prototypeAlias$$$$setMajorTickCount$$($count$$23$$) {
  this.$_majorTickCount$ = $count$$23$$;
  this.$_majorIncrement$ = (this.$MaxValue$ - this.$MinValue$) / this.$_majorTickCount$
};
D.$JSCompiler_prototypeAlias$$.$getMinorTickCount$ = (0,D.$JSCompiler_get$$)("$_minorTickCount$");
D.$JSCompiler_prototypeAlias$$.$setMinorTickCount$ = function $$JSCompiler_prototypeAlias$$$$setMinorTickCount$$($count$$24$$) {
  this.$_minorTickCount$ = $count$$24$$;
  this.$_minorIncrement$ = this.$_majorIncrement$ / this.$_minorTickCount$
};
D.$JSCompiler_prototypeAlias$$.$getMajorIncrement$ = (0,D.$JSCompiler_get$$)("$_majorIncrement$");
D.$JSCompiler_prototypeAlias$$.$getMinorIncrement$ = (0,D.$JSCompiler_get$$)("$_minorIncrement$");
D.$JSCompiler_prototypeAlias$$.$getMinimumExtent$ = function $$JSCompiler_prototypeAlias$$$$getMinimumExtent$$() {
  return(this.$GlobalMax$ - this.$GlobalMin$) / 64
};
D.$JSCompiler_prototypeAlias$$.$getStartOverflow$ = function $$JSCompiler_prototypeAlias$$$$getStartOverflow$$() {
  return("top" == this.$Position$ || "bottom" == this.$Position$) && (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) ? this.$EndOverflow$ : this.$StartOverflow$
};
D.$JSCompiler_prototypeAlias$$.$getEndOverflow$ = function $$JSCompiler_prototypeAlias$$$$getEndOverflow$$() {
  return("top" == this.$Position$ || "bottom" == this.$Position$) && (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) ? this.$StartOverflow$ : this.$EndOverflow$
};
D.$DvtGroupAxisInfo$$ = function $$DvtGroupAxisInfo$$$($context$$179$$, $options$$49$$, $availSpace$$10$$) {
  this.Init($context$$179$$, $options$$49$$, $availSpace$$10$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtGroupAxisInfo$$, D.$DvtAxisInfo$$, "DvtGroupAxisInfo");
D.$DvtGroupAxisInfo$$.prototype.Init = function $$DvtGroupAxisInfo$$$$Init$($context$$180_isRTL$$6$$, $options$$50$$, $availSpace$$11_endOffset_temp$$2$$) {
  D.$DvtGroupAxisInfo$$.$superclass$.Init.call(this, $context$$180_isRTL$$6$$, $options$$50$$, $availSpace$$11_endOffset_temp$$2$$);
  $context$$180_isRTL$$6$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$180_isRTL$$6$$);
  if(("top" == this.$Position$ || "bottom" == this.$Position$) && $context$$180_isRTL$$6$$) {
    $availSpace$$11_endOffset_temp$$2$$ = this.$StartCoord$, this.$StartCoord$ = this.$EndCoord$, this.$EndCoord$ = $availSpace$$11_endOffset_temp$$2$$
  }
  this.$_groups$ = $options$$50$$.groups;
  $availSpace$$11_endOffset_temp$$2$$ = 0 < $options$$50$$.endGroupOffset ? (0,window.Number)($options$$50$$.endGroupOffset) : 0;
  var $startOffset$$ = 0 < $options$$50$$.startGroupOffset ? (0,window.Number)($options$$50$$.startGroupOffset) : 0;
  this.$DataMin$ = 0;
  this.$DataMax$ = this.$_groups$.length - 1;
  this.$GlobalMin$ = $options$$50$$.min == D.$JSCompiler_alias_NULL$$ ? this.$DataMin$ - $startOffset$$ : $options$$50$$.min;
  this.$GlobalMax$ = $options$$50$$.max == D.$JSCompiler_alias_NULL$$ ? this.$DataMax$ + $availSpace$$11_endOffset_temp$$2$$ : $options$$50$$.max;
  this.$MinValue$ = $options$$50$$.viewportMin == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMin$ : $options$$50$$.viewportMin;
  this.$MaxValue$ = $options$$50$$.viewportMax == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMax$ : $options$$50$$.viewportMax;
  var $startIndex$$11$$ = (0,D.$JSCompiler_StaticMethods_getIndexByLabel$$)(this, $options$$50$$.viewportStartGroup), $endIndex$$12$$ = (0,D.$JSCompiler_StaticMethods_getIndexByLabel$$)(this, $options$$50$$.viewportEndGroup);
  -1 != $startIndex$$11$$ && (this.$MinValue$ = $startIndex$$11$$ - $startOffset$$);
  -1 != $endIndex$$12$$ && (this.$MaxValue$ = $endIndex$$12$$ + $availSpace$$11_endOffset_temp$$2$$);
  this.$_startBuffer$ = $context$$180_isRTL$$6$$ ? $options$$50$$.rightBuffer : $options$$50$$.leftBuffer;
  this.$_endBuffer$ = $context$$180_isRTL$$6$$ ? $options$$50$$.leftBuffer : $options$$50$$.rightBuffer;
  this.$_isLabelRotated$ = D.$JSCompiler_alias_FALSE$$;
  this.$_renderGridAtLabels$ = $options$$50$$._renderGridAtLabels;
  this.$_level1Labels$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__rotateLabels$$ = function $$JSCompiler_StaticMethods__rotateLabels$$$($JSCompiler_StaticMethods__rotateLabels$self$$, $labels$$, $container$$26_labelDims$$2$$, $overflow_text$$37$$) {
  var $x$$125$$, $isRTL$$7$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods__rotateLabels$self$$.$_context$);
  $JSCompiler_StaticMethods__rotateLabels$self$$.$_isLabelRotated$ = D.$JSCompiler_alias_TRUE$$;
  (0,D.$JSCompiler_StaticMethods__setOverflow$$)($JSCompiler_StaticMethods__rotateLabels$self$$, $overflow_text$$37$$, $overflow_text$$37$$, $labels$$);
  for(var $i$$365$$ = 0;$i$$365$$ < $labels$$.length;$i$$365$$++) {
    $overflow_text$$37$$ = $labels$$[$i$$365$$], $overflow_text$$37$$ != D.$JSCompiler_alias_NULL$$ && ($x$$125$$ = $overflow_text$$37$$.$getX$(), $overflow_text$$37$$.$setX$(0), $overflow_text$$37$$.$setY$(0), $isRTL$$7$$ ? $overflow_text$$37$$.$setRotation$(window.Math.PI / 2) : $overflow_text$$37$$.$setRotation$(3 * window.Math.PI / 2), $overflow_text$$37$$.$setTranslateX$($x$$125$$))
  }
  $container$$26_labelDims$$2$$ = (0,D.$JSCompiler_StaticMethods_GuessLabelDims$$)($JSCompiler_StaticMethods__rotateLabels$self$$, $labels$$, $container$$26_labelDims$$2$$);
  return(0,D.$JSCompiler_StaticMethods_SkipLabels$$)($JSCompiler_StaticMethods__rotateLabels$self$$, $labels$$, $container$$26_labelDims$$2$$)
};
D.$DvtGroupAxisInfo$$.prototype.$isLabelRotated$ = (0,D.$JSCompiler_get$$)("$_isLabelRotated$");
D.$JSCompiler_StaticMethods__setOverflow$$ = function $$JSCompiler_StaticMethods__setOverflow$$$($JSCompiler_StaticMethods__setOverflow$self$$, $startOverflow$$, $endOverflow$$, $labels$$1$$) {
  $startOverflow$$ = window.Math.max($startOverflow$$ - $JSCompiler_StaticMethods__setOverflow$self$$.$_startBuffer$, 0);
  $endOverflow$$ = window.Math.max($endOverflow$$ - $JSCompiler_StaticMethods__setOverflow$self$$.$_endBuffer$, 0);
  var $i$$366_isRTL$$8$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods__setOverflow$self$$.$_context$);
  $JSCompiler_StaticMethods__setOverflow$self$$.$StartCoord$ += ($startOverflow$$ - $JSCompiler_StaticMethods__setOverflow$self$$.$StartOverflow$) * ($i$$366_isRTL$$8$$ ? -1 : 1);
  $JSCompiler_StaticMethods__setOverflow$self$$.$EndCoord$ -= ($endOverflow$$ - $JSCompiler_StaticMethods__setOverflow$self$$.$EndOverflow$) * ($i$$366_isRTL$$8$$ ? -1 : 1);
  for($i$$366_isRTL$$8$$ = 0;$i$$366_isRTL$$8$$ < $labels$$1$$.length;$i$$366_isRTL$$8$$++) {
    var $text$$38$$ = $labels$$1$$[$i$$366_isRTL$$8$$];
    $text$$38$$ && $text$$38$$.$setX$($JSCompiler_StaticMethods__setOverflow$self$$.$getCoordAt$($i$$366_isRTL$$8$$))
  }
  $JSCompiler_StaticMethods__setOverflow$self$$.$StartOverflow$ = $startOverflow$$;
  $JSCompiler_StaticMethods__setOverflow$self$$.$EndOverflow$ = $endOverflow$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtGroupAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getLabels$ = function $$JSCompiler_prototypeAlias$$$$getLabels$$($context$$181$$, $levelIdx$$) {
  if($levelIdx$$ && 0 < $levelIdx$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  this.$_level1Labels$ || (this.$_level1Labels$ = this.$_generateLabels$($context$$181$$));
  return this.$_level1Labels$
};
D.$JSCompiler_prototypeAlias$$.$_generateLabels$ = function $$JSCompiler_prototypeAlias$$$$_generateLabels$$($context$$182_firstLabelDim$$) {
  for(var $labels$$2$$ = [], $container$$27$$ = $context$$182_firstLabelDim$$.$_stage$, $isHoriz$$3$$ = "top" == this.$Position$ || "bottom" == this.$Position$, $endOverflow$$1_isRTL$$9_labelDims$$3_minLabelDims$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$182_firstLabelDim$$), $maxLabelDims_numLabels_startOverflow$$1$$ = this.$_groups$.length, $firstLabel_lastLabelDim$$, $lastLabel_text$$39$$, $i$$367$$ = 0;$i$$367$$ < $maxLabelDims_numLabels_startOverflow$$1$$;$i$$367$$++) {
    var $label$$26$$ = (0,D.$JSCompiler_StaticMethods_getLabelAt$$)(this, $i$$367$$), $coord$$ = this.$getCoordAt$($i$$367$$);
    $coord$$ != D.$JSCompiler_alias_NULL$$ ? ($lastLabel_text$$39$$ = this.$CreateLabel$($context$$182_firstLabelDim$$, $label$$26$$, $coord$$), $labels$$2$$.push($lastLabel_text$$39$$), $firstLabel_lastLabelDim$$ || ($firstLabel_lastLabelDim$$ = $lastLabel_text$$39$$)) : $labels$$2$$.push(D.$JSCompiler_alias_NULL$$)
  }
  if("tangential" == this.$Position$) {
    return $labels$$2$$
  }
  $context$$182_firstLabelDim$$ = $firstLabel_lastLabelDim$$.$measureDimensions$();
  $isHoriz$$3$$ && (this.$Options$._startOverflow != D.$JSCompiler_alias_NULL$$ && this.$Options$._endOverflow != D.$JSCompiler_alias_NULL$$ ? ($maxLabelDims_numLabels_startOverflow$$1$$ = this.$Options$._startOverflow, $endOverflow$$1_isRTL$$9_labelDims$$3_minLabelDims$$ = this.$Options$._endOverflow) : ($firstLabel_lastLabelDim$$ = $lastLabel_text$$39$$.$measureDimensions$(), $maxLabelDims_numLabels_startOverflow$$1$$ = $endOverflow$$1_isRTL$$9_labelDims$$3_minLabelDims$$ ? $context$$182_firstLabelDim$$.$w$ + 
  $context$$182_firstLabelDim$$.x - this.$StartCoord$ : this.$StartCoord$ - $context$$182_firstLabelDim$$.x, $endOverflow$$1_isRTL$$9_labelDims$$3_minLabelDims$$ = $endOverflow$$1_isRTL$$9_labelDims$$3_minLabelDims$$ ? this.$EndCoord$ - $firstLabel_lastLabelDim$$.x : $firstLabel_lastLabelDim$$.$w$ + $firstLabel_lastLabelDim$$.x - this.$EndCoord$), ($maxLabelDims_numLabels_startOverflow$$1$$ > this.$_startBuffer$ || $endOverflow$$1_isRTL$$9_labelDims$$3_minLabelDims$$ > this.$_endBuffer$) && (0,D.$JSCompiler_StaticMethods__setOverflow$$)(this, 
  $maxLabelDims_numLabels_startOverflow$$1$$, $endOverflow$$1_isRTL$$9_labelDims$$3_minLabelDims$$, $labels$$2$$));
  $endOverflow$$1_isRTL$$9_labelDims$$3_minLabelDims$$ = [];
  $endOverflow$$1_isRTL$$9_labelDims$$3_minLabelDims$$ = (0,D.$JSCompiler_StaticMethods_GuessLabelDims$$)(this, $labels$$2$$, $container$$27$$, 0.3);
  $maxLabelDims_numLabels_startOverflow$$1$$ = (0,D.$JSCompiler_StaticMethods_GuessLabelDims$$)(this, $labels$$2$$, $container$$27$$);
  if(!(0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $maxLabelDims_numLabels_startOverflow$$1$$, 0)) {
    return $labels$$2$$
  }
  if($isHoriz$$3$$) {
    if("auto" == this.$Options$.tickLabel.rotation) {
      if((0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $endOverflow$$1_isRTL$$9_labelDims$$3_minLabelDims$$, 0)) {
        return(0,D.$JSCompiler_StaticMethods__rotateLabels$$)(this, $labels$$2$$, $container$$27$$, $context$$182_firstLabelDim$$.$h$ / 2)
      }
      $endOverflow$$1_isRTL$$9_labelDims$$3_minLabelDims$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($labels$$2$$, $container$$27$$);
      return(0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $endOverflow$$1_isRTL$$9_labelDims$$3_minLabelDims$$, 0) ? (0,D.$JSCompiler_StaticMethods__rotateLabels$$)(this, $labels$$2$$, $container$$27$$, $context$$182_firstLabelDim$$.$h$ / 2) : $labels$$2$$
    }
    $endOverflow$$1_isRTL$$9_labelDims$$3_minLabelDims$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($labels$$2$$, $container$$27$$);
    return(0,D.$JSCompiler_StaticMethods_SkipLabels$$)(this, $labels$$2$$, $endOverflow$$1_isRTL$$9_labelDims$$3_minLabelDims$$)
  }
  return(0,D.$JSCompiler_StaticMethods_SkipLabels$$)(this, $labels$$2$$, $maxLabelDims_numLabels_startOverflow$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$getAxisLine$ = function $$JSCompiler_prototypeAlias$$$$getAxisLine$$($context$$183$$) {
  var $axisLineOptions_axisLineStroke$$ = this.$Options$.axisLine;
  return"on" == $axisLineOptions_axisLineStroke$$.rendered ? ($axisLineOptions_axisLineStroke$$ = new D.$DvtSolidStroke$$($axisLineOptions_axisLineStroke$$.lineColor, 1, $axisLineOptions_axisLineStroke$$.lineWidth), (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$183$$, $axisLineOptions_axisLineStroke$$, 0)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getMajorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMajorGridLines$$($context$$184$$) {
  var $gridlines$$ = [], $coord$$1_line$$8$$, $majorTickOptions_numGroups_rendered$$1$$ = this.$Options$.majorTick, $majorTickStroke$$ = new D.$DvtSolidStroke$$($majorTickOptions_numGroups_rendered$$1$$.lineColor, 1, $majorTickOptions_numGroups_rendered$$1$$.lineWidth);
  $majorTickOptions_numGroups_rendered$$1$$.lineStyle && $majorTickStroke$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($majorTickOptions_numGroups_rendered$$1$$.lineStyle));
  $majorTickOptions_numGroups_rendered$$1$$ = $majorTickOptions_numGroups_rendered$$1$$.rendered;
  if("on" == $majorTickOptions_numGroups_rendered$$1$$ || "auto" == $majorTickOptions_numGroups_rendered$$1$$ && "tangential" == this.$Position$) {
    for(var $majorTickOptions_numGroups_rendered$$1$$ = this.$_groups$.length, $i$$368$$ = 0;$i$$368$$ < $majorTickOptions_numGroups_rendered$$1$$;$i$$368$$++) {
      if(this.$_renderGridAtLabels$) {
        $coord$$1_line$$8$$ = this.$getCoordAt$($i$$368$$)
      }else {
        if(this.$getCoordAt$($i$$368$$ + 0.5)) {
          $coord$$1_line$$8$$ = this.$getCoordAt$($i$$368$$ + 0.5)
        }else {
          continue
        }
      }
      $coord$$1_line$$8$$ != D.$JSCompiler_alias_NULL$$ && ($coord$$1_line$$8$$ = (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$184$$, $majorTickStroke$$, $coord$$1_line$$8$$), $gridlines$$.push($coord$$1_line$$8$$))
    }
  }
  return $gridlines$$
};
D.$JSCompiler_prototypeAlias$$.$getCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getCoordAt$$($value$$79$$) {
  return $value$$79$$ < this.$MinValue$ || $value$$79$$ > this.$MaxValue$ ? D.$JSCompiler_alias_NULL$$ : this.$getUnboundedCoordAt$($value$$79$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedValueAt$$($coord$$3$$) {
  var $minCoord$$1$$ = window.Math.min(this.$StartCoord$, this.$EndCoord$), $maxCoord$$1$$ = window.Math.max(this.$StartCoord$, this.$EndCoord$);
  $coord$$3$$ < $minCoord$$1$$ ? $coord$$3$$ = $minCoord$$1$$ : $coord$$3$$ > $maxCoord$$1$$ && ($coord$$3$$ = $maxCoord$$1$$);
  return this.$getUnboundedValueAt$($coord$$3$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedCoordAt$$($value$$80$$) {
  $value$$80$$ < this.$MinValue$ ? $value$$80$$ = this.$MinValue$ : $value$$80$$ >= this.$MaxValue$ && ($value$$80$$ = this.$MaxValue$);
  return this.$getUnboundedCoordAt$($value$$80$$)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedValueAt$$($coord$$4$$) {
  return this.$MinValue$ + ($coord$$4$$ - this.$StartCoord$) / ((this.$EndCoord$ - this.$StartCoord$) / (this.$MaxValue$ - this.$MinValue$))
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedCoordAt$$($value$$81$$) {
  return this.$StartCoord$ + ($value$$81$$ - this.$MinValue$) * ((this.$EndCoord$ - this.$StartCoord$) / (this.$MaxValue$ - this.$MinValue$))
};
D.$JSCompiler_StaticMethods_getLabelAt$$ = function $$JSCompiler_StaticMethods_getLabelAt$$$($JSCompiler_StaticMethods_getLabelAt$self$$, $index$$131$$) {
  $index$$131$$ = window.Math.round($index$$131$$);
  if(0 > $index$$131$$ || $index$$131$$ >= $JSCompiler_StaticMethods_getLabelAt$self$$.$_groups$.length) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $label$$27$$ = $JSCompiler_StaticMethods_getLabelAt$self$$.$_groups$[$index$$131$$];
  $label$$27$$ && $label$$27$$.name && ($label$$27$$ = $label$$27$$.name);
  return $label$$27$$
};
D.$JSCompiler_StaticMethods_getIndexByLabel$$ = function $$JSCompiler_StaticMethods_getIndexByLabel$$$($JSCompiler_StaticMethods_getIndexByLabel$self$$, $label$$28$$) {
  if($label$$28$$ == D.$JSCompiler_alias_NULL$$) {
    return-1
  }
  for(var $index$$132$$ = -1, $i$$369$$ = 0;$i$$369$$ < $JSCompiler_StaticMethods_getIndexByLabel$self$$.$_groups$.length;$i$$369$$++) {
    if($label$$28$$ == (0,D.$JSCompiler_StaticMethods_getLabelAt$$)($JSCompiler_StaticMethods_getIndexByLabel$self$$, $i$$369$$)) {
      $index$$132$$ = $i$$369$$;
      break
    }
  }
  return $index$$132$$
};
D.$DvtGroupAxisInfo$$.prototype.$getMinimumExtent$ = (0,D.$JSCompiler_returnArg$$)(1);
D.$DvtLinearScaleAxisValueFormatter$$ = function $$DvtLinearScaleAxisValueFormatter$$$($minValue$$3$$, $maxValue$$3$$, $tickStep$$, $scale$$41$$, $autoPrecision$$1$$) {
  this.$_bundle$ = new D.$DvtUtilBundle$$;
  this.Init($minValue$$3$$, $maxValue$$3$$, $tickStep$$, $scale$$41$$, $autoPrecision$$1$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtLinearScaleAxisValueFormatter$$, D.$DvtAbstractAxisValueFormatter$$, "DvtLinearScaleAxisValueFormatter");
D.$DvtLinearScaleAxisValueFormatter$$.prototype.Init = function $$DvtLinearScaleAxisValueFormatter$$$$Init$($minValue$$4_scaleFactorDiff$$inline_4874$$, $maxValue$$4$$, $tickStep$$1$$, $i$$inline_10388_scale$$42_scale$$inline_10383_scaleName$$inline_10381$$, $autoPrecision$$2$$) {
  this.$_scales$ = {};
  this.$_scalesOrder$ = [];
  this.$_factorToScaleMapping$ = {};
  var $createScale$$inline_4854_useAutoPrecision$$inline_4872$$ = function $$createScale$$inline_4854_useAutoPrecision$$inline_4872$$$($minValue$$4_scaleFactorDiff$$inline_4874$$, $maxValue$$4$$, $tickStep$$1$$) {
    var $i$$inline_10388_scale$$42_scale$$inline_10383_scaleName$$inline_10381$$;
    this.$_bundle$ && $tickStep$$1$$ && ($i$$inline_10388_scale$$42_scale$$inline_10383_scaleName$$inline_10381$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$_bundle$, $tickStep$$1$$, D.$JSCompiler_alias_NULL$$));
    $tickStep$$1$$ = {$scaleFactor$:$maxValue$$4$$, $localizedSuffix$:$i$$inline_10388_scale$$42_scale$$inline_10383_scaleName$$inline_10381$$};
    this.$_scales$[$minValue$$4_scaleFactorDiff$$inline_4874$$] = $tickStep$$1$$;
    this.$_scalesOrder$.push($tickStep$$1$$);
    this.$_factorToScaleMapping$[$maxValue$$4$$] = $tickStep$$1$$
  };
  $createScale$$inline_4854_useAutoPrecision$$inline_4872$$.call(this, "none", 0);
  $createScale$$inline_4854_useAutoPrecision$$inline_4872$$.call(this, "thousand", 3, "SCALING_SUFFIX_THOUSAND");
  $createScale$$inline_4854_useAutoPrecision$$inline_4872$$.call(this, "million", 6, "SCALING_SUFFIX_MILLION");
  $createScale$$inline_4854_useAutoPrecision$$inline_4872$$.call(this, "billion", 9, "SCALING_SUFFIX_BILLION");
  $createScale$$inline_4854_useAutoPrecision$$inline_4872$$.call(this, "trillion", 12, "SCALING_SUFFIX_TRILLION");
  $createScale$$inline_4854_useAutoPrecision$$inline_4872$$.call(this, "quadrillion", 15, "SCALING_SUFFIX_QUADRILLION");
  this.$_scalesOrder$.sort(function($minValue$$4_scaleFactorDiff$$inline_4874$$, $maxValue$$4$$) {
    return $minValue$$4_scaleFactorDiff$$inline_4874$$.$scaleFactor$ < $maxValue$$4$$.$scaleFactor$ ? -1 : $minValue$$4_scaleFactorDiff$$inline_4874$$.$scaleFactor$ > $maxValue$$4$$.$scaleFactor$ ? 1 : 0
  });
  var $absMax$$inline_4873_findScale$$inline_4869_value$$inline_10386$$ = D.$JSCompiler_alias_FALSE$$, $decimalPlaces$$inline_4870$$, $scaleFactor$$inline_10382_scaleFactor$$inline_10387_scaleFactor$$inline_4871$$, $createScale$$inline_4854_useAutoPrecision$$inline_4872$$ = D.$JSCompiler_alias_FALSE$$;
  "off" !== $autoPrecision$$2$$ && ($createScale$$inline_4854_useAutoPrecision$$inline_4872$$ = D.$JSCompiler_alias_TRUE$$);
  $i$$inline_10388_scale$$42_scale$$inline_10383_scaleName$$inline_10381$$ || ($i$$inline_10388_scale$$42_scale$$inline_10383_scaleName$$inline_10381$$ = "auto");
  if($i$$inline_10388_scale$$42_scale$$inline_10383_scaleName$$inline_10381$$ = this.$_scales$[$i$$inline_10388_scale$$42_scale$$inline_10383_scaleName$$inline_10381$$]) {
    $scaleFactor$$inline_10382_scaleFactor$$inline_10387_scaleFactor$$inline_4871$$ = $i$$inline_10388_scale$$42_scale$$inline_10383_scaleName$$inline_10381$$.$scaleFactor$
  }
  "number" !== typeof $scaleFactor$$inline_10382_scaleFactor$$inline_10387_scaleFactor$$inline_4871$$ && ($absMax$$inline_4873_findScale$$inline_4869_value$$inline_10386$$ = D.$JSCompiler_alias_TRUE$$);
  if($absMax$$inline_4873_findScale$$inline_4869_value$$inline_10386$$) {
    if($absMax$$inline_4873_findScale$$inline_4869_value$$inline_10386$$ = window.Math.max(window.Math.abs($minValue$$4_scaleFactorDiff$$inline_4874$$), window.Math.abs($maxValue$$4$$)), $absMax$$inline_4873_findScale$$inline_4869_value$$inline_10386$$ = (0,D.$JSCompiler_StaticMethods__getPowerOfTen$$)($absMax$$inline_4873_findScale$$inline_4869_value$$inline_10386$$), $scaleFactor$$inline_10382_scaleFactor$$inline_10387_scaleFactor$$inline_4871$$ = 0, $absMax$$inline_4873_findScale$$inline_4869_value$$inline_10386$$ <= 
    this.$_scalesOrder$[0].$scaleFactor$) {
      $scaleFactor$$inline_10382_scaleFactor$$inline_10387_scaleFactor$$inline_4871$$ = this.$_scalesOrder$[0].$scaleFactor$
    }else {
      if($absMax$$inline_4873_findScale$$inline_4869_value$$inline_10386$$ >= this.$_scalesOrder$[this.$_scalesOrder$.length - 1].$scaleFactor$) {
        $scaleFactor$$inline_10382_scaleFactor$$inline_10387_scaleFactor$$inline_4871$$ = this.$_scalesOrder$[this.$_scalesOrder$.length - 1].$scaleFactor$
      }else {
        for($i$$inline_10388_scale$$42_scale$$inline_10383_scaleName$$inline_10381$$ = this.$_scalesOrder$.length - 1;0 <= $i$$inline_10388_scale$$42_scale$$inline_10383_scaleName$$inline_10381$$;$i$$inline_10388_scale$$42_scale$$inline_10383_scaleName$$inline_10381$$--) {
          if(this.$_scalesOrder$[$i$$inline_10388_scale$$42_scale$$inline_10383_scaleName$$inline_10381$$].$scaleFactor$ <= $absMax$$inline_4873_findScale$$inline_4869_value$$inline_10386$$) {
            $scaleFactor$$inline_10382_scaleFactor$$inline_10387_scaleFactor$$inline_4871$$ = this.$_scalesOrder$[$i$$inline_10388_scale$$42_scale$$inline_10383_scaleName$$inline_10381$$].$scaleFactor$;
            break
          }
        }
      }
    }
  }
  $createScale$$inline_4854_useAutoPrecision$$inline_4872$$ === D.$JSCompiler_alias_TRUE$$ && (0 == $tickStep$$1$$ && $minValue$$4_scaleFactorDiff$$inline_4874$$ == $maxValue$$4$$ ? ($minValue$$4_scaleFactorDiff$$inline_4874$$ = $scaleFactor$$inline_10382_scaleFactor$$inline_10387_scaleFactor$$inline_4871$$ - (0,D.$JSCompiler_StaticMethods__getPowerOfTen$$)($maxValue$$4$$), $decimalPlaces$$inline_4870$$ = 0 >= $minValue$$4_scaleFactorDiff$$inline_4874$$ ? 3 + $minValue$$4_scaleFactorDiff$$inline_4874$$ : 
  window.Math.max($minValue$$4_scaleFactorDiff$$inline_4874$$, 4)) : $decimalPlaces$$inline_4870$$ = window.Math.max($scaleFactor$$inline_10382_scaleFactor$$inline_10387_scaleFactor$$inline_4871$$ - (0,D.$JSCompiler_StaticMethods__getPowerOfTen$$)($tickStep$$1$$), 0));
  this.$_useAutoPrecision$ = $createScale$$inline_4854_useAutoPrecision$$inline_4872$$;
  this.$_scaleFactor$ = $scaleFactor$$inline_10382_scaleFactor$$inline_10387_scaleFactor$$inline_4871$$;
  this.$_decimalPlaces$ = $decimalPlaces$$inline_4870$$
};
D.$DvtLinearScaleAxisValueFormatter$$.prototype.$format$ = function $$DvtLinearScaleAxisValueFormatter$$$$$format$$($value$$97$$, $converter$$1$$) {
  var $formatted$$inline_4878_parsed$$ = (0,window.parseFloat)($value$$97$$);
  if((0,window.isNaN)($formatted$$inline_4878_parsed$$)) {
    return $value$$97$$
  }
  var $i$$384_suffix$$2$$;
  if(0 < this.$_scaleFactor$) {
    for($i$$384_suffix$$2$$ = 0;$i$$384_suffix$$2$$ < this.$_scaleFactor$;$i$$384_suffix$$2$$++) {
      $formatted$$inline_4878_parsed$$ /= 10
    }
    $i$$384_suffix$$2$$ = this.$_factorToScaleMapping$[this.$_scaleFactor$].$localizedSuffix$
  }
  if($converter$$1$$ && $converter$$1$$.getAsString) {
    $formatted$$inline_4878_parsed$$ = $converter$$1$$.getAsString($formatted$$inline_4878_parsed$$)
  }else {
    if($converter$$1$$ && $converter$$1$$.format) {
      $formatted$$inline_4878_parsed$$ = $converter$$1$$.format($formatted$$inline_4878_parsed$$)
    }else {
      if(this.$_useAutoPrecision$ && !(0,window.isNaN)((0,window.parseFloat)($formatted$$inline_4878_parsed$$)) && ($formatted$$inline_4878_parsed$$ = (0,window.parseFloat)((new window.Number($formatted$$inline_4878_parsed$$)).toFixed(this.$_decimalPlaces$)), $formatted$$inline_4878_parsed$$ = "" + $formatted$$inline_4878_parsed$$, 0 < this.$_decimalPlaces$)) {
        -1 == $formatted$$inline_4878_parsed$$.indexOf(".") && ($formatted$$inline_4878_parsed$$ += ".");
        for(var $existingPlacesCount$$inline_4879$$ = $formatted$$inline_4878_parsed$$.substring($formatted$$inline_4878_parsed$$.indexOf(".") + 1).length;$existingPlacesCount$$inline_4879$$ < this.$_decimalPlaces$;) {
          $formatted$$inline_4878_parsed$$ += "0", $existingPlacesCount$$inline_4879$$++
        }
      }
    }
  }
  "string" === typeof $i$$384_suffix$$2$$ && ($formatted$$inline_4878_parsed$$ += $i$$384_suffix$$2$$);
  return $formatted$$inline_4878_parsed$$
};
D.$JSCompiler_StaticMethods__getPowerOfTen$$ = function $$JSCompiler_StaticMethods__getPowerOfTen$$$($value$$99$$) {
  $value$$99$$ = 0 <= $value$$99$$ ? $value$$99$$ : -$value$$99$$;
  var $power$$1$$ = 0;
  if(1E-15 > $value$$99$$) {
    return 0
  }
  if(window.Infinity == $value$$99$$) {
    return window.Number.MAX_VALUE
  }
  if(10 <= $value$$99$$) {
    for(;10 <= $value$$99$$;) {
      $power$$1$$ += 1, $value$$99$$ /= 10
    }
  }else {
    if(1 > $value$$99$$) {
      for(;1 > $value$$99$$;) {
        $power$$1$$ -= 1, $value$$99$$ *= 10
      }
    }
  }
  return $power$$1$$
};
D.$DvtTimeAxisInfo$$ = function $$DvtTimeAxisInfo$$$($context$$185$$, $options$$55$$, $availSpace$$18$$) {
  this.Init($context$$185$$, $options$$55$$, $availSpace$$18$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimeAxisInfo$$, D.$DvtAxisInfo$$, "DvtTimeAxisInfo");
D.$DvtTimeAxisInfo$$.prototype.Init = function $$DvtTimeAxisInfo$$$$Init$($context$$186_endOffset$$1$$, $bundle$$4_options$$56$$, $availSpace$$19_startOffset$$1$$) {
  D.$DvtTimeAxisInfo$$.$superclass$.Init.call(this, $context$$186_endOffset$$1$$, $bundle$$4_options$$56$$, $availSpace$$19_startOffset$$1$$);
  "top" == this.$Position$ || "bottom" == this.$Position$ ? (!$bundle$$4_options$$56$$._isOverview && "on" == $bundle$$4_options$$56$$.tickLabel.rendered && (this.$StartOverflow$ = window.Math.max(10 - $bundle$$4_options$$56$$.leftBuffer, 0), this.$EndOverflow$ = window.Math.max(10 - $bundle$$4_options$$56$$.rightBuffer, 0)), (0,D.$DvtAgent$isRightToLeft$$)($context$$186_endOffset$$1$$) ? (this.$_minCoord$ = this.$EndCoord$ - this.$EndOverflow$, this.$_maxCoord$ = this.$StartCoord$ + this.$StartOverflow$) : 
  (this.$_minCoord$ = this.$StartCoord$ + this.$StartOverflow$, this.$_maxCoord$ = this.$EndCoord$ - this.$EndOverflow$)) : (this.$_minCoord$ = this.$StartCoord$, this.$_maxCoord$ = this.$EndCoord$);
  this.$_converter$ = $bundle$$4_options$$56$$.tickLabel != D.$JSCompiler_alias_NULL$$ ? $bundle$$4_options$$56$$.tickLabel.converter : D.$JSCompiler_alias_NULL$$;
  this.$_isoConverter$ = $bundle$$4_options$$56$$._isoConverter;
  this.$_groups$ = $bundle$$4_options$$56$$.groups;
  this.$DataMin$ = $bundle$$4_options$$56$$.dataMin;
  this.$DataMax$ = $bundle$$4_options$$56$$.dataMax;
  this.$_averageInterval$ = 0 < this.$_groups$.length ? (this.$DataMax$ - this.$DataMin$) / (this.$_groups$.length - 1) : 0;
  this.$_step$ = $bundle$$4_options$$56$$.step;
  $context$$186_endOffset$$1$$ = 0 < $bundle$$4_options$$56$$.endGroupOffset ? $bundle$$4_options$$56$$.endGroupOffset * this.$_averageInterval$ : 0;
  $availSpace$$19_startOffset$$1$$ = 0 < $bundle$$4_options$$56$$.startGroupOffset ? $bundle$$4_options$$56$$.startGroupOffset * this.$_averageInterval$ : 0;
  this.$GlobalMin$ = $bundle$$4_options$$56$$.min != D.$JSCompiler_alias_NULL$$ ? $bundle$$4_options$$56$$.min : this.$DataMin$ - $availSpace$$19_startOffset$$1$$;
  this.$GlobalMax$ = $bundle$$4_options$$56$$.max != D.$JSCompiler_alias_NULL$$ ? $bundle$$4_options$$56$$.max : this.$DataMax$ + $context$$186_endOffset$$1$$;
  this.$MinValue$ = $bundle$$4_options$$56$$.viewportMin == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMin$ : $bundle$$4_options$$56$$.viewportMin;
  this.$MaxValue$ = $bundle$$4_options$$56$$.viewportMax == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMax$ : $bundle$$4_options$$56$$.viewportMax;
  $bundle$$4_options$$56$$.viewportStartGroup != D.$JSCompiler_alias_NULL$$ && (this.$MinValue$ = $bundle$$4_options$$56$$.viewportStartGroup - $availSpace$$19_startOffset$$1$$);
  $bundle$$4_options$$56$$.viewportEndGroup != D.$JSCompiler_alias_NULL$$ && (this.$MaxValue$ = $bundle$$4_options$$56$$.viewportEndGroup + $context$$186_endOffset$$1$$);
  this.$_timeZoneOffset$ = 0;
  this.$_timeRange$ = this.$MaxValue$ - this.$MinValue$;
  this.$_level2Coords$ = this.$_level1Coords$ = this.$_level2Labels$ = this.$_level1Labels$ = D.$JSCompiler_alias_NULL$$;
  this.$_isOneLevel$ = D.$JSCompiler_alias_TRUE$$;
  $bundle$$4_options$$56$$ = new D.$DvtUtilBundle$$;
  this.$_timeAxisResources$ = [(0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$4_options$$56$$, "MONTH_SHORT_JANUARY", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$4_options$$56$$, "MONTH_SHORT_FEBRUARY", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$4_options$$56$$, "MONTH_SHORT_MARCH", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$4_options$$56$$, 
  "MONTH_SHORT_APRIL", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$4_options$$56$$, "MONTH_SHORT_MAY", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$4_options$$56$$, "MONTH_SHORT_JUNE", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$4_options$$56$$, "MONTH_SHORT_JULY", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$4_options$$56$$, 
  "MONTH_SHORT_AUGUST", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$4_options$$56$$, "MONTH_SHORT_SEPTEMBER", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$4_options$$56$$, "MONTH_SHORT_OCTOBER", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$4_options$$56$$, "MONTH_SHORT_NOVEMBER", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$4_options$$56$$, 
  "MONTH_SHORT_DECEMBER", D.$JSCompiler_alias_NULL$$)]
};
D.$JSCompiler_StaticMethods__formatAxisLabel$$ = function $$JSCompiler_StaticMethods__formatAxisLabel$$$($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$13$$, $prevDate$$) {
  var $label1$$ = D.$JSCompiler_alias_NULL$$, $label2$$ = D.$JSCompiler_alias_NULL$$, $isVert$$ = "left" == $JSCompiler_StaticMethods__formatAxisLabel$self$$.$Position$ || "right" == $JSCompiler_StaticMethods__formatAxisLabel$self$$.$Position$;
  if($JSCompiler_StaticMethods__formatAxisLabel$self$$.$_converter$ && $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_converter$.getAsString) {
    $label1$$ = $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_converter$.getAsString($date$$13$$)
  }else {
    if($JSCompiler_StaticMethods__formatAxisLabel$self$$.$_converter$ && $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_converter$.format) {
      $label1$$ = $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_converter$.format($JSCompiler_StaticMethods__formatAxisLabel$self$$.$_isoConverter$ ? $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_isoConverter$($date$$13$$) : $date$$13$$)
    }else {
      if(31536E6 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_step$) {
        $label1$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$13$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$)
      }else {
        if(31536E6 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_timeRange$ || 24192E5 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_step$) {
          if($prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getMonth() != $date$$13$$.getMonth()) {
            $label1$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$13$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$)
          }
          if($prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getYear() != $date$$13$$.getYear()) {
            $label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$13$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$)
          }
        }else {
          if(24192E5 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_timeRange$ || 864E5 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_step$) {
            if($prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getDate() != $date$$13$$.getDate()) {
              $label1$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$13$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$)
            }
            $prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getYear() != $date$$13$$.getYear() ? $label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$13$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$) : $prevDate$$.getMonth() != $date$$13$$.getMonth() && ($label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$13$$, D.$JSCompiler_alias_FALSE$$, 
            D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$))
          }else {
            if(36E5 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_timeRange$ || 6E4 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_step$) {
              if($prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getHours() != $date$$13$$.getHours() || $prevDate$$.getMinutes() != $date$$13$$.getMinutes()) {
                $label1$$ = (0,D.$JSCompiler_StaticMethods__formatTime$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$13$$, D.$JSCompiler_alias_FALSE$$)
              }
            }else {
              if($prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getSeconds() != $date$$13$$.getSeconds()) {
                $label1$$ = (0,D.$JSCompiler_StaticMethods__formatTime$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$13$$, D.$JSCompiler_alias_TRUE$$)
              }
            }
            if($isVert$$) {
              if($prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getDate() != $date$$13$$.getDate()) {
                $label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$13$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$)
              }
            }else {
              $prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getYear() != $date$$13$$.getYear() ? $label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$13$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$) : $prevDate$$.getMonth() != $date$$13$$.getMonth() ? $label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$13$$, D.$JSCompiler_alias_TRUE$$, 
              D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$) : $prevDate$$.getDate() != $date$$13$$.getDate() && ($label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$13$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$))
            }
          }
        }
      }
    }
  }
  return[$label1$$, $label2$$]
};
D.$JSCompiler_StaticMethods__formatDate$$ = function $$JSCompiler_StaticMethods__formatDate$$$($JSCompiler_StaticMethods__formatDate$self_dateStr$$, $date$$14_dayStr$$, $showDay$$, $showMonth$$, $showYear$$) {
  var $yearStr$$ = $date$$14_dayStr$$.getFullYear(), $monthStr$$;
  $monthStr$$ = $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$ && 12 <= $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$.length ? $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$[$date$$14_dayStr$$.getMonth()] : $date$$14_dayStr$$.toString().split(" ")[1];
  $date$$14_dayStr$$ = $date$$14_dayStr$$.getDate();
  if($JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$ && 17 < $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$.length) {
    var $dayChar_dmyOrder$$ = $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$[17], $yearStr$$ = $yearStr$$ + $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$[16];
    $date$$14_dayStr$$ += $dayChar_dmyOrder$$
  }
  $dayChar_dmyOrder$$ = "DMY";
  $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$ && 15 < $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$.length && ($dayChar_dmyOrder$$ = $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$[15]);
  $JSCompiler_StaticMethods__formatDate$self_dateStr$$ = "";
  for(var $i$$373$$ = 0;$i$$373$$ < $dayChar_dmyOrder$$.length;$i$$373$$++) {
    $showDay$$ && "D" == $dayChar_dmyOrder$$[$i$$373$$] ? $JSCompiler_StaticMethods__formatDate$self_dateStr$$ += $date$$14_dayStr$$ + " " : $showMonth$$ && "M" == $dayChar_dmyOrder$$[$i$$373$$] ? $JSCompiler_StaticMethods__formatDate$self_dateStr$$ += $monthStr$$ + " " : $showYear$$ && "Y" == $dayChar_dmyOrder$$[$i$$373$$] && ($JSCompiler_StaticMethods__formatDate$self_dateStr$$ += $yearStr$$ + " ")
  }
  return 0 < $JSCompiler_StaticMethods__formatDate$self_dateStr$$.length ? $JSCompiler_StaticMethods__formatDate$self_dateStr$$.slice(0, $JSCompiler_StaticMethods__formatDate$self_dateStr$$.length - 1) : $JSCompiler_StaticMethods__formatDate$self_dateStr$$
};
D.$JSCompiler_StaticMethods__formatTime$$ = function $$JSCompiler_StaticMethods__formatTime$$$($JSCompiler_StaticMethods__formatTime$self_b12HFormat$$, $date$$15_secs$$, $showSecond$$) {
  var $hours_timeLabel$$ = $date$$15_secs$$.getHours(), $mins$$ = $date$$15_secs$$.getMinutes();
  $date$$15_secs$$ = $date$$15_secs$$.getSeconds();
  var $am$$ = "", $pm$$1$$ = "", $ampmBefore$$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$.$_timeAxisResources$ != D.$JSCompiler_alias_NULL$$ && 14 < $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$.$_timeAxisResources$ && ($am$$ = $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$.$_timeAxisResources$[window.DvtTimeAxis.$AM_INDEX$], $pm$$1$$ = $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$.$_timeAxisResources$[window.DvtTimeAxis.$PM_INDEX$], $ampmBefore$$ = "t" == $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$.$_timeAxisResources$[14]);
  $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$ = "" != $am$$ && "" != $pm$$1$$;
  var $ampm$$;
  $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$ && ($ampm$$ = $pm$$1$$, 12 < $hours_timeLabel$$ ? ($hours_timeLabel$$ -= 12, $ampm$$ = $pm$$1$$) : 0 == $hours_timeLabel$$ ? ($ampm$$ = $am$$, $hours_timeLabel$$ = 12) : 12 > $hours_timeLabel$$ && ($ampm$$ = $am$$));
  $hours_timeLabel$$ = (10 > $hours_timeLabel$$ ? "0" + $hours_timeLabel$$ : "" + $hours_timeLabel$$) + ":" + (10 > $mins$$ ? "0" + $mins$$ : "" + $mins$$);
  $showSecond$$ && ($hours_timeLabel$$ += ":" + (10 > $date$$15_secs$$ ? "0" + $date$$15_secs$$ : "" + $date$$15_secs$$));
  return $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$ ? $ampmBefore$$ ? $ampm$$ + " " + $hours_timeLabel$$ : $hours_timeLabel$$ + " " + $ampm$$ : $hours_timeLabel$$
};
D.$DvtTimeAxisInfo$_getLabelPositions$$ = function $$DvtTimeAxisInfo$_getLabelPositions$$$($start$$30_time$$3$$, $end$$18$$, $step$$1$$) {
  var $anchor$$2_times$$ = (new window.Date((new window.Date($start$$30_time$$3$$)).getFullYear(), 0, 1, 0, 0, 0)).getTime();
  $start$$30_time$$3$$ = $anchor$$2_times$$ + window.Math.ceil(($start$$30_time$$3$$ - $anchor$$2_times$$) / $step$$1$$) * $step$$1$$;
  for($anchor$$2_times$$ = [];$start$$30_time$$3$$ <= $end$$18$$;) {
    $anchor$$2_times$$.push($start$$30_time$$3$$), $start$$30_time$$3$$ += $step$$1$$
  }
  return $anchor$$2_times$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimeAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_generateLabels$ = function $$JSCompiler_prototypeAlias$$$$_generateLabels$$($context$$187_labels$$inline_4805_labels$$inline_4816_lastLv1Dims$$inline_4839_overlapping$$inline_4835$$) {
  var $labels1$$ = [], $labels2$$ = [], $coords1$$ = [], $coords2$$ = [], $label1$$1_prevDate$$1_text$$41$$ = D.$JSCompiler_alias_NULL$$, $c1$$1_count$$inline_4812_dims$$inline_4841_minSkip_shortLabelDims$$inline_4808$$ = 0, $c2$$1_container$$29_labelDims$$inline_4817_lastDims$$inline_4834_lastLv1Idx$$inline_4838$$ = 0, $c2$$1_container$$29_labelDims$$inline_4817_lastDims$$inline_4834_lastLv1Idx$$inline_4838$$ = $context$$187_labels$$inline_4805_labels$$inline_4816_lastLv1Dims$$inline_4839_overlapping$$inline_4835$$.$_stage$, 
  $fontSize$$inline_4819_gap$$inline_4820_isRTL$$13_labelDims$$inline_4806_skippedLabels$$inline_4810$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$187_labels$$inline_4805_labels$$inline_4816_lastLv1Dims$$inline_4839_overlapping$$inline_4835$$), $isVert$$1_labels1$$inline_4829$$ = "left" == this.$Position$ || "right" == this.$Position$, $j$$59_labels2$$inline_4830_scrollable$$ = "off" != this.$Options$.zoomAndScroll;
  if($j$$59_labels2$$inline_4830_scrollable$$) {
    var $bOverlaps$$inline_4811_first$$3_isVert$$inline_4818_j$$inline_4809_label$$inline_4837_lastLv2Dims$$inline_4840$$ = D.$JSCompiler_alias_TRUE$$
  }
  var $count$$inline_4821_levelsGap_minSkip$$inline_4807_n$$inline_4813$$ = 0;
  $isVert$$1_labels1$$inline_4829$$ && (0,D.$DvtAgent$isBrowserChrome$$)() && ($count$$inline_4821_levelsGap_minSkip$$inline_4807_n$$inline_4813$$ = 0.2 * (0,window.parseInt)(this.$Options$.tickLabel.style.$getStyle$("font-size")));
  var $pointB1$$inline_4824_times$$1$$ = [], $c1$$1_count$$inline_4812_dims$$inline_4841_minSkip_shortLabelDims$$inline_4808$$ = 0;
  this.$_step$ != D.$JSCompiler_alias_NULL$$ ? $pointB1$$inline_4824_times$$1$$ = (0,D.$DvtTimeAxisInfo$_getLabelPositions$$)(this.$MinValue$, this.$MaxValue$, this.$_step$) : "mixedFrequency" == this.$Options$.timeAxisType ? (this.$_step$ = 316224E5 <= this.$_averageInterval$ ? 316224E5 : 26784E5 <= this.$_averageInterval$ ? 26784E5 : 864E5 <= this.$_averageInterval$ ? 864E5 : 36E5 <= this.$_averageInterval$ ? 36E5 : 6E4 <= this.$_averageInterval$ ? 6E4 : 1E3, $pointB1$$inline_4824_times$$1$$ = 
  (0,D.$DvtTimeAxisInfo$_getLabelPositions$$)(this.$MinValue$, this.$MaxValue$, this.$_step$), $c1$$1_count$$inline_4812_dims$$inline_4841_minSkip_shortLabelDims$$inline_4808$$ = window.Math.floor(this.$_averageInterval$ / this.$_step$) - 1) : ($pointB1$$inline_4824_times$$1$$ = this.$_groups$, this.$_step$ = this.$_averageInterval$);
  for(var $i$$374_pointB2$$inline_4825$$ = 0;$i$$374_pointB2$$inline_4825$$ < $pointB1$$inline_4824_times$$1$$.length;$i$$374_pointB2$$inline_4825$$++) {
    window.time = $pointB1$$inline_4824_times$$1$$[$i$$374_pointB2$$inline_4825$$];
    var $coord$$5_j$$inline_4826$$ = this.$getCoordAt$(window.time);
    if($coord$$5_j$$inline_4826$$ != D.$JSCompiler_alias_NULL$$) {
      var $date$$16$$ = new window.Date(window.time + this.$_timeZoneOffset$), $label2$$1_twoLabels$$1$$ = (0,D.$JSCompiler_StaticMethods__formatAxisLabel$$)(this, $date$$16$$, $label1$$1_prevDate$$1_text$$41$$), $label1$$1_prevDate$$1_text$$41$$ = $label2$$1_twoLabels$$1$$[0], $label2$$1_twoLabels$$1$$ = $label2$$1_twoLabels$$1$$[1];
      $label1$$1_prevDate$$1_text$$41$$ != D.$JSCompiler_alias_NULL$$ ? ($label2$$1_twoLabels$$1$$ != D.$JSCompiler_alias_NULL$$ ? $labels1$$.push(this.$CreateLabel$($context$$187_labels$$inline_4805_labels$$inline_4816_lastLv1Dims$$inline_4839_overlapping$$inline_4835$$, $label1$$1_prevDate$$1_text$$41$$, $coord$$5_j$$inline_4826$$ + $count$$inline_4821_levelsGap_minSkip$$inline_4807_n$$inline_4813$$)) : $labels1$$.push(this.$CreateLabel$($context$$187_labels$$inline_4805_labels$$inline_4816_lastLv1Dims$$inline_4839_overlapping$$inline_4835$$, 
      $label1$$1_prevDate$$1_text$$41$$, $coord$$5_j$$inline_4826$$)), $coords1$$.push($coord$$5_j$$inline_4826$$)) : ($labels1$$.push(D.$JSCompiler_alias_NULL$$), $coords1$$.push(D.$JSCompiler_alias_NULL$$));
      $j$$59_labels2$$inline_4830_scrollable$$ && $bOverlaps$$inline_4811_first$$3_isVert$$inline_4818_j$$inline_4809_label$$inline_4837_lastLv2Dims$$inline_4840$$ && ($coord$$5_j$$inline_4826$$ = this.$MinValue$ ? this.$getCoordAt$(this.$MinValue$) : $coord$$5_j$$inline_4826$$, $bOverlaps$$inline_4811_first$$3_isVert$$inline_4818_j$$inline_4809_label$$inline_4837_lastLv2Dims$$inline_4840$$ = D.$JSCompiler_alias_FALSE$$);
      $label2$$1_twoLabels$$1$$ != D.$JSCompiler_alias_NULL$$ ? ($label1$$1_prevDate$$1_text$$41$$ = D.$JSCompiler_alias_NULL$$, $label1$$1_prevDate$$1_text$$41$$ = $label2$$1_twoLabels$$1$$ != D.$JSCompiler_alias_NULL$$ ? this.$CreateLabel$($context$$187_labels$$inline_4805_labels$$inline_4816_lastLv1Dims$$inline_4839_overlapping$$inline_4835$$, $label2$$1_twoLabels$$1$$, $coord$$5_j$$inline_4826$$ - $count$$inline_4821_levelsGap_minSkip$$inline_4807_n$$inline_4813$$) : this.$CreateLabel$($context$$187_labels$$inline_4805_labels$$inline_4816_lastLv1Dims$$inline_4839_overlapping$$inline_4835$$, 
      $label2$$1_twoLabels$$1$$, $coord$$5_j$$inline_4826$$), $coords2$$.push($coord$$5_j$$inline_4826$$), $isVert$$1_labels1$$inline_4829$$ || ($fontSize$$inline_4819_gap$$inline_4820_isRTL$$13_labelDims$$inline_4806_skippedLabels$$inline_4810$$ ? $label1$$1_prevDate$$1_text$$41$$.$alignRight$() : $label1$$1_prevDate$$1_text$$41$$.$alignLeft$()), $labels2$$.push($label1$$1_prevDate$$1_text$$41$$), this.$_isOneLevel$ = D.$JSCompiler_alias_FALSE$$) : ($labels2$$.push(D.$JSCompiler_alias_NULL$$), $coords2$$.push(D.$JSCompiler_alias_NULL$$));
      $label1$$1_prevDate$$1_text$$41$$ = $date$$16$$
    }
  }
  $context$$187_labels$$inline_4805_labels$$inline_4816_lastLv1Dims$$inline_4839_overlapping$$inline_4835$$ = $labels1$$;
  $fontSize$$inline_4819_gap$$inline_4820_isRTL$$13_labelDims$$inline_4806_skippedLabels$$inline_4810$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($labels1$$, $c2$$1_container$$29_labelDims$$inline_4817_lastDims$$inline_4834_lastLv1Idx$$inline_4838$$);
  $count$$inline_4821_levelsGap_minSkip$$inline_4807_n$$inline_4813$$ = $c1$$1_count$$inline_4812_dims$$inline_4841_minSkip_shortLabelDims$$inline_4808$$;
  $c1$$1_count$$inline_4812_dims$$inline_4841_minSkip_shortLabelDims$$inline_4808$$ = [];
  for($bOverlaps$$inline_4811_first$$3_isVert$$inline_4818_j$$inline_4809_label$$inline_4837_lastLv2Dims$$inline_4840$$ = 0;$bOverlaps$$inline_4811_first$$3_isVert$$inline_4818_j$$inline_4809_label$$inline_4837_lastLv2Dims$$inline_4840$$ < $fontSize$$inline_4819_gap$$inline_4820_isRTL$$13_labelDims$$inline_4806_skippedLabels$$inline_4810$$.length;$bOverlaps$$inline_4811_first$$3_isVert$$inline_4818_j$$inline_4809_label$$inline_4837_lastLv2Dims$$inline_4840$$++) {
    $fontSize$$inline_4819_gap$$inline_4820_isRTL$$13_labelDims$$inline_4806_skippedLabels$$inline_4810$$[$bOverlaps$$inline_4811_first$$3_isVert$$inline_4818_j$$inline_4809_label$$inline_4837_lastLv2Dims$$inline_4840$$] != D.$JSCompiler_alias_NULL$$ && $c1$$1_count$$inline_4812_dims$$inline_4841_minSkip_shortLabelDims$$inline_4808$$.push($fontSize$$inline_4819_gap$$inline_4820_isRTL$$13_labelDims$$inline_4806_skippedLabels$$inline_4810$$[$bOverlaps$$inline_4811_first$$3_isVert$$inline_4818_j$$inline_4809_label$$inline_4837_lastLv2Dims$$inline_4840$$])
  }
  $fontSize$$inline_4819_gap$$inline_4820_isRTL$$13_labelDims$$inline_4806_skippedLabels$$inline_4810$$ = $count$$inline_4821_levelsGap_minSkip$$inline_4807_n$$inline_4813$$;
  for($bOverlaps$$inline_4811_first$$3_isVert$$inline_4818_j$$inline_4809_label$$inline_4837_lastLv2Dims$$inline_4840$$ = (0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $c1$$1_count$$inline_4812_dims$$inline_4841_minSkip_shortLabelDims$$inline_4808$$, $fontSize$$inline_4819_gap$$inline_4820_isRTL$$13_labelDims$$inline_4806_skippedLabels$$inline_4810$$);$bOverlaps$$inline_4811_first$$3_isVert$$inline_4818_j$$inline_4809_label$$inline_4837_lastLv2Dims$$inline_4840$$;) {
    $fontSize$$inline_4819_gap$$inline_4820_isRTL$$13_labelDims$$inline_4806_skippedLabels$$inline_4810$$++, $bOverlaps$$inline_4811_first$$3_isVert$$inline_4818_j$$inline_4809_label$$inline_4837_lastLv2Dims$$inline_4840$$ = (0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $c1$$1_count$$inline_4812_dims$$inline_4841_minSkip_shortLabelDims$$inline_4808$$, $fontSize$$inline_4819_gap$$inline_4820_isRTL$$13_labelDims$$inline_4806_skippedLabels$$inline_4810$$)
  }
  $c1$$1_count$$inline_4812_dims$$inline_4841_minSkip_shortLabelDims$$inline_4808$$ = $c1$$1_count$$inline_4812_dims$$inline_4841_minSkip_shortLabelDims$$inline_4808$$.length;
  if(0 < $fontSize$$inline_4819_gap$$inline_4820_isRTL$$13_labelDims$$inline_4806_skippedLabels$$inline_4810$$) {
    for($bOverlaps$$inline_4811_first$$3_isVert$$inline_4818_j$$inline_4809_label$$inline_4837_lastLv2Dims$$inline_4840$$ = $count$$inline_4821_levelsGap_minSkip$$inline_4807_n$$inline_4813$$ = 0;$bOverlaps$$inline_4811_first$$3_isVert$$inline_4818_j$$inline_4809_label$$inline_4837_lastLv2Dims$$inline_4840$$ < $context$$187_labels$$inline_4805_labels$$inline_4816_lastLv1Dims$$inline_4839_overlapping$$inline_4835$$.length;$bOverlaps$$inline_4811_first$$3_isVert$$inline_4818_j$$inline_4809_label$$inline_4837_lastLv2Dims$$inline_4840$$++) {
      $context$$187_labels$$inline_4805_labels$$inline_4816_lastLv1Dims$$inline_4839_overlapping$$inline_4835$$[$bOverlaps$$inline_4811_first$$3_isVert$$inline_4818_j$$inline_4809_label$$inline_4837_lastLv2Dims$$inline_4840$$] != D.$JSCompiler_alias_NULL$$ && (0 != $count$$inline_4821_levelsGap_minSkip$$inline_4807_n$$inline_4813$$ % ($fontSize$$inline_4819_gap$$inline_4820_isRTL$$13_labelDims$$inline_4806_skippedLabels$$inline_4810$$ + 1) && ($context$$187_labels$$inline_4805_labels$$inline_4816_lastLv1Dims$$inline_4839_overlapping$$inline_4835$$[$bOverlaps$$inline_4811_first$$3_isVert$$inline_4818_j$$inline_4809_label$$inline_4837_lastLv2Dims$$inline_4840$$] = 
      D.$JSCompiler_alias_NULL$$, $c1$$1_count$$inline_4812_dims$$inline_4841_minSkip_shortLabelDims$$inline_4808$$--), $count$$inline_4821_levelsGap_minSkip$$inline_4807_n$$inline_4813$$++)
    }
  }
  $context$$187_labels$$inline_4805_labels$$inline_4816_lastLv1Dims$$inline_4839_overlapping$$inline_4835$$ = $labels2$$;
  $c2$$1_container$$29_labelDims$$inline_4817_lastDims$$inline_4834_lastLv1Idx$$inline_4838$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($labels2$$, $c2$$1_container$$29_labelDims$$inline_4817_lastDims$$inline_4834_lastLv1Idx$$inline_4838$$);
  if(!$c2$$1_container$$29_labelDims$$inline_4817_lastDims$$inline_4834_lastLv1Idx$$inline_4838$$ || 0 >= $c2$$1_container$$29_labelDims$$inline_4817_lastDims$$inline_4834_lastLv1Idx$$inline_4838$$.length) {
    $c2$$1_container$$29_labelDims$$inline_4817_lastDims$$inline_4834_lastLv1Idx$$inline_4838$$ = D.$JSCompiler_alias_FALSE$$
  }else {
    for(var $bOverlaps$$inline_4811_first$$3_isVert$$inline_4818_j$$inline_4809_label$$inline_4837_lastLv2Dims$$inline_4840$$ = "left" == this.$Position$ || "right" == this.$Position$, $fontSize$$inline_4819_gap$$inline_4820_isRTL$$13_labelDims$$inline_4806_skippedLabels$$inline_4810$$ = (0,window.parseInt)(this.$Options$.tickLabel.style.$getStyle$("font-size")), $fontSize$$inline_4819_gap$$inline_4820_isRTL$$13_labelDims$$inline_4806_skippedLabels$$inline_4810$$ = $bOverlaps$$inline_4811_first$$3_isVert$$inline_4818_j$$inline_4809_label$$inline_4837_lastLv2Dims$$inline_4840$$ ? 
    0.1 * $fontSize$$inline_4819_gap$$inline_4820_isRTL$$13_labelDims$$inline_4806_skippedLabels$$inline_4810$$ : 0.3 * $fontSize$$inline_4819_gap$$inline_4820_isRTL$$13_labelDims$$inline_4806_skippedLabels$$inline_4810$$, $count$$inline_4821_levelsGap_minSkip$$inline_4807_n$$inline_4813$$ = 0, $isOverlapping$$inline_4833_pointA1$$inline_4822$$, $i$$inline_4836_pointA2$$inline_4823$$, $coord$$5_j$$inline_4826$$ = 0;$coord$$5_j$$inline_4826$$ < $c2$$1_container$$29_labelDims$$inline_4817_lastDims$$inline_4834_lastLv1Idx$$inline_4838$$.length;$coord$$5_j$$inline_4826$$++) {
      $c2$$1_container$$29_labelDims$$inline_4817_lastDims$$inline_4834_lastLv1Idx$$inline_4838$$[$coord$$5_j$$inline_4826$$] != D.$JSCompiler_alias_NULL$$ && ($bOverlaps$$inline_4811_first$$3_isVert$$inline_4818_j$$inline_4809_label$$inline_4837_lastLv2Dims$$inline_4840$$ ? ($pointB1$$inline_4824_times$$1$$ = $c2$$1_container$$29_labelDims$$inline_4817_lastDims$$inline_4834_lastLv1Idx$$inline_4838$$[$coord$$5_j$$inline_4826$$].y, $i$$374_pointB2$$inline_4825$$ = $c2$$1_container$$29_labelDims$$inline_4817_lastDims$$inline_4834_lastLv1Idx$$inline_4838$$[$coord$$5_j$$inline_4826$$].y + 
      $c2$$1_container$$29_labelDims$$inline_4817_lastDims$$inline_4834_lastLv1Idx$$inline_4838$$[$coord$$5_j$$inline_4826$$].$h$) : ($pointB1$$inline_4824_times$$1$$ = $c2$$1_container$$29_labelDims$$inline_4817_lastDims$$inline_4834_lastLv1Idx$$inline_4838$$[$coord$$5_j$$inline_4826$$].x, $i$$374_pointB2$$inline_4825$$ = $c2$$1_container$$29_labelDims$$inline_4817_lastDims$$inline_4834_lastLv1Idx$$inline_4838$$[$coord$$5_j$$inline_4826$$].x + $c2$$1_container$$29_labelDims$$inline_4817_lastDims$$inline_4834_lastLv1Idx$$inline_4838$$[$coord$$5_j$$inline_4826$$].$w$), 
      $isOverlapping$$inline_4833_pointA1$$inline_4822$$ != D.$JSCompiler_alias_NULL$$ && ($i$$inline_4836_pointA2$$inline_4823$$ != D.$JSCompiler_alias_NULL$$ && ($pointB1$$inline_4824_times$$1$$ >= $isOverlapping$$inline_4833_pointA1$$inline_4822$$ && $pointB1$$inline_4824_times$$1$$ - $fontSize$$inline_4819_gap$$inline_4820_isRTL$$13_labelDims$$inline_4806_skippedLabels$$inline_4810$$ < $i$$inline_4836_pointA2$$inline_4823$$ || $pointB1$$inline_4824_times$$1$$ < $isOverlapping$$inline_4833_pointA1$$inline_4822$$ && 
      $i$$374_pointB2$$inline_4825$$ + $fontSize$$inline_4819_gap$$inline_4820_isRTL$$13_labelDims$$inline_4806_skippedLabels$$inline_4810$$ > $isOverlapping$$inline_4833_pointA1$$inline_4822$$)) && ($context$$187_labels$$inline_4805_labels$$inline_4816_lastLv1Dims$$inline_4839_overlapping$$inline_4835$$[$coord$$5_j$$inline_4826$$] = D.$JSCompiler_alias_NULL$$), $context$$187_labels$$inline_4805_labels$$inline_4816_lastLv1Dims$$inline_4839_overlapping$$inline_4835$$[$coord$$5_j$$inline_4826$$] != 
      D.$JSCompiler_alias_NULL$$ && ($isOverlapping$$inline_4833_pointA1$$inline_4822$$ = $pointB1$$inline_4824_times$$1$$, $i$$inline_4836_pointA2$$inline_4823$$ = $i$$374_pointB2$$inline_4825$$, $count$$inline_4821_levelsGap_minSkip$$inline_4807_n$$inline_4813$$++))
    }
    $c2$$1_container$$29_labelDims$$inline_4817_lastDims$$inline_4834_lastLv1Idx$$inline_4838$$ = $count$$inline_4821_levelsGap_minSkip$$inline_4807_n$$inline_4813$$
  }
  if(!$j$$59_labels2$$inline_4830_scrollable$$ && 1 < $c2$$1_container$$29_labelDims$$inline_4817_lastDims$$inline_4834_lastLv1Idx$$inline_4838$$ && $c1$$1_count$$inline_4812_dims$$inline_4841_minSkip_shortLabelDims$$inline_4808$$ <= 1.5 * $c2$$1_container$$29_labelDims$$inline_4817_lastDims$$inline_4834_lastLv1Idx$$inline_4838$$) {
    $labels1$$ = $labels2$$;
    $labels2$$ = D.$JSCompiler_alias_NULL$$;
    for($j$$59_labels2$$inline_4830_scrollable$$ = 0;$j$$59_labels2$$inline_4830_scrollable$$ < $labels1$$.length;$j$$59_labels2$$inline_4830_scrollable$$++) {
      $labels1$$[$j$$59_labels2$$inline_4830_scrollable$$] != D.$JSCompiler_alias_NULL$$ && $labels1$$[$j$$59_labels2$$inline_4830_scrollable$$].$alignCenter$()
    }
  }
  if($isVert$$1_labels1$$inline_4829$$ && $labels2$$ != D.$JSCompiler_alias_NULL$$) {
    var $isVert$$1_labels1$$inline_4829$$ = $labels1$$, $j$$59_labels2$$inline_4830_scrollable$$ = $labels2$$, $gap$$inline_4832$$ = 0.1 * (0,window.parseInt)(this.$Options$.tickLabel.style.$getStyle$("font-size"));
    $isOverlapping$$inline_4833_pointA1$$inline_4822$$ = function $$isOverlapping$$inline_4833_pointA1$$inline_4822$$$($context$$187_labels$$inline_4805_labels$$inline_4816_lastLv1Dims$$inline_4839_overlapping$$inline_4835$$, $labels1$$) {
      return $labels1$$.y >= $context$$187_labels$$inline_4805_labels$$inline_4816_lastLv1Dims$$inline_4839_overlapping$$inline_4835$$.y && $labels1$$.y - $gap$$inline_4832$$ < $context$$187_labels$$inline_4805_labels$$inline_4816_lastLv1Dims$$inline_4839_overlapping$$inline_4835$$.y + $context$$187_labels$$inline_4805_labels$$inline_4816_lastLv1Dims$$inline_4839_overlapping$$inline_4835$$.$h$ || $labels1$$.y < $context$$187_labels$$inline_4805_labels$$inline_4816_lastLv1Dims$$inline_4839_overlapping$$inline_4835$$.y && 
      $labels1$$.y + $labels1$$.$h$ + $gap$$inline_4832$$ > $context$$187_labels$$inline_4805_labels$$inline_4816_lastLv1Dims$$inline_4839_overlapping$$inline_4835$$.y ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
    };
    $c2$$1_container$$29_labelDims$$inline_4817_lastDims$$inline_4834_lastLv1Idx$$inline_4838$$ = D.$JSCompiler_alias_NULL$$;
    $context$$187_labels$$inline_4805_labels$$inline_4816_lastLv1Dims$$inline_4839_overlapping$$inline_4835$$ = D.$JSCompiler_alias_FALSE$$;
    for($i$$inline_4836_pointA2$$inline_4823$$ = 0;$i$$inline_4836_pointA2$$inline_4823$$ < $isVert$$1_labels1$$inline_4829$$.length;$i$$inline_4836_pointA2$$inline_4823$$++) {
      if($isVert$$1_labels1$$inline_4829$$[$i$$inline_4836_pointA2$$inline_4823$$] && $j$$59_labels2$$inline_4830_scrollable$$[$i$$inline_4836_pointA2$$inline_4823$$]) {
        if($isVert$$1_labels1$$inline_4829$$[$i$$inline_4836_pointA2$$inline_4823$$].$alignTop$(), $j$$59_labels2$$inline_4830_scrollable$$[$i$$inline_4836_pointA2$$inline_4823$$].$alignBottom$(), $c2$$1_container$$29_labelDims$$inline_4817_lastDims$$inline_4834_lastLv1Idx$$inline_4838$$ && $isOverlapping$$inline_4833_pointA1$$inline_4822$$($c2$$1_container$$29_labelDims$$inline_4817_lastDims$$inline_4834_lastLv1Idx$$inline_4838$$, $isVert$$1_labels1$$inline_4829$$[$i$$inline_4836_pointA2$$inline_4823$$].$measureDimensions$())) {
          $context$$187_labels$$inline_4805_labels$$inline_4816_lastLv1Dims$$inline_4839_overlapping$$inline_4835$$ = D.$JSCompiler_alias_TRUE$$;
          break
        }else {
          if($isVert$$1_labels1$$inline_4829$$[$i$$inline_4836_pointA2$$inline_4823$$ + 1] && $isOverlapping$$inline_4833_pointA1$$inline_4822$$($isVert$$1_labels1$$inline_4829$$[$i$$inline_4836_pointA2$$inline_4823$$].$measureDimensions$(), $isVert$$1_labels1$$inline_4829$$[$i$$inline_4836_pointA2$$inline_4823$$ + 1].$measureDimensions$())) {
            $context$$187_labels$$inline_4805_labels$$inline_4816_lastLv1Dims$$inline_4839_overlapping$$inline_4835$$ = D.$JSCompiler_alias_TRUE$$;
            break
          }else {
            $c2$$1_container$$29_labelDims$$inline_4817_lastDims$$inline_4834_lastLv1Idx$$inline_4838$$ = $j$$59_labels2$$inline_4830_scrollable$$[$i$$inline_4836_pointA2$$inline_4823$$].$measureDimensions$()
          }
        }
      }else {
        if($isVert$$1_labels1$$inline_4829$$[$i$$inline_4836_pointA2$$inline_4823$$] || $j$$59_labels2$$inline_4830_scrollable$$[$i$$inline_4836_pointA2$$inline_4823$$]) {
          if($bOverlaps$$inline_4811_first$$3_isVert$$inline_4818_j$$inline_4809_label$$inline_4837_lastLv2Dims$$inline_4840$$ = $isVert$$1_labels1$$inline_4829$$[$i$$inline_4836_pointA2$$inline_4823$$] ? $isVert$$1_labels1$$inline_4829$$[$i$$inline_4836_pointA2$$inline_4823$$] : $j$$59_labels2$$inline_4830_scrollable$$[$i$$inline_4836_pointA2$$inline_4823$$], $c2$$1_container$$29_labelDims$$inline_4817_lastDims$$inline_4834_lastLv1Idx$$inline_4838$$ && $isOverlapping$$inline_4833_pointA1$$inline_4822$$($c2$$1_container$$29_labelDims$$inline_4817_lastDims$$inline_4834_lastLv1Idx$$inline_4838$$, 
          $bOverlaps$$inline_4811_first$$3_isVert$$inline_4818_j$$inline_4809_label$$inline_4837_lastLv2Dims$$inline_4840$$.$measureDimensions$())) {
            $context$$187_labels$$inline_4805_labels$$inline_4816_lastLv1Dims$$inline_4839_overlapping$$inline_4835$$ = D.$JSCompiler_alias_TRUE$$;
            break
          }else {
            $c2$$1_container$$29_labelDims$$inline_4817_lastDims$$inline_4834_lastLv1Idx$$inline_4838$$ = $bOverlaps$$inline_4811_first$$3_isVert$$inline_4818_j$$inline_4809_label$$inline_4837_lastLv2Dims$$inline_4840$$.$measureDimensions$()
          }
        }
      }
    }
    if($context$$187_labels$$inline_4805_labels$$inline_4816_lastLv1Dims$$inline_4839_overlapping$$inline_4835$$) {
      $bOverlaps$$inline_4811_first$$3_isVert$$inline_4818_j$$inline_4809_label$$inline_4837_lastLv2Dims$$inline_4840$$ = $context$$187_labels$$inline_4805_labels$$inline_4816_lastLv1Dims$$inline_4839_overlapping$$inline_4835$$ = $c2$$1_container$$29_labelDims$$inline_4817_lastDims$$inline_4834_lastLv1Idx$$inline_4838$$ = D.$JSCompiler_alias_NULL$$;
      for($i$$inline_4836_pointA2$$inline_4823$$ = 0;$i$$inline_4836_pointA2$$inline_4823$$ < $isVert$$1_labels1$$inline_4829$$.length;$i$$inline_4836_pointA2$$inline_4823$$++) {
        $j$$59_labels2$$inline_4830_scrollable$$[$i$$inline_4836_pointA2$$inline_4823$$] ? ($isVert$$1_labels1$$inline_4829$$[$i$$inline_4836_pointA2$$inline_4823$$] = D.$JSCompiler_alias_NULL$$, $j$$59_labels2$$inline_4830_scrollable$$[$i$$inline_4836_pointA2$$inline_4823$$].$alignMiddle$(), $c1$$1_count$$inline_4812_dims$$inline_4841_minSkip_shortLabelDims$$inline_4808$$ = $j$$59_labels2$$inline_4830_scrollable$$[$i$$inline_4836_pointA2$$inline_4823$$].$measureDimensions$(), $context$$187_labels$$inline_4805_labels$$inline_4816_lastLv1Dims$$inline_4839_overlapping$$inline_4835$$ && 
        $isOverlapping$$inline_4833_pointA1$$inline_4822$$($context$$187_labels$$inline_4805_labels$$inline_4816_lastLv1Dims$$inline_4839_overlapping$$inline_4835$$, $c1$$1_count$$inline_4812_dims$$inline_4841_minSkip_shortLabelDims$$inline_4808$$) && ($isVert$$1_labels1$$inline_4829$$[$c2$$1_container$$29_labelDims$$inline_4817_lastDims$$inline_4834_lastLv1Idx$$inline_4838$$] = D.$JSCompiler_alias_NULL$$), $bOverlaps$$inline_4811_first$$3_isVert$$inline_4818_j$$inline_4809_label$$inline_4837_lastLv2Dims$$inline_4840$$ = 
        $c1$$1_count$$inline_4812_dims$$inline_4841_minSkip_shortLabelDims$$inline_4808$$) : $isVert$$1_labels1$$inline_4829$$[$i$$inline_4836_pointA2$$inline_4823$$] && ($c1$$1_count$$inline_4812_dims$$inline_4841_minSkip_shortLabelDims$$inline_4808$$ = $isVert$$1_labels1$$inline_4829$$[$i$$inline_4836_pointA2$$inline_4823$$].$measureDimensions$(), $bOverlaps$$inline_4811_first$$3_isVert$$inline_4818_j$$inline_4809_label$$inline_4837_lastLv2Dims$$inline_4840$$ && $isOverlapping$$inline_4833_pointA1$$inline_4822$$($bOverlaps$$inline_4811_first$$3_isVert$$inline_4818_j$$inline_4809_label$$inline_4837_lastLv2Dims$$inline_4840$$, 
        $c1$$1_count$$inline_4812_dims$$inline_4841_minSkip_shortLabelDims$$inline_4808$$) ? $isVert$$1_labels1$$inline_4829$$[$i$$inline_4836_pointA2$$inline_4823$$] = D.$JSCompiler_alias_NULL$$ : ($context$$187_labels$$inline_4805_labels$$inline_4816_lastLv1Dims$$inline_4839_overlapping$$inline_4835$$ = $c1$$1_count$$inline_4812_dims$$inline_4841_minSkip_shortLabelDims$$inline_4808$$, $c2$$1_container$$29_labelDims$$inline_4817_lastDims$$inline_4834_lastLv1Idx$$inline_4838$$ = $i$$inline_4836_pointA2$$inline_4823$$))
      }
    }
  }
  this.$_level1Labels$ = $labels1$$;
  this.$_level2Labels$ = $labels2$$;
  this.$_level1Coords$ = $coords1$$;
  this.$_level2Coords$ = $coords2$$
};
D.$JSCompiler_prototypeAlias$$.$getLabels$ = function $$JSCompiler_prototypeAlias$$$$getLabels$$($context$$188$$, $levelIdx$$1$$) {
  if($levelIdx$$1$$ && 1 < $levelIdx$$1$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  this.$_level1Labels$ || this.$_generateLabels$($context$$188$$);
  return 1 == $levelIdx$$1$$ ? this.$_level2Labels$ : this.$_level1Labels$
};
D.$JSCompiler_prototypeAlias$$.$getAxisLine$ = function $$JSCompiler_prototypeAlias$$$$getAxisLine$$($context$$189$$) {
  var $axisLineOptions$$1_axisLineStroke$$1$$ = this.$Options$.axisLine;
  return"on" == $axisLineOptions$$1_axisLineStroke$$1$$.rendered ? ($axisLineOptions$$1_axisLineStroke$$1$$ = new D.$DvtSolidStroke$$($axisLineOptions$$1_axisLineStroke$$1$$.lineColor, 1, $axisLineOptions$$1_axisLineStroke$$1$$.lineWidth), (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$189$$, $axisLineOptions$$1_axisLineStroke$$1$$, 10)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getMajorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMajorGridLines$$($context$$190$$) {
  var $gridlines$$1_majorTickOptions$$1$$ = this.$Options$.majorTick;
  if("on" != $gridlines$$1_majorTickOptions$$1$$.rendered) {
    return[]
  }
  var $coords$$1$$ = [];
  if(this.$_isOneLevel$) {
    for(var $i$$376$$ = 0;$i$$376$$ < this.$_level1Coords$.length;$i$$376$$++) {
      this.$_level1Coords$[$i$$376$$] != D.$JSCompiler_alias_NULL$$ && this.$_level1Labels$[$i$$376$$] != D.$JSCompiler_alias_NULL$$ && $coords$$1$$.push(this.$_level1Coords$[$i$$376$$])
    }
  }else {
    for($i$$376$$ = 0;$i$$376$$ < this.$_level2Coords$.length;$i$$376$$++) {
      this.$_level2Coords$[$i$$376$$] != D.$JSCompiler_alias_NULL$$ && $coords$$1$$.push(this.$_level2Coords$[$i$$376$$])
    }
  }
  var $majorTickStroke$$1$$ = new D.$DvtSolidStroke$$($gridlines$$1_majorTickOptions$$1$$.lineColor, 1, $gridlines$$1_majorTickOptions$$1$$.lineWidth);
  $gridlines$$1_majorTickOptions$$1$$.lineStyle && $majorTickStroke$$1$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($gridlines$$1_majorTickOptions$$1$$.lineStyle));
  $gridlines$$1_majorTickOptions$$1$$ = [];
  for($i$$376$$ = 0;$i$$376$$ < $coords$$1$$.length;$i$$376$$++) {
    $coords$$1$$[$i$$376$$] >= this.$_minCoord$ && $coords$$1$$[$i$$376$$] <= this.$_maxCoord$ && $gridlines$$1_majorTickOptions$$1$$.push((0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$190$$, $majorTickStroke$$1$$, $coords$$1$$[$i$$376$$]))
  }
  return $gridlines$$1_majorTickOptions$$1$$
};
D.$JSCompiler_prototypeAlias$$.$getMinorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMinorGridLines$$($context$$191$$) {
  var $gridlines$$2_minorTickOptions$$ = this.$Options$.minorTick;
  if("on" != $gridlines$$2_minorTickOptions$$.rendered || this.$_isOneLevel$) {
    return[]
  }
  for(var $coords$$2$$ = [], $i$$377$$ = 0;$i$$377$$ < this.$_level1Coords$.length;$i$$377$$++) {
    this.$_level1Coords$[$i$$377$$] != D.$JSCompiler_alias_NULL$$ && this.$_level1Labels$[$i$$377$$] != D.$JSCompiler_alias_NULL$$ && $coords$$2$$.push(this.$_level1Coords$[$i$$377$$])
  }
  var $minorTickStroke$$ = new D.$DvtSolidStroke$$($gridlines$$2_minorTickOptions$$.lineColor, 1, $gridlines$$2_minorTickOptions$$.lineWidth);
  $gridlines$$2_minorTickOptions$$.lineStyle && $minorTickStroke$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($gridlines$$2_minorTickOptions$$.lineStyle));
  $gridlines$$2_minorTickOptions$$ = [];
  for($i$$377$$ = 0;$i$$377$$ < $coords$$2$$.length;$i$$377$$++) {
    $coords$$2$$[$i$$377$$] >= this.$_minCoord$ && $coords$$2$$[$i$$377$$] <= this.$_maxCoord$ && $gridlines$$2_minorTickOptions$$.push((0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$191$$, $minorTickStroke$$, $coords$$2$$[$i$$377$$]))
  }
  return $gridlines$$2_minorTickOptions$$
};
D.$JSCompiler_prototypeAlias$$.$getCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getCoordAt$$($value$$82$$) {
  return $value$$82$$ < this.$MinValue$ || $value$$82$$ > this.$MaxValue$ ? D.$JSCompiler_alias_NULL$$ : this.$getUnboundedCoordAt$($value$$82$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedValueAt$$($coord$$7$$) {
  var $minCoord$$3$$ = window.Math.min(this.$_minCoord$, this.$_maxCoord$), $maxCoord$$3$$ = window.Math.max(this.$_minCoord$, this.$_maxCoord$);
  $coord$$7$$ < $minCoord$$3$$ ? $coord$$7$$ = $minCoord$$3$$ : $coord$$7$$ > $maxCoord$$3$$ && ($coord$$7$$ = $maxCoord$$3$$);
  return this.$getUnboundedValueAt$($coord$$7$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedCoordAt$$($value$$83$$) {
  $value$$83$$ < this.$MinValue$ ? $value$$83$$ = this.$MinValue$ : $value$$83$$ > this.$MaxValue$ && ($value$$83$$ = this.$MaxValue$);
  return this.$getUnboundedCoordAt$($value$$83$$)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedValueAt$$($coord$$8$$) {
  return this.$MinValue$ + ($coord$$8$$ - this.$_minCoord$) / (this.$_maxCoord$ - this.$_minCoord$) * (this.$MaxValue$ - this.$MinValue$)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedCoordAt$$($value$$84$$) {
  return this.$_minCoord$ + ($value$$84$$ - this.$MinValue$) / (this.$MaxValue$ - this.$MinValue$) * (this.$_maxCoord$ - this.$_minCoord$)
};
D.$JSCompiler_prototypeAlias$$.$getGroupWidth$ = function $$JSCompiler_prototypeAlias$$$$getGroupWidth$$() {
  return window.Math.abs(this.$getUnboundedCoordAt$(this.$MinValue$ + this.$_averageInterval$) - this.$getUnboundedCoordAt$(this.$MinValue$))
};
D.$JSCompiler_prototypeAlias$$.$getMinimumExtent$ = (0,D.$JSCompiler_get$$)("$_averageInterval$");
D.$JSCompiler_prototypeAlias$$.$getStartOverflow$ = function $$JSCompiler_prototypeAlias$$$$getStartOverflow$$() {
  return("top" == this.$Position$ || "bottom" == this.$Position$) && (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) ? this.$EndOverflow$ : this.$StartOverflow$
};
D.$JSCompiler_prototypeAlias$$.$getEndOverflow$ = function $$JSCompiler_prototypeAlias$$$$getEndOverflow$$() {
  return("top" == this.$Position$ || "bottom" == this.$Position$) && (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) ? this.$StartOverflow$ : this.$EndOverflow$
};
});