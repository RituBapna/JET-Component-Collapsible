define(['./DvtToolkit', './DvtAxis', './DvtLegend', './DvtOverview'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtGraphSelectableArc$$ = function $$DvtGraphSelectableArc$$$($context$$159$$, $cx$$5$$, $cy$$5$$, $rx$$12$$, $ry$$8$$, $sa$$3$$, $ae$$, $clos$$, $id$$86$$) {
  this.Init($context$$159$$, $cx$$5$$, $cy$$5$$, $rx$$12$$, $ry$$8$$, $sa$$3$$, $ae$$, $clos$$, $id$$86$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtGraphSelectableArc$$, D.$DvtArc$$, "DvtGraphSelectableArc");
D.$JSCompiler_prototypeAlias$$ = D.$DvtGraphSelectableArc$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$160$$, $cx$$6$$, $cy$$6$$, $rx$$13$$, $ry$$9$$, $sa$$4$$, $ae$$1$$, $clos$$1$$, $id$$87$$) {
  D.$DvtGraphSelectableArc$$.$superclass$.Init.call(this, $context$$160$$, $cx$$6$$, $cy$$6$$, $rx$$13$$, $ry$$9$$, $sa$$4$$, $ae$$1$$, $clos$$1$$, $id$$87$$);
  this.$_bHover$ = this.$_bSelected$ = D.$JSCompiler_alias_FALSE$$;
  this.$_savedStroke$ = this.$_selectionEffects$ = D.$JSCompiler_alias_NULL$$;
  this.$_bSavedStroke$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$SetSelectionMouseOver$(D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$SetSelectionMouseOver$(D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$isHoverEffectShown$ = (0,D.$JSCompiler_get$$)("$_bHover$");
D.$JSCompiler_prototypeAlias$$.$SetSelectionMouseOver$ = function $$JSCompiler_prototypeAlias$$$$SetSelectionMouseOver$$($bOver$$9$$) {
  this.$_bHover$ != $bOver$$9$$ && (this.$_bHover$ = $bOver$$9$$, D.$DvtSelectionEffectUtils$$.$applyHoverState$(this, this.$_dataColor$))
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_bSelected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSel$$1$$) {
  this.$_bSelected$ != $bSel$$1$$ && (this.$_bSelected$ = $bSel$$1$$, D.$DvtSelectionEffectUtils$$.$applySelectionState$(this, this.$_dataColor$, this.$_innerColor$, this.$_outerColor$))
};
D.$JSCompiler_prototypeAlias$$.$setDataColor$ = function $$JSCompiler_prototypeAlias$$$$setDataColor$$($dataColor$$1$$, $innerColor$$1$$, $outerColor$$1$$) {
  this.$_dataColor$ = $dataColor$$1$$;
  this.$_innerColor$ = $innerColor$$1$$;
  this.$_outerColor$ = $outerColor$$1$$
};
D.$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtGraphSelectablePath$$ = function $$DvtGraphSelectablePath$$$($context$$157$$, $cmds$$, $id$$84$$) {
  this.Init($context$$157$$, $cmds$$, $id$$84$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtGraphSelectablePath$$, D.$DvtPath$$, "DvtGraphSelectablePath");
D.$JSCompiler_prototypeAlias$$ = D.$DvtGraphSelectablePath$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$158$$, $cmds$$1$$, $id$$85$$) {
  D.$DvtGraphSelectablePath$$.$superclass$.Init.call(this, $context$$158$$, $cmds$$1$$, $id$$85$$);
  this.$_bHover$ = this.$_bSelected$ = D.$JSCompiler_alias_FALSE$$;
  this.$_savedStroke$ = this.$_selectionEffects$ = D.$JSCompiler_alias_NULL$$;
  this.$_bSavedStroke$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$SetSelectionMouseOver$(D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$SetSelectionMouseOver$(D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$isHoverEffectShown$ = (0,D.$JSCompiler_get$$)("$_bHover$");
D.$JSCompiler_prototypeAlias$$.$SetSelectionMouseOver$ = function $$JSCompiler_prototypeAlias$$$$SetSelectionMouseOver$$($bOver$$8$$) {
  this.$_bHover$ != $bOver$$8$$ && (this.$_bHover$ = $bOver$$8$$, D.$DvtSelectionEffectUtils$$.$applyHoverState$(this, this.$_dataColor$))
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_bSelected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSel$$) {
  this.$_bSelected$ != $bSel$$ && (this.$_bSelected$ = $bSel$$, D.$DvtSelectionEffectUtils$$.$applySelectionState$(this, this.$_dataColor$, this.$_innerColor$, this.$_outerColor$))
};
D.$JSCompiler_prototypeAlias$$.$setDataColor$ = function $$JSCompiler_prototypeAlias$$$$setDataColor$$($dataColor$$, $innerColor$$, $outerColor$$) {
  this.$_dataColor$ = $dataColor$$;
  this.$_innerColor$ = $innerColor$$;
  this.$_outerColor$ = $outerColor$$
};
D.$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtGraphSelectablePolygon$$ = function $$DvtGraphSelectablePolygon$$$($color$$21$$, $context$$161$$, $arPoints$$2$$, $id$$88$$) {
  this.Init($color$$21$$, $context$$161$$, $arPoints$$2$$, $id$$88$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtGraphSelectablePolygon$$, D.$DvtPolygon$$, "DvtGraphSelectablePolygon");
D.$JSCompiler_prototypeAlias$$ = D.$DvtGraphSelectablePolygon$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$162$$, $arPoints$$3$$, $id$$89$$) {
  D.$DvtGraphSelectablePolygon$$.$superclass$.Init.call(this, $context$$162$$, $arPoints$$3$$, $id$$89$$);
  this.$_bHover$ = this.$_bSelected$ = D.$JSCompiler_alias_FALSE$$;
  this.$_savedStroke$ = this.$_selectionEffects$ = D.$JSCompiler_alias_NULL$$;
  this.$_bSavedStroke$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$SetSelectionMouseOver$(D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$SetSelectionMouseOver$(D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$isHoverEffectShown$ = (0,D.$JSCompiler_get$$)("$_bHover$");
D.$JSCompiler_prototypeAlias$$.$SetSelectionMouseOver$ = function $$JSCompiler_prototypeAlias$$$$SetSelectionMouseOver$$($bOver$$10$$) {
  this.$_bHover$ != $bOver$$10$$ && (this.$_bHover$ = $bOver$$10$$, D.$DvtSelectionEffectUtils$$.$applyHoverState$(this, this.$_dataColor$))
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_bSelected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSel$$2$$) {
  this.$_bSelected$ != $bSel$$2$$ && (this.$_bSelected$ = $bSel$$2$$, D.$DvtSelectionEffectUtils$$.$applySelectionState$(this, this.$_dataColor$, this.$_innerColor$, this.$_outerColor$))
};
D.$JSCompiler_prototypeAlias$$.$setDataColor$ = function $$JSCompiler_prototypeAlias$$$$setDataColor$$($dataColor$$2$$, $innerColor$$2$$, $outerColor$$2$$) {
  this.$_dataColor$ = $dataColor$$2$$;
  this.$_innerColor$ = $innerColor$$2$$;
  this.$_outerColor$ = $outerColor$$2$$
};
D.$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtChartAxis$$ = function $$DvtChartAxis$$$($context$$255$$, $callback$$84$$, $callbackObj$$48$$) {
  this.Init($context$$255$$, $callback$$84$$, $callbackObj$$48$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartAxis$$, D.$DvtAxis$$, "DvtChartAxis");
D.$DvtChartAxis$$.prototype.$getOptions$ = function $$DvtChartAxis$$$$$getOptions$$() {
  return this.$Info$.$Options$
};
D.$JSCompiler_StaticMethods_axisToPlotArea$$ = function $$JSCompiler_StaticMethods_axisToPlotArea$$$($JSCompiler_StaticMethods_axisToPlotArea$self_ret$$81$$, $coord$$24$$, $bRoundResult$$) {
  if("tangential" == $JSCompiler_StaticMethods_axisToPlotArea$self_ret$$81$$.$getOptions$().position) {
    return $coord$$24$$
  }
  if($coord$$24$$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $JSCompiler_StaticMethods_axisToPlotArea$self_ret$$81$$ = $coord$$24$$ - (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($JSCompiler_StaticMethods_axisToPlotArea$self_ret$$81$$);
  return $bRoundResult$$ === D.$JSCompiler_alias_FALSE$$ ? $JSCompiler_StaticMethods_axisToPlotArea$self_ret$$81$$ : window.Math.round($JSCompiler_StaticMethods_axisToPlotArea$self_ret$$81$$)
};
D.$JSCompiler_StaticMethods_plotAreaToAxis$$ = function $$JSCompiler_StaticMethods_plotAreaToAxis$$$($JSCompiler_StaticMethods_plotAreaToAxis$self$$, $coord$$25$$) {
  if("tangential" == $JSCompiler_StaticMethods_plotAreaToAxis$self$$.$getOptions$().position) {
    return $coord$$25$$
  }
  if($coord$$25$$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $ret$$82$$ = $coord$$25$$ + (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($JSCompiler_StaticMethods_plotAreaToAxis$self$$);
  return window.Math.round($ret$$82$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartAxis$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getCoordAt$$($value$$109$$, $bRoundResult$$2$$) {
  return this.$Info$ ? (0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)(this, this.$Info$.$getCoordAt$($value$$109$$), $bRoundResult$$2$$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getBoundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedValueAt$$($coord$$27$$) {
  return this.$Info$ ? this.$Info$.$getBoundedValueAt$((0,D.$JSCompiler_StaticMethods_plotAreaToAxis$$)(this, $coord$$27$$)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getBoundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedCoordAt$$($value$$110$$, $bRoundResult$$3$$) {
  return this.$Info$ ? (0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)(this, this.$Info$.$getBoundedCoordAt$($value$$110$$), $bRoundResult$$3$$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedValueAt$$($coord$$28$$) {
  return this.$Info$ ? this.$Info$.$getUnboundedValueAt$((0,D.$JSCompiler_StaticMethods_plotAreaToAxis$$)(this, $coord$$28$$)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedCoordAt$$($value$$111$$, $bRoundResult$$4$$) {
  return this.$Info$ ? (0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)(this, this.$Info$.$getUnboundedCoordAt$($value$$111$$), $bRoundResult$$4$$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getBaselineCoord$ = function $$JSCompiler_prototypeAlias$$$$getBaselineCoord$$() {
  return this.$Info$ ? (0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)(this, this.$Info$.$getBaselineCoord$()) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getPosition$ = function $$JSCompiler_prototypeAlias$$$$getPosition$$() {
  return this.$__getOptions$().position
};
D.$JSCompiler_StaticMethods_isGroupAxis$$ = function $$JSCompiler_StaticMethods_isGroupAxis$$$($JSCompiler_StaticMethods_isGroupAxis$self$$) {
  return $JSCompiler_StaticMethods_isGroupAxis$self$$.$Info$ instanceof D.$DvtGroupAxisInfo$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartAxis$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getGroupWidth$ = function $$JSCompiler_prototypeAlias$$$$getGroupWidth$$() {
  return(0,D.$JSCompiler_StaticMethods_isGroupAxis$$)(this) ? window.Math.abs(this.$getUnboundedCoordAt$(1) - this.$getUnboundedCoordAt$(0)) : this.$Info$ instanceof D.$DvtTimeAxisInfo$$ ? this.$Info$.$getGroupWidth$() : 0
};
D.$JSCompiler_prototypeAlias$$.$getAxisLine$ = function $$JSCompiler_prototypeAlias$$$$getAxisLine$$($context$$256$$) {
  return this.$Info$ ? this.$Info$.$getAxisLine$($context$$256$$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getMajorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMajorGridLines$$($context$$257$$) {
  return this.$Info$ ? this.$Info$.$getMajorGridLines$($context$$257$$) : []
};
D.$JSCompiler_prototypeAlias$$.$getMinorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMinorGridLines$$($context$$258$$) {
  return this.$Info$ ? this.$Info$.$getMinorGridLines$($context$$258$$) : []
};
D.$JSCompiler_prototypeAlias$$.$getMajorTickCount$ = function $$JSCompiler_prototypeAlias$$$$getMajorTickCount$$() {
  return this.$Info$ ? this.$Info$.$getMajorTickCount$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setMajorTickCount$ = function $$JSCompiler_prototypeAlias$$$$setMajorTickCount$$($count$$25$$) {
  this.$Info$ && this.$Info$.$setMajorTickCount$($count$$25$$)
};
D.$JSCompiler_prototypeAlias$$.$getMinorTickCount$ = function $$JSCompiler_prototypeAlias$$$$getMinorTickCount$$() {
  return this.$Info$ ? this.$Info$.$getMinorTickCount$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setMinorTickCount$ = function $$JSCompiler_prototypeAlias$$$$setMinorTickCount$$($count$$26$$) {
  this.$Info$ && this.$Info$.$setMinorTickCount$($count$$26$$)
};
D.$JSCompiler_prototypeAlias$$.$getMajorIncrement$ = function $$JSCompiler_prototypeAlias$$$$getMajorIncrement$$() {
  return this.$Info$ ? this.$Info$.$getMajorIncrement$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getMinorIncrement$ = function $$JSCompiler_prototypeAlias$$$$getMinorIncrement$$() {
  return this.$Info$ ? this.$Info$.$getMinorIncrement$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getGlobalMin$ = function $$JSCompiler_prototypeAlias$$$$getGlobalMin$$() {
  return this.$Info$ ? this.$Info$.$getGlobalMin$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getGlobalMax$ = function $$JSCompiler_prototypeAlias$$$$getGlobalMax$$() {
  return this.$Info$ ? this.$Info$.$getGlobalMax$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getViewportMin$ = function $$JSCompiler_prototypeAlias$$$$getViewportMin$$() {
  return this.$Info$ ? this.$Info$.$getViewportMin$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getViewportMax$ = function $$JSCompiler_prototypeAlias$$$$getViewportMax$$() {
  return this.$Info$ ? this.$Info$.$getViewportMax$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getDataMin$ = function $$JSCompiler_prototypeAlias$$$$getDataMin$$() {
  return this.$Info$ ? this.$Info$.$getDataMin$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getDataMax$ = function $$JSCompiler_prototypeAlias$$$$getDataMax$$() {
  return this.$Info$ ? this.$Info$.$getDataMax$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getMinimumExtent$ = function $$JSCompiler_prototypeAlias$$$$getMinimumExtent$$() {
  return this.$Info$ ? this.$Info$.$getMinimumExtent$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_isFullViewport$$ = function $$JSCompiler_StaticMethods_isFullViewport$$$($JSCompiler_StaticMethods_isFullViewport$self$$) {
  return $JSCompiler_StaticMethods_isFullViewport$self$$.$getViewportMin$() == $JSCompiler_StaticMethods_isFullViewport$self$$.$getGlobalMin$() && $JSCompiler_StaticMethods_isFullViewport$self$$.$getViewportMax$() == $JSCompiler_StaticMethods_isFullViewport$self$$.$getGlobalMax$()
};
D.$JSCompiler_StaticMethods_getLeftOverflow$$ = function $$JSCompiler_StaticMethods_getLeftOverflow$$$($JSCompiler_StaticMethods_getLeftOverflow$self$$) {
  return(0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_getLeftOverflow$self$$.$_context$) ? $JSCompiler_StaticMethods_getLeftOverflow$self$$.$Info$ ? $JSCompiler_StaticMethods_getLeftOverflow$self$$.$Info$.$getEndOverflow$() : D.$JSCompiler_alias_NULL$$ : $JSCompiler_StaticMethods_getLeftOverflow$self$$.$Info$ ? $JSCompiler_StaticMethods_getLeftOverflow$self$$.$Info$.$getStartOverflow$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_getRightOverflow$$ = function $$JSCompiler_StaticMethods_getRightOverflow$$$($JSCompiler_StaticMethods_getRightOverflow$self$$) {
  return(0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_getRightOverflow$self$$.$_context$) ? $JSCompiler_StaticMethods_getRightOverflow$self$$.$Info$ ? $JSCompiler_StaticMethods_getRightOverflow$self$$.$Info$.$getStartOverflow$() : D.$JSCompiler_alias_NULL$$ : $JSCompiler_StaticMethods_getRightOverflow$self$$.$Info$ ? $JSCompiler_StaticMethods_getRightOverflow$self$$.$Info$.$getEndOverflow$() : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartBar$$ = function $$DvtChartBar$$$($context$$254$$, $bHoriz$$4$$, $bStacked$$, $axisCoord$$1$$, $baselineCoord$$4$$, $endCoord$$3$$, $x1$$18$$, $x2$$17$$) {
  this.Init($context$$254$$);
  this.$_bHoriz$ = $bHoriz$$4$$;
  this.$_bStacked$ = $bStacked$$;
  this.$_axisCoord$ = $axisCoord$$1$$;
  this.$_setBarCoords$($baselineCoord$$4$$, $endCoord$$3$$, $x1$$18$$, $x2$$17$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartBar$$, D.$DvtPolygon$$, "DvtChartBar");
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartBar$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setStyleProperties$ = function $$JSCompiler_prototypeAlias$$$$setStyleProperties$$($fill$$37$$, $stroke$$61$$, $dataColor$$6$$, $innerColor$$5$$, $outerColor$$5$$) {
  this.$_fill$ = $fill$$37$$;
  this.$_stroke$ = $stroke$$61$$;
  this.$_hoverColor$ = D.$DvtSelectionEffectUtils$$.$getHoverBorderColor$($dataColor$$6$$);
  this.$_innerColor$ = $innerColor$$5$$;
  this.$_outerColor$ = $outerColor$$5$$;
  this.$setFill$($fill$$37$$);
  $stroke$$61$$ && this.$setStroke$($stroke$$61$$)
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$IsShowingHoverEffect$ = D.$JSCompiler_alias_TRUE$$;
  (0,D.$JSCompiler_StaticMethods__showNestedBorders$$)(this, this.$_hoverColor$, this.$isSelected$() ? this.$_innerColor$ : D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$IsShowingHoverEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$isSelected$() ? (0,D.$JSCompiler_StaticMethods__showNestedBorders$$)(this, this.$_outerColor$, this.$_innerColor$) : (0,D.$JSCompiler_StaticMethods__showNestedBorders$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$15$$) {
  this.$IsSelected$ != $selected$$15$$ && (this.$IsSelected$ = $selected$$15$$, this.$isSelected$() ? (0,D.$JSCompiler_StaticMethods__showNestedBorders$$)(this, this.$isHoverEffectShown$() ? this.$_hoverColor$ : this.$_outerColor$, this.$_innerColor$) : (0,D.$JSCompiler_StaticMethods__showNestedBorders$$)(this, this.$isHoverEffectShown$() ? this.$_hoverColor$ : D.$JSCompiler_alias_NULL$$))
};
D.$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getAnimationParams$$() {
  return[this.$_baselineCoord$, this.$_endCoord$, this.$_x1$, this.$_x2$]
};
D.$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($params$$45$$, $indicator$$4$$) {
  this.$_setBarCoords$($params$$45$$[0], $params$$45$$[1], $params$$45$$[2], $params$$45$$[3]);
  if($indicator$$4$$) {
    var $indicatorPosition_x$$inline_5242$$, $widthCoord$$inline_5241_y$$inline_5243$$ = (this.$_x1$ + this.$_x2$) / 2, $lengthCoord$$inline_5245_midLength$$inline_5244$$ = this.$_bStacked$ ? (this.$_endCoord$ + this.$_baselineCoord$) / 2 : this.$_endCoord$ >= this.$_baselineCoord$ ? this.$_endCoord$ + 8 : this.$_endCoord$ - 8;
    $indicatorPosition_x$$inline_5242$$ = this.$_bHoriz$ ? $lengthCoord$$inline_5245_midLength$$inline_5244$$ : $widthCoord$$inline_5241_y$$inline_5243$$;
    $widthCoord$$inline_5241_y$$inline_5243$$ = this.$_bHoriz$ ? $widthCoord$$inline_5241_y$$inline_5243$$ : $lengthCoord$$inline_5245_midLength$$inline_5244$$;
    $indicatorPosition_x$$inline_5242$$ = new D.$DvtPoint$$($indicatorPosition_x$$inline_5242$$, $widthCoord$$inline_5241_y$$inline_5243$$);
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($indicator$$4$$, $indicatorPosition_x$$inline_5242$$.x, $indicatorPosition_x$$inline_5242$$.y);
    $indicator$$4$$.$setAlpha$(1);
    $indicator$$4$$.getParent().$addChild$($indicator$$4$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$getDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDisplayAnimation$$($duration$$38_nodePlayable$$18$$) {
  var $endState$$11$$ = this.$getAnimationParams$();
  this.$setAnimationParams$([this.$_axisCoord$, this.$_axisCoord$, this.$_x1$, this.$_x2$]);
  $duration$$38_nodePlayable$$18$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, $duration$$38_nodePlayable$$18$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$38_nodePlayable$$18$$.$_animator$, "typeNumberArray", this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$11$$);
  return $duration$$38_nodePlayable$$18$$
};
D.$JSCompiler_prototypeAlias$$.$getDeleteAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDeleteAnimation$$($duration$$39_nodePlayable$$19$$) {
  var $endState$$12$$ = [this.$_baselineCoord$, this.$_baselineCoord$, this.$_x1$, this.$_x2$];
  $duration$$39_nodePlayable$$19$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, $duration$$39_nodePlayable$$19$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$39_nodePlayable$$19$$.$_animator$, "typeNumberArray", this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$12$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$39_nodePlayable$$19$$.$_animator$, "typeNumber", this, this.$getAlpha$, this.$setAlpha$, 0);
  return $duration$$39_nodePlayable$$19$$
};
D.$JSCompiler_prototypeAlias$$.$getInsertAnimation$ = function $$JSCompiler_prototypeAlias$$$$getInsertAnimation$$($duration$$40_nodePlayable$$20$$) {
  this.$setAlpha$(0);
  $duration$$40_nodePlayable$$20$$ = this.$getDisplayAnimation$($duration$$40_nodePlayable$$20$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$40_nodePlayable$$20$$.$_animator$, "typeNumber", this, this.$getAlpha$, this.$setAlpha$, 1);
  return $duration$$40_nodePlayable$$20$$
};
D.$JSCompiler_prototypeAlias$$.$_setBarCoords$ = function $$JSCompiler_prototypeAlias$$$$_setBarCoords$$($baselineCoord$$5$$, $endCoord$$4$$, $x1$$19$$, $x2$$18$$) {
  this.$_baselineCoord$ = $baselineCoord$$5$$;
  this.$_endCoord$ = $endCoord$$4$$;
  this.$_x1$ = $x1$$19$$;
  this.$_x2$ = $x2$$18$$;
  this.$setPoints$((0,D.$JSCompiler_StaticMethods__createPointsArray$$)(this));
  this.$_outerChild$ && this.$_outerChild$.$setPoints$((0,D.$JSCompiler_StaticMethods__createPointsArray$$)(this, 2));
  this.$_innerChild$ && this.$_innerChild$.$setPoints$((0,D.$JSCompiler_StaticMethods__createPointsArray$$)(this, 3.5))
};
D.$JSCompiler_StaticMethods__createPointsArray$$ = function $$JSCompiler_StaticMethods__createPointsArray$$$($JSCompiler_StaticMethods__createPointsArray$self$$, $inset$$) {
  var $baselineCoord$$6$$ = $JSCompiler_StaticMethods__createPointsArray$self$$.$_baselineCoord$, $endCoord$$5$$ = $JSCompiler_StaticMethods__createPointsArray$self$$.$_endCoord$, $x1$$20$$ = $JSCompiler_StaticMethods__createPointsArray$self$$.$_x1$, $x2$$19$$ = $JSCompiler_StaticMethods__createPointsArray$self$$.$_x2$;
  if(0 < $inset$$) {
    if(window.Math.abs($x1$$20$$ - $x2$$19$$) < 2 * $inset$$ || window.Math.abs($baselineCoord$$6$$ - $endCoord$$5$$) < 2 * $inset$$) {
      return[]
    }
    $x1$$20$$ += $inset$$;
    $x2$$19$$ -= $inset$$;
    $endCoord$$5$$ < $baselineCoord$$6$$ ? ($baselineCoord$$6$$ -= $inset$$, $endCoord$$5$$ += $inset$$) : ($baselineCoord$$6$$ += $inset$$, $endCoord$$5$$ -= $inset$$)
  }
  return $JSCompiler_StaticMethods__createPointsArray$self$$.$_bHoriz$ ? [$endCoord$$5$$, $x1$$20$$, $endCoord$$5$$, $x2$$19$$, $baselineCoord$$6$$, $x2$$19$$, $baselineCoord$$6$$, $x1$$20$$] : [$x1$$20$$, $endCoord$$5$$, $x2$$19$$, $endCoord$$5$$, $x2$$19$$, $baselineCoord$$6$$, $x1$$20$$, $baselineCoord$$6$$]
};
D.$JSCompiler_StaticMethods__showNestedBorders$$ = function $$JSCompiler_StaticMethods__showNestedBorders$$$($JSCompiler_StaticMethods__showNestedBorders$self$$, $outerBorderColor$$, $innerBorderColor$$) {
  $JSCompiler_StaticMethods__showNestedBorders$self$$.$_outerChild$ || ($JSCompiler_StaticMethods__showNestedBorders$self$$.$_outerChild$ = new D.$DvtPolygon$$($JSCompiler_StaticMethods__showNestedBorders$self$$.$_context$, (0,D.$JSCompiler_StaticMethods__createPointsArray$$)($JSCompiler_StaticMethods__showNestedBorders$self$$, 2)), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($JSCompiler_StaticMethods__showNestedBorders$self$$.$_outerChild$), $JSCompiler_StaticMethods__showNestedBorders$self$$.$_outerChild$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$), 
  $JSCompiler_StaticMethods__showNestedBorders$self$$.$addChild$($JSCompiler_StaticMethods__showNestedBorders$self$$.$_outerChild$), $JSCompiler_StaticMethods__showNestedBorders$self$$.$_innerChild$ = new D.$DvtPolygon$$($JSCompiler_StaticMethods__showNestedBorders$self$$.$_context$, (0,D.$JSCompiler_StaticMethods__createPointsArray$$)($JSCompiler_StaticMethods__showNestedBorders$self$$, 3.5)), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($JSCompiler_StaticMethods__showNestedBorders$self$$.$_innerChild$), 
  $JSCompiler_StaticMethods__showNestedBorders$self$$.$_innerChild$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods__showNestedBorders$self$$.$addChild$($JSCompiler_StaticMethods__showNestedBorders$self$$.$_innerChild$));
  $innerBorderColor$$ ? ($JSCompiler_StaticMethods__showNestedBorders$self$$.$setSolidFill$($outerBorderColor$$), $JSCompiler_StaticMethods__showNestedBorders$self$$.$setStroke$(D.$JSCompiler_alias_NULL$$), $JSCompiler_StaticMethods__showNestedBorders$self$$.$_outerChild$.$setSolidFill$($innerBorderColor$$), $JSCompiler_StaticMethods__showNestedBorders$self$$.$_innerChild$.$setFill$($JSCompiler_StaticMethods__showNestedBorders$self$$.$_fill$)) : ($outerBorderColor$$ ? ($JSCompiler_StaticMethods__showNestedBorders$self$$.$setSolidFill$($outerBorderColor$$), 
  $JSCompiler_StaticMethods__showNestedBorders$self$$.$setStroke$(D.$JSCompiler_alias_NULL$$), $JSCompiler_StaticMethods__showNestedBorders$self$$.$_outerChild$.$setFill$($JSCompiler_StaticMethods__showNestedBorders$self$$.$_fill$)) : ($JSCompiler_StaticMethods__showNestedBorders$self$$.$setFill$($JSCompiler_StaticMethods__showNestedBorders$self$$.$_fill$), $JSCompiler_StaticMethods__showNestedBorders$self$$.$setStroke$($JSCompiler_StaticMethods__showNestedBorders$self$$.$_stroke$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($JSCompiler_StaticMethods__showNestedBorders$self$$.$_outerChild$)), 
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($JSCompiler_StaticMethods__showNestedBorders$self$$.$_innerChild$))
};
D.$DvtChartBar$$.prototype.$getBoundingBox$ = function $$DvtChartBar$$$$$getBoundingBox$$() {
  var $x$$148$$ = window.Math.min(this.$_x2$, this.$_x1$), $y$$123$$ = window.Math.min(this.$_endCoord$, this.$_baselineCoord$), $w$$25$$ = window.Math.abs(this.$_x2$ - this.$_x1$), $h$$16$$ = window.Math.abs(this.$_endCoord$ - this.$_baselineCoord$);
  return this.$_bHoriz$ ? new D.$DvtRectangle$$($y$$123$$, $x$$148$$, $h$$16$$, $w$$25$$) : new D.$DvtRectangle$$($x$$148$$, $y$$123$$, $w$$25$$, $h$$16$$)
};
D.$DvtChartBar$$.prototype.$getDimensionsSelf$ = function $$DvtChartBar$$$$$getDimensionsSelf$$($targetCoordinateSpace$$8$$) {
  return(0,D.$JSCompiler_StaticMethods_ConvertCoordSpaceRect$$)(this, this.$getBoundingBox$(), $targetCoordinateSpace$$8$$)
};
D.$DvtChartCoord$$ = function $$DvtChartCoord$$$($x$$146$$, $y1$$18$$, $y2$$16$$, $groupIndex$$8$$, $group$$7$$, $filtered$$) {
  this.x = $x$$146$$;
  this.$y1$ = $y1$$18$$;
  this.$y2$ = $y2$$16$$;
  this.$groupIndex$ = $groupIndex$$8$$;
  this.group = $group$$7$$;
  this.$filtered$ = $filtered$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartCoord$$, D.$DvtObj$$, "DvtChartCoord");
D.$JSCompiler_StaticMethods_isUpstep$$ = function $$JSCompiler_StaticMethods_isUpstep$$$($JSCompiler_StaticMethods_isUpstep$self$$, $baseline$$2$$) {
  return window.Math.abs($JSCompiler_StaticMethods_isUpstep$self$$.$y2$ - $baseline$$2$$) > window.Math.abs($JSCompiler_StaticMethods_isUpstep$self$$.$y1$ - $baseline$$2$$)
};
D.$DvtChartCoord$$.prototype.clone = function $$DvtChartCoord$$$$clone$() {
  return new D.$DvtChartCoord$$(this.x, this.$y1$, this.$y2$, this.$groupIndex$, this.group, this.$filtered$)
};
D.$DvtChartLineArea$$ = function $$DvtChartLineArea$$$($chart$$29$$, $bArea$$, $availSpace$$26$$, $baseline$$3$$, $fill$$38$$, $stroke$$62$$, $type$$103$$, $arCoord$$, $baseType$$, $arBaseCoord$$) {
  this.Init($chart$$29$$.$_context$);
  this.$_chart$ = $chart$$29$$;
  this.$_bArea$ = $bArea$$;
  this.$_availSpace$ = $availSpace$$26$$;
  this.$_baseline$ = $baseline$$3$$;
  this.$_fill$ = $fill$$38$$;
  this.$_stroke$ = $stroke$$62$$;
  this.$_type$ = $type$$103$$;
  this.$_baseType$ = $baseType$$ ? $baseType$$ : $type$$103$$;
  this.$_indicatorMap$ = {};
  this.$setCoords$($arCoord$$, $arBaseCoord$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartLineArea$$, D.$DvtContainer$$, "DvtChartLineArea");
D.$DvtChartLineArea$$.prototype.$setCoords$ = function $$DvtChartLineArea$$$$$setCoords$$($arCoord$$1$$, $arBaseCoord$$1$$) {
  this.$_arCoord$ = $arCoord$$1$$;
  $arBaseCoord$$1$$ && (this.$_arBaseCoord$ = $arBaseCoord$$1$$);
  this.$removeChildren$();
  this.$_bArea$ ? this.$_renderAreas$() : this.$_renderLines$();
  for(var $indicator$$inline_5251_indicatorObj$$inline_5250$$, $pos$$inline_5252_y$$inline_5253$$, $coord$$inline_5254$$, $i$$inline_5255$$ = 0;$i$$inline_5255$$ < this.$_arCoord$.length;$i$$inline_5255$$++) {
    if($coord$$inline_5254$$ = this.$_arCoord$[$i$$inline_5255$$], ($indicator$$inline_5251_indicatorObj$$inline_5250$$ = this.$_indicatorMap$[$coord$$inline_5254$$.$groupIndex$]) && $indicator$$inline_5251_indicatorObj$$inline_5250$$.$indicator$) {
      $pos$$inline_5252_y$$inline_5253$$ = ((0,D.$JSCompiler_StaticMethods_isUpstep$$)($coord$$inline_5254$$, this.$_baseline$) ? $coord$$inline_5254$$.$y2$ : $coord$$inline_5254$$.$y1$) + 8 * ($indicator$$inline_5251_indicatorObj$$inline_5250$$.direction == D.$DvtDCChartUtils$$.$DIR_UP$ ? -1 : 1), $pos$$inline_5252_y$$inline_5253$$ = (0,D.$JSCompiler_StaticMethods__convertCoord$$)(this, new D.$DvtPoint$$($coord$$inline_5254$$.x, $pos$$inline_5252_y$$inline_5253$$)), $indicator$$inline_5251_indicatorObj$$inline_5250$$ = 
      $indicator$$inline_5251_indicatorObj$$inline_5250$$.$indicator$, (0,D.$JSCompiler_StaticMethods_setTranslate$$)($indicator$$inline_5251_indicatorObj$$inline_5250$$, $pos$$inline_5252_y$$inline_5253$$.x, $pos$$inline_5252_y$$inline_5253$$.y), $indicator$$inline_5251_indicatorObj$$inline_5250$$.$setAlpha$(1), $indicator$$inline_5251_indicatorObj$$inline_5250$$.getParent().$addChild$($indicator$$inline_5251_indicatorObj$$inline_5250$$)
    }
  }
};
D.$DvtChartLineArea$$.prototype.$isArea$ = (0,D.$JSCompiler_get$$)("$_bArea$");
D.$JSCompiler_StaticMethods__getPointArrays$$ = function $$JSCompiler_StaticMethods__getPointArrays$$$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$, $coords$$13_coords$$inline_5257$$, $type$$104$$) {
  var $pointsArrays$$ = [], $points$$32$$ = [];
  $pointsArrays$$.push($points$$32$$);
  for(var $isPolar$$1_pointCoords$$inline_5258$$ = [], $i$$inline_5259_isCentered$$ = 0;$i$$inline_5259_isCentered$$ < $coords$$13_coords$$inline_5257$$.length;$i$$inline_5259_isCentered$$++) {
    if(!$coords$$13_coords$$inline_5257$$[$i$$inline_5259_isCentered$$].$filtered$) {
      if($coords$$13_coords$$inline_5257$$[$i$$inline_5259_isCentered$$].x == D.$JSCompiler_alias_NULL$$) {
        $isPolar$$1_pointCoords$$inline_5258$$.push(D.$JSCompiler_alias_NULL$$)
      }else {
        if($isPolar$$1_pointCoords$$inline_5258$$.push(new D.$DvtPoint$$($coords$$13_coords$$inline_5257$$[$i$$inline_5259_isCentered$$].x, $coords$$13_coords$$inline_5257$$[$i$$inline_5259_isCentered$$].$y1$)), $coords$$13_coords$$inline_5257$$[$i$$inline_5259_isCentered$$].$y1$ != $coords$$13_coords$$inline_5257$$[$i$$inline_5259_isCentered$$].$y2$) {
          var $isUncentered_p2$$inline_5260$$ = new D.$DvtPoint$$($coords$$13_coords$$inline_5257$$[$i$$inline_5259_isCentered$$].x, $coords$$13_coords$$inline_5257$$[$i$$inline_5259_isCentered$$].$y2$);
          $isUncentered_p2$$inline_5260$$.$_isY2$ = D.$JSCompiler_alias_TRUE$$;
          $isPolar$$1_pointCoords$$inline_5258$$.push($isUncentered_p2$$inline_5260$$)
        }
      }
    }
  }
  $coords$$13_coords$$inline_5257$$ = $isPolar$$1_pointCoords$$inline_5258$$;
  var $isPolar$$1_pointCoords$$inline_5258$$ = D.$DvtChartTypeUtils$$.$isPolar$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_chart$), $i$$inline_5259_isCentered$$ = "centeredStepped" == $type$$104$$ || "centeredSegmented" == $type$$104$$, $isUncentered_p2$$inline_5260$$ = "stepped" == $type$$104$$ || "segmented" == $type$$104$$, $groupWidth$$ = $JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_chart$.$xAxis$.$getGroupWidth$(), $dir$$25$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_context$) && 
  D.$DvtChartTypeUtils$$.$isVertical$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_chart$) ? -1 : 1, $lastCoord$$;
  $isPolar$$1_pointCoords$$inline_5258$$ && ($lastCoord$$ = $coords$$13_coords$$inline_5257$$[$coords$$13_coords$$inline_5257$$.length - 1]);
  for(var $coord$$20$$, $xCoord$$1$$, $isY2$$, $inBump$$ = D.$JSCompiler_alias_FALSE$$, $i$$433$$ = 0;$i$$433$$ < $coords$$13_coords$$inline_5257$$.length;$i$$433$$++) {
    if($coords$$13_coords$$inline_5257$$[$i$$433$$] == D.$JSCompiler_alias_NULL$$) {
      D.$DvtChartDataUtils$$.$hasMixedFrequency$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_chart$) || ($points$$32$$ = [], $pointsArrays$$.push($points$$32$$), $lastCoord$$ = D.$JSCompiler_alias_NULL$$)
    }else {
      $coord$$20$$ = $coords$$13_coords$$inline_5257$$[$i$$433$$];
      $isY2$$ = $coords$$13_coords$$inline_5257$$[$i$$433$$].$_isY2$;
      $xCoord$$1$$ = $i$$inline_5259_isCentered$$ ? $coord$$20$$.x - $groupWidth$$ / 2 * $dir$$25$$ : $coord$$20$$.x;
      if($isY2$$) {
        if($inBump$$ && ($isUncentered_p2$$inline_5260$$ || $i$$inline_5259_isCentered$$)) {
          $xCoord$$1$$ += $groupWidth$$ * $dir$$25$$
        }
        $inBump$$ = !$inBump$$
      }
      "curved" == $type$$104$$ && $isY2$$ && $points$$32$$.push(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$);
      $lastCoord$$ && ($isUncentered_p2$$inline_5260$$ || $i$$inline_5259_isCentered$$) && (0,D.$JSCompiler_StaticMethods__pushCoord$$)($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$, $points$$32$$, $xCoord$$1$$, $lastCoord$$.y);
      if(!$JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_bArea$ && ("segmented" == $type$$104$$ || "centeredSegmented" == $type$$104$$)) {
        $points$$32$$ = [], $pointsArrays$$.push($points$$32$$)
      }
      (0,D.$JSCompiler_StaticMethods__pushCoord$$)($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$, $points$$32$$, $xCoord$$1$$, $coord$$20$$.y);
      $lastCoord$$ = $coord$$20$$
    }
  }
  !$isPolar$$1_pointCoords$$inline_5258$$ && (!$isY2$$ && $lastCoord$$) && ($i$$inline_5259_isCentered$$ ? (0,D.$JSCompiler_StaticMethods__pushCoord$$)($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$, $points$$32$$, $lastCoord$$.x + 0.5 * $groupWidth$$ * $dir$$25$$, $lastCoord$$.y) : $isUncentered_p2$$inline_5260$$ && (0,D.$JSCompiler_StaticMethods__pushCoord$$)($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$, $points$$32$$, $lastCoord$$.x + $groupWidth$$ * $dir$$25$$, $lastCoord$$.y));
  D.$DvtChartTypeUtils$$.$isPolar$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_chart$) && 1 < $pointsArrays$$.length && ($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$ = $pointsArrays$$.pop(), $pointsArrays$$[0] = $JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.concat($pointsArrays$$[0]));
  return $pointsArrays$$
};
D.$JSCompiler_StaticMethods__convertCoord$$ = function $$JSCompiler_StaticMethods__convertCoord$$$($JSCompiler_StaticMethods__convertCoord$self$$, $coord$$21$$) {
  if(D.$DvtChartTypeUtils$$.$isPolar$($JSCompiler_StaticMethods__convertCoord$self$$.$_chart$)) {
    var $cartesian$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($coord$$21$$.y, $coord$$21$$.x, $JSCompiler_StaticMethods__convertCoord$self$$.$_availSpace$);
    return new D.$DvtPoint$$($cartesian$$.x, $cartesian$$.y)
  }
  return D.$DvtChartTypeUtils$$.$isHorizontal$($JSCompiler_StaticMethods__convertCoord$self$$.$_chart$) ? new D.$DvtPoint$$($coord$$21$$.y, $coord$$21$$.x) : new D.$DvtPoint$$($coord$$21$$.x, $coord$$21$$.y)
};
D.$JSCompiler_StaticMethods__pushCoord$$ = function $$JSCompiler_StaticMethods__pushCoord$$$($JSCompiler_StaticMethods__pushCoord$self_coord$$22$$, $pointArray$$, $x$$149$$, $y$$124$$) {
  $JSCompiler_StaticMethods__pushCoord$self_coord$$22$$ = (0,D.$JSCompiler_StaticMethods__convertCoord$$)($JSCompiler_StaticMethods__pushCoord$self_coord$$22$$, new D.$DvtPoint$$($x$$149$$, $y$$124$$));
  $pointArray$$.push(window.Math.round($JSCompiler_StaticMethods__pushCoord$self_coord$$22$$.x), window.Math.round($JSCompiler_StaticMethods__pushCoord$self_coord$$22$$.y))
};
D.$JSCompiler_StaticMethods__isRing$$ = function $$JSCompiler_StaticMethods__isRing$$$($JSCompiler_StaticMethods__isRing$self$$) {
  if(!D.$DvtChartTypeUtils$$.$isPolar$($JSCompiler_StaticMethods__isRing$self$$.$_chart$) || !D.$DvtChartAxisUtils$$.$hasGroupAxis$($JSCompiler_StaticMethods__isRing$self$$.$_chart$) || $JSCompiler_StaticMethods__isRing$self$$.$_arCoord$.length < D.$DvtChartDataUtils$$.$getGroupCount$($JSCompiler_StaticMethods__isRing$self$$.$_chart$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $i$$434$$ = 0;$i$$434$$ < $JSCompiler_StaticMethods__isRing$self$$.$_arCoord$.length;$i$$434$$++) {
    if($JSCompiler_StaticMethods__isRing$self$$.$_arCoord$[$i$$434$$].x == D.$JSCompiler_alias_NULL$$) {
      return D.$JSCompiler_alias_FALSE$$
    }
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_StaticMethods__getSplineType$$ = function $$JSCompiler_StaticMethods__getSplineType$$$($JSCompiler_StaticMethods__getSplineType$self$$) {
  return D.$DvtChartTypeUtils$$.$isScatterBubble$($JSCompiler_StaticMethods__getSplineType$self$$.$_chart$) ? window.DvtPathUtils.$SPLINE_TYPE_CARDINAL$ : D.$DvtChartTypeUtils$$.$isPolar$($JSCompiler_StaticMethods__getSplineType$self$$.$_chart$) ? (0,D.$JSCompiler_StaticMethods__isRing$$)($JSCompiler_StaticMethods__getSplineType$self$$) ? window.DvtPathUtils.$SPLINE_TYPE_CARDINAL_CLOSED$ : window.DvtPathUtils.$SPLINE_TYPE_CARDINAL$ : D.$DvtChartTypeUtils$$.$isHorizontal$($JSCompiler_StaticMethods__getSplineType$self$$.$_chart$) ? 
  window.DvtPathUtils.$SPLINE_TYPE_MONOTONE_HORIZONTAL$ : window.DvtPathUtils.$SPLINE_TYPE_MONOTONE_VERTICAL$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartLineArea$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_renderLines$ = function $$JSCompiler_prototypeAlias$$$$_renderLines$$() {
  for(var $pointArrays$$ = (0,D.$JSCompiler_StaticMethods__getPointArrays$$)(this, this.$_arCoord$, this.$_type$), $line$$13_points$$33$$, $i$$435$$ = 0;$i$$435$$ < $pointArrays$$.length;$i$$435$$++) {
    if(($line$$13_points$$33$$ = $pointArrays$$[$i$$435$$]) && 1 < $line$$13_points$$33$$.length) {
      "curved" == this.$_type$ ? (window.cmd = (0,D.$DvtChartLineArea$_getCurvedPathCommands$$)($line$$13_points$$33$$, D.$JSCompiler_alias_FALSE$$, (0,D.$JSCompiler_StaticMethods__getSplineType$$)(this)), $line$$13_points$$33$$ = new D.$DvtPath$$(this.$_context$, window.cmd), $line$$13_points$$33$$.$setFill$(D.$JSCompiler_alias_NULL$$)) : (0,D.$JSCompiler_StaticMethods__isRing$$)(this) ? ($line$$13_points$$33$$ = new D.$DvtPolygon$$(this.$_context$, $line$$13_points$$33$$), $line$$13_points$$33$$.$setFill$(D.$JSCompiler_alias_NULL$$)) : 
      $line$$13_points$$33$$ = new D.$DvtPolyline$$(this.$_context$, $line$$13_points$$33$$), $line$$13_points$$33$$.$setStroke$(this.$_stroke$), this.$addChild$($line$$13_points$$33$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$_renderAreas$ = function $$JSCompiler_prototypeAlias$$$$_renderAreas$$() {
  var $highArrays$$ = (0,D.$JSCompiler_StaticMethods__getPointArrays$$)(this, this.$_arCoord$, this.$_type$), $lowArrays$$ = (0,D.$JSCompiler_StaticMethods__getPointArrays$$)(this, this.$_arBaseCoord$, this.$_baseType$);
  if($highArrays$$.length == $lowArrays$$.length) {
    for(var $area$$2_lowCurved_points$$34$$, $i$$436$$ = 0;$i$$436$$ < $highArrays$$.length;$i$$436$$++) {
      var $cmd$$5_highArray$$ = $highArrays$$[$i$$436$$], $lowArray_splineType$$ = $lowArrays$$[$i$$436$$];
      if(!(2 > $cmd$$5_highArray$$.length)) {
        var $highCurved$$ = "curved" == this.$_type$;
        $area$$2_lowCurved_points$$34$$ = "curved" == this.$_baseType$;
        (0,D.$JSCompiler_StaticMethods__isRing$$)(this) && ($highCurved$$ || $cmd$$5_highArray$$.push($cmd$$5_highArray$$[0], $cmd$$5_highArray$$[1]), 2 <= $lowArray_splineType$$.length && !$area$$2_lowCurved_points$$34$$ && $lowArray_splineType$$.push($lowArray_splineType$$[0], $lowArray_splineType$$[1]));
        for(var $revLowArray$$ = [], $j$$71$$ = 0;$j$$71$$ < $lowArray_splineType$$.length;$j$$71$$ += 2) {
          $revLowArray$$.unshift($lowArray_splineType$$[$j$$71$$], $lowArray_splineType$$[$j$$71$$ + 1])
        }
        $highCurved$$ || $area$$2_lowCurved_points$$34$$ ? ($lowArray_splineType$$ = (0,D.$JSCompiler_StaticMethods__getSplineType$$)(this), $cmd$$5_highArray$$ = $highCurved$$ ? (0,D.$DvtChartLineArea$_getCurvedPathCommands$$)($cmd$$5_highArray$$, D.$JSCompiler_alias_FALSE$$, $lowArray_splineType$$) : window.DvtPathUtils.$polyline$($cmd$$5_highArray$$, D.$JSCompiler_alias_FALSE$$), $cmd$$5_highArray$$ += $area$$2_lowCurved_points$$34$$ ? (0,D.$DvtChartLineArea$_getCurvedPathCommands$$)($revLowArray$$, 
        D.$JSCompiler_alias_TRUE$$, $lowArray_splineType$$) : window.DvtPathUtils.$polyline$($revLowArray$$, D.$JSCompiler_alias_TRUE$$), $cmd$$5_highArray$$ += window.DvtPathUtils.closePath(), $area$$2_lowCurved_points$$34$$ = new D.$DvtPath$$(this.$_context$, $cmd$$5_highArray$$)) : ($area$$2_lowCurved_points$$34$$ = $revLowArray$$.concat($cmd$$5_highArray$$), $area$$2_lowCurved_points$$34$$ = new D.$DvtPolygon$$(this.$_context$, $area$$2_lowCurved_points$$34$$));
        $area$$2_lowCurved_points$$34$$.$setFill$(this.$_fill$);
        this.$_stroke$ && $area$$2_lowCurved_points$$34$$.$setStroke$(this.$_stroke$);
        this.$addChild$($area$$2_lowCurved_points$$34$$)
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getAnimationParams$$($other$$4$$) {
  return(0,D.$DvtChartLineArea$_coordsToAnimationParams$$)(this.$_arCoord$, $other$$4$$ ? $other$$4$$.$_arCoord$ : D.$JSCompiler_alias_NULL$$, this.$_baseline$)
};
D.$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($coords$$14_params$$46$$) {
  $coords$$14_params$$46$$ = (0,D.$DvtChartLineArea$_animationParamsToCoords$$)($coords$$14_params$$46$$);
  this.$setCoords$($coords$$14_params$$46$$)
};
D.$JSCompiler_prototypeAlias$$.$getBaseAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getBaseAnimationParams$$($other$$5$$) {
  return(0,D.$DvtChartLineArea$_coordsToAnimationParams$$)(this.$_arBaseCoord$, $other$$5$$ ? $other$$5$$.$_arBaseCoord$ : D.$JSCompiler_alias_NULL$$, this.$_baseline$)
};
D.$JSCompiler_prototypeAlias$$.$setBaseAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setBaseAnimationParams$$($params$$47$$) {
  this.$_arBaseCoord$ = (0,D.$DvtChartLineArea$_animationParamsToCoords$$)($params$$47$$)
};
D.$JSCompiler_StaticMethods_getCommonGroupIndices$$ = function $$JSCompiler_StaticMethods_getCommonGroupIndices$$$($JSCompiler_StaticMethods_getCommonGroupIndices$self$$, $other$$6$$) {
  for(var $indices$$9$$ = [], $i$$438$$ = 0;$i$$438$$ < $JSCompiler_StaticMethods_getCommonGroupIndices$self$$.$_arCoord$.length;$i$$438$$++) {
    if(!($JSCompiler_StaticMethods_getCommonGroupIndices$self$$.$_arCoord$[$i$$438$$].$filtered$ || $JSCompiler_StaticMethods_getCommonGroupIndices$self$$.$_arCoord$[$i$$438$$].x == D.$JSCompiler_alias_NULL$$)) {
      for(var $j$$72$$ = 0;$j$$72$$ < $other$$6$$.$_arCoord$.length;$j$$72$$++) {
        if(!($other$$6$$.$_arCoord$[$j$$72$$].$filtered$ || $other$$6$$.$_arCoord$[$j$$72$$].x == D.$JSCompiler_alias_NULL$$) && $JSCompiler_StaticMethods_getCommonGroupIndices$self$$.$_arCoord$[$i$$438$$].group == $other$$6$$.$_arCoord$[$j$$72$$].group) {
          $indices$$9$$.push($JSCompiler_StaticMethods_getCommonGroupIndices$self$$.$_arCoord$[$i$$438$$].$groupIndex$);
          break
        }
      }
    }
  }
  return $indices$$9$$
};
D.$DvtChartLineArea$_coordsToAnimationParams$$ = function $$DvtChartLineArea$_coordsToAnimationParams$$$($coords$$16$$, $otherCoords_otherGroups$$, $baseline$$4_params$$48$$) {
  if($otherCoords_otherGroups$$ && 0 < $otherCoords_otherGroups$$.length) {
    if($coords$$16$$ && 0 < $coords$$16$$.length) {
      $coords$$16$$ = $coords$$16$$.slice(0);
      $otherCoords_otherGroups$$ = (0,D.$DvtChartLineArea$_coordsToGroups$$)($otherCoords_otherGroups$$);
      for(var $groups$$1$$ = (0,D.$DvtChartLineArea$_coordsToGroups$$)($coords$$16$$), $idx$$8$$ = $coords$$16$$.length, $dummyCoord_group$$8_groupIdx$$, $g$$3_i$$440$$ = $otherCoords_otherGroups$$.length - 1;0 <= $g$$3_i$$440$$;$g$$3_i$$440$$--) {
        if($dummyCoord_group$$8_groupIdx$$ = $otherCoords_otherGroups$$[$g$$3_i$$440$$], $dummyCoord_group$$8_groupIdx$$ = $groups$$1$$.indexOf($dummyCoord_group$$8_groupIdx$$), -1 == $dummyCoord_group$$8_groupIdx$$) {
          if(0 == $idx$$8$$) {
            $dummyCoord_group$$8_groupIdx$$ = $coords$$16$$[0].clone();
            $coords$$16$$[0] = $coords$$16$$[0].clone();
            var $startCoord$$inline_5262_startCoord$$inline_5266$$ = $dummyCoord_group$$8_groupIdx$$, $endCoord$$inline_5263$$ = $coords$$16$$[0];
            (0,D.$JSCompiler_StaticMethods_isUpstep$$)($startCoord$$inline_5262_startCoord$$inline_5266$$, $baseline$$4_params$$48$$) ? $endCoord$$inline_5263$$.$y1$ = $endCoord$$inline_5263$$.$y2$ : $startCoord$$inline_5262_startCoord$$inline_5266$$.$y2$ = $startCoord$$inline_5262_startCoord$$inline_5266$$.$y1$
          }else {
            $dummyCoord_group$$8_groupIdx$$ = $coords$$16$$[$idx$$8$$ - 1].clone(), $coords$$16$$[$idx$$8$$ - 1] = $coords$$16$$[$idx$$8$$ - 1].clone(), $startCoord$$inline_5262_startCoord$$inline_5266$$ = $coords$$16$$[$idx$$8$$ - 1], (0,D.$JSCompiler_StaticMethods_isUpstep$$)($startCoord$$inline_5262_startCoord$$inline_5266$$, $baseline$$4_params$$48$$) ? $dummyCoord_group$$8_groupIdx$$.$y1$ = $dummyCoord_group$$8_groupIdx$$.$y2$ : $startCoord$$inline_5262_startCoord$$inline_5266$$.$y2$ = $startCoord$$inline_5262_startCoord$$inline_5266$$.$y1$
          }
          $dummyCoord_group$$8_groupIdx$$.$groupIndex$ = -1;
          $coords$$16$$.splice($idx$$8$$, 0, $dummyCoord_group$$8_groupIdx$$)
        }else {
          $idx$$8$$ = $dummyCoord_group$$8_groupIdx$$
        }
      }
    }else {
      $coords$$16$$ = [];
      for($g$$3_i$$440$$ = 0;$g$$3_i$$440$$ < $otherCoords_otherGroups$$.length;$g$$3_i$$440$$++) {
        $coords$$16$$.push(new D.$DvtChartCoord$$($otherCoords_otherGroups$$[$g$$3_i$$440$$].x, $baseline$$4_params$$48$$, $baseline$$4_params$$48$$))
      }
    }
  }
  $baseline$$4_params$$48$$ = [];
  for($g$$3_i$$440$$ = 0;$g$$3_i$$440$$ < $coords$$16$$.length;$g$$3_i$$440$$++) {
    $coords$$16$$[$g$$3_i$$440$$].$filtered$ || ($coords$$16$$[$g$$3_i$$440$$].x == D.$JSCompiler_alias_NULL$$ ? ($baseline$$4_params$$48$$.push(window.Infinity), $baseline$$4_params$$48$$.push(window.Infinity), $baseline$$4_params$$48$$.push(window.Infinity)) : ($baseline$$4_params$$48$$.push($coords$$16$$[$g$$3_i$$440$$].x), $baseline$$4_params$$48$$.push($coords$$16$$[$g$$3_i$$440$$].$y1$), $baseline$$4_params$$48$$.push($coords$$16$$[$g$$3_i$$440$$].$y2$)), $baseline$$4_params$$48$$.push($coords$$16$$[$g$$3_i$$440$$].$groupIndex$))
  }
  return $baseline$$4_params$$48$$
};
D.$DvtChartLineArea$_animationParamsToCoords$$ = function $$DvtChartLineArea$_animationParamsToCoords$$$($params$$49$$) {
  for(var $coords$$17$$ = [], $i$$441$$ = 0;$i$$441$$ < $params$$49$$.length;$i$$441$$ += 4) {
    window.Infinity == $params$$49$$[$i$$441$$] ? $coords$$17$$.push(new D.$DvtChartCoord$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $params$$49$$[$i$$441$$ + 3])) : $coords$$17$$.push(new D.$DvtChartCoord$$($params$$49$$[$i$$441$$], $params$$49$$[$i$$441$$ + 1], $params$$49$$[$i$$441$$ + 2], $params$$49$$[$i$$441$$ + 3]))
  }
  return $coords$$17$$
};
D.$DvtChartLineArea$_coordsToGroups$$ = function $$DvtChartLineArea$_coordsToGroups$$$($coords$$18$$) {
  for(var $groups$$2$$ = [], $i$$442$$ = 0;$i$$442$$ < $coords$$18$$.length;$i$$442$$++) {
    $coords$$18$$[$i$$442$$].$filtered$ || $groups$$2$$.push($coords$$18$$[$i$$442$$].group)
  }
  return $groups$$2$$
};
D.$DvtChartLineArea$_getCurvedPathCommands$$ = function $$DvtChartLineArea$_getCurvedPathCommands$$$($cmd$$6_points$$35$$, $connectWithLine$$, $lastPoints$$1_splineType$$1$$) {
  var $arP$$ = [], $p$$17$$ = [];
  $arP$$.push($p$$17$$);
  for(var $i$$443$$ = 0;$i$$443$$ < $cmd$$6_points$$35$$.length;$i$$443$$ += 2) {
    $cmd$$6_points$$35$$[$i$$443$$] == D.$JSCompiler_alias_NULL$$ ? ($p$$17$$ = [], $arP$$.push($p$$17$$)) : $p$$17$$.push($cmd$$6_points$$35$$[$i$$443$$], $cmd$$6_points$$35$$[$i$$443$$ + 1])
  }
  $lastPoints$$1_splineType$$1$$ == window.DvtPathUtils.$SPLINE_TYPE_CARDINAL_CLOSED$ && 1 < $arP$$.length && ($lastPoints$$1_splineType$$1$$ = $arP$$.pop(), $arP$$[0] = $lastPoints$$1_splineType$$1$$.concat($arP$$[0]), $lastPoints$$1_splineType$$1$$ = window.DvtPathUtils.$SPLINE_TYPE_CARDINAL$);
  $cmd$$6_points$$35$$ = "";
  for($i$$443$$ = 0;$i$$443$$ < $arP$$.length;$i$$443$$++) {
    $p$$17$$ = $arP$$[$i$$443$$], $cmd$$6_points$$35$$ += window.DvtPathUtils.$curveThroughPoints$($p$$17$$, $connectWithLine$$, $lastPoints$$1_splineType$$1$$), $connectWithLine$$ = D.$JSCompiler_alias_TRUE$$
  }
  return $cmd$$6_points$$35$$
};
D.$DvtChartLineMarker$$ = function $$DvtChartLineMarker$$$($context$$251$$, $type$$102$$, $x$$145$$, $y$$121$$, $size$$26$$) {
  this.Init($context$$251$$, $type$$102$$, D.$JSCompiler_alias_NULL$$, $x$$145$$, $y$$121$$, $size$$26$$, $size$$26$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartLineMarker$$, D.$DvtMarker$$, "DvtChartLineMarker");
D.$DvtChartLineMarker$_SELECTED_FILL$$ = new D.$DvtSolidFill$$("#FFFFFF");
D.$DvtChartLineMarker$_SELECTED_STROKE$$ = new D.$DvtSolidStroke$$("#5A5A5A", 1, 1.5);
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartLineMarker$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setDataColor$ = function $$JSCompiler_prototypeAlias$$$$setDataColor$$($dataColor$$4$$) {
  this.$_dataColor$ = $dataColor$$4$$;
  this.$_hoverStroke$ = new D.$DvtSolidStroke$$($dataColor$$4$$, 1, 1.5)
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$IsShowingHoverEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$setStroke$(this.$_hoverStroke$)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$IsShowingHoverEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$setStroke$(this.$isSelected$() ? D.$DvtChartLineMarker$_SELECTED_STROKE$$ : D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$13$$) {
  this.$IsSelected$ != $selected$$13$$ && (this.$IsSelected$ = $selected$$13$$, this.$isSelected$() ? (this.$setFill$(D.$DvtChartLineMarker$_SELECTED_FILL$$), this.$setStroke$(this.$isHoverEffectShown$() ? this.$_hoverStroke$ : D.$DvtChartLineMarker$_SELECTED_STROKE$$)) : ((0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this), this.$setStroke$(this.$isHoverEffectShown$() ? this.$_hoverStroke$ : D.$JSCompiler_alias_NULL$$)))
};
D.$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtChartPolarBar$$ = function $$DvtChartPolarBar$$$($context$$252$$, $axisCoord$$, $baselineCoord$$2$$, $endCoord$$1$$, $x1$$16$$, $x2$$15$$, $availSpace$$25$$) {
  this.Init($context$$252$$);
  this.$_axisCoord$ = $axisCoord$$;
  this.$_availSpace$ = $availSpace$$25$$.clone();
  this.$_bbox$ = D.$JSCompiler_alias_NULL$$;
  this.$_setBarCoords$($baselineCoord$$2$$, $endCoord$$1$$, $x1$$16$$, $x2$$15$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartPolarBar$$, D.$DvtGraphSelectablePath$$, "DvtChartPolarBar");
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartPolarBar$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setStyleProperties$ = function $$JSCompiler_prototypeAlias$$$$setStyleProperties$$($fill$$36$$, $stroke$$60$$, $dataColor$$5$$, $innerColor$$3$$, $outerColor$$3$$) {
  this.$setFill$($fill$$36$$);
  this.$setStroke$($stroke$$60$$);
  this.$setDataColor$($dataColor$$5$$, $innerColor$$3$$, $outerColor$$3$$)
};
D.$JSCompiler_prototypeAlias$$.$getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getAnimationParams$$() {
  return[this.$_baselineCoord$, this.$_endCoord$, this.$_x1$, this.$_x2$]
};
D.$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($params$$44$$) {
  this.$_setBarCoords$($params$$44$$[0], $params$$44$$[1], $params$$44$$[2], $params$$44$$[3])
};
D.$JSCompiler_prototypeAlias$$.$getDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDisplayAnimation$$($duration$$35_nodePlayable$$15$$) {
  var $endState$$8$$ = this.$getAnimationParams$();
  this.$setAnimationParams$([this.$_axisCoord$, this.$_axisCoord$, 0, 0]);
  $duration$$35_nodePlayable$$15$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, $duration$$35_nodePlayable$$15$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$35_nodePlayable$$15$$.$_animator$, "typeNumberArray", this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$8$$);
  return $duration$$35_nodePlayable$$15$$
};
D.$JSCompiler_prototypeAlias$$.$getDeleteAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDeleteAnimation$$($duration$$36_nodePlayable$$16$$) {
  var $endState$$9$$ = [this.$_baselineCoord$, this.$_baselineCoord$, this.$_x1$, this.$_x2$];
  $duration$$36_nodePlayable$$16$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, $duration$$36_nodePlayable$$16$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$36_nodePlayable$$16$$.$_animator$, "typeNumberArray", this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$9$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$36_nodePlayable$$16$$.$_animator$, "typeNumber", this, this.$getAlpha$, this.$setAlpha$, 0);
  return $duration$$36_nodePlayable$$16$$
};
D.$JSCompiler_prototypeAlias$$.$getInsertAnimation$ = function $$JSCompiler_prototypeAlias$$$$getInsertAnimation$$($duration$$37_nodePlayable$$17$$) {
  this.$setAlpha$(0);
  var $endState$$10$$ = this.$getAnimationParams$();
  this.$setAnimationParams$([this.$_baselineCoord$, this.$_baselineCoord$, this.$_x1$, this.$_x2$]);
  $duration$$37_nodePlayable$$17$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, $duration$$37_nodePlayable$$17$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$37_nodePlayable$$17$$.$_animator$, "typeNumberArray", this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$10$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$37_nodePlayable$$17$$.$_animator$, "typeNumber", this, this.$getAlpha$, this.$setAlpha$, 1);
  return $duration$$37_nodePlayable$$17$$
};
D.$JSCompiler_prototypeAlias$$.$_setBarCoords$ = function $$JSCompiler_prototypeAlias$$$$_setBarCoords$$($baselineCoord$$3$$, $endCoord$$2$$, $x1$$17$$, $x2$$16$$) {
  var $inner1_maxY$$8$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($baselineCoord$$3$$, $x1$$17$$, this.$_availSpace$), $inner2$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($baselineCoord$$3$$, $x2$$16$$, this.$_availSpace$), $outer1$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($endCoord$$2$$, $x1$$17$$, this.$_availSpace$), $outer2$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($endCoord$$2$$, $x2$$16$$, this.$_availSpace$), $cmds$$5_minX$$8$$ = window.DvtPathUtils.moveTo($inner1_maxY$$8$$.x, 
  $inner1_maxY$$8$$.y) + window.DvtPathUtils.arcTo($baselineCoord$$3$$, $baselineCoord$$3$$, $x2$$16$$ - $x1$$17$$, 1, $inner2$$.x, $inner2$$.y) + window.DvtPathUtils.lineTo($outer2$$.x, $outer2$$.y) + window.DvtPathUtils.arcTo($endCoord$$2$$, $endCoord$$2$$, $x2$$16$$ - $x1$$17$$, 0, $outer1$$.x, $outer1$$.y) + window.DvtPathUtils.lineTo($inner1_maxY$$8$$.x, $inner1_maxY$$8$$.y) + window.DvtPathUtils.closePath();
  this.$setCmds$($cmds$$5_minX$$8$$);
  var $cmds$$5_minX$$8$$ = window.Math.min($inner1_maxY$$8$$.x, $inner2$$.x, $outer1$$.x, $outer2$$.x), $maxX$$8$$ = window.Math.max($inner1_maxY$$8$$.x, $inner2$$.x, $outer1$$.x, $outer2$$.x), $minY$$8$$ = window.Math.min($inner1_maxY$$8$$.y, $inner2$$.y, $outer1$$.y, $outer2$$.y), $inner1_maxY$$8$$ = window.Math.max($inner1_maxY$$8$$.y, $inner2$$.y, $outer1$$.y, $outer2$$.y);
  this.$_bbox$ = new D.$DvtRectangle$$($cmds$$5_minX$$8$$, $minY$$8$$, $maxX$$8$$ - $cmds$$5_minX$$8$$, $inner1_maxY$$8$$ - $minY$$8$$);
  this.$_baselineCoord$ = $baselineCoord$$3$$;
  this.$_endCoord$ = $endCoord$$2$$;
  this.$_x1$ = $x1$$17$$;
  this.$_x2$ = $x2$$16$$
};
D.$JSCompiler_prototypeAlias$$.$getBoundingBox$ = (0,D.$JSCompiler_get$$)("$_bbox$");
D.$DvtFunnelSlice$$ = function $$DvtFunnelSlice$$$($chart$$27$$, $seriesIndex$$8$$, $numDrawnSeries$$, $funnelWidth$$, $funnelHeight$$, $startPercent$$, $valuePercent$$, $fillPercent$$, $gap$$8$$) {
  this.Init($chart$$27$$, $seriesIndex$$8$$, $numDrawnSeries$$, $funnelWidth$$, $funnelHeight$$, $startPercent$$, $valuePercent$$, $fillPercent$$, $gap$$8$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtFunnelSlice$$, D.$DvtPath$$, "DvtFunnelSlice");
D.$DvtFunnelSlice$$.prototype.Init = function $$DvtFunnelSlice$$$$Init$($JSCompiler_inline_result$$494_chart$$28_hoverColor$$inline_5213_sliceBounds$$inline_5219_sliceFill$$inline_5210$$, $barBounds$$inline_5220_cmds$$6_labelColor$$inline_5232_seriesIndex$$9$$, $innerColor$$inline_5214_label$$inline_5222_labelString$$inline_5221_numDrawnSeries$$1_sliceBorder$$inline_5211$$, $backgroundFill$$inline_5212_funnelWidth$$1_isPatternBg$$inline_5223_outerColor$$inline_5215_sliceBounds$$inline_5209$$, $funnelHeight$$1_labelStyleArray$$inline_5224_shapeForSelection$$inline_5216_style$$inline_5225$$, 
$startPercent$$1_textDim$$inline_5226$$, $pos$$inline_5227_valuePercent$$1$$, $displacement$$inline_5229_fillPercent$$1$$, $bbox$$inline_5231_cmd$$inline_5230_gap$$9_padding$$inline_5228$$) {
  D.$DvtFunnelSlice$$.$superclass$.Init.call(this, $JSCompiler_inline_result$$494_chart$$28_hoverColor$$inline_5213_sliceBounds$$inline_5219_sliceFill$$inline_5210$$.$_context$);
  this.$_chart$ = $JSCompiler_inline_result$$494_chart$$28_hoverColor$$inline_5213_sliceBounds$$inline_5219_sliceFill$$inline_5210$$;
  this.$_seriesIndex$ = $barBounds$$inline_5220_cmds$$6_labelColor$$inline_5232_seriesIndex$$9$$;
  this.$_numDrawnSeries$ = $innerColor$$inline_5214_label$$inline_5222_labelString$$inline_5221_numDrawnSeries$$1_sliceBorder$$inline_5211$$;
  this.$_funnelWidth$ = $backgroundFill$$inline_5212_funnelWidth$$1_isPatternBg$$inline_5223_outerColor$$inline_5215_sliceBounds$$inline_5209$$;
  this.$_funnelHeight$ = $funnelHeight$$1_labelStyleArray$$inline_5224_shapeForSelection$$inline_5216_style$$inline_5225$$;
  this.$_startPercent$ = $startPercent$$1_textDim$$inline_5226$$;
  this.$_valuePercent$ = $pos$$inline_5227_valuePercent$$1$$;
  this.$_fillPercent$ = $displacement$$inline_5229_fillPercent$$1$$;
  this.$_gap$ = $bbox$$inline_5231_cmd$$inline_5230_gap$$9_padding$$inline_5228$$;
  $barBounds$$inline_5220_cmds$$6_labelColor$$inline_5232_seriesIndex$$9$$ = (0,D.$JSCompiler_StaticMethods__getPath$$)(this);
  this.$_dataColor$ = D.$DvtChartStyleUtils$$.$getColor$(this.$_chart$, this.$_seriesIndex$, 0);
  this.$_backgroundColor$ = $JSCompiler_inline_result$$494_chart$$28_hoverColor$$inline_5213_sliceBounds$$inline_5219_sliceFill$$inline_5210$$.$getOptions$().styleDefaults.backgroundColor;
  this.$_backgroundColor$ || (this.$_backgroundColor$ = D.$DvtFunnelSlice$_BACKGROUND_COLOR$$);
  this.$setCmds$($barBounds$$inline_5220_cmds$$6_labelColor$$inline_5232_seriesIndex$$9$$.slice);
  $barBounds$$inline_5220_cmds$$6_labelColor$$inline_5232_seriesIndex$$9$$.bar && (this.$_bar$ = new D.$DvtPath$$(this.$_context$, $barBounds$$inline_5220_cmds$$6_labelColor$$inline_5232_seriesIndex$$9$$.bar), this.$addChild$(this.$_bar$), this.$_bar$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$));
  $backgroundFill$$inline_5212_funnelWidth$$1_isPatternBg$$inline_5223_outerColor$$inline_5215_sliceBounds$$inline_5209$$ = $barBounds$$inline_5220_cmds$$6_labelColor$$inline_5232_seriesIndex$$9$$.sliceBounds;
  $JSCompiler_inline_result$$494_chart$$28_hoverColor$$inline_5213_sliceBounds$$inline_5219_sliceFill$$inline_5210$$ = D.$DvtChartSeriesEffectUtils$$.$getFunnelSliceFill$(this.$_chart$, this.$_seriesIndex$, this.$_dataColor$, $backgroundFill$$inline_5212_funnelWidth$$1_isPatternBg$$inline_5223_outerColor$$inline_5215_sliceBounds$$inline_5209$$);
  $innerColor$$inline_5214_label$$inline_5222_labelString$$inline_5221_numDrawnSeries$$1_sliceBorder$$inline_5211$$ = D.$DvtChartStyleUtils$$.$getBorderColor$(this.$_chart$, this.$_seriesIndex$, 0);
  $backgroundFill$$inline_5212_funnelWidth$$1_isPatternBg$$inline_5223_outerColor$$inline_5215_sliceBounds$$inline_5209$$ = D.$DvtChartSeriesEffectUtils$$.$getFunnelSliceFill$(this.$_chart$, this.$_seriesIndex$, this.$_backgroundColor$, $backgroundFill$$inline_5212_funnelWidth$$1_isPatternBg$$inline_5223_outerColor$$inline_5215_sliceBounds$$inline_5209$$, D.$JSCompiler_alias_TRUE$$);
  this.$_bar$ ? (this.$setFill$($backgroundFill$$inline_5212_funnelWidth$$1_isPatternBg$$inline_5223_outerColor$$inline_5215_sliceBounds$$inline_5209$$), this.$_bar$.$setFill$($JSCompiler_inline_result$$494_chart$$28_hoverColor$$inline_5213_sliceBounds$$inline_5219_sliceFill$$inline_5210$$)) : this.$setFill$($JSCompiler_inline_result$$494_chart$$28_hoverColor$$inline_5213_sliceBounds$$inline_5219_sliceFill$$inline_5210$$);
  this.$setSolidStroke$($innerColor$$inline_5214_label$$inline_5222_labelString$$inline_5221_numDrawnSeries$$1_sliceBorder$$inline_5211$$ != D.$JSCompiler_alias_NULL$$ ? $innerColor$$inline_5214_label$$inline_5222_labelString$$inline_5221_numDrawnSeries$$1_sliceBorder$$inline_5211$$ : "#FFFFFF");
  this.$OriginalStroke$ = this.$getStroke$();
  this.$_chart$.$isSelectionSupported$() && ($JSCompiler_inline_result$$494_chart$$28_hoverColor$$inline_5213_sliceBounds$$inline_5219_sliceFill$$inline_5210$$ = D.$DvtSelectionEffectUtils$$.$getHoverBorderColor$(this.$_dataColor$), $innerColor$$inline_5214_label$$inline_5222_labelString$$inline_5221_numDrawnSeries$$1_sliceBorder$$inline_5211$$ = D.$DvtChartStyleUtils$$.$getSelectedInnerColor$(this.$_chart$), $backgroundFill$$inline_5212_funnelWidth$$1_isPatternBg$$inline_5223_outerColor$$inline_5215_sliceBounds$$inline_5209$$ = 
  D.$DvtChartStyleUtils$$.$getSelectedOuterColor$(this.$_chart$) ? D.$DvtChartStyleUtils$$.$getSelectedOuterColor$(this.$_chart$) : this.$_dataColor$, $funnelHeight$$1_labelStyleArray$$inline_5224_shapeForSelection$$inline_5216_style$$inline_5225$$ = this.$_bar$ != D.$JSCompiler_alias_NULL$$ ? this.$_bar$ : this, $funnelHeight$$1_labelStyleArray$$inline_5224_shapeForSelection$$inline_5216_style$$inline_5225$$.$setHoverStroke$(new D.$DvtSolidStroke$$($JSCompiler_inline_result$$494_chart$$28_hoverColor$$inline_5213_sliceBounds$$inline_5219_sliceFill$$inline_5210$$, 
  1, 2)), $funnelHeight$$1_labelStyleArray$$inline_5224_shapeForSelection$$inline_5216_style$$inline_5225$$.$setSelectedStroke$(new D.$DvtSolidStroke$$($innerColor$$inline_5214_label$$inline_5222_labelString$$inline_5221_numDrawnSeries$$1_sliceBorder$$inline_5211$$, 1, 1.5), new D.$DvtSolidStroke$$($backgroundFill$$inline_5212_funnelWidth$$1_isPatternBg$$inline_5223_outerColor$$inline_5215_sliceBounds$$inline_5209$$, 1, 4.5)), $funnelHeight$$1_labelStyleArray$$inline_5224_shapeForSelection$$inline_5216_style$$inline_5225$$.$setSelectedHoverStroke$(new D.$DvtSolidStroke$$($innerColor$$inline_5214_label$$inline_5222_labelString$$inline_5221_numDrawnSeries$$1_sliceBorder$$inline_5211$$, 
  1, 1.5), new D.$DvtSolidStroke$$($JSCompiler_inline_result$$494_chart$$28_hoverColor$$inline_5213_sliceBounds$$inline_5219_sliceFill$$inline_5210$$, 1, 4.5)), this.setCursor("pointer"));
  a: {
    $JSCompiler_inline_result$$494_chart$$28_hoverColor$$inline_5213_sliceBounds$$inline_5219_sliceFill$$inline_5210$$ = $barBounds$$inline_5220_cmds$$6_labelColor$$inline_5232_seriesIndex$$9$$.sliceBounds;
    $barBounds$$inline_5220_cmds$$6_labelColor$$inline_5232_seriesIndex$$9$$ = $barBounds$$inline_5220_cmds$$6_labelColor$$inline_5232_seriesIndex$$9$$.barBounds;
    if($innerColor$$inline_5214_label$$inline_5222_labelString$$inline_5221_numDrawnSeries$$1_sliceBorder$$inline_5211$$ = D.$DvtChartDataUtils$$.$getSeriesLabel$(this.$_chart$, this.$_seriesIndex$)) {
      if($innerColor$$inline_5214_label$$inline_5222_labelString$$inline_5221_numDrawnSeries$$1_sliceBorder$$inline_5211$$ = new D.$DvtOutputText$$(this.$_context$, $innerColor$$inline_5214_label$$inline_5222_labelString$$inline_5221_numDrawnSeries$$1_sliceBorder$$inline_5211$$, 0, 0), $backgroundFill$$inline_5212_funnelWidth$$1_isPatternBg$$inline_5223_outerColor$$inline_5215_sliceBounds$$inline_5209$$ = D.$DvtChartStyleUtils$$.$getPattern$(this.$_chart$, this.$_seriesIndex$, 0) != D.$JSCompiler_alias_NULL$$, 
      $funnelHeight$$1_labelStyleArray$$inline_5224_shapeForSelection$$inline_5216_style$$inline_5225$$ = [this.$_chart$.$getOptions$().styleDefaults.sliceLabelStyle, new D.$DvtCSSStyle$$(D.$DvtChartDataUtils$$.$getDataItem$(this.$_chart$, this.$_seriesIndex$, 0).labelStyle)], $funnelHeight$$1_labelStyleArray$$inline_5224_shapeForSelection$$inline_5216_style$$inline_5225$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($funnelHeight$$1_labelStyleArray$$inline_5224_shapeForSelection$$inline_5216_style$$inline_5225$$), 
      $innerColor$$inline_5214_label$$inline_5222_labelString$$inline_5221_numDrawnSeries$$1_sliceBorder$$inline_5211$$.$setCSSStyle$($funnelHeight$$1_labelStyleArray$$inline_5224_shapeForSelection$$inline_5216_style$$inline_5225$$), D.$DvtTextUtils$$.$fitText$($innerColor$$inline_5214_label$$inline_5222_labelString$$inline_5221_numDrawnSeries$$1_sliceBorder$$inline_5211$$, $JSCompiler_inline_result$$494_chart$$28_hoverColor$$inline_5213_sliceBounds$$inline_5219_sliceFill$$inline_5210$$.$h$ - 10, 
      $JSCompiler_inline_result$$494_chart$$28_hoverColor$$inline_5213_sliceBounds$$inline_5219_sliceFill$$inline_5210$$.$w$, this, 3)) {
        $startPercent$$1_textDim$$inline_5226$$ = $innerColor$$inline_5214_label$$inline_5222_labelString$$inline_5221_numDrawnSeries$$1_sliceBorder$$inline_5211$$.$measureDimensions$();
        $pos$$inline_5227_valuePercent$$1$$ = (0,D.$JSCompiler_StaticMethods__getSliceLabelPosition$$)(this, $JSCompiler_inline_result$$494_chart$$28_hoverColor$$inline_5213_sliceBounds$$inline_5219_sliceFill$$inline_5210$$);
        $backgroundFill$$inline_5212_funnelWidth$$1_isPatternBg$$inline_5223_outerColor$$inline_5215_sliceBounds$$inline_5209$$ && ($bbox$$inline_5231_cmd$$inline_5230_gap$$9_padding$$inline_5228$$ = 0.15 * $startPercent$$1_textDim$$inline_5226$$.$h$, $displacement$$inline_5229_fillPercent$$1$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) ? 0.5 : -0.5, $bbox$$inline_5231_cmd$$inline_5230_gap$$9_padding$$inline_5228$$ = window.DvtPathUtils.$roundedRectangle$($startPercent$$1_textDim$$inline_5226$$.x - 
        $bbox$$inline_5231_cmd$$inline_5230_gap$$9_padding$$inline_5228$$, $startPercent$$1_textDim$$inline_5226$$.y, $startPercent$$1_textDim$$inline_5226$$.$w$ + 2 * $bbox$$inline_5231_cmd$$inline_5230_gap$$9_padding$$inline_5228$$, $startPercent$$1_textDim$$inline_5226$$.$h$, 2, 2, 2, 2), $bbox$$inline_5231_cmd$$inline_5230_gap$$9_padding$$inline_5228$$ = new D.$DvtPath$$(this.$_context$, $bbox$$inline_5231_cmd$$inline_5230_gap$$9_padding$$inline_5228$$), $bbox$$inline_5231_cmd$$inline_5230_gap$$9_padding$$inline_5228$$.$setSolidFill$("#FFFFFF", 
        0.9), $pos$$inline_5227_valuePercent$$1$$.translate($displacement$$inline_5229_fillPercent$$1$$ * $startPercent$$1_textDim$$inline_5226$$.$h$, -$displacement$$inline_5229_fillPercent$$1$$ * $startPercent$$1_textDim$$inline_5226$$.$w$), $bbox$$inline_5231_cmd$$inline_5230_gap$$9_padding$$inline_5228$$.$setMatrix$($pos$$inline_5227_valuePercent$$1$$), this.$addChild$($bbox$$inline_5231_cmd$$inline_5230_gap$$9_padding$$inline_5228$$));
        $barBounds$$inline_5220_cmds$$6_labelColor$$inline_5232_seriesIndex$$9$$ = $backgroundFill$$inline_5212_funnelWidth$$1_isPatternBg$$inline_5223_outerColor$$inline_5215_sliceBounds$$inline_5209$$ ? "#0000000" : (0,D.$JSCompiler_StaticMethods_containsPoint$$)($barBounds$$inline_5220_cmds$$6_labelColor$$inline_5232_seriesIndex$$9$$, $JSCompiler_inline_result$$494_chart$$28_hoverColor$$inline_5213_sliceBounds$$inline_5219_sliceFill$$inline_5210$$.x, $JSCompiler_inline_result$$494_chart$$28_hoverColor$$inline_5213_sliceBounds$$inline_5219_sliceFill$$inline_5210$$.y + 
        ($JSCompiler_inline_result$$494_chart$$28_hoverColor$$inline_5213_sliceBounds$$inline_5219_sliceFill$$inline_5210$$.$h$ - $startPercent$$1_textDim$$inline_5226$$.$w$) / 2) ? D.$DvtColorUtils$$.$getContrastingTextColor$(this.$_dataColor$) : D.$DvtColorUtils$$.$getContrastingTextColor$(this.$_backgroundColor$);
        (!$funnelHeight$$1_labelStyleArray$$inline_5224_shapeForSelection$$inline_5216_style$$inline_5225$$.$getStyle$("color") || D.$DvtAgent$_highContrast$$ === D.$JSCompiler_alias_TRUE$$) && $innerColor$$inline_5214_label$$inline_5222_labelString$$inline_5221_numDrawnSeries$$1_sliceBorder$$inline_5211$$.$setCSSStyle$($funnelHeight$$1_labelStyleArray$$inline_5224_shapeForSelection$$inline_5216_style$$inline_5225$$.$setStyle$("color", $barBounds$$inline_5220_cmds$$6_labelColor$$inline_5232_seriesIndex$$9$$));
        $innerColor$$inline_5214_label$$inline_5222_labelString$$inline_5221_numDrawnSeries$$1_sliceBorder$$inline_5211$$.$setMatrix$((0,D.$JSCompiler_StaticMethods__getSliceLabelPosition$$)(this, $JSCompiler_inline_result$$494_chart$$28_hoverColor$$inline_5213_sliceBounds$$inline_5219_sliceFill$$inline_5210$$));
        $innerColor$$inline_5214_label$$inline_5222_labelString$$inline_5221_numDrawnSeries$$1_sliceBorder$$inline_5211$$.$alignCenter$();
        $innerColor$$inline_5214_label$$inline_5222_labelString$$inline_5221_numDrawnSeries$$1_sliceBorder$$inline_5211$$.$alignMiddle$();
        $JSCompiler_inline_result$$494_chart$$28_hoverColor$$inline_5213_sliceBounds$$inline_5219_sliceFill$$inline_5210$$ = $innerColor$$inline_5214_label$$inline_5222_labelString$$inline_5221_numDrawnSeries$$1_sliceBorder$$inline_5211$$;
        break a
      }
    }
    $JSCompiler_inline_result$$494_chart$$28_hoverColor$$inline_5213_sliceBounds$$inline_5219_sliceFill$$inline_5210$$ = D.$JSCompiler_alias_VOID$$
  }
  this.$_label$ = $JSCompiler_inline_result$$494_chart$$28_hoverColor$$inline_5213_sliceBounds$$inline_5219_sliceFill$$inline_5210$$;
  this.$_label$ != D.$JSCompiler_alias_NULL$$ && (this.$_label$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), this.$addChild$(this.$_label$))
};
D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$ = D.$DvtMath$$.$degreesToRads$(31);
D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$ = D.$DvtMath$$.$degreesToRads$(29);
D.$DvtFunnelSlice$_FUNNEL_RATIO$$ = 6 / 22;
D.$DvtFunnelSlice$_BACKGROUND_COLOR$$ = "#EDEDED";
D.$JSCompiler_StaticMethods__getPath$$ = function $$JSCompiler_StaticMethods__getPath$$$($JSCompiler_StaticMethods__getPath$self_alpha$$21$$) {
  var $is3D_rx$$18$$ = "on" == $JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_chart$.$getOptions$().styleDefaults.threeDEffect ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$, $isBiDi$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_context$), $gapCount_ry$$14$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_chart$), $ar$$22_offset$$18$$ = ($JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_numDrawnSeries$ + 
  1) * $JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_gap$;
  if($is3D_rx$$18$$) {
    var $is3D_rx$$18$$ = ($JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_funnelWidth$ - $gapCount_ry$$14$$ * $JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_gap$) / window.Math.sin(D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$), $gapCount_ry$$14$$ = $JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_funnelHeight$ / window.Math.sin(D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$), $ratio$$6$$ = 0.12 * ($JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_funnelWidth$ / $JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_funnelHeight$), 
    $delta$$6_pathCommands$$ = D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$ * (1 - $JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_startPercent$), $barCommands_gamma$$ = D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$ * (1 - $JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_startPercent$ - $JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_valuePercent$), $c1$$2_sliceBounds$$ = (1 + D.$DvtFunnelSlice$_FUNNEL_RATIO$$) / 2 * $JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_funnelHeight$ + $gapCount_ry$$14$$, 
    $c2$$2$$ = (1 - D.$DvtFunnelSlice$_FUNNEL_RATIO$$) / 2 * $JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_funnelHeight$ - $gapCount_ry$$14$$, $arcDir1$$ = 1, $arcDir2$$ = 0;
    $isBiDi$$ ? ($ar$$22_offset$$18$$ = [$is3D_rx$$18$$ * window.Math.sin($delta$$6_pathCommands$$) + $ar$$22_offset$$18$$, $c1$$2_sliceBounds$$ - $gapCount_ry$$14$$ * window.Math.cos($delta$$6_pathCommands$$), $is3D_rx$$18$$ * window.Math.sin($barCommands_gamma$$) + $ar$$22_offset$$18$$, $c1$$2_sliceBounds$$ - $gapCount_ry$$14$$ * window.Math.cos($barCommands_gamma$$), $is3D_rx$$18$$ * window.Math.sin($barCommands_gamma$$) + $ar$$22_offset$$18$$, $c2$$2$$ + $gapCount_ry$$14$$ * window.Math.cos($barCommands_gamma$$), 
    $is3D_rx$$18$$ * window.Math.sin($delta$$6_pathCommands$$) + $ar$$22_offset$$18$$, $c2$$2$$ + $gapCount_ry$$14$$ * window.Math.cos($delta$$6_pathCommands$$)], $arcDir1$$ = 0, $arcDir2$$ = 1) : $ar$$22_offset$$18$$ = [$JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_funnelWidth$ - $ar$$22_offset$$18$$ - $is3D_rx$$18$$ * window.Math.sin($delta$$6_pathCommands$$), $c1$$2_sliceBounds$$ - $gapCount_ry$$14$$ * window.Math.cos($delta$$6_pathCommands$$), $JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_funnelWidth$ - 
    $ar$$22_offset$$18$$ - $is3D_rx$$18$$ * window.Math.sin($barCommands_gamma$$), $c1$$2_sliceBounds$$ - $gapCount_ry$$14$$ * window.Math.cos($barCommands_gamma$$), $JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_funnelWidth$ - $ar$$22_offset$$18$$ - $is3D_rx$$18$$ * window.Math.sin($barCommands_gamma$$), $c2$$2$$ + $gapCount_ry$$14$$ * window.Math.cos($barCommands_gamma$$), $JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_funnelWidth$ - $ar$$22_offset$$18$$ - $is3D_rx$$18$$ * window.Math.sin($delta$$6_pathCommands$$), 
    $c2$$2$$ + $gapCount_ry$$14$$ * window.Math.cos($delta$$6_pathCommands$$)];
    $delta$$6_pathCommands$$ = window.DvtPathUtils.moveTo($ar$$22_offset$$18$$[0], $ar$$22_offset$$18$$[1]);
    $barCommands_gamma$$ = D.$JSCompiler_alias_NULL$$;
    $delta$$6_pathCommands$$ += window.DvtPathUtils.arcTo($ratio$$6$$ * ($ar$$22_offset$$18$$[1] - $ar$$22_offset$$18$$[7]) / 2, ($ar$$22_offset$$18$$[1] - $ar$$22_offset$$18$$[7]) / 2, window.Math.PI, $arcDir2$$, $ar$$22_offset$$18$$[6], $ar$$22_offset$$18$$[7]);
    $delta$$6_pathCommands$$ += window.DvtPathUtils.arcTo($ratio$$6$$ * ($ar$$22_offset$$18$$[1] - $ar$$22_offset$$18$$[7]) / 2, ($ar$$22_offset$$18$$[1] - $ar$$22_offset$$18$$[7]) / 2, window.Math.PI, $arcDir2$$, $ar$$22_offset$$18$$[0], $ar$$22_offset$$18$$[1]);
    $delta$$6_pathCommands$$ += window.DvtPathUtils.arcTo($is3D_rx$$18$$, $gapCount_ry$$14$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$, $arcDir1$$, $ar$$22_offset$$18$$[2], $ar$$22_offset$$18$$[3]);
    $delta$$6_pathCommands$$ += window.DvtPathUtils.arcTo($ratio$$6$$ * ($ar$$22_offset$$18$$[3] - $ar$$22_offset$$18$$[5]) / 2, ($ar$$22_offset$$18$$[3] - $ar$$22_offset$$18$$[5]) / 2, window.Math.PI, $arcDir2$$, $ar$$22_offset$$18$$[4], $ar$$22_offset$$18$$[5]);
    $delta$$6_pathCommands$$ += window.DvtPathUtils.arcTo($is3D_rx$$18$$, $gapCount_ry$$14$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$, $arcDir1$$, $ar$$22_offset$$18$$[6], $ar$$22_offset$$18$$[7]);
    $c1$$2_sliceBounds$$ = new D.$DvtRectangle$$(window.Math.min($ar$$22_offset$$18$$[0], $ar$$22_offset$$18$$[2]), $ar$$22_offset$$18$$[5], window.Math.abs($ar$$22_offset$$18$$[0] - $ar$$22_offset$$18$$[2]), window.Math.abs($ar$$22_offset$$18$$[3] - $ar$$22_offset$$18$$[5]));
    if($JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_fillPercent$ != D.$JSCompiler_alias_NULL$$) {
      var $barBounds_percent$$1$$ = window.Math.max(window.Math.min($JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_fillPercent$, 1), 0);
      $JSCompiler_StaticMethods__getPath$self_alpha$$21$$ = $isBiDi$$ ? -$barBounds_percent$$1$$ * window.Math.PI : $barBounds_percent$$1$$ * window.Math.PI;
      $barCommands_gamma$$ = window.DvtPathUtils.moveTo($ar$$22_offset$$18$$[0], $ar$$22_offset$$18$$[1]);
      $barCommands_gamma$$ += window.DvtPathUtils.arcTo($is3D_rx$$18$$, $gapCount_ry$$14$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$, $arcDir1$$, $ar$$22_offset$$18$$[2], $ar$$22_offset$$18$$[3]);
      $barCommands_gamma$$ += window.DvtPathUtils.arcTo($ratio$$6$$ * ($ar$$22_offset$$18$$[3] - $ar$$22_offset$$18$$[5]) / 2, ($ar$$22_offset$$18$$[3] - $ar$$22_offset$$18$$[5]) / 2, $JSCompiler_StaticMethods__getPath$self_alpha$$21$$, $arcDir2$$, $ar$$22_offset$$18$$[2] + $ratio$$6$$ * ($ar$$22_offset$$18$$[3] - $ar$$22_offset$$18$$[5]) / 2 * window.Math.sin($JSCompiler_StaticMethods__getPath$self_alpha$$21$$), ($ar$$22_offset$$18$$[5] + $ar$$22_offset$$18$$[3]) / 2 + ($ar$$22_offset$$18$$[3] - 
      $ar$$22_offset$$18$$[5]) / 2 * window.Math.cos($JSCompiler_StaticMethods__getPath$self_alpha$$21$$));
      $barCommands_gamma$$ += window.DvtPathUtils.arcTo($is3D_rx$$18$$, $gapCount_ry$$14$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$, $arcDir1$$, $ar$$22_offset$$18$$[6] + $ratio$$6$$ * ($ar$$22_offset$$18$$[1] - $ar$$22_offset$$18$$[7]) / 2 * window.Math.sin($JSCompiler_StaticMethods__getPath$self_alpha$$21$$), ($ar$$22_offset$$18$$[7] + $ar$$22_offset$$18$$[1]) / 2 + ($ar$$22_offset$$18$$[1] - $ar$$22_offset$$18$$[7]) / 2 * window.Math.cos($JSCompiler_StaticMethods__getPath$self_alpha$$21$$));
      $barCommands_gamma$$ += window.DvtPathUtils.arcTo($ratio$$6$$ * ($ar$$22_offset$$18$$[1] - $ar$$22_offset$$18$$[7]) / 2, ($ar$$22_offset$$18$$[1] - $ar$$22_offset$$18$$[7]) / 2, $JSCompiler_StaticMethods__getPath$self_alpha$$21$$, $arcDir1$$, $ar$$22_offset$$18$$[0], $ar$$22_offset$$18$$[1]);
      $barBounds_percent$$1$$ = new D.$DvtRectangle$$(window.Math.min($ar$$22_offset$$18$$[0], $ar$$22_offset$$18$$[2]), $ar$$22_offset$$18$$[5] + window.Math.abs($ar$$22_offset$$18$$[3] - $ar$$22_offset$$18$$[5]) * (1 - $barBounds_percent$$1$$), window.Math.abs($ar$$22_offset$$18$$[0] - $ar$$22_offset$$18$$[2]), window.Math.abs($ar$$22_offset$$18$$[3] - $ar$$22_offset$$18$$[5]) * $barBounds_percent$$1$$)
    }
  }else {
    $is3D_rx$$18$$ = ($JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_funnelWidth$ - $gapCount_ry$$14$$ * $JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_gap$) / window.Math.sin(D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$), $gapCount_ry$$14$$ = $JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_funnelHeight$ / window.Math.sin(D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$), $delta$$6_pathCommands$$ = D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$ * (1 - $JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_startPercent$), 
    $barCommands_gamma$$ = D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$ * (1 - $JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_startPercent$ - $JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_valuePercent$), $c1$$2_sliceBounds$$ = (1 + D.$DvtFunnelSlice$_FUNNEL_RATIO$$) / 2 * $JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_funnelHeight$ + $gapCount_ry$$14$$, $c2$$2$$ = (1 - D.$DvtFunnelSlice$_FUNNEL_RATIO$$) / 2 * $JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_funnelHeight$ - $gapCount_ry$$14$$, 
    $arcDir1$$ = 1, $arcDir2$$ = 0, $isBiDi$$ ? ($ar$$22_offset$$18$$ = [$is3D_rx$$18$$ * window.Math.sin($delta$$6_pathCommands$$) + $ar$$22_offset$$18$$, $c1$$2_sliceBounds$$ - $gapCount_ry$$14$$ * window.Math.cos($delta$$6_pathCommands$$), $is3D_rx$$18$$ * window.Math.sin($barCommands_gamma$$) + $ar$$22_offset$$18$$, $c1$$2_sliceBounds$$ - $gapCount_ry$$14$$ * window.Math.cos($barCommands_gamma$$), $is3D_rx$$18$$ * window.Math.sin($barCommands_gamma$$) + $ar$$22_offset$$18$$, $c2$$2$$ + $gapCount_ry$$14$$ * 
    window.Math.cos($barCommands_gamma$$), $is3D_rx$$18$$ * window.Math.sin($delta$$6_pathCommands$$) + $ar$$22_offset$$18$$, $c2$$2$$ + $gapCount_ry$$14$$ * window.Math.cos($delta$$6_pathCommands$$)], $arcDir1$$ = 0, $arcDir2$$ = 1) : $ar$$22_offset$$18$$ = [$JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_funnelWidth$ - $ar$$22_offset$$18$$ - $is3D_rx$$18$$ * window.Math.sin($delta$$6_pathCommands$$), $c1$$2_sliceBounds$$ - $gapCount_ry$$14$$ * window.Math.cos($delta$$6_pathCommands$$), $JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_funnelWidth$ - 
    $ar$$22_offset$$18$$ - $is3D_rx$$18$$ * window.Math.sin($barCommands_gamma$$), $c1$$2_sliceBounds$$ - $gapCount_ry$$14$$ * window.Math.cos($barCommands_gamma$$), $JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_funnelWidth$ - $ar$$22_offset$$18$$ - $is3D_rx$$18$$ * window.Math.sin($barCommands_gamma$$), $c2$$2$$ + $gapCount_ry$$14$$ * window.Math.cos($barCommands_gamma$$), $JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_funnelWidth$ - $ar$$22_offset$$18$$ - $is3D_rx$$18$$ * window.Math.sin($delta$$6_pathCommands$$), 
    $c2$$2$$ + $gapCount_ry$$14$$ * window.Math.cos($delta$$6_pathCommands$$)], $delta$$6_pathCommands$$ = window.DvtPathUtils.moveTo($ar$$22_offset$$18$$[0], $ar$$22_offset$$18$$[1]), $barCommands_gamma$$ = D.$JSCompiler_alias_NULL$$, $delta$$6_pathCommands$$ += window.DvtPathUtils.arcTo($is3D_rx$$18$$, $gapCount_ry$$14$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$, $arcDir1$$, $ar$$22_offset$$18$$[2], $ar$$22_offset$$18$$[3]), $delta$$6_pathCommands$$ += window.DvtPathUtils.lineTo($ar$$22_offset$$18$$[4], 
    $ar$$22_offset$$18$$[5]), $delta$$6_pathCommands$$ += window.DvtPathUtils.arcTo($is3D_rx$$18$$, $gapCount_ry$$14$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$, $arcDir1$$, $ar$$22_offset$$18$$[6], $ar$$22_offset$$18$$[7]), $delta$$6_pathCommands$$ += window.DvtPathUtils.closePath(), $c1$$2_sliceBounds$$ = new D.$DvtRectangle$$(window.Math.min($ar$$22_offset$$18$$[0], $ar$$22_offset$$18$$[2]), $ar$$22_offset$$18$$[5], window.Math.abs($ar$$22_offset$$18$$[0] - $ar$$22_offset$$18$$[2]), window.Math.abs($ar$$22_offset$$18$$[3] - 
    $ar$$22_offset$$18$$[5])), $JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_fillPercent$ != D.$JSCompiler_alias_NULL$$ && ($barBounds_percent$$1$$ = window.Math.max(window.Math.min($JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_fillPercent$, 1), 0), $barCommands_gamma$$ = window.DvtPathUtils.moveTo($ar$$22_offset$$18$$[0], $ar$$22_offset$$18$$[1]), $barCommands_gamma$$ += window.DvtPathUtils.arcTo($is3D_rx$$18$$, $gapCount_ry$$14$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$, $arcDir1$$, 
    $ar$$22_offset$$18$$[2], $ar$$22_offset$$18$$[3]), $barCommands_gamma$$ += window.DvtPathUtils.lineTo($ar$$22_offset$$18$$[4], $ar$$22_offset$$18$$[3] + $barBounds_percent$$1$$ * ($ar$$22_offset$$18$$[5] - $ar$$22_offset$$18$$[3])), $barCommands_gamma$$ = 0.95 < $JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_fillPercent$ ? $barCommands_gamma$$ + window.DvtPathUtils.arcTo($is3D_rx$$18$$, $gapCount_ry$$14$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$, $arcDir1$$, $ar$$22_offset$$18$$[6], $ar$$22_offset$$18$$[1] + 
    $barBounds_percent$$1$$ * ($ar$$22_offset$$18$$[7] - $ar$$22_offset$$18$$[1])) : 0.05 > $JSCompiler_StaticMethods__getPath$self_alpha$$21$$.$_fillPercent$ ? $barCommands_gamma$$ + window.DvtPathUtils.arcTo($is3D_rx$$18$$, $gapCount_ry$$14$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$, $arcDir2$$, $ar$$22_offset$$18$$[6], $ar$$22_offset$$18$$[1] + $barBounds_percent$$1$$ * ($ar$$22_offset$$18$$[7] - $ar$$22_offset$$18$$[1])) : $barCommands_gamma$$ + window.DvtPathUtils.lineTo($ar$$22_offset$$18$$[6], 
    $ar$$22_offset$$18$$[1] + $barBounds_percent$$1$$ * ($ar$$22_offset$$18$$[7] - $ar$$22_offset$$18$$[1])), $barCommands_gamma$$ += window.DvtPathUtils.closePath(), $barBounds_percent$$1$$ = new D.$DvtRectangle$$(window.Math.min($ar$$22_offset$$18$$[0], $ar$$22_offset$$18$$[2]), $ar$$22_offset$$18$$[5] + window.Math.abs($ar$$22_offset$$18$$[3] - $ar$$22_offset$$18$$[5]) * (1 - $barBounds_percent$$1$$), window.Math.abs($ar$$22_offset$$18$$[0] - $ar$$22_offset$$18$$[2]), window.Math.abs($ar$$22_offset$$18$$[3] - 
    $ar$$22_offset$$18$$[5]) * $barBounds_percent$$1$$))
  }
  return{slice:$delta$$6_pathCommands$$, bar:$barCommands_gamma$$, sliceBounds:$c1$$2_sliceBounds$$, barBounds:$barCommands_gamma$$ ? $barBounds_percent$$1$$ : $c1$$2_sliceBounds$$}
};
D.$JSCompiler_StaticMethods__getSliceLabelPosition$$ = function $$JSCompiler_StaticMethods__getSliceLabelPosition$$$($JSCompiler_StaticMethods__getSliceLabelPosition$self$$, $sliceBounds$$2$$) {
  var $displacement$$1$$ = "on" == $JSCompiler_StaticMethods__getSliceLabelPosition$self$$.$_chart$.$getOptions$().styleDefaults.threeDEffect ? 0.12 * ($sliceBounds$$2$$.$h$ * $JSCompiler_StaticMethods__getSliceLabelPosition$self$$.$_funnelWidth$ / $JSCompiler_StaticMethods__getSliceLabelPosition$self$$.$_funnelHeight$) / 2 : 0, $rotationMatrix$$1$$ = new D.$DvtMatrix$$;
  (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods__getSliceLabelPosition$self$$.$_context$) ? ($rotationMatrix$$1$$.rotate(window.Math.PI / 2), $rotationMatrix$$1$$.translate($sliceBounds$$2$$.x + $sliceBounds$$2$$.$w$ / 2 - $displacement$$1$$, $sliceBounds$$2$$.y + $sliceBounds$$2$$.$h$ / 2)) : ($rotationMatrix$$1$$.rotate(3 * window.Math.PI / 2), $rotationMatrix$$1$$.translate($sliceBounds$$2$$.x + $sliceBounds$$2$$.$w$ / 2 + $displacement$$1$$, $sliceBounds$$2$$.y + $sliceBounds$$2$$.$h$ / 
  2));
  return $rotationMatrix$$1$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtFunnelSlice$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getAnimationParams$$() {
  return[this.$_startPercent$, this.$_valuePercent$, this.$_fillPercent$, this.$getAlpha$()]
};
D.$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($ar$$23_cmds$$7$$) {
  this.$_startPercent$ = $ar$$23_cmds$$7$$[0];
  this.$_valuePercent$ = $ar$$23_cmds$$7$$[1];
  this.$_fillPercent$ = this.$_fillPercent$ != D.$JSCompiler_alias_NULL$$ ? $ar$$23_cmds$$7$$[2] : D.$JSCompiler_alias_NULL$$;
  this.$setAlpha$($ar$$23_cmds$$7$$[3]);
  $ar$$23_cmds$$7$$ = (0,D.$JSCompiler_StaticMethods__getPath$$)(this);
  this.$setCmds$($ar$$23_cmds$$7$$.slice);
  $ar$$23_cmds$$7$$.bar && this.$_bar$ && this.$_bar$.$setCmds$($ar$$23_cmds$$7$$.bar);
  this.$_label$ && this.$_label$.$setMatrix$((0,D.$JSCompiler_StaticMethods__getSliceLabelPosition$$)(this, $ar$$23_cmds$$7$$.sliceBounds))
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$14$$) {
  if(this.$_bar$ != D.$JSCompiler_alias_NULL$$) {
    if(this.$IsSelected$ == $selected$$14$$) {
      return
    }
    this.$IsSelected$ = $selected$$14$$;
    this.$_bar$.$setSelected$($selected$$14$$)
  }else {
    D.$DvtFunnelSlice$$.$superclass$.$setSelected$.call(this, $selected$$14$$)
  }
  var $dims$$37$$ = this.$getDimensions$(), $shapeForSelection$$1$$ = this.$_bar$ != D.$JSCompiler_alias_NULL$$ ? this.$_bar$ : this, $w$$24$$ = $dims$$37$$.$w$;
  $selected$$14$$ ? ($shapeForSelection$$1$$.$setScaleX$(($w$$24$$ - 3) / $w$$24$$), $shapeForSelection$$1$$.$setTranslateX$(window.Math.ceil(1.5) + 3 / $w$$24$$ * $dims$$37$$.x)) : ($shapeForSelection$$1$$.$setScaleX$(1), $shapeForSelection$$1$$.$setTranslateX$(0))
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_bar$ != D.$JSCompiler_alias_NULL$$ ? this.$_bar$.$showHoverEffect$() : D.$DvtFunnelSlice$$.$superclass$.$showHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_bar$ != D.$JSCompiler_alias_NULL$$ ? this.$_bar$.$hideHoverEffect$() : D.$DvtFunnelSlice$$.$superclass$.$hideHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$copyShape$ = function $$JSCompiler_prototypeAlias$$$$copyShape$$() {
  return new D.$DvtFunnelSlice$$(this.$_chart$, this.$_seriesIndex$, this.$_numDrawnSeries$, this.$_funnelWidth$, this.$_funnelHeight$, this.$_startPercent$, this.$_valuePercent$, this.$_fillPercent$, this.$_gap$)
};
D.$DvtPieChart$$ = function $$DvtPieChart$$$($chart$$30$$, $availSpace$$27$$, $callback$$82$$, $callbackObj$$46$$) {
  this.Init($chart$$30$$, $availSpace$$27$$, $callback$$82$$, $callbackObj$$46$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPieChart$$, D.$DvtContainer$$, "DvtPieChart");
D.$DvtPieChart$$.prototype.Init = function $$DvtPieChart$$$$Init$($chart$$31$$, $availSpace$$28$$) {
  D.$DvtPieChart$$.$superclass$.Init.call(this, $chart$$31$$.$_context$);
  this.$chart$ = $chart$$31$$;
  this.$_options$ = $chart$$31$$.$getOptions$();
  this.$_frame$ = $availSpace$$28$$.clone();
  $chart$$31$$.$pieChart$ = this;
  this.$_labelPosition$ = this.$_options$.styleDefaults.sliceLabelPosition;
  "auto" == this.$_labelPosition$ && (this.$_labelPosition$ = "outside");
  this.$_center$ = new D.$DvtPoint$$($availSpace$$28$$.x + window.Math.floor($availSpace$$28$$.$w$ / 2), $availSpace$$28$$.y + window.Math.floor($availSpace$$28$$.$h$ / 2));
  var $radiusScale$$1_slices$$inline_5271$$ = "outside" == this.$_labelPosition$ ? 0.38 : 0.45;
  this.$_radiusY$ = this.$_radiusX$ = window.Math.floor(window.Math.min($availSpace$$28$$.$w$, $availSpace$$28$$.$h$) * $radiusScale$$1_slices$$inline_5271$$);
  this.$_depth$ = 0;
  this.$_anchorOffset$ = 90;
  (0,D.$JSCompiler_StaticMethods_is3D$$)(this) && (this.$_depth$ = 0.1 * $availSpace$$28$$.$h$, this.$_center$.y -= window.Math.floor(this.$_depth$ / 2), this.$_radiusY$ *= 0.59);
  for(var $radiusScale$$1_slices$$inline_5271$$ = [], $seriesIndex$$inline_5274_slice$$inline_5272$$, $seriesIndices$$inline_5273$$ = D.$DvtPieChartUtils$$.$getRenderedSeriesIndices$(this.$chart$), $otherValue$$inline_5275$$ = D.$DvtPieChartUtils$$.$getOtherValue$(this.$chart$), $i$$inline_5276$$ = 0;$i$$inline_5276$$ < $seriesIndices$$inline_5273$$.length;$i$$inline_5276$$++) {
    $seriesIndex$$inline_5274_slice$$inline_5272$$ = $seriesIndices$$inline_5273$$[$i$$inline_5276$$], D.$DvtChartStyleUtils$$.$isSeriesRendered$(this.$chart$, $seriesIndex$$inline_5274_slice$$inline_5272$$) && ($seriesIndex$$inline_5274_slice$$inline_5272$$ = new D.$DvtPieSlice$$(this, $seriesIndex$$inline_5274_slice$$inline_5272$$), 0 >= $seriesIndex$$inline_5274_slice$$inline_5272$$.getValue() || $radiusScale$$1_slices$$inline_5271$$.push($seriesIndex$$inline_5274_slice$$inline_5272$$))
  }
  0 < $otherValue$$inline_5275$$ && $radiusScale$$1_slices$$inline_5271$$.push(new D.$DvtPieSlice$$(this));
  (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) && $radiusScale$$1_slices$$inline_5271$$.reverse();
  this.$_slices$ = $radiusScale$$1_slices$$inline_5271$$;
  this.$_shapesContainer$ = new D.$DvtContainer$$(this.$_context$);
  this.$_numSelectedObjsInFront$ = this.$_numFrontObjs$ = 0
};
D.$DvtPieChart$$.prototype.$getOptions$ = (0,D.$JSCompiler_get$$)("$_options$");
D.$DvtPieChart$$.prototype.$processEvent$ = function $$DvtPieChart$$$$$processEvent$$($bHide$$inline_5281_event$$391$$) {
  var $objs$$inline_5279_type$$105$$ = $bHide$$inline_5281_event$$391$$.$getType$();
  if($objs$$inline_5279_type$$105$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$ || $objs$$inline_5279_type$$105$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_SHOW$) {
    if($objs$$inline_5279_type$$105$$ = this.$_slices$, $bHide$$inline_5281_event$$391$$ && $objs$$inline_5279_type$$105$$) {
      var $category$$inline_5280$$ = $bHide$$inline_5281_event$$391$$.$_category$;
      $bHide$$inline_5281_event$$391$$ = $bHide$$inline_5281_event$$391$$.$getType$() === D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$;
      for(var $i$$inline_5282$$ = 0;$i$$inline_5282$$ < $objs$$inline_5279_type$$105$$.length;$i$$inline_5282$$++) {
        var $displayables$$inline_10439_obj$$inline_5283$$ = $objs$$inline_5279_type$$105$$[$i$$inline_5282$$];
        if($displayables$$inline_10439_obj$$inline_5283$$ && $displayables$$inline_10439_obj$$inline_5283$$.$getCategories$ && 0 <= D.$DvtArrayUtils$$.$getIndex$($displayables$$inline_10439_obj$$inline_5283$$.$getCategories$(), $category$$inline_5280$$)) {
          var $displayables$$inline_5284$$ = $displayables$$inline_10439_obj$$inline_5283$$.$getDisplayables$($displayables$$inline_5284$$), $displayables$$inline_10439_obj$$inline_5283$$ = $displayables$$inline_5284$$, $bVisible$$inline_10440$$ = !$bHide$$inline_5281_event$$391$$;
          if($displayables$$inline_10439_obj$$inline_5283$$) {
            for(var $i$$inline_10441$$ = 0;$i$$inline_10441$$ < $displayables$$inline_10439_obj$$inline_5283$$.length;$i$$inline_10441$$++) {
              $displayables$$inline_10439_obj$$inline_5283$$[$i$$inline_10441$$].$setVisible$($bVisible$$inline_10440$$)
            }
          }
        }
      }
    }
  }else {
    ("categoryRollOver" == $objs$$inline_5279_type$$105$$ || "categoryRollOut" == $objs$$inline_5279_type$$105$$) && (0,D.$DvtCategoryRolloverHandler$processEvent$$)($bHide$$inline_5281_event$$391$$, this.$_slices$)
  }
};
D.$DvtPieChart$$.prototype.$highlight$ = function $$DvtPieChart$$$$$highlight$$($categories$$3$$) {
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($categories$$3$$, this.$_slices$)
};
(0,D.$goog$exportSymbol$$)("DvtPieChart.prototype.highlight", D.$DvtPieChart$$.prototype.$highlight$);
D.$DvtPieChart$$.prototype.$render$ = function $$DvtPieChart$$$$$render$$() {
  var $handler$$inline_5329_shadow$$7$$;
  this.contains(this.$_shapesContainer$) || (this.$_shapesContainer$ || (this.$_shapesContainer$ = new D.$DvtContainer$$(this.$_context$)), this.$addChild$(this.$_shapesContainer$), !(0,D.$JSCompiler_StaticMethods_is3D$$)(this) && "skyros" == this.$getSkin$() && ($handler$$inline_5329_shadow$$7$$ = new D.$DvtShadow$$(D.$DvtColorUtils$$.$makeRGBA$(78, 87, 101, 0.45), 4, 7, 7, 54, 2, 3, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$)));
  var $i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$ = this.$_slices$, $anchorOffset$$inline_5287_angle$$inline_5290_arColors$$inline_5305_lastSliceIndexToProcess$$inline_5325_rotateIdx$$inline_5318_topFill$$inline_5300$$ = this.$_anchorOffset$, $JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$, $crustFill$$inline_5311_j$$inline_5333_lateralFill$$inline_5301_nSlices$$inline_5316_slice$$inline_5289$$, 
  $angleStart$$inline_5319_arAlphas$$inline_5306_arc$$inline_5291_color$$inline_5298_percentage$$inline_5293_rotatedSlices$$inline_5323$$ = 0, $angleExtent$$inline_5320_fillType$$inline_5297_nSlices$$inline_5292_peerId$$inline_5334_sideFill$$inline_5310_slice$$inline_5317_sliceSpanEnd$$inline_5321$$ = $i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$ ? $i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$.length : 0;
  360 < $anchorOffset$$inline_5287_angle$$inline_5290_arColors$$inline_5305_lastSliceIndexToProcess$$inline_5325_rotateIdx$$inline_5318_topFill$$inline_5300$$ && ($anchorOffset$$inline_5287_angle$$inline_5290_arColors$$inline_5305_lastSliceIndexToProcess$$inline_5325_rotateIdx$$inline_5318_topFill$$inline_5300$$ -= 360);
  0 > $anchorOffset$$inline_5287_angle$$inline_5290_arColors$$inline_5305_lastSliceIndexToProcess$$inline_5325_rotateIdx$$inline_5318_topFill$$inline_5300$$ && ($anchorOffset$$inline_5287_angle$$inline_5290_arColors$$inline_5305_lastSliceIndexToProcess$$inline_5325_rotateIdx$$inline_5318_topFill$$inline_5300$$ += 360);
  var $accumAngle$$inline_5324_dataTotal$$inline_5294_grAngle$$inline_5303_pattern$$inline_5299_slices$$inline_5313_useGradientFill$$inline_5309$$ = $angleStart$$inline_5319_arAlphas$$inline_5306_arc$$inline_5291_color$$inline_5298_percentage$$inline_5293_rotatedSlices$$inline_5323$$ = 0;
  0 < $angleExtent$$inline_5320_fillType$$inline_5297_nSlices$$inline_5292_peerId$$inline_5334_sideFill$$inline_5310_slice$$inline_5317_sliceSpanEnd$$inline_5321$$ && ($accumAngle$$inline_5324_dataTotal$$inline_5294_grAngle$$inline_5303_pattern$$inline_5299_slices$$inline_5313_useGradientFill$$inline_5309$$ = $i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$[0].$_pieChart$.$getTotalValue$());
  for($JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$ = 0;$JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$ < $angleExtent$$inline_5320_fillType$$inline_5297_nSlices$$inline_5292_peerId$$inline_5334_sideFill$$inline_5310_slice$$inline_5317_sliceSpanEnd$$inline_5321$$;$JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$++) {
    $crustFill$$inline_5311_j$$inline_5333_lateralFill$$inline_5301_nSlices$$inline_5316_slice$$inline_5289$$ = $i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$[$JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$], window.value = $crustFill$$inline_5311_j$$inline_5333_lateralFill$$inline_5301_nSlices$$inline_5316_slice$$inline_5289$$.getValue(), $angleStart$$inline_5319_arAlphas$$inline_5306_arc$$inline_5291_color$$inline_5298_percentage$$inline_5293_rotatedSlices$$inline_5323$$ = 
    0 == $accumAngle$$inline_5324_dataTotal$$inline_5294_grAngle$$inline_5303_pattern$$inline_5299_slices$$inline_5313_useGradientFill$$inline_5309$$ ? 0 : 100 * (window.Math.abs(window.value) / $accumAngle$$inline_5324_dataTotal$$inline_5294_grAngle$$inline_5303_pattern$$inline_5299_slices$$inline_5313_useGradientFill$$inline_5309$$), $angleStart$$inline_5319_arAlphas$$inline_5306_arc$$inline_5291_color$$inline_5298_percentage$$inline_5293_rotatedSlices$$inline_5323$$ *= 3.6, $anchorOffset$$inline_5287_angle$$inline_5290_arColors$$inline_5305_lastSliceIndexToProcess$$inline_5325_rotateIdx$$inline_5318_topFill$$inline_5300$$ -= 
    $angleStart$$inline_5319_arAlphas$$inline_5306_arc$$inline_5291_color$$inline_5298_percentage$$inline_5293_rotatedSlices$$inline_5323$$, 0 > $anchorOffset$$inline_5287_angle$$inline_5290_arColors$$inline_5305_lastSliceIndexToProcess$$inline_5325_rotateIdx$$inline_5318_topFill$$inline_5300$$ && ($anchorOffset$$inline_5287_angle$$inline_5290_arColors$$inline_5305_lastSliceIndexToProcess$$inline_5325_rotateIdx$$inline_5318_topFill$$inline_5300$$ += 360), $crustFill$$inline_5311_j$$inline_5333_lateralFill$$inline_5301_nSlices$$inline_5316_slice$$inline_5289$$.$setAngleStart$($anchorOffset$$inline_5287_angle$$inline_5290_arColors$$inline_5305_lastSliceIndexToProcess$$inline_5325_rotateIdx$$inline_5318_topFill$$inline_5300$$), 
    $crustFill$$inline_5311_j$$inline_5333_lateralFill$$inline_5301_nSlices$$inline_5316_slice$$inline_5289$$.$setAngleExtent$($angleStart$$inline_5319_arAlphas$$inline_5306_arc$$inline_5291_color$$inline_5298_percentage$$inline_5293_rotatedSlices$$inline_5323$$), $anchorOffset$$inline_5287_angle$$inline_5290_arColors$$inline_5305_lastSliceIndexToProcess$$inline_5325_rotateIdx$$inline_5318_topFill$$inline_5300$$ = $crustFill$$inline_5311_j$$inline_5333_lateralFill$$inline_5301_nSlices$$inline_5316_slice$$inline_5289$$.$getAngleStart$()
  }
  for($i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$ = 0;$i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$ < this.$_slices$.length;$i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$++) {
    $JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$ = this.$_slices$[$i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$];
    $angleExtent$$inline_5320_fillType$$inline_5297_nSlices$$inline_5292_peerId$$inline_5334_sideFill$$inline_5310_slice$$inline_5317_sliceSpanEnd$$inline_5321$$ = $JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$.$_bFillerSlice$ ? "color" : D.$DvtChartStyleUtils$$.$getSeriesEffect$($JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$.$_chart$);
    $angleStart$$inline_5319_arAlphas$$inline_5306_arc$$inline_5291_color$$inline_5298_percentage$$inline_5293_rotatedSlices$$inline_5323$$ = $JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$.$getFillColor$();
    $accumAngle$$inline_5324_dataTotal$$inline_5294_grAngle$$inline_5303_pattern$$inline_5299_slices$$inline_5313_useGradientFill$$inline_5309$$ = $JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$.$getFillPattern$();
    $crustFill$$inline_5311_j$$inline_5333_lateralFill$$inline_5301_nSlices$$inline_5316_slice$$inline_5289$$ = $anchorOffset$$inline_5287_angle$$inline_5290_arColors$$inline_5305_lastSliceIndexToProcess$$inline_5325_rotateIdx$$inline_5318_topFill$$inline_5300$$ = D.$JSCompiler_alias_VOID$$;
    if("pattern" == $angleExtent$$inline_5320_fillType$$inline_5297_nSlices$$inline_5292_peerId$$inline_5334_sideFill$$inline_5310_slice$$inline_5317_sliceSpanEnd$$inline_5321$$ || $accumAngle$$inline_5324_dataTotal$$inline_5294_grAngle$$inline_5303_pattern$$inline_5299_slices$$inline_5313_useGradientFill$$inline_5309$$ != D.$JSCompiler_alias_NULL$$) {
      $anchorOffset$$inline_5287_angle$$inline_5290_arColors$$inline_5305_lastSliceIndexToProcess$$inline_5325_rotateIdx$$inline_5318_topFill$$inline_5300$$ = new D.$DvtPatternFill$$($accumAngle$$inline_5324_dataTotal$$inline_5294_grAngle$$inline_5303_pattern$$inline_5299_slices$$inline_5313_useGradientFill$$inline_5309$$, $angleStart$$inline_5319_arAlphas$$inline_5306_arc$$inline_5291_color$$inline_5298_percentage$$inline_5293_rotatedSlices$$inline_5323$$)
    }else {
      if("gradient" == $angleExtent$$inline_5320_fillType$$inline_5297_nSlices$$inline_5292_peerId$$inline_5334_sideFill$$inline_5310_slice$$inline_5317_sliceSpanEnd$$inline_5321$$) {
        var $arRatios$$inline_5307_skin$$inline_5302$$ = $JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$.$_pieChart$.$getSkin$(), $accumAngle$$inline_5324_dataTotal$$inline_5294_grAngle$$inline_5303_pattern$$inline_5299_slices$$inline_5313_useGradientFill$$inline_5309$$ = "skyros" == $arRatios$$inline_5307_skin$$inline_5302$$ ? 297 : 270, $arBounds$$inline_5308_style$$inline_5304$$ = !(0,D.$JSCompiler_StaticMethods_is3D$$)($JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$.$_pieChart$) ? 
        "2D" : "3D", $anchorOffset$$inline_5287_angle$$inline_5290_arColors$$inline_5305_lastSliceIndexToProcess$$inline_5325_rotateIdx$$inline_5318_topFill$$inline_5300$$ = D.$DvtPieRenderUtils$$.$getGradientColors$(D.$DvtColorUtils$$.$getRGB$($angleStart$$inline_5319_arAlphas$$inline_5306_arc$$inline_5291_color$$inline_5298_percentage$$inline_5293_rotatedSlices$$inline_5323$$), $arBounds$$inline_5308_style$$inline_5304$$, $arRatios$$inline_5307_skin$$inline_5302$$), $angleStart$$inline_5319_arAlphas$$inline_5306_arc$$inline_5291_color$$inline_5298_percentage$$inline_5293_rotatedSlices$$inline_5323$$ = 
        D.$DvtPieRenderUtils$$.$getGradientAlphas$(D.$DvtColorUtils$$.$getAlpha$($angleStart$$inline_5319_arAlphas$$inline_5306_arc$$inline_5291_color$$inline_5298_percentage$$inline_5293_rotatedSlices$$inline_5323$$), $arBounds$$inline_5308_style$$inline_5304$$), $arRatios$$inline_5307_skin$$inline_5302$$ = D.$DvtPieRenderUtils$$.$getGradientRatios$($arBounds$$inline_5308_style$$inline_5304$$, $arRatios$$inline_5307_skin$$inline_5302$$), $arBounds$$inline_5308_style$$inline_5304$$ = [window.Math.floor($JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$.$_pieChart$.$getCenter$().x - 
        $JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$.$_radiusX$), window.Math.floor($JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$.$_pieChart$.$getCenter$().y - $JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$.$_radiusY$), window.Math.ceil(2 * $JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$.$_radiusX$), 
        window.Math.ceil(2 * $JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$.$_radiusY$)], $anchorOffset$$inline_5287_angle$$inline_5290_arColors$$inline_5305_lastSliceIndexToProcess$$inline_5325_rotateIdx$$inline_5318_topFill$$inline_5300$$ = new D.$DvtLinearGradientFill$$($accumAngle$$inline_5324_dataTotal$$inline_5294_grAngle$$inline_5303_pattern$$inline_5299_slices$$inline_5313_useGradientFill$$inline_5309$$, $anchorOffset$$inline_5287_angle$$inline_5290_arColors$$inline_5305_lastSliceIndexToProcess$$inline_5325_rotateIdx$$inline_5318_topFill$$inline_5300$$, 
        $angleStart$$inline_5319_arAlphas$$inline_5306_arc$$inline_5291_color$$inline_5298_percentage$$inline_5293_rotatedSlices$$inline_5323$$, $arRatios$$inline_5307_skin$$inline_5302$$, $arBounds$$inline_5308_style$$inline_5304$$)
      }else {
        $anchorOffset$$inline_5287_angle$$inline_5290_arColors$$inline_5305_lastSliceIndexToProcess$$inline_5325_rotateIdx$$inline_5318_topFill$$inline_5300$$ = new D.$DvtSolidFill$$($angleStart$$inline_5319_arAlphas$$inline_5306_arc$$inline_5291_color$$inline_5298_percentage$$inline_5293_rotatedSlices$$inline_5323$$), $crustFill$$inline_5311_j$$inline_5333_lateralFill$$inline_5301_nSlices$$inline_5316_slice$$inline_5289$$ = new D.$DvtSolidFill$$(D.$DvtColorUtils$$.$getDarker$($angleStart$$inline_5319_arAlphas$$inline_5306_arc$$inline_5291_color$$inline_5298_percentage$$inline_5293_rotatedSlices$$inline_5323$$, 
        0.6))
      }
    }
    $JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$.$_topSurface$ = D.$DvtPieRenderUtils$$.$createTopSurface$($JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$, $anchorOffset$$inline_5287_angle$$inline_5290_arColors$$inline_5305_lastSliceIndexToProcess$$inline_5325_rotateIdx$$inline_5318_topFill$$inline_5300$$);
    if((0,D.$JSCompiler_StaticMethods_is3D$$)($JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$.$_pieChart$) && (0 < $JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$.$_pieChart$.$getDepth$() || $JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$.$_radiusX$ != $JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$.$radiusY$)) {
      $angleExtent$$inline_5320_fillType$$inline_5297_nSlices$$inline_5292_peerId$$inline_5334_sideFill$$inline_5310_slice$$inline_5317_sliceSpanEnd$$inline_5321$$ = ($accumAngle$$inline_5324_dataTotal$$inline_5294_grAngle$$inline_5303_pattern$$inline_5299_slices$$inline_5313_useGradientFill$$inline_5309$$ = "gradient" == $angleExtent$$inline_5320_fillType$$inline_5297_nSlices$$inline_5292_peerId$$inline_5334_sideFill$$inline_5310_slice$$inline_5317_sliceSpanEnd$$inline_5321$$ || "pattern" == $angleExtent$$inline_5320_fillType$$inline_5297_nSlices$$inline_5292_peerId$$inline_5334_sideFill$$inline_5310_slice$$inline_5317_sliceSpanEnd$$inline_5321$$) ? 
      D.$DvtPieRenderUtils$$.$generateLateralGradientFill$($JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$, D.$DvtPieRenderUtils$$.$SIDE$) : $crustFill$$inline_5311_j$$inline_5333_lateralFill$$inline_5301_nSlices$$inline_5316_slice$$inline_5289$$, $crustFill$$inline_5311_j$$inline_5333_lateralFill$$inline_5301_nSlices$$inline_5316_slice$$inline_5289$$ = $accumAngle$$inline_5324_dataTotal$$inline_5294_grAngle$$inline_5303_pattern$$inline_5299_slices$$inline_5313_useGradientFill$$inline_5309$$ ? 
      D.$DvtPieRenderUtils$$.$generateLateralGradientFill$($JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$, D.$DvtPieRenderUtils$$.$CRUST$) : $crustFill$$inline_5311_j$$inline_5333_lateralFill$$inline_5301_nSlices$$inline_5316_slice$$inline_5289$$, $JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$.$_leftSurface$ = D.$DvtPieRenderUtils$$.$createLateralSurface$($JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$, 
      D.$DvtPieRenderUtils$$.$SURFACE_LEFT$, $angleExtent$$inline_5320_fillType$$inline_5297_nSlices$$inline_5292_peerId$$inline_5334_sideFill$$inline_5310_slice$$inline_5317_sliceSpanEnd$$inline_5321$$), $JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$.$_rightSurface$ = D.$DvtPieRenderUtils$$.$createLateralSurface$($JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$, D.$DvtPieRenderUtils$$.$SURFACE_RIGHT$, 
      $angleExtent$$inline_5320_fillType$$inline_5297_nSlices$$inline_5292_peerId$$inline_5334_sideFill$$inline_5310_slice$$inline_5317_sliceSpanEnd$$inline_5321$$), $JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$.$_crustSurface$ = D.$DvtPieRenderUtils$$.$createLateralSurface$($JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$, D.$DvtPieRenderUtils$$.$SURFACE_CRUST$, $crustFill$$inline_5311_j$$inline_5333_lateralFill$$inline_5301_nSlices$$inline_5316_slice$$inline_5289$$)
    }
  }
  $accumAngle$$inline_5324_dataTotal$$inline_5294_grAngle$$inline_5303_pattern$$inline_5299_slices$$inline_5313_useGradientFill$$inline_5309$$ = this.$_slices$;
  $JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$ = [];
  $crustFill$$inline_5311_j$$inline_5333_lateralFill$$inline_5301_nSlices$$inline_5316_slice$$inline_5289$$ = $accumAngle$$inline_5324_dataTotal$$inline_5294_grAngle$$inline_5303_pattern$$inline_5299_slices$$inline_5313_useGradientFill$$inline_5309$$ ? $accumAngle$$inline_5324_dataTotal$$inline_5294_grAngle$$inline_5303_pattern$$inline_5299_slices$$inline_5313_useGradientFill$$inline_5309$$.length : 0;
  for(var $anchorOffset$$inline_5287_angle$$inline_5290_arColors$$inline_5305_lastSliceIndexToProcess$$inline_5325_rotateIdx$$inline_5318_topFill$$inline_5300$$ = -1, $accumAngleThreshold$$inline_5326_selectedIds$$inline_5331_sliceSpanBeforeNoon$$inline_5322$$, $i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$ = 0;$i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$ < $crustFill$$inline_5311_j$$inline_5333_lateralFill$$inline_5301_nSlices$$inline_5316_slice$$inline_5289$$;$i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$++) {
    if($angleExtent$$inline_5320_fillType$$inline_5297_nSlices$$inline_5292_peerId$$inline_5334_sideFill$$inline_5310_slice$$inline_5317_sliceSpanEnd$$inline_5321$$ = $accumAngle$$inline_5324_dataTotal$$inline_5294_grAngle$$inline_5303_pattern$$inline_5299_slices$$inline_5313_useGradientFill$$inline_5309$$[$i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$], $angleStart$$inline_5319_arAlphas$$inline_5306_arc$$inline_5291_color$$inline_5298_percentage$$inline_5293_rotatedSlices$$inline_5323$$ = 
    $angleExtent$$inline_5320_fillType$$inline_5297_nSlices$$inline_5292_peerId$$inline_5334_sideFill$$inline_5310_slice$$inline_5317_sliceSpanEnd$$inline_5321$$.$getAngleStart$(), $angleExtent$$inline_5320_fillType$$inline_5297_nSlices$$inline_5292_peerId$$inline_5334_sideFill$$inline_5310_slice$$inline_5317_sliceSpanEnd$$inline_5321$$ = $angleExtent$$inline_5320_fillType$$inline_5297_nSlices$$inline_5292_peerId$$inline_5334_sideFill$$inline_5310_slice$$inline_5317_sliceSpanEnd$$inline_5321$$.$getAngleExtent$(), 
    $angleExtent$$inline_5320_fillType$$inline_5297_nSlices$$inline_5292_peerId$$inline_5334_sideFill$$inline_5310_slice$$inline_5317_sliceSpanEnd$$inline_5321$$ = $angleStart$$inline_5319_arAlphas$$inline_5306_arc$$inline_5291_color$$inline_5298_percentage$$inline_5293_rotatedSlices$$inline_5323$$ + $angleExtent$$inline_5320_fillType$$inline_5297_nSlices$$inline_5292_peerId$$inline_5334_sideFill$$inline_5310_slice$$inline_5317_sliceSpanEnd$$inline_5321$$, 360 < $angleExtent$$inline_5320_fillType$$inline_5297_nSlices$$inline_5292_peerId$$inline_5334_sideFill$$inline_5310_slice$$inline_5317_sliceSpanEnd$$inline_5321$$ && 
    ($angleExtent$$inline_5320_fillType$$inline_5297_nSlices$$inline_5292_peerId$$inline_5334_sideFill$$inline_5310_slice$$inline_5317_sliceSpanEnd$$inline_5321$$ -= 360), 0 > $angleExtent$$inline_5320_fillType$$inline_5297_nSlices$$inline_5292_peerId$$inline_5334_sideFill$$inline_5310_slice$$inline_5317_sliceSpanEnd$$inline_5321$$ && ($angleExtent$$inline_5320_fillType$$inline_5297_nSlices$$inline_5292_peerId$$inline_5334_sideFill$$inline_5310_slice$$inline_5317_sliceSpanEnd$$inline_5321$$ += 360), 
    90 == $angleExtent$$inline_5320_fillType$$inline_5297_nSlices$$inline_5292_peerId$$inline_5334_sideFill$$inline_5310_slice$$inline_5317_sliceSpanEnd$$inline_5321$$ || 90 > $angleStart$$inline_5319_arAlphas$$inline_5306_arc$$inline_5291_color$$inline_5298_percentage$$inline_5293_rotatedSlices$$inline_5323$$ && 90 < $angleExtent$$inline_5320_fillType$$inline_5297_nSlices$$inline_5292_peerId$$inline_5334_sideFill$$inline_5310_slice$$inline_5317_sliceSpanEnd$$inline_5321$$) {
      $anchorOffset$$inline_5287_angle$$inline_5290_arColors$$inline_5305_lastSliceIndexToProcess$$inline_5325_rotateIdx$$inline_5318_topFill$$inline_5300$$ = $i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$;
      $accumAngleThreshold$$inline_5326_selectedIds$$inline_5331_sliceSpanBeforeNoon$$inline_5322$$ = $angleExtent$$inline_5320_fillType$$inline_5297_nSlices$$inline_5292_peerId$$inline_5334_sideFill$$inline_5310_slice$$inline_5317_sliceSpanEnd$$inline_5321$$ - 90;
      break
    }
  }
  $angleStart$$inline_5319_arAlphas$$inline_5306_arc$$inline_5291_color$$inline_5298_percentage$$inline_5293_rotatedSlices$$inline_5323$$ = [];
  for($i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$ = $anchorOffset$$inline_5287_angle$$inline_5290_arColors$$inline_5305_lastSliceIndexToProcess$$inline_5325_rotateIdx$$inline_5318_topFill$$inline_5300$$;$i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$ < $crustFill$$inline_5311_j$$inline_5333_lateralFill$$inline_5301_nSlices$$inline_5316_slice$$inline_5289$$;$i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$++) {
    $angleStart$$inline_5319_arAlphas$$inline_5306_arc$$inline_5291_color$$inline_5298_percentage$$inline_5293_rotatedSlices$$inline_5323$$.push($accumAngle$$inline_5324_dataTotal$$inline_5294_grAngle$$inline_5303_pattern$$inline_5299_slices$$inline_5313_useGradientFill$$inline_5309$$[$i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$])
  }
  for($i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$ = 0;$i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$ < $anchorOffset$$inline_5287_angle$$inline_5290_arColors$$inline_5305_lastSliceIndexToProcess$$inline_5325_rotateIdx$$inline_5318_topFill$$inline_5300$$;$i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$++) {
    $angleStart$$inline_5319_arAlphas$$inline_5306_arc$$inline_5291_color$$inline_5298_percentage$$inline_5293_rotatedSlices$$inline_5323$$.push($accumAngle$$inline_5324_dataTotal$$inline_5294_grAngle$$inline_5303_pattern$$inline_5299_slices$$inline_5313_useGradientFill$$inline_5309$$[$i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$])
  }
  $anchorOffset$$inline_5287_angle$$inline_5290_arColors$$inline_5305_lastSliceIndexToProcess$$inline_5325_rotateIdx$$inline_5318_topFill$$inline_5300$$ = $accumAngle$$inline_5324_dataTotal$$inline_5294_grAngle$$inline_5303_pattern$$inline_5299_slices$$inline_5313_useGradientFill$$inline_5309$$ = 0;
  $accumAngleThreshold$$inline_5326_selectedIds$$inline_5331_sliceSpanBeforeNoon$$inline_5322$$ = 180 + $accumAngleThreshold$$inline_5326_selectedIds$$inline_5331_sliceSpanBeforeNoon$$inline_5322$$;
  for($i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$ = 0;$i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$ < $crustFill$$inline_5311_j$$inline_5333_lateralFill$$inline_5301_nSlices$$inline_5316_slice$$inline_5289$$;$i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$++) {
    if($angleExtent$$inline_5320_fillType$$inline_5297_nSlices$$inline_5292_peerId$$inline_5334_sideFill$$inline_5310_slice$$inline_5317_sliceSpanEnd$$inline_5321$$ = $angleStart$$inline_5319_arAlphas$$inline_5306_arc$$inline_5291_color$$inline_5298_percentage$$inline_5293_rotatedSlices$$inline_5323$$[$i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$]) {
      if($accumAngle$$inline_5324_dataTotal$$inline_5294_grAngle$$inline_5303_pattern$$inline_5299_slices$$inline_5313_useGradientFill$$inline_5309$$ + $angleExtent$$inline_5320_fillType$$inline_5297_nSlices$$inline_5292_peerId$$inline_5334_sideFill$$inline_5310_slice$$inline_5317_sliceSpanEnd$$inline_5321$$.$getAngleExtent$() > $accumAngleThreshold$$inline_5326_selectedIds$$inline_5331_sliceSpanBeforeNoon$$inline_5322$$) {
        $anchorOffset$$inline_5287_angle$$inline_5290_arColors$$inline_5305_lastSliceIndexToProcess$$inline_5325_rotateIdx$$inline_5318_topFill$$inline_5300$$ = $i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$;
        break
      }
      $JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$.push($angleExtent$$inline_5320_fillType$$inline_5297_nSlices$$inline_5292_peerId$$inline_5334_sideFill$$inline_5310_slice$$inline_5317_sliceSpanEnd$$inline_5321$$);
      $accumAngle$$inline_5324_dataTotal$$inline_5294_grAngle$$inline_5303_pattern$$inline_5299_slices$$inline_5313_useGradientFill$$inline_5309$$ += $angleExtent$$inline_5320_fillType$$inline_5297_nSlices$$inline_5292_peerId$$inline_5334_sideFill$$inline_5310_slice$$inline_5317_sliceSpanEnd$$inline_5321$$.$getAngleExtent$()
    }
  }
  for($i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$ = $crustFill$$inline_5311_j$$inline_5333_lateralFill$$inline_5301_nSlices$$inline_5316_slice$$inline_5289$$ - 1;$i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$ >= $anchorOffset$$inline_5287_angle$$inline_5290_arColors$$inline_5305_lastSliceIndexToProcess$$inline_5325_rotateIdx$$inline_5318_topFill$$inline_5300$$;$i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$--) {
    ($angleExtent$$inline_5320_fillType$$inline_5297_nSlices$$inline_5292_peerId$$inline_5334_sideFill$$inline_5310_slice$$inline_5317_sliceSpanEnd$$inline_5321$$ = $angleStart$$inline_5319_arAlphas$$inline_5306_arc$$inline_5291_color$$inline_5298_percentage$$inline_5293_rotatedSlices$$inline_5323$$[$i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$]) && $JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$.push($angleExtent$$inline_5320_fillType$$inline_5297_nSlices$$inline_5292_peerId$$inline_5334_sideFill$$inline_5310_slice$$inline_5317_sliceSpanEnd$$inline_5321$$)
  }
  this.$_duringDisplayAnim$ || D.$DvtPieLabelUtils$$.$layoutLabelsAndFeelers$(this);
  for($i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$ = 0;$i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$ < $JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$.length;$i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$++) {
    $JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$[$i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$].$render$(this.$_duringDisplayAnim$)
  }
  (0,D.$DvtAgent$isPlatformWebkit$$)() || $handler$$inline_5329_shadow$$7$$ && (0,D.$JSCompiler_StaticMethods_addDrawEffect$$)(this.$_shapesContainer$, $handler$$inline_5329_shadow$$7$$);
  if($handler$$inline_5329_shadow$$7$$ = this.$chart$.$getSelectionHandler$()) {
    $i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$ = D.$DvtChartDataUtils$$.$getInitialSelection$(this.$chart$);
    $accumAngleThreshold$$inline_5326_selectedIds$$inline_5331_sliceSpanBeforeNoon$$inline_5322$$ = [];
    for($JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$ = 0;$JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$ < $i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$.length;$JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$++) {
      for($crustFill$$inline_5311_j$$inline_5333_lateralFill$$inline_5301_nSlices$$inline_5316_slice$$inline_5289$$ = 0;$crustFill$$inline_5311_j$$inline_5333_lateralFill$$inline_5301_nSlices$$inline_5316_slice$$inline_5289$$ < this.$_slices$.length;$crustFill$$inline_5311_j$$inline_5333_lateralFill$$inline_5301_nSlices$$inline_5316_slice$$inline_5289$$++) {
        ($angleExtent$$inline_5320_fillType$$inline_5297_nSlices$$inline_5292_peerId$$inline_5334_sideFill$$inline_5310_slice$$inline_5317_sliceSpanEnd$$inline_5321$$ = this.$_slices$[$crustFill$$inline_5311_j$$inline_5333_lateralFill$$inline_5301_nSlices$$inline_5316_slice$$inline_5289$$].getId()) && ($i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$[$JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$].id && 
        $angleExtent$$inline_5320_fillType$$inline_5297_nSlices$$inline_5292_peerId$$inline_5334_sideFill$$inline_5310_slice$$inline_5317_sliceSpanEnd$$inline_5321$$.getId() == $i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$[$JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$].id || $angleExtent$$inline_5320_fillType$$inline_5297_nSlices$$inline_5292_peerId$$inline_5334_sideFill$$inline_5310_slice$$inline_5317_sliceSpanEnd$$inline_5321$$.$getSeries$() == 
        $i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$[$JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$].series && $angleExtent$$inline_5320_fillType$$inline_5297_nSlices$$inline_5292_peerId$$inline_5334_sideFill$$inline_5310_slice$$inline_5317_sliceSpanEnd$$inline_5321$$.$getGroup$() == $i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$[$JSCompiler_StaticMethods_preRender$self$$inline_5296_i$$inline_5288_i$$inline_5332_zOrderedSlices$$inline_5314$$].group) && 
        $accumAngleThreshold$$inline_5326_selectedIds$$inline_5331_sliceSpanBeforeNoon$$inline_5322$$.push($angleExtent$$inline_5320_fillType$$inline_5297_nSlices$$inline_5292_peerId$$inline_5334_sideFill$$inline_5310_slice$$inline_5317_sliceSpanEnd$$inline_5321$$)
      }
    }
    D.$DvtPieChartUtils$$.$isOtherSliceSelected$(this.$chart$, $i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$) && ($i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$ = D.$DvtPieChartUtils$$.$getOtherSliceId$(this.$chart$), $accumAngleThreshold$$inline_5326_selectedIds$$inline_5331_sliceSpanBeforeNoon$$inline_5322$$.push($i$$446_i$$inline_5315_otherPeerId$$inline_5335_selected$$inline_5330_slices$$inline_5286$$));
    (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($handler$$inline_5329_shadow$$7$$, $accumAngleThreshold$$inline_5326_selectedIds$$inline_5331_sliceSpanBeforeNoon$$inline_5322$$, this.$_slices$)
  }
};
D.$DvtPieChart$$.prototype.$getTotalValue$ = function $$DvtPieChart$$$$$getTotalValue$$() {
  for(var $total$$8$$ = 0, $i$$447$$ = 0;$i$$447$$ < this.$_slices$.length;$i$$447$$++) {
    var $sliceValue$$ = this.$_slices$[$i$$447$$].getValue();
    0 <= $sliceValue$$ && ($total$$8$$ += $sliceValue$$)
  }
  return $total$$8$$
};
D.$JSCompiler_StaticMethods_is3D$$ = function $$JSCompiler_StaticMethods_is3D$$$($JSCompiler_StaticMethods_is3D$self$$) {
  return"on" == $JSCompiler_StaticMethods_is3D$self$$.$_options$.styleDefaults.threeDEffect
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPieChart$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = function $$JSCompiler_prototypeAlias$$$$getAnimationDuration$$() {
  return D.$DvtChartStyleUtils$$.$getAnimationDuration$(this.$chart$)
};
D.$JSCompiler_prototypeAlias$$.$getDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDisplayAnimation$$() {
  this.$_duringDisplayAnim$ = D.$JSCompiler_alias_TRUE$$;
  for(var $anim$$20_handler$$32$$ = new D.$DvtDataAnimationHandler$$(this.$_context$, this), $ar$$24_labelAnim_renderAnim_slice$$inline_5339$$ = [], $fillerAnim_i$$450_value$$inline_5338$$ = 0;$fillerAnim_i$$450_value$$inline_5338$$ < this.$_slices$.length;$fillerAnim_i$$450_value$$inline_5338$$++) {
    $ar$$24_labelAnim_renderAnim_slice$$inline_5339$$ = $ar$$24_labelAnim_renderAnim_slice$$inline_5339$$.concat((0,D.$JSCompiler_StaticMethods_getLabelAndFeeler$$)(this.$_slices$[$fillerAnim_i$$450_value$$inline_5338$$]))
  }
  $ar$$24_labelAnim_renderAnim_slice$$inline_5339$$ = new D.$DvtAnimFadeIn$$(this.$_context$, $ar$$24_labelAnim_renderAnim_slice$$inline_5339$$, this.$getAnimationDuration$());
  $anim$$20_handler$$32$$.add($ar$$24_labelAnim_renderAnim_slice$$inline_5339$$, 0);
  $fillerAnim_i$$450_value$$inline_5338$$ = this.$getTotalValue$();
  $ar$$24_labelAnim_renderAnim_slice$$inline_5339$$ = new D.$DvtPieSlice$$(this);
  $ar$$24_labelAnim_renderAnim_slice$$inline_5339$$.$_value$ = $fillerAnim_i$$450_value$$inline_5338$$;
  $ar$$24_labelAnim_renderAnim_slice$$inline_5339$$.$_bFillerSlice$ = D.$JSCompiler_alias_TRUE$$;
  $ar$$24_labelAnim_renderAnim_slice$$inline_5339$$.$_fillColor$ = "rgba(255,255,255,0)";
  $ar$$24_labelAnim_renderAnim_slice$$inline_5339$$.$_strokeColor$ = "rgba(255,255,255,0)";
  $ar$$24_labelAnim_renderAnim_slice$$inline_5339$$.$_tooltip$ = D.$JSCompiler_alias_NULL$$;
  $ar$$24_labelAnim_renderAnim_slice$$inline_5339$$.$_id$ = D.$JSCompiler_alias_NULL$$;
  this.$_slices$.push($ar$$24_labelAnim_renderAnim_slice$$inline_5339$$);
  $fillerAnim_i$$450_value$$inline_5338$$ = new D.$DvtCustomAnimation$$(this.$_context$, $ar$$24_labelAnim_renderAnim_slice$$inline_5339$$, this.$getAnimationDuration$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($fillerAnim_i$$450_value$$inline_5338$$.$_animator$, "typeNumberArray", $ar$$24_labelAnim_renderAnim_slice$$inline_5339$$, $ar$$24_labelAnim_renderAnim_slice$$inline_5339$$.$GetAnimationParams$, $ar$$24_labelAnim_renderAnim_slice$$inline_5339$$.$SetAnimationParams$, [0, 0, 0, 0]);
  $fillerAnim_i$$450_value$$inline_5338$$.$setOnEnd$($ar$$24_labelAnim_renderAnim_slice$$inline_5339$$.$_removeDeletedSlice$, $ar$$24_labelAnim_renderAnim_slice$$inline_5339$$);
  $anim$$20_handler$$32$$.add($fillerAnim_i$$450_value$$inline_5338$$, 0);
  for($fillerAnim_i$$450_value$$inline_5338$$ = 0;$fillerAnim_i$$450_value$$inline_5338$$ < this.$_slices$.length - 1;$fillerAnim_i$$450_value$$inline_5338$$++) {
    this.$_slices$[$fillerAnim_i$$450_value$$inline_5338$$].$animateInsert$($anim$$20_handler$$32$$)
  }
  $ar$$24_labelAnim_renderAnim_slice$$inline_5339$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, this.$getAnimationDuration$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($ar$$24_labelAnim_renderAnim_slice$$inline_5339$$.$_animator$, "typeNumberArray", this, this.$_getAnimationParams$, this.$_setAnimationParams$, this.$_getAnimationParams$());
  $anim$$20_handler$$32$$.add($ar$$24_labelAnim_renderAnim_slice$$inline_5339$$, 0);
  this.$_setAnimationParams$();
  $anim$$20_handler$$32$$ = $anim$$20_handler$$32$$.$getAnimation$();
  $anim$$20_handler$$32$$.$setOnEnd$(this.$_restoreLabelPosition$, this);
  return $anim$$20_handler$$32$$
};
D.$JSCompiler_prototypeAlias$$.$_restoreLabelPosition$ = function $$JSCompiler_prototypeAlias$$$$_restoreLabelPosition$$() {
  this.$_duringDisplayAnim$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$getCenter$ = (0,D.$JSCompiler_get$$)("$_center$");
D.$JSCompiler_prototypeAlias$$.$getDepth$ = (0,D.$JSCompiler_get$$)("$_depth$");
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$33$$, $oldPie$$) {
  var $anim$$21_sliceAnim_sliceHandler$$ = new D.$DvtDataAnimationHandler$$(this.$_context$, this);
  (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($anim$$21_sliceAnim_sliceHandler$$, $oldPie$$.$_slices$, this.$_slices$);
  var $anim$$21_sliceAnim_sliceHandler$$ = $anim$$21_sliceAnim_sliceHandler$$.$getAnimation$(), $renderAnim$$1$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, this.$getAnimationDuration$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($renderAnim$$1$$.$_animator$, "typeNumberArray", this, this.$_getAnimationParams$, this.$_setAnimationParams$, this.$_getAnimationParams$());
  $anim$$21_sliceAnim_sliceHandler$$ = new D.$DvtParallelPlayable$$(this.$_context$, $anim$$21_sliceAnim_sliceHandler$$, $renderAnim$$1$$);
  $anim$$21_sliceAnim_sliceHandler$$.$setOnEnd$(this.$_setAnimationParams$, this);
  $handler$$33$$.add($anim$$21_sliceAnim_sliceHandler$$, 0);
  this.$_setAnimationParams$()
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$_getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_getAnimationParams$$() {
  return[1]
};
D.$JSCompiler_prototypeAlias$$.$_setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_setAnimationParams$$() {
  this.$removeChildren$();
  this.$_shapesContainer$ && this.$_shapesContainer$.$destroy$();
  this.$_shapesContainer$ = D.$JSCompiler_alias_NULL$$;
  this.$render$()
};
D.$JSCompiler_prototypeAlias$$.$bringToFrontOfSelection$ = function $$JSCompiler_prototypeAlias$$$$bringToFrontOfSelection$$($slice$$5$$) {
  var $par$$1$$ = $slice$$5$$.$_pieChart$.$_shapesContainer$;
  if($par$$1$$) {
    var $parentChildCount$$1$$ = $par$$1$$.$getNumChildren$();
    1 < $parentChildCount$$1$$ - this.$_numFrontObjs$ && ($par$$1$$.removeChild($slice$$5$$.$_topSurface$[0]), $par$$1$$.$addChildAt$($slice$$5$$.$_topSurface$[0], $parentChildCount$$1$$ - this.$_numFrontObjs$ - 1))
  }
};
D.$JSCompiler_prototypeAlias$$.$pushToBackOfSelection$ = function $$JSCompiler_prototypeAlias$$$$pushToBackOfSelection$$($slice$$6$$) {
  var $len$$19_par$$2$$ = this.$_slices$.length, $counter$$1_newIndex$$1$$ = 0;
  for(window.i = 0;window.i < $len$$19_par$$2$$;window.i++) {
    this.$_slices$[window.i].$isSelected$() && $counter$$1_newIndex$$1$$++
  }
  this.$_numSelectedObjsInFront$ = $counter$$1_newIndex$$1$$;
  if($len$$19_par$$2$$ = $slice$$6$$.$_pieChart$.$_shapesContainer$) {
    $counter$$1_newIndex$$1$$ = $len$$19_par$$2$$.$getNumChildren$() - this.$_numFrontObjs$ - 1 - this.$_numSelectedObjsInFront$, 0 <= $counter$$1_newIndex$$1$$ && ($len$$19_par$$2$$.removeChild($slice$$6$$.$_topSurface$[0]), $len$$19_par$$2$$.$addChildAt$($slice$$6$$.$_topSurface$[0], $counter$$1_newIndex$$1$$))
  }
};
D.$JSCompiler_prototypeAlias$$.$getLabelPosition$ = (0,D.$JSCompiler_get$$)("$_labelPosition$");
D.$JSCompiler_prototypeAlias$$.$getSkin$ = function $$JSCompiler_prototypeAlias$$$$getSkin$$() {
  return this.$_options$.skin
};
D.$DvtPieSlice$$ = function $$DvtPieSlice$$$($pieChart$$, $seriesIndex$$11$$) {
  this.Init($pieChart$$, $seriesIndex$$11$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPieSlice$$, D.$DvtObj$$, "DvtPieSlice");
D.$DvtPieSlice$$.prototype.Init = function $$DvtPieSlice$$$$Init$($pieChart$$1$$, $seriesIndex$$12$$) {
  this.$_pieChart$ = $pieChart$$1$$;
  this.$_chart$ = $pieChart$$1$$.$chart$;
  this.$_angleExtent$ = this.$_angleStart$ = 0;
  this.$_crustSurface$ = this.$_rightSurface$ = this.$_leftSurface$ = this.$_topSurface$ = D.$JSCompiler_alias_NULL$$;
  this.$_explodeOffsetY$ = this.$_explodeOffsetX$ = 0;
  this.$_sliceLabelString$ = this.$_sliceLabel$ = D.$JSCompiler_alias_NULL$$;
  this.$_hasFeeler$ = D.$JSCompiler_alias_FALSE$$;
  this.$_outsideFeelerEnd$ = this.$_outsideFeelerMid$ = this.$_outsideFeelerStart$ = this.$_feelerHoriz$ = this.$_feelerRad$ = D.$JSCompiler_alias_NULL$$;
  this.$_selecting$ = this.$_selected$ = D.$JSCompiler_alias_FALSE$$;
  this.$_radiusX$ = this.$_pieChart$.$_radiusX$;
  this.$_radiusY$ = this.$_pieChart$.$_radiusY$;
  var $dataItem$$6_options$$115$$ = this.$_chart$.$getOptions$();
  $seriesIndex$$12$$ != D.$JSCompiler_alias_NULL$$ ? ($dataItem$$6_options$$115$$ = D.$DvtChartDataUtils$$.$getDataItem$(this.$_chart$, $seriesIndex$$12$$, 0), this.$_value$ = D.$DvtChartDataUtils$$.getValue(this.$_chart$, $seriesIndex$$12$$, 0), this.$_explode$ = D.$DvtPieChartUtils$$.$getSliceExplode$(this.$_chart$, $seriesIndex$$12$$), this.$_fillColor$ = D.$DvtChartStyleUtils$$.$getColor$(this.$_chart$, $seriesIndex$$12$$), this.$_fillPattern$ = D.$DvtChartStyleUtils$$.$getPattern$(this.$_chart$, 
  $seriesIndex$$12$$, 0), this.$_strokeColor$ = D.$DvtChartStyleUtils$$.$getBorderColor$(this.$_chart$, $seriesIndex$$12$$), this.$_customLabel$ = $dataItem$$6_options$$115$$.label, this.$_seriesLabel$ = D.$DvtChartDataUtils$$.$getSeries$(this.$_chart$, $seriesIndex$$12$$), this.$_tooltip$ = D.$DvtChartTooltipUtils$$.$getDatatip$(D.$JSCompiler_alias_NULL$$, this.$_chart$, $seriesIndex$$12$$, 0), this.$_action$ = $dataItem$$6_options$$115$$.action, this.$_showPopupBehaviors$ = this.$_chart$.$getShowPopupBehaviors$($dataItem$$6_options$$115$$._id), 
  this.$_id$ = D.$DvtPieChartUtils$$.$getSliceId$(this.$_chart$, $seriesIndex$$12$$), this.$_seriesIndex$ = $seriesIndex$$12$$) : (this.$_value$ = D.$DvtPieChartUtils$$.$getOtherValue$(this.$_chart$), this.$_explode$ = 0, this.$_fillColor$ = $dataItem$$6_options$$115$$.styleDefaults.otherColor, this.$_fillPattern$ = D.$JSCompiler_alias_NULL$$, this.$_strokeColor$ = $dataItem$$6_options$$115$$.styleDefaults.borderColor, this.$_customLabel$ = D.$JSCompiler_alias_NULL$$, this.$_seriesLabel$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$_chart$.$getBundle$(), 
  "LABEL_OTHER", D.$JSCompiler_alias_NULL$$), this.$_tooltip$ = D.$DvtChartTooltipUtils$$.$getOtherSliceDatatip$(this.$_chart$, this.$_value$), this.$_action$ = D.$JSCompiler_alias_NULL$$, this.$_showPopupBehaviors$ = D.$DvtPieChartUtils$$.$getOtherSliceShowPopupBehaviors$(this.$_chart$), this.$_id$ = D.$DvtPieChartUtils$$.$getOtherSliceId$(this.$_chart$))
};
D.$DvtPieSlice$$.prototype.$render$ = function $$DvtPieSlice$$$$$render$$($displayable$$36_duringDisplayAnim_feelerRad$$inline_5350_sliceDisplayables$$) {
  var $i$$451_topSurface$$inline_5341$$ = this.$_topSurface$, $leftSurface$$inline_5342_len$$20$$ = this.$_leftSurface$, $rightSurface$$inline_5343_shapeArray$$ = this.$_rightSurface$, $crustSurface$$inline_5344_j$$74$$ = this.$_crustSurface$, $angleStart$$inline_5345$$ = this.$_angleStart$, $angleExtent$$inline_5346$$ = this.$_angleExtent$, $feelerHoriz$$inline_5351_sortedSurfaces$$inline_5347$$ = [];
  $leftSurface$$inline_5342_len$$20$$ && ($rightSurface$$inline_5343_shapeArray$$ && $crustSurface$$inline_5344_j$$74$$) && (270 >= $angleStart$$inline_5345$$ && 270 < $angleStart$$inline_5345$$ + $angleExtent$$inline_5346$$ ? ($feelerHoriz$$inline_5351_sortedSurfaces$$inline_5347$$.push($leftSurface$$inline_5342_len$$20$$), $feelerHoriz$$inline_5351_sortedSurfaces$$inline_5347$$.push($rightSurface$$inline_5343_shapeArray$$), $feelerHoriz$$inline_5351_sortedSurfaces$$inline_5347$$.push($crustSurface$$inline_5344_j$$74$$)) : 
  270 < $angleStart$$inline_5345$$ || 90 >= $angleStart$$inline_5345$$ + $angleExtent$$inline_5346$$ ? ($feelerHoriz$$inline_5351_sortedSurfaces$$inline_5347$$.push($leftSurface$$inline_5342_len$$20$$), $feelerHoriz$$inline_5351_sortedSurfaces$$inline_5347$$.push($crustSurface$$inline_5344_j$$74$$), $feelerHoriz$$inline_5351_sortedSurfaces$$inline_5347$$.push($rightSurface$$inline_5343_shapeArray$$)) : ($feelerHoriz$$inline_5351_sortedSurfaces$$inline_5347$$.push($rightSurface$$inline_5343_shapeArray$$), 
  $feelerHoriz$$inline_5351_sortedSurfaces$$inline_5347$$.push($crustSurface$$inline_5344_j$$74$$), $feelerHoriz$$inline_5351_sortedSurfaces$$inline_5347$$.push($leftSurface$$inline_5342_len$$20$$)));
  $feelerHoriz$$inline_5351_sortedSurfaces$$inline_5347$$.push($i$$451_topSurface$$inline_5341$$);
  $leftSurface$$inline_5342_len$$20$$ = $feelerHoriz$$inline_5351_sortedSurfaces$$inline_5347$$.length;
  for($i$$451_topSurface$$inline_5341$$ = 0;$i$$451_topSurface$$inline_5341$$ < $leftSurface$$inline_5342_len$$20$$;$i$$451_topSurface$$inline_5341$$++) {
    $rightSurface$$inline_5343_shapeArray$$ = $feelerHoriz$$inline_5351_sortedSurfaces$$inline_5347$$[$i$$451_topSurface$$inline_5341$$];
    window.shapeCount = $rightSurface$$inline_5343_shapeArray$$.length;
    for($crustSurface$$inline_5344_j$$74$$ = 0;$crustSurface$$inline_5344_j$$74$$ < window.shapeCount;$crustSurface$$inline_5344_j$$74$$++) {
      this.$_pieChart$.$_shapesContainer$.$addChild$($rightSurface$$inline_5343_shapeArray$$[$crustSurface$$inline_5344_j$$74$$]), $rightSurface$$inline_5343_shapeArray$$[$crustSurface$$inline_5344_j$$74$$].$render$ && $rightSurface$$inline_5343_shapeArray$$[$crustSurface$$inline_5344_j$$74$$].$render$()
    }
  }
  this.$_sliceLabel$ && (this.$_pieChart$.$addChild$(this.$_sliceLabel$), D.$DvtPieRenderUtils$$.$associate$(this, [this.$_sliceLabel$]), "outside" == this.$_pieChart$.$getLabelPosition$() && ($displayable$$36_duringDisplayAnim_feelerRad$$inline_5350_sliceDisplayables$$ ? (this.$_pieChart$.$addChild$(this.$_feelerRad$), this.$_pieChart$.$addChild$(this.$_feelerHoriz$)) : this.$_hasFeeler$ && ($displayable$$36_duringDisplayAnim_feelerRad$$inline_5350_sliceDisplayables$$ = (0,D.$JSCompiler_StaticMethods__feelerFromPts$$)(this, 
  this.$_outsideFeelerStart$, this.$_outsideFeelerMid$), $feelerHoriz$$inline_5351_sortedSurfaces$$inline_5347$$ = (0,D.$JSCompiler_StaticMethods__feelerFromPts$$)(this, this.$_outsideFeelerMid$, this.$_outsideFeelerEnd$), this.$_feelerRad$ = $displayable$$36_duringDisplayAnim_feelerRad$$inline_5350_sliceDisplayables$$, this.$_feelerHoriz$ = $feelerHoriz$$inline_5351_sortedSurfaces$$inline_5347$$)));
  (0,D.$JSCompiler_StaticMethods__explodeSlice$$)(this);
  if(this.$_action$) {
    $displayable$$36_duringDisplayAnim_feelerRad$$inline_5350_sliceDisplayables$$ = this.$getDisplayables$();
    for($i$$451_topSurface$$inline_5341$$ = 0;$i$$451_topSurface$$inline_5341$$ < $displayable$$36_duringDisplayAnim_feelerRad$$inline_5350_sliceDisplayables$$.length;$i$$451_topSurface$$inline_5341$$++) {
      $displayable$$36_duringDisplayAnim_feelerRad$$inline_5350_sliceDisplayables$$[$i$$451_topSurface$$inline_5341$$].setCursor("pointer")
    }
  }
  if($displayable$$36_duringDisplayAnim_feelerRad$$inline_5350_sliceDisplayables$$ = (0,D.$JSCompiler_StaticMethods_getTopDisplayable$$)(this)) {
    $displayable$$36_duringDisplayAnim_feelerRad$$inline_5350_sliceDisplayables$$.$setAriaRole$("img"), this.$_updateAriaLabel$()
  }
};
D.$JSCompiler_StaticMethods__feelerFromPts$$ = function $$JSCompiler_StaticMethods__feelerFromPts$$$($JSCompiler_StaticMethods__feelerFromPts$self$$, $feeler$$4_pt1$$, $color$$35_pt2_stroke$$63$$) {
  $feeler$$4_pt1$$ = new D.$DvtLine$$($JSCompiler_StaticMethods__feelerFromPts$self$$.$_pieChart$.$_context$, $feeler$$4_pt1$$.x, $feeler$$4_pt1$$.y, $color$$35_pt2_stroke$$63$$.x, $color$$35_pt2_stroke$$63$$.y);
  $color$$35_pt2_stroke$$63$$ = $JSCompiler_StaticMethods__feelerFromPts$self$$.$_pieChart$.$getOptions$().styleDefaults.pieFeelerColor;
  $color$$35_pt2_stroke$$63$$ = new D.$DvtSolidStroke$$($color$$35_pt2_stroke$$63$$);
  $feeler$$4_pt1$$.$setStroke$($color$$35_pt2_stroke$$63$$);
  $JSCompiler_StaticMethods__feelerFromPts$self$$.$_pieChart$.$addChild$($feeler$$4_pt1$$);
  return $feeler$$4_pt1$$
};
D.$JSCompiler_StaticMethods__explodeSlice$$ = function $$JSCompiler_StaticMethods__explodeSlice$$$($JSCompiler_StaticMethods__explodeSlice$self$$) {
  if(0 != $JSCompiler_StaticMethods__explodeSlice$self$$.$_explode$) {
    var $oldStartX_radian$$ = (360 - ($JSCompiler_StaticMethods__explodeSlice$self$$.$_angleStart$ + $JSCompiler_StaticMethods__explodeSlice$self$$.$_angleExtent$ / 2)) * D.$DvtMath$$.$RADS_PER_DEGREE$, $oldStartY_tilt$$ = (0,D.$JSCompiler_StaticMethods_is3D$$)($JSCompiler_StaticMethods__explodeSlice$self$$.$_pieChart$) ? 0.59 : 1, $explodeOffset_newStartX$$ = $JSCompiler_StaticMethods__explodeSlice$self$$.$_explode$ * $JSCompiler_StaticMethods__explodeSlice$self$$.$_pieChart$.$_radiusX$ * (0.5 / 
    0.45 - 1);
    $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$ = window.Math.cos($oldStartX_radian$$) * $explodeOffset_newStartX$$;
    $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$ = window.Math.sin($oldStartX_radian$$) * $oldStartY_tilt$$ * $explodeOffset_newStartX$$;
    (0,D.$DvtAgent$isPlatformWebkit$$)() && ($JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$ = window.Math.round($JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$), $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$ = window.Math.round($JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$))
  }else {
    $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$ = 0, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$ = 0
  }
  $JSCompiler_StaticMethods__explodeSlice$self$$.$_topSurface$ && (0,D.$DvtPieSlice$_translateShapes$$)($JSCompiler_StaticMethods__explodeSlice$self$$.$_topSurface$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$);
  $JSCompiler_StaticMethods__explodeSlice$self$$.$_rightSurface$ && (0,D.$DvtPieSlice$_translateShapes$$)($JSCompiler_StaticMethods__explodeSlice$self$$.$_rightSurface$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$);
  $JSCompiler_StaticMethods__explodeSlice$self$$.$_leftSurface$ && (0,D.$DvtPieSlice$_translateShapes$$)($JSCompiler_StaticMethods__explodeSlice$self$$.$_leftSurface$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$);
  $JSCompiler_StaticMethods__explodeSlice$self$$.$_crustSurface$ && (0,D.$DvtPieSlice$_translateShapes$$)($JSCompiler_StaticMethods__explodeSlice$self$$.$_crustSurface$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$);
  if($JSCompiler_StaticMethods__explodeSlice$self$$.$_hasFeeler$) {
    var $oldStartX_radian$$ = $JSCompiler_StaticMethods__explodeSlice$self$$.$_outsideFeelerStart$.x, $oldStartY_tilt$$ = $JSCompiler_StaticMethods__explodeSlice$self$$.$_outsideFeelerStart$.y, $explodeOffset_newStartX$$ = $oldStartX_radian$$ + $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$, $newStartY$$ = $oldStartY_tilt$$ + $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$;
    $JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerRad$.$setX1$($explodeOffset_newStartX$$);
    $JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerRad$.$setY1$($newStartY$$);
    var $oldMidX$$ = $JSCompiler_StaticMethods__explodeSlice$self$$.$_outsideFeelerMid$.x, $oldMidY$$ = $JSCompiler_StaticMethods__explodeSlice$self$$.$_outsideFeelerMid$.y;
    0 < $oldMidX$$ - $oldStartX_radian$$ != 0 < $oldMidX$$ - $explodeOffset_newStartX$$ ? ($JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerRad$.$setX2$($explodeOffset_newStartX$$), $JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerHoriz$.$setX1$($explodeOffset_newStartX$$)) : ($JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerRad$.$setX2$($oldMidX$$), $JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerHoriz$.$setX1$($oldMidX$$));
    0 < $oldMidY$$ - $oldStartY_tilt$$ != 0 < $oldMidY$$ - $newStartY$$ ? ($JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerRad$.$setY2$($newStartY$$), $JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerHoriz$.$setY1$($newStartY$$)) : ($JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerRad$.$setY2$($oldMidY$$), $JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerHoriz$.$setY1$($oldMidY$$))
  }
  $JSCompiler_StaticMethods__explodeSlice$self$$.$_sliceLabel$ && !$JSCompiler_StaticMethods__explodeSlice$self$$.$_hasFeeler$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods__explodeSlice$self$$.$_sliceLabel$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$)
};
D.$DvtPieSlice$_translateShapes$$ = function $$DvtPieSlice$_translateShapes$$$($shapes$$2$$, $tx$$19$$, $ty$$19$$) {
  if($shapes$$2$$) {
    for(var $len$$21$$ = $shapes$$2$$.length, $i$$452$$ = 0;$i$$452$$ < $len$$21$$;$i$$452$$++) {
      (0,D.$JSCompiler_StaticMethods_setTranslate$$)($shapes$$2$$[$i$$452$$], $tx$$19$$, $ty$$19$$)
    }
  }
};
D.$DvtPieSlice$$.prototype.$getAngleExtent$ = (0,D.$JSCompiler_get$$)("$_angleExtent$");
D.$DvtPieSlice$$.prototype.$setAngleExtent$ = (0,D.$JSCompiler_set$$)("$_angleExtent$");
D.$DvtPieSlice$$.prototype.$getAngleStart$ = (0,D.$JSCompiler_get$$)("$_angleStart$");
D.$DvtPieSlice$$.prototype.$setAngleStart$ = (0,D.$JSCompiler_set$$)("$_angleStart$");
D.$JSCompiler_StaticMethods_setNoOutsideFeeler$$ = function $$JSCompiler_StaticMethods_setNoOutsideFeeler$$$($JSCompiler_StaticMethods_setNoOutsideFeeler$self$$) {
  $JSCompiler_StaticMethods_setNoOutsideFeeler$self$$.$_outsideFeelerStart$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_setNoOutsideFeeler$self$$.$_outsideFeelerMid$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_setNoOutsideFeeler$self$$.$_outsideFeelerEnd$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_setNoOutsideFeeler$self$$.$_hasFeeler$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_getLabelAndFeeler$$ = function $$JSCompiler_StaticMethods_getLabelAndFeeler$$$($JSCompiler_StaticMethods_getLabelAndFeeler$self$$) {
  var $ar$$25$$ = [];
  $JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_sliceLabel$ && $ar$$25$$.push($JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_sliceLabel$);
  $JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_feelerRad$ && $ar$$25$$.push($JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_feelerRad$);
  $JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_feelerHoriz$ && $ar$$25$$.push($JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_feelerHoriz$);
  return $ar$$25$$
};
D.$DvtPieSlice$$.prototype.$setSliceLabel$ = (0,D.$JSCompiler_set$$)("$_sliceLabel$");
D.$DvtPieSlice$$.prototype.getValue = (0,D.$JSCompiler_get$$)("$_value$");
D.$DvtPieSlice$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtPieSlice$$.prototype.$getSeriesIndex$ = (0,D.$JSCompiler_get$$)("$_seriesIndex$");
D.$DvtPieSlice$_shapeIsSelectable$$ = function $$DvtPieSlice$_shapeIsSelectable$$$($shape$$28$$) {
  return $shape$$28$$ instanceof D.$DvtGraphSelectableArc$$ || $shape$$28$$ instanceof D.$DvtGraphSelectablePolygon$$ || $shape$$28$$ instanceof D.$DvtGraphSelectablePath$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPieSlice$$.prototype;
D.$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$151$$, $y$$126$$) {
  for(var $c$$15_sin$$ = this.$_pieChart$.$getCenter$(), $cos$$ = ($x$$151$$ - $c$$15_sin$$.x) / this.$_radiusX$, $c$$15_sin$$ = ($y$$126$$ - $c$$15_sin$$.y) / this.$_radiusY$, $angle$$20_containsAngle$$ = -window.Math.atan2($c$$15_sin$$, $cos$$) * (180 / window.Math.PI);$angle$$20_containsAngle$$ < this.$_angleStart$;) {
    $angle$$20_containsAngle$$ += 360
  }
  for(;360 <= $angle$$20_containsAngle$$ - this.$_angleStart$;) {
    $angle$$20_containsAngle$$ -= 360
  }
  $angle$$20_containsAngle$$ = $angle$$20_containsAngle$$ <= this.$_angleStart$ + this.$_angleExtent$;
  return 1 >= window.Math.pow($cos$$, 2) + window.Math.pow($c$$15_sin$$, 2) && $angle$$20_containsAngle$$
};
D.$JSCompiler_prototypeAlias$$.$GetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$GetAnimationParams$$() {
  return[this.$_value$, this.$_radiusX$, this.$_radiusY$, this.$_explode$]
};
D.$JSCompiler_prototypeAlias$$.$SetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$SetAnimationParams$$($params$$51$$) {
  this.$_value$ = $params$$51$$[0];
  this.$_radiusX$ = $params$$51$$[1];
  this.$_radiusY$ = $params$$51$$[2];
  this.$_explode$ = $params$$51$$[3]
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$36$$, $oldSlice$$) {
  var $startState$$6$$ = $oldSlice$$.$GetAnimationParams$(), $endState$$13$$ = this.$GetAnimationParams$();
  if(!D.$DvtArrayUtils$$.$equals$($startState$$6$$, $endState$$13$$)) {
    var $anim$$22$$ = new D.$DvtCustomAnimation$$(this.$_pieChart$.$_context$, this, this.$_pieChart$.$getAnimationDuration$());
    (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$22$$.$_animator$, "typeNumberArray", this, this.$GetAnimationParams$, this.$SetAnimationParams$, $endState$$13$$);
    $handler$$36$$.add($anim$$22$$, 0);
    this.$SetAnimationParams$($startState$$6$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$37$$) {
  var $anim$$23$$ = new D.$DvtCustomAnimation$$(this.$_pieChart$.$_context$, this, this.$_pieChart$.$getAnimationDuration$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$23$$.$_animator$, "typeNumberArray", this, this.$GetAnimationParams$, this.$SetAnimationParams$, this.$GetAnimationParams$());
  $handler$$37$$.add($anim$$23$$, 0);
  this.$SetAnimationParams$([0, 0, 0, 0])
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$38$$, $container$$68$$) {
  var $anim$$24_newSlices$$ = $container$$68$$.$_slices$, $oldSlices_prevId$$ = this.$_pieChart$.$_slices$, $i$$453_prevIndex$$ = D.$DvtArrayUtils$$.$getIndex$($oldSlices_prevId$$, this) - 1;
  if(0 <= $i$$453_prevIndex$$) {
    $oldSlices_prevId$$ = $oldSlices_prevId$$[$i$$453_prevIndex$$].getId();
    for($i$$453_prevIndex$$ = 0;$i$$453_prevIndex$$ < $anim$$24_newSlices$$.length;$i$$453_prevIndex$$++) {
      if($anim$$24_newSlices$$[$i$$453_prevIndex$$].getId().$equals$($oldSlices_prevId$$)) {
        $anim$$24_newSlices$$.splice($i$$453_prevIndex$$ + 1, 0, this);
        break
      }
    }
  }else {
    $anim$$24_newSlices$$.splice(0, 0, this)
  }
  this.$_pieChart$ = $container$$68$$;
  $anim$$24_newSlices$$ = new D.$DvtCustomAnimation$$($container$$68$$.$_context$, this, this.$_pieChart$.$getAnimationDuration$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$24_newSlices$$.$_animator$, "typeNumberArray", this, this.$GetAnimationParams$, this.$SetAnimationParams$, [0, 0, 0, 0]);
  $anim$$24_newSlices$$.$setOnEnd$(this.$_removeDeletedSlice$, this);
  $handler$$38$$.add($anim$$24_newSlices$$, 0)
};
D.$JSCompiler_prototypeAlias$$.$_removeDeletedSlice$ = function $$JSCompiler_prototypeAlias$$$$_removeDeletedSlice$$() {
  var $slices$$3$$ = this.$_pieChart$.$_slices$, $index$$138$$ = D.$DvtArrayUtils$$.$getIndex$($slices$$3$$, this);
  0 <= $index$$138$$ && $slices$$3$$.splice($index$$138$$, 1)
};
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = function $$JSCompiler_prototypeAlias$$$$getDisplayables$$() {
  var $ret$$83$$ = [];
  this.$_topSurface$ && ($ret$$83$$ = $ret$$83$$.concat(this.$_topSurface$));
  this.$_leftSurface$ && ($ret$$83$$ = $ret$$83$$.concat(this.$_leftSurface$));
  this.$_rightSurface$ && ($ret$$83$$ = $ret$$83$$.concat(this.$_rightSurface$));
  this.$_crustSurface$ && ($ret$$83$$ = $ret$$83$$.concat(this.$_crustSurface$));
  this.$_sliceLabel$ && $ret$$83$$.push(this.$_sliceLabel$);
  this.$_feelerRad$ && $ret$$83$$.push(this.$_feelerRad$);
  this.$_feelerHoriz$ && $ret$$83$$.push(this.$_feelerHoriz$);
  return $ret$$83$$
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $bundle$$7$$ = this.$_chart$.$getBundle$(), $percentage$$1_tooltip$$35$$ = D.$DvtPieLabelUtils$$.$generateSliceLabelString$(this, "percent"), $percentage$$1_tooltip$$35$$ = this.$getTooltip$() + "; " + (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$7$$, "LABEL_PERCENTAGE", $percentage$$1_tooltip$$35$$), $states$$5$$ = [];
  this.$isSelectable$() && $states$$5$$.push((0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$7$$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)($percentage$$1_tooltip$$35$$, $states$$5$$, $bundle$$7$$)
};
D.$JSCompiler_prototypeAlias$$.$_updateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$_updateAriaLabel$$() {
  var $displayable$$37$$ = (0,D.$JSCompiler_StaticMethods_getTopDisplayable$$)(this);
  $displayable$$37$$ && !(0,D.$DvtAgent$deferAriaCreation$$)() && (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($displayable$$37$$, "label", this.$getAriaLabel$())
};
D.$JSCompiler_StaticMethods_getTopDisplayable$$ = function $$JSCompiler_StaticMethods_getTopDisplayable$$$($JSCompiler_StaticMethods_getTopDisplayable$self$$) {
  return $JSCompiler_StaticMethods_getTopDisplayable$self$$.$_topSurface$ && 0 < $JSCompiler_StaticMethods_getTopDisplayable$self$$.$_topSurface$.length ? $JSCompiler_StaticMethods_getTopDisplayable$self$$.$_topSurface$[0] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_getPhysicalShape$$ = function $$JSCompiler_StaticMethods_getPhysicalShape$$$($JSCompiler_StaticMethods_getPhysicalShape$self$$, $obj$$157$$) {
  $obj$$157$$.$setDataColor$($JSCompiler_StaticMethods_getPhysicalShape$self$$.$getFillColor$(), D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($JSCompiler_StaticMethods_getPhysicalShape$self$$.$_chart$), D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($JSCompiler_StaticMethods_getPhysicalShape$self$$.$_chart$));
  $obj$$157$$.setCursor("pointer");
  return $obj$$157$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPieSlice$$.prototype;
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_selected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSelected$$1_explode$$) {
  (this.$_selected$ = $bSelected$$1_explode$$) ? this.$_pieChart$.$bringToFrontOfSelection$(this) : this.$_selecting$ || this.$_pieChart$.$pushToBackOfSelection$(this);
  if(D.$DvtChartStyleUtils$$.$isSelectionHighlighted$(this.$_chart$)) {
    var $anim$$25_shapeArr$$ = this.$getDisplayables$();
    for(window.i = 0;window.i < $anim$$25_shapeArr$$.length;window.i++) {
      (0,D.$DvtPieSlice$_shapeIsSelectable$$)($anim$$25_shapeArr$$[window.i]) && (0,D.$JSCompiler_StaticMethods_getPhysicalShape$$)(this, $anim$$25_shapeArr$$[window.i]).$setSelected$($bSelected$$1_explode$$)
    }
  }
  D.$DvtChartStyleUtils$$.$isSelectionExploded$(this.$_chart$) && ($bSelected$$1_explode$$ = $bSelected$$1_explode$$ ? 1 : 0, "none" != D.$DvtChartStyleUtils$$.$getAnimationOnDataChange$(this.$_chart$) ? ($anim$$25_shapeArr$$ = new D.$DvtCustomAnimation$$(this.$_pieChart$.$_context$, this, this.$_pieChart$.$getAnimationDuration$() / 2), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$25_shapeArr$$.$_animator$, "typeNumber", this, this.$getExplode$, this.$setExplode$, $bSelected$$1_explode$$), $anim$$25_shapeArr$$.play()) : 
  this.$setExplode$($bSelected$$1_explode$$));
  this.$_updateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_selecting$ = D.$JSCompiler_alias_TRUE$$;
  this.$_pieChart$.$bringToFrontOfSelection$(this);
  var $shapeArr$$1$$ = this.$getDisplayables$();
  for(window.i = 0;window.i < $shapeArr$$1$$.length;window.i++) {
    (0,D.$DvtPieSlice$_shapeIsSelectable$$)($shapeArr$$1$$[window.i]) && (0,D.$JSCompiler_StaticMethods_getPhysicalShape$$)(this, $shapeArr$$1$$[window.i]).$showHoverEffect$()
  }
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_selecting$ = D.$JSCompiler_alias_FALSE$$;
  this.$_selected$ || this.$_pieChart$.$pushToBackOfSelection$(this);
  var $shapeArr$$2$$ = this.$getDisplayables$();
  for(window.i = 0;window.i < $shapeArr$$2$$.length;window.i++) {
    (0,D.$DvtPieSlice$_shapeIsSelectable$$)($shapeArr$$2$$[window.i]) && (0,D.$JSCompiler_StaticMethods_getPhysicalShape$$)(this, $shapeArr$$2$$[window.i]).$hideHoverEffect$()
  }
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$($target$$66$$) {
  return $target$$66$$ == this.$_sliceLabel$ && this.$_sliceLabel$ && this.$_sliceLabel$.$isTruncated$() ? this.$_sliceLabelString$ : this.$getTooltip$()
};
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return this.$getFillColor$()
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return[this.getId().$getSeries$()]
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$392$$) {
  if($event$$392$$.type == D.$DvtMouseEvent$CLICK$$ || 32 == $event$$392$$.keyCode && $event$$392$$.ctrlKey) {
    return this
  }
  var $slices$$4$$ = this.$_pieChart$.$_slices$, $idx$$9$$ = $slices$$4$$.indexOf(this), $next$$7$$ = D.$JSCompiler_alias_NULL$$;
  39 == $event$$392$$.keyCode ? $next$$7$$ = $idx$$9$$ < $slices$$4$$.length - 1 ? $slices$$4$$[$idx$$9$$ + 1] : $slices$$4$$[0] : 37 == $event$$392$$.keyCode && ($next$$7$$ = 0 == $idx$$9$$ ? $slices$$4$$[$slices$$4$$.length - 1] : $slices$$4$$[$idx$$9$$ - 1]);
  return $next$$7$$
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$9$$) {
  var $displayables$$9$$ = this.$getDisplayables$();
  return $displayables$$9$$[0] ? $displayables$$9$$[0].$getDimensions$($targetCoordinateSpace$$9$$) : new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  var $displayables$$10$$ = this.$getDisplayables$();
  return $displayables$$10$$[0] ? $displayables$$10$$[0].$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$hideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getExplode$ = (0,D.$JSCompiler_get$$)("$_explode$");
D.$JSCompiler_prototypeAlias$$.$setExplode$ = function $$JSCompiler_prototypeAlias$$$$setExplode$$($explode$$1$$) {
  this.$_explode$ = $explode$$1$$;
  (0,D.$JSCompiler_StaticMethods__explodeSlice$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$getSeriesLabel$ = (0,D.$JSCompiler_get$$)("$_seriesLabel$");
D.$JSCompiler_prototypeAlias$$.$getFillColor$ = (0,D.$JSCompiler_get$$)("$_fillColor$");
D.$JSCompiler_prototypeAlias$$.$getFillPattern$ = (0,D.$JSCompiler_get$$)("$_fillPattern$");
D.$JSCompiler_prototypeAlias$$.$getStrokeColor$ = (0,D.$JSCompiler_get$$)("$_strokeColor$");
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = (0,D.$JSCompiler_get$$)("$_tooltip$");
D.$JSCompiler_prototypeAlias$$.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = (0,D.$JSCompiler_get$$)("$_showPopupBehaviors$");
D.$DvtChartOverview$$ = function $$DvtChartOverview$$$($context$$253$$, $callback$$81$$, $callbackObj$$45$$, $id$$112$$, $oldChart$$7$$) {
  this.Init($context$$253$$, $callback$$81$$, $callbackObj$$45$$);
  this.$_chart$ = $oldChart$$7$$;
  this.$_id$ = $id$$112$$ + "_overview"
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartOverview$$, D.$DvtOverview$$, "DvtChartOverview");
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartOverview$$.prototype;
D.$JSCompiler_prototypeAlias$$.$createBackground$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($options$$114$$, $width$$93$$, $glassPane$$inline_5238_height$$81$$) {
  $options$$114$$.style = {overviewBackgroundColor:"rgba(0,0,0,0)", windowBackgroundColor:"rgba(0,0,0,0)", windowBorderTopColor:"#333333", windowBorderRightColor:"#333333", windowBorderBottomColor:"#333333", windowBorderLeftColor:"#333333", leftFilterPanelColor:"rgba(5,65,135,0.1)", rightFilterPanelColor:"rgba(5,65,135,0.1)", handleBackgroundImage:$options$$114$$.chart._resources.overviewGrippy, handleWidth:3, handleHeight:15, handleFillColor:"rgba(0,0,0,0)"};
  $options$$114$$.animationOnClick = "off";
  var $options$$inline_5235$$ = $options$$114$$.chart;
  this.$_chartContainer$ = new D.$DvtContainer$$(this.$_context$);
  this.$addChild$(this.$_chartContainer$);
  window.optionsOverride = {zoomAndScroll:"off", legend:{rendered:"off"}, xAxis:{viewportMin:D.$JSCompiler_alias_NULL$$, viewportMax:D.$JSCompiler_alias_NULL$$, viewportStartGroup:D.$JSCompiler_alias_NULL$$, viewportEndGroup:D.$JSCompiler_alias_NULL$$, axisLine:{rendered:"off"}, title:D.$JSCompiler_alias_NULL$$}, yAxis:{rendered:"off"}, y2Axis:{rendered:"off"}, title:{text:D.$JSCompiler_alias_NULL$$}, subtitle:{text:D.$JSCompiler_alias_NULL$$}, footnote:{text:D.$JSCompiler_alias_NULL$$}, titleSeparator:{rendered:"off"}, 
  layout:{outerGapWidth:0, outerGapHeight:0}, _isOverview:D.$JSCompiler_alias_TRUE$$};
  $options$$inline_5235$$ = D.$DvtJSONUtils$$.$merge$(window.optionsOverride, $options$$inline_5235$$);
  "disabled" == $options$$inline_5235$$.timeAxisType && ($options$$inline_5235$$.xAxis.tickLabel.rendered = "off");
  this.$_chart$ || (this.$_chart$ = (0,D.$DvtChart$newInstance$$)(this.$_context$), this.$_chart$.setId(this.$_id$));
  this.$_chartContainer$.$addChild$(this.$_chart$);
  this.$_chart$.$render$($options$$inline_5235$$, $width$$93$$, $glassPane$$inline_5238_height$$81$$);
  $glassPane$$inline_5238_height$$81$$ = new D.$DvtRect$$(this.$_context$, 0, 0, $width$$93$$, $glassPane$$inline_5238_height$$81$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($glassPane$$inline_5238_height$$81$$);
  this.$_chartContainer$.$addChild$($glassPane$$inline_5238_height$$81$$);
  (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$_chart$.$getEventManager$(), D.$JSCompiler_alias_NULL$$);
  D.$DvtChartOverview$$.$superclass$.$render$.call(this, $options$$114$$, $width$$93$$, this.$_chart$.$_plotAreaSpace$.$h$)
};
D.$JSCompiler_prototypeAlias$$.$isLeftAndRightFilterRendered$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
D.$JSCompiler_prototypeAlias$$.$HandleKeyDown$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$HandleKeyUp$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtAnimOnDisplay$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtAnimOnDisplay$$, D.$DvtObj$$, "DvtAnimOnDisplay");
D.$DvtAnimOnDisplay$$.$createAnimation$ = function $$DvtAnimOnDisplay$$$$createAnimation$$($chart$$6$$, $arPlayables_type$$100$$, $duration$$19$$) {
  $arPlayables_type$$100$$ = [];
  if(D.$DvtChartTypeUtils$$.$isBLAC$($chart$$6$$)) {
    D.$DvtAnimOnDisplay$$.$_animBarLineArea$($chart$$6$$, $duration$$19$$, $arPlayables_type$$100$$)
  }else {
    if(D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$6$$) || D.$DvtChartTypeUtils$$.$isFunnel$($chart$$6$$)) {
      D.$DvtAnimOnDisplay$$.$_animBubbleScatterFunnel$($chart$$6$$, $duration$$19$$, $arPlayables_type$$100$$)
    }else {
      if(D.$DvtChartTypeUtils$$.$isPie$($chart$$6$$) && $chart$$6$$.$pieChart$) {
        return $chart$$6$$.$pieChart$.$getDisplayAnimation$()
      }
    }
  }
  return 0 < $arPlayables_type$$100$$.length ? new D.$DvtParallelPlayable$$($chart$$6$$.$_context$, $arPlayables_type$$100$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtAnimOnDisplay$$.$_animBarLineArea$ = function $$DvtAnimOnDisplay$$$$_animBarLineArea$$($chart$$7$$, $duration$$20$$, $arPlayables$$1$$) {
  var $objs$$2$$ = $chart$$7$$.$getObjects$(), $objCount$$ = $objs$$2$$ ? $objs$$2$$.length : 0;
  if($objCount$$) {
    for(var $obj$$150$$, $nodePlayable$$4_peer$$7$$, $i$$421$$ = 0;$i$$421$$ < $objCount$$;$i$$421$$++) {
      $nodePlayable$$4_peer$$7$$ = $objs$$2$$[$i$$421$$], $obj$$150$$ = $nodePlayable$$4_peer$$7$$.$getDisplayables$()[0], window.seriesType = $nodePlayable$$4_peer$$7$$.$getSeriesType$(), $nodePlayable$$4_peer$$7$$ = D.$JSCompiler_alias_NULL$$, $obj$$150$$ instanceof D.$DvtChartBar$$ || $obj$$150$$ instanceof D.$DvtChartPolarBar$$ ? $nodePlayable$$4_peer$$7$$ = $obj$$150$$.$getDisplayAnimation$($duration$$20$$) : $obj$$150$$ instanceof D.$DvtChartLineArea$$ ? $nodePlayable$$4_peer$$7$$ = "line" == 
      window.seriesType ? D.$DvtAnimOnDisplay$$.$_getLinePlayable$($chart$$7$$, $obj$$150$$, $duration$$20$$) : D.$DvtAnimOnDisplay$$.$_getAreaPlayable$($chart$$7$$, $obj$$150$$, $duration$$20$$) : $obj$$150$$ instanceof D.$DvtMarker$$ && ($nodePlayable$$4_peer$$7$$ = new D.$DvtAnimFadeIn$$($chart$$7$$.$_context$, $obj$$150$$, $duration$$20$$ - 0.8, 0.8)), $nodePlayable$$4_peer$$7$$ && $arPlayables$$1$$.push($nodePlayable$$4_peer$$7$$)
    }
  }
};
D.$DvtAnimOnDisplay$$.$_animBubbleScatterFunnel$ = function $$DvtAnimOnDisplay$$$$_animBubbleScatterFunnel$$($chart$$8$$, $duration$$21$$, $arPlayables$$2$$) {
  var $objs$$3$$ = $chart$$8$$.$getObjects$(), $objCount$$1$$ = $objs$$3$$ ? $objs$$3$$.length : 0;
  if($objCount$$1$$) {
    for(var $obj$$151_peer$$8$$, $nodePlayable$$5$$, $i$$422$$ = 0;$i$$422$$ < $objCount$$1$$;$i$$422$$++) {
      $obj$$151_peer$$8$$ = $objs$$3$$[$i$$422$$], $obj$$151_peer$$8$$ = $obj$$151_peer$$8$$.$getDisplayables$()[0], $obj$$151_peer$$8$$ instanceof D.$DvtMarker$$ ? $nodePlayable$$5$$ = D.$DvtChartTypeUtils$$.$isBubble$($chart$$8$$) ? D.$DvtAnimOnDisplay$$.$_getBubblePlayable$($chart$$8$$, $obj$$151_peer$$8$$, $duration$$21$$) : D.$DvtAnimOnDisplay$$.$_getScatterPlayable$($chart$$8$$, $obj$$151_peer$$8$$, $duration$$21$$) : $obj$$151_peer$$8$$ instanceof D.$DvtFunnelSlice$$ && ($nodePlayable$$5$$ = 
      D.$DvtAnimOnDisplay$$.$_getFunnelPlayable$($chart$$8$$, $obj$$151_peer$$8$$, $duration$$21$$)), $nodePlayable$$5$$ && $arPlayables$$2$$.push($nodePlayable$$5$$)
    }
  }
};
D.$DvtAnimOnDisplay$$.$_getAreaPlayable$ = function $$DvtAnimOnDisplay$$$$_getAreaPlayable$$($chart$$9_nodePlayable$$6$$, $shape$$26$$, $duration$$22_topAnim$$1$$) {
  var $context$$246$$ = $chart$$9_nodePlayable$$6$$.$_context$, $baselineCoord$$1$$ = $shape$$26$$.$_baseline$, $baseAnim$$1_baseParams$$;
  if($shape$$26$$.$isArea$()) {
    var $baseCoords$$ = $shape$$26$$.$_arBaseCoord$;
    $baseAnim$$1_baseParams$$ = $shape$$26$$.$getBaseAnimationParams$();
    for(var $baseEndState$$1_endState$$2$$ = $baseAnim$$1_baseParams$$.slice(0), $j$$69$$ = 0;$j$$69$$ < $baseAnim$$1_baseParams$$.length;$j$$69$$++) {
      if(1 == $j$$69$$ % 4 || 2 == $j$$69$$ % 4) {
        $baseAnim$$1_baseParams$$[$j$$69$$] = $baselineCoord$$1$$
      }
    }
    $shape$$26$$.$setBaseAnimationParams$($baseAnim$$1_baseParams$$);
    $baseAnim$$1_baseParams$$ = new D.$DvtCustomAnimation$$($context$$246$$, $shape$$26$$, $duration$$22_topAnim$$1$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($baseAnim$$1_baseParams$$.$_animator$, "typeNumberArray", $shape$$26$$, $shape$$26$$.$getBaseAnimationParams$, $shape$$26$$.$setBaseAnimationParams$, $baseEndState$$1_endState$$2$$)
  }
  for(var $coords$$11$$ = $shape$$26$$.$_arCoord$, $params$$41$$ = $shape$$26$$.$getAnimationParams$(), $baseEndState$$1_endState$$2$$ = $params$$41$$.slice(0), $j$$69$$ = 0;$j$$69$$ < $params$$41$$.length;$j$$69$$++) {
    if(1 == $j$$69$$ % 4 || 2 == $j$$69$$ % 4) {
      $params$$41$$[$j$$69$$] = $baselineCoord$$1$$
    }
  }
  $shape$$26$$.$setAnimationParams$($params$$41$$);
  $duration$$22_topAnim$$1$$ = new D.$DvtCustomAnimation$$($context$$246$$, $shape$$26$$, $duration$$22_topAnim$$1$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$22_topAnim$$1$$.$_animator$, "typeNumberArray", $shape$$26$$, $shape$$26$$.$getAnimationParams$, $shape$$26$$.$setAnimationParams$, $baseEndState$$1_endState$$2$$);
  $chart$$9_nodePlayable$$6$$ = new D.$DvtParallelPlayable$$($chart$$9_nodePlayable$$6$$.$_context$, $baseAnim$$1_baseParams$$, $duration$$22_topAnim$$1$$);
  $chart$$9_nodePlayable$$6$$.$setOnEnd$(function() {
    $shape$$26$$.$setCoords$($coords$$11$$, $baseCoords$$)
  });
  return $chart$$9_nodePlayable$$6$$
};
D.$DvtAnimOnDisplay$$.$_getFunnelPlayable$ = function $$DvtAnimOnDisplay$$$$_getFunnelPlayable$$($chart$$10_context$$247$$, $slice$$1$$, $duration$$23_nodePlayable2$$) {
  $chart$$10_context$$247$$ = $chart$$10_context$$247$$.$_context$;
  var $arPoints$$4_nodePlayable1$$ = $slice$$1$$.$getAnimationParams$(), $endState1$$ = $arPoints$$4_nodePlayable1$$.slice(0), $endState2$$ = $arPoints$$4_nodePlayable1$$.slice(0);
  $arPoints$$4_nodePlayable1$$[0] = 0;
  $arPoints$$4_nodePlayable1$$[2] = 0;
  $endState1$$[2] = 0;
  $slice$$1$$.$setAnimationParams$($arPoints$$4_nodePlayable1$$);
  $arPoints$$4_nodePlayable1$$ = new D.$DvtCustomAnimation$$($chart$$10_context$$247$$, $slice$$1$$, $duration$$23_nodePlayable2$$ / 2);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($arPoints$$4_nodePlayable1$$.$_animator$, "typeNumberArray", $slice$$1$$, $slice$$1$$.$getAnimationParams$, $slice$$1$$.$setAnimationParams$, $endState1$$);
  $duration$$23_nodePlayable2$$ = new D.$DvtCustomAnimation$$($chart$$10_context$$247$$, $slice$$1$$, $duration$$23_nodePlayable2$$ / 2);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$23_nodePlayable2$$.$_animator$, "typeNumberArray", $slice$$1$$, $slice$$1$$.$getAnimationParams$, $slice$$1$$.$setAnimationParams$, $endState2$$);
  return new D.$DvtSequentialPlayable$$($chart$$10_context$$247$$, [$arPoints$$4_nodePlayable1$$, $duration$$23_nodePlayable2$$])
};
D.$DvtAnimOnDisplay$$.$_getBubblePlayable$ = function $$DvtAnimOnDisplay$$$$_getBubblePlayable$$($chart$$11_context$$248$$, $marker$$16_p3$$1$$, $duration$$24$$) {
  $chart$$11_context$$248$$ = $chart$$11_context$$248$$.$_context$;
  var $endScale_p1$$2$$ = new D.$DvtPoint$$($marker$$16_p3$$1$$.$getScaleX$(), $marker$$16_p3$$1$$.$getScaleY$());
  $marker$$16_p3$$1$$.$setScale$(1, 1);
  var $endScale_p1$$2$$ = new D.$DvtAnimScaleBy$$($chart$$11_context$$248$$, $marker$$16_p3$$1$$, $endScale_p1$$2$$, $duration$$24$$), $p2$$2$$ = new D.$DvtAnimFadeIn$$($chart$$11_context$$248$$, $marker$$16_p3$$1$$, $duration$$24$$), $size$$25$$ = $marker$$16_p3$$1$$.$getSize$(), $matrix$$8$$ = $marker$$16_p3$$1$$.$getMatrix$().clone();
  $matrix$$8$$.translate($size$$25$$ / 2, $size$$25$$ / 2);
  $marker$$16_p3$$1$$.$setMatrix$($matrix$$8$$);
  $marker$$16_p3$$1$$ = new D.$DvtAnimMoveBy$$($chart$$11_context$$248$$, $marker$$16_p3$$1$$, new D.$DvtPoint$$(-$size$$25$$ / 2, -$size$$25$$ / 2), $duration$$24$$);
  return new D.$DvtParallelPlayable$$($chart$$11_context$$248$$, [$endScale_p1$$2$$, $p2$$2$$, $marker$$16_p3$$1$$])
};
D.$DvtAnimOnDisplay$$.$_getLinePlayable$ = function $$DvtAnimOnDisplay$$$$_getLinePlayable$$($chart$$12_nodePlayable$$7$$, $line$$12$$, $duration$$25$$) {
  var $coords$$12$$ = $line$$12$$.$_arCoord$, $params$$42$$ = $line$$12$$.$getAnimationParams$(), $endState$$3$$ = $params$$42$$.slice(0);
  D.$DvtAnimOnDisplay$$.$_getMeanPoints$($params$$42$$);
  $line$$12$$.$setAnimationParams$($params$$42$$);
  $chart$$12_nodePlayable$$7$$ = new D.$DvtCustomAnimation$$($chart$$12_nodePlayable$$7$$.$_context$, $line$$12$$, $duration$$25$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($chart$$12_nodePlayable$$7$$.$_animator$, "typeNumberArray", $line$$12$$, $line$$12$$.$getAnimationParams$, $line$$12$$.$setAnimationParams$, $endState$$3$$);
  $chart$$12_nodePlayable$$7$$.$setOnEnd$(function() {
    $line$$12$$.$setCoords$($coords$$12$$)
  });
  return $chart$$12_nodePlayable$$7$$
};
D.$DvtAnimOnDisplay$$.$_getScatterPlayable$ = function $$DvtAnimOnDisplay$$$$_getScatterPlayable$$($chart$$13$$, $marker$$17$$, $duration$$26$$) {
  return new D.$DvtAnimPopIn$$($chart$$13$$.$_context$, $marker$$17$$, D.$JSCompiler_alias_TRUE$$, $duration$$26$$)
};
D.$DvtAnimOnDisplay$$.$_getMeanPoints$ = function $$DvtAnimOnDisplay$$$$_getMeanPoints$$($params$$43$$) {
  var $mean$$ = 0, $min$$5$$ = window.Number.MAX_VALUE, $max$$5$$ = window.Number.MIN_VALUE, $len$$18$$ = $params$$43$$.length, $i$$423$$;
  for($i$$423$$ = 0;$i$$423$$ < $len$$18$$;$i$$423$$++) {
    var $v$$9$$ = $params$$43$$[$i$$423$$];
    0 == $i$$423$$ % 4 || (3 == $i$$423$$ % 4 || window.Infinity == $v$$9$$) || ($v$$9$$ < $min$$5$$ && ($min$$5$$ = $v$$9$$), $v$$9$$ > $max$$5$$ && ($max$$5$$ = $v$$9$$), $mean$$ += $v$$9$$)
  }
  8 < $len$$18$$ ? ($mean$$ = $mean$$ - 2 * $min$$5$$ - 2 * $max$$5$$, $mean$$ /= $len$$18$$ / 2 - 4) : $mean$$ /= $len$$18$$ / 2;
  for($i$$423$$ = 0;$i$$423$$ < $len$$18$$;$i$$423$$++) {
    if(1 == $i$$423$$ % 4 || 2 == $i$$423$$ % 4) {
      $params$$43$$[$i$$423$$] = $mean$$
    }
  }
};
D.$DvtAnimOnDC$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtAnimOnDC$$, D.$DvtObj$$, "DvtAnimOnDC");
D.$DvtAnimOnDC$$.$createAnimation$ = function $$DvtAnimOnDC$$$$createAnimation$$($handler$$25_oldChart$$4$$, $newChart$$4$$, $arOldList_type$$101$$, $duration$$31$$, $delContainer$$4$$) {
  if(!D.$DvtAnimOnDC$$.$_canAnimate$($handler$$25_oldChart$$4$$, $newChart$$4$$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $ctx$$ = $newChart$$4$$.$_context$;
  $arOldList_type$$101$$ = [];
  var $arNewList$$ = [];
  D.$DvtChartTypeUtils$$.$isPie$($newChart$$4$$) ? ($arOldList_type$$101$$.push($handler$$25_oldChart$$4$$.$pieChart$), $arNewList$$.push($newChart$$4$$.$pieChart$)) : D.$DvtAnimOnDC$$.$_buildAnimLists$($arOldList_type$$101$$, $handler$$25_oldChart$$4$$, $arNewList$$, $newChart$$4$$, $duration$$31$$);
  var $playable$$13$$;
  $handler$$25_oldChart$$4$$ = new D.$DvtDataAnimationHandler$$($ctx$$, $delContainer$$4$$);
  (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($handler$$25_oldChart$$4$$, $arOldList_type$$101$$, $arNewList$$);
  0 < $handler$$25_oldChart$$4$$.$_playables$.length && ($playable$$13$$ = $handler$$25_oldChart$$4$$.$getAnimation$());
  return $playable$$13$$
};
D.$DvtAnimOnDC$$.$_buildAnimLists$ = function $$DvtAnimOnDC$$$$_buildAnimLists$$($arOldList$$1_i$$424$$, $oldChart$$5$$, $arNewList$$1$$, $newChart$$5$$, $duration$$32$$) {
  var $j$$70$$, $ar$$21$$ = $oldChart$$5$$.$peers$, $aOut$$ = $arOldList$$1_i$$424$$, $peer$$13$$, $obj$$152$$, $dch$$;
  for($arOldList$$1_i$$424$$ = 0;2 > $arOldList$$1_i$$424$$;$arOldList$$1_i$$424$$++) {
    for($j$$70$$ = 0;$j$$70$$ < $ar$$21$$.length;$j$$70$$++) {
      $peer$$13$$ = $ar$$21$$[$j$$70$$], $obj$$152$$ = $peer$$13$$.$getDisplayables$()[0], $dch$$ = D.$JSCompiler_alias_NULL$$, $obj$$152$$ instanceof D.$DvtFunnelSlice$$ ? $dch$$ = new D.$DvtDCFunnelSlice$$($peer$$13$$, $duration$$32$$) : $obj$$152$$ instanceof D.$DvtChartBar$$ || $obj$$152$$ instanceof D.$DvtChartPolarBar$$ ? $dch$$ = new D.$DvtDCChart2DBar$$($peer$$13$$, $duration$$32$$) : $obj$$152$$ instanceof D.$DvtChartLineArea$$ ? $dch$$ = new D.$DvtDCChartLineArea$$($peer$$13$$, $duration$$32$$) : 
      $obj$$152$$ instanceof D.$DvtMarker$$ && ($dch$$ = new D.$DvtDCChartMarker$$($peer$$13$$, $duration$$32$$)), $dch$$ && ($aOut$$.push($dch$$), $dch$$.$_oldChart$ = $oldChart$$5$$)
    }
    $aOut$$ = $arNewList$$1$$;
    $ar$$21$$ = $newChart$$5$$.$getObjects$()
  }
};
D.$DvtAnimOnDC$$.$_canAnimate$ = function $$DvtAnimOnDC$$$$_canAnimate$$($oldChart$$6$$, $newChart$$6$$) {
  return D.$DvtChartTypeUtils$$.$isPie$($oldChart$$6$$) && D.$DvtChartTypeUtils$$.$isPie$($newChart$$6$$) ? $oldChart$$6$$ && $newChart$$6$$ : D.$DvtChartTypeUtils$$.$isBLAC$($oldChart$$6$$) && D.$DvtChartTypeUtils$$.$isBLAC$($newChart$$6$$) ? D.$JSCompiler_alias_TRUE$$ : D.$DvtChartTypeUtils$$.$isScatterBubble$($oldChart$$6$$) && D.$DvtChartTypeUtils$$.$isScatterBubble$($newChart$$6$$) ? D.$JSCompiler_alias_TRUE$$ : $oldChart$$6$$.$getType$() == $newChart$$6$$.$getType$() ? D.$JSCompiler_alias_TRUE$$ : 
  D.$JSCompiler_alias_FALSE$$
};
D.$DvtDCChartAbstract$$ = function $$DvtDCChartAbstract$$$($peer$$5$$, $duration$$17$$) {
  this.Init($peer$$5$$, $duration$$17$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChartAbstract$$, D.$DvtObj$$, "DvtDCChartAbstract");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDCChartAbstract$$.prototype;
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_animId$");
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($peer$$6$$, $duration$$18$$) {
  this.$_peer$ = $peer$$6$$;
  this.$_updateDuration$ = 0.75 * $duration$$18$$;
  this.$_insertDuration$ = 0.5 * $duration$$18$$;
  this.$_deleteDuration$ = 0.5 * $duration$$18$$;
  this.$_shape$ = $peer$$6$$.$getDisplayables$()[0];
  this.$_animId$ = $peer$$6$$.$getSeries$() + "/" + $peer$$6$$.$getGroup$()
};
D.$DvtDCChart2DBar$$ = function $$DvtDCChart2DBar$$$($peer$$11$$, $duration$$29$$) {
  this.Init($peer$$11$$, $duration$$29$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChart2DBar$$, D.$DvtDCChartAbstract$$, "DvtDCChart2DBar");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDCChart2DBar$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($peer$$12$$, $duration$$30$$) {
  D.$DvtDCChart2DBar$$.$superclass$.Init.call(this, $peer$$12$$, $duration$$30$$);
  this.$_indicator$ = D.$JSCompiler_alias_NULL$$;
  this.$_animId$ += "/bar"
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$22$$) {
  var $playable$$11$$ = this.$_shape$.$getInsertAnimation$(this.$_insertDuration$);
  $handler$$22$$.add($playable$$11$$, 2)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$23$$, $delContainer$$3$$) {
  $delContainer$$3$$.$addChild$(this.$_shape$);
  var $playable$$12$$ = this.$_shape$.$getDeleteAnimation$(this.$_deleteDuration$);
  $handler$$23$$.add($playable$$12$$, 0)
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$24$$, $oldDC$$3$$) {
  var $nodePlayable$$11_startState$$2$$ = $oldDC$$3$$.$_getAnimationParams$(), $endState$$4$$ = this.$_getAnimationParams$();
  if(!D.$DvtArrayUtils$$.$equals$($nodePlayable$$11_startState$$2$$, $endState$$4$$)) {
    var $oldChart$$3$$ = this.$_oldChart$, $newChart$$3$$ = this.$_peer$.$_chart$, $newSIdx$$4$$ = this.$_peer$.$getSeriesIndex$(), $oldSIdx$$4$$ = $oldDC$$3$$.$_peer$.$getSeriesIndex$(), $newGIdx$$3$$ = this.$_peer$.$getGroupIndex$(), $oldGIdx$$3$$ = $oldDC$$3$$.$_peer$.$getGroupIndex$();
    "none" !== D.$DvtChartStyleUtils$$.$getAnimationIndicators$($newChart$$3$$) && (this.$_indicator$ = D.$DvtDCChartUtils$$.$makeIndicator$($oldChart$$3$$, $oldSIdx$$4$$, $oldGIdx$$3$$, $newChart$$3$$, $newSIdx$$4$$, $newGIdx$$3$$));
    this.$_setAnimationParams$($nodePlayable$$11_startState$$2$$);
    $nodePlayable$$11_startState$$2$$ = new D.$DvtCustomAnimation$$(this.$_shape$.$_context$, this, this.$_updateDuration$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$11_startState$$2$$.$_animator$, "typeNumberArray", this, this.$_getAnimationParams$, this.$_setAnimationParams$, $endState$$4$$);
    this.$_indicator$ && ($nodePlayable$$11_startState$$2$$.$setOnEnd$(this.$_onEndAnimation$, this), this.$_indicator$.$setAlpha$(0));
    $handler$$24$$.add($nodePlayable$$11_startState$$2$$, 1)
  }
};
D.$JSCompiler_prototypeAlias$$.$_getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_getAnimationParams$$() {
  return this.$_shape$.$getAnimationParams$()
};
D.$JSCompiler_prototypeAlias$$.$_setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_setAnimationParams$$($ar$$20$$) {
  this.$_shape$.$setAnimationParams$($ar$$20$$, this.$_indicator$)
};
D.$JSCompiler_prototypeAlias$$.$_onEndAnimation$ = function $$JSCompiler_prototypeAlias$$$$_onEndAnimation$$() {
  this.$_indicator$.getParent().removeChild(this.$_indicator$);
  this.$_indicator$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtDCChartLineArea$$ = function $$DvtDCChartLineArea$$$($peer$$3$$, $duration$$15$$) {
  this.Init($peer$$3$$, $duration$$15$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChartLineArea$$, D.$DvtDCChartAbstract$$, "DvtDCChartLineArea");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDCChartLineArea$$.prototype;
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$13$$, $oldDC$$) {
  this.$_baseCoords$ = this.$_shape$.$_arBaseCoord$;
  this.$_coords$ = this.$_shape$.$_arCoord$;
  var $i$$419_isArea$$ = this.$_shape$.$isArea$(), $nodePlayable$$1_oldChart$$2$$ = this.$_oldChart$, $newChart$$2$$ = this.$_chart$, $newSIdx$$2$$ = this.$_peer$.$getSeriesIndex$(), $oldSIdx$$2$$ = $oldDC$$.$_peer$.$getSeriesIndex$(), $newGIdcs$$ = (0,D.$JSCompiler_StaticMethods_getCommonGroupIndices$$)(this.$_shape$, $oldDC$$.$_shape$), $oldGIdcs$$ = (0,D.$JSCompiler_StaticMethods_getCommonGroupIndices$$)($oldDC$$.$_shape$, this.$_shape$), $baseAnim$$;
  if($i$$419_isArea$$) {
    var $JSCompiler_StaticMethods_addIndicator$self$$inline_5152_baseStartState_startState$$1$$ = $oldDC$$.$_getBaseAnimationParams$(this.$_shape$), $baseEndState_endState$$1_groupIndex$$inline_5153$$ = this.$_getBaseAnimationParams$($oldDC$$.$_shape$);
    (0,D.$DvtDCChartLineArea$_matchGroupIndices$$)($JSCompiler_StaticMethods_addIndicator$self$$inline_5152_baseStartState_startState$$1$$, $baseEndState_endState$$1_groupIndex$$inline_5153$$);
    D.$DvtArrayUtils$$.$equals$($JSCompiler_StaticMethods_addIndicator$self$$inline_5152_baseStartState_startState$$1$$, $baseEndState_endState$$1_groupIndex$$inline_5153$$) || (this.$_setBaseAnimationParams$($JSCompiler_StaticMethods_addIndicator$self$$inline_5152_baseStartState_startState$$1$$), $baseAnim$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, this.$_updateDuration$), (0,D.$JSCompiler_StaticMethods_addProp$$)($baseAnim$$.$_animator$, "typeNumberArray", this, this.$_getBaseAnimationParams$, 
    this.$_setBaseAnimationParams$, $baseEndState_endState$$1_groupIndex$$inline_5153$$))
  }
  var $topAnim$$, $JSCompiler_StaticMethods_addIndicator$self$$inline_5152_baseStartState_startState$$1$$ = $oldDC$$.$_getAnimationParams$(this.$_shape$), $baseEndState_endState$$1_groupIndex$$inline_5153$$ = this.$_getAnimationParams$($oldDC$$.$_shape$);
  (0,D.$DvtDCChartLineArea$_matchGroupIndices$$)($JSCompiler_StaticMethods_addIndicator$self$$inline_5152_baseStartState_startState$$1$$, $baseEndState_endState$$1_groupIndex$$inline_5153$$);
  D.$DvtArrayUtils$$.$equals$($JSCompiler_StaticMethods_addIndicator$self$$inline_5152_baseStartState_startState$$1$$, $baseEndState_endState$$1_groupIndex$$inline_5153$$) || (this.$_setAnimationParams$($JSCompiler_StaticMethods_addIndicator$self$$inline_5152_baseStartState_startState$$1$$), $topAnim$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, this.$_updateDuration$), (0,D.$JSCompiler_StaticMethods_addProp$$)($topAnim$$.$_animator$, "typeNumberArray", this, this.$_getAnimationParams$, 
  this.$_setAnimationParams$, $baseEndState_endState$$1_groupIndex$$inline_5153$$));
  if("none" !== D.$DvtChartStyleUtils$$.$getAnimationIndicators$($newChart$$2$$) && !($i$$419_isArea$$ && "lineWithArea" == this.$_peer$.$getSeriesType$())) {
    for(var $direction$$24_direction$$inline_5154$$, $indicator$$2_indicator$$inline_5155$$, $i$$419_isArea$$ = 0;$i$$419_isArea$$ < $newGIdcs$$.length;$i$$419_isArea$$++) {
      if($direction$$24_direction$$inline_5154$$ = D.$DvtDCChartUtils$$.$getDirection$($nodePlayable$$1_oldChart$$2$$, $oldSIdx$$2$$, $oldGIdcs$$[$i$$419_isArea$$], $newChart$$2$$, $newSIdx$$2$$, $newGIdcs$$[$i$$419_isArea$$]), $indicator$$2_indicator$$inline_5155$$ = D.$DvtDCChartUtils$$.$makeIndicator$($nodePlayable$$1_oldChart$$2$$, $oldSIdx$$2$$, $oldGIdcs$$[$i$$419_isArea$$], $newChart$$2$$, $newSIdx$$2$$, $newGIdcs$$[$i$$419_isArea$$])) {
        $JSCompiler_StaticMethods_addIndicator$self$$inline_5152_baseStartState_startState$$1$$ = this.$_shape$, $baseEndState_endState$$1_groupIndex$$inline_5153$$ = $newGIdcs$$[$i$$419_isArea$$], $indicator$$2_indicator$$inline_5155$$.$setAlpha$(0), $JSCompiler_StaticMethods_addIndicator$self$$inline_5152_baseStartState_startState$$1$$.$_indicatorMap$[$baseEndState_endState$$1_groupIndex$$inline_5153$$] = {direction:$direction$$24_direction$$inline_5154$$, $indicator$:$indicator$$2_indicator$$inline_5155$$}
      }
    }
  }
  if($baseAnim$$ || $topAnim$$) {
    $nodePlayable$$1_oldChart$$2$$ = new D.$DvtParallelPlayable$$(this.$_context$, $baseAnim$$, $topAnim$$), $nodePlayable$$1_oldChart$$2$$.$setOnEnd$(this.$_onAnimationEnd$, this), $handler$$13$$.add($nodePlayable$$1_oldChart$$2$$, 1)
  }
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$14$$) {
  this.$_shape$.$setAlpha$(0);
  var $nodePlayable$$2$$ = new D.$DvtAnimFadeIn$$(this.$_context$, this.$_shape$, this.$_insertDuration$);
  $handler$$14$$.add($nodePlayable$$2$$, 2)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$15$$, $delContainer$$) {
  var $areaContainer_nodePlayable$$3$$;
  "area" == D.$DvtChartStyleUtils$$.$getSeriesType$(this.$_oldChart$, this.$_peer$.$getSeriesIndex$()) ? ($areaContainer_nodePlayable$$3$$ = this.$_chart$.$_areaContainer$, this.$_deletedAreas$ = this.$_shape$.getParent().getParent(), $areaContainer_nodePlayable$$3$$ && ($areaContainer_nodePlayable$$3$$.$addChild$(this.$_deletedAreas$), $areaContainer_nodePlayable$$3$$ = new D.$DvtAnimFadeOut$$(this.$_context$, this.$_deletedAreas$, this.$_deleteDuration$), $areaContainer_nodePlayable$$3$$.$setOnEnd$(this.$_removeDeletedAreas$, 
  this), $handler$$15$$.add($areaContainer_nodePlayable$$3$$, 0))) : ($delContainer$$.$addChild$(this.$_shape$), $areaContainer_nodePlayable$$3$$ = new D.$DvtAnimFadeOut$$(this.$_context$, this.$_shape$, this.$_deleteDuration$), $handler$$15$$.add($areaContainer_nodePlayable$$3$$, 0))
};
D.$JSCompiler_prototypeAlias$$.$_removeDeletedAreas$ = function $$JSCompiler_prototypeAlias$$$$_removeDeletedAreas$$() {
  var $areaContainer$$1$$ = this.$_chart$.$_areaContainer$;
  $areaContainer$$1$$ && $areaContainer$$1$$.removeChild(this.$_deletedAreas$)
};
D.$JSCompiler_prototypeAlias$$.$_getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_getAnimationParams$$($otherShape$$) {
  return this.$_shape$.$getAnimationParams$($otherShape$$)
};
D.$JSCompiler_prototypeAlias$$.$_setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_setAnimationParams$$($params$$39$$) {
  this.$_shape$.$setAnimationParams$($params$$39$$)
};
D.$JSCompiler_prototypeAlias$$.$_getBaseAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_getBaseAnimationParams$$($otherShape$$1$$) {
  return this.$_shape$.$getBaseAnimationParams$($otherShape$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$_setBaseAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_setBaseAnimationParams$$($params$$40$$) {
  this.$_shape$.$setBaseAnimationParams$($params$$40$$)
};
D.$JSCompiler_prototypeAlias$$.$_onAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onAnimationEnd$$() {
  var $JSCompiler_StaticMethods_removeIndicators$self$$inline_5157$$ = this.$_shape$, $groupIndex$$inline_5158$$;
  for($groupIndex$$inline_5158$$ in $JSCompiler_StaticMethods_removeIndicators$self$$inline_5157$$.$_indicatorMap$) {
    var $indicator$$inline_5159$$ = $JSCompiler_StaticMethods_removeIndicators$self$$inline_5157$$.$_indicatorMap$[$groupIndex$$inline_5158$$].$indicator$;
    $indicator$$inline_5159$$ && $indicator$$inline_5159$$.getParent().removeChild($indicator$$inline_5159$$)
  }
  $JSCompiler_StaticMethods_removeIndicators$self$$inline_5157$$.$_indicatorMap$ = {};
  this.$_shape$.$setCoords$(this.$_coords$, this.$_baseCoords$)
};
D.$DvtDCChartLineArea$_matchGroupIndices$$ = function $$DvtDCChartLineArea$_matchGroupIndices$$$($startParams$$, $endParams$$) {
  for(var $i$$420$$ = 3;$i$$420$$ < $startParams$$.length;$i$$420$$ += 4) {
    $startParams$$[$i$$420$$] = $endParams$$[$i$$420$$]
  }
};
D.$DvtDCChartLineArea$$.prototype.Init = function $$DvtDCChartLineArea$$$$Init$($peer$$4$$, $duration$$16$$) {
  D.$DvtDCChartLineArea$$.$superclass$.Init.call(this, $peer$$4$$, $duration$$16$$);
  this.$_context$ = this.$_shape$.$_context$;
  this.$_chart$ = this.$_peer$.$_chart$;
  this.$_animId$ += "/" + (this.$_shape$.$isArea$() ? "area" : "line")
};
D.$DvtDCChartMarker$$ = function $$DvtDCChartMarker$$$($peer$$9$$, $duration$$27$$) {
  this.Init($peer$$9$$, $duration$$27$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChartMarker$$, D.$DvtDCChartAbstract$$, "DvtDCChartMarker");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDCChartMarker$$.prototype;
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$19$$, $oldDC$$1$$) {
  var $oldObj$$ = $oldDC$$1$$.$_shape$, $newObj$$ = this.$_shape$, $alpha$$20_chart$$14_endMatrix_fc$$2$$ = $newObj$$.$getMatrix$(), $bRet$$inline_5163_oldSIdx$$inline_5164_overlay$$14_startMatrix$$ = new D.$DvtMatrix$$;
  $bRet$$inline_5163_oldSIdx$$inline_5164_overlay$$14_startMatrix$$.translate(-$newObj$$.$getX$(), -$newObj$$.$getY$());
  $bRet$$inline_5163_oldSIdx$$inline_5164_overlay$$14_startMatrix$$.scale($oldObj$$.getWidth() / $newObj$$.getWidth(), $oldObj$$.getHeight() / $newObj$$.getHeight());
  $bRet$$inline_5163_oldSIdx$$inline_5164_overlay$$14_startMatrix$$.translate($oldObj$$.$getX$(), $oldObj$$.$getY$());
  if(!$alpha$$20_chart$$14_endMatrix_fc$$2$$.$equals$($bRet$$inline_5163_oldSIdx$$inline_5164_overlay$$14_startMatrix$$)) {
    var $nodePlayable$$8$$ = new D.$DvtCustomAnimation$$(this.$_shape$.$_context$, this, this.$_updateDuration$);
    this.$_shape$.$setMatrix$($bRet$$inline_5163_oldSIdx$$inline_5164_overlay$$14_startMatrix$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$8$$.$_animator$, "typeMatrix", this.$_shape$, this.$_shape$.$getMatrix$, this.$_shape$.$setMatrix$, $alpha$$20_chart$$14_endMatrix_fc$$2$$);
    $alpha$$20_chart$$14_endMatrix_fc$$2$$ = this.$_peer$.$_chart$;
    $bRet$$inline_5163_oldSIdx$$inline_5164_overlay$$14_startMatrix$$ = D.$JSCompiler_alias_FALSE$$;
    if($oldDC$$1$$) {
      var $bRet$$inline_5163_oldSIdx$$inline_5164_overlay$$14_startMatrix$$ = $oldDC$$1$$.$_peer$.$getSeriesIndex$(), $fa_fill$$35_oldGIdx$$inline_5165_overlayEndMatrix$$ = $oldDC$$1$$.$_peer$.$getGroupIndex$(), $newSIdx$$inline_5166$$ = this.$_peer$.$getSeriesIndex$(), $newGIdx$$inline_5167$$ = this.$_peer$.$getGroupIndex$(), $oldData$$inline_5168$$ = $oldDC$$1$$.$_oldChart$.$getOptions$(), $newData$$inline_5169$$ = this.$_peer$.$_chart$.$getOptions$(), $oldY$$inline_5170$$ = $oldData$$inline_5168$$.series[$bRet$$inline_5163_oldSIdx$$inline_5164_overlay$$14_startMatrix$$].items[$fa_fill$$35_oldGIdx$$inline_5165_overlayEndMatrix$$].y, 
      $oldZ$$inline_5171$$ = $oldData$$inline_5168$$.series[$bRet$$inline_5163_oldSIdx$$inline_5164_overlay$$14_startMatrix$$].items[$fa_fill$$35_oldGIdx$$inline_5165_overlayEndMatrix$$].z, $newY$$inline_5172$$ = $newData$$inline_5169$$.series[$newSIdx$$inline_5166$$].items[$newGIdx$$inline_5167$$].y, $newZ$$inline_5173$$ = $newData$$inline_5169$$.series[$newSIdx$$inline_5166$$].items[$newGIdx$$inline_5167$$].z, $bRet$$inline_5163_oldSIdx$$inline_5164_overlay$$14_startMatrix$$ = $newData$$inline_5169$$.series[$newSIdx$$inline_5166$$].items[$newGIdx$$inline_5167$$].x !== 
      $oldData$$inline_5168$$.series[$bRet$$inline_5163_oldSIdx$$inline_5164_overlay$$14_startMatrix$$].items[$fa_fill$$35_oldGIdx$$inline_5165_overlayEndMatrix$$].x || $newY$$inline_5172$$ !== $oldY$$inline_5170$$ || $newZ$$inline_5173$$ !== $oldZ$$inline_5171$$
    }
    $bRet$$inline_5163_oldSIdx$$inline_5164_overlay$$14_startMatrix$$ && ("none" != D.$DvtChartStyleUtils$$.$getAnimationIndicators$(this.$_peer$.$_chart$) && D.$DvtChartTypeUtils$$.$isScatterBubble$($alpha$$20_chart$$14_endMatrix_fc$$2$$)) && ($bRet$$inline_5163_oldSIdx$$inline_5164_overlay$$14_startMatrix$$ = $oldDC$$1$$.$_shape$, D.$DvtChartTypeUtils$$.$isScatter$($alpha$$20_chart$$14_endMatrix_fc$$2$$) ? ($alpha$$20_chart$$14_endMatrix_fc$$2$$ = "#FFFF2B", $fa_fill$$35_oldGIdx$$inline_5165_overlayEndMatrix$$ = 
    0.7) : ($alpha$$20_chart$$14_endMatrix_fc$$2$$ = "#D5D500", $fa_fill$$35_oldGIdx$$inline_5165_overlayEndMatrix$$ = 0.4), $fa_fill$$35_oldGIdx$$inline_5165_overlayEndMatrix$$ = new D.$DvtSolidFill$$($alpha$$20_chart$$14_endMatrix_fc$$2$$, $fa_fill$$35_oldGIdx$$inline_5165_overlayEndMatrix$$), $alpha$$20_chart$$14_endMatrix_fc$$2$$ = this.$_shape$.$getAlpha$(), this.$_shape$.$setAlpha$(0), $bRet$$inline_5163_oldSIdx$$inline_5164_overlay$$14_startMatrix$$.$setFill$($fa_fill$$35_oldGIdx$$inline_5165_overlayEndMatrix$$), 
    this.$_peer$.$_chart$.$getPlotArea$().$addChild$($bRet$$inline_5163_oldSIdx$$inline_5164_overlay$$14_startMatrix$$), $fa_fill$$35_oldGIdx$$inline_5165_overlayEndMatrix$$ = new D.$DvtMatrix$$, $fa_fill$$35_oldGIdx$$inline_5165_overlayEndMatrix$$.translate(-$oldObj$$.$getX$(), -$oldObj$$.$getY$()), $fa_fill$$35_oldGIdx$$inline_5165_overlayEndMatrix$$.scale($newObj$$.getWidth() / $oldObj$$.getWidth(), $newObj$$.getHeight() / $oldObj$$.getHeight()), $fa_fill$$35_oldGIdx$$inline_5165_overlayEndMatrix$$.translate($newObj$$.$getX$(), 
    $newObj$$.$getY$()), (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$8$$.$_animator$, "typeNumber", this.$_shape$, this.$_shape$.$getAlpha$, this.$_shape$.$setAlpha$, $alpha$$20_chart$$14_endMatrix_fc$$2$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$8$$.$_animator$, "typeMatrix", $bRet$$inline_5163_oldSIdx$$inline_5164_overlay$$14_startMatrix$$, $bRet$$inline_5163_oldSIdx$$inline_5164_overlay$$14_startMatrix$$.$getMatrix$, $bRet$$inline_5163_oldSIdx$$inline_5164_overlay$$14_startMatrix$$.$setMatrix$, 
    $fa_fill$$35_oldGIdx$$inline_5165_overlayEndMatrix$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$8$$.$_animator$, "typeNumber", $bRet$$inline_5163_oldSIdx$$inline_5164_overlay$$14_startMatrix$$, $bRet$$inline_5163_oldSIdx$$inline_5164_overlay$$14_startMatrix$$.$getAlpha$, $bRet$$inline_5163_oldSIdx$$inline_5164_overlay$$14_startMatrix$$.$setAlpha$, 0), this.$_overlay$ = $bRet$$inline_5163_oldSIdx$$inline_5164_overlay$$14_startMatrix$$, $nodePlayable$$8$$.$setOnEnd$(this.$_onEndAnimation$, 
    this));
    $handler$$19$$.add($nodePlayable$$8$$, 1)
  }
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$20$$) {
  this.$_shape$.$setAlpha$(0);
  var $nodePlayable$$9$$ = new D.$DvtAnimFadeIn$$(this.$_shape$.$_context$, this.$_shape$, this.$_insertDuration$);
  $handler$$20$$.add($nodePlayable$$9$$, 2)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$21$$, $delContainer$$2$$) {
  $delContainer$$2$$.$addChild$(this.$_shape$);
  var $nodePlayable$$10$$ = new D.$DvtAnimFadeOut$$(this.$_shape$.$_context$, this.$_shape$, this.$_deleteDuration$);
  $handler$$21$$.add($nodePlayable$$10$$, 0)
};
D.$JSCompiler_prototypeAlias$$.$_onEndAnimation$ = function $$JSCompiler_prototypeAlias$$$$_onEndAnimation$$() {
  this.$_overlay$ && (this.$_peer$.$_chart$.$getPlotArea$().removeChild(this.$_overlay$), this.$_overlay$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($peer$$10$$, $duration$$28$$) {
  D.$DvtDCChartMarker$$.$superclass$.Init.call(this, $peer$$10$$, $duration$$28$$);
  this.$_animId$ += "/marker"
};
D.$DvtDCChartUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChartUtils$$, D.$DvtObj$$, "DvtDCChartUtils");
D.$DvtDCChartUtils$$.$DIR_UP$ = 0;
D.$DvtDCChartUtils$$.$DIR_DOWN$ = 1;
D.$DvtDCChartUtils$$.$DIR_NOCHANGE$ = 2;
D.$DvtDCChartUtils$$.$makeIndicator$ = function $$DvtDCChartUtils$$$$makeIndicator$$($bDown_indicator$$1_oldChart_uiDirection$$, $oldSIdx$$, $oldGIdx$$, $newChart$$, $newSIdx$$, $newGIdx$$) {
  if(D.$DvtChartTypeUtils$$.$isPolar$($newChart$$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  $bDown_indicator$$1_oldChart_uiDirection$$ = D.$DvtDCChartUtils$$.$getDirection$($bDown_indicator$$1_oldChart_uiDirection$$, $oldSIdx$$, $oldGIdx$$, $newChart$$, $newSIdx$$, $newGIdx$$);
  if($bDown_indicator$$1_oldChart_uiDirection$$ == D.$DvtDCChartUtils$$.$DIR_NOCHANGE$) {
    return D.$JSCompiler_alias_NULL$$
  }
  window.fc = ($bDown_indicator$$1_oldChart_uiDirection$$ = $bDown_indicator$$1_oldChart_uiDirection$$ === D.$DvtDCChartUtils$$.$DIR_DOWN$) ? D.$DvtChartStyleUtils$$.$getAnimationDownColor$($newChart$$) : D.$DvtChartStyleUtils$$.$getAnimationUpColor$($newChart$$);
  $bDown_indicator$$1_oldChart_uiDirection$$ = D.$DvtDCChartUtils$$.$_drawIndicator$($newChart$$.$_context$, $bDown_indicator$$1_oldChart_uiDirection$$, D.$DvtChartTypeUtils$$.$isHorizontal$($newChart$$));
  $newChart$$.$getPlotArea$().$addChild$($bDown_indicator$$1_oldChart_uiDirection$$);
  return $bDown_indicator$$1_oldChart_uiDirection$$
};
D.$DvtDCChartUtils$$.$getDirection$ = function $$DvtDCChartUtils$$$$getDirection$$($oldChart$$1_oldValue$$, $oldSIdx$$1$$, $oldGIdx$$1$$, $newChart$$1_newValue$$, $newSIdx$$1$$, $newGIdx$$1$$) {
  $oldChart$$1_oldValue$$ = D.$DvtChartDataUtils$$.getValue($oldChart$$1_oldValue$$, $oldSIdx$$1$$, $oldGIdx$$1$$);
  $newChart$$1_newValue$$ = D.$DvtChartDataUtils$$.getValue($newChart$$1_newValue$$, $newSIdx$$1$$, $newGIdx$$1$$);
  return $newChart$$1_newValue$$ == D.$JSCompiler_alias_NULL$$ || $oldChart$$1_oldValue$$ == D.$JSCompiler_alias_NULL$$ || $newChart$$1_newValue$$ == $oldChart$$1_oldValue$$ ? D.$DvtDCChartUtils$$.$DIR_NOCHANGE$ : $newChart$$1_newValue$$ > $oldChart$$1_oldValue$$ ? D.$DvtDCChartUtils$$.$DIR_UP$ : D.$DvtDCChartUtils$$.$DIR_DOWN$
};
D.$DvtDCChartUtils$$.$_drawIndicator$ = function $$DvtDCChartUtils$$$$_drawIndicator$$($context$$245_ret$$80$$, $bDown$$1_ptrCmds$$, $bHoriz$$3$$) {
  var $fc$$1$$ = window.fc;
  $bDown$$1_ptrCmds$$ = $bHoriz$$3$$ ? ((0,D.$DvtAgent$isRightToLeft$$)($context$$245_ret$$80$$) ? !$bDown$$1_ptrCmds$$ : $bDown$$1_ptrCmds$$) ? "M3.5,-5L3.5,5L-3.5,0L3.5,-5" : "M-3.5,-5L-3.5,5L3.5,0L-3.5,-5" : $bDown$$1_ptrCmds$$ ? "M-5,-3.5L5,-3.5L0,3.5L-5,-3.5Z" : "M-5,3.5L5,3.5L0,-3.5L-5,3.5Z";
  $context$$245_ret$$80$$ = new D.$DvtPath$$($context$$245_ret$$80$$, $bDown$$1_ptrCmds$$);
  $context$$245_ret$$80$$.$setSolidFill$($fc$$1$$);
  return $context$$245_ret$$80$$
};
D.$DvtDCFunnelSlice$$ = function $$DvtDCFunnelSlice$$$($peer$$14$$, $duration$$33$$) {
  this.Init($peer$$14$$, $duration$$33$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCFunnelSlice$$, D.$DvtDCChartAbstract$$, "DvtDCFunnelSlice");
D.$DvtDCFunnelSlice$$.prototype.$animateUpdate$ = function $$DvtDCFunnelSlice$$$$$animateUpdate$$($handler$$26$$, $oldDC$$4$$) {
  var $obj$$153$$ = this.$_shape$, $nodePlayable$$12_startState$$3$$ = $oldDC$$4$$.$_shape$.$getAnimationParams$(), $endState$$5$$ = $obj$$153$$.$getAnimationParams$();
  D.$DvtArrayUtils$$.$equals$($nodePlayable$$12_startState$$3$$, $endState$$5$$) || ($obj$$153$$.$setAnimationParams$($nodePlayable$$12_startState$$3$$), $nodePlayable$$12_startState$$3$$ = new D.$DvtCustomAnimation$$($obj$$153$$.$_context$, this, this.$_updateDuration$), (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$12_startState$$3$$.$_animator$, "typeNumberArray", $obj$$153$$, $obj$$153$$.$getAnimationParams$, $obj$$153$$.$setAnimationParams$, $endState$$5$$), this.$_indicator$ && $nodePlayable$$12_startState$$3$$.$setOnEnd$(this.$_onEndAnimation$, 
  this), $handler$$26$$.add($nodePlayable$$12_startState$$3$$, 1))
};
D.$DvtDCFunnelSlice$$.prototype.$animateInsert$ = function $$DvtDCFunnelSlice$$$$$animateInsert$$($handler$$27$$) {
  var $obj$$154$$ = this.$_shape$, $endState$$6$$ = $obj$$154$$.$getAnimationParams$(), $nodePlayable$$13_startState$$4$$ = $endState$$6$$.slice(0);
  $nodePlayable$$13_startState$$4$$[0] += $nodePlayable$$13_startState$$4$$[1] / 2;
  $nodePlayable$$13_startState$$4$$[1] = 0;
  $nodePlayable$$13_startState$$4$$[3] = 0;
  $obj$$154$$.$setAnimationParams$($nodePlayable$$13_startState$$4$$);
  $nodePlayable$$13_startState$$4$$ = new D.$DvtCustomAnimation$$($obj$$154$$.$_context$, this, this.$_insertDuration$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$13_startState$$4$$.$_animator$, "typeNumberArray", $obj$$154$$, $obj$$154$$.$getAnimationParams$, $obj$$154$$.$setAnimationParams$, $endState$$6$$);
  $handler$$27$$.add($nodePlayable$$13_startState$$4$$, 2)
};
D.$DvtDCFunnelSlice$$.prototype.$animateDelete$ = function $$DvtDCFunnelSlice$$$$$animateDelete$$($handler$$28$$, $delContainer$$5$$) {
  var $obj$$155$$ = this.$_shape$;
  $delContainer$$5$$.$addChild$($obj$$155$$);
  var $nodePlayable$$14_startState$$5$$ = $obj$$155$$.$getAnimationParams$(), $endState$$7$$ = $nodePlayable$$14_startState$$5$$.slice(0);
  $endState$$7$$[0] += $nodePlayable$$14_startState$$5$$[1] / 2;
  $endState$$7$$[1] = 0;
  $endState$$7$$[3] = 0;
  $nodePlayable$$14_startState$$5$$ = new D.$DvtCustomAnimation$$($obj$$155$$.$_context$, this, this.$_deleteDuration$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$14_startState$$5$$.$_animator$, "typeNumberArray", $obj$$155$$, $obj$$155$$.$getAnimationParams$, $obj$$155$$.$setAnimationParams$, $endState$$7$$);
  $handler$$28$$.add($nodePlayable$$14_startState$$5$$, 0)
};
D.$DvtDCFunnelSlice$$.prototype.Init = function $$DvtDCFunnelSlice$$$$Init$($peer$$15$$, $duration$$34$$) {
  D.$DvtDCFunnelSlice$$.$superclass$.Init.call(this, $peer$$15$$, $duration$$34$$);
  this.$_animId$ += "/funnel"
};
D.$DvtChart$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtChart", D.$DvtChart$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChart$$, D.$DvtBaseComponent$$, "DvtChart");
D.$DvtChart$newInstance$$ = function $$DvtChart$newInstance$$$($context$$691$$, $callback$$145$$, $callbackObj$$105$$) {
  return new D.$DvtChartImpl$$($context$$691$$, $callback$$145$$, $callbackObj$$105$$)
};
D.$DvtChart$$.newInstance = D.$DvtChart$newInstance$$;
D.$DvtChart$$.getDefaults = function $$DvtChart$$$getDefaults$($skin$$14$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtChartDefaults$$, $skin$$14$$)
};
D.$DvtChart$$.prototype.Init = function $$DvtChart$$$$Init$($context$$692$$, $callback$$146$$, $callbackObj$$106$$) {
  D.$DvtChart$$.$superclass$.Init.call(this, $context$$692$$, $callback$$146$$, $callbackObj$$106$$);
  this.$Bundle$ = new D.$DvtChartBundle$$;
  this.$Defaults$ = new D.$DvtChartDefaults$$;
  this.$EventManager$ = new D.$DvtChartEventManager$$(this);
  this.$EventManager$.$addListeners$(this);
  (0,D.$DvtAgent$isTouchDevice$$)() || (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$EventManager$, this.$CreateKeyboardHandler$(this.$EventManager$));
  this.setId("chart1000" + window.Math.floor(1E9 * window.Math.random()));
  this.$_animation$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtChart$$.prototype.$SetOptions$ = function $$DvtChart$$$$$SetOptions$$($handler$$inline_8692_options$$248$$) {
  $handler$$inline_8692_options$$248$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($handler$$inline_8692_options$$248$$), "horizontalBar" == this.$Options$.type && (this.$Options$.type = "bar", this.$Options$.orientation = "horizontal"), D.$DvtChartDataUtils$$.$processDataObject$(this), "dim" == D.$DvtChartEventUtils$$.$getHoverBehavior$(this) ? ($handler$$inline_8692_options$$248$$ = new D.$DvtChartSeriesRolloverHandler$$(this, this.$EventManager$), this.$EventManager$.$_seriesRolloverHandler$ = 
  $handler$$inline_8692_options$$248$$) : this.$EventManager$.$_seriesRolloverHandler$ = D.$JSCompiler_alias_NULL$$, (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this))
};
D.$DvtChart$$.prototype.$render$ = function $$DvtChart$$$$$render$$($options$$249_paSpace$$, $container$$173_width$$168$$, $animationDuration$$8_height$$149$$) {
  var $animationOnDataChange$$1_dataCursorBehavior_handler$$inline_8704$$ = D.$DvtChartStyleUtils$$.$getAnimationOnDataChange$(this), $oldChart$$8$$ = D.$JSCompiler_alias_NULL$$, $context$$693$$ = this.$_context$;
  this.$Options$ && "none" !== $animationOnDataChange$$1_dataCursorBehavior_handler$$inline_8704$$ && ($oldChart$$8$$ = {options:this.$Options$, type:this.$getType$(), $seriesStyleArray$:this.$getSeriesStyleArray$(), $peers$:this.$getObjects$().slice(0), $getOptions$:(0,D.$JSCompiler_get$$)("options"), $getType$:(0,D.$JSCompiler_get$$)("type"), $getSeriesStyleArray$:(0,D.$JSCompiler_get$$)("$seriesStyleArray$"), $pieChart$:this.$pieChart$});
  this.$__cleanUp$();
  this.$SetOptions$($options$$249_paSpace$$);
  !(0,window.isNaN)($container$$173_width$$168$$) && !(0,window.isNaN)($animationDuration$$8_height$$149$$) && (this.$Width$ = $container$$173_width$$168$$, this.$Height$ = $animationDuration$$8_height$$149$$);
  $container$$173_width$$168$$ = new D.$DvtContainer$$($context$$693$$);
  this.$addChild$($container$$173_width$$168$$);
  D.$DvtChartRenderer$$.$render$(this, $container$$173_width$$168$$, new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$));
  this.$legend$ && "none" != D.$DvtChartEventUtils$$.$getHideAndShowBehavior$(this) && (0,D.$JSCompiler_StaticMethods_setKeyboardFocusArray$$)($context$$693$$, [this, this.$legend$]);
  this.$_animation$ && this.$_animation$.stop();
  var $animationOnDisplay$$5$$ = D.$DvtChartStyleUtils$$.$getAnimationOnDisplay$(this);
  $animationDuration$$8_height$$149$$ = D.$DvtChartStyleUtils$$.$getAnimationDuration$(this);
  var $bounds$$138$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$), $bBlackBoxUpdate$$2$$ = D.$JSCompiler_alias_FALSE$$;
  this.$_container$ ? "none" != $animationOnDataChange$$1_dataCursorBehavior_handler$$inline_8704$$ && $options$$249_paSpace$$ && ((this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$($context$$693$$, $animationOnDataChange$$1_dataCursorBehavior_handler$$inline_8704$$, this.$_container$, $container$$173_width$$168$$, $bounds$$138$$, $animationDuration$$8_height$$149$$)) ? $bBlackBoxUpdate$$2$$ = D.$JSCompiler_alias_TRUE$$ : ($options$$249_paSpace$$ = this.$_plotAreaSpace$, 
  this.$_delContainer$ = D.$DvtPlotAreaRenderer$$.$createClippedGroup$(this, this.$_container$, new D.$DvtRectangle$$(0, 0, $options$$249_paSpace$$.$w$, $options$$249_paSpace$$.$h$)), this.$_animation$ = D.$DvtAnimOnDC$$.$createAnimation$($oldChart$$8$$, this, $animationOnDataChange$$1_dataCursorBehavior_handler$$inline_8704$$, $animationDuration$$8_height$$149$$, this.$_delContainer$), 0 < this.$_delContainer$.$getNumChildren$() && (D.$DvtChartTypeUtils$$.$isFunnel$(this) ? this.$_funnelContainer$.$addChild$(this.$_delContainer$) : 
  this.$getPlotArea$().$addChild$(this.$_delContainer$)))) : "none" !== $animationOnDisplay$$5$$ && (this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$($context$$693$$, $animationOnDisplay$$5$$, $container$$173_width$$168$$, $bounds$$138$$, $animationDuration$$8_height$$149$$), this.$_animation$ || (this.$_animation$ = D.$DvtAnimOnDisplay$$.$createAnimation$(this, $animationOnDisplay$$5$$, $animationDuration$$8_height$$149$$)));
  this.$_animation$ && (this.$_animation$.play(), (0,D.$DvtPlayable$appendOnEnd$$)(this.$_animation$, this.$_onAnimationEnd$, this));
  $bBlackBoxUpdate$$2$$ ? this.$_oldContainer$ = this.$_container$ : this.$_container$ && (this.removeChild(this.$_container$), this.$_container$.$destroy$(), this.$_container$ = D.$JSCompiler_alias_NULL$$);
  this.$_container$ = $container$$173_width$$168$$;
  (D.$DvtChartTypeUtils$$.$isPie$(this) || D.$DvtChartTypeUtils$$.$isFunnel$(this) || D.$DvtChartTypeUtils$$.$isPolar$(this) ? 0 : "on" === this.$Options$.dataCursor || "auto" === this.$Options$.dataCursor && (0,D.$DvtAgent$isTouchDevice$$)() && D.$DvtChartTypeUtils$$.$isLineArea$(this)) ? (this.$DataCursor$ = D.$DvtChartTypeUtils$$.$isHorizontal$(this) ? new D.$DvtDataCursor$$($context$$693$$, D.$JSCompiler_alias_TRUE$$) : new D.$DvtDataCursor$$($context$$693$$, D.$JSCompiler_alias_FALSE$$), $animationOnDataChange$$1_dataCursorBehavior_handler$$inline_8704$$ = 
  this.$Options$.dataCursorBehavior, "auto" == $animationOnDataChange$$1_dataCursorBehavior_handler$$inline_8704$$ && ($animationOnDataChange$$1_dataCursorBehavior_handler$$inline_8704$$ = D.$DvtChartTypeUtils$$.$isLineArea$(this) ? "smooth" : "snap"), "snap" == $animationOnDataChange$$1_dataCursorBehavior_handler$$inline_8704$$ ? this.$DataCursor$.$_behavior$ = "SNAP" : "smooth" == $animationOnDataChange$$1_dataCursorBehavior_handler$$inline_8704$$ && (this.$DataCursor$.$_behavior$ = "SMOOTH"), 
  this.$addChild$(this.$DataCursor$), $animationOnDataChange$$1_dataCursorBehavior_handler$$inline_8704$$ = new D.$DvtChartDCEH$$(this), this.$EventManager$.$_dataCursorHandler$ = $animationOnDataChange$$1_dataCursorBehavior_handler$$inline_8704$$) : this.$EventManager$.$_dataCursorHandler$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtChart$$.prototype.render = D.$DvtChart$$.prototype.$render$;
D.$DvtChart$$.prototype.$destroy$ = function $$DvtChart$$$$$destroy$$() {
  this.$EventManager$ && (this.$EventManager$.$removeListeners$(this), this.$EventManager$.$destroy$(), this.$EventManager$ = D.$JSCompiler_alias_NULL$$);
  D.$DvtChart$$.$superclass$.$destroy$.call(this)
};
D.$DvtChart$$.prototype.destroy = D.$DvtChart$$.prototype.$destroy$;
D.$DvtChart$$.prototype.$__cleanUp$ = function $$DvtChart$$$$$__cleanUp$$() {
  this.$DataCursor$ && (this.removeChild(this.$DataCursor$), this.$DataCursor$ = D.$JSCompiler_alias_NULL$$);
  if(this.$EventManager$) {
    var $JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_8717$$ = this.$EventManager$;
    $JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_8717$$.$hideTooltip$();
    $JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_8717$$.$_dataCursorHandler$ && (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_8717$$.$_dataCursorHandler$)
  }
};
D.$DvtChart$$.prototype.$_onAnimationEnd$ = function $$DvtChart$$$$$_onAnimationEnd$$() {
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$.$destroy$(), this.$_oldContainer$ = D.$JSCompiler_alias_NULL$$);
  this.$_delContainer$ && 0 < this.$_delContainer$.$getNumChildren$() && (D.$DvtChartTypeUtils$$.$isFunnel$(this) ? this.$_funnelContainer$.removeChild(this.$_delContainer$) : this.$getPlotArea$().removeChild(this.$_delContainer$));
  this.$_animation$ = this.$_delContainer$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtChart$$.prototype.$CreateKeyboardHandler$ = function $$DvtChart$$$$$CreateKeyboardHandler$$($manager$$23$$) {
  return new D.$DvtChartKeyboardHandler$$($manager$$23$$, this)
};
D.$DvtChart$$.prototype.$getAutomation$ = function $$DvtChart$$$$$getAutomation$$() {
  return new D.$DvtChartAutomation$$(this)
};
D.$DvtChart$$.prototype.getAutomation = D.$DvtChart$$.prototype.$getAutomation$;
D.$DvtChartConstants$$ = {};
(0,D.$goog$exportSymbol$$)("DvtChartConstants", D.$DvtChartConstants$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChartConstants$$, D.$DvtObj$$, "DvtChartConstants");
D.$DvtChartConstants$$.$BACKGROUND$ = "background";
D.$DvtChartConstants$$.BACKGROUND = D.$DvtChartConstants$$.$BACKGROUND$;
D.$DvtChartConstants$$.$DATA_ITEM$ = "dataItem";
D.$DvtChartConstants$$.DATA_ITEM = D.$DvtChartConstants$$.$DATA_ITEM$;
D.$DvtChartConstants$$.$DATA_ITEM_OTHER$ = "dataItemOther";
D.$DvtChartConstants$$.DATA_ITEM_OTHER = D.$DvtChartConstants$$.$DATA_ITEM_OTHER$;
D.$DvtChartConstants$$.$FOOTNOTE$ = "footnote";
D.$DvtChartConstants$$.FOOTNOTE = D.$DvtChartConstants$$.$FOOTNOTE$;
D.$DvtChartConstants$$.$LEGEND$ = "legend";
D.$DvtChartConstants$$.LEGEND = D.$DvtChartConstants$$.$LEGEND$;
D.$DvtChartConstants$$.$LEGEND_ITEM$ = "legendItem";
D.$DvtChartConstants$$.LEGEND_ITEM = D.$DvtChartConstants$$.$LEGEND_ITEM$;
D.$DvtChartConstants$$.$LEGEND_TITLE$ = "legendTitle";
D.$DvtChartConstants$$.LEGEND_TITLE = D.$DvtChartConstants$$.$LEGEND_TITLE$;
D.$DvtChartConstants$$.$PLOT_AREA$ = "plotArea";
D.$DvtChartConstants$$.PLOT_AREA = D.$DvtChartConstants$$.$PLOT_AREA$;
D.$DvtChartConstants$$.$SERIES$ = "series";
D.$DvtChartConstants$$.SERIES = D.$DvtChartConstants$$.$SERIES$;
D.$DvtChartConstants$$.$SUBTITLE$ = "subtitle";
D.$DvtChartConstants$$.SUBTITLE = D.$DvtChartConstants$$.$SUBTITLE$;
D.$DvtChartConstants$$.$TITLE$ = "title";
D.$DvtChartConstants$$.TITLE = D.$DvtChartConstants$$.$TITLE$;
D.$DvtChartConstants$$.$X_AXIS_LABEL$ = "xAxisLabel";
D.$DvtChartConstants$$.X_AXIS_LABEL = D.$DvtChartConstants$$.$X_AXIS_LABEL$;
D.$DvtChartConstants$$.$X_AXIS_TITLE$ = "xAxisTitle";
D.$DvtChartConstants$$.X_AXIS_TITLE = D.$DvtChartConstants$$.$X_AXIS_TITLE$;
D.$DvtChartConstants$$.$Y_AXIS_LABEL$ = "yAxisLabel";
D.$DvtChartConstants$$.Y_AXIS_LABEL = D.$DvtChartConstants$$.$Y_AXIS_LABEL$;
D.$DvtChartConstants$$.$Y_AXIS_TITLE$ = "yAxisTitle";
D.$DvtChartConstants$$.Y_AXIS_TITLE = D.$DvtChartConstants$$.$Y_AXIS_TITLE$;
D.$DvtChartConstants$$.$Y2_AXIS_LABEL$ = "y2AxisLabel";
D.$DvtChartConstants$$.Y2_AXIS_LABEL = D.$DvtChartConstants$$.$Y2_AXIS_LABEL$;
D.$DvtChartConstants$$.$Y2_AXIS_TITLE$ = "y2AxisTitle";
D.$DvtChartConstants$$.Y2_AXIS_TITLE = D.$DvtChartConstants$$.$Y2_AXIS_TITLE$;
D.$DvtChartSelectionEvent$$ = function $$DvtChartSelectionEvent$$$($selection$$35$$, $type$$222$$, $xMin$$1$$, $xMax$$1$$, $startGroup$$1$$, $endGroup$$1$$, $yMin$$2$$, $yMax$$2$$, $y2Min$$, $y2Max$$) {
  D.$DvtChartSelectionEvent$$.$superclass$.Init.call(this, $selection$$35$$, $type$$222$$);
  this.$_xMin$ = $xMin$$1$$;
  this.$_xMax$ = $xMax$$1$$;
  this.$_startGroup$ = $startGroup$$1$$;
  this.$_endGroup$ = $endGroup$$1$$;
  this.$_yMin$ = $yMin$$2$$;
  this.$_yMax$ = $yMax$$2$$;
  this.$_y2Min$ = $y2Min$$;
  this.$_y2Max$ = $y2Max$$;
  this.$removedSet$ = this.$addedSet$ = D.$JSCompiler_alias_NULL$$
};
(0,D.$goog$exportSymbol$$)("DvtChartSelectionEvent", D.$DvtChartSelectionEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChartSelectionEvent$$, D.$DvtSelectionEvent$$, "DvtChartSelectionEvent");
D.$DvtChartSelectionEvent$$.prototype.$getXMin$ = (0,D.$JSCompiler_get$$)("$_xMin$");
D.$DvtChartSelectionEvent$$.prototype.getXMin = D.$DvtChartSelectionEvent$$.prototype.$getXMin$;
D.$DvtChartSelectionEvent$$.prototype.$getXMax$ = (0,D.$JSCompiler_get$$)("$_xMax$");
D.$DvtChartSelectionEvent$$.prototype.getXMax = D.$DvtChartSelectionEvent$$.prototype.$getXMax$;
D.$DvtChartSelectionEvent$$.prototype.$getStartGroup$ = (0,D.$JSCompiler_get$$)("$_startGroup$");
D.$DvtChartSelectionEvent$$.prototype.getStartGroup = D.$DvtChartSelectionEvent$$.prototype.$getStartGroup$;
D.$DvtChartSelectionEvent$$.prototype.$getEndGroup$ = (0,D.$JSCompiler_get$$)("$_endGroup$");
D.$DvtChartSelectionEvent$$.prototype.getEndGroup = D.$DvtChartSelectionEvent$$.prototype.$getEndGroup$;
D.$DvtChartSelectionEvent$$.prototype.$getYMin$ = (0,D.$JSCompiler_get$$)("$_yMin$");
D.$DvtChartSelectionEvent$$.prototype.getYMin = D.$DvtChartSelectionEvent$$.prototype.$getYMin$;
D.$DvtChartSelectionEvent$$.prototype.$getYMax$ = (0,D.$JSCompiler_get$$)("$_yMax$");
D.$DvtChartSelectionEvent$$.prototype.getYMax = D.$DvtChartSelectionEvent$$.prototype.$getYMax$;
D.$DvtChartSelectionEvent$$.prototype.$getY2Min$ = (0,D.$JSCompiler_get$$)("$_y2Min$");
D.$DvtChartSelectionEvent$$.prototype.getY2Min = D.$DvtChartSelectionEvent$$.prototype.$getY2Min$;
D.$DvtChartSelectionEvent$$.prototype.$getY2Max$ = (0,D.$JSCompiler_get$$)("$_y2Max$");
D.$DvtChartSelectionEvent$$.prototype.getY2Max = D.$DvtChartSelectionEvent$$.prototype.$getY2Max$;
D.$DvtChartViewportChangeEvent$$ = function $$DvtChartViewportChangeEvent$$$($type$$223$$, $xMin$$2$$, $xMax$$2$$, $startGroup$$2$$, $endGroup$$2$$, $yMin$$3$$, $yMax$$3$$) {
  D.$DvtChartViewportChangeEvent$$.$superclass$.Init.call(this, $type$$223$$);
  this.$_xMin$ = $xMin$$2$$;
  this.$_xMax$ = $xMax$$2$$;
  this.$_startGroup$ = $startGroup$$2$$;
  this.$_endGroup$ = $endGroup$$2$$;
  this.$_yMin$ = $yMin$$3$$;
  this.$_yMax$ = $yMax$$3$$
};
(0,D.$goog$exportSymbol$$)("DvtChartViewportChangeEvent", D.$DvtChartViewportChangeEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChartViewportChangeEvent$$, D.$DvtBaseComponentEvent$$, "DvtChartViewportChangeEvent");
D.$DvtChartViewportChangeEvent$$.TYPE = "viewportChange";
D.$DvtChartViewportChangeEvent$$.TYPE_INPUT = "viewportChangeInput";
D.$DvtChartViewportChangeEvent$$.prototype.$getXMin$ = (0,D.$JSCompiler_get$$)("$_xMin$");
D.$DvtChartViewportChangeEvent$$.prototype.getXMin = D.$DvtChartViewportChangeEvent$$.prototype.$getXMin$;
D.$DvtChartViewportChangeEvent$$.prototype.$getXMax$ = (0,D.$JSCompiler_get$$)("$_xMax$");
D.$DvtChartViewportChangeEvent$$.prototype.getXMax = D.$DvtChartViewportChangeEvent$$.prototype.$getXMax$;
D.$DvtChartViewportChangeEvent$$.prototype.$getStartGroup$ = (0,D.$JSCompiler_get$$)("$_startGroup$");
D.$DvtChartViewportChangeEvent$$.prototype.getStartGroup = D.$DvtChartViewportChangeEvent$$.prototype.$getStartGroup$;
D.$DvtChartViewportChangeEvent$$.prototype.$getEndGroup$ = (0,D.$JSCompiler_get$$)("$_endGroup$");
D.$DvtChartViewportChangeEvent$$.prototype.getEndGroup = D.$DvtChartViewportChangeEvent$$.prototype.$getEndGroup$;
D.$DvtChartViewportChangeEvent$$.prototype.$getYMin$ = (0,D.$JSCompiler_get$$)("$_yMin$");
D.$DvtChartViewportChangeEvent$$.prototype.getYMin = D.$DvtChartViewportChangeEvent$$.prototype.$getYMin$;
D.$DvtChartViewportChangeEvent$$.prototype.$getYMax$ = (0,D.$JSCompiler_get$$)("$_yMax$");
D.$DvtChartViewportChangeEvent$$.prototype.getYMax = D.$DvtChartViewportChangeEvent$$.prototype.$getYMax$;
D.$DvtChartImpl$$ = function $$DvtChartImpl$$$($context$$267$$, $callback$$86$$, $callbackObj$$50$$) {
  this.Init($context$$267$$, $callback$$86$$, $callbackObj$$50$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartImpl$$, D.$DvtChart$$, "DvtChartImpl");
D.$DvtChartImpl$$.prototype.Init = function $$DvtChartImpl$$$$Init$($context$$268$$, $callback$$87$$, $callbackObj$$51$$) {
  D.$DvtChartImpl$$.$superclass$.Init.call(this, $context$$268$$, $callback$$87$$, $callbackObj$$51$$);
  this.$pieChart$ = this.$dragButtons$ = this.$yScrollbar$ = this.$xScrollbar$ = this.$overview$ = this.$y2Axis$ = this.$yAxis$ = this.$xAxis$ = this.$legend$ = D.$JSCompiler_alias_NULL$$;
  this.$_peers$ = [];
  this.$_seriesStyleArray$ = [];
  this.$_numSelectedObjsInFront$ = this.$_numFrontObjs$ = 0
};
D.$DvtChartImpl$$.prototype.$SetOptions$ = function $$DvtChartImpl$$$$$SetOptions$$($options$$138_popupBehaviors_selectionMode$$8$$) {
  D.$DvtChartImpl$$.$superclass$.$SetOptions$.call(this, $options$$138_popupBehaviors_selectionMode$$8$$);
  $options$$138_popupBehaviors_selectionMode$$8$$ = this.$Options$.selectionMode;
  this.$_selectionHandler$ = "single" == $options$$138_popupBehaviors_selectionMode$$8$$ ? new D.$DvtSelectionHandler$$("s") : "multiple" == $options$$138_popupBehaviors_selectionMode$$8$$ ? new D.$DvtSelectionHandler$$("m") : D.$JSCompiler_alias_NULL$$;
  this.$EventManager$.$setSelectionHandler$(this.$_selectionHandler$);
  if($options$$138_popupBehaviors_selectionMode$$8$$ = this.$Options$._spb) {
    this.$_popupBehaviors$ = {};
    for(var $stampId$$10$$ in $options$$138_popupBehaviors_selectionMode$$8$$) {
      for(var $popupBehaviorArray$$ = $options$$138_popupBehaviors_selectionMode$$8$$[$stampId$$10$$], $i$$464$$ = 0;$i$$464$$ < $popupBehaviorArray$$.length;$i$$464$$++) {
        this.$_popupBehaviors$[$stampId$$10$$] || (this.$_popupBehaviors$[$stampId$$10$$] = []);
        var $popupBehavior$$ = $popupBehaviorArray$$[$i$$464$$];
        this.$_popupBehaviors$[$stampId$$10$$].push(new D.$DvtShowPopupBehavior$$($popupBehavior$$.popupId, $popupBehavior$$.triggerType, $popupBehavior$$.alignId, $popupBehavior$$.align))
      }
    }
  }
};
D.$DvtChartImpl$$.prototype.filter = function $$DvtChartImpl$$$$filter$($category$$6$$, $type$$111$$) {
  D.$DvtChartEventUtils$$.$setVisibility$(this, $category$$6$$, "out" == $type$$111$$ ? "hidden" : "visible");
  var $JSCompiler_StaticMethods_setKeyboardFocus$self$$inline_5400_chartFocus$$ = this.$EventManager$.$getFocus$(), $legendFocus_navigable$$inline_5401$$, $focusDisplayable_isShowingFocusEffect_isShowingFocusEffect$$inline_5402$$;
  this.$legend$ && ($legendFocus_navigable$$inline_5401$$ = this.$legend$.$_eventManager$.$getFocus$()) && ($focusDisplayable_isShowingFocusEffect_isShowingFocusEffect$$inline_5402$$ = $legendFocus_navigable$$inline_5401$$.$isShowingKeyboardFocusEffect$());
  this.$render$(this.$Options$);
  if($JSCompiler_StaticMethods_setKeyboardFocus$self$$inline_5400_chartFocus$$) {
    for(var $i$$inline_5403_navigables$$5$$ = D.$DvtChartEventUtils$$.$getKeyboardNavigables$(this), $i$$465$$ = 0;$i$$465$$ < $i$$inline_5403_navigables$$5$$.length;$i$$465$$++) {
      var $id$$114$$ = $i$$inline_5403_navigables$$5$$[$i$$465$$].getId();
      if($id$$114$$ instanceof D.$DvtChartDataItem$$ && $id$$114$$.$equals$($JSCompiler_StaticMethods_setKeyboardFocus$self$$inline_5400_chartFocus$$.getId())) {
        (0,D.$JSCompiler_StaticMethods_setFocusObj$$)(this.$EventManager$, $i$$inline_5403_navigables$$5$$[$i$$465$$]);
        break
      }
      (0,D.$JSCompiler_StaticMethods_setFocusObj$$)(this.$EventManager$, this.$EventManager$.$KeyboardHandler$.$getDefaultNavigable$($i$$inline_5403_navigables$$5$$))
    }
  }
  if($legendFocus_navigable$$inline_5401$$ && this.$legend$) {
    (0,D.$JSCompiler_StaticMethods_setKeyboardFocusArray$$)(this.$_context$, [this, this.$legend$]);
    (0,D.$JSCompiler_StaticMethods_nextKeyboardFocus$$)(this.$_context$);
    $JSCompiler_StaticMethods_setKeyboardFocus$self$$inline_5400_chartFocus$$ = this.$legend$;
    for($i$$inline_5403_navigables$$5$$ = 0;$i$$inline_5403_navigables$$5$$ < $JSCompiler_StaticMethods_setKeyboardFocus$self$$inline_5400_chartFocus$$.$_peers$.length;$i$$inline_5403_navigables$$5$$++) {
      if($JSCompiler_StaticMethods_setKeyboardFocus$self$$inline_5400_chartFocus$$.$_peers$[$i$$inline_5403_navigables$$5$$].getId() == $legendFocus_navigable$$inline_5401$$.getId()) {
        (0,D.$JSCompiler_StaticMethods_setFocusObj$$)($JSCompiler_StaticMethods_setKeyboardFocus$self$$inline_5400_chartFocus$$.$_eventManager$, $JSCompiler_StaticMethods_setKeyboardFocus$self$$inline_5400_chartFocus$$.$_peers$[$i$$inline_5403_navigables$$5$$]);
        $focusDisplayable_isShowingFocusEffect_isShowingFocusEffect$$inline_5402$$ && $JSCompiler_StaticMethods_setKeyboardFocus$self$$inline_5400_chartFocus$$.$_peers$[$i$$inline_5403_navigables$$5$$].$showKeyboardFocusEffect$();
        break
      }
    }
    $legendFocus_navigable$$inline_5401$$ = this.$legend$.$_eventManager$.$getFocus$();
    $focusDisplayable_isShowingFocusEffect_isShowingFocusEffect$$inline_5402$$ = $legendFocus_navigable$$inline_5401$$.$getDisplayables$()[0];
    (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($focusDisplayable_isShowingFocusEffect_isShowingFocusEffect$$inline_5402$$, "label", $legendFocus_navigable$$inline_5401$$.$getAriaLabel$());
    (0,D.$JSCompiler_StaticMethods_setActiveElement$$)(this.$_context$, $focusDisplayable_isShowingFocusEffect_isShowingFocusEffect$$inline_5402$$)
  }
};
(0,D.$goog$exportSymbol$$)("DvtChartImpl.prototype.filter", D.$DvtChartImpl$$.prototype.filter);
D.$DvtChartImpl$$.prototype.$highlight$ = function $$DvtChartImpl$$$$$highlight$$($categories$$4$$) {
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($categories$$4$$, this.$getObjects$());
  this.$legend$ && this.$legend$.$highlight$($categories$$4$$);
  this.$pieChart$ && this.$pieChart$.$highlight$($categories$$4$$)
};
(0,D.$goog$exportSymbol$$)("DvtChartImpl.prototype.highlight", D.$DvtChartImpl$$.prototype.$highlight$);
D.$DvtChartImpl$$.prototype.$getEventManager$ = (0,D.$JSCompiler_get$$)("$EventManager$");
D.$DvtChartImpl$$.prototype.$processEvent$ = function $$DvtChartImpl$$$$$processEvent$$($event$$397$$, $source$$12$$) {
  var $actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$ = $event$$397$$.$getType$();
  if($actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$ || $actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_SHOW$) {
    this.filter($event$$397$$.$_category$, $actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$ ? "out" : "in")
  }else {
    if("categoryRollOver" == $actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$ || "categoryRollOut" == $actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$) {
      "dim" == D.$DvtChartEventUtils$$.$getHoverBehavior$(this) && ((0,D.$DvtCategoryRolloverHandler$processEvent$$)($event$$397$$, this.$getObjects$()), this.$_distributeToChildren$($event$$397$$, $source$$12$$))
    }else {
      if("selection" == $actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$) {
        $event$$397$$ = this.$_processSelectionEvent$($event$$397$$)
      }else {
        if("dvtPanZoom" == $actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$) {
          var $bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$ = $event$$397$$, $actionDone$$inline_5419_actionStart$$inline_5409_addedSet_eventType$$inline_5420_subtype$$inline_5407_subtype$$inline_5416$$ = $bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$.$getSubtype$(), $actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$ = "dvtPanEndEvent" == 
          $actionDone$$inline_5419_actionStart$$inline_5409_addedSet_eventType$$inline_5420_subtype$$inline_5407_subtype$$inline_5416$$ || "dvtZoomEvent" == $actionDone$$inline_5419_actionStart$$inline_5409_addedSet_eventType$$inline_5420_subtype$$inline_5407_subtype$$inline_5416$$ || "dvtPinchEndEvent" == $actionDone$$inline_5419_actionStart$$inline_5409_addedSet_eventType$$inline_5420_subtype$$inline_5407_subtype$$inline_5416$$, $actionDone$$inline_5419_actionStart$$inline_5409_addedSet_eventType$$inline_5420_subtype$$inline_5407_subtype$$inline_5416$$ = 
          "dvtPanStartEvent" == $actionDone$$inline_5419_actionStart$$inline_5409_addedSet_eventType$$inline_5420_subtype$$inline_5407_subtype$$inline_5416$$ || "dvtPinchStartEvent" == $actionDone$$inline_5419_actionStart$$inline_5409_addedSet_eventType$$inline_5420_subtype$$inline_5407_subtype$$inline_5416$$;
          (0,D.$DvtAgent$isTouchDevice$$)() && ($actionDone$$inline_5419_actionStart$$inline_5409_addedSet_eventType$$inline_5420_subtype$$inline_5407_subtype$$inline_5416$$ && this.$_panZoomTarget$ != this.$_plotArea$) && (this.$_container$.removeChild(this.$_panZoomTarget$), this.$_panZoomTarget$ = this.$_plotArea$);
          D.$DvtChartEventUtils$$.$isLiveScroll$(this) ? ($bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$ = D.$DvtChartEventUtils$$.$getAxisBoundsByDelta$(this, $bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$.$dxMin$, $bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$.$dxMax$, $bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$.$dyMin$, 
          $bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$.$dyMax$), $actionDone$$inline_5419_actionStart$$inline_5409_addedSet_eventType$$inline_5420_subtype$$inline_5407_subtype$$inline_5416$$ || (this.$setViewport$($bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$, $actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$), (0,D.$JSCompiler_StaticMethods_setScrollbarViewport$$)(this, 
          $bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$))) : ($bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$ = D.$DvtChartEventUtils$$.$getAxisBoundsByDelta$(this, $bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$.$dxMinTotal$, $bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$.$dxMaxTotal$, 
          $bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$.$dyMinTotal$, $bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$.$dyMaxTotal$), (0,D.$JSCompiler_StaticMethods_setScrollbarViewport$$)(this, $bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$), $actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$ && 
          this.$setViewport$($bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$, $actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$));
          $actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$ && (D.$DvtChartRenderer$$.$_setEventHandlers$(this), this.$_panZoomTarget$ != this.$_plotArea$ && (this.$_container$.removeChild(this.$_panZoomTarget$), this.$_panZoomTarget$ = D.$JSCompiler_alias_NULL$$));
          $actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$ = $actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$ ? "viewportChange" : "viewportChangeInput";
          $event$$397$$ = D.$DvtChartTypeUtils$$.$isBLAC$(this) ? new D.$DvtChartViewportChangeEvent$$($actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$, $bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$.$xMin$, $bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$.$xMax$, $bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$.$startGroup$, 
          $bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$.$endGroup$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$) : new D.$DvtChartViewportChangeEvent$$($actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$, $bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$.$xMin$, $bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$.$xMax$, 
          D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$.$yMin$, $bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$.$yMax$)
        }else {
          if("dvtMarquee" == $actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$) {
            $event$$397$$ = (0,D.$JSCompiler_StaticMethods__processMarqueeEvent$$)(this, $event$$397$$)
          }else {
            if("overview" == $actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$) {
              if($actionDone$$inline_5419_actionStart$$inline_5409_addedSet_eventType$$inline_5420_subtype$$inline_5407_subtype$$inline_5416$$ = $event$$397$$.$getSubType$(), "dropCallback" != $actionDone$$inline_5419_actionStart$$inline_5409_addedSet_eventType$$inline_5420_subtype$$inline_5407_subtype$$inline_5416$$) {
                $actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$ = $event$$397$$.$getParamValue$("newStartTime");
                $bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$ = $event$$397$$.$getParamValue$("newEndTime");
                $actionDone$$inline_5419_actionStart$$inline_5409_addedSet_eventType$$inline_5420_subtype$$inline_5407_subtype$$inline_5416$$ = "scrollTime" == $actionDone$$inline_5419_actionStart$$inline_5409_addedSet_eventType$$inline_5420_subtype$$inline_5407_subtype$$inline_5416$$ || "scrollEnd" == $actionDone$$inline_5419_actionStart$$inline_5409_addedSet_eventType$$inline_5420_subtype$$inline_5407_subtype$$inline_5416$$ || "rangeChange" == $actionDone$$inline_5419_actionStart$$inline_5409_addedSet_eventType$$inline_5420_subtype$$inline_5407_subtype$$inline_5416$$;
                if(D.$DvtChartEventUtils$$.$isLiveScroll$(this) || $actionDone$$inline_5419_actionStart$$inline_5409_addedSet_eventType$$inline_5420_subtype$$inline_5407_subtype$$inline_5416$$) {
                  $source$$12$$ == this.$yScrollbar$ ? this.$setViewport$({$yMin$:$actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$, $yMax$:$bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$}, $actionDone$$inline_5419_actionStart$$inline_5409_addedSet_eventType$$inline_5420_subtype$$inline_5407_subtype$$inline_5416$$) : this.$setViewport$({$xMin$:$actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$, 
                  $xMax$:$bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$}, $actionDone$$inline_5419_actionStart$$inline_5409_addedSet_eventType$$inline_5420_subtype$$inline_5407_subtype$$inline_5416$$)
                }
                $actionDone$$inline_5419_actionStart$$inline_5409_addedSet_eventType$$inline_5420_subtype$$inline_5407_subtype$$inline_5416$$ = $actionDone$$inline_5419_actionStart$$inline_5409_addedSet_eventType$$inline_5420_subtype$$inline_5407_subtype$$inline_5416$$ ? "viewportChange" : "viewportChangeInput";
                if($source$$12$$ == this.$yScrollbar$) {
                  $event$$397$$ = new D.$DvtChartViewportChangeEvent$$($actionDone$$inline_5419_actionStart$$inline_5409_addedSet_eventType$$inline_5420_subtype$$inline_5407_subtype$$inline_5416$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$, $bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$)
                }else {
                  var $newItems_removedSet_startEndGroup$$inline_5421$$ = D.$DvtChartEventUtils$$.$getAxisStartEndGroup$(this.$xAxis$, $actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$, $bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$);
                  $event$$397$$ = new D.$DvtChartViewportChangeEvent$$($actionDone$$inline_5419_actionStart$$inline_5409_addedSet_eventType$$inline_5420_subtype$$inline_5407_subtype$$inline_5416$$, $actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$, $bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$, $newItems_removedSet_startEndGroup$$inline_5421$$.$startGroup$, $newItems_removedSet_startEndGroup$$inline_5421$$.$endGroup$, 
                  D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$)
                }
              }else {
                $event$$397$$ = D.$JSCompiler_alias_VOID$$
              }
            }else {
              "showPopup" == $actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$ ? ($actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$ = $event$$397$$, "mouseHover" != $actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$.triggerType && (this.$isSelectionSupported$() && 0 < this.$getSelectionHandler$().$_selection$.length) && ($bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$ = 
              D.$DvtChartEventUtils$$.$processIds$(this, (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)(this.$getSelectionHandler$())), $actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$ = new D.$DvtShowPopupEvent$$($actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$.$_showPopupBehavior$, $actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$.$_launcherBounds$, 
              $actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$.$_launcherId$), (0,D.$JSCompiler_StaticMethods_addParam$$)($actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$, "clientRowKey", $bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$)), $event$$397$$ = $actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$) : 
              $event$$397$$ instanceof D.$DvtComponentUIEvent$$ && ($event$$397$$ = (0,D.$JSCompiler_StaticMethods__processComponentUIEvent$$)(this, $event$$397$$, $source$$12$$))
            }
          }
        }
      }
    }
  }
  if($event$$397$$ instanceof D.$DvtChartSelectionEvent$$) {
    $bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$ = this.$getOptions$();
    $actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$ = $bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$.selection;
    $newItems_removedSet_startEndGroup$$inline_5421$$ = D.$DvtChartDataUtils$$.$getCurrentSelection$(this);
    $bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$.selection = $newItems_removedSet_startEndGroup$$inline_5421$$;
    var $actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$ = $actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$ ? $actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$ : [], $newItems_removedSet_startEndGroup$$inline_5421$$ = $newItems_removedSet_startEndGroup$$inline_5421$$ ? $newItems_removedSet_startEndGroup$$inline_5421$$ : [], $newIndex$$2_oldIndex$$1$$, 
    $oldItemId_oldSet$$1$$ = {};
    for($newIndex$$2_oldIndex$$1$$ = 0;$newIndex$$2_oldIndex$$1$$ < $actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$.length;$newIndex$$2_oldIndex$$1$$++) {
      $oldItemId_oldSet$$1$$[$actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$[$newIndex$$2_oldIndex$$1$$].id] = D.$JSCompiler_alias_TRUE$$
    }
    $bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$ = {};
    for($newIndex$$2_oldIndex$$1$$ = 0;$newIndex$$2_oldIndex$$1$$ < $newItems_removedSet_startEndGroup$$inline_5421$$.length;$newIndex$$2_oldIndex$$1$$++) {
      $bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$[$newItems_removedSet_startEndGroup$$inline_5421$$[$newIndex$$2_oldIndex$$1$$].id] = D.$JSCompiler_alias_TRUE$$
    }
    $actionDone$$inline_5419_actionStart$$inline_5409_addedSet_eventType$$inline_5420_subtype$$inline_5407_subtype$$inline_5416$$ = {};
    for($newIndex$$2_oldIndex$$1$$ = 0;$newIndex$$2_oldIndex$$1$$ < $newItems_removedSet_startEndGroup$$inline_5421$$.length;$newIndex$$2_oldIndex$$1$$++) {
      var $newItemId$$ = $newItems_removedSet_startEndGroup$$inline_5421$$[$newIndex$$2_oldIndex$$1$$].id;
      $oldItemId_oldSet$$1$$[$newItemId$$] || ($actionDone$$inline_5419_actionStart$$inline_5409_addedSet_eventType$$inline_5420_subtype$$inline_5407_subtype$$inline_5416$$[$newItemId$$] = D.$JSCompiler_alias_TRUE$$)
    }
    $newItems_removedSet_startEndGroup$$inline_5421$$ = {};
    for($newIndex$$2_oldIndex$$1$$ = 0;$newIndex$$2_oldIndex$$1$$ < $actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$.length;$newIndex$$2_oldIndex$$1$$++) {
      $oldItemId_oldSet$$1$$ = $actionDone$$inline_5408_event$$inline_5424_eventType$$inline_5411_oldItems_start$$inline_5417_type$$112$$[$newIndex$$2_oldIndex$$1$$].id, $bounds$$inline_5410_end$$inline_5418_event$$inline_5406_newSet$$1_options$$139_selection$$inline_5425$$[$oldItemId_oldSet$$1$$] || ($newItems_removedSet_startEndGroup$$inline_5421$$[$oldItemId_oldSet$$1$$] = D.$JSCompiler_alias_TRUE$$)
    }
    $event$$397$$.addedSet = $actionDone$$inline_5419_actionStart$$inline_5409_addedSet_eventType$$inline_5420_subtype$$inline_5407_subtype$$inline_5416$$;
    $event$$397$$.removedSet = $newItems_removedSet_startEndGroup$$inline_5421$$
  }
  $event$$397$$ && this.$__dispatchEvent$($event$$397$$)
};
D.$DvtChartImpl$$.prototype.$_processSelectionEvent$ = function $$DvtChartImpl$$$$$_processSelectionEvent$$($event$$398_selection$$21$$) {
  $event$$398_selection$$21$$ = D.$DvtChartEventUtils$$.$processIds$(this, $event$$398_selection$$21$$.getSelection());
  if(this.$overview$) {
    var $ovChart$$ = this.$overview$.$_chart$;
    (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($ovChart$$.$getSelectionHandler$(), $event$$398_selection$$21$$, $ovChart$$.$getObjects$())
  }
  return new D.$DvtChartSelectionEvent$$($event$$398_selection$$21$$, "selection")
};
D.$JSCompiler_StaticMethods__processMarqueeEvent$$ = function $$JSCompiler_StaticMethods__processMarqueeEvent$$$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $event$$400$$) {
  var $ovChart$$1_subtype$$4$$ = $event$$400$$.$getSubtype$(), $em$$3_selection$$22_selectionHandler$$2$$ = $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$EventManager$, $bounds$$88_selectionEvent_targets$$3$$;
  D.$DvtChartEventUtils$$.$adjustBounds$($event$$400$$);
  if("select" == $em$$3_selection$$22_selectionHandler$$2$$.$_dragMode$) {
    $em$$3_selection$$22_selectionHandler$$2$$ = $em$$3_selection$$22_selectionHandler$$2$$.$getSelectionHandler$();
    if("dvtMarqueeStartEvent" == $ovChart$$1_subtype$$4$$) {
      $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$_initSelection$ = $event$$400$$.ctrlKey ? (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)($em$$3_selection$$22_selectionHandler$$2$$) : []
    }else {
      $bounds$$88_selectionEvent_targets$$3$$ = D.$DvtChartEventUtils$$.$getBoundedObjects$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $event$$400$$);
      (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($em$$3_selection$$22_selectionHandler$$2$$, $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$_initSelection$, $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$getObjects$());
      for(var $target$$inline_5430$$, $i$$inline_5431$$ = 0;$i$$inline_5431$$ < $bounds$$88_selectionEvent_targets$$3$$.length;$i$$inline_5431$$++) {
        $target$$inline_5430$$ = $bounds$$88_selectionEvent_targets$$3$$[$i$$inline_5431$$], (!$target$$inline_5430$$ || !$target$$inline_5430$$.$isUnrelatedToSelection$) && (0,D.$JSCompiler_StaticMethods__addToSelection$$)($em$$3_selection$$22_selectionHandler$$2$$, $target$$inline_5430$$, D.$JSCompiler_alias_TRUE$$)
      }
    }
    $em$$3_selection$$22_selectionHandler$$2$$ = (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)($em$$3_selection$$22_selectionHandler$$2$$);
    $bounds$$88_selectionEvent_targets$$3$$ = D.$DvtChartEventUtils$$.$getAxisBounds$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $event$$400$$, D.$JSCompiler_alias_FALSE$$);
    $bounds$$88_selectionEvent_targets$$3$$ = new D.$DvtChartSelectionEvent$$($em$$3_selection$$22_selectionHandler$$2$$, "dvtMarqueeEndEvent" == $ovChart$$1_subtype$$4$$ ? "selection" : "selectionInput", $bounds$$88_selectionEvent_targets$$3$$.$xMin$, $bounds$$88_selectionEvent_targets$$3$$.$xMax$, $bounds$$88_selectionEvent_targets$$3$$.$startGroup$, $bounds$$88_selectionEvent_targets$$3$$.$endGroup$, $bounds$$88_selectionEvent_targets$$3$$.$yMin$, $bounds$$88_selectionEvent_targets$$3$$.$yMax$, 
    $bounds$$88_selectionEvent_targets$$3$$.$y2Min$, $bounds$$88_selectionEvent_targets$$3$$.$y2Max$);
    "dvtMarqueeEndEvent" == $ovChart$$1_subtype$$4$$ && $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$overview$ && ($ovChart$$1_subtype$$4$$ = $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$overview$.$_chart$, (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($ovChart$$1_subtype$$4$$.$getSelectionHandler$(), $em$$3_selection$$22_selectionHandler$$2$$, $ovChart$$1_subtype$$4$$.$getObjects$()));
    return $bounds$$88_selectionEvent_targets$$3$$
  }
  if("zoom" == $em$$3_selection$$22_selectionHandler$$2$$.$_dragMode$) {
    if("dvtMarqueeEndEvent" != $ovChart$$1_subtype$$4$$) {
      return D.$JSCompiler_alias_NULL$$
    }
    $bounds$$88_selectionEvent_targets$$3$$ = D.$DvtChartEventUtils$$.$getAxisBounds$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $event$$400$$, D.$JSCompiler_alias_TRUE$$);
    $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$setViewport$($bounds$$88_selectionEvent_targets$$3$$, D.$JSCompiler_alias_TRUE$$);
    (0,D.$JSCompiler_StaticMethods_setScrollbarViewport$$)($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $bounds$$88_selectionEvent_targets$$3$$);
    D.$DvtChartRenderer$$.$_setEventHandlers$($JSCompiler_StaticMethods__processMarqueeEvent$self$$);
    return D.$DvtChartTypeUtils$$.$isBLAC$($JSCompiler_StaticMethods__processMarqueeEvent$self$$) ? new D.$DvtChartViewportChangeEvent$$("viewportChange", $bounds$$88_selectionEvent_targets$$3$$.$xMin$, $bounds$$88_selectionEvent_targets$$3$$.$xMax$, $bounds$$88_selectionEvent_targets$$3$$.$startGroup$, $bounds$$88_selectionEvent_targets$$3$$.$endGroup$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$) : new D.$DvtChartViewportChangeEvent$$("viewportChange", $bounds$$88_selectionEvent_targets$$3$$.$xMin$, 
    $bounds$$88_selectionEvent_targets$$3$$.$xMax$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $bounds$$88_selectionEvent_targets$$3$$.$yMin$, $bounds$$88_selectionEvent_targets$$3$$.$yMax$)
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__processComponentUIEvent$$ = function $$JSCompiler_StaticMethods__processComponentUIEvent$$$($JSCompiler_StaticMethods__processComponentUIEvent$self$$, $event$$403$$, $source$$14$$) {
  var $params$$54$$ = $event$$403$$.params, $chartObjType$$ = $params$$54$$.type;
  return $source$$14$$ === $JSCompiler_StaticMethods__processComponentUIEvent$self$$.$legend$ ? ($chartObjType$$ == D.$DvtLegendConstants$$.$LEGEND_ITEM$ ? $chartObjType$$ = D.$DvtChartConstants$$.$LEGEND_ITEM$ : $chartObjType$$ == D.$DvtLegendConstants$$.$TITLE$ ? $chartObjType$$ = D.$DvtChartConstants$$.$LEGEND_TITLE$ : $chartObjType$$ == D.$DvtLegendConstants$$.$BACKGROUND$ && ($chartObjType$$ = D.$DvtChartConstants$$.$LEGEND$), new D.$DvtComponentUIEvent$$($event$$403$$.$getType$(), (0,D.$DvtChartEventManager$getUIEventParams$$)($chartObjType$$, 
  D.$JSCompiler_alias_NULL$$, $params$$54$$.id))) : $source$$14$$ === $JSCompiler_StaticMethods__processComponentUIEvent$self$$.$xAxis$ ? ($chartObjType$$ == D.$DvtAxisConstants$$.$TICK_LABEL$ ? $chartObjType$$ = D.$DvtChartConstants$$.$X_AXIS_LABEL$ : $chartObjType$$ == D.$DvtAxisConstants$$.$TITLE$ && ($chartObjType$$ = D.$DvtChartConstants$$.$X_AXIS_TITLE$), new D.$DvtComponentUIEvent$$($event$$403$$.$getType$(), (0,D.$DvtChartEventManager$getUIEventParams$$)($chartObjType$$, $params$$54$$.id))) : 
  $source$$14$$ === $JSCompiler_StaticMethods__processComponentUIEvent$self$$.$yAxis$ ? ($chartObjType$$ == D.$DvtAxisConstants$$.$TICK_LABEL$ ? $chartObjType$$ = D.$DvtChartConstants$$.$Y_AXIS_LABEL$ : $chartObjType$$ == D.$DvtAxisConstants$$.$TITLE$ && ($chartObjType$$ = D.$DvtChartConstants$$.$Y_AXIS_TITLE$), new D.$DvtComponentUIEvent$$($event$$403$$.$getType$(), (0,D.$DvtChartEventManager$getUIEventParams$$)($chartObjType$$, $params$$54$$.id))) : $source$$14$$ === $JSCompiler_StaticMethods__processComponentUIEvent$self$$.$y2Axis$ ? 
  ($chartObjType$$ == D.$DvtAxisConstants$$.$TICK_LABEL$ ? $chartObjType$$ = D.$DvtChartConstants$$.$Y2_AXIS_LABEL$ : $chartObjType$$ == D.$DvtAxisConstants$$.$TITLE$ && ($chartObjType$$ = D.$DvtChartConstants$$.$Y2_AXIS_TITLE$), new D.$DvtComponentUIEvent$$($event$$403$$.$getType$(), (0,D.$DvtChartEventManager$getUIEventParams$$)($chartObjType$$, $params$$54$$.id))) : $event$$403$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartImpl$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_distributeToChildren$ = function $$JSCompiler_prototypeAlias$$$$_distributeToChildren$$($event$$404$$, $source$$15$$) {
  this.$legend$ && this.$legend$ != $source$$15$$ && this.$legend$.$processEvent$($event$$404$$, $source$$15$$);
  this.$pieChart$ && this.$pieChart$ != $source$$15$$ && this.$pieChart$.$processEvent$($event$$404$$, $source$$15$$)
};
D.$JSCompiler_prototypeAlias$$.$__cleanUp$ = function $$JSCompiler_prototypeAlias$$$$__cleanUp$$() {
  D.$DvtChartImpl$$.$superclass$.$__cleanUp$.call(this);
  this.$_peers$.length = 0;
  this.$yScrollbar$ = this.$xScrollbar$ = D.$JSCompiler_alias_NULL$$;
  (0,D.$JSCompiler_StaticMethods_hideDragButtons$$)(this);
  this.$_areaContainer$ = this.$dragButtons$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$__cleanUpAxisAndPlotArea$ = function $$JSCompiler_prototypeAlias$$$$__cleanUpAxisAndPlotArea$$() {
  var $JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_5433$$ = this.$EventManager$;
  $JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_5433$$.$hideTooltip$();
  $JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_5433$$.$_dataCursorHandler$ && (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_5433$$.$_dataCursorHandler$);
  this.$_peers$.length = 0;
  this.$_container$.removeChild(this.$xAxis$);
  this.$_container$.removeChild(this.$yAxis$);
  this.$_container$.removeChild(this.$y2Axis$);
  this.$_plotArea$ && this.$_plotArea$ == this.$_panZoomTarget$ ? this.$_plotArea$.$setVisible$(D.$JSCompiler_alias_FALSE$$) : this.$_container$.removeChild(this.$_plotArea$)
};
D.$JSCompiler_prototypeAlias$$.$registerObject$ = function $$JSCompiler_prototypeAlias$$$$registerObject$$($peer$$16$$) {
  this.$_peers$.push($peer$$16$$)
};
D.$JSCompiler_prototypeAlias$$.$getObjects$ = (0,D.$JSCompiler_get$$)("$_peers$");
D.$JSCompiler_prototypeAlias$$.$getOptions$ = function $$JSCompiler_prototypeAlias$$$$getOptions$$() {
  this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this));
  return this.$Options$
};
D.$JSCompiler_prototypeAlias$$.getWidth = (0,D.$JSCompiler_get$$)("$Width$");
D.$JSCompiler_prototypeAlias$$.getHeight = (0,D.$JSCompiler_get$$)("$Height$");
D.$JSCompiler_prototypeAlias$$.$getBundle$ = (0,D.$JSCompiler_get$$)("$Bundle$");
D.$JSCompiler_prototypeAlias$$.$getSeriesStyleArray$ = (0,D.$JSCompiler_get$$)("$_seriesStyleArray$");
D.$JSCompiler_prototypeAlias$$.$getPlotArea$ = (0,D.$JSCompiler_get$$)("$_plotArea$");
D.$JSCompiler_prototypeAlias$$.$getType$ = function $$JSCompiler_prototypeAlias$$$$getType$$() {
  return this.$getOptions$().type
};
D.$JSCompiler_prototypeAlias$$.$getGapRatio$ = function $$JSCompiler_prototypeAlias$$$$getGapRatio$$() {
  var $options$$140_wRatio$$ = this.$getOptions$();
  if($options$$140_wRatio$$.layout.gapRatio !== D.$JSCompiler_alias_NULL$$ && !(0,window.isNaN)($options$$140_wRatio$$.layout.gapRatio)) {
    return $options$$140_wRatio$$.layout.gapRatio
  }
  var $options$$140_wRatio$$ = window.Math.min(this.$Width$ / 400, 1), $hRatio$$ = window.Math.min(this.$Height$ / 300, 1);
  return window.Math.min($options$$140_wRatio$$, $hRatio$$)
};
D.$JSCompiler_prototypeAlias$$.$getSelectionHandler$ = (0,D.$JSCompiler_get$$)("$_selectionHandler$");
D.$JSCompiler_prototypeAlias$$.$isSelectionSupported$ = function $$JSCompiler_prototypeAlias$$$$isSelectionSupported$$() {
  return this.$_selectionHandler$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = function $$JSCompiler_prototypeAlias$$$$getShowPopupBehaviors$$($stampId$$11$$) {
  return this.$_popupBehaviors$ ? this.$_popupBehaviors$[$stampId$$11$$] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$bringToFrontOfSelection$ = function $$JSCompiler_prototypeAlias$$$$bringToFrontOfSelection$$($detObj$$) {
  var $par$$3$$ = $detObj$$.getParent();
  if($par$$3$$) {
    var $parentChildCount$$3$$ = $par$$3$$.$getNumChildren$();
    1 < $parentChildCount$$3$$ - this.$_numFrontObjs$ && ($par$$3$$.removeChild($detObj$$), $par$$3$$.$addChildAt$($detObj$$, $parentChildCount$$3$$ - this.$_numFrontObjs$ - 1))
  }
  (!$detObj$$.$isSelected$() || !$detObj$$.$isHoverEffectShown$()) && this.$_numSelectedObjsInFront$++
};
D.$JSCompiler_prototypeAlias$$.$pushToBackOfSelection$ = function $$JSCompiler_prototypeAlias$$$$pushToBackOfSelection$$($detObj$$1$$) {
  0 < this.$_numSelectedObjsInFront$ && this.$_numSelectedObjsInFront$--;
  var $par$$4$$ = $detObj$$1$$.getParent();
  if($par$$4$$) {
    var $newIndex$$4$$ = $par$$4$$.$getNumChildren$() - this.$_numFrontObjs$ - 1 - this.$_numSelectedObjsInFront$;
    0 <= $newIndex$$4$$ && ($par$$4$$.removeChild($detObj$$1$$), $par$$4$$.$addChildAt$($detObj$$1$$, $newIndex$$4$$))
  }
};
D.$JSCompiler_prototypeAlias$$.$setViewport$ = function $$JSCompiler_prototypeAlias$$$$setViewport$$($bounds$$89$$, $actionDone$$2$$) {
  D.$DvtChartTypeUtils$$.$isScrollSupported$(this) && ($bounds$$89$$.$xMax$ != D.$JSCompiler_alias_NULL$$ && (this.$Options$.xAxis.viewportMax = $bounds$$89$$.$xMax$), $bounds$$89$$.$xMin$ != D.$JSCompiler_alias_NULL$$ && (this.$Options$.xAxis.viewportMin = $bounds$$89$$.$xMin$), D.$DvtChartTypeUtils$$.$isBLAC$(this) ? (this.$Options$.xAxis.viewportStartGroup = D.$JSCompiler_alias_NULL$$, this.$Options$.xAxis.viewportEndGroup = D.$JSCompiler_alias_NULL$$) : ($bounds$$89$$.$yMax$ != D.$JSCompiler_alias_NULL$$ && 
  (this.$Options$.yAxis.viewportMax = $bounds$$89$$.$yMax$), $bounds$$89$$.$yMin$ != D.$JSCompiler_alias_NULL$$ && (this.$Options$.yAxis.viewportMin = $bounds$$89$$.$yMin$)), this.$Options$._duringAnimation = !$actionDone$$2$$, D.$DvtChartRenderer$$.$rerenderAxisAndPlotArea$(this, this.$_container$))
};
D.$JSCompiler_StaticMethods_setScrollbarViewport$$ = function $$JSCompiler_StaticMethods_setScrollbarViewport$$$($JSCompiler_StaticMethods_setScrollbarViewport$self$$, $bounds$$90$$) {
  $JSCompiler_StaticMethods_setScrollbarViewport$self$$.$overview$ && $JSCompiler_StaticMethods_setScrollbarViewport$self$$.$overview$.$setViewportRange$($bounds$$90$$.$xMin$, $bounds$$90$$.$xMax$);
  $JSCompiler_StaticMethods_setScrollbarViewport$self$$.$xScrollbar$ && $JSCompiler_StaticMethods_setScrollbarViewport$self$$.$xScrollbar$.$setViewportRange$($bounds$$90$$.$xMin$, $bounds$$90$$.$xMax$);
  $JSCompiler_StaticMethods_setScrollbarViewport$self$$.$yScrollbar$ && $JSCompiler_StaticMethods_setScrollbarViewport$self$$.$yScrollbar$.$setViewportRange$($bounds$$90$$.$yMin$, $bounds$$90$$.$yMax$)
};
D.$DvtChartImpl$$.prototype.$getRadius$ = (0,D.$JSCompiler_get$$)("$_radius$");
D.$JSCompiler_StaticMethods_hideDragButtons$$ = function $$JSCompiler_StaticMethods_hideDragButtons$$$($JSCompiler_StaticMethods_hideDragButtons$self$$) {
  $JSCompiler_StaticMethods_hideDragButtons$self$$.$dragButtons$ && $JSCompiler_StaticMethods_hideDragButtons$self$$.$dragButtons$.$setVisible$(D.$JSCompiler_alias_FALSE$$)
};
D.$DvtChartAutomation$$ = function $$DvtChartAutomation$$$($dvtComponent$$8$$) {
  this.$_chart$ = $dvtComponent$$8$$;
  this.$_options$ = this.$_chart$.$getOptions$();
  this.$_legend$ = this.$_chart$.$legend$;
  this.$_axis$ = this.$_chart$.$xAxis$;
  this.$_legendAutomation$ = this.$_legend$ ? this.$_legend$.$getAutomation$() : D.$JSCompiler_alias_NULL$$;
  this.$_axisAutomation$ = this.$_axis$ ? this.$_axis$.$getAutomation$() : D.$JSCompiler_alias_NULL$$
};
(0,D.$goog$exportSymbol$$)("DvtChartAutomation", D.$DvtChartAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChartAutomation$$, D.$DvtAutomation$$, "DvtChartAutomation");
D.$DvtChartAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtChartAutomation$$$$$GetSubIdForDomElement$$($JSCompiler_inline_result$$344_axisSubId_displayable$$38_index$$inline_5441_legendItem$$inline_5437_legendSubId_seriesIndex$$28$$) {
  if($JSCompiler_inline_result$$344_axisSubId_displayable$$38_index$$inline_5441_legendItem$$inline_5437_legendSubId_seriesIndex$$28$$.$isDescendantOf$(this.$_legend$)) {
    $JSCompiler_inline_result$$344_axisSubId_displayable$$38_index$$inline_5441_legendItem$$inline_5437_legendSubId_seriesIndex$$28$$ = this.$_legendAutomation$.$GetSubIdForDomElement$($JSCompiler_inline_result$$344_axisSubId_displayable$$38_index$$inline_5441_legendItem$$inline_5437_legendSubId_seriesIndex$$28$$);
    a: {
      if($JSCompiler_inline_result$$344_axisSubId_displayable$$38_index$$inline_5441_legendItem$$inline_5437_legendSubId_seriesIndex$$28$$ = (0,D.$JSCompiler_StaticMethods_getLegendItem$$)(this.$_legendAutomation$, this.$_legend$.$__getOptions$(), $JSCompiler_inline_result$$344_axisSubId_displayable$$38_index$$inline_5441_legendItem$$inline_5437_legendSubId_seriesIndex$$28$$)) {
        for(var $groupIndex$$17_logicalObj$$13_s$$inline_5438$$ = 0;$groupIndex$$17_logicalObj$$13_s$$inline_5438$$ < this.$_options$.series.length;$groupIndex$$17_logicalObj$$13_s$$inline_5438$$++) {
          if(this.$_options$.series[$groupIndex$$17_logicalObj$$13_s$$inline_5438$$].name == $JSCompiler_inline_result$$344_axisSubId_displayable$$38_index$$inline_5441_legendItem$$inline_5437_legendSubId_seriesIndex$$28$$.text) {
            $JSCompiler_inline_result$$344_axisSubId_displayable$$38_index$$inline_5441_legendItem$$inline_5437_legendSubId_seriesIndex$$28$$ = "series[" + $groupIndex$$17_logicalObj$$13_s$$inline_5438$$ + "]";
            break a
          }
        }
      }
      $JSCompiler_inline_result$$344_axisSubId_displayable$$38_index$$inline_5441_legendItem$$inline_5437_legendSubId_seriesIndex$$28$$ = D.$JSCompiler_alias_NULL$$
    }
    return $JSCompiler_inline_result$$344_axisSubId_displayable$$38_index$$inline_5441_legendItem$$inline_5437_legendSubId_seriesIndex$$28$$
  }
  if($JSCompiler_inline_result$$344_axisSubId_displayable$$38_index$$inline_5441_legendItem$$inline_5437_legendSubId_seriesIndex$$28$$.$isDescendantOf$(this.$_axis$)) {
    return $JSCompiler_inline_result$$344_axisSubId_displayable$$38_index$$inline_5441_legendItem$$inline_5437_legendSubId_seriesIndex$$28$$ = this.$_axisAutomation$.$GetSubIdForDomElement$($JSCompiler_inline_result$$344_axisSubId_displayable$$38_index$$inline_5441_legendItem$$inline_5437_legendSubId_seriesIndex$$28$$), ($JSCompiler_inline_result$$344_axisSubId_displayable$$38_index$$inline_5441_legendItem$$inline_5437_legendSubId_seriesIndex$$28$$ = $JSCompiler_inline_result$$344_axisSubId_displayable$$38_index$$inline_5441_legendItem$$inline_5437_legendSubId_seriesIndex$$28$$.substring($JSCompiler_inline_result$$344_axisSubId_displayable$$38_index$$inline_5441_legendItem$$inline_5437_legendSubId_seriesIndex$$28$$.indexOf("[") + 
    1, $JSCompiler_inline_result$$344_axisSubId_displayable$$38_index$$inline_5441_legendItem$$inline_5437_legendSubId_seriesIndex$$28$$.indexOf("]"))) ? "group[" + $JSCompiler_inline_result$$344_axisSubId_displayable$$38_index$$inline_5441_legendItem$$inline_5437_legendSubId_seriesIndex$$28$$ + "]" : D.$JSCompiler_alias_NULL$$
  }
  if("pie" == this.$_options$.type) {
    if($groupIndex$$17_logicalObj$$13_s$$inline_5438$$ = $JSCompiler_inline_result$$344_axisSubId_displayable$$38_index$$inline_5441_legendItem$$inline_5437_legendSubId_seriesIndex$$28$$.$_logicalObjects$[0].logicalObject) {
      return"dataItem[" + $groupIndex$$17_logicalObj$$13_s$$inline_5438$$.$getSeriesIndex$() + "]"
    }
  }else {
    if($groupIndex$$17_logicalObj$$13_s$$inline_5438$$ = this.$_chart$.$getEventManager$().$GetLogicalObject$($JSCompiler_inline_result$$344_axisSubId_displayable$$38_index$$inline_5441_legendItem$$inline_5437_legendSubId_seriesIndex$$28$$), $groupIndex$$17_logicalObj$$13_s$$inline_5438$$ instanceof D.$DvtChartObjPeer$$) {
      $JSCompiler_inline_result$$344_axisSubId_displayable$$38_index$$inline_5441_legendItem$$inline_5437_legendSubId_seriesIndex$$28$$ = $groupIndex$$17_logicalObj$$13_s$$inline_5438$$.$getSeriesIndex$();
      $groupIndex$$17_logicalObj$$13_s$$inline_5438$$ = $groupIndex$$17_logicalObj$$13_s$$inline_5438$$.$getGroupIndex$();
      if($JSCompiler_inline_result$$344_axisSubId_displayable$$38_index$$inline_5441_legendItem$$inline_5437_legendSubId_seriesIndex$$28$$ != D.$JSCompiler_alias_NULL$$ && 0 <= $groupIndex$$17_logicalObj$$13_s$$inline_5438$$ && "funnel" != this.$_options$.type) {
        return"dataItem[" + $JSCompiler_inline_result$$344_axisSubId_displayable$$38_index$$inline_5441_legendItem$$inline_5437_legendSubId_seriesIndex$$28$$ + "][" + $groupIndex$$17_logicalObj$$13_s$$inline_5438$$ + "]"
      }
      if($JSCompiler_inline_result$$344_axisSubId_displayable$$38_index$$inline_5441_legendItem$$inline_5437_legendSubId_seriesIndex$$28$$ != D.$JSCompiler_alias_NULL$$ && $groupIndex$$17_logicalObj$$13_s$$inline_5438$$ == D.$DvtFunnelRenderer$$.$_GROUP_INDEX$ && "funnel" == this.$_options$.type) {
        return"dataItem[" + $JSCompiler_inline_result$$344_axisSubId_displayable$$38_index$$inline_5441_legendItem$$inline_5437_legendSubId_seriesIndex$$28$$ + "]"
      }
      if($JSCompiler_inline_result$$344_axisSubId_displayable$$38_index$$inline_5441_legendItem$$inline_5437_legendSubId_seriesIndex$$28$$ != D.$JSCompiler_alias_NULL$$ && ($groupIndex$$17_logicalObj$$13_s$$inline_5438$$ == D.$JSCompiler_alias_NULL$$ || 0 > $groupIndex$$17_logicalObj$$13_s$$inline_5438$$)) {
        return"series[" + $JSCompiler_inline_result$$344_axisSubId_displayable$$38_index$$inline_5441_legendItem$$inline_5437_legendSubId_seriesIndex$$28$$ + "]"
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtChartAutomation$$$$$getDomElementForSubId$$($logicalObj$$14_subId$$21$$) {
  var $firstIndex$$4_openParen1$$ = $logicalObj$$14_subId$$21$$.indexOf("["), $closeParen1_openParen2$$ = $logicalObj$$14_subId$$21$$.indexOf("]");
  if(0 < $firstIndex$$4_openParen1$$ && 0 < $closeParen1_openParen2$$) {
    var $closeParen2_objType_pieSlice$$ = $logicalObj$$14_subId$$21$$.substring(0, $firstIndex$$4_openParen1$$);
    if("group" == $closeParen2_objType_pieSlice$$) {
      return this.$_axisAutomation$.$getDomElementForSubId$($logicalObj$$14_subId$$21$$)
    }
    if("series" == $closeParen2_objType_pieSlice$$) {
      return $logicalObj$$14_subId$$21$$ = "section" + (0,D.$JSCompiler_StaticMethods_getIndicesFromSeries$$)(this.$_legendAutomation$, this.$_options$.series[$logicalObj$$14_subId$$21$$.substring($logicalObj$$14_subId$$21$$.indexOf("[") + 1, $logicalObj$$14_subId$$21$$.indexOf("]"))], this.$_legend$.$__getOptions$()), this.$_legendAutomation$.$getDomElementForSubId$($logicalObj$$14_subId$$21$$)
    }
    $firstIndex$$4_openParen1$$ = $logicalObj$$14_subId$$21$$.substring($firstIndex$$4_openParen1$$ + 1, $closeParen1_openParen2$$);
    if("pie" == this.$_options$.type && ($closeParen2_objType_pieSlice$$ = 0 <= $firstIndex$$4_openParen1$$ && $firstIndex$$4_openParen1$$ < this.$_chart$.$pieChart$.$_slices$.length ? (0,D.$JSCompiler_StaticMethods_getTopDisplayable$$)(this.$_chart$.$pieChart$.$_slices$[$firstIndex$$4_openParen1$$]) : D.$JSCompiler_alias_NULL$$)) {
      return $closeParen2_objType_pieSlice$$.$getElem$()
    }
    if("funnel" == this.$_options$.type) {
      var $secondIndex$$1$$ = D.$DvtFunnelRenderer$$.$_GROUP_INDEX$
    }else {
      $logicalObj$$14_subId$$21$$ = $logicalObj$$14_subId$$21$$.substring($closeParen1_openParen2$$ + 1), $closeParen1_openParen2$$ = $logicalObj$$14_subId$$21$$.indexOf("["), $closeParen2_objType_pieSlice$$ = $logicalObj$$14_subId$$21$$.indexOf("]"), 0 <= $closeParen1_openParen2$$ && 0 <= $closeParen2_objType_pieSlice$$ && ($secondIndex$$1$$ = $logicalObj$$14_subId$$21$$.substring($closeParen1_openParen2$$ + 1, $closeParen2_objType_pieSlice$$))
    }
    if($logicalObj$$14_subId$$21$$ = this.$_getChartObjPeer$($firstIndex$$4_openParen1$$, $secondIndex$$1$$)) {
      return $logicalObj$$14_subId$$21$$.$getDisplayables$()[0].$getElem$()
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartAutomation$$.prototype.getDomElementForSubId = D.$DvtChartAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtChartAutomation$$.prototype.$_getChartObjPeer$ = function $$DvtChartAutomation$$$$$_getChartObjPeer$$($firstIndex$$5$$, $secondIndex$$2$$) {
  for(var $peers$$4$$ = this.$_chart$.$getObjects$(), $i$$467$$ = 0;$i$$467$$ < $peers$$4$$.length;$i$$467$$++) {
    var $seriesIndex$$29$$ = $peers$$4$$[$i$$467$$].$getSeriesIndex$(), $groupIndex$$18$$ = $peers$$4$$[$i$$467$$].$getGroupIndex$();
    if($seriesIndex$$29$$ == $firstIndex$$5$$ && $groupIndex$$18$$ == $secondIndex$$2$$) {
      return $peers$$4$$[$i$$467$$]
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartAutomation$$.prototype.$getDataItem$ = function $$DvtChartAutomation$$$$$getDataItem$$($firstIndex$$6$$, $secondIndex$$3$$) {
  if("pie" == this.$_options$.type || "funnel" == this.$_options$.type) {
    $secondIndex$$3$$ = 0
  }
  var $dataItem$$12$$ = D.$DvtChartDataUtils$$.$getDataItem$(this.$_chart$, $firstIndex$$6$$, $secondIndex$$3$$);
  return{borderColor:D.$DvtChartStyleUtils$$.$getBorderColor$(this.$_chart$, $firstIndex$$6$$, $secondIndex$$3$$), color:D.$DvtChartStyleUtils$$.$getColor$(this.$_chart$, $firstIndex$$6$$, $secondIndex$$3$$), label:D.$DvtChartDataUtils$$.$getDataLabel$(this.$_chart$, $firstIndex$$6$$, $secondIndex$$3$$), targetValue:D.$DvtChartDataUtils$$.$getTargetValue$(this.$_chart$, $firstIndex$$6$$), tooltip:D.$DvtChartTooltipUtils$$.$getDatatip$(D.$JSCompiler_alias_NULL$$, this.$_chart$, $firstIndex$$6$$, $secondIndex$$3$$), 
  value:D.$DvtChartDataUtils$$.getValue(this.$_chart$, $firstIndex$$6$$, $secondIndex$$3$$), x:D.$DvtChartDataUtils$$.$getXValue$(this.$_chart$, $firstIndex$$6$$, $secondIndex$$3$$), y:$dataItem$$12$$ ? $dataItem$$12$$.y : D.$JSCompiler_alias_NULL$$, z:$dataItem$$12$$ ? $dataItem$$12$$.z : D.$JSCompiler_alias_NULL$$, group:D.$DvtChartDataUtils$$.$getGroup$(this.$_chart$, $secondIndex$$3$$), series:D.$DvtChartDataUtils$$.$getSeries$(this.$_chart$, $firstIndex$$6$$), selected:D.$DvtChartDataUtils$$.$isDataSelected$(this.$_chart$, 
  $firstIndex$$6$$, $secondIndex$$3$$)}
};
D.$DvtChartAutomation$$.prototype.getDataItem = D.$DvtChartAutomation$$.prototype.$getDataItem$;
D.$DvtChartAutomation$$.prototype.$getGroup$ = function $$DvtChartAutomation$$$$$getGroup$$($groupIndex$$19$$) {
  return this.$_options$.groups[$groupIndex$$19$$]
};
D.$DvtChartAutomation$$.prototype.getGroup = D.$DvtChartAutomation$$.prototype.$getGroup$;
D.$DvtChartAutomation$$.prototype.$getSeries$ = function $$DvtChartAutomation$$$$$getSeries$$($seriesIndex$$31$$) {
  return this.$_options$.series[$seriesIndex$$31$$].name
};
D.$DvtChartAutomation$$.prototype.getSeries = D.$DvtChartAutomation$$.prototype.$getSeries$;
D.$DvtChartAutomation$$.prototype.$getGroupCount$ = function $$DvtChartAutomation$$$$$getGroupCount$$() {
  return this.$_options$.groups.length
};
D.$DvtChartAutomation$$.prototype.getGroupCount = D.$DvtChartAutomation$$.prototype.$getGroupCount$;
D.$DvtChartAutomation$$.prototype.$getSeriesCount$ = function $$DvtChartAutomation$$$$$getSeriesCount$$() {
  return this.$_options$.series.length
};
D.$DvtChartAutomation$$.prototype.getSeriesCount = D.$DvtChartAutomation$$.prototype.$getSeriesCount$;
D.$DvtChartAutomation$$.prototype.$getTitle$ = function $$DvtChartAutomation$$$$$getTitle$$() {
  return this.$_options$.title.text
};
D.$DvtChartAutomation$$.prototype.getTitle = D.$DvtChartAutomation$$.prototype.$getTitle$;
D.$DvtChartAutomation$$.prototype.$getLegend$ = function $$DvtChartAutomation$$$$$getLegend$$() {
  var $legendSpace$$1$$ = this.$_legend$.$_bounds$, $point$$24$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)(this.$_chart$, new D.$DvtPoint$$($legendSpace$$1$$.x, $legendSpace$$1$$.y));
  return{bounds:{x:$point$$24$$.x, y:$point$$24$$.y, width:$legendSpace$$1$$.$w$, height:$legendSpace$$1$$.$h$}, title:this.$_legend$.$__getOptions$().title}
};
D.$DvtChartAutomation$$.prototype.getLegend = D.$DvtChartAutomation$$.prototype.$getLegend$;
D.$DvtChartAutomation$$.prototype.$getPlotArea$ = function $$DvtChartAutomation$$$$$getPlotArea$$() {
  var $plotAreaSpace$$ = this.$_chart$.$_plotAreaSpace$;
  return{bounds:{x:$plotAreaSpace$$.x, y:$plotAreaSpace$$.y, width:$plotAreaSpace$$.$w$, height:$plotAreaSpace$$.$h$}}
};
D.$DvtChartAutomation$$.prototype.getPlotArea = D.$DvtChartAutomation$$.prototype.$getPlotArea$;
D.$DvtChartAutomation$$.prototype.$getXAxis$ = function $$DvtChartAutomation$$$$$getXAxis$$() {
  if(this.$_chart$.$xAxis$) {
    var $xAxisSpace$$ = this.$_chart$.$xAxis$.$_bounds$;
    return{bounds:{x:$xAxisSpace$$.x, y:$xAxisSpace$$.y, width:$xAxisSpace$$.$w$, height:$xAxisSpace$$.$h$}, title:this.$_options$.xAxis.title}
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartAutomation$$.prototype.getXAxis = D.$DvtChartAutomation$$.prototype.$getXAxis$;
D.$DvtChartAutomation$$.prototype.$getYAxis$ = function $$DvtChartAutomation$$$$$getYAxis$$() {
  if(this.$_chart$.$yAxis$) {
    var $yAxisSpace$$ = this.$_chart$.$yAxis$.$_bounds$;
    return{bounds:{x:$yAxisSpace$$.x, y:$yAxisSpace$$.y, width:$yAxisSpace$$.$w$, height:$yAxisSpace$$.$h$}, title:this.$_options$.yAxis.title}
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartAutomation$$.prototype.getYAxis = D.$DvtChartAutomation$$.prototype.$getYAxis$;
D.$DvtChartAutomation$$.prototype.$getY2Axis$ = function $$DvtChartAutomation$$$$$getY2Axis$$() {
  if(this.$_chart$.$y2Axis$) {
    var $y2AxisSpace$$ = this.$_chart$.$y2Axis$.$_bounds$;
    return{bounds:{x:$y2AxisSpace$$.x, y:$y2AxisSpace$$.y, width:$y2AxisSpace$$.$w$, height:$y2AxisSpace$$.$h$}, title:this.$_options$.y2Axis.title}
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartAutomation$$.prototype.getY2Axis = D.$DvtChartAutomation$$.prototype.$getY2Axis$;
D.$DvtChartBundle$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtChartBundle$$, D.$DvtUtilBundle$$, "DvtChartBundle");
D.$DvtChartBundle$$._defaults = {EMPTY_TEXT:"No data to display", DEFAULT_GROUP_NAME:"Group {0}", LABEL_SERIES:"Series: {0}", LABEL_GROUP:"Group: {0}", LABEL_VALUE:"Value: {0}", LABEL_TARGET_VALUE:"Target: {0}", LABEL_X:"X: {0}", LABEL_Y:"Y: {0}", LABEL_Z:"Z: {0}", LABEL_LOW:"Low: {0}", LABEL_HIGH:"High: {0}", LABEL_PERCENTAGE:"Percentage: {0}", LABEL_OTHER:"Other", PAN:"Pan", MARQUEE_SELECT:"Marquee select", MARQUEE_ZOOM:"Marquee zoom"};
D.$DvtChartBundle$$.prototype.$GetDefaultStringForKey$ = function $$DvtChartBundle$$$$$GetDefaultStringForKey$$($key$$71$$) {
  var $defaultStr$$2$$ = D.$DvtChartBundle$$.$superclass$.$GetDefaultStringForKey$.call(this, $key$$71$$);
  return $defaultStr$$2$$ ? $defaultStr$$2$$ : D.$DvtChartBundle$$._defaults[$key$$71$$]
};
D.$DvtChartBundle$$.prototype.$GetBundlePrefix$ = (0,D.$JSCompiler_returnArg$$)("DvtChartBundle");
D.$DvtChartEventManager$$ = function $$DvtChartEventManager$$$($chart$$4$$) {
  D.$DvtChartEventManager$$.$superclass$.Init.call(this, $chart$$4$$.$_context$, $chart$$4$$.$processEvent$, $chart$$4$$);
  this.$_chart$ = $chart$$4$$;
  this.$_dragMode$ = D.$JSCompiler_alias_NULL$$;
  this.$_dragButtonsVisible$ = (0,D.$DvtAgent$isTouchDevice$$)();
  this.$_stageAbsolutePosition$ = this.$_marqueeSelectHandler$ = this.$_marqueeZoomHandler$ = this.$_panZoomHandler$ = this.$_dataCursorHandler$ = this.$_seriesRolloverHandler$ = this.$selectButton$ = this.$zoomButton$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartEventManager$$, D.$DvtEventManager$$, "DvtChartEventManager");
D.$DvtChartEventManager$getUIEventParams$$ = function $$DvtChartEventManager$getUIEventParams$$$($type$$98$$, $id$$109$$, $series$$10$$) {
  return{type:$type$$98$$, id:$id$$109$$, series:$series$$10$$, group:D.$JSCompiler_alias_VOID$$}
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$addListeners$ = function $$JSCompiler_prototypeAlias$$$$addListeners$$($displayable$$32$$) {
  D.$DvtSvgDocumentUtils$$.$addDragListeners$(this.$_chart$, this.$_onDragStart$, this.$_onDragMove$, this.$_onDragEnd$, this);
  D.$DvtChartEventManager$$.$superclass$.$addListeners$.call(this, $displayable$$32$$);
  (0,D.$DvtAgent$isTouchDevice$$)() || ((0,D.$DvtAgent$isPlatformGecko$$)() ? $displayable$$32$$.$addEvtListener$("wheel", this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this) : $displayable$$32$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEWHEEL$$, this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this))
};
D.$JSCompiler_prototypeAlias$$.$removeListeners$ = function $$JSCompiler_prototypeAlias$$$$removeListeners$$($displayable$$33$$) {
  D.$DvtChartEventManager$$.$superclass$.$removeListeners$.call(this, $displayable$$33$$);
  (0,D.$DvtAgent$isTouchDevice$$)() || ((0,D.$DvtAgent$isPlatformGecko$$)() ? $displayable$$33$$.$removeEvtListener$("DOMMouseScroll", this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this) : $displayable$$33$$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEWHEEL$$, this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this))
};
D.$JSCompiler_prototypeAlias$$.$FireUIEvent$ = function $$JSCompiler_prototypeAlias$$$$FireUIEvent$$($type$$99$$, $logicalObj$$10$$) {
  if($logicalObj$$10$$ instanceof D.$DvtSimpleObjPeer$$ && $logicalObj$$10$$.$getParams$() != D.$JSCompiler_alias_NULL$$) {
    $logicalObj$$10$$.$getParams$()
  }else {
    if($logicalObj$$10$$ instanceof D.$DvtPieSlice$$) {
      var $sliceId$$ = $logicalObj$$10$$.getId();
      $sliceId$$.$getSeries$() == D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$ || ($sliceId$$.getId(), $sliceId$$.$getSeries$(), $sliceId$$.$getGroup$())
    }else {
      $logicalObj$$10$$ instanceof D.$DvtChartObjPeer$$ && (0 <= $logicalObj$$10$$.$getSeriesIndex$() && 0 <= $logicalObj$$10$$.$getGroupIndex$() || $logicalObj$$10$$.$getSeriesIndex$(), $logicalObj$$10$$.$getSeries$(), $logicalObj$$10$$.$getGroup$())
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$getLogicalObject$ = function $$JSCompiler_prototypeAlias$$$$getLogicalObject$$($target$$64$$) {
  return this.$GetLogicalObject$($target$$64$$, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$_getRelativePosition$ = function $$JSCompiler_prototypeAlias$$$$_getRelativePosition$$($pageX$$6$$, $pageY$$6$$) {
  this.$_stageAbsolutePosition$ || (this.$_stageAbsolutePosition$ = (0,D.$JSCompiler_StaticMethods_getStageAbsolutePosition$$)(this.$_context$));
  return new D.$DvtPoint$$($pageX$$6$$ - this.$_stageAbsolutePosition$.x, $pageY$$6$$ - this.$_stageAbsolutePosition$.y)
};
D.$JSCompiler_StaticMethods__getDragHandler$$ = function $$JSCompiler_StaticMethods__getDragHandler$$$($JSCompiler_StaticMethods__getDragHandler$self$$) {
  return"pan" == $JSCompiler_StaticMethods__getDragHandler$self$$.$_dragMode$ ? $JSCompiler_StaticMethods__getDragHandler$self$$.$_panZoomHandler$ : "zoom" == $JSCompiler_StaticMethods__getDragHandler$self$$.$_dragMode$ ? $JSCompiler_StaticMethods__getDragHandler$self$$.$_marqueeZoomHandler$ : "select" == $JSCompiler_StaticMethods__getDragHandler$self$$.$_dragMode$ ? $JSCompiler_StaticMethods__getDragHandler$self$$.$_marqueeSelectHandler$ : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_onDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onDragStart$$($JSCompiler_temp$$287_event$$364$$) {
  if((0,D.$DvtAgent$isTouchDevice$$)()) {
    var $chartEvent$$inline_5099_relPos$$inline_5091_relPos2$$inline_5093_touches$$inline_5087$$ = $JSCompiler_temp$$287_event$$364$$.touches, $chartEvent$$inline_5088_dragHandler$$inline_5098_relPos1$$inline_5092$$, $dataCursorOn$$inline_5089_relPos$$inline_5097$$, $JSCompiler_StaticMethods_processPinchStart$self$$inline_10398_dragHandler$$inline_5090_obj$$inline_5100$$;
    1 == $chartEvent$$inline_5099_relPos$$inline_5091_relPos2$$inline_5093_touches$$inline_5087$$.length ? ($JSCompiler_StaticMethods_processPinchStart$self$$inline_10398_dragHandler$$inline_5090_obj$$inline_5100$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this)) ? ($chartEvent$$inline_5099_relPos$$inline_5091_relPos2$$inline_5093_touches$$inline_5087$$ = this.$_getRelativePosition$($chartEvent$$inline_5099_relPos$$inline_5091_relPos2$$inline_5093_touches$$inline_5087$$[0].pageX, $chartEvent$$inline_5099_relPos$$inline_5091_relPos2$$inline_5093_touches$$inline_5087$$[0].pageY), 
    $chartEvent$$inline_5088_dragHandler$$inline_5098_relPos1$$inline_5092$$ = $JSCompiler_StaticMethods_processPinchStart$self$$inline_10398_dragHandler$$inline_5090_obj$$inline_5100$$.$processDragStart$($chartEvent$$inline_5099_relPos$$inline_5091_relPos2$$inline_5093_touches$$inline_5087$$, D.$JSCompiler_alias_TRUE$$)) : this.$_dataCursorHandler$ && ((0,D.$JSCompiler_StaticMethods_processMove$$)(this.$_dataCursorHandler$, $chartEvent$$inline_5099_relPos$$inline_5091_relPos2$$inline_5093_touches$$inline_5087$$[0].pageX, 
    $chartEvent$$inline_5099_relPos$$inline_5091_relPos2$$inline_5093_touches$$inline_5087$$[0].pageY, $JSCompiler_temp$$287_event$$364$$.target, this.$GetLogicalObject$($JSCompiler_temp$$287_event$$364$$.target)), $dataCursorOn$$inline_5089_relPos$$inline_5097$$ = D.$JSCompiler_alias_TRUE$$) : 2 == $chartEvent$$inline_5099_relPos$$inline_5091_relPos2$$inline_5093_touches$$inline_5087$$.length && (this.$_panZoomHandler$ && D.$DvtChartEventUtils$$.$isZoomable$(this.$_chart$)) && (this.$endDrag$(), 
    $chartEvent$$inline_5088_dragHandler$$inline_5098_relPos1$$inline_5092$$ = this.$_getRelativePosition$($chartEvent$$inline_5099_relPos$$inline_5091_relPos2$$inline_5093_touches$$inline_5087$$[0].pageX, $chartEvent$$inline_5099_relPos$$inline_5091_relPos2$$inline_5093_touches$$inline_5087$$[0].pageY), $chartEvent$$inline_5099_relPos$$inline_5091_relPos2$$inline_5093_touches$$inline_5087$$ = this.$_getRelativePosition$($chartEvent$$inline_5099_relPos$$inline_5091_relPos2$$inline_5093_touches$$inline_5087$$[1].pageX, 
    $chartEvent$$inline_5099_relPos$$inline_5091_relPos2$$inline_5093_touches$$inline_5087$$[1].pageY), $JSCompiler_StaticMethods_processPinchStart$self$$inline_10398_dragHandler$$inline_5090_obj$$inline_5100$$ = this.$_panZoomHandler$, $JSCompiler_StaticMethods_processPinchStart$self$$inline_10398_dragHandler$$inline_5090_obj$$inline_5100$$.$_pinchOn$ ? $chartEvent$$inline_5088_dragHandler$$inline_5098_relPos1$$inline_5092$$ = D.$JSCompiler_alias_NULL$$ : ($JSCompiler_StaticMethods_processPinchStart$self$$inline_10398_dragHandler$$inline_5090_obj$$inline_5100$$.$_origPt1$ = 
    $JSCompiler_StaticMethods_processPinchStart$self$$inline_10398_dragHandler$$inline_5090_obj$$inline_5100$$.$_container$.$stageToLocal$($chartEvent$$inline_5088_dragHandler$$inline_5098_relPos1$$inline_5092$$), $JSCompiler_StaticMethods_processPinchStart$self$$inline_10398_dragHandler$$inline_5090_obj$$inline_5100$$.$_origPt2$ = $JSCompiler_StaticMethods_processPinchStart$self$$inline_10398_dragHandler$$inline_5090_obj$$inline_5100$$.$_container$.$stageToLocal$($chartEvent$$inline_5099_relPos$$inline_5091_relPos2$$inline_5093_touches$$inline_5087$$), 
    $JSCompiler_StaticMethods_processPinchStart$self$$inline_10398_dragHandler$$inline_5090_obj$$inline_5100$$.$_lastPt1$ = $JSCompiler_StaticMethods_processPinchStart$self$$inline_10398_dragHandler$$inline_5090_obj$$inline_5100$$.$_origPt1$, $JSCompiler_StaticMethods_processPinchStart$self$$inline_10398_dragHandler$$inline_5090_obj$$inline_5100$$.$_lastPt2$ = $JSCompiler_StaticMethods_processPinchStart$self$$inline_10398_dragHandler$$inline_5090_obj$$inline_5100$$.$_origPt2$, !(0,D.$JSCompiler_StaticMethods_containsPoint$$)($JSCompiler_StaticMethods_processPinchStart$self$$inline_10398_dragHandler$$inline_5090_obj$$inline_5100$$.$_bounds$, 
    $JSCompiler_StaticMethods_processPinchStart$self$$inline_10398_dragHandler$$inline_5090_obj$$inline_5100$$.$_origPt1$.x, $JSCompiler_StaticMethods_processPinchStart$self$$inline_10398_dragHandler$$inline_5090_obj$$inline_5100$$.$_origPt1$.y) || !(0,D.$JSCompiler_StaticMethods_containsPoint$$)($JSCompiler_StaticMethods_processPinchStart$self$$inline_10398_dragHandler$$inline_5090_obj$$inline_5100$$.$_bounds$, $JSCompiler_StaticMethods_processPinchStart$self$$inline_10398_dragHandler$$inline_5090_obj$$inline_5100$$.$_origPt2$.x, 
    $JSCompiler_StaticMethods_processPinchStart$self$$inline_10398_dragHandler$$inline_5090_obj$$inline_5100$$.$_origPt2$.y) ? $chartEvent$$inline_5088_dragHandler$$inline_5098_relPos1$$inline_5092$$ = D.$JSCompiler_alias_NULL$$ : ($JSCompiler_StaticMethods_processPinchStart$self$$inline_10398_dragHandler$$inline_5090_obj$$inline_5100$$.$_pinchOn$ = D.$JSCompiler_alias_TRUE$$, $chartEvent$$inline_5088_dragHandler$$inline_5098_relPos1$$inline_5092$$ = new D.$DvtPanZoomEvent$$("dvtPinchStartEvent", 
    0, 0, 0, 0, 0, 0, 0, 0))));
    $chartEvent$$inline_5088_dragHandler$$inline_5098_relPos1$$inline_5092$$ && (this.$_callback$.call(this.$_callbackObj$, $chartEvent$$inline_5088_dragHandler$$inline_5098_relPos1$$inline_5092$$), this.$_context$.$getTooltipManager$().$hideTooltip$());
    $chartEvent$$inline_5088_dragHandler$$inline_5098_relPos1$$inline_5092$$ || $dataCursorOn$$inline_5089_relPos$$inline_5097$$ ? ($JSCompiler_temp$$287_event$$364$$.preventDefault(), $JSCompiler_temp$$287_event$$364$$.stopPropagation(), (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, D.$JSCompiler_alias_FALSE$$), $JSCompiler_temp$$287_event$$364$$ = D.$JSCompiler_alias_TRUE$$) : $JSCompiler_temp$$287_event$$364$$ = D.$JSCompiler_alias_FALSE$$
  }else {
    $dataCursorOn$$inline_5089_relPos$$inline_5097$$ = this.$_getRelativePosition$($JSCompiler_temp$$287_event$$364$$.pageX, $JSCompiler_temp$$287_event$$364$$.pageY);
    $chartEvent$$inline_5088_dragHandler$$inline_5098_relPos1$$inline_5092$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this);
    $JSCompiler_StaticMethods_processPinchStart$self$$inline_10398_dragHandler$$inline_5090_obj$$inline_5100$$ = this.$GetLogicalObject$((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($JSCompiler_temp$$287_event$$364$$));
    if((!$JSCompiler_StaticMethods_processPinchStart$self$$inline_10398_dragHandler$$inline_5090_obj$$inline_5100$$ || !$JSCompiler_StaticMethods_processPinchStart$self$$inline_10398_dragHandler$$inline_5090_obj$$inline_5100$$.$isSelectable$ || !$JSCompiler_StaticMethods_processPinchStart$self$$inline_10398_dragHandler$$inline_5090_obj$$inline_5100$$.$isSelectable$()) && 0 == $JSCompiler_temp$$287_event$$364$$.button && $chartEvent$$inline_5088_dragHandler$$inline_5098_relPos1$$inline_5092$$) {
      ($chartEvent$$inline_5099_relPos$$inline_5091_relPos2$$inline_5093_touches$$inline_5087$$ = $chartEvent$$inline_5088_dragHandler$$inline_5098_relPos1$$inline_5092$$.$processDragStart$($dataCursorOn$$inline_5089_relPos$$inline_5097$$, $JSCompiler_temp$$287_event$$364$$.ctrlKey)) && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$inline_5099_relPos$$inline_5091_relPos2$$inline_5093_touches$$inline_5087$$), this.$_chart$.setCursor($chartEvent$$inline_5088_dragHandler$$inline_5098_relPos1$$inline_5092$$.getCursor($dataCursorOn$$inline_5089_relPos$$inline_5097$$)), 
      (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, D.$JSCompiler_alias_FALSE$$)
    }
    $chartEvent$$inline_5099_relPos$$inline_5091_relPos2$$inline_5093_touches$$inline_5087$$ ? (this.$_dataCursorHandler$ && (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)(this.$_dataCursorHandler$), $JSCompiler_temp$$287_event$$364$$ = D.$JSCompiler_alias_TRUE$$) : $JSCompiler_temp$$287_event$$364$$ = D.$JSCompiler_alias_FALSE$$
  }
  return $JSCompiler_temp$$287_event$$364$$
};
D.$JSCompiler_prototypeAlias$$.$_onDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onDragMove$$($event$$365$$) {
  if((0,D.$DvtAgent$isTouchDevice$$)()) {
    var $JSCompiler_StaticMethods_processPinchMove$self$$inline_10404_chartEvent$$inline_5116_relPos$$inline_5108_touches$$inline_5104$$ = $event$$365$$.touches, $chartEvent$$inline_5105_dragHandler$$inline_5115_newPt1$$inline_10407_relPos1$$inline_5109$$, $dataCursorOn$$inline_5106_relPos$$inline_5114$$;
    if(1 == $JSCompiler_StaticMethods_processPinchMove$self$$inline_10404_chartEvent$$inline_5116_relPos$$inline_5108_touches$$inline_5104$$.length) {
      var $dragHandler$$inline_5107_newPt2$$inline_10408_relPos2$$inline_5110$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this);
      $dragHandler$$inline_5107_newPt2$$inline_10408_relPos2$$inline_5110$$ ? ($JSCompiler_StaticMethods_processPinchMove$self$$inline_10404_chartEvent$$inline_5116_relPos$$inline_5108_touches$$inline_5104$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_processPinchMove$self$$inline_10404_chartEvent$$inline_5116_relPos$$inline_5108_touches$$inline_5104$$[0].pageX, $JSCompiler_StaticMethods_processPinchMove$self$$inline_10404_chartEvent$$inline_5116_relPos$$inline_5108_touches$$inline_5104$$[0].pageY), 
      $chartEvent$$inline_5105_dragHandler$$inline_5115_newPt1$$inline_10407_relPos1$$inline_5109$$ = $dragHandler$$inline_5107_newPt2$$inline_10408_relPos2$$inline_5110$$.$processDragMove$($JSCompiler_StaticMethods_processPinchMove$self$$inline_10404_chartEvent$$inline_5116_relPos$$inline_5108_touches$$inline_5104$$, D.$JSCompiler_alias_TRUE$$)) : this.$_dataCursorHandler$ && ((0,D.$JSCompiler_StaticMethods_processMove$$)(this.$_dataCursorHandler$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_10404_chartEvent$$inline_5116_relPos$$inline_5108_touches$$inline_5104$$[0].pageX, 
      $JSCompiler_StaticMethods_processPinchMove$self$$inline_10404_chartEvent$$inline_5116_relPos$$inline_5108_touches$$inline_5104$$[0].pageY, $event$$365$$.target, this.$GetLogicalObject$($event$$365$$.target)), $dataCursorOn$$inline_5106_relPos$$inline_5114$$ = D.$JSCompiler_alias_TRUE$$)
    }else {
      if(2 == $JSCompiler_StaticMethods_processPinchMove$self$$inline_10404_chartEvent$$inline_5116_relPos$$inline_5108_touches$$inline_5104$$.length && this.$_panZoomHandler$ && D.$DvtChartEventUtils$$.$isZoomable$(this.$_chart$)) {
        if($chartEvent$$inline_5105_dragHandler$$inline_5115_newPt1$$inline_10407_relPos1$$inline_5109$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_processPinchMove$self$$inline_10404_chartEvent$$inline_5116_relPos$$inline_5108_touches$$inline_5104$$[0].pageX, $JSCompiler_StaticMethods_processPinchMove$self$$inline_10404_chartEvent$$inline_5116_relPos$$inline_5108_touches$$inline_5104$$[0].pageY), $dragHandler$$inline_5107_newPt2$$inline_10408_relPos2$$inline_5110$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_processPinchMove$self$$inline_10404_chartEvent$$inline_5116_relPos$$inline_5108_touches$$inline_5104$$[1].pageX, 
        $JSCompiler_StaticMethods_processPinchMove$self$$inline_10404_chartEvent$$inline_5116_relPos$$inline_5108_touches$$inline_5104$$[1].pageY), $JSCompiler_StaticMethods_processPinchMove$self$$inline_10404_chartEvent$$inline_5116_relPos$$inline_5108_touches$$inline_5104$$ = this.$_panZoomHandler$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_10404_chartEvent$$inline_5116_relPos$$inline_5108_touches$$inline_5104$$.$_pinchOn$) {
          $chartEvent$$inline_5105_dragHandler$$inline_5115_newPt1$$inline_10407_relPos1$$inline_5109$$ = $JSCompiler_StaticMethods_processPinchMove$self$$inline_10404_chartEvent$$inline_5116_relPos$$inline_5108_touches$$inline_5104$$.$_container$.$stageToLocal$($chartEvent$$inline_5105_dragHandler$$inline_5115_newPt1$$inline_10407_relPos1$$inline_5109$$);
          var $dragHandler$$inline_5107_newPt2$$inline_10408_relPos2$$inline_5110$$ = $JSCompiler_StaticMethods_processPinchMove$self$$inline_10404_chartEvent$$inline_5116_relPos$$inline_5108_touches$$inline_5104$$.$_container$.$stageToLocal$($dragHandler$$inline_5107_newPt2$$inline_10408_relPos2$$inline_5110$$), $deltas$$inline_10409$$ = (0,D.$JSCompiler_StaticMethods__computePinchDeltas$$)($JSCompiler_StaticMethods_processPinchMove$self$$inline_10404_chartEvent$$inline_5116_relPos$$inline_5108_touches$$inline_5104$$, 
          $chartEvent$$inline_5105_dragHandler$$inline_5115_newPt1$$inline_10407_relPos1$$inline_5109$$, $dragHandler$$inline_5107_newPt2$$inline_10408_relPos2$$inline_5110$$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_10404_chartEvent$$inline_5116_relPos$$inline_5108_touches$$inline_5104$$.$_lastPt1$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_10404_chartEvent$$inline_5116_relPos$$inline_5108_touches$$inline_5104$$.$_lastPt2$), $totalDeltas$$inline_10410$$ = (0,D.$JSCompiler_StaticMethods__computePinchDeltas$$)($JSCompiler_StaticMethods_processPinchMove$self$$inline_10404_chartEvent$$inline_5116_relPos$$inline_5108_touches$$inline_5104$$, 
          $chartEvent$$inline_5105_dragHandler$$inline_5115_newPt1$$inline_10407_relPos1$$inline_5109$$, $dragHandler$$inline_5107_newPt2$$inline_10408_relPos2$$inline_5110$$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_10404_chartEvent$$inline_5116_relPos$$inline_5108_touches$$inline_5104$$.$_origPt1$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_10404_chartEvent$$inline_5116_relPos$$inline_5108_touches$$inline_5104$$.$_origPt2$);
          $JSCompiler_StaticMethods_processPinchMove$self$$inline_10404_chartEvent$$inline_5116_relPos$$inline_5108_touches$$inline_5104$$.$_lastPt1$ = $chartEvent$$inline_5105_dragHandler$$inline_5115_newPt1$$inline_10407_relPos1$$inline_5109$$;
          $JSCompiler_StaticMethods_processPinchMove$self$$inline_10404_chartEvent$$inline_5116_relPos$$inline_5108_touches$$inline_5104$$.$_lastPt2$ = $dragHandler$$inline_5107_newPt2$$inline_10408_relPos2$$inline_5110$$;
          $chartEvent$$inline_5105_dragHandler$$inline_5115_newPt1$$inline_10407_relPos1$$inline_5109$$ = new D.$DvtPanZoomEvent$$("dvtPinchMoveEvent", $deltas$$inline_10409$$.$dxMin$, $deltas$$inline_10409$$.$dxMax$, $deltas$$inline_10409$$.$dyMin$, $deltas$$inline_10409$$.$dyMax$, $totalDeltas$$inline_10410$$.$dxMin$, $totalDeltas$$inline_10410$$.$dxMax$, $totalDeltas$$inline_10410$$.$dyMin$, $totalDeltas$$inline_10410$$.$dyMax$)
        }else {
          $chartEvent$$inline_5105_dragHandler$$inline_5115_newPt1$$inline_10407_relPos1$$inline_5109$$ = D.$JSCompiler_alias_NULL$$
        }
      }
    }
    ($chartEvent$$inline_5105_dragHandler$$inline_5115_newPt1$$inline_10407_relPos1$$inline_5109$$ || $dataCursorOn$$inline_5106_relPos$$inline_5114$$) && $event$$365$$.preventDefault();
    $chartEvent$$inline_5105_dragHandler$$inline_5115_newPt1$$inline_10407_relPos1$$inline_5109$$ && (this.$_callback$.call(this.$_callbackObj$, $chartEvent$$inline_5105_dragHandler$$inline_5115_newPt1$$inline_10407_relPos1$$inline_5109$$), this.$_context$.$getTooltipManager$().$hideTooltip$())
  }else {
    $dataCursorOn$$inline_5106_relPos$$inline_5114$$ = this.$_getRelativePosition$($event$$365$$.pageX, $event$$365$$.pageY);
    if($chartEvent$$inline_5105_dragHandler$$inline_5115_newPt1$$inline_10407_relPos1$$inline_5109$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this)) {
      if($JSCompiler_StaticMethods_processPinchMove$self$$inline_10404_chartEvent$$inline_5116_relPos$$inline_5108_touches$$inline_5104$$ = $chartEvent$$inline_5105_dragHandler$$inline_5115_newPt1$$inline_10407_relPos1$$inline_5109$$.$processDragMove$($dataCursorOn$$inline_5106_relPos$$inline_5114$$, $event$$365$$.ctrlKey)) {
        this.$_callback$.call(this.$_callbackObj$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_10404_chartEvent$$inline_5116_relPos$$inline_5108_touches$$inline_5104$$), (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, D.$JSCompiler_alias_FALSE$$)
      }
    }
    $JSCompiler_StaticMethods_processPinchMove$self$$inline_10404_chartEvent$$inline_5116_relPos$$inline_5108_touches$$inline_5104$$ && $event$$365$$.stopPropagation()
  }
};
D.$JSCompiler_prototypeAlias$$.$_onDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onDragEnd$$($axisSpace$$inline_5128_chartEvent$$inline_5127_event$$366$$) {
  if((0,D.$DvtAgent$isTouchDevice$$)()) {
    var $chartEvent1$$inline_5120_relPos$$inline_5125$$ = this.$endDrag$(), $JSCompiler_StaticMethods_processPinchEnd$self$$inline_10412_chartEvent2$$inline_5121_dragHandler$$inline_5126$$;
    if(this.$_panZoomHandler$ && D.$DvtChartEventUtils$$.$isZoomable$(this.$_chart$)) {
      $JSCompiler_StaticMethods_processPinchEnd$self$$inline_10412_chartEvent2$$inline_5121_dragHandler$$inline_5126$$ = this.$_panZoomHandler$;
      if($JSCompiler_StaticMethods_processPinchEnd$self$$inline_10412_chartEvent2$$inline_5121_dragHandler$$inline_5126$$.$_pinchOn$) {
        $JSCompiler_StaticMethods_processPinchEnd$self$$inline_10412_chartEvent2$$inline_5121_dragHandler$$inline_5126$$.$_pinchOn$ = D.$JSCompiler_alias_FALSE$$;
        var $totalDeltas$$inline_10413$$ = (0,D.$JSCompiler_StaticMethods__computePinchDeltas$$)($JSCompiler_StaticMethods_processPinchEnd$self$$inline_10412_chartEvent2$$inline_5121_dragHandler$$inline_5126$$, $JSCompiler_StaticMethods_processPinchEnd$self$$inline_10412_chartEvent2$$inline_5121_dragHandler$$inline_5126$$.$_lastPt1$, $JSCompiler_StaticMethods_processPinchEnd$self$$inline_10412_chartEvent2$$inline_5121_dragHandler$$inline_5126$$.$_lastPt2$, $JSCompiler_StaticMethods_processPinchEnd$self$$inline_10412_chartEvent2$$inline_5121_dragHandler$$inline_5126$$.$_origPt1$, 
        $JSCompiler_StaticMethods_processPinchEnd$self$$inline_10412_chartEvent2$$inline_5121_dragHandler$$inline_5126$$.$_origPt2$);
        $JSCompiler_StaticMethods_processPinchEnd$self$$inline_10412_chartEvent2$$inline_5121_dragHandler$$inline_5126$$.$_lastPt1$ = D.$JSCompiler_alias_NULL$$;
        $JSCompiler_StaticMethods_processPinchEnd$self$$inline_10412_chartEvent2$$inline_5121_dragHandler$$inline_5126$$.$_lastPt2$ = D.$JSCompiler_alias_NULL$$;
        $JSCompiler_StaticMethods_processPinchEnd$self$$inline_10412_chartEvent2$$inline_5121_dragHandler$$inline_5126$$ = new D.$DvtPanZoomEvent$$("dvtPinchEndEvent", 0, 0, 0, 0, $totalDeltas$$inline_10413$$.$dxMin$, $totalDeltas$$inline_10413$$.$dxMax$, $totalDeltas$$inline_10413$$.$dyMin$, $totalDeltas$$inline_10413$$.$dyMax$)
      }else {
        $JSCompiler_StaticMethods_processPinchEnd$self$$inline_10412_chartEvent2$$inline_5121_dragHandler$$inline_5126$$ = D.$JSCompiler_alias_NULL$$
      }
      $JSCompiler_StaticMethods_processPinchEnd$self$$inline_10412_chartEvent2$$inline_5121_dragHandler$$inline_5126$$ && this.$_callback$.call(this.$_callbackObj$, $JSCompiler_StaticMethods_processPinchEnd$self$$inline_10412_chartEvent2$$inline_5121_dragHandler$$inline_5126$$)
    }
    if($chartEvent1$$inline_5120_relPos$$inline_5125$$ || $JSCompiler_StaticMethods_processPinchEnd$self$$inline_10412_chartEvent2$$inline_5121_dragHandler$$inline_5126$$) {
      $axisSpace$$inline_5128_chartEvent$$inline_5127_event$$366$$.preventDefault(), this.$_context$.$getTooltipManager$().$hideTooltip$()
    }
    this.$_stageAbsolutePosition$ = D.$JSCompiler_alias_NULL$$;
    (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, D.$JSCompiler_alias_TRUE$$)
  }else {
    $chartEvent1$$inline_5120_relPos$$inline_5125$$ = this.$_getRelativePosition$($axisSpace$$inline_5128_chartEvent$$inline_5127_event$$366$$.pageX, $axisSpace$$inline_5128_chartEvent$$inline_5127_event$$366$$.pageY);
    if($JSCompiler_StaticMethods_processPinchEnd$self$$inline_10412_chartEvent2$$inline_5121_dragHandler$$inline_5126$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this)) {
      if($axisSpace$$inline_5128_chartEvent$$inline_5127_event$$366$$ = $JSCompiler_StaticMethods_processPinchEnd$self$$inline_10412_chartEvent2$$inline_5121_dragHandler$$inline_5126$$.$processDragEnd$($chartEvent1$$inline_5120_relPos$$inline_5125$$, $axisSpace$$inline_5128_chartEvent$$inline_5127_event$$366$$.ctrlKey)) {
        this.$_callback$.call(this.$_callbackObj$, $axisSpace$$inline_5128_chartEvent$$inline_5127_event$$366$$), (0,D.$JSCompiler_StaticMethods_autoToggleZoomButton$$)(this)
      }
      this.$_chart$.setCursor($JSCompiler_StaticMethods_processPinchEnd$self$$inline_10412_chartEvent2$$inline_5121_dragHandler$$inline_5126$$.getCursor($chartEvent1$$inline_5120_relPos$$inline_5125$$));
      ($axisSpace$$inline_5128_chartEvent$$inline_5127_event$$366$$ = this.$_chart$.$_axisSpace$) && (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, (0,D.$JSCompiler_StaticMethods_containsPoint$$)($axisSpace$$inline_5128_chartEvent$$inline_5127_event$$366$$, $chartEvent1$$inline_5120_relPos$$inline_5125$$.x, $chartEvent1$$inline_5120_relPos$$inline_5125$$.y))
    }
    this.$_stageAbsolutePosition$ = D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$370_relPos$$31$$) {
  D.$DvtChartEventManager$$.$superclass$.$OnMouseMove$.call(this, $event$$370_relPos$$31$$);
  this.$_dataCursorHandler$ && ((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$370_relPos$$31$$) instanceof D.$DvtButton$$ ? (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)(this.$_dataCursorHandler$) : (0,D.$JSCompiler_StaticMethods_processMove$$)(this.$_dataCursorHandler$, $event$$370_relPos$$31$$.pageX, $event$$370_relPos$$31$$.pageY, $event$$370_relPos$$31$$.target));
  var $dragHandler$$3$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this);
  $event$$370_relPos$$31$$ = this.$_getRelativePosition$($event$$370_relPos$$31$$.pageX, $event$$370_relPos$$31$$.pageY);
  $dragHandler$$3$$ && this.$_chart$.setCursor($dragHandler$$3$$.getCursor($event$$370_relPos$$31$$))
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$371_obj$$146$$) {
  D.$DvtChartEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$371_obj$$146$$);
  ($event$$371_obj$$146$$ = this.$GetLogicalObject$($event$$371_obj$$146$$.target)) && this.$_seriesRolloverHandler$ && this.$_seriesRolloverHandler$.$processMouseOver$($event$$371_obj$$146$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$372_obj$$147$$) {
  D.$DvtChartEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$372_obj$$147$$);
  var $relPos$$32$$ = this.$_getRelativePosition$($event$$372_obj$$147$$.pageX, $event$$372_obj$$147$$.pageY), $JSCompiler_StaticMethods_processOut$self$$inline_5134_axisSpace$$1$$ = this.$_chart$.$_axisSpace$;
  $JSCompiler_StaticMethods_processOut$self$$inline_5134_axisSpace$$1$$ && (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, (0,D.$JSCompiler_StaticMethods_containsPoint$$)($JSCompiler_StaticMethods_processOut$self$$inline_5134_axisSpace$$1$$, $relPos$$32$$.x, $relPos$$32$$.y));
  this.$_dataCursorHandler$ && ($JSCompiler_StaticMethods_processOut$self$$inline_5134_axisSpace$$1$$ = this.$_dataCursorHandler$, (0,D.$JSCompiler_StaticMethods_containsPoint$$)($JSCompiler_StaticMethods_processOut$self$$inline_5134_axisSpace$$1$$.$getPlotRect$(), $relPos$$32$$.x, $relPos$$32$$.y) || (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_processOut$self$$inline_5134_axisSpace$$1$$));
  this.$_stageAbsolutePosition$ = D.$JSCompiler_alias_NULL$$;
  ($event$$372_obj$$147$$ = this.$GetLogicalObject$($event$$372_obj$$147$$.target)) && this.$_seriesRolloverHandler$ && this.$_seriesRolloverHandler$.$processMouseOut$($event$$372_obj$$147$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseWheel$ = function $$JSCompiler_prototypeAlias$$$$OnMouseWheel$$($event$$373$$) {
  if(D.$DvtChartEventUtils$$.$isZoomable$(this.$_chart$)) {
    var $delta$$5_delta$$inline_5139$$ = $event$$373$$.wheelDelta != D.$JSCompiler_alias_NULL$$ ? $event$$373$$.wheelDelta : 0, $deltaXMin$$inline_5141_relPos$$33$$ = this.$_getRelativePosition$($event$$373$$.pageX, $event$$373$$.pageY);
    if(this.$_panZoomHandler$) {
      var $JSCompiler_StaticMethods_processMouseWheel$self$$inline_5137_deltaYMax$$inline_5144_panZoomEvent$$;
      $JSCompiler_StaticMethods_processMouseWheel$self$$inline_5137_deltaYMax$$inline_5144_panZoomEvent$$ = this.$_panZoomHandler$;
      var $startPt$$inline_5140$$ = $JSCompiler_StaticMethods_processMouseWheel$self$$inline_5137_deltaYMax$$inline_5144_panZoomEvent$$.$_container$.$stageToLocal$($deltaXMin$$inline_5141_relPos$$33$$);
      if((0,D.$JSCompiler_StaticMethods_containsPoint$$)($JSCompiler_StaticMethods_processMouseWheel$self$$inline_5137_deltaYMax$$inline_5144_panZoomEvent$$.$_bounds$, $startPt$$inline_5140$$.x, $startPt$$inline_5140$$.y)) {
        var $delta$$5_delta$$inline_5139$$ = $delta$$5_delta$$inline_5139$$ * $JSCompiler_StaticMethods_processMouseWheel$self$$inline_5137_deltaYMax$$inline_5144_panZoomEvent$$.$_zoomRate$, $deltaXMin$$inline_5141_relPos$$33$$ = $delta$$5_delta$$inline_5139$$ * ($startPt$$inline_5140$$.x - $JSCompiler_StaticMethods_processMouseWheel$self$$inline_5137_deltaYMax$$inline_5144_panZoomEvent$$.$_bounds$.x), $deltaXMax$$inline_5142$$ = -$delta$$5_delta$$inline_5139$$ * ($JSCompiler_StaticMethods_processMouseWheel$self$$inline_5137_deltaYMax$$inline_5144_panZoomEvent$$.$_bounds$.x + 
        $JSCompiler_StaticMethods_processMouseWheel$self$$inline_5137_deltaYMax$$inline_5144_panZoomEvent$$.$_bounds$.$w$ - $startPt$$inline_5140$$.x), $deltaYMin$$inline_5143$$ = $delta$$5_delta$$inline_5139$$ * ($startPt$$inline_5140$$.y - $JSCompiler_StaticMethods_processMouseWheel$self$$inline_5137_deltaYMax$$inline_5144_panZoomEvent$$.$_bounds$.y);
        $JSCompiler_StaticMethods_processMouseWheel$self$$inline_5137_deltaYMax$$inline_5144_panZoomEvent$$ = -$delta$$5_delta$$inline_5139$$ * ($JSCompiler_StaticMethods_processMouseWheel$self$$inline_5137_deltaYMax$$inline_5144_panZoomEvent$$.$_bounds$.y + $JSCompiler_StaticMethods_processMouseWheel$self$$inline_5137_deltaYMax$$inline_5144_panZoomEvent$$.$_bounds$.$h$ - $startPt$$inline_5140$$.y);
        $JSCompiler_StaticMethods_processMouseWheel$self$$inline_5137_deltaYMax$$inline_5144_panZoomEvent$$ = new D.$DvtPanZoomEvent$$("dvtZoomEvent", $deltaXMin$$inline_5141_relPos$$33$$, $deltaXMax$$inline_5142$$, $deltaYMin$$inline_5143$$, $JSCompiler_StaticMethods_processMouseWheel$self$$inline_5137_deltaYMax$$inline_5144_panZoomEvent$$, $deltaXMin$$inline_5141_relPos$$33$$, $deltaXMax$$inline_5142$$, $deltaYMin$$inline_5143$$, $JSCompiler_StaticMethods_processMouseWheel$self$$inline_5137_deltaYMax$$inline_5144_panZoomEvent$$)
      }else {
        $JSCompiler_StaticMethods_processMouseWheel$self$$inline_5137_deltaYMax$$inline_5144_panZoomEvent$$ = D.$JSCompiler_alias_NULL$$
      }
      $JSCompiler_StaticMethods_processMouseWheel$self$$inline_5137_deltaYMax$$inline_5144_panZoomEvent$$ && ($event$$373$$.preventDefault(), $event$$373$$.stopPropagation(), this.$_callback$.call(this.$_callbackObj$, $JSCompiler_StaticMethods_processMouseWheel$self$$inline_5137_deltaYMax$$inline_5144_panZoomEvent$$), this.$_dataCursorHandler$ && (0,D.$JSCompiler_StaticMethods_processMove$$)(this.$_dataCursorHandler$, $event$$373$$.pageX, $event$$373$$.pageY, $event$$373$$.target))
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$OnClickInternal$ = function $$JSCompiler_prototypeAlias$$$$OnClickInternal$$($event$$374_pos$$38$$) {
  var $obj$$148$$ = this.$GetLogicalObject$($event$$374_pos$$38$$.target);
  $event$$374_pos$$38$$ = this.$_getRelativePosition$($event$$374_pos$$38$$.pageX, $event$$374_pos$$38$$.pageY);
  this.$SeriesFocusHandler$ && this.$SeriesFocusHandler$.$processSeriesFocus$($event$$374_pos$$38$$, $obj$$148$$);
  $obj$$148$$ && $obj$$148$$.$getAction$ && $obj$$148$$.$getAction$() && this.$FireEvent$(new D.$DvtActionEvent$$("action", $obj$$148$$.$getAction$(), $obj$$148$$.getId()))
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverStartInternal$$($event$$375$$) {
  var $dlo$$ = this.$GetLogicalObject$($event$$375$$.target);
  (0,D.$JSCompiler_StaticMethods_setTooltipEnabled$$)(this.$TouchManager$, $event$$375$$.$touch$.identifier, this.$getTooltipsEnabled$($dlo$$));
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverMoveInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverMoveInternal$$($event$$376$$) {
  var $dlo$$1$$ = this.$GetLogicalObject$($event$$376$$.target);
  (0,D.$JSCompiler_StaticMethods_setTooltipEnabled$$)(this.$TouchManager$, $event$$376$$.$touch$.identifier, this.$getTooltipsEnabled$($dlo$$1$$));
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverEndInternal$$($dlo$$2_event$$377$$) {
  this.$_seriesRolloverHandler$ && ($dlo$$2_event$$377$$ = this.$GetLogicalObject$($dlo$$2_event$$377$$.target), this.$_seriesRolloverHandler$.$processMouseOut$($dlo$$2_event$$377$$))
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverOverInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverOverInternal$$($dlo$$3_event$$378$$) {
  this.$_seriesRolloverHandler$ && ($dlo$$3_event$$378$$ = this.$GetLogicalObject$($dlo$$3_event$$378$$.target), this.$_seriesRolloverHandler$.$processMouseOver$($dlo$$3_event$$378$$))
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverOutInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverOutInternal$$($dlo$$4_event$$379$$) {
  this.$_seriesRolloverHandler$ && ($dlo$$4_event$$379$$ = this.$GetLogicalObject$($dlo$$4_event$$379$$.target), this.$_seriesRolloverHandler$.$processMouseOut$($dlo$$4_event$$379$$))
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchClickInternal$$($evt$$52_obj$$149$$) {
  D.$DvtChartEventManager$$.$superclass$.$HandleTouchClickInternal$.call(this, $evt$$52_obj$$149$$);
  ($evt$$52_obj$$149$$ = this.$GetLogicalObject$($evt$$52_obj$$149$$.target)) && $evt$$52_obj$$149$$.$getAction$ && $evt$$52_obj$$149$$.$getAction$() && this.$FireEvent$(new D.$DvtActionEvent$$("action", $evt$$52_obj$$149$$.$getAction$(), $evt$$52_obj$$149$$.getId()))
};
D.$JSCompiler_prototypeAlias$$.$endDrag$ = function $$JSCompiler_prototypeAlias$$$$endDrag$$() {
  var $dragHandler$$6$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this), $chartEvent$$5$$;
  $dragHandler$$6$$ && ($chartEvent$$5$$ = $dragHandler$$6$$.$processDragEnd$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$)) && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$5$$);
  this.$_dataCursorHandler$ && (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)(this.$_dataCursorHandler$);
  $chartEvent$$5$$ && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$5$$);
  return $chartEvent$$5$$
};
D.$JSCompiler_prototypeAlias$$.$zoomBy$ = function $$JSCompiler_prototypeAlias$$$$zoomBy$$($chartEvent$$6_dz$$8$$) {
  this.$_panZoomHandler$ && D.$DvtChartEventUtils$$.$isZoomable$(this.$_chart$) && ($chartEvent$$6_dz$$8$$ = this.$_panZoomHandler$.$zoomBy$($chartEvent$$6_dz$$8$$)) && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$6_dz$$8$$)
};
D.$JSCompiler_prototypeAlias$$.$panBy$ = function $$JSCompiler_prototypeAlias$$$$panBy$$($dx$$23$$, $dy$$23$$) {
  if(this.$_panZoomHandler$ && D.$DvtChartEventUtils$$.$isScrollable$(this.$_chart$)) {
    var $chartEvent$$7$$ = this.$_panZoomHandler$.$panBy$($dx$$23$$, $dy$$23$$);
    $chartEvent$$7$$ && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$7$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$hideTooltip$ = function $$JSCompiler_prototypeAlias$$$$hideTooltip$$() {
  (!this.$_dataCursorHandler$ || !this.$_dataCursorHandler$.$_dataCursorShown$) && D.$DvtChartEventManager$$.$superclass$.$hideTooltip$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$getTooltipsEnabled$ = function $$JSCompiler_prototypeAlias$$$$getTooltipsEnabled$$($logicalObj$$11$$) {
  return this.$_dataCursorHandler$ && ($logicalObj$$11$$ instanceof D.$DvtChartObjPeer$$ || this.$_dataCursorHandler$.$_dataCursorShown$) ? D.$JSCompiler_alias_FALSE$$ : D.$DvtChartEventManager$$.$superclass$.$getTooltipsEnabled$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$cancelMarquee$ = function $$JSCompiler_prototypeAlias$$$$cancelMarquee$$($event$$383$$) {
  "zoom" == this.$_dragMode$ ? this.$_marqueeZoomHandler$.$cancelMarquee$() && $event$$383$$.preventDefault() : "select" == this.$_dragMode$ && this.$_marqueeSelectHandler$ && this.$_marqueeSelectHandler$.$cancelMarquee$() && this.$_chart$.$render$()
};
D.$JSCompiler_StaticMethods_setDragMode$$ = function $$JSCompiler_StaticMethods_setDragMode$$$($JSCompiler_StaticMethods_setDragMode$self$$, $dragMode$$) {
  $JSCompiler_StaticMethods_setDragMode$self$$.$_dragMode$ = $dragMode$$ == D.$JSCompiler_alias_NULL$$ ? (0,D.$DvtAgent$isTouchDevice$$)() ? "tooltip" : D.$DvtChartEventUtils$$.$isScrollable$($JSCompiler_StaticMethods_setDragMode$self$$.$_chart$) ? "pan" : "multiple" == $JSCompiler_StaticMethods_setDragMode$self$$.$_chart$.$getOptions$().selectionMode ? "select" : D.$JSCompiler_alias_NULL$$ : $dragMode$$;
  (0,D.$JSCompiler_StaticMethods_isFullViewport$$)($JSCompiler_StaticMethods_setDragMode$self$$.$_chart$.$xAxis$) && (!$JSCompiler_StaticMethods_setDragMode$self$$.$_chart$.$yAxis$ || (0,D.$JSCompiler_StaticMethods_isFullViewport$$)($JSCompiler_StaticMethods_setDragMode$self$$.$_chart$.$yAxis$)) && (0,D.$JSCompiler_StaticMethods_autoToggleZoomButton$$)($JSCompiler_StaticMethods_setDragMode$self$$)
};
D.$DvtChartEventManager$$.prototype.$onZoomButtonClick$ = function $$DvtChartEventManager$$$$$onZoomButtonClick$$() {
  this.$zoomButton$.$_bToggled$ ? (this.$selectButton$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)(this.$selectButton$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, "zoom")) : (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, D.$JSCompiler_alias_NULL$$)
};
D.$DvtChartEventManager$$.prototype.$onPanButtonClick$ = function $$DvtChartEventManager$$$$$onPanButtonClick$$() {
  this.$panButton$.$_bToggled$ ? (this.$selectButton$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)(this.$selectButton$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, "pan")) : (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, D.$JSCompiler_alias_NULL$$)
};
D.$DvtChartEventManager$$.prototype.$onSelectButtonClick$ = function $$DvtChartEventManager$$$$$onSelectButtonClick$$() {
  this.$selectButton$.$_bToggled$ ? (this.$zoomButton$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)(this.$zoomButton$, D.$JSCompiler_alias_FALSE$$), this.$panButton$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)(this.$panButton$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, "select")) : (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_StaticMethods_setDragButtonsVisible$$ = function $$JSCompiler_StaticMethods_setDragButtonsVisible$$$($JSCompiler_StaticMethods_setDragButtonsVisible$self$$, $visible$$1$$) {
  if($visible$$1$$ && !$JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_dragButtonsVisible$) {
    var $JSCompiler_StaticMethods_showDragButtons$self$$inline_5150$$ = $JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_chart$;
    $JSCompiler_StaticMethods_showDragButtons$self$$inline_5150$$.$dragButtons$ && $JSCompiler_StaticMethods_showDragButtons$self$$inline_5150$$.$dragButtons$.$setVisible$(D.$JSCompiler_alias_TRUE$$);
    $JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_dragButtonsVisible$ = D.$JSCompiler_alias_TRUE$$
  }else {
    !$visible$$1$$ && $JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_dragButtonsVisible$ && ((0,D.$JSCompiler_StaticMethods_hideDragButtons$$)($JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_chart$), $JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_dragButtonsVisible$ = D.$JSCompiler_alias_FALSE$$)
  }
};
D.$JSCompiler_StaticMethods_autoToggleZoomButton$$ = function $$JSCompiler_StaticMethods_autoToggleZoomButton$$$($JSCompiler_StaticMethods_autoToggleZoomButton$self$$) {
  !(0,D.$DvtAgent$isTouchDevice$$)() && $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$zoomButton$ && ((0,D.$JSCompiler_StaticMethods_isFullViewport$$)($JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$_chart$.$xAxis$) && (0,D.$JSCompiler_StaticMethods_isFullViewport$$)($JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$_chart$.$yAxis$) ? "pan" == $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$_dragMode$ && ((0,D.$JSCompiler_StaticMethods_setToggled$$)($JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$zoomButton$, 
  D.$JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$onZoomButtonClick$()) : "zoom" == $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$_dragMode$ && ((0,D.$JSCompiler_StaticMethods_setToggled$$)($JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$zoomButton$, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$onZoomButtonClick$()))
};
D.$DvtChartKeyboardHandler$$ = function $$DvtChartKeyboardHandler$$$($manager$$10$$, $chart$$32$$) {
  this.Init($manager$$10$$, $chart$$32$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtChartKeyboardHandler");
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartKeyboardHandler$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($manager$$11$$, $chart$$33$$) {
  D.$DvtChartKeyboardHandler$$.$superclass$.Init.call(this, $manager$$11$$);
  this.$_chart$ = $chart$$33$$
};
D.$JSCompiler_prototypeAlias$$.$isSelectionEvent$ = function $$JSCompiler_prototypeAlias$$$$isSelectionEvent$$($event$$393$$) {
  return this.$isNavigationEvent$($event$$393$$) && !$event$$393$$.ctrlKey
};
D.$JSCompiler_prototypeAlias$$.$isMultiSelectEvent$ = function $$JSCompiler_prototypeAlias$$$$isMultiSelectEvent$$($event$$394$$) {
  return 32 == $event$$394$$.keyCode && $event$$394$$.ctrlKey
};
D.$JSCompiler_prototypeAlias$$.$processKeyDown$ = function $$JSCompiler_prototypeAlias$$$$processKeyDown$$($event$$395$$) {
  var $currentNavigable$$2_keyCode$$24_navigables$$4$$ = $event$$395$$.keyCode;
  if(9 == $currentNavigable$$2_keyCode$$24_navigables$$4$$) {
    if($currentNavigable$$2_keyCode$$24_navigables$$4$$ = this.$_eventManager$.$getFocus$()) {
      return $event$$395$$.preventDefault(), $currentNavigable$$2_keyCode$$24_navigables$$4$$
    }
    $currentNavigable$$2_keyCode$$24_navigables$$4$$ = D.$DvtChartEventUtils$$.$getKeyboardNavigables$(this.$_chart$);
    if(0 < $currentNavigable$$2_keyCode$$24_navigables$$4$$.length) {
      return $event$$395$$.preventDefault(), this.$getDefaultNavigable$($currentNavigable$$2_keyCode$$24_navigables$$4$$)
    }
  }else {
    27 == $currentNavigable$$2_keyCode$$24_navigables$$4$$ ? this.$_eventManager$.$cancelMarquee$($event$$395$$) : 33 == $currentNavigable$$2_keyCode$$24_navigables$$4$$ ? ($event$$395$$.ctrlKey || $event$$395$$.shiftKey || D.$DvtChartTypeUtils$$.$isBLAC$(this.$_chart$) ? this.$_eventManager$.$panBy$(-0.25, 0) : this.$_eventManager$.$panBy$(0, -0.25), $event$$395$$.preventDefault()) : 34 == $currentNavigable$$2_keyCode$$24_navigables$$4$$ ? ($event$$395$$.ctrlKey || $event$$395$$.shiftKey || D.$DvtChartTypeUtils$$.$isBLAC$(this.$_chart$) ? 
    this.$_eventManager$.$panBy$(0.25, 0) : this.$_eventManager$.$panBy$(0, 0.25), $event$$395$$.preventDefault()) : (0,D.$DvtKeyboardEvent$isEquals$$)($event$$395$$) || (0,D.$DvtKeyboardEvent$isPlus$$)($event$$395$$) ? this.$_eventManager$.$zoomBy$(1.5) : ((0,D.$DvtKeyboardEvent$isMinus$$)($event$$395$$) || (0,D.$DvtKeyboardEvent$isUnderscore$$)($event$$395$$)) && this.$_eventManager$.$zoomBy$(1 / 1.5)
  }
  return D.$DvtChartKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$395$$)
};
D.$JSCompiler_prototypeAlias$$.$getDefaultNavigable$ = function $$JSCompiler_prototypeAlias$$$$getDefaultNavigable$$($navigableItems$$) {
  if(!$navigableItems$$ || 0 >= $navigableItems$$.length) {
    return D.$JSCompiler_alias_NULL$$
  }
  for(var $isPie$$ = D.$DvtChartTypeUtils$$.$isPie$(this.$_chart$), $defaultNavigable$$, $defaultSeries$$, $defaultGroup$$, $navigable$$4$$, $i$$454$$ = 0;$i$$454$$ < $navigableItems$$.length;$i$$454$$++) {
    $navigable$$4$$ = $navigableItems$$[$i$$454$$], !$defaultNavigable$$ || $navigable$$4$$.$getSeriesIndex$() < $defaultSeries$$ ? ($defaultNavigable$$ = $navigable$$4$$, $defaultSeries$$ = $navigable$$4$$.$getSeriesIndex$(), $isPie$$ || ($defaultGroup$$ = $navigable$$4$$.$getGroupIndex$())) : !$isPie$$ && $navigable$$4$$.$getGroupIndex$() < $defaultGroup$$ && ($defaultNavigable$$ = $navigable$$4$$, $defaultSeries$$ = $navigable$$4$$.$getSeriesIndex$(), $defaultGroup$$ = $navigable$$4$$.$getGroupIndex$())
  }
  return $defaultNavigable$$
};
D.$DvtSeriesRolloverHandler$$ = function $$DvtSeriesRolloverHandler$$$($chart$$) {
  this.Init($chart$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtSeriesRolloverHandler$$, D.$DvtObj$$, "DvtSeriesRolloverHandler");
D.$DvtSeriesRolloverHandler$$.prototype.Init = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtSeriesRolloverHandler$$.prototype.$processMouseOver$ = function $$DvtSeriesRolloverHandler$$$$$processMouseOver$$($obj$$125$$) {
  this.$ProcessEvent$($obj$$125$$, D.$JSCompiler_alias_TRUE$$)
};
D.$DvtSeriesRolloverHandler$$.prototype.$processMouseOut$ = function $$DvtSeriesRolloverHandler$$$$$processMouseOut$$($obj$$126$$) {
  this.$ProcessEvent$($obj$$126$$, D.$JSCompiler_alias_FALSE$$)
};
D.$DvtSeriesRolloverHandler$$.prototype.$ProcessEvent$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtChartSeriesRolloverHandler$$ = function $$DvtChartSeriesRolloverHandler$$$($chart$$25$$, $handler$$29$$) {
  this.Init($chart$$25$$, $handler$$29$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartSeriesRolloverHandler$$, D.$DvtSeriesRolloverHandler$$, "DvtChartSeriesRolloverHandler");
D.$DvtChartSeriesRolloverHandler$$.prototype.Init = function $$DvtChartSeriesRolloverHandler$$$$Init$($chart$$26$$, $handler$$30$$) {
  D.$DvtChartSeriesRolloverHandler$$.$superclass$.Init.call(this);
  this.$_chart$ = $chart$$26$$;
  this.$EventHandler$ = $handler$$30$$
};
D.$DvtChartSeriesRolloverHandler$$.prototype.$ProcessEvent$ = function $$DvtChartSeriesRolloverHandler$$$$$ProcessEvent$$($obj$$156$$, $bOver$$11$$) {
  this.$_rolloverHandled$ = D.$JSCompiler_alias_FALSE$$;
  if($obj$$156$$) {
    var $rolloverContainer$$ = this.$_chart$, $eventType$$14$$ = $bOver$$11$$ ? "categoryRollOver" : "categoryRollOut", $categories$$2$$ = $obj$$156$$.$getCategories$ ? $obj$$156$$.$getCategories$() : D.$JSCompiler_alias_NULL$$;
    $categories$$2$$ && 0 < $categories$$2$$.length && (this.$EventHandler$.$FireEvent$(new D.$DvtCategoryRolloverEvent$$($eventType$$14$$, $categories$$2$$), $rolloverContainer$$), this.$_rolloverHandled$ = D.$JSCompiler_alias_TRUE$$)
  }
};
D.$DvtChartObjPeer$$ = function $$DvtChartObjPeer$$$($chart$$15$$, $displayables$$7$$, $seriesIndex$$1$$, $groupIndex$$1$$, $dataPos$$) {
  this.Init($chart$$15$$, $displayables$$7$$, $seriesIndex$$1$$, $groupIndex$$1$$, $dataPos$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartObjPeer$$, D.$DvtObj$$, "DvtChartObjPeer");
D.$DvtChartObjPeer$$.prototype.Init = function $$DvtChartObjPeer$$$$Init$($chart$$16_dataItem$$5_i$$425_index$$136$$, $displayables$$8$$, $seriesIndex$$2$$, $groupIndex$$2$$, $dataPos$$1_seriesItem$$) {
  this.$_chart$ = $chart$$16_dataItem$$5_i$$425_index$$136$$;
  this.$_displayables$ = $displayables$$8$$;
  this.$_group$ = this.$_series$ = D.$JSCompiler_alias_NULL$$;
  this.$_dataPos$ = $dataPos$$1_seriesItem$$;
  this.$_bundle$ = $chart$$16_dataItem$$5_i$$425_index$$136$$.$getBundle$();
  this.$_seriesIndex$ = (0,window.isNaN)($seriesIndex$$2$$) ? -1 : $seriesIndex$$2$$;
  0 <= this.$_seriesIndex$ && (this.$_series$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$16_dataItem$$5_i$$425_index$$136$$, this.$_seriesIndex$));
  this.$_groupIndex$ = (0,window.isNaN)($groupIndex$$2$$) ? -1 : $groupIndex$$2$$;
  0 <= this.$_groupIndex$ && (this.$_group$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$16_dataItem$$5_i$$425_index$$136$$, this.$_groupIndex$));
  if($dataPos$$1_seriesItem$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$16_dataItem$$5_i$$425_index$$136$$, $seriesIndex$$2$$)) {
    this.$_action$ = $dataPos$$1_seriesItem$$.action, this.$_stampId$ = $dataPos$$1_seriesItem$$._id
  }
  this.$_categories$ = this.$_series$ != D.$JSCompiler_alias_NULL$$ ? [this.$_series$] : [];
  if($chart$$16_dataItem$$5_i$$425_index$$136$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$16_dataItem$$5_i$$425_index$$136$$, $seriesIndex$$2$$, $groupIndex$$2$$)) {
    $chart$$16_dataItem$$5_i$$425_index$$136$$.categories && (this.$_categories$ = this.$_categories$.concat($chart$$16_dataItem$$5_i$$425_index$$136$$.categories)), this.$_dataItemId$ = $chart$$16_dataItem$$5_i$$425_index$$136$$.id, this.$_action$ = $chart$$16_dataItem$$5_i$$425_index$$136$$.action, this.$_stampId$ = $chart$$16_dataItem$$5_i$$425_index$$136$$._id
  }
  if(this.$_action$) {
    for($chart$$16_dataItem$$5_i$$425_index$$136$$ = 0;$chart$$16_dataItem$$5_i$$425_index$$136$$ < this.$_displayables$.length;$chart$$16_dataItem$$5_i$$425_index$$136$$++) {
      this.$_displayables$[$chart$$16_dataItem$$5_i$$425_index$$136$$].setCursor("pointer")
    }
  }
  this.$_isSelected$ = D.$JSCompiler_alias_FALSE$$;
  for($chart$$16_dataItem$$5_i$$425_index$$136$$ = 0;$chart$$16_dataItem$$5_i$$425_index$$136$$ < $displayables$$8$$.length;$chart$$16_dataItem$$5_i$$425_index$$136$$++) {
    $displayables$$8$$[$chart$$16_dataItem$$5_i$$425_index$$136$$].$setAriaRole$("img"), this.$_updateAriaLabel$($displayables$$8$$[$chart$$16_dataItem$$5_i$$425_index$$136$$])
  }
};
D.$DvtChartObjPeer$associate$$ = function $$DvtChartObjPeer$associate$$$($displayable$$34$$, $chart$$17$$, $identObj$$1_seriesIndex$$3$$, $groupIndex$$3$$, $dataPos$$2$$) {
  $displayable$$34$$ && ($identObj$$1_seriesIndex$$3$$ = new D.$DvtChartObjPeer$$($chart$$17$$, [$displayable$$34$$], $identObj$$1_seriesIndex$$3$$, $groupIndex$$3$$, $dataPos$$2$$), $chart$$17$$.$registerObject$($identObj$$1_seriesIndex$$3$$), $chart$$17$$.$getEventManager$().$associate$($displayable$$34$$, $identObj$$1_seriesIndex$$3$$))
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartObjPeer$$.prototype;
D.$JSCompiler_prototypeAlias$$.getId = function $$JSCompiler_prototypeAlias$$$getId$() {
  return this.$_series$ != D.$JSCompiler_alias_NULL$$ && this.$_group$ != D.$JSCompiler_alias_NULL$$ ? new D.$DvtChartDataItem$$(this.$_dataItemId$, this.$_series$, this.$_group$) : this.$_series$ != D.$JSCompiler_alias_NULL$$ ? this.$_series$ : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getSeries$ = (0,D.$JSCompiler_get$$)("$_series$");
D.$JSCompiler_prototypeAlias$$.$getSeriesIndex$ = (0,D.$JSCompiler_get$$)("$_seriesIndex$");
D.$JSCompiler_prototypeAlias$$.$getGroup$ = (0,D.$JSCompiler_get$$)("$_group$");
D.$JSCompiler_prototypeAlias$$.$getGroupIndex$ = (0,D.$JSCompiler_get$$)("$_groupIndex$");
D.$JSCompiler_prototypeAlias$$.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$JSCompiler_prototypeAlias$$.$getChart$ = (0,D.$JSCompiler_get$$)("$_chart$");
D.$JSCompiler_prototypeAlias$$.$getSeriesType$ = function $$JSCompiler_prototypeAlias$$$$getSeriesType$$() {
  return D.$DvtChartStyleUtils$$.$getSeriesType$(this.$_chart$, this.$_seriesIndex$)
};
D.$JSCompiler_prototypeAlias$$.$getSeriesItem$ = function $$JSCompiler_prototypeAlias$$$$getSeriesItem$$() {
  return D.$DvtChartDataUtils$$.$getSeriesItem$(this.$_chart$, this.$_seriesIndex$)
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$($target$$65$$) {
  return D.$DvtChartTooltipUtils$$.$getDatatip$($target$$65$$, this.$_chart$, this.$_seriesIndex$, this.$_groupIndex$)
};
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return D.$DvtChartTooltipUtils$$.$getDatatipColor$(this.$_chart$, this.$_seriesIndex$, this.$_groupIndex$)
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$_chart$.$isSelectionSupported$() && this.$_series$ != D.$JSCompiler_alias_NULL$$ && this.$_group$ != D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_isSelected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSelected$$) {
  this.$_isSelected$ = $bSelected$$;
  for(var $i$$426$$ = 0;$i$$426$$ < this.$_displayables$.length;$i$$426$$++) {
    this.$_displayables$[$i$$426$$].$setSelected$ && (this.$_displayables$[$i$$426$$].$setSelected$($bSelected$$), this.$_updateAriaLabel$(this.$_displayables$[$i$$426$$]))
  }
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  for(var $i$$427$$ = 0;$i$$427$$ < this.$_displayables$.length;$i$$427$$++) {
    this.$_displayables$[$i$$427$$].$showHoverEffect$ && this.$_displayables$[$i$$427$$].$showHoverEffect$()
  }
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  for(var $i$$428$$ = 0;$i$$428$$ < this.$_displayables$.length;$i$$428$$++) {
    this.$_displayables$[$i$$428$$].$hideHoverEffect$ && this.$_displayables$[$i$$428$$].$hideHoverEffect$()
  }
};
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = function $$JSCompiler_prototypeAlias$$$$getShowPopupBehaviors$$() {
  return this.$_chart$.$getShowPopupBehaviors$(this.$_stampId$)
};
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = (0,D.$JSCompiler_get$$)("$_displayables$");
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$4$$ = [];
  this.$isSelectable$() && $states$$4$$.push((0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$_bundle$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$getDatatip$(), $states$$4$$, this.$_bundle$)
};
D.$JSCompiler_prototypeAlias$$.$_updateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$_updateAriaLabel$$($displayable$$35$$) {
  (0,D.$DvtAgent$deferAriaCreation$$)() || (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($displayable$$35$$, "label", this.$getAriaLabel$())
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = (0,D.$JSCompiler_get$$)("$_categories$");
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($chart$$inline_5193_event$$387$$) {
  var $chart$$18_keyCode$$22_seriesIndex$$inline_10436_seriesIndex$$inline_5195$$, $groupIndex$$inline_10437_next$$6_nextGroupIndex$$inline_5199_nextObj$$inline_5206$$;
  $chart$$18_keyCode$$22_seriesIndex$$inline_10436_seriesIndex$$inline_5195$$ = $chart$$inline_5193_event$$387$$.keyCode;
  if($chart$$inline_5193_event$$387$$.type == D.$DvtMouseEvent$CLICK$$ || 32 == $chart$$18_keyCode$$22_seriesIndex$$inline_10436_seriesIndex$$inline_5195$$ && $chart$$inline_5193_event$$387$$.ctrlKey) {
    return this
  }
  $chart$$18_keyCode$$22_seriesIndex$$inline_10436_seriesIndex$$inline_5195$$ = this.$_chart$;
  for(var $chartObjs_groupIndex$$inline_5196$$ = $chart$$18_keyCode$$22_seriesIndex$$inline_10436_seriesIndex$$inline_5195$$.$getObjects$(), $currentValue$$inline_10419_keyCode$$inline_5192_navigables$$3_nextValue$$inline_10430$$ = [], $groupCount$$inline_5197_i$$429_nextSeriesIndex$$inline_10431_nextValue$$inline_10420$$ = 0;$groupCount$$inline_5197_i$$429_nextSeriesIndex$$inline_10431_nextValue$$inline_10420$$ < $chartObjs_groupIndex$$inline_5196$$.length;$groupCount$$inline_5197_i$$429_nextSeriesIndex$$inline_10431_nextValue$$inline_10420$$++) {
    (0,D.$JSCompiler_StaticMethods_isNavigable$$)($chartObjs_groupIndex$$inline_5196$$[$groupCount$$inline_5197_i$$429_nextSeriesIndex$$inline_10431_nextValue$$inline_10420$$]) && $currentValue$$inline_10419_keyCode$$inline_5192_navigables$$3_nextValue$$inline_10430$$.push($chartObjs_groupIndex$$inline_5196$$[$groupCount$$inline_5197_i$$429_nextSeriesIndex$$inline_10431_nextValue$$inline_10420$$])
  }
  if(D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$18_keyCode$$22_seriesIndex$$inline_10436_seriesIndex$$inline_5195$$)) {
    $groupIndex$$inline_10437_next$$6_nextGroupIndex$$inline_5199_nextObj$$inline_5206$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)(this, $chart$$inline_5193_event$$387$$, $currentValue$$inline_10419_keyCode$$inline_5192_navigables$$3_nextValue$$inline_10430$$)
  }else {
    if(D.$DvtChartTypeUtils$$.$isLineArea$($chart$$18_keyCode$$22_seriesIndex$$inline_10436_seriesIndex$$inline_5195$$) || D.$DvtChartTypeUtils$$.$isStacked$($chart$$18_keyCode$$22_seriesIndex$$inline_10436_seriesIndex$$inline_5195$$)) {
      $currentValue$$inline_10419_keyCode$$inline_5192_navigables$$3_nextValue$$inline_10430$$ = $chart$$inline_5193_event$$387$$.keyCode;
      $chart$$inline_5193_event$$387$$ = this.$_chart$;
      var $context$$inline_5194_isRTL$$inline_5202_itemValue$$inline_10423$$ = $chart$$inline_5193_event$$387$$.$_context$;
      $chart$$18_keyCode$$22_seriesIndex$$inline_10436_seriesIndex$$inline_5195$$ = this.$getSeriesIndex$();
      var $chartObjs_groupIndex$$inline_5196$$ = this.$getGroupIndex$(), $groupCount$$inline_5197_i$$429_nextSeriesIndex$$inline_10431_nextValue$$inline_10420$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$inline_5193_event$$387$$), $currentValue$$inline_10429_nextSeriesIndex$$inline_5198_seriesCount$$inline_10418$$, $i$$inline_10432_isHoriz$$inline_5200_nextSeriesIndex$$inline_10421_seriesCount$$inline_10428$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$inline_5193_event$$387$$), $i$$inline_10422_isPolar$$inline_5201_itemValue$$inline_10433$$ = 
      D.$DvtChartTypeUtils$$.$isPolar$($chart$$inline_5193_event$$387$$), $context$$inline_5194_isRTL$$inline_5202_itemValue$$inline_10423$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$inline_5194_isRTL$$inline_5202_itemValue$$inline_10423$$), $isDown$$inline_5203$$ = $i$$inline_10432_isHoriz$$inline_5200_nextSeriesIndex$$inline_10421_seriesCount$$inline_10428$$ ? $context$$inline_5194_isRTL$$inline_5202_itemValue$$inline_10423$$ ? 39 == $currentValue$$inline_10419_keyCode$$inline_5192_navigables$$3_nextValue$$inline_10430$$ : 
      37 == $currentValue$$inline_10419_keyCode$$inline_5192_navigables$$3_nextValue$$inline_10430$$ : 40 == $currentValue$$inline_10419_keyCode$$inline_5192_navigables$$3_nextValue$$inline_10430$$, $isLeft$$inline_5204$$ = $i$$inline_10432_isHoriz$$inline_5200_nextSeriesIndex$$inline_10421_seriesCount$$inline_10428$$ ? 38 == $currentValue$$inline_10419_keyCode$$inline_5192_navigables$$3_nextValue$$inline_10430$$ : $context$$inline_5194_isRTL$$inline_5202_itemValue$$inline_10423$$ ? 39 == $currentValue$$inline_10419_keyCode$$inline_5192_navigables$$3_nextValue$$inline_10430$$ : 
      37 == $currentValue$$inline_10419_keyCode$$inline_5192_navigables$$3_nextValue$$inline_10430$$, $isRight$$inline_5205$$ = $i$$inline_10432_isHoriz$$inline_5200_nextSeriesIndex$$inline_10421_seriesCount$$inline_10428$$ ? 40 == $currentValue$$inline_10419_keyCode$$inline_5192_navigables$$3_nextValue$$inline_10430$$ : $context$$inline_5194_isRTL$$inline_5202_itemValue$$inline_10423$$ ? 37 == $currentValue$$inline_10419_keyCode$$inline_5192_navigables$$3_nextValue$$inline_10430$$ : 39 == $currentValue$$inline_10419_keyCode$$inline_5192_navigables$$3_nextValue$$inline_10430$$;
      if($i$$inline_10432_isHoriz$$inline_5200_nextSeriesIndex$$inline_10421_seriesCount$$inline_10428$$ ? $context$$inline_5194_isRTL$$inline_5202_itemValue$$inline_10423$$ ? 37 == $currentValue$$inline_10419_keyCode$$inline_5192_navigables$$3_nextValue$$inline_10430$$ : 39 == $currentValue$$inline_10419_keyCode$$inline_5192_navigables$$3_nextValue$$inline_10430$$ : 38 == $currentValue$$inline_10419_keyCode$$inline_5192_navigables$$3_nextValue$$inline_10430$$) {
        $groupIndex$$inline_10437_next$$6_nextGroupIndex$$inline_5199_nextObj$$inline_5206$$ = $chartObjs_groupIndex$$inline_5196$$;
        $currentValue$$inline_10429_nextSeriesIndex$$inline_5198_seriesCount$$inline_10418$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$inline_5193_event$$387$$);
        $currentValue$$inline_10419_keyCode$$inline_5192_navigables$$3_nextValue$$inline_10430$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$inline_5193_event$$387$$, $chart$$18_keyCode$$22_seriesIndex$$inline_10436_seriesIndex$$inline_5195$$, $chartObjs_groupIndex$$inline_5196$$);
        $i$$inline_10432_isHoriz$$inline_5200_nextSeriesIndex$$inline_10421_seriesCount$$inline_10428$$ = $groupCount$$inline_5197_i$$429_nextSeriesIndex$$inline_10431_nextValue$$inline_10420$$ = D.$JSCompiler_alias_NULL$$;
        for($i$$inline_10422_isPolar$$inline_5201_itemValue$$inline_10433$$ = 0;$i$$inline_10422_isPolar$$inline_5201_itemValue$$inline_10433$$ < $currentValue$$inline_10429_nextSeriesIndex$$inline_5198_seriesCount$$inline_10418$$;$i$$inline_10422_isPolar$$inline_5201_itemValue$$inline_10433$$++) {
          if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$inline_5193_event$$387$$, $i$$inline_10422_isPolar$$inline_5201_itemValue$$inline_10433$$) && ($context$$inline_5194_isRTL$$inline_5202_itemValue$$inline_10423$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$inline_5193_event$$387$$, $i$$inline_10422_isPolar$$inline_5201_itemValue$$inline_10433$$, $chartObjs_groupIndex$$inline_5196$$), $context$$inline_5194_isRTL$$inline_5202_itemValue$$inline_10423$$ > $currentValue$$inline_10419_keyCode$$inline_5192_navigables$$3_nextValue$$inline_10430$$ || 
          $context$$inline_5194_isRTL$$inline_5202_itemValue$$inline_10423$$ == $currentValue$$inline_10419_keyCode$$inline_5192_navigables$$3_nextValue$$inline_10430$$ && $i$$inline_10422_isPolar$$inline_5201_itemValue$$inline_10433$$ > $chart$$18_keyCode$$22_seriesIndex$$inline_10436_seriesIndex$$inline_5195$$)) {
            if($groupCount$$inline_5197_i$$429_nextSeriesIndex$$inline_10431_nextValue$$inline_10420$$ !== D.$JSCompiler_alias_NULL$$ && $context$$inline_5194_isRTL$$inline_5202_itemValue$$inline_10423$$ < $groupCount$$inline_5197_i$$429_nextSeriesIndex$$inline_10431_nextValue$$inline_10420$$ || $groupCount$$inline_5197_i$$429_nextSeriesIndex$$inline_10431_nextValue$$inline_10420$$ == D.$JSCompiler_alias_NULL$$) {
              $groupCount$$inline_5197_i$$429_nextSeriesIndex$$inline_10431_nextValue$$inline_10420$$ = $context$$inline_5194_isRTL$$inline_5202_itemValue$$inline_10423$$, $i$$inline_10432_isHoriz$$inline_5200_nextSeriesIndex$$inline_10421_seriesCount$$inline_10428$$ = $i$$inline_10422_isPolar$$inline_5201_itemValue$$inline_10433$$
            }
          }
        }
        $currentValue$$inline_10429_nextSeriesIndex$$inline_5198_seriesCount$$inline_10418$$ = $i$$inline_10432_isHoriz$$inline_5200_nextSeriesIndex$$inline_10421_seriesCount$$inline_10428$$
      }else {
        if($isDown$$inline_5203$$) {
          $groupIndex$$inline_10437_next$$6_nextGroupIndex$$inline_5199_nextObj$$inline_5206$$ = $chartObjs_groupIndex$$inline_5196$$;
          $i$$inline_10432_isHoriz$$inline_5200_nextSeriesIndex$$inline_10421_seriesCount$$inline_10428$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$inline_5193_event$$387$$);
          $currentValue$$inline_10429_nextSeriesIndex$$inline_5198_seriesCount$$inline_10418$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$inline_5193_event$$387$$, $chart$$18_keyCode$$22_seriesIndex$$inline_10436_seriesIndex$$inline_5195$$, $chartObjs_groupIndex$$inline_5196$$);
          $groupCount$$inline_5197_i$$429_nextSeriesIndex$$inline_10431_nextValue$$inline_10420$$ = $currentValue$$inline_10419_keyCode$$inline_5192_navigables$$3_nextValue$$inline_10430$$ = D.$JSCompiler_alias_NULL$$;
          for($i$$inline_10432_isHoriz$$inline_5200_nextSeriesIndex$$inline_10421_seriesCount$$inline_10428$$ -= 1;0 <= $i$$inline_10432_isHoriz$$inline_5200_nextSeriesIndex$$inline_10421_seriesCount$$inline_10428$$;$i$$inline_10432_isHoriz$$inline_5200_nextSeriesIndex$$inline_10421_seriesCount$$inline_10428$$--) {
            if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$inline_5193_event$$387$$, $i$$inline_10432_isHoriz$$inline_5200_nextSeriesIndex$$inline_10421_seriesCount$$inline_10428$$) && ($i$$inline_10422_isPolar$$inline_5201_itemValue$$inline_10433$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$inline_5193_event$$387$$, $i$$inline_10432_isHoriz$$inline_5200_nextSeriesIndex$$inline_10421_seriesCount$$inline_10428$$, $chartObjs_groupIndex$$inline_5196$$), $i$$inline_10422_isPolar$$inline_5201_itemValue$$inline_10433$$ < 
            $currentValue$$inline_10429_nextSeriesIndex$$inline_5198_seriesCount$$inline_10418$$ || $i$$inline_10422_isPolar$$inline_5201_itemValue$$inline_10433$$ == $currentValue$$inline_10429_nextSeriesIndex$$inline_5198_seriesCount$$inline_10418$$ && $i$$inline_10432_isHoriz$$inline_5200_nextSeriesIndex$$inline_10421_seriesCount$$inline_10428$$ < $chart$$18_keyCode$$22_seriesIndex$$inline_10436_seriesIndex$$inline_5195$$)) {
              if($currentValue$$inline_10419_keyCode$$inline_5192_navigables$$3_nextValue$$inline_10430$$ !== D.$JSCompiler_alias_NULL$$ && $i$$inline_10422_isPolar$$inline_5201_itemValue$$inline_10433$$ > $currentValue$$inline_10419_keyCode$$inline_5192_navigables$$3_nextValue$$inline_10430$$ || $currentValue$$inline_10419_keyCode$$inline_5192_navigables$$3_nextValue$$inline_10430$$ == D.$JSCompiler_alias_NULL$$) {
                $currentValue$$inline_10419_keyCode$$inline_5192_navigables$$3_nextValue$$inline_10430$$ = $i$$inline_10422_isPolar$$inline_5201_itemValue$$inline_10433$$, $groupCount$$inline_5197_i$$429_nextSeriesIndex$$inline_10431_nextValue$$inline_10420$$ = $i$$inline_10432_isHoriz$$inline_5200_nextSeriesIndex$$inline_10421_seriesCount$$inline_10428$$
              }
            }
          }
          $currentValue$$inline_10429_nextSeriesIndex$$inline_5198_seriesCount$$inline_10418$$ = $groupCount$$inline_5197_i$$429_nextSeriesIndex$$inline_10431_nextValue$$inline_10420$$
        }else {
          $isRight$$inline_5205$$ ? ($currentValue$$inline_10429_nextSeriesIndex$$inline_5198_seriesCount$$inline_10418$$ = $chart$$18_keyCode$$22_seriesIndex$$inline_10436_seriesIndex$$inline_5195$$, $groupIndex$$inline_10437_next$$6_nextGroupIndex$$inline_5199_nextObj$$inline_5206$$ = $chartObjs_groupIndex$$inline_5196$$ + 1, $i$$inline_10422_isPolar$$inline_5201_itemValue$$inline_10433$$ && $groupIndex$$inline_10437_next$$6_nextGroupIndex$$inline_5199_nextObj$$inline_5206$$ >= $groupCount$$inline_5197_i$$429_nextSeriesIndex$$inline_10431_nextValue$$inline_10420$$ && 
          ($groupIndex$$inline_10437_next$$6_nextGroupIndex$$inline_5199_nextObj$$inline_5206$$ = 0)) : $isLeft$$inline_5204$$ && ($currentValue$$inline_10429_nextSeriesIndex$$inline_5198_seriesCount$$inline_10418$$ = $chart$$18_keyCode$$22_seriesIndex$$inline_10436_seriesIndex$$inline_5195$$, $groupIndex$$inline_10437_next$$6_nextGroupIndex$$inline_5199_nextObj$$inline_5206$$ = $chartObjs_groupIndex$$inline_5196$$ - 1, $i$$inline_10422_isPolar$$inline_5201_itemValue$$inline_10433$$ && 0 > $groupIndex$$inline_10437_next$$6_nextGroupIndex$$inline_5199_nextObj$$inline_5206$$ && 
          ($groupIndex$$inline_10437_next$$6_nextGroupIndex$$inline_5199_nextObj$$inline_5206$$ = $groupCount$$inline_5197_i$$429_nextSeriesIndex$$inline_10431_nextValue$$inline_10420$$ - 1))
        }
      }
      a: {
        $chart$$18_keyCode$$22_seriesIndex$$inline_10436_seriesIndex$$inline_5195$$ = $currentValue$$inline_10429_nextSeriesIndex$$inline_5198_seriesCount$$inline_10418$$;
        for(window.i = 0;window.i < $chart$$inline_5193_event$$387$$.$_peers$.length;window.i++) {
          if($chart$$inline_5193_event$$387$$.$_peers$[window.i].$getSeriesIndex$() == $chart$$18_keyCode$$22_seriesIndex$$inline_10436_seriesIndex$$inline_5195$$ && $chart$$inline_5193_event$$387$$.$_peers$[window.i].$getGroupIndex$() == $groupIndex$$inline_10437_next$$6_nextGroupIndex$$inline_5199_nextObj$$inline_5206$$) {
            $groupIndex$$inline_10437_next$$6_nextGroupIndex$$inline_5199_nextObj$$inline_5206$$ = $chart$$inline_5193_event$$387$$.$_peers$[window.i];
            break a
          }
        }
        $groupIndex$$inline_10437_next$$6_nextGroupIndex$$inline_5199_nextObj$$inline_5206$$ = D.$JSCompiler_alias_NULL$$
      }
      $groupIndex$$inline_10437_next$$6_nextGroupIndex$$inline_5199_nextObj$$inline_5206$$ = $groupIndex$$inline_10437_next$$6_nextGroupIndex$$inline_5199_nextObj$$inline_5206$$ && (0,D.$JSCompiler_StaticMethods_isNavigable$$)($groupIndex$$inline_10437_next$$6_nextGroupIndex$$inline_5199_nextObj$$inline_5206$$) ? $groupIndex$$inline_10437_next$$6_nextGroupIndex$$inline_5199_nextObj$$inline_5206$$ : this
    }else {
      if(D.$DvtChartTypeUtils$$.$isFunnel$($chart$$18_keyCode$$22_seriesIndex$$inline_10436_seriesIndex$$inline_5195$$) && (38 == $chart$$inline_5193_event$$387$$.keyCode || 40 == $chart$$inline_5193_event$$387$$.keyCode)) {
        $chart$$inline_5193_event$$387$$.keyCode -= 1
      }
      $groupIndex$$inline_10437_next$$6_nextGroupIndex$$inline_5199_nextObj$$inline_5206$$ = (0,D.$DvtKeyboardHandler$getNextNavigable$$)(this, $chart$$inline_5193_event$$387$$, $currentValue$$inline_10419_keyCode$$inline_5192_navigables$$3_nextValue$$inline_10430$$)
    }
  }
  return $groupIndex$$inline_10437_next$$6_nextGroupIndex$$inline_5199_nextObj$$inline_5206$$
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$7$$) {
  return this.$_displayables$[0] ? this.$_displayables$[0].$getDimensions$($targetCoordinateSpace$$7$$) : new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_displayables$[0] ? this.$_displayables$[0].$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  (0,D.$JSCompiler_StaticMethods_isNavigable$$)(this) && (this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$, this.$showHoverEffect$())
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  (0,D.$JSCompiler_StaticMethods_isNavigable$$)(this) && (this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$, this.$hideHoverEffect$())
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_StaticMethods_isNavigable$$ = function $$JSCompiler_StaticMethods_isNavigable$$$($JSCompiler_StaticMethods_isNavigable$self$$) {
  return-1 != $JSCompiler_StaticMethods_isNavigable$self$$.$getGroupIndex$() && -1 != $JSCompiler_StaticMethods_isNavigable$self$$.$getSeriesIndex$()
};
D.$DvtChartDataItem$$ = function $$DvtChartDataItem$$$($id$$110$$, $series$$11$$, $group$$5$$) {
  this.Init($id$$110$$, $series$$11$$, $group$$5$$)
};
(0,D.$goog$exportSymbol$$)("DvtChartDataItem", D.$DvtChartDataItem$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChartDataItem$$, D.$DvtObj$$, "DvtChartDataItem");
D.$DvtChartDataItem$$.prototype.Init = function $$DvtChartDataItem$$$$Init$($id$$111$$, $series$$12$$, $group$$6$$) {
  this.$_id$ = $id$$111$$;
  this.$_series$ = $series$$12$$;
  this.$_group$ = $group$$6$$
};
D.$DvtChartDataItem$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtChartDataItem$$.prototype.getId = D.$DvtChartDataItem$$.prototype.getId;
D.$DvtChartDataItem$$.prototype.$getSeries$ = (0,D.$JSCompiler_get$$)("$_series$");
D.$DvtChartDataItem$$.prototype.getSeries = D.$DvtChartDataItem$$.prototype.$getSeries$;
D.$DvtChartDataItem$$.prototype.$getGroup$ = (0,D.$JSCompiler_get$$)("$_group$");
D.$DvtChartDataItem$$.prototype.getGroup = D.$DvtChartDataItem$$.prototype.$getGroup$;
D.$DvtChartDataItem$$.prototype.$equals$ = function $$DvtChartDataItem$$$$$equals$$($dataItem$$4$$) {
  return $dataItem$$4$$ instanceof D.$DvtChartDataItem$$ ? this.$_group$ === $dataItem$$4$$.$getGroup$() && this.$_series$ === $dataItem$$4$$.$getSeries$() : D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartDefaults$$ = function $$DvtChartDefaults$$$() {
  this.Init({skyros:D.$DvtChartDefaults$VERSION_1$$, alta:D.$DvtChartDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtChartDefaults");
D.$DvtChartDefaults$SKIN_ALTA$$ = {skin:"alta", title:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; color: #252525;")}, subtitle:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #252525;")}, footnote:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px;")}, styleDefaults:{seriesEffect:"color", colors:D.$DvtCSSStyle$COLORS_ALTA$$, sliceLabelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;"), 
dataLabelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}};
D.$DvtChartDefaults$VERSION_1$$ = {skin:"skyros", emptyText:D.$JSCompiler_alias_NULL$$, type:"bar", stack:"off", orientation:"vertical", polarGridShape:"circle", selectionMode:"none", hideAndShowBehavior:"none", zoomAndScroll:"off", hoverBehavior:"none", sorting:"off", otherThreshold:0, animationOnDataChange:"none", animationOnDisplay:"none", timeAxisType:"disabled", __sparkBarSpacing:"subpixel", __spark:D.$JSCompiler_alias_FALSE$$, dataCursor:"auto", dataCursorBehavior:"auto", title:{style:new D.$DvtCSSStyle$$("font-size: 12px; color: #003d5b; font-weight: bold"), 
halign:"start"}, subtitle:{style:new D.$DvtCSSStyle$$("font-size: 12px; color: #003d5b;")}, footnote:{style:new D.$DvtCSSStyle$$("font-size: 10px; color: #333333;"), halign:"start"}, titleSeparator:{upperColor:"#74779A", lowerColor:"#FFFFFF", rendered:"off"}, xAxis:{baselineScaling:"zero", tickLabel:{rendered:"on"}, majorTick:{rendered:"auto"}, minorTick:{rendered:"off"}, axisLine:{rendered:"on"}, maxSize:0.33, layout:{gapRatio:1}}, yAxis:{baselineScaling:"zero", tickLabel:{rendered:"on"}, majorTick:{rendered:"auto"}, 
minorTick:{rendered:"off"}, axisLine:{rendered:"on"}, maxSize:0.33, layout:{gapRatio:1}}, y2Axis:{baselineScaling:"zero", tickLabel:{rendered:"on"}, majorTick:{rendered:"auto"}, minorTick:{rendered:"off"}, axisLine:{rendered:"on"}, maxSize:0.33, layout:{gapRatio:1}, alignTickMarks:"on"}, plotArea:{backgroundColor:D.$JSCompiler_alias_NULL$$}, legend:{position:"auto", rendered:"on", maxSize:0.3, layout:{gapRatio:1}}, overview:{rendered:"off"}, styleDefaults:{colors:D.$DvtCSSStyle$COLORS_SKYROS$$, patterns:"smallDiagonalRight smallChecker smallDiagonalLeft smallTriangle smallCrosshatch smallDiamond largeDiagonalRight largeChecker largeDiagonalLeft largeTriangle largeCrosshatch largeDiamond".split(" "), 
shapes:"square circle diamond plus triangleDown triangleUp".split(" "), seriesEffect:"gradient", threeDEffect:"off", selectionEffect:"highlight", groupTooltipType:"auto", seriesTooltipType:"auto", valueTooltipType:"auto", animationDuration:1E3, animationIndicators:"all", animationUpColor:"#0099FF", animationDownColor:"#FF3300", lineStyle:"solid", lineType:"auto", markerDisplayed:"auto", markerColor:D.$JSCompiler_alias_NULL$$, markerShape:"auto", markerSize:8, marqueeColor:"rgba(255,255,255,0.5)", 
marqueeBorderColor:"rgba(0,0,0,0.2)", pieFeelerColor:"#BAC5D6", selectedInnerColor:"#ffffff", selectedOuterColor:"#5a5a5a", sliceLabelPosition:"auto", sliceLabelStyle:new D.$DvtCSSStyle$$("font-size: 11px;"), sliceLabelType:"percent", otherColor:"#4b4b4b", dataLabelStyle:new D.$DvtCSSStyle$$("font-size: 11px;"), dataLabelPosition:"auto", x1Format:{}, y1Format:{}, y2Format:{}, zFormat:{}, _defaultSliceLabelColor:"#333333", _scrollbarHeight:3, _scrollbarTrackColor:"#F0F0F0", _scrollbarHandleColor:"#9E9E9E"}, 
layout:{gapRatio:D.$JSCompiler_alias_NULL$$, outerGapWidth:10, outerGapHeight:8, titleSubtitleGapWidth:14, titleSubtitleGapHeight:4, titleSeparatorGap:6, titlePlotAreaGap:10, footnoteGap:7, verticalAxisGap:6, legendGap:10, tickLabelGapHeight:5, tickLabelGapWidth:7}, _resources:{}};
D.$DvtChartDefaults$getGapSize$$ = function $$DvtChartDefaults$getGapSize$$$($chart$$2$$, $defaultSize$$3$$) {
  return window.Math.ceil($defaultSize$$3$$ * $chart$$2$$.$getGapRatio$())
};
D.$DvtChartAxisUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartAxisUtils$$, D.$DvtObj$$, "DvtChartAxisUtils");
D.$DvtChartAxisUtils$$.$getXAxisPosition$ = function $$DvtChartAxisUtils$$$$getXAxisPosition$$($chart$$167$$) {
  return D.$DvtChartTypeUtils$$.$isPolar$($chart$$167$$) ? "tangential" : D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$167$$) ? (0,D.$DvtAgent$isRightToLeft$$)($chart$$167$$.$_context$) ? "right" : "left" : "bottom"
};
D.$DvtChartAxisUtils$$.$getYAxisPosition$ = function $$DvtChartAxisUtils$$$$getYAxisPosition$$($chart$$168$$) {
  return D.$DvtChartTypeUtils$$.$isPolar$($chart$$168$$) ? "radial" : D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$168$$) ? "bottom" : (0,D.$DvtAgent$isRightToLeft$$)($chart$$168$$.$_context$) ? "right" : "left"
};
D.$DvtChartAxisUtils$$.$getY2AxisPosition$ = function $$DvtChartAxisUtils$$$$getY2AxisPosition$$($chart$$169$$) {
  return D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$169$$) ? "top" : (0,D.$DvtAgent$isRightToLeft$$)($chart$$169$$.$_context$) ? "left" : "right"
};
D.$DvtChartAxisUtils$$.$hasTimeAxis$ = function $$DvtChartAxisUtils$$$$hasTimeAxis$$($chart$$170$$) {
  return D.$DvtChartTypeUtils$$.$isBLAC$($chart$$170$$) ? "disabled" != $chart$$170$$.$getOptions$().timeAxisType : D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartAxisUtils$$.$hasGroupAxis$ = function $$DvtChartAxisUtils$$$$hasGroupAxis$$($chart$$171$$) {
  return D.$DvtChartTypeUtils$$.$isBLAC$($chart$$171$$) ? "disabled" == $chart$$171$$.$getOptions$().timeAxisType : D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartAxisUtils$$.$getAxisOffset$ = function $$DvtChartAxisUtils$$$$getAxisOffset$$($chart$$172$$) {
  return D.$DvtChartTypeUtils$$.$hasBarSeries$($chart$$172$$) || D.$DvtChartTypeUtils$$.$hasCenteredSeries$($chart$$172$$) || D.$DvtChartTypeUtils$$.$isBLAC$($chart$$172$$) && 1 == D.$DvtChartDataUtils$$.$getGroupCount$($chart$$172$$) ? 0.5 : 0
};
D.$DvtChartAxisUtils$$.$isGridShifted$ = function $$DvtChartAxisUtils$$$$isGridShifted$$($chart$$173$$) {
  if(!D.$DvtChartTypeUtils$$.$isBLAC$($chart$$173$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $seriesCount$$18$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$173$$), $i$$489$$ = 0;$i$$489$$ < $seriesCount$$18$$;$i$$489$$++) {
    if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$173$$, $i$$489$$)) {
      var $seriesType$$5$$ = D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$173$$, $i$$489$$), $lineType$$5$$ = D.$DvtChartStyleUtils$$.$getLineType$($chart$$173$$, $i$$489$$);
      if("bar" != $seriesType$$5$$ && "centeredSegmented" != $lineType$$5$$ && "centeredStepped" != $lineType$$5$$) {
        return D.$JSCompiler_alias_FALSE$$
      }
    }
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartAxisUtils$$.$isGridPolygonal$ = function $$DvtChartAxisUtils$$$$isGridPolygonal$$($chart$$174$$) {
  return!D.$DvtChartTypeUtils$$.$isBLAC$($chart$$174$$) || D.$DvtChartTypeUtils$$.$hasBarSeries$($chart$$174$$) ? D.$JSCompiler_alias_FALSE$$ : "polygon" == $chart$$174$$.$getOptions$().polarGridShape
};
D.$DvtChartAxisUtils$$.$isAxisRendered$ = function $$DvtChartAxisUtils$$$$isAxisRendered$$($chart$$175$$, $type$$116$$) {
  if("y" == $type$$116$$ && D.$DvtChartTypeUtils$$.$hasY2DataOnly$($chart$$175$$) || "y2" == $type$$116$$ && !D.$DvtChartTypeUtils$$.$hasY2Data$($chart$$175$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $axisOptions$$5_options$$166$$ = $chart$$175$$.$getOptions$(), $axisOptions$$5_options$$166$$ = "x" == $type$$116$$ ? $axisOptions$$5_options$$166$$.xAxis : "y" == $type$$116$$ ? $axisOptions$$5_options$$166$$.yAxis : $axisOptions$$5_options$$166$$.y2Axis;
  return"off" == $axisOptions$$5_options$$166$$.rendered || "off" == $axisOptions$$5_options$$166$$.tickLabel.rendered && !$axisOptions$$5_options$$166$$.title ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartAxisUtils$$.$getTickLabelFontSize$ = function $$DvtChartAxisUtils$$$$getTickLabelFontSize$$($chart$$176$$, $type$$117$$) {
  var $options$$167$$ = $chart$$176$$.$getOptions$(), $tickLabelStyle$$ = ("x" == $type$$117$$ ? $options$$167$$.xAxis : "y" == $type$$117$$ ? $options$$167$$.yAxis : $options$$167$$.y2Axis).tickLabel.style;
  $tickLabelStyle$$ instanceof D.$DvtCSSStyle$$ || ($tickLabelStyle$$ = new D.$DvtCSSStyle$$($tickLabelStyle$$));
  (0,D.$JSCompiler_StaticMethods_mergeUnder$$)($tickLabelStyle$$, (0,D.$DvtAxis$getDefaults$$)($options$$167$$.skin).tickLabel.style);
  return(0,window.parseInt)($tickLabelStyle$$.$getStyle$("font-size"))
};
D.$DvtChartDataUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartDataUtils$$, D.$DvtObj$$, "DvtChartDataUtils");
D.$DvtChartDataUtils$$.$_TYPE_LABEL$ = "label";
D.$DvtChartDataUtils$$.$hasData$ = function $$DvtChartDataUtils$$$$hasData$$($chart$$182$$) {
  var $options$$168_seriesCount$$19$$ = $chart$$182$$.$getOptions$();
  if(!$options$$168_seriesCount$$19$$ || !$options$$168_seriesCount$$19$$.series || 1 > $options$$168_seriesCount$$19$$.series.length) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $options$$168_seriesCount$$19$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$182$$), $i$$490$$ = 0;$i$$490$$ < $options$$168_seriesCount$$19$$;$i$$490$$++) {
    var $seriesItem$$20$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$182$$, $i$$490$$);
    if($seriesItem$$20$$ && $seriesItem$$20$$.items && 1 <= $seriesItem$$20$$.items.length) {
      return D.$JSCompiler_alias_TRUE$$
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartDataUtils$$.$hasSeriesData$ = function $$DvtChartDataUtils$$$$hasSeriesData$$($chart$$183$$, $seriesIndex$$67$$) {
  var $dataItems$$2$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$183$$, $seriesIndex$$67$$).items;
  if($dataItems$$2$$) {
    for(var $i$$491$$ = 0;$i$$491$$ < $dataItems$$2$$.length;$i$$491$$++) {
      if($dataItems$$2$$[$i$$491$$] != D.$JSCompiler_alias_NULL$$) {
        return D.$JSCompiler_alias_TRUE$$
      }
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartDataUtils$$.$processDataObject$ = function $$DvtChartDataUtils$$$$processDataObject$$($chart$$184$$) {
  if(D.$DvtChartDataUtils$$.$hasData$($chart$$184$$)) {
    for(var $maxGroups$$ = 0, $arSeriesStyle_options$$169$$ = $chart$$184$$.$getSeriesStyleArray$(), $bundle$$12_seriesCount$$20$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$184$$), $group$$13_i$$492$$ = 0;$group$$13_i$$492$$ < $bundle$$12_seriesCount$$20$$;$group$$13_i$$492$$++) {
      var $series$$21_seriesItem$$22$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$184$$, $group$$13_i$$492$$);
      $series$$21_seriesItem$$22$$ != D.$JSCompiler_alias_NULL$$ && 0 > D.$DvtArrayUtils$$.$getIndex$($arSeriesStyle_options$$169$$, $series$$21_seriesItem$$22$$) && $arSeriesStyle_options$$169$$.push($series$$21_seriesItem$$22$$);
      if(($series$$21_seriesItem$$22$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$184$$, $group$$13_i$$492$$)) && $series$$21_seriesItem$$22$$.items && $series$$21_seriesItem$$22$$.items.length > $maxGroups$$) {
        $maxGroups$$ = $series$$21_seriesItem$$22$$.items.length
      }
      D.$DvtChartTypeUtils$$.$isFunnel$($chart$$184$$) && ($series$$21_seriesItem$$22$$.displayInLegend = "off")
    }
    $arSeriesStyle_options$$169$$ = $chart$$184$$.$getOptions$();
    $arSeriesStyle_options$$169$$.groups || ($arSeriesStyle_options$$169$$.groups = []);
    for($bundle$$12_seriesCount$$20$$ = $chart$$184$$.$getBundle$();$arSeriesStyle_options$$169$$.groups.length < $maxGroups$$;) {
      $group$$13_i$$492$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$12_seriesCount$$20$$, "DEFAULT_GROUP_NAME", $arSeriesStyle_options$$169$$.groups.length + 1), $arSeriesStyle_options$$169$$.groups.push($group$$13_i$$492$$)
    }
    D.$DvtChartDataUtils$$.$_processTimeAxis$($chart$$184$$);
    D.$DvtChartTypeUtils$$.$isFunnel$($chart$$184$$) && ($arSeriesStyle_options$$169$$.styleDefaults.groupTooltipType = "none")
  }
};
D.$DvtChartDataUtils$$.$_processTimeAxis$ = function $$DvtChartDataUtils$$$$_processTimeAxis$$($chart$$185$$) {
  var $options$$170_seriesIndex$$68$$ = $chart$$185$$.$getOptions$(), $groupIndex$$38$$, $group$$14_seriesCount$$21$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$185$$), $groupCount$$2$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$185$$);
  if("mixedFrequency" == $options$$170_seriesIndex$$68$$.timeAxisType) {
    for($options$$170_seriesIndex$$68$$ = 0;$options$$170_seriesIndex$$68$$ < $group$$14_seriesCount$$21$$;$options$$170_seriesIndex$$68$$++) {
      for($groupIndex$$38$$ = 0;$groupIndex$$38$$ < $groupCount$$2$$;$groupIndex$$38$$++) {
        var $dataItem$$27$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$185$$, $options$$170_seriesIndex$$68$$, $groupIndex$$38$$);
        $dataItem$$27$$ != D.$JSCompiler_alias_NULL$$ && "string" == typeof $dataItem$$27$$.x && ($dataItem$$27$$.x = window.Date.parse($dataItem$$27$$.x))
      }
    }
  }else {
    if("enabled" == $options$$170_seriesIndex$$68$$.timeAxisType) {
      for($groupIndex$$38$$ = 0;$groupIndex$$38$$ < $groupCount$$2$$;$groupIndex$$38$$++) {
        $group$$14_seriesCount$$21$$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$185$$, $groupIndex$$38$$), $group$$14_seriesCount$$21$$ != D.$JSCompiler_alias_NULL$$ && "string" == typeof $group$$14_seriesCount$$21$$ && ($options$$170_seriesIndex$$68$$.groups[$groupIndex$$38$$] = window.Date.parse($group$$14_seriesCount$$21$$))
      }
    }
  }
};
D.$DvtChartDataUtils$$.$getSeriesCount$ = function $$DvtChartDataUtils$$$$getSeriesCount$$($chart$$186$$) {
  return $chart$$186$$.$getOptions$().series.length
};
D.$DvtChartDataUtils$$.$getSeries$ = function $$DvtChartDataUtils$$$$getSeries$$($chart$$187$$, $seriesIndex$$69$$) {
  var $seriesItem$$23$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$187$$, $seriesIndex$$69$$);
  return $seriesItem$$23$$ ? $seriesItem$$23$$.id ? $seriesItem$$23$$.id : $seriesItem$$23$$.name || "" == $seriesItem$$23$$.name ? $seriesItem$$23$$.name : (0,window.String)($seriesIndex$$69$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartDataUtils$$.$getSeriesLabel$ = function $$DvtChartDataUtils$$$$getSeriesLabel$$($chart$$188$$, $seriesIndex$$70$$) {
  var $seriesItem$$24$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$188$$, $seriesIndex$$70$$);
  return $seriesItem$$24$$ && ($seriesItem$$24$$.name || "" == $seriesItem$$24$$.name) ? $seriesItem$$24$$.name : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartDataUtils$$.$getSeriesIndex$ = function $$DvtChartDataUtils$$$$getSeriesIndex$$($chart$$189$$, $series$$22$$) {
  for(var $numSeries$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$189$$), $seriesIndex$$71$$ = 0;$seriesIndex$$71$$ < $numSeries$$;$seriesIndex$$71$$++) {
    if(D.$DvtChartDataUtils$$.$getSeries$($chart$$189$$, $seriesIndex$$71$$) == $series$$22$$) {
      return $seriesIndex$$71$$
    }
  }
  return-1
};
D.$DvtChartDataUtils$$.$getSeriesStyleIndex$ = function $$DvtChartDataUtils$$$$getSeriesStyleIndex$$($chart$$190$$, $series$$23$$) {
  return $series$$23$$ ? D.$DvtArrayUtils$$.$getIndex$($chart$$190$$.$getSeriesStyleArray$(), $series$$23$$) : D.$DvtChartDataUtils$$.$getSeriesIndex$($chart$$190$$, $series$$23$$)
};
D.$DvtChartDataUtils$$.$getSeriesItem$ = function $$DvtChartDataUtils$$$$getSeriesItem$$($chart$$191$$, $seriesIndex$$72$$) {
  if((0,window.isNaN)($seriesIndex$$72$$) || $seriesIndex$$72$$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $options$$171$$ = $chart$$191$$.$getOptions$();
  if($options$$171$$.series && $options$$171$$.series.length > $seriesIndex$$72$$) {
    return $options$$171$$.series[$seriesIndex$$72$$]
  }
};
D.$DvtChartDataUtils$$.$getDataItem$ = function $$DvtChartDataUtils$$$$getDataItem$$($chart$$192_seriesItem$$25$$, $seriesIndex$$73$$, $groupIndex$$39$$) {
  if((0,window.isNaN)($groupIndex$$39$$) || $groupIndex$$39$$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  if(($chart$$192_seriesItem$$25$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$192_seriesItem$$25$$, $seriesIndex$$73$$)) && $chart$$192_seriesItem$$25$$.items && 0 <= $groupIndex$$39$$ && $chart$$192_seriesItem$$25$$.items.length > $groupIndex$$39$$) {
    return $chart$$192_seriesItem$$25$$.items[$groupIndex$$39$$]
  }
};
D.$DvtChartDataUtils$$.$getGroupCount$ = function $$DvtChartDataUtils$$$$getGroupCount$$($chart$$193$$) {
  return $chart$$193$$.$getOptions$().groups.length
};
D.$DvtChartDataUtils$$.$getGroup$ = function $$DvtChartDataUtils$$$$getGroup$$($chart$$194$$, $groupIndex$$40$$) {
  var $group$$15_groupItems$$ = $chart$$194$$.$getOptions$().groups;
  return 0 <= $groupIndex$$40$$ && $groupIndex$$40$$ < $group$$15_groupItems$$.length && ($group$$15_groupItems$$ = $group$$15_groupItems$$[$groupIndex$$40$$]) ? $group$$15_groupItems$$.id ? $group$$15_groupItems$$.id : $group$$15_groupItems$$.name || "" == $group$$15_groupItems$$.name ? $group$$15_groupItems$$.name : $group$$15_groupItems$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartDataUtils$$.$getGroupIndex$ = function $$DvtChartDataUtils$$$$getGroupIndex$$($chart$$195$$, $group$$16$$) {
  return D.$DvtChartDataUtils$$.$getGroups$($chart$$195$$).indexOf($group$$16$$)
};
D.$DvtChartDataUtils$$.$getGroupLabel$ = function $$DvtChartDataUtils$$$$getGroupLabel$$($chart$$196$$, $groupIndex$$41$$) {
  var $group$$17_groupItems$$1$$ = $chart$$196$$.$getOptions$().groups;
  return 0 <= $groupIndex$$41$$ && $groupIndex$$41$$ < $group$$17_groupItems$$1$$.length && ($group$$17_groupItems$$1$$ = $group$$17_groupItems$$1$$[$groupIndex$$41$$]) ? $group$$17_groupItems$$1$$.name ? $group$$17_groupItems$$1$$.name : $group$$17_groupItems$$1$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartDataUtils$$.$getGroups$ = function $$DvtChartDataUtils$$$$getGroups$$($chart$$197$$) {
  for(var $groupCount$$3$$ = $chart$$197$$.$getOptions$().groups.length, $groups$$4$$ = [], $groupIndex$$42$$ = 0;$groupIndex$$42$$ < $groupCount$$3$$;$groupIndex$$42$$++) {
    $groups$$4$$.push(D.$DvtChartDataUtils$$.$getGroup$($chart$$197$$, $groupIndex$$42$$))
  }
  return $groups$$4$$
};
D.$DvtChartDataUtils$$.getValue = function $$DvtChartDataUtils$$$getValue$($chart$$198_dataItem$$28$$, $seriesIndex$$74$$, $groupIndex$$43$$) {
  $chart$$198_dataItem$$28$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$198_dataItem$$28$$, $seriesIndex$$74$$, $groupIndex$$43$$);
  if($chart$$198_dataItem$$28$$ != D.$JSCompiler_alias_NULL$$) {
    if((0,window.isNaN)($chart$$198_dataItem$$28$$)) {
      if($chart$$198_dataItem$$28$$.value != D.$JSCompiler_alias_NULL$$) {
        return $chart$$198_dataItem$$28$$.value
      }
      if($chart$$198_dataItem$$28$$.y != D.$JSCompiler_alias_NULL$$) {
        return $chart$$198_dataItem$$28$$.y
      }
    }else {
      return $chart$$198_dataItem$$28$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartDataUtils$$.$getCumulativeValue$ = function $$DvtChartDataUtils$$$$getCumulativeValue$$($chart$$199$$, $seriesIndex$$75$$, $groupIndex$$44$$, $bIncludeHiddenSeries$$) {
  if(D.$DvtChartTypeUtils$$.$isStacked$($chart$$199$$)) {
    for(var $seriesType$$6$$ = D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$199$$, $seriesIndex$$75$$), $bAssignedToY2$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$199$$, $seriesIndex$$75$$), $total$$9$$ = 0, $i$$493$$ = 0;$i$$493$$ <= $seriesIndex$$75$$;$i$$493$$++) {
      if(($bIncludeHiddenSeries$$ || D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$199$$, $i$$493$$)) && $seriesType$$6$$ == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$199$$, $i$$493$$) && $bAssignedToY2$$ == D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$199$$, $i$$493$$)) {
        var $groupValue$$ = D.$DvtChartDataUtils$$.getValue($chart$$199$$, $i$$493$$, $groupIndex$$44$$), $total$$9$$ = $total$$9$$ + ($groupValue$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($groupValue$$) ? 0 : $groupValue$$)
      }
    }
    return $total$$9$$
  }
  return D.$DvtChartDataUtils$$.getValue($chart$$199$$, $seriesIndex$$75$$, $groupIndex$$44$$)
};
D.$DvtChartDataUtils$$.$getXValue$ = function $$DvtChartDataUtils$$$$getXValue$$($chart$$200$$, $dataItem$$29_seriesIndex$$76_xVal$$, $groupIndex$$45$$) {
  if(D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$200$$)) {
    return $groupIndex$$45$$
  }
  $dataItem$$29_seriesIndex$$76_xVal$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$200$$, $dataItem$$29_seriesIndex$$76_xVal$$, $groupIndex$$45$$);
  if($dataItem$$29_seriesIndex$$76_xVal$$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $dataItem$$29_seriesIndex$$76_xVal$$ = $dataItem$$29_seriesIndex$$76_xVal$$.x;
  return(0,window.isNaN)($dataItem$$29_seriesIndex$$76_xVal$$) ? D.$DvtChartDataUtils$$.$getGroupLabel$($chart$$200$$, $groupIndex$$45$$) : $dataItem$$29_seriesIndex$$76_xVal$$
};
D.$DvtChartDataUtils$$.$getTargetValue$ = function $$DvtChartDataUtils$$$$getTargetValue$$($chart$$201$$, $seriesIndex$$77$$) {
  var $dataItem$$30$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$201$$, $seriesIndex$$77$$, 0);
  return!(0,window.isNaN)($dataItem$$30$$) || $dataItem$$30$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : $dataItem$$30$$.targetValue
};
D.$DvtChartDataUtils$$.$isXInViewport$ = function $$DvtChartDataUtils$$$$isXInViewport$$($chart$$202_minMax$$2$$, $seriesIndex$$78_xVal$$1$$, $groupIndex$$46$$) {
  $seriesIndex$$78_xVal$$1$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$202_minMax$$2$$, $seriesIndex$$78_xVal$$1$$, $groupIndex$$46$$);
  if((0,window.isNaN)($seriesIndex$$78_xVal$$1$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  $chart$$202_minMax$$2$$ = D.$DvtChartDataUtils$$.$_getXAxisViewportMinMax$($chart$$202_minMax$$2$$);
  return $chart$$202_minMax$$2$$.min != D.$JSCompiler_alias_NULL$$ && $seriesIndex$$78_xVal$$1$$ < $chart$$202_minMax$$2$$.min || $chart$$202_minMax$$2$$.max != D.$JSCompiler_alias_NULL$$ && $seriesIndex$$78_xVal$$1$$ > $chart$$202_minMax$$2$$.max ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartDataUtils$$.$_computeYAlongLine$ = function $$DvtChartDataUtils$$$$_computeYAlongLine$$($x1$$23$$, $y1$$21$$, $x2$$22$$, $y2$$20$$, $x$$157$$) {
  return $y1$$21$$ + ($y2$$20$$ - $y1$$21$$) * ($x$$157$$ - $x1$$23$$) / ($x2$$22$$ - $x1$$23$$)
};
D.$DvtChartDataUtils$$.$getViewportEdgeYValues$ = function $$DvtChartDataUtils$$$$getViewportEdgeYValues$$($chart$$203$$, $seriesIndex$$79$$) {
  var $seriesData$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$203$$, $seriesIndex$$79$$).items;
  if(!$seriesData$$) {
    return{min:D.$JSCompiler_alias_NULL$$, max:D.$JSCompiler_alias_NULL$$}
  }
  for(var $bIncludeHiddenSeries$$1$$ = "withoutRescale" == D.$DvtChartEventUtils$$.$getHideAndShowBehavior$($chart$$203$$), $max$$12_minMax$$3$$ = D.$DvtChartDataUtils$$.$_getXAxisViewportMinMax$($chart$$203$$), $min$$12$$ = $max$$12_minMax$$3$$.min, $max$$12_minMax$$3$$ = $max$$12_minMax$$3$$.max, $x$$158$$, $y$$133$$, $prevX$$2$$, $prevY$$2$$, $yMin$$1$$, $yMax$$1$$, $groupIndex$$47$$ = 0;$groupIndex$$47$$ < $seriesData$$.length;$groupIndex$$47$$++) {
    if($bIncludeHiddenSeries$$1$$ || D.$DvtChartStyleUtils$$.$isDataItemRendered$($chart$$203$$, $seriesIndex$$79$$, $groupIndex$$47$$)) {
      $x$$158$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$203$$, $seriesIndex$$79$$, $groupIndex$$47$$), $y$$133$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$203$$, $seriesIndex$$79$$, $groupIndex$$47$$, $bIncludeHiddenSeries$$1$$), $prevX$$2$$ != D.$JSCompiler_alias_NULL$$ && ($min$$12$$ != D.$JSCompiler_alias_NULL$$ && ($min$$12$$ > $prevX$$2$$ && $min$$12$$ < $x$$158$$) && ($yMin$$1$$ = D.$DvtChartDataUtils$$.$_computeYAlongLine$($prevX$$2$$, $prevY$$2$$, $x$$158$$, $y$$133$$, $min$$12$$)), 
      $max$$12_minMax$$3$$ != D.$JSCompiler_alias_NULL$$ && ($max$$12_minMax$$3$$ > $prevX$$2$$ && $max$$12_minMax$$3$$ < $x$$158$$) && ($yMax$$1$$ = D.$DvtChartDataUtils$$.$_computeYAlongLine$($prevX$$2$$, $prevY$$2$$, $x$$158$$, $y$$133$$, $max$$12_minMax$$3$$))), $prevX$$2$$ = $x$$158$$, $prevY$$2$$ = $y$$133$$
    }
  }
  return{min:$yMin$$1$$, max:$yMax$$1$$}
};
D.$DvtChartDataUtils$$.$_getXAxisViewportMinMax$ = function $$DvtChartDataUtils$$$$_getXAxisViewportMinMax$$($chart$$204$$) {
  var $options$$172$$ = $chart$$204$$.$getOptions$().xAxis, $isGroupAxis$$ = D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$204$$), $min$$13$$ = D.$JSCompiler_alias_NULL$$, $min$$13$$ = $options$$172$$.viewportMin != D.$JSCompiler_alias_NULL$$ ? $options$$172$$.viewportMin : $options$$172$$.viewportStartGroup != D.$JSCompiler_alias_NULL$$ ? $isGroupAxis$$ ? D.$DvtChartDataUtils$$.$getGroupIndex$($chart$$204$$, $options$$172$$.viewportStartGroup) : $options$$172$$.viewportStartGroup : $options$$172$$.min, 
  $max$$13$$ = D.$JSCompiler_alias_NULL$$, $max$$13$$ = $options$$172$$.viewportMax != D.$JSCompiler_alias_NULL$$ ? $options$$172$$.viewportMax : $options$$172$$.viewportEndGroup != D.$JSCompiler_alias_NULL$$ ? $isGroupAxis$$ ? D.$DvtChartDataUtils$$.$getGroupIndex$($chart$$204$$, $options$$172$$.viewportEndGroup) : $options$$172$$.viewportEndGroup : $options$$172$$.max;
  return{min:$min$$13$$, max:$max$$13$$}
};
D.$DvtChartDataUtils$$.$getMinMaxValue$ = function $$DvtChartDataUtils$$$$getMinMaxValue$$($chart$$205$$, $type$$118$$, $limitToViewport$$, $excludeBubbleRadii$$) {
  var $isY2Value$$ = "y2" == $type$$118$$;
  $isY2Value$$ && ($type$$118$$ = "y");
  var $isYValue$$ = "y" == $type$$118$$;
  if(!$isYValue$$ || !D.$DvtChartTypeUtils$$.$isBLAC$($chart$$205$$)) {
    $limitToViewport$$ = D.$JSCompiler_alias_FALSE$$
  }
  for(var $bIncludeHiddenSeries$$2$$ = "withoutRescale" == D.$DvtChartEventUtils$$.$getHideAndShowBehavior$($chart$$205$$), $maxValue$$15$$ = -window.Infinity, $minValue$$14$$ = window.Infinity, $options$$173$$ = $chart$$205$$.$getOptions$(), $seriesCount$$22$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$205$$), $seriesIndex$$80$$ = 0;$seriesIndex$$80$$ < $seriesCount$$22$$;$seriesIndex$$80$$++) {
    var $edgeValues_refObjects_seriesData$$1_seriesItem$$27$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$205$$, $seriesIndex$$80$$);
    if($bIncludeHiddenSeries$$2$$ || D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$205$$, $seriesIndex$$80$$)) {
      var $groupIndex$$48_i$$494_isY2Series$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$205$$, $seriesIndex$$80$$);
      if(!($isYValue$$ && $isY2Value$$ != $groupIndex$$48_i$$494_isY2Series$$) && ($edgeValues_refObjects_seriesData$$1_seriesItem$$27$$ = $edgeValues_refObjects_seriesData$$1_seriesItem$$27$$.items)) {
        for($groupIndex$$48_i$$494_isY2Series$$ = 0;$groupIndex$$48_i$$494_isY2Series$$ < $edgeValues_refObjects_seriesData$$1_seriesItem$$27$$.length;$groupIndex$$48_i$$494_isY2Series$$++) {
          if($bIncludeHiddenSeries$$2$$ || D.$DvtChartStyleUtils$$.$isDataItemRendered$($chart$$205$$, $seriesIndex$$80$$, $groupIndex$$48_i$$494_isY2Series$$)) {
            "object" != typeof $edgeValues_refObjects_seriesData$$1_seriesItem$$27$$[$groupIndex$$48_i$$494_isY2Series$$] && ($edgeValues_refObjects_seriesData$$1_seriesItem$$27$$[$groupIndex$$48_i$$494_isY2Series$$] = {y:$edgeValues_refObjects_seriesData$$1_seriesItem$$27$$[$groupIndex$$48_i$$494_isY2Series$$]});
            var $data$$62_items$$21$$ = $edgeValues_refObjects_seriesData$$1_seriesItem$$27$$[$groupIndex$$48_i$$494_isY2Series$$], $timeAxisGroupLabel_value$$121$$;
            $isYValue$$ ? $timeAxisGroupLabel_value$$121$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$205$$, $seriesIndex$$80$$, $groupIndex$$48_i$$494_isY2Series$$, $bIncludeHiddenSeries$$2$$) : $data$$62_items$$21$$ != D.$JSCompiler_alias_NULL$$ && ($options$$173$$.timeAxisType && ("enabled" == $options$$173$$.timeAxisType && $data$$62_items$$21$$.x == D.$JSCompiler_alias_NULL$$) && ($timeAxisGroupLabel_value$$121$$ = D.$DvtChartDataUtils$$.$getGroupLabel$($chart$$205$$, $groupIndex$$48_i$$494_isY2Series$$), 
            (0,window.isNaN)($timeAxisGroupLabel_value$$121$$) || ($data$$62_items$$21$$.x = $timeAxisGroupLabel_value$$121$$)), $timeAxisGroupLabel_value$$121$$ = $data$$62_items$$21$$[$type$$118$$]);
            if((!$limitToViewport$$ || D.$DvtChartDataUtils$$.$isXInViewport$($chart$$205$$, $seriesIndex$$80$$, $groupIndex$$48_i$$494_isY2Series$$)) && !(0,window.isNaN)($timeAxisGroupLabel_value$$121$$)) {
              var $min$$14_radius$$19$$ = 0;
              D.$DvtChartTypeUtils$$.$isBubble$($chart$$205$$) && (!$excludeBubbleRadii$$ && $data$$62_items$$21$$.markerSize) && ($isYValue$$ ? $min$$14_radius$$19$$ = $data$$62_items$$21$$._yAxisRadius : "x" == $type$$118$$ && ($min$$14_radius$$19$$ = $data$$62_items$$21$$._xAxisRadius));
              $maxValue$$15$$ = window.Math.max($maxValue$$15$$, $timeAxisGroupLabel_value$$121$$ + $min$$14_radius$$19$$);
              $minValue$$14$$ = window.Math.min($minValue$$14$$, $timeAxisGroupLabel_value$$121$$ - $min$$14_radius$$19$$)
            }
          }
        }
        $edgeValues_refObjects_seriesData$$1_seriesItem$$27$$ = D.$JSCompiler_alias_NULL$$;
        "x" == $type$$118$$ ? $edgeValues_refObjects_seriesData$$1_seriesItem$$27$$ = D.$DvtChartRefObjUtils$$.$getXAxisObjects$($chart$$205$$) : "y" == $type$$118$$ ? $edgeValues_refObjects_seriesData$$1_seriesItem$$27$$ = D.$DvtChartRefObjUtils$$.$getYAxisObjects$($chart$$205$$) : "y2" == $type$$118$$ && ($edgeValues_refObjects_seriesData$$1_seriesItem$$27$$ = D.$DvtChartRefObjUtils$$.$getY2AxisObjects$($chart$$205$$));
        if($edgeValues_refObjects_seriesData$$1_seriesItem$$27$$ != D.$JSCompiler_alias_NULL$$) {
          for($groupIndex$$48_i$$494_isY2Series$$ = 0;$groupIndex$$48_i$$494_isY2Series$$ < $edgeValues_refObjects_seriesData$$1_seriesItem$$27$$.length;$groupIndex$$48_i$$494_isY2Series$$++) {
            var $j$$83_refObj$$10$$ = $edgeValues_refObjects_seriesData$$1_seriesItem$$27$$[$groupIndex$$48_i$$494_isY2Series$$];
            if($data$$62_items$$21$$ = $j$$83_refObj$$10$$.items) {
              for($j$$83_refObj$$10$$ = 0;$j$$83_refObj$$10$$ < $data$$62_items$$21$$.length;$j$$83_refObj$$10$$++) {
                if($data$$62_items$$21$$[$j$$83_refObj$$10$$] != D.$JSCompiler_alias_NULL$$) {
                  var $min$$14_radius$$19$$ = $data$$62_items$$21$$[$j$$83_refObj$$10$$].min, $max$$14$$ = $data$$62_items$$21$$[$j$$83_refObj$$10$$].max, $val$$33$$ = (0,window.isNaN)($data$$62_items$$21$$[$j$$83_refObj$$10$$]) ? $data$$62_items$$21$$[$j$$83_refObj$$10$$].value : $data$$62_items$$21$$[$j$$83_refObj$$10$$];
                  $min$$14_radius$$19$$ != D.$JSCompiler_alias_NULL$$ && (0,window.isFinite)($min$$14_radius$$19$$) && ($minValue$$14$$ = window.Math.min($minValue$$14$$, $min$$14_radius$$19$$), $maxValue$$15$$ = window.Math.max($maxValue$$15$$, $min$$14_radius$$19$$));
                  $max$$14$$ != D.$JSCompiler_alias_NULL$$ && (0,window.isFinite)($max$$14$$) && ($minValue$$14$$ = window.Math.min($minValue$$14$$, $max$$14$$), $maxValue$$15$$ = window.Math.max($maxValue$$15$$, $max$$14$$));
                  $val$$33$$ != D.$JSCompiler_alias_NULL$$ && (0,window.isFinite)($val$$33$$) && ($minValue$$14$$ = window.Math.min($minValue$$14$$, $val$$33$$), $maxValue$$15$$ = window.Math.max($maxValue$$15$$, $val$$33$$))
                }
              }
            }else {
              $min$$14_radius$$19$$ = $j$$83_refObj$$10$$.min, $max$$14$$ = $j$$83_refObj$$10$$.max, $val$$33$$ = $j$$83_refObj$$10$$.value, $min$$14_radius$$19$$ != D.$JSCompiler_alias_NULL$$ && (0,window.isFinite)($min$$14_radius$$19$$) && ($minValue$$14$$ = window.Math.min($minValue$$14$$, $min$$14_radius$$19$$), $maxValue$$15$$ = window.Math.max($maxValue$$15$$, $min$$14_radius$$19$$)), $max$$14$$ != D.$JSCompiler_alias_NULL$$ && (0,window.isFinite)($max$$14$$) && ($minValue$$14$$ = window.Math.min($minValue$$14$$, 
              $max$$14$$), $maxValue$$15$$ = window.Math.max($maxValue$$15$$, $max$$14$$)), $val$$33$$ != D.$JSCompiler_alias_NULL$$ && (0,window.isFinite)($val$$33$$) && ($minValue$$14$$ = window.Math.min($minValue$$14$$, $val$$33$$), $maxValue$$15$$ = window.Math.max($maxValue$$15$$, $val$$33$$))
            }
          }
        }
        $limitToViewport$$ && ($edgeValues_refObjects_seriesData$$1_seriesItem$$27$$ = D.$DvtChartDataUtils$$.$getViewportEdgeYValues$($chart$$205$$, $seriesIndex$$80$$), $edgeValues_refObjects_seriesData$$1_seriesItem$$27$$.min != D.$JSCompiler_alias_NULL$$ && ($minValue$$14$$ = window.Math.min($minValue$$14$$, $edgeValues_refObjects_seriesData$$1_seriesItem$$27$$.min), $maxValue$$15$$ = window.Math.max($maxValue$$15$$, $edgeValues_refObjects_seriesData$$1_seriesItem$$27$$.min)), $edgeValues_refObjects_seriesData$$1_seriesItem$$27$$.max != 
        D.$JSCompiler_alias_NULL$$ && ($minValue$$14$$ = window.Math.min($minValue$$14$$, $edgeValues_refObjects_seriesData$$1_seriesItem$$27$$.max), $maxValue$$15$$ = window.Math.max($maxValue$$15$$, $edgeValues_refObjects_seriesData$$1_seriesItem$$27$$.max)))
      }
    }
  }
  return{min:$minValue$$14$$, max:$maxValue$$15$$}
};
D.$DvtChartDataUtils$$.$isAssignedToY2$ = function $$DvtChartDataUtils$$$$isAssignedToY2$$($chart$$206$$, $seriesIndex$$81$$) {
  var $seriesItem$$28$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$206$$, $seriesIndex$$81$$);
  return $seriesItem$$28$$ && "on" == $seriesItem$$28$$.assignedToY2 && D.$DvtChartTypeUtils$$.$isDualY$($chart$$206$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartDataUtils$$.$hasMixedFrequency$ = function $$DvtChartDataUtils$$$$hasMixedFrequency$$($chart$$207$$) {
  return"mixedFrequency" == $chart$$207$$.$getOptions$().timeAxisType
};
D.$DvtChartDataUtils$$.$getInitialSelection$ = function $$DvtChartDataUtils$$$$getInitialSelection$$($chart$$208_peers$$8$$) {
  var $selection$$25$$ = $chart$$208_peers$$8$$.$getOptions$().selection;
  $selection$$25$$ || ($selection$$25$$ = []);
  $chart$$208_peers$$8$$ = $chart$$208_peers$$8$$.$getObjects$();
  for(var $i$$495$$ = 0;$i$$495$$ < $selection$$25$$.length;$i$$495$$++) {
    var $id$$117$$ = $selection$$25$$[$i$$495$$].id;
    if($id$$117$$ && (!$selection$$25$$[$i$$495$$].series || !$selection$$25$$[$i$$495$$].group)) {
      for(var $j$$84$$ = 0;$j$$84$$ < $chart$$208_peers$$8$$.length;$j$$84$$++) {
        var $peer$$20$$ = $chart$$208_peers$$8$$[$j$$84$$];
        if($id$$117$$ == $peer$$20$$.$_dataItemId$) {
          $selection$$25$$[$i$$495$$].series = $peer$$20$$.$getSeries$();
          $selection$$25$$[$i$$495$$].group = $peer$$20$$.$getGroup$();
          break
        }
      }
    }
  }
  return $selection$$25$$
};
D.$DvtChartDataUtils$$.$getCurrentSelection$ = function $$DvtChartDataUtils$$$$getCurrentSelection$$($chart$$209_handler$$40_selectedIds$$4$$) {
  var $selection$$26$$ = [];
  if($chart$$209_handler$$40_selectedIds$$4$$ = $chart$$209_handler$$40_selectedIds$$4$$.$getSelectionHandler$()) {
    $chart$$209_handler$$40_selectedIds$$4$$ = (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)($chart$$209_handler$$40_selectedIds$$4$$);
    for(var $i$$496$$ = 0;$i$$496$$ < $chart$$209_handler$$40_selectedIds$$4$$.length;$i$$496$$++) {
      var $selectedId$$3$$ = $chart$$209_handler$$40_selectedIds$$4$$[$i$$496$$];
      $selection$$26$$.push({series:$selectedId$$3$$.$getSeries$(), group:$selectedId$$3$$.$getGroup$(), id:$selectedId$$3$$.getId()})
    }
  }
  return $selection$$26$$
};
D.$DvtChartDataUtils$$.$isDataSelected$ = function $$DvtChartDataUtils$$$$isDataSelected$$($chart$$210_group$$18$$, $series$$24_seriesIndex$$82$$, $groupIndex$$49_i$$497$$) {
  var $handler$$41_selectedIds$$5$$ = $chart$$210_group$$18$$.$getSelectionHandler$();
  $series$$24_seriesIndex$$82$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$210_group$$18$$, $series$$24_seriesIndex$$82$$);
  $chart$$210_group$$18$$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$210_group$$18$$, $groupIndex$$49_i$$497$$);
  if($handler$$41_selectedIds$$5$$ && $series$$24_seriesIndex$$82$$ != D.$JSCompiler_alias_NULL$$ && $chart$$210_group$$18$$ != D.$JSCompiler_alias_NULL$$) {
    $handler$$41_selectedIds$$5$$ = (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)($handler$$41_selectedIds$$5$$);
    for($groupIndex$$49_i$$497$$ = 0;$groupIndex$$49_i$$497$$ < $handler$$41_selectedIds$$5$$.length;$groupIndex$$49_i$$497$$++) {
      var $selectedId$$4$$ = $handler$$41_selectedIds$$5$$[$groupIndex$$49_i$$497$$];
      if($selectedId$$4$$.$getSeries$() == $series$$24_seriesIndex$$82$$ && $selectedId$$4$$.$getGroup$() == $chart$$210_group$$18$$) {
        return D.$JSCompiler_alias_TRUE$$
      }
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartDataUtils$$.$getDataLabel$ = function $$DvtChartDataUtils$$$$getDataLabel$$($axis$$58_chart$$211$$, $seriesIndex$$83$$, $dataItem$$31_groupIndex$$50$$) {
  $dataItem$$31_groupIndex$$50$$ = D.$DvtChartDataUtils$$.$getDataItem$($axis$$58_chart$$211$$, $seriesIndex$$83$$, $dataItem$$31_groupIndex$$50$$);
  if($dataItem$$31_groupIndex$$50$$.label != D.$JSCompiler_alias_NULL$$) {
    if("number" == typeof $dataItem$$31_groupIndex$$50$$.label) {
      var $options$$174$$ = $axis$$58_chart$$211$$.$getOptions$(), $min$$15$$, $max$$15$$;
      if($axis$$58_chart$$211$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($axis$$58_chart$$211$$, $seriesIndex$$83$$) && $axis$$58_chart$$211$$.$y2Axis$ ? $axis$$58_chart$$211$$.$y2Axis$ : $axis$$58_chart$$211$$.$yAxis$) {
        $min$$15$$ = $axis$$58_chart$$211$$.$getGlobalMin$(), $max$$15$$ = $axis$$58_chart$$211$$.$getGlobalMax$(), window.majorIncrement = $axis$$58_chart$$211$$.$getMajorIncrement$()
      }
      return D.$DvtChartTooltipUtils$$.$_formatValue$($options$$174$$.valueFormats, D.$DvtChartDataUtils$$.$_TYPE_LABEL$, $dataItem$$31_groupIndex$$50$$.label, $min$$15$$, $max$$15$$, window.majorIncrement)
    }
    return $dataItem$$31_groupIndex$$50$$.label
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartEventUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartEventUtils$$, D.$DvtObj$$, "DvtChartEventUtils");
D.$DvtChartEventUtils$$.$getHideAndShowBehavior$ = function $$DvtChartEventUtils$$$$getHideAndShowBehavior$$($chart$$89$$) {
  return $chart$$89$$.$getOptions$().hideAndShowBehavior
};
D.$DvtChartEventUtils$$.$getHoverBehavior$ = function $$DvtChartEventUtils$$$$getHoverBehavior$$($chart$$90$$) {
  return $chart$$90$$.$getOptions$().hoverBehavior
};
D.$DvtChartEventUtils$$.$setVisibility$ = function $$DvtChartEventUtils$$$$setVisibility$$($chart$$91_options$$141$$, $category$$7$$, $visibility$$2$$) {
  var $hiddenCategories_i$$471_seriesItem$$2$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$91_options$$141$$, D.$DvtChartDataUtils$$.$getSeriesIndex$($chart$$91_options$$141$$, $category$$7$$));
  if($category$$7$$ == D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$ && D.$DvtPieChartUtils$$.$getOtherSliceVisibility$($chart$$91_options$$141$$) !== $visibility$$2$$) {
    D.$DvtPieChartUtils$$.$setOtherSliceVisibility$($chart$$91_options$$141$$, $visibility$$2$$)
  }else {
    if($hiddenCategories_i$$471_seriesItem$$2$$ && $hiddenCategories_i$$471_seriesItem$$2$$.visibility !== $visibility$$2$$) {
      $hiddenCategories_i$$471_seriesItem$$2$$.visibility = $visibility$$2$$
    }else {
      if(!D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$91_options$$141$$)) {
        return D.$JSCompiler_alias_FALSE$$
      }
      $hiddenCategories_i$$471_seriesItem$$2$$ = D.$DvtChartStyleUtils$$.$getHiddenCategories$($chart$$91_options$$141$$);
      "hidden" == $visibility$$2$$ ? $hiddenCategories_i$$471_seriesItem$$2$$.push($category$$7$$) : $hiddenCategories_i$$471_seriesItem$$2$$.splice(D.$DvtArrayUtils$$.$getIndex$($hiddenCategories_i$$471_seriesItem$$2$$, $category$$7$$), 1);
      if(($chart$$91_options$$141$$ = $chart$$91_options$$141$$.$getOptions$()) && $chart$$91_options$$141$$.legend && $chart$$91_options$$141$$.legend.sections) {
        for($hiddenCategories_i$$471_seriesItem$$2$$ = 0;$hiddenCategories_i$$471_seriesItem$$2$$ < $chart$$91_options$$141$$.legend.sections.length;$hiddenCategories_i$$471_seriesItem$$2$$++) {
          var $dataSection$$1$$ = $chart$$91_options$$141$$.legend.sections[$hiddenCategories_i$$471_seriesItem$$2$$];
          if($dataSection$$1$$ && $dataSection$$1$$.items) {
            for(var $j$$77$$ = 0;$j$$77$$ < $dataSection$$1$$.items.length;$j$$77$$++) {
              $dataSection$$1$$.items[$j$$77$$].id == $category$$7$$ && ($dataSection$$1$$.items[$j$$77$$].categoryVisibility = $visibility$$2$$)
            }
          }
        }
      }
    }
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartEventUtils$$.$isScrollable$ = function $$DvtChartEventUtils$$$$isScrollable$$($chart$$92$$) {
  return"off" != $chart$$92$$.$getOptions$().zoomAndScroll
};
D.$DvtChartEventUtils$$.$isZoomable$ = function $$DvtChartEventUtils$$$$isZoomable$$($chart$$93_zs$$) {
  $chart$$93_zs$$ = $chart$$93_zs$$.$getOptions$().zoomAndScroll;
  return"live" == $chart$$93_zs$$ || "delayed" == $chart$$93_zs$$
};
D.$DvtChartEventUtils$$.$isLiveScroll$ = function $$DvtChartEventUtils$$$$isLiveScroll$$($chart$$94_zs$$1$$) {
  $chart$$94_zs$$1$$ = $chart$$94_zs$$1$$.$getOptions$().zoomAndScroll;
  return"live" == $chart$$94_zs$$1$$ || "liveScrollOnly" == $chart$$94_zs$$1$$
};
D.$DvtChartEventUtils$$.$isDelayedScroll$ = function $$DvtChartEventUtils$$$$isDelayedScroll$$($chart$$95_zs$$2$$) {
  $chart$$95_zs$$2$$ = $chart$$95_zs$$2$$.$getOptions$().zoomAndScroll;
  return"delayed" == $chart$$95_zs$$2$$ || "delayedScrollOnly" == $chart$$95_zs$$2$$
};
D.$DvtChartEventUtils$$.$processIds$ = function $$DvtChartEventUtils$$$$processIds$$($chart$$96$$, $selection$$24$$) {
  for(var $ret$$85$$ = [], $i$$472$$ = 0;$i$$472$$ < $selection$$24$$.length;$i$$472$$++) {
    var $item$$34_otherItems$$ = $selection$$24$$[$i$$472$$];
    $item$$34_otherItems$$.$getSeries$() == D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$ ? ($item$$34_otherItems$$ = D.$DvtPieChartUtils$$.$getOtherSliceIds$($chart$$96$$), $ret$$85$$ = $ret$$85$$.concat($item$$34_otherItems$$)) : $ret$$85$$.push($item$$34_otherItems$$)
  }
  return $ret$$85$$
};
D.$DvtChartEventUtils$$.$adjustBounds$ = function $$DvtChartEventUtils$$$$adjustBounds$$($event$$405$$) {
  $event$$405$$.x != D.$JSCompiler_alias_NULL$$ && ($event$$405$$.x -= 1);
  $event$$405$$.$w$ != D.$JSCompiler_alias_NULL$$ && ($event$$405$$.$w$ += 2);
  $event$$405$$.y != D.$JSCompiler_alias_NULL$$ && ($event$$405$$.y -= 1);
  $event$$405$$.$h$ != D.$JSCompiler_alias_NULL$$ && ($event$$405$$.$h$ += 2)
};
D.$DvtChartEventUtils$$.$getBoundedObjects$ = function $$DvtChartEventUtils$$$$getBoundedObjects$$($chart$$97$$, $event$$406$$) {
  for(var $peers$$5$$ = $chart$$97$$.$getObjects$(), $boundedPeers$$ = [], $i$$473$$ = 0;$i$$473$$ < $peers$$5$$.length;$i$$473$$++) {
    var $peer$$18$$ = $peers$$5$$[$i$$473$$], $dataPos$$5$$ = $peer$$18$$.$_dataPos$;
    if($dataPos$$5$$) {
      var $dataPos$$5$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($chart$$97$$.$getPlotArea$(), $dataPos$$5$$), $withinY$$ = $event$$406$$.y == D.$JSCompiler_alias_NULL$$ || $dataPos$$5$$.y >= $event$$406$$.y && $dataPos$$5$$.y <= $event$$406$$.y + $event$$406$$.$h$;
      ($event$$406$$.x == D.$JSCompiler_alias_NULL$$ || $dataPos$$5$$.x >= $event$$406$$.x && $dataPos$$5$$.x <= $event$$406$$.x + $event$$406$$.$w$) && $withinY$$ && $boundedPeers$$.push($peer$$18$$)
    }
  }
  return $boundedPeers$$
};
D.$DvtChartEventUtils$$.$getAxisBounds$ = function $$DvtChartEventUtils$$$$getAxisBounds$$($chart$$98$$, $event$$407_maxPt_xMinMax$$, $limitExtent$$) {
  var $plotArea$$3_yMinMax$$ = $chart$$98$$.$getPlotArea$(), $coords$$23_minPt$$ = $plotArea$$3_yMinMax$$.$stageToLocal$(new D.$DvtPoint$$($event$$407_maxPt_xMinMax$$.x, $event$$407_maxPt_xMinMax$$.y));
  $event$$407_maxPt_xMinMax$$ = $plotArea$$3_yMinMax$$.$stageToLocal$(new D.$DvtPoint$$($event$$407_maxPt_xMinMax$$.x + $event$$407_maxPt_xMinMax$$.$w$, $event$$407_maxPt_xMinMax$$.y + $event$$407_maxPt_xMinMax$$.$h$));
  $coords$$23_minPt$$ = D.$DvtChartEventUtils$$.$_convertToAxisCoord$($chart$$98$$, $coords$$23_minPt$$.x, $event$$407_maxPt_xMinMax$$.x, $coords$$23_minPt$$.y, $event$$407_maxPt_xMinMax$$.y);
  $event$$407_maxPt_xMinMax$$ = {};
  var $plotArea$$3_yMinMax$$ = {}, $y2MinMax$$ = {}, $startEndGroup$$1$$ = {};
  $chart$$98$$.$xAxis$ && ($event$$407_maxPt_xMinMax$$ = D.$DvtChartEventUtils$$.$_getAxisMinMax$($chart$$98$$.$xAxis$, $coords$$23_minPt$$.$xMin$, $coords$$23_minPt$$.$xMax$, $limitExtent$$), $startEndGroup$$1$$ = D.$DvtChartEventUtils$$.$getAxisStartEndGroup$($chart$$98$$.$xAxis$, $event$$407_maxPt_xMinMax$$.min, $event$$407_maxPt_xMinMax$$.max));
  $chart$$98$$.$yAxis$ && ($plotArea$$3_yMinMax$$ = D.$DvtChartEventUtils$$.$_getAxisMinMax$($chart$$98$$.$yAxis$, $coords$$23_minPt$$.$yMin$, $coords$$23_minPt$$.$yMax$, $limitExtent$$));
  $chart$$98$$.$y2Axis$ && ($y2MinMax$$ = D.$DvtChartEventUtils$$.$_getAxisMinMax$($chart$$98$$.$y2Axis$, $coords$$23_minPt$$.$yMin$, $coords$$23_minPt$$.$yMax$, $limitExtent$$));
  return{$xMin$:$event$$407_maxPt_xMinMax$$.min, $xMax$:$event$$407_maxPt_xMinMax$$.max, $yMin$:$plotArea$$3_yMinMax$$.min, $yMax$:$plotArea$$3_yMinMax$$.max, $y2Min$:$y2MinMax$$.min, $y2Max$:$y2MinMax$$.max, $startGroup$:$startEndGroup$$1$$.$startGroup$, $endGroup$:$startEndGroup$$1$$.$endGroup$}
};
D.$DvtChartEventUtils$$.$_getAxisMinMax$ = function $$DvtChartEventUtils$$$$_getAxisMinMax$$($axis$$53$$, $center$$5_min$$6_minCoord$$6$$, $max$$6_maxCoord$$6$$, $limitExtent$$1_minExtent$$) {
  $center$$5_min$$6_minCoord$$6$$ = $axis$$53$$.$getUnboundedValueAt$($center$$5_min$$6_minCoord$$6$$);
  $max$$6_maxCoord$$6$$ = $axis$$53$$.$getUnboundedValueAt$($max$$6_maxCoord$$6$$);
  return $limitExtent$$1_minExtent$$ ? ($limitExtent$$1_minExtent$$ = $axis$$53$$.$getMinimumExtent$(), $max$$6_maxCoord$$6$$ - $center$$5_min$$6_minCoord$$6$$ < $limitExtent$$1_minExtent$$ && ($center$$5_min$$6_minCoord$$6$$ = ($max$$6_maxCoord$$6$$ + $center$$5_min$$6_minCoord$$6$$) / 2, $max$$6_maxCoord$$6$$ = $center$$5_min$$6_minCoord$$6$$ + $limitExtent$$1_minExtent$$ / 2, $center$$5_min$$6_minCoord$$6$$ -= $limitExtent$$1_minExtent$$ / 2), D.$DvtChartEventUtils$$.$_limitToGlobal$($axis$$53$$, 
  $center$$5_min$$6_minCoord$$6$$, $max$$6_maxCoord$$6$$)) : {min:$center$$5_min$$6_minCoord$$6$$, max:$max$$6_maxCoord$$6$$}
};
D.$DvtChartEventUtils$$.$getAxisBoundsByDelta$ = function $$DvtChartEventUtils$$$$getAxisBoundsByDelta$$($chart$$99$$, $deltas_xMinDelta$$, $xMaxDelta_xMinMax$$1$$, $yMinDelta_yMinMax$$1$$, $y2MinMax$$1_yMaxDelta$$) {
  $deltas_xMinDelta$$ = D.$DvtChartEventUtils$$.$_convertToAxisCoord$($chart$$99$$, $deltas_xMinDelta$$, $xMaxDelta_xMinMax$$1$$, $yMinDelta_yMinMax$$1$$, $y2MinMax$$1_yMaxDelta$$);
  $xMaxDelta_xMinMax$$1$$ = {};
  $yMinDelta_yMinMax$$1$$ = {};
  $y2MinMax$$1_yMaxDelta$$ = {};
  var $startEndGroup$$2$$ = {};
  $chart$$99$$.$xAxis$ && ($xMaxDelta_xMinMax$$1$$ = D.$DvtChartEventUtils$$.$_getAxisMinMaxByDelta$($chart$$99$$.$xAxis$, $deltas_xMinDelta$$.$xMin$, $deltas_xMinDelta$$.$xMax$), $startEndGroup$$2$$ = D.$DvtChartEventUtils$$.$getAxisStartEndGroup$($chart$$99$$.$xAxis$, $xMaxDelta_xMinMax$$1$$.min, $xMaxDelta_xMinMax$$1$$.max));
  $chart$$99$$.$yAxis$ && ($yMinDelta_yMinMax$$1$$ = D.$DvtChartEventUtils$$.$_getAxisMinMaxByDelta$($chart$$99$$.$yAxis$, $deltas_xMinDelta$$.$yMin$, $deltas_xMinDelta$$.$yMax$));
  $chart$$99$$.$y2Axis$ && ($y2MinMax$$1_yMaxDelta$$ = D.$DvtChartEventUtils$$.$_getAxisMinMaxByDelta$($chart$$99$$.$y2Axis$, $deltas_xMinDelta$$.$yMin$, $deltas_xMinDelta$$.$yMax$));
  return{$xMin$:$xMaxDelta_xMinMax$$1$$.min, $xMax$:$xMaxDelta_xMinMax$$1$$.max, $yMin$:$yMinDelta_yMinMax$$1$$.min, $yMax$:$yMinDelta_yMinMax$$1$$.max, $y2Min$:$y2MinMax$$1_yMaxDelta$$.min, $y2Max$:$y2MinMax$$1_yMaxDelta$$.max, $startGroup$:$startEndGroup$$2$$.$startGroup$, $endGroup$:$startEndGroup$$2$$.$endGroup$}
};
D.$DvtChartEventUtils$$.$_getAxisMinMaxByDelta$ = function $$DvtChartEventUtils$$$$_getAxisMinMaxByDelta$$($axis$$54$$, $minDelta$$, $maxDelta$$) {
  var $min$$7$$ = $axis$$54$$.$getViewportMin$(), $max$$7$$ = $axis$$54$$.$getViewportMax$();
  if($maxDelta$$ == $minDelta$$ && (0,D.$JSCompiler_StaticMethods_isFullViewport$$)($axis$$54$$)) {
    return{min:$min$$7$$, max:$max$$7$$}
  }
  var $minDeltaVal$$ = $axis$$54$$.$getUnboundedValueAt$($minDelta$$) - $axis$$54$$.$getUnboundedValueAt$(0), $maxDeltaVal$$ = $axis$$54$$.$getUnboundedValueAt$($maxDelta$$) - $axis$$54$$.$getUnboundedValueAt$(0), $weight$$ = 1;
  $minDelta$$ != $maxDelta$$ && $max$$7$$ + $maxDeltaVal$$ - ($min$$7$$ + $minDeltaVal$$) < $axis$$54$$.$getMinimumExtent$() && ($weight$$ = ($max$$7$$ - $min$$7$$ - $axis$$54$$.$getMinimumExtent$()) / ($minDeltaVal$$ - $maxDeltaVal$$));
  return D.$DvtChartEventUtils$$.$_limitToGlobal$($axis$$54$$, $min$$7$$ + $minDeltaVal$$ * $weight$$, $max$$7$$ + $maxDeltaVal$$ * $weight$$)
};
D.$DvtChartEventUtils$$.$_convertToAxisCoord$ = function $$DvtChartEventUtils$$$$_convertToAxisCoord$$($chart$$100$$, $xMin$$, $xMax$$, $yMin$$, $yMax$$) {
  var $axisCoord$$3$$ = {}, $isRTL$$24$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$100$$.$_context$);
  D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$100$$) ? ($axisCoord$$3$$.$xMin$ = $yMin$$, $axisCoord$$3$$.$xMax$ = $yMax$$, $axisCoord$$3$$.$yMin$ = $isRTL$$24$$ ? $xMax$$ : $xMin$$, $axisCoord$$3$$.$yMin$ = $isRTL$$24$$ ? $xMin$$ : $xMax$$) : ($axisCoord$$3$$.$xMin$ = $isRTL$$24$$ ? $xMax$$ : $xMin$$, $axisCoord$$3$$.$xMax$ = $isRTL$$24$$ ? $xMin$$ : $xMax$$, $axisCoord$$3$$.$yMin$ = $yMax$$, $axisCoord$$3$$.$yMax$ = $yMin$$);
  return $axisCoord$$3$$
};
D.$DvtChartEventUtils$$.$_limitToGlobal$ = function $$DvtChartEventUtils$$$$_limitToGlobal$$($axis$$55_globalMax$$, $min$$8$$, $max$$8$$) {
  var $globalMin$$ = $axis$$55_globalMax$$.$getGlobalMin$();
  $axis$$55_globalMax$$ = $axis$$55_globalMax$$.$getGlobalMax$();
  $max$$8$$ - $min$$8$$ >= $axis$$55_globalMax$$ - $globalMin$$ ? ($min$$8$$ = $globalMin$$, $max$$8$$ = $axis$$55_globalMax$$) : $min$$8$$ < $globalMin$$ ? ($max$$8$$ += $globalMin$$ - $min$$8$$, $min$$8$$ = $globalMin$$) : $max$$8$$ > $axis$$55_globalMax$$ && ($min$$8$$ -= $max$$8$$ - $axis$$55_globalMax$$, $max$$8$$ = $axis$$55_globalMax$$);
  return{min:$min$$8$$, max:$max$$8$$}
};
D.$DvtChartEventUtils$$.$getAxisStartEndGroup$ = function $$DvtChartEventUtils$$$$getAxisStartEndGroup$$($axis$$56$$, $min$$9_startIdx$$, $endIdx_max$$9$$) {
  return(0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($axis$$56$$) && ($min$$9_startIdx$$ = window.Math.ceil($min$$9_startIdx$$), $endIdx_max$$9$$ = window.Math.floor($endIdx_max$$9$$), $endIdx_max$$9$$ >= $min$$9_startIdx$$) ? {$startGroup$:(0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($axis$$56$$) ? $axis$$56$$.$Info$ ? (0,D.$JSCompiler_StaticMethods_getLabelAt$$)($axis$$56$$.$Info$, $min$$9_startIdx$$) : D.$JSCompiler_alias_NULL$$ : D.$JSCompiler_alias_NULL$$, $endGroup$:(0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($axis$$56$$) ? 
  $axis$$56$$.$Info$ ? (0,D.$JSCompiler_StaticMethods_getLabelAt$$)($axis$$56$$.$Info$, $endIdx_max$$9$$) : D.$JSCompiler_alias_NULL$$ : D.$JSCompiler_alias_NULL$$} : {$startGroup$:D.$JSCompiler_alias_NULL$$, $endGroup$:D.$JSCompiler_alias_NULL$$}
};
D.$DvtChartEventUtils$$.$setInitialSelection$ = function $$DvtChartEventUtils$$$$setInitialSelection$$($chart$$101$$, $selected$$19$$) {
  var $handler$$39$$ = $chart$$101$$.$getSelectionHandler$();
  if($handler$$39$$) {
    for(var $peers$$6$$ = $chart$$101$$.$getObjects$(), $selectedIds$$3$$ = [], $i$$474$$ = 0;$i$$474$$ < $selected$$19$$.length;$i$$474$$++) {
      for(var $j$$78$$ = 0;$j$$78$$ < $peers$$6$$.length;$j$$78$$++) {
        var $peer$$19$$ = $peers$$6$$[$j$$78$$];
        $peer$$19$$.$getSeries$() === $selected$$19$$[$i$$474$$].series && $peer$$19$$.$getGroup$() === $selected$$19$$[$i$$474$$].group && $selectedIds$$3$$.push($peer$$19$$.getId())
      }
    }
    (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($handler$$39$$, $selectedIds$$3$$, $peers$$6$$)
  }
};
D.$DvtChartEventUtils$$.$getKeyboardNavigables$ = function $$DvtChartEventUtils$$$$getKeyboardNavigables$$($chart$$102_peers$$7$$) {
  var $navigables$$6$$ = [];
  if(D.$DvtChartTypeUtils$$.$isPie$($chart$$102_peers$$7$$)) {
    for(var $slices$$5$$ = $chart$$102_peers$$7$$.$pieChart$.$_slices$, $i$$475$$ = 0;$i$$475$$ < $slices$$5$$.length;$i$$475$$++) {
      D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$102_peers$$7$$, $slices$$5$$[$i$$475$$].$getSeriesIndex$()) && $navigables$$6$$.push($slices$$5$$[$i$$475$$])
    }
  }else {
    $chart$$102_peers$$7$$ = $chart$$102_peers$$7$$.$getObjects$();
    for($i$$475$$ = 0;$i$$475$$ < $chart$$102_peers$$7$$.length;$i$$475$$++) {
      (0,D.$JSCompiler_StaticMethods_isNavigable$$)($chart$$102_peers$$7$$[$i$$475$$]) && $navigables$$6$$.push($chart$$102_peers$$7$$[$i$$475$$])
    }
  }
  return $navigables$$6$$
};
D.$DvtChartRefObjUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartRefObjUtils$$, D.$DvtObj$$, "DvtChartRefObjUtils");
D.$DvtChartRefObjUtils$$.$getObjects$ = function $$DvtChartRefObjUtils$$$$getObjects$$($chart$$103_y2$$18$$) {
  var $x$$154$$ = D.$DvtChartRefObjUtils$$.$getXAxisObjects$($chart$$103_y2$$18$$), $y$$129$$ = D.$DvtChartRefObjUtils$$.$getYAxisObjects$($chart$$103_y2$$18$$);
  $chart$$103_y2$$18$$ = D.$DvtChartRefObjUtils$$.$getY2AxisObjects$($chart$$103_y2$$18$$);
  return $x$$154$$.concat($y$$129$$, $chart$$103_y2$$18$$)
};
D.$DvtChartRefObjUtils$$.$getXAxisObjects$ = function $$DvtChartRefObjUtils$$$$getXAxisObjects$$($chart$$104_options$$142$$) {
  return($chart$$104_options$$142$$ = $chart$$104_options$$142$$.$getOptions$()) && $chart$$104_options$$142$$.xAxis && $chart$$104_options$$142$$.xAxis.referenceObjects ? $chart$$104_options$$142$$.xAxis.referenceObjects : []
};
D.$DvtChartRefObjUtils$$.$getYAxisObjects$ = function $$DvtChartRefObjUtils$$$$getYAxisObjects$$($chart$$105_options$$143$$) {
  return($chart$$105_options$$143$$ = $chart$$105_options$$143$$.$getOptions$()) && $chart$$105_options$$143$$.yAxis && $chart$$105_options$$143$$.yAxis.referenceObjects ? $chart$$105_options$$143$$.yAxis.referenceObjects : []
};
D.$DvtChartRefObjUtils$$.$getY2AxisObjects$ = function $$DvtChartRefObjUtils$$$$getY2AxisObjects$$($chart$$106_options$$144$$) {
  return($chart$$106_options$$144$$ = $chart$$106_options$$144$$.$getOptions$()) && $chart$$106_options$$144$$.y2Axis && $chart$$106_options$$144$$.y2Axis.referenceObjects ? $chart$$106_options$$144$$.y2Axis.referenceObjects : []
};
D.$DvtChartRefObjUtils$$.$getType$ = function $$DvtChartRefObjUtils$$$$getType$$($refObj$$4$$) {
  return"area" == $refObj$$4$$.type ? "area" : "line"
};
D.$DvtChartRefObjUtils$$.$getLocation$ = function $$DvtChartRefObjUtils$$$$getLocation$$($refObj$$5$$) {
  return"front" == $refObj$$5$$.location ? "front" : "back"
};
D.$DvtChartRefObjUtils$$.$getColor$ = function $$DvtChartRefObjUtils$$$$getColor$$($refObj$$6$$) {
  return $refObj$$6$$.color ? $refObj$$6$$.color : "#333333"
};
D.$DvtChartRefObjUtils$$.$getLineWidth$ = function $$DvtChartRefObjUtils$$$$getLineWidth$$($refObj$$7$$) {
  return $refObj$$7$$.lineWidth ? $refObj$$7$$.lineWidth : 1
};
D.$DvtChartRefObjUtils$$.$getLineType$ = function $$DvtChartRefObjUtils$$$$getLineType$$($refObj$$8$$) {
  return $refObj$$8$$.lineType ? $refObj$$8$$.lineType : "straight"
};
D.$DvtChartSeriesEffectUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartSeriesEffectUtils$$, D.$DvtObj$$, "DvtChartSeriesEffectUtils");
D.$DvtChartSeriesEffectUtils$$.$getBarFill$ = function $$DvtChartSeriesEffectUtils$$$$getBarFill$$($chart$$177_colors$$3$$, $pattern$$7_seriesIndex$$63$$, $groupIndex$$36_seriesEffect$$, $angle$$26_bHoriz$$8$$, $barWidth$$4$$) {
  var $color$$40_stops$$1$$ = D.$DvtChartStyleUtils$$.$getColor$($chart$$177_colors$$3$$, $pattern$$7_seriesIndex$$63$$, $groupIndex$$36_seriesEffect$$);
  $pattern$$7_seriesIndex$$63$$ = D.$DvtChartStyleUtils$$.$getPattern$($chart$$177_colors$$3$$, $pattern$$7_seriesIndex$$63$$, $groupIndex$$36_seriesEffect$$);
  $groupIndex$$36_seriesEffect$$ = D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$177_colors$$3$$);
  return $pattern$$7_seriesIndex$$63$$ ? new D.$DvtPatternFill$$($pattern$$7_seriesIndex$$63$$, $color$$40_stops$$1$$) : "gradient" == $groupIndex$$36_seriesEffect$$ && 3 < $barWidth$$4$$ ? ($angle$$26_bHoriz$$8$$ = $angle$$26_bHoriz$$8$$ ? 270 : 0, D.$DvtChartSeriesEffectUtils$$.$_useAltaGradients$($chart$$177_colors$$3$$) ? ($chart$$177_colors$$3$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$40_stops$$1$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$40_stops$$1$$, -0.04, -0.05)], $color$$40_stops$$1$$ = 
  [0, 1]) : ($chart$$177_colors$$3$$ = [D.$DvtColorUtils$$.$getPastel$($color$$40_stops$$1$$, 0.15), D.$DvtColorUtils$$.$getPastel$($color$$40_stops$$1$$, 0.45), D.$DvtColorUtils$$.$getPastel$($color$$40_stops$$1$$, 0.25), $color$$40_stops$$1$$, D.$DvtColorUtils$$.$getPastel$($color$$40_stops$$1$$, 0.15), D.$DvtColorUtils$$.$getDarker$($color$$40_stops$$1$$, 0.9)], $color$$40_stops$$1$$ = [0, 0.15, 0.3, 0.65, 0.85, 1]), new D.$DvtLinearGradientFill$$($angle$$26_bHoriz$$8$$, $chart$$177_colors$$3$$, 
  D.$JSCompiler_alias_NULL$$, $color$$40_stops$$1$$)) : new D.$DvtSolidFill$$($color$$40_stops$$1$$)
};
D.$DvtChartSeriesEffectUtils$$.$getAreaFill$ = function $$DvtChartSeriesEffectUtils$$$$getAreaFill$$($chart$$178$$, $seriesIndex$$64$$) {
  var $alpha$$23_colors$$4_isLineWithArea$$1$$ = "lineWithArea" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$178$$, $seriesIndex$$64$$), $color$$41_seriesItem$$19_stops$$2$$;
  ($color$$41_seriesItem$$19_stops$$2$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$178$$, $seriesIndex$$64$$)) && $color$$41_seriesItem$$19_stops$$2$$.areaColor ? $color$$41_seriesItem$$19_stops$$2$$ = $color$$41_seriesItem$$19_stops$$2$$.areaColor : ($color$$41_seriesItem$$19_stops$$2$$ = D.$DvtChartStyleUtils$$.$getColor$($chart$$178$$, $seriesIndex$$64$$), $alpha$$23_colors$$4_isLineWithArea$$1$$ && ($color$$41_seriesItem$$19_stops$$2$$ = D.$DvtColorUtils$$.$setAlpha$($color$$41_seriesItem$$19_stops$$2$$, 
  0.2)));
  var $angle$$27_pattern$$8$$ = D.$DvtChartStyleUtils$$.$getPattern$($chart$$178$$, $seriesIndex$$64$$), $seriesEffect$$1$$ = D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$178$$);
  return $angle$$27_pattern$$8$$ ? new D.$DvtPatternFill$$($angle$$27_pattern$$8$$, $color$$41_seriesItem$$19_stops$$2$$) : "gradient" == $seriesEffect$$1$$ ? ($angle$$27_pattern$$8$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$178$$) ? 180 : 270, $alpha$$23_colors$$4_isLineWithArea$$1$$ ? ($alpha$$23_colors$$4_isLineWithArea$$1$$ = D.$DvtColorUtils$$.$getAlpha$($color$$41_seriesItem$$19_stops$$2$$), $alpha$$23_colors$$4_isLineWithArea$$1$$ = [D.$DvtColorUtils$$.$setAlpha$($color$$41_seriesItem$$19_stops$$2$$, 
  window.Math.min($alpha$$23_colors$$4_isLineWithArea$$1$$ + 0.2, 1)), D.$DvtColorUtils$$.$setAlpha$($color$$41_seriesItem$$19_stops$$2$$, window.Math.max($alpha$$23_colors$$4_isLineWithArea$$1$$ - 0.15, 0))], $color$$41_seriesItem$$19_stops$$2$$ = [0, 1]) : D.$DvtChartSeriesEffectUtils$$.$_useAltaGradients$($chart$$178$$) ? ($alpha$$23_colors$$4_isLineWithArea$$1$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$41_seriesItem$$19_stops$$2$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$41_seriesItem$$19_stops$$2$$, 
  -0.04, -0.05)], $color$$41_seriesItem$$19_stops$$2$$ = [0, 1]) : ($alpha$$23_colors$$4_isLineWithArea$$1$$ = D.$DvtChartTypeUtils$$.$isSpark$($chart$$178$$) ? [D.$DvtColorUtils$$.$getDarker$($color$$41_seriesItem$$19_stops$$2$$, 0.5), $color$$41_seriesItem$$19_stops$$2$$, D.$DvtColorUtils$$.$getPastel$($color$$41_seriesItem$$19_stops$$2$$, 0.5)] : [D.$DvtColorUtils$$.$getPastel$($color$$41_seriesItem$$19_stops$$2$$, 0.5), $color$$41_seriesItem$$19_stops$$2$$, D.$DvtColorUtils$$.$getDarker$($color$$41_seriesItem$$19_stops$$2$$, 
  0.7)], $color$$41_seriesItem$$19_stops$$2$$ = [0, 0.5, 1]), new D.$DvtLinearGradientFill$$($angle$$27_pattern$$8$$, $alpha$$23_colors$$4_isLineWithArea$$1$$, D.$JSCompiler_alias_NULL$$, $color$$41_seriesItem$$19_stops$$2$$)) : new D.$DvtSolidFill$$($color$$41_seriesItem$$19_stops$$2$$)
};
D.$DvtChartSeriesEffectUtils$$.$getMarkerFill$ = function $$DvtChartSeriesEffectUtils$$$$getMarkerFill$$($chart$$179_linearColors_radialColors$$, $seriesIndex$$65$$, $groupIndex$$37$$) {
  var $color$$42$$ = D.$DvtChartStyleUtils$$.$getMarkerColor$($chart$$179_linearColors_radialColors$$, $seriesIndex$$65$$, $groupIndex$$37$$), $pattern$$9$$ = D.$DvtChartStyleUtils$$.$getPattern$($chart$$179_linearColors_radialColors$$, $seriesIndex$$65$$, $groupIndex$$37$$);
  if("bubble" == $chart$$179_linearColors_radialColors$$.$getType$()) {
    var $seriesEffect$$2$$ = D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$179_linearColors_radialColors$$);
    if($pattern$$9$$) {
      return new D.$DvtPatternFill$$($pattern$$9$$, $color$$42$$)
    }
    if("gradient" == $seriesEffect$$2$$) {
      if(D.$DvtChartSeriesEffectUtils$$.$_useAltaGradients$($chart$$179_linearColors_radialColors$$)) {
        return window.colors = [D.$DvtColorUtils$$.$adjustHSL$($color$$42$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$42$$, -0.04, -0.05)], window.stops = [0, 1], new D.$DvtLinearGradientFill$$(270, window.colors, D.$JSCompiler_alias_NULL$$, window.stops)
      }
      if("human" == D.$DvtChartStyleUtils$$.$getMarkerShape$($chart$$179_linearColors_radialColors$$, $seriesIndex$$65$$, $groupIndex$$37$$)) {
        return $chart$$179_linearColors_radialColors$$ = [D.$DvtColorUtils$$.$getPastel$($color$$42$$, 0.2), D.$DvtColorUtils$$.$getPastel$($color$$42$$, 0.1), $color$$42$$, D.$DvtColorUtils$$.$getDarker$($color$$42$$, 0.8)], new D.$DvtLinearGradientFill$$(315, $chart$$179_linearColors_radialColors$$, D.$JSCompiler_alias_NULL$$, [0, 0.3, 0.7, 1])
      }
      $chart$$179_linearColors_radialColors$$ = [D.$DvtColorUtils$$.$getPastel$($color$$42$$, 0.15), $color$$42$$, D.$DvtColorUtils$$.$getDarker$($color$$42$$, 0.9), D.$DvtColorUtils$$.$getDarker$($color$$42$$, 0.8)];
      return new D.$DvtRadialGradientFill$$($chart$$179_linearColors_radialColors$$, D.$JSCompiler_alias_NULL$$, [0, 0.5, 0.75, 1])
    }
  }
  return new D.$DvtSolidFill$$($color$$42$$)
};
D.$DvtChartSeriesEffectUtils$$.$getFunnelSliceFill$ = function $$DvtChartSeriesEffectUtils$$$$getFunnelSliceFill$$($chart$$180_colors$$5$$, $pattern$$10_seriesIndex$$66$$, $color$$43_stops$$3$$, $dimensions$$2_fill$$44$$, $bBackground$$) {
  $pattern$$10_seriesIndex$$66$$ = D.$DvtChartStyleUtils$$.$getPattern$($chart$$180_colors$$5$$, $pattern$$10_seriesIndex$$66$$, 0);
  var $seriesEffect$$3$$ = D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$180_colors$$5$$);
  return $pattern$$10_seriesIndex$$66$$ && !$bBackground$$ ? ($dimensions$$2_fill$$44$$ = new D.$DvtPatternFill$$($pattern$$10_seriesIndex$$66$$, $color$$43_stops$$3$$), "vertical" == $chart$$180_colors$$5$$.$getOptions$().orientation && ((0,D.$DvtAgent$isRightToLeft$$)($chart$$180_colors$$5$$.$_context$) ? $dimensions$$2_fill$$44$$.$setMatrix$(new D.$DvtMatrix$$(0, -1, 1, 0)) : $dimensions$$2_fill$$44$$.$setMatrix$(new D.$DvtMatrix$$(0, 1, -1, 0))), $dimensions$$2_fill$$44$$) : "gradient" == $seriesEffect$$3$$ ? 
  ("on" == $chart$$180_colors$$5$$.$getOptions$().styleDefaults.threeDEffect ? ($chart$$180_colors$$5$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$43_stops$$3$$, 0, -0.1), D.$DvtColorUtils$$.$adjustHSL$($color$$43_stops$$3$$, 0, 0.12), $color$$43_stops$$3$$], $color$$43_stops$$3$$ = [0, 0.65, 1]) : ($chart$$180_colors$$5$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$43_stops$$3$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$43_stops$$3$$, -0.04, -0.05)], $color$$43_stops$$3$$ = [0, 1]), new D.$DvtLinearGradientFill$$(90, 
  $chart$$180_colors$$5$$, D.$JSCompiler_alias_NULL$$, $color$$43_stops$$3$$, [$dimensions$$2_fill$$44$$.x, $dimensions$$2_fill$$44$$.y, $dimensions$$2_fill$$44$$.$w$, $dimensions$$2_fill$$44$$.$h$])) : new D.$DvtSolidFill$$($color$$43_stops$$3$$)
};
D.$DvtChartSeriesEffectUtils$$.$_useAltaGradients$ = function $$DvtChartSeriesEffectUtils$$$$_useAltaGradients$$($chart$$181$$) {
  return"skyros" != $chart$$181$$.$getOptions$().skin
};
D.$DvtChartStyleUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartStyleUtils$$, D.$DvtObj$$, "DvtChartStyleUtils");
D.$DvtChartStyleUtils$$.$_SERIES_TYPE_RAMP$ = ["bar", "line", "area"];
D.$DvtChartStyleUtils$$.$getSeriesType$ = function $$DvtChartStyleUtils$$$$getSeriesType$$($chart$$107$$, $seriesIndex$$32$$) {
  if(!D.$DvtChartTypeUtils$$.$isBLAC$($chart$$107$$)) {
    return"auto"
  }
  var $series$$16_seriesItem$$3_seriesType$$4_typeIndex$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$107$$, $seriesIndex$$32$$), $series$$16_seriesItem$$3_seriesType$$4_typeIndex$$ = $series$$16_seriesItem$$3_seriesType$$4_typeIndex$$ ? $series$$16_seriesItem$$3_seriesType$$4_typeIndex$$.type : D.$JSCompiler_alias_NULL$$;
  if(!$series$$16_seriesItem$$3_seriesType$$4_typeIndex$$ || "auto" == $series$$16_seriesItem$$3_seriesType$$4_typeIndex$$) {
    if(D.$DvtChartTypeUtils$$.$isBar$($chart$$107$$)) {
      return"bar"
    }
    if(D.$DvtChartTypeUtils$$.$isLine$($chart$$107$$)) {
      return"line"
    }
    if(D.$DvtChartTypeUtils$$.$isArea$($chart$$107$$)) {
      return"area"
    }
    if(D.$DvtChartTypeUtils$$.$isLineWithArea$($chart$$107$$)) {
      return"lineWithArea"
    }
    if(D.$DvtChartTypeUtils$$.$isCombo$($chart$$107$$)) {
      return $series$$16_seriesItem$$3_seriesType$$4_typeIndex$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$107$$, $seriesIndex$$32$$), $series$$16_seriesItem$$3_seriesType$$4_typeIndex$$ = D.$DvtChartDataUtils$$.$getSeriesStyleIndex$($chart$$107$$, $series$$16_seriesItem$$3_seriesType$$4_typeIndex$$) % D.$DvtChartStyleUtils$$.$_SERIES_TYPE_RAMP$.length, D.$DvtChartStyleUtils$$.$_SERIES_TYPE_RAMP$[$series$$16_seriesItem$$3_seriesType$$4_typeIndex$$]
    }
  }else {
    return $series$$16_seriesItem$$3_seriesType$$4_typeIndex$$
  }
};
D.$DvtChartStyleUtils$$.$getSeriesEffect$ = function $$DvtChartStyleUtils$$$$getSeriesEffect$$($chart$$108$$) {
  return $chart$$108$$.$getOptions$().styleDefaults.seriesEffect
};
D.$DvtChartStyleUtils$$.$getColor$ = function $$DvtChartStyleUtils$$$$getColor$$($chart$$109_colorIndex$$, $series$$17_seriesIndex$$33$$, $dataItem$$13_groupIndex$$20_options$$146_seriesItem$$4$$) {
  if(($dataItem$$13_groupIndex$$20_options$$146_seriesItem$$4$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$109_colorIndex$$, $series$$17_seriesIndex$$33$$, $dataItem$$13_groupIndex$$20_options$$146_seriesItem$$4$$)) && $dataItem$$13_groupIndex$$20_options$$146_seriesItem$$4$$.color || ($dataItem$$13_groupIndex$$20_options$$146_seriesItem$$4$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$109_colorIndex$$, $series$$17_seriesIndex$$33$$)) && $dataItem$$13_groupIndex$$20_options$$146_seriesItem$$4$$.color) {
    return $dataItem$$13_groupIndex$$20_options$$146_seriesItem$$4$$.color
  }
  $dataItem$$13_groupIndex$$20_options$$146_seriesItem$$4$$ = $chart$$109_colorIndex$$.$getOptions$();
  var $defaultColors$$ = $dataItem$$13_groupIndex$$20_options$$146_seriesItem$$4$$.styleDefaults.colors;
  $series$$17_seriesIndex$$33$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$109_colorIndex$$, $series$$17_seriesIndex$$33$$);
  $chart$$109_colorIndex$$ = D.$DvtChartDataUtils$$.$getSeriesStyleIndex$($chart$$109_colorIndex$$, $series$$17_seriesIndex$$33$$) % $defaultColors$$.length;
  return $dataItem$$13_groupIndex$$20_options$$146_seriesItem$$4$$.styleDefaults.colors[$chart$$109_colorIndex$$]
};
D.$DvtChartStyleUtils$$.$getPattern$ = function $$DvtChartStyleUtils$$$$getPattern$$($chart$$110_patternIndex$$, $series$$18_seriesIndex$$34$$, $dataItem$$14_groupIndex$$21_options$$147_seriesItem$$5$$) {
  if(D.$DvtChartTypeUtils$$.$isScatter$($chart$$110_patternIndex$$) || "line" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$110_patternIndex$$, $series$$18_seriesIndex$$34$$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  if(($dataItem$$14_groupIndex$$21_options$$147_seriesItem$$5$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$110_patternIndex$$, $series$$18_seriesIndex$$34$$, $dataItem$$14_groupIndex$$21_options$$147_seriesItem$$5$$)) && $dataItem$$14_groupIndex$$21_options$$147_seriesItem$$5$$.pattern && "auto" != $dataItem$$14_groupIndex$$21_options$$147_seriesItem$$5$$.pattern || ($dataItem$$14_groupIndex$$21_options$$147_seriesItem$$5$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$110_patternIndex$$, 
  $series$$18_seriesIndex$$34$$)) && $dataItem$$14_groupIndex$$21_options$$147_seriesItem$$5$$.pattern && "auto" != $dataItem$$14_groupIndex$$21_options$$147_seriesItem$$5$$.pattern) {
    return $dataItem$$14_groupIndex$$21_options$$147_seriesItem$$5$$.pattern
  }
  if("pattern" == D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$110_patternIndex$$)) {
    $dataItem$$14_groupIndex$$21_options$$147_seriesItem$$5$$ = $chart$$110_patternIndex$$.$getOptions$();
    var $defaultPatterns$$ = $dataItem$$14_groupIndex$$21_options$$147_seriesItem$$5$$.styleDefaults.patterns;
    $series$$18_seriesIndex$$34$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$110_patternIndex$$, $series$$18_seriesIndex$$34$$);
    $chart$$110_patternIndex$$ = D.$DvtChartDataUtils$$.$getSeriesStyleIndex$($chart$$110_patternIndex$$, $series$$18_seriesIndex$$34$$) % $defaultPatterns$$.length;
    return $dataItem$$14_groupIndex$$21_options$$147_seriesItem$$5$$.styleDefaults.patterns[$chart$$110_patternIndex$$]
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartStyleUtils$$.$getBorderColor$ = function $$DvtChartStyleUtils$$$$getBorderColor$$($chart$$111_markerColor$$, $seriesIndex$$35$$, $groupIndex$$22$$) {
  var $dataItem$$15_options$$148_seriesItem$$6$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$111_markerColor$$, $seriesIndex$$35$$, $groupIndex$$22$$);
  if($dataItem$$15_options$$148_seriesItem$$6$$ && $dataItem$$15_options$$148_seriesItem$$6$$.borderColor || ($dataItem$$15_options$$148_seriesItem$$6$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$111_markerColor$$, $seriesIndex$$35$$)) && $dataItem$$15_options$$148_seriesItem$$6$$.borderColor) {
    return $dataItem$$15_options$$148_seriesItem$$6$$.borderColor
  }
  $dataItem$$15_options$$148_seriesItem$$6$$ = $chart$$111_markerColor$$.$getOptions$();
  return"undefined" != typeof $dataItem$$15_options$$148_seriesItem$$6$$.styleDefaults.borderColor ? $dataItem$$15_options$$148_seriesItem$$6$$.styleDefaults.borderColor : "bubble" == $chart$$111_markerColor$$.$getType$() && "alta" == $chart$$111_markerColor$$.$getOptions$().skin && "gradient" != D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$111_markerColor$$) ? ($chart$$111_markerColor$$ = D.$DvtChartStyleUtils$$.$getMarkerColor$($chart$$111_markerColor$$, $seriesIndex$$35$$, $groupIndex$$22$$), 
  D.$DvtColorUtils$$.$adjustHSL$($chart$$111_markerColor$$, 0.15, -0.25)) : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartStyleUtils$$.$getMarkerColor$ = function $$DvtChartStyleUtils$$$$getMarkerColor$$($chart$$112$$, $seriesIndex$$36$$, $groupIndex$$23$$) {
  var $dataItem$$16_defaultMarkerColor_seriesItem$$7$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$112$$, $seriesIndex$$36$$, $groupIndex$$23$$);
  return $dataItem$$16_defaultMarkerColor_seriesItem$$7$$ && $dataItem$$16_defaultMarkerColor_seriesItem$$7$$.color ? $dataItem$$16_defaultMarkerColor_seriesItem$$7$$.color : ($dataItem$$16_defaultMarkerColor_seriesItem$$7$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$112$$, $seriesIndex$$36$$)) && $dataItem$$16_defaultMarkerColor_seriesItem$$7$$.markerColor ? $dataItem$$16_defaultMarkerColor_seriesItem$$7$$.markerColor : ($dataItem$$16_defaultMarkerColor_seriesItem$$7$$ = $chart$$112$$.$getOptions$().styleDefaults.markerColor) ? 
  $dataItem$$16_defaultMarkerColor_seriesItem$$7$$ : D.$DvtChartStyleUtils$$.$getColor$($chart$$112$$, $seriesIndex$$36$$, $groupIndex$$23$$)
};
D.$DvtChartStyleUtils$$.$getMarkerShape$ = function $$DvtChartStyleUtils$$$$getMarkerShape$$($chart$$113_styleIndex$$3$$, $series$$19_seriesIndex$$37$$, $dataItem$$17_groupIndex$$24$$) {
  var $options$$150_shapeRamp$$ = $chart$$113_styleIndex$$3$$.$getOptions$(), $shape$$37$$ = $options$$150_shapeRamp$$.styleDefaults.markerShape, $seriesItem$$8$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$113_styleIndex$$3$$, $series$$19_seriesIndex$$37$$);
  $seriesItem$$8$$ && $seriesItem$$8$$.markerShape && ($shape$$37$$ = $seriesItem$$8$$.markerShape);
  ($dataItem$$17_groupIndex$$24$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$113_styleIndex$$3$$, $series$$19_seriesIndex$$37$$, $dataItem$$17_groupIndex$$24$$)) && $dataItem$$17_groupIndex$$24$$.markerShape && ($shape$$37$$ = $dataItem$$17_groupIndex$$24$$.markerShape);
  "auto" == $shape$$37$$ && ("bubble" == $chart$$113_styleIndex$$3$$.$getType$() ? $shape$$37$$ = "circle" : ($series$$19_seriesIndex$$37$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$113_styleIndex$$3$$, $series$$19_seriesIndex$$37$$), $chart$$113_styleIndex$$3$$ = D.$DvtChartDataUtils$$.$getSeriesStyleIndex$($chart$$113_styleIndex$$3$$, $series$$19_seriesIndex$$37$$), $options$$150_shapeRamp$$ = $options$$150_shapeRamp$$.styleDefaults.shapes, $shape$$37$$ = $options$$150_shapeRamp$$[$chart$$113_styleIndex$$3$$ % 
  $options$$150_shapeRamp$$.length]));
  return $shape$$37$$
};
D.$DvtChartStyleUtils$$.$getMarkerSize$ = function $$DvtChartStyleUtils$$$$getMarkerSize$$($chart$$114_options$$151$$, $seriesIndex$$38_seriesItem$$9$$, $dataItem$$18_groupIndex$$25_markerSize$$3$$) {
  $dataItem$$18_groupIndex$$25_markerSize$$3$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$114_options$$151$$, $seriesIndex$$38_seriesItem$$9$$, $dataItem$$18_groupIndex$$25_markerSize$$3$$);
  $seriesIndex$$38_seriesItem$$9$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$114_options$$151$$, $seriesIndex$$38_seriesItem$$9$$);
  $chart$$114_options$$151$$ = $chart$$114_options$$151$$.$getOptions$();
  $dataItem$$18_groupIndex$$25_markerSize$$3$$ = $dataItem$$18_groupIndex$$25_markerSize$$3$$ && $dataItem$$18_groupIndex$$25_markerSize$$3$$.markerSize ? $dataItem$$18_groupIndex$$25_markerSize$$3$$.markerSize : $seriesIndex$$38_seriesItem$$9$$ && $seriesIndex$$38_seriesItem$$9$$.markerSize ? $seriesIndex$$38_seriesItem$$9$$.markerSize : $chart$$114_options$$151$$.styleDefaults.markerSize;
  $chart$$114_options$$151$$._isOverview && ($dataItem$$18_groupIndex$$25_markerSize$$3$$ = window.Math.ceil(0.6 * $dataItem$$18_groupIndex$$25_markerSize$$3$$));
  return $dataItem$$18_groupIndex$$25_markerSize$$3$$
};
D.$DvtChartStyleUtils$$.$isMarkerDisplayed$ = function $$DvtChartStyleUtils$$$$isMarkerDisplayed$$($chart$$115$$, $seriesIndex$$39$$, $dataItem$$19_displayed_groupIndex$$26$$) {
  $dataItem$$19_displayed_groupIndex$$26$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$115$$, $seriesIndex$$39$$, $dataItem$$19_displayed_groupIndex$$26$$);
  var $seriesItem$$10$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$115$$, $seriesIndex$$39$$);
  $dataItem$$19_displayed_groupIndex$$26$$ = $dataItem$$19_displayed_groupIndex$$26$$ && $dataItem$$19_displayed_groupIndex$$26$$.markerDisplayed != D.$JSCompiler_alias_NULL$$ ? $dataItem$$19_displayed_groupIndex$$26$$.markerDisplayed : $seriesItem$$10$$ && $seriesItem$$10$$.markerDisplayed != D.$JSCompiler_alias_NULL$$ ? $seriesItem$$10$$.markerDisplayed : $chart$$115$$.$getOptions$().styleDefaults.markerDisplayed;
  return"on" == $dataItem$$19_displayed_groupIndex$$26$$ ? D.$JSCompiler_alias_TRUE$$ : "off" == $dataItem$$19_displayed_groupIndex$$26$$ ? D.$JSCompiler_alias_FALSE$$ : D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$115$$) || "none" == D.$DvtChartStyleUtils$$.$getLineType$($chart$$115$$, $seriesIndex$$39$$)
};
D.$DvtChartStyleUtils$$.$getLineWidth$ = function $$DvtChartStyleUtils$$$$getLineWidth$$($chart$$116$$, $seriesIndex$$40$$) {
  var $lineWidth$$4_seriesItem$$11$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$116$$, $seriesIndex$$40$$), $options$$152$$ = $chart$$116$$.$getOptions$(), $lineWidth$$4_seriesItem$$11$$ = $lineWidth$$4_seriesItem$$11$$ && $lineWidth$$4_seriesItem$$11$$.lineWidth ? $lineWidth$$4_seriesItem$$11$$.lineWidth : $options$$152$$.styleDefaults.lineWidth ? $options$$152$$.styleDefaults.lineWidth : "lineWithArea" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$116$$, $seriesIndex$$40$$) ? 2 : 3;
  $options$$152$$._isOverview && ($lineWidth$$4_seriesItem$$11$$ = window.Math.ceil(0.6 * $lineWidth$$4_seriesItem$$11$$));
  return $lineWidth$$4_seriesItem$$11$$
};
D.$DvtChartStyleUtils$$.$getLineStyle$ = function $$DvtChartStyleUtils$$$$getLineStyle$$($chart$$117$$, $seriesIndex$$41$$) {
  var $seriesItem$$12$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$117$$, $seriesIndex$$41$$);
  return $seriesItem$$12$$ && $seriesItem$$12$$.lineStyle ? $seriesItem$$12$$.lineStyle : $chart$$117$$.$getOptions$().styleDefaults.lineStyle
};
D.$DvtChartStyleUtils$$.$getLineType$ = function $$DvtChartStyleUtils$$$$getLineType$$($chart$$118$$, $seriesIndex$$42$$) {
  var $lineType$$4_seriesItem$$13$$;
  $lineType$$4_seriesItem$$13$$ = ($lineType$$4_seriesItem$$13$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$118$$, $seriesIndex$$42$$)) && $lineType$$4_seriesItem$$13$$.lineType ? $lineType$$4_seriesItem$$13$$.lineType : $chart$$118$$.$getOptions$().styleDefaults.lineType;
  "auto" == $lineType$$4_seriesItem$$13$$ && ($lineType$$4_seriesItem$$13$$ = D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$118$$) ? "none" : "straight");
  D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$118$$) && ("none" != $lineType$$4_seriesItem$$13$$ && "straight" != $lineType$$4_seriesItem$$13$$ && "curved" != $lineType$$4_seriesItem$$13$$) && ($lineType$$4_seriesItem$$13$$ = "none");
  D.$DvtChartTypeUtils$$.$isPolar$($chart$$118$$) && ("centeredSegmented" == $lineType$$4_seriesItem$$13$$ && ($lineType$$4_seriesItem$$13$$ = "segmented"), "centeredStepped" == $lineType$$4_seriesItem$$13$$ && ($lineType$$4_seriesItem$$13$$ = "stepped"));
  return $lineType$$4_seriesItem$$13$$
};
D.$DvtChartStyleUtils$$.$getBarSpacing$ = function $$DvtChartStyleUtils$$$$getBarSpacing$$($chart$$119$$) {
  return $chart$$119$$.$getOptions$().__sparkBarSpacing
};
D.$DvtChartStyleUtils$$.$getBarWidth$ = function $$DvtChartStyleUtils$$$$getBarWidth$$($chart$$120$$, $barCount_barSeriesCount$$1$$, $axis$$57_barWidth$$1$$) {
  var $maxBarWidth_options$$155$$ = $chart$$120$$.$getOptions$(), $isPolar$$4$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$120$$);
  $barCount_barSeriesCount$$1$$ = D.$DvtChartTypeUtils$$.$isStacked$($chart$$120$$) ? D.$DvtChartTypeUtils$$.$hasY2BarData$($chart$$120$$) ? 2 : 1 : $barCount_barSeriesCount$$1$$;
  var $barGapRatio$$ = $maxBarWidth_options$$155$$.styleDefaults.barGapRatio;
  "string" == typeof $barGapRatio$$ && "%" == $barGapRatio$$.slice(-1) && ($barGapRatio$$ = (0,window.Number)($barGapRatio$$.slice(0, -1)) / 100);
  $barGapRatio$$ == D.$JSCompiler_alias_NULL$$ && ($barGapRatio$$ = $isPolar$$4$$ ? 1 == $barCount_barSeriesCount$$1$$ || D.$DvtChartTypeUtils$$.$isStacked$($chart$$120$$) ? 0 : 0.25 : 1 == $barCount_barSeriesCount$$1$$ ? 0.625 : 0.25);
  $axis$$57_barWidth$$1$$ = $axis$$57_barWidth$$1$$.$getGroupWidth$() * (1 - $barGapRatio$$) / $barCount_barSeriesCount$$1$$;
  $maxBarWidth_options$$155$$ = $maxBarWidth_options$$155$$.styleDefaults.maxBarWidth;
  $maxBarWidth_options$$155$$ != D.$JSCompiler_alias_NULL$$ && !$isPolar$$4$$ && ($axis$$57_barWidth$$1$$ = window.Math.min($axis$$57_barWidth$$1$$, $maxBarWidth_options$$155$$));
  "pixel" == D.$DvtChartStyleUtils$$.$getBarSpacing$($chart$$120$$) && ($axis$$57_barWidth$$1$$ = window.Math.max(window.Math.floor($axis$$57_barWidth$$1$$), 1));
  return $axis$$57_barWidth$$1$$
};
D.$DvtChartStyleUtils$$.$getBarOffset$ = function $$DvtChartStyleUtils$$$$getBarOffset$$($chart$$121$$, $barWidth$$2$$, $barSeriesCount$$2_offset$$20$$) {
  $barSeriesCount$$2_offset$$20$$ = -($barWidth$$2$$ * $barSeriesCount$$2_offset$$20$$ / 2);
  if(D.$DvtChartTypeUtils$$.$isStacked$($chart$$121$$) || D.$DvtChartDataUtils$$.$hasMixedFrequency$($chart$$121$$)) {
    $barSeriesCount$$2_offset$$20$$ = D.$DvtChartTypeUtils$$.$hasY2BarData$($chart$$121$$) ? (0,D.$DvtAgent$isRightToLeft$$)($chart$$121$$.$_context$) ? 0 : -$barWidth$$2$$ : -$barWidth$$2$$ / 2
  }
  return $barSeriesCount$$2_offset$$20$$
};
D.$DvtChartStyleUtils$$.$getY2BarOffset$ = function $$DvtChartStyleUtils$$$$getY2BarOffset$$($chart$$122$$, $barWidth$$3$$) {
  return D.$DvtChartTypeUtils$$.$isStacked$($chart$$122$$) ? (0,D.$DvtAgent$isRightToLeft$$)($chart$$122$$.$_context$) ? -$barWidth$$3$$ : $barWidth$$3$$ : 0
};
D.$DvtChartStyleUtils$$.$getVisibility$ = function $$DvtChartStyleUtils$$$$getVisibility$$($chart$$123$$, $seriesIndex$$43$$) {
  var $seriesItem$$14$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$123$$, $seriesIndex$$43$$);
  return $seriesItem$$14$$ && $seriesItem$$14$$.visibility ? $seriesItem$$14$$.visibility : "visible"
};
D.$DvtChartStyleUtils$$.$isSeriesRendered$ = function $$DvtChartStyleUtils$$$$isSeriesRendered$$($chart$$124$$, $seriesIndex$$44$$) {
  return"hidden" == D.$DvtChartStyleUtils$$.$getVisibility$($chart$$124$$, $seriesIndex$$44$$) ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartStyleUtils$$.$isDataItemRendered$ = function $$DvtChartStyleUtils$$$$isDataItemRendered$$($chart$$125_dataItem$$20$$, $i$$476_seriesIndex$$45$$, $groupIndex$$27$$) {
  if("hidden" == D.$DvtChartStyleUtils$$.$getVisibility$($chart$$125_dataItem$$20$$, $i$$476_seriesIndex$$45$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $hiddenCategories$$1$$ = D.$DvtChartStyleUtils$$.$getHiddenCategories$($chart$$125_dataItem$$20$$);
  $chart$$125_dataItem$$20$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$125_dataItem$$20$$, $i$$476_seriesIndex$$45$$, $groupIndex$$27$$);
  if(0 < $hiddenCategories$$1$$.length && $chart$$125_dataItem$$20$$ && $chart$$125_dataItem$$20$$.categories) {
    for($i$$476_seriesIndex$$45$$ = 0;$i$$476_seriesIndex$$45$$ < $chart$$125_dataItem$$20$$.categories.length;$i$$476_seriesIndex$$45$$++) {
      if(0 <= D.$DvtArrayUtils$$.$getIndex$($hiddenCategories$$1$$, $chart$$125_dataItem$$20$$.categories[$i$$476_seriesIndex$$45$$])) {
        return D.$JSCompiler_alias_FALSE$$
      }
    }
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartStyleUtils$$.$getAnimationOnDisplay$ = function $$DvtChartStyleUtils$$$$getAnimationOnDisplay$$($chart$$126$$) {
  return $chart$$126$$.$getOptions$().animationOnDisplay
};
D.$DvtChartStyleUtils$$.$getAnimationOnDataChange$ = function $$DvtChartStyleUtils$$$$getAnimationOnDataChange$$($chart$$127$$) {
  return $chart$$127$$.$getOptions$().animationOnDataChange
};
D.$DvtChartStyleUtils$$.$getAnimationDuration$ = function $$DvtChartStyleUtils$$$$getAnimationDuration$$($chart$$128$$) {
  return $chart$$128$$.$getOptions$().styleDefaults.animationDuration / 1E3
};
D.$DvtChartStyleUtils$$.$getAnimationIndicators$ = function $$DvtChartStyleUtils$$$$getAnimationIndicators$$($chart$$129$$) {
  return $chart$$129$$.$getOptions$().styleDefaults.animationIndicators
};
D.$DvtChartStyleUtils$$.$getAnimationUpColor$ = function $$DvtChartStyleUtils$$$$getAnimationUpColor$$($chart$$130$$) {
  return $chart$$130$$.$getOptions$().styleDefaults.animationUpColor
};
D.$DvtChartStyleUtils$$.$getAnimationDownColor$ = function $$DvtChartStyleUtils$$$$getAnimationDownColor$$($chart$$131$$) {
  return $chart$$131$$.$getOptions$().styleDefaults.animationDownColor
};
D.$DvtChartStyleUtils$$.$getHiddenCategories$ = function $$DvtChartStyleUtils$$$$getHiddenCategories$$($chart$$132_options$$156$$) {
  $chart$$132_options$$156$$ = $chart$$132_options$$156$$.$getOptions$();
  $chart$$132_options$$156$$._hiddenCategories || ($chart$$132_options$$156$$._hiddenCategories = []);
  return $chart$$132_options$$156$$._hiddenCategories
};
D.$DvtChartStyleUtils$$.$getSelectedInnerColor$ = function $$DvtChartStyleUtils$$$$getSelectedInnerColor$$($chart$$133$$) {
  return $chart$$133$$.$getOptions$().styleDefaults.selectedInnerColor
};
D.$DvtChartStyleUtils$$.$getSelectedOuterColor$ = function $$DvtChartStyleUtils$$$$getSelectedOuterColor$$($chart$$134$$) {
  return $chart$$134$$.$getOptions$().styleDefaults.selectedOuterColor
};
D.$DvtChartStyleUtils$$.$isSelectionHighlighted$ = function $$DvtChartStyleUtils$$$$isSelectionHighlighted$$($chart$$135_effect$$3$$) {
  $chart$$135_effect$$3$$ = $chart$$135_effect$$3$$.$getOptions$().styleDefaults.selectionEffect;
  return"highlight" == $chart$$135_effect$$3$$ || "highlightAndExplode" == $chart$$135_effect$$3$$
};
D.$DvtChartStyleUtils$$.$isSelectionExploded$ = function $$DvtChartStyleUtils$$$$isSelectionExploded$$($chart$$136_effect$$4$$) {
  $chart$$136_effect$$4$$ = $chart$$136_effect$$4$$.$getOptions$().styleDefaults.selectionEffect;
  return"explode" == $chart$$136_effect$$4$$ || "highlightAndExplode" == $chart$$136_effect$$4$$
};
D.$DvtChartStyleUtils$$.$getDataLabelStyle$ = function $$DvtChartStyleUtils$$$$getDataLabelStyle$$($chart$$137$$, $seriesIndex$$46$$, $groupIndex$$28$$, $dataColor$$10$$, $position$$25$$) {
  var $labelStyleArray$$1$$ = [], $contrastingColor$$;
  $dataColor$$10$$ && ("bar" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$137$$, $seriesIndex$$46$$) || D.$DvtChartTypeUtils$$.$isBubble$($chart$$137$$)) && ("center" == $position$$25$$ || "inBottom" == $position$$25$$ || "inTop" == $position$$25$$ || "inRight" == $position$$25$$ || "inLeft" == $position$$25$$) ? ($contrastingColor$$ = D.$DvtChartStyleUtils$$.$getPattern$($chart$$137$$, $seriesIndex$$46$$, $groupIndex$$28$$) != D.$JSCompiler_alias_NULL$$ ? "#000000" : D.$DvtColorUtils$$.$getContrastingTextColor$($dataColor$$10$$), 
  $labelStyleArray$$1$$.push(new D.$DvtCSSStyle$$("color: " + $contrastingColor$$ + ";"))) : $labelStyleArray$$1$$.push(new D.$DvtCSSStyle$$("color: #333333;"));
  $labelStyleArray$$1$$.push($chart$$137$$.$getOptions$().styleDefaults.dataLabelStyle);
  $labelStyleArray$$1$$.push(new D.$DvtCSSStyle$$(D.$DvtChartDataUtils$$.$getDataItem$($chart$$137$$, $seriesIndex$$46$$, $groupIndex$$28$$).labelStyle));
  $contrastingColor$$ && D.$DvtAgent$_highContrast$$ === D.$JSCompiler_alias_TRUE$$ && $labelStyleArray$$1$$.push(new D.$DvtCSSStyle$$("color: " + $contrastingColor$$ + ";"));
  return(0,D.$DvtCSSStyle$mergeStyles$$)($labelStyleArray$$1$$)
};
D.$DvtChartStyleUtils$$.$getDataLabelPosition$ = function $$DvtChartStyleUtils$$$$getDataLabelPosition$$($chart$$138$$, $bNegative_seriesIndex$$47$$, $groupIndex$$29$$) {
  var $position$$26$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$138$$, $bNegative_seriesIndex$$47$$, $groupIndex$$29$$).labelPosition;
  $position$$26$$ || ($position$$26$$ = $chart$$138$$.$getOptions$().styleDefaults.dataLabelPosition);
  var $bBidi$$1$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$138$$.$_context$);
  if("bar" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$138$$, $bNegative_seriesIndex$$47$$)) {
    if(D.$DvtChartTypeUtils$$.$isPolar$($chart$$138$$)) {
      return"center"
    }
    if("insideBarEdge" != $position$$26$$ && "center" != $position$$26$$) {
      if(D.$DvtChartTypeUtils$$.$isStacked$($chart$$138$$)) {
        return"center"
      }
      "outsideBarEdge" != $position$$26$$ && ($position$$26$$ = "insideBarEdge")
    }
    $bNegative_seriesIndex$$47$$ = 0 > D.$DvtChartDataUtils$$.getValue($chart$$138$$, $bNegative_seriesIndex$$47$$, $groupIndex$$29$$);
    return"outsideBarEdge" == $position$$26$$ ? D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$138$$) ? !$bNegative_seriesIndex$$47$$ && !$bBidi$$1$$ || $bNegative_seriesIndex$$47$$ && $bBidi$$1$$ ? "right" : "left" : $bNegative_seriesIndex$$47$$ ? "below" : "above" : "insideBarEdge" == $position$$26$$ ? D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$138$$) ? !$bNegative_seriesIndex$$47$$ && !$bBidi$$1$$ || $bNegative_seriesIndex$$47$$ && $bBidi$$1$$ ? "inRight" : "inLeft" : $bNegative_seriesIndex$$47$$ ? 
    "inBottom" : "inTop" : "center"
  }
  if("belowMarker" == $position$$26$$) {
    return"below"
  }
  if("aboveMarker" == $position$$26$$) {
    return"above"
  }
  if("afterMarker" != $position$$26$$ && "beforeMarker" != $position$$26$$ && "center" != $position$$26$$) {
    if(D.$DvtChartTypeUtils$$.$isBubble$($chart$$138$$)) {
      return"center"
    }
    $position$$26$$ = "afterMarker"
  }
  return!$bBidi$$1$$ && "afterMarker" == $position$$26$$ || $bBidi$$1$$ && "beforeMarker" == $position$$26$$ ? "right" : !$bBidi$$1$$ && "beforeMarker" == $position$$26$$ || $bBidi$$1$$ && "afterMarker" == $position$$26$$ ? "left" : "center"
};
D.$DvtChartStyleUtils$$.$isOverviewRendered$ = function $$DvtChartStyleUtils$$$$isOverviewRendered$$($chart$$139$$) {
  var $options$$157$$ = $chart$$139$$.$getOptions$();
  return D.$DvtChartTypeUtils$$.$isOverviewSupported$($chart$$139$$) && "off" != $options$$157$$.overview.rendered
};
D.$DvtChartStyleUtils$$.$getOverviewHeight$ = function $$DvtChartStyleUtils$$$$getOverviewHeight$$($chart$$140$$) {
  var $options$$158$$ = $chart$$140$$.$getOptions$(), $height$$84$$ = $options$$158$$.overview.height;
  $height$$84$$ == D.$JSCompiler_alias_NULL$$ && ($height$$84$$ = "disabled" == $options$$158$$.timeAxisType ? 0.2 : 0.25);
  return D.$DvtChartStyleUtils$$.$getSizeInPixels$($height$$84$$, $chart$$140$$.getHeight())
};
D.$DvtChartStyleUtils$$.$getSizeInPixels$ = function $$DvtChartStyleUtils$$$$getSizeInPixels$$($size$$29$$, $totalSize$$) {
  if("string" == typeof $size$$29$$) {
    if("%" == $size$$29$$.slice(-1)) {
      return $totalSize$$ * (0,window.Number)($size$$29$$.slice(0, -1)) / 100
    }
    if("px" == $size$$29$$.slice(-2)) {
      return(0,window.Number)($size$$29$$.slice(0, -2))
    }
    $size$$29$$ = (0,window.Number)($size$$29$$)
  }
  return(0,window.isNaN)($size$$29$$) ? 0 : 1 >= $size$$29$$ ? $totalSize$$ * $size$$29$$ : $size$$29$$
};
D.$DvtChartTextUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartTextUtils$$, D.$DvtObj$$, "DvtChartTextUtils");
D.$DvtChartTextUtils$$.$createText$ = function $$DvtChartTextUtils$$$$createText$$($eventManager$$16$$, $container$$108$$, $text$$58_textString$$1$$, $cssStyle$$7$$, $x$$156$$, $y$$132$$, $width$$98$$, $height$$87$$, $params$$55$$) {
  $text$$58_textString$$1$$ = new D.$DvtOutputText$$($container$$108$$.$_context$, $text$$58_textString$$1$$, $x$$156$$, $y$$132$$);
  $text$$58_textString$$1$$.$setCSSStyle$($cssStyle$$7$$);
  return D.$DvtTextUtils$$.$fitText$($text$$58_textString$$1$$, $width$$98$$, $height$$87$$, $container$$108$$) ? ($eventManager$$16$$.$associate$($text$$58_textString$$1$$, new D.$DvtSimpleObjPeer$$($text$$58_textString$$1$$.$_untruncatedTextString$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $params$$55$$)), $text$$58_textString$$1$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartTextUtils$$.$areTitlesRendered$ = function $$DvtChartTextUtils$$$$areTitlesRendered$$($chart$$166_options$$165$$) {
  $chart$$166_options$$165$$ = $chart$$166_options$$165$$.$getOptions$();
  return $chart$$166_options$$165$$.title.text || $chart$$166_options$$165$$.subtitle.text || $chart$$166_options$$165$$.footnote.text
};
D.$DvtChartTooltipUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartTooltipUtils$$, D.$DvtObj$$, "DvtChartTooltipUtils");
D.$DvtChartTooltipUtils$$.$_TYPE_X$ = "x";
D.$DvtChartTooltipUtils$$.$_TYPE_Y$ = "y";
D.$DvtChartTooltipUtils$$.$_TYPE_Y2$ = "y2";
D.$DvtChartTooltipUtils$$.$_TYPE_Z$ = "z";
D.$DvtChartTooltipUtils$$.$_TYPE_VALUE$ = "value";
D.$DvtChartTooltipUtils$$.$_TYPE_TARGET_VALUE$ = "targetValue";
D.$DvtChartTooltipUtils$$.$hasDatatips$ = function $$DvtChartTooltipUtils$$$$hasDatatips$$($chart$$158_options$$160$$) {
  $chart$$158_options$$160$$ = $chart$$158_options$$160$$.$getOptions$();
  return"none" == $chart$$158_options$$160$$.styleDefaults.seriesTooltipType && "none" == $chart$$158_options$$160$$.styleDefaults.groupTooltipType && "none" == $chart$$158_options$$160$$.styleDefaults.valueTooltipType ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartTooltipUtils$$.$getDatatipColor$ = function $$DvtChartTooltipUtils$$$$getDatatipColor$$($chart$$159$$, $seriesIndex$$58$$, $groupIndex$$30$$) {
  return D.$DvtChartStyleUtils$$.$getColor$($chart$$159$$, $seriesIndex$$58$$, $groupIndex$$30$$)
};
D.$DvtChartTooltipUtils$$.$getDatatip$ = function $$DvtChartTooltipUtils$$$$getDatatip$$($arTooltip_dataItem$$24_target$$67$$, $chart$$160$$, $seriesIndex$$59$$, $groupIndex$$31$$) {
  if(0 > $seriesIndex$$59$$ || 0 > $groupIndex$$31$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  if(($arTooltip_dataItem$$24_target$$67$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$160$$, $seriesIndex$$59$$, $groupIndex$$31$$)) && $arTooltip_dataItem$$24_target$$67$$.shortDesc) {
    return $arTooltip_dataItem$$24_target$$67$$.shortDesc
  }
  $arTooltip_dataItem$$24_target$$67$$ = [];
  D.$DvtChartTooltipUtils$$.$_addSeriesStrings$($arTooltip_dataItem$$24_target$$67$$, $chart$$160$$, $seriesIndex$$59$$);
  D.$DvtChartTooltipUtils$$.$_addGroupStrings$($arTooltip_dataItem$$24_target$$67$$, $chart$$160$$, $seriesIndex$$59$$, $groupIndex$$31$$);
  D.$DvtChartTooltipUtils$$.$_addValueStrings$($arTooltip_dataItem$$24_target$$67$$, $chart$$160$$, $seriesIndex$$59$$, $groupIndex$$31$$);
  return D.$DvtChartTooltipUtils$$.$_convertLinesToString$($arTooltip_dataItem$$24_target$$67$$)
};
D.$DvtChartTooltipUtils$$.$getOtherSliceDatatip$ = function $$DvtChartTooltipUtils$$$$getOtherSliceDatatip$$($chart$$161$$, $otherValue$$2$$) {
  var $arTooltip$$1$$ = [], $options$$161_val$$31$$ = $chart$$161$$.$getOptions$(), $bundle$$8_labelValue$$1$$ = $chart$$161$$.$getBundle$();
  if("none" != $options$$161_val$$31$$.styleDefaults.seriesTooltipType) {
    var $otherStr$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_labelValue$$1$$, "LABEL_OTHER", D.$JSCompiler_alias_NULL$$);
    $arTooltip$$1$$.push($otherStr$$)
  }
  D.$DvtChartTooltipUtils$$.$_addGroupStrings$($arTooltip$$1$$, $chart$$161$$, 0, 0);
  "none" != $options$$161_val$$31$$.styleDefaults.valueTooltipType && ($options$$161_val$$31$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$161_val$$31$$.valueFormats, D.$DvtChartTooltipUtils$$.$_TYPE_VALUE$, $otherValue$$2$$), $bundle$$8_labelValue$$1$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8_labelValue$$1$$, "LABEL_VALUE", $options$$161_val$$31$$), $arTooltip$$1$$.push($bundle$$8_labelValue$$1$$));
  return D.$DvtChartTooltipUtils$$.$_convertLinesToString$($arTooltip$$1$$)
};
D.$DvtChartTooltipUtils$$.$getRefObjTooltip$ = function $$DvtChartTooltipUtils$$$$getRefObjTooltip$$($refObj$$9$$) {
  if($refObj$$9$$.shortDesc) {
    return $refObj$$9$$.shortDesc
  }
};
D.$DvtChartTooltipUtils$$.$_addSeriesStrings$ = function $$DvtChartTooltipUtils$$$$_addSeriesStrings$$($arTooltip$$2$$, $chart$$163_labelSeries$$, $seriesIndex$$60_seriesLabel$$2$$) {
  if("none" != $chart$$163_labelSeries$$.$getOptions$().styleDefaults.seriesTooltipType) {
    var $bundle$$9$$ = $chart$$163_labelSeries$$.$getBundle$();
    if($seriesIndex$$60_seriesLabel$$2$$ = D.$DvtChartDataUtils$$.$getSeriesLabel$($chart$$163_labelSeries$$, $seriesIndex$$60_seriesLabel$$2$$)) {
      "funnel" == $chart$$163_labelSeries$$.$getType$() ? $arTooltip$$2$$.push($seriesIndex$$60_seriesLabel$$2$$) : ($chart$$163_labelSeries$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$9$$, "LABEL_SERIES", $seriesIndex$$60_seriesLabel$$2$$), $arTooltip$$2$$.push($chart$$163_labelSeries$$))
    }
  }
};
D.$DvtChartTooltipUtils$$.$_addGroupStrings$ = function $$DvtChartTooltipUtils$$$$_addGroupStrings$$($arTooltip$$3$$, $JSCompiler_StaticMethods_formatLabel$self$$inline_5508_JSCompiler_temp$$328_chart$$164_groupLabel$$1_twoLabels$$inline_5510$$, $bundle$$10_labelGroup_seriesIndex$$61$$, $groupIndex$$34$$) {
  var $options$$163$$ = $JSCompiler_StaticMethods_formatLabel$self$$inline_5508_JSCompiler_temp$$328_chart$$164_groupLabel$$1_twoLabels$$inline_5510$$.$getOptions$(), $dataItem$$25$$ = D.$DvtChartDataUtils$$.$getDataItem$($JSCompiler_StaticMethods_formatLabel$self$$inline_5508_JSCompiler_temp$$328_chart$$164_groupLabel$$1_twoLabels$$inline_5510$$, $bundle$$10_labelGroup_seriesIndex$$61$$, $groupIndex$$34$$);
  "none" == $options$$163$$.styleDefaults.groupTooltipType || D.$DvtChartTypeUtils$$.$isPie$($JSCompiler_StaticMethods_formatLabel$self$$inline_5508_JSCompiler_temp$$328_chart$$164_groupLabel$$1_twoLabels$$inline_5510$$) || ($bundle$$10_labelGroup_seriesIndex$$61$$ = $JSCompiler_StaticMethods_formatLabel$self$$inline_5508_JSCompiler_temp$$328_chart$$164_groupLabel$$1_twoLabels$$inline_5510$$.$getBundle$(), $options$$163$$.timeAxisType && "disabled" != $options$$163$$.timeAxisType ? ($JSCompiler_StaticMethods_formatLabel$self$$inline_5508_JSCompiler_temp$$328_chart$$164_groupLabel$$1_twoLabels$$inline_5510$$ = 
  $JSCompiler_StaticMethods_formatLabel$self$$inline_5508_JSCompiler_temp$$328_chart$$164_groupLabel$$1_twoLabels$$inline_5510$$.$xAxis$.$Info$, $JSCompiler_StaticMethods_formatLabel$self$$inline_5508_JSCompiler_temp$$328_chart$$164_groupLabel$$1_twoLabels$$inline_5510$$ = (0,D.$JSCompiler_StaticMethods__formatAxisLabel$$)($JSCompiler_StaticMethods_formatLabel$self$$inline_5508_JSCompiler_temp$$328_chart$$164_groupLabel$$1_twoLabels$$inline_5510$$, new window.Date($dataItem$$25$$.x + $JSCompiler_StaticMethods_formatLabel$self$$inline_5508_JSCompiler_temp$$328_chart$$164_groupLabel$$1_twoLabels$$inline_5510$$.$_timeZoneOffset$), 
  D.$JSCompiler_alias_NULL$$), $JSCompiler_StaticMethods_formatLabel$self$$inline_5508_JSCompiler_temp$$328_chart$$164_groupLabel$$1_twoLabels$$inline_5510$$ = $JSCompiler_StaticMethods_formatLabel$self$$inline_5508_JSCompiler_temp$$328_chart$$164_groupLabel$$1_twoLabels$$inline_5510$$[1] != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_formatLabel$self$$inline_5508_JSCompiler_temp$$328_chart$$164_groupLabel$$1_twoLabels$$inline_5510$$[0] + " " + $JSCompiler_StaticMethods_formatLabel$self$$inline_5508_JSCompiler_temp$$328_chart$$164_groupLabel$$1_twoLabels$$inline_5510$$[1] : 
  $JSCompiler_StaticMethods_formatLabel$self$$inline_5508_JSCompiler_temp$$328_chart$$164_groupLabel$$1_twoLabels$$inline_5510$$[0]) : $JSCompiler_StaticMethods_formatLabel$self$$inline_5508_JSCompiler_temp$$328_chart$$164_groupLabel$$1_twoLabels$$inline_5510$$ = D.$DvtChartDataUtils$$.$getGroupLabel$($JSCompiler_StaticMethods_formatLabel$self$$inline_5508_JSCompiler_temp$$328_chart$$164_groupLabel$$1_twoLabels$$inline_5510$$, $groupIndex$$34$$), $JSCompiler_StaticMethods_formatLabel$self$$inline_5508_JSCompiler_temp$$328_chart$$164_groupLabel$$1_twoLabels$$inline_5510$$ && 
  ($bundle$$10_labelGroup_seriesIndex$$61$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$10_labelGroup_seriesIndex$$61$$, "LABEL_GROUP", $JSCompiler_StaticMethods_formatLabel$self$$inline_5508_JSCompiler_temp$$328_chart$$164_groupLabel$$1_twoLabels$$inline_5510$$), $arTooltip$$3$$.push($bundle$$10_labelGroup_seriesIndex$$61$$)))
};
D.$DvtChartTooltipUtils$$.$_addValueStrings$ = function $$DvtChartTooltipUtils$$$$_addValueStrings$$($arTooltip$$4$$, $chart$$165_target$$68_type$$114_zValue$$, $labelY$$3_seriesIndex$$62_y1Value$$, $groupIndex$$35_labelX$$2_xValue$$3$$) {
  var $options$$164_valueFormats$$2$$ = $chart$$165_target$$68_type$$114_zValue$$.$getOptions$();
  if("none" != $options$$164_valueFormats$$2$$.styleDefaults.valueTooltipType) {
    var $bundle$$11_labelValue2_labelZ$$ = $chart$$165_target$$68_type$$114_zValue$$.$getBundle$(), $dataItem$$26_labelValue$$2_val$$32_yValue$$3$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$165_target$$68_type$$114_zValue$$, $labelY$$3_seriesIndex$$62_y1Value$$, $groupIndex$$35_labelX$$2_xValue$$3$$), $options$$164_valueFormats$$2$$ = $options$$164_valueFormats$$2$$.valueFormats;
    if("scatter" == $chart$$165_target$$68_type$$114_zValue$$.$getType$() || "bubble" == $chart$$165_target$$68_type$$114_zValue$$.$getType$()) {
      $groupIndex$$35_labelX$$2_xValue$$3$$ = $dataItem$$26_labelValue$$2_val$$32_yValue$$3$$.x, $labelY$$3_seriesIndex$$62_y1Value$$ = $dataItem$$26_labelValue$$2_val$$32_yValue$$3$$.y, $groupIndex$$35_labelX$$2_xValue$$3$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$164_valueFormats$$2$$, D.$DvtChartTooltipUtils$$.$_TYPE_X$, $groupIndex$$35_labelX$$2_xValue$$3$$), $labelY$$3_seriesIndex$$62_y1Value$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$164_valueFormats$$2$$, D.$DvtChartTooltipUtils$$.$_TYPE_Y$, 
      $labelY$$3_seriesIndex$$62_y1Value$$), $groupIndex$$35_labelX$$2_xValue$$3$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$11_labelValue2_labelZ$$, "LABEL_X", $groupIndex$$35_labelX$$2_xValue$$3$$), $labelY$$3_seriesIndex$$62_y1Value$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$11_labelValue2_labelZ$$, "LABEL_Y", $labelY$$3_seriesIndex$$62_y1Value$$), $arTooltip$$4$$.push($groupIndex$$35_labelX$$2_xValue$$3$$), $arTooltip$$4$$.push($labelY$$3_seriesIndex$$62_y1Value$$), 
      "bubble" == $chart$$165_target$$68_type$$114_zValue$$.$getType$() && ($chart$$165_target$$68_type$$114_zValue$$ = $dataItem$$26_labelValue$$2_val$$32_yValue$$3$$.z, $chart$$165_target$$68_type$$114_zValue$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$164_valueFormats$$2$$, D.$DvtChartTooltipUtils$$.$_TYPE_Z$, $chart$$165_target$$68_type$$114_zValue$$), $bundle$$11_labelValue2_labelZ$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$11_labelValue2_labelZ$$, "LABEL_Z", 
      $chart$$165_target$$68_type$$114_zValue$$), $arTooltip$$4$$.push($bundle$$11_labelValue2_labelZ$$))
    }else {
      if("pie" == $chart$$165_target$$68_type$$114_zValue$$.$getType$()) {
        $dataItem$$26_labelValue$$2_val$$32_yValue$$3$$ = D.$DvtChartDataUtils$$.getValue($chart$$165_target$$68_type$$114_zValue$$, $labelY$$3_seriesIndex$$62_y1Value$$, $groupIndex$$35_labelX$$2_xValue$$3$$), $dataItem$$26_labelValue$$2_val$$32_yValue$$3$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$164_valueFormats$$2$$, D.$DvtChartTooltipUtils$$.$_TYPE_VALUE$, $dataItem$$26_labelValue$$2_val$$32_yValue$$3$$), $dataItem$$26_labelValue$$2_val$$32_yValue$$3$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$11_labelValue2_labelZ$$, 
        "LABEL_VALUE", $dataItem$$26_labelValue$$2_val$$32_yValue$$3$$), $arTooltip$$4$$.push($dataItem$$26_labelValue$$2_val$$32_yValue$$3$$)
      }else {
        if("funnel" == $chart$$165_target$$68_type$$114_zValue$$.$getType$()) {
          if($dataItem$$26_labelValue$$2_val$$32_yValue$$3$$ = D.$DvtChartDataUtils$$.getValue($chart$$165_target$$68_type$$114_zValue$$, $labelY$$3_seriesIndex$$62_y1Value$$, $groupIndex$$35_labelX$$2_xValue$$3$$), $dataItem$$26_labelValue$$2_val$$32_yValue$$3$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$164_valueFormats$$2$$, D.$DvtChartTooltipUtils$$.$_TYPE_VALUE$, $dataItem$$26_labelValue$$2_val$$32_yValue$$3$$), $dataItem$$26_labelValue$$2_val$$32_yValue$$3$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$11_labelValue2_labelZ$$, 
          "LABEL_VALUE", $dataItem$$26_labelValue$$2_val$$32_yValue$$3$$), $arTooltip$$4$$.push($dataItem$$26_labelValue$$2_val$$32_yValue$$3$$), $chart$$165_target$$68_type$$114_zValue$$ = D.$DvtChartDataUtils$$.$getTargetValue$($chart$$165_target$$68_type$$114_zValue$$, $labelY$$3_seriesIndex$$62_y1Value$$)) {
            $chart$$165_target$$68_type$$114_zValue$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$164_valueFormats$$2$$, D.$DvtChartTooltipUtils$$.$_TYPE_TARGET_VALUE$, $chart$$165_target$$68_type$$114_zValue$$), $bundle$$11_labelValue2_labelZ$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$11_labelValue2_labelZ$$, "LABEL_TARGET_VALUE", $chart$$165_target$$68_type$$114_zValue$$), $arTooltip$$4$$.push($bundle$$11_labelValue2_labelZ$$)
          }
        }else {
          $dataItem$$26_labelValue$$2_val$$32_yValue$$3$$ = D.$DvtChartDataUtils$$.getValue($chart$$165_target$$68_type$$114_zValue$$, $labelY$$3_seriesIndex$$62_y1Value$$, $groupIndex$$35_labelX$$2_xValue$$3$$), $chart$$165_target$$68_type$$114_zValue$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$165_target$$68_type$$114_zValue$$, $labelY$$3_seriesIndex$$62_y1Value$$) ? D.$DvtChartTooltipUtils$$.$_TYPE_Y2$ : D.$DvtChartTooltipUtils$$.$_TYPE_Y$, $dataItem$$26_labelValue$$2_val$$32_yValue$$3$$ = 
          D.$DvtChartTooltipUtils$$.$_formatValue$($options$$164_valueFormats$$2$$, $chart$$165_target$$68_type$$114_zValue$$, $dataItem$$26_labelValue$$2_val$$32_yValue$$3$$), $bundle$$11_labelValue2_labelZ$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$11_labelValue2_labelZ$$, "LABEL_VALUE", $dataItem$$26_labelValue$$2_val$$32_yValue$$3$$), $arTooltip$$4$$.push($bundle$$11_labelValue2_labelZ$$)
        }
      }
    }
  }
};
D.$DvtChartTooltipUtils$$.$_convertLinesToString$ = function $$DvtChartTooltipUtils$$$$_convertLinesToString$$($arTooltip$$5$$) {
  for(var $ret$$86$$ = "", $i$$487$$ = 0;$i$$487$$ < $arTooltip$$5$$.length;$i$$487$$++) {
    0 < $ret$$86$$.length && ($ret$$86$$ += "\n"), $ret$$86$$ += $arTooltip$$5$$[$i$$487$$]
  }
  return $ret$$86$$
};
D.$DvtChartTooltipUtils$$.$_formatValue$ = function $$DvtChartTooltipUtils$$$$_formatValue$$($formatter$$1_valueFormats$$3$$, $type$$115$$, $value$$120$$, $min$$11$$, $max$$11$$, $majorIncrement$$1$$) {
  var $scaling$$3$$ = "auto", $autoPrecision$$7$$ = "on", $converter$$5$$;
  if($formatter$$1_valueFormats$$3$$) {
    for(var $i$$488$$ = 0;$i$$488$$ < $formatter$$1_valueFormats$$3$$.length;$i$$488$$++) {
      if($formatter$$1_valueFormats$$3$$[$i$$488$$].type == $type$$115$$) {
        $formatter$$1_valueFormats$$3$$[$i$$488$$].scaling && ($scaling$$3$$ = $formatter$$1_valueFormats$$3$$[$i$$488$$].scaling);
        $formatter$$1_valueFormats$$3$$[$i$$488$$].autoPrecision && ($autoPrecision$$7$$ = $formatter$$1_valueFormats$$3$$[$i$$488$$].autoPrecision);
        $formatter$$1_valueFormats$$3$$[$i$$488$$].converter && ($converter$$5$$ = $formatter$$1_valueFormats$$3$$[$i$$488$$].converter);
        break
      }
    }
  }
  $formatter$$1_valueFormats$$3$$ = new D.$DvtLinearScaleAxisValueFormatter$$($min$$11$$ != D.$JSCompiler_alias_NULL$$ ? $min$$11$$ : $value$$120$$, $max$$11$$ != D.$JSCompiler_alias_NULL$$ ? $max$$11$$ : $value$$120$$, $majorIncrement$$1$$ != D.$JSCompiler_alias_NULL$$ ? $majorIncrement$$1$$ : 0, $scaling$$3$$, $autoPrecision$$7$$);
  return $converter$$5$$ && ($converter$$5$$.getAsString || $converter$$5$$.format) ? $formatter$$1_valueFormats$$3$$.$format$($value$$120$$, $converter$$5$$) : $formatter$$1_valueFormats$$3$$.$format$($value$$120$$)
};
D.$DvtChartTypeUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartTypeUtils$$, D.$DvtObj$$, "DvtChartTypeUtils");
D.$DvtChartTypeUtils$$.$isSpark$ = function $$DvtChartTypeUtils$$$$isSpark$$($chart$$212$$) {
  return $chart$$212$$.$getOptions$().__spark
};
D.$DvtChartTypeUtils$$.$isCombo$ = function $$DvtChartTypeUtils$$$$isCombo$$($chart$$213$$) {
  return"combo" == $chart$$213$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isVertical$ = function $$DvtChartTypeUtils$$$$isVertical$$($chart$$214$$) {
  return!D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$214$$) && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$214$$)
};
D.$DvtChartTypeUtils$$.$isHorizontal$ = function $$DvtChartTypeUtils$$$$isHorizontal$$($chart$$215$$) {
  return"horizontal" == $chart$$215$$.$getOptions$().orientation && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$215$$) && (D.$DvtChartTypeUtils$$.$isBLAC$($chart$$215$$) || D.$DvtChartTypeUtils$$.$isFunnel$($chart$$215$$))
};
D.$DvtChartTypeUtils$$.$isPolar$ = function $$DvtChartTypeUtils$$$$isPolar$$($chart$$216$$) {
  return"polar" == $chart$$216$$.$getOptions$().coordinateSystem
};
D.$DvtChartTypeUtils$$.$isStacked$ = function $$DvtChartTypeUtils$$$$isStacked$$($chart$$217$$) {
  return"on" != $chart$$217$$.$getOptions$().stack || D.$DvtChartDataUtils$$.$hasMixedFrequency$($chart$$217$$) ? D.$JSCompiler_alias_FALSE$$ : D.$DvtChartTypeUtils$$.$isBLAC$($chart$$217$$)
};
D.$DvtChartTypeUtils$$.$isBar$ = function $$DvtChartTypeUtils$$$$isBar$$($chart$$218$$) {
  return"bar" == $chart$$218$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isLine$ = function $$DvtChartTypeUtils$$$$isLine$$($chart$$219$$) {
  return"line" == $chart$$219$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isLineWithArea$ = function $$DvtChartTypeUtils$$$$isLineWithArea$$($chart$$220$$) {
  return"lineWithArea" == $chart$$220$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isArea$ = function $$DvtChartTypeUtils$$$$isArea$$($chart$$221$$) {
  return"area" == $chart$$221$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isScatter$ = function $$DvtChartTypeUtils$$$$isScatter$$($chart$$222$$) {
  return"scatter" == $chart$$222$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isBubble$ = function $$DvtChartTypeUtils$$$$isBubble$$($chart$$223$$) {
  return"bubble" == $chart$$223$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isPie$ = function $$DvtChartTypeUtils$$$$isPie$$($chart$$224$$) {
  return"pie" == $chart$$224$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isFunnel$ = function $$DvtChartTypeUtils$$$$isFunnel$$($chart$$225$$) {
  return"funnel" == $chart$$225$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isDualY$ = function $$DvtChartTypeUtils$$$$isDualY$$($chart$$226$$) {
  return!D.$DvtChartTypeUtils$$.$hasAxes$($chart$$226$$) || D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$226$$) || D.$DvtChartTypeUtils$$.$isPolar$($chart$$226$$) ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartTypeUtils$$.$isBLAC$ = function $$DvtChartTypeUtils$$$$isBLAC$$($chart$$227_type$$119$$) {
  $chart$$227_type$$119$$ = $chart$$227_type$$119$$.$getType$();
  return"bar" == $chart$$227_type$$119$$ || "line" == $chart$$227_type$$119$$ || "area" == $chart$$227_type$$119$$ || "lineWithArea" == $chart$$227_type$$119$$ || "combo" == $chart$$227_type$$119$$
};
D.$DvtChartTypeUtils$$.$isScatterBubble$ = function $$DvtChartTypeUtils$$$$isScatterBubble$$($chart$$228_type$$120$$) {
  $chart$$228_type$$120$$ = $chart$$228_type$$120$$.$getType$();
  return"scatter" == $chart$$228_type$$120$$ || "bubble" == $chart$$228_type$$120$$
};
D.$DvtChartTypeUtils$$.$isLineArea$ = function $$DvtChartTypeUtils$$$$isLineArea$$($chart$$229_type$$121$$) {
  $chart$$229_type$$121$$ = $chart$$229_type$$121$$.$getType$();
  return"line" == $chart$$229_type$$121$$ || "area" == $chart$$229_type$$121$$ || "lineWithArea" == $chart$$229_type$$121$$
};
D.$DvtChartTypeUtils$$.$isTimeAxisSupported$ = function $$DvtChartTypeUtils$$$$isTimeAxisSupported$$($chart$$230$$) {
  return D.$DvtChartTypeUtils$$.$isBLAC$($chart$$230$$) && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$230$$)
};
D.$DvtChartTypeUtils$$.$isScrollSupported$ = function $$DvtChartTypeUtils$$$$isScrollSupported$$($chart$$231$$) {
  return!D.$DvtChartTypeUtils$$.$isPie$($chart$$231$$) && !D.$DvtChartTypeUtils$$.$isFunnel$($chart$$231$$) && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$231$$)
};
D.$DvtChartTypeUtils$$.$isOverviewSupported$ = function $$DvtChartTypeUtils$$$$isOverviewSupported$$($chart$$232$$) {
  return D.$DvtChartTypeUtils$$.$isBLAC$($chart$$232$$) && D.$DvtChartTypeUtils$$.$isVertical$($chart$$232$$)
};
D.$DvtChartTypeUtils$$.$isHorizScrollbarSupported$ = function $$DvtChartTypeUtils$$$$isHorizScrollbarSupported$$($chart$$233$$) {
  return D.$DvtChartTypeUtils$$.$isPolar$($chart$$233$$) ? D.$JSCompiler_alias_FALSE$$ : D.$DvtChartTypeUtils$$.$isBLAC$($chart$$233$$) && D.$DvtChartTypeUtils$$.$isVertical$($chart$$233$$) || D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$233$$)
};
D.$DvtChartTypeUtils$$.$isVertScrollbarSupported$ = function $$DvtChartTypeUtils$$$$isVertScrollbarSupported$$($chart$$234$$) {
  return D.$DvtChartTypeUtils$$.$isPolar$($chart$$234$$) ? D.$JSCompiler_alias_FALSE$$ : D.$DvtChartTypeUtils$$.$isBLAC$($chart$$234$$) && D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$234$$) || D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$234$$)
};
D.$DvtChartTypeUtils$$.$hasAxes$ = function $$DvtChartTypeUtils$$$$hasAxes$$($chart$$235$$) {
  return!("pie" == $chart$$235$$.$getType$() || "funnel" == $chart$$235$$.$getType$())
};
D.$DvtChartTypeUtils$$.$hasY2DataOnly$ = function $$DvtChartTypeUtils$$$$hasY2DataOnly$$($chart$$236$$) {
  if(!D.$DvtChartTypeUtils$$.$isDualY$($chart$$236$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $seriesCount$$23$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$236$$);
  if(0 == $seriesCount$$23$$) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $i$$498$$ = 0;$i$$498$$ < $seriesCount$$23$$;$i$$498$$++) {
    if(!D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$236$$, $i$$498$$)) {
      return D.$JSCompiler_alias_FALSE$$
    }
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartTypeUtils$$.$hasY2Data$ = function $$DvtChartTypeUtils$$$$hasY2Data$$($chart$$237$$, $type$$122$$) {
  if(!D.$DvtChartTypeUtils$$.$isDualY$($chart$$237$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $seriesCount$$24$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$237$$), $i$$499$$ = 0;$i$$499$$ < $seriesCount$$24$$;$i$$499$$++) {
    if(!($type$$122$$ && D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$237$$, $i$$499$$) != $type$$122$$) && D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$237$$, $i$$499$$)) {
      return D.$JSCompiler_alias_TRUE$$
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartTypeUtils$$.$hasY2BarData$ = function $$DvtChartTypeUtils$$$$hasY2BarData$$($chart$$238$$) {
  return D.$DvtChartTypeUtils$$.$hasY2Data$($chart$$238$$, "bar")
};
D.$DvtChartTypeUtils$$.$hasBarSeries$ = function $$DvtChartTypeUtils$$$$hasBarSeries$$($chart$$239$$) {
  return D.$DvtChartTypeUtils$$.$_hasSeriesType$($chart$$239$$, "bar")
};
D.$DvtChartTypeUtils$$.$hasLineSeries$ = function $$DvtChartTypeUtils$$$$hasLineSeries$$($chart$$240$$) {
  return D.$DvtChartTypeUtils$$.$_hasSeriesType$($chart$$240$$, "line")
};
D.$DvtChartTypeUtils$$.$hasAreaSeries$ = function $$DvtChartTypeUtils$$$$hasAreaSeries$$($chart$$241$$) {
  return D.$DvtChartTypeUtils$$.$_hasSeriesType$($chart$$241$$, "area")
};
D.$DvtChartTypeUtils$$.$hasLineWithAreaSeries$ = function $$DvtChartTypeUtils$$$$hasLineWithAreaSeries$$($chart$$242$$) {
  return D.$DvtChartTypeUtils$$.$_hasSeriesType$($chart$$242$$, "lineWithArea")
};
D.$DvtChartTypeUtils$$.$_hasSeriesType$ = function $$DvtChartTypeUtils$$$$_hasSeriesType$$($chart$$243$$, $type$$123$$) {
  if(D.$DvtChartTypeUtils$$.$isBLAC$($chart$$243$$)) {
    for(var $seriesCount$$25$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$243$$), $seriesIndex$$84$$ = 0;$seriesIndex$$84$$ < $seriesCount$$25$$;$seriesIndex$$84$$++) {
      if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$243$$, $seriesIndex$$84$$) && D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$243$$, $seriesIndex$$84$$) == $type$$123$$) {
        return D.$JSCompiler_alias_TRUE$$
      }
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartTypeUtils$$.$hasCenteredSeries$ = function $$DvtChartTypeUtils$$$$hasCenteredSeries$$($chart$$244$$) {
  if(!D.$DvtChartTypeUtils$$.$isBLAC$($chart$$244$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $seriesCount$$26$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$244$$), $seriesIndex$$85$$ = 0;$seriesIndex$$85$$ < $seriesCount$$26$$;$seriesIndex$$85$$++) {
    if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$244$$, $seriesIndex$$85$$) && "bar" != D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$244$$, $seriesIndex$$85$$)) {
      var $lineType$$6$$ = D.$DvtChartStyleUtils$$.$getLineType$($chart$$244$$, $seriesIndex$$85$$);
      if("centeredSegmented" == $lineType$$6$$ || "centeredStepped" == $lineType$$6$$) {
        return D.$JSCompiler_alias_TRUE$$
      }
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartTypeUtils$$.$hasUncenteredSeries$ = function $$DvtChartTypeUtils$$$$hasUncenteredSeries$$($chart$$245$$) {
  if(!D.$DvtChartTypeUtils$$.$isBLAC$($chart$$245$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $seriesCount$$27$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$245$$), $seriesIndex$$86$$ = 0;$seriesIndex$$86$$ < $seriesCount$$27$$;$seriesIndex$$86$$++) {
    if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$245$$, $seriesIndex$$86$$) && "bar" != D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$245$$, $seriesIndex$$86$$)) {
      var $lineType$$7$$ = D.$DvtChartStyleUtils$$.$getLineType$($chart$$245$$, $seriesIndex$$86$$);
      if("segmented" == $lineType$$7$$ || "stepped" == $lineType$$7$$) {
        return D.$JSCompiler_alias_TRUE$$
      }
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartTypeUtils$$.$isStandalonePlotArea$ = function $$DvtChartTypeUtils$$$$isStandalonePlotArea$$($chart$$246$$) {
  window.options = $chart$$246$$.$getOptions$();
  return D.$DvtChartTextUtils$$.$areTitlesRendered$($chart$$246$$) || "off" != window.options.legend.rendered || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$246$$, "x") || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$246$$, "y") || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$246$$, "y2") ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartTypeUtils$$.$isStandaloneXAxis$ = function $$DvtChartTypeUtils$$$$isStandaloneXAxis$$($chart$$247$$) {
  window.options = $chart$$247$$.$getOptions$();
  return D.$DvtChartTextUtils$$.$areTitlesRendered$($chart$$247$$) || "off" != window.options.legend.rendered || "off" != window.options.plotArea.rendered || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$247$$, "y") || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$247$$, "y2") ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartTypeUtils$$.$isStandaloneYAxis$ = function $$DvtChartTypeUtils$$$$isStandaloneYAxis$$($chart$$248$$) {
  window.options = $chart$$248$$.$getOptions$();
  return D.$DvtChartTextUtils$$.$areTitlesRendered$($chart$$248$$) || "off" != window.options.legend.rendered || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$248$$, "x") || "off" != window.options.plotArea.rendered || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$248$$, "y2") ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartTypeUtils$$.$isStandaloneY2Axis$ = function $$DvtChartTypeUtils$$$$isStandaloneY2Axis$$($chart$$249$$) {
  window.options = $chart$$249$$.$getOptions$();
  return D.$DvtChartTextUtils$$.$areTitlesRendered$($chart$$249$$) || "off" != window.options.legend.rendered || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$249$$, "x") || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$249$$, "y") || "off" != window.options.plotArea.rendered ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartMarkerUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartMarkerUtils$$, D.$DvtObj$$, "DvtChartMarkerUtils");
D.$DvtChartMarkerUtils$$.$_MIN_RADIUS$ = 5;
D.$DvtChartMarkerUtils$$.$_MAX_RADIUS_PERCENT$ = 0.125;
D.$DvtChartMarkerUtils$$.$_DEFAULT_MARKER_SIZE_PERCENT$ = 0.2;
D.$DvtChartMarkerUtils$$.$calcBubbleSizes$ = function $$DvtChartMarkerUtils$$$$calcBubbleSizes$$($chart$$141$$, $width$$96$$, $height$$85$$) {
  var $isPolar$$5$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$141$$), $minMax_xAxisValueRange$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($chart$$141$$, "z"), $minValue$$11$$ = $minMax_xAxisValueRange$$.min, $maxValue$$12_valueRange$$ = $minMax_xAxisValueRange$$.max, $minMax_xAxisValueRange$$ = D.$DvtChartMarkerUtils$$.$_getAxisValueRange$($chart$$141$$, "x"), $yAxisValueRange$$ = D.$DvtChartMarkerUtils$$.$_getAxisValueRange$($chart$$141$$, "y"), $axisWidth$$, $axisHeight$$1$$;
  $isPolar$$5$$ ? ($axisWidth$$ = window.Infinity, $axisHeight$$1$$ = $chart$$141$$.$getRadius$()) : ($axisWidth$$ = $width$$96$$ - 3 * D.$DvtChartAxisUtils$$.$getTickLabelFontSize$($chart$$141$$, "y"), $axisHeight$$1$$ = $height$$85$$ - 2 * D.$DvtChartAxisUtils$$.$getTickLabelFontSize$($chart$$141$$, "x"));
  var $minArea$$ = window.Math.PI * window.Math.pow(D.$DvtChartMarkerUtils$$.$_MIN_RADIUS$, 2), $areaRange_maxRadius$$1_minMaxArea$$ = D.$DvtChartMarkerUtils$$.$_MAX_RADIUS_PERCENT$ * window.Math.min($width$$96$$, $height$$85$$), $maxArea_maxMarkerSize_seriesCount$$14$$ = window.Math.PI * window.Math.pow($areaRange_maxRadius$$1_minMaxArea$$, 2), $areaRange_maxRadius$$1_minMaxArea$$ = D.$DvtChartMarkerUtils$$.$_adjustBubbleSizeRangeForCount$($chart$$141$$, $minArea$$, $maxArea_maxMarkerSize_seriesCount$$14$$, 
  $minValue$$11$$, $maxValue$$12_valueRange$$), $minArea$$ = $areaRange_maxRadius$$1_minMaxArea$$.minArea, $maxArea_maxMarkerSize_seriesCount$$14$$ = $areaRange_maxRadius$$1_minMaxArea$$.maxArea, $areaRange_maxRadius$$1_minMaxArea$$ = D.$DvtChartMarkerUtils$$.$_adjustBubbleSizeRangeForDataRange$($minArea$$, $maxArea_maxMarkerSize_seriesCount$$14$$, $minValue$$11$$, $maxValue$$12_valueRange$$), $minArea$$ = $areaRange_maxRadius$$1_minMaxArea$$.minArea, $maxArea_maxMarkerSize_seriesCount$$14$$ = $areaRange_maxRadius$$1_minMaxArea$$.maxArea, 
  $maxValue$$12_valueRange$$ = $maxValue$$12_valueRange$$ - $minValue$$11$$, $areaRange_maxRadius$$1_minMaxArea$$ = $maxArea_maxMarkerSize_seriesCount$$14$$ - $minArea$$, $maxArea_maxMarkerSize_seriesCount$$14$$ = 2 * window.Math.sqrt($maxArea_maxMarkerSize_seriesCount$$14$$ / window.Math.PI);
  $axisWidth$$ -= 0.75 * $maxArea_maxMarkerSize_seriesCount$$14$$;
  $axisHeight$$1$$ -= 0.75 * $maxArea_maxMarkerSize_seriesCount$$14$$;
  for(var $maxArea_maxMarkerSize_seriesCount$$14$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$141$$), $seriesIndex$$48$$ = 0;$seriesIndex$$48$$ < $maxArea_maxMarkerSize_seriesCount$$14$$;$seriesIndex$$48$$++) {
    if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$141$$, $seriesIndex$$48$$)) {
      for(var $seriesItem$$15$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$141$$, $seriesIndex$$48$$), $numGroups$$2$$ = $seriesItem$$15$$.items ? $seriesItem$$15$$.items.length : 0, $j$$79$$ = 0;$j$$79$$ < $numGroups$$2$$;$j$$79$$++) {
        var $dataItem$$21$$ = $seriesItem$$15$$.items[$j$$79$$];
        $dataItem$$21$$ && $dataItem$$21$$.z && (1 === $maxArea_maxMarkerSize_seriesCount$$14$$ && 1 === $numGroups$$2$$ ? ($dataItem$$21$$.markerSize = D.$DvtChartMarkerUtils$$.$_DEFAULT_MARKER_SIZE_PERCENT$ * window.Math.min($width$$96$$, $height$$85$$), $dataItem$$21$$._xAxisRadius = $isPolar$$5$$ ? 0 : 29, $dataItem$$21$$._yAxisRadius = 29) : ($dataItem$$21$$.markerSize = 2 * window.Math.sqrt(($minArea$$ + ($dataItem$$21$$.z - $minValue$$11$$) / $maxValue$$12_valueRange$$ * $areaRange_maxRadius$$1_minMaxArea$$) / 
        window.Math.PI), $dataItem$$21$$._xAxisRadius = 0.5 * ($dataItem$$21$$.markerSize / $axisWidth$$) * $minMax_xAxisValueRange$$, $dataItem$$21$$._yAxisRadius = 0.5 * ($dataItem$$21$$.markerSize / $axisHeight$$1$$) * $yAxisValueRange$$))
      }
    }
  }
};
D.$DvtChartMarkerUtils$$.$_getAxisValueRange$ = function $$DvtChartMarkerUtils$$$$_getAxisValueRange$$($chart$$142$$, $type$$113$$) {
  var $axisOptions$$4_max$$10$$ = $chart$$142$$.$getOptions$()[$type$$113$$ + "Axis"], $zeroBaseline$$2$$ = "zero" == $axisOptions$$4_max$$10$$.baselineScaling, $minMax$$1$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($chart$$142$$, $type$$113$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$), $min$$10$$ = $axisOptions$$4_max$$10$$.min;
  $min$$10$$ == D.$JSCompiler_alias_NULL$$ && ($min$$10$$ = $zeroBaseline$$2$$ ? window.Math.min(0, $minMax$$1$$.min) : $minMax$$1$$.min);
  $axisOptions$$4_max$$10$$ = $axisOptions$$4_max$$10$$.max;
  $axisOptions$$4_max$$10$$ == D.$JSCompiler_alias_NULL$$ && ($axisOptions$$4_max$$10$$ = $zeroBaseline$$2$$ ? window.Math.max(0, $minMax$$1$$.max) : $minMax$$1$$.max);
  return $axisOptions$$4_max$$10$$ == $min$$10$$ ? 60 : $axisOptions$$4_max$$10$$ - $min$$10$$
};
D.$DvtChartMarkerUtils$$.$sortMarkers$ = function $$DvtChartMarkerUtils$$$$sortMarkers$$($markers$$7$$) {
  $markers$$7$$.sort(D.$DvtChartMarkerUtils$$.$_compareSize$)
};
D.$DvtChartMarkerUtils$$.$_compareSize$ = function $$DvtChartMarkerUtils$$$$_compareSize$$($a$$36$$, $b$$19$$) {
  var $aSize$$ = $a$$36$$.$getSize$(), $bSize$$ = $b$$19$$.$getSize$();
  return $aSize$$ > $bSize$$ ? -1 : $aSize$$ < $bSize$$ ? 1 : 0
};
D.$DvtChartMarkerUtils$$.$_adjustBubbleSizeRangeForCount$ = function $$DvtChartMarkerUtils$$$$_adjustBubbleSizeRangeForCount$$($avgRelSize_chart$$143_s2$$2$$, $minArea$$1$$, $maxArea$$1$$, $minValue$$12_s1_t1$$, $maxValue$$13_t2$$) {
  for(var $bubbleCount$$ = 0, $sizeTotal$$ = 0, $seriesCount$$15$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($avgRelSize_chart$$143_s2$$2$$), $seriesIndex$$49$$ = 0;$seriesIndex$$49$$ < $seriesCount$$15$$;$seriesIndex$$49$$++) {
    if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($avgRelSize_chart$$143_s2$$2$$, $seriesIndex$$49$$)) {
      for(var $seriesItem$$16$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($avgRelSize_chart$$143_s2$$2$$, $seriesIndex$$49$$), $numDataItems$$ = $seriesItem$$16$$.items.length, $j$$80$$ = 0;$j$$80$$ < $numDataItems$$;$j$$80$$++) {
        var $dataItem$$22$$ = $seriesItem$$16$$.items[$seriesIndex$$49$$];
        $dataItem$$22$$ && $dataItem$$22$$.z && ($bubbleCount$$++, $sizeTotal$$ += $dataItem$$22$$.z)
      }
    }
  }
  $avgRelSize_chart$$143_s2$$2$$ = ($sizeTotal$$ / $bubbleCount$$ - $minValue$$12_s1_t1$$) / ($maxValue$$13_t2$$ - $minValue$$12_s1_t1$$);
  $minValue$$12_s1_t1$$ = 15 + window.Math.floor(30 * (1 - $avgRelSize_chart$$143_s2$$2$$));
  $maxValue$$13_t2$$ = 30 + window.Math.floor(150 * (1 - $avgRelSize_chart$$143_s2$$2$$));
  $bubbleCount$$ >= $maxValue$$13_t2$$ ? $maxArea$$1$$ = $minArea$$1$$ + 0.15 * ($maxArea$$1$$ - $minArea$$1$$) : $bubbleCount$$ >= $minValue$$12_s1_t1$$ && ($maxArea$$1$$ -= 0.85 / ($maxValue$$13_t2$$ - $minValue$$12_s1_t1$$) * ($bubbleCount$$ - $minValue$$12_s1_t1$$) * ($maxArea$$1$$ - $minArea$$1$$));
  $minValue$$12_s1_t1$$ = 5 + window.Math.floor(15 * (1 - $avgRelSize_chart$$143_s2$$2$$));
  $avgRelSize_chart$$143_s2$$2$$ = 30 + window.Math.floor(70 * (1 - $avgRelSize_chart$$143_s2$$2$$));
  $bubbleCount$$ < $minValue$$12_s1_t1$$ ? $minArea$$1$$ += 0.005 * ($maxArea$$1$$ - $minArea$$1$$) : $bubbleCount$$ < $avgRelSize_chart$$143_s2$$2$$ && ($minArea$$1$$ += (0.005 - 0.005 / ($avgRelSize_chart$$143_s2$$2$$ - $minValue$$12_s1_t1$$) * ($bubbleCount$$ - $minValue$$12_s1_t1$$)) * ($maxArea$$1$$ - $minArea$$1$$));
  return{minArea:$minArea$$1$$, maxArea:$maxArea$$1$$}
};
D.$DvtChartMarkerUtils$$.$_adjustBubbleSizeRangeForDataRange$ = function $$DvtChartMarkerUtils$$$$_adjustBubbleSizeRangeForDataRange$$($minArea$$2$$, $maxArea$$2$$, $buffer$$8_minValue$$13$$, $maxValue$$14$$) {
  if(0 != $maxValue$$14$$ - $buffer$$8_minValue$$13$$) {
    var $bubbleRatio$$ = $maxArea$$2$$ / $minArea$$2$$, $dataRatio$$ = $bubbleRatio$$;
    0 < $maxValue$$14$$ && 0 < $buffer$$8_minValue$$13$$ ? $dataRatio$$ = $maxValue$$14$$ / $buffer$$8_minValue$$13$$ : 0 > $buffer$$8_minValue$$13$$ && 0 > $maxValue$$14$$ && ($dataRatio$$ = $buffer$$8_minValue$$13$$ / $maxValue$$14$$);
    $dataRatio$$ < $bubbleRatio$$ && ($buffer$$8_minValue$$13$$ = $maxArea$$2$$ / $dataRatio$$ - $minArea$$2$$, 0 < $buffer$$8_minValue$$13$$ && ($minArea$$2$$ += $buffer$$8_minValue$$13$$))
  }else {
    $minArea$$2$$ = $maxArea$$2$$
  }
  return{minArea:$minArea$$2$$, maxArea:$maxArea$$2$$}
};
D.$DvtPieChartUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtPieChartUtils$$, D.$DvtObj$$, "DvtPieChartUtils");
D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$ = "_dvtOther";
D.$DvtPieChartUtils$$.$getSliceId$ = function $$DvtPieChartUtils$$$$getSliceId$$($chart$$145$$, $seriesIndex$$50$$) {
  var $dataItem$$23_id$$116$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$145$$, $seriesIndex$$50$$, 0), $dataItem$$23_id$$116$$ = $dataItem$$23_id$$116$$ ? $dataItem$$23_id$$116$$.id : D.$JSCompiler_alias_NULL$$, $series$$20$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$145$$, $seriesIndex$$50$$), $group$$11$$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$145$$, 0);
  return new D.$DvtChartDataItem$$($dataItem$$23_id$$116$$, $series$$20$$, $group$$11$$)
};
D.$DvtPieChartUtils$$.$getOtherSliceId$ = function $$DvtPieChartUtils$$$$getOtherSliceId$$($chart$$146_group$$12$$) {
  $chart$$146_group$$12$$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$146_group$$12$$, 0);
  return new D.$DvtChartDataItem$$(D.$JSCompiler_alias_NULL$$, D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$, $chart$$146_group$$12$$)
};
D.$DvtPieChartUtils$$.$getRenderedSeriesIndices$ = function $$DvtPieChartUtils$$$$getRenderedSeriesIndices$$($chart$$147$$) {
  return D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$147$$).$rendered$
};
D.$DvtPieChartUtils$$.$hasOtherSeries$ = function $$DvtPieChartUtils$$$$hasOtherSeries$$($chart$$148$$) {
  return 0 < D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$148$$).$other$.length
};
D.$DvtPieChartUtils$$.$getOtherValue$ = function $$DvtPieChartUtils$$$$getOtherValue$$($chart$$149$$) {
  for(var $otherSeries$$ = D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$149$$).$other$, $otherValue$$1$$ = 0, $i$$477$$ = 0;$i$$477$$ < $otherSeries$$.length;$i$$477$$++) {
    var $seriesIndex$$51_value$$116$$ = $otherSeries$$[$i$$477$$];
    D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$149$$, $seriesIndex$$51_value$$116$$) && ($seriesIndex$$51_value$$116$$ = D.$DvtChartDataUtils$$.getValue($chart$$149$$, $seriesIndex$$51_value$$116$$, 0), 0 < $seriesIndex$$51_value$$116$$ && ($otherValue$$1$$ += $seriesIndex$$51_value$$116$$))
  }
  return $otherValue$$1$$
};
D.$DvtPieChartUtils$$.$getOtherSliceIds$ = function $$DvtPieChartUtils$$$$getOtherSliceIds$$($chart$$150$$) {
  for(var $otherSeries$$1$$ = D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$150$$).$other$, $seriesIds$$ = [], $i$$478$$ = 0;$i$$478$$ < $otherSeries$$1$$.length;$i$$478$$++) {
    $seriesIds$$.push(D.$DvtPieChartUtils$$.$getSliceId$($chart$$150$$, $otherSeries$$1$$[$i$$478$$]))
  }
  return $seriesIds$$
};
D.$DvtPieChartUtils$$.$getOtherSliceVisibility$ = function $$DvtPieChartUtils$$$$getOtherSliceVisibility$$($chart$$151$$) {
  for(var $otherSeries$$2$$ = D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$151$$).$other$, $i$$479$$ = 0;$i$$479$$ < $otherSeries$$2$$.length;$i$$479$$++) {
    if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$151$$, $otherSeries$$2$$[$i$$479$$])) {
      return"visible"
    }
  }
  return"hidden"
};
D.$DvtPieChartUtils$$.$setOtherSliceVisibility$ = function $$DvtPieChartUtils$$$$setOtherSliceVisibility$$($chart$$152$$, $visibility$$3$$) {
  for(var $otherSeries$$3$$ = D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$152$$).$other$, $i$$480$$ = 0;$i$$480$$ < $otherSeries$$3$$.length;$i$$480$$++) {
    D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$152$$, $otherSeries$$3$$[$i$$480$$]).visibility = $visibility$$3$$
  }
};
D.$DvtPieChartUtils$$.$isOtherSliceSelected$ = function $$DvtPieChartUtils$$$$isOtherSliceSelected$$($chart$$153$$, $selected$$20$$) {
  for(var $otherIds$$ = D.$DvtPieChartUtils$$.$getOtherSliceIds$($chart$$153$$), $j$$81$$ = 0;$j$$81$$ < $otherIds$$.length;$j$$81$$++) {
    for(var $sliceId$$1$$ = $otherIds$$[$j$$81$$], $sliceSelected$$ = D.$JSCompiler_alias_FALSE$$, $i$$481$$ = 0;$i$$481$$ < $selected$$20$$.length;$i$$481$$++) {
      if($selected$$20$$[$i$$481$$].id && $sliceId$$1$$.getId() === $selected$$20$$[$i$$481$$].id || $sliceId$$1$$.$getSeries$() === $selected$$20$$[$i$$481$$].series && $sliceId$$1$$.$getGroup$() === $selected$$20$$[$i$$481$$].group) {
        $sliceSelected$$ = D.$JSCompiler_alias_TRUE$$;
        break
      }
    }
    if(!$sliceSelected$$) {
      return D.$JSCompiler_alias_FALSE$$
    }
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$ = function $$DvtPieChartUtils$$$$_getSeriesIndicesArrays$$($chart$$154$$) {
  for(var $renderedSeries$$ = [], $otherSeries$$4$$ = [], $seriesCount$$16$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$154$$), $options$$159$$ = $chart$$154$$.$getOptions$(), $otherThreshold$$ = $options$$159$$.otherThreshold * D.$DvtPieChartUtils$$.$getTotalValue$($chart$$154$$), $seriesIndex$$55$$ = 0;$seriesIndex$$55$$ < $seriesCount$$16$$;$seriesIndex$$55$$++) {
    var $value$$117$$ = D.$DvtChartDataUtils$$.getValue($chart$$154$$, $seriesIndex$$55$$, 0);
    0 < $otherThreshold$$ && $value$$117$$ < $otherThreshold$$ ? $otherSeries$$4$$.push($seriesIndex$$55$$) : $renderedSeries$$.push($seriesIndex$$55$$)
  }
  "on" == $options$$159$$.sorting && $renderedSeries$$.sort(function($renderedSeries$$, $otherSeries$$4$$) {
    return D.$DvtChartDataUtils$$.getValue($chart$$154$$, $otherSeries$$4$$, 0) - D.$DvtChartDataUtils$$.getValue($chart$$154$$, $renderedSeries$$, 0)
  });
  return{$rendered$:$renderedSeries$$, $other$:$otherSeries$$4$$}
};
D.$DvtPieChartUtils$$.$getTotalValue$ = function $$DvtPieChartUtils$$$$getTotalValue$$($chart$$155$$) {
  for(var $seriesCount$$17$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$155$$), $totalValue$$1$$ = 0, $seriesIndex$$56$$ = 0;$seriesIndex$$56$$ < $seriesCount$$17$$;$seriesIndex$$56$$++) {
    var $value$$118$$ = D.$DvtChartDataUtils$$.getValue($chart$$155$$, $seriesIndex$$56$$, 0);
    0 < $value$$118$$ && ($totalValue$$1$$ += $value$$118$$)
  }
  return $totalValue$$1$$
};
D.$DvtPieChartUtils$$.$getSliceExplode$ = function $$DvtPieChartUtils$$$$getSliceExplode$$($chart$$156$$, $seriesIndex$$57$$) {
  var $seriesItem$$18$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$156$$, $seriesIndex$$57$$);
  return $seriesItem$$18$$ && $seriesItem$$18$$.pieSliceExplode ? $seriesItem$$18$$.pieSliceExplode : 0
};
D.$DvtPieChartUtils$$.$getOtherSliceShowPopupBehaviors$ = function $$DvtPieChartUtils$$$$getOtherSliceShowPopupBehaviors$$($chart$$157$$) {
  var $firstDataItemSeriesIndex_otherSliceIds_stampId$$12$$ = D.$DvtPieChartUtils$$.$getOtherSliceIds$($chart$$157$$);
  if($firstDataItemSeriesIndex_otherSliceIds_stampId$$12$$ && 1 <= $firstDataItemSeriesIndex_otherSliceIds_stampId$$12$$.length) {
    return $firstDataItemSeriesIndex_otherSliceIds_stampId$$12$$ = D.$DvtChartDataUtils$$.$getSeriesIndex$($chart$$157$$, $firstDataItemSeriesIndex_otherSliceIds_stampId$$12$$[0].$getSeries$()), $firstDataItemSeriesIndex_otherSliceIds_stampId$$12$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$157$$, $firstDataItemSeriesIndex_otherSliceIds_stampId$$12$$, 0)._id, $chart$$157$$.$getShowPopupBehaviors$($firstDataItemSeriesIndex_otherSliceIds_stampId$$12$$)
  }
};
D.$DvtPieRenderUtils$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtPieRenderUtils$$, D.$DvtObj$$, "DvtPieRenderUtils");
D.$DvtPieRenderUtils$$.$TWOD$ = "2D";
D.$DvtPieRenderUtils$$.$THREED$ = "3D";
D.$DvtPieRenderUtils$$.$CRUST$ = "CRUST";
D.$DvtPieRenderUtils$$.$SIDE$ = "SIDE";
D.$DvtPieRenderUtils$$.$BORDER$ = "BORDER";
D.$DvtPieRenderUtils$$.$SURFACE_CRUST$ = 0;
D.$DvtPieRenderUtils$$.$SURFACE_LEFT$ = 1;
D.$DvtPieRenderUtils$$.$SURFACE_RIGHT$ = 2;
D.$DvtPieRenderUtils$$.$SURFACE_TOP$ = 3;
D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$ = function $$DvtPieRenderUtils$$$$reflectAngleOverYAxis$$($angle$$21_radian$$1$$, $cx$$22$$, $cy$$22$$, $rx$$19$$, $ry$$15$$) {
  $angle$$21_radian$$1$$ = D.$DvtMath$$.$degreesToRads$(360 - $angle$$21_radian$$1$$);
  return{x:$cx$$22$$ + window.Math.cos($angle$$21_radian$$1$$) * $rx$$19$$, y:$cy$$22$$ + window.Math.sin($angle$$21_radian$$1$$) * $ry$$15$$}
};
D.$DvtPieRenderUtils$$.$getGradientColors$ = function $$DvtPieRenderUtils$$$$getGradientColors$$($baseColor_c3$$, $arColors$$17_style$$32$$, $c$$16_skin$$1$$) {
  if($c$$16_skin$$1$$ && "skyros" != $c$$16_skin$$1$$) {
    if($arColors$$17_style$$32$$ == D.$DvtPieRenderUtils$$.$TWOD$ || $arColors$$17_style$$32$$ == D.$DvtPieRenderUtils$$.$THREED$) {
      return[D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, -0.04, -0.05), D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, -0.09, 0.04)]
    }
    if($arColors$$17_style$$32$$ == D.$DvtPieRenderUtils$$.$CRUST$) {
      return[D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, -0.04, -0.05), D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, 0, -0.14)]
    }
    if($arColors$$17_style$$32$$ == D.$DvtPieRenderUtils$$.$SIDE$) {
      return[D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, -0.1, 0.06), D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, -0.04, -0.05)]
    }
  }else {
    if($arColors$$17_style$$32$$ == D.$DvtPieRenderUtils$$.$TWOD$) {
      return $arColors$$17_style$$32$$ = [], $arColors$$17_style$$32$$[0] = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getPastel$($baseColor_c3$$, 0.1)), $arColors$$17_style$$32$$[1] = $arColors$$17_style$$32$$[0], $arColors$$17_style$$32$$[2] = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getDarker$($baseColor_c3$$, 0.9)), $arColors$$17_style$$32$$
    }
    if($arColors$$17_style$$32$$ == D.$DvtPieRenderUtils$$.$BORDER$) {
      return["#FFFFFF", "#000000", "#000000"]
    }
    $c$$16_skin$$1$$ = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getDarker$($baseColor_c3$$, 0.88));
    var $c1$$3$$ = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getPastel$($baseColor_c3$$, 0.05)), $c2$$3$$ = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getPastel$($baseColor_c3$$, 0.15));
    $baseColor_c3$$ = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getPastel$($baseColor_c3$$, 0.35));
    if($arColors$$17_style$$32$$ == D.$DvtPieRenderUtils$$.$CRUST$) {
      return[$c$$16_skin$$1$$, $c2$$3$$, $baseColor_c3$$, $c$$16_skin$$1$$]
    }
    if("SIDE" == $arColors$$17_style$$32$$) {
      return[$c$$16_skin$$1$$, $baseColor_c3$$]
    }
    if("3D" == $arColors$$17_style$$32$$) {
      return[$baseColor_c3$$, $c2$$3$$, $c$$16_skin$$1$$, $c1$$3$$, $baseColor_c3$$]
    }
  }
};
D.$DvtPieRenderUtils$$.$getGradientAlphas$ = function $$DvtPieRenderUtils$$$$getGradientAlphas$$($baseAlpha$$, $style$$33$$) {
  var $alpha$$22$$ = $baseAlpha$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($baseAlpha$$) || 0 == $baseAlpha$$ ? 1 : $baseAlpha$$;
  if($style$$33$$ == D.$DvtPieRenderUtils$$.$TWOD$) {
    return[$alpha$$22$$, $alpha$$22$$, $alpha$$22$$]
  }
  if($style$$33$$ == D.$DvtPieRenderUtils$$.$BORDER$) {
    return[$alpha$$22$$ / 1.59375, $alpha$$22$$ / 5.3125, $alpha$$22$$ / 2.65625]
  }
  if($style$$33$$ == D.$DvtPieRenderUtils$$.$THREED$) {
    return[$alpha$$22$$, $alpha$$22$$, $alpha$$22$$, $alpha$$22$$, $alpha$$22$$]
  }
  if($style$$33$$ == D.$DvtPieRenderUtils$$.$CRUST$) {
    return[$alpha$$22$$, $alpha$$22$$, $alpha$$22$$, $alpha$$22$$]
  }
  if($style$$33$$ == D.$DvtPieRenderUtils$$.$SIDE$) {
    return[$alpha$$22$$, $alpha$$22$$]
  }
};
D.$DvtPieRenderUtils$$.$getGradientRatios$ = function $$DvtPieRenderUtils$$$$getGradientRatios$$($style$$34$$, $skin$$2$$) {
  if($skin$$2$$ && "skyros" != $skin$$2$$) {
    return[0, 1]
  }
  if($style$$34$$ == D.$DvtPieRenderUtils$$.$TWOD$) {
    return[0.2, 0.5, 1]
  }
  if($style$$34$$ == D.$DvtPieRenderUtils$$.$BORDER$) {
    return[0, 0.5, 1]
  }
  if($style$$34$$ == D.$DvtPieRenderUtils$$.$THREED$) {
    return[0, 0.29, 0.55, 0.84, 1]
  }
  if($style$$34$$ == D.$DvtPieRenderUtils$$.$CRUST$) {
    return[0, 0.43, 0.91, 1]
  }
  if($style$$34$$ == D.$DvtPieRenderUtils$$.$SIDE$) {
    return[0, 1]
  }
};
D.$DvtPieRenderUtils$$.$createTopSurface$ = function $$DvtPieRenderUtils$$$$createTopSurface$$($slice$$11$$, $fill$$41$$) {
  var $edge_pieChart$$4$$ = $slice$$11$$.$_pieChart$, $context$$269_shapes$$4_wedge$$ = $edge_pieChart$$4$$.$_context$, $pieCenter$$ = $edge_pieChart$$4$$.$getCenter$(), $sliceClosureType$$ = "PIE";
  360 == $slice$$11$$.$getAngleExtent$() && ($sliceClosureType$$ = "OPEN");
  $context$$269_shapes$$4_wedge$$ = new D.$DvtGraphSelectableArc$$($context$$269_shapes$$4_wedge$$, $pieCenter$$.x, $pieCenter$$.y, $slice$$11$$.$_radiusX$, $slice$$11$$.$_radiusY$, $slice$$11$$.$getAngleStart$(), $slice$$11$$.$getAngleExtent$(), $sliceClosureType$$);
  $context$$269_shapes$$4_wedge$$.$setDataColor$($slice$$11$$.$getFillColor$(), D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($edge_pieChart$$4$$.$chart$), D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($edge_pieChart$$4$$.$chart$));
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$269_shapes$$4_wedge$$, $slice$$11$$.$_explodeOffsetX$, $slice$$11$$.$_explodeOffsetY$);
  $context$$269_shapes$$4_wedge$$.$setFill$($fill$$41$$);
  $slice$$11$$.$getStrokeColor$() && $context$$269_shapes$$4_wedge$$.$setSolidStroke$($slice$$11$$.$getStrokeColor$());
  $context$$269_shapes$$4_wedge$$ = [$context$$269_shapes$$4_wedge$$];
  if(!$slice$$11$$.$getStrokeColor$() && "skyros" == $edge_pieChart$$4$$.$getSkin$() && (0,D.$JSCompiler_StaticMethods_is3D$$)($edge_pieChart$$4$$) && 0 < $edge_pieChart$$4$$.$getDepth$() && "gradient" == D.$DvtChartStyleUtils$$.$getSeriesEffect$($edge_pieChart$$4$$.$chart$) && (180 <= $slice$$11$$.$getAngleStart$() || 180 <= $slice$$11$$.$getAngleStart$() + $slice$$11$$.$getAngleExtent$() || 360 == $slice$$11$$.$getAngleExtent$())) {
    $edge_pieChart$$4$$ = D.$DvtPieRenderUtils$$.$_createGradientPieBorder$($slice$$11$$, $fill$$41$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($edge_pieChart$$4$$, $slice$$11$$.$_explodeOffsetX$, $slice$$11$$.$_explodeOffsetY$), $context$$269_shapes$$4_wedge$$.push($edge_pieChart$$4$$)
  }
  D.$DvtPieRenderUtils$$.$associate$($slice$$11$$, $context$$269_shapes$$4_wedge$$);
  return $context$$269_shapes$$4_wedge$$
};
D.$DvtPieRenderUtils$$.$associate$ = function $$DvtPieRenderUtils$$$$associate$$($slice$$12$$, $displayables$$11$$) {
  if($displayables$$11$$) {
    for(var $i$$468$$ = 0;$i$$468$$ < $displayables$$11$$.length;$i$$468$$++) {
      $slice$$12$$.$_pieChart$.$chart$.$getEventManager$().$associate$($displayables$$11$$[$i$$468$$], $slice$$12$$)
    }
  }
};
D.$DvtPieRenderUtils$$.$_createGradientPieBorder$ = function $$DvtPieRenderUtils$$$$_createGradientPieBorder$$($slice$$13$$, $topFill$$1$$) {
  var $angExtent_arRatios$$1_diff$$4_style$$35$$ = D.$DvtPieRenderUtils$$.$BORDER$, $arColors$$18_gradBorder$$ = D.$DvtPieRenderUtils$$.$getGradientColors$(D.$JSCompiler_alias_NULL$$, $angExtent_arRatios$$1_diff$$4_style$$35$$), $angStart_arAlphas$$15_edge$$1_sliceAngleStart$$ = D.$DvtPieRenderUtils$$.$getGradientAlphas$(D.$JSCompiler_alias_NULL$$, $angExtent_arRatios$$1_diff$$4_style$$35$$), $angExtent_arRatios$$1_diff$$4_style$$35$$ = D.$DvtPieRenderUtils$$.$getGradientRatios$($angExtent_arRatios$$1_diff$$4_style$$35$$), 
  $arBounds$$3_pieChart$$5$$ = $topFill$$1$$.$getBounds$();
  window.grAngle = 120;
  $arColors$$18_gradBorder$$ = new D.$DvtLinearGradientStroke$$(window.grAngle, $arColors$$18_gradBorder$$, $angStart_arAlphas$$15_edge$$1_sliceAngleStart$$, $angExtent_arRatios$$1_diff$$4_style$$35$$, $arBounds$$3_pieChart$$5$$);
  $arColors$$18_gradBorder$$.$setWidth$(1);
  $angStart_arAlphas$$15_edge$$1_sliceAngleStart$$ = $slice$$13$$.$getAngleStart$();
  $angExtent_arRatios$$1_diff$$4_style$$35$$ = 180 > $angStart_arAlphas$$15_edge$$1_sliceAngleStart$$ ? 180 - $angStart_arAlphas$$15_edge$$1_sliceAngleStart$$ : 0;
  $angStart_arAlphas$$15_edge$$1_sliceAngleStart$$ = 0 < $angExtent_arRatios$$1_diff$$4_style$$35$$ ? 180 : $angStart_arAlphas$$15_edge$$1_sliceAngleStart$$;
  $angExtent_arRatios$$1_diff$$4_style$$35$$ = $slice$$13$$.$getAngleExtent$() - $angExtent_arRatios$$1_diff$$4_style$$35$$;
  360 < $angStart_arAlphas$$15_edge$$1_sliceAngleStart$$ + $angExtent_arRatios$$1_diff$$4_style$$35$$ && ($angExtent_arRatios$$1_diff$$4_style$$35$$ = 360 - $angStart_arAlphas$$15_edge$$1_sliceAngleStart$$);
  var $arBounds$$3_pieChart$$5$$ = $slice$$13$$.$_pieChart$, $pieCenter$$1$$ = $arBounds$$3_pieChart$$5$$.$getCenter$(), $angStart_arAlphas$$15_edge$$1_sliceAngleStart$$ = new D.$DvtArc$$($arBounds$$3_pieChart$$5$$.$_context$, $pieCenter$$1$$.x, $pieCenter$$1$$.y, $arBounds$$3_pieChart$$5$$.$_radiusX$, $arBounds$$3_pieChart$$5$$.$_radiusY$, $angStart_arAlphas$$15_edge$$1_sliceAngleStart$$, $angExtent_arRatios$$1_diff$$4_style$$35$$, "OPEN");
  $angStart_arAlphas$$15_edge$$1_sliceAngleStart$$.$setStroke$($arColors$$18_gradBorder$$);
  return $angStart_arAlphas$$15_edge$$1_sliceAngleStart$$
};
D.$DvtPieRenderUtils$$.$createLateralSurface$ = function $$DvtPieRenderUtils$$$$createLateralSurface$$($slice$$14$$, $pathType$$, $fill$$42$$) {
  if(0 == $slice$$14$$.$getAngleExtent$()) {
    return[]
  }
  var $shapes$$5$$ = [];
  if(0 < D.$DvtColorUtils$$.$getAlpha$($slice$$14$$.$getFillColor$())) {
    if($pathType$$ == D.$DvtPieRenderUtils$$.$SURFACE_LEFT$ || $pathType$$ == D.$DvtPieRenderUtils$$.$SURFACE_RIGHT$) {
      $shapes$$5$$.push(D.$DvtPieRenderUtils$$.$_generateLateralShape$($slice$$14$$, $pathType$$, D.$JSCompiler_alias_NULL$$, $fill$$42$$))
    }else {
      if($pathType$$ == D.$DvtPieRenderUtils$$.$SURFACE_CRUST$) {
        for(var $pathCommands$$1$$ = D.$DvtPieRenderUtils$$.$_createCrustPathCommands$($slice$$14$$), $len$$22$$ = $pathCommands$$1$$.length, $i$$469$$ = 0;$i$$469$$ < $len$$22$$;$i$$469$$++) {
          $shapes$$5$$.push(D.$DvtPieRenderUtils$$.$_generateLateralShape$($slice$$14$$, $pathType$$, $pathCommands$$1$$[$i$$469$$], $fill$$42$$))
        }
      }
    }
  }
  D.$DvtPieRenderUtils$$.$associate$($slice$$14$$, $shapes$$5$$);
  return $shapes$$5$$
};
D.$DvtPieRenderUtils$$.$generateLateralGradientFill$ = function $$DvtPieRenderUtils$$$$generateLateralGradientFill$$($slice$$15$$, $objType$$1$$) {
  var $pieChart$$6$$ = $slice$$15$$.$_pieChart$, $skin$$3$$ = $pieChart$$6$$.$getSkin$(), $yOffset$$4$$ = $objType$$1$$ == D.$DvtPieRenderUtils$$.$CRUST$ ? $pieChart$$6$$.$getDepth$() : 0, $angle$$22$$ = "skyros" == $skin$$3$$ ? 0 : 270, $arColors$$19$$ = D.$DvtPieRenderUtils$$.$getGradientColors$(D.$DvtColorUtils$$.$getRGB$($slice$$15$$.$getFillColor$()), $objType$$1$$, $skin$$3$$), $arAlphas$$16$$ = D.$DvtPieRenderUtils$$.$getGradientAlphas$(D.$DvtColorUtils$$.$getAlpha$($slice$$15$$.$getFillColor$()), 
  $objType$$1$$), $arRatios$$2$$ = D.$DvtPieRenderUtils$$.$getGradientRatios$($objType$$1$$, $skin$$3$$), $arBounds$$4$$ = D.$JSCompiler_alias_NULL$$;
  "skyros" == $skin$$3$$ && ($arBounds$$4$$ = [window.Math.floor($pieChart$$6$$.$getCenter$().x - $pieChart$$6$$.$_radiusX$), window.Math.floor($pieChart$$6$$.$getCenter$().y - $pieChart$$6$$.$_radiusY$) + $yOffset$$4$$, window.Math.ceil(2 * $pieChart$$6$$.$_radiusX$), window.Math.ceil(2 * $pieChart$$6$$.$_radiusY$)]);
  return new D.$DvtLinearGradientFill$$($angle$$22$$, $arColors$$19$$, $arAlphas$$16$$, $arRatios$$2$$, $arBounds$$4$$)
};
D.$DvtPieRenderUtils$$.$_generateLateralShape$ = function $$DvtPieRenderUtils$$$$_generateLateralShape$$($slice$$16$$, $pathType$$1_pointArray$$1_pt$$6$$, $pathCommand_points$$40_xCenter$$, $fill$$43$$) {
  var $pie$$ = $slice$$16$$.$_pieChart$, $context$$270_path$$40_polygon$$ = $pie$$.$_context$;
  if($pathType$$1_pointArray$$1_pt$$6$$ == D.$DvtPieRenderUtils$$.$SURFACE_LEFT$ || $pathType$$1_pointArray$$1_pt$$6$$ == D.$DvtPieRenderUtils$$.$SURFACE_RIGHT$) {
    var $angle$$23$$ = $slice$$16$$.$getAngleStart$(), $arc$$4$$ = $slice$$16$$.$getAngleExtent$();
    $pathCommand_points$$40_xCenter$$ = $pie$$.$getCenter$().x;
    var $i$$470_yCenter$$ = $pie$$.$getCenter$().y, $xRadius$$ = $slice$$16$$.$_radiusX$, $yRadius$$ = $slice$$16$$.$_radiusY$, $depth$$16$$ = $pie$$.$getDepth$();
    $pathType$$1_pointArray$$1_pt$$6$$ = $pathType$$1_pointArray$$1_pt$$6$$ == D.$DvtPieRenderUtils$$.$SURFACE_LEFT$ ? D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($angle$$23$$ + $arc$$4$$, $pathCommand_points$$40_xCenter$$, $i$$470_yCenter$$, $xRadius$$, $yRadius$$) : D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($angle$$23$$, $pathCommand_points$$40_xCenter$$, $i$$470_yCenter$$, $xRadius$$, $yRadius$$);
    $pathType$$1_pointArray$$1_pt$$6$$ = D.$DvtPieRenderUtils$$.$_generateInnerPoints$($pathCommand_points$$40_xCenter$$, $i$$470_yCenter$$, $pathType$$1_pointArray$$1_pt$$6$$.x, $pathType$$1_pointArray$$1_pt$$6$$.y, $depth$$16$$);
    $pathCommand_points$$40_xCenter$$ = [];
    for($i$$470_yCenter$$ = 0;$i$$470_yCenter$$ < $pathType$$1_pointArray$$1_pt$$6$$.length;$i$$470_yCenter$$++) {
      $pathCommand_points$$40_xCenter$$.push($pathType$$1_pointArray$$1_pt$$6$$[$i$$470_yCenter$$].x, $pathType$$1_pointArray$$1_pt$$6$$[$i$$470_yCenter$$].y)
    }
    $context$$270_path$$40_polygon$$ = new D.$DvtGraphSelectablePolygon$$($context$$270_path$$40_polygon$$, $pathCommand_points$$40_xCenter$$);
    $context$$270_path$$40_polygon$$.$setDataColor$($slice$$16$$.$getFillColor$(), D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($pie$$.$chart$), D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($pie$$.$chart$));
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$270_path$$40_polygon$$, $slice$$16$$.$_explodeOffsetX$, $slice$$16$$.$_explodeOffsetY$);
    $context$$270_path$$40_polygon$$.$setFill$($fill$$43$$);
    $slice$$16$$.$getStrokeColor$() && $context$$270_path$$40_polygon$$.$setSolidStroke$($slice$$16$$.$getStrokeColor$());
    return $context$$270_path$$40_polygon$$
  }
  return $pathCommand_points$$40_xCenter$$ ? ($context$$270_path$$40_polygon$$ = new D.$DvtGraphSelectablePath$$($context$$270_path$$40_polygon$$, D.$JSCompiler_alias_NULL$$), $context$$270_path$$40_polygon$$.$setDataColor$($slice$$16$$.$getFillColor$(), D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($pie$$.$chart$), D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($pie$$.$chart$)), $context$$270_path$$40_polygon$$.$setCmds$($pathCommand_points$$40_xCenter$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$270_path$$40_polygon$$, 
  $slice$$16$$.$_explodeOffsetX$, $slice$$16$$.$_explodeOffsetY$), $context$$270_path$$40_polygon$$.$setFill$($fill$$43$$), $slice$$16$$.$getStrokeColor$() && $context$$270_path$$40_polygon$$.$setSolidStroke$($slice$$16$$.$getStrokeColor$()), $context$$270_path$$40_polygon$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtPieRenderUtils$$.$_createCrustPathCommands$ = function $$DvtPieRenderUtils$$$$_createCrustPathCommands$$($slice$$17_yRadius$$1$$) {
  var $angle$$24$$ = $slice$$17_yRadius$$1$$.$getAngleStart$(), $arc$$5$$ = $slice$$17_yRadius$$1$$.$getAngleExtent$(), $angleEnd$$ = $angle$$24$$ + $arc$$5$$, $depth$$17_pie$$1$$ = $slice$$17_yRadius$$1$$.$_pieChart$, $xCenter$$1$$ = $depth$$17_pie$$1$$.$getCenter$().x, $yCenter$$1$$ = $depth$$17_pie$$1$$.$getCenter$().y, $xRadius$$1$$ = $slice$$17_yRadius$$1$$.$_radiusX$;
  $slice$$17_yRadius$$1$$ = $slice$$17_yRadius$$1$$.$_radiusY$;
  var $depth$$17_pie$$1$$ = $depth$$17_pie$$1$$.$getDepth$(), $arOuterPath$$ = [];
  180 > $angle$$24$$ && 360 < $angleEnd$$ ? ($arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $slice$$17_yRadius$$1$$, $depth$$17_pie$$1$$, $angle$$24$$, 180 - $angle$$24$$)), $arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $slice$$17_yRadius$$1$$, $depth$$17_pie$$1$$, 360, $angleEnd$$ - 360)), $arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, 
  $slice$$17_yRadius$$1$$, $depth$$17_pie$$1$$, 180, 180))) : 360 < $angleEnd$$ ? ($arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $slice$$17_yRadius$$1$$, $depth$$17_pie$$1$$, $angle$$24$$, 360 - $angle$$24$$)), $arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $slice$$17_yRadius$$1$$, $depth$$17_pie$$1$$, 360, $angleEnd$$ - 360))) : 180 > $angle$$24$$ && 180 < $angleEnd$$ ? ($arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, 
  $yCenter$$1$$, $xRadius$$1$$, $slice$$17_yRadius$$1$$, $depth$$17_pie$$1$$, $angle$$24$$, 180 - $angle$$24$$)), $arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $slice$$17_yRadius$$1$$, $depth$$17_pie$$1$$, 180, $angleEnd$$ - 180))) : $arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $slice$$17_yRadius$$1$$, $depth$$17_pie$$1$$, $angle$$24$$, $arc$$5$$));
  return $arOuterPath$$
};
D.$DvtPieRenderUtils$$.$_makeOuterPath$ = function $$DvtPieRenderUtils$$$$_makeOuterPath$$($cx$$23_endPointTopX$$, $cy$$23_endPointTopY$$, $rx$$20$$, $ry$$16$$, $depth$$18$$, $startAngle$$9_startPointTop$$, $angleExtent$$9_angleExtentRads$$) {
  $angleExtent$$9_angleExtentRads$$ = D.$DvtMath$$.$degreesToRads$($angleExtent$$9_angleExtentRads$$);
  var $endAngleRads_pathCommands$$2$$ = -(D.$DvtMath$$.$degreesToRads$($startAngle$$9_startPointTop$$) + $angleExtent$$9_angleExtentRads$$);
  $cy$$23_endPointTopY$$ -= 1;
  $startAngle$$9_startPointTop$$ = D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($startAngle$$9_startPointTop$$, $cx$$23_endPointTopX$$, $cy$$23_endPointTopY$$, $rx$$20$$, $ry$$16$$);
  $cx$$23_endPointTopX$$ += window.Math.cos($endAngleRads_pathCommands$$2$$) * $rx$$20$$;
  $cy$$23_endPointTopY$$ += window.Math.sin($endAngleRads_pathCommands$$2$$) * $ry$$16$$;
  $endAngleRads_pathCommands$$2$$ = window.DvtPathUtils.moveTo($startAngle$$9_startPointTop$$.x, $startAngle$$9_startPointTop$$.y);
  $endAngleRads_pathCommands$$2$$ += window.DvtPathUtils.arcTo($rx$$20$$, $ry$$16$$, $angleExtent$$9_angleExtentRads$$, 0, $cx$$23_endPointTopX$$, $cy$$23_endPointTopY$$);
  $endAngleRads_pathCommands$$2$$ += window.DvtPathUtils.lineTo($cx$$23_endPointTopX$$, $cy$$23_endPointTopY$$ + $depth$$18$$);
  $endAngleRads_pathCommands$$2$$ += window.DvtPathUtils.arcTo($rx$$20$$, $ry$$16$$, $angleExtent$$9_angleExtentRads$$, 1, $startAngle$$9_startPointTop$$.x, $startAngle$$9_startPointTop$$.y + $depth$$18$$);
  return $endAngleRads_pathCommands$$2$$ += window.DvtPathUtils.lineTo($startAngle$$9_startPointTop$$.x, $startAngle$$9_startPointTop$$.y)
};
D.$DvtPieRenderUtils$$.$_generateInnerPoints$ = function $$DvtPieRenderUtils$$$$_generateInnerPoints$$($cx$$24$$, $cy$$24$$, $xpos$$, $ypos$$, $tilt$$1$$) {
  var $pointArray$$2$$ = [];
  $pointArray$$2$$.push({x:$cx$$24$$, y:$cy$$24$$});
  $pointArray$$2$$.push({x:$xpos$$, y:$ypos$$});
  $pointArray$$2$$.push({x:$xpos$$, y:$ypos$$ + $tilt$$1$$});
  $pointArray$$2$$.push({x:$cx$$24$$, y:$cy$$24$$ + $tilt$$1$$});
  return $pointArray$$2$$
};
D.$DvtPieLabelInfo$$ = function $$DvtPieLabelInfo$$$() {
  this.$_slice$ = this.$_sliceLabel$ = D.$JSCompiler_alias_NULL$$;
  this.$_initialNumLines$ = this.$_y$ = this.$_x$ = this.$_height$ = this.$_width$ = this.$_position$ = this.$_angle$ = -1;
  this.$_hasFeeler$ = D.$JSCompiler_alias_FALSE$$;
  this.$_minY$ = this.$_maxY$ = -1
};
D.$DvtObj$$.$createSubclass$(D.$DvtPieLabelInfo$$, D.$DvtObj$$, "DvtPieLabelInfo");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPieLabelInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getAngle$ = (0,D.$JSCompiler_get$$)("$_angle$");
D.$JSCompiler_prototypeAlias$$.$setAngle$ = (0,D.$JSCompiler_set$$)("$_angle$");
D.$JSCompiler_prototypeAlias$$.getHeight = (0,D.$JSCompiler_get$$)("$_height$");
D.$JSCompiler_prototypeAlias$$.$setHeight$ = (0,D.$JSCompiler_set$$)("$_height$");
D.$JSCompiler_prototypeAlias$$.$getMaxY$ = (0,D.$JSCompiler_get$$)("$_maxY$");
D.$JSCompiler_prototypeAlias$$.$getMinY$ = (0,D.$JSCompiler_get$$)("$_minY$");
D.$JSCompiler_StaticMethods_boundY$$ = function $$JSCompiler_StaticMethods_boundY$$$($JSCompiler_StaticMethods_boundY$self$$, $y$$130$$) {
  $y$$130$$ = window.Math.max($y$$130$$, $JSCompiler_StaticMethods_boundY$self$$.$_minY$);
  return $y$$130$$ = window.Math.min($y$$130$$, $JSCompiler_StaticMethods_boundY$self$$.$_maxY$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPieLabelInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getPosition$ = (0,D.$JSCompiler_get$$)("$_position$");
D.$JSCompiler_prototypeAlias$$.$setPosition$ = (0,D.$JSCompiler_set$$)("$_position$");
D.$JSCompiler_prototypeAlias$$.$setSliceLabel$ = (0,D.$JSCompiler_set$$)("$_sliceLabel$");
D.$JSCompiler_prototypeAlias$$.getWidth = (0,D.$JSCompiler_get$$)("$_width$");
D.$JSCompiler_prototypeAlias$$.$setWidth$ = (0,D.$JSCompiler_set$$)("$_width$");
D.$JSCompiler_prototypeAlias$$.$getX$ = (0,D.$JSCompiler_get$$)("$_x$");
D.$JSCompiler_prototypeAlias$$.$setX$ = (0,D.$JSCompiler_set$$)("$_x$");
D.$JSCompiler_prototypeAlias$$.$getY$ = (0,D.$JSCompiler_get$$)("$_y$");
D.$JSCompiler_prototypeAlias$$.$setY$ = (0,D.$JSCompiler_set$$)("$_y$");
D.$DvtPieLabelUtils$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtPieLabelUtils$$, D.$DvtObj$$, "DvtPieLabelUtils");
D.$DvtPieLabelUtils$$.$_MAX_LINES_PER_LABEL$ = 3;
D.$DvtPieLabelUtils$$.$_COLLISION_MARGIN$ = 1;
D.$DvtPieLabelUtils$$.$_LEFT_SIDE_LABELS$ = 1;
D.$DvtPieLabelUtils$$.$_RIGHT_SIDE_LABELS$ = 2;
D.$DvtPieLabelUtils$$.$_OUTSIDE_LABEL_DISTANCE$ = 0.04;
D.$DvtPieLabelUtils$$.$_FEELER_RAD_MINSIZE$ = 0.1;
D.$DvtPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$ = 0.1;
D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_OFFSET$ = 0.5;
D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_DISTANCE$ = 3;
D.$DvtPieLabelUtils$$.$_NO_COLLISION$ = 0;
D.$DvtPieLabelUtils$$.$_HALF_COLLISION$ = 1;
D.$DvtPieLabelUtils$$.$_ALL_COLLISION$ = 2;
D.$DvtPieLabelUtils$$.$layoutLabelsAndFeelers$ = function $$DvtPieLabelUtils$$$$layoutLabelsAndFeelers$$($pie$$2$$) {
  var $labelPosition$$ = $pie$$2$$.$getLabelPosition$();
  "none" != $labelPosition$$ && ("inside" == $labelPosition$$ ? D.$DvtPieLabelUtils$$.$_layoutInsideLabels$($pie$$2$$) : D.$DvtPieLabelUtils$$.$_layoutOutsideLabelsAndFeelers$($pie$$2$$))
};
D.$DvtPieLabelUtils$$.$_layoutInsideLabels$ = function $$DvtPieLabelUtils$$$$_layoutInsideLabels$$($pie$$3$$) {
  if($pie$$3$$ != D.$JSCompiler_alias_NULL$$) {
    var $slices$$6$$ = $pie$$3$$.$_slices$, $n$$28$$ = $slices$$6$$.length;
    if(0 < $n$$28$$) {
      for(window.i = 0;window.i < $n$$28$$;window.i++) {
        var $slice$$18$$ = $slices$$6$$[window.i], $estimatedDims_midAngle_midPt$$1$$;
        $estimatedDims_midAngle_midPt$$1$$ = $slice$$18$$.$getAngleStart$() + $slice$$18$$.$getAngleExtent$() / 2;
        var $center$$6_x1$$22$$ = $pie$$3$$.$getCenter$(), $posX$$4_usableSpace$$ = 0, $posY$$3_stage$$5_y2$$19$$ = 0, $sliceLabel$$1$$ = D.$DvtPieLabelUtils$$.$_createLabel$($slice$$18$$, D.$JSCompiler_alias_TRUE$$);
        1 == $n$$28$$ ? ($posX$$4_usableSpace$$ = $center$$6_x1$$22$$.x, $posY$$3_stage$$5_y2$$19$$ = $center$$6_x1$$22$$.y) : ($estimatedDims_midAngle_midPt$$1$$ = D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($estimatedDims_midAngle_midPt$$1$$, $center$$6_x1$$22$$.x, $center$$6_x1$$22$$.y, 0.66 * $pie$$3$$.$_radiusX$, 0.66 * $pie$$3$$.$_radiusY$), $posX$$4_usableSpace$$ = $estimatedDims_midAngle_midPt$$1$$.x, $posY$$3_stage$$5_y2$$19$$ = $estimatedDims_midAngle_midPt$$1$$.y);
        $sliceLabel$$1$$.$setX$($posX$$4_usableSpace$$);
        $sliceLabel$$1$$.$setY$($posY$$3_stage$$5_y2$$19$$);
        $sliceLabel$$1$$.$alignMiddle$();
        $sliceLabel$$1$$.$alignCenter$();
        $estimatedDims_midAngle_midPt$$1$$ = D.$DvtTextUtils$$.$guessTextDimensions$($sliceLabel$$1$$);
        for(var $x2$$21$$ = $center$$6_x1$$22$$ = $posX$$4_usableSpace$$, $y1$$20$$ = $posY$$3_stage$$5_y2$$19$$ - $estimatedDims_midAngle_midPt$$1$$.$h$ / 2, $posY$$3_stage$$5_y2$$19$$ = $posY$$3_stage$$5_y2$$19$$ + $estimatedDims_midAngle_midPt$$1$$.$h$ / 2;$slice$$18$$.contains($center$$6_x1$$22$$, $y1$$20$$) && $slice$$18$$.contains($center$$6_x1$$22$$, $posY$$3_stage$$5_y2$$19$$);) {
          $center$$6_x1$$22$$--
        }
        for(;$slice$$18$$.contains($x2$$21$$, $y1$$20$$) && $slice$$18$$.contains($x2$$21$$, $posY$$3_stage$$5_y2$$19$$);) {
          $x2$$21$$++
        }
        $center$$6_x1$$22$$ += 3;
        $x2$$21$$ -= 3;
        $posX$$4_usableSpace$$ = 2 * window.Math.min($posX$$4_usableSpace$$ - $center$$6_x1$$22$$, $x2$$21$$ - $posX$$4_usableSpace$$);
        $posX$$4_usableSpace$$ < $estimatedDims_midAngle_midPt$$1$$.$w$ && ($sliceLabel$$1$$.$setX$(($center$$6_x1$$22$$ + $x2$$21$$) / 2), $posX$$4_usableSpace$$ = $x2$$21$$ - $center$$6_x1$$22$$);
        $posY$$3_stage$$5_y2$$19$$ = $slice$$18$$.$_pieChart$.$_context$.$_stage$;
        D.$DvtTextUtils$$.$fitText$($sliceLabel$$1$$, $posX$$4_usableSpace$$, $estimatedDims_midAngle_midPt$$1$$.$h$, $posY$$3_stage$$5_y2$$19$$) && ($posY$$3_stage$$5_y2$$19$$.removeChild($sliceLabel$$1$$), $slice$$18$$.$setSliceLabel$($sliceLabel$$1$$))
      }
    }
  }
};
D.$DvtPieLabelUtils$$.$_layoutOutsideLabelsAndFeelers$ = function $$DvtPieLabelUtils$$$$_layoutOutsideLabelsAndFeelers$$($pie$$4$$) {
  if($pie$$4$$ != D.$JSCompiler_alias_NULL$$) {
    var $leftLabels$$ = [], $alabels_rightLabels$$ = [], $alabels_rightLabels$$ = D.$DvtPieLabelUtils$$.$_generateInitialLayout$($pie$$4$$), $leftLabels$$ = $alabels_rightLabels$$[0], $alabels_rightLabels$$ = $alabels_rightLabels$$[1], $leftColl$$ = D.$DvtPieLabelUtils$$.$_refineInitialLayout$($pie$$4$$, $leftLabels$$, D.$DvtPieLabelUtils$$.$_LEFT_SIDE_LABELS$), $rightColl$$ = D.$DvtPieLabelUtils$$.$_refineInitialLayout$($pie$$4$$, $alabels_rightLabels$$, D.$DvtPieLabelUtils$$.$_RIGHT_SIDE_LABELS$);
    $leftColl$$ == D.$DvtPieLabelUtils$$.$_HALF_COLLISION$ && $rightColl$$ != D.$DvtPieLabelUtils$$.$_NO_COLLISION$ && D.$DvtPieLabelUtils$$.$_columnLabels$($pie$$4$$, $leftLabels$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$);
    $leftColl$$ != D.$DvtPieLabelUtils$$.$_NO_COLLISION$ && $rightColl$$ == D.$DvtPieLabelUtils$$.$_HALF_COLLISION$ && D.$DvtPieLabelUtils$$.$_columnLabels$($pie$$4$$, $alabels_rightLabels$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$);
    D.$DvtPieLabelUtils$$.$_setLabelsAndFeelers$($pie$$4$$, $leftLabels$$, D.$DvtPieLabelUtils$$.$_LEFT_SIDE_LABELS$);
    D.$DvtPieLabelUtils$$.$_setLabelsAndFeelers$($pie$$4$$, $alabels_rightLabels$$, D.$DvtPieLabelUtils$$.$_RIGHT_SIDE_LABELS$)
  }
};
D.$DvtPieLabelUtils$$.$_createLabel$ = function $$DvtPieLabelUtils$$$$_createLabel$$($slice$$19$$, $noWrap$$3$$) {
  var $contrastingColor$$1_labelStr$$1_pieChart$$7$$ = $slice$$19$$.$_pieChart$;
  if("none" == $contrastingColor$$1_labelStr$$1_pieChart$$7$$.$getLabelPosition$()) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $context$$271_sliceLabel$$2$$ = $contrastingColor$$1_labelStr$$1_pieChart$$7$$.$_context$, $context$$271_sliceLabel$$2$$ = $noWrap$$3$$ ? new D.$DvtOutputText$$($context$$271_sliceLabel$$2$$) : new D.$DvtMultilineText$$($context$$271_sliceLabel$$2$$), $styleDefaults$$ = $contrastingColor$$1_labelStr$$1_pieChart$$7$$.$getOptions$().styleDefaults, $style$$36$$ = $styleDefaults$$.sliceLabelStyle.clone(), $bColorDefined$$ = $style$$36$$.$getStyle$("color") != D.$JSCompiler_alias_NULL$$;
  "inside" == $contrastingColor$$1_labelStr$$1_pieChart$$7$$.$getLabelPosition$() && (!$bColorDefined$$ || D.$DvtAgent$_highContrast$$ === D.$JSCompiler_alias_TRUE$$) ? ($contrastingColor$$1_labelStr$$1_pieChart$$7$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($slice$$19$$.$getFillColor$()), $style$$36$$.$setStyle$("color", $contrastingColor$$1_labelStr$$1_pieChart$$7$$)) : $bColorDefined$$ || $style$$36$$.$setStyle$("color", $styleDefaults$$._defaultSliceLabelColor);
  D.$DvtPieLabelUtils$$.$_setFontPropsOnLabel$($style$$36$$, $context$$271_sliceLabel$$2$$);
  $contrastingColor$$1_labelStr$$1_pieChart$$7$$ = D.$DvtPieLabelUtils$$.$generateSliceLabelString$($slice$$19$$, $styleDefaults$$.sliceLabelType);
  $context$$271_sliceLabel$$2$$.$setTextString$($contrastingColor$$1_labelStr$$1_pieChart$$7$$);
  $slice$$19$$.$_sliceLabelString$ = $contrastingColor$$1_labelStr$$1_pieChart$$7$$;
  return $context$$271_sliceLabel$$2$$
};
D.$DvtPieLabelUtils$$.$generateSliceLabelString$ = function $$DvtPieLabelUtils$$$$generateSliceLabelString$$($slice$$20$$, $labelType$$) {
  var $dataTotal$$1_pieChart$$8_valueFormats$$ = $slice$$20$$.$_pieChart$;
  if("none" == $dataTotal$$1_pieChart$$8_valueFormats$$.$getLabelPosition$()) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $percentage$$2_s$$119_spercent$$ = "", $svalue$$ = "", $stext_value$$119$$ = "", $percentage$$2_s$$119_spercent$$ = "", $stext_value$$119$$ = $slice$$20$$.getValue(), $percentage$$2_s$$119_spercent$$ = 0, $dataTotal$$1_pieChart$$8_valueFormats$$ = $dataTotal$$1_pieChart$$8_valueFormats$$.$getTotalValue$(), $percentage$$2_s$$119_spercent$$ = 0 == $dataTotal$$1_pieChart$$8_valueFormats$$ ? 0 : 100 * (window.Math.abs($stext_value$$119$$) / $dataTotal$$1_pieChart$$8_valueFormats$$), $dataTotal$$1_pieChart$$8_valueFormats$$ = 
  $slice$$20$$.$_chart$.$getOptions$().valueFormats, $customLabel$$ = $slice$$20$$.$_customLabel$;
  if($customLabel$$ != D.$JSCompiler_alias_NULL$$) {
    if($dataTotal$$1_pieChart$$8_valueFormats$$ && "number" == typeof $customLabel$$) {
      $percentage$$2_s$$119_spercent$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($dataTotal$$1_pieChart$$8_valueFormats$$, D.$DvtChartDataUtils$$.$_TYPE_LABEL$, $customLabel$$)
    }else {
      return $customLabel$$
    }
  }else {
    $percentage$$2_s$$119_spercent$$ = $percentage$$2_s$$119_spercent$$.toString();
    if(5 < $percentage$$2_s$$119_spercent$$.length) {
      $percentage$$2_s$$119_spercent$$ = $percentage$$2_s$$119_spercent$$.slice(0, 5)
    }else {
      for(0 > $percentage$$2_s$$119_spercent$$.indexOf(".", 0) && 4 > $percentage$$2_s$$119_spercent$$.length && ($percentage$$2_s$$119_spercent$$ += ".");5 > $percentage$$2_s$$119_spercent$$.length;) {
        $percentage$$2_s$$119_spercent$$ += "0"
      }
    }
    $percentage$$2_s$$119_spercent$$ += "%"
  }
  (0,window.isNaN)($stext_value$$119$$) || ($svalue$$ = $dataTotal$$1_pieChart$$8_valueFormats$$ ? D.$DvtChartTooltipUtils$$.$_formatValue$($dataTotal$$1_pieChart$$8_valueFormats$$, D.$DvtChartDataUtils$$.$_TYPE_LABEL$, $slice$$20$$.getValue()) : $stext_value$$119$$.toString());
  $stext_value$$119$$ = $slice$$20$$.$getSeriesLabel$();
  return"percent" == $labelType$$ ? $percentage$$2_s$$119_spercent$$ : "number" == $labelType$$ ? $svalue$$ : "text" == $labelType$$ ? $stext_value$$119$$ : "textAndPercent" == $labelType$$ ? $stext_value$$119$$ + ", " + $percentage$$2_s$$119_spercent$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtPieLabelUtils$$.$_setFontPropsOnLabel$ = function $$DvtPieLabelUtils$$$$_setFontPropsOnLabel$$($style$$37$$, $sliceLabel$$3$$) {
  $sliceLabel$$3$$ == D.$JSCompiler_alias_NULL$$ || $style$$37$$ == D.$JSCompiler_alias_NULL$$ || $sliceLabel$$3$$.$setCSSStyle$($style$$37$$)
};
D.$DvtPieLabelUtils$$.$_refineInitialLayout$ = function $$DvtPieLabelUtils$$$$_refineInitialLayout$$($pie$$5$$, $labelInfoArray$$, $isLeftSideLabels_side$$17$$) {
  if($labelInfoArray$$ && 0 < $labelInfoArray$$.length) {
    var $lastY$$ = $pie$$5$$.$_frame$.y, $collisionTop$$ = D.$JSCompiler_alias_FALSE$$, $collisionCentral$$ = D.$JSCompiler_alias_FALSE$$, $collisionBottom$$ = D.$JSCompiler_alias_FALSE$$, $labelBottom$$ = 0, $collide_labelInfo$$, $bottomQuarter$$ = D.$JSCompiler_alias_FALSE$$, $prevBottomQuarter$$ = $bottomQuarter$$;
    $collide_labelInfo$$ = D.$JSCompiler_alias_FALSE$$;
    $isLeftSideLabels_side$$17$$ = $isLeftSideLabels_side$$17$$ == D.$DvtPieLabelUtils$$.$_LEFT_SIDE_LABELS$;
    for(var $i$$482$$ = 0;$i$$482$$ < $labelInfoArray$$.length;$i$$482$$++) {
      $collide_labelInfo$$ = $labelInfoArray$$[$i$$482$$], $prevBottomQuarter$$ = $bottomQuarter$$, 90 < $collide_labelInfo$$.$getPosition$() && ($bottomQuarter$$ = D.$JSCompiler_alias_TRUE$$), $labelBottom$$ = $collide_labelInfo$$.$getY$() + $collide_labelInfo$$.getHeight(), ($collide_labelInfo$$ = $lastY$$ - $collide_labelInfo$$.$getY$() > D.$DvtPieLabelUtils$$.$_COLLISION_MARGIN$) && ($bottomQuarter$$ ? $bottomQuarter$$ && !$prevBottomQuarter$$ ? $collisionCentral$$ = D.$JSCompiler_alias_TRUE$$ : 
      $collisionBottom$$ = D.$JSCompiler_alias_TRUE$$ : $collisionTop$$ = D.$JSCompiler_alias_TRUE$$), $labelBottom$$ > $lastY$$ && ($lastY$$ = $labelBottom$$)
    }
    return $collisionTop$$ && $collisionBottom$$ || $collisionCentral$$ ? (D.$DvtPieLabelUtils$$.$_columnLabels$($pie$$5$$, $labelInfoArray$$, $isLeftSideLabels_side$$17$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$), D.$DvtPieLabelUtils$$.$_ALL_COLLISION$) : $collisionTop$$ ? (D.$DvtPieLabelUtils$$.$_columnLabels$($pie$$5$$, $labelInfoArray$$, $isLeftSideLabels_side$$17$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$), D.$DvtPieLabelUtils$$.$_HALF_COLLISION$) : $collisionBottom$$ ? 
    (D.$DvtPieLabelUtils$$.$_columnLabels$($pie$$5$$, $labelInfoArray$$, $isLeftSideLabels_side$$17$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$), D.$DvtPieLabelUtils$$.$_HALF_COLLISION$) : D.$DvtPieLabelUtils$$.$_NO_COLLISION$
  }
};
D.$DvtPieLabelUtils$$.$_setLabelsAndFeelers$ = function $$DvtPieLabelUtils$$$$_setLabelsAndFeelers$$($pie$$6$$, $alabels$$1$$, $i$$483_side$$18$$) {
  if(!($alabels$$1$$ == D.$JSCompiler_alias_NULL$$ || 0 >= $alabels$$1$$.length)) {
    var $excessLength_slice$$21$$, $sliceLabel$$4$$, $labelInfo$$1$$, $isLeftSide$$ = $i$$483_side$$18$$ == D.$DvtPieLabelUtils$$.$_LEFT_SIDE_LABELS$, $excessWidth$$1$$ = window.Infinity;
    for($i$$483_side$$18$$ = 0;$i$$483_side$$18$$ < $alabels$$1$$.length;$i$$483_side$$18$$++) {
      $labelInfo$$1$$ = $alabels$$1$$[$i$$483_side$$18$$], $excessLength_slice$$21$$ = $labelInfo$$1$$.$_slice$, $labelInfo$$1$$.$_hasFeeler$ ? ($excessLength_slice$$21$$ = D.$DvtPieLabelUtils$$.$_calculateFeeler$($labelInfo$$1$$, $excessLength_slice$$21$$, $isLeftSide$$), $excessWidth$$1$$ = window.Math.min($excessWidth$$1$$, $excessLength_slice$$21$$)) : (0,D.$JSCompiler_StaticMethods_setNoOutsideFeeler$$)($excessLength_slice$$21$$)
    }
    for($i$$483_side$$18$$ = 0;$i$$483_side$$18$$ < $alabels$$1$$.length;$i$$483_side$$18$$++) {
      $labelInfo$$1$$ = $alabels$$1$$[$i$$483_side$$18$$];
      $excessLength_slice$$21$$ = $labelInfo$$1$$.$_slice$;
      $sliceLabel$$4$$ = $labelInfo$$1$$.$_sliceLabel$;
      $labelInfo$$1$$.$_hasFeeler$ && ($isLeftSide$$ ? $labelInfo$$1$$.$setX$($labelInfo$$1$$.$getX$() + $excessWidth$$1$$) : $labelInfo$$1$$.$setX$($labelInfo$$1$$.$getX$() - $excessWidth$$1$$), D.$DvtPieLabelUtils$$.$_calculateFeeler$($labelInfo$$1$$, $excessLength_slice$$21$$, $isLeftSide$$), $sliceLabel$$4$$.$setMaxLines$(1));
      $sliceLabel$$4$$.$setY$($labelInfo$$1$$.$getY$());
      $sliceLabel$$4$$.$setX$($labelInfo$$1$$.$getX$());
      var $frame$$1$$ = $pie$$6$$.$_frame$;
      $labelInfo$$1$$.$getY$() < $frame$$1$$.y || $labelInfo$$1$$.$getY$() + $labelInfo$$1$$.getHeight() > $frame$$1$$.y + $frame$$1$$.$h$ ? ($excessLength_slice$$21$$.$setSliceLabel$(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_setNoOutsideFeeler$$)($excessLength_slice$$21$$)) : (D.$DvtPieLabelUtils$$.$_truncateSliceLabel$($pie$$6$$, $excessLength_slice$$21$$, $labelInfo$$1$$, $isLeftSide$$), $excessLength_slice$$21$$.$setSliceLabel$($sliceLabel$$4$$))
    }
  }
};
D.$DvtPieLabelUtils$$.$_calculateFeeler$ = function $$DvtPieLabelUtils$$$$_calculateFeeler$$($labelInfo$$2_pa$$1$$, $slice$$22$$, $isLeft$$1$$) {
  var $pieChart$$9_radFeelerAngle$$ = $slice$$22$$.$_pieChart$, $endPt$$1_targetX$$ = $labelInfo$$2_pa$$1$$.$getX$(), $horizOffset_targetY_tilt$$2$$ = $labelInfo$$2_pa$$1$$.$getY$() + $labelInfo$$2_pa$$1$$.getHeight() * D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_OFFSET$, $minHorizLength$$ = D.$DvtPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$ * $pieChart$$9_radFeelerAngle$$.$_radiusX$, $midPt$$2_midX$$2$$;
  $isLeft$$1$$ ? ($endPt$$1_targetX$$ += D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_DISTANCE$, $midPt$$2_midX$$2$$ = $endPt$$1_targetX$$ + $minHorizLength$$) : ($endPt$$1_targetX$$ -= D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_DISTANCE$, $midPt$$2_midX$$2$$ = $endPt$$1_targetX$$ - $minHorizLength$$);
  if("outside" == $pieChart$$9_radFeelerAngle$$.$getLabelPosition$()) {
    var $ma_startPt$$1$$ = {x:0, y:0};
    $midPt$$2_midX$$2$$ = {x:$midPt$$2_midX$$2$$, y:$horizOffset_targetY_tilt$$2$$};
    $endPt$$1_targetX$$ = {x:$endPt$$1_targetX$$, y:$horizOffset_targetY_tilt$$2$$};
    $ma_startPt$$1$$ = $labelInfo$$2_pa$$1$$.$getAngle$();
    $horizOffset_targetY_tilt$$2$$ = D.$DvtPieLabelUtils$$.$_adjustForDepth$($ma_startPt$$1$$, $pieChart$$9_radFeelerAngle$$.$getDepth$());
    $ma_startPt$$1$$ = D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($ma_startPt$$1$$, $pieChart$$9_radFeelerAngle$$.$getCenter$().x, $pieChart$$9_radFeelerAngle$$.$getCenter$().y + $horizOffset_targetY_tilt$$2$$, $pieChart$$9_radFeelerAngle$$.$_radiusX$, $pieChart$$9_radFeelerAngle$$.$_radiusY$);
    $labelInfo$$2_pa$$1$$ = D.$DvtMath$$.$degreesToRads$($labelInfo$$2_pa$$1$$.$getPosition$());
    $pieChart$$9_radFeelerAngle$$ = window.Math.abs(window.Math.atan2($midPt$$2_midX$$2$$.x - $ma_startPt$$1$$.x, $ma_startPt$$1$$.y - $midPt$$2_midX$$2$$.y));
    $horizOffset_targetY_tilt$$2$$ = ($ma_startPt$$1$$.y - $midPt$$2_midX$$2$$.y) * window.Math.tan($labelInfo$$2_pa$$1$$);
    if($labelInfo$$2_pa$$1$$ > window.Math.PI / 2 && $pieChart$$9_radFeelerAngle$$ > window.Math.PI / 2 && $pieChart$$9_radFeelerAngle$$ < $labelInfo$$2_pa$$1$$ || $labelInfo$$2_pa$$1$$ < window.Math.PI / 2 && $pieChart$$9_radFeelerAngle$$ < window.Math.PI / 2 && $pieChart$$9_radFeelerAngle$$ > $labelInfo$$2_pa$$1$$) {
      $midPt$$2_midX$$2$$.x = $isLeft$$1$$ ? $ma_startPt$$1$$.x - $horizOffset_targetY_tilt$$2$$ : $ma_startPt$$1$$.x + $horizOffset_targetY_tilt$$2$$
    }
    $slice$$22$$.$_outsideFeelerStart$ = $ma_startPt$$1$$;
    $slice$$22$$.$_outsideFeelerMid$ = $midPt$$2_midX$$2$$;
    $slice$$22$$.$_outsideFeelerEnd$ = $endPt$$1_targetX$$;
    $slice$$22$$.$_hasFeeler$ = D.$JSCompiler_alias_TRUE$$;
    return window.Math.abs($endPt$$1_targetX$$.x - $midPt$$2_midX$$2$$.x) - $minHorizLength$$
  }
  return 0
};
D.$DvtPieLabelUtils$$.$_adjustForDepth$ = function $$DvtPieLabelUtils$$$$_adjustForDepth$$($ma$$1$$, $pieDepth$$) {
  var $depth$$19$$ = 0;
  189 < $ma$$1$$ && 351 > $ma$$1$$ && ($depth$$19$$ = $pieDepth$$);
  return $depth$$19$$
};
D.$DvtPieLabelUtils$$.$_getMiddleLabel$ = function $$DvtPieLabelUtils$$$$_getMiddleLabel$$($alabels$$2$$) {
  for(var $bestAngle$$ = 91, $bestIndex$$ = -1, $i$$484$$ = 0;$i$$484$$ < $alabels$$2$$.length;$i$$484$$++) {
    window.pa = $alabels$$2$$[$i$$484$$].$getPosition$(), window.Math.abs(window.pa - 90) < $bestAngle$$ && ($bestAngle$$ = window.Math.abs(window.pa - 90), $bestIndex$$ = $i$$484$$)
  }
  return $bestIndex$$
};
D.$DvtPieLabelUtils$$.$_setOptimalLabelPosition$ = function $$DvtPieLabelUtils$$$$_setOptimalLabelPosition$$($optimalY_pie$$7$$, $labelInfo$$3$$, $heightFromCenter_vertX$$) {
  $labelInfo$$3$$.$setX$($heightFromCenter_vertX$$);
  $heightFromCenter_vertX$$ = $optimalY_pie$$7$$.$_radiusY$ * (1 + D.$DvtPieLabelUtils$$.$_FEELER_RAD_MINSIZE$) * window.Math.cos(D.$DvtMath$$.$degreesToRads$($labelInfo$$3$$.$getPosition$()));
  var $tilt$$3$$ = D.$DvtPieLabelUtils$$.$_adjustForDepth$($labelInfo$$3$$.$getAngle$(), $optimalY_pie$$7$$.$getDepth$());
  $optimalY_pie$$7$$ = $optimalY_pie$$7$$.$getCenter$().y - $heightFromCenter_vertX$$ - $labelInfo$$3$$.getHeight() * D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_OFFSET$ + $tilt$$3$$;
  $labelInfo$$3$$.$setY$((0,D.$JSCompiler_StaticMethods_boundY$$)($labelInfo$$3$$, $optimalY_pie$$7$$))
};
D.$DvtPieLabelUtils$$.$_columnLabels$ = function $$DvtPieLabelUtils$$$$_columnLabels$$($pie$$8$$, $alabels$$3$$, $i$$485_isLeft$$3_startLabel$$, $isTop_labelInfo$$4$$, $isBottom$$) {
  var $frame$$2_vertX$$1$$ = $pie$$8$$.$_frame$, $minY$$9_startIndex$$12$$ = $frame$$2_vertX$$1$$.y, $highestY_isStartAtTop_maxY$$9$$ = $frame$$2_vertX$$1$$.y + $frame$$2_vertX$$1$$.$h$, $frame$$2_vertX$$1$$ = $pie$$8$$.$getCenter$().x, $lowestY_minFeelerDist$$ = $pie$$8$$.$_radiusX$ * (1 + D.$DvtPieLabelUtils$$.$_FEELER_RAD_MINSIZE$ + D.$DvtPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$), $frame$$2_vertX$$1$$ = $i$$485_isLeft$$3_startLabel$$ ? $frame$$2_vertX$$1$$ - $lowestY_minFeelerDist$$ : $frame$$2_vertX$$1$$ + 
  $lowestY_minFeelerDist$$;
  for($i$$485_isLeft$$3_startLabel$$ = 0;$i$$485_isLeft$$3_startLabel$$ < $alabels$$3$$.length;$i$$485_isLeft$$3_startLabel$$++) {
    $alabels$$3$$[$i$$485_isLeft$$3_startLabel$$].$_minY$ = $minY$$9_startIndex$$12$$, $minY$$9_startIndex$$12$$ += $alabels$$3$$[$i$$485_isLeft$$3_startLabel$$].getHeight()
  }
  for($i$$485_isLeft$$3_startLabel$$ = $alabels$$3$$.length - 1;0 <= $i$$485_isLeft$$3_startLabel$$;$i$$485_isLeft$$3_startLabel$$--) {
    $highestY_isStartAtTop_maxY$$9$$ -= $alabels$$3$$[$i$$485_isLeft$$3_startLabel$$].getHeight(), $alabels$$3$$[$i$$485_isLeft$$3_startLabel$$].$_maxY$ = $highestY_isStartAtTop_maxY$$9$$
  }
  if($alabels$$3$$[0].$_minY$ >= $alabels$$3$$[0].$_maxY$) {
    for($i$$485_isLeft$$3_startLabel$$ = 0;$i$$485_isLeft$$3_startLabel$$ < $alabels$$3$$.length;$i$$485_isLeft$$3_startLabel$$++) {
      $isTop_labelInfo$$4$$ = $alabels$$3$$[$i$$485_isLeft$$3_startLabel$$], $isTop_labelInfo$$4$$.$setX$($frame$$2_vertX$$1$$), $isTop_labelInfo$$4$$.$setY$(($isTop_labelInfo$$4$$.$_minY$ + $isTop_labelInfo$$4$$.$_maxY$) / 2), $isTop_labelInfo$$4$$.$_hasFeeler$ = D.$JSCompiler_alias_TRUE$$
    }
  }else {
    $minY$$9_startIndex$$12$$ = D.$DvtPieLabelUtils$$.$_getMiddleLabel$($alabels$$3$$);
    $i$$485_isLeft$$3_startLabel$$ = $alabels$$3$$[$minY$$9_startIndex$$12$$];
    $highestY_isStartAtTop_maxY$$9$$ = 90 >= $i$$485_isLeft$$3_startLabel$$.$getPosition$();
    $isTop_labelInfo$$4$$ && !$isBottom$$ && $i$$485_isLeft$$3_startLabel$$.$_minY$ + $i$$485_isLeft$$3_startLabel$$.getHeight() > $pie$$8$$.$getCenter$().y && ($isBottom$$ = D.$JSCompiler_alias_TRUE$$);
    $isBottom$$ && !$isTop_labelInfo$$4$$ && $i$$485_isLeft$$3_startLabel$$.$_maxY$ < $pie$$8$$.$getCenter$().y && ($isTop_labelInfo$$4$$ = D.$JSCompiler_alias_TRUE$$);
    if($isTop_labelInfo$$4$$ && $highestY_isStartAtTop_maxY$$9$$ || $isBottom$$ && !$highestY_isStartAtTop_maxY$$9$$) {
      D.$DvtPieLabelUtils$$.$_setOptimalLabelPosition$($pie$$8$$, $i$$485_isLeft$$3_startLabel$$, $frame$$2_vertX$$1$$), $i$$485_isLeft$$3_startLabel$$.$_hasFeeler$ = D.$JSCompiler_alias_TRUE$$
    }
    var $highestY_isStartAtTop_maxY$$9$$ = $i$$485_isLeft$$3_startLabel$$.$getY$(), $lowestY_minFeelerDist$$ = $i$$485_isLeft$$3_startLabel$$.$getY$() + $i$$485_isLeft$$3_startLabel$$.getHeight(), $optimalY$$1$$, $labelHeight$$2$$;
    if($isTop_labelInfo$$4$$) {
      for($i$$485_isLeft$$3_startLabel$$ = $minY$$9_startIndex$$12$$ - 1;0 <= $i$$485_isLeft$$3_startLabel$$;$i$$485_isLeft$$3_startLabel$$--) {
        $isTop_labelInfo$$4$$ = $alabels$$3$$[$i$$485_isLeft$$3_startLabel$$], $labelHeight$$2$$ = $isTop_labelInfo$$4$$.getHeight(), D.$DvtPieLabelUtils$$.$_setOptimalLabelPosition$($pie$$8$$, $isTop_labelInfo$$4$$, $frame$$2_vertX$$1$$), $isTop_labelInfo$$4$$.$_hasFeeler$ = D.$JSCompiler_alias_TRUE$$, $optimalY$$1$$ = $isTop_labelInfo$$4$$.$getY$(), $highestY_isStartAtTop_maxY$$9$$ = $optimalY$$1$$ + $labelHeight$$2$$ < $highestY_isStartAtTop_maxY$$9$$ ? $optimalY$$1$$ : $highestY_isStartAtTop_maxY$$9$$ - 
        $labelHeight$$2$$, $isTop_labelInfo$$4$$.$setY$($highestY_isStartAtTop_maxY$$9$$)
      }
    }
    if($isBottom$$) {
      for($i$$485_isLeft$$3_startLabel$$ = $minY$$9_startIndex$$12$$ + 1;$i$$485_isLeft$$3_startLabel$$ < $alabels$$3$$.length;$i$$485_isLeft$$3_startLabel$$++) {
        $isTop_labelInfo$$4$$ = $alabels$$3$$[$i$$485_isLeft$$3_startLabel$$], $labelHeight$$2$$ = $isTop_labelInfo$$4$$.getHeight(), D.$DvtPieLabelUtils$$.$_setOptimalLabelPosition$($pie$$8$$, $isTop_labelInfo$$4$$, $frame$$2_vertX$$1$$), $isTop_labelInfo$$4$$.$_hasFeeler$ = D.$JSCompiler_alias_TRUE$$, $optimalY$$1$$ = $isTop_labelInfo$$4$$.$getY$(), $lowestY_minFeelerDist$$ = $optimalY$$1$$ > $lowestY_minFeelerDist$$ ? $optimalY$$1$$ + $labelHeight$$2$$ : $lowestY_minFeelerDist$$ + $labelHeight$$2$$, 
        $isTop_labelInfo$$4$$.$setY$($lowestY_minFeelerDist$$ - $labelHeight$$2$$)
      }
    }
  }
};
D.$DvtPieLabelUtils$$.$_truncateSliceLabel$ = function $$DvtPieLabelUtils$$$$_truncateSliceLabel$$($pie$$9_tmDimPt$$, $frame$$3_slice$$23$$, $labelInfo$$5$$, $isLeft$$4$$) {
  var $sliceLabel$$5$$ = $labelInfo$$5$$.$_sliceLabel$, $style$$38$$ = $sliceLabel$$5$$.$getCSSStyle$(), $maxLabelWidth$$2_numChildren$$7$$ = 0, $maxLabelWidth$$2_numChildren$$7$$ = $pie$$9_tmDimPt$$.$getNumChildren$(), $removeTextArea$$ = D.$JSCompiler_alias_FALSE$$;
  $pie$$9_tmDimPt$$.contains($sliceLabel$$5$$) || ($pie$$9_tmDimPt$$.$addChild$($sliceLabel$$5$$), $removeTextArea$$ = D.$JSCompiler_alias_TRUE$$);
  $sliceLabel$$5$$.$setCSSStyle$($style$$38$$);
  $sliceLabel$$5$$.$setTextString$($frame$$3_slice$$23$$.$_sliceLabelString$);
  $removeTextArea$$ && $pie$$9_tmDimPt$$.$removeChildAt$($maxLabelWidth$$2_numChildren$$7$$);
  $frame$$3_slice$$23$$ = $pie$$9_tmDimPt$$.$_frame$;
  $maxLabelWidth$$2_numChildren$$7$$ = $isLeft$$4$$ ? $labelInfo$$5$$.$getX$() - $frame$$3_slice$$23$$.x : $frame$$3_slice$$23$$.x + $frame$$3_slice$$23$$.$w$ - $labelInfo$$5$$.$getX$();
  $pie$$9_tmDimPt$$ = D.$DvtPieLabelUtils$$.$_getTextDimension$($pie$$9_tmDimPt$$, $sliceLabel$$5$$, $maxLabelWidth$$2_numChildren$$7$$, $labelInfo$$5$$.$_initialNumLines$);
  $labelInfo$$5$$.$setWidth$($pie$$9_tmDimPt$$.x);
  $labelInfo$$5$$.getHeight() != $pie$$9_tmDimPt$$.y && $labelInfo$$5$$.$setHeight$($pie$$9_tmDimPt$$.y)
};
D.$DvtPieLabelUtils$$.$_generateInitialLayout$ = function $$DvtPieLabelUtils$$$$_generateInitialLayout$$($pie$$10$$) {
  var $arArrays$$ = (0,window.Array)(2), $leftLabels$$1$$ = [], $rightLabels$$1$$ = [], $dist$$1_labelPt$$, $maxLabelWidth$$3_tmDimPt$$1$$, $ma$$2$$ = 0, $pa$$2_tilt$$4$$ = 0, $i$$486$$, $s_label$$, $slices$$7$$ = $pie$$10$$.$_slices$, $n$$29$$ = $slices$$7$$.length, $frame$$4$$ = $pie$$10$$.$_frame$;
  if(0 < $n$$29$$) {
    for($i$$486$$ = 0;$i$$486$$ < $n$$29$$;$i$$486$$++) {
      window.slice = $slices$$7$$[$i$$486$$], $s_label$$ = D.$DvtPieLabelUtils$$.$_createLabel$(window.slice), $ma$$2$$ = window.slice.$getAngleStart$() + window.slice.$getAngleExtent$() / 2, 360 < $ma$$2$$ && ($ma$$2$$ -= 360), 0 > $ma$$2$$ && ($ma$$2$$ += 360), $dist$$1_labelPt$$ = 1 + D.$DvtPieLabelUtils$$.$_OUTSIDE_LABEL_DISTANCE$, $dist$$1_labelPt$$ = D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($ma$$2$$, $pie$$10$$.$getCenter$().x, $pie$$10$$.$getCenter$().y, $pie$$10$$.$_radiusX$ * $dist$$1_labelPt$$, 
      $pie$$10$$.$_radiusY$ * $dist$$1_labelPt$$), $maxLabelWidth$$3_tmDimPt$$1$$ = 90 <= $ma$$2$$ && 270 > $ma$$2$$ ? $dist$$1_labelPt$$.x - $frame$$4$$.x : $frame$$4$$.x + $frame$$4$$.$w$ - $dist$$1_labelPt$$.x, $maxLabelWidth$$3_tmDimPt$$1$$ = D.$DvtPieLabelUtils$$.$_getTextDimension$($pie$$10$$, $s_label$$, $maxLabelWidth$$3_tmDimPt$$1$$, D.$DvtPieLabelUtils$$.$_MAX_LINES_PER_LABEL$), 165 > $ma$$2$$ && 15 < $ma$$2$$ ? $dist$$1_labelPt$$.y -= 1 * $maxLabelWidth$$3_tmDimPt$$1$$.y : 15 > $ma$$2$$ || 
      345 < $ma$$2$$ ? ($dist$$1_labelPt$$.y -= 0.5 * $maxLabelWidth$$3_tmDimPt$$1$$.y, $dist$$1_labelPt$$.x += 0.2 * $maxLabelWidth$$3_tmDimPt$$1$$.y) : 165 < $ma$$2$$ && 195 > $ma$$2$$ && ($dist$$1_labelPt$$.y -= 0.5 * $maxLabelWidth$$3_tmDimPt$$1$$.y, $dist$$1_labelPt$$.x -= 0.2 * $maxLabelWidth$$3_tmDimPt$$1$$.y), $pa$$2_tilt$$4$$ = D.$DvtPieLabelUtils$$.$_adjustForDepth$($ma$$2$$, $pie$$10$$.$getDepth$()), $dist$$1_labelPt$$.y += $pa$$2_tilt$$4$$, 1 == $n$$29$$ && ($dist$$1_labelPt$$.x -= $maxLabelWidth$$3_tmDimPt$$1$$.x / 
      2), $dist$$1_labelPt$$.y < $frame$$4$$.y && ($dist$$1_labelPt$$.y = $frame$$4$$.y), $dist$$1_labelPt$$.y + $maxLabelWidth$$3_tmDimPt$$1$$.y > $frame$$4$$.y + $frame$$4$$.$h$ && ($dist$$1_labelPt$$.y = $frame$$4$$.y + $frame$$4$$.$h$ - $maxLabelWidth$$3_tmDimPt$$1$$.y), 90 <= $ma$$2$$ && 270 > $ma$$2$$ ? ($s_label$$.$alignRight$(), $pa$$2_tilt$$4$$ = $ma$$2$$ - 90, D.$DvtPieLabelUtils$$.$_createLabelInfo$($s_label$$, $ma$$2$$, $pa$$2_tilt$$4$$, $maxLabelWidth$$3_tmDimPt$$1$$, $dist$$1_labelPt$$, 
      $leftLabels$$1$$)) : ($pa$$2_tilt$$4$$ = 90 >= $ma$$2$$ ? window.Math.abs(90 - $ma$$2$$) : 180 - ($ma$$2$$ - 270), D.$DvtPieLabelUtils$$.$_createLabelInfo$($s_label$$, $ma$$2$$, $pa$$2_tilt$$4$$, $maxLabelWidth$$3_tmDimPt$$1$$, $dist$$1_labelPt$$, $rightLabels$$1$$))
    }
  }
  $arArrays$$[0] = $leftLabels$$1$$;
  $arArrays$$[1] = $rightLabels$$1$$;
  return $arArrays$$
};
D.$DvtPieLabelUtils$$.$_createLabelInfo$ = function $$DvtPieLabelUtils$$$$_createLabelInfo$$($sliceLabel$$6$$, $ma$$3$$, $pa$$3$$, $tmDimPt$$2$$, $labelPt$$1$$, $labelInfoArray$$1$$) {
  for(var $slice$$24$$ = window.slice, $insertPos$$ = -1, $labelInfo$$6$$, $j$$82$$ = 0;$j$$82$$ < $labelInfoArray$$1$$.length;$j$$82$$++) {
    if($labelInfo$$6$$ = $labelInfoArray$$1$$[$j$$82$$], $labelInfo$$6$$.$getPosition$() > $pa$$3$$) {
      $insertPos$$ = $j$$82$$;
      break
    }
  }
  -1 == $insertPos$$ && ($insertPos$$ = $labelInfoArray$$1$$.length);
  $labelInfo$$6$$ = new D.$DvtPieLabelInfo$$;
  $labelInfo$$6$$.$setPosition$($pa$$3$$);
  $labelInfo$$6$$.$setAngle$($ma$$3$$);
  $labelInfo$$6$$.$setSliceLabel$($sliceLabel$$6$$);
  $labelInfo$$6$$.$_slice$ = $slice$$24$$;
  $labelInfo$$6$$.$setWidth$($tmDimPt$$2$$.x);
  $labelInfo$$6$$.$setHeight$($tmDimPt$$2$$.y);
  $labelInfo$$6$$.$setX$($labelPt$$1$$.x);
  $labelInfo$$6$$.$setY$($labelPt$$1$$.y);
  $labelInfoArray$$1$$.splice($insertPos$$, 0, $labelInfo$$6$$)
};
D.$DvtPieLabelUtils$$.$_getTextDimension$ = function $$DvtPieLabelUtils$$$$_getTextDimension$$($pieChart$$10$$, $sliceLabel$$7$$, $dimensions$$1_maxWidth$$17$$, $maxLines$$) {
  $sliceLabel$$7$$.$setMaxLines$($maxLines$$);
  D.$DvtTextUtils$$.$fitText$($sliceLabel$$7$$, $dimensions$$1_maxWidth$$17$$, window.Infinity, $pieChart$$10$$);
  $pieChart$$10$$.$addChild$($sliceLabel$$7$$);
  $dimensions$$1_maxWidth$$17$$ = $sliceLabel$$7$$.$getDimensions$();
  $pieChart$$10$$.removeChild($sliceLabel$$7$$);
  return{x:$dimensions$$1_maxWidth$$17$$.$w$, y:$dimensions$$1_maxWidth$$17$$.$h$}
};
D.$DvtChartRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartRenderer$$, D.$DvtObj$$, "DvtChartRenderer");
D.$DvtChartRenderer$$.$_EMPTY_TEXT_GAP_WIDTH$ = 2;
D.$DvtChartRenderer$$.$_EMPTY_TEXT_GAP_HEIGHT$ = 1;
D.$DvtChartRenderer$$.$_BUTTON_SIZE$ = 16;
D.$DvtChartRenderer$$.$_BUTTON_PADDING$ = 5;
D.$DvtChartRenderer$$.$_BUTTON_CORNER_DIST$ = 4;
D.$DvtChartRenderer$$.$_BUTTON_OPACITY$ = 0.8;
D.$DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_SLOW$ = 0.05;
D.$DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_FAST$ = 0.2;
D.$DvtChartRenderer$$.$render$ = function $$DvtChartRenderer$$$$render$$($chart$$48$$, $container$$76$$, $availSpace$$37$$) {
  D.$DvtChartRenderer$$.$_renderBackground$($chart$$48$$, $container$$76$$, $availSpace$$37$$);
  if(D.$DvtChartDataUtils$$.$hasData$($chart$$48$$)) {
    D.$DvtChartRenderer$$.$_addOuterGaps$($chart$$48$$, $availSpace$$37$$);
    D.$DvtChartRenderer$$.$_renderTitles$($chart$$48$$, $container$$76$$, $availSpace$$37$$);
    D.$DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$37$$);
    D.$DvtChartLegendRenderer$$.$render$($chart$$48$$, $container$$76$$, $availSpace$$37$$);
    D.$DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$37$$);
    var $horizSbDim$$ = D.$DvtChartRenderer$$.$_prerenderHorizScrollbar$($chart$$48$$, $container$$76$$, $availSpace$$37$$), $vertSbDim$$ = D.$DvtChartRenderer$$.$_prerenderVertScrollbar$($chart$$48$$, $container$$76$$, $availSpace$$37$$);
    D.$DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$37$$);
    var $maxHeight$$inline_5359_space$$inline_5357$$ = $availSpace$$37$$.clone();
    $chart$$48$$.$_axisSpace$ = $maxHeight$$inline_5359_space$$inline_5357$$;
    var $maxWidth$$inline_5358_space$$inline_5362$$ = 0.8 * $maxHeight$$inline_5359_space$$inline_5357$$.$w$, $maxHeight$$inline_5359_space$$inline_5357$$ = $maxHeight$$inline_5359_space$$inline_5357$$.$h$ - 5 * D.$DvtChartAxisUtils$$.$getTickLabelFontSize$($chart$$48$$, "x");
    $chart$$48$$.$_radius$ = window.Math.min($maxWidth$$inline_5358_space$$inline_5362$$, $maxHeight$$inline_5359_space$$inline_5357$$) / 2;
    D.$DvtChartAxisRenderer$$.$render$($chart$$48$$, $container$$76$$, $availSpace$$37$$);
    D.$DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$37$$);
    $maxWidth$$inline_5358_space$$inline_5362$$ = $availSpace$$37$$.clone();
    $chart$$48$$.$_plotAreaSpace$ = $maxWidth$$inline_5358_space$$inline_5362$$;
    D.$DvtChartRenderer$$.$_setEventHandlers$($chart$$48$$);
    D.$DvtChartRenderer$$.$_renderScrollbars$($chart$$48$$, $horizSbDim$$, $vertSbDim$$);
    D.$DvtChartRenderer$$.$_renderPlotArea$($chart$$48$$, $container$$76$$, $availSpace$$37$$);
    D.$DvtChartTypeUtils$$.$isPolar$($chart$$48$$) && $container$$76$$.$addChild$($chart$$48$$.$yAxis$);
    D.$DvtChartRenderer$$.$_renderDragButtons$($chart$$48$$)
  }else {
    D.$DvtChartRenderer$$.$renderEmptyText$($chart$$48$$, $container$$76$$, $availSpace$$37$$)
  }
};
D.$DvtChartRenderer$$.$_setEventHandlers$ = function $$DvtChartRenderer$$$$_setEventHandlers$$($chart$$49$$) {
  var $options$$125$$ = $chart$$49$$.$getOptions$(), $em$$ = $chart$$49$$.$getEventManager$();
  if(D.$DvtChartTypeUtils$$.$hasAxes$($chart$$49$$) && !$options$$125$$._isOverview) {
    var $chartBounds$$ = new D.$DvtRectangle$$(0, 0, $chart$$49$$.getWidth(), $chart$$49$$.getHeight()), $plotAreaBounds$$1$$ = $chart$$49$$.$_plotAreaSpace$, $axisBounds_vertAxisBounds$$ = $chart$$49$$.$_axisSpace$, $horizAxisBounds$$ = new D.$DvtRectangle$$($plotAreaBounds$$1$$.x, $axisBounds_vertAxisBounds$$.y, $plotAreaBounds$$1$$.$w$, $axisBounds_vertAxisBounds$$.$h$), $axisBounds_vertAxisBounds$$ = new D.$DvtRectangle$$($axisBounds_vertAxisBounds$$.x, $plotAreaBounds$$1$$.y, $axisBounds_vertAxisBounds$$.$w$, 
    $plotAreaBounds$$1$$.$h$), $marqueeFill$$ = new D.$DvtSolidFill$$($options$$125$$.styleDefaults.marqueeColor), $marqueeStroke$$ = new D.$DvtSolidStroke$$($options$$125$$.styleDefaults.marqueeBorderColor), $marqueeHandler_panZoomHandler_zoomRate$$;
    if(D.$DvtChartTypeUtils$$.$isScrollSupported$($chart$$49$$) && D.$DvtChartEventUtils$$.$isScrollable$($chart$$49$$)) {
      $marqueeHandler_panZoomHandler_zoomRate$$ = D.$DvtChartEventUtils$$.$isDelayedScroll$($chart$$49$$) ? D.$DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_FAST$ : D.$DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_SLOW$;
      $marqueeHandler_panZoomHandler_zoomRate$$ = new D.$DvtPanZoomHandler$$($chart$$49$$, $plotAreaBounds$$1$$, $chartBounds$$, $marqueeHandler_panZoomHandler_zoomRate$$);
      var $panUpCursor$$inline_5365$$ = $options$$125$$._resources.panCursorUp, $panDownCursor$$inline_5366$$ = $options$$125$$._resources.panCursorDown;
      (0,D.$DvtAgent$isPlatformIE$$)() || ($panUpCursor$$inline_5365$$ && ($marqueeHandler_panZoomHandler_zoomRate$$.$_panUpCursor$ = "url(" + $panUpCursor$$inline_5365$$ + ") 8 8, auto"), $panDownCursor$$inline_5366$$ && ($marqueeHandler_panZoomHandler_zoomRate$$.$_panDownCursor$ = "url(" + $panDownCursor$$inline_5366$$ + ") 8 8, auto"));
      $em$$.$_panZoomHandler$ = $marqueeHandler_panZoomHandler_zoomRate$$;
      D.$DvtChartEventUtils$$.$isZoomable$($chart$$49$$) && ($marqueeHandler_panZoomHandler_zoomRate$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$49$$) ? new D.$DvtMarqueeHandler$$($chart$$49$$, $plotAreaBounds$$1$$, $chartBounds$$, $marqueeFill$$, $marqueeStroke$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_NULL$$, $axisBounds_vertAxisBounds$$) : D.$DvtChartTypeUtils$$.$isBLAC$($chart$$49$$) ? new D.$DvtMarqueeHandler$$($chart$$49$$, $plotAreaBounds$$1$$, $chartBounds$$, 
      $marqueeFill$$, $marqueeStroke$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$, $horizAxisBounds$$, D.$JSCompiler_alias_NULL$$) : new D.$DvtMarqueeHandler$$($chart$$49$$, $plotAreaBounds$$1$$, $chartBounds$$, $marqueeFill$$, $marqueeStroke$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$, $horizAxisBounds$$, $axisBounds_vertAxisBounds$$), $em$$.$_marqueeZoomHandler$ = $marqueeHandler_panZoomHandler_zoomRate$$)
    }
    "multiple" == $options$$125$$.selectionMode && ($marqueeHandler_panZoomHandler_zoomRate$$ = new D.$DvtMarqueeHandler$$($chart$$49$$, $plotAreaBounds$$1$$, $chartBounds$$, $marqueeFill$$, $marqueeStroke$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$, $horizAxisBounds$$, $axisBounds_vertAxisBounds$$), $em$$.$_marqueeSelectHandler$ = $marqueeHandler_panZoomHandler_zoomRate$$)
  }
};
D.$DvtChartRenderer$$.$rerenderAxisAndPlotArea$ = function $$DvtChartRenderer$$$$rerenderAxisAndPlotArea$$($chart$$50$$, $container$$77$$) {
  if(D.$DvtChartDataUtils$$.$hasData$($chart$$50$$)) {
    var $availSpace$$38$$ = $chart$$50$$.$_axisSpace$.clone(), $selectionHandler$$1$$ = $chart$$50$$.$getSelectionHandler$();
    if($selectionHandler$$1$$) {
      var $selectedIds$$2$$ = (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)($selectionHandler$$1$$)
    }
    $chart$$50$$.$__cleanUpAxisAndPlotArea$();
    D.$DvtChartAxisRenderer$$.$render$($chart$$50$$, $container$$77$$, $availSpace$$38$$);
    D.$DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$38$$);
    var $space$$inline_5378$$ = $availSpace$$38$$.clone();
    $chart$$50$$.$_plotAreaSpace$ = $space$$inline_5378$$;
    D.$DvtChartRenderer$$.$_renderPlotArea$($chart$$50$$, $container$$77$$, $availSpace$$38$$);
    $selectionHandler$$1$$ && (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($selectionHandler$$1$$, $selectedIds$$2$$, $chart$$50$$.$getObjects$());
    (0,D.$JSCompiler_StaticMethods_autoToggleZoomButton$$)($chart$$50$$.$getEventManager$());
    D.$DvtChartRenderer$$.$positionDragButtons$($chart$$50$$)
  }
};
D.$DvtChartRenderer$$.$_renderBackground$ = function $$DvtChartRenderer$$$$_renderBackground$$($chart$$51$$, $container$$78$$, $availSpace$$39_rect$$25$$) {
  var $options$$126$$ = $chart$$51$$.$getOptions$();
  $availSpace$$39_rect$$25$$ = new D.$DvtRect$$($chart$$51$$.$_context$, $availSpace$$39_rect$$25$$.x, $availSpace$$39_rect$$25$$.y, $availSpace$$39_rect$$25$$.$w$, $availSpace$$39_rect$$25$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($availSpace$$39_rect$$25$$);
  $container$$78$$.$addChild$($availSpace$$39_rect$$25$$);
  $chart$$51$$.$getEventManager$().$associate$($availSpace$$39_rect$$25$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$DvtChartEventManager$getUIEventParams$$)(D.$DvtChartConstants$$.$BACKGROUND$)));
  $availSpace$$39_rect$$25$$.$setAriaRole$("img");
  (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($availSpace$$39_rect$$25$$, "label", $options$$126$$.shortDesc)
};
D.$DvtChartRenderer$$.$_addOuterGaps$ = function $$DvtChartRenderer$$$$_addOuterGaps$$($chart$$52$$, $availSpace$$40$$) {
  var $gapHeight$$3_options$$127$$ = $chart$$52$$.$getOptions$(), $gapWidth$$3$$ = (0,D.$DvtChartDefaults$getGapSize$$)($chart$$52$$, $gapHeight$$3_options$$127$$.layout.outerGapWidth), $gapHeight$$3_options$$127$$ = (0,D.$DvtChartDefaults$getGapSize$$)($chart$$52$$, $gapHeight$$3_options$$127$$.layout.outerGapHeight);
  if(D.$DvtChartTypeUtils$$.$isStandalonePlotArea$($chart$$52$$) || D.$DvtChartTypeUtils$$.$isStandaloneXAxis$($chart$$52$$) || D.$DvtChartTypeUtils$$.$isStandaloneYAxis$($chart$$52$$) || D.$DvtChartTypeUtils$$.$isStandaloneY2Axis$($chart$$52$$)) {
    $gapWidth$$3$$ = window.Math.min($gapWidth$$3$$, 1), $gapHeight$$3_options$$127$$ = window.Math.min($gapHeight$$3_options$$127$$, 1)
  }
  $availSpace$$40$$.x += $gapWidth$$3$$;
  $availSpace$$40$$.$w$ -= 2 * $gapWidth$$3$$;
  $availSpace$$40$$.y += $gapHeight$$3_options$$127$$;
  $availSpace$$40$$.$h$ -= 2 * $gapHeight$$3_options$$127$$
};
D.$DvtChartRenderer$$.$_renderTitles$ = function $$DvtChartRenderer$$$$_renderTitles$$($chart$$53$$, $container$$79_footnoteObj$$, $availSpace$$41$$) {
  var $options$$128$$ = $chart$$53$$.$getOptions$();
  if($options$$128$$.title.text) {
    var $lowerSepObj_titleGapBelow_titleObj$$ = D.$DvtChartTextUtils$$.$createText$($chart$$53$$.$getEventManager$(), $container$$79_footnoteObj$$, $options$$128$$.title.text, $options$$128$$.title.style, $availSpace$$41$$.x, $availSpace$$41$$.y, $availSpace$$41$$.$w$, $availSpace$$41$$.$h$, (0,D.$DvtChartEventManager$getUIEventParams$$)(D.$DvtChartConstants$$.$TITLE$)), $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$, $titleDims$$2$$;
    $lowerSepObj_titleGapBelow_titleObj$$ ? ($titleDims$$2$$ = $lowerSepObj_titleGapBelow_titleObj$$.$getDimensions$(), $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ = $titleDims$$2$$.$h$) : ($footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ = 0, $titleDims$$2$$ = new D.$DvtRectangle$$(0, 0, 0, 0));
    if($options$$128$$.subtitle.text) {
      var $subtitleObj$$ = new D.$DvtOutputText$$($chart$$53$$.$_context$, $options$$128$$.subtitle.text, $availSpace$$41$$.x, $availSpace$$41$$.y);
      $subtitleObj$$.$setCSSStyle$($options$$128$$.subtitle.style);
      $container$$79_footnoteObj$$.$addChild$($subtitleObj$$);
      var $subtitleDims$$ = $subtitleObj$$.$measureDimensions$(), $titleSubtitleGap$$ = (0,D.$DvtChartDefaults$getGapSize$$)($chart$$53$$, $options$$128$$.layout.titleSubtitleGapWidth), $titleSpace$$ = $titleDims$$2$$.$w$ + $titleSubtitleGap$$ + $subtitleDims$$.$w$;
      $titleSpace$$ > $availSpace$$41$$.$w$ ? ($titleSubtitleGap$$ = (0,D.$DvtChartDefaults$getGapSize$$)($chart$$53$$, $options$$128$$.layout.titleSubtitleGapHeight), $subtitleObj$$.$setY$($availSpace$$41$$.y + $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ + $titleSubtitleGap$$), $container$$79_footnoteObj$$.removeChild($subtitleObj$$), D.$DvtTextUtils$$.$fitText$($subtitleObj$$, $availSpace$$41$$.$w$, $availSpace$$41$$.$h$, $chart$$53$$) && ($subtitleDims$$ = $subtitleObj$$.$measureDimensions$(), 
      $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ += $subtitleDims$$.$h$ + $titleSubtitleGap$$, (0,D.$DvtAgent$isRightToLeft$$)($chart$$53$$.$_context$) && ($subtitleObj$$ && $subtitleObj$$.$setX$($availSpace$$41$$.$w$ - $subtitleDims$$.$w$), $lowerSepObj_titleGapBelow_titleObj$$ && $lowerSepObj_titleGapBelow_titleObj$$.$setX$($availSpace$$41$$.$w$ - $titleDims$$2$$.$w$)))) : ($subtitleObj$$.$setY$($titleDims$$2$$.$h$ - $subtitleDims$$.$h$ + $availSpace$$41$$.y), (0,D.$DvtLayoutUtils$align$$)($availSpace$$41$$, 
      $options$$128$$.title.hAlign != D.$JSCompiler_alias_NULL$$ ? $options$$128$$.title.hAlign : $options$$128$$.title.halign, $lowerSepObj_titleGapBelow_titleObj$$, $titleSpace$$), (0,D.$DvtAgent$isRightToLeft$$)($chart$$53$$.$_context$) ? ($subtitleObj$$.$setX$($lowerSepObj_titleGapBelow_titleObj$$.$getX$()), $lowerSepObj_titleGapBelow_titleObj$$ && $lowerSepObj_titleGapBelow_titleObj$$.$setX$($lowerSepObj_titleGapBelow_titleObj$$.$getX$() + $subtitleDims$$.$w$ + $titleSubtitleGap$$)) : $subtitleObj$$.$setX$($lowerSepObj_titleGapBelow_titleObj$$.$getX$() + 
      $titleSpace$$ - $subtitleDims$$.$w$));
      (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($subtitleObj$$, "hidden", D.$JSCompiler_alias_NULL$$);
      $chart$$53$$.$getEventManager$().$associate$($subtitleObj$$, new D.$DvtSimpleObjPeer$$($subtitleObj$$.$_untruncatedTextString$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$DvtChartEventManager$getUIEventParams$$)(D.$DvtChartConstants$$.$SUBTITLE$)))
    }else {
      (0,D.$DvtLayoutUtils$align$$)($availSpace$$41$$, $options$$128$$.title.hAlign != D.$JSCompiler_alias_NULL$$ ? $options$$128$$.title.hAlign : $options$$128$$.title.halign, $lowerSepObj_titleGapBelow_titleObj$$, $titleDims$$2$$.$w$)
    }
    (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($lowerSepObj_titleGapBelow_titleObj$$, "hidden", D.$JSCompiler_alias_NULL$$);
    $lowerSepObj_titleGapBelow_titleObj$$ = "on" == $options$$128$$.titleSeparator.rendered ? $options$$128$$.layout.titleSeparatorGap : $options$$128$$.layout.titlePlotAreaGap;
    $availSpace$$41$$.y += $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ + (0,D.$DvtChartDefaults$getGapSize$$)($chart$$53$$, $lowerSepObj_titleGapBelow_titleObj$$);
    $availSpace$$41$$.$h$ -= $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ + (0,D.$DvtChartDefaults$getGapSize$$)($chart$$53$$, $lowerSepObj_titleGapBelow_titleObj$$);
    "on" == $options$$128$$.titleSeparator.rendered && ($footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ = new D.$DvtLine$$($chart$$53$$.$_context$, $availSpace$$41$$.x, $availSpace$$41$$.y, $availSpace$$41$$.x + $availSpace$$41$$.$w$, $availSpace$$41$$.y), $lowerSepObj_titleGapBelow_titleObj$$ = new D.$DvtLine$$($chart$$53$$.$_context$, $availSpace$$41$$.x, $availSpace$$41$$.y + 1, $availSpace$$41$$.x + $availSpace$$41$$.$w$, $availSpace$$41$$.y + 1), $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$.$setSolidStroke$($options$$128$$.titleSeparator.upperColor), 
    $lowerSepObj_titleGapBelow_titleObj$$.$setSolidStroke$($options$$128$$.titleSeparator.lowerColor), $container$$79_footnoteObj$$.$addChild$($footnoteDims_titleHeight_titleSepHeight_upperSepObj$$), $container$$79_footnoteObj$$.$addChild$($lowerSepObj_titleGapBelow_titleObj$$), $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ = 2 + (0,D.$DvtChartDefaults$getGapSize$$)($chart$$53$$, $options$$128$$.layout.titlePlotAreaGap), $availSpace$$41$$.y += $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$, 
    $availSpace$$41$$.$h$ -= $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$)
  }
  if($options$$128$$.footnote.text) {
    if($container$$79_footnoteObj$$ = D.$DvtChartTextUtils$$.$createText$($chart$$53$$.$getEventManager$(), $container$$79_footnoteObj$$, $options$$128$$.footnote.text, $options$$128$$.footnote.style, $availSpace$$41$$.x, 0, $availSpace$$41$$.$w$, $availSpace$$41$$.$h$, (0,D.$DvtChartEventManager$getUIEventParams$$)(D.$DvtChartConstants$$.$FOOTNOTE$))) {
      $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ = $container$$79_footnoteObj$$.$getDimensions$(), $container$$79_footnoteObj$$.$setY$($availSpace$$41$$.y + $availSpace$$41$$.$h$ - $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$.$h$), $availSpace$$41$$.$h$ -= $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$.$h$ + (0,D.$DvtChartDefaults$getGapSize$$)($chart$$53$$, $options$$128$$.layout.footnoteGap), (0,D.$DvtLayoutUtils$align$$)($availSpace$$41$$, $options$$128$$.footnote.hAlign != 
      D.$JSCompiler_alias_NULL$$ ? $options$$128$$.footnote.hAlign : $options$$128$$.footnote.halign, $container$$79_footnoteObj$$, $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$.$w$)
    }
    (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($container$$79_footnoteObj$$, "hidden", D.$JSCompiler_alias_NULL$$)
  }
};
D.$DvtChartRenderer$$.$_renderPlotArea$ = function $$DvtChartRenderer$$$$_renderPlotArea$$($chart$$54$$, $container$$80$$, $availSpace$$42$$) {
  if(D.$DvtChartTypeUtils$$.$hasAxes$($chart$$54$$)) {
    var $pieChart$$3_plotArea$$1$$ = new D.$DvtContainer$$($chart$$54$$.$_context$);
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($pieChart$$3_plotArea$$1$$, $availSpace$$42$$.x, $availSpace$$42$$.y);
    $container$$80$$.$addChild$($pieChart$$3_plotArea$$1$$);
    $chart$$54$$.$_plotArea$ = $pieChart$$3_plotArea$$1$$;
    D.$DvtPlotAreaRenderer$$.$render$($chart$$54$$, $pieChart$$3_plotArea$$1$$, new D.$DvtRectangle$$(0, 0, $availSpace$$42$$.$w$, $availSpace$$42$$.$h$))
  }else {
    D.$DvtChartTypeUtils$$.$isPie$($chart$$54$$) ? ($pieChart$$3_plotArea$$1$$ = new D.$DvtPieChart$$($chart$$54$$, $availSpace$$42$$), 0 < $pieChart$$3_plotArea$$1$$.$_slices$.length ? ($container$$80$$.$addChild$($pieChart$$3_plotArea$$1$$), $pieChart$$3_plotArea$$1$$.$render$()) : D.$DvtChartRenderer$$.$renderEmptyText$($chart$$54$$, $container$$80$$, $availSpace$$42$$)) : D.$DvtChartTypeUtils$$.$isFunnel$($chart$$54$$) && D.$DvtFunnelRenderer$$.$render$($chart$$54$$, $container$$80$$, $availSpace$$42$$)
  }
  $availSpace$$42$$.$w$ = 0;
  $availSpace$$42$$.$h$ = 0
};
D.$DvtChartRenderer$$.$renderEmptyText$ = function $$DvtChartRenderer$$$$renderEmptyText$$($chart$$55$$, $container$$81$$, $availSpace$$43$$) {
  var $options$$129$$ = $chart$$55$$.$getOptions$(), $emptyTextStr$$1_text$$57$$ = $options$$129$$.emptyText;
  $emptyTextStr$$1_text$$57$$ || ($emptyTextStr$$1_text$$57$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($chart$$55$$.$getBundle$(), "EMPTY_TEXT", D.$JSCompiler_alias_NULL$$));
  $emptyTextStr$$1_text$$57$$ = new D.$DvtOutputText$$($chart$$55$$.$_context$, $emptyTextStr$$1_text$$57$$, $availSpace$$43$$.x + $availSpace$$43$$.$w$ / 2, $availSpace$$43$$.y + $availSpace$$43$$.$h$ / 2);
  $emptyTextStr$$1_text$$57$$.$setCSSStyle$($options$$129$$.title.style);
  $emptyTextStr$$1_text$$57$$.$alignCenter$();
  $emptyTextStr$$1_text$$57$$.$alignMiddle$();
  D.$DvtTextUtils$$.$fitText$($emptyTextStr$$1_text$$57$$, $availSpace$$43$$.$w$ - 2 * D.$DvtChartRenderer$$.$_EMPTY_TEXT_GAP_WIDTH$, window.Infinity, $container$$81$$, 0) && ($emptyTextStr$$1_text$$57$$.$isTruncated$() && $chart$$55$$.$getEventManager$().$associate$($emptyTextStr$$1_text$$57$$, new D.$DvtSimpleObjPeer$$($emptyTextStr$$1_text$$57$$.$_untruncatedTextString$)), (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($emptyTextStr$$1_text$$57$$, "hidden", D.$JSCompiler_alias_NULL$$))
};
D.$DvtChartRenderer$$.$_prerenderHorizScrollbar$ = function $$DvtChartRenderer$$$$_prerenderHorizScrollbar$$($chart$$56$$, $container$$82$$, $availSpace$$44$$) {
  var $width$$94$$ = $availSpace$$44$$.$w$, $height$$82$$ = 0;
  if(D.$DvtChartEventUtils$$.$isScrollable$($chart$$56$$) && D.$DvtChartTypeUtils$$.$isHorizScrollbarSupported$($chart$$56$$)) {
    if(D.$DvtChartStyleUtils$$.$isOverviewRendered$($chart$$56$$)) {
      if($height$$82$$ = window.Math.min(D.$DvtChartStyleUtils$$.$getOverviewHeight$($chart$$56$$), $availSpace$$44$$.$h$), 0 < $height$$82$$) {
        var $oldOverviewChart$$ = $chart$$56$$.$overview$ ? $chart$$56$$.$overview$.$_chart$ : D.$JSCompiler_alias_NULL$$;
        $chart$$56$$.$overview$ = new D.$DvtChartOverview$$($chart$$56$$.$_context$, $chart$$56$$.$processEvent$, $chart$$56$$, $chart$$56$$.getId(), $oldOverviewChart$$);
        $container$$82$$.$addChild$($chart$$56$$.$overview$);
        (0,D.$DvtLayoutUtils$position$$)($availSpace$$44$$, "bottom", $chart$$56$$.$overview$, $width$$94$$, $height$$82$$, 10)
      }
    }else {
      $height$$82$$ = $chart$$56$$.$getOptions$().styleDefaults._scrollbarHeight, $chart$$56$$.$xScrollbar$ = new D.$DvtSimpleScrollbar$$($chart$$56$$.$_context$, $chart$$56$$.$processEvent$, $chart$$56$$), $container$$82$$.$addChild$($chart$$56$$.$xScrollbar$), (0,D.$DvtLayoutUtils$position$$)($availSpace$$44$$, "bottom", $chart$$56$$.$xScrollbar$, $width$$94$$, $height$$82$$, 8), $chart$$56$$.$overview$ = D.$JSCompiler_alias_NULL$$
    }
  }
  return new D.$DvtDimension$$($width$$94$$, $height$$82$$)
};
D.$DvtChartRenderer$$.$_prerenderVertScrollbar$ = function $$DvtChartRenderer$$$$_prerenderVertScrollbar$$($chart$$57$$, $container$$83$$, $availSpace$$45$$) {
  var $width$$95$$ = 0, $height$$83$$ = $availSpace$$45$$.$h$;
  if(D.$DvtChartEventUtils$$.$isScrollable$($chart$$57$$) && D.$DvtChartTypeUtils$$.$isVertScrollbarSupported$($chart$$57$$)) {
    var $width$$95$$ = $chart$$57$$.$getOptions$().styleDefaults._scrollbarHeight, $scrollbar$$ = new D.$DvtSimpleScrollbar$$($chart$$57$$.$_context$, $chart$$57$$.$processEvent$, $chart$$57$$);
    $container$$83$$.$addChild$($scrollbar$$);
    (0,D.$DvtLayoutUtils$position$$)($availSpace$$45$$, (0,D.$DvtAgent$isRightToLeft$$)($chart$$57$$.$_context$) ? "right" : "left", $scrollbar$$, $width$$95$$, $height$$83$$, 8);
    D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$57$$) ? $chart$$57$$.$xScrollbar$ = $scrollbar$$ : $chart$$57$$.$yScrollbar$ = $scrollbar$$
  }
  return new D.$DvtDimension$$($width$$95$$, $height$$83$$)
};
D.$DvtChartRenderer$$.$_renderScrollbars$ = function $$DvtChartRenderer$$$$_renderScrollbars$$($chart$$58$$, $horizScrollbarDim$$, $ovOptions_vertScrollbarDim$$) {
  var $options$$130$$ = $chart$$58$$.$getOptions$(), $sbOptions$$ = {color:$options$$130$$.styleDefaults._scrollbarHandleColor, backgroundColor:$options$$130$$.styleDefaults._scrollbarTrackColor}, $plotAreaDim$$ = $chart$$58$$.$_plotAreaSpace$, $hitAreaSize$$ = (0,D.$DvtAgent$isTouchDevice$$)() ? 8 : 4;
  if($chart$$58$$.$xScrollbar$) {
    $sbOptions$$.min = $chart$$58$$.$xAxis$.$getGlobalMin$();
    $sbOptions$$.max = $chart$$58$$.$xAxis$.$getGlobalMax$();
    if(D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$58$$)) {
      $sbOptions$$.isHorizontal = D.$JSCompiler_alias_FALSE$$, $sbOptions$$.isReversed = D.$JSCompiler_alias_FALSE$$, $chart$$58$$.$xScrollbar$.$setTranslateY$($plotAreaDim$$.y), $chart$$58$$.$xScrollbar$.$render$($sbOptions$$, $ovOptions_vertScrollbarDim$$.$w$, $plotAreaDim$$.$h$)
    }else {
      $sbOptions$$.isHorizontal = D.$JSCompiler_alias_TRUE$$;
      $sbOptions$$.isReversed = (0,D.$DvtAgent$isRightToLeft$$)($chart$$58$$.$_context$);
      $chart$$58$$.$xScrollbar$.$setTranslateX$($plotAreaDim$$.x);
      $chart$$58$$.$xScrollbar$.$render$($sbOptions$$, $plotAreaDim$$.$w$, $horizScrollbarDim$$.$h$);
      var $hitArea$$ = new D.$DvtRect$$($chart$$58$$.$_context$, 0, -$hitAreaSize$$, $plotAreaDim$$.$w$, $horizScrollbarDim$$.$h$ + 2 * $hitAreaSize$$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($hitArea$$);
      $chart$$58$$.$xScrollbar$.$addChild$($hitArea$$)
    }
    $chart$$58$$.$xScrollbar$.$setViewportRange$($chart$$58$$.$xAxis$.$getViewportMin$(), $chart$$58$$.$xAxis$.$getViewportMax$())
  }
  $chart$$58$$.$yScrollbar$ && ($sbOptions$$.min = $chart$$58$$.$yAxis$.$getGlobalMin$(), $sbOptions$$.max = $chart$$58$$.$yAxis$.$getGlobalMax$(), $sbOptions$$.isHorizontal = D.$JSCompiler_alias_FALSE$$, $sbOptions$$.isReversed = D.$JSCompiler_alias_TRUE$$, $chart$$58$$.$yScrollbar$.$setTranslateY$($plotAreaDim$$.y), $chart$$58$$.$yScrollbar$.$render$($sbOptions$$, $ovOptions_vertScrollbarDim$$.$w$, $plotAreaDim$$.$h$), $chart$$58$$.$yScrollbar$.$setViewportRange$($chart$$58$$.$yAxis$.$getViewportMin$(), 
  $chart$$58$$.$yAxis$.$getViewportMax$()), $hitArea$$ = new D.$DvtRect$$($chart$$58$$.$_context$, -$hitAreaSize$$, 0, $ovOptions_vertScrollbarDim$$.$w$ + 2 * $hitAreaSize$$, $plotAreaDim$$.$h$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($hitArea$$), $chart$$58$$.$yScrollbar$.$addChild$($hitArea$$));
  $chart$$58$$.$overview$ && ($ovOptions_vertScrollbarDim$$ = {startTime:$chart$$58$$.$xAxis$.$getGlobalMin$(), endTime:$chart$$58$$.$xAxis$.$getGlobalMax$(), viewportStartTime:$chart$$58$$.$xAxis$.$getViewportMin$(), viewportEndTime:$chart$$58$$.$xAxis$.$getViewportMax$(), minimumWindowSize:$chart$$58$$.$xAxis$.$getMinimumExtent$(), chart:D.$DvtJSONUtils$$.clone($options$$130$$)}, D.$DvtChartEventUtils$$.$isZoomable$($chart$$58$$) || ($ovOptions_vertScrollbarDim$$.featuresOff = "zoom"), $chart$$58$$.$overview$.$setTranslateX$($plotAreaDim$$.x), 
  $chart$$58$$.$overview$.$render$($ovOptions_vertScrollbarDim$$, $plotAreaDim$$.$w$, $horizScrollbarDim$$.$h$), $chart$$58$$.$overview$.$setViewportRange$($chart$$58$$.$xAxis$.$getViewportMin$(), $chart$$58$$.$xAxis$.$getViewportMax$()))
};
D.$DvtChartRenderer$$.$_renderDragButtons$ = function $$DvtChartRenderer$$$$_renderDragButtons$$($chart$$59$$) {
  var $options$$131_position$$17_tooltip$$36$$ = $chart$$59$$.$getOptions$();
  if(D.$DvtChartTypeUtils$$.$hasAxes$($chart$$59$$) && !$options$$131_position$$17_tooltip$$36$$._isOverview) {
    var $isTouch$$1$$ = (0,D.$DvtAgent$isTouchDevice$$)(), $isScrollable$$3$$ = D.$DvtChartTypeUtils$$.$isScrollSupported$($chart$$59$$) && D.$DvtChartEventUtils$$.$isScrollable$($chart$$59$$), $em$$1$$ = $chart$$59$$.$getEventManager$();
    $chart$$59$$.$dragButtons$ = new D.$DvtContainer$$($chart$$59$$.$_context$);
    var $resources$$8$$ = $options$$131_position$$17_tooltip$$36$$._resources;
    if("multiple" == $options$$131_position$$17_tooltip$$36$$.selectionMode && ($isTouch$$1$$ || $isScrollable$$3$$)) {
      $options$$131_position$$17_tooltip$$36$$ = $isScrollable$$3$$ && ($isTouch$$1$$ || D.$DvtChartEventUtils$$.$isZoomable$($chart$$59$$)) ? "end" : "solo", $em$$1$$.$selectButton$ = D.$DvtChartRenderer$$.$_createDragButton$($chart$$59$$, $chart$$59$$.$dragButtons$, $resources$$8$$.selectUp, $resources$$8$$.selectDown, $em$$1$$.$onSelectButtonClick$, $em$$1$$, $options$$131_position$$17_tooltip$$36$$), $options$$131_position$$17_tooltip$$36$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($chart$$59$$.$getBundle$(), 
      "MARQUEE_SELECT"), $em$$1$$.$associate$($em$$1$$.$selectButton$, new D.$DvtSimpleObjPeer$$($options$$131_position$$17_tooltip$$36$$))
    }
    $isScrollable$$3$$ && ($options$$131_position$$17_tooltip$$36$$ = $em$$1$$.$selectButton$ == D.$JSCompiler_alias_NULL$$ ? "solo" : "start", $isTouch$$1$$ ? ($em$$1$$.$panButton$ = D.$DvtChartRenderer$$.$_createDragButton$($chart$$59$$, $chart$$59$$.$dragButtons$, $resources$$8$$.panUp, $resources$$8$$.panDown, $em$$1$$.$onPanButtonClick$, $em$$1$$, $options$$131_position$$17_tooltip$$36$$), $options$$131_position$$17_tooltip$$36$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($chart$$59$$.$getBundle$(), 
    "PAN"), $em$$1$$.$associate$($em$$1$$.$panButton$, new D.$DvtSimpleObjPeer$$($options$$131_position$$17_tooltip$$36$$))) : D.$DvtChartEventUtils$$.$isZoomable$($chart$$59$$) && ($em$$1$$.$zoomButton$ = D.$DvtChartRenderer$$.$_createDragButton$($chart$$59$$, $chart$$59$$.$dragButtons$, $resources$$8$$.zoomUp, $resources$$8$$.zoomDown, $em$$1$$.$onZoomButtonClick$, $em$$1$$, $options$$131_position$$17_tooltip$$36$$), $options$$131_position$$17_tooltip$$36$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($chart$$59$$.$getBundle$(), 
    "MARQUEE_ZOOM"), $em$$1$$.$associate$($em$$1$$.$zoomButton$, new D.$DvtSimpleObjPeer$$($options$$131_position$$17_tooltip$$36$$))));
    D.$DvtChartRenderer$$.$positionDragButtons$($chart$$59$$);
    (0,D.$JSCompiler_StaticMethods_setDragMode$$)($em$$1$$, D.$JSCompiler_alias_NULL$$);
    0 < $chart$$59$$.$dragButtons$.$getNumChildren$() && ($chart$$59$$.$addChild$($chart$$59$$.$dragButtons$), $isTouch$$1$$ ? $isScrollable$$3$$ && ((0,D.$JSCompiler_StaticMethods_setToggled$$)($em$$1$$.$panButton$, D.$JSCompiler_alias_TRUE$$), $em$$1$$.$onPanButtonClick$()) : (0,D.$JSCompiler_StaticMethods_hideDragButtons$$)($chart$$59$$), $chart$$59$$.$dragButtons$.setCursor("default"))
  }
};
D.$DvtChartRenderer$$.$_positionDragButton$ = function $$DvtChartRenderer$$$$_positionDragButton$$($chart$$60_transX$$6$$, $button$$57$$, $availSpace$$46$$) {
  (0,D.$DvtAgent$isRightToLeft$$)($chart$$60_transX$$6$$.$_context$) ? ($chart$$60_transX$$6$$ = $availSpace$$46$$.x + D.$DvtChartRenderer$$.$_BUTTON_PADDING$, $availSpace$$46$$.x += D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * D.$DvtChartRenderer$$.$_BUTTON_PADDING$) : $chart$$60_transX$$6$$ = $availSpace$$46$$.x + $availSpace$$46$$.$w$ - D.$DvtChartRenderer$$.$_BUTTON_SIZE$ - D.$DvtChartRenderer$$.$_BUTTON_PADDING$;
  $availSpace$$46$$.$w$ -= D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * D.$DvtChartRenderer$$.$_BUTTON_PADDING$;
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($button$$57$$, $chart$$60_transX$$6$$, $availSpace$$46$$.y + D.$DvtChartRenderer$$.$_BUTTON_PADDING$)
};
D.$DvtChartRenderer$$.$positionDragButtons$ = function $$DvtChartRenderer$$$$positionDragButtons$$($chart$$61$$) {
  var $availSpace$$47$$ = $chart$$61$$.$_plotAreaSpace$.clone();
  $availSpace$$47$$.x += D.$DvtChartRenderer$$.$_BUTTON_CORNER_DIST$;
  $availSpace$$47$$.$w$ -= 2 * D.$DvtChartRenderer$$.$_BUTTON_CORNER_DIST$;
  $availSpace$$47$$.y += D.$DvtChartRenderer$$.$_BUTTON_CORNER_DIST$;
  var $em$$2$$ = $chart$$61$$.$getEventManager$();
  $em$$2$$.$selectButton$ && D.$DvtChartRenderer$$.$_positionDragButton$($chart$$61$$, $em$$2$$.$selectButton$, $availSpace$$47$$);
  $em$$2$$.$panButton$ && D.$DvtChartRenderer$$.$_positionDragButton$($chart$$61$$, $em$$2$$.$panButton$, $availSpace$$47$$);
  $em$$2$$.$zoomButton$ && D.$DvtChartRenderer$$.$_positionDragButton$($chart$$61$$, $em$$2$$.$zoomButton$, $availSpace$$47$$)
};
D.$DvtChartRenderer$$.$_createDragButtonBackground$ = function $$DvtChartRenderer$$$$_createDragButtonBackground$$($context$$259$$, $position$$18$$) {
  var $background$$4_blcr_cmd$$7$$ = 2, $trcr$$ = 2, $isR2L$$5_pos$$41$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$259$$);
  "start" == $position$$18$$ ? $isR2L$$5_pos$$41$$ ? $background$$4_blcr_cmd$$7$$ = 0 : $trcr$$ = 0 : "end" == $position$$18$$ && ($isR2L$$5_pos$$41$$ ? $trcr$$ = 0 : $background$$4_blcr_cmd$$7$$ = 0);
  var $isR2L$$5_pos$$41$$ = -D.$DvtChartRenderer$$.$_BUTTON_PADDING$, $size$$27$$ = D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * D.$DvtChartRenderer$$.$_BUTTON_PADDING$, $background$$4_blcr_cmd$$7$$ = window.DvtPathUtils.$roundedRectangle$($isR2L$$5_pos$$41$$, $isR2L$$5_pos$$41$$, $size$$27$$, $size$$27$$, $background$$4_blcr_cmd$$7$$, $trcr$$, $trcr$$, $background$$4_blcr_cmd$$7$$), $background$$4_blcr_cmd$$7$$ = new D.$DvtPath$$($context$$259$$, $background$$4_blcr_cmd$$7$$);
  1 < (0,D.$DvtAgent$getDevicePixelRatio$$)() ? ($background$$4_blcr_cmd$$7$$.$setSolidStroke$("#D8DEE3", 1, 1), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($background$$4_blcr_cmd$$7$$)) : $background$$4_blcr_cmd$$7$$.$setSolidStroke$("#B8BDC1", 1, 1);
  return $background$$4_blcr_cmd$$7$$
};
D.$DvtChartRenderer$$.$_createDragButton$ = function $$DvtChartRenderer$$$$_createDragButton$$($chart$$62_context$$260$$, $container$$85_isR2L$$6$$, $overDownState_upSrc$$, $button$$58_downSrc$$, $callback$$85_enabled$$inline_5385_hitPadding$$, $callbackObj$$49$$, $hitArea$$1_position$$19$$) {
  $chart$$62_context$$260$$ = $chart$$62_context$$260$$.$_context$;
  var $upState$$11$$ = D.$DvtChartRenderer$$.$_createDragButtonBackground$($chart$$62_context$$260$$, $hitArea$$1_position$$19$$);
  $upState$$11$$.$setSolidFill$("#FFFFFF", D.$DvtChartRenderer$$.$_BUTTON_OPACITY$);
  $upState$$11$$.$addChild$(new D.$DvtImage$$($chart$$62_context$$260$$, $overDownState_upSrc$$, 0, 0, D.$DvtChartRenderer$$.$_BUTTON_SIZE$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$));
  var $overState$$8$$ = D.$DvtChartRenderer$$.$_createDragButtonBackground$($chart$$62_context$$260$$, $hitArea$$1_position$$19$$);
  $overState$$8$$.$setSolidFill$("#E2E3E4", D.$DvtChartRenderer$$.$_BUTTON_OPACITY$);
  $overState$$8$$.$addChild$(new D.$DvtImage$$($chart$$62_context$$260$$, $overDownState_upSrc$$, 0, 0, D.$DvtChartRenderer$$.$_BUTTON_SIZE$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$));
  var $downState$$8$$ = D.$DvtChartRenderer$$.$_createDragButtonBackground$($chart$$62_context$$260$$, $hitArea$$1_position$$19$$);
  $downState$$8$$.$setFill$(new D.$DvtLinearGradientFill$$(90, ["#0527CE", "#0586F0"], [D.$DvtChartRenderer$$.$_BUTTON_OPACITY$, D.$DvtChartRenderer$$.$_BUTTON_OPACITY$]));
  $downState$$8$$.$addChild$(new D.$DvtImage$$($chart$$62_context$$260$$, $button$$58_downSrc$$, 0, 0, D.$DvtChartRenderer$$.$_BUTTON_SIZE$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$));
  $overDownState_upSrc$$ = D.$DvtChartRenderer$$.$_createDragButtonBackground$($chart$$62_context$$260$$, $hitArea$$1_position$$19$$);
  $overDownState_upSrc$$.$setSolidFill$("#0586F0", D.$DvtChartRenderer$$.$_BUTTON_OPACITY$);
  $overDownState_upSrc$$.$addChild$(new D.$DvtImage$$($chart$$62_context$$260$$, $button$$58_downSrc$$, 0, 0, D.$DvtChartRenderer$$.$_BUTTON_SIZE$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$));
  $button$$58_downSrc$$ = new D.$DvtButton$$($chart$$62_context$$260$$, $upState$$11$$, $overState$$8$$, $downState$$8$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $callback$$85_enabled$$inline_5385_hitPadding$$, $callbackObj$$49$$);
  if(!$button$$58_downSrc$$.$overDownState$ || $button$$58_downSrc$$.$overDownState$ == $overDownState_upSrc$$) {
    $callback$$85_enabled$$inline_5385_hitPadding$$ = D.$JSCompiler_alias_FALSE$$, $button$$58_downSrc$$.$overDownState$ && ($callback$$85_enabled$$inline_5385_hitPadding$$ = (0,D.$JSCompiler_StaticMethods__isButtonEnabled$$)($button$$58_downSrc$$.$overDownState$), $button$$58_downSrc$$.removeChild($button$$58_downSrc$$.$overDownState$)), $overDownState_upSrc$$ && $button$$58_downSrc$$.$addChild$($overDownState_upSrc$$), $button$$58_downSrc$$.$overDownState$ = $overDownState_upSrc$$, (0,D.$JSCompiler_StaticMethods__enableButton$$)($button$$58_downSrc$$.$overDownState$, 
    $callback$$85_enabled$$inline_5385_hitPadding$$)
  }
  $button$$58_downSrc$$.$_bToggleEnabled$ = D.$JSCompiler_alias_TRUE$$;
  $container$$85_isR2L$$6$$.$addChild$($button$$58_downSrc$$);
  $button$$58_downSrc$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, function($chart$$62_context$$260$$) {
    $chart$$62_context$$260$$.stopPropagation()
  });
  (0,D.$DvtAgent$isTouchDevice$$)() && ($container$$85_isR2L$$6$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$62_context$$260$$), $callback$$85_enabled$$inline_5385_hitPadding$$ = 2 * D.$DvtChartRenderer$$.$_BUTTON_PADDING$, $hitArea$$1_position$$19$$ = "solo" == $hitArea$$1_position$$19$$ ? new D.$DvtRect$$($chart$$62_context$$260$$, -$callback$$85_enabled$$inline_5385_hitPadding$$, -$callback$$85_enabled$$inline_5385_hitPadding$$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $callback$$85_enabled$$inline_5385_hitPadding$$, 
  D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $callback$$85_enabled$$inline_5385_hitPadding$$) : "start" == $hitArea$$1_position$$19$$ && !$container$$85_isR2L$$6$$ || "end" == $hitArea$$1_position$$19$$ && $container$$85_isR2L$$6$$ ? new D.$DvtRect$$($chart$$62_context$$260$$, -$callback$$85_enabled$$inline_5385_hitPadding$$, -$callback$$85_enabled$$inline_5385_hitPadding$$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 1.5 * $callback$$85_enabled$$inline_5385_hitPadding$$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 
  2 * $callback$$85_enabled$$inline_5385_hitPadding$$) : new D.$DvtRect$$($chart$$62_context$$260$$, -0.5 * $callback$$85_enabled$$inline_5385_hitPadding$$, -$callback$$85_enabled$$inline_5385_hitPadding$$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 1.5 * $callback$$85_enabled$$inline_5385_hitPadding$$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $callback$$85_enabled$$inline_5385_hitPadding$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($hitArea$$1_position$$19$$), $button$$58_downSrc$$.$addChild$($hitArea$$1_position$$19$$));
  return $button$$58_downSrc$$
};
D.$DvtChartRenderer$$.$_adjustAvailSpace$ = function $$DvtChartRenderer$$$$_adjustAvailSpace$$($availSpace$$48$$) {
  $availSpace$$48$$.x = window.Math.round($availSpace$$48$$.x);
  $availSpace$$48$$.y = window.Math.round($availSpace$$48$$.y);
  $availSpace$$48$$.$w$ = window.Math.round($availSpace$$48$$.$w$);
  $availSpace$$48$$.$h$ = window.Math.round($availSpace$$48$$.$h$)
};
D.$DvtChartAxisRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartAxisRenderer$$, D.$DvtObj$$, "DvtChartAxisRenderer");
D.$DvtChartAxisRenderer$$.$render$ = function $$DvtChartAxisRenderer$$$$render$$($chart$$34$$, $container$$69_xAxisInfo$$, $availSpace$$29$$) {
  if(D.$DvtChartTypeUtils$$.$hasAxes$($chart$$34$$)) {
    var $options$$116$$ = $chart$$34$$.$getOptions$(), $isHorizGraph_leftOverflow$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$34$$), $isVertGraph_yAxisInfo$$ = D.$DvtChartTypeUtils$$.$isVertical$($chart$$34$$), $isPolarGraph_rightOverflow$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$34$$), $isR2L$$1$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$34$$.$_context$), $newWidth$$3_numGroups$$1$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$34$$), $totalAvailSpace$$ = $availSpace$$29$$.clone(), 
    $axisGap$$1_y2AxisInfo$$ = $options$$116$$.layout.verticalAxisGap;
    if(D.$DvtChartTypeUtils$$.$isStandaloneXAxis$($chart$$34$$)) {
      $isHorizGraph_leftOverflow$$ && ($axisGap$$1_y2AxisInfo$$ *= D.$DvtChartAxisRenderer$$.$_getGapScalingFactor$($chart$$34$$, "x"), $availSpace$$29$$.y += $axisGap$$1_y2AxisInfo$$, $availSpace$$29$$.$h$ -= 2 * $axisGap$$1_y2AxisInfo$$)
    }else {
      if(D.$DvtChartTypeUtils$$.$isStandaloneYAxis$($chart$$34$$) || D.$DvtChartTypeUtils$$.$isStandaloneY2Axis$($chart$$34$$)) {
        $isVertGraph_yAxisInfo$$ && ($axisGap$$1_y2AxisInfo$$ *= D.$DvtChartAxisRenderer$$.$_getGapScalingFactor$($chart$$34$$, D.$DvtChartTypeUtils$$.$isStandaloneYAxis$($chart$$34$$) ? "y" : "y2"), $availSpace$$29$$.y += $axisGap$$1_y2AxisInfo$$, $availSpace$$29$$.$h$ -= 2 * $axisGap$$1_y2AxisInfo$$)
      }else {
        if($isHorizGraph_leftOverflow$$ && D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$34$$, "x") && !D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$34$$, "y2") || $isVertGraph_yAxisInfo$$ && (D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$34$$, "y") || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$34$$, "y2"))) {
          $axisGap$$1_y2AxisInfo$$ *= D.$DvtChartAxisRenderer$$.$_getGapScalingFactor$($chart$$34$$, $isHorizGraph_leftOverflow$$ ? "x" : "y"), $availSpace$$29$$.y += $axisGap$$1_y2AxisInfo$$, $availSpace$$29$$.$h$ -= $axisGap$$1_y2AxisInfo$$
        }
      }
    }
    D.$DvtChartTypeUtils$$.$isBubble$($chart$$34$$) && D.$DvtChartMarkerUtils$$.$calcBubbleSizes$($chart$$34$$, $availSpace$$29$$.$w$, $availSpace$$29$$.$h$);
    $isVertGraph_yAxisInfo$$ = D.$DvtChartAxisRenderer$$.$_createYAxis$($chart$$34$$, $container$$69_xAxisInfo$$, $availSpace$$29$$);
    $axisGap$$1_y2AxisInfo$$ = D.$DvtChartAxisRenderer$$.$_createY2Axis$($chart$$34$$, $container$$69_xAxisInfo$$, $availSpace$$29$$);
    D.$DvtChartAxisRenderer$$.$_positionAxis$($availSpace$$29$$, $totalAvailSpace$$, $isVertGraph_yAxisInfo$$, D.$DvtChartAxisRenderer$$.$_getTickLabelGap$($chart$$34$$, "y"));
    D.$DvtChartAxisRenderer$$.$_positionAxis$($availSpace$$29$$, $totalAvailSpace$$, $axisGap$$1_y2AxisInfo$$, D.$DvtChartAxisRenderer$$.$_getTickLabelGap$($chart$$34$$, "y2"));
    "pixel" == D.$DvtChartStyleUtils$$.$getBarSpacing$($chart$$34$$) && D.$DvtChartTypeUtils$$.$isBar$($chart$$34$$) && $availSpace$$29$$.$w$ > $newWidth$$3_numGroups$$1$$ && ($newWidth$$3_numGroups$$1$$ *= window.Math.floor($availSpace$$29$$.$w$ / $newWidth$$3_numGroups$$1$$), $availSpace$$29$$.x += ($availSpace$$29$$.$w$ - $newWidth$$3_numGroups$$1$$) / 2, $availSpace$$29$$.$w$ = $newWidth$$3_numGroups$$1$$);
    $container$$69_xAxisInfo$$ = D.$DvtChartAxisRenderer$$.$_createXAxis$($chart$$34$$, $container$$69_xAxisInfo$$, $availSpace$$29$$, $totalAvailSpace$$);
    $isPolarGraph_rightOverflow$$ ? ($container$$69_xAxisInfo$$.axis.$setTranslateX$($availSpace$$29$$.x), $container$$69_xAxisInfo$$.axis.$setTranslateY$($availSpace$$29$$.y), $container$$69_xAxisInfo$$.axis.$render$($container$$69_xAxisInfo$$.options, $availSpace$$29$$.$w$, $availSpace$$29$$.$h$)) : ($container$$69_xAxisInfo$$.axis.$render$($container$$69_xAxisInfo$$.options, $container$$69_xAxisInfo$$.$dim$.$w$, $container$$69_xAxisInfo$$.$dim$.$h$), D.$DvtChartAxisRenderer$$.$_positionAxis$($availSpace$$29$$, 
    $totalAvailSpace$$, $container$$69_xAxisInfo$$, D.$DvtChartAxisRenderer$$.$_getTickLabelGap$($chart$$34$$, "x")));
    $isPolarGraph_rightOverflow$$ && $isVertGraph_yAxisInfo$$ ? ($isVertGraph_yAxisInfo$$.axis.$setTranslateX$($availSpace$$29$$.x), $isVertGraph_yAxisInfo$$.axis.$setTranslateY$($availSpace$$29$$.y), $isVertGraph_yAxisInfo$$.axis.$render$($isVertGraph_yAxisInfo$$.options, $availSpace$$29$$.$w$, $availSpace$$29$$.$h$)) : $isHorizGraph_leftOverflow$$ ? ($isVertGraph_yAxisInfo$$ && ($isVertGraph_yAxisInfo$$.axis.$setTranslateX$($availSpace$$29$$.x), $isVertGraph_yAxisInfo$$.axis.$render$($isVertGraph_yAxisInfo$$.options, 
    $availSpace$$29$$.$w$, $isVertGraph_yAxisInfo$$.$dim$.$h$)), $axisGap$$1_y2AxisInfo$$ && ($isVertGraph_yAxisInfo$$ && this.$_alignYAxes$($isVertGraph_yAxisInfo$$.axis, $axisGap$$1_y2AxisInfo$$.axis, $options$$116$$, $axisGap$$1_y2AxisInfo$$.options), $axisGap$$1_y2AxisInfo$$.axis.$setTranslateX$($availSpace$$29$$.x), $axisGap$$1_y2AxisInfo$$.axis.$render$($axisGap$$1_y2AxisInfo$$.options, $availSpace$$29$$.$w$, $axisGap$$1_y2AxisInfo$$.$dim$.$h$)), $isHorizGraph_leftOverflow$$ = (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($isVertGraph_yAxisInfo$$.axis), 
    $isPolarGraph_rightOverflow$$ = (0,D.$JSCompiler_StaticMethods_getRightOverflow$$)($isVertGraph_yAxisInfo$$.axis), $availSpace$$29$$.x += $isHorizGraph_leftOverflow$$, $availSpace$$29$$.$w$ -= $isHorizGraph_leftOverflow$$ + $isPolarGraph_rightOverflow$$) : ($isHorizGraph_leftOverflow$$ = (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($container$$69_xAxisInfo$$.axis), $isPolarGraph_rightOverflow$$ = (0,D.$JSCompiler_StaticMethods_getRightOverflow$$)($container$$69_xAxisInfo$$.axis), $availSpace$$29$$.x += 
    $isHorizGraph_leftOverflow$$, $availSpace$$29$$.$w$ -= $isHorizGraph_leftOverflow$$ + $isPolarGraph_rightOverflow$$, $isVertGraph_yAxisInfo$$ && ($isVertGraph_yAxisInfo$$.axis.$setTranslateX$($isVertGraph_yAxisInfo$$.axis.$getTranslateX$() + ($isR2L$$1$$ ? -$isPolarGraph_rightOverflow$$ : $isHorizGraph_leftOverflow$$)), $isVertGraph_yAxisInfo$$.axis.$render$($isVertGraph_yAxisInfo$$.options, $isVertGraph_yAxisInfo$$.$dim$.$w$, $availSpace$$29$$.$h$)), $axisGap$$1_y2AxisInfo$$ && ($isVertGraph_yAxisInfo$$ && 
    this.$_alignYAxes$($isVertGraph_yAxisInfo$$.axis, $axisGap$$1_y2AxisInfo$$.axis, $options$$116$$, $axisGap$$1_y2AxisInfo$$.options), $axisGap$$1_y2AxisInfo$$.axis.$setTranslateX$($axisGap$$1_y2AxisInfo$$.axis.$getTranslateX$() + ($isR2L$$1$$ ? $isHorizGraph_leftOverflow$$ : -$isPolarGraph_rightOverflow$$)), $axisGap$$1_y2AxisInfo$$.axis.$render$($axisGap$$1_y2AxisInfo$$.options, $axisGap$$1_y2AxisInfo$$.$dim$.$w$, $availSpace$$29$$.$h$)));
    $chart$$34$$.$xAxis$ && ($chart$$34$$.$xAxis$.$destroy$(), $chart$$34$$.removeChild($chart$$34$$.$xAxis$));
    $chart$$34$$.$yAxis$ && ($chart$$34$$.$yAxis$.$destroy$(), $chart$$34$$.removeChild($chart$$34$$.$yAxis$));
    $chart$$34$$.$y2Axis$ && ($chart$$34$$.$y2Axis$.$destroy$(), $chart$$34$$.removeChild($chart$$34$$.$y2Axis$));
    $chart$$34$$.$xAxis$ = $container$$69_xAxisInfo$$.axis;
    $chart$$34$$.$yAxis$ = $isVertGraph_yAxisInfo$$ ? $isVertGraph_yAxisInfo$$.axis : D.$JSCompiler_alias_NULL$$;
    $chart$$34$$.$y2Axis$ = $axisGap$$1_y2AxisInfo$$ ? $axisGap$$1_y2AxisInfo$$.axis : D.$JSCompiler_alias_NULL$$
  }
};
D.$DvtChartAxisRenderer$$.$_createXAxis$ = function $$DvtChartAxisRenderer$$$$_createXAxis$$($chart$$35$$, $container$$70_maxWidth$$11$$, $availSpace$$30_isR2L$$2_maxHeight$$9$$, $axis$$44_totalAvailSpace$$1$$) {
  var $actualSize_options$$117$$ = $chart$$35$$.$getOptions$(), $position$$13$$ = D.$DvtChartAxisUtils$$.$getXAxisPosition$($chart$$35$$), $isStandalone$$ = D.$DvtChartTypeUtils$$.$isStandaloneXAxis$($chart$$35$$), $axisOptions$$1$$ = D.$DvtJSONUtils$$.clone($actualSize_options$$117$$.xAxis);
  $axisOptions$$1$$._isoConverter = $actualSize_options$$117$$._isoConverter;
  $axisOptions$$1$$.skin = $actualSize_options$$117$$.skin;
  $axisOptions$$1$$.layout.gapRatio = $chart$$35$$.$getGapRatio$();
  $axisOptions$$1$$.position = $position$$13$$;
  $axisOptions$$1$$.isStandalone = $isStandalone$$;
  $axisOptions$$1$$.groups = $actualSize_options$$117$$.groups;
  $axisOptions$$1$$.timeAxisType = $actualSize_options$$117$$.timeAxisType && D.$DvtChartTypeUtils$$.$isTimeAxisSupported$($chart$$35$$) ? $actualSize_options$$117$$.timeAxisType : "disabled";
  $axisOptions$$1$$.zoomAndScroll = $actualSize_options$$117$$.zoomAndScroll;
  $axisOptions$$1$$._isOverview = $actualSize_options$$117$$._isOverview;
  D.$DvtChartTypeUtils$$.$isPolar$($chart$$35$$) && ($axisOptions$$1$$.polarGridShape = D.$DvtChartAxisUtils$$.$isGridPolygonal$($chart$$35$$) ? "polygon" : "circle", $axisOptions$$1$$._radius = $chart$$35$$.$getRadius$(), $axisOptions$$1$$._numGroups = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$35$$), $axisOptions$$1$$.axisLine = D.$DvtJSONUtils$$.clone($actualSize_options$$117$$.yAxis.axisLine));
  if(!D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$35$$)) {
    var $axisOffset_dataValues_isHoriz$$5$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($chart$$35$$, "x");
    $axisOptions$$1$$.dataMin = $axisOptions$$1$$.dataMin != D.$JSCompiler_alias_NULL$$ ? $axisOptions$$1$$.dataMin : $axisOffset_dataValues_isHoriz$$5$$.min;
    $axisOptions$$1$$.dataMax = $axisOptions$$1$$.dataMax != D.$JSCompiler_alias_NULL$$ ? $axisOptions$$1$$.dataMax : $axisOffset_dataValues_isHoriz$$5$$.max
  }
  var $isGridShifted_tickLabelGap$$ = D.$DvtChartAxisUtils$$.$isGridShifted$($chart$$35$$);
  "tangential" == $position$$13$$ && D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$35$$) ? $isGridShifted_tickLabelGap$$ ? ($axisOptions$$1$$.startGroupOffset = 0.5, $axisOptions$$1$$.endGroupOffset = 0.5) : $axisOptions$$1$$.endGroupOffset = 1 : ($axisOffset_dataValues_isHoriz$$5$$ = D.$DvtChartAxisUtils$$.$getAxisOffset$($chart$$35$$), $axisOptions$$1$$.startGroupOffset = $axisOffset_dataValues_isHoriz$$5$$, $axisOptions$$1$$.endGroupOffset = $axisOffset_dataValues_isHoriz$$5$$, D.$DvtChartTypeUtils$$.$hasUncenteredSeries$($chart$$35$$) && 
  ($axisOptions$$1$$.endGroupOffset = 1));
  $axisOffset_dataValues_isHoriz$$5$$ = "top" == $position$$13$$ || "bottom" == $position$$13$$;
  $axisOptions$$1$$.leftBuffer = $axisOffset_dataValues_isHoriz$$5$$ ? $availSpace$$30_isR2L$$2_maxHeight$$9$$.x - $axis$$44_totalAvailSpace$$1$$.x : 0;
  $axisOptions$$1$$.rightBuffer = $axisOffset_dataValues_isHoriz$$5$$ ? $axis$$44_totalAvailSpace$$1$$.$w$ + $axis$$44_totalAvailSpace$$1$$.x - ($availSpace$$30_isR2L$$2_maxHeight$$9$$.$w$ + $availSpace$$30_isR2L$$2_maxHeight$$9$$.x) : 0;
  $axisOptions$$1$$._renderGridAtLabels = !$isGridShifted_tickLabelGap$$ || "disabled" != $axisOptions$$1$$.timeAxisType;
  $axis$$44_totalAvailSpace$$1$$ = new D.$DvtChartAxis$$($chart$$35$$.$_context$, $chart$$35$$.$processEvent$, $chart$$35$$);
  $container$$70_maxWidth$$11$$.$addChild$($axis$$44_totalAvailSpace$$1$$);
  $isGridShifted_tickLabelGap$$ = D.$DvtChartAxisRenderer$$.$_getTickLabelGap$($chart$$35$$, "x");
  $axisOffset_dataValues_isHoriz$$5$$ ? ($container$$70_maxWidth$$11$$ = $availSpace$$30_isR2L$$2_maxHeight$$9$$.$w$, $availSpace$$30_isR2L$$2_maxHeight$$9$$ = $isStandalone$$ ? $availSpace$$30_isR2L$$2_maxHeight$$9$$.$h$ - $isGridShifted_tickLabelGap$$ : D.$DvtChartStyleUtils$$.$getSizeInPixels$($axisOptions$$1$$.maxSize, $availSpace$$30_isR2L$$2_maxHeight$$9$$.$h$)) : ($container$$70_maxWidth$$11$$ = $isStandalone$$ ? $availSpace$$30_isR2L$$2_maxHeight$$9$$.$w$ - $isGridShifted_tickLabelGap$$ : 
  D.$DvtChartStyleUtils$$.$getSizeInPixels$($axisOptions$$1$$.maxSize, $availSpace$$30_isR2L$$2_maxHeight$$9$$.$w$), $availSpace$$30_isR2L$$2_maxHeight$$9$$ = $availSpace$$30_isR2L$$2_maxHeight$$9$$.$h$);
  "tangential" == $position$$13$$ ? $actualSize_options$$117$$ = new D.$DvtDimension$$(0, 0) : $actualSize_options$$117$$._duringAnimation ? $axisOffset_dataValues_isHoriz$$5$$ ? ($actualSize_options$$117$$ = new D.$DvtDimension$$($container$$70_maxWidth$$11$$, $chart$$35$$.$xAxis$.getHeight()), $availSpace$$30_isR2L$$2_maxHeight$$9$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$35$$.$_context$), $axisOptions$$1$$._startOverflow = $availSpace$$30_isR2L$$2_maxHeight$$9$$ ? (0,D.$JSCompiler_StaticMethods_getRightOverflow$$)($chart$$35$$.$xAxis$) : 
  (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($chart$$35$$.$xAxis$), $axisOptions$$1$$._endOverflow = $availSpace$$30_isR2L$$2_maxHeight$$9$$ ? (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($chart$$35$$.$xAxis$) : (0,D.$JSCompiler_StaticMethods_getRightOverflow$$)($chart$$35$$.$xAxis$)) : $actualSize_options$$117$$ = new D.$DvtDimension$$($chart$$35$$.$xAxis$.getWidth(), $availSpace$$30_isR2L$$2_maxHeight$$9$$) : $actualSize_options$$117$$ = $axis$$44_totalAvailSpace$$1$$.$getPreferredSize$($axisOptions$$1$$, 
  $container$$70_maxWidth$$11$$, $availSpace$$30_isR2L$$2_maxHeight$$9$$);
  return{axis:$axis$$44_totalAvailSpace$$1$$, options:$axisOptions$$1$$, position:$position$$13$$, $dim$:$actualSize_options$$117$$}
};
D.$DvtChartAxisRenderer$$.$_createYAxis$ = function $$DvtChartAxisRenderer$$$$_createYAxis$$($actualSize$$1_chart$$36$$, $container$$71_maxWidth$$12$$, $availSpace$$31_maxHeight$$10$$) {
  var $options$$118$$ = $actualSize$$1_chart$$36$$.$getOptions$();
  if(D.$DvtChartTypeUtils$$.$hasY2DataOnly$($actualSize$$1_chart$$36$$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $position$$14$$ = D.$DvtChartAxisUtils$$.$getYAxisPosition$($actualSize$$1_chart$$36$$), $isHoriz$$6$$ = "top" == $position$$14$$ || "bottom" == $position$$14$$, $isStandalone$$1$$ = D.$DvtChartTypeUtils$$.$isStandaloneYAxis$($actualSize$$1_chart$$36$$), $axisOptions$$2$$ = D.$DvtJSONUtils$$.clone($options$$118$$.yAxis);
  $axisOptions$$2$$.skin = $options$$118$$.skin;
  $axisOptions$$2$$.layout.gapRatio = $actualSize$$1_chart$$36$$.$getGapRatio$();
  $axisOptions$$2$$.position = $position$$14$$;
  $axisOptions$$2$$.isStandalone = $isStandalone$$1$$;
  var $axis$$45_dataValues$$1_isR2L$$3$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($actualSize$$1_chart$$36$$, "y", D.$DvtChartTypeUtils$$.$isBLAC$($actualSize$$1_chart$$36$$));
  $axisOptions$$2$$.dataMin = $axisOptions$$2$$.dataMin != D.$JSCompiler_alias_NULL$$ ? $axisOptions$$2$$.dataMin : $axis$$45_dataValues$$1_isR2L$$3$$.min;
  $axisOptions$$2$$.dataMax = $axisOptions$$2$$.dataMax != D.$JSCompiler_alias_NULL$$ ? $axisOptions$$2$$.dataMax : $axis$$45_dataValues$$1_isR2L$$3$$.max;
  $axisOptions$$2$$.timeAxisType = "disabled";
  $axisOptions$$2$$.zoomAndScroll = $options$$118$$.zoomAndScroll;
  D.$DvtChartTypeUtils$$.$isPolar$($actualSize$$1_chart$$36$$) && ($axisOptions$$2$$.polarGridShape = D.$DvtChartAxisUtils$$.$isGridPolygonal$($actualSize$$1_chart$$36$$) ? "polygon" : "circle", $axisOptions$$2$$._radius = $actualSize$$1_chart$$36$$.$getRadius$(), $axisOptions$$2$$._numGroups = D.$DvtChartDataUtils$$.$getGroupCount$($actualSize$$1_chart$$36$$), $axisOptions$$2$$.axisLine = D.$DvtJSONUtils$$.clone($options$$118$$.xAxis.axisLine));
  D.$DvtChartEventUtils$$.$isLiveScroll$($actualSize$$1_chart$$36$$) && (D.$DvtChartTypeUtils$$.$isBLAC$($actualSize$$1_chart$$36$$) && !D.$DvtChartTypeUtils$$.$isPolar$($actualSize$$1_chart$$36$$)) && ($axisOptions$$2$$._continuousExtent = "on");
  $isStandalone$$1$$ ? ($axisOptions$$2$$.leftBuffer = 0, $axisOptions$$2$$.rightBuffer = 0) : ($axis$$45_dataValues$$1_isR2L$$3$$ = (0,D.$DvtAgent$isRightToLeft$$)($actualSize$$1_chart$$36$$.$_context$), $axisOptions$$2$$.leftBuffer = $axis$$45_dataValues$$1_isR2L$$3$$ ? 0 : 10, $axisOptions$$2$$.rightBuffer = $axis$$45_dataValues$$1_isR2L$$3$$ ? 10 : 0);
  $axisOptions$$2$$._alwaysAlignRight = D.$JSCompiler_alias_TRUE$$;
  $axis$$45_dataValues$$1_isR2L$$3$$ = new D.$DvtChartAxis$$($actualSize$$1_chart$$36$$.$_context$, $actualSize$$1_chart$$36$$.$processEvent$, $actualSize$$1_chart$$36$$);
  $container$$71_maxWidth$$12$$.$addChild$($axis$$45_dataValues$$1_isR2L$$3$$);
  var $tickLabelGap$$1$$ = D.$DvtChartAxisRenderer$$.$_getTickLabelGap$($actualSize$$1_chart$$36$$, "x");
  $isHoriz$$6$$ ? ($container$$71_maxWidth$$12$$ = $availSpace$$31_maxHeight$$10$$.$w$, $availSpace$$31_maxHeight$$10$$ = $isStandalone$$1$$ ? $availSpace$$31_maxHeight$$10$$.$h$ - $tickLabelGap$$1$$ : D.$DvtChartStyleUtils$$.$getSizeInPixels$($axisOptions$$2$$.maxSize, $availSpace$$31_maxHeight$$10$$.$h$)) : ($container$$71_maxWidth$$12$$ = $isStandalone$$1$$ ? $availSpace$$31_maxHeight$$10$$.$w$ - $tickLabelGap$$1$$ : D.$DvtChartStyleUtils$$.$getSizeInPixels$($axisOptions$$2$$.maxSize, $availSpace$$31_maxHeight$$10$$.$w$), 
  $availSpace$$31_maxHeight$$10$$ = $availSpace$$31_maxHeight$$10$$.$h$);
  $actualSize$$1_chart$$36$$ = "radial" == $position$$14$$ ? new D.$DvtDimension$$(0, 0) : $options$$118$$._duringAnimation ? $isHoriz$$6$$ ? new D.$DvtDimension$$($container$$71_maxWidth$$12$$, $actualSize$$1_chart$$36$$.$yAxis$.getHeight()) : new D.$DvtDimension$$($actualSize$$1_chart$$36$$.$yAxis$.getWidth(), $availSpace$$31_maxHeight$$10$$) : $axis$$45_dataValues$$1_isR2L$$3$$.$getPreferredSize$($axisOptions$$2$$, $container$$71_maxWidth$$12$$, $availSpace$$31_maxHeight$$10$$);
  $options$$118$$.yAxis.min = $axisOptions$$2$$.min;
  $options$$118$$.yAxis.max = $axisOptions$$2$$.max;
  return{axis:$axis$$45_dataValues$$1_isR2L$$3$$, options:$axisOptions$$2$$, position:$position$$14$$, $dim$:$actualSize$$1_chart$$36$$}
};
D.$DvtChartAxisRenderer$$.$_createY2Axis$ = function $$DvtChartAxisRenderer$$$$_createY2Axis$$($actualSize$$2_chart$$37$$, $container$$72_maxWidth$$13$$, $availSpace$$32_maxHeight$$11$$) {
  var $options$$119$$ = $actualSize$$2_chart$$37$$.$getOptions$();
  if(D.$DvtChartTypeUtils$$.$hasY2Data$($actualSize$$2_chart$$37$$)) {
    var $position$$15$$ = D.$DvtChartAxisUtils$$.$getY2AxisPosition$($actualSize$$2_chart$$37$$), $isHoriz$$7$$ = "top" == $position$$15$$ || "bottom" == $position$$15$$, $isStandalone$$2$$ = D.$DvtChartTypeUtils$$.$isStandaloneY2Axis$($actualSize$$2_chart$$37$$), $axisOptions$$3$$ = D.$DvtJSONUtils$$.clone($options$$119$$.y2Axis);
    $axisOptions$$3$$.skin = $options$$119$$.skin;
    $axisOptions$$3$$.layout.gapRatio = $actualSize$$2_chart$$37$$.$getGapRatio$();
    $axisOptions$$3$$.position = $position$$15$$;
    $axisOptions$$3$$.isStandalone = $isStandalone$$2$$;
    var $axis$$46_dataValues$$2_isR2L$$4$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($actualSize$$2_chart$$37$$, "y2", D.$DvtChartTypeUtils$$.$isBLAC$($actualSize$$2_chart$$37$$));
    $axisOptions$$3$$.dataMin = $axisOptions$$3$$.dataMin != D.$JSCompiler_alias_NULL$$ ? $axisOptions$$3$$.dataMin : $axis$$46_dataValues$$2_isR2L$$4$$.min;
    $axisOptions$$3$$.dataMax = $axisOptions$$3$$.dataMax != D.$JSCompiler_alias_NULL$$ ? $axisOptions$$3$$.dataMax : $axis$$46_dataValues$$2_isR2L$$4$$.max;
    $axisOptions$$3$$.timeAxisType = "disabled";
    $axisOptions$$3$$.zoomAndScroll = $options$$119$$.zoomAndScroll;
    D.$DvtChartEventUtils$$.$isLiveScroll$($actualSize$$2_chart$$37$$) && (D.$DvtChartTypeUtils$$.$isBLAC$($actualSize$$2_chart$$37$$) && !D.$DvtChartTypeUtils$$.$isPolar$($actualSize$$2_chart$$37$$)) && ($axisOptions$$3$$._continuousExtent = "on");
    $isStandalone$$2$$ ? ($axisOptions$$3$$.leftBuffer = 0, $axisOptions$$3$$.rightBuffer = 0) : ($axis$$46_dataValues$$2_isR2L$$4$$ = (0,D.$DvtAgent$isRightToLeft$$)($actualSize$$2_chart$$37$$.$_context$), $axisOptions$$3$$.leftBuffer = $axis$$46_dataValues$$2_isR2L$$4$$ ? 0 : 10, $axisOptions$$3$$.rightBuffer = $axis$$46_dataValues$$2_isR2L$$4$$ ? 10 : 0);
    $axisOptions$$3$$._alwaysAlignRight = D.$JSCompiler_alias_TRUE$$;
    $axis$$46_dataValues$$2_isR2L$$4$$ = new D.$DvtChartAxis$$($actualSize$$2_chart$$37$$.$_context$, $actualSize$$2_chart$$37$$.$processEvent$, $actualSize$$2_chart$$37$$);
    $container$$72_maxWidth$$13$$.$addChild$($axis$$46_dataValues$$2_isR2L$$4$$);
    var $tickLabelGap$$2$$ = D.$DvtChartAxisRenderer$$.$_getTickLabelGap$($actualSize$$2_chart$$37$$, "x");
    $isHoriz$$7$$ ? ($container$$72_maxWidth$$13$$ = $availSpace$$32_maxHeight$$11$$.$w$, $availSpace$$32_maxHeight$$11$$ = $isStandalone$$2$$ ? $availSpace$$32_maxHeight$$11$$.$h$ - $tickLabelGap$$2$$ : D.$DvtChartStyleUtils$$.$getSizeInPixels$($axisOptions$$3$$.maxSize, $availSpace$$32_maxHeight$$11$$.$h$)) : ($container$$72_maxWidth$$13$$ = $isStandalone$$2$$ ? $availSpace$$32_maxHeight$$11$$.$w$ - $tickLabelGap$$2$$ : D.$DvtChartStyleUtils$$.$getSizeInPixels$($axisOptions$$3$$.maxSize, $availSpace$$32_maxHeight$$11$$.$w$), 
    $availSpace$$32_maxHeight$$11$$ = $availSpace$$32_maxHeight$$11$$.$h$);
    $actualSize$$2_chart$$37$$ = $options$$119$$._duringAnimation ? $isHoriz$$7$$ ? new D.$DvtDimension$$($container$$72_maxWidth$$13$$, $actualSize$$2_chart$$37$$.$y2Axis$.getHeight()) : new D.$DvtDimension$$($actualSize$$2_chart$$37$$.$y2Axis$.getWidth(), $availSpace$$32_maxHeight$$11$$) : $axis$$46_dataValues$$2_isR2L$$4$$.$getPreferredSize$($axisOptions$$3$$, $container$$72_maxWidth$$13$$, $availSpace$$32_maxHeight$$11$$);
    $options$$119$$.y2Axis.min = $axisOptions$$3$$.min;
    $options$$119$$.y2Axis.max = $axisOptions$$3$$.max;
    return{axis:$axis$$46_dataValues$$2_isR2L$$4$$, options:$axisOptions$$3$$, position:$position$$15$$, $dim$:$actualSize$$2_chart$$37$$}
  }
};
D.$DvtChartAxisRenderer$$.$_alignYAxes$ = function $$DvtChartAxisRenderer$$$$_alignYAxes$$($minorTickCount_yAxis$$, $y2Axis$$, $options$$120$$, $y2AxisOptions$$) {
  var $majorTickCount$$1$$ = $minorTickCount_yAxis$$.$getMajorTickCount$();
  $minorTickCount_yAxis$$ = $minorTickCount_yAxis$$.$getMinorTickCount$();
  "on" == $options$$120$$.y2Axis.alignTickMarks && $options$$120$$.y2Axis.step == D.$JSCompiler_alias_NULL$$ && ($y2Axis$$.$setMajorTickCount$($majorTickCount$$1$$), $y2Axis$$.$setMinorTickCount$($minorTickCount_yAxis$$), $y2AxisOptions$$._majorTickCount = $majorTickCount$$1$$, $y2AxisOptions$$._minorTickCount = $minorTickCount_yAxis$$, $y2AxisOptions$$.step = $y2Axis$$.$getMajorIncrement$(), $y2AxisOptions$$.minorStep = $y2Axis$$.$getMinorIncrement$())
};
D.$DvtChartAxisRenderer$$.$_positionAxis$ = function $$DvtChartAxisRenderer$$$$_positionAxis$$($availSpace$$33_bounds$$85$$, $excessHeight_excessWidth_fixedHeight_fixedWidth_totalAvailSpace$$4$$, $axisInfo$$7_shiftedPos$$, $gap$$10$$) {
  if($axisInfo$$7_shiftedPos$$) {
    var $isStandalone$$3$$ = $axisInfo$$7_shiftedPos$$.options.isStandalone, $axisSize$$ = $axisInfo$$7_shiftedPos$$.options.size;
    if($isStandalone$$3$$ || $axisSize$$ != D.$JSCompiler_alias_NULL$$) {
      if("top" == $axisInfo$$7_shiftedPos$$.position || "bottom" == $axisInfo$$7_shiftedPos$$.position) {
        $excessHeight_excessWidth_fixedHeight_fixedWidth_totalAvailSpace$$4$$ = $isStandalone$$3$$ ? $availSpace$$33_bounds$$85$$.$h$ : D.$DvtChartStyleUtils$$.$getSizeInPixels$($axisSize$$, $excessHeight_excessWidth_fixedHeight_fixedWidth_totalAvailSpace$$4$$.$h$), $excessHeight_excessWidth_fixedHeight_fixedWidth_totalAvailSpace$$4$$ = window.Math.max($excessHeight_excessWidth_fixedHeight_fixedWidth_totalAvailSpace$$4$$ - $axisInfo$$7_shiftedPos$$.$dim$.$h$ - $gap$$10$$, 0), $availSpace$$33_bounds$$85$$.$h$ -= 
        $excessHeight_excessWidth_fixedHeight_fixedWidth_totalAvailSpace$$4$$, "top" == $axisInfo$$7_shiftedPos$$.position && ($availSpace$$33_bounds$$85$$.y += $excessHeight_excessWidth_fixedHeight_fixedWidth_totalAvailSpace$$4$$)
      }else {
        if("left" == $axisInfo$$7_shiftedPos$$.position || "right" == $axisInfo$$7_shiftedPos$$.position) {
          $excessHeight_excessWidth_fixedHeight_fixedWidth_totalAvailSpace$$4$$ = $isStandalone$$3$$ ? $availSpace$$33_bounds$$85$$.$w$ : D.$DvtChartStyleUtils$$.$getSizeInPixels$($axisSize$$, $excessHeight_excessWidth_fixedHeight_fixedWidth_totalAvailSpace$$4$$.$w$), $excessHeight_excessWidth_fixedHeight_fixedWidth_totalAvailSpace$$4$$ = window.Math.max($excessHeight_excessWidth_fixedHeight_fixedWidth_totalAvailSpace$$4$$ - $axisInfo$$7_shiftedPos$$.$dim$.$w$ - $gap$$10$$, 0), $availSpace$$33_bounds$$85$$.$w$ -= 
          $excessHeight_excessWidth_fixedHeight_fixedWidth_totalAvailSpace$$4$$, "left" == $axisInfo$$7_shiftedPos$$.position && ($availSpace$$33_bounds$$85$$.x += $excessHeight_excessWidth_fixedHeight_fixedWidth_totalAvailSpace$$4$$)
        }
      }
    }
    (0,D.$DvtLayoutUtils$position$$)($availSpace$$33_bounds$$85$$, $axisInfo$$7_shiftedPos$$.position, $axisInfo$$7_shiftedPos$$.axis, $axisInfo$$7_shiftedPos$$.$dim$.$w$, $axisInfo$$7_shiftedPos$$.$dim$.$h$, $gap$$10$$);
    if($availSpace$$33_bounds$$85$$ = $axisInfo$$7_shiftedPos$$.axis.$_bounds$) {
      $axisInfo$$7_shiftedPos$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($axisInfo$$7_shiftedPos$$.axis, new D.$DvtPoint$$($availSpace$$33_bounds$$85$$.x, $availSpace$$33_bounds$$85$$.y)), $availSpace$$33_bounds$$85$$.x = $axisInfo$$7_shiftedPos$$.x, $availSpace$$33_bounds$$85$$.y = $axisInfo$$7_shiftedPos$$.y
    }
  }
};
D.$DvtChartAxisRenderer$$.$_getTickLabelGap$ = function $$DvtChartAxisRenderer$$$$_getTickLabelGap$$($chart$$38$$, $type$$106$$) {
  var $gapHeight$$2_options$$121$$ = $chart$$38$$.$getOptions$(), $isHorizGraph$$1$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$38$$), $scalingFactor$$ = D.$DvtChartAxisRenderer$$.$_getGapScalingFactor$($chart$$38$$, $type$$106$$), $gapWidth$$2$$ = $gapHeight$$2_options$$121$$.layout.tickLabelGapWidth * $scalingFactor$$, $gapHeight$$2_options$$121$$ = $gapHeight$$2_options$$121$$.layout.tickLabelGapHeight * $scalingFactor$$;
  return"x" == $type$$106$$ ? D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$38$$, "x") ? $isHorizGraph$$1$$ ? $gapWidth$$2$$ : $gapHeight$$2_options$$121$$ : 0 : "y" == $type$$106$$ ? D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$38$$, "y") ? $isHorizGraph$$1$$ ? $gapHeight$$2_options$$121$$ : $gapWidth$$2$$ : 0 : D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$38$$, "y2") ? $isHorizGraph$$1$$ ? $gapHeight$$2_options$$121$$ : $gapWidth$$2$$ : 0
};
D.$DvtChartAxisRenderer$$.$_getGapScalingFactor$ = function $$DvtChartAxisRenderer$$$$_getGapScalingFactor$$($chart$$39$$, $type$$107$$) {
  return D.$DvtChartAxisUtils$$.$getTickLabelFontSize$($chart$$39$$, $type$$107$$) / 11
};
D.$DvtChartLegendRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartLegendRenderer$$, D.$DvtObj$$, "DvtChartLegendRenderer");
D.$DvtChartLegendRenderer$$.$render$ = function $$DvtChartLegendRenderer$$$$render$$($chart$$42$$, $container$$75$$, $availSpace$$36_bounds$$86$$) {
  var $gap$$11_options$$123$$ = $chart$$42$$.$getOptions$(), $position$$16_shiftedPos$$1$$ = $gap$$11_options$$123$$.legend.position;
  if("on" == $gap$$11_options$$123$$.legend.rendered) {
    var $legendOptions$$5$$ = D.$DvtJSONUtils$$.clone($gap$$11_options$$123$$.legend);
    delete $legendOptions$$5$$.position;
    $legendOptions$$5$$.skin = $gap$$11_options$$123$$.skin;
    $legendOptions$$5$$.layout.gapRatio = $chart$$42$$.$getGapRatio$();
    $legendOptions$$5$$.hideAndShowBehavior = D.$DvtChartEventUtils$$.$getHideAndShowBehavior$($chart$$42$$);
    $legendOptions$$5$$.hoverBehavior = D.$DvtChartEventUtils$$.$getHoverBehavior$($chart$$42$$);
    "auto" == $position$$16_shiftedPos$$1$$ && ($position$$16_shiftedPos$$1$$ = $availSpace$$36_bounds$$86$$.$w$ >= $availSpace$$36_bounds$$86$$.$h$ ? "end" : "bottom");
    var $isHoriz$$8_maxHeight$$12$$ = "top" == $position$$16_shiftedPos$$1$$ || "bottom" == $position$$16_shiftedPos$$1$$;
    $legendOptions$$5$$.orientation = $isHoriz$$8_maxHeight$$12$$ ? "horizontal" : "vertical";
    "start" == $position$$16_shiftedPos$$1$$ ? $legendOptions$$5$$.halign = "end" : "end" == $position$$16_shiftedPos$$1$$ ? $legendOptions$$5$$.halign = "start" : "top" == $position$$16_shiftedPos$$1$$ ? $legendOptions$$5$$.valign = "bottom" : "bottom" == $position$$16_shiftedPos$$1$$ && ($legendOptions$$5$$.valign = "top");
    D.$DvtChartLegendRenderer$$.$_addLegendData$($chart$$42$$, $legendOptions$$5$$);
    if(0 != $legendOptions$$5$$.sections.length) {
      var $legend$$20$$ = (0,D.$DvtLegend$newInstance$$)($chart$$42$$.$_context$, $chart$$42$$.$processEvent$, $chart$$42$$);
      $chart$$42$$.getId() != D.$JSCompiler_alias_NULL$$ && $legend$$20$$.setId($chart$$42$$.getId() + "legend");
      $container$$75$$.$addChild$($legend$$20$$);
      var $actualSize$$3_maxWidth$$14$$;
      $legendOptions$$5$$.size != D.$JSCompiler_alias_NULL$$ ? $actualSize$$3_maxWidth$$14$$ = $isHoriz$$8_maxHeight$$12$$ ? new D.$DvtDimension$$($availSpace$$36_bounds$$86$$.$w$, D.$DvtChartStyleUtils$$.$getSizeInPixels$($legendOptions$$5$$.size, $availSpace$$36_bounds$$86$$.$h$)) : new D.$DvtDimension$$(D.$DvtChartStyleUtils$$.$getSizeInPixels$($legendOptions$$5$$.size, $availSpace$$36_bounds$$86$$.$w$), $availSpace$$36_bounds$$86$$.$h$) : ($actualSize$$3_maxWidth$$14$$ = $isHoriz$$8_maxHeight$$12$$ ? 
      $availSpace$$36_bounds$$86$$.$w$ : D.$DvtChartStyleUtils$$.$getSizeInPixels$($legendOptions$$5$$.maxSize, $availSpace$$36_bounds$$86$$.$w$), $isHoriz$$8_maxHeight$$12$$ = $isHoriz$$8_maxHeight$$12$$ ? D.$DvtChartStyleUtils$$.$getSizeInPixels$($legendOptions$$5$$.maxSize, $availSpace$$36_bounds$$86$$.$h$) : $availSpace$$36_bounds$$86$$.$h$, $actualSize$$3_maxWidth$$14$$ = $legend$$20$$.$getPreferredSize$($legendOptions$$5$$, $actualSize$$3_maxWidth$$14$$, $isHoriz$$8_maxHeight$$12$$));
      $legend$$20$$.$render$($legendOptions$$5$$, $actualSize$$3_maxWidth$$14$$.$w$, $actualSize$$3_maxWidth$$14$$.$h$);
      $gap$$11_options$$123$$ = (0,D.$DvtChartDefaults$getGapSize$$)($chart$$42$$, $gap$$11_options$$123$$.layout.legendGap);
      (0,D.$DvtLayoutUtils$position$$)($availSpace$$36_bounds$$86$$, $position$$16_shiftedPos$$1$$, $legend$$20$$, $actualSize$$3_maxWidth$$14$$.$w$, $actualSize$$3_maxWidth$$14$$.$h$, $gap$$11_options$$123$$);
      $availSpace$$36_bounds$$86$$ = $legend$$20$$.$_bounds$;
      $position$$16_shiftedPos$$1$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($legend$$20$$, new D.$DvtPoint$$($availSpace$$36_bounds$$86$$.x, $availSpace$$36_bounds$$86$$.y));
      $availSpace$$36_bounds$$86$$.x = $position$$16_shiftedPos$$1$$.x;
      $availSpace$$36_bounds$$86$$.y = $position$$16_shiftedPos$$1$$.y;
      $chart$$42$$.$legend$ && ($chart$$42$$.$legend$.$destroy$(), $container$$75$$.removeChild($chart$$42$$.$legend$));
      $chart$$42$$.$legend$ = $legend$$20$$
    }
  }
};
D.$DvtChartLegendRenderer$$.$_addLegendData$ = function $$DvtChartLegendRenderer$$$$_addLegendData$$($chart$$43$$, $legendOptions$$6$$) {
  var $chartOptions$$2$$ = $chart$$43$$.$getOptions$();
  $legendOptions$$6$$.title = $chartOptions$$2$$.legend ? $chartOptions$$2$$.legend.title : D.$JSCompiler_alias_NULL$$;
  $legendOptions$$6$$.sections = [];
  var $refObjItems_seriesItems$$1$$ = D.$DvtChartLegendRenderer$$.$_getSeriesItems$($chart$$43$$);
  0 < $refObjItems_seriesItems$$1$$.length && (D.$DvtChartTypeUtils$$.$isStacked$($chart$$43$$) && (D.$DvtChartTypeUtils$$.$isVertical$($chart$$43$$) && "vertical" == $legendOptions$$6$$.orientation) && $refObjItems_seriesItems$$1$$.reverse(), $legendOptions$$6$$.sections.push({items:$refObjItems_seriesItems$$1$$}));
  D.$DvtChartLegendRenderer$$.$_addLegendSections$($chart$$43$$, $legendOptions$$6$$.sections);
  $refObjItems_seriesItems$$1$$ = D.$DvtChartLegendRenderer$$.$_getRefObjItems$($chart$$43$$);
  0 < $refObjItems_seriesItems$$1$$.length && $legendOptions$$6$$.sections.push({items:$refObjItems_seriesItems$$1$$, title:$chartOptions$$2$$.legend ? $chartOptions$$2$$.legend.referenceObjectTitle : D.$JSCompiler_alias_NULL$$})
};
D.$DvtChartLegendRenderer$$.$_getSeriesItems$ = function $$DvtChartLegendRenderer$$$$_getSeriesItems$$($chart$$44$$) {
  var $ret$$84$$ = [], $legendItem$$2$$;
  if("pie" == $chart$$44$$.$getType$()) {
    for(var $seriesCount$$9_seriesIndices$$1$$ = D.$DvtPieChartUtils$$.$getRenderedSeriesIndices$($chart$$44$$), $seriesIndex$$14$$, $i$$455$$ = 0;$i$$455$$ < $seriesCount$$9_seriesIndices$$1$$.length;$i$$455$$++) {
      $seriesIndex$$14$$ = $seriesCount$$9_seriesIndices$$1$$[$i$$455$$], ($legendItem$$2$$ = D.$DvtChartLegendRenderer$$.$_createLegendItem$($chart$$44$$, $seriesIndex$$14$$)) && $ret$$84$$.push($legendItem$$2$$)
    }
    D.$DvtPieChartUtils$$.$hasOtherSeries$($chart$$44$$) && ($legendItem$$2$$ = {id:D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$, text:(0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($chart$$44$$.$getBundle$(), "LABEL_OTHER", D.$JSCompiler_alias_NULL$$), categoryVisibility:D.$DvtPieChartUtils$$.$getOtherSliceVisibility$($chart$$44$$), symbolType:"marker", color:$chart$$44$$.$getOptions$().styleDefaults.otherColor, borderColor:$chart$$44$$.$getOptions$().styleDefaults.borderColor}, $ret$$84$$.push($legendItem$$2$$))
  }else {
    $seriesCount$$9_seriesIndices$$1$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$44$$);
    for($seriesIndex$$14$$ = 0;$seriesIndex$$14$$ < $seriesCount$$9_seriesIndices$$1$$;$seriesIndex$$14$$++) {
      ($legendItem$$2$$ = D.$DvtChartLegendRenderer$$.$_createLegendItem$($chart$$44$$, $seriesIndex$$14$$)) && $ret$$84$$.push($legendItem$$2$$)
    }
  }
  return $ret$$84$$
};
D.$DvtChartLegendRenderer$$.$_createLegendItem$ = function $$DvtChartLegendRenderer$$$$_createLegendItem$$($chart$$45$$, $seriesIndex$$15$$) {
  var $seriesItem$$1$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$45$$, $seriesIndex$$15$$), $chartType$$ = $chart$$45$$.$getType$(), $seriesType$$2$$ = D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$45$$, $seriesIndex$$15$$), $lineType$$ = D.$DvtChartStyleUtils$$.$getLineType$($chart$$45$$, $seriesIndex$$15$$);
  if(!$seriesItem$$1$$ || "off" == $seriesItem$$1$$.displayInLegend || "on" != $seriesItem$$1$$.displayInLegend && !D.$DvtChartDataUtils$$.$hasSeriesData$($chart$$45$$, $seriesIndex$$15$$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $legendItem$$3_seriesLabel$$1$$ = D.$DvtChartDataUtils$$.$getSeriesLabel$($chart$$45$$, $seriesIndex$$15$$);
  if(!$legendItem$$3_seriesLabel$$1$$ || 0 >= $legendItem$$3_seriesLabel$$1$$.trim().length) {
    return D.$JSCompiler_alias_NULL$$
  }
  $legendItem$$3_seriesLabel$$1$$ = {id:D.$DvtChartDataUtils$$.$getSeries$($chart$$45$$, $seriesIndex$$15$$), text:$legendItem$$3_seriesLabel$$1$$, categoryVisibility:$seriesItem$$1$$.visibility};
  "line" == $seriesType$$2$$ || "scatter" == $chartType$$ || "bubble" == $chartType$$ ? ($legendItem$$3_seriesLabel$$1$$.lineStyle = D.$DvtChartStyleUtils$$.$getLineStyle$($chart$$45$$, $seriesIndex$$15$$), $legendItem$$3_seriesLabel$$1$$.lineWidth = D.$DvtChartStyleUtils$$.$getLineWidth$($chart$$45$$, $seriesIndex$$15$$), D.$DvtChartStyleUtils$$.$isMarkerDisplayed$($chart$$45$$, $seriesIndex$$15$$) ? ($legendItem$$3_seriesLabel$$1$$.symbolType = "none" == $lineType$$ ? "marker" : "lineWithMarker", 
  $legendItem$$3_seriesLabel$$1$$.markerShape = D.$DvtChartStyleUtils$$.$getMarkerShape$($chart$$45$$, $seriesIndex$$15$$), $legendItem$$3_seriesLabel$$1$$.markerColor = D.$DvtChartStyleUtils$$.$getMarkerColor$($chart$$45$$, $seriesIndex$$15$$)) : $legendItem$$3_seriesLabel$$1$$.symbolType = "line") : ($legendItem$$3_seriesLabel$$1$$.symbolType = "marker", "none" == D.$DvtChartStyleUtils$$.$getLineType$($chart$$45$$, $seriesIndex$$15$$) && ($legendItem$$3_seriesLabel$$1$$.markerShape = D.$DvtChartStyleUtils$$.$getMarkerShape$($chart$$45$$, 
  $seriesIndex$$15$$)));
  $legendItem$$3_seriesLabel$$1$$.color = D.$DvtChartStyleUtils$$.$getColor$($chart$$45$$, $seriesIndex$$15$$);
  $legendItem$$3_seriesLabel$$1$$.borderColor = D.$DvtChartStyleUtils$$.$getBorderColor$($chart$$45$$, $seriesIndex$$15$$);
  $legendItem$$3_seriesLabel$$1$$.pattern = D.$DvtChartStyleUtils$$.$getPattern$($chart$$45$$, $seriesIndex$$15$$);
  "bubble" == $chartType$$ && ($legendItem$$3_seriesLabel$$1$$._borderWidth = 0.5);
  $legendItem$$3_seriesLabel$$1$$.action = $seriesItem$$1$$.action;
  $legendItem$$3_seriesLabel$$1$$._spb = $chart$$45$$.$getShowPopupBehaviors$($seriesItem$$1$$._id);
  return $legendItem$$3_seriesLabel$$1$$
};
D.$DvtChartLegendRenderer$$.$_addLegendSections$ = function $$DvtChartLegendRenderer$$$$_addLegendSections$$($chart$$46$$, $sections$$1$$) {
  var $options$$124$$ = $chart$$46$$.$getOptions$();
  if($options$$124$$ && $options$$124$$.legend && $options$$124$$.legend.sections) {
    for(var $i$$456$$ = 0;$i$$456$$ < $options$$124$$.legend.sections.length;$i$$456$$++) {
      var $dataSection$$ = $options$$124$$.legend.sections[$i$$456$$];
      $dataSection$$ && $dataSection$$.items && $sections$$1$$.push({title:$dataSection$$.title, items:$dataSection$$.items})
    }
  }
};
D.$DvtChartLegendRenderer$$.$_getRefObjItems$ = function $$DvtChartLegendRenderer$$$$_getRefObjItems$$($chart$$47_refObjs$$) {
  $chart$$47_refObjs$$ = D.$DvtChartRefObjUtils$$.$getObjects$($chart$$47_refObjs$$);
  if(0 >= $chart$$47_refObjs$$.length) {
    return[]
  }
  for(var $items$$17$$ = [], $i$$457$$ = 0;$i$$457$$ < $chart$$47_refObjs$$.length;$i$$457$$++) {
    var $refObj$$ = $chart$$47_refObjs$$[$i$$457$$];
    if($refObj$$ && "on" == $refObj$$.displayInLegend && $refObj$$.text) {
      var $type$$108$$ = D.$DvtChartRefObjUtils$$.$getType$($refObj$$);
      $items$$17$$.push({symbolType:"area" == $type$$108$$ ? "square" : "line", text:$refObj$$.text, color:D.$DvtChartRefObjUtils$$.$getColor$($refObj$$), lineStyle:$refObj$$.lineStyle, lineWidth:D.$DvtChartRefObjUtils$$.$getLineWidth$($refObj$$)})
    }
  }
  return $items$$17$$
};
D.$DvtPlotAreaRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtPlotAreaRenderer$$, D.$DvtObj$$, "DvtPlotAreaRenderer");
D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ = 16;
D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ = 4;
D.$DvtPlotAreaRenderer$$.$_MIN_CHARS_DATA_LABEL$ = 3;
D.$DvtPlotAreaRenderer$$.$render$ = function $$DvtPlotAreaRenderer$$$$render$$($chart$$71$$, $container$$90$$, $availSpace$$49$$) {
  "off" == $chart$$71$$.$getOptions$().plotArea.rendered ? D.$DvtPlotAreaRenderer$$.$_renderAxisLines$($chart$$71$$, $container$$90$$, $availSpace$$49$$) : 0 < $availSpace$$49$$.$w$ && 0 < $availSpace$$49$$.$h$ && ($chart$$71$$.$_currentMarkers$ = [], $chart$$71$$.$_currentAreas$ = [], D.$DvtPlotAreaRenderer$$.$_renderBackgroundObjects$($chart$$71$$, $container$$90$$, $availSpace$$49$$), D.$DvtPlotAreaRenderer$$.$_renderGridLines$($chart$$71$$, $container$$90$$, $availSpace$$49$$), D.$DvtPlotAreaRenderer$$.$_renderAxisLines$($chart$$71$$, 
  $container$$90$$, $availSpace$$49$$), D.$DvtPlotAreaRenderer$$.$_renderForegroundObjects$($chart$$71$$, $container$$90$$, $availSpace$$49$$))
};
D.$DvtPlotAreaRenderer$$.$_renderBackgroundObjects$ = function $$DvtPlotAreaRenderer$$$$_renderBackgroundObjects$$($chart$$72$$, $container$$91$$, $availSpace$$50$$) {
  var $areaContainer$$2_options$$132$$ = $chart$$72$$.$getOptions$(), $background$$5_cx$$20_points$$38$$, $context$$263$$ = $chart$$72$$.$_context$;
  if(D.$DvtChartTypeUtils$$.$isPolar$($chart$$72$$)) {
    $background$$5_cx$$20_points$$38$$ = $availSpace$$50$$.x + $availSpace$$50$$.$w$ / 2;
    var $cy$$20$$ = $availSpace$$50$$.y + $availSpace$$50$$.$h$ / 2;
    D.$DvtChartAxisUtils$$.$isGridPolygonal$($chart$$72$$) ? ($background$$5_cx$$20_points$$38$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$($background$$5_cx$$20_points$$38$$, $cy$$20$$, D.$DvtChartDataUtils$$.$getGroupCount$($chart$$72$$), $chart$$72$$.$getRadius$()), $background$$5_cx$$20_points$$38$$ = new D.$DvtPolygon$$($context$$263$$, $background$$5_cx$$20_points$$38$$)) : $background$$5_cx$$20_points$$38$$ = new D.$DvtCircle$$($context$$263$$, $background$$5_cx$$20_points$$38$$, $cy$$20$$, 
    $chart$$72$$.$getRadius$())
  }else {
    $background$$5_cx$$20_points$$38$$ = new D.$DvtRect$$($context$$263$$, $availSpace$$50$$.x, $availSpace$$50$$.y, $availSpace$$50$$.$w$, $availSpace$$50$$.$h$)
  }
  $areaContainer$$2_options$$132$$.plotArea.backgroundColor ? $background$$5_cx$$20_points$$38$$.$setSolidFill$($areaContainer$$2_options$$132$$.plotArea.backgroundColor) : (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($background$$5_cx$$20_points$$38$$);
  $container$$91$$.$addChild$($background$$5_cx$$20_points$$38$$);
  $chart$$72$$.$getEventManager$().$associate$($background$$5_cx$$20_points$$38$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$DvtChartEventManager$getUIEventParams$$)(D.$DvtChartConstants$$.$PLOT_AREA$)));
  if($areaContainer$$2_options$$132$$.xAxis.referenceObjects || $areaContainer$$2_options$$132$$.yAxis.referenceObjects || $areaContainer$$2_options$$132$$.y2Axis.referenceObjects) {
    window.clipGroup = D.$DvtPlotAreaRenderer$$.$createClippedGroup$($chart$$72$$, $container$$91$$, $availSpace$$50$$), D.$DvtRefObjRenderer$$.$renderBackgroundObjects$($chart$$72$$, $availSpace$$50$$)
  }
  D.$DvtChartTypeUtils$$.$isBLAC$($chart$$72$$) && ($areaContainer$$2_options$$132$$ = new D.$DvtContainer$$($context$$263$$), $container$$91$$.$addChild$($areaContainer$$2_options$$132$$), $chart$$72$$.$_areaContainer$ = $areaContainer$$2_options$$132$$, D.$DvtChartTypeUtils$$.$hasAreaSeries$($chart$$72$$) && D.$DvtPlotAreaRenderer$$.$_renderAreas$($chart$$72$$, $areaContainer$$2_options$$132$$, $availSpace$$50$$, D.$JSCompiler_alias_FALSE$$))
};
D.$DvtPlotAreaRenderer$$.$_renderGridLines$ = function $$DvtPlotAreaRenderer$$$$_renderGridLines$$($chart$$73$$, $container$$92$$, $availSpace$$51$$) {
  var $context$$264$$ = $container$$92$$.$_context$, $options$$133_renderY2Axis$$ = $chart$$73$$.$getOptions$(), $renderXAxis$$ = $chart$$73$$.$xAxis$ && "off" != $options$$133_renderY2Axis$$.xAxis.rendered, $renderYAxis$$ = $chart$$73$$.$yAxis$ && "off" != $options$$133_renderY2Axis$$.yAxis.rendered, $options$$133_renderY2Axis$$ = $chart$$73$$.$y2Axis$ && "off" != $options$$133_renderY2Axis$$.y2Axis.rendered;
  $renderXAxis$$ && D.$DvtPlotAreaRenderer$$.$_positionGridLines$($container$$92$$, $availSpace$$51$$, $chart$$73$$.$xAxis$, $chart$$73$$.$xAxis$.$getMinorGridLines$($context$$264$$));
  $renderYAxis$$ && D.$DvtPlotAreaRenderer$$.$_positionGridLines$($container$$92$$, $availSpace$$51$$, $chart$$73$$.$yAxis$, $chart$$73$$.$yAxis$.$getMinorGridLines$($context$$264$$));
  $options$$133_renderY2Axis$$ && D.$DvtPlotAreaRenderer$$.$_positionGridLines$($container$$92$$, $availSpace$$51$$, $chart$$73$$.$y2Axis$, $chart$$73$$.$y2Axis$.$getMinorGridLines$($context$$264$$));
  $renderXAxis$$ && D.$DvtPlotAreaRenderer$$.$_positionGridLines$($container$$92$$, $availSpace$$51$$, $chart$$73$$.$xAxis$, $chart$$73$$.$xAxis$.$getMajorGridLines$($context$$264$$));
  $renderYAxis$$ && D.$DvtPlotAreaRenderer$$.$_positionGridLines$($container$$92$$, $availSpace$$51$$, $chart$$73$$.$yAxis$, $chart$$73$$.$yAxis$.$getMajorGridLines$($context$$264$$));
  $options$$133_renderY2Axis$$ && D.$DvtPlotAreaRenderer$$.$_positionGridLines$($container$$92$$, $availSpace$$51$$, $chart$$73$$.$y2Axis$, $chart$$73$$.$y2Axis$.$getMajorGridLines$($context$$264$$))
};
D.$DvtPlotAreaRenderer$$.$_renderAxisLines$ = function $$DvtPlotAreaRenderer$$$$_renderAxisLines$$($chart$$74$$, $container$$93$$, $availSpace$$52$$) {
  var $options$$134_renderY2Axis$$1$$ = $chart$$74$$.$getOptions$(), $renderXAxis$$1$$ = $chart$$74$$.$xAxis$ && "off" != $options$$134_renderY2Axis$$1$$.xAxis.rendered, $renderYAxis$$1$$ = $chart$$74$$.$yAxis$ && "off" != $options$$134_renderY2Axis$$1$$.yAxis.rendered, $options$$134_renderY2Axis$$1$$ = $chart$$74$$.$y2Axis$ && "off" != $options$$134_renderY2Axis$$1$$.y2Axis.rendered, $isPolar$$2$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$74$$);
  $renderXAxis$$1$$ && D.$DvtPlotAreaRenderer$$.$_positionAxisLine$($container$$93$$, $availSpace$$52$$, $isPolar$$2$$ ? $chart$$74$$.$yAxis$ : $chart$$74$$.$xAxis$);
  $renderYAxis$$1$$ && D.$DvtPlotAreaRenderer$$.$_positionAxisLine$($container$$93$$, $availSpace$$52$$, $isPolar$$2$$ ? $chart$$74$$.$xAxis$ : $chart$$74$$.$yAxis$);
  $options$$134_renderY2Axis$$1$$ && D.$DvtPlotAreaRenderer$$.$_positionAxisLine$($container$$93$$, $availSpace$$52$$, $chart$$74$$.$y2Axis$)
};
D.$DvtPlotAreaRenderer$$.$_positionGridLines$ = function $$DvtPlotAreaRenderer$$$$_positionGridLines$$($container$$94$$, $availSpace$$53$$, $axis$$51$$, $gridlines$$5$$) {
  for(var $position$$22$$ = $axis$$51$$.$getPosition$(), $i$$459$$ = 0;$i$$459$$ < $gridlines$$5$$.length;$i$$459$$++) {
    var $gridline$$ = $gridlines$$5$$[$i$$459$$];
    $container$$94$$.$addChild$($gridline$$);
    "radial" == $position$$22$$ || "tangential" == $position$$22$$ ? ($gridline$$.$setTranslateX$($availSpace$$53$$.x + $availSpace$$53$$.$w$ / 2), $gridline$$.$setTranslateY$($availSpace$$53$$.y + $availSpace$$53$$.$h$ / 2)) : "top" == $position$$22$$ || "bottom" == $position$$22$$ ? ($gridline$$.$setY1$($availSpace$$53$$.y), $gridline$$.$setY2$($availSpace$$53$$.y + $availSpace$$53$$.$h$), $gridline$$.$setX1$((0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)($axis$$51$$, $gridline$$.$getX1$())), 
    $gridline$$.$setX2$((0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)($axis$$51$$, $gridline$$.$getX2$()))) : ($gridline$$.$setX1$($availSpace$$53$$.x), $gridline$$.$setX2$($availSpace$$53$$.x + $availSpace$$53$$.$w$), $gridline$$.$setY1$((0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)($axis$$51$$, $gridline$$.$getY1$())), $gridline$$.$setY2$((0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)($axis$$51$$, $gridline$$.$getY2$())))
  }
};
D.$DvtPlotAreaRenderer$$.$_positionAxisLine$ = function $$DvtPlotAreaRenderer$$$$_positionAxisLine$$($container$$95_position$$23$$, $availSpace$$54$$, $axis$$52$$) {
  var $axisLine$$ = $axis$$52$$.$getAxisLine$($container$$95_position$$23$$.$_context$);
  $axisLine$$ && ($container$$95_position$$23$$.$addChild$($axisLine$$), $container$$95_position$$23$$ = $axis$$52$$.$getPosition$(), "radial" == $container$$95_position$$23$$ || "tangential" == $container$$95_position$$23$$ ? ($axisLine$$.$setTranslateX$($availSpace$$54$$.x + $availSpace$$54$$.$w$ / 2), $axisLine$$.$setTranslateY$($availSpace$$54$$.y + $availSpace$$54$$.$h$ / 2)) : "top" == $container$$95_position$$23$$ ? ($axisLine$$.$setX1$($availSpace$$54$$.x), $axisLine$$.$setX2$($availSpace$$54$$.x + 
  $availSpace$$54$$.$w$), $axisLine$$.$setY1$($availSpace$$54$$.y), $axisLine$$.$setY2$($availSpace$$54$$.y)) : "bottom" == $container$$95_position$$23$$ ? ($axisLine$$.$setX1$($availSpace$$54$$.x), $axisLine$$.$setX2$($availSpace$$54$$.x + $availSpace$$54$$.$w$), $axisLine$$.$setY1$($availSpace$$54$$.y + $availSpace$$54$$.$h$), $axisLine$$.$setY2$($availSpace$$54$$.y + $availSpace$$54$$.$h$)) : "left" == $container$$95_position$$23$$ ? ($axisLine$$.$setX1$($availSpace$$54$$.x), $axisLine$$.$setX2$($availSpace$$54$$.x), 
  $axisLine$$.$setY1$($availSpace$$54$$.y), $axisLine$$.$setY2$($availSpace$$54$$.y + $availSpace$$54$$.$h$)) : "right" == $container$$95_position$$23$$ && ($axisLine$$.$setX1$($availSpace$$54$$.x + $availSpace$$54$$.$w$), $axisLine$$.$setX2$($availSpace$$54$$.x + $availSpace$$54$$.$w$), $axisLine$$.$setY1$($availSpace$$54$$.y), $axisLine$$.$setY2$($availSpace$$54$$.y + $availSpace$$54$$.$h$)))
};
D.$DvtPlotAreaRenderer$$.$_renderForegroundObjects$ = function $$DvtPlotAreaRenderer$$$$_renderForegroundObjects$$($chart$$75$$, $container$$96_selected$$18$$, $availSpace$$55$$) {
  window.clipGroup = D.$DvtPlotAreaRenderer$$.$createClippedGroup$($chart$$75$$, $container$$96_selected$$18$$, $availSpace$$55$$);
  D.$DvtChartTypeUtils$$.$isBLAC$($chart$$75$$) ? (D.$DvtChartTypeUtils$$.$hasLineWithAreaSeries$($chart$$75$$) && D.$DvtPlotAreaRenderer$$.$_renderAreas$($chart$$75$$, $container$$96_selected$$18$$, $availSpace$$55$$, D.$JSCompiler_alias_TRUE$$), D.$DvtChartTypeUtils$$.$hasBarSeries$($chart$$75$$) && D.$DvtPlotAreaRenderer$$.$_renderBars$($chart$$75$$, $availSpace$$55$$), D.$DvtChartTypeUtils$$.$hasLineSeries$($chart$$75$$) && D.$DvtPlotAreaRenderer$$.$_renderLines$($chart$$75$$, $container$$96_selected$$18$$, 
  window.clipGroup, $availSpace$$55$$)) : D.$DvtChartTypeUtils$$.$isScatter$($chart$$75$$) ? D.$DvtPlotAreaRenderer$$.$_renderDataMarkers$($chart$$75$$, $container$$96_selected$$18$$, $availSpace$$55$$) : D.$DvtChartTypeUtils$$.$isBubble$($chart$$75$$) && D.$DvtPlotAreaRenderer$$.$_renderDataMarkers$($chart$$75$$, window.clipGroup, $availSpace$$55$$);
  var $options$$135$$ = $chart$$75$$.$getOptions$();
  if($options$$135$$.xAxis.referenceObjects || $options$$135$$.yAxis.referenceObjects || $options$$135$$.y2Axis.referenceObjects) {
    window.clipGroup = D.$DvtPlotAreaRenderer$$.$createClippedGroup$($chart$$75$$, $container$$96_selected$$18$$, $availSpace$$55$$), D.$DvtRefObjRenderer$$.$renderForegroundObjects$($chart$$75$$, $availSpace$$55$$)
  }
  $container$$96_selected$$18$$ = D.$DvtChartDataUtils$$.$getInitialSelection$($chart$$75$$);
  D.$DvtChartEventUtils$$.$setInitialSelection$($chart$$75$$, $container$$96_selected$$18$$)
};
D.$DvtPlotAreaRenderer$$.$_renderDataLabel$ = function $$DvtPlotAreaRenderer$$$$_renderDataLabel$$($bbox$$6_chart$$76$$, $container$$97$$, $cmd$$8_dataItemBounds_padding$$15$$, $seriesIndex$$16$$, $groupIndex$$11$$, $dataColor$$7_style$$31_textDim$$1$$) {
  if(!$bbox$$6_chart$$76$$.$getOptions$()._isOverview) {
    var $label$$50_labelString$$7$$ = D.$DvtChartDataUtils$$.$getDataLabel$($bbox$$6_chart$$76$$, $seriesIndex$$16$$, $groupIndex$$11$$);
    if($label$$50_labelString$$7$$) {
      $label$$50_labelString$$7$$ = new D.$DvtOutputText$$($bbox$$6_chart$$76$$.$_context$, $label$$50_labelString$$7$$, 0, 0);
      $label$$50_labelString$$7$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
      var $position$$24_size$$28$$ = D.$DvtChartStyleUtils$$.$getDataLabelPosition$($bbox$$6_chart$$76$$, $seriesIndex$$16$$, $groupIndex$$11$$);
      $dataColor$$7_style$$31_textDim$$1$$ = D.$DvtChartStyleUtils$$.$getDataLabelStyle$($bbox$$6_chart$$76$$, $seriesIndex$$16$$, $groupIndex$$11$$, $dataColor$$7_style$$31_textDim$$1$$, $position$$24_size$$28$$);
      $label$$50_labelString$$7$$.$setCSSStyle$($dataColor$$7_style$$31_textDim$$1$$);
      $label$$50_labelString$$7$$.$setY$($cmd$$8_dataItemBounds_padding$$15$$.y + $cmd$$8_dataItemBounds_padding$$15$$.$h$ / 2);
      $label$$50_labelString$$7$$.$setX$($cmd$$8_dataItemBounds_padding$$15$$.x + $cmd$$8_dataItemBounds_padding$$15$$.$w$ / 2);
      $label$$50_labelString$$7$$.$alignCenter$();
      $label$$50_labelString$$7$$.$alignMiddle$();
      $dataColor$$7_style$$31_textDim$$1$$ = $label$$50_labelString$$7$$.$measureDimensions$();
      if("center" == $position$$24_size$$28$$ || "inBottom" == $position$$24_size$$28$$ || "inTop" == $position$$24_size$$28$$ || "inRight" == $position$$24_size$$28$$ || "inLeft" == $position$$24_size$$28$$) {
        $cmd$$8_dataItemBounds_padding$$15$$.x += D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ / 2;
        $cmd$$8_dataItemBounds_padding$$15$$.y += D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ / 2;
        $cmd$$8_dataItemBounds_padding$$15$$.$h$ -= D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$;
        $cmd$$8_dataItemBounds_padding$$15$$.$w$ -= D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$;
        if("bar" == D.$DvtChartStyleUtils$$.$getSeriesType$($bbox$$6_chart$$76$$, $seriesIndex$$16$$)) {
          if($dataColor$$7_style$$31_textDim$$1$$.$w$ > $cmd$$8_dataItemBounds_padding$$15$$.$w$ || $dataColor$$7_style$$31_textDim$$1$$.$h$ > $cmd$$8_dataItemBounds_padding$$15$$.$h$) {
            return
          }
          "inRight" == $position$$24_size$$28$$ ? $label$$50_labelString$$7$$.$setX$($cmd$$8_dataItemBounds_padding$$15$$.x + $cmd$$8_dataItemBounds_padding$$15$$.$w$ - $dataColor$$7_style$$31_textDim$$1$$.$w$ / 2 - D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "inLeft" == $position$$24_size$$28$$ ? $label$$50_labelString$$7$$.$setX$($cmd$$8_dataItemBounds_padding$$15$$.x + $dataColor$$7_style$$31_textDim$$1$$.$w$ / 2 + D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "inTop" == $position$$24_size$$28$$ ? 
          $label$$50_labelString$$7$$.$setY$($cmd$$8_dataItemBounds_padding$$15$$.y + $dataColor$$7_style$$31_textDim$$1$$.$h$ / 2 + D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "inBottom" == $position$$24_size$$28$$ && $label$$50_labelString$$7$$.$setY$($cmd$$8_dataItemBounds_padding$$15$$.y + $cmd$$8_dataItemBounds_padding$$15$$.$h$ - $dataColor$$7_style$$31_textDim$$1$$.$h$ / 2 - D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ / 2)
        }else {
          if(D.$DvtChartTypeUtils$$.$isBubble$($bbox$$6_chart$$76$$) && ($position$$24_size$$28$$ = $label$$50_labelString$$7$$.$getOptimalFontSize$($cmd$$8_dataItemBounds_padding$$15$$), $label$$50_labelString$$7$$.$setFontSize$($position$$24_size$$28$$), !D.$DvtTextUtils$$.$fitText$($label$$50_labelString$$7$$, $cmd$$8_dataItemBounds_padding$$15$$.$w$, $cmd$$8_dataItemBounds_padding$$15$$.$h$, $container$$97$$, D.$DvtPlotAreaRenderer$$.$_MIN_CHARS_DATA_LABEL$))) {
            return
          }
        }
        D.$DvtChartStyleUtils$$.$getPattern$($bbox$$6_chart$$76$$, $seriesIndex$$16$$, $groupIndex$$11$$) != D.$JSCompiler_alias_NULL$$ && ($dataColor$$7_style$$31_textDim$$1$$ = $label$$50_labelString$$7$$.$getDimensions$(), $cmd$$8_dataItemBounds_padding$$15$$ = 0.15 * $dataColor$$7_style$$31_textDim$$1$$.$h$, $cmd$$8_dataItemBounds_padding$$15$$ = window.DvtPathUtils.$roundedRectangle$($dataColor$$7_style$$31_textDim$$1$$.x - $cmd$$8_dataItemBounds_padding$$15$$, $dataColor$$7_style$$31_textDim$$1$$.y, 
        $dataColor$$7_style$$31_textDim$$1$$.$w$ + 2 * $cmd$$8_dataItemBounds_padding$$15$$, $dataColor$$7_style$$31_textDim$$1$$.$h$, 2, 2, 2, 2), $bbox$$6_chart$$76$$ = new D.$DvtPath$$($bbox$$6_chart$$76$$.$_context$, $cmd$$8_dataItemBounds_padding$$15$$), $bbox$$6_chart$$76$$.$setSolidFill$("#FFFFFF", 0.9), $container$$97$$.$addChild$($bbox$$6_chart$$76$$))
      }else {
        "right" == $position$$24_size$$28$$ ? $label$$50_labelString$$7$$.$setX$($cmd$$8_dataItemBounds_padding$$15$$.x + $cmd$$8_dataItemBounds_padding$$15$$.$w$ + $dataColor$$7_style$$31_textDim$$1$$.$w$ / 2 + D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "left" == $position$$24_size$$28$$ ? $label$$50_labelString$$7$$.$setX$($cmd$$8_dataItemBounds_padding$$15$$.x - $dataColor$$7_style$$31_textDim$$1$$.$w$ / 2 - D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "above" == $position$$24_size$$28$$ ? 
        $label$$50_labelString$$7$$.$setY$($cmd$$8_dataItemBounds_padding$$15$$.y - $dataColor$$7_style$$31_textDim$$1$$.$h$ / 2) : "below" == $position$$24_size$$28$$ && $label$$50_labelString$$7$$.$setY$($cmd$$8_dataItemBounds_padding$$15$$.y + $cmd$$8_dataItemBounds_padding$$15$$.$h$ + $dataColor$$7_style$$31_textDim$$1$$.$h$ / 2 + D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ / 2)
      }
      $container$$97$$.$addChild$($label$$50_labelString$$7$$)
    }
  }
};
D.$DvtPlotAreaRenderer$$.$_renderLabelForDataMarker$ = function $$DvtPlotAreaRenderer$$$$_renderLabelForDataMarker$$($chart$$77$$, $container$$98$$, $marker$$18$$) {
  var $logicalObject$$3$$ = $chart$$77$$.$getEventManager$().$getLogicalObject$($marker$$18$$), $markerBounds$$ = new D.$DvtRectangle$$($marker$$18$$.$getX$(), $marker$$18$$.$getY$(), $marker$$18$$.getWidth(), $marker$$18$$.getHeight());
  D.$DvtPlotAreaRenderer$$.$_renderDataLabel$($chart$$77$$, $container$$98$$, $markerBounds$$, $logicalObject$$3$$.$getSeriesIndex$(), $logicalObject$$3$$.$getGroupIndex$(), $marker$$18$$.$_dataColor$)
};
D.$DvtPlotAreaRenderer$$.$_renderDataMarkers$ = function $$DvtPlotAreaRenderer$$$$_renderDataMarkers$$($chart$$78$$, $container$$99$$, $availSpace$$56_numMarkers$$1$$) {
  for(var $markers$$3$$ = [], $i$$460_seriesCount$$10$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$78$$), $seriesIndex$$17$$ = 0;$seriesIndex$$17$$ < $i$$460_seriesCount$$10$$;$seriesIndex$$17$$++) {
    "none" != D.$DvtChartStyleUtils$$.$getLineType$($chart$$78$$, $seriesIndex$$17$$) && D.$DvtPlotAreaRenderer$$.$_renderLinesForSeries$($chart$$78$$, $container$$99$$, $seriesIndex$$17$$, $availSpace$$56_numMarkers$$1$$);
    var $seriesMarkers$$ = D.$DvtPlotAreaRenderer$$.$_getMarkersForSeries$($chart$$78$$, $seriesIndex$$17$$, $availSpace$$56_numMarkers$$1$$), $markers$$3$$ = $markers$$3$$.concat($seriesMarkers$$)
  }
  D.$DvtChartMarkerUtils$$.$sortMarkers$($markers$$3$$);
  $availSpace$$56_numMarkers$$1$$ = $markers$$3$$.length;
  for($i$$460_seriesCount$$10$$ = 0;$i$$460_seriesCount$$10$$ < $availSpace$$56_numMarkers$$1$$;$i$$460_seriesCount$$10$$++) {
    $container$$99$$.$addChild$($markers$$3$$[$i$$460_seriesCount$$10$$]), D.$DvtPlotAreaRenderer$$.$_renderLabelForDataMarker$($chart$$78$$, $container$$99$$, $markers$$3$$[$i$$460_seriesCount$$10$$])
  }
  $chart$$78$$.$_currentMarkers$.push($markers$$3$$)
};
D.$DvtPlotAreaRenderer$$.$_renderDataMarkersForSeries$ = function $$DvtPlotAreaRenderer$$$$_renderDataMarkersForSeries$$($chart$$79$$, $container$$100$$, $markers$$4_seriesIndex$$18$$, $availSpace$$57_numMarkers$$2$$) {
  $markers$$4_seriesIndex$$18$$ = D.$DvtPlotAreaRenderer$$.$_getMarkersForSeries$($chart$$79$$, $markers$$4_seriesIndex$$18$$, $availSpace$$57_numMarkers$$2$$);
  $availSpace$$57_numMarkers$$2$$ = $markers$$4_seriesIndex$$18$$.length;
  for(var $i$$461$$ = 0;$i$$461$$ < $availSpace$$57_numMarkers$$2$$;$i$$461$$++) {
    $container$$100$$.$addChild$($markers$$4_seriesIndex$$18$$[$i$$461$$]), D.$DvtPlotAreaRenderer$$.$_renderLabelForDataMarker$($chart$$79$$, $container$$100$$, $markers$$4_seriesIndex$$18$$[$i$$461$$])
  }
  $chart$$79$$.$_currentMarkers$.push($markers$$4_seriesIndex$$18$$)
};
D.$DvtPlotAreaRenderer$$.$_getMarkersForSeries$ = function $$DvtPlotAreaRenderer$$$$_getMarkersForSeries$$($chart$$80$$, $seriesIndex$$19$$, $availSpace$$58$$) {
  if(!D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$80$$, $seriesIndex$$19$$)) {
    return[]
  }
  var $isTouchDevice$$2$$ = (0,D.$DvtAgent$isTouchDevice$$)(), $context$$265$$ = $chart$$80$$.$_context$, $xAxis$$ = $chart$$80$$.$xAxis$, $yAxis$$1$$ = $chart$$80$$.$yAxis$;
  D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$80$$, $seriesIndex$$19$$) && ($yAxis$$1$$ = $chart$$80$$.$y2Axis$);
  for(var $options$$136$$ = $chart$$80$$.$getOptions$(), $bHasDatatips$$ = D.$DvtChartTooltipUtils$$.$hasDatatips$($chart$$80$$), $bBubbleChart$$ = D.$DvtChartTypeUtils$$.$isBubble$($chart$$80$$), $isPolar$$3$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$80$$), $markers$$5$$ = [], $groupIndex$$12$$ = 0;$groupIndex$$12$$ < D.$DvtChartDataUtils$$.$getGroupCount$($chart$$80$$);$groupIndex$$12$$++) {
    var $dataValue_hitArea$$2_xCoord$$4_xValue$$ = D.$DvtChartDataUtils$$.getValue($chart$$80$$, $seriesIndex$$19$$, $groupIndex$$12$$);
    if(!($dataValue_hitArea$$2_xCoord$$4_xValue$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($dataValue_hitArea$$2_xCoord$$4_xValue$$)) && !("multiple" != $options$$136$$.selectionMode && D.$DvtPlotAreaRenderer$$.$_isDataItemFiltered$($chart$$80$$, $seriesIndex$$19$$, $groupIndex$$12$$)) && D.$DvtChartStyleUtils$$.$isDataItemRendered$($chart$$80$$, $seriesIndex$$19$$, $groupIndex$$12$$)) {
      var $dataValue_hitArea$$2_xCoord$$4_xValue$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$80$$, $seriesIndex$$19$$, $groupIndex$$12$$), $cartesian$$2_yCoord$$2_yValue$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$80$$, $seriesIndex$$19$$, $groupIndex$$12$$);
      if($bBubbleChart$$) {
        if($isPolar$$3$$ && $cartesian$$2_yCoord$$2_yValue$$ < $yAxis$$1$$.$getViewportMin$()) {
          continue
        }
        $dataValue_hitArea$$2_xCoord$$4_xValue$$ = $isPolar$$3$$ ? $xAxis$$.$getCoordAt$($dataValue_hitArea$$2_xCoord$$4_xValue$$) : $xAxis$$.$getUnboundedCoordAt$($dataValue_hitArea$$2_xCoord$$4_xValue$$);
        $cartesian$$2_yCoord$$2_yValue$$ = $yAxis$$1$$.$getUnboundedCoordAt$($cartesian$$2_yCoord$$2_yValue$$)
      }else {
        $dataValue_hitArea$$2_xCoord$$4_xValue$$ = $xAxis$$.$getCoordAt$($dataValue_hitArea$$2_xCoord$$4_xValue$$), $cartesian$$2_yCoord$$2_yValue$$ = $yAxis$$1$$.$getCoordAt$($cartesian$$2_yCoord$$2_yValue$$)
      }
      if(!($dataValue_hitArea$$2_xCoord$$4_xValue$$ == D.$JSCompiler_alias_NULL$$ || $cartesian$$2_yCoord$$2_yValue$$ == D.$JSCompiler_alias_NULL$$)) {
        if($isPolar$$3$$) {
          $cartesian$$2_yCoord$$2_yValue$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($cartesian$$2_yCoord$$2_yValue$$, $dataValue_hitArea$$2_xCoord$$4_xValue$$, $availSpace$$58$$), $dataValue_hitArea$$2_xCoord$$4_xValue$$ = $cartesian$$2_yCoord$$2_yValue$$.x, $cartesian$$2_yCoord$$2_yValue$$ = $cartesian$$2_yCoord$$2_yValue$$.y
        }else {
          if(D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$80$$)) {
            var $bMarkerDisplayed_temp$$3$$ = $dataValue_hitArea$$2_xCoord$$4_xValue$$, $dataValue_hitArea$$2_xCoord$$4_xValue$$ = $cartesian$$2_yCoord$$2_yValue$$, $cartesian$$2_yCoord$$2_yValue$$ = $bMarkerDisplayed_temp$$3$$
          }
        }
        $bMarkerDisplayed_temp$$3$$ = D.$DvtChartStyleUtils$$.$isMarkerDisplayed$($chart$$80$$, $seriesIndex$$19$$, $groupIndex$$12$$);
        if(!$bMarkerDisplayed_temp$$3$$) {
          var $lastIndex$$3_prevValue_shape$$35$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$80$$) - 1, $dataPos$$3_nextIndex$$1_nextValue$$2$$ = $isPolar$$3$$ && 0 < $lastIndex$$3_prevValue_shape$$35$$ && $groupIndex$$12$$ == $lastIndex$$3_prevValue_shape$$35$$ ? 0 : $groupIndex$$12$$ + 1, $lastIndex$$3_prevValue_shape$$35$$ = D.$DvtChartDataUtils$$.getValue($chart$$80$$, $seriesIndex$$19$$, $isPolar$$3$$ && 0 < $lastIndex$$3_prevValue_shape$$35$$ && 0 == $groupIndex$$12$$ ? $lastIndex$$3_prevValue_shape$$35$$ : 
          $groupIndex$$12$$ - 1), $dataPos$$3_nextIndex$$1_nextValue$$2$$ = D.$DvtChartDataUtils$$.getValue($chart$$80$$, $seriesIndex$$19$$, $dataPos$$3_nextIndex$$1_nextValue$$2$$);
          if(($lastIndex$$3_prevValue_shape$$35$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($lastIndex$$3_prevValue_shape$$35$$)) && ($dataPos$$3_nextIndex$$1_nextValue$$2$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($dataPos$$3_nextIndex$$1_nextValue$$2$$)) && !D.$DvtChartDataUtils$$.$hasMixedFrequency$($chart$$80$$)) {
            $bMarkerDisplayed_temp$$3$$ = D.$JSCompiler_alias_TRUE$$
          }
        }
        if(!$options$$136$$._duringAnimation || $bMarkerDisplayed_temp$$3$$ || D.$DvtChartDataUtils$$.$isDataSelected$($chart$$80$$, $seriesIndex$$19$$, $groupIndex$$12$$)) {
          var $dataPos$$3_nextIndex$$1_nextValue$$2$$ = new D.$DvtPoint$$($dataValue_hitArea$$2_xCoord$$4_xValue$$, $cartesian$$2_yCoord$$2_yValue$$), $lastIndex$$3_prevValue_shape$$35$$ = D.$DvtChartStyleUtils$$.$getMarkerShape$($chart$$80$$, $seriesIndex$$19$$, $groupIndex$$12$$), $borderColor$$25$$ = D.$DvtChartStyleUtils$$.$getBorderColor$($chart$$80$$, $seriesIndex$$19$$, $groupIndex$$12$$), $borderWidth$$3$$ = $bBubbleChart$$ ? 0.5 : 1, $markerSize$$2$$ = D.$DvtChartStyleUtils$$.$getMarkerSize$($chart$$80$$, 
          $seriesIndex$$19$$, $groupIndex$$12$$), $halfMarkerSize_marker$$19$$ = $markerSize$$2$$ / 2;
          window.xCoordMinHalf = $dataValue_hitArea$$2_xCoord$$4_xValue$$ - D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ / 2;
          window.yCoordMinHalf = $cartesian$$2_yCoord$$2_yValue$$ - D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ / 2;
          var $dataValue_hitArea$$2_xCoord$$4_xValue$$ = $dataValue_hitArea$$2_xCoord$$4_xValue$$ - $halfMarkerSize_marker$$19$$, $cartesian$$2_yCoord$$2_yValue$$ = $cartesian$$2_yCoord$$2_yValue$$ - $halfMarkerSize_marker$$19$$, $halfMarkerSize_marker$$19$$ = D.$JSCompiler_alias_NULL$$, $dataColor$$8$$ = $bMarkerDisplayed_temp$$3$$ ? D.$DvtChartStyleUtils$$.$getMarkerColor$($chart$$80$$, $seriesIndex$$19$$, $groupIndex$$12$$) : D.$DvtChartStyleUtils$$.$getColor$($chart$$80$$, $seriesIndex$$19$$, 
          $groupIndex$$12$$), $hoverColor$$1$$ = D.$DvtSelectionEffectUtils$$.$getHoverBorderColor$($dataColor$$8$$), $innerColor$$6$$ = D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($chart$$80$$), $outerColor$$6$$ = D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($chart$$80$$) ? D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($chart$$80$$) : $dataColor$$8$$;
          $bMarkerDisplayed_temp$$3$$ ? ($halfMarkerSize_marker$$19$$ = new D.$DvtMarker$$($context$$265$$, $lastIndex$$3_prevValue_shape$$35$$, "alta", $dataValue_hitArea$$2_xCoord$$4_xValue$$, $cartesian$$2_yCoord$$2_yValue$$, $markerSize$$2$$, $markerSize$$2$$), $chart$$80$$.$isSelectionSupported$() && $halfMarkerSize_marker$$19$$.setCursor("pointer"), $halfMarkerSize_marker$$19$$.$setFill$(D.$DvtChartSeriesEffectUtils$$.$getMarkerFill$($chart$$80$$, $seriesIndex$$19$$, $groupIndex$$12$$)), $borderColor$$25$$ && 
          $halfMarkerSize_marker$$19$$.$setSolidStroke$($borderColor$$25$$, D.$JSCompiler_alias_NULL$$, $borderWidth$$3$$), $halfMarkerSize_marker$$19$$.$setDataColor$($dataColor$$8$$), $halfMarkerSize_marker$$19$$.$setHoverStroke$(new D.$DvtSolidStroke$$($hoverColor$$1$$, 1, 2)), $halfMarkerSize_marker$$19$$.$setSelectedStroke$(new D.$DvtSolidStroke$$($innerColor$$6$$, 1, 1.5), new D.$DvtSolidStroke$$($outerColor$$6$$, 1, 4.5)), $halfMarkerSize_marker$$19$$.$setSelectedHoverStroke$(new D.$DvtSolidStroke$$($innerColor$$6$$, 
          1, 1.5), new D.$DvtSolidStroke$$($hoverColor$$1$$, 1, 4.5)), $isTouchDevice$$2$$ && $markerSize$$2$$ < D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ && ($dataValue_hitArea$$2_xCoord$$4_xValue$$ = new D.$DvtRect$$($context$$265$$, $dataValue_hitArea$$2_xCoord$$4_xValue$$, $cartesian$$2_yCoord$$2_yValue$$, D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$, D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($dataValue_hitArea$$2_xCoord$$4_xValue$$), 
          $halfMarkerSize_marker$$19$$.$addChild$($dataValue_hitArea$$2_xCoord$$4_xValue$$))) : ($chart$$80$$.$isSelectionSupported$() ? ($halfMarkerSize_marker$$19$$ = new D.$DvtChartLineMarker$$($context$$265$$, $lastIndex$$3_prevValue_shape$$35$$, $dataValue_hitArea$$2_xCoord$$4_xValue$$, $cartesian$$2_yCoord$$2_yValue$$, $markerSize$$2$$), $halfMarkerSize_marker$$19$$.setCursor("pointer"), $isTouchDevice$$2$$ && ($dataValue_hitArea$$2_xCoord$$4_xValue$$ = new D.$DvtRect$$($context$$265$$, window.xCoordMinHalf, 
          window.yCoordMinHalf, D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$, D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($dataValue_hitArea$$2_xCoord$$4_xValue$$), $halfMarkerSize_marker$$19$$.$addChild$($dataValue_hitArea$$2_xCoord$$4_xValue$$))) : ($isTouchDevice$$2$$ && ($dataValue_hitArea$$2_xCoord$$4_xValue$$ = window.xCoordMinHalf, $cartesian$$2_yCoord$$2_yValue$$ = window.yCoordMinHalf, $markerSize$$2$$ = D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$), 
          $bHasDatatips$$ && ($halfMarkerSize_marker$$19$$ = new D.$DvtMarker$$($context$$265$$, "square", D.$JSCompiler_alias_NULL$$, $dataValue_hitArea$$2_xCoord$$4_xValue$$, $cartesian$$2_yCoord$$2_yValue$$, $markerSize$$2$$, $markerSize$$2$$))), $halfMarkerSize_marker$$19$$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($halfMarkerSize_marker$$19$$), $halfMarkerSize_marker$$19$$.$setDataColor$($dataColor$$8$$, $innerColor$$6$$, $outerColor$$6$$)));
          $halfMarkerSize_marker$$19$$ != D.$JSCompiler_alias_NULL$$ && ($markers$$5$$.push($halfMarkerSize_marker$$19$$), (0,D.$DvtChartObjPeer$associate$$)($halfMarkerSize_marker$$19$$, $chart$$80$$, $seriesIndex$$19$$, $groupIndex$$12$$, $dataPos$$3_nextIndex$$1_nextValue$$2$$))
        }
      }
    }
  }
  return $markers$$5$$
};
D.$DvtPlotAreaRenderer$$.$_renderBars$ = function $$DvtPlotAreaRenderer$$$$_renderBars$$($chart$$81$$, $availSpace$$59$$) {
  for(var $container$$101$$ = window.clipGroup, $context$$266$$ = $chart$$81$$.$_context$, $groupCount$$1_options$$137$$ = $chart$$81$$.$getOptions$(), $xAxis$$1$$ = $chart$$81$$.$xAxis$, $bHoriz$$7$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$81$$), $bPolar$$2$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$81$$), $bStacked$$1$$ = D.$DvtChartTypeUtils$$.$isStacked$($chart$$81$$), $bPixelSpacing$$ = "pixel" == D.$DvtChartStyleUtils$$.$getBarSpacing$($chart$$81$$), $barSeries$$ = [], $barSeriesCount_seriesCount$$11$$ = 
  D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$81$$), $seriesIndex$$20$$ = 0;$seriesIndex$$20$$ < $barSeriesCount_seriesCount$$11$$;$seriesIndex$$20$$++) {
    D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$81$$, $seriesIndex$$20$$) && "bar" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$81$$, $seriesIndex$$20$$) && $barSeries$$.push($seriesIndex$$20$$)
  }
  (0,D.$DvtAgent$isRightToLeft$$)($context$$266$$) && (!$bStacked$$1$$ && !$bHoriz$$7$$) && $barSeries$$.reverse();
  for(var $groupCount$$1_options$$137$$ = $groupCount$$1_options$$137$$.groups ? $groupCount$$1_options$$137$$.groups.length : 0, $barSeriesCount_seriesCount$$11$$ = $barSeries$$.length, $barWidth$$ = D.$DvtChartStyleUtils$$.$getBarWidth$($chart$$81$$, $barSeriesCount_seriesCount$$11$$, $xAxis$$1$$), $offset$$19$$ = D.$DvtChartStyleUtils$$.$getBarOffset$($chart$$81$$, $barWidth$$, $barSeriesCount_seriesCount$$11$$), $y2Offset$$ = D.$DvtChartStyleUtils$$.$getY2BarOffset$($chart$$81$$, $barWidth$$), 
  $barSeriesIndex$$ = 0;$barSeriesIndex$$ < $barSeriesCount_seriesCount$$11$$;$barSeriesIndex$$++) {
    for(var $seriesIndex$$20$$ = $barSeries$$[$barSeriesIndex$$], $bY2Series$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$81$$, $seriesIndex$$20$$), $yAxis$$2$$ = $bY2Series$$ ? $chart$$81$$.$y2Axis$ : $chart$$81$$.$yAxis$, $groupIndex$$13$$ = 0;$groupIndex$$13$$ < $groupCount$$1_options$$137$$;$groupIndex$$13$$++) {
      var $shape$$36_xValue$$1_yCoord$$3$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$81$$, $seriesIndex$$20$$, $groupIndex$$13$$), $bInvisible_fill$$39_yValue$$1$$ = D.$DvtChartDataUtils$$.getValue($chart$$81$$, $seriesIndex$$20$$, $groupIndex$$13$$), $dataPos$$4_markers$$6_totalYValue$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$81$$, $seriesIndex$$20$$, $groupIndex$$13$$);
      if(!($bInvisible_fill$$39_yValue$$1$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($bInvisible_fill$$39_yValue$$1$$))) {
        var $innerColor$$7_x1$$21_xCoord$$5$$ = $xAxis$$1$$.$getUnboundedCoordAt$($shape$$36_xValue$$1_yCoord$$3$$, D.$JSCompiler_alias_FALSE$$), $shape$$36_xValue$$1_yCoord$$3$$ = $yAxis$$2$$.$getBoundedCoordAt$($dataPos$$4_markers$$6_totalYValue$$), $axisCoord$$2_stroke$$65$$ = $yAxis$$2$$.$getBaselineCoord$(), $baseCoord_borderColor$$26_dataColor$$9$$ = $bStacked$$1$$ ? $yAxis$$2$$.$getBoundedCoordAt$($dataPos$$4_markers$$6_totalYValue$$ - $bInvisible_fill$$39_yValue$$1$$) : $axisCoord$$2_stroke$$65$$;
        if(!($shape$$36_xValue$$1_yCoord$$3$$ == $baseCoord_borderColor$$26_dataColor$$9$$ && $yAxis$$2$$.$getCoordAt$($dataPos$$4_markers$$6_totalYValue$$) === D.$JSCompiler_alias_NULL$$)) {
          $bInvisible_fill$$39_yValue$$1$$ = D.$JSCompiler_alias_FALSE$$;
          1 > window.Math.abs($shape$$36_xValue$$1_yCoord$$3$$ - $baseCoord_borderColor$$26_dataColor$$9$$) && ($bInvisible_fill$$39_yValue$$1$$ = D.$JSCompiler_alias_TRUE$$, $shape$$36_xValue$$1_yCoord$$3$$ > $baseCoord_borderColor$$26_dataColor$$9$$ ? $shape$$36_xValue$$1_yCoord$$3$$ = $baseCoord_borderColor$$26_dataColor$$9$$ + 3 : $shape$$36_xValue$$1_yCoord$$3$$ <= $baseCoord_borderColor$$26_dataColor$$9$$ && ($shape$$36_xValue$$1_yCoord$$3$$ = $baseCoord_borderColor$$26_dataColor$$9$$ - 3));
          var $innerColor$$7_x1$$21_xCoord$$5$$ = $bY2Series$$ ? $innerColor$$7_x1$$21_xCoord$$5$$ + $offset$$19$$ + $y2Offset$$ : $innerColor$$7_x1$$21_xCoord$$5$$ + $offset$$19$$, $outerColor$$7_x2$$20$$ = $innerColor$$7_x1$$21_xCoord$$5$$ + $barWidth$$, $dataPos$$4_markers$$6_totalYValue$$ = $bPolar$$2$$ ? D.$DvtPlotAreaRenderer$$.$polarToCartesian$($shape$$36_xValue$$1_yCoord$$3$$, ($innerColor$$7_x1$$21_xCoord$$5$$ + $outerColor$$7_x2$$20$$) / 2, $availSpace$$59$$) : $bHoriz$$7$$ ? new D.$DvtPoint$$($shape$$36_xValue$$1_yCoord$$3$$, 
          ($innerColor$$7_x1$$21_xCoord$$5$$ + $outerColor$$7_x2$$20$$) / 2) : new D.$DvtPoint$$(($innerColor$$7_x1$$21_xCoord$$5$$ + $outerColor$$7_x2$$20$$) / 2, $shape$$36_xValue$$1_yCoord$$3$$), $shape$$36_xValue$$1_yCoord$$3$$ = $bPolar$$2$$ ? new D.$DvtChartPolarBar$$($context$$266$$, $axisCoord$$2_stroke$$65$$, $baseCoord_borderColor$$26_dataColor$$9$$, $shape$$36_xValue$$1_yCoord$$3$$, $innerColor$$7_x1$$21_xCoord$$5$$, $outerColor$$7_x2$$20$$, $availSpace$$59$$) : new D.$DvtChartBar$$($context$$266$$, 
          $bHoriz$$7$$, $bStacked$$1$$, $axisCoord$$2_stroke$$65$$, $baseCoord_borderColor$$26_dataColor$$9$$, $shape$$36_xValue$$1_yCoord$$3$$, $innerColor$$7_x1$$21_xCoord$$5$$, $outerColor$$7_x2$$20$$);
          $container$$101$$.$addChild$($shape$$36_xValue$$1_yCoord$$3$$);
          $chart$$81$$.$isSelectionSupported$() && $shape$$36_xValue$$1_yCoord$$3$$.setCursor("pointer");
          $axisCoord$$2_stroke$$65$$ = D.$JSCompiler_alias_NULL$$;
          $bInvisible_fill$$39_yValue$$1$$ ? $bInvisible_fill$$39_yValue$$1$$ = (0,D.$DvtSolidFill$invisibleFill$$)() : ($bInvisible_fill$$39_yValue$$1$$ = D.$DvtChartSeriesEffectUtils$$.$getBarFill$($chart$$81$$, $seriesIndex$$20$$, $groupIndex$$13$$, $bHoriz$$7$$, $barWidth$$), ($baseCoord_borderColor$$26_dataColor$$9$$ = D.$DvtChartStyleUtils$$.$getBorderColor$($chart$$81$$, $seriesIndex$$20$$, $groupIndex$$13$$)) && ($axisCoord$$2_stroke$$65$$ = new D.$DvtSolidStroke$$($baseCoord_borderColor$$26_dataColor$$9$$)));
          $baseCoord_borderColor$$26_dataColor$$9$$ = D.$DvtChartStyleUtils$$.$getColor$($chart$$81$$, $seriesIndex$$20$$, $groupIndex$$13$$);
          $innerColor$$7_x1$$21_xCoord$$5$$ = D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($chart$$81$$);
          $outerColor$$7_x2$$20$$ = D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($chart$$81$$);
          $shape$$36_xValue$$1_yCoord$$3$$.$setStyleProperties$($bInvisible_fill$$39_yValue$$1$$, $axisCoord$$2_stroke$$65$$, $baseCoord_borderColor$$26_dataColor$$9$$, $innerColor$$7_x1$$21_xCoord$$5$$, $outerColor$$7_x2$$20$$);
          $bPixelSpacing$$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($shape$$36_xValue$$1_yCoord$$3$$);
          D.$DvtPlotAreaRenderer$$.$_renderDataLabel$($chart$$81$$, $container$$101$$, $shape$$36_xValue$$1_yCoord$$3$$.$getBoundingBox$(), $seriesIndex$$20$$, $groupIndex$$13$$, D.$DvtChartStyleUtils$$.$getColor$($chart$$81$$, $seriesIndex$$20$$, $groupIndex$$13$$));
          (0,D.$DvtChartObjPeer$associate$$)($shape$$36_xValue$$1_yCoord$$3$$, $chart$$81$$, $seriesIndex$$20$$, $groupIndex$$13$$, $dataPos$$4_markers$$6_totalYValue$$);
          $dataPos$$4_markers$$6_totalYValue$$ = [];
          $dataPos$$4_markers$$6_totalYValue$$.push($shape$$36_xValue$$1_yCoord$$3$$);
          $chart$$81$$.$_currentMarkers$.push($dataPos$$4_markers$$6_totalYValue$$)
        }
      }
    }
    !$bStacked$$1$$ && !D.$DvtChartDataUtils$$.$hasMixedFrequency$($chart$$81$$) && ($offset$$19$$ += $barWidth$$)
  }
};
D.$DvtPlotAreaRenderer$$.$_renderLines$ = function $$DvtPlotAreaRenderer$$$$_renderLines$$($chart$$82$$, $container$$102$$, $clipGroup$$1$$, $availSpace$$60$$) {
  for(var $lineSeries$$ = [], $lineIndex_seriesCount$$12$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$82$$), $seriesIndex$$21$$ = 0;$seriesIndex$$21$$ < $lineIndex_seriesCount$$12$$;$seriesIndex$$21$$++) {
    D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$82$$, $seriesIndex$$21$$) && "line" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$82$$, $seriesIndex$$21$$) && $lineSeries$$.push($seriesIndex$$21$$)
  }
  for($lineIndex_seriesCount$$12$$ = 0;$lineIndex_seriesCount$$12$$ < $lineSeries$$.length;$lineIndex_seriesCount$$12$$++) {
    $seriesIndex$$21$$ = $lineSeries$$[$lineIndex_seriesCount$$12$$], "none" != D.$DvtChartStyleUtils$$.$getLineType$($chart$$82$$, $seriesIndex$$21$$) && (D.$DvtChartTypeUtils$$.$isPolar$($chart$$82$$) || D.$DvtPlotAreaRenderer$$.$_filterPointsForSeries$($chart$$82$$, $seriesIndex$$21$$), D.$DvtPlotAreaRenderer$$.$_renderLinesForSeries$($chart$$82$$, $clipGroup$$1$$, $seriesIndex$$21$$, $availSpace$$60$$))
  }
  for($lineIndex_seriesCount$$12$$ = 0;$lineIndex_seriesCount$$12$$ < $lineSeries$$.length;$lineIndex_seriesCount$$12$$++) {
    D.$DvtPlotAreaRenderer$$.$_renderDataMarkersForSeries$($chart$$82$$, $container$$102$$, $lineSeries$$[$lineIndex_seriesCount$$12$$], $availSpace$$60$$)
  }
};
D.$DvtPlotAreaRenderer$$.$_renderAreas$ = function $$DvtPlotAreaRenderer$$$$_renderAreas$$($chart$$83$$, $container$$103$$, $availSpace$$61$$, $isLineWithArea$$) {
  for(var $bStacked$$2$$ = D.$DvtChartTypeUtils$$.$isStacked$($chart$$83$$), $bPolar$$3$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$83$$), $group$$9_seriesType$$3$$ = $isLineWithArea$$ ? "lineWithArea" : "area", $areaSeries$$ = [], $areaY2Series_baselineCoord$$7$$ = [], $seriesCount$$13_y2PrevCoords$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$83$$), $seriesIndex$$22$$ = 0;$seriesIndex$$22$$ < $seriesCount$$13_y2PrevCoords$$;$seriesIndex$$22$$++) {
    D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$83$$, $seriesIndex$$22$$) && D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$83$$, $seriesIndex$$22$$) == $group$$9_seriesType$$3$$ && ($bStacked$$2$$ && D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$83$$, $seriesIndex$$22$$) ? $areaY2Series_baselineCoord$$7$$.push($seriesIndex$$22$$) : $areaSeries$$.push($seriesIndex$$22$$))
  }
  0 < $areaY2Series_baselineCoord$$7$$.length && ($areaSeries$$ = $areaY2Series_baselineCoord$$7$$.concat($areaSeries$$));
  for(var $group$$9_seriesType$$3$$ = D.$DvtPlotAreaRenderer$$.$createClippedGroup$($chart$$83$$, $container$$103$$, $availSpace$$61$$), $areaY2Series_baselineCoord$$7$$ = $chart$$83$$.$yAxis$ ? $chart$$83$$.$yAxis$.$getBaselineCoord$() : $chart$$83$$.$y2Axis$.$getBaselineCoord$(), $area$$3_prevCoords$$ = [], $seriesCount$$13_y2PrevCoords$$ = [], $yPrevCoords$$ = [], $i$$462$$ = 0;$i$$462$$ < D.$DvtChartDataUtils$$.$getGroupCount$($chart$$83$$);$i$$462$$++) {
    $yPrevCoords$$.push(new D.$DvtChartCoord$$(D.$JSCompiler_alias_NULL$$, $areaY2Series_baselineCoord$$7$$, $areaY2Series_baselineCoord$$7$$, $i$$462$$, D.$DvtChartDataUtils$$.$getGroup$($chart$$83$$, $i$$462$$), D.$JSCompiler_alias_TRUE$$)), D.$DvtChartTypeUtils$$.$hasY2Data$($chart$$83$$) && $seriesCount$$13_y2PrevCoords$$.push(new D.$DvtChartCoord$$(D.$JSCompiler_alias_NULL$$, $areaY2Series_baselineCoord$$7$$, $areaY2Series_baselineCoord$$7$$, $i$$462$$, D.$DvtChartDataUtils$$.$getGroup$($chart$$83$$, 
    $i$$462$$), D.$JSCompiler_alias_TRUE$$))
  }
  for(var $prevType$$, $rawCoords$$, $borderColor$$27_coords$$20$$, $fill$$40$$, $stroke$$66$$, $type$$110$$, $areaIndex$$ = 0;$areaIndex$$ < $areaSeries$$.length;$areaIndex$$++) {
    if($seriesIndex$$22$$ = $areaSeries$$[$areaIndex$$], $area$$3_prevCoords$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$83$$, $seriesIndex$$22$$) ? $seriesCount$$13_y2PrevCoords$$ : $yPrevCoords$$, "none" == D.$DvtChartStyleUtils$$.$getLineType$($chart$$83$$, $seriesIndex$$22$$)) {
      D.$DvtPlotAreaRenderer$$.$_renderDataMarkersForSeries$($chart$$83$$, $container$$103$$, $seriesIndex$$22$$, $availSpace$$61$$)
    }else {
      $fill$$40$$ = D.$DvtChartSeriesEffectUtils$$.$getAreaFill$($chart$$83$$, $seriesIndex$$22$$);
      $stroke$$66$$ = ($borderColor$$27_coords$$20$$ = D.$DvtChartStyleUtils$$.$getBorderColor$($chart$$83$$, $seriesIndex$$22$$)) ? new D.$DvtSolidStroke$$($borderColor$$27_coords$$20$$) : D.$JSCompiler_alias_NULL$$;
      $type$$110$$ = D.$DvtChartStyleUtils$$.$getLineType$($chart$$83$$, $seriesIndex$$22$$);
      $bPolar$$3$$ || D.$DvtPlotAreaRenderer$$.$_filterPointsForSeries$($chart$$83$$, $seriesIndex$$22$$);
      $rawCoords$$ = D.$DvtPlotAreaRenderer$$.$_getCoordsForSeries$($chart$$83$$, $seriesIndex$$22$$);
      $borderColor$$27_coords$$20$$ = [];
      for($i$$462$$ = 0;$i$$462$$ < $area$$3_prevCoords$$.length;$i$$462$$++) {
        $borderColor$$27_coords$$20$$.push($area$$3_prevCoords$$[$i$$462$$].clone())
      }
      for(var $lastIndex$$4$$ = $rawCoords$$.length - 1, $i$$462$$ = 0;$i$$462$$ < $rawCoords$$.length;$i$$462$$++) {
        if($rawCoords$$[$i$$462$$].x != D.$JSCompiler_alias_NULL$$) {
          var $coord$$29$$ = $borderColor$$27_coords$$20$$[$rawCoords$$[$i$$462$$].$groupIndex$], $prevIndex$$2$$ = $bPolar$$3$$ && 0 == $i$$462$$ ? $lastIndex$$4$$ : $i$$462$$ - 1, $nextIndex$$2$$ = $bPolar$$3$$ && $i$$462$$ == $lastIndex$$4$$ ? 0 : $i$$462$$ + 1;
          0 <= $prevIndex$$2$$ && $rawCoords$$[$prevIndex$$2$$].x != D.$JSCompiler_alias_NULL$$ && ($coord$$29$$.$y1$ = $rawCoords$$[$i$$462$$].$y1$);
          $nextIndex$$2$$ <= $lastIndex$$4$$ && $rawCoords$$[$nextIndex$$2$$].x != D.$JSCompiler_alias_NULL$$ && ($coord$$29$$.$y2$ = $rawCoords$$[$i$$462$$].$y2$);
          $coord$$29$$.x = $rawCoords$$[$i$$462$$].x;
          $coord$$29$$.$filtered$ = $rawCoords$$[$i$$462$$].$filtered$
        }
      }
      $area$$3_prevCoords$$ = new D.$DvtChartLineArea$$($chart$$83$$, D.$JSCompiler_alias_TRUE$$, $availSpace$$61$$, $areaY2Series_baselineCoord$$7$$, $fill$$40$$, $stroke$$66$$, $type$$110$$, $borderColor$$27_coords$$20$$, $prevType$$, $bStacked$$2$$ && 0 < $areaIndex$$ ? $area$$3_prevCoords$$ : []);
      $group$$9_seriesType$$3$$.$addChild$($area$$3_prevCoords$$);
      $chart$$83$$.$_currentAreas$.push($area$$3_prevCoords$$);
      (0,D.$DvtChartObjPeer$associate$$)($area$$3_prevCoords$$, $chart$$83$$, $seriesIndex$$22$$);
      $bStacked$$2$$ && (D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$83$$, $seriesIndex$$22$$) ? $seriesCount$$13_y2PrevCoords$$ = $borderColor$$27_coords$$20$$ : $yPrevCoords$$ = $borderColor$$27_coords$$20$$, $prevType$$ = $type$$110$$);
      $bStacked$$2$$ || ($isLineWithArea$$ && D.$DvtPlotAreaRenderer$$.$_renderLinesForSeries$($chart$$83$$, $group$$9_seriesType$$3$$, $seriesIndex$$22$$, $availSpace$$61$$), D.$DvtPlotAreaRenderer$$.$_renderDataMarkersForSeries$($chart$$83$$, $container$$103$$, $seriesIndex$$22$$, $availSpace$$61$$), $areaIndex$$ + 1 < $areaSeries$$.length && ($group$$9_seriesType$$3$$ = D.$DvtPlotAreaRenderer$$.$createClippedGroup$($chart$$83$$, $container$$103$$, $availSpace$$61$$)))
    }
  }
  if($bStacked$$2$$) {
    for($areaIndex$$ = 0;$areaIndex$$ < $areaSeries$$.length;$areaIndex$$++) {
      $seriesIndex$$22$$ = $areaSeries$$[$areaIndex$$], "none" != D.$DvtChartStyleUtils$$.$getLineType$($chart$$83$$, $seriesIndex$$22$$) && ($isLineWithArea$$ && D.$DvtPlotAreaRenderer$$.$_renderLinesForSeries$($chart$$83$$, $group$$9_seriesType$$3$$, $seriesIndex$$22$$, $availSpace$$61$$), D.$DvtPlotAreaRenderer$$.$_renderDataMarkersForSeries$($chart$$83$$, $container$$103$$, $seriesIndex$$22$$, $availSpace$$61$$))
    }
  }
};
D.$DvtPlotAreaRenderer$$.$_renderLinesForSeries$ = function $$DvtPlotAreaRenderer$$$$_renderLinesForSeries$$($chart$$84$$, $container$$104$$, $seriesIndex$$23$$, $availSpace$$62_line$$14$$) {
  var $color$$39_stroke$$67$$ = D.$DvtChartStyleUtils$$.$getColor$($chart$$84$$, $seriesIndex$$23$$), $lineType$$3$$ = D.$DvtChartStyleUtils$$.$getLineType$($chart$$84$$, $seriesIndex$$23$$), $baseline$$6_lineWidth$$3$$ = D.$DvtChartStyleUtils$$.$getLineWidth$($chart$$84$$, $seriesIndex$$23$$), $coords$$21_lineStyle$$6$$ = (0,D.$DvtStroke$convertTypeString$$)(D.$DvtChartStyleUtils$$.$getLineStyle$($chart$$84$$, $seriesIndex$$23$$)), $color$$39_stroke$$67$$ = new D.$DvtSolidStroke$$($color$$39_stroke$$67$$, 
  1, $baseline$$6_lineWidth$$3$$);
  $color$$39_stroke$$67$$.$setStyle$($coords$$21_lineStyle$$6$$);
  $coords$$21_lineStyle$$6$$ = D.$DvtPlotAreaRenderer$$.$_getCoordsForSeries$($chart$$84$$, $seriesIndex$$23$$);
  $baseline$$6_lineWidth$$3$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$84$$, $seriesIndex$$23$$) ? $chart$$84$$.$y2Axis$.$getBaselineCoord$() : $chart$$84$$.$yAxis$.$getBaselineCoord$();
  $availSpace$$62_line$$14$$ = new D.$DvtChartLineArea$$($chart$$84$$, D.$JSCompiler_alias_FALSE$$, $availSpace$$62_line$$14$$, $baseline$$6_lineWidth$$3$$, D.$JSCompiler_alias_NULL$$, $color$$39_stroke$$67$$, $lineType$$3$$, $coords$$21_lineStyle$$6$$);
  $container$$104$$.$addChild$($availSpace$$62_line$$14$$);
  (0,D.$DvtChartObjPeer$associate$$)($availSpace$$62_line$$14$$, $chart$$84$$, $seriesIndex$$23$$)
};
D.$DvtPlotAreaRenderer$$.$_filterPointsForSeries$ = function $$DvtPlotAreaRenderer$$$$_filterPointsForSeries$$($chart$$85$$, $seriesIndex$$24$$) {
  var $maxNumPts_setSize$$ = $chart$$85$$.$_plotAreaSpace$.$w$, $seriesItems$$2$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$85$$, $seriesIndex$$24$$).items, $maxNumPts_setSize$$ = window.Math.round(2 * ($seriesItems$$2$$.length / (($chart$$85$$.$xAxis$.$getDataMax$() - $chart$$85$$.$xAxis$.$getDataMin$()) / ($chart$$85$$.$xAxis$.$getViewportMax$() - $chart$$85$$.$xAxis$.$getViewportMin$()))) / $maxNumPts_setSize$$);
  if(2 >= $maxNumPts_setSize$$) {
    for(var $i$$463$$ = 0;$i$$463$$ < $seriesItems$$2$$.length;$i$$463$$++) {
      ($dataItem$$10$$ = $seriesItems$$2$$[$i$$463$$]) && ($dataItem$$10$$._filtered = D.$JSCompiler_alias_FALSE$$)
    }
  }else {
    for(var $maxIndex$$, $maxValue$$11$$, $minIndex$$, $minValue$$10$$, $dataItem$$10$$, $dataValue$$1$$, $i$$463$$ = 0;$i$$463$$ < $seriesItems$$2$$.length;$i$$463$$ += $maxNumPts_setSize$$) {
      $maxIndex$$ = -1;
      $maxValue$$11$$ = -window.Infinity;
      $minIndex$$ = -1;
      $minValue$$10$$ = window.Infinity;
      for(var $j$$75$$ = $i$$463$$;$j$$75$$ < window.Math.min($i$$463$$ + $maxNumPts_setSize$$, $seriesItems$$2$$.length);$j$$75$$++) {
        $dataValue$$1$$ = D.$DvtChartDataUtils$$.getValue($chart$$85$$, $seriesIndex$$24$$, $j$$75$$), $dataItem$$10$$ = $seriesItems$$2$$[$j$$75$$], $dataValue$$1$$ == D.$JSCompiler_alias_NULL$$ || $dataItem$$10$$ == D.$JSCompiler_alias_NULL$$ || ($dataValue$$1$$ > $maxValue$$11$$ && ($maxIndex$$ = $j$$75$$, $maxValue$$11$$ = $dataValue$$1$$), $dataValue$$1$$ < $minValue$$10$$ && ($minIndex$$ = $j$$75$$, $minValue$$10$$ = $dataValue$$1$$), $dataItem$$10$$._filtered = D.$JSCompiler_alias_TRUE$$)
      }
      for($j$$75$$ = $i$$463$$;$j$$75$$ < window.Math.min($i$$463$$ + $maxNumPts_setSize$$, $seriesItems$$2$$.length);$j$$75$$++) {
        if($dataItem$$10$$ = $seriesItems$$2$$[$j$$75$$], $dataItem$$10$$ != D.$JSCompiler_alias_NULL$$ && ($j$$75$$ == $maxIndex$$ || $j$$75$$ == $minIndex$$)) {
          $dataItem$$10$$._filtered = D.$JSCompiler_alias_FALSE$$
        }
      }
    }
  }
};
D.$DvtPlotAreaRenderer$$.$_isDataItemFiltered$ = function $$DvtPlotAreaRenderer$$$$_isDataItemFiltered$$($chart$$86_dataItem$$11$$, $seriesIndex$$25$$, $groupIndex$$14$$) {
  return($chart$$86_dataItem$$11$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$86_dataItem$$11$$, $seriesIndex$$25$$, $groupIndex$$14$$)) && $chart$$86_dataItem$$11$$._filtered ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$DvtPlotAreaRenderer$$.$_getCoordsForSeries$ = function $$DvtPlotAreaRenderer$$$$_getCoordsForSeries$$($chart$$87$$, $seriesIndex$$26$$) {
  var $xAxis$$2$$ = $chart$$87$$.$xAxis$, $yAxis$$3$$ = $chart$$87$$.$yAxis$;
  D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$87$$, $seriesIndex$$26$$) && ($yAxis$$3$$ = $chart$$87$$.$y2Axis$);
  for(var $coords$$22$$ = [], $groupIndex$$15$$ = 0;$groupIndex$$15$$ < D.$DvtChartDataUtils$$.$getGroupCount$($chart$$87$$);$groupIndex$$15$$++) {
    var $dataValue$$2_yCoord$$4_yValue$$2$$ = D.$DvtChartDataUtils$$.getValue($chart$$87$$, $seriesIndex$$26$$, $groupIndex$$15$$), $coord$$30_group$$10$$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$87$$, $groupIndex$$15$$);
    if($dataValue$$2_yCoord$$4_yValue$$2$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($dataValue$$2_yCoord$$4_yValue$$2$$)) {
      $coords$$22$$.push(new D.$DvtChartCoord$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $groupIndex$$15$$, $coord$$30_group$$10$$, D.$JSCompiler_alias_FALSE$$))
    }else {
      var $xCoord$$6_xValue$$2$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$87$$, $seriesIndex$$26$$, $groupIndex$$15$$), $dataValue$$2_yCoord$$4_yValue$$2$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$87$$, $seriesIndex$$26$$, $groupIndex$$15$$);
      D.$DvtChartTypeUtils$$.$isPolar$($chart$$87$$) && ($dataValue$$2_yCoord$$4_yValue$$2$$ = window.Math.max($dataValue$$2_yCoord$$4_yValue$$2$$, $yAxis$$3$$.$getViewportMin$()));
      $xCoord$$6_xValue$$2$$ = $xAxis$$2$$.$getUnboundedCoordAt$($xCoord$$6_xValue$$2$$);
      $dataValue$$2_yCoord$$4_yValue$$2$$ = $yAxis$$3$$.$getUnboundedCoordAt$($dataValue$$2_yCoord$$4_yValue$$2$$);
      $coord$$30_group$$10$$ = new D.$DvtChartCoord$$($xCoord$$6_xValue$$2$$, $dataValue$$2_yCoord$$4_yValue$$2$$, $dataValue$$2_yCoord$$4_yValue$$2$$, $groupIndex$$15$$, $coord$$30_group$$10$$, D.$DvtPlotAreaRenderer$$.$_isDataItemFiltered$($chart$$87$$, $seriesIndex$$26$$, $groupIndex$$15$$));
      $coords$$22$$.push($coord$$30_group$$10$$)
    }
  }
  return $coords$$22$$
};
D.$DvtPlotAreaRenderer$$.$createClippedGroup$ = function $$DvtPlotAreaRenderer$$$$createClippedGroup$$($chart$$88_obj$$inline_5392_r$$inline_5397$$, $clip_container$$105$$, $availSpace$$64_cy$$21$$) {
  var $clipGroup$$2$$ = new D.$DvtContainer$$($clip_container$$105$$.$_context$);
  $clip_container$$105$$.$addChild$($clipGroup$$2$$);
  $clip_container$$105$$ = new D.$DvtClipPath$$($chart$$88_obj$$inline_5392_r$$inline_5397$$.getId());
  if(D.$DvtChartTypeUtils$$.$isPolar$($chart$$88_obj$$inline_5392_r$$inline_5397$$)) {
    var $cx$$21_points$$39$$ = $availSpace$$64_cy$$21$$.x + $availSpace$$64_cy$$21$$.$w$ / 2;
    $availSpace$$64_cy$$21$$ = $availSpace$$64_cy$$21$$.y + $availSpace$$64_cy$$21$$.$h$ / 2;
    if(D.$DvtChartAxisUtils$$.$isGridPolygonal$($chart$$88_obj$$inline_5392_r$$inline_5397$$)) {
      $cx$$21_points$$39$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$($cx$$21_points$$39$$, $availSpace$$64_cy$$21$$, D.$DvtChartDataUtils$$.$getGroupCount$($chart$$88_obj$$inline_5392_r$$inline_5397$$), $chart$$88_obj$$inline_5392_r$$inline_5397$$.$getRadius$()), $chart$$88_obj$$inline_5392_r$$inline_5397$$ = {type:3}, $chart$$88_obj$$inline_5392_r$$inline_5397$$.$points$ = $cx$$21_points$$39$$, $chart$$88_obj$$inline_5392_r$$inline_5397$$ && $clip_container$$105$$.$_regions$.push($chart$$88_obj$$inline_5392_r$$inline_5397$$)
    }else {
      $chart$$88_obj$$inline_5392_r$$inline_5397$$ = $chart$$88_obj$$inline_5392_r$$inline_5397$$.$getRadius$();
      var $obj$$inline_5398$$ = {type:5};
      $obj$$inline_5398$$.$cx$ = $cx$$21_points$$39$$;
      $obj$$inline_5398$$.$cy$ = $availSpace$$64_cy$$21$$;
      $obj$$inline_5398$$.$r$ = $chart$$88_obj$$inline_5392_r$$inline_5397$$;
      $obj$$inline_5398$$ && $clip_container$$105$$.$_regions$.push($obj$$inline_5398$$)
    }
  }else {
    (0,D.$JSCompiler_StaticMethods_addRect$$)($clip_container$$105$$, $availSpace$$64_cy$$21$$.x, $availSpace$$64_cy$$21$$.y, $availSpace$$64_cy$$21$$.$w$, $availSpace$$64_cy$$21$$.$h$)
  }
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)($clipGroup$$2$$, $clip_container$$105$$);
  return $clipGroup$$2$$
};
D.$DvtPlotAreaRenderer$$.$polarToCartesian$ = function $$DvtPlotAreaRenderer$$$$polarToCartesian$$($r$$26$$, $theta$$, $availSpace$$65$$) {
  window.x = $availSpace$$65$$.x + $availSpace$$65$$.$w$ / 2 + $r$$26$$ * window.Math.sin($theta$$);
  window.y = $availSpace$$65$$.y + $availSpace$$65$$.$h$ / 2 - $r$$26$$ * window.Math.cos($theta$$);
  return new D.$DvtPoint$$(window.x, window.y)
};
D.$DvtFunnelRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtFunnelRenderer$$, D.$DvtObj$$, "DvtFunnelRenderer");
D.$DvtFunnelRenderer$$.$_DEFAULT_3D_GAP_RATIO$ = 1 / 36;
D.$DvtFunnelRenderer$$.$_DEFAULT_2D_GAP_RATIO$ = 1 / 60;
D.$DvtFunnelRenderer$$.$_DEFAULT_NO_GAP_RATIO$ = 1 / 360;
D.$DvtFunnelRenderer$$.$_MAX_WIDTH_FOR_GAPS$ = 0.25;
D.$DvtFunnelRenderer$$.$_GROUP_INDEX$ = 0;
D.$DvtFunnelRenderer$$.$render$ = function $$DvtFunnelRenderer$$$$render$$($chart$$40$$, $container$$73_selected$$17$$, $availSpace$$34$$) {
  var $funnelContainer$$ = new D.$DvtContainer$$($chart$$40$$.$_context$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($funnelContainer$$, $availSpace$$34$$.x, $availSpace$$34$$.y);
  $container$$73_selected$$17$$.$addChild$($funnelContainer$$);
  $chart$$40$$.$_funnelContainer$ = $funnelContainer$$;
  var $bbox$$5$$;
  if("horizontal" == $chart$$40$$.$getOptions$().orientation) {
    $bbox$$5$$ = new D.$DvtRectangle$$(0, 0, $availSpace$$34$$.$w$, $availSpace$$34$$.$h$)
  }else {
    var $rotationMatrix$$2$$ = new D.$DvtMatrix$$;
    (0,D.$DvtAgent$isRightToLeft$$)($chart$$40$$.$_context$) ? ($rotationMatrix$$2$$.translate($availSpace$$34$$.y - $availSpace$$34$$.$h$ / 2, $availSpace$$34$$.y - $availSpace$$34$$.$w$ / 2), $rotationMatrix$$2$$.rotate(-window.Math.PI / 2), $rotationMatrix$$2$$.translate($availSpace$$34$$.x + $availSpace$$34$$.$w$ / 2, $availSpace$$34$$.x + $availSpace$$34$$.$h$ / 2)) : ($rotationMatrix$$2$$.translate(-$availSpace$$34$$.$h$ / 2, -$availSpace$$34$$.$w$ / 2), $rotationMatrix$$2$$.rotate(window.Math.PI / 
    2), $rotationMatrix$$2$$.translate($availSpace$$34$$.$w$ / 2, $availSpace$$34$$.y + $availSpace$$34$$.$h$ / 2));
    $bbox$$5$$ = new D.$DvtRectangle$$(0, 0, $availSpace$$34$$.$h$, $availSpace$$34$$.$w$);
    $funnelContainer$$.$setMatrix$($rotationMatrix$$2$$)
  }
  D.$DvtFunnelRenderer$$.$_renderFunnelSlices$($chart$$40$$, $funnelContainer$$, $bbox$$5$$) || D.$DvtChartRenderer$$.$renderEmptyText$($chart$$40$$, $container$$73_selected$$17$$, $availSpace$$34$$);
  $container$$73_selected$$17$$ = D.$DvtChartDataUtils$$.$getInitialSelection$($chart$$40$$);
  D.$DvtChartEventUtils$$.$setInitialSelection$($chart$$40$$, $container$$73_selected$$17$$)
};
D.$DvtFunnelRenderer$$.$_renderFunnelSlices$ = function $$DvtFunnelRenderer$$$$_renderFunnelSlices$$($chart$$41$$, $container$$74$$, $availSpace$$35$$) {
  for(var $options$$122_totalValue$$ = $chart$$41$$.$getOptions$(), $seriesCount$$8_slice$$10_targetValue$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$41$$), $gapSize$$ = "on" == $options$$122_totalValue$$.styleDefaults.threeDEffect ? D.$DvtFunnelRenderer$$.$_DEFAULT_3D_GAP_RATIO$ * $availSpace$$35$$.$w$ : D.$DvtFunnelRenderer$$.$_DEFAULT_2D_GAP_RATIO$ * $availSpace$$35$$.$w$, $gapSize$$ = "on" == $options$$122_totalValue$$.styleDefaults.funnelSliceGaps ? window.Math.min(D.$DvtFunnelRenderer$$.$_MAX_WIDTH_FOR_GAPS$ * 
  $availSpace$$35$$.$w$ / ($seriesCount$$8_slice$$10_targetValue$$ - 1), $gapSize$$) : D.$DvtFunnelRenderer$$.$_DEFAULT_NO_GAP_RATIO$ * $availSpace$$35$$.$w$, $numDrawnSeries$$2$$ = $options$$122_totalValue$$ = 0, $cumulativeValue$$ = 0, $seriesIndex$$13$$ = 0;$seriesIndex$$13$$ < $seriesCount$$8_slice$$10_targetValue$$;$seriesIndex$$13$$++) {
    if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$41$$, $seriesIndex$$13$$)) {
      var $value$$113$$ = D.$DvtChartDataUtils$$.$getTargetValue$($chart$$41$$, $seriesIndex$$13$$);
      $value$$113$$ == D.$JSCompiler_alias_NULL$$ && ($value$$113$$ = D.$DvtChartDataUtils$$.getValue($chart$$41$$, $seriesIndex$$13$$, D.$DvtFunnelRenderer$$.$_GROUP_INDEX$));
      0 >= $value$$113$$ || ($options$$122_totalValue$$ += $value$$113$$)
    }
  }
  if(0 == $options$$122_totalValue$$) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for($seriesIndex$$13$$ = $seriesCount$$8_slice$$10_targetValue$$ - 1;0 <= $seriesIndex$$13$$;$seriesIndex$$13$$--) {
    D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$41$$, $seriesIndex$$13$$) && ($value$$113$$ = D.$DvtChartDataUtils$$.getValue($chart$$41$$, $seriesIndex$$13$$, D.$DvtFunnelRenderer$$.$_GROUP_INDEX$), $seriesCount$$8_slice$$10_targetValue$$ = D.$DvtChartDataUtils$$.$getTargetValue$($chart$$41$$, $seriesIndex$$13$$), 0 >= $value$$113$$ && $seriesCount$$8_slice$$10_targetValue$$ == D.$JSCompiler_alias_NULL$$ || $seriesCount$$8_slice$$10_targetValue$$ != D.$JSCompiler_alias_NULL$$ && 0 >= $seriesCount$$8_slice$$10_targetValue$$ || 
    ($seriesCount$$8_slice$$10_targetValue$$ != D.$JSCompiler_alias_NULL$$ ? ($cumulativeValue$$ += $seriesCount$$8_slice$$10_targetValue$$ / $options$$122_totalValue$$, $seriesCount$$8_slice$$10_targetValue$$ = new D.$DvtFunnelSlice$$($chart$$41$$, $seriesIndex$$13$$, $numDrawnSeries$$2$$, $availSpace$$35$$.$w$, $availSpace$$35$$.$h$, 1 - $cumulativeValue$$, $seriesCount$$8_slice$$10_targetValue$$ / $options$$122_totalValue$$, $value$$113$$ / $seriesCount$$8_slice$$10_targetValue$$, $gapSize$$)) : 
    ($cumulativeValue$$ += $value$$113$$ / $options$$122_totalValue$$, $seriesCount$$8_slice$$10_targetValue$$ = new D.$DvtFunnelSlice$$($chart$$41$$, $seriesIndex$$13$$, $numDrawnSeries$$2$$, $availSpace$$35$$.$w$, $availSpace$$35$$.$h$, 1 - $cumulativeValue$$, $value$$113$$ / $options$$122_totalValue$$, D.$JSCompiler_alias_NULL$$, $gapSize$$)), $numDrawnSeries$$2$$++, $container$$74$$.$addChild$($seriesCount$$8_slice$$10_targetValue$$), (0,D.$DvtChartObjPeer$associate$$)($seriesCount$$8_slice$$10_targetValue$$, 
    $chart$$41$$, $seriesIndex$$13$$, D.$DvtFunnelRenderer$$.$_GROUP_INDEX$)))
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtRefObjRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtRefObjRenderer$$, D.$DvtObj$$, "DvtRefObjRenderer");
D.$DvtRefObjRenderer$$.$renderBackgroundObjects$ = function $$DvtRefObjRenderer$$$$renderBackgroundObjects$$($chart$$63$$, $plotAreaBounds$$3$$) {
  D.$DvtRefObjRenderer$$.$_renderObjects$($chart$$63$$, $plotAreaBounds$$3$$, "back")
};
D.$DvtRefObjRenderer$$.$renderForegroundObjects$ = function $$DvtRefObjRenderer$$$$renderForegroundObjects$$($chart$$64$$, $plotAreaBounds$$4$$) {
  D.$DvtRefObjRenderer$$.$_renderObjects$($chart$$64$$, $plotAreaBounds$$4$$, "front")
};
D.$DvtRefObjRenderer$$.$_renderObjects$ = function $$DvtRefObjRenderer$$$$_renderObjects$$($chart$$65$$, $plotAreaBounds$$5$$, $location$$22$$) {
  var $container$$88$$ = window.clipGroup;
  D.$DvtRefObjRenderer$$.$_renderObjectsForAxis$($chart$$65$$, $container$$88$$, $plotAreaBounds$$5$$, $location$$22$$, $chart$$65$$.$xAxis$, D.$DvtChartRefObjUtils$$.$getXAxisObjects$($chart$$65$$));
  D.$DvtRefObjRenderer$$.$_renderObjectsForAxis$($chart$$65$$, $container$$88$$, $plotAreaBounds$$5$$, $location$$22$$, $chart$$65$$.$yAxis$, D.$DvtChartRefObjUtils$$.$getYAxisObjects$($chart$$65$$));
  D.$DvtRefObjRenderer$$.$_renderObjectsForAxis$($chart$$65$$, $container$$88$$, $plotAreaBounds$$5$$, $location$$22$$, $chart$$65$$.$y2Axis$, D.$DvtChartRefObjUtils$$.$getY2AxisObjects$($chart$$65$$))
};
D.$DvtRefObjRenderer$$.$_renderObjectsForAxis$ = function $$DvtRefObjRenderer$$$$_renderObjectsForAxis$$($chart$$66$$, $container$$89$$, $plotAreaBounds$$6$$, $location$$23$$, $axis$$47$$, $objects$$2$$) {
  if($objects$$2$$ && $axis$$47$$) {
    for(var $i$$458$$ = 0;$i$$458$$ < $objects$$2$$.length;$i$$458$$++) {
      var $refObj$$1_tooltip$$37$$ = $objects$$2$$[$i$$458$$];
      if($refObj$$1_tooltip$$37$$ && D.$DvtChartRefObjUtils$$.$getLocation$($refObj$$1_tooltip$$37$$) == $location$$23$$) {
        var $shape$$32$$, $type$$109$$ = D.$DvtChartRefObjUtils$$.$getType$($refObj$$1_tooltip$$37$$);
        "area" == $type$$109$$ ? $shape$$32$$ = D.$DvtRefObjRenderer$$.$_createReferenceArea$($refObj$$1_tooltip$$37$$, $chart$$66$$, $plotAreaBounds$$6$$, $axis$$47$$) : "line" == $type$$109$$ && ($shape$$32$$ = D.$DvtRefObjRenderer$$.$_createReferenceLine$($refObj$$1_tooltip$$37$$, $chart$$66$$, $plotAreaBounds$$6$$, $axis$$47$$));
        $shape$$32$$ != D.$JSCompiler_alias_NULL$$ && ($refObj$$1_tooltip$$37$$ = D.$DvtChartTooltipUtils$$.$getRefObjTooltip$($refObj$$1_tooltip$$37$$), $chart$$66$$.$getEventManager$().$associate$($shape$$32$$, new D.$DvtSimpleObjPeer$$($refObj$$1_tooltip$$37$$)), $container$$89$$.$addChild$($shape$$32$$), $shape$$32$$.$setAriaRole$("img"), (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($shape$$32$$, "label", $refObj$$1_tooltip$$37$$))
      }
    }
  }
};
D.$DvtRefObjRenderer$$.$_createReferenceArea$ = function $$DvtRefObjRenderer$$$$_createReferenceArea$$($cy$$18_lowCoords_refObj$$2$$, $chart$$67_outerPoints_radius$$18$$, $cmds$$8_innerPoints_nSides_pHigh_plotAreaBounds$$7_shape$$33$$, $axis$$48_highCoord$$) {
  var $context$$261_items$$18$$ = $chart$$67_outerPoints_radius$$18$$.$_context$, $color$$37_position$$20$$ = $axis$$48_highCoord$$.$getPosition$(), $bHoriz$$5_cx$$18_highCoords$$ = "top" == $color$$37_position$$20$$ || "bottom" == $color$$37_position$$20$$, $bRadial_pLow_pointIndex$$ = "radial" == $color$$37_position$$20$$, $color$$37_position$$20$$ = D.$DvtChartRefObjUtils$$.$getColor$($cy$$18_lowCoords_refObj$$2$$), $lineType$$1_lowCoord$$ = D.$DvtChartRefObjUtils$$.$getLineType$($cy$$18_lowCoords_refObj$$2$$);
  if($cy$$18_lowCoords_refObj$$2$$.items != D.$JSCompiler_alias_NULL$$ && $axis$$48_highCoord$$ == $chart$$67_outerPoints_radius$$18$$.$yAxis$) {
    $context$$261_items$$18$$ = $cy$$18_lowCoords_refObj$$2$$.items;
    $bHoriz$$5_cx$$18_highCoords$$ = [];
    $cy$$18_lowCoords_refObj$$2$$ = [];
    if((0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($chart$$67_outerPoints_radius$$18$$.$xAxis$)) {
      for(;$context$$261_items$$18$$.length < D.$DvtChartDataUtils$$.$getGroupCount$($chart$$67_outerPoints_radius$$18$$);) {
        $context$$261_items$$18$$.push(D.$JSCompiler_alias_NULL$$)
      }
    }
    for($bRadial_pLow_pointIndex$$ = 0;$bRadial_pLow_pointIndex$$ < $context$$261_items$$18$$.length;$bRadial_pLow_pointIndex$$++) {
      var $dataItem$$7_hCoord$$ = $context$$261_items$$18$$[$bRadial_pLow_pointIndex$$];
      if($dataItem$$7_hCoord$$ == D.$JSCompiler_alias_NULL$$ || $dataItem$$7_hCoord$$.min == D.$JSCompiler_alias_NULL$$ || $dataItem$$7_hCoord$$.max == D.$JSCompiler_alias_NULL$$) {
        $bHoriz$$5_cx$$18_highCoords$$.push(new D.$DvtChartCoord$$), $cy$$18_lowCoords_refObj$$2$$.push(new D.$DvtChartCoord$$)
      }else {
        var $lCoord$$ = $axis$$48_highCoord$$.$getUnboundedCoordAt$($dataItem$$7_hCoord$$.min), $dataItem$$7_hCoord$$ = $axis$$48_highCoord$$.$getUnboundedCoordAt$($dataItem$$7_hCoord$$.max), $xCoord$$2$$ = $chart$$67_outerPoints_radius$$18$$.$xAxis$.$getUnboundedCoordAt$(D.$DvtRefObjRenderer$$.$_getXValue$($context$$261_items$$18$$, $bRadial_pLow_pointIndex$$, $chart$$67_outerPoints_radius$$18$$));
        $bHoriz$$5_cx$$18_highCoords$$.push(new D.$DvtChartCoord$$($xCoord$$2$$, $dataItem$$7_hCoord$$, $dataItem$$7_hCoord$$));
        $cy$$18_lowCoords_refObj$$2$$.push(new D.$DvtChartCoord$$($xCoord$$2$$, $lCoord$$, $lCoord$$))
      }
    }
    $cmds$$8_innerPoints_nSides_pHigh_plotAreaBounds$$7_shape$$33$$ = new D.$DvtChartLineArea$$($chart$$67_outerPoints_radius$$18$$, D.$JSCompiler_alias_TRUE$$, $cmds$$8_innerPoints_nSides_pHigh_plotAreaBounds$$7_shape$$33$$, D.$JSCompiler_alias_NULL$$, new D.$DvtSolidFill$$($color$$37_position$$20$$), D.$JSCompiler_alias_NULL$$, $lineType$$1_lowCoord$$, $bHoriz$$5_cx$$18_highCoords$$, $lineType$$1_lowCoord$$, $cy$$18_lowCoords_refObj$$2$$)
  }else {
    if($cy$$18_lowCoords_refObj$$2$$.min == D.$JSCompiler_alias_NULL$$ || -window.Infinity == $cy$$18_lowCoords_refObj$$2$$.min) {
      $cy$$18_lowCoords_refObj$$2$$.min = $axis$$48_highCoord$$.$getGlobalMin$()
    }
    if($cy$$18_lowCoords_refObj$$2$$.max == D.$JSCompiler_alias_NULL$$ || window.Infinity == $cy$$18_lowCoords_refObj$$2$$.max) {
      $cy$$18_lowCoords_refObj$$2$$.max = $axis$$48_highCoord$$.$getGlobalMax$()
    }
    $lineType$$1_lowCoord$$ = D.$DvtRefObjRenderer$$.$_getAxisCoord$($chart$$67_outerPoints_radius$$18$$, $axis$$48_highCoord$$, $cy$$18_lowCoords_refObj$$2$$.min);
    $axis$$48_highCoord$$ = D.$DvtRefObjRenderer$$.$_getAxisCoord$($chart$$67_outerPoints_radius$$18$$, $axis$$48_highCoord$$, $cy$$18_lowCoords_refObj$$2$$.max);
    D.$DvtChartTypeUtils$$.$isPolar$($chart$$67_outerPoints_radius$$18$$) ? ($bHoriz$$5_cx$$18_highCoords$$ = $cmds$$8_innerPoints_nSides_pHigh_plotAreaBounds$$7_shape$$33$$.x + $cmds$$8_innerPoints_nSides_pHigh_plotAreaBounds$$7_shape$$33$$.$w$ / 2, $cy$$18_lowCoords_refObj$$2$$ = $cmds$$8_innerPoints_nSides_pHigh_plotAreaBounds$$7_shape$$33$$.y + $cmds$$8_innerPoints_nSides_pHigh_plotAreaBounds$$7_shape$$33$$.$h$ / 2, $bRadial_pLow_pointIndex$$ ? D.$DvtChartAxisUtils$$.$isGridPolygonal$($chart$$67_outerPoints_radius$$18$$) ? 
    ($cmds$$8_innerPoints_nSides_pHigh_plotAreaBounds$$7_shape$$33$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$67_outerPoints_radius$$18$$), $chart$$67_outerPoints_radius$$18$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$($bHoriz$$5_cx$$18_highCoords$$, $cy$$18_lowCoords_refObj$$2$$, $cmds$$8_innerPoints_nSides_pHigh_plotAreaBounds$$7_shape$$33$$, $axis$$48_highCoord$$, 1), $cmds$$8_innerPoints_nSides_pHigh_plotAreaBounds$$7_shape$$33$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$($bHoriz$$5_cx$$18_highCoords$$, 
    $cy$$18_lowCoords_refObj$$2$$, $cmds$$8_innerPoints_nSides_pHigh_plotAreaBounds$$7_shape$$33$$, $lineType$$1_lowCoord$$, 0), $cmds$$8_innerPoints_nSides_pHigh_plotAreaBounds$$7_shape$$33$$ = window.DvtPathUtils.$polyline$($chart$$67_outerPoints_radius$$18$$) + window.DvtPathUtils.$polyline$($cmds$$8_innerPoints_nSides_pHigh_plotAreaBounds$$7_shape$$33$$) + window.DvtPathUtils.closePath()) : $cmds$$8_innerPoints_nSides_pHigh_plotAreaBounds$$7_shape$$33$$ = window.DvtPathUtils.moveTo($bHoriz$$5_cx$$18_highCoords$$, 
    $cy$$18_lowCoords_refObj$$2$$ - $axis$$48_highCoord$$) + window.DvtPathUtils.arcTo($axis$$48_highCoord$$, $axis$$48_highCoord$$, window.Math.PI, 1, $bHoriz$$5_cx$$18_highCoords$$, $cy$$18_lowCoords_refObj$$2$$ + $axis$$48_highCoord$$) + window.DvtPathUtils.arcTo($axis$$48_highCoord$$, $axis$$48_highCoord$$, window.Math.PI, 1, $bHoriz$$5_cx$$18_highCoords$$, $cy$$18_lowCoords_refObj$$2$$ - $axis$$48_highCoord$$) + window.DvtPathUtils.moveTo($bHoriz$$5_cx$$18_highCoords$$, $cy$$18_lowCoords_refObj$$2$$ - 
    $lineType$$1_lowCoord$$) + window.DvtPathUtils.arcTo($lineType$$1_lowCoord$$, $lineType$$1_lowCoord$$, window.Math.PI, 0, $bHoriz$$5_cx$$18_highCoords$$, $cy$$18_lowCoords_refObj$$2$$ + $lineType$$1_lowCoord$$) + window.DvtPathUtils.arcTo($lineType$$1_lowCoord$$, $lineType$$1_lowCoord$$, window.Math.PI, 0, $bHoriz$$5_cx$$18_highCoords$$, $cy$$18_lowCoords_refObj$$2$$ - $lineType$$1_lowCoord$$) + window.DvtPathUtils.closePath() : ($chart$$67_outerPoints_radius$$18$$ = $chart$$67_outerPoints_radius$$18$$.$getRadius$(), 
    $bRadial_pLow_pointIndex$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($chart$$67_outerPoints_radius$$18$$, $lineType$$1_lowCoord$$, $cmds$$8_innerPoints_nSides_pHigh_plotAreaBounds$$7_shape$$33$$), $cmds$$8_innerPoints_nSides_pHigh_plotAreaBounds$$7_shape$$33$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($chart$$67_outerPoints_radius$$18$$, $axis$$48_highCoord$$, $cmds$$8_innerPoints_nSides_pHigh_plotAreaBounds$$7_shape$$33$$), $cmds$$8_innerPoints_nSides_pHigh_plotAreaBounds$$7_shape$$33$$ = 
    window.DvtPathUtils.moveTo($bHoriz$$5_cx$$18_highCoords$$, $cy$$18_lowCoords_refObj$$2$$) + window.DvtPathUtils.lineTo($bRadial_pLow_pointIndex$$.x, $bRadial_pLow_pointIndex$$.y) + window.DvtPathUtils.arcTo($chart$$67_outerPoints_radius$$18$$, $chart$$67_outerPoints_radius$$18$$, $axis$$48_highCoord$$ - $lineType$$1_lowCoord$$, (0,D.$DvtAgent$isRightToLeft$$)($context$$261_items$$18$$) ? 0 : 1, $cmds$$8_innerPoints_nSides_pHigh_plotAreaBounds$$7_shape$$33$$.x, $cmds$$8_innerPoints_nSides_pHigh_plotAreaBounds$$7_shape$$33$$.y) + 
    window.DvtPathUtils.lineTo($cmds$$8_innerPoints_nSides_pHigh_plotAreaBounds$$7_shape$$33$$.x, $cmds$$8_innerPoints_nSides_pHigh_plotAreaBounds$$7_shape$$33$$.y) + window.DvtPathUtils.closePath()), $cmds$$8_innerPoints_nSides_pHigh_plotAreaBounds$$7_shape$$33$$ = new D.$DvtPath$$($context$$261_items$$18$$, $cmds$$8_innerPoints_nSides_pHigh_plotAreaBounds$$7_shape$$33$$)) : $cmds$$8_innerPoints_nSides_pHigh_plotAreaBounds$$7_shape$$33$$ = new D.$DvtPolygon$$($context$$261_items$$18$$, $bHoriz$$5_cx$$18_highCoords$$ ? 
    [$lineType$$1_lowCoord$$, 0, $axis$$48_highCoord$$, 0, $axis$$48_highCoord$$, $cmds$$8_innerPoints_nSides_pHigh_plotAreaBounds$$7_shape$$33$$.$h$, $lineType$$1_lowCoord$$, $cmds$$8_innerPoints_nSides_pHigh_plotAreaBounds$$7_shape$$33$$.$h$] : [0, $lineType$$1_lowCoord$$, 0, $axis$$48_highCoord$$, $cmds$$8_innerPoints_nSides_pHigh_plotAreaBounds$$7_shape$$33$$.$w$, $axis$$48_highCoord$$, $cmds$$8_innerPoints_nSides_pHigh_plotAreaBounds$$7_shape$$33$$.$w$, $lineType$$1_lowCoord$$]);
    $cmds$$8_innerPoints_nSides_pHigh_plotAreaBounds$$7_shape$$33$$.$setSolidFill$($color$$37_position$$20$$)
  }
  return $cmds$$8_innerPoints_nSides_pHigh_plotAreaBounds$$7_shape$$33$$
};
D.$DvtRefObjRenderer$$.$_createReferenceLine$ = function $$DvtRefObjRenderer$$$$_createReferenceLine$$($lineCoord$$2_refObj$$3_value$$114_xCoord$$3$$, $cartesian$$1_chart$$68_shape$$34$$, $plotAreaBounds$$8$$, $axis$$49_cx$$19$$) {
  var $lineWidth$$2_position$$21_stroke$$64$$ = $axis$$49_cx$$19$$.$getPosition$(), $bHoriz$$6_items$$19$$ = "top" == $lineWidth$$2_position$$21_stroke$$64$$ || "bottom" == $lineWidth$$2_position$$21_stroke$$64$$, $bRadial$$1_coords$$19_points$$37$$ = "radial" == $lineWidth$$2_position$$21_stroke$$64$$, $bTangential_pointIndex$$1$$ = "tangential" == $lineWidth$$2_position$$21_stroke$$64$$, $lineWidth$$2_position$$21_stroke$$64$$ = D.$DvtChartRefObjUtils$$.$getLineWidth$($lineCoord$$2_refObj$$3_value$$114_xCoord$$3$$), 
  $cy$$19_lineType$$2$$ = D.$DvtChartRefObjUtils$$.$getLineType$($lineCoord$$2_refObj$$3_value$$114_xCoord$$3$$), $color$$38_context$$262_dataItem$$8_yCoord$$1$$ = D.$DvtChartRefObjUtils$$.$getColor$($lineCoord$$2_refObj$$3_value$$114_xCoord$$3$$), $lineWidth$$2_position$$21_stroke$$64$$ = new D.$DvtSolidStroke$$($color$$38_context$$262_dataItem$$8_yCoord$$1$$, 1, $lineWidth$$2_position$$21_stroke$$64$$);
  $lineCoord$$2_refObj$$3_value$$114_xCoord$$3$$.lineStyle && $lineWidth$$2_position$$21_stroke$$64$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($lineCoord$$2_refObj$$3_value$$114_xCoord$$3$$.lineStyle));
  $color$$38_context$$262_dataItem$$8_yCoord$$1$$ = $cartesian$$1_chart$$68_shape$$34$$.$_context$;
  if($lineCoord$$2_refObj$$3_value$$114_xCoord$$3$$.items != D.$JSCompiler_alias_NULL$$ && $axis$$49_cx$$19$$ == $cartesian$$1_chart$$68_shape$$34$$.$yAxis$) {
    $bHoriz$$6_items$$19$$ = $lineCoord$$2_refObj$$3_value$$114_xCoord$$3$$.items;
    $bRadial$$1_coords$$19_points$$37$$ = [];
    if((0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($cartesian$$1_chart$$68_shape$$34$$.$xAxis$)) {
      for(;$bHoriz$$6_items$$19$$.length < D.$DvtChartDataUtils$$.$getGroupCount$($cartesian$$1_chart$$68_shape$$34$$);) {
        $bHoriz$$6_items$$19$$.push(D.$JSCompiler_alias_NULL$$)
      }
    }
    $bRadial$$1_coords$$19_points$$37$$ = [];
    for($bTangential_pointIndex$$1$$ = 0;$bTangential_pointIndex$$1$$ < $bHoriz$$6_items$$19$$.length;$bTangential_pointIndex$$1$$++) {
      $color$$38_context$$262_dataItem$$8_yCoord$$1$$ = $bHoriz$$6_items$$19$$[$bTangential_pointIndex$$1$$], $lineCoord$$2_refObj$$3_value$$114_xCoord$$3$$ = D.$JSCompiler_alias_NULL$$, $color$$38_context$$262_dataItem$$8_yCoord$$1$$ != D.$JSCompiler_alias_NULL$$ && ((0,window.isNaN)($color$$38_context$$262_dataItem$$8_yCoord$$1$$) ? $color$$38_context$$262_dataItem$$8_yCoord$$1$$.value != D.$JSCompiler_alias_NULL$$ && ($lineCoord$$2_refObj$$3_value$$114_xCoord$$3$$ = $color$$38_context$$262_dataItem$$8_yCoord$$1$$.value) : 
      $lineCoord$$2_refObj$$3_value$$114_xCoord$$3$$ = $color$$38_context$$262_dataItem$$8_yCoord$$1$$), $lineCoord$$2_refObj$$3_value$$114_xCoord$$3$$ == D.$JSCompiler_alias_NULL$$ ? $bRadial$$1_coords$$19_points$$37$$.push(new D.$DvtChartCoord$$) : ($color$$38_context$$262_dataItem$$8_yCoord$$1$$ = $axis$$49_cx$$19$$.$getUnboundedCoordAt$($lineCoord$$2_refObj$$3_value$$114_xCoord$$3$$), $lineCoord$$2_refObj$$3_value$$114_xCoord$$3$$ = $cartesian$$1_chart$$68_shape$$34$$.$xAxis$.$getUnboundedCoordAt$(D.$DvtRefObjRenderer$$.$_getXValue$($bHoriz$$6_items$$19$$, 
      $bTangential_pointIndex$$1$$, $cartesian$$1_chart$$68_shape$$34$$)), $bRadial$$1_coords$$19_points$$37$$.push(new D.$DvtChartCoord$$($lineCoord$$2_refObj$$3_value$$114_xCoord$$3$$, $color$$38_context$$262_dataItem$$8_yCoord$$1$$, $color$$38_context$$262_dataItem$$8_yCoord$$1$$)))
    }
    $cartesian$$1_chart$$68_shape$$34$$ = new D.$DvtChartLineArea$$($cartesian$$1_chart$$68_shape$$34$$, D.$JSCompiler_alias_FALSE$$, $plotAreaBounds$$8$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $lineWidth$$2_position$$21_stroke$$64$$, $cy$$19_lineType$$2$$, $bRadial$$1_coords$$19_points$$37$$)
  }else {
    if($lineCoord$$2_refObj$$3_value$$114_xCoord$$3$$.value) {
      $lineCoord$$2_refObj$$3_value$$114_xCoord$$3$$ = D.$DvtRefObjRenderer$$.$_getAxisCoord$($cartesian$$1_chart$$68_shape$$34$$, $axis$$49_cx$$19$$, $lineCoord$$2_refObj$$3_value$$114_xCoord$$3$$.value);
      if($lineCoord$$2_refObj$$3_value$$114_xCoord$$3$$ == D.$JSCompiler_alias_NULL$$ || window.Infinity == $lineCoord$$2_refObj$$3_value$$114_xCoord$$3$$ || -window.Infinity == $lineCoord$$2_refObj$$3_value$$114_xCoord$$3$$) {
        return D.$JSCompiler_alias_NULL$$
      }
      $axis$$49_cx$$19$$ = $plotAreaBounds$$8$$.x + $plotAreaBounds$$8$$.$w$ / 2;
      $cy$$19_lineType$$2$$ = $plotAreaBounds$$8$$.y + $plotAreaBounds$$8$$.$h$ / 2;
      $bRadial$$1_coords$$19_points$$37$$ ? (D.$DvtChartAxisUtils$$.$isGridPolygonal$($cartesian$$1_chart$$68_shape$$34$$) ? ($bRadial$$1_coords$$19_points$$37$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$($axis$$49_cx$$19$$, $cy$$19_lineType$$2$$, D.$DvtChartDataUtils$$.$getGroupCount$($cartesian$$1_chart$$68_shape$$34$$), $lineCoord$$2_refObj$$3_value$$114_xCoord$$3$$), $cartesian$$1_chart$$68_shape$$34$$ = new D.$DvtPolygon$$($color$$38_context$$262_dataItem$$8_yCoord$$1$$, $bRadial$$1_coords$$19_points$$37$$)) : 
      $cartesian$$1_chart$$68_shape$$34$$ = new D.$DvtCircle$$($color$$38_context$$262_dataItem$$8_yCoord$$1$$, $axis$$49_cx$$19$$, $cy$$19_lineType$$2$$, $lineCoord$$2_refObj$$3_value$$114_xCoord$$3$$), $cartesian$$1_chart$$68_shape$$34$$.$setFill$(D.$JSCompiler_alias_NULL$$)) : $bTangential_pointIndex$$1$$ ? ($cartesian$$1_chart$$68_shape$$34$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($cartesian$$1_chart$$68_shape$$34$$.$getRadius$(), $lineCoord$$2_refObj$$3_value$$114_xCoord$$3$$, $plotAreaBounds$$8$$), 
      $cartesian$$1_chart$$68_shape$$34$$ = new D.$DvtLine$$($color$$38_context$$262_dataItem$$8_yCoord$$1$$, $axis$$49_cx$$19$$, $cy$$19_lineType$$2$$, $cartesian$$1_chart$$68_shape$$34$$.x, $cartesian$$1_chart$$68_shape$$34$$.y)) : ($cartesian$$1_chart$$68_shape$$34$$ = $bHoriz$$6_items$$19$$ ? new D.$DvtLine$$($color$$38_context$$262_dataItem$$8_yCoord$$1$$, $lineCoord$$2_refObj$$3_value$$114_xCoord$$3$$, 0, $lineCoord$$2_refObj$$3_value$$114_xCoord$$3$$, $plotAreaBounds$$8$$.$h$) : new D.$DvtLine$$($color$$38_context$$262_dataItem$$8_yCoord$$1$$, 
      0, $lineCoord$$2_refObj$$3_value$$114_xCoord$$3$$, $plotAreaBounds$$8$$.$w$, $lineCoord$$2_refObj$$3_value$$114_xCoord$$3$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($cartesian$$1_chart$$68_shape$$34$$));
      $cartesian$$1_chart$$68_shape$$34$$.$setStroke$($lineWidth$$2_position$$21_stroke$$64$$)
    }else {
      return D.$JSCompiler_alias_NULL$$
    }
  }
  return $cartesian$$1_chart$$68_shape$$34$$
};
D.$DvtRefObjRenderer$$.$_getXValue$ = function $$DvtRefObjRenderer$$$$_getXValue$$($dataItem$$9_items$$20$$, $index$$139$$, $chart$$69$$) {
  $dataItem$$9_items$$20$$ = $dataItem$$9_items$$20$$[$index$$139$$];
  return(0,window.isNaN)($dataItem$$9_items$$20$$.x) ? "enabled" == $chart$$69$$.$getOptions$().timeAxisType ? D.$DvtChartDataUtils$$.$getGroupLabel$($chart$$69$$, $index$$139$$) : $index$$139$$ : $dataItem$$9_items$$20$$.x
};
D.$DvtRefObjRenderer$$.$_getAxisCoord$ = function $$DvtRefObjRenderer$$$$_getAxisCoord$$($chart$$70_index$$140$$, $axis$$50$$, $value$$115$$) {
  return(0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($axis$$50$$) && ($chart$$70_index$$140$$ = D.$DvtChartDataUtils$$.$getGroupIndex$($chart$$70_index$$140$$, $value$$115$$), 0 <= $chart$$70_index$$140$$) ? $axis$$50$$.$getUnboundedCoordAt$($chart$$70_index$$140$$) : !(0,window.isNaN)($value$$115$$) ? $axis$$50$$.$getUnboundedCoordAt$($value$$115$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtDataCursor$$ = function $$DvtDataCursor$$$($context$$163$$, $bHoriz$$) {
  this.Init($context$$163$$, $bHoriz$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDataCursor$$, D.$DvtContainer$$, "DvtDataCursor");
D.$DvtDataCursor$$.prototype.Init = function $$DvtDataCursor$$$$Init$($context$$164$$, $bHoriz$$1$$) {
  D.$DvtDataCursor$$.$superclass$.Init.call(this, $context$$164$$);
  this.$_bHoriz$ = $bHoriz$$1$$;
  this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$setVisible$(D.$JSCompiler_alias_FALSE$$);
  $bHoriz$$1$$ ? (this.$_cursorLineRect$ = new D.$DvtRect$$(this.$_context$, 0, 0, 0, 2, "dcLine"), this.$_cursorLineRect$.$setTranslateY$(-1)) : (this.$_cursorLineRect$ = new D.$DvtRect$$(this.$_context$, 0, 0, 2, 0, "dcLine"), this.$_cursorLineRect$.$setTranslateX$(-1));
  this.$_cursorLineRect$.$setSolidFill$("#5a5a5a");
  this.$_cursorLineRect$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$addChild$(this.$_cursorLineRect$);
  this.$_marker$ = new D.$DvtContainer$$(this.$_context$, "dotContainer");
  this.$_marker$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$addChild$(this.$_marker$);
  var $middleCircle_outerCircle$$ = new D.$DvtMarker$$(this.$_context$, "circle", D.$JSCompiler_alias_NULL$$, 0, 0, 16, 16);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($middleCircle_outerCircle$$, -8, -8);
  $middleCircle_outerCircle$$.$setSolidFill$("#5a5a5a");
  $middleCircle_outerCircle$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$_marker$.$addChild$($middleCircle_outerCircle$$);
  $middleCircle_outerCircle$$ = new D.$DvtMarker$$(this.$_context$, "circle", D.$JSCompiler_alias_NULL$$, 0, 0, 12, 12);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($middleCircle_outerCircle$$, -6, -6);
  $middleCircle_outerCircle$$.$setSolidFill$("white");
  $middleCircle_outerCircle$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$_marker$.$addChild$($middleCircle_outerCircle$$);
  this.$_markerInnerCircle$ = new D.$DvtMarker$$(this.$_context$, "circle", D.$JSCompiler_alias_NULL$$, 0, 0, 8, 8);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_markerInnerCircle$, -4, -4);
  this.$_markerInnerCircle$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$_marker$.$addChild$(this.$_markerInnerCircle$)
};
D.$DvtDataCursor$$.prototype.$render$ = function $$DvtDataCursor$$$$$render$$($plotAreaBounds$$, $dataX_isChrome$$, $cursorHeight_dataY$$, $lineCoord$$1$$, $startX$$1_text$$35_tooltipBounds$$, $dataColor$$3$$) {
  var $bHoriz$$2$$ = this.$isHorizontal$(), $bRtl$$1$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$), $stagePageCoords$$ = (0,D.$JSCompiler_StaticMethods_getStageAbsolutePosition$$)(this.$_context$), $tooltipManager$$5$$ = this.$_context$.$getTooltipManager$("_dvtDataCursor");
  $tooltipManager$$5$$.$showDatatip$($dataX_isChrome$$ + $stagePageCoords$$.x, $cursorHeight_dataY$$ + $stagePageCoords$$.y, $startX$$1_text$$35_tooltipBounds$$, $dataColor$$3$$, D.$JSCompiler_alias_FALSE$$);
  $startX$$1_text$$35_tooltipBounds$$ = (0,D.$JSCompiler_StaticMethods_getTooltipBounds$$)($tooltipManager$$5$$);
  var $tooltipX$$, $tooltipY$$;
  $bHoriz$$2$$ ? ($tooltipX$$ = $bRtl$$1$$ ? $plotAreaBounds$$.x - 0.75 * $startX$$1_text$$35_tooltipBounds$$.$w$ : $plotAreaBounds$$.x + $plotAreaBounds$$.$w$ - $startX$$1_text$$35_tooltipBounds$$.$w$ / 4, $tooltipY$$ = $lineCoord$$1$$ - $startX$$1_text$$35_tooltipBounds$$.$h$ / 2, !$bRtl$$1$$ && 16 > $tooltipX$$ - $dataX_isChrome$$ ? $tooltipX$$ = $dataX_isChrome$$ + 16 : $bRtl$$1$$ && 16 > $dataX_isChrome$$ - ($tooltipX$$ + $startX$$1_text$$35_tooltipBounds$$.$w$) && ($tooltipX$$ = $dataX_isChrome$$ - 
  16 - $startX$$1_text$$35_tooltipBounds$$.$w$)) : ($tooltipX$$ = $lineCoord$$1$$ - $startX$$1_text$$35_tooltipBounds$$.$w$ / 2, $tooltipY$$ = $plotAreaBounds$$.y - 0.75 * $startX$$1_text$$35_tooltipBounds$$.$h$, 16 > $cursorHeight_dataY$$ - ($tooltipY$$ + $startX$$1_text$$35_tooltipBounds$$.$h$) && ($tooltipY$$ = $cursorHeight_dataY$$ - 16 - $startX$$1_text$$35_tooltipBounds$$.$h$));
  (0,D.$JSCompiler_StaticMethods_positionTip$$)($tooltipManager$$5$$, $tooltipX$$ + $stagePageCoords$$.x, $tooltipY$$ + $stagePageCoords$$.y);
  $startX$$1_text$$35_tooltipBounds$$ = (0,D.$JSCompiler_StaticMethods_getTooltipBounds$$)($tooltipManager$$5$$);
  $tooltipX$$ = $startX$$1_text$$35_tooltipBounds$$.x - $stagePageCoords$$.x;
  $tooltipY$$ = $startX$$1_text$$35_tooltipBounds$$.y - $stagePageCoords$$.y;
  this.$_markerInnerCircle$.$setSolidFill$($dataColor$$3$$);
  $bHoriz$$2$$ ? ((0,D.$JSCompiler_StaticMethods_setTranslate$$)(this, $plotAreaBounds$$.x, $lineCoord$$1$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_marker$, $dataX_isChrome$$ - $plotAreaBounds$$.x, $cursorHeight_dataY$$ - $lineCoord$$1$$), this.$_cursorLineRect$.$setWidth$(window.Math.max($tooltipX$$ + 1 - $plotAreaBounds$$.x, 0)), $bRtl$$1$$ && ($startX$$1_text$$35_tooltipBounds$$ = $tooltipX$$ + $startX$$1_text$$35_tooltipBounds$$.$w$ + 1 - $plotAreaBounds$$.x, this.$_cursorLineRect$.$setX$($startX$$1_text$$35_tooltipBounds$$), 
  this.$_cursorLineRect$.$setWidth$(window.Math.max($plotAreaBounds$$.$w$ - $startX$$1_text$$35_tooltipBounds$$, 0)))) : ((0,D.$JSCompiler_StaticMethods_setTranslate$$)(this, $lineCoord$$1$$, $plotAreaBounds$$.y + 1), (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_marker$, $dataX_isChrome$$ - $lineCoord$$1$$, $cursorHeight_dataY$$ - $plotAreaBounds$$.y), $dataX_isChrome$$ = (0,D.$DvtAgent$isBrowserChrome$$)(), $cursorHeight_dataY$$ = $plotAreaBounds$$.y + $plotAreaBounds$$.$h$ - $tooltipY$$ - 
  $startX$$1_text$$35_tooltipBounds$$.$h$ + ($dataX_isChrome$$ ? 4 : 0), this.$_cursorLineRect$.$setTranslateY$($tooltipY$$ + $startX$$1_text$$35_tooltipBounds$$.$h$ - ($plotAreaBounds$$.y + ($dataX_isChrome$$ ? 4 : 1))), this.$_cursorLineRect$.$setHeight$(window.Math.max($cursorHeight_dataY$$, 0)));
  (0,D.$DvtAgent$workaroundFirefoxRepaint$$)(this.$_marker$)
};
D.$DvtDataCursor$$.prototype.$isHorizontal$ = (0,D.$JSCompiler_get$$)("$_bHoriz$");
D.$DvtDCEH$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtDCEH$$, D.$DvtObj$$, "DvtDCEH");
D.$DvtDCEH$$.prototype.$_Init$ = function $$DvtDCEH$$$$$_Init$$($context$$156$$, $dataCursor$$1$$) {
  this.$_context$ = $context$$156$$;
  this.$_isNumericMainAxis$ = this.$_useAllInGroup$ = this.$_horizontal$ = this.$_dataCursorShown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_dataCursor$ = $dataCursor$$1$$;
  this.$_threeDHorizontalOffset$ = 0
};
D.$JSCompiler_StaticMethods_processMove$$ = function $$JSCompiler_StaticMethods_processMove$$$($JSCompiler_StaticMethods_processMove$self$$, $dataCursor$$inline_4497_pageX$$1_pos$$30$$, $dcX$$inline_4500_lineCoord$$inline_4505_pageY$$1_x$$110$$, $closestFirstDirectionMatches$$inline_10306_immediateMatch$$inline_10305_minDiff$$inline_11244_targetObj$$3$$, $blockEventsRect_logicalObj$$5$$) {
  if($closestFirstDirectionMatches$$inline_10306_immediateMatch$$inline_10305_minDiff$$inline_11244_targetObj$$3$$) {
    $dataCursor$$inline_4497_pageX$$1_pos$$30$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_processMove$self$$.$_context$, $dataCursor$$inline_4497_pageX$$1_pos$$30$$, $dcX$$inline_4500_lineCoord$$inline_4505_pageY$$1_x$$110$$);
    $dcX$$inline_4500_lineCoord$$inline_4505_pageY$$1_x$$110$$ = $dataCursor$$inline_4497_pageX$$1_pos$$30$$.x;
    var $dcY$$inline_4501_y$$90$$ = $dataCursor$$inline_4497_pageX$$1_pos$$30$$.y;
    if($blockEventsRect_logicalObj$$5$$ = $JSCompiler_StaticMethods_processMove$self$$.$getActionablePlotRect$($dcX$$inline_4500_lineCoord$$inline_4505_pageY$$1_x$$110$$, $dcY$$inline_4501_y$$90$$, $blockEventsRect_logicalObj$$5$$)) {
      $dataCursor$$inline_4497_pageX$$1_pos$$30$$ = $JSCompiler_StaticMethods_processMove$self$$.$_dataCursor$;
      var $closestMatch$$inline_11254_closestMatch$$inline_4498_seriesColor$$inline_4504_useAllInGroup$$inline_10302$$;
      var $centerPoint$$inline_4499_horizontal$$inline_10301$$ = $JSCompiler_StaticMethods_processMove$self$$.$_horizontal$;
      $closestMatch$$inline_11254_closestMatch$$inline_4498_seriesColor$$inline_4504_useAllInGroup$$inline_10302$$ = $JSCompiler_StaticMethods_processMove$self$$.$_useAllInGroup$;
      var $closestLowerBound$$inline_10307_i$$inline_11256_isNumericMainAxis$$inline_10303$$ = $JSCompiler_StaticMethods_processMove$self$$.$_isNumericMainAxis$, $matches$$inline_10304_minDiff$$inline_11255_tooltipText$$inline_4503_xExtent$$inline_4502$$ = [];
      if($closestFirstDirectionMatches$$inline_10306_immediateMatch$$inline_10305_minDiff$$inline_11244_targetObj$$3$$ = $JSCompiler_StaticMethods_processMove$self$$.$findMatches$($dcX$$inline_4500_lineCoord$$inline_4505_pageY$$1_x$$110$$, $dcY$$inline_4501_y$$90$$, $closestFirstDirectionMatches$$inline_10306_immediateMatch$$inline_10305_minDiff$$inline_11244_targetObj$$3$$, $matches$$inline_10304_minDiff$$inline_11255_tooltipText$$inline_4503_xExtent$$inline_4502$$, $blockEventsRect_logicalObj$$5$$)) {
        $closestMatch$$inline_11254_closestMatch$$inline_4498_seriesColor$$inline_4504_useAllInGroup$$inline_10302$$ = $closestFirstDirectionMatches$$inline_10306_immediateMatch$$inline_10305_minDiff$$inline_11244_targetObj$$3$$
      }else {
        $closestFirstDirectionMatches$$inline_10306_immediateMatch$$inline_10305_minDiff$$inline_11244_targetObj$$3$$ = 1E7;
        for(var $closestFirstDirectionMatches$$inline_11245_closestHigherBound$$inline_10308_match$$inline_11257$$ = [], $diffValue$$inline_11258_i$$inline_10310_i$$inline_11246$$ = 0;$diffValue$$inline_11258_i$$inline_10310_i$$inline_11246$$ < $matches$$inline_10304_minDiff$$inline_11255_tooltipText$$inline_4503_xExtent$$inline_4502$$.length;$diffValue$$inline_11258_i$$inline_10310_i$$inline_11246$$++) {
          var $closestFirstDirectionMatch$$inline_10311_closestGroup$$inline_10309_matchObj$$inline_11247$$ = $matches$$inline_10304_minDiff$$inline_11255_tooltipText$$inline_4503_xExtent$$inline_4502$$[$diffValue$$inline_11258_i$$inline_10310_i$$inline_11246$$], $diffValue$$inline_11248_match$$inline_10312$$ = window.Math.abs((($centerPoint$$inline_4499_horizontal$$inline_10301$$ ? $closestFirstDirectionMatch$$inline_10311_closestGroup$$inline_10309_matchObj$$inline_11247$$.$matchRegion$.y : $closestFirstDirectionMatch$$inline_10311_closestGroup$$inline_10309_matchObj$$inline_11247$$.$matchRegion$.x) + 
          ($centerPoint$$inline_4499_horizontal$$inline_10301$$ ? $closestFirstDirectionMatch$$inline_10311_closestGroup$$inline_10309_matchObj$$inline_11247$$.$matchRegion$.y + $closestFirstDirectionMatch$$inline_10311_closestGroup$$inline_10309_matchObj$$inline_11247$$.$matchRegion$.$h$ : $closestFirstDirectionMatch$$inline_10311_closestGroup$$inline_10309_matchObj$$inline_11247$$.$matchRegion$.x + $closestFirstDirectionMatch$$inline_10311_closestGroup$$inline_10309_matchObj$$inline_11247$$.$matchRegion$.$w$)) / 
          2 - ($centerPoint$$inline_4499_horizontal$$inline_10301$$ ? $dcY$$inline_4501_y$$90$$ : $dcX$$inline_4500_lineCoord$$inline_4505_pageY$$1_x$$110$$));
          $diffValue$$inline_11248_match$$inline_10312$$ <= $closestFirstDirectionMatches$$inline_10306_immediateMatch$$inline_10305_minDiff$$inline_11244_targetObj$$3$$ && ($diffValue$$inline_11248_match$$inline_10312$$ < $closestFirstDirectionMatches$$inline_10306_immediateMatch$$inline_10305_minDiff$$inline_11244_targetObj$$3$$ && ($closestFirstDirectionMatches$$inline_11245_closestHigherBound$$inline_10308_match$$inline_11257$$ = []), $closestFirstDirectionMatches$$inline_11245_closestHigherBound$$inline_10308_match$$inline_11257$$.push($closestFirstDirectionMatch$$inline_10311_closestGroup$$inline_10309_matchObj$$inline_11247$$), 
          $closestFirstDirectionMatches$$inline_10306_immediateMatch$$inline_10305_minDiff$$inline_11244_targetObj$$3$$ = $diffValue$$inline_11248_match$$inline_10312$$)
        }
        $closestFirstDirectionMatches$$inline_10306_immediateMatch$$inline_10305_minDiff$$inline_11244_targetObj$$3$$ = $closestFirstDirectionMatches$$inline_11245_closestHigherBound$$inline_10308_match$$inline_11257$$;
        if(!$closestLowerBound$$inline_10307_i$$inline_11256_isNumericMainAxis$$inline_10303$$) {
          $closestLowerBound$$inline_10307_i$$inline_11256_isNumericMainAxis$$inline_10303$$ = 1E6;
          $closestFirstDirectionMatches$$inline_11245_closestHigherBound$$inline_10308_match$$inline_11257$$ = -1E6;
          $closestFirstDirectionMatch$$inline_10311_closestGroup$$inline_10309_matchObj$$inline_11247$$ = D.$JSCompiler_alias_NULL$$;
          for($diffValue$$inline_11258_i$$inline_10310_i$$inline_11246$$ = 0;$diffValue$$inline_11258_i$$inline_10310_i$$inline_11246$$ < $closestFirstDirectionMatches$$inline_10306_immediateMatch$$inline_10305_minDiff$$inline_11244_targetObj$$3$$.length;$diffValue$$inline_11258_i$$inline_10310_i$$inline_11246$$++) {
            $closestFirstDirectionMatch$$inline_10311_closestGroup$$inline_10309_matchObj$$inline_11247$$ = $closestFirstDirectionMatches$$inline_10306_immediateMatch$$inline_10305_minDiff$$inline_11244_targetObj$$3$$[$diffValue$$inline_11258_i$$inline_10310_i$$inline_11246$$], $closestLowerBound$$inline_10307_i$$inline_11256_isNumericMainAxis$$inline_10303$$ = window.Math.min($closestLowerBound$$inline_10307_i$$inline_11256_isNumericMainAxis$$inline_10303$$, $centerPoint$$inline_4499_horizontal$$inline_10301$$ ? 
            $closestFirstDirectionMatch$$inline_10311_closestGroup$$inline_10309_matchObj$$inline_11247$$.$matchRegion$.y : $closestFirstDirectionMatch$$inline_10311_closestGroup$$inline_10309_matchObj$$inline_11247$$.$matchRegion$.x), $closestFirstDirectionMatches$$inline_11245_closestHigherBound$$inline_10308_match$$inline_11257$$ = window.Math.max($closestFirstDirectionMatches$$inline_11245_closestHigherBound$$inline_10308_match$$inline_11257$$, $centerPoint$$inline_4499_horizontal$$inline_10301$$ ? 
            $closestFirstDirectionMatch$$inline_10311_closestGroup$$inline_10309_matchObj$$inline_11247$$.$matchRegion$.y + $closestFirstDirectionMatch$$inline_10311_closestGroup$$inline_10309_matchObj$$inline_11247$$.$matchRegion$.$h$ : $closestFirstDirectionMatch$$inline_10311_closestGroup$$inline_10309_matchObj$$inline_11247$$.$matchRegion$.x + $closestFirstDirectionMatch$$inline_10311_closestGroup$$inline_10309_matchObj$$inline_11247$$.$matchRegion$.$w$), $closestFirstDirectionMatch$$inline_10311_closestGroup$$inline_10309_matchObj$$inline_11247$$ = 
            $closestFirstDirectionMatch$$inline_10311_closestGroup$$inline_10309_matchObj$$inline_11247$$.$gidx$
          }
          for($diffValue$$inline_11258_i$$inline_10310_i$$inline_11246$$ = 0;$diffValue$$inline_11258_i$$inline_10310_i$$inline_11246$$ < $matches$$inline_10304_minDiff$$inline_11255_tooltipText$$inline_4503_xExtent$$inline_4502$$.length;$diffValue$$inline_11258_i$$inline_10310_i$$inline_11246$$++) {
            var $diffValue$$inline_11248_match$$inline_10312$$ = $matches$$inline_10304_minDiff$$inline_11255_tooltipText$$inline_4503_xExtent$$inline_4502$$[$diffValue$$inline_11258_i$$inline_10310_i$$inline_11246$$], $itemGroup$$inline_10313_midPoint$$inline_10314$$ = $diffValue$$inline_11248_match$$inline_10312$$.$gidx$;
            $closestMatch$$inline_11254_closestMatch$$inline_4498_seriesColor$$inline_4504_useAllInGroup$$inline_10302$$ ? $closestFirstDirectionMatch$$inline_10311_closestGroup$$inline_10309_matchObj$$inline_11247$$ == $itemGroup$$inline_10313_midPoint$$inline_10314$$ && $closestFirstDirectionMatches$$inline_10306_immediateMatch$$inline_10305_minDiff$$inline_11244_targetObj$$3$$.push($diffValue$$inline_11248_match$$inline_10312$$) : ($itemGroup$$inline_10313_midPoint$$inline_10314$$ = (($centerPoint$$inline_4499_horizontal$$inline_10301$$ ? 
            $diffValue$$inline_11248_match$$inline_10312$$.$matchRegion$.y : $diffValue$$inline_11248_match$$inline_10312$$.$matchRegion$.x) + ($centerPoint$$inline_4499_horizontal$$inline_10301$$ ? $diffValue$$inline_11248_match$$inline_10312$$.$matchRegion$.y + $diffValue$$inline_11248_match$$inline_10312$$.$matchRegion$.$h$ : $diffValue$$inline_11248_match$$inline_10312$$.$matchRegion$.x + $diffValue$$inline_11248_match$$inline_10312$$.$matchRegion$.$w$)) / 2, $closestFirstDirectionMatches$$inline_11245_closestHigherBound$$inline_10308_match$$inline_11257$$ >= 
            $itemGroup$$inline_10313_midPoint$$inline_10314$$ && $closestLowerBound$$inline_10307_i$$inline_11256_isNumericMainAxis$$inline_10303$$ <= $itemGroup$$inline_10313_midPoint$$inline_10314$$ && $closestFirstDirectionMatches$$inline_10306_immediateMatch$$inline_10305_minDiff$$inline_11244_targetObj$$3$$.push($diffValue$$inline_11248_match$$inline_10312$$))
          }
        }
        $closestMatch$$inline_11254_closestMatch$$inline_4498_seriesColor$$inline_4504_useAllInGroup$$inline_10302$$ = D.$JSCompiler_alias_NULL$$;
        $matches$$inline_10304_minDiff$$inline_11255_tooltipText$$inline_4503_xExtent$$inline_4502$$ = 1E8;
        for($closestLowerBound$$inline_10307_i$$inline_11256_isNumericMainAxis$$inline_10303$$ = 0;$closestLowerBound$$inline_10307_i$$inline_11256_isNumericMainAxis$$inline_10303$$ < $closestFirstDirectionMatches$$inline_10306_immediateMatch$$inline_10305_minDiff$$inline_11244_targetObj$$3$$.length;$closestLowerBound$$inline_10307_i$$inline_11256_isNumericMainAxis$$inline_10303$$++) {
          $closestFirstDirectionMatches$$inline_11245_closestHigherBound$$inline_10308_match$$inline_11257$$ = $closestFirstDirectionMatches$$inline_10306_immediateMatch$$inline_10305_minDiff$$inline_11244_targetObj$$3$$[$closestLowerBound$$inline_10307_i$$inline_11256_isNumericMainAxis$$inline_10303$$], $diffValue$$inline_11258_i$$inline_10310_i$$inline_11246$$ = window.Math.abs((($centerPoint$$inline_4499_horizontal$$inline_10301$$ ? $closestFirstDirectionMatches$$inline_11245_closestHigherBound$$inline_10308_match$$inline_11257$$.$matchRegion$.x : 
          $closestFirstDirectionMatches$$inline_11245_closestHigherBound$$inline_10308_match$$inline_11257$$.$matchRegion$.y) + ($centerPoint$$inline_4499_horizontal$$inline_10301$$ ? $closestFirstDirectionMatches$$inline_11245_closestHigherBound$$inline_10308_match$$inline_11257$$.$matchRegion$.x + $closestFirstDirectionMatches$$inline_11245_closestHigherBound$$inline_10308_match$$inline_11257$$.$matchRegion$.$w$ : $closestFirstDirectionMatches$$inline_11245_closestHigherBound$$inline_10308_match$$inline_11257$$.$matchRegion$.y + 
          $closestFirstDirectionMatches$$inline_11245_closestHigherBound$$inline_10308_match$$inline_11257$$.$matchRegion$.$h$)) / 2 - ($centerPoint$$inline_4499_horizontal$$inline_10301$$ ? $dcX$$inline_4500_lineCoord$$inline_4505_pageY$$1_x$$110$$ : $dcY$$inline_4501_y$$90$$)), $diffValue$$inline_11258_i$$inline_10310_i$$inline_11246$$ < $matches$$inline_10304_minDiff$$inline_11255_tooltipText$$inline_4503_xExtent$$inline_4502$$ && ($matches$$inline_10304_minDiff$$inline_11255_tooltipText$$inline_4503_xExtent$$inline_4502$$ = 
          $diffValue$$inline_11258_i$$inline_10310_i$$inline_11246$$, $closestMatch$$inline_11254_closestMatch$$inline_4498_seriesColor$$inline_4504_useAllInGroup$$inline_10302$$ = $closestFirstDirectionMatches$$inline_11245_closestHigherBound$$inline_10308_match$$inline_11257$$)
        }
      }
      $closestMatch$$inline_11254_closestMatch$$inline_4498_seriesColor$$inline_4504_useAllInGroup$$inline_10302$$ == D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_processMove$self$$) : ($centerPoint$$inline_4499_horizontal$$inline_10301$$ = D.$DvtGeomUtils$$.$getCenterPoint$($closestMatch$$inline_11254_closestMatch$$inline_4498_seriesColor$$inline_4504_useAllInGroup$$inline_10302$$.$matchRegion$), "SNAP" == ($dataCursor$$inline_4497_pageX$$1_pos$$30$$.$_behavior$ ? 
      $dataCursor$$inline_4497_pageX$$1_pos$$30$$.$_behavior$ : "AUTO") && ($dataCursor$$inline_4497_pageX$$1_pos$$30$$.$isHorizontal$() ? $dcY$$inline_4501_y$$90$$ = window.Math.min(window.Math.max($centerPoint$$inline_4499_horizontal$$inline_10301$$.y, $blockEventsRect_logicalObj$$5$$.y), $blockEventsRect_logicalObj$$5$$.y + $blockEventsRect_logicalObj$$5$$.$h$) : $dcX$$inline_4500_lineCoord$$inline_4505_pageY$$1_x$$110$$ = window.Math.min(window.Math.max($centerPoint$$inline_4499_horizontal$$inline_10301$$.x, 
      $blockEventsRect_logicalObj$$5$$.x), $blockEventsRect_logicalObj$$5$$.x + $blockEventsRect_logicalObj$$5$$.$w$)), $JSCompiler_StaticMethods_processMove$self$$.$_threeDHorizontalOffset$ && ($matches$$inline_10304_minDiff$$inline_11255_tooltipText$$inline_4503_xExtent$$inline_4502$$ = $blockEventsRect_logicalObj$$5$$.x + $blockEventsRect_logicalObj$$5$$.$w$ - $JSCompiler_StaticMethods_processMove$self$$.$_threeDHorizontalOffset$, $dcX$$inline_4500_lineCoord$$inline_4505_pageY$$1_x$$110$$ > $matches$$inline_10304_minDiff$$inline_11255_tooltipText$$inline_4503_xExtent$$inline_4502$$ && 
      ($dcX$$inline_4500_lineCoord$$inline_4505_pageY$$1_x$$110$$ = $matches$$inline_10304_minDiff$$inline_11255_tooltipText$$inline_4503_xExtent$$inline_4502$$)), $matches$$inline_10304_minDiff$$inline_11255_tooltipText$$inline_4503_xExtent$$inline_4502$$ = $JSCompiler_StaticMethods_processMove$self$$.$getTooltipText$($closestMatch$$inline_11254_closestMatch$$inline_4498_seriesColor$$inline_4504_useAllInGroup$$inline_10302$$), !$matches$$inline_10304_minDiff$$inline_11255_tooltipText$$inline_4503_xExtent$$inline_4502$$ || 
      "" == $matches$$inline_10304_minDiff$$inline_11255_tooltipText$$inline_4503_xExtent$$inline_4502$$ ? $dataCursor$$inline_4497_pageX$$1_pos$$30$$.$setVisible$(D.$JSCompiler_alias_FALSE$$) : ($dataCursor$$inline_4497_pageX$$1_pos$$30$$.$setVisible$(D.$JSCompiler_alias_TRUE$$), $closestMatch$$inline_11254_closestMatch$$inline_4498_seriesColor$$inline_4504_useAllInGroup$$inline_10302$$ = $JSCompiler_StaticMethods_processMove$self$$.$getSeriesColor$($closestMatch$$inline_11254_closestMatch$$inline_4498_seriesColor$$inline_4504_useAllInGroup$$inline_10302$$.$sidx$, 
      $closestMatch$$inline_11254_closestMatch$$inline_4498_seriesColor$$inline_4504_useAllInGroup$$inline_10302$$.$gidx$), $dcX$$inline_4500_lineCoord$$inline_4505_pageY$$1_x$$110$$ = $dataCursor$$inline_4497_pageX$$1_pos$$30$$.$isHorizontal$() ? $dcY$$inline_4501_y$$90$$ : $dcX$$inline_4500_lineCoord$$inline_4505_pageY$$1_x$$110$$, $dataCursor$$inline_4497_pageX$$1_pos$$30$$.$render$($blockEventsRect_logicalObj$$5$$, $centerPoint$$inline_4499_horizontal$$inline_10301$$.x, $centerPoint$$inline_4499_horizontal$$inline_10301$$.y, 
      $dcX$$inline_4500_lineCoord$$inline_4505_pageY$$1_x$$110$$, $matches$$inline_10304_minDiff$$inline_11255_tooltipText$$inline_4503_xExtent$$inline_4502$$, $closestMatch$$inline_11254_closestMatch$$inline_4498_seriesColor$$inline_4504_useAllInGroup$$inline_10302$$), $JSCompiler_StaticMethods_processMove$self$$.$_dataCursorShown$ = D.$JSCompiler_alias_TRUE$$))
    }else {
      (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_processMove$self$$)
    }
  }else {
    (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_processMove$self$$)
  }
};
D.$JSCompiler_StaticMethods__removeDataCursor$$ = function $$JSCompiler_StaticMethods__removeDataCursor$$$($JSCompiler_StaticMethods__removeDataCursor$self$$) {
  $JSCompiler_StaticMethods__removeDataCursor$self$$.$_dataCursor$.$_bVisible$ && $JSCompiler_StaticMethods__removeDataCursor$self$$.$_dataCursor$.$setVisible$(D.$JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods__removeDataCursor$self$$.$_context$.$getTooltipManager$("_dvtDataCursor").$hideTooltip$();
  $JSCompiler_StaticMethods__removeDataCursor$self$$.$_dataCursorShown$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtDCEH$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getActionablePlotRect$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getPlotRect$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getSeriesColor$ = (0,D.$JSCompiler_returnArg$$)("black");
D.$JSCompiler_prototypeAlias$$.$getTooltipText$ = (0,D.$JSCompiler_returnArg$$)("Base class should override");
D.$JSCompiler_prototypeAlias$$.$findMatches$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$DvtChartDCEH$$ = function $$DvtChartDCEH$$$($chart$$22$$) {
  this.$_Init$($chart$$22$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartDCEH$$, D.$DvtDCEH$$, "DvtChartDCEH");
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartDCEH$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_Init$ = function $$JSCompiler_prototypeAlias$$$$_Init$$($chart$$23$$) {
  D.$DvtChartDCEH$$.$superclass$.$_Init$.call(this, $chart$$23$$.$_context$, $chart$$23$$.$DataCursor$);
  this.$_Chart$ = $chart$$23$$;
  this.$_horizontal$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$23$$);
  this.$_useAllInGroup$ = D.$DvtChartTypeUtils$$.$isLineArea$($chart$$23$$);
  this.$_isNumericMainAxis$ = D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$23$$);
  this.$_isStockChart$ = D.$JSCompiler_alias_FALSE$$;
  this.$_isArea$ = D.$DvtChartTypeUtils$$.$isArea$($chart$$23$$)
};
D.$JSCompiler_prototypeAlias$$.$getPlotRect$ = function $$JSCompiler_prototypeAlias$$$$getPlotRect$$() {
  return this.$_Chart$.$_plotAreaSpace$
};
D.$JSCompiler_prototypeAlias$$.$getActionablePlotRect$ = function $$JSCompiler_prototypeAlias$$$$getActionablePlotRect$$($x$$143$$, $y$$119$$) {
  var $plotRect$$5$$ = this.$getPlotRect$();
  return(0,D.$JSCompiler_StaticMethods_containsPoint$$)($plotRect$$5$$, $x$$143$$, $y$$119$$) ? $plotRect$$5$$ : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$findMatches$ = function $$JSCompiler_prototypeAlias$$$$findMatches$$($chart$$24_x$$144$$, $stage$$4_y$$120$$, $eventManager$$15_targetObj$$7$$, $matches$$4$$) {
  $chart$$24_x$$144$$ = this.$_Chart$;
  $stage$$4_y$$120$$ = $chart$$24_x$$144$$.$_context$.$_stage$;
  $eventManager$$15_targetObj$$7$$ = $chart$$24_x$$144$$.$getEventManager$();
  if(!$chart$$24_x$$144$$.$_currentMarkers$) {
    return D.$JSCompiler_alias_NULL$$
  }
  for(var $i$$432$$ = 0;$i$$432$$ < $chart$$24_x$$144$$.$_currentMarkers$.length;$i$$432$$++) {
    for(var $markers$$2$$ = $chart$$24_x$$144$$.$_currentMarkers$[$i$$432$$], $numMarkers$$ = $markers$$2$$.length, $idx$$7$$ = 0;$idx$$7$$ < $numMarkers$$;$idx$$7$$++) {
      var $item$$33_match$$3$$ = $markers$$2$$[$idx$$7$$], $logicalObject$$2$$ = $eventManager$$15_targetObj$$7$$.$GetLogicalObject$($item$$33_match$$3$$), $dims$$36$$ = $item$$33_match$$3$$.$getDimensionsSelf$ ? $item$$33_match$$3$$.$getDimensionsSelf$($stage$$4_y$$120$$) : $item$$33_match$$3$$.$getDimensions$($stage$$4_y$$120$$), $item$$33_match$$3$$ = {$obj$:$item$$33_match$$3$$, $matchRegion$:$dims$$36$$, $gidx$:$logicalObject$$2$$.$getGroupIndex$(), $sidx$:$logicalObject$$2$$.$getSeriesIndex$(), 
      $marker$:D.$JSCompiler_alias_NULL$$};
      $matches$$4$$.push($item$$33_match$$3$$)
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getSeriesColor$ = function $$JSCompiler_prototypeAlias$$$$getSeriesColor$$($seriesIndex$$7$$, $groupIndex$$7$$) {
  return D.$DvtChartTooltipUtils$$.$getDatatipColor$(this.$_Chart$, $seriesIndex$$7$$, $groupIndex$$7$$)
};
D.$JSCompiler_prototypeAlias$$.$getTooltipText$ = function $$JSCompiler_prototypeAlias$$$$getTooltipText$$($closestMatch$$3$$) {
  return D.$DvtChartTooltipUtils$$.$getDatatip$($closestMatch$$3$$.$obj$, this.$_Chart$, $closestMatch$$3$$.$sidx$, $closestMatch$$3$$.$gidx$)
};
D.$DvtSparkChart$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtSparkChart", D.$DvtSparkChart$$);
D.$DvtObj$$.$createSubclass$(D.$DvtSparkChart$$, D.$DvtBaseComponent$$, "DvtSparkChart");
D.$DvtSparkChart$$.newInstance = function $$DvtSparkChart$$$newInstance$($context$$689$$, $callback$$143$$, $callbackObj$$103$$) {
  var $sparkChart$$ = new D.$DvtSparkChart$$;
  $sparkChart$$.Init($context$$689$$, $callback$$143$$, $callbackObj$$103$$);
  return $sparkChart$$
};
D.$DvtSparkChart$$.getDefaults = function $$DvtSparkChart$$$getDefaults$($skin$$13$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtSparkChartDefaults$$, $skin$$13$$)
};
D.$DvtSparkChart$$.prototype.Init = function $$DvtSparkChart$$$$Init$($context$$690$$, $callback$$144$$, $callbackObj$$104$$) {
  D.$DvtSparkChart$$.$superclass$.Init.call(this, $context$$690$$, $callback$$144$$, $callbackObj$$104$$);
  this.$Defaults$ = new D.$DvtSparkChartDefaults$$;
  this.$_eventHandler$ = new D.$DvtEventManager$$($context$$690$$);
  this.$_eventHandler$.$addListeners$(this);
  this.$_chart$ = (0,D.$DvtChart$newInstance$$)($context$$690$$);
  this.$addChild$(this.$_chart$);
  this.$_tooltipMask$ = new D.$DvtRect$$($context$$690$$);
  this.$addChild$(this.$_tooltipMask$);
  this.setId("sparkChart1000" + window.Math.floor(1E9 * window.Math.random()))
};
D.$DvtSparkChart$$.prototype.$SetOptions$ = function $$DvtSparkChart$$$$$SetOptions$$($options$$246$$) {
  $options$$246$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($options$$246$$), (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this))
};
D.$DvtSparkChart$$.prototype.setId = function $$DvtSparkChart$$$$setId$($id$$291$$) {
  D.$DvtSparkChart$$.$superclass$.setId.call(this, $id$$291$$);
  this.$_chart$ && this.$_chart$.setId($id$$291$$ + "chart")
};
D.$DvtSparkChart$$.prototype.$render$ = function $$DvtSparkChart$$$$$render$$($options$$247_tooltip$$56$$, $width$$167$$, $height$$148$$) {
  this.$SetOptions$($options$$247_tooltip$$56$$);
  !(0,window.isNaN)($width$$167$$) && !(0,window.isNaN)($height$$148$$) && (this.$Width$ = $width$$167$$, this.$Height$ = $height$$148$$);
  D.$DvtSparkChartRenderer$$.$render$(this, this.$Width$, this.$Height$);
  $options$$247_tooltip$$56$$ = this.$Options$.shortDesc;
  this.$_tooltipMask$.$setWidth$(this.$Width$);
  this.$_tooltipMask$.$setHeight$(this.$Height$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_tooltipMask$);
  $options$$247_tooltip$$56$$ && this.$_eventHandler$.$associate$(this.$_tooltipMask$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $options$$247_tooltip$$56$$, this.$Options$.color));
  this.getParent() == this.$_context$.$_stage$ ? (this.$_context$.$setAriaRole$(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_setAriaLabel$$)(this.$_context$, $options$$247_tooltip$$56$$)) : (window.container.$setAriaRole$("img"), (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)(window.container, "label", $options$$247_tooltip$$56$$))
};
D.$DvtSparkChart$$.prototype.render = D.$DvtSparkChart$$.prototype.$render$;
D.$DvtSparkChart$$.prototype.$__getOptions$ = (0,D.$JSCompiler_get$$)("$Options$");
D.$DvtSparkChart$$.prototype.$getAutomation$ = function $$DvtSparkChart$$$$$getAutomation$$() {
  return new D.$DvtSparkChartAutomation$$(this)
};
D.$DvtSparkChart$$.prototype.getAutomation = D.$DvtSparkChart$$.prototype.$getAutomation$;
D.$DvtSparkChartAutomation$$ = function $$DvtSparkChartAutomation$$$($dvtComponent$$7$$) {
  this.$_sparkChart$ = $dvtComponent$$7$$;
  this.$_options$ = this.$_sparkChart$.$__getOptions$();
  this.$_seriesIndex$ = "floatingBar" == this.$_options$.type ? 1 : 0
};
(0,D.$goog$exportSymbol$$)("DvtSparkChartAutomation", D.$DvtSparkChartAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtSparkChartAutomation$$, D.$DvtAutomation$$, "DvtSparkChartAutomation");
D.$DvtSparkChartAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtSparkChartAutomation$$$$$GetSubIdForDomElement$$($displayable$$31_itemIndex$$3$$) {
  window.logicalObj = this.$_sparkChart$.$_chart$.$getEventManager$().$GetLogicalObject$($displayable$$31_itemIndex$$3$$);
  return window.logicalObj instanceof D.$DvtChartObjPeer$$ && ($displayable$$31_itemIndex$$3$$ = window.logicalObj.$getGroupIndex$(), 0 <= $displayable$$31_itemIndex$$3$$) ? "dataItem[" + $displayable$$31_itemIndex$$3$$ + "]" : D.$JSCompiler_alias_NULL$$
};
D.$DvtSparkChartAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtSparkChartAutomation$$$$$getDomElementForSubId$$($logicalObj$$9_subId$$18$$) {
  var $openParen$$3$$ = $logicalObj$$9_subId$$18$$.indexOf("["), $closeParen$$3$$ = $logicalObj$$9_subId$$18$$.indexOf("]");
  return 0 < $openParen$$3$$ && 0 < $closeParen$$3$$ && ($logicalObj$$9_subId$$18$$ = this.$_getChartObjPeer$(this.$_seriesIndex$, $logicalObj$$9_subId$$18$$.substring($openParen$$3$$ + 1, $closeParen$$3$$))) ? $logicalObj$$9_subId$$18$$.$getDisplayables$()[0].$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$DvtSparkChartAutomation$$.prototype.getDomElementForSubId = D.$DvtSparkChartAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtSparkChartAutomation$$.prototype.$_getChartObjPeer$ = function $$DvtSparkChartAutomation$$$$$_getChartObjPeer$$($firstIndex$$3$$, $secondIndex$$) {
  for(var $peers$$3$$ = this.$_sparkChart$.$_chart$.$getObjects$(), $i$$418$$ = 0;$i$$418$$ < $peers$$3$$.length;$i$$418$$++) {
    var $seriesIndex$$ = $peers$$3$$[$i$$418$$].$getSeriesIndex$(), $itemIndex$$5$$ = $peers$$3$$[$i$$418$$].$getGroupIndex$();
    if($seriesIndex$$ == $firstIndex$$3$$ && $itemIndex$$5$$ == $secondIndex$$) {
      return $peers$$3$$[$i$$418$$]
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtSparkChartAutomation$$.prototype.$getDataItem$ = function $$DvtSparkChartAutomation$$$$$getDataItem$$($itemIndex$$6$$) {
  var $dataItem$$3$$ = this.$_options$.items[$itemIndex$$6$$];
  return{borderColor:D.$DvtChartStyleUtils$$.$getBorderColor$(this.$_sparkChart$.$_chart$, this.$_seriesIndex$, $itemIndex$$6$$), color:D.$DvtChartStyleUtils$$.$getColor$(this.$_sparkChart$.$_chart$, this.$_seriesIndex$, $itemIndex$$6$$), date:$dataItem$$3$$.date ? $dataItem$$3$$.date : D.$JSCompiler_alias_NULL$$, floatValue:$dataItem$$3$$.floatValue ? $dataItem$$3$$.floatValue : D.$JSCompiler_alias_NULL$$, value:D.$DvtChartDataUtils$$.getValue(this.$_sparkChart$.$_chart$, this.$_seriesIndex$, $itemIndex$$6$$)}
};
D.$DvtSparkChartAutomation$$.prototype.getDataItem = D.$DvtSparkChartAutomation$$.prototype.$getDataItem$;
D.$DvtSparkChartDefaults$$ = function $$DvtSparkChartDefaults$$$() {
  this.Init({skyros:D.$DvtSparkChartDefaults$VERSION_1$$, alta:D.$DvtSparkChartDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtSparkChartDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtSparkChartDefaults");
D.$DvtSparkChartDefaults$SKIN_ALTA$$ = {skin:"alta", color:"#267db3"};
D.$DvtSparkChartDefaults$VERSION_1$$ = {skin:"skyros", type:"line", animationOnDisplay:"none", animationOnDataChange:"none", emptyText:D.$JSCompiler_alias_NULL$$, color:"#666699", firstColor:D.$JSCompiler_alias_NULL$$, lastColor:D.$JSCompiler_alias_NULL$$, highColor:D.$JSCompiler_alias_NULL$$, lowColor:D.$JSCompiler_alias_NULL$$, visualEffects:"auto", baselineScaling:"min", barSpacing:"auto", lineWidth:1, lineStyle:"solid", lineType:"straight", markerSize:5, markerShape:"auto", barGapRatio:0.25};
D.$DvtSparkChartRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtSparkChartRenderer$$, D.$DvtObj$$, "DvtSparkChartRenderer");
D.$DvtSparkChartRenderer$$.$render$ = function $$DvtSparkChartRenderer$$$$render$$($items$$15_spark$$, $width$$90$$, $height$$78$$) {
  var $chart$$1$$ = $items$$15_spark$$.$_chart$, $chartOptions$$ = D.$DvtSparkChartRenderer$$.$_convertOptionsObj$($items$$15_spark$$), $markerGap_options$$109$$ = $items$$15_spark$$.$__getOptions$();
  if("area" == $markerGap_options$$109$$.type || "line" == $markerGap_options$$109$$.type || "lineWithArea" == $markerGap_options$$109$$.type) {
    $items$$15_spark$$ = D.$DvtSparkChartRenderer$$.$_getDataItems$($items$$15_spark$$);
    var $hasMarkers$$ = D.$JSCompiler_alias_FALSE$$;
    if($markerGap_options$$109$$.firstColor || $markerGap_options$$109$$.lastColor || $markerGap_options$$109$$.highColor || $markerGap_options$$109$$.lowColor) {
      $hasMarkers$$ = D.$JSCompiler_alias_TRUE$$
    }else {
      for(var $i$$416$$ = 0;$i$$416$$ < $items$$15_spark$$.length;$i$$416$$++) {
        if($items$$15_spark$$[$i$$416$$] && "on" == $items$$15_spark$$[$i$$416$$].markerDisplayed) {
          $hasMarkers$$ = D.$JSCompiler_alias_TRUE$$;
          break
        }
      }
    }
    if($hasMarkers$$ && 0 < $items$$15_spark$$.length || "none" == $markerGap_options$$109$$.lineType) {
      $markerGap_options$$109$$ = $markerGap_options$$109$$.markerSize / 2, $width$$90$$ -= 2 * $markerGap_options$$109$$, $height$$78$$ -= 2 * $markerGap_options$$109$$, (0,D.$JSCompiler_StaticMethods_setTranslate$$)($chart$$1$$, $markerGap_options$$109$$, $markerGap_options$$109$$)
    }
  }
  $chart$$1$$.$render$($chartOptions$$, $width$$90$$, $height$$78$$)
};
D.$DvtSparkChartRenderer$$.$_getDataItems$ = function $$DvtSparkChartRenderer$$$$_getDataItems$$($options$$110_spark$$1$$) {
  return($options$$110_spark$$1$$ = $options$$110_spark$$1$$.$__getOptions$()) && $options$$110_spark$$1$$.items ? $options$$110_spark$$1$$.items : []
};
D.$DvtSparkChartRenderer$$.$_convertOptionsObj$ = function $$DvtSparkChartRenderer$$$$_convertOptionsObj$$($items$$16_spark$$2$$) {
  var $options$$111$$ = $items$$16_spark$$2$$.$__getOptions$(), $chartOptions$$1$$ = {styleDefaults:{}, xAxis:{}, yAxis:{}, groups:[]}, $bFloatingBar$$ = "floatingBar" == $options$$111$$.type, $barSpacing_chartItems_zeroBaseline$$1$$ = [], $axisGap_floatItems$$ = [], $highIndex$$ = -1, $lowIndex$$ = -1, $highValue$$ = -window.Infinity, $lowValue$$ = window.Infinity;
  $items$$16_spark$$2$$ = D.$DvtSparkChartRenderer$$.$_getDataItems$($items$$16_spark$$2$$);
  for(var $i$$417$$ = 0;$i$$417$$ < $items$$16_spark$$2$$.length;$i$$417$$++) {
    var $item$$32_topValue$$ = $items$$16_spark$$2$$[$i$$417$$], $baseValue_chartItem$$ = {}, $floatValue$$1$$ = 0;
    $item$$32_topValue$$ instanceof window.Object ? ($baseValue_chartItem$$.y = $item$$32_topValue$$.value, $item$$32_topValue$$.date && ($chartOptions$$1$$.timeAxisType = "enabled", $chartOptions$$1$$.groups.push($item$$32_topValue$$.date)), "on" == $item$$32_topValue$$.markerDisplayed && ($baseValue_chartItem$$.markerDisplayed = "on"), $item$$32_topValue$$.color && ($baseValue_chartItem$$.color = $item$$32_topValue$$.color), $item$$32_topValue$$.borderColor && ($baseValue_chartItem$$.borderColor = 
    $item$$32_topValue$$.borderColor), $item$$32_topValue$$.markerShape && ($baseValue_chartItem$$.markerShape = $item$$32_topValue$$.markerShape), $item$$32_topValue$$.markerSize && ($baseValue_chartItem$$.markerSize = $item$$32_topValue$$.markerSize), $bFloatingBar$$ && ($floatValue$$1$$ = $item$$32_topValue$$.floatValue, (0,window.isNaN)($floatValue$$1$$) && ($floatValue$$1$$ = 0), $axisGap_floatItems$$.push($floatValue$$1$$))) : ($baseValue_chartItem$$.y = $item$$32_topValue$$, $bFloatingBar$$ && 
    $axisGap_floatItems$$.push(0));
    $barSpacing_chartItems_zeroBaseline$$1$$.push($baseValue_chartItem$$);
    $item$$32_topValue$$ = $bFloatingBar$$ ? window.Math.max($floatValue$$1$$ + $baseValue_chartItem$$.y, $floatValue$$1$$) : $baseValue_chartItem$$.y;
    $highValue$$ < $item$$32_topValue$$ && ($highValue$$ = $item$$32_topValue$$, $highIndex$$ = $i$$417$$);
    $baseValue_chartItem$$ = $bFloatingBar$$ ? window.Math.min($floatValue$$1$$ + $baseValue_chartItem$$.y, $floatValue$$1$$) : $baseValue_chartItem$$.y;
    $lowValue$$ > $baseValue_chartItem$$ && ($lowValue$$ = $baseValue_chartItem$$, $lowIndex$$ = $i$$417$$)
  }
  $options$$111$$.highColor && 0 <= $highIndex$$ && ($barSpacing_chartItems_zeroBaseline$$1$$[$highIndex$$].markerDisplayed = "on", $barSpacing_chartItems_zeroBaseline$$1$$[$highIndex$$].color || ($barSpacing_chartItems_zeroBaseline$$1$$[$highIndex$$].color = $options$$111$$.highColor));
  $options$$111$$.lowColor && 0 <= $lowIndex$$ && ($barSpacing_chartItems_zeroBaseline$$1$$[$lowIndex$$].markerDisplayed = "on", $barSpacing_chartItems_zeroBaseline$$1$$[$lowIndex$$].color || ($barSpacing_chartItems_zeroBaseline$$1$$[$lowIndex$$].color = $options$$111$$.lowColor));
  $options$$111$$.firstColor && 0 < $barSpacing_chartItems_zeroBaseline$$1$$.length && ($barSpacing_chartItems_zeroBaseline$$1$$[0].markerDisplayed = "on", $barSpacing_chartItems_zeroBaseline$$1$$[0].color || ($barSpacing_chartItems_zeroBaseline$$1$$[0].color = $options$$111$$.firstColor));
  $options$$111$$.lastColor && 0 < $barSpacing_chartItems_zeroBaseline$$1$$.length && ($barSpacing_chartItems_zeroBaseline$$1$$[$barSpacing_chartItems_zeroBaseline$$1$$.length - 1].markerDisplayed = "on", $barSpacing_chartItems_zeroBaseline$$1$$[$barSpacing_chartItems_zeroBaseline$$1$$.length - 1].color || ($barSpacing_chartItems_zeroBaseline$$1$$[$barSpacing_chartItems_zeroBaseline$$1$$.length - 1].color = $options$$111$$.lastColor));
  $chartOptions$$1$$.series = [{items:$barSpacing_chartItems_zeroBaseline$$1$$, areaColor:$options$$111$$.areaColor}];
  $bFloatingBar$$ && $chartOptions$$1$$.series.splice(0, 0, {items:$axisGap_floatItems$$, color:"rgba(0, 0, 0, 0)"});
  $options$$111$$.referenceObjects && ($chartOptions$$1$$.yAxis.referenceObjects = $options$$111$$.referenceObjects);
  $chartOptions$$1$$.__spark = D.$JSCompiler_alias_TRUE$$;
  $barSpacing_chartItems_zeroBaseline$$1$$ = $options$$111$$.barSpacing;
  "auto" == $barSpacing_chartItems_zeroBaseline$$1$$ && ($barSpacing_chartItems_zeroBaseline$$1$$ = 1 < (0,D.$DvtAgent$getDevicePixelRatio$$)() ? "subpixel" : "pixel");
  $chartOptions$$1$$.__sparkBarSpacing = $barSpacing_chartItems_zeroBaseline$$1$$;
  $chartOptions$$1$$.type = $options$$111$$.type;
  $chartOptions$$1$$.animationOnDataChange = $options$$111$$.animationOnDataChange;
  $chartOptions$$1$$.animationOnDisplay = $options$$111$$.animationOnDisplay;
  $chartOptions$$1$$.emptyText = $options$$111$$.emptyText;
  $chartOptions$$1$$.styleDefaults.colors = [$options$$111$$.color];
  $chartOptions$$1$$.styleDefaults.animationDuration = $options$$111$$.animationDuration;
  $chartOptions$$1$$.styleDefaults.animationIndicators = "none";
  $chartOptions$$1$$.styleDefaults.lineWidth = $options$$111$$.lineWidth;
  $chartOptions$$1$$.styleDefaults.lineStyle = $options$$111$$.lineStyle;
  $chartOptions$$1$$.styleDefaults.lineType = $options$$111$$.lineType;
  $chartOptions$$1$$.styleDefaults.markerSize = $options$$111$$.markerSize;
  $chartOptions$$1$$.styleDefaults.markerShape = $options$$111$$.markerShape;
  $chartOptions$$1$$.styleDefaults.barGapRatio = $options$$111$$.barGapRatio;
  $chartOptions$$1$$.styleDefaults.seriesTooltipType = "none";
  $chartOptions$$1$$.styleDefaults.groupTooltipType = "none";
  $chartOptions$$1$$.styleDefaults.valueTooltipType = "none";
  $chartOptions$$1$$.xAxis.rendered = "off";
  $chartOptions$$1$$.yAxis.rendered = "off";
  $barSpacing_chartItems_zeroBaseline$$1$$ = "zero" == $options$$111$$.baselineScaling;
  $axisGap_floatItems$$ = 0.1 * ($highValue$$ - $lowValue$$);
  $chartOptions$$1$$.yAxis.min = $barSpacing_chartItems_zeroBaseline$$1$$ && 0 <= $lowValue$$ ? 0 : $lowValue$$ - $axisGap_floatItems$$;
  $chartOptions$$1$$.yAxis.max = $barSpacing_chartItems_zeroBaseline$$1$$ && 0 >= $highValue$$ ? 0 : $highValue$$ + $axisGap_floatItems$$;
  $bFloatingBar$$ && ($chartOptions$$1$$.type = "bar", $chartOptions$$1$$.stack = "on");
  $chartOptions$$1$$.styleDefaults.seriesEffect = "none" == $options$$111$$.visualEffects || !("area" == $options$$111$$.type || "lineWithArea" == $options$$111$$.type) ? "color" : "gradient";
  $chartOptions$$1$$.layout = {gapRatio:0};
  $chartOptions$$1$$.legend = {rendered:"off"};
  $chartOptions$$1$$.title = $chartOptions$$1$$.title ? $chartOptions$$1$$.title : {};
  $chartOptions$$1$$.title.style = "font-size: 12px; color: #404259;";
  return $chartOptions$$1$$
};
});