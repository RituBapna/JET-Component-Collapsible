/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojeditablevalue","ojs/ojradiocheckbox"],function(b,f){(function(){b.ya("oj.ojRadioset",f.oj.editableValue,{version:"1.0.0",defaultElement:"\x3cdiv\x3e",widgetEventPrefix:"oj",options:{disabled:!1,value:void 0},refresh:function(){this._super();this.Aa()},widget:function(){return this.vqa},Yd:function(a,c){var e;this._super(a,c);b.ve.al([{W:"disabled",yc:!0},{W:"placeholder"},{W:"required",Ze:!0,yc:!0},{W:"title"}],c,this);this.Uf=this.KI();void 0===c.value&&(e=this.Uf.filter(":checked"),
e=0===e.length?void 0:e.val(),void 0!==e&&this.option("value",e,{_context:{Ic:!0,Va:!0}}),void 0===this.options.value&&(this.options.value=null))},_ComponentCreate:function(){var a=this.element;this._super();if(a.is("fieldset"))throw Error("ojRadioset cannot be bound to a fieldset. Use a div instead.");this.Uf._ojRadioCheckbox();this.vqa=a.addClass("oj-radioset oj-component").attr("role","radiogroup").wrapInner("\x3cdiv class\x3d'oj-radioset-wrapper'\x3e\x3c/div\x3e");this._on(this.Ml)},mf:function(){this._super();
this.Aa()},CG:function(){this.Uf=this.KI();this.Uf.filter(".oj-radio").each(function(){var a=void 0!==f(this).attr("disabled")?!!f(this).prop("disabled"):!1;f(this)._ojRadioCheckbox("option","disabled",a)});this.Uf.not(".oj-radio")._ojRadioCheckbox()},Focus:function(){this.Xd().first().focus();return!0},FG:function(){},KI:function(){var a=this.element,c=a.find("input[type\x3dradio]:first");0===c.length&&b.r.warn("Could not find any input type\x3dradio within this element");c=c.attr("name");return void 0===
c?(a=a.find("input[type\x3dradio]"),a.not("[name]")):a.find("input[type\x3dradio][name\x3d"+c+"]")},qf:function(a,b,e){a=this.element.find("input[type\x3dradio]");var f=a.filter(":checked");a=f.length?f:a.filter(":enabled").first();this.sf(b,e,{launcher:a})},_GetMessagingLauncherElement:function(){var a=this.Xd(),c=b.ze.Yk("radioset").renderInputAs;return c&&"html"!==c?this.widget():a},Aa:function(){this.po(this.options.disabled)},Ml:{change:function(a){this.Xz(a)}},Xz:function(b){var c=this.hg();
this.hc(c,b,a)},hg:function(){return this.qs()},oi:function(a){var b;b="[value\x3d'"+a+"']";void 0!==this.Uf&&(a=this.Uf.filter(b),void 0!==a&&0<a.length?(b=this.Uf.not(b),a._ojRadioCheckbox("option","checked",!0),void 0!==b&&0<b.length&&b._ojRadioCheckbox("option","checked",!1)):this.Uf._ojRadioCheckbox("option","checked",!1))},qs:function(){var a=this.Uf.filter(":checked");return 0===a.length?null:a.val()},_GetDefaultStyleClass:function(){return"oj-radioset"},Xd:function(){return this.KI()},BG:function(){},
Lz:function(){return!0},po:function(a){a=!!a;this.Uf.each(function(){f(this).data("oj-_ojRadioCheckbox").Zv(a)});this.Uf._ojRadioCheckbox("refreshDisabled")},_setOption:function(a,b){this._superApply(arguments);"disabled"===a&&this.po(b)},getNodeBySubId:function(a){var b=this._super(a);b||(a=a.subId,"oj-radioset-inputs"===a&&(b=this.Uf.get()));return b||null},_destroy:function(){var a=this._super(),b=this.element[0].firstChild;this.Uf&&this.Uf._ojRadioCheckbox("destroy");f(b).contents().unwrap();
return a}});var a={er:!1}})()});