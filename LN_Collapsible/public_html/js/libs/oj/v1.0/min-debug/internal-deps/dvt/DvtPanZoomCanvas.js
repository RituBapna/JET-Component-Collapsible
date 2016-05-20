define(['./DvtToolkit'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtComboBox$$ = function $$DvtComboBox$$$($context$$358$$, $id$$160$$, $styleMap$$49$$) {
  this.Init($context$$358$$, $id$$160$$, $styleMap$$49$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtComboBox$$, D.$DvtContainer$$, "DvtComboBox");
D.$DvtComboBox$$.prototype.Init = function $$DvtComboBox$$$$Init$($context$$359$$, $id$$161$$, $styleMap$$50$$) {
  D.$DvtComboBox$$.$superclass$.Init.call(this, $context$$359$$, D.$JSCompiler_alias_NULL$$, $id$$161$$);
  this.$_styleMap$ = $styleMap$$50$$;
  this.$_itemButtonStates$ = [];
  this.$_items$ = [];
  this.$_tooltips$ = [];
  this.$_selectedIndex$ = 0;
  this.$_bRemoveDropdown$ = this.$_bStaticButtonStates$ = D.$JSCompiler_alias_FALSE$$;
  this.$_maxItemDim$ = new D.$DvtRectangle$$(0, 0, 0, 0);
  this.$_dim$ = new D.$DvtRectangle$$(0, 0, 0, 0);
  this.$_tooltipManager$ = $context$$359$$.$getTooltipManager$();
  this.$_isTouchDevice$ = (0,D.$DvtAgent$isTouchDevice$$)();
  this.$_button$ = (0,D.$JSCompiler_StaticMethods_createButton$$)(this, $id$$161$$ + "_cl");
  this.$addChild$(this.$_button$);
  this.$_contentArea$ = new D.$DvtContainer$$($context$$359$$);
  this.$_contentArea$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$addChild$(this.$_contentArea$);
  this.$_hideDropdownTimer$ = new D.$DvtTimer$$($context$$359$$, 100, this.$HandleHideDropdownTimer$, this, 1);
  this.$_outOfFocusCheckTimer$ = new D.$DvtTimer$$($context$$359$$, 100, this.$HandleOutOfFocusCheckTimer$, this, 1);
  this.$_dropdownItemClickEvent$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtComboBox$$.prototype.$setSelectedIndex$ = function $$DvtComboBox$$$$$setSelectedIndex$$($comboBoxEvent$$inline_7005_selectedIndex$$5$$) {
  this.$_selectedIndex$ = $comboBoxEvent$$inline_7005_selectedIndex$$5$$;
  this.$_bStaticButtonStates$ || (0,D.$JSCompiler_StaticMethods_UpdateContentArea$$)(this);
  $comboBoxEvent$$inline_7005_selectedIndex$$5$$ = new D.$DvtComboBoxEvent$$("cbItemChange", $comboBoxEvent$$inline_7005_selectedIndex$$5$$, this.$_event$);
  this.$_event$ = D.$JSCompiler_alias_NULL$$;
  this.$FireListener$($comboBoxEvent$$inline_7005_selectedIndex$$5$$)
};
D.$JSCompiler_StaticMethods_createButton$$ = function $$JSCompiler_StaticMethods_createButton$$$($JSCompiler_StaticMethods_createButton$self$$, $id$$162$$) {
  var $JSCompiler_temp_const$$130_button$$71$$ = $JSCompiler_StaticMethods_createButton$self$$.$_context$, $context$$inline_7009_dim$$inline_7016_s$$inline_7017$$ = $JSCompiler_StaticMethods_createButton$self$$.$_context$, $dim$$inline_7010_s$$inline_7011$$ = $JSCompiler_StaticMethods_createButton$self$$.$getDimensions$(), $dim$$inline_7010_s$$inline_7011$$ = new D.$DvtRect$$($context$$inline_7009_dim$$inline_7016_s$$inline_7017$$, 0, 0, $dim$$inline_7010_s$$inline_7011$$.$w$, $dim$$inline_7010_s$$inline_7011$$.$h$, 
  $id$$162$$ + "_up");
  (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($dim$$inline_7010_s$$inline_7011$$, D.$DvtButtonLAFUtils$$.$ROUND_RECT_ELLIPSE$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($dim$$inline_7010_s$$inline_7011$$);
  $dim$$inline_7010_s$$inline_7011$$.$addChild$((0,D.$DvtComboBox$DrawArrow$$)($context$$inline_7009_dim$$inline_7016_s$$inline_7017$$, $dim$$inline_7010_s$$inline_7011$$.getWidth(), $dim$$inline_7010_s$$inline_7011$$.getHeight()));
  var $context$$inline_7015_context$$inline_7021$$ = $JSCompiler_StaticMethods_createButton$self$$.$_context$, $context$$inline_7009_dim$$inline_7016_s$$inline_7017$$ = $JSCompiler_StaticMethods_createButton$self$$.$getDimensions$(), $context$$inline_7009_dim$$inline_7016_s$$inline_7017$$ = new D.$DvtRect$$($context$$inline_7015_context$$inline_7021$$, 0, 0, $context$$inline_7009_dim$$inline_7016_s$$inline_7017$$.$w$, $context$$inline_7009_dim$$inline_7016_s$$inline_7017$$.$h$, $id$$162$$ + "_up");
  $context$$inline_7009_dim$$inline_7016_s$$inline_7017$$.$setSolidStroke$(D.$DvtButtonLAFUtils$$.$BORDER_COLOR$);
  $context$$inline_7009_dim$$inline_7016_s$$inline_7017$$.$setFill$(new D.$DvtLinearGradientFill$$(0, [D.$DvtButtonLAFUtils$$.$GRADIENT_LIGHT$, D.$DvtButtonLAFUtils$$.$GRADIENT_DARK$]));
  (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($context$$inline_7009_dim$$inline_7016_s$$inline_7017$$, D.$DvtButtonLAFUtils$$.$ROUND_RECT_ELLIPSE$);
  $context$$inline_7009_dim$$inline_7016_s$$inline_7017$$.$addChild$((0,D.$DvtComboBox$DrawArrow$$)($context$$inline_7015_context$$inline_7021$$, $context$$inline_7009_dim$$inline_7016_s$$inline_7017$$.getWidth(), $context$$inline_7009_dim$$inline_7016_s$$inline_7017$$.getHeight()));
  var $context$$inline_7015_context$$inline_7021$$ = $JSCompiler_StaticMethods_createButton$self$$.$_context$, $dim$$inline_7022_s$$inline_7023$$ = $JSCompiler_StaticMethods_createButton$self$$.$getDimensions$(), $dim$$inline_7022_s$$inline_7023$$ = new D.$DvtRect$$($context$$inline_7015_context$$inline_7021$$, 0, 0, $dim$$inline_7022_s$$inline_7023$$.$w$, $dim$$inline_7022_s$$inline_7023$$.$h$, $id$$162$$ + "_up");
  (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($dim$$inline_7022_s$$inline_7023$$, D.$DvtButtonLAFUtils$$.$ROUND_RECT_ELLIPSE$);
  $dim$$inline_7022_s$$inline_7023$$.$setSolidStroke$(D.$DvtButtonLAFUtils$$.$BORDER_COLOR$);
  $dim$$inline_7022_s$$inline_7023$$.$setFill$(new D.$DvtLinearGradientFill$$(0, [D.$DvtButtonLAFUtils$$.$GRADIENT_DARK$, D.$DvtButtonLAFUtils$$.$GRADIENT_LIGHT$]));
  $dim$$inline_7022_s$$inline_7023$$.$addChild$((0,D.$DvtComboBox$DrawArrow$$)($context$$inline_7015_context$$inline_7021$$, $dim$$inline_7022_s$$inline_7023$$.getWidth(), $dim$$inline_7022_s$$inline_7023$$.getHeight()));
  $JSCompiler_temp_const$$130_button$$71$$ = new D.$DvtButton$$($JSCompiler_temp_const$$130_button$$71$$, $dim$$inline_7010_s$$inline_7011$$, $context$$inline_7009_dim$$inline_7016_s$$inline_7017$$, $dim$$inline_7022_s$$inline_7023$$, D.$JSCompiler_alias_NULL$$, $id$$162$$);
  (0,D.$JSCompiler_StaticMethods_setCallback$$)($JSCompiler_temp_const$$130_button$$71$$, $JSCompiler_StaticMethods_createButton$self$$.$HandleExpandClick$, $JSCompiler_StaticMethods_createButton$self$$);
  $JSCompiler_temp_const$$130_button$$71$$.setCursor("pointer");
  $JSCompiler_StaticMethods_createButton$self$$.$_isTouchDevice$ || $JSCompiler_temp_const$$130_button$$71$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, $JSCompiler_StaticMethods_createButton$self$$.$HandleButtonDown$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_createButton$self$$);
  $JSCompiler_temp_const$$130_button$$71$$.$_bToggleEnabled$ = D.$JSCompiler_alias_TRUE$$;
  return $JSCompiler_temp_const$$130_button$$71$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtComboBox$$.prototype;
D.$JSCompiler_prototypeAlias$$.$addItem$ = function $$JSCompiler_prototypeAlias$$$$addItem$$($obj$$185$$, $buttonStates_itdim_tooltip$$41$$, $enaState$$1$$, $ovrState$$4$$, $dwnState$$4$$) {
  $obj$$185$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$_items$.push($obj$$185$$);
  this.$_tooltips$.push($buttonStates_itdim_tooltip$$41$$);
  $buttonStates_itdim_tooltip$$41$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$(this.$_context$, $enaState$$1$$ ? $enaState$$1$$ : $obj$$185$$);
  var $maxItemDim$$ = this.$_maxItemDim$, $dim$$39$$ = this.$getDimensions$();
  $buttonStates_itdim_tooltip$$41$$.$w$ > $maxItemDim$$.$w$ && ($maxItemDim$$.$w$ = $buttonStates_itdim_tooltip$$41$$.$w$, $dim$$39$$.$w$ = $buttonStates_itdim_tooltip$$41$$.$w$ + 16);
  $buttonStates_itdim_tooltip$$41$$.$h$ > $maxItemDim$$.$h$ && ($maxItemDim$$.$h$ = $buttonStates_itdim_tooltip$$41$$.$h$, $dim$$39$$.$h$ = $buttonStates_itdim_tooltip$$41$$.$h$);
  this.$_maxItemDim$ = $maxItemDim$$;
  $buttonStates_itdim_tooltip$$41$$ = D.$JSCompiler_alias_NULL$$;
  $enaState$$1$$ && ($ovrState$$4$$ && $dwnState$$4$$) && ($buttonStates_itdim_tooltip$$41$$ = [], $buttonStates_itdim_tooltip$$41$$[0] = $enaState$$1$$, $buttonStates_itdim_tooltip$$41$$[1] = $ovrState$$4$$, $buttonStates_itdim_tooltip$$41$$[2] = $dwnState$$4$$);
  this.$_itemButtonStates$.push($buttonStates_itdim_tooltip$$41$$);
  this.$_bStaticButtonStates$ || (this.removeChild(this.$_button$), this.$_button$ = (0,D.$JSCompiler_StaticMethods_createButton$$)(this, $obj$$185$$.getId()), this.$addChildAt$(this.$_button$, 0), (0,D.$JSCompiler_StaticMethods_UpdateContentArea$$)(this))
};
D.$JSCompiler_prototypeAlias$$.getItem = function $$JSCompiler_prototypeAlias$$$getItem$($i$$609$$) {
  return this.$_items$[$i$$609$$]
};
D.$JSCompiler_prototypeAlias$$.$getSelectedItem$ = function $$JSCompiler_prototypeAlias$$$$getSelectedItem$$() {
  var $selIndex$$1$$ = this.$_selectedIndex$;
  return 0 > $selIndex$$1$$ || $selIndex$$1$$ > this.$_items$.length - 1 ? D.$JSCompiler_alias_NULL$$ : this.$_items$[$selIndex$$1$$]
};
D.$JSCompiler_prototypeAlias$$.$HandleExpandClick$ = function $$JSCompiler_prototypeAlias$$$$HandleExpandClick$$($context$$364_event$$537_stage$$7$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($context$$364_event$$537_stage$$7$$);
  this.$_bRemoveDropdown$ && (this.$_bRemoveDropdown$ = D.$JSCompiler_alias_FALSE$$, this.$_dropdown$ && (this.$_dropdown$.$setVisible$(D.$JSCompiler_alias_FALSE$$), this.$_dropdown$.getParent().removeChild(this.$_dropdown$), this.$_dropdown$ = D.$JSCompiler_alias_NULL$$));
  $context$$364_event$$537_stage$$7$$ = this.$_context$;
  for(var $comboBoxStyles$$inline_7028_dd$$inline_7041_dddim_transX$$8$$ = this.$_styleMap$ ? this.$_styleMap$.comboBox : D.$JSCompiler_alias_NULL$$, $bgAlpha$$inline_7043_leftPadding$$inline_7029$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_7028_dd$$inline_7041_dddim_transX$$8$$, "paddingLeft", 0), $bottomPadding$$inline_7030$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_7028_dd$$inline_7041_dddim_transX$$8$$, "paddingBottom", 0), $rightPadding$$inline_7031$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_7028_dd$$inline_7041_dddim_transX$$8$$, 
  "paddingRight", 0), $interItemPadding$$inline_7032$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_7028_dd$$inline_7041_dddim_transX$$8$$, "paddingInner", 0), $currY$$inline_7033$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_7028_dd$$inline_7041_dddim_transX$$8$$, "paddingTop", 0), $context$$inline_7034$$ = this.$_context$, $dim$$inline_7035_proxy$$inline_7040$$, $itemSprite$$inline_7036$$, $item$$inline_7037$$, $bgColor$$inline_7042_content$$inline_7038_dim$$40$$ = new D.$DvtContainer$$($context$$inline_7034$$, 
  "__dd"), $i$$inline_7039$$ = 0;$i$$inline_7039$$ < this.$_items$.length;$i$$inline_7039$$++) {
    $item$$inline_7037$$ = this.$_items$[$i$$inline_7039$$], $dim$$inline_7035_proxy$$inline_7040$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$inline_7034$$, $item$$inline_7037$$), $itemSprite$$inline_7036$$ = new D.$DvtContainer$$($context$$inline_7034$$, "__it" + $i$$inline_7039$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($itemSprite$$inline_7036$$, $bgAlpha$$inline_7043_leftPadding$$inline_7029$$, $currY$$inline_7033$$), $itemSprite$$inline_7036$$.$addChild$($item$$inline_7037$$), 
    $item$$inline_7037$$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$), $item$$inline_7037$$.setCursor("pointer"), $currY$$inline_7033$$ += $dim$$inline_7035_proxy$$inline_7040$$.$h$ + $interItemPadding$$inline_7032$$, this.$_eventManager$ && ($dim$$inline_7035_proxy$$inline_7040$$ = new D.$DvtControlPanelEventHandlerProxy$$(this, this.$HandleDropdownItemClick$, this.$HandleButtonDown$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, this.$_tooltips$[$i$$inline_7039$$]), 
    this.$_eventManager$.$associate$($item$$inline_7037$$, $dim$$inline_7035_proxy$$inline_7040$$)), $bgColor$$inline_7042_content$$inline_7038_dim$$40$$.$addChild$($itemSprite$$inline_7036$$)
  }
  $comboBoxStyles$$inline_7028_dd$$inline_7041_dddim_transX$$8$$ = D.$DvtButtonLAFUtils$$.$drawDropdownShape$($context$$inline_7034$$, this.$_maxItemDim$.$w$ + $bgAlpha$$inline_7043_leftPadding$$inline_7029$$ + $rightPadding$$inline_7031$$, $currY$$inline_7033$$ + $bottomPadding$$inline_7030$$ - $interItemPadding$$inline_7032$$, $comboBoxStyles$$inline_7028_dd$$inline_7041_dddim_transX$$8$$);
  $comboBoxStyles$$inline_7028_dd$$inline_7041_dddim_transX$$8$$.$addChild$($bgColor$$inline_7042_content$$inline_7038_dim$$40$$);
  $bgColor$$inline_7042_content$$inline_7038_dim$$40$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "background-color", D.$JSCompiler_alias_NULL$$);
  $bgAlpha$$inline_7043_leftPadding$$inline_7029$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "backgroundAlpha", 1);
  $comboBoxStyles$$inline_7028_dd$$inline_7041_dddim_transX$$8$$.$setSolidStroke$((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-color", D.$JSCompiler_alias_NULL$$), (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "borderAlpha", 1));
  $bgColor$$inline_7042_content$$inline_7038_dim$$40$$ && $comboBoxStyles$$inline_7028_dd$$inline_7041_dddim_transX$$8$$.$setSolidFill$($bgColor$$inline_7042_content$$inline_7038_dim$$40$$, $bgAlpha$$inline_7043_leftPadding$$inline_7029$$);
  this.$_dropdown$ = $comboBoxStyles$$inline_7028_dd$$inline_7041_dddim_transX$$8$$;
  $comboBoxStyles$$inline_7028_dd$$inline_7041_dddim_transX$$8$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$364_event$$537_stage$$7$$, this.$_dropdown$);
  this.$addChild$(this.$_dropdown$);
  $bgColor$$inline_7042_content$$inline_7038_dim$$40$$ = this.$_button$.$getDimensions$();
  $comboBoxStyles$$inline_7028_dd$$inline_7041_dddim_transX$$8$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$364_event$$537_stage$$7$$) ? -$comboBoxStyles$$inline_7028_dd$$inline_7041_dddim_transX$$8$$.$w$ + 1 * $bgColor$$inline_7042_content$$inline_7038_dim$$40$$.$w$ / 4 : 3 * $bgColor$$inline_7042_content$$inline_7038_dim$$40$$.$w$ / 4;
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_dropdown$, $comboBoxStyles$$inline_7028_dd$$inline_7041_dddim_transX$$8$$, 3 * $bgColor$$inline_7042_content$$inline_7038_dim$$40$$.$h$ / 4);
  this.$_button$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  (0,D.$JSCompiler_StaticMethods_setToggled$$)(this.$_button$, D.$JSCompiler_alias_TRUE$$);
  this.$FireListener$(new D.$DvtComboBoxEvent$$("cbShowDropdown"));
  ($context$$364_event$$537_stage$$7$$ = $context$$364_event$$537_stage$$7$$.$_stage$) && (this.$_isTouchDevice$ ? $context$$364_event$$537_stage$$7$$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandleStageMouseFocusChange$, D.$JSCompiler_alias_TRUE$$, this) : $context$$364_event$$537_stage$$7$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$HandleStageMouseFocusChange$, D.$JSCompiler_alias_TRUE$$, this))
};
D.$JSCompiler_prototypeAlias$$.$HandleHideDropdownTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleHideDropdownTimer$$() {
  (0,D.$JSCompiler_StaticMethods_HideDropdown$$)(this);
  this.$_bStaticButtonStates$ || (0,D.$JSCompiler_StaticMethods_UpdateContentArea$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$HandleStageMouseFocusChange$ = function $$JSCompiler_prototypeAlias$$$$HandleStageMouseFocusChange$$() {
  this.$_dropdownItemClickEvent$ = D.$JSCompiler_alias_FALSE$$;
  this.$_outOfFocusCheckTimer$.reset();
  this.$_outOfFocusCheckTimer$.start()
};
D.$JSCompiler_prototypeAlias$$.$HandleOutOfFocusCheckTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleOutOfFocusCheckTimer$$() {
  this.$_dropdownItemClickEvent$ || (this.$_hideDropdownTimer$.reset(), this.$_hideDropdownTimer$.start())
};
D.$JSCompiler_prototypeAlias$$.$HandleButtonDown$ = function $$JSCompiler_prototypeAlias$$$$HandleButtonDown$$() {
  (0,D.$DvtEventManager$consumeEvent$$)()
};
D.$JSCompiler_prototypeAlias$$.$HandleDropdownItemClick$ = function $$JSCompiler_prototypeAlias$$$$HandleDropdownItemClick$$($event$$542$$) {
  this.$_dropdownItemClickEvent$ = D.$JSCompiler_alias_TRUE$$;
  this.$_hideDropdownTimer$.stop();
  (0,D.$DvtEventManager$consumeEvent$$)($event$$542$$);
  var $displayObject$$inline_7045_eventTarget$$;
  $displayObject$$inline_7045_eventTarget$$ = $event$$542$$.target;
  for(var $content$$8_n$$inline_7046$$, $id$$inline_7047$$;$displayObject$$inline_7045_eventTarget$$;) {
    if(($id$$inline_7047$$ = $displayObject$$inline_7045_eventTarget$$.getId()) && $displayObject$$inline_7045_eventTarget$$ instanceof D.$DvtContainer$$ && "__it" == $id$$inline_7047$$.substr(0, 4)) {
      $content$$8_n$$inline_7046$$ = $displayObject$$inline_7045_eventTarget$$;
      break
    }
    $displayObject$$inline_7045_eventTarget$$ = $displayObject$$inline_7045_eventTarget$$.getParent()
  }
  $displayObject$$inline_7045_eventTarget$$ = $content$$8_n$$inline_7046$$;
  var $index$$152$$;
  this.$_dropdown$ && $displayObject$$inline_7045_eventTarget$$ && ($content$$8_n$$inline_7046$$ = this.$_dropdown$.$getChildAt$(0)) && ($index$$152$$ = $content$$8_n$$inline_7046$$.$getChildIndex$($displayObject$$inline_7045_eventTarget$$));
  (0,D.$JSCompiler_StaticMethods_HideDropdown$$)(this);
  this.$_event$ = $event$$542$$;
  this.$setSelectedIndex$($index$$152$$)
};
D.$JSCompiler_StaticMethods_HideDropdown$$ = function $$JSCompiler_StaticMethods_HideDropdown$$$($JSCompiler_StaticMethods_HideDropdown$self$$) {
  $JSCompiler_StaticMethods_HideDropdown$self$$.$_dropdown$ && ($JSCompiler_StaticMethods_HideDropdown$self$$.$_dropdown$.$setVisible$(D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_setToggled$$)($JSCompiler_StaticMethods_HideDropdown$self$$.$_button$, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_HideDropdown$self$$.$FireListener$(new D.$DvtComboBoxEvent$$("cbHideDropdown")), $JSCompiler_StaticMethods_HideDropdown$self$$.$_bRemoveDropdown$ = D.$JSCompiler_alias_TRUE$$);
  var $stage$$8$$ = $JSCompiler_StaticMethods_HideDropdown$self$$.$_context$.$_stage$;
  $stage$$8$$ && ($JSCompiler_StaticMethods_HideDropdown$self$$.$_isTouchDevice$ ? $stage$$8$$.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, $JSCompiler_StaticMethods_HideDropdown$self$$.$HandleStageMouseFocusChange$, D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_HideDropdown$self$$) : $stage$$8$$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, $JSCompiler_StaticMethods_HideDropdown$self$$.$HandleStageMouseFocusChange$, D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_HideDropdown$self$$));
  $JSCompiler_StaticMethods_HideDropdown$self$$.$_button$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$)
};
D.$DvtComboBox$$.prototype.$getDimensions$ = (0,D.$JSCompiler_get$$)("$_dim$");
D.$DvtComboBox$$.prototype.$getItems$ = (0,D.$JSCompiler_get$$)("$_items$");
D.$JSCompiler_StaticMethods_UpdateContentArea$$ = function $$JSCompiler_StaticMethods_UpdateContentArea$$$($JSCompiler_StaticMethods_UpdateContentArea$self$$) {
  var $bUseItem$$ = D.$JSCompiler_alias_TRUE$$, $buttonStates$$1_selIndex$$2$$ = $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_selectedIndex$;
  if($JSCompiler_StaticMethods_UpdateContentArea$self$$.$_itemButtonStates$ && $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_itemButtonStates$.length > $buttonStates$$1_selIndex$$2$$ && ($buttonStates$$1_selIndex$$2$$ = $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_itemButtonStates$[$buttonStates$$1_selIndex$$2$$]) && 2 < $buttonStates$$1_selIndex$$2$$.length) {
    (0,D.$JSCompiler_StaticMethods_setUpState$$)($JSCompiler_StaticMethods_UpdateContentArea$self$$.$_button$, $buttonStates$$1_selIndex$$2$$[0]), (0,D.$JSCompiler_StaticMethods_setOverState$$)($JSCompiler_StaticMethods_UpdateContentArea$self$$.$_button$, $buttonStates$$1_selIndex$$2$$[1]), (0,D.$JSCompiler_StaticMethods_setDownState$$)($JSCompiler_StaticMethods_UpdateContentArea$self$$.$_button$, $buttonStates$$1_selIndex$$2$$[2]), $bUseItem$$ = D.$JSCompiler_alias_FALSE$$
  }
  $bUseItem$$ && (0 < $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_contentArea$.$getNumChildren$() && $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_contentArea$.$removeChildAt$(0), $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_contentArea$.$addChild$($JSCompiler_StaticMethods_UpdateContentArea$self$$.$getSelectedItem$()))
};
D.$DvtComboBox$DrawArrow$$ = function $$DvtComboBox$DrawArrow$$$($context$$366_shape$$48$$, $ww$$80$$, $hh$$66$$) {
  var $aPoints$$ = [];
  $aPoints$$.push($ww$$80$$ - 12, $hh$$66$$ / 2 - 2);
  $aPoints$$.push($ww$$80$$ - 4, $hh$$66$$ / 2 - 2);
  $aPoints$$.push($ww$$80$$ - 8, $hh$$66$$ / 2 + 2);
  $aPoints$$.push($ww$$80$$ - 12, $hh$$66$$ / 2 - 2);
  $context$$366_shape$$48$$ = new D.$DvtPolygon$$($context$$366_shape$$48$$, $aPoints$$, D.$JSCompiler_alias_NULL$$);
  $context$$366_shape$$48$$.$setSolidStroke$(D.$DvtButtonLAFUtils$$.$BORDER_COLOR$);
  $context$$366_shape$$48$$.$setSolidFill$(D.$DvtButtonLAFUtils$$.$BORDER_COLOR$);
  $context$$366_shape$$48$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  return $context$$366_shape$$48$$
};
D.$DvtComboBox$$.prototype.$setEventManager$ = (0,D.$JSCompiler_set$$)("$_eventManager$");
D.$DropdownItemSprite$$ = function $$DropdownItemSprite$$$($context$$367$$, $x$$207$$, $y$$180$$, $w$$33$$, $h$$26$$, $id$$167$$) {
  this.Init($context$$367$$, $x$$207$$, $y$$180$$, $w$$33$$, $h$$26$$, $id$$167$$)
};
D.$DvtObj$$.$createSubclass$(D.$DropdownItemSprite$$, D.$DvtRect$$, "DropdownItemSprite");
D.$DropdownItemSprite$$.prototype.Init = function $$DropdownItemSprite$$$$Init$($context$$368$$) {
  D.$DvtRect$$.$superclass$.Init.call(this, $context$$368$$)
};
D.$DvtComboBoxEvent$$ = function $$DvtComboBoxEvent$$$($subtype$$6$$, $index$$153$$, $evt$$60$$) {
  this.Init($subtype$$6$$, $index$$153$$, $evt$$60$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtComboBoxEvent$$, D.$DvtBaseEvent$$, "DvtComboBoxEvent");
D.$DvtComboBoxEvent$$.prototype.Init = function $$DvtComboBoxEvent$$$$Init$($subtype$$7$$, $index$$154$$, $evt$$61$$) {
  D.$DvtComboBoxEvent$$.$superclass$.Init.call(this, "comboBoxEvent");
  $index$$154$$ === D.$JSCompiler_alias_VOID$$ && ($index$$154$$ = -1);
  this.$subtype$ = $subtype$$7$$;
  this.$_index$ = $index$$154$$;
  this.$_evt$ = $evt$$61$$
};
D.$DvtComboBoxEvent$$.prototype.$getIndex$ = (0,D.$JSCompiler_get$$)("$_index$");
D.$DvtBaseControl$$ = function $$DvtBaseControl$$$($context$$378$$, $panZoomCanvas$$16$$, $resources$$22$$) {
  this.Init($context$$378$$, $panZoomCanvas$$16$$, $resources$$22$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseControl$$, D.$DvtContainer$$, "DvtBaseControl");
D.$DvtBaseControl$$.prototype.Init = function $$DvtBaseControl$$$$Init$($context$$379$$, $panZoomCanvas$$17$$, $resources$$23$$) {
  D.$DvtBaseControl$$.$superclass$.Init.call(this, $context$$379$$);
  this.$_panZoomCanvas$ = $panZoomCanvas$$17$$;
  this.$_context$ = $context$$379$$;
  this.$_tooltipManager$ = $context$$379$$.$getTooltipManager$();
  this.$Bundle$ = $resources$$23$$
};
D.$DvtBaseControl$$.prototype.$getTooltipManager$ = (0,D.$JSCompiler_get$$)("$_tooltipManager$");
D.$DvtZoomInButton$$ = function $$DvtZoomInButton$$$($context$$339$$, $button$$65$$, $panZoomCanvas$$8$$, $resources$$14$$, $eventManager$$19$$) {
  this.Init($context$$339$$, $button$$65$$, $panZoomCanvas$$8$$, $resources$$14$$, $eventManager$$19$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtZoomInButton$$, D.$DvtBaseControl$$, "DvtZoomInButton");
D.$JSCompiler_prototypeAlias$$ = D.$DvtZoomInButton$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$340_proxy$$10$$, $button$$66$$, $panZoomCanvas$$9$$, $resources$$15$$, $eventManager$$20$$) {
  D.$DvtZoomInButton$$.$superclass$.Init.call(this, $context$$340_proxy$$10$$, $panZoomCanvas$$9$$, $resources$$15$$);
  this.$_bZoomInMouseDown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_zoomInTimer$ = new D.$DvtTimer$$($context$$340_proxy$$10$$, 100, this.$HandleZoomInTimer$, this);
  this.$_zoomStartTimer$ = new D.$DvtTimer$$($context$$340_proxy$$10$$, 250, this.$HandleZoomStartTimer$, this, 1);
  this.$_zoomInButton$ = $button$$66$$;
  (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_zoomInButton$, this.$HandleZoomInClick$, this);
  this.$_eventManager$ = $eventManager$$20$$;
  $context$$340_proxy$$10$$ = new D.$DvtControlPanelEventHandlerProxy$$(this, D.$JSCompiler_alias_NULL$$, this.$HandleZoomInMouseDown$, this.$HandleZoomInMouseUp$, this.$HandleZoomInMouseUp$, D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, "CONTROL_PANEL_ZOOMIN"));
  this.$_eventManager$.$associate$(this.$_zoomInButton$, $context$$340_proxy$$10$$);
  this.$addChild$(this.$_zoomInButton$)
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomInClick$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomInClick$$() {
  if(!this.$_zoomInTimer$.$isRunning$()) {
    var $currZoom$$8_newZoom$$5$$ = this.$_panZoomCanvas$.$getZoom$(), $currZoom$$8_newZoom$$5$$ = (0,D.$JSCompiler_StaticMethods_getNextZoomLevel$$)(this.$_panZoomCanvas$, $currZoom$$8_newZoom$$5$$), $animator$$122$$ = new D.$DvtAnimator$$(this.$_context$, this.$_panZoomCanvas$.$getAnimationDuration$());
    (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_panZoomCanvas$, $currZoom$$8_newZoom$$5$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, $animator$$122$$);
    $animator$$122$$.play()
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomInMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomInMouseDown$$() {
  this.$_bZoomInMouseDown$ = D.$JSCompiler_alias_TRUE$$;
  this.$_zoomInTimer$.stop();
  this.$_zoomStartTimer$.stop();
  this.$_zoomStartTimer$.start()
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomInMouseUp$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomInMouseUp$$() {
  this.$_bZoomInMouseDown$ && (this.$_bZoomInMouseDown$ = D.$JSCompiler_alias_FALSE$$, this.$_zoomInTimer$.stop(), this.$_zoomStartTimer$.stop())
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomStartTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomStartTimer$$() {
  this.$_zoomInTimer$.start()
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomInTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomInTimer$$() {
  var $currZoom$$9$$ = this.$_panZoomCanvas$.$getZoom$();
  (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_panZoomCanvas$, (0,D.$JSCompiler_StaticMethods_getNextZoomLevel$$)(this.$_panZoomCanvas$, $currZoom$$9$$))
};
D.$JSCompiler_prototypeAlias$$.$setEnabled$ = function $$JSCompiler_prototypeAlias$$$$setEnabled$$($enabled$$8$$) {
  this.$_zoomInButton$.setCursor($enabled$$8$$ ? "pointer" : D.$JSCompiler_alias_NULL$$);
  this.$_zoomInButton$.$setEnabled$($enabled$$8$$);
  (0,D.$JSCompiler_StaticMethods_initState$$)(this.$_zoomInButton$)
};
D.$DvtZoomOutButton$$ = function $$DvtZoomOutButton$$$($context$$341$$, $button$$67$$, $panZoomCanvas$$10$$, $resources$$16$$, $eventManager$$21$$) {
  this.Init($context$$341$$, $button$$67$$, $panZoomCanvas$$10$$, $resources$$16$$, $eventManager$$21$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtZoomOutButton$$, D.$DvtBaseControl$$, "DvtZoomOutButton");
D.$JSCompiler_prototypeAlias$$ = D.$DvtZoomOutButton$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$342_proxy$$11$$, $button$$68$$, $panZoomCanvas$$11$$, $resources$$17$$, $eventManager$$22$$) {
  D.$DvtZoomOutButton$$.$superclass$.Init.call(this, $context$$342_proxy$$11$$, $panZoomCanvas$$11$$, $resources$$17$$);
  this.$_bZoomOutMouseDown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_zoomOutTimer$ = new D.$DvtTimer$$($context$$342_proxy$$11$$, 100, this.$HandleZoomOutTimer$, this);
  this.$_zoomStartTimer$ = new D.$DvtTimer$$($context$$342_proxy$$11$$, 250, this.$HandleZoomStartTimer$, this, 1);
  this.$_zoomOutButton$ = $button$$68$$;
  (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_zoomOutButton$, this.$HandleZoomOutClick$, this);
  this.$_eventManager$ = $eventManager$$22$$;
  $context$$342_proxy$$11$$ = new D.$DvtControlPanelEventHandlerProxy$$(this, D.$JSCompiler_alias_NULL$$, this.$HandleZoomOutMouseDown$, this.$HandleZoomOutMouseUp$, this.$HandleZoomOutMouseUp$, D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, "CONTROL_PANEL_ZOOMOUT"));
  this.$_eventManager$.$associate$(this.$_zoomOutButton$, $context$$342_proxy$$11$$);
  this.$addChild$(this.$_zoomOutButton$)
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomOutClick$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomOutClick$$() {
  if(!this.$_zoomOutTimer$.$isRunning$()) {
    var $currZoom$$10_newZoom$$7$$ = this.$_panZoomCanvas$.$getZoom$(), $currZoom$$10_newZoom$$7$$ = (0,D.$JSCompiler_StaticMethods_getPrevZoomLevel$$)(this.$_panZoomCanvas$, $currZoom$$10_newZoom$$7$$), $animator$$123$$ = new D.$DvtAnimator$$(this.$_context$, this.$_panZoomCanvas$.$getAnimationDuration$());
    (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_panZoomCanvas$, $currZoom$$10_newZoom$$7$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, $animator$$123$$);
    $animator$$123$$.play()
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomOutMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomOutMouseDown$$() {
  this.$_bZoomOutMouseDown$ = D.$JSCompiler_alias_TRUE$$;
  this.$_zoomOutTimer$.stop();
  this.$_zoomStartTimer$.stop();
  this.$_zoomStartTimer$.start()
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomOutMouseUp$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomOutMouseUp$$() {
  this.$_bZoomOutMouseDown$ && (this.$_bZoomOutMouseDown$ = D.$JSCompiler_alias_FALSE$$, this.$_zoomOutTimer$.stop(), this.$_zoomStartTimer$.stop())
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomStartTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomStartTimer$$() {
  this.$_zoomOutTimer$.start()
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomOutTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomOutTimer$$() {
  var $currZoom$$11$$ = this.$_panZoomCanvas$.$getZoom$();
  (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_panZoomCanvas$, (0,D.$JSCompiler_StaticMethods_getPrevZoomLevel$$)(this.$_panZoomCanvas$, $currZoom$$11$$))
};
D.$JSCompiler_prototypeAlias$$.$setEnabled$ = function $$JSCompiler_prototypeAlias$$$$setEnabled$$($enabled$$9$$) {
  this.$_zoomOutButton$.setCursor($enabled$$9$$ ? "pointer" : D.$JSCompiler_alias_NULL$$);
  this.$_zoomOutButton$.$setEnabled$($enabled$$9$$);
  (0,D.$JSCompiler_StaticMethods_initState$$)(this.$_zoomOutButton$)
};
D.$DvtZoomToFitButton$$ = function $$DvtZoomToFitButton$$$($context$$344$$, $button$$69$$, $panZoomCanvas$$12$$, $resources$$18$$, $eventManager$$23$$) {
  this.Init($context$$344$$, $button$$69$$, $panZoomCanvas$$12$$, $resources$$18$$, $eventManager$$23$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtZoomToFitButton$$, D.$DvtBaseControl$$, "DvtZoomToFitButton");
D.$DvtZoomToFitButton$$.prototype.Init = function $$DvtZoomToFitButton$$$$Init$($context$$345_proxy$$12$$, $button$$70$$, $panZoomCanvas$$13$$, $resources$$19$$, $eventManager$$24$$) {
  D.$DvtZoomToFitButton$$.$superclass$.Init.call(this, $context$$345_proxy$$12$$, $panZoomCanvas$$13$$, $resources$$19$$);
  this.$_zoomToFitButton$ = $button$$70$$;
  (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_zoomToFitButton$, this.$HandleZoomToFitClick$, this);
  this.$_zoomToFitButton$.setCursor("pointer");
  this.$_eventManager$ = $eventManager$$24$$;
  $context$$345_proxy$$12$$ = new D.$DvtControlPanelEventHandlerProxy$$(this, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, "CONTROL_PANEL_ZOOMTOFIT"));
  this.$_eventManager$.$associate$(this.$_zoomToFitButton$, $context$$345_proxy$$12$$);
  this.$addChild$(this.$_zoomToFitButton$)
};
D.$DvtZoomToFitButton$$.prototype.$HandleZoomToFitClick$ = function $$DvtZoomToFitButton$$$$$HandleZoomToFitClick$$() {
  var $animator$$124$$ = new D.$DvtAnimator$$(this.$_context$, this.$_panZoomCanvas$.$getAnimationDuration$());
  this.$_panZoomCanvas$.$zoomToFit$($animator$$124$$);
  $animator$$124$$.play()
};
D.$DvtPanControl$$ = function $$DvtPanControl$$$($context$$346$$, $panButton$$, $recenterButton$$, $panZoomCanvas$$14$$, $resources$$20$$, $control$$, $styleMap$$47$$) {
  this.Init($context$$346$$, $panButton$$, $recenterButton$$, $panZoomCanvas$$14$$, $resources$$20$$, $control$$, $styleMap$$47$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanControl$$, D.$DvtBaseControl$$, "DvtPanControl");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanControl$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$347$$, $panButton$$1$$, $recenterButton$$1$$, $panZoomCanvas$$15$$, $resources$$21$$, $control$$1$$, $styleMap$$48$$) {
  D.$DvtPanControl$$.$superclass$.Init.call(this, $context$$347$$, $panZoomCanvas$$15$$, $resources$$21$$);
  this.$_panTimer$ = new D.$DvtTimer$$($context$$347$$, 50, this.$HandlePanTimer$, this);
  this.$_bPanMouseDown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_panCenter$ = new D.$DvtPoint$$(20, 20);
  this.$_controls$ = $control$$1$$ ? $control$$1$$ : 16777215;
  $panButton$$1$$.$addChild$($recenterButton$$1$$);
  $recenterButton$$1$$ && (this.$_panCenterSprite$ = $recenterButton$$1$$, this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_FALSE$$), this.$_panCenterSprite$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandlePanCenterClick$, D.$JSCompiler_alias_FALSE$$, this), (0,D.$DvtAgent$isTouchDevice$$)() || (this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandlePanCenterClick$, D.$JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, 
  this.$HandlePanCenterDown$, D.$JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$HandlePanCenterUp$, D.$JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$HandlePanCenterRollOver$, D.$JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandlePanCenterRollOut$, D.$JSCompiler_alias_FALSE$$, this)), this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, 
  this.$HandlePanCenterMouseMove$, D.$JSCompiler_alias_FALSE$$, this));
  this.$_panButton$ = $panButton$$1$$;
  this.$_panButton$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandlePanClick$, D.$JSCompiler_alias_FALSE$$, this);
  (0,D.$DvtAgent$isTouchDevice$$)() || (this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandlePanClick$, D.$JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, this.$HandlePanMouseDown$, D.$JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$HandlePanMouseUp$, D.$JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$HandlePanRollOver$, 
  D.$JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandlePanRollOut$, D.$JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, this.$HandlePanMouseMove$, D.$JSCompiler_alias_FALSE$$, this));
  this.$_panControl$ = D.$DvtButtonLAFUtils$$.$createPanButtonBackground$($context$$347$$, $styleMap$$48$$);
  this.$_panControl$.$addChild$(this.$_panButton$);
  this.$addChild$(this.$_panControl$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanClick$ = function $$JSCompiler_prototypeAlias$$$$HandlePanClick$$($event$$519$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$519$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandlePanMouseDown$$($event$$520_localPoint$$2_stagePoint$$6$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$520_localPoint$$2_stagePoint$$6$$);
  this.$_bPanMouseDown$ = D.$JSCompiler_alias_TRUE$$;
  this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_FALSE$$);
  $event$$520_localPoint$$2_stagePoint$$6$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_panZoomCanvas$, $event$$520_localPoint$$2_stagePoint$$6$$);
  $event$$520_localPoint$$2_stagePoint$$6$$ = this.$_panButton$.$stageToLocal$($event$$520_localPoint$$2_stagePoint$$6$$);
  (0,D.$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$)(this, $event$$520_localPoint$$2_stagePoint$$6$$.x, $event$$520_localPoint$$2_stagePoint$$6$$.y, this.$_panButton$.$downState$);
  this.$_panMousePoint$ = new D.$DvtPoint$$($event$$520_localPoint$$2_stagePoint$$6$$.x, $event$$520_localPoint$$2_stagePoint$$6$$.y);
  this.$_panTimer$.start();
  this.$_panTimerCount$ = 0
};
D.$JSCompiler_prototypeAlias$$.$HandlePanMouseUp$ = function $$JSCompiler_prototypeAlias$$$$HandlePanMouseUp$$($event$$521$$) {
  this.$_bPanMouseDown$ && ((0,D.$DvtEventManager$consumeEvent$$)($event$$521$$), this.$_bPanMouseDown$ = D.$JSCompiler_alias_FALSE$$, this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_TRUE$$), this.$_panTimer$.stop());
  this.$_panButton$.$_mouseOutHandler$($event$$521$$);
  this.$getTooltipManager$().$hideTooltip$()
};
D.$JSCompiler_prototypeAlias$$.$HandlePanRollOver$ = function $$JSCompiler_prototypeAlias$$$$HandlePanRollOver$$($event$$522$$) {
  this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_TRUE$$);
  var $tooltip$$inline_6883$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, "CONTROL_PANEL_PAN");
  this.$getTooltipManager$().$showTooltip$($event$$522$$.pageX, $event$$522$$.pageY, $tooltip$$inline_6883$$, $event$$522$$.target)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanRollOut$ = function $$JSCompiler_prototypeAlias$$$$HandlePanRollOut$$($event$$523$$) {
  this.$HandlePanMouseUp$($event$$523$$);
  this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanMouseMove$ = function $$JSCompiler_prototypeAlias$$$$HandlePanMouseMove$$($event$$524_localPoint$$3_stagePoint$$7$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$524_localPoint$$3_stagePoint$$7$$);
  $event$$524_localPoint$$3_stagePoint$$7$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_panZoomCanvas$, $event$$524_localPoint$$3_stagePoint$$7$$);
  $event$$524_localPoint$$3_stagePoint$$7$$ = this.$_panButton$.$stageToLocal$($event$$524_localPoint$$3_stagePoint$$7$$);
  this.$_bPanMouseDown$ ? ((0,D.$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$)(this, $event$$524_localPoint$$3_stagePoint$$7$$.x, $event$$524_localPoint$$3_stagePoint$$7$$.y, this.$_panButton$.$downState$), this.$_panMousePoint$ = new D.$DvtPoint$$($event$$524_localPoint$$3_stagePoint$$7$$.x, $event$$524_localPoint$$3_stagePoint$$7$$.y)) : (0,D.$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$)(this, $event$$524_localPoint$$3_stagePoint$$7$$.x, $event$$524_localPoint$$3_stagePoint$$7$$.y, 
  this.$_panButton$.$overState$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanTimer$ = function $$JSCompiler_prototypeAlias$$$$HandlePanTimer$$() {
  if(this.$_bPanMouseDown$) {
    var $angleRads$$8_deltaY$$20$$ = window.Math.atan2(this.$_panCenter$.y - this.$_panMousePoint$.y, this.$_panCenter$.x - this.$_panMousePoint$.x), $deltaX$$20$$ = window.Math.cos($angleRads$$8_deltaY$$20$$), $angleRads$$8_deltaY$$20$$ = window.Math.sin($angleRads$$8_deltaY$$20$$), $factor$$3$$ = 15;
    this.$_panTimerCount$++;
    40 < this.$_panTimerCount$ && ($factor$$3$$ *= 3);
    this.$_panZoomCanvas$.$panBy$($factor$$3$$ * $deltaX$$20$$, $factor$$3$$ * $angleRads$$8_deltaY$$20$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterClick$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterClick$$($event$$525$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$525$$);
  this.$_panZoomCanvas$.$zoomAndCenter$()
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterDown$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterDown$$($event$$526$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$526$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterUp$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterUp$$($event$$527$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$527$$);
  this.$getTooltipManager$().$hideTooltip$()
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterRollOver$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterRollOver$$($event$$528$$) {
  var $tooltip$$inline_6889$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, "CONTROL_PANEL_ZOOMANDCENTER");
  this.$getTooltipManager$().$showTooltip$($event$$528$$.pageX, $event$$528$$.pageY, $tooltip$$inline_6889$$, $event$$528$$.target);
  this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_TRUE$$);
  (0,D.$DvtEventManager$consumeEvent$$)($event$$528$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterRollOut$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterRollOut$$($event$$529$$) {
  this.$getTooltipManager$().$hideTooltip$();
  (0,D.$DvtEventManager$consumeEvent$$)($event$$529$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterMouseMove$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterMouseMove$$($event$$530$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$530$$)
};
D.$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$ = function $$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$$($JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$self$$, $localX$$, $localY$$, $displayObj$$2$$) {
  $displayObj$$2$$.$setRotation$(window.Math.atan2($localY$$ - $JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$self$$.$_panCenter$.y, $localX$$ - $JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$self$$.$_panCenter$.x) - window.Math.PI / 4)
};
D.$DvtControlPanelEvent$$ = function $$DvtControlPanelEvent$$$($subtype$$8$$) {
  this.Init("dvtPZCPExpand");
  this.$_subtype$ = $subtype$$8$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanelEvent$$, D.$DvtBaseComponentEvent$$, "DvtControlPanelEvent");
D.$DvtControlPanelEvent$$.prototype.$getSubType$ = (0,D.$JSCompiler_get$$)("$_subtype$");
D.$DvtControlPanel$$ = function $$DvtControlPanel$$$($context$$348$$, $view$$68$$, $state$$72$$) {
  this.Init($context$$348$$, $view$$68$$, $state$$72$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanel$$, D.$DvtContainer$$, "DvtControlPanel");
D.$DvtControlPanel$DEFAULT_ZOOM_LEVELS$$ = [0, 0.25, 0.5, 0.75, 1];
D.$DvtControlPanel$$.prototype.Init = function $$DvtControlPanel$$$$Init$($context$$349$$, $view$$69$$, $state$$73$$) {
  D.$DvtControlPanel$$.$superclass$.Init.call(this, $context$$349$$);
  this.$_bMouseOver$ = this.$_bMouseDragPanning$ = D.$JSCompiler_alias_FALSE$$;
  this.$_panZoomCanvas$ = $view$$69$$.$_panZoomCanvas$;
  this.$_controls$ = $view$$69$$.$_displayedControls$;
  this.$Bundle$ = $view$$69$$.$getBundle$();
  this.$_buttonImages$ = (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)($view$$69$$);
  this.$_tooltipManager$ = $context$$349$$.$getTooltipManager$();
  this.$_styleMap$ = D.$JSCompiler_alias_NULL$$;
  if(this.$_view$ = $view$$69$$) {
    this.$_styleMap$ = this.$_view$.$getSubcomponentStyles$(), this.$_styleMap$.centerButtonDisplayed || (this.$_controls$ &= -17, this.$_view$.$_displayedControls$ = this.$_controls$)
  }
  this.$_zoomLevels$ = D.$DvtControlPanel$DEFAULT_ZOOM_LEVELS$$;
  this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$;
  this.$_bgAlpha$ = this.$_styleMap$.backgroundAlpha;
  this.$_eventManager$ = new D.$DvtControlPanelEventManager$$($context$$349$$, D.$JSCompiler_alias_NULL$$, $view$$69$$);
  this.$_eventManager$.$_rolloverTypes$.push(D.$DvtControlPanel$$);
  this.$_eventManager$.$addListeners$(this);
  this.$_eventManager$.$associate$(this, this);
  this.$_state$ = $state$$73$$;
  this.$tabChildren$ = D.$JSCompiler_alias_FALSE$$;
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this)
};
D.$DvtControlPanel$$.prototype.$getTooltipManager$ = (0,D.$JSCompiler_get$$)("$_tooltipManager$");
D.$JSCompiler_StaticMethods_mouseDragPanningStarted$$ = function $$JSCompiler_StaticMethods_mouseDragPanningStarted$$$($JSCompiler_StaticMethods_mouseDragPanningStarted$self$$) {
  $JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_bMouseDragPanning$ = D.$JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_background$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_frame$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_background$.$setAlpha$($JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_styleMap$.backgroundDragAlpha);
  $JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_frame$.$setAlpha$($JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_styleMap$.borderDragAlpha)
};
D.$JSCompiler_StaticMethods_mouseDragPanningEnded$$ = function $$JSCompiler_StaticMethods_mouseDragPanningEnded$$$($JSCompiler_StaticMethods_mouseDragPanningEnded$self$$) {
  $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$_bMouseDragPanning$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$_background$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$_frame$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$_bMouseOver$ ? $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$HandleRollOver$(D.$JSCompiler_alias_NULL$$) : $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$HandleRollOut$(D.$JSCompiler_alias_NULL$$)
};
D.$DvtControlPanel$$.prototype.$isSingleHorzRow$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
D.$DvtControlPanel$$.prototype.$getViewPanelHeight$ = function $$DvtControlPanel$$$$$getViewPanelHeight$$() {
  var $h$$25$$ = 0, $h$$25$$ = this.$isSingleHorzRow$() ? D.$DvtControlPanelLAFUtils$$.$getViewPanelHalfHeight$() : D.$DvtControlPanelLAFUtils$$.$getViewPanelHeight$();
  return window.Math.max((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "tabSize", 0), $h$$25$$)
};
D.$JSCompiler_StaticMethods_RenderCollapsed$$ = function $$JSCompiler_StaticMethods_RenderCollapsed$$$($JSCompiler_StaticMethods_RenderCollapsed$self$$) {
  var $context$$350_proxy$$13$$ = $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_context$, $contentBar$$ = new D.$DvtContainer$$($context$$350_proxy$$13$$), $hh$$65$$ = $JSCompiler_StaticMethods_RenderCollapsed$self$$.$getViewPanelHeight$(), $bR2L$$4$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$350_proxy$$13$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_background$ = D.$DvtControlPanelLAFUtils$$.$createEmptyViewClosedShape$($context$$350_proxy$$13$$, $hh$$65$$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_styleMap$, $bR2L$$4$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_frame$ = D.$DvtControlPanelLAFUtils$$.$createEmptyViewClosedFrame$($context$$350_proxy$$13$$, $hh$$65$$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_styleMap$, $bR2L$$4$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_collapsedDim$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$350_proxy$$13$$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_frame$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$ = D.$DvtButtonLAFUtils$$.$createExpandButton$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_context$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_buttonImages$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$getViewPanelHeight$(), $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_styleMap$, $bR2L$$4$$);
  (0,D.$JSCompiler_StaticMethods_setCallback$$)($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$HandleExpandClick$, $JSCompiler_StaticMethods_RenderCollapsed$self$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$.setCursor("pointer");
  $context$$350_proxy$$13$$ = new D.$DvtControlPanelEventHandlerProxy$$($JSCompiler_StaticMethods_RenderCollapsed$self$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($JSCompiler_StaticMethods_RenderCollapsed$self$$.$Bundle$, "CONTROL_PANEL"));
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_eventManager$.$associate$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$, $context$$350_proxy$$13$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_frame$.$addChild$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$);
  $contentBar$$.$addChild$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_background$);
  $contentBar$$.$addChild$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_frame$);
  return $contentBar$$
};
D.$JSCompiler_StaticMethods_RenderExpanded$$ = function $$JSCompiler_StaticMethods_RenderExpanded$$$($JSCompiler_StaticMethods_RenderExpanded$self$$) {
  var $context$$357$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, $s$$120$$ = new D.$DvtContainer$$($context$$357$$);
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_background$ = new D.$DvtContainer$$($context$$357$$);
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_frame$ = new D.$DvtContainer$$($context$$357$$);
  $s$$120$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_background$);
  $s$$120$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_frame$);
  var $bBiDi$$5_openSide$$inline_6954_vertContentBar$$inline_6958_vertContentBar$$inline_6968$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$357$$), $backgroundWidth$$inline_6947_context$$inline_6913_context$$inline_6959_cpWidth$$inline_6962_currX$$9_dimHorizontal$$inline_6963_nVertContentBarChildren$$inline_6972_roundedCorner$$inline_6973$$ = 0, $dim$$inline_6975_horzContentBar$$6_zoomShape$$inline_6977$$ = new D.$DvtContainer$$($context$$357$$), $cpHeight$$inline_6976_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_6898_nHorzContentBarChildren$$inline_6908_zoomFrame$$inline_6978$$;
  $cpHeight$$inline_6976_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_6898_nHorzContentBarChildren$$inline_6908_zoomFrame$$inline_6978$$ = 0;
  var $context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, $bSingleRow$$inline_6900_collapseButtonWidth$$inline_6915_currY$$12_currY$$inline_6925_currY$$inline_6932_openside$$inline_6974$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$isSingleHorzRow$();
  0 != ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 16) && ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$ = D.$DvtButtonLAFUtils$$.$createPanControl$($context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panZoomCanvas$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$Bundle$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_buttonImages$, 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$), $bSingleRow$$inline_6900_collapseButtonWidth$$inline_6915_currY$$12_currY$$inline_6925_currY$$inline_6932_openside$$inline_6974$$ && ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay$ = D.$DvtButtonLAFUtils$$.$createPanButtonUnderlay$($context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay2$ = 
  D.$DvtButtonLAFUtils$$.$createPanButtonUnderlay$($context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$), $dim$$inline_6975_horzContentBar$$6_zoomShape$$inline_6977$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay2$), $dim$$inline_6975_horzContentBar$$6_zoomShape$$inline_6977$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay$)), 
  $dim$$inline_6975_horzContentBar$$6_zoomShape$$inline_6977$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$), $cpHeight$$inline_6976_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_6898_nHorzContentBarChildren$$inline_6908_zoomFrame$$inline_6978$$++);
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_collapseButton$ = D.$DvtButtonLAFUtils$$.$createCollapseButton$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_buttonImages$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$(), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$));
  (0,D.$JSCompiler_StaticMethods_setCallback$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_collapseButton$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$HandleCollapseClick$, $JSCompiler_StaticMethods_RenderExpanded$self$$);
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_collapseButton$.setCursor("pointer");
  $context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$ = new D.$DvtControlPanelEventHandlerProxy$$($JSCompiler_StaticMethods_RenderExpanded$self$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$Bundle$, "CONTROL_PANEL"));
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_eventManager$.$associate$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_collapseButton$, $context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$);
  $dim$$inline_6975_horzContentBar$$6_zoomShape$$inline_6977$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_collapseButton$);
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$ = new D.$DvtContainer$$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$);
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$PopulateHorzContentBar$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$);
  0 < $JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$.$getNumChildren$() ? ($dim$$inline_6975_horzContentBar$$6_zoomShape$$inline_6977$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$), $cpHeight$$inline_6976_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_6898_nHorzContentBarChildren$$inline_6908_zoomFrame$$inline_6978$$++) : $JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$ = D.$JSCompiler_alias_NULL$$;
  var $context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$ = $backgroundWidth$$inline_6947_context$$inline_6913_context$$inline_6959_cpWidth$$inline_6962_currX$$9_dimHorizontal$$inline_6963_nVertContentBarChildren$$inline_6972_roundedCorner$$inline_6973$$, $backgroundWidth$$inline_6947_context$$inline_6913_context$$inline_6959_cpWidth$$inline_6962_currX$$9_dimHorizontal$$inline_6963_nVertContentBarChildren$$inline_6972_roundedCorner$$inline_6973$$ = 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, $dim$$inline_6914_panelDrawerStyle$$inline_6946_yy$$inline_6921$$ = D.$JSCompiler_alias_NULL$$, $bSingleRow$$inline_6900_collapseButtonWidth$$inline_6915_currY$$12_currY$$inline_6925_currY$$inline_6932_openside$$inline_6974$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "openCloseButtonWidth", 0), $backgroundHeight$$inline_6948_buttonWidth$$inline_6916$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, 
  "buttonWidth", 0), $bBiDi$$inline_6960_barWidth$$inline_6964_context$$inline_6943_currY$$inline_6970_currZoom$$inline_10706_panelWidth$$inline_6917_vertContentBar$$inline_6924_vertContentBar$$inline_6931$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "tabSize", 0), $buttonWidth$$inline_6961_dim$$inline_6933_nextZoom$$inline_10707_paddingInner$$inline_6926_panelHeight$$inline_6918_panelWidth$$inline_6945$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$(), 
  $buttonPaddingSide$$inline_6919_dim$$inline_6928_paddingInner$$inline_6934_paddingSide$$inline_6927_prevZoom$$inline_10708_vertContentBar$$inline_6939$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.hbar, "paddingLeft", 0), $buttonPaddingInner$$inline_6920_nHorzContentBarChildren$$inline_6940_paddingSide$$inline_6935$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.hbar, "paddingInner", 0);
  $bBiDi$$5_openSide$$inline_6954_vertContentBar$$inline_6958_vertContentBar$$inline_6968$$ ? ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_collapseButton$.$setTranslateX$(0), $context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$ += $bSingleRow$$inline_6900_collapseButtonWidth$$inline_6915_currY$$12_currY$$inline_6925_currY$$inline_6932_openside$$inline_6974$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$ && ($dim$$inline_6914_panelDrawerStyle$$inline_6946_yy$$inline_6921$$ = 
  D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundWidth$$inline_6947_context$$inline_6913_context$$inline_6959_cpWidth$$inline_6962_currX$$9_dimHorizontal$$inline_6963_nVertContentBarChildren$$inline_6972_roundedCorner$$inline_6973$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$), $context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$ += $buttonPaddingInner$$inline_6920_nHorzContentBarChildren$$inline_6940_paddingSide$$inline_6935$$, 
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$, $context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$, ($buttonWidth$$inline_6961_dim$$inline_6933_nextZoom$$inline_10707_paddingInner$$inline_6926_panelHeight$$inline_6918_panelWidth$$inline_6945$$ - $dim$$inline_6914_panelDrawerStyle$$inline_6946_yy$$inline_6921$$.$h$) / 2), $context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$ += 
  window.Math.max($dim$$inline_6914_panelDrawerStyle$$inline_6946_yy$$inline_6921$$.$w$, $backgroundHeight$$inline_6948_buttonWidth$$inline_6916$$)), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$ && ($context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$ += $buttonPaddingInner$$inline_6920_nHorzContentBarChildren$$inline_6940_paddingSide$$inline_6935$$, $dim$$inline_6914_panelDrawerStyle$$inline_6946_yy$$inline_6921$$ = 3.5, (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$, 
  $context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$, $dim$$inline_6914_panelDrawerStyle$$inline_6946_yy$$inline_6921$$), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay$, $context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$, $dim$$inline_6914_panelDrawerStyle$$inline_6946_yy$$inline_6921$$), 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay2$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay2$, $context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$, $dim$$inline_6914_panelDrawerStyle$$inline_6946_yy$$inline_6921$$), $dim$$inline_6914_panelDrawerStyle$$inline_6946_yy$$inline_6921$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundWidth$$inline_6947_context$$inline_6913_context$$inline_6959_cpWidth$$inline_6962_currX$$9_dimHorizontal$$inline_6963_nVertContentBarChildren$$inline_6972_roundedCorner$$inline_6973$$, 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$), $context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$ += $dim$$inline_6914_panelDrawerStyle$$inline_6946_yy$$inline_6921$$.$w$), $context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$ += $buttonPaddingSide$$inline_6919_dim$$inline_6928_paddingInner$$inline_6934_paddingSide$$inline_6927_prevZoom$$inline_10708_vertContentBar$$inline_6939$$) : 
  ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$ && ($context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$ += $buttonPaddingSide$$inline_6919_dim$$inline_6928_paddingInner$$inline_6934_paddingSide$$inline_6927_prevZoom$$inline_10708_vertContentBar$$inline_6939$$, $dim$$inline_6914_panelDrawerStyle$$inline_6946_yy$$inline_6921$$ = 3.5, (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$, 
  $buttonPaddingSide$$inline_6919_dim$$inline_6928_paddingInner$$inline_6934_paddingSide$$inline_6927_prevZoom$$inline_10708_vertContentBar$$inline_6939$$, $dim$$inline_6914_panelDrawerStyle$$inline_6946_yy$$inline_6921$$), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay$, $buttonPaddingSide$$inline_6919_dim$$inline_6928_paddingInner$$inline_6934_paddingSide$$inline_6927_prevZoom$$inline_10708_vertContentBar$$inline_6939$$, 
  $dim$$inline_6914_panelDrawerStyle$$inline_6946_yy$$inline_6921$$), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay2$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay2$, $buttonPaddingSide$$inline_6919_dim$$inline_6928_paddingInner$$inline_6934_paddingSide$$inline_6927_prevZoom$$inline_10708_vertContentBar$$inline_6939$$, $dim$$inline_6914_panelDrawerStyle$$inline_6946_yy$$inline_6921$$), $dim$$inline_6914_panelDrawerStyle$$inline_6946_yy$$inline_6921$$ = 
  D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundWidth$$inline_6947_context$$inline_6913_context$$inline_6959_cpWidth$$inline_6962_currX$$9_dimHorizontal$$inline_6963_nVertContentBarChildren$$inline_6972_roundedCorner$$inline_6973$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$), $context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$ += $buttonPaddingInner$$inline_6920_nHorzContentBarChildren$$inline_6940_paddingSide$$inline_6935$$ + 
  $dim$$inline_6914_panelDrawerStyle$$inline_6946_yy$$inline_6921$$.$w$, $context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$ += 1), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$ && ($dim$$inline_6914_panelDrawerStyle$$inline_6946_yy$$inline_6921$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundWidth$$inline_6947_context$$inline_6913_context$$inline_6959_cpWidth$$inline_6962_currX$$9_dimHorizontal$$inline_6963_nVertContentBarChildren$$inline_6972_roundedCorner$$inline_6973$$, 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$), 0 == $context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$ && ($context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$ += $buttonPaddingSide$$inline_6919_dim$$inline_6928_paddingInner$$inline_6934_paddingSide$$inline_6927_prevZoom$$inline_10708_vertContentBar$$inline_6939$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$, 
  $context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$, ($buttonWidth$$inline_6961_dim$$inline_6933_nextZoom$$inline_10707_paddingInner$$inline_6926_panelHeight$$inline_6918_panelWidth$$inline_6945$$ - $dim$$inline_6914_panelDrawerStyle$$inline_6946_yy$$inline_6921$$.$h$) / 2), $context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$ += $dim$$inline_6914_panelDrawerStyle$$inline_6946_yy$$inline_6921$$.$w$, 
  $context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$ = window.Math.max($context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$ + $buttonPaddingInner$$inline_6920_nHorzContentBarChildren$$inline_6940_paddingSide$$inline_6935$$, $bBiDi$$inline_6960_barWidth$$inline_6964_context$$inline_6943_currY$$inline_6970_currZoom$$inline_10706_panelWidth$$inline_6917_vertContentBar$$inline_6924_vertContentBar$$inline_6931$$)), 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_collapseButton$.$setTranslateX$($context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$), $context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$ += $bSingleRow$$inline_6900_collapseButtonWidth$$inline_6915_currY$$12_currY$$inline_6925_currY$$inline_6932_openside$$inline_6974$$);
  $backgroundWidth$$inline_6947_context$$inline_6913_context$$inline_6959_cpWidth$$inline_6962_currX$$9_dimHorizontal$$inline_6963_nVertContentBarChildren$$inline_6972_roundedCorner$$inline_6973$$ = $context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$;
  $context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$ = D.$JSCompiler_alias_NULL$$;
  $bSingleRow$$inline_6900_collapseButtonWidth$$inline_6915_currY$$12_currY$$inline_6925_currY$$inline_6932_openside$$inline_6974$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 16 || $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$ && $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.panelDrawerStyles && 0 == $cpHeight$$inline_6976_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_6898_nHorzContentBarChildren$$inline_6908_zoomFrame$$inline_6978$$ ? 
  (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.vbar, "paddingTop", 0) : 0;
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$isSingleHorzRow$() && 0 != ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 16) && ($bSingleRow$$inline_6900_collapseButtonWidth$$inline_6915_currY$$12_currY$$inline_6925_currY$$inline_6932_openside$$inline_6974$$ += D.$DvtControlPanelLAFUtils$$.$getViewPanelHeight$() - $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$());
  if(0 != ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 256) || 0 != ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 4097)) {
    $context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$ = new D.$DvtContainer$$($context$$357$$), $context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$.$setTranslateY$($dim$$inline_6975_horzContentBar$$6_zoomShape$$inline_6977$$.$getTranslateY$() + $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$()), $bBiDi$$inline_6960_barWidth$$inline_6964_context$$inline_6943_currY$$inline_6970_currZoom$$inline_10706_panelWidth$$inline_6917_vertContentBar$$inline_6924_vertContentBar$$inline_6931$$ = 
    $context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$, 0 != ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 256) && ($buttonWidth$$inline_6961_dim$$inline_6933_nextZoom$$inline_10707_paddingInner$$inline_6926_panelHeight$$inline_6918_panelWidth$$inline_6945$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.vbar, "paddingInner", 0), $buttonPaddingSide$$inline_6919_dim$$inline_6928_paddingInner$$inline_6934_paddingSide$$inline_6927_prevZoom$$inline_10708_vertContentBar$$inline_6939$$ = 
    (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.vbar, "paddingLeft", 0), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomToFitButton$ = D.$DvtButtonLAFUtils$$.$createZoomToFitButton$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panZoomCanvas$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$Bundle$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_eventManager$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_buttonImages$, 
    $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomToFitButton$, $buttonPaddingSide$$inline_6919_dim$$inline_6928_paddingInner$$inline_6934_paddingSide$$inline_6927_prevZoom$$inline_10708_vertContentBar$$inline_6939$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomToFitButton$.$getTranslateY$() + $bSingleRow$$inline_6900_collapseButtonWidth$$inline_6915_currY$$12_currY$$inline_6925_currY$$inline_6932_openside$$inline_6974$$), 
    $buttonPaddingSide$$inline_6919_dim$$inline_6928_paddingInner$$inline_6934_paddingSide$$inline_6927_prevZoom$$inline_10708_vertContentBar$$inline_6939$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomToFitButton$), $bBiDi$$inline_6960_barWidth$$inline_6964_context$$inline_6943_currY$$inline_6970_currZoom$$inline_10706_panelWidth$$inline_6917_vertContentBar$$inline_6924_vertContentBar$$inline_6931$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomToFitButton$), 
    $bSingleRow$$inline_6900_collapseButtonWidth$$inline_6915_currY$$12_currY$$inline_6925_currY$$inline_6932_openside$$inline_6974$$ += $buttonPaddingSide$$inline_6919_dim$$inline_6928_paddingInner$$inline_6934_paddingSide$$inline_6927_prevZoom$$inline_10708_vertContentBar$$inline_6939$$.$h$, $bSingleRow$$inline_6900_collapseButtonWidth$$inline_6915_currY$$12_currY$$inline_6925_currY$$inline_6932_openside$$inline_6974$$ += $buttonWidth$$inline_6961_dim$$inline_6933_nextZoom$$inline_10707_paddingInner$$inline_6926_panelHeight$$inline_6918_panelWidth$$inline_6945$$), 
    $bBiDi$$inline_6960_barWidth$$inline_6964_context$$inline_6943_currY$$inline_6970_currZoom$$inline_10706_panelWidth$$inline_6917_vertContentBar$$inline_6924_vertContentBar$$inline_6931$$ = $context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$, $buttonWidth$$inline_6961_dim$$inline_6933_nextZoom$$inline_10707_paddingInner$$inline_6926_panelHeight$$inline_6918_panelWidth$$inline_6945$$ = D.$JSCompiler_alias_NULL$$, $buttonPaddingSide$$inline_6919_dim$$inline_6928_paddingInner$$inline_6934_paddingSide$$inline_6927_prevZoom$$inline_10708_vertContentBar$$inline_6939$$ = 
    (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.vbar, "paddingInner", 0), $buttonPaddingInner$$inline_6920_nHorzContentBarChildren$$inline_6940_paddingSide$$inline_6935$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.vbar, "paddingLeft", 0), 0 != ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 4097) && ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomInButton$ = D.$DvtButtonLAFUtils$$.$createZoomInButton$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, 
    $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panZoomCanvas$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$Bundle$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_eventManager$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_buttonImages$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomInButton$, $buttonPaddingInner$$inline_6920_nHorzContentBarChildren$$inline_6940_paddingSide$$inline_6935$$, 
    $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomInButton$.$getTranslateY$() + $bSingleRow$$inline_6900_collapseButtonWidth$$inline_6915_currY$$12_currY$$inline_6925_currY$$inline_6932_openside$$inline_6974$$), $buttonWidth$$inline_6961_dim$$inline_6933_nextZoom$$inline_10707_paddingInner$$inline_6926_panelHeight$$inline_6918_panelWidth$$inline_6945$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomInButton$), 
    $bBiDi$$inline_6960_barWidth$$inline_6964_context$$inline_6943_currY$$inline_6970_currZoom$$inline_10706_panelWidth$$inline_6917_vertContentBar$$inline_6924_vertContentBar$$inline_6931$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomInButton$), $bSingleRow$$inline_6900_collapseButtonWidth$$inline_6915_currY$$12_currY$$inline_6925_currY$$inline_6932_openside$$inline_6974$$ += $buttonWidth$$inline_6961_dim$$inline_6933_nextZoom$$inline_10707_paddingInner$$inline_6926_panelHeight$$inline_6918_panelWidth$$inline_6945$$.$h$ + 
    $buttonPaddingSide$$inline_6919_dim$$inline_6928_paddingInner$$inline_6934_paddingSide$$inline_6927_prevZoom$$inline_10708_vertContentBar$$inline_6939$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomOutButton$ = D.$DvtButtonLAFUtils$$.$createZoomOutButton$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panZoomCanvas$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$Bundle$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_eventManager$, 
    $JSCompiler_StaticMethods_RenderExpanded$self$$.$_buttonImages$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomOutButton$, $buttonPaddingInner$$inline_6920_nHorzContentBarChildren$$inline_6940_paddingSide$$inline_6935$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomOutButton$.$getTranslateY$() + $bSingleRow$$inline_6900_collapseButtonWidth$$inline_6915_currY$$12_currY$$inline_6925_currY$$inline_6932_openside$$inline_6974$$), 
    $buttonWidth$$inline_6961_dim$$inline_6933_nextZoom$$inline_10707_paddingInner$$inline_6926_panelHeight$$inline_6918_panelWidth$$inline_6945$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomOutButton$), $bBiDi$$inline_6960_barWidth$$inline_6964_context$$inline_6943_currY$$inline_6970_currZoom$$inline_10706_panelWidth$$inline_6917_vertContentBar$$inline_6924_vertContentBar$$inline_6931$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomOutButton$), 
    $bSingleRow$$inline_6900_collapseButtonWidth$$inline_6915_currY$$12_currY$$inline_6925_currY$$inline_6932_openside$$inline_6974$$ += $buttonWidth$$inline_6961_dim$$inline_6933_nextZoom$$inline_10707_paddingInner$$inline_6926_panelHeight$$inline_6918_panelWidth$$inline_6945$$.$h$, $bBiDi$$inline_6960_barWidth$$inline_6964_context$$inline_6943_currY$$inline_6970_currZoom$$inline_10706_panelWidth$$inline_6917_vertContentBar$$inline_6924_vertContentBar$$inline_6931$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panZoomCanvas$.$getZoom$(), 
    $buttonWidth$$inline_6961_dim$$inline_6933_nextZoom$$inline_10707_paddingInner$$inline_6926_panelHeight$$inline_6918_panelWidth$$inline_6945$$ = (0,D.$JSCompiler_StaticMethods_getNextZoomLevel$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panZoomCanvas$, $bBiDi$$inline_6960_barWidth$$inline_6964_context$$inline_6943_currY$$inline_6970_currZoom$$inline_10706_panelWidth$$inline_6917_vertContentBar$$inline_6924_vertContentBar$$inline_6931$$), $buttonPaddingSide$$inline_6919_dim$$inline_6928_paddingInner$$inline_6934_paddingSide$$inline_6927_prevZoom$$inline_10708_vertContentBar$$inline_6939$$ = 
    (0,D.$JSCompiler_StaticMethods_getPrevZoomLevel$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panZoomCanvas$, $bBiDi$$inline_6960_barWidth$$inline_6964_context$$inline_6943_currY$$inline_6970_currZoom$$inline_10706_panelWidth$$inline_6917_vertContentBar$$inline_6924_vertContentBar$$inline_6931$$), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomInButton$ && $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomInButton$.$setEnabled$($bBiDi$$inline_6960_barWidth$$inline_6964_context$$inline_6943_currY$$inline_6970_currZoom$$inline_10706_panelWidth$$inline_6917_vertContentBar$$inline_6924_vertContentBar$$inline_6931$$ != 
    $buttonWidth$$inline_6961_dim$$inline_6933_nextZoom$$inline_10707_paddingInner$$inline_6926_panelHeight$$inline_6918_panelWidth$$inline_6945$$), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomOutButton$ && $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomOutButton$.$setEnabled$($bBiDi$$inline_6960_barWidth$$inline_6964_context$$inline_6943_currY$$inline_6970_currZoom$$inline_10706_panelWidth$$inline_6917_vertContentBar$$inline_6924_vertContentBar$$inline_6931$$ != $buttonPaddingSide$$inline_6919_dim$$inline_6928_paddingInner$$inline_6934_paddingSide$$inline_6927_prevZoom$$inline_10708_vertContentBar$$inline_6939$$)), 
    $JSCompiler_StaticMethods_RenderExpanded$self$$.$_frame$.$addChild$($context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$)
  }
  var $buttonPaddingSide$$inline_6919_dim$$inline_6928_paddingInner$$inline_6934_paddingSide$$inline_6927_prevZoom$$inline_10708_vertContentBar$$inline_6939$$ = $context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$, $buttonPaddingInner$$inline_6920_nHorzContentBarChildren$$inline_6940_paddingSide$$inline_6935$$ = $cpHeight$$inline_6976_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_6898_nHorzContentBarChildren$$inline_6908_zoomFrame$$inline_6978$$, 
  $bBiDi$$inline_6960_barWidth$$inline_6964_context$$inline_6943_currY$$inline_6970_currZoom$$inline_10706_panelWidth$$inline_6917_vertContentBar$$inline_6924_vertContentBar$$inline_6931$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, $buttonWidth$$inline_6944_viewFrame$$inline_6951$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "openCloseButtonWidth", 0), $buttonWidth$$inline_6961_dim$$inline_6933_nextZoom$$inline_10707_paddingInner$$inline_6926_panelHeight$$inline_6918_panelWidth$$inline_6945$$ = 
  (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "tabSize", 0), $backgroundWidth$$inline_6947_context$$inline_6913_context$$inline_6959_cpWidth$$inline_6962_currX$$9_dimHorizontal$$inline_6963_nVertContentBarChildren$$inline_6972_roundedCorner$$inline_6973$$ = ($dim$$inline_6914_panelDrawerStyle$$inline_6946_yy$$inline_6921$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "panelDrawerStyles", D.$JSCompiler_alias_NULL$$)) ? 
  $backgroundWidth$$inline_6947_context$$inline_6913_context$$inline_6959_cpWidth$$inline_6962_currX$$9_dimHorizontal$$inline_6963_nVertContentBarChildren$$inline_6972_roundedCorner$$inline_6973$$ : $backgroundWidth$$inline_6947_context$$inline_6913_context$$inline_6959_cpWidth$$inline_6962_currX$$9_dimHorizontal$$inline_6963_nVertContentBarChildren$$inline_6972_roundedCorner$$inline_6973$$ - $buttonWidth$$inline_6944_viewFrame$$inline_6951$$, $backgroundHeight$$inline_6948_buttonWidth$$inline_6916$$ = 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$(), $backgroundFrameOffsetX$$inline_6949$$ = 0, $backgroundShapeOffsetX$$inline_6950$$ = 0;
  $dim$$inline_6914_panelDrawerStyle$$inline_6946_yy$$inline_6921$$ ? $dim$$inline_6914_panelDrawerStyle$$inline_6946_yy$$inline_6921$$ && 0 == $buttonPaddingInner$$inline_6920_nHorzContentBarChildren$$inline_6940_paddingSide$$inline_6935$$ && ($backgroundShapeOffsetX$$inline_6950$$ = $bBiDi$$5_openSide$$inline_6954_vertContentBar$$inline_6958_vertContentBar$$inline_6968$$ ? -$buttonWidth$$inline_6961_dim$$inline_6933_nextZoom$$inline_10707_paddingInner$$inline_6926_panelHeight$$inline_6918_panelWidth$$inline_6945$$ : 
  $buttonWidth$$inline_6961_dim$$inline_6933_nextZoom$$inline_10707_paddingInner$$inline_6926_panelHeight$$inline_6918_panelWidth$$inline_6945$$) : ($backgroundFrameOffsetX$$inline_6949$$ = $bBiDi$$5_openSide$$inline_6954_vertContentBar$$inline_6958_vertContentBar$$inline_6968$$ ? $buttonWidth$$inline_6944_viewFrame$$inline_6951$$ : 0, $backgroundShapeOffsetX$$inline_6950$$ = $bBiDi$$5_openSide$$inline_6954_vertContentBar$$inline_6958_vertContentBar$$inline_6968$$ ? $buttonWidth$$inline_6944_viewFrame$$inline_6951$$ : 
  0);
  if(0 < $buttonPaddingInner$$inline_6920_nHorzContentBarChildren$$inline_6940_paddingSide$$inline_6935$$ || $dim$$inline_6914_panelDrawerStyle$$inline_6946_yy$$inline_6921$$) {
    var $r$$inline_6953_viewShape$$inline_6952$$ = $buttonWidth$$inline_6944_viewFrame$$inline_6951$$ = D.$JSCompiler_alias_NULL$$, $r$$inline_6953_viewShape$$inline_6952$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "border-radius", 0));
    $dim$$inline_6914_panelDrawerStyle$$inline_6946_yy$$inline_6921$$ ? ($bBiDi$$5_openSide$$inline_6954_vertContentBar$$inline_6958_vertContentBar$$inline_6968$$ = 0 < $buttonPaddingInner$$inline_6920_nHorzContentBarChildren$$inline_6940_paddingSide$$inline_6935$$ && $buttonPaddingSide$$inline_6919_dim$$inline_6928_paddingInner$$inline_6934_paddingSide$$inline_6927_prevZoom$$inline_10708_vertContentBar$$inline_6939$$ != D.$JSCompiler_alias_NULL$$ ? D.$DvtControlPanelLAFUtils$$.$OPEN_BOTTOM$ : D.$DvtControlPanelLAFUtils$$.$OPEN_LEFT$, 
    $buttonWidth$$inline_6944_viewFrame$$inline_6951$$ = D.$DvtControlPanelLAFUtils$$.$makeViewOpenShapeHelperOpenSide$($bBiDi$$inline_6960_barWidth$$inline_6964_context$$inline_6943_currY$$inline_6970_currZoom$$inline_10706_panelWidth$$inline_6917_vertContentBar$$inline_6924_vertContentBar$$inline_6931$$, $r$$inline_6953_viewShape$$inline_6952$$, $backgroundWidth$$inline_6947_context$$inline_6913_context$$inline_6959_cpWidth$$inline_6962_currX$$9_dimHorizontal$$inline_6963_nVertContentBarChildren$$inline_6972_roundedCorner$$inline_6973$$, 
    $backgroundHeight$$inline_6948_buttonWidth$$inline_6916$$, $bBiDi$$5_openSide$$inline_6954_vertContentBar$$inline_6958_vertContentBar$$inline_6968$$, $buttonWidth$$inline_6961_dim$$inline_6933_nextZoom$$inline_10707_paddingInner$$inline_6926_panelHeight$$inline_6918_panelWidth$$inline_6945$$), $r$$inline_6953_viewShape$$inline_6952$$ = D.$DvtControlPanelLAFUtils$$.$makeViewOpenShapeHelperOpenSide$($bBiDi$$inline_6960_barWidth$$inline_6964_context$$inline_6943_currY$$inline_6970_currZoom$$inline_10706_panelWidth$$inline_6917_vertContentBar$$inline_6924_vertContentBar$$inline_6931$$, 
    $r$$inline_6953_viewShape$$inline_6952$$, $backgroundWidth$$inline_6947_context$$inline_6913_context$$inline_6959_cpWidth$$inline_6962_currX$$9_dimHorizontal$$inline_6963_nVertContentBarChildren$$inline_6972_roundedCorner$$inline_6973$$, $backgroundHeight$$inline_6948_buttonWidth$$inline_6916$$, $bBiDi$$5_openSide$$inline_6954_vertContentBar$$inline_6958_vertContentBar$$inline_6968$$, $buttonWidth$$inline_6961_dim$$inline_6933_nextZoom$$inline_10707_paddingInner$$inline_6926_panelHeight$$inline_6918_panelWidth$$inline_6945$$)) : 
    ($buttonWidth$$inline_6944_viewFrame$$inline_6951$$ = D.$DvtControlPanelLAFUtils$$.$createEmptyViewOpenShape$($bBiDi$$inline_6960_barWidth$$inline_6964_context$$inline_6943_currY$$inline_6970_currZoom$$inline_10706_panelWidth$$inline_6917_vertContentBar$$inline_6924_vertContentBar$$inline_6931$$, $backgroundWidth$$inline_6947_context$$inline_6913_context$$inline_6959_cpWidth$$inline_6962_currX$$9_dimHorizontal$$inline_6963_nVertContentBarChildren$$inline_6972_roundedCorner$$inline_6973$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$(), 
    !$bBiDi$$5_openSide$$inline_6954_vertContentBar$$inline_6958_vertContentBar$$inline_6968$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$), $r$$inline_6953_viewShape$$inline_6952$$ = D.$DvtControlPanelLAFUtils$$.$createEmptyViewOpenShape$($bBiDi$$inline_6960_barWidth$$inline_6964_context$$inline_6943_currY$$inline_6970_currZoom$$inline_10706_panelWidth$$inline_6917_vertContentBar$$inline_6924_vertContentBar$$inline_6931$$, $backgroundWidth$$inline_6947_context$$inline_6913_context$$inline_6959_cpWidth$$inline_6962_currX$$9_dimHorizontal$$inline_6963_nVertContentBarChildren$$inline_6972_roundedCorner$$inline_6973$$, 
    $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$(), !$bBiDi$$5_openSide$$inline_6954_vertContentBar$$inline_6958_vertContentBar$$inline_6968$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$));
    $buttonWidth$$inline_6944_viewFrame$$inline_6951$$.$setSolidStroke$((0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "border-color", D.$JSCompiler_alias_NULL$$));
    $buttonWidth$$inline_6944_viewFrame$$inline_6951$$.$setFill$(D.$JSCompiler_alias_NULL$$);
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($buttonWidth$$inline_6944_viewFrame$$inline_6951$$, $dim$$inline_6975_horzContentBar$$6_zoomShape$$inline_6977$$.$getTranslateX$() + $backgroundFrameOffsetX$$inline_6949$$, $dim$$inline_6975_horzContentBar$$6_zoomShape$$inline_6977$$.$getTranslateY$());
    $dim$$inline_6975_horzContentBar$$6_zoomShape$$inline_6977$$.$addChildAt$($buttonWidth$$inline_6944_viewFrame$$inline_6951$$, 0);
    $r$$inline_6953_viewShape$$inline_6952$$.$setSolidFill$((0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "background-color", D.$JSCompiler_alias_NULL$$));
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($r$$inline_6953_viewShape$$inline_6952$$, $dim$$inline_6975_horzContentBar$$6_zoomShape$$inline_6977$$.$getTranslateX$() + $backgroundShapeOffsetX$$inline_6950$$, $dim$$inline_6975_horzContentBar$$6_zoomShape$$inline_6977$$.$getTranslateY$());
    $JSCompiler_StaticMethods_RenderExpanded$self$$.$_background$.$addChild$($r$$inline_6953_viewShape$$inline_6952$$)
  }
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_frame$.$addChild$($dim$$inline_6975_horzContentBar$$6_zoomShape$$inline_6977$$);
  $bBiDi$$5_openSide$$inline_6954_vertContentBar$$inline_6958_vertContentBar$$inline_6968$$ = $context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$;
  $backgroundWidth$$inline_6947_context$$inline_6913_context$$inline_6959_cpWidth$$inline_6962_currX$$9_dimHorizontal$$inline_6963_nVertContentBarChildren$$inline_6972_roundedCorner$$inline_6973$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$;
  $bBiDi$$inline_6960_barWidth$$inline_6964_context$$inline_6943_currY$$inline_6970_currZoom$$inline_10706_panelWidth$$inline_6917_vertContentBar$$inline_6924_vertContentBar$$inline_6931$$ = (0,D.$DvtAgent$isRightToLeft$$)($backgroundWidth$$inline_6947_context$$inline_6913_context$$inline_6959_cpWidth$$inline_6962_currX$$9_dimHorizontal$$inline_6963_nVertContentBarChildren$$inline_6972_roundedCorner$$inline_6973$$);
  $buttonWidth$$inline_6961_dim$$inline_6933_nextZoom$$inline_10707_paddingInner$$inline_6926_panelHeight$$inline_6918_panelWidth$$inline_6945$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "openCloseButtonWidth", 0);
  !$JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$ && 0 == ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 16) ? $bBiDi$$inline_6960_barWidth$$inline_6964_context$$inline_6943_currY$$inline_6970_currZoom$$inline_10706_panelWidth$$inline_6917_vertContentBar$$inline_6924_vertContentBar$$inline_6931$$ ? ($dim$$inline_6975_horzContentBar$$6_zoomShape$$inline_6977$$.$setTranslateX$(0 - $dim$$inline_6975_horzContentBar$$6_zoomShape$$inline_6977$$.$getTranslateX$()), 
  $dim$$inline_6975_horzContentBar$$6_zoomShape$$inline_6977$$.$setTranslateY$(0), $bBiDi$$5_openSide$$inline_6954_vertContentBar$$inline_6958_vertContentBar$$inline_6968$$ && (D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundWidth$$inline_6947_context$$inline_6913_context$$inline_6959_cpWidth$$inline_6962_currX$$9_dimHorizontal$$inline_6963_nVertContentBarChildren$$inline_6972_roundedCorner$$inline_6973$$, $bBiDi$$5_openSide$$inline_6954_vertContentBar$$inline_6958_vertContentBar$$inline_6968$$), 
  $dim$$inline_6975_horzContentBar$$6_zoomShape$$inline_6977$$.$setTranslateX$($dim$$inline_6975_horzContentBar$$6_zoomShape$$inline_6977$$.$getTranslateX$() - $buttonWidth$$inline_6961_dim$$inline_6933_nextZoom$$inline_10707_paddingInner$$inline_6926_panelHeight$$inline_6918_panelWidth$$inline_6945$$), $bBiDi$$5_openSide$$inline_6954_vertContentBar$$inline_6958_vertContentBar$$inline_6968$$.$setTranslateY$(0))) : $bBiDi$$5_openSide$$inline_6954_vertContentBar$$inline_6958_vertContentBar$$inline_6968$$ ? 
  ($backgroundWidth$$inline_6947_context$$inline_6913_context$$inline_6959_cpWidth$$inline_6962_currX$$9_dimHorizontal$$inline_6963_nVertContentBarChildren$$inline_6972_roundedCorner$$inline_6973$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "tabSize", 0), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($bBiDi$$5_openSide$$inline_6954_vertContentBar$$inline_6958_vertContentBar$$inline_6968$$, 0, 0), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dim$$inline_6975_horzContentBar$$6_zoomShape$$inline_6977$$, 
  $dim$$inline_6975_horzContentBar$$6_zoomShape$$inline_6977$$.$getTranslateX$() + $backgroundWidth$$inline_6947_context$$inline_6913_context$$inline_6959_cpWidth$$inline_6962_currX$$9_dimHorizontal$$inline_6963_nVertContentBarChildren$$inline_6972_roundedCorner$$inline_6973$$, 0)) : (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dim$$inline_6975_horzContentBar$$6_zoomShape$$inline_6977$$, $dim$$inline_6975_horzContentBar$$6_zoomShape$$inline_6977$$.$getTranslateX$(), 0) : $bBiDi$$inline_6960_barWidth$$inline_6964_context$$inline_6943_currY$$inline_6970_currZoom$$inline_10706_panelWidth$$inline_6917_vertContentBar$$inline_6924_vertContentBar$$inline_6931$$ && 
  $bBiDi$$5_openSide$$inline_6954_vertContentBar$$inline_6958_vertContentBar$$inline_6968$$ && ($backgroundWidth$$inline_6947_context$$inline_6913_context$$inline_6959_cpWidth$$inline_6962_currX$$9_dimHorizontal$$inline_6963_nVertContentBarChildren$$inline_6972_roundedCorner$$inline_6973$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundWidth$$inline_6947_context$$inline_6913_context$$inline_6959_cpWidth$$inline_6962_currX$$9_dimHorizontal$$inline_6963_nVertContentBarChildren$$inline_6972_roundedCorner$$inline_6973$$, 
  $dim$$inline_6975_horzContentBar$$6_zoomShape$$inline_6977$$), $bBiDi$$inline_6960_barWidth$$inline_6964_context$$inline_6943_currY$$inline_6970_currZoom$$inline_10706_panelWidth$$inline_6917_vertContentBar$$inline_6924_vertContentBar$$inline_6931$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "tabSize", 0), $dim$$inline_6975_horzContentBar$$6_zoomShape$$inline_6977$$.$setTranslateX$(0), $bBiDi$$5_openSide$$inline_6954_vertContentBar$$inline_6958_vertContentBar$$inline_6968$$.$setTranslateX$($backgroundWidth$$inline_6947_context$$inline_6913_context$$inline_6959_cpWidth$$inline_6962_currX$$9_dimHorizontal$$inline_6963_nVertContentBarChildren$$inline_6972_roundedCorner$$inline_6973$$.$w$ + 
  $backgroundWidth$$inline_6947_context$$inline_6913_context$$inline_6959_cpWidth$$inline_6962_currX$$9_dimHorizontal$$inline_6963_nVertContentBarChildren$$inline_6972_roundedCorner$$inline_6973$$.x - $bBiDi$$inline_6960_barWidth$$inline_6964_context$$inline_6943_currY$$inline_6970_currZoom$$inline_10706_panelWidth$$inline_6917_vertContentBar$$inline_6924_vertContentBar$$inline_6931$$));
  $bBiDi$$5_openSide$$inline_6954_vertContentBar$$inline_6958_vertContentBar$$inline_6968$$ = $context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$;
  $bBiDi$$inline_6960_barWidth$$inline_6964_context$$inline_6943_currY$$inline_6970_currZoom$$inline_10706_panelWidth$$inline_6917_vertContentBar$$inline_6924_vertContentBar$$inline_6931$$ = $bSingleRow$$inline_6900_collapseButtonWidth$$inline_6915_currY$$12_currY$$inline_6925_currY$$inline_6932_openside$$inline_6974$$;
  $context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$;
  $bBiDi$$5_openSide$$inline_6954_vertContentBar$$inline_6958_vertContentBar$$inline_6968$$ && ($backgroundWidth$$inline_6947_context$$inline_6913_context$$inline_6959_cpWidth$$inline_6962_currX$$9_dimHorizontal$$inline_6963_nVertContentBarChildren$$inline_6972_roundedCorner$$inline_6973$$ = $bBiDi$$5_openSide$$inline_6954_vertContentBar$$inline_6958_vertContentBar$$inline_6968$$.$getNumChildren$(), $backgroundWidth$$inline_6947_context$$inline_6913_context$$inline_6959_cpWidth$$inline_6962_currX$$9_dimHorizontal$$inline_6963_nVertContentBarChildren$$inline_6972_roundedCorner$$inline_6973$$ = 
  1 < $backgroundWidth$$inline_6947_context$$inline_6913_context$$inline_6959_cpWidth$$inline_6962_currX$$9_dimHorizontal$$inline_6963_nVertContentBarChildren$$inline_6972_roundedCorner$$inline_6973$$ || $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomToFitButton$ == D.$JSCompiler_alias_NULL$$ || 1 < $cpHeight$$inline_6976_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_6898_nHorzContentBarChildren$$inline_6908_zoomFrame$$inline_6978$$ || 0 < $cpHeight$$inline_6976_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_6898_nHorzContentBarChildren$$inline_6908_zoomFrame$$inline_6978$$ && 
  1 == $backgroundWidth$$inline_6947_context$$inline_6913_context$$inline_6959_cpWidth$$inline_6962_currX$$9_dimHorizontal$$inline_6963_nVertContentBarChildren$$inline_6972_roundedCorner$$inline_6973$$, $bSingleRow$$inline_6900_collapseButtonWidth$$inline_6915_currY$$12_currY$$inline_6925_currY$$inline_6932_openside$$inline_6974$$ = D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$ && $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.panelDrawerStyles && 
  ($bSingleRow$$inline_6900_collapseButtonWidth$$inline_6915_currY$$12_currY$$inline_6925_currY$$inline_6932_openside$$inline_6974$$ = 0 < $cpHeight$$inline_6976_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_6898_nHorzContentBarChildren$$inline_6908_zoomFrame$$inline_6978$$ ? D.$DvtControlPanelLAFUtils$$.$OPEN_TOP$ : D.$DvtControlPanelLAFUtils$$.$OPEN_RIGHT$), $dim$$inline_6975_horzContentBar$$6_zoomShape$$inline_6977$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$, 
  $dim$$inline_6975_horzContentBar$$6_zoomShape$$inline_6977$$), $bBiDi$$inline_6960_barWidth$$inline_6964_context$$inline_6943_currY$$inline_6970_currZoom$$inline_10706_panelWidth$$inline_6917_vertContentBar$$inline_6924_vertContentBar$$inline_6931$$ += 4, $cpHeight$$inline_6976_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_6898_nHorzContentBarChildren$$inline_6908_zoomFrame$$inline_6978$$ = $backgroundWidth$$inline_6947_context$$inline_6913_context$$inline_6959_cpWidth$$inline_6962_currX$$9_dimHorizontal$$inline_6963_nVertContentBarChildren$$inline_6972_roundedCorner$$inline_6973$$ ? 
  $bBiDi$$inline_6960_barWidth$$inline_6964_context$$inline_6943_currY$$inline_6970_currZoom$$inline_10706_panelWidth$$inline_6917_vertContentBar$$inline_6924_vertContentBar$$inline_6931$$ : window.Math.max($dim$$inline_6975_horzContentBar$$6_zoomShape$$inline_6977$$.$h$, $bBiDi$$inline_6960_barWidth$$inline_6964_context$$inline_6943_currY$$inline_6970_currZoom$$inline_10706_panelWidth$$inline_6917_vertContentBar$$inline_6924_vertContentBar$$inline_6931$$), $cpHeight$$inline_6976_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_6898_nHorzContentBarChildren$$inline_6908_zoomFrame$$inline_6978$$ += 
  (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.vbar, "paddingBottom", 0), $dim$$inline_6975_horzContentBar$$6_zoomShape$$inline_6977$$ = D.$DvtControlPanelLAFUtils$$.$renderEmptyZoomShape$($context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$, $cpHeight$$inline_6976_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_6898_nHorzContentBarChildren$$inline_6908_zoomFrame$$inline_6978$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, 
  $bSingleRow$$inline_6900_collapseButtonWidth$$inline_6915_currY$$12_currY$$inline_6925_currY$$inline_6932_openside$$inline_6974$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$()), $cpHeight$$inline_6976_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_6898_nHorzContentBarChildren$$inline_6908_zoomFrame$$inline_6978$$ = D.$DvtControlPanelLAFUtils$$.$renderEmptyZoomFrame$($context$$inline_6899_context$$inline_6971_currX$$inline_6912_proxy$$inline_6904_vertContentBar$$5$$, 
  $cpHeight$$inline_6976_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_6898_nHorzContentBarChildren$$inline_6908_zoomFrame$$inline_6978$$, $backgroundWidth$$inline_6947_context$$inline_6913_context$$inline_6959_cpWidth$$inline_6962_currX$$9_dimHorizontal$$inline_6963_nVertContentBarChildren$$inline_6972_roundedCorner$$inline_6973$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, $bSingleRow$$inline_6900_collapseButtonWidth$$inline_6915_currY$$12_currY$$inline_6925_currY$$inline_6932_openside$$inline_6974$$, 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$()), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dim$$inline_6975_horzContentBar$$6_zoomShape$$inline_6977$$, $bBiDi$$5_openSide$$inline_6954_vertContentBar$$inline_6958_vertContentBar$$inline_6968$$.$getTranslateX$(), $bBiDi$$5_openSide$$inline_6954_vertContentBar$$inline_6958_vertContentBar$$inline_6968$$.$getTranslateY$()), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_background$.$addChild$($dim$$inline_6975_horzContentBar$$6_zoomShape$$inline_6977$$), 
  $bBiDi$$5_openSide$$inline_6954_vertContentBar$$inline_6958_vertContentBar$$inline_6968$$.$addChildAt$($cpHeight$$inline_6976_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_6898_nHorzContentBarChildren$$inline_6908_zoomFrame$$inline_6978$$, 0));
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_expandedDim$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$357$$, $s$$120$$);
  return $s$$120$$
};
D.$DvtControlPanel$$.prototype.$PopulateHorzContentBar$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtControlPanel$$.prototype.$toggleExpandCollapse$ = function $$DvtControlPanel$$$$$toggleExpandCollapse$$() {
  this.$_bTransition$ || (2 === this.$_state$ ? this.$_doCollapse$() : 1 === this.$_state$ && this.$_doExpand$())
};
D.$DvtControlPanel$$.prototype.$HandleExpandClick$ = function $$DvtControlPanel$$$$$HandleExpandClick$$($event$$531$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$531$$);
  this.$_bTransition$ || (this.$_doExpand$(), this.$getTooltipManager$() && this.$getTooltipManager$().$hideTooltip$())
};
D.$DvtControlPanel$$.prototype.$_doExpand$ = function $$DvtControlPanel$$$$$_doExpand$$() {
  this.$_bTransition$ = D.$JSCompiler_alias_TRUE$$;
  this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  var $event$$inline_6991_s$$121$$ = (0,D.$JSCompiler_StaticMethods_RenderExpanded$$)(this);
  this.$addChild$($event$$inline_6991_s$$121$$);
  (0,D.$JSCompiler_StaticMethods__applyAlphasForMouse$$)(this);
  var $oldContent$$inline_6981$$ = this.$getChildAt$(0), $odim$$inline_6983_transX$$inline_6988$$ = $oldContent$$inline_6981$$.$getDimensions$(), $openCloseButtonWidth$$inline_6984$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "openCloseButtonWidth", 0);
  if($odim$$inline_6983_transX$$inline_6988$$ && 0 != $odim$$inline_6983_transX$$inline_6988$$.$w$) {
    var $ndim$$inline_6985$$ = $event$$inline_6991_s$$121$$.$getDimensions$(), $animator$$inline_6986$$ = new D.$DvtAnimator$$(this.$_context$, 0.25);
    $oldContent$$inline_6981$$.$setAlpha$(1);
    $event$$inline_6991_s$$121$$.$setAlpha$(0);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_6986$$, "typeNumber", $oldContent$$inline_6981$$, $oldContent$$inline_6981$$.$getAlpha$, $oldContent$$inline_6981$$.$setAlpha$, 0);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_6986$$, "typeNumber", $event$$inline_6991_s$$121$$, $event$$inline_6991_s$$121$$.$getAlpha$, $event$$inline_6991_s$$121$$.$setAlpha$, 1);
    $event$$inline_6991_s$$121$$.$setScaleX$($odim$$inline_6983_transX$$inline_6988$$.$w$ / $ndim$$inline_6985$$.$w$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_6986$$, "typeNumber", $event$$inline_6991_s$$121$$, $event$$inline_6991_s$$121$$.$getScaleX$, $event$$inline_6991_s$$121$$.$setScaleX$, 1);
    if((0,D.$DvtAgent$isRightToLeft$$)(this.$_context$)) {
      $event$$inline_6991_s$$121$$.$setTranslateX$($oldContent$$inline_6981$$.$getTranslateX$());
      var $dimWidth$$inline_6987$$ = $ndim$$inline_6985$$.$w$ + $ndim$$inline_6985$$.x;
      (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_6986$$, "typeNumber", $event$$inline_6991_s$$121$$, $event$$inline_6991_s$$121$$.$getTranslateX$, $event$$inline_6991_s$$121$$.$setTranslateX$, $oldContent$$inline_6981$$.$getTranslateX$() + $openCloseButtonWidth$$inline_6984$$ - $dimWidth$$inline_6987$$)
    }
    $event$$inline_6991_s$$121$$.$setScaleY$($odim$$inline_6983_transX$$inline_6988$$.$h$ / $ndim$$inline_6985$$.$h$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_6986$$, "typeNumber", $event$$inline_6991_s$$121$$, $event$$inline_6991_s$$121$$.$getScaleY$, $event$$inline_6991_s$$121$$.$setScaleY$, 1);
    $animator$$inline_6986$$.$setOnEnd$(function() {
      $oldContent$$inline_6981$$.getParent().removeChild($oldContent$$inline_6981$$);
      this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$;
      this.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$)
    }, this);
    $animator$$inline_6986$$.play()
  }else {
    $oldContent$$inline_6981$$.getParent().removeChild($oldContent$$inline_6981$$), (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) ? ($ndim$$inline_6985$$ = (0,D.$DvtDisplayableUtils$_getDimForced$$)(this.$_context$, $event$$inline_6991_s$$121$$), $dimWidth$$inline_6987$$ = window.Math.floor($ndim$$inline_6985$$.$w$ + $ndim$$inline_6985$$.x), $odim$$inline_6983_transX$$inline_6988$$ = $openCloseButtonWidth$$inline_6984$$ - $dimWidth$$inline_6987$$) : $odim$$inline_6983_transX$$inline_6988$$ = 0, 
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($event$$inline_6991_s$$121$$, $odim$$inline_6983_transX$$inline_6988$$, 0)
  }
  this.$_state$ = 2;
  $event$$inline_6991_s$$121$$ = new D.$DvtControlPanelEvent$$("show");
  this.$FireListener$($event$$inline_6991_s$$121$$)
};
D.$JSCompiler_StaticMethods__applyAlphasForMouse$$ = function $$JSCompiler_StaticMethods__applyAlphasForMouse$$$($JSCompiler_StaticMethods__applyAlphasForMouse$self$$) {
  var $bMouseOver$$3$$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods__applyAlphasForMouse$self$$.$_context$.$_stage$ && ($bMouseOver$$3$$ = D.$JSCompiler_alias_TRUE$$);
  $bMouseOver$$3$$ ? (0,D.$JSCompiler_StaticMethods__applyAlphasRollover$$)($JSCompiler_StaticMethods__applyAlphasForMouse$self$$) : (0,D.$JSCompiler_StaticMethods__applyAlphasRollout$$)($JSCompiler_StaticMethods__applyAlphasForMouse$self$$)
};
D.$DvtControlPanel$$.prototype.$HandleCollapseClick$ = function $$DvtControlPanel$$$$$HandleCollapseClick$$($event$$532$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$532$$);
  this.$_bTransition$ || this.$_doCollapse$()
};
D.$DvtControlPanel$$.prototype.$_doCollapse$ = function $$DvtControlPanel$$$$$_doCollapse$$() {
  this.$_bTransition$ = D.$JSCompiler_alias_TRUE$$;
  var $event$$inline_7001_s$$122$$ = (0,D.$JSCompiler_StaticMethods_RenderCollapsed$$)(this);
  this.$addChild$($event$$inline_7001_s$$122$$);
  (0,D.$JSCompiler_StaticMethods__applyAlphasForMouse$$)(this);
  var $oldContent$$inline_6994$$ = this.$getChildAt$(0), $animator$$inline_6996$$ = new D.$DvtAnimator$$(this.$_context$, 0.25);
  $oldContent$$inline_6994$$.$setAlpha$(1);
  $event$$inline_7001_s$$122$$.$setAlpha$(0);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_6996$$, "typeNumber", $oldContent$$inline_6994$$, $oldContent$$inline_6994$$.$getAlpha$, $oldContent$$inline_6994$$.$setAlpha$, 0);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_6996$$, "typeNumber", $event$$inline_7001_s$$122$$, $event$$inline_7001_s$$122$$.$getAlpha$, $event$$inline_7001_s$$122$$.$setAlpha$, 1);
  var $ndim$$inline_6997$$ = this.$_collapsedDim$, $odim$$inline_6998$$ = this.$_expandedDim$;
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_6996$$, "typeNumber", $oldContent$$inline_6994$$, $oldContent$$inline_6994$$.$getScaleX$, $oldContent$$inline_6994$$.$setScaleX$, $ndim$$inline_6997$$.$w$ / $odim$$inline_6998$$.$w$);
  (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) && (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_6996$$, "typeNumber", $oldContent$$inline_6994$$, $oldContent$$inline_6994$$.$getTranslateX$, $oldContent$$inline_6994$$.$setTranslateX$, $event$$inline_7001_s$$122$$.$getTranslateX$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_6996$$, "typeNumber", $oldContent$$inline_6994$$, $oldContent$$inline_6994$$.$getScaleY$, $oldContent$$inline_6994$$.$setScaleY$, $ndim$$inline_6997$$.$h$ / $odim$$inline_6998$$.$h$);
  $animator$$inline_6996$$.$setOnEnd$(function() {
    $oldContent$$inline_6994$$.getParent().removeChild($oldContent$$inline_6994$$);
    this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
  }, this);
  $animator$$inline_6996$$.play();
  this.$_state$ = 1;
  $event$$inline_7001_s$$122$$ = new D.$DvtControlPanelEvent$$("hide");
  this.$FireListener$($event$$inline_7001_s$$122$$)
};
D.$DvtControlPanel$$.prototype.$HandleRollOver$ = function $$DvtControlPanel$$$$$HandleRollOver$$() {
  this.$_bMouseOver$ = D.$JSCompiler_alias_TRUE$$;
  this.$_bMouseDragPanning$ || (0,D.$JSCompiler_StaticMethods__applyAlphasRollover$$)(this)
};
D.$DvtControlPanel$$.prototype.$HandleRollOut$ = function $$DvtControlPanel$$$$$HandleRollOut$$() {
  this.$_bMouseOver$ = D.$JSCompiler_alias_FALSE$$;
  this.$_bMouseDragPanning$ || (0,D.$JSCompiler_StaticMethods__applyAlphasRollout$$)(this)
};
D.$JSCompiler_StaticMethods__applyAlphasRollover$$ = function $$JSCompiler_StaticMethods__applyAlphasRollover$$$($JSCompiler_StaticMethods__applyAlphasRollover$self$$) {
  $JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_background$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_styleMap$.backgroundHoverAlpha);
  $JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_frame$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_styleMap$.borderHoverAlpha);
  $JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_panControlUnderlay$ && $JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_panControlUnderlay$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_styleMap$.backgroundHoverAlpha)
};
D.$JSCompiler_StaticMethods__applyAlphasRollout$$ = function $$JSCompiler_StaticMethods__applyAlphasRollout$$$($JSCompiler_StaticMethods__applyAlphasRollout$self$$) {
  $JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_background$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_bgAlpha$);
  $JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_frame$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_styleMap$.borderAlpha);
  $JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_panControlUnderlay$ && $JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_panControlUnderlay$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_bgAlpha$)
};
D.$DvtControlPanel$$.prototype.$getDimensions$ = function $$DvtControlPanel$$$$$getDimensions$$() {
  this.$_dim$ || (this.$_dim$ = D.$DvtControlPanel$$.$superclass$.$getDimensions$.call(this));
  return this.$_dim$
};
D.$DvtControlPanel$$.prototype.$renderComponent$ = function $$DvtControlPanel$$$$$renderComponent$$() {
  var $s$$123$$;
  $s$$123$$ = 1 == this.$_state$ ? (0,D.$JSCompiler_StaticMethods_RenderCollapsed$$)(this) : (0,D.$JSCompiler_StaticMethods_RenderExpanded$$)(this);
  this.$_background$.$setAlpha$(this.$_bgAlpha$);
  this.$_frame$.$setAlpha$(this.$_styleMap$.borderAlpha);
  this.$addChild$($s$$123$$)
};
D.$DvtControlPanel$$.prototype.$getButtonImages$ = (0,D.$JSCompiler_get$$)("$_buttonImages$");
D.$JSCompiler_StaticMethods_enableZoomInControl$$ = function $$JSCompiler_StaticMethods_enableZoomInControl$$$($JSCompiler_StaticMethods_enableZoomInControl$self$$, $enabled$$10$$) {
  $JSCompiler_StaticMethods_enableZoomInControl$self$$.$_zoomInButton$ && $JSCompiler_StaticMethods_enableZoomInControl$self$$.$_zoomInButton$.$setEnabled$($enabled$$10$$)
};
D.$JSCompiler_StaticMethods_enableZoomOutControl$$ = function $$JSCompiler_StaticMethods_enableZoomOutControl$$$($JSCompiler_StaticMethods_enableZoomOutControl$self$$, $enabled$$11$$) {
  $JSCompiler_StaticMethods_enableZoomOutControl$self$$.$_zoomOutButton$ && $JSCompiler_StaticMethods_enableZoomOutControl$self$$.$_zoomOutButton$.$setEnabled$($enabled$$11$$)
};
D.$DvtControlPanelDefaults$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanelDefaults$$, D.$DvtObj$$, "DvtControlPanelDefaults");
D.$DvtControlPanelDefaults$$.$SKIN_ALTA$ = {"fill-type":"solid", backgroundAlpha:1, backgroundDragAlpha:1, borderDragAlpha:1, panelDrawerStyles:D.$JSCompiler_alias_TRUE$$, buttonWidth:42, buttonHeight:42, buttonRadius:0, openCloseButtonWidth:42, tabSize:42, paddingTop:15, paddingSide:-1, imageWidth:24, imageHeight:24, centerButtonDisplayed:D.$JSCompiler_alias_FALSE$$, scrollbarBackground:"linear-gradient(bottom, #dce2e7 0%, #f8f8f8 8%)", scrollbarBorderColor:"#dce2e7", scrollbarHandleColor:"#abb0b4", 
scrollbarHandleHoverColor:"#333333", scrollbarHandleActiveColor:"#333333", comboBox:{paddingTop:0, paddingBottom:0, paddingLeft:0, paddingRight:0, paddingInner:0, itemHeight:30, imagePadding:0, itemPadding:10}, vbar:{paddingTop:0, paddingBottom:0, paddingLeft:0, paddingRight:0, paddingInner:0}, hbar:{paddingTop:0, paddingBottom:0, paddingLeft:0, paddingRight:0, paddingInner:0}};
D.$DvtControlPanelDefaults$$.$SKIN_SKYROS$ = {"fill-type":"solid"};
D.$DvtControlPanelDefaults$$.$DEFAULT$ = {"fill-type":"gradient", "border-color":"#ffffff", "background-color":"#ffffff", "border-radius":6, backgroundAlpha:0.5, backgroundHoverAlpha:1, backgroundDragAlpha:0.5, borderAlpha:1, borderHoverAlpha:1, borderDragAlpha:0.5, tabSize:26, buttonWidth:22, buttonHeight:22, buttonRadius:3, paddingTop:5, paddingSide:5, imageWidth:22, imageHeight:20, openCloseButtonWidth:10, centerButtonDisplayed:D.$JSCompiler_alias_TRUE$$, comboBox:{paddingTop:2, paddingBottom:6, 
paddingLeft:3, paddingRight:3, paddingInner:2, itemHeight:22, radius:4, imagePadding:2, itemPadding:7}, vbar:{paddingTop:2.5, paddingBottom:2.5, paddingLeft:2, paddingRight:2, paddingInner:2}, hbar:{paddingTop:2, paddingBottom:2, paddingLeft:3, paddingRight:3, paddingInner:2}};
D.$DvtControlPanelDefaults$$.$calcOptions$ = function $$DvtControlPanelDefaults$$$$calcOptions$$($userOptions$$2$$) {
  var $defaults$$1$$ = D.$DvtControlPanelDefaults$$.$_getDefaults$($userOptions$$2$$);
  return $userOptions$$2$$ ? D.$DvtJSONUtils$$.$merge$($userOptions$$2$$, $defaults$$1$$) : $defaults$$1$$
};
D.$DvtControlPanelDefaults$$.$_getDefaults$ = function $$DvtControlPanelDefaults$$$$_getDefaults$$($userOptions$$3$$) {
  var $defaults$$2$$ = D.$JSCompiler_alias_NULL$$;
  return $defaults$$2$$ = $userOptions$$3$$ && "skyros" === $userOptions$$3$$.skin ? D.$DvtJSONUtils$$.$merge$(D.$DvtControlPanelDefaults$$.$SKIN_SKYROS$, D.$DvtControlPanelDefaults$$.$DEFAULT$) : $userOptions$$3$$ && "alta" === $userOptions$$3$$.skin ? D.$DvtJSONUtils$$.$merge$(D.$DvtControlPanelDefaults$$.$SKIN_ALTA$, D.$DvtControlPanelDefaults$$.$DEFAULT$) : D.$DvtJSONUtils$$.clone(D.$DvtControlPanelDefaults$$.$DEFAULT$)
};
D.$DvtControlPanelEventManager$$ = function $$DvtControlPanelEventManager$$$($context$$208$$, $callback$$76$$, $callbackObj$$39$$) {
  this.Init($context$$208$$, $callback$$76$$, $callbackObj$$39$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanelEventManager$$, D.$DvtEventManager$$, "DvtControlPanelEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtControlPanelEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($event$$301$$) {
  var $obj$$130$$ = this.$GetLogicalObject$((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$301$$));
  D.$DvtControlPanelEventManager$$.$superclass$.$OnMouseDown$.call(this, $event$$301$$);
  $obj$$130$$ && ($obj$$130$$.$HandleMouseDown$ && $obj$$130$$.$HandleMouseDown$($event$$301$$), $event$$301$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$($event$$302$$) {
  var $obj$$131$$ = this.$GetLogicalObject$((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$302$$));
  D.$DvtControlPanelEventManager$$.$superclass$.$OnMouseUp$.call(this, $event$$302$$);
  $obj$$131$$ && ($obj$$131$$.$HandleMouseUp$ && $obj$$131$$.$HandleMouseUp$($event$$302$$), $event$$302$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$303$$) {
  var $obj$$132$$ = this.$GetLogicalObject$((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$303$$));
  D.$DvtControlPanelEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$303$$);
  $obj$$132$$ && ($obj$$132$$.$HandleMouseOut$ && $obj$$132$$.$HandleMouseOut$($event$$303$$), $event$$303$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$304$$) {
  var $obj$$133$$ = this.$GetLogicalObject$((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$304$$));
  D.$DvtControlPanelEventManager$$.$superclass$.$OnClick$.call(this, $event$$304$$);
  $obj$$133$$ && ($obj$$133$$.$HandleClick$ && $obj$$133$$.$HandleClick$($event$$304$$), $event$$304$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnRollOver$ = function $$JSCompiler_prototypeAlias$$$$OnRollOver$$($event$$305$$) {
  D.$DvtControlPanelEventManager$$.$superclass$.$OnRollOver$.call(this, $event$$305$$);
  var $obj$$134$$ = this.$GetLogicalObject$((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$305$$));
  $obj$$134$$ && $obj$$134$$.$HandleRollOver$ && $obj$$134$$.$HandleRollOver$($event$$305$$)
};
D.$JSCompiler_prototypeAlias$$.$OnRollOut$ = function $$JSCompiler_prototypeAlias$$$$OnRollOut$$($event$$306$$) {
  D.$DvtControlPanelEventManager$$.$superclass$.$OnRollOut$.call(this, $event$$306$$);
  var $obj$$135$$ = this.$GetLogicalObject$((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$306$$));
  $obj$$135$$ && $obj$$135$$.$HandleRollOut$ && $obj$$135$$.$HandleRollOut$($event$$306$$)
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchClick$$($event$$307$$) {
  var $obj$$136$$ = this.$GetLogicalObject$((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$307$$));
  $obj$$136$$ && ($obj$$136$$.$HandleClick$ && $obj$$136$$.$HandleClick$($event$$307$$), $event$$307$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchStartInternal$$($event$$308$$) {
  $event$$308$$.$blockTouchHold$();
  (0,D.$DvtEventManager$consumeEvent$$)($event$$308$$)
};
D.$DvtControlPanelEventHandlerProxy$$ = function $$DvtControlPanelEventHandlerProxy$$$($callback$$112$$, $handleClick$$, $handleMouseDown$$, $handleMouseUp$$, $handleMouseOut$$, $handleMouseOver$$, $tooltip$$43$$) {
  this.Init($callback$$112$$, $handleClick$$, $handleMouseDown$$, $handleMouseUp$$, $handleMouseOut$$, $handleMouseOver$$, $tooltip$$43$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanelEventHandlerProxy$$, D.$DvtObj$$, "DvtControlPanelEventHandlerProxy");
D.$JSCompiler_prototypeAlias$$ = D.$DvtControlPanelEventHandlerProxy$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($callbackObj$$75$$, $handleClick$$1$$, $handleMouseDown$$1$$, $handleMouseUp$$1$$, $handleMouseOut$$1$$, $handleMouseOver$$1$$, $tooltip$$44$$) {
  this.$_callbackObj$ = $callbackObj$$75$$;
  this.$_handleClick$ = $handleClick$$1$$;
  this.$_handleMouseUp$ = $handleMouseUp$$1$$;
  this.$_handleMouseDown$ = $handleMouseDown$$1$$;
  this.$_handleMouseOut$ = $handleMouseOut$$1$$;
  this.$_handleMouseOver$ = $handleMouseOver$$1$$;
  this.$_tooltip$ = $tooltip$$44$$
};
D.$JSCompiler_prototypeAlias$$.$HandleClick$ = function $$JSCompiler_prototypeAlias$$$$HandleClick$$($event$$545$$) {
  this.$_handleClick$ && this.$_handleClick$.call(this.$_callbackObj$, $event$$545$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseDown$$($event$$546$$) {
  this.$_handleMouseDown$ && this.$_handleMouseDown$.call(this.$_callbackObj$, $event$$546$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseUp$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseUp$$($event$$547$$) {
  this.$_handleMouseUp$ && this.$_handleMouseUp$.call(this.$_callbackObj$, $event$$547$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseOut$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseOut$$($event$$548$$) {
  this.$_handleMouseOut$ && this.$_handleMouseOut$.call(this.$_callbackObj$, $event$$548$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseOver$$($event$$549$$) {
  this.$_handleMouseOver$ && this.$_handleMouseOver$.call(this.$_callbackObj$, $event$$549$$)
};
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = (0,D.$JSCompiler_get$$)("$_tooltip$");
D.$DvtControlPanelLAFUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanelLAFUtils$$, D.$DvtObj$$, "DvtControlPanelLAFUtils");
D.$DvtControlPanelLAFUtils$$.$OPEN_TOP$ = "top";
D.$DvtControlPanelLAFUtils$$.$OPEN_RIGHT$ = "right";
D.$DvtControlPanelLAFUtils$$.$OPEN_LEFT$ = "left";
D.$DvtControlPanelLAFUtils$$.$OPEN_BOTTOM$ = "bottom";
D.$DvtControlPanelLAFUtils$$.$VIEW_PANEL_HEIGHT$ = 47;
D.$DvtControlPanelLAFUtils$$.$VIEW_PANEL_HALF_HEIGHT$ = 26;
D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ = window.Math.sin(window.Math.PI / 4);
D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ = window.Math.tan(window.Math.PI / 8);
D.$DvtControlPanelLAFUtils$$.$getViewPanelHeight$ = function $$DvtControlPanelLAFUtils$$$$getViewPanelHeight$$() {
  return D.$DvtControlPanelLAFUtils$$.$VIEW_PANEL_HEIGHT$
};
D.$DvtControlPanelLAFUtils$$.$getViewPanelHalfHeight$ = function $$DvtControlPanelLAFUtils$$$$getViewPanelHalfHeight$$() {
  return D.$DvtControlPanelLAFUtils$$.$VIEW_PANEL_HALF_HEIGHT$
};
D.$DvtControlPanelLAFUtils$$.$createEmptyViewOpenShape$ = function $$DvtControlPanelLAFUtils$$$$createEmptyViewOpenShape$$($context$$369$$, $nw$$1$$, $nh$$, $bL2R$$, $r$$40_styleMap$$51$$) {
  $nw$$1$$ || ($nw$$1$$ = 86);
  $nh$$ || ($nh$$ = 47);
  $bL2R$$ === D.$JSCompiler_alias_VOID$$ && ($bL2R$$ = D.$JSCompiler_alias_TRUE$$);
  $r$$40_styleMap$$51$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($r$$40_styleMap$$51$$, "border-radius", 0));
  return D.$DvtControlPanelLAFUtils$$.$makeViewOpenShapeHelper$($context$$369$$, $r$$40_styleMap$$51$$, $nw$$1$$ - 2 * $r$$40_styleMap$$51$$, $nh$$ - 2 * $r$$40_styleMap$$51$$, $bL2R$$)
};
D.$DvtControlPanelLAFUtils$$.$makeViewOpenShapeHelper$ = function $$DvtControlPanelLAFUtils$$$$makeViewOpenShapeHelper$$($context$$370$$, $r$$41$$, $ww$$82$$, $hh$$68$$, $bL2R$$1$$) {
  var $x$$209$$ = $ww$$82$$ + $r$$41$$, $y$$182$$ = $hh$$68$$ + $r$$41$$, $cmds$$10$$ = window.DvtPathUtils.moveTo($x$$209$$ + $r$$41$$, $y$$182$$ + $r$$41$$), $cmds$$10$$ = $cmds$$10$$ + window.DvtPathUtils.lineTo($x$$209$$ - $ww$$82$$, $y$$182$$ + $r$$41$$), $x$$209$$ = $x$$209$$ - $ww$$82$$, $cmds$$10$$ = $cmds$$10$$ + window.DvtPathUtils.lineTo($x$$209$$ - $r$$41$$, $y$$182$$ + $r$$41$$), $cmds$$10$$ = $cmds$$10$$ + window.DvtPathUtils.lineTo($x$$209$$ - $r$$41$$, $y$$182$$ - $hh$$68$$), $y$$182$$ = 
  $y$$182$$ - $hh$$68$$;
  $bL2R$$1$$ ? ($cmds$$10$$ += window.DvtPathUtils.$quadTo$(-$r$$41$$ + $x$$209$$, -D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$41$$ + $y$$182$$, -D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$41$$ + $x$$209$$, -D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$41$$ + $y$$182$$) + window.DvtPathUtils.$quadTo$(-D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$41$$ + $x$$209$$, -$r$$41$$ + $y$$182$$, $x$$209$$, -$r$$41$$ + $y$$182$$) + window.DvtPathUtils.lineTo($x$$209$$, -$r$$41$$ + $y$$182$$), $cmds$$10$$ += 
  window.DvtPathUtils.lineTo($x$$209$$ + $ww$$82$$ + $r$$41$$, -$r$$41$$ + $y$$182$$), $cmds$$10$$ += window.DvtPathUtils.lineTo($x$$209$$ + $ww$$82$$ + $r$$41$$, $y$$182$$ + $hh$$68$$)) : ($cmds$$10$$ += window.DvtPathUtils.lineTo($x$$209$$ - $r$$41$$, -$r$$41$$ + $y$$182$$), $cmds$$10$$ += window.DvtPathUtils.lineTo($x$$209$$ + $ww$$82$$, -$r$$41$$ + $y$$182$$), $x$$209$$ += $ww$$82$$, $cmds$$10$$ += window.DvtPathUtils.$quadTo$(D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$41$$ + $x$$209$$, -$r$$41$$ + 
  $y$$182$$, D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$41$$ + $x$$209$$, -D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$41$$ + $y$$182$$) + window.DvtPathUtils.$quadTo$($r$$41$$ + $x$$209$$, -D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$41$$ + $y$$182$$, $r$$41$$ + $x$$209$$, $y$$182$$) + window.DvtPathUtils.lineTo($x$$209$$ + $r$$41$$, $y$$182$$ + $hh$$68$$));
  $cmds$$10$$ += window.DvtPathUtils.closePath();
  return new D.$DvtPath$$($context$$370$$, $cmds$$10$$)
};
D.$DvtControlPanelLAFUtils$$.$createEmptyViewClosedShape$ = function $$DvtControlPanelLAFUtils$$$$createEmptyViewClosedShape$$($context$$371_mc$$1$$, $buttonHeight$$1_nh$$1$$, $styleMap$$52$$, $arPoints$$5_bR2L$$5_color$$57$$) {
  $buttonHeight$$1_nh$$1$$ || ($buttonHeight$$1_nh$$1$$ = 47);
  var $r$$42$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$52$$, "border-radius", 0)), $buttonWidth$$6$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$52$$, "openCloseButtonWidth", 0);
  $buttonHeight$$1_nh$$1$$ = window.Math.max($buttonHeight$$1_nh$$1$$, (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$52$$, "buttonHeight", $buttonHeight$$1_nh$$1$$));
  $arPoints$$5_bR2L$$5_color$$57$$ = D.$DvtButtonLAFUtils$$.$GetButtonPathCommands$($buttonWidth$$6$$, $buttonHeight$$1_nh$$1$$, $r$$42$$, $arPoints$$5_bR2L$$5_color$$57$$);
  $arPoints$$5_bR2L$$5_color$$57$$ = $arPoints$$5_bR2L$$5_color$$57$$.concat("Z");
  $context$$371_mc$$1$$ = new D.$DvtPath$$($context$$371_mc$$1$$, $arPoints$$5_bR2L$$5_color$$57$$, "cls_shape");
  ($arPoints$$5_bR2L$$5_color$$57$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$52$$, "tab-color-inactive", D.$JSCompiler_alias_NULL$$)) || ($arPoints$$5_bR2L$$5_color$$57$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$52$$, "background-color", D.$JSCompiler_alias_NULL$$));
  $context$$371_mc$$1$$.$setSolidFill$($arPoints$$5_bR2L$$5_color$$57$$);
  return $context$$371_mc$$1$$
};
D.$DvtControlPanelLAFUtils$$.$createEmptyViewClosedFrame$ = function $$DvtControlPanelLAFUtils$$$$createEmptyViewClosedFrame$$($context$$372_mc$$2$$, $buttonHeight$$2_nh$$2$$, $styleMap$$53$$, $arPoints$$6_bR2L$$6$$) {
  $buttonHeight$$2_nh$$2$$ || ($buttonHeight$$2_nh$$2$$ = 47);
  var $r$$43$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$53$$, "border-radius", 0)), $buttonWidth$$7$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$53$$, "openCloseButtonWidth", 0);
  $buttonHeight$$2_nh$$2$$ = window.Math.max($buttonHeight$$2_nh$$2$$, (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$53$$, "buttonHeight", $buttonHeight$$2_nh$$2$$));
  $arPoints$$6_bR2L$$6$$ = D.$DvtButtonLAFUtils$$.$GetButtonPathCommands$($buttonWidth$$7$$, $buttonHeight$$2_nh$$2$$, $r$$43$$, $arPoints$$6_bR2L$$6$$);
  $arPoints$$6_bR2L$$6$$ = $arPoints$$6_bR2L$$6$$.concat("Z");
  $context$$372_mc$$2$$ = new D.$DvtPath$$($context$$372_mc$$2$$, $arPoints$$6_bR2L$$6$$, "cls_shape");
  $context$$372_mc$$2$$.$setSolidStroke$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$53$$, "border-color", D.$JSCompiler_alias_NULL$$));
  $context$$372_mc$$2$$.$setFill$(D.$JSCompiler_alias_NULL$$);
  return $context$$372_mc$$2$$
};
D.$DvtControlPanelLAFUtils$$.$renderEmptyZoomShape$ = function $$DvtControlPanelLAFUtils$$$$renderEmptyZoomShape$$($context$$373_mc$$3$$, $nh$$3$$, $styleMap$$54$$, $openSide$$1$$, $openSideSize$$) {
  $nh$$3$$ || ($nh$$3$$ = 137);
  var $r$$44$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$54$$, "border-radius", 0)), $cpWidth$$1$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$54$$, "tabSize", 0), $ww$$83$$ = $cpWidth$$1$$ - 2 * $r$$44$$, $hh$$69$$ = $nh$$3$$ + 7 - 2 * $r$$44$$;
  $context$$373_mc$$3$$ = $openSide$$1$$ && $openSideSize$$ ? D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelperOpenSide$($context$$373_mc$$3$$, $r$$44$$, $cpWidth$$1$$, $nh$$3$$, $openSide$$1$$, $openSideSize$$) : D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelper$($context$$373_mc$$3$$, $r$$44$$, $ww$$83$$, $hh$$69$$);
  $context$$373_mc$$3$$.$setSolidFill$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$54$$, "background-color", D.$JSCompiler_alias_NULL$$));
  return $context$$373_mc$$3$$
};
D.$DvtControlPanelLAFUtils$$.$renderEmptyZoomFrame$ = function $$DvtControlPanelLAFUtils$$$$renderEmptyZoomFrame$$($context$$374$$, $nh$$4$$, $roundBottomRight$$, $styleMap$$55$$, $openSide$$2$$, $openSideSize$$1$$) {
  $nh$$4$$ || ($nh$$4$$ = 137);
  $roundBottomRight$$ || ($roundBottomRight$$ = D.$JSCompiler_alias_TRUE$$);
  var $r$$45$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$55$$, "border-radius", 0)), $cpWidth$$2$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$55$$, "tabSize", 0), $ww$$84$$ = $cpWidth$$2$$ - 2 * $r$$45$$, $hh$$70$$ = $nh$$4$$ + 7 - 2 * $r$$45$$, $mc$$4$$ = D.$JSCompiler_alias_NULL$$, $mc$$4$$ = $openSide$$2$$ && $openSideSize$$1$$ ? D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelperOpenSide$($context$$374$$, $r$$45$$, $cpWidth$$2$$, $nh$$4$$, $openSide$$2$$, $openSideSize$$1$$) : 
  D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelper$($context$$374$$, $r$$45$$, $ww$$84$$, $hh$$70$$, $roundBottomRight$$);
  $mc$$4$$.$setSolidStroke$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$55$$, "border-color", D.$JSCompiler_alias_NULL$$));
  $mc$$4$$.$setFill$(D.$JSCompiler_alias_NULL$$);
  return $mc$$4$$
};
D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelper$ = function $$DvtControlPanelLAFUtils$$$$makeZoomShapeHelper$$($context$$375$$, $r$$46$$, $ww$$85$$, $hh$$71$$, $roundBottomRight$$1$$) {
  $roundBottomRight$$1$$ || ($roundBottomRight$$1$$ = D.$JSCompiler_alias_TRUE$$);
  var $x$$210$$ = $ww$$85$$ + $r$$46$$, $y$$183$$ = $hh$$71$$, $cmds$$11$$ = window.DvtPathUtils.moveTo($x$$210$$ + $r$$46$$, $y$$183$$), $cmds$$11$$ = $roundBottomRight$$1$$ ? $cmds$$11$$ + (window.DvtPathUtils.$quadTo$($r$$46$$ + $x$$210$$, D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$46$$ + $y$$183$$, D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$46$$ + $x$$210$$, D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$46$$ + $y$$183$$) + window.DvtPathUtils.$quadTo$(D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * 
  $r$$46$$ + $x$$210$$, $r$$46$$ + $y$$183$$, $x$$210$$, $r$$46$$ + $y$$183$$) + window.DvtPathUtils.lineTo($x$$210$$, $r$$46$$ + $y$$183$$)) : $cmds$$11$$ + window.DvtPathUtils.lineTo($x$$210$$ + $r$$46$$, $y$$183$$ + $r$$46$$), $cmds$$11$$ = $cmds$$11$$ + window.DvtPathUtils.lineTo($x$$210$$ - $ww$$85$$, $r$$46$$ + $y$$183$$), $x$$210$$ = $x$$210$$ - $ww$$85$$, $cmds$$11$$ = $cmds$$11$$ + (window.DvtPathUtils.$quadTo$(-D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$46$$ + $x$$210$$, $r$$46$$ + $y$$183$$, 
  -D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$46$$ + $x$$210$$, D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$46$$ + $y$$183$$) + window.DvtPathUtils.$quadTo$(-$r$$46$$ + $x$$210$$, D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$46$$ + $y$$183$$, -$r$$46$$ + $x$$210$$, $y$$183$$) + window.DvtPathUtils.lineTo(-$r$$46$$ + $x$$210$$, $y$$183$$) + window.DvtPathUtils.lineTo(-$r$$46$$ + $x$$210$$, $y$$183$$ - $hh$$71$$)), $y$$183$$ = $y$$183$$ - $hh$$71$$, $cmds$$11$$ = $cmds$$11$$ + (window.DvtPathUtils.lineTo($x$$210$$ + 
  $ww$$85$$ + $r$$46$$, $y$$183$$) + window.DvtPathUtils.lineTo($x$$210$$ + $ww$$85$$ + $r$$46$$, $y$$183$$ + $hh$$71$$) + window.DvtPathUtils.closePath());
  return new D.$DvtPath$$($context$$375$$, $cmds$$11$$)
};
D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelperOpenSide$ = function $$DvtControlPanelLAFUtils$$$$makeZoomShapeHelperOpenSide$$($context$$376$$, $arPoints$$7_r$$47$$, $width$$134$$, $height$$120$$, $openSide$$3$$, $openSideSize$$2$$) {
  $arPoints$$7_r$$47$$ = D.$DvtControlPanelLAFUtils$$.$GetShapePathCommands$($width$$134$$, $height$$120$$, $arPoints$$7_r$$47$$, $openSide$$3$$, $openSideSize$$2$$);
  return new D.$DvtPath$$($context$$376$$, $arPoints$$7_r$$47$$)
};
D.$DvtControlPanelLAFUtils$$.$makeViewOpenShapeHelperOpenSide$ = function $$DvtControlPanelLAFUtils$$$$makeViewOpenShapeHelperOpenSide$$($context$$377$$, $arPoints$$8_r$$48$$, $width$$135$$, $height$$121$$, $openSide$$4$$, $openSideSize$$3$$) {
  $arPoints$$8_r$$48$$ = D.$DvtControlPanelLAFUtils$$.$GetShapePathCommands$($width$$135$$, $height$$121$$, $arPoints$$8_r$$48$$, $openSide$$4$$, $openSideSize$$3$$);
  return new D.$DvtPath$$($context$$377$$, $arPoints$$8_r$$48$$)
};
D.$DvtControlPanelLAFUtils$$.$GetShapePathCommands$ = function $$DvtControlPanelLAFUtils$$$$GetShapePathCommands$$($width$$136$$, $height$$122$$, $r$$49$$, $openSide$$5$$, $openSideSize$$4$$) {
  var $arPoints$$9$$, $bidi$$4$$ = (0,D.$DvtAgent$isRightToLeft$$)();
  $openSide$$5$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_TOP$ && !$bidi$$4$$ && ($arPoints$$9$$ = ["M", $width$$136$$, 0, "L", $width$$136$$, $height$$122$$ - $r$$49$$, "A", $r$$49$$, $r$$49$$, 0, 0, 1, $width$$136$$ - $r$$49$$, $height$$122$$, "L", 0, $height$$122$$, "L", 0, 0]);
  $openSide$$5$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_TOP$ && $bidi$$4$$ ? $arPoints$$9$$ = ["M", $width$$136$$, 0, "L", $width$$136$$, $height$$122$$, "L", $r$$49$$, $height$$122$$, "A", $r$$49$$, $r$$49$$, 0, 0, 1, 0, $height$$122$$ - $r$$49$$, "L", 0, 0] : $openSide$$5$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_RIGHT$ && !$bidi$$4$$ ? $arPoints$$9$$ = ["M", $width$$136$$, $openSideSize$$4$$, "L", $width$$136$$, $height$$122$$ - $r$$49$$, "A", $r$$49$$, $r$$49$$, 0, 0, 1, $width$$136$$ - $r$$49$$, 
  $height$$122$$, "L", 0, $height$$122$$, "L", 0, 0, "L", $width$$136$$, 0] : $openSide$$5$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_RIGHT$ && $bidi$$4$$ ? $arPoints$$9$$ = ["M", 0, 0, "L", $width$$136$$, 0, "L", $width$$136$$, $height$$122$$, "L", $r$$49$$, $height$$122$$, "A", $r$$49$$, $r$$49$$, 0, 0, 1, 0, $height$$122$$ - $r$$49$$, "L", 0, $openSideSize$$4$$] : $openSide$$5$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_LEFT$ && !$bidi$$4$$ ? $arPoints$$9$$ = ["M", 0, 0, "L", $width$$136$$ - $r$$49$$, 
  0, "A", $r$$49$$, $r$$49$$, 0, 0, 1, $width$$136$$, $r$$49$$, "L", $width$$136$$, $height$$122$$ - $r$$49$$, "A", $r$$49$$, $r$$49$$, 0, 0, 1, $width$$136$$ - $r$$49$$, $height$$122$$, "L", 0, $height$$122$$] : $openSide$$5$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_LEFT$ && $bidi$$4$$ ? $arPoints$$9$$ = ["M", $width$$136$$, $height$$122$$, "L", $r$$49$$, $height$$122$$, "A", $r$$49$$, $r$$49$$, 0, 0, 1, 0, $height$$122$$ - $r$$49$$, "L", 0, $r$$49$$, "A", $r$$49$$, $r$$49$$, 0, 0, 1, $r$$49$$, 0, 
  "L", $width$$136$$, 0] : $openSide$$5$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_BOTTOM$ && !$bidi$$4$$ ? $arPoints$$9$$ = ["M", 0, $height$$122$$, "L", 0, 0, "L", $width$$136$$ - $r$$49$$, 0, "A", $r$$49$$, $r$$49$$, 0, 0, 1, $width$$136$$, $r$$49$$, "L", $width$$136$$, $height$$122$$ - $r$$49$$, "A", $r$$49$$, $r$$49$$, 0, 0, 1, $width$$136$$ - $r$$49$$, $height$$122$$, "L", $openSideSize$$4$$, $height$$122$$] : $openSide$$5$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_BOTTOM$ && $bidi$$4$$ && ($arPoints$$9$$ = 
  ["M", $width$$136$$, $height$$122$$, "L", $width$$136$$, 0, "L", $r$$49$$, 0, "A", $r$$49$$, $r$$49$$, 0, 0, 0, 0, $r$$49$$, "L", 0, $height$$122$$ - $r$$49$$, "A", $r$$49$$, $r$$49$$, 0, 0, 0, $r$$49$$, $height$$122$$, "L", $width$$136$$ - $openSideSize$$4$$, $height$$122$$]);
  return $arPoints$$9$$
};
D.$DvtPanZoomComponent$$ = function $$DvtPanZoomComponent$$$($context$$206$$, $callback$$74$$, $callbackObj$$37$$) {
  this.Init($context$$206$$, $callback$$74$$, $callbackObj$$37$$)
};
(0,D.$goog$exportSymbol$$)("DvtPanZoomComponent", D.$DvtPanZoomComponent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomComponent$$, D.$DvtBaseComponent$$, "DvtPanZoomComponent");
D.$DvtPanZoomComponent$$.prototype.Init = function $$DvtPanZoomComponent$$$$Init$($context$$207$$, $callback$$75$$, $callbackObj$$38$$) {
  D.$DvtPanZoomComponent$$.$superclass$.Init.call(this, $context$$207$$, $callback$$75$$, $callbackObj$$38$$);
  this.$_controlPanelBehavior$ = "initCollapsed";
  this.$_displayedControls$ = 16777215;
  this.$_bSupportsVectorEffects$ = !(0,D.$DvtAgent$isPlatformIE$$)() && !((0,D.$DvtAgent$isPlatformGecko$$)() && 17 >= (0,D.$DvtAgent$getVersion$$)());
  this.$_subcomponentStyles$ = this.$_resourcesMap$ = D.$JSCompiler_alias_NULL$$;
  this.$_skinName$ = ""
};
D.$DvtPanZoomComponent$$.prototype.$getPanZoomCanvas$ = (0,D.$JSCompiler_get$$)("$_panZoomCanvas$");
D.$DvtPanZoomComponent$$.prototype.getPanZoomCanvas = D.$DvtPanZoomComponent$$.prototype.$getPanZoomCanvas$;
D.$JSCompiler_StaticMethods_getResourcesMap$$ = function $$JSCompiler_StaticMethods_getResourcesMap$$$($JSCompiler_StaticMethods_getResourcesMap$self$$) {
  $JSCompiler_StaticMethods_getResourcesMap$self$$.$_resourcesMap$ || ($JSCompiler_StaticMethods_getResourcesMap$self$$.$_resourcesMap$ = $JSCompiler_StaticMethods_getResourcesMap$self$$.$Options$ ? $JSCompiler_StaticMethods_getResourcesMap$self$$.$Options$.resources : {});
  return $JSCompiler_StaticMethods_getResourcesMap$self$$.$_resourcesMap$
};
D.$DvtPanZoomComponent$$.prototype.$getBundle$ = function $$DvtPanZoomComponent$$$$$getBundle$$() {
  this.$_bundle$ || (this.$_bundle$ = new D.$DvtSubcomponentBundle$$);
  return this.$_bundle$
};
D.$DvtPanZoomComponent$$.prototype.$getSubcomponentStyles$ = (0,D.$JSCompiler_get$$)("$_subcomponentStyles$");
D.$JSCompiler_StaticMethods_parseComponentJson$$ = function $$JSCompiler_StaticMethods_parseComponentJson$$$($JSCompiler_StaticMethods_parseComponentJson$self$$, $jsonObj$$67$$) {
  var $cpStyleMap_endGradientColor_styleMap$$inline_4905$$ = (new D.$DvtCSSStyle$$($jsonObj$$67$$.inlineStyle)).$getStyle$("background-color");
  $cpStyleMap_endGradientColor_styleMap$$inline_4905$$ && ($JSCompiler_StaticMethods_parseComponentJson$self$$.$_endGradientColor$ = $cpStyleMap_endGradientColor_styleMap$$inline_4905$$);
  var $cpStyleMap_endGradientColor_styleMap$$inline_4905$$ = {}, $skinName$$ = $jsonObj$$67$$.skin;
  $skinName$$ && ($JSCompiler_StaticMethods_parseComponentJson$self$$.$_skinName$ = $skinName$$, $cpStyleMap_endGradientColor_styleMap$$inline_4905$$.skin = $skinName$$);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_4905$$, "background-color", $jsonObj$$67$$.cpBackgroundColor);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_4905$$, "border-color", $jsonObj$$67$$.cpBorderColor);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_4905$$, "border-radius", $jsonObj$$67$$.cpBorderRadius);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_4905$$, "box-shadow", $jsonObj$$67$$.cpBoxShadow);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_4905$$, "tab-color-inactive", $jsonObj$$67$$.tabBgColorInactive);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_4905$$, "tab-border-color-inactive", $jsonObj$$67$$.tabBorderColorInactive);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_4905$$, "scrollbarBackground", $jsonObj$$67$$.scrollbarBg);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_4905$$, "scrollbarBorderColor", $jsonObj$$67$$.scrollbarBorderColor);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_4905$$, "scrollbarHandleColor", $jsonObj$$67$$.scrollbarHandleColor);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_4905$$, "scrollbarHandleActiveColor", $jsonObj$$67$$.scrollbarHandleActiveColor);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_4905$$, "scrollbarHandleHoverColor", $jsonObj$$67$$.scrollbarHandleHoverColor);
  $cpStyleMap_endGradientColor_styleMap$$inline_4905$$ = D.$DvtControlPanelDefaults$$.$calcOptions$($cpStyleMap_endGradientColor_styleMap$$inline_4905$$);
  $JSCompiler_StaticMethods_parseComponentJson$self$$.$_subcomponentStyles$ = $cpStyleMap_endGradientColor_styleMap$$inline_4905$$
};
D.$JSCompiler_StaticMethods_parseComponentAttrs$$ = function $$JSCompiler_StaticMethods_parseComponentAttrs$$$($JSCompiler_StaticMethods_parseComponentAttrs$self$$, $xmlNode$$81$$) {
  var $cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_4914$$ = (new D.$DvtCSSStyle$$($xmlNode$$81$$.$getAttr$("inlineStyle"))).$getStyle$("background-color");
  $cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_4914$$ && ($JSCompiler_StaticMethods_parseComponentAttrs$self$$.$_endGradientColor$ = $cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_4914$$);
  var $cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_4914$$ = {}, $skinName$$1$$ = $xmlNode$$81$$.$getAttr$("skin");
  $skinName$$1$$ && ($JSCompiler_StaticMethods_parseComponentAttrs$self$$.$_skinName$ = $skinName$$1$$, $cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_4914$$.skin = $skinName$$1$$);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_4914$$, "background-color", $xmlNode$$81$$.$getAttr$("cpBackgroundColor"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_4914$$, "border-color", $xmlNode$$81$$.$getAttr$("cpBorderColor"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_4914$$, "border-radius", $xmlNode$$81$$.$getAttr$("cpBorderRadius"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_4914$$, "box-shadow", $xmlNode$$81$$.$getAttr$("cpBoxShadow"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_4914$$, "tab-color-inactive", $xmlNode$$81$$.$getAttr$("tabBgColorInactive"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_4914$$, "tab-border-color-inactive", $xmlNode$$81$$.$getAttr$("tabBorderColorInactive"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_4914$$, "scrollbarBackground", $xmlNode$$81$$.$getAttr$("scrollbarBg"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_4914$$, "scrollbarBorderColor", $xmlNode$$81$$.$getAttr$("scrollbarBorderColor"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_4914$$, "scrollbarHandleColor", $xmlNode$$81$$.$getAttr$("scrollbarHandleColor"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_4914$$, "scrollbarHandleActiveColor", $xmlNode$$81$$.$getAttr$("scrollbarHandleActiveColor"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_4914$$, "scrollbarHandleHoverColor", $xmlNode$$81$$.$getAttr$("scrollbarHandleHoverColor"));
  $cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_4914$$ = D.$DvtControlPanelDefaults$$.$calcOptions$($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_4914$$);
  $JSCompiler_StaticMethods_parseComponentAttrs$self$$.$_subcomponentStyles$ = $cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_4914$$
};
D.$DvtPanZoomComponent$$.prototype.$render$ = function $$DvtPanZoomComponent$$$$$render$$($options$$67$$, $width$$77$$, $height$$67$$) {
  this.$_width$ = $width$$77$$;
  this.$_height$ = $height$$67$$;
  this.$_isResize$ = !$options$$67$$;
  this.$PreRender$();
  if(!this.$_isResize$) {
    if("object" == typeof $options$$67$$) {
      this.$SetOptions$($options$$67$$)
    }else {
      if(!($options$$67$$ == D.$JSCompiler_alias_NULL$$ || 0 == $options$$67$$.length)) {
        var $parser$$inline_4918_rootXmlNode$$inline_4919$$ = new D.$DvtXmlParser$$;
        if($parser$$inline_4918_rootXmlNode$$inline_4919$$ && ($parser$$inline_4918_rootXmlNode$$inline_4919$$ = $parser$$inline_4918_rootXmlNode$$inline_4919$$.parse($options$$67$$))) {
          "r" === $parser$$inline_4918_rootXmlNode$$inline_4919$$.getName() && ($parser$$inline_4918_rootXmlNode$$inline_4919$$ = $parser$$inline_4918_rootXmlNode$$inline_4919$$.getFirstChild()), $parser$$inline_4918_rootXmlNode$$inline_4919$$ && this.$GetXmlDomParser$().$loadXmlInitial$($parser$$inline_4918_rootXmlNode$$inline_4919$$)
        }
      }
    }
  }
  this.$Render$($options$$67$$, $width$$77$$, $height$$67$$)
};
D.$DvtPanZoomComponent$$.prototype.render = D.$DvtPanZoomComponent$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanZoomComponent$$.prototype;
D.$JSCompiler_prototypeAlias$$.$GetControlPanel$ = function $$JSCompiler_prototypeAlias$$$$GetControlPanel$$() {
  var $cpBehavior$$2$$ = this.$GetControlPanelBehavior$();
  return"hidden" != $cpBehavior$$2$$ ? new D.$DvtControlPanel$$(this.$_context$, this, "initCollapsed" == $cpBehavior$$2$$ ? 1 : 2) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$GetControlPanelBehavior$ = (0,D.$JSCompiler_get$$)("$_controlPanelBehavior$");
D.$JSCompiler_prototypeAlias$$.$GetXmlDomParser$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$HandlePanEvent$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$PreRender$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$() {
  if(this.$_endGradientColor$ || !this.$_skinName$) {
    this.$_backgroundPane$ || (this.$_backgroundPane$ = new D.$DvtRect$$(this.$_context$, 0, 0, 0, 0), this.$addChild$(this.$_backgroundPane$)), this.$_backgroundPane$.$setWidth$(this.$_width$), this.$_backgroundPane$.$setHeight$(this.$_height$), this.$_backgroundPane$.$setFill$((0,D.$JSCompiler_StaticMethods__getBackgroundGradient$$)(this, this.$_endGradientColor$))
  }
  if(this.$_isResize$) {
    this.$_panZoomCanvas$.$setSize$(this.$_width$, this.$_height$)
  }else {
    this.$_panZoomCanvas$ && (this.removeChild(this.$_panZoomCanvas$), this.$_panZoomCanvas$ = D.$JSCompiler_alias_NULL$$);
    this.$_panZoomCanvas$ = new D.$DvtPanZoomCanvas$$(this.$_context$, this.$_width$, this.$_height$, this);
    this.$_panZoomCanvas$.$addEvtListener$("dvtPan", this.$HandlePanEvent$, D.$JSCompiler_alias_FALSE$$, this);
    this.$_panZoomCanvas$.$addEvtListener$("dvtZoom", this.$HandleZoomEvent$, D.$JSCompiler_alias_FALSE$$, this);
    this.$addChild$(this.$_panZoomCanvas$);
    var $clipPath$$4_controlPanel$$2$$ = this.$GetControlPanel$();
    $clipPath$$4_controlPanel$$2$$ && ($clipPath$$4_controlPanel$$2$$.$addEvtListener$("dvtPZCPExpand", this.$_handleControlPanelEvent$, D.$JSCompiler_alias_FALSE$$, this), this.$_panZoomCanvas$.$_controlPanel$ = $clipPath$$4_controlPanel$$2$$);
    this.$_panZoomCanvas$.$renderComponent$()
  }
  $clipPath$$4_controlPanel$$2$$ = new D.$DvtClipPath$$("comp");
  (0,D.$JSCompiler_StaticMethods_addRect$$)($clipPath$$4_controlPanel$$2$$, this.$getTranslateX$(), this.$getTranslateY$(), this.$_width$, this.$_height$);
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this, $clipPath$$4_controlPanel$$2$$)
};
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$68$$) {
  this.$Options$ = this.$Defaults$ ? this.$Defaults$.$calcOptions$($options$$68$$) : $options$$68$$
};
D.$JSCompiler_StaticMethods__getBackgroundGradient$$ = function $$JSCompiler_StaticMethods__getBackgroundGradient$$$($JSCompiler_StaticMethods__getBackgroundGradient$self$$, $color$$23$$) {
  var $arColors$$3_newColor$$1_rrRatio$$2$$, $arAlphas$$3_bgAlpha$$1$$ = 1;
  if($color$$23$$ && "#7396C8" != $color$$23$$) {
    $arAlphas$$3_bgAlpha$$1$$ = D.$DvtColorUtils$$.$getAlpha$($color$$23$$);
    $arColors$$3_newColor$$1_rrRatio$$2$$ = (D.$DvtColorUtils$$.$getRed$("#AECDEA") - D.$DvtColorUtils$$.$getRed$("#7396C8")) / (255 - D.$DvtColorUtils$$.$getRed$("#7396C8"));
    var $arStops$$3_bgRgb_ggRatio$$2$$ = (D.$DvtColorUtils$$.$getGreen$("#AECDEA") - D.$DvtColorUtils$$.$getGreen$("#7396C8")) / (255 - D.$DvtColorUtils$$.$getGreen$("#7396C8")), $bbRatio$$2_gw$$ = (D.$DvtColorUtils$$.$getBlue$("#AECDEA") - D.$DvtColorUtils$$.$getBlue$("#7396C8")) / (255 - D.$DvtColorUtils$$.$getBlue$("#7396C8")), $gh_rr$$2$$ = D.$DvtColorUtils$$.$getRed$($color$$23$$), $gg$$2_gx_ww$$70$$ = D.$DvtColorUtils$$.$getGreen$($color$$23$$), $bb$$4_cx$$9$$ = D.$DvtColorUtils$$.$getBlue$($color$$23$$);
    $arColors$$3_newColor$$1_rrRatio$$2$$ = D.$DvtColorUtils$$.$makeRGB$(window.Math.round($gh_rr$$2$$ + $arColors$$3_newColor$$1_rrRatio$$2$$ * (255 - $gh_rr$$2$$)), window.Math.round($gg$$2_gx_ww$$70$$ + $arStops$$3_bgRgb_ggRatio$$2$$ * (255 - $gg$$2_gx_ww$$70$$)), window.Math.round($bb$$4_cx$$9$$ + $bbRatio$$2_gw$$ * (255 - $bb$$4_cx$$9$$)));
    $arStops$$3_bgRgb_ggRatio$$2$$ = D.$DvtColorUtils$$.$getRGB$($color$$23$$);
    $arColors$$3_newColor$$1_rrRatio$$2$$ = ["#FFFFFF", "#FFFFFF", $arColors$$3_newColor$$1_rrRatio$$2$$, $arStops$$3_bgRgb_ggRatio$$2$$]
  }else {
    $arColors$$3_newColor$$1_rrRatio$$2$$ = ["#FFFFFF", "#FFFFFF", "#AECDEA", "#7396C8"]
  }
  var $arAlphas$$3_bgAlpha$$1$$ = [$arAlphas$$3_bgAlpha$$1$$, $arAlphas$$3_bgAlpha$$1$$, $arAlphas$$3_bgAlpha$$1$$, $arAlphas$$3_bgAlpha$$1$$], $arStops$$3_bgRgb_ggRatio$$2$$ = [0, 45 / 255, 190 / 255, 1], $gg$$2_gx_ww$$70$$ = $JSCompiler_StaticMethods__getBackgroundGradient$self$$.$_width$, $bbRatio$$2_gw$$ = 1.7 * 1.7 * $gg$$2_gx_ww$$70$$, $gh_rr$$2$$ = 1.7 * $JSCompiler_StaticMethods__getBackgroundGradient$self$$.$_height$, $gg$$2_gx_ww$$70$$ = 0 + ($gg$$2_gx_ww$$70$$ - $bbRatio$$2_gw$$) / 2, 
  $bb$$4_cx$$9$$ = $gg$$2_gx_ww$$70$$ + $bbRatio$$2_gw$$ / 2, $cy$$9$$ = -35 + $gh_rr$$2$$ / 2, $r$$23$$ = 1.5 * window.Math.min($bbRatio$$2_gw$$ / 2, $gh_rr$$2$$ / 2);
  return new D.$DvtRadialGradientFill$$($arColors$$3_newColor$$1_rrRatio$$2$$, $arAlphas$$3_bgAlpha$$1$$, $arStops$$3_bgRgb_ggRatio$$2$$, $bb$$4_cx$$9$$, $cy$$9$$, $r$$23$$, [$gg$$2_gx_ww$$70$$, -35, $bbRatio$$2_gw$$, $gh_rr$$2$$])
};
D.$DvtPanZoomComponent$$.prototype.$_handleControlPanelEvent$ = function $$DvtPanZoomComponent$$$$$_handleControlPanelEvent$$($event$$300$$) {
  var $spEvent$$ = new D.$DvtSetPropertyEvent$$;
  (0,D.$JSCompiler_StaticMethods_addParam$$)($spEvent$$, "controlPanelBehavior", "show" == $event$$300$$.$getSubType$() ? "initExpanded" : "initCollapsed");
  this.$__dispatchEvent$($spEvent$$)
};
D.$DvtPanZoomCanvas$$ = function $$DvtPanZoomCanvas$$$($context$$209$$, $ww$$71$$, $hh$$57$$, $view$$58$$) {
  this.Init($context$$209$$, $ww$$71$$, $hh$$57$$, $view$$58$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomCanvas$$, D.$DvtContainer$$, "DvtPanZoomCanvas");
D.$DvtPanZoomCanvas$$.prototype.Init = function $$DvtPanZoomCanvas$$$$Init$($context$$210$$, $ww$$72$$, $hh$$58$$, $view$$59$$) {
  D.$DvtPanZoomCanvas$$.$superclass$.Init.call(this, $context$$210$$);
  this.$_view$ = $view$$59$$;
  this.$_ww$ = $ww$$72$$;
  this.$_hh$ = $hh$$58$$;
  this.$_my$ = this.$_mx$ = this.$_py$ = this.$_px$ = 0;
  this.$_maxPanY$ = this.$_minPanY$ = this.$_maxPanX$ = this.$_minPanX$ = D.$JSCompiler_alias_NULL$$;
  this.$_minZoom$ = 0.1;
  this.$_maxZoom$ = 1;
  this.$_panIncrement$ = 15;
  this.$_zoomIncrement$ = 0.05;
  this.$_bTiltPanningEnabled$ = D.$JSCompiler_alias_FALSE$$;
  this.$_zoomToFitPadding$ = 20;
  this.$_controlPanel$ = D.$JSCompiler_alias_NULL$$;
  this.$_bZoomToFitEnabled$ = this.$_bZoomingEnabled$ = this.$_bPanningEnabled$ = D.$JSCompiler_alias_TRUE$$;
  this.$_backgroundPane$ = new D.$DvtRect$$(this.$_context$, 0, 0, this.$_ww$, this.$_hh$);
  this.$addChild$(this.$_backgroundPane$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_backgroundPane$);
  this.$_contentPane$ = new D.$DvtContainer$$(this.$_context$);
  this.$addChild$(this.$_contentPane$);
  this.$_contentPane$.$setMatrix$(new D.$DvtMatrix$$);
  this.$_animationDuration$ = 0.5;
  this.$_eventManager$ = new D.$DvtPanZoomCanvasEventManager$$($context$$210$$, this.$FireListener$, this);
  this.$_eventManager$.$addListeners$(this);
  this.$_clipIdSuffix$ = 1;
  (0,D.$JSCompiler_StaticMethods_SetClipRect$$)(this, $ww$$72$$, $hh$$58$$);
  this.$_bElasticConstraints$ = D.$JSCompiler_alias_FALSE$$;
  this.$_elasticConstraintsAnim$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtPanZoomCanvas$$.prototype.$setSize$ = function $$DvtPanZoomCanvas$$$$$setSize$$($ww$$73$$, $hh$$59$$, $bAdjustSizeOnly$$) {
  this.$_ww$ = $ww$$73$$;
  this.$_hh$ = $hh$$59$$;
  $bAdjustSizeOnly$$ || (this.$_backgroundPane$.$setWidth$($ww$$73$$), this.$_backgroundPane$.$setHeight$($hh$$59$$), this.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_PositionControlPanel$$)(this), (0,D.$JSCompiler_StaticMethods_SetClipRect$$)(this, $ww$$73$$, $hh$$59$$))
};
D.$DvtPanZoomCanvas$$.prototype.$getSize$ = function $$DvtPanZoomCanvas$$$$$getSize$$() {
  return new D.$DvtDimension$$(this.$_ww$, this.$_hh$)
};
D.$JSCompiler_StaticMethods_SetClipRect$$ = function $$JSCompiler_StaticMethods_SetClipRect$$$($JSCompiler_StaticMethods_SetClipRect$self$$, $ww$$74$$, $hh$$60$$) {
  var $clipPath$$5$$ = new D.$DvtClipPath$$("pzc");
  (0,D.$JSCompiler_StaticMethods_addRect$$)($clipPath$$5$$, $JSCompiler_StaticMethods_SetClipRect$self$$.$getTranslateX$(), $JSCompiler_StaticMethods_SetClipRect$self$$.$getTranslateY$(), $ww$$74$$, $hh$$60$$);
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)($JSCompiler_StaticMethods_SetClipRect$self$$, $clipPath$$5$$)
};
D.$JSCompiler_StaticMethods_getContentPane$$ = function $$JSCompiler_StaticMethods_getContentPane$$$($JSCompiler_StaticMethods_getContentPane$self$$) {
  return $JSCompiler_StaticMethods_getContentPane$self$$.$_contentPane$
};
D.$JSCompiler_StaticMethods_getContentPaneMatrix$$ = function $$JSCompiler_StaticMethods_getContentPaneMatrix$$$($JSCompiler_StaticMethods_getContentPaneMatrix$self$$, $animator$$105$$) {
  if($animator$$105$$) {
    var $mat$$17$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$105$$, $JSCompiler_StaticMethods_getContentPaneMatrix$self$$.$_contentPane$, $JSCompiler_StaticMethods_getContentPaneMatrix$self$$.$_contentPane$.$getMatrix$);
    if($mat$$17$$) {
      return $mat$$17$$
    }
  }
  return $JSCompiler_StaticMethods_getContentPaneMatrix$self$$.$_contentPane$.$getMatrix$()
};
D.$DvtPanZoomCanvas$$.prototype.$getZoom$ = function $$DvtPanZoomCanvas$$$$$getZoom$$($animator$$106$$) {
  return(0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this, $animator$$106$$).$_a$
};
(0,D.$goog$exportSymbol$$)("DvtPanZoomCanvas.prototype.getZoom", D.$DvtPanZoomCanvas$$.prototype.$getZoom$);
D.$DvtPanZoomCanvas$$.prototype.$panBy$ = function $$DvtPanZoomCanvas$$$$$panBy$$($dx$$8_mat$$18$$, $deltaX$$11_dy$$8_fireStartEventFunc$$, $animator$$109$$) {
  if(this.$_bPanningEnabled$) {
    var $oldX$$1$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this, $animator$$109$$).$_tx$, $oldY$$1$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this, $animator$$109$$).$_ty$, $newX$$3$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanX$$)(this, $oldX$$1$$ + $dx$$8_mat$$18$$), $newY$$4$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanY$$)(this, $oldY$$1$$ + $deltaX$$11_dy$$8_fireStartEventFunc$$);
    $deltaX$$11_dy$$8_fireStartEventFunc$$ = $newX$$3$$ - $oldX$$1$$;
    var $deltaY$$12_fireEndEventFunc$$ = $newY$$4$$ - $oldY$$1$$;
    $dx$$8_mat$$18$$ = D.$JSCompiler_alias_NULL$$;
    $animator$$109$$ && ($dx$$8_mat$$18$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$109$$, this.$_contentPane$, this.$_contentPane$.$getMatrix$)) && ($dx$$8_mat$$18$$ = $dx$$8_mat$$18$$.clone());
    $dx$$8_mat$$18$$ || ($dx$$8_mat$$18$$ = this.$_contentPane$.$getMatrix$().clone());
    $dx$$8_mat$$18$$.translate($deltaX$$11_dy$$8_fireStartEventFunc$$, $deltaY$$12_fireEndEventFunc$$);
    var $thisRef$$25$$ = this;
    $deltaX$$11_dy$$8_fireStartEventFunc$$ = function $$deltaX$$11_dy$$8_fireStartEventFunc$$$() {
      var $dx$$8_mat$$18$$ = new D.$DvtPanEvent$$("panning", $newX$$3$$, $newY$$4$$, $oldX$$1$$, $oldY$$1$$, $animator$$109$$);
      $thisRef$$25$$.$FireListener$($dx$$8_mat$$18$$)
    };
    $deltaY$$12_fireEndEventFunc$$ = function $$deltaY$$12_fireEndEventFunc$$$() {
      var $dx$$8_mat$$18$$ = new D.$DvtPanEvent$$("panned", $newX$$3$$, $newY$$4$$, $oldX$$1$$, $oldY$$1$$, $animator$$109$$);
      $thisRef$$25$$.$FireListener$($dx$$8_mat$$18$$)
    };
    $animator$$109$$ ? ((0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$109$$, "typeMatrix", this.$_contentPane$, this.$_contentPane$.$getMatrix$, this.$_contentPane$.$setMatrix$, $dx$$8_mat$$18$$), (0,D.$DvtPlayable$prependOnInit$$)($animator$$109$$, $deltaX$$11_dy$$8_fireStartEventFunc$$), (0,D.$DvtPlayable$appendOnEnd$$)($animator$$109$$, $deltaY$$12_fireEndEventFunc$$)) : ($deltaX$$11_dy$$8_fireStartEventFunc$$(), this.$_contentPane$.$setMatrix$($dx$$8_mat$$18$$), $deltaY$$12_fireEndEventFunc$$())
  }
};
D.$JSCompiler_StaticMethods_panTo$$ = function $$JSCompiler_StaticMethods_panTo$$$($JSCompiler_StaticMethods_panTo$self$$, $dx$$9_xx$$18$$, $dy$$9_yy$$19$$, $animator$$110$$) {
  $JSCompiler_StaticMethods_panTo$self$$.$_bPanningEnabled$ && ($dx$$9_xx$$18$$ -= (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)($JSCompiler_StaticMethods_panTo$self$$, $animator$$110$$).$_tx$, $dy$$9_yy$$19$$ -= (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)($JSCompiler_StaticMethods_panTo$self$$, $animator$$110$$).$_ty$, $JSCompiler_StaticMethods_panTo$self$$.$panBy$($dx$$9_xx$$18$$, $dy$$9_yy$$19$$, $animator$$110$$))
};
D.$DvtPanZoomCanvas$$.prototype.$zoomBy$ = function $$DvtPanZoomCanvas$$$$$zoomBy$$($currZoom$$inline_4950_dz$$3_mat$$19$$, $xx$$19$$, $yy$$20$$, $animator$$111$$) {
  if(this.$_bZoomingEnabled$) {
    !$xx$$19$$ && 0 !== $xx$$19$$ && ($xx$$19$$ = this.$_ww$ / 2);
    !$yy$$20$$ && 0 !== $yy$$20$$ && ($yy$$20$$ = this.$_hh$ / 2);
    var $oldZoom$$3$$ = this.$getZoom$($animator$$111$$), $newZoom$$2$$ = (0,D.$JSCompiler_StaticMethods_ConstrainZoom$$)(this, $oldZoom$$3$$ * $currZoom$$inline_4950_dz$$3_mat$$19$$);
    this.$_controlPanel$ && ($currZoom$$inline_4950_dz$$3_mat$$19$$ = this.$getZoom$(), $newZoom$$2$$ == this.$_minZoom$ && $newZoom$$2$$ == this.$_maxZoom$ ? ((0,D.$JSCompiler_StaticMethods_enableZoomInControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_enableZoomOutControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$)) : $currZoom$$inline_4950_dz$$3_mat$$19$$ <= $newZoom$$2$$ && $newZoom$$2$$ == this.$_maxZoom$ ? ((0,D.$JSCompiler_StaticMethods_enableZoomInControl$$)(this.$_controlPanel$, 
    D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_enableZoomOutControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_TRUE$$)) : $currZoom$$inline_4950_dz$$3_mat$$19$$ >= $newZoom$$2$$ && $newZoom$$2$$ == this.$_minZoom$ ? ((0,D.$JSCompiler_StaticMethods_enableZoomInControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_TRUE$$), (0,D.$JSCompiler_StaticMethods_enableZoomOutControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$)) : ((0,D.$JSCompiler_StaticMethods_enableZoomInControl$$)(this.$_controlPanel$, 
    D.$JSCompiler_alias_TRUE$$), (0,D.$JSCompiler_StaticMethods_enableZoomOutControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_TRUE$$)));
    if(window.Math.round(1E5 * $oldZoom$$3$$) != window.Math.round(1E5 * $newZoom$$2$$)) {
      var $deltaZoom_fireStartEventFunc$$1$$ = $newZoom$$2$$ / $oldZoom$$3$$;
      $currZoom$$inline_4950_dz$$3_mat$$19$$ = D.$JSCompiler_alias_NULL$$;
      $animator$$111$$ && ($currZoom$$inline_4950_dz$$3_mat$$19$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$111$$, this.$_contentPane$, this.$_contentPane$.$getMatrix$)) && ($currZoom$$inline_4950_dz$$3_mat$$19$$ = $currZoom$$inline_4950_dz$$3_mat$$19$$.clone());
      $currZoom$$inline_4950_dz$$3_mat$$19$$ || ($currZoom$$inline_4950_dz$$3_mat$$19$$ = this.$_contentPane$.$getMatrix$().clone());
      $currZoom$$inline_4950_dz$$3_mat$$19$$.scale($deltaZoom_fireStartEventFunc$$1$$, $deltaZoom_fireStartEventFunc$$1$$, $xx$$19$$, $yy$$20$$);
      var $xDiff$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanX$$)(this, $currZoom$$inline_4950_dz$$3_mat$$19$$.$_tx$) - $currZoom$$inline_4950_dz$$3_mat$$19$$.$_tx$, $yDiff$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanY$$)(this, $currZoom$$inline_4950_dz$$3_mat$$19$$.$_ty$) - $currZoom$$inline_4950_dz$$3_mat$$19$$.$_ty$;
      (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)(this, "adjustPanConstraints", $newZoom$$2$$, $oldZoom$$3$$, $animator$$111$$, D.$JSCompiler_alias_NULL$$, $xx$$19$$, $yy$$20$$, $xDiff$$, $yDiff$$);
      $xDiff$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanX$$)(this, $currZoom$$inline_4950_dz$$3_mat$$19$$.$_tx$) - $currZoom$$inline_4950_dz$$3_mat$$19$$.$_tx$;
      $yDiff$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanY$$)(this, $currZoom$$inline_4950_dz$$3_mat$$19$$.$_ty$) - $currZoom$$inline_4950_dz$$3_mat$$19$$.$_ty$;
      $currZoom$$inline_4950_dz$$3_mat$$19$$.translate($xDiff$$, $yDiff$$);
      var $thisRef$$26$$ = this, $deltaZoom_fireStartEventFunc$$1$$ = function $$deltaZoom_fireStartEventFunc$$1$$$() {
        (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($thisRef$$26$$, "zooming", $newZoom$$2$$, $oldZoom$$3$$, $animator$$111$$, D.$JSCompiler_alias_NULL$$, $xx$$19$$, $yy$$20$$, $xDiff$$, $yDiff$$)
      }, $fireEndEventFunc$$1$$ = function $$fireEndEventFunc$$1$$$() {
        (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($thisRef$$26$$, "zoomed", $thisRef$$26$$.$getZoom$(), $oldZoom$$3$$, $animator$$111$$, D.$JSCompiler_alias_NULL$$, $xx$$19$$, $yy$$20$$, $xDiff$$, $yDiff$$)
      };
      $animator$$111$$ ? ((0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$111$$, "typeMatrix", this.$_contentPane$, this.$_contentPane$.$getMatrix$, this.$_contentPane$.$setMatrix$, $currZoom$$inline_4950_dz$$3_mat$$19$$), (0,D.$DvtPlayable$prependOnInit$$)($animator$$111$$, $deltaZoom_fireStartEventFunc$$1$$), (0,D.$DvtPlayable$appendOnEnd$$)($animator$$111$$, $fireEndEventFunc$$1$$)) : ($deltaZoom_fireStartEventFunc$$1$$(), this.$_contentPane$.$setMatrix$($currZoom$$inline_4950_dz$$3_mat$$19$$), 
      $fireEndEventFunc$$1$$())
    }
  }
};
D.$JSCompiler_StaticMethods_zoomTo$$ = function $$JSCompiler_StaticMethods_zoomTo$$$($JSCompiler_StaticMethods_zoomTo$self$$, $dz$$4_zz$$, $xx$$20$$, $yy$$21$$, $animator$$112$$) {
  $JSCompiler_StaticMethods_zoomTo$self$$.$_bZoomingEnabled$ && ($dz$$4_zz$$ /= $JSCompiler_StaticMethods_zoomTo$self$$.$getZoom$($animator$$112$$), $JSCompiler_StaticMethods_zoomTo$self$$.$zoomBy$($dz$$4_zz$$, $xx$$20$$, $yy$$21$$, $animator$$112$$))
};
D.$DvtPanZoomCanvas$$.prototype.$center$ = function $$DvtPanZoomCanvas$$$$$center$$($animator$$113$$, $fitBounds$$6$$) {
  var $panningEnabled$$4$$ = this.$_bPanningEnabled$;
  this.$_bPanningEnabled$ = D.$JSCompiler_alias_TRUE$$;
  var $bounds$$47_cyBounds$$ = $fitBounds$$6$$;
  $bounds$$47_cyBounds$$ || ($bounds$$47_cyBounds$$ = this.$_contentPane$.$getDimensions$());
  var $cxBounds$$ = ($bounds$$47_cyBounds$$.x + $bounds$$47_cyBounds$$.$w$ / 2) * this.$getZoom$(), $bounds$$47_cyBounds$$ = ($bounds$$47_cyBounds$$.y + $bounds$$47_cyBounds$$.$h$ / 2) * this.$getZoom$();
  (0,D.$JSCompiler_StaticMethods_panTo$$)(this, this.$_ww$ / 2 - $cxBounds$$, this.$_hh$ / 2 - $bounds$$47_cyBounds$$, $animator$$113$$);
  this.$_bPanningEnabled$ = $panningEnabled$$4$$
};
D.$DvtPanZoomCanvas$$.prototype.$zoomToFit$ = function $$DvtPanZoomCanvas$$$$$zoomToFit$$($animator$$114$$, $fitBounds$$7$$) {
  if(this.$_bZoomToFitEnabled$) {
    var $panningEnabled$$5$$ = this.$_bPanningEnabled$, $zoomingEnabled$$3$$ = this.$_bZoomingEnabled$;
    this.$_bZoomingEnabled$ = this.$_bPanningEnabled$ = D.$JSCompiler_alias_TRUE$$;
    try {
      var $bounds$$48$$ = $fitBounds$$7$$ ? $fitBounds$$7$$ : this.$_contentPane$.$getDimensions$();
      if($bounds$$48$$ = (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)(this, "zoomToFitCalcBounds", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $animator$$114$$, $bounds$$48$$).$_zoomToFitBounds$) {
        var $dz$$5$$ = window.Math.min((this.$_ww$ - 2 * this.$_zoomToFitPadding$) / $bounds$$48$$.$w$, (this.$_hh$ - 2 * this.$_zoomToFitPadding$) / $bounds$$48$$.$h$), $dz$$5$$ = (0,D.$JSCompiler_StaticMethods_ConstrainZoom$$)(this, $dz$$5$$), $dx$$11$$ = this.$_ww$ / 2 - ($bounds$$48$$.x + $bounds$$48$$.$w$ / 2) * $dz$$5$$, $dy$$11$$ = this.$_hh$ / 2 - ($bounds$$48$$.y + $bounds$$48$$.$h$ / 2) * $dz$$5$$, $thisRef$$27$$ = this, $fireStartEventFunc$$2$$ = function $$fireStartEventFunc$$2$$$() {
          (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($thisRef$$27$$, "zoomToFitBegin", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $animator$$114$$, $bounds$$48$$)
        }, $fireEndEventFunc$$2$$ = function $$fireEndEventFunc$$2$$$() {
          (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($thisRef$$27$$, "zoomToFitEnd", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $animator$$114$$, $bounds$$48$$)
        };
        $animator$$114$$ ? (0,D.$DvtPlayable$prependOnInit$$)($animator$$114$$, $fireStartEventFunc$$2$$) : $fireStartEventFunc$$2$$();
        (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this, $dz$$5$$, 0, 0, $animator$$114$$);
        (0,D.$JSCompiler_StaticMethods_panTo$$)(this, $dx$$11$$, $dy$$11$$, $animator$$114$$);
        $animator$$114$$ ? (0,D.$DvtPlayable$appendOnEnd$$)($animator$$114$$, $fireEndEventFunc$$2$$) : $fireEndEventFunc$$2$$()
      }
    }finally {
      this.$_bPanningEnabled$ = $panningEnabled$$5$$, this.$_bZoomingEnabled$ = $zoomingEnabled$$3$$
    }
  }
};
D.$DvtPanZoomCanvas$$.prototype.$getViewport$ = function $$DvtPanZoomCanvas$$$$$getViewport$$() {
  var $topLeftGlobal_topLeftLocal$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)(this, new D.$DvtPoint$$(0, 0)), $bottomRightGlobal_bottomRightLocal$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)(this, new D.$DvtPoint$$(this.$_ww$, this.$_hh$)), $topLeftGlobal_topLeftLocal$$ = this.$_contentPane$.$stageToLocal$($topLeftGlobal_topLeftLocal$$), $bottomRightGlobal_bottomRightLocal$$ = this.$_contentPane$.$stageToLocal$($bottomRightGlobal_bottomRightLocal$$);
  return new D.$DvtRectangle$$($topLeftGlobal_topLeftLocal$$.x, $topLeftGlobal_topLeftLocal$$.y, $bottomRightGlobal_bottomRightLocal$$.x - $topLeftGlobal_topLeftLocal$$.x, $bottomRightGlobal_bottomRightLocal$$.y - $topLeftGlobal_topLeftLocal$$.y)
};
D.$JSCompiler_StaticMethods_SetElasticConstraints$$ = function $$JSCompiler_StaticMethods_SetElasticConstraints$$$($JSCompiler_StaticMethods_SetElasticConstraints$self$$, $bElastic$$3$$) {
  if($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticConstraints$ = $bElastic$$3$$) {
    $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$ && ($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$.$isRunning$() && $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$.stop(), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$ = D.$JSCompiler_alias_NULL$$)
  }else {
    var $currX$$5_panEvent$$inline_4977$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, D.$JSCompiler_alias_VOID$$).$_tx$, $currY$$6$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, D.$JSCompiler_alias_VOID$$).$_ty$, $currZoom$$3$$ = $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$getZoom$();
    $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticPan$ = $currX$$5_panEvent$$inline_4977$$ != (0,D.$JSCompiler_StaticMethods_ConstrainPanX$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, $currX$$5_panEvent$$inline_4977$$) || $currY$$6$$ != (0,D.$JSCompiler_StaticMethods_ConstrainPanY$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, $currY$$6$$);
    $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticZoom$ = $currZoom$$3$$ != (0,D.$JSCompiler_StaticMethods_ConstrainZoom$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, $currZoom$$3$$);
    if($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticPan$ || $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticZoom$) {
      $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_context$, 0.4), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$.$setEasing$(D.$DvtEasing$cubicOut$$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticZoom$ && $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$zoomBy$(1, 0.5 * $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_ww$, 
      0.5 * $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_hh$, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticPan$ && $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$panBy$(0, 0, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$), (0,D.$DvtPlayable$appendOnEnd$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnimOnEnd$, 
      $JSCompiler_StaticMethods_SetElasticConstraints$self$$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticPan$ && ($currX$$5_panEvent$$inline_4977$$ = new D.$DvtPanEvent$$("elasticAnimBegin", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$FireListener$($currX$$5_panEvent$$inline_4977$$)), 
      $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticZoom$ && (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, "elasticAnimBegin", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$.play()
    }
  }
};
D.$DvtPanZoomCanvas$$.prototype.$_elasticConstraintsAnimOnEnd$ = function $$DvtPanZoomCanvas$$$$$_elasticConstraintsAnimOnEnd$$() {
  this.$_elasticConstraintsAnim$ = D.$JSCompiler_alias_NULL$$;
  if(this.$_bElasticPan$) {
    var $panEvent$$inline_4986$$ = new D.$DvtPanEvent$$("elasticAnimEnd", D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$);
    this.$FireListener$($panEvent$$inline_4986$$)
  }
  this.$_bElasticZoom$ && (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)(this, "elasticAnimEnd")
};
D.$JSCompiler_StaticMethods_ConstrainPanX$$ = function $$JSCompiler_StaticMethods_ConstrainPanX$$$($JSCompiler_StaticMethods_ConstrainPanX$self$$, $xx$$21$$) {
  var $dx$$12_offsetX$$6$$ = $xx$$21$$;
  $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$ != D.$JSCompiler_alias_NULL$$ && $dx$$12_offsetX$$6$$ < $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$ && ($JSCompiler_StaticMethods_ConstrainPanX$self$$.$_bElasticConstraints$ ? ($dx$$12_offsetX$$6$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$ - $dx$$12_offsetX$$6$$, $dx$$12_offsetX$$6$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$ - window.Math.sqrt(4 * (0.01 * $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_ww$) * 
  $dx$$12_offsetX$$6$$)) : $dx$$12_offsetX$$6$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$);
  $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$ != D.$JSCompiler_alias_NULL$$ && $dx$$12_offsetX$$6$$ > $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$ && ($JSCompiler_StaticMethods_ConstrainPanX$self$$.$_bElasticConstraints$ ? ($dx$$12_offsetX$$6$$ -= $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$, $dx$$12_offsetX$$6$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$ + window.Math.sqrt(4 * (0.01 * $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_ww$) * 
  $dx$$12_offsetX$$6$$)) : $dx$$12_offsetX$$6$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$);
  return $dx$$12_offsetX$$6$$
};
D.$JSCompiler_StaticMethods_ConstrainPanY$$ = function $$JSCompiler_StaticMethods_ConstrainPanY$$$($JSCompiler_StaticMethods_ConstrainPanY$self$$, $yy$$22$$) {
  var $dy$$12_offsetY$$5$$ = $yy$$22$$;
  $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_minPanY$ != D.$JSCompiler_alias_NULL$$ && $dy$$12_offsetY$$5$$ < $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_minPanY$ && ($JSCompiler_StaticMethods_ConstrainPanY$self$$.$_bElasticConstraints$ ? ($dy$$12_offsetY$$5$$ = $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_minPanY$ - $dy$$12_offsetY$$5$$, $dy$$12_offsetY$$5$$ = $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_minPanY$ - window.Math.sqrt(4 * (0.01 * $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_hh$) * 
  $dy$$12_offsetY$$5$$)) : $dy$$12_offsetY$$5$$ = $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_minPanY$);
  $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_maxPanY$ != D.$JSCompiler_alias_NULL$$ && $dy$$12_offsetY$$5$$ > $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_maxPanY$ && ($JSCompiler_StaticMethods_ConstrainPanY$self$$.$_bElasticConstraints$ ? ($dy$$12_offsetY$$5$$ -= $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_maxPanY$, $dy$$12_offsetY$$5$$ = $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_maxPanY$ + window.Math.sqrt(4 * (0.01 * $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_hh$) * 
  $dy$$12_offsetY$$5$$)) : $dy$$12_offsetY$$5$$ = $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_maxPanY$);
  return $dy$$12_offsetY$$5$$
};
D.$JSCompiler_StaticMethods_ConstrainZoom$$ = function $$JSCompiler_StaticMethods_ConstrainZoom$$$($JSCompiler_StaticMethods_ConstrainZoom$self$$, $zz$$1$$) {
  var $dz$$7_newZ$$ = window.Math.max(0, $zz$$1$$);
  $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$ && $dz$$7_newZ$$ < $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$ && ($JSCompiler_StaticMethods_ConstrainZoom$self$$.$_bElasticConstraints$ ? ($dz$$7_newZ$$ = $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$ - $dz$$7_newZ$$, $dz$$7_newZ$$ = $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$ - window.Math.sqrt(4 * (0.002 * ($JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$ - $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$)) * 
  $dz$$7_newZ$$)) : $dz$$7_newZ$$ = $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$);
  $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$ && $dz$$7_newZ$$ > $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$ && ($JSCompiler_StaticMethods_ConstrainZoom$self$$.$_bElasticConstraints$ ? ($dz$$7_newZ$$ -= $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$, $dz$$7_newZ$$ = $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$ + window.Math.sqrt(4 * (0.002 * ($JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$ - $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$)) * 
  $dz$$7_newZ$$)) : $dz$$7_newZ$$ = $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$);
  return $dz$$7_newZ$$
};
D.$DvtPanZoomCanvas$$.prototype.$renderComponent$ = function $$DvtPanZoomCanvas$$$$$renderComponent$$() {
  var $controlPanel$$3$$ = this.$_controlPanel$;
  $controlPanel$$3$$ && (this.$addChild$($controlPanel$$3$$), (0,D.$JSCompiler_StaticMethods_PositionControlPanel$$)(this), $controlPanel$$3$$.$renderComponent$())
};
D.$JSCompiler_StaticMethods_PositionControlPanel$$ = function $$JSCompiler_StaticMethods_PositionControlPanel$$$($JSCompiler_StaticMethods_PositionControlPanel$self$$) {
  var $openCloseButtonWidth_styleMap$$38$$ = $JSCompiler_StaticMethods_PositionControlPanel$self$$.$_view$.$getSubcomponentStyles$(), $posX$$2_transX$$5$$ = (0,D.$DvtStyleUtils$getStyle$$)($openCloseButtonWidth_styleMap$$38$$, "paddingSide", 0), $posY$$1$$ = (0,D.$DvtStyleUtils$getStyle$$)($openCloseButtonWidth_styleMap$$38$$, "paddingTop", 0), $openCloseButtonWidth_styleMap$$38$$ = (0,D.$DvtStyleUtils$getStyle$$)($openCloseButtonWidth_styleMap$$38$$, "openCloseButtonWidth", 0), $posX$$2_transX$$5$$ = 
  (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_PositionControlPanel$self$$.$_context$) ? $JSCompiler_StaticMethods_PositionControlPanel$self$$.$_ww$ - $openCloseButtonWidth_styleMap$$38$$ - $posX$$2_transX$$5$$ : $posX$$2_transX$$5$$;
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_PositionControlPanel$self$$.$_controlPanel$, $posX$$2_transX$$5$$, $posY$$1$$)
};
D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$ = function $$JSCompiler_StaticMethods_GetRelativeMousePosition$$$($JSCompiler_StaticMethods_GetRelativeMousePosition$self$$, $event$$312$$) {
  return(0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_GetRelativeMousePosition$self$$.$_context$, $event$$312$$.pageX, $event$$312$$.pageY)
};
D.$JSCompiler_StaticMethods_FireZoomEvent$$ = function $$JSCompiler_StaticMethods_FireZoomEvent$$$($JSCompiler_StaticMethods_FireZoomEvent$self$$, $subType$$4_zoomEvent$$, $newZoom$$3$$, $oldZoom$$4$$, $animator$$116$$, $zoomToFitBounds$$, $xx$$22$$, $yy$$23$$, $tx$$16$$, $ty$$16$$) {
  $subType$$4_zoomEvent$$ = new D.$DvtZoomEvent$$($subType$$4_zoomEvent$$, $newZoom$$3$$, $oldZoom$$4$$, $animator$$116$$, $zoomToFitBounds$$, new D.$DvtPoint$$($xx$$22$$, $yy$$23$$), $tx$$16$$, $ty$$16$$);
  $JSCompiler_StaticMethods_FireZoomEvent$self$$.$FireListener$($subType$$4_zoomEvent$$);
  return $subType$$4_zoomEvent$$
};
D.$DvtPanZoomCanvas$$.prototype.$zoomAndCenter$ = function $$DvtPanZoomCanvas$$$$$zoomAndCenter$$() {
  (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)(this, "zoomAndCenter")
};
D.$JSCompiler_StaticMethods_getNextZoomLevel$$ = function $$JSCompiler_StaticMethods_getNextZoomLevel$$$($JSCompiler_StaticMethods_getNextZoomLevel$self$$, $currZoom$$4$$) {
  var $zoomLevel$$3$$;
  $zoomLevel$$3$$ = $currZoom$$4$$ + $JSCompiler_StaticMethods_getNextZoomLevel$self$$.$_zoomIncrement$;
  $zoomLevel$$3$$ > $JSCompiler_StaticMethods_getNextZoomLevel$self$$.$_maxZoom$ && ($zoomLevel$$3$$ = $JSCompiler_StaticMethods_getNextZoomLevel$self$$.$_maxZoom$);
  return $zoomLevel$$3$$
};
D.$JSCompiler_StaticMethods_getPrevZoomLevel$$ = function $$JSCompiler_StaticMethods_getPrevZoomLevel$$$($JSCompiler_StaticMethods_getPrevZoomLevel$self$$, $currZoom$$5$$) {
  var $zoomLevel$$4$$;
  $zoomLevel$$4$$ = $currZoom$$5$$ - $JSCompiler_StaticMethods_getPrevZoomLevel$self$$.$_zoomIncrement$;
  $zoomLevel$$4$$ < $JSCompiler_StaticMethods_getPrevZoomLevel$self$$.$_minZoom$ && ($zoomLevel$$4$$ = $JSCompiler_StaticMethods_getPrevZoomLevel$self$$.$_minZoom$);
  return $zoomLevel$$4$$
};
D.$DvtPanZoomCanvas$$.prototype.$setMinZoom$ = (0,D.$JSCompiler_set$$)("$_minZoom$");
D.$DvtPanZoomCanvas$$.prototype.$setMaxZoom$ = function $$DvtPanZoomCanvas$$$$$setMaxZoom$$($n$$23$$) {
  0 > $n$$23$$ && ($n$$23$$ = 1);
  this.$_maxZoom$ = $n$$23$$
};
D.$DvtPanZoomCanvas$$.prototype.$setAnimationDuration$ = (0,D.$JSCompiler_set$$)("$_animationDuration$");
D.$DvtPanZoomCanvas$$.prototype.$getAnimationDuration$ = (0,D.$JSCompiler_get$$)("$_animationDuration$");
D.$DvtPanZoomCanvasEventManager$$ = function $$DvtPanZoomCanvasEventManager$$$($context$$211$$, $callback$$77$$, $callbackObj$$40$$) {
  this.Init($context$$211$$, $callback$$77$$, $callbackObj$$40$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomCanvasEventManager$$, D.$DvtEventManager$$, "DvtPanZoomCanvasEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanZoomCanvasEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$212$$, $callback$$78$$, $callbackObj$$41$$) {
  D.$DvtPanZoomCanvasEventManager$$.$superclass$.Init.call(this, $context$$212$$, $callback$$78$$, $callbackObj$$41$$);
  this.$_pzc$ = $callbackObj$$41$$;
  this.$_zoomAnimator$ = D.$JSCompiler_alias_NULL$$;
  this.$_bZooming$ = this.$_bPanning$ = D.$JSCompiler_alias_FALSE$$;
  this.$_bMomentumPanning$ = D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$addListeners$ = function $$JSCompiler_prototypeAlias$$$$addListeners$$($displayable$$25$$) {
  D.$DvtPanZoomCanvasEventManager$$.$superclass$.$addListeners$.call(this, $displayable$$25$$);
  (0,D.$DvtAgent$isPlatformGecko$$)() ? $displayable$$25$$.$addEvtListener$("DOMMouseScroll", this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this) : $displayable$$25$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEWHEEL$$, this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($event$$314_pos$$35$$) {
  2 != $event$$314_pos$$35$$.button && ($event$$314_pos$$35$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_callbackObj$, $event$$314_pos$$35$$), this.$_mx$ = $event$$314_pos$$35$$.x, this.$_my$ = $event$$314_pos$$35$$.y, this.$_px$ = this.$_mx$, this.$_py$ = this.$_my$, this.$_bDown$ = D.$JSCompiler_alias_TRUE$$, this.$_origPanX$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_tx$, this.$_origPanY$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, 
  D.$JSCompiler_alias_VOID$$).$_ty$, this.$_origZoom$ = this.$_callbackObj$.$getZoom$(), this.$_bMomentumPanning$ && (this.$_currTime$ = (new window.Date).getTime()));
  this.$_momentumTimer$ && this.$_momentumTimer$.$isRunning$() && (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset())
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$315_zz$$2$$) {
  if(this.$_bDown$) {
    var $pos$$36_yy$$24$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_callbackObj$, $event$$315_zz$$2$$), $xx$$23$$ = $pos$$36_yy$$24$$.x, $pos$$36_yy$$24$$ = $pos$$36_yy$$24$$.y;
    $event$$315_zz$$2$$.ctrlKey ? (this.$_bZooming$ || (this.$_callback$.call(this.$_callbackObj$, new D.$DvtZoomEvent$$("dragZoomBegin")), this.$_bZooming$ = D.$JSCompiler_alias_TRUE$$, this.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningStarted$$)(this.$_pzc$.$_controlPanel$), (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)(this.$_callbackObj$, D.$JSCompiler_alias_TRUE$$)), $event$$315_zz$$2$$ = this.$_origZoom$ * window.Math.pow(1 + 0.01 * (this.$_py$ >= $pos$$36_yy$$24$$ ? 
    1 : -1), window.Math.abs(this.$_py$ - $pos$$36_yy$$24$$)), this.$_callbackObj$.$_bPanningEnabled$ ? (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_callbackObj$, $event$$315_zz$$2$$, this.$_px$, this.$_py$) : (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_callbackObj$, $event$$315_zz$$2$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$)) : (0,D.$JSCompiler_StaticMethods__handlePanMove$$)(this, $xx$$23$$, $pos$$36_yy$$24$$);
    this.$_mx$ = $xx$$23$$;
    this.$_my$ = $pos$$36_yy$$24$$
  }
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$() {
  this.$_bDown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_bPanning$ && (0,D.$JSCompiler_StaticMethods__handlePanEnd$$)(this);
  this.$_bZooming$ && (0,D.$JSCompiler_StaticMethods__handleZoomEnd$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$317$$) {
  if(this.$_bDown$ && (this.$_bPanning$ || this.$_bZooming$)) {
    (!$event$$317$$.relatedTarget || $event$$317$$.relatedTarget == D.$JSCompiler_alias_NULL$$) && this.$OnMouseUp$($event$$317$$)
  }
  D.$DvtPanZoomCanvasEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$317$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseWheel$ = function $$JSCompiler_prototypeAlias$$$$OnMouseWheel$$($event$$318$$) {
  if($event$$318$$.wheelDelta && 0 !== $event$$318$$.wheelDelta) {
    var $currZoom$$7_oldZoomAnim_zz$$3$$ = this.$_callbackObj$.$getZoom$();
    this.$_zoomAnimator$ && ($currZoom$$7_oldZoomAnim_zz$$3$$ = this.$_zoomAnimator$, this.$_zoomAnimator$.stop(), $currZoom$$7_oldZoomAnim_zz$$3$$ = this.$_callbackObj$.$getZoom$($currZoom$$7_oldZoomAnim_zz$$3$$), this.$_zoomAnimator$ = D.$JSCompiler_alias_NULL$$);
    this.$_zoomAnimator$ = D.$JSCompiler_alias_NULL$$;
    var $delta$$4_pos$$37$$ = $event$$318$$.wheelDelta;
    (0,D.$DvtAgent$isPlatformGecko$$)() && ($delta$$4_pos$$37$$ = -$delta$$4_pos$$37$$);
    $currZoom$$7_oldZoomAnim_zz$$3$$ *= 1 + this.$_callbackObj$.$_zoomIncrement$ * $delta$$4_pos$$37$$ / window.Math.abs($delta$$4_pos$$37$$);
    $delta$$4_pos$$37$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_callbackObj$, $event$$318$$);
    this.$_context$.$getDocumentUtils$().$cancelDomEvent$($event$$318$$);
    this.$_callbackObj$.$_bPanningEnabled$ ? (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_callbackObj$, $currZoom$$7_oldZoomAnim_zz$$3$$, $delta$$4_pos$$37$$.x, $delta$$4_pos$$37$$.y, this.$_zoomAnimator$) : (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_callbackObj$, $currZoom$$7_oldZoomAnim_zz$$3$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, this.$_zoomAnimator$);
    this.$_zoomAnimator$ && ((0,D.$DvtPlayable$appendOnEnd$$)(this.$_zoomAnimator$, this.$_clearZoomAnimator$, this), this.$_zoomAnimator$.play())
  }
};
D.$JSCompiler_prototypeAlias$$.$_clearZoomAnimator$ = function $$JSCompiler_prototypeAlias$$$$_clearZoomAnimator$$() {
  this.$_zoomAnimator$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$_handleMomentumStartTimer$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$_handleMomentumTimer$ = function $$JSCompiler_prototypeAlias$$$$_handleMomentumTimer$$() {
  var $dy$$13_ratio$$4$$ = 1 - 0.04 * this.$_momentumIterCount$, $dy$$13_ratio$$4$$ = $dy$$13_ratio$$4$$ * $dy$$13_ratio$$4$$, $interval_newX$$5$$ = this.$_momentumTimer$.$getInterval$(), $dx$$13$$ = $dy$$13_ratio$$4$$ * this.$_momentumXperMS$ * $interval_newX$$5$$, $dy$$13_ratio$$4$$ = $dy$$13_ratio$$4$$ * this.$_momentumYperMS$ * $interval_newX$$5$$;
  this.$_momentumDx$ += $dx$$13$$;
  this.$_momentumDy$ += $dy$$13_ratio$$4$$;
  var $interval_newX$$5$$ = this.$_origPanX$ + this.$_mx$ - this.$_px$ + this.$_momentumDx$, $newY$$6$$ = this.$_origPanY$ + this.$_my$ - this.$_py$ + this.$_momentumDy$;
  (0,D.$JSCompiler_StaticMethods_panTo$$)(this.$_callbackObj$, $interval_newX$$5$$, $newY$$6$$);
  var $bStop$$ = D.$JSCompiler_alias_FALSE$$;
  if(24 <= this.$_momentumIterCount$) {
    $bStop$$ = D.$JSCompiler_alias_TRUE$$
  }else {
    var $currX$$6$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_tx$, $currY$$7$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_ty$;
    if(window.Math.abs($currX$$6$$ - $interval_newX$$5$$) > window.Math.abs($dx$$13$$) || window.Math.abs($currY$$7$$ - $newY$$6$$) > window.Math.abs($dy$$13_ratio$$4$$)) {
      $bStop$$ = D.$JSCompiler_alias_TRUE$$
    }
  }
  $bStop$$ ? (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset(), (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)(this.$_callbackObj$, D.$JSCompiler_alias_FALSE$$)) : this.$_momentumIterCount$++
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchStartInternal$$($event$$319$$) {
  this.$_callbackObj$.$_bZoomingEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchAttempt$$)($event$$319$$, this.$ZoomStartTouch$, this);
  this.$_callbackObj$.$_bPanningEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchAttempt$$)($event$$319$$, this.$PanStartTouch$, this)
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchMoveInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchMoveInternal$$($event$$320$$) {
  this.$_callbackObj$.$_bZoomingEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchMove$$)(this.$TouchManager$, $event$$320$$, "zoomTouch");
  this.$_callbackObj$.$_bPanningEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchMove$$)(this.$TouchManager$, $event$$320$$, "panTouch");
  $event$$320$$ && $event$$320$$.preventDefault()
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchEndInternal$$($event$$321$$) {
  this.$_callbackObj$.$_bZoomingEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchEnd$$)(this.$TouchManager$, $event$$321$$, "zoomTouch");
  this.$_callbackObj$.$_bPanningEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchEnd$$)(this.$TouchManager$, $event$$321$$, "panTouch")
};
D.$JSCompiler_prototypeAlias$$.$ZoomStartTouch$ = function $$JSCompiler_prototypeAlias$$$$ZoomStartTouch$$($event$$322$$, $touch$$6$$) {
  var $targets$$inline_4989_touchIds$$1$$ = (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "zoomTouch");
  1 >= $targets$$inline_4989_touchIds$$1$$.length && ((0,D.$JSCompiler_StaticMethods_saveProcessedTouch$$)(this.$TouchManager$, $touch$$6$$.identifier, "zoomTouch", "zoomTouch", "zoomTouch", this.$ZoomMoveTouch$, this.$ZoomEndTouch$, this), this.$_mx$ = $touch$$6$$.pageX, this.$_my$ = $touch$$6$$.pageY, this.$_px$ = this.$_mx$, this.$_py$ = this.$_my$, this.$_origPanX$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_tx$, this.$_origPanY$ = 
  (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_ty$, this.$_origZoom$ = this.$_callbackObj$.$getZoom$(), this.$_origDist$ = D.$JSCompiler_alias_NULL$$, $targets$$inline_4989_touchIds$$1$$ = (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "zoomTouch"), $targets$$inline_4989_touchIds$$1$$ = (0,D.$JSCompiler_StaticMethods_getStartTargetsByIds$$)(this.$TouchManager$, $targets$$inline_4989_touchIds$$1$$), this.$_callbackObj$.$_currTargets$ = 
  $targets$$inline_4989_touchIds$$1$$);
  this.$_momentumTimer$ && this.$_momentumTimer$.$isRunning$() && (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset())
};
D.$JSCompiler_prototypeAlias$$.$ZoomMoveTouch$ = function $$JSCompiler_prototypeAlias$$$$ZoomMoveTouch$$() {
  var $targets$$inline_5004_touchIds$$2$$ = (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "zoomTouch");
  if(2 == $targets$$inline_5004_touchIds$$2$$.length) {
    var $data$$58_touch1Data$$inline_4993$$;
    var $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_4991_touch2Data$$inline_4994_zz$$4$$ = this.$TouchManager$;
    if(2 == $targets$$inline_5004_touchIds$$2$$.length) {
      if($data$$58_touch1Data$$inline_4993$$ = $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_4991_touch2Data$$inline_4994_zz$$4$$.$_touchMap$[$targets$$inline_5004_touchIds$$2$$[0]], $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_4991_touch2Data$$inline_4994_zz$$4$$ = $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_4991_touch2Data$$inline_4994_zz$$4$$.$_touchMap$[$targets$$inline_5004_touchIds$$2$$[1]], $data$$58_touch1Data$$inline_4993$$ == D.$JSCompiler_alias_NULL$$ || 
      $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_4991_touch2Data$$inline_4994_zz$$4$$ == D.$JSCompiler_alias_NULL$$ || 0 == $data$$58_touch1Data$$inline_4993$$.$dx$ && 0 == $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_4991_touch2Data$$inline_4994_zz$$4$$.$dy$) {
        $data$$58_touch1Data$$inline_4993$$ = D.$JSCompiler_alias_NULL$$
      }else {
        var $cp$$6_dist$$inline_4997_dx$$inline_4995$$ = $data$$58_touch1Data$$inline_4993$$.pageX - $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_4991_touch2Data$$inline_4994_zz$$4$$.pageX, $dy$$inline_4996_prevdx$$inline_4998$$ = $data$$58_touch1Data$$inline_4993$$.pageY - $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_4991_touch2Data$$inline_4994_zz$$4$$.pageY, $cp$$6_dist$$inline_4997_dx$$inline_4995$$ = window.Math.sqrt($cp$$6_dist$$inline_4997_dx$$inline_4995$$ * $cp$$6_dist$$inline_4997_dx$$inline_4995$$ + 
        $dy$$inline_4996_prevdx$$inline_4998$$ * $dy$$inline_4996_prevdx$$inline_4998$$), $dy$$inline_4996_prevdx$$inline_4998$$ = $data$$58_touch1Data$$inline_4993$$.$prevPageX$ - $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_4991_touch2Data$$inline_4994_zz$$4$$.$prevPageX$, $prevdy$$inline_4999$$ = $data$$58_touch1Data$$inline_4993$$.$prevPageY$ - $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_4991_touch2Data$$inline_4994_zz$$4$$.$prevPageY$, $cx$$inline_5000$$ = ($data$$58_touch1Data$$inline_4993$$.pageX + 
        $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_4991_touch2Data$$inline_4994_zz$$4$$.pageX) / 2, $cy$$inline_5001$$ = ($data$$58_touch1Data$$inline_4993$$.pageY + $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_4991_touch2Data$$inline_4994_zz$$4$$.pageY) / 2;
        $data$$58_touch1Data$$inline_4993$$ = {$dz$:$cp$$6_dist$$inline_4997_dx$$inline_4995$$ - window.Math.sqrt($dy$$inline_4996_prevdx$$inline_4998$$ * $dy$$inline_4996_prevdx$$inline_4998$$ + $prevdy$$inline_4999$$ * $prevdy$$inline_4999$$), $cx$:$cx$$inline_5000$$, $cy$:$cy$$inline_5001$$, $dcx$:$cx$$inline_5000$$ - ($data$$58_touch1Data$$inline_4993$$.$prevPageX$ + $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_4991_touch2Data$$inline_4994_zz$$4$$.$prevPageX$) / 2, $dcy$:$cy$$inline_5001$$ - 
        ($data$$58_touch1Data$$inline_4993$$.$prevPageY$ + $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_4991_touch2Data$$inline_4994_zz$$4$$.$prevPageY$) / 2, $dist$:$cp$$6_dist$$inline_4997_dx$$inline_4995$$}
      }
    }else {
      $data$$58_touch1Data$$inline_4993$$ = D.$JSCompiler_alias_NULL$$
    }
    $data$$58_touch1Data$$inline_4993$$ && (this.$_bZooming$ || (this.$_bZooming$ = D.$JSCompiler_alias_TRUE$$, this.$TouchManager$.$blockTouchHold$(), this.$_callback$.call(this.$_callbackObj$, new D.$DvtZoomEvent$$("dragZoomBegin")), this.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningStarted$$)(this.$_pzc$.$_controlPanel$)), (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)(this.$_callbackObj$, D.$JSCompiler_alias_TRUE$$), this.$_origDist$ == D.$JSCompiler_alias_NULL$$ && 
    (this.$_origDist$ = $data$$58_touch1Data$$inline_4993$$.$dist$ - $data$$58_touch1Data$$inline_4993$$.$dz$), $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_4991_touch2Data$$inline_4994_zz$$4$$ = this.$_origZoom$ * ($data$$58_touch1Data$$inline_4993$$.$dist$ / this.$_origDist$), $cp$$6_dist$$inline_4997_dx$$inline_4995$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_pzc$.$_context$, $data$$58_touch1Data$$inline_4993$$.$cx$, $data$$58_touch1Data$$inline_4993$$.$cy$), this.$hideTooltip$(), 
    $targets$$inline_5004_touchIds$$2$$ = (0,D.$JSCompiler_StaticMethods_getStartTargetsByIds$$)(this.$TouchManager$, $targets$$inline_5004_touchIds$$2$$), this.$_callbackObj$.$_currTargets$ = $targets$$inline_5004_touchIds$$2$$, (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_callbackObj$, $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_4991_touch2Data$$inline_4994_zz$$4$$, $cp$$6_dist$$inline_4997_dx$$inline_4995$$.x, $cp$$6_dist$$inline_4997_dx$$inline_4995$$.y), this.$_callbackObj$.$panBy$($data$$58_touch1Data$$inline_4993$$.$dcx$, 
    $data$$58_touch1Data$$inline_4993$$.$dcy$))
  }
};
D.$JSCompiler_prototypeAlias$$.$ZoomEndTouch$ = function $$JSCompiler_prototypeAlias$$$$ZoomEndTouch$$() {
  this.$_bZooming$ && (this.$_origDist$ = D.$JSCompiler_alias_NULL$$, this.$TouchManager$.$_blockTouchHold$ = D.$JSCompiler_alias_FALSE$$, (0,D.$JSCompiler_StaticMethods__handleZoomEnd$$)(this));
  var $touchIds$$3$$ = (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "zoomTouch"), $targets$$inline_5009$$ = (0,D.$JSCompiler_StaticMethods_getStartTargetsByIds$$)(this.$TouchManager$, $touchIds$$3$$);
  this.$_callbackObj$.$_currTargets$ = $targets$$inline_5009$$;
  0 == $touchIds$$3$$.length && this.$_callback$.call(this.$_callbackObj$, new D.$DvtZoomEvent$$("zoomEnd"))
};
D.$JSCompiler_prototypeAlias$$.$PanStartTouch$ = function $$JSCompiler_prototypeAlias$$$$PanStartTouch$$($event$$325$$, $touch$$9$$) {
  !this.$_bZooming$ && 1 >= (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "panTouch").length && ((0,D.$JSCompiler_StaticMethods_saveProcessedTouch$$)(this.$TouchManager$, $touch$$9$$.identifier, "panTouch", "panTouch", "panTouch", this.$PanMoveTouch$, this.$PanEndTouch$, this), this.$_mx$ = $touch$$9$$.pageX, this.$_my$ = $touch$$9$$.pageY, this.$_px$ = this.$_mx$, this.$_py$ = this.$_my$, this.$_origPanX$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, 
  D.$JSCompiler_alias_VOID$$).$_tx$, this.$_origPanY$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_ty$, this.$_origZoom$ = this.$_callbackObj$.$getZoom$(), this.$_bMomentumPanning$ && (this.$_currTime$ = (new window.Date).getTime()));
  this.$_momentumTimer$ && this.$_momentumTimer$.$isRunning$() && (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset())
};
D.$JSCompiler_prototypeAlias$$.$PanMoveTouch$ = function $$JSCompiler_prototypeAlias$$$$PanMoveTouch$$($event$$326$$, $touch$$10$$) {
  if(!this.$_bZooming$ && 1 == (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "panTouch").length) {
    var $xx$$24$$ = $touch$$10$$.pageX, $yy$$25$$ = $touch$$10$$.pageY;
    (0,D.$JSCompiler_StaticMethods__handlePanMove$$)(this, $xx$$24$$, $yy$$25$$);
    this.$_mx$ = $xx$$24$$;
    this.$_my$ = $yy$$25$$
  }
};
D.$JSCompiler_prototypeAlias$$.$PanEndTouch$ = function $$JSCompiler_prototypeAlias$$$$PanEndTouch$$() {
  !this.$_bZooming$ && this.$_bPanning$ && (0,D.$JSCompiler_StaticMethods__handlePanEnd$$)(this)
};
D.$JSCompiler_StaticMethods__handleZoomEnd$$ = function $$JSCompiler_StaticMethods__handleZoomEnd$$$($JSCompiler_StaticMethods__handleZoomEnd$self$$) {
  $JSCompiler_StaticMethods__handleZoomEnd$self$$.$_callback$.call($JSCompiler_StaticMethods__handleZoomEnd$self$$.$_callbackObj$, new D.$DvtZoomEvent$$("dragZoomEnd"));
  $JSCompiler_StaticMethods__handleZoomEnd$self$$.$_bZooming$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods__handleZoomEnd$self$$.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningEnded$$)($JSCompiler_StaticMethods__handleZoomEnd$self$$.$_pzc$.$_controlPanel$);
  (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)($JSCompiler_StaticMethods__handleZoomEnd$self$$.$_callbackObj$, D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods__handlePanMove$$ = function $$JSCompiler_StaticMethods__handlePanMove$$$($JSCompiler_StaticMethods__handlePanMove$self$$, $xx$$25$$, $yy$$26$$) {
  $JSCompiler_StaticMethods__handlePanMove$self$$.$_bPanning$ || ($JSCompiler_StaticMethods__handlePanMove$self$$.$_callback$.call($JSCompiler_StaticMethods__handlePanMove$self$$.$_callbackObj$, new D.$DvtPanEvent$$("dragPanBegin")), $JSCompiler_StaticMethods__handlePanMove$self$$.$_bPanning$ = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods__handlePanMove$self$$.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningStarted$$)($JSCompiler_StaticMethods__handlePanMove$self$$.$_pzc$.$_controlPanel$), 
  (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)($JSCompiler_StaticMethods__handlePanMove$self$$.$_callbackObj$, D.$JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods__handlePanMove$self$$.$_bMomentumPanning$ && ($JSCompiler_StaticMethods__handlePanMove$self$$.$_arLastNMouseMoves$ = []));
  (0,D.$JSCompiler_StaticMethods_panTo$$)($JSCompiler_StaticMethods__handlePanMove$self$$.$_callbackObj$, $JSCompiler_StaticMethods__handlePanMove$self$$.$_origPanX$ + $xx$$25$$ - $JSCompiler_StaticMethods__handlePanMove$self$$.$_px$, $JSCompiler_StaticMethods__handlePanMove$self$$.$_origPanY$ + $yy$$26$$ - $JSCompiler_StaticMethods__handlePanMove$self$$.$_py$);
  $JSCompiler_StaticMethods__handlePanMove$self$$.$_bMomentumPanning$ && ($JSCompiler_StaticMethods__handlePanMove$self$$.$_lastTime$ = $JSCompiler_StaticMethods__handlePanMove$self$$.$_currTime$, $JSCompiler_StaticMethods__handlePanMove$self$$.$_currTime$ = (new window.Date).getTime(), $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$ ? ($JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$.$isRunning$() && $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$.stop(), 
  $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$.reset()) : $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$ = new D.$DvtTimer$$($JSCompiler_StaticMethods__handlePanMove$self$$.$_context$, 50, $JSCompiler_StaticMethods__handlePanMove$self$$.$_handleMomentumStartTimer$, $JSCompiler_StaticMethods__handlePanMove$self$$, 1), $JSCompiler_StaticMethods__handlePanMove$self$$.$_arLastNMouseMoves$.push({$dt$:$JSCompiler_StaticMethods__handlePanMove$self$$.$_currTime$ - 
  $JSCompiler_StaticMethods__handlePanMove$self$$.$_lastTime$, $dx$:$xx$$25$$ - $JSCompiler_StaticMethods__handlePanMove$self$$.$_mx$, $dy$:$yy$$26$$ - $JSCompiler_StaticMethods__handlePanMove$self$$.$_my$}), 5 < $JSCompiler_StaticMethods__handlePanMove$self$$.$_arLastNMouseMoves$.length && $JSCompiler_StaticMethods__handlePanMove$self$$.$_arLastNMouseMoves$.splice(0, 1), $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$.start())
};
D.$JSCompiler_StaticMethods__handlePanEnd$$ = function $$JSCompiler_StaticMethods__handlePanEnd$$$($JSCompiler_StaticMethods__handlePanEnd$self$$) {
  $JSCompiler_StaticMethods__handlePanEnd$self$$.$_callback$.call($JSCompiler_StaticMethods__handlePanEnd$self$$.$_callbackObj$, new D.$DvtPanEvent$$("dragPanEnd"));
  $JSCompiler_StaticMethods__handlePanEnd$self$$.$_bPanning$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods__handlePanEnd$self$$.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningEnded$$)($JSCompiler_StaticMethods__handlePanEnd$self$$.$_pzc$.$_controlPanel$);
  if($JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumStartTimer$ && $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumStartTimer$.$isRunning$()) {
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumStartTimer$.stop();
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumStartTimer$.reset();
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumTimer$ ? $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumTimer$.reset() : $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumTimer$ = new D.$DvtTimer$$($JSCompiler_StaticMethods__handlePanEnd$self$$.$_context$, 50, $JSCompiler_StaticMethods__handlePanEnd$self$$.$_handleMomentumTimer$, $JSCompiler_StaticMethods__handlePanEnd$self$$);
    for(var $dt$$1$$ = 0, $dx$$14$$ = 0, $dy$$14$$ = 0, $numMoves$$ = $JSCompiler_StaticMethods__handlePanEnd$self$$.$_arLastNMouseMoves$.length;0 < $JSCompiler_StaticMethods__handlePanEnd$self$$.$_arLastNMouseMoves$.length;) {
      var $objMove$$ = $JSCompiler_StaticMethods__handlePanEnd$self$$.$_arLastNMouseMoves$.pop(), $dt$$1$$ = $dt$$1$$ + $objMove$$.$dt$, $dx$$14$$ = $dx$$14$$ + $objMove$$.$dx$, $dy$$14$$ = $dy$$14$$ + $objMove$$.$dy$
    }
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_arLastNMouseMoves$ = D.$JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumXperMS$ = $dx$$14$$ / $dt$$1$$;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumYperMS$ = $dy$$14$$ / $dt$$1$$;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumTimer$.setInterval(window.Math.ceil($dt$$1$$ / $numMoves$$));
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumIterCount$ = 1;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumDx$ = 0;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumDy$ = 0;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_pzc$.$_bPanningEnabled$ && $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumTimer$.start()
  }else {
    (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)($JSCompiler_StaticMethods__handlePanEnd$self$$.$_callbackObj$, D.$JSCompiler_alias_FALSE$$)
  }
};
D.$DvtPanZoomCanvasKeyboardHandler$$ = function $$DvtPanZoomCanvasKeyboardHandler$$$($component$$12$$, $manager$$6$$) {
  this.Init($component$$12$$, $manager$$6$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomCanvasKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtPanZoomCanvasKeyboardHandler");
D.$DvtPanZoomCanvasKeyboardHandler$$.prototype.Init = function $$DvtPanZoomCanvasKeyboardHandler$$$$Init$($component$$13$$, $manager$$7$$) {
  D.$DvtPanZoomCanvasKeyboardHandler$$.$superclass$.Init($manager$$7$$);
  this.$_component$ = $component$$13$$
};
D.$DvtPanZoomCanvasKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtPanZoomCanvasKeyboardHandler$$$$$processKeyDown$$($controlPanel$$5_event$$313$$) {
  var $keyCode$$19$$ = $controlPanel$$5_event$$313$$.keyCode, $canvas$$ = this.$_component$.$_panZoomCanvas$;
  if(33 == $keyCode$$19$$) {
    $controlPanel$$5_event$$313$$.ctrlKey || $controlPanel$$5_event$$313$$.shiftKey ? $canvas$$.$panBy$($canvas$$.$_panIncrement$, 0) : $canvas$$.$panBy$(0, $canvas$$.$_panIncrement$)
  }else {
    if(34 == $keyCode$$19$$) {
      $controlPanel$$5_event$$313$$.ctrlKey || $controlPanel$$5_event$$313$$.shiftKey ? $canvas$$.$panBy$(-$canvas$$.$_panIncrement$, 0) : $canvas$$.$panBy$(0, -$canvas$$.$_panIncrement$)
    }else {
      if(191 == $keyCode$$19$$) {
        ($controlPanel$$5_event$$313$$ = $canvas$$.$_controlPanel$) && $controlPanel$$5_event$$313$$.$toggleExpandCollapse$()
      }else {
        if((0,D.$DvtKeyboardEvent$isEquals$$)($controlPanel$$5_event$$313$$) || (0,D.$DvtKeyboardEvent$isPlus$$)($controlPanel$$5_event$$313$$)) {
          (0,D.$JSCompiler_StaticMethods_zoomTo$$)($canvas$$, $canvas$$.$getZoom$() + $canvas$$.$_zoomIncrement$)
        }else {
          if((0,D.$DvtKeyboardEvent$isMinus$$)($controlPanel$$5_event$$313$$) || (0,D.$DvtKeyboardEvent$isUnderscore$$)($controlPanel$$5_event$$313$$)) {
            (0,D.$JSCompiler_StaticMethods_zoomTo$$)($canvas$$, $canvas$$.$getZoom$() - $canvas$$.$_zoomIncrement$)
          }else {
            if((48 == $keyCode$$19$$ || 96 == $keyCode$$19$$) && !$controlPanel$$5_event$$313$$.ctrlKey && !$controlPanel$$5_event$$313$$.shiftKey) {
              $canvas$$.$zoomToFit$()
            }else {
              return D.$DvtPanZoomCanvasKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $controlPanel$$5_event$$313$$)
            }
          }
        }
      }
    }
  }
};
D.$DvtCollapsiblePanel$$ = function $$DvtCollapsiblePanel$$$($context$$380$$, $maxWidth$$22$$, $maxHeight$$16$$, $collapseDir$$, $buttonImages$$4$$, $styleMap$$56$$, $disclosed$$6$$, $isFixed$$) {
  this.Init($context$$380$$, $maxWidth$$22$$, $maxHeight$$16$$, $collapseDir$$, $buttonImages$$4$$, $styleMap$$56$$, $disclosed$$6$$, $isFixed$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtCollapsiblePanel$$, D.$DvtContainer$$, "DvtCollapsiblePanel");
D.$DvtCollapsiblePanel$$.prototype.Init = function $$DvtCollapsiblePanel$$$$Init$($context$$381$$, $maxWidth$$23$$, $maxHeight$$17$$, $collapseDir$$1$$, $buttonImages$$5$$, $styleMap$$57$$, $disclosed$$7$$, $isFixed$$1$$) {
  D.$DvtCollapsiblePanel$$.$superclass$.Init.call(this, $context$$381$$);
  this.$_maxWidth$ = $maxWidth$$23$$;
  this.$_maxHeight$ = $maxHeight$$17$$;
  this.$_collapseDir$ = $collapseDir$$1$$ ? $collapseDir$$1$$ : "col_northeast";
  (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) && ("col_northeast" == this.$_collapseDir$ ? this.$_collapseDir$ = "col_northwest" : "col_northwest" == this.$_collapseDir$ ? this.$_collapseDir$ = "col_northeast" : "col_southeast" == this.$_collapseDir$ ? this.$_collapseDir$ = "col_southwest" : "col_southwest" == this.$_collapseDir$ && (this.$_collapseDir$ = "col_southeast"));
  this.$_buttonImages$ = $buttonImages$$5$$;
  this.$_isFixed$ = $isFixed$$1$$ ? $isFixed$$1$$ : (0,D.$DvtAgent$isEnvironmentBatik$$)();
  this.$_animation$ = this.$_collapseTooltip$ = this.$_expandTooltip$ = D.$JSCompiler_alias_NULL$$;
  this.$_styleMap$ = $styleMap$$57$$;
  this.$_borderColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-color", D.$JSCompiler_alias_NULL$$);
  this.$_borderRadius$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-radius", D.$JSCompiler_alias_NULL$$));
  this.$_bgColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "background-color", D.$JSCompiler_alias_NULL$$);
  this.$_bgAlpha$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "backgroundAlpha", 1);
  this.$_collapse$ = $disclosed$$7$$ !== D.$JSCompiler_alias_VOID$$ ? !$disclosed$$7$$ : D.$JSCompiler_alias_FALSE$$;
  this.$_scrollableContainer$ = new D.$DvtScrollableContainer$$($context$$381$$, 0, 0, $maxWidth$$23$$ - 10, $maxHeight$$17$$ - 10, 3, "collapsiblePanel");
  this.$addChild$(this.$_scrollableContainer$);
  this.$_scrollableContainer$.$_horizScrollEnabled$ = D.$JSCompiler_alias_FALSE$$;
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_scrollableContainer$, 5, 5);
  this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$HandleMouseOver$, D.$JSCompiler_alias_FALSE$$, this);
  this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandleMouseOut$, D.$JSCompiler_alias_FALSE$$, this)
};
D.$DvtCollapsiblePanel$$.prototype.$HandleResize$ = function $$DvtCollapsiblePanel$$$$$HandleResize$$() {
  this.$_scrollableContainer$.refresh();
  var $dims$$43_resizeHeight$$ = this.$_scrollableContainer$.$getDimensions$(), $resizeWidth$$ = $dims$$43_resizeHeight$$.$w$ + 10, $dims$$43_resizeHeight$$ = $dims$$43_resizeHeight$$.$h$ + 10;
  this.$_background$.$setCmds$((0,D.$JSCompiler_StaticMethods__getOutlinePath$$)(this, $resizeWidth$$, $dims$$43_resizeHeight$$));
  var $west$$2$$ = "col_northwest" == this.$_collapseDir$ || "col_southwest" == this.$_collapseDir$;
  this.$_buttonFrame$ && $west$$2$$ && this.$_buttonFrame$.$setTranslateX$($resizeWidth$$);
  this.$FireListener$(new D.$DvtResizeEvent$$($resizeWidth$$, $dims$$43_resizeHeight$$, 0, 0))
};
D.$DvtCollapsiblePanel$$.prototype.isCollapsed = (0,D.$JSCompiler_get$$)("$_collapse$");
D.$JSCompiler_StaticMethods_setCollapsed$$ = function $$JSCompiler_StaticMethods_setCollapsed$$$($JSCompiler_StaticMethods_setCollapsed$self$$, $collapse$$1$$) {
  $JSCompiler_StaticMethods_setCollapsed$self$$.$_collapse$ != $collapse$$1$$ && ($JSCompiler_StaticMethods_setCollapsed$self$$.$_collapse$ = $collapse$$1$$, (0,D.$JSCompiler_StaticMethods__collapseExpand$$)($JSCompiler_StaticMethods_setCollapsed$self$$, D.$JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_setCollapsed$self$$.$FireListener$(new D.$DvtCollapsiblePanelEvent$$($collapse$$1$$ ? "hide" : "show")))
};
D.$DvtCollapsiblePanel$$.prototype.$getMaxContentWidth$ = function $$DvtCollapsiblePanel$$$$$getMaxContentWidth$$() {
  return this.$_maxWidth$ - 27
};
D.$DvtCollapsiblePanel$$.prototype.$getMaxContentHeight$ = function $$DvtCollapsiblePanel$$$$$getMaxContentHeight$$() {
  return this.$_maxHeight$ - 27
};
D.$JSCompiler_StaticMethods__getRefPoint$$ = function $$JSCompiler_StaticMethods__getRefPoint$$$($JSCompiler_StaticMethods__getRefPoint$self$$, $point$$38$$, $isScale$$) {
  return!$JSCompiler_StaticMethods__getRefPoint$self$$.isCollapsed() ? $isScale$$ ? new D.$DvtPoint$$(1 / $point$$38$$.x, 1 / $point$$38$$.y) : new D.$DvtPoint$$(-$point$$38$$.x, -$point$$38$$.y) : $point$$38$$
};
D.$JSCompiler_StaticMethods__collapseExpand$$ = function $$JSCompiler_StaticMethods__collapseExpand$$$($JSCompiler_StaticMethods__collapseExpand$self$$, $animate$$2$$) {
  $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$ && ($JSCompiler_StaticMethods__collapseExpand$self$$.$_animationStopped$ = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$.stop(D.$JSCompiler_alias_TRUE$$));
  var $moveAnim_north_translatePoint2$$ = "col_northwest" == $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseDir$ || "col_northeast" == $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseDir$, $west$$3$$ = "col_northwest" == $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseDir$ || "col_southwest" == $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseDir$, $moveAnim2_translatePoint_translateX$$1$$ = $west$$3$$ ? 0 : $JSCompiler_StaticMethods__collapseExpand$self$$.$_width$, 
  $translateY$$2$$ = $moveAnim_north_translatePoint2$$ ? 0 : $JSCompiler_StaticMethods__collapseExpand$self$$.$_height$, $scaleAnim_scalePoint$$ = new D.$DvtPoint$$(1 / $JSCompiler_StaticMethods__collapseExpand$self$$.$_width$, 1 / $JSCompiler_StaticMethods__collapseExpand$self$$.$_height$), $moveAnim2_translatePoint_translateX$$1$$ = new D.$DvtPoint$$($moveAnim2_translatePoint_translateX$$1$$, $translateY$$2$$), $moveAnim_north_translatePoint2$$ = new D.$DvtPoint$$($west$$3$$ ? -$JSCompiler_StaticMethods__collapseExpand$self$$.$_width$ : 
  $JSCompiler_StaticMethods__collapseExpand$self$$.$_width$, $translateY$$2$$ - ($moveAnim_north_translatePoint2$$ ? 0 : 25));
  $animate$$2$$ || ($JSCompiler_StaticMethods__collapseExpand$self$$.$_background$.$setAlpha$(0), $JSCompiler_StaticMethods__collapseExpand$self$$.$_buttonFrame$ && $JSCompiler_StaticMethods__collapseExpand$self$$.$_buttonFrame$.$setAlpha$(0));
  $scaleAnim_scalePoint$$ = new D.$DvtAnimScaleBy$$($JSCompiler_StaticMethods__collapseExpand$self$$.$_context$, $JSCompiler_StaticMethods__collapseExpand$self$$.$_background$, (0,D.$JSCompiler_StaticMethods__getRefPoint$$)($JSCompiler_StaticMethods__collapseExpand$self$$, $scaleAnim_scalePoint$$, D.$JSCompiler_alias_TRUE$$), $animate$$2$$ ? 0.25 : 1E-5);
  $moveAnim_north_translatePoint2$$ = new D.$DvtAnimMoveBy$$($JSCompiler_StaticMethods__collapseExpand$self$$.$_context$, $JSCompiler_StaticMethods__collapseExpand$self$$.$_buttonFrame$, (0,D.$JSCompiler_StaticMethods__getRefPoint$$)($JSCompiler_StaticMethods__collapseExpand$self$$, $moveAnim_north_translatePoint2$$), $animate$$2$$ ? 0.25 : 1E-5);
  $moveAnim2_translatePoint_translateX$$1$$ = new D.$DvtAnimMoveBy$$($JSCompiler_StaticMethods__collapseExpand$self$$.$_context$, $JSCompiler_StaticMethods__collapseExpand$self$$.$_background$, (0,D.$JSCompiler_StaticMethods__getRefPoint$$)($JSCompiler_StaticMethods__collapseExpand$self$$, $moveAnim2_translatePoint_translateX$$1$$), $animate$$2$$ ? 0.25 : 1E-5);
  $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$ = new D.$DvtParallelPlayable$$($JSCompiler_StaticMethods__collapseExpand$self$$.$_context$, $scaleAnim_scalePoint$$, $moveAnim_north_translatePoint2$$, $moveAnim2_translatePoint_translateX$$1$$);
  $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$ && ($JSCompiler_StaticMethods__collapseExpand$self$$.$_context$.$getTooltipManager$().$hideTooltip$(), $JSCompiler_StaticMethods__collapseExpand$self$$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, $JSCompiler_StaticMethods__collapseExpand$self$$.$HandleMouseOver$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, 
  $JSCompiler_StaticMethods__collapseExpand$self$$.$HandleMouseOut$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseExpandButton$ && ($JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseExpandButton$.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, $JSCompiler_StaticMethods__collapseExpand$self$$.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseExpandButton$.$removeEvtListener$(D.$DvtMouseEvent$CLICK$$, 
  $JSCompiler_StaticMethods__collapseExpand$self$$.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseExpandButton$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, $JSCompiler_StaticMethods__collapseExpand$self$$.$OnButtonHoverOver$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseExpandButton$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, 
  $JSCompiler_StaticMethods__collapseExpand$self$$.$OnButtonHoverOut$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$)), $JSCompiler_StaticMethods__collapseExpand$self$$.isCollapsed() && $JSCompiler_StaticMethods__collapseExpand$self$$.$_scrollableContainer$.$setAlpha$(0), $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$.$setOnEnd$($JSCompiler_StaticMethods__collapseExpand$self$$.$OnAnimationEnd$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$.play())
};
D.$JSCompiler_StaticMethods__getOutlinePath$$ = function $$JSCompiler_StaticMethods__getOutlinePath$$$($JSCompiler_StaticMethods__getOutlinePath$self$$, $width$$139$$, $height$$125$$) {
  var $r$$50$$ = $JSCompiler_StaticMethods__getOutlinePath$self$$.$_borderRadius$, $cmds$$12$$, $west$$4$$ = "col_northwest" == $JSCompiler_StaticMethods__getOutlinePath$self$$.$_collapseDir$ || "col_southwest" == $JSCompiler_StaticMethods__getOutlinePath$self$$.$_collapseDir$;
  25 >= $height$$125$$ && ($height$$125$$ = 25);
  $cmds$$12$$ = $JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ || $west$$4$$ ? window.DvtPathUtils.moveTo($r$$50$$, 0) : window.DvtPathUtils.moveTo(0, 0);
  $cmds$$12$$ += window.DvtPathUtils.lineTo($width$$139$$ - $r$$50$$, 0);
  !$JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ && $west$$4$$ ? ($cmds$$12$$ += window.DvtPathUtils.lineTo($width$$139$$, 0), $cmds$$12$$ += window.DvtPathUtils.lineTo($width$$139$$, $r$$50$$)) : $cmds$$12$$ += window.DvtPathUtils.$quadTo$($width$$139$$, 0, $width$$139$$, $r$$50$$);
  !$JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ && 25 == $height$$125$$ && $west$$4$$ ? $cmds$$12$$ += window.DvtPathUtils.lineTo($width$$139$$, $height$$125$$) : ($cmds$$12$$ += window.DvtPathUtils.lineTo($width$$139$$, $height$$125$$ - $r$$50$$), $cmds$$12$$ += window.DvtPathUtils.$quadTo$($width$$139$$, $height$$125$$, $width$$139$$ - $r$$50$$, $height$$125$$));
  $cmds$$12$$ += window.DvtPathUtils.lineTo($r$$50$$, $height$$125$$);
  $cmds$$12$$ = !$JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ && 25 == $height$$125$$ && !$west$$4$$ ? $cmds$$12$$ + window.DvtPathUtils.lineTo(0, $height$$125$$) : $cmds$$12$$ + window.DvtPathUtils.$quadTo$(0, $height$$125$$, 0, $height$$125$$ - $r$$50$$);
  if($JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ || $west$$4$$) {
    $cmds$$12$$ += window.DvtPathUtils.lineTo(0, $r$$50$$), $cmds$$12$$ += window.DvtPathUtils.$quadTo$(0, 0, $r$$50$$, 0)
  }
  return $cmds$$12$$ += window.DvtPathUtils.closePath()
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtCollapsiblePanel$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$() {
  this.$_animationStopped$ = D.$JSCompiler_alias_FALSE$$;
  this.$_animation$ = D.$JSCompiler_alias_NULL$$;
  var $alpha$$28_stroke$$80$$ = this.$_background$.$getStroke$().clone();
  $alpha$$28_stroke$$80$$.$setAlpha$(this.$_styleMap$.borderAlpha);
  this.$_background$.$setStroke$($alpha$$28_stroke$$80$$);
  var $alpha$$28_stroke$$80$$ = this.$_styleMap$[D.$DvtControlPanel$$.$BG_ROLLOUT_ALPHA$], $fill$$50$$ = this.$_background$.$getFill$().clone();
  $fill$$50$$.$setAlpha$($alpha$$28_stroke$$80$$);
  this.$_background$.$setFill$($fill$$50$$);
  this.$_buttonFrame$ && this.$_buttonFrame$.$setAlpha$(this.$_styleMap$.borderAlpha);
  this.isCollapsed() || this.$_scrollableContainer$.$setAlpha$(1);
  this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$HandleMouseOver$, D.$JSCompiler_alias_FALSE$$, this);
  this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandleMouseOut$, D.$JSCompiler_alias_FALSE$$, this);
  this.$_collapseExpandButton$ && (this.$_collapseExpandButton$ = this.isCollapsed() ? D.$DvtButtonLAFUtils$$.$createExpandButton$(this.$_context$, this.$_buttonImages$, 25, this.$_styleMap$, D.$JSCompiler_alias_FALSE$$) : D.$DvtButtonLAFUtils$$.$createCollapseButton$(this.$_context$, this.$_buttonImages$, 25, this.$_styleMap$, D.$JSCompiler_alias_FALSE$$), this.$_buttonFrame$.$addChild$(this.$_collapseExpandButton$), this.$_buttonFrame$.$removeChildAt$(0), (0,D.$DvtAgent$isTouchDevice$$)() ? this.$_collapseExpandButton$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, 
  this.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, this) : (this.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, this), this.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$OnButtonHoverOver$, D.$JSCompiler_alias_FALSE$$, this), this.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$OnButtonHoverOut$, D.$JSCompiler_alias_FALSE$$, this)))
};
D.$JSCompiler_prototypeAlias$$.$OnButtonClick$ = function $$JSCompiler_prototypeAlias$$$$OnButtonClick$$() {
  this.$_context$.$getTooltipManager$().$hideTooltip$();
  (0,D.$JSCompiler_StaticMethods_setCollapsed$$)(this, !this.isCollapsed())
};
D.$JSCompiler_prototypeAlias$$.$OnButtonHoverOver$ = function $$JSCompiler_prototypeAlias$$$$OnButtonHoverOver$$($evt$$63$$) {
  var $tooltip$$45$$ = this.isCollapsed() ? this.$_expandTooltip$ : this.$_collapseTooltip$;
  $tooltip$$45$$ != D.$JSCompiler_alias_NULL$$ && this.$_context$.$getTooltipManager$().$showTooltip$($evt$$63$$.pageX, $evt$$63$$.pageY, $tooltip$$45$$, this.$_collapseExpandButton$, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$OnButtonHoverOut$ = function $$JSCompiler_prototypeAlias$$$$OnButtonHoverOut$$() {
  this.$_context$.$getTooltipManager$().$hideTooltip$()
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseOver$$() {
  var $alpha$$29_stroke$$81$$ = this.$_background$.$getStroke$().clone();
  $alpha$$29_stroke$$81$$.$setAlpha$(this.$_styleMap$.borderHoverAlpha);
  this.$_background$.$setStroke$($alpha$$29_stroke$$81$$);
  var $alpha$$29_stroke$$81$$ = this.$_styleMap$.backgroundHoverAlpha, $fill$$51$$ = this.$_background$.$getFill$().clone();
  $fill$$51$$.$setAlpha$($alpha$$29_stroke$$81$$);
  this.$_background$.$setFill$($fill$$51$$);
  this.$_buttonFrame$ && this.$_buttonFrame$.$setAlpha$(this.$_styleMap$.borderHoverAlpha)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseOut$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseOut$$() {
  var $fill$$52_stroke$$82$$ = this.$_background$.$getStroke$().clone();
  $fill$$52_stroke$$82$$.$setAlpha$(this.$_styleMap$.borderAlpha);
  this.$_background$.$setStroke$($fill$$52_stroke$$82$$);
  $fill$$52_stroke$$82$$ = this.$_background$.$getFill$().clone();
  $fill$$52_stroke$$82$$.$setAlpha$(this.$_bgAlpha$);
  this.$_background$.$setFill$($fill$$52_stroke$$82$$);
  this.$_buttonFrame$ && this.$_buttonFrame$.$setAlpha$(this.$_styleMap$.borderAlpha)
};
D.$DvtCollapsiblePanelEvent$$ = function $$DvtCollapsiblePanelEvent$$$($subtype$$9$$) {
  this.Init("dvtCollapsiblePanelEvent");
  this.$_subtype$ = $subtype$$9$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtCollapsiblePanelEvent$$, D.$DvtBaseComponentEvent$$, "DvtCollapsiblePanelEvent");
D.$DvtCollapsiblePanelEvent$$.prototype.$getSubType$ = (0,D.$JSCompiler_get$$)("$_subtype$");
D.$DvtImageLAFUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtImageLAFUtils$$, D.$DvtObj$$, "DvtImageLAFUtils");
D.$DvtImageLAFUtils$$.$loadIcon$ = function $$DvtImageLAFUtils$$$$loadIcon$$($context$$414$$, $uri$$18$$) {
  var $image$$18$$ = new D.$DvtImage$$($context$$414$$, $uri$$18$$);
  $image$$18$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  D.$DvtImageLoader$$.$loadImage$($context$$414$$, $uri$$18$$, function($context$$414$$) {
    $context$$414$$ != D.$JSCompiler_alias_NULL$$ && ($context$$414$$.width && $context$$414$$.height) && ($image$$18$$.$setWidth$($context$$414$$.width), $image$$18$$.$setHeight$($context$$414$$.height))
  });
  return $image$$18$$
};
D.$DvtButtonLAFUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtButtonLAFUtils$$, D.$DvtObj$$, "DvtButtonLAFUtils");
D.$DvtButtonLAFUtils$$.$EXPAND_COLLAPSE_BUTTON_IMG_OFFSET$ = -6;
D.$DvtButtonLAFUtils$$.$CONTROL_BUTTON_WIDTH$ = 23;
D.$DvtButtonLAFUtils$$.$CONTROL_BUTTON_HEIGHT$ = 21;
D.$DvtButtonLAFUtils$$.$ZOOM_BUTTON_HEIGHT$ = 20;
D.$DvtButtonLAFUtils$$.$OPEN_CLOSE_IMAGE_WIDTH$ = 22;
D.$DvtButtonLAFUtils$$.$OPEN_CLOSE_IMAGE_HEIGHT$ = 20;
D.$DvtButtonLAFUtils$$.$VIEW_PANEL_HEIGHT$ = 47;
D.$DvtButtonLAFUtils$$.$VIEW_PANEL_HALF_HEIGHT$ = 26;
D.$DvtButtonLAFUtils$$.$SIN_PI_4$ = window.Math.sin(window.Math.PI / 4);
D.$DvtButtonLAFUtils$$.$TAN_PI_8$ = window.Math.tan(window.Math.PI / 8);
D.$DvtButtonLAFUtils$$.$BORDER_COLOR$ = "#7C8191";
D.$DvtButtonLAFUtils$$.$GRADIENT_DARK$ = "#E0E1E1";
D.$DvtButtonLAFUtils$$.$GRADIENT_LIGHT$ = "#F0F1F2";
D.$DvtButtonLAFUtils$$.$ROUND_RECT_ELLIPSE$ = 8;
D.$DvtButtonLAFUtils$$.$DEFAULT_FILL_TYPE$ = "solid";
D.$DvtButtonLAFUtils$$.$DEFAULT_BORDER_COLOR$ = "#7BA0D9";
D.$DvtButtonLAFUtils$$.$DEFAULT_MID_COLOR$ = "#3474D3";
D.$DvtButtonLAFUtils$$.$DEFAULT_END_COLOR$ = "#BFD8FB";
D.$DvtButtonLAFUtils$$.$_ZOOMIN_ENA$ = "zoominUp";
D.$DvtButtonLAFUtils$$.$_ZOOMIN_OVR$ = "zoominOver";
D.$DvtButtonLAFUtils$$.$_ZOOMIN_DWN$ = "zoominDown";
D.$DvtButtonLAFUtils$$.$_ZOOMIN_DISABLED$ = "zoominDisabled";
D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_ENA$ = "zoomtofitUp";
D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_OVR$ = "zoomtofitOver";
D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_DWN$ = "zoomtofitDown";
D.$DvtButtonLAFUtils$$.$_ZOOMOUT_ENA$ = "zoomoutUp";
D.$DvtButtonLAFUtils$$.$_ZOOMOUT_OVR$ = "zoomoutOver";
D.$DvtButtonLAFUtils$$.$_ZOOMOUT_DWN$ = "zoomoutDown";
D.$DvtButtonLAFUtils$$.$_ZOOMOUT_DISABLED$ = "zoomoutDisabled";
D.$DvtButtonLAFUtils$$.$_PAN_ENA$ = "pandialUp";
D.$DvtButtonLAFUtils$$.$_PAN_OVR$ = "pandialOver";
D.$DvtButtonLAFUtils$$.$_PAN_DWN$ = "pandialDown";
D.$DvtButtonLAFUtils$$.$_RECENTER_ENA$ = "recenterUp";
D.$DvtButtonLAFUtils$$.$_RECENTER_OVR$ = "recenterOver";
D.$DvtButtonLAFUtils$$.$_RECENTER_DWN$ = "recenterDown";
D.$DvtButtonLAFUtils$$.$_RESET_ENA$ = "resetUp";
D.$DvtButtonLAFUtils$$.$_RESET_OVR$ = "resetOver";
D.$DvtButtonLAFUtils$$.$_RESET_DWN$ = "resetDown";
D.$DvtButtonLAFUtils$$.$_DRILLUP_ENA$ = "drillupUp";
D.$DvtButtonLAFUtils$$.$_DRILLUP_OVR$ = "drillupOver";
D.$DvtButtonLAFUtils$$.$_DRILLUP_DWN$ = "drillupDown";
D.$DvtButtonLAFUtils$$.$_DRILLDOWN_ENA$ = "drilldownUp";
D.$DvtButtonLAFUtils$$.$_DRILLDOWN_OVR$ = "drilldownOver";
D.$DvtButtonLAFUtils$$.$_DRILLDOWN_DWN$ = "drilldownDown";
D.$DvtButtonLAFUtils$$.$_MAX_ENA$ = "maxUp";
D.$DvtButtonLAFUtils$$.$_MAX_OVR$ = "maxOver";
D.$DvtButtonLAFUtils$$.$_MAX_DWN$ = "maxDown";
D.$DvtButtonLAFUtils$$.$_RESTORE_ENA$ = "restoreUp";
D.$DvtButtonLAFUtils$$.$_RESTORE_OVR$ = "restoreOver";
D.$DvtButtonLAFUtils$$.$_RESTORE_DWN$ = "restoreDown";
D.$DvtButtonLAFUtils$$.$_COLLAPSE_ENA$ = "collapseEna";
D.$DvtButtonLAFUtils$$.$_COLLAPSE_OVR$ = "collapseOvr";
D.$DvtButtonLAFUtils$$.$_COLLAPSE_DWN$ = "collapseDwn";
D.$DvtButtonLAFUtils$$.$_EXPAND_ENA$ = "expandEna";
D.$DvtButtonLAFUtils$$.$_EXPAND_OVR$ = "expandOvr";
D.$DvtButtonLAFUtils$$.$_EXPAND_DWN$ = "expandDwn";
D.$DvtButtonLAFUtils$$.$_QUICKQUERY_ENA$ = "quickQueryEna";
D.$DvtButtonLAFUtils$$.$_QUICKQUERY_OVR$ = "quickQueryOvr";
D.$DvtButtonLAFUtils$$.$_QUICKQUERY_DWN$ = "quickQueryDwn";
D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_ENA$ = "clearResultsEna";
D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_OVR$ = "clearResultsOvr";
D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_DWN$ = "clearResultsDwn";
D.$DvtButtonLAFUtils$$.$_UP$ = "Up";
D.$DvtButtonLAFUtils$$.$_OVER$ = "Over";
D.$DvtButtonLAFUtils$$.$_DOWN$ = "Down";
D.$DvtButtonLAFUtils$$.$_SEL$ = "Sel";
D.$DvtButtonLAFUtils$$.$_R2L$ = "_r";
D.$DvtButtonLAFUtils$$.$_SYNC$ = "synchronize";
D.$DvtButtonLAFUtils$$.$createPanControl$ = function $$DvtButtonLAFUtils$$$$createPanControl$$($context$$382$$, $panZoomCanvas$$18$$, $resources$$24$$, $controls$$3$$, $imageURIs$$2$$, $styleMap$$58$$) {
  var $panButton$$2_panUpState$$ = D.$DvtButtonLAFUtils$$.$_createPanButtonState$($context$$382$$, $imageURIs$$2$$[D.$DvtButtonLAFUtils$$.$_PAN_ENA$], $styleMap$$58$$), $panDownState$$ = new D.$DvtContainer$$($context$$382$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panDownState$$, 20, 20);
  var $downImage_panOverState$$ = D.$DvtButtonLAFUtils$$.$_createPanButtonState$($context$$382$$, $imageURIs$$2$$[D.$DvtButtonLAFUtils$$.$_PAN_DWN$], $styleMap$$58$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($downImage_panOverState$$, -20, -20);
  $panDownState$$.$addChild$($downImage_panOverState$$);
  $downImage_panOverState$$ = new D.$DvtContainer$$($context$$382$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($downImage_panOverState$$, 20, 20);
  var $overImage$$ = D.$DvtButtonLAFUtils$$.$_createPanButtonState$($context$$382$$, $imageURIs$$2$$[D.$DvtButtonLAFUtils$$.$_PAN_OVR$], $styleMap$$58$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($overImage$$, -20, -20);
  $downImage_panOverState$$.$addChild$($overImage$$);
  $panButton$$2_panUpState$$ = new D.$DvtButton$$($context$$382$$, $panButton$$2_panUpState$$, $downImage_panOverState$$, $panDownState$$);
  if(0 < ($controls$$3$$ & 16)) {
    var $recenterButton$$2$$ = new D.$DvtButton$$($context$$382$$, D.$DvtButtonLAFUtils$$.$_createRecenterButtonState$($context$$382$$, $imageURIs$$2$$[D.$DvtButtonLAFUtils$$.$_RECENTER_ENA$], $styleMap$$58$$), D.$DvtButtonLAFUtils$$.$_createRecenterButtonState$($context$$382$$, $imageURIs$$2$$[D.$DvtButtonLAFUtils$$.$_RECENTER_OVR$], $styleMap$$58$$), D.$DvtButtonLAFUtils$$.$_createRecenterButtonState$($context$$382$$, $imageURIs$$2$$[D.$DvtButtonLAFUtils$$.$_RECENTER_DWN$], $styleMap$$58$$));
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($recenterButton$$2$$, 9, 9)
  }
  return new D.$DvtPanControl$$($context$$382$$, $panButton$$2_panUpState$$, $recenterButton$$2$$, $panZoomCanvas$$18$$, $resources$$24$$, $controls$$3$$, $styleMap$$58$$)
};
D.$DvtButtonLAFUtils$$.$createDrillUpButton$ = function $$DvtButtonLAFUtils$$$$createDrillUpButton$$($context$$383$$, $mapCallback$$2$$, $panZoomCanvas$$19$$, $resources$$25$$, $dis$$3_imageURIs$$3$$, $eventManager$$26$$, $styleMap$$59$$) {
  var $ena$$14$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$383$$, 0, $dis$$3_imageURIs$$3$$[D.$DvtButtonLAFUtils$$.$_DRILLUP_ENA$], $styleMap$$59$$), $ovr$$9$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$383$$, 1, $dis$$3_imageURIs$$3$$[D.$DvtButtonLAFUtils$$.$_DRILLUP_OVR$], $styleMap$$59$$), $dwn$$9$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$383$$, 2, $dis$$3_imageURIs$$3$$[D.$DvtButtonLAFUtils$$.$_DRILLUP_DWN$], $styleMap$$59$$);
  $dis$$3_imageURIs$$3$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$383$$, 0, $dis$$3_imageURIs$$3$$[D.$DvtButtonLAFUtils$$.$_DRILLUP_ENA$], $styleMap$$59$$);
  return new D.$DvtMapControlButton$$($context$$383$$, new D.$DvtButton$$($context$$383$$, $ena$$14$$, $ovr$$9$$, $dwn$$9$$, $dis$$3_imageURIs$$3$$), $mapCallback$$2$$, $panZoomCanvas$$19$$, 0, $resources$$25$$, $eventManager$$26$$)
};
D.$DvtButtonLAFUtils$$.$createDrillDownButton$ = function $$DvtButtonLAFUtils$$$$createDrillDownButton$$($context$$384$$, $mapCallback$$3$$, $panZoomCanvas$$20$$, $resources$$26$$, $dis$$4_imageURIs$$4$$, $eventManager$$27$$, $styleMap$$60$$) {
  var $ena$$15$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$384$$, 0, $dis$$4_imageURIs$$4$$[D.$DvtButtonLAFUtils$$.$_DRILLDOWN_ENA$], $styleMap$$60$$), $ovr$$10$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$384$$, 1, $dis$$4_imageURIs$$4$$[D.$DvtButtonLAFUtils$$.$_DRILLDOWN_OVR$], $styleMap$$60$$), $dwn$$10$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$384$$, 2, $dis$$4_imageURIs$$4$$[D.$DvtButtonLAFUtils$$.$_DRILLDOWN_DWN$], $styleMap$$60$$);
  $dis$$4_imageURIs$$4$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$384$$, 0, $dis$$4_imageURIs$$4$$[D.$DvtButtonLAFUtils$$.$_DRILLDOWN_ENA$], $styleMap$$60$$);
  return new D.$DvtMapControlButton$$($context$$384$$, new D.$DvtButton$$($context$$384$$, $ena$$15$$, $ovr$$10$$, $dwn$$10$$, $dis$$4_imageURIs$$4$$), $mapCallback$$3$$, $panZoomCanvas$$20$$, 1, $resources$$26$$, $eventManager$$27$$)
};
D.$DvtButtonLAFUtils$$.$createResetButton$ = function $$DvtButtonLAFUtils$$$$createResetButton$$($context$$385$$, $mapCallback$$4$$, $panZoomCanvas$$21$$, $resources$$27$$, $dis$$5_imageURIs$$5$$, $eventManager$$28$$, $styleMap$$61$$) {
  var $ena$$16$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$385$$, 0, $dis$$5_imageURIs$$5$$[D.$DvtButtonLAFUtils$$.$_RESET_ENA$], $styleMap$$61$$), $ovr$$11$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$385$$, 1, $dis$$5_imageURIs$$5$$[D.$DvtButtonLAFUtils$$.$_RESET_OVR$], $styleMap$$61$$), $dwn$$11$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$385$$, 2, $dis$$5_imageURIs$$5$$[D.$DvtButtonLAFUtils$$.$_RESET_DWN$], $styleMap$$61$$);
  $dis$$5_imageURIs$$5$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$385$$, 0, $dis$$5_imageURIs$$5$$[D.$DvtButtonLAFUtils$$.$_RESET_ENA$], $styleMap$$61$$);
  return new D.$DvtMapControlButton$$($context$$385$$, new D.$DvtButton$$($context$$385$$, $ena$$16$$, $ovr$$11$$, $dwn$$11$$, $dis$$5_imageURIs$$5$$), $mapCallback$$4$$, $panZoomCanvas$$21$$, 2, $resources$$27$$, $eventManager$$28$$)
};
D.$DvtButtonLAFUtils$$.$createZoomToFitButton$ = function $$DvtButtonLAFUtils$$$$createZoomToFitButton$$($context$$386$$, $panZoomCanvas$$22$$, $resources$$28$$, $eventManager$$29$$, $dwn$$12_imageURIs$$6$$, $styleMap$$62$$) {
  var $ena$$17$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$386$$, 0, $dwn$$12_imageURIs$$6$$[D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_ENA$], $styleMap$$62$$), $ovr$$12$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$386$$, 1, $dwn$$12_imageURIs$$6$$[D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_OVR$], $styleMap$$62$$);
  $dwn$$12_imageURIs$$6$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$386$$, 2, $dwn$$12_imageURIs$$6$$[D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_DWN$], $styleMap$$62$$);
  return new D.$DvtZoomToFitButton$$($context$$386$$, new D.$DvtButton$$($context$$386$$, $ena$$17$$, $ovr$$12$$, $dwn$$12_imageURIs$$6$$), $panZoomCanvas$$22$$, $resources$$28$$, $eventManager$$29$$)
};
D.$DvtButtonLAFUtils$$.$createZoomInButton$ = function $$DvtButtonLAFUtils$$$$createZoomInButton$$($context$$387$$, $panZoomCanvas$$23$$, $resources$$29$$, $eventManager$$30$$, $dis$$6_imageURIs$$7$$, $styleMap$$63$$) {
  var $ena$$18$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$387$$, 0, $dis$$6_imageURIs$$7$$[D.$DvtButtonLAFUtils$$.$_ZOOMIN_ENA$], $styleMap$$63$$), $ovr$$13$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$387$$, 1, $dis$$6_imageURIs$$7$$[D.$DvtButtonLAFUtils$$.$_ZOOMIN_OVR$], $styleMap$$63$$), $dwn$$13$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$387$$, 2, $dis$$6_imageURIs$$7$$[D.$DvtButtonLAFUtils$$.$_ZOOMIN_DWN$], $styleMap$$63$$);
  $dis$$6_imageURIs$$7$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$387$$, 3, $dis$$6_imageURIs$$7$$[D.$DvtButtonLAFUtils$$.$_ZOOMIN_DISABLED$], $styleMap$$63$$);
  return new D.$DvtZoomInButton$$($context$$387$$, new D.$DvtButton$$($context$$387$$, $ena$$18$$, $ovr$$13$$, $dwn$$13$$, $dis$$6_imageURIs$$7$$), $panZoomCanvas$$23$$, $resources$$29$$, $eventManager$$30$$)
};
D.$DvtButtonLAFUtils$$.$createZoomOutButton$ = function $$DvtButtonLAFUtils$$$$createZoomOutButton$$($context$$388$$, $panZoomCanvas$$24$$, $resources$$30$$, $eventManager$$31$$, $dis$$7_imageURIs$$8$$, $styleMap$$64$$) {
  var $ena$$19$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$388$$, 0, $dis$$7_imageURIs$$8$$[D.$DvtButtonLAFUtils$$.$_ZOOMOUT_ENA$], $styleMap$$64$$), $ovr$$14$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$388$$, 1, $dis$$7_imageURIs$$8$$[D.$DvtButtonLAFUtils$$.$_ZOOMOUT_OVR$], $styleMap$$64$$), $dwn$$14$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$388$$, 2, $dis$$7_imageURIs$$8$$[D.$DvtButtonLAFUtils$$.$_ZOOMOUT_DWN$], $styleMap$$64$$);
  $dis$$7_imageURIs$$8$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$388$$, 3, $dis$$7_imageURIs$$8$$[D.$DvtButtonLAFUtils$$.$_ZOOMOUT_DISABLED$], $styleMap$$64$$);
  return new D.$DvtZoomOutButton$$($context$$388$$, new D.$DvtButton$$($context$$388$$, $ena$$19$$, $ovr$$14$$, $dwn$$14$$, $dis$$7_imageURIs$$8$$), $panZoomCanvas$$24$$, $resources$$30$$, $eventManager$$31$$)
};
D.$DvtButtonLAFUtils$$.$createLayoutItemButtonState$ = function $$DvtButtonLAFUtils$$$$createLayoutItemButtonState$$($context$$389_image$$13$$, $attrb_bname$$4$$, $state$$74$$, $images$$22$$, $styleMap$$65$$) {
  var $r$$51$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$65$$, "buttonRadius", 0), $w$$35$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$65$$, "buttonWidth", 0), $h$$28$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$65$$, "buttonWidth", 0), $shape$$49$$ = D.$DvtButtonLAFUtils$$.$_createBaseButtonShape$($context$$389_image$$13$$, $r$$51$$, $w$$35$$, $h$$28$$, $styleMap$$65$$);
  D.$DvtButtonLAFUtils$$.$_setButtonColors$($state$$74$$, $shape$$49$$, $w$$35$$, $h$$28$$ + 2 * $r$$51$$, $styleMap$$65$$, D.$JSCompiler_alias_TRUE$$);
  $attrb_bname$$4$$ = D.$DvtButtonLAFUtils$$.$_getLayoutURI$($context$$389_image$$13$$, $state$$74$$, $attrb_bname$$4$$);
  ($context$$389_image$$13$$ = D.$DvtButtonLAFUtils$$.$_loadIcon$($context$$389_image$$13$$, $images$$22$$[$attrb_bname$$4$$], $w$$35$$, $h$$28$$)) && $shape$$49$$.$addChild$($context$$389_image$$13$$);
  return $shape$$49$$
};
D.$DvtButtonLAFUtils$$.$_getLayoutURI$ = function $$DvtButtonLAFUtils$$$$_getLayoutURI$$($context$$390$$, $state$$75$$, $attrb$$1_bname$$5$$, $bSel$$3$$) {
  var $r2l$$ = "";
  0 == $state$$75$$ ? $state$$75$$ = D.$DvtButtonLAFUtils$$.$_UP$ : 1 == $state$$75$$ ? $state$$75$$ = D.$DvtButtonLAFUtils$$.$_OVER$ : 2 == $state$$75$$ && ($state$$75$$ = D.$DvtButtonLAFUtils$$.$_DOWN$);
  $bSel$$3$$ && ($attrb$$1_bname$$5$$ += D.$DvtButtonLAFUtils$$.$_SEL$, (0,D.$DvtAgent$isRightToLeft$$)($context$$390$$) && ($r2l$$ = D.$DvtButtonLAFUtils$$.$_R2L$));
  return $attrb$$1_bname$$5$$ + ($state$$75$$ + $r2l$$)
};
D.$DvtButtonLAFUtils$$.$createPanelCardButtonState$ = function $$DvtButtonLAFUtils$$$$createPanelCardButtonState$$($context$$391$$, $state$$76$$, $styleMap$$66$$, $images$$23$$) {
  var $attrb$$2$$ = D.$DvtButtonLAFUtils$$.$_getLayoutURI$($context$$391$$, $state$$76$$, D.$DvtButtonLAFUtils$$.$_SYNC$, D.$JSCompiler_alias_TRUE$$);
  return D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$391$$, $state$$76$$, $images$$23$$[$attrb$$2$$], $styleMap$$66$$)
};
D.$DvtButtonLAFUtils$$.$createPanelCardSyncItemState$ = function $$DvtButtonLAFUtils$$$$createPanelCardSyncItemState$$($base$$6_context$$392$$, $state$$77$$, $ww$$86$$, $hh$$72$$, $styleMap$$67$$) {
  var $r$$52$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$67$$, "buttonRadius", 0);
  $base$$6_context$$392$$ = D.$DvtButtonLAFUtils$$.$_createBaseButtonShape$($base$$6_context$$392$$, $r$$52$$, $ww$$86$$, $hh$$72$$, $styleMap$$67$$);
  D.$DvtButtonLAFUtils$$.$_setButtonColors$($state$$77$$, $base$$6_context$$392$$, $ww$$86$$, $hh$$72$$ + 2 * $r$$52$$, $styleMap$$67$$, D.$JSCompiler_alias_TRUE$$);
  return $base$$6_context$$392$$
};
D.$DvtButtonLAFUtils$$.$createControlButtonState$ = function $$DvtButtonLAFUtils$$$$createControlButtonState$$($context$$393$$, $attrb$$3_bname$$6$$, $state$$78$$, $images$$25$$, $styleMap$$68$$) {
  $attrb$$3_bname$$6$$ = D.$DvtButtonLAFUtils$$.$_getLayoutURI$($context$$393$$, $state$$78$$, $attrb$$3_bname$$6$$);
  return D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$393$$, $state$$78$$, $images$$25$$[$attrb$$3_bname$$6$$], $styleMap$$68$$)
};
D.$DvtButtonLAFUtils$$.$createExpandButton$ = function $$DvtButtonLAFUtils$$$$createExpandButton$$($context$$394$$, $dwn$$15_imageURIs$$9$$, $h$$29$$, $styleMap$$69$$, $bR2L$$7$$) {
  var $ena$$20$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$394$$, 0, $h$$29$$, $dwn$$15_imageURIs$$9$$[D.$DvtButtonLAFUtils$$.$_EXPAND_ENA$], $styleMap$$69$$, $bR2L$$7$$), $ovr$$15$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$394$$, 1, $h$$29$$, $dwn$$15_imageURIs$$9$$[D.$DvtButtonLAFUtils$$.$_EXPAND_OVR$], $styleMap$$69$$, $bR2L$$7$$);
  $dwn$$15_imageURIs$$9$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$394$$, 2, $h$$29$$, $dwn$$15_imageURIs$$9$$[D.$DvtButtonLAFUtils$$.$_EXPAND_DWN$], $styleMap$$69$$, $bR2L$$7$$);
  return new D.$DvtButton$$($context$$394$$, $ena$$20$$, $ovr$$15$$, $dwn$$15_imageURIs$$9$$)
};
D.$DvtButtonLAFUtils$$.$createCollapseButton$ = function $$DvtButtonLAFUtils$$$$createCollapseButton$$($context$$395$$, $dwn$$16_imageURIs$$10$$, $h$$30$$, $styleMap$$70$$, $bR2L$$8$$) {
  var $ena$$21$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$395$$, 0, $h$$30$$, $dwn$$16_imageURIs$$10$$[D.$DvtButtonLAFUtils$$.$_COLLAPSE_ENA$], $styleMap$$70$$, $bR2L$$8$$), $ovr$$16$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$395$$, 1, $h$$30$$, $dwn$$16_imageURIs$$10$$[D.$DvtButtonLAFUtils$$.$_COLLAPSE_OVR$], $styleMap$$70$$, $bR2L$$8$$);
  $dwn$$16_imageURIs$$10$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$395$$, 2, $h$$30$$, $dwn$$16_imageURIs$$10$$[D.$DvtButtonLAFUtils$$.$_COLLAPSE_DWN$], $styleMap$$70$$, $bR2L$$8$$);
  return new D.$DvtButton$$($context$$395$$, $ena$$21$$, $ovr$$16$$, $dwn$$16_imageURIs$$10$$)
};
D.$DvtButtonLAFUtils$$.$createQuickQueryButton$ = function $$DvtButtonLAFUtils$$$$createQuickQueryButton$$($context$$396$$, $imageURIs$$11$$) {
  var $ena$$22$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$396$$, $imageURIs$$11$$[D.$DvtButtonLAFUtils$$.$_QUICKQUERY_ENA$]), $ovr$$17$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$396$$, $imageURIs$$11$$[D.$DvtButtonLAFUtils$$.$_QUICKQUERY_OVR$]), $dwn$$17$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$396$$, $imageURIs$$11$$[D.$DvtButtonLAFUtils$$.$_QUICKQUERY_DWN$]);
  return new D.$DvtButton$$($context$$396$$, $ena$$22$$, $ovr$$17$$, $dwn$$17$$)
};
D.$DvtButtonLAFUtils$$.$createClearResultsButton$ = function $$DvtButtonLAFUtils$$$$createClearResultsButton$$($context$$397$$, $imageURIs$$12$$) {
  var $ena$$23$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$397$$, $imageURIs$$12$$[D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_ENA$]), $ovr$$18$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$397$$, $imageURIs$$12$$[D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_OVR$]), $dwn$$18$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$397$$, $imageURIs$$12$$[D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_DWN$]);
  return new D.$DvtButton$$($context$$397$$, $ena$$23$$, $ovr$$18$$, $dwn$$18$$)
};
D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$ = function $$DvtButtonLAFUtils$$$$_createButtonBaseImage$$($context$$398_image$$14$$, $base$$7_state$$79$$, $uri$$12$$, $styleMap$$71$$) {
  var $w$$36$$, $h$$31$$, $r$$53$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$71$$, "buttonRadius", 0);
  if("undefined" === $w$$36$$ || $w$$36$$ == D.$JSCompiler_alias_NULL$$) {
    $w$$36$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$71$$, "buttonWidth", 0)
  }
  if("undefined" === $h$$31$$ || $h$$31$$ == D.$JSCompiler_alias_NULL$$) {
    $h$$31$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$71$$, "buttonWidth", 0)
  }
  $base$$7_state$$79$$ = D.$DvtButtonLAFUtils$$.$_drawBaseButton$($context$$398_image$$14$$, $base$$7_state$$79$$, $r$$53$$, $w$$36$$, $h$$31$$, $styleMap$$71$$);
  ($context$$398_image$$14$$ = D.$DvtButtonLAFUtils$$.$_loadIcon$($context$$398_image$$14$$, $uri$$12$$, $w$$36$$, $h$$31$$)) && $base$$7_state$$79$$.$addChild$($context$$398_image$$14$$);
  return $base$$7_state$$79$$
};
D.$DvtButtonLAFUtils$$.$_loadIcon$ = function $$DvtButtonLAFUtils$$$$_loadIcon$$($context$$399$$, $uri$$13$$, $buttonWidth$$8$$, $buttonHeight$$3$$) {
  var $image$$15$$ = new D.$DvtImage$$($context$$399$$, $uri$$13$$);
  $image$$15$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  D.$DvtImageLoader$$.$loadImage$($context$$399$$, $uri$$13$$, function($context$$399$$) {
    $context$$399$$ != D.$JSCompiler_alias_NULL$$ && ($context$$399$$.width && $context$$399$$.height) && ($image$$15$$.$setWidth$($context$$399$$.width), $image$$15$$.$setHeight$($context$$399$$.height), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($image$$15$$, $buttonWidth$$8$$ / 2 - $context$$399$$.width / 2, $buttonHeight$$3$$ / 2 - $context$$399$$.height / 2))
  });
  return $image$$15$$
};
D.$DvtButtonLAFUtils$$.$_createPanButtonState$ = function $$DvtButtonLAFUtils$$$$_createPanButtonState$$($context$$400_image$$16$$, $uri$$14$$, $styleMap$$72$$) {
  var $mc$$5$$ = new D.$DvtContainer$$($context$$400_image$$16$$), $hitZone$$ = new D.$DvtCircle$$($context$$400_image$$16$$, 20, 20, 20);
  $hitZone$$.$setAlpha$(0);
  $hitZone$$.$setSolidFill$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$72$$, "background-color", D.$JSCompiler_alias_NULL$$));
  $mc$$5$$.$addChild$($hitZone$$);
  ($context$$400_image$$16$$ = D.$DvtImageLAFUtils$$.$loadIcon$($context$$400_image$$16$$, $uri$$14$$)) && $mc$$5$$.$addChild$($context$$400_image$$16$$);
  return $mc$$5$$
};
D.$DvtButtonLAFUtils$$.$_createRecenterButtonState$ = function $$DvtButtonLAFUtils$$$$_createRecenterButtonState$$($context$$401_image$$17$$, $uri$$15$$, $styleMap$$73$$) {
  var $shape$$52$$ = new D.$DvtContainer$$($context$$401_image$$17$$), $hitZone$$1$$ = new D.$DvtCircle$$($context$$401_image$$17$$, 11, 11, 8);
  $hitZone$$1$$.$setAlpha$(0);
  $hitZone$$1$$.$setSolidFill$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$73$$, "background-color", D.$JSCompiler_alias_NULL$$));
  $shape$$52$$.$addChild$($hitZone$$1$$);
  ($context$$401_image$$17$$ = D.$DvtImageLAFUtils$$.$loadIcon$($context$$401_image$$17$$, $uri$$15$$)) && $shape$$52$$.$addChild$($context$$401_image$$17$$);
  return $shape$$52$$
};
D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$ = function $$DvtButtonLAFUtils$$$$_createCollapseExpandButtonState$$($context$$402_iconLoader$$, $sprite_state$$80$$, $nh$$5$$, $imageW_uri$$16$$, $styleMap$$74$$, $bR2L$$9_imageH$$) {
  $nh$$5$$ || ($nh$$5$$ = 47);
  $sprite_state$$80$$ = D.$DvtButtonLAFUtils$$.$_drawOpenCloseButtonHelper$($context$$402_iconLoader$$, $sprite_state$$80$$, $nh$$5$$, $styleMap$$74$$, $bR2L$$9_imageH$$);
  if($context$$402_iconLoader$$ = D.$DvtImageLAFUtils$$.$loadIcon$($context$$402_iconLoader$$, $imageW_uri$$16$$)) {
    $imageW_uri$$16$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$74$$, "imageWidth", 0), $bR2L$$9_imageH$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$74$$, "imageHeight", 0), $sprite_state$$80$$.$addChild$($context$$402_iconLoader$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$402_iconLoader$$, ((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$74$$, "openCloseButtonWidth", 0) - $imageW_uri$$16$$) / 2, ($nh$$5$$ - $bR2L$$9_imageH$$) / 2)
  }
  return $sprite_state$$80$$
};
D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$ = function $$DvtButtonLAFUtils$$$$_createQuickQueryButtonState$$($context$$403$$, $uri$$17$$) {
  var $iconLoader$$1$$ = D.$DvtImageLAFUtils$$.$loadIcon$($context$$403$$, $uri$$17$$);
  $iconLoader$$1$$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$);
  return $iconLoader$$1$$
};
D.$DvtButtonLAFUtils$$.$createPanButtonBackground$ = function $$DvtButtonLAFUtils$$$$createPanButtonBackground$$($context$$404$$, $styleMap$$75$$) {
  var $shape$$53$$ = D.$DvtButtonLAFUtils$$.$_drawPanButtonBase$($context$$404$$), $bgColor$$4$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$75$$, "background-color", D.$JSCompiler_alias_NULL$$), $borderColor$$35$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$75$$, "border-color", D.$JSCompiler_alias_NULL$$);
  "solid" == (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$75$$, "fill-type", D.$JSCompiler_alias_NULL$$) ? ($shape$$53$$.$setSolidStroke$($borderColor$$35$$), $shape$$53$$.$setSolidFill$($bgColor$$4$$)) : ($shape$$53$$.$setStroke$(new D.$DvtLinearGradientStroke$$(36, ["#8D93A5", "#E0EAEB", $borderColor$$35$$], [1, 1, 1], [0, 125 / 255, 1], [0, 0, 40, 40], 1)), $shape$$53$$.$setFill$(new D.$DvtLinearGradientFill$$(90, [$bgColor$$4$$, $bgColor$$4$$, "#5A83BE", $bgColor$$4$$], [0.9, 0.1, 0, 0.7], [0, 
  105 / 255, 150 / 255, 1], [0, 0, 40, 40])));
  return $shape$$53$$
};
D.$DvtButtonLAFUtils$$.$createPanButtonUnderlay$ = function $$DvtButtonLAFUtils$$$$createPanButtonUnderlay$$($context$$405$$, $styleMap$$76$$) {
  var $shape$$54$$ = D.$DvtButtonLAFUtils$$.$_drawPanButtonBase$($context$$405$$), $color$$60$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$76$$, "background-color", D.$JSCompiler_alias_NULL$$);
  $shape$$54$$.$setSolidStroke$($color$$60$$);
  $shape$$54$$.$setSolidFill$($color$$60$$);
  return $shape$$54$$
};
D.$DvtButtonLAFUtils$$.$_drawPanButtonBase$ = function $$DvtButtonLAFUtils$$$$_drawPanButtonBase$$($context$$406$$) {
  var $cmds$$13$$ = window.DvtPathUtils.moveTo(40, 20) + window.DvtPathUtils.$quadTo$(40, 20 * D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 20 * D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20, 20 * D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20) + window.DvtPathUtils.$quadTo$(20 * D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 40, 20, 40) + window.DvtPathUtils.$quadTo$(20 * -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 40, 20 * -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20, 20 * D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20) + window.DvtPathUtils.$quadTo$(0, 
  20 * D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 0, 20) + window.DvtPathUtils.$quadTo$(0, 20 * -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 20 * -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20, 20 * -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20) + window.DvtPathUtils.$quadTo$(20 * -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 0, 20, 0) + window.DvtPathUtils.$quadTo$(20 * D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 0, 20 * D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20, 20 * -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20) + window.DvtPathUtils.$quadTo$(40, 
  20 * -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 40, 20) + window.DvtPathUtils.closePath();
  return new D.$DvtPath$$($context$$406$$, $cmds$$13$$, "draw_pan_button")
};
D.$DvtButtonLAFUtils$$.$_setGradientBorder$ = function $$DvtButtonLAFUtils$$$$_setGradientBorder$$($shape$$55$$, $ww$$89$$, $hh$$75$$, $xx$$34$$, $yy$$35$$) {
  $shape$$55$$.$setSolidStroke$("#FFFFFF");
  $shape$$55$$.$setStroke$(new D.$DvtLinearGradientStroke$$(63, ["#8D93A5", "#E0EAEB", "#FFFFFF"], [1, 1, 1], [0, 155 / 255, 1], [$xx$$34$$, $yy$$35$$, $ww$$89$$, $hh$$75$$], 1))
};
D.$DvtButtonLAFUtils$$.$_setButtonColors$ = function $$DvtButtonLAFUtils$$$$_setButtonColors$$($state$$82$$, $shape$$56$$, $ww$$90$$, $hh$$76$$, $styleMap$$77$$, $isDropdownItem$$) {
  if((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$77$$, "panelDrawerStyles", D.$JSCompiler_alias_NULL$$)) {
    !$isDropdownItem$$ || $isDropdownItem$$ && 0 == $state$$82$$ ? (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($shape$$56$$) : (1 == $state$$82$$ || 2 == $state$$82$$) && $shape$$56$$.$setFill$(new D.$DvtSolidFill$$("#EBECED"))
  }else {
    if("skyros" == $styleMap$$77$$.skin) {
      switch($state$$82$$) {
        case 1:
          $shape$$56$$.$setFill$(new D.$DvtSolidFill$$("#FFFFFF", 0.7));
          $shape$$56$$.$setStroke$(new D.$DvtSolidStroke$$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$77$$, "border-color", D.$JSCompiler_alias_NULL$$)));
          break;
        case 2:
          $shape$$56$$.$setFill$(new D.$DvtSolidFill$$("#B3C6DB"));
          $shape$$56$$.$setStroke$(new D.$DvtSolidStroke$$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$77$$, "border-color", D.$JSCompiler_alias_NULL$$)));
          break;
        default:
          (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($shape$$56$$)
      }
    }else {
      var $fill_colors$$7$$, $fill_alphas$$7$$, $fill_ratios$$7$$;
      switch($state$$82$$) {
        case 3:
        ;
        case 0:
          $fill_colors$$7$$ = ["#5B868A", "#FFFFFF", "#FFFFFF", "#5B868A"];
          $fill_alphas$$7$$ = [0.01, 0, 0.05, 0.01];
          $fill_ratios$$7$$ = [0, 120 / 255, 130 / 255, 1];
          break;
        case 1:
          D.$DvtButtonLAFUtils$$.$_setGradientBorder$($shape$$56$$, $ww$$90$$, $hh$$76$$, 0, 0);
          $fill_colors$$7$$ = ["#FFFFFF", "#4671B0", "#4671B0", "#FFFFFF"];
          $fill_alphas$$7$$ = [0.5, 0.2, 0.1, 0.7];
          $fill_ratios$$7$$ = [0, 120 / 255, 130 / 255, 1];
          break;
        case 2:
          D.$DvtButtonLAFUtils$$.$_setGradientBorder$($shape$$56$$, $ww$$90$$, $hh$$76$$, 0, 0), $fill_colors$$7$$ = ["#E0EAEB", "#5B868A", "#4671B0"], $fill_alphas$$7$$ = [0.1, 0.3, 0.6], $fill_ratios$$7$$ = [0, 130 / 255, 1]
      }
      $shape$$56$$.$setFill$(new D.$DvtLinearGradientFill$$(90, $fill_colors$$7$$, $fill_alphas$$7$$, $fill_ratios$$7$$, [0, 0, $ww$$90$$, $hh$$76$$]))
    }
  }
};
D.$DvtButtonLAFUtils$$.$_setCloseButtonColors$ = function $$DvtButtonLAFUtils$$$$_setCloseButtonColors$$($fill$$53_state$$83$$, $shape$$57$$, $bgColor$$5_ww$$91$$, $hh$$77$$, $styleMap$$78$$) {
  if((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$78$$, "panelDrawerStyles", D.$JSCompiler_alias_NULL$$)) {
    (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($shape$$57$$)
  }else {
    var $borderColor$$36_stroke$$83$$;
    $borderColor$$36_stroke$$83$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$78$$, "border-color", D.$JSCompiler_alias_NULL$$);
    if("solid" == (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$78$$, "fill-type", D.$JSCompiler_alias_NULL$$)) {
      $bgColor$$5_ww$$91$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$78$$, "background-color", D.$JSCompiler_alias_NULL$$);
      switch($fill$$53_state$$83$$) {
        case 0:
          window.bgAlpha = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$78$$, "backgroundAlpha", 1);
          window.strokeAlpha = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$78$$, "borderAlpha", 1);
          break;
        case 2:
        ;
        case 1:
          window.bgAlpha = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$78$$, "backgroundHoverAlpha", 1), window.strokeAlpha = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$78$$, "borderHoverAlpha", 1)
      }
      $fill$$53_state$$83$$ = new D.$DvtSolidFill$$($bgColor$$5_ww$$91$$, window.bgAlpha);
      $borderColor$$36_stroke$$83$$ = new D.$DvtSolidStroke$$($borderColor$$36_stroke$$83$$, window.strokeAlpha)
    }else {
      var $fill_colors$$8$$, $fill_alphas$$8$$, $fill_ratios$$8$$;
      switch($fill$$53_state$$83$$) {
        case 0:
          $fill_colors$$8$$ = ["#FFFFFF", "#5B868A", "#5B868A"];
          $fill_alphas$$8$$ = [0, 0.2, 0.3];
          $fill_ratios$$8$$ = [0, 130 / 255, 1];
          break;
        case 1:
          $fill_colors$$8$$ = ["#FFFFFF", "#FFFFFF", "#4671B0", "#4671B0"];
          $fill_alphas$$8$$ = [0.1, 0.2, 0.1, 0.6];
          $fill_ratios$$8$$ = [0, 120 / 255, 130 / 255, 1];
          break;
        case 2:
          $fill_colors$$8$$ = ["#4671B0", "#5B868A", "#5B868A"], $fill_alphas$$8$$ = [0.5, 0.2, 0.4], $fill_ratios$$8$$ = [0, 130 / 255, 1]
      }
      $fill$$53_state$$83$$ = new D.$DvtLinearGradientFill$$(0, $fill_colors$$8$$, $fill_alphas$$8$$, $fill_ratios$$8$$, [0, 0, $bgColor$$5_ww$$91$$, $hh$$77$$]);
      $borderColor$$36_stroke$$83$$ = new D.$DvtSolidStroke$$($borderColor$$36_stroke$$83$$, 1, 0.8)
    }
    $shape$$57$$.$setStroke$($borderColor$$36_stroke$$83$$);
    $shape$$57$$.$setFill$($fill$$53_state$$83$$)
  }
};
D.$DvtButtonLAFUtils$$.$_setSliderButtonColors$ = function $$DvtButtonLAFUtils$$$$_setSliderButtonColors$$($state$$84$$, $shape$$58$$, $ww$$92$$, $hh$$78$$, $xx$$37$$, $yy$$38$$) {
  var $fill_colors$$9$$, $fill_alphas$$9$$, $fill_ratios$$9$$;
  switch($state$$84$$) {
    case 0:
      $shape$$58$$.$setSolidStroke$("#FFFFFF", 1, 0.25);
      $fill_colors$$9$$ = ["#FFFFFF", "#4671B0", "#E0EAEB", "#FFFFFF"];
      $fill_alphas$$9$$ = [0.6, 0.3, 0.3, 0.8];
      $fill_ratios$$9$$ = [0, 125 / 255, 130 / 255, 1];
      break;
    case 1:
      D.$DvtButtonLAFUtils$$.$_setGradientBorder$($shape$$58$$, $ww$$92$$, $hh$$78$$, $xx$$37$$, $yy$$38$$);
      $fill_colors$$9$$ = ["#4671B0", "#FFFFFF", "#FFFFFF", "#FFFFFF"];
      $fill_alphas$$9$$ = [0.4, 0.3, 0.7, 1];
      $fill_ratios$$9$$ = [0, 70 / 255, 200 / 255, 1];
      break;
    case 2:
      D.$DvtButtonLAFUtils$$.$_setGradientBorder$($shape$$58$$, $ww$$92$$, $hh$$78$$, $xx$$37$$, $yy$$38$$), $fill_colors$$9$$ = ["#FFFFFF", "#4671B0", "#E0EAEB"], $fill_alphas$$9$$ = [0.6, 0.5, 0.8], $fill_ratios$$9$$ = [0, 130 / 255, 1]
  }
  $shape$$58$$.$setFill$(new D.$DvtLinearGradientFill$$(90, $fill_colors$$9$$, $fill_alphas$$9$$, $fill_ratios$$9$$, [$xx$$37$$, $yy$$38$$, $ww$$92$$, $hh$$78$$]))
};
D.$DvtButtonLAFUtils$$.$GetButtonPathCommands$ = function $$DvtButtonLAFUtils$$$$GetButtonPathCommands$$($buttonWidth$$10$$, $buttonHeight$$4$$, $r$$56$$, $bidi$$5$$) {
  return $bidi$$5$$ ? ["M", $buttonWidth$$10$$, 0, "L", $r$$56$$, 0, "A", $r$$56$$, $r$$56$$, 0, 0, 0, 0, $r$$56$$, "L", 0, $buttonHeight$$4$$ - $r$$56$$, "A", $r$$56$$, $r$$56$$, 0, 0, 0, $r$$56$$, $buttonHeight$$4$$, "L", $buttonWidth$$10$$, $buttonHeight$$4$$] : ["M", 0, 0, "L", $buttonWidth$$10$$ - $r$$56$$, 0, "A", $r$$56$$, $r$$56$$, 0, 0, 1, $buttonWidth$$10$$, $r$$56$$, "L", $buttonWidth$$10$$, $buttonHeight$$4$$ - $r$$56$$, "A", $r$$56$$, $r$$56$$, 0, 0, 1, $buttonWidth$$10$$ - $r$$56$$, 
  $buttonHeight$$4$$, "L", 0, $buttonHeight$$4$$]
};
D.$DvtButtonLAFUtils$$.$_drawOpenCloseButtonHelper$ = function $$DvtButtonLAFUtils$$$$_drawOpenCloseButtonHelper$$($context$$408_shape$$59$$, $state$$85$$, $buttonHeight$$5_nh$$6$$, $styleMap$$79$$, $bR2L$$10$$) {
  $buttonHeight$$5_nh$$6$$ || ($buttonHeight$$5_nh$$6$$ = 47);
  var $r$$57$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$79$$, "border-radius", 0)), $buttonWidth$$11$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$79$$, "openCloseButtonWidth", 0);
  $buttonHeight$$5_nh$$6$$ = window.Math.max($buttonHeight$$5_nh$$6$$, (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$79$$, "buttonHeight", $buttonHeight$$5_nh$$6$$));
  $context$$408_shape$$59$$ = new D.$DvtPath$$($context$$408_shape$$59$$, D.$DvtButtonLAFUtils$$.$GetButtonPathCommands$($buttonWidth$$11$$, $buttonHeight$$5_nh$$6$$, $r$$57$$, $bR2L$$10$$));
  D.$DvtButtonLAFUtils$$.$_setCloseButtonColors$($state$$85$$, $context$$408_shape$$59$$, $buttonWidth$$11$$, $buttonHeight$$5_nh$$6$$, $styleMap$$79$$);
  return $context$$408_shape$$59$$
};
D.$DvtButtonLAFUtils$$.$_drawBaseButton$ = function $$DvtButtonLAFUtils$$$$_drawBaseButton$$($context$$409_shape$$60$$, $state$$86$$, $r$$58$$, $ww$$93$$, $hh$$79$$, $styleMap$$80$$) {
  $context$$409_shape$$60$$ = D.$DvtButtonLAFUtils$$.$_createBaseButtonShape$($context$$409_shape$$60$$, $r$$58$$, $ww$$93$$, $hh$$79$$, $styleMap$$80$$);
  D.$DvtButtonLAFUtils$$.$_setButtonColors$($state$$86$$, $context$$409_shape$$60$$, $ww$$93$$, $hh$$79$$ + 2 * $r$$58$$, $styleMap$$80$$);
  return $context$$409_shape$$60$$
};
D.$DvtButtonLAFUtils$$.$_createBaseButtonShape$ = function $$DvtButtonLAFUtils$$$$_createBaseButtonShape$$($context$$410$$, $r$$59$$, $ww$$94$$, $hh$$80$$, $styleMap$$81_x$$212$$) {
  if("skyros" == $styleMap$$81_x$$212$$.skin) {
    return new D.$DvtRect$$($context$$410$$, 0, 0, $ww$$94$$, $hh$$80$$)
  }
  $ww$$94$$ -= 2 * $r$$59$$;
  $hh$$80$$ -= 2 * $r$$59$$;
  $styleMap$$81_x$$212$$ = $ww$$94$$ + $r$$59$$;
  var $y$$185$$ = $hh$$80$$ + $r$$59$$, $cmds$$14$$ = window.DvtPathUtils.moveTo($styleMap$$81_x$$212$$ + $r$$59$$, $y$$185$$) + window.DvtPathUtils.$quadTo$($r$$59$$ + $styleMap$$81_x$$212$$, D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$59$$ + $y$$185$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$59$$ + $styleMap$$81_x$$212$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$59$$ + $y$$185$$) + window.DvtPathUtils.$quadTo$(D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$59$$ + $styleMap$$81_x$$212$$, $r$$59$$ + $y$$185$$, 
  $styleMap$$81_x$$212$$, $r$$59$$ + $y$$185$$) + window.DvtPathUtils.lineTo($styleMap$$81_x$$212$$, $y$$185$$ + $r$$59$$) + window.DvtPathUtils.lineTo($styleMap$$81_x$$212$$ - $ww$$94$$, $r$$59$$ + $y$$185$$);
  $styleMap$$81_x$$212$$ -= $ww$$94$$;
  $cmds$$14$$ += window.DvtPathUtils.$quadTo$(-D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$59$$ + $styleMap$$81_x$$212$$, $r$$59$$ + $y$$185$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$59$$ + $styleMap$$81_x$$212$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$59$$ + $y$$185$$) + window.DvtPathUtils.$quadTo$(-$r$$59$$ + $styleMap$$81_x$$212$$, D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$59$$ + $y$$185$$, -$r$$59$$ + $styleMap$$81_x$$212$$, $y$$185$$) + window.DvtPathUtils.lineTo($styleMap$$81_x$$212$$ - $r$$59$$, 
  $y$$185$$) + window.DvtPathUtils.lineTo($styleMap$$81_x$$212$$ - $r$$59$$, $y$$185$$ - $hh$$80$$);
  $y$$185$$ -= $hh$$80$$;
  $cmds$$14$$ += window.DvtPathUtils.$quadTo$(-$r$$59$$ + $styleMap$$81_x$$212$$, -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$59$$ + $y$$185$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$59$$ + $styleMap$$81_x$$212$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$59$$ + $y$$185$$) + window.DvtPathUtils.$quadTo$(-D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$59$$ + $styleMap$$81_x$$212$$, -$r$$59$$ + $y$$185$$, $styleMap$$81_x$$212$$, -$r$$59$$ + $y$$185$$) + window.DvtPathUtils.lineTo($styleMap$$81_x$$212$$, -$r$$59$$ + 
  $y$$185$$) + window.DvtPathUtils.lineTo($styleMap$$81_x$$212$$ + $ww$$94$$, -$r$$59$$ + $y$$185$$);
  $styleMap$$81_x$$212$$ += $ww$$94$$;
  $cmds$$14$$ += window.DvtPathUtils.$quadTo$(D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$59$$ + $styleMap$$81_x$$212$$, -$r$$59$$ + $y$$185$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$59$$ + $styleMap$$81_x$$212$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$59$$ + $y$$185$$) + window.DvtPathUtils.$quadTo$($r$$59$$ + $styleMap$$81_x$$212$$, -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$59$$ + $y$$185$$, $r$$59$$ + $styleMap$$81_x$$212$$, $y$$185$$) + window.DvtPathUtils.lineTo($styleMap$$81_x$$212$$ + $r$$59$$, 
  $y$$185$$ + $hh$$80$$) + window.DvtPathUtils.closePath();
  return new D.$DvtPath$$($context$$410$$, $cmds$$14$$)
};
D.$DvtButtonLAFUtils$$.$drawDropdownShape$ = function $$DvtButtonLAFUtils$$$$drawDropdownShape$$($context$$411$$, $ww$$95$$, $hh$$81$$, $r$$60_styleMap$$82$$) {
  $r$$60_styleMap$$82$$ = (0,D.$DvtStyleUtils$getStyle$$)($r$$60_styleMap$$82$$, "radius", 0);
  $ww$$95$$ -= 2 * $r$$60_styleMap$$82$$;
  $hh$$81$$ -= $r$$60_styleMap$$82$$;
  var $x$$213$$ = $ww$$95$$ + $r$$60_styleMap$$82$$, $y$$186$$ = $hh$$81$$, $cmds$$15$$ = window.DvtPathUtils.moveTo($x$$213$$ + $r$$60_styleMap$$82$$, $y$$186$$) + window.DvtPathUtils.$quadTo$($r$$60_styleMap$$82$$ + $x$$213$$, D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$60_styleMap$$82$$ + $y$$186$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$60_styleMap$$82$$ + $x$$213$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$60_styleMap$$82$$ + $y$$186$$) + window.DvtPathUtils.$quadTo$(D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * 
  $r$$60_styleMap$$82$$ + $x$$213$$, $r$$60_styleMap$$82$$ + $y$$186$$, $x$$213$$, $r$$60_styleMap$$82$$ + $y$$186$$) + window.DvtPathUtils.lineTo($x$$213$$, $r$$60_styleMap$$82$$ + $y$$186$$) + window.DvtPathUtils.lineTo($x$$213$$ - $ww$$95$$, $r$$60_styleMap$$82$$ + $y$$186$$), $x$$213$$ = $x$$213$$ - $ww$$95$$, $cmds$$15$$ = $cmds$$15$$ + (window.DvtPathUtils.$quadTo$(-D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$60_styleMap$$82$$ + $x$$213$$, $r$$60_styleMap$$82$$ + $y$$186$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * 
  $r$$60_styleMap$$82$$ + $x$$213$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$60_styleMap$$82$$ + $y$$186$$) + window.DvtPathUtils.$quadTo$(-$r$$60_styleMap$$82$$ + $x$$213$$, D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$60_styleMap$$82$$ + $y$$186$$, -$r$$60_styleMap$$82$$ + $x$$213$$, $y$$186$$) + window.DvtPathUtils.lineTo(-$r$$60_styleMap$$82$$ + $x$$213$$, $y$$186$$) + window.DvtPathUtils.lineTo(-$r$$60_styleMap$$82$$ + $x$$213$$, $y$$186$$ - $hh$$81$$)), $y$$186$$ = $y$$186$$ - $hh$$81$$, $cmds$$15$$ = 
  $cmds$$15$$ + (window.DvtPathUtils.lineTo($x$$213$$ + $ww$$95$$ + $r$$60_styleMap$$82$$, $y$$186$$) + window.DvtPathUtils.lineTo($x$$213$$ + $ww$$95$$ + $r$$60_styleMap$$82$$, $y$$186$$ + $hh$$81$$) + window.DvtPathUtils.closePath());
  return new D.$DvtPath$$($context$$411$$, $cmds$$15$$)
};
D.$DvtButtonLAFUtils$$.$dropShadowFilter$ = function $$DvtButtonLAFUtils$$$$dropShadowFilter$$($context$$412$$, $t$$31$$) {
  var $filter$$1$$ = new window.DvtDropShadowFilter(7, 45, "#5A83BE", 0.9, 14, 14, 1, 3, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$), $filterArray$$ = [];
  $filterArray$$.push($filter$$1$$);
  $t$$31$$.filters = $filterArray$$
};
D.$DvtButtonLAFUtils$$.$_getDimForced$ = function $$DvtButtonLAFUtils$$$$_getDimForced$$($context$$413$$, $obj$$186$$) {
  $obj$$186$$ instanceof D.$DvtButton$$ && ($obj$$186$$ = $obj$$186$$.$getChildAt$(0));
  return(0,D.$DvtDisplayableUtils$_getDimForced$$)($context$$413$$, $obj$$186$$)
};
D.$DvtButtonLAFUtils$$.$parseStyle$ = function $$DvtButtonLAFUtils$$$$parseStyle$$($dispObj$$17$$, $buttonStyle$$21$$) {
  var $fillType$$9_linearGradient$$4$$ = D.$DvtButtonLAFUtils$$.$DEFAULT_FILL_TYPE$, $borderColor$$37_stroke$$84$$ = D.$DvtButtonLAFUtils$$.$DEFAULT_BORDER_COLOR$, $backgroundColor$$17$$ = D.$DvtButtonLAFUtils$$.$DEFAULT_MID_COLOR$, $background$$11$$;
  $buttonStyle$$21$$ && ($buttonStyle$$21$$.$getStyle$("fill-type") && ($fillType$$9_linearGradient$$4$$ = $buttonStyle$$21$$.$getStyle$("fill-type")), $buttonStyle$$21$$.$getStyle$("border-color") && ($borderColor$$37_stroke$$84$$ = $buttonStyle$$21$$.$getStyle$("border-color")), $buttonStyle$$21$$.$getStyle$("background-color") && ($backgroundColor$$17$$ = $buttonStyle$$21$$.$getStyle$("background-color")), $buttonStyle$$21$$.$getStyle$("background") && ($background$$11$$ = $buttonStyle$$21$$.$getStyle$("background")));
  var $borderColor$$37_stroke$$84$$ = new D.$DvtSolidStroke$$($borderColor$$37_stroke$$84$$), $fill$$54_fill_colors$$10_midColor$$8$$;
  if("solid" == $fillType$$9_linearGradient$$4$$) {
    $fill$$54_fill_colors$$10_midColor$$8$$ = new D.$DvtSolidFill$$($backgroundColor$$17$$)
  }else {
    var $endColor$$13_fill_alphas$$10$$, $fill_ratios$$10$$, $degree$$3$$;
    if($background$$11$$ && 0 <= $background$$11$$.indexOf("linear-gradient")) {
      if($fillType$$9_linearGradient$$4$$ = (0,D.$DvtGradientParser$parseCSSGradient$$)($background$$11$$)) {
        $degree$$3$$ = $fillType$$9_linearGradient$$4$$.$getAngle$(), $fill$$54_fill_colors$$10_midColor$$8$$ = $fillType$$9_linearGradient$$4$$.$_arColors$, $endColor$$13_fill_alphas$$10$$ = $fillType$$9_linearGradient$$4$$.$_arAlphas$, $fill_ratios$$10$$ = $fillType$$9_linearGradient$$4$$.$_arRatios$
      }
    }else {
      $fill$$54_fill_colors$$10_midColor$$8$$ = $backgroundColor$$17$$, $endColor$$13_fill_alphas$$10$$ = D.$DvtButtonLAFUtils$$.$DEFAULT_END_COLOR$, $fill$$54_fill_colors$$10_midColor$$8$$ != D.$DvtButtonLAFUtils$$.$DEFAULT_MID_COLOR$ && ($endColor$$13_fill_alphas$$10$$ = D.$DvtColorUtils$$.$inferColor$(D.$DvtButtonLAFUtils$$.$DEFAULT_MID_COLOR$, D.$DvtButtonLAFUtils$$.$DEFAULT_END_COLOR$, $fill$$54_fill_colors$$10_midColor$$8$$)), $fill$$54_fill_colors$$10_midColor$$8$$ = [$fill$$54_fill_colors$$10_midColor$$8$$, 
      $endColor$$13_fill_alphas$$10$$], $endColor$$13_fill_alphas$$10$$ = [0.6, 0.8], $fill_ratios$$10$$ = [0, 1], $degree$$3$$ = -270
    }
    $fill$$54_fill_colors$$10_midColor$$8$$ = new D.$DvtLinearGradientFill$$($degree$$3$$, $fill$$54_fill_colors$$10_midColor$$8$$, $endColor$$13_fill_alphas$$10$$, $fill_ratios$$10$$)
  }
  $dispObj$$17$$.$setFill$($fill$$54_fill_colors$$10_midColor$$8$$);
  $dispObj$$17$$.$setStroke$($borderColor$$37_stroke$$84$$)
};
D.$DvtCommonLegendDefaults$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtCommonLegendDefaults$$, D.$DvtObj$$, "DvtCommonLegendDefaults");
D.$DvtCommonLegendDefaults$$.$SKIN_ALTA$ = {rowColGap:6, separatorGap:7, indicatorSize:16, buttonSize:12, dwn:"#0572CE", ovr:"#5D5D5D", ena:"#7E7F80", separatorColor:"#D9DFE3"};
D.$DvtCommonLegendDefaults$$.$SKIN_SKYROS$ = {dwn:"#202F48", ovr:"#184DD8", ena:"#003D5B"};
D.$DvtCommonLegendDefaults$$.$DEFAULT$ = {rowColGap:4, separatorGap:4, indicatorSize:11, buttonSize:11, dwn:"#000000", ovr:"#245EDD", ena:"#495D7C", separatorColor:"#ADB6C7"};
D.$DvtCommonLegendDefaults$$.$calcOptions$ = function $$DvtCommonLegendDefaults$$$$calcOptions$$($userOptions$$8$$) {
  var $defaults$$13$$ = D.$DvtCommonLegendDefaults$$.$_getDefaults$($userOptions$$8$$);
  return $userOptions$$8$$ ? D.$DvtJSONUtils$$.$merge$($userOptions$$8$$, $defaults$$13$$) : $defaults$$13$$
};
D.$DvtCommonLegendDefaults$$.$_getDefaults$ = function $$DvtCommonLegendDefaults$$$$_getDefaults$$($userOptions$$9$$) {
  var $defaults$$14$$ = D.$JSCompiler_alias_NULL$$;
  return $defaults$$14$$ = $userOptions$$9$$ && "skyros" === $userOptions$$9$$.skin ? D.$DvtJSONUtils$$.$merge$(D.$DvtCommonLegendDefaults$$.$SKIN_SKYROS$, D.$DvtCommonLegendDefaults$$.$DEFAULT$) : $userOptions$$9$$ && "alta" === $userOptions$$9$$.skin ? D.$DvtJSONUtils$$.$merge$(D.$DvtCommonLegendDefaults$$.$SKIN_ALTA$, D.$DvtCommonLegendDefaults$$.$DEFAULT$) : D.$DvtJSONUtils$$.clone(D.$DvtCommonLegendDefaults$$.$DEFAULT$)
};
D.DvtCommonLegend = function $DvtCommonLegend$($context$$330$$, $w$$31$$, $h$$23$$, $images$$18$$, $skinName$$3$$) {
  this.Init($context$$330$$, $w$$31$$, $h$$23$$, $images$$18$$, $skinName$$3$$)
};
D.$DvtObj$$.$createSubclass$(D.DvtCommonLegend, D.$DvtContainer$$, "DvtCommonLegend");
D.DvtCommonLegend.$LEGEND_DISCLOSED_KEY$ = "isLegendDisclosed";
D.DvtCommonLegend.$SKIN_NAME$ = "skin";
D.$JSCompiler_prototypeAlias$$ = D.DvtCommonLegend.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$331$$, $w$$32$$, $h$$24$$, $images$$19$$, $skinName$$4$$) {
  D.DvtCommonLegend.$superclass$.Init.call(this, $context$$331$$, D.$JSCompiler_alias_NULL$$, $w$$32$$, $h$$24$$);
  this.$_isBiDi$ = (0,D.$DvtAgent$isRightToLeft$$)();
  this.$_width$ = this.$_viewportWidth$ = $w$$32$$;
  this.$_height$ = $h$$24$$;
  this.$_attrLookUp$ = {};
  this.$_hideAttrsLookUp$ = {};
  this.$_associations$ = [];
  this.$_addSeparators$ = D.$JSCompiler_alias_FALSE$$;
  this.$_separators$ = [];
  this.$_rollOverEnabled$ = this.$_showHideEnabled$ = D.$JSCompiler_alias_FALSE$$;
  this.$_hidden$ = [];
  this.$_images$ = $images$$19$$;
  this.$_styleMap$ = D.$DvtCommonLegendDefaults$$.$calcOptions$($skinName$$4$$ ? {skin:$skinName$$4$$} : D.$JSCompiler_alias_NULL$$);
  this.$_isWordWrap$ = D.$JSCompiler_alias_FALSE$$;
  this.$_bundle$ = new D.$DvtUtilBundle$$
};
D.$JSCompiler_prototypeAlias$$.$__getBundle$ = (0,D.$JSCompiler_get$$)("$_bundle$");
D.$JSCompiler_prototypeAlias$$.$isWordWrap$ = (0,D.$JSCompiler_get$$)("$_isWordWrap$");
D.$JSCompiler_prototypeAlias$$.$setXML$ = (0,D.$JSCompiler_set$$)("$_legendNode$");
D.$JSCompiler_prototypeAlias$$.$setJSON$ = function $$JSCompiler_prototypeAlias$$$$setJSON$$($json$$3$$) {
  $json$$3$$ && (this.$_legendJSON$ = $json$$3$$)
};
D.$JSCompiler_prototypeAlias$$.$isDisclosed$ = (0,D.$JSCompiler_get$$)("$_isDisclosed$");
D.$JSCompiler_prototypeAlias$$.$setDisclosed$ = (0,D.$JSCompiler_set$$)("$_isDisclosed$");
D.$JSCompiler_StaticMethods__renderLegendSection$$ = function $$JSCompiler_StaticMethods__renderLegendSection$$$($JSCompiler_StaticMethods__renderLegendSection$self$$, $childNodes$$37_legendSectionNode$$, $parent$$53$$, $availSpace$$93$$, $isBiDi$$1$$) {
  var $section$$9_sectionTitle$$ = $childNodes$$37_legendSectionNode$$.$getAttr$("label"), $section$$9_sectionTitle$$ = new D.$DvtCommonLegendSection$$($JSCompiler_StaticMethods__renderLegendSection$self$$.$_context$, $JSCompiler_StaticMethods__renderLegendSection$self$$, $section$$9_sectionTitle$$, $JSCompiler_StaticMethods__renderLegendSection$self$$.$_sectionTitleStyle$, $JSCompiler_StaticMethods__renderLegendSection$self$$.$_styleMap$);
  $section$$9_sectionTitle$$.$render$($parent$$53$$, $availSpace$$93$$, $isBiDi$$1$$);
  if($childNodes$$37_legendSectionNode$$ = $childNodes$$37_legendSectionNode$$.$getChildNodes$()) {
    for(var $i$$600$$ = 0;$i$$600$$ < $childNodes$$37_legendSectionNode$$.length;$i$$600$$++) {
      var $childNode$$14_itemChildren$$inline_6798_itemNode$$inline_6795$$ = $childNodes$$37_legendSectionNode$$[$i$$600$$], $JSCompiler_StaticMethods__parseItem$self$$inline_6794_legendListItem$$2_legendListItem$$inline_6797$$;
      if("item" == $childNode$$14_itemChildren$$inline_6798_itemNode$$inline_6795$$.getName()) {
        $JSCompiler_StaticMethods__parseItem$self$$inline_6794_legendListItem$$2_legendListItem$$inline_6797$$ = $JSCompiler_StaticMethods__renderLegendSection$self$$;
        var $i$$inline_6799_prop$$inline_6796$$ = {};
        $i$$inline_6799_prop$$inline_6796$$.itemId = $childNode$$14_itemChildren$$inline_6798_itemNode$$inline_6795$$.$getAttr$("itemId");
        $i$$inline_6799_prop$$inline_6796$$.attributeGroupId = $childNode$$14_itemChildren$$inline_6798_itemNode$$inline_6795$$.$getAttr$("attributeGroupId");
        $i$$inline_6799_prop$$inline_6796$$.hideAttrs = $childNode$$14_itemChildren$$inline_6798_itemNode$$inline_6795$$.$getAttr$("hideAttrs");
        $JSCompiler_StaticMethods__parseItem$self$$inline_6794_legendListItem$$2_legendListItem$$inline_6797$$ = new D.$DvtCommonLegendRow$$($JSCompiler_StaticMethods__parseItem$self$$inline_6794_legendListItem$$2_legendListItem$$inline_6797$$.$_context$, $JSCompiler_StaticMethods__parseItem$self$$inline_6794_legendListItem$$2_legendListItem$$inline_6797$$, $i$$inline_6799_prop$$inline_6796$$, $JSCompiler_StaticMethods__parseItem$self$$inline_6794_legendListItem$$2_legendListItem$$inline_6797$$.$_legendItemStyle$, 
        $JSCompiler_StaticMethods__parseItem$self$$inline_6794_legendListItem$$2_legendListItem$$inline_6797$$.$_styleMap$);
        $childNode$$14_itemChildren$$inline_6798_itemNode$$inline_6795$$ = $childNode$$14_itemChildren$$inline_6798_itemNode$$inline_6795$$.$getChildNodes$();
        for($i$$inline_6799_prop$$inline_6796$$ = 0;$i$$inline_6799_prop$$inline_6796$$ < $childNode$$14_itemChildren$$inline_6798_itemNode$$inline_6795$$.length;$i$$inline_6799_prop$$inline_6796$$++) {
          if("marker" == $childNode$$14_itemChildren$$inline_6798_itemNode$$inline_6795$$[$i$$inline_6799_prop$$inline_6796$$].getName()) {
            var $legendRow$$inline_10671$$ = $JSCompiler_StaticMethods__parseItem$self$$inline_6794_legendListItem$$2_legendListItem$$inline_6797$$, $markerNode$$inline_10672_opacity$$inline_10677$$ = $childNode$$14_itemChildren$$inline_6798_itemNode$$inline_6795$$[$i$$inline_6799_prop$$inline_6796$$], $url$$inline_10673$$ = $markerNode$$inline_10672_opacity$$inline_10677$$.$getAttr$("url"), $shape$$inline_10674$$ = $markerNode$$inline_10672_opacity$$inline_10677$$.$getAttr$("shapeType"), $color$$inline_10675$$ = 
            $markerNode$$inline_10672_opacity$$inline_10677$$.$getAttr$("color"), $pattern$$inline_10676$$ = $markerNode$$inline_10672_opacity$$inline_10677$$.$getAttr$("pattern");
            ($markerNode$$inline_10672_opacity$$inline_10677$$ = $markerNode$$inline_10672_opacity$$inline_10677$$.$getAttr$("opacity")) && ($markerNode$$inline_10672_opacity$$inline_10677$$ = (0,window.parseFloat)($markerNode$$inline_10672_opacity$$inline_10677$$));
            $legendRow$$inline_10671$$.setMarker($url$$inline_10673$$, $shape$$inline_10674$$, $color$$inline_10675$$, $pattern$$inline_10676$$, $markerNode$$inline_10672_opacity$$inline_10677$$)
          }else {
            "text" == $childNode$$14_itemChildren$$inline_6798_itemNode$$inline_6795$$[$i$$inline_6799_prop$$inline_6796$$].getName() && $JSCompiler_StaticMethods__parseItem$self$$inline_6794_legendListItem$$2_legendListItem$$inline_6797$$.$setText$($childNode$$14_itemChildren$$inline_6798_itemNode$$inline_6795$$[$i$$inline_6799_prop$$inline_6796$$].$getAttr$("value"))
          }
        }
      }else {
        "text" == $childNode$$14_itemChildren$$inline_6798_itemNode$$inline_6795$$.getName() && ($JSCompiler_StaticMethods__parseItem$self$$inline_6794_legendListItem$$2_legendListItem$$inline_6797$$ = new D.$DvtCommonLegendRow$$($JSCompiler_StaticMethods__renderLegendSection$self$$.$_context$, $JSCompiler_StaticMethods__renderLegendSection$self$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods__renderLegendSection$self$$.$_legendItemStyle$, $JSCompiler_StaticMethods__renderLegendSection$self$$.$_styleMap$), 
        $JSCompiler_StaticMethods__parseItem$self$$inline_6794_legendListItem$$2_legendListItem$$inline_6797$$.$setText$($childNode$$14_itemChildren$$inline_6798_itemNode$$inline_6795$$.$getAttr$("value")))
      }
      $JSCompiler_StaticMethods__parseItem$self$$inline_6794_legendListItem$$2_legendListItem$$inline_6797$$ && ($JSCompiler_StaticMethods__parseItem$self$$inline_6794_legendListItem$$2_legendListItem$$inline_6797$$.$render$($section$$9_sectionTitle$$, $availSpace$$93$$, $isBiDi$$1$$), $section$$9_sectionTitle$$.$addItem$($JSCompiler_StaticMethods__parseItem$self$$inline_6794_legendListItem$$2_legendListItem$$inline_6797$$))
    }
  }
  $parent$$53$$.$addChild$($section$$9_sectionTitle$$);
  $availSpace$$93$$.y = $availSpace$$93$$.y - $JSCompiler_StaticMethods__renderLegendSection$self$$.$_styleMap$.rowColGap + $JSCompiler_StaticMethods__renderLegendSection$self$$.$_styleMap$.rowColGap;
  return $section$$9_sectionTitle$$
};
D.$JSCompiler_StaticMethods__renderLegendSectionJSON$$ = function $$JSCompiler_StaticMethods__renderLegendSectionJSON$$$($JSCompiler_StaticMethods__renderLegendSectionJSON$self$$, $legendSectionNode$$1_textItems$$, $parent$$54$$, $availSpace$$94$$, $isBiDi$$2$$) {
  var $section$$10$$ = new D.$DvtCommonLegendSection$$($JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_context$, $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$, $legendSectionNode$$1_textItems$$.label, $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_sectionTitleStyle$, $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_styleMap$);
  $section$$10$$.$render$($parent$$54$$, $availSpace$$94$$, $isBiDi$$2$$);
  var $legendItems$$1$$ = $legendSectionNode$$1_textItems$$.item, $itemNode$$inline_6802_legendListItem$$3$$;
  if($legendItems$$1$$) {
    for(var $i$$601$$ = 0;$i$$601$$ < $legendItems$$1$$.length;$i$$601$$++) {
      var $JSCompiler_StaticMethods__parseItemJSON$self$$inline_6801_legendListItem$$inline_6804$$ = $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$;
      $itemNode$$inline_6802_legendListItem$$3$$ = $legendItems$$1$$[$i$$601$$];
      var $prop$$inline_6803_url$$inline_10681$$ = {};
      $prop$$inline_6803_url$$inline_10681$$.itemId = $itemNode$$inline_6802_legendListItem$$3$$.itemId;
      $prop$$inline_6803_url$$inline_10681$$.attributeGroupId = $itemNode$$inline_6802_legendListItem$$3$$.attributeGroupId;
      $prop$$inline_6803_url$$inline_10681$$.hideAttrs = $itemNode$$inline_6802_legendListItem$$3$$.hideAttrs;
      var $JSCompiler_StaticMethods__parseItemJSON$self$$inline_6801_legendListItem$$inline_6804$$ = new D.$DvtCommonLegendRow$$($JSCompiler_StaticMethods__parseItemJSON$self$$inline_6801_legendListItem$$inline_6804$$.$_context$, $JSCompiler_StaticMethods__parseItemJSON$self$$inline_6801_legendListItem$$inline_6804$$, $prop$$inline_6803_url$$inline_10681$$, $JSCompiler_StaticMethods__parseItemJSON$self$$inline_6801_legendListItem$$inline_6804$$.$_legendItemStyle$, $JSCompiler_StaticMethods__parseItemJSON$self$$inline_6801_legendListItem$$inline_6804$$.$_styleMap$), 
      $markerNode$$inline_10680_opacity$$inline_10685$$ = $itemNode$$inline_6802_legendListItem$$3$$.marker, $prop$$inline_6803_url$$inline_10681$$ = $markerNode$$inline_10680_opacity$$inline_10685$$.url, $shape$$inline_10682$$ = $markerNode$$inline_10680_opacity$$inline_10685$$.shapeType, $color$$inline_10683$$ = $markerNode$$inline_10680_opacity$$inline_10685$$.color, $pattern$$inline_10684$$ = $markerNode$$inline_10680_opacity$$inline_10685$$.pattern;
      ($markerNode$$inline_10680_opacity$$inline_10685$$ = $markerNode$$inline_10680_opacity$$inline_10685$$.opacity) && ($markerNode$$inline_10680_opacity$$inline_10685$$ = (0,window.parseFloat)($markerNode$$inline_10680_opacity$$inline_10685$$));
      $JSCompiler_StaticMethods__parseItemJSON$self$$inline_6801_legendListItem$$inline_6804$$.setMarker($prop$$inline_6803_url$$inline_10681$$, $shape$$inline_10682$$, $color$$inline_10683$$, $pattern$$inline_10684$$, $markerNode$$inline_10680_opacity$$inline_10685$$);
      $JSCompiler_StaticMethods__parseItemJSON$self$$inline_6801_legendListItem$$inline_6804$$.$setText$($itemNode$$inline_6802_legendListItem$$3$$.text.value);
      if($itemNode$$inline_6802_legendListItem$$3$$ = $JSCompiler_StaticMethods__parseItemJSON$self$$inline_6801_legendListItem$$inline_6804$$) {
        $itemNode$$inline_6802_legendListItem$$3$$.$render$($section$$10$$, $availSpace$$94$$, $isBiDi$$2$$), $section$$10$$.$addItem$($itemNode$$inline_6802_legendListItem$$3$$)
      }
    }
  }
  if($legendSectionNode$$1_textItems$$ = $legendSectionNode$$1_textItems$$.text) {
    for($i$$601$$ = 0;$i$$601$$ < $legendSectionNode$$1_textItems$$.length;$i$$601$$++) {
      $itemNode$$inline_6802_legendListItem$$3$$ = new D.$DvtCommonLegendRow$$($JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_context$, $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_legendItemStyle$, $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_styleMap$), $itemNode$$inline_6802_legendListItem$$3$$.$setText$($legendSectionNode$$1_textItems$$[$i$$601$$].value), $itemNode$$inline_6802_legendListItem$$3$$ && 
      ($itemNode$$inline_6802_legendListItem$$3$$.$render$($section$$10$$, $availSpace$$94$$, $isBiDi$$2$$), $section$$10$$.$addItem$($itemNode$$inline_6802_legendListItem$$3$$))
    }
  }
  $parent$$54$$.$addChild$($section$$10$$);
  $availSpace$$94$$.y = $availSpace$$94$$.y - $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_styleMap$.rowColGap + $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_styleMap$.rowColGap;
  return $section$$10$$
};
D.$JSCompiler_StaticMethods__renderLegendSectionGroup$$ = function $$JSCompiler_StaticMethods__renderLegendSectionGroup$$$($JSCompiler_StaticMethods__renderLegendSectionGroup$self$$, $childNodes$$38_legendSectionNode$$2$$, $bidiMultiplier_parent$$55$$, $availSpace$$95$$, $isBiDi$$3$$) {
  var $sectionGroup_sectionTitle$$2$$ = $childNodes$$38_legendSectionNode$$2$$.$getAttr$("label"), $disclosed$$2_i$$602$$ = "true" == $childNodes$$38_legendSectionNode$$2$$.$getAttr$("disclosed"), $childNode$$15_expandTooltip_section$$11$$ = $childNodes$$38_legendSectionNode$$2$$.$getAttr$("expandTooltip"), $collapseTooltip$$ = $childNodes$$38_legendSectionNode$$2$$.$getAttr$("collapseTooltip"), $sectionGroup_sectionTitle$$2$$ = new D.$DvtCommonLegendSectionGroup$$($JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_context$, 
  $JSCompiler_StaticMethods__renderLegendSectionGroup$self$$, $sectionGroup_sectionTitle$$2$$, $JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_sectionGroupTitleStyle$, $collapseTooltip$$, $childNode$$15_expandTooltip_section$$11$$, $disclosed$$2_i$$602$$, $JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_styleMap$);
  $sectionGroup_sectionTitle$$2$$.$render$($bidiMultiplier_parent$$55$$, $availSpace$$95$$, $isBiDi$$3$$);
  $bidiMultiplier_parent$$55$$ = $isBiDi$$3$$ ? -1 : 1;
  if($childNodes$$38_legendSectionNode$$2$$ = $childNodes$$38_legendSectionNode$$2$$.$getChildNodes$()) {
    for($disclosed$$2_i$$602$$ = 0;$disclosed$$2_i$$602$$ < $childNodes$$38_legendSectionNode$$2$$.length;$disclosed$$2_i$$602$$++) {
      $childNode$$15_expandTooltip_section$$11$$ = $childNodes$$38_legendSectionNode$$2$$[$disclosed$$2_i$$602$$], "section" == $childNode$$15_expandTooltip_section$$11$$.getName() && ($availSpace$$95$$.x += ($JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_styleMap$.buttonSize + $JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_styleMap$.rowColGap) * $bidiMultiplier_parent$$55$$, $childNode$$15_expandTooltip_section$$11$$ = (0,D.$JSCompiler_StaticMethods__renderLegendSection$$)($JSCompiler_StaticMethods__renderLegendSectionGroup$self$$, 
      $childNode$$15_expandTooltip_section$$11$$, $sectionGroup_sectionTitle$$2$$, $availSpace$$95$$, $isBiDi$$3$$), $availSpace$$95$$.x -= ($JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_styleMap$.buttonSize + $JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_styleMap$.rowColGap) * $bidiMultiplier_parent$$55$$, $sectionGroup_sectionTitle$$2$$.$addItem$($childNode$$15_expandTooltip_section$$11$$))
    }
  }
  $availSpace$$95$$.y = $availSpace$$95$$.y - $JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_styleMap$.rowColGap + $JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_styleMap$.rowColGap;
  return $sectionGroup_sectionTitle$$2$$
};
D.$JSCompiler_StaticMethods__renderLegendSectionGroupJSON$$ = function $$JSCompiler_StaticMethods__renderLegendSectionGroupJSON$$$($JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$, $legendSectionNode$$3_sections$$3$$, $bidiMultiplier$$1_parent$$56$$, $availSpace$$96$$, $isBiDi$$4$$) {
  var $sectionGroup$$1$$ = new D.$DvtCommonLegendSectionGroup$$($JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_context$, $JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$, $legendSectionNode$$3_sections$$3$$.label, $JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_sectionGroupTitleStyle$, $legendSectionNode$$3_sections$$3$$.collapseTooltip, $legendSectionNode$$3_sections$$3$$.expandTooltip, "true" == $legendSectionNode$$3_sections$$3$$.disclosed, $JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_styleMap$);
  $sectionGroup$$1$$.$render$($bidiMultiplier$$1_parent$$56$$, $availSpace$$96$$, $isBiDi$$4$$);
  $bidiMultiplier$$1_parent$$56$$ = $isBiDi$$4$$ ? -1 : 1;
  if($legendSectionNode$$3_sections$$3$$ = $legendSectionNode$$3_sections$$3$$.section) {
    for(var $i$$603$$ = 0;$i$$603$$ < $legendSectionNode$$3_sections$$3$$.length;$i$$603$$++) {
      $availSpace$$96$$.x += ($JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_styleMap$.buttonSize + $JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_styleMap$.rowColGap) * $bidiMultiplier$$1_parent$$56$$;
      var $section$$12$$ = (0,D.$JSCompiler_StaticMethods__renderLegendSectionJSON$$)($JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$, $legendSectionNode$$3_sections$$3$$[$i$$603$$], $sectionGroup$$1$$, $availSpace$$96$$, $isBiDi$$4$$);
      $availSpace$$96$$.x -= ($JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_styleMap$.buttonSize + $JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_styleMap$.rowColGap) * $bidiMultiplier$$1_parent$$56$$;
      $sectionGroup$$1$$.$addItem$($section$$12$$)
    }
  }
  $availSpace$$96$$.y = $availSpace$$96$$.y - $JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_styleMap$.rowColGap + $JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_styleMap$.rowColGap;
  return $sectionGroup$$1$$
};
D.$JSCompiler_StaticMethods__renderSeparator$$ = function $$JSCompiler_StaticMethods__renderSeparator$$$($JSCompiler_StaticMethods__renderSeparator$self$$, $container$$145$$, $availSpace$$97$$) {
  $availSpace$$97$$.y = $availSpace$$97$$.y - $JSCompiler_StaticMethods__renderSeparator$self$$.$_styleMap$.rowColGap + $JSCompiler_StaticMethods__renderSeparator$self$$.$_styleMap$.separatorGap;
  var $line1$$1$$ = new D.$DvtLine$$($JSCompiler_StaticMethods__renderSeparator$self$$.$_context$, $availSpace$$97$$.x, $availSpace$$97$$.y, $availSpace$$97$$.x, $availSpace$$97$$.y);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($line1$$1$$);
  $line1$$1$$.$setSolidStroke$($JSCompiler_StaticMethods__renderSeparator$self$$.$_styleMap$.separatorColor);
  $JSCompiler_StaticMethods__renderSeparator$self$$.$_separators$.push($line1$$1$$);
  var $separator$$3$$;
  if("alta" == $JSCompiler_StaticMethods__renderSeparator$self$$.$_styleMap$.skin) {
    $separator$$3$$ = $line1$$1$$
  }else {
    $availSpace$$97$$.y++;
    var $line2$$1$$ = new D.$DvtLine$$($JSCompiler_StaticMethods__renderSeparator$self$$.$_context$, $availSpace$$97$$.x, $availSpace$$97$$.y, $availSpace$$97$$.x, $availSpace$$97$$.y);
    $line2$$1$$.$setSolidStroke$("#FFFFFF");
    (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($line2$$1$$);
    $separator$$3$$ = new D.$DvtContainer$$($JSCompiler_StaticMethods__renderSeparator$self$$.$_context$);
    $separator$$3$$.$addChild$($line1$$1$$);
    $separator$$3$$.$addChild$($line2$$1$$);
    $JSCompiler_StaticMethods__renderSeparator$self$$.$_separators$.push($line2$$1$$)
  }
  $container$$145$$.$addChild$($separator$$3$$);
  $availSpace$$97$$.y += $JSCompiler_StaticMethods__renderSeparator$self$$.$_styleMap$.separatorGap;
  return $separator$$3$$
};
D.DvtCommonLegend.prototype.update = function $DvtCommonLegend$$update$($updatedSection$$, $diff$$5$$) {
  for(var $idx$$15$$ = this.$_children$.indexOf($updatedSection$$), $idx$$15$$ = $idx$$15$$ + 1;$idx$$15$$ < this.$_children$.length;) {
    var $oldTransY$$ = this.$_children$[$idx$$15$$].$getTranslateY$();
    this.$_children$[$idx$$15$$].$setTranslateY$($oldTransY$$ + $diff$$5$$);
    $idx$$15$$++
  }
  this.$_dim$.$h$ += $diff$$5$$;
  this.$FireListener$(new D.$DvtResizeEvent$$(this.$_dim$.$w$, this.$_dim$.$h$, 0, 0))
};
D.DvtCommonLegend.prototype.$getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventHandler$");
D.DvtCommonLegend.prototype.$render$ = function $DvtCommonLegend$$$render$$() {
  if(this.$_legendNode$) {
    this.$_eventHandler$ = new D.$DvtCommonLegendEventManager$$(this.$_context$, this.$_legendEventHandler$, this);
    this.$_title$ = this.$_legendNode$.$getAttr$("label");
    this.$_isDisclosed$ = "true" == this.$_legendNode$.$getAttr$("disclosed");
    var $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$ = this.$_legendNode$.getElementsByTagName("style");
    if($availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$ && ($availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$ = 
    $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$[0].$getChildNodes$())) {
      for(var $i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$ = 0;$i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$ < $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$.length;$i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$++) {
        var $childNode$$inline_10691_childNodes$$inline_6812_fitWidth$$inline_6810_fitWidth$$inline_6823_sectionGroups$$inline_6828_sections$$inline_6829_separatorDefs$$inline_6825$$ = $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$[$i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$];
        "legend-title" == $childNode$$inline_10691_childNodes$$inline_6812_fitWidth$$inline_6810_fitWidth$$inline_6823_sectionGroups$$inline_6828_sections$$inline_6829_separatorDefs$$inline_6825$$.getName() ? this.$_legendTitleStyle$ = $childNode$$inline_10691_childNodes$$inline_6812_fitWidth$$inline_6810_fitWidth$$inline_6823_sectionGroups$$inline_6828_sections$$inline_6829_separatorDefs$$inline_6825$$.getTextContent() : "sectionGroup-title" == $childNode$$inline_10691_childNodes$$inline_6812_fitWidth$$inline_6810_fitWidth$$inline_6823_sectionGroups$$inline_6828_sections$$inline_6829_separatorDefs$$inline_6825$$.getName() ? 
        this.$_sectionGroupTitleStyle$ = $childNode$$inline_10691_childNodes$$inline_6812_fitWidth$$inline_6810_fitWidth$$inline_6823_sectionGroups$$inline_6828_sections$$inline_6829_separatorDefs$$inline_6825$$.getTextContent() : "section-title" == $childNode$$inline_10691_childNodes$$inline_6812_fitWidth$$inline_6810_fitWidth$$inline_6823_sectionGroups$$inline_6828_sections$$inline_6829_separatorDefs$$inline_6825$$.getName() ? this.$_sectionTitleStyle$ = $childNode$$inline_10691_childNodes$$inline_6812_fitWidth$$inline_6810_fitWidth$$inline_6823_sectionGroups$$inline_6828_sections$$inline_6829_separatorDefs$$inline_6825$$.getTextContent() : 
        "legend-item" == $childNode$$inline_10691_childNodes$$inline_6812_fitWidth$$inline_6810_fitWidth$$inline_6823_sectionGroups$$inline_6828_sections$$inline_6829_separatorDefs$$inline_6825$$.getName() && (this.$_legendItemStyle$ = $childNode$$inline_10691_childNodes$$inline_6812_fitWidth$$inline_6810_fitWidth$$inline_6823_sectionGroups$$inline_6828_sections$$inline_6829_separatorDefs$$inline_6825$$.getTextContent())
      }
    }
    if($availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$ = this.$_legendNode$.$getAttr$("noWrap")) {
      this.$_isWordWrap$ = "false" == $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$
    }
    $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$ = this.$_isBiDi$ ? new D.$DvtRectangle$$(this.$_width$, 0, this.$_width$, this.$_height$) : new D.$DvtRectangle$$(0, 0, this.$_width$, this.$_height$);
    this.$_legendContent$ = new D.$DvtContainer$$(this.$_context$);
    this.$addChild$(this.$_legendContent$);
    if(this.$_title$ && ($i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$ = this.$isWordWrap$() ? new D.$DvtMultilineText$$(this.$_context$) : new D.$DvtOutputText$$(this.$_context$), $childNode$$inline_10691_childNodes$$inline_6812_fitWidth$$inline_6810_fitWidth$$inline_6823_sectionGroups$$inline_6828_sections$$inline_6829_separatorDefs$$inline_6825$$ = $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$.$w$ - 
    $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$.x, this.$_isBiDi$ && ($childNode$$inline_10691_childNodes$$inline_6812_fitWidth$$inline_6810_fitWidth$$inline_6823_sectionGroups$$inline_6828_sections$$inline_6829_separatorDefs$$inline_6825$$ = $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$.$w$ - 
    $childNode$$inline_10691_childNodes$$inline_6812_fitWidth$$inline_6810_fitWidth$$inline_6823_sectionGroups$$inline_6828_sections$$inline_6829_separatorDefs$$inline_6825$$), 0 < $childNode$$inline_10691_childNodes$$inline_6812_fitWidth$$inline_6810_fitWidth$$inline_6823_sectionGroups$$inline_6828_sections$$inline_6829_separatorDefs$$inline_6825$$ && (this.$_isBiDi$ && $i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$.$alignRight$(), 
    this.$_legendTitleStyle$ && $i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$.$setCSSStyle$(new D.$DvtCSSStyle$$(this.$_legendTitleStyle$)), $i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$.$setTextString$(this.$_title$), $i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$.$setX$($availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$.x), 
    $i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$.$setY$($availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$.y), D.$DvtTextUtils$$.$fitText$($i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$, 
    $childNode$$inline_10691_childNodes$$inline_6812_fitWidth$$inline_6810_fitWidth$$inline_6823_sectionGroups$$inline_6828_sections$$inline_6829_separatorDefs$$inline_6825$$, $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$.$h$, this.$_legendContent$), $i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$.$isTruncated$() && 
    this.$_eventHandler$.$associate$($i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$, new D.$DvtSimpleObjPeer$$(this.$_title$)), ($i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$ = $i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$.$getDimensions$()) && 
    0 < $i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$.$h$))) {
      $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$.y = $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$.y + 
      $i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$.$h$ + this.$_styleMap$.rowColGap
    }
    this.$_children$ = [];
    if($childNode$$inline_10691_childNodes$$inline_6812_fitWidth$$inline_6810_fitWidth$$inline_6823_sectionGroups$$inline_6828_sections$$inline_6829_separatorDefs$$inline_6825$$ = this.$_legendNode$.$getChildNodes$()) {
      for($i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$ = 0;$i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$ < $childNode$$inline_10691_childNodes$$inline_6812_fitWidth$$inline_6810_fitWidth$$inline_6823_sectionGroups$$inline_6828_sections$$inline_6829_separatorDefs$$inline_6825$$.length;$i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$++) {
        var $childNode$$inline_6814_separators$$inline_6815_separators$$inline_6827$$ = $childNode$$inline_10691_childNodes$$inline_6812_fitWidth$$inline_6810_fitWidth$$inline_6823_sectionGroups$$inline_6828_sections$$inline_6829_separatorDefs$$inline_6825$$[$i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$];
        if("separatorDef" == $childNode$$inline_6814_separators$$inline_6815_separators$$inline_6827$$.getName() && ($childNode$$inline_6814_separators$$inline_6815_separators$$inline_6827$$ = $childNode$$inline_6814_separators$$inline_6815_separators$$inline_6827$$.$getChildNodes$(), 0 < $childNode$$inline_6814_separators$$inline_6815_separators$$inline_6827$$.length && "separator" == $childNode$$inline_6814_separators$$inline_6815_separators$$inline_6827$$[0].getName())) {
          this.$_addSeparators$ = D.$JSCompiler_alias_TRUE$$;
          break
        }
      }
      for($i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$ = 0;$i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$ < $childNode$$inline_10691_childNodes$$inline_6812_fitWidth$$inline_6810_fitWidth$$inline_6823_sectionGroups$$inline_6828_sections$$inline_6829_separatorDefs$$inline_6825$$.length;$i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$++) {
        $childNode$$inline_6814_separators$$inline_6815_separators$$inline_6827$$ = $childNode$$inline_10691_childNodes$$inline_6812_fitWidth$$inline_6810_fitWidth$$inline_6823_sectionGroups$$inline_6828_sections$$inline_6829_separatorDefs$$inline_6825$$[$i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$], $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$.x = 
        this.$_isBiDi$ ? this.$_width$ : 0, "sectionGroup" == $childNode$$inline_6814_separators$$inline_6815_separators$$inline_6827$$.getName() ? (this.$_addSeparators$ && (this.$_title$ || 1 < $i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$) && this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderSeparator$$)(this, this.$_legendContent$, $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$)), 
        this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderLegendSectionGroup$$)(this, $childNode$$inline_6814_separators$$inline_6815_separators$$inline_6827$$, this.$_legendContent$, $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$, this.$_isBiDi$))) : "section" == $childNode$$inline_6814_separators$$inline_6815_separators$$inline_6827$$.getName() && 
        (this.$_addSeparators$ && (this.$_title$ || 1 < $i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$) && this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderSeparator$$)(this, this.$_legendContent$, $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$)), 
        this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderLegendSection$$)(this, $childNode$$inline_6814_separators$$inline_6815_separators$$inline_6827$$, this.$_legendContent$, $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$, this.$_isBiDi$)))
      }
    }
    this.$_dim$ = this.$getDimensionsWithStroke$();
    for($availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$ = 0;$availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$ < 
    this.$_separators$.length;$availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$++) {
      this.$_isBiDi$ ? this.$_separators$[$availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$].$setX2$(this.$_dim$.x) : this.$_separators$[$availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$].$setX2$(this.$_dim$.$w$)
    }
    this.$_eventHandler$.$addListeners$(this);
    for($i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$ = 0;$i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$ < this.$_associations$.length;$i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$++) {
      $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$ = this.$_associations$[$i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$], this.$_eventHandler$.$associate$($availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$, 
      $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$), this.$_hidden$ && -1 < D.$DvtArrayUtils$$.$getIndex$(this.$_hidden$, $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$.$getAttributeGroup$() + 
      ":" + $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$.$getItemId$()) && (0,D.$JSCompiler_StaticMethods_filterRow$$)($availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$, 
      D.$JSCompiler_alias_TRUE$$)
    }
  }else {
    this.$_eventHandler$ = new D.$DvtCommonLegendEventManager$$(this.$_context$, this.$_legendEventHandler$, this);
    this.$_title$ = this.$_legendJSON$.label;
    this.$_isDisclosed$ = "true" == this.$_legendJSON$.disclosed;
    if($availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$ = this.$_legendJSON$.style) {
      this.$_legendTitleStyle$ = $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$["legend-title"], this.$_sectionGroupTitleStyle$ = $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$["sectionGroup-title"], 
      this.$_sectionTitleStyle$ = $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$["section-title"], this.$_legendItemStyle$ = $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$["legend-item"]
    }
    if($availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$ = this.$_legendJSON$.noWrap) {
      this.$_isWordWrap$ = "false" == $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$
    }
    $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$ = this.$_isBiDi$ ? new D.$DvtRectangle$$(this.$_width$, 0, this.$_width$, this.$_height$) : new D.$DvtRectangle$$(0, 0, this.$_width$, this.$_height$);
    this.$_legendContent$ = new D.$DvtContainer$$(this.$_context$);
    this.$addChild$(this.$_legendContent$);
    if(this.$_title$ && ($i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$ = this.$isWordWrap$() ? new D.$DvtMultilineText$$(this.$_context$) : new D.$DvtOutputText$$(this.$_context$), $childNode$$inline_10691_childNodes$$inline_6812_fitWidth$$inline_6810_fitWidth$$inline_6823_sectionGroups$$inline_6828_sections$$inline_6829_separatorDefs$$inline_6825$$ = $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$.$w$ - 
    $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$.x, this.$_isBiDi$ && ($childNode$$inline_10691_childNodes$$inline_6812_fitWidth$$inline_6810_fitWidth$$inline_6823_sectionGroups$$inline_6828_sections$$inline_6829_separatorDefs$$inline_6825$$ = $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$.$w$ - 
    $childNode$$inline_10691_childNodes$$inline_6812_fitWidth$$inline_6810_fitWidth$$inline_6823_sectionGroups$$inline_6828_sections$$inline_6829_separatorDefs$$inline_6825$$), 0 < $childNode$$inline_10691_childNodes$$inline_6812_fitWidth$$inline_6810_fitWidth$$inline_6823_sectionGroups$$inline_6828_sections$$inline_6829_separatorDefs$$inline_6825$$ && (this.$_isBiDi$ && $i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$.$alignRight$(), 
    this.$_legendTitleStyle$ && $i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$.$setCSSStyle$(new D.$DvtCSSStyle$$(this.$_legendTitleStyle$)), $i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$.$setTextString$(this.$_title$), $i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$.$setX$($availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$.x), 
    $i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$.$setY$($availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$.y), D.$DvtTextUtils$$.$fitText$($i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$, 
    $childNode$$inline_10691_childNodes$$inline_6812_fitWidth$$inline_6810_fitWidth$$inline_6823_sectionGroups$$inline_6828_sections$$inline_6829_separatorDefs$$inline_6825$$, $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$.$h$, this.$_legendContent$), $i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$.$isTruncated$() && 
    this.$_eventHandler$.$associate$($i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$, new D.$DvtSimpleObjPeer$$(this.$_title$)), ($i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$ = $i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$.$getDimensions$()) && 
    0 < $i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$.$h$))) {
      $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$.y = $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$.y + 
      $i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$.$h$ + this.$_styleMap$.rowColGap
    }
    this.$_children$ = [];
    if($childNode$$inline_10691_childNodes$$inline_6812_fitWidth$$inline_6810_fitWidth$$inline_6823_sectionGroups$$inline_6828_sections$$inline_6829_separatorDefs$$inline_6825$$ = this.$_legendJSON$.separatorDef) {
      for($i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$ = 0;$i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$ < $childNode$$inline_10691_childNodes$$inline_6812_fitWidth$$inline_6810_fitWidth$$inline_6823_sectionGroups$$inline_6828_sections$$inline_6829_separatorDefs$$inline_6825$$.length;$i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$++) {
        if(($childNode$$inline_6814_separators$$inline_6815_separators$$inline_6827$$ = $childNode$$inline_10691_childNodes$$inline_6812_fitWidth$$inline_6810_fitWidth$$inline_6823_sectionGroups$$inline_6828_sections$$inline_6829_separatorDefs$$inline_6825$$[$i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$].separator) && 0 < $childNode$$inline_6814_separators$$inline_6815_separators$$inline_6827$$.length) {
          this.$_addSeparators$ = D.$JSCompiler_alias_TRUE$$;
          break
        }
      }
    }
    $childNode$$inline_10691_childNodes$$inline_6812_fitWidth$$inline_6810_fitWidth$$inline_6823_sectionGroups$$inline_6828_sections$$inline_6829_separatorDefs$$inline_6825$$ = this.$_legendJSON$.sectionGroup;
    $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$.x = this.$_isBiDi$ ? this.$_width$ : 0;
    if($childNode$$inline_10691_childNodes$$inline_6812_fitWidth$$inline_6810_fitWidth$$inline_6823_sectionGroups$$inline_6828_sections$$inline_6829_separatorDefs$$inline_6825$$) {
      for($i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$ = 0;$i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$ < $childNode$$inline_10691_childNodes$$inline_6812_fitWidth$$inline_6810_fitWidth$$inline_6823_sectionGroups$$inline_6828_sections$$inline_6829_separatorDefs$$inline_6825$$.length;$i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$++) {
        this.$_addSeparators$ && (this.$_title$ || 1 < $i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$) && this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderSeparator$$)(this, this.$_legendContent$, $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$)), 
        this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderLegendSectionGroupJSON$$)(this, $childNode$$inline_10691_childNodes$$inline_6812_fitWidth$$inline_6810_fitWidth$$inline_6823_sectionGroups$$inline_6828_sections$$inline_6829_separatorDefs$$inline_6825$$[$i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$], this.$_legendContent$, $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$, 
        this.$_isBiDi$))
      }
    }
    if($childNode$$inline_10691_childNodes$$inline_6812_fitWidth$$inline_6810_fitWidth$$inline_6823_sectionGroups$$inline_6828_sections$$inline_6829_separatorDefs$$inline_6825$$ = this.$_legendJSON$.section) {
      for($i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$ = 0;$i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$ < $childNode$$inline_10691_childNodes$$inline_6812_fitWidth$$inline_6810_fitWidth$$inline_6823_sectionGroups$$inline_6828_sections$$inline_6829_separatorDefs$$inline_6825$$.length;$i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$++) {
        this.$_addSeparators$ && (this.$_title$ || 1 < $i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$) && this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderSeparator$$)(this, this.$_legendContent$, $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$)), 
        this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderLegendSectionJSON$$)(this, $childNode$$inline_10691_childNodes$$inline_6812_fitWidth$$inline_6810_fitWidth$$inline_6823_sectionGroups$$inline_6828_sections$$inline_6829_separatorDefs$$inline_6825$$[$i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$], this.$_legendContent$, $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$, 
        this.$_isBiDi$))
      }
    }
    this.$_dim$ = this.$getDimensionsWithStroke$();
    for($availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$ = 0;$availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$ < 
    this.$_separators$.length;$availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$++) {
      this.$_isBiDi$ ? (this.$_dim$.x = this.$_separators$[$availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$].$getX1$() - this.$_dim$.$w$, this.$_separators$[$availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$].$setX2$(this.$_dim$.x)) : 
      this.$_separators$[$availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$].$setX2$(this.$_dim$.$w$ + this.$_separators$[$availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$].$getX1$())
    }
    this.$_eventHandler$.$addListeners$(this);
    for($i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$ = 0;$i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$ < this.$_associations$.length;$i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$++) {
      $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$ = this.$_associations$[$i$$inline_10690_i$$inline_6813_i$$inline_6826_legendTitle$$inline_6809_legendTitle$$inline_6822_titleDim$$inline_6811_titleDim$$inline_6824$$], this.$_eventHandler$.$associate$($availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$, 
      $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$), this.$_hidden$ && -1 < D.$DvtArrayUtils$$.$getIndex$(this.$_hidden$, $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$.$getAttributeGroup$() + 
      ":" + $availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$.$getItemId$()) && (0,D.$JSCompiler_StaticMethods_filterRow$$)($availSpace$$inline_6808_availSpace$$inline_6821_childNodes$$inline_10689_j$$inline_6816_j$$inline_6830_legendRow$$inline_6817_legendRow$$inline_6831_legendStyleNode$$inline_10688_legendStyleNode$$inline_10697_noWrap$$inline_6807_noWrap$$inline_6820$$)
    }
  }
  this.$_hidden$ && (this.$_dim$ = this.$getDimensionsWithStroke$(), this.$FireListener$(new D.$DvtResizeEvent$$(this.$_dim$.$w$, this.$_dim$.$h$, this.$_dim$.x, this.$_dim$.y)));
  this.$_isBiDi$ && this.$_legendContent$.$setTranslateX$(-this.$_dim$.x)
};
D.$DvtCommonLegendSectionGroup$$ = function $$DvtCommonLegendSectionGroup$$$($context$$332$$, $legend$$26$$, $sectionTitle$$4$$, $sectionTitleStyle$$, $collapseTooltip$$2$$, $expandTooltip$$2$$, $disclosed$$4$$, $styleMap$$41$$) {
  this.Init($context$$332$$, $legend$$26$$, $sectionTitle$$4$$, $sectionTitleStyle$$, $collapseTooltip$$2$$, $expandTooltip$$2$$, $disclosed$$4$$, $styleMap$$41$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtCommonLegendSectionGroup$$, D.$DvtContainer$$, "DvtCommonLegendSection");
D.$DvtCommonLegendSectionGroup$$.prototype.Init = function $$DvtCommonLegendSectionGroup$$$$Init$($context$$333$$, $legend$$27$$, $sectionTitle$$5$$, $sectionTitleStyle$$1$$, $collapseTooltip$$3$$, $expandTooltip$$3$$, $disclosed$$5$$, $styleMap$$42$$) {
  D.$DvtCommonLegendSection$$.$superclass$.Init.call(this, $context$$333$$);
  this.$_title$ = $sectionTitle$$5$$;
  this.$_titleStyle$ = $sectionTitleStyle$$1$$;
  this.$_items$ = [];
  this.$_legend$ = $legend$$27$$;
  this.$_collapseTooltip$ = $collapseTooltip$$3$$;
  this.$_expandTooltip$ = $expandTooltip$$3$$;
  this.$_buttonState$ = $disclosed$$5$$ ? 0 : 1;
  this.$_styleMap$ = $styleMap$$42$$
};
D.$JSCompiler_StaticMethods__createButton$$ = function $$JSCompiler_StaticMethods__createButton$$$($JSCompiler_StaticMethods__createButton$self$$, $dwn$$8_images$$21$$, $x$$206$$, $y$$179$$, $width$$133$$, $height$$119$$, $buttonState$$2_ena$$13$$) {
  if(!$dwn$$8_images$$21$$) {
    return new D.$DvtButton$$($JSCompiler_StaticMethods__createButton$self$$.$_context$)
  }
  switch($buttonState$$2_ena$$13$$) {
    case 1:
      $buttonState$$2_ena$$13$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $dwn$$8_images$$21$$.groupColEna, $x$$206$$, $y$$179$$, $width$$133$$, $height$$119$$);
      var $ovr$$8$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $dwn$$8_images$$21$$.groupColOvr, $x$$206$$, $y$$179$$, $width$$133$$, $height$$119$$);
      $dwn$$8_images$$21$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $dwn$$8_images$$21$$.groupColDwn, $x$$206$$, $y$$179$$, $width$$133$$, $height$$119$$);
      return new D.$DvtButton$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $buttonState$$2_ena$$13$$, $ovr$$8$$, $dwn$$8_images$$21$$);
    default:
      return $buttonState$$2_ena$$13$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $dwn$$8_images$$21$$.groupExpDwn, $x$$206$$, $y$$179$$, $width$$133$$, $height$$119$$), $ovr$$8$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $dwn$$8_images$$21$$.groupExpOvr, $x$$206$$, $y$$179$$, $width$$133$$, $height$$119$$), $dwn$$8_images$$21$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $dwn$$8_images$$21$$.groupExpDwn, 
      $x$$206$$, $y$$179$$, $width$$133$$, $height$$119$$), new D.$DvtButton$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $buttonState$$2_ena$$13$$, $ovr$$8$$, $dwn$$8_images$$21$$)
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtCommonLegendSectionGroup$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_handleMouseClick$ = function $$JSCompiler_prototypeAlias$$$$_handleMouseClick$$() {
  var $bidiMultiplier$$inline_6840_diff$$inline_6841_parent$$inline_6842$$ = (0,D.$DvtAgent$isRightToLeft$$)() ? -1 : 1;
  this.$_sectionHeight$ || (this.$_sectionHeight$ = this.$getDimensionsWithStroke$().$h$ - this.$_headerHeight$);
  0 == this.$_buttonState$ ? ("alta" == this.$_styleMap$.skin ? ($bidiMultiplier$$inline_6840_diff$$inline_6841_parent$$inline_6842$$ = this.$_button$.getParent(), $bidiMultiplier$$inline_6840_diff$$inline_6841_parent$$inline_6842$$.removeChild(this.$_button$), this.$_button$ = this.$_collapsedBtn$, $bidiMultiplier$$inline_6840_diff$$inline_6841_parent$$inline_6842$$.$addChild$(this.$_button$)) : this.$_button$.$setPoints$([this.$_buttonX$ + 1.5 * $bidiMultiplier$$inline_6840_diff$$inline_6841_parent$$inline_6842$$, 
  this.$_buttonY$ + 1.5, this.$_buttonX$ + 9.5 * $bidiMultiplier$$inline_6840_diff$$inline_6841_parent$$inline_6842$$, this.$_buttonY$ + 5.5, this.$_buttonX$ + 1.5 * $bidiMultiplier$$inline_6840_diff$$inline_6841_parent$$inline_6842$$, this.$_buttonY$ + 9.5]), this.$_itemsVisible$ = D.$JSCompiler_alias_FALSE$$, this.$_buttonState$ = 1, $bidiMultiplier$$inline_6840_diff$$inline_6841_parent$$inline_6842$$ = -this.$_sectionHeight$) : ("alta" == this.$_styleMap$.skin ? ($bidiMultiplier$$inline_6840_diff$$inline_6841_parent$$inline_6842$$ = 
  this.$_button$.getParent(), $bidiMultiplier$$inline_6840_diff$$inline_6841_parent$$inline_6842$$.removeChild(this.$_button$), this.$_button$ = this.$_expandedBtn$, $bidiMultiplier$$inline_6840_diff$$inline_6841_parent$$inline_6842$$.$addChild$(this.$_button$)) : this.$_button$.$setPoints$([this.$_buttonX$ + 1.5 * $bidiMultiplier$$inline_6840_diff$$inline_6841_parent$$inline_6842$$, this.$_buttonY$ + 1.5, this.$_buttonX$ + 9.5 * $bidiMultiplier$$inline_6840_diff$$inline_6841_parent$$inline_6842$$, 
  this.$_buttonY$ + 1.5, this.$_buttonX$ + 5.5 * $bidiMultiplier$$inline_6840_diff$$inline_6841_parent$$inline_6842$$, this.$_buttonY$ + 9.5]), this.$_itemsVisible$ = D.$JSCompiler_alias_TRUE$$, this.$_buttonState$ = 0, $bidiMultiplier$$inline_6840_diff$$inline_6841_parent$$inline_6842$$ = this.$_sectionHeight$);
  if(this.$_itemsVisible$) {
    for(var $i$$inline_6843$$ = 0;$i$$inline_6843$$ < this.$_items$.length;$i$$inline_6843$$++) {
      this.$addChild$(this.$_items$[$i$$inline_6843$$])
    }
  }else {
    for($i$$inline_6843$$ = 0;$i$$inline_6843$$ < this.$_items$.length;$i$$inline_6843$$++) {
      this.removeChild(this.$_items$[$i$$inline_6843$$])
    }
  }
  this.$_legend$.update(this, $bidiMultiplier$$inline_6840_diff$$inline_6841_parent$$inline_6842$$)
};
D.$JSCompiler_prototypeAlias$$.$_handleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$_handleMouseOver$$() {
  "alta" == !this.$_styleMap$.skin && this.$_button$.$setSolidFill$(this.$_styleMap$.ovr)
};
D.$JSCompiler_prototypeAlias$$.$_handleMouseOut$ = function $$JSCompiler_prototypeAlias$$$$_handleMouseOut$$() {
  "alta" == !this.$_styleMap$.skin && this.$_button$.$setSolidFill$(this.$_styleMap$.ena)
};
D.$JSCompiler_prototypeAlias$$.$_handleMouseDown$ = function $$JSCompiler_prototypeAlias$$$$_handleMouseDown$$() {
  "alta" == !this.$_styleMap$.skin && this.$_button$.$setSolidFill$(this.$_styleMap$.dwn)
};
D.$JSCompiler_prototypeAlias$$.$addItem$ = function $$JSCompiler_prototypeAlias$$$$addItem$$($item$$37$$) {
  return this.$_items$.push($item$$37$$)
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($collapsibleHitArea_dim$$28_parent$$59$$, $availSpace$$101$$, $isBiDi$$6$$) {
  $collapsibleHitArea_dim$$28_parent$$59$$.$addChild$(this);
  $collapsibleHitArea_dim$$28_parent$$59$$ = new D.$DvtContainer$$(this.$_context$);
  this.$addChild$($collapsibleHitArea_dim$$28_parent$$59$$);
  this.$_buttonX$ = $availSpace$$101$$.x;
  this.$_buttonY$ = $availSpace$$101$$.y;
  var $bidiMultiplier$$inline_6849_sectionTitle$$6$$ = $isBiDi$$6$$ ? -1 : 1;
  if("alta" == this.$_styleMap$.skin) {
    var $fitWidth$$2_images$$inline_6850$$ = this.$_legend$.$_images$;
    this.$_expandedBtn$ = (0,D.$JSCompiler_StaticMethods__createButton$$)(this, $fitWidth$$2_images$$inline_6850$$, this.$_buttonX$, this.$_buttonY$, this.$_styleMap$.buttonSize, this.$_styleMap$.buttonSize, 0);
    this.$_collapsedBtn$ = (0,D.$JSCompiler_StaticMethods__createButton$$)(this, $fitWidth$$2_images$$inline_6850$$, this.$_buttonX$, this.$_buttonY$, this.$_styleMap$.buttonSize, this.$_styleMap$.buttonSize, 1);
    this.$_button$ = this.$_expandedBtn$
  }else {
    this.$_button$ = new D.$DvtPolygon$$(this.$_context$, [this.$_buttonX$ + 1.5 * $bidiMultiplier$$inline_6849_sectionTitle$$6$$, this.$_buttonY$ + 1.5, this.$_buttonX$ + 9.5 * $bidiMultiplier$$inline_6849_sectionTitle$$6$$, this.$_buttonY$ + 1.5, this.$_buttonX$ + 5.5 * $bidiMultiplier$$inline_6849_sectionTitle$$6$$, this.$_buttonY$ + 9.5]), this.$_button$.$setSolidFill$(this.$_styleMap$.ena)
  }
  $collapsibleHitArea_dim$$28_parent$$59$$.$addChild$(this.$_button$);
  if((0,D.$DvtAgent$isTouchDevice$$)()) {
    $collapsibleHitArea_dim$$28_parent$$59$$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$_handleMouseClick$, D.$JSCompiler_alias_FALSE$$, this)
  }else {
    var $thisRef$$inline_6851$$ = this;
    this.$_legend$.$getEventManager$().$associate$($collapsibleHitArea_dim$$28_parent$$59$$, {$getTooltip$:function() {
      return 0 == $thisRef$$inline_6851$$.$_buttonState$ ? $thisRef$$inline_6851$$.$_collapseTooltip$ : $thisRef$$inline_6851$$.$_expandTooltip$
    }});
    $collapsibleHitArea_dim$$28_parent$$59$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$_handleMouseClick$, D.$JSCompiler_alias_FALSE$$, this);
    $collapsibleHitArea_dim$$28_parent$$59$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$_handleMouseOver$, D.$JSCompiler_alias_FALSE$$, this);
    $collapsibleHitArea_dim$$28_parent$$59$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$_handleMouseOut$, D.$JSCompiler_alias_FALSE$$, this);
    $collapsibleHitArea_dim$$28_parent$$59$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, this.$_handleMouseDown$, D.$JSCompiler_alias_FALSE$$, this)
  }
  this.$_buttonState$ = 0;
  $availSpace$$101$$.x += (("alta" == this.$_styleMap$.skin && $isBiDi$$6$$ ? 0 : this.$_styleMap$.buttonSize) + this.$_styleMap$.rowColGap) * $bidiMultiplier$$inline_6849_sectionTitle$$6$$;
  this.$_title$ && ($bidiMultiplier$$inline_6849_sectionTitle$$6$$ = this.$_legend$.$isWordWrap$() ? new D.$DvtMultilineText$$(this.$_context$) : new D.$DvtOutputText$$(this.$_context$), $fitWidth$$2_images$$inline_6850$$ = $availSpace$$101$$.$w$ - $availSpace$$101$$.x, $isBiDi$$6$$ && ($fitWidth$$2_images$$inline_6850$$ = $availSpace$$101$$.$w$ - $fitWidth$$2_images$$inline_6850$$), 0 < $fitWidth$$2_images$$inline_6850$$ && ($isBiDi$$6$$ && $bidiMultiplier$$inline_6849_sectionTitle$$6$$.$alignRight$(), 
  this.$_titleStyle$ && $bidiMultiplier$$inline_6849_sectionTitle$$6$$.$setCSSStyle$(new D.$DvtCSSStyle$$(this.$_titleStyle$)), $bidiMultiplier$$inline_6849_sectionTitle$$6$$.$setTextString$(this.$_title$), $bidiMultiplier$$inline_6849_sectionTitle$$6$$.$setX$($availSpace$$101$$.x), $bidiMultiplier$$inline_6849_sectionTitle$$6$$.$setY$($availSpace$$101$$.y), D.$DvtTextUtils$$.$fitText$($bidiMultiplier$$inline_6849_sectionTitle$$6$$, $fitWidth$$2_images$$inline_6850$$, $availSpace$$101$$.$h$, $collapsibleHitArea_dim$$28_parent$$59$$), 
  $bidiMultiplier$$inline_6849_sectionTitle$$6$$.$isTruncated$() && this.$_legend$.$getEventManager$().$associate$($bidiMultiplier$$inline_6849_sectionTitle$$6$$, new D.$DvtSimpleObjPeer$$(this.$_title$)), $collapsibleHitArea_dim$$28_parent$$59$$ = $bidiMultiplier$$inline_6849_sectionTitle$$6$$.$getDimensions$(), $availSpace$$101$$.y = $availSpace$$101$$.y + window.Math.max($collapsibleHitArea_dim$$28_parent$$59$$ ? $collapsibleHitArea_dim$$28_parent$$59$$.$h$ : 0, this.$_styleMap$.buttonSize) + 
  this.$_styleMap$.rowColGap));
  $availSpace$$101$$.x += (this.$_styleMap$.buttonSize + this.$_styleMap$.rowColGap) * ($isBiDi$$6$$ ? 1 : -1);
  this.$_headerHeight$ = this.$getDimensionsWithStroke$().$h$
};
D.$DvtCommonLegendSection$$ = function $$DvtCommonLegendSection$$$($context$$334$$, $legend$$28$$, $sectionTitle$$7$$, $sectionTitleStyle$$2$$, $styleMap$$43$$) {
  this.Init($context$$334$$, $legend$$28$$, $sectionTitle$$7$$, $sectionTitleStyle$$2$$, $styleMap$$43$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtCommonLegendSection$$, D.$DvtContainer$$, "DvtCommonLegendSection");
D.$DvtCommonLegendSection$$.prototype.Init = function $$DvtCommonLegendSection$$$$Init$($context$$335$$, $legend$$29$$, $sectionTitle$$8$$, $sectionTitleStyle$$3$$, $styleMap$$44$$) {
  D.$DvtCommonLegendSection$$.$superclass$.Init.call(this, $context$$335$$);
  this.$_title$ = $sectionTitle$$8$$;
  this.$_titleStyle$ = $sectionTitleStyle$$3$$;
  this.$_items$ = [];
  this.$_legend$ = $legend$$29$$;
  this.$_styleMap$ = $styleMap$$44$$
};
D.$DvtCommonLegendSection$$.prototype.$addItem$ = function $$DvtCommonLegendSection$$$$$addItem$$($item$$38$$) {
  return this.$_items$.push($item$$38$$)
};
D.$DvtCommonLegendSection$$.prototype.$getItems$ = (0,D.$JSCompiler_get$$)("$_items$");
D.$DvtCommonLegendSection$$.prototype.$render$ = function $$DvtCommonLegendSection$$$$$render$$($parent$$60_sectionTitle$$9$$, $availSpace$$102$$, $dim$$29_isBiDi$$7$$) {
  $parent$$60_sectionTitle$$9$$.$addChild$(this);
  if(this.$_title$) {
    $parent$$60_sectionTitle$$9$$ = this.$_legend$.$isWordWrap$() ? new D.$DvtMultilineText$$(this.$_context$) : new D.$DvtOutputText$$(this.$_context$);
    var $fitWidth$$3$$ = $availSpace$$102$$.$w$ - $availSpace$$102$$.x;
    $dim$$29_isBiDi$$7$$ && ($fitWidth$$3$$ = $availSpace$$102$$.$w$ - $fitWidth$$3$$);
    0 < $fitWidth$$3$$ && ($dim$$29_isBiDi$$7$$ && $parent$$60_sectionTitle$$9$$.$alignRight$(), this.$_titleStyle$ && $parent$$60_sectionTitle$$9$$.$setCSSStyle$(new D.$DvtCSSStyle$$(this.$_titleStyle$)), $parent$$60_sectionTitle$$9$$.$setTextString$(this.$_title$), $parent$$60_sectionTitle$$9$$.$setX$($availSpace$$102$$.x), $parent$$60_sectionTitle$$9$$.$setY$($availSpace$$102$$.y), D.$DvtTextUtils$$.$fitText$($parent$$60_sectionTitle$$9$$, $fitWidth$$3$$, $availSpace$$102$$.$h$, this), $parent$$60_sectionTitle$$9$$.$isTruncated$() && 
    this.$_legend$.$getEventManager$().$associate$($parent$$60_sectionTitle$$9$$, new D.$DvtSimpleObjPeer$$(this.$_title$)), $dim$$29_isBiDi$$7$$ = $parent$$60_sectionTitle$$9$$.$getDimensions$(), $availSpace$$102$$.y = $availSpace$$102$$.y + ($dim$$29_isBiDi$$7$$ ? $dim$$29_isBiDi$$7$$.$h$ : 0) + this.$_styleMap$.rowColGap)
  }
};
D.$DvtCommonLegendRow$$ = function $$DvtCommonLegendRow$$$($context$$336$$, $legend$$30$$, $prop$$18$$, $itemStyle$$2$$, $styleMap$$45$$) {
  this.Init($context$$336$$, $legend$$30$$, $prop$$18$$, $itemStyle$$2$$, $styleMap$$45$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtCommonLegendRow$$, D.$DvtContainer$$, "DvtCommonLegendRow");
D.$JSCompiler_prototypeAlias$$ = D.$DvtCommonLegendRow$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$337$$, $legend$$31$$, $prop$$19$$, $itemStyle$$3$$, $styleMap$$46$$) {
  D.$DvtCommonLegendRow$$.$superclass$.Init.call(this, $context$$337$$);
  this.$_legend$ = $legend$$31$$;
  this.$_prop$ = $prop$$19$$;
  this.$_itemStyle$ = $itemStyle$$3$$;
  this.$_bHidden$ = D.$JSCompiler_alias_FALSE$$;
  this.$_styleMap$ = $styleMap$$46$$
};
D.$JSCompiler_prototypeAlias$$.$getAttributeGroup$ = function $$JSCompiler_prototypeAlias$$$$getAttributeGroup$$() {
  return this.$_prop$.attributeGroupId
};
D.$JSCompiler_prototypeAlias$$.$getItemId$ = function $$JSCompiler_prototypeAlias$$$$getItemId$$() {
  return this.$_prop$.itemId
};
D.$JSCompiler_prototypeAlias$$.$getHideAttributes$ = function $$JSCompiler_prototypeAlias$$$$getHideAttributes$$() {
  return this.$_prop$.hideAttrs
};
D.$JSCompiler_prototypeAlias$$.$setText$ = (0,D.$JSCompiler_set$$)("$_text$");
D.$JSCompiler_prototypeAlias$$.setMarker = function $$JSCompiler_prototypeAlias$$$setMarker$($url$$27$$, $shape$$47$$, $color$$56$$, $pattern$$15$$, $opacity$$7$$) {
  this.$_url$ = $url$$27$$;
  this.$_shape$ = $shape$$47$$;
  this.$_color$ = $color$$56$$ ? $color$$56$$ : "#000000";
  this.$_pattern$ = $pattern$$15$$;
  this.$_opacity$ = $opacity$$7$$
};
D.$JSCompiler_StaticMethods_filterRow$$ = function $$JSCompiler_StaticMethods_filterRow$$$($JSCompiler_StaticMethods_filterRow$self$$, $suppressResize$$) {
  $JSCompiler_StaticMethods_filterRow$self$$.$_bHidden$ = !$JSCompiler_StaticMethods_filterRow$self$$.$_bHidden$;
  $JSCompiler_StaticMethods_filterRow$self$$.$_marker$.$setHollow$($JSCompiler_StaticMethods_filterRow$self$$.$_color$);
  $JSCompiler_StaticMethods_filterRow$self$$.$UpdateAriaLabel$();
  $suppressResize$$ || ($JSCompiler_StaticMethods_filterRow$self$$.$_legend$.$_dim$ = $JSCompiler_StaticMethods_filterRow$self$$.$_legend$.$getDimensionsWithStroke$(), $JSCompiler_StaticMethods_filterRow$self$$.$_legend$.$FireListener$(new D.$DvtResizeEvent$$($JSCompiler_StaticMethods_filterRow$self$$.$_legend$.$_dim$.$w$, $JSCompiler_StaticMethods_filterRow$self$$.$_legend$.$_dim$.$h$, $JSCompiler_StaticMethods_filterRow$self$$.$_legend$.$_dim$.x, $JSCompiler_StaticMethods_filterRow$self$$.$_legend$.$_dim$.y)))
};
D.$DvtCommonLegendRow$$.prototype.$getAriaLabel$ = function $$DvtCommonLegendRow$$$$$getAriaLabel$$() {
  if(this.$_legend$.$_showHideEnabled$) {
    var $bundle$$16$$ = this.$_legend$.$__getBundle$(), $states$$10$$ = [(0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$16$$, this.$_bHidden$ ? "STATE_HIDDEN" : "STATE_VISIBLE")];
    return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$_text$, $states$$10$$, $bundle$$16$$)
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtCommonLegendRow$$.prototype.$UpdateAriaLabel$ = function $$DvtCommonLegendRow$$$$$UpdateAriaLabel$$() {
  (0,D.$DvtAgent$deferAriaCreation$$)() || (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)(this, "label", this.$getAriaLabel$())
};
D.$DvtCommonLegendRow$$.prototype.$render$ = function $$DvtCommonLegendRow$$$$$render$$($parent$$61_rowX$$, $availSpace$$103$$, $isBiDi$$8$$) {
  if(this.$_prop$) {
    var $JSCompiler_StaticMethods_addAttrLookup$self$$inline_6853_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_6861_fitWidth$$4_isCustomShape$$ = this.$_legend$, $attributeGroupId$$inline_6854_hideAttrs$$inline_6862_text$$66$$ = this.$_prop$.attributeGroupId, $itemId$$inline_6855$$ = this.$_prop$.itemId;
    $JSCompiler_StaticMethods_addAttrLookup$self$$inline_6853_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_6861_fitWidth$$4_isCustomShape$$.$_attrLookUp$[$attributeGroupId$$inline_6854_hideAttrs$$inline_6862_text$$66$$] == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_addAttrLookup$self$$inline_6853_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_6861_fitWidth$$4_isCustomShape$$.$_attrLookUp$[$attributeGroupId$$inline_6854_hideAttrs$$inline_6862_text$$66$$] = {});
    $JSCompiler_StaticMethods_addAttrLookup$self$$inline_6853_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_6861_fitWidth$$4_isCustomShape$$.$_attrLookUp$[$attributeGroupId$$inline_6854_hideAttrs$$inline_6862_text$$66$$][$itemId$$inline_6855$$] = this;
    this.$_legend$.$_associations$.push(this);
    $JSCompiler_StaticMethods_addAttrLookup$self$$inline_6853_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_6861_fitWidth$$4_isCustomShape$$ = this.$_legend$;
    $attributeGroupId$$inline_6854_hideAttrs$$inline_6862_text$$66$$ = this.$_prop$.hideAttrs;
    $JSCompiler_StaticMethods_addAttrLookup$self$$inline_6853_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_6861_fitWidth$$4_isCustomShape$$.$_hideAttrsLookUp$[$attributeGroupId$$inline_6854_hideAttrs$$inline_6862_text$$66$$] || ($JSCompiler_StaticMethods_addAttrLookup$self$$inline_6853_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_6861_fitWidth$$4_isCustomShape$$.$_hideAttrsLookUp$[$attributeGroupId$$inline_6854_hideAttrs$$inline_6862_text$$66$$] = this)
  }
  $parent$$61_rowX$$.$addChild$(this);
  $parent$$61_rowX$$ = $availSpace$$103$$.x;
  $isBiDi$$8$$ && ($availSpace$$103$$.x -= this.$_styleMap$.indicatorSize);
  var $marker$$22_textDim$$2$$;
  if(this.$_url$ || this.$_shape$ != D.$JSCompiler_alias_NULL$$) {
    $marker$$22_textDim$$2$$ = new D.$DvtMarker$$(this.$_context$, this.$_url$ ? [this.$_url$] : this.$_shape$, this.$_styleMap$[D.DvtCommonLegend.$SKIN_NAME$], $availSpace$$103$$.x, $availSpace$$103$$.y, this.$_styleMap$.indicatorSize, this.$_styleMap$.indicatorSize), $JSCompiler_StaticMethods_addAttrLookup$self$$inline_6853_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_6861_fitWidth$$4_isCustomShape$$ = D.$DvtMarkerUtils$$.$getCustomMarkerInfo$(this.$_context$, this.$_shape$), !this.$_url$ && 
    !$JSCompiler_StaticMethods_addAttrLookup$self$$inline_6853_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_6861_fitWidth$$4_isCustomShape$$ && (this.$_pattern$ ? $marker$$22_textDim$$2$$.$setFill$(new D.$DvtPatternFill$$(this.$_pattern$, this.$_color$)) : $marker$$22_textDim$$2$$.$setSolidFill$(this.$_color$, this.$_opacity$)), this.$addChild$($marker$$22_textDim$$2$$), $availSpace$$103$$.x = $isBiDi$$8$$ ? $availSpace$$103$$.x - this.$_styleMap$.rowColGap : $availSpace$$103$$.x + this.$_styleMap$.indicatorSize + 
    this.$_styleMap$.rowColGap
  }
  this.$_marker$ = $marker$$22_textDim$$2$$;
  $marker$$22_textDim$$2$$ = new D.$DvtRectangle$$;
  this.$_text$ && (this.$_legend$.$_showHideEnabled$ && (this.$setAriaRole$("img"), this.$UpdateAriaLabel$()), $JSCompiler_StaticMethods_addAttrLookup$self$$inline_6853_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_6861_fitWidth$$4_isCustomShape$$ = $availSpace$$103$$.$w$ - $availSpace$$103$$.x, $isBiDi$$8$$ && ($JSCompiler_StaticMethods_addAttrLookup$self$$inline_6853_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_6861_fitWidth$$4_isCustomShape$$ = $availSpace$$103$$.$w$ - $JSCompiler_StaticMethods_addAttrLookup$self$$inline_6853_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_6861_fitWidth$$4_isCustomShape$$), 
  0 > $JSCompiler_StaticMethods_addAttrLookup$self$$inline_6853_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_6861_fitWidth$$4_isCustomShape$$ ? this.$_legend$.$getEventManager$().$associate$(this.$_marker$, new D.$DvtSimpleObjPeer$$(this.$_text$)) : ($attributeGroupId$$inline_6854_hideAttrs$$inline_6862_text$$66$$ = this.$_legend$.$isWordWrap$() ? new D.$DvtMultilineText$$(this.$_context$) : new D.$DvtOutputText$$(this.$_context$), $isBiDi$$8$$ && $attributeGroupId$$inline_6854_hideAttrs$$inline_6862_text$$66$$.$alignRight$(), 
  this.$_itemStyle$ && $attributeGroupId$$inline_6854_hideAttrs$$inline_6862_text$$66$$.$setCSSStyle$(new D.$DvtCSSStyle$$(this.$_itemStyle$)), $attributeGroupId$$inline_6854_hideAttrs$$inline_6862_text$$66$$.$setTextString$(this.$_text$), $attributeGroupId$$inline_6854_hideAttrs$$inline_6862_text$$66$$.$setX$($availSpace$$103$$.x), $attributeGroupId$$inline_6854_hideAttrs$$inline_6862_text$$66$$.$setY$($availSpace$$103$$.y), D.$DvtTextUtils$$.$fitText$($attributeGroupId$$inline_6854_hideAttrs$$inline_6862_text$$66$$, 
  $JSCompiler_StaticMethods_addAttrLookup$self$$inline_6853_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_6861_fitWidth$$4_isCustomShape$$, $availSpace$$103$$.$h$, this) ? ($marker$$22_textDim$$2$$ = $attributeGroupId$$inline_6854_hideAttrs$$inline_6862_text$$66$$.$getDimensions$(), $attributeGroupId$$inline_6854_hideAttrs$$inline_6862_text$$66$$.$isTruncated$() && this.$_legend$.$getEventManager$().$associate$($attributeGroupId$$inline_6854_hideAttrs$$inline_6862_text$$66$$, new D.$DvtSimpleObjPeer$$(this.$_text$))) : 
  this.$_legend$.$getEventManager$().$associate$(this.$_marker$, new D.$DvtSimpleObjPeer$$(this.$_text$))));
  $availSpace$$103$$.y = $availSpace$$103$$.y + window.Math.max(this.$_styleMap$.indicatorSize, $marker$$22_textDim$$2$$.$h$) + this.$_styleMap$.rowColGap;
  $availSpace$$103$$.x = $parent$$61_rowX$$
};
D.$DvtCommonLegendEventManager$$ = function $$DvtCommonLegendEventManager$$$($context$$338$$, $callback$$111$$, $legend$$32$$) {
  this.Init($context$$338$$, $callback$$111$$, $legend$$32$$);
  this.$_legend$ = $legend$$32$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtCommonLegendEventManager$$, D.$DvtEventManager$$, "DvtCommonLegendEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtCommonLegendEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$502$$) {
  D.$DvtCommonLegendEventManager$$.$superclass$.$OnClick$.call(this, $event$$502$$);
  this.$_handleClick$($event$$502$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$503$$) {
  D.$DvtCommonLegendEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$503$$);
  (0,D.$JSCompiler_StaticMethods__handleRollOver$$)(this, $event$$503$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$504$$) {
  D.$DvtCommonLegendEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$504$$);
  (0,D.$JSCompiler_StaticMethods__handleRollOver$$)(this, $event$$504$$)
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchClick$$($event$$505$$) {
  D.$DvtCommonLegendEventManager$$.$superclass$.$OnComponentTouchClick$.call(this, $event$$505$$);
  this.$_handleClick$($event$$505$$)
};
D.$JSCompiler_prototypeAlias$$.$_handleClick$ = function $$JSCompiler_prototypeAlias$$$$_handleClick$$($event$$506_listItemEvent$$inline_6870$$) {
  if(this.$_legend$.$_showHideEnabled$) {
    var $obj$$183$$ = this.$GetLogicalObject$($event$$506_listItemEvent$$inline_6870$$.target);
    if($obj$$183$$ instanceof D.$DvtCommonLegendRow$$) {
      var $listItemId$$inline_6868$$ = $obj$$183$$.$getItemId$(), $attributeGroupId$$inline_6869$$ = $obj$$183$$.$getAttributeGroup$();
      (0,D.$JSCompiler_StaticMethods_filterRow$$)($obj$$183$$);
      $event$$506_listItemEvent$$inline_6870$$ = new D.$DvtListItemEvent$$($listItemId$$inline_6868$$, $attributeGroupId$$inline_6869$$, $obj$$183$$.$_bHidden$ ? "hide" : "show", $event$$506_listItemEvent$$inline_6870$$);
      this.$_legend$.$FireListener$($event$$506_listItemEvent$$inline_6870$$)
    }
  }
};
D.$JSCompiler_StaticMethods__handleRollOver$$ = function $$JSCompiler_StaticMethods__handleRollOver$$$($JSCompiler_StaticMethods__handleRollOver$self$$, $event$$507$$) {
  var $obj$$184$$ = $JSCompiler_StaticMethods__handleRollOver$self$$.$GetLogicalObject$($event$$507$$.target);
  if($obj$$184$$ instanceof D.$DvtCommonLegendRow$$) {
    if($JSCompiler_StaticMethods__handleRollOver$self$$.$_legend$.$_rollOverEnabled$) {
      var $listItemId$$inline_6875_rollOverEvent$$inline_6877$$ = $obj$$184$$.$getItemId$(), $attributeGroupId$$inline_6876$$ = $obj$$184$$.$getAttributeGroup$(), $listItemId$$inline_6875_rollOverEvent$$inline_6877$$ = new D.$DvtLegendItemRollOverEvent$$($listItemId$$inline_6875_rollOverEvent$$inline_6877$$, $attributeGroupId$$inline_6876$$, $obj$$184$$.$getHideAttributes$(), $event$$507$$.type, $event$$507$$);
      $JSCompiler_StaticMethods__handleRollOver$self$$.$_legend$.$FireListener$($listItemId$$inline_6875_rollOverEvent$$inline_6877$$)
    }
    $JSCompiler_StaticMethods__handleRollOver$self$$.$_legend$.$_showHideEnabled$ && $JSCompiler_StaticMethods__handleRollOver$self$$.$UpdateActiveElement$($obj$$184$$)
  }
};
});