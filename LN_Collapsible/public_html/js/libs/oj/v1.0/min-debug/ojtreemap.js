/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtTreemap"], function($oj$$27$$, $$$$27$$) {
  $oj$$27$$.$__registerWidget$("oj.ojTreemap", $$$$27$$.oj.dvtBaseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{optionChange:null}, $_CreateDvtComponent$:function($context$$54$$, $callback$$102$$, $callbackObj$$7$$) {
    return DvtTreemap.newInstance($context$$54$$, $callback$$102$$, $callbackObj$$7$$);
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$10$$ = this._super();
    $styleClasses$$10$$.push("oj-treemap");
    return $styleClasses$$10$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$11$$ = this._super();
    $styleClasses$$11$$["oj-treemap-isolate-icon"] = {path:"_resources/isolate", property:"CSS_URL"};
    $styleClasses$$11$$["oj-treemap-isolate-icon oj-hover"] = {path:"_resources/isolateOver", property:"CSS_URL"};
    $styleClasses$$11$$["oj-treemap-isolate-icon oj-active"] = {path:"_resources/isolateDown", property:"CSS_URL"};
    $styleClasses$$11$$["oj-treemap-restore-icon"] = {path:"_resources/restore", property:"CSS_URL"};
    $styleClasses$$11$$["oj-treemap-restore-icon oj-hover"] = {path:"_resources/restoreOver", property:"CSS_URL"};
    $styleClasses$$11$$["oj-treemap-restore-icon oj-active"] = {path:"_resources/restoreDown", property:"CSS_URL"};
    $styleClasses$$11$$["oj-treemap-attribute-type-text"] = {path:"styleDefaults/_attributeTypeTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$11$$["oj-treemap-attribute-value-text"] = {path:"styleDefaults/_attributeValueTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$11$$["oj-treemap-node"] = {path:"nodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$11$$["oj-treemap-node oj-hover"] = {path:"nodeDefaults/hoverColor", property:"border-top-color"};
    $styleClasses$$11$$["oj-treemap-node oj-selected"] = [{path:"nodeDefaults/selectedOuterColor", property:"border-top-color"}, {path:"nodeDefaults/selectedInnerColor", property:"border-bottom-color"}];
    $styleClasses$$11$$["oj-treemap-node-header"] = [{path:"nodeDefaults/header/backgroundColor", property:"background-color"}, {path:"nodeDefaults/header/borderColor", property:"border-top-color"}, {path:"nodeDefaults/header/labelStyle", property:"CSS_TEXT_PROPERTIES"}];
    $styleClasses$$11$$["oj-treemap-node-header oj-hover"] = [{path:"nodeDefaults/header/hoverBackgroundColor", property:"background-color"}, {path:"nodeDefaults/header/hoverOuterColor", property:"border-top-color"}, {path:"nodeDefaults/header/hoverInnerColor", property:"border-bottom-color"}];
    $styleClasses$$11$$["oj-treemap-node-header oj-selected"] = [{path:"nodeDefaults/header/selectedBackgroundColor", property:"background-color"}, {path:"nodeDefaults/header/selectedOuterColor", property:"border-top-color"}, {path:"nodeDefaults/header/selectedInnerColor", property:"border-bottom-color"}];
    return $styleClasses$$11$$;
  }, $_GetEventTypes$:function() {
    return["optionChange"];
  }, $_GetTranslationMap$:function() {
    var $ret$$42$$ = this._super();
    $ret$$42$$["DvtTreemapBundle.COLOR"] = this.$_GetTranslatedResource$("labelColor");
    $ret$$42$$["DvtTreemapBundle.SIZE"] = this.$_GetTranslatedResource$("labelSize");
    return $ret$$42$$;
  }, $_HandleEvent$:function($event$$338_isolatedNode$$) {
    var $isolatedNodes_type$$86$$ = $event$$338_isolatedNode$$ && $event$$338_isolatedNode$$.getType ? $event$$338_isolatedNode$$.getType() : null;
    $isolatedNodes_type$$86$$ === DvtSelectionEvent.TYPE ? this.$_UserOptionChange$("selection", $event$$338_isolatedNode$$.getSelection()) : $isolatedNodes_type$$86$$ === DvtTreemapIsolateEvent.TYPE ? ($isolatedNodes_type$$86$$ = this.options.$_isolatedNodes$, $isolatedNodes_type$$86$$ || (this.options.$_isolatedNodes$ = [], $isolatedNodes_type$$86$$ = this.options.$_isolatedNodes$), ($event$$338_isolatedNode$$ = $event$$338_isolatedNode$$.getId()) ? ($isolatedNodes_type$$86$$.push($event$$338_isolatedNode$$), 
    this.$_UserOptionChange$("isolatedNode", $event$$338_isolatedNode$$)) : ($isolatedNodes_type$$86$$.pop(), this.$_UserOptionChange$("isolatedNode", 0 < $isolatedNodes_type$$86$$.length ? $isolatedNodes_type$$86$$[$isolatedNodes_type$$86$$.length] : null))) : this._super($event$$338_isolatedNode$$);
  }, $_SupportsOptionChangeEvent$:function($key$$106$$) {
    return "isolatedNode" == $key$$106$$ || "selection" == $key$$106$$;
  }, getNodeBySubId:function($locator$$21$$) {
    return this._super($locator$$21$$);
  }, getSubIdByNode:function($node$$79$$) {
    return this._super($node$$79$$);
  }, getNode:function($subIdPath$$1$$) {
    var $auto$$6$$ = this.$_component$.getAutomation();
    return new $oj$$27$$.$TreemapNode$($auto$$6$$.getNode($subIdPath$$1$$));
  }});
  $oj$$27$$.$TreemapNode$ = function $$oj$$27$$$$TreemapNode$$($data$$158$$) {
    this.$_data$ = $data$$158$$;
  };
  $goog$exportPath_$$("TreemapNode", $oj$$27$$.$TreemapNode$, $oj$$27$$);
  $oj$$27$$.$TreemapNode$.prototype.$getColor$ = function $$oj$$27$$$$TreemapNode$$$$getColor$$() {
    return this.$_data$ ? this.$_data$.color : null;
  };
  $oj$$27$$.$Object$.$exportPrototypeSymbol$("TreemapNode.prototype.getColor", {$getColor$:$oj$$27$$.$TreemapNode$.prototype.$getColor$});
  $oj$$27$$.$TreemapNode$.prototype.$getLabel$ = function $$oj$$27$$$$TreemapNode$$$$getLabel$$() {
    return this.$_data$ ? this.$_data$.label : null;
  };
  $oj$$27$$.$Object$.$exportPrototypeSymbol$("TreemapNode.prototype.getLabel", {$getLabel$:$oj$$27$$.$TreemapNode$.prototype.$getLabel$});
  $oj$$27$$.$TreemapNode$.prototype.$getSize$ = function $$oj$$27$$$$TreemapNode$$$$getSize$$() {
    return this.$_data$ ? this.$_data$.size : null;
  };
  $oj$$27$$.$Object$.$exportPrototypeSymbol$("TreemapNode.prototype.getSize", {$getSize$:$oj$$27$$.$TreemapNode$.prototype.$getSize$});
  $oj$$27$$.$TreemapNode$.prototype.$getTooltip$ = function $$oj$$27$$$$TreemapNode$$$$getTooltip$$() {
    return this.$_data$ ? this.$_data$.tooltip : null;
  };
  $oj$$27$$.$Object$.$exportPrototypeSymbol$("TreemapNode.prototype.getTooltip", {$getTooltip$:$oj$$27$$.$TreemapNode$.prototype.$getTooltip$});
  $oj$$27$$.$TreemapNode$.prototype.isSelected = function $$oj$$27$$$$TreemapNode$$$isSelected$() {
    return this.$_data$ ? this.$_data$.selected : !1;
  };
  $oj$$27$$.$Object$.$exportPrototypeSymbol$("TreemapNode.prototype.isSelected", {isSelected:$oj$$27$$.$TreemapNode$.prototype.isSelected});
});
