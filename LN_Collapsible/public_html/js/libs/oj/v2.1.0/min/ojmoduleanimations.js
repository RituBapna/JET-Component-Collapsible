/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","knockout","promise"],function(b,f){b.ea={};b.ea.eR={coverStart:{xr:"oj-animation-coverstart",Yo:"oj-animation-coverstart",Zo:!0},coverUp:{Yo:"oj-animation-coverup",Zo:!0},fade:{xr:"oj-animation-fade",Yo:"oj-animation-fade",Zo:!1},revealDown:{xr:"oj-animation-revealdown",Zo:!1},revealEnd:{xr:"oj-animation-revealend",Yo:"oj-animation-revealend",Zo:!1},zoomIn:{Yo:"oj-animation-zoomin",Zo:!0},zoomOut:{xr:"oj-animation-zoomout",Zo:!1}};b.ea.hT=function(a,b,c){var e=$(a);return new Promise(function(a){function f(){a(!0)}
var k="oj-"+c,l=k+"-active";e.addClass(b);e.addClass(k);window.requestAnimationFrame(function(){e.addClass(l)});if((k=e.css("animationDuration")||e.css("webkitAnimationDuration"))&&"0s"!=k)e.on("animationend webkitAnimationEnd",f);else if((k=e.css("transitionDuration")||e.css("webkitTransitionDuration"))&&"0s"!=k)e.on("transitionend webkitTransitionEnd",f);else a(!0)})};b.ea.y$=function(a,d,c){var e=[];c=b.ea.eR[c];a&&c&&c.xr&&e.push(b.ea.hT(a,c.xr,"leave"));d&&c&&c.Yo&&e.push(b.ea.hT(d,c.Yo,"enter"));
return Promise.all(e)};b.ea.VS=function(a,b){for(var c=f.virtualElements.firstChild(a);c;)1==c.nodeType?b.push(c):8==c.nodeType&&this.VS(c,b),c=f.virtualElements.nextSibling(c)};b.ea.caa=function(a,b){a._ojOldRoot=b};b.ea.Dea=function(a){return a._ojOldRoot};b.ea.LU=function(a){if(a.isInitial)return!1;if(1==a.node.nodeType)return!0;if(8==a.node.nodeType){var d=[];b.ea.VS(a.node,d);if(d&&1==d.length)return b.ea.caa(a,d[0]),!0}return!1};b.ea.bea=function(a){var d;1==a.node.nodeType?d=a.node:8==a.node.nodeType&&
(d=b.ea.Dea(a));return d};b.ea.eI=function(a){var b=$(document.createElement("div")),c={position:"absolute",height:a.offsetHeight+"px",width:a.offsetWidth+"px",left:a.offsetLeft+"px",top:a.offsetTop+"px"};b.appendTo(a.offsetParent);b.css(c);b.addClass("oj-animation-host-viewport");a=document.createElement("div");a.className="oj-animation-host";b.append(a);return a};b.ea.OU=function(a,d){var c={},e=b.ea.eR[d],f=b.ea.bea(a);e&&(e.Yo&&!e.Zo&&(c.newViewParent=b.ea.eI(f)),e.xr&&(c.oldViewParent=b.ea.eI(f)),
e.Yo&&e.Zo&&(c.newViewParent=b.ea.eI(f)));return c};b.ea.KU=function(a,d){return b.ea.y$(a.oldViewParent,a.newViewParent,d).then(function(){b.ea.Fia(a)})};b.ea.t_=function(a,b){var c=a[b];c&&(c=c.parentNode)&&c.parentNode&&c.parentNode.removeChild(c)};b.ea.Fia=function(a){a.removeOldView();a.insertNewView();b.ea.t_(a,"newViewParent");b.ea.t_(a,"oldViewParent")};b.ea.kq=function(a){return{canAnimate:b.ea.LU,prepareAnimation:function(d){return b.ea.OU(d,a)},animate:function(d){return b.ea.KU(d,a)}}};
b.ea.qJ=function(a){null==b.ea.QK&&(b.ea.QK=b.ze.K4("oj-animation-navigate-methods"));return b.ea.QK?b.ea.QK[a]:null};b.ea.eia=function(a,d){return b.ea.qJ(d)&&b.ea.LU(a)};b.ea.fia=function(a,d){var c=b.ea.qJ(d);return b.ea.OU(a,c)};b.ea.dia=function(a,d){var c=b.ea.qJ(d);return b.ea.KU(a,c)};b.ea.zW=function(a){return{canAnimate:function(d){return b.ea.eia(d,a)},prepareAnimation:function(d){return b.ea.fia(d,a)},animate:function(d){return b.ea.dia(d,a)}}};b.ea.hna=b.ea.kq("coverStart");o_("ModuleAnimations.coverStart",
b.ea.hna,b);b.ea.Rpa=b.ea.kq("revealEnd");o_("ModuleAnimations.revealEnd",b.ea.Rpa,b);b.ea.ina=b.ea.kq("coverUp");o_("ModuleAnimations.coverUp",b.ea.ina,b);b.ea.Qpa=b.ea.kq("revealDown");o_("ModuleAnimations.revealDown",b.ea.Qpa,b);b.ea.Eqa=b.ea.kq("zoomIn");o_("ModuleAnimations.zoomIn",b.ea.Eqa,b);b.ea.Fqa=b.ea.kq("zoomOut");o_("ModuleAnimations.zoomOut",b.ea.Fqa,b);b.ea.Qna=b.ea.kq("fade");o_("ModuleAnimations.fade",b.ea.Qna,b);b.ea.Jna=b.ea.zW("drillIn");o_("ModuleAnimations.drillIn",b.ea.Jna,
b);b.ea.Kna=b.ea.zW("drillOut");o_("ModuleAnimations.drillOut",b.ea.Kna,b);b.ea.kqa=function(a){return new function(){function d(a){return function(b){return c[a].call(c,b)}}var c,e=this;this.canAnimate=function(f){var h=a(f);c=null==h?null:b.ModuleAnimations[h];if(!c)return!1;for(var h=["prepareAnimation","animate"],k=0;k<h.length;k++){var l=h[k];e[l]=d(l)}return d("canAnimate")(f)}}};o_("ModuleAnimations.switcher",b.ea.kqa,b)});