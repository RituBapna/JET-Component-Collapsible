/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue"], function($oj$$39$$, $$$$37$$) {
  $oj$$39$$.$__registerWidget$("oj._ojRadioCheckbox", $$$$37$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", options:{disabled:null, checked:null, type:null}, label:function() {
    void 0 === this.$$label$ && (this.$$label$ = this.$_getLabelsForElement$());
    return this.$$label$;
  }, refresh:function() {
    this._super();
    this.$_setup$();
  }, widget:function() {
    return this.$uiRadioCheckbox$;
  }, _InitOptions:function($originalDefaults$$12$$, $constructorOptions$$13$$) {
    this._super($originalDefaults$$12$$, $constructorOptions$$13$$);
    if (null === this.options.checked) {
      this.options.checked = void 0 !== this.element.attr("checked") ? !!this.element.prop("checked") : !1;
    } else {
      if ("boolean" !== typeof this.options.checked) {
        throw Error("checked option must be a boolean");
      }
    }
    if (null === this.options.disabled) {
      this.options.disabled = void 0 !== this.element.attr("disabled") ? !!this.element.prop("disabled") : !1;
    } else {
      if ("boolean" !== typeof this.options.disabled) {
        throw Error("disabled option must be a boolean");
      }
    }
    this.options.type = this.element.prop("type");
  }, _ComponentCreate:function() {
    this._super();
    var $type$$88$$ = this.options.type;
    "checkbox" == $type$$88$$ ? (this.$uiRadioCheckbox$ = this.element.addClass("oj-checkbox oj-component"), this.$$label$ = this.$_getLabelsForElement$(), this.$$label$.addClass("oj-checkbox-label")) : "radio" == $type$$88$$ && (this.$uiRadioCheckbox$ = this.element.addClass("oj-radio oj-component"), this.$$label$ = this.$_getLabelsForElement$(), this.$$label$.addClass("oj-radio-label"));
    var $self$$144$$ = this;
    this._hoverable(this.element);
    this._focusable(this.element);
    this.$_activeable$(this.element);
    $$$$37$$.each($self$$144$$.$$label$, function() {
      $self$$144$$._hoverable(this);
      $self$$144$$._focusable(this);
      $self$$144$$.$_activeable$(this);
    });
    this._on(this.$_events$);
  }, $_AfterCreate$:function() {
    this._super();
    this.$_setup$();
  }, $_setup$:function() {
    this.$_renderDisabled$();
    this.options.checked ? this._setOption("checked", !0) : this._setOption("checked", !1);
  }, $_renderDisabled$:function() {
    this.$_IsEffectivelyDisabled$() ? (this.element.prop("disabled", !0).removeAttr("aria-disabled").removeClass("oj-enabled").addClass("oj-disabled"), this.$$label$.removeClass("oj-enabled").addClass("oj-disabled")) : (this.element.prop("disabled", !1).removeAttr("aria-disabled").removeClass("oj-disabled").addClass("oj-enabled"), this.$$label$.addClass("oj-enabled").removeClass("oj-disabled"));
  }, $_events$:{}, _setOption:function($key$$128$$, $value$$231$$) {
    this._superApply(arguments);
    "disabled" === $key$$128$$ && ($value$$231$$ = !!$value$$231$$, this.$_renderDisabled$($value$$231$$));
    "checked" === $key$$128$$ && ($value$$231$$ ? this.element.prop("checked", !0) : this.element.prop("checked", !1), this.element.toggleClass("oj-selected", $value$$231$$));
  }, $_getLabelsForElement$:function() {
    var $labelClosestParent$$ = this.element.closest("label"), $labelForQuery$$ = "label[for\x3d'" + this.element.prop("id") + "']";
    return $labelClosestParent$$.add($$$$37$$($labelForQuery$$));
  }, getNodeBySubId:function($locator$$30_subId$$19$$) {
    var $node$$85$$ = this._super($locator$$30_subId$$19$$);
    $node$$85$$ || ($locator$$30_subId$$19$$ = $locator$$30_subId$$19$$.subId, "oj-radiocheckbox-input" === $locator$$30_subId$$19$$ && ($node$$85$$ = this.element[0]), "oj-radiocheckbox-label" === $locator$$30_subId$$19$$ && ($node$$85$$ = this.label()[0]));
    return $node$$85$$ || null;
  }, _destroy:function() {
    this._super();
    var $type$$89$$ = this.options.type;
    "checkbox" == $type$$89$$ ? (this.element.removeClass("oj-checkbox oj-selected oj-disabled oj-enabled oj-component"), this.$$label$.removeClass("oj-enabled oj-disabled oj-checkbox-label")) : "radio" == $type$$89$$ && (this.element.removeClass("oj-radio oj-selected oj-disabled oj-enabled oj-component"), this.$$label$.removeClass("oj-enabled oj-disabled oj-radio-label"));
  }});
});
