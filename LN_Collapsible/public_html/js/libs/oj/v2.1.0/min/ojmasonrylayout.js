/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojdnd"],function(b,f){function a(b,c,e,f,h,k){null==a.aH&&(a.aH=a.Zca());this.sc=b;this.zj=c;this.J$=e;f&&f.I5&&(this.Qla=f.I5);h&&(h.L5&&(this.uM=h.L5),h.K5&&(this.tM=h.K5),h.P5&&(this.zM=h.P5),h.O5&&(this.yM=h.O5),h.M5&&(this.wM=h.M5),h.N5&&(this.BD=h.N5),h.R5&&(this.BM=h.R5),h.S5&&(this.CM=h.S5),h.Q5&&(this.AM=h.Q5));k&&(k.C1&&(this.Cn=k.C1),k.X4&&(this.jh=k.X4),k.p3&&(this.WW=k.p3),k.y3&&(this.IJ=k.y3),k.u5&&(this.to=k.u5),k.K3&&(this.zt=k.K3),
k.h4&&(this.Lt=k.h4),k.g4&&(this.Dk=k.g4),k.f4&&(this.ho=k.f4),k.w5&&(this.ay=k.w5),k.Sf&&(this.P0=k.Sf),k.Kg&&(this.Q0=k.Kg));c=document.createElement("div");e=c.style;e.display="inline-block";e.overflow="hidden";e.visibility="hidden";f=document.createElement("div");e=f.style;e.display="inline-block";c.appendChild(f);b.insertBefore(c,b.firstChild);this.E0=c;this.Qq=f;var l=this;this.zk=function(a){l.vq(a)};this.OX=function(){l.fga()};this.sq=function(a){l.XJ(a)};this.uq=function(a){l.dK(a)}}(function(){function d(a){for(;a;){a=
a.nextSibling;var b=!0;if(a){var c=a.style;!c||c.visibility!==p&&c.display!==r||(b=!1)}if(a&&1===a.nodeType&&b)return a}return null}function c(a,b){for(var c=a;c;){var d=c.style;if(d&&(d.visibility===p||d.display===r))break;d=c.parentNode;if(d===b)return c;c=d}return null}function e(a,b){return b.tc<a.tc?1:a.tc<b.tc?-1:0}function g(a){a&&a.sort(e);return a}function h(a){var b=null;a=f(a);a.hasClass("oj-masonrylayout-tile-1x1")?b={colSpan:1,rowSpan:1}:a.hasClass("oj-masonrylayout-tile-2x1")?b={colSpan:2,
rowSpan:1}:a.hasClass("oj-masonrylayout-tile-3x1")?b={colSpan:3,rowSpan:1}:a.hasClass("oj-masonrylayout-tile-1x2")?b={colSpan:1,rowSpan:2}:a.hasClass("oj-masonrylayout-tile-1x3")?b={colSpan:1,rowSpan:3}:a.hasClass("oj-masonrylayout-tile-2x2")?b={colSpan:2,rowSpan:2}:a.hasClass("oj-masonrylayout-tile-2x3")?b={colSpan:2,rowSpan:3}:a.hasClass("oj-masonrylayout-tile-3x2")&&(b={colSpan:3,rowSpan:2});return b}function k(a){var b=null;a=f(a);a.hasClass("oj-masonrylayout-tile-1x1")?b="oj-masonrylayout-tile-1x1":
a.hasClass("oj-masonrylayout-tile-2x1")?b="oj-masonrylayout-tile-2x1":a.hasClass("oj-masonrylayout-tile-3x1")?b="oj-masonrylayout-tile-3x1":a.hasClass("oj-masonrylayout-tile-1x2")?b="oj-masonrylayout-tile-1x2":a.hasClass("oj-masonrylayout-tile-1x3")?b="oj-masonrylayout-tile-1x3":a.hasClass("oj-masonrylayout-tile-2x2")?b="oj-masonrylayout-tile-2x2":a.hasClass("oj-masonrylayout-tile-2x3")?b="oj-masonrylayout-tile-2x3":a.hasClass("oj-masonrylayout-tile-3x2")&&(b="oj-masonrylayout-tile-3x2");return b}
function l(a,b){f(a).removeClass(b)}function m(a,b){f(a).addClass(b)}b.ya("oj.ojMasonryLayout",f.oj.baseComponent,{defaultElement:"\x3cdiv\x3e",widgetEventPrefix:"oj",options:{reorderHandle:null,beforeInsert:null,insert:null,beforeRemove:null,remove:null,beforeResize:null,resize:null,beforeReorder:null,reorder:null},_ComponentCreate:function(){this._super();this.element.addClass("oj-masonrylayout oj-component");this.options.disabled&&b.r.warn(u);this.Cr=this.eventNamespace+"ReorderHandle";this.oa=
{};this.oa.vh=!1;this.oa.Je=!1;this.oa.zP=!1;this.oa.Wm=!1;this.oa.kp=!1;this.Zn();this.dw();this.Aa(!0)},refresh:function(){this._super();var a="rtl"===this.ec()!==this.xf;a&&this.VU();this.Aa(a)},yl:function(){this._super();this.Zc&&this.Aa(this.Zc[0])},sn:function(){this._super();this.Zc&&this.Aa(this.Zc[0])},qf:function(a,b,c){this.Hia(b);this.sf(b,c,{launcher:f(b.target).closest(":tabbable")})},Aa:function(c){if(this.kw()){this.Zc=null;this.xf="rtl"===this.ec();this.Fn=b.v.Sd();var d=this.element,
e=this.options;if(c){var f=this;this.to=function(a){f.wla(a)};this.zt=function(a){f.ega(a)};this.Lt=function(){f.xha()};this.Dk=function(){f.wha()};this.ho=function(){f.vha()};if(!this.Cf){var n={};n.I5=v;var p={L5:"oj-masonrylayout-transition-resize-to",K5:"oj-masonrylayout-transition-resize-to-fast",P5:"oj-masonrylayout-tile-transition-move-to",O5:"oj-masonrylayout-tile-transition-move-to-fast",M5:"oj-masonrylayout-tile-transition-hide-from",N5:"oj-masonrylayout-tile-transition-hide-to"};p.R5=w;
p.S5="oj-masonrylayout-tile-transition-show-to";p.Q5="oj-masonrylayout-tile-transition-resize-to";var q={};q.C1=m;q.X4=l;q.p3=k;q.y3=h;q.u5=this.to;q.K3=this.zt;q.h4=this.Lt;q.g4=this.Dk;q.f4=this.ho;q.w5=g;q.Sf=b.Components.Sf;q.Kg=b.Components.Kg;this.qka();this.Cf=new a(d[0],this.xf,"enabled"===b.ba.EN(),n,p,q)}this.qX=function(a){f.hfa(a)};this.nX=function(a){f.dfa(a)};this.pX=function(a){f.gfa(a)};this.oX=function(a){f.efa(a)};this.lX=function(a){f.cfa(a)};this.rX=function(a){f.ifa(a)};e.reorderHandle&&
this.t0()}else e=d.children(),this.lM(e),this.bM(e),this.taa();this.Cf.Pm(c);c&&(this.eh=function(){f.Ve()},b.v.Nh(d[0],this.eh))}else d=!1,this.Zc&&(d=this.Zc[0]),this.Zc=[c||d]},_destroy:function(){this.Vp();var a=this.element;b.v.Oi(a[0],this.eh);this.eh=null;this.nka();for(var c=this.xk(),d=c.length,e=0;e<d;e++)delete c[e].tc;this.VU();a.removeClass("oj-masonrylayout oj-component");this.options.reorderHandle&&this.b1();this.Ls=this.ho=this.Dk=this.Lt=this.zt=this.to=this.rX=this.lX=this.oX=this.pX=
this.nX=this.qX=null;this._super()},_setOption:function(a,c,d){var e=!1;switch(a){case "reorderHandle":this.b1();e=!0;break;case "disabled":b.r.warn(u);break;case "contextMenu":b.v.Sd()||(this.Vp(),c&&this.Zn(c))}this._super(a,c,d);e&&c&&this.t0()},resizeTile:function(a,b){var c=this.Cf;c.vE()&&c.jE();var d=f(a),e=d[0],g=k(e);if(b==g)throw Error("JET MasonryLayout: Unable to resize child "+a+" to style class "+b+" because "+b+" is already applied.");!1!==this._trigger("beforeResize",null,{tile:d,
previousSizeStyleClass:g,sizeStyleClass:b})&&(this.fw||(this.fw=[]),this.fw.push(e,g,b),c.resizeTile(a,b))},insertTile:function(a,c){var d=this.Cf;d.vE()&&d.jE();isNaN(c)&&(c=-1);var e=f(a),g=e[0];!1!==this._trigger("beforeInsert",null,{tile:e,index:c})&&(g.LY=c,d.Dg()&&e.addClass(w),e=g.style,e.top="-1px",this.xf?e.right="-1px":e.left="-1px",this.$n(g,c),d.Voa(g,c),b.Components.Sf(g),this.Ls||(this.Ls=[]),this.Ls.push(a))},removeTile:function(a){var c=this.Cf;c.vE()&&c.jE();var d=f(a),e=d[0];if(b.td.YD(e)){var g=
this.xk(!0),e=g.indexOf(e);0<e&&(this.mI=g[e-1])}!1!==this._trigger("beforeRemove",null,{tile:d})&&c.Ooa(a)},Ve:function(){this.jw||this.SX||this.Cf.Npa()},wla:function(a){var b=f(a),c=a.LY;delete a.LY;this.options.reorderHandle&&this.bM(b);this._trigger("insert",null,{tile:b,index:c})},ega:function(a){var c=f(a);this.options.reorderHandle&&this.lM(c);b.Components.Kg(a);a.parentNode.removeChild(a);this.ZC(a);this._trigger("remove",null,{tile:c})},xha:function(){if(this.Ls){for(var a=this.Cf,b=this.Ls,
c=0;c<b.length;c++)a.cqa(b[c]);this.Ls=null}if(this.fw){a=this.fw;for(c=0;c<a.length;c+=3){var b=a[c+1],d=a[c+2],b={tile:f(a[c]),previousSizeStyleClass:b,sizeStyleClass:d};this._trigger("resize",null,b)}this.fw=null}this.jw&&(this.KA?this.ffa():this.hH&&this.mX())},wha:function(){this.SX=!0;this.EC=null;var a=document.activeElement;a&&b.v.bl(this.element[0],a)&&(this.EC=a)},vha:function(){this.SX=!1;var a=this.element[0];if(this.EC){var c=this.EC;this.EC=null;if(this.mI){if(c=this.mI,this.mI=null,
c&&b.v.bl(a,c)){var a=this.xk(a,!0),d=a.indexOf(c);0<=d&&d<a.length-1?b.td.BN(a[d+1]):b.td.BN(c)}}else b.v.bl(a,c)?b.td.Fy(c):b.td.BN(a)}},VU:function(){var a=this.Cf;a&&a.destroy();this.Cf=null},kw:function(){var a=document.createElement("div"),b=a.style;b.width="10px";b.height="10px";b=this.element[0];b.appendChild(a);var c=!1;try{c=0<a.offsetWidth&&0<a.offsetHeight}catch(d){}b.removeChild(a);return c},xk:function(a){for(var b=this.element.children(v),c=b.length,d=[],e=0;e<c;e++){var f=b[e];if(!a||
a&&f!==this.zd){var g=f.style;g.visibility!==p&&g.display!==r&&d.push(f)}}return d},qka:function(){var a=this.xk();if(a)for(var b=0;b<a.length;b++){var c=a[b];c.tc||(c.tc=b+1)}},taa:function(){var a=this.xk();if(a)for(var b=0;b<a.length;b++){var c=a[b];c.tc||this.$n(c,b)}},nka:function(){var a=this.xk(),c=this.xk();g(c);for(var d=0;d<a.length;d++){var e=a[d],f=c[d];e!=f&&(b.Components.Kg(f),e.parentNode.insertBefore(f,e),b.Components.Sf(f),e=a.indexOf(f),e>d&&(a.splice(e,1),a.splice(d,0,f)))}},$n:function(a,
b){var c=this.xk();0>b&&(b=c.length);if(c)for(var d=0;d<c.length;d++){var e=c[d];e.tc&&e.tc>=b+1&&e.tc++}a.tc=b+1},ZC:function(a){if(a.tc){var b=this.xk();if(b)for(var c=0;c<b.length;c++){var d=b[c];d.tc&&d.tc>a.tc&&d.tc--}delete a.tc}},Zn:function(a){var b=null,c=null;a||this.options.contextMenu||(b=this.element.attr("contextmenu"))&&(this.options.contextMenu="#"+b);if(a||this.options.contextMenu){b=a||this.options.contextMenu;c=f.type(b);if("function"==c){try{b=b()}catch(d){b=null}c=f.type(b)}if("string"===
c){if(b=f(b)){b.css("display",r);c=this.oa;if(!c)return;c.Je=b;c.vh=!0}this.oa.vh&&a&&this.dw()}}},dw:function(){if(this.oa&&this.oa.vh&&this.options.reorderHandle){var a=this.oa.Je,b=this;a.on("ojselect",f.proxy(this.rj,this));var c=!1;a.find("[data-oj-command]").each(function(){if(0===f(this).children("a").length){var a=f(this).attr("data-oj-command").slice(17);f(this).replaceWith(b.qi(a));f(this).addClass("oj-menu-item");c=!0}});c&&a.ojMenu("refresh");this.oa.zP=a.find("#"+y);this.oa.Wm=a.find("#"+
x);this.oa.kp=a.find("#"+B)}},Vp:function(){var a=this.oa;a&&a.vh&&(a.vh=!1,a.Je.off("ojselect"),a.Je=null)},Hia:function(a){a=c(a.originalEvent.target,this.element[0]);this.oa.tile=a;if(this.oa.vh){var b=this.oa.aE,e=!1,f=this.oa.zP;if(f){var g=f.hasClass(q),h=!1;b&&a===b&&(h=!0);h&&!g?(f.addClass(q),e=!0):!h&&g&&(f.removeClass(q),e=!0)}if(f=this.oa.Wm)g=f.hasClass(q),h=!1,b&&a!==b&&a!==d(b)||(h=!0),h&&!g?(f.addClass(q),e=!0):!h&&g&&(f.removeClass(q),e=!0);if(f=this.oa.kp)g=f.hasClass(q),h=!1,b&&
b!==a&&b!==d(a)||(h=!0),h&&!g?(f.addClass(q),e=!0):!h&&g&&(f.removeClass(q),e=!0);e&&this.oa.Je.ojMenu("refresh")}},qi:function(a){var b=O[a];a=J[a];var c=f('\x3ca href\x3d"#"\x3e\x3c/a\x3e');c.text(this.A(a));c.wrap("\x3cli id\x3d"+b+"\x3e\x3c/li\x3e");return c.parent()},Mha:function(a){a&&(this.oa.aE=a)},cZ:function(a,b){if(a&&this.oa.aE){var c=this.oa.aE;this.oa.aE=!1;this.gca(c,a,b)}},gca:function(a,b,c){var e=a.tc-1,g=f(a);if(!1!==this._trigger("beforeReorder",null,{tile:g,fromIndex:e})){this.ZC(a);
var h=b.tc-1;c||h++;var k=this.element[0];c||(b=d(b));this.$n(a,h);k.insertBefore(a,b);this.Cf.Pm(!0);this._trigger("reorder",null,{tile:g,fromIndex:e,toIndex:h})}},rj:function(a,b){var c=b?b.item.attr("id"):void 0;c===y?this.Mha(this.oa.tile):c===x?this.cZ(this.oa.tile,!0):c===B&&this.cZ(this.oa.tile,!1)},dX:function(a){var b=this.xk(!0);g(b);for(var c=b.length,d=0;d<c;d++)if(b[d]===a)return d;return-1},t0:function(){var a=this.element,b=a.children();this.bM(b);a.on("dragstart"+this.Cr,this.qX).on("dragenter"+
this.Cr,this.nX).on("dragover"+this.Cr,this.pX).on("dragleave"+this.Cr,this.oX).on("dragend"+this.Cr,this.lX).on("drop"+this.Cr,this.rX)},bM:function(a){var b=this.options;a.filter(b.reorderHandle).attr(s,"true").addClass(t);a.find(b.reorderHandle).attr(s,"true").addClass(t)},b1:function(){var a=this.element,b=a.children();this.lM(b);a.off(this.Cr)},lM:function(a){var b=this.options;a.filter(b.reorderHandle).removeAttr(s).removeClass(t);a.find(b.reorderHandle).removeAttr(s).removeClass(t)},hfa:function(a){if(this.options.reorderHandle&&
!this.jw){var b=c(a.target,this.element[0]);if(b){var d=this.dX(b);b.EK=d;d={tile:f(b),fromIndex:d};!1!==this._trigger("beforeReorder",null,d)&&(a=a.originalEvent,this.xI(b,a.pageX,a.pageY,a.dataTransfer))}}},dfa:function(a){a=a.originalEvent;var c=a.relatedTarget,d=this.element[0],e=!1;c?e=d!=c&&!b.v.bl(d,c):this.jV&&(e=(c=document.elementFromPoint(a.clientX,a.clientY))&&(c==d||b.v.bl(d,c)));e&&((this.jV=!1,this.Nn)?this.zd&&(f(this.zd).css("display",""),this.Cf.Pm(!1,!0)):a.dataTransfer.dropEffect=
"none")},gfa:function(a){var b=a.originalEvent;b.dataTransfer.dropEffect="move";this.nca(b.pageX,b.clientX,b.clientY);a.preventDefault();return!1},efa:function(a){var c=a.originalEvent,d=c.relatedTarget;a=this.element[0];var e=!1;e=d?a!=d&&!b.v.bl(a,d):(c=document.elementFromPoint(c.clientX,c.clientY))&&c!=a&&!b.v.bl(a,c);e&&(this.jV=!0,this.zd&&(f(this.zd).css("display",r),this.Cf.Pm(!1,!0)))},UT:function(){if(this.nB){clearTimeout(this.nB);this.nB=null;var a=this.Nn;a&&f(a).removeClass("oj-drag")}},
cfa:function(){this.UT();if(!this.jH){var a=this.Nn;if(a&&this.zd){var c=this.zd;b.v.bl(this.element[0],a)&&(f(c).css("display",""),this.ZC(c),c.parentNode.removeChild(c),f(a).css("display",""),this.$n(a,a.tc-1),this.Cf.Pm(!1,!0));delete a.EK}this.zd=this.Nn=null;this.MA=this.KA=!1;this.wI=null;this.jw=this.hH=!1}},ifa:function(a){var b=this.Cf;b.vE()&&b.jE();this.UT();b=a.originalEvent;this.vca(this.Nn,b.pageX,b.pageY);a.stopPropagation();return!1},xI:function(a,c,d,e){this.jw=!0;this.iH=this.MA=
this.jH=!1;this.Nn=a;var g=this.element[0],h=k(a),l=this.zd=document.createElement("div");l.tc=a.tc;l.className=h+" oj-drop";var h=l.style,m=a.style;h.top=m.top;this.xf?h.right=m.right:h.left=m.left;h=f(a).offset();g.insertBefore(l,a);this.wI=c={left:c-h.left,top:d-h.top};f(a).addClass("oj-drag");e.effectAllowed="move";e.setData("text/html",a.outerHTML);e.setDragImage(a,c.left,c.top);var n=this;this.nB=setTimeout(function(){n.iH=!0;m.display=r;f(a).removeClass("oj-drag");n.nB=null;b.Components.gp(a)},
0)},nca:function(a,b,e){this.MA=!0;if(this.iH&&!this.KA){var g=this.element[0];b=document.elementFromPoint(b,e);if((b=c(b,g))&&b!==this.zd&&b!==this.Nn){var h=f(g).offset();e=d(this.zd);a=a-h.left>=b.offsetLeft+.5*b.offsetWidth;this.ZC(this.zd);a&&!this.xf||!a&&this.xf?(a=d(b))?(this.$n(this.zd,a.tc-1),g.insertBefore(this.zd,a)):(this.$n(this.zd,b.tc),g.appendChild(this.zd)):(this.$n(this.zd,b.tc-1),g.insertBefore(this.zd,b));e!==d(this.zd)&&(this.KA=this.Cf.Pm(!1,!0))}}},ffa:function(){this.KA=!1},
vca:function(a,c,d){this.jH=!0;var e=this.element[0],g=this.zd;this.zd=null;b.Components.Kg(a);e.replaceChild(a,g);b.Components.Sf(a);a.tc=g.tc;g=a.style;g.display="";b.Components.Rm(a);var h=f(e).offset(),k=this.wI;g.top=d-k.top-h.top+n;c=c-k.left-h.left;this.xf?(g.right=e.offsetWidth-(c+f(a).outerWidth(!0))+n,g.left=""):g.left=c+n;this.wI=null;this.MA?this.hH=this.Cf.Pm(!1,!0):this.mX()},mX:function(){this.iH=this.MA=this.jH=this.jw=this.hH=!1;var a=this.Nn;this.Nn=null;var b=a.EK;delete a.EK;var c=
this.dX(a),a={tile:f(a),fromIndex:b,toIndex:c};this._trigger("reorder",null,a)},getNodeBySubId:function(a){return this._super(a)},getSubIdByNode:function(a){return this._super(a)}});var n="px",p="hidden",r="none",s="draggable",q="oj-disabled",t="oj-draggable",v=".oj-masonrylayout-tile-1x1, .oj-masonrylayout-tile-1x2, .oj-masonrylayout-tile-1x3, .oj-masonrylayout-tile-2x1, .oj-masonrylayout-tile-2x2, .oj-masonrylayout-tile-2x3, .oj-masonrylayout-tile-3x1, .oj-masonrylayout-tile-3x2",w="oj-masonrylayout-tile-transition-show-from",
u="JET MasonryLayout: 'disabled' option not supported",y="ojmasonrylayoutcut",x="ojmasonrylayoutpastebefore",B="ojmasonrylayoutpasteafter",O={cut:y,"paste-before":x,"paste-after":B},J={cut:"labelCut","paste-before":"labelPasteBefore","paste-after":"labelPasteAfter"}})();a.prototype.Pm=function(a,b){var e=!1;a?(e=this.gh()?!0:!1,this.w_()):(this.Dk&&this.Dk(),this.DM(b),e=this.xM());return e};a.prototype.destroy=function(){for(var a=this.sc,b=this.qq(),e=0;e<b.length;e++){var f=b[e].style;this.zj?
f.right="":f.left="";f.top=""}a.removeChild(this.E0);this.Q0=this.P0=this.ay=this.ho=this.Dk=this.Lt=this.zt=this.to=this.IJ=this.WW=this.jh=this.Cn=this.sc=this.Dl=this.lk=this.pi=this.mk=this.fj=this.uq=this.sq=this.OX=this.zk=this.Qq=this.E0=null};a.prototype.resizeTile=function(a,b){var e=this.sc.querySelector(a);if(e){this.mk||(this.mk=[]);var f=this.mk;f.push(e);f.push(b);this.D_=!0;this.Jx()}};a.prototype.Voa=function(a,b){var e=this.qq();this.ay&&this.ay(e);var f=null;0<=b&&b<e.length&&(f=
e[b]);this.sc.insertBefore(a,f);this.Jx()};a.prototype.cqa=function(b){if(b=this.sc.querySelector(b))this.pi||(this.pi=[]),this.pi.push(b),this.eM=!0,this.uj!==a.kS&&this.uj!==a.kA?this.Jx():this.eM=!1};a.prototype.Ooa=function(a){if(a=this.sc.querySelector(a))this.lk||(this.lk=[]),this.lk.push(a),this.PX=!0,this.Jx()};a.prototype.Npa=function(){this.D_||this.PX||this.eM||(this.Dk&&this.Dk(),this.DM(!1),this.xM())};a.prototype.Dg=function(){if(this.d1)return!1;this.daa||(this.z$=this.J$?!1:a.aha(a.aH[0],
a.aH[1]),this.daa=!0);return this.z$};a.prototype.vE=function(){return null!=this.uj||null!=this.fj&&0<this.fj.length};a.prototype.jE=function(){this.d1=!0;this.em(this.zM);this.em(this.yM);this.em(this.wM);this.em(this.BD);this.em(this.BM);this.em(this.CM);this.em(this.AM);this.jh(this.Qq,this.uM);this.jh(this.Qq,this.tM);a.ie(this.sc,"transitionend",this.zk);a.ie(this.sc,"webkitTransitionEnd",this.zk);for(var b=this.qq(),c=0;c<b.length;c++){var e=b[c];e.HA&&delete e.HA;a.ie(e,"transitionend",this.sq);
a.ie(e,"webkitTransitionEnd",this.sq);a.ie(e,"transitionend",this.uq);a.ie(e,"webkitTransitionEnd",this.uq)}this.At?(clearTimeout(this.At),this.At=null,this.XJ(null)):this.du?(clearTimeout(this.du),this.du=null,this.dM()):this.uj===a.kA||null!=this.fj&&0<this.fj.length?this.vq(null):this.uj===a.lS&&this.dK(null);this.d1=!1};a.Ada=function(b){var c=a.Iw(b);return{Tf:b.offsetWidth+(a.ng(c.marginLeft)+a.ng(c.marginRight)),ph:b.offsetHeight+(a.ng(c.marginTop)+a.ng(c.marginBottom))}};a.zda=function(b){b=
a.Iw(b);return{paddingLeft:a.ng(b.paddingLeft),paddingRight:a.ng(b.paddingRight),paddingTop:a.ng(b.paddingTop),paddingBottom:a.ng(b.paddingBottom),borderLeftWidth:a.ng(b.borderLeftWidth),borderRightWidth:a.ng(b.borderRightWidth),borderTopWidth:a.ng(b.borderTopWidth),borderBottomWidth:a.ng(b.borderBottomWidth)}};a.Iw=function(a){var b=a.ownerDocument.defaultView,e=null;return e=b?b.getComputedStyle(a,null):a.currentStyle};a.ng=function(a){return 0<a.length&&"auto"!=a?(a=parseInt(a,10),isNaN(a)&&(a=
0),a):0};a.uf=function(a,b,e){a.addEventListener?a.addEventListener(b,e,!1):a.attachEvent&&a.attachEvent("on"+b,e)};a.ie=function(a,b,e){a.removeEventListener?a.removeEventListener(b,e,!1):a.detachEvent&&a.detachEvent("on"+b,e)};a.oT=function(a,b){if(a)for(var e=0;e<a.length;e++)if(a[e]==b)return e;return-1};a.aha=function(a,b){var e=["gecko",16,"trident",6,"webkit",533.1],f=e.length;if(0==f%2)for(var h=0;h<=f-2;h+=2)if(a==e[h]){if(b>=e[1+h])return!0;break}return!1};a.Zca=function(){var b=a.zi,c=
null,e=-1,f=navigator.userAgent.toLowerCase();-1!=f.indexOf("msie")||-1!=f.indexOf("trident")?(c="trident",e=b(f,/trident\/(\d+[.]\d+)/),-1==e&&(e=b(f,/msie (\d+\.\d+);/),-1==e&&(e=b(f,/msie (\d+\.\d+)b;/)),e-=4),null!=document.documentMode&&(e=Math.min(e,document.documentMode-4))):-1!=f.indexOf("applewebkit")?(c="webkit",e=b(f,/applewebkit\/(\d+([.]\d+)*)/)):-1!=f.indexOf("gecko/")&&(c="gecko",e=b(f,/rv:(\d+[.]\d+)/));return[c,e]};a.zi=function(a,b){var e=a.match(b);return e&&(e=e[1])?parseFloat(e):
-1};a.Maa=function(a,b){return a.WE>b.WE?1:a.WE<b.WE?-1:a.VE>b.VE?1:a.VE<b.VE?-1:0};a.prototype.Jx=function(){this.oC||(this.uj?this.mL||(this.mL=!0):this.oC=setTimeout(this.OX,0))};a.prototype.qq=function(){for(var a=this.sc.querySelectorAll(this.Qla),b=[],e=0;e<a.length;e++){var f=a[e],h=f.style;0<f.offsetWidth&&0<f.offsetHeight&&"hidden"!=h.visibility&&b.push(f)}return b};a.prototype.xM=function(){var b=this.fj,c=this.gh();if(this.mk){var e=this.mk;c||(c=[]);for(var f=0;f<e.length;f+=2){var h=
e[f];0>a.oT(c,h)&&c.push(h)}}e=!1;if(!c||1>c.length){if(!b||1>b.length)this.fj=null,this.vq(null),e=!0}else this.fj=c;b=null!=c&&0<c.length;this.Dg()||e||this.vq(null);return b};a.prototype.gh=function(){var b=this.sc,c=this.qq();this.ay&&this.ay(c);var e=this.FH=null;this.In=0;this.qa=1;this.Rt=null;var f=[],h=[],k=[],l=this.zj,m=a.zda(b),n=0,p=[];this.nT=p;for(var r=0;r<c.length;r++){var s=c[r],q=this.IJ(s);(e=s.HA)&&delete s.HA;if(!this.FH){var t=q;e&&(t=document.createElement("div"),t.className=
e,t=this.IJ(t));this.FH=this.eaa(s,t)}e=this.FH;this.Rt||(this.In=Math.max(Math.floor((b.offsetWidth-m.paddingLeft-m.paddingRight-m.borderLeftWidth-m.borderRightWidth)/e.Tf),1),this.xga(this.In,this.qa),n=this.In);q.colSpan>n&&(n=q.colSpan);q.colSpan>this.In&&(q.colSpan=this.In);for(var v=!1,t=0;t<this.qa;t++){for(var w=0;w<this.In;w++)if(this.Tca(w,t,q)){var v=s.style,u={top:v.top};l?u.right=v.right:u.left=v.left;h.push(u);this.dL(s,w,t,q,e,m);l&&k.push(w);v=!0;p.push({VE:w,WE:t,tile:s});break}if(v)break;
t===this.qa-1&&this.YS()}}e&&(b=this.Qq.style,b.width=n*e.Tf+"px",b.height=this.qa*e.ph+"px");for(r=0;r<c.length;r++)s=c[r],v=s.style,u=h[r],""!=u.top&&(l&&parseInt(v.right,10)!==parseInt(u.right,10)||!l&&parseInt(v.left,10)!==parseInt(u.left,10)||parseInt(v.top,10)!==parseInt(u.top,10))&&f.push(s);1>f.length&&(f=null);return f};a.prototype.w_=function(){var b=this.nT;this.nT=null;for(var b=b.sort(a.Maa),c=this.qq(),e=0;e<c.length;e++){var f=c[e],h=b[e].tile;f!=h&&(this.Q0(h),f.parentNode.insertBefore(h,
f),this.P0(h),f=a.oT(c,h),f>e&&(c.splice(f,1),c.splice(e,0,h)))}};a.prototype.xga=function(a,b){for(var e=this.Rt=[],f=0;f<b;f++){var h=[];e.push(h);for(var k=0;k<a;k++)h[k]=!1}};a.prototype.YS=function(){this.qa++;var a=[];this.Rt.push(a);for(var b=0;b<this.In;b++)a[b]=!1};a.prototype.Tca=function(a,b,e){var f=e.colSpan;e=e.rowSpan;for(var h=b;h<b+e;h++){h>=this.qa&&this.YS();for(var k=a;k<a+f;k++)if(k>=this.In||this.Rt[h][k])return!1}return!0};a.prototype.dL=function(a,b,e,f,h,k){var l=f.colSpan;
f=f.rowSpan;for(var m=this.Rt,n=e;n<e+f;n++)for(var p=b;p<b+l;p++)m[n][p]=!0;a=a.style;a.top=k.paddingTop+e*h.ph+"px";this.zj?a.right=k.paddingRight+b*h.Tf+"px":a.left=k.paddingLeft+b*h.Tf+"px"};a.prototype.l$=function(a){for(var b=this.qq(),e=0;e<b.length;e++)this.Cn(b[e],a)};a.prototype.em=function(a){for(var b=this.qq(),e=0;e<b.length;e++)this.jh(b[e],a)};a.prototype.DM=function(b){this.PY||(this.x_=b,this.Dg()&&(this.l$(b?this.yM:this.zM),this.Cn(this.Qq,b?this.tM:this.uM),a.uf(this.sc,"transitionend",
this.zk),a.uf(this.sc,"webkitTransitionEnd",this.zk)),this.PY=!0)};a.prototype.vq=function(b){var c=!0;if(this.fj){var e=this.fj;if(b){var f=b.target;for(b=0;b<e.length;b++)if(f===e[b]){e.splice(b,1);break}}else this.Dg()||(e=this.fj=[]);0<e.length&&(c=!1)}if(c){if(this.mk&&(c=this.mk,this.mk=null,this.Dg()))for(b=0;b<c.length;b+=2)this.jh(c[b],this.AM);this.x_?(this.Dg()&&(this.em(this.yM),this.jh(this.Qq,this.tM)),this.x_=!1):this.Dg()&&(this.em(this.zM),this.jh(this.Qq,this.uM));this.Dg()&&(a.ie(this.sc,
"transitionend",this.zk),a.ie(this.sc,"webkitTransitionEnd",this.zk));this.eM=this.PX=this.D_=this.PY=!1;this.w_();this.Lt&&this.Lt();if(this.uj===a.kA)if(this.Dg()){var h=this;this.du=setTimeout(function(){h.dM()},0)}else this.dM();else this.uj||this.ho&&this.ho()}};a.prototype.eaa=function(b,c){var e=a.Ada(b);return{Tf:e.Tf/c.colSpan,ph:e.ph/c.rowSpan}};a.prototype.fga=function(){this.oC&&(clearTimeout(this.oC),this.oC=null);this.Dk&&this.Dk();this.uj=a.kS;if(this.lk&&this.Dg()){for(var b=this.lk,
c=0;c<b.length;c++){var e=b[c];a.uf(e,"transitionend",this.sq);a.uf(e,"webkitTransitionEnd",this.sq);this.Cn(e,this.wM)}var f=this;this.At=setTimeout(function(){for(var a=0;a<b.length;a++){var c=b[a];f.jh(c,f.wM);f.Cn(c,f.BD)}},0)}else this.XJ(null)};a.prototype.XJ=function(b){this.At&&(clearTimeout(this.At),this.At=null);if(b){b.preventDefault();b.stopPropagation();b=b.target;this.jh(b,this.BD);a.ie(b,"transitionend",this.sq);a.ie(b,"webkitTransitionEnd",this.sq);var c=this.lk;if(c){for(var e=0;e<
c.length;e++){var f=c[e];if(f===b){c.splice(e,1);this.Dl||(this.Dl=[]);var h=this.Dl;h.push(b);break}}1>c.length&&(this.lk=null)}}else if(!this.Dg()&&(c=this.lk)){for(e=0;e<c.length;e++)f=c[e],this.Dl||(this.Dl=[]),h=this.Dl,h.push(f);this.lk=null}if(!this.lk){if(this.Dl){h=this.Dl;for(e=0;e<h.length;e++)b=h[e],this.Dg()&&this.jh(b,this.BD),c=b.style,this.zj?c.right="":c.left="",c.top="",this.zt&&this.zt(b);this.Dl=null}this.uj=a.kA;this.DM(!1);if(this.mk)for(h=this.mk,e=0;e<h.length;e+=2)b=h[e],
c=h[e+1],f=this.WW(b),this.jh(b,f),this.Cn(b,c),this.Dg()&&(this.Cn(b,this.AM),b.HA=f);this.xM()}};a.prototype.dM=function(){this.du&&(clearTimeout(this.du),this.du=null);this.uj=a.lS;if(this.pi&&this.Dg())for(var b=this.pi,c=0;c<b.length;c++){var e=b[c];a.uf(e,"transitionend",this.uq);a.uf(e,"webkitTransitionEnd",this.uq);this.Cn(e,this.CM);this.jh(e,this.BM)}else{if(this.pi)for(b=this.pi,c=0;c<b.length;c++)e=b[c],this.jh(e,this.BM);this.dK(null)}};a.prototype.dK=function(b){if(b){b.preventDefault();
b.stopPropagation();b=b.target;this.jh(b,this.CM);a.ie(b,"transitionend",this.uq);a.ie(b,"webkitTransitionEnd",this.uq);var c=this.pi;if(c){for(var e=0;e<c.length;e++){var f=c[e];if(f===b){c.splice(e,1);this.to&&this.to(b);break}}1>c.length&&(this.pi=null)}}else if(!this.Dg()&&(c=this.pi)){for(e=0;e<c.length;e++)f=c[e],this.to&&this.to(f);this.pi=null}this.pi||(this.uj=null,this.ho&&this.ho(),this.mL&&(this.mL=!1,this.Jx()))};a.kS=1;a.kA=2;a.lS=3});