define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$44$$, $$$$42$$) {
  (function() {
    $oj$$44$$.$__registerWidget$("oj.ojProgressbar", $$$$42$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{max:100, value:0, disabled:!1}, min:0, $_indeterminate$:!1, _create:function() {
      this.oldValue = this.options.value = this.$_constrainedValue$();
      this.element.addClass("oj-progressbar").attr({role:"progressbar", "aria-valuemin":this.min});
      this.$valueDiv$ = $$$$42$$("\x3cdiv class\x3d'oj-progressbar-value'\x3e\x3c/div\x3e").appendTo(this.element);
      this.$_refreshValue$();
      this._super();
    }, _InitOptions:function($originalDefaults$$13$$, $constructorOptions$$14$$) {
      var $savedAttributes$$3$$ = this.$_GetSavedAttributes$(this.element);
      this._super($originalDefaults$$13$$, $constructorOptions$$14$$);
      null == this.options.max && (this.options.max = "max" in $savedAttributes$$3$$ ? $savedAttributes$$3$$.max.prop : void 0);
    }, $_constrainedValue$:function($newValue$$12$$) {
      void 0 === $newValue$$12$$ && ($newValue$$12$$ = this.options.value);
      this.$_indeterminate$ = -1 == $newValue$$12$$;
      "number" !== typeof $newValue$$12$$ && ($newValue$$12$$ = isNaN($newValue$$12$$) ? 0 : Number($newValue$$12$$));
      return this.$_indeterminate$ ? -1 : Math.min(this.options.max, Math.max(this.min, $newValue$$12$$));
    }, _setOptions:function($options$$337$$, $flags$$44$$) {
      if (!this.options.disabled) {
        var $value$$234$$ = $options$$337$$.value;
        delete $options$$337$$.value;
        this._super($options$$337$$, $flags$$44$$);
        this.options.value = this.$_constrainedValue$($value$$234$$);
        this.$_refreshValue$();
      }
    }, _setOption:function($key$$131$$, $value$$235$$, $flags$$45$$) {
      "max" === $key$$131$$ && ($value$$235$$ = Math.max(this.min, $value$$235$$));
      this._super($key$$131$$, $value$$235$$, $flags$$45$$);
    }, $_percentage$:function() {
      return this.$_indeterminate$ ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min);
    }, $_refreshValue$:function() {
      var $value$$236$$ = this.options.value, $percentage$$ = this.$_percentage$();
      this.$valueDiv$.toggle(this.$_indeterminate$ || $value$$236$$ > this.min).width($percentage$$.toFixed(0) + "%");
      this.element.toggleClass("oj-progressbar-indeterminate", this.$_indeterminate$);
      this.$_indeterminate$ ? (this.element.attr({"aria-valuetext":"In Progress"}), this.element.removeAttr("aria-valuenow"), this.element.removeAttr("aria-valuemin"), this.element.removeAttr("aria-valuemax"), this.$overlayDiv$ || (this.$overlayDiv$ = $$$$42$$("\x3cdiv class\x3d'oj-progressbar-overlay'\x3e\x3c/div\x3e").appendTo(this.$valueDiv$))) : (this.element.attr({"aria-valuemax":this.options.max, "aria-valuenow":$value$$236$$}), this.$overlayDiv$ && (this.$overlayDiv$.remove(), this.$overlayDiv$ = 
      null));
    }, _destroy:function() {
      this.element.removeClass("oj-progressbar").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
      this.$valueDiv$.remove();
    }});
  })();
});
