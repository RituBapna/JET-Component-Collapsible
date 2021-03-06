define(['./DvtToolkit', './DvtAxis'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtGauge", D.$DvtGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtGauge$$, D.$DvtBaseComponent$$, "DvtGauge");
D.$DvtGauge$$.prototype.Init = function $$DvtGauge$$$$Init$($context$$428$$, $callback$$119$$, $callbackObj$$82$$, $bStaticRendering$$2$$) {
  D.$DvtGauge$$.$superclass$.Init.call(this, $context$$428$$, $callback$$119$$, $callbackObj$$82$$);
  this.$Bundle$ = new D.$DvtGaugeBundle$$;
  this.$_bStaticRendering$ = $bStaticRendering$$2$$;
  this.$_bStaticRendering$ || (this.$_eventManager$ = this.$CreateEventManager$(), this.$_eventManager$.$addListeners$(this), (0,D.$DvtAgent$isTouchDevice$$)() || (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$_eventManager$, this.$CreateKeyboardHandler$(this.$_eventManager$)), this.setId("gauge1000" + window.Math.floor(1E9 * window.Math.random())), this.$_editingOverlay$ = new D.$DvtRect$$($context$$428$$, 0, 0), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_editingOverlay$), 
  this.$addChild$(this.$_editingOverlay$));
  this.$_bEditing$ = D.$JSCompiler_alias_FALSE$$;
  this.$_oldValue$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtGauge$$.prototype.$SetOptions$ = function $$DvtGauge$$$$$SetOptions$$($options$$237$$) {
  this.$Options$ = $options$$237$$;
  (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")
};
D.$DvtGauge$$.prototype.$render$ = function $$DvtGauge$$$$$render$$($bBlackBoxUpdate$$inline_7154_options$$238_tooltip$$48$$, $container$$147_eventManager$$37_width$$143$$, $ariaId_bParentIsStage_height$$129_oldShapes$$) {
  $bBlackBoxUpdate$$inline_7154_options$$238_tooltip$$48$$ ? this.$SetOptions$($bBlackBoxUpdate$$inline_7154_options$$238_tooltip$$48$$) : this.$Options$ || this.$SetOptions$(D.$JSCompiler_alias_NULL$$);
  this.$Options$.thresholds && (this.$Options$.thresholds = this.$Options$.thresholds.sort(D.$DvtGauge$_thresholdComparator$$));
  !(0,window.isNaN)($container$$147_eventManager$$37_width$$143$$) && !(0,window.isNaN)($ariaId_bParentIsStage_height$$129_oldShapes$$) && (this.$Width$ = $container$$147_eventManager$$37_width$$143$$, this.$Height$ = $ariaId_bParentIsStage_height$$129_oldShapes$$);
  $ariaId_bParentIsStage_height$$129_oldShapes$$ = this.$__shapes$;
  this.$__shapes$ = [];
  $container$$147_eventManager$$37_width$$143$$ = new D.$DvtContainer$$(this.$_context$);
  this.$addChildAt$($container$$147_eventManager$$37_width$$143$$, 0);
  this.$Render$($container$$147_eventManager$$37_width$$143$$, this.$Width$, this.$Height$);
  var $bData$$inline_7150_newObjs$$inline_10721$$ = $bBlackBoxUpdate$$inline_7154_options$$238_tooltip$$48$$ != D.$JSCompiler_alias_NULL$$, $bounds$$inline_7158_newObj$$inline_10725_width$$inline_7152$$ = this.$Width$, $context$$inline_7159_endState$$inline_10727_height$$inline_7153$$ = this.$Height$;
  this.$_animation$ && this.$_animation$.stop();
  $bBlackBoxUpdate$$inline_7154_options$$238_tooltip$$48$$ = D.$JSCompiler_alias_FALSE$$;
  var $animatedObjs$$inline_10723_animationOnDataChange$$inline_7155$$ = this.$_bEditing$ ? "none" : this.$__getOptions$().animationOnDataChange, $animationOnDisplay$$inline_7156_i$$inline_10724$$ = this.$_bEditing$ ? "none" : this.$__getOptions$().animationOnDisplay, $animationDuration$$inline_7157$$ = this.$__getOptions$().animationDuration / 1E3;
  if($animationOnDisplay$$inline_7156_i$$inline_10724$$ || $animatedObjs$$inline_10723_animationOnDataChange$$inline_7155$$) {
    $bounds$$inline_7158_newObj$$inline_10725_width$$inline_7152$$ = new D.$DvtRectangle$$(0, 0, $bounds$$inline_7158_newObj$$inline_10725_width$$inline_7152$$, $context$$inline_7159_endState$$inline_10727_height$$inline_7153$$);
    $context$$inline_7159_endState$$inline_10727_height$$inline_7153$$ = this.$_context$;
    if(!this.$_container$ && "none" !== $animationOnDisplay$$inline_7156_i$$inline_10724$$ && this.$__shapes$[0] != D.$JSCompiler_alias_NULL$$) {
      this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$($context$$inline_7159_endState$$inline_10727_height$$inline_7153$$, $animationOnDisplay$$inline_7156_i$$inline_10724$$, $container$$147_eventManager$$37_width$$143$$, $bounds$$inline_7158_newObj$$inline_10725_width$$inline_7152$$, $animationDuration$$inline_7157$$), this.$_animation$ || (this.$_animation$ = this.$CreateAnimationOnDisplay$(this.$__shapes$, $animationOnDisplay$$inline_7156_i$$inline_10724$$, $animationDuration$$inline_7157$$))
    }else {
      if(this.$_container$ && "none" != $animatedObjs$$inline_10723_animationOnDataChange$$inline_7155$$ && $bData$$inline_7150_newObjs$$inline_10721$$ && this.$__shapes$[0] != D.$JSCompiler_alias_NULL$$) {
        if(this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$($context$$inline_7159_endState$$inline_10727_height$$inline_7153$$, $animatedObjs$$inline_10723_animationOnDataChange$$inline_7155$$, this.$_container$, $container$$147_eventManager$$37_width$$143$$, $bounds$$inline_7158_newObj$$inline_10725_width$$inline_7152$$, $animationDuration$$inline_7157$$)) {
          $bBlackBoxUpdate$$inline_7154_options$$238_tooltip$$48$$ = D.$JSCompiler_alias_TRUE$$
        }else {
          $bData$$inline_7150_newObjs$$inline_10721$$ = this.$__shapes$;
          $animatedObjs$$inline_10723_animationOnDataChange$$inline_7155$$ = [];
          for($animationOnDisplay$$inline_7156_i$$inline_10724$$ = 0;$animationOnDisplay$$inline_7156_i$$inline_10724$$ < $ariaId_bParentIsStage_height$$129_oldShapes$$.length;$animationOnDisplay$$inline_7156_i$$inline_10724$$++) {
            var $bounds$$inline_7158_newObj$$inline_10725_width$$inline_7152$$ = $bData$$inline_7150_newObjs$$inline_10721$$[$animationOnDisplay$$inline_7156_i$$inline_10724$$], $animation$$inline_10728_startState$$inline_10726$$ = $ariaId_bParentIsStage_height$$129_oldShapes$$[$animationOnDisplay$$inline_7156_i$$inline_10724$$].$getAnimationParams$(), $context$$inline_7159_endState$$inline_10727_height$$inline_7153$$ = $bounds$$inline_7158_newObj$$inline_10725_width$$inline_7152$$.$getAnimationParams$();
            $bounds$$inline_7158_newObj$$inline_10725_width$$inline_7152$$.$setAnimationParams$($animation$$inline_10728_startState$$inline_10726$$);
            $animation$$inline_10728_startState$$inline_10726$$ = new D.$DvtCustomAnimation$$(this.$_context$, $bounds$$inline_7158_newObj$$inline_10725_width$$inline_7152$$, $animationDuration$$inline_7157$$);
            (0,D.$JSCompiler_StaticMethods_addProp$$)($animation$$inline_10728_startState$$inline_10726$$.$_animator$, "typeNumberArray", $bounds$$inline_7158_newObj$$inline_10725_width$$inline_7152$$, $bounds$$inline_7158_newObj$$inline_10725_width$$inline_7152$$.$getAnimationParams$, $bounds$$inline_7158_newObj$$inline_10725_width$$inline_7152$$.$setAnimationParams$, $context$$inline_7159_endState$$inline_10727_height$$inline_7153$$);
            $animatedObjs$$inline_10723_animationOnDataChange$$inline_7155$$.push($animation$$inline_10728_startState$$inline_10726$$)
          }
          this.$_animation$ = new D.$DvtParallelPlayable$$(this.$_context$, $animatedObjs$$inline_10723_animationOnDataChange$$inline_7155$$)
        }
      }
    }
    $bBlackBoxUpdate$$inline_7154_options$$238_tooltip$$48$$ || this.removeChild(this.$_container$);
    this.$_animation$ && (this.$_animation$.play(), this.$_animation$.$setOnEnd$(this.$_onAnimationEnd$, this));
    $bBlackBoxUpdate$$inline_7154_options$$238_tooltip$$48$$ && (this.$_oldContainer$ = this.$_container$);
    this.$_container$ = $container$$147_eventManager$$37_width$$143$$
  }
  this.$_editingOverlay$ && this.$Options$.readOnly === D.$JSCompiler_alias_FALSE$$ && (this.$_editingOverlay$.$setWidth$(this.$Width$), this.$_editingOverlay$.$setHeight$(this.$Height$));
  this.$_bStaticRendering$ || ($ariaId_bParentIsStage_height$$129_oldShapes$$ = this.getParent() == this.$_context$.$_stage$, $bBlackBoxUpdate$$inline_7154_options$$238_tooltip$$48$$ = D.$DvtGaugeRenderer$$.$getTooltipString$(this), this.$Options$.readOnly && $ariaId_bParentIsStage_height$$129_oldShapes$$ ? (this.$_context$.$setAriaRole$("img"), (0,D.$JSCompiler_StaticMethods_setAriaLabel$$)(this.$_context$, $bBlackBoxUpdate$$inline_7154_options$$238_tooltip$$48$$)) : ($container$$147_eventManager$$37_width$$143$$.$setAriaRole$("img"), 
  (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($container$$147_eventManager$$37_width$$143$$, "label", $bBlackBoxUpdate$$inline_7154_options$$238_tooltip$$48$$), this.$_renderCount$ = this.$_renderCount$ != D.$JSCompiler_alias_NULL$$ ? this.$_renderCount$ + 1 : 0, $ariaId_bParentIsStage_height$$129_oldShapes$$ = this.getId() + "_" + this.$_renderCount$, $container$$147_eventManager$$37_width$$143$$.setId($ariaId_bParentIsStage_height$$129_oldShapes$$), (0,D.$JSCompiler_StaticMethods_setActiveElement$$)(this.$_context$, 
  $container$$147_eventManager$$37_width$$143$$), ($container$$147_eventManager$$37_width$$143$$ = this.$__getEventManager$()) && $container$$147_eventManager$$37_width$$143$$.$associate$(this.$_editingOverlay$, this.$GetLogicalObject$(), D.$JSCompiler_alias_TRUE$$)))
};
D.$DvtGauge$$.prototype.render = D.$DvtGauge$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.$GetLogicalObject$ = function $$JSCompiler_prototypeAlias$$$$GetLogicalObject$$() {
  var $tooltip$$49$$ = D.$DvtGaugeRenderer$$.$getTooltipString$(this), $color$$62$$ = D.$DvtGaugeStyleUtils$$.$getColor$(this);
  return new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $tooltip$$49$$, $color$$62$$)
};
D.$JSCompiler_prototypeAlias$$.$Render$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$CreateAnimationOnDisplay$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$GetValueAt$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$_onAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onAnimationEnd$$() {
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$ = D.$JSCompiler_alias_NULL$$);
  this.$_animation$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$__getBundle$ = (0,D.$JSCompiler_get$$)("$Bundle$");
D.$JSCompiler_prototypeAlias$$.$__getOptions$ = (0,D.$JSCompiler_get$$)("$Options$");
D.$JSCompiler_prototypeAlias$$.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventManager$");
D.$JSCompiler_prototypeAlias$$.$__processValueChangeStart$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeStart$$($x$$217$$, $y$$190$$) {
  this.$_bEditing$ = D.$JSCompiler_alias_TRUE$$;
  this.$_oldValue$ = this.$Options$.value;
  this.$__processValueChangeMove$($x$$217$$, $y$$190$$)
};
D.$JSCompiler_prototypeAlias$$.$__processValueChangeMove$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeMove$$($x$$218$$, $y$$191$$) {
  this.$Options$.value = D.$DvtGaugeRenderer$$.$adjustForStep$(this.$Options$, this.$GetValueAt$($x$$218$$, $y$$191$$));
  this.$render$();
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$(this.$_oldValue$, this.$Options$.value, D.$JSCompiler_alias_FALSE$$))
};
D.$JSCompiler_prototypeAlias$$.$__processValueChangeEnd$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeEnd$$($x$$219$$, $y$$192$$) {
  this.$__processValueChangeMove$($x$$219$$, $y$$192$$);
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$(this.$_oldValue$, this.$Options$.value, D.$JSCompiler_alias_TRUE$$));
  this.$_bEditing$ = D.$JSCompiler_alias_FALSE$$;
  this.$_oldValue$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$CreateEventManager$ = function $$JSCompiler_prototypeAlias$$$$CreateEventManager$$() {
  return new D.$DvtGaugeEventManager$$(this)
};
D.$DvtGauge$_thresholdComparator$$ = function $$DvtGauge$_thresholdComparator$$$($a$$48$$, $b$$34$$) {
  return $a$$48$$.max && $b$$34$$.max ? $a$$48$$.max - $b$$34$$.max : $a$$48$$.max ? -window.Infinity : window.Infinity
};
D.$DvtGauge$$.prototype.$getAutomation$ = function $$DvtGauge$$$$$getAutomation$$() {
  return new D.$DvtGaugeAutomation$$(this)
};
D.$DvtGauge$$.prototype.getAutomation = D.$DvtGauge$$.prototype.$getAutomation$;
D.$DvtGauge$$.prototype.$CreateKeyboardHandler$ = function $$DvtGauge$$$$$CreateKeyboardHandler$$($manager$$18$$) {
  return new D.$DvtGaugeKeyboardHandler$$($manager$$18$$, this)
};
D.$DvtGaugeAutomation$$ = (0,D.$JSCompiler_set$$)("$_gauge$");
(0,D.$goog$exportSymbol$$)("DvtGaugeAutomation", D.$DvtGaugeAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeAutomation$$, D.$DvtAutomation$$, "DvtGaugeAutomation");
D.$DvtGaugeAutomation$$.prototype.getValue = function $$DvtGaugeAutomation$$$$getValue$() {
  return this.$_gauge$.$__getOptions$().value
};
D.$DvtGaugeAutomation$$.prototype.getValue = D.$DvtGaugeAutomation$$.prototype.getValue;
D.$DvtGaugeAutomation$$.prototype.$getMetricLabel$ = function $$DvtGaugeAutomation$$$$$getMetricLabel$$() {
  return D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$(this.getValue(), this.$_gauge$)
};
D.$DvtGaugeAutomation$$.prototype.getMetricLabel = D.$DvtGaugeAutomation$$.prototype.$getMetricLabel$;
D.$DvtGaugeBundle$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeBundle$$, D.$DvtBundle$$, "DvtGaugeBundle");
D.$DvtGaugeBundle$$._defaults = {EMPTY_TEXT:"No data to display"};
D.$DvtGaugeBundle$$.prototype.$GetDefaultStringForKey$ = function $$DvtGaugeBundle$$$$$GetDefaultStringForKey$$($key$$70$$) {
  return D.$DvtGaugeBundle$$._defaults[$key$$70$$]
};
D.$DvtGaugeBundle$$.prototype.$GetBundlePrefix$ = (0,D.$JSCompiler_returnArg$$)("DvtGaugeBundle");
D.$DvtGaugeDefaults$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtGaugeDefaults");
D.$DvtGaugeDefaults$SKIN_ALTA$$ = {skin:"alta", color:"#393737", metricLabel:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}};
D.$DvtGaugeDefaults$VERSION_1$$ = {skin:"skyros", min:0, max:100, color:"#313842", borderColor:D.$JSCompiler_alias_NULL$$, visualEffects:"auto", emptyText:D.$JSCompiler_alias_NULL$$, animationOnDataChange:"none", animationOnDisplay:"none", animationDuration:500, readOnly:"true", metricLabel:{rendered:"off", scaling:"auto", style:new D.$DvtCSSStyle$$, textType:"number"}, __layout:{outerGap:1, labelGap:3}};
D.$DvtGaugeDefaults$$.prototype.Init = function $$DvtGaugeDefaults$$$$Init$($defaultsMap$$1_ret$$76$$) {
  $defaultsMap$$1_ret$$76$$ = {skyros:D.$DvtJSONUtils$$.$merge$($defaultsMap$$1_ret$$76$$.skyros, D.$DvtGaugeDefaults$VERSION_1$$), alta:D.$DvtJSONUtils$$.$merge$($defaultsMap$$1_ret$$76$$.alta, D.$DvtGaugeDefaults$SKIN_ALTA$$)};
  D.$DvtGaugeDefaults$$.$superclass$.Init.call(this, $defaultsMap$$1_ret$$76$$)
};
D.$DvtGaugeDefaults$isSkyrosSkin$$ = function $$DvtGaugeDefaults$isSkyrosSkin$$$($gauge$$44$$) {
  return"skyros" == $gauge$$44$$.$__getOptions$().skin
};
D.$DvtGaugeDataUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeDataUtils$$, D.$DvtObj$$, "DvtGaugeDataUtils");
D.$DvtGaugeDataUtils$$.$hasData$ = function $$DvtGaugeDataUtils$$$$hasData$$($gauge$$6_options$$79$$) {
  $gauge$$6_options$$79$$ = $gauge$$6_options$$79$$.$__getOptions$();
  return!$gauge$$6_options$$79$$ || (0,window.isNaN)($gauge$$6_options$$79$$.value) || $gauge$$6_options$$79$$.value === D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$ = function $$DvtGaugeDataUtils$$$$getValueThresholdIndex$$($gauge$$7$$, $value$$100$$) {
  var $options$$80_thresholds$$ = $gauge$$7$$.$__getOptions$(), $gaugeValue$$ = $value$$100$$ ? $value$$100$$ : $options$$80_thresholds$$.value, $options$$80_thresholds$$ = $options$$80_thresholds$$.thresholds;
  if(!$options$$80_thresholds$$) {
    return-1
  }
  for(var $i$$397$$ = 0;$i$$397$$ < $options$$80_thresholds$$.length;$i$$397$$++) {
    if($gaugeValue$$ <= $options$$80_thresholds$$[$i$$397$$].max) {
      return $i$$397$$
    }
  }
  return $options$$80_thresholds$$.length - 1
};
D.$DvtGaugeDataUtils$$.$getThreshold$ = function $$DvtGaugeDataUtils$$$$getThreshold$$($gauge$$8$$, $index$$134$$) {
  var $thresholds$$1$$ = $gauge$$8$$.$__getOptions$().thresholds;
  return $thresholds$$1$$ && 0 <= $index$$134$$ && $index$$134$$ < $thresholds$$1$$.length ? $thresholds$$1$$[$index$$134$$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtGaugeDataUtils$$.$getReferenceObject$ = function $$DvtGaugeDataUtils$$$$getReferenceObject$$($gauge$$9$$, $index$$135$$) {
  var $referenceObjects$$ = $gauge$$9$$.$__getOptions$().referenceLines;
  return $referenceObjects$$ && 0 <= $index$$135$$ && $index$$135$$ < $referenceObjects$$.length ? $referenceObjects$$[$index$$135$$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtGaugeEventManager$$ = function $$DvtGaugeEventManager$$$($gauge$$45$$) {
  this.Init($gauge$$45$$.$_context$, $gauge$$45$$.$__dispatchEvent$, $gauge$$45$$);
  this.$_gauge$ = $gauge$$45$$;
  this.$isEditing$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeEventManager$$, D.$DvtEventManager$$, "DvtGaugeEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtGaugeEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($coords$$7_event$$344$$) {
  this.$_gauge$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$ ? (this.$isEditing$ = D.$JSCompiler_alias_TRUE$$, this.$hideTooltip$(), $coords$$7_event$$344$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $coords$$7_event$$344$$.pageX, $coords$$7_event$$344$$.pageY), this.$_gauge$.$__processValueChangeStart$($coords$$7_event$$344$$.x, $coords$$7_event$$344$$.y)) : D.$DvtGaugeEventManager$$.$superclass$.$OnMouseDown$.call(this, $coords$$7_event$$344$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$($coords$$8_event$$345$$) {
  this.$isEditing$ ? (this.$isEditing$ = D.$JSCompiler_alias_FALSE$$, $coords$$8_event$$345$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $coords$$8_event$$345$$.pageX, $coords$$8_event$$345$$.pageY), this.$_gauge$.$__processValueChangeEnd$($coords$$8_event$$345$$.x, $coords$$8_event$$345$$.y)) : D.$DvtGaugeEventManager$$.$superclass$.$OnMouseUp$.call(this, $coords$$8_event$$345$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$346$$) {
  if(this.$isEditing$) {
    var $coords$$9$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$346$$.pageX, $event$$346$$.pageY);
    this.$_gauge$.$__processValueChangeMove$($coords$$9$$.x, $coords$$9$$.y)
  }
  (this.$IsShowingTooltipWhileEditing$() || !this.$isEditing$) && D.$DvtGaugeEventManager$$.$superclass$.$OnMouseMove$.call(this, $event$$346$$)
};
D.$JSCompiler_prototypeAlias$$.$IsShowingTooltipWhileEditing$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$JSCompiler_prototypeAlias$$.$PreEventBubble$ = function $$JSCompiler_prototypeAlias$$$$PreEventBubble$$($event$$347$$) {
  if(D.$DvtTouchEvent$$.$TOUCHSTART$ === $event$$347$$.type && this.$_gauge$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$) {
    this.$isEditing$ = D.$JSCompiler_alias_TRUE$$;
    var $coords$$10$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$347$$.touches[0].pageX, $event$$347$$.touches[0].pageY);
    this.$_gauge$.$__processValueChangeStart$($coords$$10$$.x, $coords$$10$$.y);
    $event$$347$$.preventDefault()
  }else {
    D.$DvtTouchEvent$$.$TOUCHMOVE$ === $event$$347$$.type && this.$isEditing$ ? ($coords$$10$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$347$$.touches[0].pageX, $event$$347$$.touches[0].pageY), this.$_gauge$.$__processValueChangeMove$($coords$$10$$.x, $coords$$10$$.y), $event$$347$$.preventDefault()) : D.$DvtTouchEvent$$.$TOUCHEND$ === $event$$347$$.type && this.$isEditing$ ? (this.$isEditing$ = D.$JSCompiler_alias_FALSE$$, $coords$$10$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, 
    $event$$347$$.changedTouches[0].pageX, $event$$347$$.changedTouches[0].pageY), this.$_gauge$.$__processValueChangeEnd$($coords$$10$$.x, $coords$$10$$.y), $event$$347$$.preventDefault()) : D.$DvtGaugeEventManager$$.$superclass$.$PreEventBubble$.call(this, $event$$347$$)
  }
};
D.$JSCompiler_StaticMethods_GetRelativePosition$$ = function $$JSCompiler_StaticMethods_GetRelativePosition$$$($JSCompiler_StaticMethods_GetRelativePosition$self$$, $pageX$$5_stageCoords$$, $pageY$$5$$) {
  $pageX$$5_stageCoords$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_GetRelativePosition$self$$.$_context$, $pageX$$5_stageCoords$$, $pageY$$5$$);
  return $JSCompiler_StaticMethods_GetRelativePosition$self$$.$_gauge$.$stageToLocal$($pageX$$5_stageCoords$$)
};
D.$DvtGaugeEventManager$$.prototype.$UpdateActiveElement$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtGaugeKeyboardHandler$$ = function $$DvtGaugeKeyboardHandler$$$($manager$$8$$, $gauge$$24$$) {
  this.Init($manager$$8$$, $gauge$$24$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtGaugeKeyboardHandler");
D.$DvtGaugeKeyboardHandler$$.prototype.Init = function $$DvtGaugeKeyboardHandler$$$$Init$($manager$$9$$, $gauge$$25$$) {
  D.$DvtGaugeKeyboardHandler$$.$superclass$.Init.call(this, $manager$$9$$);
  this.$_gauge$ = $gauge$$25$$
};
D.$DvtGaugeKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtGaugeKeyboardHandler$$$$$processKeyDown$$($event$$339$$) {
  var $JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$ = $event$$339$$.keyCode, $isR2L_oldValue$$inline_5031_oldValue$$inline_5034$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_gauge$.$_context$);
  if(38 == $JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$ || $JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$ == ($isR2L_oldValue$$inline_5031_oldValue$$inline_5034$$ ? 37 : 39)) {
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$ = this.$_gauge$, $JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$.$Options$.readOnly || ($isR2L_oldValue$$inline_5031_oldValue$$inline_5034$$ = $JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$.$Options$.value, 
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$.$Options$.value = $JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$.$Options$.step != D.$JSCompiler_alias_NULL$$ ? D.$DvtGaugeRenderer$$.$adjustForStep$($JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$.$Options$, 
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$.$Options$.value + $JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$.$Options$.step) : window.Math.min(window.Math.max($JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$.$Options$.value + ($JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$.$Options$.max - 
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$.$Options$.min) / 100, $JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$.$Options$.min), $JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$.$Options$.max), $JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$.$render$(), 
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$.$__dispatchEvent$(new D.$DvtValueChangeEvent$$($isR2L_oldValue$$inline_5031_oldValue$$inline_5034$$, $JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$.$Options$.value, D.$JSCompiler_alias_TRUE$$))), $event$$339$$.preventDefault()
  }else {
    if(40 == $JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$ || $JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$ == ($isR2L_oldValue$$inline_5031_oldValue$$inline_5034$$ ? 39 : 37)) {
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$ = this.$_gauge$, $JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$.$Options$.readOnly || ($isR2L_oldValue$$inline_5031_oldValue$$inline_5034$$ = $JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$.$Options$.value, 
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$.$Options$.value = $JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$.$Options$.step != D.$JSCompiler_alias_NULL$$ ? D.$DvtGaugeRenderer$$.$adjustForStep$($JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$.$Options$, 
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$.$Options$.value - $JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$.$Options$.step) : window.Math.min(window.Math.max($JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$.$Options$.value - ($JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$.$Options$.max - 
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$.$Options$.min) / 100, $JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$.$Options$.min), $JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$.$Options$.max), $JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$.$render$(), 
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$.$__dispatchEvent$(new D.$DvtValueChangeEvent$$($isR2L_oldValue$$inline_5031_oldValue$$inline_5034$$, $JSCompiler_StaticMethods___decreaseValue$self$$inline_5033_JSCompiler_StaticMethods___increaseValue$self$$inline_5030_keyCode$$21$$.$Options$.value, D.$JSCompiler_alias_TRUE$$))), $event$$339$$.preventDefault()
    }
  }
};
D.$DvtGaugeStyleUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeStyleUtils$$, D.$DvtObj$$, "DvtGaugeStyleUtils");
D.$DvtGaugeStyleUtils$$.$_THRESHOLD_COLOR_RAMP$ = ["#ed6647", "#fad55c", "#68c182"];
D.$DvtGaugeStyleUtils$$.$_SKYROS_THRESHOLD_COLOR_RAMP$ = ["#D62800", "#FFCF21", "#84AE31"];
D.$DvtGaugeStyleUtils$$.$_SKYROS_THRESHOLD_COLOR_RAMP$ = ["#D62800", "#FFCF21", "#84AE31"];
D.$DvtGaugeStyleUtils$$.$_ALTA_CIRCLE$ = {startAngle:202.5, angleExtent:225, anchorX:100, anchorY:103, metricLabelBounds:{x:80, y:86, width:40, height:34}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ALTA_DOME$ = {startAngle:202.5, angleExtent:225, anchorX:100, anchorY:103, metricLabelBounds:{x:83, y:86, width:34, height:34}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ALTA_RECTANGLE$ = {startAngle:202.5, angleExtent:225, anchorX:100, anchorY:103, metricLabelBounds:{x:83, y:86, width:34, height:34}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ANTIQUE_CIRCLE$ = {startAngle:220.5, angleExtent:261.1, anchorX:100, anchorY:100, metricLabelBounds:{x:82, y:133, width:36, height:34}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:61, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ANTIQUE_DOME$ = {startAngle:195.5, angleExtent:210.8, anchorX:100, anchorY:100, metricLabelBounds:{x:84, y:135, width:32, height:35}, indicatorLength:0.98, tickLabelHeight:20, tickLabelWidth:30, radius:63, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ANTIQUE_RECTANGLE$ = {startAngle:207.6, angleExtent:235, anchorX:100, anchorY:95.8, metricLabelBounds:{x:83, y:125, width:34, height:40}, indicatorLength:1.05, tickLabelHeight:20, tickLabelWidth:30, radius:64, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_LIGHT_CIRCLE$ = {startAngle:220.5, angleExtent:261.1, anchorX:100, anchorY:100, metricLabelBounds:{x:80, y:82, width:40, height:40}, indicatorLength:0.82, tickLabelHeight:20, tickLabelWidth:30, radius:58, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_LIGHT_DOME$ = {startAngle:201, angleExtent:222, anchorX:100.2, anchorY:89, metricLabelBounds:{x:80, y:70, width:41, height:39}, indicatorLength:1.23, tickLabelHeight:20, tickLabelWidth:30, radius:56, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_LIGHT_RECTANGLE$ = {startAngle:211, angleExtent:242, anchorX:100, anchorY:91.445, metricLabelBounds:{x:78, y:75, width:44, height:38}, indicatorLength:1.1, tickLabelHeight:20, tickLabelWidth:30, radius:58, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_DARK_CIRCLE$ = {startAngle:220.5, angleExtent:261.5, metricLabelBounds:{x:80, y:82, width:40, height:40}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_DARK_DOME$ = {startAngle:201, angleExtent:222, anchorX:100.2, anchorY:89, metricLabelBounds:{x:80, y:73, width:40, height:36}, indicatorLength:1.23, tickLabelHeight:20, tickLabelWidth:30, radius:56, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_DARK_RECTANGLE$ = {startAngle:201, angleExtent:222, anchorX:100.2, anchorY:99.5, metricLabelBounds:{x:80, y:83, width:41, height:36}, indicatorLength:1.1, tickLabelHeight:20, tickLabelWidth:30, radius:58, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ANTIQUE_INDICATOR$ = {anchorX:42, anchorY:510};
D.$DvtGaugeStyleUtils$$.$_ALTA_INDICATOR$ = {anchorX:187, anchorY:388};
D.$DvtGaugeStyleUtils$$.$_LIGHT_INDICATOR$ = {anchorX:227, anchorY:425};
D.$DvtGaugeStyleUtils$$.$_DARK_INDICATOR$ = {anchorX:227, anchorY:425};
D.$DvtGaugeStyleUtils$$.$getColor$ = function $$DvtGaugeStyleUtils$$$$getColor$$($gauge$$2$$) {
  var $options$$76$$ = $gauge$$2$$.$__getOptions$(), $thresholdIndex$$1$$ = D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$2$$), $threshold$$6$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$2$$, $thresholdIndex$$1$$);
  return $threshold$$6$$ && (!($gauge$$2$$ instanceof D.$DvtStatusMeterGauge$$) || $gauge$$2$$ instanceof D.$DvtStatusMeterGauge$$ && "onIndicator" == $options$$76$$.thresholdDisplay) ? D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$2$$, $threshold$$6$$, $thresholdIndex$$1$$) : $options$$76$$.color
};
D.$DvtGaugeStyleUtils$$.$getBorderColor$ = function $$DvtGaugeStyleUtils$$$$getBorderColor$$($gauge$$3$$) {
  var $options$$77$$ = $gauge$$3$$.$__getOptions$(), $threshold$$7$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$3$$, D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$3$$));
  return $threshold$$7$$ && $threshold$$7$$.borderColor && (!($gauge$$3$$ instanceof D.$DvtStatusMeterGauge$$) || $gauge$$3$$ instanceof D.$DvtStatusMeterGauge$$ && "onIndicator" == $options$$77$$.thresholdDisplay) ? $threshold$$7$$.borderColor : $options$$77$$.borderColor
};
D.$DvtGaugeStyleUtils$$.$getPlotAreaColor$ = function $$DvtGaugeStyleUtils$$$$getPlotAreaColor$$($gauge$$4$$) {
  var $options$$78$$ = $gauge$$4$$.$__getOptions$(), $thresholdIndex$$3$$ = D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$4$$), $threshold$$8$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$4$$, $thresholdIndex$$3$$);
  return $threshold$$8$$ && (!($gauge$$4$$ instanceof D.$DvtStatusMeterGauge$$) || $gauge$$4$$ instanceof D.$DvtStatusMeterGauge$$ && "onIndicator" != $options$$78$$.thresholdDisplay) ? D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$4$$, $threshold$$8$$, $thresholdIndex$$3$$) : $options$$78$$.plotArea.color
};
D.$DvtGaugeStyleUtils$$.$getThresholdColor$ = function $$DvtGaugeStyleUtils$$$$getThresholdColor$$($gauge$$5$$, $threshold$$9$$, $thresholdIndex$$4$$) {
  if($threshold$$9$$.color) {
    return $threshold$$9$$.color
  }
  if($thresholdIndex$$4$$ < D.$DvtGaugeStyleUtils$$.$_THRESHOLD_COLOR_RAMP$.length) {
    return(0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$5$$) ? D.$DvtGaugeStyleUtils$$.$_SKYROS_THRESHOLD_COLOR_RAMP$[$thresholdIndex$$4$$] : D.$DvtGaugeStyleUtils$$.$_THRESHOLD_COLOR_RAMP$[$thresholdIndex$$4$$]
  }
};
D.$DvtGaugeStyleUtils$$.$getDialBackground$ = function $$DvtGaugeStyleUtils$$$$getDialBackground$$($backgroundType$$) {
  return"rectangleAlta" === $backgroundType$$ ? D.$DvtGaugeStyleUtils$$.$_ALTA_RECTANGLE$ : "domeAlta" === $backgroundType$$ ? D.$DvtGaugeStyleUtils$$.$_ALTA_DOME$ : "circleAntique" === $backgroundType$$ ? D.$DvtGaugeStyleUtils$$.$_ANTIQUE_CIRCLE$ : "rectangleAntique" === $backgroundType$$ ? D.$DvtGaugeStyleUtils$$.$_ANTIQUE_RECTANGLE$ : "domeAntique" === $backgroundType$$ ? D.$DvtGaugeStyleUtils$$.$_ANTIQUE_DOME$ : "circleLight" === $backgroundType$$ ? D.$DvtGaugeStyleUtils$$.$_LIGHT_CIRCLE$ : "rectangleLight" === 
  $backgroundType$$ ? D.$DvtGaugeStyleUtils$$.$_LIGHT_RECTANGLE$ : "domeLight" === $backgroundType$$ ? D.$DvtGaugeStyleUtils$$.$_LIGHT_DOME$ : "circleDark" === $backgroundType$$ ? D.$DvtGaugeStyleUtils$$.$_DARK_CIRCLE$ : "rectangleDark" === $backgroundType$$ ? D.$DvtGaugeStyleUtils$$.$_DARK_RECTANGLE$ : "domeDark" === $backgroundType$$ ? D.$DvtGaugeStyleUtils$$.$_DARK_DOME$ : D.$DvtGaugeStyleUtils$$.$_ALTA_CIRCLE$
};
D.$DvtGaugeStyleUtils$$.$getDialIndicator$ = function $$DvtGaugeStyleUtils$$$$getDialIndicator$$($indicatorType$$) {
  return"needleAntique" === $indicatorType$$ ? D.$DvtGaugeStyleUtils$$.$_ANTIQUE_INDICATOR$ : "needleLight" === $indicatorType$$ ? D.$DvtGaugeStyleUtils$$.$_LIGHT_INDICATOR$ : "needleDark" === $indicatorType$$ ? D.$DvtGaugeStyleUtils$$.$_DARK_INDICATOR$ : D.$DvtGaugeStyleUtils$$.$_ALTA_INDICATOR$
};
D.$DvtGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeRenderer$$, D.$DvtObj$$, "DvtGaugeRenderer");
D.$DvtGaugeRenderer$$.$_EMPTY_TEXT_GAP_WIDTH$ = 2;
D.$DvtGaugeRenderer$$.$_EMPTY_TEXT_GAP_HEIGHT$ = 1;
D.$DvtGaugeRenderer$$.$renderEmptyText$ = function $$DvtGaugeRenderer$$$$renderEmptyText$$($gauge$$26$$, $container$$46$$, $availSpace$$24_label$$46$$) {
  var $options$$86$$ = $gauge$$26$$.$__getOptions$(), $emptyTextStr$$ = $options$$86$$.emptyText;
  $emptyTextStr$$ || ($emptyTextStr$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($gauge$$26$$.$__getBundle$(), "EMPTY_TEXT", D.$JSCompiler_alias_NULL$$));
  var $width$$86$$ = $availSpace$$24_label$$46$$.$w$ - 2 * D.$DvtGaugeRenderer$$.$_EMPTY_TEXT_GAP_WIDTH$, $height$$74$$ = $availSpace$$24_label$$46$$.$h$ - 2 * D.$DvtGaugeRenderer$$.$_EMPTY_TEXT_GAP_HEIGHT$;
  $availSpace$$24_label$$46$$ = new D.$DvtOutputText$$($gauge$$26$$.$_context$, $emptyTextStr$$, $availSpace$$24_label$$46$$.x + $availSpace$$24_label$$46$$.$w$ / 2, $availSpace$$24_label$$46$$.y + $availSpace$$24_label$$46$$.$h$ / 2);
  $options$$86$$.metricLabel.style.$getStyle$("font-size") || $options$$86$$.metricLabel.style.$setStyle$("font-size", "13px");
  $availSpace$$24_label$$46$$.$setCSSStyle$($options$$86$$.metricLabel.style);
  $availSpace$$24_label$$46$$.$alignCenter$();
  $availSpace$$24_label$$46$$.$alignMiddle$();
  D.$DvtTextUtils$$.$fitText$($availSpace$$24_label$$46$$, $width$$86$$, $height$$74$$, $container$$46$$) && $availSpace$$24_label$$46$$.$isTruncated$() && $gauge$$26$$.$__getEventManager$().$associate$($availSpace$$24_label$$46$$, new D.$DvtSimpleObjPeer$$($emptyTextStr$$))
};
D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$ = function $$DvtGaugeRenderer$$$$getFormattedMetricLabel$$($value$$102$$, $gauge$$27$$) {
  var $options$$87$$ = $gauge$$27$$.$__getOptions$(), $isPercent$$ = "percent" == $options$$87$$.metricLabel.textType;
  $isPercent$$ && ($value$$102$$ = 100 * D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$87$$, $options$$87$$.min, $value$$102$$));
  var $converter$$2$$ = D.$JSCompiler_alias_NULL$$;
  "on" == $options$$87$$.metricLabel.rendered && $options$$87$$.metricLabel.converter && ($converter$$2$$ = $options$$87$$.metricLabel.converter);
  var $scaling$$ = D.$JSCompiler_alias_NULL$$;
  "on" == $options$$87$$.metricLabel.rendered && $options$$87$$.metricLabel.scaling && ($scaling$$ = $options$$87$$.metricLabel.scaling);
  return D.$DvtGaugeRenderer$$.$_formatLabelValue$($value$$102$$, $gauge$$27$$, $converter$$2$$, $scaling$$, $options$$87$$.metricLabel.autoPrecision ? $options$$87$$.metricLabel.autoPrecision : "on", $isPercent$$)
};
D.$DvtGaugeRenderer$$.$formatTickLabelValue$ = function $$DvtGaugeRenderer$$$$formatTickLabelValue$$($value$$103$$, $gauge$$28$$) {
  var $options$$88$$ = $gauge$$28$$.$__getOptions$(), $isPercent$$1$$ = "percent" == $options$$88$$.tickLabel.textType;
  $isPercent$$1$$ && ($value$$103$$ = 100 * D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$88$$, $options$$88$$.min, $value$$103$$));
  var $converter$$3$$ = D.$JSCompiler_alias_NULL$$;
  "on" == $options$$88$$.tickLabel.rendered && $options$$88$$.tickLabel.converter && ($converter$$3$$ = $options$$88$$.tickLabel.converter);
  var $scaling$$1$$ = D.$JSCompiler_alias_NULL$$;
  "on" == $options$$88$$.tickLabel.rendered && $options$$88$$.tickLabel.scaling && ($scaling$$1$$ = $options$$88$$.tickLabel.scaling);
  return D.$DvtGaugeRenderer$$.$_formatLabelValue$($value$$103$$, $gauge$$28$$, $converter$$3$$, $scaling$$1$$, $options$$88$$.tickLabel.autoPrecision ? $options$$88$$.tickLabel.autoPrecision : "on", $isPercent$$1$$)
};
D.$DvtGaugeRenderer$$.$_formatLabelValue$ = function $$DvtGaugeRenderer$$$$_formatLabelValue$$($value$$104$$, $gauge$$29_minValue$$8_output$$, $converter$$4$$, $formatter_scaling$$2$$, $autoPrecision$$6$$, $isPercent$$2$$) {
  var $maxValue$$9_options$$89$$ = $gauge$$29_minValue$$8_output$$.$__getOptions$();
  $gauge$$29_minValue$$8_output$$ = $value$$104$$;
  $gauge$$29_minValue$$8_output$$ = $maxValue$$9_options$$89$$.min;
  var $maxValue$$9_options$$89$$ = $maxValue$$9_options$$89$$.max, $difference$$ = $maxValue$$9_options$$89$$ - $gauge$$29_minValue$$8_output$$, $increment$$ = D.$JSCompiler_alias_NULL$$;
  (0,window.isNaN)($difference$$) || ($increment$$ = $difference$$ / (1E3 > $difference$$ ? 100 : 1E3));
  $formatter_scaling$$2$$ = new D.$DvtLinearScaleAxisValueFormatter$$($gauge$$29_minValue$$8_output$$, $maxValue$$9_options$$89$$, $increment$$, $formatter_scaling$$2$$, $autoPrecision$$6$$);
  if($converter$$4$$ && $converter$$4$$.getAsString) {
    $gauge$$29_minValue$$8_output$$ = $formatter_scaling$$2$$.$format$($value$$104$$, $converter$$4$$)
  }else {
    if($converter$$4$$ && $converter$$4$$.format) {
      return $formatter_scaling$$2$$.$format$($value$$104$$, $converter$$4$$)
    }
    $gauge$$29_minValue$$8_output$$ = $formatter_scaling$$2$$.$format$($value$$104$$)
  }
  return $isPercent$$2$$ ? (0,window.String)($gauge$$29_minValue$$8_output$$) + "%" : $gauge$$29_minValue$$8_output$$
};
D.$DvtGaugeRenderer$$.$getFillPercentage$ = function $$DvtGaugeRenderer$$$$getFillPercentage$$($options$$90_percentFill$$, $min$$3$$, $value$$105$$) {
  $options$$90_percentFill$$ = ($value$$105$$ - $min$$3$$) / ($options$$90_percentFill$$.max - $options$$90_percentFill$$.min);
  return $options$$90_percentFill$$ = window.Math.min(window.Math.max(0, $options$$90_percentFill$$), 1)
};
D.$DvtGaugeRenderer$$.$getTooltipString$ = function $$DvtGaugeRenderer$$$$getTooltipString$$($gauge$$30$$) {
  var $options$$91$$ = $gauge$$30$$.$__getOptions$(), $threshold$$10$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$30$$, D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$30$$));
  return $threshold$$10$$ && $threshold$$10$$.shortDesc != D.$JSCompiler_alias_NULL$$ ? $threshold$$10$$.shortDesc : $options$$91$$.shortDesc != D.$JSCompiler_alias_NULL$$ ? $options$$91$$.shortDesc : D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$91$$.value, $gauge$$30$$)
};
D.$DvtGaugeRenderer$$.$renderLabel$ = function $$DvtGaugeRenderer$$$$renderLabel$$($gauge$$31_label$$47$$, $container$$47$$, $bounds$$65$$, $color$$26$$) {
  var $i$$402_options$$92$$ = $gauge$$31_label$$47$$.$__getOptions$();
  if("on" == $i$$402_options$$92$$.metricLabel.rendered) {
    var $labelString$$4$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($i$$402_options$$92$$.value, $gauge$$31_label$$47$$), $labelWidth$$2$$ = $bounds$$65$$.$w$, $labelHeight$$1$$ = $bounds$$65$$.$h$;
    $gauge$$31_label$$47$$ = new D.$DvtOutputText$$($gauge$$31_label$$47$$.$_context$, $labelString$$4$$, $bounds$$65$$.x + $bounds$$65$$.$w$ / 2, $bounds$$65$$.y + $bounds$$65$$.$h$ / 2);
    $gauge$$31_label$$47$$.$setCSSStyle$($i$$402_options$$92$$.metricLabel.style);
    var $longestLabel$$2_size$$22$$ = $i$$402_options$$92$$.metricLabel.style.$getStyle$("font-size");
    if(!$i$$402_options$$92$$.metricLabel.style.$getStyle$("font-size")) {
      var $longestLabel$$2_size$$22$$ = window.Math.max($i$$402_options$$92$$.max.toString().length, $i$$402_options$$92$$.min.toString().length, $labelString$$4$$.length), $maxString$$2$$ = "";
      "percent" == $i$$402_options$$92$$.metricLabel.textType && ($longestLabel$$2_size$$22$$ = window.Math.max(3, $labelString$$4$$.length), $maxString$$2$$ += "%");
      for($i$$402_options$$92$$ = 0;$i$$402_options$$92$$ < $longestLabel$$2_size$$22$$;$i$$402_options$$92$$++) {
        $maxString$$2$$ += "0"
      }
      $gauge$$31_label$$47$$.$setTextString$($maxString$$2$$);
      $longestLabel$$2_size$$22$$ = $gauge$$31_label$$47$$.$getOptimalFontSize$($bounds$$65$$);
      $gauge$$31_label$$47$$.$setTextString$($labelString$$4$$);
      $gauge$$31_label$$47$$.$setFontSize$($longestLabel$$2_size$$22$$)
    }
    $gauge$$31_label$$47$$.$alignMiddle$();
    $gauge$$31_label$$47$$.$alignCenter$();
    $color$$26$$ != D.$JSCompiler_alias_NULL$$ && $gauge$$31_label$$47$$.$setSolidFill$($color$$26$$);
    D.$DvtTextUtils$$.$fitText$($gauge$$31_label$$47$$, $labelWidth$$2$$, $labelHeight$$1$$, $container$$47$$) && $gauge$$31_label$$47$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$)
  }
};
D.$DvtGaugeRenderer$$.$adjustForStep$ = function $$DvtGaugeRenderer$$$$adjustForStep$$($options$$93$$, $value$$106$$) {
  var $step$$2$$ = (0,window.Number)($options$$93$$.step);
  if($step$$2$$ && 0 < $step$$2$$) {
    var $stepNum$$ = ($value$$106$$ - $options$$93$$.min) / $step$$2$$;
    return 0.5 < $stepNum$$ ? window.Math.max(window.Math.min($options$$93$$.max, window.Math.round($stepNum$$) * $step$$2$$ + $options$$93$$.min), $options$$93$$.min) : $options$$93$$.min
  }
  return $value$$106$$
};
D.$DvtLedGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtLedGauge", D.$DvtLedGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtLedGauge$$, D.$DvtGauge$$, "DvtLedGauge");
D.$DvtLedGauge$newInstance$$ = function $$DvtLedGauge$newInstance$$$($context$$426$$, $callback$$117$$, $callbackObj$$80$$, $bStaticRendering$$) {
  var $gauge$$56$$ = new D.$DvtLedGauge$$;
  $gauge$$56$$.Init($context$$426$$, $callback$$117$$, $callbackObj$$80$$, $bStaticRendering$$);
  return $gauge$$56$$
};
D.$DvtLedGauge$$.newInstance = D.$DvtLedGauge$newInstance$$;
D.$DvtLedGauge$$.prototype.Init = function $$DvtLedGauge$$$$Init$($context$$427$$, $callback$$118$$, $callbackObj$$81$$, $bStaticRendering$$1$$) {
  D.$DvtLedGauge$$.$superclass$.Init.call(this, $context$$427$$, $callback$$118$$, $callbackObj$$81$$, $bStaticRendering$$1$$);
  this.$Defaults$ = new D.$DvtLedGaugeDefaults$$
};
D.$DvtLedGauge$$.prototype.$SetOptions$ = function $$DvtLedGauge$$$$$SetOptions$$($options$$236$$) {
  D.$DvtLedGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$236$$));
  "auto" == this.$Options$.animationOnDisplay && (this.$Options$.animationOnDisplay = "zoom");
  "auto" == this.$Options$.animationOnDataChange && (this.$Options$.animationOnDataChange = "alphaFade");
  this.$Options$.readOnly = D.$JSCompiler_alias_TRUE$$
};
D.$DvtLedGauge$$.prototype.$Render$ = function $$DvtLedGauge$$$$$Render$$($container$$146$$, $width$$142$$, $height$$128$$) {
  D.$DvtLedGaugeRenderer$$.$render$(this, $container$$146$$, $width$$142$$, $height$$128$$)
};
D.$DvtLedGaugeDefaults$$ = function $$DvtLedGaugeDefaults$$$() {
  this.Init({skyros:D.$DvtLedGaugeDefaults$VERSION_1$$, alta:{}})
};
D.$DvtObj$$.$createSubclass$(D.$DvtLedGaugeDefaults$$, D.$DvtGaugeDefaults$$, "DvtLedGaugeDefaults");
D.$DvtLedGaugeDefaults$VERSION_1$$ = {type:"circle"};
D.$DvtLedGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtLedGaugeRenderer$$, D.$DvtObj$$, "DvtLedGaugeRenderer");
D.$DvtLedGaugeRenderer$$.$__RECTANGLE_CORNER_RADIUS$ = 1 / 6;
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_CMDS$ = "M-42,36.6Q-50,36.6,-46.54,28.6L-4,-43.07Q0,-50,4,-43.07L46.54,28.6Q50,36.6,42,36.6Z";
D.$DvtLedGaugeRenderer$$.$_SHAPE_TRIANGLE_CMDS$ = [-50, 36.6, 0, -50, 50, 36.6];
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_INNER_CMDS$ = [-50, 36.6, 0, -50, 50, 36.6];
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_STAR_CMDS$ = [-13.05, -12.94, -50, -11.13, -21.06, 11.9, -30.74, 47.6, 0.1, 27.18, 31.06, 47.44, 21.17, 11.79, 50, -11.39, 13.05, -13.01, -0.06, -47.59];
D.$DvtLedGaugeRenderer$$.$_SHAPE_STAR_CMDS$ = [-50, -11.22, -16.69, -17.94, 0, -47.55, 16.69, -17.94, 50, -11.22, 26.69, 13.8, 30.9, 47.56, 0, 33.42, -30.9, 47.56, -26.69, 13.8];
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_CMDS$ = "M0,45L21,45Q24.414,44.414,25,41L25,10L42,10Q48.5,9.1,45,4L2,-38Q0,-39,-2,-38L-45,4Q-48.5,9.1,-42,10L-25,10L-25,41Q-24.414,44.414,-21,45Z";
D.$DvtLedGaugeRenderer$$.$_SHAPE_ARROW_CMDS$ = [25, 48, 25, 8, 47.5, 8, 0, -39, -47.5, 8, -25, 8, -25, 48];
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_INNER_CMDS$ = [25, 48, 25, 8, 47.5, 8, 0, -39, -47.5, 8, -25, 8, -25, 48];
D.$DvtLedGaugeRenderer$$.$render$ = function $$DvtLedGaugeRenderer$$$$render$$($gauge$$32$$, $container$$48$$, $bounds$$66_width$$87$$, $height$$75_labelColor$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($gauge$$32$$)) {
    var $options$$94$$ = $gauge$$32$$.$__getOptions$(), $outerGap$$1$$ = $options$$94$$.__layout.outerGap, $size$$23$$ = $options$$94$$ && (0 <= $options$$94$$.size || 1 > $options$$94$$.size) ? window.Math.sqrt($options$$94$$.size) : 1;
    $bounds$$66_width$$87$$ = new D.$DvtRectangle$$($outerGap$$1$$ + ($bounds$$66_width$$87$$ - 2 * $outerGap$$1$$) * (1 - $size$$23$$) / 2, $outerGap$$1$$ + ($height$$75_labelColor$$ - 2 * $outerGap$$1$$) * (1 - $size$$23$$) / 2, ($bounds$$66_width$$87$$ - 2 * $outerGap$$1$$) * $size$$23$$, ($height$$75_labelColor$$ - 2 * $outerGap$$1$$) * $size$$23$$);
    D.$DvtLedGaugeRenderer$$.$_renderShape$($gauge$$32$$, $container$$48$$, $bounds$$66_width$$87$$);
    D.$DvtLedGaugeRenderer$$.$_renderVisualEffects$($gauge$$32$$, $container$$48$$, $bounds$$66_width$$87$$);
    "on" == $options$$94$$.metricLabel.rendered && (D.$DvtAgent$_highContrast$$ !== D.$JSCompiler_alias_TRUE$$ && $options$$94$$.metricLabel.style.$getStyle$("color") != D.$JSCompiler_alias_NULL$$ ? D.$DvtGaugeRenderer$$.$renderLabel$($gauge$$32$$, $container$$48$$, D.$DvtLedGaugeRenderer$$.$_getLabelBounds$($gauge$$32$$, $bounds$$66_width$$87$$), D.$JSCompiler_alias_NULL$$) : ($height$$75_labelColor$$ = D.$DvtColorUtils$$.$getContrastingTextColor$(D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$32$$)), 
    $options$$94$$.metricLabel.style.$setStyle$("color", $height$$75_labelColor$$), D.$DvtGaugeRenderer$$.$renderLabel$($gauge$$32$$, $container$$48$$, D.$DvtLedGaugeRenderer$$.$_getLabelBounds$($gauge$$32$$, $bounds$$66_width$$87$$), $height$$75_labelColor$$)))
  }else {
    D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$32$$, $container$$48$$, new D.$DvtRectangle$$(0, 0, $bounds$$66_width$$87$$, $height$$75_labelColor$$))
  }
};
D.$DvtLedGaugeRenderer$$.$_renderShape$ = function $$DvtLedGaugeRenderer$$$$_renderShape$$($gauge$$33$$, $container$$49$$, $bounds$$67$$) {
  var $context$$228_shape$$18$$ = $gauge$$33$$.$_context$, $options$$95$$ = $gauge$$33$$.$__getOptions$(), $type$$94$$ = $options$$95$$.type, $color$$27$$ = D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$33$$), $borderColor$$18_eventManager$$14$$ = D.$DvtGaugeStyleUtils$$.$getBorderColor$($gauge$$33$$), $arColors$$5_cx$$12_tooltip$$22$$ = $bounds$$67$$.x + $bounds$$67$$.$w$ / 2, $cy$$12_rotation$$3$$ = $bounds$$67$$.y + $bounds$$67$$.$h$ / 2, $r$$24$$ = window.Math.min($bounds$$67$$.$w$, $bounds$$67$$.$h$) / 
  2, $isSkyros$$ = (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$33$$), $cmds$$2$$, $scale$$49$$ = window.Math.min($bounds$$67$$.$w$ / 100, $bounds$$67$$.$h$ / 100);
  "rectangle" == $type$$94$$ ? $context$$228_shape$$18$$ = new D.$DvtRect$$($context$$228_shape$$18$$, $bounds$$67$$.x, $bounds$$67$$.y, $bounds$$67$$.$w$, $bounds$$67$$.$h$) : "diamond" == $type$$94$$ ? $context$$228_shape$$18$$ = new D.$DvtPolygon$$($context$$228_shape$$18$$, [$arColors$$5_cx$$12_tooltip$$22$$ - $r$$24$$, $cy$$12_rotation$$3$$, $arColors$$5_cx$$12_tooltip$$22$$, $cy$$12_rotation$$3$$ - $r$$24$$, $arColors$$5_cx$$12_tooltip$$22$$ + $r$$24$$, $cy$$12_rotation$$3$$, $arColors$$5_cx$$12_tooltip$$22$$, 
  $cy$$12_rotation$$3$$ + $r$$24$$]) : "star" == $type$$94$$ || "triangle" == $type$$94$$ || "arrow" == $type$$94$$ ? ("star" == $type$$94$$ ? $cmds$$2$$ = $isSkyros$$ ? D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_STAR_CMDS$ : D.$DvtLedGaugeRenderer$$.$_SHAPE_STAR_CMDS$ : "triangle" == $type$$94$$ ? $cmds$$2$$ = $isSkyros$$ ? D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_CMDS$ : D.$DvtLedGaugeRenderer$$.$_SHAPE_TRIANGLE_CMDS$ : "arrow" == $type$$94$$ && ($cmds$$2$$ = $isSkyros$$ ? D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_CMDS$ : 
  D.$DvtLedGaugeRenderer$$.$_SHAPE_ARROW_CMDS$), $isSkyros$$ && "triangle" == $type$$94$$ || $isSkyros$$ && "arrow" == $type$$94$$ ? ($cmds$$2$$ = window.DvtPathUtils.$transformPath$($cmds$$2$$, $bounds$$67$$.x + $bounds$$67$$.$w$ / 2, $bounds$$67$$.y + $bounds$$67$$.$h$ / 2, $scale$$49$$, $scale$$49$$), $context$$228_shape$$18$$ = new D.$DvtPath$$($context$$228_shape$$18$$, $cmds$$2$$)) : ($cmds$$2$$ = D.$DvtPolygonUtils$$.scale($cmds$$2$$, $scale$$49$$, $scale$$49$$), $cmds$$2$$ = D.$DvtPolygonUtils$$.translate($cmds$$2$$, 
  $bounds$$67$$.x + $bounds$$67$$.$w$ / 2, $bounds$$67$$.y + $bounds$$67$$.$h$ / 2), $context$$228_shape$$18$$ = new D.$DvtPolygon$$($context$$228_shape$$18$$, $cmds$$2$$))) : $context$$228_shape$$18$$ = new D.$DvtCircle$$($context$$228_shape$$18$$, $arColors$$5_cx$$12_tooltip$$22$$, $cy$$12_rotation$$3$$, $r$$24$$);
  $isSkyros$$ || "none" == $options$$95$$.visualEffects ? $context$$228_shape$$18$$.$setSolidFill$($color$$27$$) : ($arColors$$5_cx$$12_tooltip$$22$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$27$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$27$$, -0.04, -0.05)], $cy$$12_rotation$$3$$ = $options$$95$$ && 0 == $options$$95$$.rotation % 90 ? $options$$95$$.rotation : 0, $context$$228_shape$$18$$.$setFill$(new D.$DvtLinearGradientFill$$("arrow" == $type$$94$$ || "star" == $type$$94$$ || "triangle" == 
  $type$$94$$ ? $cy$$12_rotation$$3$$ - 90 : 270, $arColors$$5_cx$$12_tooltip$$22$$, [1, 1], [0, 1])));
  $borderColor$$18_eventManager$$14$$ && $context$$228_shape$$18$$.$setSolidStroke$($borderColor$$18_eventManager$$14$$);
  $borderColor$$18_eventManager$$14$$ = $gauge$$33$$.$__getEventManager$();
  ($arColors$$5_cx$$12_tooltip$$22$$ = D.$DvtGaugeRenderer$$.$getTooltipString$($gauge$$33$$)) && $borderColor$$18_eventManager$$14$$ && $borderColor$$18_eventManager$$14$$.$associate$($context$$228_shape$$18$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $arColors$$5_cx$$12_tooltip$$22$$, $color$$27$$));
  $cy$$12_rotation$$3$$ = $isSkyros$$ ? $options$$95$$.rotation + 90 : $options$$95$$.rotation;
  if(0 != $cy$$12_rotation$$3$$ && ("arrow" == $type$$94$$ || "triangle" == $type$$94$$)) {
    $context$$228_shape$$18$$ = D.$DvtLedGaugeRenderer$$.$_rotate$($gauge$$33$$, $container$$49$$, $context$$228_shape$$18$$, $bounds$$67$$)
  }
  $container$$49$$.$addChild$($context$$228_shape$$18$$)
};
D.$DvtLedGaugeRenderer$$.$_rotate$ = function $$DvtLedGaugeRenderer$$$$_rotate$$($gauge$$34_translateGroup$$, $container$$50_groupDims_matrix$$7_rotation$$4$$, $shape$$19_tx$$18$$, $bounds$$68_ty$$18$$) {
  var $options$$96_rotationMatrix$$ = $gauge$$34_translateGroup$$.$__getOptions$();
  $gauge$$34_translateGroup$$ = new D.$DvtContainer$$($gauge$$34_translateGroup$$.$_context$);
  $container$$50_groupDims_matrix$$7_rotation$$4$$.$addChild$($gauge$$34_translateGroup$$);
  $gauge$$34_translateGroup$$.$addChild$($shape$$19_tx$$18$$);
  $container$$50_groupDims_matrix$$7_rotation$$4$$ = $options$$96_rotationMatrix$$ && 0 == $options$$96_rotationMatrix$$.rotation % 90 ? $options$$96_rotationMatrix$$.rotation : 0;
  $options$$96_rotationMatrix$$ = new D.$DvtMatrix$$;
  $options$$96_rotationMatrix$$.rotate(window.Math.PI * $container$$50_groupDims_matrix$$7_rotation$$4$$ / 180);
  $shape$$19_tx$$18$$.$setMatrix$($options$$96_rotationMatrix$$);
  $container$$50_groupDims_matrix$$7_rotation$$4$$ = $gauge$$34_translateGroup$$.$getDimensions$();
  $shape$$19_tx$$18$$ = $bounds$$68_ty$$18$$.x + $bounds$$68_ty$$18$$.$w$ / 2 - ($container$$50_groupDims_matrix$$7_rotation$$4$$.x + $container$$50_groupDims_matrix$$7_rotation$$4$$.$w$ / 2);
  $bounds$$68_ty$$18$$ = $bounds$$68_ty$$18$$.y + $bounds$$68_ty$$18$$.$h$ / 2 - ($container$$50_groupDims_matrix$$7_rotation$$4$$.y + $container$$50_groupDims_matrix$$7_rotation$$4$$.$h$ / 2);
  $container$$50_groupDims_matrix$$7_rotation$$4$$ = new D.$DvtMatrix$$;
  $container$$50_groupDims_matrix$$7_rotation$$4$$.translate($shape$$19_tx$$18$$, $bounds$$68_ty$$18$$);
  $gauge$$34_translateGroup$$.$setMatrix$($container$$50_groupDims_matrix$$7_rotation$$4$$);
  return $gauge$$34_translateGroup$$
};
D.$DvtLedGaugeRenderer$$.$_renderVisualEffects$ = function $$DvtLedGaugeRenderer$$$$_renderVisualEffects$$($gauge$$35$$, $container$$51$$, $bounds$$69$$) {
  var $options$$97$$ = $gauge$$35$$.$__getOptions$(), $type$$95$$ = $options$$97$$.type;
  "none" != $options$$97$$.visualEffects && (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$35$$) && ("rectangle" == $type$$95$$ ? D.$DvtLedGaugeRenderer$$.$_renderOverlayRectangle$($gauge$$35$$, $container$$51$$, $bounds$$69$$) : "diamond" == $type$$95$$ ? D.$DvtLedGaugeRenderer$$.$_renderOverlayDiamond$($gauge$$35$$, $container$$51$$, $bounds$$69$$) : "triangle" == $type$$95$$ ? D.$DvtLedGaugeRenderer$$.$_renderOverlayTriangle$($gauge$$35$$, $container$$51$$, $bounds$$69$$) : "star" == $type$$95$$ ? 
  D.$DvtLedGaugeRenderer$$.$_renderOverlayStar$($gauge$$35$$, $container$$51$$) : "arrow" == $type$$95$$ ? D.$DvtLedGaugeRenderer$$.$_renderOverlayArrow$($gauge$$35$$, $container$$51$$, $bounds$$69$$) : D.$DvtLedGaugeRenderer$$.$_renderOverlayCircle$($gauge$$35$$, $container$$51$$, $bounds$$69$$))
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayRectangle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayRectangle$$($gauge$$36_overlay$$7$$, $container$$52_gradient$$1$$, $bounds$$70_overlayBounds$$1$$) {
  var $dx$$15$$ = 0.05 * $bounds$$70_overlayBounds$$1$$.$w$, $dy$$15$$ = 0.05 * $bounds$$70_overlayBounds$$1$$.$h$;
  $bounds$$70_overlayBounds$$1$$ = new D.$DvtRectangle$$($bounds$$70_overlayBounds$$1$$.x + $dx$$15$$, $bounds$$70_overlayBounds$$1$$.y + $dy$$15$$, $bounds$$70_overlayBounds$$1$$.$w$ - 2 * $dx$$15$$, $bounds$$70_overlayBounds$$1$$.$h$ - 2 * $dy$$15$$);
  $gauge$$36_overlay$$7$$ = new D.$DvtRect$$($gauge$$36_overlay$$7$$.$_context$, $bounds$$70_overlayBounds$$1$$.x, $bounds$$70_overlayBounds$$1$$.y, $bounds$$70_overlayBounds$$1$$.$w$, $bounds$$70_overlayBounds$$1$$.$h$);
  $gauge$$36_overlay$$7$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$52_gradient$$1$$.$addChild$($gauge$$36_overlay$$7$$);
  $container$$52_gradient$$1$$ = new D.$DvtLinearGradientFill$$(270, "#FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF".split(" "), [0.75, 0.5, 0.15, 0, 0.2, 0.4, 0.2], [0, 0.05, 0.4, 0.6, 0.8, 0.9, 1]);
  $gauge$$36_overlay$$7$$.$setFill$($container$$52_gradient$$1$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayDiamond$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayDiamond$$($gauge$$37_overlay$$8$$, $container$$53_gradient$$2$$, $bounds$$71_cx$$13$$) {
  var $cy$$13_dx$$16$$ = 0.05 * $bounds$$71_cx$$13$$.$w$, $dy$$16_overlayBounds$$2_r$$25$$ = 0.05 * $bounds$$71_cx$$13$$.$h$, $dy$$16_overlayBounds$$2_r$$25$$ = new D.$DvtRectangle$$($bounds$$71_cx$$13$$.x + $cy$$13_dx$$16$$, $bounds$$71_cx$$13$$.y + $dy$$16_overlayBounds$$2_r$$25$$, $bounds$$71_cx$$13$$.$w$ - 2 * $cy$$13_dx$$16$$, $bounds$$71_cx$$13$$.$h$ - 2 * $dy$$16_overlayBounds$$2_r$$25$$);
  $bounds$$71_cx$$13$$ = $dy$$16_overlayBounds$$2_r$$25$$.x + $dy$$16_overlayBounds$$2_r$$25$$.$w$ / 2;
  $cy$$13_dx$$16$$ = $dy$$16_overlayBounds$$2_r$$25$$.y + $dy$$16_overlayBounds$$2_r$$25$$.$h$ / 2;
  $dy$$16_overlayBounds$$2_r$$25$$ = window.Math.min($dy$$16_overlayBounds$$2_r$$25$$.$w$, $dy$$16_overlayBounds$$2_r$$25$$.$h$) / 2;
  $gauge$$37_overlay$$8$$ = new D.$DvtPolygon$$($gauge$$37_overlay$$8$$.$_context$, [$bounds$$71_cx$$13$$ - $dy$$16_overlayBounds$$2_r$$25$$, $cy$$13_dx$$16$$, $bounds$$71_cx$$13$$, $cy$$13_dx$$16$$ - $dy$$16_overlayBounds$$2_r$$25$$, $bounds$$71_cx$$13$$ + $dy$$16_overlayBounds$$2_r$$25$$, $cy$$13_dx$$16$$, $bounds$$71_cx$$13$$, $cy$$13_dx$$16$$ + $dy$$16_overlayBounds$$2_r$$25$$]);
  $gauge$$37_overlay$$8$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$53_gradient$$2$$.$addChild$($gauge$$37_overlay$$8$$);
  $container$$53_gradient$$2$$ = new D.$DvtLinearGradientFill$$(270, "#FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF".split(" "), [0.75, 0.5, 0.15, 0, 0.2, 0.4, 0.2], [0, 0.05, 0.4, 0.6, 0.8, 0.9, 1]);
  $gauge$$37_overlay$$8$$.$setFill$($container$$53_gradient$$2$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayTriangle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayTriangle$$($gauge$$38$$, $container$$54$$, $bounds$$72_overlay$$9$$) {
  var $dx$$17_overlayBounds$$3$$ = 0.05 * $bounds$$72_overlay$$9$$.$w$, $cmds$$3_dy$$17_options$$98_rotation$$5$$ = 0.05 * $bounds$$72_overlay$$9$$.$h$, $gradient$$3_isSkyros$$1$$ = (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$38$$), $dx$$17_overlayBounds$$3$$ = new D.$DvtRectangle$$($bounds$$72_overlay$$9$$.x + $dx$$17_overlayBounds$$3$$, $bounds$$72_overlay$$9$$.y + $cmds$$3_dy$$17_options$$98_rotation$$5$$, $bounds$$72_overlay$$9$$.$w$ - 2 * $dx$$17_overlayBounds$$3$$, $bounds$$72_overlay$$9$$.$h$ - 
  2 * $cmds$$3_dy$$17_options$$98_rotation$$5$$), $cmds$$3_dy$$17_options$$98_rotation$$5$$ = D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_INNER_CMDS$, $scale$$50$$ = window.Math.min($dx$$17_overlayBounds$$3$$.$w$ / 100, $dx$$17_overlayBounds$$3$$.$h$ / 100), $cmds$$3_dy$$17_options$$98_rotation$$5$$ = D.$DvtPolygonUtils$$.scale($cmds$$3_dy$$17_options$$98_rotation$$5$$, $scale$$50$$, $scale$$50$$), $cmds$$3_dy$$17_options$$98_rotation$$5$$ = D.$DvtPolygonUtils$$.translate($cmds$$3_dy$$17_options$$98_rotation$$5$$, 
  $bounds$$72_overlay$$9$$.x + $bounds$$72_overlay$$9$$.$w$ / 2, $bounds$$72_overlay$$9$$.y + $bounds$$72_overlay$$9$$.$h$ / 2);
  $bounds$$72_overlay$$9$$ = new D.$DvtPolygon$$($gauge$$38$$.$_context$, $cmds$$3_dy$$17_options$$98_rotation$$5$$);
  $cmds$$3_dy$$17_options$$98_rotation$$5$$ = ($cmds$$3_dy$$17_options$$98_rotation$$5$$ = $gauge$$38$$.$__getOptions$()) && 0 == $cmds$$3_dy$$17_options$$98_rotation$$5$$.rotation % 90 ? $cmds$$3_dy$$17_options$$98_rotation$$5$$.rotation : 0;
  $gradient$$3_isSkyros$$1$$ = new D.$DvtLinearGradientFill$$($gradient$$3_isSkyros$$1$$ ? $cmds$$3_dy$$17_options$$98_rotation$$5$$ - 90 : 360 - $cmds$$3_dy$$17_options$$98_rotation$$5$$, ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"], [0.3, 0.55, 0, 0.25, 0.1], [0, 0.05, 0.4, 0.9, 1]);
  $bounds$$72_overlay$$9$$.$setFill$($gradient$$3_isSkyros$$1$$);
  $bounds$$72_overlay$$9$$ = D.$DvtLedGaugeRenderer$$.$_rotate$($gauge$$38$$, $container$$54$$, $bounds$$72_overlay$$9$$, $dx$$17_overlayBounds$$3$$);
  $bounds$$72_overlay$$9$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$54$$.$addChild$($bounds$$72_overlay$$9$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayArrow$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayArrow$$($gauge$$39$$, $container$$55$$, $bounds$$73_overlay$$10$$) {
  var $dx$$18_overlayBounds$$4$$ = 0.05 * $bounds$$73_overlay$$10$$.$w$, $cmds$$4_dy$$18_options$$99_rotation$$6$$ = 0.05 * $bounds$$73_overlay$$10$$.$h$, $gradient$$4_isSkyros$$2$$ = (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$39$$), $dx$$18_overlayBounds$$4$$ = new D.$DvtRectangle$$($bounds$$73_overlay$$10$$.x + $dx$$18_overlayBounds$$4$$, $bounds$$73_overlay$$10$$.y + $cmds$$4_dy$$18_options$$99_rotation$$6$$, $bounds$$73_overlay$$10$$.$w$ - 2 * $dx$$18_overlayBounds$$4$$, $bounds$$73_overlay$$10$$.$h$ - 
  2 * $cmds$$4_dy$$18_options$$99_rotation$$6$$), $cmds$$4_dy$$18_options$$99_rotation$$6$$ = D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_INNER_CMDS$, $scale$$51$$ = window.Math.min($dx$$18_overlayBounds$$4$$.$w$ / 100, $dx$$18_overlayBounds$$4$$.$h$ / 100), $cmds$$4_dy$$18_options$$99_rotation$$6$$ = D.$DvtPolygonUtils$$.scale($cmds$$4_dy$$18_options$$99_rotation$$6$$, $scale$$51$$, $scale$$51$$), $cmds$$4_dy$$18_options$$99_rotation$$6$$ = D.$DvtPolygonUtils$$.translate($cmds$$4_dy$$18_options$$99_rotation$$6$$, 
  $bounds$$73_overlay$$10$$.x + $bounds$$73_overlay$$10$$.$w$ / 2, $bounds$$73_overlay$$10$$.y + $bounds$$73_overlay$$10$$.$h$ / 2);
  $bounds$$73_overlay$$10$$ = new D.$DvtPolygon$$($gauge$$39$$.$_context$, $cmds$$4_dy$$18_options$$99_rotation$$6$$);
  $cmds$$4_dy$$18_options$$99_rotation$$6$$ = ($cmds$$4_dy$$18_options$$99_rotation$$6$$ = $gauge$$39$$.$__getOptions$()) && 0 == $cmds$$4_dy$$18_options$$99_rotation$$6$$.rotation % 90 ? $cmds$$4_dy$$18_options$$99_rotation$$6$$.rotation : 0;
  $gradient$$4_isSkyros$$2$$ = new D.$DvtLinearGradientFill$$($gradient$$4_isSkyros$$2$$ ? $cmds$$4_dy$$18_options$$99_rotation$$6$$ - 90 : 360 - $cmds$$4_dy$$18_options$$99_rotation$$6$$, ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"], [0.3, 0.55, 0, 0.25, 0.1], [0, 0.05, 0.4, 0.9, 1]);
  $bounds$$73_overlay$$10$$.$setFill$($gradient$$4_isSkyros$$2$$);
  $bounds$$73_overlay$$10$$ = D.$DvtLedGaugeRenderer$$.$_rotate$($gauge$$39$$, $container$$55$$, $bounds$$73_overlay$$10$$, $dx$$18_overlayBounds$$4$$);
  $bounds$$73_overlay$$10$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$55$$.$addChild$($bounds$$73_overlay$$10$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayStar$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayStar$$($gauge$$40$$, $container$$56$$) {
  var $overlay$$11$$ = new D.$DvtPath$$($gauge$$40$$.$_context$, D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_STAR_CMDS$), $gradient$$5_gradientRotation$$3_options$$100$$ = $gauge$$40$$.$__getOptions$(), $gradient$$5_gradientRotation$$3_options$$100$$ = 360 - ($gradient$$5_gradientRotation$$3_options$$100$$ && 0 == $gradient$$5_gradientRotation$$3_options$$100$$.rotation % 90 ? $gradient$$5_gradientRotation$$3_options$$100$$.rotation : 0), $arColors$$10_color$$28$$ = D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$40$$), 
  $arColors$$10_color$$28$$ = [D.$DvtColorUtils$$.$getDarker$($arColors$$10_color$$28$$, 0.9), $arColors$$10_color$$28$$, D.$DvtColorUtils$$.$getBrighter$($arColors$$10_color$$28$$)], $gradient$$5_gradientRotation$$3_options$$100$$ = new D.$DvtLinearGradientFill$$($gradient$$5_gradientRotation$$3_options$$100$$, $arColors$$10_color$$28$$, [1, 1, 1], [0.1, 0.4, 0.8]);
  $overlay$$11$$.$setFill$($gradient$$5_gradientRotation$$3_options$$100$$);
  $overlay$$11$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$56$$.$addChild$($overlay$$11$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayCircle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayCircle$$($gauge$$41_highlight$$, $container$$57_highlightGradient$$, $bounds$$75_gradientBounds$$) {
  var $cx$$14_dx$$20$$ = 0.05 * $bounds$$75_gradientBounds$$.$w$, $cy$$14_dy$$20$$ = 0.05 * $bounds$$75_gradientBounds$$.$h$;
  $bounds$$75_gradientBounds$$ = new D.$DvtRectangle$$($bounds$$75_gradientBounds$$.x + $cx$$14_dx$$20$$, $bounds$$75_gradientBounds$$.y + $cy$$14_dy$$20$$, $bounds$$75_gradientBounds$$.$w$ - 2 * $cx$$14_dx$$20$$, $bounds$$75_gradientBounds$$.$h$ - 2 * $cy$$14_dy$$20$$);
  var $cx$$14_dx$$20$$ = $bounds$$75_gradientBounds$$.x + $bounds$$75_gradientBounds$$.$w$ / 2, $cy$$14_dy$$20$$ = $bounds$$75_gradientBounds$$.y + $bounds$$75_gradientBounds$$.$h$ / 2, $radius$$16_ry$$10$$ = window.Math.min($bounds$$75_gradientBounds$$.$w$, $bounds$$75_gradientBounds$$.$h$) / 2, $overlay$$12_rx$$14$$ = new D.$DvtCircle$$($gauge$$41_highlight$$.$_context$, $cx$$14_dx$$20$$, $cy$$14_dy$$20$$, $radius$$16_ry$$10$$);
  $overlay$$12_rx$$14$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$57_highlightGradient$$.$addChild$($overlay$$12_rx$$14$$);
  var $gradient$$6$$ = new D.$DvtRadialGradientFill$$(["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0, 0.25, 0.5], [0.15, 0.7, 0.95], $cx$$14_dx$$20$$, $cy$$14_dy$$20$$ - 0.6 * $radius$$16_ry$$10$$, 1.5 * $radius$$16_ry$$10$$, [$bounds$$75_gradientBounds$$.x, $bounds$$75_gradientBounds$$.y, $bounds$$75_gradientBounds$$.$w$, $bounds$$75_gradientBounds$$.$h$]);
  $overlay$$12_rx$$14$$.$setFill$($gradient$$6$$);
  $overlay$$12_rx$$14$$ = 0.6 * $radius$$16_ry$$10$$;
  $radius$$16_ry$$10$$ *= 0.4;
  $cy$$14_dy$$20$$ -= 0.3 * $radius$$16_ry$$10$$;
  $gauge$$41_highlight$$ = new D.$DvtOval$$($gauge$$41_highlight$$.$_context$, $cx$$14_dx$$20$$, $cy$$14_dy$$20$$ - $radius$$16_ry$$10$$, $overlay$$12_rx$$14$$, $radius$$16_ry$$10$$);
  $gauge$$41_highlight$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$57_highlightGradient$$.$addChild$($gauge$$41_highlight$$);
  $container$$57_highlightGradient$$ = new D.$DvtRadialGradientFill$$(["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0, 0.2, 0.5], [0.6, 0.8, 1], $cx$$14_dx$$20$$, $cy$$14_dy$$20$$, $overlay$$12_rx$$14$$, [$bounds$$75_gradientBounds$$.x, $bounds$$75_gradientBounds$$.y, $bounds$$75_gradientBounds$$.$w$, $bounds$$75_gradientBounds$$.$h$]);
  $gauge$$41_highlight$$.$setFill$($container$$57_highlightGradient$$)
};
D.$DvtLedGaugeRenderer$$.$_getLabelBounds$ = function $$DvtLedGaugeRenderer$$$$_getLabelBounds$$($gauge$$42$$, $bounds$$76$$) {
  var $options$$101_rotation$$8$$ = $gauge$$42$$.$__getOptions$(), $type$$96$$ = $options$$101_rotation$$8$$.type, $options$$101_rotation$$8$$ = 0 == $options$$101_rotation$$8$$.rotation % 90 ? $options$$101_rotation$$8$$.rotation : 0, $minDim$$1$$ = window.Math.min($bounds$$76$$.$w$, $bounds$$76$$.$h$), $newX$$6$$ = $bounds$$76$$.x + $bounds$$76$$.$w$ / 2 - $minDim$$1$$ / 2, $newY$$7$$ = $bounds$$76$$.y + $bounds$$76$$.$h$ / 2 - $minDim$$1$$ / 2, $newWidth$$2$$ = $minDim$$1$$, $newHeight$$2$$ = 
  $minDim$$1$$;
  "triangle" == $type$$96$$ ? 0 == $options$$101_rotation$$8$$ ? ($newX$$6$$ += 0.2 * $minDim$$1$$, $newY$$7$$ += 0.25 * $minDim$$1$$, $newWidth$$2$$ -= 0.4 * $minDim$$1$$, $newHeight$$2$$ -= 0.3 * $minDim$$1$$) : 90 == $options$$101_rotation$$8$$ ? ($newX$$6$$ += 0.05 * $minDim$$1$$, $newY$$7$$ += 0.2 * $minDim$$1$$, $newWidth$$2$$ -= 0.3 * $minDim$$1$$, $newHeight$$2$$ -= 0.4 * $minDim$$1$$) : 180 == $options$$101_rotation$$8$$ ? ($newX$$6$$ += 0.2 * $minDim$$1$$, $newY$$7$$ += 0.05 * $minDim$$1$$, 
  $newWidth$$2$$ -= 0.4 * $minDim$$1$$, $newHeight$$2$$ -= 0.3 * $minDim$$1$$) : 270 == $options$$101_rotation$$8$$ && ($newX$$6$$ += 0.25 * $minDim$$1$$, $newY$$7$$ += 0.2 * $minDim$$1$$, $newWidth$$2$$ -= 0.3 * $minDim$$1$$, $newHeight$$2$$ -= 0.4 * $minDim$$1$$) : "arrow" == $type$$96$$ ? 0 == $options$$101_rotation$$8$$ ? ($newX$$6$$ += 0.2 * $minDim$$1$$, $newY$$7$$ += 0.2 * $minDim$$1$$, $newWidth$$2$$ -= 0.4 * $minDim$$1$$, $newHeight$$2$$ -= 0.4 * $minDim$$1$$) : 90 == $options$$101_rotation$$8$$ ? 
  ($newX$$6$$ += 0.05 * $minDim$$1$$, $newY$$7$$ += 0.2 * $minDim$$1$$, $newWidth$$2$$ -= 0.28 * $minDim$$1$$, $newHeight$$2$$ -= 0.4 * $minDim$$1$$) : 180 == $options$$101_rotation$$8$$ ? ($newX$$6$$ += 0.2 * $minDim$$1$$, $newY$$7$$ += 0.2 * $minDim$$1$$, $newWidth$$2$$ -= 0.4 * $minDim$$1$$, $newHeight$$2$$ -= 0.4 * $minDim$$1$$) : 270 == $options$$101_rotation$$8$$ && ($newX$$6$$ += 0.23 * $minDim$$1$$, $newY$$7$$ += 0.2 * $minDim$$1$$, $newWidth$$2$$ -= 0.28 * $minDim$$1$$, $newHeight$$2$$ -= 
  0.4 * $minDim$$1$$) : "star" == $type$$96$$ ? ($newX$$6$$ += 0.25 * $minDim$$1$$, $newY$$7$$ += 0.25 * $minDim$$1$$, $newWidth$$2$$ -= 0.5 * $minDim$$1$$, $newHeight$$2$$ -= 0.4 * $minDim$$1$$) : "diamond" == $type$$96$$ ? ($newX$$6$$ += 0.15 * $minDim$$1$$, $newY$$7$$ += 0.15 * $minDim$$1$$, $newWidth$$2$$ -= 0.3 * $minDim$$1$$, $newHeight$$2$$ -= 0.3 * $minDim$$1$$) : "rectangle" == $type$$96$$ ? ($newX$$6$$ += 0.1 * $minDim$$1$$, $newY$$7$$ += 0.1 * $minDim$$1$$, $newWidth$$2$$ -= 0.2 * $minDim$$1$$, 
  $newHeight$$2$$ -= 0.2 * $minDim$$1$$) : "circle" == $type$$96$$ && ($newX$$6$$ += 0.15 * $minDim$$1$$, $newY$$7$$ += 0.15 * $minDim$$1$$, $newWidth$$2$$ -= 0.3 * $minDim$$1$$, $newHeight$$2$$ -= 0.3 * $minDim$$1$$);
  return new D.$DvtRectangle$$($newX$$6$$, $newY$$7$$, $newWidth$$2$$, $newHeight$$2$$)
};
D.$DvtStatusMeterGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtStatusMeterGauge", D.$DvtStatusMeterGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGauge$$, D.$DvtGauge$$, "DvtStatusMeterGauge");
D.$DvtStatusMeterGauge$newInstance$$ = function $$DvtStatusMeterGauge$newInstance$$$($context$$434$$, $callback$$124$$, $callbackObj$$87$$) {
  var $gauge$$59$$ = new D.$DvtStatusMeterGauge$$;
  $gauge$$59$$.Init($context$$434$$, $callback$$124$$, $callbackObj$$87$$);
  return $gauge$$59$$
};
D.$DvtStatusMeterGauge$$.newInstance = D.$DvtStatusMeterGauge$newInstance$$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtStatusMeterGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$435$$, $callback$$125$$, $callbackObj$$88$$) {
  D.$DvtStatusMeterGauge$$.$superclass$.Init.call(this, $context$$435$$, $callback$$125$$, $callbackObj$$88$$);
  this.$Defaults$ = new D.$DvtStatusMeterGaugeDefaults$$;
  this.$__axisInfo$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$241$$) {
  D.$DvtStatusMeterGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$241$$))
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$153$$, $width$$148$$, $height$$134$$) {
  D.$DvtStatusMeterGaugeRenderer$$.$render$(this, $container$$153$$, $width$$148$$, $height$$134$$)
};
D.$JSCompiler_prototypeAlias$$.$CreateAnimationOnDisplay$ = function $$JSCompiler_prototypeAlias$$$$CreateAnimationOnDisplay$$($objs$$6$$, $animatedObjs$$2_animationType$$4$$, $animationDuration$$7$$) {
  $animatedObjs$$2_animationType$$4$$ = [];
  for(var $i$$625$$ = 0;$i$$625$$ < $objs$$6$$.length;$i$$625$$++) {
    var $obj$$191$$ = $objs$$6$$[$i$$625$$], $endState$$16$$ = $obj$$191$$.$getAnimationParams$();
    "horizontal" == this.$Options$.orientation ? $obj$$191$$.$setAnimationParams$([$endState$$16$$[0], $endState$$16$$[0], $endState$$16$$[2], $endState$$16$$[3]]) : "vertical" == this.$Options$.orientation ? $obj$$191$$.$setAnimationParams$([$endState$$16$$[0], $endState$$16$$[1], $endState$$16$$[3], $endState$$16$$[3]]) : "circular" == this.$Options$.orientation && $obj$$191$$.$setAnimationParams$([$endState$$16$$[0], $endState$$16$$[1], 0, $endState$$16$$[3], $endState$$16$$[4]]);
    var $animation$$6$$ = new D.$DvtCustomAnimation$$(this.$_context$, $obj$$191$$, $animationDuration$$7$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animation$$6$$.$_animator$, "typeNumberArray", $obj$$191$$, $obj$$191$$.$getAnimationParams$, $obj$$191$$.$setAnimationParams$, $endState$$16$$);
    $animation$$6$$.$_animator$.$setEasing$(function($objs$$6$$) {
      return(0,D.$DvtEasing$backOut$$)($objs$$6$$, 0.7)
    });
    $animatedObjs$$2_animationType$$4$$.push($animation$$6$$)
  }
  return new D.$DvtParallelPlayable$$(this.$_context$, $animatedObjs$$2_animationType$$4$$)
};
D.$JSCompiler_prototypeAlias$$.$GetValueAt$ = function $$JSCompiler_prototypeAlias$$$$GetValueAt$$($x$$227$$, $y$$200$$) {
  if("horizontal" == this.$Options$.orientation) {
    return this.$__axisInfo$.$getBoundedValueAt$($x$$227$$)
  }
  if("vertical" == this.$Options$.orientation) {
    return this.$__axisInfo$.$getBoundedValueAt$($y$$200$$)
  }
  if("circular" == this.$Options$.orientation) {
    var $angle$$39$$ = D.$DvtMath$$.$radsToDegrees$(window.Math.atan2($y$$200$$ - this.$Height$ / 2, $x$$227$$ - this.$Width$ / 2)) - 270, $angle$$39$$ = ($angle$$39$$ + 720) % 360;
    0 <= $angle$$39$$ && 360 >= $angle$$39$$ || ($angle$$39$$ = 360 < $angle$$39$$ ? 360 - $angle$$39$$ < $angle$$39$$ - 360 ? 0 : 360 : 0 - $angle$$39$$ < $angle$$39$$ ? 0 : 360);
    if((0,D.$DvtAgent$isRightToLeft$$)(this.$_context$)) {
      for($angle$$39$$ = 360 - $angle$$39$$;0 > $angle$$39$$;) {
        $angle$$39$$ += 360
      }
    }
    var $minValue$$17$$ = this.$Options$.min;
    return $angle$$39$$ / 360 * (this.$Options$.max - $minValue$$17$$) + $minValue$$17$$
  }
};
D.$DvtStatusMeterGaugeDefaults$$ = function $$DvtStatusMeterGaugeDefaults$$$() {
  this.Init({skyros:D.$DvtStatusMeterGaugeDefaults$VERSION_1$$, alta:D.$DvtStatusMeterGaugeDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGaugeDefaults$$, D.$DvtGaugeDefaults$$, "DvtStatusMeterGaugeDefaults");
D.$DvtStatusMeterGaugeDefaults$SKIN_ALTA$$ = {color:"#393737", metricLabel:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, plotArea:{color:"#f5f6f7", borderColor:"#D6DFE6"}};
D.$DvtStatusMeterGaugeDefaults$VERSION_1$$ = {color:"#313842", indicatorSize:1, metricLabel:{style:new D.$DvtCSSStyle$$("color: #333333;")}, orientation:"horizontal", plotArea:{color:"#AAAAAA", borderColor:"#C6C6C6", rendered:"auto"}, thresholdDisplay:"onIndicator"};
D.$DvtStatusMeterGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGaugeRenderer$$, D.$DvtObj$$, "DvtStatusMeterGaugeRenderer");
D.$DvtStatusMeterGaugeRenderer$$.$render$ = function $$DvtStatusMeterGaugeRenderer$$$$render$$($gauge$$46$$, $container$$59$$, $bounds$$77_width$$88$$, $height$$76$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($gauge$$46$$)) {
    var $maxDiameter$$1_options$$102$$ = $gauge$$46$$.$__getOptions$(), $outerGap$$2$$ = $maxDiameter$$1_options$$102$$.__layout.outerGap;
    $bounds$$77_width$$88$$ = new D.$DvtRectangle$$($outerGap$$2$$, $outerGap$$2$$, $bounds$$77_width$$88$$ - 2 * $outerGap$$2$$, $height$$76$$ - 2 * $outerGap$$2$$);
    "horizontal" == $maxDiameter$$1_options$$102$$.orientation || "vertical" == $maxDiameter$$1_options$$102$$.orientation ? (D.$DvtStatusMeterGaugeRenderer$$.$_renderLabel$($gauge$$46$$, $container$$59$$, $bounds$$77_width$$88$$), D.$DvtStatusMeterGaugeRenderer$$.$_renderShape$($gauge$$46$$, $container$$59$$, $bounds$$77_width$$88$$)) : "circular" == $maxDiameter$$1_options$$102$$.orientation && ($maxDiameter$$1_options$$102$$ = window.Math.min($bounds$$77_width$$88$$.$w$, $bounds$$77_width$$88$$.$h$), 
    D.$DvtGaugeRenderer$$.$renderLabel$($gauge$$46$$, $container$$59$$, new D.$DvtRectangle$$($bounds$$77_width$$88$$.x + $bounds$$77_width$$88$$.$w$ / 2 - 0.325 * $maxDiameter$$1_options$$102$$, $bounds$$77_width$$88$$.y + $bounds$$77_width$$88$$.$h$ / 2 - 0.25 * $maxDiameter$$1_options$$102$$, 0.65 * $maxDiameter$$1_options$$102$$, 0.5 * $maxDiameter$$1_options$$102$$), D.$JSCompiler_alias_NULL$$), D.$DvtStatusMeterGaugeRenderer$$.$_renderCircularShape$($gauge$$46$$, $container$$59$$, $bounds$$77_width$$88$$))
  }else {
    D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$46$$, $container$$59$$, new D.$DvtRectangle$$(0, 0, $bounds$$77_width$$88$$, $height$$76$$))
  }
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderCircularShape$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderCircularShape$$($gauge$$47$$, $container$$60_tooltip$$23$$, $bounds$$78_overlayRect$$1$$) {
  var $options$$103$$ = $gauge$$47$$.$__getOptions$(), $angleExtent$$4_max$$4_percentFill$$1$$ = 0, $value$$107$$ = $options$$103$$.value, $indicatorSize_referenceLineWidth_thresholds$$2$$ = $options$$103$$.thresholds, $maxDiameter$$2_referenceLineColor_totalWidth$$3$$ = window.Math.min($bounds$$78_overlayRect$$1$$.$w$, $bounds$$78_overlayRect$$1$$.$h$), $innerRadius$$3_referenceObjects$$1$$ = 0.3125 * $maxDiameter$$2_referenceLineColor_totalWidth$$3$$, $i$$403_outerRadius$$3$$ = 0.4625 * $maxDiameter$$2_referenceLineColor_totalWidth$$3$$, 
  $referenceLineStyle_startAngle$$6$$ = 1.5 * window.Math.PI, $angleExtent$$4_max$$4_percentFill$$1$$ = 2 * $angleExtent$$4_max$$4_percentFill$$1$$ * window.Math.PI;
  if($indicatorSize_referenceLineWidth_thresholds$$2$$ && "off" != $options$$103$$.plotArea.rendered && "all" == $options$$103$$.thresholdDisplay) {
    for(var $currentThresholdIndex$$ = 0;$currentThresholdIndex$$ < $indicatorSize_referenceLineWidth_thresholds$$2$$.length;$currentThresholdIndex$$++) {
      var $thresholdColor$$ = D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$47$$, $indicatorSize_referenceLineWidth_thresholds$$2$$[$currentThresholdIndex$$], $currentThresholdIndex$$), $angleExtent$$4_max$$4_percentFill$$1$$ = $indicatorSize_referenceLineWidth_thresholds$$2$$[$currentThresholdIndex$$].max ? $indicatorSize_referenceLineWidth_thresholds$$2$$[$currentThresholdIndex$$].max : $options$$103$$.max, $min$$4$$ = 0 == $currentThresholdIndex$$ ? $options$$103$$.min : $indicatorSize_referenceLineWidth_thresholds$$2$$[$currentThresholdIndex$$ - 
      1].max, $referenceLineStyle_startAngle$$6$$ = 1.5 * window.Math.PI + 2 * window.Math.PI * D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$103$$, $options$$103$$.min, $min$$4$$), $angleExtent$$4_max$$4_percentFill$$1$$ = D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$103$$, $min$$4$$, $angleExtent$$4_max$$4_percentFill$$1$$), $angleExtent$$4_max$$4_percentFill$$1$$ = 2 * $angleExtent$$4_max$$4_percentFill$$1$$ * window.Math.PI;
      D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($gauge$$47$$, $container$$60_tooltip$$23$$, $bounds$$78_overlayRect$$1$$, $referenceLineStyle_startAngle$$6$$, $angleExtent$$4_max$$4_percentFill$$1$$, $innerRadius$$3_referenceObjects$$1$$, $i$$403_outerRadius$$3$$, $thresholdColor$$, D.$JSCompiler_alias_TRUE$$)
    }
  }else {
    "off" != $options$$103$$.plotArea.rendered && (!("auto" == $options$$103$$.plotArea.rendered && "onIndicator" == $options$$103$$.thresholdDisplay) && "all" != $options$$103$$.thresholdDisplay) && ($thresholdColor$$ = D.$DvtGaugeStyleUtils$$.$getPlotAreaColor$($gauge$$47$$), $referenceLineStyle_startAngle$$6$$ = 1.5 * window.Math.PI, $angleExtent$$4_max$$4_percentFill$$1$$ = 2 * window.Math.PI, D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($gauge$$47$$, $container$$60_tooltip$$23$$, $bounds$$78_overlayRect$$1$$, 
    $referenceLineStyle_startAngle$$6$$, $angleExtent$$4_max$$4_percentFill$$1$$, $innerRadius$$3_referenceObjects$$1$$, $i$$403_outerRadius$$3$$, $thresholdColor$$, D.$JSCompiler_alias_TRUE$$))
  }
  if(($indicatorSize_referenceLineWidth_thresholds$$2$$ = $options$$103$$.indicatorSize) && 1 != $indicatorSize_referenceLineWidth_thresholds$$2$$) {
    $maxDiameter$$2_referenceLineColor_totalWidth$$3$$ *= 0.075 * (1 - $indicatorSize_referenceLineWidth_thresholds$$2$$), $innerRadius$$3_referenceObjects$$1$$ += $maxDiameter$$2_referenceLineColor_totalWidth$$3$$, $i$$403_outerRadius$$3$$ -= $maxDiameter$$2_referenceLineColor_totalWidth$$3$$
  }
  $referenceLineStyle_startAngle$$6$$ = 1.5 * window.Math.PI;
  $angleExtent$$4_max$$4_percentFill$$1$$ = D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$103$$, $options$$103$$.min, $value$$107$$);
  $angleExtent$$4_max$$4_percentFill$$1$$ = 2 * $angleExtent$$4_max$$4_percentFill$$1$$ * window.Math.PI;
  D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($gauge$$47$$, $container$$60_tooltip$$23$$, $bounds$$78_overlayRect$$1$$, $referenceLineStyle_startAngle$$6$$, $angleExtent$$4_max$$4_percentFill$$1$$, $innerRadius$$3_referenceObjects$$1$$, $i$$403_outerRadius$$3$$, D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$47$$), D.$JSCompiler_alias_FALSE$$);
  if($innerRadius$$3_referenceObjects$$1$$ = $options$$103$$.referenceLines) {
    for($i$$403_outerRadius$$3$$ = 0;$i$$403_outerRadius$$3$$ < $innerRadius$$3_referenceObjects$$1$$.length;$i$$403_outerRadius$$3$$++) {
      $maxDiameter$$2_referenceLineColor_totalWidth$$3$$ = $innerRadius$$3_referenceObjects$$1$$[$i$$403_outerRadius$$3$$].color ? $innerRadius$$3_referenceObjects$$1$$[$i$$403_outerRadius$$3$$].color : "black", $indicatorSize_referenceLineWidth_thresholds$$2$$ = $innerRadius$$3_referenceObjects$$1$$[$i$$403_outerRadius$$3$$].lineWidth ? $innerRadius$$3_referenceObjects$$1$$[$i$$403_outerRadius$$3$$].lineWidth : 2, $referenceLineStyle_startAngle$$6$$ = $innerRadius$$3_referenceObjects$$1$$[$i$$403_outerRadius$$3$$].lineStyle, 
      $value$$107$$ = $innerRadius$$3_referenceObjects$$1$$[$i$$403_outerRadius$$3$$].value, window.angle = 1.5 * window.Math.PI + 2 * D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$103$$, $options$$103$$.min, $value$$107$$) * window.Math.PI, D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularReferenceLine$($gauge$$47$$, $container$$60_tooltip$$23$$, $bounds$$78_overlayRect$$1$$, $maxDiameter$$2_referenceLineColor_totalWidth$$3$$, $indicatorSize_referenceLineWidth_thresholds$$2$$, $referenceLineStyle_startAngle$$6$$)
    }
  }
  $bounds$$78_overlayRect$$1$$ = new D.$DvtRect$$($gauge$$47$$.$_context$, $bounds$$78_overlayRect$$1$$.x, $bounds$$78_overlayRect$$1$$.y, $bounds$$78_overlayRect$$1$$.$w$, $bounds$$78_overlayRect$$1$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($bounds$$78_overlayRect$$1$$);
  $container$$60_tooltip$$23$$.$addChild$($bounds$$78_overlayRect$$1$$);
  (($container$$60_tooltip$$23$$ = D.$DvtGaugeRenderer$$.$getTooltipString$($gauge$$47$$)) || $gauge$$47$$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$) && $gauge$$47$$.$__getEventManager$().$associate$($bounds$$78_overlayRect$$1$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $container$$60_tooltip$$23$$, D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$47$$)))
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderShape$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderShape$$($gauge$$48$$, $container$$61_tooltip$$24$$, $axisArea_bounds$$79$$) {
  var $options$$104$$ = $gauge$$48$$.$__getOptions$(), $color$$29_isRTL$$20$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$48$$.$_context$), $isVert$$4$$ = "vertical" == $options$$104$$.orientation, $axisInfo$$6_axisOptions$$ = {layout:{}};
  $axisInfo$$6_axisOptions$$.layout.gapRatio = 0;
  $axisInfo$$6_axisOptions$$.timeAxisType = "disabled";
  $axisInfo$$6_axisOptions$$.position = $isVert$$4$$ ? "left" : "bottom";
  $axisInfo$$6_axisOptions$$.min = $options$$104$$.min;
  $axisInfo$$6_axisOptions$$.max = $options$$104$$.max;
  $axisInfo$$6_axisOptions$$.dataMin = $options$$104$$.min;
  $axisInfo$$6_axisOptions$$.dataMax = $options$$104$$.max;
  $axisInfo$$6_axisOptions$$.tickLabel = {rendered:"off"};
  $axisInfo$$6_axisOptions$$ = (0,D.$DvtAxisInfo$newInstance$$)($gauge$$48$$.$_context$, $axisInfo$$6_axisOptions$$, $axisArea_bounds$$79$$);
  $gauge$$48$$.$__axisInfo$ = $axisInfo$$6_axisOptions$$;
  var $baseline$$1_indicatorY2_overlay$$13_referenceObjects$$2$$ = 0;
  0 >= $options$$104$$.max ? $baseline$$1_indicatorY2_overlay$$13_referenceObjects$$2$$ = $options$$104$$.max : 0 <= $options$$104$$.min && ($baseline$$1_indicatorY2_overlay$$13_referenceObjects$$2$$ = $options$$104$$.min);
  var $baselineCoord_gradientAngle$$ = $axisInfo$$6_axisOptions$$.$getCoordAt$($baseline$$1_indicatorY2_overlay$$13_referenceObjects$$2$$);
  "off" != $options$$104$$.plotArea.rendered && !("auto" == $options$$104$$.plotArea.rendered && "onIndicator" == $options$$104$$.thresholdDisplay) && ($baselineCoord_gradientAngle$$ = $axisInfo$$6_axisOptions$$.$getUnboundedCoordAt$($options$$104$$.min));
  var $endCoord_i$$404_plotAreaColor_shape$$20$$ = $axisInfo$$6_axisOptions$$.$getUnboundedCoordAt$($options$$104$$.value), $endCoord_i$$404_plotAreaColor_shape$$20$$ = $isVert$$4$$ ? window.Math.max($axisArea_bounds$$79$$.y, window.Math.min($axisArea_bounds$$79$$.y + $axisArea_bounds$$79$$.$h$, $endCoord_i$$404_plotAreaColor_shape$$20$$)) : window.Math.max($axisArea_bounds$$79$$.x, window.Math.min($axisArea_bounds$$79$$.x + $axisArea_bounds$$79$$.$w$, $endCoord_i$$404_plotAreaColor_shape$$20$$)), 
  $bRender_plotAreaEnd_shadow$$2_stroke$$57_value$$108$$ = 0, $bRender_plotAreaEnd_shadow$$2_stroke$$57_value$$108$$ = 0 > $options$$104$$.min && 0 > $options$$104$$.value ? $axisInfo$$6_axisOptions$$.$getUnboundedCoordAt$($options$$104$$.min) : $axisInfo$$6_axisOptions$$.$getUnboundedCoordAt$($options$$104$$.max), $arColors$$12_gradient$$7_plotX1$$, $plotX2$$, $plotY1$$, $plotY2$$, $indicatorSize$$1_indicatorX1$$, $indicatorX2$$, $indicatorY1$$, $baseline$$1_indicatorY2_overlay$$13_referenceObjects$$2$$ = 
  0;
  $isVert$$4$$ ? ($arColors$$12_gradient$$7_plotX1$$ = $axisArea_bounds$$79$$.x, $plotX2$$ = $axisArea_bounds$$79$$.x + $axisArea_bounds$$79$$.$w$, $plotY2$$ = $baselineCoord_gradientAngle$$, $plotY1$$ = window.Math.min($axisArea_bounds$$79$$.y, window.Math.min($axisArea_bounds$$79$$.y + $axisArea_bounds$$79$$.$h$, $bRender_plotAreaEnd_shadow$$2_stroke$$57_value$$108$$)), $indicatorSize$$1_indicatorX1$$ = $axisArea_bounds$$79$$.x + (1 - $options$$104$$.indicatorSize) / 2 * $axisArea_bounds$$79$$.$w$ + 
  0.5, $indicatorX2$$ = $axisArea_bounds$$79$$.x + $axisArea_bounds$$79$$.$w$ * (1 - (1 - $options$$104$$.indicatorSize) / 2) - 0.5, $baseline$$1_indicatorY2_overlay$$13_referenceObjects$$2$$ = $baselineCoord_gradientAngle$$ - 0.5, $indicatorY1$$ = $endCoord_i$$404_plotAreaColor_shape$$20$$ + 0.5) : ($arColors$$12_gradient$$7_plotX1$$ = $baselineCoord_gradientAngle$$, $plotX2$$ = window.Math.max($axisArea_bounds$$79$$.x, window.Math.max($axisArea_bounds$$79$$.x + $axisArea_bounds$$79$$.$w$, $bRender_plotAreaEnd_shadow$$2_stroke$$57_value$$108$$)), 
  $plotY1$$ = $axisArea_bounds$$79$$.y, $plotY2$$ = $axisArea_bounds$$79$$.y + $axisArea_bounds$$79$$.$h$, $indicatorSize$$1_indicatorX1$$ = $color$$29_isRTL$$20$$ ? $baselineCoord_gradientAngle$$ - 0.5 : $baselineCoord_gradientAngle$$ + 0.5, $indicatorX2$$ = $color$$29_isRTL$$20$$ ? $endCoord_i$$404_plotAreaColor_shape$$20$$ + 0.5 : $endCoord_i$$404_plotAreaColor_shape$$20$$ - 0.5, $indicatorY1$$ = $axisArea_bounds$$79$$.y + (1 - $options$$104$$.indicatorSize) / 2 * $axisArea_bounds$$79$$.$h$ + 
  0.5, $baseline$$1_indicatorY2_overlay$$13_referenceObjects$$2$$ = $axisArea_bounds$$79$$.y + $axisArea_bounds$$79$$.$h$ * (1 - (1 - $options$$104$$.indicatorSize) / 2) - 0.5);
  $bRender_plotAreaEnd_shadow$$2_stroke$$57_value$$108$$ = D.$JSCompiler_alias_TRUE$$;
  $endCoord_i$$404_plotAreaColor_shape$$20$$ == $baselineCoord_gradientAngle$$ && ($bRender_plotAreaEnd_shadow$$2_stroke$$57_value$$108$$ = D.$JSCompiler_alias_FALSE$$);
  var $borderColor$$19$$ = D.$DvtGaugeStyleUtils$$.$getBorderColor$($gauge$$48$$), $plotAreaBorderColor$$ = $options$$104$$.plotArea.borderColor, $thresholds$$3$$ = $options$$104$$.thresholds, $baselineCoord_gradientAngle$$ = $isVert$$4$$ ? 0 : 270;
  if($thresholds$$3$$ && "off" != $options$$104$$.plotArea.rendered && "all" == $options$$104$$.thresholdDisplay) {
    for($endCoord_i$$404_plotAreaColor_shape$$20$$ = $thresholds$$3$$.length - 1;0 <= $endCoord_i$$404_plotAreaColor_shape$$20$$;$endCoord_i$$404_plotAreaColor_shape$$20$$--) {
      var $currentThresholdIndex$$1$$ = $endCoord_i$$404_plotAreaColor_shape$$20$$, $plotArea$$ = D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$48$$, $gauge$$48$$.$_context$, $arColors$$12_gradient$$7_plotX1$$, $plotX2$$, $plotY1$$, $plotY2$$, D.$JSCompiler_alias_TRUE$$), $cp$$7$$ = new D.$DvtClipPath$$("pacp" + $gauge$$48$$.getId());
      $endCoord_i$$404_plotAreaColor_shape$$20$$ == $thresholds$$3$$.length - 1 ? $isVert$$4$$ ? (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$7$$, 0, 0, $axisArea_bounds$$79$$.$w$ + 2, $plotY2$$ - $plotY1$$ + 2, 0, 0) : $color$$29_isRTL$$20$$ ? (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$7$$, $axisInfo$$6_axisOptions$$.$getUnboundedCoordAt$($options$$104$$.max), 0, $axisArea_bounds$$79$$.$w$ + 2, $plotY2$$ - $plotY1$$ + 2, 0, 0) : (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$7$$, 0, 0, $axisArea_bounds$$79$$.$w$ + 
      2, $plotY2$$ - $plotY1$$ + 2, 0, 0) : $isVert$$4$$ ? (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$7$$, 0, $axisInfo$$6_axisOptions$$.$getUnboundedCoordAt$($options$$104$$.max), $plotX2$$ - $arColors$$12_gradient$$7_plotX1$$ + 2, 1 * window.Math.abs($options$$104$$.max - $thresholds$$3$$[$thresholds$$3$$.length - 2 - $currentThresholdIndex$$1$$].max) / window.Math.abs($options$$104$$.min - $options$$104$$.max) * $axisArea_bounds$$79$$.$h$, 0, 0) : $color$$29_isRTL$$20$$ ? (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$7$$, 
      0, 0, 1 * ($options$$104$$.max - ($thresholds$$3$$[$thresholds$$3$$.length - 2 - $currentThresholdIndex$$1$$].max == D.$JSCompiler_alias_NULL$$ ? 100 : $thresholds$$3$$[$thresholds$$3$$.length - 2 - $currentThresholdIndex$$1$$].max)) / window.Math.abs($options$$104$$.min - $options$$104$$.max) * $axisArea_bounds$$79$$.$w$, $plotY2$$ - $plotY1$$ + 2, 0, 0) : (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$7$$, 0, 0, 1 * window.Math.abs($thresholds$$3$$[$currentThresholdIndex$$1$$].max - $options$$104$$.min) / 
      window.Math.abs($options$$104$$.min - $options$$104$$.max) * $axisArea_bounds$$79$$.$w$, $plotY2$$ - $plotY1$$ + 2, 0, 0);
      (0,D.$JSCompiler_StaticMethods_setClipPath$$)($plotArea$$, $cp$$7$$);
      if($color$$29_isRTL$$20$$ || $isVert$$4$$) {
        $currentThresholdIndex$$1$$ = $thresholds$$3$$.length - 1 - $endCoord_i$$404_plotAreaColor_shape$$20$$
      }
      $plotArea$$.$setSolidFill$(D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$48$$, $thresholds$$3$$[$currentThresholdIndex$$1$$], $currentThresholdIndex$$1$$));
      $plotArea$$.$setSolidStroke$($plotAreaBorderColor$$);
      D.$DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$($gauge$$48$$, $container$$61_tooltip$$24$$, $plotArea$$, D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$48$$, $thresholds$$3$$[$currentThresholdIndex$$1$$], $currentThresholdIndex$$1$$), $baselineCoord_gradientAngle$$)
    }
  }else {
    "off" != $options$$104$$.plotArea.rendered && (!("auto" == $options$$104$$.plotArea.rendered && "onIndicator" == $options$$104$$.thresholdDisplay) && "all" != $options$$104$$.thresholdDisplay) && ($plotArea$$ = $isVert$$4$$ ? D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$48$$, $gauge$$48$$.$_context$, $arColors$$12_gradient$$7_plotX1$$, $plotX2$$, $axisInfo$$6_axisOptions$$.$getUnboundedCoordAt$($options$$104$$.max), $axisInfo$$6_axisOptions$$.$getUnboundedCoordAt$($options$$104$$.min), 
    D.$JSCompiler_alias_TRUE$$) : D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$48$$, $gauge$$48$$.$_context$, $axisInfo$$6_axisOptions$$.$getUnboundedCoordAt$($options$$104$$.min), $axisInfo$$6_axisOptions$$.$getUnboundedCoordAt$($options$$104$$.max), $plotY1$$, $plotY2$$, D.$JSCompiler_alias_TRUE$$), $endCoord_i$$404_plotAreaColor_shape$$20$$ = D.$DvtGaugeStyleUtils$$.$getPlotAreaColor$($gauge$$48$$), $plotArea$$.$setSolidFill$($endCoord_i$$404_plotAreaColor_shape$$20$$), $plotArea$$.$setSolidStroke$($plotAreaBorderColor$$), 
    D.$DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$($gauge$$48$$, $container$$61_tooltip$$24$$, $plotArea$$, $endCoord_i$$404_plotAreaColor_shape$$20$$, $baselineCoord_gradientAngle$$))
  }
  $endCoord_i$$404_plotAreaColor_shape$$20$$ = D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$48$$, $gauge$$48$$.$_context$, $indicatorSize$$1_indicatorX1$$, $indicatorX2$$, $indicatorY1$$, $baseline$$1_indicatorY2_overlay$$13_referenceObjects$$2$$, D.$JSCompiler_alias_TRUE$$);
  $gauge$$48$$.$__shapes$.push($endCoord_i$$404_plotAreaColor_shape$$20$$);
  $color$$29_isRTL$$20$$ = D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$48$$);
  !(0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$48$$) && "none" != $options$$104$$.visualEffects ? ($arColors$$12_gradient$$7_plotX1$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$29_isRTL$$20$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$29_isRTL$$20$$, -0.04, -0.05)], $arColors$$12_gradient$$7_plotX1$$ = new D.$DvtLinearGradientFill$$($baselineCoord_gradientAngle$$, $arColors$$12_gradient$$7_plotX1$$, [1, 1], [0, 1]), $endCoord_i$$404_plotAreaColor_shape$$20$$.$setFill$($arColors$$12_gradient$$7_plotX1$$)) : 
  $endCoord_i$$404_plotAreaColor_shape$$20$$.$setSolidFill$($color$$29_isRTL$$20$$);
  $borderColor$$19$$ && $endCoord_i$$404_plotAreaColor_shape$$20$$.$setSolidStroke$($borderColor$$19$$);
  $bRender_plotAreaEnd_shadow$$2_stroke$$57_value$$108$$ && $container$$61_tooltip$$24$$.$addChild$($endCoord_i$$404_plotAreaColor_shape$$20$$);
  $baseline$$1_indicatorY2_overlay$$13_referenceObjects$$2$$ = D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$48$$, $gauge$$48$$.$_context$, $indicatorSize$$1_indicatorX1$$, $indicatorX2$$, $indicatorY1$$, $baseline$$1_indicatorY2_overlay$$13_referenceObjects$$2$$, D.$JSCompiler_alias_TRUE$$);
  D.$DvtStatusMeterGaugeRenderer$$.$_renderVisualEffects$($gauge$$48$$, $container$$61_tooltip$$24$$, $baseline$$1_indicatorY2_overlay$$13_referenceObjects$$2$$, $bRender_plotAreaEnd_shadow$$2_stroke$$57_value$$108$$, $baselineCoord_gradientAngle$$);
  if($baseline$$1_indicatorY2_overlay$$13_referenceObjects$$2$$ = $options$$104$$.referenceLines) {
    for($endCoord_i$$404_plotAreaColor_shape$$20$$ = 0;$endCoord_i$$404_plotAreaColor_shape$$20$$ < $baseline$$1_indicatorY2_overlay$$13_referenceObjects$$2$$.length;$endCoord_i$$404_plotAreaColor_shape$$20$$++) {
      $color$$29_isRTL$$20$$ = $baseline$$1_indicatorY2_overlay$$13_referenceObjects$$2$$[$endCoord_i$$404_plotAreaColor_shape$$20$$].color ? $baseline$$1_indicatorY2_overlay$$13_referenceObjects$$2$$[$endCoord_i$$404_plotAreaColor_shape$$20$$].color : "white", $bRender_plotAreaEnd_shadow$$2_stroke$$57_value$$108$$ = $baseline$$1_indicatorY2_overlay$$13_referenceObjects$$2$$[$endCoord_i$$404_plotAreaColor_shape$$20$$].value, $indicatorSize$$1_indicatorX1$$ = $options$$104$$.indicatorSize, $isVert$$4$$ ? 
      (window.referenceLineSize = ((1 - $indicatorSize$$1_indicatorX1$$) / 2 + $indicatorSize$$1_indicatorX1$$) * $axisArea_bounds$$79$$.$w$, window.xCoord = $axisArea_bounds$$79$$.x + (1 - $indicatorSize$$1_indicatorX1$$) / 4 * $axisArea_bounds$$79$$.$w$, window.yCoord = $axisInfo$$6_axisOptions$$.$getUnboundedCoordAt$($bRender_plotAreaEnd_shadow$$2_stroke$$57_value$$108$$), window.referenceLine = new D.$DvtLine$$($gauge$$48$$.$_context$, window.xCoord, window.yCoord, window.xCoord + window.referenceLineSize, 
      window.yCoord)) : (window.referenceLineSize = ((1 - $indicatorSize$$1_indicatorX1$$) / 2 + $indicatorSize$$1_indicatorX1$$) * $axisArea_bounds$$79$$.$h$, window.xCoord = $axisInfo$$6_axisOptions$$.$getUnboundedCoordAt$($bRender_plotAreaEnd_shadow$$2_stroke$$57_value$$108$$), window.yCoord = $axisArea_bounds$$79$$.y + (1 - $indicatorSize$$1_indicatorX1$$) / 4 * $axisArea_bounds$$79$$.$h$, window.referenceLine = new D.$DvtLine$$($gauge$$48$$.$_context$, window.xCoord, window.yCoord, window.xCoord, 
      window.yCoord + window.referenceLineSize)), $bRender_plotAreaEnd_shadow$$2_stroke$$57_value$$108$$ = new D.$DvtSolidStroke$$($color$$29_isRTL$$20$$, 1, $baseline$$1_indicatorY2_overlay$$13_referenceObjects$$2$$[$endCoord_i$$404_plotAreaColor_shape$$20$$].lineWidth ? $baseline$$1_indicatorY2_overlay$$13_referenceObjects$$2$$[$endCoord_i$$404_plotAreaColor_shape$$20$$].lineWidth : 2), $baseline$$1_indicatorY2_overlay$$13_referenceObjects$$2$$[$endCoord_i$$404_plotAreaColor_shape$$20$$].lineStyle && 
      $bRender_plotAreaEnd_shadow$$2_stroke$$57_value$$108$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($baseline$$1_indicatorY2_overlay$$13_referenceObjects$$2$$[$endCoord_i$$404_plotAreaColor_shape$$20$$].lineStyle)), window.referenceLine.$setStroke$($bRender_plotAreaEnd_shadow$$2_stroke$$57_value$$108$$), $bRender_plotAreaEnd_shadow$$2_stroke$$57_value$$108$$ = new D.$DvtShadow$$(D.$DvtColorUtils$$.$makeRGBA$(0, 0, 0, 0.8), 0.75, 3, 3, 50, 1, 2, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, 
      D.$JSCompiler_alias_FALSE$$), $container$$61_tooltip$$24$$.$addChild$(window.referenceLine), (0,D.$JSCompiler_StaticMethods_addDrawEffect$$)(window.referenceLine, $bRender_plotAreaEnd_shadow$$2_stroke$$57_value$$108$$)
    }
  }
  $axisArea_bounds$$79$$ = new D.$DvtRect$$($gauge$$48$$.$_context$, $axisArea_bounds$$79$$.x, $axisArea_bounds$$79$$.y, $axisArea_bounds$$79$$.$w$, $axisArea_bounds$$79$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($axisArea_bounds$$79$$);
  $container$$61_tooltip$$24$$.$addChild$($axisArea_bounds$$79$$);
  (($container$$61_tooltip$$24$$ = D.$DvtGaugeRenderer$$.$getTooltipString$($gauge$$48$$)) || $options$$104$$.readOnly === D.$JSCompiler_alias_FALSE$$) && $gauge$$48$$.$__getEventManager$().$associate$($axisArea_bounds$$79$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $container$$61_tooltip$$24$$, $color$$29_isRTL$$20$$))
};
D.$DvtStatusMeterGaugeRenderer$$.$_createShape$ = function $$DvtStatusMeterGaugeRenderer$$$$_createShape$$($gauge$$49$$, $context$$229$$, $x1$$13$$, $x2$$12$$, $y1$$15$$, $y2$$13$$, $roundCorners$$3$$) {
  return new window.DvtStatusMeterGaugeIndicator($gauge$$49$$, $context$$229$$, $x1$$13$$, $x2$$12$$, $y1$$15$$, $y2$$13$$, $roundCorners$$3$$)
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderVisualEffects$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderVisualEffects$$($gauge$$50$$, $container$$62$$, $shape$$21$$, $bRender$$1$$, $gradient$$8_gradientAngle$$1$$) {
  "none" != $gauge$$50$$.$__getOptions$().visualEffects && (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$50$$) && ($gradient$$8_gradientAngle$$1$$ = new D.$DvtLinearGradientFill$$($gradient$$8_gradientAngle$$1$$, ["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0.5, 0.3125, 0], [0, 0.3, 1]), $shape$$21$$.$setFill$($gradient$$8_gradientAngle$$1$$), $gauge$$50$$.$__shapes$.push($shape$$21$$), $shape$$21$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $bRender$$1$$ && $container$$62$$.$addChild$($shape$$21$$))
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderPlotAreaVisualEffects$$($arColors$$14_gauge$$51$$, $container$$63$$, $shape$$22$$, $color$$30$$, $gradient$$9_gradientAngle$$2$$) {
  var $options$$106$$ = $arColors$$14_gauge$$51$$.$__getOptions$();
  $shape$$22$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$63$$.$addChild$($shape$$22$$);
  "none" != $options$$106$$.visualEffects && ((0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($arColors$$14_gauge$$51$$) ? ($arColors$$14_gauge$$51$$ = [D.$DvtColorUtils$$.$getDarker$($color$$30$$, 0.9), $color$$30$$, D.$DvtColorUtils$$.$getBrighter$($color$$30$$)], $gradient$$9_gradientAngle$$2$$ = new D.$DvtLinearGradientFill$$($gradient$$9_gradientAngle$$2$$, $arColors$$14_gauge$$51$$, [1, 1, 1], [0, 0.04, 0.73])) : ($arColors$$14_gauge$$51$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$30$$, -0.04, -0.05), 
  D.$DvtColorUtils$$.$adjustHSL$($color$$30$$, -0.09, 0.04)], $gradient$$9_gradientAngle$$2$$ = new D.$DvtLinearGradientFill$$($gradient$$9_gradientAngle$$2$$, $arColors$$14_gauge$$51$$, [1, 1], [0, 1])), $shape$$22$$.$setFill$($gradient$$9_gradientAngle$$2$$))
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderLabel$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderLabel$$($gauge$$52_minLabelDims$$1$$, $container$$64$$, $bounds$$80$$) {
  var $options$$107$$ = $gauge$$52_minLabelDims$$1$$.$__getOptions$(), $isRTL$$21_labelBounds$$9$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$52_minLabelDims$$1$$.$_context$), $isVert$$5_minValue$$9_size$$24$$ = "vertical" == $options$$107$$.orientation, $label$$48$$ = new D.$DvtOutputText$$($gauge$$52_minLabelDims$$1$$.$_context$, ""), $labelString$$5$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$107$$.value, $gauge$$52_minLabelDims$$1$$), $labelGap$$ = $options$$107$$.__layout.labelGap;
  $label$$48$$.$setCSSStyle$($options$$107$$.metricLabel.style);
  if($isVert$$5_minValue$$9_size$$24$$ && "on" == $options$$107$$.metricLabel.rendered) {
    var $alignCoord_bound$$5_maxValue$$10$$ = 0 < $options$$107$$.max ? $options$$107$$.max : $options$$107$$.min, $alignCoord_bound$$5_maxValue$$10$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($alignCoord_bound$$5_maxValue$$10$$, $gauge$$52_minLabelDims$$1$$), $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$ = new D.$DvtOutputText$$($gauge$$52_minLabelDims$$1$$.$_context$, $alignCoord_bound$$5_maxValue$$10$$);
    $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$.$setCSSStyle$($options$$107$$.metricLabel.style);
    $isRTL$$21_labelBounds$$9$$ = new D.$DvtRectangle$$($bounds$$80$$.x, $bounds$$80$$.y + 0.8 * $bounds$$80$$.$h$, $bounds$$80$$.$w$, 0.2 * $bounds$$80$$.$h$);
    $isVert$$5_minValue$$9_size$$24$$ = ($isVert$$5_minValue$$9_size$$24$$ = $options$$107$$.metricLabel.style.$getStyle$("font-size")) ? (0,window.parseInt)($isVert$$5_minValue$$9_size$$24$$) : $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$.$getOptimalFontSize$($isRTL$$21_labelBounds$$9$$);
    $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$ = $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$.$measureDimensions$();
    $bounds$$80$$.$h$ -= $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$.$h$;
    window.labelSpace = $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$.$w$;
    $label$$48$$.$setFontSize$($isVert$$5_minValue$$9_size$$24$$);
    $label$$48$$.$setTextString$($labelString$$5$$);
    $label$$48$$.$setX$($bounds$$80$$.x + $bounds$$80$$.$w$ / 2);
    $label$$48$$.$setY$($bounds$$80$$.y + $bounds$$80$$.$h$);
    $bounds$$80$$.$h$ -= $labelGap$$;
    $label$$48$$.$alignCenter$();
    D.$DvtTextUtils$$.$fitText$($label$$48$$, $bounds$$80$$.$w$, $bounds$$80$$.$h$, $container$$64$$)
  }else {
    if(!$isVert$$5_minValue$$9_size$$24$$ && "on" == $options$$107$$.metricLabel.rendered) {
      var $isVert$$5_minValue$$9_size$$24$$ = ($isVert$$5_minValue$$9_size$$24$$ = $options$$107$$.metricLabel.style.$getStyle$("font-size")) ? (0,window.parseInt)($isVert$$5_minValue$$9_size$$24$$) : 13, $maxString$$3_minLabel$$2$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$107$$.min, $gauge$$52_minLabelDims$$1$$), $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$107$$.max, $gauge$$52_minLabelDims$$1$$), $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$ = 
      window.Math.max($longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$.toString().length, $maxString$$3_minLabel$$2$$.toString().length), $maxString$$3_minLabel$$2$$ = "";
      "percent" == $options$$107$$.metricLabel.textType && ($longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$ = 3, $maxString$$3_minLabel$$2$$ += "%");
      for(var $i$$405$$ = 0;$i$$405$$ < $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$;$i$$405$$++) {
        $maxString$$3_minLabel$$2$$ += "0"
      }
      $label$$48$$.$setTextString$($maxString$$3_minLabel$$2$$);
      18 > $bounds$$80$$.$h$ && ($isVert$$5_minValue$$9_size$$24$$ = $label$$48$$.$getOptimalFontSize$($bounds$$80$$));
      $label$$48$$.$setFontSize$($isVert$$5_minValue$$9_size$$24$$);
      if(0 < $options$$107$$.max || "off" != $options$$107$$.plotArea.rendered || !("auto" == $options$$107$$.plotArea.rendered && "onIndicator" == $options$$107$$.thresholdDisplay)) {
        $alignCoord_bound$$5_maxValue$$10$$ = 0 < $options$$107$$.max ? $options$$107$$.max : $options$$107$$.min, $alignCoord_bound$$5_maxValue$$10$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($alignCoord_bound$$5_maxValue$$10$$, $gauge$$52_minLabelDims$$1$$), $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$ = new D.$DvtOutputText$$($gauge$$52_minLabelDims$$1$$.$_context$, $alignCoord_bound$$5_maxValue$$10$$), $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$.$setCSSStyle$($options$$107$$.metricLabel.style), 
        $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$.$setFontSize$($isVert$$5_minValue$$9_size$$24$$), $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$ = $label$$48$$.$measureDimensions$(), $alignCoord_bound$$5_maxValue$$10$$ = $isRTL$$21_labelBounds$$9$$ ? $bounds$$80$$.x + $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$.$w$ : $bounds$$80$$.x + $bounds$$80$$.$w$, window.labelSpace = $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$.$w$, $isRTL$$21_labelBounds$$9$$ && ($bounds$$80$$.x += $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$.$w$ + 
        $labelGap$$), $bounds$$80$$.$w$ -= $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$.$w$ + $labelGap$$
      }
      if(0 > $options$$107$$.min && "on" != $options$$107$$.plotArea.rendered && !("auto" == $options$$107$$.plotArea.rendered && "onIndicator" == $options$$107$$.thresholdDisplay)) {
        $isVert$$5_minValue$$9_size$$24$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$107$$.min, $gauge$$52_minLabelDims$$1$$);
        $maxString$$3_minLabel$$2$$ = new D.$DvtOutputText$$($gauge$$52_minLabelDims$$1$$.$_context$, $isVert$$5_minValue$$9_size$$24$$);
        $maxString$$3_minLabel$$2$$.$setCSSStyle$($options$$107$$.metricLabel.style);
        $gauge$$52_minLabelDims$$1$$ = $maxString$$3_minLabel$$2$$.$measureDimensions$();
        if(0 > $options$$107$$.value || 0 >= $options$$107$$.max) {
          $alignCoord_bound$$5_maxValue$$10$$ = $isRTL$$21_labelBounds$$9$$ ? $bounds$$80$$.x + $bounds$$80$$.$w$ : $bounds$$80$$.x + $gauge$$52_minLabelDims$$1$$.$w$, window.labelSpace = $gauge$$52_minLabelDims$$1$$.$w$
        }
        $isRTL$$21_labelBounds$$9$$ || ($bounds$$80$$.x += $gauge$$52_minLabelDims$$1$$.$w$ + $labelGap$$);
        $bounds$$80$$.$w$ -= $gauge$$52_minLabelDims$$1$$.$w$ + $labelGap$$
      }
      $label$$48$$.$setTextString$($labelString$$5$$);
      $label$$48$$.$setX$($alignCoord_bound$$5_maxValue$$10$$);
      $label$$48$$.$setY$($bounds$$80$$.y + $bounds$$80$$.$h$ / 2);
      $label$$48$$.$alignMiddle$();
      $label$$48$$.$alignRight$();
      D.$DvtTextUtils$$.$fitText$($label$$48$$, window.labelSpace, $bounds$$80$$.$h$, $container$$64$$)
    }
  }
};
D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$ = function $$DvtStatusMeterGaugeRenderer$$$$_calcPointOnArc$$($bounds$$81$$, $radius$$17$$, $angle$$15$$) {
  return{x:window.Math.cos($angle$$15$$) * $radius$$17$$ + $bounds$$81$$.$w$ / 2 + $bounds$$81$$.x, y:window.Math.sin($angle$$15$$) * $radius$$17$$ + $bounds$$81$$.$h$ / 2 + $bounds$$81$$.y}
};
D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$ = function $$DvtStatusMeterGaugeRenderer$$$$_drawCircularArc$$($borderColor$$20_gauge$$53$$, $container$$65$$, $bounds$$82_shape$$23$$, $startAngle$$7$$, $angleExtent$$5$$, $innerRadius$$4$$, $outerRadius$$4$$, $color$$31$$, $isPlotArea$$) {
  var $context$$230$$ = $borderColor$$20_gauge$$53$$.$_context$;
  (0,D.$DvtAgent$isRightToLeft$$)($borderColor$$20_gauge$$53$$.$_context$) && ($startAngle$$7$$ = window.Math.PI - $startAngle$$7$$ - $angleExtent$$5$$, $startAngle$$7$$ = 0 < $startAngle$$7$$ ? $startAngle$$7$$ : $startAngle$$7$$ + 2 * window.Math.PI);
  $isPlotArea$$ ? $bounds$$82_shape$$23$$ = new D.$DvtPath$$($context$$230$$, D.$DvtStatusMeterGaugeRenderer$$.$createCircularPathCmd$($bounds$$82_shape$$23$$, $startAngle$$7$$, $angleExtent$$5$$, $innerRadius$$4$$, $outerRadius$$4$$)) : ($bounds$$82_shape$$23$$ = new D.$DvtStatusMeterGaugeCircularIndicator$$($context$$230$$, $bounds$$82_shape$$23$$, $startAngle$$7$$, $angleExtent$$5$$, $innerRadius$$4$$, $outerRadius$$4$$), $borderColor$$20_gauge$$53$$.$__shapes$.push($bounds$$82_shape$$23$$));
  $bounds$$82_shape$$23$$.$setSolidFill$($color$$31$$);
  ($borderColor$$20_gauge$$53$$ = D.$DvtGaugeStyleUtils$$.$getBorderColor$($borderColor$$20_gauge$$53$$)) && !$isPlotArea$$ && $bounds$$82_shape$$23$$.$setSolidStroke$($borderColor$$20_gauge$$53$$);
  $container$$65$$.$addChild$($bounds$$82_shape$$23$$)
};
D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularReferenceLine$ = function $$DvtStatusMeterGaugeRenderer$$$$_drawCircularReferenceLine$$($gauge$$54_shape$$24$$, $container$$66$$, $bounds$$83$$, $color$$32_stroke$$58$$, $lineWidth$$1$$, $lineStyle$$5$$) {
  var $angle$$16$$ = window.angle, $context$$231$$ = $gauge$$54_shape$$24$$.$_context$, $maxDiameter$$3_outerRadius$$5$$ = window.Math.min($bounds$$83$$.$w$, $bounds$$83$$.$h$), $innerRadius$$5$$ = 0.275 * $maxDiameter$$3_outerRadius$$5$$, $maxDiameter$$3_outerRadius$$5$$ = 0.5 * $maxDiameter$$3_outerRadius$$5$$;
  (0,D.$DvtAgent$isRightToLeft$$)($gauge$$54_shape$$24$$.$_context$) && ($angle$$16$$ = window.Math.PI - $angle$$16$$, $angle$$16$$ = 0 < $angle$$16$$ ? $angle$$16$$ : $angle$$16$$ + 2 * window.Math.PI);
  window.p1 = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$83$$, $innerRadius$$5$$, $angle$$16$$);
  window.p2 = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$83$$, $maxDiameter$$3_outerRadius$$5$$, $angle$$16$$);
  $gauge$$54_shape$$24$$ = new D.$DvtLine$$($context$$231$$, window.p1.x, window.p1.y, window.p2.x, window.p2.y);
  $color$$32_stroke$$58$$ = new D.$DvtSolidStroke$$($color$$32_stroke$$58$$, 1, $lineWidth$$1$$);
  $lineStyle$$5$$ && $color$$32_stroke$$58$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($lineStyle$$5$$));
  $gauge$$54_shape$$24$$.$setStroke$($color$$32_stroke$$58$$);
  $container$$66$$.$addChild$($gauge$$54_shape$$24$$)
};
D.$DvtStatusMeterGaugeRenderer$$.$createCircularPathCmd$ = function $$DvtStatusMeterGaugeRenderer$$$$createCircularPathCmd$$($bounds$$84_p4$$, $startAngle$$8$$, $angleExtent$$6$$, $innerRadius$$6$$, $cmd$$3_outerRadius$$6$$) {
  var $p1$$1$$, $p2$$1$$, $p3$$;
  $angleExtent$$6$$ < 2 * window.Math.PI ? ($p1$$1$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$84_p4$$, $cmd$$3_outerRadius$$6$$, $startAngle$$8$$), $p2$$1$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$84_p4$$, $cmd$$3_outerRadius$$6$$, $startAngle$$8$$ + $angleExtent$$6$$), $p3$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$84_p4$$, $innerRadius$$6$$, $startAngle$$8$$ + $angleExtent$$6$$), $bounds$$84_p4$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$84_p4$$, 
  $innerRadius$$6$$, $startAngle$$8$$), $cmd$$3_outerRadius$$6$$ = window.DvtPathUtils.moveTo($p1$$1$$.x, $p1$$1$$.y) + window.DvtPathUtils.arcTo($cmd$$3_outerRadius$$6$$, $cmd$$3_outerRadius$$6$$, $angleExtent$$6$$, 1, $p2$$1$$.x, $p2$$1$$.y) + window.DvtPathUtils.lineTo($p3$$.x, $p3$$.y) + window.DvtPathUtils.arcTo($innerRadius$$6$$, $innerRadius$$6$$, $angleExtent$$6$$, 0, $bounds$$84_p4$$.x, $bounds$$84_p4$$.y) + window.DvtPathUtils.closePath()) : ($p1$$1$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$84_p4$$, 
  $cmd$$3_outerRadius$$6$$, $startAngle$$8$$), $p2$$1$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$84_p4$$, $cmd$$3_outerRadius$$6$$, $startAngle$$8$$ + $angleExtent$$6$$ / 2), $p3$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$84_p4$$, $innerRadius$$6$$, $startAngle$$8$$), $bounds$$84_p4$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$84_p4$$, $innerRadius$$6$$, $startAngle$$8$$ + $angleExtent$$6$$ / 2), $cmd$$3_outerRadius$$6$$ = window.DvtPathUtils.moveTo($p1$$1$$.x, 
  $p1$$1$$.y) + window.DvtPathUtils.arcTo($cmd$$3_outerRadius$$6$$, $cmd$$3_outerRadius$$6$$, $angleExtent$$6$$ / 2, 1, $p2$$1$$.x, $p2$$1$$.y) + window.DvtPathUtils.arcTo($cmd$$3_outerRadius$$6$$, $cmd$$3_outerRadius$$6$$, $angleExtent$$6$$ / 2, 1, $p1$$1$$.x, $p1$$1$$.y), 0 < $innerRadius$$6$$ && ($cmd$$3_outerRadius$$6$$ += window.DvtPathUtils.moveTo($bounds$$84_p4$$.x, $bounds$$84_p4$$.y) + window.DvtPathUtils.arcTo($innerRadius$$6$$, $innerRadius$$6$$, $angleExtent$$6$$ / 2, 0, $p3$$.x, $p3$$.y) + 
  window.DvtPathUtils.arcTo($innerRadius$$6$$, $innerRadius$$6$$, $angleExtent$$6$$ / 2, 0, $bounds$$84_p4$$.x, $bounds$$84_p4$$.y)), $cmd$$3_outerRadius$$6$$ += window.DvtPathUtils.closePath());
  return $cmd$$3_outerRadius$$6$$
};
window.DvtStatusMeterGaugeIndicator = function $DvtStatusMeterGaugeIndicator$($gauge$$22$$, $context$$223$$, $x1$$10$$, $x2$$9$$, $y1$$12$$, $y2$$10$$, $roundCorners$$) {
  this.Init($gauge$$22$$, $context$$223$$, $x1$$10$$, $x2$$9$$, $y1$$12$$, $y2$$10$$, $roundCorners$$)
};
D.$DvtObj$$.$createSubclass$(window.DvtStatusMeterGaugeIndicator, D.$DvtRect$$, "DvtStatusMeterGaugeIndicator");
window.DvtStatusMeterGaugeIndicator.$_MIN_CORNER_RADIUS$ = 2.5;
window.DvtStatusMeterGaugeIndicator.prototype.Init = function $DvtStatusMeterGaugeIndicator$$Init$($gauge$$23$$, $context$$224$$, $x1$$11$$, $x2$$10$$, $y1$$13$$, $y2$$11$$, $roundCorners$$1$$) {
  window.DvtStatusMeterGaugeIndicator.$superclass$.Init.call(this, $context$$224$$);
  this.$_gauge$ = $gauge$$23$$;
  this.$_roundCorners$ = $roundCorners$$1$$;
  this.$_isVert$ = "vertical" == $gauge$$23$$.$__getOptions$().orientation;
  this.$setCoords$($x1$$11$$, $x2$$10$$, $y1$$13$$, $y2$$11$$)
};
window.DvtStatusMeterGaugeIndicator.prototype.$setCoords$ = function $DvtStatusMeterGaugeIndicator$$$setCoords$$($width$$85_x1$$12$$, $x2$$11$$, $height$$73_y1$$14$$, $y2$$12$$) {
  this.$_x1$ = $width$$85_x1$$12$$;
  this.$_x2$ = $x2$$11$$;
  this.$_y1$ = $height$$73_y1$$14$$;
  this.$_y2$ = $y2$$12$$;
  var $radius$$15_x$$130$$ = window.Math.min($width$$85_x1$$12$$, $x2$$11$$), $y$$106$$ = window.Math.min($height$$73_y1$$14$$, $y2$$12$$);
  $width$$85_x1$$12$$ = window.Math.abs($width$$85_x1$$12$$ - $x2$$11$$);
  $height$$73_y1$$14$$ = window.Math.abs($y2$$12$$ - $height$$73_y1$$14$$);
  (0,D.$JSCompiler_StaticMethods_setRect$$)(this, $radius$$15_x$$130$$, $y$$106$$, $width$$85_x1$$12$$, $height$$73_y1$$14$$);
  this.$_roundCorners$ && ($radius$$15_x$$130$$ = (this.$_isVert$ ? $width$$85_x1$$12$$ : $height$$73_y1$$14$$) * ((0,D.$DvtGaugeDefaults$isSkyrosSkin$$)(this.$_gauge$) ? 0.25 : 0.15), $radius$$15_x$$130$$ >= window.DvtStatusMeterGaugeIndicator.$_MIN_CORNER_RADIUS$ && (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)(this, $radius$$15_x$$130$$, $radius$$15_x$$130$$))
};
window.DvtStatusMeterGaugeIndicator.prototype.$getAnimationParams$ = function $DvtStatusMeterGaugeIndicator$$$getAnimationParams$$() {
  return[this.$_x1$, this.$_x2$, this.$_y1$, this.$_y2$]
};
window.DvtStatusMeterGaugeIndicator.prototype.$setAnimationParams$ = function $DvtStatusMeterGaugeIndicator$$$setAnimationParams$$($params$$35$$) {
  $params$$35$$ && 4 == $params$$35$$.length && this.$setCoords$($params$$35$$[0], $params$$35$$[1], $params$$35$$[2], $params$$35$$[3])
};
D.$DvtStatusMeterGaugeCircularIndicator$$ = function $$DvtStatusMeterGaugeCircularIndicator$$$($context$$225$$, $bounds$$62$$, $startAngle$$3$$, $angleExtent$$1$$, $innerRadius$$, $outerRadius$$) {
  this.Init($context$$225$$, $bounds$$62$$, $startAngle$$3$$, $angleExtent$$1$$, $innerRadius$$, $outerRadius$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGaugeCircularIndicator$$, D.$DvtPath$$, "DvtStatusMeterGaugeCircularIndicator");
D.$DvtStatusMeterGaugeCircularIndicator$$.prototype.Init = function $$DvtStatusMeterGaugeCircularIndicator$$$$Init$($context$$226$$, $bounds$$63$$, $startAngle$$4$$, $angleExtent$$2$$, $innerRadius$$1$$, $outerRadius$$1$$) {
  D.$DvtStatusMeterGaugeCircularIndicator$$.$superclass$.Init.call(this, $context$$226$$);
  (0,D.$JSCompiler_StaticMethods_setPath$$)(this, $bounds$$63$$, $startAngle$$4$$, $angleExtent$$2$$, $innerRadius$$1$$, $outerRadius$$1$$)
};
D.$JSCompiler_StaticMethods_setPath$$ = function $$JSCompiler_StaticMethods_setPath$$$($JSCompiler_StaticMethods_setPath$self$$, $bounds$$64$$, $startAngle$$5$$, $angleExtent$$3$$, $innerRadius$$2$$, $outerRadius$$2$$) {
  $bounds$$64$$ && $bounds$$64$$ instanceof D.$DvtRectangle$$ ? $JSCompiler_StaticMethods_setPath$self$$.$_bounds$ = $bounds$$64$$ : $bounds$$64$$ = $JSCompiler_StaticMethods_setPath$self$$.$_bounds$;
  $JSCompiler_StaticMethods_setPath$self$$.$_startAngle$ = $startAngle$$5$$;
  $JSCompiler_StaticMethods_setPath$self$$.$_angleExtent$ = $angleExtent$$3$$;
  $JSCompiler_StaticMethods_setPath$self$$.$_innerRadius$ = $innerRadius$$2$$;
  $JSCompiler_StaticMethods_setPath$self$$.$_outerRadius$ = $outerRadius$$2$$;
  $JSCompiler_StaticMethods_setPath$self$$.$setCmds$(D.$DvtStatusMeterGaugeRenderer$$.$createCircularPathCmd$($bounds$$64$$, $startAngle$$5$$, $angleExtent$$3$$, $innerRadius$$2$$, $outerRadius$$2$$))
};
D.$DvtStatusMeterGaugeCircularIndicator$$.prototype.$getAnimationParams$ = function $$DvtStatusMeterGaugeCircularIndicator$$$$$getAnimationParams$$() {
  return[this.$_bounds$, this.$_startAngle$, this.$_angleExtent$, this.$_innerRadius$, this.$_outerRadius$]
};
D.$DvtStatusMeterGaugeCircularIndicator$$.prototype.$setAnimationParams$ = function $$DvtStatusMeterGaugeCircularIndicator$$$$$setAnimationParams$$($params$$36$$) {
  $params$$36$$ && 5 == $params$$36$$.length && (0,D.$JSCompiler_StaticMethods_setPath$$)(this, $params$$36$$[0], $params$$36$$[1], $params$$36$$[2], $params$$36$$[3], $params$$36$$[4])
};
D.$DvtDialGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtDialGauge", D.$DvtDialGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtDialGauge$$, D.$DvtGauge$$, "DvtDialGauge");
D.$DvtDialGauge$newInstance$$ = function $$DvtDialGauge$newInstance$$$($context$$432$$, $callback$$122$$, $callbackObj$$85$$) {
  var $gauge$$58$$ = new D.$DvtDialGauge$$;
  $gauge$$58$$.Init($context$$432$$, $callback$$122$$, $callbackObj$$85$$);
  return $gauge$$58$$
};
D.$DvtDialGauge$$.newInstance = D.$DvtDialGauge$newInstance$$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtDialGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$433$$, $callback$$123$$, $callbackObj$$86$$) {
  D.$DvtDialGauge$$.$superclass$.Init.call(this, $context$$433$$, $callback$$123$$, $callbackObj$$86$$);
  this.$Defaults$ = new D.$DvtDialGaugeDefaults$$;
  this.$__anchorPt$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$240$$) {
  var $backgroundType$$1$$ = $options$$240$$.background, $indicatorType$$1$$ = $options$$240$$.indicator;
  "string" === typeof $backgroundType$$1$$ && ($options$$240$$.background = D.$DvtGaugeStyleUtils$$.$getDialBackground$($backgroundType$$1$$), $options$$240$$.background.images = $options$$240$$._backgroundImages);
  "string" === typeof $indicatorType$$1$$ && ($options$$240$$.indicator = D.$DvtGaugeStyleUtils$$.$getDialIndicator$($indicatorType$$1$$), $options$$240$$.indicator.images = $options$$240$$._indicatorImages);
  D.$DvtDialGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$240$$))
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$152$$, $width$$147$$, $height$$133$$) {
  D.$DvtDialGaugeRenderer$$.$render$(this, $container$$152$$, $width$$147$$, $height$$133$$)
};
D.$JSCompiler_prototypeAlias$$.$CreateAnimationOnDisplay$ = function $$JSCompiler_prototypeAlias$$$$CreateAnimationOnDisplay$$($objs$$5$$, $animatedObjs$$1_animationType$$3$$, $animationDuration$$6$$) {
  $animatedObjs$$1_animationType$$3$$ = [];
  for(var $i$$624$$ = 0;$i$$624$$ < $objs$$5$$.length;$i$$624$$++) {
    var $obj$$190$$ = $objs$$5$$[$i$$624$$], $endState$$15$$ = $obj$$190$$.$getAnimationParams$(), $animation$$5_startAngle$$15$$ = D.$DvtDialGaugeRenderer$$.$__getStartAngle$(this);
    $obj$$190$$.$setAngle$($animation$$5_startAngle$$15$$);
    $animation$$5_startAngle$$15$$ = new D.$DvtCustomAnimation$$(this.$_context$, $obj$$190$$, $animationDuration$$6$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animation$$5_startAngle$$15$$.$_animator$, "typeNumberArray", $obj$$190$$, $obj$$190$$.$getAnimationParams$, $obj$$190$$.$setAnimationParams$, $endState$$15$$);
    $animation$$5_startAngle$$15$$.$_animator$.$setEasing$(function($objs$$5$$) {
      return(0,D.$DvtEasing$backOut$$)($objs$$5$$, 0.7)
    });
    $animatedObjs$$1_animationType$$3$$.push($animation$$5_startAngle$$15$$)
  }
  return new D.$DvtParallelPlayable$$(this.$_context$, $animatedObjs$$1_animationType$$3$$)
};
D.$JSCompiler_prototypeAlias$$.$GetValueAt$ = function $$JSCompiler_prototypeAlias$$$$GetValueAt$$($x$$226$$, $y$$199$$) {
  var $angle$$38_ratio$$8$$ = D.$DvtMath$$.$radsToDegrees$(window.Math.atan2($y$$199$$ - this.$__anchorPt$.y, $x$$226$$ - this.$__anchorPt$.x));
  0 >= $angle$$38_ratio$$8$$ && ($angle$$38_ratio$$8$$ += 360);
  var $isRTL$$27_minValue$$16$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$), $angleExtent$$13_backgroundOptions$$4$$ = this.$__getOptions$().background, $startAngle$$16$$ = $isRTL$$27_minValue$$16$$ ? 180 + $angleExtent$$13_backgroundOptions$$4$$.startAngle : 360 - $angleExtent$$13_backgroundOptions$$4$$.startAngle, $angleExtent$$13_backgroundOptions$$4$$ = $angleExtent$$13_backgroundOptions$$4$$.angleExtent, $endAngle$$1$$ = $startAngle$$16$$ + $angleExtent$$13_backgroundOptions$$4$$;
  if($isRTL$$27_minValue$$16$$) {
    $endAngle$$1$$ = $startAngle$$16$$;
    for($startAngle$$16$$ -= $angleExtent$$13_backgroundOptions$$4$$;0 > $startAngle$$16$$;) {
      $startAngle$$16$$ += 360, $endAngle$$1$$ += 360
    }
  }
  $angle$$38_ratio$$8$$ + 360 >= $startAngle$$16$$ && $angle$$38_ratio$$8$$ + 360 <= $endAngle$$1$$ ? $angle$$38_ratio$$8$$ += 360 : $angle$$38_ratio$$8$$ >= $startAngle$$16$$ && $angle$$38_ratio$$8$$ <= $endAngle$$1$$ || ($angle$$38_ratio$$8$$ = $angle$$38_ratio$$8$$ > $endAngle$$1$$ ? $startAngle$$16$$ + 360 - $angle$$38_ratio$$8$$ < $angle$$38_ratio$$8$$ - $endAngle$$1$$ ? $startAngle$$16$$ : $endAngle$$1$$ : $startAngle$$16$$ - $angle$$38_ratio$$8$$ < $angle$$38_ratio$$8$$ + 360 - $endAngle$$1$$ ? 
  $startAngle$$16$$ : $endAngle$$1$$);
  $angle$$38_ratio$$8$$ = ($angle$$38_ratio$$8$$ - $startAngle$$16$$) / $angleExtent$$13_backgroundOptions$$4$$;
  $isRTL$$27_minValue$$16$$ && ($angle$$38_ratio$$8$$ = 1 - $angle$$38_ratio$$8$$);
  $isRTL$$27_minValue$$16$$ = this.$Options$.min;
  return $angle$$38_ratio$$8$$ * (this.$Options$.max - $isRTL$$27_minValue$$16$$) + $isRTL$$27_minValue$$16$$
};
D.$DvtDialGaugeDefaults$$ = function $$DvtDialGaugeDefaults$$$() {
  this.Init({skyros:D.$DvtDialGaugeDefaults$VERSION_1$$, alta:{}})
};
D.$DvtObj$$.$createSubclass$(D.$DvtDialGaugeDefaults$$, D.$DvtGaugeDefaults$$, "DvtDialGaugeDefaults");
D.$DvtDialGaugeDefaults$VERSION_1$$ = {background:{startAngle:180, angleExtent:180, indicatorLength:0.7}, metricLabel:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, tickLabel:{scaling:"auto", style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}};
D.$DvtDialGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtDialGaugeRenderer$$, D.$DvtObj$$, "DvtDialGaugeRenderer");
D.$DvtDialGaugeRenderer$$.$render$ = function $$DvtDialGaugeRenderer$$$$render$$($gauge$$10$$, $container$$42$$, $bounds$$52_width$$82$$, $height$$70$$) {
  D.$DvtGaugeDataUtils$$.$hasData$($gauge$$10$$) ? ($bounds$$52_width$$82$$ = new D.$DvtRectangle$$(0, 0, $bounds$$52_width$$82$$, $height$$70$$), D.$DvtDialGaugeRenderer$$.$_renderShape$($gauge$$10$$, $container$$42$$, $bounds$$52_width$$82$$), D.$DvtDialGaugeRenderer$$.$_renderLabel$($gauge$$10$$, $container$$42$$, $bounds$$52_width$$82$$)) : D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$10$$, $container$$42$$, new D.$DvtRectangle$$(0, 0, $bounds$$52_width$$82$$, $height$$70$$))
};
D.$DvtDialGaugeRenderer$$.$_renderShape$ = function $$DvtDialGaugeRenderer$$$$_renderShape$$($gauge$$11$$, $container$$43$$, $bounds$$53_scale$$47$$) {
  var $options$$82_tooltip$$21$$ = $gauge$$11$$.$__getOptions$(), $background$$3_backgroundAnchor$$ = D.$DvtDialGaugeRenderer$$.$_createBackground$($gauge$$11$$, $bounds$$53_scale$$47$$);
  $container$$43$$.$addChild$($background$$3_backgroundAnchor$$);
  $options$$82_tooltip$$21$$.background.majorTickCount && $options$$82_tooltip$$21$$.background.radius && D.$DvtDialGaugeRenderer$$.$_renderTickLabels$($gauge$$11$$, $container$$43$$, $bounds$$53_scale$$47$$);
  var $indicator$$ = D.$DvtDialGaugeRenderer$$.$_createIndicator$($gauge$$11$$, $bounds$$53_scale$$47$$), $translateContainer$$ = new D.$DvtContainer$$($gauge$$11$$.$_context$), $rotateContainer$$ = new D.$DvtDialGaugeIndicator$$($gauge$$11$$.$_context$);
  $container$$43$$.$addChild$($translateContainer$$);
  $translateContainer$$.$addChild$($rotateContainer$$);
  $rotateContainer$$.$addChild$($indicator$$);
  var $indicatorBounds_mat$$20$$ = $indicator$$.$getDimensions$(), $angleRads$$3$$ = D.$DvtDialGaugeRenderer$$.$_getRotation$($gauge$$11$$, $options$$82_tooltip$$21$$.value), $background$$3_backgroundAnchor$$ = D.$DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$($gauge$$11$$, $bounds$$53_scale$$47$$), $indicatorAnchor$$ = D.$DvtDialGaugeRenderer$$.$_getIndicatorAnchorPoint$($gauge$$11$$, $indicatorBounds_mat$$20$$);
  $bounds$$53_scale$$47$$ = D.$DvtDialGaugeRenderer$$.$_getIndicatorScaleFactor$($gauge$$11$$, $bounds$$53_scale$$47$$, $indicatorBounds_mat$$20$$);
  $indicatorBounds_mat$$20$$ = new D.$DvtMatrix$$;
  $indicatorBounds_mat$$20$$.translate(-$indicatorAnchor$$.x, -$indicatorAnchor$$.y);
  $indicatorBounds_mat$$20$$.scale($bounds$$53_scale$$47$$, $bounds$$53_scale$$47$$);
  $indicator$$.$setMatrix$($indicatorBounds_mat$$20$$);
  $rotateContainer$$.$setAngle$($angleRads$$3$$);
  $indicatorBounds_mat$$20$$ = new D.$DvtMatrix$$;
  $indicatorBounds_mat$$20$$.translate($background$$3_backgroundAnchor$$.x, $background$$3_backgroundAnchor$$.y);
  $translateContainer$$.$setMatrix$($indicatorBounds_mat$$20$$);
  $gauge$$11$$.$__shapes$.push($rotateContainer$$);
  (($options$$82_tooltip$$21$$ = $options$$82_tooltip$$21$$.shortDesc) || $gauge$$11$$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$) && $gauge$$11$$.$__getEventManager$().$associate$($container$$43$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $options$$82_tooltip$$21$$));
  $gauge$$11$$.$__anchorPt$ = $background$$3_backgroundAnchor$$
};
D.$DvtDialGaugeRenderer$$.$_createBackground$ = function $$DvtDialGaugeRenderer$$$$_createBackground$$($gauge$$12$$, $bounds$$54$$) {
  var $backgroundOptions$$ = $gauge$$12$$.$__getOptions$().background, $isRTL$$16_radiusScale$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$12$$.$_context$), $isTouchDevice$$1_locImages_metLblBounds_width$$83$$ = (0,D.$DvtAgent$isTouchDevice$$)(), $shape$$16_widthRes$$ = $isTouchDevice$$1_locImages_metLblBounds_width$$83$$ ? 2 * $bounds$$54$$.$w$ : $bounds$$54$$.$w$, $heightRes_scale$$48$$ = $isTouchDevice$$1_locImages_metLblBounds_width$$83$$ ? 2 * $bounds$$54$$.$h$ : $bounds$$54$$.$h$, $images$$12_tx$$17$$ = 
  $backgroundOptions$$.images;
  if($images$$12_tx$$17$$ && 0 < $images$$12_tx$$17$$.length) {
    var $i$$398_ty$$17$$, $refWidth$$, $refHeight$$, $isTouchDevice$$1_locImages_metLblBounds_width$$83$$ = [];
    for($i$$398_ty$$17$$ = 0;$i$$398_ty$$17$$ < $images$$12_tx$$17$$.length;$i$$398_ty$$17$$++) {
      var $imageDims_isImageRTL_source$$10$$ = "rtl" == $images$$12_tx$$17$$[$i$$398_ty$$17$$].dir;
      $isRTL$$16_radiusScale$$ && $imageDims_isImageRTL_source$$10$$ ? $isTouchDevice$$1_locImages_metLblBounds_width$$83$$.push($images$$12_tx$$17$$[$i$$398_ty$$17$$]) : !$isRTL$$16_radiusScale$$ && !$imageDims_isImageRTL_source$$10$$ && $isTouchDevice$$1_locImages_metLblBounds_width$$83$$.push($images$$12_tx$$17$$[$i$$398_ty$$17$$])
    }
    $images$$12_tx$$17$$ = 0 < $isTouchDevice$$1_locImages_metLblBounds_width$$83$$.length ? $isTouchDevice$$1_locImages_metLblBounds_width$$83$$ : $images$$12_tx$$17$$;
    for($i$$398_ty$$17$$ = 0;$i$$398_ty$$17$$ < $images$$12_tx$$17$$.length;$i$$398_ty$$17$$++) {
      var $height$$71_image$$5$$ = $images$$12_tx$$17$$[$i$$398_ty$$17$$], $imageDims_isImageRTL_source$$10$$ = $height$$71_image$$5$$.src, $isTouchDevice$$1_locImages_metLblBounds_width$$83$$ = $height$$71_image$$5$$.width, $height$$71_image$$5$$ = $height$$71_image$$5$$.height, $isSvg$$ = $imageDims_isImageRTL_source$$10$$ && -1 < $imageDims_isImageRTL_source$$10$$.search(".svg");
      0 == $i$$398_ty$$17$$ && ($refWidth$$ = $isTouchDevice$$1_locImages_metLblBounds_width$$83$$, $refHeight$$ = $height$$71_image$$5$$);
      if($isSvg$$ || $isTouchDevice$$1_locImages_metLblBounds_width$$83$$ >= $shape$$16_widthRes$$ && $height$$71_image$$5$$ >= $heightRes_scale$$48$$ || $i$$398_ty$$17$$ == $images$$12_tx$$17$$.length - 1) {
        var $shape$$16_widthRes$$ = new D.$DvtImage$$($gauge$$12$$.$_context$, $imageDims_isImageRTL_source$$10$$, 0, 0, $isTouchDevice$$1_locImages_metLblBounds_width$$83$$, $height$$71_image$$5$$), $matrix$$6$$ = new D.$DvtMatrix$$, $heightRes_scale$$48$$ = window.Math.min($bounds$$54$$.$w$ / $isTouchDevice$$1_locImages_metLblBounds_width$$83$$, $bounds$$54$$.$h$ / $height$$71_image$$5$$), $images$$12_tx$$17$$ = ($bounds$$54$$.$w$ - $heightRes_scale$$48$$ * $isTouchDevice$$1_locImages_metLblBounds_width$$83$$) / 
        2;
        $i$$398_ty$$17$$ = ($bounds$$54$$.$h$ - $heightRes_scale$$48$$ * $height$$71_image$$5$$) / 2;
        $matrix$$6$$.scale($heightRes_scale$$48$$, $heightRes_scale$$48$$);
        $matrix$$6$$.translate($images$$12_tx$$17$$, $i$$398_ty$$17$$);
        $shape$$16_widthRes$$.$setMatrix$($matrix$$6$$);
        $isSvg$$ && (0,D.$DvtAgent$isPlatformWebkit$$)() && ($imageDims_isImageRTL_source$$10$$ = D.$DvtImageLoader$$.$loadImage$($gauge$$12$$.$_context$, $imageDims_isImageRTL_source$$10$$, D.$DvtObj$$.$createCallback$($shape$$16_widthRes$$, $shape$$16_widthRes$$.$__setDimensions$))) && $shape$$16_widthRes$$.$__setDimensions$($imageDims_isImageRTL_source$$10$$);
        $bounds$$54$$.x += $images$$12_tx$$17$$;
        $bounds$$54$$.y += $i$$398_ty$$17$$;
        $bounds$$54$$.$w$ = $heightRes_scale$$48$$ * $isTouchDevice$$1_locImages_metLblBounds_width$$83$$;
        $bounds$$54$$.$h$ = $heightRes_scale$$48$$ * $height$$71_image$$5$$;
        !(0,window.isNaN)($backgroundOptions$$.anchorX) && !(0,window.isNaN)($backgroundOptions$$.anchorY) && ($backgroundOptions$$._anchorX = $isRTL$$16_radiusScale$$ ? $bounds$$54$$.x + $bounds$$54$$.$w$ - $bounds$$54$$.$w$ * $backgroundOptions$$.anchorX / $refWidth$$ : $bounds$$54$$.x + $bounds$$54$$.$w$ * $backgroundOptions$$.anchorX / $refWidth$$, $backgroundOptions$$._anchorY = $bounds$$54$$.y + $bounds$$54$$.$h$ * $backgroundOptions$$.anchorY / $refHeight$$);
        $backgroundOptions$$.metricLabelBounds && ($isTouchDevice$$1_locImages_metLblBounds_width$$83$$ = {}, $isTouchDevice$$1_locImages_metLblBounds_width$$83$$.width = $bounds$$54$$.$w$ * $backgroundOptions$$.metricLabelBounds.width / $refWidth$$, $isTouchDevice$$1_locImages_metLblBounds_width$$83$$.height = $bounds$$54$$.$h$ * $backgroundOptions$$.metricLabelBounds.height / $refHeight$$, $isTouchDevice$$1_locImages_metLblBounds_width$$83$$.y = $bounds$$54$$.y + $bounds$$54$$.$h$ * $backgroundOptions$$.metricLabelBounds.y / 
        $refHeight$$, $isTouchDevice$$1_locImages_metLblBounds_width$$83$$.x = $isRTL$$16_radiusScale$$ ? $bounds$$54$$.x + $bounds$$54$$.$w$ - $bounds$$54$$.$w$ * $backgroundOptions$$.metricLabelBounds.x / $refWidth$$ - $isTouchDevice$$1_locImages_metLblBounds_width$$83$$.width : $bounds$$54$$.x + $bounds$$54$$.$w$ * $backgroundOptions$$.metricLabelBounds.x / $refWidth$$, $backgroundOptions$$._metricLabelBounds = $isTouchDevice$$1_locImages_metLblBounds_width$$83$$);
        $isRTL$$16_radiusScale$$ = window.Math.min($bounds$$54$$.$w$ / $refWidth$$, $bounds$$54$$.$h$ / $refHeight$$);
        $backgroundOptions$$._radius = $backgroundOptions$$.radius * $isRTL$$16_radiusScale$$;
        $backgroundOptions$$._tickLabelHeight = $backgroundOptions$$.tickLabelHeight * $bounds$$54$$.$h$ / $refHeight$$;
        $backgroundOptions$$._tickLabelWidth = $backgroundOptions$$.tickLabelWidth * $bounds$$54$$.$w$ / $refWidth$$;
        return $shape$$16_widthRes$$
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtDialGaugeRenderer$$.$_createIndicator$ = function $$DvtDialGaugeRenderer$$$$_createIndicator$$($gauge$$13$$, $bounds$$55$$) {
  var $indicatorOptions$$ = $gauge$$13$$.$__getOptions$().indicator, $indicatorLength_source$$11$$ = D.$DvtDialGaugeRenderer$$.$_getIndicatorLength$($gauge$$13$$, $bounds$$55$$), $heightRes$$1_shape$$17$$ = (0,D.$DvtAgent$isTouchDevice$$)() ? 2 * $indicatorLength_source$$11$$ : $indicatorLength_source$$11$$, $refWidth$$1$$, $refHeight$$1$$, $images$$13$$ = $indicatorOptions$$.images;
  if($images$$13$$ && 0 < $images$$13$$.length) {
    for(var $i$$399$$ = 0;$i$$399$$ < $images$$13$$.length;$i$$399$$++) {
      var $height$$72_image$$6$$ = $images$$13$$[$i$$399$$], $indicatorLength_source$$11$$ = $height$$72_image$$6$$.src, $width$$84$$ = $height$$72_image$$6$$.width, $height$$72_image$$6$$ = $height$$72_image$$6$$.height, $isSvg$$1$$ = $indicatorLength_source$$11$$ && -1 < $indicatorLength_source$$11$$.search(".svg");
      0 == $i$$399$$ && ($refWidth$$1$$ = $width$$84$$, $refHeight$$1$$ = $height$$72_image$$6$$);
      if($isSvg$$1$$ || $height$$72_image$$6$$ >= $heightRes$$1_shape$$17$$ || $i$$399$$ == $images$$13$$.length - 1) {
        return $heightRes$$1_shape$$17$$ = new D.$DvtImage$$($gauge$$13$$.$_context$, $indicatorLength_source$$11$$, 0, 0, $width$$84$$, $height$$72_image$$6$$), $isSvg$$1$$ && (0,D.$DvtAgent$isPlatformWebkit$$)() && D.$DvtImageLoader$$.$loadImage$($gauge$$13$$.$_context$, $indicatorLength_source$$11$$, D.$DvtObj$$.$createCallback$($heightRes$$1_shape$$17$$, $heightRes$$1_shape$$17$$.$__setDimensions$)) && ($heightRes$$1_shape$$17$$.$setWidth$($width$$84$$), $heightRes$$1_shape$$17$$.$setHeight$($height$$72_image$$6$$)), 
        !(0,window.isNaN)($indicatorOptions$$.anchorX) && !(0,window.isNaN)($indicatorOptions$$.anchorY) && ($indicatorOptions$$._anchorX = $indicatorOptions$$.anchorX * $width$$84$$ / $refWidth$$1$$, $indicatorOptions$$._anchorY = $indicatorOptions$$.anchorY * $height$$72_image$$6$$ / $refHeight$$1$$), $heightRes$$1_shape$$17$$
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtDialGaugeRenderer$$.$__getStartAngle$ = function $$DvtDialGaugeRenderer$$$$__getStartAngle$$($gauge$$14_startAngle$$1$$) {
  var $backgroundOptions$$1$$ = $gauge$$14_startAngle$$1$$.$__getOptions$().background;
  $gauge$$14_startAngle$$1$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$14_startAngle$$1$$.$_context$) ? 180 - $backgroundOptions$$1$$.startAngle : $backgroundOptions$$1$$.startAngle;
  return window.Math.PI * (90 - $gauge$$14_startAngle$$1$$) / 180
};
D.$DvtDialGaugeRenderer$$.$_getRotation$ = function $$DvtDialGaugeRenderer$$$$_getRotation$$($gauge$$15$$, $value$$101$$) {
  var $isRTL$$18_maxValue$$7_options$$83$$ = $gauge$$15$$.$__getOptions$(), $backgroundOptions$$2$$ = $isRTL$$18_maxValue$$7_options$$83$$.background, $minValue$$6_ratio$$5$$ = $isRTL$$18_maxValue$$7_options$$83$$.min, $isRTL$$18_maxValue$$7_options$$83$$ = $isRTL$$18_maxValue$$7_options$$83$$.max;
  $value$$101$$ = window.Math.max(window.Math.min($value$$101$$, $isRTL$$18_maxValue$$7_options$$83$$), $minValue$$6_ratio$$5$$);
  $minValue$$6_ratio$$5$$ = ($value$$101$$ - $minValue$$6_ratio$$5$$) / ($isRTL$$18_maxValue$$7_options$$83$$ - $minValue$$6_ratio$$5$$);
  $isRTL$$18_maxValue$$7_options$$83$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$15$$.$_context$);
  return window.Math.PI * (90 - (($isRTL$$18_maxValue$$7_options$$83$$ ? 180 - $backgroundOptions$$2$$.startAngle : $backgroundOptions$$2$$.startAngle) - $minValue$$6_ratio$$5$$ * ($isRTL$$18_maxValue$$7_options$$83$$ ? -$backgroundOptions$$2$$.angleExtent : $backgroundOptions$$2$$.angleExtent))) / 180
};
D.$DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$ = function $$DvtDialGaugeRenderer$$$$_getBackgroundAnchorPoint$$($gauge$$16$$, $bounds$$56$$) {
  var $anchorY$$2_backgroundOptions$$3$$ = $gauge$$16$$.$__getOptions$().background, $anchorX$$2$$ = $anchorY$$2_backgroundOptions$$3$$._anchorX, $anchorY$$2_backgroundOptions$$3$$ = $anchorY$$2_backgroundOptions$$3$$._anchorY;
  return!(0,window.isNaN)($anchorX$$2$$) && !(0,window.isNaN)($anchorY$$2_backgroundOptions$$3$$) ? new D.$DvtPoint$$($anchorX$$2$$, $anchorY$$2_backgroundOptions$$3$$) : new D.$DvtPoint$$($bounds$$56$$.x + $bounds$$56$$.$w$ / 2, $bounds$$56$$.y + $bounds$$56$$.$h$ / 2)
};
D.$DvtDialGaugeRenderer$$.$_getIndicatorLength$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorLength$$($gauge$$17$$, $bounds$$57$$) {
  var $radius$$13$$ = window.Math.min($bounds$$57$$.$w$, $bounds$$57$$.$h$) / 2;
  return $gauge$$17$$.$__getOptions$().background.indicatorLength * $radius$$13$$
};
D.$DvtDialGaugeRenderer$$.$_getIndicatorAnchorPoint$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorAnchorPoint$$($gauge$$18$$, $indicatorBounds$$1$$) {
  var $anchorY$$3_indicatorOptions$$1$$ = $gauge$$18$$.$__getOptions$().indicator, $anchorX$$3$$ = $anchorY$$3_indicatorOptions$$1$$._anchorX, $anchorY$$3_indicatorOptions$$1$$ = $anchorY$$3_indicatorOptions$$1$$._anchorY;
  return!(0,window.isNaN)($anchorX$$3$$) && !(0,window.isNaN)($anchorY$$3_indicatorOptions$$1$$) ? new D.$DvtPoint$$($anchorX$$3$$, $anchorY$$3_indicatorOptions$$1$$) : new D.$DvtPoint$$($indicatorBounds$$1$$.x + $indicatorBounds$$1$$.$w$ / 2, $indicatorBounds$$1$$.y + $indicatorBounds$$1$$.$h$)
};
D.$DvtDialGaugeRenderer$$.$_getIndicatorScaleFactor$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorScaleFactor$$($gauge$$19$$, $bounds$$59$$, $indicatorBounds$$2$$) {
  return D.$DvtDialGaugeRenderer$$.$_getIndicatorLength$($gauge$$19$$, $bounds$$59$$) / $indicatorBounds$$2$$.$h$
};
D.$DvtDialGaugeRenderer$$.$_renderLabel$ = function $$DvtDialGaugeRenderer$$$$_renderLabel$$($gauge$$20$$, $container$$44$$, $bounds$$60$$) {
  var $i$$400_options$$84$$ = $gauge$$20$$.$__getOptions$();
  if("on" == $i$$400_options$$84$$.metricLabel.rendered) {
    var $labelString$$2$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($i$$400_options$$84$$.value, $gauge$$20$$), $cx$$10_label$$44$$ = $bounds$$60$$.x + $bounds$$60$$.$w$ / 2, $cy$$10_longestLabel_size$$21$$ = $bounds$$60$$.y + $bounds$$60$$.$h$ / 2, $labelWidth$$1$$ = $bounds$$60$$.$w$, $labelHeight$$ = $bounds$$60$$.$h$, $maxString_metricLabelBounds$$ = $i$$400_options$$84$$.background._metricLabelBounds;
    $maxString_metricLabelBounds$$ && ($cx$$10_label$$44$$ = $maxString_metricLabelBounds$$.x + $maxString_metricLabelBounds$$.width / 2, $cy$$10_longestLabel_size$$21$$ = $maxString_metricLabelBounds$$.y + $maxString_metricLabelBounds$$.height / 2, $bounds$$60$$.$w$ = $maxString_metricLabelBounds$$.width, $bounds$$60$$.$h$ = $maxString_metricLabelBounds$$.height);
    $cx$$10_label$$44$$ = new D.$DvtOutputText$$($gauge$$20$$.$_context$, $labelString$$2$$, $cx$$10_label$$44$$, $cy$$10_longestLabel_size$$21$$);
    !$i$$400_options$$84$$.metricLabel.style.$getStyle$("color") && $i$$400_options$$84$$.background._isDark && $i$$400_options$$84$$.metricLabel.style.$setStyle$("color", "#CCCCCC");
    $cx$$10_label$$44$$.$setCSSStyle$($i$$400_options$$84$$.metricLabel.style);
    $cy$$10_longestLabel_size$$21$$ = (0,window.parseInt)($i$$400_options$$84$$.metricLabel.style.$getFontSize$());
    if(!$cy$$10_longestLabel_size$$21$$) {
      $cy$$10_longestLabel_size$$21$$ = window.Math.max(D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($i$$400_options$$84$$.max, $gauge$$20$$).length, D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($i$$400_options$$84$$.min, $gauge$$20$$).length, $labelString$$2$$.length);
      $maxString_metricLabelBounds$$ = "";
      "percent" == $i$$400_options$$84$$.metricLabel.textType && ($cy$$10_longestLabel_size$$21$$ = window.Math.max(3, $labelString$$2$$.length), $maxString_metricLabelBounds$$ += "%");
      for($i$$400_options$$84$$ = 0;$i$$400_options$$84$$ < $cy$$10_longestLabel_size$$21$$;$i$$400_options$$84$$++) {
        $maxString_metricLabelBounds$$ += "0"
      }
      $cx$$10_label$$44$$.$setTextString$($maxString_metricLabelBounds$$);
      $cy$$10_longestLabel_size$$21$$ = $cx$$10_label$$44$$.$getOptimalFontSize$($bounds$$60$$);
      $cx$$10_label$$44$$.$setTextString$($labelString$$2$$);
      $cx$$10_label$$44$$.$setFontSize$($cy$$10_longestLabel_size$$21$$)
    }
    $cx$$10_label$$44$$.$alignCenter$();
    $cx$$10_label$$44$$.$alignMiddle$();
    D.$DvtTextUtils$$.$fitText$($cx$$10_label$$44$$, $labelWidth$$1$$, $labelHeight$$, $container$$44$$) && $cx$$10_label$$44$$.$isTruncated$() && $gauge$$20$$.$__getEventManager$().$associate$($cx$$10_label$$44$$, new D.$DvtSimpleObjPeer$$($labelString$$2$$))
  }
};
D.$DvtDialGaugeRenderer$$.$_renderTickLabels$ = function $$DvtDialGaugeRenderer$$$$_renderTickLabels$$($gauge$$21$$, $container$$45$$, $bounds$$61$$) {
  var $options$$85$$ = $gauge$$21$$.$__getOptions$(), $isRTL$$19$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$21$$.$_context$);
  if($options$$85$$.background.radius && $options$$85$$.background.majorTickCount) {
    var $radius$$14$$ = $options$$85$$.background._radius, $minValue$$7$$ = $options$$85$$.min, $maxValue$$8$$ = $options$$85$$.max, $majorTickCount$$ = $options$$85$$.background.majorTickCount, $fontSize$$4_longestLabel$$1$$ = 12, $labelBounds$$7$$ = new D.$DvtRectangle$$($cx$$11_i$$401_labelValue$$, $angleRads$$4_cy$$11$$, $bounds$$61$$.$w$, $bounds$$61$$.$h$), $maxString$$1_style$$28_x$$129$$ = $options$$85$$.metricLabel.style.$getStyle$("font-size");
    $options$$85$$.background._tickLabelHeight && !$maxString$$1_style$$28_x$$129$$ && ($labelBounds$$7$$.$h$ = $options$$85$$.background._tickLabelHeight);
    $options$$85$$.background._tickLabelWidth && !$maxString$$1_style$$28_x$$129$$ && ($labelBounds$$7$$.$w$ = $options$$85$$.background._tickLabelWidth);
    if(!$maxString$$1_style$$28_x$$129$$) {
      var $label$$45_labelString$$3$$ = new D.$DvtOutputText$$($gauge$$21$$.$_context$, "", $cx$$11_i$$401_labelValue$$, $angleRads$$4_cy$$11$$), $fontSize$$4_longestLabel$$1$$ = window.Math.max(D.$DvtGaugeRenderer$$.$formatTickLabelValue$($options$$85$$.max, $gauge$$21$$).length, D.$DvtGaugeRenderer$$.$formatTickLabelValue$($options$$85$$.min, $gauge$$21$$).length), $maxString$$1_style$$28_x$$129$$ = "";
      "percent" == $options$$85$$.tickLabel.textType && ($fontSize$$4_longestLabel$$1$$ = window.Math.max(3, D.$DvtGaugeRenderer$$.$formatTickLabelValue$(100, $gauge$$21$$).length - 1), $maxString$$1_style$$28_x$$129$$ += "%");
      for(var $cx$$11_i$$401_labelValue$$ = 0;$cx$$11_i$$401_labelValue$$ < $fontSize$$4_longestLabel$$1$$;$cx$$11_i$$401_labelValue$$++) {
        $maxString$$1_style$$28_x$$129$$ += "0"
      }
      $label$$45_labelString$$3$$.$setTextString$($maxString$$1_style$$28_x$$129$$);
      $fontSize$$4_longestLabel$$1$$ = $label$$45_labelString$$3$$.$getOptimalFontSize$($labelBounds$$7$$)
    }
    for($maxString$$1_style$$28_x$$129$$ = 0;$maxString$$1_style$$28_x$$129$$ < $majorTickCount$$;$maxString$$1_style$$28_x$$129$$++) {
      $cx$$11_i$$401_labelValue$$ = $minValue$$7$$ + window.Math.abs($maxValue$$8$$ - $minValue$$7$$) * $maxString$$1_style$$28_x$$129$$ / ($majorTickCount$$ - 1);
      $isRTL$$19$$ && ($cx$$11_i$$401_labelValue$$ = $minValue$$7$$ + window.Math.abs($maxValue$$8$$ - $minValue$$7$$) * ($majorTickCount$$ - 1 - $maxString$$1_style$$28_x$$129$$) / ($majorTickCount$$ - 1));
      var $label$$45_labelString$$3$$ = D.$DvtGaugeRenderer$$.$formatTickLabelValue$($cx$$11_i$$401_labelValue$$, $gauge$$21$$), $angleRads$$4_cy$$11$$ = D.$DvtDialGaugeRenderer$$.$_getRotation$($gauge$$21$$, $cx$$11_i$$401_labelValue$$), $anchor$$3$$ = D.$DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$($gauge$$21$$, $bounds$$61$$), $cx$$11_i$$401_labelValue$$ = $anchor$$3$$.x + $radius$$14$$ * window.Math.cos($angleRads$$4_cy$$11$$ - window.Math.PI / 2), $angleRads$$4_cy$$11$$ = $anchor$$3$$.y + 
      $radius$$14$$ * window.Math.sin($angleRads$$4_cy$$11$$ - window.Math.PI / 2), $label$$45_labelString$$3$$ = new D.$DvtOutputText$$($gauge$$21$$.$_context$, $label$$45_labelString$$3$$, $cx$$11_i$$401_labelValue$$, $angleRads$$4_cy$$11$$);
      !$options$$85$$.tickLabel.style.$getStyle$("color") && $options$$85$$.background._isDark && $options$$85$$.tickLabel.style.$setStyle$("color", "#CCCCCC");
      $label$$45_labelString$$3$$.$setCSSStyle$($options$$85$$.tickLabel.style);
      $options$$85$$.tickLabel.style.$getStyle$("font-size") || $label$$45_labelString$$3$$.$setFontSize$($fontSize$$4_longestLabel$$1$$);
      $label$$45_labelString$$3$$.$alignCenter$();
      $label$$45_labelString$$3$$.$alignMiddle$();
      D.$DvtTextUtils$$.$fitText$($label$$45_labelString$$3$$, $labelBounds$$7$$.$w$ + 0.5, $labelBounds$$7$$.$h$ + 0.5, $container$$45$$) && $label$$45_labelString$$3$$.$isTruncated$() && $gauge$$21$$.$__getEventManager$().$associate$($label$$45_labelString$$3$$, new D.$DvtSimpleObjPeer$$($label$$45_labelString$$3$$.$_untruncatedTextString$))
    }
  }
};
D.$DvtDialGaugeIndicator$$ = function $$DvtDialGaugeIndicator$$$($context$$227$$) {
  this.Init($context$$227$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDialGaugeIndicator$$, D.$DvtContainer$$, "DvtDialGaugeIndicator");
D.$DvtDialGaugeIndicator$$.prototype.$setAngle$ = function $$DvtDialGaugeIndicator$$$$$setAngle$$($angleRads$$5$$) {
  var $mat$$21$$ = new D.$DvtMatrix$$;
  $mat$$21$$.rotate($angleRads$$5$$);
  this.$setMatrix$($mat$$21$$);
  this.$_angleRads$ = $angleRads$$5$$
};
D.$DvtDialGaugeIndicator$$.prototype.$getAnimationParams$ = function $$DvtDialGaugeIndicator$$$$$getAnimationParams$$() {
  return[this.$_angleRads$]
};
D.$DvtDialGaugeIndicator$$.prototype.$setAnimationParams$ = function $$DvtDialGaugeIndicator$$$$$setAnimationParams$$($params$$37$$) {
  $params$$37$$ && 1 == $params$$37$$.length && this.$setAngle$($params$$37$$[0])
};
D.$DvtRatingGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtRatingGauge", D.$DvtRatingGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGauge$$, D.$DvtGauge$$, "DvtRatingGauge");
D.$DvtRatingGauge$newInstance$$ = function $$DvtRatingGauge$newInstance$$$($context$$430$$, $callback$$120$$, $callbackObj$$83$$) {
  var $gauge$$57$$ = new D.$DvtRatingGauge$$;
  $gauge$$57$$.Init($context$$430$$, $callback$$120$$, $callbackObj$$83$$);
  return $gauge$$57$$
};
D.$DvtRatingGauge$$.newInstance = D.$DvtRatingGauge$newInstance$$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtRatingGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$431$$, $callback$$121$$, $callbackObj$$84$$) {
  D.$DvtRatingGauge$$.$superclass$.Init.call(this, $context$$431$$, $callback$$121$$, $callbackObj$$84$$);
  this.$Defaults$ = new D.$DvtRatingGaugeDefaults$$
};
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$239$$) {
  D.$DvtRatingGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$239$$))
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$150$$, $width$$146$$, $height$$132$$) {
  var $outerGap$$3$$ = this.$__getOptions$().__layout.outerGap, $maxValue$$17$$ = this.$Options$.max;
  this.$_size$ = window.Math.min($height$$132$$ - 2 * $outerGap$$3$$, ($width$$146$$ - 2 * $outerGap$$3$$) / $maxValue$$17$$);
  this.$_bounds$ = new D.$DvtRectangle$$((this.$Width$ - this.$_size$ * $maxValue$$17$$) / 2, $outerGap$$3$$, this.$_size$ * $maxValue$$17$$, this.$Height$ - 2 * $outerGap$$3$$);
  D.$DvtRatingGaugeRenderer$$.$render$(this, $container$$150$$, $width$$146$$, $height$$132$$)
};
D.$JSCompiler_prototypeAlias$$.$GetLogicalObject$ = function $$JSCompiler_prototypeAlias$$$$GetLogicalObject$$() {
  return new D.$DvtRatingGaugePeer$$(this)
};
D.$JSCompiler_prototypeAlias$$.$GetValueAt$ = function $$JSCompiler_prototypeAlias$$$$GetValueAt$$($x$$220$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$(this)) {
    $x$$220$$ = window.Math.max(window.Math.min($x$$220$$, this.$_bounds$.x + this.$_bounds$.$w$), this.$_bounds$.x);
    var $val$$34$$ = 0, $val$$34$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) ? window.Math.max((this.$_bounds$.x + this.$_bounds$.$w$ - $x$$220$$) / this.$_size$, this.$Options$.min) : window.Math.max(($x$$220$$ - this.$_bounds$.x) / this.$_size$, this.$Options$.min);
    return D.$DvtGaugeRenderer$$.$adjustForStep$(this.$Options$, $val$$34$$)
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods___processHoverEnd$$ = function $$JSCompiler_StaticMethods___processHoverEnd$$$($JSCompiler_StaticMethods___processHoverEnd$self$$) {
  (0,D.$JSCompiler_StaticMethods___updateClipRects$$)($JSCompiler_StaticMethods___processHoverEnd$self$$, $JSCompiler_StaticMethods___processHoverEnd$self$$.$Options$.value, "render")
};
D.$DvtRatingGauge$$.prototype.$__processValueChangeStart$ = function $$DvtRatingGauge$$$$$__processValueChangeStart$$($x$$223$$, $y$$196$$) {
  (0,D.$JSCompiler_StaticMethods___updateClipRects$$)(this, this.$GetValueAt$($x$$223$$, $y$$196$$), "hover")
};
D.$DvtRatingGauge$$.prototype.$__processValueChangeMove$ = function $$DvtRatingGauge$$$$$__processValueChangeMove$$($x$$224$$, $y$$197$$) {
  var $value$$126$$ = this.$GetValueAt$($x$$224$$, $y$$197$$);
  (0,D.$JSCompiler_StaticMethods___updateClipRects$$)(this, $value$$126$$, "hover");
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$(this.$Options$.value, $value$$126$$, D.$JSCompiler_alias_FALSE$$))
};
D.$DvtRatingGauge$$.prototype.$__processValueChangeEnd$ = function $$DvtRatingGauge$$$$$__processValueChangeEnd$$($x$$225$$, $y$$198$$) {
  var $oldValue$$4$$ = this.$Options$.value;
  this.$Options$.value = this.$GetValueAt$($x$$225$$, $y$$198$$);
  this.$Options$.changed = D.$JSCompiler_alias_TRUE$$;
  this.$render$();
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$($oldValue$$4$$, this.$Options$.value, D.$JSCompiler_alias_FALSE$$));
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$($oldValue$$4$$, this.$Options$.value, D.$JSCompiler_alias_TRUE$$))
};
D.$JSCompiler_StaticMethods___updateClipRects$$ = function $$JSCompiler_StaticMethods___updateClipRects$$$($JSCompiler_StaticMethods___updateClipRects$self$$, $selContainer$$1_unselContainer$$1_value$$127$$, $proc_selClip_unselClip$$, $container$$151_hoverContainer$$1$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($JSCompiler_StaticMethods___updateClipRects$self$$)) {
    $container$$151_hoverContainer$$1$$ || ($container$$151_hoverContainer$$1$$ = $JSCompiler_StaticMethods___updateClipRects$self$$.$_container$);
    var $isRTL$$26$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods___updateClipRects$self$$.$_context$);
    $selContainer$$1_unselContainer$$1_value$$127$$ = window.Math.max(window.Math.min($selContainer$$1_unselContainer$$1_value$$127$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$Options$.max), 0);
    var $a$$49_hoverClip$$ = 0, $b$$35$$ = $selContainer$$1_unselContainer$$1_value$$127$$ * $JSCompiler_StaticMethods___updateClipRects$self$$.$_size$, $c$$30$$ = $selContainer$$1_unselContainer$$1_value$$127$$ * $JSCompiler_StaticMethods___updateClipRects$self$$.$_size$;
    "render" == $proc_selClip_unselClip$$ && ($a$$49_hoverClip$$ = $selContainer$$1_unselContainer$$1_value$$127$$ * $JSCompiler_StaticMethods___updateClipRects$self$$.$_size$, $b$$35$$ = 0);
    $isRTL$$26$$ ? ($selContainer$$1_unselContainer$$1_value$$127$$ = $container$$151_hoverContainer$$1$$.$getChildAt$(0), $proc_selClip_unselClip$$ = new D.$DvtClipPath$$("unsel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($proc_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$ - 
    $c$$30$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($selContainer$$1_unselContainer$$1_value$$127$$, $proc_selClip_unselClip$$), $selContainer$$1_unselContainer$$1_value$$127$$ = $container$$151_hoverContainer$$1$$.$getChildAt$(1), $proc_selClip_unselClip$$ = new D.$DvtClipPath$$("sel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($proc_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x + 
    $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$ - $c$$30$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $a$$49_hoverClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($selContainer$$1_unselContainer$$1_value$$127$$, $proc_selClip_unselClip$$), $container$$151_hoverContainer$$1$$ = $container$$151_hoverContainer$$1$$.$getChildAt$(2), $a$$49_hoverClip$$ = new D.$DvtClipPath$$("hover" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), 
    (0,D.$JSCompiler_StaticMethods_addRect$$)($a$$49_hoverClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x + $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$ - $c$$30$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $b$$35$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$)) : ($selContainer$$1_unselContainer$$1_value$$127$$ = $container$$151_hoverContainer$$1$$.$getChildAt$(0), $proc_selClip_unselClip$$ = new D.$DvtClipPath$$("unsel" + 
    $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($proc_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x + $c$$30$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$ - $c$$30$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($selContainer$$1_unselContainer$$1_value$$127$$, 
    $proc_selClip_unselClip$$), $selContainer$$1_unselContainer$$1_value$$127$$ = $container$$151_hoverContainer$$1$$.$getChildAt$(1), $proc_selClip_unselClip$$ = new D.$DvtClipPath$$("sel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($proc_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $a$$49_hoverClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$), 
    (0,D.$JSCompiler_StaticMethods_setClipPath$$)($selContainer$$1_unselContainer$$1_value$$127$$, $proc_selClip_unselClip$$), $container$$151_hoverContainer$$1$$ = $container$$151_hoverContainer$$1$$.$getChildAt$(2), $a$$49_hoverClip$$ = new D.$DvtClipPath$$("hover" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($a$$49_hoverClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, 
    $b$$35$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$));
    (0,D.$JSCompiler_StaticMethods_setClipPath$$)($container$$151_hoverContainer$$1$$, $a$$49_hoverClip$$)
  }
};
D.$DvtRatingGauge$$.prototype.$CreateEventManager$ = function $$DvtRatingGauge$$$$$CreateEventManager$$() {
  return new D.$DvtRatingGaugeEventManager$$(this)
};
D.$DvtRatingGaugeDefaults$$ = function $$DvtRatingGaugeDefaults$$$() {
  this.Init({skyros:D.$DvtRatingGaugeDefaults$VERSION_1$$, alta:D.$DvtRatingGaugeDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGaugeDefaults$$, D.$DvtGaugeDefaults$$, "DvtRatingGaugeDefaults");
D.$DvtRatingGaugeDefaults$SKIN_ALTA$$ = {unselectedState:{shape:"star", color:"#C4CED7", borderColor:D.$JSCompiler_alias_NULL$$}, selectedState:{shape:"star", color:"#F8C15A", borderColor:D.$JSCompiler_alias_NULL$$}, hoverState:{shape:"star", color:"#007CC8", borderColor:D.$JSCompiler_alias_NULL$$}, changedState:{shape:"star", color:"#ED2C02", borderColor:D.$JSCompiler_alias_NULL$$}};
D.$DvtRatingGaugeDefaults$VERSION_1$$ = {min:0, max:5, unselectedState:{shape:"star", color:"#F2F2F2", borderColor:"#B6B6B6"}, selectedState:{shape:"star", color:"#F8C15A", borderColor:"#F5A700"}, hoverState:{shape:"star", color:"#66A7DA", borderColor:"#4A86C5"}, changedState:{shape:"star", color:"#F8C15A", borderColor:"#959595"}, step:1};
D.$DvtRatingGaugePeer$$ = function $$DvtRatingGaugePeer$$$($gauge$$55$$) {
  this.Init();
  this.$_gauge$ = $gauge$$55$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGaugePeer$$, D.$DvtSimpleObjPeer$$, "DvtRatingGaugePeer");
D.$DvtRatingGaugePeer$$.prototype.$getDatatip$ = function $$DvtRatingGaugePeer$$$$$getDatatip$$($options$$108_target$$62$$, $threshold$$11_thresholdIndex$$6_x$$133$$, $y$$109$$) {
  $options$$108_target$$62$$ = this.$_gauge$.$__getOptions$();
  $threshold$$11_thresholdIndex$$6_x$$133$$ = this.$_gauge$.$__getEventManager$().$isEditing$ ? D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$(this.$_gauge$, this.$_gauge$.$GetValueAt$($threshold$$11_thresholdIndex$$6_x$$133$$, $y$$109$$)) : D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$(this.$_gauge$);
  return($threshold$$11_thresholdIndex$$6_x$$133$$ = D.$DvtGaugeDataUtils$$.$getThreshold$(this.$_gauge$, $threshold$$11_thresholdIndex$$6_x$$133$$)) && $threshold$$11_thresholdIndex$$6_x$$133$$.shortDesc ? $threshold$$11_thresholdIndex$$6_x$$133$$.shortDesc : $options$$108_target$$62$$.shortDesc
};
D.$DvtRatingGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGaugeRenderer$$, D.$DvtObj$$, "DvtRatingGaugeRenderer");
D.$DvtRatingGaugeRenderer$$.$_VALID_SHAPES$ = ["circle", "diamond", "rectangle", "star", "triangle"];
D.$DvtRatingGaugeRenderer$$.$render$ = function $$DvtRatingGaugeRenderer$$$$render$$($gauge$$1$$, $container$$41$$, $threshold$$5_width$$81$$, $bounds$$51_height$$69$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($gauge$$1$$)) {
    var $options$$75$$ = $gauge$$1$$.$__getOptions$(), $outerGap_unselectedOptions$$ = $options$$75$$.__layout.outerGap, $maxValue$$6_overlayRect$$ = $options$$75$$.max, $size$$20$$ = window.Math.min($bounds$$51_height$$69$$ - 2 * $outerGap_unselectedOptions$$, ($threshold$$5_width$$81$$ - 2 * $outerGap_unselectedOptions$$) / $maxValue$$6_overlayRect$$);
    $bounds$$51_height$$69$$ = new D.$DvtRectangle$$(($threshold$$5_width$$81$$ - $size$$20$$ * $maxValue$$6_overlayRect$$) / 2, $outerGap_unselectedOptions$$, $size$$20$$ * $maxValue$$6_overlayRect$$, $bounds$$51_height$$69$$ - 2 * $outerGap_unselectedOptions$$);
    $threshold$$5_width$$81$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$1$$, D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$1$$));
    var $selectedColor_selectedOptions$$ = $options$$75$$.selectedState.color, $changedColor_changedOptions$$ = $options$$75$$.changedState.color, $selectedBorderColor_unselContainer$$ = $options$$75$$.selectedState.borderColor, $changedBorderColor_hoverOptions$$ = $options$$75$$.changedState.borderColor;
    $threshold$$5_width$$81$$ && $threshold$$5_width$$81$$.color && ($changedColor_changedOptions$$ = $selectedColor_selectedOptions$$ = $threshold$$5_width$$81$$.color);
    $threshold$$5_width$$81$$ && $threshold$$5_width$$81$$.borderColor && ($changedBorderColor_hoverOptions$$ = $selectedBorderColor_unselContainer$$ = $threshold$$5_width$$81$$.borderColor);
    $outerGap_unselectedOptions$$ = {value:0, type:$options$$75$$.unselectedState.shape, color:$options$$75$$.unselectedState.color, borderColor:$options$$75$$.unselectedState.borderColor, visualEffects:$options$$75$$.visualEffects};
    $selectedColor_selectedOptions$$ = {value:0, type:$options$$75$$.selectedState.shape, color:$selectedColor_selectedOptions$$, borderColor:$selectedBorderColor_unselContainer$$, visualEffects:$options$$75$$.visualEffects};
    $changedColor_changedOptions$$ = {value:0, type:$options$$75$$.changedState.shape, color:$changedColor_changedOptions$$, borderColor:$changedBorderColor_hoverOptions$$, visualEffects:$options$$75$$.visualEffects};
    $changedBorderColor_hoverOptions$$ = {value:0, type:$options$$75$$.hoverState.shape, color:$options$$75$$.hoverState.color, borderColor:$options$$75$$.hoverState.borderColor, visualEffects:$options$$75$$.visualEffects};
    "dot" == $options$$75$$.unselectedState.shape && ($outerGap_unselectedOptions$$.type = "circle", $outerGap_unselectedOptions$$.visualEffects = "none", $outerGap_unselectedOptions$$.size = 0.05);
    $selectedBorderColor_unselContainer$$ = new D.$DvtContainer$$($gauge$$1$$.$_context$);
    $container$$41$$.$addChild$($selectedBorderColor_unselContainer$$);
    var $selContainer$$ = new D.$DvtContainer$$($gauge$$1$$.$_context$);
    $container$$41$$.$addChild$($selContainer$$);
    var $hoverContainer$$ = new D.$DvtContainer$$($gauge$$1$$.$_context$);
    $container$$41$$.$addChild$($hoverContainer$$);
    (0,D.$JSCompiler_StaticMethods___updateClipRects$$)($gauge$$1$$, $options$$75$$.value, "render", $container$$41$$);
    for(var $i$$396$$ = 0;$i$$396$$ < $maxValue$$6_overlayRect$$;$i$$396$$++) {
      if("none" != $options$$75$$.unselectedState.shape) {
        var $changedLED_hoverLED_selectedLED_unselectedLED$$ = (0,D.$DvtLedGauge$newInstance$$)($gauge$$1$$.$_context$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$);
        $selectedBorderColor_unselContainer$$.$addChild$($changedLED_hoverLED_selectedLED_unselectedLED$$);
        (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$51_height$$69$$.x + $i$$396$$ * $size$$20$$, $bounds$$51_height$$69$$.y + $bounds$$51_height$$69$$.$h$ / 2 - $size$$20$$ / 2);
        -1 == D.$DvtArrayUtils$$.$getIndex$(D.$DvtRatingGaugeRenderer$$.$_VALID_SHAPES$, $outerGap_unselectedOptions$$.type) && ($outerGap_unselectedOptions$$.type = "star");
        $changedLED_hoverLED_selectedLED_unselectedLED$$.$render$($outerGap_unselectedOptions$$, $size$$20$$, $size$$20$$)
      }
      $options$$75$$.changed ? ($changedLED_hoverLED_selectedLED_unselectedLED$$ = (0,D.$DvtLedGauge$newInstance$$)($gauge$$1$$.$_context$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$), $selContainer$$.$addChild$($changedLED_hoverLED_selectedLED_unselectedLED$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$51_height$$69$$.x + $i$$396$$ * $size$$20$$, $bounds$$51_height$$69$$.y + $bounds$$51_height$$69$$.$h$ / 
      2 - $size$$20$$ / 2), -1 == D.$DvtArrayUtils$$.$getIndex$(D.$DvtRatingGaugeRenderer$$.$_VALID_SHAPES$, $changedColor_changedOptions$$.type) && ($changedColor_changedOptions$$.type = "star"), $changedLED_hoverLED_selectedLED_unselectedLED$$.$render$($changedColor_changedOptions$$, $size$$20$$, $size$$20$$)) : ($changedLED_hoverLED_selectedLED_unselectedLED$$ = (0,D.$DvtLedGauge$newInstance$$)($gauge$$1$$.$_context$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$), 
      $selContainer$$.$addChild$($changedLED_hoverLED_selectedLED_unselectedLED$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$51_height$$69$$.x + $i$$396$$ * $size$$20$$, $bounds$$51_height$$69$$.y + $bounds$$51_height$$69$$.$h$ / 2 - $size$$20$$ / 2), -1 == D.$DvtArrayUtils$$.$getIndex$(D.$DvtRatingGaugeRenderer$$.$_VALID_SHAPES$, $selectedColor_selectedOptions$$.type) && ($selectedColor_selectedOptions$$.type = "star"), $changedLED_hoverLED_selectedLED_unselectedLED$$.$render$($selectedColor_selectedOptions$$, 
      $size$$20$$, $size$$20$$));
      $changedLED_hoverLED_selectedLED_unselectedLED$$ = (0,D.$DvtLedGauge$newInstance$$)($gauge$$1$$.$_context$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$);
      $hoverContainer$$.$addChild$($changedLED_hoverLED_selectedLED_unselectedLED$$);
      (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$51_height$$69$$.x + $i$$396$$ * $size$$20$$, $bounds$$51_height$$69$$.y + $bounds$$51_height$$69$$.$h$ / 2 - $size$$20$$ / 2);
      -1 == D.$DvtArrayUtils$$.$getIndex$(D.$DvtRatingGaugeRenderer$$.$_VALID_SHAPES$, $changedBorderColor_hoverOptions$$.type) && ($changedBorderColor_hoverOptions$$.type = "star");
      $changedLED_hoverLED_selectedLED_unselectedLED$$.$render$($changedBorderColor_hoverOptions$$, $size$$20$$, $size$$20$$)
    }
    $maxValue$$6_overlayRect$$ = new D.$DvtRect$$($gauge$$1$$.$_context$, $bounds$$51_height$$69$$.x, $bounds$$51_height$$69$$.y, $bounds$$51_height$$69$$.$w$, $bounds$$51_height$$69$$.$h$);
    (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($maxValue$$6_overlayRect$$);
    $container$$41$$.$addChild$($maxValue$$6_overlayRect$$);
    ($threshold$$5_width$$81$$ && $threshold$$5_width$$81$$.shortDesc ? $threshold$$5_width$$81$$.shortDesc : $options$$75$$.shortDesc) && $gauge$$1$$.$__getEventManager$().$associate$($maxValue$$6_overlayRect$$, new D.$DvtRatingGaugePeer$$($gauge$$1$$))
  }else {
    D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$1$$, $container$$41$$, new D.$DvtRectangle$$(0, 0, $threshold$$5_width$$81$$, $bounds$$51_height$$69$$))
  }
};
D.$DvtRatingGaugeEventManager$$ = function $$DvtRatingGaugeEventManager$$$($gauge$$43$$) {
  this.Init($gauge$$43$$.$_context$, $gauge$$43$$.$__dispatchEvent$, $gauge$$43$$);
  this.$_gauge$ = $gauge$$43$$;
  this.$_bValueChanged$ = this.$isEditing$ = D.$JSCompiler_alias_FALSE$$;
  this.$_isIE$ = (0,D.$DvtAgent$isPlatformIE$$)();
  this.$_stopAutoMouseOut$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGaugeEventManager$$, D.$DvtGaugeEventManager$$, "DvtRatingGaugeEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtRatingGaugeEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$340$$) {
  if(this.$_gauge$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$ && !this.$_bValueChanged$) {
    var $coords$$3$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$340$$.pageX, $event$$340$$.pageY), $JSCompiler_StaticMethods___processHoverStart$self$$inline_5036$$ = this.$_gauge$;
    (0,D.$JSCompiler_StaticMethods___updateClipRects$$)($JSCompiler_StaticMethods___processHoverStart$self$$inline_5036$$, $JSCompiler_StaticMethods___processHoverStart$self$$inline_5036$$.$GetValueAt$($coords$$3$$.x, $coords$$3$$.y), "hover");
    this.$isEditing$ = D.$JSCompiler_alias_TRUE$$
  }
  D.$DvtGaugeEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$340$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$341$$) {
  if(this.$_gauge$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$) {
    if(this.$_isIE$ && this.$_bValueChanged$ && this.$_stopAutoMouseOut$) {
      this.$_stopAutoMouseOut$ = D.$JSCompiler_alias_FALSE$$;
      return
    }
    (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$341$$.pageX, $event$$341$$.pageY);
    (0,D.$JSCompiler_StaticMethods___processHoverEnd$$)(this.$_gauge$);
    this.$_bValueChanged$ = D.$JSCompiler_alias_FALSE$$
  }
  D.$DvtGaugeEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$341$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($coords$$5_event$$342$$) {
  this.$_bValueChanged$ || (this.$_gauge$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$ ? (this.$isEditing$ = D.$JSCompiler_alias_TRUE$$, this.$hideTooltip$(), $coords$$5_event$$342$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $coords$$5_event$$342$$.pageX, $coords$$5_event$$342$$.pageY), this.$_gauge$.$__processValueChangeStart$($coords$$5_event$$342$$.x, $coords$$5_event$$342$$.y)) : D.$DvtGaugeEventManager$$.$superclass$.$OnMouseDown$.call(this, $coords$$5_event$$342$$))
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$($coords$$6_event$$343$$) {
  this.$isEditing$ && (this.$_gauge$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$ ? (this.$isEditing$ = D.$JSCompiler_alias_FALSE$$, $coords$$6_event$$343$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $coords$$6_event$$343$$.pageX, $coords$$6_event$$343$$.pageY), this.$_gauge$.$__processValueChangeEnd$($coords$$6_event$$343$$.x, $coords$$6_event$$343$$.y), (0,D.$JSCompiler_StaticMethods___processHoverEnd$$)(this.$_gauge$), this.$_bValueChanged$ = D.$JSCompiler_alias_TRUE$$, 
  this.$_isIE$ && (this.$_stopAutoMouseOut$ = D.$JSCompiler_alias_TRUE$$)) : D.$DvtGaugeEventManager$$.$superclass$.$OnMouseUp$.call(this, $coords$$6_event$$343$$))
};
D.$JSCompiler_prototypeAlias$$.$IsShowingTooltipWhileEditing$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
});