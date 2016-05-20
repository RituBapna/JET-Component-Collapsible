/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojconveyorbelt"],function(a,f){(function(){var c={cut:"ojtabscut","paste-before":"ojtabspastebefore","paste-after":"ojtabspasteafter"};a.La("oj.ojTabs",f.oj.baseComponent,{widgetEventPrefix:"oj",delay:300,options:{selected:0,disabledTabs:null,truncation:"auto",selectOn:"click",orientation:"horizontal",removable:!1,reorderable:!1,beforeSelect:null,select:null,beforeDeselect:null,deselect:null,beforeRemove:null,remove:null,optionChange:null},
_ComponentCreate:function(){var a=this.options;this._super();this.Cy=!1;this.jG(a.orientation);this.eG(a.disabledTabs);this.UE();this.Vr();var c=a.selected;a.selected=void 0;this.Ya={};this.Ya.we=!1;this.Ya.xe=!1;this.Ya.fm=!1;this.Ya.ep=!1;this.xn();this.Km();this.Yb();c=this.RC(c);void 0===c&&(c=this.vn(0));a.selected=c},_init:function(){this.lC(this.options.selected)},lC:function(a){this.An(a)&&(a=this.OC(a),a=void 0===a?void 0:this.vn(a));this.Jp(a)},_OpenContextMenu:function(a,c){a.open(c,{launcher:this.Uf.children("[tabindex\x3d0]"),
initialFocus:"menu"})},qU:function(a){var c=f(this.document[0].activeElement).closest("li"),e=this.Ib.index(c),g=!0;if(!this.oD(a)){switch(a.keyCode){case f.ui.keyCode.RIGHT:case f.ui.keyCode.DOWN:e++;break;case f.ui.keyCode.UP:case f.ui.keyCode.LEFT:g=!1;e--;break;case f.ui.keyCode.END:e=this.Ib.length-1;break;case f.ui.keyCode.HOME:e=0;break;case 46:if(c=this.ma.find(".oj-tabs-close-icon"))a.preventDefault(),this.yF({target:c,currentTarget:c,preventDefault:f.noop});return;default:return}a.preventDefault();
clearTimeout(this.XU);var h=this.Su(e,g);a.ctrlKey||(c.attr("aria-selected","false"),this.Tk(h).attr("aria-selected","true"),this.XU=this._delay(function(){this.option("selected",h)},this.delay))}},tS:function(a){!this.oD(a)&&a.ctrlKey&&a.keyCode===f.ui.keyCode.UP&&(a.preventDefault(),this.ma.focus())},oD:function(a){var c=this.Aj(this.options.selected);if(a.ctrlKey&&a.keyCode===f.ui.keyCode.PAGE_UP)return this.Jp(this.Su(c-1,!1)),!0;if(a.ctrlKey&&a.keyCode===f.ui.keyCode.PAGE_DOWN)return this.Jp(this.Su(c+
1,!0)),!0},An:function(a){return 0<=a&&a<this.Ib.length?f(this.Ib[a]).hasClass("oj-disabled"):!1},TO:function(a,c){function e(){a>f&&(a=0);0>a&&(a=f);return a}for(var f=this.Ib.length-1;this.An(e());)a=c?a+1:a-1;return a},Su:function(a,c){a=this.TO(a,c);this.Oq(a).focus();return this.vn(a)},OC:function(a){a=this.Aj(a);for(var c=a+1,e=this.Ib.length-1;c<=e;){if(!this.An(c))return c;c++}for(c=a-1;0<=c;){if(!this.An(c))return c;c--}},_setOption:function(a,c,e){"selected"===a?(c=this.RC(c),void 0!==c&&
this.Jp(c)):"disabledTabs"===a?Array.isArray(c)&&(this.eG(c),this.refresh(),this.Vr()):"removable"===a?this.aU(c):"reorderable"===a?c!==this.options.reorderable&&(this.options.reorderable=c,this.kG(),this.refresh()):"orientation"===a?(this.jG(c),this.refresh()):"truncation"===a?(this.options.truncation=c,this.refresh()):("contextMenu"===a&&(this.aq(),c&&this.xn(c)),this._super(a,c,e),"selectOn"===a&&(this.tl(),this._super(a,c),this.Lj()))},refresh:function(){this._super();this.lO();this.UE();this.Yb()},
Yb:function(){var a=this.options,c=this.element.children(".oj-tabs-selected");this.ma=c.length?this.Tk(c.attr("id")):f();this.DN();this.tl();this.Lj();this.Ib.not(this.ma).attr({"aria-selected":"false",tabIndex:"-1"});this.Oc.not(this.di(this.ma)).hide().attr({"aria-expanded":"false","aria-hidden":"true"});this.ma.length?(this.ma.addClass("oj-selected").attr({"aria-selected":"true",tabIndex:"0"}),c.show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.Oq(0).attr("tabIndex","0");void 0!==
this.Kp&&(this.lC(this.Kp),this.Kp=void 0);"horizontal"==a.orientation?(this.DU(),this.qM(),void 0===this.options.selected||0==this.Aj(this.options.selected)?this.element.addClass("oj-first-child-selected"):this.element.removeClass("oj-first-child-selected")):this.element.removeClass("oj-first-child-selected");this.kG()},qM:function(){var a=this.Uf.uniqueId().attr("id");this.zi=this.cD().parent().ojConveyorBelt({orientation:"horizontal",contentParent:"#"+a})},UE:function(){var a=this;this.SB();this.Uf=
f("\x3cul\x3e").addClass("oj-tabs-nav oj-helper-clearfix").attr("role","tablist").prependTo(this.element);this.Ib=f();this.Oc=f();this.ap=f();this.element.children(":not(.oj-tabs-nav)").each(function(){var c=f(this).find("\x3e :first-child"),e=c.clone();e.addClass("oj-tabs-title").css({display:""}).attr({"aria-hidden":"false"});a.ap=a.ap.add(e);var g=e.wrap("\x3cli\x3e\x3cdiv\x3e\x3ca href\x3d'#'\x3e\x3c/a\x3e\x3c/div\x3e\x3c/li\x3e").parent();g.addClass("oj-tabs-anchor").attr({role:"presentation",
tabIndex:"-1"});var h=g.parent().addClass("oj-tabs-tab-content").parent().addClass("oj-tabs-tab").attr({role:"tab","aria-hidden":"false",tabIndex:"-1"});h.appendTo(a.Uf);a.Ib=a.Ib.add(h);var k=e[0];k.id&&a.CA(k);e.find("[id]").each(function(){a.CA(this)});c.hide().attr({"aria-hidden":"true"});c=g.uniqueId().attr("id");e=h.attr("aria-controls");k=f(this);k.hasClass("oj-disabled")&&(h.addClass("oj-disabled").attr("aria-disabled","true"),g.removeAttr("href"));e&&h.data("oj-tabs-aria-controls",e);h.attr({"aria-controls":a.SC(k),
"aria-labelledby":c});a.Oc=a.Oc.add(k);k.attr("aria-labelledby",c)});"vertical"==this.options.orientation&&(a.Uf.addClass("oj-tabs-nav-root"),window.setTimeout(function(){if(a&&a.ma){var c=0;a.Ib.addClass("oj-selected").each(function(){var a=f(this);c=Math.max(c,a.outerWidth())}).removeClass("oj-selected");a.ma.addClass("oj-selected");a.Ib.css({width:c+"px"});var e=a.Uf.outerWidth(!0),g=a.Uf.outerHeight(!0),h="rtl"==a.Ic(),k=h?a.element.css("padding-right"):a.element.css("padding-left"),k=parseInt(k,
10);h?a.Oc.css({"margin-right":e-1+k+"px","min-height":g+"px"}):a.Oc.css({"margin-left":e-1+k+"px","min-height":g+"px"})}},0));this.Oc.addClass("oj-tabs-panel").attr("role","tabpanel")},Lj:function(){var a={keydown:this.qU},c=this.options.selectOn,e=!1;if(c){var g=this;f.each(c.split(" "),function(c,d){"click"==d&&(e=!0);a[d]=g.cC})}c=this.Ib.not(".oj-disabled");this._on(c,a);e||this._on(c,{click:function(a){a.preventDefault()}});this._on(this.Oc,{keydown:this.tS});if(this.options.removable){var h=
{click:this.yF};this._on(c.find(".oj-tabs-close-icon"),h)}this._focusable(c);this._hoverable(c);this.Lp(c)},tl:function(){var a=this.Ib.not(".oj-disabled");this._off(a);this._off(this.Oc)},cC:function(a){var c=this.options,e=this.ma,g=f(a.currentTarget).closest("li"),h=e&&g[0]===e[0],k=this.di(g),e=e&&e.length?this.di(e):f(),l={fromTab:e,toTab:k};a.preventDefault();g.hasClass("oj-disabled")||this.Cy||h||e&&e.length&&!1===this._trigger("beforeDeselect",a,l)||!1===this._trigger("beforeSelect",a,l)||
(c.selected=this.pn(g),this.ma=g,k.addClass("oj-tabs-selected"),e.removeClass("oj-tabs-selected"),l.fromTab.length||l.toTab.length||f.error("ojTabs: Mismatching fragment identifier."),this.xU(a,l))},xU:function(b,c){var e=c.toTab,g=c.fromTab,h,k;c&&(g&&(h=g.attr("id")),e&&(k=e.attr("id")));this.Cy=!0;var l=this.Tk(h).removeClass("oj-selected");g.hide();0<g.length&&a.Components.rJ(g[0]);this.Tk(k).addClass("oj-selected");"horizontal"==this.options.orientation&&0<this.Ib.length&&(0==this.Aj(k)?this.element.addClass("oj-first-child-selected"):
this.element.removeClass("oj-first-child-selected"));e.show();0<e.length&&a.Components.sJ(e[0]);this.Cy=!1;void 0!==h&&this._trigger("deselect",b,c);this._trigger("select",b,c);this.Cc("selected",this.pn(null,g,h),this.pn(null,e,k),b?!0:!1);g.attr({"aria-expanded":"false","aria-hidden":"true"});l.attr("aria-selected","false");e.length&&g.length?l.attr("tabIndex","-1"):e.length&&this.Ib.filter(function(){return"0"===f(this).attr("tabIndex")}).attr("tabIndex","-1");e.attr({"aria-expanded":"true","aria-hidden":"false"});
this.Tk(k).attr({"aria-selected":"true",tabIndex:"0"})},Jp:function(a){void 0!==a&&(a=this.Tk(a),this.ma&&a[0]===this.ma[0]||(a=a.find(".oj-tabs-anchor")[0],this.cC({target:a,currentTarget:a,preventDefault:f.noop})))},DN:function(){if(this.options.removable&&"horizontal"==this.options.orientation){var a=this.J("removeCueText");this.Ib.not(".oj-disabled").each(function(c){var e=f(this).find("\x3e :first-child");e.addClass("oj-removable");c="ojtabs-id_rm_"+c;f(this).attr("aria-describedby",c);f("\x3ca href\x3d'#'\x3e").addClass("oj-tabs-icon oj-component-icon oj-clickable-icon oj-tabs-close-icon").attr({id:c,
tabIndex:"-1","aria-label":a,role:"presentation"}).appendTo(e)})}},lO:function(){this.Ib.find("oj-tabs-close-icon").remove()},SB:function(){this.Nr=!1;this.qD&&(a.da.ck(this.element[0],this.Fe),this.qD=!1,this.HE=void 0);this.zi?(this.zi.ojConveyorBelt("destroy"),this.zi.remove(),this.ma=this.zi=null):this.element.children(".oj-tabs-nav").remove()},_destroy:function(){this.aq();var a=this.options.orientation;"vertical"==a?this.element.removeClass("oj-tabs oj-component oj-tabs-vertical oj-helper-clearfix"):
this.element.removeClass("oj-tabs oj-component oj-tabs-horizontal oj-first-child-selected");this.tl();this.SB();this.Oc.each(function(){f(this).removeAttr("tabIndex").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("role").removeClass("oj-active oj-disabled oj-tabs-selected oj-tabs-gid oj-tabs-panel").removeUniqueId().css("display","");"vertical"==a&&f(this).css("margin-left","").css("min-height","");f(this).find("\x3e :first-child").css("display",
"").removeAttr("aria-hidden")})},aU:function(a){a!==this.options.removable&&(this.options.removable=a,this.refresh())},yF:function(a){var c=f(a.currentTarget).closest("li"),e=this.di(c),g={tab:e};if(c&&!1!==this._trigger("beforeRemove",a,g)){if(c.hasClass("oj-selected")){var h=this.OC(e.attr("id"));void 0===h?this.ma=this.options.selected=void 0:(this.options.selected=this.pn(this.Ib[h]),this.Kp=this.vn(h))}e.remove();c.remove();this.Vr();this.refresh();this.ma&&this.ma.focus();this._trigger("remove",
a,g)}},addTab:function(a){this.element.append(a);this.element.children(".oj-tabs-selected").length||(this.Kp=this.SC(a));this.refresh();this.Ib.last()[0].scrollIntoView(!1)},kG:function(){if(this.options.reorderable&&this.options.disabledTabs.length!==this.Ib.length){var a=this;this.Uf.sortable({axis:"horizontal"==a.options.orientation?"x":"y",stop:function(c,e){var f=e.item;a.$B(f,f.prev())}})}else this.Uf.sortable({disabled:!0})},jG:function(a){a||(a=this.options.orientation);if("horizontal"==a)"vertical"==
this.options.orientation&&this.Oc&&(this.element.removeClass("oj-tabs-vertical oj-helper-clearfix"),this.Oc.each(function(){f(this).css("margin-left","").css("min-height","")})),this.element.addClass("oj-tabs oj-component oj-tabs-horizontal");else if("vertical"==a)"horizontal"==this.options.orientation&&this.Oc&&this.element.removeClass("oj-tabs-horizontal"),this.element.addClass("oj-tabs oj-component oj-tabs-vertical oj-helper-clearfix");else return;this.options.orientation=a},FT:function(a){return a?
a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$\x26"):""},di:function(a){a=f(a).attr("aria-controls");return this.element.find(this.FT("#"+a))},Oq:function(a){return this.Ib.eq(a)},cD:function(){var a=this.Uf.parent();a.hasClass("oj-tabs-conveyor")||(a=this.Uf.wrap("\x3cdiv\x3e").parent().addClass("oj-tabs-conveyor"),a.wrap("\x3cdiv\x3e").parent().addClass("oj-tabs-nav-root").uniqueId().attr("id"));return a},CA:function(a){0>a.id.indexOf("ojtabs-id_")&&f(a).attr("id","ojtabs-id_"+a.id)},getNodeBySubId:function(a){if(null==
a)return this.element?this.element[0]:null;var c=a.subId;a=a.index;if("oj-conveyorbelt"!=c&&("number"!==typeof a||0>a||a>=this.Oc.length))return null;switch(c){case "oj-conveyorbelt":return this.zi?this.zi[0]:null;case "oj-tabs-panel":return this.Oc[a];case "oj-tabs-tab":return this.Ib[a];case "oj-tabs-title":return this.ap[a];case "oj-tabs-close-icon":return this.Oq(a).find("."+c)[0]}return null},dD:function(){return this.element[0].clientWidth},UD:function(){return this.HE>this.dD()},pY:function(){return this.Nr},
dG:function(a){this.Nr=a},ZP:function(){var a=Math.floor(this.dD()/this.Ib.length);this.options.removable&&(a-=28);return a},QA:function(){if(!this.Nr){var a=this.ZP();this.ap.each(function(){f(this).css("max-width",""+a+"px").addClass("oj-tabs-title-overflow")});this.dG(!0)}},pT:function(){this.Nr&&(this.ap.each(function(){f(this).css("max-width","").removeClass("oj-tabs-title-overflow")}),this.dG(!1))},tY:function(){},vh:function(){this.UD()?this.QA():this.pT()},wR:function(){return"auto"==this.options.truncation||
"progressive"==this.options.truncation},DU:function(){"horizontal"==this.options.orientation&&0<this.Ib.length&&this.wR()&&(null==this.Fe&&(this.Fe=this.vh.bind(this)),a.da.Bh(this.element[0],this.Fe),this.qD=!0,this.HE=this.cD()[0].scrollWidth,this.UD()&&this.QA())},Cc:function(a,c,e,f){this._trigger("optionChange",f,{option:a,previousValue:c,value:e,optionMetadata:{writeback:f?"shouldWrite":"shouldNotWrite"}})},th:function(a,c){this.Ya.tab="keydown"===a.originalEvent.originalEvent.type?this.ma:
f(a.originalEvent.target).closest("li");this.Ya.bZ=this.Ya.tab.attr("id");c.openOptions.position={my:"start top",at:"start bottom",of:this.Ya.tab[0]};if(this.Ya.we&&(this.Ya.fm||this.Ya.ep)){var e=!this.Ya.ls;this.Ya.fm.hasClass("oj-disabled")!=e&&(e?(this.Ya.fm.addClass("oj-disabled"),this.Ya.ep.addClass("oj-disabled")):(this.Ya.fm.removeClass("oj-disabled"),this.Ya.ep.removeClass("oj-disabled")),this.Ya.xe.ojMenu("refresh"))}},dh:function(a){var d=c[a];a='\x3ca href\x3d"#"\x3e'+this.J(a)+"\x3c/a\x3e";
return f("\x3cli id\x3d"+d+"\x3e"+a+"\x3c/li\x3e")},WR:function(a){if(!a||!a.length)return!1;this.Ya.ls=a},pE:function(a,c){if(!a||!a.length||!this.Ya.ls)return!1;var e=this.Ya.ls;this.Ya.ls=!1;this.$B(e,a,c)},uh:function(a,c){var e=c?c.item.attr("id"):void 0;"ojtabscut"===e?this.WR(this.Ya.tab):"ojtabspastebefore"===e?this.pE(this.Ya.tab,!0):"ojtabspasteafter"===e&&this.pE(this.Ya.tab,!1)},xn:function(a){var c,e;a||this.options.contextMenu||(c=this.element.attr("contextmenu"))&&(this.options.contextMenu=
"#"+c);if(a||this.options.contextMenu){c=a||this.options.contextMenu;e=f.type(c);if("function"==e){try{c=c()}catch(g){c=null}e=f.type(c)}if("string"===e){if(c=f(c)){c.css("display","none");e=this.Ya;if(!e)return;e.xe=c;e.we=!0}this.Ya.we&&a&&this.Km()}}},Km:function(){if(this.Ya&&this.Ya.we&&this.options.reorderable){var a=this.Ya.xe,c=this;a.on("ojselect",f.proxy(this.uh,this));a.on("ojbeforeopen",f.proxy(this.th,this));var e=!1;a.find("[data-oj-command]").each(function(){if(0===f(this).children("a").length){var a=
f(this).attr("data-oj-command").slice(8);f(this).replaceWith(c.dh(a));f(this).addClass("oj-menu-item");e=!0}});e&&a.ojMenu("refresh");this.Ya.fm=a.find("#ojtabspastebefore");this.Ya.ep=a.find("#ojtabspasteafter")}},aq:function(){var a=this.Ya;a&&a.we&&(a.we=!1,a.xe.off("ojselect"),a.xe.off("ojbeforeopen"),a.xe=null)},$B:function(a,c,e){this.An(this.Ib.index(a))||(a=this.di(a),c.length?e?this.di(c).before(a):this.di(c).after(a):0<this.Oc.length&&this.Oc.first().before(a),this.Vr(),this.refresh())},
SC:function(a){var c=a.attr("id");c||(c=a.uniqueId().attr("id"),a.addClass("oj-tabs-gid"));return c},Tk:function(a){return this.Oq(this.Aj(a))},RC:function(a){if("number"===typeof a){if(0<=a&&a<this.Oc.length)return this.vn(a)}else if("string"===typeof a&&-1!=this.Aj(a))return a},vn:function(a){return this.Oc.eq(a).attr("id")},Aj:function(a){return"number"===typeof a?a:this.Oc.index(f("#"+a))},pn:function(a,c,e){if(a||c)return a&&(c=this.di(a),e=c.attr("id")),c.hasClass("oj-tabs-gid")?this.Aj(e):
e},eG:function(a){this.element.children().removeClass("oj-disabled");this.Ib&&f(this.Ib).removeClass("oj-disabled");if(a&&0<a.length)for(var c=this.element.children(),e=this.zi?c.index(this.zi)+1:0,g,h=0;h<a.length;h++)g=a[h],"number"===typeof g&&0<=g&&e+g<c.length?f(c[e+g]).addClass("oj-disabled"):"string"===typeof g&&this.element.find("#"+g).addClass("oj-disabled")},Vr:function(){var a=[],c=this;this.Uf.children(".oj-disabled").each(function(){a.push(c.pn(f(this)))});this.options.disabledTabs=a}})})()});
//# sourceMappingURL=oj-modular.map