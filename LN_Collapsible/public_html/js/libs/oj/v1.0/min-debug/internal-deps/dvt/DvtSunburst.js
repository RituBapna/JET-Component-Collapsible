define(['./DvtToolkit', './DvtBaseTreeView'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtSunburstRotationEvent$$ = function $$DvtSunburstRotationEvent$$$($startAngle$$14$$, $bComplete$$) {
  this.Init($bComplete$$ === D.$JSCompiler_alias_FALSE$$ ? "sunburstRotationInput" : "sunburstRotation");
  this.$_startAngle$ = $startAngle$$14$$ % 360
};
(0,D.$goog$exportSymbol$$)("DvtSunburstRotationEvent", D.$DvtSunburstRotationEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstRotationEvent$$, D.$DvtBaseComponentEvent$$, "DvtSunburstRotationEvent");
D.$DvtSunburstRotationEvent$$.TYPE = "sunburstRotation";
D.$DvtSunburstRotationEvent$$.TYPE_INPUT = "sunburstRotationInput";
D.$DvtSunburstRotationEvent$$.prototype.$getStartAngle$ = (0,D.$JSCompiler_get$$)("$_startAngle$");
D.$DvtSunburstRotationEvent$$.prototype.getStartAngle = D.$DvtSunburstRotationEvent$$.prototype.$getStartAngle$;
D.$DvtBaseSunburst$$ = function $$DvtBaseSunburst$$$($context$$703$$, $callback$$156$$, $callbackObj$$116$$) {
  this.Init($context$$703$$, $callback$$156$$, $callbackObj$$116$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseSunburst$$, D.$DvtBaseTreeView$$, "DvtBaseSunburst");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseSunburst$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$704$$, $callback$$157$$, $callbackObj$$117$$) {
  D.$DvtBaseSunburst$$.$superclass$.Init.call(this, $context$$704$$, $callback$$157$$, $callbackObj$$117$$);
  this.$Defaults$ = new D.$DvtSunburstDefaults$$;
  this.$_angleExtent$ = 2 * window.Math.PI
};
D.$JSCompiler_prototypeAlias$$.$Parse$ = function $$JSCompiler_prototypeAlias$$$$Parse$$($xmlString$$19$$) {
  return(new D.$DvtSunburstParser$$(this)).parse($xmlString$$19$$)
};
D.$JSCompiler_prototypeAlias$$.$ApplyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$ApplyParsedProperties$$($props$$28$$) {
  D.$DvtBaseSunburst$$.$superclass$.$ApplyParsedProperties$.call(this, $props$$28$$);
  this.$_rotation$ = $props$$28$$.rotation;
  this.$_rotateCursor$ = (0,D.$DvtAgent$isPlatformIE$$)() ? "url(" + this.$_resources$.cursorRotate + "), auto" : "url(" + this.$_resources$.cursorRotate + ") 8 8, auto";
  this.$_startAngle$ = (360 - $props$$28$$.$startAngle$) * D.$DvtSunburstNode$TWO_PI$$ / 360;
  this.$_startAngle$ > window.Math.PI && (this.$_startAngle$ -= D.$DvtSunburstNode$TWO_PI$$)
};
D.$JSCompiler_prototypeAlias$$.$Layout$ = function $$JSCompiler_prototypeAlias$$$$Layout$$($availSpace$$109$$) {
  var $bufferSpace$$1$$ = window.Math.max(window.Math.ceil(3 * window.Math.min($availSpace$$109$$.$w$, $availSpace$$109$$.$h$) / 400), 2);
  $availSpace$$109$$.x += $bufferSpace$$1$$;
  $availSpace$$109$$.y += $bufferSpace$$1$$;
  $availSpace$$109$$.$w$ -= 2 * $bufferSpace$$1$$;
  $availSpace$$109$$.$h$ -= 2 * $bufferSpace$$1$$;
  (0,D.$JSCompiler_StaticMethods_LayoutBreadcrumbs$$)(this, $availSpace$$109$$);
  (0,D.$JSCompiler_StaticMethods_LayoutLegend$$)(this, $availSpace$$109$$);
  this.$_totalRadius$ = window.Math.floor(window.Math.min($availSpace$$109$$.$w$, $availSpace$$109$$.$h$) / 2);
  this.$_root$ && D.$DvtSunburstLayout$$.$layout$(this.$_totalRadius$, this.$_root$, this.$_startAngle$, this.$_angleExtent$, this.$Sorting$)
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$176$$, $bounds$$144$$) {
  (0,D.$JSCompiler_StaticMethods_RenderBackground$$)(this, $container$$176$$);
  this.$_breadcrumbs$ && $container$$176$$.$addChild$(this.$_breadcrumbs$);
  this.$_legend$ && ($container$$176$$.$addChild$(this.$_legend$), this.$_legend$ = D.$JSCompiler_alias_NULL$$);
  this.$_translatePt$ = new D.$DvtPoint$$($bounds$$144$$.x + $bounds$$144$$.$w$ / 2, $bounds$$144$$.y + $bounds$$144$$.$h$ / 2);
  if("on" == this.$_rotation$ && (0,D.$JSCompiler_StaticMethods_HasValidData$$)(this)) {
    var $buffer$$10_nodeContainer$$12_rotationShape$$ = (0,D.$DvtAgent$isTouchDevice$$)() ? 60 : 15, $buffer$$10_nodeContainer$$12_rotationShape$$ = new D.$DvtCircle$$(this.$_context$, $bounds$$144$$.x + $bounds$$144$$.$w$ / 2, $bounds$$144$$.y + $bounds$$144$$.$h$ / 2, this.$_totalRadius$ + $buffer$$10_nodeContainer$$12_rotationShape$$);
    (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($buffer$$10_nodeContainer$$12_rotationShape$$);
    $buffer$$10_nodeContainer$$12_rotationShape$$.setCursor(this.$_rotateCursor$);
    $container$$176$$.$addChild$($buffer$$10_nodeContainer$$12_rotationShape$$);
    this.$__getEventManager$().$associate$($buffer$$10_nodeContainer$$12_rotationShape$$, new D.$DvtBaseTreePeer$$(D.$JSCompiler_alias_NULL$$, "_rotationShape"))
  }
  $buffer$$10_nodeContainer$$12_rotationShape$$ = new D.$DvtContainer$$(this.$_context$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($buffer$$10_nodeContainer$$12_rotationShape$$, this.$_translatePt$.x, this.$_translatePt$.y);
  $container$$176$$.$addChild$($buffer$$10_nodeContainer$$12_rotationShape$$);
  if((0,D.$JSCompiler_StaticMethods_HasValidData$$)(this)) {
    var $nodeLayer$$ = new D.$DvtContainer$$(this.$_context$);
    $buffer$$10_nodeContainer$$12_rotationShape$$.$addChild$($nodeLayer$$);
    this.$_root$.$render$($nodeLayer$$);
    this.$_selectedLayer$ = new D.$DvtContainer$$(this.$_context$);
    $buffer$$10_nodeContainer$$12_rotationShape$$.$addChild$(this.$_selectedLayer$);
    this.$_hoverLayer$ = new D.$DvtContainer$$(this.$_context$);
    $buffer$$10_nodeContainer$$12_rotationShape$$.$addChild$(this.$_hoverLayer$)
  }else {
    (0,D.$JSCompiler_StaticMethods_RenderEmptyText$$)(this, $container$$176$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$CreateEventManager$ = function $$JSCompiler_prototypeAlias$$$$CreateEventManager$$($view$$73$$, $context$$705$$, $callback$$158$$, $callbackObj$$118$$) {
  return new D.$DvtSunburstEventManager$$($view$$73$$, $context$$705$$, $callback$$158$$, $callbackObj$$118$$)
};
D.$JSCompiler_prototypeAlias$$.$GetDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$GetDisplayAnimation$$($container$$177$$, $bounds$$145$$) {
  if("fan" === this.$AnimationOnDisplay$ && (0,D.$JSCompiler_StaticMethods_HasValidData$$)(this)) {
    this.$_animateAngleExtent$(0);
    var $anim$$41$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, this.$AnimationDuration$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$41$$.$_animator$, "typeNumber", this, this.$_getAngleExtent$, this.$_animateAngleExtent$, 2 * window.Math.PI);
    return $anim$$41$$
  }
  return D.$DvtBaseSunburst$$.$superclass$.$GetDisplayAnimation$.call(this, $container$$177$$, $bounds$$145$$)
};
D.$JSCompiler_prototypeAlias$$.$GetDeleteContainer$ = function $$JSCompiler_prototypeAlias$$$$GetDeleteContainer$$() {
  var $ret$$129$$ = D.$DvtBaseSunburst$$.$superclass$.$GetDeleteContainer$.call(this);
  $ret$$129$$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($ret$$129$$, this.$_translatePt$.x, this.$_translatePt$.y);
  return $ret$$129$$
};
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$() {
  if(!this.$AnimationStopped$) {
    this.$_container$.$removeChildren$();
    var $availSpace$$110_selectedNodes$$4$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$);
    this.$Layout$($availSpace$$110_selectedNodes$$4$$);
    this.$Render$(this.$_container$, $availSpace$$110_selectedNodes$$4$$);
    for(var $availSpace$$110_selectedNodes$$4$$ = this.$_selectionHandler$ ? this.$_selectionHandler$.getSelection() : [], $i$$866$$ = 0;$i$$866$$ < $availSpace$$110_selectedNodes$$4$$.length;$i$$866$$++) {
      $availSpace$$110_selectedNodes$$4$$[$i$$866$$].$setSelected$(D.$JSCompiler_alias_TRUE$$)
    }
  }
  this.$_angleExtent$ < 2 * window.Math.PI && this.$_animateAngleExtent$(2 * window.Math.PI);
  D.$DvtBaseSunburst$$.$superclass$.$OnAnimationEnd$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$__moveToSelectedLayer$ = function $$JSCompiler_prototypeAlias$$$$__moveToSelectedLayer$$($displayable$$91$$) {
  this.$_selectedLayer$.$addChild$($displayable$$91$$);
  !(0,D.$DvtAgent$isBrowserSafari$$)() && !(0,D.$DvtAgent$isPlatformGecko$$)() && ((0,D.$JSCompiler_StaticMethods_removeAllDrawEffects$$)(this.$_selectedLayer$), (0,D.$JSCompiler_StaticMethods_addDrawEffect$$)(this.$_selectedLayer$, D.$DvtBaseTreeNode$__NODE_SELECTED_SHADOW$$))
};
D.$JSCompiler_prototypeAlias$$.$_getAngleExtent$ = (0,D.$JSCompiler_get$$)("$_angleExtent$");
D.$JSCompiler_prototypeAlias$$.$_animateAngleExtent$ = function $$JSCompiler_prototypeAlias$$$$_animateAngleExtent$$($extent$$1$$) {
  this.$_angleExtent$ = $extent$$1$$;
  this.$Layout$(new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$));
  this.$_root$ && (0,D.$JSCompiler_StaticMethods_updateShapes$$)(this.$_root$, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_StaticMethods___setRotationAnchor$$ = function $$JSCompiler_StaticMethods___setRotationAnchor$$$($JSCompiler_StaticMethods___setRotationAnchor$self$$, $angle$$57$$) {
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$_currentAngle$ = $angle$$57$$;
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotationMask$ = new D.$DvtRect$$($JSCompiler_StaticMethods___setRotationAnchor$self$$.$_context$, 0, 0, $JSCompiler_StaticMethods___setRotationAnchor$self$$.$Width$, $JSCompiler_StaticMethods___setRotationAnchor$self$$.$Height$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotationMask$);
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotationMask$.setCursor($JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotateCursor$);
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$addChild$($JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotationMask$);
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$__getEventManager$().$associate$($JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotationMask$, new D.$DvtBaseTreePeer$$(D.$JSCompiler_alias_NULL$$, "_rotationShape"))
};
D.$JSCompiler_StaticMethods___rotate$$ = function $$JSCompiler_StaticMethods___rotate$$$($JSCompiler_StaticMethods___rotate$self$$, $newAngle$$1$$) {
  var $change$$1$$ = $newAngle$$1$$ - $JSCompiler_StaticMethods___rotate$self$$.$_currentAngle$;
  $JSCompiler_StaticMethods___rotate$self$$.$_currentAngle$ = $newAngle$$1$$;
  $JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ += $change$$1$$;
  $JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ < -window.Math.PI ? $JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ += 2 * window.Math.PI : $JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ > window.Math.PI && ($JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ -= 2 * window.Math.PI);
  $JSCompiler_StaticMethods___rotate$self$$.$Layout$(new D.$DvtRectangle$$(0, 0, $JSCompiler_StaticMethods___rotate$self$$.$Width$, $JSCompiler_StaticMethods___rotate$self$$.$Height$));
  $JSCompiler_StaticMethods___rotate$self$$.$_root$ && (0,D.$JSCompiler_StaticMethods_updateShapes$$)($JSCompiler_StaticMethods___rotate$self$$.$_root$, D.$JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods___rotate$self$$.$__dispatchEvent$(new D.$DvtSunburstRotationEvent$$(360 - window.Math.round(180 * $JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ / window.Math.PI), D.$JSCompiler_alias_FALSE$$))
};
D.$JSCompiler_StaticMethods___endRotation$$ = function $$JSCompiler_StaticMethods___endRotation$$$($JSCompiler_StaticMethods___endRotation$self$$) {
  $JSCompiler_StaticMethods___endRotation$self$$.$_currentAngle$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods___endRotation$self$$.removeChild($JSCompiler_StaticMethods___endRotation$self$$.$_rotationMask$);
  $JSCompiler_StaticMethods___endRotation$self$$.$_rotationMask$ = D.$JSCompiler_alias_NULL$$;
  var $degrees$$8$$ = 360 - window.Math.round(180 * $JSCompiler_StaticMethods___endRotation$self$$.$_startAngle$ / window.Math.PI);
  $JSCompiler_StaticMethods___endRotation$self$$.$__dispatchEvent$(new D.$DvtSunburstRotationEvent$$($degrees$$8$$, D.$JSCompiler_alias_FALSE$$));
  $JSCompiler_StaticMethods___endRotation$self$$.$__dispatchEvent$(new D.$DvtSunburstRotationEvent$$($degrees$$8$$, D.$JSCompiler_alias_TRUE$$))
};
D.$JSCompiler_StaticMethods__calcAngle$$ = function $$JSCompiler_StaticMethods__calcAngle$$$($JSCompiler_StaticMethods__calcAngle$self$$, $x$$317$$, $y$$283$$) {
  return window.Math.atan2($y$$283$$ - $JSCompiler_StaticMethods__calcAngle$self$$.$_translatePt$.y, $x$$317$$ - $JSCompiler_StaticMethods__calcAngle$self$$.$_translatePt$.x)
};
D.$DvtSunburst$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtSunburst", D.$DvtSunburst$$);
D.$DvtObj$$.$createSubclass$(D.$DvtSunburst$$, D.$DvtBaseSunburst$$, "DvtSunburst");
D.$DvtSunburst$$.newInstance = function $$DvtSunburst$$$newInstance$($context$$702$$, $callback$$155$$, $callbackObj$$115$$) {
  var $component$$24$$ = new D.$DvtSunburst$$;
  $component$$24$$.Init($context$$702$$, $callback$$155$$, $callbackObj$$115$$);
  return $component$$24$$
};
D.$DvtSunburst$$.getDefaults = function $$DvtSunburst$$$getDefaults$($skin$$16$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtSunburstDefaults$$, $skin$$16$$)
};
D.$DvtSunburst$$.prototype.$render$ = function $$DvtSunburst$$$$$render$$($options$$255_xmlString$$18$$, $width$$171$$, $height$$152$$) {
  $options$$255_xmlString$$18$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($options$$255_xmlString$$18$$), (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this));
  $options$$255_xmlString$$18$$ = (new D.$DvtSunburstJsonUtils$$).$toXml$(this.$Options$);
  D.$DvtSunburst$$.$superclass$.$render$.call(this, $options$$255_xmlString$$18$$, $width$$171$$, $height$$152$$)
};
D.$DvtSunburst$$.prototype.render = D.$DvtSunburst$$.prototype.$render$;
D.$DvtSunburst$$.prototype.$getBundle$ = function $$DvtSunburst$$$$$getBundle$$() {
  this.$_bundle$ || (this.$_bundle$ = new D.$DvtSunburstBundle$$);
  return this.$_bundle$
};
D.$DvtSunburstParser$$ = function $$DvtSunburstParser$$$($sunburst$$1$$) {
  this.Init($sunburst$$1$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstParser$$, D.$DvtBaseTreeParser$$, "DvtSunburstParser");
D.$DvtSunburstParser$$.prototype.$CreateNode$ = function $$DvtSunburstParser$$$$$CreateNode$$($treeView$$9$$, $props$$21$$, $templates$$8$$) {
  return new D.$DvtSunburstNode$$($treeView$$9$$, $props$$21$$, $templates$$8$$)
};
D.$DvtSunburstParser$$.prototype.$ParseRootAttributes$ = function $$DvtSunburstParser$$$$$ParseRootAttributes$$($xmlNode$$96$$) {
  var $ret$$92$$ = D.$DvtSunburstParser$$.$superclass$.$ParseRootAttributes$.call(this, $xmlNode$$96$$);
  $ret$$92$$.rotation = $xmlNode$$96$$.$getAttr$("r");
  $ret$$92$$.$startAngle$ = $xmlNode$$96$$.$getAttr$("sa");
  if($ret$$92$$.$startAngle$ === D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($ret$$92$$.$startAngle$)) {
    $ret$$92$$.$startAngle$ = 90
  }
  return $ret$$92$$
};
D.$DvtSunburstParser$$.prototype.$ParseNodeAttributes$ = function $$DvtSunburstParser$$$$$ParseNodeAttributes$$($xmlNode$$97$$) {
  var $ret$$93$$ = D.$DvtSunburstParser$$.$superclass$.$ParseNodeAttributes$.call(this, $xmlNode$$97$$);
  $ret$$93$$.$labelHalign$ = $xmlNode$$97$$.$getAttr$("ha");
  $ret$$93$$.$radius$ = $xmlNode$$97$$.$getAttr$("r");
  return $ret$$93$$
};
D.$DvtSunburstParser$$.prototype.$ParseAdditionalNodeStyles$ = function $$DvtSunburstParser$$$$$ParseAdditionalNodeStyles$$($nodeStyle$$3$$, $nodeHoverStyle$$3$$, $nodeSelectedStyle$$3$$, $styles$$22$$) {
  $styles$$22$$.NODE_DEFAULT_COLOR_STYLE = $nodeStyle$$3$$.$getStyle$("border-color");
  $styles$$22$$.NODE_HOVER_COLOR_STYLE = $nodeHoverStyle$$3$$.$getStyle$("border-color");
  $styles$$22$$.NODE_SELECTED_INNER_COLOR_STYLE = $nodeSelectedStyle$$3$$.$getStyle$("-tr-inner-color");
  $styles$$22$$.NODE_SELECTED_OUTER_COLOR_STYLE = $nodeSelectedStyle$$3$$.$getStyle$("-tr-outer-color")
};
D.$DvtSunburstNode$$ = function $$DvtSunburstNode$$$($sunburst$$, $props$$20$$, $templates$$7$$) {
  this.Init($sunburst$$, $props$$20$$, $templates$$7$$);
  this.$_labelDisplay$ = $props$$20$$.$labelDisplay$ ? $props$$20$$.$labelDisplay$ : "auto";
  this.$_labelHalign$ = $props$$20$$.$labelHalign$;
  this.$_radius$ = $props$$20$$.$radius$
};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstNode$$, D.$DvtBaseTreeNode$$, "DvtSunburstNode");
D.$DvtSunburstNode$TWO_PI$$ = 2 * window.Math.PI;
D.$DvtSunburstNode$$.prototype.$render$ = function $$DvtSunburstNode$$$$$render$$($container$$132$$) {
  if(this.$_hasLayout$) {
    this.$_nodeContainer$ = $container$$132$$;
    this.$_shape$ = this.$_createShapeNode$();
    $container$$132$$.$addChild$(this.$_shape$);
    var $afRoot$$5_template$$27$$ = this.$_template$;
    if(!this.$_parent$ && (0 == this.$_innerRadius$ && this.$_angleExtent$ == D.$DvtSunburstNode$TWO_PI$$) && $afRoot$$5_template$$27$$) {
      var $afContext$$31_dims$$40_sqrt2$$ = window.Math.sqrt(2), $aw$$3_matrix$$13$$ = this.$_outerRadius$ * $afContext$$31_dims$$40_sqrt2$$ - 4;
      this.$_x$ = -this.$_outerRadius$ / $afContext$$31_dims$$40_sqrt2$$ + 2;
      this.$_y$ = -this.$_outerRadius$ / $afContext$$31_dims$$40_sqrt2$$ + 2;
      $afContext$$31_dims$$40_sqrt2$$ = this.$_view$.$_afContext$;
      $afContext$$31_dims$$40_sqrt2$$.$_elContext$ = this.$_elAttributes$;
      0 < $aw$$3_matrix$$13$$ && 0 < $aw$$3_matrix$$13$$ && ((0,D.$JSCompiler_StaticMethods_setAvailableWidth$$)($afContext$$31_dims$$40_sqrt2$$, $aw$$3_matrix$$13$$), (0,D.$JSCompiler_StaticMethods_setAvailableHeight$$)($afContext$$31_dims$$40_sqrt2$$, $aw$$3_matrix$$13$$), $afContext$$31_dims$$40_sqrt2$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this)), this.$_contentRoot$ = $afRoot$$5_template$$27$$ = D.$DvtAfComponentFactory$$.$parseAndLayout$($afContext$$31_dims$$40_sqrt2$$, 
      $afRoot$$5_template$$27$$, this.$_shape$), $afContext$$31_dims$$40_sqrt2$$ = $afRoot$$5_template$$27$$.$getDimensions$(), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($afRoot$$5_template$$27$$, this.$_x$ + ($aw$$3_matrix$$13$$ - $afContext$$31_dims$$40_sqrt2$$.$w$) / 2, this.$_y$ + ($aw$$3_matrix$$13$$ - $afContext$$31_dims$$40_sqrt2$$.$h$) / 2))
    }else {
      this.$_text$ = this.$_createTextNode$(this.$_shape$), this.$_text$ != D.$JSCompiler_alias_NULL$$ && (this.$_shape$.$addChild$(this.$_text$), this.$_pattern$ && ($afContext$$31_dims$$40_sqrt2$$ = this.$_text$.$measureDimensions$(), this.$_textBackground$ = new D.$DvtRect$$(this.$_view$.$_context$, $afContext$$31_dims$$40_sqrt2$$.x, $afContext$$31_dims$$40_sqrt2$$.y, $afContext$$31_dims$$40_sqrt2$$.$w$, $afContext$$31_dims$$40_sqrt2$$.$h$), this.$_textBackground$.$setSolidFill$("#FFFFFF"), this.$_textBackground$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), 
      this.$_shape$.$addChild$(this.$_textBackground$), $aw$$3_matrix$$13$$ = this.$_text$.$getMatrix$(), (0,D.$JSCompiler_StaticMethods_isIdentity$$)($aw$$3_matrix$$13$$) || this.$_textBackground$.$setMatrix$($aw$$3_matrix$$13$$), this.$_shape$.$addChild$(this.$_text$)))
    }
    this.$_shape$.$setAriaRole$("img");
    this.$UpdateAriaLabel$();
    this.$renderChildren$($container$$132$$)
  }
};
D.$DvtSunburstNode$$.prototype.$setSelected$ = function $$DvtSunburstNode$$$$$setSelected$$($selected$$31$$) {
  D.$DvtSunburstNode$$.$superclass$.$setSelected$.call(this, $selected$$31$$);
  this.$isSelected$() ? (this.$_shape$.$setSelected$(D.$JSCompiler_alias_TRUE$$), this.$_view$.$__moveToSelectedLayer$(this.$_shape$)) : (this.$_shape$.$setSelected$(D.$JSCompiler_alias_FALSE$$), this.$_nodeContainer$ && this.$_nodeContainer$.$addChild$(this.$_shape$))
};
D.$DvtSunburstNode$$.prototype.$showHoverEffect$ = function $$DvtSunburstNode$$$$$showHoverEffect$$() {
  this.$_shape$ && this.$_hasLayout$ && (this.$_shape$.$showHoverEffect$(), this.$isSelected$() ? this.$_view$.$__moveToSelectedLayer$(this.$_shape$) : this.$_view$.$_hoverLayer$.$addChild$(this.$_shape$))
};
D.$DvtSunburstNode$$.prototype.$hideHoverEffect$ = function $$DvtSunburstNode$$$$$hideHoverEffect$$() {
  this.$_shape$ && (this.$_hasLayout$ && !this.$isShowingKeyboardFocusEffect$()) && (this.$_shape$.$hideHoverEffect$(), !this.$isSelected$() && this.$_nodeContainer$ && this.$_nodeContainer$.$addChild$(this.$_shape$))
};
D.$JSCompiler_StaticMethods_isExpandCollapseEnabled$$ = function $$JSCompiler_StaticMethods_isExpandCollapseEnabled$$$($JSCompiler_StaticMethods_isExpandCollapseEnabled$self$$) {
  return"i" == $JSCompiler_StaticMethods_isExpandCollapseEnabled$self$$.$_drilling$ || "ir" == $JSCompiler_StaticMethods_isExpandCollapseEnabled$self$$.$_drilling$
};
D.$DvtSunburstNode$$.prototype.$getNextNavigable$ = function $$DvtSunburstNode$$$$$getNextNavigable$$($event$$458_next$$15$$) {
  var $keyCode$$30_lastVisitedChild$$, $lastVisitedMidAngle_navigables$$10$$, $i$$inline_6019_idx$$14$$, $root$$25$$;
  if($event$$458_next$$15$$.type == D.$DvtMouseEvent$CLICK$$) {
    return D.$DvtSunburstNode$$.$superclass$.$getNextNavigable$.call(this, $event$$458_next$$15$$)
  }
  $keyCode$$30_lastVisitedChild$$ = $event$$458_next$$15$$.keyCode;
  if(32 == $keyCode$$30_lastVisitedChild$$ && $event$$458_next$$15$$.ctrlKey) {
    return this
  }
  for($root$$25$$ = this;$root$$25$$.$_parent$;) {
    $root$$25$$ = $root$$25$$.$_parent$
  }
  $lastVisitedMidAngle_navigables$$10$$ = (0,D.$JSCompiler_StaticMethods_GetNodesAtDepth$$)(this, $root$$25$$, (0,D.$JSCompiler_StaticMethods_GetDepth$$)(this));
  a: {
    for($i$$inline_6019_idx$$14$$ = 0;$i$$inline_6019_idx$$14$$ < $lastVisitedMidAngle_navigables$$10$$.length;$i$$inline_6019_idx$$14$$++) {
      if(this === $lastVisitedMidAngle_navigables$$10$$[$i$$inline_6019_idx$$14$$]) {
        break a
      }
    }
    $i$$inline_6019_idx$$14$$ = -1
  }
  var $midAngle$$1$$ = this.$_startAngle$ + this.$_angleExtent$ / 2, $midAngle$$1$$ = (0,D.$DvtSunburstNode$_normalizedRadToDeg$$)($midAngle$$1$$);
  switch($keyCode$$30_lastVisitedChild$$) {
    case 38:
      if(this === $root$$25$$ || 180 < $midAngle$$1$$) {
        if($keyCode$$30_lastVisitedChild$$ = this.$_lastVisitedChild$) {
          if($lastVisitedMidAngle_navigables$$10$$ = $keyCode$$30_lastVisitedChild$$.$_startAngle$ + $keyCode$$30_lastVisitedChild$$.$_angleExtent$ / 2, $lastVisitedMidAngle_navigables$$10$$ = (0,D.$DvtSunburstNode$_normalizedRadToDeg$$)($lastVisitedMidAngle_navigables$$10$$), 180 < $lastVisitedMidAngle_navigables$$10$$) {
            return $keyCode$$30_lastVisitedChild$$
          }
        }
        $event$$458_next$$15$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)(this, $event$$458_next$$15$$, (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)(this))
      }else {
        $event$$458_next$$15$$ = (0,D.$JSCompiler_StaticMethods__navigateToParent$$)(this)
      }
      break;
    case 40:
      if(this === $root$$25$$ || 0 <= $midAngle$$1$$ && 180 >= $midAngle$$1$$) {
        if($keyCode$$30_lastVisitedChild$$ = this.$_lastVisitedChild$) {
          if($lastVisitedMidAngle_navigables$$10$$ = $keyCode$$30_lastVisitedChild$$.$_startAngle$ + $keyCode$$30_lastVisitedChild$$.$_angleExtent$ / 2, $lastVisitedMidAngle_navigables$$10$$ = (0,D.$DvtSunburstNode$_normalizedRadToDeg$$)($lastVisitedMidAngle_navigables$$10$$), 0 <= $lastVisitedMidAngle_navigables$$10$$ && 180 >= $lastVisitedMidAngle_navigables$$10$$) {
            return $keyCode$$30_lastVisitedChild$$
          }
        }
        $event$$458_next$$15$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)(this, $event$$458_next$$15$$, (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)(this))
      }else {
        $event$$458_next$$15$$ = (0,D.$JSCompiler_StaticMethods__navigateToParent$$)(this)
      }
      break;
    case 37:
      $event$$458_next$$15$$ = 1 == $lastVisitedMidAngle_navigables$$10$$.length ? this : 0 == $i$$inline_6019_idx$$14$$ ? $lastVisitedMidAngle_navigables$$10$$[$lastVisitedMidAngle_navigables$$10$$.length - 1] : $lastVisitedMidAngle_navigables$$10$$[$i$$inline_6019_idx$$14$$ - 1];
      break;
    case 39:
      $event$$458_next$$15$$ = 1 == $lastVisitedMidAngle_navigables$$10$$.length ? this : $i$$inline_6019_idx$$14$$ == $lastVisitedMidAngle_navigables$$10$$.length - 1 ? $lastVisitedMidAngle_navigables$$10$$[0] : $lastVisitedMidAngle_navigables$$10$$[$i$$inline_6019_idx$$14$$ + 1];
      break;
    default:
      $event$$458_next$$15$$ = this
  }
  (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($event$$458_next$$15$$);
  return $event$$458_next$$15$$
};
D.$JSCompiler_StaticMethods__navigateToParent$$ = function $$JSCompiler_StaticMethods__navigateToParent$$$($JSCompiler_StaticMethods__navigateToParent$self_next$$16$$) {
  var $parent$$51$$ = $JSCompiler_StaticMethods__navigateToParent$self_next$$16$$.$_parent$;
  $parent$$51$$ && ($JSCompiler_StaticMethods__navigateToParent$self_next$$16$$ = $parent$$51$$, (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($parent$$51$$));
  (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($JSCompiler_StaticMethods__navigateToParent$self_next$$16$$);
  return $JSCompiler_StaticMethods__navigateToParent$self_next$$16$$
};
D.$DvtSunburstNode$_normalizedRadToDeg$$ = function $$DvtSunburstNode$_normalizedRadToDeg$$$($deg_rad$$) {
  $deg_rad$$ = D.$DvtMath$$.$radsToDegrees$($deg_rad$$);
  0 > $deg_rad$$ ? $deg_rad$$ += 360 : 360 < $deg_rad$$ && ($deg_rad$$ -= 360);
  return $deg_rad$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtSunburstNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  if(this.$_shape$) {
    var $bounds$$93$$ = this.$_shape$.$getDimensions$(), $point$$33$$ = new D.$DvtPoint$$($bounds$$93$$.x, $bounds$$93$$.y), $point$$33$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)(this.$_shape$, $point$$33$$);
    $bounds$$93$$.x = $point$$33$$.x;
    $bounds$$93$$.y = $point$$33$$.y;
    return $bounds$$93$$
  }
  return new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_shape$ ? this.$_shape$.$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getContextMenuLocation$ = function $$JSCompiler_prototypeAlias$$$$getContextMenuLocation$$() {
  return(0,D.$JSCompiler_StaticMethods_localToStage$$)(this.$_shape$, (0,D.$DvtSunburstNode$_calcPointOnArc$$)(0.5 * (this.$_outerRadius$ + this.$_innerRadius$), this.$_startAngle$ + this.$_angleExtent$ / 2))
};
D.$JSCompiler_prototypeAlias$$.$setLayoutParams$ = function $$JSCompiler_prototypeAlias$$$$setLayoutParams$$($innerRadius$$7$$, $outerRadius$$7$$, $startAngle$$10$$, $angleExtent$$10$$) {
  this.$_innerRadius$ = $innerRadius$$7$$;
  this.$_outerRadius$ = $outerRadius$$7$$;
  this.$_startAngle$ = $startAngle$$10$$;
  this.$_angleExtent$ = $angleExtent$$10$$;
  this.$_hasLayout$ = D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$GetFill$ = function $$JSCompiler_prototypeAlias$$$$GetFill$$() {
  return this.$_bArtificialRoot$ ? (0,D.$DvtSolidFill$invisibleFill$$)() : D.$DvtSunburstNode$$.$superclass$.$GetFill$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$GetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$GetAnimationParams$$() {
  var $r$$37$$ = D.$DvtColorUtils$$.$getRed$(this.$_color$), $g$$4$$ = D.$DvtColorUtils$$.$getGreen$(this.$_color$), $b$$29$$ = D.$DvtColorUtils$$.$getBlue$(this.$_color$);
  return[this.$_innerRadius$, this.$_outerRadius$, this.$_startAngle$, this.$_angleExtent$, $r$$37$$, $g$$4$$, $b$$29$$]
};
D.$JSCompiler_prototypeAlias$$.$SetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$SetAnimationParams$$($params$$58$$) {
  this.$setLayoutParams$($params$$58$$[0], $params$$58$$[1], $params$$58$$[2], $params$$58$$[3]);
  this.$_color$ = D.$DvtColorUtils$$.$makeRGB$(window.Math.round($params$$58$$[4]), window.Math.round($params$$58$$[5]), window.Math.round($params$$58$$[6]));
  (0,D.$JSCompiler_StaticMethods_updateShapes$$)(this, D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$43$$, $oldNode$$17$$) {
  $oldNode$$17$$.$_hasLayout$ && 0 < $oldNode$$17$$.$_angleExtent$ ? D.$DvtSunburstNode$$.$superclass$.$animateUpdate$.call(this, $handler$$43$$, $oldNode$$17$$) : this.$animateInsert$($handler$$43$$)
};
D.$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$195$$, $y$$167$$) {
  var $angle$$31$$ = (0,D.$DvtSunburstNode$_calcAngle$$)($x$$195$$, $y$$167$$);
  return window.Math.sqrt($x$$195$$ * $x$$195$$ + $y$$167$$ * $y$$167$$) >= this.$_innerRadius$ && window.Math.sqrt($x$$195$$ * $x$$195$$ + $y$$167$$ * $y$$167$$) <= this.$_outerRadius$ && (0,D.$JSCompiler_StaticMethods_ContainsAngle$$)(this, $angle$$31$$)
};
D.$JSCompiler_StaticMethods_ContainsAngle$$ = function $$JSCompiler_StaticMethods_ContainsAngle$$$($JSCompiler_StaticMethods_ContainsAngle$self$$, $angle$$32$$) {
  for(;$angle$$32$$ < $JSCompiler_StaticMethods_ContainsAngle$self$$.$_startAngle$;) {
    $angle$$32$$ += D.$DvtSunburstNode$TWO_PI$$
  }
  for(;$angle$$32$$ - $JSCompiler_StaticMethods_ContainsAngle$self$$.$_startAngle$ > D.$DvtSunburstNode$TWO_PI$$;) {
    $angle$$32$$ -= D.$DvtSunburstNode$TWO_PI$$
  }
  return $angle$$32$$ >= $JSCompiler_StaticMethods_ContainsAngle$self$$.$_startAngle$ && $angle$$32$$ <= $JSCompiler_StaticMethods_ContainsAngle$self$$.$_startAngle$ + $JSCompiler_StaticMethods_ContainsAngle$self$$.$_angleExtent$
};
D.$DvtSunburstNode$_calcPointOnArc$$ = function $$DvtSunburstNode$_calcPointOnArc$$$($radius$$24$$, $angle$$33$$) {
  return{x:window.Math.cos($angle$$33$$) * $radius$$24$$, y:window.Math.sin($angle$$33$$) * $radius$$24$$}
};
D.$DvtSunburstNode$_calcAngle$$ = function $$DvtSunburstNode$_calcAngle$$$($x$$197$$, $y$$169$$) {
  var $angle$$34$$ = window.Math.atan2($y$$169$$, $x$$197$$);
  0 > $angle$$34$$ ? $angle$$34$$ += D.$DvtSunburstNode$TWO_PI$$ : $angle$$34$$ > D.$DvtSunburstNode$TWO_PI$$ && ($angle$$34$$ -= D.$DvtSunburstNode$TWO_PI$$);
  return $angle$$34$$
};
D.$DvtSunburstNode$$.prototype.$_createShapeNode$ = function $$DvtSunburstNode$$$$$_createShapeNode$$() {
  if(!this.$_angleExtent$ || 0 >= this.$_angleExtent$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $cmd$$10_shape$$43$$ = (0,D.$JSCompiler_StaticMethods__createPathCmd$$)(this), $cmd$$10_shape$$43$$ = new D.$DvtPath$$(this.$_view$.$_context$, $cmd$$10_shape$$43$$);
  this.$_view$.$__getEventManager$().$associate$($cmd$$10_shape$$43$$, this);
  $cmd$$10_shape$$43$$.$setAlpha$(this.$getAlpha$());
  $cmd$$10_shape$$43$$.$setFill$(this.$GetFill$());
  var $selectedInnerColor$$ = (0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#FFFFFF", "NODE_SELECTED_INNER_COLOR_STYLE"), $selectedOuterColor$$ = (0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#000000", "NODE_SELECTED_OUTER_COLOR_STYLE"), $hoverColor$$4$$ = (0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#FFFFFF", "NODE_HOVER_COLOR_STYLE");
  $cmd$$10_shape$$43$$.$setStroke$(new D.$DvtSolidStroke$$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#FFFFFF", "NODE_DEFAULT_COLOR_STYLE"), 0.3));
  $cmd$$10_shape$$43$$.$setHoverStroke$(new D.$DvtSolidStroke$$($hoverColor$$4$$, 1, 3));
  $cmd$$10_shape$$43$$.$setSelectedStroke$(new D.$DvtSolidStroke$$($selectedInnerColor$$, 1, 1.5), new D.$DvtSolidStroke$$($selectedOuterColor$$, 1, 3.5));
  $cmd$$10_shape$$43$$.$setSelectedHoverStroke$(new D.$DvtSolidStroke$$($hoverColor$$4$$, 1, 3));
  $cmd$$10_shape$$43$$.$setSelectable$(this.$isSelectable$());
  this.$_bArtificialRoot$ && ($cmd$$10_shape$$43$$.$setAlpha$(0.001), $cmd$$10_shape$$43$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$));
  return $cmd$$10_shape$$43$$
};
D.$JSCompiler_StaticMethods__createPathCmd$$ = function $$JSCompiler_StaticMethods__createPathCmd$$$($JSCompiler_StaticMethods__createPathCmd$self$$) {
  var $cmd$$11_p1$$4$$, $p2$$5$$, $p3$$2$$, $p4$$1$$;
  $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ < D.$DvtSunburstNode$TWO_PI$$ ? ($cmd$$11_p1$$4$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$), $p2$$5$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$ + $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$), 
  $p3$$2$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$ + $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$), $p4$$1$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$), $cmd$$11_p1$$4$$ = window.DvtPathUtils.moveTo($cmd$$11_p1$$4$$.x, $cmd$$11_p1$$4$$.y) + 
  window.DvtPathUtils.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$, 1, $p2$$5$$.x, $p2$$5$$.y) + window.DvtPathUtils.lineTo($p3$$2$$.x, $p3$$2$$.y) + window.DvtPathUtils.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$, 
  0, $p4$$1$$.x, $p4$$1$$.y) + window.DvtPathUtils.closePath()) : ($cmd$$11_p1$$4$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$), $p2$$5$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$ + $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2), 
  $p3$$2$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$), $p4$$1$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$ + $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2), $cmd$$11_p1$$4$$ = window.DvtPathUtils.moveTo($cmd$$11_p1$$4$$.x, $cmd$$11_p1$$4$$.y) + 
  window.DvtPathUtils.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2, 1, $p2$$5$$.x, $p2$$5$$.y) + window.DvtPathUtils.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2, 1, $cmd$$11_p1$$4$$.x, $cmd$$11_p1$$4$$.y), 
  0 < $JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$ && ($cmd$$11_p1$$4$$ += window.DvtPathUtils.moveTo($p4$$1$$.x, $p4$$1$$.y) + window.DvtPathUtils.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2, 0, $p3$$2$$.x, $p3$$2$$.y) + window.DvtPathUtils.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, 
  $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2, 0, $p4$$1$$.x, $p4$$1$$.y)), $cmd$$11_p1$$4$$ += window.DvtPathUtils.closePath());
  return $cmd$$11_p1$$4$$
};
D.$DvtSunburstNode$$.prototype.$_createTextNode$ = function $$DvtSunburstNode$$$$$_createTextNode$$($JSCompiler_temp$$225_actualTextWidth$$inline_6029_container$$134_textAnchor$$inline_6030$$) {
  if(!this.$_textStr$ || !$JSCompiler_temp$$225_actualTextWidth$$inline_6029_container$$134_textAnchor$$inline_6030$$ || !this.$_labelDisplay$ || "off" == this.$_labelDisplay$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$ = D.$JSCompiler_alias_FALSE$$;
  if("auto" == this.$_labelDisplay$) {
    if($JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$ = !(0,D.$DvtAgent$isPlatformIE$$)()) {
      (0,D.$DvtAgent$_initialize$$)(), $JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$ = "Windows" == D.$DvtAgent$_os$$
    }
    $JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$ = $JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$ ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
  }else {
    "rotated" == this.$_labelDisplay$ && ($JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$ = D.$JSCompiler_alias_TRUE$$)
  }
  if($JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$ && this.$_angleExtent$ < 2 * window.Math.PI) {
    var $angle$$inline_6031_approxWidth$$inline_6036_innerStartCoord$$inline_6024_text$$inline_6038$$ = window.Math.max(this.$_innerRadius$, 10), $availWidth$$inline_6025_estimatedDims$$inline_6039_rightAngle$$inline_6037$$ = this.$_outerRadius$ - $angle$$inline_6031_approxWidth$$inline_6036_innerStartCoord$$inline_6024_text$$inline_6038$$ - 6, $anchorRadius$$inline_6028_availHeight$$inline_6026_x1$$inline_6040$$ = 1.1 * this.$_angleExtent$ * ($angle$$inline_6031_approxWidth$$inline_6036_innerStartCoord$$inline_6024_text$$inline_6038$$ + 
    6);
    if(6 >= $anchorRadius$$inline_6028_availHeight$$inline_6026_x1$$inline_6040$$) {
      $JSCompiler_temp$$225_actualTextWidth$$inline_6029_container$$134_textAnchor$$inline_6030$$ = D.$JSCompiler_alias_NULL$$
    }else {
      if($JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$ = new D.$DvtOutputText$$(this.$_view$.$_context$, this.$_textStr$, 0, 0), $JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this)), (0,D.$JSCompiler_StaticMethods_ApplyLabelTextStyle$$)(this, $JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$), 
      D.$DvtTextUtils$$.$fitText$($JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$, $availWidth$$inline_6025_estimatedDims$$inline_6039_rightAngle$$inline_6037$$, $anchorRadius$$inline_6028_availHeight$$inline_6026_x1$$inline_6040$$, $JSCompiler_temp$$225_actualTextWidth$$inline_6029_container$$134_textAnchor$$inline_6030$$)) {
        $anchorRadius$$inline_6028_availHeight$$inline_6026_x1$$inline_6040$$ = ($angle$$inline_6031_approxWidth$$inline_6036_innerStartCoord$$inline_6024_text$$inline_6038$$ + this.$_outerRadius$) / 2;
        if("s" == this.$_labelHalign$ || "e" == this.$_labelHalign$) {
          $JSCompiler_temp$$225_actualTextWidth$$inline_6029_container$$134_textAnchor$$inline_6030$$.$addChild$($JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$), $JSCompiler_temp$$225_actualTextWidth$$inline_6029_container$$134_textAnchor$$inline_6030$$ = $JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$.$getDimensions$().$w$, "s" == this.$_labelHalign$ ? $anchorRadius$$inline_6028_availHeight$$inline_6026_x1$$inline_6040$$ = 
          $angle$$inline_6031_approxWidth$$inline_6036_innerStartCoord$$inline_6024_text$$inline_6038$$ + 4.5 + $JSCompiler_temp$$225_actualTextWidth$$inline_6029_container$$134_textAnchor$$inline_6030$$ / 2 : "e" == this.$_labelHalign$ && ($anchorRadius$$inline_6028_availHeight$$inline_6026_x1$$inline_6040$$ = $angle$$inline_6031_approxWidth$$inline_6036_innerStartCoord$$inline_6024_text$$inline_6038$$ + $availWidth$$inline_6025_estimatedDims$$inline_6039_rightAngle$$inline_6037$$ - 4.5 - $JSCompiler_temp$$225_actualTextWidth$$inline_6029_container$$134_textAnchor$$inline_6030$$ / 
          2)
        }
        $JSCompiler_temp$$225_actualTextWidth$$inline_6029_container$$134_textAnchor$$inline_6030$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($anchorRadius$$inline_6028_availHeight$$inline_6026_x1$$inline_6040$$, this.$_startAngle$ + this.$_angleExtent$ / 2);
        $JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$.$alignCenter$();
        $JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$.$alignMiddle$();
        $angle$$inline_6031_approxWidth$$inline_6036_innerStartCoord$$inline_6024_text$$inline_6038$$ = this.$_startAngle$ + this.$_angleExtent$ / 2;
        $angle$$inline_6031_approxWidth$$inline_6036_innerStartCoord$$inline_6024_text$$inline_6038$$ = $angle$$inline_6031_approxWidth$$inline_6036_innerStartCoord$$inline_6024_text$$inline_6038$$ >= D.$DvtSunburstNode$TWO_PI$$ ? $angle$$inline_6031_approxWidth$$inline_6036_innerStartCoord$$inline_6024_text$$inline_6038$$ - D.$DvtSunburstNode$TWO_PI$$ : $angle$$inline_6031_approxWidth$$inline_6036_innerStartCoord$$inline_6024_text$$inline_6038$$;
        $angle$$inline_6031_approxWidth$$inline_6036_innerStartCoord$$inline_6024_text$$inline_6038$$ = 0 > $angle$$inline_6031_approxWidth$$inline_6036_innerStartCoord$$inline_6024_text$$inline_6038$$ ? $angle$$inline_6031_approxWidth$$inline_6036_innerStartCoord$$inline_6024_text$$inline_6038$$ + D.$DvtSunburstNode$TWO_PI$$ : $angle$$inline_6031_approxWidth$$inline_6036_innerStartCoord$$inline_6024_text$$inline_6038$$;
        $angle$$inline_6031_approxWidth$$inline_6036_innerStartCoord$$inline_6024_text$$inline_6038$$ > 0.5 * window.Math.PI && $angle$$inline_6031_approxWidth$$inline_6036_innerStartCoord$$inline_6024_text$$inline_6038$$ < 1.5 * window.Math.PI && ($angle$$inline_6031_approxWidth$$inline_6036_innerStartCoord$$inline_6024_text$$inline_6038$$ += window.Math.PI);
        $JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$.$setRotation$($angle$$inline_6031_approxWidth$$inline_6036_innerStartCoord$$inline_6024_text$$inline_6038$$);
        (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$, $JSCompiler_temp$$225_actualTextWidth$$inline_6029_container$$134_textAnchor$$inline_6030$$.x, $JSCompiler_temp$$225_actualTextWidth$$inline_6029_container$$134_textAnchor$$inline_6030$$.y);
        $JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
        $JSCompiler_temp$$225_actualTextWidth$$inline_6029_container$$134_textAnchor$$inline_6030$$ = $JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$
      }else {
        $JSCompiler_temp$$225_actualTextWidth$$inline_6029_container$$134_textAnchor$$inline_6030$$ = D.$JSCompiler_alias_NULL$$
      }
    }
  }else {
    if(0 == this.$_innerRadius$) {
      $JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$ = {x:0, y:0}
    }else {
      if($JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)((this.$_innerRadius$ + this.$_outerRadius$) / 2, this.$_startAngle$ + this.$_angleExtent$ / 2), $angle$$inline_6031_approxWidth$$inline_6036_innerStartCoord$$inline_6024_text$$inline_6038$$ = 3 * (0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this) / 2, $availWidth$$inline_6025_estimatedDims$$inline_6039_rightAngle$$inline_6037$$ = (0,D.$DvtSunburstNode$_calcAngle$$)($JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$.x + 
      $angle$$inline_6031_approxWidth$$inline_6036_innerStartCoord$$inline_6024_text$$inline_6038$$ / 2, $JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$.y), !(0,D.$JSCompiler_StaticMethods_ContainsAngle$$)(this, (0,D.$DvtSunburstNode$_calcAngle$$)($JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$.x - $angle$$inline_6031_approxWidth$$inline_6036_innerStartCoord$$inline_6024_text$$inline_6038$$ / 2, 
      $JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$.y)) || !(0,D.$JSCompiler_StaticMethods_ContainsAngle$$)(this, $availWidth$$inline_6025_estimatedDims$$inline_6039_rightAngle$$inline_6037$$)) {
        $JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$ = D.$JSCompiler_alias_NULL$$
      }
    }
    if($JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$) {
      $angle$$inline_6031_approxWidth$$inline_6036_innerStartCoord$$inline_6024_text$$inline_6038$$ = new D.$DvtOutputText$$(this.$_view$.$_context$, this.$_textStr$, $JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$.x, $JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$.y, D.$JSCompiler_alias_NULL$$);
      $angle$$inline_6031_approxWidth$$inline_6036_innerStartCoord$$inline_6024_text$$inline_6038$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this));
      (0,D.$JSCompiler_StaticMethods_ApplyLabelTextStyle$$)(this, $angle$$inline_6031_approxWidth$$inline_6036_innerStartCoord$$inline_6024_text$$inline_6038$$);
      $angle$$inline_6031_approxWidth$$inline_6036_innerStartCoord$$inline_6024_text$$inline_6038$$.$alignCenter$();
      $angle$$inline_6031_approxWidth$$inline_6036_innerStartCoord$$inline_6024_text$$inline_6038$$.$alignMiddle$();
      $angle$$inline_6031_approxWidth$$inline_6036_innerStartCoord$$inline_6024_text$$inline_6038$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
      for(var $availWidth$$inline_6025_estimatedDims$$inline_6039_rightAngle$$inline_6037$$ = D.$DvtTextUtils$$.$guessTextDimensions$($angle$$inline_6031_approxWidth$$inline_6036_innerStartCoord$$inline_6024_text$$inline_6038$$), $x2$$inline_6041$$ = $anchorRadius$$inline_6028_availHeight$$inline_6026_x1$$inline_6040$$ = $JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$.x, $y1$$inline_6042$$ = $JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$.y - 
      $availWidth$$inline_6025_estimatedDims$$inline_6039_rightAngle$$inline_6037$$.$h$ / 2, $y2$$inline_6043$$ = $JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$.y + $availWidth$$inline_6025_estimatedDims$$inline_6039_rightAngle$$inline_6037$$.$h$ / 2;this.contains($anchorRadius$$inline_6028_availHeight$$inline_6026_x1$$inline_6040$$, $y1$$inline_6042$$) && this.contains($anchorRadius$$inline_6028_availHeight$$inline_6026_x1$$inline_6040$$, $y2$$inline_6043$$);) {
        $anchorRadius$$inline_6028_availHeight$$inline_6026_x1$$inline_6040$$--
      }
      for(;this.contains($x2$$inline_6041$$, $y1$$inline_6042$$) && this.contains($x2$$inline_6041$$, $y2$$inline_6043$$);) {
        $x2$$inline_6041$$++
      }
      $anchorRadius$$inline_6028_availHeight$$inline_6026_x1$$inline_6040$$ += 3;
      $x2$$inline_6041$$ -= 3;
      $JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$ = 2 * window.Math.min($JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$.x - $anchorRadius$$inline_6028_availHeight$$inline_6026_x1$$inline_6040$$, $x2$$inline_6041$$ - $JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$.x);
      $JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$ < $availWidth$$inline_6025_estimatedDims$$inline_6039_rightAngle$$inline_6037$$.$w$ && ($angle$$inline_6031_approxWidth$$inline_6036_innerStartCoord$$inline_6024_text$$inline_6038$$.$setX$(($anchorRadius$$inline_6028_availHeight$$inline_6026_x1$$inline_6040$$ + $x2$$inline_6041$$) / 2), $JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$ = $x2$$inline_6041$$ - 
      $anchorRadius$$inline_6028_availHeight$$inline_6026_x1$$inline_6040$$);
      $JSCompiler_temp$$225_actualTextWidth$$inline_6029_container$$134_textAnchor$$inline_6030$$ = D.$DvtTextUtils$$.$fitText$($angle$$inline_6031_approxWidth$$inline_6036_innerStartCoord$$inline_6024_text$$inline_6038$$, $JSCompiler_temp$$14_bRotated_text$$inline_6027_textAnchor$$inline_6035_usableSpace$$inline_6044$$, $availWidth$$inline_6025_estimatedDims$$inline_6039_rightAngle$$inline_6037$$.$h$, $JSCompiler_temp$$225_actualTextWidth$$inline_6029_container$$134_textAnchor$$inline_6030$$) ? 
      $angle$$inline_6031_approxWidth$$inline_6036_innerStartCoord$$inline_6024_text$$inline_6038$$ : D.$JSCompiler_alias_NULL$$
    }else {
      $JSCompiler_temp$$225_actualTextWidth$$inline_6029_container$$134_textAnchor$$inline_6030$$ = D.$JSCompiler_alias_VOID$$
    }
  }
  return $JSCompiler_temp$$225_actualTextWidth$$inline_6029_container$$134_textAnchor$$inline_6030$$
};
D.$DvtSunburstNode$$.prototype.$handleMouseOver$ = function $$DvtSunburstNode$$$$$handleMouseOver$$() {
  if(!this.$_expandButton$) {
    var $JSCompiler_inline_result$$524_container$$inline_6047_tooltip$$inline_6050$$;
    $JSCompiler_inline_result$$524_container$$inline_6047_tooltip$$inline_6050$$ = this.$_shape$;
    if(!$JSCompiler_inline_result$$524_container$$inline_6047_tooltip$$inline_6050$$ || !(0,D.$JSCompiler_StaticMethods_isExpandCollapseEnabled$$)(this)) {
      $JSCompiler_inline_result$$524_container$$inline_6047_tooltip$$inline_6050$$ = D.$JSCompiler_alias_NULL$$
    }else {
      var $JSCompiler_temp$$8973_button$$inline_10631_button$$inline_10639_button$$inline_6048_context$$inline_10626_context$$inline_10634$$;
      if(this.$_disclosed$) {
        $JSCompiler_temp$$8973_button$$inline_10631_button$$inline_10639_button$$inline_6048_context$$inline_10626_context$$inline_10634$$ = this.$_view$.$_context$;
        var $downState$$inline_10630_downState$$inline_10638_resources$$inline_10627_resources$$inline_10635$$ = this.$_view$.$_resources$, $center$$inline_6049_upState$$inline_10628_upState$$inline_10636$$ = new D.$DvtImage$$($JSCompiler_temp$$8973_button$$inline_10631_button$$inline_10639_button$$inline_6048_context$$inline_10626_context$$inline_10634$$, $downState$$inline_10630_downState$$inline_10638_resources$$inline_10627_resources$$inline_10635$$.collapseUp, 0, 0, 16, 16), $overState$$inline_10629_overState$$inline_10637$$ = 
        new D.$DvtImage$$($JSCompiler_temp$$8973_button$$inline_10631_button$$inline_10639_button$$inline_6048_context$$inline_10626_context$$inline_10634$$, $downState$$inline_10630_downState$$inline_10638_resources$$inline_10627_resources$$inline_10635$$.collapseOver, 0, 0, 16, 16), $downState$$inline_10630_downState$$inline_10638_resources$$inline_10627_resources$$inline_10635$$ = new D.$DvtImage$$($JSCompiler_temp$$8973_button$$inline_10631_button$$inline_10639_button$$inline_6048_context$$inline_10626_context$$inline_10634$$, 
        $downState$$inline_10630_downState$$inline_10638_resources$$inline_10627_resources$$inline_10635$$.collapseDown, 0, 0, 16, 16)
      }else {
        $JSCompiler_temp$$8973_button$$inline_10631_button$$inline_10639_button$$inline_6048_context$$inline_10626_context$$inline_10634$$ = this.$_view$.$_context$, $downState$$inline_10630_downState$$inline_10638_resources$$inline_10627_resources$$inline_10635$$ = this.$_view$.$_resources$, $center$$inline_6049_upState$$inline_10628_upState$$inline_10636$$ = new D.$DvtImage$$($JSCompiler_temp$$8973_button$$inline_10631_button$$inline_10639_button$$inline_6048_context$$inline_10626_context$$inline_10634$$, 
        $downState$$inline_10630_downState$$inline_10638_resources$$inline_10627_resources$$inline_10635$$.expandUp, 0, 0, 16, 16), $overState$$inline_10629_overState$$inline_10637$$ = new D.$DvtImage$$($JSCompiler_temp$$8973_button$$inline_10631_button$$inline_10639_button$$inline_6048_context$$inline_10626_context$$inline_10634$$, $downState$$inline_10630_downState$$inline_10638_resources$$inline_10627_resources$$inline_10635$$.expandOver, 0, 0, 16, 16), $downState$$inline_10630_downState$$inline_10638_resources$$inline_10627_resources$$inline_10635$$ = 
        new D.$DvtImage$$($JSCompiler_temp$$8973_button$$inline_10631_button$$inline_10639_button$$inline_6048_context$$inline_10626_context$$inline_10634$$, $downState$$inline_10630_downState$$inline_10638_resources$$inline_10627_resources$$inline_10635$$.expandDown, 0, 0, 16, 16)
      }
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($center$$inline_6049_upState$$inline_10628_upState$$inline_10636$$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($overState$$inline_10629_overState$$inline_10637$$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($downState$$inline_10630_downState$$inline_10638_resources$$inline_10627_resources$$inline_10635$$);
      $JSCompiler_temp$$8973_button$$inline_10631_button$$inline_10639_button$$inline_6048_context$$inline_10626_context$$inline_10634$$ = new D.$DvtButton$$($JSCompiler_temp$$8973_button$$inline_10631_button$$inline_10639_button$$inline_6048_context$$inline_10626_context$$inline_10634$$, $center$$inline_6049_upState$$inline_10628_upState$$inline_10636$$, $overState$$inline_10629_overState$$inline_10637$$, $downState$$inline_10630_downState$$inline_10638_resources$$inline_10627_resources$$inline_10635$$);
      $JSCompiler_temp$$8973_button$$inline_10631_button$$inline_10639_button$$inline_6048_context$$inline_10626_context$$inline_10634$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$expandCollapseNode$, D.$JSCompiler_alias_FALSE$$, this);
      $center$$inline_6049_upState$$inline_10628_upState$$inline_10636$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)(this.$_outerRadius$, this.$_startAngle$ + this.$_angleExtent$ / 2);
      (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_temp$$8973_button$$inline_10631_button$$inline_10639_button$$inline_6048_context$$inline_10626_context$$inline_10634$$, $center$$inline_6049_upState$$inline_10628_upState$$inline_10636$$.x - 8, $center$$inline_6049_upState$$inline_10628_upState$$inline_10636$$.y - 8);
      $JSCompiler_inline_result$$524_container$$inline_6047_tooltip$$inline_6050$$.$addChild$($JSCompiler_temp$$8973_button$$inline_10631_button$$inline_10639_button$$inline_6048_context$$inline_10626_context$$inline_10634$$);
      $JSCompiler_inline_result$$524_container$$inline_6047_tooltip$$inline_6050$$ = this.$_disclosed$ ? this.$_view$.$_resources$.collapse : this.$_view$.$_resources$.expand;
      this.$_view$.$__getEventManager$().$associate$($JSCompiler_temp$$8973_button$$inline_10631_button$$inline_10639_button$$inline_6048_context$$inline_10626_context$$inline_10634$$, new D.$DvtBaseTreePeer$$(this, this.getId(), $JSCompiler_inline_result$$524_container$$inline_6047_tooltip$$inline_6050$$));
      $JSCompiler_inline_result$$524_container$$inline_6047_tooltip$$inline_6050$$ = $JSCompiler_temp$$8973_button$$inline_10631_button$$inline_10639_button$$inline_6048_context$$inline_10626_context$$inline_10634$$
    }
    this.$_expandButton$ = $JSCompiler_inline_result$$524_container$$inline_6047_tooltip$$inline_6050$$
  }
  D.$DvtSunburstNode$$.$superclass$.$handleMouseOver$.call(this)
};
D.$DvtSunburstNode$$.prototype.$handleMouseOut$ = function $$DvtSunburstNode$$$$$handleMouseOut$$() {
  this.$_expandButton$ && this.$_shape$ && (this.$_shape$.removeChild(this.$_expandButton$), this.$_expandButton$ = D.$JSCompiler_alias_NULL$$);
  D.$DvtSunburstNode$$.$superclass$.$handleMouseOut$.call(this)
};
D.$JSCompiler_StaticMethods_updateShapes$$ = function $$JSCompiler_StaticMethods_updateShapes$$$($JSCompiler_StaticMethods_updateShapes$self$$, $bRecurse$$) {
  if($JSCompiler_StaticMethods_updateShapes$self$$.$_shape$) {
    var $children$$18_cmd$$12$$ = (0,D.$JSCompiler_StaticMethods__createPathCmd$$)($JSCompiler_StaticMethods_updateShapes$self$$);
    $JSCompiler_StaticMethods_updateShapes$self$$.$_shape$.$setCmds$($children$$18_cmd$$12$$);
    if($JSCompiler_StaticMethods_updateShapes$self$$.$_parent$ || !(0 == $JSCompiler_StaticMethods_updateShapes$self$$.$_innerRadius$ && $JSCompiler_StaticMethods_updateShapes$self$$.$_angleExtent$ == D.$DvtSunburstNode$TWO_PI$$)) {
      $JSCompiler_StaticMethods_updateShapes$self$$.$_text$ && $JSCompiler_StaticMethods_updateShapes$self$$.$_shape$.removeChild($JSCompiler_StaticMethods_updateShapes$self$$.$_text$), $JSCompiler_StaticMethods_updateShapes$self$$.$_text$ = $JSCompiler_StaticMethods_updateShapes$self$$.$_createTextNode$($JSCompiler_StaticMethods_updateShapes$self$$.$_shape$), $JSCompiler_StaticMethods_updateShapes$self$$.$_textBackground$ && ($JSCompiler_StaticMethods_updateShapes$self$$.$_shape$.removeChild($JSCompiler_StaticMethods_updateShapes$self$$.$_textBackground$), 
      $JSCompiler_StaticMethods_updateShapes$self$$.$_textBackground$ = D.$JSCompiler_alias_NULL$$)
    }
    $JSCompiler_StaticMethods_updateShapes$self$$.$_shape$.$setFill$($JSCompiler_StaticMethods_updateShapes$self$$.$GetFill$());
    if($bRecurse$$) {
      for(var $children$$18_cmd$$12$$ = $JSCompiler_StaticMethods_updateShapes$self$$.$getChildNodes$(), $i$$578$$ = 0;$i$$578$$ < $children$$18_cmd$$12$$.length;$i$$578$$++) {
        (0,D.$JSCompiler_StaticMethods_updateShapes$$)($children$$18_cmd$$12$$[$i$$578$$], D.$JSCompiler_alias_TRUE$$)
      }
    }
  }
};
D.$DvtSunburstNode$$.prototype.$expandCollapseNode$ = function $$DvtSunburstNode$$$$$expandCollapseNode$$() {
  this.$_disclosed$ = !this.$_disclosed$;
  var $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_6052$$ = this.$_view$, $bDisclosed$$inline_6054_xmlString$$inline_10644$$ = this.$_disclosed$, $id$$inline_10642_nodeId$$inline_10645_startIndex$$inline_10646$$ = this.getId();
  $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_6052$$.$_navigableIdToFocus$ = $id$$inline_10642_nodeId$$inline_10645_startIndex$$inline_10646$$;
  if($bDisclosed$$inline_6054_xmlString$$inline_10644$$) {
    $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_6052$$.$__dispatchEvent$(new D.$DvtSunburstExpandCollapseEvent$$("sunburstExpand", this.getId()))
  }else {
    var $bDisclosed$$inline_6054_xmlString$$inline_10644$$ = $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_6052$$.$LastXml$, $id$$inline_10642_nodeId$$inline_10645_startIndex$$inline_10646$$ = this.getId(), $id$$inline_10642_nodeId$$inline_10645_startIndex$$inline_10646$$ = $bDisclosed$$inline_6054_xmlString$$inline_10644$$.indexOf('\x3cn id\x3d"' + $id$$inline_10642_nodeId$$inline_10645_startIndex$$inline_10646$$), $endIndex$$inline_10647$$ = $bDisclosed$$inline_6054_xmlString$$inline_10644$$.indexOf("\x3e", 
    $id$$inline_10642_nodeId$$inline_10645_startIndex$$inline_10646$$), $nodeString$$inline_10648$$ = $bDisclosed$$inline_6054_xmlString$$inline_10644$$.substring($id$$inline_10642_nodeId$$inline_10645_startIndex$$inline_10646$$, $endIndex$$inline_10647$$), $nodeString$$inline_10648$$ = -1 < $nodeString$$inline_10648$$.indexOf("di\x3d") ? $nodeString$$inline_10648$$.replace('di\x3d"t"', 'di\x3d"f"') : $nodeString$$inline_10648$$ + 'di\x3d"f"';
    $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_6052$$.$render$($bDisclosed$$inline_6054_xmlString$$inline_10644$$.substring(0, $id$$inline_10642_nodeId$$inline_10645_startIndex$$inline_10646$$) + $nodeString$$inline_10648$$ + $bDisclosed$$inline_6054_xmlString$$inline_10644$$.substring($endIndex$$inline_10647$$), $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_6052$$.$Width$, $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_6052$$.$Height$);
    $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_6052$$.$__dispatchEvent$(new D.$DvtSunburstExpandCollapseEvent$$("sunburstCollapse", this.getId()))
  }
  this.$UpdateAriaLabel$()
};
D.$DvtSunburstNode$$.prototype.$isDisclosed$ = (0,D.$JSCompiler_get$$)("$_disclosed$");
D.$JSCompiler_StaticMethods___getRadius$$ = function $$JSCompiler_StaticMethods___getRadius$$$($JSCompiler_StaticMethods___getRadius$self$$) {
  return $JSCompiler_StaticMethods___getRadius$self$$.$_radius$ != D.$JSCompiler_alias_NULL$$ ? (0,window.Number)($JSCompiler_StaticMethods___getRadius$self$$.$_radius$) : $JSCompiler_StaticMethods___getRadius$self$$.$_parent$ ? 1 : $JSCompiler_StaticMethods___getRadius$self$$.$_bArtificialRoot$ ? 0.25 : $JSCompiler_StaticMethods___getRadius$self$$.$_template$ ? 1 : 0.5
};
D.$DvtSunburstNode$$.prototype.$getAriaLabel$ = function $$DvtSunburstNode$$$$$getAriaLabel$$() {
  var $states$$9$$ = [];
  this.$isSelectable$() && $states$$9$$.push((0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  (0,D.$JSCompiler_StaticMethods_isExpandCollapseEnabled$$)(this) && $states$$9$$.push((0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, this.$isDisclosed$() ? "STATE_EXPANDED" : "STATE_COLLAPSED"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$_datatip$, $states$$9$$, this.$Bundle$)
};
D.$DvtSunburstNode$$.prototype.$UpdateAriaLabel$ = function $$DvtSunburstNode$$$$$UpdateAriaLabel$$() {
  !(0,D.$DvtAgent$deferAriaCreation$$)() && this.$_shape$ && (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)(this.$_shape$, "label", this.$getAriaLabel$())
};
D.$DvtSunburstLayout$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstLayout$$, D.$DvtObj$$, "DvtSunburstLayout");
D.$DvtSunburstLayout$$.$layout$ = function $$DvtSunburstLayout$$$$layout$$($totalRadius$$, $root$$26$$, $startAngle$$11$$, $angleExtent$$11$$, $sorting$$1$$) {
  var $longestRadius$$ = D.$DvtSunburstLayout$$.$_calcLargestRadius$($root$$26$$);
  D.$DvtSunburstLayout$$.$_layout$($totalRadius$$ / $longestRadius$$, $root$$26$$, $startAngle$$11$$, $angleExtent$$11$$, $sorting$$1$$, 0)
};
D.$DvtSunburstLayout$$.$_layout$ = function $$DvtSunburstLayout$$$$_layout$$($radiusPerDepth$$1$$, $i$$579_node$$278$$, $childStartAngle_startAngle$$12$$, $angleExtent$$12$$, $sorting$$2$$, $children$$19_innerRadius$$8$$) {
  var $outerRadius$$8$$ = $children$$19_innerRadius$$8$$ + (0,D.$JSCompiler_StaticMethods___getRadius$$)($i$$579_node$$278$$) * $radiusPerDepth$$1$$;
  $i$$579_node$$278$$.$setLayoutParams$($children$$19_innerRadius$$8$$, $outerRadius$$8$$, $childStartAngle_startAngle$$12$$, $angleExtent$$12$$);
  $children$$19_innerRadius$$8$$ = $i$$579_node$$278$$.$getChildNodes$();
  if($children$$19_innerRadius$$8$$ != D.$JSCompiler_alias_NULL$$ && $i$$579_node$$278$$.$isDisclosed$()) {
    "on" == $sorting$$2$$ && ($children$$19_innerRadius$$8$$ = $children$$19_innerRadius$$8$$.slice(0), $children$$19_innerRadius$$8$$.sort(function($radiusPerDepth$$1$$, $i$$579_node$$278$$) {
      return $i$$579_node$$278$$.$getSize$() - $radiusPerDepth$$1$$.$getSize$()
    }));
    (0,D.$DvtAgent$isRightToLeft$$)($i$$579_node$$278$$.$_view$.$_context$) && ($children$$19_innerRadius$$8$$ = $children$$19_innerRadius$$8$$.slice(0).reverse());
    var $total$$11$$ = 0;
    for($i$$579_node$$278$$ = 0;$i$$579_node$$278$$ < $children$$19_innerRadius$$8$$.length;$i$$579_node$$278$$++) {
      $total$$11$$ += 0 < $children$$19_innerRadius$$8$$[$i$$579_node$$278$$].$getSize$() ? $children$$19_innerRadius$$8$$[$i$$579_node$$278$$].$getSize$() : 0
    }
    for($i$$579_node$$278$$ = 0;$i$$579_node$$278$$ < $children$$19_innerRadius$$8$$.length;$i$$579_node$$278$$++) {
      var $child$$32$$ = $children$$19_innerRadius$$8$$[$i$$579_node$$278$$];
      if(!(0 >= $child$$32$$.$getSize$())) {
        var $childAngleExtent$$ = $child$$32$$.$getSize$() / $total$$11$$ * $angleExtent$$12$$;
        D.$DvtSunburstLayout$$.$_layout$($radiusPerDepth$$1$$, $child$$32$$, $childStartAngle_startAngle$$12$$, $childAngleExtent$$, $sorting$$2$$, $outerRadius$$8$$);
        $childStartAngle_startAngle$$12$$ += $childAngleExtent$$
      }
    }
  }
};
D.$DvtSunburstLayout$$.$_calcLargestRadius$ = function $$DvtSunburstLayout$$$$_calcLargestRadius$$($node$$279$$) {
  var $maxRadius$$2$$ = 0, $children$$20$$ = $node$$279$$.$getChildNodes$();
  if($children$$20$$ && 0 < $children$$20$$.length) {
    for(var $i$$580$$ = 0;$i$$580$$ < $children$$20$$.length;$i$$580$$++) {
      var $childRadius$$ = D.$DvtSunburstLayout$$.$_calcLargestRadius$($children$$20$$[$i$$580$$]), $maxRadius$$2$$ = window.Math.max($maxRadius$$2$$, $childRadius$$)
    }
    return $maxRadius$$2$$ + (0,D.$JSCompiler_StaticMethods___getRadius$$)($node$$279$$)
  }
  return(0,D.$JSCompiler_StaticMethods___getRadius$$)($node$$279$$)
};
D.$DvtSunburstExpandCollapseEvent$$ = function $$DvtSunburstExpandCollapseEvent$$$($type$$127$$, $id$$143$$) {
  this.Init($type$$127$$);
  this.$_id$ = $id$$143$$ ? $id$$143$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstExpandCollapseEvent$$, D.$DvtBaseComponentEvent$$, "DvtSunburstExpandCollapseEvent");
D.$DvtSunburstExpandCollapseEvent$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtSunburstEventManager$$ = function $$DvtSunburstEventManager$$$($view$$63$$, $context$$315$$, $callback$$94$$, $callbackObj$$58$$) {
  D.$DvtBaseTreeEventManager$$.call(this, $view$$63$$, $context$$315$$, $callback$$94$$, $callbackObj$$58$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstEventManager$$, D.$DvtBaseTreeEventManager$$, "DvtSunburstEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtSunburstEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($event$$459_relPos$$36$$) {
  var $JSCompiler_StaticMethods___startRotation$self$$inline_6057_obj$$176$$ = this.$GetLogicalObject$($event$$459_relPos$$36$$.target);
  $JSCompiler_StaticMethods___startRotation$self$$inline_6057_obj$$176$$ && $JSCompiler_StaticMethods___startRotation$self$$inline_6057_obj$$176$$.getId && "_rotationShape" == $JSCompiler_StaticMethods___startRotation$self$$inline_6057_obj$$176$$.getId() && !this.$_bRotating$ ? (this.$_bRotating$ = D.$JSCompiler_alias_TRUE$$, $event$$459_relPos$$36$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $event$$459_relPos$$36$$.pageX, $event$$459_relPos$$36$$.pageY), $JSCompiler_StaticMethods___startRotation$self$$inline_6057_obj$$176$$ = 
  this.$_view$, (0,D.$JSCompiler_StaticMethods___setRotationAnchor$$)($JSCompiler_StaticMethods___startRotation$self$$inline_6057_obj$$176$$, (0,D.$JSCompiler_StaticMethods__calcAngle$$)($JSCompiler_StaticMethods___startRotation$self$$inline_6057_obj$$176$$, $event$$459_relPos$$36$$.x, $event$$459_relPos$$36$$.y))) : D.$DvtSunburstEventManager$$.$superclass$.$OnMouseDown$.call(this, $event$$459_relPos$$36$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$460_relPos$$37$$) {
  if(this.$_bRotating$) {
    $event$$460_relPos$$37$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $event$$460_relPos$$37$$.pageX, $event$$460_relPos$$37$$.pageY);
    var $JSCompiler_StaticMethods___continueRotation$self$$inline_6061$$ = this.$_view$;
    (0,D.$JSCompiler_StaticMethods___rotate$$)($JSCompiler_StaticMethods___continueRotation$self$$inline_6061$$, (0,D.$JSCompiler_StaticMethods__calcAngle$$)($JSCompiler_StaticMethods___continueRotation$self$$inline_6061$$, $event$$460_relPos$$37$$.x, $event$$460_relPos$$37$$.y))
  }else {
    D.$DvtSunburstEventManager$$.$superclass$.$OnMouseMove$.call(this, $event$$460_relPos$$37$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$($event$$461$$) {
  this.$_bRotating$ ? (this.$_bRotating$ = D.$JSCompiler_alias_FALSE$$, (0,D.$JSCompiler_StaticMethods___endRotation$$)(this.$_view$)) : D.$DvtSunburstEventManager$$.$superclass$.$OnMouseUp$.call(this, $event$$461$$)
};
D.$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$462$$) {
  var $eventConsumed$$7$$ = D.$JSCompiler_alias_TRUE$$, $keyCode$$31_newAngle$$ = $event$$462$$.keyCode, $node$$280$$ = this.$getFocus$(), $sunburst$$2$$ = this.$_view$;
  (0,D.$JSCompiler_StaticMethods_isExpandCollapseEnabled$$)($node$$280$$) && ((0,D.$DvtKeyboardEvent$isPlus$$)($event$$462$$) && !$node$$280$$.$isDisclosed$() || (0,D.$DvtKeyboardEvent$isMinus$$)($event$$462$$) && $node$$280$$.$isDisclosed$() || $event$$462$$.ctrlKey && 13 == $keyCode$$31_newAngle$$) ? ($node$$280$$.$expandCollapseNode$(), $event$$462$$.preventDefault()) : $sunburst$$2$$ && "on" == $sunburst$$2$$.$_rotation$ && (37 == $keyCode$$31_newAngle$$ || 39 == $keyCode$$31_newAngle$$) && !$event$$462$$.ctrlKey && 
  $event$$462$$.altKey && $event$$462$$.shiftKey ? ($keyCode$$31_newAngle$$ = 37 == $keyCode$$31_newAngle$$ ? -5 * (window.Math.PI / 180) : 5 * (window.Math.PI / 180), (0,D.$JSCompiler_StaticMethods___setRotationAnchor$$)($sunburst$$2$$, 0), (0,D.$JSCompiler_StaticMethods___rotate$$)($sunburst$$2$$, $keyCode$$31_newAngle$$), (0,D.$JSCompiler_StaticMethods___endRotation$$)($sunburst$$2$$), $event$$462$$.preventDefault()) : $eventConsumed$$7$$ = D.$DvtSunburstEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, 
  $event$$462$$);
  return $eventConsumed$$7$$
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchStartInternal$$($event$$463$$) {
  var $obj$$177$$ = this.$GetLogicalObject$($event$$463$$.target);
  $obj$$177$$ && ($obj$$177$$.getId && "_rotationShape" == $obj$$177$$.getId()) && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchAttempt$$)($event$$463$$, this.$RotateStartTouch$, this)
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchMoveInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchMoveInternal$$($event$$464$$) {
  (0,D.$JSCompiler_StaticMethods_processAssociatedTouchMove$$)(this.$TouchManager$, $event$$464$$, "rotateKey")
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchEndInternal$$($event$$465$$) {
  (0,D.$JSCompiler_StaticMethods_processAssociatedTouchEnd$$)(this.$TouchManager$, $event$$465$$, "rotateKey")
};
D.$JSCompiler_prototypeAlias$$.$RotateStartTouch$ = function $$JSCompiler_prototypeAlias$$$$RotateStartTouch$$($event$$466$$, $touch$$14$$) {
  if(1 >= (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "rotateKey").length) {
    (0,D.$JSCompiler_StaticMethods_saveProcessedTouch$$)(this.$TouchManager$, $touch$$14$$.identifier, "rotateKey", "rotateKey", "rotateKey", this.$RotateMoveTouch$, this.$RotateEndTouch$, this);
    (0,D.$JSCompiler_StaticMethods_setTooltipEnabled$$)(this.$TouchManager$, $touch$$14$$.identifier, D.$JSCompiler_alias_FALSE$$);
    var $pos$$42$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $touch$$14$$.pageX, $touch$$14$$.pageY), $JSCompiler_StaticMethods___startRotation$self$$inline_6065$$ = this.$_view$;
    (0,D.$JSCompiler_StaticMethods___setRotationAnchor$$)($JSCompiler_StaticMethods___startRotation$self$$inline_6065$$, (0,D.$JSCompiler_StaticMethods__calcAngle$$)($JSCompiler_StaticMethods___startRotation$self$$inline_6065$$, $pos$$42$$.x, $pos$$42$$.y));
    $event$$466$$.$blockTouchHold$()
  }
};
D.$JSCompiler_prototypeAlias$$.$RotateMoveTouch$ = function $$JSCompiler_prototypeAlias$$$$RotateMoveTouch$$($event$$467$$, $touch$$15$$) {
  var $pos$$43$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $touch$$15$$.pageX, $touch$$15$$.pageY), $JSCompiler_StaticMethods___continueRotation$self$$inline_6069$$ = this.$_view$;
  (0,D.$JSCompiler_StaticMethods___rotate$$)($JSCompiler_StaticMethods___continueRotation$self$$inline_6069$$, (0,D.$JSCompiler_StaticMethods__calcAngle$$)($JSCompiler_StaticMethods___continueRotation$self$$inline_6069$$, $pos$$43$$.x, $pos$$43$$.y));
  $event$$467$$.preventDefault()
};
D.$JSCompiler_prototypeAlias$$.$RotateEndTouch$ = function $$JSCompiler_prototypeAlias$$$$RotateEndTouch$$() {
  (0,D.$JSCompiler_StaticMethods___endRotation$$)(this.$_view$)
};
D.$DvtSunburstBundle$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstBundle$$, D.$DvtUtilBundle$$, "DvtSunburstBundle");
D.$DvtSunburstBundle$$._defaults = {COLOR:"Color", SIZE:"Size"};
D.$DvtSunburstBundle$$.prototype.$GetDefaultStringForKey$ = function $$DvtSunburstBundle$$$$$GetDefaultStringForKey$$($key$$77$$) {
  var $defaultStr$$4$$ = D.$DvtSunburstBundle$$.$superclass$.$GetDefaultStringForKey$.call(this, $key$$77$$);
  return $defaultStr$$4$$ ? $defaultStr$$4$$ : D.$DvtSunburstBundle$$._defaults[$key$$77$$]
};
D.$DvtSunburstBundle$$.prototype.$GetBundlePrefix$ = (0,D.$JSCompiler_returnArg$$)("DvtSunburstBundle");
D.$DvtSunburstDefaults$$ = function $$DvtSunburstDefaults$$$() {
  this.Init({skyros:D.$DvtSunburstDefaults$VERSION_1$$, alta:{}})
};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstDefaults$$, D.$DvtBaseTreeDefaults$$, "DvtSunburstDefaults");
D.$DvtSunburstDefaults$VERSION_1$$ = {rotation:"on"};
D.$DvtSunburstJsonUtils$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstJsonUtils$$, D.$DvtBaseTreeJsonUtils$$, "DvtSunburstJsonUtils");
D.$JSCompiler_prototypeAlias$$ = D.$DvtSunburstJsonUtils$$.prototype;
D.$JSCompiler_prototypeAlias$$.$GetComponentName$ = (0,D.$JSCompiler_returnArg$$)("sunburst");
D.$JSCompiler_prototypeAlias$$.$WriteComponentAttributes$ = function $$JSCompiler_prototypeAlias$$$$WriteComponentAttributes$$($animationOnDisplay$$3_options$$218$$) {
  var $ret$$88$$ = D.$DvtSunburstJsonUtils$$.$superclass$.$WriteComponentAttributes$.call(this, $animationOnDisplay$$3_options$$218$$), $ret$$88$$ = $ret$$88$$ + this.$WriteAttr$("r", $animationOnDisplay$$3_options$$218$$.rotation), $ret$$88$$ = $ret$$88$$ + this.$WriteAttr$("sa", ($animationOnDisplay$$3_options$$218$$.startAngle + 360) % 360);
  $animationOnDisplay$$3_options$$218$$ = $animationOnDisplay$$3_options$$218$$.animationOnDisplay;
  return $ret$$88$$ = "auto" == $animationOnDisplay$$3_options$$218$$ ? $ret$$88$$ + this.$WriteAttr$("adi", "fan") : $ret$$88$$ + this.$WriteAttr$("adi", $animationOnDisplay$$3_options$$218$$)
};
D.$JSCompiler_prototypeAlias$$.$WriteNodeAttributes$ = function $$JSCompiler_prototypeAlias$$$$WriteNodeAttributes$$($options$$219$$, $nodeData$$35$$) {
  var $ret$$89$$ = D.$DvtSunburstJsonUtils$$.$superclass$.$WriteNodeAttributes$.call(this, $options$$219$$, $nodeData$$35$$), $ret$$89$$ = $ret$$89$$ + this.$WriteAttr$("ld", $nodeData$$35$$.labelDisplay ? $nodeData$$35$$.labelDisplay : $options$$219$$.nodeDefaults.labelDisplay), $labelHalign$$1_radius$$25$$ = $nodeData$$35$$.labelHalign ? $nodeData$$35$$.labelHalign : $options$$219$$.nodeDefaults.labelHalign;
  "inner" == $labelHalign$$1_radius$$25$$ ? $ret$$89$$ += this.$WriteAttr$("ha", "s") : "outer" == $labelHalign$$1_radius$$25$$ && ($ret$$89$$ += this.$WriteAttr$("ha", "e"));
  $labelHalign$$1_radius$$25$$ = $nodeData$$35$$.radius;
  $labelHalign$$1_radius$$25$$ != D.$JSCompiler_alias_NULL$$ && !(0,window.isNaN)($labelHalign$$1_radius$$25$$) && ($ret$$89$$ += this.$WriteAttr$("r", $labelHalign$$1_radius$$25$$));
  return $ret$$89$$
};
D.$JSCompiler_prototypeAlias$$.$WriteResourcesElement$ = function $$JSCompiler_prototypeAlias$$$$WriteResourcesElement$$($options$$220$$) {
  var $ret$$90$$, $bundle$$15$$ = new D.$DvtSunburstBundle$$;
  $ret$$90$$ = "\x3cresources" + this.$WriteAttr$("legendSize", (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$15$$, "SIZE"));
  $ret$$90$$ += this.$WriteAttr$("legendColor", (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$15$$, "COLOR"));
  $ret$$90$$ += this.$WriteAttr$("cursorRotate", $options$$220$$._resources.rotateCursor);
  $ret$$90$$ += this.$WriteAttr$("alta", "true");
  return $ret$$90$$ + "/\x3e\n"
};
D.$JSCompiler_prototypeAlias$$.$WriteStyleElement$ = function $$JSCompiler_prototypeAlias$$$$WriteStyleElement$$($options$$221_selectedColor$$1$$) {
  var $ret$$91$$ = D.$DvtSunburstJsonUtils$$.$superclass$.$WriteStyleElement$.call(this, $options$$221_selectedColor$$1$$), $animationColor$$1_borderColor$$33_hoverColor$$5$$ = $options$$221_selectedColor$$1$$.animationUpdateColor;
  $animationColor$$1_borderColor$$33_hoverColor$$5$$ && ($ret$$91$$ += this.$WriteAttr$("top", "-tr-animation-update-color: " + $animationColor$$1_borderColor$$33_hoverColor$$5$$));
  ($animationColor$$1_borderColor$$33_hoverColor$$5$$ = $options$$221_selectedColor$$1$$.nodeDefaults.borderColor) && ($ret$$91$$ += this.$WriteAttr$("node", "border-color: " + $animationColor$$1_borderColor$$33_hoverColor$$5$$));
  ($animationColor$$1_borderColor$$33_hoverColor$$5$$ = $options$$221_selectedColor$$1$$.nodeDefaults.hoverColor) && ($ret$$91$$ += this.$WriteAttr$("node-hover", "border-color: " + $animationColor$$1_borderColor$$33_hoverColor$$5$$));
  ($options$$221_selectedColor$$1$$ = $options$$221_selectedColor$$1$$.nodeDefaults.selectedColor) && ($ret$$91$$ += this.$WriteAttr$("node-selected", "border-color: " + $options$$221_selectedColor$$1$$));
  return $ret$$91$$ + "/\x3e\n"
};
});