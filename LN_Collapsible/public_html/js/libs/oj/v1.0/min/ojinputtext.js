/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore","jquery","ojs/ojeditablevalue"],function(a,f){a.La("oj.inputBase",f.oj.editableValue,{version:"1.0.0",widgetEventPrefix:"oj",_ATTR_CHECK:[],_CLASS_NAMES:"",_WIDGET_CLASS_NAMES:"",_INPUT_HELPER_KEY:"",options:{converter:void 0,placeholder:void 0,readOnly:void 0},mA:function(a){var b=this._superApply(arguments);this.IS();return b},_InitOptions:function(c,b){this._super(c,b);a.ud.Ji([{attribute:"disabled",defaultOptionValue:!1,validateOption:!0},{attribute:"pattern",defaultOptionValue:""},
{attribute:"placeholder",defaultOptionValue:""},{attribute:"value",defaultOptionValue:null},{attribute:"readonly",option:"readOnly",defaultOptionValue:!1,validateOption:!0},{attribute:"required",defaultOptionValue:!1,coerceDomValue:!0,validateOption:!0},{attribute:"title",defaultOptionValue:""}],b,this)},_ComponentCreate:function(){var a=this.element,b=this._superApply(arguments),d=this.ot(a);"boolean"===typeof this.options.readOnly&&this.element.prop("readonly",this.options.readOnly);this.xm()&&
this.VU();"pattern"in d&&a.removeAttr("pattern");this.Au={};return b},Rh:function(){var a=this._superApply(arguments),b=this;this._CLASS_NAMES&&this.element.addClass(this._CLASS_NAMES);this.element.on("blur",f.proxy(this.rw,this));this.element.on("keydown",f.proxy(this.qr,this));this.element.on("drop",function(){this.focus()});this.et();f.each(["disabled","readOnly"],function(a,c){b.options[c]&&b.PE(c,b.options[c])});return a},PE:function(a,b){"disabled"===a&&this.element.prop("disabled",b);"readOnly"===
a&&(this.element.prop("readonly",b),this.yr("readOnly",b))},_setOption:function(c,b){var d=this._superApply(arguments);"disabled"!==c&&"readOnly"!==c||this.PE(c,b);"pattern"===c&&(this.Au[a.jc.VALIDATOR_TYPE_REGEXP]=this.FC(),this.pk());return d},_destroy:function(){var a=this._superApply(arguments);this.element.off("blur drop keydown");this.Xv&&this.Xv.remove();this.xm()&&this.element.unwrap();this.SL();return a},$g:{readOnly:"oj-read-only"},IS:function(){for(var a=this._ATTR_CHECK,b=0,d=a.length;b<
d;b++){var e=a[b].attr;"setMandatory"in a[b]&&this.element.attr(e,a[b].setMandatory)}},rw:function(a){this.Ad(this.Yg(),a)},qr:function(a){a.keyCode===f.ui.keyCode.ENTER&&this.Ad(this.Yg(),a)},xm:function(){return this._WIDGET_CLASS_NAMES},VU:function(){f(this.element).wrap(f("\x3cdiv\x3e").addClass(this._WIDGET_CLASS_NAMES));this.xl=this.element.parent()},et:function(){if(this._INPUT_HELPER_KEY&&this.xm()){var a=this.element.attr("aria-describedby")||"",b=this.Sh(this._INPUT_HELPER_KEY);this.element.attr("aria-describedby",
a+(" "+b));this.Xv=f("\x3cdiv class\x3d'oj-helper-hidden-accessible' id\x3d'"+b+"'\x3e"+this.J(this._INPUT_HELPER_KEY)+"\x3c/div\x3e");this.widget().append(this.Xv)}},ym:function(){var c=this._superApply(arguments);this.options.pattern&&(this.Au[a.jc.VALIDATOR_TYPE_REGEXP]=this.FC());return f.extend(this.Au,c)},yr:function(a,b){-1!=Object.keys(this.$g).indexOf(a)&&this.widget().toggleClass(this.$g[a],!!b)},FC:function(){if(!this.options.pattern)return null;var c={pattern:this.options.pattern,label:this.iv()};
f.extend(c,this.options.translations.regexp||{});return a.ga.ik(a.jc.VALIDATOR_TYPE_REGEXP).createValidator(c)},Sh:function(a){return this.uuid+"_"+a},wp:function(){return"rtl"===this.Ic()},getNodeBySubId:function(a){return this._super(a)},widget:function(){return this.xm()?this.xl:this.element}});a.La("oj.ojInputText",f.oj.inputBase,{version:"1.0.0",defaultElement:"\x3cinput\x3e",widgetEventPrefix:"oj",_ATTR_CHECK:[{attr:"type",setMandatory:"text"}],_CLASS_NAMES:"oj-inputtext-input",_WIDGET_CLASS_NAMES:"oj-inputtext oj-form-control oj-component",
options:{pattern:void 0},_GetDefaultStyleClass:function(){return"oj-inputtext"},rp:function(){return"oj-inputBase"}});a.La("oj.ojTextArea",f.oj.inputBase,{version:"1.0.0",defaultElement:"\x3ctextarea\x3e",widgetEventPrefix:"oj",_ATTR_CHECK:[],_CLASS_NAMES:"oj-textarea-input",_WIDGET_CLASS_NAMES:"oj-textarea oj-form-control oj-component",options:{pattern:void 0},_GetDefaultStyleClass:function(){return"oj-textarea"},rp:function(){return"oj-inputBase"}});a.La("oj.ojInputPassword",f.oj.inputBase,{version:"1.0.0",
defaultElement:"\x3cinput\x3e",widgetEventPrefix:"oj",_ATTR_CHECK:[{attr:"type",setMandatory:"password"}],_CLASS_NAMES:"oj-inputpassword-input",_WIDGET_CLASS_NAMES:"oj-inputpassword oj-form-control oj-component",options:{pattern:void 0},_GetDefaultStyleClass:function(){return"oj-inputpassword"}})});
//# sourceMappingURL=oj-modular.map