/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  
  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.$DvtTimeUtils$$ = {$supportsTouch$:function() {
  return(0,D.$DvtAgent$isTouchDevice$$)()
}};
D.$DvtObj$$.$createSubclass$(D.$DvtTimeUtils$$, D.$DvtObj$$, "DvtTimeUtils");
D.$DvtTimeUtils$$.$getDatePosition$ = function $$DvtTimeUtils$$$$getDatePosition$$($denominator$$1_startTime$$4$$, $endTime$$4$$, $number$$2_time$$15$$, $width$$136$$) {
  $number$$2_time$$15$$ = ($number$$2_time$$15$$ - $denominator$$1_startTime$$4$$) * $width$$136$$;
  $denominator$$1_startTime$$4$$ = $endTime$$4$$ - $denominator$$1_startTime$$4$$;
  return 0 == $number$$2_time$$15$$ || 0 == $denominator$$1_startTime$$4$$ ? 0 : $number$$2_time$$15$$ / $denominator$$1_startTime$$4$$
};
D.$DvtTimeUtils$$.$getPositionDate$ = function $$DvtTimeUtils$$$$getPositionDate$$($startTime$$5$$, $endTime$$5_number$$3$$, $pos$$66$$, $width$$137$$) {
  $endTime$$5_number$$3$$ = $pos$$66$$ * ($endTime$$5_number$$3$$ - $startTime$$5$$);
  return 0 == $endTime$$5_number$$3$$ || 0 == $width$$137$$ ? $startTime$$5$$ : $endTime$$5_number$$3$$ / $width$$137$$ + $startTime$$5$$
};
D.$DvtOverview$$ = function $$DvtOverview$$$($context$$468$$, $callback$$126$$, $callbackObj$$77$$) {
  this.Init($context$$468$$, $callback$$126$$, $callbackObj$$77$$)
};
(0,D.$goog$exportPath_$$)("DvtOverview", D.$DvtOverview$$);
D.$DvtObj$$.$createSubclass$(D.$DvtOverview$$, D.$DvtContainer$$, "DvtOverview");
D.$DvtOverview$$.prototype.Init = function $$DvtOverview$$$$Init$($context$$469$$, $callback$$127$$, $callbackObj$$78$$) {
  D.$DvtOverview$$.$superclass$.Init.call(this, $context$$469$$);
  this.$_callback$ = $callback$$127$$;
  this.$_callbackObj$ = $callbackObj$$78$$;
  this.$_lastChildIndex$ = this.$isFlashEnvironment$() ? 7 : 6;
  if(this.$_callback$ != D.$JSCompiler_alias_NULL$$ || this.$_callbackObj$ != D.$JSCompiler_alias_NULL$$) {
    this.$EventManager$ = new D.$DvtOverviewEventManager$$(this), this.$EventManager$.$addListeners$(this), D.$DvtTimeUtils$$.$supportsTouch$() ? (this.$addEvtListener$(D.$DvtTouchEvent$TOUCHSTART$$, this.$HandleTouchStart$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtTouchEvent$TOUCHMOVE$$, this.$HandleTouchMove$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtTouchEvent$TOUCHEND$$, this.$HandleTouchEnd$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, 
    this.$HandleShapeClick$, D.$JSCompiler_alias_FALSE$$, this)) : (this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$HandleShapeMouseOver$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandleShapeMouseOut$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandleShapeClick$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtKeyboardEvent$KEYDOWN$$, this.$HandleKeyDown$, D.$JSCompiler_alias_FALSE$$, 
    this), this.$addEvtListener$(D.$DvtKeyboardEvent$KEYUP$$, this.$HandleKeyUp$, D.$JSCompiler_alias_FALSE$$, this))
  }
  this.$_initPos$ = 0
};
D.$DvtOverview$$.prototype.$setViewportRange$ = function $$DvtOverview$$$$$setViewportRange$$($start$$37_viewportStart$$, $end$$21_size$$39$$, $overviewLength$$) {
  $overviewLength$$ == D.$JSCompiler_alias_NULL$$ && ($overviewLength$$ = this.$Width$);
  $start$$37_viewportStart$$ = this.$getDatePosition$($start$$37_viewportStart$$);
  var $slidingWindow_viewportEnd$$ = this.$getDatePosition$($end$$21_size$$39$$);
  $start$$37_viewportStart$$ < this.$_leftMargin$ || $slidingWindow_viewportEnd$$ > (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)(this) || ($end$$21_size$$39$$ = window.Math.max($slidingWindow_viewportEnd$$ - $start$$37_viewportStart$$, (0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)(this)), 0 < $end$$21_size$$39$$ && (0 <= $start$$37_viewportStart$$ && $slidingWindow_viewportEnd$$ <= $overviewLength$$) && ($slidingWindow_viewportEnd$$ = this.$getChildAt$(1), (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) ? 
  (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, $slidingWindow_viewportEnd$$, $overviewLength$$ - ($start$$37_viewportStart$$ + $end$$21_size$$39$$)) : (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, $slidingWindow_viewportEnd$$, $start$$37_viewportStart$$), (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)(this, $slidingWindow_viewportEnd$$, $end$$21_size$$39$$), (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)(this)))
};
D.$JSCompiler_StaticMethods_isFeatureOff$$ = function $$JSCompiler_StaticMethods_isFeatureOff$$$($JSCompiler_StaticMethods_isFeatureOff$self$$) {
  return $JSCompiler_StaticMethods_isFeatureOff$self$$.$_featuresOff$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_FALSE$$ : -1 != D.$DvtArrayUtils$$.$getIndex$($JSCompiler_StaticMethods_isFeatureOff$self$$.$_featuresOff$, "zoom")
};
D.$DvtOverview$$.prototype.$render$ = function $$DvtOverview$$$$$render$$($interactive$$1_obj$$310_props$$2_renderStart$$inline_7563_renderStartPos$$inline_7568_start$$inline_11251_top$$inline_7536_vertical$$inline_7556$$, $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$, $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$) {
  if($interactive$$1_obj$$310_props$$2_renderStart$$inline_7563_renderStartPos$$inline_7568_start$$inline_11251_top$$inline_7536_vertical$$inline_7556$$ == D.$JSCompiler_alias_NULL$$) {
    var $bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$ = this.$_start$, $end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$ = this.$_end$, $color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$ = 
    this.$getChildAt$(1), $child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$);
    $color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$ != D.$JSCompiler_alias_NULL$$ && 0 != $child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$ && (this.$_renderStart$ = 
    D.$DvtTimeUtils$$.$getPositionDate$($bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$, $end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$, $child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$, 
    this.$Width$));
    this.$removeChildren$()
  }
  $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$ != D.$JSCompiler_alias_NULL$$ && $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$ != D.$JSCompiler_alias_NULL$$ && (this.$Width$ = $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$, this.$Height$ = $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$);
  $interactive$$1_obj$$310_props$$2_renderStart$$inline_7563_renderStartPos$$inline_7568_start$$inline_11251_top$$inline_7536_vertical$$inline_7556$$ && ($interactive$$1_obj$$310_props$$2_renderStart$$inline_7563_renderStartPos$$inline_7568_start$$inline_11251_top$$inline_7536_vertical$$inline_7556$$ = this.$Parse$($interactive$$1_obj$$310_props$$2_renderStart$$inline_7563_renderStartPos$$inline_7568_start$$inline_11251_top$$inline_7536_vertical$$inline_7556$$), this.$_applyParsedProperties$($interactive$$1_obj$$310_props$$2_renderStart$$inline_7563_renderStartPos$$inline_7568_start$$inline_11251_top$$inline_7536_vertical$$inline_7556$$));
  $interactive$$1_obj$$310_props$$2_renderStart$$inline_7563_renderStartPos$$inline_7568_start$$inline_11251_top$$inline_7536_vertical$$inline_7556$$ = this.$_callback$ != D.$JSCompiler_alias_NULL$$ || this.$_callbackObj$ != D.$JSCompiler_alias_NULL$$;
  this.$createBackground$($actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$, $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$);
  if($interactive$$1_obj$$310_props$$2_renderStart$$inline_7563_renderStartPos$$inline_7568_start$$inline_11251_top$$inline_7536_vertical$$inline_7556$$) {
    $end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$ = ($bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$ = this.$isVertical$()) ? new D.$DvtRect$$(this.$getCtx$(), 
    0, 0, $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$, 0, "window") : new D.$DvtRect$$(this.$getCtx$(), 0, 0, 0, $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$, "window");
    $end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$.$setSolidFill$(this.$_windowBackgroundColor$, this.$_windowBackgroundAlpha$);
    (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$);
    if(!(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)(this)) {
      var $handleSize$$inline_7486_maxWidth$$inline_7516_next_time$$inline_7517_rightHandle$$inline_7545_rightHandleBackground$$inline_7493_size$$inline_11243$$ = (0,D.$JSCompiler_StaticMethods_getHandleSize$$)(), $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$ = (0,D.$JSCompiler_StaticMethods_getHandleStart$$)();
      if($bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$) {
        var $handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$ = ($actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$ - 36) / 2, $leftHandle$$inline_7498_leftHandleCmds$$inline_7490_rightCenter$$inline_7543$$ = D.$DvtPathUtils$$.moveTo($handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$, 0) + D.$DvtPathUtils$$.$quadTo$($handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$ + 
        3, 6, $handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$ + 8, 8) + D.$DvtPathUtils$$.lineTo($handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$ + 28, 8) + D.$DvtPathUtils$$.$quadTo$($handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$ + 33, 6, $handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$ + 36, 0);
        D.$DvtPathUtils$$.closePath();
        $child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$ = D.$DvtPathUtils$$.moveTo($handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$, 0) + D.$DvtPathUtils$$.$quadTo$($handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$ + 3, -6, $handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$ + 
        8, -8) + D.$DvtPathUtils$$.lineTo($handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$ + 28, -8) + D.$DvtPathUtils$$.$quadTo$($handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$ + 33, -6, $handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$ + 36, 0);
        D.$DvtPathUtils$$.closePath();
        var $color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$, $handleSize$$inline_7486_maxWidth$$inline_7516_next_time$$inline_7517_rightHandle$$inline_7545_rightHandleBackground$$inline_7493_size$$inline_11243$$, 
        "lhb"), $handleSize$$inline_7486_maxWidth$$inline_7516_next_time$$inline_7517_rightHandle$$inline_7545_rightHandleBackground$$inline_7493_size$$inline_11243$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$, $handleSize$$inline_7486_maxWidth$$inline_7516_next_time$$inline_7517_rightHandle$$inline_7545_rightHandleBackground$$inline_7493_size$$inline_11243$$, 
        "rhb"), $cursor$$inline_7494_leftTopBar$$inline_7546_rangeStart$$inline_11240_rangeStart_pos$$inline_11244$$ = "row-resize";
        if(this.$_handleBackgroundImage$) {
          var $bottomBar$$inline_7548_bottomCenter$$inline_7539_leftGrippy$$inline_7495$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$, 10), $handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$, 
          10)
        }else {
          $bottomBar$$inline_7548_bottomCenter$$inline_7539_leftGrippy$$inline_7495$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, $handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$), $handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, $handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$)
        }
      }else {
        $handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$ = ($height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$ - 36) / 2, $leftHandle$$inline_7498_leftHandleCmds$$inline_7490_rightCenter$$inline_7543$$ = D.$DvtPathUtils$$.moveTo(0, $handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$) + D.$DvtPathUtils$$.$quadTo$(6, $handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$ + 3, 8, $handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$ + 
        8) + D.$DvtPathUtils$$.lineTo(8, $handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$ + 28) + D.$DvtPathUtils$$.$quadTo$(6, $handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$ + 33, 0, $handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$ + 36), D.$DvtPathUtils$$.closePath(), $child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$ = 
        D.$DvtPathUtils$$.moveTo(0, $handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$) + D.$DvtPathUtils$$.$quadTo$(-6, $handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$ + 3, -8, $handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$ + 8) + D.$DvtPathUtils$$.lineTo(-8, $handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$ + 28) + D.$DvtPathUtils$$.$quadTo$(-6, $handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$ + 
        33, 0, $handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$ + 36), D.$DvtPathUtils$$.closePath(), $color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$ = new D.$DvtRect$$(this.$getCtx$(), 0 - $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$, 
        0, $handleSize$$inline_7486_maxWidth$$inline_7516_next_time$$inline_7517_rightHandle$$inline_7545_rightHandleBackground$$inline_7493_size$$inline_11243$$, $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$, "lhb"), $handleSize$$inline_7486_maxWidth$$inline_7516_next_time$$inline_7517_rightHandle$$inline_7545_rightHandleBackground$$inline_7493_size$$inline_11243$$ = new D.$DvtRect$$(this.$getCtx$(), $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$, 
        0, $handleSize$$inline_7486_maxWidth$$inline_7516_next_time$$inline_7517_rightHandle$$inline_7545_rightHandleBackground$$inline_7493_size$$inline_11243$$, $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$, "rhb"), $cursor$$inline_7494_leftTopBar$$inline_7546_rangeStart$$inline_11240_rangeStart_pos$$inline_11244$$ = "col-resize", this.$_handleBackgroundImage$ ? ($bottomBar$$inline_7548_bottomCenter$$inline_7539_leftGrippy$$inline_7495$$ = 
        (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, 10, $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$), $handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, 10, $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$)) : ($bottomBar$$inline_7548_bottomCenter$$inline_7539_leftGrippy$$inline_7495$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, 
        $handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$), $handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, $handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$))
      }
      $color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$.$setSolidFill$(this.$_windowBackgroundColor$, 0);
      $handleSize$$inline_7486_maxWidth$$inline_7516_next_time$$inline_7517_rightHandle$$inline_7545_rightHandleBackground$$inline_7493_size$$inline_11243$$.$setSolidFill$(this.$_windowBackgroundColor$, 0);
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$);
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($handleSize$$inline_7486_maxWidth$$inline_7516_next_time$$inline_7517_rightHandle$$inline_7545_rightHandleBackground$$inline_7493_size$$inline_11243$$);
      $leftHandle$$inline_7498_leftHandleCmds$$inline_7490_rightCenter$$inline_7543$$ = new D.$DvtPath$$(this.$getCtx$(), $leftHandle$$inline_7498_leftHandleCmds$$inline_7490_rightCenter$$inline_7543$$, "lh");
      $child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$ = new D.$DvtPath$$(this.$getCtx$(), $child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$, "rh");
      $leftHandle$$inline_7498_leftHandleCmds$$inline_7490_rightCenter$$inline_7543$$.$setSolidFill$(this.$_handleFillColor$);
      $leftHandle$$inline_7498_leftHandleCmds$$inline_7490_rightCenter$$inline_7543$$.$setSolidStroke$(this.$_handleFillColor$);
      $child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$.$setSolidFill$(this.$_handleFillColor$);
      $child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$.$setSolidStroke$(this.$_handleFillColor$);
      this.$_windowBackgroundColor$ == this.$_handleFillColor$ && ((0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($leftHandle$$inline_7498_leftHandleCmds$$inline_7490_rightCenter$$inline_7543$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$));
      $color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$.setCursor($cursor$$inline_7494_leftTopBar$$inline_7546_rangeStart$$inline_11240_rangeStart_pos$$inline_11244$$);
      $handleSize$$inline_7486_maxWidth$$inline_7516_next_time$$inline_7517_rightHandle$$inline_7545_rightHandleBackground$$inline_7493_size$$inline_11243$$.setCursor($cursor$$inline_7494_leftTopBar$$inline_7546_rangeStart$$inline_11240_rangeStart_pos$$inline_11244$$);
      $leftHandle$$inline_7498_leftHandleCmds$$inline_7490_rightCenter$$inline_7543$$.setCursor($cursor$$inline_7494_leftTopBar$$inline_7546_rangeStart$$inline_11240_rangeStart_pos$$inline_11244$$);
      $child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$.setCursor($cursor$$inline_7494_leftTopBar$$inline_7546_rangeStart$$inline_11240_rangeStart_pos$$inline_11244$$);
      $bottomBar$$inline_7548_bottomCenter$$inline_7539_leftGrippy$$inline_7495$$.setCursor($cursor$$inline_7494_leftTopBar$$inline_7546_rangeStart$$inline_11240_rangeStart_pos$$inline_11244$$);
      $handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$.setCursor($cursor$$inline_7494_leftTopBar$$inline_7546_rangeStart$$inline_11240_rangeStart_pos$$inline_11244$$);
      $end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$.$addChild$($color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$);
      $end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$.$addChild$($leftHandle$$inline_7498_leftHandleCmds$$inline_7490_rightCenter$$inline_7543$$);
      $end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$.$addChild$($bottomBar$$inline_7548_bottomCenter$$inline_7539_leftGrippy$$inline_7495$$);
      $end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$.$addChild$($handleSize$$inline_7486_maxWidth$$inline_7516_next_time$$inline_7517_rightHandle$$inline_7545_rightHandleBackground$$inline_7493_size$$inline_11243$$);
      $end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$.$addChild$($child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$);
      $end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$.$addChild$($handleX$$inline_7489_handleY$$inline_7497_rightGrippy$$inline_7496$$)
    }
    $end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$.setCursor("move");
    this.$addChild$($end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$);
    $end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$ = $bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$ ? this.$isRTL$() ? new D.$DvtLine$$(this.$getCtx$(), 
    this.$getTimeAxisWidth$(), 0, this.$getTimeAxisWidth$(), $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$, "tab") : new D.$DvtLine$$(this.$getCtx$(), $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$ - this.$getTimeAxisWidth$(), 0, $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$ - 
    this.$getTimeAxisWidth$(), $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$, "tab") : "above" == this.$_overviewPosition$ ? new D.$DvtLine$$(this.$getCtx$(), 0, (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)(this), $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$, (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)(this), "tab") : new D.$DvtLine$$(this.$getCtx$(), 
    0, $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$ - (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)(this), $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$, $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$ - (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)(this), "tab");
    $end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$.$setSolidStroke$(this.$_timeAxisBarColor$, this.$_timeAxisBarOpacity$);
    (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$);
    this.$_timeAxisTopBar$ = $end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$;
    this.$addChild$($end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$);
    this.$isLeftAndRightFilterRendered$() && ($bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$ ? ($end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$ = 
    new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$, 0, "lbg"), $color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$, 
    0, "rbg")) : ($end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, 0, $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$, "lbg"), $color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$ = 
    new D.$DvtRect$$(this.$getCtx$(), 0, 0, 0, $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$, "rbg")), $end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$.$setSolidFill$(this.$_leftFilterPanelColor$, this.$_leftFilterPanelAlpha$), this.$addChild$($end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$), 
    $color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$.$setSolidFill$(this.$_rightFilterPanelColor$, this.$_rightFilterPanelAlpha$), this.$addChild$($color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$), 
    D.$DvtTimeUtils$$.$supportsTouch$() && $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$ != D.$JSCompiler_alias_VOID$$ && ((0,D.$JSCompiler_StaticMethods_getHandleStart$$)(), $bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$ ? 
    ($bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$, $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$, 
    "lbgrh"), $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$, $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$, 
    "rbgrh")) : ($bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$, 
    $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$, "lbgrh"), $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$, 
    $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$, "rbgrh")), $bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$.$setSolidFill$(this.$_leftFilterPanelColor$, 0), this.$addChild$($bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$), 
    $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$.$setSolidFill$(this.$_rightFilterPanelColor$, 0), this.$addChild$($actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$)))
  }
  if(this.$_ticks$ != D.$JSCompiler_alias_NULL$$) {
    $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$ = this.$isVertical$();
    $bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this);
    for($end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$ = 0;$end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$ < this.$_ticks$.length;$end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$++) {
      $child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$ = this.$_ticks$[$end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$], $color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$ = 
      (0,window.parseInt)($child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$.$getAttr$("time"), 10), $color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$ = this.$getDatePosition$($color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$), 
      $child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$ = $child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$.$getAttr$("label"), $handleSize$$inline_7486_maxWidth$$inline_7516_next_time$$inline_7517_rightHandle$$inline_7545_rightHandleBackground$$inline_7493_size$$inline_11243$$ = 
      0, $end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$ + 1 < this.$_ticks$.length ? ($handleSize$$inline_7486_maxWidth$$inline_7516_next_time$$inline_7517_rightHandle$$inline_7545_rightHandleBackground$$inline_7493_size$$inline_11243$$ = (0,window.parseInt)(this.$_ticks$[$end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$ + 
      1].$getAttr$("time"), 10), $handleSize$$inline_7486_maxWidth$$inline_7516_next_time$$inline_7517_rightHandle$$inline_7545_rightHandleBackground$$inline_7493_size$$inline_11243$$ = this.$getDatePosition$($handleSize$$inline_7486_maxWidth$$inline_7516_next_time$$inline_7517_rightHandle$$inline_7545_rightHandleBackground$$inline_7493_size$$inline_11243$$) - $color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$) : 
      $handleSize$$inline_7486_maxWidth$$inline_7516_next_time$$inline_7517_rightHandle$$inline_7545_rightHandleBackground$$inline_7493_size$$inline_11243$$ = $bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$ - $color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$, 
      (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) && ($color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$ = $bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$ - 
      $color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$), $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$ && ($handleSize$$inline_7486_maxWidth$$inline_7516_next_time$$inline_7517_rightHandle$$inline_7545_rightHandleBackground$$inline_7493_size$$inline_11243$$ = 
      this.$Width$), $handleSize$$inline_7486_maxWidth$$inline_7516_next_time$$inline_7517_rightHandle$$inline_7545_rightHandleBackground$$inline_7493_size$$inline_11243$$ -= 10, this.$addTick$($color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$, $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$, 
      $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$, "tick" + $end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$), this.$addLabel$($color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$, 
      $child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$, $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$, $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$, $handleSize$$inline_7486_maxWidth$$inline_7516_next_time$$inline_7517_rightHandle$$inline_7545_rightHandleBackground$$inline_7493_size$$inline_11243$$, 
      "label" + $end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$)
    }
  }
  if(this.$_formattedTimeRanges$ != D.$JSCompiler_alias_NULL$$) {
    for($actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$ = 0;$actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$ < 
    this.$_formattedTimeRanges$.length;$actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$++) {
      $color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$ = this.$_formattedTimeRanges$[$actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$], 
      $bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$ = $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$, $end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$ = 
      $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$, $cursor$$inline_7494_leftTopBar$$inline_7546_rangeStart$$inline_11240_rangeStart_pos$$inline_11244$$ = (0,window.parseInt)($color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$.$getAttr$("rs"), 10), $child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$ = 
      (0,window.parseInt)($color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$.$getAttr$("re"), 10), $color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$ = $color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$.$getAttr$("c"), 
      $cursor$$inline_7494_leftTopBar$$inline_7546_rangeStart$$inline_11240_rangeStart_pos$$inline_11244$$ != D.$JSCompiler_alias_NULL$$ && $child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$ != D.$JSCompiler_alias_NULL$$ && ($handleSize$$inline_7486_maxWidth$$inline_7516_next_time$$inline_7517_rightHandle$$inline_7545_rightHandleBackground$$inline_7493_size$$inline_11243$$ = 
      (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this), $cursor$$inline_7494_leftTopBar$$inline_7546_rangeStart$$inline_11240_rangeStart_pos$$inline_11244$$ = this.$getDatePosition$($cursor$$inline_7494_leftTopBar$$inline_7546_rangeStart$$inline_11240_rangeStart_pos$$inline_11244$$), $child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$ = 
      this.$getDatePosition$($child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$) - $cursor$$inline_7494_leftTopBar$$inline_7546_rangeStart$$inline_11240_rangeStart_pos$$inline_11244$$, (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) && ($cursor$$inline_7494_leftTopBar$$inline_7546_rangeStart$$inline_11240_rangeStart_pos$$inline_11244$$ = 
      $handleSize$$inline_7486_maxWidth$$inline_7516_next_time$$inline_7517_rightHandle$$inline_7545_rightHandleBackground$$inline_7493_size$$inline_11243$$ - $cursor$$inline_7494_leftTopBar$$inline_7546_rangeStart$$inline_11240_rangeStart_pos$$inline_11244$$ - $child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$), $bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$ = 
      this.$isVertical$() ? new D.$DvtRect$$(this.$getCtx$(), 0, $cursor$$inline_7494_leftTopBar$$inline_7546_rangeStart$$inline_11240_rangeStart_pos$$inline_11244$$, $bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$ - this.$getTimeAxisWidth$(), $child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$, 
      "ftr") : new D.$DvtRect$$(this.$getCtx$(), $cursor$$inline_7494_leftTopBar$$inline_7546_rangeStart$$inline_11240_rangeStart_pos$$inline_11244$$, "above" == this.$_overviewPosition$ ? (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)(this) : 0, $child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$, $end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$ - 
      (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)(this), "ftr"), $color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$ != D.$JSCompiler_alias_NULL$$ && $bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$.$setSolidFill$($color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$, 
      0.4), $bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$.setCursor("move"), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$), 
      this.$addChild$($bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$))
    }
  }
  this.$_currentTime$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)(this.$_currentTime$) || ($actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$ = this.$getDatePosition$(this.$_currentTime$), this.$isVertical$() ? $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$ = 
  new D.$DvtLine$$(this.$getCtx$(), 0, $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$, $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$, $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$, 
  "ocd") : (this.$isRTL$() && ($actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$ = $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$ - $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$), 
  $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$ = new D.$DvtLine$$(this.$getCtx$(), $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$, 
  0, $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$, $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$, "ocd")), $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$.$setSolidStroke$(this.$_currentTimeIndicatorColor$), 
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$), this.$addChild$($actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$));
  this.$parseDataXML$($actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$, $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$);
  $interactive$$1_obj$$310_props$$2_renderStart$$inline_7563_renderStartPos$$inline_7568_start$$inline_11251_top$$inline_7536_vertical$$inline_7556$$ && ($child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$ = this.$getChildAt$(1), this.$isVertical$() ? ($interactive$$1_obj$$310_props$$2_renderStart$$inline_7563_renderStartPos$$inline_7568_start$$inline_11251_top$$inline_7536_vertical$$inline_7556$$ = 
  $child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$.$getY$(), $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$ = $interactive$$1_obj$$310_props$$2_renderStart$$inline_7563_renderStartPos$$inline_7568_start$$inline_11251_top$$inline_7536_vertical$$inline_7556$$ + 
  0.5, $bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$ = $interactive$$1_obj$$310_props$$2_renderStart$$inline_7563_renderStartPos$$inline_7568_start$$inline_11251_top$$inline_7536_vertical$$inline_7556$$ + $child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$.getHeight(), 
  $bottomBar$$inline_7548_bottomCenter$$inline_7539_leftGrippy$$inline_7495$$ = $bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$ - 0.5, $end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$ = 
  0, $color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$ = 0.5, $leftHandle$$inline_7498_leftHandleCmds$$inline_7490_rightCenter$$inline_7543$$ = $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$ - 0.5, $child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$ = 
  new D.$DvtLine$$(this.$getCtx$(), $end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$, $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$, $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$, 
  $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$, "lh"), $handleSize$$inline_7486_maxWidth$$inline_7516_next_time$$inline_7517_rightHandle$$inline_7545_rightHandleBackground$$inline_7493_size$$inline_11243$$ = new D.$DvtLine$$(this.$getCtx$(), $end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$, 
  $bottomBar$$inline_7548_bottomCenter$$inline_7539_leftGrippy$$inline_7495$$, $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$, $bottomBar$$inline_7548_bottomCenter$$inline_7539_leftGrippy$$inline_7495$$, "rh"), $cursor$$inline_7494_leftTopBar$$inline_7546_rangeStart$$inline_11240_rangeStart_pos$$inline_11244$$ = new D.$DvtLine$$(this.$getCtx$(), $color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$, 
  0, $color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$, $interactive$$1_obj$$310_props$$2_renderStart$$inline_7563_renderStartPos$$inline_7568_start$$inline_11251_top$$inline_7536_vertical$$inline_7556$$, "ltb"), $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$ = 
  new D.$DvtLine$$(this.$getCtx$(), $color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$, $bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$, $color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$, 
  $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$, "rtb"), $bottomBar$$inline_7548_bottomCenter$$inline_7539_leftGrippy$$inline_7495$$ = new D.$DvtLine$$(this.$getCtx$(), $leftHandle$$inline_7498_leftHandleCmds$$inline_7490_rightCenter$$inline_7543$$, $interactive$$1_obj$$310_props$$2_renderStart$$inline_7563_renderStartPos$$inline_7568_start$$inline_11251_top$$inline_7536_vertical$$inline_7556$$, $leftHandle$$inline_7498_leftHandleCmds$$inline_7490_rightCenter$$inline_7543$$, 
  $bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$, "bb"), $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$ = new D.$DvtLine$$(this.$getCtx$(), $color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$, 
  $interactive$$1_obj$$310_props$$2_renderStart$$inline_7563_renderStartPos$$inline_7568_start$$inline_11251_top$$inline_7536_vertical$$inline_7556$$, $color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$, $bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$, 
  "tb")) : ($interactive$$1_obj$$310_props$$2_renderStart$$inline_7563_renderStartPos$$inline_7568_start$$inline_11251_top$$inline_7536_vertical$$inline_7556$$ = 0, $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$ = $interactive$$1_obj$$310_props$$2_renderStart$$inline_7563_renderStartPos$$inline_7568_start$$inline_11251_top$$inline_7536_vertical$$inline_7556$$ + 
  0.5, $bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$ = $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$, $bottomBar$$inline_7548_bottomCenter$$inline_7539_leftGrippy$$inline_7495$$ = $bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$ - 
  0.5, $end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$ = $child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$.$getX$(), $color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$ = 
  $end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$ + 0.5, $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$ = $end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$ + 
  $child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$.getWidth(), $leftHandle$$inline_7498_leftHandleCmds$$inline_7490_rightCenter$$inline_7543$$ = $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$ - 0.5, $child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$ = 
  new D.$DvtLine$$(this.$getCtx$(), $color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$, $interactive$$1_obj$$310_props$$2_renderStart$$inline_7563_renderStartPos$$inline_7568_start$$inline_11251_top$$inline_7536_vertical$$inline_7556$$, $color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$, 
  $bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$, "lh"), $handleSize$$inline_7486_maxWidth$$inline_7516_next_time$$inline_7517_rightHandle$$inline_7545_rightHandleBackground$$inline_7493_size$$inline_11243$$ = new D.$DvtLine$$(this.$getCtx$(), $leftHandle$$inline_7498_leftHandleCmds$$inline_7490_rightCenter$$inline_7543$$, 
  $interactive$$1_obj$$310_props$$2_renderStart$$inline_7563_renderStartPos$$inline_7568_start$$inline_11251_top$$inline_7536_vertical$$inline_7556$$, $leftHandle$$inline_7498_leftHandleCmds$$inline_7490_rightCenter$$inline_7543$$, $bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$, "rh"), $cursor$$inline_7494_leftTopBar$$inline_7546_rangeStart$$inline_11240_rangeStart_pos$$inline_11244$$ = 
  new D.$DvtLine$$(this.$getCtx$(), 0, $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$, $end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$ + 
  1, $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$, "ltb"), $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$ = new D.$DvtLine$$(this.$getCtx$(), $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$ - 
  1, $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$, $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$, $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$, 
  "rtb"), $bottomBar$$inline_7548_bottomCenter$$inline_7539_leftGrippy$$inline_7495$$ = new D.$DvtLine$$(this.$getCtx$(), $end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$, $bottomBar$$inline_7548_bottomCenter$$inline_7539_leftGrippy$$inline_7495$$, $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$, 
  $bottomBar$$inline_7548_bottomCenter$$inline_7539_leftGrippy$$inline_7495$$, "bb"), $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$ = new D.$DvtLine$$(this.$getCtx$(), $end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$, $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$, 
  $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$, $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$, "tb")), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$), 
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($handleSize$$inline_7486_maxWidth$$inline_7516_next_time$$inline_7517_rightHandle$$inline_7545_rightHandleBackground$$inline_7493_size$$inline_11243$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($cursor$$inline_7494_leftTopBar$$inline_7546_rangeStart$$inline_11240_rangeStart_pos$$inline_11244$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$), 
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($bottomBar$$inline_7548_bottomCenter$$inline_7539_leftGrippy$$inline_7495$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$), "none" != this.$_windowBorderLeftStyle$ && $child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$.$setSolidStroke$(this.$_windowBorderLeftColor$), 
  this.$addChild$($child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$), "none" != this.$_windowBorderRightStyle$ && $handleSize$$inline_7486_maxWidth$$inline_7516_next_time$$inline_7517_rightHandle$$inline_7545_rightHandleBackground$$inline_7493_size$$inline_11243$$.$setSolidStroke$(this.$_windowBorderRightColor$), this.$addChild$($handleSize$$inline_7486_maxWidth$$inline_7516_next_time$$inline_7517_rightHandle$$inline_7545_rightHandleBackground$$inline_7493_size$$inline_11243$$), 
  "none" != this.$_borderTopStyle$ && this.$_borderTopColor$ && ($cursor$$inline_7494_leftTopBar$$inline_7546_rangeStart$$inline_11240_rangeStart_pos$$inline_11244$$.$setSolidStroke$(this.$_borderTopColor$), $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$.$setSolidStroke$(this.$_borderTopColor$)), this.$addChild$($cursor$$inline_7494_leftTopBar$$inline_7546_rangeStart$$inline_11240_rangeStart_pos$$inline_11244$$), 
  this.$addChild$($actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$), "none" != this.$_windowBorderBottomStyle$ && $bottomBar$$inline_7548_bottomCenter$$inline_7539_leftGrippy$$inline_7495$$.$setSolidStroke$(this.$_windowBorderBottomColor$), this.$addChild$($bottomBar$$inline_7548_bottomCenter$$inline_7539_leftGrippy$$inline_7495$$), "none" != this.$_windowBorderTopStyle$ && $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$.$setSolidStroke$(this.$_windowBorderTopColor$), 
  this.$addChild$($height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$), this.$isFlashEnvironment$() && ($actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$ = this.$isVertical$() ? D.$DvtPathUtils$$.moveTo(6, 0) + D.$DvtPathUtils$$.lineTo(0, 5) + D.$DvtPathUtils$$.lineTo(5, 5) + D.$DvtPathUtils$$.lineTo(5, 17) + D.$DvtPathUtils$$.lineTo(0, 17) + D.$DvtPathUtils$$.lineTo(6, 
  22) + D.$DvtPathUtils$$.lineTo(12, 17) + D.$DvtPathUtils$$.lineTo(7, 17) + D.$DvtPathUtils$$.lineTo(7, 5) + D.$DvtPathUtils$$.lineTo(12, 5) + D.$DvtPathUtils$$.closePath() : D.$DvtPathUtils$$.moveTo(5, 0) + D.$DvtPathUtils$$.lineTo(0, 6) + D.$DvtPathUtils$$.lineTo(5, 12) + D.$DvtPathUtils$$.lineTo(5, 7) + D.$DvtPathUtils$$.lineTo(17, 7) + D.$DvtPathUtils$$.lineTo(17, 12) + D.$DvtPathUtils$$.lineTo(22, 6) + D.$DvtPathUtils$$.lineTo(17, 0) + D.$DvtPathUtils$$.lineTo(17, 4) + D.$DvtPathUtils$$.lineTo(5, 
  4) + D.$DvtPathUtils$$.lineTo(5, 0) + D.$DvtPathUtils$$.closePath(), $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$ = new D.$DvtPath$$(this.$getCtx$(), $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$, "arr"), $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$.$setSolidFill$("#ffffff"), 
  $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$.$setSolidStroke$("#000000"), $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$.$setVisible$(D.$JSCompiler_alias_FALSE$$), this.$addChild$($actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$), 
  this.$_resizeArrow$ = $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$), $interactive$$1_obj$$310_props$$2_renderStart$$inline_7563_renderStartPos$$inline_7568_start$$inline_11251_top$$inline_7536_vertical$$inline_7556$$ = this.$isVertical$(), $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$ = this.$getChildAt$(1), $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$ = 
  (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this), $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$ = $interactive$$1_obj$$310_props$$2_renderStart$$inline_7563_renderStartPos$$inline_7568_start$$inline_11251_top$$inline_7536_vertical$$inline_7556$$ ? this.$Height$ : this.$Width$, $end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$ = 
  this.$_width$, $color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$ = this.$_start$, $child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$ = this.$_end$, $interactive$$1_obj$$310_props$$2_renderStart$$inline_7563_renderStartPos$$inline_7568_start$$inline_11251_top$$inline_7536_vertical$$inline_7556$$ = 
  this.$_renderStart$, $bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$ = D.$DvtTimeUtils$$.$getPositionDate$($color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$, 
  $child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$, 0, $end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$), $end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$ = 
  D.$DvtTimeUtils$$.$getPositionDate$($color$$inline_11242_elem$$inline_11237_leftCenter$$inline_7541_leftHandleBackground$$inline_7492_rightBackground$$inline_7502_slidingWindow$$1_start$$inline_7561_time$$inline_7513_time_pos$$inline_7514$$, $child$$inline_7512_end$$inline_7562_label$$inline_7515_leftHandle$$inline_7544_rangeEnd$$inline_11241_rangeWidth$$inline_11245_rightHandle$$inline_7499_rightHandleCmds$$inline_7491_slidingWindow$$inline_7535_slidingWindowPos$$, $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$, 
  $end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$), $bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$ = this.$getDatePosition$($bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$), 
  $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$ = window.Math.min($actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$, 
  this.$getDatePosition$($end$$22_height$$inline_11239_i$$inline_7511_left$$inline_7540_leftBackground$$inline_7501_rangeEndTime$$inline_7565_slidingWindow$$inline_7485_timeAxisTopBar$$inline_7500_timelineWidth$$inline_7560$$)), $interactive$$1_obj$$310_props$$2_renderStart$$inline_7563_renderStartPos$$inline_7568_start$$inline_11251_top$$inline_7536_vertical$$inline_7556$$ = this.$getDatePosition$($interactive$$1_obj$$310_props$$2_renderStart$$inline_7563_renderStartPos$$inline_7568_start$$inline_11251_top$$inline_7536_vertical$$inline_7556$$), 
  $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$ -= $bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$, 
  (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) ? (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$, $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$ - $interactive$$1_obj$$310_props$$2_renderStart$$inline_7563_renderStartPos$$inline_7568_start$$inline_11251_top$$inline_7536_vertical$$inline_7556$$ - 
  $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$) : (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$, $interactive$$1_obj$$310_props$$2_renderStart$$inline_7563_renderStartPos$$inline_7568_start$$inline_11251_top$$inline_7536_vertical$$inline_7556$$), 
  (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)(this, $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$, $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$), (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)(this), $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$ = 
  this.$_width$, $interactive$$1_obj$$310_props$$2_renderStart$$inline_7563_renderStartPos$$inline_7568_start$$inline_11251_top$$inline_7536_vertical$$inline_7556$$ = this.$_start$, $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$ = this.$_end$, $bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$ = 
  D.$DvtTimeUtils$$.$getPositionDate$($interactive$$1_obj$$310_props$$2_renderStart$$inline_7563_renderStartPos$$inline_7568_start$$inline_11251_top$$inline_7536_vertical$$inline_7556$$, $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$, 1, $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$), 
  $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$ = D.$DvtTimeUtils$$.$getPositionDate$($interactive$$1_obj$$310_props$$2_renderStart$$inline_7563_renderStartPos$$inline_7568_start$$inline_11251_top$$inline_7536_vertical$$inline_7556$$, $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$, 
  2, $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$), $bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$ = D.$DvtTimeUtils$$.$getDatePosition$($interactive$$1_obj$$310_props$$2_renderStart$$inline_7563_renderStartPos$$inline_7568_start$$inline_11251_top$$inline_7536_vertical$$inline_7556$$, 
  $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$, $bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$, 
  $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$), this.$_increment$ = D.$DvtTimeUtils$$.$getDatePosition$($interactive$$1_obj$$310_props$$2_renderStart$$inline_7563_renderStartPos$$inline_7568_start$$inline_11251_top$$inline_7536_vertical$$inline_7556$$, $actualSize$$inline_7559_end$$inline_11252_handleStart$$inline_7487_i$$inline_7524_line$$inline_7530_newWidth$$inline_7569_rangeEndPos$$inline_7567_rightBackgroundResizeHandle$$inline_7504_time_pos$$inline_7529_topCenter$$inline_7537_vertical$$inline_7509$$, 
  $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$, $height$$111_right$$inline_7542_timelineWidth$$inline_11250_topBar$$inline_7549_window$$inline_7557$$) - $bottom$$inline_7538_day1$$inline_11253_displayable$$inline_11246_leftBackgroundResizeHandle$$inline_7503_pos1$$inline_11255_rangeStartPos$$inline_7566_rangeStartTime$$inline_7564_size$$inline_7510_start$$38_vertical$$inline_7484_width$$inline_11238$$);
  this.$_initialFocusTime$ != D.$JSCompiler_alias_NULL$$ && (this.$_initPos$ = window.Math.max(0, D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, this.$_initialFocusTime$, this.$_width$)));
  0 < this.$_initPos$ && ($actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$ = this.$_initPos$ / this.$_increment$, (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) && ($actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$ = 0 - $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$), 
  (0,D.$JSCompiler_StaticMethods_animateSlidingWindow$$)(this, $actualAmount$$inline_7573_arrow$$inline_7553_arrowCmds$$inline_7552_day2$$inline_11254_rightTopBar$$inline_7547_size$$inline_7558_width$$122$$))
};
D.$DvtOverview$$.prototype.render = D.$DvtOverview$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtOverview$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getParser$ = function $$JSCompiler_prototypeAlias$$$$getParser$$() {
  return new D.$DvtOverviewParser$$(this)
};
D.$JSCompiler_prototypeAlias$$.$Parse$ = function $$JSCompiler_prototypeAlias$$$$Parse$$($obj$$312$$) {
  return this.$getParser$($obj$$312$$).parse($obj$$312$$)
};
D.$JSCompiler_prototypeAlias$$.$_applyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$_applyParsedProperties$$($props$$3$$) {
  this.$_start$ = $props$$3$$.start;
  this.$_end$ = $props$$3$$.end;
  this.$_width$ = $props$$3$$.width;
  this.$_renderStart$ = $props$$3$$.$renderStart$;
  this.$_currentTime$ = $props$$3$$.currentTime;
  this.$_initialFocusTime$ = $props$$3$$.$initialFocusTime$;
  this.$_animationOnClick$ = $props$$3$$.$animationOnClick$;
  this.$_leftMargin$ = window.Math.max(0, $props$$3$$.$leftMargin$);
  this.$_rightMargin$ = window.Math.max(0, $props$$3$$.$rightMargin$);
  (0,window.isNaN)(this.$_leftMargin$) && (this.$_leftMargin$ = 0);
  (0,window.isNaN)(this.$_rightMargin$) && (this.$_rightMargin$ = 0);
  this.$_orientation$ = $props$$3$$.orientation;
  this.$_overviewPosition$ = $props$$3$$.$overviewPosition$;
  this.$_isRtl$ = $props$$3$$.$isRtl$;
  $props$$3$$.$featuresOff$ != D.$JSCompiler_alias_NULL$$ && (this.$_featuresOff$ = $props$$3$$.$featuresOff$.split(" "));
  $props$$3$$.$minimumWindowSize$ != D.$JSCompiler_alias_NULL$$ && 0 < $props$$3$$.$minimumWindowSize$ && (this.$_minimumWindowSize$ = $props$$3$$.$minimumWindowSize$);
  this.$_borderStyles$ = $props$$3$$.$borderStyles$;
  this.$_timeAxisInfo$ = $props$$3$$.$timeAxisInfo$;
  $props$$3$$.$timeAxisInfo$ != D.$JSCompiler_alias_NULL$$ && (this.$_ticks$ = this.$_timeAxisInfo$.$ticks$);
  this.$_formattedTimeRanges$ = $props$$3$$.$formattedTimeRanges$;
  this.$_borderTopStyle$ = $props$$3$$.borderTopStyle;
  this.$_borderTopColor$ = $props$$3$$.borderTopColor;
  this.$_windowBackgroundColor$ = $props$$3$$.$windowBackgroundColor$;
  this.$_windowBackgroundAlpha$ = $props$$3$$.$windowBackgroundAlpha$;
  this.$_windowBorderTopStyle$ = $props$$3$$.$windowBorderTopStyle$;
  this.$_windowBorderRightStyle$ = $props$$3$$.$windowBorderRightStyle$;
  this.$_windowBorderBottomStyle$ = $props$$3$$.$windowBorderBottomStyle$;
  this.$_windowBorderLeftStyle$ = $props$$3$$.$windowBorderLeftStyle$;
  this.$_windowBorderTopColor$ = $props$$3$$.$windowBorderTopColor$;
  this.$_windowBorderRightColor$ = $props$$3$$.$windowBorderRightColor$;
  this.$_windowBorderBottomColor$ = $props$$3$$.$windowBorderBottomColor$;
  this.$_windowBorderLeftColor$ = $props$$3$$.$windowBorderLeftColor$;
  this.$_handleTextureColor$ = $props$$3$$.$handleTextureColor$;
  this.$_handleFillColor$ = $props$$3$$.$handleFillColor$;
  this.$_handleBackgroundImage$ = $props$$3$$.$handleBackgroundImage$;
  this.$_handleWidth$ = $props$$3$$.$handleWidth$;
  this.$_handleHeight$ = $props$$3$$.$handleHeight$;
  this.$_overviewBackgroundColor$ = $props$$3$$.$overviewBackgroundColor$;
  this.$_currentTimeIndicatorColor$ = $props$$3$$.$currentTimeIndicatorColor$;
  this.$_timeIndicatorColor$ = $props$$3$$.$timeIndicatorColor$;
  this.$_timeAxisBarColor$ = $props$$3$$.$timeAxisBarColor$;
  this.$_timeAxisBarOpacity$ = $props$$3$$.$timeAxisBarOpacity$;
  this.$_leftFilterPanelColor$ = $props$$3$$.$leftFilterPanelColor$;
  this.$_leftFilterPanelAlpha$ = $props$$3$$.$leftFilterPanelAlpha$;
  this.$_rightFilterPanelColor$ = $props$$3$$.$rightFilterPanelColor$;
  this.$_rightFilterPanelAlpha$ = $props$$3$$.$rightFilterPanelAlpha$
};
D.$JSCompiler_prototypeAlias$$.$getDatePosition$ = function $$JSCompiler_prototypeAlias$$$$getDatePosition$$($date$$10$$) {
  return window.Math.max(0, D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $date$$10$$, (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this))) + this.$_leftMargin$
};
D.$JSCompiler_prototypeAlias$$.$getPositionDate$ = function $$JSCompiler_prototypeAlias$$$$getPositionDate$$($pos$$55$$) {
  return D.$DvtTimeUtils$$.$getPositionDate$(this.$_start$, this.$_end$, window.Math.max(0, $pos$$55$$ - this.$_leftMargin$), (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this))
};
D.$JSCompiler_prototypeAlias$$.$isRTL$ = function $$JSCompiler_prototypeAlias$$$$isRTL$$() {
  return"true" == this.$_isRtl$
};
D.$JSCompiler_StaticMethods_isHorizontalRTL$$ = function $$JSCompiler_StaticMethods_isHorizontalRTL$$$($JSCompiler_StaticMethods_isHorizontalRTL$self$$) {
  return $JSCompiler_StaticMethods_isHorizontalRTL$self$$.$isRTL$() && !$JSCompiler_StaticMethods_isHorizontalRTL$self$$.$isVertical$()
};
D.$DvtOverview$$.prototype.$isVertical$ = function $$DvtOverview$$$$$isVertical$$() {
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
D.$JSCompiler_StaticMethods_isHandle$$ = function $$JSCompiler_StaticMethods_isHandle$$$($drawable$$) {
  var $id$$244$$ = $drawable$$.getId();
  return"lh" == $id$$244$$ || "rh" == $id$$244$$ || "lhb" == $id$$244$$ || "rhb" == $id$$244$$ || "grpy" == $id$$244$$ || "lbgrh" == $id$$244$$ || "rbgrh" == $id$$244$$ || $drawable$$.getParent() != D.$JSCompiler_alias_NULL$$ && "grpy" == $drawable$$.getParent().getId()
};
D.$DvtOverview$$.prototype.$getTimeAxisWidth$ = function $$DvtOverview$$$$$getTimeAxisWidth$$() {
  if(this.$_timeAxisInfo$ == D.$JSCompiler_alias_NULL$$) {
    return 0
  }
  if(this.$_timeAxisWidth$ == D.$JSCompiler_alias_NULL$$) {
    var $width$$123$$ = (0,window.parseInt)(this.$_timeAxisInfo$.width, 10);
    this.$_timeAxisWidth$ = !(0,window.isNaN)($width$$123$$) && $width$$123$$ < this.$Width$ ? $width$$123$$ : 40
  }
  return this.$_timeAxisWidth$
};
D.$JSCompiler_StaticMethods_getTimeAxisHeight$$ = function $$JSCompiler_StaticMethods_getTimeAxisHeight$$$($JSCompiler_StaticMethods_getTimeAxisHeight$self$$) {
  if($JSCompiler_StaticMethods_getTimeAxisHeight$self$$.$_timeAxisInfo$ == D.$JSCompiler_alias_NULL$$) {
    return 0
  }
  if($JSCompiler_StaticMethods_getTimeAxisHeight$self$$.$_timeAxisHeight$ == D.$JSCompiler_alias_NULL$$) {
    var $height$$112$$ = (0,window.parseInt)($JSCompiler_StaticMethods_getTimeAxisHeight$self$$.$_timeAxisInfo$.height, 10);
    $JSCompiler_StaticMethods_getTimeAxisHeight$self$$.$_timeAxisHeight$ = !(0,window.isNaN)($height$$112$$) && $height$$112$$ < $JSCompiler_StaticMethods_getTimeAxisHeight$self$$.$Height$ ? $height$$112$$ : 20
  }
  return $JSCompiler_StaticMethods_getTimeAxisHeight$self$$.$_timeAxisHeight$
};
D.$JSCompiler_StaticMethods_getPageX$$ = function $$JSCompiler_StaticMethods_getPageX$$$($event$$598$$) {
  return D.$DvtTimeUtils$$.$supportsTouch$() && $event$$598$$.targetTouches != D.$JSCompiler_alias_NULL$$ ? 0 < $event$$598$$.targetTouches.length ? $event$$598$$.targetTouches[0].pageX : D.$JSCompiler_alias_NULL$$ : $event$$598$$.pageX
};
D.$JSCompiler_StaticMethods_getPageY$$ = function $$JSCompiler_StaticMethods_getPageY$$$($event$$599$$) {
  return D.$DvtTimeUtils$$.$supportsTouch$() && $event$$599$$.targetTouches != D.$JSCompiler_alias_NULL$$ ? 0 < $event$$599$$.targetTouches.length ? $event$$599$$.targetTouches[0].pageY : D.$JSCompiler_alias_NULL$$ : $event$$599$$.pageY
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
D.$JSCompiler_StaticMethods_getRightHandle$$ = function $$JSCompiler_StaticMethods_getRightHandle$$$($JSCompiler_StaticMethods_getRightHandle$self$$) {
  return $JSCompiler_StaticMethods_getRightHandle$self$$.$getChildAt$($JSCompiler_StaticMethods_getRightHandle$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_getRightHandle$self$$.$_lastChildIndex$ - 1))
};
D.$JSCompiler_StaticMethods_setLinePos$$ = function $$JSCompiler_StaticMethods_setLinePos$$$($JSCompiler_StaticMethods_setLinePos$self$$, $line$$12$$, $pos1$$1$$, $pos2$$1$$) {
  $JSCompiler_StaticMethods_setLinePos$self$$.$isVertical$() ? (-1 != $pos1$$1$$ && $line$$12$$.$setY1$($pos1$$1$$), -1 != $pos2$$1$$ && $line$$12$$.$setY2$($pos2$$1$$)) : (-1 != $pos1$$1$$ && $line$$12$$.$setX1$($pos1$$1$$), -1 != $pos2$$1$$ && $line$$12$$.$setX2$($pos2$$1$$))
};
D.$JSCompiler_StaticMethods_getLinePos1$$ = function $$JSCompiler_StaticMethods_getLinePos1$$$($JSCompiler_StaticMethods_getLinePos1$self$$, $line$$13$$) {
  return $JSCompiler_StaticMethods_getLinePos1$self$$.$isVertical$() ? $line$$13$$.$getY1$() : $line$$13$$.$getX1$()
};
D.$DvtOverview$$.prototype.$_findDrawable$ = function $$DvtOverview$$$$$_findDrawable$$($event$$600_target$$120$$) {
  $event$$600_target$$120$$ = $event$$600_target$$120$$.target;
  if($event$$600_target$$120$$ != D.$JSCompiler_alias_NULL$$) {
    var $id$$245$$ = $event$$600_target$$120$$.getId();
    if($id$$245$$ == D.$JSCompiler_alias_NULL$$) {
      return D.$JSCompiler_alias_NULL$$
    }
    if("_border" == $id$$245$$.substr($id$$245$$.length - 7)) {
      return this.$getChildAfter$($event$$600_target$$120$$)
    }
    if("tick" != $id$$245$$.substr(0, 4) && "ltb" != $id$$245$$ && "rtb" != $id$$245$$ && "bb" != $id$$245$$ && "tab" != $id$$245$$) {
      return $event$$600_target$$120$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_isMovable$$ = function $$JSCompiler_StaticMethods_isMovable$$$($drawable$$1$$) {
  return"window" == $drawable$$1$$.getId() || "ftr" == $drawable$$1$$.getId() || "sta" == $drawable$$1$$.getId() || (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$1$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$DvtOverview$$.prototype.$isFlashEnvironment$ = function $$DvtOverview$$$$$isFlashEnvironment$$() {
  return window && window.$isFlashEnvironment$
};
D.$DvtOverview$$.prototype.$createBackground$ = function $$DvtOverview$$$$$createBackground$$($width$$124$$, $height$$113$$) {
  var $background$$13$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $width$$124$$, $height$$113$$, "bg");
  $background$$13$$.$setSolidFill$(this.$_overviewBackgroundColor$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($background$$13$$);
  this.$addChild$($background$$13$$);
  return $background$$13$$
};
D.$JSCompiler_StaticMethods_createGrippyImage$$ = function $$JSCompiler_StaticMethods_createGrippyImage$$$($JSCompiler_StaticMethods_createGrippyImage$self_grippy$$, $width$$126$$, $height$$115$$) {
  $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$ = new D.$DvtImage$$($JSCompiler_StaticMethods_createGrippyImage$self_grippy$$.$getCtx$(), $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$.$_handleBackgroundImage$, ($width$$126$$ - $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$.$_handleWidth$) / 2, ($height$$115$$ - $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$.$_handleHeight$) / 2, $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$.$_handleWidth$, 
  $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$.$_handleHeight$, "grpy");
  $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  return $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$
};
D.$JSCompiler_StaticMethods_createGrippy$$ = function $$JSCompiler_StaticMethods_createGrippy$$$($JSCompiler_StaticMethods_createGrippy$self$$, $handlePos$$) {
  var $grippy$$1$$ = new D.$DvtContainer$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), "grpy"), $color$$77$$ = $JSCompiler_StaticMethods_createGrippy$self$$.$_handleTextureColor$;
  if($JSCompiler_StaticMethods_createGrippy$self$$.$isVertical$()) {
    for(var $startx$$2$$ = 8 + $handlePos$$, $starty$$1$$ = 3, $i$$747$$ = 0;9 > $i$$747$$;$i$$747$$++) {
      var $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$ + 2 * $i$$747$$, $starty$$1$$, $startx$$2$$ + 2 * $i$$747$$ + 1, $starty$$1$$, "dot1" + $i$$747$$);
      $dot$$.$setSolidStroke$($color$$77$$);
      $grippy$$1$$.$addChild$($dot$$);
      $starty$$1$$ += 2;
      $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$ + 1 + 2 * $i$$747$$, $starty$$1$$, $startx$$2$$ + 1 + 2 * $i$$747$$ + 1, $starty$$1$$, "dot2" + $i$$747$$);
      $dot$$.$setSolidStroke$($color$$77$$);
      $grippy$$1$$.$addChild$($dot$$);
      $starty$$1$$ += 2;
      $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$ + 2 * $i$$747$$, $starty$$1$$, $startx$$2$$ + 2 * $i$$747$$ + 1, $starty$$1$$, "dot3" + $i$$747$$);
      $dot$$.$setSolidStroke$($color$$77$$);
      $grippy$$1$$.$addChild$($dot$$);
      $starty$$1$$ = 3
    }
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$ + 18, $starty$$1$$, $startx$$2$$ + 18 + 1, $starty$$1$$, "dot4");
    $dot$$.$setSolidStroke$($color$$77$$);
    $grippy$$1$$.$addChild$($dot$$);
    $starty$$1$$ += 4;
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$ + 18, $starty$$1$$, $startx$$2$$ + 18 + 1, $starty$$1$$, "dot5")
  }else {
    $startx$$2$$ = 3;
    $starty$$1$$ = 8 + $handlePos$$;
    for($i$$747$$ = 0;9 > $i$$747$$;$i$$747$$++) {
      $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$, $starty$$1$$ + 2 * $i$$747$$, $startx$$2$$, $starty$$1$$ + 2 * $i$$747$$ + 1, "dot1" + $i$$747$$), $dot$$.$setSolidStroke$($color$$77$$), $grippy$$1$$.$addChild$($dot$$), $startx$$2$$ += 2, $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$, $starty$$1$$ + 1 + 2 * $i$$747$$, $startx$$2$$, $starty$$1$$ + 1 + 2 * $i$$747$$ + 1, "dot2" + $i$$747$$), $dot$$.$setSolidStroke$($color$$77$$), 
      $grippy$$1$$.$addChild$($dot$$), $startx$$2$$ += 2, $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$, $starty$$1$$ + 2 * $i$$747$$, $startx$$2$$, $starty$$1$$ + 2 * $i$$747$$ + 1, "dot3" + $i$$747$$), $dot$$.$setSolidStroke$($color$$77$$), $grippy$$1$$.$addChild$($dot$$), $startx$$2$$ = 3
    }
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$, $starty$$1$$ + 18, $startx$$2$$, $starty$$1$$ + 18 + 1, "dot4");
    $dot$$.$setSolidStroke$($color$$77$$);
    $grippy$$1$$.$addChild$($dot$$);
    $startx$$2$$ += 4;
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$, $starty$$1$$ + 18, $startx$$2$$, $starty$$1$$ + 18 + 1, "dot5")
  }
  $dot$$.$setSolidStroke$($color$$77$$);
  $grippy$$1$$.$addChild$($dot$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($grippy$$1$$);
  return $grippy$$1$$
};
D.$JSCompiler_StaticMethods_getRectSize$$ = function $$JSCompiler_StaticMethods_getRectSize$$$($JSCompiler_StaticMethods_getRectSize$self$$, $rect$$40$$) {
  return $JSCompiler_StaticMethods_getRectSize$self$$.$isVertical$() ? $rect$$40$$.getHeight() : $rect$$40$$.getWidth()
};
D.$JSCompiler_StaticMethods_getSlidingWindowPos$$ = function $$JSCompiler_StaticMethods_getSlidingWindowPos$$$($JSCompiler_StaticMethods_getSlidingWindowPos$self$$, $slidingWindow$$4$$) {
  return $JSCompiler_StaticMethods_getSlidingWindowPos$self$$.$isVertical$() ? $slidingWindow$$4$$.$getTranslateY$() : $slidingWindow$$4$$.$getTranslateX$()
};
D.$JSCompiler_StaticMethods_setSlidingWindowPos$$ = function $$JSCompiler_StaticMethods_setSlidingWindowPos$$$($JSCompiler_StaticMethods_setSlidingWindowPos$self$$, $rightStart_slidingWindow$$5$$, $pos$$57$$) {
  $pos$$57$$ = window.Math.max(0, $pos$$57$$);
  $JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$isVertical$() ? $rightStart_slidingWindow$$5$$.$setTranslateY$($pos$$57$$) : $rightStart_slidingWindow$$5$$.$setTranslateX$($pos$$57$$);
  if($JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$isLeftAndRightFilterRendered$()) {
    (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$).$setWidth$($pos$$57$$);
    $rightStart_slidingWindow$$5$$ = $pos$$57$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$, $rightStart_slidingWindow$$5$$);
    var $handleStart$$1_rightBackground$$1$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$);
    $handleStart$$1_rightBackground$$1$$.$setX$($rightStart_slidingWindow$$5$$);
    $handleStart$$1_rightBackground$$1$$.$setWidth$(window.Math.max(0, $JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$Width$ - $rightStart_slidingWindow$$5$$));
    D.$DvtTimeUtils$$.$supportsTouch$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$) && ($handleStart$$1_rightBackground$$1$$ = (0,D.$JSCompiler_StaticMethods_getHandleStart$$)(), ($JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$isLeftAndRightFilterRendered$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$) ? $JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$getChildAt$(5) : 
    D.$JSCompiler_alias_NULL$$).$setX$($pos$$57$$ - $handleStart$$1_rightBackground$$1$$), (0,D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$).$setX$($rightStart_slidingWindow$$5$$))
  }
};
D.$JSCompiler_StaticMethods_setSlidingWindowSize$$ = function $$JSCompiler_StaticMethods_setSlidingWindowSize$$$($JSCompiler_StaticMethods_setSlidingWindowSize$self$$, $rightGrippy$$1_slidingWindow$$7$$, $size$$42$$) {
  $size$$42$$ = window.Math.max((0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$), $size$$42$$);
  var $rightHandleBackground$$1_rightStart$$1_size$$inline_7581$$ = $size$$42$$ = window.Math.min($JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isVertical$() ? $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$Height$ : $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$Width$, $size$$42$$);
  $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isVertical$() ? $rightGrippy$$1_slidingWindow$$7$$.$setHeight$($rightHandleBackground$$1_rightStart$$1_size$$inline_7581$$) : $rightGrippy$$1_slidingWindow$$7$$.$setWidth$($rightHandleBackground$$1_rightStart$$1_size$$inline_7581$$);
  if($JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isLeftAndRightFilterRendered$()) {
    var $rightHandleBackground$$1_rightStart$$1_size$$inline_7581$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$, $rightGrippy$$1_slidingWindow$$7$$) + $size$$42$$, $rightBackground$$2_rightHandle$$2$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$);
    $rightBackground$$2_rightHandle$$2$$.$setX$($rightHandleBackground$$1_rightStart$$1_size$$inline_7581$$);
    $rightBackground$$2_rightHandle$$2$$.$setWidth$(window.Math.max(0, $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$Width$ - $rightHandleBackground$$1_rightStart$$1_size$$inline_7581$$));
    D.$DvtTimeUtils$$.$supportsTouch$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$) && (0,D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$).$setX$($rightHandleBackground$$1_rightStart$$1_size$$inline_7581$$)
  }
  (0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$) || ($rightHandleBackground$$1_rightStart$$1_size$$inline_7581$$ = $rightGrippy$$1_slidingWindow$$7$$.$getChildAt$(3), $rightBackground$$2_rightHandle$$2$$ = $rightGrippy$$1_slidingWindow$$7$$.$getChildAt$(4), $rightGrippy$$1_slidingWindow$$7$$ = $rightGrippy$$1_slidingWindow$$7$$.$getChildAt$(5), $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isVertical$() ? ($rightBackground$$2_rightHandle$$2$$.$setTranslateY$($size$$42$$), 
  $rightHandleBackground$$1_rightStart$$1_size$$inline_7581$$.$setTranslateY$($size$$42$$ - (0,D.$JSCompiler_StaticMethods_getHandleSize$$)()), $rightGrippy$$1_slidingWindow$$7$$.$setTranslateY$($size$$42$$ - 10)) : ($rightBackground$$2_rightHandle$$2$$.$setTranslateX$($size$$42$$), $rightHandleBackground$$1_rightStart$$1_size$$inline_7581$$.$setTranslateX$($size$$42$$ - (0,D.$JSCompiler_StaticMethods_getHandleSize$$)()), $rightGrippy$$1_slidingWindow$$7$$.$setTranslateX$($size$$42$$ - 10)))
};
D.$DvtOverview$$.prototype.$addTick$ = function $$DvtOverview$$$$$addTick$$($line$$14_pos$$58$$, $stroke$$99_width$$130$$, $height$$119$$, $id$$246$$) {
  $line$$14_pos$$58$$ = this.$isVertical$() ? new D.$DvtLine$$(this.$getCtx$(), 0, $line$$14_pos$$58$$, $stroke$$99_width$$130$$, $line$$14_pos$$58$$, $id$$246$$) : new D.$DvtLine$$(this.$getCtx$(), $line$$14_pos$$58$$, 0, $line$$14_pos$$58$$, $height$$119$$, $id$$246$$);
  $stroke$$99_width$$130$$ = new D.$DvtSolidStroke$$(this.$_timeIndicatorColor$);
  $stroke$$99_width$$130$$.$setStyle$(1, 3);
  $line$$14_pos$$58$$.$setStroke$($stroke$$99_width$$130$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($line$$14_pos$$58$$);
  this.$addChild$($line$$14_pos$$58$$)
};
D.$DvtOverview$$.prototype.$addLabel$ = function $$DvtOverview$$$$$addLabel$$($pos$$59$$, $label$$71_text$$102$$, $width$$131_y$$225$$, $height$$120$$, $maxWidth$$26$$, $id$$247$$, $dim$$63_labelStyle$$19$$) {
  $dim$$63_labelStyle$$19$$ = $dim$$63_labelStyle$$19$$ || new D.$DvtCSSStyle$$("font-weight:bold");
  this.$isVertical$() ? ($label$$71_text$$102$$ = new D.$DvtOutputText$$(this.$getCtx$(), $label$$71_text$$102$$, 4, $pos$$59$$, $id$$247$$), $label$$71_text$$102$$.$setCSSStyle$($dim$$63_labelStyle$$19$$), this.$isRTL$() && (this.$addChild$($label$$71_text$$102$$), $dim$$63_labelStyle$$19$$ = $label$$71_text$$102$$.$getDimensions$(), this.removeChild($label$$71_text$$102$$), $label$$71_text$$102$$.$setX$(window.Math.max(4, this.$Width$ - $dim$$63_labelStyle$$19$$.$w$ - 4)))) : ($width$$131_y$$225$$ = 
  "above" == this.$_overviewPosition$ ? 2 : $height$$120$$ - (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)(this) + 2, $label$$71_text$$102$$ = new D.$DvtOutputText$$(this.$getCtx$(), $label$$71_text$$102$$, $pos$$59$$ + 5, $width$$131_y$$225$$, $id$$247$$), $label$$71_text$$102$$.$setCSSStyle$($dim$$63_labelStyle$$19$$), (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) && (this.$addChild$($label$$71_text$$102$$), $dim$$63_labelStyle$$19$$ = $label$$71_text$$102$$.$getDimensions$(), this.removeChild($label$$71_text$$102$$), 
  $label$$71_text$$102$$.$setX$($pos$$59$$ - window.Math.min($dim$$63_labelStyle$$19$$.$w$, $maxWidth$$26$$) - 5)));
  D.$DvtTextUtils$$.$fitText$($label$$71_text$$102$$, $maxWidth$$26$$, window.Infinity, this);
  $label$$71_text$$102$$.$_rawText$ = $label$$71_text$$102$$.$getUntruncatedTextString$()
};
D.$DvtOverview$$.prototype.$parseDataXML$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_StaticMethods_animateSlidingWindow$$ = function $$JSCompiler_StaticMethods_animateSlidingWindow$$$($JSCompiler_StaticMethods_animateSlidingWindow$self$$, $newLeft$$2$$) {
  var $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$(1);
  $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getChildAt$(3);
  $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getChildAt$(4);
  $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getChildAt$(5);
  if($newLeft$$2$$ != (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$)) {
    var $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$), $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = (0,D.$JSCompiler_StaticMethods_getRightHandle$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = 
    $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 2)), $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 
    3)), $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 4)), $rightBackgroundHandleSetter_topBar$$1$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 
    5));
    if($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isVertical$()) {
      var $posGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getTranslateY$, $posSetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$setTranslateY$, $leftHandlePos1Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getY1$, $leftHandlePos1Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setY1$, $leftHandlePos2Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getY2$, 
      $leftHandlePos2Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setY2$, $rightHandlePos1Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getY1$, $rightHandlePos1Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setY1$, $rightHandlePos2Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getY2$, $rightHandlePos2Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setY2$, 
      $leftTopBarPosGetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$getY2$, $leftTopBarPosSetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$setY2$, $rightTopBarPosGetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getY1$, $rightTopBarPosSetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setY1$, $bottomBarPos1Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getY1$, 
      $bottomBarPos1Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setY1$, $bottomBarPos2Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getY2$, $bottomBarPos2Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setY2$, $topBarPos1Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getY1$, $topBarPos1Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setY1$, $topBarPos2Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getY2$, $topBarPos2Setter$$ = 
      $rightBackgroundHandleSetter_topBar$$1$$.$setY2$
    }else {
      $posGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getTranslateX$, $posSetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$setTranslateX$, $leftHandlePos1Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX1$, $leftHandlePos1Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX1$, $leftHandlePos2Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX2$, 
      $leftHandlePos2Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX2$, $rightHandlePos1Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getX1$, $rightHandlePos1Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setX1$, $rightHandlePos2Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getX2$, $rightHandlePos2Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setX2$, 
      $leftTopBarPosGetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$getX2$, $leftTopBarPosSetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$setX2$, $rightTopBarPosGetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getX1$, $rightTopBarPosSetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setX1$, $bottomBarPos1Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getX1$, 
      $bottomBarPos1Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setX1$, $bottomBarPos2Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getX2$, $bottomBarPos2Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setX2$, $topBarPos1Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getX1$, $topBarPos1Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setX1$, $topBarPos2Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getX2$, $topBarPos2Setter$$ = 
      $rightBackgroundHandleSetter_topBar$$1$$.$setX2$
    }
    var $animator$$108_minPos$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_leftMargin$, $maxPos$$ = (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), $rightStart$$2_slidingWindowSize$$ = (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$);
    $newLeft$$2$$ = window.Math.max($animator$$108_minPos$$, window.Math.min($maxPos$$ - $rightStart$$2_slidingWindowSize$$, $newLeft$$2$$));
    $animator$$108_minPos$$ = "off" !== $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_animationOnClick$ ? new D.$DvtAnimator$$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getCtx$(), 0.5, 0, D.$DvtEasing$linear$$) : D.$JSCompiler_alias_NULL$$;
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$108_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$, $posGetter$$, $posSetter$$, $newLeft$$2$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$108_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftHandlePos1Getter$$, $leftHandlePos1Setter$$, $newLeft$$2$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$108_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftHandlePos2Getter$$, $leftHandlePos2Setter$$, $newLeft$$2$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$108_minPos$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $rightHandlePos1Getter$$, $rightHandlePos1Setter$$, $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$108_minPos$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $rightHandlePos2Getter$$, $rightHandlePos2Setter$$, $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$108_minPos$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $leftTopBarPosGetter$$, $leftTopBarPosSetter$$, $newLeft$$2$$ + 1);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$108_minPos$$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $rightTopBarPosGetter$$, $rightTopBarPosSetter$$, $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$ - 1);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$108_minPos$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$, $bottomBarPos1Getter$$, $bottomBarPos1Setter$$, $newLeft$$2$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$108_minPos$$, $rightBackgroundHandleSetter_topBar$$1$$, $topBarPos1Getter$$, $topBarPos1Setter$$, $newLeft$$2$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$108_minPos$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$, $bottomBarPos2Getter$$, $bottomBarPos2Setter$$, $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$108_minPos$$, $rightBackgroundHandleSetter_topBar$$1$$, $topBarPos2Getter$$, $topBarPos2Setter$$, $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$);
    $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isLeftAndRightFilterRendered$() && ($handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$ = (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$108_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.getWidth, 
    $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$setWidth$, $newLeft$$2$$), $rightStart$$2_slidingWindowSize$$ = $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.getWidth, 
    $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$setWidth$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getX$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$setX$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ = 
    $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isVertical$() ? $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$Height$ : $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$Width$, (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$108_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ - 
    $rightStart$$2_slidingWindowSize$$), (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$108_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $rightStart$$2_slidingWindowSize$$), D.$DvtTimeUtils$$.$supportsTouch$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$) && 
    ($handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$ = (0,D.$JSCompiler_StaticMethods_getHandleStart$$)(), $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isLeftAndRightFilterRendered$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$) ? $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$(5) : D.$JSCompiler_alias_NULL$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = 
    $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = (0,D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getX$, 
    $rightBackgroundHandleSetter_topBar$$1$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setX$, (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$108_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $newLeft$$2$$ - $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$), (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$108_minPos$$, 
    $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$, $rightBackgroundHandleSetter_topBar$$1$$, $rightStart$$2_slidingWindowSize$$)));
    $animator$$108_minPos$$ != D.$JSCompiler_alias_NULL$$ && $animator$$108_minPos$$.play()
  }
};
D.$JSCompiler_StaticMethods_animateProperty$$ = function $$JSCompiler_StaticMethods_animateProperty$$$($animator$$109$$, $obj$$313$$, $getter$$5$$, $setter$$3$$, $value$$184$$) {
  $animator$$109$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$109$$, "typeNumber", $obj$$313$$, $getter$$5$$, $setter$$3$$, $value$$184$$) : $setter$$3$$.call($obj$$313$$, $value$$184$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtOverview$$.prototype;
D.$JSCompiler_prototypeAlias$$.$HandleShapeMouseOver$ = function $$JSCompiler_prototypeAlias$$$$HandleShapeMouseOver$$($event$$601_relPos$$56$$) {
  var $drawable$$2$$ = this.$_findDrawable$($event$$601_relPos$$56$$);
  if($drawable$$2$$ && !("bg" == $drawable$$2$$.getId() || "ocd" == $drawable$$2$$.getId())) {
    if("label" == $drawable$$2$$.getId().substr(0, 5) && ($drawable$$2$$ instanceof D.$DvtOutputText$$ || $drawable$$2$$ instanceof D.$DvtBackgroundOutputText$$)) {
      $drawable$$2$$.$isTruncated$() && this.$getCtx$().$getTooltipManager$().$showDatatip$($event$$601_relPos$$56$$.pageX, $event$$601_relPos$$56$$.pageY, $drawable$$2$$.$_rawText$, "#000000")
    }else {
      if(this.$_resizeArrow$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$2$$) && ($event$$601_relPos$$56$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$getCtx$(), $event$$601_relPos$$56$$.pageX, $event$$601_relPos$$56$$.pageY), $event$$601_relPos$$56$$ = this.$stageToLocal$($event$$601_relPos$$56$$), this.$isVertical$() ? (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_resizeArrow$, $event$$601_relPos$$56$$.x + 6, $event$$601_relPos$$56$$.y - 
      10) : (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_resizeArrow$, $event$$601_relPos$$56$$.x - 6, $event$$601_relPos$$56$$.y - 20), this.$_resizeArrow$.$setVisible$(D.$JSCompiler_alias_TRUE$$)), "window" == $drawable$$2$$.getId() || "ftr" == $drawable$$2$$.getId() || "arr" == $drawable$$2$$.getId() || (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$2$$)) {
        this.$isFlashEnvironment$() && this.setCursor("move")
      }else {
        return $drawable$$2$$
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleShapeMouseOut$ = function $$JSCompiler_prototypeAlias$$$$HandleShapeMouseOut$$($drawable$$3_event$$602$$) {
  this.$_moveDrawable$ == D.$JSCompiler_alias_NULL$$ && this.setCursor("default");
  $drawable$$3_event$$602$$ = this.$_findDrawable$($drawable$$3_event$$602$$);
  if($drawable$$3_event$$602$$ != D.$JSCompiler_alias_NULL$$) {
    return(0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$3_event$$602$$) && this.$_resizeArrow$ != D.$JSCompiler_alias_NULL$$ && this.$_resizeArrow$.$setVisible$(D.$JSCompiler_alias_FALSE$$), $drawable$$3_event$$602$$
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleShapeClick$ = function $$JSCompiler_prototypeAlias$$$$HandleShapeClick$$($event$$603_newEndTime_relPos$$57_slidingWindow$$9$$, $newPos$$1_pageX$$8$$, $evt$$53_pageY$$8_pos$$60$$) {
  $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$.stopPropagation();
  var $drawable$$4_newStartTime_size$$45$$ = this.$_findDrawable$($event$$603_newEndTime_relPos$$57_slidingWindow$$9$$);
  if($drawable$$4_newStartTime_size$$45$$ && !("window" == $drawable$$4_newStartTime_size$$45$$.getId() || (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$4_newStartTime_size$$45$$))) {
    if("bg" == $drawable$$4_newStartTime_size$$45$$.getId() || "label" == $drawable$$4_newStartTime_size$$45$$.getId().substr(0, 5) || "ocd" == $drawable$$4_newStartTime_size$$45$$.getId() || "lbg" == $drawable$$4_newStartTime_size$$45$$.getId() || "rbg" == $drawable$$4_newStartTime_size$$45$$.getId()) {
      $newPos$$1_pageX$$8$$ == D.$JSCompiler_alias_VOID$$ && ($newPos$$1_pageX$$8$$ = $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$.pageX);
      $evt$$53_pageY$$8_pos$$60$$ == D.$JSCompiler_alias_VOID$$ && ($evt$$53_pageY$$8_pos$$60$$ = $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$.pageY);
      $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$getCtx$(), $newPos$$1_pageX$$8$$, $evt$$53_pageY$$8_pos$$60$$);
      $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$ = this.$stageToLocal$($event$$603_newEndTime_relPos$$57_slidingWindow$$9$$);
      this.$isVertical$() ? ($evt$$53_pageY$$8_pos$$60$$ = $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$.y, $drawable$$4_newStartTime_size$$45$$ = this.$Height$) : ($evt$$53_pageY$$8_pos$$60$$ = $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$.x, $drawable$$4_newStartTime_size$$45$$ = this.$Width$);
      $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$ = this.$getChildAt$(1);
      $newPos$$1_pageX$$8$$ = $evt$$53_pageY$$8_pos$$60$$ - (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$) / 2;
      (0,D.$JSCompiler_StaticMethods_animateSlidingWindow$$)(this, $newPos$$1_pageX$$8$$);
      (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) && ($evt$$53_pageY$$8_pos$$60$$ = this.$Width$ - $evt$$53_pageY$$8_pos$$60$$);
      var $time$$10$$ = this.$getPositionDate$($evt$$53_pageY$$8_pos$$60$$);
      $evt$$53_pageY$$8_pos$$60$$ = new D.$DvtOverviewEvent$$("scrollTime");
      $evt$$53_pageY$$8_pos$$60$$.setTime($time$$10$$);
      $newPos$$1_pageX$$8$$ = window.Math.max(0, window.Math.min($newPos$$1_pageX$$8$$, $drawable$$4_newStartTime_size$$45$$ - (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$)));
      (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) ? ($drawable$$4_newStartTime_size$$45$$ = this.$getPositionDate$(this.$Width$ - ($newPos$$1_pageX$$8$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$))), $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$ = this.$getPositionDate$(this.$Width$ - $newPos$$1_pageX$$8$$)) : ($drawable$$4_newStartTime_size$$45$$ = this.$getPositionDate$($newPos$$1_pageX$$8$$), $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$ = 
      this.$getPositionDate$($newPos$$1_pageX$$8$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$)));
      (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$53_pageY$$8_pos$$60$$, $drawable$$4_newStartTime_size$$45$$);
      (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$53_pageY$$8_pos$$60$$, $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$);
      this.dispatchEvent($evt$$53_pageY$$8_pos$$60$$)
    }else {
      return $drawable$$4_newStartTime_size$$45$$
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$beginDragPan$ = function $$JSCompiler_prototypeAlias$$$$beginDragPan$$($drawable$$5_event$$604_evt$$54$$, $compX_cursor$$inline_7584_slidingWindow$$10$$, $compY_drawableId_leftBackground$$inline_7586_slidingWindow$$inline_7585$$) {
  $drawable$$5_event$$604_evt$$54$$ = this.$_findDrawable$($drawable$$5_event$$604_evt$$54$$);
  if($drawable$$5_event$$604_evt$$54$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_isMovable$$)($drawable$$5_event$$604_evt$$54$$)) {
    if("ftr" == $drawable$$5_event$$604_evt$$54$$.getId() || "sta" == $drawable$$5_event$$604_evt$$54$$.getId()) {
      $drawable$$5_event$$604_evt$$54$$ = this.$getChildAt$(1)
    }
    this.$_initX$ = $compX_cursor$$inline_7584_slidingWindow$$10$$;
    this.$_initY$ = $compY_drawableId_leftBackground$$inline_7586_slidingWindow$$inline_7585$$;
    if((0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$5_event$$604_evt$$54$$)) {
      $compX_cursor$$inline_7584_slidingWindow$$10$$ = this.$getChildAt$(1);
      (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) ? (this.$_oldEndPos$ = this.$Width$ - $compX_cursor$$inline_7584_slidingWindow$$10$$.$getX$(), this.$_oldStartPos$ = this.$_oldEndPos$ - $compX_cursor$$inline_7584_slidingWindow$$10$$.getWidth()) : (this.$_oldStartPos$ = $compX_cursor$$inline_7584_slidingWindow$$10$$.$getX$(), this.$_oldEndPos$ = this.$_oldStartPos$ + $compX_cursor$$inline_7584_slidingWindow$$10$$.getWidth());
      "grpy" == $drawable$$5_event$$604_evt$$54$$.getParent().getId() && ($drawable$$5_event$$604_evt$$54$$ = $drawable$$5_event$$604_evt$$54$$.getParent());
      $compY_drawableId_leftBackground$$inline_7586_slidingWindow$$inline_7585$$ = $drawable$$5_event$$604_evt$$54$$.getId();
      "grpy" == $compY_drawableId_leftBackground$$inline_7586_slidingWindow$$inline_7585$$ && ($drawable$$5_event$$604_evt$$54$$ = $compX_cursor$$inline_7584_slidingWindow$$10$$.$getChildBefore$($drawable$$5_event$$604_evt$$54$$), $compY_drawableId_leftBackground$$inline_7586_slidingWindow$$inline_7585$$ = $drawable$$5_event$$604_evt$$54$$.getId());
      if("lh" == $compY_drawableId_leftBackground$$inline_7586_slidingWindow$$inline_7585$$ || "rh" == $compY_drawableId_leftBackground$$inline_7586_slidingWindow$$inline_7585$$) {
        $drawable$$5_event$$604_evt$$54$$ = $compX_cursor$$inline_7584_slidingWindow$$10$$.$getChildBefore$($drawable$$5_event$$604_evt$$54$$), $compY_drawableId_leftBackground$$inline_7586_slidingWindow$$inline_7585$$ = $drawable$$5_event$$604_evt$$54$$.getId()
      }
      "lbgrh" == $compY_drawableId_leftBackground$$inline_7586_slidingWindow$$inline_7585$$ && ($drawable$$5_event$$604_evt$$54$$ = $compX_cursor$$inline_7584_slidingWindow$$10$$.$getChildAt$(0));
      "rbgrh" == $compY_drawableId_leftBackground$$inline_7586_slidingWindow$$inline_7585$$ && ($drawable$$5_event$$604_evt$$54$$ = $compX_cursor$$inline_7584_slidingWindow$$10$$.$getChildAt$($compX_cursor$$inline_7584_slidingWindow$$10$$.$getNumChildren$() - 3));
      D.$DvtTimeUtils$$.$supportsTouch$() || (this.$isVertical$() ? ($drawable$$5_event$$604_evt$$54$$.$setY$(-20), $drawable$$5_event$$604_evt$$54$$.$setHeight$(2 * ($drawable$$5_event$$604_evt$$54$$.getHeight() + 20))) : ($drawable$$5_event$$604_evt$$54$$.$setX$(-20), $drawable$$5_event$$604_evt$$54$$.$setWidth$(2 * ($drawable$$5_event$$604_evt$$54$$.getWidth() + 20))));
      $compX_cursor$$inline_7584_slidingWindow$$10$$ = $drawable$$5_event$$604_evt$$54$$.getCursor();
      $compY_drawableId_leftBackground$$inline_7586_slidingWindow$$inline_7585$$ = this.$getChildAt$(1);
      $compY_drawableId_leftBackground$$inline_7586_slidingWindow$$inline_7585$$ != D.$JSCompiler_alias_NULL$$ && $compY_drawableId_leftBackground$$inline_7586_slidingWindow$$inline_7585$$.setCursor($compX_cursor$$inline_7584_slidingWindow$$10$$);
      if(this.$isLeftAndRightFilterRendered$()) {
        $compY_drawableId_leftBackground$$inline_7586_slidingWindow$$inline_7585$$ = (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)(this);
        var $rightBackground$$inline_7587$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)(this);
        $compY_drawableId_leftBackground$$inline_7586_slidingWindow$$inline_7585$$ != D.$JSCompiler_alias_NULL$$ && $rightBackground$$inline_7587$$ != D.$JSCompiler_alias_NULL$$ && ($compY_drawableId_leftBackground$$inline_7586_slidingWindow$$inline_7585$$.setCursor($compX_cursor$$inline_7584_slidingWindow$$10$$), $rightBackground$$inline_7587$$.setCursor($compX_cursor$$inline_7584_slidingWindow$$10$$))
      }
    }
    this.$_moveDrawable$ = $drawable$$5_event$$604_evt$$54$$;
    $drawable$$5_event$$604_evt$$54$$ = new D.$DvtOverviewEvent$$("dropCallback");
    this.dispatchEvent($drawable$$5_event$$604_evt$$54$$);
    return D.$JSCompiler_alias_TRUE$$
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$endDragPan$ = function $$JSCompiler_prototypeAlias$$$$endDragPan$$() {
  if(this.$_moveDrawable$ != D.$JSCompiler_alias_NULL$$) {
    if("window" == this.$_moveDrawable$.getId()) {
      this.$finishWindowDrag$(0, 0)
    }else {
      if((0,D.$JSCompiler_StaticMethods_isHandle$$)(this.$_moveDrawable$)) {
        this.$finishHandleDrag$();
        D.$DvtTimeUtils$$.$supportsTouch$() || (this.$isVertical$() ? (this.$_moveDrawable$.$setY$(0), this.$_moveDrawable$.$setHeight$((0,D.$JSCompiler_StaticMethods_getHandleSize$$)())) : (this.$_moveDrawable$.$setX$(0), this.$_moveDrawable$.$setWidth$((0,D.$JSCompiler_StaticMethods_getHandleSize$$)())));
        var $leftBackground$$inline_7591_slidingWindow$$inline_7590$$ = this.$getChildAt$(1);
        $leftBackground$$inline_7591_slidingWindow$$inline_7590$$ != D.$JSCompiler_alias_NULL$$ && $leftBackground$$inline_7591_slidingWindow$$inline_7590$$.setCursor("move");
        if(this.$isLeftAndRightFilterRendered$()) {
          var $leftBackground$$inline_7591_slidingWindow$$inline_7590$$ = (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)(this), $rightBackground$$inline_7592$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)(this);
          $leftBackground$$inline_7591_slidingWindow$$inline_7590$$ != D.$JSCompiler_alias_NULL$$ && $rightBackground$$inline_7592$$ != D.$JSCompiler_alias_NULL$$ && ($leftBackground$$inline_7591_slidingWindow$$inline_7590$$.setCursor("default"), $rightBackground$$inline_7592$$.setCursor("default"))
        }
      }
    }
    this.$_moveDrawable$ = D.$JSCompiler_alias_NULL$$;
    this.$_initX$ = -1
  }
};
D.$JSCompiler_prototypeAlias$$.$contDragPan$ = function $$JSCompiler_prototypeAlias$$$$contDragPan$$($event$$605$$, $compX$$1$$, $compY$$1$$) {
  if(this.$_moveDrawable$ != D.$JSCompiler_alias_NULL$$ && -1 != this.$_initX$) {
    var $diffX$$11$$ = $compX$$1$$ - this.$_initX$, $diffY$$12$$ = $compY$$1$$ - this.$_initY$;
    this.$_initX$ = $compX$$1$$;
    this.$_initY$ = $compY$$1$$;
    "window" == this.$_moveDrawable$.getId() ? this.$handleWindowDragPositioning$(0, $diffX$$11$$, $diffY$$12$$) : "lh" == this.$_moveDrawable$.getId() || "lhb" == this.$_moveDrawable$.getId() ? (0,D.$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$)(this, $event$$605$$, $diffX$$11$$, $diffY$$12$$, D.$JSCompiler_alias_TRUE$$) : ("rh" == this.$_moveDrawable$.getId() || "rhb" == this.$_moveDrawable$.getId()) && this.$handleRightHandleDragPositioning$($event$$605$$, $diffX$$11$$, $diffY$$12$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchStart$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchStart$$($event$$606$$) {
  var $touches$$10$$ = $event$$606$$.touches;
  this.$_touchStartX$ = $touches$$10$$[0].pageX;
  this.$_touchStartY$ = $touches$$10$$[0].pageY;
  2 == $touches$$10$$.length && ($event$$606$$.preventDefault(), this.$_touchStartX2$ = $touches$$10$$[1].pageX, this.$_touchStartY2$ = $touches$$10$$[1].pageY, 20 > window.Math.abs(this.$_touchStartY$ - this.$_touchStartY2$) ? this.$_counter$ = 0 : this.$_touchStartY2$ = this.$_touchStartX2$ = this.$_touchStartY$ = this.$_touchStartX$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchMove$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchMove$$($event$$607_touches$$11$$) {
  $event$$607_touches$$11$$.preventDefault();
  $event$$607_touches$$11$$ = $event$$607_touches$$11$$.touches;
  if(this.$_touchStartX2$ != D.$JSCompiler_alias_NULL$$ && this.$_touchStartY2$ != D.$JSCompiler_alias_NULL$$) {
    50 > this.$_counter$ ? this.$_counter$++ : (this.$handleRightHandleDragPositioning$(D.$JSCompiler_alias_NULL$$, $event$$607_touches$$11$$[1].pageX - this.$_touchStartX2$, 0), this.$_touchStartX2$ = $event$$607_touches$$11$$[1].pageX, this.$_counter$ = 0)
  }else {
    var $pageDy$$1$$ = window.Math.abs(this.$_touchStartY$ - $event$$607_touches$$11$$[0].pageY);
    if(3 < window.Math.abs(this.$_touchStartX$ - $event$$607_touches$$11$$[0].pageX) || 3 < $pageDy$$1$$) {
      this.$_touchStartY$ = this.$_touchStartX$ = D.$JSCompiler_alias_NULL$$
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchEnd$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchEnd$$($event$$608$$) {
  this.$_touchStartX2$ != D.$JSCompiler_alias_NULL$$ && this.$_touchStartY2$ != D.$JSCompiler_alias_NULL$$ ? this.$finishHandleDrag$() : this.$_touchStartX$ != D.$JSCompiler_alias_NULL$$ && this.$_touchStartY$ != D.$JSCompiler_alias_NULL$$ && this.$HandleShapeClick$($event$$608$$, this.$_touchStartX$, this.$_touchStartY$);
  this.$_touchStartY2$ = this.$_touchStartX2$ = this.$_touchStartY$ = this.$_touchStartX$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyDown$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyDown$$($event$$609$$) {
  var $delta$$17_keyCode$$40$$ = $event$$609$$.keyCode;
  if(37 === $delta$$17_keyCode$$40$$ || 39 === $delta$$17_keyCode$$40$$) {
    $delta$$17_keyCode$$40$$ = 37 === $delta$$17_keyCode$$40$$ ? -1 : 1, ($event$$609$$.shiftKey ? this.$handleRightHandleDragPositioning$ : this.$handleWindowDragPositioning$).call(this, $event$$609$$, $delta$$17_keyCode$$40$$, $delta$$17_keyCode$$40$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyUp$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyUp$$($event$$610$$) {
  var $delta$$18_keyCode$$41$$ = $event$$610$$.keyCode;
  if(37 === $delta$$18_keyCode$$41$$ || 39 === $delta$$18_keyCode$$41$$) {
    $delta$$18_keyCode$$41$$ = 37 === $delta$$18_keyCode$$41$$ ? -1 : 1, ($event$$610$$.shiftKey ? this.$finishHandleDrag$ : this.$finishWindowDrag$).call(this, $delta$$18_keyCode$$41$$, $delta$$18_keyCode$$41$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$handleWindowDragPositioning$ = function $$JSCompiler_prototypeAlias$$$$handleWindowDragPositioning$$($event$$611$$, $deltaX$$16$$, $deltaY$$19$$) {
  (0,D.$JSCompiler_StaticMethods_fireScrollEvent$$)(this, "scrollPos", $deltaX$$16$$, $deltaY$$19$$)
};
D.$JSCompiler_prototypeAlias$$.$finishWindowDrag$ = function $$JSCompiler_prototypeAlias$$$$finishWindowDrag$$($deltaX$$17$$, $deltaY$$20$$) {
  (0,D.$JSCompiler_StaticMethods_fireScrollEvent$$)(this, "scrollEnd", $deltaX$$17$$, $deltaY$$20$$)
};
D.$JSCompiler_StaticMethods_fireScrollEvent$$ = function $$JSCompiler_StaticMethods_fireScrollEvent$$$($JSCompiler_StaticMethods_fireScrollEvent$self$$, $evt$$55_type$$237$$, $delta$$19_deltaX$$18$$, $deltaY$$21$$) {
  var $newEndTime$$1_slidingWindow$$17$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getChildAt$(1), $pos$$64$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$17$$), $newStartTime$$1_scrollTo_size$$46$$ = (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$17$$), $minPos$$1$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_leftMargin$, 
  $maxPos$$1$$ = (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$);
  $delta$$19_deltaX$$18$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$isVertical$() ? $deltaY$$21$$ : $delta$$19_deltaX$$18$$;
  $pos$$64$$ + $delta$$19_deltaX$$18$$ <= $minPos$$1$$ ? ((0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$17$$, $minPos$$1$$), $newStartTime$$1_scrollTo_size$$46$$ = (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$) ? -2 : -1) : $pos$$64$$ + $newStartTime$$1_scrollTo_size$$46$$ + $delta$$19_deltaX$$18$$ >= $maxPos$$1$$ ? ((0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, 
  $newEndTime$$1_slidingWindow$$17$$, $maxPos$$1$$ - $newStartTime$$1_scrollTo_size$$46$$), $newStartTime$$1_scrollTo_size$$46$$ = (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$) ? -1 : -2) : ((0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$17$$, $pos$$64$$ + $delta$$19_deltaX$$18$$), $newStartTime$$1_scrollTo_size$$46$$ = (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$) ? 
  ($maxPos$$1$$ - $newStartTime$$1_scrollTo_size$$46$$ - $pos$$64$$ - $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_leftMargin$) * $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_increment$ : ($pos$$64$$ - $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_leftMargin$) * $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_increment$);
  (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$);
  $evt$$55_type$$237$$ = new D.$DvtOverviewEvent$$($evt$$55_type$$237$$);
  $evt$$55_type$$237$$.$setPosition$($newStartTime$$1_scrollTo_size$$46$$);
  (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$) ? ($newStartTime$$1_scrollTo_size$$46$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($JSCompiler_StaticMethods_fireScrollEvent$self$$.$Width$ - ($pos$$64$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$17$$))), $newEndTime$$1_slidingWindow$$17$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($JSCompiler_StaticMethods_fireScrollEvent$self$$.$Width$ - 
  $pos$$64$$)) : ($newStartTime$$1_scrollTo_size$$46$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($pos$$64$$), $newEndTime$$1_slidingWindow$$17$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($pos$$64$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$17$$)));
  (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$55_type$$237$$, $newStartTime$$1_scrollTo_size$$46$$);
  (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$55_type$$237$$, $newEndTime$$1_slidingWindow$$17$$);
  $JSCompiler_StaticMethods_fireScrollEvent$self$$.dispatchEvent($evt$$55_type$$237$$)
};
D.$DvtOverview$$.prototype.$handleRightHandleDragPositioning$ = function $$DvtOverview$$$$$handleRightHandleDragPositioning$$($event$$613$$, $deltaX$$20$$, $deltaY$$23$$) {
  (0,D.$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$)(this, $event$$613$$, $deltaX$$20$$, $deltaY$$23$$, D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$ = function $$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$$($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $endHandle$$inline_7603_event$$614_newSize$$1_relPos$$58_time$$12$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$, $delta$$20_deltaY$$24$$, $isLeft$$5_newStartTime$$2$$) {
  var $evt$$56_size$$47$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$);
  $delta$$20_deltaY$$24$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isVertical$() ? $delta$$20_deltaY$$24$$ : $deltaX$$21_newEndTime$$2_slidingWindow$$18$$;
  if(0 != $delta$$20_deltaY$$24$$) {
    $deltaX$$21_newEndTime$$2_slidingWindow$$18$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getChildAt$(1);
    var $windowPos$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$), $windowSize$$ = (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$);
    if($isLeft$$5_newStartTime$$2$$) {
      if($windowSize$$ - $delta$$20_deltaY$$24$$ <= (0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$) || $windowPos$$ + $delta$$20_deltaY$$24$$ <= $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_leftMargin$) {
        return
      }
      $endHandle$$inline_7603_event$$614_newSize$$1_relPos$$58_time$$12$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isVertical$() ? (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getCtx$(), (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_7603_event$$614_newSize$$1_relPos$$58_time$$12$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_7603_event$$614_newSize$$1_relPos$$58_time$$12$$)).y : 
      (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getCtx$(), (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_7603_event$$614_newSize$$1_relPos$$58_time$$12$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_7603_event$$614_newSize$$1_relPos$$58_time$$12$$)).x;
      $endHandle$$inline_7603_event$$614_newSize$$1_relPos$$58_time$$12$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$stageToLocal$($endHandle$$inline_7603_event$$614_newSize$$1_relPos$$58_time$$12$$);
      if(0 < $delta$$20_deltaY$$24$$ && $endHandle$$inline_7603_event$$614_newSize$$1_relPos$$58_time$$12$$ <= $windowPos$$ || 0 > $delta$$20_deltaY$$24$$ && $endHandle$$inline_7603_event$$614_newSize$$1_relPos$$58_time$$12$$ >= $windowPos$$) {
        return
      }
      (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$, $windowPos$$ + $delta$$20_deltaY$$24$$);
      (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$, $windowSize$$ - $delta$$20_deltaY$$24$$)
    }else {
      if($windowSize$$ + $delta$$20_deltaY$$24$$ <= (0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$) || $windowPos$$ + $windowSize$$ + $delta$$20_deltaY$$24$$ >= (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$)) {
        return
      }
      $endHandle$$inline_7603_event$$614_newSize$$1_relPos$$58_time$$12$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isVertical$() ? (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getCtx$(), (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_7603_event$$614_newSize$$1_relPos$$58_time$$12$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_7603_event$$614_newSize$$1_relPos$$58_time$$12$$)).y : 
      (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getCtx$(), (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_7603_event$$614_newSize$$1_relPos$$58_time$$12$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_7603_event$$614_newSize$$1_relPos$$58_time$$12$$)).x;
      $endHandle$$inline_7603_event$$614_newSize$$1_relPos$$58_time$$12$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$stageToLocal$($endHandle$$inline_7603_event$$614_newSize$$1_relPos$$58_time$$12$$);
      if(0 < $delta$$20_deltaY$$24$$ && $endHandle$$inline_7603_event$$614_newSize$$1_relPos$$58_time$$12$$ <= $windowPos$$ + $windowSize$$ || 0 > $delta$$20_deltaY$$24$$ && $endHandle$$inline_7603_event$$614_newSize$$1_relPos$$58_time$$12$$ >= $windowPos$$ + $windowSize$$) {
        return
      }
      (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$, $windowSize$$ + $delta$$20_deltaY$$24$$)
    }
    (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$);
    $endHandle$$inline_7603_event$$614_newSize$$1_relPos$$58_time$$12$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$));
    $endHandle$$inline_7603_event$$614_newSize$$1_relPos$$58_time$$12$$ = $evt$$56_size$$47$$ * ($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_end$ - $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_start$) / ($endHandle$$inline_7603_event$$614_newSize$$1_relPos$$58_time$$12$$ - $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_start$);
    $evt$$56_size$$47$$ = new D.$DvtOverviewEvent$$("rangeChanging");
    (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$56_size$$47$$, "newSize", $endHandle$$inline_7603_event$$614_newSize$$1_relPos$$58_time$$12$$);
    $endHandle$$inline_7603_event$$614_newSize$$1_relPos$$58_time$$12$$ = (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$) ? $isLeft$$5_newStartTime$$2$$ : !$isLeft$$5_newStartTime$$2$$;
    (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$56_size$$47$$, "endHandle", $endHandle$$inline_7603_event$$614_newSize$$1_relPos$$58_time$$12$$);
    $isLeft$$5_newStartTime$$2$$ ? (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$56_size$$47$$, "expand", 0 > $delta$$20_deltaY$$24$$) : (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$56_size$$47$$, "expand", 0 < $delta$$20_deltaY$$24$$);
    (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$) ? ($isLeft$$5_newStartTime$$2$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$Width$ - ((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$) + 
    (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$))), $deltaX$$21_newEndTime$$2_slidingWindow$$18$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$Width$ - (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, 
    $deltaX$$21_newEndTime$$2_slidingWindow$$18$$))) : ($isLeft$$5_newStartTime$$2$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$)), $deltaX$$21_newEndTime$$2_slidingWindow$$18$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, 
    $deltaX$$21_newEndTime$$2_slidingWindow$$18$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$)));
    (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$56_size$$47$$, $isLeft$$5_newStartTime$$2$$);
    (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$56_size$$47$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$);
    $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.dispatchEvent($evt$$56_size$$47$$)
  }
};
D.$DvtOverview$$.prototype.$finishHandleDrag$ = function $$DvtOverview$$$$$finishHandleDrag$$() {
  var $newSize$$2_start$$44$$ = this.$_start$, $end$$28_oldStartTime$$ = this.$_end$, $oldSize$$ = this.$_width$, $oldEndTime_size$$48$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this), $newEndTime$$3_slidingWindow$$19$$ = this.$getChildAt$(1), $newStartTime$$3_time$$13$$ = this.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $newEndTime$$3_slidingWindow$$19$$)), $newSize$$2_start$$44$$ = $oldEndTime_size$$48$$ * ($end$$28_oldStartTime$$ - $newSize$$2_start$$44$$) / 
  ($newStartTime$$3_time$$13$$ - $newSize$$2_start$$44$$), $end$$28_oldStartTime$$ = this.$getPositionDate$(this.$_oldStartPos$), $oldEndTime_size$$48$$ = this.$getPositionDate$(this.$_oldEndPos$);
  (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) ? ($newStartTime$$3_time$$13$$ = this.$getPositionDate$(this.$Width$ - ((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $newEndTime$$3_slidingWindow$$19$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $newEndTime$$3_slidingWindow$$19$$))), $newEndTime$$3_slidingWindow$$19$$ = this.$getPositionDate$(this.$Width$ - (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $newEndTime$$3_slidingWindow$$19$$))) : ($newStartTime$$3_time$$13$$ = 
  this.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $newEndTime$$3_slidingWindow$$19$$)), $newEndTime$$3_slidingWindow$$19$$ = this.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $newEndTime$$3_slidingWindow$$19$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $newEndTime$$3_slidingWindow$$19$$)));
  var $evt$$57$$ = new D.$DvtOverviewEvent$$("rangeChange");
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$57$$, "oldSize", $oldSize$$);
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$57$$, "newSize", $newSize$$2_start$$44$$);
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$57$$, "oldStartTime", $end$$28_oldStartTime$$);
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$57$$, "oldEndTime", $oldEndTime_size$$48$$);
  (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$57$$, $newStartTime$$3_time$$13$$);
  (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$57$$, $newEndTime$$3_slidingWindow$$19$$);
  this.dispatchEvent($evt$$57$$)
};
D.$JSCompiler_StaticMethods_ScrollTimeAxis$$ = function $$JSCompiler_StaticMethods_ScrollTimeAxis$$$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$) {
  var $rightCenter$$1_slidingWindow$$20$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$(1), $left$$18$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightCenter$$1_slidingWindow$$20$$), $leftCenter$$1$$ = $left$$18$$ + 0.5, $rightCenter$$1_slidingWindow$$20$$ = $left$$18$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightCenter$$1_slidingWindow$$20$$) - 0.5, $leftHandle$$3$$ = 
  $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$), $rightHandle$$4$$ = (0,D.$JSCompiler_StaticMethods_getRightHandle$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$), $leftTopBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 
  2)), $rightTopBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 3)), $bottomBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 4)), $topBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - 
  ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 5));
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftHandle$$3$$, $leftCenter$$1$$, $leftCenter$$1$$);
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$, $rightCenter$$1_slidingWindow$$20$$, $rightCenter$$1_slidingWindow$$20$$);
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftTopBar$$2$$, -1, $left$$18$$);
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightTopBar$$2$$, (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$), -1);
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $bottomBar$$2$$, (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftHandle$$3$$), (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$));
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $topBar$$2$$, (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftHandle$$3$$), (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$))
};
D.$DvtOverview$$.prototype.dispatchEvent = function $$DvtOverview$$$$dispatchEvent$($event$$615$$) {
  D.$DvtEventDispatcher$$.dispatchEvent(this.$_callback$, this.$_callbackObj$, this, $event$$615$$)
};
D.$DvtOverview$$.prototype.$destroy$ = function $$DvtOverview$$$$$destroy$$() {
  this.$EventManager$ && (this.$EventManager$.$removeListeners$(this), this.$EventManager$.$destroy$(), this.$EventManager$ = D.$JSCompiler_alias_NULL$$);
  D.$DvtTimeUtils$$.$supportsTouch$() ? (this.$removeEvtListener$(D.$DvtTouchEvent$TOUCHSTART$$, this.$HandleTouchStart$, D.$JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(D.$DvtTouchEvent$TOUCHMOVE$$, this.$HandleTouchMove$, D.$JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(D.$DvtTouchEvent$TOUCHEND$$, this.$HandleTouchEnd$, D.$JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandleShapeClick$, D.$JSCompiler_alias_FALSE$$, this)) : (this.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, 
  this.$HandleShapeMouseOver$, D.$JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandleShapeMouseOut$, D.$JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandleShapeClick$, D.$JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(D.$DvtKeyboardEvent$KEYDOWN$$, this.$HandleKeyDown$, D.$JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(D.$DvtKeyboardEvent$KEYUP$$, this.$HandleKeyUp$, D.$JSCompiler_alias_FALSE$$, 
  this));
  D.$DvtOverview$$.$superclass$.$destroy$.call(this)
};
D.$DvtOverviewParser$$ = function $$DvtOverviewParser$$$($view$$49$$) {
  this.Init($view$$49$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtOverviewParser$$, D.$DvtObj$$, "DvtOverviewParser");
D.$DvtOverviewParser$$.prototype.Init = (0,D.$JSCompiler_set$$)("$_view$");
D.$DvtOverviewParser$$.prototype.parse = function $$DvtOverviewParser$$$$parse$($data$$89$$) {
  return this.$ParseRootAttributes$($data$$89$$)
};
D.$DvtOverviewParser$$.prototype.$ParseRootAttributes$ = function $$DvtOverviewParser$$$$$ParseRootAttributes$$($options$$231$$) {
  var $ret$$92$$ = {};
  $ret$$92$$.$animationOnClick$ = $options$$231$$.animationOnClick;
  $options$$231$$.startTime != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.start = $options$$231$$.startTime);
  $options$$231$$.endTime != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.end = $options$$231$$.endTime);
  $ret$$92$$.start == D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.start = (new window.Date).getTime());
  if($ret$$92$$.end == D.$JSCompiler_alias_NULL$$ || $ret$$92$$.end <= $ret$$92$$.start) {
    $ret$$92$$.end = $ret$$92$$.start + 864E5
  }
  $options$$231$$.currentTime != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.currentTime = $options$$231$$.currentTime);
  $options$$231$$.initialFocusTime != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$initialFocusTime$ = $options$$231$$.initialFocusTime);
  $ret$$92$$.orientation = "horizontal";
  $options$$231$$.orientation != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.orientation = $options$$231$$.orientation);
  $ret$$92$$.$featuresOff$ = $options$$231$$.featuresOff;
  $ret$$92$$.$minimumWindowSize$ = $options$$231$$.minimumWindowSize;
  $ret$$92$$.$leftMargin$ = $options$$231$$.leftMargin;
  $ret$$92$$.$rightMargin$ = $options$$231$$.rightMargin;
  if($options$$231$$.viewportEndTime != D.$JSCompiler_alias_NULL$$) {
    var $viewportEndTime$$ = $options$$231$$.viewportEndTime, $viewportStartTime$$ = $ret$$92$$.start;
    $options$$231$$.viewportStartTime != D.$JSCompiler_alias_NULL$$ && $options$$231$$.viewportStartTime < $viewportEndTime$$ && ($viewportStartTime$$ = $options$$231$$.viewportStartTime);
    $ret$$92$$.width = $options$$231$$.viewportEndPos != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_calculateWidth$$)($ret$$92$$.start, $ret$$92$$.end, $viewportStartTime$$, $viewportEndTime$$, $options$$231$$.viewportEndPos) : (0,D.$JSCompiler_StaticMethods_calculateWidth$$)($ret$$92$$.start, $ret$$92$$.end, $viewportStartTime$$, $viewportEndTime$$, this.$_view$.$Width$);
    $ret$$92$$.$renderStart$ = $viewportStartTime$$
  }else {
    $ret$$92$$.$renderStart$ = $ret$$92$$.start
  }
  0 == $ret$$92$$.width && ($ret$$92$$.width = 1E3);
  $ret$$92$$.$overviewPosition$ = "below";
  $ret$$92$$.$selectionMode$ = "none";
  $ret$$92$$.$isRtl$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_view$.$getCtx$()).toString();
  $options$$231$$.rtl != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$isRtl$ = $options$$231$$.rtl.toString());
  $ret$$92$$.$handleFillColor$ = "#FFFFFF";
  $ret$$92$$.$handleTextureColor$ = "#B3C6DB";
  $ret$$92$$.$windowBackgroundColor$ = "#FFFFFF";
  $ret$$92$$.$windowBackgroundAlpha$ = 1;
  $ret$$92$$.$windowBorderTopStyle$ = "solid";
  $ret$$92$$.$windowBorderRightStyle$ = "solid";
  $ret$$92$$.$windowBorderBottomStyle$ = "solid";
  $ret$$92$$.$windowBorderLeftStyle$ = "solid";
  $ret$$92$$.$windowBorderTopColor$ = "#4F4F4F";
  $ret$$92$$.$windowBorderRightColor$ = "#4F4F4F";
  $ret$$92$$.$windowBorderBottomColor$ = "#4F4F4F";
  $ret$$92$$.$windowBorderLeftColor$ = "#4F4F4F";
  $ret$$92$$.$overviewBackgroundColor$ = "#E6ECF3";
  $ret$$92$$.$currentTimeIndicatorColor$ = "#C000D1";
  $ret$$92$$.$timeIndicatorColor$ = "#BCC7D2";
  $ret$$92$$.$timeAxisBarColor$ = "#e5e5e5";
  $ret$$92$$.$timeAxisBarOpacity$ = 1;
  $ret$$92$$.$leftFilterPanelColor$ = "#FFFFFF";
  $ret$$92$$.$leftFilterPanelAlpha$ = 0.7;
  $ret$$92$$.$rightFilterPanelColor$ = "#FFFFFF";
  $ret$$92$$.$rightFilterPanelAlpha$ = 0.7;
  $options$$231$$.style != D.$JSCompiler_alias_NULL$$ && ($options$$231$$.style.handleFillColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$handleFillColor$ = $options$$231$$.style.handleFillColor), $options$$231$$.style.handleTextureColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$handleTextureColor$ = $options$$231$$.style.handleTextureColor), $options$$231$$.style.handleBackgroundImage != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$handleBackgroundImage$ = $options$$231$$.style.handleBackgroundImage), 
  $options$$231$$.style.handleWidth != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$handleWidth$ = $options$$231$$.style.handleWidth), $options$$231$$.style.handleHeight != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$handleHeight$ = $options$$231$$.style.handleHeight), $options$$231$$.style.windowBackgroundColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBackgroundColor$ = $options$$231$$.style.windowBackgroundColor), $options$$231$$.style.windowBackgroundAlpha != D.$JSCompiler_alias_NULL$$ && 
  ($ret$$92$$.$windowBackgroundAlpha$ = $options$$231$$.style.windowBackgroundAlpha), $options$$231$$.style.windowBorderTopStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBorderTopStyle$ = $options$$231$$.style.windowBorderTopStyle), $options$$231$$.style.windowBorderRightStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBorderRightStyle$ = $options$$231$$.style.windowBorderRightStyle), $options$$231$$.style.windowBorderBottomStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBorderBottomStyle$ = 
  $options$$231$$.style.windowBorderBottomStyle), $options$$231$$.style.windowBorderLeftStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBorderLeftStyle$ = $options$$231$$.style.windowBorderLeftStyle), $options$$231$$.style.windowBorderTopColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBorderTopColor$ = $options$$231$$.style.windowBorderTopColor), $options$$231$$.style.windowBorderRightColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBorderRightColor$ = $options$$231$$.style.windowBorderRightColor), 
  $options$$231$$.style.windowBorderBottomColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBorderBottomColor$ = $options$$231$$.style.windowBorderBottomColor), $options$$231$$.style.windowBorderLeftColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBorderLeftColor$ = $options$$231$$.style.windowBorderLeftColor), $options$$231$$.style.overviewBackgroundColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$overviewBackgroundColor$ = $options$$231$$.style.overviewBackgroundColor), $options$$231$$.style.currentTimeIndicatorColor != 
  D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$currentTimeIndicatorColor$ = $options$$231$$.style.currentTimeIndicatorColor), $options$$231$$.style.timeIndicatorColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$timeIndicatorColor$ = $options$$231$$.style.timeIndicatorColor), $options$$231$$.style.leftFilterPanelColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$leftFilterPanelColor$ = $options$$231$$.style.leftFilterPanelColor), $options$$231$$.style.leftFilterPanelAlpha != D.$JSCompiler_alias_NULL$$ && 
  ($ret$$92$$.$leftFilterPanelAlpha$ = $options$$231$$.style.leftFilterPanelAlpha), $options$$231$$.style.rightFilterPanelColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$rightFilterPanelColor$ = $options$$231$$.style.rightFilterPanelColor), $options$$231$$.style.rightFilterPanelAlpha != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$rightFilterPanelAlpha$ = $options$$231$$.style.rightFilterPanelAlpha));
  return $ret$$92$$
};
D.$JSCompiler_StaticMethods_calculateWidth$$ = function $$JSCompiler_StaticMethods_calculateWidth$$$($number$$1_startTime$$3$$, $endTime$$3$$, $denominator_viewportStartTime$$1$$, $viewportEndTime$$1$$, $viewportEndPos$$) {
  $number$$1_startTime$$3$$ = $viewportEndPos$$ * ($endTime$$3$$ - $number$$1_startTime$$3$$);
  $denominator_viewportStartTime$$1$$ = $viewportEndTime$$1$$ - $denominator_viewportStartTime$$1$$;
  return 0 == $number$$1_startTime$$3$$ || 0 == $denominator_viewportStartTime$$1$$ ? 0 : $number$$1_startTime$$3$$ / $denominator_viewportStartTime$$1$$
};
D.$DvtOverviewEvent$$ = function $$DvtOverviewEvent$$$($type$$238$$) {
  this.Init("overview");
  this.$_subtype$ = $type$$238$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtOverviewEvent$$, D.$DvtBaseComponentEvent$$, "DvtOverviewEvent");
D.$DvtOverviewEvent$$.prototype.$getSubType$ = (0,D.$JSCompiler_get$$)("$_subtype$");
D.$DvtOverviewEvent$$.prototype.setTime = function $$DvtOverviewEvent$$$$setTime$($time$$14$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)(this, "time", $time$$14$$)
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
D.$DvtOverviewEvent$$.prototype.$setPosition$ = function $$DvtOverviewEvent$$$$$setPosition$$($pos$$65$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)(this, "pos", $pos$$65$$)
};
D.$DvtOverviewEvent$$.prototype.$getPosition$ = function $$DvtOverviewEvent$$$$$getPosition$$() {
  return this.$getParamValue$("pos")
};
D.$DvtOverviewEventManager$$ = function $$DvtOverviewEventManager$$$($overview$$1$$) {
  this.Init($overview$$1$$.$getCtx$(), $overview$$1$$.$processEvent$, $overview$$1$$);
  this.$_overview$ = $overview$$1$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtOverviewEventManager$$, D.$DvtEventManager$$, "DvtOverviewEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtOverviewEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$addListeners$ = function $$JSCompiler_prototypeAlias$$$$addListeners$$($displayable$$81$$) {
  D.$DvtOverviewEventManager$$.$superclass$.$addListeners$.call(this, $displayable$$81$$);
  D.$DvtSvgDocumentUtils$$.$addDragListeners$(this.$_overview$, this.$_onDragStart$, this.$_onDragMove$, this.$_onDragEnd$, this)
};
D.$JSCompiler_prototypeAlias$$.$_onDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onDragStart$$($event$$616$$) {
  return(0,D.$DvtAgent$isTouchDevice$$)() ? this.$_onTouchDragStart$($event$$616$$) : this.$_onMouseDragStart$($event$$616$$)
};
D.$JSCompiler_prototypeAlias$$.$_onDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onDragMove$$($event$$617$$) {
  return(0,D.$DvtAgent$isTouchDevice$$)() ? this.$_onTouchDragMove$($event$$617$$) : this.$_onMouseDragMove$($event$$617$$)
};
D.$JSCompiler_prototypeAlias$$.$_onDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onDragEnd$$($event$$618$$) {
  return(0,D.$DvtAgent$isTouchDevice$$)() ? this.$_onTouchDragEnd$($event$$618$$) : this.$_onMouseDragEnd$($event$$618$$)
};
D.$JSCompiler_prototypeAlias$$.$_getRelativePosition$ = function $$JSCompiler_prototypeAlias$$$$_getRelativePosition$$($pageX$$9$$, $pageY$$9$$) {
  this.$_stageAbsolutePosition$ || (this.$_stageAbsolutePosition$ = (0,D.$JSCompiler_StaticMethods_getStageAbsolutePosition$$)(this.$_context$));
  return new D.$DvtPoint$$($pageX$$9$$ - this.$_stageAbsolutePosition$.x, $pageY$$9$$ - this.$_stageAbsolutePosition$.y)
};
D.$JSCompiler_prototypeAlias$$.$_onMouseDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragStart$$($event$$619$$) {
  if(2 != $event$$619$$.button) {
    var $relPos$$59$$ = this.$_getRelativePosition$($event$$619$$.pageX, $event$$619$$.pageY);
    (0,D.$DvtEventManager$consumeEvent$$)($event$$619$$);
    this.$getCtx$().$_stage$.$_SVGRoot$.parentNode.focus();
    return this.$_overview$.$beginDragPan$($event$$619$$, $relPos$$59$$.x, $relPos$$59$$.y)
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$_onMouseDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragMove$$($event$$620$$) {
  var $relPos$$60$$ = this.$_getRelativePosition$($event$$620$$.pageX, $event$$620$$.pageY);
  $event$$620$$.stopPropagation();
  this.$_overview$.$contDragPan$($event$$620$$, $relPos$$60$$.x, $relPos$$60$$.y);
  return D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$_onMouseDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragEnd$$($event$$621$$) {
  $event$$621$$.stopPropagation();
  this.$_overview$.$endDragPan$();
  this.$_stageAbsolutePosition$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$_onTouchDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragStart$$($event$$622$$) {
  var $relPos$$61_touches$$12$$ = $event$$622$$.touches;
  $event$$622$$.stopPropagation();
  return 1 == $relPos$$61_touches$$12$$.length ? ($relPos$$61_touches$$12$$ = this.$_getRelativePosition$($relPos$$61_touches$$12$$[0].pageX, $relPos$$61_touches$$12$$[0].pageY), $event$$622$$.preventDefault(), this.$_overview$.$beginDragPan$($event$$622$$, $relPos$$61_touches$$12$$.x, $relPos$$61_touches$$12$$.y)) : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$_onTouchDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragMove$$($event$$623$$) {
  var $relPos$$62_touches$$13$$ = $event$$623$$.touches;
  1 == $relPos$$62_touches$$13$$.length && ($relPos$$62_touches$$13$$ = this.$_getRelativePosition$($relPos$$62_touches$$13$$[0].pageX, $relPos$$62_touches$$13$$[0].pageY), this.$_overview$.$contDragPan$($event$$623$$, $relPos$$62_touches$$13$$.x, $relPos$$62_touches$$13$$.y), $event$$623$$.preventDefault());
  $event$$623$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$_onTouchDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragEnd$$($event$$624$$) {
  this.$_overview$.$endDragPan$();
  (0,D.$DvtEventManager$consumeEvent$$)($event$$624$$);
  this.$_stageAbsolutePosition$ = D.$JSCompiler_alias_NULL$$
};

  return D;
});