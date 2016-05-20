define(['./DvtToolkit', './DvtBaseTreeView'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtBaseTreemap$$ = function $$DvtBaseTreemap$$$($context$$323$$, $callback$$102$$, $callbackObj$$66$$) {
  this.Init($context$$323$$, $callback$$102$$, $callbackObj$$66$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreemap$$, D.$DvtBaseTreeView$$, "DvtBaseTreemap");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreemap$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$324$$, $callback$$103$$, $callbackObj$$67$$) {
  D.$DvtBaseTreemap$$.$superclass$.Init.call(this, $context$$324$$, $callback$$103$$, $callbackObj$$67$$);
  this.$Defaults$ = new D.$DvtTreemapDefaults$$
};
D.$JSCompiler_prototypeAlias$$.$Parse$ = function $$JSCompiler_prototypeAlias$$$$Parse$$($xmlString$$13$$) {
  return(new D.$DvtTreemapParser$$(this)).parse($xmlString$$13$$)
};
D.$JSCompiler_prototypeAlias$$.$ApplyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$ApplyParsedProperties$$($isolateRowKey$$inline_6278_props$$26$$) {
  D.$DvtBaseTreemap$$.$superclass$.$ApplyParsedProperties$.call(this, $isolateRowKey$$inline_6278_props$$26$$);
  this.$_layout$ = $isolateRowKey$$inline_6278_props$$26$$.$layout$;
  this.$_groupGaps$ = $isolateRowKey$$inline_6278_props$$26$$.$groupGaps$;
  this.$_layout$ && (this.$_layout$.$Sorting$ = this.$Sorting$);
  this.$_isolatedNodes$ = [];
  if(($isolateRowKey$$inline_6278_props$$26$$ = $isolateRowKey$$inline_6278_props$$26$$.$isolateRowKey$) && this.$_root$) {
    var $allNodes$$inline_6279$$ = (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)(this.$_root$);
    $allNodes$$inline_6279$$.push(this.$_root$);
    for(var $i$$inline_6280$$ = 0;$i$$inline_6280$$ < $allNodes$$inline_6279$$.length;$i$$inline_6280$$++) {
      if($allNodes$$inline_6279$$[$i$$inline_6280$$].getId() == $isolateRowKey$$inline_6278_props$$26$$) {
        this.$_isolatedNodes$.push($allNodes$$inline_6279$$[$i$$inline_6280$$]);
        break
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$Layout$ = function $$JSCompiler_prototypeAlias$$$$Layout$$($availSpace$$90$$) {
  var $bufferSpace_gap$$18_numIsolated$$ = window.Math.max(window.Math.ceil(7 * window.Math.min($availSpace$$90$$.$w$, $availSpace$$90$$.$h$) / 400), 2);
  $availSpace$$90$$.x += $bufferSpace_gap$$18_numIsolated$$;
  $availSpace$$90$$.y += $bufferSpace_gap$$18_numIsolated$$;
  $availSpace$$90$$.$w$ -= 2 * $bufferSpace_gap$$18_numIsolated$$;
  $availSpace$$90$$.$h$ -= 2 * $bufferSpace_gap$$18_numIsolated$$;
  $bufferSpace_gap$$18_numIsolated$$ = this.$_layout$.$getGapSize$(this, 1);
  $availSpace$$90$$.x += $bufferSpace_gap$$18_numIsolated$$;
  $availSpace$$90$$.$w$ -= 2 * $bufferSpace_gap$$18_numIsolated$$;
  (0,D.$JSCompiler_StaticMethods_LayoutBreadcrumbs$$)(this, $availSpace$$90$$);
  (0,D.$JSCompiler_StaticMethods_LayoutLegend$$)(this, $availSpace$$90$$);
  $availSpace$$90$$.x -= $bufferSpace_gap$$18_numIsolated$$;
  $availSpace$$90$$.$w$ += 2 * $bufferSpace_gap$$18_numIsolated$$;
  $bufferSpace_gap$$18_numIsolated$$ = this.$_isolatedNodes$.length;
  if(0 < $bufferSpace_gap$$18_numIsolated$$ && this.$_isolateRestoreLayout$) {
    this.$_layout$.$layout$(this, this.$_isolatedNodes$[$bufferSpace_gap$$18_numIsolated$$ - 1], $availSpace$$90$$.x, $availSpace$$90$$.y, $availSpace$$90$$.$w$, $availSpace$$90$$.$h$, D.$JSCompiler_alias_TRUE$$)
  }else {
    this.$_root$ && this.$_layout$.$layout$(this, this.$_root$, $availSpace$$90$$.x, $availSpace$$90$$.y, $availSpace$$90$$.$w$, $availSpace$$90$$.$h$, D.$JSCompiler_alias_FALSE$$);
    for(var $i$$591$$ = 0;$i$$591$$ < $bufferSpace_gap$$18_numIsolated$$;$i$$591$$++) {
      this.$_layout$.$layout$(this, this.$_isolatedNodes$[$i$$591$$], $availSpace$$90$$.x, $availSpace$$90$$.y, $availSpace$$90$$.$w$, $availSpace$$90$$.$h$, D.$JSCompiler_alias_TRUE$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$144_i$$592$$) {
  (0,D.$JSCompiler_StaticMethods_RenderBackground$$)(this, $container$$144_i$$592$$);
  this.$_breadcrumbs$ && $container$$144_i$$592$$.$addChild$(this.$_breadcrumbs$);
  this.$_legend$ && ($container$$144_i$$592$$.$addChild$(this.$_legend$), this.$_legend$ = D.$JSCompiler_alias_NULL$$);
  if((0,D.$JSCompiler_StaticMethods_HasValidData$$)(this)) {
    this.$_groupTextLayer$ = new D.$DvtContainer$$(this.$_context$);
    $container$$144_i$$592$$.$addChild$(this.$_groupTextLayer$);
    this.$_isolatedNode$ ? this.$_isolatedNode$.$render$($container$$144_i$$592$$) : this.$_root$.$hasChildren$() ? this.$_root$.$renderChildren$($container$$144_i$$592$$) : this.$_root$.$render$($container$$144_i$$592$$);
    this.$_isolatedLayer$ = new D.$DvtContainer$$(this.$_context$);
    $container$$144_i$$592$$.$addChild$(this.$_isolatedLayer$);
    this.$_selectedLayer$ = new D.$DvtContainer$$(this.$_context$);
    $container$$144_i$$592$$.$addChild$(this.$_selectedLayer$);
    $container$$144_i$$592$$.$addChild$(this.$_groupTextLayer$);
    this.$_hoverEffect$ = new D.$DvtPolyline$$(this.$_context$, []);
    this.$_hoverEffect$.$setVisible$(D.$JSCompiler_alias_FALSE$$);
    this.$_hoverEffect$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
    (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this.$_hoverEffect$);
    $container$$144_i$$592$$.$addChild$(this.$_hoverEffect$);
    for($container$$144_i$$592$$ = 0;$container$$144_i$$592$$ < this.$_isolatedNodes$.length;$container$$144_i$$592$$++) {
      var $displayable$$65$$ = this.$_isolatedNodes$[$container$$144_i$$592$$].$getDisplayable$();
      this.$_isolatedLayer$.$addChild$($displayable$$65$$)
    }
  }else {
    (0,D.$JSCompiler_StaticMethods_RenderEmptyText$$)(this, $container$$144_i$$592$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$() {
  this.$AnimationStopped$ || (this.$_container$.$removeChildren$(), this.$Layout$(new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$)), this.$Render$(this.$_container$), this.$ReselectNodes$());
  D.$DvtBaseTreemap$$.$superclass$.$OnAnimationEnd$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$ReselectNodes$ = function $$JSCompiler_prototypeAlias$$$$ReselectNodes$$() {
  for(var $selectedNodes$$2$$ = this.$_selectionHandler$ ? this.$_selectionHandler$.getSelection() : [], $i$$593$$ = 0;$i$$593$$ < $selectedNodes$$2$$.length;$i$$593$$++) {
    if(0 < this.$_isolatedNodes$.length) {
      var $lastIsolated$$1$$ = this.$_isolatedNodes$[this.$_isolatedNodes$.length - 1];
      ($selectedNodes$$2$$[$i$$593$$] == $lastIsolated$$1$$ || $selectedNodes$$2$$[$i$$593$$].$isDescendantOf$($lastIsolated$$1$$)) && $selectedNodes$$2$$[$i$$593$$].$setSelected$(D.$JSCompiler_alias_TRUE$$)
    }else {
      $selectedNodes$$2$$[$i$$593$$].$setSelected$(D.$JSCompiler_alias_TRUE$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$CreateKeyboardHandler$ = function $$JSCompiler_prototypeAlias$$$$CreateKeyboardHandler$$($manager$$17$$) {
  return new D.$DvtTreemapKeyboardHandler$$($manager$$17$$)
};
D.$JSCompiler_prototypeAlias$$.$CreateEventManager$ = function $$JSCompiler_prototypeAlias$$$$CreateEventManager$$($view$$67$$, $context$$325$$, $callback$$104$$, $callbackObj$$68$$) {
  return new D.$DvtTreemapEventManager$$($view$$67$$, $context$$325$$, $callback$$104$$, $callbackObj$$68$$)
};
D.$JSCompiler_prototypeAlias$$.$GetInitialFocusedItem$ = function $$JSCompiler_prototypeAlias$$$$GetInitialFocusedItem$$($root$$28$$) {
  var $isolatedRootNode$$ = (0,D.$JSCompiler_StaticMethods___getLastIsolatedNode$$)(this);
  return $isolatedRootNode$$ ? (0,D.$JSCompiler_StaticMethods___getDefaultNavigable$$)(this, (0,D.$JSCompiler_StaticMethods_getLeafNodes$$)($isolatedRootNode$$)) : $root$$28$$ ? (0,D.$JSCompiler_StaticMethods___getDefaultNavigable$$)(this, (0,D.$JSCompiler_StaticMethods_getLeafNodes$$)($root$$28$$)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$__moveToSelectedLayer$ = function $$JSCompiler_prototypeAlias$$$$__moveToSelectedLayer$$($rect$$33$$) {
  for(var $newIndex$$5$$ = 0, $numChildren$$8$$ = this.$_selectedLayer$.$getNumChildren$(), $i$$594$$ = 0;$i$$594$$ < $numChildren$$8$$;$i$$594$$++) {
    var $child$$34$$ = this.$_selectedLayer$.$getChildAt$($i$$594$$);
    $rect$$33$$.zIndex > $child$$34$$.zIndex && ($newIndex$$5$$ = $i$$594$$ + 1)
  }
  $newIndex$$5$$ < $numChildren$$8$$ ? this.$_selectedLayer$.$addChildAt$($rect$$33$$, $newIndex$$5$$) : this.$_selectedLayer$.$addChild$($rect$$33$$)
};
D.$JSCompiler_StaticMethods___getLastIsolatedNode$$ = function $$JSCompiler_StaticMethods___getLastIsolatedNode$$$($JSCompiler_StaticMethods___getLastIsolatedNode$self$$) {
  return $JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$ && 0 < $JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$.length ? $JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$[$JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$.length - 1] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__renderIsolateRestore$$ = function $$JSCompiler_StaticMethods__renderIsolateRestore$$$($JSCompiler_StaticMethods__renderIsolateRestore$self$$, $node$$287$$) {
  if($JSCompiler_StaticMethods__renderIsolateRestore$self$$.$AnimationOnDataChange$) {
    for(var $playables$$inline_6292_selectedNodes$$3$$ = $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$_selectionHandler$ ? $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$_selectionHandler$.getSelection() : [], $descendants$$inline_6293_i$$595$$ = 0;$descendants$$inline_6293_i$$595$$ < $playables$$inline_6292_selectedNodes$$3$$.length;$descendants$$inline_6293_i$$595$$++) {
      $playables$$inline_6292_selectedNodes$$3$$[$descendants$$inline_6293_i$$595$$].$setSelected$(D.$JSCompiler_alias_FALSE$$)
    }
    for(var $playables$$inline_6292_selectedNodes$$3$$ = [(0,D.$JSCompiler_StaticMethods__getIsolateAnimation$$)($node$$287$$)], $descendants$$inline_6293_i$$595$$ = (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)($node$$287$$), $i$$inline_6294$$ = 0;$i$$inline_6294$$ < $descendants$$inline_6293_i$$595$$.length;$i$$inline_6294$$++) {
      $playables$$inline_6292_selectedNodes$$3$$.push((0,D.$JSCompiler_StaticMethods__getIsolateAnimation$$)($descendants$$inline_6293_i$$595$$[$i$$inline_6294$$]))
    }
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Animation$ = new D.$DvtParallelPlayable$$($JSCompiler_StaticMethods__renderIsolateRestore$self$$.$_context$, $playables$$inline_6292_selectedNodes$$3$$);
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Animation$.$setOnEnd$($JSCompiler_StaticMethods__renderIsolateRestore$self$$.$OnAnimationEnd$, $JSCompiler_StaticMethods__renderIsolateRestore$self$$);
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$_eventHandler$.$removeListeners$($JSCompiler_StaticMethods__renderIsolateRestore$self$$);
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Animation$.play()
  }else {
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$render$(D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Width$, $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Height$, D.$JSCompiler_alias_TRUE$$)
  }
};
D.$JSCompiler_StaticMethods___getDefaultNavigable$$ = function $$JSCompiler_StaticMethods___getDefaultNavigable$$$($JSCompiler_StaticMethods___getDefaultNavigable$self$$, $navigableItems$$2$$) {
  var $keyboardHandler$$2$$ = $JSCompiler_StaticMethods___getDefaultNavigable$self$$.$_eventHandler$.$KeyboardHandler$;
  return $keyboardHandler$$2$$ ? $keyboardHandler$$2$$.$getDefaultNavigable$($navigableItems$$2$$) : $navigableItems$$2$$ && 0 < $navigableItems$$2$$.length ? $navigableItems$$2$$[0] : D.$JSCompiler_alias_NULL$$
};
D.$DvtTreemap$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtTreemap", D.$DvtTreemap$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTreemap$$, D.$DvtBaseTreemap$$, "DvtTreemap");
D.$DvtTreemap$$.newInstance = function $$DvtTreemap$$$newInstance$($context$$322$$, $callback$$101$$, $callbackObj$$65$$) {
  var $component$$21$$ = new D.$DvtTreemap$$;
  $component$$21$$.Init($context$$322$$, $callback$$101$$, $callbackObj$$65$$);
  return $component$$21$$
};
D.$DvtTreemap$$.getDefaults = function $$DvtTreemap$$$getDefaults$($skin$$5$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtTreemapDefaults$$, $skin$$5$$)
};
D.$DvtTreemap$$.prototype.$render$ = function $$DvtTreemap$$$$$render$$($options$$227_xmlString$$12$$, $width$$130$$, $height$$116$$, $bSkipXml$$) {
  $options$$227_xmlString$$12$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($options$$227_xmlString$$12$$), (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this));
  $options$$227_xmlString$$12$$ = $bSkipXml$$ ? D.$JSCompiler_alias_NULL$$ : (new D.$DvtTreemapJsonUtils$$(this.$_context$)).$toXml$(this.$Options$);
  D.$DvtTreemap$$.$superclass$.$render$.call(this, $options$$227_xmlString$$12$$, $width$$130$$, $height$$116$$)
};
D.$DvtTreemap$$.prototype.render = D.$DvtTreemap$$.prototype.$render$;
D.$DvtTreemap$$.prototype.$getBundle$ = function $$DvtTreemap$$$$$getBundle$$() {
  this.$_bundle$ || (this.$_bundle$ = new D.$DvtTreemapBundle$$);
  return this.$_bundle$
};
D.$DvtTreemapParser$$ = function $$DvtTreemapParser$$$($treemap$$1$$) {
  this.Init($treemap$$1$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapParser$$, D.$DvtBaseTreeParser$$, "DvtTreemapParser");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTreemapParser$$.prototype;
D.$JSCompiler_prototypeAlias$$.$CreateNode$ = function $$JSCompiler_prototypeAlias$$$$CreateNode$$($treeView$$8$$, $props$$6$$, $templates$$4$$) {
  return new D.$DvtTreemapNode$$($treeView$$8$$, $props$$6$$, $templates$$4$$)
};
D.$JSCompiler_prototypeAlias$$.$ParseRootAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseRootAttributes$$($xmlNode$$25$$) {
  var $ret$$24$$ = D.$DvtTreemapParser$$.$superclass$.$ParseRootAttributes$.call(this, $xmlNode$$25$$), $layoutStr$$ = $xmlNode$$25$$.$getAttr$("layout");
  $ret$$24$$.$layout$ = "h" == $layoutStr$$ ? new D.$DvtSliceAndDiceLayout$$(D.$JSCompiler_alias_TRUE$$) : "v" == $layoutStr$$ ? new D.$DvtSliceAndDiceLayout$$(D.$JSCompiler_alias_FALSE$$) : new D.$DvtSquarifyingLayout$$;
  $ret$$24$$.$groupGaps$ = $xmlNode$$25$$.$getAttr$("gg");
  $ret$$24$$.$groupGaps$ || ($ret$$24$$.$groupGaps$ = "o");
  $ret$$24$$.$isolateRowKey$ = $xmlNode$$25$$.$getAttr$("irk");
  this.$_isolateRowKey$ = $ret$$24$$.$isolateRowKey$;
  return $ret$$24$$
};
D.$JSCompiler_prototypeAlias$$.$ParseNodeAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseNodeAttributes$$($headerLabelStyle_xmlNode$$26$$) {
  var $ret$$25$$ = D.$DvtTreemapParser$$.$superclass$.$ParseNodeAttributes$.call(this, $headerLabelStyle_xmlNode$$26$$);
  $ret$$25$$.$groupLabelDisplay$ = $headerLabelStyle_xmlNode$$26$$.$getAttr$("gld");
  $ret$$25$$.$labelHalign$ = $headerLabelStyle_xmlNode$$26$$.$getAttr$("ha");
  $ret$$25$$.$labelValign$ = $headerLabelStyle_xmlNode$$26$$.$getAttr$("va");
  $ret$$25$$.$isolate$ = $headerLabelStyle_xmlNode$$26$$.$getAttr$("hi");
  $ret$$25$$.$headerUseNodeColor$ = $headerLabelStyle_xmlNode$$26$$.$getAttr$("unc");
  $ret$$25$$.$headerHalign$ = $headerLabelStyle_xmlNode$$26$$.$getAttr$("hha");
  if($headerLabelStyle_xmlNode$$26$$ = $headerLabelStyle_xmlNode$$26$$.$getAttr$("hls")) {
    $ret$$25$$.$headerLabelStyle$ = new D.$DvtCSSStyle$$($headerLabelStyle_xmlNode$$26$$)
  }
  this.$_isolateRowKey$ == $ret$$25$$.id && ($ret$$25$$.$isIsolated$ = D.$JSCompiler_alias_TRUE$$);
  return $ret$$25$$
};
D.$JSCompiler_prototypeAlias$$.$ParseAdditionalNodeStyles$ = function $$JSCompiler_prototypeAlias$$$$ParseAdditionalNodeStyles$$($nodeStyle$$2$$, $nodeHoverStyle$$2$$, $nodeSelectedStyle$$2$$, $styles$$3$$) {
  $styles$$3$$.NODE_HOVER_COLOR = $nodeHoverStyle$$2$$.$getStyle$("border-color");
  $styles$$3$$.NODE_SELECTED_OUTER_COLOR = $nodeSelectedStyle$$2$$.$getStyle$("-tr-outer-color");
  $styles$$3$$.NODE_SELECTED_INNER_COLOR = $nodeSelectedStyle$$2$$.$getStyle$("-tr-inner-color")
};
D.$JSCompiler_prototypeAlias$$.$ParseAdditionalStyles$ = function $$JSCompiler_prototypeAlias$$$$ParseAdditionalStyles$$($xmlNode$$27$$, $styles$$4$$) {
  var $nodeHeaderDrillStyle_nodeHeaderStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$27$$.$getAttr$("nodeHeader"));
  $styles$$4$$.HEADER_TEXT_DEFAULT_STYLE = $nodeHeaderDrillStyle_nodeHeaderStyle$$;
  $styles$$4$$.HEADER_BACKGROUND_STYLE = $nodeHeaderDrillStyle_nodeHeaderStyle$$;
  var $nodeHeaderHoverStyle$$ = $nodeHeaderDrillStyle_nodeHeaderStyle$$.clone().$merge$(new D.$DvtCSSStyle$$($xmlNode$$27$$.$getAttr$("nodeHeader-hover")));
  $styles$$4$$.HEADER_TEXT_HOVER_DEFAULT_STYLE = $nodeHeaderHoverStyle$$;
  $styles$$4$$.HEADER_BACKGROUND_HOVER_STYLE = $nodeHeaderHoverStyle$$;
  var $nodeHeaderSelectedStyle$$ = $nodeHeaderDrillStyle_nodeHeaderStyle$$.clone().$merge$(new D.$DvtCSSStyle$$($xmlNode$$27$$.$getAttr$("nodeHeader-selected")));
  $styles$$4$$.HEADER_TEXT_SELECTED_DEFAULT_STYLE = $nodeHeaderSelectedStyle$$;
  $styles$$4$$.HEADER_BACKGROUND_SELECTED_STYLE = $nodeHeaderSelectedStyle$$;
  $nodeHeaderDrillStyle_nodeHeaderStyle$$ = $nodeHeaderDrillStyle_nodeHeaderStyle$$.clone().$merge$(new D.$DvtCSSStyle$$($xmlNode$$27$$.$getAttr$("nodeHeaderDrill")));
  $styles$$4$$.HEADER_DRILL_TEXT_DEFAULT_STYLE = $nodeHeaderDrillStyle_nodeHeaderStyle$$;
  $styles$$4$$.HEADER_DRILL_TEXT_HOVER_DEFAULT_STYLE = $nodeHeaderDrillStyle_nodeHeaderStyle$$.clone().$merge$(new D.$DvtCSSStyle$$($xmlNode$$27$$.$getAttr$("nodeHeaderDrill-hover")));
  $styles$$4$$.HEADER_DRILL_TEXT_SELECTED_DEFAULT_STYLE = $nodeHeaderDrillStyle_nodeHeaderStyle$$.clone().$merge$(new D.$DvtCSSStyle$$($xmlNode$$27$$.$getAttr$("nodeHeaderDrill-selected")));
  $styles$$4$$.HEADER_HOVER_OUTER_COLOR_STYLE = $nodeHeaderHoverStyle$$.$getStyle$("-tr-outer-color");
  $styles$$4$$.HEADER_HOVER_INNER_COLOR_STYLE = $nodeHeaderHoverStyle$$.$getStyle$("-tr-inner-color");
  $styles$$4$$.HEADER_SELECTED_OUTER_COLOR_STYLE = $nodeHeaderSelectedStyle$$.$getStyle$("-tr-outer-color");
  $styles$$4$$.HEADER_SELECTED_INNER_COLOR_STYLE = $nodeHeaderSelectedStyle$$.$getStyle$("-tr-inner-color")
};
D.$DvtTreemapNode$$ = function $$DvtTreemapNode$$$($treemap$$, $props$$5$$, $templates$$3$$) {
  this.Init($treemap$$, $props$$5$$, $templates$$3$$);
  this.$_labelDisplay$ = $props$$5$$.$labelDisplay$ ? $props$$5$$.$labelDisplay$ : "n";
  this.$_groupLabelDisplay$ = $props$$5$$.$groupLabelDisplay$ ? $props$$5$$.$groupLabelDisplay$ : "h";
  this.$_labelHalign$ = $props$$5$$.$labelHalign$ ? $props$$5$$.$labelHalign$ : "c";
  this.$_labelValign$ = $props$$5$$.$labelValign$ ? $props$$5$$.$labelValign$ : "c";
  this.$_headerHalign$ = $props$$5$$.$headerHalign$ ? $props$$5$$.$headerHalign$ : "s";
  this.$_headerLabelStyle$ = $props$$5$$.$headerLabelStyle$;
  this.$_headerUseNodeColor$ = "on" == $props$$5$$.$headerUseNodeColor$;
  this.$_isolate$ = $props$$5$$.$isolate$ ? $props$$5$$.$isolate$ : "on";
  this.$_isIsolated$ = $props$$5$$.$isIsolated$
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapNode$$, D.$DvtBaseTreeNode$$, "DvtTreemapNode");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTreemapNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($container$$11_dim$$8_dims$$4_text$$inline_2273_transX$$) {
  if(this.$_hasLayout$) {
    this.$_shape$ = this.$_createShapeNode$();
    $container$$11_dim$$8_dims$$4_text$$inline_2273_transX$$.$addChild$(this.$_shape$);
    var $afRoot_template$$2$$;
    this.$hasChildren$() ? (this.$_childNodeGroup$ = new D.$DvtContainer$$(this.$_view$.$_context$), this.$_shape$.$addChild$(this.$_childNodeGroup$), this.$renderChildren$(this.$_childNodeGroup$)) : $afRoot_template$$2$$ = this.$_template$;
    if($afRoot_template$$2$$) {
      var $afContext$$4$$ = this.$_view$.$_afContext$;
      $afContext$$4$$.$_elContext$ = this.$_elAttributes$;
      var $aw$$2$$ = this.$_width$ - 8 - 2, $ah$$ = this.$_height$ - 4 - 2;
      0 < $aw$$2$$ && 0 < $ah$$ && ((0,D.$JSCompiler_StaticMethods_setAvailableWidth$$)($afContext$$4$$, $aw$$2$$), (0,D.$JSCompiler_StaticMethods_setAvailableHeight$$)($afContext$$4$$, $ah$$), $afContext$$4$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this)), this.$_contentRoot$ = $afRoot_template$$2$$ = D.$DvtAfComponentFactory$$.$parseAndLayout$($afContext$$4$$, $afRoot_template$$2$$, this.$_shape$), (0,D.$DvtAgent$isRightToLeft$$)($container$$11_dim$$8_dims$$4_text$$inline_2273_transX$$.$_context$) ? 
      ($container$$11_dim$$8_dims$$4_text$$inline_2273_transX$$ = $afRoot_template$$2$$.$getDimensions$(), $container$$11_dim$$8_dims$$4_text$$inline_2273_transX$$ = this.$_x$ + this.$_width$ - 4 - 1 - $container$$11_dim$$8_dims$$4_text$$inline_2273_transX$$.$w$) : $container$$11_dim$$8_dims$$4_text$$inline_2273_transX$$ = this.$_x$ + 4 + 1, (0,D.$JSCompiler_StaticMethods_setTranslate$$)($afRoot_template$$2$$, $container$$11_dim$$8_dims$$4_text$$inline_2273_transX$$, this.$_y$ + 2 + 1))
    }else {
      this.$_text$ = this.$_createTextNode$(this.$_shape$), this.$_text$ != D.$JSCompiler_alias_NULL$$ && (this.$_pattern$ && "h" != this.$_textStyle$) && ($container$$11_dim$$8_dims$$4_text$$inline_2273_transX$$ = this.$_text$.$measureDimensions$(), this.$_textBackground$ = new D.$DvtRect$$(this.$_view$.$_context$, $container$$11_dim$$8_dims$$4_text$$inline_2273_transX$$.x, $container$$11_dim$$8_dims$$4_text$$inline_2273_transX$$.y, $container$$11_dim$$8_dims$$4_text$$inline_2273_transX$$.$w$, $container$$11_dim$$8_dims$$4_text$$inline_2273_transX$$.$h$), 
      this.$_textBackground$.$setSolidFill$("#FFFFFF"), this.$_textBackground$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), this.$_shape$.$addChild$(this.$_textBackground$), $container$$11_dim$$8_dims$$4_text$$inline_2273_transX$$ = this.$_text$, "n" == this.$_textStyle$ && this.$hasChildren$() ? this.$_view$.$_groupTextLayer$.$addChild$($container$$11_dim$$8_dims$$4_text$$inline_2273_transX$$) : this.$_shape$.$addChild$($container$$11_dim$$8_dims$$4_text$$inline_2273_transX$$))
    }
    this.$_shape$.$setAriaRole$("img");
    this.$UpdateAriaLabel$()
  }
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($parentNode$$14_selected$$2_x$$87$$) {
  D.$DvtTreemapNode$$.$superclass$.$setSelected$.call(this, $parentNode$$14_selected$$2_x$$87$$);
  if(this.$_shape$) {
    if(this.$isSelected$()) {
      $parentNode$$14_selected$$2_x$$87$$ = this.$_x$;
      var $y$$67$$ = this.$_y$ + 1, $w$$12$$ = this.$_width$ - 1, $h$$9$$ = this.$_height$ - 1;
      (0,D.$DvtAgent$isPlatformWebkit$$)() && ($y$$67$$ -= 1);
      (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionOuter$);
      (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionInner$);
      this.$_selectionInner$ = this.$_selectionOuter$ = D.$JSCompiler_alias_NULL$$;
      this.$_selectionOuter$ = new D.$DvtRect$$(this.$_view$.$_context$, $parentNode$$14_selected$$2_x$$87$$, $y$$67$$, $w$$12$$, $h$$9$$);
      this.$_selectionOuter$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
      this.$_selectionOuter$.$setFill$(D.$JSCompiler_alias_NULL$$);
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this.$_selectionOuter$);
      this.$_shape$.$addChild$(this.$_selectionOuter$);
      this.$_selectionInner$ = new D.$DvtRect$$(this.$_view$.$_context$, $parentNode$$14_selected$$2_x$$87$$ + 1, $y$$67$$ + 1, $w$$12$$ - 2, $h$$9$$ - 2);
      this.$_selectionInner$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
      this.$_selectionInner$.$setFill$(D.$JSCompiler_alias_NULL$$);
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this.$_selectionInner$);
      this.$_shape$.$addChild$(this.$_selectionInner$);
      "h" == this.$_textStyle$ ? (this.$IsHover$ || this.$isShowingKeyboardFocusEffect$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, this.$_shape$, this.$_innerShape$, "background-color:#C4DCFF;", "HEADER_BACKGROUND_HOVER_STYLE") : ((0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, this.$_shape$, this.$_innerShape$, "background-color:#9CACC9;", "HEADER_BACKGROUND_SELECTED_STYLE"), this.$_text$ && (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_TEXT_SELECTED_DEFAULT_STYLE", 
      "#003D5B")), this.$_selectionOuter$.$setSolidStroke$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#000000", "HEADER_SELECTED_OUTER_COLOR_STYLE"), 1), this.$_selectionInner$.$setSolidStroke$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#FFFFFF", "HEADER_SELECTED_INNER_COLOR_STYLE"), 1)) : (this.$_selectionOuter$.$setSolidStroke$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#000000", "NODE_SELECTED_OUTER_COLOR"), 1), this.$_selectionInner$.$setSolidStroke$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, 
      "#FFFFFF", "NODE_SELECTED_INNER_COLOR"), 1), !(0,D.$DvtAgent$isBrowserSafari$$)() && !(0,D.$DvtAgent$isPlatformGecko$$)() && (0,D.$JSCompiler_StaticMethods_addDrawEffect$$)(this.$_shape$, D.$DvtBaseTreeNode$__NODE_SELECTED_SHADOW$$), this.$_view$.$__moveToSelectedLayer$(this.$_shape$))
    }else {
      (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionInner$), this.$_selectionInner$ = D.$JSCompiler_alias_NULL$$, "h" == this.$_textStyle$ ? (this.$IsHover$ || this.$isShowingKeyboardFocusEffect$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, this.$_shape$, this.$_innerShape$, "background-color:#C4DCFF;", "HEADER_BACKGROUND_HOVER_STYLE") : ((0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, this.$_shape$, this.$_innerShape$, "background-color:#FFFFFF;border-color:#E1E6EE;", 
      "HEADER_BACKGROUND_STYLE"), this.$_text$ && (this.$isDrillReplaceEnabled$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_TEXT_DEFAULT_STYLE", "#003286") : (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_TEXT_DEFAULT_STYLE", "#003D5B"))), this.$_selectionOuter$ && (this.$IsHover$ || this.$isShowingKeyboardFocusEffect$() ? this.$_selectionOuter$.$setSolidStroke$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, 
      "#00AEFF", "HEADER_HOVER_OUTER_COLOR_STYLE"), "1") : ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionOuter$), this.$_selectionOuter$ = D.$JSCompiler_alias_NULL$$))) : ((0,D.$JSCompiler_StaticMethods_removeAllDrawEffects$$)(this.$_shape$), this.$_selectionOuter$ && ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionOuter$), this.$_selectionOuter$ = D.$JSCompiler_alias_NULL$$), ($parentNode$$14_selected$$2_x$$87$$ = this.$_parent$) && $parentNode$$14_selected$$2_x$$87$$.$_childNodeGroup$ && 
      $parentNode$$14_selected$$2_x$$87$$.$_childNodeGroup$.$addChild$(this.$_shape$))
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  if(this.$_shape$ && this.$_hasLayout$) {
    var $isolatedNode_points$$ = (0,D.$JSCompiler_StaticMethods___getLastIsolatedNode$$)(this.$_view$);
    if(!($isolatedNode_points$$ != D.$JSCompiler_alias_NULL$$ && $isolatedNode_points$$ != this && !this.$isDescendantOf$($isolatedNode_points$$))) {
      var $isolatedNode_points$$ = [], $stroke$$21_stroke$$inline_2277_y$$68_y1$$6$$, $JSCompiler_StaticMethods___showHoverEffect$self$$inline_2275_x$$88_x1$$6$$, $w$$13_x2$$4$$, $h$$10_y2$$4$$;
      "h" == this.$_textStyle$ ? ((0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, this.$_shape$, this.$_innerShape$, "background-color:#C4DCFF;", "HEADER_BACKGROUND_HOVER_STYLE"), this.$_selectionOuter$ || ($JSCompiler_StaticMethods___showHoverEffect$self$$inline_2275_x$$88_x1$$6$$ = this.$_x$, $stroke$$21_stroke$$inline_2277_y$$68_y1$$6$$ = this.$_y$ + 1, $w$$13_x2$$4$$ = this.$_width$ - 1, $h$$10_y2$$4$$ = this.$_height$ - 1, (0,D.$DvtAgent$isPlatformWebkit$$)() && ($stroke$$21_stroke$$inline_2277_y$$68_y1$$6$$ -= 
      1), this.$_selectionOuter$ = new D.$DvtRect$$(this.$_view$.$_context$, $JSCompiler_StaticMethods___showHoverEffect$self$$inline_2275_x$$88_x1$$6$$, $stroke$$21_stroke$$inline_2277_y$$68_y1$$6$$, $w$$13_x2$$4$$, $h$$10_y2$$4$$), this.$_selectionOuter$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), this.$_selectionOuter$.$setFill$(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this.$_selectionOuter$), this.$_shape$.$addChild$(this.$_selectionOuter$)), this.$isSelected$() ? 
      this.$_selectionOuter$.$setSolidStroke$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#000000", "HEADER_SELECTED_OUTER_COLOR_STYLE"), D.$DvtTreemapNode$$.$GROUP_SELECTED_OUTER_OPACITY$) : this.$_selectionOuter$.$setSolidStroke$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#00AEFF", "HEADER_HOVER_OUTER_COLOR_STYLE"), "1"), $JSCompiler_StaticMethods___showHoverEffect$self$$inline_2275_x$$88_x1$$6$$ = this.$_x$ + 1.5 + 1, $w$$13_x2$$4$$ = this.$_x$ + this.$_width$ - 1.5 - 
      1, $stroke$$21_stroke$$inline_2277_y$$68_y1$$6$$ = this.$_y$ + this.$_titleBarHeight$, $h$$10_y2$$4$$ = this.$_y$ + this.$_height$ - 1.5 - 1, $isolatedNode_points$$.push($w$$13_x2$$4$$, $stroke$$21_stroke$$inline_2277_y$$68_y1$$6$$, $w$$13_x2$$4$$, $h$$10_y2$$4$$, $JSCompiler_StaticMethods___showHoverEffect$self$$inline_2275_x$$88_x1$$6$$, $h$$10_y2$$4$$, $JSCompiler_StaticMethods___showHoverEffect$self$$inline_2275_x$$88_x1$$6$$, $stroke$$21_stroke$$inline_2277_y$$68_y1$$6$$), $stroke$$21_stroke$$inline_2277_y$$68_y1$$6$$ = 
      new D.$DvtSolidStroke$$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#C4DCFF", "HEADER_HOVER_INNER_COLOR_STYLE"), 0.8, 3), this.$_text$ && (this.$isDrillReplaceEnabled$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_DRILL_TEXT_HOVER_DEFAULT_STYLE", "#000000") : (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_TEXT_HOVER_DEFAULT_STYLE", "#000000"))) : ($JSCompiler_StaticMethods___showHoverEffect$self$$inline_2275_x$$88_x1$$6$$ = 
      this.$_x$ + 1, $w$$13_x2$$4$$ = this.$_x$ + this.$_width$ - 1, $stroke$$21_stroke$$inline_2277_y$$68_y1$$6$$ = this.$_y$ + 1, $h$$10_y2$$4$$ = this.$_y$ + this.$_height$ - 1, $isolatedNode_points$$.push(this.$_x$, $stroke$$21_stroke$$inline_2277_y$$68_y1$$6$$, $w$$13_x2$$4$$, $stroke$$21_stroke$$inline_2277_y$$68_y1$$6$$, $w$$13_x2$$4$$, $h$$10_y2$$4$$, $JSCompiler_StaticMethods___showHoverEffect$self$$inline_2275_x$$88_x1$$6$$, $h$$10_y2$$4$$, $JSCompiler_StaticMethods___showHoverEffect$self$$inline_2275_x$$88_x1$$6$$, 
      $stroke$$21_stroke$$inline_2277_y$$68_y1$$6$$), $stroke$$21_stroke$$inline_2277_y$$68_y1$$6$$ = new D.$DvtSolidStroke$$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#FFFFFF", "NODE_HOVER_COLOR"), 1, 2));
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_2275_x$$88_x1$$6$$ = this.$_view$;
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_2275_x$$88_x1$$6$$.$_hoverEffect$.$setPoints$($isolatedNode_points$$);
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_2275_x$$88_x1$$6$$.$_hoverEffect$.$setStroke$($stroke$$21_stroke$$inline_2277_y$$68_y1$$6$$);
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_2275_x$$88_x1$$6$$.$_hoverEffect$.$setVisible$(D.$JSCompiler_alias_TRUE$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_shape$ && this.$_hasLayout$ && ("h" == this.$_textStyle$ && (this.$isSelected$() ? ((0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, this.$_shape$, this.$_innerShape$, "background-color:#9CACC9;", "HEADER_BACKGROUND_SELECTED_STYLE"), this.$_selectionOuter$.$setSolidStroke$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#000000", "HEADER_SELECTED_OUTER_COLOR_STYLE"), D.$DvtTreemapNode$$.$GROUP_SELECTED_OUTER_OPACITY$), this.$_text$ && (this.$isDrillReplaceEnabled$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, 
  this.$_text$, "HEADER_DRILL_TEXT_SELECTED_DEFAULT_STYLE", "#003D5B") : (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_TEXT_SELECTED_DEFAULT_STYLE", "#003D5B"))) : ((0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, this.$_shape$, this.$_innerShape$, "background-color:#FFFFFF;border-color:#E1E6EE;", "HEADER_BACKGROUND_STYLE"), this.$_selectionOuter$ && (this.$_shape$.removeChild(this.$_selectionOuter$), this.$_selectionOuter$ = D.$JSCompiler_alias_NULL$$), 
  this.$_text$ && (this.$isDrillReplaceEnabled$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_DRILL_TEXT_DEFAULT_STYLE", "#003286") : (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_TEXT_DEFAULT_STYLE", "#003D5B")))), this.$_view$.$_hoverEffect$.$setVisible$(D.$JSCompiler_alias_FALSE$$))
};
D.$JSCompiler_prototypeAlias$$.$isIsolateEnabled$ = function $$JSCompiler_prototypeAlias$$$$isIsolateEnabled$$() {
  return"on" == this.$_isolate$ && "h" == this.$_textStyle$
};
D.$JSCompiler_prototypeAlias$$.$getPopupBounds$ = function $$JSCompiler_prototypeAlias$$$$getPopupBounds$$($behavior$$2$$) {
  return!$behavior$$2$$ || !$behavior$$2$$.$getAlign$() ? D.$DvtTreemapNode$$.$superclass$.$getPopupBounds$.call(this, $behavior$$2$$) : new D.$DvtRectangle$$(this.$_x$, this.$_y$, this.$_width$, this.$_height$)
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$136_lastChild_next$$) {
  var $keyCode$$11_navigables$$2_parent$$12$$;
  if($event$$136_lastChild_next$$.type == D.$DvtMouseEvent$CLICK$$) {
    return D.$DvtTreemapNode$$.$superclass$.$getNextNavigable$.call(this, $event$$136_lastChild_next$$)
  }
  $keyCode$$11_navigables$$2_parent$$12$$ = $event$$136_lastChild_next$$.keyCode;
  if(32 == $keyCode$$11_navigables$$2_parent$$12$$ && $event$$136_lastChild_next$$.ctrlKey) {
    return this
  }
  if(38 == $keyCode$$11_navigables$$2_parent$$12$$ && $event$$136_lastChild_next$$.altKey || 221 == $keyCode$$11_navigables$$2_parent$$12$$) {
    ($keyCode$$11_navigables$$2_parent$$12$$ = this.$_parent$) && $keyCode$$11_navigables$$2_parent$$12$$.getId() != this.$_view$.$_root$.getId() ? ($event$$136_lastChild_next$$ = $keyCode$$11_navigables$$2_parent$$12$$, (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($keyCode$$11_navigables$$2_parent$$12$$)) : $event$$136_lastChild_next$$ = this
  }else {
    if(40 == $keyCode$$11_navigables$$2_parent$$12$$ && $event$$136_lastChild_next$$.altKey || 219 == $keyCode$$11_navigables$$2_parent$$12$$) {
      $event$$136_lastChild_next$$ = ($event$$136_lastChild_next$$ = this.$_lastVisitedChild$) ? $event$$136_lastChild_next$$ : this.$hasChildren$() ? (0,D.$JSCompiler_StaticMethods___getDefaultNavigable$$)(this.$_view$, this.$getChildNodes$()) : this
    }else {
      var $root$$19$$ = (0,D.$JSCompiler_StaticMethods___getLastIsolatedNode$$)(this.$_view$), $depth$$10$$ = 0;
      if($root$$19$$) {
        if(this == $root$$19$$) {
          $depth$$10$$ = 0
        }else {
          $keyCode$$11_navigables$$2_parent$$12$$ = this.$_parent$;
          for($depth$$10$$ = 1;$root$$19$$ != $keyCode$$11_navigables$$2_parent$$12$$;) {
            $depth$$10$$++, $keyCode$$11_navigables$$2_parent$$12$$ = $keyCode$$11_navigables$$2_parent$$12$$.$_parent$
          }
        }
      }else {
        for($root$$19$$ = this;$root$$19$$.$_parent$;) {
          $root$$19$$ = $root$$19$$.$_parent$
        }
        $depth$$10$$ = (0,D.$JSCompiler_StaticMethods_GetDepth$$)(this)
      }
      $keyCode$$11_navigables$$2_parent$$12$$ = (0,D.$JSCompiler_StaticMethods_GetNodesAtDepth$$)(this, $root$$19$$, $depth$$10$$);
      $event$$136_lastChild_next$$ = (0,D.$DvtKeyboardHandler$getNextNavigable$$)(this, $event$$136_lastChild_next$$, $keyCode$$11_navigables$$2_parent$$12$$)
    }
  }
  (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($event$$136_lastChild_next$$);
  return $event$$136_lastChild_next$$
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return new D.$DvtRectangle$$(this.$_x$, this.$_y$, this.$_width$, this.$_height$)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_shape$ ? this.$_shape$.$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setLayoutParams$ = function $$JSCompiler_prototypeAlias$$$$setLayoutParams$$($headerLabelHeight_text$$24_x$$89_xx$$6$$, $y$$69_yy$$6$$, $width$$35_ww$$36$$, $height$$38_hh$$26$$) {
  if(!(0 >= $width$$35_ww$$36$$ || 0 >= $height$$38_hh$$26$$)) {
    this.$_hasLayout$ = D.$JSCompiler_alias_TRUE$$;
    this.$_oldState$ = this.$GetAnimationParams$();
    this.$_x$ = $headerLabelHeight_text$$24_x$$89_xx$$6$$;
    this.$_y$ = $y$$69_yy$$6$$;
    this.$_width$ = $width$$35_ww$$36$$ ? $width$$35_ww$$36$$ : 0;
    this.$_height$ = $height$$38_hh$$26$$ ? $height$$38_hh$$26$$ : 0;
    this.$_textStyle$ = this.$hasChildren$() ? this.$_groupLabelDisplay$ : this.$_labelDisplay$;
    this.$_textStr$ || (this.$_textStyle$ = "o");
    if("h" == this.$_textStyle$) {
      this.$_titleBarHeight$ = 15;
      $headerLabelHeight_text$$24_x$$89_xx$$6$$ = new D.$DvtOutputText$$(this.$_view$.$_context$, this.$_textStr$);
      $headerLabelHeight_text$$24_x$$89_xx$$6$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this));
      (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, $headerLabelHeight_text$$24_x$$89_xx$$6$$, "HEADER_TEXT_DEFAULT_STYLE", "#003D5B");
      $headerLabelHeight_text$$24_x$$89_xx$$6$$ = D.$DvtTextUtils$$.$guessTextDimensions$($headerLabelHeight_text$$24_x$$89_xx$$6$$).$h$;
      this.$_titleBarHeight$ = window.Math.max(this.$_titleBarHeight$, $headerLabelHeight_text$$24_x$$89_xx$$6$$);
      this.$isIsolateEnabled$() && (this.$_titleBarHeight$ = window.Math.max(this.$_titleBarHeight$, 15));
      $headerLabelHeight_text$$24_x$$89_xx$$6$$ = this.$_x$;
      $y$$69_yy$$6$$ = this.$_y$ + this.$_titleBarHeight$;
      $width$$35_ww$$36$$ = this.$_width$;
      $height$$38_hh$$26$$ = this.$_height$ - this.$_titleBarHeight$;
      if(0 <= $width$$35_ww$$36$$ && 0 <= $height$$38_hh$$26$$) {
        return new D.$DvtRectangle$$($headerLabelHeight_text$$24_x$$89_xx$$6$$, $y$$69_yy$$6$$, $width$$35_ww$$36$$, $height$$38_hh$$26$$)
      }
      this.$_textStyle$ = D.$JSCompiler_alias_NULL$$
    }
    return new D.$DvtRectangle$$(this.$_x$, this.$_y$, this.$_width$, this.$_height$)
  }
};
D.$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$91$$, $y$$71$$) {
  return $x$$91$$ >= this.$_x$ && $x$$91$$ <= this.$_x$ + this.$_width$ && $y$$71$$ >= this.$_y$ && $y$$71$$ <= this.$_y$ + this.$_height$
};
D.$JSCompiler_prototypeAlias$$.$GetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$GetAnimationParams$$() {
  var $r$$17$$ = D.$DvtColorUtils$$.$getRed$(this.$_color$), $g$$ = D.$DvtColorUtils$$.$getGreen$(this.$_color$), $b$$8$$ = D.$DvtColorUtils$$.$getBlue$(this.$_color$);
  return[this.$_x$, this.$_y$, this.$_width$, this.$_height$, $r$$17$$, $g$$, $b$$8$$, this.$hasChildren$() ? 0 : window.Math.random()]
};
D.$JSCompiler_prototypeAlias$$.$SetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$SetAnimationParams$$($params$$20$$) {
  this.$setLayoutParams$($params$$20$$[0], $params$$20$$[1], $params$$20$$[2], $params$$20$$[3]);
  this.$_color$ = D.$DvtColorUtils$$.$makeRGB$(window.Math.round($params$$20$$[4]), window.Math.round($params$$20$$[5]), window.Math.round($params$$20$$[6]));
  this.$_shape$ && ((0,D.$JSCompiler_StaticMethods_setRect$$)(this.$_shape$, this.$_x$, this.$_y$, this.$_width$, this.$_height$), this.$_innerShape$ && (0,D.$JSCompiler_StaticMethods_setRect$$)(this.$_innerShape$, this.$_x$ + 1, this.$_y$ + 1, this.$_width$ - 2, this.$_height$ - 2), ("h" != this.$_textStyle$ || this.$_headerUseNodeColor$) && this.$_shape$.$setFill$(this.$GetFill$()), this.$isSelected$() && this.$setSelected$(D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, 
  this.$_fillShape$), (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_topLeftShape$), this.$_topLeftShape$ = this.$_fillShape$ = D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$)(this), this.$_template$ ? ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_contentRoot$), this.$_contentRoot$ = D.$JSCompiler_alias_NULL$$) : ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_textBackground$), this.$_textBackground$ = 
  D.$JSCompiler_alias_NULL$$, this.$_text$ && this.$_text$.getParent().removeChild(this.$_text$), this.$_text$ = this.$_createTextNode$(this.$_shape$)))
};
D.$JSCompiler_StaticMethods__getIsolateAnimation$$ = function $$JSCompiler_StaticMethods__getIsolateAnimation$$$($JSCompiler_StaticMethods__getIsolateAnimation$self$$) {
  if($JSCompiler_StaticMethods__getIsolateAnimation$self$$.$_oldState$) {
    var $playable$$ = new D.$DvtCustomAnimation$$($JSCompiler_StaticMethods__getIsolateAnimation$self$$.$_view$.$_context$, $JSCompiler_StaticMethods__getIsolateAnimation$self$$, 0.3);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$.$_animator$, "typeNumberArray", $JSCompiler_StaticMethods__getIsolateAnimation$self$$, $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$GetAnimationParams$, $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$SetAnimationParams$, $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$GetAnimationParams$());
    $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$SetAnimationParams$($JSCompiler_StaticMethods__getIsolateAnimation$self$$.$_oldState$);
    return $playable$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTreemapNode$$.prototype.$animateUpdate$ = function $$DvtTreemapNode$$$$$animateUpdate$$($handler$$7$$, $oldNode$$1$$) {
  return 0 == (0,D.$JSCompiler_StaticMethods_GetDepth$$)(this) || $oldNode$$1$$.$_hasLayout$ && 0 < $oldNode$$1$$.$_width$ && 0 < $oldNode$$1$$.$_height$ ? D.$DvtTreemapNode$$.$superclass$.$animateUpdate$.call(this, $handler$$7$$, $oldNode$$1$$) : this.$animateInsert$($handler$$7$$)
};
D.$DvtTreemapNode$$.prototype.$_createShapeNode$ = function $$DvtTreemapNode$$$$$_createShapeNode$$() {
  var $context$$73$$ = this.$_view$.$_context$, $shape$$8$$;
  if("h" == this.$_textStyle$) {
    $shape$$8$$ = new D.$DvtRect$$($context$$73$$, this.$_x$, this.$_y$, this.$_width$, this.$_height$), this.$_innerShape$ = new D.$DvtRect$$($context$$73$$, this.$_x$ + 1, this.$_y$ + 1, this.$_width$ - 2, this.$_height$ - 2), (0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, $shape$$8$$, this.$_innerShape$, "background-color:#FFFFFF;border-color:#E1E6EE;", "HEADER_BACKGROUND_STYLE"), this.$_innerShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $shape$$8$$.$addChild$(this.$_innerShape$), 
    this.$_isIsolated$ && (this.$_isolateButton$ = (0,D.$JSCompiler_StaticMethods__createIsolateRestoreButton$$)(this, $shape$$8$$))
  }else {
    var $fill$$16$$ = this.$GetFill$();
    $shape$$8$$ = new D.$DvtRect$$($context$$73$$, this.$_x$, this.$_y$, this.$_width$, this.$_height$);
    if((1E3 > this.$_view$.$_nodeCount$ || !(0,D.$DvtAgent$isTouchDevice$$)()) && 2 <= this.$_width$ && 2 <= this.$_height$) {
      new D.$DvtSolidStroke$$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#FFFFFF", "LEAF_NODE_TOP_BORDER_COLOR_STYLE"), 0.3);
      new D.$DvtSolidStroke$$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#000000", "LEAF_NODE_BOTTOM_BORDER_COLOR_STYLE"), 0.3);
      this.$_pattern$ && new D.$DvtSolidStroke$$(this.$_color$, 0.15);
      var $fillColor$$1_minDim$$ = this.$getColor$(), $topLeftColor$$ = (0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#FFFFFF", "LEAF_NODE_TOP_BORDER_COLOR_STYLE"), $topLeftColor$$ = D.$DvtColorUtils$$.$interpolateColor$($topLeftColor$$, $fillColor$$1_minDim$$, 0.7), $bottomRightColor$$ = (0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#000000", "LEAF_NODE_BOTTOM_BORDER_COLOR_STYLE"), $bottomRightColor$$ = D.$DvtColorUtils$$.$interpolateColor$($bottomRightColor$$, $fillColor$$1_minDim$$, 
      0.7), $fillColor$$1_minDim$$ = window.Math.min(this.$_width$, this.$_height$);
      4 <= $fillColor$$1_minDim$$ ? ($shape$$8$$.$setSolidFill$($bottomRightColor$$), this.$_topLeftShape$ = new D.$DvtRect$$($context$$73$$, this.$_x$, this.$_y$, this.$_width$ - 1, this.$_height$ - 1), this.$_topLeftShape$.$setSolidFill$($topLeftColor$$), this.$_topLeftShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $shape$$8$$.$addChild$(this.$_topLeftShape$), this.$_fillShape$ = new D.$DvtRect$$($context$$73$$, this.$_x$ + 1, this.$_y$ + 1, this.$_width$ - 2, this.$_height$ - 2), this.$_fillShape$.$setFill$($fill$$16$$), 
      this.$_fillShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $shape$$8$$.$addChild$(this.$_fillShape$)) : 2 <= $fillColor$$1_minDim$$ ? ($shape$$8$$.$setSolidFill$($bottomRightColor$$), this.$_fillShape$ = new D.$DvtRect$$($context$$73$$, this.$_x$, this.$_y$, this.$_width$ - 1, this.$_height$ - 1), this.$_fillShape$.$setFill$($fill$$16$$), this.$_fillShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $shape$$8$$.$addChild$(this.$_fillShape$)) : $shape$$8$$.$setFill$($fill$$16$$)
    }else {
      $shape$$8$$.$setFill$($fill$$16$$)
    }
  }
  this.$_view$.$__getEventManager$().$associate$($shape$$8$$, this);
  this.$isSelectable$() ? $shape$$8$$.$setSelectable$(D.$JSCompiler_alias_TRUE$$) : $shape$$8$$.setCursor("default");
  $shape$$8$$.zIndex = this.$_zIndex$;
  return $shape$$8$$
};
D.$JSCompiler_StaticMethods__createIsolateRestoreButton$$ = function $$JSCompiler_StaticMethods__createIsolateRestoreButton$$$($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$, $container$$12$$) {
  if("h" != $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_textStyle$ || !$JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$isIsolateEnabled$()) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $JSCompiler_temp$$436_button$$31_button$$inline_2289_button$$inline_2297_context$$inline_2284_context$$inline_2292$$ = D.$JSCompiler_alias_NULL$$, $transX$$1_x1$$7$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_x$, $x2$$5$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_x$ + $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_width$ - 1, $rect$$13_tooltip$$7_y1$$7$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_y$ + 1, $y2$$5$$ = 
  $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_y$ + $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_titleBarHeight$;
  if(12 < $x2$$5$$ - $transX$$1_x1$$7$$ - 2) {
    if($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_isIsolated$) {
      var $JSCompiler_temp$$436_button$$31_button$$inline_2289_button$$inline_2297_context$$inline_2284_context$$inline_2292$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$_context$, $downState$$inline_2288_downState$$inline_2296_resources$$inline_2285_resources$$inline_2293$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$_resources$, $upState$$inline_2286_upState$$inline_2294$$ = new D.$DvtImage$$($JSCompiler_temp$$436_button$$31_button$$inline_2289_button$$inline_2297_context$$inline_2284_context$$inline_2292$$, 
      $downState$$inline_2288_downState$$inline_2296_resources$$inline_2285_resources$$inline_2293$$.restoreUp, 0, 0, 12, 12), $overState$$inline_2287_overState$$inline_2295$$ = new D.$DvtImage$$($JSCompiler_temp$$436_button$$31_button$$inline_2289_button$$inline_2297_context$$inline_2284_context$$inline_2292$$, $downState$$inline_2288_downState$$inline_2296_resources$$inline_2285_resources$$inline_2293$$.restoreOver, 0, 0, 12, 12), $downState$$inline_2288_downState$$inline_2296_resources$$inline_2285_resources$$inline_2293$$ = 
      new D.$DvtImage$$($JSCompiler_temp$$436_button$$31_button$$inline_2289_button$$inline_2297_context$$inline_2284_context$$inline_2292$$, $downState$$inline_2288_downState$$inline_2296_resources$$inline_2285_resources$$inline_2293$$.restoreDown, 0, 0, 12, 12);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($upState$$inline_2286_upState$$inline_2294$$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($overState$$inline_2287_overState$$inline_2295$$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($downState$$inline_2288_downState$$inline_2296_resources$$inline_2285_resources$$inline_2293$$);
      $JSCompiler_temp$$436_button$$31_button$$inline_2289_button$$inline_2297_context$$inline_2284_context$$inline_2292$$ = new D.$DvtButton$$($JSCompiler_temp$$436_button$$31_button$$inline_2289_button$$inline_2297_context$$inline_2284_context$$inline_2292$$, $upState$$inline_2286_upState$$inline_2294$$, $overState$$inline_2287_overState$$inline_2295$$, $downState$$inline_2288_downState$$inline_2296_resources$$inline_2285_resources$$inline_2293$$);
      $JSCompiler_temp$$436_button$$31_button$$inline_2289_button$$inline_2297_context$$inline_2284_context$$inline_2292$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$__restoreNode$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$)
    }else {
      $JSCompiler_temp$$436_button$$31_button$$inline_2289_button$$inline_2297_context$$inline_2284_context$$inline_2292$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$_context$, $downState$$inline_2288_downState$$inline_2296_resources$$inline_2285_resources$$inline_2293$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$_resources$, $upState$$inline_2286_upState$$inline_2294$$ = new D.$DvtImage$$($JSCompiler_temp$$436_button$$31_button$$inline_2289_button$$inline_2297_context$$inline_2284_context$$inline_2292$$, 
      $downState$$inline_2288_downState$$inline_2296_resources$$inline_2285_resources$$inline_2293$$.maximizeUp, 0, 0, 12, 12), $overState$$inline_2287_overState$$inline_2295$$ = new D.$DvtImage$$($JSCompiler_temp$$436_button$$31_button$$inline_2289_button$$inline_2297_context$$inline_2284_context$$inline_2292$$, $downState$$inline_2288_downState$$inline_2296_resources$$inline_2285_resources$$inline_2293$$.maximizeOver, 0, 0, 12, 12), $downState$$inline_2288_downState$$inline_2296_resources$$inline_2285_resources$$inline_2293$$ = 
      new D.$DvtImage$$($JSCompiler_temp$$436_button$$31_button$$inline_2289_button$$inline_2297_context$$inline_2284_context$$inline_2292$$, $downState$$inline_2288_downState$$inline_2296_resources$$inline_2285_resources$$inline_2293$$.maximizeDown, 0, 0, 12, 12), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($upState$$inline_2286_upState$$inline_2294$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($overState$$inline_2287_overState$$inline_2295$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($downState$$inline_2288_downState$$inline_2296_resources$$inline_2285_resources$$inline_2293$$), 
      $JSCompiler_temp$$436_button$$31_button$$inline_2289_button$$inline_2297_context$$inline_2284_context$$inline_2292$$ = new D.$DvtButton$$($JSCompiler_temp$$436_button$$31_button$$inline_2289_button$$inline_2297_context$$inline_2284_context$$inline_2292$$, $upState$$inline_2286_upState$$inline_2294$$, $overState$$inline_2287_overState$$inline_2295$$, $downState$$inline_2288_downState$$inline_2296_resources$$inline_2285_resources$$inline_2293$$), $JSCompiler_temp$$436_button$$31_button$$inline_2289_button$$inline_2297_context$$inline_2284_context$$inline_2292$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, 
      $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$__isolateNode$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$)
    }
    $transX$$1_x1$$7$$ = (0,D.$DvtAgent$isRightToLeft$$)($container$$12$$.$_context$) ? $transX$$1_x1$$7$$ + 1 : $x2$$5$$ - 12 - 1;
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_temp$$436_button$$31_button$$inline_2289_button$$inline_2297_context$$inline_2284_context$$inline_2292$$, $transX$$1_x1$$7$$, ($y2$$5$$ + $rect$$13_tooltip$$7_y1$$7$$ - 12) / 2);
    $container$$12$$.$addChild$($JSCompiler_temp$$436_button$$31_button$$inline_2289_button$$inline_2297_context$$inline_2284_context$$inline_2292$$);
    (0,D.$DvtAgent$isTouchDevice$$)() && ($rect$$13_tooltip$$7_y1$$7$$ = new D.$DvtRect$$($container$$12$$.$_context$, -2, -2, 16, 16), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($rect$$13_tooltip$$7_y1$$7$$), $JSCompiler_temp$$436_button$$31_button$$inline_2289_button$$inline_2297_context$$inline_2284_context$$inline_2292$$.$addChild$($rect$$13_tooltip$$7_y1$$7$$));
    "true" == $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$_resources$.alta ? $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$__getEventManager$().$associate$($JSCompiler_temp$$436_button$$31_button$$inline_2289_button$$inline_2297_context$$inline_2284_context$$inline_2292$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$) : ($rect$$13_tooltip$$7_y1$$7$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_isIsolated$ ? $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$_resources$.restore : 
    $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$_resources$.isolate, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$__getEventManager$().$associate$($JSCompiler_temp$$436_button$$31_button$$inline_2289_button$$inline_2297_context$$inline_2284_context$$inline_2292$$, new D.$DvtBaseTreePeer$$($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.getId(), $rect$$13_tooltip$$7_y1$$7$$)))
  }
  return $JSCompiler_temp$$436_button$$31_button$$inline_2289_button$$inline_2297_context$$inline_2284_context$$inline_2292$$
};
D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$ = function $$JSCompiler_StaticMethods__removeIsolateRestoreButton$$$($JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$) {
  $JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$.$_isolateButton$ && ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)($JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$, $JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$.$_isolateButton$), $JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$.$_isolateButton$ = D.$JSCompiler_alias_NULL$$)
};
D.$DvtTreemapNode$$.prototype.$_createTextNode$ = function $$DvtTreemapNode$$$$$_createTextNode$$($container$$13$$) {
  var $chromeAdjustment_isRTL$$5_peer$$1$$ = (0,D.$DvtAgent$isRightToLeft$$)($container$$13$$.$_context$);
  if(!this.$_textStr$ || !$container$$13$$ || !this.$_textStyle$ || "o" == this.$_textStyle$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $availHeight$$ = this.$_height$;
  if((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this) > $availHeight$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $hAlign$$ = "n" == this.$_textStyle$ ? this.$_labelHalign$ : this.$_headerHalign$;
  $chromeAdjustment_isRTL$$5_peer$$1$$ && ("s" == $hAlign$$ ? $hAlign$$ = "e" : "e" == $hAlign$$ && ($hAlign$$ = "s"));
  var $availWidth$$2$$ = this.$_width$ - 6, $isolateWidth$$ = 0;
  this.$isIsolateEnabled$() && ($isolateWidth$$ = 13, $availWidth$$2$$ = "c" == $hAlign$$ ? $availWidth$$2$$ - 2 * $isolateWidth$$ : $availWidth$$2$$ - $isolateWidth$$);
  if(0 >= $availWidth$$2$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $text$$25$$ = new D.$DvtOutputText$$(this.$_view$.$_context$, this.$_textStr$);
  $text$$25$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this));
  "s" == $hAlign$$ ? ($chromeAdjustment_isRTL$$5_peer$$1$$ ? $text$$25$$.$setX$(this.$_x$ + 4 + $isolateWidth$$) : $text$$25$$.$setX$(this.$_x$ + 4), $text$$25$$.$alignLeft$()) : "c" == $hAlign$$ ? ($text$$25$$.$setX$(this.$_x$ + this.$_width$ / 2), $text$$25$$.$alignCenter$()) : "e" == $hAlign$$ && ($chromeAdjustment_isRTL$$5_peer$$1$$ ? $text$$25$$.$setX$(this.$_x$ + this.$_width$ - 4) : $text$$25$$.$setX$(this.$_x$ + this.$_width$ - 4 - $isolateWidth$$), $text$$25$$.$alignRight$());
  "n" == this.$_textStyle$ ? ($availHeight$$ = this.$_height$ - 4, "t" == this.$_labelValign$ ? ($text$$25$$.$setY$(this.$_y$ + 2), $text$$25$$.$alignTop$()) : "c" == this.$_labelValign$ ? ($text$$25$$.$setY$(this.$_y$ + this.$_height$ / 2), $text$$25$$.$alignMiddle$()) : "b" == this.$_labelValign$ && ($text$$25$$.$setY$(this.$_y$ + this.$_height$ - 2), $text$$25$$.$alignBottom$()), (0,D.$JSCompiler_StaticMethods_ApplyLabelTextStyle$$)(this, $text$$25$$)) : "h" == this.$_textStyle$ && ($chromeAdjustment_isRTL$$5_peer$$1$$ = 
  (0,D.$DvtAgent$isPlatformWebkit$$)() ? 1 : 0, $text$$25$$.$setY$(this.$_y$ + 1 + this.$_titleBarHeight$ / 2 + $chromeAdjustment_isRTL$$5_peer$$1$$), $text$$25$$.$alignMiddle$(), (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, $text$$25$$, "HEADER_TEXT_DEFAULT_STYLE", "#003D5B"));
  if($text$$25$$ != D.$JSCompiler_alias_NULL$$) {
    return"h" == this.$_textStyle$ && this.$isDrillReplaceEnabled$() ? ((0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, $text$$25$$, "HEADER_DRILL_TEXT_DEFAULT_STYLE", "#003286"), $text$$25$$.setCursor("pointer"), $chromeAdjustment_isRTL$$5_peer$$1$$ = new D.$DvtBaseTreePeer$$(this, this.getId(), D.$JSCompiler_alias_NULL$$, this.$getDatatip$(), this.$getDatatipColor$()), $chromeAdjustment_isRTL$$5_peer$$1$$.$setDrillable$(D.$JSCompiler_alias_TRUE$$), this.$_view$.$__getEventManager$().$associate$($text$$25$$, 
    $chromeAdjustment_isRTL$$5_peer$$1$$)) : $text$$25$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), D.$DvtTextUtils$$.$fitText$($text$$25$$, $availWidth$$2$$, $availHeight$$, $container$$13$$) ? $text$$25$$ : D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$ = function $$JSCompiler_StaticMethods_ApplyHeaderStyle$$$($JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$2$$, $shape$$9$$, $innerShape$$, $backgroundColor$$13_defaultStyle$$, $styleDef$$1$$) {
  var $borderColor$$14_style$$11$$ = new D.$DvtCSSStyle$$($backgroundColor$$13_defaultStyle$$);
  $borderColor$$14_style$$11$$.$merge$($JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$2$$.$_view$.$_styles$[$styleDef$$1$$]);
  $backgroundColor$$13_defaultStyle$$ = $borderColor$$14_style$$11$$.$getStyle$("background-color");
  $borderColor$$14_style$$11$$ = $borderColor$$14_style$$11$$.$getStyle$("border-color");
  $JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$2$$.$_headerUseNodeColor$ && "HEADER_BACKGROUND_STYLE" == $styleDef$$1$$ ? ($JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$2$$ = $JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$2$$.$getColor$(), $innerShape$$.$setSolidFill$($JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$2$$), $borderColor$$14_style$$11$$ = D.$DvtColorUtils$$.$interpolateColor$($borderColor$$14_style$$11$$, $JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$2$$, 
  0.5), $shape$$9$$.$setSolidFill$($borderColor$$14_style$$11$$)) : ($shape$$9$$.$setSolidFill$($borderColor$$14_style$$11$$), $innerShape$$.$setSolidFill$($backgroundColor$$13_defaultStyle$$))
};
D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$ = function $$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$$($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$, $text$$26$$, $styleDef$$2$$, $defaultFillColor$$1_textStyle$$5$$) {
  var $bHeaderNodeColor$$ = $JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_headerUseNodeColor$ && "HEADER_TEXT_DEFAULT_STYLE" == $styleDef$$2$$;
  $bHeaderNodeColor$$ ? $text$$26$$.$setSolidFill$((0,D.$DvtBaseTreeNode$GetNodeTextColor$$)($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$)) : $text$$26$$.$setSolidFill$($defaultFillColor$$1_textStyle$$5$$);
  $defaultFillColor$$1_textStyle$$5$$ = [];
  1 >= (0,D.$JSCompiler_StaticMethods_GetDepth$$)($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$) && $JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$hasChildren$() && $defaultFillColor$$1_textStyle$$5$$.push(new D.$DvtCSSStyle$$("font-weight:bold;"));
  $defaultFillColor$$1_textStyle$$5$$.push($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_view$.$_styles$[$styleDef$$2$$]);
  $JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_headerLabelStyle$ && $defaultFillColor$$1_textStyle$$5$$.push($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_headerLabelStyle$);
  $text$$26$$.$setCSSStyle$((0,D.$DvtCSSStyle$mergeStyles$$)($defaultFillColor$$1_textStyle$$5$$));
  D.$DvtAgent$_highContrast$$ === D.$JSCompiler_alias_TRUE$$ && $bHeaderNodeColor$$ && $text$$26$$.$setSolidFill$((0,D.$DvtBaseTreeNode$GetNodeTextColor$$)($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$))
};
D.$DvtTreemapNode$$.prototype.$handleMouseOver$ = function $$DvtTreemapNode$$$$$handleMouseOver$$() {
  this.$_isolateButton$ || (this.$_isolateButton$ = (0,D.$JSCompiler_StaticMethods__createIsolateRestoreButton$$)(this, this.$_shape$));
  D.$DvtTreemapNode$$.$superclass$.$handleMouseOver$.call(this)
};
D.$DvtTreemapNode$$.prototype.$handleMouseOut$ = function $$DvtTreemapNode$$$$$handleMouseOut$$() {
  this.$_isIsolated$ !== D.$JSCompiler_alias_TRUE$$ && (0,D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$)(this);
  D.$DvtTreemapNode$$.$superclass$.$handleMouseOut$.call(this)
};
D.$JSCompiler_StaticMethods__removeChildShape$$ = function $$JSCompiler_StaticMethods__removeChildShape$$$($JSCompiler_StaticMethods__removeChildShape$self$$, $childShape$$) {
  $childShape$$ && $JSCompiler_StaticMethods__removeChildShape$self$$.$_shape$.removeChild($childShape$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtTreemapNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$__isolateNode$ = function $$JSCompiler_prototypeAlias$$$$__isolateNode$$() {
  this.$_isIsolated$ = D.$JSCompiler_alias_TRUE$$;
  this.$hideHoverEffect$();
  var $JSCompiler_StaticMethods___isolate$self$$inline_2299$$ = this.$_view$, $currentNavigable$$inline_2301_displayable$$inline_2302$$ = $JSCompiler_StaticMethods___isolate$self$$inline_2299$$.$__getEventManager$().$getFocus$();
  $currentNavigable$$inline_2301_displayable$$inline_2302$$ && $currentNavigable$$inline_2301_displayable$$inline_2302$$.$hideKeyboardFocusEffect$();
  $JSCompiler_StaticMethods___isolate$self$$inline_2299$$.$_isolatedNodes$.push(this);
  $JSCompiler_StaticMethods___isolate$self$$inline_2299$$.$__dispatchEvent$(new D.$DvtTreemapIsolateEvent$$(this.getId()));
  $JSCompiler_StaticMethods___isolate$self$$inline_2299$$.$_isolateRestoreLayout$ = D.$JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods___isolate$self$$inline_2299$$.$Layout$(new D.$DvtRectangle$$(0, 0, $JSCompiler_StaticMethods___isolate$self$$inline_2299$$.$Width$, $JSCompiler_StaticMethods___isolate$self$$inline_2299$$.$Height$));
  $JSCompiler_StaticMethods___isolate$self$$inline_2299$$.$_isolateRestoreLayout$ = D.$JSCompiler_alias_FALSE$$;
  $currentNavigable$$inline_2301_displayable$$inline_2302$$ = this.$getDisplayable$();
  $JSCompiler_StaticMethods___isolate$self$$inline_2299$$.$_isolatedLayer$.$addChild$($currentNavigable$$inline_2301_displayable$$inline_2302$$);
  (0,D.$JSCompiler_StaticMethods__renderIsolateRestore$$)($JSCompiler_StaticMethods___isolate$self$$inline_2299$$, this);
  (0,D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$)(this);
  this.$UpdateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.$__restoreNode$ = function $$JSCompiler_prototypeAlias$$$$__restoreNode$$() {
  this.$_isIsolated$ = D.$JSCompiler_alias_FALSE$$;
  this.$hideHoverEffect$();
  var $JSCompiler_StaticMethods___restore$self$$inline_2304$$ = this.$_view$, $restoreNode$$inline_2305$$ = $JSCompiler_StaticMethods___restore$self$$inline_2304$$.$_isolatedNodes$.pop(), $currentNavigable$$inline_2306_id$$inline_9534$$ = $JSCompiler_StaticMethods___restore$self$$inline_2304$$.$__getEventManager$().$getFocus$();
  $currentNavigable$$inline_2306_id$$inline_9534$$ && $currentNavigable$$inline_2306_id$$inline_9534$$.$hideKeyboardFocusEffect$();
  $currentNavigable$$inline_2306_id$$inline_9534$$ = $restoreNode$$inline_2305$$.getId();
  $JSCompiler_StaticMethods___restore$self$$inline_2304$$.$_navigableIdToFocus$ = $currentNavigable$$inline_2306_id$$inline_9534$$;
  $JSCompiler_StaticMethods___restore$self$$inline_2304$$.$__dispatchEvent$(new D.$DvtTreemapIsolateEvent$$);
  $JSCompiler_StaticMethods___restore$self$$inline_2304$$.$_isolateRestoreLayout$ = D.$JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods___restore$self$$inline_2304$$.$Layout$(new D.$DvtRectangle$$(0, 0, $JSCompiler_StaticMethods___restore$self$$inline_2304$$.$Width$, $JSCompiler_StaticMethods___restore$self$$inline_2304$$.$Height$));
  $JSCompiler_StaticMethods___restore$self$$inline_2304$$.$_isolateRestoreLayout$ = D.$JSCompiler_alias_FALSE$$;
  (0,D.$JSCompiler_StaticMethods__renderIsolateRestore$$)($JSCompiler_StaticMethods___restore$self$$inline_2304$$, $restoreNode$$inline_2305$$);
  (0,D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$)(this);
  this.$UpdateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$($target$$49$$, $x$$92$$, $y$$72$$) {
  return $target$$49$$ && $target$$49$$ instanceof D.$DvtButton$$ ? D.$JSCompiler_alias_NULL$$ : D.$DvtTreemapNode$$.$superclass$.$getDatatip$.call(this, $target$$49$$, $x$$92$$, $y$$72$$)
};
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$($target$$50$$) {
  return $target$$50$$ && $target$$50$$ instanceof D.$DvtButton$$ ? D.$JSCompiler_alias_NULL$$ : D.$DvtTreemapNode$$.$superclass$.$getDatatipColor$.call(this, $target$$50$$)
};
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = function $$JSCompiler_prototypeAlias$$$$getTooltip$$($target$$51$$) {
  return $target$$51$$ && $target$$51$$ instanceof D.$DvtButton$$ ? this.$_isIsolated$ ? this.$_view$.$_resources$.restore : this.$_view$.$_resources$.isolate : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$2$$ = [];
  this.$isSelectable$() && $states$$2$$.push((0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  this.$_isIsolated$ && $states$$2$$.push((0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, "STATE_ISOLATED"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$_datatip$, $states$$2$$, this.$Bundle$)
};
D.$JSCompiler_prototypeAlias$$.$UpdateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$UpdateAriaLabel$$() {
  !(0,D.$DvtAgent$deferAriaCreation$$)() && this.$_shape$ && (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)(this.$_shape$, "label", this.$getAriaLabel$())
};
D.$DvtBaseTreemapLayout$$ = function $$DvtBaseTreemapLayout$$$() {
  this.Init()
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreemapLayout$$, D.$DvtObj$$, "DvtBaseTreemapLayout");
D.$DvtBaseTreemapLayout$$.prototype.Init = function $$DvtBaseTreemapLayout$$$$Init$() {
  this.$_zIndex$ = 0
};
D.$DvtBaseTreemapLayout$$.prototype.$layout$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_StaticMethods_setNodeBounds$$ = function $$JSCompiler_StaticMethods_setNodeBounds$$$($JSCompiler_StaticMethods_setNodeBounds$self_gap$$2$$, $availBounds$$2_node$$62$$, $x$$99$$, $y$$79$$, $width$$42$$, $height$$45$$, $isRoot$$4_xx$$7$$) {
  $availBounds$$2_node$$62$$.$_zIndex$ = $JSCompiler_StaticMethods_setNodeBounds$self_gap$$2$$.$_zIndex$;
  $JSCompiler_StaticMethods_setNodeBounds$self_gap$$2$$.$_zIndex$++;
  if(!$isRoot$$4_xx$$7$$ || !$availBounds$$2_node$$62$$.$hasChildren$()) {
    $JSCompiler_StaticMethods_setNodeBounds$self_gap$$2$$ = $JSCompiler_StaticMethods_setNodeBounds$self_gap$$2$$.$getGapSize$($availBounds$$2_node$$62$$.$_view$, (0,D.$JSCompiler_StaticMethods_GetDepth$$)($availBounds$$2_node$$62$$));
    $isRoot$$4_xx$$7$$ = window.Math.round($x$$99$$ + $JSCompiler_StaticMethods_setNodeBounds$self_gap$$2$$);
    var $yy$$7$$ = window.Math.round($y$$79$$ + $JSCompiler_StaticMethods_setNodeBounds$self_gap$$2$$);
    if($availBounds$$2_node$$62$$ = $availBounds$$2_node$$62$$.$setLayoutParams$($isRoot$$4_xx$$7$$, $yy$$7$$, window.Math.round($x$$99$$ + $width$$42$$ - $JSCompiler_StaticMethods_setNodeBounds$self_gap$$2$$) - $isRoot$$4_xx$$7$$, window.Math.round($y$$79$$ + $height$$45$$ - $JSCompiler_StaticMethods_setNodeBounds$self_gap$$2$$) - $yy$$7$$)) {
      return $availBounds$$2_node$$62$$
    }
  }
  return new D.$DvtRectangle$$($x$$99$$, $y$$79$$, $width$$42$$, $height$$45$$)
};
D.$DvtBaseTreemapLayout$$.prototype.$getGapSize$ = function $$DvtBaseTreemapLayout$$$$$getGapSize$$($view$$47$$, $depth$$11$$) {
  var $groupGaps$$1$$ = $view$$47$$.$_groupGaps$;
  return"o" == $groupGaps$$1$$ ? 1 == $depth$$11$$ && 2 <= $view$$47$$.$_maxDepth$ ? 3 : 0 : "a" == $groupGaps$$1$$ ? $depth$$11$$ < $view$$47$$.$_maxDepth$ ? 3 : 0 : 0
};
D.$DvtSquarifyingLayout$$ = function $$DvtSquarifyingLayout$$$() {
  this.Init()
};
D.$DvtObj$$.$createSubclass$(D.$DvtSquarifyingLayout$$, D.$DvtBaseTreemapLayout$$, "DvtSquarifyingLayout");
D.$DvtSquarifyingLayout$$.prototype.$layout$ = function $$DvtSquarifyingLayout$$$$$layout$$($view$$42$$, $root$$20$$, $x$$93$$, $y$$73$$, $width$$36$$, $height$$39$$, $bShowRoot$$) {
  this.$_layout$($root$$20$$, $x$$93$$, $y$$73$$, $width$$36$$, $height$$39$$, $bShowRoot$$ ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$)
};
D.$DvtSquarifyingLayout$$.prototype.$_layout$ = function $$DvtSquarifyingLayout$$$$$_layout$$($children$$11_node$$59$$, $availBounds_x$$94$$, $children$$inline_2316_w$$14_y$$74$$, $i$$inline_2319_width$$37$$, $area$$inline_2317_factor$$inline_2320_height$$40$$, $child$$inline_2321_isRoot$$1_total$$inline_2318$$) {
  $availBounds_x$$94$$ = (0,D.$JSCompiler_StaticMethods_setNodeBounds$$)(this, $children$$11_node$$59$$, $availBounds_x$$94$$, $children$$inline_2316_w$$14_y$$74$$, $i$$inline_2319_width$$37$$, $area$$inline_2317_factor$$inline_2320_height$$40$$, $child$$inline_2321_isRoot$$1_total$$inline_2318$$);
  $children$$11_node$$59$$ = $children$$11_node$$59$$.$getChildNodes$();
  if($children$$11_node$$59$$ != D.$JSCompiler_alias_NULL$$ && 0 < $children$$11_node$$59$$.length) {
    $children$$inline_2316_w$$14_y$$74$$ = $children$$11_node$$59$$;
    $area$$inline_2317_factor$$inline_2320_height$$40$$ = $availBounds_x$$94$$.$w$ * $availBounds_x$$94$$.$h$;
    for($i$$inline_2319_width$$37$$ = $i$$inline_2319_width$$37$$ = $child$$inline_2321_isRoot$$1_total$$inline_2318$$ = 0;$i$$inline_2319_width$$37$$ < $children$$inline_2316_w$$14_y$$74$$.length;$i$$inline_2319_width$$37$$++) {
      $child$$inline_2321_isRoot$$1_total$$inline_2318$$ += 0 < $children$$inline_2316_w$$14_y$$74$$[$i$$inline_2319_width$$37$$].$getSize$() ? $children$$inline_2316_w$$14_y$$74$$[$i$$inline_2319_width$$37$$].$getSize$() : 0
    }
    $area$$inline_2317_factor$$inline_2320_height$$40$$ = 0 == $area$$inline_2317_factor$$inline_2320_height$$40$$ ? 0 : $area$$inline_2317_factor$$inline_2320_height$$40$$ / $child$$inline_2321_isRoot$$1_total$$inline_2318$$;
    for($i$$inline_2319_width$$37$$ = 0;$i$$inline_2319_width$$37$$ < $children$$inline_2316_w$$14_y$$74$$.length;$i$$inline_2319_width$$37$$++) {
      $child$$inline_2321_isRoot$$1_total$$inline_2318$$ = $children$$inline_2316_w$$14_y$$74$$[$i$$inline_2319_width$$37$$], $child$$inline_2321_isRoot$$1_total$$inline_2318$$.$__pxSize$ = $child$$inline_2321_isRoot$$1_total$$inline_2318$$.$getSize$() * $area$$inline_2317_factor$$inline_2320_height$$40$$
    }
    $children$$11_node$$59$$ = $children$$11_node$$59$$.slice(0).sort(function($children$$11_node$$59$$, $availBounds_x$$94$$) {
      return $children$$11_node$$59$$.$getSize$() - $availBounds_x$$94$$.$getSize$()
    });
    $children$$inline_2316_w$$14_y$$74$$ = window.Math.min($availBounds_x$$94$$.$w$, $availBounds_x$$94$$.$h$);
    (0,D.$JSCompiler_StaticMethods__squarify$$)(this, $children$$11_node$$59$$, $children$$inline_2316_w$$14_y$$74$$, new D.$DvtRectangle$$($availBounds_x$$94$$.x, $availBounds_x$$94$$.y, $availBounds_x$$94$$.$w$, $availBounds_x$$94$$.$h$))
  }
};
D.$JSCompiler_StaticMethods__squarify$$ = function $$JSCompiler_StaticMethods__squarify$$$($JSCompiler_StaticMethods__squarify$self$$, $children$$13$$, $w$$15$$, $r$$20$$) {
  var $row$$47$$ = [], $worst$$ = window.Infinity;
  if($children$$13$$ == D.$JSCompiler_alias_NULL$$ || 0 == $children$$13$$.length) {
    (0,D.$JSCompiler_StaticMethods__layoutRow$$)($JSCompiler_StaticMethods__squarify$self$$, $row$$47$$, $w$$15$$, $r$$20$$)
  }else {
    for(;0 < $children$$13$$.length;) {
      var $c$$11$$ = $children$$13$$.pop();
      if(0 > $c$$11$$.$__pxSize$) {
        (0,D.$JSCompiler_StaticMethods__layoutRow$$)($JSCompiler_StaticMethods__squarify$self$$, $row$$47$$, $w$$15$$, $r$$20$$);
        break
      }
      $row$$47$$.push($c$$11$$);
      var $min$$inline_2326_newWorst$$, $areas$$inline_2323_s2$$inline_2329$$ = $row$$47$$, $w$$inline_2324_w2$$inline_2330$$ = $w$$15$$, $total$$inline_2325$$ = 0;
      $min$$inline_2326_newWorst$$ = window.Infinity;
      for(var $max$$inline_2327$$ = -window.Infinity, $i$$inline_2328$$ = 0;$i$$inline_2328$$ < $areas$$inline_2323_s2$$inline_2329$$.length;$i$$inline_2328$$++) {
        $total$$inline_2325$$ += $areas$$inline_2323_s2$$inline_2329$$[$i$$inline_2328$$].$__pxSize$, $min$$inline_2326_newWorst$$ = window.Math.min($min$$inline_2326_newWorst$$, $areas$$inline_2323_s2$$inline_2329$$[$i$$inline_2328$$].$__pxSize$), $max$$inline_2327$$ = window.Math.max($max$$inline_2327$$, $areas$$inline_2323_s2$$inline_2329$$[$i$$inline_2328$$].$__pxSize$)
      }
      $areas$$inline_2323_s2$$inline_2329$$ = $total$$inline_2325$$ * $total$$inline_2325$$;
      $w$$inline_2324_w2$$inline_2330$$ *= $w$$inline_2324_w2$$inline_2330$$;
      $min$$inline_2326_newWorst$$ = window.Math.max($w$$inline_2324_w2$$inline_2330$$ * $max$$inline_2327$$ / $areas$$inline_2323_s2$$inline_2329$$, $areas$$inline_2323_s2$$inline_2329$$ / ($w$$inline_2324_w2$$inline_2330$$ * $min$$inline_2326_newWorst$$));
      if($min$$inline_2326_newWorst$$ > $worst$$) {
        $children$$13$$.push($c$$11$$);
        $row$$47$$.pop();
        $r$$20$$ = (0,D.$JSCompiler_StaticMethods__layoutRow$$)($JSCompiler_StaticMethods__squarify$self$$, $row$$47$$, $w$$15$$, $r$$20$$);
        (0,D.$JSCompiler_StaticMethods__squarify$$)($JSCompiler_StaticMethods__squarify$self$$, $children$$13$$, window.Math.min($r$$20$$.$w$, $r$$20$$.$h$), $r$$20$$);
        break
      }else {
        if(0 == $children$$13$$.length) {
          (0,D.$JSCompiler_StaticMethods__layoutRow$$)($JSCompiler_StaticMethods__squarify$self$$, $row$$47$$, $w$$15$$, $r$$20$$);
          break
        }else {
          $worst$$ = $min$$inline_2326_newWorst$$
        }
      }
    }
  }
};
D.$JSCompiler_StaticMethods__layoutRow$$ = function $$JSCompiler_StaticMethods__layoutRow$$$($JSCompiler_StaticMethods__layoutRow$self$$, $row$$48$$, $w$$17_width$$38$$, $r$$21$$) {
  var $height$$41_total$$3$$ = 0, $i$$161$$;
  for($i$$161$$ = 0;$i$$161$$ < $row$$48$$.length;$i$$161$$++) {
    $height$$41_total$$3$$ += $row$$48$$[$i$$161$$].$__pxSize$
  }
  var $x$$95$$ = $r$$21$$.x, $y$$75$$ = $r$$21$$.y;
  if($w$$17_width$$38$$ == $r$$21$$.$w$) {
    $height$$41_total$$3$$ = 0 == $w$$17_width$$38$$ ? 0 : $height$$41_total$$3$$ / $w$$17_width$$38$$;
    for($i$$161$$ = 0;$i$$161$$ < $row$$48$$.length;$i$$161$$++) {
      $w$$17_width$$38$$ = $row$$48$$[$i$$161$$].$__pxSize$ / $height$$41_total$$3$$, $JSCompiler_StaticMethods__layoutRow$self$$.$_layout$($row$$48$$[$i$$161$$], $x$$95$$, $y$$75$$, $w$$17_width$$38$$, $height$$41_total$$3$$, D.$JSCompiler_alias_FALSE$$), $x$$95$$ += $w$$17_width$$38$$
    }
    return new D.$DvtRectangle$$($r$$21$$.x, $r$$21$$.y + $height$$41_total$$3$$, $r$$21$$.$w$, $r$$21$$.$h$ - $height$$41_total$$3$$)
  }
  $w$$17_width$$38$$ = 0 == $w$$17_width$$38$$ ? 0 : $height$$41_total$$3$$ / $w$$17_width$$38$$;
  for($i$$161$$ = 0;$i$$161$$ < $row$$48$$.length;$i$$161$$++) {
    $height$$41_total$$3$$ = $row$$48$$[$i$$161$$].$__pxSize$ / $w$$17_width$$38$$, $JSCompiler_StaticMethods__layoutRow$self$$.$_layout$($row$$48$$[$i$$161$$], $x$$95$$, $y$$75$$, $w$$17_width$$38$$, $height$$41_total$$3$$, D.$JSCompiler_alias_FALSE$$), $y$$75$$ += $height$$41_total$$3$$
  }
  return new D.$DvtRectangle$$($r$$21$$.x + $w$$17_width$$38$$, $r$$21$$.y, $r$$21$$.$w$ - $w$$17_width$$38$$, $r$$21$$.$h$)
};
D.$DvtSliceAndDiceLayout$$ = function $$DvtSliceAndDiceLayout$$$($isHoriz$$1$$) {
  this.Init();
  this.$_isHoriz$ = $isHoriz$$1$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtSliceAndDiceLayout$$, D.$DvtBaseTreemapLayout$$, "DvtSliceAndDiceLayout");
D.$DvtSliceAndDiceLayout$$.prototype.$layout$ = function $$DvtSliceAndDiceLayout$$$$$layout$$($view$$44$$, $root$$21$$, $x$$96$$, $y$$76$$, $width$$39$$, $height$$42$$, $bShowRoot$$1$$) {
  this.$_layout$(this.$_isHoriz$, $view$$44$$, $root$$21$$, $x$$96$$, $y$$76$$, $width$$39$$, $height$$42$$, $bShowRoot$$1$$ ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$)
};
D.$DvtSliceAndDiceLayout$$.prototype.$_layout$ = function $$DvtSliceAndDiceLayout$$$$$_layout$$($isHoriz$$2$$, $view$$45$$, $children$$14_node$$61$$, $availBounds$$1_x$$97$$, $childX_y$$77$$, $childY_width$$40$$, $childWidth_height$$43$$, $childHeight_isRoot$$3$$) {
  $availBounds$$1_x$$97$$ = (0,D.$JSCompiler_StaticMethods_setNodeBounds$$)(this, $children$$14_node$$61$$, $availBounds$$1_x$$97$$, $childX_y$$77$$, $childY_width$$40$$, $childWidth_height$$43$$, $childHeight_isRoot$$3$$);
  $children$$14_node$$61$$ = $children$$14_node$$61$$.$getChildNodes$();
  if($children$$14_node$$61$$ != D.$JSCompiler_alias_NULL$$) {
    $childX_y$$77$$ = $availBounds$$1_x$$97$$.x;
    $childY_width$$40$$ = $availBounds$$1_x$$97$$.y;
    $childWidth_height$$43$$ = $availBounds$$1_x$$97$$.$w$;
    $childHeight_isRoot$$3$$ = $availBounds$$1_x$$97$$.$h$;
    var $total$$4$$ = 0, $i$$162$$;
    for($i$$162$$ = 0;$i$$162$$ < $children$$14_node$$61$$.length;$i$$162$$++) {
      $total$$4$$ += 0 < $children$$14_node$$61$$[$i$$162$$].$getSize$() ? $children$$14_node$$61$$[$i$$162$$].$getSize$() : 0
    }
    "on" == this.$Sorting$ && ($children$$14_node$$61$$ = $children$$14_node$$61$$.slice(0), $children$$14_node$$61$$.sort(function($isHoriz$$2$$, $view$$45$$) {
      return $view$$45$$.$getSize$() - $isHoriz$$2$$.$getSize$()
    }));
    $isHoriz$$2$$ && (0,D.$DvtAgent$isRightToLeft$$)($view$$45$$.$_context$) && ($children$$14_node$$61$$ = $children$$14_node$$61$$.slice(0).reverse());
    for($i$$162$$ = 0;$i$$162$$ < $children$$14_node$$61$$.length;$i$$162$$++) {
      var $child$$12$$ = $children$$14_node$$61$$[$i$$162$$];
      if(!(0 >= $child$$12$$.$getSize$())) {
        var $sizeRatio$$ = $child$$12$$.$getSize$() / $total$$4$$;
        $isHoriz$$2$$ ? $childWidth_height$$43$$ = $availBounds$$1_x$$97$$.$w$ * $sizeRatio$$ : $childHeight_isRoot$$3$$ = $availBounds$$1_x$$97$$.$h$ * $sizeRatio$$;
        this.$_layout$(!$isHoriz$$2$$, $view$$45$$, $child$$12$$, $childX_y$$77$$, $childY_width$$40$$, $childWidth_height$$43$$, $childHeight_isRoot$$3$$, D.$JSCompiler_alias_FALSE$$);
        $isHoriz$$2$$ ? $childX_y$$77$$ += $childWidth_height$$43$$ : $childY_width$$40$$ += $childHeight_isRoot$$3$$
      }
    }
  }
};
D.$DvtTreemapIsolateEvent$$ = function $$DvtTreemapIsolateEvent$$$($id$$20$$) {
  this.Init("treemapIsolate");
  this.$_id$ = $id$$20$$ ? $id$$20$$ : D.$JSCompiler_alias_NULL$$
};
(0,D.$goog$exportSymbol$$)("DvtTreemapIsolateEvent", D.$DvtTreemapIsolateEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapIsolateEvent$$, D.$DvtBaseComponentEvent$$, "DvtTreemapIsolateEvent");
D.$DvtTreemapIsolateEvent$$.TYPE = "treemapIsolate";
D.$DvtTreemapIsolateEvent$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtTreemapIsolateEvent$$.prototype.getId = D.$DvtTreemapIsolateEvent$$.prototype.getId;
D.$DvtTreemapKeyboardHandler$$ = function $$DvtTreemapKeyboardHandler$$$($manager$$3$$) {
  this.Init($manager$$3$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapKeyboardHandler$$, D.$DvtBaseTreeKeyboardHandler$$, "DvtTreemapKeyboardHandler");
D.$DvtTreemapKeyboardHandler$$.prototype.$isNavigationEvent$ = function $$DvtTreemapKeyboardHandler$$$$$isNavigationEvent$$($event$$138_keyCode$$13$$) {
  var $isNavigable$$ = D.$DvtTreemapKeyboardHandler$$.$superclass$.$isNavigationEvent$.call(this, $event$$138_keyCode$$13$$);
  if(!$isNavigable$$ && ($event$$138_keyCode$$13$$ = $event$$138_keyCode$$13$$.keyCode, 219 == $event$$138_keyCode$$13$$ || 221 == $event$$138_keyCode$$13$$)) {
    $isNavigable$$ = D.$JSCompiler_alias_TRUE$$
  }
  return $isNavigable$$
};
D.$DvtTreemapEventManager$$ = function $$DvtTreemapEventManager$$$($view$$43$$, $context$$76$$, $callback$$38$$, $callbackObj$$6$$) {
  D.$DvtBaseTreeEventManager$$.call(this, $view$$43$$, $context$$76$$, $callback$$38$$, $callbackObj$$6$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapEventManager$$, D.$DvtBaseTreeEventManager$$, "DvtTreemapEventManager");
D.$DvtTreemapEventManager$$.prototype.$ProcessKeyboardEvent$ = function $$DvtTreemapEventManager$$$$$ProcessKeyboardEvent$$($event$$137$$) {
  var $eventConsumed$$1$$ = D.$JSCompiler_alias_TRUE$$;
  if(13 == $event$$137$$.keyCode && $event$$137$$.ctrlKey) {
    var $node$$60$$ = this.$getFocus$();
    $node$$60$$.$isIsolateEnabled$() && ($node$$60$$.$_isIsolated$ ? $node$$60$$.$__restoreNode$() : $node$$60$$.$__isolateNode$());
    $event$$137$$.preventDefault()
  }else {
    $eventConsumed$$1$$ = D.$DvtTreemapEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$137$$)
  }
  return $eventConsumed$$1$$
};
D.$DvtTreemapEventManager$$.prototype.$isClearMenuAllowed$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$DvtTreemapBundle$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapBundle$$, D.$DvtUtilBundle$$, "DvtTreemapBundle");
D.$DvtTreemapBundle$$._defaults = {COLOR:"Color", SIZE:"Size"};
D.$DvtTreemapBundle$$.prototype.$GetDefaultStringForKey$ = function $$DvtTreemapBundle$$$$$GetDefaultStringForKey$$($key$$45$$) {
  var $defaultStr$$ = D.$DvtTreemapBundle$$.$superclass$.$GetDefaultStringForKey$.call(this, $key$$45$$);
  return $defaultStr$$ ? $defaultStr$$ : D.$DvtTreemapBundle$$._defaults[$key$$45$$]
};
D.$DvtTreemapBundle$$.prototype.$GetBundlePrefix$ = (0,D.$JSCompiler_returnArg$$)("DvtTreemapBundle");
D.$DvtTreemapDefaults$$ = function $$DvtTreemapDefaults$$$() {
  this.Init({skyros:D.$DvtTreemapDefaults$VERSION_1$$, alta:{}})
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapDefaults$$, D.$DvtBaseTreeDefaults$$, "DvtTreemapDefaults");
D.$DvtTreemapDefaults$VERSION_1$$ = {nodeDefaults:{header:{labelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px;")}}};
D.$DvtTreemapJsonUtils$$ = (0,D.$JSCompiler_set$$)("$_context$");
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapJsonUtils$$, D.$DvtBaseTreeJsonUtils$$, "DvtTreemapJsonUtils");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTreemapJsonUtils$$.prototype;
D.$JSCompiler_prototypeAlias$$.$GetComponentName$ = (0,D.$JSCompiler_returnArg$$)("treemap");
D.$JSCompiler_prototypeAlias$$.$WriteComponentAttributes$ = function $$JSCompiler_prototypeAlias$$$$WriteComponentAttributes$$($animationOnDisplay_options$$31$$) {
  var $ret$$20$$ = D.$DvtTreemapJsonUtils$$.$superclass$.$WriteComponentAttributes$.call(this, $animationOnDisplay_options$$31$$), $ret$$20$$ = $ret$$20$$ + this.$WriteAttr$("irk", $animationOnDisplay_options$$31$$.isolatedNode), $groupGaps_layout$$22$$ = $animationOnDisplay_options$$31$$.groupGaps;
  "all" == $groupGaps_layout$$22$$ ? $ret$$20$$ += this.$WriteAttr$("gg", "a") : "none" == $groupGaps_layout$$22$$ && ($ret$$20$$ += this.$WriteAttr$("gg", "n"));
  $groupGaps_layout$$22$$ = $animationOnDisplay_options$$31$$.layout;
  "sliceAndDiceHorizontal" == $groupGaps_layout$$22$$ ? $ret$$20$$ += this.$WriteAttr$("layout", "h") : "sliceAndDiceVertical" == $groupGaps_layout$$22$$ && ($ret$$20$$ += this.$WriteAttr$("layout", "v"));
  $animationOnDisplay_options$$31$$ = $animationOnDisplay_options$$31$$.animationOnDisplay;
  return $ret$$20$$ = "auto" == $animationOnDisplay_options$$31$$ ? $ret$$20$$ + this.$WriteAttr$("adi", "alphaFade") : $ret$$20$$ + this.$WriteAttr$("adi", $animationOnDisplay_options$$31$$)
};
D.$JSCompiler_prototypeAlias$$.$WriteNodeAttributes$ = function $$JSCompiler_prototypeAlias$$$$WriteNodeAttributes$$($options$$32$$, $nodeData$$11$$) {
  var $ret$$21$$ = D.$DvtTreemapJsonUtils$$.$superclass$.$WriteNodeAttributes$.call(this, $options$$32$$, $nodeData$$11$$);
  if("off" == ($nodeData$$11$$.labelDisplay ? $nodeData$$11$$.labelDisplay : $options$$32$$.nodeDefaults.labelDisplay)) {
    $ret$$21$$ += this.$WriteAttr$("ld", "o")
  }
  var $groupLabelDisplay_header$$25_labelHalign_labelValign$$ = $nodeData$$11$$.groupLabelDisplay ? $nodeData$$11$$.groupLabelDisplay : $options$$32$$.nodeDefaults.groupLabelDisplay;
  "node" == $groupLabelDisplay_header$$25_labelHalign_labelValign$$ ? $ret$$21$$ += this.$WriteAttr$("gld", "n") : "off" == $groupLabelDisplay_header$$25_labelHalign_labelValign$$ && ($ret$$21$$ += this.$WriteAttr$("gld", "o"));
  $groupLabelDisplay_header$$25_labelHalign_labelValign$$ = $nodeData$$11$$.labelHalign ? $nodeData$$11$$.labelHalign : $options$$32$$.nodeDefaults.labelHalign;
  "start" == $groupLabelDisplay_header$$25_labelHalign_labelValign$$ ? $ret$$21$$ += this.$WriteAttr$("ha", "s") : "end" == $groupLabelDisplay_header$$25_labelHalign_labelValign$$ && ($ret$$21$$ += this.$WriteAttr$("ha", "e"));
  $groupLabelDisplay_header$$25_labelHalign_labelValign$$ = $nodeData$$11$$.labelValign ? $nodeData$$11$$.labelValign : $options$$32$$.nodeDefaults.labelValign;
  "top" == $groupLabelDisplay_header$$25_labelHalign_labelValign$$ ? $ret$$21$$ += this.$WriteAttr$("va", "t") : "bottom" == $groupLabelDisplay_header$$25_labelHalign_labelValign$$ && ($ret$$21$$ += this.$WriteAttr$("va", "b"));
  var $groupLabelDisplay_header$$25_labelHalign_labelValign$$ = $nodeData$$11$$.header, $ret$$21$$ = $ret$$21$$ + this.$WriteAttr$("hls", $groupLabelDisplay_header$$25_labelHalign_labelValign$$ && $groupLabelDisplay_header$$25_labelHalign_labelValign$$.labelStyle ? $groupLabelDisplay_header$$25_labelHalign_labelValign$$.labelStyle : $options$$32$$.nodeDefaults.header.labelStyle), $headerHalign$$ = $groupLabelDisplay_header$$25_labelHalign_labelValign$$ && $groupLabelDisplay_header$$25_labelHalign_labelValign$$.labelHalign ? 
  $groupLabelDisplay_header$$25_labelHalign_labelValign$$.labelHalign : $options$$32$$.nodeDefaults.header.labelHalign;
  "center" == $headerHalign$$ ? $ret$$21$$ += this.$WriteAttr$("hha", "c") : "end" == $headerHalign$$ && ($ret$$21$$ += this.$WriteAttr$("hha", "e"));
  if("off" == ($groupLabelDisplay_header$$25_labelHalign_labelValign$$ && $groupLabelDisplay_header$$25_labelHalign_labelValign$$.isolate ? $groupLabelDisplay_header$$25_labelHalign_labelValign$$.isolate : $options$$32$$.nodeDefaults.header.isolate)) {
    $ret$$21$$ += this.$WriteAttr$("hi", "off")
  }
  if("on" == ($groupLabelDisplay_header$$25_labelHalign_labelValign$$ && $groupLabelDisplay_header$$25_labelHalign_labelValign$$.useNodeColor ? $groupLabelDisplay_header$$25_labelHalign_labelValign$$.useNodeColor : $options$$32$$.nodeDefaults.header.useNodeColor)) {
    $ret$$21$$ += this.$WriteAttr$("unc", "on")
  }
  return $ret$$21$$
};
D.$JSCompiler_prototypeAlias$$.$WriteResourcesElement$ = function $$JSCompiler_prototypeAlias$$$$WriteResourcesElement$$($options$$33_resources$$6$$) {
  var $ret$$22$$, $bRtl_bundle$$2$$ = new D.$DvtTreemapBundle$$;
  $ret$$22$$ = "\x3cresources" + this.$WriteAttr$("legendSize", (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bRtl_bundle$$2$$, "SIZE"));
  $ret$$22$$ += this.$WriteAttr$("legendColor", (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bRtl_bundle$$2$$, "COLOR"));
  $options$$33_resources$$6$$ = $options$$33_resources$$6$$._resources;
  $bRtl_bundle$$2$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$);
  $ret$$22$$ += this.$WriteAttr$("maximizeUp", $bRtl_bundle$$2$$ && $options$$33_resources$$6$$.isolateRtl ? $options$$33_resources$$6$$.isolateRtl : $options$$33_resources$$6$$.isolate);
  $ret$$22$$ += this.$WriteAttr$("maximizeDown", $bRtl_bundle$$2$$ && $options$$33_resources$$6$$.isolateDownRtl ? $options$$33_resources$$6$$.isolateDownRtl : $options$$33_resources$$6$$.isolateDown);
  $ret$$22$$ += this.$WriteAttr$("maximizeOver", $bRtl_bundle$$2$$ && $options$$33_resources$$6$$.isolateOverRtl ? $options$$33_resources$$6$$.isolateOverRtl : $options$$33_resources$$6$$.isolateOver);
  $ret$$22$$ += this.$WriteAttr$("restoreUp", $bRtl_bundle$$2$$ && $options$$33_resources$$6$$.restoreRtl ? $options$$33_resources$$6$$.restoreRtl : $options$$33_resources$$6$$.restore);
  $ret$$22$$ += this.$WriteAttr$("restoreDown", $bRtl_bundle$$2$$ && $options$$33_resources$$6$$.restoreDownRtl ? $options$$33_resources$$6$$.restoreDownRtl : $options$$33_resources$$6$$.restoreDown);
  $ret$$22$$ += this.$WriteAttr$("restoreOver", $bRtl_bundle$$2$$ && $options$$33_resources$$6$$.restoreOverRtl ? $options$$33_resources$$6$$.restoreOverRtl : $options$$33_resources$$6$$.restoreOver);
  $ret$$22$$ += this.$WriteAttr$("alta", "true");
  return $ret$$22$$ + "/\x3e\n"
};
D.$JSCompiler_prototypeAlias$$.$WriteStyleElement$ = function $$JSCompiler_prototypeAlias$$$$WriteStyleElement$$($nodeHeaderSelectedOuterColor_options$$34$$) {
  var $ret$$23$$ = D.$DvtTreemapJsonUtils$$.$superclass$.$WriteStyleElement$.call(this, $nodeHeaderSelectedOuterColor_options$$34$$), $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = $nodeHeaderSelectedOuterColor_options$$34$$.animationUpdateColor;
  $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ && ($ret$$23$$ += this.$WriteAttr$("top", "-tr-animation-update-color: " + $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$));
  ($animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = $nodeHeaderSelectedOuterColor_options$$34$$.nodeDefaults.hoverColor) && ($ret$$23$$ += this.$WriteAttr$("node-hover", "border-color: " + $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$));
  var $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = $nodeHeaderSelectedOuterColor_options$$34$$.nodeDefaults.selectedInnerColor, $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ = $nodeHeaderSelectedOuterColor_options$$34$$.nodeDefaults.selectedOuterColor;
  ($animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = ($animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ ? "-tr-inner-color:" + $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ + 
  ";" : "") + ($nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ ? "-tr-outer-color:" + $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ : "")) && ($ret$$23$$ += this.$WriteAttr$("node-selected", $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$));
  $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = $nodeHeaderSelectedOuterColor_options$$34$$.nodeDefaults.header.backgroundColor;
  $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ = $nodeHeaderSelectedOuterColor_options$$34$$.nodeDefaults.header.borderColor;
  ($animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = ($animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ ? "background-color:" + $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ + 
  ";" : "") + ($nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ ? "border-color:" + $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ : "")) && ($ret$$23$$ += this.$WriteAttr$("nodeHeader", $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$));
  var $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ = $nodeHeaderSelectedOuterColor_options$$34$$.nodeDefaults.header.hoverBackgroundColor, $nodeHeaderHoverInnerColor$$ = $nodeHeaderSelectedOuterColor_options$$34$$.nodeDefaults.header.hoverInnerColor, $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = 
  $nodeHeaderSelectedOuterColor_options$$34$$.nodeDefaults.header.hoverOuterColor, $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ = ($nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ ? "background-color:" + $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ + ";" : "") + 
  ($nodeHeaderHoverInnerColor$$ ? "-tr-inner-color:" + $nodeHeaderHoverInnerColor$$ + ";" : "");
  ($nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ += $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ ? "-tr-outer-color:" + $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ : 
  "") && ($ret$$23$$ += this.$WriteAttr$("nodeHeader-hover", $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$));
  $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = $nodeHeaderSelectedOuterColor_options$$34$$.nodeDefaults.header.selectedBackgroundColor;
  $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ = $nodeHeaderSelectedOuterColor_options$$34$$.nodeDefaults.header.selectedInnerColor;
  $nodeHeaderSelectedOuterColor_options$$34$$ = $nodeHeaderSelectedOuterColor_options$$34$$.nodeDefaults.header.selectedOuterColor;
  $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = ($animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ ? "background-color:" + $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ + 
  ";" : "") + ($nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ ? "-tr-inner-color:" + $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ + ";" : "");
  ($animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ += $nodeHeaderSelectedOuterColor_options$$34$$ ? "-tr-outer-color:" + $nodeHeaderSelectedOuterColor_options$$34$$ : "") && ($ret$$23$$ += this.$WriteAttr$("nodeHeader-selected", $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$));
  return $ret$$23$$ + "/\x3e\n"
};
});