/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$31$$, $$$$31$$) {
  (function() {
    var $uid$$ = 0;
    $oj$$31$$.$__registerWidget$("oj.ojCollapsible", $$$$31$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{expanded:!1, expandOn:"click", expandArea:"disclosureIcon", beforeExpand:null, expand:null, beforeCollapse:null, collapse:null, optionChange:null}, _ComponentCreate:function() {
      this._super();
      this.element.addClass("oj-collapsible oj-component");
      this.$_processPanels$();
      this.$_refresh$();
    }, _init:function() {
      this.$_initialRender$ = !0;
      this.$_setExpanded$(this.options.expanded);
      this.$_initialRender$ = void 0;
    }, _OpenContextMenu:function($menu$$15$$, $event$$353$$) {
      $menu$$15$$.open($event$$353$$, {launcher:this.element.find(".oj-collapsible-header-icon").first(), initialFocus:"menu"});
    }, $_createIcons$:function() {
      var $icon$$2$$ = this.options.expanded ? "oj-collapsible-open-icon" : "oj-collapsible-close-icon";
      $$$$31$$("\x3ca href\x3d'#'\x3e").addClass("oj-component-icon oj-clickable-icon oj-collapsible-header-icon " + $icon$$2$$).attr("aria-labelledby", this.header.attr("id")).prependTo(this.header);
    }, $_destroyIcons$:function() {
      this.header.children(".oj-collapsible-header-icon").remove();
    }, _destroy:function() {
      this.$_cleanup$();
      this.element.removeClass("oj-collapsible oj-component oj-expanded oj-collapsed oj-disabled");
      this.header.removeClass("oj-collapsible-header").each(function() {
        /^oj-collapsible/.test(this.id) && this.removeAttribute("id");
      });
      this.$_findFirstFocusableInHeader$().removeAttr("role").removeAttr("aria-controls").removeAttr("aria-expanded").removeAttr("aria-disabled");
      this.$_destroyIcons$();
      this.content.css("display", "").removeAttr("aria-hidden").removeAttr("tabIndex").removeClass("oj-component-content oj-collapsible-content").each(function() {
        /^oj-collapsible/.test(this.id) && this.removeAttribute("id");
      });
    }, $_cleanup$:function() {
      this.$_tearDownEvents$();
      this.content && (this.content.unwrap(), this.$wrapper$ = null);
    }, $_isDisabled$:function() {
      return!1;
    }, $_getExpandAreaSelector$:function() {
      return "header" == this.options.expandArea ? "\x3e .oj-collapsible-header" : "\x3e .oj-collapsible-header \x3e .oj-collapsible-header-icon";
    }, _setOption:function($key$$118$$, $value$$211$$, $flags$$39$$) {
      "expanded" === $key$$118$$ ? $value$$211$$ !== this.options.expanded && this.$_setExpanded$($value$$211$$) : "expandOn" === $key$$118$$ || "expandArea" === $key$$118$$ ? (this.$_tearDownEvents$(), this._super($key$$118$$, $value$$211$$, $flags$$39$$), this.$_setupEvents$()) : this._super($key$$118$$, $value$$211$$, $flags$$39$$);
    }, $_keydown$:function($event$$354$$) {
      if (!$event$$354$$.altKey && !$event$$354$$.ctrlKey) {
        var $keyCode$$5$$ = $$$$31$$.ui.keyCode;
        switch($event$$354$$.keyCode) {
          case $keyCode$$5$$.SPACE:
          ;
          case $keyCode$$5$$.ENTER:
            this.$_toggleHandler$($event$$354$$);
        }
      }
    }, refresh:function() {
      this._super();
      this.$_cleanup$();
      this.$_processPanels$();
      this.$_destroyIcons$();
      this.$_refresh$();
    }, $_processPanels$:function() {
      this.header = this.element.children(":first-child").addClass("oj-collapsible-header");
      this.content = this.header.next().addClass("oj-collapsible-content oj-component-content");
      this.content.wrap("\x3cdiv\x3e\x3c/div\x3e");
      this.$wrapper$ = this.content.parent().addClass("oj-collapsible-wrapper");
    }, $_refresh$:function() {
      var $header$$8$$ = this.header, $content$$10$$ = this.content, $options$$314$$ = this.options, $collapsibleId$$ = "oj-collapsible-" + (this.element.attr("id") || ++$uid$$), $headerId$$ = $header$$8$$.attr("id"), $contentId$$ = $content$$10$$.attr("id");
      $headerId$$ || $header$$8$$.attr("id", $collapsibleId$$ + "-header");
      $contentId$$ || ($contentId$$ = $collapsibleId$$ + "-content", $content$$10$$.attr("id", $contentId$$));
      this.$_createIcons$();
      this.$_findFirstFocusableInHeader$().attr("role", "button").attr("aria-controls", $contentId$$).attr("aria-expanded", $options$$314$$.expanded);
      $options$$314$$.expanded ? $content$$10$$.attr("aria-hidden", "false") : (this.$wrapper$.css({"max-height":0, "overflow-y":"hidden", display:"none"}), this.$wrapper$.css("max-height", 0), $content$$10$$.attr("aria-hidden", "true"));
      this.$_setupEvents$();
    }, $_setExpanded$:function($expanded$$4$$) {
      $expanded$$4$$ ? this.expand(!0) : this.collapse(!0);
    }, $_setupEvents$:function() {
      var $events$$5$$ = {keydown:this.$_keydown$}, $event$$355_expandArea$$ = this.options.expandOn;
      if ($event$$355_expandArea$$) {
        var $self$$130$$ = this;
        $$$$31$$.each($event$$355_expandArea$$.split(" "), function($index$$181$$, $eventName$$1$$) {
          $events$$5$$[$eventName$$1$$] = $self$$130$$.$_toggleHandler$;
        });
      }
      $event$$355_expandArea$$ = this.element.find(this.$_getExpandAreaSelector$());
      this._on($event$$355_expandArea$$, $events$$5$$);
      this._on(this.$wrapper$, {transitionend:this.$_transitionEndHandler$, webkitTransitionEnd:this.$_transitionEndHandler$, otransitionend:this.$_transitionEndHandler$, oTransitionEnd:this.$_transitionEndHandler$});
      this._on(this.element, {ojexpand:this.$_expandCollapseHandler$, ojcollapse:this.$_expandCollapseHandler$, ojfocus:this.$_focusHandler$, ojfocusout:this.$_focusHandler$});
      this._hoverable($event$$355_expandArea$$);
      this._focusable($event$$355_expandArea$$);
      this.$_activeable$($event$$355_expandArea$$);
    }, $_tearDownEvents$:function() {
      this._off(this.element.find(this.$_getExpandAreaSelector$()));
      this.$wrapper$ && this._off(this.$wrapper$);
      this._off(this.element.add(this.content));
    }, $_toggleHandler$:function($event$$356$$) {
      this.options.expanded ? this.collapse(!0, $event$$356$$) : this.expand(!0, $event$$356$$);
      $event$$356$$.preventDefault();
      $event$$356$$.stopPropagation();
      this.header.find(".oj-collapsible-header-icon").focus();
    }, $_expandCollapseHandler$:function($event$$357$$) {
      if ($event$$357$$.target === this.element[0] && (this.$_initialRender$ || !$event$$357$$.isDefaultPrevented())) {
        var $element$$72$$ = this.element, $options$$315$$ = this.options, $content$$11$$ = this.content, $wrapper$$1$$ = this.$wrapper$, $isCollapse$$ = "ojcollapse" === $event$$357$$.type;
        $event$$357$$.preventDefault();
        $options$$315$$.expanded = !$isCollapse$$;
        this.$_initialRender$ ? $isCollapse$$ ? ($element$$72$$.removeClass("oj-expanded"), $element$$72$$.addClass("oj-collapsed"), $wrapper$$1$$.css("max-height", 0), $wrapper$$1$$.hide()) : ($element$$72$$.removeClass("oj-collapsed"), $element$$72$$.addClass("oj-expanded")) : ($wrapper$$1$$.$contentHeight$ = $wrapper$$1$$.outerHeight(), $isCollapse$$ ? ($wrapper$$1$$.removeClass("oj-collapsible-transition"), $wrapper$$1$$.css({"max-height":$wrapper$$1$$.$contentHeight$, "overflow-y":"hidden"}), 
        setTimeout(function() {
          $wrapper$$1$$.addClass("oj-collapsible-transition").css({"max-height":0});
          $element$$72$$.removeClass("oj-expanded");
          $element$$72$$.addClass("oj-collapsed");
        }, 10)) : ($wrapper$$1$$.show(), setTimeout(function() {
          $wrapper$$1$$.$contentHeight$ += $content$$11$$.outerHeight();
          $wrapper$$1$$.addClass("oj-collapsible-transition").css({"max-height":$wrapper$$1$$.$contentHeight$});
          $element$$72$$.removeClass("oj-collapsed");
          $element$$72$$.addClass("oj-expanded");
        }, 1)));
        this.header.find(".oj-collapsible-header-icon").toggleClass("oj-collapsible-open-icon", !$isCollapse$$).toggleClass("oj-collapsible-close-icon", $isCollapse$$ || !1).end();
        this.content.attr("aria-hidden", $isCollapse$$);
        this.$_findFirstFocusableInHeader$().attr("aria-expanded", !$isCollapse$$);
      }
    }, $_focusHandler$:function($event$$358$$) {
      "ojfocusout" == $event$$358$$.type ? (this.$_findFirstFocusableInHeader$().attr("tabIndex", -1), $event$$358$$.preventDefault(), $event$$358$$.stopPropagation()) : "ojfocus" == $event$$358$$.type && (this.$_findFirstFocusableInHeader$().attr("tabIndex", 0).focus(), $event$$358$$.preventDefault(), $event$$358$$.stopPropagation());
    }, $_findFirstFocusableInHeader$:function() {
      return this.$_findFocusables$(this.header).first();
    }, $_findFocusables$:function($start$$35$$) {
      return $start$$35$$.find("a,:input");
    }, expand:function($vetoable$$, $event$$359$$) {
      var $eventData$$12$$ = {header:this.header, content:this.content};
      $vetoable$$ && !1 === this._trigger("beforeExpand", $event$$359$$, $eventData$$12$$) || (this._trigger("expand", $event$$359$$, $eventData$$12$$), this.$_fireOptionChange$("expanded", !1, !0, $event$$359$$ ? !0 : !1));
    }, collapse:function($vetoable$$1$$, $event$$360$$) {
      if (this.$_initialRender$) {
        var $elem$$45_eventData$$13$$ = this.element[0];
        this.$_expandCollapseHandler$({type:"ojcollapse", target:$elem$$45_eventData$$13$$, currentTarget:$elem$$45_eventData$$13$$, preventDefault:$$$$31$$.noop});
      } else {
        $elem$$45_eventData$$13$$ = {header:this.header, content:this.content}, $vetoable$$1$$ && !1 === this._trigger("beforeCollapse", $event$$360$$, $elem$$45_eventData$$13$$) || (this._trigger("collapse", $event$$360$$, $elem$$45_eventData$$13$$), this.$_fireOptionChange$("expanded", !0, !1, $event$$360$$ ? !0 : !1));
      }
    }, $_transitionEndHandler$:function($event$$361$$) {
      "max-height" == ($event$$361$$.originalEvent ? $event$$361$$.originalEvent.propertyName : null) && ($event$$361$$.preventDefault(), $event$$361$$.stopPropagation());
      this.options.expanded ? this.$wrapper$.css({"max-height":9999, "overflow-y":""}) : this.$wrapper$.hide();
      this.$wrapper$.removeClass("oj-collapsible-transition");
    }, $_fireOptionChange$:function($key$$119$$, $previousValue$$8$$, $value$$212$$, $originalEvent$$5$$) {
      this._trigger("optionChange", $originalEvent$$5$$, {option:$key$$119$$, previousValue:$previousValue$$8$$, value:$value$$212$$, optionMetadata:{writeback:$originalEvent$$5$$ ? "shouldWrite" : "shouldNotWrite"}});
    }, getNodeBySubId:function($locator$$25_subId$$14$$) {
      if (null == $locator$$25_subId$$14$$) {
        return this.element ? this.element[0] : null;
      }
      $locator$$25_subId$$14$$ = $locator$$25_subId$$14$$.subId;
      switch($locator$$25_subId$$14$$) {
        case "oj-collapsible-content":
          return this.content;
        case "oj-collapsible-header":
          return this.header;
        case "oj-collapsible-header-icon":
          return this.header.find("." + $locator$$25_subId$$14$$)[0];
      }
      return null;
    }});
  })();
});
