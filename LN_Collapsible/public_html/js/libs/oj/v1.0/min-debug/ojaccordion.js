/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojcollapsible"], function($oj$$28$$, $$$$28$$) {
  (function() {
    $oj$$28$$.$__registerWidget$("oj.ojAccordion", $$$$28$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{multiple:!1, expanded:null, beforeExpand:null, expand:null, beforeCollapse:null, collapse:null}, _ComponentCreate:function() {
      this._super();
      this.element.addClass("oj-accordion oj-component").attr("role", "group");
      this.$_refresh$();
    }, _OpenContextMenu:function($menu$$14$$, $event$$339$$) {
      $menu$$14$$.open($event$$339$$, {launcher:this.element.find(".oj-collapsible-header-icon").first(), initialFocus:"menu"});
    }, _destroy:function() {
      this.element.removeClass("oj-accordion oj-component").removeAttr("role");
      this.element.children().removeClass("oj-accordion-collapsible");
      this.element.children(".oj-accordion-created").removeClass("oj-accordion-created").ojCollapsible("destroy");
    }, _setOption:function($key$$107$$, $value$$210$$, $flags$$38$$) {
      "multiple" === $key$$107$$ ? !1 == $value$$210$$ && !0 == this.options.multiple && this.element.children(".oj-expanded").first().siblings(".oj-collapsible").ojCollapsible("collapse", !1) : "expanded" === $key$$107$$ && this.$_setExpandedOption$($value$$210$$);
      this._super($key$$107$$, $value$$210$$, $flags$$38$$);
    }, refresh:function() {
      this._super();
      this.$_refresh$();
    }, $_refresh$:function() {
      this.$_makeCollapsible$();
      this._setOption("disabled", this.options.disabled);
      this._setOption("expanded", this.options.expanded);
      this.$_setupEvents$();
    }, $_makeCollapsible$:function() {
      this.element.children(":oj-collapsible").each(function() {
        $$$$28$$(this).ojCollapsible("option", "expandArea", "header");
      });
      this.$colllapsibles$ = this.element.children().not(":oj-ojCollapsible").ojCollapsible({expandArea:"header"}).addClass("oj-accordion-created").end().addClass("oj-accordion-collapsible");
    }, $_setupEvents$:function() {
      var $events$$4$$ = {keydown:this.$_keydown$, ojbeforeexpand:this.$_beforeExpandHandler$, ojexpand:this.$_expandHandler$, ojbeforecollapse:this.$_beforeCollapseHandler$, ojcollapse:this.$_collapseHandler$};
      this._off(this.$colllapsibles$);
      this._on(this.$colllapsibles$, $events$$4$$);
    }, $_keydown$:function($event$$340$$) {
      if (!$event$$340$$.altKey && !$event$$340$$.ctrlKey && ($$$$28$$($event$$340$$.target).hasClass("oj-collapsible-header") || $$$$28$$($event$$340$$.target).hasClass("oj-collapsible-header-icon"))) {
        var $keyCode$$4$$ = $$$$28$$.ui.keyCode, $enabledCollapsibles$$ = this.$colllapsibles$.not(".oj-disabled"), $length$$16$$ = $enabledCollapsibles$$.length, $target$$82$$ = $$$$28$$($event$$340$$.target).closest(".oj-collapsible"), $currentIndex$$1$$ = $enabledCollapsibles$$.index($target$$82$$), $toFocus$$ = !1;
        if (0 <= $currentIndex$$1$$) {
          switch($event$$340$$.keyCode) {
            case $keyCode$$4$$.RIGHT:
            ;
            case $keyCode$$4$$.DOWN:
              $toFocus$$ = $enabledCollapsibles$$[($currentIndex$$1$$ + 1) % $length$$16$$];
              break;
            case $keyCode$$4$$.LEFT:
            ;
            case $keyCode$$4$$.UP:
              $toFocus$$ = $enabledCollapsibles$$[($currentIndex$$1$$ - 1 + $length$$16$$) % $length$$16$$];
              break;
            case $keyCode$$4$$.HOME:
              $toFocus$$ = $enabledCollapsibles$$[0];
              break;
            case $keyCode$$4$$.END:
              $toFocus$$ = $enabledCollapsibles$$[$length$$16$$ - 1];
          }
        }
        $toFocus$$ && ($target$$82$$ && $$$$28$$($target$$82$$).trigger("ojfocusout"), $$$$28$$($toFocus$$).trigger("ojfocus"), $event$$340$$.preventDefault());
      }
    }, $_findTargetSiblings$:function($closestCollapsible_event$$341$$) {
      return!this.options.multiple && ($closestCollapsible_event$$341$$ = $$$$28$$($closestCollapsible_event$$341$$.target).closest(".oj-collapsible"), $closestCollapsible_event$$341$$.parent().is(":oj-ojAccordion")) ? $closestCollapsible_event$$341$$.siblings(".oj-collapsible.oj-expanded").map(function() {
        return $$$$28$$(this).data("oj-ojCollapsible");
      }) : $$$$28$$();
    }, $_beforeExpandHandler$:function($event$$342$$) {
      if (!this.$_isTargetMyCollapsible$($event$$342$$)) {
        return!0;
      }
      var $result$$27$$, $self$$122$$ = this, $newData$$3$$;
      this.$_findTargetSiblings$($event$$342$$).each(function() {
        var $beforeCollapsedData_collapsible$$ = this.element;
        $newData$$3$$ = $self$$122$$.$_initEventData$($beforeCollapsedData_collapsible$$, $$$$28$$($event$$342$$.target));
        $beforeCollapsedData_collapsible$$ = {header:$beforeCollapsedData_collapsible$$.find(".oj-collapsible-header"), content:$beforeCollapsedData_collapsible$$.find(".oj-collapsible-content")};
        return $result$$27$$ = this._trigger("beforeCollapse", $event$$342$$, $beforeCollapsedData_collapsible$$);
      });
      $newData$$3$$ || ($newData$$3$$ = $self$$122$$.$_initEventData$(null, $$$$28$$($event$$342$$.target)));
      this.options.multiple || this._trigger("beforeExpand", $event$$342$$, $newData$$3$$);
      return $result$$27$$;
    }, $_expandHandler$:function($event$$343$$, $eventData$$7$$) {
      if (this.$_isTargetMyCollapsible$($event$$343$$)) {
        var $newData$$4$$, $self$$123$$ = this;
        this.$_findTargetSiblings$($event$$343$$).each(function() {
          this.collapse(!1, $event$$343$$, $eventData$$7$$);
          $newData$$4$$ = $self$$123$$.$_initEventData$(this.element, $$$$28$$($event$$343$$.target));
        });
        $newData$$4$$ || ($newData$$4$$ = $self$$123$$.$_initEventData$(null, $$$$28$$($event$$343$$.target)));
        this.options.multiple || this._trigger("expand", $event$$343$$, $newData$$4$$);
        this.$_updateExpanded$();
      }
    }, $_beforeCollapseHandler$:function($event$$344$$, $eventData$$8$$) {
      return this.$_isTargetMyCollapsible$($event$$344$$) && !this.options.multiple ? this._trigger("beforeCollapse", $event$$344$$, this.$_initCollapseEventData$($event$$344$$, $eventData$$8$$)) : !0;
    }, $_collapseHandler$:function($event$$345$$, $eventData$$9$$) {
      if (this.$_isTargetMyCollapsible$($event$$345$$)) {
        var $newData$$5$$ = this.$_initCollapseEventData$($event$$345$$, $eventData$$9$$);
        this.options.multiple || this._trigger("collapse", $event$$345$$, $newData$$5$$);
        this.$_updateExpanded$();
      }
    }, $_initEventData$:function($fromC$$, $toC$$) {
      return{fromCollapsible:$fromC$$, toCollapsible:$toC$$};
    }, $_initCollapseEventData$:function($event$$346$$, $eventData$$11$$) {
      var $newData$$6$$;
      if ($eventData$$11$$.toCollapsible) {
        $newData$$6$$ = $eventData$$11$$;
      } else {
        if ($event$$346$$.originalEvent && $event$$346$$.originalEvent.target) {
          var $collapsible$$1$$ = $$$$28$$($event$$346$$.originalEvent.target);
          $collapsible$$1$$.hasClass("oj-collapsible") && ($newData$$6$$ = this.$_initEventData$($$$$28$$($event$$346$$.target), $collapsible$$1$$));
        }
        $newData$$6$$ || ($newData$$6$$ = this.$_initEventData$($$$$28$$($event$$346$$.target), null));
      }
      return $newData$$6$$;
    }, $_isTargetMyCollapsible$:function($event$$347$$) {
      return $$$$28$$($event$$347$$.target).is(this.$colllapsibles$);
    }, $_updateExpanded$:function() {
      var $cid$$8$$, $result$$28$$ = [];
      this.$colllapsibles$.each(function($index$$165$$) {
        $$$$28$$(this).ojCollapsible("option", "expanded") && ($cid$$8$$ = $$$$28$$(this).attr("id"), $result$$28$$.push($cid$$8$$ ? $cid$$8$$ : $index$$165$$));
      });
      this.options.expanded = $result$$28$$;
    }, $_inExpanded$:function($expanded$$2$$, $oCollapsible$$, $ei_index$$166$$) {
      void 0 === $ei_index$$166$$ && ($ei_index$$166$$ = $oCollapsible$$.index());
      $ei_index$$166$$ = $expanded$$2$$.indexOf($ei_index$$166$$);
      return-1 != $ei_index$$166$$ ? $ei_index$$166$$ : $expanded$$2$$.indexOf($oCollapsible$$.attr("id"));
    }, $_setExpandedOption$:function($expanded$$3$$) {
      var $idMap$$ = {};
      this.$colllapsibles$.each(function($index$$167$$) {
        var $id$$39$$ = $$$$28$$(this).attr("id");
        $id$$39$$ && ($idMap$$[$id$$39$$] = $index$$167$$);
      });
      var $expandedList$$ = [];
      if (Array.isArray($expanded$$3$$)) {
        for (var $ex$$1$$, $i$$292$$ = 0;$i$$292$$ < $expanded$$3$$.length;$i$$292$$++) {
          $ex$$1$$ = $expanded$$3$$[$i$$292$$], "string" === typeof $ex$$1$$ ? void 0 !== $idMap$$[$ex$$1$$] && ($expandedList$$[$idMap$$[$ex$$1$$]] = !0) : "number" === typeof $ex$$1$$ && ($expandedList$$[$ex$$1$$] = !0);
        }
      }
      for ($i$$292$$ = 0;$i$$292$$ < $expandedList$$.length;$i$$292$$++) {
        $$$$28$$(this.$colllapsibles$[$i$$292$$]).ojCollapsible("option", "expanded", !!$expandedList$$[$i$$292$$]);
      }
      this.$_updateExpanded$();
    }, getNodeBySubId:function($collapsible$$2_locator$$22$$) {
      if (null == $collapsible$$2_locator$$22$$) {
        return this.element ? this.element[0] : null;
      }
      var $subId$$13$$ = $collapsible$$2_locator$$22$$.subId;
      $collapsible$$2_locator$$22$$ = this.$colllapsibles$[$collapsible$$2_locator$$22$$.index];
      switch($subId$$13$$) {
        case "oj-accordion-content":
          $subId$$13$$ = "oj-collapsible-content";
          break;
        case "oj-accordion-header":
          $subId$$13$$ = "oj-collapsible-header";
          break;
        case "oj-accordion-header-icon":
          $subId$$13$$ = "oj-collapsible-header-icon";
          break;
        case "oj-accordion-collapsible":
          return $collapsible$$2_locator$$22$$;
        default:
          return null;
      }
      return $$$$28$$($collapsible$$2_locator$$22$$).ojCollapsible("getNodeBySubId", {$subId$:$subId$$13$$});
    }});
  })();
});
