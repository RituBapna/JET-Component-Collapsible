/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue", "ojs/ojbutton"], function($oj$$34$$, $$$$34$$) {
  $oj$$34$$.$__registerWidget$("oj.ojInputNumber", $$$$34$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", options:{converter:$oj$$34$$.$Validation$.$converterFactory$($oj$$34$$.$ConverterFactory$.CONVERTER_TYPE_NUMBER).createConverter(), max:void 0, min:void 0, placeholder:void 0, readOnly:void 0, step:void 0}, getNodeBySubId:function($locator$$27$$) {
    var $node$$82$$ = this._superApply(arguments), $subId$$16$$;
    $node$$82$$ || ($subId$$16$$ = $locator$$27$$.subId, "oj-inputnumber-up" === $subId$$16$$ && ($node$$82$$ = this.widget().find(".oj-inputnumber-up")[0]), "oj-inputnumber-down" === $subId$$16$$ && ($node$$82$$ = this.widget().find(".oj-inputnumber-down")[0]), "oj-inputnumber-input" === $subId$$16$$ && ($node$$82$$ = this.widget().find(".oj-inputnumber-input")[0]));
    return $node$$82$$ || null;
  }, refresh:function() {
    this._super();
    this.$_setup$();
  }, stepDown:function($steps$$) {
    this.$_step$($steps$$, !1);
  }, stepUp:function($steps$$1$$) {
    this.$_step$($steps$$1$$, !0);
  }, widget:function() {
    return this.$uiInputNumber$;
  }, _InitOptions:function($originalDefaults$$10$$, $constructorOptions$$11$$) {
    this._superApply(arguments);
    $oj$$34$$.$EditableValueUtils$.$initializeOptionsFromDom$([{attribute:"disabled", defaultOptionValue:!1, validateOption:!0}, {attribute:"pattern", defaultOptionValue:""}, {attribute:"placeholder", defaultOptionValue:""}, {attribute:"value", defaultOptionValue:null}, {attribute:"readonly", option:"readOnly", defaultOptionValue:!1, validateOption:!0}, {attribute:"required", defaultOptionValue:!1, coerceDomValue:!0, validateOption:!0}, {attribute:"title", defaultOptionValue:""}, {attribute:"min", 
    defaultOptionValue:null}, {attribute:"max", defaultOptionValue:null}, {attribute:"step", defaultOptionValue:1}], $constructorOptions$$11$$, this);
    this.options.value = this.$_coerceInputNumberValue$(this.options.value);
    null != this.options.step && (this.options.step = this.$_parseStep$(this.options.step));
    null != this.options.min && (this.options.min = this.$_parse$("min", this.options.min));
    null != this.options.max && (this.options.max = this.$_parse$("max", this.options.max));
    if (null != this.options.min && null != this.options.max && this.options.max < this.options.min) {
      throw Error("ojInputNumber's max must not be less than min");
    }
  }, _ComponentCreate:function() {
    var $node$$83$$ = this.element;
    this._super();
    this.$_draw$();
    this._on(this.$_events$);
    this._on(this.window, {beforeunload:function() {
      $node$$83$$.removeAttr("autocomplete");
    }});
    $node$$83$$.removeAttr("pattern");
    this.$_inputNumberDefaultValidators$ = {};
  }, $_AfterCreate$:function() {
    this._super();
    this.$_setup$();
  }, $_AfterSetOption$:function($option$$24$$, $previous$$8$$, $flags$$41$$) {
    this._superApply(arguments);
    switch($option$$24$$) {
      case "min":
      ;
      case "max":
        this.$_Refresh$($option$$24$$, this.options[$option$$24$$]);
    }
  }, _setOption:function($key$$124$$, $value$$216$$, $flags$$42$$) {
    "value" === $key$$124$$ && ($value$$216$$ = this.$_coerceInputNumberValue$($value$$216$$));
    if ("max" === $key$$124$$ || "min" === $key$$124$$) {
      $value$$216$$ = this.$_parse$($key$$124$$, $value$$216$$);
    }
    "step" === $key$$124$$ && ($value$$216$$ = this.$_parseStep$($value$$216$$));
    this._superApply(arguments);
    if ("max" === $key$$124$$ || "min" === $key$$124$$) {
      this.$_createRangeValidator$(), this.$_AfterSetOptionValidators$();
    }
    "disabled" === $key$$124$$ && this.element.prop("disabled", !!$value$$216$$);
    "readOnly" === $key$$124$$ && (this.element.prop("readonly", !!$value$$216$$), this.$_refreshStateTheming$("readOnly", this.options.readOnly), this.$_refreshRoleSpinbutton$("readOnly", this.options.readOnly));
  }, _destroy:function() {
    this.element.removeClass("oj-inputnumber-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow").removeAttr("aria-valuetext").removeAttr("aria-disabled");
    this.element.attr("type", this.saveType);
    this._super();
    this._off(this.element, "keydown keyup focus blur mousedown mouseup mouseenter mouseleave");
    this.$uiInputNumber$.replaceWith(this.element);
    clearTimeout(this.$timer$);
  }, $_Refresh$:function($name$$91$$, $value$$217$$, $forceDisplayValueRefresh$$1$$) {
    this._superApply(arguments);
    var $valueMinMax$$ = "value" === $name$$91$$ || "max" === $name$$91$$ || "min" === $name$$91$$;
    $valueMinMax$$ && this.$_refreshAriaMinMaxValue$();
    ($valueMinMax$$ || "disabled" === $name$$91$$) && this.$_updateButtons$();
  }, $_CanSetValue$:function() {
    return!this._superApply(arguments) || this.options.readOnly ? !1 : !0;
  }, $_GetConverter$:function() {
    return this.options.converter ? this._superApply(arguments) : $$$$34$$.oj.ojInputNumber.prototype.options.converter;
  }, $_GetImplicitValidators$:function() {
    var $ret$$44$$ = this._superApply(arguments);
    null == this.options.min && null == this.options.max || this.$_createRangeValidator$();
    return $$$$34$$.extend(this.$_inputNumberDefaultValidators$, $ret$$44$$);
  }, _GetDefaultStyleClass:function() {
    return "oj-inputnumber";
  }, $_events$:{keydown:function($event$$376$$) {
    $event$$376$$.keyCode === $$$$34$$.ui.keyCode.ENTER ? (this.$_blurEnterSetValue$($event$$376$$), $event$$376$$.preventDefault()) : this.$_start$() && this.$_keydown$($event$$376$$) && $event$$376$$.preventDefault();
  }, keyup:function($event$$377$$) {
    this.$_stop$($event$$377$$);
  }, focus:function() {
    this.previous = this.element.val();
  }, blur:function($event$$378$$) {
    this.$cancelBlur$ ? delete this.$cancelBlur$ : this.$_blurEnterSetValue$($event$$378$$);
  }, "mousedown .oj-inputnumber-button":function($event$$379$$) {
    function $checkFocus$$1$$() {
      this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = $previous$$9$$, this._delay(function() {
        this.previous = $previous$$9$$;
      }));
    }
    var $previous$$9$$;
    $previous$$9$$ = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val();
    $event$$379$$.preventDefault();
    $checkFocus$$1$$.call(this);
    this.$cancelBlur$ = !0;
    this._delay(function() {
      delete this.$cancelBlur$;
      $checkFocus$$1$$.call(this);
    });
    this.$_start$();
    this.$_repeat$(null, $$$$34$$($event$$379$$.currentTarget).hasClass("oj-inputnumber-up") ? 1 : -1, $event$$379$$);
  }, "mouseup .oj-inputnumber-button":function($event$$380$$) {
    this.$_stop$($event$$380$$);
  }, "mouseenter .oj-inputnumber-button":function($event$$381$$) {
    $$$$34$$($event$$381$$.currentTarget).hasClass("oj-active") && (this.$_start$(), this.$_repeat$(null, $$$$34$$($event$$381$$.currentTarget).hasClass("oj-inputnumber-up") ? 1 : -1, $event$$381$$));
  }, "mouseleave .oj-inputnumber-button":function($event$$382$$) {
    this.$_stop$($event$$382$$);
  }}, $_BUNDLE_KEY$:{$_TOOLTIP_DECREMENT$:"tooltipDecrement", $_TOOLTIP_INCREMENT$:"tooltipIncrement"}, $_OPTION_TO_CSS_MAPPING$:{readOnly:"oj-read-only"}, $_setup$:function() {
    var $incrementString$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TOOLTIP_INCREMENT$), $decrementString$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TOOLTIP_DECREMENT$);
    this.$uiInputNumber$.find(".oj-inputnumber-up").ojButton({display:"icons", icons:{start:"oj-component-icon oj-inputnumber-up-icon"}, label:$incrementString$$});
    this.$uiInputNumber$.find(".oj-inputnumber-down").ojButton({display:"icons", icons:{start:"oj-component-icon oj-inputnumber-down-icon"}, label:$decrementString$$});
    this.$_refreshAriaMinMaxValue$();
    this.$_updateButtons$();
    "boolean" === typeof this.options.readOnly && this.element.prop("readonly", this.options.readOnly);
    this.$_refreshStateTheming$("readOnly", this.options.readOnly);
    this.$_refreshRoleSpinbutton$("readOnly", this.options.readOnly);
  }, $_draw$:function() {
    var $uiInputNumber$$ = this.$uiInputNumber$ = this.element.addClass("oj-inputnumber-input").attr("autocomplete", "off").wrap("\x3cspan class\x3d'oj-inputnumber oj-component'\x3e\x3c/span\x3e").parent().append("\x3ca class\x3d'oj-inputnumber-button oj-inputnumber-down'\x3e\x3c/a\x3e\x3ca class\x3d'oj-inputnumber-button oj-inputnumber-up'\x3e\x3c/a\x3e");
    this.saveType = this.element.prop("type");
    this.element.attr("type", "text");
    this.buttons = $uiInputNumber$$.find(".oj-inputnumber-button").attr("tabIndex", "-1").attr("aria-hidden", !0);
  }, $_keydown$:function($event$$383$$) {
    var $keyCode$$7$$ = $$$$34$$.ui.keyCode;
    switch($event$$383$$.keyCode) {
      case $keyCode$$7$$.UP:
        return this.$_repeat$(null, 1, $event$$383$$), !0;
      case $keyCode$$7$$.DOWN:
        return this.$_repeat$(null, -1, $event$$383$$), !0;
    }
    return!1;
  }, $_uiInputNumberHtml$:function() {
    return "\x3cspan class\x3d'oj-inputnumber oj-component'\x3e\x3c/span\x3e";
  }, $_buttonHtml$:function() {
    return "\x3ca class\x3d'oj-inputnumber-button oj-inputnumber-down'\x3e\x3c/a\x3e\x3ca class\x3d'oj-inputnumber-button oj-inputnumber-up'\x3e\x3c/a\x3e";
  }, $_start$:function() {
    return this.$spinning$ = !0;
  }, $_repeat$:function($i$$299$$, $steps$$2$$, $event$$384$$) {
    $i$$299$$ = $i$$299$$ || 500;
    clearTimeout(this.$timer$);
    this.$timer$ = this._delay(function() {
      this.$_repeat$(40, $steps$$2$$, $event$$384$$);
    }, $i$$299$$);
    this.$_spin$($steps$$2$$ * this.options.step, $event$$384$$);
  }, $_spin$:function($step$$, $event$$385$$) {
    var $value$$218$$ = this.$_getConvertedDisplayValue$(), $value$$218$$ = this.$_adjustValue$($value$$218$$, $step$$);
    this.$_SetValue$($value$$218$$, $event$$385$$, this.$_VALIDATION_MODE$.$VALIDATORS_ONLY$);
  }, $_precision$:function() {
    var $precision$$1$$ = this.$_precisionOf$(this.options.step);
    null != this.options.min && ($precision$$1$$ = Math.max($precision$$1$$, this.$_precisionOf$(this.options.min)));
    return $precision$$1$$;
  }, $_precisionOf$:function($num$$9_str$$20$$) {
    $num$$9_str$$20$$ = $num$$9_str$$20$$.toString();
    var $decimal$$ = $num$$9_str$$20$$.indexOf(".");
    return-1 === $decimal$$ ? 0 : $num$$9_str$$20$$.length - $decimal$$ - 1;
  }, $_adjustValue$:function($value$$219$$, $step$$1$$) {
    var $aboveMin_newValue$$11$$, $stepBase_validMax$$, $options$$323$$ = this.options, $precision$$2$$ = this.$_precision$();
    $stepBase_validMax$$ = null != $options$$323$$.min ? $options$$323$$.min : 0;
    $aboveMin_newValue$$11$$ = $value$$219$$ - $stepBase_validMax$$;
    var $rounded$$1$$ = Math.round($aboveMin_newValue$$11$$ / $options$$323$$.step) * $options$$323$$.step, $rounded$$1$$ = parseFloat($rounded$$1$$.toFixed($precision$$2$$));
    $rounded$$1$$ !== $aboveMin_newValue$$11$$ ? ($aboveMin_newValue$$11$$ = 0 > $step$$1$$ ? Math.ceil($aboveMin_newValue$$11$$ / $options$$323$$.step) * $options$$323$$.step : Math.floor($aboveMin_newValue$$11$$ / $options$$323$$.step) * $options$$323$$.step, $aboveMin_newValue$$11$$ = $stepBase_validMax$$ + $aboveMin_newValue$$11$$ + $step$$1$$) : $aboveMin_newValue$$11$$ = $value$$219$$ + $step$$1$$;
    $aboveMin_newValue$$11$$ = parseFloat($aboveMin_newValue$$11$$.toFixed($precision$$2$$));
    return null != $options$$323$$.min && $aboveMin_newValue$$11$$ < $options$$323$$.min ? $options$$323$$.min : null != $options$$323$$.max && $aboveMin_newValue$$11$$ > $options$$323$$.max ? ($stepBase_validMax$$ = Math.floor(($options$$323$$.max - $stepBase_validMax$$) / $options$$323$$.step) * $options$$323$$.step + $stepBase_validMax$$, $stepBase_validMax$$ = parseFloat($stepBase_validMax$$.toFixed($precision$$2$$))) : $aboveMin_newValue$$11$$;
  }, $_stop$:function() {
    this.$spinning$ && (clearTimeout(this.$timer$), this.$spinning$ = !1);
  }, $_updateButtons$:function() {
    var $value$$220$$ = this.$_getConvertedDisplayValue$(), $min$$7$$ = this.options.min, $max$$9$$ = this.options.max;
    if (this.$uiInputNumber$) {
      var $downButton$$ = this.$uiInputNumber$.find(".oj-inputnumber-down").ojButton(), $upButton$$ = this.$uiInputNumber$.find(".oj-inputnumber-up").ojButton();
      this.options.disabled || void 0 === $value$$220$$ ? ($downButton$$.ojButton("disable"), $upButton$$.ojButton("disable")) : null != $max$$9$$ && $value$$220$$ >= $max$$9$$ ? ($downButton$$.ojButton("enable"), $upButton$$.ojButton("disable")) : (null != $min$$7$$ && $value$$220$$ <= $min$$7$$ ? $downButton$$.ojButton("disable") : $downButton$$.ojButton("enable"), $upButton$$.ojButton("enable"));
    }
  }, $_getConvertedDisplayValue$:function() {
    var $value$$221$$;
    try {
      var $displayValue$$8$$ = this.$_GetDisplayValue$() || 0;
      $value$$221$$ = this.$_parseValue$($displayValue$$8$$);
    } catch ($e$$136$$) {
      $value$$221$$ = void 0;
    }
    return $value$$221$$;
  }, $_blurEnterSetValue$:function($event$$387$$) {
    this.$_stop$();
    this.previous !== this.element.val() && (this.$_refreshAriaMinMaxValue$(), this.$_updateButtons$(), this.$_SetValue$(this.element.val(), $event$$387$$));
  }, $_createRangeValidator$:function() {
    var $newMin_numberRangeOptions$$ = null != this.options.min ? this.options.min : void 0, $newMax$$ = null != this.options.max ? this.options.max : void 0, $messageSummary$$1_reqTrans$$1$$ = this.options.translations ? this.options.translations.numberRange || {} : {}, $hintMin$$, $hintMax$$, $hintInRange$$3$$, $messageDetailRangeOverflow$$2$$, $messageDetailRangeUnderflow$$2$$, $messageSummaryRangeOverflow$$2$$, $messageSummaryRangeUnderflow$$2$$, $hint$$8$$ = $messageSummary$$1_reqTrans$$1$$.hint || 
    {}, $messageDetail$$1$$ = $messageSummary$$1_reqTrans$$1$$.messageDetail || {}, $messageSummary$$1_reqTrans$$1$$ = $messageSummary$$1_reqTrans$$1$$.messageSummary || {};
    null !== $hint$$8$$ && ($hintMin$$ = $hint$$8$$.min || null, $hintMax$$ = $hint$$8$$.max || null, $hintInRange$$3$$ = $hint$$8$$.inRange || null);
    null !== $messageDetail$$1$$ && ($messageDetailRangeOverflow$$2$$ = $messageDetail$$1$$.rangeOverflow || null, $messageDetailRangeUnderflow$$2$$ = $messageDetail$$1$$.rangeUnderflow || null);
    null !== $messageSummary$$1_reqTrans$$1$$ && ($messageSummaryRangeOverflow$$2$$ = $messageSummary$$1_reqTrans$$1$$.rangeOverflow || null, $messageSummaryRangeUnderflow$$2$$ = $messageSummary$$1_reqTrans$$1$$.rangeUnderflow || null);
    $newMin_numberRangeOptions$$ = {min:$newMin_numberRangeOptions$$, max:$newMax$$, hint:{min:$hintMin$$ || null, max:$hintMax$$ || null, inRange:$hintInRange$$3$$ || null}, messageDetail:{rangeOverflow:$messageDetailRangeOverflow$$2$$ || null, rangeUnderflow:$messageDetailRangeUnderflow$$2$$ || null}, messageSummary:{rangeOverflow:$messageSummaryRangeOverflow$$2$$ || null, rangeUnderflow:$messageSummaryRangeUnderflow$$2$$ || null}, converter:this.$_GetConverter$()};
    this.$_inputNumberDefaultValidators$[$oj$$34$$.$ValidatorFactory$.VALIDATOR_TYPE_NUMBERRANGE] = $oj$$34$$.$Validation$.$validatorFactory$($oj$$34$$.$ValidatorFactory$.VALIDATOR_TYPE_NUMBERRANGE).createValidator($newMin_numberRangeOptions$$);
  }, $_coerceInputNumberValue$:function($val$$57$$) {
    var $returnValue$$;
    $returnValue$$ = null !== $val$$57$$ ? +$val$$57$$ : $val$$57$$;
    isNaN($returnValue$$) && $oj$$34$$.$Logger$.error("ojInputNumber's value is not a number: " + $val$$57$$);
    return $returnValue$$;
  }, $_parse$:function($option$$25$$, $val$$58$$) {
    if (null === $val$$58$$) {
      return $val$$58$$;
    }
    var $parsedVal$$;
    $parsedVal$$ = "string" === typeof $val$$58$$ && "" !== $val$$58$$ ? +$val$$58$$ : parseFloat($val$$58$$);
    if (isNaN($parsedVal$$)) {
      throw Error("ojInputNumber's " + $option$$25$$ + " option is not a number");
    }
    return $parsedVal$$;
  }, $_parseStep$:function($parsedStep_val$$59$$) {
    if (null === $parsedStep_val$$59$$) {
      return 1;
    }
    $parsedStep_val$$59$$ = this.$_parse$("step", $parsedStep_val$$59$$);
    if (0 >= $parsedStep_val$$59$$) {
      throw Error("Invalid step for ojInputNumber; step must be \x3e 0");
    }
    if (null === $parsedStep_val$$59$$ || 0 >= $parsedStep_val$$59$$) {
      $parsedStep_val$$59$$ = 1;
    }
    return $parsedStep_val$$59$$;
  }, $_refreshStateTheming$:function($option$$26$$, $value$$222$$) {
    -1 != Object.keys(this.$_OPTION_TO_CSS_MAPPING$).indexOf($option$$26$$) && this.widget().toggleClass(this.$_OPTION_TO_CSS_MAPPING$[$option$$26$$], !!$value$$222$$);
  }, $_refreshRoleSpinbutton$:function($option$$27$$, $value$$223$$) {
    $value$$223$$ ? this.widget().removeAttr("role") : this.widget().attr("role", "spinbutton");
  }, $_refreshAriaMinMaxValue$:function() {
    var $valuenow$$ = this.$_getConvertedDisplayValue$(), $valuetext$$ = this.element.val();
    this.element.attr({"aria-valuemin":this.options.min, "aria-valuemax":this.options.max, "aria-valuenow":$valuenow$$});
    this.$_ValueEquals$("" + $valuenow$$, $valuetext$$) || this.element.attr({"aria-valuetext":$valuetext$$});
  }, $_step$:function($steps$$3$$, $up$$) {
    this.$_start$();
    $up$$ ? this.$_spin$(($steps$$3$$ || 1) * this.options.step) : this.$_spin$(($steps$$3$$ || 1) * -this.options.step);
    this.$_stop$();
  }});
});
