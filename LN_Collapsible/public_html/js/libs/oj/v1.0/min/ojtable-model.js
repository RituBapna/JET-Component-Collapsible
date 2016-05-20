/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojmodel","ojs/ojdatacollection-common","ojs/ojtable"],function(a,f){a.rb=function(c,b){a.rb._init(this,c,b,null)};o_("ModelRow",a.rb,a);a.b.ra(a.rb,a.cb,"ModelRow.ModelRow");a.rb.prototype.Init=function(){a.cb.t.Init.call(this)};a.rb.prototype.attributes={};a.b.g("ModelRow.prototype.attributes",{attributes:a.rb.prototype.attributes});a.rb.prototype.id=null;a.b.g("ModelRow.prototype.id",{id:a.rb.prototype.id});a.rb.prototype.Oe=null;a.b.g("ModelRow.prototype.idAttribute",
{Oe:a.rb.prototype.Oe});a.rb._init=function(a,b,d,e){var f=null;a.Init();a.Gj=b;a.id=b.id;a.Oe=b.Oe;a.attributes=b.attributes;a.index=b.index;d=d||{};for(f in e)e.hasOwnProperty(f)&&(a[f]=e[f]);a.context=d.context};a.rb.prototype.clone=function(){return this.Gj.clone()};a.b.g("ModelRow.prototype.clone",{clone:a.rb.prototype.clone});a.rb.prototype.get=function(a){return this.Gj.get(a)};a.b.g("ModelRow.prototype.get",{get:a.rb.prototype.get});a.rb.prototype.Px=function(){return this.Gj};a.b.g("ModelRow.prototype.getModel",
{Px:a.rb.prototype.Px});a.rb.prototype.set=function(a,b,d){return this.Gj.set(a,b,d)};a.b.g("ModelRow.prototype.set",{set:a.rb.prototype.set});a.rb.prototype.keys=function(){return this.Gj.keys()};a.b.g("ModelRow.prototype.keys",{keys:a.rb.prototype.keys});a.rb.prototype.values=function(){return this.Gj.values()};a.b.g("ModelRow.prototype.values",{values:a.rb.prototype.values});a.rb.prototype.pairs=function(){return this.Gj.pairs()};a.b.g("ModelRow.prototype.pairs",{pairs:a.rb.prototype.pairs});a.za=
function(c,b){a.za._init(this,c,b,null)};o_("CollectionRowSet",a.za,a);a.za.prototype.gf=null;a.b.g("CollectionRowSet.prototype.comparator",{gf:a.za.prototype.gf});a.za.prototype.bm=null;a.b.g("CollectionRowSet.prototype.sortDirection",{bm:a.za.prototype.bm});a.za.prototype.Tf=!0;a.b.g("CollectionRowSet.prototype.sortSupported",{Tf:a.za.prototype.Tf});a.b.ra(a.za,a.Q,"CollectionRowSet.CollectionRowSet");a.za.prototype.Init=function(){a.za.t.Init.call(this)};a.za._init=function(a,b,d,e){var f;a.Wb=
[];a.O=0;a.Init();if(e)for(f in e)e.hasOwnProperty(f)&&(a[f]=e[f]);a.Gb=b;a.nM()};a.za.prototype.at=function(c,b){var d=this.Gb.at(c,b);return null!=d?d instanceof a.q?new a.rb(d):a.b.la(function(b){d.then(function(c){b(new a.rb(c))})}):null};a.b.g("CollectionRowSet.prototype.at",{at:a.za.prototype.at});a.za.prototype.fetch=function(a){if(this.gN.call(this)){this.Xw.call(this);a=a||{};var b=this,d=null!=a.startIndex?!0:!1;this.O=d?a.startIndex:0;this.bR=!0;var e=0<a.pageSize?a.pageSize:-1;a.pageSize=
e;a.startIndex=this.O;a.refresh=!0;d?this.Gb.Os(this.O,e).then(function(){b.Hf.call(b,a,null)}):this.Gb.fetch({success:function(d){b.Gb=d;b.Hf.call(b,a,null)},error:function(d,e){b.Gb=d;b.Hf.call(b,a,e)}})}};a.b.g("CollectionRowSet.prototype.fetch",{fetch:a.za.prototype.fetch});a.za.prototype.get=function(c,b){return new a.rb(this.Gb.get(c,b))};a.b.g("CollectionRowSet.prototype.get",{get:a.za.prototype.get});a.za.prototype.getCollection=function(){return this.Gb};a.b.g("CollectionRowSet.prototype.getCollection",
{getCollection:a.za.prototype.getCollection});a.za.prototype.hasMore=function(){return this.Gb.hasMore};a.b.g("CollectionRowSet.prototype.hasMore",{hasMore:a.za.prototype.hasMore});a.za.prototype.indexOf=function(a,b){return this.Gb.indexOf(a.Px(),b)};a.b.g("CollectionRowSet.prototype.indexOf",{indexOf:a.za.prototype.indexOf});a.za.prototype.isEmpty=function(){return this.Gb.isEmpty()};a.b.g("CollectionRowSet.prototype.isEmpty",{isEmpty:a.za.prototype.isEmpty});a.za.prototype.size=function(){var a=
this.Gb.size();return this.bR||this.Gb.by(0,a)?a:0};a.b.g("CollectionRowSet.prototype.size",{size:a.za.prototype.size});a.za.prototype.sort=function(){this.comparator&&(this.Gb.comparator=this.comparator);this.sortDirection&&(this.Gb.sortDirection="ascending"===this.sortDirection?1:-1);return this.Gb.sort(null)};a.b.g("CollectionRowSet.prototype.sort",{sort:a.za.prototype.sort});a.za.prototype.totalSize=function(){return this.Gb.totalResults};a.b.g("CollectionRowSet.prototype.totalSize",{totalSize:a.za.prototype.totalSize});
a.za.prototype.gK=function(a){if(null==a)this.comparator=null,this.Gb.comparator=null;else{var b=a.key;a=a.direction;var d=null;this.Gb.$a()?(this.comparator=b,this.sortDirection=a):("ascending"==a?d=function(a){return f.isFunction(a.get)?a.get(b):a[b]()}:"descending"==a&&(d=function(a,c){var d,k;f.isFunction(a.get)?(d=a.get(b),k=c.get(b)):(d=a[b](),k=c[b]());return d===k?0:d>k?-1:1}),this.comparator=d)}};a.za.prototype.nM=function(){var c=this;this.Gb.on(a.X.v.SYNC,function(b){a.za.t.Mb.call(c,a.Q.v.SYNC,
b)});this.Gb.on(a.X.v.ADD,function(b){a.za.t.Mb.call(c,a.Q.v.ADD,new a.rb(b))});this.Gb.on(a.X.v.REMOVE,function(b){a.za.t.Mb.call(c,a.Q.v.REMOVE,new a.rb(b))});this.Gb.on(a.X.v.RESET,function(b){a.za.t.Mb.call(c,a.Q.v.RESET,b)});this.Gb.on(a.X.v.SORT,function(b,d){null!=d&&d.add||a.za.t.Mb.call(c,a.Q.v.SORT,b)});this.Gb.on(a.X.v.CHANGE,function(b){a.za.t.Mb.call(c,a.Q.v.CHANGE,new a.rb(b))});this.Gb.on(a.X.v.DESTROY,function(b){a.za.t.Mb.call(c,a.Q.v.REMOVE,b)});this.Gb.on(a.X.v.REFRESH,function(b){a.za.t.Mb.call(c,
a.Q.v.REFRESH,b)});this.Gb.on(a.X.v.ERROR,function(b){a.za.t.Mb.call(c,a.Q.v.ERROR,b);c.Hf.call(c,null,null)})};a.za.prototype.gN=function(){return!this.MD};a.za.prototype.Xw=function(){this.MD=!0;a.za.t.Mb.call(this,a.Q.v.REQUEST,null)};a.za.prototype.Hf=function(c,b){c=c||{};var d=c.success,e=c.error;this.MD=!1;null!=b?(a.za.t.Mb.call(this,a.Q.v.ERROR,b),e&&e.call(this,c,b)):(a.za.t.Mb.call(this,a.Q.v.SYNC,c),d&&d.call(this,c))};a.ac=function(c,b){this.data={};if(!(c instanceof a.l))throw Error(a.F.Ac._ERR_DATA_INVALID_TYPE_SUMMARY+
"\n"+a.F.Ac._ERR_DATA_INVALID_TYPE_DETAIL);a.ac.t.constructor.call(this,c,b);this.ba=new a.za(c,this.options);this.Im();this.Init();if(null!=b&&("enabled"==b.startFetch||null==b.startFetch)||null==b)this.Xn=!0};o_("CollectionTableDataSource",a.ac,a);a.b.ra(a.ac,a.F,"oj.CollectionTableDataSource");a.ac.prototype.Init=function(){a.ac.t.Init.call(this)};a.b.g("CollectionTableDataSource.prototype.Init",{Init:a.ac.prototype.Init});a.ac.prototype.at=function(a){return this.ba.at(a)};a.b.g("CollectionTableDataSource.prototype.at",
{at:a.ac.prototype.at});a.ac.prototype.fetch=function(c){c=c||{};var b=this,d=c.success,e=c.error,f=null==c.context?this:c.context;if("init"==c.fetchType&&!this.Xn)return a.b.la(function(a){a()});null!=c.startIndex&&a.ac.t.startIndex.call(this,c.startIndex);return a.b.la(function(a,k){c.success=function(){null!=d&&d.call(f,b,c);a()};c.error=function(a,c){null!=e&&e.call(f,b,a,c);k()};"enabled"==c.startFetch?(b.ba.isEmpty()||"undefined"===typeof b.ba.size())&&b.ba.fetch(c):b.ba.fetch(c)})};a.b.g("CollectionTableDataSource.prototype.fetch",
{fetch:a.ac.prototype.fetch});a.ac.prototype.get=function(a){return this.ba.get(a)};a.b.g("CollectionTableDataSource.prototype.get",{get:a.ac.prototype.get});a.ac.prototype.hasMore=function(){return null!=this.ba?this.ba.hasMore():!1};a.b.g("CollectionTableDataSource.prototype.hasMore",{hasMore:a.ac.prototype.hasMore});a.ac.prototype.indexOf=function(a){return this.ba.indexOf(a)};a.b.g("CollectionTableDataSource.prototype.indexOf",{indexOf:a.ac.prototype.indexOf});a.ac.prototype.size=function(){return this.ba.size()};
a.b.g("CollectionTableDataSource.prototype.size",{size:a.ac.prototype.size});a.ac.prototype.sort=function(c){this.ba.gK(c);if(null==c)return a.b.la(function(a){a()});var b=this;return a.b.la(function(a){b.ba.sort();a()})};a.b.g("CollectionTableDataSource.prototype.sort",{sort:a.ac.prototype.sort});a.ac.prototype.totalSize=function(){return this.ba.totalSize()};a.b.g("CollectionTableDataSource.prototype.totalSize",{totalSize:a.ac.prototype.totalSize});a.ac.prototype.Im=function(){var c=this;this.ba.on(a.Q.v.ADD,
function(b){c.Vc=!1;a.F.t.handleEvent.call(c,a.F.v.ADD,b)});this.ba.on(a.Q.v.REMOVE,function(b){c.Vc=!1;a.F.t.handleEvent.call(c,a.F.v.REMOVE,b)});this.ba.on(a.Q.v.REQUEST,function(b){c.Vc=!0;a.F.t.handleEvent.call(c,a.F.v.REQUEST,b)});this.ba.on(a.Q.v.RESET,function(b){c.Vc=!1;a.F.t.handleEvent.call(c,a.F.v.RESET,b)});this.ba.on(a.Q.v.REFRESH,function(b){c.Vc=!1;a.F.t.handleEvent.call(c,a.F.v.REFRESH,b)});this.ba.on(a.Q.v.SORT,function(b){c.Vc=!1;a.F.t.handleEvent.call(c,a.F.v.SORT,b)});this.ba.on(a.Q.v.CHANGE,
function(b){c.Vc=!1;a.F.t.handleEvent.call(c,a.F.v.CHANGE,b)});this.ba.on(a.Q.v.SYNC,function(b){c.Vc=!1;a.F.t.handleEvent.call(c,a.F.v.SYNC,b)});this.ba.on(a.Q.v.ERROR,function(b){c.Vc=!1;a.F.t.handleEvent.call(c,a.F.v.ERROR,b)})}});
//# sourceMappingURL=oj-modular.map