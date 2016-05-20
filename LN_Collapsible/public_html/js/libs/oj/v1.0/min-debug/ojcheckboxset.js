/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue", "ojs/ojradiocheckbox"], function($oj$$26$$, $$$$26$$) {
  $oj$$26$$.$__registerWidget$("oj.ojCheckboxset", $$$$26$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{disabled:null}, refresh:function() {
    this._super();
    this.$$checkboxes$.each(function() {
      var $disabledValue$$ = void 0 !== $$$$26$$(this).attr("disabled") ? !!$$$$26$$(this).prop("disabled") : !1;
      $$$$26$$(this)._ojRadioCheckbox("option", "disabled", $disabledValue$$);
    });
    this.$$checkboxes$ = this.$_findCheckboxesWithMatchingName$().filter(".oj-checkbox")._ojRadioCheckbox("refresh").end().not(".oj-checkbox")._ojRadioCheckbox().end();
    this.$_setup$();
  }, widget:function() {
    return this.$uiCheckboxset$;
  }, _InitOptions:function($originalDefaults$$9$$, $constructorOptions$$10$$) {
    var $checkboxes_result$$26_selectedCheckbox$$, $checkedValues$$ = [];
    this._super($originalDefaults$$9$$, $constructorOptions$$10$$);
    $oj$$26$$.$EditableValueUtils$.$initializeOptionsFromDom$([{attribute:"disabled", defaultOptionValue:!1, validateOption:!0}, {attribute:"title", defaultOptionValue:""}, {attribute:"placeholder", defaultOptionValue:""}, {attribute:"required", defaultOptionValue:!1, coerceDomValue:!0, validateOption:!0}], $constructorOptions$$10$$, this);
    null == this.options.value && ($checkboxes_result$$26_selectedCheckbox$$ = this.$_findCheckboxesWithMatchingName$(), $checkboxes_result$$26_selectedCheckbox$$ = $checkboxes_result$$26_selectedCheckbox$$.filter(":checked"), 0 === $checkboxes_result$$26_selectedCheckbox$$.length ? $checkboxes_result$$26_selectedCheckbox$$ = [] : ($checkboxes_result$$26_selectedCheckbox$$.each(function() {
      $checkedValues$$.push($$$$26$$(this).val());
    }), $checkboxes_result$$26_selectedCheckbox$$ = $checkedValues$$), this.options.value = $checkboxes_result$$26_selectedCheckbox$$);
  }, _ComponentCreate:function() {
    this._super();
    if (this.element.is("fieldset")) {
      throw Error("ojCheckboxset cannot be bound to a fieldset. Use a div instead.");
    }
    this.$$checkboxes$ = this.$_findCheckboxesWithMatchingName$()._ojRadioCheckbox();
    this.$uiCheckboxset$ = this.element.addClass("oj-checkboxset oj-component").attr("role", "group");
    this._on(this.$_events$);
    this.$_setup$();
  }, $_findCheckboxesWithMatchingName$:function() {
    var $first$$8_name$$90$$ = this.element.find("input[type\x3dcheckbox]:first");
    0 === $first$$8_name$$90$$.length && $oj$$26$$.$Logger$.warn("Could not find any input type\x3dcheckbox within this element");
    $first$$8_name$$90$$ = $first$$8_name$$90$$.attr("name");
    return void 0 === $first$$8_name$$90$$ ? this.element.find("input[type\x3dcheckbox]").not("[name]") : this.element.find("input[type\x3dcheckbox][name\x3d" + $first$$8_name$$90$$ + "]");
  }, _OpenContextMenu:function($menu$$13$$, $event$$335$$) {
    var $launcher$$5$$ = this.element.find("input[type\x3dcheckbox]:tabbable").first();
    $menu$$13$$.open($event$$335$$, {launcher:$launcher$$5$$, initialFocus:"menu"});
  }, $_setup$:function() {
    this.options.disabled ? this.disable() : !1 === this.options.disabled && this.enable();
  }, $_events$:{change:function($event$$336$$) {
    this.$_HandleChangeEvent$($event$$336$$);
  }}, $_HandleChangeEvent$:function($event$$337$$) {
    this._super($event$$337$$);
  }, $_GetDisplayValue$:function() {
    return this.$_GetElementValue$();
  }, $_SetDisplayValue$:function($checkedBoxes$$) {
    this.$$checkboxes$._ojRadioCheckbox("option", "checked", !1);
    if (null != $checkedBoxes$$) {
      for (var $i$$291$$ = 0;$i$$291$$ < $checkedBoxes$$.length;$i$$291$$++) {
        var $checkboxWithMatchingValue$$ = this.$$checkboxes$.filter("[value\x3d'" + $checkedBoxes$$[$i$$291$$] + "']");
        void 0 !== $checkboxWithMatchingValue$$ && 0 < $checkboxWithMatchingValue$$.length && ($checkboxWithMatchingValue$$.prop("checked") || $checkboxWithMatchingValue$$._ojRadioCheckbox("option", "checked", !0));
      }
    }
  }, $_GetElementValue$:function() {
    var $checkedValues$$1$$ = [], $selectedCheckbox$$1$$ = this.$$checkboxes$.filter(":checked");
    if (0 === $selectedCheckbox$$1$$.length) {
      return[];
    }
    $selectedCheckbox$$1$$.each(function() {
      $checkedValues$$1$$.push($$$$26$$(this).val());
    });
    return $checkedValues$$1$$;
  }, _GetDefaultStyleClass:function() {
    return "oj-checkboxset";
  }, $_GetContentElement$:function() {
    return this.$_findCheckboxesWithMatchingName$();
  }, $_RefreshAriaRequired$:function($ariaValue$$1_value$$208$$) {
    var $rootNode$$ = this.$uiCheckboxset$;
    ($ariaValue$$1_value$$208$$ = $ariaValue$$1_value$$208$$ ? !0 : !1) && $rootNode$$ ? $rootNode$$.attr("aria-required", $ariaValue$$1_value$$208$$) : $rootNode$$.removeAttr("aria-required");
  }, _setOption:function($key$$105$$, $value$$209$$, $flags$$37$$) {
    this._super($key$$105$$, $value$$209$$, $flags$$37$$);
    "disabled" === $key$$105$$ && (this.$$checkboxes$.each(function() {
      $$$$26$$(this).data("oj-_ojRadioCheckbox").$__setAncestorComponentDisabled$($value$$209$$);
    }), this.$$checkboxes$._ojRadioCheckbox("refresh"));
  }, getNodeBySubId:function($locator$$20_subId$$12$$) {
    var $node$$78$$ = this._super($locator$$20_subId$$12$$);
    return $node$$78$$ || ($locator$$20_subId$$12$$ = $locator$$20_subId$$12$$.subId, "oj-checkboxset-inputs" !== $locator$$20_subId$$12$$) ? $node$$78$$ || null : this.$$checkboxes$;
  }, _destroy:function() {
    this._super();
    this.element.removeClass("oj-checkboxset oj-enabled oj-component").removeAttr("role");
    this.$$checkboxes$ && this.$$checkboxes$._ojRadioCheckbox("destroy");
  }});
});
