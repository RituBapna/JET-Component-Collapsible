define(['./DvtToolkit', './DvtSubcomponent'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtBaseTreeView$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtBaseTreeView", D.$DvtBaseTreeView$$);
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeView$$, D.$DvtBaseComponent$$, "DvtBaseTreeView");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeView$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$318$$, $callback$$97$$, $callbackObj$$61$$) {
  D.$DvtBaseTreeView$$.$superclass$.Init.call(this, $context$$318$$, $callback$$97$$, $callbackObj$$61$$);
  this.$_eventHandler$ = this.$CreateEventManager$(this, $context$$318$$, this.$__dispatchEvent$, this);
  this.$_eventHandler$.$addListeners$(this);
  this.$_dragSource$ = new D.$DvtDragSource$$($context$$318$$);
  this.$_dropTarget$ = new D.$DvtBaseTreeDropTarget$$(this);
  (0,D.$JSCompiler_StaticMethods_setDragSource$$)(this.$_eventHandler$, this.$_dragSource$);
  this.$LastXml$ = this.$_legend$ = D.$JSCompiler_alias_NULL$$;
  this.$_hasFocus$ = D.$JSCompiler_alias_FALSE$$;
  this.$_navigableIdToFocus$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($xmlString$$10$$, $container$$137_props$$24_width$$128$$, $availSpace$$84_bBlackBoxUpdate_height$$114$$) {
  this.$Width$ = $container$$137_props$$24_width$$128$$;
  this.$Height$ = $availSpace$$84_bBlackBoxUpdate_height$$114$$;
  this.$_eventHandler$ && this.$_eventHandler$.$hideTooltip$();
  this.$Animation$ && !$xmlString$$10$$ && ($xmlString$$10$$ = this.$LastXml$);
  $xmlString$$10$$ && (this.$LastXml$ = $xmlString$$10$$);
  $xmlString$$10$$ && ($container$$137_props$$24_width$$128$$ = this.$Parse$($xmlString$$10$$), this.$ApplyParsedProperties$($container$$137_props$$24_width$$128$$));
  $availSpace$$84_bBlackBoxUpdate_height$$114$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$);
  this.$Layout$($availSpace$$84_bBlackBoxUpdate_height$$114$$);
  $container$$137_props$$24_width$$128$$ = new D.$DvtContainer$$(this.$_context$);
  this.$addChild$($container$$137_props$$24_width$$128$$);
  this.$_templates$ && (this.$_afContext$ = new D.$DvtAfContext$$(this.$_context$, this.$_eventHandler$), this.$_afContext$.$_rmIfNotFit$ = D.$JSCompiler_alias_TRUE$$);
  this.$Render$($container$$137_props$$24_width$$128$$, $availSpace$$84_bBlackBoxUpdate_height$$114$$);
  this.$Animation$ && (this.$AnimationStopped$ = D.$JSCompiler_alias_TRUE$$, this.$Animation$.stop());
  var $ah$$2_bounds$$94$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$);
  $availSpace$$84_bBlackBoxUpdate_height$$114$$ = D.$JSCompiler_alias_FALSE$$;
  if(this.$_container$) {
    if(this.$AnimationOnDataChange$ && $xmlString$$10$$) {
      if(D.$DvtBlackBoxAnimationHandler$$.isSupported(this.$AnimationOnDataChange$)) {
        this.$Animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$_context$, this.$AnimationOnDataChange$, this.$_container$, $container$$137_props$$24_width$$128$$, $ah$$2_bounds$$94$$, this.$AnimationDuration$), $availSpace$$84_bBlackBoxUpdate_height$$114$$ = D.$JSCompiler_alias_TRUE$$
      }else {
        if(this.$_oldRoot$ && "auto" == this.$AnimationOnDataChange$) {
          this.$_deleteContainer$ = this.$GetDeleteContainer$();
          this.$addChild$(this.$_deleteContainer$);
          var $ah$$2_bounds$$94$$ = new D.$DvtBaseTreeAnimationHandler$$(this.$_context$, this.$_deleteContainer$), $oldRoot$$inline_6202$$ = this.$_oldRoot$, $newRoot$$inline_6203$$ = this.$_root$, $oldAncestors$$inline_6204_oldList$$inline_6206$$ = this.$_oldAncestors$, $newAncestors$$inline_6205_newList$$inline_6207$$ = this.$_ancestors$;
          $ah$$2_bounds$$94$$.$_bDrill$ = D.$JSCompiler_alias_FALSE$$;
          $ah$$2_bounds$$94$$.$_oldRoot$ = $oldRoot$$inline_6202$$;
          $ah$$2_bounds$$94$$.$_oldAncestors$ = $oldAncestors$$inline_6204_oldList$$inline_6206$$;
          (0,D.$DvtBaseTreeAnimationHandler$_isAncestor$$)($newAncestors$$inline_6205_newList$$inline_6207$$, $oldRoot$$inline_6202$$) || (0,D.$DvtBaseTreeAnimationHandler$_isAncestor$$)($oldAncestors$$inline_6204_oldList$$inline_6206$$, $newRoot$$inline_6203$$) ? ($ah$$2_bounds$$94$$.$_bDrill$ = D.$JSCompiler_alias_TRUE$$, $oldAncestors$$inline_6204_oldList$$inline_6206$$ = (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)($oldRoot$$inline_6202$$), $newAncestors$$inline_6205_newList$$inline_6207$$ = 
          (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)($newRoot$$inline_6203$$), $oldAncestors$$inline_6204_oldList$$inline_6206$$.push($oldRoot$$inline_6202$$), $newAncestors$$inline_6205_newList$$inline_6207$$.push($newRoot$$inline_6203$$), (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($ah$$2_bounds$$94$$, $oldAncestors$$inline_6204_oldList$$inline_6206$$, $newAncestors$$inline_6205_newList$$inline_6207$$)) : (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($ah$$2_bounds$$94$$, 
          [$oldRoot$$inline_6202$$], [$newRoot$$inline_6203$$]);
          this.$Animation$ = $ah$$2_bounds$$94$$.$getAnimation$()
        }
      }
    }
  }else {
    this.$Animation$ = this.$GetDisplayAnimation$($container$$137_props$$24_width$$128$$, $ah$$2_bounds$$94$$)
  }
  this.$_oldAncestors$ = this.$_oldRoot$ = D.$JSCompiler_alias_NULL$$;
  this.$Animation$ && (this.$_eventHandler$.$removeListeners$(this), this.$Animation$.$setOnEnd$(this.$OnAnimationEnd$, this), this.$Animation$.play());
  $availSpace$$84_bBlackBoxUpdate_height$$114$$ ? this.$_oldContainer$ = this.$_container$ : this.$_container$ && this.removeChild(this.$_container$);
  this.$_container$ = $container$$137_props$$24_width$$128$$;
  $xmlString$$10$$ ? (this.$_processInitialSelections$(), (0,D.$JSCompiler_StaticMethods__processInitialFocus$$)(this, !this.$Animation$)) : this.$ReselectNodes$()
};
D.$JSCompiler_prototypeAlias$$.$Parse$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$Layout$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$Render$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_StaticMethods_RenderBackground$$ = function $$JSCompiler_StaticMethods_RenderBackground$$$($JSCompiler_StaticMethods_RenderBackground$self$$, $container$$139$$) {
  var $background$$10$$ = new D.$DvtRect$$($JSCompiler_StaticMethods_RenderBackground$self$$.$_context$, 0, 0, $JSCompiler_StaticMethods_RenderBackground$self$$.$Width$, $JSCompiler_StaticMethods_RenderBackground$self$$.$Height$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($background$$10$$);
  $container$$139$$.$addChild$($background$$10$$)
};
D.$JSCompiler_StaticMethods_LayoutBreadcrumbs$$ = function $$JSCompiler_StaticMethods_LayoutBreadcrumbs$$$($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$, $availSpace$$86$$) {
  if($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_ancestors$ && 0 < $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_ancestors$.length) {
    var $rootLabel$$1$$ = $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_root$ ? $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_root$.$getLabel$() : D.$JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$ && (0,D.$JSCompiler_StaticMethods_removeComponentKeyboardHandler$$)($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_eventHandler$, $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$.$getEventManager$());
    $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$ = D.$DvtTreeBreadcrumbsRenderer$$.$render$($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$, $availSpace$$86$$, $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_ancestors$, $rootLabel$$1$$);
    (0,D.$JSCompiler_StaticMethods_addComponentKeyboardHandlerAt$$)($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_eventHandler$, $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$.$getEventManager$())
  }else {
    $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$ && (0,D.$JSCompiler_StaticMethods_removeComponentKeyboardHandler$$)($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_eventHandler$, $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$.$getEventManager$()), $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$ = D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_StaticMethods_LayoutLegend$$ = function $$JSCompiler_StaticMethods_LayoutLegend$$$($JSCompiler_StaticMethods_LayoutLegend$self$$, $availSpace$$87$$) {
  var $attrGroups$$11$$ = D.$JSCompiler_alias_NULL$$;
  if($JSCompiler_StaticMethods_LayoutLegend$self$$.$_legendSource$ && $JSCompiler_StaticMethods_LayoutLegend$self$$.$_attrGroups$) {
    for(var $i$$584$$ = 0;$i$$584$$ < $JSCompiler_StaticMethods_LayoutLegend$self$$.$_attrGroups$.length;$i$$584$$++) {
      var $agDef$$1$$ = $JSCompiler_StaticMethods_LayoutLegend$self$$.$_attrGroups$[$i$$584$$];
      if($agDef$$1$$.id == $JSCompiler_StaticMethods_LayoutLegend$self$$.$_legendSource$) {
        $attrGroups$$11$$ = $agDef$$1$$.$attrGroups$;
        break
      }
    }
  }
  if($JSCompiler_StaticMethods_LayoutLegend$self$$.$_sizeValueStr$ || $JSCompiler_StaticMethods_LayoutLegend$self$$.$_colorValueStr$ || $attrGroups$$11$$) {
    $JSCompiler_StaticMethods_LayoutLegend$self$$.$_legend$ = D.$DvtTreeLegendRenderer$$.$render$($JSCompiler_StaticMethods_LayoutLegend$self$$, $availSpace$$87$$, $JSCompiler_StaticMethods_LayoutLegend$self$$.$_resources$.legendSize, $JSCompiler_StaticMethods_LayoutLegend$self$$.$_resources$.legendColor, $JSCompiler_StaticMethods_LayoutLegend$self$$.$_sizeValueStr$, $JSCompiler_StaticMethods_LayoutLegend$self$$.$_colorValueStr$, $attrGroups$$11$$)
  }
};
D.$JSCompiler_StaticMethods_RenderEmptyText$$ = function $$JSCompiler_StaticMethods_RenderEmptyText$$$($JSCompiler_StaticMethods_RenderEmptyText$self$$, $container$$142$$) {
  if($JSCompiler_StaticMethods_RenderEmptyText$self$$.$_emptyText$) {
    var $text$$64$$ = new D.$DvtOutputText$$($JSCompiler_StaticMethods_RenderEmptyText$self$$.$_context$, $JSCompiler_StaticMethods_RenderEmptyText$self$$.$_emptyText$, $JSCompiler_StaticMethods_RenderEmptyText$self$$.$Width$ / 2, $JSCompiler_StaticMethods_RenderEmptyText$self$$.$Height$ / 2);
    $text$$64$$.$alignCenter$();
    $text$$64$$.$alignMiddle$();
    D.$DvtTextUtils$$.$fitText$($text$$64$$, $JSCompiler_StaticMethods_RenderEmptyText$self$$.$Width$ - 4, $JSCompiler_StaticMethods_RenderEmptyText$self$$.$Height$ - 4, $JSCompiler_StaticMethods_RenderEmptyText$self$$);
    $container$$142$$.$addChild$($text$$64$$)
  }
};
D.$JSCompiler_StaticMethods_HasValidData$$ = function $$JSCompiler_StaticMethods_HasValidData$$$($JSCompiler_StaticMethods_HasValidData$self$$) {
  return $JSCompiler_StaticMethods_HasValidData$self$$.$_root$ && 0 < $JSCompiler_StaticMethods_HasValidData$self$$.$_root$.$getSize$()
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeView$$.prototype;
D.$JSCompiler_prototypeAlias$$.$GetDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$GetDisplayAnimation$$($container$$143$$, $bounds$$96$$) {
  return D.$DvtBlackBoxAnimationHandler$$.isSupported(this.$AnimationOnDisplay$) ? D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$(this.$_context$, this.$AnimationOnDisplay$, $container$$143$$, $bounds$$96$$, this.$AnimationDuration$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$() {
  this.$_deleteContainer$ && (this.removeChild(this.$_deleteContainer$), this.$_deleteContainer$ = D.$JSCompiler_alias_NULL$$);
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$ = D.$JSCompiler_alias_NULL$$);
  this.$AnimationStopped$ = D.$JSCompiler_alias_FALSE$$;
  this.$Animation$ = D.$JSCompiler_alias_NULL$$;
  this.$_eventHandler$.$addListeners$(this);
  (0,D.$JSCompiler_StaticMethods__processInitialFocus$$)(this, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$GetDeleteContainer$ = function $$JSCompiler_prototypeAlias$$$$GetDeleteContainer$$() {
  return new D.$DvtContainer$$(this.$_context$)
};
D.$JSCompiler_prototypeAlias$$.$CreateKeyboardHandler$ = function $$JSCompiler_prototypeAlias$$$$CreateKeyboardHandler$$($manager$$16$$) {
  return new D.$DvtBaseTreeKeyboardHandler$$($manager$$16$$)
};
D.$JSCompiler_prototypeAlias$$.$CreateEventManager$ = function $$JSCompiler_prototypeAlias$$$$CreateEventManager$$($view$$66$$, $context$$319$$, $callback$$98$$, $callbackObj$$62$$) {
  return new D.$DvtBaseTreeEventManager$$($view$$66$$, $context$$319$$, $callback$$98$$, $callbackObj$$62$$)
};
D.$JSCompiler_prototypeAlias$$.$GetInitialFocusedItem$ = (0,D.$JSCompiler_identityFn$$)();
D.$JSCompiler_prototypeAlias$$.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventHandler$");
D.$DvtBaseTreeView$_calcMaxDepth$$ = function $$DvtBaseTreeView$_calcMaxDepth$$$($node$$281$$, $depth$$20$$) {
  var $maxDepth$$2$$ = $depth$$20$$, $children$$21$$ = $node$$281$$.$getChildNodes$();
  if($children$$21$$) {
    for(var $i$$585$$ = 0;$i$$585$$ < $children$$21$$.length;$i$$585$$++) {
      var $childDepth$$ = (0,D.$DvtBaseTreeView$_calcMaxDepth$$)($children$$21$$[$i$$585$$], $depth$$20$$ + 1), $maxDepth$$2$$ = window.Math.max($maxDepth$$2$$, $childDepth$$)
    }
  }
  return $maxDepth$$2$$
};
D.$DvtBaseTreeView$$.prototype.$ApplyParsedProperties$ = function $$DvtBaseTreeView$$$$$ApplyParsedProperties$$($props$$25$$) {
  this.$_oldRoot$ = this.$_root$;
  this.$_oldAncestors$ = this.$_ancestors$;
  this.$_nodeCount$ = $props$$25$$.$nodeCount$;
  this.$_resources$ = $props$$25$$.$resources$ ? $props$$25$$.$resources$ : {};
  this.$_root$ = $props$$25$$.root;
  this.$_emptyText$ = $props$$25$$.$emptyText$;
  this.$_ancestors$ = $props$$25$$.$ancestors$;
  this.$_dropSiteFill$ = new D.$DvtSolidFill$$($props$$25$$.$dropSiteFillColor$, $props$$25$$.$dropSiteOpacity$);
  this.$_dropSiteStroke$ = new D.$DvtSolidStroke$$($props$$25$$.$dropSiteBorderColor$);
  this.$AnimationOnDisplay$ = $props$$25$$.$animationOnDisplay$;
  this.$AnimationOnDataChange$ = $props$$25$$.$animationOnDataChange$;
  this.$AnimationDuration$ = $props$$25$$.$animationDuration$;
  this.$Sorting$ = $props$$25$$.$sorting$;
  this.$_styles$ = $props$$25$$.$styles$;
  this.$_nodeSelection$ = $props$$25$$.$nodeSelection$;
  $props$$25$$.$templates$ && (this.$_templates$ = $props$$25$$.$templates$);
  this.$_nodeSelection$ ? (this.$_selectionHandler$ = new D.$DvtSelectionHandler$$($props$$25$$.$nodeSelection$), this.$_initialSelection$ = $props$$25$$.$selectedIds$) : this.$_selectionHandler$ = D.$JSCompiler_alias_NULL$$;
  this.$_eventHandler$.$setSelectionHandler$(this.$_selectionHandler$);
  this.$_eventHandler$.$ContextMenuHandler$ = $props$$25$$.$contextMenuHandler$;
  (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$_eventHandler$, this.$CreateKeyboardHandler$(this.$_eventHandler$));
  this.$_root$ && (this.$_maxDepth$ = (0,D.$DvtBaseTreeView$_calcMaxDepth$$)(this.$_root$, 0));
  this.$_attrGroups$ = $props$$25$$.$attrGroups$;
  this.$_legendSource$ = $props$$25$$.$legendSource$;
  this.$_sizeValueStr$ = $props$$25$$.$sizeValueStr$;
  this.$_colorValueStr$ = $props$$25$$.$colorValueStr$
};
D.$DvtBaseTreeView$$.prototype.$ReselectNodes$ = function $$DvtBaseTreeView$$$$$ReselectNodes$$() {
  for(var $selectedNodes$$1$$ = this.$_selectionHandler$ ? this.$_selectionHandler$.getSelection() : [], $i$$586$$ = 0;$i$$586$$ < $selectedNodes$$1$$.length;$i$$586$$++) {
    $selectedNodes$$1$$[$i$$586$$].$setSelected$(D.$JSCompiler_alias_TRUE$$)
  }
};
D.$DvtBaseTreeView$$.prototype.$_processInitialSelections$ = function $$DvtBaseTreeView$$$$$_processInitialSelections$$() {
  if(this.$_selectionHandler$ && this.$_initialSelection$) {
    var $targets$$4$$ = [];
    (0,D.$JSCompiler_StaticMethods__addSelectableObjectsToArray$$)(this, this.$_root$, $targets$$4$$);
    (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)(this.$_selectionHandler$, this.$_initialSelection$, $targets$$4$$);
    this.$_initialSelection$ = D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_StaticMethods__processInitialFocus$$ = function $$JSCompiler_StaticMethods__processInitialFocus$$$($JSCompiler_StaticMethods__processInitialFocus$self$$, $applyVisualEffects$$) {
  var $initialFocus$$ = D.$JSCompiler_alias_NULL$$, $id$$148$$ = $JSCompiler_StaticMethods__processInitialFocus$self$$.$_navigableIdToFocus$;
  $id$$148$$ && ($initialFocus$$ = (0,D.$DvtBaseTreeNode$getNodeById$$)($JSCompiler_StaticMethods__processInitialFocus$self$$.$_root$, $id$$148$$), $JSCompiler_StaticMethods__processInitialFocus$self$$.$_eventHandler$.$setFocus$($initialFocus$$));
  $applyVisualEffects$$ && ($JSCompiler_StaticMethods__processInitialFocus$self$$.$_navigableIdToFocus$ = D.$JSCompiler_alias_NULL$$);
  $initialFocus$$ || ($initialFocus$$ = $JSCompiler_StaticMethods__processInitialFocus$self$$.$GetInitialFocusedItem$($JSCompiler_StaticMethods__processInitialFocus$self$$.$_root$), $JSCompiler_StaticMethods__processInitialFocus$self$$.$_eventHandler$.$setFocus$($initialFocus$$));
  $applyVisualEffects$$ && $JSCompiler_StaticMethods__processInitialFocus$self$$.$setFocused$($JSCompiler_StaticMethods__processInitialFocus$self$$.$isFocused$())
};
D.$DvtBaseTreeView$$.prototype.$setFocused$ = function $$DvtBaseTreeView$$$$$setFocused$$($isFocused$$1$$) {
  this.$_hasFocus$ = $isFocused$$1$$;
  this.$_eventHandler$.$setFocused$($isFocused$$1$$)
};
D.$DvtBaseTreeView$$.prototype.$isFocused$ = (0,D.$JSCompiler_get$$)("$_hasFocus$");
D.$JSCompiler_StaticMethods__addSelectableObjectsToArray$$ = function $$JSCompiler_StaticMethods__addSelectableObjectsToArray$$$($JSCompiler_StaticMethods__addSelectableObjectsToArray$self$$, $children$$22_node$$282$$, $ret$$96$$) {
  if($children$$22_node$$282$$ && ($ret$$96$$.push($children$$22_node$$282$$), $children$$22_node$$282$$ = $children$$22_node$$282$$.$getChildNodes$())) {
    for(var $i$$587$$ = 0;$i$$587$$ < $children$$22_node$$282$$.length;$i$$587$$++) {
      (0,D.$JSCompiler_StaticMethods__addSelectableObjectsToArray$$)($JSCompiler_StaticMethods__addSelectableObjectsToArray$self$$, $children$$22_node$$282$$[$i$$587$$], $ret$$96$$)
    }
  }
};
D.$DvtBaseTreeView$$.prototype.$__isDragAvailable$ = function $$DvtBaseTreeView$$$$$__isDragAvailable$$($clientIds$$17$$) {
  return this.$_selectionHandler$ ? $clientIds$$17$$[0] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseTreeView$$.prototype.$__getDragTransferable$ = function $$DvtBaseTreeView$$$$$__getDragTransferable$$($node$$283_rowKeys$$3$$) {
  $node$$283_rowKeys$$3$$.$isSelected$() || (this.$_selectionHandler$.$processClick$($node$$283_rowKeys$$3$$, D.$JSCompiler_alias_FALSE$$), this.$_eventHandler$.$fireSelectionEvent$());
  $node$$283_rowKeys$$3$$ = [];
  for(var $selection$$31$$ = this.$_selectionHandler$.getSelection(), $i$$588$$ = 0;$i$$588$$ < $selection$$31$$.length;$i$$588$$++) {
    $node$$283_rowKeys$$3$$.push($selection$$31$$[$i$$588$$].getId())
  }
  return $node$$283_rowKeys$$3$$
};
D.$DvtBaseTreeView$$.prototype.$__getDragFeedback$ = function $$DvtBaseTreeView$$$$$__getDragFeedback$$() {
  for(var $displayables$$17$$ = [], $selection$$32$$ = this.$_selectionHandler$.getSelection(), $i$$589$$ = 0;$i$$589$$ < $selection$$32$$.length;$i$$589$$++) {
    $displayables$$17$$.push($selection$$32$$[$i$$589$$].$__getDisplayable$())
  }
  return $displayables$$17$$
};
D.$DvtBaseTreeView$$.prototype.$__processBreadcrumbsEvent$ = function $$DvtBaseTreeView$$$$$__processBreadcrumbsEvent$$($event$$493$$) {
  $event$$493$$ instanceof D.$DvtBreadcrumbsDrillEvent$$ && (0,D.$JSCompiler_StaticMethods___drill$$)(this, $event$$493$$.getId(), D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods___drill$$ = function $$JSCompiler_StaticMethods___drill$$$($JSCompiler_StaticMethods___drill$self$$, $id$$149$$, $bDrillUp$$) {
  $bDrillUp$$ && $JSCompiler_StaticMethods___drill$self$$.$_root$ && $id$$149$$ == $JSCompiler_StaticMethods___drill$self$$.$_root$.getId() && $JSCompiler_StaticMethods___drill$self$$.$_ancestors$ && 0 < $JSCompiler_StaticMethods___drill$self$$.$_ancestors$.length ? ($JSCompiler_StaticMethods___drill$self$$.$_navigableIdToFocus$ = $id$$149$$, $JSCompiler_StaticMethods___drill$self$$.$__dispatchEvent$(new D.$DvtDrillReplaceEvent$$($JSCompiler_StaticMethods___drill$self$$.$_ancestors$[0].id))) : $bDrillUp$$ || 
  $JSCompiler_StaticMethods___drill$self$$.$__dispatchEvent$(new D.$DvtDrillReplaceEvent$$($id$$149$$));
  $JSCompiler_StaticMethods___drill$self$$.$_context$.$getTooltipManager$().$hideTooltip$()
};
D.$DvtBaseTreeView$$.prototype.$getLogicalObject$ = function $$DvtBaseTreeView$$$$$getLogicalObject$$($target$$75$$) {
  return this.$_eventHandler$.$GetLogicalObject$($target$$75$$)
};
D.$DvtBaseTreeView$$.prototype.$getBundle$ = function $$DvtBaseTreeView$$$$$getBundle$$() {
  this.$_bundle$ || (this.$_bundle$ = new D.$DvtUtilBundle$$);
  return this.$_bundle$
};
D.$DvtBaseTreeView$$.prototype.$getAutomation$ = function $$DvtBaseTreeView$$$$$getAutomation$$() {
  return new D.$DvtTreeAutomation$$(this)
};
D.$DvtBaseTreeView$$.prototype.getAutomation = D.$DvtBaseTreeView$$.prototype.$getAutomation$;
D.$DvtBaseTreeView$$.prototype.$isDragAvailable$ = function $$DvtBaseTreeView$$$$$isDragAvailable$$($mouseX$$40$$, $mouseY$$40$$, $clientIds$$19$$) {
  return this.$_dragSource$.$isDragAvailable$($clientIds$$19$$)
};
D.$DvtBaseTreeView$$.prototype.$getDragTransferable$ = function $$DvtBaseTreeView$$$$$getDragTransferable$$($mouseX$$41$$, $mouseY$$41$$) {
  return this.$_dragSource$.$getDragTransferable$($mouseX$$41$$, $mouseY$$41$$)
};

D.$DvtBaseTreeAnimationHandler$$ = function $$DvtBaseTreeAnimationHandler$$$($context$$67$$, $deleteContainer$$) {
  this.Init($context$$67$$, $deleteContainer$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeAnimationHandler$$, D.$DvtDataAnimationHandler$$, "DvtBaseTreeAnimationHandler");
D.$DvtBaseTreeAnimationHandler$_isAncestor$$ = function $$DvtBaseTreeAnimationHandler$_isAncestor$$$($ancestors$$2$$, $node$$55$$) {
  if(!$node$$55$$ || !$ancestors$$2$$) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $i$$130$$ = 0;$i$$130$$ < $ancestors$$2$$.length;$i$$130$$++) {
    if($ancestors$$2$$[$i$$130$$].id == $node$$55$$.getId()) {
      return D.$JSCompiler_alias_TRUE$$
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtBaseTreeDropTarget$$ = (0,D.$JSCompiler_set$$)("$_view$");
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeDropTarget$$, D.$DvtDropTarget$$, "DvtBaseTreeDropTarget");
D.$DvtBaseTreeEventManager$$ = function $$DvtBaseTreeEventManager$$$($view$$41$$, $context$$68$$, $callback$$37$$, $callbackObj$$5$$) {
  this.Init($context$$68$$, $callback$$37$$, $callbackObj$$5$$);
  this.$_view$ = $view$$41$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeEventManager$$, D.$DvtEventManager$$, "DvtBaseTreeEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnDblClick$ = function $$JSCompiler_prototypeAlias$$$$OnDblClick$$($event$$120_shiftKey$$inline_2234$$) {
  D.$DvtBaseTreeEventManager$$.$superclass$.$OnDblClick$.call(this, $event$$120_shiftKey$$inline_2234$$);
  var $obj$$45$$ = this.$GetLogicalObject$($event$$120_shiftKey$$inline_2234$$.target);
  $obj$$45$$ && ($event$$120_shiftKey$$inline_2234$$ = $event$$120_shiftKey$$inline_2234$$.shiftKey, $obj$$45$$.$isDrillReplaceEnabled$ && $obj$$45$$.$isDrillReplaceEnabled$() && (0,D.$JSCompiler_StaticMethods___drill$$)(this.$_view$, $obj$$45$$.getId(), $event$$120_shiftKey$$inline_2234$$))
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$121_obj$$46$$) {
  D.$DvtBaseTreeEventManager$$.$superclass$.$OnClick$.call(this, $event$$121_obj$$46$$);
  $event$$121_obj$$46$$ = this.$GetLogicalObject$($event$$121_obj$$46$$.target);
  (0,D.$JSCompiler_StaticMethods__processNodeLabel$$)(this, $event$$121_obj$$46$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$122_obj$$47$$) {
  D.$DvtBaseTreeEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$122_obj$$47$$);
  ($event$$122_obj$$47$$ = this.$GetLogicalObject$($event$$122_obj$$47$$.target)) && $event$$122_obj$$47$$.$handleMouseOver$ && $event$$122_obj$$47$$.$handleMouseOver$()
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$123_relatedObj$$) {
  D.$DvtBaseTreeEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$123_relatedObj$$);
  var $obj$$48$$ = this.$GetLogicalObject$($event$$123_relatedObj$$.target);
  $obj$$48$$ && $obj$$48$$.$handleMouseOut$ && ($event$$123_relatedObj$$ = this.$GetLogicalObject$($event$$123_relatedObj$$.relatedTarget), ($event$$123_relatedObj$$ && $event$$123_relatedObj$$.getId ? $event$$123_relatedObj$$.getId() : D.$JSCompiler_alias_NULL$$) != $obj$$48$$.getId() && $obj$$48$$.$handleMouseOut$())
};
D.$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$124$$) {
  var $eventConsumed_obj$$49$$ = D.$JSCompiler_alias_FALSE$$, $eventConsumed_obj$$49$$ = this.$getFocus$();
  13 == $event$$124$$.keyCode && !$event$$124$$.ctrlKey ? ($eventConsumed_obj$$49$$ = this.$getFocus$(), $eventConsumed_obj$$49$$.$isDrillReplaceEnabled$ && $eventConsumed_obj$$49$$.$isDrillReplaceEnabled$() && ($event$$124$$.shiftKey && ($eventConsumed_obj$$49$$ = this.$_view$.$_root$), (0,D.$JSCompiler_StaticMethods___drill$$)(this.$_view$, $eventConsumed_obj$$49$$.getId(), $event$$124$$.shiftKey)), $event$$124$$.preventDefault(), $eventConsumed_obj$$49$$ = D.$JSCompiler_alias_TRUE$$) : $eventConsumed_obj$$49$$ = 
  D.$DvtBaseTreeEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$124$$);
  return $eventConsumed_obj$$49$$
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchClickInternal$$($event$$125_obj$$50$$) {
  $event$$125_obj$$50$$ = this.$GetLogicalObject$($event$$125_obj$$50$$.target);
  (0,D.$JSCompiler_StaticMethods__processNodeLabel$$)(this, $event$$125_obj$$50$$);
  this.$_currentHoverItem$ && this.$_currentHoverItem$ != $event$$125_obj$$50$$ && (this.$_currentHoverItem$.$handleMouseOut$(), this.$_currentHoverItem$ = D.$JSCompiler_alias_NULL$$);
  $event$$125_obj$$50$$ && $event$$125_obj$$50$$ instanceof D.$DvtBaseTreeNode$$ && this.$_currentHoverItem$ != $event$$125_obj$$50$$ && (this.$_currentHoverItem$ = $event$$125_obj$$50$$, $event$$125_obj$$50$$.$handleMouseOver$())
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchDblClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchDblClick$$($event$$126_obj$$51$$) {
  ($event$$126_obj$$51$$ = this.$GetLogicalObject$($event$$126_obj$$51$$.target)) && $event$$126_obj$$51$$.$isDrillReplaceEnabled$ && $event$$126_obj$$51$$.$isDrillReplaceEnabled$() && (0,D.$JSCompiler_StaticMethods___drill$$)(this.$_view$, $event$$126_obj$$51$$.getId(), D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods__processNodeLabel$$ = function $$JSCompiler_StaticMethods__processNodeLabel$$$($JSCompiler_StaticMethods__processNodeLabel$self$$, $obj$$52$$) {
  $obj$$52$$ && ($obj$$52$$ instanceof D.$DvtBaseTreePeer$$ && $obj$$52$$.$_bDrillable$) && (0,D.$JSCompiler_StaticMethods___drill$$)($JSCompiler_StaticMethods__processNodeLabel$self$$.$_view$, $obj$$52$$.getId(), D.$JSCompiler_alias_FALSE$$)
};
D.$DvtBaseTreeParser$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeParser$$, D.$DvtObj$$, "DvtBaseTreeParser");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeParser$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($treeView$$) {
  this.$_view$ = $treeView$$;
  this.$_parser$ = new D.$DvtXmlParser$$;
  this.$_minAGColor$ = window.Infinity;
  this.$_maxAGColor$ = -window.Infinity
};
D.$JSCompiler_prototypeAlias$$.parse = function $$JSCompiler_prototypeAlias$$$parse$($ret$$2_xmlString$$2$$) {
  $ret$$2_xmlString$$2$$ = $ret$$2_xmlString$$2$$.replace(/&Oslash;/gi, "\u00f8");
  var $childNodes_rootNode$$1$$ = this.$_parser$.parse($ret$$2_xmlString$$2$$);
  $ret$$2_xmlString$$2$$ = this.$ParseRootAttributes$($childNodes_rootNode$$1$$);
  var $childNodes_rootNode$$1$$ = $childNodes_rootNode$$1$$.$getChildNodes$(), $JSCompiler_inline_result$$264_JSCompiler_temp$$294_artificialRoot$$inline_2198_i$$121_template$$inline_2186_treeView$$inline_2194$$;
  $JSCompiler_inline_result$$264_JSCompiler_temp$$294_artificialRoot$$inline_2198_i$$121_template$$inline_2186_treeView$$inline_2194$$ = (0,D.$JSCompiler_StaticMethods__getChildNodesByName$$)($childNodes_rootNode$$1$$, "f");
  var $attrs$$inline_9520_childNodes$$inline_9513_count$$inline_2187_ret$$inline_9495_rootNodes$$4_showPopupBehavior$$inline_2204_xmlNode$$inline_2201$$ = $JSCompiler_inline_result$$264_JSCompiler_temp$$294_artificialRoot$$inline_2198_i$$121_template$$inline_2186_treeView$$inline_2194$$.length;
  if(0 < $attrs$$inline_9520_childNodes$$inline_9513_count$$inline_2187_ret$$inline_9495_rootNodes$$4_showPopupBehavior$$inline_2204_xmlNode$$inline_2201$$) {
    for(var $JSCompiler_temp_const$$9006_JSCompiler_temp_const$$9097_id$$inline_9497_ret$$inline_2202_size$$inline_2196_temp$$inline_2188_xmlDataNodes$$, $ancestors$$inline_9512_i$$inline_2197_name$$inline_2203_resources$$inline_9519_root$$16_tempName$$inline_2189_templateId$$inline_9498$$, $attrGroups$$inline_9496_i$$inline_9514_i$$inline_9521_minValue$$inline_9499_templateMap$$inline_2190$$ = {}, $childNodes$$inline_9504_i$$inline_2191_id$$inline_9515_ramp$$inline_9503_xmlNode$$inline_9494$$ = 
    0;$childNodes$$inline_9504_i$$inline_2191_id$$inline_9515_ramp$$inline_9503_xmlNode$$inline_9494$$ < $attrs$$inline_9520_childNodes$$inline_9513_count$$inline_2187_ret$$inline_9495_rootNodes$$4_showPopupBehavior$$inline_2204_xmlNode$$inline_2201$$;$childNodes$$inline_9504_i$$inline_2191_id$$inline_9515_ramp$$inline_9503_xmlNode$$inline_9494$$++) {
      $JSCompiler_temp_const$$9006_JSCompiler_temp_const$$9097_id$$inline_9497_ret$$inline_2202_size$$inline_2196_temp$$inline_2188_xmlDataNodes$$ = $JSCompiler_inline_result$$264_JSCompiler_temp$$294_artificialRoot$$inline_2198_i$$121_template$$inline_2186_treeView$$inline_2194$$[$childNodes$$inline_9504_i$$inline_2191_id$$inline_9515_ramp$$inline_9503_xmlNode$$inline_9494$$], $ancestors$$inline_9512_i$$inline_2197_name$$inline_2203_resources$$inline_9519_root$$16_tempName$$inline_2189_templateId$$inline_9498$$ = 
      $JSCompiler_temp_const$$9006_JSCompiler_temp_const$$9097_id$$inline_9497_ret$$inline_2202_size$$inline_2196_temp$$inline_2188_xmlDataNodes$$.$getAttr$("name"), $attrGroups$$inline_9496_i$$inline_9514_i$$inline_9521_minValue$$inline_9499_templateMap$$inline_2190$$[$ancestors$$inline_9512_i$$inline_2197_name$$inline_2203_resources$$inline_9519_root$$16_tempName$$inline_2189_templateId$$inline_9498$$] = D.$DvtAfComponentFactory$$.$parseXml$($JSCompiler_temp_const$$9006_JSCompiler_temp_const$$9097_id$$inline_9497_ret$$inline_2202_size$$inline_2196_temp$$inline_2188_xmlDataNodes$$)
    }
    $JSCompiler_inline_result$$264_JSCompiler_temp$$294_artificialRoot$$inline_2198_i$$121_template$$inline_2186_treeView$$inline_2194$$ = $attrGroups$$inline_9496_i$$inline_9514_i$$inline_9521_minValue$$inline_9499_templateMap$$inline_2190$$
  }else {
    $JSCompiler_inline_result$$264_JSCompiler_temp$$294_artificialRoot$$inline_2198_i$$121_template$$inline_2186_treeView$$inline_2194$$ = D.$JSCompiler_alias_NULL$$
  }
  $ret$$2_xmlString$$2$$.$templates$ = $JSCompiler_inline_result$$264_JSCompiler_temp$$294_artificialRoot$$inline_2198_i$$121_template$$inline_2186_treeView$$inline_2194$$;
  this.$_nodeCount$ = 0;
  $JSCompiler_temp_const$$9006_JSCompiler_temp_const$$9097_id$$inline_9497_ret$$inline_2202_size$$inline_2196_temp$$inline_2188_xmlDataNodes$$ = (0,D.$JSCompiler_StaticMethods__getChildNodesByName$$)($childNodes_rootNode$$1$$, "n");
  $attrs$$inline_9520_childNodes$$inline_9513_count$$inline_2187_ret$$inline_9495_rootNodes$$4_showPopupBehavior$$inline_2204_xmlNode$$inline_2201$$ = [];
  for($JSCompiler_inline_result$$264_JSCompiler_temp$$294_artificialRoot$$inline_2198_i$$121_template$$inline_2186_treeView$$inline_2194$$ = 0;$JSCompiler_inline_result$$264_JSCompiler_temp$$294_artificialRoot$$inline_2198_i$$121_template$$inline_2186_treeView$$inline_2194$$ < $JSCompiler_temp_const$$9006_JSCompiler_temp_const$$9097_id$$inline_9497_ret$$inline_2202_size$$inline_2196_temp$$inline_2188_xmlDataNodes$$.length;$JSCompiler_inline_result$$264_JSCompiler_temp$$294_artificialRoot$$inline_2198_i$$121_template$$inline_2186_treeView$$inline_2194$$++) {
    ($ancestors$$inline_9512_i$$inline_2197_name$$inline_2203_resources$$inline_9519_root$$16_tempName$$inline_2189_templateId$$inline_9498$$ = this.$_parseDataNode$($JSCompiler_temp_const$$9006_JSCompiler_temp_const$$9097_id$$inline_9497_ret$$inline_2202_size$$inline_2196_temp$$inline_2188_xmlDataNodes$$[$JSCompiler_inline_result$$264_JSCompiler_temp$$294_artificialRoot$$inline_2198_i$$121_template$$inline_2186_treeView$$inline_2194$$], $ret$$2_xmlString$$2$$.$templates$)) && $attrs$$inline_9520_childNodes$$inline_9513_count$$inline_2187_ret$$inline_9495_rootNodes$$4_showPopupBehavior$$inline_2204_xmlNode$$inline_2201$$.push($ancestors$$inline_9512_i$$inline_2197_name$$inline_2203_resources$$inline_9519_root$$16_tempName$$inline_2189_templateId$$inline_9498$$)
  }
  $ret$$2_xmlString$$2$$.$nodeCount$ = this.$_nodeCount$;
  if(1 == $attrs$$inline_9520_childNodes$$inline_9513_count$$inline_2187_ret$$inline_9495_rootNodes$$4_showPopupBehavior$$inline_2204_xmlNode$$inline_2201$$.length) {
    $JSCompiler_inline_result$$264_JSCompiler_temp$$294_artificialRoot$$inline_2198_i$$121_template$$inline_2186_treeView$$inline_2194$$ = $attrs$$inline_9520_childNodes$$inline_9513_count$$inline_2187_ret$$inline_9495_rootNodes$$4_showPopupBehavior$$inline_2204_xmlNode$$inline_2201$$[0]
  }else {
    $JSCompiler_inline_result$$264_JSCompiler_temp$$294_artificialRoot$$inline_2198_i$$121_template$$inline_2186_treeView$$inline_2194$$ = this.$_view$;
    for($ancestors$$inline_9512_i$$inline_2197_name$$inline_2203_resources$$inline_9519_root$$16_tempName$$inline_2189_templateId$$inline_9498$$ = $JSCompiler_temp_const$$9006_JSCompiler_temp_const$$9097_id$$inline_9497_ret$$inline_2202_size$$inline_2196_temp$$inline_2188_xmlDataNodes$$ = 0;$ancestors$$inline_9512_i$$inline_2197_name$$inline_2203_resources$$inline_9519_root$$16_tempName$$inline_2189_templateId$$inline_9498$$ < $attrs$$inline_9520_childNodes$$inline_9513_count$$inline_2187_ret$$inline_9495_rootNodes$$4_showPopupBehavior$$inline_2204_xmlNode$$inline_2201$$.length;$ancestors$$inline_9512_i$$inline_2197_name$$inline_2203_resources$$inline_9519_root$$16_tempName$$inline_2189_templateId$$inline_9498$$++) {
      $JSCompiler_temp_const$$9006_JSCompiler_temp_const$$9097_id$$inline_9497_ret$$inline_2202_size$$inline_2196_temp$$inline_2188_xmlDataNodes$$ += $attrs$$inline_9520_childNodes$$inline_9513_count$$inline_2187_ret$$inline_9495_rootNodes$$4_showPopupBehavior$$inline_2204_xmlNode$$inline_2201$$[$ancestors$$inline_9512_i$$inline_2197_name$$inline_2203_resources$$inline_9519_root$$16_tempName$$inline_2189_templateId$$inline_9498$$].$getSize$()
    }
    $JSCompiler_inline_result$$264_JSCompiler_temp$$294_artificialRoot$$inline_2198_i$$121_template$$inline_2186_treeView$$inline_2194$$ = this.$CreateNode$($JSCompiler_inline_result$$264_JSCompiler_temp$$294_artificialRoot$$inline_2198_i$$121_template$$inline_2186_treeView$$inline_2194$$, {size:$JSCompiler_temp_const$$9006_JSCompiler_temp_const$$9097_id$$inline_9497_ret$$inline_2202_size$$inline_2196_temp$$inline_2188_xmlDataNodes$$, $bArtificialRoot$:D.$JSCompiler_alias_TRUE$$, $disclosed$:D.$JSCompiler_alias_TRUE$$});
    (0,D.$JSCompiler_StaticMethods_setChildNodes$$)($JSCompiler_inline_result$$264_JSCompiler_temp$$294_artificialRoot$$inline_2198_i$$121_template$$inline_2186_treeView$$inline_2194$$, $attrs$$inline_9520_childNodes$$inline_9513_count$$inline_2187_ret$$inline_9495_rootNodes$$4_showPopupBehavior$$inline_2204_xmlNode$$inline_2201$$)
  }
  $ret$$2_xmlString$$2$$.root = $JSCompiler_inline_result$$264_JSCompiler_temp$$294_artificialRoot$$inline_2198_i$$121_template$$inline_2186_treeView$$inline_2194$$;
  for($JSCompiler_inline_result$$264_JSCompiler_temp$$294_artificialRoot$$inline_2198_i$$121_template$$inline_2186_treeView$$inline_2194$$ = 0;$JSCompiler_inline_result$$264_JSCompiler_temp$$294_artificialRoot$$inline_2198_i$$121_template$$inline_2186_treeView$$inline_2194$$ < $childNodes_rootNode$$1$$.length;$JSCompiler_inline_result$$264_JSCompiler_temp$$294_artificialRoot$$inline_2198_i$$121_template$$inline_2186_treeView$$inline_2194$$++) {
    if($attrs$$inline_9520_childNodes$$inline_9513_count$$inline_2187_ret$$inline_9495_rootNodes$$4_showPopupBehavior$$inline_2204_xmlNode$$inline_2201$$ = $childNodes_rootNode$$1$$[$JSCompiler_inline_result$$264_JSCompiler_temp$$294_artificialRoot$$inline_2198_i$$121_template$$inline_2186_treeView$$inline_2194$$], $JSCompiler_temp_const$$9006_JSCompiler_temp_const$$9097_id$$inline_9497_ret$$inline_2202_size$$inline_2196_temp$$inline_2188_xmlDataNodes$$ = $ret$$2_xmlString$$2$$, $attrs$$inline_9520_childNodes$$inline_9513_count$$inline_2187_ret$$inline_9495_rootNodes$$4_showPopupBehavior$$inline_2204_xmlNode$$inline_2201$$) {
      if($ancestors$$inline_9512_i$$inline_2197_name$$inline_2203_resources$$inline_9519_root$$16_tempName$$inline_2189_templateId$$inline_9498$$ = $attrs$$inline_9520_childNodes$$inline_9513_count$$inline_2187_ret$$inline_9495_rootNodes$$4_showPopupBehavior$$inline_2204_xmlNode$$inline_2201$$.getName(), "spb" == $ancestors$$inline_9512_i$$inline_2197_name$$inline_2203_resources$$inline_9519_root$$16_tempName$$inline_2189_templateId$$inline_9498$$) {
        $attrs$$inline_9520_childNodes$$inline_9513_count$$inline_2187_ret$$inline_9495_rootNodes$$4_showPopupBehavior$$inline_2204_xmlNode$$inline_2201$$ = this.$_parseShowPopupBehavior$($attrs$$inline_9520_childNodes$$inline_9513_count$$inline_2187_ret$$inline_9495_rootNodes$$4_showPopupBehavior$$inline_2204_xmlNode$$inline_2201$$, $JSCompiler_temp_const$$9006_JSCompiler_temp_const$$9097_id$$inline_9497_ret$$inline_2202_size$$inline_2196_temp$$inline_2188_xmlDataNodes$$), $JSCompiler_temp_const$$9006_JSCompiler_temp_const$$9097_id$$inline_9497_ret$$inline_2202_size$$inline_2196_temp$$inline_2188_xmlDataNodes$$.$showPopupBehaviors$ || 
        ($JSCompiler_temp_const$$9006_JSCompiler_temp_const$$9097_id$$inline_9497_ret$$inline_2202_size$$inline_2196_temp$$inline_2188_xmlDataNodes$$.$showPopupBehaviors$ = []), $JSCompiler_temp_const$$9006_JSCompiler_temp_const$$9097_id$$inline_9497_ret$$inline_2202_size$$inline_2196_temp$$inline_2188_xmlDataNodes$$.$showPopupBehaviors$.push($attrs$$inline_9520_childNodes$$inline_9513_count$$inline_2187_ret$$inline_9495_rootNodes$$4_showPopupBehavior$$inline_2204_xmlNode$$inline_2201$$)
      }else {
        if("menus" == $ancestors$$inline_9512_i$$inline_2197_name$$inline_2203_resources$$inline_9519_root$$16_tempName$$inline_2189_templateId$$inline_9498$$) {
          $JSCompiler_temp_const$$9006_JSCompiler_temp_const$$9097_id$$inline_9497_ret$$inline_2202_size$$inline_2196_temp$$inline_2188_xmlDataNodes$$.$contextMenuHandler$ || ($JSCompiler_temp_const$$9006_JSCompiler_temp_const$$9097_id$$inline_9497_ret$$inline_2202_size$$inline_2196_temp$$inline_2188_xmlDataNodes$$.$contextMenuHandler$ = new D.$DvtContextMenuHandler$$(this.$_view$.$_context$)), $JSCompiler_temp_const$$9006_JSCompiler_temp_const$$9097_id$$inline_9497_ret$$inline_2202_size$$inline_2196_temp$$inline_2188_xmlDataNodes$$.$contextMenuHandler$.add($attrs$$inline_9520_childNodes$$inline_9513_count$$inline_2187_ret$$inline_9495_rootNodes$$4_showPopupBehavior$$inline_2204_xmlNode$$inline_2201$$)
        }else {
          if("ag" == $ancestors$$inline_9512_i$$inline_2197_name$$inline_2203_resources$$inline_9519_root$$16_tempName$$inline_2189_templateId$$inline_9498$$) {
            $childNodes$$inline_9504_i$$inline_2191_id$$inline_9515_ramp$$inline_9503_xmlNode$$inline_9494$$ = $attrs$$inline_9520_childNodes$$inline_9513_count$$inline_2187_ret$$inline_9495_rootNodes$$4_showPopupBehavior$$inline_2204_xmlNode$$inline_2201$$;
            $attrs$$inline_9520_childNodes$$inline_9513_count$$inline_2187_ret$$inline_9495_rootNodes$$4_showPopupBehavior$$inline_2204_xmlNode$$inline_2201$$ = $JSCompiler_temp_const$$9006_JSCompiler_temp_const$$9097_id$$inline_9497_ret$$inline_2202_size$$inline_2196_temp$$inline_2188_xmlDataNodes$$;
            $attrGroups$$inline_9496_i$$inline_9514_i$$inline_9521_minValue$$inline_9499_templateMap$$inline_2190$$ = D.$JSCompiler_alias_VOID$$;
            $JSCompiler_temp_const$$9006_JSCompiler_temp_const$$9097_id$$inline_9497_ret$$inline_2202_size$$inline_2196_temp$$inline_2188_xmlDataNodes$$ = $childNodes$$inline_9504_i$$inline_2191_id$$inline_9515_ramp$$inline_9503_xmlNode$$inline_9494$$.$getAttr$("id");
            $ancestors$$inline_9512_i$$inline_2197_name$$inline_2203_resources$$inline_9519_root$$16_tempName$$inline_2189_templateId$$inline_9498$$ = $childNodes$$inline_9504_i$$inline_2191_id$$inline_9515_ramp$$inline_9503_xmlNode$$inline_9494$$.$getAttr$("T");
            if("continuous" == $childNodes$$inline_9504_i$$inline_2191_id$$inline_9515_ramp$$inline_9503_xmlNode$$inline_9494$$.$getAttr$("t")) {
              var $attrGroups$$inline_9496_i$$inline_9514_i$$inline_9521_minValue$$inline_9499_templateMap$$inline_2190$$ = $childNodes$$inline_9504_i$$inline_2191_id$$inline_9515_ramp$$inline_9503_xmlNode$$inline_9494$$.$getAttr$("minValue"), $i$$inline_9505_maxValue$$inline_9500_text$$inline_9516$$ = $childNodes$$inline_9504_i$$inline_2191_id$$inline_9515_ramp$$inline_9503_xmlNode$$inline_9494$$.$getAttr$("maxValue"), $group$$inline_9507_minLabel$$inline_9501$$ = $childNodes$$inline_9504_i$$inline_2191_id$$inline_9515_ramp$$inline_9503_xmlNode$$inline_9494$$.$getAttr$("minLabel"), 
              $groupLabel$$inline_9508_maxLabel$$inline_9502$$ = $childNodes$$inline_9504_i$$inline_2191_id$$inline_9515_ramp$$inline_9503_xmlNode$$inline_9494$$.$getAttr$("maxLabel"), $childNodes$$inline_9504_i$$inline_2191_id$$inline_9515_ramp$$inline_9503_xmlNode$$inline_9494$$ = $childNodes$$inline_9504_i$$inline_2191_id$$inline_9515_ramp$$inline_9503_xmlNode$$inline_9494$$.$getAttr$("ramp").split(";");
              $attrGroups$$inline_9496_i$$inline_9514_i$$inline_9521_minValue$$inline_9499_templateMap$$inline_2190$$ == D.$JSCompiler_alias_NULL$$ && ($attrGroups$$inline_9496_i$$inline_9514_i$$inline_9521_minValue$$inline_9499_templateMap$$inline_2190$$ = this.$_minAGColor$);
              $i$$inline_9505_maxValue$$inline_9500_text$$inline_9516$$ == D.$JSCompiler_alias_NULL$$ && ($i$$inline_9505_maxValue$$inline_9500_text$$inline_9516$$ = this.$_maxAGColor$);
              $attrGroups$$inline_9496_i$$inline_9514_i$$inline_9521_minValue$$inline_9499_templateMap$$inline_2190$$ = new D.$DvtContinuousAttrGroups$$($attrGroups$$inline_9496_i$$inline_9514_i$$inline_9521_minValue$$inline_9499_templateMap$$inline_2190$$, $i$$inline_9505_maxValue$$inline_9500_text$$inline_9516$$, $group$$inline_9507_minLabel$$inline_9501$$, $groupLabel$$inline_9508_maxLabel$$inline_9502$$, $childNodes$$inline_9504_i$$inline_2191_id$$inline_9515_ramp$$inline_9503_xmlNode$$inline_9494$$)
            }else {
              $attrGroups$$inline_9496_i$$inline_9514_i$$inline_9521_minValue$$inline_9499_templateMap$$inline_2190$$ = new D.$DvtDiscreteAttrGroups$$;
              $childNodes$$inline_9504_i$$inline_2191_id$$inline_9515_ramp$$inline_9503_xmlNode$$inline_9494$$ = $childNodes$$inline_9504_i$$inline_2191_id$$inline_9515_ramp$$inline_9503_xmlNode$$inline_9494$$.$getChildNodes$();
              for($i$$inline_9505_maxValue$$inline_9500_text$$inline_9516$$ = 0;$i$$inline_9505_maxValue$$inline_9500_text$$inline_9516$$ < $childNodes$$inline_9504_i$$inline_2191_id$$inline_9515_ramp$$inline_9503_xmlNode$$inline_9494$$.length;$i$$inline_9505_maxValue$$inline_9500_text$$inline_9516$$++) {
                var $child$$inline_9506_params$$inline_9509$$ = $childNodes$$inline_9504_i$$inline_2191_id$$inline_9515_ramp$$inline_9503_xmlNode$$inline_9494$$[$i$$inline_9505_maxValue$$inline_9500_text$$inline_9516$$];
                $child$$inline_9506_params$$inline_9509$$ && ($group$$inline_9507_minLabel$$inline_9501$$ = $child$$inline_9506_params$$inline_9509$$.$getAttr$("g"), $groupLabel$$inline_9508_maxLabel$$inline_9502$$ = $child$$inline_9506_params$$inline_9509$$.$getAttr$("l"), $child$$inline_9506_params$$inline_9509$$ = {color:$child$$inline_9506_params$$inline_9509$$.$getAttr$("c"), pattern:$child$$inline_9506_params$$inline_9509$$.$getAttr$("p")}, $attrGroups$$inline_9496_i$$inline_9514_i$$inline_9521_minValue$$inline_9499_templateMap$$inline_2190$$.add($group$$inline_9507_minLabel$$inline_9501$$, 
                $groupLabel$$inline_9508_maxLabel$$inline_9502$$, $child$$inline_9506_params$$inline_9509$$))
              }
            }
            $attrs$$inline_9520_childNodes$$inline_9513_count$$inline_2187_ret$$inline_9495_rootNodes$$4_showPopupBehavior$$inline_2204_xmlNode$$inline_2201$$.$attrGroups$ || ($attrs$$inline_9520_childNodes$$inline_9513_count$$inline_2187_ret$$inline_9495_rootNodes$$4_showPopupBehavior$$inline_2204_xmlNode$$inline_2201$$.$attrGroups$ = []);
            $attrs$$inline_9520_childNodes$$inline_9513_count$$inline_2187_ret$$inline_9495_rootNodes$$4_showPopupBehavior$$inline_2204_xmlNode$$inline_2201$$.$attrGroups$.push({$attrGroups$:$attrGroups$$inline_9496_i$$inline_9514_i$$inline_9521_minValue$$inline_9499_templateMap$$inline_2190$$, $templateId$:$ancestors$$inline_9512_i$$inline_2197_name$$inline_2203_resources$$inline_9519_root$$16_tempName$$inline_2189_templateId$$inline_9498$$, id:$JSCompiler_temp_const$$9006_JSCompiler_temp_const$$9097_id$$inline_9497_ret$$inline_2202_size$$inline_2196_temp$$inline_2188_xmlDataNodes$$})
          }else {
            if("styles" == $ancestors$$inline_9512_i$$inline_2197_name$$inline_2203_resources$$inline_9519_root$$16_tempName$$inline_2189_templateId$$inline_9498$$) {
              $JSCompiler_temp_const$$9006_JSCompiler_temp_const$$9097_id$$inline_9497_ret$$inline_2202_size$$inline_2196_temp$$inline_2188_xmlDataNodes$$.$styles$ = this.$_parseStyles$($attrs$$inline_9520_childNodes$$inline_9513_count$$inline_2187_ret$$inline_9495_rootNodes$$4_showPopupBehavior$$inline_2204_xmlNode$$inline_2201$$, $JSCompiler_temp_const$$9006_JSCompiler_temp_const$$9097_id$$inline_9497_ret$$inline_2202_size$$inline_2196_temp$$inline_2188_xmlDataNodes$$)
            }else {
              if("a" == $ancestors$$inline_9512_i$$inline_2197_name$$inline_2203_resources$$inline_9519_root$$16_tempName$$inline_2189_templateId$$inline_9498$$) {
                $ancestors$$inline_9512_i$$inline_2197_name$$inline_2203_resources$$inline_9519_root$$16_tempName$$inline_2189_templateId$$inline_9498$$ = [];
                $attrs$$inline_9520_childNodes$$inline_9513_count$$inline_2187_ret$$inline_9495_rootNodes$$4_showPopupBehavior$$inline_2204_xmlNode$$inline_2201$$ = $attrs$$inline_9520_childNodes$$inline_9513_count$$inline_2187_ret$$inline_9495_rootNodes$$4_showPopupBehavior$$inline_2204_xmlNode$$inline_2201$$.$getChildNodes$();
                for($attrGroups$$inline_9496_i$$inline_9514_i$$inline_9521_minValue$$inline_9499_templateMap$$inline_2190$$ = 0;$attrGroups$$inline_9496_i$$inline_9514_i$$inline_9521_minValue$$inline_9499_templateMap$$inline_2190$$ < $attrs$$inline_9520_childNodes$$inline_9513_count$$inline_2187_ret$$inline_9495_rootNodes$$4_showPopupBehavior$$inline_2204_xmlNode$$inline_2201$$.length;$attrGroups$$inline_9496_i$$inline_9514_i$$inline_9521_minValue$$inline_9499_templateMap$$inline_2190$$++) {
                  $childNodes$$inline_9504_i$$inline_2191_id$$inline_9515_ramp$$inline_9503_xmlNode$$inline_9494$$ = $attrs$$inline_9520_childNodes$$inline_9513_count$$inline_2187_ret$$inline_9495_rootNodes$$4_showPopupBehavior$$inline_2204_xmlNode$$inline_2201$$[$attrGroups$$inline_9496_i$$inline_9514_i$$inline_9521_minValue$$inline_9499_templateMap$$inline_2190$$].$getAttr$("id"), $i$$inline_9505_maxValue$$inline_9500_text$$inline_9516$$ = $attrs$$inline_9520_childNodes$$inline_9513_count$$inline_2187_ret$$inline_9495_rootNodes$$4_showPopupBehavior$$inline_2204_xmlNode$$inline_2201$$[$attrGroups$$inline_9496_i$$inline_9514_i$$inline_9521_minValue$$inline_9499_templateMap$$inline_2190$$].$getAttr$("l"), 
                  $ancestors$$inline_9512_i$$inline_2197_name$$inline_2203_resources$$inline_9519_root$$16_tempName$$inline_2189_templateId$$inline_9498$$.push({id:$childNodes$$inline_9504_i$$inline_2191_id$$inline_9515_ramp$$inline_9503_xmlNode$$inline_9494$$, text:$i$$inline_9505_maxValue$$inline_9500_text$$inline_9516$$})
                }
                $JSCompiler_temp_const$$9006_JSCompiler_temp_const$$9097_id$$inline_9497_ret$$inline_2202_size$$inline_2196_temp$$inline_2188_xmlDataNodes$$.$ancestors$ = $ancestors$$inline_9512_i$$inline_2197_name$$inline_2203_resources$$inline_9519_root$$16_tempName$$inline_2189_templateId$$inline_9498$$
              }else {
                if("resources" == $ancestors$$inline_9512_i$$inline_2197_name$$inline_2203_resources$$inline_9519_root$$16_tempName$$inline_2189_templateId$$inline_9498$$) {
                  $ancestors$$inline_9512_i$$inline_2197_name$$inline_2203_resources$$inline_9519_root$$16_tempName$$inline_2189_templateId$$inline_9498$$ = {};
                  $attrs$$inline_9520_childNodes$$inline_9513_count$$inline_2187_ret$$inline_9495_rootNodes$$4_showPopupBehavior$$inline_2204_xmlNode$$inline_2201$$ = $attrs$$inline_9520_childNodes$$inline_9513_count$$inline_2187_ret$$inline_9495_rootNodes$$4_showPopupBehavior$$inline_2204_xmlNode$$inline_2201$$.getAttributes();
                  for($attrGroups$$inline_9496_i$$inline_9514_i$$inline_9521_minValue$$inline_9499_templateMap$$inline_2190$$ = 0;$attrGroups$$inline_9496_i$$inline_9514_i$$inline_9521_minValue$$inline_9499_templateMap$$inline_2190$$ < $attrs$$inline_9520_childNodes$$inline_9513_count$$inline_2187_ret$$inline_9495_rootNodes$$4_showPopupBehavior$$inline_2204_xmlNode$$inline_2201$$.length;$attrGroups$$inline_9496_i$$inline_9514_i$$inline_9521_minValue$$inline_9499_templateMap$$inline_2190$$++) {
                    $ancestors$$inline_9512_i$$inline_2197_name$$inline_2203_resources$$inline_9519_root$$16_tempName$$inline_2189_templateId$$inline_9498$$[$attrs$$inline_9520_childNodes$$inline_9513_count$$inline_2187_ret$$inline_9495_rootNodes$$4_showPopupBehavior$$inline_2204_xmlNode$$inline_2201$$[$attrGroups$$inline_9496_i$$inline_9514_i$$inline_9521_minValue$$inline_9499_templateMap$$inline_2190$$].name] = $attrs$$inline_9520_childNodes$$inline_9513_count$$inline_2187_ret$$inline_9495_rootNodes$$4_showPopupBehavior$$inline_2204_xmlNode$$inline_2201$$[$attrGroups$$inline_9496_i$$inline_9514_i$$inline_9521_minValue$$inline_9499_templateMap$$inline_2190$$].value
                  }
                  $JSCompiler_temp_const$$9006_JSCompiler_temp_const$$9097_id$$inline_9497_ret$$inline_2202_size$$inline_2196_temp$$inline_2188_xmlDataNodes$$.$resources$ = $ancestors$$inline_9512_i$$inline_2197_name$$inline_2203_resources$$inline_9519_root$$16_tempName$$inline_2189_templateId$$inline_9498$$
                }
              }
            }
          }
        }
      }
    }
  }
  this.$_applyParsedProperties$($ret$$2_xmlString$$2$$.root, $ret$$2_xmlString$$2$$);
  return $ret$$2_xmlString$$2$$
};
D.$JSCompiler_prototypeAlias$$.$CreateNode$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$ParseRootAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseRootAttributes$$($xmlNode$$13$$) {
  var $ret$$3$$ = {}, $duration$$9_nodeSelectionStr_selectedIdsStr$$ = $xmlNode$$13$$.$getAttr$("sel");
  $ret$$3$$.$nodeSelection$ = "none" == $duration$$9_nodeSelectionStr_selectedIdsStr$$ ? D.$JSCompiler_alias_NULL$$ : "single" == $duration$$9_nodeSelectionStr_selectedIdsStr$$ ? "s" : "m";
  $ret$$3$$.$sorting$ = $xmlNode$$13$$.$getAttr$("sort");
  if($duration$$9_nodeSelectionStr_selectedIdsStr$$ = $xmlNode$$13$$.$getAttr$("selIds")) {
    $ret$$3$$.$selectedIds$ = $duration$$9_nodeSelectionStr_selectedIdsStr$$.split(",")
  }
  $ret$$3$$.$emptyText$ = $xmlNode$$13$$.$getAttr$("emptyText");
  $ret$$3$$.$legendSource$ = $xmlNode$$13$$.$getAttr$("ls");
  $ret$$3$$.$sizeValueStr$ = $xmlNode$$13$$.$getAttr$("sv");
  $ret$$3$$.$colorValueStr$ = $xmlNode$$13$$.$getAttr$("cv");
  if($duration$$9_nodeSelectionStr_selectedIdsStr$$ = $xmlNode$$13$$.$getAttr$("adu")) {
    $ret$$3$$.$animationDuration$ = $duration$$9_nodeSelectionStr_selectedIdsStr$$ / 1E3
  }
  $ret$$3$$.$animationOnDataChange$ = $xmlNode$$13$$.$getAttr$("adc");
  $ret$$3$$.$animationOnDisplay$ = $xmlNode$$13$$.$getAttr$("adi");
  return $ret$$3$$
};
D.$JSCompiler_prototypeAlias$$.$ParseNodeAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseNodeAttributes$$($labelStyle$$3_xmlNode$$14$$) {
  var $ret$$4$$ = {};
  $ret$$4$$.$templateId$ = $labelStyle$$3_xmlNode$$14$$.$getAttr$("T");
  $ret$$4$$.$menuId$ = $labelStyle$$3_xmlNode$$14$$.$getAttr$("M");
  $ret$$4$$.$agColor$ = $labelStyle$$3_xmlNode$$14$$.$getAttr$("ag");
  $ret$$4$$.id = $labelStyle$$3_xmlNode$$14$$.$getAttr$("id");
  $ret$$4$$.size = (0,window.Number)($labelStyle$$3_xmlNode$$14$$.$getAttr$("s"));
  $ret$$4$$.color = $labelStyle$$3_xmlNode$$14$$.$getAttr$("c");
  $ret$$4$$.pattern = $labelStyle$$3_xmlNode$$14$$.$getAttr$("p");
  $ret$$4$$.label = $labelStyle$$3_xmlNode$$14$$.$getAttr$("l");
  $ret$$4$$.$tooltip$ = $labelStyle$$3_xmlNode$$14$$.$getAttr$("tt");
  $ret$$4$$.$labelDisplay$ = $labelStyle$$3_xmlNode$$14$$.$getAttr$("ld");
  $ret$$4$$.$drilling$ = $labelStyle$$3_xmlNode$$14$$.$getAttr$("d");
  $ret$$4$$.$disclosed$ = "t" == $labelStyle$$3_xmlNode$$14$$.$getAttr$("di") ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$;
  $ret$$4$$.$selectable$ = $labelStyle$$3_xmlNode$$14$$.$getAttr$("nsel");
  var $tn$$ = $labelStyle$$3_xmlNode$$14$$.$getAttr$("tn");
  $tn$$ && ($ret$$4$$.$templateName$ = $tn$$);
  if($labelStyle$$3_xmlNode$$14$$ = $labelStyle$$3_xmlNode$$14$$.$getAttr$("ls")) {
    $ret$$4$$.$labelStyle$ = new D.$DvtCSSStyle$$($labelStyle$$3_xmlNode$$14$$)
  }
  $ret$$4$$.$agColor$ != D.$JSCompiler_alias_NULL$$ && (this.$_maxAGColor$ = window.Math.max(this.$_maxAGColor$, $ret$$4$$.$agColor$), this.$_minAGColor$ = window.Math.min(this.$_minAGColor$, $ret$$4$$.$agColor$));
  return $ret$$4$$
};
D.$JSCompiler_prototypeAlias$$.$_parseDataNode$ = function $$JSCompiler_prototypeAlias$$$$_parseDataNode$$($xmlNode$$15$$, $templates$$) {
  if(!$xmlNode$$15$$ || "n" != $xmlNode$$15$$.getName()) {
    return D.$JSCompiler_alias_NULL$$
  }
  this.$_nodeCount$++;
  var $props$$3_treeNode$$ = this.$ParseNodeAttributes$($xmlNode$$15$$), $props$$3_treeNode$$ = this.$CreateNode$(this.$_view$, $props$$3_treeNode$$, $templates$$);
  (0,D.$JSCompiler_StaticMethods_setChildNodes$$)($props$$3_treeNode$$, this.$_parseChildren$($xmlNode$$15$$, $props$$3_treeNode$$, $templates$$));
  return $props$$3_treeNode$$
};
D.$JSCompiler_prototypeAlias$$.$_parseChildren$ = function $$JSCompiler_prototypeAlias$$$$_parseChildren$$($childNodes$$1_xmlNode$$16$$, $treeNode$$1$$, $templates$$1$$) {
  var $treeNodes$$ = [];
  $childNodes$$1_xmlNode$$16$$ = $childNodes$$1_xmlNode$$16$$.$getChildNodes$();
  for(var $i$$123$$ = 0;$i$$123$$ < $childNodes$$1_xmlNode$$16$$.length;$i$$123$$++) {
    var $child$$4$$ = $childNodes$$1_xmlNode$$16$$[$i$$123$$];
    $child$$4$$ && ("el" == $child$$4$$.getName() ? $templates$$1$$ && $treeNode$$1$$.$SetElAttributes$ && $treeNode$$1$$.$SetElAttributes$((0,D.$DvtPropMap$toELContext$$)($child$$4$$)) : $treeNode$$1$$.$isDisclosed$() && $treeNodes$$.push(this.$_parseDataNode$($child$$4$$, $templates$$1$$)))
  }
  return $treeNodes$$
};
D.$JSCompiler_prototypeAlias$$.$_parseShowPopupBehavior$ = function $$JSCompiler_prototypeAlias$$$$_parseShowPopupBehavior$$($xmlNode$$18$$, $ret$$6$$) {
  var $showPopupBehavior$$1$$ = (0,D.$DvtShowPopupBehavior$newInstance$$)($xmlNode$$18$$), $templateId$$ = $xmlNode$$18$$.$getAttr$("T");
  $ret$$6$$.$spb$ || ($ret$$6$$.$spb$ = {});
  $ret$$6$$.$spb$[$templateId$$] || ($ret$$6$$.$spb$[$templateId$$] = []);
  $ret$$6$$.$spb$[$templateId$$].push($showPopupBehavior$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$_applyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$_applyParsedProperties$$($node$$48$$, $ret$$8$$) {
  if($node$$48$$) {
    var $JSCompiler_StaticMethods_processAttrGroups$self$$inline_2209_children$$4_templateId$$2$$ = $node$$48$$.$_templateId$;
    if($ret$$8$$.$spb$) {
      var $agDef_behaviors_childIndex$$2_color$$inline_2211$$ = $ret$$8$$.$spb$[$JSCompiler_StaticMethods_processAttrGroups$self$$inline_2209_children$$4_templateId$$2$$];
      $agDef_behaviors_childIndex$$2_color$$inline_2211$$ && $node$$48$$.$setShowPopupBehaviors$($agDef_behaviors_childIndex$$2_color$$inline_2211$$)
    }
    if($ret$$8$$.$attrGroups$) {
      for(var $i$$125$$ = 0;$i$$125$$ < $ret$$8$$.$attrGroups$.length;$i$$125$$++) {
        if($agDef_behaviors_childIndex$$2_color$$inline_2211$$ = $ret$$8$$.$attrGroups$[$i$$125$$], $agDef_behaviors_childIndex$$2_color$$inline_2211$$.$templateId$ == $JSCompiler_StaticMethods_processAttrGroups$self$$inline_2209_children$$4_templateId$$2$$) {
          if($agDef_behaviors_childIndex$$2_color$$inline_2211$$.$attrGroups$ instanceof D.$DvtContinuousAttrGroups$$ && ($JSCompiler_StaticMethods_processAttrGroups$self$$inline_2209_children$$4_templateId$$2$$ = $node$$48$$, $agDef_behaviors_childIndex$$2_color$$inline_2211$$ = $agDef_behaviors_childIndex$$2_color$$inline_2211$$.$attrGroups$.get($JSCompiler_StaticMethods_processAttrGroups$self$$inline_2209_children$$4_templateId$$2$$.$_agColor$))) {
            $JSCompiler_StaticMethods_processAttrGroups$self$$inline_2209_children$$4_templateId$$2$$.$_color$ = $agDef_behaviors_childIndex$$2_color$$inline_2211$$
          }
          break
        }
      }
    }
    if($JSCompiler_StaticMethods_processAttrGroups$self$$inline_2209_children$$4_templateId$$2$$ = $node$$48$$.$getChildNodes$()) {
      for($agDef_behaviors_childIndex$$2_color$$inline_2211$$ = 0;$agDef_behaviors_childIndex$$2_color$$inline_2211$$ < $JSCompiler_StaticMethods_processAttrGroups$self$$inline_2209_children$$4_templateId$$2$$.length;$agDef_behaviors_childIndex$$2_color$$inline_2211$$++) {
        this.$_applyParsedProperties$($JSCompiler_StaticMethods_processAttrGroups$self$$inline_2209_children$$4_templateId$$2$$[$agDef_behaviors_childIndex$$2_color$$inline_2211$$], $ret$$8$$)
      }
    }
  }
};
D.$JSCompiler_StaticMethods__getChildNodesByName$$ = function $$JSCompiler_StaticMethods__getChildNodesByName$$$($childNodes$$3$$, $name$$62$$) {
  for(var $nodes$$2$$ = [], $i$$126$$ = 0;$i$$126$$ < $childNodes$$3$$.length;$i$$126$$++) {
    var $child$$6$$ = $childNodes$$3$$[$i$$126$$];
    $child$$6$$ && $child$$6$$.getName() == $name$$62$$ && $nodes$$2$$.push($child$$6$$)
  }
  return $nodes$$2$$
};
D.$DvtBaseTreeParser$$.prototype.$_parseStyles$ = function $$DvtBaseTreeParser$$$$$_parseStyles$$($xmlNode$$20$$, $ret$$9$$) {
  var $styles$$ = {}, $attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle_textStyle$$1_topStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$20$$.$getAttr$("top"));
  $styles$$.BACKGROUND_STYLE = $attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle_textStyle$$1_topStyle$$;
  $styles$$.ANIMATION_UPDATE_COLOR_STYLE = $attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle_textStyle$$1_topStyle$$.$getStyle$("-tr-animation-update-color");
  $attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle_textStyle$$1_topStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$20$$.$getAttr$("node"));
  $styles$$.LABEL_TEXT_DEFAULT_STYLE = $attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle_textStyle$$1_topStyle$$;
  var $nodeHoverStyle$$ = $attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle_textStyle$$1_topStyle$$.clone().$merge$(new D.$DvtCSSStyle$$($xmlNode$$20$$.$getAttr$("node-hover"))), $nodeSelectedStyle$$ = $attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle_textStyle$$1_topStyle$$.clone().$merge$(new D.$DvtCSSStyle$$($xmlNode$$20$$.$getAttr$("node-selected")));
  $ret$$9$$.$dropSiteFillColor$ = $xmlNode$$20$$.$getAttr$("dsf");
  $ret$$9$$.$dropSiteBorderColor$ = $xmlNode$$20$$.$getAttr$("dsb");
  $ret$$9$$.$dropSiteOpacity$ = $xmlNode$$20$$.$getAttr$("dso");
  this.$ParseAdditionalNodeStyles$($attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle_textStyle$$1_topStyle$$, $nodeHoverStyle$$, $nodeSelectedStyle$$, $styles$$);
  this.$ParseAdditionalStyles$($xmlNode$$20$$, $styles$$);
  $attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle_textStyle$$1_topStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$20$$.$getAttr$("rootText"));
  $styles$$.TEXT_STYLE = $attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle_textStyle$$1_topStyle$$;
  $attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle_textStyle$$1_topStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$20$$.$getAttr$("attrType"));
  $styles$$.ATTRIBUTE_TYPE_STYLE = $attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle_textStyle$$1_topStyle$$;
  $attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle_textStyle$$1_topStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$20$$.$getAttr$("attrValue"));
  $styles$$.ATTRIBUTE_VALUE_STYLE = $attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle_textStyle$$1_topStyle$$;
  $attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle_textStyle$$1_topStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$20$$.$getAttr$("drillText"));
  $styles$$.DRILL_TEXT_STYLE = $attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle_textStyle$$1_topStyle$$;
  $attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle_textStyle$$1_topStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$20$$.$getAttr$("currentText"));
  $styles$$.CURRENT_TEXT_STYLE = $attrTypeStyle_attrValueStyle_currentTextStyle_drillTextStyle_nodeStyle_textStyle$$1_topStyle$$;
  return $styles$$
};
D.$DvtBaseTreeParser$$.prototype.$ParseAdditionalNodeStyles$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtBaseTreeParser$$.prototype.$ParseAdditionalStyles$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtBaseTreeNode$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeNode$$, D.$DvtObj$$, "DvtBaseTreeNode");
D.$DvtBaseTreeNode$__NODE_SELECTED_SHADOW$$ = new D.$DvtShadow$$("#000000", 2, 5, 5, 45, 0.5);
D.$DvtBaseTreeNode$$.prototype.Init = function $$DvtBaseTreeNode$$$$Init$($treeView$$7$$, $props$$4$$, $templates$$2$$) {
  this.$_view$ = $treeView$$7$$;
  this.$_templateId$ = $props$$4$$.$templateId$;
  this.$_menuId$ = $props$$4$$.$menuId$;
  this.$_agColor$ = $props$$4$$.$agColor$;
  this.$_id$ = $props$$4$$.id;
  this.$_size$ = $props$$4$$.size;
  this.$_color$ = $props$$4$$.color ? $props$$4$$.color : "#000000";
  this.$_pattern$ = $props$$4$$.pattern;
  this.$_textStr$ = $props$$4$$.label;
  this.$_datatip$ = $props$$4$$.$tooltip$;
  this.$_labelStyle$ = $props$$4$$.$labelStyle$;
  this.$_drilling$ = $props$$4$$.$drilling$;
  this.$_disclosed$ = $props$$4$$.$disclosed$;
  this.$_bArtificialRoot$ = $props$$4$$.$bArtificialRoot$;
  this.$_alpha$ = 1;
  this.$_lastVisitedChild$ = D.$JSCompiler_alias_NULL$$;
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$_templates$ = $templates$$2$$;
  $props$$4$$.$templateName$ ? (0,D.$JSCompiler_StaticMethods__setTemplate$$)(this, $props$$4$$.$templateName$) : $templates$$2$$ && $templates$$2$$.content ? (0,D.$JSCompiler_StaticMethods__setTemplate$$)(this, "content") : $templates$$2$$ && $templates$$2$$.rootContent && (0,D.$JSCompiler_StaticMethods__setTemplate$$)(this, "rootContent");
  this.$IsHover$ = D.$JSCompiler_alias_FALSE$$;
  this.$_selectable$ = $props$$4$$.$selectable$;
  this.$Bundle$ = $treeView$$7$$.$getBundle$()
};
D.$JSCompiler_StaticMethods_setChildNodes$$ = function $$JSCompiler_StaticMethods_setChildNodes$$$($JSCompiler_StaticMethods_setChildNodes$self$$, $children$$7$$) {
  if($children$$7$$ != D.$JSCompiler_alias_NULL$$) {
    for(var $i$$135$$ = 0;$i$$135$$ < $children$$7$$.length;$i$$135$$++) {
      $children$$7$$[$i$$135$$].$_parent$ = $JSCompiler_StaticMethods_setChildNodes$self$$
    }
  }
  $JSCompiler_StaticMethods_setChildNodes$self$$.$_children$ = $children$$7$$
};
D.$DvtBaseTreeNode$$.prototype.$getChildNodes$ = (0,D.$JSCompiler_get$$)("$_children$");
D.$JSCompiler_StaticMethods_getDescendantNodes$$ = function $$JSCompiler_StaticMethods_getDescendantNodes$$$($JSCompiler_StaticMethods_getDescendantNodes$self$$) {
  var $descendants$$ = [], $childDescendants$$, $child$$7$$;
  if(!$JSCompiler_StaticMethods_getDescendantNodes$self$$.$hasChildren$()) {
    return $descendants$$
  }
  for(var $i$$136$$ = 0;$i$$136$$ < $JSCompiler_StaticMethods_getDescendantNodes$self$$.$_children$.length;$i$$136$$++) {
    $child$$7$$ = $JSCompiler_StaticMethods_getDescendantNodes$self$$.$_children$[$i$$136$$], $childDescendants$$ = (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)($child$$7$$), $descendants$$.push($child$$7$$), $descendants$$ = $descendants$$.concat($childDescendants$$)
  }
  return $descendants$$
};
D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$ = function $$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$$($JSCompiler_StaticMethods_MarkAsLastVisitedChild$self$$) {
  var $parent$$10$$ = $JSCompiler_StaticMethods_MarkAsLastVisitedChild$self$$.$_parent$;
  $parent$$10$$ && ($parent$$10$$.$_lastVisitedChild$ = $JSCompiler_StaticMethods_MarkAsLastVisitedChild$self$$)
};
D.$DvtBaseTreeNode$$.prototype.$isDescendantOf$ = function $$DvtBaseTreeNode$$$$$isDescendantOf$$($node$$56$$) {
  return!$node$$56$$ || !this.$_parent$ ? D.$JSCompiler_alias_FALSE$$ : this.$_parent$ == $node$$56$$ ? D.$JSCompiler_alias_TRUE$$ : this.$_parent$.$isDescendantOf$($node$$56$$)
};
D.$JSCompiler_StaticMethods_GetNodesAtDepth$$ = function $$JSCompiler_StaticMethods_GetNodesAtDepth$$$($JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$8$$, $child$$8_root$$17$$, $depth$$8$$) {
  var $returnArray$$ = [];
  if(0 > $depth$$8$$) {
    return $returnArray$$
  }
  if(0 == $depth$$8$$) {
    return[$JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$8$$]
  }
  if($child$$8_root$$17$$.$hasChildren$()) {
    $JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$8$$ = $child$$8_root$$17$$.$getChildNodes$();
    for(var $i$$137$$ = 0;$i$$137$$ < $JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$8$$.length;$i$$137$$++) {
      $child$$8_root$$17$$ = $JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$8$$[$i$$137$$], $returnArray$$ = $returnArray$$.concat((0,D.$JSCompiler_StaticMethods_GetNodesAtDepth$$)($child$$8_root$$17$$, $child$$8_root$$17$$, $depth$$8$$ - 1))
    }
  }
  return $returnArray$$
};
D.$JSCompiler_StaticMethods_getLeafNodes$$ = function $$JSCompiler_StaticMethods_getLeafNodes$$$($JSCompiler_StaticMethods_getLeafNodes$self$$) {
  var $leafNodes$$ = [], $child$$9_childLeafNodes$$;
  if(!$JSCompiler_StaticMethods_getLeafNodes$self$$.$hasChildren$()) {
    return[$JSCompiler_StaticMethods_getLeafNodes$self$$]
  }
  for(var $i$$138$$ = 0;$i$$138$$ < $JSCompiler_StaticMethods_getLeafNodes$self$$.$_children$.length;$i$$138$$++) {
    $child$$9_childLeafNodes$$ = $JSCompiler_StaticMethods_getLeafNodes$self$$.$_children$[$i$$138$$], $child$$9_childLeafNodes$$ = (0,D.$JSCompiler_StaticMethods_getLeafNodes$$)($child$$9_childLeafNodes$$), $leafNodes$$ = $leafNodes$$.concat($child$$9_childLeafNodes$$)
  }
  return $leafNodes$$
};
D.$DvtBaseTreeNode$getNodeById$$ = function $$DvtBaseTreeNode$getNodeById$$$($root$$18$$, $id$$16$$) {
  if($root$$18$$.getId() == $id$$16$$) {
    return $root$$18$$
  }
  for(var $child$$10_node$$57$$ = D.$JSCompiler_alias_NULL$$, $children$$9$$ = $root$$18$$.$getChildNodes$(), $length$$12$$ = $children$$9$$.length, $child$$10_node$$57$$ = D.$JSCompiler_alias_NULL$$, $i$$139$$ = 0;$i$$139$$ < $length$$12$$;$i$$139$$++) {
    if($child$$10_node$$57$$ = $children$$9$$[$i$$139$$], $child$$10_node$$57$$ = (0,D.$DvtBaseTreeNode$getNodeById$$)($child$$10_node$$57$$, $id$$16$$)) {
      return $child$$10_node$$57$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getSize$ = (0,D.$JSCompiler_get$$)("$_size$");
D.$JSCompiler_prototypeAlias$$.$getColor$ = (0,D.$JSCompiler_get$$)("$_color$");
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = (0,D.$JSCompiler_get$$)("$_datatip$");
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = (0,D.$JSCompiler_get$$)("$_color$");
D.$JSCompiler_prototypeAlias$$.$getAlpha$ = (0,D.$JSCompiler_get$$)("$_alpha$");
D.$JSCompiler_prototypeAlias$$.$setAlpha$ = function $$JSCompiler_prototypeAlias$$$$setAlpha$$($alpha$$5$$) {
  this.$_alpha$ = $alpha$$5$$;
  this.$_shape$ && this.$_shape$.$setAlpha$(this.$_alpha$)
};
D.$JSCompiler_prototypeAlias$$.$isDisclosed$ = (0,D.$JSCompiler_get$$)("$_disclosed$");
D.$JSCompiler_prototypeAlias$$.$isDrillReplaceEnabled$ = function $$JSCompiler_prototypeAlias$$$$isDrillReplaceEnabled$$() {
  return"r" == this.$_drilling$ || "ir" == this.$_drilling$
};
D.$JSCompiler_prototypeAlias$$.$setShowPopupBehaviors$ = (0,D.$JSCompiler_set$$)("$_showPopupBehaviors$");
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = (0,D.$JSCompiler_get$$)("$_showPopupBehaviors$");
D.$JSCompiler_prototypeAlias$$.$getContextMenuId$ = (0,D.$JSCompiler_get$$)("$_menuId$");
D.$JSCompiler_prototypeAlias$$.$render$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$renderChildren$ = function $$JSCompiler_prototypeAlias$$$$renderChildren$$($container$$2$$) {
  var $children$$10$$ = this.$getChildNodes$();
  if($children$$10$$ != D.$JSCompiler_alias_NULL$$) {
    for(var $i$$140$$ = 0;$i$$140$$ < $children$$10$$.length;$i$$140$$++) {
      $children$$10$$[$i$$140$$].$render$($container$$2$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$() {
  (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)(this);
  return this
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$showHoverEffect$();
  this.$handleMouseOver$ && this.$handleMouseOver$()
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ && (this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$, this.$hideHoverEffect$());
  this.$handleMouseOut$ && this.$handleMouseOut$()
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$handleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOver$$() {
  this.$IsHover$ = D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$handleMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOut$$() {
  this.$IsHover$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return"off" != this.$_selectable$ && this.$_view$.$_nodeSelection$ != D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_selected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$1$$) {
  this.$_selected$ = $selected$$1$$;
  this.$UpdateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($clientIds$$1$$) {
  return this.$_view$.$__isDragAvailable$($clientIds$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$() {
  return this.$_view$.$__getDragTransferable$(this)
};
D.$JSCompiler_prototypeAlias$$.$getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragFeedback$$() {
  return this.$_view$.$__getDragFeedback$()
};
D.$JSCompiler_prototypeAlias$$.$__getDisplayable$ = (0,D.$JSCompiler_get$$)("$_shape$");
D.$JSCompiler_prototypeAlias$$.$getPopupBounds$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.contains = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$JSCompiler_prototypeAlias$$.$GetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$GetAnimationParams$$() {
  return[]
};
D.$JSCompiler_prototypeAlias$$.$SetAnimationParams$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$4$$, $oldNode$$) {
  $handler$$4$$.$_bDrill$ || (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($handler$$4$$, $oldNode$$.$getChildNodes$(), this.$getChildNodes$());
  var $animationUpdateColor_startState$$ = $oldNode$$.$GetAnimationParams$(), $bSizeChanged_endState$$ = this.$GetAnimationParams$(), $bColorChanged_nodePlayable$$;
  if(!D.$DvtArrayUtils$$.$equals$($animationUpdateColor_startState$$, $bSizeChanged_endState$$) && ($bColorChanged_nodePlayable$$ = new D.$DvtCustomAnimation$$(this.$_view$.$_context$, this, this.$_view$.$AnimationDuration$), (0,D.$JSCompiler_StaticMethods_addProp$$)($bColorChanged_nodePlayable$$.$_animator$, "typeNumberArray", this, this.$GetAnimationParams$, this.$SetAnimationParams$, $bSizeChanged_endState$$), $handler$$4$$.add($bColorChanged_nodePlayable$$, 1), $bSizeChanged_endState$$ = this.$_size$ != 
  $oldNode$$.$_size$, $bColorChanged_nodePlayable$$ = D.$DvtColorUtils$$.$getRGBA$(this.$_color$) != D.$DvtColorUtils$$.$getRGBA$($oldNode$$.$_color$), this.$SetAnimationParams$($animationUpdateColor_startState$$), ($animationUpdateColor_startState$$ = (0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, D.$JSCompiler_alias_NULL$$, "ANIMATION_UPDATE_COLOR_STYLE")) && ($bSizeChanged_endState$$ || $bColorChanged_nodePlayable$$))) {
    this.$_color$ = $animationUpdateColor_startState$$
  }
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$5$$) {
  if(!$handler$$5$$.$_bDrill$ || !$handler$$5$$.$_bDrill$ || !($handler$$5$$.$_oldRoot$.getId() == this.getId() || (0,D.$DvtBaseTreeAnimationHandler$_isAncestor$$)($handler$$5$$.$_oldAncestors$, this))) {
    this.$setAlpha$(0);
    var $anim$$5_i$$141$$ = new D.$DvtAnimFadeIn$$(this.$_view$.$_context$, this, this.$_view$.$AnimationDuration$);
    $handler$$5$$.add($anim$$5_i$$141$$, 2);
    for($anim$$5_i$$141$$ = 0;$anim$$5_i$$141$$ < this.$_children$.length;$anim$$5_i$$141$$++) {
      this.$_children$[$anim$$5_i$$141$$].$animateInsert$($handler$$5$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$6$$, $container$$3$$) {
  $container$$3$$.$addChild$(this.$_shape$);
  var $anim$$6_i$$142$$ = new D.$DvtAnimFadeOut$$(this.$_view$.$_context$, this, this.$_view$.$AnimationDuration$);
  $handler$$6$$.add($anim$$6_i$$142$$, 0);
  if(!$handler$$6$$.$_bDrill$) {
    for($anim$$6_i$$142$$ = 0;$anim$$6_i$$142$$ < this.$_children$.length;$anim$$6_i$$142$$++) {
      this.$_children$[$anim$$6_i$$142$$].$animateDelete$($handler$$6$$, $container$$3$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$hasChildren$ = function $$JSCompiler_prototypeAlias$$$$hasChildren$$() {
  return this.$_children$ != D.$JSCompiler_alias_NULL$$ && 0 < this.$_children$.length
};
D.$JSCompiler_StaticMethods_GetDepth$$ = function $$JSCompiler_StaticMethods_GetDepth$$$($JSCompiler_StaticMethods_GetDepth$self_parent$$11$$) {
  var $depth$$9$$ = 0;
  for($JSCompiler_StaticMethods_GetDepth$self_parent$$11$$ = $JSCompiler_StaticMethods_GetDepth$self_parent$$11$$.$_parent$;$JSCompiler_StaticMethods_GetDepth$self_parent$$11$$;) {
    $depth$$9$$++, $JSCompiler_StaticMethods_GetDepth$self_parent$$11$$ = $JSCompiler_StaticMethods_GetDepth$self_parent$$11$$.$_parent$
  }
  return $depth$$9$$
};
D.$DvtBaseTreeNode$$.prototype.$GetFill$ = function $$DvtBaseTreeNode$$$$$GetFill$$() {
  return this.$_pattern$ ? new D.$DvtPatternFill$$(this.$_pattern$, this.$_color$) : new D.$DvtSolidFill$$(this.$_color$)
};
D.$DvtBaseTreeNode$GetNodeTextColor$$ = function $$DvtBaseTreeNode$GetNodeTextColor$$$($node$$58$$) {
  return $node$$58$$.$_pattern$ ? "#000000" : D.$DvtColorUtils$$.$getContrastingTextColor$($node$$58$$.$_color$)
};
D.$JSCompiler_StaticMethods_ApplyLabelTextStyle$$ = function $$JSCompiler_StaticMethods_ApplyLabelTextStyle$$$($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$, $text$$19$$) {
  var $defaultFillColor$$ = (0,D.$DvtBaseTreeNode$GetNodeTextColor$$)($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$);
  $text$$19$$.$setSolidFill$($defaultFillColor$$);
  var $textStyle$$3$$ = [];
  $textStyle$$3$$.push($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$.$_view$.$_styles$.LABEL_TEXT_DEFAULT_STYLE);
  $JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$.$_labelStyle$ && $textStyle$$3$$.push($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$.$_labelStyle$);
  $text$$19$$.$setCSSStyle$((0,D.$DvtCSSStyle$mergeStyles$$)($textStyle$$3$$));
  D.$DvtAgent$_highContrast$$ === D.$JSCompiler_alias_TRUE$$ && $text$$19$$.$setSolidFill$($defaultFillColor$$)
};
D.$JSCompiler_StaticMethods_getResolvedColor$$ = function $$JSCompiler_StaticMethods_getResolvedColor$$$($JSCompiler_StaticMethods_getResolvedColor$self_colorValue$$, $color$$7_defaultColor$$, $styleColorKey$$) {
  ($JSCompiler_StaticMethods_getResolvedColor$self_colorValue$$ = $JSCompiler_StaticMethods_getResolvedColor$self_colorValue$$.$_view$.$_styles$[$styleColorKey$$]) && ($color$$7_defaultColor$$ = $JSCompiler_StaticMethods_getResolvedColor$self_colorValue$$);
  return $color$$7_defaultColor$$
};
D.$JSCompiler_StaticMethods_GetTextSize$$ = function $$JSCompiler_StaticMethods_GetTextSize$$$($JSCompiler_StaticMethods_GetTextSize$self_fontSize$$1$$) {
  var $size$$13$$ = 11;
  ($JSCompiler_StaticMethods_GetTextSize$self_fontSize$$1$$ = $JSCompiler_StaticMethods_GetTextSize$self_fontSize$$1$$.$_view$.$_styles$.LABEL_TEXT_DEFAULT_STYLE.$getFontSize$()) && ($size$$13$$ = (0,window.parseFloat)($JSCompiler_StaticMethods_GetTextSize$self_fontSize$$1$$));
  return $size$$13$$
};
D.$DvtBaseTreeNode$$.prototype.$getDisplayable$ = (0,D.$JSCompiler_get$$)("$_shape$");
D.$DvtBaseTreeNode$$.prototype.$getLabel$ = (0,D.$JSCompiler_get$$)("$_textStr$");
D.$DvtBaseTreeNode$$.prototype.$SetElAttributes$ = function $$DvtBaseTreeNode$$$$$SetElAttributes$$($elAttrs$$) {
  $elAttrs$$ && !this.$_template$ && (0,D.$JSCompiler_StaticMethods__setTemplate$$)(this, "content");
  this.$_elAttributes$ = $elAttrs$$
};
D.$JSCompiler_StaticMethods__setTemplate$$ = function $$JSCompiler_StaticMethods__setTemplate$$$($JSCompiler_StaticMethods__setTemplate$self$$, $tempName$$1$$) {
  $tempName$$1$$ && ($JSCompiler_StaticMethods__setTemplate$self$$.$_template$ = $JSCompiler_StaticMethods__setTemplate$self$$.$_templates$[$tempName$$1$$])
};
D.$DvtBaseTreeNode$$.prototype.$isDoubleClickable$ = function $$DvtBaseTreeNode$$$$$isDoubleClickable$$() {
  return this.$isDrillReplaceEnabled$()
};
D.$DvtBaseTreeNode$$.prototype.$UpdateAriaLabel$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtBaseTreePeer$$ = function $$DvtBaseTreePeer$$$($node$$49$$, $id$$15$$, $tooltip$$1$$, $datatip$$, $datatipColor$$) {
  this.Init($tooltip$$1$$, $datatip$$, $datatipColor$$);
  this.$_node$ = $node$$49$$;
  this.$_id$ = $id$$15$$;
  this.$_bDrillable$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreePeer$$, D.$DvtSimpleObjPeer$$, "DvtBaseTreePeer");
D.$DvtBaseTreePeer$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtBaseTreePeer$$.prototype.$isDrillable$ = (0,D.$JSCompiler_get$$)("$_bDrillable$");
D.$DvtBaseTreePeer$$.prototype.$setDrillable$ = (0,D.$JSCompiler_set$$)("$_bDrillable$");
D.$DvtBaseTreePeer$$.prototype.$handleMouseOut$ = function $$DvtBaseTreePeer$$$$$handleMouseOut$$() {
  this.$_node$ && this.$_node$.$handleMouseOut$ && this.$_node$.$handleMouseOut$()
};
D.$DvtTreeBreadcrumbsRenderer$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtTreeBreadcrumbsRenderer$$, D.$DvtObj$$, "DvtTreeBreadcrumbsRenderer");
D.$DvtTreeBreadcrumbsRenderer$$.$_COMPONENT_GAP$ = 6;
D.$DvtTreeBreadcrumbsRenderer$$.$_ENABLED_INLINE_STYLE$ = "color: #003286;";
D.$DvtTreeBreadcrumbsRenderer$$.$render$ = function $$DvtTreeBreadcrumbsRenderer$$$$render$$($treeView$$3$$, $availSpace$$, $ancestors$$1_dataItems$$, $dims$$2_height$$37_rootLabel$$) {
  var $breadcrumbs_context$$64$$ = $treeView$$3$$.$_context$, $enabledStyle_enabledStyleArray$$ = [];
  $enabledStyle_enabledStyleArray$$.push($treeView$$3$$.$_styles$.TEXT_STYLE);
  $enabledStyle_enabledStyleArray$$.push(new D.$DvtCSSStyle$$(D.$DvtTreeBreadcrumbsRenderer$$.$_ENABLED_INLINE_STYLE$));
  $enabledStyle_enabledStyleArray$$.push($treeView$$3$$.$_styles$.DRILL_TEXT_STYLE);
  var $enabledStyle_enabledStyleArray$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($enabledStyle_enabledStyleArray$$).toString(), $enabledStyleOver$$ = $enabledStyle_enabledStyleArray$$ + "text-decoration: underline;", $disabledStyle_disabledStyleArray$$ = [];
  $disabledStyle_disabledStyleArray$$.push($treeView$$3$$.$_styles$.TEXT_STYLE);
  $disabledStyle_disabledStyleArray$$.push($treeView$$3$$.$_styles$.CURRENT_TEXT_STYLE);
  $disabledStyle_disabledStyleArray$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($disabledStyle_disabledStyleArray$$).toString();
  $breadcrumbs_context$$64$$ = new D.$DvtBreadcrumbs$$($breadcrumbs_context$$64$$, $treeView$$3$$.$__processBreadcrumbsEvent$, $treeView$$3$$, {$labelStyle$:$enabledStyle_enabledStyleArray$$, $labelStyleOver$:$enabledStyleOver$$, $labelStyleDown$:$enabledStyleOver$$, $disabledLabelStyle$:$disabledStyle_disabledStyleArray$$});
  $treeView$$3$$.$addChild$($breadcrumbs_context$$64$$);
  $ancestors$$1_dataItems$$ = $ancestors$$1_dataItems$$.slice(0).reverse();
  $ancestors$$1_dataItems$$.push({text:$dims$$2_height$$37_rootLabel$$});
  $breadcrumbs_context$$64$$.$render$({items:$ancestors$$1_dataItems$$}, $availSpace$$.$w$);
  $dims$$2_height$$37_rootLabel$$ = $breadcrumbs_context$$64$$.$getDimensions$();
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($breadcrumbs_context$$64$$, $availSpace$$.x, $availSpace$$.y);
  $dims$$2_height$$37_rootLabel$$ = $dims$$2_height$$37_rootLabel$$.$h$ + D.$DvtTreeBreadcrumbsRenderer$$.$_COMPONENT_GAP$;
  $availSpace$$.y += $dims$$2_height$$37_rootLabel$$;
  $availSpace$$.$h$ -= $dims$$2_height$$37_rootLabel$$;
  $treeView$$3$$.removeChild($breadcrumbs_context$$64$$);
  return $breadcrumbs_context$$64$$
};
D.$DvtTreeLegendRenderer$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtTreeLegendRenderer$$, D.$DvtObj$$, "DvtTreeLegendRenderer");
D.$DvtTreeLegendRenderer$$.$_LEGEND_GAP$ = 4;
D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$ = 7;
D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$ = 24;
D.$DvtTreeLegendRenderer$$.$_LABEL_SIZE$ = 11;
D.$DvtTreeLegendRenderer$$.$_LABEL_COLOR$ = "#636363";
D.$DvtTreeLegendRenderer$$.$_LABEL_INLINE_STYLE$ = "color:" + D.$DvtTreeLegendRenderer$$.$_LABEL_COLOR$ + ";";
D.$DvtTreeLegendRenderer$$.$render$ = function $$DvtTreeLegendRenderer$$$$render$$($treeView$$4$$, $availSpace$$1$$, $colorSpace_sizeStr$$, $colorStr$$, $sizeValueStr$$, $colorValueStr$$, $attrGroups$$1_legendDims$$) {
  var $context$$65$$ = $treeView$$4$$.$_context$, $eventManager_labelSpace$$1$$ = $treeView$$4$$.$__getEventManager$(), $legend$$ = new D.$DvtContainer$$($context$$65$$);
  $treeView$$4$$.$addChild$($legend$$);
  var $labelContainer$$ = D.$DvtTreeLegendRenderer$$.$_renderLabels$($context$$65$$, $treeView$$4$$, $legend$$, $availSpace$$1$$.$w$, $colorSpace_sizeStr$$, $colorStr$$, $sizeValueStr$$, $colorValueStr$$, $attrGroups$$1_legendDims$$), $borderColor$$12_colorContainer$$ = $treeView$$4$$.$_resources$.alta ? D.$JSCompiler_alias_NULL$$ : "#000000", $legendStyleArray_legendStyles$$ = [];
  $legendStyleArray_legendStyles$$.push($treeView$$4$$.$_styles$.TEXT_STYLE);
  var $legendStyleArray_legendStyles$$ = {borderColor:$borderColor$$12_colorContainer$$, $labelStyle$:(0,D.$DvtCSSStyle$mergeStyles$$)($legendStyleArray_legendStyles$$)}, $borderColor$$12_colorContainer$$ = D.$DvtLegendAttrGroupsRenderer$$.$renderAttrGroups$($context$$65$$, $eventManager_labelSpace$$1$$, $legend$$, $availSpace$$1$$.$w$, $availSpace$$1$$.$h$, $attrGroups$$1_legendDims$$, $legendStyleArray_legendStyles$$), $labelDims$$ = $labelContainer$$ ? $labelContainer$$.$getDimensions$() : D.$JSCompiler_alias_NULL$$, 
  $colorDims$$ = $borderColor$$12_colorContainer$$ ? $borderColor$$12_colorContainer$$.$getDimensions$() : D.$JSCompiler_alias_NULL$$;
  if($labelContainer$$ && !$borderColor$$12_colorContainer$$) {
    $labelContainer$$.$setTranslateX$($availSpace$$1$$.y + ($availSpace$$1$$.$w$ - $labelDims$$.$w$) / 2)
  }else {
    if($borderColor$$12_colorContainer$$ && !$labelContainer$$) {
      $borderColor$$12_colorContainer$$.$setTranslateX$($availSpace$$1$$.y + ($availSpace$$1$$.$w$ - $colorDims$$.$w$) / 2)
    }else {
      if($borderColor$$12_colorContainer$$ && $labelContainer$$) {
        var $availWidth$$ = $availSpace$$1$$.$w$ - D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$;
        $labelDims$$.$w$ + $colorDims$$.$w$ > $availWidth$$ && ($labelDims$$.$w$ > $availWidth$$ / 2 && $colorDims$$.$w$ > $availWidth$$ / 2 ? ($legend$$.removeChild($labelContainer$$), $legend$$.removeChild($borderColor$$12_colorContainer$$), $labelContainer$$ = D.$DvtTreeLegendRenderer$$.$_renderLabels$($context$$65$$, $treeView$$4$$, $legend$$, $availWidth$$ / 2, $colorSpace_sizeStr$$, $colorStr$$, $sizeValueStr$$, $colorValueStr$$, $attrGroups$$1_legendDims$$), $borderColor$$12_colorContainer$$ = 
        D.$DvtLegendAttrGroupsRenderer$$.$renderAttrGroups$($context$$65$$, $eventManager_labelSpace$$1$$, $legend$$, $availWidth$$ / 2, $availSpace$$1$$.$h$, $attrGroups$$1_legendDims$$, $legendStyleArray_legendStyles$$)) : $labelDims$$.$w$ > $colorDims$$.$w$ ? ($eventManager_labelSpace$$1$$ = $availWidth$$ - $colorDims$$.$w$, $legend$$.removeChild($labelContainer$$), $labelContainer$$ = D.$DvtTreeLegendRenderer$$.$_renderLabels$($context$$65$$, $treeView$$4$$, $legend$$, $eventManager_labelSpace$$1$$, 
        $colorSpace_sizeStr$$, $colorStr$$, $sizeValueStr$$, $colorValueStr$$, $attrGroups$$1_legendDims$$)) : ($colorSpace_sizeStr$$ = $availWidth$$ - $labelDims$$.$w$, $legend$$.removeChild($borderColor$$12_colorContainer$$), $borderColor$$12_colorContainer$$ = D.$DvtLegendAttrGroupsRenderer$$.$renderAttrGroups$($context$$65$$, $eventManager_labelSpace$$1$$, $legend$$, $colorSpace_sizeStr$$, $availSpace$$1$$.$h$, $attrGroups$$1_legendDims$$, $legendStyleArray_legendStyles$$)), $labelDims$$ = $labelContainer$$.$getDimensions$(), 
        $colorDims$$ = $borderColor$$12_colorContainer$$.$getDimensions$());
        (0,D.$DvtAgent$isRightToLeft$$)($context$$65$$) ? ($borderColor$$12_colorContainer$$.$setTranslateX$($availSpace$$1$$.x), $labelContainer$$.$setTranslateX$($availSpace$$1$$.x + $availSpace$$1$$.$w$ - $labelDims$$.$w$)) : ($labelContainer$$.$setTranslateX$($availSpace$$1$$.x), $borderColor$$12_colorContainer$$.$setTranslateX$($availSpace$$1$$.x + $availSpace$$1$$.$w$ - $colorDims$$.$w$))
      }
    }
  }
  $attrGroups$$1_legendDims$$ = $legend$$.$getDimensions$();
  $legend$$.$setTranslateY$($availSpace$$1$$.y + $availSpace$$1$$.$h$ - $attrGroups$$1_legendDims$$.$h$);
  $availSpace$$1$$.$h$ -= $attrGroups$$1_legendDims$$.$h$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_GAP$;
  $treeView$$4$$.removeChild($legend$$);
  return $legend$$
};
D.$DvtTreeLegendRenderer$$.$_renderLabels$ = function $$DvtTreeLegendRenderer$$$$_renderLabels$$($context$$66_widthPerSection$$, $sizeWidth_treeView$$5$$, $attrTypeStyle$$1_legend$$1$$, $availWidth$$1_x$$81$$, $colorWidth_sizeStr$$1$$, $colorStr$$1$$, $sizeValueStr$$1$$, $colorValueStr$$1$$) {
  var $isRTL$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$66_widthPerSection$$), $eventManager$$1$$ = $sizeWidth_treeView$$5$$.$__getEventManager$(), $labelContainer$$1$$ = D.$JSCompiler_alias_NULL$$;
  if($sizeValueStr$$1$$ || $colorValueStr$$1$$) {
    $labelContainer$$1$$ = new D.$DvtContainer$$($context$$66_widthPerSection$$);
    $attrTypeStyle$$1_legend$$1$$.$addChild$($labelContainer$$1$$);
    var $attrValueStyle$$1_textStyle$$2$$ = [];
    $attrValueStyle$$1_textStyle$$2$$.push($sizeWidth_treeView$$5$$.$_styles$.TEXT_STYLE);
    $attrValueStyle$$1_textStyle$$2$$.push($sizeWidth_treeView$$5$$.$_styles$.ATTRIBUTE_TYPE_STYLE);
    $attrTypeStyle$$1_legend$$1$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($attrValueStyle$$1_textStyle$$2$$);
    $attrValueStyle$$1_textStyle$$2$$ = [];
    $attrValueStyle$$1_textStyle$$2$$.push($sizeWidth_treeView$$5$$.$_styles$.TEXT_STYLE);
    $attrValueStyle$$1_textStyle$$2$$.push($sizeWidth_treeView$$5$$.$_styles$.ATTRIBUTE_VALUE_STYLE);
    var $attrValueStyle$$1_textStyle$$2$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($attrValueStyle$$1_textStyle$$2$$), $sizeLabel$$, $sizeValueLabel$$, $sizeLabelWidth$$, $sizeValueLabelWidth$$;
    $sizeWidth_treeView$$5$$ = 0;
    $sizeValueStr$$1$$ && ($sizeLabel$$ = new D.$DvtOutputText$$($context$$66_widthPerSection$$, $colorWidth_sizeStr$$1$$, 0, 0), $sizeLabel$$.$setCSSStyle$($attrTypeStyle$$1_legend$$1$$), $labelContainer$$1$$.$addChild$($sizeLabel$$), $sizeLabelWidth$$ = $sizeLabel$$.$measureDimensions$().$w$, $sizeValueLabel$$ = new D.$DvtOutputText$$($context$$66_widthPerSection$$, $sizeValueStr$$1$$, 0, 0), $sizeValueLabel$$.$setCSSStyle$($attrValueStyle$$1_textStyle$$2$$), $labelContainer$$1$$.$addChild$($sizeValueLabel$$), 
    $sizeValueLabelWidth$$ = $sizeValueLabel$$.$measureDimensions$().$w$, $sizeWidth_treeView$$5$$ = $sizeLabelWidth$$ + $sizeValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$);
    var $colorLabel$$, $colorValueLabel$$, $colorLabelWidth$$, $colorValueLabelWidth$$;
    $colorWidth_sizeStr$$1$$ = 0;
    $colorValueStr$$1$$ && ($colorLabel$$ = new D.$DvtOutputText$$($context$$66_widthPerSection$$, $colorStr$$1$$, 0, 0), $colorLabel$$.$setCSSStyle$($attrTypeStyle$$1_legend$$1$$), $labelContainer$$1$$.$addChild$($colorLabel$$), $colorLabelWidth$$ = $colorLabel$$.$measureDimensions$().$w$, $colorValueLabel$$ = new D.$DvtOutputText$$($context$$66_widthPerSection$$, $colorValueStr$$1$$, 0, 0), $colorValueLabel$$.$setCSSStyle$($attrValueStyle$$1_textStyle$$2$$), $labelContainer$$1$$.$addChild$($colorValueLabel$$), 
    $colorValueLabelWidth$$ = $colorValueLabel$$.$measureDimensions$().$w$, $colorWidth_sizeStr$$1$$ = $colorLabelWidth$$ + $colorValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$);
    $availWidth$$1_x$$81$$ -= D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$;
    $sizeWidth_treeView$$5$$ + $colorWidth_sizeStr$$1$$ > $availWidth$$1_x$$81$$ && ($context$$66_widthPerSection$$ = $availWidth$$1_x$$81$$ / 2, $sizeWidth_treeView$$5$$ > $context$$66_widthPerSection$$ && $colorWidth_sizeStr$$1$$ > $context$$66_widthPerSection$$ ? (D.$DvtTextUtils$$.$fitText$($sizeValueLabel$$, $context$$66_widthPerSection$$ - $sizeLabelWidth$$ - D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, window.Infinity, $labelContainer$$1$$) ? ($sizeValueLabelWidth$$ = $sizeValueLabel$$.$measureDimensions$().$w$, 
    $eventManager$$1$$.$associate$($sizeValueLabel$$, new D.$DvtSimpleObjPeer$$($sizeValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($sizeLabel$$), $labelContainer$$1$$.removeChild($sizeValueLabel$$), $sizeValueLabel$$ = D.$JSCompiler_alias_NULL$$, $sizeValueLabelWidth$$ = 0), D.$DvtTextUtils$$.$fitText$($colorValueLabel$$, $context$$66_widthPerSection$$ - $colorLabelWidth$$ - D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, window.Infinity, $labelContainer$$1$$) ? ($colorValueLabelWidth$$ = 
    $colorValueLabel$$.$measureDimensions$().$w$, $eventManager$$1$$.$associate$($colorValueLabel$$, new D.$DvtSimpleObjPeer$$($colorValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($colorLabel$$), $labelContainer$$1$$.removeChild($colorValueLabel$$), $colorValueLabel$$ = D.$JSCompiler_alias_NULL$$, $colorValueLabelWidth$$ = 0)) : $sizeWidth_treeView$$5$$ > $colorWidth_sizeStr$$1$$ ? D.$DvtTextUtils$$.$fitText$($sizeValueLabel$$, $availWidth$$1_x$$81$$ - $colorWidth_sizeStr$$1$$ - $sizeLabelWidth$$ - 
    D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, window.Infinity, $labelContainer$$1$$) ? ($sizeValueLabelWidth$$ = $sizeValueLabel$$.$measureDimensions$().$w$, $eventManager$$1$$.$associate$($sizeValueLabel$$, new D.$DvtSimpleObjPeer$$($sizeValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($sizeLabel$$), $labelContainer$$1$$.removeChild($sizeValueLabel$$), $sizeValueLabel$$ = D.$JSCompiler_alias_NULL$$, $sizeValueLabelWidth$$ = 0) : D.$DvtTextUtils$$.$fitText$($colorValueLabel$$, $availWidth$$1_x$$81$$ - 
    $sizeWidth_treeView$$5$$ - $colorLabelWidth$$ - D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, window.Infinity, $labelContainer$$1$$) ? ($colorValueLabelWidth$$ = $colorValueLabel$$.$measureDimensions$().$w$, $eventManager$$1$$.$associate$($colorValueLabel$$, new D.$DvtSimpleObjPeer$$($colorValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($colorLabel$$), $labelContainer$$1$$.removeChild($colorValueLabel$$), $colorValueLabel$$ = D.$JSCompiler_alias_NULL$$, $colorValueLabelWidth$$ = 0));
    $availWidth$$1_x$$81$$ = 0;
    $isRTL$$ ? ($colorValueLabel$$ && ($colorValueLabel$$.$setX$($availWidth$$1_x$$81$$), $availWidth$$1_x$$81$$ += $colorValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, $colorLabel$$.$setX$($availWidth$$1_x$$81$$), $availWidth$$1_x$$81$$ += $colorLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$), $sizeValueLabel$$ && ($sizeValueLabel$$.$setX$($availWidth$$1_x$$81$$), $availWidth$$1_x$$81$$ += $sizeValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, 
    $sizeLabel$$.$setX$($availWidth$$1_x$$81$$))) : ($sizeValueLabel$$ && ($sizeLabel$$.$setX$($availWidth$$1_x$$81$$), $availWidth$$1_x$$81$$ += $sizeLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, $sizeValueLabel$$.$setX$($availWidth$$1_x$$81$$), $availWidth$$1_x$$81$$ += $sizeValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$), $colorValueLabel$$ && ($colorLabel$$.$setX$($availWidth$$1_x$$81$$), $availWidth$$1_x$$81$$ += $colorLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, 
    $colorValueLabel$$.$setX$($availWidth$$1_x$$81$$)))
  }
  return $labelContainer$$1$$
};
D.$DvtBaseTreeKeyboardHandler$$ = function $$DvtBaseTreeKeyboardHandler$$$($manager$$) {
  this.Init($manager$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtBaseTreeKeyboardHandler");
D.$DvtBaseTreeKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtBaseTreeKeyboardHandler$$$$$isSelectionEvent$$($event$$117$$) {
  return this.$isNavigationEvent$($event$$117$$) && !$event$$117$$.ctrlKey
};
D.$DvtBaseTreeKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtBaseTreeKeyboardHandler$$$$$isMultiSelectEvent$$($event$$118$$) {
  return 32 == $event$$118$$.keyCode && $event$$118$$.ctrlKey
};
D.$DvtBaseTreeDefaults$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtBaseTreeDefaults");
D.$DvtBaseTreeDefaults$VERSION_1$$ = {skin:"skyros", emptyText:"No data to display", nodeDefaults:{labelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px;")}, styleDefaults:{_attributeTypeTextStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;font-weight:bold;color:#4F4F4F"), _attributeValueTextStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;")}, 
_resources:{}};
D.$DvtBaseTreeDefaults$$.prototype.Init = function $$DvtBaseTreeDefaults$$$$Init$($defaultsMap_ret$$11$$) {
  $defaultsMap_ret$$11$$ = {skyros:D.$DvtJSONUtils$$.$merge$($defaultsMap_ret$$11$$.skyros, D.$DvtBaseTreeDefaults$VERSION_1$$), alta:D.$DvtJSONUtils$$.$merge$($defaultsMap_ret$$11$$.alta, {})};
  D.$DvtBaseTreeDefaults$$.$superclass$.Init.call(this, $defaultsMap_ret$$11$$)
};
D.$DvtBaseTreeJsonUtils$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeJsonUtils$$, D.$DvtObj$$, "DvtBaseTreeJsonUtils");
D.$DvtBaseTreeJsonUtils$$.prototype.$toXml$ = function $$DvtBaseTreeJsonUtils$$$$$toXml$$($JSCompiler_inline_result$$8989_options$$8_ret$$inline_9526$$) {
  var $JSCompiler_temp_const$$221_ret$$12_ret$$inline_2223$$;
  $JSCompiler_temp_const$$221_ret$$12_ret$$inline_2223$$ = "\x3c" + this.$GetComponentName$();
  $JSCompiler_temp_const$$221_ret$$12_ret$$inline_2223$$ += this.$WriteComponentAttributes$($JSCompiler_inline_result$$8989_options$$8_ret$$inline_9526$$);
  $JSCompiler_temp_const$$221_ret$$12_ret$$inline_2223$$ += "\x3e\n";
  if($JSCompiler_inline_result$$8989_options$$8_ret$$inline_9526$$ && $JSCompiler_inline_result$$8989_options$$8_ret$$inline_9526$$.nodes) {
    for(var $JSCompiler_temp_const$$8988_nodes$$3_ret$$inline_2227$$ = $JSCompiler_inline_result$$8989_options$$8_ret$$inline_9526$$.nodes, $attrGroups$$inline_9525_groups$$inline_9527_i$$131$$ = 0;$attrGroups$$inline_9525_groups$$inline_9527_i$$131$$ < $JSCompiler_temp_const$$8988_nodes$$3_ret$$inline_2227$$.length;$attrGroups$$inline_9525_groups$$inline_9527_i$$131$$++) {
      $JSCompiler_temp_const$$221_ret$$12_ret$$inline_2223$$ += (0,D.$JSCompiler_StaticMethods_WriteNodeElement$$)(this, $JSCompiler_inline_result$$8989_options$$8_ret$$inline_9526$$, $JSCompiler_temp_const$$8988_nodes$$3_ret$$inline_2227$$[$attrGroups$$inline_9525_groups$$inline_9527_i$$131$$])
    }
  }
  $JSCompiler_temp_const$$8988_nodes$$3_ret$$inline_2227$$ = "\x3ca/\x3e\n" + this.$WriteResourcesElement$($JSCompiler_inline_result$$8989_options$$8_ret$$inline_9526$$);
  $JSCompiler_temp_const$$8988_nodes$$3_ret$$inline_2227$$ += this.$WriteStyleElement$($JSCompiler_inline_result$$8989_options$$8_ret$$inline_9526$$);
  if($attrGroups$$inline_9525_groups$$inline_9527_i$$131$$ = $JSCompiler_inline_result$$8989_options$$8_ret$$inline_9526$$.attributeGroups ? $JSCompiler_inline_result$$8989_options$$8_ret$$inline_9526$$.attributeGroups[0] : D.$JSCompiler_alias_NULL$$) {
    if($JSCompiler_inline_result$$8989_options$$8_ret$$inline_9526$$ = '\x3cag id\x3d"' + $attrGroups$$inline_9525_groups$$inline_9527_i$$131$$.id + '"', "continuous" == $attrGroups$$inline_9525_groups$$inline_9527_i$$131$$.attributeType) {
      $JSCompiler_inline_result$$8989_options$$8_ret$$inline_9526$$ += this.$WriteAttr$("t", "continuous"), $JSCompiler_inline_result$$8989_options$$8_ret$$inline_9526$$ += this.$WriteAttr$("ramp", $attrGroups$$inline_9525_groups$$inline_9527_i$$131$$.colors.join(";")), $JSCompiler_inline_result$$8989_options$$8_ret$$inline_9526$$ += this.$WriteAttr$("minValue", $attrGroups$$inline_9525_groups$$inline_9527_i$$131$$.min), $JSCompiler_inline_result$$8989_options$$8_ret$$inline_9526$$ += this.$WriteAttr$("maxValue", 
      $attrGroups$$inline_9525_groups$$inline_9527_i$$131$$.max), $JSCompiler_inline_result$$8989_options$$8_ret$$inline_9526$$ += this.$WriteAttr$("minLabel", $attrGroups$$inline_9525_groups$$inline_9527_i$$131$$.minLabel), $JSCompiler_inline_result$$8989_options$$8_ret$$inline_9526$$ += this.$WriteAttr$("maxLabel", $attrGroups$$inline_9525_groups$$inline_9527_i$$131$$.maxLabel), $JSCompiler_inline_result$$8989_options$$8_ret$$inline_9526$$ += "/\x3e"
    }else {
      $JSCompiler_inline_result$$8989_options$$8_ret$$inline_9526$$ += "\x3e\n";
      for(var $attrGroups$$inline_9525_groups$$inline_9527_i$$131$$ = $attrGroups$$inline_9525_groups$$inline_9527_i$$131$$.groups, $i$$inline_9528$$ = 0;$i$$inline_9528$$ < $attrGroups$$inline_9525_groups$$inline_9527_i$$131$$.length;$i$$inline_9528$$++) {
        $JSCompiler_inline_result$$8989_options$$8_ret$$inline_9526$$ += "\x3ci", $JSCompiler_inline_result$$8989_options$$8_ret$$inline_9526$$ += this.$WriteAttr$("g", $attrGroups$$inline_9525_groups$$inline_9527_i$$131$$[$i$$inline_9528$$].id), $JSCompiler_inline_result$$8989_options$$8_ret$$inline_9526$$ += this.$WriteAttr$("l", $attrGroups$$inline_9525_groups$$inline_9527_i$$131$$[$i$$inline_9528$$].label), $JSCompiler_inline_result$$8989_options$$8_ret$$inline_9526$$ += this.$WriteAttr$("c", 
        $attrGroups$$inline_9525_groups$$inline_9527_i$$131$$[$i$$inline_9528$$].color), $JSCompiler_inline_result$$8989_options$$8_ret$$inline_9526$$ += this.$WriteAttr$("p", $attrGroups$$inline_9525_groups$$inline_9527_i$$131$$[$i$$inline_9528$$].pattern), $JSCompiler_inline_result$$8989_options$$8_ret$$inline_9526$$ += "/\x3e\n"
      }
      $JSCompiler_inline_result$$8989_options$$8_ret$$inline_9526$$ += "\x3c/ag\x3e\n"
    }
  }else {
    $JSCompiler_inline_result$$8989_options$$8_ret$$inline_9526$$ = ""
  }
  $JSCompiler_temp_const$$8988_nodes$$3_ret$$inline_2227$$ = $JSCompiler_temp_const$$8988_nodes$$3_ret$$inline_2227$$ + $JSCompiler_inline_result$$8989_options$$8_ret$$inline_9526$$ + ("\x3c/" + this.$GetComponentName$() + "\x3e");
  return $JSCompiler_temp_const$$221_ret$$12_ret$$inline_2223$$ += $JSCompiler_temp_const$$8988_nodes$$3_ret$$inline_2227$$
};
D.$DvtBaseTreeJsonUtils$$.prototype.$WriteAttr$ = function $$DvtBaseTreeJsonUtils$$$$$WriteAttr$$($attrName$$, $value$$57$$) {
  return $value$$57$$ != D.$JSCompiler_alias_NULL$$ ? " " + $attrName$$ + '\x3d"' + $value$$57$$ + '"' : ""
};
D.$DvtBaseTreeJsonUtils$$.prototype.$GetComponentName$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$DvtBaseTreeJsonUtils$$.prototype.$WriteComponentAttributes$ = function $$DvtBaseTreeJsonUtils$$$$$WriteComponentAttributes$$($options$$10$$) {
  var $ret$$14$$;
  $ret$$14$$ = "" + this.$WriteAttr$("sv", $options$$10$$.sizeLabel);
  $ret$$14$$ += this.$WriteAttr$("cv", $options$$10$$.colorLabel);
  var $attrGroups$$3_selectedNodes$$ = $options$$10$$.attributeGroups ? $options$$10$$.attributeGroups[0] : D.$JSCompiler_alias_NULL$$;
  $attrGroups$$3_selectedNodes$$ && ($ret$$14$$ += this.$WriteAttr$("ls", $attrGroups$$3_selectedNodes$$.id));
  for(var $attrGroups$$3_selectedNodes$$ = $options$$10$$.selection ? $options$$10$$.selection : [], $selectedNodeStr$$ = "", $i$$132$$ = 0;$i$$132$$ < $attrGroups$$3_selectedNodes$$.length;$i$$132$$++) {
    0 < $selectedNodeStr$$.length && ($selectedNodeStr$$ += ","), $selectedNodeStr$$ += $attrGroups$$3_selectedNodes$$[$i$$132$$]
  }
  0 < $selectedNodeStr$$.length && ($ret$$14$$ += this.$WriteAttr$("selIds", $selectedNodeStr$$));
  $ret$$14$$ += this.$WriteAttr$("adu", $options$$10$$.animationDuration);
  $ret$$14$$ += this.$WriteAttr$("adc", $options$$10$$.animationOnDataChange);
  $ret$$14$$ += this.$WriteAttr$("emptyText", $options$$10$$.emptyText);
  $ret$$14$$ += this.$WriteAttr$("sel", $options$$10$$.selectionMode);
  return $ret$$14$$ += this.$WriteAttr$("sort", $options$$10$$.sorting)
};
D.$JSCompiler_StaticMethods_WriteNodeElement$$ = function $$JSCompiler_StaticMethods_WriteNodeElement$$$($JSCompiler_StaticMethods_WriteNodeElement$self$$, $options$$12$$, $nodeData$$9_nodes$$4$$) {
  var $ret$$16$$;
  $ret$$16$$ = "\x3cn" + $JSCompiler_StaticMethods_WriteNodeElement$self$$.$WriteNodeAttributes$($options$$12$$, $nodeData$$9_nodes$$4$$);
  if($nodeData$$9_nodes$$4$$ && $nodeData$$9_nodes$$4$$.nodes && 0 < $nodeData$$9_nodes$$4$$.nodes.length) {
    $ret$$16$$ += $JSCompiler_StaticMethods_WriteNodeElement$self$$.$WriteAttr$("di", "t");
    $ret$$16$$ += "\x3e\n";
    $nodeData$$9_nodes$$4$$ = $nodeData$$9_nodes$$4$$.nodes;
    for(var $i$$133$$ = 0;$i$$133$$ < $nodeData$$9_nodes$$4$$.length;$i$$133$$++) {
      $ret$$16$$ += (0,D.$JSCompiler_StaticMethods_WriteNodeElement$$)($JSCompiler_StaticMethods_WriteNodeElement$self$$, $options$$12$$, $nodeData$$9_nodes$$4$$[$i$$133$$])
    }
    $ret$$16$$ += "\x3c/n\x3e\n"
  }else {
    $ret$$16$$ += "/\x3e\n"
  }
  return $ret$$16$$
};
D.$DvtBaseTreeJsonUtils$$.prototype.$WriteNodeAttributes$ = function $$DvtBaseTreeJsonUtils$$$$$WriteNodeAttributes$$($options$$13$$, $nodeData$$10$$) {
  var $ret$$17$$;
  $ret$$17$$ = "" + this.$WriteAttr$("id", $nodeData$$10$$.id);
  $ret$$17$$ += this.$WriteAttr$("s", $nodeData$$10$$.value);
  $ret$$17$$ += this.$WriteAttr$("c", $nodeData$$10$$.color);
  $ret$$17$$ += this.$WriteAttr$("l", $nodeData$$10$$.label);
  $ret$$17$$ += this.$WriteAttr$("p", $nodeData$$10$$.pattern);
  $ret$$17$$ += this.$WriteAttr$("tt", $nodeData$$10$$.shortDesc ? $nodeData$$10$$.shortDesc : $nodeData$$10$$.tooltip);
  $ret$$17$$ += this.$WriteAttr$("ls", $nodeData$$10$$.labelStyle ? $nodeData$$10$$.labelStyle : $options$$13$$.nodeDefaults.labelStyle);
  var $drilling$$ = $nodeData$$10$$.drilling ? $nodeData$$10$$.drilling : $options$$13$$.nodeDefaults.drilling;
  "insert" == $drilling$$ ? $ret$$17$$ += this.$WriteAttr$("d", "i") : "replace" == $drilling$$ ? $ret$$17$$ += this.$WriteAttr$("d", "r") : "insertAndReplace" == $drilling$$ && ($ret$$17$$ += this.$WriteAttr$("d", "ir"));
  return $ret$$17$$ += this.$WriteAttr$("nsel", $nodeData$$10$$.selectable ? $nodeData$$10$$.selectable : "auto")
};
D.$DvtBaseTreeJsonUtils$$.prototype.$WriteResourcesElement$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtBaseTreeJsonUtils$$.prototype.$WriteStyleElement$ = function $$DvtBaseTreeJsonUtils$$$$$WriteStyleElement$$($options$$16$$) {
  var $ret$$19$$;
  $ret$$19$$ = "\x3cstyles " + this.$WriteAttr$("attrType", $options$$16$$.styleDefaults._attributeTypeTextStyle);
  return $ret$$19$$ += this.$WriteAttr$("attrValue", $options$$16$$.styleDefaults._attributeValueTextStyle)
};
D.$DvtTreeAutomation$$ = function $$DvtTreeAutomation$$$($treeView$$6$$) {
  this.$_treeView$ = $treeView$$6$$;
  this.$_root$ = $treeView$$6$$.$_root$
};
(0,D.$goog$exportSymbol$$)("DvtTreeAutomation", D.$DvtTreeAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTreeAutomation$$, D.$DvtAutomation$$, "DvtTreeAutomation");
D.$DvtTreeAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtTreeAutomation$$$$$GetSubIdForDomElement$$($displayable$$6_indices$$8$$) {
  var $childIndices_logicalObj$$1$$ = this.$_treeView$.$getLogicalObject$($displayable$$6_indices$$8$$);
  if(!$childIndices_logicalObj$$1$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  if($childIndices_logicalObj$$1$$ instanceof D.$DvtBaseTreeNode$$) {
    $displayable$$6_indices$$8$$ = "";
    if(!this.$_root$.$_bArtificialRoot$) {
      if($childIndices_logicalObj$$1$$ == this.$_root$) {
        return"node[0]"
      }
      $displayable$$6_indices$$8$$ += "[0]"
    }
    $displayable$$6_indices$$8$$ = ($childIndices_logicalObj$$1$$ = this.$_getIndicesFromNode$($childIndices_logicalObj$$1$$, this.$_root$.$getChildNodes$())) ? $displayable$$6_indices$$8$$ + $childIndices_logicalObj$$1$$ : $displayable$$6_indices$$8$$;
    if(0 < $displayable$$6_indices$$8$$.length) {
      return"node" + $displayable$$6_indices$$8$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTreeAutomation$$.prototype.$_getIndicesFromNode$ = function $$DvtTreeAutomation$$$$$_getIndicesFromNode$$($node$$50$$, $children$$5$$) {
  if($children$$5$$ && 0 < $children$$5$$.length) {
    for(var $n$$10$$ = 0;$n$$10$$ < $children$$5$$.length;$n$$10$$++) {
      if($children$$5$$[$n$$10$$] == $node$$50$$) {
        return"[" + $n$$10$$ + "]"
      }
      var $nodeIndex$$1$$ = this.$_getIndicesFromNode$($node$$50$$, $children$$5$$[$n$$10$$].$getChildNodes$());
      if($nodeIndex$$1$$) {
        return"[" + $n$$10$$ + "]" + $nodeIndex$$1$$
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTreeAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtTreeAutomation$$$$$getDomElementForSubId$$($foundNode_subId$$7$$) {
  return!this.$_root$.$_bArtificialRoot$ && ($foundNode_subId$$7$$ = $foundNode_subId$$7$$.substring(0, $foundNode_subId$$7$$.indexOf("[")) + $foundNode_subId$$7$$.substring($foundNode_subId$$7$$.indexOf("]") + 1), "node" == $foundNode_subId$$7$$) ? this.$_root$.$__getDisplayable$().$getElem$() : ($foundNode_subId$$7$$ = (0,D.$JSCompiler_StaticMethods__getNodeFromSubId$$)(this, this.$_root$, $foundNode_subId$$7$$)) ? $foundNode_subId$$7$$.$getDisplayable$().$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$DvtTreeAutomation$$.prototype.getDomElementForSubId = D.$DvtTreeAutomation$$.prototype.$getDomElementForSubId$;
D.$JSCompiler_StaticMethods__getNodeFromSubId$$ = function $$JSCompiler_StaticMethods__getNodeFromSubId$$$($JSCompiler_StaticMethods__getNodeFromSubId$self$$, $node$$51$$, $subId$$8$$) {
  var $index$$85_openParen$$ = $subId$$8$$.indexOf("["), $closeParen_nextCloseParen$$ = $subId$$8$$.indexOf("]");
  if(0 <= $index$$85_openParen$$ && 0 <= $closeParen_nextCloseParen$$) {
    return $index$$85_openParen$$ = $subId$$8$$.substring($index$$85_openParen$$ + 1, $closeParen_nextCloseParen$$), $subId$$8$$ = $subId$$8$$.substring($closeParen_nextCloseParen$$ + 1), $closeParen_nextCloseParen$$ = $subId$$8$$.indexOf("]"), 0 <= $subId$$8$$.indexOf("[") && 0 <= $closeParen_nextCloseParen$$ ? (0,D.$JSCompiler_StaticMethods__getNodeFromSubId$$)($JSCompiler_StaticMethods__getNodeFromSubId$self$$, $node$$51$$.$getChildNodes$()[$index$$85_openParen$$], $subId$$8$$) : $node$$51$$.$getChildNodes$()[$index$$85_openParen$$]
  }
};
D.$JSCompiler_StaticMethods__getNodeFromPath$$ = function $$JSCompiler_StaticMethods__getNodeFromPath$$$($JSCompiler_StaticMethods__getNodeFromPath$self$$, $children$$6_node$$52$$, $path$$38$$) {
  var $index$$86$$ = $path$$38$$.shift();
  $children$$6_node$$52$$ = $children$$6_node$$52$$.$getChildNodes$();
  return 0 == $path$$38$$.length ? $children$$6_node$$52$$[$index$$86$$] : 0 < $path$$38$$.length ? (0,D.$JSCompiler_StaticMethods__getNodeFromPath$$)($JSCompiler_StaticMethods__getNodeFromPath$self$$, $children$$6_node$$52$$[$index$$86$$], $path$$38$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtTreeAutomation$$.prototype.$getNode$ = function $$DvtTreeAutomation$$$$$getNode$$($node$$53_subIdPath$$) {
  !this.$_root$.$_bArtificialRoot$ && 0 == $node$$53_subIdPath$$[0] && $node$$53_subIdPath$$.shift();
  $node$$53_subIdPath$$ = 0 == $node$$53_subIdPath$$.length ? this.$_root$ : (0,D.$JSCompiler_StaticMethods__getNodeFromPath$$)(this, this.$_root$, $node$$53_subIdPath$$);
  return{color:$node$$53_subIdPath$$.$getColor$(), label:$node$$53_subIdPath$$.$getLabel$(), selected:$node$$53_subIdPath$$.$isSelected$() == D.$JSCompiler_alias_VOID$$ ? D.$JSCompiler_alias_FALSE$$ : $node$$53_subIdPath$$.$isSelected$(), size:$node$$53_subIdPath$$.$getSize$(), tooltip:$node$$53_subIdPath$$.$getDatatip$()}
};
D.$DvtTreeAutomation$$.prototype.getNode = D.$DvtTreeAutomation$$.prototype.$getNode$;
});