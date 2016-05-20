/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojmodel", "ojs/ojdatacollection-common"], function($oj$$42$$, $$$$40$$) {
  $oj$$42$$.$__registerWidget$("oj.ojRowExpander", $$$$40$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{context:null, expand:null, collapse:null}, $classNames$:{root:"oj-rowexpander", icon:"oj-component-icon", clickable:"oj-clickable-icon-nocontext", expand:"oj-rowexpander-expand-icon", collapse:"oj-rowexpander-collapse-icon", leaf:"oj-rowexpander-leaf-icon", lazyload:"oj-rowexpander-lazyload-icon", toucharea:"oj-rowexpander-touch-area", indent:"oj-rowexpander-indent", iconspacer:"oj-rowexpander-icon-spacer", 
  depth0:"oj-rowexpander-depth-0", depth1:"oj-rowexpander-depth-1", depth2:"oj-rowexpander-depth-2", depth3:"oj-rowexpander-depth-3", depth4:"oj-rowexpander-depth-4", depth5:"oj-rowexpander-depth-5", depth6:"oj-rowexpander-depth-6", depth7:"oj-rowexpander-depth-7"}, $constants$:{$MAX_STYLE_DEPTH$:7, $NUM5_KEY$:53}, _create:function() {
    this._super();
    this.element.addClass(this.$classNames$.root);
  }, _init:function() {
    var $self$$145$$ = this, $context$$58$$;
    this._super();
    $context$$58$$ = this.options.context;
    this.$component$ = $context$$58$$.component;
    this.$datasource$ = $context$$58$$.datasource;
    this.depth = $context$$58$$.depth;
    this.$iconState$ = $context$$58$$.state;
    this.$rowKey$ = $context$$58$$.key;
    this.index = $context$$58$$.index;
    this.$parentKey$ = $context$$58$$.parentKey;
    this.$_addIndentation$();
    this.$_addIcon$();
    this.$_setIconStateClass$();
    if ("expanded" === this.$iconState$ || "collapsed" === this.$iconState$) {
      $$$$40$$(this.$toucharea$).on("click", function($event$$396$$) {
        $event$$396$$.preventDefault();
        $self$$145$$.$_fireExpandCollapse$();
      }), $$$$40$$(this.element).on("keypress", function($event$$397$$) {
        if (($event$$397$$.keyCode || $event$$397$$.which) === $$$$40$$.ui.keyCode.ENTER || $$$$40$$.ui.keyCode.SPACE) {
          $self$$145$$.$_fireExpandCollapse$(), $event$$397$$.preventDefault(), $event$$397$$.target.focus();
        }
      }), null != this.$component$ && (this.$handleKeyDownCallback$ = this.$_handleKeyDownEvent$.bind(this), $$$$40$$(this.$component$.element).on("ojkeydown", this.$handleKeyDownCallback$)), null != this.$datasource$ && (this.$handleExpandCallback$ = this.$_handleExpandEvent$.bind(this), this.$handleCollapseCallback$ = this.$_handleCollapseEvent$.bind(this), this.$datasource$.on("expand", this.$handleExpandCallback$, this), this.$datasource$.on("collapse", this.$handleCollapseCallback$, this));
    }
    null != this.$component$ && (this.$handleActiveKeyChangeCallback$ = this.$_handleActiveKeyChangeEvent$.bind(this), $$$$40$$(this.$component$.element).on("ojactive", this.$handleActiveKeyChangeCallback$));
  }, refresh:function() {
    this.element.empty();
    this._init();
  }, _destroy:function() {
    null != this.$component$ && ($$$$40$$(this.$component$.element).off("ojkeydown", this.$handleKeyDownCallback$), $$$$40$$(this.$component$.element).off("ojactive", this.$handleActiveKeyChangeCallback$));
    null != this.$datasource$ && (this.$datasource$.off("expand", this.$handleExpandCallback$, this), this.$datasource$.off("collapse", this.$handleCollapseCallback$, this));
    this.removeClass(this.$classNames$.root);
    this.element.empty();
  }, $_addIndentation$:function() {
    var $remainder_spacer$$, $i$$313$$, $depth$$20$$;
    $depth$$20$$ = this.depth - 1;
    if ($depth$$20$$ < this.$constants$.$MAX_STYLE_DEPTH$) {
      $remainder_spacer$$ = $$$$40$$(document.createElement("span")).addClass(this.$classNames$.indent).addClass(this.$classNames$["depth" + $depth$$20$$]), this.element.append($remainder_spacer$$);
    } else {
      for ($i$$313$$ = 1;$i$$313$$ <= $depth$$20$$ / this.$constants$.$MAX_STYLE_DEPTH$;$i$$313$$++) {
        $remainder_spacer$$ = $$$$40$$(document.createElement("span")).addClass(this.$classNames$.indent).addClass(this.$classNames$["depth" + this.$constants$.$MAX_STYLE_DEPTH$]), this.element.append($remainder_spacer$$);
      }
      $remainder_spacer$$ = $depth$$20$$ % this.$constants$.$MAX_STYLE_DEPTH$;
      $remainder_spacer$$ < this.$constants$.$MAX_STYLE_DEPTH$ && ($remainder_spacer$$ = $$$$40$$(document.createElement("span")).addClass(this.$classNames$.indent).addClass(this.$classNames$["depth" + $remainder_spacer$$]), this.element.append($remainder_spacer$$));
    }
  }, $_addIcon$:function() {
    var $iconSpacer$$ = $$$$40$$(document.createElement("div")).addClass(this.$classNames$.iconspacer);
    this.$toucharea$ = $$$$40$$(document.createElement("div")).addClass(this.$classNames$.toucharea);
    this.icon = $$$$40$$(document.createElement("a")).attr("href", "#").addClass(this.$classNames$.icon).addClass(this.$classNames$.clickable);
    this.element.append($iconSpacer$$.append(this.$toucharea$.append(this.icon)));
  }, $_addIconClass$:function($classKey$$) {
    this.icon.addClass(this.$classNames$[$classKey$$]);
  }, $_removeIconClass$:function($classKey$$1$$) {
    this.icon.removeClass(this.$classNames$[$classKey$$1$$]);
  }, $_setIconStateClass$:function() {
    switch(this.$iconState$) {
      case "leaf":
        this.$_removeIconClass$("icon");
        this.$_removeIconClass$("clickable");
        this.$_addIconClass$("leaf");
        break;
      case "collapsed":
        this.$_addIconClass$("expand");
        this.$_ariaExpanded$(!1);
        break;
      case "expanded":
        this.$_addIconClass$("collapse");
        this.$_ariaExpanded$(!0);
        break;
      case "loading":
        this.$_removeIconClass$("clickable"), this.$_addIconClass$("lazyload");
    }
  }, $_removeIconStateClass$:function() {
    switch(this.$iconState$) {
      case "leaf":
        this.$_removeIconClass$("leaf");
        this.$_addIconClass$("icon");
        this.$_addIconClass$("clickable");
        break;
      case "collapsed":
        this.$_removeIconClass$("expand");
        break;
      case "expanded":
        this.$_removeIconClass$("collapse");
        break;
      case "loading":
        this.$_removeIconClass$("lazyload"), this.$_addIconClass$("clickable");
    }
  }, $_handleActiveKeyChangeEvent$:function($event$$398$$, $ui$$33$$) {
    var $context$$59_rowKey$$30$$, $state$$5$$;
    null != $ui$$33$$.activeKey && ($context$$59_rowKey$$30$$ = $ui$$33$$.activeKey.rowKey, this.$rowKey$ !== $context$$59_rowKey$$30$$ || null != $ui$$33$$.previousActiveKey && $ui$$33$$.previousActiveKey.row == $ui$$33$$.activeKey.row || !this.$component$.$_setAccessibleContext$ || ($context$$59_rowKey$$30$$ = this.$getTranslatedString$("accessibleRowDescription", {level:this.depth, num:this.index + 1, total:this.$datasource$.getWrappedDataSource().$getChildCount$(this.$parentKey$)}), $state$$5$$ = 
    "collapsed" === this.$iconState$ ? this.$getTranslatedString$("accessibleStateCollapsed") : "expanded" === this.$iconState$ ? this.$getTranslatedString$("accessibleStateExpanded") : "", this.$component$.$_setAccessibleContext$({context:$context$$59_rowKey$$30$$, state:$state$$5$$})));
  }, $_handleKeyDownEvent$:function($event$$399$$, $ui$$34$$) {
    var $code$$7_context$$60$$;
    this.$rowKey$ === $ui$$34$$.rowKey && ($event$$399$$ = $event$$399$$.originalEvent, $code$$7_context$$60$$ = $event$$399$$.keyCode || $event$$399$$.which, $oj$$42$$.$DomUtils$.$isMetaKeyPressed$($event$$399$$) && ($code$$7_context$$60$$ == $$$$40$$.ui.keyCode.RIGHT ? (this.$_loading$(), this.$datasource$.expand(this.$rowKey$)) : $code$$7_context$$60$$ == $$$$40$$.ui.keyCode.LEFT ? (this.$_loading$(), this.$datasource$.collapse(this.$rowKey$)) : $event$$399$$.altKey && $code$$7_context$$60$$ == 
    this.$constants$.$NUM5_KEY$ && this.$component$.$_setAccessibleContext$ && ($code$$7_context$$60$$ = this.$getTranslatedString$("accessibleRowDescription", {level:this.depth, num:this.index + 1, total:this.$datasource$.getWrappedDataSource().$getChildCount$(this.$parentKey$)}), this.$component$.$_setAccessibleContext$({context:$code$$7_context$$60$$, state:""}))));
  }, $_loading$:function() {
    this.$_removeIconStateClass$();
    this.$iconState$ = "loading";
    this.$_setIconStateClass$();
  }, $_handleExpandEvent$:function($event$$400_rowKey$$32$$) {
    $event$$400_rowKey$$32$$ = $event$$400_rowKey$$32$$.rowKey;
    $event$$400_rowKey$$32$$ === this.$rowKey$ && (this.$_removeIconStateClass$(), this.$iconState$ = "expanded", this.$_setIconStateClass$(), this.$_ariaExpanded$(!0), this._trigger("expand", null, {rowKey:$event$$400_rowKey$$32$$}));
  }, $_handleCollapseEvent$:function($event$$401_rowKey$$33$$) {
    $event$$401_rowKey$$33$$ = $event$$401_rowKey$$33$$.rowKey;
    $event$$401_rowKey$$33$$ === this.$rowKey$ && (this.$_removeIconStateClass$(), this.$iconState$ = "collapsed", this.$_setIconStateClass$(), this.$_ariaExpanded$(!1), this._trigger("collapse", null, {rowKey:$event$$401_rowKey$$33$$}));
  }, $_fireExpandCollapse$:function() {
    var $state$$6$$ = this.$iconState$;
    this.$_loading$();
    "collapsed" === $state$$6$$ ? this.$datasource$.expand(this.$rowKey$) : "expanded" === $state$$6$$ && this.$datasource$.collapse(this.$rowKey$);
  }, $_ariaExpanded$:function($bool$$) {
    this.icon.attr("aria-expanded", $bool$$);
  }, getNodeBySubId:function($locator$$32$$) {
    return null == $locator$$32$$ ? this.element ? this.element[0] : null : "oj-rowexpander-icon" === $locator$$32$$.subId ? this.icon : null;
  }});
});
