/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojdatasource-common","ojs/ojrowexpander"],function(b){b.ef=function(f,a,d,c,e){b.l.wy(d);this.ac=f;this.re=a;this.CE=d;this.zb=c;this.Fg=e};o_("FlattenedTreeHeaderSet",b.ef,b);b.ef.prototype.getData=function(f,a){var d;b.l.assert(f<=this.re&&f>=this.ac,"index out of bounds");b.l.assert(null==a||0==a,"level out of bounds");return null!=this.Fg&&null!=this.zb?(d=this.zb.getData(f-this.ac+this.zb.ta()),null!=d?d.get?d.get(this.Fg):d[this.Fg]:null):this.CE[f]};b.b.g("FlattenedTreeHeaderSet.prototype.getData",
{getData:b.ef.prototype.getData});b.ef.prototype.getMetadata=function(f,a){b.l.assert(f<=this.re&&f>=this.ac,"index out of bounds");b.l.assert(null==a||0==a,"level out of bounds");return null!=this.Fg&&null!=this.zb?this.zb.getMetadata(f-this.ac+this.zb.ta()):{key:this.getData(f)}};b.b.g("FlattenedTreeHeaderSet.prototype.getMetadata",{getMetadata:b.ef.prototype.getMetadata});b.ef.prototype.R=function(){return null!=this.Fg&&null!=this.zb?Math.min(this.zb.R(),this.re-this.ac):Math.max(0,this.re-this.ac)};
b.b.g("FlattenedTreeHeaderSet.prototype.getCount",{R:b.ef.prototype.R});b.ef.prototype.zg=function(){return 0<this.R()?1:0};b.b.g("FlattenedTreeHeaderSet.prototype.getLevelCount",{zg:b.ef.prototype.zg});b.ef.prototype.Vb=function(f,a){b.l.assert(f<=this.re&&f>=this.ac,"index out of bounds");b.l.assert(null==a||0==a,"level out of bounds");return{extent:1,more:{before:!1,after:!1}}};b.b.g("FlattenedTreeHeaderSet.prototype.getExtent",{Vb:b.ef.prototype.Vb});b.ef.prototype.le=function(f,a){b.l.assert(f<=
this.re&&f>=this.ac,"index out of bounds");b.l.assert(null==a||0==a,"level out of bounds");return 1};b.b.g("FlattenedTreeHeaderSet.prototype.getDepth",{le:b.ef.prototype.le});b.Wh=function(f,a,d,c,e,g){b.l.wy(g);this.Mi=f;this.rr=a;this.hl=d;this.qr=c;this.zb=e;this.Td=g};o_("FlattenedTreeCellSet",b.Wh,b);b.Wh.prototype.getData=function(f){var a;a=this.MW(f);if(null==a)return null;f=a[0];a=a[1];b.l.assert(f<this.zb.ta()+this.zb.R()&&a<this.Td.length);a=this.Td[a];f=this.zb.getData(f);return null!=
f?f.get?f.get(a):f[a]:null};b.b.g("FlattenedTreeCellSet.prototype.getData",{getData:b.Wh.prototype.getData});b.Wh.prototype.getMetadata=function(f){var a;a=this.MW(f);if(null==a)return null;f=a[0];a=a[1];b.l.assert(f<this.zb.ta()+this.zb.R()&&a<this.Td.length);a=this.Td[a];f=this.zb.getMetadata(f);f.keys={row:f.key,column:a};return f};b.b.g("FlattenedTreeCellSet.prototype.getMetadata",{getMetadata:b.Wh.prototype.getMetadata});b.Wh.prototype.MW=function(f){var a;b.l.Hf(f);if(null==this.zb||0==this.zb.length)return null;
a=f.row-this.Mi+this.zb.ta();f=f.column;b.l.jm(a,null);b.l.jm(f,null);b.l.assert(0<=a&&0<=f);return[a,f]};b.Wh.prototype.ta=function(b){return"row"===b?this.Mi:"column"===b?this.hl:0};b.b.g("FlattenedTreeCellSet.prototype.getStart",{ta:b.Wh.prototype.ta});b.Wh.prototype.R=function(b){return"row"===b?Math.min(this.rr-this.Mi,this.zb.R()):"column"===b?this.qr-this.hl:0};b.b.g("FlattenedTreeCellSet.prototype.getCount",{R:b.Wh.prototype.R});b.$a=function(f,a){b.$a.q.constructor.call(this,f,a)};o_("FlattenedTreeDataGridDataSource",
b.$a,b);b.b.ga(b.$a,b.ca,"oj.FlattenedTreeDataGridDataSource");b.$a.prototype.Init=function(){b.$a.q.Init.call(this);this.Td=b.$a.q.Ly.call(this,"columns");this.Fg=b.$a.q.Ly.call(this,"rowHeader")};b.b.g("FlattenedTreeDataGridDataSource.prototype.Init",{Init:b.$a.prototype.Init});b.$a.prototype.xg=function(b){return"row"===b?"estimate":"actual"};b.b.g("FlattenedTreeDataGridDataSource.prototype.getCountPrecision",{xg:b.$a.prototype.xg});b.$a.prototype.R=function(b){return"row"===b?-1:"column"===b?
this.Td.length:0};b.b.g("FlattenedTreeDataGridDataSource.prototype.getCount",{R:b.$a.prototype.R});b.$a.prototype.Kf=function(f,a,d){var c,e;c=f.axis;if("column"===c)c=f.start+f.count,c>this.R("column")&&(c=this.R("column")-f.start),e=new b.ef(f.start,c,this.Td);else if("row"===c){if(null!=this.Fg){this.fl={range:f,callbacks:a,callbackObjects:d};return}e=new b.Gd(f.start,f.start,c,null)}null!=e&&null!=a&&null!=a.success&&(null==d&&(d={}),a.success.call(d.success,e,f))};b.b.g("FlattenedTreeDataGridDataSource.prototype.fetchHeaders",
{Kf:b.$a.prototype.Kf});b.$a.prototype.wg=function(f,a,d){var c,e,g,h;for(c=0;c<f.length;c++)if(e=f[c],"row"==e.axis){g=e.start;h=e.count;break}b.$a.q.Vk.call(this,{start:g,count:h},{success:function(b){this.VJ(b,f,a,d,0)}.bind(this),error:function(b){this.nfa(b,{start:g,count:h},a,d)}.bind(this)})};b.b.g("FlattenedTreeDataGridDataSource.prototype.fetchCells",{wg:b.$a.prototype.wg});b.$a.prototype.keys=function(f){var a,d;a=f.row;d=f.column;return new Promise(function(c){a>b.$a.q.$na.call(this).end||
d>this.Td.length?c(null):c({row:b.$a.q.getKey.call(this,a),column:this.Td[d]})}.bind(this))};b.b.g("FlattenedTreeDataGridDataSource.prototype.keys",{keys:b.$a.prototype.keys});b.$a.prototype.Cg=function(f){var a,d,c,e,g;c=f.row;e=f.column;return new Promise(function(f){a=b.$a.q.Ii.call(this,c);for(g=0;g<this.Td.length;g++)if(this.Td[g]===e){d=g;break}0<=a||0<=d?f({row:a,column:d}):f(null)}.bind(this))};b.b.g("FlattenedTreeDataGridDataSource.prototype.indexes",{Cg:b.$a.prototype.Cg});b.$a.prototype.sort=
function(f,a,d){return b.$a.q.getWrappedDataSource.call(this).sort(f,{success:function(){this.Ufa(a,d)}.bind(this),error:a.error})};b.b.g("FlattenedTreeDataGridDataSource.prototype.sort",{sort:b.$a.prototype.sort});b.$a.prototype.Ufa=function(b,a){this.refresh();b.success&&(null==a&&(a={}),b.success.call(a.success))};b.$a.prototype.move=function(f,a,d,c){b.$a.q.getWrappedDataSource.call(this).move(f,a,d,c)};b.b.g("FlattenedTreeDataGridDataSource.prototype.move",{move:b.$a.prototype.move});b.$a.prototype.getCapability=
function(f){return"default"===b.$a.q.getWrappedDataSource.call(this).getCapability(f)?"column":"none"};b.b.g("FlattenedTreeDataGridDataSource.prototype.getCapability",{getCapability:b.$a.prototype.getCapability});b.$a.prototype.Sy=function(f,a){b.$a.q.Sy.call(this,f,a)};b.$a.prototype.VJ=function(f,a,d,c){var e,g,h,k,l,m;for(e=0;e<a.length;e++)g=a[e],"row"==g.axis?(h=g.start,k=g.count):"column"==g.axis&&(l=g.start,m=g.count,l+m>this.R("column")&&(m=this.R("column")-l));this.fl&&(e=this.fl.range,e.start==
h&&e.count==k&&this.aK(f,e,this.fl.callbacks,this.fl.callbackObjects),this.fl=null);f=new b.Wh(h,h+k,l,l+m,f,this.Td);d.success&&(null==c&&(c={}),d.success.call(c.success,f,a))};b.$a.prototype.nfa=function(b,a,d,c){var e;this.fl&&(e=this.fl.range,e.start==a.start&&e.count==a.count&&(a=this.fl.callbacks,e=this.fl.callbackObjects,a.error&&(null==e&&(e={}),a.error.call(e.error,b))),this.fl=null);d.error&&(null==c&&(c={}),d.success.call(c.error,b))};b.$a.prototype.aK=function(f,a,d,c){f=new b.ef(a.start,
a.start+a.count,this.Td,f,this.Fg);d.success&&(null==c&&(c={}),d.success.call(c.success,f,a))};b.$a.prototype.uE=function(f,a,d){var c,e,g,h;c=null;this.Fg&&(c=new b.ef(f,f+d.R(),this.Td,d,this.Fg));a=new b.Wh(f,f+d.R(),0,this.Td.length,d,this.Td);g=[];h=[];for(e=0;e<d.R();e++)g.push({row:this.ah(f+e).key}),h.push({row:f+e,column:-1});f={source:this,operation:"insert"};f.result=a;c&&(f.header=c);f.keys=g;f.indexes=h;b.$a.q.handleEvent.call(this,"change",f)};b.$a.prototype.SE=function(f){var a,d,c;
a=[];c=[];for(d=0;d<f.length;d++)a.push({row:f[d].key}),c.push({row:f[d].index,column:-1});f={source:this,operation:"delete"};f.keys=a;f.indexes=c;b.$a.q.handleEvent.call(this,"change",f)};b.$a.prototype.XN=function(f,a){a.success.call(null,new b.Pe(null,f.start))}});