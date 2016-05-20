define(['./DvtToolkit'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtTimeUtils$$ = {$supportsTouch$:function $$DvtTimeUtils$$$$supportsTouch$$() {
  return(0,D.$DvtAgent$isTouchDevice$$)()
}};
D.$DvtObj$$.$createSubclass$(D.$DvtTimeUtils$$, D.$DvtObj$$, "DvtTimeUtils");
D.$DvtTimeUtils$$.$getDatePosition$ = function $$DvtTimeUtils$$$$getDatePosition$$($denominator$$1_startTime$$4$$, $endTime$$5$$, $number$$2_time$$5$$, $width$$112$$) {
  $number$$2_time$$5$$ = ($number$$2_time$$5$$ - $denominator$$1_startTime$$4$$) * $width$$112$$;
  $denominator$$1_startTime$$4$$ = $endTime$$5$$ - $denominator$$1_startTime$$4$$;
  return 0 == $number$$2_time$$5$$ || 0 == $denominator$$1_startTime$$4$$ ? 0 : $number$$2_time$$5$$ / $denominator$$1_startTime$$4$$
};
D.$DvtTimeUtils$$.$getPositionDate$ = function $$DvtTimeUtils$$$$getPositionDate$$($startTime$$5$$, $endTime$$6_number$$3$$, $pos$$44$$, $width$$113$$) {
  $endTime$$6_number$$3$$ = $pos$$44$$ * ($endTime$$6_number$$3$$ - $startTime$$5$$);
  return 0 == $endTime$$6_number$$3$$ || 0 == $width$$113$$ ? $startTime$$5$$ : $endTime$$6_number$$3$$ / $width$$113$$ + $startTime$$5$$
};
D.$DvtOverview$$ = function $$DvtOverview$$$($context$$316$$, $callback$$95$$, $callbackObj$$59$$) {
  this.Init($context$$316$$, $callback$$95$$, $callbackObj$$59$$)
};
(0,D.$goog$exportSymbol$$)("DvtOverview", D.$DvtOverview$$);
D.$DvtObj$$.$createSubclass$(D.$DvtOverview$$, D.$DvtContainer$$, "DvtOverview");
D.$DvtOverview$$.prototype.Init = function $$DvtOverview$$$$Init$($context$$317$$, $callback$$96$$, $callbackObj$$60$$) {
  D.$DvtOverview$$.$superclass$.Init.call(this, $context$$317$$);
  this.$_callback$ = $callback$$96$$;
  this.$_callbackObj$ = $callbackObj$$60$$;
  this.$_lastChildIndex$ = this.$isFlashEnvironment$() ? 7 : 6;
  if(this.$_callback$ != D.$JSCompiler_alias_NULL$$ || this.$_callbackObj$ != D.$JSCompiler_alias_NULL$$) {
    D.$DvtTimeUtils$$.$supportsTouch$() ? (this.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandleTouchStart$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHMOVE$, this.$HandleTouchMove$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHEND$, this.$HandleTouchEnd$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandleShapeClick$, D.$JSCompiler_alias_FALSE$$, this)) : (this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, 
    this.$HandleShapeMouseOver$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandleShapeMouseOut$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandleShapeClick$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, this.$HandleMouseDown$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$HandleMouseUp$, D.$JSCompiler_alias_FALSE$$, 
    this), this.$addEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, this.$HandleMouseMove$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtKeyboardEvent$KEYDOWN$$, this.$HandleKeyDown$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtKeyboardEvent$KEYUP$$, this.$HandleKeyUp$, D.$JSCompiler_alias_FALSE$$, this))
  }
  this.$_initPos$ = 0
};
D.$DvtOverview$$.prototype.$setViewportRange$ = function $$DvtOverview$$$$$setViewportRange$$($start$$33$$, $end$$21$$) {
  var $viewportStart$$ = this.$getDatePosition$($start$$33$$), $slidingWindow$$1_viewportEnd$$ = this.$getDatePosition$($end$$21$$);
  if(!($viewportStart$$ < this.$_leftMargin$ || $slidingWindow$$1_viewportEnd$$ > (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)(this))) {
    var $size$$32$$ = window.Math.max($slidingWindow$$1_viewportEnd$$ - $viewportStart$$, (0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)(this));
    0 < $size$$32$$ && (0 <= $viewportStart$$ && $slidingWindow$$1_viewportEnd$$ <= this.$Width$) && ($slidingWindow$$1_viewportEnd$$ = this.$getChildAt$(1), this.$isRTL$() ? (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, $slidingWindow$$1_viewportEnd$$, this.$Width$ - ($viewportStart$$ + $size$$32$$)) : (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, $slidingWindow$$1_viewportEnd$$, $viewportStart$$), (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)(this, $slidingWindow$$1_viewportEnd$$, 
    $size$$32$$), (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)(this))
  }
};
D.$JSCompiler_StaticMethods_isFeatureOff$$ = function $$JSCompiler_StaticMethods_isFeatureOff$$$($JSCompiler_StaticMethods_isFeatureOff$self$$) {
  return $JSCompiler_StaticMethods_isFeatureOff$self$$.$_featuresOff$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_FALSE$$ : -1 != $JSCompiler_StaticMethods_isFeatureOff$self$$.$_featuresOff$.indexOf("zoom")
};
D.$DvtOverview$$.prototype.$render$ = function $$DvtOverview$$$$$render$$($interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$, $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$, $bottomBar$$inline_6123_height$$100_timelineWidth$$inline_10664_window$$inline_6132$$) {
  if($interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$ == D.$JSCompiler_alias_NULL$$) {
    var $day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$ = this.$_start$, $end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$ = this.$_end$, $color$$inline_10656_elem$$inline_10651_leftHandleBackground$$inline_6084_rightBackground$$inline_6094_rightHandle$$inline_6120_slidingWindow$$2_start$$inline_6136$$ = 
    this.$getChildAt$(1), $end$$inline_6137_leftTopBar$$inline_6121_rangeEnd$$inline_10655_rangeWidth$$inline_10659_rightHandle$$inline_6091_rightHandleCmds$$inline_6083_slidingWindowPos$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $color$$inline_10656_elem$$inline_10651_leftHandleBackground$$inline_6084_rightBackground$$inline_6094_rightHandle$$inline_6120_slidingWindow$$2_start$$inline_6136$$);
    $color$$inline_10656_elem$$inline_10651_leftHandleBackground$$inline_6084_rightBackground$$inline_6094_rightHandle$$inline_6120_slidingWindow$$2_start$$inline_6136$$ != D.$JSCompiler_alias_NULL$$ && 0 != $end$$inline_6137_leftTopBar$$inline_6121_rangeEnd$$inline_10655_rangeWidth$$inline_10659_rightHandle$$inline_6091_rightHandleCmds$$inline_6083_slidingWindowPos$$ && (this.$_renderStart$ = D.$DvtTimeUtils$$.$getPositionDate$($day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$, 
    $end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$, $end$$inline_6137_leftTopBar$$inline_6121_rangeEnd$$inline_10655_rangeWidth$$inline_10659_rightHandle$$inline_6091_rightHandleCmds$$inline_6083_slidingWindowPos$$, this.$Width$));
    this.$removeChildren$()
  }
  $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$ != D.$JSCompiler_alias_NULL$$ && $bottomBar$$inline_6123_height$$100_timelineWidth$$inline_10664_window$$inline_6132$$ != D.$JSCompiler_alias_NULL$$ && (this.$Width$ = $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$, this.$Height$ = $bottomBar$$inline_6123_height$$100_timelineWidth$$inline_10664_window$$inline_6132$$);
  $interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$ && ($interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$ = this.$Parse$($interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$), 
  this.$_applyParsedProperties$($interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$));
  $interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$ = this.$_callback$ != D.$JSCompiler_alias_NULL$$ || this.$_callbackObj$ != D.$JSCompiler_alias_NULL$$;
  this.$createBackground$($actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$, $bottomBar$$inline_6123_height$$100_timelineWidth$$inline_10664_window$$inline_6132$$);
  if($interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$) {
    $end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$ = ($day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$ = this.$isVertical$()) ? new D.$DvtRect$$(this.$_context$, 
    0, 0, $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$, 0, "window") : new D.$DvtRect$$(this.$_context$, 0, 0, 0, $bottomBar$$inline_6123_height$$100_timelineWidth$$inline_10664_window$$inline_6132$$, "window");
    $end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$.$setSolidFill$(this.$_windowBackgroundColor$, this.$_windowBackgroundAlpha$);
    (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$);
    if(!(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)(this)) {
      var $handleSize$$inline_6078_right$$inline_6118_rightHandleBackground$$inline_6085_size$$inline_10657$$ = (0,D.$JSCompiler_StaticMethods_getHandleSize$$)(), $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$ = (0,D.$JSCompiler_StaticMethods_getHandleStart$$)();
      if($day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$) {
        var $handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$ = ($actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$ - 36) / 2, $leftHandle$$inline_6090_leftHandleCmds$$inline_6082$$ = window.DvtPathUtils.moveTo($handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$, 0) + window.DvtPathUtils.$quadTo$($handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$ + 
        3, 6, $handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$ + 8, 8) + window.DvtPathUtils.lineTo($handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$ + 28, 8) + window.DvtPathUtils.$quadTo$($handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$ + 33, 6, $handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$ + 36, 0);
        window.DvtPathUtils.closePath();
        $end$$inline_6137_leftTopBar$$inline_6121_rangeEnd$$inline_10655_rangeWidth$$inline_10659_rightHandle$$inline_6091_rightHandleCmds$$inline_6083_slidingWindowPos$$ = window.DvtPathUtils.moveTo($handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$, 0) + window.DvtPathUtils.$quadTo$($handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$ + 3, -6, $handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$ + 8, -8) + window.DvtPathUtils.lineTo($handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$ + 
        28, -8) + window.DvtPathUtils.$quadTo$($handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$ + 33, -6, $handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$ + 36, 0);
        window.DvtPathUtils.closePath();
        var $color$$inline_10656_elem$$inline_10651_leftHandleBackground$$inline_6084_rightBackground$$inline_6094_rightHandle$$inline_6120_slidingWindow$$2_start$$inline_6136$$ = new D.$DvtRect$$(this.$_context$, 0, 0, $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$, $handleSize$$inline_6078_right$$inline_6118_rightHandleBackground$$inline_6085_size$$inline_10657$$, "lhb"), $handleSize$$inline_6078_right$$inline_6118_rightHandleBackground$$inline_6085_size$$inline_10657$$ = 
        new D.$DvtRect$$(this.$_context$, 0, 0, $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$, $handleSize$$inline_6078_right$$inline_6118_rightHandleBackground$$inline_6085_size$$inline_10657$$, "rhb"), $cursor$$inline_6086_rangeStart$$inline_10654_rangeStart_pos$$inline_10658$$ = "row-resize";
        if(this.$_handleBackgroundImage$) {
          var $leftGrippy$$inline_6087$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$, 10), $handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$, 
          10)
        }else {
          $leftGrippy$$inline_6087$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, $handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$), $handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, $handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$)
        }
      }else {
        $handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$ = ($bottomBar$$inline_6123_height$$100_timelineWidth$$inline_10664_window$$inline_6132$$ - 36) / 2, $leftHandle$$inline_6090_leftHandleCmds$$inline_6082$$ = window.DvtPathUtils.moveTo(0, $handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$) + window.DvtPathUtils.$quadTo$(6, $handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$ + 3, 8, $handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$ + 
        8) + window.DvtPathUtils.lineTo(8, $handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$ + 28) + window.DvtPathUtils.$quadTo$(6, $handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$ + 33, 0, $handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$ + 36), window.DvtPathUtils.closePath(), $end$$inline_6137_leftTopBar$$inline_6121_rangeEnd$$inline_10655_rangeWidth$$inline_10659_rightHandle$$inline_6091_rightHandleCmds$$inline_6083_slidingWindowPos$$ = 
        window.DvtPathUtils.moveTo(0, $handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$) + window.DvtPathUtils.$quadTo$(-6, $handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$ + 3, -8, $handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$ + 8) + window.DvtPathUtils.lineTo(-8, $handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$ + 28) + window.DvtPathUtils.$quadTo$(-6, $handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$ + 
        33, 0, $handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$ + 36), window.DvtPathUtils.closePath(), $color$$inline_10656_elem$$inline_10651_leftHandleBackground$$inline_6084_rightBackground$$inline_6094_rightHandle$$inline_6120_slidingWindow$$2_start$$inline_6136$$ = new D.$DvtRect$$(this.$_context$, 0 - $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$, 
        0, $handleSize$$inline_6078_right$$inline_6118_rightHandleBackground$$inline_6085_size$$inline_10657$$, $bottomBar$$inline_6123_height$$100_timelineWidth$$inline_10664_window$$inline_6132$$, "lhb"), $handleSize$$inline_6078_right$$inline_6118_rightHandleBackground$$inline_6085_size$$inline_10657$$ = new D.$DvtRect$$(this.$_context$, $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$, 
        0, $handleSize$$inline_6078_right$$inline_6118_rightHandleBackground$$inline_6085_size$$inline_10657$$, $bottomBar$$inline_6123_height$$100_timelineWidth$$inline_10664_window$$inline_6132$$, "rhb"), $cursor$$inline_6086_rangeStart$$inline_10654_rangeStart_pos$$inline_10658$$ = "col-resize", this.$_handleBackgroundImage$ ? ($leftGrippy$$inline_6087$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, 10, $bottomBar$$inline_6123_height$$100_timelineWidth$$inline_10664_window$$inline_6132$$), 
        $handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, 10, $bottomBar$$inline_6123_height$$100_timelineWidth$$inline_10664_window$$inline_6132$$)) : ($leftGrippy$$inline_6087$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, $handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$), $handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, 
        $handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$))
      }
      $color$$inline_10656_elem$$inline_10651_leftHandleBackground$$inline_6084_rightBackground$$inline_6094_rightHandle$$inline_6120_slidingWindow$$2_start$$inline_6136$$.$setSolidFill$(this.$_windowBackgroundColor$, 0);
      $handleSize$$inline_6078_right$$inline_6118_rightHandleBackground$$inline_6085_size$$inline_10657$$.$setSolidFill$(this.$_windowBackgroundColor$, 0);
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($color$$inline_10656_elem$$inline_10651_leftHandleBackground$$inline_6084_rightBackground$$inline_6094_rightHandle$$inline_6120_slidingWindow$$2_start$$inline_6136$$);
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($handleSize$$inline_6078_right$$inline_6118_rightHandleBackground$$inline_6085_size$$inline_10657$$);
      $leftHandle$$inline_6090_leftHandleCmds$$inline_6082$$ = new D.$DvtPath$$(this.$_context$, $leftHandle$$inline_6090_leftHandleCmds$$inline_6082$$, "lh");
      $end$$inline_6137_leftTopBar$$inline_6121_rangeEnd$$inline_10655_rangeWidth$$inline_10659_rightHandle$$inline_6091_rightHandleCmds$$inline_6083_slidingWindowPos$$ = new D.$DvtPath$$(this.$_context$, $end$$inline_6137_leftTopBar$$inline_6121_rangeEnd$$inline_10655_rangeWidth$$inline_10659_rightHandle$$inline_6091_rightHandleCmds$$inline_6083_slidingWindowPos$$, "rh");
      $leftHandle$$inline_6090_leftHandleCmds$$inline_6082$$.$setSolidFill$(this.$_handleFillColor$);
      $leftHandle$$inline_6090_leftHandleCmds$$inline_6082$$.$setSolidStroke$(this.$_handleFillColor$);
      $end$$inline_6137_leftTopBar$$inline_6121_rangeEnd$$inline_10655_rangeWidth$$inline_10659_rightHandle$$inline_6091_rightHandleCmds$$inline_6083_slidingWindowPos$$.$setSolidFill$(this.$_handleFillColor$);
      $end$$inline_6137_leftTopBar$$inline_6121_rangeEnd$$inline_10655_rangeWidth$$inline_10659_rightHandle$$inline_6091_rightHandleCmds$$inline_6083_slidingWindowPos$$.$setSolidStroke$(this.$_handleFillColor$);
      this.$_windowBackgroundColor$ == this.$_handleFillColor$ && ((0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($leftHandle$$inline_6090_leftHandleCmds$$inline_6082$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$inline_6137_leftTopBar$$inline_6121_rangeEnd$$inline_10655_rangeWidth$$inline_10659_rightHandle$$inline_6091_rightHandleCmds$$inline_6083_slidingWindowPos$$));
      $color$$inline_10656_elem$$inline_10651_leftHandleBackground$$inline_6084_rightBackground$$inline_6094_rightHandle$$inline_6120_slidingWindow$$2_start$$inline_6136$$.setCursor($cursor$$inline_6086_rangeStart$$inline_10654_rangeStart_pos$$inline_10658$$);
      $handleSize$$inline_6078_right$$inline_6118_rightHandleBackground$$inline_6085_size$$inline_10657$$.setCursor($cursor$$inline_6086_rangeStart$$inline_10654_rangeStart_pos$$inline_10658$$);
      $leftHandle$$inline_6090_leftHandleCmds$$inline_6082$$.setCursor($cursor$$inline_6086_rangeStart$$inline_10654_rangeStart_pos$$inline_10658$$);
      $end$$inline_6137_leftTopBar$$inline_6121_rangeEnd$$inline_10655_rangeWidth$$inline_10659_rightHandle$$inline_6091_rightHandleCmds$$inline_6083_slidingWindowPos$$.setCursor($cursor$$inline_6086_rangeStart$$inline_10654_rangeStart_pos$$inline_10658$$);
      $leftGrippy$$inline_6087$$.setCursor($cursor$$inline_6086_rangeStart$$inline_10654_rangeStart_pos$$inline_10658$$);
      $handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$.setCursor($cursor$$inline_6086_rangeStart$$inline_10654_rangeStart_pos$$inline_10658$$);
      $end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$.$addChild$($color$$inline_10656_elem$$inline_10651_leftHandleBackground$$inline_6084_rightBackground$$inline_6094_rightHandle$$inline_6120_slidingWindow$$2_start$$inline_6136$$);
      $end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$.$addChild$($leftHandle$$inline_6090_leftHandleCmds$$inline_6082$$);
      $end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$.$addChild$($leftGrippy$$inline_6087$$);
      $end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$.$addChild$($handleSize$$inline_6078_right$$inline_6118_rightHandleBackground$$inline_6085_size$$inline_10657$$);
      $end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$.$addChild$($end$$inline_6137_leftTopBar$$inline_6121_rangeEnd$$inline_10655_rangeWidth$$inline_10659_rightHandle$$inline_6091_rightHandleCmds$$inline_6083_slidingWindowPos$$);
      $end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$.$addChild$($handleX$$inline_6081_handleY$$inline_6089_rightGrippy$$inline_6088$$)
    }
    $end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$.setCursor("move");
    this.$addChild$($end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$);
    $end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$ = $day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$ ? new D.$DvtLine$$(this.$_context$, $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$ - 
    this.$getTimeAxisWidth$(), 0, $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$ - this.$getTimeAxisWidth$(), $bottomBar$$inline_6123_height$$100_timelineWidth$$inline_10664_window$$inline_6132$$, "tab") : "above" == this.$_overviewPosition$ ? new D.$DvtLine$$(this.$_context$, 0, this.$getTimeAxisHeight$(), $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$, 
    this.$getTimeAxisHeight$(), "tab") : new D.$DvtLine$$(this.$_context$, 0, $bottomBar$$inline_6123_height$$100_timelineWidth$$inline_10664_window$$inline_6132$$ - this.$getTimeAxisHeight$(), $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$, $bottomBar$$inline_6123_height$$100_timelineWidth$$inline_10664_window$$inline_6132$$ - this.$getTimeAxisHeight$(), "tab");
    $end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$.$setSolidStroke$(this.$_timeAxisBarColor$, this.$_timeAxisBarOpacity$);
    (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$);
    this.$addChild$($end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$);
    this.$isLeftAndRightFilterRendered$() && ($day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$ ? ($end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$ = 
    new D.$DvtRect$$(this.$_context$, 0, 0, $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$, 0, "lbg"), $color$$inline_10656_elem$$inline_10651_leftHandleBackground$$inline_6084_rightBackground$$inline_6094_rightHandle$$inline_6120_slidingWindow$$2_start$$inline_6136$$ = new D.$DvtRect$$(this.$_context$, 0, 0, $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$, 
    0, "rbg")) : ($end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$ = new D.$DvtRect$$(this.$_context$, 0, 0, 0, $bottomBar$$inline_6123_height$$100_timelineWidth$$inline_10664_window$$inline_6132$$, "lbg"), $color$$inline_10656_elem$$inline_10651_leftHandleBackground$$inline_6084_rightBackground$$inline_6094_rightHandle$$inline_6120_slidingWindow$$2_start$$inline_6136$$ = 
    new D.$DvtRect$$(this.$_context$, 0, 0, 0, $bottomBar$$inline_6123_height$$100_timelineWidth$$inline_10664_window$$inline_6132$$, "rbg")), $end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$.$setSolidFill$(this.$_leftFilterPanelColor$, this.$_leftFilterPanelAlpha$), this.$addChild$($end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$), 
    $color$$inline_10656_elem$$inline_10651_leftHandleBackground$$inline_6084_rightBackground$$inline_6094_rightHandle$$inline_6120_slidingWindow$$2_start$$inline_6136$$.$setSolidFill$(this.$_rightFilterPanelColor$, this.$_rightFilterPanelAlpha$), this.$addChild$($color$$inline_10656_elem$$inline_10651_leftHandleBackground$$inline_6084_rightBackground$$inline_6094_rightHandle$$inline_6120_slidingWindow$$2_start$$inline_6136$$), D.$DvtTimeUtils$$.$supportsTouch$() && $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$ != 
    D.$JSCompiler_alias_VOID$$ && ((0,D.$JSCompiler_StaticMethods_getHandleStart$$)(), $day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$ ? ($day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$ = 
    new D.$DvtRect$$(this.$_context$, 0, 0, $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$, $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$, "lbgrh"), $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$ = 
    new D.$DvtRect$$(this.$_context$, 0, 0, $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$, $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$, "rbgrh")) : ($day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$ = 
    new D.$DvtRect$$(this.$_context$, 0, 0, $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$, $bottomBar$$inline_6123_height$$100_timelineWidth$$inline_10664_window$$inline_6132$$, "lbgrh"), $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$ = 
    new D.$DvtRect$$(this.$_context$, 0, 0, $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$, $bottomBar$$inline_6123_height$$100_timelineWidth$$inline_10664_window$$inline_6132$$, "rbgrh")), $day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$.$setSolidFill$(this.$_leftFilterPanelColor$, 
    0), this.$addChild$($day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$), $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$.$setSolidFill$(this.$_rightFilterPanelColor$, 
    0), this.$addChild$($actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$)))
  }
  this.$updateTimeAxis$($actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$, $bottomBar$$inline_6123_height$$100_timelineWidth$$inline_10664_window$$inline_6132$$);
  if(this.$_formattedTimeRanges$ != D.$JSCompiler_alias_NULL$$) {
    for($actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$ = 0;$actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$ < this.$_formattedTimeRanges$.length;$actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$++) {
      $color$$inline_10656_elem$$inline_10651_leftHandleBackground$$inline_6084_rightBackground$$inline_6094_rightHandle$$inline_6120_slidingWindow$$2_start$$inline_6136$$ = this.$_formattedTimeRanges$[$actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$], $day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$ = 
      $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$, $end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$ = $bottomBar$$inline_6123_height$$100_timelineWidth$$inline_10664_window$$inline_6132$$, $cursor$$inline_6086_rangeStart$$inline_10654_rangeStart_pos$$inline_10658$$ = 
      (0,window.parseInt)($color$$inline_10656_elem$$inline_10651_leftHandleBackground$$inline_6084_rightBackground$$inline_6094_rightHandle$$inline_6120_slidingWindow$$2_start$$inline_6136$$.$getAttr$("rs"), 10), $end$$inline_6137_leftTopBar$$inline_6121_rangeEnd$$inline_10655_rangeWidth$$inline_10659_rightHandle$$inline_6091_rightHandleCmds$$inline_6083_slidingWindowPos$$ = (0,window.parseInt)($color$$inline_10656_elem$$inline_10651_leftHandleBackground$$inline_6084_rightBackground$$inline_6094_rightHandle$$inline_6120_slidingWindow$$2_start$$inline_6136$$.$getAttr$("re"), 
      10), $color$$inline_10656_elem$$inline_10651_leftHandleBackground$$inline_6084_rightBackground$$inline_6094_rightHandle$$inline_6120_slidingWindow$$2_start$$inline_6136$$ = $color$$inline_10656_elem$$inline_10651_leftHandleBackground$$inline_6084_rightBackground$$inline_6094_rightHandle$$inline_6120_slidingWindow$$2_start$$inline_6136$$.$getAttr$("c"), $cursor$$inline_6086_rangeStart$$inline_10654_rangeStart_pos$$inline_10658$$ != D.$JSCompiler_alias_NULL$$ && $end$$inline_6137_leftTopBar$$inline_6121_rangeEnd$$inline_10655_rangeWidth$$inline_10659_rightHandle$$inline_6091_rightHandleCmds$$inline_6083_slidingWindowPos$$ != 
      D.$JSCompiler_alias_NULL$$ && ($handleSize$$inline_6078_right$$inline_6118_rightHandleBackground$$inline_6085_size$$inline_10657$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this), $cursor$$inline_6086_rangeStart$$inline_10654_rangeStart_pos$$inline_10658$$ = this.$getDatePosition$($cursor$$inline_6086_rangeStart$$inline_10654_rangeStart_pos$$inline_10658$$), $end$$inline_6137_leftTopBar$$inline_6121_rangeEnd$$inline_10655_rangeWidth$$inline_10659_rightHandle$$inline_6091_rightHandleCmds$$inline_6083_slidingWindowPos$$ = 
      this.$getDatePosition$($end$$inline_6137_leftTopBar$$inline_6121_rangeEnd$$inline_10655_rangeWidth$$inline_10659_rightHandle$$inline_6091_rightHandleCmds$$inline_6083_slidingWindowPos$$) - $cursor$$inline_6086_rangeStart$$inline_10654_rangeStart_pos$$inline_10658$$, this.$isRTL$() && ($cursor$$inline_6086_rangeStart$$inline_10654_rangeStart_pos$$inline_10658$$ = $handleSize$$inline_6078_right$$inline_6118_rightHandleBackground$$inline_6085_size$$inline_10657$$ - $cursor$$inline_6086_rangeStart$$inline_10654_rangeStart_pos$$inline_10658$$ - 
      $end$$inline_6137_leftTopBar$$inline_6121_rangeEnd$$inline_10655_rangeWidth$$inline_10659_rightHandle$$inline_6091_rightHandleCmds$$inline_6083_slidingWindowPos$$), $day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$ = this.$isVertical$() ? new D.$DvtRect$$(this.$_context$, 0, $cursor$$inline_6086_rangeStart$$inline_10654_rangeStart_pos$$inline_10658$$, 
      $day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$ - this.$getTimeAxisWidth$(), $end$$inline_6137_leftTopBar$$inline_6121_rangeEnd$$inline_10655_rangeWidth$$inline_10659_rightHandle$$inline_6091_rightHandleCmds$$inline_6083_slidingWindowPos$$, "ftr") : new D.$DvtRect$$(this.$_context$, $cursor$$inline_6086_rangeStart$$inline_10654_rangeStart_pos$$inline_10658$$, 
      "above" == this.$_overviewPosition$ ? this.$getTimeAxisHeight$() : 0, $end$$inline_6137_leftTopBar$$inline_6121_rangeEnd$$inline_10655_rangeWidth$$inline_10659_rightHandle$$inline_6091_rightHandleCmds$$inline_6083_slidingWindowPos$$, $end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$ - this.$getTimeAxisHeight$(), "ftr"), $color$$inline_10656_elem$$inline_10651_leftHandleBackground$$inline_6084_rightBackground$$inline_6094_rightHandle$$inline_6120_slidingWindow$$2_start$$inline_6136$$ != 
      D.$JSCompiler_alias_NULL$$ && $day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$.$setSolidFill$($color$$inline_10656_elem$$inline_10651_leftHandleBackground$$inline_6084_rightBackground$$inline_6094_rightHandle$$inline_6120_slidingWindow$$2_start$$inline_6136$$, 0.4), $day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$.setCursor("move"), 
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$), this.$addChild$($day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$))
    }
  }
  this.$_currentTime$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)(this.$_currentTime$) || ($actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$ = this.$getDatePosition$(this.$_currentTime$), this.$isVertical$() ? $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$ = 
  new D.$DvtLine$$(this.$_context$, 0, $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$, $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$, $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$, 
  "ocd") : (this.$isRTL$() && ($actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$ = $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$ - $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$), 
  $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$ = new D.$DvtLine$$(this.$_context$, $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$, 
  0, $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$, $bottomBar$$inline_6123_height$$100_timelineWidth$$inline_10664_window$$inline_6132$$, "ocd")), $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$.$setSolidStroke$(this.$_currentTimeIndicatorColor$), 
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$), this.$addChild$($actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$));
  this.$parseDataXML$($actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$, $bottomBar$$inline_6123_height$$100_timelineWidth$$inline_10664_window$$inline_6132$$);
  $interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$ && ($end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$ = this.$getChildAt$(1), this.$isVertical$() ? ($interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$ = 
  $end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$.$getY$(), $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$ = $end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$.$getY$() + 
  $end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$.getHeight() - 1, this.$isFlashEnvironment$() || (0,D.$DvtAgent$isPlatformWebkit$$)() ? ($day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$ = 
  0, $handleSize$$inline_6078_right$$inline_6118_rightHandleBackground$$inline_6085_size$$inline_10657$$ = $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$ - 1) : ($day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$ = 1, $handleSize$$inline_6078_right$$inline_6118_rightHandleBackground$$inline_6085_size$$inline_10657$$ = 
  $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$), $end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$ = new D.$DvtLine$$(this.$_context$, 0, $interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$, 
  $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$, $interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$, "lh"), $color$$inline_10656_elem$$inline_10651_leftHandleBackground$$inline_6084_rightBackground$$inline_6094_rightHandle$$inline_6120_slidingWindow$$2_start$$inline_6136$$ = new D.$DvtLine$$(this.$_context$, 
  0, $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$, $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$, $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$, 
  "rh"), $end$$inline_6137_leftTopBar$$inline_6121_rangeEnd$$inline_10655_rangeWidth$$inline_10659_rightHandle$$inline_6091_rightHandleCmds$$inline_6083_slidingWindowPos$$ = new D.$DvtLine$$(this.$_context$, $day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$, 0, $day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$, 
  $interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$, "ltb"), $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$ = new D.$DvtLine$$(this.$_context$, $day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$, 
  $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$, $day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$, $bottomBar$$inline_6123_height$$100_timelineWidth$$inline_10664_window$$inline_6132$$, 
  "rtb"), $bottomBar$$inline_6123_height$$100_timelineWidth$$inline_10664_window$$inline_6132$$ = new D.$DvtLine$$(this.$_context$, $handleSize$$inline_6078_right$$inline_6118_rightHandleBackground$$inline_6085_size$$inline_10657$$, $interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$, $handleSize$$inline_6078_right$$inline_6118_rightHandleBackground$$inline_6085_size$$inline_10657$$, 
  $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$, "bb"), $interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$ = new D.$DvtLine$$(this.$_context$, $day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$, 
  $interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$, $day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$, $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$, 
  "tb")) : ($interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$ = 1, this.$isFlashEnvironment$() && ($interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$ = 0), $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$ = 
  $bottomBar$$inline_6123_height$$100_timelineWidth$$inline_10664_window$$inline_6132$$ - 1, $day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$ = $end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$.$getX$(), 
  $handleSize$$inline_6078_right$$inline_6118_rightHandleBackground$$inline_6085_size$$inline_10657$$ = $end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$.$getX$() + $end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$.getWidth() - 
  1, $end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$ = new D.$DvtLine$$(this.$_context$, $day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$, $interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$, 
  $day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$, $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$, "lh"), $color$$inline_10656_elem$$inline_10651_leftHandleBackground$$inline_6084_rightBackground$$inline_6094_rightHandle$$inline_6120_slidingWindow$$2_start$$inline_6136$$ = 
  new D.$DvtLine$$(this.$_context$, $handleSize$$inline_6078_right$$inline_6118_rightHandleBackground$$inline_6085_size$$inline_10657$$, $interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$, $handleSize$$inline_6078_right$$inline_6118_rightHandleBackground$$inline_6085_size$$inline_10657$$, $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$, 
  "rh"), $end$$inline_6137_leftTopBar$$inline_6121_rangeEnd$$inline_10655_rangeWidth$$inline_10659_rightHandle$$inline_6091_rightHandleCmds$$inline_6083_slidingWindowPos$$ = new D.$DvtLine$$(this.$_context$, 0, window.Math.max(0, $interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$ - 1), $day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$ + 
  1, window.Math.max(0, $interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$ - 1), "ltb"), $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$ = new D.$DvtLine$$(this.$_context$, $handleSize$$inline_6078_right$$inline_6118_rightHandleBackground$$inline_6085_size$$inline_10657$$ - 1, window.Math.max(0, 
  $interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$ - 1), $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$, window.Math.max(0, $interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$ - 
  1), "rtb"), $bottomBar$$inline_6123_height$$100_timelineWidth$$inline_10664_window$$inline_6132$$ = new D.$DvtLine$$(this.$_context$, $day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$, $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$, 
  $handleSize$$inline_6078_right$$inline_6118_rightHandleBackground$$inline_6085_size$$inline_10657$$, $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$, "bb"), $interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$ = 
  new D.$DvtLine$$(this.$_context$, $day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$, $interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$, $handleSize$$inline_6078_right$$inline_6118_rightHandleBackground$$inline_6085_size$$inline_10657$$, 
  $interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$, "tb")), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($color$$inline_10656_elem$$inline_10651_leftHandleBackground$$inline_6084_rightBackground$$inline_6094_rightHandle$$inline_6120_slidingWindow$$2_start$$inline_6136$$), 
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$inline_6137_leftTopBar$$inline_6121_rangeEnd$$inline_10655_rangeWidth$$inline_10659_rightHandle$$inline_6091_rightHandleCmds$$inline_6083_slidingWindowPos$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($bottomBar$$inline_6123_height$$100_timelineWidth$$inline_10664_window$$inline_6132$$), 
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$), "none" != this.$_windowBorderLeftStyle$ && $end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$.$setSolidStroke$(this.$_windowBorderLeftColor$), 
  this.$addChild$($end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$), "none" != this.$_windowBorderRightStyle$ && $color$$inline_10656_elem$$inline_10651_leftHandleBackground$$inline_6084_rightBackground$$inline_6094_rightHandle$$inline_6120_slidingWindow$$2_start$$inline_6136$$.$setSolidStroke$(this.$_windowBorderRightColor$), this.$addChild$($color$$inline_10656_elem$$inline_10651_leftHandleBackground$$inline_6084_rightBackground$$inline_6094_rightHandle$$inline_6120_slidingWindow$$2_start$$inline_6136$$), 
  "none" != this.$_borderTopStyle$ && this.$_borderTopColor$ && ($end$$inline_6137_leftTopBar$$inline_6121_rangeEnd$$inline_10655_rangeWidth$$inline_10659_rightHandle$$inline_6091_rightHandleCmds$$inline_6083_slidingWindowPos$$.$setSolidStroke$(this.$_borderTopColor$), $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$.$setSolidStroke$(this.$_borderTopColor$)), this.$addChild$($end$$inline_6137_leftTopBar$$inline_6121_rangeEnd$$inline_10655_rangeWidth$$inline_10659_rightHandle$$inline_6091_rightHandleCmds$$inline_6083_slidingWindowPos$$), 
  this.$addChild$($actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$), "none" != this.$_windowBorderBottomStyle$ && $bottomBar$$inline_6123_height$$100_timelineWidth$$inline_10664_window$$inline_6132$$.$setSolidStroke$(this.$_windowBorderBottomColor$), this.$addChild$($bottomBar$$inline_6123_height$$100_timelineWidth$$inline_10664_window$$inline_6132$$), "none" != this.$_windowBorderTopStyle$ && $interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$.$setSolidStroke$(this.$_windowBorderTopColor$), 
  this.$addChild$($interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$), this.$isFlashEnvironment$() && ($actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$ = this.$isVertical$() ? window.DvtPathUtils.moveTo(6, 0) + window.DvtPathUtils.lineTo(0, 5) + window.DvtPathUtils.lineTo(5, 5) + window.DvtPathUtils.lineTo(5, 
  17) + window.DvtPathUtils.lineTo(0, 17) + window.DvtPathUtils.lineTo(6, 22) + window.DvtPathUtils.lineTo(12, 17) + window.DvtPathUtils.lineTo(7, 17) + window.DvtPathUtils.lineTo(7, 5) + window.DvtPathUtils.lineTo(12, 5) + window.DvtPathUtils.closePath() : window.DvtPathUtils.moveTo(5, 0) + window.DvtPathUtils.lineTo(0, 6) + window.DvtPathUtils.lineTo(5, 12) + window.DvtPathUtils.lineTo(5, 7) + window.DvtPathUtils.lineTo(17, 7) + window.DvtPathUtils.lineTo(17, 12) + window.DvtPathUtils.lineTo(22, 
  6) + window.DvtPathUtils.lineTo(17, 0) + window.DvtPathUtils.lineTo(17, 4) + window.DvtPathUtils.lineTo(5, 4) + window.DvtPathUtils.lineTo(5, 0) + window.DvtPathUtils.closePath(), $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$ = new D.$DvtPath$$(this.$_context$, $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$, 
  "arr"), $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$.$setSolidFill$("#ffffff"), $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$.$setSolidStroke$("#000000"), $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$.$setVisible$(D.$JSCompiler_alias_FALSE$$), 
  this.$addChild$($actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$), this.$_resizeArrow$ = $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$), $interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$ = 
  this.$isVertical$(), $bottomBar$$inline_6123_height$$100_timelineWidth$$inline_10664_window$$inline_6132$$ = this.$getChildAt$(1), $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this), $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$ = 
  $interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$ ? this.$Height$ : this.$Width$, $end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$ = this.$_width$, $color$$inline_10656_elem$$inline_10651_leftHandleBackground$$inline_6084_rightBackground$$inline_6094_rightHandle$$inline_6120_slidingWindow$$2_start$$inline_6136$$ = 
  this.$_start$, $end$$inline_6137_leftTopBar$$inline_6121_rangeEnd$$inline_10655_rangeWidth$$inline_10659_rightHandle$$inline_6091_rightHandleCmds$$inline_6083_slidingWindowPos$$ = this.$_end$, $interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$ = this.$_renderStart$, $day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$ = 
  D.$DvtTimeUtils$$.$getPositionDate$($color$$inline_10656_elem$$inline_10651_leftHandleBackground$$inline_6084_rightBackground$$inline_6094_rightHandle$$inline_6120_slidingWindow$$2_start$$inline_6136$$, $end$$inline_6137_leftTopBar$$inline_6121_rangeEnd$$inline_10655_rangeWidth$$inline_10659_rightHandle$$inline_6091_rightHandleCmds$$inline_6083_slidingWindowPos$$, 0, $end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$), 
  $end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$ = D.$DvtTimeUtils$$.$getPositionDate$($color$$inline_10656_elem$$inline_10651_leftHandleBackground$$inline_6084_rightBackground$$inline_6094_rightHandle$$inline_6120_slidingWindow$$2_start$$inline_6136$$, $end$$inline_6137_leftTopBar$$inline_6121_rangeEnd$$inline_10655_rangeWidth$$inline_10659_rightHandle$$inline_6091_rightHandleCmds$$inline_6083_slidingWindowPos$$, 
  $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$, $end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$), $day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$ = 
  this.$getDatePosition$($day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$), $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$ = window.Math.min($actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$, 
  this.$getDatePosition$($end$$22_height$$inline_10653_leftBackground$$inline_6093_leftHandle$$inline_6119_rangeEndTime$$inline_6140_slidingWindow$$inline_6077_slidingWindow$$inline_6114_timeAxisTopBar$$inline_6092_timelineWidth$$inline_6135$$)), $interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$ = this.$getDatePosition$($interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$), 
  $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$ -= $day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$, this.$isRTL$() ? (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, 
  $bottomBar$$inline_6123_height$$100_timelineWidth$$inline_10664_window$$inline_6132$$, $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$ - $interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$ - $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$) : 
  (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, $bottomBar$$inline_6123_height$$100_timelineWidth$$inline_10664_window$$inline_6132$$, $interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$), (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)(this, $bottomBar$$inline_6123_height$$100_timelineWidth$$inline_10664_window$$inline_6132$$, $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$), 
  (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)(this), $bottomBar$$inline_6123_height$$100_timelineWidth$$inline_10664_window$$inline_6132$$ = this.$_width$, $interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$ = this.$_start$, $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$ = 
  this.$_end$, $day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$ = D.$DvtTimeUtils$$.$getPositionDate$($interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$, $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$, 
  1, $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$), $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$ = D.$DvtTimeUtils$$.$getPositionDate$($interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$, 
  $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$, 2, $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$), $day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$ = 
  D.$DvtTimeUtils$$.$getDatePosition$($interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$, $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$, $day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$, 
  $bottomBar$$inline_6123_height$$100_timelineWidth$$inline_10664_window$$inline_6132$$), this.$_increment$ = D.$DvtTimeUtils$$.$getDatePosition$($interactive$$1_obj$$178_props$$22_renderStart$$inline_6138_renderStartPos$$inline_6143_start$$inline_10665_top$$inline_6115_topBar$$inline_6124_vertical$$inline_6131$$, $actualSize$$inline_6134_bottom$$inline_6116_end$$inline_10666_handleStart$$inline_6079_i$$inline_6103_line$$inline_6109_newWidth$$inline_6144_rangeEndPos$$inline_6142_rightBackgroundResizeHandle$$inline_6096_time_pos$$inline_6108$$, 
  $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$, $bottomBar$$inline_6123_height$$100_timelineWidth$$inline_10664_window$$inline_6132$$) - $day1$$inline_10667_displayable$$inline_10660_left$$inline_6117_leftBackgroundResizeHandle$$inline_6095_pos1$$inline_10669_rangeStartPos$$inline_6141_rangeStartTime$$inline_6139_start$$34_vertical$$inline_6076_width$$inline_10652$$);
  this.$_initialFocusTime$ != D.$JSCompiler_alias_NULL$$ && (this.$_initPos$ = window.Math.max(0, D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, this.$_initialFocusTime$, this.$_width$)));
  0 < this.$_initPos$ && ($actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$ = this.$_initPos$ / this.$_increment$, this.$isRTL$() && ($actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$ = 0 - $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$), 
  (0,D.$JSCompiler_StaticMethods_animateSlidingWindow$$)(this, $actualAmount$$inline_6148_arrow$$inline_6128_arrowCmds$$inline_6127_day2$$inline_10668_rightTopBar$$inline_6122_size$$inline_6133_width$$114$$))
};
D.$DvtOverview$$.prototype.render = D.$DvtOverview$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtOverview$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getParser$ = function $$JSCompiler_prototypeAlias$$$$getParser$$() {
  return new D.$DvtOverviewParser$$(this)
};
D.$JSCompiler_prototypeAlias$$.$Parse$ = function $$JSCompiler_prototypeAlias$$$$Parse$$($obj$$180$$) {
  return this.$getParser$($obj$$180$$).parse($obj$$180$$)
};
D.$JSCompiler_prototypeAlias$$.$_applyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$_applyParsedProperties$$($props$$23$$) {
  this.$_start$ = $props$$23$$.start;
  this.$_end$ = $props$$23$$.end;
  this.$_width$ = $props$$23$$.width;
  this.$_renderStart$ = $props$$23$$.$renderStart$;
  this.$_currentTime$ = $props$$23$$.currentTime;
  this.$_initialFocusTime$ = $props$$23$$.$initialFocusTime$;
  this.$_animationOnClick$ = $props$$23$$.$animationOnClick$;
  this.$_leftMargin$ = window.Math.max(0, $props$$23$$.$leftMargin$);
  this.$_rightMargin$ = window.Math.max(0, $props$$23$$.$rightMargin$);
  (0,window.isNaN)(this.$_leftMargin$) && (this.$_leftMargin$ = 0);
  (0,window.isNaN)(this.$_rightMargin$) && (this.$_rightMargin$ = 0);
  this.$_orientation$ = $props$$23$$.orientation;
  this.$_overviewPosition$ = $props$$23$$.$overviewPosition$;
  this.$_isRtl$ = $props$$23$$.$isRtl$;
  $props$$23$$.$featuresOff$ != D.$JSCompiler_alias_NULL$$ && (this.$_featuresOff$ = $props$$23$$.$featuresOff$.split(" "));
  $props$$23$$.$minimumWindowSize$ != D.$JSCompiler_alias_NULL$$ && 0 < $props$$23$$.$minimumWindowSize$ && (this.$_minimumWindowSize$ = $props$$23$$.$minimumWindowSize$);
  this.$_borderStyles$ = $props$$23$$.$borderStyles$;
  this.$_timeAxisInfo$ = $props$$23$$.$timeAxisInfo$;
  $props$$23$$.$timeAxisInfo$ != D.$JSCompiler_alias_NULL$$ && (this.$_ticks$ = this.$_timeAxisInfo$.$ticks$);
  this.$_formattedTimeRanges$ = $props$$23$$.$formattedTimeRanges$;
  this.$_borderTopStyle$ = $props$$23$$.borderTopStyle;
  this.$_borderTopColor$ = $props$$23$$.borderTopColor;
  this.$_windowBackgroundColor$ = $props$$23$$.$windowBackgroundColor$;
  this.$_windowBackgroundAlpha$ = $props$$23$$.$windowBackgroundAlpha$;
  this.$_windowBorderTopStyle$ = $props$$23$$.$windowBorderTopStyle$;
  this.$_windowBorderRightStyle$ = $props$$23$$.$windowBorderRightStyle$;
  this.$_windowBorderBottomStyle$ = $props$$23$$.$windowBorderBottomStyle$;
  this.$_windowBorderLeftStyle$ = $props$$23$$.$windowBorderLeftStyle$;
  this.$_windowBorderTopColor$ = $props$$23$$.$windowBorderTopColor$;
  this.$_windowBorderRightColor$ = $props$$23$$.$windowBorderRightColor$;
  this.$_windowBorderBottomColor$ = $props$$23$$.$windowBorderBottomColor$;
  this.$_windowBorderLeftColor$ = $props$$23$$.$windowBorderLeftColor$;
  this.$_handleTextureColor$ = $props$$23$$.$handleTextureColor$;
  this.$_handleFillColor$ = $props$$23$$.$handleFillColor$;
  this.$_handleBackgroundImage$ = $props$$23$$.$handleBackgroundImage$;
  this.$_handleWidth$ = $props$$23$$.$handleWidth$;
  this.$_handleHeight$ = $props$$23$$.$handleHeight$;
  this.$_overviewBackgroundColor$ = $props$$23$$.$overviewBackgroundColor$;
  this.$_currentTimeIndicatorColor$ = $props$$23$$.$currentTimeIndicatorColor$;
  this.$_timeIndicatorColor$ = $props$$23$$.$timeIndicatorColor$;
  this.$_timeAxisBarColor$ = $props$$23$$.$timeAxisBarColor$;
  this.$_timeAxisBarOpacity$ = $props$$23$$.$timeAxisBarOpacity$;
  this.$_leftFilterPanelColor$ = $props$$23$$.$leftFilterPanelColor$;
  this.$_leftFilterPanelAlpha$ = $props$$23$$.$leftFilterPanelAlpha$;
  this.$_rightFilterPanelColor$ = $props$$23$$.$rightFilterPanelColor$;
  this.$_rightFilterPanelAlpha$ = $props$$23$$.$rightFilterPanelAlpha$
};
D.$JSCompiler_prototypeAlias$$.$getDatePosition$ = function $$JSCompiler_prototypeAlias$$$$getDatePosition$$($date$$17$$) {
  return window.Math.max(0, D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $date$$17$$, (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this))) + this.$_leftMargin$
};
D.$JSCompiler_prototypeAlias$$.$getPositionDate$ = function $$JSCompiler_prototypeAlias$$$$getPositionDate$$($pos$$46$$) {
  return D.$DvtTimeUtils$$.$getPositionDate$(this.$_start$, this.$_end$, window.Math.max(0, $pos$$46$$ - this.$_leftMargin$), (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this))
};
D.$JSCompiler_prototypeAlias$$.$isRTL$ = function $$JSCompiler_prototypeAlias$$$$isRTL$$() {
  return!this.$isVertical$() && "true" == this.$_isRtl$
};
D.$JSCompiler_prototypeAlias$$.$isVertical$ = function $$JSCompiler_prototypeAlias$$$$isVertical$$() {
  return"vertical" == this.$_orientation$
};
D.$JSCompiler_StaticMethods_getOverviewSize$$ = function $$JSCompiler_StaticMethods_getOverviewSize$$$($JSCompiler_StaticMethods_getOverviewSize$self$$) {
  return $JSCompiler_StaticMethods_getOverviewSize$self$$.$isVertical$() ? $JSCompiler_StaticMethods_getOverviewSize$self$$.$Height$ - $JSCompiler_StaticMethods_getOverviewSize$self$$.$_leftMargin$ - $JSCompiler_StaticMethods_getOverviewSize$self$$.$_rightMargin$ : $JSCompiler_StaticMethods_getOverviewSize$self$$.$Width$ - $JSCompiler_StaticMethods_getOverviewSize$self$$.$_leftMargin$ - $JSCompiler_StaticMethods_getOverviewSize$self$$.$_rightMargin$
};
D.$JSCompiler_StaticMethods_getMaximumPosition$$ = function $$JSCompiler_StaticMethods_getMaximumPosition$$$($JSCompiler_StaticMethods_getMaximumPosition$self$$) {
  return $JSCompiler_StaticMethods_getMaximumPosition$self$$.$isVertical$() ? $JSCompiler_StaticMethods_getMaximumPosition$self$$.$Height$ - $JSCompiler_StaticMethods_getMaximumPosition$self$$.$_rightMargin$ : $JSCompiler_StaticMethods_getMaximumPosition$self$$.$Width$ - $JSCompiler_StaticMethods_getMaximumPosition$self$$.$_rightMargin$
};
D.$JSCompiler_StaticMethods_getMinimumWindowSize$$ = function $$JSCompiler_StaticMethods_getMinimumWindowSize$$$($JSCompiler_StaticMethods_getMinimumWindowSize$self$$) {
  return $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minWinSize$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minWinSize$ : $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minimumWindowSize$ != D.$JSCompiler_alias_NULL$$ ? ($JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minWinSize$ = D.$DvtTimeUtils$$.$getDatePosition$($JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_start$, $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_end$, 
  $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_start$ + $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minimumWindowSize$, (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)($JSCompiler_StaticMethods_getMinimumWindowSize$self$$)), $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minWinSize$) : 10
};
D.$JSCompiler_StaticMethods_getHandleStart$$ = function $$JSCompiler_StaticMethods_getHandleStart$$$() {
  return D.$DvtTimeUtils$$.$supportsTouch$() ? (0,D.$JSCompiler_StaticMethods_getHandleSize$$)() / 2 : 0
};
D.$JSCompiler_StaticMethods_getHandleSize$$ = function $$JSCompiler_StaticMethods_getHandleSize$$$() {
  return D.$DvtTimeUtils$$.$supportsTouch$() ? 30 : 10
};
D.$JSCompiler_StaticMethods_isHandle$$ = function $$JSCompiler_StaticMethods_isHandle$$$($drawable$$23$$) {
  var $id$$144$$ = $drawable$$23$$.getId();
  return"lh" == $id$$144$$ || "rh" == $id$$144$$ || "lhb" == $id$$144$$ || "rhb" == $id$$144$$ || "grpy" == $id$$144$$ || "lbgrh" == $id$$144$$ || "rbgrh" == $id$$144$$ || $drawable$$23$$.getParent() != D.$JSCompiler_alias_NULL$$ && "grpy" == $drawable$$23$$.getParent().getId()
};
D.$DvtOverview$$.prototype.$getTimeAxisWidth$ = function $$DvtOverview$$$$$getTimeAxisWidth$$() {
  if(this.$_timeAxisInfo$ == D.$JSCompiler_alias_NULL$$) {
    return 0
  }
  if(this.$_timeAxisWidth$ == D.$JSCompiler_alias_NULL$$) {
    var $width$$115$$ = (0,window.parseInt)(this.$_timeAxisInfo$.width, 10);
    this.$_timeAxisWidth$ = !(0,window.isNaN)($width$$115$$) && $width$$115$$ < this.$Width$ ? $width$$115$$ : 40
  }
  return this.$_timeAxisWidth$
};
D.$DvtOverview$$.prototype.$getTimeAxisHeight$ = function $$DvtOverview$$$$$getTimeAxisHeight$$() {
  if(this.$_timeAxisInfo$ == D.$JSCompiler_alias_NULL$$) {
    return 0
  }
  if(this.$_timeAxisHeight$ == D.$JSCompiler_alias_NULL$$) {
    var $height$$101$$ = (0,window.parseInt)(this.$_timeAxisInfo$.height, 10);
    this.$_timeAxisHeight$ = !(0,window.isNaN)($height$$101$$) && $height$$101$$ < this.$Height$ ? $height$$101$$ : 20
  }
  return this.$_timeAxisHeight$
};
D.$JSCompiler_StaticMethods_getPageX$$ = function $$JSCompiler_StaticMethods_getPageX$$$($event$$469$$) {
  return D.$DvtTimeUtils$$.$supportsTouch$() && $event$$469$$.targetTouches != D.$JSCompiler_alias_NULL$$ ? 0 < $event$$469$$.targetTouches.length ? $event$$469$$.targetTouches[0].pageX : D.$JSCompiler_alias_NULL$$ : $event$$469$$.pageX
};
D.$JSCompiler_StaticMethods_getPageY$$ = function $$JSCompiler_StaticMethods_getPageY$$$($event$$470$$) {
  return D.$DvtTimeUtils$$.$supportsTouch$() && $event$$470$$.targetTouches != D.$JSCompiler_alias_NULL$$ ? 0 < $event$$470$$.targetTouches.length ? $event$$470$$.targetTouches[0].pageY : D.$JSCompiler_alias_NULL$$ : $event$$470$$.pageY
};
D.$DvtOverview$$.prototype.$isLeftAndRightFilterRendered$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$JSCompiler_StaticMethods_getLeftBackground$$ = function $$JSCompiler_StaticMethods_getLeftBackground$$$($JSCompiler_StaticMethods_getLeftBackground$self$$) {
  return $JSCompiler_StaticMethods_getLeftBackground$self$$.$isLeftAndRightFilterRendered$() ? $JSCompiler_StaticMethods_getLeftBackground$self$$.$getChildAt$(3) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_getRightBackground$$ = function $$JSCompiler_StaticMethods_getRightBackground$$$($JSCompiler_StaticMethods_getRightBackground$self$$) {
  return $JSCompiler_StaticMethods_getRightBackground$self$$.$isLeftAndRightFilterRendered$() ? $JSCompiler_StaticMethods_getRightBackground$self$$.$getChildAt$(4) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$ = function $$JSCompiler_StaticMethods_getRightBackgroundHandle$$$($JSCompiler_StaticMethods_getRightBackgroundHandle$self$$) {
  return $JSCompiler_StaticMethods_getRightBackgroundHandle$self$$.$isLeftAndRightFilterRendered$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_getRightBackgroundHandle$self$$) ? $JSCompiler_StaticMethods_getRightBackgroundHandle$self$$.$getChildAt$(6) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_setLinePos$$ = function $$JSCompiler_StaticMethods_setLinePos$$$($JSCompiler_StaticMethods_setLinePos$self$$, $line$$16$$, $pos1$$, $pos2$$) {
  $JSCompiler_StaticMethods_setLinePos$self$$.$isVertical$() ? (-1 != $pos1$$ && $line$$16$$.$setY1$($pos1$$), -1 != $pos2$$ && $line$$16$$.$setY2$($pos2$$)) : (-1 != $pos1$$ && $line$$16$$.$setX1$($pos1$$), -1 != $pos2$$ && $line$$16$$.$setX2$($pos2$$))
};
D.$JSCompiler_StaticMethods_getLinePos1$$ = function $$JSCompiler_StaticMethods_getLinePos1$$$($JSCompiler_StaticMethods_getLinePos1$self$$, $line$$17$$) {
  return $JSCompiler_StaticMethods_getLinePos1$self$$.$isVertical$() ? $line$$17$$.$getY1$() : $line$$17$$.$getX1$()
};
D.$DvtOverview$$.prototype.$_findDrawable$ = function $$DvtOverview$$$$$_findDrawable$$($event$$471_target$$72$$) {
  $event$$471_target$$72$$ = $event$$471_target$$72$$.target;
  if($event$$471_target$$72$$ != D.$JSCompiler_alias_NULL$$) {
    var $id$$145$$ = $event$$471_target$$72$$.getId();
    if($id$$145$$ == D.$JSCompiler_alias_NULL$$) {
      return D.$JSCompiler_alias_NULL$$
    }
    if("_border" == $id$$145$$.substr($id$$145$$.length - 7)) {
      return this.$getChildAfter$($event$$471_target$$72$$)
    }
    if("tick" != $id$$145$$.substr(0, 4) && "ltb" != $id$$145$$ && "rtb" != $id$$145$$ && "bb" != $id$$145$$ && "tab" != $id$$145$$) {
      return $event$$471_target$$72$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_isMovable$$ = function $$JSCompiler_StaticMethods_isMovable$$$($drawable$$24$$) {
  return"window" == $drawable$$24$$.getId() || "ftr" == $drawable$$24$$.getId() || "sta" == $drawable$$24$$.getId() || (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$24$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$DvtOverview$$.prototype.$isFlashEnvironment$ = function $$DvtOverview$$$$$isFlashEnvironment$$() {
  return window && window.$isFlashEnvironment$
};
D.$DvtOverview$$.prototype.$createBackground$ = function $$DvtOverview$$$$$createBackground$$($width$$116$$, $height$$102$$) {
  var $background$$9$$ = new D.$DvtRect$$(this.$_context$, 0, 0, $width$$116$$, $height$$102$$, "bg");
  $background$$9$$.$setSolidFill$(this.$_overviewBackgroundColor$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($background$$9$$);
  this.$addChild$($background$$9$$);
  return $background$$9$$
};
D.$JSCompiler_StaticMethods_createGrippyImage$$ = function $$JSCompiler_StaticMethods_createGrippyImage$$$($JSCompiler_StaticMethods_createGrippyImage$self$$, $width$$118$$, $height$$104$$) {
  return new D.$DvtImage$$($JSCompiler_StaticMethods_createGrippyImage$self$$.$_context$, $JSCompiler_StaticMethods_createGrippyImage$self$$.$_handleBackgroundImage$, ($width$$118$$ - $JSCompiler_StaticMethods_createGrippyImage$self$$.$_handleWidth$) / 2, ($height$$104$$ - $JSCompiler_StaticMethods_createGrippyImage$self$$.$_handleHeight$) / 2, $JSCompiler_StaticMethods_createGrippyImage$self$$.$_handleWidth$, $JSCompiler_StaticMethods_createGrippyImage$self$$.$_handleHeight$, "grpy")
};
D.$JSCompiler_StaticMethods_createGrippy$$ = function $$JSCompiler_StaticMethods_createGrippy$$$($JSCompiler_StaticMethods_createGrippy$self$$, $handlePos$$) {
  var $grippy$$ = new D.$DvtContainer$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, "grpy"), $color$$52$$ = $JSCompiler_StaticMethods_createGrippy$self$$.$_handleTextureColor$;
  if($JSCompiler_StaticMethods_createGrippy$self$$.$isVertical$()) {
    for(var $startx$$1$$ = 8 + $handlePos$$, $starty$$1$$ = 3, $i$$581$$ = 0;9 > $i$$581$$;$i$$581$$++) {
      var $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$ + 2 * $i$$581$$, $starty$$1$$, $startx$$1$$ + 2 * $i$$581$$ + 1, $starty$$1$$, "dot1" + $i$$581$$);
      $dot$$.$setSolidStroke$($color$$52$$);
      $grippy$$.$addChild$($dot$$);
      $starty$$1$$ += 2;
      $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$ + 1 + 2 * $i$$581$$, $starty$$1$$, $startx$$1$$ + 1 + 2 * $i$$581$$ + 1, $starty$$1$$, "dot2" + $i$$581$$);
      $dot$$.$setSolidStroke$($color$$52$$);
      $grippy$$.$addChild$($dot$$);
      $starty$$1$$ += 2;
      $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$ + 2 * $i$$581$$, $starty$$1$$, $startx$$1$$ + 2 * $i$$581$$ + 1, $starty$$1$$, "dot3" + $i$$581$$);
      $dot$$.$setSolidStroke$($color$$52$$);
      $grippy$$.$addChild$($dot$$);
      $starty$$1$$ = 3
    }
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$ + 18, $starty$$1$$, $startx$$1$$ + 18 + 1, $starty$$1$$, "dot4");
    $dot$$.$setSolidStroke$($color$$52$$);
    $grippy$$.$addChild$($dot$$);
    $starty$$1$$ += 4;
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$ + 18, $starty$$1$$, $startx$$1$$ + 18 + 1, $starty$$1$$, "dot5")
  }else {
    $startx$$1$$ = 3;
    $starty$$1$$ = 8 + $handlePos$$;
    for($i$$581$$ = 0;9 > $i$$581$$;$i$$581$$++) {
      $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$, $starty$$1$$ + 2 * $i$$581$$, $startx$$1$$, $starty$$1$$ + 2 * $i$$581$$ + 1, "dot1" + $i$$581$$), $dot$$.$setSolidStroke$($color$$52$$), $grippy$$.$addChild$($dot$$), $startx$$1$$ += 2, $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$, $starty$$1$$ + 1 + 2 * $i$$581$$, $startx$$1$$, $starty$$1$$ + 1 + 2 * $i$$581$$ + 1, "dot2" + $i$$581$$), $dot$$.$setSolidStroke$($color$$52$$), 
      $grippy$$.$addChild$($dot$$), $startx$$1$$ += 2, $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$, $starty$$1$$ + 2 * $i$$581$$, $startx$$1$$, $starty$$1$$ + 2 * $i$$581$$ + 1, "dot3" + $i$$581$$), $dot$$.$setSolidStroke$($color$$52$$), $grippy$$.$addChild$($dot$$), $startx$$1$$ = 3
    }
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$, $starty$$1$$ + 18, $startx$$1$$, $starty$$1$$ + 18 + 1, "dot4");
    $dot$$.$setSolidStroke$($color$$52$$);
    $grippy$$.$addChild$($dot$$);
    $startx$$1$$ += 4;
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$, $starty$$1$$ + 18, $startx$$1$$, $starty$$1$$ + 18 + 1, "dot5")
  }
  $dot$$.$setSolidStroke$($color$$52$$);
  $grippy$$.$addChild$($dot$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($grippy$$);
  return $grippy$$
};
D.$JSCompiler_StaticMethods_getRectSize$$ = function $$JSCompiler_StaticMethods_getRectSize$$$($JSCompiler_StaticMethods_getRectSize$self$$, $rect$$31$$) {
  return $JSCompiler_StaticMethods_getRectSize$self$$.$isVertical$() ? $rect$$31$$.getHeight() : $rect$$31$$.getWidth()
};
D.$JSCompiler_StaticMethods_getSlidingWindowPos$$ = function $$JSCompiler_StaticMethods_getSlidingWindowPos$$$($JSCompiler_StaticMethods_getSlidingWindowPos$self$$, $slidingWindow$$5$$) {
  return $JSCompiler_StaticMethods_getSlidingWindowPos$self$$.$isVertical$() ? $slidingWindow$$5$$.$getTranslateY$() : $slidingWindow$$5$$.$getTranslateX$()
};
D.$JSCompiler_StaticMethods_setSlidingWindowPos$$ = function $$JSCompiler_StaticMethods_setSlidingWindowPos$$$($JSCompiler_StaticMethods_setSlidingWindowPos$self$$, $rightStart_slidingWindow$$6$$, $pos$$48$$) {
  $pos$$48$$ = window.Math.max(0, $pos$$48$$);
  $JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$isVertical$() ? $rightStart_slidingWindow$$6$$.$setTranslateY$($pos$$48$$) : $rightStart_slidingWindow$$6$$.$setTranslateX$($pos$$48$$);
  if($JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$isLeftAndRightFilterRendered$()) {
    (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$).$setWidth$($pos$$48$$);
    $rightStart_slidingWindow$$6$$ = $pos$$48$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$, $rightStart_slidingWindow$$6$$);
    var $handleStart$$1_rightBackground$$1$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$);
    $handleStart$$1_rightBackground$$1$$.$setX$($rightStart_slidingWindow$$6$$);
    $handleStart$$1_rightBackground$$1$$.$setWidth$(window.Math.max(0, $JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$Width$ - $rightStart_slidingWindow$$6$$));
    D.$DvtTimeUtils$$.$supportsTouch$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$) && ($handleStart$$1_rightBackground$$1$$ = (0,D.$JSCompiler_StaticMethods_getHandleStart$$)(), ($JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$isLeftAndRightFilterRendered$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$) ? $JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$getChildAt$(5) : 
    D.$JSCompiler_alias_NULL$$).$setX$($pos$$48$$ - $handleStart$$1_rightBackground$$1$$), (0,D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$).$setX$($rightStart_slidingWindow$$6$$))
  }
};
D.$JSCompiler_StaticMethods_setSlidingWindowSize$$ = function $$JSCompiler_StaticMethods_setSlidingWindowSize$$$($JSCompiler_StaticMethods_setSlidingWindowSize$self$$, $rightGrippy$$1_slidingWindow$$8$$, $size$$35$$) {
  $size$$35$$ = window.Math.max((0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$), $size$$35$$);
  var $rightHandleBackground$$1_rightStart$$1_size$$inline_6156$$ = $size$$35$$ = window.Math.min($JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isVertical$() ? $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$Height$ : $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$Width$, $size$$35$$);
  $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isVertical$() ? $rightGrippy$$1_slidingWindow$$8$$.$setHeight$($rightHandleBackground$$1_rightStart$$1_size$$inline_6156$$) : $rightGrippy$$1_slidingWindow$$8$$.$setWidth$($rightHandleBackground$$1_rightStart$$1_size$$inline_6156$$);
  if($JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isLeftAndRightFilterRendered$()) {
    var $rightHandleBackground$$1_rightStart$$1_size$$inline_6156$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$, $rightGrippy$$1_slidingWindow$$8$$) + $size$$35$$, $rightBackground$$2_rightHandle$$2$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$);
    $rightBackground$$2_rightHandle$$2$$.$setX$($rightHandleBackground$$1_rightStart$$1_size$$inline_6156$$);
    $rightBackground$$2_rightHandle$$2$$.$setWidth$(window.Math.max(0, $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$Width$ - $rightHandleBackground$$1_rightStart$$1_size$$inline_6156$$));
    D.$DvtTimeUtils$$.$supportsTouch$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$) && (0,D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$).$setX$($rightHandleBackground$$1_rightStart$$1_size$$inline_6156$$)
  }
  (0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$) || ($rightHandleBackground$$1_rightStart$$1_size$$inline_6156$$ = $rightGrippy$$1_slidingWindow$$8$$.$getChildAt$(3), $rightBackground$$2_rightHandle$$2$$ = $rightGrippy$$1_slidingWindow$$8$$.$getChildAt$(4), $rightGrippy$$1_slidingWindow$$8$$ = $rightGrippy$$1_slidingWindow$$8$$.$getChildAt$(5), $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isVertical$() ? ($rightBackground$$2_rightHandle$$2$$.$setTranslateY$($size$$35$$), 
  $rightHandleBackground$$1_rightStart$$1_size$$inline_6156$$.$setTranslateY$($size$$35$$ - (0,D.$JSCompiler_StaticMethods_getHandleSize$$)()), $rightGrippy$$1_slidingWindow$$8$$.$setTranslateY$($size$$35$$ - 10)) : ($rightBackground$$2_rightHandle$$2$$.$setTranslateX$($size$$35$$), $rightHandleBackground$$1_rightStart$$1_size$$inline_6156$$.$setTranslateX$($size$$35$$ - (0,D.$JSCompiler_StaticMethods_getHandleSize$$)()), $rightGrippy$$1_slidingWindow$$8$$.$setTranslateX$($size$$35$$ - 10)))
};
D.$DvtOverview$$.prototype.$updateTimeAxis$ = function $$DvtOverview$$$$$updateTimeAxis$$($width$$121$$, $height$$107$$) {
  if(this.$_ticks$ != D.$JSCompiler_alias_NULL$$) {
    this.$isVertical$();
    for(var $size$$36$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this), $i$$582$$ = 0;$i$$582$$ < this.$_ticks$.length;$i$$582$$++) {
      var $child$$33_label$$77$$ = this.$_ticks$[$i$$582$$], $time$$6_time_pos$$2$$ = (0,window.parseInt)($child$$33_label$$77$$.$getAttr$("time"), 10), $time$$6_time_pos$$2$$ = this.$getDatePosition$($time$$6_time_pos$$2$$), $child$$33_label$$77$$ = $child$$33_label$$77$$.$getAttr$("label"), $maxWidth$$18_next_time$$ = 0;
      $i$$582$$ + 1 < this.$_ticks$.length ? ($maxWidth$$18_next_time$$ = (0,window.parseInt)(this.$_ticks$[$i$$582$$ + 1].$getAttr$("time"), 10), $maxWidth$$18_next_time$$ = this.$getDatePosition$($maxWidth$$18_next_time$$) - $time$$6_time_pos$$2$$) : $maxWidth$$18_next_time$$ = $size$$36$$ - $time$$6_time_pos$$2$$;
      this.$isRTL$() && ($time$$6_time_pos$$2$$ = $size$$36$$ - $time$$6_time_pos$$2$$);
      this.$addTick$($time$$6_time_pos$$2$$, $width$$121$$, $height$$107$$, "tick" + $i$$582$$);
      this.$addLabel$($time$$6_time_pos$$2$$, $child$$33_label$$77$$, $width$$121$$, $height$$107$$, $maxWidth$$18_next_time$$, "label" + $i$$582$$)
    }
  }
};
D.$DvtOverview$$.prototype.$addTick$ = function $$DvtOverview$$$$$addTick$$($line$$18_pos$$49$$, $stroke$$77_width$$122$$, $height$$108$$, $id$$146$$) {
  $line$$18_pos$$49$$ = this.$isVertical$() ? new D.$DvtLine$$(this.$_context$, 0, $line$$18_pos$$49$$, $stroke$$77_width$$122$$, $line$$18_pos$$49$$, $id$$146$$) : new D.$DvtLine$$(this.$_context$, $line$$18_pos$$49$$, 0, $line$$18_pos$$49$$, $height$$108$$, $id$$146$$);
  $stroke$$77_width$$122$$ = new D.$DvtSolidStroke$$(this.$_timeIndicatorColor$);
  $stroke$$77_width$$122$$.$setStyle$(1, 3);
  $line$$18_pos$$49$$.$setStroke$($stroke$$77_width$$122$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($line$$18_pos$$49$$);
  this.$addChild$($line$$18_pos$$49$$)
};
D.$DvtOverview$$.prototype.$addLabel$ = function $$DvtOverview$$$$$addLabel$$($label$$78_pos$$50$$, $text$$63$$, $width$$123_y$$171$$, $height$$109$$, $maxWidth$$19$$, $id$$147$$) {
  this.$isVertical$() ? $label$$78_pos$$50$$ = new D.$DvtOutputText$$(this.$_context$, $text$$63$$, 4, $label$$78_pos$$50$$, $id$$147$$) : ($width$$123_y$$171$$ = "above" == this.$_overviewPosition$ ? 2 : $height$$109$$ - this.$getTimeAxisHeight$() + 2, $label$$78_pos$$50$$ = new D.$DvtOutputText$$(this.$_context$, $text$$63$$, $label$$78_pos$$50$$ + 5, $width$$123_y$$171$$, $id$$147$$));
  $label$$78_pos$$50$$.$setCSSStyle$(new D.$DvtCSSStyle$$("font-weight:bold"));
  D.$DvtTextUtils$$.$fitText$($label$$78_pos$$50$$, $maxWidth$$19$$, window.Infinity, this);
  $label$$78_pos$$50$$.$_rawText$ = $label$$78_pos$$50$$.$_untruncatedTextString$
};
D.$DvtOverview$$.prototype.$parseDataXML$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_StaticMethods_animateSlidingWindow$$ = function $$JSCompiler_StaticMethods_animateSlidingWindow$$$($JSCompiler_StaticMethods_animateSlidingWindow$self$$, $newLeft$$2$$) {
  var $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$(1);
  $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$getChildAt$(3);
  $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$getChildAt$(4);
  $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$getChildAt$(5);
  if($newLeft$$2$$ != (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$)) {
    var $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$), $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 
    1)), $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 2)), $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - 
    ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 3)), $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 4)), $rightBackgroundHandleSetter_topBar$$1$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - 
    ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 5));
    if($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isVertical$()) {
      var $posGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$getTranslateY$, $posSetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$setTranslateY$, $leftHandlePos1Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getY1$, $leftHandlePos1Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setY1$, $leftHandlePos2Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getY2$, 
      $leftHandlePos2Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setY2$, $rightHandlePos1Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getY1$, $rightHandlePos1Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setY1$, $rightHandlePos2Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getY2$, $rightHandlePos2Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setY2$, 
      $leftTopBarPosGetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$getY2$, $leftTopBarPosSetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$setY2$, $rightTopBarPosGetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getY1$, $rightTopBarPosSetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setY1$, $bottomBarPos1Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$.$getY1$, 
      $bottomBarPos1Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$.$setY1$, $bottomBarPos2Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$.$getY2$, $bottomBarPos2Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$.$setY2$, $topBarPos1Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getY1$, $topBarPos1Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setY1$, $topBarPos2Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getY2$, 
      $topBarPos2Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setY2$
    }else {
      $posGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$getTranslateX$, $posSetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$setTranslateX$, $leftHandlePos1Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX1$, $leftHandlePos1Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX1$, $leftHandlePos2Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX2$, 
      $leftHandlePos2Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX2$, $rightHandlePos1Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getX1$, $rightHandlePos1Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setX1$, $rightHandlePos2Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getX2$, $rightHandlePos2Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setX2$, 
      $leftTopBarPosGetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$getX2$, $leftTopBarPosSetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$setX2$, $rightTopBarPosGetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getX1$, $rightTopBarPosSetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setX1$, $bottomBarPos1Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$.$getX1$, 
      $bottomBarPos1Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$.$setX1$, $bottomBarPos2Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$.$getX2$, $bottomBarPos2Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$.$setX2$, $topBarPos1Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getX1$, $topBarPos1Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setX1$, $topBarPos2Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getX2$, 
      $topBarPos2Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setX2$
    }
    var $animator$$118_minPos$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_leftMargin$, $maxPos$$ = (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), $rightStart$$2_slidingWindowSize$$ = (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$);
    $newLeft$$2$$ = window.Math.max($animator$$118_minPos$$, window.Math.min($maxPos$$ - $rightStart$$2_slidingWindowSize$$, $newLeft$$2$$));
    $animator$$118_minPos$$ = "off" !== $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_animationOnClick$ ? new D.$DvtAnimator$$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_context$, 0.5, 0, D.$DvtEasing$linear$$) : D.$JSCompiler_alias_NULL$$;
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$118_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$, $posGetter$$, $posSetter$$, $newLeft$$2$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$118_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftHandlePos1Getter$$, $leftHandlePos1Setter$$, $newLeft$$2$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$118_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftHandlePos2Getter$$, $leftHandlePos2Setter$$, $newLeft$$2$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$118_minPos$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $rightHandlePos1Getter$$, $rightHandlePos1Setter$$, $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$118_minPos$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $rightHandlePos2Getter$$, $rightHandlePos2Setter$$, $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$118_minPos$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $leftTopBarPosGetter$$, $leftTopBarPosSetter$$, $newLeft$$2$$ + 1);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$118_minPos$$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $rightTopBarPosGetter$$, $rightTopBarPosSetter$$, $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$ - 1);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$118_minPos$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$, $bottomBarPos1Getter$$, $bottomBarPos1Setter$$, $newLeft$$2$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$118_minPos$$, $rightBackgroundHandleSetter_topBar$$1$$, $topBarPos1Getter$$, $topBarPos1Setter$$, $newLeft$$2$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$118_minPos$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$, $bottomBarPos2Getter$$, $bottomBarPos2Setter$$, $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$118_minPos$$, $rightBackgroundHandleSetter_topBar$$1$$, $topBarPos2Getter$$, $topBarPos2Setter$$, $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$);
    $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isLeftAndRightFilterRendered$() && ($handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$ = (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$118_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.getWidth, 
    $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$setWidth$, $newLeft$$2$$), $rightStart$$2_slidingWindowSize$$ = $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.getWidth, 
    $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$setWidth$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$getX$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$setX$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$ = 
    $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isVertical$() ? $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$Height$ : $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$Width$, (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$118_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$ - 
    $rightStart$$2_slidingWindowSize$$), (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$118_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $rightStart$$2_slidingWindowSize$$), D.$DvtTimeUtils$$.$supportsTouch$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$) && 
    ($handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$ = (0,D.$JSCompiler_StaticMethods_getHandleStart$$)(), $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isLeftAndRightFilterRendered$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$) ? $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$(5) : D.$JSCompiler_alias_NULL$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = 
    $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = (0,D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getX$, 
    $rightBackgroundHandleSetter_topBar$$1$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setX$, (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$118_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $newLeft$$2$$ - $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$), (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$118_minPos$$, 
    $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$, $rightBackgroundHandleSetter_topBar$$1$$, $rightStart$$2_slidingWindowSize$$)));
    $animator$$118_minPos$$ != D.$JSCompiler_alias_NULL$$ && $animator$$118_minPos$$.play()
  }
};
D.$JSCompiler_StaticMethods_animateProperty$$ = function $$JSCompiler_StaticMethods_animateProperty$$$($animator$$119$$, $obj$$181$$, $getter$$, $setter$$, $value$$123$$) {
  $animator$$119$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$119$$, "typeNumber", $obj$$181$$, $getter$$, $setter$$, $value$$123$$) : $setter$$.call($obj$$181$$, $value$$123$$)
};
D.$DvtOverview$$.prototype.$HandleShapeMouseOver$ = function $$DvtOverview$$$$$HandleShapeMouseOver$$($event$$472_relPos$$38$$) {
  var $drawable$$25$$ = this.$_findDrawable$($event$$472_relPos$$38$$);
  if($drawable$$25$$ && !("bg" == $drawable$$25$$.getId() || "ocd" == $drawable$$25$$.getId())) {
    if("label" == $drawable$$25$$.getId().substr(0, 5) && $drawable$$25$$ instanceof D.$DvtOutputText$$) {
      $drawable$$25$$.$isTruncated$() && this.$_context$.$getTooltipManager$().$showDatatip$($event$$472_relPos$$38$$.pageX, $event$$472_relPos$$38$$.pageY, $drawable$$25$$.$_rawText$, "#000000")
    }else {
      if(this.$_resizeArrow$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$25$$) && ($event$$472_relPos$$38$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $event$$472_relPos$$38$$.pageX, $event$$472_relPos$$38$$.pageY), $event$$472_relPos$$38$$ = this.$stageToLocal$($event$$472_relPos$$38$$), this.$isVertical$() ? (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_resizeArrow$, $event$$472_relPos$$38$$.x + 6, $event$$472_relPos$$38$$.y - 
      10) : (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_resizeArrow$, $event$$472_relPos$$38$$.x - 6, $event$$472_relPos$$38$$.y - 20), this.$_resizeArrow$.$setVisible$(D.$JSCompiler_alias_TRUE$$)), "window" == $drawable$$25$$.getId() || "ftr" == $drawable$$25$$.getId() || "arr" == $drawable$$25$$.getId() || (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$25$$)) {
        this.$isFlashEnvironment$() && this.setCursor("move")
      }else {
        return $drawable$$25$$
      }
    }
  }
};
D.$DvtOverview$$.prototype.$HandleShapeMouseOut$ = function $$DvtOverview$$$$$HandleShapeMouseOut$$($drawable$$26_event$$473$$) {
  this.$_moveDrawable$ == D.$JSCompiler_alias_NULL$$ && this.setCursor("default");
  $drawable$$26_event$$473$$ = this.$_findDrawable$($drawable$$26_event$$473$$);
  if($drawable$$26_event$$473$$ != D.$JSCompiler_alias_NULL$$) {
    return(0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$26_event$$473$$) && this.$_resizeArrow$ != D.$JSCompiler_alias_NULL$$ && this.$_resizeArrow$.$setVisible$(D.$JSCompiler_alias_FALSE$$), $drawable$$26_event$$473$$
  }
};
D.$DvtOverview$$.prototype.$HandleShapeClick$ = function $$DvtOverview$$$$$HandleShapeClick$$($event$$474_newEndTime_relPos$$39_slidingWindow$$10$$, $newPos$$3_pageX$$9$$, $evt$$53_pageY$$9_pos$$51$$) {
  $event$$474_newEndTime_relPos$$39_slidingWindow$$10$$.stopPropagation();
  var $drawable$$27_newStartTime_size$$38$$ = this.$_findDrawable$($event$$474_newEndTime_relPos$$39_slidingWindow$$10$$);
  if($drawable$$27_newStartTime_size$$38$$ && !("window" == $drawable$$27_newStartTime_size$$38$$.getId() || (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$27_newStartTime_size$$38$$))) {
    if("bg" == $drawable$$27_newStartTime_size$$38$$.getId() || "label" == $drawable$$27_newStartTime_size$$38$$.getId().substr(0, 5) || "ocd" == $drawable$$27_newStartTime_size$$38$$.getId() || "lbg" == $drawable$$27_newStartTime_size$$38$$.getId() || "rbg" == $drawable$$27_newStartTime_size$$38$$.getId()) {
      $newPos$$3_pageX$$9$$ == D.$JSCompiler_alias_VOID$$ && ($newPos$$3_pageX$$9$$ = $event$$474_newEndTime_relPos$$39_slidingWindow$$10$$.pageX);
      $evt$$53_pageY$$9_pos$$51$$ == D.$JSCompiler_alias_VOID$$ && ($evt$$53_pageY$$9_pos$$51$$ = $event$$474_newEndTime_relPos$$39_slidingWindow$$10$$.pageY);
      $event$$474_newEndTime_relPos$$39_slidingWindow$$10$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $newPos$$3_pageX$$9$$, $evt$$53_pageY$$9_pos$$51$$);
      $event$$474_newEndTime_relPos$$39_slidingWindow$$10$$ = this.$stageToLocal$($event$$474_newEndTime_relPos$$39_slidingWindow$$10$$);
      this.$isVertical$() ? ($evt$$53_pageY$$9_pos$$51$$ = $event$$474_newEndTime_relPos$$39_slidingWindow$$10$$.y, $drawable$$27_newStartTime_size$$38$$ = this.$Height$) : ($evt$$53_pageY$$9_pos$$51$$ = $event$$474_newEndTime_relPos$$39_slidingWindow$$10$$.x, $drawable$$27_newStartTime_size$$38$$ = this.$Width$);
      $event$$474_newEndTime_relPos$$39_slidingWindow$$10$$ = this.$getChildAt$(1);
      $newPos$$3_pageX$$9$$ = $evt$$53_pageY$$9_pos$$51$$ - (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$474_newEndTime_relPos$$39_slidingWindow$$10$$) / 2;
      (0,D.$JSCompiler_StaticMethods_animateSlidingWindow$$)(this, $newPos$$3_pageX$$9$$);
      this.$isRTL$() && ($evt$$53_pageY$$9_pos$$51$$ = this.$Width$ - $evt$$53_pageY$$9_pos$$51$$);
      var $time$$7$$ = this.$getPositionDate$($evt$$53_pageY$$9_pos$$51$$);
      $evt$$53_pageY$$9_pos$$51$$ = new D.$DvtOverviewEvent$$("scrollTime");
      $evt$$53_pageY$$9_pos$$51$$.setTime($time$$7$$);
      $newPos$$3_pageX$$9$$ = window.Math.max(0, window.Math.min($newPos$$3_pageX$$9$$, $drawable$$27_newStartTime_size$$38$$ - (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$474_newEndTime_relPos$$39_slidingWindow$$10$$)));
      this.$isRTL$() ? ($drawable$$27_newStartTime_size$$38$$ = this.$getPositionDate$(this.$Width$ - ($newPos$$3_pageX$$9$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$474_newEndTime_relPos$$39_slidingWindow$$10$$))), $event$$474_newEndTime_relPos$$39_slidingWindow$$10$$ = this.$getPositionDate$(this.$Width$ - $newPos$$3_pageX$$9$$)) : ($drawable$$27_newStartTime_size$$38$$ = this.$getPositionDate$($newPos$$3_pageX$$9$$), $event$$474_newEndTime_relPos$$39_slidingWindow$$10$$ = 
      this.$getPositionDate$($newPos$$3_pageX$$9$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$474_newEndTime_relPos$$39_slidingWindow$$10$$)));
      (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$53_pageY$$9_pos$$51$$, $drawable$$27_newStartTime_size$$38$$);
      (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$53_pageY$$9_pos$$51$$, $event$$474_newEndTime_relPos$$39_slidingWindow$$10$$);
      this.dispatchEvent($evt$$53_pageY$$9_pos$$51$$)
    }else {
      return $drawable$$27_newStartTime_size$$38$$
    }
  }
};
D.$DvtOverview$$.prototype.$HandleMouseDown$ = function $$DvtOverview$$$$$HandleMouseDown$$($event$$475$$) {
  (0,D.$JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$$)(this, $event$$475$$)
};
D.$JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$$ = function $$JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$$$($JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$, $event$$476$$) {
  $event$$476$$.stopPropagation();
  var $drawable$$28_evt$$54$$ = $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_findDrawable$($event$$476$$);
  if($drawable$$28_evt$$54$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_isMovable$$)($drawable$$28_evt$$54$$)) {
    if("ftr" == $drawable$$28_evt$$54$$.getId() || "sta" == $drawable$$28_evt$$54$$.getId()) {
      $drawable$$28_evt$$54$$ = $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$getChildAt$(1)
    }
    $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_initX$ = (0,D.$JSCompiler_StaticMethods_getPageX$$)($event$$476$$);
    $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_initY$ = (0,D.$JSCompiler_StaticMethods_getPageY$$)($event$$476$$);
    if((0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$28_evt$$54$$)) {
      var $cursor$$inline_6159_slidingWindow$$11$$ = $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$getChildAt$(1);
      $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$isRTL$() ? ($JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_oldEndPos$ = $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$Width$ - $cursor$$inline_6159_slidingWindow$$11$$.$getX$(), $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_oldStartPos$ = $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_oldEndPos$ - $cursor$$inline_6159_slidingWindow$$11$$.getWidth()) : ($JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_oldStartPos$ = 
      $cursor$$inline_6159_slidingWindow$$11$$.$getX$(), $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_oldEndPos$ = $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_oldStartPos$ + $cursor$$inline_6159_slidingWindow$$11$$.getWidth());
      "grpy" == $drawable$$28_evt$$54$$.getParent().getId() && ($drawable$$28_evt$$54$$ = $drawable$$28_evt$$54$$.getParent());
      var $drawableId$$1_leftBackground$$inline_6161_slidingWindow$$inline_6160$$ = $drawable$$28_evt$$54$$.getId();
      "grpy" == $drawableId$$1_leftBackground$$inline_6161_slidingWindow$$inline_6160$$ && ($drawable$$28_evt$$54$$ = $cursor$$inline_6159_slidingWindow$$11$$.$getChildBefore$($drawable$$28_evt$$54$$), $drawableId$$1_leftBackground$$inline_6161_slidingWindow$$inline_6160$$ = $drawable$$28_evt$$54$$.getId());
      if("lh" == $drawableId$$1_leftBackground$$inline_6161_slidingWindow$$inline_6160$$ || "rh" == $drawableId$$1_leftBackground$$inline_6161_slidingWindow$$inline_6160$$) {
        $drawable$$28_evt$$54$$ = $cursor$$inline_6159_slidingWindow$$11$$.$getChildBefore$($drawable$$28_evt$$54$$), $drawableId$$1_leftBackground$$inline_6161_slidingWindow$$inline_6160$$ = $drawable$$28_evt$$54$$.getId()
      }
      "lbgrh" == $drawableId$$1_leftBackground$$inline_6161_slidingWindow$$inline_6160$$ && ($drawable$$28_evt$$54$$ = $cursor$$inline_6159_slidingWindow$$11$$.$getChildAt$(0));
      "rbgrh" == $drawableId$$1_leftBackground$$inline_6161_slidingWindow$$inline_6160$$ && ($drawable$$28_evt$$54$$ = $cursor$$inline_6159_slidingWindow$$11$$.$getChildAt$($cursor$$inline_6159_slidingWindow$$11$$.$getNumChildren$() - 3));
      D.$DvtTimeUtils$$.$supportsTouch$() || ($JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$isVertical$() ? ($drawable$$28_evt$$54$$.$setY$(-20), $drawable$$28_evt$$54$$.$setHeight$(2 * ($drawable$$28_evt$$54$$.getHeight() + 20))) : ($drawable$$28_evt$$54$$.$setX$(-20), $drawable$$28_evt$$54$$.$setWidth$(2 * ($drawable$$28_evt$$54$$.getWidth() + 20))));
      $cursor$$inline_6159_slidingWindow$$11$$ = $drawable$$28_evt$$54$$.getCursor();
      $drawableId$$1_leftBackground$$inline_6161_slidingWindow$$inline_6160$$ = $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$getChildAt$(1);
      $drawableId$$1_leftBackground$$inline_6161_slidingWindow$$inline_6160$$ != D.$JSCompiler_alias_NULL$$ && $drawableId$$1_leftBackground$$inline_6161_slidingWindow$$inline_6160$$.setCursor($cursor$$inline_6159_slidingWindow$$11$$);
      if($JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$isLeftAndRightFilterRendered$()) {
        var $drawableId$$1_leftBackground$$inline_6161_slidingWindow$$inline_6160$$ = (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)($JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$), $rightBackground$$inline_6162$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$);
        $drawableId$$1_leftBackground$$inline_6161_slidingWindow$$inline_6160$$ != D.$JSCompiler_alias_NULL$$ && $rightBackground$$inline_6162$$ != D.$JSCompiler_alias_NULL$$ && ($drawableId$$1_leftBackground$$inline_6161_slidingWindow$$inline_6160$$.setCursor($cursor$$inline_6159_slidingWindow$$11$$), $rightBackground$$inline_6162$$.setCursor($cursor$$inline_6159_slidingWindow$$11$$))
      }
    }
    $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_moveDrawable$ = $drawable$$28_evt$$54$$;
    $drawable$$28_evt$$54$$ = new D.$DvtOverviewEvent$$("dropCallback");
    $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.dispatchEvent($drawable$$28_evt$$54$$)
  }
};
D.$DvtOverview$$.prototype.$HandleMouseUp$ = function $$DvtOverview$$$$$HandleMouseUp$$($event$$477$$) {
  (0,D.$JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$$)(this, $event$$477$$)
};
D.$JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$$ = function $$JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$$$($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$, $event$$478$$) {
  $event$$478$$ != D.$JSCompiler_alias_NULL$$ && $event$$478$$.stopPropagation();
  if($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$ != D.$JSCompiler_alias_NULL$$) {
    if("window" == $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$.getId()) {
      $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$finishWindowDrag$(0, 0, 0)
    }else {
      if((0,D.$JSCompiler_StaticMethods_isHandle$$)($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$)) {
        $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$finishHandleDrag$();
        D.$DvtTimeUtils$$.$supportsTouch$() || ($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$isVertical$() ? ($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$.$setY$(0), $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$.$setHeight$((0,D.$JSCompiler_StaticMethods_getHandleSize$$)())) : ($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$.$setX$(0), $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$.$setWidth$((0,D.$JSCompiler_StaticMethods_getHandleSize$$)())));
        var $leftBackground$$inline_6166_slidingWindow$$inline_6165$$ = $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$getChildAt$(1);
        $leftBackground$$inline_6166_slidingWindow$$inline_6165$$ != D.$JSCompiler_alias_NULL$$ && $leftBackground$$inline_6166_slidingWindow$$inline_6165$$.setCursor("move");
        if($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$isLeftAndRightFilterRendered$()) {
          var $leftBackground$$inline_6166_slidingWindow$$inline_6165$$ = (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$), $rightBackground$$inline_6167$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$);
          $leftBackground$$inline_6166_slidingWindow$$inline_6165$$ != D.$JSCompiler_alias_NULL$$ && $rightBackground$$inline_6167$$ != D.$JSCompiler_alias_NULL$$ && ($leftBackground$$inline_6166_slidingWindow$$inline_6165$$.setCursor("default"), $rightBackground$$inline_6167$$.setCursor("default"))
        }
      }
    }
    $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$ = D.$JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_initX$ = -1
  }
};
D.$DvtOverview$$.prototype.$HandleMouseMove$ = function $$DvtOverview$$$$$HandleMouseMove$$($event$$479$$) {
  (0,D.$JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$$)(this, $event$$479$$)
};
D.$JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$$ = function $$JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$$$($JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$, $event$$480$$) {
  $event$$480$$.stopPropagation();
  if($JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_moveDrawable$ != D.$JSCompiler_alias_NULL$$ && -1 != $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_initX$) {
    var $pageX$$10$$ = (0,D.$JSCompiler_StaticMethods_getPageX$$)($event$$480$$), $pageY$$10$$ = (0,D.$JSCompiler_StaticMethods_getPageY$$)($event$$480$$), $diffX$$6$$ = $pageX$$10$$ - $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_initX$, $diffY$$7$$ = $pageY$$10$$ - $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_initY$;
    $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_initX$ = $pageX$$10$$;
    $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_initY$ = $pageY$$10$$;
    "window" == $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_moveDrawable$.getId() ? $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$handleWindowDragPositioning$(0, $diffX$$6$$, $diffY$$7$$) : "lh" == $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_moveDrawable$.getId() || "lhb" == $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_moveDrawable$.getId() ? (0,D.$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$)($JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$, 
    $event$$480$$, $diffX$$6$$, $diffY$$7$$, D.$JSCompiler_alias_TRUE$$) : ("rh" == $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_moveDrawable$.getId() || "rhb" == $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_moveDrawable$.getId()) && $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$handleRightHandleDragPositioning$($event$$480$$, $diffX$$6$$, $diffY$$7$$)
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtOverview$$.prototype;
D.$JSCompiler_prototypeAlias$$.$HandleTouchStart$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchStart$$($event$$481$$) {
  var $target$$73$$ = $event$$481$$.targetTouches[0];
  this.$_touchStartX$ = $target$$73$$.pageX;
  this.$_touchStartY$ = $target$$73$$.pageY;
  2 == $event$$481$$.targetTouches.length ? ($event$$481$$.preventDefault(), $target$$73$$ = $event$$481$$.targetTouches[1], this.$_touchStartX2$ = $target$$73$$.pageX, this.$_touchStartY2$ = $target$$73$$.pageY, 20 > window.Math.abs(this.$_touchStartY$ - this.$_touchStartY2$) ? this.$_counter$ = 0 : this.$_touchStartY2$ = this.$_touchStartX2$ = this.$_touchStartY$ = this.$_touchStartX$ = D.$JSCompiler_alias_NULL$$) : (0,D.$JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$$)(this, $event$$481$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchMove$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchMove$$($event$$482$$) {
  $event$$482$$.preventDefault();
  if(this.$_touchStartX2$ != D.$JSCompiler_alias_NULL$$ && this.$_touchStartY2$ != D.$JSCompiler_alias_NULL$$) {
    if(50 > this.$_counter$) {
      this.$_counter$++
    }else {
      var $target$$74$$ = $event$$482$$.targetTouches[1];
      this.$handleRightHandleDragPositioning$(D.$JSCompiler_alias_NULL$$, $target$$74$$.pageX - this.$_touchStartX2$, 0);
      this.$_touchStartX2$ = $target$$74$$.pageX;
      this.$_counter$ = 0
    }
  }else {
    $target$$74$$ = $event$$482$$.targetTouches[0];
    if(this.$_touchStartX$ != $target$$74$$.pageX || this.$_touchStartY$ != $target$$74$$.pageY) {
      this.$_touchStartY$ = this.$_touchStartX$ = D.$JSCompiler_alias_NULL$$
    }
    (0,D.$JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$$)(this, $event$$482$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchEnd$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchEnd$$($event$$483$$) {
  this.$_touchStartX2$ != D.$JSCompiler_alias_NULL$$ && this.$_touchStartY2$ != D.$JSCompiler_alias_NULL$$ ? this.$finishHandleDrag$() : ((0,D.$JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$$)(this, $event$$483$$), this.$_touchStartX$ != D.$JSCompiler_alias_NULL$$ && this.$_touchStartY$ != D.$JSCompiler_alias_NULL$$ && this.$HandleShapeClick$($event$$483$$, this.$_touchStartX$, this.$_touchStartY$));
  this.$_touchStartY2$ = this.$_touchStartX2$ = this.$_touchStartY$ = this.$_touchStartX$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyDown$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyDown$$($event$$484$$) {
  var $delta$$7_keyCode$$32$$ = $event$$484$$.keyCode;
  if(37 === $delta$$7_keyCode$$32$$ || 39 === $delta$$7_keyCode$$32$$) {
    $delta$$7_keyCode$$32$$ = 37 === $delta$$7_keyCode$$32$$ ? -1 : 1, ($event$$484$$.shiftKey ? this.$handleRightHandleDragPositioning$ : this.$handleWindowDragPositioning$).call(this, $event$$484$$, $delta$$7_keyCode$$32$$, $delta$$7_keyCode$$32$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyUp$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyUp$$($event$$485$$) {
  var $delta$$8_keyCode$$33$$ = $event$$485$$.keyCode;
  if(37 === $delta$$8_keyCode$$33$$ || 39 === $delta$$8_keyCode$$33$$) {
    $delta$$8_keyCode$$33$$ = 37 === $delta$$8_keyCode$$33$$ ? -1 : 1, ($event$$485$$.shiftKey ? this.$finishHandleDrag$ : this.$finishWindowDrag$).call(this, $event$$485$$, $delta$$8_keyCode$$33$$, $delta$$8_keyCode$$33$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$handleWindowDragPositioning$ = function $$JSCompiler_prototypeAlias$$$$handleWindowDragPositioning$$($event$$486$$, $deltaX$$13$$, $deltaY$$13$$) {
  (0,D.$JSCompiler_StaticMethods_fireScrollEvent$$)(this, "scrollPos", $deltaX$$13$$, $deltaY$$13$$)
};
D.$JSCompiler_prototypeAlias$$.$finishWindowDrag$ = function $$JSCompiler_prototypeAlias$$$$finishWindowDrag$$($event$$487$$, $deltaX$$14$$, $deltaY$$14$$) {
  (0,D.$JSCompiler_StaticMethods_fireScrollEvent$$)(this, "scrollEnd", $deltaX$$14$$, $deltaY$$14$$)
};
D.$JSCompiler_StaticMethods_fireScrollEvent$$ = function $$JSCompiler_StaticMethods_fireScrollEvent$$$($JSCompiler_StaticMethods_fireScrollEvent$self$$, $evt$$55_type$$128$$, $delta$$9_deltaX$$15$$, $deltaY$$15$$) {
  var $newEndTime$$1_slidingWindow$$18$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getChildAt$(1), $pos$$55$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$18$$), $newStartTime$$1_scrollTo_size$$39$$ = (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$18$$), $minPos$$1$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_leftMargin$, 
  $maxPos$$1$$ = (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$);
  $delta$$9_deltaX$$15$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$isVertical$() ? $deltaY$$15$$ : $delta$$9_deltaX$$15$$;
  $pos$$55$$ + $delta$$9_deltaX$$15$$ <= $minPos$$1$$ ? ((0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$18$$, $minPos$$1$$), $newStartTime$$1_scrollTo_size$$39$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$isRTL$() ? -2 : -1) : $pos$$55$$ + $newStartTime$$1_scrollTo_size$$39$$ + $delta$$9_deltaX$$15$$ >= $maxPos$$1$$ ? ((0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, 
  $newEndTime$$1_slidingWindow$$18$$, $maxPos$$1$$ - $newStartTime$$1_scrollTo_size$$39$$), $newStartTime$$1_scrollTo_size$$39$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$isRTL$() ? -1 : -2) : ((0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$18$$, $pos$$55$$ + $delta$$9_deltaX$$15$$), $newStartTime$$1_scrollTo_size$$39$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$isRTL$() ? ($maxPos$$1$$ - $newStartTime$$1_scrollTo_size$$39$$ - 
  $pos$$55$$ - $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_leftMargin$) * $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_increment$ : ($pos$$55$$ - $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_leftMargin$) * $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_increment$);
  (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$);
  $evt$$55_type$$128$$ = new D.$DvtOverviewEvent$$($evt$$55_type$$128$$);
  $evt$$55_type$$128$$.$setPosition$($newStartTime$$1_scrollTo_size$$39$$);
  $JSCompiler_StaticMethods_fireScrollEvent$self$$.$isRTL$() ? ($newStartTime$$1_scrollTo_size$$39$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($JSCompiler_StaticMethods_fireScrollEvent$self$$.$Width$ - ($pos$$55$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$18$$))), $newEndTime$$1_slidingWindow$$18$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($JSCompiler_StaticMethods_fireScrollEvent$self$$.$Width$ - 
  $pos$$55$$)) : ($newStartTime$$1_scrollTo_size$$39$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($pos$$55$$), $newEndTime$$1_slidingWindow$$18$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($pos$$55$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$18$$)));
  (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$55_type$$128$$, $newStartTime$$1_scrollTo_size$$39$$);
  (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$55_type$$128$$, $newEndTime$$1_slidingWindow$$18$$);
  $JSCompiler_StaticMethods_fireScrollEvent$self$$.dispatchEvent($evt$$55_type$$128$$)
};
D.$DvtOverview$$.prototype.$handleRightHandleDragPositioning$ = function $$DvtOverview$$$$$handleRightHandleDragPositioning$$($event$$489$$, $deltaX$$17$$, $deltaY$$17$$) {
  (0,D.$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$)(this, $event$$489$$, $deltaX$$17$$, $deltaY$$17$$, D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$ = function $$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$$($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $endHandle$$inline_6178_event$$490_newSize$$1_relPos$$40_time$$9$$, $deltaX$$18_newEndTime$$2_slidingWindow$$19$$, $delta$$10_deltaY$$18$$, $isLeft$$5_newStartTime$$2$$) {
  var $evt$$56_size$$40$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$);
  $delta$$10_deltaY$$18$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isVertical$() ? $delta$$10_deltaY$$18$$ : $deltaX$$18_newEndTime$$2_slidingWindow$$19$$;
  if(0 != $delta$$10_deltaY$$18$$) {
    $deltaX$$18_newEndTime$$2_slidingWindow$$19$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getChildAt$(1);
    var $windowPos$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$18_newEndTime$$2_slidingWindow$$19$$), $windowSize$$ = (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$18_newEndTime$$2_slidingWindow$$19$$);
    if($isLeft$$5_newStartTime$$2$$) {
      if($windowSize$$ - $delta$$10_deltaY$$18$$ <= (0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$) || $windowPos$$ + $delta$$10_deltaY$$18$$ <= $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_leftMargin$) {
        return
      }
      $endHandle$$inline_6178_event$$490_newSize$$1_relPos$$40_time$$9$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isVertical$() ? (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_context$, (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_6178_event$$490_newSize$$1_relPos$$40_time$$9$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_6178_event$$490_newSize$$1_relPos$$40_time$$9$$)).y : 
      (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_context$, (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_6178_event$$490_newSize$$1_relPos$$40_time$$9$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_6178_event$$490_newSize$$1_relPos$$40_time$$9$$)).x;
      $endHandle$$inline_6178_event$$490_newSize$$1_relPos$$40_time$$9$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$stageToLocal$($endHandle$$inline_6178_event$$490_newSize$$1_relPos$$40_time$$9$$);
      if(0 < $delta$$10_deltaY$$18$$ && $endHandle$$inline_6178_event$$490_newSize$$1_relPos$$40_time$$9$$ <= $windowPos$$ || 0 > $delta$$10_deltaY$$18$$ && $endHandle$$inline_6178_event$$490_newSize$$1_relPos$$40_time$$9$$ >= $windowPos$$) {
        return
      }
      (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$18_newEndTime$$2_slidingWindow$$19$$, $windowPos$$ + $delta$$10_deltaY$$18$$);
      (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$18_newEndTime$$2_slidingWindow$$19$$, $windowSize$$ - $delta$$10_deltaY$$18$$)
    }else {
      if($windowSize$$ + $delta$$10_deltaY$$18$$ <= (0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$) || $windowPos$$ + $windowSize$$ + $delta$$10_deltaY$$18$$ >= (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$)) {
        return
      }
      $endHandle$$inline_6178_event$$490_newSize$$1_relPos$$40_time$$9$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isVertical$() ? (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_context$, (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_6178_event$$490_newSize$$1_relPos$$40_time$$9$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_6178_event$$490_newSize$$1_relPos$$40_time$$9$$)).y : 
      (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_context$, (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_6178_event$$490_newSize$$1_relPos$$40_time$$9$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_6178_event$$490_newSize$$1_relPos$$40_time$$9$$)).x;
      $endHandle$$inline_6178_event$$490_newSize$$1_relPos$$40_time$$9$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$stageToLocal$($endHandle$$inline_6178_event$$490_newSize$$1_relPos$$40_time$$9$$);
      if(0 < $delta$$10_deltaY$$18$$ && $endHandle$$inline_6178_event$$490_newSize$$1_relPos$$40_time$$9$$ <= $windowPos$$ + $windowSize$$ || 0 > $delta$$10_deltaY$$18$$ && $endHandle$$inline_6178_event$$490_newSize$$1_relPos$$40_time$$9$$ >= $windowPos$$ + $windowSize$$) {
        return
      }
      (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$18_newEndTime$$2_slidingWindow$$19$$, $windowSize$$ + $delta$$10_deltaY$$18$$)
    }
    (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$);
    $endHandle$$inline_6178_event$$490_newSize$$1_relPos$$40_time$$9$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$18_newEndTime$$2_slidingWindow$$19$$));
    $endHandle$$inline_6178_event$$490_newSize$$1_relPos$$40_time$$9$$ = $evt$$56_size$$40$$ * ($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_end$ - $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_start$) / ($endHandle$$inline_6178_event$$490_newSize$$1_relPos$$40_time$$9$$ - $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_start$);
    $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isRangeChangingSupported$() && ($evt$$56_size$$40$$ = new D.$DvtOverviewEvent$$("rangeChanging"), (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$56_size$$40$$, "newSize", $endHandle$$inline_6178_event$$490_newSize$$1_relPos$$40_time$$9$$), $endHandle$$inline_6178_event$$490_newSize$$1_relPos$$40_time$$9$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isRTL$() ? $isLeft$$5_newStartTime$$2$$ : 
    !$isLeft$$5_newStartTime$$2$$, (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$56_size$$40$$, "endHandle", $endHandle$$inline_6178_event$$490_newSize$$1_relPos$$40_time$$9$$), $isLeft$$5_newStartTime$$2$$ ? (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$56_size$$40$$, "expand", 0 > $delta$$10_deltaY$$18$$) : (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$56_size$$40$$, "expand", 0 < $delta$$10_deltaY$$18$$), $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isRTL$() ? 
    ($isLeft$$5_newStartTime$$2$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$Width$ - ((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$18_newEndTime$$2_slidingWindow$$19$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, 
    $deltaX$$18_newEndTime$$2_slidingWindow$$19$$))), $deltaX$$18_newEndTime$$2_slidingWindow$$19$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$Width$ - (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$18_newEndTime$$2_slidingWindow$$19$$))) : ($isLeft$$5_newStartTime$$2$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, 
    $deltaX$$18_newEndTime$$2_slidingWindow$$19$$)), $deltaX$$18_newEndTime$$2_slidingWindow$$19$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$18_newEndTime$$2_slidingWindow$$19$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$18_newEndTime$$2_slidingWindow$$19$$))), 
    (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$56_size$$40$$, $isLeft$$5_newStartTime$$2$$), (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$56_size$$40$$, $deltaX$$18_newEndTime$$2_slidingWindow$$19$$), $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.dispatchEvent($evt$$56_size$$40$$))
  }
};
D.$DvtOverview$$.prototype.$isRangeChangingSupported$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
D.$DvtOverview$$.prototype.$finishHandleDrag$ = function $$DvtOverview$$$$$finishHandleDrag$$() {
  var $newSize$$2_start$$41$$ = this.$_start$, $end$$29_oldStartTime$$ = this.$_end$, $oldSize$$ = this.$_width$, $oldEndTime_size$$41$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this), $newEndTime$$3_slidingWindow$$20$$ = this.$getChildAt$(1), $newStartTime$$3_time$$10$$ = this.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $newEndTime$$3_slidingWindow$$20$$)), $newSize$$2_start$$41$$ = $oldEndTime_size$$41$$ * ($end$$29_oldStartTime$$ - $newSize$$2_start$$41$$) / 
  ($newStartTime$$3_time$$10$$ - $newSize$$2_start$$41$$), $end$$29_oldStartTime$$ = this.$getPositionDate$(this.$_oldStartPos$), $oldEndTime_size$$41$$ = this.$getPositionDate$(this.$_oldEndPos$);
  this.$isRTL$() ? ($newStartTime$$3_time$$10$$ = this.$getPositionDate$(this.$Width$ - ((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $newEndTime$$3_slidingWindow$$20$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $newEndTime$$3_slidingWindow$$20$$))), $newEndTime$$3_slidingWindow$$20$$ = this.$getPositionDate$(this.$Width$ - (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $newEndTime$$3_slidingWindow$$20$$))) : ($newStartTime$$3_time$$10$$ = this.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, 
  $newEndTime$$3_slidingWindow$$20$$)), $newEndTime$$3_slidingWindow$$20$$ = this.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $newEndTime$$3_slidingWindow$$20$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $newEndTime$$3_slidingWindow$$20$$)));
  var $evt$$57$$ = new D.$DvtOverviewEvent$$("rangeChange");
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$57$$, "oldSize", $oldSize$$);
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$57$$, "newSize", $newSize$$2_start$$41$$);
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$57$$, "oldStartTime", $end$$29_oldStartTime$$);
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$57$$, "oldEndTime", $oldEndTime_size$$41$$);
  (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$57$$, $newStartTime$$3_time$$10$$);
  (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$57$$, $newEndTime$$3_slidingWindow$$20$$);
  this.dispatchEvent($evt$$57$$)
};
D.$JSCompiler_StaticMethods_ScrollTimeAxis$$ = function $$JSCompiler_StaticMethods_ScrollTimeAxis$$$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$) {
  var $slidingWindow$$21$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$(1), $leftHandle$$3$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$), $rightHandle$$4$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 
  1)), $leftTopBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 2)), $rightTopBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 3)), $bottomBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - 
  ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 4)), $topBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 5));
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftHandle$$3$$, (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $slidingWindow$$21$$), (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $slidingWindow$$21$$));
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$, (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $slidingWindow$$21$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $slidingWindow$$21$$), (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $slidingWindow$$21$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, 
  $slidingWindow$$21$$));
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftTopBar$$2$$, -1, (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $slidingWindow$$21$$) + 1);
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightTopBar$$2$$, (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$) - 1, -1);
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $bottomBar$$2$$, (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftHandle$$3$$), (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$));
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $topBar$$2$$, (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftHandle$$3$$), (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$))
};
D.$DvtOverview$$.prototype.dispatchEvent = function $$DvtOverview$$$$dispatchEvent$($event$$492$$) {
  D.$DvtEventDispatcher$$.dispatchEvent(this.$_callback$, this.$_callbackObj$, this, $event$$492$$)
};
D.$DvtOverviewParser$$ = function $$DvtOverviewParser$$$($view$$64$$) {
  this.Init($view$$64$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtOverviewParser$$, D.$DvtObj$$, "DvtOverviewParser");
D.$DvtOverviewParser$$.prototype.Init = (0,D.$JSCompiler_set$$)("$_view$");
D.$DvtOverviewParser$$.prototype.parse = function $$DvtOverviewParser$$$$parse$($data$$93$$) {
  return this.$ParseRootAttributes$($data$$93$$)
};
D.$DvtOverviewParser$$.prototype.$ParseRootAttributes$ = function $$DvtOverviewParser$$$$$ParseRootAttributes$$($options$$223$$) {
  var $ret$$95$$ = {};
  $ret$$95$$.$animationOnClick$ = $options$$223$$.animationOnClick;
  $options$$223$$.startTime != D.$JSCompiler_alias_NULL$$ && ($ret$$95$$.start = $options$$223$$.startTime);
  $options$$223$$.endTime != D.$JSCompiler_alias_NULL$$ && ($ret$$95$$.end = $options$$223$$.endTime);
  $ret$$95$$.start == D.$JSCompiler_alias_NULL$$ && ($ret$$95$$.start = (new window.Date).getTime());
  if($ret$$95$$.end == D.$JSCompiler_alias_NULL$$ || $ret$$95$$.end <= $ret$$95$$.start) {
    $ret$$95$$.end = $ret$$95$$.start + 864E5
  }
  $options$$223$$.currentTime != D.$JSCompiler_alias_NULL$$ && ($ret$$95$$.currentTime = $options$$223$$.currentTime);
  $options$$223$$.initialFocusTime != D.$JSCompiler_alias_NULL$$ && ($ret$$95$$.$initialFocusTime$ = $options$$223$$.initialFocusTime);
  $ret$$95$$.orientation = "horizontal";
  $options$$223$$.orientation != D.$JSCompiler_alias_NULL$$ && ($ret$$95$$.orientation = $options$$223$$.orientation);
  $ret$$95$$.$featuresOff$ = $options$$223$$.featuresOff;
  $ret$$95$$.$minimumWindowSize$ = $options$$223$$.minimumWindowSize;
  $ret$$95$$.$leftMargin$ = $options$$223$$.leftMargin;
  $ret$$95$$.$rightMargin$ = $options$$223$$.rightMargin;
  if($options$$223$$.viewportEndTime != D.$JSCompiler_alias_NULL$$) {
    var $viewportEndTime$$ = $options$$223$$.viewportEndTime, $viewportStartTime$$ = $ret$$95$$.start;
    $options$$223$$.viewportStartTime != D.$JSCompiler_alias_NULL$$ && $options$$223$$.viewportStartTime < $viewportEndTime$$ && ($viewportStartTime$$ = $options$$223$$.viewportStartTime);
    $ret$$95$$.width = $options$$223$$.viewportEndPos != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_calculateWidth$$)($ret$$95$$.start, $ret$$95$$.end, $viewportStartTime$$, $viewportEndTime$$, $options$$223$$.viewportEndPos) : (0,D.$JSCompiler_StaticMethods_calculateWidth$$)($ret$$95$$.start, $ret$$95$$.end, $viewportStartTime$$, $viewportEndTime$$, this.$_view$.$Width$);
    $ret$$95$$.$renderStart$ = $viewportStartTime$$
  }else {
    $ret$$95$$.$renderStart$ = $ret$$95$$.start
  }
  0 == $ret$$95$$.width && ($ret$$95$$.width = 1E3);
  $ret$$95$$.$overviewPosition$ = "below";
  $ret$$95$$.$selectionMode$ = "none";
  $ret$$95$$.$isRtl$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_view$.$_context$).toString();
  $options$$223$$.rtl != D.$JSCompiler_alias_NULL$$ && ($ret$$95$$.$isRtl$ = $options$$223$$.rtl.toString());
  $ret$$95$$.$handleFillColor$ = "#FFFFFF";
  $ret$$95$$.$handleTextureColor$ = "#B3C6DB";
  $ret$$95$$.$windowBackgroundColor$ = "#FFFFFF";
  $ret$$95$$.$windowBackgroundAlpha$ = 1;
  $ret$$95$$.$windowBorderTopStyle$ = "solid";
  $ret$$95$$.$windowBorderRightStyle$ = "solid";
  $ret$$95$$.$windowBorderBottomStyle$ = "solid";
  $ret$$95$$.$windowBorderLeftStyle$ = "solid";
  $ret$$95$$.$windowBorderTopColor$ = "#4F4F4F";
  $ret$$95$$.$windowBorderRightColor$ = "#4F4F4F";
  $ret$$95$$.$windowBorderBottomColor$ = "#4F4F4F";
  $ret$$95$$.$windowBorderLeftColor$ = "#4F4F4F";
  $ret$$95$$.$overviewBackgroundColor$ = "#E6ECF3";
  $ret$$95$$.$currentTimeIndicatorColor$ = "#C000D1";
  $ret$$95$$.$timeIndicatorColor$ = "#BCC7D2";
  $ret$$95$$.$timeAxisBarColor$ = "#e5e5e5";
  $ret$$95$$.$timeAxisBarOpacity$ = 1;
  $ret$$95$$.$leftFilterPanelColor$ = "#FFFFFF";
  $ret$$95$$.$leftFilterPanelAlpha$ = 0.7;
  $ret$$95$$.$rightFilterPanelColor$ = "#FFFFFF";
  $ret$$95$$.$rightFilterPanelAlpha$ = 0.7;
  $options$$223$$.style != D.$JSCompiler_alias_NULL$$ && ($options$$223$$.style.handleFillColor != D.$JSCompiler_alias_NULL$$ && ($ret$$95$$.$handleFillColor$ = $options$$223$$.style.handleFillColor), $options$$223$$.style.handleTextureColor != D.$JSCompiler_alias_NULL$$ && ($ret$$95$$.$handleTextureColor$ = $options$$223$$.style.handleTextureColor), $options$$223$$.style.handleBackgroundImage != D.$JSCompiler_alias_NULL$$ && ($ret$$95$$.$handleBackgroundImage$ = $options$$223$$.style.handleBackgroundImage), 
  $options$$223$$.style.handleWidth != D.$JSCompiler_alias_NULL$$ && ($ret$$95$$.$handleWidth$ = $options$$223$$.style.handleWidth), $options$$223$$.style.handleHeight != D.$JSCompiler_alias_NULL$$ && ($ret$$95$$.$handleHeight$ = $options$$223$$.style.handleHeight), $options$$223$$.style.windowBackgroundColor != D.$JSCompiler_alias_NULL$$ && ($ret$$95$$.$windowBackgroundColor$ = $options$$223$$.style.windowBackgroundColor), $options$$223$$.style.windowBackgroundAlpha != D.$JSCompiler_alias_NULL$$ && 
  ($ret$$95$$.$windowBackgroundAlpha$ = $options$$223$$.style.windowBackgroundAlpha), $options$$223$$.style.windowBorderTopStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$95$$.$windowBorderTopStyle$ = $options$$223$$.style.windowBorderTopStyle), $options$$223$$.style.windowBorderRightStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$95$$.$windowBorderRightStyle$ = $options$$223$$.style.windowBorderRightStyle), $options$$223$$.style.windowBorderBottomStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$95$$.$windowBorderBottomStyle$ = 
  $options$$223$$.style.windowBorderBottomStyle), $options$$223$$.style.windowBorderLeftStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$95$$.$windowBorderLeftStyle$ = $options$$223$$.style.windowBorderLeftStyle), $options$$223$$.style.windowBorderTopColor != D.$JSCompiler_alias_NULL$$ && ($ret$$95$$.$windowBorderTopColor$ = $options$$223$$.style.windowBorderTopColor), $options$$223$$.style.windowBorderRightColor != D.$JSCompiler_alias_NULL$$ && ($ret$$95$$.$windowBorderRightColor$ = $options$$223$$.style.windowBorderRightColor), 
  $options$$223$$.style.windowBorderBottomColor != D.$JSCompiler_alias_NULL$$ && ($ret$$95$$.$windowBorderBottomColor$ = $options$$223$$.style.windowBorderBottomColor), $options$$223$$.style.windowBorderLeftColor != D.$JSCompiler_alias_NULL$$ && ($ret$$95$$.$windowBorderLeftColor$ = $options$$223$$.style.windowBorderLeftColor), $options$$223$$.style.overviewBackgroundColor != D.$JSCompiler_alias_NULL$$ && ($ret$$95$$.$overviewBackgroundColor$ = $options$$223$$.style.overviewBackgroundColor), $options$$223$$.style.currentTimeIndicatorColor != 
  D.$JSCompiler_alias_NULL$$ && ($ret$$95$$.$currentTimeIndicatorColor$ = $options$$223$$.style.currentTimeIndicatorColor), $options$$223$$.style.timeIndicatorColor != D.$JSCompiler_alias_NULL$$ && ($ret$$95$$.$timeIndicatorColor$ = $options$$223$$.style.timeIndicatorColor), $options$$223$$.style.leftFilterPanelColor != D.$JSCompiler_alias_NULL$$ && ($ret$$95$$.$leftFilterPanelColor$ = $options$$223$$.style.leftFilterPanelColor), $options$$223$$.style.leftFilterPanelAlpha != D.$JSCompiler_alias_NULL$$ && 
  ($ret$$95$$.$leftFilterPanelAlpha$ = $options$$223$$.style.leftFilterPanelAlpha), $options$$223$$.style.rightFilterPanelColor != D.$JSCompiler_alias_NULL$$ && ($ret$$95$$.$rightFilterPanelColor$ = $options$$223$$.style.rightFilterPanelColor), $options$$223$$.style.rightFilterPanelAlpha != D.$JSCompiler_alias_NULL$$ && ($ret$$95$$.$rightFilterPanelAlpha$ = $options$$223$$.style.rightFilterPanelAlpha));
  return $ret$$95$$
};
D.$JSCompiler_StaticMethods_calculateWidth$$ = function $$JSCompiler_StaticMethods_calculateWidth$$$($number$$4_startTime$$6$$, $endTime$$7$$, $denominator$$2_viewportStartTime$$1$$, $viewportEndTime$$1$$, $viewportEndPos$$) {
  $number$$4_startTime$$6$$ = $viewportEndPos$$ * ($endTime$$7$$ - $number$$4_startTime$$6$$);
  $denominator$$2_viewportStartTime$$1$$ = $viewportEndTime$$1$$ - $denominator$$2_viewportStartTime$$1$$;
  return 0 == $number$$4_startTime$$6$$ || 0 == $denominator$$2_viewportStartTime$$1$$ ? 0 : $number$$4_startTime$$6$$ / $denominator$$2_viewportStartTime$$1$$
};
D.$DvtOverviewEvent$$ = function $$DvtOverviewEvent$$$($type$$129$$) {
  this.Init("overview");
  this.$_subtype$ = $type$$129$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtOverviewEvent$$, D.$DvtBaseComponentEvent$$, "DvtOverviewEvent");
D.$DvtOverviewEvent$$.prototype.$getSubType$ = (0,D.$JSCompiler_get$$)("$_subtype$");
D.$DvtOverviewEvent$$.prototype.setTime = function $$DvtOverviewEvent$$$$setTime$($time$$11$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)(this, "time", $time$$11$$)
};
D.$DvtOverviewEvent$$.prototype.getTime = function $$DvtOverviewEvent$$$$getTime$() {
  return this.$getParamValue$("time")
};
D.$JSCompiler_StaticMethods_setNewStartTime$$ = function $$JSCompiler_StaticMethods_setNewStartTime$$$($JSCompiler_StaticMethods_setNewStartTime$self$$, $newStartTime$$4$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)($JSCompiler_StaticMethods_setNewStartTime$self$$, "newStartTime", $newStartTime$$4$$)
};
D.$JSCompiler_StaticMethods_setNewEndTime$$ = function $$JSCompiler_StaticMethods_setNewEndTime$$$($JSCompiler_StaticMethods_setNewEndTime$self$$, $newEndTime$$4$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)($JSCompiler_StaticMethods_setNewEndTime$self$$, "newEndTime", $newEndTime$$4$$)
};
D.$DvtOverviewEvent$$.prototype.$setPosition$ = function $$DvtOverviewEvent$$$$$setPosition$$($pos$$56$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)(this, "pos", $pos$$56$$)
};
D.$DvtOverviewEvent$$.prototype.$getPosition$ = function $$DvtOverviewEvent$$$$$getPosition$$() {
  return this.$getParamValue$("pos")
};
});