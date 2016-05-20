/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue", "ojs/ojradiocheckbox"], function($oj$$37$$, $$$$36$$) {
  $oj$$37$$.$__registerWidget$("oj.ojRadioset", $$$$36$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{disabled:null}, refresh:function() {
    this._super();
    this.$$radios$.each(function() {
      var $disabledValue$$1$$ = void 0 !== $$$$36$$(this).attr("disabled") ? !!$$$$36$$(this).prop("disabled") : !1;
      $$$$36$$(this)._ojRadioCheckbox("option", "disabled", $disabledValue$$1$$);
    });
    this.$$radios$ = this.$_findRadiosWithMatchingName$().filter(".oj-radio")._ojRadioCheckbox("refresh").end().not(".oj-radio")._ojRadioCheckbox().end();
    this.$_setup$();
  }, widget:function() {
    return this.$uiRadioset$;
  }, _InitOptions:function($originalDefaults$$11$$, $constructorOptions$$12$$) {
    var $checkedRadio_radios_result$$29$$;
    this._super($originalDefaults$$11$$, $constructorOptions$$12$$);
    $oj$$37$$.$EditableValueUtils$.$initializeOptionsFromDom$([{attribute:"disabled", defaultOptionValue:!1, validateOption:!0}, {attribute:"placeholder", defaultOptionValue:""}, {attribute:"required", defaultOptionValue:!1, coerceDomValue:!0, validateOption:!0}, {attribute:"title", defaultOptionValue:""}], $constructorOptions$$12$$, this);
    null == this.options.value && ($checkedRadio_radios_result$$29$$ = this.$_findRadiosWithMatchingName$(), $checkedRadio_radios_result$$29$$ = $checkedRadio_radios_result$$29$$.filter(":checked"), $checkedRadio_radios_result$$29$$ = 0 === $checkedRadio_radios_result$$29$$.length ? null : $checkedRadio_radios_result$$29$$.val(), this.options.value = $checkedRadio_radios_result$$29$$);
  }, _ComponentCreate:function() {
    this._super();
    if (this.element.is("fieldset")) {
      throw Error("ojRadioset cannot be bound to a fieldset. Use a div instead.");
    }
    this.$$radios$ = this.$_findRadiosWithMatchingName$()._ojRadioCheckbox();
    this.$uiRadioset$ = this.element.addClass("oj-radioset oj-component").attr("role", "radiogroup");
    this._on(this.$_events$);
    this.$_setup$();
  }, $_findRadiosWithMatchingName$:function() {
    var $first$$10_name$$92$$ = this.element.find("input[type\x3dradio]:first");
    0 === $first$$10_name$$92$$.length && $oj$$37$$.$Logger$.warn("Could not find any input type\x3dradio within this element");
    $first$$10_name$$92$$ = $first$$10_name$$92$$.attr("name");
    return void 0 === $first$$10_name$$92$$ ? this.element.find("input[type\x3dradio]").not("[name]") : this.element.find("input[type\x3dradio][name\x3d" + $first$$10_name$$92$$ + "]");
  }, _OpenContextMenu:function($menu$$19$$, $event$$389$$) {
    var $launcher$$6_radios$$1$$ = this.element.find("input[type\x3dradio]"), $checked$$3$$ = $launcher$$6_radios$$1$$.filter(":checked"), $launcher$$6_radios$$1$$ = $checked$$3$$.length ? $checked$$3$$ : $launcher$$6_radios$$1$$.filter(":enabled").first();
    $menu$$19$$.open($event$$389$$, {launcher:$launcher$$6_radios$$1$$, initialFocus:"menu"});
  }, $_setup$:function() {
    !0 === this.options.disabled ? this.disable() : !1 === this.options.disabled && this.enable();
  }, $_events$:{change:function($event$$390$$) {
    this.$_HandleChangeEvent$($event$$390$$);
  }}, $_HandleChangeEvent$:function($event$$391$$) {
    this._super($event$$391$$);
  }, $_GetDisplayValue$:function() {
    return this.$_GetElementValue$();
  }, $_SetDisplayValue$:function($displayValue$$9_radioWithMatchingValue_valueFilter$$1$$) {
    null != $displayValue$$9_radioWithMatchingValue_valueFilter$$1$$ && ($displayValue$$9_radioWithMatchingValue_valueFilter$$1$$ = "[value\x3d'" + $displayValue$$9_radioWithMatchingValue_valueFilter$$1$$ + "']", void 0 !== $displayValue$$9_radioWithMatchingValue_valueFilter$$1$$ && void 0 !== this.$$radios$ && ($displayValue$$9_radioWithMatchingValue_valueFilter$$1$$ = this.$$radios$.filter($displayValue$$9_radioWithMatchingValue_valueFilter$$1$$), void 0 !== $displayValue$$9_radioWithMatchingValue_valueFilter$$1$$ && 
    0 < $displayValue$$9_radioWithMatchingValue_valueFilter$$1$$.length ? $displayValue$$9_radioWithMatchingValue_valueFilter$$1$$.prop("checked") || $displayValue$$9_radioWithMatchingValue_valueFilter$$1$$._ojRadioCheckbox("option", "checked", !0) : this.$$radios$._ojRadioCheckbox("option", "checked", !1)));
  }, $_GetElementValue$:function() {
    var $checkedRadio$$1$$ = this.$$radios$.filter(":checked");
    return 0 === $checkedRadio$$1$$.length ? null : $checkedRadio$$1$$.val();
  }, _GetDefaultStyleClass:function() {
    return "oj-radioset";
  }, $_GetContentElement$:function() {
    return this.$_findRadiosWithMatchingName$();
  }, $_RefreshAriaRequired$:function($value$$229$$) {
    var $rootNode$$1$$ = this.$uiRadioset$;
    $value$$229$$ && $rootNode$$1$$ ? $rootNode$$1$$.attr("aria-required", $value$$229$$) : $rootNode$$1$$.removeAttr("aria-required");
  }, _setOption:function($key$$127$$, $value$$230$$) {
    this._superApply(arguments);
    "disabled" === $key$$127$$ && (this.$$radios$.each(function() {
      $$$$36$$(this).data("oj-_ojRadioCheckbox").$__setAncestorComponentDisabled$($value$$230$$);
    }), this.$$radios$._ojRadioCheckbox("refresh"));
  }, getNodeBySubId:function($locator$$29_subId$$18$$) {
    var $node$$84$$ = this._super($locator$$29_subId$$18$$);
    $node$$84$$ || ($locator$$29_subId$$18$$ = $locator$$29_subId$$18$$.subId, "oj-radioset-inputs" === $locator$$29_subId$$18$$ && ($node$$84$$ = this.$$radios$));
    return $node$$84$$ || null;
  }, _destroy:function() {
    this._super();
    this.element.removeClass("oj-radioset oj-enabled oj-component").removeAttr("role");
    this.$$radios$ && this.$$radios$._ojRadioCheckbox("destroy");
  }});
});
