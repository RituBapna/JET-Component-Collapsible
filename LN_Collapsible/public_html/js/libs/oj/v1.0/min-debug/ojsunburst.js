/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtSunburst"], function($oj$$19$$, $$$$19$$) {
  $oj$$19$$.$SunburstNode$ = function $$oj$$19$$$$SunburstNode$$($data$$134$$) {
    this.$_data$ = $data$$134$$;
  };
  $goog$exportPath_$$("SunburstNode", $oj$$19$$.$SunburstNode$, $oj$$19$$);
  $oj$$19$$.$SunburstNode$.prototype.$getColor$ = function $$oj$$19$$$$SunburstNode$$$$getColor$$() {
    return this.$_data$ ? this.$_data$.color : null;
  };
  $oj$$19$$.$Object$.$exportPrototypeSymbol$("SunburstNode.prototype.getColor", {$getColor$:$oj$$19$$.$SunburstNode$.prototype.$getColor$});
  $oj$$19$$.$SunburstNode$.prototype.$getLabel$ = function $$oj$$19$$$$SunburstNode$$$$getLabel$$() {
    return this.$_data$ ? this.$_data$.label : null;
  };
  $oj$$19$$.$Object$.$exportPrototypeSymbol$("SunburstNode.prototype.getLabel", {$getLabel$:$oj$$19$$.$SunburstNode$.prototype.$getLabel$});
  $oj$$19$$.$SunburstNode$.prototype.$getSize$ = function $$oj$$19$$$$SunburstNode$$$$getSize$$() {
    return this.$_data$ ? this.$_data$.size : null;
  };
  $oj$$19$$.$Object$.$exportPrototypeSymbol$("SunburstNode.prototype.getSize", {$getSize$:$oj$$19$$.$SunburstNode$.prototype.$getSize$});
  $oj$$19$$.$SunburstNode$.prototype.$getTooltip$ = function $$oj$$19$$$$SunburstNode$$$$getTooltip$$() {
    return this.$_data$ ? this.$_data$.tooltip : null;
  };
  $oj$$19$$.$Object$.$exportPrototypeSymbol$("SunburstNode.prototype.getTooltip", {$getTooltip$:$oj$$19$$.$SunburstNode$.prototype.$getTooltip$});
  $oj$$19$$.$SunburstNode$.prototype.isSelected = function $$oj$$19$$$$SunburstNode$$$isSelected$() {
    return this.$_data$ ? this.$_data$.selected : !1;
  };
  $oj$$19$$.$Object$.$exportPrototypeSymbol$("SunburstNode.prototype.isSelected", {isSelected:$oj$$19$$.$SunburstNode$.prototype.isSelected});
  $oj$$19$$.$__registerWidget$("oj.ojSunburst", $$$$19$$.oj.dvtBaseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{optionChange:null, rotateInput:null}, $_CreateDvtComponent$:function($context$$49$$, $callback$$96$$, $callbackObj$$5$$) {
    return DvtSunburst.newInstance($context$$49$$, $callback$$96$$, $callbackObj$$5$$);
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$6$$ = this._super();
    $styleClasses$$6$$.push("oj-sunburst");
    return $styleClasses$$6$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$7$$ = this._super();
    $styleClasses$$7$$["oj-sunburst-attribute-type-text"] = {path:"styleDefaults/_attributeTypeTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$7$$["oj-sunburst-attribute-value-text"] = {path:"styleDefaults/_attributeValueTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$7$$["oj-sunburst-node"] = {path:"nodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$7$$["oj-sunburst-node oj-hover"] = {path:"nodeDefaults/hoverColor", property:"border-top-color"};
    $styleClasses$$7$$["oj-sunburst-node oj-selected"] = [{path:"nodeDefaults/selectedOuterColor", property:"border-top-color"}, {path:"nodeDefaults/selectedInnerColor", property:"border-bottom-color"}];
    return $styleClasses$$7$$;
  }, $_GetEventTypes$:function() {
    return["optionChange", "rotateInput"];
  }, $_GetTranslationMap$:function() {
    var $ret$$34$$ = this._super();
    $ret$$34$$["DvtSunburstBundle.COLOR"] = this.$_GetTranslatedResource$("labelColor");
    $ret$$34$$["DvtSunburstBundle.SIZE"] = this.$_GetTranslatedResource$("labelSize");
    return $ret$$34$$;
  }, $_HandleEvent$:function($event$$201$$) {
    var $type$$81$$ = $event$$201$$ && $event$$201$$.getType ? $event$$201$$.getType() : null;
    $type$$81$$ === DvtSelectionEvent.TYPE ? this.$_UserOptionChange$("selection", $event$$201$$.getSelection()) : $type$$81$$ === DvtSunburstRotationEvent.TYPE ? this.$_UserOptionChange$("startAngle", $event$$201$$.getStartAngle()) : $type$$81$$ === DvtSunburstRotationEvent.TYPE_INPUT ? this._trigger("rotateInput", null, {value:$event$$201$$.getStartAngle()}) : this._super($event$$201$$);
  }, $_LoadResources$:function() {
    null == this.options._resources && (this.options._resources = {});
    this.options._resources.rotateCursor = $oj$$19$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/sunburst/rotate.cur");
  }, $_SupportsOptionChangeEvent$:function($key$$90$$) {
    return "selection" == $key$$90$$ || "startAngle" == $key$$90$$;
  }, getNodeBySubId:function($locator$$14$$) {
    return this._super($locator$$14$$);
  }, getSubIdByNode:function($node$$31$$) {
    return this._super($node$$31$$);
  }, getNode:function($subIdPath$$) {
    var $auto$$3$$ = this.$_component$.getAutomation();
    return new $oj$$19$$.$SunburstNode$($auto$$3$$.getNode($subIdPath$$));
  }});
});
