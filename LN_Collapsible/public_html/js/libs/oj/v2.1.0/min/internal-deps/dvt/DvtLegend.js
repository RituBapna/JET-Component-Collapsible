/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  
  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.ZN=(0,D.t)();(0,D.da)("DvtLegend",D.ZN);D.z.l(D.ZN,D.sj,"DvtLegend");D.Cn=function(a,b,c){var d=new D.ZN;d.Init(a,b,c);return d};D.ZN.newInstance=D.Cn;D.ZN.getDefaults=function(a){return(0,D.tj)(new D.$N,a)};D.ZN.prototype.Init=function(a,b,c){D.ZN.o.Init.call(this,a,b,c);this.setId("legend1000"+window.Math.floor(1E9*window.Math.random()));this.rf=new D.$N;this.ea=new D.aO(this);this.ea.me(this);this.Cq=[];this.Xr=[];this.Ic=D.o;this.C$=[]};
D.ZN.prototype.vd=function(a){a?(this.D=this.rf.Vj(a),(0,D.bO)(this,this.D.sections)):this.D||(this.D=(0,D.zj)(this))};D.ZN.prototype.Dp=function(a,b,c){this.vd(a);this.q().isLayout=D.k;a=D.cO.P(this,new D.A(0,0,b,c));this.q().isLayout=D.p;return new D.Cg(a.e,a.g)};D.ZN.prototype.getPreferredSize=D.ZN.prototype.Dp;
D.ZN.prototype.P=function(a,b,c){this.vd(a);!(0,window.isNaN)(b)&&!(0,window.isNaN)(c)&&(this.Ga=b,this.Ta=c);this.q().isLayout=D.p;this.Cj();this.Cq=[];this.Xr=[];this.Ic=D.o;this.C$=[];(0,D.Jf)()||(0,D.xj)(this.ea,new D.dO(this.ea,this));this.Sn();this.n5=D.cO.P(this,new D.A(0,0,this.Ga,this.Ta));(a=this.q().highlightedCategories)&&0<a.length&&this.Ge(a);return this.n5};D.ZN.prototype.render=D.ZN.prototype.P;
D.ZN.prototype.Ge=function(a){this.q().highlightedCategories=a&&0<a.length?a.slice():D.o;(0,D.ql)(a,this.Cq,D.k)};D.ZN.prototype.highlight=D.ZN.prototype.Ge;D.ZN.prototype.Pd=function(a,b){var c=a.Pa();if(("categoryRollOver"==c||"categoryRollOut"==c)&&"dim"==this.q().hoverBehavior){var d=this.Cq;this!=b&&this.Ge(a.categories);for(var e=0;e<d.length;e++)if(d[e].getId()==a.Pk){this.bqa.scrollIntoView(d[e].Yc()[0]);break}}(this==b||"showPopup"==c||"hidePopup"==c)&&this.dispatchEvent(a)};
D.ZN.prototype.ka=(0,D.v)("ea");D.ZN.prototype.V3=function(a){if(a.Yc()[0]instanceof D.Oe)this.Xr.push(a);else{var b=this.q().hideAndShowBehavior;(a.De()!=D.o||a.Ce()!=D.o||a.Ug()||"none"!=b&&"off"!=b)&&this.Xr.push(a);this.Cq.push(a)}};D.ZN.prototype.Q=function(){this.ea&&(this.ea.gi(this),this.ea.Q(),this.ea=D.o);D.ZN.o.Q.call(this)};D.ZN.prototype.destroy=D.ZN.prototype.Q;D.ZN.prototype.W3=(0,D.ba)("Ic");D.ZN.prototype.Gf=function(){return new D.eO(this)};D.ZN.prototype.getAutomation=D.ZN.prototype.Gf;
D.x=D.ZN.prototype;D.x.vD=function(){return this.ea!=D.o?this.ea.dd():D.o};D.x.Z0=function(a,b){if(this.ea!=D.o){for(var c=this.Xr,d=0;d<c.length;d++)if(c[d].getId()==a.getId()){(0,D.Bj)(this.ea,c[d]);b&&c[d].Vd();break}if(c=this.vD())d=c.Yc()[0],d.$b("label",c.fc()),(0,D.Ag)(this.j(),d)}};D.x.F=function(a){var b=new D.A(0,0,this.Ga,this.Ta);return!a||a===this?b:(0,D.Hg)(this,b,a)};D.x.hs=function(a){return!a||a===this?this.n5:(0,D.Hg)(this,this.n5,a)};
D.x.Hj=function(){return(0,D.L)("DvtUtilBundle","LEGEND")};D.bO=function(a,b){if(b&&!(0>=b.length))for(var c=a.q().hiddenCategories,d=0;d<b.length;d++){var e=b[d];e.sections&&(c=(0,D.bO)(a,e.sections));if((e=e.items)&&!(0>=e.length))for(var f=0;f<e.length;f++){var g=e[f],h=D.cO.l_(g);"hidden"==g.categoryVisibility&&0>D.H.wa(c,h)&&c.push(h);g.categoryVisibility=D.o}}};
D.ZN.prototype.Sn=function(){if((0,D.bE)(this)){var a=this.q(),b=a.hideAndShowBehavior;if("off"!=b&&"none"!=b||"dim"==a.hoverBehavior)this.j().Ud("application"),(0,D.cE)(this.j(),(0,D.L)("DvtUtilBundle","COLON_SEP_LIST",[(0,D.L)("DvtUtilBundle","DATA_VISUALIZATION"),D.jg.aB(this.Hj())]))}};D.ZN.prototype.QA=function(){return 0<this.Xr.length};
D.Ll={};(0,D.da)("DvtLegendConstants",D.Ll);D.z.l(D.Ll,D.z,"DvtLegendConstants");D.Ll.pI="background";D.Ll.BACKGROUND=D.Ll.pI;D.Ll.GI="legendItem";D.Ll.LEGEND_ITEM=D.Ll.GI;D.Ll.wr="title";D.Ll.TITLE=D.Ll.wr;
D.eO=function(a){this.wb=a;this.ee=this.wb.q()};(0,D.da)("DvtLegendAutomation",D.eO);D.z.l(D.eO,D.Dj,"DvtLegendAutomation");D.eO.prototype.ql=function(a){if((a=(0,D.Ej)(this.wb.ka(),a))&&a instanceof D.fO)if(a=a.getData(),a=(0,D.gO)(this,a,this.ee))return"section"+a;return D.o};
D.gO=function(a,b,c){if(c.sections&&0<c.sections.length){for(var d=0;d<c.sections.length;d++){if(c.sections[d]==b)return"["+d+"]";var e=(0,D.gO)(a,b,c.sections[d]);if(e)return"["+d+"]"+e}return D.o}if(c.items&&0<c.items.length){for(a=0;a<c.items.length;a++)if(c.items[a]==b)return":item["+a+"]";return D.o}};
D.dm=function(a,b,c){if(c.sections&&0<c.sections.length){for(var d=0;d<c.sections.length;d++){var e=(0,D.dm)(a,b,c.sections[d]);if(e)return"["+d+"]"+e}return D.o}if(c.items&&0<c.items.length){for(a=0;a<c.items.length;a++)if(c.items[a].text==b.name)return":item["+a+"]";return D.o}};
D.Zl=function(a,b,c){var d=c.indexOf("["),e=c.indexOf("]");if(0<=d&&0<=e){var d=c.substring(d+1,e),f=c.indexOf(":");c=c.substring(e+1);e=c.indexOf("]");return 0<=c.indexOf("[")&&0<=e?(0,D.Zl)(a,b.sections[d],c):0==f?b.items[d]:b.sections[d]}};D.eO.prototype.If=function(a){if("tooltip"==a)return(0,D.bm)(this.wb);a=(0,D.Zl)(this,this.ee,a);for(var b=this.wb.Cq,c=0;c<b.length;c++){var d=b[c].getData();if(a==d)return b[c].Yc()[0].sa()}return D.o};D.eO.prototype.getDomElementForSubId=D.eO.prototype.If;
D.eO.prototype.Yv=function(){return this.ee.title};D.eO.prototype.getTitle=D.eO.prototype.Yv;D.eO.prototype.getItem=function(a){for(var b,c=a.shift(),d=this.ee;c!=D.i;)0<a.length?d=d.sections[c]:b=d.items[c],c=a.shift();return b?{text:b.text?b.text:D.o}:D.o};D.eO.prototype.getItem=D.eO.prototype.getItem;
D.eO.prototype.zKa=function(a){for(var b,c=a.shift(),d=this.ee;c!=D.i;)0<a.length?d=d.sections[c]:b=d.sections[c],c=a.shift();return{title:b.title?b.title:D.o,items:b.items?(0,D.hO)(b.items):D.o,sections:b.sections?(0,D.iO)(this,b.sections):D.o}};D.eO.prototype.getSection=D.eO.prototype.zKa;D.hO=function(a){for(var b=[],c=0;c<a.length;c++)b.push({text:a[c].text});return b};
D.iO=function(a,b){for(var c=[],d=0;d<b.length;d++)c.push({title:b[d].title?b[d].title:D.o,items:b[d].items?(0,D.hO)(b[d].items):D.o,sections:b[d].sections?(0,D.iO)(a,b[d].sections):D.o});return c};
D.$N=function(){this.Init({skyros:D.jO,alta:D.kO,next:D.lO})};D.z.l(D.$N,D.Nj,"DvtLegendDefaults");D.lO={skin:"next",titleStyle:new D.G("color: #737373;"),_sectionTitleStyle:new D.G("color: #737373;"),layout:{titleGapWidth:17,titleGapHeight:9,symbolGapWidth:7,symbolGapHeight:4,rowGap:4,columnGap:10,sectionGapHeight:16,sectionGapWidth:24}};
D.kO={skin:"alta",textStyle:new D.G("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;"),titleStyle:new D.G("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px; color: #333333;"),_sectionTitleStyle:new D.G("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px; color: #333333;")};
D.jO={skin:"skyros",orientation:"vertical",position:D.o,backgroundColor:D.o,borderColor:D.o,textStyle:new D.G("font-family: tahoma, sans-serif; font-size: 11px; color: #333333;"),titleStyle:new D.G("font-family: tahoma, sans-serif; font-size: 12px; color: #003d5b;"),titleHalign:"start",hiddenCategories:[],hideAndShowBehavior:"off",hoverBehavior:"none",hoverBehaviorDelay:200,scrolling:"asNeeded",halign:"start",valign:"top",drilling:"off",_color:"#a6acb1",_markerShape:"square",_lineWidth:3,layout:{outerGapWidth:3,
outerGapHeight:3,titleGapWidth:8,titleGapHeight:3,symbolGapWidth:5,symbolGapHeight:4,rowGap:0,columnGap:8,sectionGapHeight:6,sectionGapWidth:15},isLayout:D.p};D.mO=function(a,b){var c=window.Math.min(D.$e.Xv(a.j(),a.q().textStyle)/14,1);return window.Math.ceil(b*c)};
D.aO=function(a){this.Init(a.j(),a.Pd,a);this.wb=a};D.z.l(D.aO,D.Pj,"DvtLegendEventManager");D.x=D.aO.prototype;D.x.Cw=function(a,b){var c=D.o;b instanceof D.Fj&&b.Il!=D.o?c=b.Il:b instanceof D.fO&&(c=b.getId(),c={type:D.Ll.GI,id:c});this.Xg(new D.Rj(a,c),this.wb)};D.x.Jh=function(a){D.aO.o.Jh.call(this,a);var b=(0,D.Ej)(this,a.target);if(b){var c=(0,D.nO)(this,b),b=(0,D.oO)(this,b,a);(c||b)&&a.stopPropagation()}};D.x.Oy=function(a){D.aO.o.Oy.call(this,a);(a=(0,D.Ej)(this,a.target))&&this.Lw(a)};
D.x.Sm=function(a){D.aO.o.Sm.call(this,a);(0,D.Ej)(this,a.target)};D.x.qr=function(a){var b=(0,D.Ej)(this,a.target);if(b){a=a.vda;var c=(0,D.nO)(this,b),b=(0,D.oO)(this,b,window.event);(c||b)&&a&&a.preventDefault()}};
D.nO=function(a,b){var c=a.wb.q().hideAndShowBehavior;if("none"==c||"off"==c)return D.p;var d=b.Mc?b.Mc():D.o;if(!d||0>=d.length)return D.p;for(var e=b.Mc()[0],c=a.wb.q().hiddenCategories||[],c=c.slice(),f=b.Yc(),g=0;g<f.length;g++){var h=f[g];h instanceof D.dh?h.eI(b.qb()):h instanceof D.Te&&(0,D.pO)(b)}d=d[0];D.cO.Y_(e,a.wb)?(c.splice(D.H.wa(c,e),1),e=new D.wl(D.wl.Sy,d)):(c.push(e),e=new D.wl(D.wl.Kw,d));e.hiddenCategories=c;a.wb.q().hiddenCategories=c;a.Xg(e,a.wb);return D.k};
D.oO=function(a,b,c){return b&&b.Ce&&b.Ce()?(a.Xg(new D.Sj("action",b.Ce(),b.getId()),a.wb),D.k):b instanceof D.fO&&b.Ug()?(c=b.getId(),a.Xg(new D.Uj(c,c,D.o),a.wb),D.k):(b=b instanceof D.Fj?b.Il:D.o)&&"title"==b.type&&b.isCollapsible?((0,D.qO)(a,c,b.id),D.k):D.p};
D.aO.prototype.fm=function(a,b,c){a=this.wb.q();"none"==a.hoverBehavior||b.Yc&&b.Yc()[0]instanceof D.Oe||(b=b.Mc?b.Mc():[],a.highlightedCategories=c?b.slice():D.o,c=new D.zm(c?"categoryRollOver":"categoryRollOut",a.highlightedCategories),a=(0,D.hp)(a.hoverBehaviorDelay),this.GB.Pd(c,this.wb.Cq,a,D.k))};D.aO.prototype.xca=function(a,b){var c=b.getId();(0,D.qO)(this,a,c)};
D.qO=function(a,b,c){for(var d=a.wb.q(),e=0;e<c.length;e++)d=d.sections[c[e]];d.expanded="off"==d.expanded?"on":"off";b.type==D.kk&&(c=(0,D.Ej)(a,(0,D.sm)(a,b)),c.Ad&&(0,D.Bj)(a,c.Ad(b)));c=(b=a.wb.vD())?b.pc():D.p;a.wb.P();b&&a.wb.Z0(b,c);a.Cc();b=a.wb.hs();a.Xg(new D.tC(b.e,b.g,b.x,b.y),a.wb)};D.aO.prototype.Bu=function(){return this.wb.q()._isScrollingLegend?"touchHold":"touchStart"};
D.dO=function(a,b){this.Init(a,b)};D.z.l(D.dO,D.jk,"DvtLegendKeyboardHandler");D.dO.prototype.Init=function(a,b){D.dO.o.Init.call(this,a);this.wb=b};
D.dO.prototype.Fh=function(a){var b=a.keyCode,c=this.ea.dd(),d=c&&c.Yc()[0]instanceof D.Oe,e=D.o;c==D.o&&9==b?(b=this.wb.Xr,0<b.length&&((0,D.hi)(a),e=this.tD(b))):c&&(9==b?((0,D.hi)(a),e=c):13==b||32==b?(13==b&&(0,D.oO)(this.ea,c,a),d?this.ea.xca(a,c.Yc()[0]):(0,D.nO)(this.ea,c),(0,D.hi)(a)):d&&(37==b||39==b)?(this.ea.xca(a,c.Yc()[0]),(0,D.hi)(a)):e=D.dO.o.Fh.call(this,a));e&&this.wb.bqa.scrollIntoView(e.Yc()[0]);return e};
D.fO=function(a,b,c,d,e,f){this.Init(a,b,c,d,e,f)};D.z.l(D.fO,D.z,"DvtLegendObjPeer");D.fO.prototype.Init=function(a,b,c,d,e,f){this.wb=a;this.ke=b;this.Tk=c;this.Xa=(this.Pk=D.cO.l_(this.Tk))?this.Pk:c.title;this.an=c.action;this.Gr=f;this.oGa=c._spb;this.Ui=d;this.K5=e;this.Ib=D.p;if(this.an||this.Gr)for(a=0;a<this.ke.length;a++)this.ke[a].setCursor("pointer")};D.rO=function(a,b,c,d,e,f){if(!a||!c)return D.o;c=new D.fO(b,a,c,d,e,f);b.V3(c);for(d=0;d<a.length;d++)b.ka().Ca(a[d],c);return c};
D.x=D.fO.prototype;D.x.getData=(0,D.v)("Tk");D.x.qb=function(){return this.Tk.color};D.x.getId=(0,D.v)("Xa");D.x.Yc=(0,D.v)("ke");D.x.Mc=function(){return this.Pk!=D.o?[this.Pk]:D.o};D.x.Ce=(0,D.v)("an");D.x.Ug=(0,D.v)("Gr");D.x.rd=(0,D.v)("oGa");
D.x.fc=function(){var a=[],b=this.wb.q(),c=this.wb.q().hideAndShowBehavior,d=D.cO.Y_(this.Pk,this.wb),e=this.getData();if(this.ke[0]instanceof D.Oe)return a.push((0,D.L)("DvtUtilBundle","off"==e.expanded?"STATE_COLLAPSED":"STATE_EXPANDED")),(0,D.ok)(e.title,a);"off"!=c&&"none"!=c&&a.push((0,D.L)("DvtUtilBundle",d?"STATE_HIDDEN":"STATE_VISIBLE"));this.Ug()&&a.push((0,D.nk)(b,"stateDrillable","DvtUtilBundle","STATE_DRILLABLE"));return e.shortDesc!=D.o?(0,D.ok)(e.shortDesc,a):0<a.length?(0,D.ok)(e.text,
a):D.o};D.pO=function(a){!(0,D.cf)()&&a.ke[0]&&a.ke[0].$b("label",a.fc())};D.x=D.fO.prototype;D.x.Ad=function(a){return a.type==D.kk?this:(0,D.lk)(this,a,this.wb.Xr,D.k)};D.x.Ee=function(a){return this.ke[0]?this.ke[0].F(a):new D.A(0,0,0,0)};D.x.yj=function(){return this.ke[0]?this.ke[0].sa():D.o};D.x.Vd=function(){this.Ib=D.k;this.ke[0]&&(this.ke[0]instanceof D.Oe?(0,D.GF)(this.ke[0]):this.ke[0].Ra((0,D.mk)()))};
D.x.jc=function(){this.Ib=D.p;this.ke[0]&&(this.ke[0]instanceof D.Oe?(0,D.Me)(this.ke[0]):this.ke[0].V(D.o))};D.x.pc=(0,D.v)("Ib");D.x.Jf=(0,D.v)("Ui");D.x.De=(0,D.v)("K5");D.x.vi=function(){return this.Tk.color};
D.cO={};D.z.l(D.cO,D.z,"DvtLegendRenderer");D.cO.gya=5;D.cO.hya=2;D.cO.zha=0.6;D.cO.jha=10;D.cO.Mh=12;D.cO.bO=2;
D.cO.P=function(a,b){var c=a.q(),d=a.j(),e=(0,D.E)(d);c.isLayout||D.cO.Gt(a,b);var f=new D.MA(d,b.e,b.g),g=new D.D(d);f.X.k(g);a.k(f);a.bqa=f;var h=(0,D.mO)(a,c.layout.outerGapWidth),j=(0,D.mO)(a,c.layout.outerGapHeight);b.x+=h;b.y+=j;b.e-=2*h;b.g-=2*j;a.W3(b);if(0>=b.e||0>=b.g)return new D.Cg(0,0);d=D.cO.jFa(a,g,new D.A(b.x,b.y,b.e,b.g));if(0==d.e||0==d.g)return new D.Cg(0,0);(0,D.NA)(f);d.g>b.g?(d.g=b.g,c._isScrollingLegend=D.k):c._isScrollingLegend=D.p;var l=f=0,m=c.hAlign!=D.o?c.hAlign:c.halign;
"center"==m?f=b.x-d.x+(b.e-d.e)/2:"end"==m&&(f=e?b.x-d.x:b.x-d.x+b.e-d.e);e=c.vAlign!=D.o?c.vAlign:c.valign;"middle"==e?l=b.y-d.y+(b.g-d.g)/2:"bottom"==e&&(l=b.y-d.y+b.g-d.g);e=new D.A(d.x+f-h,d.y+l-j,d.e+2*h,d.g+2*j);if(c.isLayout)return e;(f||l)&&(0,D.pk)(g,f,l);c=a.C$;for(g=0;g<c.length;g++)(0,D.In)(d,c[g].qLa,c[g].text,c[g].text.Eb().e);return e};
D.cO.jFa=function(a,b,c){var d=a.q();c=c.Y();var e=D.cO.AG(a,b,d.title,c,D.o,D.k);if(e){var f=e.Eb(),g=(0,D.mO)(a,d.layout.titleGapHeight);c.y+=f.g+g;c.g-=window.Math.floor(f.g+g)}a=D.cO.xoa(a,b,d.sections,c,[]);return e?(0,D.Bo)(f,a):a};D.cO.Gt=function(a,b){var c=a.q(),d=c.backgroundColor,c=c.borderColor;if(d||c){var e=new D.Te(a.j(),b.x,b.y,b.e,b.g);d?e.pa(d):(0,D.wi)(e);c&&(e.Ra(c),(0,D.Ei)(e));a.ka().Ca(e,new D.Fj(D.o,D.o,D.o,{type:D.Ll.pI,id:D.i}));a.k(e)}};
D.cO.AG=function(a,b,c,d,e,f,g){var h=a.q(),j=b.j(),l=(0,D.E)(j);if(!c)return D.o;c=new D.Kf(j,c,d.x,d.y);j=h.titleStyle;e&&e.titleStyle?j=new D.G(e.titleStyle):e&&h._sectionTitleStyle&&(j=h._sectionTitleStyle);c.Ha(j);return D.$e.Qb(c,d.e,window.Infinity,b)?(l&&c.ca(d.x+d.e-c.Eb().e),h.isLayout?b.removeChild(c):(b={type:D.Ll.wr,id:g},b.isCollapsible=e&&("on"==e.collapsible||e.collapsible==D.k),a.ka().Ca(c,new D.Fj(c.Ao(),D.o,D.o,b)),f&&a.C$.push({text:c,qLa:e&&e.titleHalign?e.titleHalign:h.titleHalign})),
c):D.o};
D.cO.xoa=function(a,b,c,d,e){var f=a.q();f.symbolWidth==D.o&&f.symbolHeight==D.o?(f.symbolWidth=D.cO.jha,f.symbolHeight=D.cO.jha):(f.symbolWidth==D.o?f.symbolWidth=f.symbolHeight:f.symbolHeight==D.o&&(f.symbolHeight=f.symbolWidth),f.symbolWidth=(0,window.parseInt)(f.symbolWidth),f.symbolHeight=(0,window.parseInt)(f.symbolHeight));for(var g=(0,D.mO)(a,f.layout.sectionGapHeight),h=(0,D.mO)(a,f.layout.titleGapHeight),j=(0,D.mO)(a,f.layout.sectionGapWidth),l=D.cO.wCa(a),f="vertical"!=f.orientation,m=
D.o,n=d.Y(),q,r=0;r<c.length;r++){var s=e.concat([r]),u="off"==c[r].expanded||c[r].expanded==D.p?h:g;f?(q=D.cO.poa(a,b,c[r],n,l),q.e>n.e?(n.e<d.e&&(d.y+=q.g+u,d.g-=q.g+u),q=q.e<=d.e?D.cO.poa(a,b,c[r],d,l):D.cO.Aoa(a,b,c[r],d,l,s,D.k),d.y+=q.g+u,d.g-=q.g+u,n=d.Y()):(n.e-=q.e+j,(0,D.E)(a.j())||(n.x+=q.e+j))):(q=D.cO.Aoa(a,b,c[r],d,l,s,D.p),d.y+=q.g+u,d.g-=q.g+u);m=m?(0,D.Bo)(m,q):q}return m};
D.cO.ZAa=function(a,b,c,d,e,f,g,h,j,l,m){var n=D.cO.u5(a,d,e+"Enabled",f,g),q=D.cO.u5(a,d,e+"Over",f,g);d=D.cO.u5(a,d,e+"Down",f,g);a=new D.Oe(a,n,q,d,D.o,j,l,m);b=(0,D.rO)([a],b,c,h,D.o,D.p);a.Ud("button");(0,D.pO)(b);return a};D.cO.u5=function(a,b,c,d,e){var f=(0,D.E)(a)?"RTL":"";a=new D.Ue(a,b[c+f]?b[c+f]:b[c],d,e,D.cO.Mh,D.cO.Mh);(0,D.wi)(a);return a};
D.cO.Aoa=function(a,b,c,d,e,f,g){if(c){var h=a.q(),j=(0,D.mO)(a,h.layout.symbolGapWidth),l=(0,D.mO)(a,h.layout.rowGap),m=(0,D.mO)(a,h.layout.columnGap),n=a.j(),q=(0,D.E)(n);d=d.Y();"off"!=h.scrolling&&(d.g=window.Infinity);var r,s="on"==c.collapsible||c.collapsible==D.k;if(s){r=q?d.x+d.e-D.cO.Mh:d.x;if(!h.isLayout){var u="off"==c.expanded||c.expanded==D.p,w=u?"closed":"open",u=(0,D.L)("DvtUtilBundle",u?"EXPAND":"COLLAPSE",D.o),y=a.ka(),n=D.cO.ZAa(n,a,c,h._resources,w,r,d.y,u,f,y.xca,y);b.k(n)}r=new D.A(r,
d.y,D.cO.Mh,D.cO.Mh);n=(0,D.mO)(a,h.layout.symbolGapWidth);q||(d.x+=D.cO.Mh+n);d.e-=D.cO.Mh+n}s=(s=D.cO.AG(a,b,c.title,d,c,!s&&1>=f.length,f))?s.Eb():new D.A(q?d.x+d.e:d.x,d.y,0,0);s=r?(0,D.Bo)(s,r):s;if(!c.items&&!c.sections||"off"==c.expanded||c.expanded==D.p)return s;0<s.g&&(n=(0,D.mO)(a,h.layout.titleGapHeight),d.y+=s.g+n,d.g-=s.g+n);c.sections&&(f=D.cO.xoa(a,b,c.sections,d,f),s=(0,D.Bo)(s,f));if(!c.items)return s;n=D.cO.FAa(a,d,e,c.items,g);g=n.numCols;f=n.numRows;n=n.width;r=d.y;if(0==f||0==
g)return s;w=f*(e+l)-l;u=window.Math.min(g*(n+m)-m,d.e);s=(0,D.Bo)(s,new D.A(q?d.x+d.e-u:d.x,d.y,u,w));if(h.isLayout)return s;h=n-h.symbolWidth-j;j=0;w=1;u=c.items.length;for(y=0;y<u&&!(D.cO.VO(a,b,c.items[y],d,h,e,y),d.y+=e+l,j++,j===f&&w!==g&&(d.y=r,d.e-=n+m,q||(d.x+=n+m),j=0,w++),j===f);y++);return s}};
D.cO.poa=function(a,b,c,d,e){if(c){var f=a.q(),g=f.symbolWidth,h=(0,D.mO)(a,f.layout.symbolGapWidth),j=(0,D.mO)(a,f.layout.columnGap),l=(0,D.mO)(a,f.layout.titleGapWidth),m=c.items.length,n=(0,D.E)(a.j()),q=d.Y(),r=D.cO.AG(a,b,c.title,d,c,D.p),s=r?r.Eb():new D.A(n?d.x+d.e:d.x,d.y,0,0);if(c.items)0<s.e&&(q.e-=s.e+l,n||(q.x+=s.e+l));else return s;var l=[],u=d.e-q.e,w,y;for(y=0;y<m;y++)w=c.items[y],w=window.Math.ceil(D.$e.H_(a.j(),w.text,f.textStyle)),u+=w+g+h+j,l.push(w);0<m&&(u-=j);s=new D.A(n?d.x+
d.e-u:d.x,d.y,u,window.Math.max(e,s.g));if(f.isLayout||u>d.e)return b.removeChild(r),s;for(y=0;y<m;y++)w=c.items[y],D.cO.VO(a,b,w,q,l[y],e,y),d=l[y]+g+h,q.e-=d+j,n||(q.x+=d+j);return s}};
D.cO.FAa=function(a,b,c,d,e){for(var f=a.q(),g=0,h=0;h<d.length;h++){var j=D.$e.H_(a.j(),d[h].text,f.textStyle);j>g&&(g=j)}var h=f.symbolWidth,l=(0,D.mO)(a,f.layout.symbolGapWidth),j=(0,D.mO)(a,f.layout.rowGap);a=(0,D.mO)(a,f.layout.columnGap);g=window.Math.ceil(h+l+g);e?(e=window.Math.min(window.Math.floor((b.e+a)/(g+a)),d.length),c=window.Math.min(window.Math.floor((b.g+j)/(c+j)),window.Math.ceil(d.length/e)),e=window.Math.ceil(d.length/c),c=window.Math.ceil(d.length/e)):window.Infinity==b.g?(e=
1,c=d.length):(c=window.Math.min(window.Math.floor((b.g+j)/(c+j)),d.length),e=window.Math.ceil(d.length/c),c=window.Math.ceil(d.length/e));b=window.Math.min(g,(b.e-a*(e-1))/e);return b<h?{width:0,numCols:0,numRows:0}:{width:b,numCols:e,numRows:c}};D.cO.wCa=function(a){var b=a.q(),c=new D.Kf(a.j(),"Test");c.Ha(b.textStyle);c.wf();c=D.$e.Dh(c).g;a=b.symbolHeight+(0,D.mO)(a,b.layout.symbolGapHeight);return window.Math.ceil(window.Math.max(c,a))};
D.cO.VO=function(a,b,c,d,e,f){var g=a.q(),h=a.j(),j=(0,D.E)(h),l=g.symbolWidth,m=(0,D.mO)(a,g.layout.symbolGapWidth),n=j?d.x+d.e-l:d.x,q=j?d.x+d.e-l-m:d.x+l+m,r=D.cO.cBa(a,n,d.y,f,c),s=c.text,u;if(s&&(u=D.cO.dBa(b,e,s,g.textStyle)))u.ca(q),D.$e.AR(u,d.y+f/2),j&&u.zh();b.k(r);d=new D.Te(h,j?q-e-D.cO.bO:n-D.cO.bO,d.y-D.cO.bO,l+m+e+2*D.cO.bO,f+2*D.cO.bO);(0,D.wi)(d);g=g.hideAndShowBehavior;"none"!=g&&"off"!=g&&d.setCursor("pointer");b.k(d);b=[d,r];u!=D.o&&b.push(u);u=(0,D.rO)(b,a,c,u!=D.o?u.Ao():D.o,
c.shortDesc,D.cO.mDa(a,c));D.cO.Y_(D.cO.l_(c),a)&&r.eI(u.qb());if("none"!=g&&"off"!=g||c.shortDesc!=D.o)d.Ud("img"),(0,D.pO)(u)};D.cO.mDa=function(a,b){return"on"==b.drilling?D.k:"off"==b.drilling?D.p:"on"==a.q().drilling};D.cO.dBa=function(a,b,c,d){c=new D.Kf(a.j(),c);c.Ha(d);return c=D.$e.Qb(c,b,window.Infinity,a)?c:D.o};
D.cO.cBa=function(a,b,c,d,e){var f=a.q();e.markerShape||(e.markerShape=f._markerShape);e.color||(e.color=f._color);e.lineWidth||(e.lineWidth=f._lineWidth);var g=f.symbolWidth,f=f.symbolHeight,h=c+d/2,j=b+g/2,l=e.type!=D.o?e.type:e.symbolType;"line"==l?(e.lineWidth=window.Math.min(e.lineWidth,D.cO.gya),b=D.cO.oja(a.j(),b,c,g,d,e)):"lineWithMarker"==l?(e.lineWidth=window.Math.min(e.lineWidth,D.cO.hya),b=D.cO.oja(a.j(),b,c,g,d,e),D.cO.Y_(D.cO.l_(e),a)||b.k(D.cO.gW(a,j,h,g*D.cO.zha,f*D.cO.zha,e))):b=
"image"==l?D.cO.w5(a,b,c,g,f,d,e):D.cO.gW(a,j,h,g,f,e);return b};D.cO.w5=function(a,b,c,d,e,f,g){return new D.Ue(a.j(),g.source,b,c+(f-e)/2,d,e)};D.cO.gW=function(a,b,c,d,e,f){var g=a.j(),h=a.q();a=f.markerShape;var j=f.markerColor?f.markerColor:f.color,l=f.pattern;l&&"none"!=l?(d=new D.dh(g,a,h.skin,0,0,d,e),d.L(new D.eh(l,j,"#FFFFFF")),(0,D.pk)(d,b,c)):(d=new D.dh(g,a,h.skin,b,c,d,e),d.pa(j));f.borderColor&&d.Ra(f.borderColor,D.o,f._borderWidth?f._borderWidth:1);"square"==a&&(0,D.Ei)(d);return d};
D.cO.oja=function(a,b,c,d,e,f){c+=e/2;a=new D.Di(a,b,c,b+d,c);b=new D.hg(f.color,1,f.lineWidth);f=f.lineStyle;"dashed"==f?b.Gk((0,D.ig)(f),"4,2,4"):"dotted"==f&&b.Gk((0,D.ig)(f),"2");a.V(b);(0,D.Ei)(a);return a};D.cO.l_=function(a){var b=D.o;return b=a.categories&&0<a.categories.length?a.categories[0]:a.id?a.id:a.text};D.cO.Y_=function(a,b){var c=b.q().hiddenCategories;return!c||0>=c.length?D.p:-1!==D.H.wa(c,a)};

  return D;
});