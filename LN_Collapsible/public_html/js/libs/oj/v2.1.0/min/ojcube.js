/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","promise","ojs/ojdatasource-common"],function(b,f){b.Wa=function(a,b){this.Init();this.qa=a;this.gh=b;this.Mr()};o_("Cube",b.Wa,b);b.b.ga(b.Wa,b.b,"oj.Cube");b.Wa.prototype.Init=function(){b.Wa.q.Init.call(this)};b.Wa.prototype.rm=function(){var a=this.GW(),b=[];Array.prototype.push.apply(b,a?a.rm():this.wf);for(a=2;a<this.wf.length;a++)b.push(this.wf[a]);return b};b.b.g("Cube.prototype.getAxes",{rm:b.Wa.prototype.rm});b.Wa.prototype.sJ=function(){return this.wf};b.Wa.prototype.xm=
function(a){var b=this.GW();a=b.mia(a);for(a=b=b.y1(a,0,[]);Array.isArray(a)&&1===a.length;)if(a=a[0],!Array.isArray(a))return a;return b};b.b.g("Cube.prototype.getValues",{xm:b.Wa.prototype.xm});b.Wa.prototype.setPage=function(a){this.$K=a instanceof Array?a:[a]};b.Wa.prototype.N4=function(a,d,c,e,f){var h=this.gh,k=this.AV(a);if(!k)return!1;a=null;c<h.length?a=this.AV(c):(a={axis:c,levels:[]},h.push(a));c=k.levels;h=a.levels;a=d<c.length?c[d]:null;if(!a)return!1;e>=h.length?(h.push(a),c.splice(d,
1)):f===b.Wa.GF.SWAP?(c[d]=h[e],h[e]=a):(f===b.Wa.GF.AFTER&&e++,h.splice(e,0,a),h===c&&e<d&&d++,c.splice(d,1));this.Mr();return!0};b.b.g("Cube.prototype.pivot",{N4:b.Wa.prototype.N4});b.Wa.prototype.AV=function(a){for(var b=0;b<this.gh.length;b++)if(this.gh[b].axis===a)return this.gh[b];return null};b.Wa.prototype.e3=function(){return this.gh};b.b.g("Cube.prototype.getLayout",{e3:b.Wa.prototype.e3});b.Wa.GF={BEFORE:"before",AFTER:"after",SWAP:"swap"};o_("Cube.PivotType",b.Wa.GF,b);b.Wa.prototype.y1=
function(a,b,c){var e=[];if(0===a.length)return b=c.slice(0),this.rq(b);var f=a.slice(1),h=a[0].start;a=a[0].count;for(c[b]=h;c[b]<h+a;c[b]++)e.push(this.y1(f,b+1,c));return e};b.Wa.prototype.mia=function(a){var b=[];if(!a)return b;for(var c=Math.min(a.length,this.wf.length),e=0;e<c;e++){var f=a[e];f instanceof Object&&(f.hasOwnProperty("start")||f.hasOwnProperty("count"))?f.hasOwnProperty("start")?f.hasOwnProperty("count")?b.push(this.BB(f.start,f.count,e)):b.push(this.BB(f.start,1,e)):b.push(this.BB(0,
f.count,e)):b.push(this.BB(f,1,e))}return b};b.Wa.prototype.BB=function(a,b,c){c=this.rm()[c].Vb();if(a>=c||0>a)a=0;b=Math.min(b,c-a);return{start:a,index:a,count:b}};b.Wa.prototype.rq=function(a){var d=this.aba(a);return d&&(d=d.rp(),0<d.length&&(d=this.i[d[0].key]))?new b.Xf(d.value,a,d.SD,d.rows,d.fp):new b.Xf(null,a,void 0,[])};b.Wa.prototype.u6=function(){var a=this.eea();this.$K=[];for(var b=0;b<a.length;b++)this.fq(a[b].axis,a[b].levels),this.$K.push({axis:a[b].axis,index:0});if(0===a.length)for(a=
this.sJ(),b=0;b<a.length;b++)this.fq(a[b].axis,a[b].levels)};b.Wa.prototype.eea=function(){for(var a=[],b=0;b<this.gh.length;b++)1<this.gh[b].axis&&a.push(this.gh[b]);return a};b.Wa.prototype.sJ=function(){for(var a=[],b=0;b<this.gh.length;b++)2>this.gh[b].axis&&a.push(this.gh[b]);return a};b.Wa.prototype.Mr=function(){this.wf=[];this.i=[];this.hI=[];this.u6();if(null!==this.qa)for(var a=0;a<this.qa.length;a++){for(var d=new b.Si,c=2;c<this.wf.length;c++)d=this.wf[c].mQ(this.qa[a],d);for(var d=d.rp(),
e=0;e<d.length;e++){var c=d[e].key,f=this.hI[c];f||(f=this.hI[c]=this.nF(this.sJ()));for(var h=new b.Si,k=f.wf.length,c=0;c<k;c++)h=f.wf[c].mQ(this.qa[a],h);h=c=h.rp();if(void 0!==d[e].q2)for(h=[],k=0;k<c.length;k++)h.push(d[e]);f.Ala(c,h,this.qa[a])}}};b.Wa.prototype.Ala=function(a,b,c){for(var e=0;e<a.length;e++)this.i[a[e].key]=this.r$(b[e],this.i[a[e].key],c)};b.Wa.prototype.GW=function(){return this.hI[this.Hda(this.$K)]};b.Wa.prototype.Hda=function(a){var d=new b.Si;if(a&&0<a.length){a.sort(function(a,
b){return a.axis-b.axis});for(var c=this.wf,e=0;e<a.length;e++)d=c[a[e].axis].Az(a[e].index,d)}return d.rp()[0].key};b.Wa.HY=function(a){return a?void 0!==a.value&&null!==a.value:!1};b.Wa.prototype.Dc=function(a,b,c,e,f){c.push(e);e={};for(var h in f)f.hasOwnProperty(h)&&(e[h]=f[h]);e.value=a;e.SD=b;e.rows=c;return e};b.Wa.Fe=function(a){return b.Fa.od(a.value)?!1:!isNaN(a.value)};b.Wa.prototype.r$=function(a,d,c){var e=this.pF(a.q2),f=e.qu,h=b.Wa.HY(d),k=b.Wa.HY(a),l=h&&b.Wa.Fe(d),m=k&&b.Wa.Fe(a);
switch(f){case b.Wf.SUM:return h&&k?l&&m?this.Dc(d.value+a.value,f,d.rows,c,{}):this.Dc(NaN,f,d.rows,c,{}):k&&!h?m?this.Dc(a.value,f,[],c,{}):this.Dc(NaN,f,[],c,{}):d;case b.Wf.AVERAGE:return h&&k?l&&m?this.Dc((d.Zu+a.value)/(d.rows.length+1),f,d.rows,c,{Zu:d.Zu+a.value}):this.Dc(NaN,f,d.rows,c,{Zu:d.Zu}):k&&!h?m?this.Dc(a.value,f,[],c,{Zu:a.value}):this.Dc(NaN,f,[],c,{Zu:NaN}):d;case b.Wf.VARIANCE:case b.Wf.STDDEV:return h&&k?l&&m?(h=d.value+(a.value-d.value)/(d.rows.length+1),this.Dc(h,f,d.rows,
c,{fp:d.fp+(a.value-d.value)*(a.value-h)})):this.Dc(NaN,f,d.rows,c,{fp:NaN}):k&&!h?m?this.Dc(a.value,f,[],c,{fp:0}):this.Dc(NaN,f,[],c,{fp:NaN}):d;case b.Wf.NONE:return this.Dc(null,f,h?d.rows:[],c,{});case b.Wf.FIRST:return h?this.Dc(d.value,f,d.rows,c,{}):k?this.Dc(a.value,f,[],c,{}):d;case b.Wf.MIN:return h&&k?l&&m?this.Dc(Math.min(d.value,a.value),f,d.rows,c,{}):this.Dc(NaN,f,d.rows,c,{}):k&&!h?m?this.Dc(a.value,f,[],c,{}):this.Dc(NaN,f,[],c,{}):d;case b.Wf.MAX:return h&&k?l&&m?this.Dc(Math.max(d.value,
a.value),f,d.rows,c,{}):this.Dc(NaN,f,d.rows,c,{}):k&&!h?m?this.Dc(a.value,f,[],c,{}):this.Dc(NaN,f,[],c,{}):d;case b.Wf.COUNT:return h&&k?this.Dc(d.value+1,f,d.rows,c,{}):k&&!h?this.Dc(1,f,[],c,{}):d;case b.Wf.CUSTOM:return a=e.Db.call(this,h?d.value:void 0,k?a.value:void 0),this.Dc(a,f,h?d.rows:[],c,{})}};b.Wa.prototype.fq=function(a,d){a>=this.wf.length&&Array.prototype.push.apply(this.wf,Array(a-this.wf.length+1));this.wf[a]||(this.wf[a]=new b.cf(d,a,this));return this.wf[a]};b.Wa.prototype.aba=
function(a){for(var d=this.rm(),c=new b.Si,e=0;e<a.length;e++)c=d[e].Az(a[e],c);return c};b.Wa.prototype.as=function(){b.l.Zb()};b.Wa.prototype.nF=function(){b.l.Zb()};b.Wa.prototype.oF=function(){b.l.Zb()};b.Wa.prototype.pF=function(){b.l.Zb();return{}};b.Wf={SUM:"sum",AVERAGE:"avg",STDDEV:"stddev",VARIANCE:"variance",NONE:"none",FIRST:"first",MIN:"min",MAX:"max",COUNT:"count",CUSTOM:"custom"};o_("CubeAggType",b.Wf,b);b.bc=function(a,b,c,e){this.Init();this.yd=[];this.Jq=e;this.Mba=c;this.i={};this.i.value=
a;this.i.label=b};o_("CubeAxisValue",b.bc,b);b.b.ga(b.bc,b.b,"oj.CubeAxisValue");b.bc.prototype.Init=function(){b.bc.q.Init.call(this)};b.bc.prototype.jr=function(){return this.Mba};b.b.g("CubeAxisValue.prototype.getLevel",{jr:b.bc.prototype.jr});b.bc.prototype.le=function(){return 1};b.b.g("CubeAxisValue.prototype.getDepth",{le:b.bc.prototype.le});b.bc.prototype.g3=function(){for(var a=[],b=this.Jq;b&&b.Jq;)a.unshift(b),b=b.Jq;return a};b.b.g("CubeAxisValue.prototype.getParents",{g3:b.bc.prototype.g3});
b.bc.prototype.getChildren=function(){return this.yd};b.b.g("CubeAxisValue.prototype.getChildren",{getChildren:b.bc.prototype.getChildren});b.bc.prototype.Vb=function(){if(-1<this.ct)return this.ct;if(this.yd&&0!==this.yd.length)for(var a=this.ct=0;a<this.getChildren().length;a++)this.ct+=this.getChildren()[a].Vb();else this.ct=1;return this.ct};b.b.g("CubeAxisValue.prototype.getExtent",{Vb:b.bc.prototype.Vb});b.bc.prototype.ta=function(){if(-1<this.Kh)return this.Kh;if(!this.Jq)return 0;for(var a=
this.Jq.ta(),b=this.Jq.JW(this);b;)a+=b.Vb(),b=this.Jq.JW(b);return this.Kh=a};b.b.g("CubeAxisValue.prototype.getStart",{ta:b.bc.prototype.ta});b.bc.prototype.Lc=function(){return this.i.value};b.b.g("CubeAxisValue.prototype.getValue",{Lc:b.bc.prototype.Lc});b.bc.prototype.MN=function(){return this.i.label?this.i.label:this.Lc()};b.b.g("CubeAxisValue.prototype.getLabel",{MN:b.bc.prototype.MN});b.bc.prototype.v6=function(a){var b=this.gda();if(null===b)return null;if(b.Lu())return this.qda(a);if(a=
a[b.attribute])for(b=0;b<this.yd.length;b++)if(this.yd[b].Lc()===a)return this.yd[b];return null};b.bc.prototype.qda=function(a){for(var b=0;b<this.yd.length;b++){var c=this.yd[b].Lc();if(a.hasOwnProperty(c)&&a[c]===c)return this.yd[b]}return null};b.bc.prototype.gda=function(){return this.yd&&0<this.yd.length?this.yd[0].jr():null};b.bc.prototype.w6=function(a){return this.HI(a,0,this.yd.length-1)};b.bc.prototype.HI=function(a,b,c){if(b>c)return null;var e=Math.floor((b+c)/2),f=this.yd[e],h=f.ta();
return h>a?this.HI(a,b,e-1):h+f.Vb()-1<a?this.HI(a,e+1,c):f};b.bc.prototype.cF=function(a,d,c){for(var e=0;e<this.yd.length;e++)if(this.yd[e].Lc()===a)return this.yd[e];a=new b.bc(a,d,c,this);this.yd.push(a);return a};b.bc.prototype.x6=function(){var a={};a[this.jr().attribute]=this.Lc();return a};b.bc.prototype.JW=function(a){for(var b=0;b<this.yd.length;b++)if(this.yd[b]===a){if(0<b)return this.yd[b-1];break}return null};b.cf=function(a,d,c){this.Init();this.axis=d;this.QY=[];for(d=0;d<a.length;d++)this.QY.push(c.oF(a[d],
this));this.zw=c;this.Bo=new b.bc(null,null,null,null)};o_("CubeAxis",b.cf,b);b.b.ga(b.cf,b.b,"oj.CubeAxis");b.cf.prototype.Init=function(){b.cf.q.Init.call(this)};b.cf.prototype.Xk=function(){return this.QY};b.b.g("CubeAxis.prototype.getLevels",{Xk:b.cf.prototype.Xk});b.cf.prototype.Vb=function(){return this.Bo.Vb()};b.b.g("CubeAxis.prototype.getExtent",{Vb:b.cf.prototype.Vb});b.cf.prototype.xm=function(a){for(var b=[],c=this.Bo;c;)(c=c.w6(a))&&b.push(c);return b};b.b.g("CubeAxis.prototype.getValues",
{xm:b.cf.prototype.xm});b.cf.prototype.Ii=function(a){a=a?JSON.parse(a):{};for(var b=this.Bo,c=null;b;)c=b,b=b.v6(a);return c?c.ta():-1};b.b.g("CubeAxis.prototype.getIndex",{Ii:b.cf.prototype.Ii});b.cf.prototype.Az=function(a,b){return this.WP(a,this.Xk().length-1,b)};b.cf.prototype.WP=function(a,b,c){a=this.xm(a);b=this.Xk()[b];for(var e=0;e<a.length;e++){var f=a[e];f.jr().Lu()?c.bF(f.Lc()):c.PF(f);if(f.jr()===b)break}return c};b.cf.prototype.mQ=function(a,b){return this.zw.as(this,0,this.Bo,a,b,
!0)};b.Xf=function(a,b,c,e,f){this.Init();this.i={};this.i.value=a;this.i.Qoa=b;this.i.SD=c;this.i.rows=e;this.i.fp=f};o_("CubeDataValue",b.Xf,b);b.b.ga(b.Xf,b.b,"oj.CubeDataValue");b.Xf.prototype.Init=function(){b.Xf.q.Init.call(this)};b.Xf.prototype.Lc=function(){switch(this.i.SD){case b.Wf.STDDEV:return Math.sqrt(this.kX());case b.Wf.VARIANCE:return this.kX();default:return this.i.value}};b.b.g("CubeDataValue.prototype.getValue",{Lc:b.Xf.prototype.Lc});b.Xf.prototype.c3=function(){return this.i.Qoa};
b.b.g("CubeDataValue.prototype.getIndices",{c3:b.Xf.prototype.c3});b.Xf.prototype.k3=function(){return this.i.rows};b.b.g("CubeDataValue.prototype.getRows",{k3:b.Xf.prototype.k3});b.Xf.prototype.H2=function(){return this.i.SD};b.b.g("CubeDataValue.prototype.getAggregation",{H2:b.Xf.prototype.H2});b.Xf.prototype.kX=function(){if(isNaN(this.i.fp))return NaN;var a=this.i.rows.length;return 1<a?this.i.fp/(a-1):0};b.Ri=function(a,d){var c=d.row?d.row.start:0,e=d.row?d.row.count:0,f=d.column?d.column.start:
0,h=d.column?d.column.count:0;b.l.jm(c,null);b.l.jm(e,null);b.l.jm(f,null);b.l.jm(h,null);this.zw=a;this.hM={row:c,column:f};this.Bo=this.zw.xm([{start:f,count:h},{start:c,count:e}]);h=this.Bo.length;0<h&&(e=this.Bo[0].length);this.Xaa={row:e,column:h}};o_("CubeCellSet",b.Ri,b);b.Ri.prototype.getData=function(a){return(a=this.Bo[a.column-this.hM.column][a.row-this.hM.row])?a.Lc():null};b.b.g("CubeCellSet.prototype.getData",{getData:b.Ri.prototype.getData});b.Ri.prototype.getMetadata=function(a){var b=
{keys:{}};b.keys.row=this.OV(a,"row",2);b.keys.column=this.OV(a,"column",1);return b};b.b.g("CubeCellSet.prototype.getMetadata",{getMetadata:b.Ri.prototype.getMetadata});b.Ri.prototype.OV=function(a,d,c){var e=this.zw.rm();return void 0!==a[d]&&e.length>=c?(c=new b.Si,c=e[b.Ib.nU(d)].Az(a[d],c),c.rp()[0].key):null};b.Ri.prototype.ta=function(a){return this.hM[a]};b.b.g("CubeCellSet.prototype.getStart",{ta:b.Ri.prototype.ta});b.Ri.prototype.R=function(a){return this.Xaa[a]};b.b.g("CubeCellSet.prototype.getCount",
{R:b.Ri.prototype.R});b.Zf=function(a,d,c){this.Init();this.Mn=c;this.mH();b.Zf.q.constructor.call(this,a,d)};o_("DataValueAttributeCube",b.Zf,b);b.b.ga(b.Zf,b.Wa,"oj.DataValueAttributeCube");b.Zf.prototype.qa=null;b.Zf.prototype.Init=function(){b.Zf.q.Init.call(this)};b.Zf.prototype.Mr=function(){b.Zf.q.Mr.call(this)};b.Zf.prototype.pF=function(a){return this.Us[a]};b.Zf.prototype.oF=function(a,d){return a.dataValue?new b.Og(null,d,!0):new b.Og(a.attribute,d,!1)};b.Zf.prototype.nF=function(a){return new b.Zf(null,
a,this.Mn)};b.Zf.prototype.as=function(a,b,c,e,f,h){if(b>=a.Xk().length)return f;var k=a.Xk()[b];if(k.Lu())return this.Qia(a,c,e,b,f);c=c.cF(e[k.attribute],null,k);h&&f.PF(c);return this.as(a,b+1,c,e,f,h)};b.Zf.prototype.Qia=function(a,b,c,e,f){for(var h=!0,k=0;k<this.Mn.length;k++){var l=this.Mn[k].attribute,m=this.Mn[k].label;c.hasOwnProperty(l)&&(m=b.cF(l,m,a.Xk()[e]),f.bF(l,c[l]),this.as(a,e+1,m,c,f,h),h=!1)}return f};b.Zf.prototype.mH=function(){this.Us=[];for(var a=0;a<this.Mn.length;a++){var d=
this.Mn[a];this.Us[d.attribute]=d.aggregation?{qu:d.aggregation,Db:d.callback}:{qu:b.Wf.SUM,Db:d.callback}}};b.Si=function(){this.FK=[];this.i=[]};b.Si.prototype.PF=function(a){this.FK.push(a)};b.Si.prototype.bF=function(a,b){this.i.push({name:a,value:b})};b.Si.prototype.rp=function(){var a=[],b=this.W$();if(0===this.i.length)a.push({key:JSON.stringify(b)});else for(var c=0;c<this.i.length;c++){var e=f.extend(!0,{},b);e[this.i[c].name]=this.i[c].name;a.push({key:JSON.stringify(e),q2:this.i[c].name,
value:this.i[c].value})}return a};b.Si.prototype.W$=function(){for(var a={},b=0;b<this.FK.length;b++){var c=this.FK[b].x6(),e;for(e in c)c.hasOwnProperty(e)&&(a[e]=c[e])}return a};b.Ne=function(a,b,c,e){this.zw=b;this.iw=a;this.Kh=void 0===c?0:c;this.Waa=void 0===e?this.iw.Vb():Math.min(e,this.iw.Vb()-c);this.oV=c+e-1};o_("CubeHeaderSet",b.Ne,b);b.Ne.prototype.getData=function(a,b){var c=this.rq(a,b);return c?c.MN():null};b.b.g("CubeHeaderSet.prototype.getData",{getData:b.Ne.prototype.getData});b.Ne.prototype.getMetadata=
function(a,d){var c=new b.Si,c=this.iw.WP(a,d,c);return(c=c.rp())&&0<c.length?{key:c[0].key}:null};b.b.g("CubeHeaderSet.prototype.getMetadata",{getMetadata:b.Ne.prototype.getMetadata});b.Ne.prototype.zg=function(){return this.iw.Xk().length};b.b.g("CubeHeaderSet.prototype.getLevelCount",{zg:b.Ne.prototype.zg});b.Ne.prototype.Vb=function(a,b){var c=this.rq(a,b),e=c.Vb(),c=c.ta(),f=c+e-1,h=a<c+e-1;c<this.Kh&&(e-=this.Kh-c);f>this.oV&&(e-=f-this.oV);return{extent:e,more:{before:a>c,after:h}}};b.b.g("CubeHeaderSet.prototype.getExtent",
{Vb:b.Ne.prototype.Vb});b.Ne.prototype.le=function(a,b){return this.rq(a,b).le()};b.b.g("CubeHeaderSet.prototype.getDepth",{le:b.Ne.prototype.le});b.Ne.prototype.R=function(){return this.Waa};b.b.g("CubeHeaderSet.prototype.getCount",{R:b.Ne.prototype.R});b.Ne.prototype.ta=function(){return this.Kh};b.b.g("CubeHeaderSet.prototype.getStart",{ta:b.Ne.prototype.ta});b.Ne.prototype.rq=function(a,b){void 0===b&&(b=0);var c=this.iw.xm(a);return c&&c.length>b?c[b]:null};b.Ib=function(a){b.Ib.q.constructor.call(this,
a)};o_("CubeDataGridDataSource",b.Ib,b);b.b.ga(b.Ib,b.Ym,"oj.CubeDataGridDataSource");b.Ib.prototype.i5=function(a){this.data=a;this.FV()};b.b.g("CubeDataGridDataSource.prototype.setCube",{i5:b.Ib.prototype.i5});b.Ib.prototype.setPage=function(a){this.data.setPage(a);this.FV()};b.b.g("CubeDataGridDataSource.prototype.setPage",{setPage:b.Ib.prototype.setPage});b.Ib.prototype.FV=function(){this.handleEvent("change",{source:this,operation:"refresh"})};b.Ib.prototype.R=function(a){return(a=this.fq(a))?
a.Vb():0};b.b.g("CubeDataGridDataSource.prototype.getCount",{R:b.Ib.prototype.R});b.Ib.prototype.xg=function(){return"exact"};b.b.g("CubeDataGridDataSource.prototype.getCountPrecision",{xg:b.Ib.prototype.xg});b.Ib.prototype.Kf=function(a,d,c){var e=new b.Ne(this.fq(a.axis),this.data,a.start,a.count);d.success.call(c?c.success:void 0,e,a)};b.b.g("CubeDataGridDataSource.prototype.fetchHeaders",{Kf:b.Ib.prototype.Kf});b.Ib.prototype.wg=function(a,d,c){for(var e={},f=0;f<a.length;f++){var h=void 0===
a[f].start?0:a[f].start;if("row"===a[f].axis){var k=void 0===a[f].count?this.data.rm()[1].Vb():a[f].count;e.row={start:h,count:k}}"column"===a[f].axis&&(k=void 0===a[f].count?this.data.rm()[0].Vb():a[f].count,e.column={start:h,count:k})}e=new b.Ri(this.data,e);d.success.call(c?c.success:void 0,e,a)};b.b.g("CubeDataGridDataSource.prototype.fetchCells",{wg:b.Ib.prototype.wg});b.Ib.prototype.keys=function(a){var b={},b=this.Tn(a,"row",b),b=this.Tn(a,"column",b);return Promise.resolve(b)};b.b.g("CubeDataGridDataSource.prototype.keys",
{keys:b.Ib.prototype.keys});b.Ib.prototype.Tn=function(a,d,c){var e=this.fq(d);a=a[d];var f=new b.Si,f=e?e.Az(a,f):"";c[d]=f.rp()[0].key;return c};b.Ib.prototype.Cg=function(a){var b={},b=this.bh(a,"row",b),b=this.bh(a,"column",b);return Promise.resolve(b)};b.b.g("CubeDataGridDataSource.prototype.indexes",{Cg:b.Ib.prototype.Cg});b.Ib.prototype.bh=function(a,b,c){c[b]=this.fq(b).Ii(a[b]);return c};b.Ib.prototype.sort=function(){b.l.Zb()};b.b.g("CubeDataGridDataSource.prototype.sort",{sort:b.Ib.prototype.sort});
b.Ib.prototype.move=function(){b.l.Zb()};b.b.g("CubeDataGridDataSource.prototype.move",{move:b.Ib.prototype.move});b.Ib.prototype.qd=function(){return"invalid"};b.b.g("CubeDataGridDataSource.prototype.moveOK",{qd:b.Ib.prototype.qd});b.Ib.prototype.getCapability=function(a){switch(a){case "sort":return"none";case "move":return"none"}return null};b.b.g("CubeDataGridDataSource.prototype.getCapability",{getCapability:b.Ib.prototype.getCapability});b.Ib.nU=function(a){return"row"===a?1:0};b.Ib.prototype.fq=
function(a){a=b.Ib.nU(a);var d=this.data.rm();return d.length>a?d[a]:null};b.Yf=function(a,d,c){this.Init();this.Mn=c;this.wma=c.valueAttr;this.sha=c.labelAttr;var e=c.defaultAggregation;this.JU=e?b.Yf.sda(e):{qu:b.Wf.SUM};this.bH=c.aggregation;this.mH();b.Yf.q.constructor.call(this,a,d)};o_("DataColumnCube",b.Yf,b);b.b.ga(b.Yf,b.Wa,"oj.DataColumnCube");b.Yf.prototype.Init=function(){b.Yf.q.Init.call(this)};b.Yf.prototype.Mr=function(){b.Yf.q.Mr.call(this)};b.Yf.prototype.pF=function(a){return this.Us[a]?
this.Us[a]:this.JU};b.Yf.prototype.nF=function(a){return new b.Yf(null,a,this.Mn)};b.Yf.prototype.oF=function(a,d){return a.attribute===this.sha?new b.Og(a.attribute,d,!0):new b.Og(a.attribute,d,!1)};b.Yf.prototype.as=function(a,b,c,e,f,h){if(b>=a.Xk().length)return f;var k=a.Xk()[b],l=e[k.attribute];c=c.cF(l,null,k);k.Lu()?f.bF(l,e[this.wma]):f.PF(c);return this.as(a,b+1,c,e,f,h)};b.Yf.sda=function(a){return b.Fa.od(a)?{qu:a}:{qu:a.aggregation,Db:a.callback}};b.Yf.prototype.mH=function(){this.Us=
[];if(this.bH)for(var a=0;a<this.bH.length;a++){var b=this.bH[a],c=b.aggregation;this.Us[b.value]=c?{qu:c,Db:b.callback}:this.JU}};b.Og=function(a,b,c){this.Init();this.attribute=a;this.qT=b;this.axis=b.axis;this.IU=c};o_("CubeLevel",b.Og,b);b.b.ga(b.Og,b.b,"oj.CubeLevel");b.Og.prototype.Init=function(){b.Og.q.Init.call(this)};b.Og.prototype.Lc=function(a){if(a=this.qT.xm(a))for(var b=0;b<a.length;b++)if(a[b].jr()===this)return a[b];return null};b.b.g("CubeLevel.prototype.getValue",{Lc:b.Og.prototype.Lc});
b.Og.prototype.Lu=function(){return this.IU};b.b.g("CubeLevel.prototype.isDataValue",{Lu:b.Og.prototype.Lu});b.Og.prototype.IU=!1;b.Og.prototype.qT=null});