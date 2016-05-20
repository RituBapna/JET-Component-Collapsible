define(['./DvtToolkit', './DvtPanZoomCanvas', './DvtSubcomponent'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtAmxThematicMap$$ = function $$DvtAmxThematicMap$$$($context$$697$$, $callback$$150$$, $callbackObj$$110$$) {
  this.Init($context$$697$$, $callback$$150$$, $callbackObj$$110$$)
};
(0,D.$goog$exportSymbol$$)("DvtAmxThematicMap", D.$DvtAmxThematicMap$$);
D.$DvtObj$$.$createSubclass$(D.$DvtAmxThematicMap$$, D.$DvtContainer$$, "DvtAmxThematicMap");
D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$ = 10;
D.$DvtAmxThematicMap$$.prototype.Init = function $$DvtAmxThematicMap$$$$Init$($context$$698$$, $callback$$151$$, $callbackObj$$111$$) {
  D.$DvtAmxThematicMap$$.$superclass$.Init.call(this, $context$$698$$);
  this.$_tmap$ = new D.$DvtThematicMap$$($context$$698$$, $callback$$151$$, $callbackObj$$111$$);
  this.$_tmapContainer$ = new D.$DvtContainer$$($context$$698$$);
  this.$_tmapContainer$.$addChild$(this.$_tmap$);
  this.$addChild$(this.$_tmapContainer$);
  this.$Defaults$ = new D.$DvtThematicMapDefaults$$
};
D.$DvtAmxThematicMap$$.newInstance = function $$DvtAmxThematicMap$$$newInstance$($context$$699$$, $callback$$152$$, $callbackObj$$112$$) {
  return new D.$DvtAmxThematicMap$$($context$$699$$, $callback$$152$$, $callbackObj$$112$$)
};
D.$DvtAmxThematicMap$$.newInstance = D.$DvtAmxThematicMap$$.newInstance;
D.$DvtAmxThematicMap$$.prototype.$render$ = function $$DvtAmxThematicMap$$$$$render$$($options$$251$$, $availSpace$$107_width$$169$$, $height$$150$$) {
  this.$Options$ = this.$Defaults$.$calcOptions$($options$$251$$);
  this.$_width$ = $availSpace$$107_width$$169$$;
  this.$_height$ = $height$$150$$;
  $availSpace$$107_width$$169$$ = new D.$DvtRectangle$$(0, 0, $availSpace$$107_width$$169$$, $height$$150$$);
  this.$_renderLegend$(this, $availSpace$$107_width$$169$$);
  this.$_tmap$.$render$($options$$251$$, $availSpace$$107_width$$169$$.$w$, $availSpace$$107_width$$169$$.$h$)
};
D.$DvtAmxThematicMap$$.prototype.render = D.$DvtAmxThematicMap$$.prototype.$render$;
D.$DvtAmxThematicMap$$.prototype.$_renderLegend$ = function $$DvtAmxThematicMap$$$$$_renderLegend$$($container$$174$$, $availSpace$$108$$) {
  this.$_legend$ && ($container$$174$$.removeChild(this.$_legend$), this.$_legend$ = D.$JSCompiler_alias_NULL$$);
  var $availLegendSpace$$ = new D.$DvtRectangle$$(D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$, D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$, $availSpace$$108$$.$w$ - 2 * D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$, $availSpace$$108$$.$h$ - 2 * D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$), $gap$$22_options$$252$$ = this.$Options$, $position$$51_rendered$$4$$ = $gap$$22_options$$252$$.legend.rendered, $actualSize$$5_isHoriz$$13_isRTL$$30_scrolling$$ = $gap$$22_options$$252$$.legend.scrolling, 
  $legendOptions$$9$$ = D.$DvtJSONUtils$$.clone($gap$$22_options$$252$$.legend);
  this.$_addLegendData$(this.$Options$, $legendOptions$$9$$);
  if($position$$51_rendered$$4$$ && !($legendOptions$$9$$.$sections$ && 0 == $legendOptions$$9$$.$sections$.length)) {
    $position$$51_rendered$$4$$ = $gap$$22_options$$252$$.legend.position;
    delete $legendOptions$$9$$.position;
    $legendOptions$$9$$.layout.gapRatio = this.$getGapRatio$();
    $legendOptions$$9$$.hideAndShowBehavior = "none";
    $legendOptions$$9$$.rolloverBehavior = "none";
    $legendOptions$$9$$.scrolling = $gap$$22_options$$252$$.legend.scrolling;
    var $legend$$33$$ = (0,D.$DvtLegend$newInstance$$)(this.$_tmap$.$_context$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$);
    this.$_tmap$.getId() != D.$JSCompiler_alias_NULL$$ && $legend$$33$$.setId(this.$_tmap$.getId() + "legend");
    $container$$174$$.$addChild$($legend$$33$$);
    "auto" == $position$$51_rendered$$4$$ && "asNeeded" !== $actualSize$$5_isHoriz$$13_isRTL$$30_scrolling$$ ? $position$$51_rendered$$4$$ = "bottom" : "auto" == $position$$51_rendered$$4$$ && "asNeeded" == $actualSize$$5_isHoriz$$13_isRTL$$30_scrolling$$ && ($position$$51_rendered$$4$$ = "end");
    $actualSize$$5_isHoriz$$13_isRTL$$30_scrolling$$ = (0,D.$DvtAgent$isRightToLeft$$)($container$$174$$.$_context$);
    "start" == $position$$51_rendered$$4$$ ? $position$$51_rendered$$4$$ = $actualSize$$5_isHoriz$$13_isRTL$$30_scrolling$$ ? "right" : "left" : "end" == $position$$51_rendered$$4$$ && ($position$$51_rendered$$4$$ = $actualSize$$5_isHoriz$$13_isRTL$$30_scrolling$$ ? "left" : "right");
    $legendOptions$$9$$.orientation = "left" == $position$$51_rendered$$4$$ || "right" == $position$$51_rendered$$4$$ ? "vertical" : "horizontal";
    $actualSize$$5_isHoriz$$13_isRTL$$30_scrolling$$ = "top" == $position$$51_rendered$$4$$ || "bottom" == $position$$51_rendered$$4$$;
    $actualSize$$5_isHoriz$$13_isRTL$$30_scrolling$$ = $legend$$33$$.$getPreferredSize$($legendOptions$$9$$, $actualSize$$5_isHoriz$$13_isRTL$$30_scrolling$$ ? $availLegendSpace$$.$w$ : $gap$$22_options$$252$$.layout.legendMaxSize * $availLegendSpace$$.$w$, $actualSize$$5_isHoriz$$13_isRTL$$30_scrolling$$ ? $gap$$22_options$$252$$.layout.legendMaxSize * $availLegendSpace$$.$h$ : $availLegendSpace$$.$h$);
    if(0 < $actualSize$$5_isHoriz$$13_isRTL$$30_scrolling$$.$w$ && 0 < $actualSize$$5_isHoriz$$13_isRTL$$30_scrolling$$.$h$) {
      switch($legend$$33$$.$render$($legendOptions$$9$$, $actualSize$$5_isHoriz$$13_isRTL$$30_scrolling$$.$w$, $actualSize$$5_isHoriz$$13_isRTL$$30_scrolling$$.$h$), this.$_legend$ = $legend$$33$$, $gap$$22_options$$252$$ = window.Math.ceil($gap$$22_options$$252$$.layout.legendGap * this.$getGapRatio$()), (0,D.$DvtLayoutUtils$position$$)($availLegendSpace$$, $position$$51_rendered$$4$$, $legend$$33$$, $actualSize$$5_isHoriz$$13_isRTL$$30_scrolling$$.$w$, $actualSize$$5_isHoriz$$13_isRTL$$30_scrolling$$.$h$, 
      $gap$$22_options$$252$$), $position$$51_rendered$$4$$) {
        case "top":
          this.$_tmapContainer$.$setTranslateY$($actualSize$$5_isHoriz$$13_isRTL$$30_scrolling$$.$h$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$);
        case "bottom":
          $availSpace$$108$$.$h$ -= $actualSize$$5_isHoriz$$13_isRTL$$30_scrolling$$.$h$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$;
          break;
        case "left":
          this.$_tmapContainer$.$setTranslateX$($actualSize$$5_isHoriz$$13_isRTL$$30_scrolling$$.$w$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$);
        case "right":
          $availSpace$$108$$.$w$ -= $actualSize$$5_isHoriz$$13_isRTL$$30_scrolling$$.$w$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$
      }
    }
  }
};
D.$DvtAmxThematicMap$$.prototype.$getGapRatio$ = function $$DvtAmxThematicMap$$$$$getGapRatio$$() {
  if(this.$Options$.layout.gapRatio !== D.$JSCompiler_alias_NULL$$ && !(0,window.isNaN)(this.$Options$.layout.gapRatio)) {
    return this.$Options$.layout.gapRatio
  }
  var $wRatio$$1$$ = window.Math.min(this.$_width$ / 400, 1), $hRatio$$1$$ = window.Math.min(this.$_height$ / 300, 1);
  return window.Math.min($wRatio$$1$$, $hRatio$$1$$)
};
D.$DvtAmxThematicMap$$.prototype.$_addLegendData$ = function $$DvtAmxThematicMap$$$$$_addLegendData$$($data$$98$$, $legendOptions$$10$$) {
  $legendOptions$$10$$.title = $data$$98$$.legend ? $data$$98$$.legend.title : D.$JSCompiler_alias_NULL$$;
  $legendOptions$$10$$.sections = [];
  if($data$$98$$ && $data$$98$$.legend && $data$$98$$.legend.sections) {
    for(var $i$$865$$ = 0;$i$$865$$ < $data$$98$$.legend.sections.length;$i$$865$$++) {
      var $dataSection$$2$$ = $data$$98$$.legend.sections[$i$$865$$];
      $dataSection$$2$$ && $legendOptions$$10$$.sections.push({title:$dataSection$$2$$.title, items:$dataSection$$2$$.items, sections:$dataSection$$2$$.sections})
    }
  }
  return $legendOptions$$10$$
};
D.$DvtThematicMap$$ = function $$DvtThematicMap$$$($context$$694$$, $callback$$147$$, $callbackObj$$107$$) {
  this.Init($context$$694$$, $callback$$147$$, $callbackObj$$107$$)
};
(0,D.$goog$exportSymbol$$)("DvtThematicMap", D.$DvtThematicMap$$);
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMap$$, D.$DvtPanZoomComponent$$, "DvtThematicMap");
D.$DvtThematicMap$$.prototype.Init = function $$DvtThematicMap$$$$Init$($context$$695$$, $callback$$148$$, $callbackObj$$108$$) {
  D.$DvtThematicMap$$.$superclass$.Init.call(this, $context$$695$$, $callback$$148$$, $callbackObj$$108$$);
  (0,D.$JSCompiler_StaticMethods__createHandlers$$)(this);
  this.$_layers$ = [];
  this.$_drillAnimFadeOutObjs$ = [];
  this.$_legendButtonImages$ = this.$_legendXml$ = this.$_legendPanel$ = this.$_legend$ = D.$JSCompiler_alias_NULL$$;
  this.$_bBaseMapChanged$ = D.$JSCompiler_alias_FALSE$$;
  this.$_drilledRowKeys$ = [];
  this.$_initDrilled$ = {};
  this.$_processingInitDrilled$ = D.$JSCompiler_alias_FALSE$$;
  this.$_drillDataLayer$ = {};
  this.$_childToParent$ = {};
  this.$_drilled$ = [];
  this.$_areaLayers$ = new D.$DvtContainer$$(this.$_context$);
  this.$_dataAreaLayers$ = new D.$DvtContainer$$(this.$_context$);
  this.$_dataPointLayers$ = new D.$DvtContainer$$(this.$_context$);
  this.$_labelLayers$ = new D.$DvtContainer$$(this.$_context$);
  this.$_initialZooming$ = D.$JSCompiler_alias_FALSE$$;
  this.$_panning$ = this.$_zooming$ = D.$JSCompiler_alias_TRUE$$;
  this.$_maxZoomFactor$ = 6;
  this.$_isMarkerZoomBehaviorFixed$ = D.$JSCompiler_alias_TRUE$$;
  this.$_selectedAreas$ = {};
  this.$_displayedControls$ = 16777215;
  this.$Defaults$ = new D.$DvtThematicMapDefaults$$;
  this.$_bRendered$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtThematicMap$$.newInstance = function $$DvtThematicMap$$$newInstance$($context$$696$$, $callback$$149$$, $callbackObj$$109$$) {
  return new D.$DvtThematicMap$$($context$$696$$, $callback$$149$$, $callbackObj$$109$$)
};
D.$DvtThematicMap$$.prototype.$SetOptions$ = function $$DvtThematicMap$$$$$SetOptions$$($options$$250$$) {
  D.$DvtThematicMap$$.$superclass$.$SetOptions$.call(this, $options$$250$$);
  (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnMapChange = "none", this.$Options$.animationOnDrill = "none");
  this.$Options$.skin || (this.$Options$.skin = "alta");
  (new D.$DvtThematicMapJsonParser$$(this)).parse(this.$Options$)
};
D.$JSCompiler_StaticMethods_getLayer$$ = function $$JSCompiler_StaticMethods_getLayer$$$($JSCompiler_StaticMethods_getLayer$self$$, $layerName$$27$$) {
  for(var $i$$850$$ = 0;$i$$850$$ < $JSCompiler_StaticMethods_getLayer$self$$.$_layers$.length;$i$$850$$++) {
    if($JSCompiler_StaticMethods_getLayer$self$$.$_layers$[$i$$850$$].$LayerName$ == $layerName$$27$$) {
      return $JSCompiler_StaticMethods_getLayer$self$$.$_layers$[$i$$850$$]
    }
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMap$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setAnimationDuration$ = function $$JSCompiler_prototypeAlias$$$$setAnimationDuration$$($attr$$21$$) {
  this.$_animationDuration$ = (0,window.parseFloat)($attr$$21$$)
};
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = (0,D.$JSCompiler_get$$)("$_animationDuration$");
D.$JSCompiler_prototypeAlias$$.$setFeaturesOff$ = function $$JSCompiler_prototypeAlias$$$$setFeaturesOff$$($attr$$23_featuresOff$$1$$) {
  $attr$$23_featuresOff$$1$$ = (0,window.parseInt)($attr$$23_featuresOff$$1$$);
  var $controls$$5$$ = this.$_displayedControls$;
  if(1 == $attr$$23_featuresOff$$1$$ || 3 == $attr$$23_featuresOff$$1$$ || 5 == $attr$$23_featuresOff$$1$$ || 7 == $attr$$23_featuresOff$$1$$) {
    $controls$$5$$ &= -17, this.$_panning$ = D.$JSCompiler_alias_FALSE$$
  }
  if(2 == $attr$$23_featuresOff$$1$$ || 3 == $attr$$23_featuresOff$$1$$ || 6 == $attr$$23_featuresOff$$1$$ || 7 == $attr$$23_featuresOff$$1$$) {
    $controls$$5$$ &= -4098, this.$_zooming$ = D.$JSCompiler_alias_FALSE$$
  }
  if(4 == $attr$$23_featuresOff$$1$$ || 5 == $attr$$23_featuresOff$$1$$ || 6 == $attr$$23_featuresOff$$1$$ || 7 == $attr$$23_featuresOff$$1$$) {
    $controls$$5$$ &= -257
  }
  this.$_displayedControls$ = $controls$$5$$
};
D.$JSCompiler_prototypeAlias$$.$setDrillMode$ = function $$JSCompiler_prototypeAlias$$$$setDrillMode$$($attr$$28$$) {
  this.$_drillMode$ = $attr$$28$$;
  this.$_eventHandler$.$setDrillMode$($attr$$28$$)
};
D.$JSCompiler_prototypeAlias$$.$PreRender$ = function $$JSCompiler_prototypeAlias$$$$PreRender$$() {
  D.$DvtThematicMap$$.$superclass$.$PreRender$.call(this);
  !this.$_isResize$ && this.$_pzcContainer$ && (this.$_layers$ = [], this.$_drilledRowKeys$ = [], this.$_initDrilled$ = {}, this.$_drillDataLayer$ = {}, this.$_childToParent$ = {}, this.$_drilled$ = [], this.removeChild(this.$_legendPanel$), this.$_legendButtonImages$ = this.$_legendXml$ = this.$_legend$ = this.$_legendPanel$ = D.$JSCompiler_alias_NULL$$, this.$_displayedControls$ = 16777215, this.$_panning$ = this.$_zooming$ = D.$JSCompiler_alias_TRUE$$, this.$_oldPzc$ = this.$_pzc$, this.$_areaLayers$ = 
  new D.$DvtContainer$$(this.$_context$), this.$_dataAreaLayers$ = new D.$DvtContainer$$(this.$_context$), this.$_dataPointLayers$ = new D.$DvtContainer$$(this.$_context$), this.$_labelLayers$ = new D.$DvtContainer$$(this.$_context$), (0,D.$JSCompiler_StaticMethods__createHandlers$$)(this), this.$_eventHandler$.$hideTooltip$())
};
D.$JSCompiler_StaticMethods__createHandlers$$ = function $$JSCompiler_StaticMethods__createHandlers$$$($JSCompiler_StaticMethods__createHandlers$self$$) {
  $JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$ = new D.$DvtThematicMapEventManager$$($JSCompiler_StaticMethods__createHandlers$self$$.$_context$, $JSCompiler_StaticMethods__createHandlers$self$$.$__dispatchEvent$, $JSCompiler_StaticMethods__createHandlers$self$$);
  $JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$.$addListeners$($JSCompiler_StaticMethods__createHandlers$self$$);
  (0,D.$DvtAgent$isTouchDevice$$)() ? $JSCompiler_StaticMethods__createHandlers$self$$.$_keyboardHandler$ = D.$JSCompiler_alias_NULL$$ : ($JSCompiler_StaticMethods__createHandlers$self$$.$_keyboardHandler$ = new D.$DvtThematicMapKeyboardHandler$$($JSCompiler_StaticMethods__createHandlers$self$$, $JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$), (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)($JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$, $JSCompiler_StaticMethods__createHandlers$self$$.$_keyboardHandler$))
};
D.$DvtThematicMap$$.prototype.$HandleLegendResize$ = function $$DvtThematicMap$$$$$HandleLegendResize$$($event$$747_x$$315$$) {
  (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) || ($event$$747_x$$315$$ = this.$_width$ - 5 - $event$$747_x$$315$$.getWidth(), this.$_legendPanel$.$setTranslateX$($event$$747_x$$315$$))
};
D.$DvtThematicMap$$.prototype.$_renderLegend$ = function $$DvtThematicMap$$$$$_renderLegend$$() {
  if(this.$_legendXml$) {
    this.$_legendPanel$ && (this.$_legendPanel$.$destroy$(), this.removeChild(this.$_legendPanel$));
    var $disclosed$$8_object$$inline_8750_rect$$inline_11088_west$$inline_8754_width$$inline_8752_x$$316$$ = "true" == this.$_legendXml$.$getAttr$("disclosed"), $isFixed$$2$$ = "fixed" == this.$_legendXml$.$getAttr$("display") || (0,D.$DvtAgent$isEnvironmentBatik$$)();
    if(!$isFixed$$2$$ || $disclosed$$8_object$$inline_8750_rect$$inline_11088_west$$inline_8754_width$$inline_8752_x$$316$$) {
      var $expandTooltip$$4_maxWidth$$31_overState$$18$$ = this.$_legendXml$.$getAttr$("maxWidth"), $collapseTooltip$$4_downState$$18_maxHeight$$22_percentIndex$$ = $expandTooltip$$4_maxWidth$$31_overState$$18$$.indexOf("%"), $expandTooltip$$4_maxWidth$$31_overState$$18$$ = -1 != $collapseTooltip$$4_downState$$18_maxHeight$$22_percentIndex$$ ? (0,window.parseFloat)($expandTooltip$$4_maxWidth$$31_overState$$18$$.substring(0, $collapseTooltip$$4_downState$$18_maxHeight$$22_percentIndex$$)) / 100 * 
      this.$_width$ : (0,window.parseFloat)($expandTooltip$$4_maxWidth$$31_overState$$18$$), $collapseTooltip$$4_downState$$18_maxHeight$$22_percentIndex$$ = this.$_height$ - 10;
      if("alta" == this.$_skinName$) {
        this.$_legendPanel$ = new D.$DvtPanelDrawer$$(this.$_context$, D.$JSCompiler_alias_NULL$$, this, "pd"), this.$_legendPanel$.$addEvtListener$("dvtPanelDrawerEvent", this.$HandleLegendEvent$, D.$JSCompiler_alias_FALSE$$, this), this.$_legendPanel$.$setMaxWidth$($expandTooltip$$4_maxWidth$$31_overState$$18$$), this.$_legendPanel$.$setMaxHeight$($collapseTooltip$$4_downState$$18_maxHeight$$22_percentIndex$$), this.$_legendPanel$.$_isFixed$ = $isFixed$$2$$, (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) ? 
        (this.$_legendPanel$.$_discloseDirection$ = "right", this.$_legendPanel$.$setTranslateX$(0)) : this.$_legendPanel$.$setTranslateX$(this.$_width$)
      }else {
        this.$_legendPanel$ = new D.$DvtCollapsiblePanel$$(this.$_context$, $expandTooltip$$4_maxWidth$$31_overState$$18$$, $collapseTooltip$$4_downState$$18_maxHeight$$22_percentIndex$$, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8745_alpha$$inline_11089_dim$$90_dims$$inline_8751_height$$inline_8753_legendCollapseDir_upState$$21$$, (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this), this.$getSubcomponentStyles$(), $disclosed$$8_object$$inline_8750_rect$$inline_11088_west$$inline_8754_width$$inline_8752_x$$316$$, 
        $isFixed$$2$$);
        this.$_legendPanel$.$addEvtListener$("dvtCollapsiblePanelEvent", this.$HandleLegendEvent$, D.$JSCompiler_alias_FALSE$$, this);
        this.$_legendPanel$.$addEvtListener$("dvtResizeEvent", this.$HandleLegendResize$, D.$JSCompiler_alias_FALSE$$, this);
        var $expandTooltip$$4_maxWidth$$31_overState$$18$$ = this.$_legendXml$.$getAttr$("expandTooltip"), $collapseTooltip$$4_downState$$18_maxHeight$$22_percentIndex$$ = this.$_legendXml$.$getAttr$("collapseTooltip"), $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8745_alpha$$inline_11089_dim$$90_dims$$inline_8751_height$$inline_8753_legendCollapseDir_upState$$21$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) ? "col_northwest" : "col_northeast", $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8745_alpha$$inline_11089_dim$$90_dims$$inline_8751_height$$inline_8753_legendCollapseDir_upState$$21$$ = 
        this.$_legendPanel$;
        $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8745_alpha$$inline_11089_dim$$90_dims$$inline_8751_height$$inline_8753_legendCollapseDir_upState$$21$$.$_expandTooltip$ = $expandTooltip$$4_maxWidth$$31_overState$$18$$;
        $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8745_alpha$$inline_11089_dim$$90_dims$$inline_8751_height$$inline_8753_legendCollapseDir_upState$$21$$.$_collapseTooltip$ = $collapseTooltip$$4_downState$$18_maxHeight$$22_percentIndex$$
      }
      this.$_legend$ = new D.DvtCommonLegend(this.$_context$, this.$_legendPanel$.$getMaxContentWidth$(), this.$_legendPanel$.$getMaxContentHeight$(), (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this), this.$_skinName$);
      this.$_legend$.$setXML$(this.$_legendXml$);
      this.$addChild$(this.$_legendPanel$);
      this.$addChild$(this.$_legend$);
      this.$_legend$.$render$();
      var $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$;
      if("alta" == this.$_skinName$) {
        $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8745_alpha$$inline_11089_dim$$90_dims$$inline_8751_height$$inline_8753_legendCollapseDir_upState$$21$$ = this.$_legend$.$getDimensions$();
        (0,D.$JSCompiler_StaticMethods_setMaxContainerHeight$$)(this.$_legendPanel$, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8745_alpha$$inline_11089_dim$$90_dims$$inline_8751_height$$inline_8753_legendCollapseDir_upState$$21$$.$h$);
        this.removeChild(this.$_legend$);
        var $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8745_alpha$$inline_11089_dim$$90_dims$$inline_8751_height$$inline_8753_legendCollapseDir_upState$$21$$ = new D.$DvtImage$$(this.$_context$, (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this).legendEna, 0, 0, 24, 24), $expandTooltip$$4_maxWidth$$31_overState$$18$$ = new D.$DvtImage$$(this.$_context$, (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this).legendOvr, 0, 0, 24, 24), $collapseTooltip$$4_downState$$18_maxHeight$$22_percentIndex$$ = 
        new D.$DvtImage$$(this.$_context$, (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this).legendDwn, 0, 0, 24, 24), $tip$$7$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$getBundle$(), "LEGEND");
        (0,D.$JSCompiler_StaticMethods_addPanel$$)(this.$_legendPanel$, this.$_legend$, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8745_alpha$$inline_11089_dim$$90_dims$$inline_8751_height$$inline_8753_legendCollapseDir_upState$$21$$, $expandTooltip$$4_maxWidth$$31_overState$$18$$, $collapseTooltip$$4_downState$$18_maxHeight$$22_percentIndex$$, $tip$$7$$, "legend");
        this.$_legendPanel$.$renderComponent$();
        $disclosed$$8_object$$inline_8750_rect$$inline_11088_west$$inline_8754_width$$inline_8752_x$$316$$ && this.$_legendPanel$.$setDisclosed$(D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$)
      }else {
        $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$ = this.$_legendPanel$, $disclosed$$8_object$$inline_8750_rect$$inline_11088_west$$inline_8754_width$$inline_8752_x$$316$$ = this.$_legend$, $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_scrollableContainer$.$addChild$($disclosed$$8_object$$inline_8750_rect$$inline_11088_west$$inline_8754_width$$inline_8752_x$$316$$), $disclosed$$8_object$$inline_8750_rect$$inline_11088_west$$inline_8754_width$$inline_8752_x$$316$$.$addEvtListener$("dvtResizeEvent", 
        $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$HandleResize$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$), $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8745_alpha$$inline_11089_dim$$90_dims$$inline_8751_height$$inline_8753_legendCollapseDir_upState$$21$$ = $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_scrollableContainer$.$getDimensions$(), $disclosed$$8_object$$inline_8750_rect$$inline_11088_west$$inline_8754_width$$inline_8752_x$$316$$ = 
        $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8745_alpha$$inline_11089_dim$$90_dims$$inline_8751_height$$inline_8753_legendCollapseDir_upState$$21$$.$w$ + 10, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8745_alpha$$inline_11089_dim$$90_dims$$inline_8751_height$$inline_8753_legendCollapseDir_upState$$21$$ = $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8745_alpha$$inline_11089_dim$$90_dims$$inline_8751_height$$inline_8753_legendCollapseDir_upState$$21$$.$h$ + 
        10, $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_height$ = $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8745_alpha$$inline_11089_dim$$90_dims$$inline_8751_height$$inline_8753_legendCollapseDir_upState$$21$$, $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_width$ = $disclosed$$8_object$$inline_8750_rect$$inline_11088_west$$inline_8754_width$$inline_8752_x$$316$$, $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_background$ ? 
        ($JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_background$.$setCmds$((0,D.$JSCompiler_StaticMethods__getOutlinePath$$)($JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$, $disclosed$$8_object$$inline_8750_rect$$inline_11088_west$$inline_8754_width$$inline_8752_x$$316$$, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8745_alpha$$inline_11089_dim$$90_dims$$inline_8751_height$$inline_8753_legendCollapseDir_upState$$21$$)), $disclosed$$8_object$$inline_8750_rect$$inline_11088_west$$inline_8754_width$$inline_8752_x$$316$$ = 
        "col_northwest" == $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_collapseDir$ || "col_southwest" == $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_collapseDir$, $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_buttonFrame$ && $disclosed$$8_object$$inline_8750_rect$$inline_11088_west$$inline_8754_width$$inline_8752_x$$316$$ && $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_buttonFrame$.$setTranslateX$($JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_width$)) : 
        ($disclosed$$8_object$$inline_8750_rect$$inline_11088_west$$inline_8754_width$$inline_8752_x$$316$$ = new D.$DvtPath$$($JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_context$, (0,D.$JSCompiler_StaticMethods__getOutlinePath$$)($JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$, $disclosed$$8_object$$inline_8750_rect$$inline_11088_west$$inline_8754_width$$inline_8752_x$$316$$, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8745_alpha$$inline_11089_dim$$90_dims$$inline_8751_height$$inline_8753_legendCollapseDir_upState$$21$$)), 
        $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8745_alpha$$inline_11089_dim$$90_dims$$inline_8751_height$$inline_8753_legendCollapseDir_upState$$21$$ = $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_styleMap$.borderAlpha, $disclosed$$8_object$$inline_8750_rect$$inline_11088_west$$inline_8754_width$$inline_8752_x$$316$$.$setSolidFill$($JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_bgColor$, $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_bgAlpha$), 
        $disclosed$$8_object$$inline_8750_rect$$inline_11088_west$$inline_8754_width$$inline_8752_x$$316$$.$setSolidStroke$($JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_borderColor$, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8745_alpha$$inline_11089_dim$$90_dims$$inline_8751_height$$inline_8753_legendCollapseDir_upState$$21$$), $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_background$ = $disclosed$$8_object$$inline_8750_rect$$inline_11088_west$$inline_8754_width$$inline_8752_x$$316$$, 
        $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$addChildAt$($JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_background$, 0), $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_isFixed$ || ($JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_buttonFrame$ = D.$DvtControlPanelLAFUtils$$.$createEmptyViewClosedFrame$($JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_context$, 
        25, $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_styleMap$, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_buttonFrame$.$setAlpha$($JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_styleMap$.borderAlpha), $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$addChild$($JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_buttonFrame$), $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_collapseExpandButton$ = 
        $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.isCollapsed() ? D.$DvtButtonLAFUtils$$.$createExpandButton$($JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_context$, $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_buttonImages$, 25, $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_styleMap$, D.$JSCompiler_alias_FALSE$$) : D.$DvtButtonLAFUtils$$.$createCollapseButton$($JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_context$, 
        $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_buttonImages$, 25, $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_styleMap$, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_buttonFrame$.$addChild$($JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_collapseExpandButton$), "col_northwest" == $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_collapseDir$ || 
        "col_southwest" == $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_collapseDir$ || ($JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_buttonFrame$.$setTranslateY$(25), $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_buttonFrame$.$setRotation$(-window.Math.PI)), (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_context$) && $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_buttonFrame$.$setTranslateX$($JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_width$), 
        (0,D.$DvtAgent$isTouchDevice$$)() ? $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$) : ($JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, 
        $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$), $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$OnButtonHoverOver$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$), 
        $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$OnButtonHoverOut$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$)))), $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$_collapse$ && (0,D.$JSCompiler_StaticMethods__collapseExpand$$)($JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$, 
        D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$ = this.$_legendPanel$.$getDimensions$(), $disclosed$$8_object$$inline_8750_rect$$inline_11088_west$$inline_8754_width$$inline_8752_x$$316$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) ? 5 : this.$_width$ - 5 - $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$w$ - $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.x, (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_legendPanel$, 
        $disclosed$$8_object$$inline_8750_rect$$inline_11088_west$$inline_8754_width$$inline_8752_x$$316$$, 5), $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$w$ += 5
      }
      if(this.$_isFixedLegend$ = $isFixed$$2$$) {
        $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$ || ($JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$ = this.$_legendPanel$.$getDimensions$()), this.$_legendWidth$ = $JSCompiler_StaticMethods_addContent$self$$inline_8749_legendPanelDim$$.$w$
      }
    }
  }
};
D.$DvtThematicMap$$.prototype.$Render$ = function $$DvtThematicMap$$$$$Render$$() {
  D.$DvtThematicMap$$.$superclass$.$Render$.call(this);
  var $pzcContainer$$ = new D.$DvtContainer$$(this.$_context$), $cpContainer$$ = new D.$DvtContainer$$(this.$_context$);
  this.$_pzc$ = this.$_panZoomCanvas$;
  this.$_pzc$.$addChild$($pzcContainer$$);
  this.$_pzc$.$_contentPane$.$addChild$($cpContainer$$);
  this.$_render$($pzcContainer$$, $cpContainer$$);
  if(this.$_topLayer$) {
    (this.$_controlPanel$ = this.$_pzc$.$_controlPanel$) && this.$_pzc$.$addChild$(this.$_controlPanel$);
    (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
    var $bounds$$139$$ = new D.$DvtRectangle$$(0, 0, this.$_width$, this.$_height$);
    if(!this.$_bRendered$ && !this.$_oldPzc$) {
      D.$DvtBlackBoxAnimationHandler$$.isSupported(this.$_animationOnDisplay$) && (this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$(this.$_context$, this.$_animationOnDisplay$, this.$_pzc$, $bounds$$139$$, this.$_animationDuration$))
    }else {
      var $anim$$40$$ = D.$JSCompiler_alias_NULL$$;
      if(this.$_bBaseMapChanged$ && !this.$_isResize$) {
        $anim$$40$$ = this.$_animationOnMapChange$
      }else {
        if(this.$_topLayer$ && this.$_topLayer$.$LayerName$ != this.$_oldTopLayerName$ && ($anim$$40$$ = this.$_topLayer$.$getAnimation$(), !$anim$$40$$)) {
          var $dataLayers$$7$$ = this.$_topLayer$.$DataLayers$, $i$$851$$;
          for($i$$851$$ in $dataLayers$$7$$) {
            if($dataLayers$$7$$[$i$$851$$].$getAnimation$()) {
              $anim$$40$$ = $dataLayers$$7$$[$i$$851$$].$getAnimation$();
              break
            }
          }
        }
      }
      $anim$$40$$ && D.$DvtBlackBoxAnimationHandler$$.isSupported($anim$$40$$) ? (this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$_context$, $anim$$40$$, this.$_oldPzc$, this.$_pzc$, $bounds$$139$$, this.$_animationDuration$)) && this.$addChild$(this.$_oldPzc$) : (this.$_pzc$.$_contentPane$.removeChild(this.$_cpContainer$), this.$OnAnimationEnd$())
    }
    this.$_animation$ && (this.$_controlPanel$ && this.$addChild$(this.$_controlPanel$), this.$_eventHandler$.$hideTooltip$(), this.$_eventHandler$.$removeListeners$(this), this.$_animation$.$setOnEnd$(this.$OnAnimationEnd$, this), this.$_animation$.play(D.$JSCompiler_alias_TRUE$$));
    this.$_pzcContainer$ = $pzcContainer$$;
    this.$_cpContainer$ = $cpContainer$$;
    this.$_topLayer$ && (this.$_oldTopLayerName$ = this.$_topLayer$.$LayerName$);
    this.$_bRendered$ = D.$JSCompiler_alias_TRUE$$
  }
};
D.$DvtThematicMap$$.prototype.$_render$ = function $$DvtThematicMap$$$$$_render$$($pzcContainer$$1$$, $cpContainer$$1$$) {
  this.$_renderLegend$();
  $cpContainer$$1$$.$addChild$(this.$_areaLayers$);
  $cpContainer$$1$$.$addChild$(this.$_dataAreaLayers$);
  this.$_isMarkerZoomBehaviorFixed$ ? $pzcContainer$$1$$.$addChild$(this.$_dataPointLayers$) : $cpContainer$$1$$.$addChild$(this.$_dataPointLayers$);
  $pzcContainer$$1$$.$addChild$(this.$_labelLayers$);
  var $fittedZoom$$inline_8766_navigable$$inline_8757_navigables$$11_pzcMatrix$$21_zoomPadding$$inline_11094$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
  this.$_topLayerRendered$ = D.$JSCompiler_alias_FALSE$$;
  for(var $i$$852_mapDim$$inline_11095$$ = 0;$i$$852_mapDim$$inline_11095$$ < this.$_layers$.length;$i$$852_mapDim$$inline_11095$$++) {
    var $layer$$20_pzcDim$$inline_11096$$ = this.$_layers$[$i$$852_mapDim$$inline_11095$$];
    if(!this.$_topLayerRendered$ && $layer$$20_pzcDim$$inline_11096$$ instanceof D.$DvtMapAreaLayer$$ || !($layer$$20_pzcDim$$inline_11096$$ instanceof D.$DvtMapAreaLayer$$)) {
      $layer$$20_pzcDim$$inline_11096$$.$render$($fittedZoom$$inline_8766_navigable$$inline_8757_navigables$$11_pzcMatrix$$21_zoomPadding$$inline_11094$$), !this.$_topLayerRendered$ && $layer$$20_pzcDim$$inline_11096$$ instanceof D.$DvtMapAreaLayer$$ && (this.$_topLayerRendered$ = D.$JSCompiler_alias_TRUE$$, this.$_topLayer$ = $layer$$20_pzcDim$$inline_11096$$)
    }
  }
  this.$_topLayer$ && ($fittedZoom$$inline_8766_navigable$$inline_8757_navigables$$11_pzcMatrix$$21_zoomPadding$$inline_11094$$ = (0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this), 0 == $fittedZoom$$inline_8766_navigable$$inline_8757_navigables$$11_pzcMatrix$$21_zoomPadding$$inline_11094$$.length && ($fittedZoom$$inline_8766_navigable$$inline_8757_navigables$$11_pzcMatrix$$21_zoomPadding$$inline_11094$$ = (0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this)), this.$_keyboardHandler$ && 
  ($fittedZoom$$inline_8766_navigable$$inline_8757_navigables$$11_pzcMatrix$$21_zoomPadding$$inline_11094$$ = $fittedZoom$$inline_8766_navigable$$inline_8757_navigables$$11_pzcMatrix$$21_zoomPadding$$inline_11094$$[0]) && D.$DvtThematicMapEventManager$$.$superclass$.$setFocus$.call(this.$_eventHandler$, $fittedZoom$$inline_8766_navigable$$inline_8757_navigables$$11_pzcMatrix$$21_zoomPadding$$inline_11094$$), this.$_pzc$.$setMinZoom$(D.$JSCompiler_alias_NULL$$), this.$_pzc$.$setMaxZoom$(D.$JSCompiler_alias_NULL$$), 
  this.$_pzc$.$_bZoomingEnabled$ = D.$JSCompiler_alias_TRUE$$, this.$_pzc$.$_bPanningEnabled$ = D.$JSCompiler_alias_TRUE$$, !this.$_bBaseMapChanged$ && !this.$_isResize$ && this.$_initialZoom$ != D.$JSCompiler_alias_NULL$$ ? ((0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_pzc$, this.$_initialZoom$), (0,D.$JSCompiler_StaticMethods_panTo$$)(this.$_pzc$, this.$_initialCenterX$, this.$_initialCenterY$)) : this.$_pzc$.$zoomToFit$(D.$JSCompiler_alias_NULL$$, this.$_topLayer$.$getLayerDim$()), (0,D.$JSCompiler_StaticMethods__processInitialDrilled$$)(this), 
  $fittedZoom$$inline_8766_navigable$$inline_8757_navigables$$11_pzcMatrix$$21_zoomPadding$$inline_11094$$ = this.$_pzc$.$_zoomToFitPadding$, $i$$852_mapDim$$inline_11095$$ = this.$_topLayer$.$getLayerDim$(), $layer$$20_pzcDim$$inline_11096$$ = this.$_pzc$.$getSize$(), $layer$$20_pzcDim$$inline_11096$$.$w$ = this.$_isFixedLegend$ ? $layer$$20_pzcDim$$inline_11096$$.$w$ - this.$_legendWidth$ : $layer$$20_pzcDim$$inline_11096$$.$w$, $fittedZoom$$inline_8766_navigable$$inline_8757_navigables$$11_pzcMatrix$$21_zoomPadding$$inline_11094$$ = 
  window.Math.min(($layer$$20_pzcDim$$inline_11096$$.$w$ - 2 * $fittedZoom$$inline_8766_navigable$$inline_8757_navigables$$11_pzcMatrix$$21_zoomPadding$$inline_11094$$) / $i$$852_mapDim$$inline_11095$$.$w$, ($layer$$20_pzcDim$$inline_11096$$.$h$ - 2 * $fittedZoom$$inline_8766_navigable$$inline_8757_navigables$$11_pzcMatrix$$21_zoomPadding$$inline_11094$$) / $i$$852_mapDim$$inline_11095$$.$h$), this.$_pzc$.$setMinZoom$($fittedZoom$$inline_8766_navigable$$inline_8757_navigables$$11_pzcMatrix$$21_zoomPadding$$inline_11094$$), 
  this.$_pzc$.$setMaxZoom$($fittedZoom$$inline_8766_navigable$$inline_8757_navigables$$11_pzcMatrix$$21_zoomPadding$$inline_11094$$ * (this.$_zooming$ ? this.$_maxZoomFactor$ : 1)), this.$_pzc$.$_bZoomingEnabled$ = this.$_zooming$, this.$_pzc$.$_bPanningEnabled$ = this.$_panning$)
};
D.$JSCompiler_StaticMethods_OnUpdateLayerEnd$$ = function $$JSCompiler_StaticMethods_OnUpdateLayerEnd$$$($JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$) {
  $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_topLayer$.$_isolatedArea$ && $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_pzc$.$zoomToFit$(D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_topLayer$.$getLayerDim$());
  (0,D.$JSCompiler_StaticMethods__processInitialDrilled$$)($JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$);
  $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_initialZooming$ && (0,D.$JSCompiler_StaticMethods__zoomData$$)($JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$)
};
D.$DvtThematicMap$$.prototype.$setRolloverBehavior$ = (0,D.$JSCompiler_set$$)("$_rolloverBehavior$");
D.$DvtThematicMap$$.prototype.$GetXmlDomParser$ = function $$DvtThematicMap$$$$$GetXmlDomParser$$() {
  return new D.$DvtThematicMapParser$$(this)
};
D.$JSCompiler_StaticMethods__transformContainers$$ = function $$JSCompiler_StaticMethods__transformContainers$$$($JSCompiler_StaticMethods__transformContainers$self$$, $pzcMatrix$$22$$) {
  var $mat$$52$$ = new D.$DvtMatrix$$;
  $mat$$52$$.translate($pzcMatrix$$22$$.$_tx$, $pzcMatrix$$22$$.$_ty$);
  $JSCompiler_StaticMethods__transformContainers$self$$.$_isMarkerZoomBehaviorFixed$ && $JSCompiler_StaticMethods__transformContainers$self$$.$_dataPointLayers$.$setMatrix$($mat$$52$$);
  $JSCompiler_StaticMethods__transformContainers$self$$.$_labelLayers$.$setMatrix$($mat$$52$$)
};
D.$DvtThematicMap$$.prototype.$HandleLegendEvent$ = function $$DvtThematicMap$$$$$HandleLegendEvent$$($event$$748$$) {
  var $spEvent$$1$$ = new D.$DvtSetPropertyEvent$$;
  (0,D.$JSCompiler_StaticMethods_addParam$$)($spEvent$$1$$, D.DvtCommonLegend.$LEGEND_DISCLOSED_KEY$, "show" == $event$$748$$.$getSubType$());
  this.$__dispatchEvent$($spEvent$$1$$)
};
D.$JSCompiler_StaticMethods__updateAnimator$$ = function $$JSCompiler_StaticMethods__updateAnimator$$$($JSCompiler_StaticMethods__updateAnimator$self$$, $animator$$130_event$$749$$, $bRecenterObjs_transMat$$) {
  if($animator$$130_event$$749$$ = $animator$$130_event$$749$$.$_animator$) {
    var $contentPane$$2$$ = $JSCompiler_StaticMethods__updateAnimator$self$$.$_pzc$.$_contentPane$, $mat$$53$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$130_event$$749$$, $contentPane$$2$$, $contentPane$$2$$.$getMatrix$);
    $bRecenterObjs_transMat$$ && ($JSCompiler_StaticMethods__updateAnimator$self$$.$_currentAnimMatrix$ = $contentPane$$2$$.$getMatrix$(), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$130_event$$749$$, "typeMatrix", $JSCompiler_StaticMethods__updateAnimator$self$$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_getCenteredObjsMatrix$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_setCenteredObjsMatrix$, $mat$$53$$));
    $bRecenterObjs_transMat$$ = new D.$DvtMatrix$$(1, 0, 0, 1, $mat$$53$$.$_tx$, $mat$$53$$.$_ty$);
    $JSCompiler_StaticMethods__updateAnimator$self$$.$_isMarkerZoomBehaviorFixed$ && (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$130_event$$749$$, "typeMatrix", $JSCompiler_StaticMethods__updateAnimator$self$$.$_dataPointLayers$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_dataPointLayers$.$getMatrix$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_dataPointLayers$.$setMatrix$, $bRecenterObjs_transMat$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$130_event$$749$$, "typeMatrix", $JSCompiler_StaticMethods__updateAnimator$self$$.$_labelLayers$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_labelLayers$.$getMatrix$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_labelLayers$.$setMatrix$, $bRecenterObjs_transMat$$)
  }
};
D.$DvtThematicMap$$.prototype.$HandleZoomEvent$ = function $$DvtThematicMap$$$$$HandleZoomEvent$$($event$$750_minMaxY$$inline_8810_padding$$inline_8800_viewportDim$$inline_8802$$) {
  switch($event$$750_minMaxY$$inline_8810_padding$$inline_8800_viewportDim$$inline_8802$$.$getSubType$()) {
    case "adjustPanConstraints":
      if(this.$_panning$) {
        var $i$$853_zoom$$inline_8799_zoomedMapH$$inline_8807$$ = $event$$750_minMaxY$$inline_8810_padding$$inline_8800_viewportDim$$inline_8802$$.$_newZoom$;
        $event$$750_minMaxY$$inline_8810_padding$$inline_8800_viewportDim$$inline_8802$$ = this.$_pzc$.$_zoomToFitPadding$;
        var $pzcDim$$inline_8801_pzcMatrix$$23_zoomedMapY$$inline_8805$$ = this.$_pzc$.$getSize$();
        $event$$750_minMaxY$$inline_8810_padding$$inline_8800_viewportDim$$inline_8802$$ = new D.$DvtRectangle$$($event$$750_minMaxY$$inline_8810_padding$$inline_8800_viewportDim$$inline_8802$$, $event$$750_minMaxY$$inline_8810_padding$$inline_8800_viewportDim$$inline_8802$$, $pzcDim$$inline_8801_pzcMatrix$$23_zoomedMapY$$inline_8805$$.$w$ - 2 * $event$$750_minMaxY$$inline_8810_padding$$inline_8800_viewportDim$$inline_8802$$, $pzcDim$$inline_8801_pzcMatrix$$23_zoomedMapY$$inline_8805$$.$h$ - 2 * 
        $event$$750_minMaxY$$inline_8810_padding$$inline_8800_viewportDim$$inline_8802$$);
        var $legendAdjust$$inline_8808_mapDim$$inline_8803$$ = this.$_topLayer$.$getLayerDim$(), $minMaxX$$inline_8809_zoomedMapX$$inline_8804$$ = $legendAdjust$$inline_8808_mapDim$$inline_8803$$.x * $i$$853_zoom$$inline_8799_zoomedMapH$$inline_8807$$, $pzcDim$$inline_8801_pzcMatrix$$23_zoomedMapY$$inline_8805$$ = $legendAdjust$$inline_8808_mapDim$$inline_8803$$.y * $i$$853_zoom$$inline_8799_zoomedMapH$$inline_8807$$, $zoomedMapW$$inline_8806$$ = $legendAdjust$$inline_8808_mapDim$$inline_8803$$.$w$ * 
        $i$$853_zoom$$inline_8799_zoomedMapH$$inline_8807$$, $i$$853_zoom$$inline_8799_zoomedMapH$$inline_8807$$ = $legendAdjust$$inline_8808_mapDim$$inline_8803$$.$h$ * $i$$853_zoom$$inline_8799_zoomedMapH$$inline_8807$$;
        $zoomedMapW$$inline_8806$$ > $event$$750_minMaxY$$inline_8810_padding$$inline_8800_viewportDim$$inline_8802$$.$w$ ? (this.$_pzc$.$_minPanX$ = $event$$750_minMaxY$$inline_8810_padding$$inline_8800_viewportDim$$inline_8802$$.x + $event$$750_minMaxY$$inline_8810_padding$$inline_8800_viewportDim$$inline_8802$$.$w$ - ($minMaxX$$inline_8809_zoomedMapX$$inline_8804$$ + $zoomedMapW$$inline_8806$$), this.$_pzc$.$_maxPanX$ = $event$$750_minMaxY$$inline_8810_padding$$inline_8800_viewportDim$$inline_8802$$.x - 
        $minMaxX$$inline_8809_zoomedMapX$$inline_8804$$) : ($legendAdjust$$inline_8808_mapDim$$inline_8803$$ = 0, this.$_isFixedLegend$ && ((0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) ? $legendAdjust$$inline_8808_mapDim$$inline_8803$$ = this.$_isZoomingToFit$ ? 2 * -this.$_legendWidth$ : -this.$_legendWidth$ : this.$_isZoomingToFit$ || ($legendAdjust$$inline_8808_mapDim$$inline_8803$$ = this.$_legendWidth$)), $minMaxX$$inline_8809_zoomedMapX$$inline_8804$$ = ($event$$750_minMaxY$$inline_8810_padding$$inline_8800_viewportDim$$inline_8802$$.x + 
        $event$$750_minMaxY$$inline_8810_padding$$inline_8800_viewportDim$$inline_8802$$.$w$ - $legendAdjust$$inline_8808_mapDim$$inline_8803$$) / 2 - ($minMaxX$$inline_8809_zoomedMapX$$inline_8804$$ + $zoomedMapW$$inline_8806$$ / 2), this.$_pzc$.$_minPanX$ = $minMaxX$$inline_8809_zoomedMapX$$inline_8804$$, this.$_pzc$.$_maxPanX$ = $minMaxX$$inline_8809_zoomedMapX$$inline_8804$$);
        $i$$853_zoom$$inline_8799_zoomedMapH$$inline_8807$$ > $event$$750_minMaxY$$inline_8810_padding$$inline_8800_viewportDim$$inline_8802$$.$h$ ? (this.$_pzc$.$_minPanY$ = $event$$750_minMaxY$$inline_8810_padding$$inline_8800_viewportDim$$inline_8802$$.y + $event$$750_minMaxY$$inline_8810_padding$$inline_8800_viewportDim$$inline_8802$$.$h$ - ($pzcDim$$inline_8801_pzcMatrix$$23_zoomedMapY$$inline_8805$$ + $i$$853_zoom$$inline_8799_zoomedMapH$$inline_8807$$), this.$_pzc$.$_maxPanY$ = $event$$750_minMaxY$$inline_8810_padding$$inline_8800_viewportDim$$inline_8802$$.y - 
        $pzcDim$$inline_8801_pzcMatrix$$23_zoomedMapY$$inline_8805$$) : ($event$$750_minMaxY$$inline_8810_padding$$inline_8800_viewportDim$$inline_8802$$ = ($event$$750_minMaxY$$inline_8810_padding$$inline_8800_viewportDim$$inline_8802$$.y + $event$$750_minMaxY$$inline_8810_padding$$inline_8800_viewportDim$$inline_8802$$.$h$) / 2 - ($pzcDim$$inline_8801_pzcMatrix$$23_zoomedMapY$$inline_8805$$ + $i$$853_zoom$$inline_8799_zoomedMapH$$inline_8807$$ / 2), this.$_pzc$.$_minPanY$ = $event$$750_minMaxY$$inline_8810_padding$$inline_8800_viewportDim$$inline_8802$$, 
        this.$_pzc$.$_maxPanY$ = $event$$750_minMaxY$$inline_8810_padding$$inline_8800_viewportDim$$inline_8802$$)
      }
      break;
    case "zooming":
    ;
    case "elasticAnimBegin":
      (0,D.$JSCompiler_StaticMethods__updateAnimator$$)(this, $event$$750_minMaxY$$inline_8810_padding$$inline_8800_viewportDim$$inline_8802$$, D.$JSCompiler_alias_TRUE$$);
      break;
    case "zoomed":
      if($event$$750_minMaxY$$inline_8810_padding$$inline_8800_viewportDim$$inline_8802$$.$_newZoom$ != D.$JSCompiler_alias_NULL$$) {
        $pzcDim$$inline_8801_pzcMatrix$$23_zoomedMapY$$inline_8805$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
        (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$750_minMaxY$$inline_8810_padding$$inline_8800_viewportDim$$inline_8802$$, "panX", $pzcDim$$inline_8801_pzcMatrix$$23_zoomedMapY$$inline_8805$$.$_tx$);
        (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$750_minMaxY$$inline_8810_padding$$inline_8800_viewportDim$$inline_8802$$, "panY", $pzcDim$$inline_8801_pzcMatrix$$23_zoomedMapY$$inline_8805$$.$_ty$);
        $event$$750_minMaxY$$inline_8810_padding$$inline_8800_viewportDim$$inline_8802$$.$_animator$ = D.$JSCompiler_alias_NULL$$;
        this.$__dispatchEvent$($event$$750_minMaxY$$inline_8810_padding$$inline_8800_viewportDim$$inline_8802$$);
        (0,D.$JSCompiler_StaticMethods__transformContainers$$)(this, $pzcDim$$inline_8801_pzcMatrix$$23_zoomedMapY$$inline_8805$$);
        for($i$$853_zoom$$inline_8799_zoomedMapH$$inline_8807$$ = 0;$i$$853_zoom$$inline_8799_zoomedMapH$$inline_8807$$ < this.$_layers$.length;$i$$853_zoom$$inline_8799_zoomedMapH$$inline_8807$$++) {
          this.$_layers$[$i$$853_zoom$$inline_8799_zoomedMapH$$inline_8807$$].$HandleZoomEvent$($event$$750_minMaxY$$inline_8810_padding$$inline_8800_viewportDim$$inline_8802$$, $pzcDim$$inline_8801_pzcMatrix$$23_zoomedMapY$$inline_8805$$)
        }
      }
      break;
    case "zoomAndCenter":
      (0,D.$JSCompiler_StaticMethods_fitSelectedRegions$$)(this);
      break;
    case "zoomToFitBegin":
      this.$_isZoomingToFit$ = D.$JSCompiler_alias_TRUE$$;
      this.$_isFixedLegend$ && this.$_pzc$.$setSize$(this.$_width$ - this.$_legendWidth$, this.$_height$, D.$JSCompiler_alias_TRUE$$);
      break;
    case "zoomToFitEnd":
      this.$_isZoomingToFit$ = D.$JSCompiler_alias_FALSE$$, this.$_isFixedLegend$ && this.$_pzc$.$setSize$(this.$_width$, this.$_height$, D.$JSCompiler_alias_TRUE$$), this.$__dispatchEvent$(new D.$DvtZoomEvent$$)
  }
};
D.$DvtThematicMap$$.prototype.$HandlePanEvent$ = function $$DvtThematicMap$$$$$HandlePanEvent$$($event$$751_i$$854_stroke$$109$$) {
  var $subType$$8$$ = $event$$751_i$$854_stroke$$109$$.$getSubType$();
  if("elasticAnimBegin" == $subType$$8$$) {
    (0,D.$JSCompiler_StaticMethods__updateAnimator$$)(this, $event$$751_i$$854_stroke$$109$$, D.$JSCompiler_alias_FALSE$$)
  }else {
    if("panned" == $subType$$8$$ && $event$$751_i$$854_stroke$$109$$.$_newX$ != D.$JSCompiler_alias_NULL$$) {
      var $pzcMatrix$$24_styleMap$$97$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$751_i$$854_stroke$$109$$, "zoom", this.$_pzc$.$getZoom$());
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$751_i$$854_stroke$$109$$, "panX", $pzcMatrix$$24_styleMap$$97$$.$_tx$);
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$751_i$$854_stroke$$109$$, "panY", $pzcMatrix$$24_styleMap$$97$$.$_ty$);
      $event$$751_i$$854_stroke$$109$$.$_animator$ = D.$JSCompiler_alias_NULL$$;
      this.$__dispatchEvent$($event$$751_i$$854_stroke$$109$$);
      (0,D.$JSCompiler_StaticMethods__transformContainers$$)(this, $pzcMatrix$$24_styleMap$$97$$);
      for($event$$751_i$$854_stroke$$109$$ = 0;$event$$751_i$$854_stroke$$109$$ < this.$_layers$.length;$event$$751_i$$854_stroke$$109$$++) {
        this.$_layers$[$event$$751_i$$854_stroke$$109$$].$HandlePanEvent$($pzcMatrix$$24_styleMap$$97$$)
      }
    }
  }
  this.$_legendPanel$ && ("alta" == this.$_skinName$ ? "dragPanBegin" === $subType$$8$$ ? this.$_legendPanel$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$) : "dragPanEnd" === $subType$$8$$ && this.$_legendPanel$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$) : ($pzcMatrix$$24_styleMap$$97$$ = this.$getSubcomponentStyles$(), $event$$751_i$$854_stroke$$109$$ = this.$_legendPanel$.$_background$.$getStroke$().clone(), "dragPanBegin" === $subType$$8$$ ? (this.$_legend$.$setAlpha$($pzcMatrix$$24_styleMap$$97$$.backgroundDragAlpha), 
  $event$$751_i$$854_stroke$$109$$.$setAlpha$($pzcMatrix$$24_styleMap$$97$$.borderDragAlpha), this.$_legendPanel$.$_background$.$setStroke$($event$$751_i$$854_stroke$$109$$), this.$_legendPanel$.$_buttonFrame$ && this.$_legendPanel$.$_buttonFrame$.$setAlpha$($pzcMatrix$$24_styleMap$$97$$.borderDragAlpha), this.$_legendPanel$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$)) : "dragPanEnd" === $subType$$8$$ && (this.$_legend$.$setAlpha$(1), $event$$751_i$$854_stroke$$109$$.$setAlpha$($pzcMatrix$$24_styleMap$$97$$.borderAlpha), 
  this.$_legendPanel$.$_background$.$setStroke$($event$$751_i$$854_stroke$$109$$), this.$_legendPanel$.$_buttonFrame$ && this.$_legendPanel$.$_buttonFrame$.$setAlpha$($pzcMatrix$$24_styleMap$$97$$.borderAlpha), this.$_legendPanel$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$))))
};
D.$DvtThematicMap$$.prototype.$GetControlPanelBehavior$ = function $$DvtThematicMap$$$$$GetControlPanelBehavior$$() {
  return"none" == this.$_drillMode$ && !this.$_zooming$ && (!this.$_panning$ || "alta" == this.$_skinName$) ? "hidden" : D.$DvtThematicMap$$.$superclass$.$GetControlPanelBehavior$.call(this)
};
D.$DvtThematicMap$$.prototype.$GetControlPanel$ = function $$DvtThematicMap$$$$$GetControlPanel$$() {
  var $cpBehavior$$3$$ = this.$GetControlPanelBehavior$();
  return"hidden" != $cpBehavior$$3$$ ? new D.$DvtThematicMapControlPanel$$(this.$_context$, this, "initCollapsed" == $cpBehavior$$3$$ ? 1 : 2) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__processInitialDrilled$$ = function $$JSCompiler_StaticMethods__processInitialDrilled$$$($JSCompiler_StaticMethods__processInitialDrilled$self$$) {
  $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_processingInitDrilled$ = D.$JSCompiler_alias_TRUE$$;
  for(var $i$$855$$ = 0;$i$$855$$ < $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_layers$.length;$i$$855$$++) {
    var $layerName$$29$$ = $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_layers$[$i$$855$$].$LayerName$;
    $layerName$$29$$ in $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_initDrilled$ && ($JSCompiler_StaticMethods__processInitialDrilled$self$$.$_selectedAreas$[$layerName$$29$$] = $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_initDrilled$[$layerName$$29$$][1], $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_clickedLayerName$ = $layerName$$29$$, $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_clickedDataLayerId$ = $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_initDrilled$[$layerName$$29$$][0], 
    $JSCompiler_StaticMethods__processInitialDrilled$self$$.$drillDown$())
  }
  $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_processingInitDrilled$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtThematicMap$$.prototype.$resetMap$ = function $$DvtThematicMap$$$$$resetMap$$() {
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
  for(var $animator$$inline_8813_removeObjs$$ = [], $addObjs$$ = [], $i$$856_j$$126$$ = this.$_layers$.length - 1;-1 < $i$$856_j$$126$$;$i$$856_j$$126$$--) {
    this.$_layers$[$i$$856_j$$126$$].$LayerName$ == this.$_topLayer$.$LayerName$ ? this.$_layers$[$i$$856_j$$126$$].reset($addObjs$$) : this.$_layers$[$i$$856_j$$126$$].reset($animator$$inline_8813_removeObjs$$)
  }
  for($i$$856_j$$126$$ = 0;$i$$856_j$$126$$ < $animator$$inline_8813_removeObjs$$.length;$i$$856_j$$126$$++) {
    if($animator$$inline_8813_removeObjs$$[$i$$856_j$$126$$]) {
      var $parent$$92$$ = $animator$$inline_8813_removeObjs$$[$i$$856_j$$126$$].getParent();
      $parent$$92$$ && $parent$$92$$.removeChild($animator$$inline_8813_removeObjs$$[$i$$856_j$$126$$])
    }
  }
  for($i$$856_j$$126$$ = 0;$i$$856_j$$126$$ < $addObjs$$.length;$i$$856_j$$126$$++) {
    $addObjs$$[$i$$856_j$$126$$] && $addObjs$$[$i$$856_j$$126$$].$setAlpha$(1)
  }
  this.$_drilledRowKeys$ = [];
  $animator$$inline_8813_removeObjs$$ = new D.$DvtAnimator$$(this.$_context$, 0.3);
  this.$_pzc$.$zoomToFit$($animator$$inline_8813_removeObjs$$);
  $animator$$inline_8813_removeObjs$$.play();
  this.$_drilled$ = [];
  this.$_controlPanel$ && "none" != this.$_drillMode$ && ((0,D.$JSCompiler_StaticMethods_setEnabledDrillDownButton$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_setEnabledDrillUpButton$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$))
};
D.$JSCompiler_StaticMethods__zoomData$$ = function $$JSCompiler_StaticMethods__zoomData$$$($JSCompiler_StaticMethods__zoomData$self$$) {
  var $areaBounds_bounds$$140$$ = $JSCompiler_StaticMethods__zoomData$self$$.$_dataAreaLayers$.$getDimensions$(), $pointBounds$$ = $JSCompiler_StaticMethods__zoomData$self$$.$_dataPointLayers$.$getDimensions$();
  if($JSCompiler_StaticMethods__zoomData$self$$.$_isMarkerZoomBehaviorFixed$) {
    var $mat$$54$$ = $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$_contentPane$.$getMatrix$();
    $pointBounds$$.$w$ /= $mat$$54$$.$_a$;
    $pointBounds$$.$h$ /= $mat$$54$$.$_d$;
    $pointBounds$$.x /= $mat$$54$$.$_a$;
    $pointBounds$$.y /= $mat$$54$$.$_d$
  }
  $areaBounds_bounds$$140$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)($areaBounds_bounds$$140$$, $pointBounds$$);
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)($JSCompiler_StaticMethods__zoomData$self$$);
  (0,D.$DvtAgent$isEnvironmentBrowser$$)() && ($JSCompiler_StaticMethods__zoomData$self$$.$_animation$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods__zoomData$self$$.$_context$, 0.3));
  0 < $areaBounds_bounds$$140$$.$w$ && 0 < $areaBounds_bounds$$140$$.$h$ ? $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$zoomToFit$($JSCompiler_StaticMethods__zoomData$self$$.$_animation$, $areaBounds_bounds$$140$$) : $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$zoomToFit$($JSCompiler_StaticMethods__zoomData$self$$.$_animation$, $JSCompiler_StaticMethods__zoomData$self$$.$_topLayer$.$getLayerDim$());
  $JSCompiler_StaticMethods__zoomData$self$$.$_animation$ && $JSCompiler_StaticMethods__zoomData$self$$.$_animation$.play()
};
D.$DvtThematicMap$$.prototype.$_zoomToFitBounds$ = function $$DvtThematicMap$$$$$_zoomToFitBounds$$($bounds$$141$$) {
  var $animator$$131$$ = new D.$DvtAnimator$$(this.$_context$, 0.3);
  this.$_pzc$.$zoomToFit$($animator$$131$$, $bounds$$141$$);
  $animator$$131$$.play()
};
D.$JSCompiler_StaticMethods_fitSelectedRegions$$ = function $$JSCompiler_StaticMethods_fitSelectedRegions$$$($JSCompiler_StaticMethods_fitSelectedRegions$self$$) {
  if($JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_clickedDataLayerId$) {
    var $dataLayer$$29_selection$$36_selectionHandler$$13$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)($JSCompiler_StaticMethods_fitSelectedRegions$self$$, $JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_clickedLayerName$).$getDataLayer$($JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_clickedDataLayerId$);
    if($dataLayer$$29_selection$$36_selectionHandler$$13$$ && ($dataLayer$$29_selection$$36_selectionHandler$$13$$ = $dataLayer$$29_selection$$36_selectionHandler$$13$$.$_selectionHandler$)) {
      for(var $dataLayer$$29_selection$$36_selectionHandler$$13$$ = $dataLayer$$29_selection$$36_selectionHandler$$13$$.getSelection(), $i$$857$$ = 0;$i$$857$$ < $dataLayer$$29_selection$$36_selectionHandler$$13$$.length;$i$$857$$++) {
        $dataLayer$$29_selection$$36_selectionHandler$$13$$[$i$$857$$] = $dataLayer$$29_selection$$36_selectionHandler$$13$$[$i$$857$$].$getDisplayable$()
      }
      if(0 < $dataLayer$$29_selection$$36_selectionHandler$$13$$.length) {
        for(var $bounds$$142$$ = $dataLayer$$29_selection$$36_selectionHandler$$13$$[0].$getDimensions$(), $i$$857$$ = 1;$i$$857$$ < $dataLayer$$29_selection$$36_selectionHandler$$13$$.length;$i$$857$$++) {
          $bounds$$142$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)($bounds$$142$$, $dataLayer$$29_selection$$36_selectionHandler$$13$$[$i$$857$$].$getDimensions$())
        }
        $JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_zoomToFitBounds$($bounds$$142$$)
      }
    }
  }
};
D.$JSCompiler_StaticMethods_getDrillParentLayer$$ = function $$JSCompiler_StaticMethods_getDrillParentLayer$$$($JSCompiler_StaticMethods_getDrillParentLayer$self$$, $layerName$$30$$) {
  var $parentLayerName$$1$$ = D.$DvtBaseMapManager$$.$getParentLayerName$($JSCompiler_StaticMethods_getDrillParentLayer$self$$.$_mapName$, $layerName$$30$$);
  return(0,D.$JSCompiler_StaticMethods_getLayer$$)($JSCompiler_StaticMethods_getDrillParentLayer$self$$, $parentLayerName$$1$$)
};
D.$JSCompiler_StaticMethods_getDrillChildLayer$$ = function $$JSCompiler_StaticMethods_getDrillChildLayer$$$($JSCompiler_StaticMethods_getDrillChildLayer$self$$, $layerName$$31$$) {
  var $childLayerName$$1$$ = D.$DvtBaseMapManager$$.$getChildLayerName$($JSCompiler_StaticMethods_getDrillChildLayer$self$$.$_mapName$, $layerName$$31$$);
  return(0,D.$JSCompiler_StaticMethods_getLayer$$)($JSCompiler_StaticMethods_getDrillChildLayer$self$$, $childLayerName$$1$$)
};
D.$JSCompiler_StaticMethods_getNavigableAreas$$ = function $$JSCompiler_StaticMethods_getNavigableAreas$$$($JSCompiler_StaticMethods_getNavigableAreas$self$$) {
  var $disclosed$$9$$ = [];
  if($JSCompiler_StaticMethods_getNavigableAreas$self$$.$_topLayer$) {
    for(var $i$$858$$ = 0;$i$$858$$ < $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_layers$.length;$i$$858$$++) {
      var $dataLayers$$8$$ = $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_layers$[$i$$858$$].$DataLayers$, $id$$292$$;
      for($id$$292$$ in $dataLayers$$8$$) {
        $disclosed$$9$$ = $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_topLayer$.$LayerName$ == $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_layers$[$i$$858$$].$LayerName$ ? $disclosed$$9$$.concat((0,D.$JSCompiler_StaticMethods_getNavigableAreaObjects$$)($dataLayers$$8$$[$id$$292$$])) : $disclosed$$9$$.concat((0,D.$JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$$)($dataLayers$$8$$[$id$$292$$]))
      }
    }
  }
  return $disclosed$$9$$
};
D.$JSCompiler_StaticMethods_getNavigableObjects$$ = function $$JSCompiler_StaticMethods_getNavigableObjects$$$($JSCompiler_StaticMethods_getNavigableObjects$self$$) {
  var $navigable$$16$$ = [];
  if($JSCompiler_StaticMethods_getNavigableObjects$self$$.$_topLayer$) {
    for(var $i$$859$$ = 0;$i$$859$$ < $JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$.length;$i$$859$$++) {
      var $dataLayers$$9$$ = $JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$[$i$$859$$].$DataLayers$;
      if($JSCompiler_StaticMethods_getNavigableObjects$self$$.$_topLayer$.$LayerName$ == $JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$[$i$$859$$].$LayerName$ || !($JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$[$i$$859$$] instanceof D.$DvtMapAreaLayer$$)) {
        for(var $id$$293$$ in $dataLayers$$9$$) {
          $navigable$$16$$ = $navigable$$16$$.concat($dataLayers$$9$$[$id$$293$$].$_dataObjs$)
        }
      }
    }
  }
  return $navigable$$16$$
};
D.$DvtThematicMap$$.prototype.$_setCenteredObjsMatrix$ = function $$DvtThematicMap$$$$$_setCenteredObjsMatrix$$($matrix$$24$$) {
  this.$_currentAnimMatrix$ = $matrix$$24$$;
  if(this.$_isMarkerZoomBehaviorFixed$) {
    for(var $numLabelLayers_objs$$56$$ = (0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this), $i$$860_j$$127$$ = 0;$i$$860_j$$127$$ < $numLabelLayers_objs$$56$$.length;$i$$860_j$$127$$++) {
      $numLabelLayers_objs$$56$$[$i$$860_j$$127$$].$HandleZoomEvent$($matrix$$24$$)
    }
    $numLabelLayers_objs$$56$$ = this.$_labelLayers$.$getNumChildren$();
    for($i$$860_j$$127$$ = 0;$i$$860_j$$127$$ < $numLabelLayers_objs$$56$$;$i$$860_j$$127$$++) {
      for(var $labelLayer$$ = this.$_labelLayers$.$getChildAt$($i$$860_j$$127$$), $numLabels$$1$$ = $labelLayer$$.$getNumChildren$(), $k$$14$$ = 0;$k$$14$$ < $numLabels$$1$$;$k$$14$$++) {
        var $label$$86$$ = $labelLayer$$.$getChildAt$($k$$14$$);
        $label$$86$$ instanceof D.$DvtMapLabel$$ && $label$$86$$.update($matrix$$24$$)
      }
    }
  }
};
D.$DvtThematicMap$$.prototype.$_getCenteredObjsMatrix$ = (0,D.$JSCompiler_get$$)("$_currentAnimMatrix$");
D.$DvtThematicMap$$.prototype.$drillDown$ = function $$DvtThematicMap$$$$$drillDown$$() {
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
  var $childLayer$$ = (0,D.$JSCompiler_StaticMethods_getDrillChildLayer$$)(this, this.$_clickedLayerName$), $parentLayer$$3$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)(this, this.$_clickedLayerName$), $fadeInObjs$$5$$ = [];
  if($childLayer$$) {
    this.$_drillDataLayer$[this.$_clickedLayerName$] = this.$_clickedDataLayerId$;
    var $selectedAreas$$1$$ = this.$_selectedAreas$[this.$_clickedLayerName$];
    !this.$_processingInitDrilled$ && "single" == this.$_drillMode$ && (this.$_drilled$.pop(), $parentLayer$$3$$.reset($fadeInObjs$$5$$, $selectedAreas$$1$$), $childLayer$$.reset(this.$_drillAnimFadeOutObjs$));
    for(var $newSelectedAreas$$ = [], $i$$861$$ = 0;$i$$861$$ < $selectedAreas$$1$$.length;$i$$861$$++) {
      var $parentArea$$ = $selectedAreas$$1$$[$i$$861$$], $JSCompiler_StaticMethods_drill$self$$inline_8815_childrenToDisclose_drillLayer$$ = (0,D.$JSCompiler_StaticMethods_getChildrenForArea$$)($parentLayer$$3$$, $parentArea$$);
      $newSelectedAreas$$.push($JSCompiler_StaticMethods_drill$self$$inline_8815_childrenToDisclose_drillLayer$$[0]);
      for(var $areaName$$inline_8816_j$$128$$ = 0;$areaName$$inline_8816_j$$128$$ < $JSCompiler_StaticMethods_drill$self$$inline_8815_childrenToDisclose_drillLayer$$.length;$areaName$$inline_8816_j$$128$$++) {
        this.$_childToParent$[$JSCompiler_StaticMethods_drill$self$$inline_8815_childrenToDisclose_drillLayer$$[$areaName$$inline_8816_j$$128$$]] = $selectedAreas$$1$$[$i$$861$$]
      }
      $childLayer$$.$discloseAreas$($JSCompiler_StaticMethods_drill$self$$inline_8815_childrenToDisclose_drillLayer$$, $fadeInObjs$$5$$);
      if($JSCompiler_StaticMethods_drill$self$$inline_8815_childrenToDisclose_drillLayer$$ = $parentLayer$$3$$.$getDataLayer$(this.$_clickedDataLayerId$)) {
        for(var $areaName$$inline_8816_j$$128$$ = $parentArea$$, $fadeOutObjs$$inline_8817$$ = this.$_drillAnimFadeOutObjs$, $i$$inline_8818_label$$inline_8819_leaderLine$$inline_8820$$ = 0;$i$$inline_8818_label$$inline_8819_leaderLine$$inline_8820$$ < $JSCompiler_StaticMethods_drill$self$$inline_8815_childrenToDisclose_drillLayer$$.$_areaObjs$.length;$i$$inline_8818_label$$inline_8819_leaderLine$$inline_8820$$++) {
          if($JSCompiler_StaticMethods_drill$self$$inline_8815_childrenToDisclose_drillLayer$$.$_areaObjs$[$i$$inline_8818_label$$inline_8819_leaderLine$$inline_8820$$].$AreaId$ == $areaName$$inline_8816_j$$128$$) {
            $JSCompiler_StaticMethods_drill$self$$inline_8815_childrenToDisclose_drillLayer$$.$_areaObjs$[$i$$inline_8818_label$$inline_8819_leaderLine$$inline_8820$$].$setDrilled$(D.$JSCompiler_alias_TRUE$$);
            $JSCompiler_StaticMethods_drill$self$$inline_8815_childrenToDisclose_drillLayer$$.$_drilled$.push($areaName$$inline_8816_j$$128$$);
            $fadeOutObjs$$inline_8817$$.push($JSCompiler_StaticMethods_drill$self$$inline_8815_childrenToDisclose_drillLayer$$.$_areaObjs$[$i$$inline_8818_label$$inline_8819_leaderLine$$inline_8820$$].$getDisplayable$());
            if($i$$inline_8818_label$$inline_8819_leaderLine$$inline_8820$$ = $JSCompiler_StaticMethods_drill$self$$inline_8815_childrenToDisclose_drillLayer$$.$_areaObjs$[$i$$inline_8818_label$$inline_8819_leaderLine$$inline_8820$$].$getLabel$()) {
              $fadeOutObjs$$inline_8817$$.push($i$$inline_8818_label$$inline_8819_leaderLine$$inline_8820$$), ($i$$inline_8818_label$$inline_8819_leaderLine$$inline_8820$$ = $i$$inline_8818_label$$inline_8819_leaderLine$$inline_8820$$.$_leaderLine$) && $fadeOutObjs$$inline_8817$$.push($i$$inline_8818_label$$inline_8819_leaderLine$$inline_8820$$)
            }
            break
          }
        }
        for($i$$inline_8818_label$$inline_8819_leaderLine$$inline_8820$$ = 0;$i$$inline_8818_label$$inline_8819_leaderLine$$inline_8820$$ < $JSCompiler_StaticMethods_drill$self$$inline_8815_childrenToDisclose_drillLayer$$.$_dataObjs$.length;$i$$inline_8818_label$$inline_8819_leaderLine$$inline_8820$$++) {
          if($JSCompiler_StaticMethods_drill$self$$inline_8815_childrenToDisclose_drillLayer$$.$_dataObjs$[$i$$inline_8818_label$$inline_8819_leaderLine$$inline_8820$$].$AreaId$ == $areaName$$inline_8816_j$$128$$) {
            $fadeOutObjs$$inline_8817$$.push($JSCompiler_StaticMethods_drill$self$$inline_8815_childrenToDisclose_drillLayer$$.$_dataObjs$[$i$$inline_8818_label$$inline_8819_leaderLine$$inline_8820$$].$getDisplayable$());
            break
          }
        }
      }
      this.$_drilled$.push($parentArea$$)
    }
    (0,D.$JSCompiler_StaticMethods__handleDrillAnimations$$)(this, this.$_drillAnimFadeOutObjs$, $fadeInObjs$$5$$, D.$JSCompiler_alias_FALSE$$);
    (0,D.$JSCompiler_StaticMethods__updateDrillButton$$)(this, $childLayer$$.$LayerName$);
    this.$_clickedLayerName$ = $childLayer$$.$LayerName$;
    this.$_selectedAreas$[this.$_clickedLayerName$] = $newSelectedAreas$$
  }
};
D.$DvtThematicMap$$.prototype.$drillUp$ = function $$DvtThematicMap$$$$$drillUp$$() {
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
  for(var $childLayer$$1$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)(this, this.$_clickedLayerName$), $parentLayer$$4$$ = (0,D.$JSCompiler_StaticMethods_getDrillParentLayer$$)(this, this.$_clickedLayerName$), $fadeInObjs$$6$$ = [], $newSelectedAreas$$1$$ = [], $selectedAreas$$2$$ = this.$_selectedAreas$[this.$_clickedLayerName$], $i$$862$$ = 0;$i$$862$$ < $selectedAreas$$2$$.length;$i$$862$$++) {
    var $index$$188_parentArea$$1$$ = this.$_childToParent$[$selectedAreas$$2$$[$i$$862$$]];
    $newSelectedAreas$$1$$.push($index$$188_parentArea$$1$$);
    if(-1 != D.$DvtArrayUtils$$.$getIndex$(this.$_drilled$, $index$$188_parentArea$$1$$)) {
      $childLayer$$1$$.$undiscloseAreas$((0,D.$JSCompiler_StaticMethods_getChildrenForArea$$)($parentLayer$$4$$, $index$$188_parentArea$$1$$), this.$_drillAnimFadeOutObjs$);
      for(var $JSCompiler_StaticMethods_undrill$self$$inline_8822$$ = $parentLayer$$4$$.$getDataLayer$(this.$_drillDataLayer$[$parentLayer$$4$$.$LayerName$]), $areaName$$inline_8823$$ = $index$$188_parentArea$$1$$, $fadeInObjs$$inline_8824$$ = $fadeInObjs$$6$$, $i$$inline_8825_label$$inline_8827$$ = 0;$i$$inline_8825_label$$inline_8827$$ < $JSCompiler_StaticMethods_undrill$self$$inline_8822$$.$_areaObjs$.length;$i$$inline_8825_label$$inline_8827$$++) {
        if($JSCompiler_StaticMethods_undrill$self$$inline_8822$$.$_areaObjs$[$i$$inline_8825_label$$inline_8827$$].$AreaId$ == $areaName$$inline_8823$$) {
          $JSCompiler_StaticMethods_undrill$self$$inline_8822$$.$_drilled$.splice(D.$DvtArrayUtils$$.$getIndex$($JSCompiler_StaticMethods_undrill$self$$inline_8822$$.$_drilled$, $areaName$$inline_8823$$), 1);
          $JSCompiler_StaticMethods_undrill$self$$inline_8822$$.$_areaObjs$[$i$$inline_8825_label$$inline_8827$$].$setDrilled$(D.$JSCompiler_alias_FALSE$$);
          var $displayable$$inline_8826$$ = $JSCompiler_StaticMethods_undrill$self$$inline_8822$$.$_areaObjs$[$i$$inline_8825_label$$inline_8827$$].$getDisplayable$();
          $JSCompiler_StaticMethods_undrill$self$$inline_8822$$.$_dataAreaLayer$.$addChild$($displayable$$inline_8826$$);
          $fadeInObjs$$inline_8824$$.push($displayable$$inline_8826$$);
          if($i$$inline_8825_label$$inline_8827$$ = $JSCompiler_StaticMethods_undrill$self$$inline_8822$$.$_areaObjs$[$i$$inline_8825_label$$inline_8827$$].$getLabel$()) {
            $i$$inline_8825_label$$inline_8827$$.update($JSCompiler_StaticMethods_undrill$self$$inline_8822$$.$_pzcMatrix$), $fadeInObjs$$inline_8824$$.push($i$$inline_8825_label$$inline_8827$$), $fadeInObjs$$inline_8824$$.push($i$$inline_8825_label$$inline_8827$$.$_leaderLine$)
          }
          break
        }
      }
      for($i$$inline_8825_label$$inline_8827$$ = 0;$i$$inline_8825_label$$inline_8827$$ < $JSCompiler_StaticMethods_undrill$self$$inline_8822$$.$_dataObjs$.length;$i$$inline_8825_label$$inline_8827$$++) {
        if($JSCompiler_StaticMethods_undrill$self$$inline_8822$$.$_dataObjs$[$i$$inline_8825_label$$inline_8827$$].$AreaId$ == $areaName$$inline_8823$$) {
          $displayable$$inline_8826$$ = $JSCompiler_StaticMethods_undrill$self$$inline_8822$$.$_dataObjs$[$i$$inline_8825_label$$inline_8827$$].$getDisplayable$();
          $JSCompiler_StaticMethods_undrill$self$$inline_8822$$.$_dataPointLayer$.$addChild$($displayable$$inline_8826$$);
          $fadeInObjs$$inline_8824$$.push($displayable$$inline_8826$$);
          break
        }
      }
      $index$$188_parentArea$$1$$ = D.$DvtArrayUtils$$.$getIndex$(this.$_drilled$, $index$$188_parentArea$$1$$);
      -1 != $index$$188_parentArea$$1$$ && this.$_drilled$.splice($index$$188_parentArea$$1$$, 1)
    }
  }
  (0,D.$JSCompiler_StaticMethods__handleDrillAnimations$$)(this, this.$_drillAnimFadeOutObjs$, $fadeInObjs$$6$$, D.$JSCompiler_alias_TRUE$$);
  this.$_clickedLayerName$ = $parentLayer$$4$$.$LayerName$;
  this.$_clickedDataLayerId$ = this.$_drillDataLayer$[this.$_clickedLayerName$];
  this.$_selectedAreas$[this.$_clickedLayerName$] = $newSelectedAreas$$1$$;
  (0,D.$JSCompiler_StaticMethods__updateDrillButton$$)(this, this.$_clickedLayerName$)
};
D.$JSCompiler_StaticMethods__stopAnimation$$ = function $$JSCompiler_StaticMethods__stopAnimation$$$($JSCompiler_StaticMethods__stopAnimation$self$$) {
  $JSCompiler_StaticMethods__stopAnimation$self$$.$_animation$ && ($JSCompiler_StaticMethods__stopAnimation$self$$.$_animation$.stop(D.$JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods__stopAnimation$self$$.$_animation$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_StaticMethods__handleDrillAnimations$$ = function $$JSCompiler_StaticMethods__handleDrillAnimations$$$($JSCompiler_StaticMethods__handleDrillAnimations$self$$, $oldObjs$$3$$, $newObjs$$3$$, $isDrillUp$$) {
  $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_pzc$.$_contentPane$.$getMatrix$();
  if($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_drillZoomToFit$ && !$JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_processingInitDrilled$) {
    var $animator$$133$$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_context$, 0.3);
    (0,D.$DvtAgent$isEnvironmentBrowser$$)() || ($animator$$133$$ = D.$JSCompiler_alias_NULL$$);
    $isDrillUp$$ ? $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_pzc$.$zoomToFit$($animator$$133$$) : (0,D.$JSCompiler_StaticMethods_fitSelectedRegions$$)($JSCompiler_StaticMethods__handleDrillAnimations$self$$);
    $animator$$133$$ && $animator$$133$$.play()
  }
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)($JSCompiler_StaticMethods__handleDrillAnimations$self$$);
  $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_context$, $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animationOnDrill$, $oldObjs$$3$$, $newObjs$$3$$, D.$JSCompiler_alias_NULL$$, 0.5);
  (0,D.$DvtAgent$isEnvironmentBrowser$$)() || ($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$ = D.$JSCompiler_alias_NULL$$);
  $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$ ? ($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_eventHandler$.$hideTooltip$(), $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_eventHandler$.$removeListeners$($JSCompiler_StaticMethods__handleDrillAnimations$self$$), $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$.$setOnEnd$($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$OnDrillAnimationEnd$, $JSCompiler_StaticMethods__handleDrillAnimations$self$$), 
  $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$.play()) : (0,D.$JSCompiler_StaticMethods__cleanUpDrilledObjects$$)($JSCompiler_StaticMethods__handleDrillAnimations$self$$)
};
D.$DvtThematicMap$$.prototype.$__dispatchEvent$ = function $$DvtThematicMap$$$$$__dispatchEvent$$($event$$752$$) {
  var $JSCompiler_temp_const$$8975_drillType$$inline_8834_type$$225$$ = $event$$752$$.$getType$();
  if("selection" == $JSCompiler_temp_const$$8975_drillType$$inline_8834_type$$225$$) {
    if(this.$_clickedDataLayerId$) {
      this.$_selectedRowKeys$ = $event$$752$$.getSelection();
      for(var $JSCompiler_temp_const$$8975_drillType$$inline_8834_type$$225$$ = this.$_selectedAreas$, $JSCompiler_temp_const$$8974$$ = this.$_clickedLayerName$, $selectedObjs$$inline_11123$$ = this.$_selectedRowKeys$, $selectedAreas$$inline_11124$$ = [], $areaObjs$$inline_11125$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)(this, this.$_clickedLayerName$).$getDataLayer$(this.$_clickedDataLayerId$).$_areaObjs$, $i$$inline_11126$$ = 0;$i$$inline_11126$$ < $selectedObjs$$inline_11123$$.length;$i$$inline_11126$$++) {
        for(var $j$$inline_11127$$ = 0;$j$$inline_11127$$ < $areaObjs$$inline_11125$$.length;$j$$inline_11127$$++) {
          if($areaObjs$$inline_11125$$[$j$$inline_11127$$].getId() == $selectedObjs$$inline_11123$$[$i$$inline_11126$$]) {
            $selectedAreas$$inline_11124$$.push($areaObjs$$inline_11125$$[$j$$inline_11127$$].$AreaId$);
            break
          }
        }
      }
      $JSCompiler_temp_const$$8975_drillType$$inline_8834_type$$225$$[$JSCompiler_temp_const$$8974$$] = $selectedAreas$$inline_11124$$;
      (0,D.$JSCompiler_StaticMethods__updateDrillButton$$)(this, this.$_clickedLayerName$);
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$752$$, "clientId", this.$_clickedDataLayerId$);
      this.$_clickedObject$ && !(this.$_clickedObject$ instanceof D.$DvtMarker$$) && (this.$_zoomToFitObject$ = this.$_clickedObject$)
    }else {
      (0,D.$JSCompiler_StaticMethods__updateDrillButton$$)(this, D.$JSCompiler_alias_NULL$$), this.$_zoomToFitObject$ = D.$JSCompiler_alias_NULL$$
    }
  }else {
    $JSCompiler_temp_const$$8975_drillType$$inline_8834_type$$225$$ == D.$DvtMapDrillEvent$$.$TYPE$ ? ((0,D.$JSCompiler_StaticMethods_addParam$$)($event$$752$$, "clientId", this.$_eventClientId$), this.$_drilledRowKeys$ = "multiple" == this.$_drillMode$ ? this.$_drilledRowKeys$.concat(this.$_selectedRowKeys$) : this.$_selectedRowKeys$, $JSCompiler_temp_const$$8975_drillType$$inline_8834_type$$225$$ = $event$$752$$.$_drillType$, $JSCompiler_temp_const$$8975_drillType$$inline_8834_type$$225$$ == D.$DvtMapDrillEvent$$.$DRILL_UP$ && 
    this.$drillUp$(), $JSCompiler_temp_const$$8975_drillType$$inline_8834_type$$225$$ == D.$DvtMapDrillEvent$$.$DRILL_DOWN$ ? this.$drillDown$() : $JSCompiler_temp_const$$8975_drillType$$inline_8834_type$$225$$ == D.$DvtMapDrillEvent$$.$RESET$ && this.$resetMap$(), $event$$752$$.$setDisclosed$(this.$_drilledRowKeys$)) : ("showPopup" == $JSCompiler_temp_const$$8975_drillType$$inline_8834_type$$225$$ || "hidePopup" == $JSCompiler_temp_const$$8975_drillType$$inline_8834_type$$225$$) && (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$752$$, 
    "clientId", this.$_eventClientId$)
  }
  D.$DvtThematicMap$$.$superclass$.$__dispatchEvent$.call(this, $event$$752$$)
};
D.$JSCompiler_StaticMethods__updateDrillButton$$ = function $$JSCompiler_StaticMethods__updateDrillButton$$$($JSCompiler_StaticMethods__updateDrillButton$self$$, $layerName$$33$$) {
  if($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$ && $JSCompiler_StaticMethods__updateDrillButton$self$$.$_drillMode$ && "none" != $JSCompiler_StaticMethods__updateDrillButton$self$$.$_drillMode$) {
    var $childLayer$$2$$ = (0,D.$JSCompiler_StaticMethods_getDrillChildLayer$$)($JSCompiler_StaticMethods__updateDrillButton$self$$, $layerName$$33$$), $parentLayer$$5$$ = (0,D.$JSCompiler_StaticMethods_getDrillParentLayer$$)($JSCompiler_StaticMethods__updateDrillButton$self$$, $layerName$$33$$);
    $childLayer$$2$$ ? (0,D.$JSCompiler_StaticMethods_setEnabledDrillDownButton$$)($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, D.$JSCompiler_alias_TRUE$$) : (0,D.$JSCompiler_StaticMethods_setEnabledDrillDownButton$$)($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, D.$JSCompiler_alias_FALSE$$);
    $parentLayer$$5$$ ? (0,D.$JSCompiler_StaticMethods_setEnabledDrillUpButton$$)($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, D.$JSCompiler_alias_TRUE$$) : (0,D.$JSCompiler_StaticMethods_setEnabledDrillUpButton$$)($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, D.$JSCompiler_alias_FALSE$$)
  }
};
D.$DvtThematicMap$$.prototype.$destroy$ = function $$DvtThematicMap$$$$$destroy$$() {
  D.$DvtThematicMap$$.$superclass$.$destroy$.call(this);
  this.$_eventHandler$ && (this.$_eventHandler$.$destroy$(), this.$_eventHandler$ = D.$JSCompiler_alias_NULL$$)
};
D.$DvtThematicMap$$.prototype.destroy = D.$DvtThematicMap$$.prototype.$destroy$;
D.$DvtThematicMap$$.prototype.$OnAnimationEnd$ = function $$DvtThematicMap$$$$$OnAnimationEnd$$() {
  this.$_controlPanel$ && this.$_pzc$.$addChild$(this.$_controlPanel$);
  this.$_oldPzc$ && (this.removeChild(this.$_oldPzc$), this.$_oldPzc$ = D.$JSCompiler_alias_NULL$$);
  this.$_animation$ = D.$JSCompiler_alias_NULL$$;
  this.$_initialZooming$ && (0,D.$JSCompiler_StaticMethods__zoomData$$)(this);
  this.$_eventHandler$.$addListeners$(this)
};
D.$DvtThematicMap$$.prototype.$OnDrillAnimationEnd$ = function $$DvtThematicMap$$$$$OnDrillAnimationEnd$$() {
  (0,D.$JSCompiler_StaticMethods__cleanUpDrilledObjects$$)(this);
  this.$_animation$ = D.$JSCompiler_alias_NULL$$;
  this.$_eventHandler$.$addListeners$(this)
};
D.$JSCompiler_StaticMethods__cleanUpDrilledObjects$$ = function $$JSCompiler_StaticMethods__cleanUpDrilledObjects$$$($JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$) {
  if(0 < $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$.length) {
    for(var $i$$863$$ = 0;$i$$863$$ < $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$.length;$i$$863$$++) {
      var $obj$$374$$ = $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$[$i$$863$$];
      if($obj$$374$$) {
        if($obj$$374$$ instanceof D.$DvtMapLabel$$) {
          $obj$$374$$.reset()
        }else {
          if($obj$$374$$.$isDrilled$ && $obj$$374$$.$isDrilled$()) {
            $obj$$374$$.$setAlpha$(0)
          }else {
            var $parent$$93$$ = $obj$$374$$.getParent();
            $parent$$93$$ && $parent$$93$$.removeChild($obj$$374$$)
          }
        }
      }
    }
    $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$ = []
  }
};
D.$DvtThematicMap$$.prototype.$_rolloverCallback$ = function $$DvtThematicMap$$$$$_rolloverCallback$$($event$$755$$) {
  this.$_fireRolloverEvent$("mouseover" == $event$$755$$.$_mouseState$ ? "categoryRollOver" : "categoryRollOut", $event$$755$$.$getHideAttributes$())
};
D.$DvtThematicMap$$.prototype.$_fireRolloverEvent$ = function $$DvtThematicMap$$$$$_fireRolloverEvent$$($type$$227$$, $category$$18$$) {
  var $rolloverEvent$$1$$ = new D.$DvtCategoryRolloverEvent$$($type$$227$$, $category$$18$$), $objects$$5$$ = [], $layerId_legendItems$$2$$;
  for($layerId_legendItems$$2$$ in this.$_areas$) {
    for(var $key$$127_wrapper$$1$$ in this.$_areas$[$layerId_legendItems$$2$$]) {
      $objects$$5$$.push(this.$_areas$[$layerId_legendItems$$2$$][$key$$127_wrapper$$1$$])
    }
  }
  for($layerId_legendItems$$2$$ in this.$_markers$) {
    for($key$$127_wrapper$$1$$ in this.$_markers$[$layerId_legendItems$$2$$]) {
      $objects$$5$$.push(this.$_markers$[$layerId_legendItems$$2$$][$key$$127_wrapper$$1$$])
    }
  }
  $layerId_legendItems$$2$$ = this.$_legend$.$_hideAttrsLookUp$;
  for(var $legendCategory$$1$$ in $layerId_legendItems$$2$$) {
    $key$$127_wrapper$$1$$ = new D.$DvtThematicMapCategoryWrapper$$($layerId_legendItems$$2$$[$legendCategory$$1$$].$getContentShape$(), $legendCategory$$1$$), $objects$$5$$.push($key$$127_wrapper$$1$$)
  }
  (0,D.$DvtCategoryRolloverHandler$processEvent$$)($rolloverEvent$$1$$, $objects$$5$$, 0.1)
};
D.$DvtThematicMap$$.prototype.$getAutomation$ = function $$DvtThematicMap$$$$$getAutomation$$() {
  this.$Automation$ || (this.$Automation$ = new D.$DvtThematicMapAutomation$$(this));
  return this.$Automation$
};
D.$DvtThematicMap$$.prototype.getAutomation = D.$DvtThematicMap$$.prototype.$getAutomation$;
D.$DvtThematicMapDefaults$$ = function $$DvtThematicMapDefaults$$$() {
  this.Init({fusion:D.$DvtThematicMapDefaults$DEFAULT$$, skyros:D.$DvtThematicMapDefaults$SKIN_SKYROS$$, alta:D.$DvtThematicMapDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtThematicMapDefaults");
D.$DvtThematicMapDefaults$DEFAULT$$ = {skin:D.$JSCompiler_alias_NULL$$, animationDuration:500, animationOnDisplay:"none", animationOnDrill:"none", animationOnMapChange:"none", controlPanelBehavior:"hidden", drilling:"off", initialZooming:"none", maintainDrill:"off", markerZoomBehavior:"fixed", panning:"none", tooltipDisplay:"auto", zooming:"none", styleDefaults:{areaStyle:"background-color:#B8CDEC;border-color:#FFFFFF;", dataAreaDefaults:{borderColor:"#FFFFFF", drilledInnerColor:"#FFFFFF", drilledOuterColor:"#000000", 
hoverColor:"#FFFFFF", opacity:1, selectedInnerColor:"#FFFFFF", selectedOuterColor:"#000000"}, dataMarkerDefaults:{borderColor:"#FFFFFF", borderStyle:"solid", borderWidth:"0.5px", color:"#000000", height:8, labelStyle:"font-family:Tahoma;font-size:13pt;color:#000000", opacity:0.4, scaleX:1, scaleY:1, shape:"circle", width:8}, labelStyle:"font-family:Tahoma;font-size:11pt;"}, legend:{position:"auto", rendered:D.$JSCompiler_alias_TRUE$$, layout:{gapRatio:1}}, layout:{gapRatio:D.$JSCompiler_alias_NULL$$, 
legendMaxSize:0.3, legendGap:10}, resources:{images:{}, translations:{}}};
D.$DvtThematicMapDefaults$SKIN_SKYROS$$ = {styleDefaults:{backgroundColor:"#FFFFFF"}};
D.$DvtThematicMapDefaults$SKIN_ALTA$$ = {skin:"alta", styleDefaults:{areaStyle:"background-color:#DDDDDD;border-color:#FFFFFF;", backgroundColor:"#FFFFFF", dataAreaDefaults:{drilledOuterColor:"#0572CE"}, dataMarkerDefaults:{color:"rgb(51,51,51)", labelStyle:'font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;color:#333333', opacity:1}, labelStyle:'font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;'}};
D.$DvtThematicMapDefaults$DEFAULT_AREA_LAYER$$ = {animationOnLayerChange:"none", labelDisplay:"auto", labelType:"short"};
D.$DvtThematicMapDefaults$DEFAULT_DATA_LAYER$$ = {animationOnDataChange:"none", selection:"none"};
D.$JSCompiler_StaticMethods__getCurrentDragSource$$ = function $$JSCompiler_StaticMethods__getCurrentDragSource$$$($JSCompiler_StaticMethods__getCurrentDragSource$self$$) {
  for(var $i$$510$$ = 0;$i$$510$$ < $JSCompiler_StaticMethods__getCurrentDragSource$self$$.$_layers$.length;$i$$510$$++) {
    var $dataLayers$$5$$ = $JSCompiler_StaticMethods__getCurrentDragSource$self$$.$_layers$[$i$$510$$].$DataLayers$, $id$$125$$;
    for($id$$125$$ in $dataLayers$$5$$) {
      var $dragSource$$2$$ = $dataLayers$$5$$[$id$$125$$].$_dragSource$;
      if($dragSource$$2$$ && $dragSource$$2$$.$_dragCandidate$) {
        return $dragSource$$2$$
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtThematicMap$$.prototype.$isDragAvailable$ = function $$DvtThematicMap$$$$$isDragAvailable$$($dragSource$$3_mouseX$$22$$, $mouseY$$22$$, $clientIds$$10$$) {
  this.$_dragAllowed$ = D.$JSCompiler_alias_FALSE$$;
  return($dragSource$$3_mouseX$$22$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this)) ? $dragSource$$3_mouseX$$22$$.$isDragAvailable$($clientIds$$10$$) : D.$JSCompiler_alias_FALSE$$
};
D.$DvtThematicMap$$.prototype.$getDragTransferable$ = function $$DvtThematicMap$$$$$getDragTransferable$$($mouseX$$23$$, $mouseY$$23$$) {
  var $dragSource$$4$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this);
  return $dragSource$$4$$ ? $dragSource$$4$$.$getDragTransferable$($mouseX$$23$$, $mouseY$$23$$) : D.$JSCompiler_alias_NULL$$
};

D.$DvtThematicMapDropTarget$$ = function $$DvtThematicMapDropTarget$$$($areaLayer$$1$$, $basemap$$3$$) {
  this.$_areaLayer$ = $areaLayer$$1$$;
  this.$_basemap$ = $basemap$$3$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapDropTarget$$, D.$DvtDropTarget$$, "DvtThematicMapDropTarget");
D.$DvtThematicMapAutomation$$ = (0,D.$JSCompiler_set$$)("$_tmap$");
(0,D.$goog$exportSymbol$$)("DvtThematicMapAutomation", D.$DvtThematicMapAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapAutomation$$, D.$DvtAutomation$$, "DvtThematicMapAutomation");
D.$DvtThematicMapAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtThematicMapAutomation$$$$$GetSubIdForDomElement$$($displayable$$39_logicalObj$$15$$) {
  $displayable$$39_logicalObj$$15$$ = this.$_tmap$.$_eventHandler$.$GetLogicalObject$($displayable$$39_logicalObj$$15$$);
  var $JSCompiler_temp$$483_id$$inline_5560$$;
  if($displayable$$39_logicalObj$$15$$ && ($displayable$$39_logicalObj$$15$$ instanceof D.$DvtMapDataArea$$ || $displayable$$39_logicalObj$$15$$ instanceof D.$DvtMapDataMarker$$)) {
    a: {
      for(var $layers$$inline_5557$$ = this.$_tmap$.$_layers$, $i$$inline_5558$$ = 0;$i$$inline_5558$$ < $layers$$inline_5557$$.length;$i$$inline_5558$$++) {
        var $dataLayers$$inline_5559$$ = $layers$$inline_5557$$[$i$$inline_5558$$].$DataLayers$;
        for($JSCompiler_temp$$483_id$$inline_5560$$ in $dataLayers$$inline_5559$$) {
          if($displayable$$39_logicalObj$$15$$ instanceof D.$DvtMapDataArea$$) {
            for(var $areas$$inline_5561_markers$$inline_5563$$ = $dataLayers$$inline_5559$$[$JSCompiler_temp$$483_id$$inline_5560$$].$_areaObjs$, $k$$inline_5562$$ = 0;$k$$inline_5562$$ < $areas$$inline_5561_markers$$inline_5563$$.length;$k$$inline_5562$$++) {
              if($areas$$inline_5561_markers$$inline_5563$$[$k$$inline_5562$$] === $displayable$$39_logicalObj$$15$$) {
                $JSCompiler_temp$$483_id$$inline_5560$$ = (0,D.$JSCompiler_StaticMethods__getDataLayerId$$)($JSCompiler_temp$$483_id$$inline_5560$$) + ":area[" + $displayable$$39_logicalObj$$15$$.getId() + "]";
                break a
              }
            }
          }else {
            if($displayable$$39_logicalObj$$15$$ instanceof D.$DvtMapDataMarker$$) {
              $areas$$inline_5561_markers$$inline_5563$$ = $dataLayers$$inline_5559$$[$JSCompiler_temp$$483_id$$inline_5560$$].$_dataObjs$;
              for($k$$inline_5562$$ = 0;$k$$inline_5562$$ < $areas$$inline_5561_markers$$inline_5563$$.length;$k$$inline_5562$$++) {
                if($areas$$inline_5561_markers$$inline_5563$$[$k$$inline_5562$$] === $displayable$$39_logicalObj$$15$$) {
                  $JSCompiler_temp$$483_id$$inline_5560$$ = (0,D.$JSCompiler_StaticMethods__getDataLayerId$$)($JSCompiler_temp$$483_id$$inline_5560$$) + ":marker[" + $displayable$$39_logicalObj$$15$$.getId() + "]";
                  break a
                }
              }
            }
          }
        }
      }
      $JSCompiler_temp$$483_id$$inline_5560$$ = D.$JSCompiler_alias_NULL$$
    }
  }else {
    $JSCompiler_temp$$483_id$$inline_5560$$ = D.$JSCompiler_alias_NULL$$
  }
  return $JSCompiler_temp$$483_id$$inline_5560$$
};
D.$DvtThematicMapAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtThematicMapAutomation$$$$$getDomElementForSubId$$($JSCompiler_temp$$443_dataObj$$inline_5569_subId$$23$$) {
  var $colonIdx$$1$$ = $JSCompiler_temp$$443_dataObj$$inline_5569_subId$$23$$.indexOf(":"), $parenIdx$$ = $JSCompiler_temp$$443_dataObj$$inline_5569_subId$$23$$.indexOf("[");
  $JSCompiler_temp$$443_dataObj$$inline_5569_subId$$23$$ = 0 < $colonIdx$$1$$ && 0 < $parenIdx$$ ? ($JSCompiler_temp$$443_dataObj$$inline_5569_subId$$23$$ = (0,D.$JSCompiler_StaticMethods__getDataObject$$)(this, $JSCompiler_temp$$443_dataObj$$inline_5569_subId$$23$$.substring(0, $colonIdx$$1$$), $JSCompiler_temp$$443_dataObj$$inline_5569_subId$$23$$.substring($colonIdx$$1$$ + 1, $parenIdx$$), $JSCompiler_temp$$443_dataObj$$inline_5569_subId$$23$$.substring($parenIdx$$ + 1, $JSCompiler_temp$$443_dataObj$$inline_5569_subId$$23$$.length - 
  1))) ? $JSCompiler_temp$$443_dataObj$$inline_5569_subId$$23$$.$getDisplayable$().$getElem$() : D.$JSCompiler_alias_NULL$$ : D.$JSCompiler_alias_NULL$$;
  return $JSCompiler_temp$$443_dataObj$$inline_5569_subId$$23$$
};
D.$DvtThematicMapAutomation$$.prototype.getDomElementForSubId = D.$DvtThematicMapAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtThematicMapAutomation$$.prototype.getData = function $$DvtThematicMapAutomation$$$$getData$($dataLayerId$$1_dataObj$$2$$, $data$$66_dataObjType$$1$$, $dataObjId$$1_label$$54$$) {
  return($dataLayerId$$1_dataObj$$2$$ = (0,D.$JSCompiler_StaticMethods__getDataObject$$)(this, $dataLayerId$$1_dataObj$$2$$, $data$$66_dataObjType$$1$$, $dataObjId$$1_label$$54$$)) ? ($data$$66_dataObjType$$1$$ = {}, $data$$66_dataObjType$$1$$.color = $dataLayerId$$1_dataObj$$2$$.$getDatatipColor$(), $data$$66_dataObjType$$1$$.tooltip = $dataLayerId$$1_dataObj$$2$$.$getDatatip$(), $dataObjId$$1_label$$54$$ = $dataLayerId$$1_dataObj$$2$$.$getLabel$(), $data$$66_dataObjType$$1$$.label = $dataObjId$$1_label$$54$$ ? 
  $dataObjId$$1_label$$54$$.$getTextString$() : D.$JSCompiler_alias_NULL$$, $data$$66_dataObjType$$1$$.isSelected = $dataLayerId$$1_dataObj$$2$$.$isSelected$(), $data$$66_dataObjType$$1$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtThematicMapAutomation$$.prototype.getData = D.$DvtThematicMapAutomation$$.prototype.getData;
D.$JSCompiler_StaticMethods__getDataObject$$ = function $$JSCompiler_StaticMethods__getDataObject$$$($JSCompiler_StaticMethods__getDataObject$self_layers$$1$$, $dataLayerId$$3$$, $dataObjType$$3$$, $dataObjId$$3$$) {
  $JSCompiler_StaticMethods__getDataObject$self_layers$$1$$ = $JSCompiler_StaticMethods__getDataObject$self_layers$$1$$.$_tmap$.$_layers$;
  for(var $i$$506$$ = 0;$i$$506$$ < $JSCompiler_StaticMethods__getDataObject$self_layers$$1$$.length;$i$$506$$++) {
    var $dataLayers$$4$$ = $JSCompiler_StaticMethods__getDataObject$self_layers$$1$$[$i$$506$$].$DataLayers$, $id$$119$$;
    for($id$$119$$ in $dataLayers$$4$$) {
      if((0,D.$JSCompiler_StaticMethods__getDataLayerId$$)($id$$119$$) == $dataLayerId$$3$$) {
        if("area" == $dataObjType$$3$$) {
          for(var $areas$$2_markers$$9$$ = $dataLayers$$4$$[$id$$119$$].$_areaObjs$, $k$$7$$ = 0;$k$$7$$ < $areas$$2_markers$$9$$.length;$k$$7$$++) {
            if($areas$$2_markers$$9$$[$k$$7$$].getId() === $dataObjId$$3$$) {
              return $areas$$2_markers$$9$$[$k$$7$$]
            }
          }
        }else {
          if("marker" == $dataObjType$$3$$) {
            $areas$$2_markers$$9$$ = $dataLayers$$4$$[$id$$119$$].$_dataObjs$;
            for($k$$7$$ = 0;$k$$7$$ < $areas$$2_markers$$9$$.length;$k$$7$$++) {
              if($areas$$2_markers$$9$$[$k$$7$$].getId() === $dataObjId$$3$$) {
                return $areas$$2_markers$$9$$[$k$$7$$]
              }
            }
          }
        }
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__getDataLayerId$$ = function $$JSCompiler_StaticMethods__getDataLayerId$$$($dataLayerId$$4$$) {
  var $colonIdx$$2$$ = $dataLayerId$$4$$.lastIndexOf(":");
  return 0 < $colonIdx$$2$$ ? $dataLayerId$$4$$.substring($colonIdx$$2$$ + 1) : $dataLayerId$$4$$
};
D.$DvtDrillablePath$$ = function $$DvtDrillablePath$$$($context$$289$$, $bSupportsVectorEffects$$4$$) {
  this.Init($context$$289$$, $bSupportsVectorEffects$$4$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDrillablePath$$, D.$DvtPath$$, "DvtDrillablePath");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDrillablePath$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$290$$, $bSupportsVectorEffects$$5$$) {
  D.$DvtDrillablePath$$.$superclass$.Init.call(this, $context$$290$$);
  this.$_disclosedOuterShape$ = this.$_disclosedInnerShape$ = this.$_disclosedOuterStroke$ = this.$_disclosedInnerStroke$ = D.$JSCompiler_alias_NULL$$;
  this.$_isDrilled$ = D.$JSCompiler_alias_FALSE$$;
  this.Zoom = 1;
  this.$_bSupportsVectorEffects$ = $bSupportsVectorEffects$$5$$
};
D.$JSCompiler_prototypeAlias$$.$isDrilled$ = (0,D.$JSCompiler_get$$)("$_isDrilled$");
D.$JSCompiler_prototypeAlias$$.$setDrilled$ = function $$JSCompiler_prototypeAlias$$$$setDrilled$$($drilled_parent$$43$$) {
  this.$_isDrilled$ != $drilled_parent$$43$$ && (this.$_isDrilled$ = $drilled_parent$$43$$, this.$isDrilled$() ? (this.$_disclosedInnerShape$ = this.$copyShape$(), this.$_disclosedInnerShape$.$setFill$(D.$JSCompiler_alias_NULL$$), this.$_disclosedInnerShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), this.$_disclosedOuterShape$ = this.$copyShape$(), this.$_disclosedOuterShape$.$setFill$(D.$JSCompiler_alias_NULL$$), this.$_disclosedOuterShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $drilled_parent$$43$$ = 
  this.getParent(), $drilled_parent$$43$$.$addChild$(this.$_disclosedOuterShape$), $drilled_parent$$43$$.$addChild$(this.$_disclosedInnerShape$), this.$_disclosedInnerShape$.$setStroke$((0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$_disclosedInnerStroke$, 2)), this.$_disclosedOuterShape$.$setStroke$((0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$_disclosedOuterStroke$, 4)), this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), this.$IsShowingHoverEffect$ = 
  D.$JSCompiler_alias_FALSE$$) : (this.$isHoverEffectShown$() && (this.$UpdateSelectionEffect$(), this.$InnerShape$.$setStroke$((0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$HoverInnerStroke$, 1), 2)), this.$_disclosedOuterShape$.getParent().removeChild(this.$_disclosedOuterShape$), this.$_disclosedInnerShape$.getParent().removeChild(this.$_disclosedInnerShape$), this.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$), this.$setAlpha$(1)))
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$22$$) {
  this.$IsSelected$ != $selected$$22$$ && ($selected$$22$$ && (this.$isHoverEffectShown$() ? (this.$CreateSelectedHoverStrokes$(), this.$SelectedHoverInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedHoverInnerStroke$, 2), this.$SelectedHoverOuterStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedHoverOuterStroke$, 6)) : (this.$SelectedInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedInnerStroke$, 
  1), this.$SelectedOuterStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedOuterStroke$, 4))), D.$DvtDrillablePath$$.$superclass$.$setSelected$.call(this, $selected$$22$$))
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$isSelected$() ? (this.$CreateSelectedHoverStrokes$(), this.$SelectedHoverInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedHoverInnerStroke$, 2), this.$SelectedHoverOuterStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedHoverOuterStroke$, 6)) : this.$HoverInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$HoverInnerStroke$, 2);
  D.$DvtDrillablePath$$.$superclass$.$showHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$CreateSelectedHoverStrokes$ = function $$JSCompiler_prototypeAlias$$$$CreateSelectedHoverStrokes$$() {
  this.$SelectedHoverInnerStroke$ || (this.$SelectedHoverInnerStroke$ = this.$HoverInnerStroke$.clone(), this.$SelectedHoverInnerStroke$.$setWidth$(2), this.$_bSupportsVectorEffects$ && (this.$SelectedHoverInnerStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$));
  this.$SelectedHoverOuterStroke$ || (this.$SelectedHoverOuterStroke$ = this.$SelectedOuterStroke$.clone(), this.$SelectedHoverOuterStroke$.$setWidth$(6), this.$_bSupportsVectorEffects$ && (this.$SelectedHoverOuterStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$))
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$isSelected$() && (this.$SelectedInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedInnerStroke$, 1), this.$SelectedOuterStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedOuterStroke$, 4));
  D.$DvtDrillablePath$$.$superclass$.$hideHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$setHoverStroke$ = function $$JSCompiler_prototypeAlias$$$$setHoverStroke$$($innerStroke$$, $outerStroke$$) {
  D.$DvtDrillablePath$$.$superclass$.$setHoverStroke$.call(this, $innerStroke$$, $outerStroke$$);
  this.$_bSupportsVectorEffects$ && (this.$HoverInnerStroke$ && (this.$HoverInnerStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), this.$HoverOuterStroke$ && (this.$HoverOuterStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$));
  return this
};
D.$JSCompiler_prototypeAlias$$.$setSelectedStroke$ = function $$JSCompiler_prototypeAlias$$$$setSelectedStroke$$($innerStroke$$1$$, $outerStroke$$1$$) {
  D.$DvtDrillablePath$$.$superclass$.$setSelectedStroke$.call(this, $innerStroke$$1$$, $outerStroke$$1$$);
  this.$_bSupportsVectorEffects$ && (this.$SelectedInnerStroke$ && (this.$SelectedInnerStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), this.$SelectedOuterStroke$ && (this.$SelectedOuterStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$));
  return this
};
D.$JSCompiler_prototypeAlias$$.$setSelectedHoverStroke$ = function $$JSCompiler_prototypeAlias$$$$setSelectedHoverStroke$$($innerStroke$$2$$, $outerStroke$$2$$) {
  D.$DvtDrillablePath$$.$superclass$.$setSelectedHoverStroke$.call(this, $innerStroke$$2$$, $outerStroke$$2$$);
  this.$_bSupportsVectorEffects$ && (this.$SelectedHoverInnerStroke$ && (this.$SelectedHoverInnerStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), this.$SelectedHoverOuterStroke$ && (this.$SelectedHoverOuterStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$));
  return this
};
D.$JSCompiler_StaticMethods_setDisclosedStroke$$ = function $$JSCompiler_StaticMethods_setDisclosedStroke$$$($JSCompiler_StaticMethods_setDisclosedStroke$self$$, $innerStroke$$3$$, $outerStroke$$3$$) {
  $JSCompiler_StaticMethods_setDisclosedStroke$self$$.$_disclosedInnerStroke$ = $innerStroke$$3$$;
  $JSCompiler_StaticMethods_setDisclosedStroke$self$$.$_disclosedInnerStroke$ && $JSCompiler_StaticMethods_setDisclosedStroke$self$$.$_bSupportsVectorEffects$ && ($JSCompiler_StaticMethods_setDisclosedStroke$self$$.$_disclosedInnerStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_setDisclosedStroke$self$$.$_disclosedOuterStroke$ = $outerStroke$$3$$;
  $JSCompiler_StaticMethods_setDisclosedStroke$self$$.$_disclosedOuterStroke$ && $JSCompiler_StaticMethods_setDisclosedStroke$self$$.$_bSupportsVectorEffects$ && ($JSCompiler_StaticMethods_setDisclosedStroke$self$$.$_disclosedOuterStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$ = function $$JSCompiler_StaticMethods__updateStrokeZoomWidth$$$($JSCompiler_StaticMethods__updateStrokeZoomWidth$self$$, $shape$$42$$, $fixedWidth$$1$$) {
  if(!$JSCompiler_StaticMethods__updateStrokeZoomWidth$self$$.$_bSupportsVectorEffects$) {
    var $stroke$$74$$ = $shape$$42$$.$getStroke$();
    $stroke$$74$$ && ($stroke$$74$$ = $stroke$$74$$.clone(), $stroke$$74$$.$setWidth$($fixedWidth$$1$$ / $JSCompiler_StaticMethods__updateStrokeZoomWidth$self$$.Zoom), $shape$$42$$.$setStroke$($stroke$$74$$))
  }
};
D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$ = function $$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$$($JSCompiler_StaticMethods__adjustStrokeZoomWidth$self$$, $adjustedStroke_stroke$$75$$, $fixedWidth$$2$$) {
  $JSCompiler_StaticMethods__adjustStrokeZoomWidth$self$$.$_bSupportsVectorEffects$ || ($adjustedStroke_stroke$$75$$ = $adjustedStroke_stroke$$75$$.clone(), $adjustedStroke_stroke$$75$$.$setWidth$($fixedWidth$$2$$ / $JSCompiler_StaticMethods__adjustStrokeZoomWidth$self$$.Zoom));
  return $adjustedStroke_stroke$$75$$
};
D.$JSCompiler_StaticMethods_handleZoomEvent$$ = function $$JSCompiler_StaticMethods_handleZoomEvent$$$($JSCompiler_StaticMethods_handleZoomEvent$self$$, $pzcMatrix$$12$$) {
  $JSCompiler_StaticMethods_handleZoomEvent$self$$.Zoom = $pzcMatrix$$12$$.$_a$;
  $JSCompiler_StaticMethods_handleZoomEvent$self$$.$isDrilled$() ? ((0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$_disclosedInnerShape$, 2), (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$_disclosedOuterShape$, 4)) : $JSCompiler_StaticMethods_handleZoomEvent$self$$.$isSelected$() ? 
  $JSCompiler_StaticMethods_handleZoomEvent$self$$.$isHoverEffectShown$() ? ((0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$InnerShape$, 2), (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$, 6)) : ((0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, 
  $JSCompiler_StaticMethods_handleZoomEvent$self$$.$InnerShape$, 1), (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$, 4)) : $JSCompiler_StaticMethods_handleZoomEvent$self$$.$isHoverEffectShown$() ? (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$InnerShape$, 2) : (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, 
  $JSCompiler_StaticMethods_handleZoomEvent$self$$, 1)
};
D.$DvtBaseMapManager$$ = this.DvtBaseMapManager;
D.$DvtBaseMapManager$$ ? (D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$ = D.$DvtBaseMapManager$$._UNPROCESSED_MAPS, D.$DvtBaseMapManager$$.$_UNPROCESSED_PARENT_UPDATES$ = D.$DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES) : D.$DvtBaseMapManager$$ = {$_UNPROCESSED_MAPS$:[[], [], []], $_UNPROCESSED_PARENT_UPDATES$:[[], [], []]};
"undefined" != typeof D.DVT_ADVANCED_CLOSURE && ((0,D.$goog$exportSymbol$$)("DvtBaseMapManager", D.$DvtBaseMapManager$$), D.$DvtBaseMapManager$$._UNPROCESSED_MAPS = D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$, D.$DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES = D.$DvtBaseMapManager$$.$_UNPROCESSED_PARENT_UPDATES$);
D.$DvtObj$$.$createSubclass$(D.$DvtBaseMapManager$$, D.$DvtObj$$, "DvtBaseMapManager");
D.$DvtBaseMapManager$$.$TYPE_LABELS$ = 0;
D.$DvtBaseMapManager$$.$TYPE_PATH$ = 1;
D.$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$ = 2;
D.$DvtBaseMapManager$$.$TYPE_LABELINFO$ = 3;
D.$DvtBaseMapManager$$.$TYPE_DIM$ = 4;
D.$DvtBaseMapManager$$.$_INDEX$ = "__index";
D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$ = {};
D.$DvtBaseMapManager$$.$getBaseMapDim$ = function $$DvtBaseMapManager$$$$getBaseMapDim$$($baseMapName$$1$$, $layerName$$13$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $dimAr_layer$$11$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$1$$][$layerName$$13$$];
  return $dimAr_layer$$11$$ && ($dimAr_layer$$11$$ = $dimAr_layer$$11$$[D.$DvtBaseMapManager$$.$TYPE_DIM$]) ? new D.$DvtRectangle$$($dimAr_layer$$11$$[0], $dimAr_layer$$11$$[1], $dimAr_layer$$11$$[2], $dimAr_layer$$11$$[3]) : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getAreaLabelInfo$ = function $$DvtBaseMapManager$$$$getAreaLabelInfo$$($baseMapName$$2$$, $layerName$$14$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $layer$$12$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$2$$][$layerName$$14$$];
  return $layer$$12$$ ? $layer$$12$$[D.$DvtBaseMapManager$$.$TYPE_LABELINFO$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getAreaNames$ = function $$DvtBaseMapManager$$$$getAreaNames$$($baseMapName$$3$$, $layerName$$15$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $layer$$13$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$3$$][$layerName$$15$$];
  return $layer$$13$$ ? $layer$$13$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getLongAreaLabel$ = function $$DvtBaseMapManager$$$$getLongAreaLabel$$($baseMapName$$4_layer$$14$$, $layerName$$16$$, $areaId$$10$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  $baseMapName$$4_layer$$14$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$4_layer$$14$$][$layerName$$16$$];
  var $labels$$18$$;
  $baseMapName$$4_layer$$14$$ && ($labels$$18$$ = $baseMapName$$4_layer$$14$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$]);
  return $labels$$18$$ && $labels$$18$$[$areaId$$10$$] ? $labels$$18$$[$areaId$$10$$][1] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getCityCoordinates$ = function $$DvtBaseMapManager$$$$getCityCoordinates$$($baseMapName$$5$$, $city$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $basemap$$4_cityLayer_coords$$24$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$5$$];
  if($basemap$$4_cityLayer_coords$$24$$ && ($basemap$$4_cityLayer_coords$$24$$ = $basemap$$4_cityLayer_coords$$24$$.cities)) {
    if($basemap$$4_cityLayer_coords$$24$$ = $basemap$$4_cityLayer_coords$$24$$[D.$DvtBaseMapManager$$.$TYPE_PATH$][$city$$]) {
      return new D.$DvtPoint$$($basemap$$4_cityLayer_coords$$24$$[0], $basemap$$4_cityLayer_coords$$24$$[1])
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getCityLabel$ = function $$DvtBaseMapManager$$$$getCityLabel$$($baseMapName$$6$$, $city$$1$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $basemap$$5_cityLabel_cityLayer$$1$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$6$$];
  if($basemap$$5_cityLabel_cityLayer$$1$$ && ($basemap$$5_cityLabel_cityLayer$$1$$ = $basemap$$5_cityLabel_cityLayer$$1$$.cities)) {
    if($basemap$$5_cityLabel_cityLayer$$1$$ = $basemap$$5_cityLabel_cityLayer$$1$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$][$city$$1$$]) {
      return $basemap$$5_cityLabel_cityLayer$$1$$[1]
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getAreaCenter$ = function $$DvtBaseMapManager$$$$getAreaCenter$$($arPath$$2_baseMapName$$7_path$$44$$, $layerName$$17$$, $areaId$$11$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $basemap$$6_labelInfo$$10_layer$$15$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$arPath$$2_baseMapName$$7_path$$44$$];
  if($basemap$$6_labelInfo$$10_layer$$15$$ && ($basemap$$6_labelInfo$$10_layer$$15$$ = $basemap$$6_labelInfo$$10_layer$$15$$[$layerName$$17$$])) {
    if(($basemap$$6_labelInfo$$10_layer$$15$$ = $basemap$$6_labelInfo$$10_layer$$15$$[D.$DvtBaseMapManager$$.$TYPE_LABELINFO$]) && $basemap$$6_labelInfo$$10_layer$$15$$[$areaId$$11$$]) {
      return(0,D.$DvtRectangle$create$$)($basemap$$6_labelInfo$$10_layer$$15$$[$areaId$$11$$][0]).$getCenter$()
    }
    $arPath$$2_baseMapName$$7_path$$44$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$arPath$$2_baseMapName$$7_path$$44$$][$layerName$$17$$][D.$DvtBaseMapManager$$.$TYPE_PATH$][$areaId$$11$$];
    if(!$arPath$$2_baseMapName$$7_path$$44$$) {
      return D.$JSCompiler_alias_NULL$$
    }
    $arPath$$2_baseMapName$$7_path$$44$$ = window.DvtPathUtils.$createPathArray$($arPath$$2_baseMapName$$7_path$$44$$);
    return window.DvtPathUtils.$getDimensions$($arPath$$2_baseMapName$$7_path$$44$$).$getCenter$()
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getChildLayerName$ = function $$DvtBaseMapManager$$$$getChildLayerName$$($baseMapName$$8$$, $layerName$$18$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $layer$$16$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$8$$][$layerName$$18$$];
  return $layer$$16$$ ? D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$8$$][D.$DvtBaseMapManager$$.$_INDEX$][$layer$$16$$.__index + 1] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getParentLayerName$ = function $$DvtBaseMapManager$$$$getParentLayerName$$($baseMapName$$9$$, $layerName$$19$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$9$$][$layerName$$19$$] ? D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$9$$][D.$DvtBaseMapManager$$.$_INDEX$][D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$9$$][$layerName$$19$$].__index - 1] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getAreaPaths$ = function $$DvtBaseMapManager$$$$getAreaPaths$$($baseMapName$$10$$, $layerName$$20$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$10$$][$layerName$$20$$][D.$DvtBaseMapManager$$.$TYPE_PATH$]
};
D.$DvtBaseMapManager$$.$getPathForArea$ = function $$DvtBaseMapManager$$$$getPathForArea$$($baseMapName$$11$$, $layerName$$21$$, $area$$27$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$11$$][$layerName$$21$$][D.$DvtBaseMapManager$$.$TYPE_PATH$][$area$$27$$]
};
D.$DvtBaseMapManager$$.$getChildrenForLayerAreas$ = function $$DvtBaseMapManager$$$$getChildrenForLayerAreas$$($baseMapName$$12$$, $layerName$$22$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $childLayerName_children$$17$$ = D.$DvtBaseMapManager$$.$getChildLayerName$($baseMapName$$12$$, $layerName$$22$$);
  return $childLayerName_children$$17$$ && ($childLayerName_children$$17$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$12$$][$childLayerName_children$$17$$][D.$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$]) ? $childLayerName_children$$17$$ : []
};
D.$DvtBaseMapManager$$.$getMapLayerName$ = function $$DvtBaseMapManager$$$$getMapLayerName$$($baseMapName$$13$$, $index$$143$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$13$$][D.$DvtBaseMapManager$$.$_INDEX$][$index$$143$$]
};
D.$DvtBaseMapManager$$.$registerBaseMapLayer$ = function $$DvtBaseMapManager$$$$registerBaseMapLayer$$($baseMapName$$14_layerMetadata$$, $layerName$$23$$, $labelMetadata$$, $pathMetadata$$, $parentsRegionMetadata$$, $labelInfoMetadata$$, $index$$144$$, $dim$$26$$) {
  var $basemapMetadata$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$14_layerMetadata$$];
  $basemapMetadata$$ || ($basemapMetadata$$ = {}, $basemapMetadata$$[D.$DvtBaseMapManager$$.$_INDEX$] = [], D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$14_layerMetadata$$] = $basemapMetadata$$);
  $baseMapName$$14_layerMetadata$$ = $basemapMetadata$$[$layerName$$23$$];
  $baseMapName$$14_layerMetadata$$ || ($baseMapName$$14_layerMetadata$$ = {}, $basemapMetadata$$[$layerName$$23$$] = $baseMapName$$14_layerMetadata$$, $index$$144$$ != D.$JSCompiler_alias_NULL$$ && ($basemapMetadata$$[D.$DvtBaseMapManager$$.$_INDEX$][$index$$144$$] = $layerName$$23$$));
  $baseMapName$$14_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$] = $labelMetadata$$;
  $baseMapName$$14_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_PATH$] = $pathMetadata$$;
  $baseMapName$$14_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$] = $parentsRegionMetadata$$;
  $baseMapName$$14_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_LABELINFO$] = $labelInfoMetadata$$;
  $baseMapName$$14_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_DIM$] = $dim$$26$$;
  $baseMapName$$14_layerMetadata$$[D.$DvtBaseMapManager$$.$_INDEX$] = $index$$144$$
};
(0,D.$goog$exportSymbol$$)("DvtBaseMapManager.registerBaseMapLayer", D.$DvtBaseMapManager$$.$registerBaseMapLayer$);
D.$DvtBaseMapManager$$.$registerResourceBundle$ = function $$DvtBaseMapManager$$$$registerResourceBundle$$($baseMapName$$15_layerMetadata$$1$$, $layerName$$24$$, $labelMetadata$$1$$) {
  var $basemapMetadata$$1$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$15_layerMetadata$$1$$];
  $basemapMetadata$$1$$ || ($basemapMetadata$$1$$ = {}, D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$15_layerMetadata$$1$$] = $basemapMetadata$$1$$);
  $baseMapName$$15_layerMetadata$$1$$ = $basemapMetadata$$1$$[$layerName$$24$$];
  $baseMapName$$15_layerMetadata$$1$$ || ($baseMapName$$15_layerMetadata$$1$$ = {}, $basemapMetadata$$1$$[$layerName$$24$$] = $baseMapName$$15_layerMetadata$$1$$);
  ($baseMapName$$15_layerMetadata$$1$$ = $basemapMetadata$$1$$[$layerName$$24$$]) && ($baseMapName$$15_layerMetadata$$1$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$] = $labelMetadata$$1$$)
};
(0,D.$goog$exportSymbol$$)("DvtBaseMapManager.registerResourceBundle", D.$DvtBaseMapManager$$.$registerResourceBundle$);
D.$DvtBaseMapManager$$.$updateResourceBundle$ = function $$DvtBaseMapManager$$$$updateResourceBundle$$($baseMapName$$16_basemapMetadata$$2$$, $layerMetadata$$2_layerName$$25$$, $labelMetadata$$2$$) {
  if($baseMapName$$16_basemapMetadata$$2$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$16_basemapMetadata$$2$$]) {
    if($layerMetadata$$2_layerName$$25$$ = $baseMapName$$16_basemapMetadata$$2$$[$layerMetadata$$2_layerName$$25$$]) {
      for(var $prop$$15$$ in $labelMetadata$$2$$) {
        $layerMetadata$$2_layerName$$25$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$][$prop$$15$$] = $labelMetadata$$2$$[$prop$$15$$]
      }
    }
  }
};
(0,D.$goog$exportSymbol$$)("DvtBaseMapManager.updateResourceBundle", D.$DvtBaseMapManager$$.$updateResourceBundle$);
D.$DvtBaseMapManager$$.$loadUnprocessedMaps$ = function $$DvtBaseMapManager$$$$loadUnprocessedMaps$$($unprocessedMaps$$, $hierarchyUpdates$$) {
  D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$ = $unprocessedMaps$$;
  D.$DvtBaseMapManager$$.$_UNPROCESSED_PARENT_UPDATES$ = $hierarchyUpdates$$;
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$()
};
(0,D.$goog$exportSymbol$$)("DvtBaseMapManager.loadUnprocessedMaps", D.$DvtBaseMapManager$$.$loadUnprocessedMaps$);
D.$DvtBaseMapManager$$.$_processUnprocessedMaps$ = function $$DvtBaseMapManager$$$$_processUnprocessedMaps$$() {
  var $i$$544_index$$145$$, $args$$6$$;
  if(D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$) {
    for($i$$544_index$$145$$ = 0;$i$$544_index$$145$$ < D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$[0].length;$i$$544_index$$145$$++) {
      $args$$6$$ = D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$[0][$i$$544_index$$145$$], D.$DvtBaseMapManager$$.$registerBaseMapLayer$($args$$6$$[0], $args$$6$$[1], $args$$6$$[2], $args$$6$$[3], $args$$6$$[4], $args$$6$$[5], $args$$6$$[6], $args$$6$$[7])
    }
    for($i$$544_index$$145$$ = 0;$i$$544_index$$145$$ < D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$[1].length;$i$$544_index$$145$$++) {
      $args$$6$$ = D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$[1][$i$$544_index$$145$$], D.$DvtBaseMapManager$$.$registerResourceBundle$($args$$6$$[0], $args$$6$$[1], $args$$6$$[2])
    }
    for($i$$544_index$$145$$ = 0;$i$$544_index$$145$$ < D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$[2].length;$i$$544_index$$145$$++) {
      $args$$6$$ = D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$[2][$i$$544_index$$145$$], D.$DvtBaseMapManager$$.$updateResourceBundle$($args$$6$$[0], $args$$6$$[1], $args$$6$$[2])
    }
    D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$ = D.$JSCompiler_alias_NULL$$
  }
  if(D.$DvtBaseMapManager$$.$_UNPROCESSED_PARENT_UPDATES$) {
    for($i$$544_index$$145$$ = 0;$i$$544_index$$145$$ < D.$DvtBaseMapManager$$.$_UNPROCESSED_PARENT_UPDATES$[0].length;$i$$544_index$$145$$++) {
      $args$$6$$ = D.$DvtBaseMapManager$$.$_UNPROCESSED_PARENT_UPDATES$[0][$i$$544_index$$145$$];
      var $extendedLayer_indicies_layerMetadata$$3$$ = $args$$6$$[1], $layerName$$26_lowerLayer$$ = $args$$6$$[2], $basemapMetadata$$3$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$args$$6$$[0]], $basemapDim$$;
      if($basemapMetadata$$3$$) {
        if($extendedLayer_indicies_layerMetadata$$3$$ = $basemapMetadata$$3$$[$extendedLayer_indicies_layerMetadata$$3$$]) {
          $extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$] = $args$$6$$[3];
          $basemapDim$$ = $extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$TYPE_DIM$];
          $i$$544_index$$145$$ = $extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$_INDEX$];
          $extendedLayer_indicies_layerMetadata$$3$$ = $basemapMetadata$$3$$[D.$DvtBaseMapManager$$.$_INDEX$];
          $extendedLayer_indicies_layerMetadata$$3$$.splice($i$$544_index$$145$$, 0, $layerName$$26_lowerLayer$$);
          $basemapMetadata$$3$$[$layerName$$26_lowerLayer$$][D.$DvtBaseMapManager$$.$_INDEX$] = $i$$544_index$$145$$;
          for($i$$544_index$$145$$ += 1;$i$$544_index$$145$$ < $extendedLayer_indicies_layerMetadata$$3$$.length;$i$$544_index$$145$$++) {
            ($layerName$$26_lowerLayer$$ = $basemapMetadata$$3$$[$extendedLayer_indicies_layerMetadata$$3$$[$i$$544_index$$145$$]]) && $layerName$$26_lowerLayer$$[D.$DvtBaseMapManager$$.$_INDEX$]++
          }
        }
        ($extendedLayer_indicies_layerMetadata$$3$$ = $basemapMetadata$$3$$[$args$$6$$[2]]) && ($extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$TYPE_DIM$] = $basemapDim$$)
      }
    }
  }
};
D.$DvtBaseMapManager$$.$simplifyAreaPaths$ = function $$DvtBaseMapManager$$$$simplifyAreaPaths$$($paths$$, $basemapW_scale$$54$$, $basemapH_simplifiedPaths$$, $pathAr_viewportW$$, $viewportH$$, $zoomFactor$$1$$) {
  if(0 < $zoomFactor$$1$$) {
    $basemapW_scale$$54$$ = 1 / (window.Math.min($pathAr_viewportW$$ / $basemapW_scale$$54$$, $viewportH$$ / $basemapH_simplifiedPaths$$) * $zoomFactor$$1$$);
    if(1 >= $basemapW_scale$$54$$) {
      return $paths$$
    }
    $basemapH_simplifiedPaths$$ = [];
    if($paths$$) {
      for(var $path$$45$$ in $paths$$) {
        $pathAr_viewportW$$ = $paths$$[$path$$45$$], (0,window.isNaN)($pathAr_viewportW$$) && ($pathAr_viewportW$$ = window.DvtPathUtils.$createPathArray$($paths$$[$path$$45$$])), $basemapH_simplifiedPaths$$[$path$$45$$] = window.DvtPathUtils.$simplifyPath$($pathAr_viewportW$$, $basemapW_scale$$54$$)
      }
    }
    return $basemapH_simplifiedPaths$$
  }
  return $paths$$
};
D.$DvtThematicMapCategoryWrapper$$ = function $$DvtThematicMapCategoryWrapper$$$($displayable$$50$$, $category$$9$$) {
  this.Init($displayable$$50$$, $category$$9$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapCategoryWrapper$$, D.$DvtObj$$, "DvtThematicMapCategoryWrapper");
D.$DvtThematicMapCategoryWrapper$$.prototype.Init = function $$DvtThematicMapCategoryWrapper$$$$Init$($displayable$$51$$, $category$$10$$) {
  this.$_displayable$ = $displayable$$51$$;
  this.$_category$ = $category$$10$$
};
D.$DvtThematicMapCategoryWrapper$$.prototype.$getCategories$ = (0,D.$JSCompiler_get$$)("$_category$");
D.$DvtThematicMapCategoryWrapper$$.prototype.$getDisplayables$ = function $$DvtThematicMapCategoryWrapper$$$$$getDisplayables$$() {
  return[this.$_displayable$]
};
D.$DvtMapDrillEvent$$ = function $$DvtMapDrillEvent$$$($drillType$$) {
  this.Init(D.$DvtMapDrillEvent$$.$TYPE$);
  this.$_drillType$ = $drillType$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDrillEvent$$, D.$DvtBaseComponentEvent$$, "DvtMapDrillEvent");
D.$DvtMapDrillEvent$$.$TYPE$ = "drill";
D.$DvtMapDrillEvent$$.$DRILL_UP$ = 0;
D.$DvtMapDrillEvent$$.$DRILL_DOWN$ = 1;
D.$DvtMapDrillEvent$$.$RESET$ = 2;
D.$DvtMapDrillEvent$$.prototype.$setDisclosed$ = (0,D.$JSCompiler_set$$)("$_disclosed$");
D.$DvtMapActionEvent$$ = function $$DvtMapActionEvent$$$($clientId$$18$$, $rowKey$$29$$, $action$$19$$) {
  this.Init("action");
  this.$_clientId$ = $clientId$$18$$;
  this.$_rowKey$ = $rowKey$$29$$;
  this.$_action$ = $action$$19$$
};
(0,D.$goog$exportSymbol$$)("DvtMapActionEvent", D.$DvtMapActionEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtMapActionEvent$$, D.$DvtBaseComponentEvent$$, "DvtMapActionEvent");
D.$DvtMapActionEvent$$.TYPE = "action";
D.$DvtMapActionEvent$$.prototype.$getClientId$ = (0,D.$JSCompiler_get$$)("$_clientId$");
D.$DvtMapActionEvent$$.prototype.getClientId = D.$DvtMapActionEvent$$.prototype.$getClientId$;
D.$DvtMapActionEvent$$.prototype.$getRowKey$ = (0,D.$JSCompiler_get$$)("$_rowKey$");
D.$DvtMapActionEvent$$.prototype.getRowKey = D.$DvtMapActionEvent$$.prototype.$getRowKey$;
D.$DvtMapActionEvent$$.prototype.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$DvtMapActionEvent$$.prototype.getAction = D.$DvtMapActionEvent$$.prototype.$getAction$;
D.$DvtMapLabel$$ = function $$DvtMapLabel$$$($context$$280$$, $label$$52$$, $labelInfo$$7$$, $labelDisplay$$3$$, $parentContainer$$, $bSupportsVectorEffects$$2$$) {
  this.Init($context$$280$$, $label$$52$$, $labelInfo$$7$$, $labelDisplay$$3$$, $parentContainer$$, $bSupportsVectorEffects$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapLabel$$, D.$DvtOutputText$$, "DvtMapLabel");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapLabel$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$281$$, $i$$503_label$$53$$, $labelInfo$$8$$, $labelDisplay$$4_line$$15_polyline$$, $parentContainer$$1_stroke$$70$$, $bSupportsVectorEffects$$3$$) {
  D.$DvtMapLabel$$.$superclass$.Init.call(this, $context$$281$$, $i$$503_label$$53$$, 0, 0);
  this.$_bSupportsVectorEffects$ = $bSupportsVectorEffects$$3$$;
  this.$_boundRectangle$ = [];
  this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$alignCenter$();
  this.$alignMiddle$();
  this.$_center$ = D.$JSCompiler_alias_NULL$$;
  this.$_labelDisplay$ = $labelDisplay$$4_line$$15_polyline$$;
  this.$_parentContainer$ = $parentContainer$$1_stroke$$70$$;
  if($labelInfo$$8$$ && (this.$_boundRectangle$.push((0,D.$DvtRectangle$create$$)($labelInfo$$8$$[0])), 1 < $labelInfo$$8$$.length)) {
    this.$_leaderLines$ = [];
    for($i$$503_label$$53$$ = 1;$i$$503_label$$53$$ < $labelInfo$$8$$.length;$i$$503_label$$53$$++) {
      $labelDisplay$$4_line$$15_polyline$$ = $labelInfo$$8$$[$i$$503_label$$53$$], this.$_boundRectangle$.push((0,D.$DvtRectangle$create$$)($labelDisplay$$4_line$$15_polyline$$[0])), $labelDisplay$$4_line$$15_polyline$$ = new D.$DvtPolyline$$($context$$281$$, $labelDisplay$$4_line$$15_polyline$$[1]), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($labelDisplay$$4_line$$15_polyline$$), $parentContainer$$1_stroke$$70$$ = new D.$DvtSolidStroke$$("#000000"), this.$_bSupportsVectorEffects$ && ($parentContainer$$1_stroke$$70$$.$_bFixedWidth$ = 
      D.$JSCompiler_alias_TRUE$$), $labelDisplay$$4_line$$15_polyline$$.$setStroke$($parentContainer$$1_stroke$$70$$), this.$_leaderLines$.push($labelDisplay$$4_line$$15_polyline$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.update = function $$JSCompiler_prototypeAlias$$$update$($pzcMatrix$$2_zoom$$10$$) {
  $pzcMatrix$$2_zoom$$10$$ = $pzcMatrix$$2_zoom$$10$$.$_a$;
  for(var $mat$$23_state$$69_stroke$$71$$ = -1, $center$$7_estimatedDims$$1$$ = D.$DvtTextUtils$$.$guessTextDimensions$(this), $labelBox_remove_style$$39$$ = D.$JSCompiler_alias_FALSE$$, $i$$504_leaderLinePoints$$ = 0;$i$$504_leaderLinePoints$$ < this.$_boundRectangle$.length;$i$$504_leaderLinePoints$$++) {
    var $numPoints$$2_zoomW$$ = this.$_boundRectangle$[$i$$504_leaderLinePoints$$].$w$ * $pzcMatrix$$2_zoom$$10$$;
    if($center$$7_estimatedDims$$1$$.$h$ <= this.$_boundRectangle$[$i$$504_leaderLinePoints$$].$h$ * $pzcMatrix$$2_zoom$$10$$) {
      if($center$$7_estimatedDims$$1$$.$w$ <= $numPoints$$2_zoomW$$) {
        $mat$$23_state$$69_stroke$$71$$ = $i$$504_leaderLinePoints$$;
        break
      }else {
        if(this.getParent() || ($labelBox_remove_style$$39$$ = D.$JSCompiler_alias_TRUE$$, this.$_parentContainer$.$addChild$(this)), this.$getDimensions$().$w$ <= $numPoints$$2_zoomW$$) {
          $mat$$23_state$$69_stroke$$71$$ = $i$$504_leaderLinePoints$$;
          break
        }
      }
    }
  }
  -1 == $mat$$23_state$$69_stroke$$71$$ && "on" == this.$_labelDisplay$ && ($mat$$23_state$$69_stroke$$71$$ = this.$_boundRectangle$.length - 1);
  this.$_currentState$ != $mat$$23_state$$69_stroke$$71$$ ? (-1 == $mat$$23_state$$69_stroke$$71$$ ? this.reset() : (this.getParent() || this.$_parentContainer$.$addChild$(this), $center$$7_estimatedDims$$1$$ = this.$_boundRectangle$[$mat$$23_state$$69_stroke$$71$$].$getCenter$(), this.$setCenter$($center$$7_estimatedDims$$1$$), this.$_leaderLines$ && (this.$_parentContainer$.removeChild(this.$_leaderLine$), this.$_leaderLine$ = D.$JSCompiler_alias_NULL$$, 0 < $mat$$23_state$$69_stroke$$71$$ ? (this.$_leaderLine$ = 
  this.$_leaderLines$[$mat$$23_state$$69_stroke$$71$$ - 1], this.$_parentContainer$.$addChild$(this.$_leaderLine$), $labelBox_remove_style$$39$$ = this.$getCSSStyle$(), $labelBox_remove_style$$39$$.$setStyle$("color", "#000000"), this.$setCSSStyle$($labelBox_remove_style$$39$$), $labelBox_remove_style$$39$$ = this.$_boundRectangle$[$mat$$23_state$$69_stroke$$71$$], $i$$504_leaderLinePoints$$ = this.$_leaderLine$.$getPoints$(), $numPoints$$2_zoomW$$ = $i$$504_leaderLinePoints$$.length, $labelBox_remove_style$$39$$.x > 
  $i$$504_leaderLinePoints$$[$numPoints$$2_zoomW$$ - 2] ? (this.$alignLeft$(), this.$alignMiddle$(), this.$setCenter$(new D.$DvtPoint$$($labelBox_remove_style$$39$$.x, $center$$7_estimatedDims$$1$$.y))) : $labelBox_remove_style$$39$$.y > $i$$504_leaderLinePoints$$[$numPoints$$2_zoomW$$ - 1] ? (this.$alignTop$(), this.$alignCenter$(), this.$setCenter$(new D.$DvtPoint$$($center$$7_estimatedDims$$1$$.x, $labelBox_remove_style$$39$$.y))) : $labelBox_remove_style$$39$$.x + $labelBox_remove_style$$39$$.$w$ < 
  $i$$504_leaderLinePoints$$[$numPoints$$2_zoomW$$ - 2] ? (this.$alignRight$(), this.$alignMiddle$(), this.$setCenter$(new D.$DvtPoint$$($labelBox_remove_style$$39$$.x + $labelBox_remove_style$$39$$.$w$, $center$$7_estimatedDims$$1$$.y))) : $labelBox_remove_style$$39$$.y + $labelBox_remove_style$$39$$.$h$ < $i$$504_leaderLinePoints$$[$numPoints$$2_zoomW$$ - 1] && (this.$alignBottom$(), this.$alignCenter$(), this.$setCenter$(new D.$DvtPoint$$($center$$7_estimatedDims$$1$$.x, $labelBox_remove_style$$39$$.y + 
  $labelBox_remove_style$$39$$.$h$)))) : (this.$alignCenter$(), this.$alignMiddle$(), $labelBox_remove_style$$39$$ = this.$getCSSStyle$(), $labelBox_remove_style$$39$$.$setStyle$("color", this.$_labelColor$), this.$setCSSStyle$($labelBox_remove_style$$39$$)))), this.$_currentState$ = $mat$$23_state$$69_stroke$$71$$) : -1 == $mat$$23_state$$69_stroke$$71$$ && $labelBox_remove_style$$39$$ && this.$_parentContainer$.removeChild(this);
  -1 != this.$_currentState$ && ($mat$$23_state$$69_stroke$$71$$ = new D.$DvtMatrix$$, $mat$$23_state$$69_stroke$$71$$.translate($pzcMatrix$$2_zoom$$10$$ * this.$_center$.x - this.$_center$.x, $pzcMatrix$$2_zoom$$10$$ * this.$_center$.y - this.$_center$.y), this.$setMatrix$($mat$$23_state$$69_stroke$$71$$), this.$_leaderLine$ && (this.$_leaderLine$.$setMatrix$(new D.$DvtMatrix$$($pzcMatrix$$2_zoom$$10$$, 0, 0, $pzcMatrix$$2_zoom$$10$$)), this.$_bSupportsVectorEffects$ || ($mat$$23_state$$69_stroke$$71$$ = 
  this.$_leaderLine$.$getStroke$().clone(), $mat$$23_state$$69_stroke$$71$$.$setWidth$(1 / $pzcMatrix$$2_zoom$$10$$), this.$_leaderLine$.$setStroke$($mat$$23_state$$69_stroke$$71$$))))
};
D.$JSCompiler_prototypeAlias$$.$setCenter$ = function $$JSCompiler_prototypeAlias$$$$setCenter$$($p$$18$$) {
  this.$_center$ = $p$$18$$;
  this.$setX$($p$$18$$.x);
  this.$setY$($p$$18$$.y)
};
D.$JSCompiler_prototypeAlias$$.$getCenter$ = (0,D.$JSCompiler_get$$)("$_center$");
D.$JSCompiler_prototypeAlias$$.$setCSSStyle$ = function $$JSCompiler_prototypeAlias$$$$setCSSStyle$$($cssStyle$$8$$) {
  D.$DvtMapLabel$$.$superclass$.$setCSSStyle$.call(this, $cssStyle$$8$$);
  this.$_labelColor$ || (this.$_labelColor$ = $cssStyle$$8$$.$getStyle$("color"))
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$() {
  this.$_parentContainer$.removeChild(this);
  this.$_currentState$ = -1;
  this.$_leaderLine$ && (this.$_parentContainer$.removeChild(this.$_leaderLine$), this.$_leaderLine$ = D.$JSCompiler_alias_NULL$$)
};
D.$DvtMapDataObject$$ = function $$DvtMapDataObject$$$($context$$283$$, $dataLayer$$8$$, $rowKey$$21$$, $clientId$$7$$, $regionId$$2$$) {
  this.Init($context$$283$$, $dataLayer$$8$$, $rowKey$$21$$, $clientId$$7$$, $regionId$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDataObject$$, D.$DvtContainer$$, "DvtMapDataObject");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataObject$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$284$$, $dataLayer$$9$$, $rowKey$$22$$, $clientId$$8$$, $regionId$$3$$) {
  D.$DvtMapDataObject$$.$superclass$.Init.call(this, $context$$284$$, D.$JSCompiler_alias_NULL$$, $clientId$$8$$);
  this.$_categories$ = [];
  this.$Shape$ = D.$JSCompiler_alias_NULL$$;
  this.$_id$ = $rowKey$$22$$;
  this.$_clientId$ = $clientId$$8$$;
  this.$AreaId$ = $regionId$$3$$;
  this.$_selectionLayer$ = D.$JSCompiler_alias_NULL$$;
  this.$_datatipColor$ = "#000000";
  this.Zoom = 1;
  this.$_hasAction$ = D.$JSCompiler_alias_FALSE$$;
  this.$_dataLayer$ = $dataLayer$$9$$;
  this.$Bundle$ = $dataLayer$$9$$.$_tmap$.$getBundle$()
};
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getClientId$ = (0,D.$JSCompiler_get$$)("$_clientId$");
D.$JSCompiler_prototypeAlias$$.$setDisplayable$ = function $$JSCompiler_prototypeAlias$$$$setDisplayable$$($disp$$1$$) {
  (this.$Shape$ = $disp$$1$$) && this.$Shape$.$setAriaRole$("img")
};
D.$JSCompiler_prototypeAlias$$.$setCenter$ = (0,D.$JSCompiler_set$$)("$Center$");
D.$JSCompiler_prototypeAlias$$.$getCenter$ = (0,D.$JSCompiler_get$$)("$Center$");
D.$JSCompiler_prototypeAlias$$.$getDisplayable$ = (0,D.$JSCompiler_get$$)("$Shape$");
D.$JSCompiler_prototypeAlias$$.$setLabel$ = (0,D.$JSCompiler_set$$)("$Label$");
D.$JSCompiler_prototypeAlias$$.$getLabel$ = (0,D.$JSCompiler_get$$)("$Label$");
D.$JSCompiler_prototypeAlias$$.$setLabelPosition$ = (0,D.$JSCompiler_set$$)("$LabelPos$");
D.$JSCompiler_prototypeAlias$$.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$JSCompiler_prototypeAlias$$.$setVisible$ = function $$JSCompiler_prototypeAlias$$$$setVisible$$($bVisible$$10$$) {
  D.$DvtMapDataObject$$.$superclass$.$setVisible$.call(this, $bVisible$$10$$);
  this.$Label$ && this.$Label$.$setVisible$($bVisible$$10$$)
};
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = function $$JSCompiler_prototypeAlias$$$$getDisplayables$$() {
  return[this.$Shape$]
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = (0,D.$JSCompiler_get$$)("$_categories$");
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = (0,D.$JSCompiler_get$$)("$_datatip$");
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = (0,D.$JSCompiler_get$$)("$_datatipColor$");
D.$JSCompiler_prototypeAlias$$.$setDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$setDatatipColor$$($color$$44$$) {
  this.$_datatipColor$ = $color$$44$$;
  this.$Shape$ && this.$Shape$.$setDataColor$ && this.$Shape$.$setDataColor$($color$$44$$)
};
D.$JSCompiler_prototypeAlias$$.$setDatatip$ = function $$JSCompiler_prototypeAlias$$$$setDatatip$$($datatip$$1$$) {
  this.$_datatip$ = $datatip$$1$$;
  this.$UpdateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$6$$ = [];
  this.$isSelectable$() && $states$$6$$.push((0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$getDatatip$(), $states$$6$$, this.$Bundle$)
};
D.$JSCompiler_prototypeAlias$$.$UpdateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$UpdateAriaLabel$$() {
  !(0,D.$DvtAgent$deferAriaCreation$$)() && this.$Shape$ && (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)(this.$Shape$, "label", this.$getAriaLabel$())
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$Shape$.$isSelectable$()
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = function $$JSCompiler_prototypeAlias$$$$isSelected$$() {
  return this.$Shape$.$isSelected$()
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ || this.$HideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$HideHoverEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$setShowPopupBehaviors$ = (0,D.$JSCompiler_set$$)("$_showPopupBehaviors$");
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = (0,D.$JSCompiler_get$$)("$_showPopupBehaviors$");
D.$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($clientIds$$9$$) {
  for(var $parentId$$30$$ = this.$_dataLayer$.$getClientId$(), $i$$509$$ = 0;$i$$509$$ < $clientIds$$9$$.length && $clientIds$$9$$[$i$$509$$] != $parentId$$30$$;$i$$509$$++) {
  }
  return $parentId$$30$$
};
D.$JSCompiler_prototypeAlias$$.$getDataLayer$ = (0,D.$JSCompiler_get$$)("$_dataLayer$");
D.$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$() {
  return this.$_dataLayer$.$__getDragTransferable$(this)
};
D.$JSCompiler_prototypeAlias$$.$getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragFeedback$$() {
  return this.$_dataLayer$.$__getDragFeedback$()
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$411$$) {
  return $event$$411$$.type == D.$DvtMouseEvent$CLICK$$ ? this : 32 == $event$$411$$.keyCode && $event$$411$$.ctrlKey ? this : (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)(this, $event$$411$$, this.$GetNavigables$())
};
D.$JSCompiler_prototypeAlias$$.$GetNavigables$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$10$$) {
  return this.$Shape$ && this.$Shape$.getParent() ? this.$Shape$.$getDimensions$($targetCoordinateSpace$$10$$) : new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$Shape$ ? this.$Shape$.$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ && (this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$, this.$hideHoverEffect$())
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($pzcMatrix$$6$$) {
  this.$Shape$.getParent() && (this.Zoom = $pzcMatrix$$6$$.$_a$, this.$recenter$())
};
D.$JSCompiler_prototypeAlias$$.$PositionLabel$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$recenter$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$getSize$ = (0,D.$JSCompiler_returnArg$$)(0);
D.$DvtMapDataArea$$ = function $$DvtMapDataArea$$$($context$$297$$, $dataLayer$$19$$, $rowKey$$25$$, $clientId$$13$$, $regionId$$8$$) {
  this.Init($context$$297$$, $dataLayer$$19$$, $rowKey$$25$$, $clientId$$13$$, $regionId$$8$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDataArea$$, D.$DvtMapDataObject$$, "DvtMapDataArea");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataArea$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$298$$, $dataLayer$$20$$, $rowKey$$26$$, $clientId$$14$$, $regionId$$9$$) {
  D.$DvtMapDataArea$$.$superclass$.Init.call(this, $context$$298$$, $dataLayer$$20$$, $rowKey$$26$$, $clientId$$14$$, $regionId$$9$$);
  this.$_isHoverEffectShowing$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$setDisplayable$ = function $$JSCompiler_prototypeAlias$$$$setDisplayable$$($disp$$2$$) {
  D.$DvtMapDataArea$$.$superclass$.$setDisplayable$.call(this, $disp$$2$$)
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$23$$) {
  $selected$$23$$ && !this.$_isHoverEffectShowing$ && this.$_dataAreaLayer$.$addChild$(this.$Shape$);
  this.$Shape$.$setSelected$($selected$$23$$);
  this.$UpdateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_dataAreaLayer$.$addChild$(this.$Shape$);
  this.$Shape$.$showHoverEffect$();
  this.$_isHoverEffectShowing$ = D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$HideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$HideHoverEffect$$() {
  this.$isSelected$() ? this.$_dataAreaLayer$.$addChild$(this.$Shape$) : this.$_dataAreaLayer$.$addChildAt$(this.$Shape$, 0);
  this.$Shape$.$hideHoverEffect$();
  this.$_isHoverEffectShowing$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$isDrilled$ = function $$JSCompiler_prototypeAlias$$$$isDrilled$$() {
  return this.$Shape$.$isDrilled$()
};
D.$JSCompiler_prototypeAlias$$.$setDrilled$ = function $$JSCompiler_prototypeAlias$$$$setDrilled$$($drilled$$1$$) {
  (this.$_isDrilled$ = $drilled$$1$$) ? this.$_dataAreaLayer$.$addChild$(this.$Shape$) : this.$_dataAreaLayer$.$addChildAt$(this.$Shape$, 0);
  this.$Shape$.$setDrilled$($drilled$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($pzcMatrix$$13$$) {
  this.$Shape$.getParent() && (D.$DvtMapDataArea$$.$superclass$.$HandleZoomEvent$.call(this, $pzcMatrix$$13$$), (0,D.$JSCompiler_StaticMethods_handleZoomEvent$$)(this.$Shape$, $pzcMatrix$$13$$), this.$isDrilled$() || this.$PositionLabel$($pzcMatrix$$13$$))
};
D.$JSCompiler_prototypeAlias$$.$PositionLabel$ = function $$JSCompiler_prototypeAlias$$$$PositionLabel$$($pzcMatrix$$14$$) {
  this.$Label$ && this.$Label$.update($pzcMatrix$$14$$)
};
D.$JSCompiler_prototypeAlias$$.$GetNavigables$ = function $$JSCompiler_prototypeAlias$$$$GetNavigables$$() {
  return(0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this.$getDataLayer$().$_tmap$)
};
D.$DvtMapDataMarker$$ = function $$DvtMapDataMarker$$$($context$$299$$, $dataLayer$$21$$, $rowKey$$27$$, $clientId$$15$$, $regionId$$10$$) {
  this.Init($context$$299$$, $dataLayer$$21$$, $rowKey$$27$$, $clientId$$15$$, $regionId$$10$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDataMarker$$, D.$DvtMapDataObject$$, "DvtMapDataMarker");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataMarker$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$300$$, $dataLayer$$22$$, $rowKey$$28$$, $clientId$$16$$, $regionId$$11$$) {
  D.$DvtMapDataMarker$$.$superclass$.Init.call(this, $context$$300$$, $dataLayer$$22$$, $rowKey$$28$$, $clientId$$16$$, $regionId$$11$$);
  this.$InitCanvasZoom$ = 1;
  this.$_size$ = 0
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$24$$) {
  this.$Shape$.$setSelected$($selected$$24$$);
  this.$UpdateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$Shape$.$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$HideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$HideHoverEffect$$() {
  this.$Shape$.$hideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$PositionLabel$ = function $$JSCompiler_prototypeAlias$$$$PositionLabel$$() {
  if(this.$Label$) {
    this.$Label$.$alignCenter$();
    var $x$$182$$ = (this.$Shape$.$getX$() + (0,D.$JSCompiler_StaticMethods_getScaledWidth$$)(this.$Shape$) / 2) * this.Zoom, $markerY$$1_y$$154$$ = this.$Shape$.$getY$() * this.Zoom, $markerH$$ = (0,D.$JSCompiler_StaticMethods_getScaledHeight$$)(this.$Shape$), $markerType$$1$$ = this.$Shape$.$getType$();
    "top" == this.$LabelPos$ ? ($markerY$$1_y$$154$$ -= 4, this.$Label$.$alignBottom$()) : "bottom" == this.$LabelPos$ ? ($markerY$$1_y$$154$$ += $markerH$$, this.$Label$.$alignTop$()) : ($markerY$$1_y$$154$$ = "triangleUp" == $markerType$$1$$ ? $markerY$$1_y$$154$$ + 2 * $markerH$$ / 3 : "triangleDown" == $markerType$$1$$ ? $markerY$$1_y$$154$$ + $markerH$$ / 3 : $markerY$$1_y$$154$$ + $markerH$$ / 2, this.$Label$.$alignMiddle$());
    this.$Label$.$setX$($x$$182$$);
    this.$Label$.$setY$($markerY$$1_y$$154$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$recenter$ = function $$JSCompiler_prototypeAlias$$$$recenter$$() {
  var $parent$$44$$ = this.$Shape$.getParent(), $height$$94_rotation$$11$$ = (0,D.$JSCompiler_StaticMethods_getScaledHeight$$)(this.$Shape$);
  (0,D.$JSCompiler_StaticMethods_getScaledWidth$$)(this.$Shape$) != D.$JSCompiler_alias_NULL$$ && ($height$$94_rotation$$11$$ != D.$JSCompiler_alias_NULL$$ && $parent$$44$$) && ($height$$94_rotation$$11$$ = this.$Shape$.$getRotation$(), this.$Label$ && this.$Shape$.$getRotation$() ? ((0,D.$JSCompiler_StaticMethods_setTranslate$$)($parent$$44$$, this.$Center$.x * this.Zoom - this.$Center$.x, this.$Center$.y * this.Zoom - this.$Center$.y), (0,D.$DvtAgent$workaroundFirefoxRepaint$$)($parent$$44$$)) : 
  ((0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$Shape$, this.$Center$.x * this.Zoom - (this.$Center$.x * window.Math.cos($height$$94_rotation$$11$$) - this.$Center$.y * window.Math.sin($height$$94_rotation$$11$$)), this.$Center$.y * this.Zoom - (this.$Center$.x * window.Math.sin($height$$94_rotation$$11$$) + this.$Center$.y * window.Math.cos($height$$94_rotation$$11$$))), (0,D.$DvtAgent$workaroundFirefoxRepaint$$)(this.$Shape$)))
};
D.$JSCompiler_prototypeAlias$$.$GetNavigables$ = function $$JSCompiler_prototypeAlias$$$$GetNavigables$$() {
  return(0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this.$getDataLayer$().$_tmap$)
};
D.$JSCompiler_prototypeAlias$$.$setSize$ = (0,D.$JSCompiler_set$$)("$_size$");
D.$JSCompiler_prototypeAlias$$.$getSize$ = (0,D.$JSCompiler_get$$)("$_size$");
D.$DvtMapDataImage$$ = function $$DvtMapDataImage$$$($context$$276$$, $dataLayer$$5$$, $rowKey$$19$$, $clientId$$1$$, $regionId$$) {
  this.Init($context$$276$$, $dataLayer$$5$$, $rowKey$$19$$, $clientId$$1$$, $regionId$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDataImage$$, D.$DvtMapDataObject$$, "DvtMapDataImage");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataImage$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$277$$, $dataLayer$$6$$, $rowKey$$20$$, $clientId$$2$$, $regionId$$1$$) {
  D.$DvtMapDataImage$$.$superclass$.Init.call(this, $context$$277$$, $dataLayer$$6$$, $rowKey$$20$$, $clientId$$2$$, $regionId$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$onImageLoaded$ = function $$JSCompiler_prototypeAlias$$$$onImageLoaded$$($image$$8$$) {
  $image$$8$$ && ($image$$8$$.width && $image$$8$$.height) && (this.$Shape$.getWidth() || this.$Shape$.$setWidth$($image$$8$$.width), this.$Shape$.getHeight() || this.$Shape$.$setHeight$($image$$8$$.height), this.$setSize$($image$$8$$.width * $image$$8$$.height), this.$Shape$.$setX$(this.$Center$.x - $image$$8$$.width / 2), this.$Shape$.$setY$(this.$Center$.y - $image$$8$$.height / 2), this.$recenter$())
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$JSCompiler_prototypeAlias$$.$recenter$ = function $$JSCompiler_prototypeAlias$$$$recenter$$() {
  var $curCenterX_width$$102$$ = this.$Shape$.getWidth(), $curCenterY_height$$91$$ = this.$Shape$.getHeight();
  $curCenterX_width$$102$$ != D.$JSCompiler_alias_NULL$$ && ($curCenterY_height$$91$$ != D.$JSCompiler_alias_NULL$$ && this.$Shape$.getParent()) && ($curCenterX_width$$102$$ = this.$Shape$.$getX$() + $curCenterX_width$$102$$ / 2, $curCenterY_height$$91$$ = this.$Shape$.$getY$() + $curCenterY_height$$91$$ / 2, (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$Shape$, $curCenterX_width$$102$$ * this.Zoom - this.$Center$.x, $curCenterY_height$$91$$ * this.Zoom - this.$Center$.y))
};
D.$JSCompiler_prototypeAlias$$.$setSize$ = (0,D.$JSCompiler_set$$)("$_size$");
D.$JSCompiler_prototypeAlias$$.$getSize$ = (0,D.$JSCompiler_get$$)("$_size$");
D.$DvtMapDataComponent$$ = function $$DvtMapDataComponent$$$($context$$291$$, $dataLayer$$17$$, $rowKey$$23$$, $clientId$$11$$, $regionId$$6$$) {
  this.Init($context$$291$$, $dataLayer$$17$$, $rowKey$$23$$, $clientId$$11$$, $regionId$$6$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDataComponent$$, D.$DvtMapDataObject$$, "DvtMapDataComponent");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataComponent$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$292$$, $dataLayer$$18$$, $rowKey$$24$$, $clientId$$12$$, $regionId$$7$$) {
  D.$DvtMapDataComponent$$.$superclass$.Init.call(this, $context$$292$$, $dataLayer$$18$$, $rowKey$$24$$, $clientId$$12$$, $regionId$$7$$)
};
D.$JSCompiler_prototypeAlias$$.$setWidth$ = (0,D.$JSCompiler_set$$)("$_width$");
D.$JSCompiler_prototypeAlias$$.getWidth = (0,D.$JSCompiler_get$$)("$_width$");
D.$JSCompiler_prototypeAlias$$.$setHeight$ = (0,D.$JSCompiler_set$$)("$_height$");
D.$JSCompiler_prototypeAlias$$.getHeight = (0,D.$JSCompiler_get$$)("$_height$");
D.$JSCompiler_prototypeAlias$$.$setX$ = (0,D.$JSCompiler_set$$)("$_x$");
D.$JSCompiler_prototypeAlias$$.$setY$ = (0,D.$JSCompiler_set$$)("$_y$");
D.$JSCompiler_prototypeAlias$$.$recenter$ = function $$JSCompiler_prototypeAlias$$$$recenter$$() {
  if(this.$Shape$.getParent()) {
    var $curCenterY$$1$$ = this.$_y$ + this.$_height$ / 2;
    this.$Shape$.$setTranslateX$(this.$_x$ + (this.$_x$ + this.$_width$ / 2) * this.Zoom - this.$Center$.x);
    this.$Shape$.$setTranslateY$(this.$_y$ + $curCenterY$$1$$ * this.Zoom - this.$Center$.y)
  }
};
D.$DvtMapDataImage$$.prototype.$getSize$ = function $$DvtMapDataImage$$$$$getSize$$() {
  return this.$_width$ * this.$_height$
};
D.$DvtMapArea$$ = function $$DvtMapArea$$$($context$$278$$, $dvtShape$$, $areaName$$1$$, $bSupportsVectorEffects$$) {
  this.Init($context$$278$$, $dvtShape$$, $areaName$$1$$, $bSupportsVectorEffects$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapArea$$, D.$DvtContainer$$, "DvtMapArea");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapArea$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$279_stroke$$68$$, $dvtShape$$1$$, $areaName$$2$$, $bSupportsVectorEffects$$1$$) {
  D.$DvtMapArea$$.$superclass$.Init.call(this, $context$$279_stroke$$68$$);
  this.$_isSelected$ = this.$_bSelectable$ = D.$JSCompiler_alias_FALSE$$;
  this.$_areaName$ = $areaName$$2$$;
  this.$_shape$ = $dvtShape$$1$$;
  this.$addChild$(this.$_shape$);
  this.$_bSupportsVectorEffects$ = $bSupportsVectorEffects$$1$$;
  if($context$$279_stroke$$68$$ = $dvtShape$$1$$.$getStroke$()) {
    this.$_areaStrokeWidth$ = $context$$279_stroke$$68$$.getWidth()
  }
  this.$_shape$ && this.$_shape$.$setAriaRole$("img")
};
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = (0,D.$JSCompiler_get$$)("$_tooltip$");
D.$JSCompiler_prototypeAlias$$.$setTooltip$ = (0,D.$JSCompiler_set$$)("$_tooltip$");
D.$JSCompiler_prototypeAlias$$.$getStroke$ = function $$JSCompiler_prototypeAlias$$$$getStroke$$() {
  return this.$_shape$ instanceof D.$DvtShape$$ ? this.$_shape$.$getStroke$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setStroke$ = function $$JSCompiler_prototypeAlias$$$$setStroke$$($stroke$$69$$) {
  this.$_shape$ instanceof D.$DvtShape$$ && this.$_shape$.$setStroke$($stroke$$69$$)
};
D.$JSCompiler_prototypeAlias$$.$setFill$ = function $$JSCompiler_prototypeAlias$$$$setFill$$($fill$$45$$) {
  this.$_shape$ instanceof D.$DvtShape$$ && this.$_shape$.$setFill$($fill$$45$$)
};
D.$JSCompiler_prototypeAlias$$.$getFill$ = function $$JSCompiler_prototypeAlias$$$$getFill$$() {
  return this.$_shape$ instanceof D.$DvtShape$$ ? this.$_shape$.$getFill$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getCmds$ = function $$JSCompiler_prototypeAlias$$$$getCmds$$() {
  return this.$_shape$ instanceof D.$DvtPath$$ ? this.$_shape$.$getCmds$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setCmds$ = function $$JSCompiler_prototypeAlias$$$$setCmds$$($cmds$$9$$) {
  this.$_shape$ instanceof D.$DvtPath$$ && this.$_shape$.$setCmds$($cmds$$9$$)
};
D.$JSCompiler_prototypeAlias$$.$setSrc$ = function $$JSCompiler_prototypeAlias$$$$setSrc$$($src$$11$$) {
  this.$_shape$ instanceof D.$DvtImage$$ && this.$_shape$.$setSrc$($src$$11$$)
};
D.$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$160$$, $y$$134$$) {
  var $dims$$38$$ = this.$getDimensions$();
  return $x$$160$$ >= $dims$$38$$.x && $x$$160$$ <= $dims$$38$$.x + $dims$$38$$.$w$ && $y$$134$$ >= $dims$$38$$.y && $y$$134$$ <= $dims$$38$$.y + $dims$$38$$.$h$
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($pzcMatrix$$) {
  if(!this.$_bSupportsVectorEffects$ && this.$_shape$ && this.$_areaStrokeWidth$) {
    var $zoomStroke$$ = this.$_shape$.$getStroke$().clone();
    $zoomStroke$$.$setWidth$(this.$_areaStrokeWidth$ / $pzcMatrix$$.$_a$);
    this.$_shape$.$setStroke$($zoomStroke$$)
  }
};
D.$DvtMapLayer$$ = function $$DvtMapLayer$$$($tmap$$11$$, $eventHandler$$6$$) {
  this.Init($tmap$$11$$, $eventHandler$$6$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapLayer$$, D.$DvtObj$$, "DvtMapLayer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$12$$, $eventHandler$$7$$) {
  this.$_tmap$ = $tmap$$12$$;
  this.$LayerName$ = "cities";
  this.$ClientId$ = D.$JSCompiler_alias_NULL$$;
  this.$EventHandler$ = $eventHandler$$7$$;
  this.$DataLayers$ = {};
  this.$PzcMatrix$ = new D.$DvtMatrix$$
};
D.$JSCompiler_prototypeAlias$$.$PreDataLayerUpdate$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$PostDataLayerUpdate$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$updateDataLayer$ = function $$JSCompiler_prototypeAlias$$$$updateDataLayer$$($dataLayer$$24$$, $pzcMatrix$$16$$) {
  this.$_animation$ && (this.$_animationStopped$ = D.$JSCompiler_alias_TRUE$$, this.$_animation$.stop(D.$JSCompiler_alias_TRUE$$));
  this.$PzcMatrix$ = $pzcMatrix$$16$$;
  this.$_oldDataLayer$ = this.$getDataLayer$($dataLayer$$24$$.$getClientId$());
  this.$DataLayers$[$dataLayer$$24$$.$getClientId$()] = $dataLayer$$24$$;
  $dataLayer$$24$$.$render$(this.$PzcMatrix$);
  $dataLayer$$24$$.$HandleZoomEvent$(new D.$DvtZoomEvent$$("zoomed"), this.$PzcMatrix$);
  if(this.$_oldDataLayer$) {
    var $anim$$26_oldContainers$$ = $dataLayer$$24$$.$getAnimation$(), $animDur$$2$$ = $dataLayer$$24$$.$getAnimationDuration$();
    if(D.$DvtBlackBoxAnimationHandler$$.isSupported($anim$$26_oldContainers$$)) {
      for(var $anim1_bounds1$$ = new D.$DvtRectangle$$(0, 0, this.$_tmap$.$_width$, this.$_tmap$.$_height$), $bounds2_oldNonScaledContainers$$ = (0,D.$JSCompiler_StaticMethods_getNonScaledContainers$$)(this.$_oldDataLayer$), $anim2_i$$529$$ = 0;$anim2_i$$529$$ < $bounds2_oldNonScaledContainers$$.length;$anim2_i$$529$$++) {
        var $rect$$26$$ = new D.$DvtRect$$(this.$_tmap$.$_context$, 0, 0, this.$_tmap$.$_width$, this.$_tmap$.$_height$);
        $rect$$26$$.$setFill$(D.$JSCompiler_alias_NULL$$);
        $bounds2_oldNonScaledContainers$$[$anim2_i$$529$$].$addChild$($rect$$26$$)
      }
      for(var $newNonScaledContainers_oldScaledContainers$$ = (0,D.$JSCompiler_StaticMethods_getNonScaledContainers$$)($dataLayer$$24$$), $anim2_i$$529$$ = 0;$anim2_i$$529$$ < $newNonScaledContainers_oldScaledContainers$$.length;$anim2_i$$529$$++) {
        $rect$$26$$ = new D.$DvtRect$$(this.$_tmap$.$_context$, 0, 0, this.$_tmap$.$_width$, this.$_tmap$.$_height$), $rect$$26$$.$setFill$(D.$JSCompiler_alias_NULL$$), $newNonScaledContainers_oldScaledContainers$$[$anim2_i$$529$$].$addChild$($rect$$26$$)
      }
      $anim1_bounds1$$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$_tmap$.$_context$, $anim$$26_oldContainers$$, $bounds2_oldNonScaledContainers$$, $newNonScaledContainers_oldScaledContainers$$, $anim1_bounds1$$, $animDur$$2$$);
      $bounds2_oldNonScaledContainers$$ = new D.$DvtRectangle$$(0, 0, this.$_tmap$.$_width$ / this.$PzcMatrix$.$_a$, this.$_tmap$.$_height$ / this.$PzcMatrix$.$_a$);
      $newNonScaledContainers_oldScaledContainers$$ = [this.$_oldDataLayer$.$_dataAreaLayer$];
      for($anim2_i$$529$$ = 0;$anim2_i$$529$$ < $newNonScaledContainers_oldScaledContainers$$.length;$anim2_i$$529$$++) {
        $rect$$26$$ = new D.$DvtRect$$(this.$_tmap$.$_context$, 0, 0, this.$_tmap$.$_width$ / this.$PzcMatrix$.$_a$, this.$_tmap$.$_height$ / this.$PzcMatrix$.$_a$), $rect$$26$$.$setFill$(D.$JSCompiler_alias_NULL$$), $newNonScaledContainers_oldScaledContainers$$[$anim2_i$$529$$].$addChild$($rect$$26$$)
      }
      for(var $newScaledContainers$$ = [$dataLayer$$24$$.$_dataAreaLayer$], $anim2_i$$529$$ = 0;$anim2_i$$529$$ < $newScaledContainers$$.length;$anim2_i$$529$$++) {
        $rect$$26$$ = new D.$DvtRect$$(this.$_tmap$.$_context$, 0, 0, this.$_tmap$.$_width$ / this.$PzcMatrix$.$_a$, this.$_tmap$.$_height$ / this.$PzcMatrix$.$_a$), $rect$$26$$.$setFill$(D.$JSCompiler_alias_NULL$$), $newScaledContainers$$[$anim2_i$$529$$].$addChild$($rect$$26$$)
      }
      $anim2_i$$529$$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$_tmap$.$_context$, $anim$$26_oldContainers$$, $newNonScaledContainers_oldScaledContainers$$, $newScaledContainers$$, $bounds2_oldNonScaledContainers$$, $animDur$$2$$);
      this.$_animation$ = new D.$DvtParallelPlayable$$(this.$_tmap$.$_context$, [$anim1_bounds1$$, $anim2_i$$529$$])
    }else {
      $anim$$26_oldContainers$$ = [this.$_oldDataLayer$.$_dataAreaLayer$, this.$_oldDataLayer$.$_dataPointLayer$, this.$_oldDataLayer$.$_dataLabelLayer$];
      for($anim2_i$$529$$ = 0;$anim2_i$$529$$ < $anim$$26_oldContainers$$.length;$anim2_i$$529$$++) {
        $anim$$26_oldContainers$$[$anim2_i$$529$$].getParent().removeChild($anim$$26_oldContainers$$[$anim2_i$$529$$])
      }
      this.$PostDataLayerUpdate$()
    }
    this.$PreDataLayerUpdate$();
    if(this.$_animation$) {
      this.$EventHandler$.$removeListeners$(this.$_callbackObj$);
      var $thisRef$$29$$ = this;
      this.$_animation$.$setOnEnd$(function() {
        $thisRef$$29$$.$OnAnimationEnd$($dataLayer$$24$$)
      }, this);
      this.$_animation$.play(D.$JSCompiler_alias_TRUE$$)
    }
  }else {
    this.$PostDataLayerUpdate$(), (0,D.$JSCompiler_StaticMethods_OnUpdateLayerEnd$$)(this.$_tmap$)
  }
};
D.$JSCompiler_prototypeAlias$$.$getDataLayer$ = function $$JSCompiler_prototypeAlias$$$$getDataLayer$$($clientId$$17$$) {
  return this.$DataLayers$ ? this.$DataLayers$[$clientId$$17$$] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getClientId$ = (0,D.$JSCompiler_get$$)("$ClientId$");
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($pzcMatrix$$17$$) {
  this.$PzcMatrix$ = $pzcMatrix$$17$$;
  for(var $id$$126$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$126$$].$render$($pzcMatrix$$17$$)
  }
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$($fadeOutContainer$$, $doNotResetAreas$$2$$) {
  for(var $id$$127$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$127$$].reset($fadeOutContainer$$, $doNotResetAreas$$2$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($event$$418$$, $pzcMatrix$$18$$) {
  this.$PzcMatrix$ = $pzcMatrix$$18$$;
  for(var $id$$128$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$128$$].$HandleZoomEvent$($event$$418$$, $pzcMatrix$$18$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandlePanEvent$ = function $$JSCompiler_prototypeAlias$$$$HandlePanEvent$$($pzcMatrix$$19$$) {
  this.$PzcMatrix$ = $pzcMatrix$$19$$;
  for(var $id$$129$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$129$$].$HandlePanEvent$($pzcMatrix$$19$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$($dataLayer$$25_newScaledContainers$$1$$) {
  if(this.$_oldDataLayer$) {
    for(var $newNonScaledContainers$$1_oldContainers$$1$$ = [this.$_oldDataLayer$.$_dataAreaLayer$, this.$_oldDataLayer$.$_dataPointLayer$, this.$_oldDataLayer$.$_dataLabelLayer$], $i$$530$$ = 0;$i$$530$$ < $newNonScaledContainers$$1_oldContainers$$1$$.length;$i$$530$$++) {
      var $parent$$46$$ = $newNonScaledContainers$$1_oldContainers$$1$$[$i$$530$$].getParent();
      $parent$$46$$ && $parent$$46$$.removeChild($newNonScaledContainers$$1_oldContainers$$1$$[$i$$530$$])
    }
  }
  $newNonScaledContainers$$1_oldContainers$$1$$ = (0,D.$JSCompiler_StaticMethods_getNonScaledContainers$$)($dataLayer$$25_newScaledContainers$$1$$);
  for($i$$530$$ = 0;$i$$530$$ < $newNonScaledContainers$$1_oldContainers$$1$$.length;$i$$530$$++) {
    $newNonScaledContainers$$1_oldContainers$$1$$[$i$$530$$].$removeChildAt$($newNonScaledContainers$$1_oldContainers$$1$$[$i$$530$$].$getNumChildren$() - 1)
  }
  $dataLayer$$25_newScaledContainers$$1$$ = [$dataLayer$$25_newScaledContainers$$1$$.$_dataAreaLayer$];
  for($i$$530$$ = 0;$i$$530$$ < $dataLayer$$25_newScaledContainers$$1$$.length;$i$$530$$++) {
    $dataLayer$$25_newScaledContainers$$1$$[$i$$530$$].$removeChildAt$($dataLayer$$25_newScaledContainers$$1$$[$i$$530$$].$getNumChildren$() - 1)
  }
  this.$PostDataLayerUpdate$();
  (0,D.$JSCompiler_StaticMethods_OnUpdateLayerEnd$$)(this.$_tmap$);
  this.$_animationStopped$ = D.$JSCompiler_alias_FALSE$$;
  this.$_animation$ = D.$JSCompiler_alias_NULL$$;
  this.$EventHandler$.$addListeners$(this.$_callbackObj$)
};
D.$DvtMapAreaLayer$$ = function $$DvtMapAreaLayer$$$($tmap$$2$$, $layerName$$2$$, $clientId$$5$$, $labelDisplay$$5$$, $labelType$$3$$, $eventHandler$$2$$) {
  this.Init($tmap$$2$$, $layerName$$2$$, $clientId$$5$$, $labelDisplay$$5$$, $labelType$$3$$, $eventHandler$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapAreaLayer$$, D.$DvtMapLayer$$, "DvtMapAreaLayer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapAreaLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$3$$, $layerName$$3$$, $clientId$$6$$, $labelDisplay$$6$$, $labelType$$4$$, $eventHandler$$3$$) {
  D.$DvtMapAreaLayer$$.$superclass$.Init.call(this, $tmap$$3$$, $eventHandler$$3$$);
  this.$_labelDisplay$ = $labelDisplay$$6$$;
  this.$LayerName$ = $layerName$$3$$;
  this.$ClientId$ = $clientId$$6$$;
  this.$_labelType$ = $labelType$$4$$;
  this.$_areaLabels$ = {};
  this.$Areas$ = {};
  this.$AreaShapes$ = {};
  this.$_labelInfo$ = this.$AreaNames$ = D.$JSCompiler_alias_NULL$$;
  this.$_disclosed$ = [];
  this.$_renderArea$ = {};
  this.$_renderLabel$ = {};
  this.$_renderedLabels$ = {};
  this.$AreaContainer$ = new D.$DvtContainer$$(this.$_tmap$.$_context$);
  this.$LabelContainer$ = new D.$DvtContainer$$(this.$_tmap$.$_context$);
  this.$_tmap$.$_areaLayers$.$addChildAt$(this.$AreaContainer$, 0);
  this.$_tmap$.$_labelLayers$.$addChildAt$(this.$LabelContainer$, 0);
  this.$_dropTarget$ = new D.$DvtThematicMapDropTarget$$(this, this.$_tmap$.$_mapName$)
};
D.$JSCompiler_prototypeAlias$$.$setAnimation$ = (0,D.$JSCompiler_set$$)("$_animType$");
D.$JSCompiler_prototypeAlias$$.$getAnimation$ = (0,D.$JSCompiler_get$$)("$_animType$");
D.$JSCompiler_prototypeAlias$$.$setAnimationDuration$ = (0,D.$JSCompiler_set$$)("$_animDur$");
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = (0,D.$JSCompiler_get$$)("$_animDur$");
D.$JSCompiler_StaticMethods_setAreaNames$$ = function $$JSCompiler_StaticMethods_setAreaNames$$$($JSCompiler_StaticMethods_setAreaNames$self$$, $values$$10$$) {
  $JSCompiler_StaticMethods_setAreaNames$self$$.$AreaNames$ = $values$$10$$;
  for(var $area$$7$$ in $JSCompiler_StaticMethods_setAreaNames$self$$.$AreaNames$) {
    $JSCompiler_StaticMethods_setAreaNames$self$$.$_renderArea$[$area$$7$$] = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_setAreaNames$self$$.$_renderLabel$[$area$$7$$] = D.$JSCompiler_alias_TRUE$$
  }
};
D.$DvtMapAreaLayer$$.prototype.$getLabelInfoForArea$ = function $$DvtMapAreaLayer$$$$$getLabelInfoForArea$$($area$$10$$) {
  return!this.$_labelInfo$ ? D.$JSCompiler_alias_NULL$$ : this.$_labelInfo$[$area$$10$$]
};
D.$JSCompiler_StaticMethods_getChildrenForArea$$ = function $$JSCompiler_StaticMethods_getChildrenForArea$$$($JSCompiler_StaticMethods_getChildrenForArea$self$$, $area$$11$$) {
  return $JSCompiler_StaticMethods_getChildrenForArea$self$$.$_children$[$area$$11$$] ? $JSCompiler_StaticMethods_getChildrenForArea$self$$.$_children$[$area$$11$$].split(",") : []
};
D.$DvtMapAreaLayer$$.prototype.$getLabelDisplay$ = (0,D.$JSCompiler_get$$)("$_labelDisplay$");
D.$JSCompiler_StaticMethods_setIsolatedArea$$ = function $$JSCompiler_StaticMethods_setIsolatedArea$$$($JSCompiler_StaticMethods_setIsolatedArea$self$$, $isolatedArea$$) {
  $JSCompiler_StaticMethods_setIsolatedArea$self$$.$_isolatedArea$ = $isolatedArea$$;
  $JSCompiler_StaticMethods_setIsolatedArea$self$$.$_layerDim$ = D.$JSCompiler_alias_NULL$$;
  for(var $area$$14$$ in $JSCompiler_StaticMethods_setIsolatedArea$self$$.$AreaShapes$) {
    $area$$14$$ != $isolatedArea$$ && ($JSCompiler_StaticMethods_setIsolatedArea$self$$.$_renderArea$[$area$$14$$] = D.$JSCompiler_alias_FALSE$$)
  }
};
D.$DvtMapAreaLayer$$.prototype.$getLayerDim$ = function $$DvtMapAreaLayer$$$$$getLayerDim$$() {
  if(!this.$_layerDim$) {
    if(this.$_isolatedArea$) {
      this.$_layerDim$ = window.DvtPathUtils.$getDimensions$(window.DvtPathUtils.$createPathArray$(D.$DvtBaseMapManager$$.$getPathForArea$(this.$_tmap$.$_mapName$, this.$LayerName$, this.$_isolatedArea$)))
    }else {
      if("world" != this.$_tmap$.$_mapName$ && "worldRegions" != this.$_tmap$.$_mapName$ && (this.$_layerDim$ = D.$DvtBaseMapManager$$.$getBaseMapDim$(this.$_tmap$.$_mapName$, this.$LayerName$)), !this.$_layerDim$) {
        var $dim$$24$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)(this.$AreaContainer$.$getDimensions$(), this.$_tmap$.$_dataAreaLayers$.$getDimensions$());
        0 < $dim$$24$$.$w$ && 0 < $dim$$24$$.$h$ && (this.$_layerDim$ = $dim$$24$$)
      }
    }
  }
  return this.$_layerDim$
};
D.$JSCompiler_StaticMethods__createAreaAndLabel$$ = function $$JSCompiler_StaticMethods__createAreaAndLabel$$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$, $area$$15$$, $bForceUpdateArea_label$$55_labelText$$2_mapArea$$) {
  var $areaDim_areaShape$$ = $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaShapes$[$area$$15$$];
  if($areaDim_areaShape$$ && (($bForceUpdateArea_label$$55_labelText$$2_mapArea$$ || !$JSCompiler_StaticMethods__createAreaAndLabel$self$$.$Areas$[$area$$15$$]) && $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$updateAreaShape$($area$$15$$), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$Areas$[$area$$15$$] || ($bForceUpdateArea_label$$55_labelText$$2_mapArea$$ = new D.$DvtMapArea$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_context$, $areaDim_areaShape$$, $area$$15$$, 
  $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_bSupportsVectorEffects$), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$Areas$[$area$$15$$] = $bForceUpdateArea_label$$55_labelText$$2_mapArea$$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$EventHandler$.$associate$($areaDim_areaShape$$, $bForceUpdateArea_label$$55_labelText$$2_mapArea$$), $bForceUpdateArea_label$$55_labelText$$2_mapArea$$.$setTooltip$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$ && 
  $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$15$$] ? $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$15$$][1] : D.$JSCompiler_alias_NULL$$)), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_renderLabel$[$area$$15$$] && ($bForceUpdateArea_label$$55_labelText$$2_mapArea$$ = $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_areaLabels$[$area$$15$$], !$bForceUpdateArea_label$$55_labelText$$2_mapArea$$ && ("off" != $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelDisplay$ && 
  $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$) && ($bForceUpdateArea_label$$55_labelText$$2_mapArea$$ = "short" == $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelType$ ? $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$15$$][0] : $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$15$$][1])))) {
    $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelInfo$ && $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelInfo$[$area$$15$$] ? $bForceUpdateArea_label$$55_labelText$$2_mapArea$$ = new D.$DvtMapLabel$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_context$, $bForceUpdateArea_label$$55_labelText$$2_mapArea$$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelInfo$[$area$$15$$], $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelDisplay$, 
    $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$LabelContainer$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_bSupportsVectorEffects$) : ($areaDim_areaShape$$ = (0,D.$DvtDisplayableUtils$getDimensionsForced$$)($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_context$, $areaDim_areaShape$$), $bForceUpdateArea_label$$55_labelText$$2_mapArea$$ = new D.$DvtMapLabel$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_context$, $bForceUpdateArea_label$$55_labelText$$2_mapArea$$, 
    [[$areaDim_areaShape$$.x, $areaDim_areaShape$$.y, $areaDim_areaShape$$.$w$, $areaDim_areaShape$$.$h$]], $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelDisplay$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$LabelContainer$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_bSupportsVectorEffects$)), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_areaLabels$[$area$$15$$] = $bForceUpdateArea_label$$55_labelText$$2_mapArea$$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_layerCSSStyle$ && 
    $bForceUpdateArea_label$$55_labelText$$2_mapArea$$.$setCSSStyle$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_layerCSSStyle$)
  }
};
D.$JSCompiler_StaticMethods__addAreaAndLabel$$ = function $$JSCompiler_StaticMethods__addAreaAndLabel$$$($JSCompiler_StaticMethods__addAreaAndLabel$self$$, $area$$16$$, $fadeInObjs$$) {
  if($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$AreaShapes$[$area$$16$$]) {
    $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$AreaContainer$.$addChild$($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$Areas$[$area$$16$$]);
    var $label$$56$$ = $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_areaLabels$[$area$$16$$];
    $label$$56$$ && ($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_renderLabel$[$area$$16$$] ? $label$$56$$.update($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$PzcMatrix$) : $label$$56$$.reset(), $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_renderedLabels$[$area$$16$$] = $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_renderLabel$[$area$$16$$]);
    $fadeInObjs$$ && ($fadeInObjs$$.push($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$Areas$[$area$$16$$]), $label$$56$$ && ($fadeInObjs$$.push($label$$56$$), $fadeInObjs$$.push($label$$56$$.$_leaderLine$)))
  }
};
D.$DvtMapAreaLayer$$.prototype.$updateAreaShape$ = function $$DvtMapAreaLayer$$$$$updateAreaShape$$($area$$17$$) {
  if(!this.$_paths$ || this.$_bUpdateShapesForRender$) {
    this.$_bUpdateShapesForRender$ = D.$JSCompiler_alias_FALSE$$;
    var $cmd$$9_layerDim$$;
    this.$_paths$ = ($cmd$$9_layerDim$$ = "world" == this.$_tmap$.$_mapName$ || "worldRegions" == this.$_tmap$.$_mapName$ ? D.$DvtBaseMapManager$$.$getBaseMapDim$(this.$_tmap$.$_mapName$, this.$LayerName$) : this.$getLayerDim$()) ? D.$DvtBaseMapManager$$.$simplifyAreaPaths$(D.$DvtBaseMapManager$$.$getAreaPaths$(this.$_tmap$.$_mapName$, this.$LayerName$), $cmd$$9_layerDim$$.$w$, $cmd$$9_layerDim$$.$h$, this.$_tmap$.$_width$, this.$_tmap$.$_height$, this.$_tmap$.$_zooming$ ? this.$_tmap$.$_maxZoomFactor$ : 
    1) : D.$DvtBaseMapManager$$.$getAreaPaths$(this.$_tmap$.$_mapName$, this.$LayerName$)
  }
  $cmd$$9_layerDim$$ = this.$_paths$[$area$$17$$];
  this.$AreaShapes$[$area$$17$$] && $cmd$$9_layerDim$$ ? this.$AreaShapes$[$area$$17$$].$setCmds$($cmd$$9_layerDim$$) : delete this.$AreaShapes$[$area$$17$$]
};
D.$JSCompiler_StaticMethods_resetRenderedAreas$$ = function $$JSCompiler_StaticMethods_resetRenderedAreas$$$($JSCompiler_StaticMethods_resetRenderedAreas$self$$) {
  for(var $area$$18$$ in $JSCompiler_StaticMethods_resetRenderedAreas$self$$.$AreaNames$) {
    $JSCompiler_StaticMethods_resetRenderedAreas$self$$.$_renderArea$[$area$$18$$] = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_resetRenderedAreas$self$$.$_renderLabel$[$area$$18$$] = D.$JSCompiler_alias_TRUE$$
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapAreaLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$updateDataLayer$ = function $$JSCompiler_prototypeAlias$$$$updateDataLayer$$($dataLayer$$7$$, $pzcMatrix$$3$$, $topLayerName$$) {
  D.$DvtMapAreaLayer$$.$superclass$.$updateDataLayer$.call(this, $dataLayer$$7$$, $pzcMatrix$$3$$, $topLayerName$$);
  if($topLayerName$$ == this.$LayerName$) {
    for(var $area$$19$$ in this.$AreaShapes$) {
      (0,D.$JSCompiler_StaticMethods__createAreaAndLabel$$)(this, $area$$19$$, D.$JSCompiler_alias_TRUE$$), this.$_renderArea$[$area$$19$$] && (0,D.$JSCompiler_StaticMethods__addAreaAndLabel$$)(this, $area$$19$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($pzcMatrix$$4$$) {
  this.$_bUpdateShapesForRender$ = D.$JSCompiler_alias_TRUE$$;
  for(var $area$$20$$ in this.$AreaShapes$) {
    (0,D.$JSCompiler_StaticMethods__createAreaAndLabel$$)(this, $area$$20$$, D.$JSCompiler_alias_TRUE$$), this.$_renderArea$[$area$$20$$] && (0,D.$JSCompiler_StaticMethods__addAreaAndLabel$$)(this, $area$$20$$)
  }
  D.$DvtMapAreaLayer$$.$superclass$.$render$.call(this, $pzcMatrix$$4$$)
};
D.$JSCompiler_prototypeAlias$$.$PreDataLayerUpdate$ = function $$JSCompiler_prototypeAlias$$$$PreDataLayerUpdate$$() {
  for(var $area$$21$$ in this.$_renderArea$) {
    this.$_renderArea$[$area$$21$$] || ((0,D.$JSCompiler_StaticMethods__createAreaAndLabel$$)(this, $area$$21$$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods__addAreaAndLabel$$)(this, $area$$21$$))
  }
};
D.$JSCompiler_prototypeAlias$$.$PostDataLayerUpdate$ = function $$JSCompiler_prototypeAlias$$$$PostDataLayerUpdate$$() {
  for(var $area$$22$$ in this.$_renderArea$) {
    if(!this.$_renderArea$[$area$$22$$]) {
      this.$AreaContainer$.removeChild(this.$Areas$[$area$$22$$]);
      var $label$$57_leaderLine$$ = this.$_areaLabels$[$area$$22$$];
      $label$$57_leaderLine$$ && (this.$_renderedLabels$[$area$$22$$] = D.$JSCompiler_alias_FALSE$$, this.$LabelContainer$.removeChild($label$$57_leaderLine$$), ($label$$57_leaderLine$$ = $label$$57_leaderLine$$.$_leaderLine$) && this.$LabelContainer$.removeChild($label$$57_leaderLine$$))
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$discloseAreas$ = function $$JSCompiler_prototypeAlias$$$$discloseAreas$$($areas$$4$$, $fadeInObjs$$2$$) {
  for(var $i$$inline_5598$$ = 0;$i$$inline_5598$$ < $areas$$4$$.length;$i$$inline_5598$$++) {
    (0,D.$JSCompiler_StaticMethods__createAreaAndLabel$$)(this, $areas$$4$$[$i$$inline_5598$$], D.$JSCompiler_alias_FALSE$$), this.$_renderArea$[$areas$$4$$[$i$$inline_5598$$]] && (0,D.$JSCompiler_StaticMethods__addAreaAndLabel$$)(this, $areas$$4$$[$i$$inline_5598$$], $fadeInObjs$$2$$)
  }
  for(var $id$$122$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$122$$].$discloseAreas$($areas$$4$$, $fadeInObjs$$2$$, this.$PzcMatrix$)
  }
  this.$_disclosed$ = this.$_disclosed$.concat($areas$$4$$)
};
D.$JSCompiler_prototypeAlias$$.$undiscloseAreas$ = function $$JSCompiler_prototypeAlias$$$$undiscloseAreas$$($areas$$5$$, $fadeOutObjs$$) {
  for(var $childAreaLayer_id$$123$$ in this.$DataLayers$) {
    this.$DataLayers$[$childAreaLayer_id$$123$$].$undiscloseAreas$($areas$$5$$, $fadeOutObjs$$)
  }
  $childAreaLayer_id$$123$$ = (0,D.$JSCompiler_StaticMethods_getDrillChildLayer$$)(this.$_tmap$, this.$LayerName$);
  for(var $i$$508$$ = 0;$i$$508$$ < $areas$$5$$.length;$i$$508$$++) {
    var $areaName$$3$$ = $areas$$5$$[$i$$508$$];
    if(this.$Areas$[$areaName$$3$$]) {
      var $idx$$10$$ = D.$DvtArrayUtils$$.$getIndex$(this.$_disclosed$, $areaName$$3$$);
      -1 !== $idx$$10$$ && (this.$_disclosed$.splice($idx$$10$$, 1), $fadeOutObjs$$.push(this.$Areas$[$areaName$$3$$]))
    }
    $childAreaLayer_id$$123$$ && $childAreaLayer_id$$123$$.$undiscloseAreas$((0,D.$JSCompiler_StaticMethods_getChildrenForArea$$)(this, $areaName$$3$$), $fadeOutObjs$$)
  }
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$($fadeOutObjs$$1$$, $doNotResetAreas$$) {
  D.$DvtMapAreaLayer$$.$superclass$.reset.call(this, $fadeOutObjs$$1$$, $doNotResetAreas$$);
  "none" != this.$_tmap$.$_drillMode$ && (this.$undiscloseAreas$(this.$_disclosed$, $fadeOutObjs$$1$$), this.$_disclosed$ = [])
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($event$$410$$, $pzcMatrix$$5$$) {
  D.$DvtMapAreaLayer$$.$superclass$.$HandleZoomEvent$.call(this, $event$$410$$, $pzcMatrix$$5$$);
  if(!this.$_tmap$.$_bSupportsVectorEffects$) {
    for(var $area$$23$$ in this.$Areas$) {
      this.$Areas$[$area$$23$$].$HandleZoomEvent$($pzcMatrix$$5$$)
    }
  }
  for($area$$23$$ in this.$_renderedLabels$) {
    if(this.$_renderedLabels$[$area$$23$$]) {
      var $label$$58$$ = this.$_areaLabels$[$area$$23$$];
      $label$$58$$ && $label$$58$$.update($pzcMatrix$$5$$)
    }
  }
};
D.$DvtMapCustomAreaLayer$$ = function $$DvtMapCustomAreaLayer$$$($tmap$$, $layerName$$, $clientId$$3$$, $labelDisplay$$1$$, $labelType$$1$$, $eventHandler$$) {
  this.Init($tmap$$, $layerName$$, $clientId$$3$$, $labelDisplay$$1$$, $labelType$$1$$, $eventHandler$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapCustomAreaLayer$$, D.$DvtMapAreaLayer$$, "DvtMapCustomAreaLayer");
D.$DvtMapCustomAreaLayer$$.prototype.Init = function $$DvtMapCustomAreaLayer$$$$Init$($tmap$$1$$, $layerName$$1$$, $clientId$$4$$, $labelDisplay$$2$$, $labelType$$2$$, $eventHandler$$1$$) {
  D.$DvtMapCustomAreaLayer$$.$superclass$.Init.call(this, $tmap$$1$$, $layerName$$1$$, $clientId$$4$$, $labelDisplay$$2$$, $labelType$$2$$, $eventHandler$$1$$)
};
D.$DvtMapCustomAreaLayer$$.prototype.$updateAreaShape$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtMapCustomAreaLayer$$.prototype.$getLayerDim$ = function $$DvtMapCustomAreaLayer$$$$$getLayerDim$$() {
  return new D.$DvtRectangle$$(0, 0, this.$_layerWidth$, this.$_layerHeight$)
};
D.$JSCompiler_StaticMethods__selectImageBasedOnResolution$$ = function $$JSCompiler_StaticMethods__selectImageBasedOnResolution$$$($JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$14$$) {
  var $widthRes$$1$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$14$$.$_tmap$.$_width$, $heightRes$$2$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$14$$.$_tmap$.$_height$;
  $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$14$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$14$$.$_areaLayerImages$;
  for(var $i$$501$$ = 0;$i$$501$$ < $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$14$$.length;$i$$501$$++) {
    var $height$$92_image$$9$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$14$$[$i$$501$$], $source$$16$$ = $height$$92_image$$9$$.source, $width$$103$$ = $height$$92_image$$9$$.width, $height$$92_image$$9$$ = $height$$92_image$$9$$.height;
    if($source$$16$$ && -1 < $source$$16$$.search(".svg") || $width$$103$$ >= $widthRes$$1$$ && $height$$92_image$$9$$ >= $heightRes$$2$$ || $i$$501$$ == $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$14$$.length - 1) {
      return $source$$16$$
    }
  }
};
D.$JSCompiler_StaticMethods_setAreaLayerImage$$ = function $$JSCompiler_StaticMethods_setAreaLayerImage$$$($JSCompiler_StaticMethods_setAreaLayerImage$self$$, $images$$15$$) {
  var $refWidth$$2_shape$$41$$ = D.$JSCompiler_alias_NULL$$, $isRTL$$25$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_setAreaLayerImage$self$$.$_tmap$.$_context$);
  if($images$$15$$ && 0 < $images$$15$$.length) {
    var $refWidth$$2_shape$$41$$ = $images$$15$$[0].width, $refHeight$$2$$ = $images$$15$$[0].height;
    $JSCompiler_StaticMethods_setAreaLayerImage$self$$.$_layerWidth$ = $refWidth$$2_shape$$41$$;
    $JSCompiler_StaticMethods_setAreaLayerImage$self$$.$_layerHeight$ = $refHeight$$2$$;
    for(var $locImages$$1$$ = [], $i$$502$$ = 0;$i$$502$$ < $images$$15$$.length;$i$$502$$++) {
      $isRTL$$25$$ && "rtl" == $images$$15$$[$i$$502$$].dir ? $locImages$$1$$.push($images$$15$$[$i$$502$$]) : !$isRTL$$25$$ && "ltr" == $images$$15$$[$i$$502$$].dir && $locImages$$1$$.push($images$$15$$[$i$$502$$])
    }
    $JSCompiler_StaticMethods_setAreaLayerImage$self$$.$_areaLayerImages$ = 0 < $locImages$$1$$.length ? $locImages$$1$$ : $images$$15$$;
    $JSCompiler_StaticMethods_setAreaLayerImage$self$$.$_imageSrc$ = (0,D.$JSCompiler_StaticMethods__selectImageBasedOnResolution$$)($JSCompiler_StaticMethods_setAreaLayerImage$self$$);
    $refWidth$$2_shape$$41$$ = new D.$DvtImage$$($JSCompiler_StaticMethods_setAreaLayerImage$self$$.$_tmap$.$_context$, $JSCompiler_StaticMethods_setAreaLayerImage$self$$.$_imageSrc$, 0, 0, $refWidth$$2_shape$$41$$, $refHeight$$2$$)
  }
  $refWidth$$2_shape$$41$$ && ((0,D.$JSCompiler_StaticMethods_setAreaNames$$)($JSCompiler_StaticMethods_setAreaLayerImage$self$$, {image:[D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$]}), $JSCompiler_StaticMethods_setAreaLayerImage$self$$.$AreaShapes$ = {image:$refWidth$$2_shape$$41$$})
};
D.$DvtMapCustomAreaLayer$$.prototype.$HandleZoomEvent$ = function $$DvtMapCustomAreaLayer$$$$$HandleZoomEvent$$($event$$409$$, $pzcMatrix$$1$$) {
  D.$DvtMapCustomAreaLayer$$.$superclass$.$HandleZoomEvent$.call(this, $event$$409$$, $pzcMatrix$$1$$);
  if(this.$Areas$.image) {
    var $newImageSrc$$ = (0,D.$JSCompiler_StaticMethods__selectImageBasedOnResolution$$)(this);
    $newImageSrc$$ != this.$_imageSrc$ && (this.$_imageSrc$ = $newImageSrc$$, this.$Areas$[window.areaName].$setSrc$(this.$_imageSrc$))
  }
};
D.$DvtMapDataLayer$$ = function $$DvtMapDataLayer$$$($tmap$$8$$, $parentLayer$$1$$, $clientId$$9$$, $eventHandler$$4$$) {
  this.Init($tmap$$8$$, $parentLayer$$1$$, $clientId$$9$$, $eventHandler$$4$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDataLayer$$, D.$DvtObj$$, "DvtMapDataLayer");
D.$DvtMapDataLayer$$.prototype.Init = function $$DvtMapDataLayer$$$$Init$($tmap$$9$$, $parentLayer$$2$$, $clientId$$10$$, $eventHandler$$5$$) {
  this.$_tmap$ = $tmap$$9$$;
  this.$_clientId$ = $clientId$$10$$;
  this.$_areaObjs$ = [];
  this.$_dataObjs$ = [];
  this.$_eventHandler$ = $eventHandler$$5$$;
  this.$_dragSource$ = new D.$DvtDragSource$$($tmap$$9$$.$_context$);
  (0,D.$JSCompiler_StaticMethods_setDragSource$$)(this.$_eventHandler$, this.$_dragSource$);
  this.$_dataAreaLayer$ = new D.$DvtContainer$$(this.$_tmap$.$_context$);
  this.$_dataPointLayer$ = new D.$DvtContainer$$(this.$_tmap$.$_context$);
  this.$_dataLabelLayer$ = new D.$DvtContainer$$(this.$_tmap$.$_context$);
  this.$_tmap$.$_dataAreaLayers$.$addChildAt$(this.$_dataAreaLayer$, 0);
  this.$_tmap$.$_dataPointLayers$.$addChildAt$(this.$_dataPointLayer$, 0);
  this.$_tmap$.$_labelLayers$.$addChildAt$(this.$_dataLabelLayer$, 0);
  this.$_parentLayer$ = $parentLayer$$2$$;
  this.$_disclosed$ = [];
  this.$_drilled$ = []
};
D.$JSCompiler_StaticMethods_getNonScaledContainers$$ = function $$JSCompiler_StaticMethods_getNonScaledContainers$$$($JSCompiler_StaticMethods_getNonScaledContainers$self$$) {
  var $containers$$1$$ = [$JSCompiler_StaticMethods_getNonScaledContainers$self$$.$_dataLabelLayer$];
  $JSCompiler_StaticMethods_getNonScaledContainers$self$$.$_tmap$.$_isMarkerZoomBehaviorFixed$ && $containers$$1$$.push($JSCompiler_StaticMethods_getNonScaledContainers$self$$.$_dataPointLayer$);
  return $containers$$1$$
};
D.$JSCompiler_StaticMethods_getNavigableAreaObjects$$ = function $$JSCompiler_StaticMethods_getNavigableAreaObjects$$$($JSCompiler_StaticMethods_getNavigableAreaObjects$self$$) {
  for(var $navigables$$8$$ = [], $i$$517$$ = 0;$i$$517$$ < $JSCompiler_StaticMethods_getNavigableAreaObjects$self$$.$_areaObjs$.length;$i$$517$$++) {
    $JSCompiler_StaticMethods_getNavigableAreaObjects$self$$.$_areaObjs$[$i$$517$$].$isDrilled$() || $navigables$$8$$.push($JSCompiler_StaticMethods_getNavigableAreaObjects$self$$.$_areaObjs$[$i$$517$$])
  }
  return $navigables$$8$$
};
D.$JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$$ = function $$JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$$$($JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$) {
  for(var $navigables$$9$$ = [], $i$$518$$ = 0;$i$$518$$ < $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$.length;$i$$518$$++) {
    for(var $j$$87$$ = 0;$j$$87$$ < $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_disclosed$.length;$j$$87$$++) {
      $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$[$i$$518$$].$AreaId$ == $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_disclosed$[$j$$87$$] && ($JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$[$i$$518$$].$isDrilled$() || $navigables$$9$$.push($JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$[$i$$518$$]))
    }
  }
  return $navigables$$9$$
};
D.$JSCompiler_StaticMethods_addAreaObject$$ = function $$JSCompiler_StaticMethods_addAreaObject$$$($JSCompiler_StaticMethods_addAreaObject$self$$, $obj$$160$$) {
  $JSCompiler_StaticMethods_addAreaObject$self$$.$_areaObjs$.push($obj$$160$$);
  $JSCompiler_StaticMethods_addAreaObject$self$$.$_eventHandler$.$associate$($obj$$160$$.$getDisplayable$(), $obj$$160$$);
  $obj$$160$$.$_dataAreaLayer$ = $JSCompiler_StaticMethods_addAreaObject$self$$.$_dataAreaLayer$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getClientId$ = (0,D.$JSCompiler_get$$)("$_clientId$");
D.$JSCompiler_prototypeAlias$$.$setAnimation$ = (0,D.$JSCompiler_set$$)("$_animType$");
D.$JSCompiler_prototypeAlias$$.$getAnimation$ = (0,D.$JSCompiler_get$$)("$_animType$");
D.$JSCompiler_prototypeAlias$$.$setAnimationDuration$ = (0,D.$JSCompiler_set$$)("$_animDur$");
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = (0,D.$JSCompiler_get$$)("$_animDur$");
D.$JSCompiler_prototypeAlias$$.$setSelectionMode$ = function $$JSCompiler_prototypeAlias$$$$setSelectionMode$$($mode$$11$$) {
  if(this.$_selectionMode$ = $mode$$11$$) {
    this.$_selectionHandler$ = new D.$DvtSelectionHandler$$(this.$_selectionMode$), this.$_eventHandler$.$setSelectionHandler$(this.$_clientId$, this.$_selectionHandler$)
  }
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$_selectionMode$ != D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__renderAreaAndLabel$$ = function $$JSCompiler_StaticMethods__renderAreaAndLabel$$$($JSCompiler_StaticMethods__renderAreaAndLabel$self$$, $areaIndex$$1$$) {
  var $JSCompiler_inline_result$$382_areaObj$$inline_5724_idx$$inline_10508_label$$61$$;
  $JSCompiler_inline_result$$382_areaObj$$inline_5724_idx$$inline_10508_label$$61$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$[$areaIndex$$1$$];
  var $areaDim$$1_displayable$$44_displayable$$inline_5725$$ = $JSCompiler_inline_result$$382_areaObj$$inline_5724_idx$$inline_10508_label$$61$$.$getDisplayable$(), $pathToCopy$$inline_5726$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_parentLayer$.$AreaShapes$[$JSCompiler_inline_result$$382_areaObj$$inline_5724_idx$$inline_10508_label$$61$$.$AreaId$];
  $pathToCopy$$inline_5726$$ ? ($areaDim$$1_displayable$$44_displayable$$inline_5725$$.$setCmds$($pathToCopy$$inline_5726$$.$getCmds$()), $JSCompiler_inline_result$$382_areaObj$$inline_5724_idx$$inline_10508_label$$61$$ = D.$JSCompiler_alias_TRUE$$) : ($JSCompiler_inline_result$$382_areaObj$$inline_5724_idx$$inline_10508_label$$61$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$.indexOf($JSCompiler_inline_result$$382_areaObj$$inline_5724_idx$$inline_10508_label$$61$$), -1 !== 
  $JSCompiler_inline_result$$382_areaObj$$inline_5724_idx$$inline_10508_label$$61$$ && $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$.splice($JSCompiler_inline_result$$382_areaObj$$inline_5724_idx$$inline_10508_label$$61$$, 1), $JSCompiler_inline_result$$382_areaObj$$inline_5724_idx$$inline_10508_label$$61$$ = D.$JSCompiler_alias_FALSE$$);
  if($JSCompiler_inline_result$$382_areaObj$$inline_5724_idx$$inline_10508_label$$61$$) {
    $areaDim$$1_displayable$$44_displayable$$inline_5725$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$[$areaIndex$$1$$].$getDisplayable$();
    $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_dataAreaLayer$.$addChild$($areaDim$$1_displayable$$44_displayable$$inline_5725$$);
    if($JSCompiler_inline_result$$382_areaObj$$inline_5724_idx$$inline_10508_label$$61$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$[$areaIndex$$1$$].$getLabel$()) {
      0 < $JSCompiler_inline_result$$382_areaObj$$inline_5724_idx$$inline_10508_label$$61$$.$_boundRectangle$.length || ($areaDim$$1_displayable$$44_displayable$$inline_5725$$ = $areaDim$$1_displayable$$44_displayable$$inline_5725$$.$getDimensions$(), $JSCompiler_inline_result$$382_areaObj$$inline_5724_idx$$inline_10508_label$$61$$.$_boundRectangle$.push($areaDim$$1_displayable$$44_displayable$$inline_5725$$)), $JSCompiler_inline_result$$382_areaObj$$inline_5724_idx$$inline_10508_label$$61$$.update($JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_pzcMatrix$)
    }
    return D.$JSCompiler_alias_TRUE$$
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($pzcMatrix$$8$$) {
  this.$_bFixPatterns$ = D.$JSCompiler_alias_TRUE$$;
  this.$_pzcMatrix$ = $pzcMatrix$$8$$;
  var $areaLabelsToRemove$$ = {};
  this.$_dataObjs$.sort(function compare($pzcMatrix$$8$$, $areaLabelsToRemove$$) {
    return $pzcMatrix$$8$$.$getSize$() < $areaLabelsToRemove$$.$getSize$() ? 1 : $pzcMatrix$$8$$.$getSize$() > $areaLabelsToRemove$$.$getSize$() ? -1 : 0
  });
  for(var $i$$519$$ = 0;$i$$519$$ < this.$_dataObjs$.length;$i$$519$$++) {
    var $dataObj$$10_regionId$$4$$ = this.$_dataObjs$[$i$$519$$], $displayable$$45$$ = $dataObj$$10_regionId$$4$$.$getDisplayable$(), $json_label$$62$$ = $dataObj$$10_regionId$$4$$.$getLabel$();
    if($json_label$$62$$) {
      if($displayable$$45$$.$getRotation$()) {
        var $container$$109$$ = new D.$DvtContainer$$($displayable$$45$$.$_context$);
        this.$_dataPointLayer$.$addChild$($container$$109$$);
        $container$$109$$.$addChild$($displayable$$45$$);
        $container$$109$$.$addChild$($json_label$$62$$)
      }else {
        this.$_dataPointLayer$.$addChild$($displayable$$45$$), $displayable$$45$$.$addChild$($json_label$$62$$)
      }
      $dataObj$$10_regionId$$4$$.$PositionLabel$($pzcMatrix$$8$$)
    }else {
      this.$_dataPointLayer$.$addChild$($displayable$$45$$)
    }
    if($dataObj$$10_regionId$$4$$ instanceof D.$DvtMapDataComponent$$) {
      if($json_label$$62$$ = $dataObj$$10_regionId$$4$$.$_json$) {
        $displayable$$45$$.$render$(window.JSON.parse($json_label$$62$$), $dataObj$$10_regionId$$4$$.getWidth(), $dataObj$$10_regionId$$4$$.getHeight())
      }else {
        continue
      }
    }
    ($dataObj$$10_regionId$$4$$ = $dataObj$$10_regionId$$4$$.$AreaId$) && ($areaLabelsToRemove$$[$dataObj$$10_regionId$$4$$] = D.$JSCompiler_alias_TRUE$$)
  }
  for($i$$519$$ = 0;$i$$519$$ < this.$_areaObjs$.length;$i$$519$$++) {
    $areaLabelsToRemove$$[this.$_areaObjs$[$i$$519$$].$AreaId$] && this.$_areaObjs$[$i$$519$$].$setLabel$(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods__renderAreaAndLabel$$)(this, $i$$519$$) || $i$$519$$--
  }
  this.$_initSelections$ && this.$_processInitialSelections$()
};
D.$JSCompiler_prototypeAlias$$.$discloseAreas$ = function $$JSCompiler_prototypeAlias$$$$discloseAreas$$($areas$$7$$, $fadeInObjs$$3$$, $pzcMatrix$$9_regionId$$5$$) {
  this.$_pzcMatrix$ = $pzcMatrix$$9_regionId$$5$$;
  for(var $drilledAreas$$ = [], $j$$88$$ = 0;$j$$88$$ < $areas$$7$$.length;$j$$88$$++) {
    for(var $i$$520_label$$63_leaderLine$$1$$ = 0;$i$$520_label$$63_leaderLine$$1$$ < this.$_areaObjs$.length;$i$$520_label$$63_leaderLine$$1$$++) {
      if(this.$_areaObjs$[$i$$520_label$$63_leaderLine$$1$$].$AreaId$ == $areas$$7$$[$j$$88$$]) {
        $drilledAreas$$.push(this.$_areaObjs$[$i$$520_label$$63_leaderLine$$1$$].$AreaId$);
        (0,D.$JSCompiler_StaticMethods__renderAreaAndLabel$$)(this, $i$$520_label$$63_leaderLine$$1$$);
        var $displayable$$46$$ = this.$_areaObjs$[$i$$520_label$$63_leaderLine$$1$$].$getDisplayable$();
        $fadeInObjs$$3$$.push($displayable$$46$$);
        (0,D.$JSCompiler_StaticMethods_handleZoomEvent$$)($displayable$$46$$, $pzcMatrix$$9_regionId$$5$$);
        if($i$$520_label$$63_leaderLine$$1$$ = this.$_areaObjs$[$i$$520_label$$63_leaderLine$$1$$].$getLabel$()) {
          $fadeInObjs$$3$$.push($i$$520_label$$63_leaderLine$$1$$), ($i$$520_label$$63_leaderLine$$1$$ = $i$$520_label$$63_leaderLine$$1$$.$_leaderLine$) && $fadeInObjs$$3$$.push($i$$520_label$$63_leaderLine$$1$$)
        }
        break
      }
    }
  }
  for($i$$520_label$$63_leaderLine$$1$$ = 0;$i$$520_label$$63_leaderLine$$1$$ < this.$_dataObjs$.length;$i$$520_label$$63_leaderLine$$1$$++) {
    for($j$$88$$ = 0;$j$$88$$ < $areas$$7$$.length;$j$$88$$++) {
      $pzcMatrix$$9_regionId$$5$$ = this.$_dataObjs$[$i$$520_label$$63_leaderLine$$1$$].$AreaId$, $displayable$$46$$ = this.$_dataObjs$[$i$$520_label$$63_leaderLine$$1$$].$getDisplayable$(), $pzcMatrix$$9_regionId$$5$$ != D.$JSCompiler_alias_NULL$$ ? $pzcMatrix$$9_regionId$$5$$ == $areas$$7$$[$j$$88$$] && (this.$_dataPointLayer$.$addChild$($displayable$$46$$), $fadeInObjs$$3$$.push($displayable$$46$$)) : (this.$_dataPointLayer$.$addChild$($displayable$$46$$), $fadeInObjs$$3$$.push($displayable$$46$$))
    }
  }
  this.$_disclosed$ = this.$_disclosed$.concat($drilledAreas$$)
};
D.$JSCompiler_prototypeAlias$$.$undiscloseAreas$ = function $$JSCompiler_prototypeAlias$$$$undiscloseAreas$$($areas$$8$$, $fadeOutObjs$$2$$) {
  for(var $j$$89$$ = 0;$j$$89$$ < $areas$$8$$.length;$j$$89$$++) {
    for(var $i$$521_label$$64$$ = 0;$i$$521_label$$64$$ < this.$_areaObjs$.length;$i$$521_label$$64$$++) {
      if(this.$_areaObjs$[$i$$521_label$$64$$].$AreaId$ == $areas$$8$$[$j$$89$$]) {
        this.$_areaObjs$[$i$$521_label$$64$$].$isDrilled$() && this.$_areaObjs$[$i$$521_label$$64$$].$setDrilled$(D.$JSCompiler_alias_FALSE$$);
        this.$_areaObjs$[$i$$521_label$$64$$].$isSelected$() && this.$_selectionHandler$.$removeFromSelection$(this.$_areaObjs$[$i$$521_label$$64$$]);
        var $idx$$12$$ = D.$DvtArrayUtils$$.$getIndex$(this.$_disclosed$, $areas$$8$$[$j$$89$$]);
        if(-1 < $idx$$12$$ && (this.$_disclosed$.splice($idx$$12$$, 1), $fadeOutObjs$$2$$.push(this.$_areaObjs$[$i$$521_label$$64$$].$getDisplayable$()), $i$$521_label$$64$$ = this.$_areaObjs$[$i$$521_label$$64$$].$getLabel$())) {
          $fadeOutObjs$$2$$.push($i$$521_label$$64$$), $fadeOutObjs$$2$$.push($i$$521_label$$64$$.$_leaderLine$)
        }
        break
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$($fadeOutObjs$$4$$, $doNotResetAreas$$1$$) {
  if(this.$_selectionHandler$) {
    for(var $j$$90_selectedObjs$$ = this.$_selectionHandler$.getSelection(), $i$$524_label$$67$$ = 0;$i$$524_label$$67$$ < $j$$90_selectedObjs$$.length;$i$$524_label$$67$$++) {
      (!$doNotResetAreas$$1$$ || $doNotResetAreas$$1$$ && -1 == D.$DvtArrayUtils$$.$getIndex$($doNotResetAreas$$1$$, $j$$90_selectedObjs$$[$i$$524_label$$67$$].$AreaId$)) && this.$_selectionHandler$.$removeFromSelection$($j$$90_selectedObjs$$[$i$$524_label$$67$$])
    }
  }
  if("none" != this.$_tmap$.$_drillMode$) {
    for($j$$90_selectedObjs$$ = 0;$j$$90_selectedObjs$$ < this.$_drilled$.length;$j$$90_selectedObjs$$++) {
      for($i$$524_label$$67$$ = 0;$i$$524_label$$67$$ < this.$_areaObjs$.length;$i$$524_label$$67$$++) {
        if(this.$_areaObjs$[$i$$524_label$$67$$].$AreaId$ == this.$_drilled$[$j$$90_selectedObjs$$]) {
          this.$_areaObjs$[$i$$524_label$$67$$].$setDrilled$(D.$JSCompiler_alias_FALSE$$);
          var $displayable$$48$$ = this.$_areaObjs$[$i$$524_label$$67$$].$getDisplayable$();
          this.$_dataAreaLayer$.$addChild$($displayable$$48$$);
          $fadeOutObjs$$4$$.push($displayable$$48$$);
          if($i$$524_label$$67$$ = this.$_areaObjs$[$i$$524_label$$67$$].$getLabel$()) {
            $i$$524_label$$67$$.update(this.$_pzcMatrix$), $fadeOutObjs$$4$$.push($i$$524_label$$67$$), $fadeOutObjs$$4$$.push($i$$524_label$$67$$.$_leaderLine$)
          }
          break
        }
      }
      for($i$$524_label$$67$$ = 0;$i$$524_label$$67$$ < this.$_dataObjs$.length;$i$$524_label$$67$$++) {
        if(this.$_dataObjs$[$i$$524_label$$67$$].$AreaId$ == this.$_drilled$[$j$$90_selectedObjs$$]) {
          $displayable$$48$$ = this.$_dataObjs$[$i$$524_label$$67$$].$getDisplayable$();
          this.$_dataPointLayer$.$addChild$($displayable$$48$$);
          $fadeOutObjs$$4$$.push($displayable$$48$$);
          break
        }
      }
    }
  }
  this.$_drilled$ = []
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($event$$416$$, $pzcMatrix$$10$$) {
  this.$_pzcMatrix$ = $pzcMatrix$$10$$;
  var $i$$525_zoom$$11$$ = $pzcMatrix$$10$$.$_a$, $areaObjs_dataObjs_j$$91_type$$124$$ = $event$$416$$.$getSubType$();
  if(this.$_bFixPatterns$ && "zoomed" == $areaObjs_dataObjs_j$$91_type$$124$$) {
    this.$_bFixPatterns$ = D.$JSCompiler_alias_FALSE$$;
    for($areaObjs_dataObjs_j$$91_type$$124$$ = 0;$areaObjs_dataObjs_j$$91_type$$124$$ < this.$_areaObjs$.length;$areaObjs_dataObjs_j$$91_type$$124$$++) {
      var $displayable$$49$$ = this.$_areaObjs$[$areaObjs_dataObjs_j$$91_type$$124$$].$getDisplayable$(), $fill$$46$$ = $displayable$$49$$.$_ptFill$;
      if($fill$$46$$) {
        var $scaledFill$$ = new D.$DvtPatternFill$$;
        $fill$$46$$.$mergeProps$($scaledFill$$);
        $scaledFill$$.$setMatrix$(new D.$DvtMatrix$$(1 / $i$$525_zoom$$11$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, 1 / $i$$525_zoom$$11$$));
        $displayable$$49$$.$setFill$($scaledFill$$)
      }
    }
  }
  $areaObjs_dataObjs_j$$91_type$$124$$ = this.$_areaObjs$;
  for($i$$525_zoom$$11$$ = 0;$i$$525_zoom$$11$$ < $areaObjs_dataObjs_j$$91_type$$124$$.length;$i$$525_zoom$$11$$++) {
    $areaObjs_dataObjs_j$$91_type$$124$$[$i$$525_zoom$$11$$].$HandleZoomEvent$($pzcMatrix$$10$$)
  }
  if(this.$_tmap$.$_isMarkerZoomBehaviorFixed$) {
    $areaObjs_dataObjs_j$$91_type$$124$$ = this.$_dataObjs$;
    for($i$$525_zoom$$11$$ = 0;$i$$525_zoom$$11$$ < $areaObjs_dataObjs_j$$91_type$$124$$.length;$i$$525_zoom$$11$$++) {
      $areaObjs_dataObjs_j$$91_type$$124$$[$i$$525_zoom$$11$$].$HandleZoomEvent$($pzcMatrix$$10$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$HandlePanEvent$ = (0,D.$JSCompiler_set$$)("$_pzcMatrix$");
D.$JSCompiler_prototypeAlias$$.$_processInitialSelections$ = function $$JSCompiler_prototypeAlias$$$$_processInitialSelections$$() {
  this.$_selectionHandler$ && ((0,D.$JSCompiler_StaticMethods_processInitialSelections$$)(this.$_selectionHandler$, this.$_initSelections$, this.$_dataObjs$.concat(this.$_areaObjs$)), this.$_initSelections$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.$__getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$__getDragTransferable$$($obj$$162_rowKeys$$1$$) {
  if(this.$_selectionHandler$) {
    $obj$$162_rowKeys$$1$$.$isSelected$() || (this.$_selectionHandler$.$processClick$($obj$$162_rowKeys$$1$$, D.$JSCompiler_alias_FALSE$$), this.$_eventHandler$.$fireSelectionEvent$($obj$$162_rowKeys$$1$$));
    $obj$$162_rowKeys$$1$$ = [];
    for(var $selection$$27$$ = this.$_selectionHandler$.getSelection(), $i$$526$$ = 0;$i$$526$$ < $selection$$27$$.length;$i$$526$$++) {
      $obj$$162_rowKeys$$1$$.push($selection$$27$$[$i$$526$$].getId())
    }
    return $obj$$162_rowKeys$$1$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$__getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$__getDragFeedback$$() {
  for(var $displayables$$12$$ = [], $selection$$28$$ = this.$_selectionHandler$.getSelection(), $i$$527$$ = 0;$i$$527$$ < $selection$$28$$.length;$i$$527$$++) {
    $displayables$$12$$.push($selection$$28$$[$i$$527$$].$getDisplayable$())
  }
  return $displayables$$12$$
};
D.$DvtThematicMapKeyboardHandler$$ = function $$DvtThematicMapKeyboardHandler$$$($tmap$$4$$, $manager$$12$$) {
  this.Init($tmap$$4$$, $manager$$12$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapKeyboardHandler$$, D.$DvtPanZoomCanvasKeyboardHandler$$, "DvtThematicMapKeyboardHandler");
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMapKeyboardHandler$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$5$$, $manager$$13$$) {
  D.$DvtThematicMapKeyboardHandler$$.$superclass$.Init($tmap$$5$$, $manager$$13$$);
  this.$_tmap$ = $tmap$$5$$
};
D.$JSCompiler_prototypeAlias$$.$isSelectionEvent$ = function $$JSCompiler_prototypeAlias$$$$isSelectionEvent$$($event$$412$$) {
  return this.$isNavigationEvent$($event$$412$$) && !$event$$412$$.ctrlKey
};
D.$JSCompiler_prototypeAlias$$.$processKeyDown$ = function $$JSCompiler_prototypeAlias$$$$processKeyDown$$($event$$413$$) {
  var $focusObj_keyCode$$25$$ = $event$$413$$.keyCode;
  if(221 == $focusObj_keyCode$$25$$) {
    var $focusObj_keyCode$$25$$ = this.$_eventManager$.$getFocus$(), $navigables$$7$$ = (0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this.$_tmap$);
    $focusObj_keyCode$$25$$ instanceof D.$DvtMapDataArea$$ && 0 < $navigables$$7$$.length && ($focusObj_keyCode$$25$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)($focusObj_keyCode$$25$$, $event$$413$$, $navigables$$7$$));
    (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this.$_eventManager$, $focusObj_keyCode$$25$$)
  }else {
    219 == $focusObj_keyCode$$25$$ ? ($focusObj_keyCode$$25$$ = this.$_eventManager$.$getFocus$(), $navigables$$7$$ = (0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this.$_tmap$), !($focusObj_keyCode$$25$$ instanceof D.$DvtMapDataArea$$) && 0 < $navigables$$7$$.length && ($focusObj_keyCode$$25$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)($focusObj_keyCode$$25$$, $event$$413$$, $navigables$$7$$)), (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this.$_eventManager$, $focusObj_keyCode$$25$$)) : 
    ($focusObj_keyCode$$25$$ = D.$DvtThematicMapKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$413$$), this.$isNavigationEvent$($event$$413$$) && !$event$$413$$.ctrlKey && (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this.$_eventManager$, $focusObj_keyCode$$25$$))
  }
  return $focusObj_keyCode$$25$$
};
D.$JSCompiler_prototypeAlias$$.$isMultiSelectEvent$ = function $$JSCompiler_prototypeAlias$$$$isMultiSelectEvent$$($event$$414$$) {
  return 32 == $event$$414$$.keyCode && $event$$414$$.ctrlKey
};
D.$JSCompiler_prototypeAlias$$.$isNavigationEvent$ = function $$JSCompiler_prototypeAlias$$$$isNavigationEvent$$($event$$415_keyCode$$26$$) {
  var $isNavigable$$1$$ = D.$DvtThematicMapKeyboardHandler$$.$superclass$.$isNavigationEvent$.call(this, $event$$415_keyCode$$26$$);
  if(!$isNavigable$$1$$ && ($event$$415_keyCode$$26$$ = $event$$415_keyCode$$26$$.keyCode, 219 == $event$$415_keyCode$$26$$ || 221 == $event$$415_keyCode$$26$$)) {
    $isNavigable$$1$$ = D.$JSCompiler_alias_TRUE$$
  }
  return $isNavigable$$1$$
};
D.$DvtThematicMapEventManager$$ = function $$DvtThematicMapEventManager$$$($context$$301$$, $callback$$90$$, $callbackObj$$54$$) {
  this.Init($context$$301$$, $callback$$90$$, $callbackObj$$54$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapEventManager$$, D.$DvtEventManager$$, "DvtThematicMapEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMapEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$302$$, $callback$$91$$, $callbackObj$$55$$) {
  D.$DvtThematicMapEventManager$$.$superclass$.Init.call(this, $context$$302$$, $callback$$91$$, $callbackObj$$55$$);
  this.$_selectionHandlers$ = {};
  this.$_tmap$ = $callbackObj$$55$$;
  this.$_bDragged$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$getSelectionHandler$ = function $$JSCompiler_prototypeAlias$$$$getSelectionHandler$$($logicalObj$$16$$) {
  if($logicalObj$$16$$ && $logicalObj$$16$$.$getDataLayer$) {
    return this.$_selectionHandlers$[$logicalObj$$16$$.$getDataLayer$().$getClientId$()]
  }
};
D.$JSCompiler_prototypeAlias$$.$setSelectionHandler$ = function $$JSCompiler_prototypeAlias$$$$setSelectionHandler$$($dataLayerId$$5$$, $handler$$42$$) {
  this.$_selectionHandlers$[$dataLayerId$$5$$] = $handler$$42$$
};
D.$JSCompiler_prototypeAlias$$.$setDrillMode$ = (0,D.$JSCompiler_set$$)("$_drillMode$");
D.$JSCompiler_prototypeAlias$$.$removeFromSelection$ = function $$JSCompiler_prototypeAlias$$$$removeFromSelection$$($clientId$$20$$, $obj$$165$$) {
  var $selectionHandler$$3$$ = this.$_selectionHandlers$[$clientId$$20$$];
  $selectionHandler$$3$$ && $selectionHandler$$3$$.$removeFromSelection$($obj$$165$$)
};
D.$JSCompiler_prototypeAlias$$.$clearSelection$ = function $$JSCompiler_prototypeAlias$$$$clearSelection$$($clientId$$21_selectionHandler$$4$$) {
  ($clientId$$21_selectionHandler$$4$$ = this.$_selectionHandlers$[$clientId$$21_selectionHandler$$4$$]) && $clientId$$21_selectionHandler$$4$$.$clearSelection$()
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$419$$) {
  var $obj$$166$$ = this.$GetLogicalObject$($event$$419$$.target);
  $obj$$166$$ && ($obj$$166$$.$getShowPopupBehaviors$ && $obj$$166$$.$getDataLayer$) && (this.$_tmap$.$_eventClientId$ = $obj$$166$$.$getDataLayer$().$getClientId$());
  D.$DvtThematicMapEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$419$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($event$$420$$) {
  this.$_bDragged$ = D.$JSCompiler_alias_FALSE$$;
  D.$DvtThematicMapEventManager$$.$superclass$.$OnMouseDown$.call(this, $event$$420$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$421$$) {
  this.$_bDragged$ = D.$JSCompiler_alias_TRUE$$;
  D.$DvtThematicMapEventManager$$.$superclass$.$OnMouseMove$.call(this, $event$$421$$)
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$422$$) {
  if(!this.$_bDragged$) {
    var $obj$$167$$ = this.$GetLogicalObject$($event$$422$$.target);
    (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this, $obj$$167$$);
    if(!$obj$$167$$ || !$obj$$167$$.$isSelectable$ || !$obj$$167$$.$isSelectable$()) {
      for(var $clientId$$22$$ in this.$_selectionHandlers$) {
        if(this.$_selectionHandlers$[$clientId$$22$$].$processClick$(D.$JSCompiler_alias_NULL$$, $event$$422$$.ctrlKey)) {
          var $selectionEvent$$1$$ = new D.$DvtSelectionEvent$$([]);
          (0,D.$JSCompiler_StaticMethods_addParam$$)($selectionEvent$$1$$, "clientId", $clientId$$22$$);
          this.$_callback$.call(this.$_callbackObj$, $selectionEvent$$1$$)
        }
      }
    }
    D.$DvtThematicMapEventManager$$.$superclass$.$OnClick$.call(this, $event$$422$$);
    this.$_handleClick$($obj$$167$$, $event$$422$$.pageX, $event$$422$$.pageY)
  }
};
D.$JSCompiler_prototypeAlias$$.$_handleClick$ = function $$JSCompiler_prototypeAlias$$$$_handleClick$$($obj$$168$$, $pageX$$7$$, $pageY$$7$$) {
  $obj$$168$$ instanceof D.$DvtMapDataObject$$ && ($obj$$168$$.$_hasAction$ ? (0,D.$JSCompiler_StaticMethods_HandleAction$$)(this, $obj$$168$$, $pageX$$7$$, $pageY$$7$$) : $obj$$168$$.$getShowPopupBehaviors$() && (this.$_tmap$.$_eventClientId$ = $obj$$168$$.$getDataLayer$().$getClientId$()))
};
D.$JSCompiler_StaticMethods_HandleAction$$ = function $$JSCompiler_StaticMethods_HandleAction$$$($JSCompiler_StaticMethods_HandleAction$self$$, $obj$$169_offset$$22$$, $pageX$$8$$, $pageY$$8$$) {
  var $actionEvent$$2$$ = new D.$DvtMapActionEvent$$($obj$$169_offset$$22$$.$getClientId$(), $obj$$169_offset$$22$$.getId(), $obj$$169_offset$$22$$.$getAction$());
  (0,D.$JSCompiler_StaticMethods_addParam$$)($actionEvent$$2$$, "clientId", $obj$$169_offset$$22$$.$getDataLayer$().$getClientId$());
  $pageX$$8$$ != D.$JSCompiler_alias_NULL$$ && $pageY$$8$$ != D.$JSCompiler_alias_NULL$$ && ($obj$$169_offset$$22$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_HandleAction$self$$.$_tmap$.$_context$, $pageX$$8$$, $pageY$$8$$), (0,D.$JSCompiler_StaticMethods_addParam$$)($actionEvent$$2$$, "pointXY", {x:$obj$$169_offset$$22$$.x, y:$obj$$169_offset$$22$$.y}));
  $JSCompiler_StaticMethods_HandleAction$self$$.$hideTooltip$();
  $JSCompiler_StaticMethods_HandleAction$self$$.$_callback$.call($JSCompiler_StaticMethods_HandleAction$self$$.$_callbackObj$, $actionEvent$$2$$)
};
D.$JSCompiler_StaticMethods_SetClickInfo$$ = function $$JSCompiler_StaticMethods_SetClickInfo$$$($JSCompiler_StaticMethods_SetClickInfo$self$$, $obj$$170$$) {
  var $clientId$$23$$ = D.$JSCompiler_alias_NULL$$, $dataLayer$$26_mapLayer$$1$$ = D.$JSCompiler_alias_NULL$$, $area$$25$$ = D.$JSCompiler_alias_NULL$$;
  $obj$$170$$ && ($obj$$170$$ instanceof D.$DvtMapDataObject$$ ? $area$$25$$ = $obj$$170$$.$getDisplayable$() : $obj$$170$$ instanceof D.$DvtMapArea$$ && ($area$$25$$ = $obj$$170$$), $obj$$170$$.$getDataLayer$ && ($dataLayer$$26_mapLayer$$1$$ = $obj$$170$$.$getDataLayer$(), $clientId$$23$$ = $dataLayer$$26_mapLayer$$1$$.$getClientId$(), $dataLayer$$26_mapLayer$$1$$ = $dataLayer$$26_mapLayer$$1$$.$_parentLayer$.$LayerName$));
  var $JSCompiler_StaticMethods_setClickInfo$self$$inline_5786$$ = $JSCompiler_StaticMethods_SetClickInfo$self$$.$_tmap$;
  $JSCompiler_StaticMethods_setClickInfo$self$$inline_5786$$.$_clickedLayerName$ = $dataLayer$$26_mapLayer$$1$$;
  $JSCompiler_StaticMethods_setClickInfo$self$$inline_5786$$.$_clickedDataLayerId$ = $clientId$$23$$;
  $JSCompiler_StaticMethods_setClickInfo$self$$inline_5786$$.$_clickedObject$ = $area$$25$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMapEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnDblClick$ = function $$JSCompiler_prototypeAlias$$$$OnDblClick$$($drillEvent_event$$423_obj$$171$$) {
  D.$DvtThematicMapEventManager$$.$superclass$.$OnDblClick$.call(this, $drillEvent_event$$423_obj$$171$$);
  $drillEvent_event$$423_obj$$171$$ = this.$GetLogicalObject$($drillEvent_event$$423_obj$$171$$.target);
  this.$getSelectionHandler$($drillEvent_event$$423_obj$$171$$) && (this.$_drillMode$ && "none" != this.$_drillMode$) && ($drillEvent_event$$423_obj$$171$$ = new D.$DvtMapDrillEvent$$(D.$DvtMapDrillEvent$$.$DRILL_DOWN$), this.$_callback$.call(this.$_callbackObj$, $drillEvent_event$$423_obj$$171$$))
};
D.$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$424$$) {
  var $eventConsumed$$5$$ = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_fitRegion$self$$inline_5791_keyCode$$27_legendPanel_logicalObj$$17$$ = $event$$424$$.keyCode;
  if((48 == $JSCompiler_StaticMethods_fitRegion$self$$inline_5791_keyCode$$27_legendPanel_logicalObj$$17$$ || 96 == $JSCompiler_StaticMethods_fitRegion$self$$inline_5791_keyCode$$27_legendPanel_logicalObj$$17$$) && $event$$424$$.ctrlKey && $event$$424$$.shiftKey) {
    this.$_tmap$.$resetMap$(), $event$$424$$.preventDefault()
  }else {
    if(220 == $JSCompiler_StaticMethods_fitRegion$self$$inline_5791_keyCode$$27_legendPanel_logicalObj$$17$$) {
      ($JSCompiler_StaticMethods_fitRegion$self$$inline_5791_keyCode$$27_legendPanel_logicalObj$$17$$ = this.$_tmap$.$_legendPanel$) && ($JSCompiler_StaticMethods_fitRegion$self$$inline_5791_keyCode$$27_legendPanel_logicalObj$$17$$ instanceof D.$DvtCollapsiblePanel$$ ? (0,D.$JSCompiler_StaticMethods_setCollapsed$$)($JSCompiler_StaticMethods_fitRegion$self$$inline_5791_keyCode$$27_legendPanel_logicalObj$$17$$, !$JSCompiler_StaticMethods_fitRegion$self$$inline_5791_keyCode$$27_legendPanel_logicalObj$$17$$.isCollapsed()) : 
      $JSCompiler_StaticMethods_fitRegion$self$$inline_5791_keyCode$$27_legendPanel_logicalObj$$17$$ instanceof D.$DvtPanelDrawer$$ && $JSCompiler_StaticMethods_fitRegion$self$$inline_5791_keyCode$$27_legendPanel_logicalObj$$17$$.$setDisclosed$(!$JSCompiler_StaticMethods_fitRegion$self$$inline_5791_keyCode$$27_legendPanel_logicalObj$$17$$.$isDisclosed$())), $event$$424$$.preventDefault()
    }else {
      if(13 == $JSCompiler_StaticMethods_fitRegion$self$$inline_5791_keyCode$$27_legendPanel_logicalObj$$17$$) {
        $JSCompiler_StaticMethods_fitRegion$self$$inline_5791_keyCode$$27_legendPanel_logicalObj$$17$$ = this.$getFocus$(), $JSCompiler_StaticMethods_fitRegion$self$$inline_5791_keyCode$$27_legendPanel_logicalObj$$17$$ instanceof D.$DvtMapDataObject$$ && $JSCompiler_StaticMethods_fitRegion$self$$inline_5791_keyCode$$27_legendPanel_logicalObj$$17$$.$_hasAction$ ? (0,D.$JSCompiler_StaticMethods_HandleAction$$)(this, $JSCompiler_StaticMethods_fitRegion$self$$inline_5791_keyCode$$27_legendPanel_logicalObj$$17$$) : 
        ($event$$424$$.shiftKey ? this.$_tmap$.$drillUp$() : this.$_tmap$.$drillDown$(), $event$$424$$.preventDefault())
      }else {
        if(32 == $JSCompiler_StaticMethods_fitRegion$self$$inline_5791_keyCode$$27_legendPanel_logicalObj$$17$$ && $event$$424$$.ctrlKey) {
          $JSCompiler_StaticMethods_fitRegion$self$$inline_5791_keyCode$$27_legendPanel_logicalObj$$17$$ = this.$getFocus$(), (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this, $JSCompiler_StaticMethods_fitRegion$self$$inline_5791_keyCode$$27_legendPanel_logicalObj$$17$$), (0,D.$JSCompiler_StaticMethods_ProcessSelectionEventHelper$$)(this, $JSCompiler_StaticMethods_fitRegion$self$$inline_5791_keyCode$$27_legendPanel_logicalObj$$17$$, D.$JSCompiler_alias_TRUE$$), $event$$424$$.preventDefault()
        }else {
          if((48 == $JSCompiler_StaticMethods_fitRegion$self$$inline_5791_keyCode$$27_legendPanel_logicalObj$$17$$ || 96 == $JSCompiler_StaticMethods_fitRegion$self$$inline_5791_keyCode$$27_legendPanel_logicalObj$$17$$) && $event$$424$$.ctrlKey) {
            var $focusObj$$1_toFit$$inline_5792$$ = this.$getFocus$();
            $event$$424$$.altKey ? ($JSCompiler_StaticMethods_fitRegion$self$$inline_5791_keyCode$$27_legendPanel_logicalObj$$17$$ = this.$_tmap$, $focusObj$$1_toFit$$inline_5792$$ = $focusObj$$1_toFit$$inline_5792$$.$getDisplayable$(), $focusObj$$1_toFit$$inline_5792$$ || ($focusObj$$1_toFit$$inline_5792$$ = $JSCompiler_StaticMethods_fitRegion$self$$inline_5791_keyCode$$27_legendPanel_logicalObj$$17$$.$_zoomToFitObject$), $focusObj$$1_toFit$$inline_5792$$ || ($focusObj$$1_toFit$$inline_5792$$ = 
            $JSCompiler_StaticMethods_fitRegion$self$$inline_5791_keyCode$$27_legendPanel_logicalObj$$17$$.$_clickedObject$), $JSCompiler_StaticMethods_fitRegion$self$$inline_5791_keyCode$$27_legendPanel_logicalObj$$17$$.$_zoomToFitBounds$($focusObj$$1_toFit$$inline_5792$$.$getDimensions$())) : (0,D.$JSCompiler_StaticMethods_fitSelectedRegions$$)(this.$_tmap$);
            $event$$424$$.preventDefault()
          }else {
            $eventConsumed$$5$$ = D.$DvtThematicMapEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$424$$)
          }
        }
      }
    }
  }
  return $eventConsumed$$5$$
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchClick$$($event$$425$$) {
  var $obj$$172$$ = this.$GetLogicalObject$($event$$425$$.target);
  (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this, $obj$$172$$);
  if(!$obj$$172$$ || $obj$$172$$.$isClearSelection$) {
    for(var $clientId$$24$$ in this.$_selectionHandlers$) {
      if(this.$_selectionHandlers$[$clientId$$24$$].$processClick$(D.$JSCompiler_alias_NULL$$, $event$$425$$.ctrlKey)) {
        for(var $selectedObjs$$2_selectionEvent$$2$$ = this.$_selectionHandlers$[$clientId$$24$$].getSelection(), $selectedIds$$6$$ = [], $i$$532$$ = 0;$i$$532$$ < $selectedObjs$$2_selectionEvent$$2$$.length;$i$$532$$++) {
          $selectedIds$$6$$.push($selectedObjs$$2_selectionEvent$$2$$[$i$$532$$].getId())
        }
        $selectedObjs$$2_selectionEvent$$2$$ = new D.$DvtSelectionEvent$$($selectedIds$$6$$);
        this.$_callback$.call(this.$_callbackObj$, $selectedObjs$$2_selectionEvent$$2$$)
      }
    }
  }
  D.$DvtThematicMapEventManager$$.$superclass$.$OnComponentTouchClick$.call(this, $event$$425$$);
  this.$_handleClick$($obj$$172$$, $event$$425$$.$touch$.pageX, $event$$425$$.$touch$.pageY)
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverOverInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverOverInternal$$($event$$426_obj$$173$$) {
  if(($event$$426_obj$$173$$ = this.$GetLogicalObject$($event$$426_obj$$173$$.target)) && $event$$426_obj$$173$$.$getShowPopupBehaviors$ && $event$$426_obj$$173$$.$getDataLayer$) {
    this.$_tmap$.$_eventClientId$ = $event$$426_obj$$173$$.$getDataLayer$().$getClientId$()
  }
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchDblClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchDblClick$$($drillEvent$$1_event$$427$$) {
  var $obj$$174$$ = this.$GetLogicalObject$($drillEvent$$1_event$$427$$.target);
  $obj$$174$$ && (this.$getSelectionHandler$($obj$$174$$) && this.$_drillMode$ && "none" != this.$_drillMode$) && ((0,D.$JSCompiler_StaticMethods_ProcessSelectionEventHelper$$)(this, $obj$$174$$, $drillEvent$$1_event$$427$$.ctrlKey), $drillEvent$$1_event$$427$$ = new D.$DvtMapDrillEvent$$(D.$DvtMapDrillEvent$$.$DRILL_DOWN$), this.$_callback$.call(this.$_callbackObj$, $drillEvent$$1_event$$427$$))
};
D.$DvtThematicMapParser$$ = function $$DvtThematicMapParser$$$($tmap$$13$$) {
  this.Init($tmap$$13$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapParser$$, D.$DvtObj$$, "DvtThematicMapParser");
D.$DvtThematicMapParser$_ELEM_LAYER$$ = "layer";
D.$DvtThematicMapParser$_ELEM_POINTS$$ = "points";
D.$DvtThematicMapParser$_ELEM_POINT$$ = "point";
D.$DvtThematicMapParser$_ATTR_INLINE_STYLE$$ = "inlineStyle";
D.$DvtThematicMapParser$_ATTR_ANIM_ON_MAP_CHANGE$$ = "animationOnMapChange";
D.$DvtThematicMapParser$_ATTR_ANIM_ON_MAP_CHANGE$$ = "animationOnMapChange";
D.$DvtThematicMapParser$_ATTR_INLINE_STYLE$$ = "inlineStyle";
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMapParser$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$14$$) {
  this.$_tmap$ = $tmap$$14$$;
  this.$_customMarkerDefs$ = {};
  this.$_areaDiscloseStyle$ = this.$_areaSelectStyle$ = this.$_areaHoverStyle$ = this.$_areaLayerStyle$ = D.$JSCompiler_alias_NULL$$;
  this.$_isMobile$ = (0,D.$DvtAgent$isTouchDevice$$)()
};
D.$JSCompiler_prototypeAlias$$.$loadXmlInitial$ = function $$JSCompiler_prototypeAlias$$$$loadXmlInitial$$($childNodes$$30_rootXmlNode$$5$$) {
  $childNodes$$30_rootXmlNode$$5$$ = $childNodes$$30_rootXmlNode$$5$$.$getChildNodes$();
  for(var $childNodes$$inline_5798_node$$226$$, $i$$inline_5799_nodeName$$10$$, $i$$533$$ = 0;$i$$533$$ < $childNodes$$30_rootXmlNode$$5$$.length;$i$$533$$++) {
    if($childNodes$$inline_5798_node$$226$$ = $childNodes$$30_rootXmlNode$$5$$[$i$$533$$], $i$$inline_5799_nodeName$$10$$ = $childNodes$$inline_5798_node$$226$$.getName(), "mapProperties" == $i$$inline_5799_nodeName$$10$$) {
      this.$ParseMapProperties$($childNodes$$inline_5798_node$$226$$)
    }else {
      if("customLayer" == $i$$inline_5799_nodeName$$10$$) {
        this.$ParseCustomRegionLayer$($childNodes$$inline_5798_node$$226$$)
      }else {
        if("layers" == $i$$inline_5799_nodeName$$10$$) {
          this.$ParseDataLayers$($childNodes$$inline_5798_node$$226$$)
        }else {
          if("legend" == $i$$inline_5799_nodeName$$10$$) {
            this.$ParseLegend$($childNodes$$inline_5798_node$$226$$)
          }else {
            if("childResources" == $i$$inline_5799_nodeName$$10$$) {
              $childNodes$$inline_5798_node$$226$$ = $childNodes$$inline_5798_node$$226$$.$getChildNodes$();
              for($i$$inline_5799_nodeName$$10$$ = 0;$i$$inline_5799_nodeName$$10$$ < $childNodes$$inline_5798_node$$226$$.length;$i$$inline_5799_nodeName$$10$$++) {
                var $resourceBundle$$inline_5800$$ = $childNodes$$inline_5798_node$$226$$[$i$$inline_5799_nodeName$$10$$].getTextContent();
                $resourceBundle$$inline_5800$$ && (0,D.$DvtBundle$addLocalizedStrings$$)(window.JSON.parse($resourceBundle$$inline_5800$$))
              }
            }
          }
        }
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$ParseMapProperties$ = function $$JSCompiler_prototypeAlias$$$$ParseMapProperties$$($childNodes$$32_xmlNode$$88$$) {
  var $attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$;
  if($attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$ = $childNodes$$32_xmlNode$$88$$.$getAttr$("source")) {
    this.$_isCustomBasemap$ = D.$JSCompiler_alias_TRUE$$
  }
  if($attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$ = $childNodes$$32_xmlNode$$88$$.$getAttr$("baseMapName")) {
    var $JSCompiler_StaticMethods_setMapName$self$$inline_10510_i$$535$$ = this.$_tmap$;
    $attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$ = this.$_isCustomBasemap$ ? "$" + $attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$ : $attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$;
    $JSCompiler_StaticMethods_setMapName$self$$inline_10510_i$$535$$.$_bBaseMapChanged$ = $JSCompiler_StaticMethods_setMapName$self$$inline_10510_i$$535$$.$_mapName$ && $JSCompiler_StaticMethods_setMapName$self$$inline_10510_i$$535$$.$_mapName$ != $attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$;
    $JSCompiler_StaticMethods_setMapName$self$$inline_10510_i$$535$$.$_mapName$ = $attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$
  }
  if($attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$ = $childNodes$$32_xmlNode$$88$$.$getAttr$("animationOnDisplay")) {
    this.$_tmap$.$_animationOnDisplay$ = $attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$
  }
  if($attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$ = $childNodes$$32_xmlNode$$88$$.$getAttr$(D.$DvtThematicMapParser$_ATTR_ANIM_ON_MAP_CHANGE$$)) {
    this.$_tmap$.$_animationOnMapChange$ = $attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$
  }
  ($attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$ = $childNodes$$32_xmlNode$$88$$.$getAttr$("animationDuration")) && this.$_tmap$.$setAnimationDuration$($attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$);
  if($attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$ = $childNodes$$32_xmlNode$$88$$.$getAttr$("displayTooltips")) {
    this.$_tmap$.$_displayTooltips$ = $attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$
  }
  if($attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$ = $childNodes$$32_xmlNode$$88$$.$getAttr$("dropTargetStyle")) {
    this.$_areaDropSiteStyle$ = new D.$DvtCSSStyle$$($attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$)
  }
  if($attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$ = $childNodes$$32_xmlNode$$88$$.$getAttr$("controlPanelBehavior")) {
    this.$_tmap$.$_controlPanelBehavior$ = $attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$
  }
  ($attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$ = $childNodes$$32_xmlNode$$88$$.$getAttr$("featuresOff")) && this.$_tmap$.$setFeaturesOff$($attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$);
  if($attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$ = $childNodes$$32_xmlNode$$88$$.$getAttr$("centerX")) {
    this.$_tmap$.$_initialCenterX$ = (0,window.parseFloat)($attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$)
  }
  if($attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$ = $childNodes$$32_xmlNode$$88$$.$getAttr$("centerY")) {
    this.$_tmap$.$_initialCenterY$ = (0,window.parseFloat)($attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$)
  }
  if($attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$ = $childNodes$$32_xmlNode$$88$$.$getAttr$("curZoom")) {
    this.$_tmap$.$_initialZoom$ = (0,window.parseFloat)($attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$)
  }
  if(($attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$ = $childNodes$$32_xmlNode$$88$$.$getAttr$("animationOnDrill")) && "alphaFade" == $attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$) {
    this.$_tmap$.$_animationOnDrill$ = $attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$
  }
  ($attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$ = $childNodes$$32_xmlNode$$88$$.$getAttr$("drillMode")) && this.$_tmap$.$setDrillMode$($attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$);
  if($attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$ = $childNodes$$32_xmlNode$$88$$.$getAttr$("drillZoomToFit")) {
    this.$_tmap$.$_drillZoomToFit$ = "true" == $attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$
  }
  $attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$ = $childNodes$$32_xmlNode$$88$$.$getAttr$("initialZooming");
  "auto" == $attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$ && (this.$_tmap$.$_initialZooming$ = D.$JSCompiler_alias_TRUE$$);
  $attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$ = $childNodes$$32_xmlNode$$88$$.$getAttr$("zooming");
  "none" == $attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$ && (this.$_tmap$.$_zooming$ = D.$JSCompiler_alias_FALSE$$);
  $attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$ = $childNodes$$32_xmlNode$$88$$.$getAttr$("panning");
  "none" == $attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$ && (this.$_tmap$.$_panning$ = D.$JSCompiler_alias_FALSE$$);
  $attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$ = (0,window.parseFloat)($childNodes$$32_xmlNode$$88$$.$getAttr$("maxZoom"));
  (0,window.isNaN)($attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$) || (this.$_tmap$.$_maxZoomFactor$ = $attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$);
  if($attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$ = $childNodes$$32_xmlNode$$88$$.$getAttr$("markerZoomBehavior")) {
    this.$_tmap$.$_isMarkerZoomBehaviorFixed$ = "fixed" == $attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$
  }
  (0,D.$JSCompiler_StaticMethods_parseComponentAttrs$$)(this.$_tmap$, $childNodes$$32_xmlNode$$88$$);
  $childNodes$$32_xmlNode$$88$$ = $childNodes$$32_xmlNode$$88$$.$getChildNodes$();
  for(var $attr$$7_baseMapName$$inline_5809_nodeName$$11$$, $JSCompiler_StaticMethods_setMapName$self$$inline_10510_i$$535$$ = 0;$JSCompiler_StaticMethods_setMapName$self$$inline_10510_i$$535$$ < $childNodes$$32_xmlNode$$88$$.length;$JSCompiler_StaticMethods_setMapName$self$$inline_10510_i$$535$$++) {
    if($attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$ = $childNodes$$32_xmlNode$$88$$[$JSCompiler_StaticMethods_setMapName$self$$inline_10510_i$$535$$], $attr$$7_baseMapName$$inline_5809_nodeName$$11$$ = $attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$.getName(), "mapHierarchy" == $attr$$7_baseMapName$$inline_5809_nodeName$$11$$) {
      $attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$ = $attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$.$getChildNodes$();
      $attr$$7_baseMapName$$inline_5809_nodeName$$11$$ = this.$_tmap$.$_mapName$;
      for(var $children$$inline_10562_layerName$$inline_5810$$ = D.$JSCompiler_alias_VOID$$, $labelDisplay$$inline_5811_layer$$inline_5814$$ = D.$JSCompiler_alias_VOID$$, $clientId$$inline_5812_shapes$$inline_10556$$ = D.$JSCompiler_alias_VOID$$, $labelType$$inline_5813$$ = D.$JSCompiler_alias_VOID$$, $labelDisplay$$inline_5811_layer$$inline_5814$$ = D.$JSCompiler_alias_VOID$$, $i$$inline_5815$$ = 0;$i$$inline_5815$$ < $attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$.length;$i$$inline_5815$$++) {
        var $animDur$$inline_5819_node$$inline_5816$$ = $attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$[$i$$inline_5815$$];
        if("pointLayer" != $animDur$$inline_5819_node$$inline_5816$$.getName()) {
          var $children$$inline_10562_layerName$$inline_5810$$ = $animDur$$inline_5819_node$$inline_5816$$.$getAttr$("layerName"), $labelDisplay$$inline_5811_layer$$inline_5814$$ = $animDur$$inline_5819_node$$inline_5816$$.$getAttr$("labelDisplay"), $clientId$$inline_5812_shapes$$inline_10556$$ = $animDur$$inline_5819_node$$inline_5816$$.$getAttr$("clientId"), $labelType$$inline_5813$$ = $animDur$$inline_5819_node$$inline_5816$$.$getAttr$("labelType"), $areaNames$$inline_5818_attr$$inline_5817_values$$inline_10559$$ = 
          $animDur$$inline_5819_node$$inline_5816$$.$getAttr$("areaStyle");
          $areaNames$$inline_5818_attr$$inline_5817_values$$inline_10559$$ && this.$_areaLayerStyle$.$merge$(new D.$DvtCSSStyle$$($areaNames$$inline_5818_attr$$inline_5817_values$$inline_10559$$));
          ($areaNames$$inline_5818_attr$$inline_5817_values$$inline_10559$$ = $animDur$$inline_5819_node$$inline_5816$$.$getAttr$("labelStyle")) && this.$_areaLayerStyle$.$merge$(new D.$DvtCSSStyle$$($areaNames$$inline_5818_attr$$inline_5817_values$$inline_10559$$));
          this.$_isCustomBasemap$ ? $labelDisplay$$inline_5811_layer$$inline_5814$$ = new D.$DvtMapCustomAreaLayer$$(this.$_tmap$, $children$$inline_10562_layerName$$inline_5810$$, $clientId$$inline_5812_shapes$$inline_10556$$, $labelDisplay$$inline_5811_layer$$inline_5814$$, $labelType$$inline_5813$$, this.$_tmap$.$_eventHandler$) : ($labelDisplay$$inline_5811_layer$$inline_5814$$ = new D.$DvtMapAreaLayer$$(this.$_tmap$, $children$$inline_10562_layerName$$inline_5810$$, $clientId$$inline_5812_shapes$$inline_10556$$, 
          $labelDisplay$$inline_5811_layer$$inline_5814$$, $labelType$$inline_5813$$, this.$_tmap$.$_eventHandler$), $areaNames$$inline_5818_attr$$inline_5817_values$$inline_10559$$ = D.$DvtBaseMapManager$$.$getAreaNames$($attr$$7_baseMapName$$inline_5809_nodeName$$11$$, $children$$inline_10562_layerName$$inline_5810$$), $clientId$$inline_5812_shapes$$inline_10556$$ = this.$_createPathShapes$($areaNames$$inline_5818_attr$$inline_5817_values$$inline_10559$$), $labelDisplay$$inline_5811_layer$$inline_5814$$.$AreaShapes$ = 
          $clientId$$inline_5812_shapes$$inline_10556$$, (0,D.$JSCompiler_StaticMethods_setAreaNames$$)($labelDisplay$$inline_5811_layer$$inline_5814$$, $areaNames$$inline_5818_attr$$inline_5817_values$$inline_10559$$), $areaNames$$inline_5818_attr$$inline_5817_values$$inline_10559$$ = D.$DvtBaseMapManager$$.$getAreaLabelInfo$($attr$$7_baseMapName$$inline_5809_nodeName$$11$$, $children$$inline_10562_layerName$$inline_5810$$), $labelDisplay$$inline_5811_layer$$inline_5814$$.$_labelInfo$ = $areaNames$$inline_5818_attr$$inline_5817_values$$inline_10559$$, 
          $children$$inline_10562_layerName$$inline_5810$$ = D.$DvtBaseMapManager$$.$getChildrenForLayerAreas$(this.$_tmap$.$_mapName$, $children$$inline_10562_layerName$$inline_5810$$), $labelDisplay$$inline_5811_layer$$inline_5814$$.$_children$ = $children$$inline_10562_layerName$$inline_5810$$, $labelDisplay$$inline_5811_layer$$inline_5814$$.$_areaHoverStyle$ = this.$_areaHoverStyle$, $labelDisplay$$inline_5811_layer$$inline_5814$$.$_areaSelectStyle$ = this.$_areaSelectStyle$, $labelDisplay$$inline_5811_layer$$inline_5814$$.$_areaDiscloseStyle$ = 
          this.$_areaDiscloseStyle$);
          $labelDisplay$$inline_5811_layer$$inline_5814$$.$_layerCSSStyle$ = this.$_areaLayerStyle$;
          $labelDisplay$$inline_5811_layer$$inline_5814$$.$_dropSiteCSSStyle$ = this.$_areaDropSiteStyle$;
          if($areaNames$$inline_5818_attr$$inline_5817_values$$inline_10559$$ = $animDur$$inline_5819_node$$inline_5816$$.$getAttr$("animationOnLayerChange")) {
            ($animDur$$inline_5819_node$$inline_5816$$ = $animDur$$inline_5819_node$$inline_5816$$.$getAttr$("animationDuration")) && ($animDur$$inline_5819_node$$inline_5816$$ = (0,window.parseFloat)($animDur$$inline_5819_node$$inline_5816$$));
            if(!$animDur$$inline_5819_node$$inline_5816$$ || (0,window.isNaN)($animDur$$inline_5819_node$$inline_5816$$)) {
              $animDur$$inline_5819_node$$inline_5816$$ = 1
            }
            $labelDisplay$$inline_5811_layer$$inline_5814$$.$setAnimation$($areaNames$$inline_5818_attr$$inline_5817_values$$inline_10559$$);
            $labelDisplay$$inline_5811_layer$$inline_5814$$.$setAnimationDuration$($animDur$$inline_5819_node$$inline_5816$$)
          }
          $labelDisplay$$inline_5811_layer$$inline_5814$$ && this.$_tmap$.$_layers$.push($labelDisplay$$inline_5811_layer$$inline_5814$$)
        }
      }
    }else {
      if("regionLayer" == $attr$$7_baseMapName$$inline_5809_nodeName$$11$$) {
        if($attr$$7_baseMapName$$inline_5809_nodeName$$11$$ = $attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$.$getAttr$(D.$DvtThematicMapParser$_ATTR_INLINE_STYLE$$)) {
          this.$_areaLayerStyle$ = new D.$DvtCSSStyle$$($attr$$7_baseMapName$$inline_5809_nodeName$$11$$)
        }
        if($attr$$7_baseMapName$$inline_5809_nodeName$$11$$ = $attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$.$getAttr$("hoverStyle")) {
          this.$_areaHoverStyle$ = new D.$DvtCSSStyle$$($attr$$7_baseMapName$$inline_5809_nodeName$$11$$)
        }
        if($attr$$7_baseMapName$$inline_5809_nodeName$$11$$ = $attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$.$getAttr$("selectStyle")) {
          this.$_areaSelectStyle$ = new D.$DvtCSSStyle$$($attr$$7_baseMapName$$inline_5809_nodeName$$11$$)
        }
        if($attr$$7_baseMapName$$inline_5809_nodeName$$11$$ = $attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$.$getAttr$("disclosedStyle")) {
          this.$_areaDiscloseStyle$ = new D.$DvtCSSStyle$$($attr$$7_baseMapName$$inline_5809_nodeName$$11$$)
        }
      }else {
        "markerStyle" == $attr$$7_baseMapName$$inline_5809_nodeName$$11$$ ? ($attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$ = new D.$DvtCSSStyle$$($attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$.$getAttr$(D.$DvtThematicMapParser$_ATTR_INLINE_STYLE$$)), this.$_tmap$.$_markerStyle$ = $attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$) : "basemap" == $attr$$7_baseMapName$$inline_5809_nodeName$$11$$ && 
        this.$_tmap$.$_mapName$ == "$" + $attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$.$getAttr$("id") && this.$ParseCustomBasemap$($attr$$inline_10511_attr$$inline_5804_layerNodes$$inline_5808_node$$227_style$$inline_5822$$)
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$ParseDataLayers$ = function $$JSCompiler_prototypeAlias$$$$ParseDataLayers$$($i$$536_legend$$22_xmlNode$$89$$, $pzcMatrix$$20$$, $topLayerName$$2$$) {
  var $layers$$2$$ = $i$$536_legend$$22_xmlNode$$89$$.getElementsByTagName(D.$DvtThematicMapParser$_ELEM_LAYER$$);
  $i$$536_legend$$22_xmlNode$$89$$ = $i$$536_legend$$22_xmlNode$$89$$.getElementsByTagName("legend");
  $pzcMatrix$$20$$ && ($i$$536_legend$$22_xmlNode$$89$$ && $i$$536_legend$$22_xmlNode$$89$$[0]) && this.$ParseLegend$($i$$536_legend$$22_xmlNode$$89$$[0]);
  for($i$$536_legend$$22_xmlNode$$89$$ = 0;$i$$536_legend$$22_xmlNode$$89$$ < $layers$$2$$.length;$i$$536_legend$$22_xmlNode$$89$$++) {
    var $clientId$$25_dataLayer$$27$$ = $layers$$2$$[$i$$536_legend$$22_xmlNode$$89$$].$getAttr$("clientId"), $id$$130$$ = $layers$$2$$[$i$$536_legend$$22_xmlNode$$89$$].$getAttr$("id"), $layer$$7_parentLayerName$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)(this.$_tmap$, $id$$130$$);
    $layer$$7_parentLayerName$$ ? $layer$$7_parentLayerName$$ instanceof D.$DvtMapAreaLayer$$ && (0,D.$JSCompiler_StaticMethods_resetRenderedAreas$$)($layer$$7_parentLayerName$$) : ($layer$$7_parentLayerName$$ = $layers$$2$$[$i$$536_legend$$22_xmlNode$$89$$].$getAttr$("showWith")) ? $layer$$7_parentLayerName$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)(this.$_tmap$, $layer$$7_parentLayerName$$) : ($layer$$7_parentLayerName$$ = new D.$DvtMapLayer$$(this.$_tmap$, this.$_tmap$.$_eventHandler$), this.$_tmap$.$_layers$.push($layer$$7_parentLayerName$$));
    var $clientId$$25_dataLayer$$27$$ = new D.$DvtMapDataLayer$$(this.$_tmap$, $layer$$7_parentLayerName$$, $clientId$$25_dataLayer$$27$$, this.$_tmap$.$_eventHandler$), $animOnDataChange_isolatedRowKey$$1_selectionMode$$10$$ = $layers$$2$$[$i$$536_legend$$22_xmlNode$$89$$].$getAttr$("selectionMode");
    "single" == $animOnDataChange_isolatedRowKey$$1_selectionMode$$10$$ ? $clientId$$25_dataLayer$$27$$.$setSelectionMode$("s") : "multiple" == $animOnDataChange_isolatedRowKey$$1_selectionMode$$10$$ && $clientId$$25_dataLayer$$27$$.$setSelectionMode$("m");
    if($animOnDataChange_isolatedRowKey$$1_selectionMode$$10$$ = $layers$$2$$[$i$$536_legend$$22_xmlNode$$89$$].$getAttr$("animationDataChange")) {
      var $animDur$$3_initSelections$$1$$ = $layers$$2$$[$i$$536_legend$$22_xmlNode$$89$$].$getAttr$("animationDuration");
      $animDur$$3_initSelections$$1$$ && ($animDur$$3_initSelections$$1$$ = (0,window.parseFloat)($animDur$$3_initSelections$$1$$));
      if(!$animDur$$3_initSelections$$1$$ || (0,window.isNaN)($animDur$$3_initSelections$$1$$)) {
        $animDur$$3_initSelections$$1$$ = 1
      }
      $clientId$$25_dataLayer$$27$$.$setAnimation$($animOnDataChange_isolatedRowKey$$1_selectionMode$$10$$);
      $clientId$$25_dataLayer$$27$$.$setAnimationDuration$($animDur$$3_initSelections$$1$$)
    }
    $animOnDataChange_isolatedRowKey$$1_selectionMode$$10$$ = D.$JSCompiler_alias_NULL$$;
    $layer$$7_parentLayerName$$ instanceof D.$DvtMapAreaLayer$$ && ($animOnDataChange_isolatedRowKey$$1_selectionMode$$10$$ = $layers$$2$$[$i$$536_legend$$22_xmlNode$$89$$].$getAttr$("isolatedRowKey"));
    for(var $animDur$$3_initSelections$$1$$ = [], $initDrilled$$ = [], $styles$$19$$ = this.$_parseStyles$($layers$$2$$[$i$$536_legend$$22_xmlNode$$89$$].getElementsByTagName("styles")), $data$$73$$ = $layers$$2$$[$i$$536_legend$$22_xmlNode$$89$$].getElementsByTagName("row"), $spb$$5$$ = this.$_parseShowPopupBehavior$($layers$$2$$[$i$$536_legend$$22_xmlNode$$89$$], $styles$$19$$), $j$$93$$ = 0;$j$$93$$ < $data$$73$$.length;$j$$93$$++) {
      var $JSCompiler_StaticMethods_addDataObject$self$$inline_5860_areaId$$inline_5839_displayable$$52_styleId$$ = $data$$73$$[$j$$93$$].$getAttr$("styleId"), $dataObj$$11_layerName$$inline_5830_obj$$inline_5861$$;
      a: {
        var $displayTooltips$$inline_5856_layer$$inline_5828_preDatatip$$inline_5858_textStyle$$inline_5855$$ = $layer$$7_parentLayerName$$, $cssTextStyle$$inline_5854_dataLayer$$inline_5829_labelPosition$$inline_5853$$ = $clientId$$25_dataLayer$$27$$;
        $dataObj$$11_layerName$$inline_5830_obj$$inline_5861$$ = $id$$130$$;
        var $datatip$$inline_5857_node$$inline_5831$$ = $data$$73$$[$j$$93$$], $context$$inline_10587_dataObj$$inline_10603_displayable$$inline_5842_style$$inline_5832$$ = $styles$$19$$[$JSCompiler_StaticMethods_addDataObject$self$$inline_5860_areaId$$inline_5839_displayable$$52_styleId$$], $initSelections$$inline_5833_labelText$$inline_5849$$ = $animDur$$3_initSelections$$1$$, $initDrilled$$inline_5834_labelDisplay$$inline_5850$$ = $initDrilled$$, $action$$inline_10620_dataObj$$inline_10590_destination$$inline_5847_hasAction$$inline_5846_isolatedRowKey$$inline_5835_json$$inline_10610_node$$inline_10602_radianRot$$inline_5844_rotation$$inline_5843$$ = 
        $animOnDataChange_isolatedRowKey$$1_selectionMode$$10$$, $context$$inline_5836$$ = this.$_tmap$.$_context$, $id$$inline_5837_labelInfo$$inline_5851$$ = $datatip$$inline_5857_node$$inline_5831$$.$getAttr$("rowKey"), $center$$inline_10605_center$$inline_5845_clientId$$inline_5838_linkObj$$inline_5848_source$$inline_10591$$ = $datatip$$inline_5857_node$$inline_5831$$.$getAttr$("clientId"), $JSCompiler_StaticMethods_addDataObject$self$$inline_5860_areaId$$inline_5839_displayable$$52_styleId$$ = 
        $datatip$$inline_5857_node$$inline_5831$$.$getAttr$("id"), $dataObj$$inline_5840$$ = D.$JSCompiler_alias_VOID$$, $styleType$$inline_5841$$ = $context$$inline_10587_dataObj$$inline_10603_displayable$$inline_5842_style$$inline_5832$$.getName();
        if("colorStyles" == $styleType$$inline_5841$$) {
          if($action$$inline_10620_dataObj$$inline_10590_destination$$inline_5847_hasAction$$inline_5846_isolatedRowKey$$inline_5835_json$$inline_10610_node$$inline_10602_radianRot$$inline_5844_rotation$$inline_5843$$) {
            if($action$$inline_10620_dataObj$$inline_10590_destination$$inline_5847_hasAction$$inline_5846_isolatedRowKey$$inline_5835_json$$inline_10610_node$$inline_10602_radianRot$$inline_5844_rotation$$inline_5843$$ != $id$$inline_5837_labelInfo$$inline_5851$$) {
              $dataObj$$11_layerName$$inline_5830_obj$$inline_5861$$ = D.$JSCompiler_alias_NULL$$;
              break a
            }
            this.$_isolatedArea$ = $JSCompiler_StaticMethods_addDataObject$self$$inline_5860_areaId$$inline_5839_displayable$$52_styleId$$
          }
          $displayTooltips$$inline_5856_layer$$inline_5828_preDatatip$$inline_5858_textStyle$$inline_5855$$.$_renderArea$[$JSCompiler_StaticMethods_addDataObject$self$$inline_5860_areaId$$inline_5839_displayable$$52_styleId$$] = D.$JSCompiler_alias_FALSE$$;
          $dataObj$$inline_5840$$ = new D.$DvtMapDataArea$$($context$$inline_5836$$, $cssTextStyle$$inline_5854_dataLayer$$inline_5829_labelPosition$$inline_5853$$, $id$$inline_5837_labelInfo$$inline_5851$$, $center$$inline_10605_center$$inline_5845_clientId$$inline_5838_linkObj$$inline_5848_source$$inline_10591$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_5860_areaId$$inline_5839_displayable$$52_styleId$$);
          this.$_parseMapArea$($context$$inline_5836$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_5860_areaId$$inline_5839_displayable$$52_styleId$$, $displayTooltips$$inline_5856_layer$$inline_5828_preDatatip$$inline_5858_textStyle$$inline_5855$$, $datatip$$inline_5857_node$$inline_5831$$, $dataObj$$inline_5840$$)
        }else {
          if("graduatedSymbol" == $styleType$$inline_5841$$) {
            $dataObj$$inline_5840$$ = new D.$DvtMapDataMarker$$($context$$inline_5836$$, $cssTextStyle$$inline_5854_dataLayer$$inline_5829_labelPosition$$inline_5853$$, $id$$inline_5837_labelInfo$$inline_5851$$, $center$$inline_10605_center$$inline_5845_clientId$$inline_5838_linkObj$$inline_5848_source$$inline_10591$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_5860_areaId$$inline_5839_displayable$$52_styleId$$), this.$_parseMapMarker$($context$$inline_5836$$, $context$$inline_10587_dataObj$$inline_10603_displayable$$inline_5842_style$$inline_5832$$, 
            $dataObj$$11_layerName$$inline_5830_obj$$inline_5861$$, $datatip$$inline_5857_node$$inline_5831$$, $dataObj$$inline_5840$$)
          }else {
            if("image" == $styleType$$inline_5841$$) {
              var $dataObj$$inline_5840$$ = new D.$DvtMapDataImage$$($context$$inline_5836$$, $cssTextStyle$$inline_5854_dataLayer$$inline_5829_labelPosition$$inline_5853$$, $id$$inline_5837_labelInfo$$inline_5851$$, $center$$inline_10605_center$$inline_5845_clientId$$inline_5838_linkObj$$inline_5848_source$$inline_10591$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_5860_areaId$$inline_5839_displayable$$52_styleId$$), $context$$inline_10587_dataObj$$inline_10603_displayable$$inline_5842_style$$inline_5832$$ = 
              $context$$inline_5836$$, $center$$inline_10593_cssStyle$$inline_10609_gaugeType$$inline_10604_height$$inline_10607_layerName$$inline_10588$$ = $dataObj$$11_layerName$$inline_5830_obj$$inline_5861$$, $cssStyle$$inline_10597_inlineStyle$$inline_10596_node$$inline_10589$$ = $datatip$$inline_5857_node$$inline_5831$$, $action$$inline_10620_dataObj$$inline_10590_destination$$inline_5847_hasAction$$inline_5846_isolatedRowKey$$inline_5835_json$$inline_10610_node$$inline_10602_radianRot$$inline_5844_rotation$$inline_5843$$ = 
              $dataObj$$inline_5840$$, $center$$inline_10605_center$$inline_5845_clientId$$inline_5838_linkObj$$inline_5848_source$$inline_10591$$ = $cssStyle$$inline_10597_inlineStyle$$inline_10596_node$$inline_10589$$.$getAttr$("url"), $context$$inline_10600_image$$inline_10592_inlineStyle$$inline_10608_width$$inline_10606$$ = D.$JSCompiler_alias_NULL$$;
              if($center$$inline_10593_cssStyle$$inline_10609_gaugeType$$inline_10604_height$$inline_10607_layerName$$inline_10588$$ = (0,D.$JSCompiler_StaticMethods__parseCenter$$)(this, $center$$inline_10593_cssStyle$$inline_10609_gaugeType$$inline_10604_height$$inline_10607_layerName$$inline_10588$$, $cssStyle$$inline_10597_inlineStyle$$inline_10596_node$$inline_10589$$, "cities" != $center$$inline_10593_cssStyle$$inline_10609_gaugeType$$inline_10604_height$$inline_10607_layerName$$inline_10588$$)) {
                $context$$inline_10600_image$$inline_10592_inlineStyle$$inline_10608_width$$inline_10606$$ = new D.$DvtImage$$($context$$inline_10587_dataObj$$inline_10603_displayable$$inline_5842_style$$inline_5832$$, $center$$inline_10605_center$$inline_5845_clientId$$inline_5838_linkObj$$inline_5848_source$$inline_10591$$);
                $action$$inline_10620_dataObj$$inline_10590_destination$$inline_5847_hasAction$$inline_5846_isolatedRowKey$$inline_5835_json$$inline_10610_node$$inline_10602_radianRot$$inline_5844_rotation$$inline_5843$$.$setCenter$($center$$inline_10593_cssStyle$$inline_10609_gaugeType$$inline_10604_height$$inline_10607_layerName$$inline_10588$$);
                $action$$inline_10620_dataObj$$inline_10590_destination$$inline_5847_hasAction$$inline_5846_isolatedRowKey$$inline_5835_json$$inline_10610_node$$inline_10602_radianRot$$inline_5844_rotation$$inline_5843$$.$setDisplayable$($context$$inline_10600_image$$inline_10592_inlineStyle$$inline_10608_width$$inline_10606$$);
                var $width$$inline_10594$$ = D.$JSCompiler_alias_VOID$$, $height$$inline_10595$$ = D.$JSCompiler_alias_VOID$$;
                if($cssStyle$$inline_10597_inlineStyle$$inline_10596_node$$inline_10589$$ = $cssStyle$$inline_10597_inlineStyle$$inline_10596_node$$inline_10589$$.$getAttr$(D.$DvtThematicMapParser$_ATTR_INLINE_STYLE$$)) {
                  $cssStyle$$inline_10597_inlineStyle$$inline_10596_node$$inline_10589$$ = new D.$DvtCSSStyle$$($cssStyle$$inline_10597_inlineStyle$$inline_10596_node$$inline_10589$$), ($width$$inline_10594$$ = $cssStyle$$inline_10597_inlineStyle$$inline_10596_node$$inline_10589$$.$getStyle$("width").substring(0, $cssStyle$$inline_10597_inlineStyle$$inline_10596_node$$inline_10589$$.$getStyle$("width").indexOf("px"))) && $context$$inline_10600_image$$inline_10592_inlineStyle$$inline_10608_width$$inline_10606$$.$setWidth$($width$$inline_10594$$), 
                  ($height$$inline_10595$$ = $cssStyle$$inline_10597_inlineStyle$$inline_10596_node$$inline_10589$$.$getStyle$("height").substring(0, $cssStyle$$inline_10597_inlineStyle$$inline_10596_node$$inline_10589$$.$getStyle$("height").indexOf("px"))) && $context$$inline_10600_image$$inline_10592_inlineStyle$$inline_10608_width$$inline_10606$$.$setHeight$($height$$inline_10595$$), $width$$inline_10594$$ != D.$JSCompiler_alias_NULL$$ && $height$$inline_10595$$ != D.$JSCompiler_alias_NULL$$ && 
                  ($context$$inline_10600_image$$inline_10592_inlineStyle$$inline_10608_width$$inline_10606$$.$setX$($center$$inline_10593_cssStyle$$inline_10609_gaugeType$$inline_10604_height$$inline_10607_layerName$$inline_10588$$.x - $width$$inline_10594$$ / 2), $context$$inline_10600_image$$inline_10592_inlineStyle$$inline_10608_width$$inline_10606$$.$setY$($center$$inline_10593_cssStyle$$inline_10609_gaugeType$$inline_10604_height$$inline_10607_layerName$$inline_10588$$.y - $height$$inline_10595$$ / 
                  2), $action$$inline_10620_dataObj$$inline_10590_destination$$inline_5847_hasAction$$inline_5846_isolatedRowKey$$inline_5835_json$$inline_10610_node$$inline_10602_radianRot$$inline_5844_rotation$$inline_5843$$.$setSize$($width$$inline_10594$$ * $height$$inline_10595$$))
                }
                (!$width$$inline_10594$$ || !$height$$inline_10595$$) && D.$DvtImageLoader$$.$loadImage$($context$$inline_10587_dataObj$$inline_10603_displayable$$inline_5842_style$$inline_5832$$, $center$$inline_10605_center$$inline_5845_clientId$$inline_5838_linkObj$$inline_5848_source$$inline_10591$$, D.$DvtObj$$.$createCallback$($action$$inline_10620_dataObj$$inline_10590_destination$$inline_5847_hasAction$$inline_5846_isolatedRowKey$$inline_5835_json$$inline_10610_node$$inline_10602_radianRot$$inline_5844_rotation$$inline_5843$$, 
                $action$$inline_10620_dataObj$$inline_10590_destination$$inline_5847_hasAction$$inline_5846_isolatedRowKey$$inline_5835_json$$inline_10610_node$$inline_10602_radianRot$$inline_5844_rotation$$inline_5843$$.$onImageLoaded$))
              }
            }else {
              if($dataObj$$inline_5840$$ = new D.$DvtMapDataComponent$$($context$$inline_5836$$, $cssTextStyle$$inline_5854_dataLayer$$inline_5829_labelPosition$$inline_5853$$, $id$$inline_5837_labelInfo$$inline_5851$$, $center$$inline_10605_center$$inline_5845_clientId$$inline_5838_linkObj$$inline_5848_source$$inline_10591$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_5860_areaId$$inline_5839_displayable$$52_styleId$$), $context$$inline_10600_image$$inline_10592_inlineStyle$$inline_10608_width$$inline_10606$$ = 
              $context$$inline_5836$$, $action$$inline_10620_dataObj$$inline_10590_destination$$inline_5847_hasAction$$inline_5846_isolatedRowKey$$inline_5835_json$$inline_10610_node$$inline_10602_radianRot$$inline_5844_rotation$$inline_5843$$ = $datatip$$inline_5857_node$$inline_5831$$, $context$$inline_10587_dataObj$$inline_10603_displayable$$inline_5842_style$$inline_5832$$ = $dataObj$$inline_5840$$, $center$$inline_10593_cssStyle$$inline_10609_gaugeType$$inline_10604_height$$inline_10607_layerName$$inline_10588$$ = 
              $styleType$$inline_5841$$, $center$$inline_10605_center$$inline_5845_clientId$$inline_5838_linkObj$$inline_5848_source$$inline_10591$$ = (0,D.$JSCompiler_StaticMethods__parseCenter$$)(this, $dataObj$$11_layerName$$inline_5830_obj$$inline_5861$$, $action$$inline_10620_dataObj$$inline_10590_destination$$inline_5847_hasAction$$inline_5846_isolatedRowKey$$inline_5835_json$$inline_10610_node$$inline_10602_radianRot$$inline_5844_rotation$$inline_5843$$, "cities" != $dataObj$$11_layerName$$inline_5830_obj$$inline_5861$$)) {
                "statusMeterGauge" == $center$$inline_10593_cssStyle$$inline_10609_gaugeType$$inline_10604_height$$inline_10607_layerName$$inline_10588$$ ? window.gauge = (0,D.$DvtStatusMeterGauge$newInstance$$)($context$$inline_10600_image$$inline_10592_inlineStyle$$inline_10608_width$$inline_10606$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$) : "ledGauge" == $center$$inline_10593_cssStyle$$inline_10609_gaugeType$$inline_10604_height$$inline_10607_layerName$$inline_10588$$ ? window.gauge = 
                (0,D.$DvtLedGauge$newInstance$$)($context$$inline_10600_image$$inline_10592_inlineStyle$$inline_10608_width$$inline_10606$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$) : "dialGauge" == $center$$inline_10593_cssStyle$$inline_10609_gaugeType$$inline_10604_height$$inline_10607_layerName$$inline_10588$$ ? window.gauge = (0,D.$DvtDialGauge$newInstance$$)($context$$inline_10600_image$$inline_10592_inlineStyle$$inline_10608_width$$inline_10606$$, D.$JSCompiler_alias_NULL$$, 
                D.$JSCompiler_alias_NULL$$) : "ratingGauge" == $center$$inline_10593_cssStyle$$inline_10609_gaugeType$$inline_10604_height$$inline_10607_layerName$$inline_10588$$ && (window.gauge = (0,D.$DvtRatingGauge$newInstance$$)($context$$inline_10600_image$$inline_10592_inlineStyle$$inline_10608_width$$inline_10606$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$));
                $context$$inline_10587_dataObj$$inline_10603_displayable$$inline_5842_style$$inline_5832$$.$setCenter$($center$$inline_10605_center$$inline_5845_clientId$$inline_5838_linkObj$$inline_5848_source$$inline_10591$$);
                $context$$inline_10587_dataObj$$inline_10603_displayable$$inline_5842_style$$inline_5832$$.$setDisplayable$(window.gauge);
                $center$$inline_10593_cssStyle$$inline_10609_gaugeType$$inline_10604_height$$inline_10607_layerName$$inline_10588$$ = $context$$inline_10600_image$$inline_10592_inlineStyle$$inline_10608_width$$inline_10606$$ = D.$JSCompiler_alias_VOID$$;
                if($context$$inline_10600_image$$inline_10592_inlineStyle$$inline_10608_width$$inline_10606$$ = $action$$inline_10620_dataObj$$inline_10590_destination$$inline_5847_hasAction$$inline_5846_isolatedRowKey$$inline_5835_json$$inline_10610_node$$inline_10602_radianRot$$inline_5844_rotation$$inline_5843$$.$getAttr$(D.$DvtThematicMapParser$_ATTR_INLINE_STYLE$$)) {
                  $center$$inline_10593_cssStyle$$inline_10609_gaugeType$$inline_10604_height$$inline_10607_layerName$$inline_10588$$ = new D.$DvtCSSStyle$$($context$$inline_10600_image$$inline_10592_inlineStyle$$inline_10608_width$$inline_10606$$), $context$$inline_10600_image$$inline_10592_inlineStyle$$inline_10608_width$$inline_10606$$ = $center$$inline_10593_cssStyle$$inline_10609_gaugeType$$inline_10604_height$$inline_10607_layerName$$inline_10588$$.width ? (0,window.parseInt)($center$$inline_10593_cssStyle$$inline_10609_gaugeType$$inline_10604_height$$inline_10607_layerName$$inline_10588$$.width.substring(0, 
                  $center$$inline_10593_cssStyle$$inline_10609_gaugeType$$inline_10604_height$$inline_10607_layerName$$inline_10588$$.width.indexOf("px"))) : 50, $context$$inline_10587_dataObj$$inline_10603_displayable$$inline_5842_style$$inline_5832$$.$setWidth$($context$$inline_10600_image$$inline_10592_inlineStyle$$inline_10608_width$$inline_10606$$), $center$$inline_10593_cssStyle$$inline_10609_gaugeType$$inline_10604_height$$inline_10607_layerName$$inline_10588$$ = $center$$inline_10593_cssStyle$$inline_10609_gaugeType$$inline_10604_height$$inline_10607_layerName$$inline_10588$$.height ? 
                  (0,window.parseInt)($center$$inline_10593_cssStyle$$inline_10609_gaugeType$$inline_10604_height$$inline_10607_layerName$$inline_10588$$.height.substring(0, $center$$inline_10593_cssStyle$$inline_10609_gaugeType$$inline_10604_height$$inline_10607_layerName$$inline_10588$$.height.indexOf("px"))) : 50, $context$$inline_10587_dataObj$$inline_10603_displayable$$inline_5842_style$$inline_5832$$.$setHeight$($center$$inline_10593_cssStyle$$inline_10609_gaugeType$$inline_10604_height$$inline_10607_layerName$$inline_10588$$), 
                  $context$$inline_10587_dataObj$$inline_10603_displayable$$inline_5842_style$$inline_5832$$.$setX$($center$$inline_10605_center$$inline_5845_clientId$$inline_5838_linkObj$$inline_5848_source$$inline_10591$$.x - $context$$inline_10600_image$$inline_10592_inlineStyle$$inline_10608_width$$inline_10606$$ / 2), $context$$inline_10587_dataObj$$inline_10603_displayable$$inline_5842_style$$inline_5832$$.$setY$($center$$inline_10605_center$$inline_5845_clientId$$inline_5838_linkObj$$inline_5848_source$$inline_10591$$.y - 
                  $center$$inline_10593_cssStyle$$inline_10609_gaugeType$$inline_10604_height$$inline_10607_layerName$$inline_10588$$ / 2)
                }
                if($action$$inline_10620_dataObj$$inline_10590_destination$$inline_5847_hasAction$$inline_5846_isolatedRowKey$$inline_5835_json$$inline_10610_node$$inline_10602_radianRot$$inline_5844_rotation$$inline_5843$$ = $action$$inline_10620_dataObj$$inline_10590_destination$$inline_5847_hasAction$$inline_5846_isolatedRowKey$$inline_5835_json$$inline_10610_node$$inline_10602_radianRot$$inline_5844_rotation$$inline_5843$$.$getAttr$("json")) {
                  $context$$inline_10587_dataObj$$inline_10603_displayable$$inline_5842_style$$inline_5832$$.$_json$ = $action$$inline_10620_dataObj$$inline_10590_destination$$inline_5847_hasAction$$inline_5846_isolatedRowKey$$inline_5835_json$$inline_10610_node$$inline_10602_radianRot$$inline_5844_rotation$$inline_5843$$
                }
              }
            }
          }
        }
        if($context$$inline_10587_dataObj$$inline_10603_displayable$$inline_5842_style$$inline_5832$$ = $dataObj$$inline_5840$$.$getDisplayable$()) {
          if($action$$inline_10620_dataObj$$inline_10590_destination$$inline_5847_hasAction$$inline_5846_isolatedRowKey$$inline_5835_json$$inline_10610_node$$inline_10602_radianRot$$inline_5844_rotation$$inline_5843$$ = (0,window.parseInt)($datatip$$inline_5857_node$$inline_5831$$.$getAttr$("rotation"))) {
            $action$$inline_10620_dataObj$$inline_10590_destination$$inline_5847_hasAction$$inline_5846_isolatedRowKey$$inline_5835_json$$inline_10610_node$$inline_10602_radianRot$$inline_5844_rotation$$inline_5843$$ = $action$$inline_10620_dataObj$$inline_10590_destination$$inline_5847_hasAction$$inline_5846_isolatedRowKey$$inline_5835_json$$inline_10610_node$$inline_10602_radianRot$$inline_5844_rotation$$inline_5843$$ * window.Math.PI / 180, $context$$inline_10587_dataObj$$inline_10603_displayable$$inline_5842_style$$inline_5832$$.$setRotation$($action$$inline_10620_dataObj$$inline_10590_destination$$inline_5847_hasAction$$inline_5846_isolatedRowKey$$inline_5835_json$$inline_10610_node$$inline_10602_radianRot$$inline_5844_rotation$$inline_5843$$), 
            $center$$inline_10605_center$$inline_5845_clientId$$inline_5838_linkObj$$inline_5848_source$$inline_10591$$ = $dataObj$$inline_5840$$.$getCenter$(), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$inline_10587_dataObj$$inline_10603_displayable$$inline_5842_style$$inline_5832$$, $center$$inline_10605_center$$inline_5845_clientId$$inline_5838_linkObj$$inline_5848_source$$inline_10591$$.x - ($center$$inline_10605_center$$inline_5845_clientId$$inline_5838_linkObj$$inline_5848_source$$inline_10591$$.x * 
            window.Math.cos($action$$inline_10620_dataObj$$inline_10590_destination$$inline_5847_hasAction$$inline_5846_isolatedRowKey$$inline_5835_json$$inline_10610_node$$inline_10602_radianRot$$inline_5844_rotation$$inline_5843$$) - $center$$inline_10605_center$$inline_5845_clientId$$inline_5838_linkObj$$inline_5848_source$$inline_10591$$.y * window.Math.sin($action$$inline_10620_dataObj$$inline_10590_destination$$inline_5847_hasAction$$inline_5846_isolatedRowKey$$inline_5835_json$$inline_10610_node$$inline_10602_radianRot$$inline_5844_rotation$$inline_5843$$)), 
            $center$$inline_10605_center$$inline_5845_clientId$$inline_5838_linkObj$$inline_5848_source$$inline_10591$$.y - ($center$$inline_10605_center$$inline_5845_clientId$$inline_5838_linkObj$$inline_5848_source$$inline_10591$$.x * window.Math.sin($action$$inline_10620_dataObj$$inline_10590_destination$$inline_5847_hasAction$$inline_5846_isolatedRowKey$$inline_5835_json$$inline_10610_node$$inline_10602_radianRot$$inline_5844_rotation$$inline_5843$$) + $center$$inline_10605_center$$inline_5845_clientId$$inline_5838_linkObj$$inline_5848_source$$inline_10591$$.y * 
            window.Math.cos($action$$inline_10620_dataObj$$inline_10590_destination$$inline_5847_hasAction$$inline_5846_isolatedRowKey$$inline_5835_json$$inline_10610_node$$inline_10602_radianRot$$inline_5844_rotation$$inline_5843$$)))
          }
          $JSCompiler_StaticMethods_addDataObject$self$$inline_5860_areaId$$inline_5839_displayable$$52_styleId$$ && $displayTooltips$$inline_5856_layer$$inline_5828_preDatatip$$inline_5858_textStyle$$inline_5855$$ instanceof D.$DvtMapAreaLayer$$ && ($displayTooltips$$inline_5856_layer$$inline_5828_preDatatip$$inline_5858_textStyle$$inline_5855$$.$_renderLabel$[$JSCompiler_StaticMethods_addDataObject$self$$inline_5860_areaId$$inline_5839_displayable$$52_styleId$$] = D.$JSCompiler_alias_FALSE$$);
          $action$$inline_10620_dataObj$$inline_10590_destination$$inline_5847_hasAction$$inline_5846_isolatedRowKey$$inline_5835_json$$inline_10610_node$$inline_10602_radianRot$$inline_5844_rotation$$inline_5843$$ = "true" == $datatip$$inline_5857_node$$inline_5831$$.$getAttr$("hasAction");
          if($dataObj$$inline_5840$$.$_hasAction$ = $action$$inline_10620_dataObj$$inline_10590_destination$$inline_5847_hasAction$$inline_5846_isolatedRowKey$$inline_5835_json$$inline_10610_node$$inline_10602_radianRot$$inline_5844_rotation$$inline_5843$$) {
            $action$$inline_10620_dataObj$$inline_10590_destination$$inline_5847_hasAction$$inline_5846_isolatedRowKey$$inline_5835_json$$inline_10610_node$$inline_10602_radianRot$$inline_5844_rotation$$inline_5843$$ = $datatip$$inline_5857_node$$inline_5831$$.$getAttr$("action"), $dataObj$$inline_5840$$.$_action$ = $action$$inline_10620_dataObj$$inline_10590_destination$$inline_5847_hasAction$$inline_5846_isolatedRowKey$$inline_5835_json$$inline_10610_node$$inline_10602_radianRot$$inline_5844_rotation$$inline_5843$$
          }
          if($action$$inline_10620_dataObj$$inline_10590_destination$$inline_5847_hasAction$$inline_5846_isolatedRowKey$$inline_5835_json$$inline_10610_node$$inline_10602_radianRot$$inline_5844_rotation$$inline_5843$$ = $datatip$$inline_5857_node$$inline_5831$$.$getAttr$("destination")) {
            $center$$inline_10605_center$$inline_5845_clientId$$inline_5838_linkObj$$inline_5848_source$$inline_10591$$ = [], $center$$inline_10605_center$$inline_5845_clientId$$inline_5838_linkObj$$inline_5848_source$$inline_10591$$.destination = $action$$inline_10620_dataObj$$inline_10590_destination$$inline_5847_hasAction$$inline_5846_isolatedRowKey$$inline_5835_json$$inline_10610_node$$inline_10602_radianRot$$inline_5844_rotation$$inline_5843$$, $center$$inline_10605_center$$inline_5845_clientId$$inline_5838_linkObj$$inline_5848_source$$inline_10591$$.targetFrame = 
            "_blank", $center$$inline_10605_center$$inline_5845_clientId$$inline_5838_linkObj$$inline_5848_source$$inline_10591$$.focusable = D.$JSCompiler_alias_TRUE$$, (0,D.$JSCompiler_StaticMethods_setHyperlink$$)($context$$inline_10587_dataObj$$inline_10603_displayable$$inline_5842_style$$inline_5832$$, $center$$inline_10605_center$$inline_5845_clientId$$inline_5838_linkObj$$inline_5848_source$$inline_10591$$)
          }
          "true" == $datatip$$inline_5857_node$$inline_5831$$.$getAttr$("selected") && $initSelections$$inline_5833_labelText$$inline_5849$$.push($id$$inline_5837_labelInfo$$inline_5851$$);
          "true" == $datatip$$inline_5857_node$$inline_5831$$.$getAttr$("drilled") && ($initDrilled$$inline_5834_labelDisplay$$inline_5850$$.push($datatip$$inline_5857_node$$inline_5831$$.$getAttr$("id")), this.$_tmap$.$_drilledRowKeys$.push($id$$inline_5837_labelInfo$$inline_5851$$));
          $initSelections$$inline_5833_labelText$$inline_5849$$ = $datatip$$inline_5857_node$$inline_5831$$.$getAttr$("label");
          $initDrilled$$inline_5834_labelDisplay$$inline_5850$$ = "off";
          $initSelections$$inline_5833_labelText$$inline_5849$$ ? $initDrilled$$inline_5834_labelDisplay$$inline_5850$$ = "on" : "colorStyles" == $styleType$$inline_5841$$ && ($initDrilled$$inline_5834_labelDisplay$$inline_5850$$ = $displayTooltips$$inline_5856_layer$$inline_5828_preDatatip$$inline_5858_textStyle$$inline_5855$$.$getLabelDisplay$());
          !$initSelections$$inline_5833_labelText$$inline_5849$$ && ($JSCompiler_StaticMethods_addDataObject$self$$inline_5860_areaId$$inline_5839_displayable$$52_styleId$$ && "off" != $initDrilled$$inline_5834_labelDisplay$$inline_5850$$) && ($initSelections$$inline_5833_labelText$$inline_5849$$ = "long" == $displayTooltips$$inline_5856_layer$$inline_5828_preDatatip$$inline_5858_textStyle$$inline_5855$$.$_labelType$ ? $displayTooltips$$inline_5856_layer$$inline_5828_preDatatip$$inline_5858_textStyle$$inline_5855$$.$AreaNames$[$JSCompiler_StaticMethods_addDataObject$self$$inline_5860_areaId$$inline_5839_displayable$$52_styleId$$][1] : 
          $displayTooltips$$inline_5856_layer$$inline_5828_preDatatip$$inline_5858_textStyle$$inline_5855$$.$AreaNames$[$JSCompiler_StaticMethods_addDataObject$self$$inline_5860_areaId$$inline_5839_displayable$$52_styleId$$][0]);
          if($initSelections$$inline_5833_labelText$$inline_5849$$) {
            $id$$inline_5837_labelInfo$$inline_5851$$ = D.$JSCompiler_alias_VOID$$;
            $displayTooltips$$inline_5856_layer$$inline_5828_preDatatip$$inline_5858_textStyle$$inline_5855$$.$getLabelInfoForArea$ && ($id$$inline_5837_labelInfo$$inline_5851$$ = $displayTooltips$$inline_5856_layer$$inline_5828_preDatatip$$inline_5858_textStyle$$inline_5855$$.$getLabelInfoForArea$($JSCompiler_StaticMethods_addDataObject$self$$inline_5860_areaId$$inline_5839_displayable$$52_styleId$$));
            var $label$$inline_5852$$ = D.$JSCompiler_alias_VOID$$, $label$$inline_5852$$ = $id$$inline_5837_labelInfo$$inline_5851$$ ? new D.$DvtMapLabel$$($context$$inline_5836$$, $initSelections$$inline_5833_labelText$$inline_5849$$, $id$$inline_5837_labelInfo$$inline_5851$$, $initDrilled$$inline_5834_labelDisplay$$inline_5850$$, $cssTextStyle$$inline_5854_dataLayer$$inline_5829_labelPosition$$inline_5853$$.$_dataLabelLayer$, this.$_tmap$.$_bSupportsVectorEffects$) : "colorStyles" != $styleType$$inline_5841$$ ? 
            new D.$DvtOutputText$$($context$$inline_5836$$, $initSelections$$inline_5833_labelText$$inline_5849$$, 0, 0) : new D.$DvtMapLabel$$($context$$inline_5836$$, $initSelections$$inline_5833_labelText$$inline_5849$$, D.$JSCompiler_alias_NULL$$, $initDrilled$$inline_5834_labelDisplay$$inline_5850$$, $cssTextStyle$$inline_5854_dataLayer$$inline_5829_labelPosition$$inline_5853$$.$_dataLabelLayer$, this.$_tmap$.$_bSupportsVectorEffects$);
            ($cssTextStyle$$inline_5854_dataLayer$$inline_5829_labelPosition$$inline_5853$$ = $datatip$$inline_5857_node$$inline_5831$$.$getAttr$("labelPosition")) && $dataObj$$inline_5840$$.$setLabelPosition$($cssTextStyle$$inline_5854_dataLayer$$inline_5829_labelPosition$$inline_5853$$);
            $cssTextStyle$$inline_5854_dataLayer$$inline_5829_labelPosition$$inline_5853$$ = new D.$DvtCSSStyle$$;
            "colorStyles" == $styleType$$inline_5841$$ ? $cssTextStyle$$inline_5854_dataLayer$$inline_5829_labelPosition$$inline_5853$$.$merge$($displayTooltips$$inline_5856_layer$$inline_5828_preDatatip$$inline_5858_textStyle$$inline_5855$$.$_layerCSSStyle$) : "graduatedSymbol" == $styleType$$inline_5841$$ && $cssTextStyle$$inline_5854_dataLayer$$inline_5829_labelPosition$$inline_5853$$.$merge$(this.$_tmap$.$_markerStyle$);
            ($displayTooltips$$inline_5856_layer$$inline_5828_preDatatip$$inline_5858_textStyle$$inline_5855$$ = $datatip$$inline_5857_node$$inline_5831$$.$getAttr$("labelStyle")) && $cssTextStyle$$inline_5854_dataLayer$$inline_5829_labelPosition$$inline_5853$$.$merge$(new D.$DvtCSSStyle$$($displayTooltips$$inline_5856_layer$$inline_5828_preDatatip$$inline_5858_textStyle$$inline_5855$$));
            $label$$inline_5852$$ instanceof D.$DvtMapLabel$$ && ($cssTextStyle$$inline_5854_dataLayer$$inline_5829_labelPosition$$inline_5853$$.$getStyle$("color") || $cssTextStyle$$inline_5854_dataLayer$$inline_5829_labelPosition$$inline_5853$$.$setStyle$("color", D.$DvtColorUtils$$.$getContrastingTextColor$($dataObj$$inline_5840$$.$getDatatipColor$())));
            $label$$inline_5852$$.$setCSSStyle$($cssTextStyle$$inline_5854_dataLayer$$inline_5829_labelPosition$$inline_5853$$)
          }
          $dataObj$$inline_5840$$.$setLabel$($label$$inline_5852$$);
          $displayTooltips$$inline_5856_layer$$inline_5828_preDatatip$$inline_5858_textStyle$$inline_5855$$ = this.$_tmap$.$_displayTooltips$;
          "none" != $displayTooltips$$inline_5856_layer$$inline_5828_preDatatip$$inline_5858_textStyle$$inline_5855$$ && ($datatip$$inline_5857_node$$inline_5831$$ = $datatip$$inline_5857_node$$inline_5831$$.$getAttr$("shortDesc"), "auto" == $displayTooltips$$inline_5856_layer$$inline_5828_preDatatip$$inline_5858_textStyle$$inline_5855$$ && ($displayTooltips$$inline_5856_layer$$inline_5828_preDatatip$$inline_5858_textStyle$$inline_5855$$ = D.$JSCompiler_alias_VOID$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_5860_areaId$$inline_5839_displayable$$52_styleId$$ && 
          ($displayTooltips$$inline_5856_layer$$inline_5828_preDatatip$$inline_5858_textStyle$$inline_5855$$ = "cities" == $dataObj$$11_layerName$$inline_5830_obj$$inline_5861$$ || this.$_isCustomBasemap$ ? D.$DvtBaseMapManager$$.$getCityLabel$(this.$_tmap$.$_mapName$, $JSCompiler_StaticMethods_addDataObject$self$$inline_5860_areaId$$inline_5839_displayable$$52_styleId$$) : D.$DvtBaseMapManager$$.$getLongAreaLabel$(this.$_tmap$.$_mapName$, $dataObj$$11_layerName$$inline_5830_obj$$inline_5861$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_5860_areaId$$inline_5839_displayable$$52_styleId$$)), 
          $displayTooltips$$inline_5856_layer$$inline_5828_preDatatip$$inline_5858_textStyle$$inline_5855$$ && ($datatip$$inline_5857_node$$inline_5831$$ = $datatip$$inline_5857_node$$inline_5831$$ ? $displayTooltips$$inline_5856_layer$$inline_5828_preDatatip$$inline_5858_textStyle$$inline_5855$$ + ": " + $datatip$$inline_5857_node$$inline_5831$$ : $displayTooltips$$inline_5856_layer$$inline_5828_preDatatip$$inline_5858_textStyle$$inline_5855$$)), $datatip$$inline_5857_node$$inline_5831$$ && $dataObj$$inline_5840$$.$setDatatip$($datatip$$inline_5857_node$$inline_5831$$));
          $dataObj$$11_layerName$$inline_5830_obj$$inline_5861$$ = $dataObj$$inline_5840$$
        }else {
          $dataObj$$11_layerName$$inline_5830_obj$$inline_5861$$ = D.$JSCompiler_alias_NULL$$
        }
      }
      $dataObj$$11_layerName$$inline_5830_obj$$inline_5861$$ && ($JSCompiler_StaticMethods_addDataObject$self$$inline_5860_areaId$$inline_5839_displayable$$52_styleId$$ = $dataObj$$11_layerName$$inline_5830_obj$$inline_5861$$.$getDisplayable$(), $JSCompiler_StaticMethods_addDataObject$self$$inline_5860_areaId$$inline_5839_displayable$$52_styleId$$.$setSelectable$ && $JSCompiler_StaticMethods_addDataObject$self$$inline_5860_areaId$$inline_5839_displayable$$52_styleId$$.$setSelectable$($clientId$$25_dataLayer$$27$$.$isSelectable$() && 
      !($dataObj$$11_layerName$$inline_5830_obj$$inline_5861$$ instanceof D.$DvtMapDataImage$$)), 0 < $spb$$5$$.length && $dataObj$$11_layerName$$inline_5830_obj$$inline_5861$$.$setShowPopupBehaviors$($spb$$5$$), $dataObj$$11_layerName$$inline_5830_obj$$inline_5861$$ instanceof D.$DvtMapDataArea$$ ? (0,D.$JSCompiler_StaticMethods_addAreaObject$$)($clientId$$25_dataLayer$$27$$, $dataObj$$11_layerName$$inline_5830_obj$$inline_5861$$) : ($JSCompiler_StaticMethods_addDataObject$self$$inline_5860_areaId$$inline_5839_displayable$$52_styleId$$ = 
      $clientId$$25_dataLayer$$27$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_5860_areaId$$inline_5839_displayable$$52_styleId$$.$_dataObjs$.push($dataObj$$11_layerName$$inline_5830_obj$$inline_5861$$), $JSCompiler_StaticMethods_addDataObject$self$$inline_5860_areaId$$inline_5839_displayable$$52_styleId$$.$_eventHandler$.$associate$($dataObj$$11_layerName$$inline_5830_obj$$inline_5861$$.$getDisplayable$(), $dataObj$$11_layerName$$inline_5830_obj$$inline_5861$$)))
    }
    $animOnDataChange_isolatedRowKey$$1_selectionMode$$10$$ && this.$_isolatedArea$ && ($clientId$$25_dataLayer$$27$$.$_isolatedAreaRowKey$ = $animOnDataChange_isolatedRowKey$$1_selectionMode$$10$$, (0,D.$JSCompiler_StaticMethods_setIsolatedArea$$)($layer$$7_parentLayerName$$, this.$_isolatedArea$));
    $clientId$$25_dataLayer$$27$$.$isSelectable$() && 0 < $animDur$$3_initSelections$$1$$.length && ($clientId$$25_dataLayer$$27$$.$_initSelections$ = $animDur$$3_initSelections$$1$$);
    0 < $initDrilled$$.length && (this.$_tmap$.$_initDrilled$[$layer$$7_parentLayerName$$.$LayerName$] = [$clientId$$25_dataLayer$$27$$.$getClientId$(), $initDrilled$$]);
    $pzcMatrix$$20$$ || $layer$$7_parentLayerName$$.$getDataLayer$($clientId$$25_dataLayer$$27$$.$getClientId$()) ? $layer$$7_parentLayerName$$.$updateDataLayer$($clientId$$25_dataLayer$$27$$, $pzcMatrix$$20$$, $topLayerName$$2$$) : $layer$$7_parentLayerName$$.$DataLayers$[$clientId$$25_dataLayer$$27$$.$getClientId$()] = $clientId$$25_dataLayer$$27$$
  }
};
D.$JSCompiler_prototypeAlias$$.$ParseLegend$ = function $$JSCompiler_prototypeAlias$$$$ParseLegend$$($xmlNode$$90$$) {
  this.$_tmap$.$_legendXml$ = $xmlNode$$90$$
};
D.$JSCompiler_prototypeAlias$$.$ParseCustomBasemap$ = function $$JSCompiler_prototypeAlias$$$$ParseCustomBasemap$$($childNodes$$33_xmlNode$$92$$) {
  $childNodes$$33_xmlNode$$92$$ = $childNodes$$33_xmlNode$$92$$.$getChildNodes$();
  for(var $node$$229$$, $nodeName$$13$$, $i$$538$$ = 0;$i$$538$$ < $childNodes$$33_xmlNode$$92$$.length;$i$$538$$++) {
    $node$$229$$ = $childNodes$$33_xmlNode$$92$$[$i$$538$$], $nodeName$$13$$ = $node$$229$$.getName(), $nodeName$$13$$ == D.$DvtThematicMapParser$_ELEM_LAYER$$ ? this.$_parseCustomLayer$($node$$229$$) : $nodeName$$13$$ == D.$DvtThematicMapParser$_ELEM_POINTS$$ && this.$_parseCustomPoints$($node$$229$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$_parseCustomLayer$ = function $$JSCompiler_prototypeAlias$$$$_parseCustomLayer$$($layerName$$7_xmlNode$$93$$) {
  var $childNodes$$34$$ = $layerName$$7_xmlNode$$93$$.$getChildNodes$();
  $layerName$$7_xmlNode$$93$$ = $layerName$$7_xmlNode$$93$$.$getAttr$("id");
  for(var $dir$$27_node$$230$$, $image$$11_nodeName$$14$$, $images$$17$$ = [], $i$$539$$ = 0;$i$$539$$ < $childNodes$$34$$.length;$i$$539$$++) {
    if($dir$$27_node$$230$$ = $childNodes$$34$$[$i$$539$$], $image$$11_nodeName$$14$$ = $dir$$27_node$$230$$.getName(), "image" == $image$$11_nodeName$$14$$) {
      $image$$11_nodeName$$14$$ = {};
      $image$$11_nodeName$$14$$.source = $dir$$27_node$$230$$.$getAttr$("source");
      $image$$11_nodeName$$14$$.width = $dir$$27_node$$230$$.$getAttr$("width");
      $image$$11_nodeName$$14$$.height = $dir$$27_node$$230$$.$getAttr$("height");
      var $bidi$$3$$ = $dir$$27_node$$230$$.$getAttr$("bidi");
      $dir$$27_node$$230$$ = $dir$$27_node$$230$$.$getAttr$("dir");
      $image$$11_nodeName$$14$$.dir = "true" == $bidi$$3$$ || "rtl" == $dir$$27_node$$230$$ ? "rtl" : "ltr";
      $images$$17$$.push($image$$11_nodeName$$14$$)
    }
  }
  (0,D.$JSCompiler_StaticMethods_setAreaLayerImage$$)((0,D.$JSCompiler_StaticMethods_getLayer$$)(this.$_tmap$, $layerName$$7_xmlNode$$93$$), $images$$17$$)
};
D.$JSCompiler_prototypeAlias$$.$_parseCustomPoints$ = function $$JSCompiler_prototypeAlias$$$$_parseCustomPoints$$($childNodes$$35_xmlNode$$94$$) {
  $childNodes$$35_xmlNode$$94$$ = $childNodes$$35_xmlNode$$94$$.$getChildNodes$();
  for(var $node$$231$$, $nodeName$$15$$, $points$$42$$ = {}, $labels$$17$$ = {}, $i$$540$$ = 0;$i$$540$$ < $childNodes$$35_xmlNode$$94$$.length;$i$$540$$++) {
    $node$$231$$ = $childNodes$$35_xmlNode$$94$$[$i$$540$$], $nodeName$$15$$ = $node$$231$$.getName(), $nodeName$$15$$ == D.$DvtThematicMapParser$_ELEM_POINT$$ && ($points$$42$$[$node$$231$$.$getAttr$("name")] = [$node$$231$$.$getAttr$("x"), $node$$231$$.$getAttr$("y")], $labels$$17$$[$node$$231$$.$getAttr$("name")] = [D.$JSCompiler_alias_NULL$$, $node$$231$$.$getAttr$("longLabel")])
  }
  D.$DvtBaseMapManager$$.$registerBaseMapLayer$(this.$_tmap$.$_mapName$, "cities", $labels$$17$$, $points$$42$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, 1)
};
D.$JSCompiler_prototypeAlias$$.$_createPathShapes$ = function $$JSCompiler_prototypeAlias$$$$_createPathShapes$$($areaNames$$3$$) {
  var $shapes$$8$$ = {}, $context$$303$$ = this.$_tmap$.$_context$, $area$$26$$;
  for($area$$26$$ in $areaNames$$3$$) {
    $shapes$$8$$[$area$$26$$] = new D.$DvtPath$$($context$$303$$), (0,D.$JSCompiler_StaticMethods__parseDataObjectFill$$)(this, "colorStyles", this.$_areaLayerStyle$, $shapes$$8$$[$area$$26$$])
  }
  return $shapes$$8$$
};
D.$JSCompiler_prototypeAlias$$.$_parseStyles$ = function $$JSCompiler_prototypeAlias$$$$_parseStyles$$($node$$232_styleNodes$$) {
  var $styles$$20$$ = {};
  if($node$$232_styleNodes$$ && 0 < $node$$232_styleNodes$$.length) {
    $node$$232_styleNodes$$ = $node$$232_styleNodes$$[0].$getChildNodes$();
    for(var $i$$541$$ = 0;$i$$541$$ < $node$$232_styleNodes$$.length;$i$$541$$++) {
      var $styleId$$1$$ = $node$$232_styleNodes$$[$i$$541$$].$getAttr$("id");
      $styles$$20$$[$styleId$$1$$] = $node$$232_styleNodes$$[$i$$541$$]
    }
  }
  return $styles$$20$$
};
D.$JSCompiler_prototypeAlias$$.$_parseShowPopupBehavior$ = function $$JSCompiler_prototypeAlias$$$$_parseShowPopupBehavior$$($node$$233$$, $styles$$21$$) {
  for(var $spbNodes$$ = $node$$233$$.getElementsByTagName("spb"), $spbs$$2$$ = [], $i$$542$$ = 0;$i$$542$$ < $spbNodes$$.length;$i$$542$$++) {
    var $alignId$$3$$ = $spbNodes$$[$i$$542$$].$getAttr$("alignId"), $popup$$ = (0,D.$DvtShowPopupBehavior$newInstance$$)($spbNodes$$[$i$$542$$]), $styleId$$2$$;
    for($styleId$$2$$ in $styles$$21$$) {
      if($alignId$$3$$ == $styleId$$2$$) {
        $popup$$ = new D.$DvtShowPopupBehavior$$($popup$$.$getPopupId$(), $popup$$.$getTriggerType$(), D.$JSCompiler_alias_NULL$$, $popup$$.$getAlign$());
        break
      }
    }
    $spbs$$2$$.push($popup$$)
  }
  return $spbs$$2$$
};
D.$JSCompiler_StaticMethods__parseCenter$$ = function $$JSCompiler_StaticMethods__parseCenter$$$($JSCompiler_StaticMethods__parseCenter$self_mapName$$1$$, $layerName$$9_x$$183$$, $node$$235_y$$155$$, $isAreaMarker$$1$$) {
  $JSCompiler_StaticMethods__parseCenter$self_mapName$$1$$ = $JSCompiler_StaticMethods__parseCenter$self_mapName$$1$$.$_tmap$.$_mapName$;
  var $areaId$$8$$ = $node$$235_y$$155$$.$getAttr$("id");
  if($areaId$$8$$) {
    return $isAreaMarker$$1$$ ? D.$DvtBaseMapManager$$.$getAreaCenter$($JSCompiler_StaticMethods__parseCenter$self_mapName$$1$$, $layerName$$9_x$$183$$, $areaId$$8$$) : D.$DvtBaseMapManager$$.$getCityCoordinates$($JSCompiler_StaticMethods__parseCenter$self_mapName$$1$$, $areaId$$8$$)
  }
  $layerName$$9_x$$183$$ = (0,window.parseFloat)($node$$235_y$$155$$.$getAttr$("x"));
  $node$$235_y$$155$$ = (0,window.parseFloat)($node$$235_y$$155$$.$getAttr$("y"));
  return new D.$DvtPoint$$($layerName$$9_x$$183$$, $node$$235_y$$155$$)
};
D.$DvtThematicMapParser$$.prototype.$_parseMapArea$ = function $$DvtThematicMapParser$$$$$_parseMapArea$$($context$$307_path$$43$$, $areaId$$9_cssStyle$$13$$, $dis$$2_hs$$1_layer$$10$$, $discloseStyle_dos$$1_node$$238$$, $dataObj$$15$$) {
  if($dis$$2_hs$$1_layer$$10$$.$AreaShapes$[$areaId$$9_cssStyle$$13$$]) {
    $areaId$$9_cssStyle$$13$$ = new D.$DvtCSSStyle$$($discloseStyle_dos$$1_node$$238$$.$getAttr$(D.$DvtThematicMapParser$_ATTR_INLINE_STYLE$$));
    $context$$307_path$$43$$ = new D.$DvtDrillablePath$$($context$$307_path$$43$$, this.$_tmap$.$_bSupportsVectorEffects$);
    var $selectStyle_sos$$3$$ = $dis$$2_hs$$1_layer$$10$$.$_areaSelectStyle$;
    $discloseStyle_dos$$1_node$$238$$ = $dis$$2_hs$$1_layer$$10$$.$_areaDiscloseStyle$;
    $dis$$2_hs$$1_layer$$10$$ = new D.$DvtSolidStroke$$($dis$$2_hs$$1_layer$$10$$.$_areaHoverStyle$.$getStyle$("border-color"), 1, 2);
    var $sis$$3$$ = new D.$DvtSolidStroke$$($selectStyle_sos$$3$$.$getStyle$("-tr-inner-color"), 1, 1), $selectStyle_sos$$3$$ = new D.$DvtSolidStroke$$($selectStyle_sos$$3$$.$getStyle$("-tr-outer-color"), 1, 4);
    $context$$307_path$$43$$.$setHoverStroke$($dis$$2_hs$$1_layer$$10$$, D.$JSCompiler_alias_NULL$$).$setSelectedStroke$($sis$$3$$, $selectStyle_sos$$3$$);
    $discloseStyle_dos$$1_node$$238$$ && ($dis$$2_hs$$1_layer$$10$$ = new D.$DvtSolidStroke$$($discloseStyle_dos$$1_node$$238$$.$getStyle$("-tr-inner-color"), 1, 2), $discloseStyle_dos$$1_node$$238$$ = new D.$DvtSolidStroke$$($discloseStyle_dos$$1_node$$238$$.$getStyle$("-tr-outer-color"), 1, 4), (0,D.$JSCompiler_StaticMethods_setDisclosedStroke$$)($context$$307_path$$43$$, $dis$$2_hs$$1_layer$$10$$, $discloseStyle_dos$$1_node$$238$$));
    $dataObj$$15$$.$setDisplayable$($context$$307_path$$43$$);
    (0,D.$JSCompiler_StaticMethods__parseDataObjectFill$$)(this, "colorStyles", $areaId$$9_cssStyle$$13$$, $context$$307_path$$43$$, $dataObj$$15$$)
  }
};
D.$DvtThematicMapParser$$.prototype.$_parseMapMarker$ = function $$DvtThematicMapParser$$$$$_parseMapMarker$$($context$$308_cssStyle$$14_inlineStyle$$14$$, $markerDefs_style$$46_sx$$6$$, $center$$15_layerName$$12$$, $node$$239$$, $dataObj$$16$$) {
  var $imgSrc$$1_marker$$21_shapeType$$1$$ = D.$JSCompiler_alias_NULL$$;
  if($center$$15_layerName$$12$$ = (0,D.$JSCompiler_StaticMethods__parseCenter$$)(this, $center$$15_layerName$$12$$, $node$$239$$, "cities" != $center$$15_layerName$$12$$)) {
    if($imgSrc$$1_marker$$21_shapeType$$1$$ = $node$$239$$.$getAttr$("source")) {
      $imgSrc$$1_marker$$21_shapeType$$1$$ = [$imgSrc$$1_marker$$21_shapeType$$1$$, $node$$239$$.$getAttr$("sourceSelected"), $node$$239$$.$getAttr$("sourceHover"), $node$$239$$.$getAttr$("sourceHoverSelected")]
    }else {
      if(($imgSrc$$1_marker$$21_shapeType$$1$$ = $node$$239$$.$getAttr$("shapeType")) || ($imgSrc$$1_marker$$21_shapeType$$1$$ = "c"), !(0,D.$DvtMarker$isBuiltInShape$$)($imgSrc$$1_marker$$21_shapeType$$1$$)) {
        $markerDefs_style$$46_sx$$6$$ = $markerDefs_style$$46_sx$$6$$.getElementsByTagName("markerDef");
        for(var $i$$543_sy$$6$$ = 0;$i$$543_sy$$6$$ < $markerDefs_style$$46_sx$$6$$.length;$i$$543_sy$$6$$++) {
          !this.$_customMarkerDefs$[$imgSrc$$1_marker$$21_shapeType$$1$$] && $markerDefs_style$$46_sx$$6$$[$i$$543_sy$$6$$].$getAttr$("id") == $imgSrc$$1_marker$$21_shapeType$$1$$ && (this.$_customMarkerDefs$[$imgSrc$$1_marker$$21_shapeType$$1$$] = D.$DvtMarkerUtils$$.$createMarkerDef$($context$$308_cssStyle$$14_inlineStyle$$14$$, $markerDefs_style$$46_sx$$6$$[$i$$543_sy$$6$$]))
        }
      }
    }
    $markerDefs_style$$46_sx$$6$$ = $node$$239$$.$getAttr$("scaleX");
    $markerDefs_style$$46_sx$$6$$ = (0,window.isNaN)($markerDefs_style$$46_sx$$6$$) ? 1 : (0,window.parseFloat)($markerDefs_style$$46_sx$$6$$);
    var $i$$543_sy$$6$$ = $node$$239$$.$getAttr$("scaleY"), $i$$543_sy$$6$$ = (0,window.isNaN)($i$$543_sy$$6$$) ? 1 : (0,window.parseFloat)($i$$543_sy$$6$$), $w$$27$$ = $node$$239$$.$getAttr$("width"), $h$$19$$ = $node$$239$$.$getAttr$("height"), $w$$27$$ = !$w$$27$$ || (0,window.isNaN)($w$$27$$) ? 8 : (0,window.parseInt)($w$$27$$), $h$$19$$ = !$h$$19$$ || (0,window.isNaN)($h$$19$$) ? 8 : (0,window.parseInt)($h$$19$$), $imgSrc$$1_marker$$21_shapeType$$1$$ = new D.$DvtMarker$$($context$$308_cssStyle$$14_inlineStyle$$14$$, 
    $imgSrc$$1_marker$$21_shapeType$$1$$, this.$_tmap$.$_skinName$, $center$$15_layerName$$12$$.x - $w$$27$$ * $markerDefs_style$$46_sx$$6$$ / 2, $center$$15_layerName$$12$$.y - $h$$19$$ * $i$$543_sy$$6$$ / 2, $w$$27$$, $h$$19$$, D.$JSCompiler_alias_NULL$$, $markerDefs_style$$46_sx$$6$$, $i$$543_sy$$6$$);
    $dataObj$$16$$.$setCenter$($center$$15_layerName$$12$$);
    $dataObj$$16$$.$setDisplayable$($imgSrc$$1_marker$$21_shapeType$$1$$);
    $dataObj$$16$$.$setSize$($w$$27$$ * $markerDefs_style$$46_sx$$6$$ * $h$$19$$ * $i$$543_sy$$6$$);
    if($context$$308_cssStyle$$14_inlineStyle$$14$$ = $node$$239$$.$getAttr$(D.$DvtThematicMapParser$_ATTR_INLINE_STYLE$$)) {
      $context$$308_cssStyle$$14_inlineStyle$$14$$ = new D.$DvtCSSStyle$$($context$$308_cssStyle$$14_inlineStyle$$14$$), (0,D.$JSCompiler_StaticMethods__parseDataObjectFill$$)(this, "graduatedSymbol", $context$$308_cssStyle$$14_inlineStyle$$14$$, $imgSrc$$1_marker$$21_shapeType$$1$$, $dataObj$$16$$)
    }
  }
};
D.$JSCompiler_StaticMethods__parseDataObjectFill$$ = function $$JSCompiler_StaticMethods__parseDataObjectFill$$$($JSCompiler_StaticMethods__parseDataObjectFill$self_fill$$inline_5957$$, $markerStyle_styleType$$1$$, $cssStyle$$15_stroke$$76_strokeWidth$$9$$, $displayable$$54$$, $dataObj$$17_strokeStyle$$) {
  $cssStyle$$15_stroke$$76_strokeWidth$$9$$ || ($cssStyle$$15_stroke$$76_strokeWidth$$9$$ = {});
  var $pattern$$12$$ = $cssStyle$$15_stroke$$76_strokeWidth$$9$$.$getStyle$("pattern"), $patternColor$$ = $cssStyle$$15_stroke$$76_strokeWidth$$9$$.$getStyle$("pattern-color"), $backgroundColor$$16$$ = $cssStyle$$15_stroke$$76_strokeWidth$$9$$.$getStyle$("background-color"), $borderColor$$29_gradient$$11$$ = $JSCompiler_StaticMethods__parseDataObjectFill$self_fill$$inline_5957$$.$_isMobile$ || "alta" == $JSCompiler_StaticMethods__parseDataObjectFill$self_fill$$inline_5957$$.$_tmap$.$_skinName$ ? 
  D.$JSCompiler_alias_FALSE$$ : $cssStyle$$15_stroke$$76_strokeWidth$$9$$.$getStyle$("gradient");
  $backgroundColor$$16$$ && $dataObj$$17_strokeStyle$$ ? $dataObj$$17_strokeStyle$$.$_categories$.push($backgroundColor$$16$$) : $patternColor$$ && $dataObj$$17_strokeStyle$$ && $dataObj$$17_strokeStyle$$.$_categories$.push($patternColor$$);
  var $opacity$$4$$;
  $opacity$$4$$ = $cssStyle$$15_stroke$$76_strokeWidth$$9$$.$getStyle$("opacity") ? (0,window.parseFloat)($cssStyle$$15_stroke$$76_strokeWidth$$9$$.$getStyle$("opacity")) : 1;
  $dataObj$$17_strokeStyle$$ && $dataObj$$17_strokeStyle$$.$setDatatipColor$($backgroundColor$$16$$ ? $backgroundColor$$16$$ : $patternColor$$);
  if("graduatedSymbol" == $markerStyle_styleType$$1$$ && (0,D.$DvtMarker$isBuiltInShape$$)($displayable$$54$$.$getType$())) {
    $markerStyle_styleType$$1$$ = $JSCompiler_StaticMethods__parseDataObjectFill$self_fill$$inline_5957$$.$_tmap$.$_markerStyle$;
    $dataObj$$17_strokeStyle$$ = $cssStyle$$15_stroke$$76_strokeWidth$$9$$.$getStyle$("border-style") ? $cssStyle$$15_stroke$$76_strokeWidth$$9$$.$getStyle$("border-style") : $markerStyle_styleType$$1$$.$getStyle$("border-style");
    if("none" != $dataObj$$17_strokeStyle$$) {
      var $strokeColor$$5$$ = $cssStyle$$15_stroke$$76_strokeWidth$$9$$.$getStyle$("border-color") ? $cssStyle$$15_stroke$$76_strokeWidth$$9$$.$getStyle$("border-color") : $markerStyle_styleType$$1$$.$getStyle$("border-color");
      ($cssStyle$$15_stroke$$76_strokeWidth$$9$$ = $cssStyle$$15_stroke$$76_strokeWidth$$9$$.$getStyle$("border-width") ? $cssStyle$$15_stroke$$76_strokeWidth$$9$$.$getStyle$("border-width") : $markerStyle_styleType$$1$$.$getStyle$("border-width")) && ($cssStyle$$15_stroke$$76_strokeWidth$$9$$ = (0,window.parseFloat)($cssStyle$$15_stroke$$76_strokeWidth$$9$$.substring(0, $cssStyle$$15_stroke$$76_strokeWidth$$9$$.indexOf("px"))));
      $cssStyle$$15_stroke$$76_strokeWidth$$9$$ = new D.$DvtSolidStroke$$($strokeColor$$5$$, 1, $cssStyle$$15_stroke$$76_strokeWidth$$9$$);
      $cssStyle$$15_stroke$$76_strokeWidth$$9$$.$setType$((0,D.$DvtStroke$convertTypeString$$)($dataObj$$17_strokeStyle$$));
      $JSCompiler_StaticMethods__parseDataObjectFill$self_fill$$inline_5957$$.$_tmap$.$_isMarkerZoomBehaviorFixed$ || ($cssStyle$$15_stroke$$76_strokeWidth$$9$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$);
      $displayable$$54$$.$setStroke$($cssStyle$$15_stroke$$76_strokeWidth$$9$$)
    }
    "true" == $borderColor$$29_gradient$$11$$ && $backgroundColor$$16$$ ? $displayable$$54$$.$setFill$(new D.$DvtMarkerGradient$$.$createMarkerGradient$($backgroundColor$$16$$, $displayable$$54$$, $opacity$$4$$)) : $pattern$$12$$ ? $displayable$$54$$.$setFill$(new D.$DvtPatternFill$$($pattern$$12$$, $patternColor$$, $backgroundColor$$16$$)) : $backgroundColor$$16$$ ? $displayable$$54$$.$setSolidFill$($backgroundColor$$16$$, $opacity$$4$$) : $displayable$$54$$.$setSolidFill$($markerStyle_styleType$$1$$.$getStyle$("background-color"), 
    $opacity$$4$$)
  }else {
    if("colorStyles" == $markerStyle_styleType$$1$$) {
      if(($borderColor$$29_gradient$$11$$ = $cssStyle$$15_stroke$$76_strokeWidth$$9$$.$getStyle$("border-color")) && "transparent" != $borderColor$$29_gradient$$11$$) {
        $cssStyle$$15_stroke$$76_strokeWidth$$9$$ = new D.$DvtSolidStroke$$($borderColor$$29_gradient$$11$$), $JSCompiler_StaticMethods__parseDataObjectFill$self_fill$$inline_5957$$.$_tmap$.$_bSupportsVectorEffects$ && ($cssStyle$$15_stroke$$76_strokeWidth$$9$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), $displayable$$54$$.$setStroke$($cssStyle$$15_stroke$$76_strokeWidth$$9$$)
      }
      $pattern$$12$$ ? ($JSCompiler_StaticMethods__parseDataObjectFill$self_fill$$inline_5957$$ = new D.$DvtPatternFill$$($pattern$$12$$, $patternColor$$, $backgroundColor$$16$$), $displayable$$54$$.$_ptFill$ = $JSCompiler_StaticMethods__parseDataObjectFill$self_fill$$inline_5957$$) : $backgroundColor$$16$$ && "transparent" != $backgroundColor$$16$$ ? $displayable$$54$$.$setSolidFill$($backgroundColor$$16$$, $opacity$$4$$) : $displayable$$54$$.$setFill$(D.$JSCompiler_alias_NULL$$)
    }
  }
};
D.$DvtThematicMapJsonParser$$ = function $$DvtThematicMapJsonParser$$$($tmap$$6$$) {
  this.Init($tmap$$6$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapJsonParser$$, D.$DvtObj$$, "DvtThematicMapJsonParser");
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMapJsonParser$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$7$$) {
  this.$_tmap$ = $tmap$$7$$;
  this.$_isCustomBasemap$ = D.$JSCompiler_alias_FALSE$$;
  this.$_areaLayerStyle$ = D.$JSCompiler_alias_NULL$$;
  this.$_isMobile$ = (0,D.$DvtAgent$isTouchDevice$$)();
  this.$_customAreaLayerImages$ = {}
};
D.$JSCompiler_prototypeAlias$$.parse = function $$JSCompiler_prototypeAlias$$$parse$($options$$176$$) {
  $options$$176$$.skin = "alta";
  this.$ParseMapProperties$($options$$176$$);
  var $areaLayers$$inline_5604_styles$$inline_5601_xmlNode$$83$$ = $options$$176$$.styleDefaults;
  this.$_areaLayerStyle$ = new D.$DvtCSSStyle$$($areaLayers$$inline_5604_styles$$inline_5601_xmlNode$$83$$.areaStyle + $areaLayers$$inline_5604_styles$$inline_5601_xmlNode$$83$$.labelStyle);
  this.$_tmap$.$_styleDefaults$ = $areaLayers$$inline_5604_styles$$inline_5601_xmlNode$$83$$;
  this.$_isCustomBasemap$ && ($areaLayers$$inline_5604_styles$$inline_5601_xmlNode$$83$$ = (new D.$DvtXmlParser$$).parse($options$$176$$.sourceXml)) && this.$ParseCustomBasemap$($areaLayers$$inline_5604_styles$$inline_5601_xmlNode$$83$$);
  for(var $areaLayers$$inline_5604_styles$$inline_5601_xmlNode$$83$$ = $options$$176$$.areaLayers, $basemap$$inline_5605$$ = this.$_tmap$.$_mapName$, $i$$inline_5606$$ = 0;$i$$inline_5606$$ < $areaLayers$$inline_5604_styles$$inline_5601_xmlNode$$83$$.length;$i$$inline_5606$$++) {
    var $areaLayer$$inline_5607$$ = D.$DvtJSONUtils$$.$merge$($areaLayers$$inline_5604_styles$$inline_5601_xmlNode$$83$$[$i$$inline_5606$$], D.$DvtThematicMapDefaults$DEFAULT_AREA_LAYER$$), $children$$inline_10492_layer$$inline_5608$$ = $areaLayer$$inline_5607$$.layer;
    if($children$$inline_10492_layer$$inline_5608$$) {
      var $mapLayer$$inline_5609$$;
      $areaLayer$$inline_5607$$.areaStyle && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_areaLayerStyle$, $areaLayer$$inline_5607$$.areaStyle);
      if(this.$_isCustomBasemap$) {
        $mapLayer$$inline_5609$$ = new D.$DvtMapCustomAreaLayer$$(this.$_tmap$, $children$$inline_10492_layer$$inline_5608$$, D.$JSCompiler_alias_NULL$$, $areaLayer$$inline_5607$$.labelDisplay, $areaLayer$$inline_5607$$.labelType, this.$_tmap$.$_eventHandler$), (0,D.$JSCompiler_StaticMethods_setAreaLayerImage$$)($mapLayer$$inline_5609$$, this.$_customAreaLayerImages$[$children$$inline_10492_layer$$inline_5608$$])
      }else {
        $mapLayer$$inline_5609$$ = new D.$DvtMapAreaLayer$$(this.$_tmap$, $children$$inline_10492_layer$$inline_5608$$, D.$JSCompiler_alias_NULL$$, $areaLayer$$inline_5607$$.labelDisplay, $areaLayer$$inline_5607$$.labelType, this.$_tmap$.$_eventHandler$);
        var $areaNames$$inline_5610_values$$inline_10489$$ = D.$DvtBaseMapManager$$.$getAreaNames$($basemap$$inline_5605$$, $children$$inline_10492_layer$$inline_5608$$), $shapes$$inline_10486$$ = this.$_createPathShapes$($areaNames$$inline_5610_values$$inline_10489$$);
        $mapLayer$$inline_5609$$.$AreaShapes$ = $shapes$$inline_10486$$;
        (0,D.$JSCompiler_StaticMethods_setAreaNames$$)($mapLayer$$inline_5609$$, $areaNames$$inline_5610_values$$inline_10489$$);
        $areaNames$$inline_5610_values$$inline_10489$$ = D.$DvtBaseMapManager$$.$getAreaLabelInfo$($basemap$$inline_5605$$, $children$$inline_10492_layer$$inline_5608$$);
        $mapLayer$$inline_5609$$.$_labelInfo$ = $areaNames$$inline_5610_values$$inline_10489$$;
        $children$$inline_10492_layer$$inline_5608$$ = D.$DvtBaseMapManager$$.$getChildrenForLayerAreas$(this.$_tmap$.$_mapName$, $children$$inline_10492_layer$$inline_5608$$);
        $mapLayer$$inline_5609$$.$_children$ = $children$$inline_10492_layer$$inline_5608$$
      }
      $mapLayer$$inline_5609$$.$_layerCSSStyle$ = this.$_areaLayerStyle$;
      $mapLayer$$inline_5609$$.$setAnimation$("auto" == $areaLayer$$inline_5607$$.animationOnLayerChange ? "alphaFade" : $areaLayer$$inline_5607$$.animationOnLayerChange);
      $mapLayer$$inline_5609$$.$setAnimationDuration$(this.$_tmap$.$getAnimationDuration$());
      this.$_tmap$.$_layers$.push($mapLayer$$inline_5609$$);
      $areaLayer$$inline_5607$$.areaDataLayer && this.$ParseDataLayers$([$areaLayer$$inline_5607$$.areaDataLayer], $mapLayer$$inline_5609$$, D.$JSCompiler_alias_TRUE$$);
      $areaLayer$$inline_5607$$.pointDataLayers && this.$ParseDataLayers$($areaLayer$$inline_5607$$.pointDataLayers, $mapLayer$$inline_5609$$, D.$JSCompiler_alias_FALSE$$)
    }
  }
  this.$ParseDataLayers$($options$$176$$.pointDataLayers, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$ParseMapProperties$ = function $$JSCompiler_prototypeAlias$$$$ParseMapProperties$$($options$$177$$) {
  (0,D.$JSCompiler_StaticMethods_parseComponentJson$$)(this.$_tmap$, $options$$177$$);
  this.$_tmap$.$setAnimationDuration$($options$$177$$.animationDuration / 1E3);
  this.$_tmap$.$_animationOnDisplay$ = "auto" == $options$$177$$.animationOnDisplay ? "alphaFade" : $options$$177$$.animationOnDisplay;
  this.$_tmap$.$_animationOnMapChange$ = "auto" == $options$$177$$.animationOnMapChange ? "alphaFade" : $options$$177$$.animationOnMapChange;
  this.$_isCustomBasemap$ = $options$$177$$.source != D.$JSCompiler_alias_NULL$$;
  var $JSCompiler_StaticMethods_setMapName$self$$inline_10500_tooltipDisplay$$ = this.$_tmap$, $attr$$inline_10501$$ = this.$_isCustomBasemap$ ? "$" + $options$$177$$.basemap : $options$$177$$.basemap;
  $JSCompiler_StaticMethods_setMapName$self$$inline_10500_tooltipDisplay$$.$_bBaseMapChanged$ = $JSCompiler_StaticMethods_setMapName$self$$inline_10500_tooltipDisplay$$.$_mapName$ && $JSCompiler_StaticMethods_setMapName$self$$inline_10500_tooltipDisplay$$.$_mapName$ != $attr$$inline_10501$$;
  $JSCompiler_StaticMethods_setMapName$self$$inline_10500_tooltipDisplay$$.$_mapName$ = $attr$$inline_10501$$;
  this.$_tmap$.$_controlPanelBehavior$ = $options$$177$$.controlPanelBehavior;
  this.$_tmap$.$setDrillMode$("none");
  this.$_tmap$.$_initialZooming$ = "auto" == $options$$177$$.initialZooming;
  this.$_tmap$.$_isMarkerZoomBehaviorFixed$ = "fixed" == $options$$177$$.markerZoomBehavior;
  this.$_tmap$.$_panning$ = "auto" == $options$$177$$.panning;
  $JSCompiler_StaticMethods_setMapName$self$$inline_10500_tooltipDisplay$$ = $options$$177$$.tooltipDisplay;
  "shortDesc" == $JSCompiler_StaticMethods_setMapName$self$$inline_10500_tooltipDisplay$$ ? $JSCompiler_StaticMethods_setMapName$self$$inline_10500_tooltipDisplay$$ = "shortDescOnly" : "labelAndShortDesc" == $JSCompiler_StaticMethods_setMapName$self$$inline_10500_tooltipDisplay$$ && ($JSCompiler_StaticMethods_setMapName$self$$inline_10500_tooltipDisplay$$ = "auto");
  this.$_tmap$.$_displayTooltips$ = $JSCompiler_StaticMethods_setMapName$self$$inline_10500_tooltipDisplay$$;
  this.$_tmap$.$_zooming$ = "auto" == $options$$177$$.zooming
};
D.$JSCompiler_prototypeAlias$$.$ParseDataLayers$ = function $$JSCompiler_prototypeAlias$$$$ParseDataLayers$$($dataLayers$$6$$, $parentLayer$$, $isAreaDataLayer$$) {
  if($dataLayers$$6$$) {
    for(var $i$$513$$ = 0;$i$$513$$ < $dataLayers$$6$$.length;$i$$513$$++) {
      var $dataLayerOptions_initSelections$$ = D.$DvtJSONUtils$$.$merge$($dataLayers$$6$$[$i$$513$$], D.$DvtThematicMapDefaults$DEFAULT_DATA_LAYER$$);
      $parentLayer$$ ? $parentLayer$$ instanceof D.$DvtMapAreaLayer$$ && (0,D.$JSCompiler_StaticMethods_resetRenderedAreas$$)($parentLayer$$) : ($parentLayer$$ = new D.$DvtMapLayer$$(this.$_tmap$, this.$_tmap$.$_eventHandler$), this.$_tmap$.$_layers$.push($parentLayer$$));
      var $dataLayer$$11$$ = new D.$DvtMapDataLayer$$(this.$_tmap$, $parentLayer$$, $dataLayerOptions_initSelections$$.id, this.$_tmap$.$_eventHandler$), $initDisclosed_selectionMode$$9$$ = $dataLayerOptions_initSelections$$.selectionMode;
      "single" == $initDisclosed_selectionMode$$9$$ ? $dataLayer$$11$$.$setSelectionMode$("s") : "multiple" == $initDisclosed_selectionMode$$9$$ && $dataLayer$$11$$.$setSelectionMode$("m");
      $dataLayer$$11$$.$setAnimation$("auto" == $dataLayerOptions_initSelections$$.animationOnDataChange ? "alphaFade" : $dataLayerOptions_initSelections$$.animationOnDataChange);
      $dataLayer$$11$$.$setAnimationDuration$(this.$_tmap$.$getAnimationDuration$());
      var $isolatedRowKey$$ = D.$JSCompiler_alias_NULL$$;
      $parentLayer$$ instanceof D.$DvtMapAreaLayer$$ && ($isolatedRowKey$$ = $dataLayerOptions_initSelections$$.isolatedItem);
      var $disclosedItems_markers$$10$$ = $dataLayerOptions_initSelections$$.disclosedItems, $initDisclosed_selectionMode$$9$$ = [], $isolatedAreaId$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_5648_areas$$6$$ = $dataLayerOptions_initSelections$$.areas;
      if($JSCompiler_StaticMethods_addDataObject$self$$inline_5648_areas$$6$$) {
        for(var $j$$86$$ = 0;$j$$86$$ < $JSCompiler_StaticMethods_addDataObject$self$$inline_5648_areas$$6$$.length;$j$$86$$++) {
          var $areaId_dataObj$$4_obj$$inline_5649$$ = $JSCompiler_StaticMethods_addDataObject$self$$inline_5648_areas$$6$$[$j$$86$$].location;
          if($isolatedRowKey$$) {
            if($isolatedRowKey$$ != $JSCompiler_StaticMethods_addDataObject$self$$inline_5648_areas$$6$$[$j$$86$$].id) {
              continue
            }else {
              $isolatedAreaId$$ = $areaId_dataObj$$4_obj$$inline_5649$$
            }
          }
          $disclosedItems_markers$$10$$ && -1 != $disclosedItems_markers$$10$$.indexOf($JSCompiler_StaticMethods_addDataObject$self$$inline_5648_areas$$6$$[$j$$86$$].id) && $initDisclosed_selectionMode$$9$$.push($areaId_dataObj$$4_obj$$inline_5649$$);
          if($areaId_dataObj$$4_obj$$inline_5649$$ = this.$_parseMapArea$($parentLayer$$, $dataLayer$$11$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_5648_areas$$6$$[$j$$86$$])) {
            if($dataLayer$$11$$.$isSelectable$()) {
              var $displayable$$40$$ = $areaId_dataObj$$4_obj$$inline_5649$$.$getDisplayable$();
              $displayable$$40$$.$setSelectable$(D.$JSCompiler_alias_TRUE$$)
            }
            (0,D.$JSCompiler_StaticMethods_addAreaObject$$)($dataLayer$$11$$, $areaId_dataObj$$4_obj$$inline_5649$$)
          }
        }
      }
      if($disclosedItems_markers$$10$$ = $dataLayerOptions_initSelections$$.markers) {
        for($j$$86$$ = 0;$j$$86$$ < $disclosedItems_markers$$10$$.length;$j$$86$$++) {
          $areaId_dataObj$$4_obj$$inline_5649$$ = $disclosedItems_markers$$10$$[$j$$86$$].location;
          if($isAreaDataLayer$$ && $isolatedRowKey$$) {
            if($isolatedRowKey$$ != $disclosedItems_markers$$10$$[$j$$86$$].id) {
              continue
            }else {
              $isolatedAreaId$$ = $areaId_dataObj$$4_obj$$inline_5649$$
            }
          }
          if($areaId_dataObj$$4_obj$$inline_5649$$ = this.$_parseMapMarker$($parentLayer$$, $dataLayer$$11$$, $disclosedItems_markers$$10$$[$j$$86$$], $isAreaDataLayer$$)) {
            $dataLayer$$11$$.$isSelectable$() && ($displayable$$40$$ = $areaId_dataObj$$4_obj$$inline_5649$$.$getDisplayable$(), $displayable$$40$$.$setSelectable$(D.$JSCompiler_alias_TRUE$$)), $JSCompiler_StaticMethods_addDataObject$self$$inline_5648_areas$$6$$ = $dataLayer$$11$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_5648_areas$$6$$.$_dataObjs$.push($areaId_dataObj$$4_obj$$inline_5649$$), $JSCompiler_StaticMethods_addDataObject$self$$inline_5648_areas$$6$$.$_eventHandler$.$associate$($areaId_dataObj$$4_obj$$inline_5649$$.$getDisplayable$(), 
            $areaId_dataObj$$4_obj$$inline_5649$$)
          }
        }
      }
      $isolatedAreaId$$ && ($dataLayer$$11$$.$_isolatedAreaRowKey$ = $isolatedRowKey$$, (0,D.$JSCompiler_StaticMethods_setIsolatedArea$$)($parentLayer$$, $isolatedAreaId$$));
      if(($dataLayerOptions_initSelections$$ = $dataLayerOptions_initSelections$$.selection) && 0 < $dataLayerOptions_initSelections$$.length) {
        $dataLayer$$11$$.$_initSelections$ = $dataLayerOptions_initSelections$$
      }
      $initDisclosed_selectionMode$$9$$ && 0 < $initDisclosed_selectionMode$$9$$.length && (this.$_tmap$.$_initDrilled$[$parentLayer$$.$LayerName$] = [$dataLayer$$11$$.$getClientId$(), $initDisclosed_selectionMode$$9$$]);
      $parentLayer$$.$DataLayers$[$dataLayer$$11$$.$getClientId$()] = $dataLayer$$11$$
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$ParseCustomBasemap$ = function $$JSCompiler_prototypeAlias$$$$ParseCustomBasemap$$($childNodes$$27_xmlNode$$84$$) {
  $childNodes$$27_xmlNode$$84$$ = $childNodes$$27_xmlNode$$84$$.$getChildNodes$();
  for(var $node$$223$$, $nodeName$$7$$, $i$$514$$ = 0;$i$$514$$ < $childNodes$$27_xmlNode$$84$$.length;$i$$514$$++) {
    $node$$223$$ = $childNodes$$27_xmlNode$$84$$[$i$$514$$], $nodeName$$7$$ = $node$$223$$.getName(), $nodeName$$7$$ == D.$DvtThematicMapParser$_ELEM_LAYER$$ ? this.$_parseCustomLayer$($node$$223$$) : $nodeName$$7$$ == D.$DvtThematicMapParser$_ELEM_POINTS$$ && this.$_parseCustomPoints$($node$$223$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$_parseCustomLayer$ = function $$JSCompiler_prototypeAlias$$$$_parseCustomLayer$$($layerName$$4_xmlNode$$85$$) {
  var $childNodes$$28$$ = $layerName$$4_xmlNode$$85$$.$getChildNodes$();
  $layerName$$4_xmlNode$$85$$ = $layerName$$4_xmlNode$$85$$.$getAttr$("id");
  for(var $dir$$26_node$$224$$, $image$$10_nodeName$$8$$, $images$$16$$ = [], $i$$515$$ = 0;$i$$515$$ < $childNodes$$28$$.length;$i$$515$$++) {
    if($dir$$26_node$$224$$ = $childNodes$$28$$[$i$$515$$], $image$$10_nodeName$$8$$ = $dir$$26_node$$224$$.getName(), "image" == $image$$10_nodeName$$8$$) {
      $image$$10_nodeName$$8$$ = {};
      $image$$10_nodeName$$8$$.source = $dir$$26_node$$224$$.$getAttr$("source");
      $image$$10_nodeName$$8$$.width = $dir$$26_node$$224$$.$getAttr$("width");
      $image$$10_nodeName$$8$$.height = $dir$$26_node$$224$$.$getAttr$("height");
      var $bidi$$2$$ = $dir$$26_node$$224$$.$getAttr$("bidi");
      $dir$$26_node$$224$$ = $dir$$26_node$$224$$.$getAttr$("dir");
      $image$$10_nodeName$$8$$.dir = "true" == $bidi$$2$$ || "rtl" == $dir$$26_node$$224$$ ? "rtl" : "ltr";
      $images$$16$$.push($image$$10_nodeName$$8$$)
    }
  }
  this.$_customAreaLayerImages$[$layerName$$4_xmlNode$$85$$] = $images$$16$$
};
D.$JSCompiler_prototypeAlias$$.$_parseCustomPoints$ = function $$JSCompiler_prototypeAlias$$$$_parseCustomPoints$$($childNodes$$29_xmlNode$$86$$) {
  $childNodes$$29_xmlNode$$86$$ = $childNodes$$29_xmlNode$$86$$.$getChildNodes$();
  for(var $node$$225$$, $nodeName$$9$$, $points$$41$$ = {}, $labels$$16$$ = {}, $i$$516$$ = 0;$i$$516$$ < $childNodes$$29_xmlNode$$86$$.length;$i$$516$$++) {
    $node$$225$$ = $childNodes$$29_xmlNode$$86$$[$i$$516$$], $nodeName$$9$$ = $node$$225$$.getName(), $nodeName$$9$$ == D.$DvtThematicMapParser$_ELEM_POINT$$ && ($points$$41$$[$node$$225$$.$getAttr$("name")] = [$node$$225$$.$getAttr$("x"), $node$$225$$.$getAttr$("y")], $labels$$16$$[$node$$225$$.$getAttr$("name")] = [D.$JSCompiler_alias_NULL$$, $node$$225$$.$getAttr$("longLabel")])
  }
  D.$DvtBaseMapManager$$.$registerBaseMapLayer$(this.$_tmap$.$_mapName$, "cities", $labels$$16$$, $points$$41$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, 1)
};
D.$JSCompiler_prototypeAlias$$.$_createPathShapes$ = function $$JSCompiler_prototypeAlias$$$$_createPathShapes$$($areaNames$$1$$) {
  var $shapes$$7$$ = {}, $context$$285$$ = this.$_tmap$.$_context$, $area$$24$$;
  for($area$$24$$ in $areaNames$$1$$) {
    $shapes$$7$$[$area$$24$$] = new D.$DvtPath$$($context$$285$$), (0,D.$JSCompiler_StaticMethods__styleDisplayable$$)(this, this.$_areaLayerStyle$, $shapes$$7$$[$area$$24$$])
  }
  return $shapes$$7$$
};
D.$JSCompiler_prototypeAlias$$.$_parseMapArea$ = function $$JSCompiler_prototypeAlias$$$$_parseMapArea$$($layer$$1$$, $dataLayer$$12$$, $data$$67$$) {
  var $areaId$$1_dataObj$$5$$ = $data$$67$$.location;
  if($layer$$1$$.$AreaShapes$[$areaId$$1_dataObj$$5$$] && $data$$67$$.color) {
    $layer$$1$$.$_renderArea$[$areaId$$1_dataObj$$5$$] = D.$JSCompiler_alias_FALSE$$;
    var $context$$286$$ = this.$_tmap$.$_context$, $path$$42$$ = new D.$DvtDrillablePath$$($context$$286$$, this.$_tmap$.$_bSupportsVectorEffects$);
    $data$$67$$ = D.$DvtJSONUtils$$.$merge$($data$$67$$, this.$_tmap$.$_styleDefaults$.dataAreaDefaults);
    $data$$67$$.labelStyle || ($data$$67$$.labelStyle = this.$_tmap$.$_styleDefaults$.labelStyle);
    var $dis$$1_hs$$ = new D.$DvtSolidStroke$$($data$$67$$.hoverColor, 1, 2), $dos_sis$$2$$ = new D.$DvtSolidStroke$$($data$$67$$.selectedInnerColor, 1, 1), $sos$$2$$ = new D.$DvtSolidStroke$$($data$$67$$.selectedOuterColor, 1, 4);
    $path$$42$$.$setHoverStroke$($dis$$1_hs$$, D.$JSCompiler_alias_NULL$$).$setSelectedStroke$($dos_sis$$2$$, $sos$$2$$);
    $dis$$1_hs$$ = new D.$DvtSolidStroke$$($data$$67$$.drilledInnerColor, 1, 2);
    $dos_sis$$2$$ = new D.$DvtSolidStroke$$($data$$67$$.drilledOuterColor, 1, 4);
    (0,D.$JSCompiler_StaticMethods_setDisclosedStroke$$)($path$$42$$, $dis$$1_hs$$, $dos_sis$$2$$);
    $areaId$$1_dataObj$$5$$ = new D.$DvtMapDataArea$$($context$$286$$, $dataLayer$$12$$, $data$$67$$.id, $data$$67$$.clientId, $areaId$$1_dataObj$$5$$);
    $areaId$$1_dataObj$$5$$.$setDisplayable$($path$$42$$);
    (0,D.$JSCompiler_StaticMethods__parseCommonData$$)(this, $layer$$1$$, $dataLayer$$12$$, $data$$67$$, $path$$42$$, $areaId$$1_dataObj$$5$$, D.$JSCompiler_alias_TRUE$$);
    return $areaId$$1_dataObj$$5$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$_parseMapMarker$ = function $$JSCompiler_prototypeAlias$$$$_parseMapMarker$$($layer$$2$$, $dataLayer$$13$$, $data$$68$$, $isParentAreaDataLayer$$) {
  var $center$$11_data$$inline_5673_rotation$$9$$;
  $center$$11_data$$inline_5673_rotation$$9$$ = $data$$68$$;
  var $context$$287_mapName$$inline_5675_radianRot$$ = this.$_tmap$.$_mapName$, $areaId$$inline_5676_imgSrc_shapeType$$ = $center$$11_data$$inline_5673_rotation$$9$$.location;
  $center$$11_data$$inline_5673_rotation$$9$$ = $areaId$$inline_5676_imgSrc_shapeType$$ ? $isParentAreaDataLayer$$ ? D.$DvtBaseMapManager$$.$getAreaCenter$($context$$287_mapName$$inline_5675_radianRot$$, $layer$$2$$.$LayerName$, $areaId$$inline_5676_imgSrc_shapeType$$) : D.$DvtBaseMapManager$$.$getCityCoordinates$($context$$287_mapName$$inline_5675_radianRot$$, $areaId$$inline_5676_imgSrc_shapeType$$) : D.$DvtThematicMapProjections$$.$project$($center$$11_data$$inline_5673_rotation$$9$$.x, $center$$11_data$$inline_5673_rotation$$9$$.y, 
  this.$_tmap$.$_mapName$);
  if(!$center$$11_data$$inline_5673_rotation$$9$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $context$$287_mapName$$inline_5675_radianRot$$ = this.$_tmap$.$_context$;
  window.dataObj = new D.$DvtMapDataMarker$$($context$$287_mapName$$inline_5675_radianRot$$, $dataLayer$$13$$, $data$$68$$.id, $data$$68$$.clientId, $data$$68$$.location);
  window.dataObj.$setCenter$($center$$11_data$$inline_5673_rotation$$9$$);
  $data$$68$$ = D.$DvtJSONUtils$$.$merge$($data$$68$$, this.$_tmap$.$_styleDefaults$.dataMarkerDefaults);
  ($areaId$$inline_5676_imgSrc_shapeType$$ = $data$$68$$.source) ? $areaId$$inline_5676_imgSrc_shapeType$$ = [$areaId$$inline_5676_imgSrc_shapeType$$, $data$$68$$.sourceSelected, $data$$68$$.sourceHover, $data$$68$$.sourceHoverSelected] : ($areaId$$inline_5676_imgSrc_shapeType$$ = $data$$68$$.shape) || ($areaId$$inline_5676_imgSrc_shapeType$$ = "c");
  var $sx$$5$$ = $data$$68$$.scaleX;
  (0,window.isNaN)($sx$$5$$) && ($sx$$5$$ = 1);
  var $sy$$5$$ = $data$$68$$.scaleY;
  (0,window.isNaN)($sy$$5$$) && ($sy$$5$$ = 1);
  var $w$$26$$ = $data$$68$$.width, $h$$18$$ = $data$$68$$.height;
  if(!$w$$26$$ || (0,window.isNaN)($w$$26$$)) {
    $w$$26$$ = 8
  }
  if(!$h$$18$$ || (0,window.isNaN)($h$$18$$)) {
    $h$$18$$ = 8
  }
  window.marker = new D.$DvtMarker$$($context$$287_mapName$$inline_5675_radianRot$$, $areaId$$inline_5676_imgSrc_shapeType$$, "alta", $center$$11_data$$inline_5673_rotation$$9$$.x - $w$$26$$ * $sx$$5$$ / 2, $center$$11_data$$inline_5673_rotation$$9$$.y - $h$$18$$ * $sy$$5$$ / 2, $w$$26$$, $h$$18$$, D.$JSCompiler_alias_NULL$$, $sx$$5$$, $sy$$5$$);
  window.dataObj.$setDisplayable$(window.marker);
  window.dataObj.$setSize$($w$$26$$ * $sx$$5$$ * $h$$18$$ * $sy$$5$$);
  window.dataObj.$setLabelPosition$($data$$68$$.labelPosition);
  if($center$$11_data$$inline_5673_rotation$$9$$ = $data$$68$$.rotation) {
    $context$$287_mapName$$inline_5675_radianRot$$ = $center$$11_data$$inline_5673_rotation$$9$$ * window.Math.PI / 180, window.marker.$setRotation$($context$$287_mapName$$inline_5675_radianRot$$), $center$$11_data$$inline_5673_rotation$$9$$ = window.dataObj.$getCenter$(), (0,D.$JSCompiler_StaticMethods_setTranslate$$)(window.marker, $center$$11_data$$inline_5673_rotation$$9$$.x - ($center$$11_data$$inline_5673_rotation$$9$$.x * window.Math.cos($context$$287_mapName$$inline_5675_radianRot$$) - $center$$11_data$$inline_5673_rotation$$9$$.y * 
    window.Math.sin($context$$287_mapName$$inline_5675_radianRot$$)), $center$$11_data$$inline_5673_rotation$$9$$.y - ($center$$11_data$$inline_5673_rotation$$9$$.x * window.Math.sin($context$$287_mapName$$inline_5675_radianRot$$) + $center$$11_data$$inline_5673_rotation$$9$$.y * window.Math.cos($context$$287_mapName$$inline_5675_radianRot$$)))
  }
  (0,D.$JSCompiler_StaticMethods__parseCommonData$$)(this, $layer$$2$$, $dataLayer$$13$$, $data$$68$$, window.marker, window.dataObj, $isParentAreaDataLayer$$);
  return window.dataObj
};
D.$JSCompiler_StaticMethods__parseCommonData$$ = function $$JSCompiler_StaticMethods__parseCommonData$$$($JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_5709$$, $layer$$3$$, $dataLayer$$14$$, $data$$69$$, $areaId$$inline_5704_displayable$$41$$, $dataObj$$6$$, $isParentAreaDataLayer$$1$$) {
  var $areaId$$3_datatip$$inline_5694_destination$$1_labelDisplay$$inline_5706$$ = $data$$69$$.location;
  $isParentAreaDataLayer$$1$$ && "auto" == $layer$$3$$.$getLabelDisplay$() && ($layer$$3$$.$_renderLabel$[$areaId$$3_datatip$$inline_5694_destination$$1_labelDisplay$$inline_5706$$] = D.$JSCompiler_alias_FALSE$$);
  $data$$69$$.action && ($dataObj$$6$$.$_hasAction$ = D.$JSCompiler_alias_TRUE$$, $dataObj$$6$$.$_action$ = $data$$69$$.action);
  if($areaId$$3_datatip$$inline_5694_destination$$1_labelDisplay$$inline_5706$$ = $data$$69$$.destination) {
    var $areaId$$inline_5696_displayTooltips$$inline_5693_linkObj$$1$$ = [];
    $areaId$$inline_5696_displayTooltips$$inline_5693_linkObj$$1$$.destination = $areaId$$3_datatip$$inline_5694_destination$$1_labelDisplay$$inline_5706$$;
    $areaId$$inline_5696_displayTooltips$$inline_5693_linkObj$$1$$.targetFrame = "_blank";
    $areaId$$inline_5696_displayTooltips$$inline_5693_linkObj$$1$$.focusable = D.$JSCompiler_alias_TRUE$$;
    (0,D.$JSCompiler_StaticMethods_setHyperlink$$)($areaId$$inline_5704_displayable$$41$$, $areaId$$inline_5696_displayTooltips$$inline_5693_linkObj$$1$$)
  }
  $areaId$$inline_5696_displayTooltips$$inline_5693_linkObj$$1$$ = $JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_5709$$.$_tmap$.$_displayTooltips$;
  if("none" != $areaId$$inline_5696_displayTooltips$$inline_5693_linkObj$$1$$) {
    $areaId$$3_datatip$$inline_5694_destination$$1_labelDisplay$$inline_5706$$ = $data$$69$$.shortDesc;
    if("auto" == $areaId$$inline_5696_displayTooltips$$inline_5693_linkObj$$1$$) {
      var $cssStyle$$9_labelText$$inline_5705_preDatatip$$inline_5695$$;
      ($areaId$$inline_5696_displayTooltips$$inline_5693_linkObj$$1$$ = $data$$69$$.location) && ($cssStyle$$9_labelText$$inline_5705_preDatatip$$inline_5695$$ = !$isParentAreaDataLayer$$1$$ || $JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_5709$$.$_isCustomBasemap$ ? D.$DvtBaseMapManager$$.$getCityLabel$($JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_5709$$.$_tmap$.$_mapName$, $areaId$$inline_5696_displayTooltips$$inline_5693_linkObj$$1$$) : D.$DvtBaseMapManager$$.$getLongAreaLabel$($JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_5709$$.$_tmap$.$_mapName$, 
      $layer$$3$$.$LayerName$, $areaId$$inline_5696_displayTooltips$$inline_5693_linkObj$$1$$));
      $cssStyle$$9_labelText$$inline_5705_preDatatip$$inline_5695$$ && ($areaId$$3_datatip$$inline_5694_destination$$1_labelDisplay$$inline_5706$$ = $areaId$$3_datatip$$inline_5694_destination$$1_labelDisplay$$inline_5706$$ ? $cssStyle$$9_labelText$$inline_5705_preDatatip$$inline_5695$$ + ": " + $areaId$$3_datatip$$inline_5694_destination$$1_labelDisplay$$inline_5706$$ : $cssStyle$$9_labelText$$inline_5705_preDatatip$$inline_5695$$)
    }
    $areaId$$3_datatip$$inline_5694_destination$$1_labelDisplay$$inline_5706$$ && $dataObj$$6$$.$setDatatip$($areaId$$3_datatip$$inline_5694_destination$$1_labelDisplay$$inline_5706$$)
  }
  $cssStyle$$9_labelText$$inline_5705_preDatatip$$inline_5695$$ = new D.$DvtCSSStyle$$;
  $cssStyle$$9_labelText$$inline_5705_preDatatip$$inline_5695$$.$setStyle$("background-color", $data$$69$$.color);
  $cssStyle$$9_labelText$$inline_5705_preDatatip$$inline_5695$$.$setStyle$("pattern", $data$$69$$.pattern);
  $cssStyle$$9_labelText$$inline_5705_preDatatip$$inline_5695$$.$setStyle$("border-color", $data$$69$$.borderColor);
  $cssStyle$$9_labelText$$inline_5705_preDatatip$$inline_5695$$.$setStyle$("border-style", $data$$69$$.borderStyle);
  $data$$69$$.borderWidth && $cssStyle$$9_labelText$$inline_5705_preDatatip$$inline_5695$$.$setStyle$("border-width", $data$$69$$.borderWidth);
  $cssStyle$$9_labelText$$inline_5705_preDatatip$$inline_5695$$.$setStyle$("opacity", $data$$69$$.opacity);
  (0,D.$JSCompiler_StaticMethods__styleDisplayable$$)($JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_5709$$, $cssStyle$$9_labelText$$inline_5705_preDatatip$$inline_5695$$, $areaId$$inline_5704_displayable$$41$$, $dataObj$$6$$);
  $areaId$$inline_5704_displayable$$41$$ = $data$$69$$.location;
  $areaId$$3_datatip$$inline_5694_destination$$1_labelDisplay$$inline_5706$$ = ($cssStyle$$9_labelText$$inline_5705_preDatatip$$inline_5695$$ = $data$$69$$.label) ? "on" : "off";
  $isParentAreaDataLayer$$1$$ && ($areaId$$3_datatip$$inline_5694_destination$$1_labelDisplay$$inline_5706$$ = $layer$$3$$.$getLabelDisplay$());
  if(!$cssStyle$$9_labelText$$inline_5705_preDatatip$$inline_5695$$ && $isParentAreaDataLayer$$1$$ && ($dataObj$$6$$ instanceof D.$DvtMapDataArea$$ && "off" != $areaId$$3_datatip$$inline_5694_destination$$1_labelDisplay$$inline_5706$$ || !($dataObj$$6$$ instanceof D.$DvtMapDataArea$$) && "on" == $areaId$$3_datatip$$inline_5694_destination$$1_labelDisplay$$inline_5706$$)) {
    $cssStyle$$9_labelText$$inline_5705_preDatatip$$inline_5695$$ = "long" == $layer$$3$$.$_labelType$ ? $layer$$3$$.$AreaNames$[$areaId$$inline_5704_displayable$$41$$][1] : $layer$$3$$.$AreaNames$[$areaId$$inline_5704_displayable$$41$$][0]
  }
  if($cssStyle$$9_labelText$$inline_5705_preDatatip$$inline_5695$$) {
    var $context$$inline_5707_label$$inline_5708$$ = $JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_5709$$.$_tmap$.$_context$, $context$$inline_5707_label$$inline_5708$$ = $dataObj$$6$$ instanceof D.$DvtMapDataMarker$$ ? new D.$DvtOutputText$$($context$$inline_5707_label$$inline_5708$$, $cssStyle$$9_labelText$$inline_5705_preDatatip$$inline_5695$$, 0, 0) : new D.$DvtMapLabel$$($context$$inline_5707_label$$inline_5708$$, $cssStyle$$9_labelText$$inline_5705_preDatatip$$inline_5695$$, 
    $layer$$3$$.$getLabelInfoForArea$ ? $layer$$3$$.$getLabelInfoForArea$($areaId$$inline_5704_displayable$$41$$) : D.$JSCompiler_alias_NULL$$, $areaId$$3_datatip$$inline_5694_destination$$1_labelDisplay$$inline_5706$$, $dataLayer$$14$$.$_dataLabelLayer$, $JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_5709$$.$_tmap$.$_bSupportsVectorEffects$);
    $JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_5709$$ = new D.$DvtCSSStyle$$($data$$69$$.labelStyle);
    $context$$inline_5707_label$$inline_5708$$ instanceof D.$DvtMapLabel$$ && ($JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_5709$$.$getStyle$("color") || $JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_5709$$.$setStyle$("color", D.$DvtColorUtils$$.$getContrastingTextColor$($dataObj$$6$$.$getDatatipColor$())));
    $context$$inline_5707_label$$inline_5708$$.$setCSSStyle$($JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_5709$$)
  }
  $dataObj$$6$$.$setLabel$($context$$inline_5707_label$$inline_5708$$)
};
D.$JSCompiler_StaticMethods__styleDisplayable$$ = function $$JSCompiler_StaticMethods__styleDisplayable$$$($JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_5718$$, $borderColor$$28_cssStyle$$10$$, $displayable$$42$$, $dataObj$$9_stroke$$73$$) {
  $borderColor$$28_cssStyle$$10$$ || ($borderColor$$28_cssStyle$$10$$ = {});
  var $pattern$$11$$ = $borderColor$$28_cssStyle$$10$$.$getStyle$("pattern"), $backgroundColor$$15$$ = $borderColor$$28_cssStyle$$10$$.$getStyle$("background-color");
  $dataObj$$9_stroke$$73$$ && $dataObj$$9_stroke$$73$$.$setDatatipColor$($backgroundColor$$15$$);
  if($displayable$$42$$ instanceof D.$DvtMarker$$ && (0,D.$DvtMarker$isBuiltInShape$$)($displayable$$42$$.$getType$())) {
    "none" != $borderColor$$28_cssStyle$$10$$.$getStyle$("border-style") && ($dataObj$$9_stroke$$73$$ = new D.$DvtSolidStroke$$($borderColor$$28_cssStyle$$10$$.$getStyle$("border-color"), 1, $borderColor$$28_cssStyle$$10$$.$getStyle$("border-width")), $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_5718$$.$_tmap$.$_isMarkerZoomBehaviorFixed$ || ($dataObj$$9_stroke$$73$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), $dataObj$$9_stroke$$73$$.$setType$((0,D.$DvtStroke$convertTypeString$$)($borderColor$$28_cssStyle$$10$$.$getStyle$("border-style"))), 
    $displayable$$42$$.$setStroke$($dataObj$$9_stroke$$73$$));
    var $opacity$$3$$ = $borderColor$$28_cssStyle$$10$$.$getStyle$("opacity");
    "true" == D.$JSCompiler_alias_FALSE$$ && $backgroundColor$$15$$ ? $displayable$$42$$.$setFill$(new D.$DvtMarkerGradient$$.$createMarkerGradient$($backgroundColor$$15$$, $displayable$$42$$, $opacity$$3$$)) : $pattern$$11$$ ? $displayable$$42$$.$setFill$(new D.$DvtPatternFill$$($pattern$$11$$, $backgroundColor$$15$$, "#FFFFFF")) : $backgroundColor$$15$$ ? $displayable$$42$$.$setSolidFill$($backgroundColor$$15$$, $opacity$$3$$) : $displayable$$42$$.$setSolidFill$($borderColor$$28_cssStyle$$10$$.$getStyle$("background-color"), 
    $opacity$$3$$)
  }else {
    if($displayable$$42$$ instanceof D.$DvtPath$$) {
      if(($borderColor$$28_cssStyle$$10$$ = $borderColor$$28_cssStyle$$10$$.$getStyle$("border-color")) && "transparent" != $borderColor$$28_cssStyle$$10$$) {
        $dataObj$$9_stroke$$73$$ = new D.$DvtSolidStroke$$($borderColor$$28_cssStyle$$10$$), $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_5718$$.$_tmap$.$_bSupportsVectorEffects$ && ($dataObj$$9_stroke$$73$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), $displayable$$42$$.$setStroke$($dataObj$$9_stroke$$73$$)
      }
      $pattern$$11$$ ? ($JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_5718$$ = new D.$DvtPatternFill$$($pattern$$11$$, $backgroundColor$$15$$, "#FFFFFF"), $displayable$$42$$.$_ptFill$ = $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_5718$$) : "transparent" != $backgroundColor$$15$$ ? $displayable$$42$$.$setSolidFill$($backgroundColor$$15$$, $opacity$$3$$) : $displayable$$42$$.$setFill$(D.$JSCompiler_alias_NULL$$)
    }
  }
};
D.$DvtThematicMapProjections$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapProjections$$, D.$DvtObj$$, "DvtThematicMapProjections");
D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$ = new D.$DvtRectangle$$(0, 0, 800, 500);
D.$DvtThematicMapProjections$$.$_RADIUS$ = 6378206.4;
D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$ = new D.$DvtRectangle$$(500, 200, 200, 200);
D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$ = new D.$DvtRectangle$$(163, -49, 17, 17);
D.$DvtThematicMapProjections$$.$_AFRICA_BOUNDS$ = new D.$DvtRectangle$$(-17.379205428479874, -37.201510854305546, 68.66391442808313, 77.50071544582713);
D.$DvtThematicMapProjections$$.$_ASIA_BOUNDS$ = new D.$DvtRectangle$$(-0.8436866097568272, -0.7626456732012923, 1.8336308036296942, 1.5748427214611724);
D.$DvtThematicMapProjections$$.$_AUSTRALIA_BOUNDS$ = new D.$DvtRectangle$$(113.29667079927977, -52.89550592498755, 65.25257389065216, 42.123114617504626);
D.$DvtThematicMapProjections$$.$_EUROPE_BOUNDS$ = new D.$DvtRectangle$$(-0.47944476148667076, -0.0014669405958800579, 0.7364925893845453, 0.6293972741802124);
D.$DvtThematicMapProjections$$.$_N_AMERICA_BOUNDS$ = new D.$DvtRectangle$$(-0.6154469465354344, -0.24589767758847714, 1.2448236795108683, 1.2631535127174947);
D.$DvtThematicMapProjections$$.$_S_AMERICA_BOUNDS$ = new D.$DvtRectangle$$(-80.60817722658722, -60.796273249672765, 46.608687602908056, 66.96595767361796);
D.$DvtThematicMapProjections$$.$_APAC_BOUNDS$ = new D.$DvtRectangle$$(68.20516856593524, -52.89892708045518, 111.65739821771903, 116.55460214469134);
D.$DvtThematicMapProjections$$.$_EMEA_BOUNDS$ = new D.$DvtRectangle$$(-24.543831069368586, -37.202500659225905, 204.54283106936856, 164.9634493690208);
D.$DvtThematicMapProjections$$.$_L_AMERICA_BOUNDS$ = new D.$DvtRectangle$$(-117.12451221229134, -54.95921623126266, 82.33223251442891, 87.67786623127876);
D.$DvtThematicMapProjections$$.$_USA_CANADA_BOUNDS$ = new D.$DvtRectangle$$(-0.6154656300926513, 0.0507209798775865, 1.0153104799231851, 0.966537441082997);
D.$DvtThematicMapProjections$$.$_WORLD_BOUNDS$ = new D.$DvtRectangle$$(-171.9, -62.6, 349.8, 150.8);
D.$DvtThematicMapProjections$$.$_ALASKA1_RECT$ = new D.$DvtRectangle$$(172, 51, 8, 3);
D.$DvtThematicMapProjections$$.$_ALASKA2_RECT$ = new D.$DvtRectangle$$(-180, 51, 51, 21);
D.$DvtThematicMapProjections$$.$_HAWAII_RECT$ = new D.$DvtRectangle$$(-178.5, 18.9, 35, 11);
D.$DvtThematicMapProjections$$.$_USA_RECT$ = new D.$DvtRectangle$$(-124.8, 24.4, 58, 25.5);
D.$DvtThematicMapProjections$$.$_ALASKA_BOUNDS$ = new D.$DvtRectangle$$(-187.5517578125, 59.82610321044922, 57.562225341796875, 43.83738708496094);
D.$DvtThematicMapProjections$$.$_HAWAII_BOUNDS$ = new D.$DvtRectangle$$(-160.23606872558594, 18.91549301147461, 5.4374847412109375, 3.3189010620117188);
D.$DvtThematicMapProjections$$.$_USA_BOUNDS$ = new D.$DvtRectangle$$(-2386803.25, -1183550.5, 4514111, 2908402);
D.$DvtThematicMapProjections$$.$_HAWAII_WINDOW$ = new D.$DvtRectangle$$(165, 400, 100, 100);
D.$DvtThematicMapProjections$$.$_ALASKA_WINDOW$ = new D.$DvtRectangle$$(-75, 350, 240, 150);
D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$ = [[1, 0], [0.9986, 0.0314], [0.9954, 0.0629], [0.99, 0.0943], [0.9822, 0.1258], [0.973, 0.1572], [0.96, 0.1887], [0.9427, 0.2201], [0.9216, 0.2515], [0.8962, 0.2826], [0.8679, 0.3132], [0.835, 0.3433], [0.7986, 0.3726], [0.7597, 0.4008], [0.6732, 0.4532], [0.6213, 0.4765], [0.5722, 0.4951], [0.5322, 0.5072]];
D.$DvtThematicMapProjections$$.$project$ = function $$DvtThematicMapProjections$$$$project$$($x$$162$$, $y$$136$$, $basemap$$) {
  var $point$$25$$;
  switch($basemap$$) {
    case "africa":
      $point$$25$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_AFRICA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$162$$, $y$$136$$));
      break;
    case "asia":
      $point$$25$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_ASIA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(40, 95, 20, 60, $x$$162$$, $y$$136$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      break;
    case "australia":
      $point$$25$$ = D.$DvtThematicMapProjections$$.$_getAustraliaProjection$($x$$162$$, $y$$136$$);
      break;
    case "europe":
      $point$$25$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_EUROPE_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(35, 25, 40, 65, $x$$162$$, $y$$136$$), D.$DvtThematicMapProjections$$.$toRadians$(10));
      break;
    case "northAmerica":
      $point$$25$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_N_AMERICA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(23, -96, 20, 60, $x$$162$$, $y$$136$$));
      break;
    case "southAmerica":
      $point$$25$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_S_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$162$$, $y$$136$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      break;
    case "apac":
      $point$$25$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_APAC_BOUNDS$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$162$$, $y$$136$$));
      break;
    case "emea":
      $point$$25$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_EMEA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$162$$, $y$$136$$));
      break;
    case "latinAmerica":
      $point$$25$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_L_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$162$$, $y$$136$$));
      break;
    case "usaAndCanada":
      $point$$25$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_USA_CANADA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(23, -96, 20, 60, $x$$162$$, $y$$136$$));
      break;
    case "worldRegions":
      $point$$25$$ = D.$DvtThematicMapProjections$$.$_getWorldProjection$($x$$162$$, $y$$136$$);
      break;
    case "usa":
      $point$$25$$ = D.$DvtThematicMapProjections$$.$_getUSAProjection$($x$$162$$, $y$$136$$);
      break;
    case "world":
      $point$$25$$ = D.$DvtThematicMapProjections$$.$_getWorldProjection$($x$$162$$, $y$$136$$)
  }
  return $point$$25$$ ? new D.$DvtPoint$$(10 * $point$$25$$.x, 10 * $point$$25$$.y) : new D.$DvtPoint$$($x$$162$$, $y$$136$$)
};
D.$DvtThematicMapProjections$$.$_getUSAProjection$ = function $$DvtThematicMapProjections$$$$_getUSAProjection$$($x$$163$$, $y$$137$$) {
  var $viewPortTransform$$;
  return(0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_ALASKA1_RECT$, $x$$163$$, $y$$137$$) || (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_ALASKA2_RECT$, $x$$163$$, $y$$137$$) ? ($viewPortTransform$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_ALASKA_BOUNDS$, D.$DvtThematicMapProjections$$.$_ALASKA_WINDOW$), D.$DvtThematicMapProjections$$.$_applyAffineTransform$($viewPortTransform$$, 
  D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$163$$, $y$$137$$))) : (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_HAWAII_RECT$, $x$$163$$, $y$$137$$) ? ($viewPortTransform$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_HAWAII_BOUNDS$, D.$DvtThematicMapProjections$$.$_HAWAII_WINDOW$), D.$DvtThematicMapProjections$$.$_applyAffineTransform$($viewPortTransform$$, new D.$DvtPoint$$($x$$163$$, $y$$137$$))) : 
  (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_USA_RECT$, $x$$163$$, $y$$137$$) ? ($viewPortTransform$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_USA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$), D.$DvtThematicMapProjections$$.$_applyAffineTransform$($viewPortTransform$$, D.$DvtThematicMapProjections$$.$_getOrthographicProjection$(new D.$DvtPoint$$(-95, 36), $x$$163$$, $y$$137$$))) : new D.$DvtPoint$$($x$$163$$, 
  $y$$137$$)
};
D.$DvtThematicMapProjections$$.$_getWorldProjection$ = function $$DvtThematicMapProjections$$$$_getWorldProjection$$($x$$164$$, $y$$138$$) {
  var $viewPortTransform$$1$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_WORLD_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  return D.$DvtThematicMapProjections$$.$_applyAffineTransform$($viewPortTransform$$1$$, D.$DvtThematicMapProjections$$.$_getRobinsonProjection$($x$$164$$, $y$$138$$))
};
D.$DvtThematicMapProjections$$.$_getAustraliaProjection$ = function $$DvtThematicMapProjections$$$$_getAustraliaProjection$$($x$$165$$, $y$$139$$) {
  var $viewPortTransform$$2$$;
  $viewPortTransform$$2$$ = (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$, $x$$165$$, $y$$139$$) ? D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$, D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$) : D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_AUSTRALIA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  return D.$DvtThematicMapProjections$$.$_applyAffineTransform$($viewPortTransform$$2$$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$165$$, $y$$139$$))
};
D.$DvtThematicMapProjections$$.$_getAffineProjection$ = function $$DvtThematicMapProjections$$$$_getAffineProjection$$($mapBounds_viewPortTransform$$3$$, $point$$26$$, $rotRadians$$) {
  $mapBounds_viewPortTransform$$3$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$($mapBounds_viewPortTransform$$3$$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  if($rotRadians$$) {
    var $rotMatrix$$ = new D.$DvtMatrix$$;
    $rotMatrix$$.rotate($rotRadians$$);
    $mapBounds_viewPortTransform$$3$$ = D.$DvtThematicMapProjections$$.$_concatAffineTransforms$($mapBounds_viewPortTransform$$3$$, $rotMatrix$$)
  }
  return(0,D.$JSCompiler_StaticMethods_transformPoint$$)($mapBounds_viewPortTransform$$3$$, $point$$26$$)
};
D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$ = function $$DvtThematicMapProjections$$$$_getAlbersEqualAreaConicProjection$$($latOfOrigin_phi0_rho0$$, $lambda0_lonOfOrigin$$, $c$$17_sP1$$, $n$$30_sP2$$, $theta$$1_x$$166$$, $rho_y$$140$$) {
  $lambda0_lonOfOrigin$$ = D.$DvtThematicMapProjections$$.$toRadians$($lambda0_lonOfOrigin$$);
  $latOfOrigin_phi0_rho0$$ = D.$DvtThematicMapProjections$$.$toRadians$($latOfOrigin_phi0_rho0$$);
  $c$$17_sP1$$ = D.$DvtThematicMapProjections$$.$toRadians$($c$$17_sP1$$);
  $n$$30_sP2$$ = D.$DvtThematicMapProjections$$.$toRadians$($n$$30_sP2$$);
  $n$$30_sP2$$ = 0.5 * (window.Math.sin($c$$17_sP1$$) + window.Math.sin($n$$30_sP2$$));
  $c$$17_sP1$$ = window.Math.pow(window.Math.cos($c$$17_sP1$$), 2) + 2 * $n$$30_sP2$$ * window.Math.sin($c$$17_sP1$$);
  $latOfOrigin_phi0_rho0$$ = $c$$17_sP1$$ - 2 * $n$$30_sP2$$ * window.Math.sin($latOfOrigin_phi0_rho0$$);
  $latOfOrigin_phi0_rho0$$ = window.Math.sqrt($latOfOrigin_phi0_rho0$$) / $n$$30_sP2$$;
  $theta$$1_x$$166$$ = $n$$30_sP2$$ * (D.$DvtThematicMapProjections$$.$toRadians$($theta$$1_x$$166$$) - $lambda0_lonOfOrigin$$);
  $rho_y$$140$$ = $c$$17_sP1$$ - 2 * $n$$30_sP2$$ * window.Math.sin(D.$DvtThematicMapProjections$$.$toRadians$($rho_y$$140$$));
  $rho_y$$140$$ = window.Math.sqrt($rho_y$$140$$) / $n$$30_sP2$$;
  return new D.$DvtPoint$$($rho_y$$140$$ * window.Math.sin($theta$$1_x$$166$$), $latOfOrigin_phi0_rho0$$ - $rho_y$$140$$ * window.Math.cos($theta$$1_x$$166$$))
};
D.$DvtThematicMapProjections$$.$_getMercatorProjection$ = function $$DvtThematicMapProjections$$$$_getMercatorProjection$$($x$$167$$, $y$$141$$) {
  var $pY$$1$$ = window.Math.log(window.Math.tan(0.25 * window.Math.PI + 0.5 * D.$DvtThematicMapProjections$$.$toRadians$($y$$141$$)));
  return new D.$DvtPoint$$($x$$167$$, D.$DvtThematicMapProjections$$.$toDegrees$($pY$$1$$))
};
D.$DvtThematicMapProjections$$.$_getOrthographicProjection$ = function $$DvtThematicMapProjections$$$$_getOrthographicProjection$$($center$$9_centerY$$, $radX_x$$168$$, $radY_y$$142$$) {
  $radX_x$$168$$ = D.$DvtThematicMapProjections$$.$toRadians$($radX_x$$168$$);
  $radY_y$$142$$ = D.$DvtThematicMapProjections$$.$toRadians$($radY_y$$142$$);
  var $centerX$$ = D.$DvtThematicMapProjections$$.$toRadians$($center$$9_centerY$$.x);
  $center$$9_centerY$$ = D.$DvtThematicMapProjections$$.$toRadians$($center$$9_centerY$$.y);
  return new D.$DvtPoint$$(window.Math.cos($radY_y$$142$$) * window.Math.sin($radX_x$$168$$ - $centerX$$) * D.$DvtThematicMapProjections$$.$_RADIUS$, (window.Math.cos($center$$9_centerY$$) * window.Math.sin($radY_y$$142$$) - window.Math.sin($center$$9_centerY$$) * window.Math.cos($radY_y$$142$$) * window.Math.cos($radX_x$$168$$ - $centerX$$)) * D.$DvtThematicMapProjections$$.$_RADIUS$)
};
D.$DvtThematicMapProjections$$.$_getRobinsonProjection$ = function $$DvtThematicMapProjections$$$$_getRobinsonProjection$$($x$$169$$, $y$$143$$) {
  var $newY$$9_ycriteria$$ = window.Math.floor(window.Math.abs($y$$143$$) / 5);
  $newY$$9_ycriteria$$ >= D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 1 && ($newY$$9_ycriteria$$ = D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 2);
  var $yInterval$$ = (window.Math.abs($y$$143$$) - 5 * $newY$$9_ycriteria$$) / 5, $newX$$8$$ = $x$$169$$ * (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$9_ycriteria$$][0] + $yInterval$$ * (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$9_ycriteria$$ + 1][0] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$9_ycriteria$$][0])), $newY$$9_ycriteria$$ = D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$9_ycriteria$$][1] + $yInterval$$ * (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$9_ycriteria$$ + 
  1][1] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$9_ycriteria$$][1]);
  0 > $y$$143$$ && ($newY$$9_ycriteria$$ *= -1);
  return new D.$DvtPoint$$($newX$$8$$, 180 * $newY$$9_ycriteria$$)
};
D.$DvtThematicMapProjections$$.$_applyAffineTransform$ = function $$DvtThematicMapProjections$$$$_applyAffineTransform$$($matrix$$9$$, $point$$27$$) {
  return new D.$DvtPoint$$($point$$27$$.x * $matrix$$9$$.$_a$ + $matrix$$9$$.$_tx$, $point$$27$$.y * $matrix$$9$$.$_d$ + $matrix$$9$$.$_ty$)
};
D.$DvtThematicMapProjections$$.$_concatAffineTransforms$ = function $$DvtThematicMapProjections$$$$_concatAffineTransforms$$($transform1$$, $transform2$$) {
  var $t1A$$ = $transform1$$.$_a$, $t1D$$ = $transform1$$.$_d$;
  return new D.$DvtMatrix$$($transform2$$.$_a$ * $t1A$$, $transform2$$.$_b$ * $t1A$$, $transform2$$.$_c$ * $t1D$$, $transform2$$.$_d$ * $t1D$$, $transform1$$.$_tx$ + $transform2$$.$_tx$ * $t1A$$, $transform1$$.$_ty$ + $transform2$$.$_ty$ * $t1D$$)
};
D.$DvtThematicMapProjections$$.$_getViewPortTransformation$ = function $$DvtThematicMapProjections$$$$_getViewPortTransformation$$($mapBound$$, $deviceView$$) {
  var $d5_i$$511$$ = $deviceView$$.x, $d6_j$$85$$ = $deviceView$$.y, $d$$9$$ = $mapBound$$.$w$, $d1$$1$$ = $mapBound$$.$h$, $d2$$1_d3$$1$$ = 0, $d2$$1_d3$$1$$ = $deviceView$$.$w$ / $d$$9$$, $d4$$ = $deviceView$$.$h$ / $d1$$1$$, $d2$$1_d3$$1$$ = $d2$$1_d3$$1$$ <= $d4$$ ? $d2$$1_d3$$1$$ : $d4$$, $d5_i$$511$$ = $d5_i$$511$$ - $mapBound$$.x * $d2$$1_d3$$1$$, $d6_j$$85$$ = $d6_j$$85$$ + $mapBound$$.y * $d2$$1_d3$$1$$, $d5_i$$511$$ = $d5_i$$511$$ + ($deviceView$$.$w$ - $d$$9$$ * $d2$$1_d3$$1$$) / 2, $d6_j$$85$$ = 
  $d6_j$$85$$ + ($deviceView$$.$h$ - ($deviceView$$.$h$ - $d1$$1$$ * $d2$$1_d3$$1$$) / 2);
  return new D.$DvtMatrix$$($d2$$1_d3$$1$$, 0, 0, -$d2$$1_d3$$1$$, $d5_i$$511$$, $d6_j$$85$$)
};
D.$DvtThematicMapProjections$$.$toRadians$ = function $$DvtThematicMapProjections$$$$toRadians$$($x$$170$$) {
  return $x$$170$$ * (window.Math.PI / 180)
};
D.$DvtThematicMapProjections$$.$toDegrees$ = function $$DvtThematicMapProjections$$$$toDegrees$$($x$$171$$) {
  return $x$$171$$ * (180 / window.Math.PI)
};
D.$DvtThematicMapProjections$$.$inverseProject$ = function $$DvtThematicMapProjections$$$$inverseProject$$($x$$172$$, $y$$144$$, $basemap$$1$$) {
  var $point$$28$$;
  $x$$172$$ /= 10;
  $y$$144$$ /= 10;
  switch($basemap$$1$$) {
    case "africa":
      $point$$28$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_AFRICA_BOUNDS$, new D.$DvtPoint$$($x$$172$$, $y$$144$$));
      $point$$28$$ = D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$28$$.x, $point$$28$$.y);
      break;
    case "asia":
      $point$$28$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_ASIA_BOUNDS$, new D.$DvtPoint$$($x$$172$$, $y$$144$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      $point$$28$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(40, 95, 20, 60, $point$$28$$.x, $point$$28$$.y);
      break;
    case "australia":
      $point$$28$$ = D.$DvtThematicMapProjections$$.$_getInverseAustraliaProjection$($x$$172$$, $y$$144$$);
      break;
    case "europe":
      $point$$28$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_EUROPE_BOUNDS$, new D.$DvtPoint$$($x$$172$$, $y$$144$$), D.$DvtThematicMapProjections$$.$toRadians$(10));
      $point$$28$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(35, 25, 40, 65, $point$$28$$.x, $point$$28$$.y);
      break;
    case "northAmerica":
      $point$$28$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_N_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$172$$, $y$$144$$));
      $point$$28$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(23, -96, 20, 60, $point$$28$$.x, $point$$28$$.y);
      break;
    case "southAmerica":
      $point$$28$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_S_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$172$$, $y$$144$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      break;
    case "apac":
      $point$$28$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_APAC_BOUNDS$, new D.$DvtPoint$$($x$$172$$, $y$$144$$));
      $point$$28$$ = D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$28$$.x, $point$$28$$.y);
      break;
    case "emea":
      $point$$28$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_EMEA_BOUNDS$, new D.$DvtPoint$$($x$$172$$, $y$$144$$));
      $point$$28$$ = D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$28$$.x, $point$$28$$.y);
      break;
    case "latinAmerica":
      $point$$28$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_L_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$172$$, $y$$144$$));
      break;
    case "usaAndCanada":
      $point$$28$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_USA_CANADA_BOUNDS$, new D.$DvtPoint$$($x$$172$$, $y$$144$$));
      $point$$28$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(23, -96, 20, 60, $point$$28$$.x, $point$$28$$.y);
      break;
    case "worldRegions":
      $point$$28$$ = D.$DvtThematicMapProjections$$.$_getInverseWorldProjection$($x$$172$$, $y$$144$$);
      break;
    case "usa":
      $point$$28$$ = D.$DvtThematicMapProjections$$.$_getInverseUSAProjection$($x$$172$$, $y$$144$$);
      break;
    case "world":
      $point$$28$$ = D.$DvtThematicMapProjections$$.$_getInverseWorldProjection$($x$$172$$, $y$$144$$)
  }
  return $point$$28$$ ? $point$$28$$ : new D.$DvtPoint$$($x$$172$$, $y$$144$$)
};
D.$DvtThematicMapProjections$$.$_getInverseUSAProjection$ = function $$DvtThematicMapProjections$$$$_getInverseUSAProjection$$($x$$173$$, $y$$145$$) {
  var $point$$29_viewPortTransform$$4$$;
  return(0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_ALASKA_WINDOW$, $x$$173$$, $y$$145$$) ? ($point$$29_viewPortTransform$$4$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_ALASKA_BOUNDS$, D.$DvtThematicMapProjections$$.$_ALASKA_WINDOW$), $point$$29_viewPortTransform$$4$$.$invert$(), $point$$29_viewPortTransform$$4$$ = (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$29_viewPortTransform$$4$$, new D.$DvtPoint$$($x$$173$$, 
  $y$$145$$)), D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$29_viewPortTransform$$4$$.x, $point$$29_viewPortTransform$$4$$.y)) : (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_HAWAII_WINDOW$, $x$$173$$, $y$$145$$) ? ($point$$29_viewPortTransform$$4$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_HAWAII_BOUNDS$, D.$DvtThematicMapProjections$$.$_HAWAII_WINDOW$), $point$$29_viewPortTransform$$4$$.$invert$(), 
  (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$29_viewPortTransform$$4$$, new D.$DvtPoint$$($x$$173$$, $y$$145$$))) : (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$, $x$$173$$, $y$$145$$) ? ($point$$29_viewPortTransform$$4$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_USA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$), $point$$29_viewPortTransform$$4$$.$invert$(), $point$$29_viewPortTransform$$4$$ = 
  (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$29_viewPortTransform$$4$$, new D.$DvtPoint$$($x$$173$$, $y$$145$$)), D.$DvtThematicMapProjections$$.$_getInverseOrthographicProjection$(new D.$DvtPoint$$(-95, 36), $point$$29_viewPortTransform$$4$$.x, $point$$29_viewPortTransform$$4$$.y)) : new D.$DvtPoint$$($x$$173$$, $y$$145$$)
};
D.$DvtThematicMapProjections$$.$_getInverseWorldProjection$ = function $$DvtThematicMapProjections$$$$_getInverseWorldProjection$$($x$$174$$, $y$$146$$) {
  var $point$$30_viewPortTransform$$5$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_WORLD_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  $point$$30_viewPortTransform$$5$$.$invert$();
  $point$$30_viewPortTransform$$5$$ = (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$30_viewPortTransform$$5$$, new D.$DvtPoint$$($x$$174$$, $y$$146$$));
  return D.$DvtThematicMapProjections$$.$_getInverseRobinsonProjection$($point$$30_viewPortTransform$$5$$.x, $point$$30_viewPortTransform$$5$$.y)
};
D.$DvtThematicMapProjections$$.$_getInverseAustraliaProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAustraliaProjection$$($x$$175$$, $y$$147$$) {
  var $point$$31_viewPortTransform$$6$$;
  $point$$31_viewPortTransform$$6$$ = (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$, $x$$175$$, $y$$147$$) ? D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$, D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$) : D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_AUSTRALIA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  $point$$31_viewPortTransform$$6$$.$invert$();
  $point$$31_viewPortTransform$$6$$ = (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$31_viewPortTransform$$6$$, new D.$DvtPoint$$($x$$175$$, $y$$147$$));
  return D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$31_viewPortTransform$$6$$.x, $point$$31_viewPortTransform$$6$$.y)
};
D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAffineProjection$$($mapBounds$$1_viewPortTransform$$7$$, $point$$32$$, $rotRadians$$1$$) {
  $mapBounds$$1_viewPortTransform$$7$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$($mapBounds$$1_viewPortTransform$$7$$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  if($rotRadians$$1$$) {
    var $rotMatrix$$1$$ = new D.$DvtMatrix$$;
    $rotMatrix$$1$$.rotate($rotRadians$$1$$);
    $mapBounds$$1_viewPortTransform$$7$$ = D.$DvtThematicMapProjections$$.$_concatAffineTransforms$($mapBounds$$1_viewPortTransform$$7$$, $rotMatrix$$1$$)
  }
  $mapBounds$$1_viewPortTransform$$7$$.$invert$();
  return(0,D.$JSCompiler_StaticMethods_transformPoint$$)($mapBounds$$1_viewPortTransform$$7$$, $point$$32$$)
};
D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAlbersEqualAreaConicProjection$$($latOfOrigin$$1_p0$$1_phi0$$1$$, $lambda0$$1_lonOfOrigin$$1$$, $c$$19_sP1$$1$$, $n$$31_sP2$$1$$, $x$$176$$, $y$$148$$) {
  $lambda0$$1_lonOfOrigin$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($lambda0$$1_lonOfOrigin$$1$$);
  $latOfOrigin$$1_p0$$1_phi0$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($latOfOrigin$$1_p0$$1_phi0$$1$$);
  $c$$19_sP1$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($c$$19_sP1$$1$$);
  $n$$31_sP2$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($n$$31_sP2$$1$$);
  $n$$31_sP2$$1$$ = 0.5 * (window.Math.sin($c$$19_sP1$$1$$) + window.Math.sin($n$$31_sP2$$1$$));
  $c$$19_sP1$$1$$ = window.Math.pow(window.Math.cos($c$$19_sP1$$1$$), 2) + 2 * $n$$31_sP2$$1$$ * window.Math.sin($c$$19_sP1$$1$$);
  $latOfOrigin$$1_p0$$1_phi0$$1$$ = $c$$19_sP1$$1$$ - 2 * $n$$31_sP2$$1$$ * window.Math.sin($latOfOrigin$$1_p0$$1_phi0$$1$$);
  $latOfOrigin$$1_p0$$1_phi0$$1$$ = window.Math.sqrt($latOfOrigin$$1_p0$$1_phi0$$1$$) / $n$$31_sP2$$1$$;
  var $p$$19$$ = window.Math.sqrt($x$$176$$ * $x$$176$$ + ($latOfOrigin$$1_p0$$1_phi0$$1$$ - $y$$148$$) * ($latOfOrigin$$1_p0$$1_phi0$$1$$ - $y$$148$$));
  return new D.$DvtPoint$$(D.$DvtThematicMapProjections$$.$toDegrees$($lambda0$$1_lonOfOrigin$$1$$ + window.Math.atan($x$$176$$ / ($latOfOrigin$$1_p0$$1_phi0$$1$$ - $y$$148$$)) / $n$$31_sP2$$1$$), D.$DvtThematicMapProjections$$.$toDegrees$(window.Math.asin(($c$$19_sP1$$1$$ - $p$$19$$ * $p$$19$$ * $n$$31_sP2$$1$$ * $n$$31_sP2$$1$$) / (2 * $n$$31_sP2$$1$$))))
};
D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$ = function $$DvtThematicMapProjections$$$$_getInverseMercatorProjection$$($x$$177$$, $y$$149$$) {
  return new D.$DvtPoint$$($x$$177$$, D.$DvtThematicMapProjections$$.$toDegrees$(2 * window.Math.atan(window.Math.exp(D.$DvtThematicMapProjections$$.$toRadians$($y$$149$$))) - 0.5 * window.Math.PI))
};
D.$DvtThematicMapProjections$$.$_getInverseOrthographicProjection$ = function $$DvtThematicMapProjections$$$$_getInverseOrthographicProjection$$($center$$10$$, $radX$$1_x$$178$$, $radY$$1_y$$150$$) {
  $radX$$1_x$$178$$ /= D.$DvtThematicMapProjections$$.$_RADIUS$;
  $radY$$1_y$$150$$ /= D.$DvtThematicMapProjections$$.$_RADIUS$;
  var $centerY$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($center$$10$$.y), $p$$20$$ = window.Math.sqrt($radX$$1_x$$178$$ * $radX$$1_x$$178$$ + $radY$$1_y$$150$$ * $radY$$1_y$$150$$), $c$$20$$ = window.Math.asin($p$$20$$);
  return new D.$DvtPoint$$(D.$DvtThematicMapProjections$$.$toDegrees$(D.$DvtThematicMapProjections$$.$toRadians$($center$$10$$.x) + window.Math.atan($radX$$1_x$$178$$ * window.Math.sin($c$$20$$) / ($p$$20$$ * window.Math.cos($centerY$$1$$) * window.Math.cos($c$$20$$) - $radY$$1_y$$150$$ * window.Math.sin($centerY$$1$$) * window.Math.sin($c$$20$$)))), D.$DvtThematicMapProjections$$.$toDegrees$(window.Math.asin(window.Math.cos($c$$20$$) * window.Math.sin($centerY$$1$$) + $radY$$1_y$$150$$ * window.Math.sin($c$$20$$) * 
  window.Math.cos($centerY$$1$$) / $p$$20$$)))
};
D.$DvtThematicMapProjections$$.$_getInverseRobinsonProjection$ = function $$DvtThematicMapProjections$$$$_getInverseRobinsonProjection$$($x$$179$$, $y$$151$$) {
  var $criteria$$2_originalX$$ = window.Math.floor(window.Math.abs($y$$151$$) / 5);
  $criteria$$2_originalX$$ >= D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 1 && ($criteria$$2_originalX$$ = D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 2);
  var $yInterval$$1$$ = (window.Math.abs($y$$151$$ / 180) - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$2_originalX$$][1]) / (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$2_originalX$$ + 1][1] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$2_originalX$$][1]), $originalY$$ = 5 * $yInterval$$1$$ + 5 * $criteria$$2_originalX$$, $criteria$$2_originalX$$ = $x$$179$$ / (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$2_originalX$$][0] + 
  $yInterval$$1$$ * (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$2_originalX$$ + 1][0] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$2_originalX$$][0]));
  0 > $y$$151$$ && ($originalY$$ *= -1);
  return new D.$DvtPoint$$($criteria$$2_originalX$$, $originalY$$)
};
D.$DvtMapControlButton$$ = function $$DvtMapControlButton$$$($context$$293$$, $button$$59$$, $mapCallback$$, $panZoomCanvas$$6$$, $btype$$, $resources$$9$$, $eventManager$$17$$) {
  this.Init($context$$293$$, $button$$59$$, $mapCallback$$, $panZoomCanvas$$6$$, $btype$$, $resources$$9$$, $eventManager$$17$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapControlButton$$, D.$DvtBaseControl$$, "DvtMapControlButton");
D.$DvtMapControlButton$$.prototype.Init = function $$DvtMapControlButton$$$$Init$($context$$294_proxy$$8$$, $button$$60$$, $mapCallback$$1$$, $panZoomCanvas$$7$$, $btype$$1$$, $resources$$10$$, $eventManager$$18$$) {
  D.$DvtMapControlButton$$.$superclass$.Init.call(this, $context$$294_proxy$$8$$, $panZoomCanvas$$7$$, $resources$$10$$);
  this.$_btype$ = $btype$$1$$;
  this.$_button$ = $button$$60$$;
  this.$_eventManager$ = $eventManager$$18$$;
  (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_button$, this.$HandleOnClick$, this);
  this.$_button$.setCursor("pointer");
  $context$$294_proxy$$8$$ = new D.$DvtControlPanelEventHandlerProxy$$(this, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, 0 == this.$_btype$ ? (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, "CONTROL_PANEL_DRILLUP") : 1 == this.$_btype$ ? (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, "CONTROL_PANEL_DRILLDOWN") : 2 == this.$_btype$ ? (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, 
  "CONTROL_PANEL_RESET") : D.$JSCompiler_alias_NULL$$);
  this.$_eventManager$.$associate$(this.$_button$, $context$$294_proxy$$8$$);
  this.$addChild$(this.$_button$);
  this.$_mapCallback$ = $mapCallback$$1$$;
  this.$_isEnabled$ = D.$JSCompiler_alias_TRUE$$
};
D.$DvtMapControlButton$$.prototype.$setEnabled$ = function $$DvtMapControlButton$$$$$setEnabled$$($enabled$$7$$) {
  this.$setAlpha$($enabled$$7$$ ? 1 : 0.4);
  this.$_button$.setCursor($enabled$$7$$ ? "pointer" : D.$JSCompiler_alias_NULL$$);
  this.$_isEnabled$ = $enabled$$7$$;
  this.$_button$.$setEnabled$($enabled$$7$$);
  (0,D.$JSCompiler_StaticMethods_initState$$)(this.$_button$)
};
D.$DvtMapControlButton$$.prototype.$HandleOnClick$ = function $$DvtMapControlButton$$$$$HandleOnClick$$($event$$417$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$417$$);
  this.$_isEnabled$ && this.$_mapCallback$ && this.$_mapCallback$()
};
D.$DvtThematicMapControlPanel$$ = function $$DvtThematicMapControlPanel$$$($context$$295$$, $view$$60$$, $state$$70$$) {
  this.Init($context$$295$$, $view$$60$$, $state$$70$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapControlPanel$$, D.$DvtControlPanel$$, "DvtThematicMapControlPanel");
D.$DvtThematicMapControlPanel$$.prototype.Init = function $$DvtThematicMapControlPanel$$$$Init$($context$$296$$, $view$$61$$, $state$$71$$) {
  D.$DvtThematicMapControlPanel$$.$superclass$.Init.call(this, $context$$296$$, $view$$61$$, $state$$71$$);
  this.$_drillMode$ = $view$$61$$.$_drillMode$;
  this.$_buttonImages$ = (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)($view$$61$$);
  this.$_drillUpCallback$ = D.$DvtObj$$.$createCallback$($view$$61$$, $view$$61$$.$drillUp$);
  this.$_drillDownCallback$ = D.$DvtObj$$.$createCallback$($view$$61$$, $view$$61$$.$drillDown$);
  this.$_resetCallback$ = D.$DvtObj$$.$createCallback$($view$$61$$, $view$$61$$.$resetMap$);
  this.$_drillDownButton$ = this.$_drillUpButton$ = this.$_resetButton$ = D.$JSCompiler_alias_NULL$$;
  this.$_drillUpButtonEnabled$ = this.$_drillDownButtonEnabled$ = D.$JSCompiler_alias_FALSE$$;
  this.$_styleMap$ = $view$$61$$.$getSubcomponentStyles$()
};
D.$JSCompiler_StaticMethods_setEnabledDrillDownButton$$ = function $$JSCompiler_StaticMethods_setEnabledDrillDownButton$$$($JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$, $enable$$) {
  $JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$.$_drillDownButtonEnabled$ = $enable$$;
  $JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$.$_drillDownButton$ && $JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$.$_drillDownButton$.$setEnabled$($enable$$)
};
D.$JSCompiler_StaticMethods_setEnabledDrillUpButton$$ = function $$JSCompiler_StaticMethods_setEnabledDrillUpButton$$$($JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$, $enable$$1$$) {
  $JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$.$_drillUpButtonEnabled$ = $enable$$1$$;
  $JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$.$_drillUpButton$ && $JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$.$_drillUpButton$.$setEnabled$($enable$$1$$)
};
D.$DvtThematicMapControlPanel$$.prototype.$PopulateHorzContentBar$ = function $$DvtThematicMapControlPanel$$$$$PopulateHorzContentBar$$($contentSprite$$) {
  if(this.$_drillMode$ && "none" != this.$_drillMode$) {
    var $buttonOffset$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "buttonWidth", 0);
    this.$_resetButton$ = D.$DvtButtonLAFUtils$$.$createResetButton$(this.$_context$, this.$_resetCallback$, this.$_panZoomCanvas$, this.$Bundle$, this.$_buttonImages$, this.$_eventManager$, this.$_styleMap$);
    $contentSprite$$.$addChild$(this.$_resetButton$);
    this.$_drillDownButton$ = D.$DvtButtonLAFUtils$$.$createDrillDownButton$(this.$_context$, this.$_drillDownCallback$, this.$_panZoomCanvas$, this.$Bundle$, this.$_buttonImages$, this.$_eventManager$, this.$_styleMap$);
    this.$_drillDownButton$.$setTranslateX$($buttonOffset$$);
    this.$_drillDownButton$.$setEnabled$(this.$_drillDownButtonEnabled$);
    $contentSprite$$.$addChild$(this.$_drillDownButton$);
    this.$_drillUpButton$ = D.$DvtButtonLAFUtils$$.$createDrillUpButton$(this.$_context$, this.$_drillUpCallback$, this.$_panZoomCanvas$, this.$Bundle$, this.$_buttonImages$, this.$_eventManager$, this.$_styleMap$);
    this.$_drillUpButton$.$setTranslateX$(2 * $buttonOffset$$);
    this.$_drillUpButton$.$setEnabled$(this.$_drillUpButtonEnabled$);
    $contentSprite$$.$addChild$(this.$_drillUpButton$)
  }
};
});